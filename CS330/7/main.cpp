#include <iostream>
#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>
#include <glm/gtx/string_cast.hpp>
#define STB_IMAGE_IMPLEMENTATION
#include <stb_image.h>      // Image loading Utility functions

// Vertex Shader Source Code
const char *vertexShaderSource = R"(
#version 330 core
layout (location = 0) in vec3 aPos;
layout(location = 1) in vec2 aTexCoord; // Add this line
layout(location = 2) in vec3 aNormal;   // Add this line

out vec2 TexCoord;
out vec3 Normal;

void main()
{
    gl_Position = projection * view * model * vec4(aPos, 1.0);
    TexCoord = aTexCoord;
    Normal = aNormal;
}
)";

// Fragment Shader Source Code
const char *fragmentShaderSource = R"(
#version 330 core
out vec4 FragColor;
in vec2 TexCoord;
in vec3 Normal;

uniform vec3 lightPos;
uniform vec3 viewPos;
uniform sampler2D objectTexture;

void main() {
    vec3 norm = normalize(Normal);
    vec3 lightDir = normalize(lightPos - FragPos);
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 reflectDir = reflect(-lightDir, norm);
    vec3 viewDir = normalize(viewPos - FragPos);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32);
    vec3 diffuse = diff * texture(objectTexture, TexCoord).rgb;
    vec3 specular = spec * vec3(1.0, 1.0, 1.0);  // White specular highlights
    vec4 result = vec4((ambient + diffuse + specular), 1.0);
    FragColor = result;
}
)";

// Function for compiling shaders
GLuint compileShader(GLenum type, const char *source)
{
    GLuint shader = glCreateShader(type);
    glShaderSource(shader, 1, &source, nullptr);
    glCompileShader(shader);
    GLint success;
    glGetShaderiv(shader, GL_COMPILE_STATUS, &success);
    if (!success)
    {
        char infoLog[512];
        glGetShaderInfoLog(shader, 512, nullptr, infoLog);
        std::cerr << "Shader compilation failed: " << infoLog << std::endl;
    }
    return shader;
}

// Define a function to draw a cube
void drawCube(GLuint VAO, GLuint shaderProgram, glm::mat4 model)
{
    glUseProgram(shaderProgram);
    GLuint modelLoc = glGetUniformLocation(shaderProgram, "model");
    glUniformMatrix4fv(modelLoc, 1, GL_FALSE, glm::value_ptr(model));
    glBindVertexArray(VAO);
    glDrawElements(GL_TRIANGLES, 36, GL_UNSIGNED_INT, 0);
}

int main()
{
    // Initialize GLFW
    if (!glfwInit())
    {
        std::cerr << "Failed to initialize GLFW" << std::endl;
        return -1;
    }

    // Create a windowed mode window and its OpenGL context
    GLFWwindow *window = glfwCreateWindow(800, 600, "3D Scene", nullptr, nullptr);
    if (!window)
    {
        std::cerr << "Failed to create GLFW window" << std::endl;
        glfwTerminate();
        return -1;
    }

    // Make the window's context current
    glfwMakeContextCurrent(window);

    // Initialize GLEW
    glewExperimental = GL_TRUE;
    if (glewInit() != GLEW_OK)
    {
        std::cerr << "Failed to initialize GLEW" << std::endl;
        return -1;
    }

    // Compile and link shaders
    GLuint vertexShader = compileShader(GL_VERTEX_SHADER, vertexShaderSource);
    GLuint fragmentShader = compileShader(GL_FRAGMENT_SHADER, fragmentShaderSource);
    GLuint shaderProgram = glCreateProgram();
    glAttachShader(shaderProgram, vertexShader);
    glAttachShader(shaderProgram, fragmentShader);
    glLinkProgram(shaderProgram);

    GLint success;
    glGetProgramiv(shaderProgram, GL_LINK_STATUS, &success);
    if (!success)
    {
        char infoLog[512];
        glGetProgramInfoLog(shaderProgram, 512, nullptr, infoLog);
        std::cerr << "Shader program linking failed: " << infoLog << std::endl;
    }

    glDeleteShader(vertexShader);
    glDeleteShader(fragmentShader);

    // Load texture
    int width, height, channels;
    unsigned char* data = stbi_load("path_to_your_image.png", &width, &height, &channels, 0);
    if (data)
    {
        // ... use image data ...
        stbi_image_free(data);
    }
    else
    {
        std::cerr << "Failed to load image: " << stbi_failure_reason() << std::endl;
    }
    GLuint texture;
    glGenTextures(1, &texture);
    glBindTexture(GL_TEXTURE_2D, texture);

    // Set light properties
    glUseProgram(shaderProgram);
    glUniform3f(glGetUniformLocation(shaderProgram, "lightPos"), 1.2f, 1.0f, 2.0f);
    glUniform3f(glGetUniformLocation(shaderProgram, "viewPos"), 0.0f, 0.0f, 3.0f);


    // Define vertex data
    float vertices[] = {
        // Position
        0.0f, 0.5f, 0.0f, 1.0f, 1.0f,    // Top
        -0.5f, -0.5f, -0.5f, 0.0f, 0.0f, // Bottom Left Back
        0.5f, -0.5f, -0.5f,              // Bottom Right Back
        -0.5f, -0.5f, 0.5f,              // Bottom Left Front
        0.5f, -0.5f, 0.5f                // Bottom Right Front
    };

    unsigned int indices[] = {
        0, 1, 2,
        0, 2, 4,
        0, 4, 3,
        0, 3, 1,
        1, 3, 4,
        1, 4, 2};

    GLuint VBO, VAO, EBO;
    glGenVertexArrays(1, &VAO);
    glGenBuffers(1, &VBO);
    glGenBuffers(1, &EBO);

    // Bind VAO
    glBindVertexArray(VAO);

    // Bind and set vertex buffer
    glBindBuffer(GL_ARRAY_BUFFER, VBO);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

    // Bind and set element buffer
    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

    // Configure vertex attributes
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)0); // updated stride
    glEnableVertexAttribArray(0);
    glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)(3 * sizeof(float))); // new line for texture coords
    glEnableVertexAttribArray(1);

    // Unbind
    glBindBuffer(GL_ARRAY_BUFFER, 0);
    glBindVertexArray(0);

    // Define a projection matrix:
    glm::mat4 projection = glm::perspective(glm::radians(45.0f), 800.0f / 600.0f, 0.1f, 100.0f);

    // Main render loop
    while (!glfwWindowShouldClose(window))
    {
        // Clear
        glClearColor(0.2f, 0.3f, 0.3f, 1.0f);
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT); // Also clear the depth buffer

        // Use shader program
        glUseProgram(shaderProgram);
        
        // Pass the projection matrix to the shader
        GLuint projectionLoc = glGetUniformLocation(shaderProgram, "projection");
        glUniformMatrix4fv(projectionLoc, 1, GL_FALSE, glm::value_ptr(projection));


        // Draw table
        glm::mat4 tableModel = glm::mat4(1.0f);
        tableModel = glm::translate(tableModel, glm::vec3(0.0f, -0.5f, 0.0f));
        tableModel = glm::scale(tableModel, glm::vec3(1.0f, 0.1f, 1.0f));
        glUniformMatrix4fv(glGetUniformLocation(shaderProgram, "model"), 1, GL_FALSE, glm::value_ptr(tableModel));
        glBindVertexArray(VAO);
        glDrawElements(GL_TRIANGLES, 36, GL_UNSIGNED_INT, 0); // Note: The index count is 36 for a cube

        // Draw chair1
        glm::mat4 chair1Model = glm::mat4(1.0f);
        chair1Model = glm::translate(chair1Model, glm::vec3(0.6f, -0.8f, 0.0f));
        chair1Model = glm::scale(chair1Model, glm::vec3(0.4f, 0.4f, 0.4f));
        glUniformMatrix4fv(glGetUniformLocation(shaderProgram, "model"), 1, GL_FALSE, glm::value_ptr(chair1Model));
        glBindVertexArray(VAO);
        glDrawElements(GL_TRIANGLES, 36, GL_UNSIGNED_INT, 0);

        // Draw chair2
        glm::mat4 chair2Model = glm::mat4(1.0f);
        chair2Model = glm::translate(chair2Model, glm::vec3(-0.6f, -0.8f, 0.0f));
        chair2Model = glm::scale(chair2Model, glm::vec3(0.4f, 0.4f, 0.4f));
        glUniformMatrix4fv(glGetUniformLocation(shaderProgram, "model"), 1, GL_FALSE, glm::value_ptr(chair2Model));
        glBindVertexArray(VAO);
        glDrawElements(GL_TRIANGLES, 36, GL_UNSIGNED_INT, 0);

        // Draw cabinet
        glm::mat4 cabinetModel = glm::mat4(1.0f);
        cabinetModel = glm::translate(cabinetModel, glm::vec3(0.0f, -0.2f, 0.7f));
        cabinetModel = glm::scale(cabinetModel, glm::vec3(1.2f, 0.6f, 0.2f));
        glUniformMatrix4fv(glGetUniformLocation(shaderProgram, "model"), 1, GL_FALSE, glm::value_ptr(cabinetModel));
        glBindVertexArray(VAO);
        glDrawElements(GL_TRIANGLES, 36, GL_UNSIGNED_INT, 0);

        // Swap and poll
        glfwSwapBuffers(window);
        glfwPollEvents();
    }

    // Cleanup
    glDeleteVertexArrays(1, &VAO);
    glDeleteBuffers(1, &VBO);
    glDeleteBuffers(1, &EBO);

    // Terminate GLFW
    glfwTerminate();

    return 0;
}

#include <iostream>
#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>
#include <glm/gtx/string_cast.hpp>

// Function to compile a shader and check for errors
GLuint compileShader(GLenum type, const std::string &source)
{
    GLuint shader = glCreateShader(type);
    const char *src = source.c_str();
    glShaderSource(shader, 1, &src, nullptr);
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

int main()
{
    // Initialize GLFW
    if (!glfwInit())
    {
        std::cerr << "Failed to initialize GLFW" << std::endl;
        return -1;
    }

    // Configure GLFW window
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

    // Create a windowed mode window and its OpenGL context
    GLFWwindow *window = glfwCreateWindow(800, 600, "OpenGL Pyramid", nullptr, nullptr);
    if (!window)
    {
        std::cerr << "Failed to create GLFW window" << std::endl;
        glfwTerminate();
        return -1;
    }

    // Make the window's context current
    glfwMakeContextCurrent(window);

    // Initialize GLEW
    glewExperimental = GL_TRUE; // Needed for core profile
    if (glewInit() != GLEW_OK)
    {
        std::cerr << "Failed to initialize GLEW" << std::endl;
        return -1;
    }

    // Compile vertex shader
    std::string vertexShaderSource = R"(
        #version 330 core
        layout (location = 0) in vec3 aPos;
        out vec3 FragPos;  // Add this line
        uniform mat4 transform;
        void main()
        {
            gl_Position = transform * vec4(aPos, 1.0);
            FragPos = aPos;  // Add this line
        }
    )";
    GLuint vertexShader = compileShader(GL_VERTEX_SHADER, vertexShaderSource);

    // Compile fragment shader
    std::string fragmentShaderSource = R"(
        #version 330 core
        in vec3 FragPos;
        out vec4 FragColor;
        
        uniform vec3 keyLightPosition;
        uniform vec3 fillLightPosition;
        uniform float keyLightIntensity;
        uniform float fillLightIntensity;
        uniform vec3 keyLightColor;

        void main() {
            // Key light
            float keyLightDistance = length(FragPos - keyLightPosition);
            float keyLightAttenuation = 1.0 / (keyLightDistance * keyLightDistance);
            vec3 keyLight = keyLightIntensity * keyLightColor * keyLightAttenuation;

            // Fill light (white color)
            float fillLightDistance = length(FragPos - fillLightPosition);
            float fillLightAttenuation = 1.0 / (fillLightDistance * fillLightDistance);
            vec3 fillLight = fillLightIntensity * vec3(1.0, 1.0, 1.0) * fillLightAttenuation;

            // Final color
            vec3 lighting = keyLight + fillLight;
            FragColor = vec4(lighting, 1.0);
        }
    )";
    GLuint fragmentShader = compileShader(GL_FRAGMENT_SHADER, fragmentShaderSource);

    // Link shaders to create a shader program
    GLuint shaderProgram = glCreateProgram();
    glAttachShader(shaderProgram, vertexShader);
    glAttachShader(shaderProgram, fragmentShader);
    glLinkProgram(shaderProgram);

    // Check for linking errors
    GLint success;
    glGetProgramiv(shaderProgram, GL_LINK_STATUS, &success);
    if (!success)
    {
        char infoLog[512];
        glGetProgramInfoLog(shaderProgram, 512, nullptr, infoLog);
        std::cerr << "Shader program linking failed: " << infoLog << std::endl;
    }

    // Delete individual shaders as they're no longer needed
    glDeleteShader(vertexShader);
    glDeleteShader(fragmentShader);

    // Define pyramid vertices
    float pyramidVertices[] = {
        // Positions
        0.0f, 1.0f, 0.0f,    // Top vertex
        1.0f, -1.0f, 1.0f,   // Front-right vertex
        -1.0f, -1.0f, 1.0f,  // Front-left vertex
        -1.0f, -1.0f, -1.0f, // Back-left vertex
        1.0f, -1.0f, -1.0f   // Back-right vertex
    };

    unsigned int indices[] = {
        0, 1, 2, // Front face
        0, 2, 3, // Left face
        0, 3, 4, // Back face
        0, 4, 1, // Right face
        1, 4, 3, // Bottom face (1)
        3, 2, 1  // Bottom face (2)
    };

    GLuint VBO, VAO, EBO;
    glGenVertexArrays(1, &VAO);
    glGenBuffers(1, &VBO);
    glGenBuffers(1, &EBO);

    glBindVertexArray(VAO);

    glBindBuffer(GL_ARRAY_BUFFER, VBO);
    glBufferData(GL_ARRAY_BUFFER, sizeof(pyramidVertices), pyramidVertices, GL_STATIC_DRAW);

    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

    // Position attribute
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void *)0);
    glEnableVertexAttribArray(0);

    // Main loop
    while (!glfwWindowShouldClose(window))
    {
        // Render
        glClearColor(0.2f, 0.3f, 0.3f, 1.0f);
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT); // Step 4: Clear Depth Buffer

        // Activate shader and set light properties
        glUseProgram(shaderProgram);

        // Step 1: Shader Compilation and Linking should be checked when they are compiled and linked
        // This should be done before entering the main loop

        // Step 2: Check Uniform Locations
        GLint keyLightPosLoc = glGetUniformLocation(shaderProgram, "keyLightPosition");
        std::cout << "keyLightPosition location: " << keyLightPosLoc << std::endl;

        glUniform3f(keyLightPosLoc, 1.0f, 1.0f, 0.0f);
        glUniform3f(glGetUniformLocation(shaderProgram, "fillLightPosition"), -1.0f, -1.0f, 0.0f);
        glUniform1f(glGetUniformLocation(shaderProgram, "keyLightIntensity"), 1.0f);         // 100%
        glUniform1f(glGetUniformLocation(shaderProgram, "fillLightIntensity"), 0.1f);        // 10%
        glUniform3f(glGetUniformLocation(shaderProgram, "keyLightColor"), 0.0f, 1.0f, 0.0f); // Greenish color

        // Step 3: Create Transformation Matrix
        glm::mat4 transform = glm::mat4(1.0f);
        transform = glm::translate(transform, glm::vec3(0.0f, 0.0f, -5.0f));                  // Move backward in the Z-axis
        transform = glm::rotate(transform, glm::radians(30.0f), glm::vec3(1.0f, 0.0f, 0.0f)); // Rotate around the X-axis
        transform = glm::rotate(transform, glm::radians(30.0f), glm::vec3(0.0f, 1.0f, 0.0f)); // Rotate around the Y-axis

        // Step 3: Print Transformation Matrix
        // Using glm::to_string requires including <glm/gtx/string_cast.hpp>
        std::cout << "Transformation Matrix: " << glm::to_string(transform) << std::endl;

        // Pass the transformation matrix to the shader
        GLint transformLoc = glGetUniformLocation(shaderProgram, "transform");
        glUniformMatrix4fv(transformLoc, 1, GL_FALSE, glm::value_ptr(transform));
        GLint fillLightPosLoc = glGetUniformLocation(shaderProgram, "fillLightPosition");
        std::cout << "fillLightPosition location: " << fillLightPosLoc << std::endl;
        // Do the same for other uniforms

        // Draw the pyramid
        glBindVertexArray(VAO);
        glDrawElements(GL_TRIANGLES, 18, GL_UNSIGNED_INT, 0);

        // Step 4: Enable Depth Test
        glEnable(GL_DEPTH_TEST);

        // Swap buffers and poll events
        glfwSwapBuffers(window);
        glfwPollEvents();
    }

    // De-allocate resources
    glDeleteVertexArrays(1, &VAO);
    glDeleteBuffers(1, &VBO);
    glDeleteBuffers(1, &EBO);

    // Terminate GLFW
    glfwTerminate();

    return 0;
}

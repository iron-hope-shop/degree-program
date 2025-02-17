#include <iostream>
#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>

// Shader sources
const GLchar* vertexSource = R"glsl(
#version 330 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aColor;
out vec3 fragColor;
uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
    fragColor = aColor;
    gl_Position = projection * view * model * vec4(aPos, 1.0);
}
)glsl";

const GLchar* fragmentSource = R"glsl(
#version 330 core
in vec3 fragColor;
out vec4 FragColor;

void main()
{
    FragColor = vec4(fragColor, 1.0);
}
)glsl";

// Pyramid vertices with position and color (x, y, z, r, g, b)
float seatVertices[] = {
    0.5, 0.05, 0.0, 0.5, 0.5, 0.5, 0.48907380036690284, 0.05, 0.10395584540887966, 0.5, 0.5, 0.5, 0.45677272882130043, 0.05, 0.20336832153790008, 0.5, 0.5, 0.5, 0.4045084971874737, 0.05, 0.29389262614623657, 0.5, 0.5, 0.5, 0.3345653031794291, 0.05, 0.37157241273869707, 0.5, 0.5, 0.5, 0.25000000000000006, 0.05, 0.4330127018922193, 0.5, 0.5, 0.5, 0.15450849718747373, 0.05, 0.47552825814757677, 0.5, 0.5, 0.5, 0.05226423163382673, 0.05, 0.49726094768413664, 0.5, 0.5, 0.5, -0.052264231633826666, 0.05, 0.4972609476841367, 0.5, 0.5, 0.5, -0.15450849718747367, 0.05, 0.4755282581475768, 0.5, 0.5, 0.5, -0.2499999999999999, 0.05, 0.43301270189221935, 0.5, 0.5, 0.5, -0.33456530317942895, 0.05, 0.37157241273869723, 0.5, 0.5, 0.5, -0.40450849718747367, 0.05, 0.2938926261462366, 0.5, 0.5, 0.5, -0.4567727288213005, 0.05, 0.20336832153790002, 0.5, 0.5, 0.5, -0.48907380036690284, 0.05, 0.10395584540887966, 0.5, 0.5, 0.5, -0.5, 0.05, 2.83276944882399e-16, 0.5, 0.5, 0.5, -0.48907380036690284, 0.05, -0.10395584540887953, 0.5, 0.5, 0.5, -0.45677272882130043, 0.05, -0.2033683215379001, 0.5, 0.5, 0.5, -0.4045084971874738, 0.05, -0.2938926261462365, 0.5, 0.5, 0.5, -0.33456530317942923, 0.05, -0.371572412738697, 0.5, 0.5, 0.5, -0.2500000000000002, 0.05, -0.4330127018922192, 0.5, 0.5, 0.5, -0.15450849718747378, 0.05, -0.47552825814757677, 0.5, 0.5, 0.5, -0.05226423163382712, 0.05, -0.49726094768413664, 0.5, 0.5, 0.5, 0.05226423163382649, 0.05, -0.4972609476841367, 0.5, 0.5, 0.5, 0.15450849718747361, 0.05, -0.4755282581475768, 0.5, 0.5, 0.5, 0.25000000000000006, 0.05, -0.4330127018922193, 0.5, 0.5, 0.5, 0.33456530317942923, 0.05, -0.371572412738697, 0.5, 0.5, 0.5, 0.40450849718747367, 0.05, -0.2938926261462367, 0.5, 0.5, 0.5, 0.4567727288213005, 0.05, -0.20336832153790008, 0.5, 0.5, 0.5, 0.48907380036690284, 0.05, -0.10395584540887949, 0.5, 0.5, 0.5, 0.5, -0.05, 0.0, 0.5, 0.5, 0.5, 0.48907380036690284, -0.05, 0.10395584540887966, 0.5, 0.5, 0.5, 0.45677272882130043, -0.05, 0.20336832153790008, 0.5, 0.5, 0.5, 0.4045084971874737, -0.05, 0.29389262614623657, 0.5, 0.5, 0.5, 0.3345653031794291, -0.05, 0.37157241273869707, 0.5, 0.5, 0.5, 0.25000000000000006, -0.05, 0.4330127018922193, 0.5, 0.5, 0.5, 0.15450849718747373, -0.05, 0.47552825814757677, 0.5, 0.5, 0.5, 0.05226423163382673, -0.05, 0.49726094768413664, 0.5, 0.5, 0.5, -0.052264231633826666, -0.05, 0.4972609476841367, 0.5, 0.5, 0.5, -0.15450849718747367, -0.05, 0.4755282581475768, 0.5, 0.5, 0.5, -0.2499999999999999, -0.05, 0.43301270189221935, 0.5, 0.5, 0.5, -0.33456530317942895, -0.05, 0.37157241273869723, 0.5, 0.5, 0.5, -0.40450849718747367, -0.05, 0.2938926261462366, 0.5, 0.5, 0.5, -0.4567727288213005, -0.05, 0.20336832153790002, 0.5, 0.5, 0.5, -0.48907380036690284, -0.05, 0.10395584540887966, 0.5, 0.5, 0.5, -0.5, -0.05, 2.83276944882399e-16, 0.5, 0.5, 0.5, -0.48907380036690284, -0.05, -0.10395584540887953, 0.5, 0.5, 0.5, -0.45677272882130043, -0.05, -0.2033683215379001, 0.5, 0.5, 0.5, -0.4045084971874738, -0.05, -0.2938926261462365, 0.5, 0.5, 0.5, -0.33456530317942923, -0.05, -0.371572412738697, 0.5, 0.5, 0.5, -0.2500000000000002, -0.05, -0.4330127018922192, 0.5, 0.5, 0.5, -0.15450849718747378, -0.05, -0.47552825814757677, 0.5, 0.5, 0.5, -0.05226423163382712, -0.05, -0.49726094768413664, 0.5, 0.5, 0.5, 0.05226423163382649, -0.05, -0.4972609476841367, 0.5, 0.5, 0.5, 0.15450849718747361, -0.05, -0.4755282581475768, 0.5, 0.5, 0.5, 0.25000000000000006, -0.05, -0.4330127018922193, 0.5, 0.5, 0.5, 0.33456530317942923, -0.05, -0.371572412738697, 0.5, 0.5, 0.5, 0.40450849718747367, -0.05, -0.2938926261462367, 0.5, 0.5, 0.5, 0.4567727288213005, -0.05, -0.20336832153790008, 0.5, 0.5, 0.5, 0.48907380036690284, -0.05, -0.10395584540887949, 0.5, 0.5, 0.5,
    -0.5, 0.5, 0.5, 0.0, 0.0, 1.0, 0.5, 0.5, 0.5, 0.0, 0.0, 1.0, 0.5, -0.5, 0.5, 0.0, 0.0, 1.0, -0.5, -0.5, 0.5, 0.0, 0.0, 1.0, -0.5, 0.5, -0.5, 0.0, 1.0, 0.0, 0.5, 0.5, -0.5, 0.0, 1.0, 0.0, 0.5, -0.5, -0.5, 0.0, 1.0, 0.0, -0.5, -0.5, -0.5, 0.0, 1.0, 0.0 // Colors
                                                                                                                                                                                                                                                               - 0.5f,
    0.0f, -0.5f, 1.0f, 0.0f, 0.0f,       // Red
    0.5f, 0.0f, -0.5f, 0.0f, 1.0f, 0.0f, // Green
    0.5f, 0.0f, 0.5f, 0.0f, 0.0f, 1.0f,  // Blue
    -0.5f, 0.0f, 0.5f, 1.0f, 1.0f, 0.0f, // Yellow
    // Tip vertex
    0.0f, 1.0f, 0.0f, 1.0f, 0.0f, 1.0f // Magenta
};

unsigned int seatIndices[] = { 0, 1, 2, 30, 31, 32, 0, 2, 3, 30, 32, 33, 0, 3, 4, 30, 33, 34, 0, 4, 5, 30, 34, 35, 0, 5, 6, 30, 35, 36, 0, 6, 7, 30, 36, 37, 0, 7, 8, 30, 37, 38, 0, 8, 9, 30, 38, 39, 0, 9, 10, 30, 39, 40, 0, 10, 11, 30, 40, 41, 0, 11, 12, 30, 41, 42, 0, 12, 13, 30, 42, 43, 0, 13, 14, 30, 43, 44, 0, 14, 15, 30, 44, 45, 0, 15, 16, 30, 45, 46, 0, 16, 17, 30, 46, 47, 0, 17, 18, 30, 47, 48, 0, 18, 19, 30, 48, 49, 0, 19, 20, 30, 49, 50, 0, 20, 21, 30, 50, 51, 0, 21, 22, 30, 51, 52, 0, 22, 23, 30, 52, 53, 0, 23, 24, 30, 53, 54, 0, 24, 25, 30, 54, 55, 0, 25, 26, 30, 55, 56, 0, 26, 27, 30, 56, 57, 0, 27, 28, 30, 57, 58, 0, 28, 29, 30, 58, 59, 0, 30, 31, 0, 31, 1, 1, 31, 32, 1, 32, 2, 2, 32, 33, 2, 33, 3, 3, 33, 34, 3, 34, 4, 4, 34, 35, 4, 35, 5, 5, 35, 36, 5, 36, 6, 6, 36, 37, 6, 37, 7, 7, 37, 38, 7, 38, 8, 8, 38, 39, 8, 39, 9, 9, 39, 40, 9, 40, 10, 10, 40, 41, 10, 41, 11, 11, 41, 42, 11, 42, 12, 12, 42, 43, 12, 43, 13, 13, 43, 44, 13, 44, 14, 14, 44, 45, 14, 45, 15, 15, 45, 46, 15, 46, 16, 16, 46, 47, 16, 47, 17, 17, 47, 48, 17, 48, 18, 18, 48, 49, 18, 49, 19, 19, 49, 50, 19, 50, 20, 20, 50, 51, 20, 51, 21, 21, 51, 52, 21, 52, 22, 22, 52, 53, 22, 53, 23, 23, 53, 54, 23, 54, 24, 24, 54, 55, 24, 55, 25, 25, 55, 56, 25, 56, 26, 26, 56, 57, 26, 57, 27, 27, 57, 58, 27, 58, 28, 28, 58, 59, 28, 59, 29, 29, 59, 30, 29, 30, 0,
                              0, 1, 2, 2, 3, 0, 4, 5, 1, 1, 0, 4, 1, 5, 6, 6, 2, 1, 4, 0, 3, 3, 7, 4, 2, 6, 7, 7, 3, 2, 4, 7, 6, 6, 5, 4, 0, 1, 2,
                              0, 2, 3,
    // Sides
    0, 1, 4,
    1, 2, 4,
    2, 3, 4,
    0, 3, 4 };

GLuint compileShader(GLenum type, const GLchar* source)
{
    GLuint shader = glCreateShader(type);
    glShaderSource(shader, 1, &source, nullptr);
    glCompileShader(shader);
    // Check for compilation errors here...
    return shader;
}

GLuint linkProgram(GLuint vertexShader, GLuint fragmentShader)
{
    GLuint program = glCreateProgram();
    glAttachShader(program, vertexShader);
    glAttachShader(program, fragmentShader);
    glLinkProgram(program);
    // Check for linking errors here...
    return program;
}

int main()
{
    // Initialize GLFW and create a window
    if (!glfwInit())
    {
        std::cerr << "Failed to initialize GLFW!" << std::endl;
        return -1;
    }

    GLFWwindow* window = glfwCreateWindow(800, 600, "OpenGL Pyramid", nullptr, nullptr);
    if (!window)
    {
        std::cerr << "Failed to create GLFW window!" << std::endl;
        glfwTerminate();
        return -1;
    }
    glfwMakeContextCurrent(window);

    // Initialize GLEW
    glewExperimental = GL_TRUE;
    if (glewInit() != GLEW_OK)
    {
        std::cerr << "Failed to initialize GLEW!" << std::endl;
        return -1;
    }

    // Compile and link shaders
    GLuint vertexShader = compileShader(GL_VERTEX_SHADER, vertexSource);
    GLuint fragmentShader = compileShader(GL_FRAGMENT_SHADER, fragmentSource);
    GLuint shaderProgram = linkProgram(vertexShader, fragmentShader);
    glDeleteShader(vertexShader);
    glDeleteShader(fragmentShader);

    // Set up VAO, VBO, and EBO
    GLuint VAO, VBO, EBO;
    glGenVertexArrays(1, &VAO);
    glGenBuffers(1, &VBO);
    glGenBuffers(1, &EBO);
    glBindVertexArray(VAO);
    glBindBuffer(GL_ARRAY_BUFFER, VBO);
    glBufferData(GL_ARRAY_BUFFER, sizeof(seatVertices), seatVertices, GL_STATIC_DRAW);
    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(seatIndices), seatIndices, GL_STATIC_DRAW);
    // Position attribute
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)0);
    glEnableVertexAttribArray(0);
    // Color attribute
    glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)(3 * sizeof(float)));
    glEnableVertexAttribArray(1);
    glBindVertexArray(0); // Unbind VAO

    glEnable(GL_DEPTH_TEST);

    while (!glfwWindowShouldClose(window))
    {
        // Clear the screen
        glClearColor(0.2f, 0.3f, 0.3f, 1.0f);
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

        glm::mat4 model = glm::mat4(1.0f);
        glm::vec3 cameraPosition = glm::vec3(5, 0.0f, 0.0f);
        glm::vec3 cameraTarget = glm::vec3(0.0f, 0.0f, 0.0f);
        glm::vec3 upVector = glm::vec3(0.0f, 1.0f, 0.0f);
        glm::mat4 view = glm::lookAt(cameraPosition, cameraTarget, upVector);
        glm::mat4 projection = glm::perspective(glm::radians(45.0f), 800.0f / 600.0f, 0.1f, 100.0f);

        glUseProgram(shaderProgram);
        glUniformMatrix4fv(glGetUniformLocation(shaderProgram, "model"), 1, GL_FALSE, glm::value_ptr(model));
        glUniformMatrix4fv(glGetUniformLocation(shaderProgram, "view"), 1, GL_FALSE, glm::value_ptr(view));
        glUniformMatrix4fv(glGetUniformLocation(shaderProgram, "projection"), 1, GL_FALSE, glm::value_ptr(projection));

        glBindVertexArray(VAO);
        glDrawElements(GL_TRIANGLES, sizeof(seatIndices) / sizeof(unsigned int), GL_UNSIGNED_INT, 0);

        glfwSwapBuffers(window);
        glfwPollEvents();
    }

    // Cleanup
    glDeleteVertexArrays(1, &VAO);
    glDeleteBuffers(1, &VBO);
    glDeleteBuffers(1, &EBO);
    glDeleteProgram(shaderProgram);

    glfwDestroyWindow(window);
    glfwTerminate();

    return 0;
}

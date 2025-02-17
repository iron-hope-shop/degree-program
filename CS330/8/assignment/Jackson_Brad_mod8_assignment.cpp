#include <GLFW\glfw3.h>
#include "linmath.h"
#include <stdlib.h>
#include <stdio.h>
#include <conio.h>
#include <iostream>
#include <vector>
#include <windows.h>
#include <time.h>

using namespace std;

const float DEG2RAD = 3.14159 / 180;

void processInput(GLFWwindow *window);

enum BRICKTYPE
{
    REFLECTIVE,
    DESTRUCTABLE
};
enum ONOFF
{
    ON,
    OFF
};

class Brick
{
public:
    float red, green, blue;
    float x, y, width;
    int hitCount; // Added hit counter for destructable bricks
    BRICKTYPE brick_type;
    ONOFF onoff;

    Brick(BRICKTYPE bt, float xx, float yy, float ww, float rr, float gg, float bb)
    {
        brick_type = bt;
        x = xx;
        y = yy, width = ww;
        red = rr, green = gg, blue = bb;
        onoff = ON;
        hitCount = 0; // Initialize hit counter
    };

    void drawBrick()
    {
        if (onoff == ON)
        {
            double halfside = width / 2;

            // Change color based on hitCount
            if (brick_type == DESTRUCTABLE && hitCount > 0)
            {
                glColor3d(0.5, 0.5, 0.5);
            }
            else
            {
                glColor3d(red, green, blue);
            }

            glBegin(GL_POLYGON);
            glVertex2d(x + halfside, y + halfside);
            glVertex2d(x + halfside, y - halfside);
            glVertex2d(x - halfside, y - halfside);
            glVertex2d(x - halfside, y + halfside);
            glEnd();
        }
    }
};

class Circle
{
public:
    float red, green, blue;
    float radius;
    float x;
    float y;
    float speed = 0.03;
    int direction; // 1=up 2=right 3=down 4=left 5 = up right   6 = up left  7 = down right  8= down left

    Circle(double xx, double yy, double rr, int dir, float rad, float r, float g, float b)
    {
        x = xx;
        y = yy;
        radius = rr;
        red = r;
        green = g;
        blue = b;
        radius = rad;
        direction = dir;
    }

    void CheckCollision(Brick *brk)
    {
        if (brk->brick_type == REFLECTIVE)
        {
            if ((x > brk->x - brk->width && x <= brk->x + brk->width) && (y > brk->y - brk->width && y <= brk->y + brk->width))
            {
                direction = GetRandomDirection();
                x = x + 0.03;
                y = y + 0.04;
            }
        }
        else if (brk->brick_type == DESTRUCTABLE)
        {
            // Update to change state based on hits
            if ((x > brk->x - brk->width && x <= brk->x + brk->width) && (y > brk->y - brk->width && y <= brk->y + brk->width))
            {
                brk->hitCount++;
                if (brk->hitCount >= 3)
                {
                    brk->onoff = OFF;
                }
            }
        }
    }

    int GetRandomDirection()
    {
        return (rand() % 8) + 1;
    }

    void DrawCircle()
    {
        glColor3f(red, green, blue);
        glBegin(GL_POLYGON);
        for (int i = 0; i < 360; i++)
        {
            float degInRad = i * DEG2RAD;
            glVertex2f((cos(degInRad) * radius) + x, (sin(degInRad) * radius) + y);
        }
        glEnd();
    }

    void MoveOneStep()
    {
        // Update to include physics-based movement
        float angle = direction * DEG2RAD;
        float dx = cos(angle) * speed;
        float dy = sin(angle) * speed;

        // Boundary checks
        if (x + dx > 1 - radius || x + dx < -1 + radius)
        {
            dx = -dx;
            direction = 180 - direction;
        }

        if (y + dy > 1 - radius || y + dy < -1 + radius)
        {
            dy = -dy;
            direction = 360 - direction;
        }

        x += dx;
        y += dy;
    }

    // Add function to calculate distance between two circles
    float distanceTo(Circle *other)
    {
        return sqrt(pow(x - other->x, 2) + pow(y - other->y, 2));
    }

    void CheckCollisionWithCircle(Circle *other)
    {
        if (distanceTo(other) < (radius + other->radius))
        {
            // Circles have collided, so let's merge them into a larger one
            radius += other->radius;
            other->radius = 0; // Set other circle's radius to zero, effectively removing it
        }
    }
};

vector<Circle> world;

int main(void)
{
    srand(time(NULL));

    if (!glfwInit())
    {
        exit(EXIT_FAILURE);
    }
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 2);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 0);
    GLFWwindow *window = glfwCreateWindow(480, 480, "Random World of Circles", NULL, NULL);
    if (!window)
    {
        glfwTerminate();
        exit(EXIT_FAILURE);
    }
    glfwMakeContextCurrent(window);
    glfwSwapInterval(1);

    Brick brick(REFLECTIVE, 0.5, -0.33, 0.2, 1, 1, 0);
    Brick brick2(DESTRUCTABLE, -0.5, 0.33, 0.2, 0, 1, 0);
    Brick brick3(DESTRUCTABLE, -0.5, -0.33, 0.2, 0, 1, 1);
    Brick brick4(REFLECTIVE, 0, 0, 0.2, 1, 0.5, 0.5);

    while (!glfwWindowShouldClose(window))
    {
        // Setup View
        float ratio;
        int width, height;
        glfwGetFramebufferSize(window, &width, &height);
        ratio = width / (float)height;
        glViewport(0, 0, width, height);
        glClear(GL_COLOR_BUFFER_BIT);

        processInput(window);

        // Movement
        for (int i = 0; i < world.size(); i++)
        {
            world[i].CheckCollision(&brick);
            world[i].CheckCollision(&brick2);
            world[i].CheckCollision(&brick3);
            world[i].CheckCollision(&brick4);
            world[i].MoveOneStep();
            world[i].DrawCircle();

            // Additional check for circle-circle collision
            for (int j = i + 1; j < world.size(); j++)
            {
                world[i].CheckCollisionWithCircle(&world[j]);
            }
        }

        // Remove circles with zero radius
        world.erase(remove_if(world.begin(), world.end(), [](const Circle& c) { return c.radius <= 0; }), world.end());

        brick.drawBrick();
        brick2.drawBrick();
        brick3.drawBrick();
        brick4.drawBrick();

        glfwSwapBuffers(window);
        glfwPollEvents();
    }

    glfwDestroyWindow(window);
    glfwTerminate;
    exit(EXIT_SUCCESS);
}

void processInput(GLFWwindow *window)
{
    if (glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)
        glfwSetWindowShouldClose(window, true);

    if (glfwGetKey(window, GLFW_KEY_SPACE) == GLFW_PRESS)
    {
        double r, g, b;
        r = rand() / 10000;
        g = rand() / 10000;
        b = rand() / 10000;
        Circle B(0, 0, 02, 2, 0.05, r, g, b);
        world.push_back(B);
    }
}

# CS 330 Module Eight Assignment Guidelines and Rubric
## Overview
During this assignment, you will bring together your knowledge from the previous weeks and build on it to create an engaging, collision-based 2D animation. There are many different kinds of choices you may make with this work, so take time to explore your options before getting started. You should not feel limited by the possibilities provided here. Feel free to try out new and different ideas as you create!

## Prompt
You will be completing your coding work in Visual Studio. Be sure to begin with a project file that has the libraries set up correctly from your earlier efforts in Module One. Then, copy the starter code from the Module Eight Assignment Code TXT file into your Visual Studio project. Remember, this is the same code you reviewed in the video for this week. From here you will be able to manipulate the provided code in a number of different ways. Note that Linmath.h is the only file from the original ZIP folders you used to complete your setup in Module One that is used in this week's provided code.  

Specifically, you must address the following rubric criteria:

- Arrange the bricks into an organizational structure that promotes engagement with the animation. The goal is to create a layout that is visually unique or compelling and includes bricks of a style that makes the animation more interesting to watch. Some options for details you may wish to include are as follows, but you do not need to complete all of these. You can also try an idea of your own instead.
  - Add texture or color to the different kinds of bricks.
  - Change the sizes of the bricks.
  - Add a manually controlled paddle to the bottom of the screen, using the brick item as a base.
- Apply physics laws to the circles. When a circle hits one of the sides of the screen, its progress should be altered in some way. While the circles currently move at a constant speed and have randomized movement once they bounce off one edge of the screen, there are ways you can alter this to make the animation more engaging. Some options you may wish to use for your work are as follows, but you do not need to complete all of these. You can also try an idea of your own instead.
  - Alter the speed of the circle.
  - Change the angle of trajectory so it follows physics laws instead of taking a randomized pattern. (This means it would continue in the direction it was heading rather than moving backward.)
  - Add friction to specific surfaces, which would affect the circle and slow its progress once it collided with the surface.
- Alter the state of the bricks upon collision. When a circle collides with a brick, you will need to code for an event to occur. This means updating the code to alter the state of the bricks upon collision. Some options you may wish to use for your work are as follows, but you do not need to complete all of these. You can also try an idea of your own instead.
  - Require the brick to take a certain number of hits before it disappears.
  - Change the color or texture of the brick when it is hit.
  - Combine both of the previous two options, meaning the brick changes its texture each time it is hit until it disappears. For example, you may choose to add cracks to the texture of the brick until it is “destroyed.”
- Alter the state of the circles upon collision. When a circle collides with another circle, you will need to code for an event to occur. This means updating the code to alter the state of the circles upon collision. Some options you may wish to use for your work are as follows, but you do not need to complete all of these. You can also try an idea of your own instead.
  - The two circles combine to become one larger circle.
  - The circles change their color or texture.
  - Both circles disappear once hit.
  - The circles spawn multiple smaller circles.
- Explain the changes you made to the code. Discuss the work you completed by focusing on the different tactics you used to create a fully realized 2D animation. What were the changes you chose to make? What was your intent behind them? How did you approach coding to successfully create this outcome?
- Create code that follows a logical flow without syntax errors. The code you create has to be executable and all the code that is included needs to be reached by the execution. Note that not everything should be written in a single function and your work should be well-modularized.
- Apply coding best practices in your creations. Pay particular attention to the way you format and comment your code. Program code should be easy to read and follow industry standard code formatting practices, such as indentation and spacing. Commenting best practices should be in place to ensure the code is briefly and clearly explained using descriptive comments.

## What to Submit
Submit a 100- to 200-word Microsoft Word document along with a completed ZIP folder containing all of your code. Your ZIP folder may include one or multiple CPP files along with Visual Studio project files. It should also include an EXE file, because without this your code will not be able to run. Checking for the EXE can be used as a quick reference on the functionality of your code before you submit.

```cpp
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

enum BRICKTYPE { REFLECTIVE, DESTRUCTABLE };
enum ONOFF {ON,OFF};

class Brick
{
public:
	float red, green, blue;
	float x, y, width;
	BRICKTYPE brick_type;
	ONOFF onoff;

	Brick(BRICKTYPE bt, float xx, float yy, float ww, float rr, float gg, float bb)
	{
		brick_type = bt; x = xx; y = yy, width = ww; red = rr, green = gg, blue = bb;
		onoff = ON;
	};

	void drawBrick()
	{
		if (onoff == ON)
		{
			double halfside = width / 2;

			glColor3d(red, green, blue);
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

	void CheckCollision(Brick* brk)
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
			if ((x > brk->x - brk->width && x <= brk->x + brk->width) && (y > brk->y - brk->width && y <= brk->y + brk->width))
			{
				brk->onoff = OFF;
			}
		}
	}

	int GetRandomDirection()
	{
		return (rand() % 8) + 1;
	}

	void MoveOneStep()
	{
		if (direction == 1 || direction == 5 || direction == 6)  // up
		{
			if (y > -1 + radius)
			{
				y -= speed;
			}
			else
			{
				direction = GetRandomDirection();
			}
		}

		if (direction == 2 || direction == 5 || direction == 7)  // right
		{
			if (x < 1 - radius)
			{
				x += speed;
			}
			else
			{
				direction = GetRandomDirection();
			}
		}

		if (direction == 3 || direction == 7 || direction == 8)  // down
		{
			if (y < 1 - radius) {
				y += speed;
			}
			else
			{
				direction = GetRandomDirection();
			}
		}

		if (direction == 4 || direction == 6 || direction == 8)  // left
		{
			if (x > -1 + radius) {
				x -= speed;
			}
			else
			{
				direction = GetRandomDirection();
			}
		}
	}

	void DrawCircle()
	{
		glColor3f(red, green, blue);
		glBegin(GL_POLYGON);
		for (int i = 0; i < 360; i++) {
			float degInRad = i * DEG2RAD;
			glVertex2f((cos(degInRad)*radius) + x, (sin(degInRad)*radius) + y);
		}
		glEnd();
	}
};


vector<Circle> world;


int main(void) {
	srand(time(NULL));

	if (!glfwInit()) {
		exit(EXIT_FAILURE);
	}
	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 2);
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 0);
	GLFWwindow* window = glfwCreateWindow(480, 480, "Random World of Circles", NULL, NULL);
	if (!window) {
		glfwTerminate();
		exit(EXIT_FAILURE);
	}
	glfwMakeContextCurrent(window);
	glfwSwapInterval(1);

	Brick brick(REFLECTIVE, 0.5, -0.33, 0.2, 1, 1, 0);
	Brick brick2(DESTRUCTABLE, -0.5, 0.33, 0.2, 0, 1, 0);
	Brick brick3(DESTRUCTABLE, -0.5, -0.33, 0.2, 0, 1, 1);
	Brick brick4(REFLECTIVE, 0, 0, 0.2, 1, 0.5, 0.5);

	while (!glfwWindowShouldClose(window)) {
		//Setup View
		float ratio;
		int width, height;
		glfwGetFramebufferSize(window, &width, &height);
		ratio = width / (float)height;
		glViewport(0, 0, width, height);
		glClear(GL_COLOR_BUFFER_BIT);

		processInput(window);

		//Movement
		for (int i = 0; i < world.size(); i++)
		{
			world[i].CheckCollision(&brick);
			world[i].CheckCollision(&brick2);
			world[i].CheckCollision(&brick3);
			world[i].CheckCollision(&brick4);
			world[i].MoveOneStep();
			world[i].DrawCircle();
			
		}

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
		Circle B(0,0,02,2, 0.05, r, g, b);
		world.push_back(B);
	}
}
```

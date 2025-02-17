## Overview
This week you will be continuing to work on the 3D scene you already began to build, based on a 2D image you selected. Now it is time to incorporate input devices and camera movement so you will be able to traverse your scene more easily.  
  
## Prompt
You will complete your work in Visual Studio, being sure to work from the project file you already created in a previous milestone. This file already has the libraries set up correctly and contains the 3D object you built, which will be necessary for you to add to this week.  
  
Specifically, you must address the following rubric criteria:  
  
- Create a 3D plane to situate a 3D scene. This will serve as the base for the rest of the objects in your world. Depending on your 2D image this plane may be used to represent a desk, the ground, a table, or something else entirely. It will be important to work on this first so you will understand the scope of the world your camera will be traversing. A plane is also a relatively simple shape so it will be a good place to start when managing the placement of different objects in your scene. Remember, you will need to take into account where the plane is located in relation to the 3D object you developed during a previous milestone (which used multiple 3D shapes).
- Apply horizontal, vertical, and depth camera navigation around a 3D scene. It is recommended that you use the following keyboard controls to manipulate the basic camera movement:
  - WASD keys: These keys should be used to control the forward, backward, left, and right motion.
  - QE keys: These keys should be used to control the upward and downward movement.
- Apply nuanced camera controls to a 3D scene. It is recommended that you use the following mouse controls to allow a user more specific input options for how they view the 3D scene:
  - Mouse cursor: This should be used to change the orientation of the camera so it can look up and down or right and left.
  - Mouse scroll: This should be used to adjust the speed of the movement, or the speed the camera travels around the scene.
- Create perspective and orthographic displays of a 3D scene. Use the tap of a keyboard key to allow a user to change the view of the scene between orthographic (2D) and perspective (3D) views at will. (Hint: check the glViewport and the glOrtho functions.) For consistency, please use the letter “P” keyboard key. To accomplish this work, you will be switching the function call to retrieve either the perspective or orthographic projection matrix. Note that you will be keeping the camera in the same orientation that you already developed.
- Create code that follows a logical flow without syntax errors. The code you create has to be executable and all the code that is included needs to be reached by the execution. Note that not everything should be written in a single function and your work should be well-modularized.
- Apply coding best practices in your creations. Pay particular attention to the way you format and comment your code. Program code should be easy to read and follow industry standard code formatting practices, such as indentation and spacing. Commenting best practices should be in place to ensure the source code is briefly and clearly explained using descriptive comments.

## What to Submit
Submit a completed ZIP folder with all of your code, which may include one or multiple CPP files along with Visual Studio project files. Also make sure the ZIP folder includes an EXE file, because without this your code will not be able to run. Checking for the EXE can be used as a quick reference on the functionality of your code before you submit.
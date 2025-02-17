As you know, your final project is due next week in Module Seven. You should be using your time this week to prepare for this submission. Remember to incorporate feedback from the milestones you have previously submitted. If you have any questions that you do not feel comfortable sharing in this forum, please reach out to your instructor directly.

In your initial post, select one of the following options and post about it:

- I do not have any questions regarding the project at this time. Here are some tips and techniques that helped me complete the project: _______. (Provide anything that helped you succeed in completing the project and may assist your peers.)
- I do have a question regarding the project at this time: _______. (Post any question(s) you may have and your peers will assist you in answering them.)

With that in mind, here are the project guidelines:
```
# CS 350 Project Guidelines
## Competencies
In this project, you will demonstrate your mastery of the following competencies:

- Write interface software to control hardware components
- Analyze fundamental considerations regarding hardware architecture design and their impact on application performance
- Recommend and justify emerging systems architectures and technologies based on business requirements

## Scenario
The global smart thermostat market is forecast to reach almost $9 billion by 2026. The CEO of SysTec wants to get into this lucrative market and has tasked your engineering department with creating a smart thermostat using the TI board. SysTec develops analytics software for servers, but the CEO remembers from your interview that you took an embedded systems course and asks you to build a prototype. The final goal is to develop a thermostat that sends data to SysTec’s server software over Wi-Fi, but first they need a prototype of the low-level thermostat functionality working.

For the prototype, you will use the TMP006 temperature sensor to read the room temperature (via I2C), an LED to indicate the output to the thermostat where LED on = heat on (via GPIO), two buttons to increase and decrease the set temperature (via GPIO interrupt), and the UART to simulate the data being sent to the server.

You will also create a written report for your team to ensure that the system you created is based on SysTec’s business requirements and technical specifications. While your team is testing your code, you have been asked to architect the next phase of the project in your report: connecting the thermostat to the cloud. Although you prototyped on the TI development board, other manufacturers make integrated Wi-Fi solutions. In this next phase, you are going to analyze various hardware architectures (from TI, Microchip, and Freescale) and recommend and justify the architecture decision based on the following business requirements:

- The thermostat must support the peripherals used in the project.
- The thermostat must connect to the cloud via Wi-Fi.
- The architecture chosen must have enough Flash and RAM to support the code.

In your report, you will be responsible for comparing and contrasting the three hardware architectures based on the above metrics.

## Directions
Begin your work by accessing the Project Thermostat Lab Guide PDF document. While this document was written for a Windows interface, the tools can be used on Mac or Linux as well. To accomplish the work outlined in the guide, you will need the following:  
  
- TI CC3220x LAUNCHXL
- TI Code Composer Studio (installed)
- USB connection between the PC and board

Specifically, you must address the following rubric criteria:  
- Develop code for all of the specified functionality. Remember, the goals of this project include reading room temperature, indicating the result via LED output, increasing or decreasing the set temperature, and simulating the data being sent to a server.
- Create code that initializes the timer and uses it to drive specified actions. This involves two steps, both the initializing of the timer and then its use in running an action.
- Create code that uses interrupt to detect button presses. This involves two steps, both the detection of the button presses and then using the result to run an action.
- Create code to initialize the I2C peripheral and use it to read the temperature sensor. This code must both initialize the I2C peripheral and then read the temperature sensor correctly.
- Create code to initialize the GPIO peripheral and use it. Remember that the GPIO is involved in indicating the output of the temperature via LED and setting the temperature with two different buttons (one to increase and one to decrease temperature).
- Create code to initialize the UART peripheral and output specified data. The UART should be used to simulate data being sent to the server. Be careful to ensure that the UART is initialized to the correct baud rate and serial configuration.
- Implement (in code) the task scheduler functionality. This should match the specifications described by the Project Thermostat Lab Guide.
- Provide the appropriate technical and operational documentation for the task scheduler that you created to satisfy step 7. This should address all the required functionality and be documented according to industry standards describing the algorithm used, its inputs and outputs, and expected results. To excel for this item, you may additionally provide an appropriate state-machine diagram in addition to the other documentation.
- Apply coding best practices in formatting, commenting, and functional logic.
- Explain how the thermostat supports the peripherals used in the project. Make sure that you have included all the required details from the scenario in your report. You should discuss each of the three outlined hardware architectures, including TI, Microchip, and Freescale.
- Explain how the thermostat connects to the cloud via Wi-Fi. Discuss all three architectures in your work.
- Discuss the architecture’s Flash and RAM that supports the code. Include all three architectures in your discussion.

## What to Submit
To complete this project, you must submit the following:
Task Scheduler
The task scheduler should be created as a draw.io file and then exported as a PDF file for submission in Brightspace.

### Code
Zip your workspace with all of your code and then submit the zipped file for grading.

### Video
Submit a video demonstration of your project’s functionality. While your code is running, record your board and narrate to describe what the LEDs are doing. Be sure that you push your button during the video to show what happens. Your video should not be longer than one minute. If you encounter any difficulties filming the lights on your hardware component, please reach out to your instructor.

### Report
Your reflections should be documented in a 1- to 2-page Microsoft Word document with 12-point Times New Roman font, double spacing, and one-inch margins. Sources should be cited according to APA style.
```
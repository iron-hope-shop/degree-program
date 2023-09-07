# CS 370 Project Two Guidelines and Rubric
## Competencies
In this project, you will demonstrate your mastery of the following competencies:
- Explain the basic concepts and techniques that pertain to artificial intelligence and intelligent systems
- Analyze how algorithms are used in artificial intelligence to solve a variety of complex problems

## Scenario
You are working as an AI developer for a gaming company. The company is developing a treasure hunt game where the player needs to find the treasure before the pirates find it. As an AI developer, you have been asked to design an intelligent agent of the game for an NPC (non-player character) to represent the pirate. The pirate will need to navigate the game world, which consists of different pathways and obstacles, in order to find the treasure. The pirate agent’s goal is to find the treasure before the human player. This is commonly called a pathfinding problem, as the agent you create will need to find a path towards its goal.

You have been provided with some starter code and a sample environment where your pirate agent will be placed. You will need to create a deep Q-learning algorithm to train your pirate agent. Finally, you have also been asked to write a design defense that demonstrates your understanding of the fundamental AI concepts involved in creating and training your intelligent agent.

## Directions
### Pirate Intelligent Agent
As part of your project, you will create a pirate intelligent agent to meet the specifications that you have been given. Be sure to review any feedback that you received on your Project Two Milestone before submitting the final version of your intelligent agent. Follow these steps to complete your intelligent agent:

1. Before creating your pirate intelligent agent, be sure to review the Pirate Intelligent Agent Specifications document, located in the Supporting Materials section. This document provides details about the code that you have been given, and what aspects you will need to create.
2. Download the zipped folder containing your starter code and Jupyter Notebook files by using the link in the Supporting Materials section. Access the Virtual Lab (Apporto) by using the link in the Virtual Lab Access module. Upload the zipped folder into the Virtual Lab, unzip the folder, and upload the files into the Jupyter Notebook application. Use the tutorials in the Supporting Materials to help you with these tasks.
3. Be sure to review the starter code that you have been given. Watch the Project Two Walkthrough video, located in the Supporting Materials section, to help you understand this code in more detail. IMPORTANT: Do not modify any of the PY files that you have been given.
4. Complete the code for the Q-Training Algorithm section in your Jupyter Notebook. In order to successfully complete the code, you must do the following:
   1. Develop code that meets the given specifications:
      1. Complete the program for the intelligent agent so that it achieves its goal: The pirate should get the treasure.
      2. Apply a deep Q-learning algorithm to solve a pathfinding problem.
   2. Create functional code that runs without error.
   3. Use industry standard best practices such as in-line comments to enhance readability and maintainability.
5.  After you have finished creating the code for your notebook, save your work. Make sure that your notebook contains your name in the filename (such as, “Doe_Jane_ProjectTwo.ipynb”). This will help your instructor access and grade your work easily. Be sure to download a copy of your notebook (IPYNB file) for your submission.

### Design Defense
As a part of your project, you will also submit a design defense. This design defense will demonstrate the approach you took in solving this problem, explain how the intelligent agent works, and evaluate the algorithm you chose to use. In order to adequately defend your designs, you will need to support your ideas with research from your readings. You must include citations for sources that you used.

- Analyze the differences between human and machine approaches to solving problems.
  - Describe the steps a human being would take to solve this maze.
  - Describe the steps your intelligent agent is taking to solve this pathfinding problem.
  - What are the similarities and differences between these two approaches?
- Assess the purpose of the intelligent agent in pathfinding.
  - What is the difference between exploitation and exploration? What is the ideal proportion of exploitation and exploration for this pathfinding problem? Explain your reasoning.
  - How can reinforcement learning help to determine the path to the goal (the treasure) by the agent (the pirate)?
- Evaluate the use of algorithms to solve complex problems.
  - How did you implement deep Q-learning using neural networks for this game?
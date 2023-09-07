# In your readings, you learned that some companies use the same programmers to code and test their software. Other companies have different teams performing these tasks. Which approach do you think works best? Why?
I believe that the responsibilty of testing software is best shouldered as a team.  The engineers designing the software should actively do unit and integration testing but there should be a third party who code reviews and penetration tests the software for vulnerabilities.

# Think about the different experiences you have online using different types of systems—for example, the systems you use to access your courses, to see your student information, to make purchases, to manage your music, and so on. Have you ever encountered an issue that required maintenance (for example, broken links, sign-in errors)? How did you report that issue? How was it resolved? What about that process worked well? What could have been improved?
Today I was using an internal documentation website for our cloud native platform and noticed some broken hover stylings in the search results.  I reached out to the owning team and asked if I could make a pull request to improve their search.  So a little while later I was added as a collaborator and got the PR reviewed and merged!  I like to fix problems I see with "open source" projects like that but ideally the product owner would have noticed that from the beginning, although it did help that I was a customer solving my own problems for myself because I am the target demographic.  More UI/UX testing (or any at all) in end-user-facing websites should be mandatory!

# Imagine that your design for the DriverPass system was implemented. What process would you suggest for collecting and managing maintenance requests?
If my design for the DriverPass system was implemented I would suggest we use a third-party tool such as JIRA or ServiceNow (I know, gross, but it beats creating our own) for support tickets.

# What does it mean to be a good team member in systems development? How can good documentation help ensure that the developers and other designers on your team can implement your designs?
Being a good team member means not being afraid to express your opinions and take action when it is needed.  Good documentation can help teammates support your product when you hand it off to a newbie or even when you are on PTO.  You do not want to have sole responsibility for a break fix while you're on the beach!


# Present one of the following diagrams from your work on Project Two: UML activity diagram, UML sequence diagram, or UML class diagram. Include the diagram and a brief (2- to 3-sentence) description of it. Download your diagram as a PDF. Be sure to check the "Accessible PDF" box before downloading.
Below is my sequence diagram for scheduling appointments within the DriverPass system.  Assuming they are within the application web interface, the user clicks a button labelled "Schedule Appointment."  They are then prompted to select an appointment time.  Once they select a time they are send a confirmation (visually, within the application, via email, or both).


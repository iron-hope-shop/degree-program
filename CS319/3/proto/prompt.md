# Describe the purpose and features of each screen. Your writing can be simple but it should contain enough comprehensive information that anyone picking up the provided explanation can understand the intent of your design. Be sure to explain any interactive elements, as these may be more challenging to comprehend based only on a static image.

The purpose of the log-in screen is to allow users to access the app by logging in with their credentials. This screen would have a button to log in via single sign-on or their email. There would be an option to register if the user is new, which would take them to a screen to enter their personal information. The screen would be decorated with a eye-grabbing logo that let the user know what they were logging in to.  Throughout my screens I included margins, or safe areas, as advised by the Apple Developer guidelines (2023).

The dashboard screen would serve as the main screen of the app, where users can view the moisture content and nitrogen level in the soil at each of their trees on a chart. There would be a chart for nitrogen levels over time at the top of the screen and a chart of the moisture level over time located at the bottom of the screen.  They should be the two largest parent components on the screen.  This placement helps to convey relative importance of the measurements (Apple, 2023). It would have an overview of the data, and a three buttons on each chart. The first button would be to share/export. Users would be able to export the nitrogen and moisture levels of the trees to a cav/tsv/json format as well as share it with social media apps. The second button would be to drill down to see more detailed information. The drilldown would also have a section that displays information about the trees, such as their location, type and age. The charts would also have clearly labelled lines for either trees or groups of trees as defined by the user. Clearly grouping the information is important for its presentation (Apple, 2023). This way, the user could easily determine the moisture and nitrogen levels for a population of their trees.

The settings screen would allow users to customize their experience by setting their preferences and notification settings. The settings screen would have options such as: 
- User Info: This section would allow the user to view and edit their personal information, such as their name, email, and phone number.
- Notifications: This section would allow users to enable or disable notifications for different events, such as changes in moisture content or nitrogen levels.
- Preferences: This section would allow users to customize the app’s interface, such as the language, background color/theme, and font size.
- Security: This section would allow users to manage their account security, such as changing their password or enabling two-factor authentication.
- Sharing: This section would allow users to share their account with others, such as family members or colleagues. This could be useful for users who want to share the data and information from the app with others, or who want to grant access to their trees to someone else, such as a caretaker or friend.
- Tree Config: This section would allow users to configure the app's settings for their trees. This could include options such as selecting the type of tree, setting the desired moisture and nitrogen levels, and setting the frequency of updates on the app. This option would also allow the user to add or remove trees from the app, and to view detailed information about each tree.


Interview 1 (Kayla's Aunt Sure):
- Interview took place at a local coffee shop
- Interview lasted 30 minutes
- Participant was a 62-year-old woman who recently planted 5 trees on her property
- Participant was able to successfully complete the task of viewing the moisture and nitrogen levels of the trees but said it was a bit visually busy.
- Instructions were explained and the participant was provided with a paper prototype of the mobile app design
- Participant was able to successfully complete the task of viewing the moisture and nitrogen levels of the trees.
- Participant was not able to complete the task of adding new trees, and adjusting the desired watering and nitrogen levels.
- Participant had some difficulty navigating the app and found the layout to be a bit confusing
- Participant expressed that she would like to see more information about the specific trees, such as their location and history

Interview 2 (My Grandma Pat):
- Interview took place at the participant's home
- Interview lasted 20 minutes
- Participant was a 67-year-old man who has been gardening for 20 years
- Instructions were explained and the participant was provided with a paper prototype of the mobile app design
- Participant was able to successfully complete the task of viewing the moisture and nitrogen levels of the trees.
- Participant was not able to complete the task of adding new trees, and adjusting the desired watering and nitrogen levels.
- Participant had some difficulty finding the settings option and was not able to locate the sharing option
- Participant expressed that he would like to see more information about the specific trees, such as their location and history


When presented with the hypothetical scenario of navigating the application, both participants had some difficulty and found the layout to be a bit confusing.  There were able to complete the basic task of viewing the measurements of nitrogen and moisture levels but explanation was required when presented with the task of adding more trees. They also expressed a desire for more information about the specific trees, such as their location and history. They also said I should have created a screen for showing more details rather than the app settings.

After conducting follow-up interviews with potential customers, I plan to make several updates to the mobile app design. One of the changes is improving the navigation and layout of the app to make it more user-friendly and intuitive. This will include simplifying the design, making it easier for users to find the information they need, and providing more clear and concise instructions. I recieved feedback from both participants that some information in the drilldown should be apparent in the dashboard screen rather than the drilldown. Adding more information about the specific trees in the dashboard, such as their location and type will help users better understand the trees and make it easier for them to care for them. The feedback from the interviews surprised me in that users had some difficulty navigating the app and found the layout to be a bit confusing. This was a common theme among both participants and it highlighted the need for a more user-friendly and intuitive design. The feedback I found most valuable was the desire for more information about the specific trees, as this highlighted the need for a feature that users found valuable and would be beneficial for their use of the app.


Layout. Apple Developer. (2023). https://developer.apple.com/design/human-interface-guidelines/layout
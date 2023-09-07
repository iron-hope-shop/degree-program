# What are the specific challenges related to implementing security features? For example, you will want to identify and provide solutions for the following:

# Exploring principles of security: How will operating systems prevent unauthorized access?
Operating systems prevent unauthorized access using RBAC and permissions.  Additional layers of security are usernames and passwords for specific roles (assuming least privlidge).
# Describing and implementing various countermeasures for potential security attacks: What do you suggest for countermeasures?
For countermeasures I would suggest having as few ports open as possible.  Firewall rules are a nessecity as well.  The text also explores time-based access.  This is an interesting method which I have experience with.  Given a team with an approved change request we (when I worked on a Server Operations team) would grant temporary access to their service account in order to execute a change.  That is a very broad way of controlling access, though, as anyone could acquire the credentials for the service account and use it for malicious purposes.
# How is it best to handle authorization needs?
Handling authorization needs again requires a least-privledge scenario.  We want users and processes to only have access to files that they absolutely need.
# What other security features have you identified and want to address?
I cannot think of another security feature that I have identified off the top of my head; however, we should never leave backdoors such as in the movie Wargames.

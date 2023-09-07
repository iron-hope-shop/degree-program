# To what extent was your testing approach aligned to the software requirements? Support your claims with specific evidence.
My testing approach was aligned precisely to the software requirements.  Where funcationaly did not exist in the service requirements, such as lookups for ids, I created those funcationalities and implemented them in the tests.  For example, one of the requirements for the contact service was to be able to create and update a contact.  In order to test the effectiveness of this I had to implement a lookup function based on ID for the contact model.  This enabled me to create a test where a contact was created, validated, modified, and validated again.

# Defend the overall quality of your JUnit tests for the contact service and task service. In other words, how do you know that your JUnit tests were effective on the basis of coverage percentage?
The quality of my JUnit tests is exceptional.  I know that my JUnit tests were effective on the basis of coverage percentage because I accounted for all of the software requirement specifications and thoroghly tested them.

# How did you ensure that your code was technically sound? Cite specific lines of code from your tests to illustrate.
I ensured my code was technically sound by keeping it simple, using annotations, and running local build tests during development.  An example of soundness in my tests was the ContactServiceTest class.  Here I have used annotations and builtin JUnit methods to create a new contact service, add a contact to it, and validate the existence of that contact.  There is nothing more to validate in this case.  I tried to maintain consistency between my unit tests and code so I believe their soundness to be great.

@Test
  public void testAddContact() throws Exception {
    String bradId;
    svc = new ContactService();
    svc.addContact("Brad", "Jackson", "5555555555", "1234 Noneya St.");
    bradId = svc.getByFirstName("Brad");
    if (bradId.isEmpty() || bradId.isBlank()) {
      fail("ID was not created");
    }
  }

# How did you ensure that your code was efficient? Cite specific lines of code from your tests to illustrate.
I ensured my code was efficient by keeping it simple and following standard Java practices.  When creating the Contact class I generated a contructor, getters, and setters, using my IDE.  From there I simply added the appropriate variables and conditional statements to validate input.  This is efficient and provides future readers with readability.
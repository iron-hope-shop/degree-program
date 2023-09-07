package com.snhu;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class ContactServiceTest {

  ContactService svc;

  @Test
  public void shouldAnswerWithTrue() {
    assertTrue(true);
  }

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

  @Test
  public void testDeleteContact() throws Exception {
    String bradId;
    svc = new ContactService();
    bradId = svc.getByFirstName("Brad");
    svc.deleteContact(bradId);
  }

  @Test
  public void testUpdateContact() throws Exception {
    String id;
    svc = new ContactService();
    svc.addContact("Testy", "Guy", "1233211234", "Nowhere");
    id = svc.getByFirstName("Testy");
    svc.updateContact(id, "Tested", "Guy", "1233211234", "Nowhere");
  }
}

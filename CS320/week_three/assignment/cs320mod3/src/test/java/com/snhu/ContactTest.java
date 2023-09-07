package com.snhu;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class ContactTest {

  Contact con;

  @Test
  public void shouldAnswerWithTrue() {
    assertTrue(true);
  }

  @Test
  public void testAddContact() throws Exception {
    // exception.expect(Exception.class);
    try {
      con = new Contact("1", "Brad", "Jackson", "5555555555", "1234 Noneya St.");
    } catch (Exception e) {
    }
  }

}

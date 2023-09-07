package com.snhu;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class TaskTest {

  Task unit;

  @Test
  public void shouldAnswerWithTrue() {
    assertTrue(true);
  }

  @Test
  public void testAddTask() throws Exception {
    // exception.expect(Exception.class);
    try {
      unit = new Task("1", "Brad", "Jackson");
    } catch (Exception e) {
    }
  }

}

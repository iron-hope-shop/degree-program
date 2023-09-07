package com.snhu;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class TaskServiceTest {

  TaskService svc;

  @Test
  public void shouldAnswerWithTrue() {
    assertTrue(true);
  }

  @Test
  public void testAddTask() throws Exception {
    svc = new TaskService();
    svc.addTask("ASDFLkj", "Create userid ASDFLkj");
  }
}

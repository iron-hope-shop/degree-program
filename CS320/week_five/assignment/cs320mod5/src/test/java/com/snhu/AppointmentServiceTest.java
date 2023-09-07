package com.snhu;

import static org.junit.Assert.assertTrue;

import java.util.Date;

import org.junit.Test;

public class AppointmentServiceTest {

  AppointmentService svc;

  @Test
  public void shouldAnswerWithTrue() {
    assertTrue(true);
  }

  @Test
  public void testAddAppointment() throws Exception {
    svc = new AppointmentService();
    Date date = new Date();
    svc.addAppointment(date, "Brad needs to have an appointment.");
  }
}

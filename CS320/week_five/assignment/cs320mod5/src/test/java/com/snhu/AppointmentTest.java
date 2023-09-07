package com.snhu;

import static org.junit.Assert.assertTrue;

import java.util.Date;

import org.junit.Test;

public class AppointmentTest {

  Appointment unit;

  @Test
  public void shouldAnswerWithTrue() {
    assertTrue(true);
  }

  @Test
  public void testAddAppointment() throws Exception {
    try {
      Date date = new Date();
      unit = new Appointment("1", date, "Brad needs to have an appointment.");
    } catch (Exception e) {
    }
  }

}

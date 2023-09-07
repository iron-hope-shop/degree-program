// Appointment Class Requirements

// The appointment object shall have a required unique appointment ID string that cannot be longer than 10 characters. The appointment ID shall not be null and shall not be updatable.
// The appointment object shall have a required appointment Date field. The appointment Date field cannot be in the past. The appointment Date field shall not be null.
// Note: Use java.util.Date for the appointmentDate field and use before(new Date()) to check if the date is in the past.
// The appointment object shall have a required description String field that cannot be longer than 50 characters. The description field shall not be null.

package com.snhu;

import java.util.Date;

public class Appointment {
  String id;
  Date date;
  String description;

  public Appointment(String id, Date date, String description) throws Exception {
    if (id.length() > 10) {
      throw new Exception("id must be 1-10 chars.");
    }
    if (id.isEmpty()) {
      throw new Exception("id must be 1-10 chars.");
    }
    if (date.before(new Date())) {
      throw new Exception("date cannot be in the past.");
    }
    if (date == null) {
      throw new Exception("date cannot be null.");
    }
    if (description.length() > 50) {
      throw new Exception("description must be 1-50 chars.");
    }
    if (description.isEmpty()) {
      throw new Exception("description must be 1-50 chars.");
    }
    this.id = id;
    this.date = date;
    this.description = description;
  }

  public String getId() {
    return this.id;
  }

  public Date getDate() {
    return this.date;
  }

  public String getDescription() {
    return this.description;
  }
}

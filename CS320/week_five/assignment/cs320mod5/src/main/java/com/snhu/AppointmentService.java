// Appointment Service Requirements

// The appointment service shall be able to add appointments with a unique appointment ID.
// The appointment service shall be able to delete appointments per appointment ID.

package com.snhu;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class AppointmentService {
  List<Appointment> appointments = new ArrayList<Appointment>();

  public void addAppointment(Date date, String description) throws Exception {
    String uniqueID = UUID.randomUUID().toString().substring(0, 9);
    this.appointments.add(new Appointment(uniqueID, date, description));
  }

  public Appointment deleteAppointment(String id) {
    for (Appointment appointment : this.appointments) {
      if (appointment.getId().equals(id)) {
        return appointment;
      }
    }
    return null;
  }
}

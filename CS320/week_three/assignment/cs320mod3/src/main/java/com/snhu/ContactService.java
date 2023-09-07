// Contact Service Requirements
// The contact service shall be able to add contacts with a unique ID.

// The contact service shall be able to delete contacts per contact ID.

// The contact service shall be able to update contact fields per 
// contact ID. The following fields are updatable:
// firstName
// lastName
// Number
// Address

package com.snhu;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class ContactService {
  List<Contact> contacts = new ArrayList<Contact>();

  public void addContact(String firstName, String lastName, String phone, String address) throws Exception {
    String uniqueID = UUID.randomUUID().toString().substring(0, 9);
    this.contacts.add(new Contact(uniqueID, firstName, lastName, phone, address));
  }

  public Contact deleteContact(String id) {
    for (Contact contact : this.contacts) {
      if (contact.getId().equals(id)) {
        return contact;
      }
    }
    return null;
  }

  public void updateContact(String id, String firstName, String lastName, String phone, String address)
      throws Exception {
    for (Contact contact : this.contacts) {
      if (contact.getId().equals(id)) {
        contact.setFirstName(firstName);
        contact.setFirstName(lastName);
        contact.setPhone(phone);
        contact.setAddress(address);
      }
    }
    throw new Exception("id not matched.");
  }

  public void listContacts() {
    for (Contact contact : this.contacts) {
      System.out.println(contact.getId());
    }
  }

  public String getByFirstName(String firstName) throws Exception {
    for (Contact contact : this.contacts) {
      if (contact.getFirstName().equals(firstName)) {
        return contact.getId();
      }
    }
    throw new Exception("firstname not matched.");
  }
}

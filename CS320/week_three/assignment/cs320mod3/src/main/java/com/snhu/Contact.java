// Contact Class Requirements
// The contact object shall have a required unique contact ID string
//  that cannot be longer than 10 characters. The contact ID shall not be null and shall not be updatable.

// The contact object shall have a required firstName String field
//  that cannot be longer than 10 characters. The firstName field shall not be null.

// The contact object shall have a required lastName String field that
//  cannot be longer than 10 characters. The lastName field shall not be null.

// The contact object shall have a required phone String field that
//  must be exactly 10 digits. The phone field shall not be null.

// The contact object shall have a required address field that must be
//  no longer than 30 characters. The address field shall not be null.

package com.snhu;

public class Contact {
  String id;
  String firstName;
  String lastName;
  String phone;
  String address;

  public Contact(String id, String firstName, String lastName, String phone, String address) throws Exception {
    if (id.length() > 10) {
      throw new Exception("id must be 1-10 chars.");
    }
    if (id.isEmpty()) {
      throw new Exception("id must be 1-10 chars.");
    }
    if (firstName.length() > 10) {
      throw new Exception("firstName must be 1-10 chars.");
    }
    if (firstName.isEmpty()) {
      throw new Exception("firstName must be 1-10 chars.");
    }
    if (lastName.length() > 10) {
      throw new Exception("lastName must be 1-10 chars.");
    }
    if (lastName.isEmpty()) {
      throw new Exception("lastName must be 1-10 chars.");
    }
    if (phone.length() != 10) {
      throw new Exception("phone must be 10 chars.");
    }
    if (address.length() > 30) {
      throw new Exception("address must be 1-30 chars.");
    }
    if (address.isEmpty()) {
      throw new Exception("address must be 1-30 chars.");
    }
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.address = address;
  }

  public String getId() {
    return this.id;
  }

  public String getFirstName() {
    return this.firstName;
  }

  public void setFirstName(String firstName) throws Exception {
    if (firstName.length() > 10) {
      throw new Exception("firstName must be 1-10 chars.");
    }
    if (firstName.isEmpty()) {
      throw new Exception("firstName must be 1-10 chars.");
    }
    this.firstName = firstName;
  }

  public String getLastName() {
    return this.lastName;
  }

  public void setLastName(String lastName) throws Exception {
    if (lastName.length() > 10) {
      throw new Exception("lastName must be 1-10 chars.");
    }
    if (lastName.isEmpty()) {
      throw new Exception("lastName must be 1-10 chars.");
    }
    this.lastName = lastName;
  }

  public String getPhone() {
    return this.phone;
  }

  public void setPhone(String phone) throws Exception {
    if (phone.length() != 10) {
      throw new Exception("phone must be 10 chars.");
    }
    this.phone = phone;
  }

  public String getAddress() {
    return this.address;
  }

  public void setAddress(String address) throws Exception {
    if (address.length() > 30) {
      throw new Exception("address must be 1-30 chars.");
    }
    if (address.isEmpty()) {
      throw new Exception("address must be 1-30 chars.");
    }
    this.address = address;
  }

}

// Task Class Requirements

// The task object shall have a required unique task ID String that cannot be longer than 10 characters.
// The task ID shall not be null and shall not be updatable.

// The task object shall have a required name String field that cannot be longer than 20 characters.
// The name field shall not be null.

// The task object shall have a required description String field that cannot be longer than 50 characters.
// The description field shall not be null.

package com.snhu;

public class Task {
  String id;
  String name;
  String description;

  public Task(String id, String name, String description) throws Exception {
    if (id.length() > 10) {
      throw new Exception("id must be 1-10 chars.");
    }
    if (id.isEmpty()) {
      throw new Exception("id must be 1-10 chars.");
    }
    if (name.length() > 20) {
      throw new Exception("name must be 1-20 chars.");
    }
    if (name.isEmpty()) {
      throw new Exception("name must be 1-20 chars.");
    }
    if (description.length() > 50) {
      throw new Exception("description must be 1-50 chars.");
    }
    if (description.isEmpty()) {
      throw new Exception("description must be 1-50 chars.");
    }
    this.id = id;
    this.name = name;
    this.description = description;
  }

  public String getId() {
    return this.id;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) throws Exception {
    if (name.length() > 10) {
      throw new Exception("name must be 1-20 chars.");
    }
    if (name.isEmpty()) {
      throw new Exception("name must be 1-20 chars.");
    }
    this.name = name;
  }

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) throws Exception {
    if (description.length() > 10) {
      throw new Exception("description must be 1-50 chars.");
    }
    if (description.isEmpty()) {
      throw new Exception("description must be 1-50 chars.");
    }
    this.description = description;
  }
}

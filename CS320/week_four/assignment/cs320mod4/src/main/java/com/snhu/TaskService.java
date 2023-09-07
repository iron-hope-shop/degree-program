// Task Service Requirements
// The task service shall be able to add tasks with a unique ID.

// The task service shall be able to delete tasks per task ID.

// The task service shall be able to update task fields per task ID. The following fields are updatable:
//    Name
//    Description

package com.snhu;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class TaskService {
  List<Task> tasks = new ArrayList<Task>();

  public void addTask(String name, String description) throws Exception {
    String uniqueID = UUID.randomUUID().toString().substring(0, 9);
    this.tasks.add(new Task(uniqueID, name, description));
  }

  public Task deleteTask(String id) {
    for (Task task : this.tasks) {
      if (task.getId().equals(id)) {
        return task;
      }
    }
    return null;
  }

  public void updateTask(String id, String name, String description)
      throws Exception {
    for (Task task : this.tasks) {
      if (task.getId().equals(id)) {
        task.setName(name);
        task.setDescription(description);
      }
    }
    throw new Exception("id not matched.");
  }
}

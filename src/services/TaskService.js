// TaskService.js
import { Task } from '../models/Task.js';
import { Logger } from '../utils/Logger.js';

export class TaskService {
  #tasks = new Map();
  #eventEmitter;

  constructor(eventEmitter) {
    this.#eventEmitter = eventEmitter;
  }

  createTask({ id, title, priority, status }) {
    try {
      const task = new Task({ id, title, priority, status });
      this.#tasks.set(id, task);
      this.#eventEmitter.emit('task:created', task);
      return task;
    } catch (error) {
      Logger.error(`Failed to create task: ${error.message}`);
      throw error;
    }
  }

  updateTask(id, updates) {
    try {
      const task = this.#tasks.get(id);
      if (!task) throw new Error(`Task with ID ${id} not found`);
      const updatedTask = task.update(updates);
      this.#eventEmitter.emit('task:updated', updatedTask);
      return updatedTask;
    } catch (error) {
      Logger.error(`Failed to update task: ${error.message}`);
      throw error;
    }
  }

  getTask(id) {
    const task = this.#tasks.get(id);
    if (!task) throw new Error(`Task with ID ${id} not found`);
    return task;
  }

  getAllTasks() {
    return Array.from(this.#tasks.values());
  }
}
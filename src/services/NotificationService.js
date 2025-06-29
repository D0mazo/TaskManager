// NotificationService.js
import { EventEmitter } from '../utils/EventEmitter.js';
import { Logger } from '../utils/Logger.js';

export class NotificationService {
  #eventEmitter;

  constructor(eventEmitter) {
    this.#eventEmitter = eventEmitter;
    this.#eventEmitter.on('task:created', this.#handleTaskCreated.bind(this));
    this.#eventEmitter.on('task:updated', this.#handleTaskUpdated.bind(this));
  }

  #handleTaskCreated(task) {
    Logger.info(`Task created: ${task.title} (ID: ${task.id})`);
  }

  #handleTaskUpdated(task) {
    Logger.info(`Task updated: ${task.title} (Status: ${task.status}, Priority: ${task.priority})`);
  }
}
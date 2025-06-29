// index.js
import { TaskService } from './services/TaskService.js';
import { NotificationService } from './services/NotificationService.js';
import { EventEmitter } from './utils/EventEmitter.js';
import { Logger } from './utils/Logger.js';

async function main() {
  try {
    const eventEmitter = new EventEmitter();
    const taskService = new TaskService(eventEmitter);
    const notificationService = new NotificationService(eventEmitter);

    // Create tasks
    const task1 = taskService.createTask({
      id: '1',
      title: 'Implement feature X',
      priority: 'high',
      status: 'pending',
    });

    const task2 = taskService.createTask({
      id: '2',
      title: 'Write unit tests',
      priority: 'medium',
      status: 'in-progress',
    });

    // Update a task
    taskService.updateTask('1', { status: 'in-progress', priority: 'medium' });

    // Log all tasks
    Logger.info('All tasks:');
    console.log(taskService.getAllTasks().map(task => task.toJSON()));
  } catch (error) {
    Logger.error(`Application error: ${error.message}`);
  }
}

main();
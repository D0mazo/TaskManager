// TaskService.test.js
import { TaskService } from '../src/services/TaskService.js';
import { EventEmitter } from '../src/utils/EventEmitter.js';

describe('TaskService', () => {
  let taskService;
  let eventEmitter;

  beforeEach(() => {
    eventEmitter = new EventEmitter();
    taskService = new TaskService(eventEmitter);
  });

  test('should create a task', () => {
    const task = taskService.createTask({
      id: '1',
      title: 'Test Task',
      priority: 'low',
      status: 'pending',
    });
    expect(task.id).toBe('1');
    expect(task.title).toBe('Test Task');
  });

  test('should throw error for invalid priority', () => {
    expect(() => {
      taskService.createTask({
        id: '1',
        title: 'Test Task',
        priority: 'invalid',
      });
    }).toThrow('Invalid priority');
  });

  test('should update a task', () => {
    taskService.createTask({ id: '1', title: 'Test Task' });
    const updatedTask = taskService.updateTask('1', { status: 'completed' });
    expect(updatedTask.status).toBe('completed');
  });
});
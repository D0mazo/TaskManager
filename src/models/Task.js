// Task.js
export class Task {
  #id; // Private field for immutability
  #title;
  #priority;
  #status;
  #createdAt;

  constructor({ id, title, priority = 'low', status = 'pending' }) {
    if (!id || !title) throw new Error('Task ID and title are required');
    if (!['low', 'medium', 'high'].includes(priority)) throw new Error('Invalid priority');
    if (!['pending', 'in-progress', 'completed'].includes(status)) throw new Error('Invalid status');

    this.#id = id;
    this.#title = title;
    this.#priority = priority;
    this.#status = status;
    this.#createdAt = new Date();
  }

  get id() { return this.#id; }
  get title() { return this.#title; }
  get priority() { return this.#priority; }
  get status() { return this.#status; }
  get createdAt() { return this.#createdAt; }

  update({ title, priority, status }) {
    if (title) this.#title = title;
    if (priority && ['low', 'medium', 'high'].includes(priority)) this.#priority = priority;
    if (status && ['pending', 'in-progress', 'completed'].includes(status)) this.#status = status;
    return this;
  }

  toJSON() {
    return {
      id: this.#id,
      title: this.#title,
      priority: this.#priority,
      status: this.#status,
      createdAt: this.#createdAt,
    };
  }
}
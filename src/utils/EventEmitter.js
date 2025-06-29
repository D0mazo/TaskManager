// EventEmitter.js
export class EventEmitter {
  #listeners = new Map();

  on(event, callback) {
    if (!this.#listeners.has(event)) {
      this.#listeners.set(event, []);
    }
    this.#listeners.get(event).push(callback);
  }

  emit(event, ...args) {
    const callbacks = this.#listeners.get(event) || [];
    callbacks.forEach(callback => callback(...args));
  }

  off(event, callback) {
    const callbacks = this.#listeners.get(event) || [];
    this.#listeners.set(event, callbacks.filter(cb => cb !== callback));
  }
}
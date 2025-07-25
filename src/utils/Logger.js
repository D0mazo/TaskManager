// Logger.js
export class Logger {
  static #log(level, message) {
    const timestamp = new Date().toISOString();
    console[level](`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  }

  static info(message) {
    this.#log('info', message);
  }

  static error(message) {
    this.#log('error', message);
  }

  static warn(message) {
    this.#log('warn', message);
  }
}
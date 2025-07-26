/**
 * Logger utility for SynapseConnect TAO
 */

export class Logger {
  constructor(context = 'App') {
    this.context = context;
    this.levels = {
      ERROR: 0,
      WARN: 1,
      INFO: 2,
      DEBUG: 3
    };
    this.currentLevel = this.levels.INFO;
  }

  setLevel(level) {
    this.currentLevel = (level in this.levels) ? this.levels[level] : this.levels.INFO;
  }

  error(message, ...args) {
    if (this.currentLevel >= this.levels.ERROR) {
      console.error(`[${new Date().toISOString()}] [ERROR] [${this.context}] ${message}`, ...args);
    }
  }

  warn(message, ...args) {
    if (this.currentLevel >= this.levels.WARN) {
      console.warn(`[${new Date().toISOString()}] [WARN] [${this.context}] ${message}`, ...args);
    }
  }

  info(message, ...args) {
    if (this.currentLevel >= this.levels.INFO) {
      console.log(`[${new Date().toISOString()}] [INFO] [${this.context}] ${message}`, ...args);
    }
  }

  debug(message, ...args) {
    if (this.currentLevel >= this.levels.DEBUG) {
      console.log(`[${new Date().toISOString()}] [DEBUG] [${this.context}] ${message}`, ...args);
    }
  }
}

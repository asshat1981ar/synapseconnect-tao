/**
 * Configuration Manager for SynapseConnect TAO
 */

import { Logger } from '../utils/logger.js';

export class ConfigManager {
  constructor() {
    this.logger = new Logger('ConfigManager');
    this.config = {
      environment: process.env.NODE_ENV || 'development',
      port: parseInt(process.env.PORT) || 3000,
      logLevel: process.env.LOG_LEVEL || 'INFO',
      features: {
        dashboard: true,
        aiEngine: true,
        connectivity: true
      }
    };
  }

  async load() {
    this.logger.info('Loading configuration...');

    // Load environment-specific configuration
    await this.loadEnvironmentConfig();

    this.logger.info('Configuration loaded:', this.config);
  }

  async loadEnvironmentConfig() {
    // Future: Load from config files, environment variables, etc.
    switch (this.config.environment) {
    case 'production':
      this.config.logLevel = 'WARN';
      break;
    case 'development':
      this.config.logLevel = 'DEBUG';
      break;
    case 'test':
      this.config.logLevel = 'ERROR';
      break;
    }
  }

  get(key, defaultValue = null) {
    const keys = key.split('.');
    let value = this.config;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return defaultValue;
      }
    }

    return value;
  }

  set(key, value) {
    const keys = key.split('.');
    const lastKey = keys.pop();
    let target = this.config;

    for (const k of keys) {
      if (!(k in target)) {
        target[k] = {};
      }
      target = target[k];
    }

    target[lastKey] = value;
  }
}

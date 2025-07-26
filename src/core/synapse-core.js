/**
 * SynapseCore - Main system controller
 */

import { Logger } from '../utils/logger.js';
import { ConfigManager } from '../config/config-manager.js';

export class SynapseCore {
  constructor() {
    this.logger = new Logger('SynapseCore');
    this.config = new ConfigManager();
    this.initialized = false;
    this.modules = new Map();
  }

  async initialize() {
    if (this.initialized) {
      this.logger.warn('SynapseCore already initialized');
      return;
    }

    this.logger.info('Initializing SynapseCore...');

    // Load configuration
    await this.config.load();

    // Initialize core modules
    await this.initializeModules();

    this.initialized = true;
    this.logger.info('SynapseCore initialization complete');
  }

  async initializeModules() {
    // Placeholder for module initialization
    this.logger.info('Initializing core modules...');

    // Future modules will be initialized here
    // Examples: AI Engine, Connectivity Manager, Data Processor, etc.
  }

  async shutdown() {
    this.logger.info('Shutting down SynapseCore...');

    // Shutdown modules in reverse order
    for (const [name, module] of this.modules) {
      try {
        if (module.shutdown) {
          await module.shutdown();
        }
        this.logger.info(`Module ${name} shut down successfully`);
      } catch (error) {
        this.logger.error(`Error shutting down module ${name}:`, error);
      }
    }

    this.initialized = false;
    this.logger.info('SynapseCore shutdown complete');
  }

  getStatus() {
    return {
      initialized: this.initialized,
      modules: Array.from(this.modules.keys()),
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    };
  }
}

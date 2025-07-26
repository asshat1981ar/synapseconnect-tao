/**
 * SynapseConnect TAO - Main Entry Point
 * Advanced AI-powered connectivity platform
 */

import { SynapseCore } from './core/synapse-core.js';
import { Logger } from './utils/logger.js';

const logger = new Logger('Main');

async function main() {
  try {
    logger.info('Starting SynapseConnect TAO...');
    
    const synapse = new SynapseCore();
    await synapse.initialize();
    
    logger.info('SynapseConnect TAO initialized successfully');
    
    // Keep the process running
    process.on('SIGINT', async () => {
      logger.info('Shutting down SynapseConnect TAO...');
      await synapse.shutdown();
      process.exit(0);
    });
    
  } catch (error) {
    logger.error('Failed to start SynapseConnect TAO:', error);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main };
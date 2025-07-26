/**
 * Tests for SynapseCore
 */

import { jest, describe, it, expect, beforeEach } from '@jest/globals';
import { SynapseCore } from '../src/core/synapse-core.js';

describe('SynapseCore', () => {
  let synapseCore;

  beforeEach(() => {
    synapseCore = new SynapseCore();
  });

  it('should create SynapseCore instance', () => {
    expect(synapseCore).toBeInstanceOf(SynapseCore);
    expect(synapseCore.initialized).toBe(false);
  });

  it('should initialize successfully', async () => {
    await synapseCore.initialize();
    expect(synapseCore.initialized).toBe(true);
  });

  it('should not initialize twice', async () => {
    const loggerSpy = jest.spyOn(synapseCore.logger, 'warn').mockImplementation(() => {});

    await synapseCore.initialize();
    await synapseCore.initialize();

    expect(loggerSpy).toHaveBeenCalledWith('SynapseCore already initialized');
    expect(synapseCore.initialized).toBe(true);
  });

  it('should shutdown successfully', async () => {
    await synapseCore.initialize();
    await synapseCore.shutdown();
    expect(synapseCore.initialized).toBe(false);
  });

  it('should return status', () => {
    const status = synapseCore.getStatus();
    expect(status).toHaveProperty('initialized');
    expect(status).toHaveProperty('modules');
    expect(status).toHaveProperty('uptime');
    expect(status).toHaveProperty('timestamp');
  });
});
/**
 * Tests for ConfigManager
 */

import { describe, it, expect, beforeEach } from '@jest/globals';
import { ConfigManager } from '../src/config/config-manager.js';

describe('ConfigManager', () => {
  let configManager;

  beforeEach(() => {
    configManager = new ConfigManager();
  });

  it('should create ConfigManager instance', () => {
    expect(configManager).toBeInstanceOf(ConfigManager);
  });

  it('should load configuration', async () => {
    await configManager.load();
    expect(configManager.get('environment')).toBeDefined();
    expect(configManager.get('port')).toBeDefined();
  });

  it('should get configuration values', () => {
    expect(configManager.get('environment')).toBe(process.env.NODE_ENV || 'development');
    expect(configManager.get('port')).toBe(parseInt(process.env.PORT) || 3000);
  });

  it('should get nested configuration values', () => {
    expect(configManager.get('features.dashboard')).toBe(true);
    expect(configManager.get('features.aiEngine')).toBe(true);
  });

  it('should return default value for missing keys', () => {
    expect(configManager.get('nonexistent', 'default')).toBe('default');
    expect(configManager.get('nonexistent')).toBe(null);
  });

  it('should set configuration values', () => {
    configManager.set('test.value', 'testValue');
    expect(configManager.get('test.value')).toBe('testValue');
  });

  it('should set nested configuration values', () => {
    configManager.set('deep.nested.value', 'deepValue');
    expect(configManager.get('deep.nested.value')).toBe('deepValue');
  });
});
/**
 * Tests for Logger utility
 */

import { jest, describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import { Logger } from '../src/utils/logger.js';

describe('Logger', () => {
  let logger;
  let consoleSpy;

  beforeEach(() => {
    logger = new Logger('Test');
    consoleSpy = {
      log: jest.spyOn(console, 'log').mockImplementation(() => {}),
      error: jest.spyOn(console, 'error').mockImplementation(() => {}),
      warn: jest.spyOn(console, 'warn').mockImplementation(() => {})
    };
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should create logger with context', () => {
    expect(logger.context).toBe('Test');
  });

  it('should log info messages', () => {
    logger.info('Test message');
    expect(consoleSpy.log).toHaveBeenCalledWith(
      expect.stringContaining('[INFO] [Test] Test message')
    );
  });

  it('should log error messages', () => {
    logger.error('Error message');
    expect(consoleSpy.error).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR] [Test] Error message')
    );
  });

  it('should log warn messages', () => {
    logger.warn('Warning message');
    expect(consoleSpy.warn).toHaveBeenCalledWith(
      expect.stringContaining('[WARN] [Test] Warning message')
    );
  });

  it('should respect log levels', () => {
    // Create a fresh logger for this test
    const testLogger = new Logger('TestLevel');
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    testLogger.setLevel('ERROR');
    testLogger.info('This should not log');
    testLogger.error('This should log');

    expect(logSpy).not.toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR] [TestLevel] This should log')
    );
    
    logSpy.mockRestore();
    errorSpy.mockRestore();
  });
});
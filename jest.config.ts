const { name } = require('./package.json');

export default {
  displayName: name,
  clearMocks: true,
  coverageProvider: 'v8',
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'jest.setup.ts',
    '<rootDir>/configs/',
    'jest.config.ts',
    '.json',
    '.snap'
  ],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [
    'js',
    'ts',
  ],
  testMatch: [
      '<rootDir>/**/*.test.ts',
  ],
  transform: {
      '^.+\\.ts$': 'ts-jest',
  },
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/index.ts',
    '!src/**/types.ts',
    // '!*.d.ts',
    // '!src/**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
      global: {
          'branches': 100,
          'functions': 100,
          'lines': 100,
          'statements': 100,
      },
  },
};
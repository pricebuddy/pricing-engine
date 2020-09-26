'use strict'

module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)?$',
  testPathIgnorePatterns: ['<rootDir>/src/integration-test'],
  setupFiles: ['jest-date-mock'],
  moduleFileExtensions: ['js', 'json', 'node'],
  collectCoverageFrom: [
    '**/*.{ts,js}',
    '!**/node_modules/**',
    '!**/index.js',
    '!**/integration-test/**',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
}

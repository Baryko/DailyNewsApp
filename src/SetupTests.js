/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line prettier/prettier
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line prettier/prettier
import matchers from '@testing-library/jest-dom/matchers';
// eslint-disable-next-line prettier/prettier
import { expect } from 'vitest';
// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line prettier/prettier

// src/setupTests.js
import { server } from './mocks/server.js'
// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
expect.extend(matchers);

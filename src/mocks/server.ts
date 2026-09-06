import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Create a MSW server for Node.js testing
export const server = setupServer(...handlers);

// Setup for tests
export function setupTestServer() {
  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' });
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });
}

// Start the server
export async function startServer() {
  await server.listen({ onUnhandledRequest: 'bypass' });
  console.log('[MSW] Server started');
}

// Stop the server
export async function stopServer() {
  await server.close();
  console.log('[MSW] Server stopped');
}
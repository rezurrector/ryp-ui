import { setupWorker } from 'msw';
import { handlers } from './handlers';

// Create a MSW worker for browser usage
export const worker = setupWorker(...handlers);

// Start the worker in development
export async function startWorker() {
  if (import.meta.env.MODE === 'development') {
    await worker.start({
      onUnhandledRequest: 'bypass',
    });
    console.log('[MSW] Worker started');
  }
}

// Stop the worker
export async function stopWorker() {
  await worker.stop();
  console.log('[MSW] Worker stopped');
}

// Reset handlers
export function resetHandlers() {
  worker.resetHandlers();
}

// Use handlers
export function useHandlers(...newHandlers: typeof handlers) {
  worker.use(...newHandlers);
}

// Restore handlers
export function restoreHandlers() {
  worker.use(...handlers);
}
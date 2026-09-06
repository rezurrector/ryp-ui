import { http, HttpResponse } from 'msw';

// Example API handlers for mocking
// Add your own handlers here based on your API endpoints

export const handlers = [
  // Example: Mock a GET request to /api/users
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: '1', name: 'John Doe', email: 'john@example.com' },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    ]);
  }),

  // Example: Mock a GET request for a single user
  http.get('/api/users/:id', ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      id,
      name: `User ${id}`,
      email: `user${id}@example.com`,
    });
  }),

  // Example: Mock a POST request to /api/users
  http.post('/api/users', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({
      id: Math.random().toString(36).substring(7),
      ...body,
      createdAt: new Date().toISOString(),
    }, { status: 201 });
  }),

  // Example: Mock a PUT request to /api/users/:id
  http.put('/api/users/:id', async ({ params, request }) => {
    const { id } = params;
    const body = await request.json();
    return HttpResponse.json({
      id,
      ...body,
      updatedAt: new Date().toISOString(),
    });
  }),

  // Example: Mock a DELETE request to /api/users/:id
  http.delete('/api/users/:id', ({ params }) => {
    const { id } = params;
    return HttpResponse.json({ id, deleted: true });
  }),

  // Example: Mock a health check endpoint
  http.get('/api/health', () => {
    return HttpResponse.json({ status: 'ok', timestamp: new Date().toISOString() });
  }),
];
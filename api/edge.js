// api/edge.js
import { faker } from '@faker-js/faker';

// This configuration forces the function to use the Edge Runtime
export const config = {
  runtime: 'edge',
};

// The default export is the request handler
// It receives a standard Request object and returns a standard Response object
export default async function handler(request) {
  const { pathname } = new URL(request.url);
  const userAgent = request.headers.get('user-agent') || 'Unknown User';
  
  // Create a response using the standard Web Response API
  return new Response(
    `Hello from Vercel Edge Function!
    \nYou requested ID using @faker-js/faker: ${faker.string.uuid()}
    \nYou requested: ${pathname}
    \nYour User-Agent: ${userAgent}`,
    {
      status: 200,
      headers: {
        'content-type': 'text/plain',
        'x-edge-location': 'Vercel Global Edge Network', // Custom header to show it works
      },
    }
  );
}
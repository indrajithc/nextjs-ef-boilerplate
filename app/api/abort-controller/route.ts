

const stall = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET(request: Request) {
  // read query parameter named t from request url 
  const url = new URL(request.url);
  const t = url.searchParams.get('t') || '10000';

  request.signal.addEventListener('abort', () => {
    console.log('triggered request aborted');
  });

  await stall(t ? parseInt(t) : 0);

  return new Response('Request completed successfully');
}
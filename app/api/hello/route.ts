
// function to stall for n time
function stall(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function GET(request: Request) {
  // read query parameter named t from request url 
  const url = new URL(request.url);
  const t = url.searchParams.get('t');
  const requestTime = new Date().toISOString();
  if (t) {
    console.log(`Stalling for ${t} ms`);
    await stall(parseInt(t));
  }

  return Response.json({
    message: 'Hello, Next.js!',
    requestTime: requestTime,
    responseTime: new Date().toISOString(),
    data: { foo: 'bar' }
  });
}
import fs from 'fs';

// function to stall for n time
function stall(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function GET(request: Request) {
  // read query parameter named t from request url 
  const url = new URL(request.url);
  const t = url.searchParams.get('t');
  if (t) {
    console.log(`Stalling for ${t} ms`);
    await stall(parseInt(t));
  }

  // list file in the current directory
  const files = await fs.promises.readdir('.');

  return Response.json({
    message: 'List of files in the current directory',
    data: { files },
  });
}

// function to stall for n time
function stall(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function GET(request: Request) {
  // read query parameter named t from request url 
  const url = new URL(request.url);
  const t = url.searchParams.get('t');
  if (t) {
    await stall(parseInt(t));
  }
  const response = await fetch('https://api.vercel.app/products');
  const products = await response.json();
  return Response.json(products);
}
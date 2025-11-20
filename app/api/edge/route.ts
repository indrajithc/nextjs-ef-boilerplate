export const runtime = "edge"; // <-- enables Edge Runtime

export function GET() {
  return new Response("Hello from Edge (Next.js 15)!", {
    status: 200,
    headers: { "Content-Type": "text/plain" }
  });
}

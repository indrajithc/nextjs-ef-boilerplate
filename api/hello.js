// File: api/hello.js

export const config = {
  runtime: "edge", // <-- important
};

export default async function handler(request) {
  return new Response(
    JSON.stringify({
      message: "Hello from Vercel Edge Function!",
      runtime: "edge",
      url: request.url,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "x-custom-runtime": "edge",
      },
    }
  );
}

import type { VercelRequest, VercelResponse } from "@vercel/node";

export const config = {
  runtime: "edge", // this is a pre-requisite
};

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  return response.status(200).json({ text: "I am an Vercel Function!" });
}

import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
// route handler with secret and slug
import { revalidatePath } from 'next/cache';

function getQSParamFromURL(key, url) {
  if (!url) return '';
  const search = new URL(url).search;
  const urlParams = new URLSearchParams(search);
  return urlParams.get(key);
}

export async function GET(request) {
  // Parse query string parameters
  const path = getQSParamFromURL('pathname', request.url);

  if (path) {
    revalidatePath(path);
  }
  return new Response('OK');
}

export async function POST(request) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidateTag("articles");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
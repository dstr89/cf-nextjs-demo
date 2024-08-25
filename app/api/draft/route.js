import { getArticle } from "@/lib/api";
import { cookies, draftMode } from 'next/headers';
import { redirect } from "next/navigation";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (!secret || !slug) {
    return new Response("Missing parameters", { status: 400 });
  }

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  const article = await getArticle(slug);

  if (!article) {
    return new Response("Article not found", { status: 404 });
  }

  draftMode().enable();

  // Override cookie header for draft mode for usage in live-preview
  // https://github.com/vercel/next.js/issues/49927
  const cookieStore = cookies();
  const cookie = cookieStore.get('__prerender_bypass');
  cookies().set({
    name: '__prerender_bypass',
    value: cookie?.value,
    httpOnly: true,
    path: '/',
    secure: true,
    sameSite: 'none',
  });
  
  redirect(`/articles/${article.slug}`);
}
// app/robots.txt/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const content = `
User-agent: *
Disallow:

Sitemap: https://www.sipgo.in/sitemap.xml
  `.trim();

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}

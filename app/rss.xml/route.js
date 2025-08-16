export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0"><channel>
    <title>Milan Lora — Notes</title>
    <link>https://milanlora.com/notes</link>
    <description>Notes feed</description>
    <lastBuildDate>2025-08-16</lastBuildDate>
  </channel></rss>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}

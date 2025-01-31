globalThis.process ??= {}; globalThis.process.env ??= {};
import { S as SITE } from '../chunks/config_pndotWf6.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BpE7oTCp.mjs';

const robots = `
User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", SITE.website).href}
`.trim();
const GET = () => new Response(robots, {
  headers: { "Content-Type": "text/plain" }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

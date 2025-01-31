globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as generateOgImageForSite } from '../chunks/generateOgImages_bnay3lzG.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BpE7oTCp.mjs';

const GET = async () => new Response(await generateOgImageForSite(), {
  headers: { "Content-Type": "image/png" }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

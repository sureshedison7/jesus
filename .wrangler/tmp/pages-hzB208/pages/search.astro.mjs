globalThis.process ??= {}; globalThis.process.env ??= {};
import '../chunks/page-ssr_Bg7GUyqX.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_Bg8Xn_wD.mjs';
import { g as getCollection } from '../chunks/_astro_content_CeFyxJjr.mjs';
import { S as SITE } from '../chunks/config_pndotWf6.mjs';
import { $ as $$Header, b as $$Footer, c as $$Layout } from '../chunks/Footer_BsoHCIpy.mjs';
import { $ as $$Main } from '../chunks/Main_DyYOA5to.mjs';
import { S as SearchBar } from '../chunks/Search_DPmjM_ZW.mjs';
import { g as getSortedPosts } from '../chunks/getSortedPosts_BzbfuThc.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BpE7oTCp.mjs';

const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const sortedPosts = getSortedPosts(posts);
  const searchList = sortedPosts.map(({ data, id }) => ({
    title: data.title,
    description: data.description,
    data,
    id
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Search | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "search" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Search", "pageDesc": "Search any article ..." }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SearchBar", SearchBar, { "client:load": true, "searchList": searchList, "client:component-hydration": "load", "client:component-path": "@components/Search", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/green/Desktop/Astro JS/git/jesus/src/pages/search.astro", undefined);

const $$file = "C:/Users/green/Desktop/Astro JS/git/jesus/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

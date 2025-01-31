globalThis.process ??= {}; globalThis.process.env ??= {};
import '../chunks/page-ssr_Bg7GUyqX.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bg8Xn_wD.mjs';
import { g as getCollection } from '../chunks/_astro_content_CeFyxJjr.mjs';
import { $ as $$Header, b as $$Footer, c as $$Layout } from '../chunks/Footer_BsoHCIpy.mjs';
import { $ as $$Main } from '../chunks/Main_DyYOA5to.mjs';
import { $ as $$Tag } from '../chunks/Tag_CBMoxSsf.mjs';
import { g as getUniqueTags } from '../chunks/getUniqueTags_Dsc-GcSA.mjs';
import { S as SITE } from '../chunks/config_pndotWf6.mjs';
import { g as getSortedPosts } from '../chunks/getSortedPosts_BzbfuThc.mjs';
import { S as SearchBar } from '../chunks/Search_DPmjM_ZW.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BpE7oTCp.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  let tags = getUniqueTags(posts);
  const postss = await getCollection("blog", ({ data }) => !data.draft);
  const sortedPosts = getSortedPosts(postss);
  const searchList = sortedPosts.map(({ data, id }) => ({
    title: data.title,
    description: data.description,
    data,
    id
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tags | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "tags" })} ${maybeRenderHead()}<div class="mx-auto w-full max-w-3xl px-4 "> ${renderComponent($$result2, "SearchBar", SearchBar, { "client:load": true, "searchList": searchList, "client:component-hydration": "load", "client:component-path": "@components/Search", "client:component-export": "default" })} </div> ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Tags", "pageDesc": "All the tags used in posts." }, { "default": ($$result3) => renderTemplate` <ul> ${tags.map(({ tag }) => renderTemplate`${renderComponent($$result3, "Tag", $$Tag, { "tag": tag, "size": "lg" })}`)} </ul> ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/green/Desktop/Astro JS/git/jesus/src/pages/tags/index.astro", undefined);

const $$file = "C:/Users/green/Desktop/Astro JS/git/jesus/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

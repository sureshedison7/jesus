globalThis.process ??= {}; globalThis.process.env ??= {};
import '../chunks/page-ssr_Bg7GUyqX.mjs';
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bg8Xn_wD.mjs';
import { g as getCollection } from '../chunks/_astro_content_CeFyxJjr.mjs';
import { C as Card } from '../chunks/Card_DL9ohUdG.mjs';
import { $ as $$Header, b as $$Footer, c as $$Layout } from '../chunks/Footer_BsoHCIpy.mjs';
import { S as SITE } from '../chunks/config_pndotWf6.mjs';
import { $ as $$Main } from '../chunks/Main_DyYOA5to.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BpE7oTCp.mjs';

const getPostsByGroupCondition = (posts, groupFunction) => {
  const result = {};
  for (let i = 0; i < posts.length; i++) {
    const item = posts[i];
    const groupKey = groupFunction(item, i);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
  }
  return result;
};

const $$Astro = createAstro("https://jesuslovelyrics.pages.dev/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const MonthMap = {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",
    "6": "June",
    "7": "July",
    "8": "August",
    "9": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Archives | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "archives" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Archives", "pageDesc": "All the articles I've archived." }, { "default": ($$result3) => renderTemplate`${Object.entries(
    getPostsByGroupCondition(
      posts,
      (post) => post.data.pubDatetime.getFullYear()
    )
  ).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)).map(([year, yearGroup]) => renderTemplate`${maybeRenderHead()}<div> <span class="text-2xl font-bold">${year}</span> <sup class="text-sm">${yearGroup.length}</sup> ${Object.entries(
    getPostsByGroupCondition(
      yearGroup,
      (post) => post.data.pubDatetime.getMonth() + 1
    )
  ).sort(([monthA], [monthB]) => Number(monthB) - Number(monthA)).map(([month, monthGroup]) => renderTemplate`<div class="flex flex-col sm:flex-row"> <div class="mt-6 min-w-36 text-lg sm:my-6"> <span class="font-bold">${MonthMap[month]}</span> <sup class="text-xs">${monthGroup.length}</sup> </div> <ul> ${monthGroup.map(({ data, id }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${id}`, "frontmatter": data })}`)} </ul> </div>`)} </div>`)}` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/green/Desktop/Astro JS/git/jesus/src/pages/archives/index.astro", undefined);

const $$file = "C:/Users/green/Desktop/Astro JS/git/jesus/src/pages/archives/index.astro";
const $$url = "/archives";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

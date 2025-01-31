globalThis.process ??= {}; globalThis.process.env ??= {};
import '../chunks/page-ssr_Bg7GUyqX.mjs';
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as renderSlot, u as unescapeHTML } from '../chunks/astro/server_Bg8Xn_wD.mjs';
import { S as SITE } from '../chunks/config_pndotWf6.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_tN0OJtMO.mjs';
import { c as $$Layout, $ as $$Header, b as $$Footer } from '../chunks/Footer_BsoHCIpy.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BpE7oTCp.mjs';

const $$Astro = createAstro("https://jesuslovelyrics.pages.dev/");
const $$AboutLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${frontmatter.title} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "about" })} ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, {})} ${maybeRenderHead()}<main id="main-content"> <section id="about" class="prose mb-28 max-w-3xl prose-img:border-0"> <h1 class="text-2xl tracking-wider sm:text-3xl">${frontmatter.title}</h1> ${renderSlot($$result2, $$slots["default"])} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/green/Desktop/Astro JS/git/jesus/src/layouts/AboutLayout.astro", undefined);

const html = () => "<div>\n  <img src=\"/assets/dev.svg\" class=\"sm:w-1/2 mx-auto\" alt=\"coding dev illustration\">\n</div>\n<p>CROSS Lyrics is your ultimate destination for Christian lyrics, chords,\r\nand worship songs from diverse artists and albums, available in multiple languages.\r\nWhether you’re a musician or a worshipper, find the perfect song to elevate your faith journey.\r\nWith a rich collection from around the world, CROSS Lyrics connects believers through music and praise.</p>\n<p>Give any feedback via my <a href=\"mailto:sureshedison77@gmail.com\">email</a>.</p>";

				const frontmatter = {"layout":"../layouts/AboutLayout.astro","title":"About Cross Lyrics"};
				const file = "C:/Users/green/Desktop/Astro JS/git/jesus/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "   \r\n                                    \r\n                           \r\n   \r\n\r\n<div>\r\n  <img src=\"/assets/dev.svg\" class=\"sm:w-1/2 mx-auto\" alt=\"coding dev illustration\">\r\n</div>\r\n\r\n\r\nCROSS Lyrics is your ultimate destination for Christian lyrics, chords,\r\nand worship songs from diverse artists and albums, available in multiple languages.\r\nWhether you're a musician or a worshipper, find the perfect song to elevate your faith journey.\r\nWith a rich collection from around the world, CROSS Lyrics connects believers through music and praise.\r\n\r\n\r\nGive any feedback via my [email](mailto:sureshedison77@gmail.com).\r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$AboutLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

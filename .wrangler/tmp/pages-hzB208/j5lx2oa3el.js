// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_astro/*",
    "/assets/*",
    "/astropaper-og.jpg",
    "/favicon.svg",
    "/toggle-theme.js",
    "/posts/*",
    "/admin",
    "/tags/fr-s-j-berchmans",
    "/tags/jebathotta-jeyageethangal",
    "/tags/lyrics",
    "/tags/raj-prakash-paul"
  ]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "C:\\Users\\green\\Desktop\\Astro JS\\git\\jesus\\.wrangler\\tmp\\pages-hzB208\\bundledWorker-0.16479816170467076.mjs";
import { isRoutingRuleMatch } from "C:\\Users\\green\\Desktop\\Astro JS\\git\\jesus\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "C:\\Users\\green\\Desktop\\Astro JS\\git\\jesus\\.wrangler\\tmp\\pages-hzB208\\bundledWorker-0.16479816170467076.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=j5lx2oa3el.js.map

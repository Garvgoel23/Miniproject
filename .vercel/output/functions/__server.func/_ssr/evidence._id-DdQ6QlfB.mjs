import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/evidence._id-DdQ6QlfB.js
var $$splitNotFoundComponentImporter = () => import("./evidence._id-nKIPPvhr.mjs");
var $$splitComponentImporter = () => import("./evidence._id-BuN9xzk2.mjs");
var Route = createFileRoute("/evidence/$id")({
	head: ({ params }) => ({ meta: [{ title: `Evidence ${params.id} — TrafficVision AI` }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };

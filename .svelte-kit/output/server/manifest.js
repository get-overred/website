export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","assets/overred_logo.svg","favicon-16x16.png","favicon-32x32.png","favicon.ico","fonts/Rubik/OFL.txt","fonts/Rubik/Rubik-Black.ttf","fonts/Rubik/Rubik-BlackItalic.ttf","fonts/Rubik/Rubik-Bold.ttf","fonts/Rubik/Rubik-BoldItalic.ttf","fonts/Rubik/Rubik-ExtraBold.ttf","fonts/Rubik/Rubik-ExtraBoldItalic.ttf","fonts/Rubik/Rubik-Italic.ttf","fonts/Rubik/Rubik-Light.ttf","fonts/Rubik/Rubik-LightItalic.ttf","fonts/Rubik/Rubik-Medium.ttf","fonts/Rubik/Rubik-MediumItalic.ttf","fonts/Rubik/Rubik-Regular.ttf","fonts/Rubik/Rubik-SemiBold.ttf","fonts/Rubik/Rubik-SemiBoldItalic.ttf","robots.txt","site.webmanifest","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain",".ttf":"font/ttf",".webmanifest":"application/manifest+json",".xml":"text/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DaCJR2kN.js","app":"_app/immutable/entry/app.Bhx56gAq.js","imports":["_app/immutable/entry/start.DaCJR2kN.js","_app/immutable/chunks/entry.B04yrovI.js","_app/immutable/chunks/scheduler.ESG4J4As.js","_app/immutable/entry/app.Bhx56gAq.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.ESG4J4As.js","_app/immutable/chunks/index.CbhNv2OM.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		routes: [
			{
				id: "/docs",
				pattern: /^\/docs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/docs/[slug]",
				pattern: /^\/docs\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/privacy-policy",
				pattern: /^\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

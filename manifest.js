export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "camera-selector/_app",
	assets: new Set(["icons8-lens-64.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.iBLD8z-k.js",app:"_app/immutable/entry/app.GHN2wmnm.js",imports:["_app/immutable/entry/start.iBLD8z-k.js","_app/immutable/chunks/D971wQYW.js","_app/immutable/chunks/BXiS_uYJ.js","_app/immutable/chunks/SJ9Vr_A4.js","_app/immutable/entry/app.GHN2wmnm.js","_app/immutable/chunks/BXiS_uYJ.js","_app/immutable/chunks/CEXLBnWZ.js","_app/immutable/chunks/C8LqIRfa.js","_app/immutable/chunks/SJ9Vr_A4.js","_app/immutable/chunks/D0WBRNL3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

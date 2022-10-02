export const manifest = {
	appDir: "_app",
	assets: new Set(["A_GP_budova.jpg","B_GP_pozemek.jpg","D_protokol.pdf","empty.webp","E_GP_VB.jpg","favicon.png","fonts/cmunsi.otf","fonts/cmunso.otf","fonts/cmunss.otf","fonts/cmunsx.otf","F_VN_hranice.pdf","geo.jpg","geo2.jpg","Jan_Zemanek.jpg","landing.jpg","landing.webp","Martin_Zemanek.png","robots.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".pdf":"application/pdf",".webp":"image/webp",".png":"image/png",".otf":"font/otf",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-35a1891e.js","imports":["_app/immutable/start-35a1891e.js","_app/immutable/chunks/index-acf84982.js","_app/immutable/chunks/singletons-9a340c31.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "cenik",
				pattern: /^\/cenik\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "kontakt",
				pattern: /^\/kontakt\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "o-nas",
				pattern: /^\/o-nas\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "odkazy",
				pattern: /^\/odkazy\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "poptavka",
				pattern: /^\/poptavka\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "sluzby/rozdeleni-pozemku",
				pattern: /^\/sluzby\/rozdeleni-pozemku\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "sluzby/vecne-bremeno",
				pattern: /^\/sluzby\/vecne-bremeno\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "sluzby/vytyceni-pozemku",
				pattern: /^\/sluzby\/vytyceni-pozemku\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "sluzby/vytyceni-stavby",
				pattern: /^\/sluzby\/vytyceni-stavby\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "sluzby/zamereni-budovy",
				pattern: /^\/sluzby\/zamereni-budovy\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "sluzby/zamereni-pozemku",
				pattern: /^\/sluzby\/zamereni-pozemku\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

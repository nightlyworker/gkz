// https://nuxt.com/docs/api/configuration/nuxt-config
let dd = new Date().toISOString()

export default defineNuxtConfig({
	/*
 nitro: {
    plugins: ['plugins/content.js']
 },	
 */
 
 app:{
	baseURL: '/'
 },
 // 2005-01-01
 routeRules: {
	// pages
	'/': { sitemap: { changefreq: 'daily', priority: 1, lastmod: dd } },

	'/sitemap': { sitemap: { changefreq: 'daily', priority: 0.9, lastmod: dd } },

	// directory index pages
	'/gene-key': { sitemap: { changefreq: 'daily', priority: 0.9, lastmod: dd } },
	'/guides': { sitemap: { changefreq: 'daily', priority: 0.8, lastmod: dd } },

	// folders
	'/gene-key/*': { sitemap: { changefreq: 'daily', priority: 0.7, lastmod: dd } },
	'/guides/*': { sitemap: { changefreq: 'daily', priority: 0.7, lastmod: dd } },
	'/crash-course/*': { sitemap: { changefreq: 'daily', priority: 0.7, lastmod: dd } },
 },

 devtools: { enabled: false },

 css: [
 	'~/assets/css/main.css',
],

 postcss: {
   plugins: {
     tailwindcss: {},
     autoprefixer: {},
		 /*
		 "postcss-obfuscator":{
			enable: false,
      extensions: [".vue"],
			srcPath: "pages"
			
		}
		*/
   },
 },
 content: {
	documentDriven: true,
	// https://content.nuxtjs.org/api/configuration/#anchorlinks
	// https://github.com/nuxt/content/issues/1834
	markdown: {
		anchorLinks: false
	},
	/*
	ignores: [
		'/sitemap',        // any file or folder that contains the word "hidden"
		      // any folder that exactly matches the word "hidden"
		'human-design-encyclopedia', // any file path matching "/path/to/file"
		'/search',
		'/sitemap'
	]
	*/
  
},
// extends: ["nuxt-lego"],
// https://github.com/harlan-zw/nuxt-seo-kit
 extends: ['nuxt-seo-kit', 'nuxt-umami'],

runtimeConfig: {
	public: {
		indexable: true,
		trailingSlash: false,
		siteUrl: 'https://genekeys.zone',
		siteName: 'Gene Keys Zone',
		// siteDescription: 'Everything about Human Design',
		language: 'en', // prefer more explicit language codes like `en-AU` over `en`
		
	}
},
// https://github.com/nuxtlabs/ui/issues/227
colorMode: {
	classSuffix: '',
	colorMode: 'light',
	preference: 'light'
},
sitemap: {
	autoLastmod: true,
},
robots: {
	disallow: [''],
  allow: '*'	
},
gtag: {
	initialConsent: (process.env.NODE_ENV === 'development') ? false : true,
	id: 'G-4FGL9FG3WR' //g', 'G-P6D5RHGDR8');
},
// https://vee-validate.logaretm.com/v4/integrations/nuxt/
veeValidate: {
    // disable or enable auto imports
    autoImports: false,
},
appConfig: {
	umami: {
    version: 2,
		host: 'https://umm.humandesign.zone', //'https://analytics.umami.is',
		id: '3509aa3e-c33f-426b-8ac2-15e9e03fe921', //'1fe31e35-3fbc-44ae-a217-81730790050b',
		ignoreLocalhost: true,
		useDirective: false
  },
},
delayHydration: {
	mode: 'manual',
	// enables nuxt-delay-hydration in dev mode for testing
	debug: false // process.env.NODE_ENV === 'development'
},
// 'nuxt-delay-hydration'
 modules: ['@nuxthq/ui','@nuxt/content', '@nuxtjs/google-fonts', 'nuxt-gtag', '@vee-validate/nuxt'],

 buildModules: [
	//'@nuxtjs/google-fonts'
 ],

 googleFonts: {
	download:false,
  families: {
    Fraunces: { wght: [400,600,700,800]},
		Inter: true,
  },
	subsets: ['latin']
}
})
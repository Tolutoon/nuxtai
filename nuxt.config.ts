// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxt/eslint",
		"@nuxt/ui",
	],

	devtools: {
		enabled: true,
	},

	css: ["~/assets/css/main.css"],

	routeRules: {
		"/": { prerender: true },
	},

	compatibilityDate: "2025-01-15",

	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				indent: "tab",
			},
		},
	},
	runtimeConfig: {
		tursoDatabaseUrl: "",
		tursoAuthToken: "",
		public: {
			appEnv: "",
		}
	},
});

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
		tursoDatabaseUrl: process.env.TURSO_DATABASE_URL || "",
		tursoAuthToken: process.env.TURSO_AUTH_TOKEN || "",
		githubClientId: process.env.GITHUB_CLIENT_ID || "",
		githubClientSecret: process.env.GITHUB_CLIENT_SECRET || "",
		public: {
			appEnv: process.env.NUXT_PUBLIC_APP_ENV || "development",
		},
	},
});

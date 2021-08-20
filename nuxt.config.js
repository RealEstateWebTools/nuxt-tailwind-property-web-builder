export default {
    debug: true,
    // server: {
    //     port: 8000 // default: 3000
    // },
    // Global page headers: https://go.nuxtjs.dev/config-head
    // router: {
    //     extendRoutes(routes, resolve) {
    //         routes.push({
    //             path: "/users/:id",
    //             components: {
    //                 default: resolve(__dirname, "pages/users"), // or routes[index].component
    //                 // modal: resolve(__dirname, "components/modal.vue")
    //             },
    //             chunkNames: {
    //                 modal: "components/modal"
    //             }
    //         });
    //     }
    // },
    head: {
        title: "modhomes-nuxt-tcss",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        script: [],
        link: [
            { href: "//fonts.googleapis.com/css?family=Roboto" },
            {
                href:
                    "//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic"
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~/assets/css/font-awesome.css",
        "~/assets/slick/slick.css",
        "~/assets/slick/slick-theme.css",
        "~/assets/scss/app.scss"
    ],

    tailwindcss: {
        cssPath: "~/assets/css/tailwind.css",
        configPath: "tailwind.config.js",
        exposeConfig: false,
        config: {}
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "~/plugins/FastI18n.js" }
        // { src: "~/plugins/client-only.js", mode: "client" },
        // { src: "~/plugins/server-only.js", mode: "server" }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    // components: [ { path: '~/components', global: 'dev' } ]
    // components: null
    components: false,
    // Above setting has implications for dev loading speed:
    // https://www.reddit.com/r/Nuxt/comments/kaekug/why_is_the_nuxt_dev_server_so_slow/
    // https://github.com/nuxt/components/issues/18

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        "@nuxtjs/tailwindcss",
        // Simple usage
        // "@nuxtjs/vuetify",
        // With options
        [
            "@nuxtjs/vuetify",
            {
                /* module options */
            }
        ]
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    // modules: [],.
    // modules: ["@nuxtjs/axios"],
    // axios: {
    //     // proxy: true
    // },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    publicRuntimeConfig: {
        pwbApiMainHost:
            process.env.PWB_API_MAIN_HOST || "http://demo.lvh.me:3000"
        // baseURL: process.env.BASE_URL || "https://nuxtjs.org",
        // baseURL:
        //     process.env.NODE_ENV === "production"
        //         ? "https://nuxtjs.org"
        //         : "https://dev.nuxtjs.org"
    },
    serverMiddleware: [
        "~/server-middleware/logger",
        {
            path: "/passthrough",
            handler: "~/server-middleware/passthrough-json.js"
        }
    ]
};

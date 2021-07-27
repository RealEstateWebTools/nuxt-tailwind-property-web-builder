const INMOAPP = {
    clientSettings: {}
};
const getters = {
    currLocale: () => {
        return INMOAPP.clientSettings.display_settings.cl_locale || "en";
    },
    getFastI18nS: key => {
        const deep_value = (obj, path) =>
            path
                .replace(/\[|\]\.?/g, ".")
                .split(".")
                .filter(s => s)
                .reduce((acc, val) => acc && acc[val], obj);
        if (INMOAPP.clientSettings.translations && key) {
            return deep_value(INMOAPP.clientSettings.translations, key) || " ";
            // return state.i18nMessages["core.english"]
        } else {
            return "";
        }
    }
};

// export default {
//   getters,
//   install(Vue, options) {
//     // https://blog.toast38coza.me/make-your-vuex-store-globally-available-by-registering-it-as-a-plugin/
//     Vue.prototype.$fI18n = getters
//     Vue.prototype.$ft = getters.getFastI18nS
//   }
// }

// https://nuxtjs.org/docs/2.x/directory-structure/plugins
export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    // inject("hello", msg => console.log(`Hello ${msg}!`));
    inject("ft", getters.getFastI18nS);
};

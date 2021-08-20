<template>
  <div class="pwb-root">
    <div class="v-application v-application--is-ltr theme--light">
      <div class="pwb-p-site v-application--wrap w-full top-nav-admin-hoist">
        <div class="flex flex-col min-h-screen">
          <PageSections
            :apiEndpoints="apiEndpoints"
            :pageName="pageName"
          ></PageSections>
          <PageMain></PageMain>
          <div id="root-hoist-el"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageMain from "~/components/pwb/PageMain"
import PageSections from "~/components/pwb/json-loaders/PageSections.vue"
export default {
  props: {},
  data() {
    return {
      apiEndpoints: {
        pageDetailsBase: {
          url: `${this.$config.pwbApiMainHost}/api_public/v4/en/page/`,
          // url: "http://demo.lvh.me:3000/api_public/v4/en/page/",
        },
        // clientSettings: {
        //   url: "https://marbella-floating-app.weebrix.com/api_public/v3/en/client_settings",
        // },
      },
    }
  },
  computed: {
    pageName() {
      return this.$route.params.slug || "home_page"
    },
  },
  components: {
    PageMain,
    PageSections,
    // PageHeaderFromBackend,
  },
}
</script>

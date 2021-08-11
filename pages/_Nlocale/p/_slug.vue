<template>
  <div class="pwb-root">
    <div class="v-application v-application--is-ltr theme--light">
      <div class="pwb-p-site v-application--wrap w-full top-nav-admin-hoist">
        <div class="flex flex-col min-h-screen">
          <!-- <PageHeaderFromBackend></PageHeaderFromBackend> -->
          <PageSections
            :apiEndpoints="apiEndpoints"
            :pageName="pageName"
          ></PageSections>
          <PageMain></PageMain>
          <div id="root-hoist-el"></div>
          <!-- <PageFooter></PageFooter> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import PageFooter from "~/components/pwb/PageFooter"
import PageMain from "~/components/pwb/PageMain"
// import PageHeaderFromBackend from "~/components/pwb/PageHeaderFromBackend.vue"
import PageSections from "~/components/pwb/json-loaders/PageSections.vue"
export default {
  components: {
    // PageFooter,
    PageMain,
    PageSections,
    // PageHeaderFromBackend,
  },
  props: {},
  data() {
    return {
      apiEndpoints: {
        pageDetailsBase: {
          url: `${this.$config.pwbApiMainHost}/api_public/v4/en/page/`,
          // url: "http://demo.lvh.me:3000/api_public/v4/en/page/",
        },
        clientSettings: {
          url: "https://marbella-floating-app.weebrix.com/api_public/v3/en/client_settings",
        },
      },
    }
  },
  computed: {
    pageName() {
      return this.$route.params.slug || "home_page"
    },
  },
}
</script>

<template>
  <div class="pwb-root">
    <div class="v-application v-application--is-ltr theme--light">
      <div class="pwb-p-site v-application--wrap w-full top-nav-admin-hoist">
        <div class="flex flex-col min-h-screen">
          <PageHeaderFromBackend></PageHeaderFromBackend>
          <SectionsFromBackend2
            :apiEndpoints="apiEndpoints"
            :pageName="pageName"
          ></SectionsFromBackend2>
          <PageMain></PageMain>
          <div id="root-hoist-el"></div>
          <PageFooter></PageFooter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageFooter from "~/components/pwb/PageFooter"
import PageHeader from "~/components/pwb/PageHeader"
import PageMain from "~/components/pwb/PageMain"
import PageHeaderFromBackend from "~/components/pwb/PageHeaderFromBackend.vue"
import SectionsFromBackend2 from "~/components/pwb/SectionsFromBackend2.vue"
export default {
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
  components: {
    PageFooter,
    PageHeader,
    PageMain,
    SectionsFromBackend2,
    PageHeaderFromBackend,
  },
}
</script>

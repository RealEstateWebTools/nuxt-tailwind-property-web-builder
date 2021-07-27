<template>
  <div class="pwb-root">
    <div class="v-application v-application--is-ltr theme--light">
      <div class="pwb-p-site v-application--wrap w-full top-nav-admin-hoist">
        <div class="flex flex-col min-h-screen">
          <PageHeaderFromBackend></PageHeaderFromBackend>
          <!-- <SectionsFromBackend2
            :apiEndpoints="apiEndpoints"
            :pageName="pageName"
          ></SectionsFromBackend2> -->
          <ListingMain :searchWidgetDetails="searchWidgetDetails"></ListingMain>
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
import ListingMain from "~/components/pwb/listings/ListingMain"
import PageHeaderFromBackend from "~/components/pwb/PageHeaderFromBackend.vue"
import SectionsFromBackend2 from "~/components/pwb/SectionsFromBackend2.vue"
export default {
  props: {},
  data() {
    return {
      apiEndpoints: {
        searchWidgetDetailsBase: {
          url: `${this.$config.pwbApiMainHost}/api_public/v4/en/component_data/`,
        },
      },
      searchWidgetDetails: {
        page: {
          page_sections: [],
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
    ListingMain,
    SectionsFromBackend2,
    PageHeaderFromBackend,
  },
  async fetch() {
    let searchWidgetDetailsUrl =
      this.apiEndpoints.searchWidgetDetailsBase.url + this.pageName
    const searchWidgetDetails = await fetch(searchWidgetDetailsUrl).then(
      (res) => {
        return res.json()
      }
    )
    if (searchWidgetDetails.search_widget) {
      this.searchWidgetDetails = searchWidgetDetails
    } else {
      debugger
      // set status code on server and
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404
      }
      // use throw new Error()
      throw new Error("searchWidgetDetails not found")
    }
  },
}
</script>

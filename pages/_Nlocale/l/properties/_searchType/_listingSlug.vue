<template>
  <div class="listing-slug">
    <ListingMain></ListingMain>
  </div>
</template>

<script>
import ListingMain from "~/components/pwb/listings/ListingMain"
// import SourceJsonLink from "~/components/pwb/mgmt/SourceJsonLink"
export default {
  components: {
    ListingMain,
    // SourceJsonLink,
  },
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
    sourceJsonUrl() {
      return this.apiEndpoints.searchWidgetDetailsBase.url + this.pageName
    },
    pageName() {
      return this.$route.params.slug || "home_page"
    },
  },
  async fetch() {
    // // let sourceJsonUrl =
    // //   this.apiEndpoints.searchWidgetDetailsBase.url + this.pageName
    // const searchWidgetDetails = await fetch(this.sourceJsonUrl).then(
    //   (res) => {
    //     return res.json()
    //   }
    // )
    // if (searchWidgetDetails.search_widget) {
    //   this.searchWidgetDetails = searchWidgetDetails
    // } else {
    //   debugger
    //   // set status code on server and
    //   if (process.server) {
    //     this.$nuxt.context.res.statusCode = 404
    //   }
    //   // use throw new Error()
    //   throw new Error("searchWidgetDetails not found")
    // }
  },
}
</script>

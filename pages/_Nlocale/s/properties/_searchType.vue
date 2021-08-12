<template>
  <div class="flex flex-col min-h-screen">
    <SearchMain
      :searchWidgetConfig="searchWidgetContainer.search_widget"
    ></SearchMain>
    <SourceJsonLink
      @refreshSourceJson="$fetch"
      :currComponentName="currComponentName"
      :sourceJsonUrl="searchWidgetDetailsUrl"
    ></SourceJsonLink>
  </div>
</template>
<script>
import SourceJsonLink from "~/components/pwb/mgmt/SourceJsonLink"
import SearchMain from "~/components/pwb/search/SearchMain"
// import PageSections from "~/components/pwb/json-loaders/PageSections.vue"
export default {
  components: {
    SearchMain,
    SourceJsonLink,
    // PageSections,
  },
  props: {},
  data() {
    return {
      currComponentName: "_searchType",
      apiEndpoints: {
        searchWidgetBase: {
          url: `${this.$config.pwbApiMainHost}/api_public/v4/en/component_data/`,
        },
      },
      searchWidgetContainer: {
        search_widget: {},
      },
    }
  },
  computed: {
    pageName() {
      return this.$route.params.slug || "home_page"
    },
    searchWidgetDetailsUrl() {
      return this.apiEndpoints.searchWidgetBase.url + this.pageName
    },
  },
  async fetch() {
    // let searchWidgetDetailsUrl =
    //   this.apiEndpoints.searchWidgetBase.url + this.pageName
    const searchWidgetContainer = await fetch(this.searchWidgetDetailsUrl).then(
      (res) => {
        return res.json()
      }
    )
    if (searchWidgetContainer.search_widget) {
      this.searchWidgetContainer = searchWidgetContainer
    } else {
      debugger
      // set status code on server and
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404
      }
      // use throw new Error()
      throw new Error("searchWidgetContainer not found")
    }
  },
}
</script>

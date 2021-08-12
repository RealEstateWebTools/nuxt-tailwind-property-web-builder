<template>
  <main class="pwb-p-site-inner flex-grow justify-center">
    <div style="width: 100%" class="all-sects-ct">
      <div class="">
        <div class="mx-0">
          <div>
            <v-layout wrap>
              <div
                class="md:w-1/4 sm:w-full sm:px-2 md:pl-0 md:pr-2 pt-1"
                lg2
                md3
                sm12
              >
                <template>
                  <VerticalSearchForm
                    :searchSelectOptions="
                      searchWidgetConfig.searchSelectOptions
                    "
                    :currentSearchFieldsParams="currentSearchFieldsParams"
                    :searchFields="searchWidgetConfig.search_fields"
                    @triggerSearchUpdate="triggerSearchUpdate"
                  ></VerticalSearchForm>
                </template>
              </div>
              <div class="md:w-3/4 md:px-0 px-2" lg10 md9 sm12>
                <PwbSearchResults
                  :incomingSortOrder="currentSearchFieldsParams['sort']"
                  :resultsObject="resultsObject"
                  :isLoading="loadingSearch"
                  @paginationTrigger="triggerSearchUpdate"
                ></PwbSearchResults>
              </div>
              <SourceJsonLink
                @refreshSourceJson="$fetch"
                :currComponentName="currComponentName"
                :sourceJsonUrl="searchResultsUrl"
              ></SourceJsonLink>
            </v-layout>
            <v-layout row wrap>
              <v-flex xl10 offset-xl1 xs12>
                <!-- <ContentHtml
                  :blockContents="currentPageParts.content_html"
                ></ContentHtml> -->
              </v-flex>
            </v-layout>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import VerticalSearchForm from "~/components/pwb/search/VerticalSearchForm"
import PwbSearchResults from "~/components/pwb/search/PwbSearchResults"
import SourceJsonLink from "~/components/pwb/mgmt/SourceJsonLink"
export default {
  components: {
    SourceJsonLink,
    VerticalSearchForm,
    PwbSearchResults,
  },
  mounted() {
    // this.loadSearchResults(this.currentSearchFieldsParams)
  },
  watch: {},
  data() {
    return {
      currComponentName: "SearchMain",
      loadingSearch: false,
      resultsObject: {
        query_info: {},
        listings: [],
        results_title: "",
      },
    }
  },
  async fetch() {
    // let searchWidgetDetailsUrl =
    //   this.apiEndpoints.searchWidgetDetailsBase.url + this.pageName
    const resultsObjectContainer = await fetch(this.searchResultsUrl).then(
      (res) => {
        return res.json()
      }
    )
    if (resultsObjectContainer.results) {
      this.loadingSearch = false
      this.resultsObject = resultsObjectContainer.results
    } else {
      // set status code on server and
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404
      }
      // use throw new Error()
      throw new Error("resultsObject not found")
    }
  },
  methods: {
    loadSearchResults(incomingSearchParams) {
      let userUiLocale = document.location.pathname.split("/")[1] || "es"
      //TODO use props like below to pass in locale etc..
      //h(compToRender, { props: { hoistComponents: hoistComponents } }),
      // data like below is not available early enough..
      // this.$root.$el.parentElement.dataset.currsearchWidgetConfig
      this.loadingSearch = true
      // let searchParams = JSON.parse(
      //   JSON.stringify(window.location.search || {})
      // )
      let apiUrl = `/api_public/v4/${userUiLocale}/search_simple/results_only`
      apiUrl = apiUrl + "/op/" + (this.searchType || "ignore")
      // if (searchParams.city) {
      //   // url with city as a param will not be page_cached
      //   // serverside as the urls can be too long
      //   apiUrl = apiUrl + "/city/" + (searchParams.city || "ignore")
      // }

      // let incCityParam = (incomingSearchParams["city"] && incomingSearchParams["city"].length > 0) ? incomingSearchParams["city"] : null
      // Thought I had to treat city param differently as an empty string can be returned..
      // but changed autocompletefield to return null in such a case
      apiUrl = apiUrl + "/city/" + (incomingSearchParams["city"] || "ignore")
      apiUrl =
        apiUrl + "/features/" + (incomingSearchParams["features"] || "ignore")
      apiUrl =
        apiUrl +
        "/bedrooms_min/" +
        (incomingSearchParams["bedrooms_min"] || "ignore")
          .toString()
          .split(".")[0]
      apiUrl =
        apiUrl +
        "/bedrooms_max/" +
        (incomingSearchParams["bedrooms_max"] || "ignore")
          .toString()
          .split(".")[0]
      apiUrl =
        apiUrl +
        "/bathrooms_min/" +
        (incomingSearchParams["bathrooms_min"] || "ignore")
          .toString()
          .split(".")[0]
      apiUrl =
        apiUrl +
        "/bathrooms_max/" +
        (incomingSearchParams["bathrooms_max"] || "ignore")
          .toString()
          .split(".")[0]
      // apiUrl = apiUrl + "/bedrooms_min/" + (incomingSearchParams["bedrooms_min"] || "ignore")
      // apiUrl = apiUrl + "/bathrooms_min/" + (incomingSearchParams["bathrooms_min"] || "ignore")
      apiUrl =
        apiUrl + "/price_min/" + (incomingSearchParams["price_min"] || "ignore")
      apiUrl =
        apiUrl + "/price_max/" + (incomingSearchParams["price_max"] || "ignore")
      apiUrl = apiUrl + "/type/" + (incomingSearchParams["type"] || "ignore")
      apiUrl = apiUrl + "/sort/" + (incomingSearchParams["sort"] || "ignore")
      apiUrl = apiUrl + "/page_no/" + (incomingSearchParams["page_no"] || "1")
      apiUrl =
        apiUrl + "/cs/" + (incomingSearchParams["cannedSearchUuid"] || "ign")
      // apiPublicService()
      //   .get(apiUrl, {})
      //   .then(
      //     (response) => {
      //       this.loadingSearch = false
      //       this.resultsObject = response.data.results
      //     },
      //     (err) => {
      //       console.log(err)
      //     }
      //   )
    },
    triggerSearchUpdate(fieldDetails) {
      // I get to here by bubbling up selectChanged on input fields
      // -- is there a cleaner soution that makes use of vuex???
      var searchParams = this.currentSearchFieldsParams
      // var searchParams = new URLSearchParams(window.location.search)

      // let routeParams = JSON.parse(JSON.stringify(window.location.search || {}))
      // need to do JSON trick above as passing $route.query to
      // $router.push does not work
      if (fieldDetails.inputType === "slider") {
        let minQueryStringName = fieldDetails.fieldName + "_min"
        let maxQueryStringName = fieldDetails.fieldName + "_max"
        searchParams[minQueryStringName] = fieldDetails.newValue[0]
        searchParams[maxQueryStringName] = fieldDetails.newValue[1]
        // searchParams.set(minQueryStringName, fieldDetails.newValue[0])
        // searchParams.set(maxQueryStringName, fieldDetails.newValue[1])
      } else {
        searchParams[fieldDetails.queryStringName] = fieldDetails.newValue
        // searchParams.set(fieldDetails.queryStringName, fieldDetails.newValue)
      }
      this.loadSearchResults(searchParams)

      let urlParams = new URLSearchParams(window.location.search)
      Object.keys(searchParams).forEach((sParam) => {
        let paramVal = searchParams[sParam]
        if (paramVal) {
          urlParams.set(sParam, paramVal)
        }
      })
      const nextURL = location.pathname + "?" + urlParams.toString()
      // location.search.replace(/[\?&]message=[^&]+/, "").replace(/^&/, "?")
      const nextTitle = "My new page title"
      const nextState = { additionalInformation: "Updated the URL with JS" }

      // This will create a new entry in the browser's history, without reloading
      // window.history.pushState(nextState, nextTitle, nextURL)

      // This will replace the current entry in the browser's history, without reloading
      window.history.replaceState(nextState, nextTitle, nextURL)
      // window.location.search = searchParams.toString()
    },
  },
  computed: {
    searchResultsUrl() {
      let searchResultsUrl = `${this.$config.pwbApiMainHost}/api_public/v4/en/search_simple/results_only/op/regular_rentals/city/ignore/features/ignore/bedrooms_min/0/bedrooms_max/ignore/bathrooms_min/0/bathrooms_max/ignore/price_min/ignore/price_max/ignore/type/ignore/sort/priceDesc/page_no/1/cs/ign`
      return searchResultsUrl
    },
    showMap() {
      if (this.searchWidgetConfig.general_search_config.hide_map) {
        return false
      } else {
        return this.mapMarkers.length > 0
      }
    },
    currentSearchFieldsParams() {
      // Dec 2020 - this allows me to intialise the search with
      // defaults from the server
      let searchParams = new URLSearchParams() // (window.location.search)
      let currentSearchFieldsParams = {}
      let searchFields = this.searchWidgetConfig.search_fields || []
      searchFields.forEach((field) => {
        let queryStringVal = searchParams.get(field.queryStringName)
        // If param is set in Url, use that otherwise use default from config
        currentSearchFieldsParams[field.queryStringName] =
          queryStringVal || field.defaultValueForSearch
      })
      return currentSearchFieldsParams
    },
    // searchWidgetConfig() {
    //   // let searchWidgetConfig = { search_fields: [] }
    //   // if (this.$root.$el.parentElement.dataset.currsearchWidgetConfig) {
    //   // searchWidgetConfig = JSON.parse(
    //   //   this.$root.$el.parentElement.dataset.currsearchWidgetConfig
    //   // )
    //   // }
    //   // let rawData = this.componentData || '{"general_search_config":{}}'
    //   // let searchWidgetConfig = JSON.parse(rawData)
    //   // return searchWidgetConfig
    //   debugger
    //   return this.searchWidgetDetails.search_widget
    // },
    currentPageParts() {
      return {}
    },
    fallbackCenter() {
      var mapMarker = null
      return mapMarker ? mapMarker.position : { lat: 15, lng: 15 }
    },
    searchType() {
      return this.searchWidgetConfig.search_type // "rentals"
    },
    mapMarkers() {
      // let mapMarker = {
      //   position: {
      //     lat: 36.7213028,
      //     lng: -4.4216366,
      //   },
      //   title: "title",
      // }
      let mapMarkers = []
      let listingsToDisplay = this.resultsObject.listings
      if (listingsToDisplay) {
        // var that = this
        // var preamble = "alquiler-vacacional"
        // if (that.$store.state.coreStore.currentLocale === "en") {
        //   preamble = "vacation-rentals"
        // }
        listingsToDisplay.forEach(function (property) {
          if (property.longitude) {
            mapMarkers.push({
              show_url: property.url,
              // id: property.id,
              title: property.title,
              image_url: property.thumb_image_url,
              position: {
                lat: property.latitude,
                lng: property.longitude,
              },
            })
          }
        })
      }
      return mapMarkers
    },
  },
  props: {
    searchWidgetConfig: {
      type: Object,
    },
    componentData: {
      type: String,
      // default: () => {
      //   general_search_config: {
      //   }
      // },
    },
  },
}
</script>

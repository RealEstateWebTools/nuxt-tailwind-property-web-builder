<template>
  <div
    class="pt-0 container search-results-cont container--fluid grid-list-md px-0"
  >
    <v-layout row wrap>
      <v-flex xs12 class="">
        <v-card class="inmo-card w-full">
          <v-card-text>
            <div class="pt-4">{{ resultsObject.results_title }}</div>
          </v-card-text>
          <v-card-actions></v-card-actions>
        </v-card>
      </v-flex>
      <div class="flex xs12">
      </div>
      <v-flex xs12>
        <v-layout v-if="resultsObject.listings.length > 1" row wrap>
          <div class="flex py-3 xs3 md3 xl2">{{ $ft("client_shared.fieldLabels.sortBy") }}:</div>
          <v-flex @click="changeSort('priceAsc')" xs3 md3 xl2>
            <button
              type="button"
              :class="[
                `m-1 v-btn v-btn--depressed v-btn--flat v-size--small text-white`,
                { 'bg-gray-400': sortCode !== 'priceAsc' },
                { 'bg-primary': sortCode === 'priceAsc' },
              ]"
            >
              <span class="v-btn__content">{{
                $ft("client_shared.fieldLabels.priceAsc")
              }}</span>
            </button>
          </v-flex>
          <v-flex @click="changeSort('priceDesc')" xs3 md3 xl2>
            <button
              type="button"
              :class="[
                `m-1 v-btn v-btn--depressed v-btn--flat v-size--small text-white`,
                { 'bg-gray-400': sortCode !== 'priceDesc' },
                { 'bg-primary': sortCode === 'priceDesc' },
              ]"
            >
              <span class="v-btn__content">{{
                $ft("client_shared.fieldLabels.priceDesc")
              }}</span>
            </button>
            <!-- <v-btn
              :color="sortCode === 'priceDesc' ? 'primary' : ''"
              depressed
              small
              >{{ $ft("client_shared.fieldLabels.priceDesc") }}</v-btn
            > -->
          </v-flex>
          <!-- <v-flex @click="changeSort('completionAsc')" xs2>
            <v-btn
              :color="(sortCode === 'completionAsc') ? 'primary' : ''"
              depressed
              small
            >{{ $ft('client_shared.fieldLabels.completionAsc')}}</v-btn>
          </v-flex>
          <v-flex @click="changeSort('completionDesc')" xs2>
            <v-btn
              :color="(sortCode === 'completionDesc') ? 'primary' : ''"
              depressed
              small
            >{{ $ft('client_shared.fieldLabels.completionDesc')}}</v-btn>
          </v-flex>-->
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <div class="w-full">
          <v-layout row wrap>
            <v-flex xs12 class="">
              <v-pagination
                v-if="pagesCount > 1"
                class="text-center mx5 w-full"
                v-model="queryInfo.CurrentPage"
                total-visible="12"
                :length="pagesCount"
                @input="onPageChange"
              ></v-pagination>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
      <v-flex xs12 v-if="isLoading">
        <v-progress-linear :indeterminate="true"></v-progress-linear>
      </v-flex>
      <div
        v-else
        class="w-full pwb-search-res mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
      >
        <div
          v-for="(property, index) in sortedPropertiesToDisplay"
          :key="property.listing_uuid"
        >
          <ListingColItemFunky
            :removable="false"
            :favouritable="false"
            :currentListing="property"
            :index="index"
          ></ListingColItemFunky>
        </div>
      </div>
      <!-- <v-flex
        md4
        px-1
        my-1
        v-for="(property, index) in sortedPropertiesToDisplay"
        :key="property.id"
        class="w-full search-result-item"
      >
        <ListingColItem
          :favouritable="true"
          :noticeSnackbar="noticeSnackbar"
          :noTransitionDelay="true"
          :currentListing="property"
          :index="index"
        ></ListingColItem>
      </v-flex> -->
      <v-flex mb-5 xs-12>
        <!-- <template v-if="mapMarkers.length > 2">
          <MapViewer
            style="min-height: 600px"
            :mapMarkers="mapMarkers"
            :zoom="15"
          ></MapViewer>
        </template> -->
      </v-flex>
    </v-layout>
    <v-snackbar
      v-model="noticeSnackbar.isActive"
      :top="noticeSnackbar.top"
      :color="noticeSnackbar.color"
      :multi-line="noticeSnackbar.mode === 'multi-line'"
      :timeout="noticeSnackbar.timeout"
      :vertical="noticeSnackbar.mode === 'vertical'"
    >
      <span>
        {{ $ft("client_shared.core.saved") }}. &nbsp;&nbsp;
        <a class="maincolor" href="/favourites">{{
          $ft("client_shared.labels.viewFavs")
        }}</a>
      </span>
      <v-btn dark text @click="noticeSnackbar.isActive = false">
        <v-icon>clear</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>
<script>
import _ from "lodash"
// import ListingColItemModern from "~/components/pwb/listings/ListingColItemModern"
import ListingColItemFunky from "~/components/pwb/listings/ListingColItemFunky"

// import MapViewer from "~/components/pwb/components-geo/MapViewer"
export default {
  components: {
    // ListingColItem,
    ListingColItemFunky,
    // MapViewer,
  },
  props: ["resultsObject", "isLoading", "incomingSortOrder"],
  data: () => ({
    sortCode: "priceAsc",
    noticeSnackbar: {
      top: true,
      isActive: false,
      color: "green",
      mode: "",
      timeout: 5000,
      // text: 'Hello, I\'m a snackbar'
    },
  }),
  methods: {
    onPageChange(newPage) {
      let fieldDetails = {
        newValue: newPage,
        queryStringName: "page_no",
      }
      this.$emit("paginationTrigger", fieldDetails)
    },
    changeSort(sortVal) {
      this.sortCode = sortVal
      // Above ensures the correct label is highlighted
      if (this.pagesCount > 1) {
        // Only need to hit server where there is more than one page
        let fieldDetails = {
          newValue: sortVal,
          queryStringName: "sort",
        }
        this.$emit("paginationTrigger", fieldDetails)
      } else {
        let urlParams = new URLSearchParams(window.location.search)
        urlParams.set("sort", sortVal)
        let nextURL = location.pathname + "?" + urlParams.toString()
        window.history.replaceState(null, null, "?" + urlParams.toString())
      }
    },
  },
  computed: {
    // showMap() {
    //   return true
    // },
    // mapMarkers() {
    //   let mapMarker = {
    //     position: {
    //       lat: 36.7213028,
    //       lng: -4.4216366,
    //     },
    //     title: "title",
    //   }
    //   // debugger
    //   return [mapMarker]
    // },
    allListings() {
      return this.resultsObject.listings
    },
    sortedPropertiesToDisplay() {
      if (this.pagesCount > 1) {
        // where there are multiple pages, sorting has to be done server-side
        return this.allListings
      } else {
        if (this.sortCode === "priceAsc") {
          return _.sortBy(this.allListings, "price_sale_current")
        }
        if (this.sortCode === "priceDesc") {
          return _.sortBy(this.allListings, "price_sale_current").reverse()
        }
        // if (this.sortCode === "completionAsc") {
        //   return _.sortBy(this.allListings, "project_finish")
        // }
        // if (this.sortCode === "completionDesc") {
        //   return _.sortBy(this.allListings, "project_finish").reverse()
        // }
      }
    },
    queryInfo() {
      return this.resultsObject.query_info
    },
    pagesCount() {
      if (this.queryInfo) {
        return Math.ceil(
          this.queryInfo.PropertyCount / this.queryInfo.PropertiesPerPage
        )
      } else {
        return 0
      }
    },
  },
  mounted: function () {
    this.sortCode = this.incomingSortOrder
  },
  // computed: {}
}
</script>
<style scoped>
</style>
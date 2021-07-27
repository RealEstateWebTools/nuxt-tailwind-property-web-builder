<template>
  <main class="pwb-p-site-inner flex-grow justify-center">
    <div style="width: 100%" class="all-sects-ct">
      <div class="rental-listing-ctr">
        <div>
          <div class="sec-bg-container t-container mx-auto">
            <h1
              class="
                sm:text-3xl
                text-2xl
                font-medium
                text-center
                title-font
                text-gray-900
                pb-5
                pt-10
              "
            >
              {{ currentProperty.title }}
            </h1>
            <div></div>
          </div>

          <div
            class="
              listing-images-target
              sec-bg-container
              t-container
              mx-auto
              pt-5
            "
          >
            <div id="listingImagesTarget" class="vue-portal-target"></div>
            <div class="flex flex-wrap no-underline hover:no-underline">
              <div class="w-full flex flex-col flex-grow flex-shrink">
                <v-card class="h-full ma-0 pa-0">
                  <div class="listing-v-carousel">
                    <ListingVCarousel
                      :currentProperty="currentProperty"
                    ></ListingVCarousel>
                  </div>
                </v-card>
              </div>
            </div>
          </div>

          <div
            class="rental-hoist-ctr sec-bg-container t-container mx-auto pt-5"
          >
            <div data-main-comp="ShowListingHoist"></div>
            <div
              class="hoist-data"
              data-component-name="ShowListingHoist"
              data-component-data="<%= render(partial: 'json_shared/cached_listing_for_rent_long', formats: [:json], locals: {}) %>"
            ></div>
          </div>
          <!-- start tailwind section -->
          <section class="text-gray-700 body-font">
            <div
              class="
                sec-bg-container
                t-container
                pt-10
                pb-20
                mx-auto
                flex flex-wrap
                px-2
              "
            >
              <div class="w-full md:w-2/3 flex flex-col flex-grow flex-shrink">
                <div class="mx-2 py-5">
                  <ListingVitals
                    :currentProperty="currentProperty"
                  ></ListingVitals>
                </div>
                <div class="mb-10">
                  <h1
                    class="
                      sm:text-3xl
                      text-2xl
                      font-medium
                      title-font
                      text-gray-900
                      mb-4
                      text-center
                    "
                  >
                    Description
                  </h1>
                  <p class="text-base leading-relaxed mx-auto">
                    {{ currentProperty.description }}
                  </p>
                </div>
                <div class="grid grid-cols-3 features-container mb-10 gap-4">
                  <div
                    v-for="feature_field_key in currentProperty.feature_field_keys"
                    :key="feature_field_key.uuid"
                    class="py-1 w-full"
                  >
                    <div class="bg-gray-200 rounded flex p-4 items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span class="title-font font-medium">
                        {{ feature_field_key.global_key }}
                      </span>
                    </div>
                  </div>
                </div>
                <!-- <%= render "pwb_premium/listings/parts/social_sharing" %> -->
              </div>
              <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                <div id="listingFormTarget" class="listing-form-target"></div>
              </div>
            </div>
          </section>
          <!-- end tailwind section -->
        </div>
        <div id="listingMapTarget" class="listing-map-target"></div>
      </div>
    </div>
  </main>
</template>
<script>
// import VerticalSearchForm from "~/components/pwb/search/VerticalSearchForm"
// import MapViewer from "~/components/pwb/geo/MapViewer"
// import FavBtnSection from "~/components/pwb/FavBtnSection"
// import NarrowEnquiryForm from "~/components/pwb/forms/NarrowListingEnquiryForm"
import ListingVCarousel from "~/components/pwb/images/ListingVCarousel"
import ListingVitals from "~/components/pwb/listings/ListingVitals"
export default {
  components: {
    ListingVCarousel,
    ListingVitals,
  },
  mounted() {
    // this.loadcurrentProperty(this.currentSearchFieldsParams)
  },
  watch: {},
  data() {
    return {
      currentProperty: {},
    }
  },
  async fetch() {
    // let searchWidgetDetailsUrl =
    //   this.apiEndpoints.searchWidgetDetailsBase.url + this.pageName
    const currentListingContainer = await fetch(this.currentPropertyUrl).then(
      (res) => {
        return res.json()
      }
    )
    if (currentListingContainer.listing) {
      this.currentProperty = currentListingContainer.listing
    } else {
      // set status code on server and
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404
      }
      // use throw new Error()
      throw new Error("currentProperty not found")
    }
  },
  methods: {},
  computed: {
    currentPropertyUrl() {
      let currentPropertyUrl =
        "http://demo.lvh.me:3000/api_public/v4/en/component_data/listing/ss"
      return currentPropertyUrl
    },
    mapMarkers: function () {
      let title = this.currentProperty.title || "currr"
      let mapMarker = {
        position: {
          lat: 36.7213028,
          lng: -4.4216366,
        },
        title: title,
      }
      if (this.currentProperty.latitude) {
        mapMarker.position.lat = this.currentProperty.latitude
        mapMarker.position.lng = this.currentProperty.longitude
      }
      return [mapMarker]
    },
  },
  props: {
    // searchWidgetDetails: {
    //   type: Object,
    // },
    // componentData: {
    //   type: String,
    // },
  },
}
</script>

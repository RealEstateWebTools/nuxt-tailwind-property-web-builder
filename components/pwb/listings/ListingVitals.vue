<template>
  <div class="layout mb-3 listing-top-row row wrap">
    <div class="flex xl9 lg9 md12 sm12 xs12">
      <div class="">
        <div class="layout row wrap">
          <div class="flex listing-summary-content mx-4 xs12">
            <span class="title-details"
              ><i aria-hidden="true" class="v-icon mr-1 material-icons"
                >hotel</i
              >
              {{ currentProperty.count_bedrooms }}
            </span>
            <span class="title-details"
              ><i aria-hidden="true" class="v-icon mr-1 material-icons"
                >bathtub</i
              >
              {{ currentProperty.count_bathrooms }}
            </span>
            <span class="title-details"
              ><i aria-hidden="true" class="v-icon mr-1 material-icons"
                >aspect_ratio</i
              >
              {{ currentProperty.formatted_constructed_area }}
            </span>
            <span class="title-details r-price-details">
              <span>
                <span>
                  {{ currentProperty.formatted_display_price }}
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <!-- swiper gallery -->
    </div>
  </div>
</template>
<script>
// import ListingVCarousel from "~/components/pwb/images/ListingVCarousel"
export default {
  components: {
    // ListingVCarousel,
  },
  mounted() {
    // this.loadcurrentProperty(this.currentSearchFieldsParams)
  },
  watch: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  props: {
    currentProperty: {
      type: Object,
    },
  },
}
</script>

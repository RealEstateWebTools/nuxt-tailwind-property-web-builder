<template>
  <div>
    <v-carousel
      style="min-height: 250px"
      height="auto"
      :cycle="false"
      v-model="carouselModel"
    >
      <v-carousel-item
        v-for="(item, i) in lightboxImages"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    currentListing: {
      type: Object,
      default: () => {
        general_search_config: {
        }
      },
    },
  },
  data() {
    return {
      carouselModel: 0,
    }
  },
  computed: {
    lightboxImages() {
      var lightboxImages = []
      var imageDetails = this.currentListing.listing_photos || []
      if (imageDetails.length > 0) {
        imageDetails.forEach(function (imageDetail, index) {
          lightboxImages.push({
            thumb: imageDetail.image.small_fill.url,
            src: imageDetail.image.url,
            alt_text: "",
          })
        })
        return lightboxImages
      } else {
        return []
      }
    },
  },
  watch: {
    // tandcAccepted(newValue, oldValue) {
    //   if (newValue === true) {
    //     this.promptTandC = false
    //   }
    // },
  },
  methods: {},
}
</script>
<template>
  <v-card
    class="vert-search mb-10 pb-5 inmo-card sm:mx-2 md:ml-0 md:mr-2 px-0 py-0"
  >
    <v-progress-linear
      v-if="isLoading && $vuetify.breakpoint.smAndDown"
      :indeterminate="true"
    ></v-progress-linear>
    <v-container class="pa-1">
      <span name="search-box-fade">
        <v-card-text>
          <v-layout wrap row>
            <v-flex xs12>
              <div class="text-xs-left py-2 headline">
                <span class>Search</span>
              </div>
            </v-flex>
            <v-flex
              v-for="fieldDetails in orderedSearchFields"
              :key="fieldDetails.fieldName"
              xs12
            >
              <SearchFieldResolver
                :fieldDetails="fieldDetails"
                @triggerSearchUpdate="triggerSearchUpdate"
                :currentFieldValue="
                  currentSearchFieldsParams[fieldDetails.queryStringName]
                "
                :currentMinPriceValue="currentMinPriceValue"
                :searchSelectOptions="searchSelectOptions"
              ></SearchFieldResolver>
            </v-flex>
            <!-- <v-flex v-if="extraFieldsButtonVisible" pt-3 xs12>
              <v-btn
                class="more-filters-button white--text"
                large
                depressed
                block
                color="primary"
                @click="toggleFilters()"
                >{{ moreFiltersText }}</v-btn
              >
            </v-flex> -->
          </v-layout>
        </v-card-text>
      </span>
    </v-container>
  </v-card>
</template>
<script>
import SearchFieldResolver from "~/components/pwb/search/SearchFieldResolver"
export default {
  components: {
    SearchFieldResolver,
  },
  props: {
    currentSearchFieldsParams: {
      type: Object,
      default() {
        return {}
      },
    },
    searchFields: {
      type: Array,
      default() {
        return []
      },
    },
    searchSelectOptions: {
      type: Object,
      default() {
        return {}
      },
    },
    isLoading: {
      type: Boolean,
    },
    isMobileModal: {
      type: Boolean,
    },
  },
  // props: [
  //   "searchFields",
  //   "currentSearchFieldsParams",
  //   "searchSelectOptions",
  //   "isLoading",
  //   "isMobileModal",
  // ],
  methods: {
    toggleFilters() {
      // Oct 2019 - toggling filters is redundant
      // this.moreFiltersSelected = !this.moreFiltersSelected
    },
    triggerSearchUpdate(fieldDetails) {
      if (fieldDetails.fieldName === "minPrice") {
        this.newCurrentMinPriceValue = fieldDetails.newValue
      }
      // up the chain
      this.$emit("triggerSearchUpdate", fieldDetails)
    },
  },
  computed: {
    currentMinPriceValue() {
      return (
        this.newCurrentMinPriceValue ||
        this.currentSearchFieldsParams["price_min"]
      )
    },
    // currentMinPriceValue: {
    //   // getter
    //   get: function () {
    //     return this.currentSearchFieldsParams["price_min"]
    //   },
    //   // setter
    //   set: function (newValue) {
    //     var names = newValue.split(" ")
    //     this.firstName = names[0]
    //     this.lastName = names[names.length - 1]
    //   },
    // },
    orderedSearchFields() {
      let searchFields = this.searchFields || []
      let sortedFields = searchFields.sort(
        (a, b) => a.sort_order - b.sort_order
      )
      return sortedFields
    },
  },
  data: () => ({
    newCurrentMinPriceValue: null,
    // moreFiltersSelected: false
  }),
  mounted: function () {},
}
</script>
<style scoped>
.v-progress-linear {
  margin: 0px;
}
</style>
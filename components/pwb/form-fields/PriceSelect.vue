<template>
  <div :class="fieldDetails.fieldName">
    <v-select
      :items="selectItems"
      v-model="localFieldValue"
      :label="$ft(fieldDetails.labelTextTKey)"
      :hint="$ft(fieldDetails.labelTextTKey)"
      :persistent-hint="true"
      :placeholder="$ft(fieldDetails.labelTextTKey)"
      @change="fieldChangeHandler"
      item-text="name"
      single-line
      bottom
    ></v-select>
  </div>
</template>
<script>
// import _ from "lodash"
export default {
  // :label="$ft(fieldDetails.labelTextTKey)"
  // above does not seem to do anything on the autocomplete field..
  props: [
    // "saleOrRentalCat",
    "fieldDetails",
    "currentFieldValue",
    "fieldOptions",
    "mobileExtraFieldsVisible",
    "currentMinPriceValue",
  ],
  data() {
    return {
      localFieldValue: "",
    }
  },
  watch: {
    currentFieldValue: {
      handler(newValue, oldVal) {
        let cfv = ""
        if (newValue) {
          cfv = newValue
        }
        this.localFieldValue = cfv
      },
      // deep: true,
      immediate: true,
    },
  },
  computed: {
    selectItems() {
      let selectItems = this.fieldDetails.optionsValues || []
      let formatedSelectItems = [
        {
          name: "",
          value: "0",
        },
      ]
      // Above adds option of 0 min val to minPrice
      if (this.fieldDetails.fieldName === "maxPrice") {
        formatedSelectItems = []
      }
      selectItems.forEach((selectItem) => {
        let optionValue = selectItem.replace(/,/g, "")
        if (
          optionValue === this.currentMinPriceValue &&
          this.fieldDetails.fieldName === "maxPrice"
        ) {
          //Below means values below the minPrice currently set
          // will not be available as maxPrice
          formatedSelectItems = []
        }
        formatedSelectItems.push({
          name: this.fieldDetails.currencyPrefix + selectItem,
          value: optionValue,
        })
      })
      return formatedSelectItems
    },
    // showField() {
    //   if (this.fieldDetails.toggleOnMobile) {
    //     return this.mobileExtraFieldsVisible
    //     // return !(this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm)
    //     // returns false for mobiles
    //   } else {
    //     return true
    //   }
    // }
  },
  methods: {
    fieldChangeHandler(selectKey) {
      this.fieldDetails.newValue = selectKey
      this.$emit("selectChanged", this.fieldDetails)
    },
  },
}
</script>
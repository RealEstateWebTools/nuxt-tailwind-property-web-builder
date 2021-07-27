<template>
  <div class>
    <div class="text-xs-left"></div>
    <v-select
      :items="selectItems"
      v-model="localFieldValue"
      :label="fieldDetails.label"
      @change="fieldChangeHandler"
      item-text="itemText"
      item-value="itemValue"
      single-line
      bottom
    ></v-select>
  </div>
</template>
<script>
import _ from "lodash"
export default {
  props: ["fieldDetails", "currentFieldValue", "sharedSelectOptions"],
  data() {
    return {
      localFieldValue: "",
    }
  },
  watch: {
    currentFieldValue: {
      handler(newValue, oldVal) {
        this.localFieldValue = newValue
      },
      immediate: true,
    },
  },
  computed: {
    selectItems() {
      let selectItems = []
      if (this.fieldDetails.selectOptions) {
        selectItems = this.fieldDetails.selectOptions
      } else if (this.fieldDetails.selectOptionsKey) {
        selectItems = this.sharedSelectOptions[
          this.fieldDetails.selectOptionsKey
        ]
      }
      return selectItems
    },
  },
  methods: {
    fieldChangeHandler(newSelectValue) {
      // debugger
      this.$emit(
        "selectChanged",
        newSelectValue,
        this.fieldDetails.modelKey
      )
    },
  },
}
</script>
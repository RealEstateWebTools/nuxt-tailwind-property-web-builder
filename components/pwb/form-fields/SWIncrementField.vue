<template>
  <div v-show="showField" :class="fieldDetails.fieldName">
    <v-layout class="sw-increment-fld" wrap>
      <v-flex xs12>
        <div class="text-xs-left pt-4 pb-1 subheading">
          {{ $ft(fieldDetails.labelTextTKey) }}
        </div>
      </v-flex>
      <v-flex class="mr-3" xs2>
        <v-btn @click="decrementVal" fab outlined small>
          <v-icon style="padding: 10px" light>remove</v-icon>
        </v-btn>
      </v-flex>
      <v-flex class="mr-2" xs2>
        <div class="text-xs-center px-3 py-1 headline">
          {{ localFieldValue }}
        </div>
      </v-flex>
      <v-flex xs2>
        <v-btn @click="incrementVal" fab outlined small>
          <v-icon style="padding: 10px" light>add</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <div class="text-xs-left"></div>
  </div>
</template>
<script>
export default {
  props: [
    "fieldDetails",
    "currentFieldValue",
    "fieldOptions",
    "mobileExtraFieldsVisible",
  ],
  data() {
    return {
      localFieldValue: 6,
    }
  },
  watch: {
    currentFieldValue: {
      // could also pass in routeParams and watch that....
      handler(newValue, oldVal) {
        if (newValue) {
          if (typeof newValue === "string") {
            // where the param value is something like 1x (used by resales)
            // need to convert it to an int
            this.localFieldValue = parseInt(newValue.replace(/\D/g, ""))
          } else {
            this.localFieldValue = newValue
          }
        } else if (this.fieldDetails.defaultValue) {
          this.localFieldValue = parseInt(
            this.fieldDetails.defaultValue.replace(/\D/g, "")
          )
        }
      },
      // deep: true,
      immediate: true,
    },
  },
  computed: {
    showField() {
      if (this.fieldDetails.toggleOnMobile) {
        return this.mobileExtraFieldsVisible
      } else {
        return true
      }
    },
  },
  methods: {
    incrementVal() {
      this.localFieldValue = parseInt(this.localFieldValue) + 1
      this.fieldDetails.newValue = this.localFieldValue
      this.$emit("selectChanged", this.fieldDetails)
    },
    decrementVal() {
      if (this.localFieldValue > 0) {
        this.localFieldValue = parseInt(this.localFieldValue) - 1
        this.fieldDetails.newValue = this.localFieldValue.toString()
        // Using toString() above because "if(newValue)" will return false for 0
        // I use "if(newValue)" to check for presence when setting urlparams in SearchHoist
        this.$emit("selectChanged", this.fieldDetails)
      }
    },
  },
}
</script>
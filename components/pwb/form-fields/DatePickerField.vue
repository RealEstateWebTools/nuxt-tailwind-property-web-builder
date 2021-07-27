<template>
  <div class="">
    <v-menu ref="menu2" :close-on-content-click="true" v-model="menu2" :nudge-right="40" :return-value.sync="localFieldValue" lazy transition="scale-transition" offset-y full-width min-width="290px">
      <v-text-field slot="activator" v-model="localFieldValue" :hint="$ft(fieldDetails.labelTextTKey)" persistent-hint readonly bottom></v-text-field>
      <v-date-picker :landscape="true" type="month" v-model="localFieldValue" @change="fieldChangeHandler"></v-date-picker>
    </v-menu>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  // :label="$ft(fieldDetails.labelTextTKey)"
  // above does not seem to do anything on the autocomplete field..
  props: ["fieldDetails", "currentFieldValue", "fieldOptions", "multiple"],
  data() {
    return {
      menu2: false,
      localFieldValue: "",
    }
  },
  watch: {
    currentFieldValue: {
      handler(newValue, oldVal) {
        // let defaultDate = this.fieldDetails.defaultValue || ""
        let defaultDate = new Date()
        // .toISOString().substr(0, 7)
        defaultDate.setMonth(defaultDate.getMonth() + 6)
        this.localFieldValue = defaultDate.toISOString().substr(0, 10)
      },
      // deep: true,
      immediate: true,
    },
  },
  computed: {

    // selectedAll() {
    //   return this.localFieldValue.length === 0
    // },
    // // likesSomeFruit() {
    // //   return this.localFieldValue.length > 0 && !this.selectedAll
    // // },
    // icon() {
    //   if (this.selectedAll) return 'check_box'
    //   // if (this.likesSomeFruit) return 'mdi-minus-box'
    //   return 'check_box_outline_blank'
    // }
  },
  methods: {
    fieldChangeHandler(newValue) {
      // let newValue = event.currentTarget.value
      this.fieldDetails.newValue = newValue
      this.$refs.menu2.save(newValue)
      this.$emit('selectChanged', this.fieldDetails)
    }
  }
}
</script>
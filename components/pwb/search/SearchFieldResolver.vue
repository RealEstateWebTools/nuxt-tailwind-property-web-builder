<template>
  <div class="w-full mb-1">
    <template v-if="fieldDetails.inputType == 'priceText'">
      <PriceSelect
        :mobileExtraFieldsVisible="true"
        :multiple="fieldDetails.isMultipleSelect"
        @selectChanged="triggerSearchUpdate"
        :fieldDetails="fieldDetails"
        :currentFieldValue="currentFieldValue"
        :currentMinPriceValue="currentMinPriceValue"
      ></PriceSelect>
    </template>
    <template v-if="fieldDetails.inputType == 'select'">
      <AutoCompleteFieldSimple
        :multiple="fieldDetails.isMultipleSelect"
        @selectChanged="triggerSearchUpdate"
        :fieldDetails="fieldDetails"
        :currentFieldValue="currentFieldValue"
        :fieldOptions="searchSelectOptions"
      ></AutoCompleteFieldSimple>
    </template>
    <template v-else-if="fieldDetails.inputType == 'datePicker'">
      <DatePickerField
        :multiple="fieldDetails.isMultipleSelect"
        @selectChanged="triggerSearchUpdate"
        :fieldDetails="fieldDetails"
        :currentFieldValue="currentFieldValue"
        :fieldOptions="searchSelectOptions"
      ></DatePickerField>
    </template>
    <template v-else-if="fieldDetails.inputType == 'groupedSelect'">
      <AutoCompleteFieldGrouped
        :multiple="false"
        @selectChanged="triggerSearchUpdate"
        :fieldDetails="fieldDetails"
        :currentFieldValue="currentFieldValue"
        :fieldOptions="searchSelectOptions"
      ></AutoCompleteFieldGrouped>
    </template>
    <template v-else-if="fieldDetails.inputType == 'counter'">
      <IncrementField
        :mobileExtraFieldsVisible="true"
        @selectChanged="triggerSearchUpdate"
        :fieldDetails="fieldDetails"
        :currentFieldValue="currentFieldValue"
        :fieldOptions="searchSelectOptions"
      ></IncrementField>
    </template>
    <!-- <template v-else-if="fieldDetails.inputType == 'counter'">
                <SWCountCheckBoxes :mobileExtraFieldsVisible="mobileExtraFieldsVisible" @selectChanged="triggerSearchUpdate" :fieldDetails="fieldDetails" :currentFieldValue="currentSearchFieldsParams[fieldDetails.queryStringName]" :fieldOptions="searchSelectOptions"></SWCountCheckBoxes>
              </template> -->
    <template v-else-if="fieldDetails.inputType == 'countCheckBoxes'">
      <SWCountCheckBoxes
        :mobileExtraFieldsVisible="true"
        @selectChanged="triggerSearchUpdate"
        :fieldDetails="fieldDetails"
        :currentFieldValue="currentFieldValue"
        :fieldOptions="searchSelectOptions"
      ></SWCountCheckBoxes>
    </template>
  </div>
</template>
<script>
//
import PriceSelect from "~/components/pwb/form-fields/PriceSelect"
import AutoCompleteFieldSimple from "~/components/pwb/form-fields/AutoCompleteFieldSimple"
import DatePickerField from "~/components/pwb/form-fields/DatePickerField"
import IncrementField from "~/components/pwb/form-fields/SWIncrementField"
// import SWCountCheckBoxes from '~/components/pwb/form-fields/SWCountCheckBoxes'
import AutoCompleteFieldGrouped from "~/components/pwb/form-fields/AutoCompleteFieldGrouped"
export default {
  components: {
    PriceSelect,
    DatePickerField,
    // SWCountCheckBoxes,
    IncrementField,
    AutoCompleteFieldSimple,
    AutoCompleteFieldGrouped,
  },
  props: {
    searchSelectOptions: {
      type: Object,
      default() {
        return {}
      },
    },
    fieldDetails: {
      type: Object,
      default() {
        return {}
      },
    },
    currentFieldValue: {
      type: String,
    },
    currentMinPriceValue: {
      type: String,
    },
    // isMobileModal: {
    //   type: Boolean,
    // },
  },
  // props: [
  //   "fieldDetails",
  //   "fieldOptions",
  // ],
  data() {
    return {}
  },
  computed: {},
  methods: {
    triggerSearchUpdate(fieldDetails) {
      // up the chain
      this.$emit("triggerSearchUpdate", fieldDetails)
    },
  },
}
</script>

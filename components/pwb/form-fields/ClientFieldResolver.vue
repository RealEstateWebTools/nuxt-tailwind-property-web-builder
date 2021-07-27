// FieldResolver specifically for client forms
<template>
  <div class="w-full mb-1">
    <template v-if="fieldDetails.input_type == 'textfield'">
      <v-text-field
        class="fieldDetails.class_names"
        solo
        :required="fieldDetails.required"
        :rules="validationRules"
        name=""
        :label="fieldLabel"
        v-model="fieldModel"
      ></v-text-field>
    </template>
    <template v-else-if="fieldDetails.input_type == 'textarea'">
      <v-textarea
        class="fieldDetails.class_names"
        solo
        rows="10"
        :required="fieldDetails.required"
        :rules="validationRules"
        name=""
        :label="fieldLabel"
        v-model="fieldModel"
      ></v-textarea>
    </template>
    <template v-else-if="fieldDetails.input_type == 'selectfield'">
      <v-select
        class="fieldDetails.class_names"
        solo
        :items="fieldDetails.options_values.all"
        :label="fieldLabel"
        v-model="fieldModel"
        required
      ></v-select>
    </template>
  </div>
</template>
<script>
// import PriceSelect from "@jsroot/shared/components-form-fields/PriceSelect"
export default {
  components: {
    // PriceSelect,
  },
  computed: {
    fieldModel: {
      get() {
        // Allows me to collect fields together under a section
        // like "contact" for submission
        let baseModel = this.resourceModel
        if (this.fieldDetails.name_space) {
          baseModel = this.resourceModel[this.fieldDetails.name_space]
        }
        let fieldModel = baseModel[this.fieldDetails.field_name]
        return fieldModel
      },
      // for a model binding I need to have both a setter and getter
      set(newValue) {
        this.$emit("updateClientField", this.fieldDetails.field_name, newValue)
        // // Allows me to collect fields together under a section
        // // like "contact" for submission
        // let baseModel = this.resourceModel
        // if (this.fieldDetails.name_space) {
        //   baseModel = this.resourceModel[this.fieldDetails.name_space]
        // }
        // debugger
        // baseModel[this.fieldDetails.field_name] = newValue
        return newValue
      },
    },
    // fieldModelddd() {
    //   // Allows me to collect fields together under a section
    //   // like "contact" for submission
    //   let baseModel = this.resourceModel
    //   if (this.fieldDetails.name_space) {
    //     baseModel = this.resourceModel[this.fieldDetails.name_space]
    //   }
    //   let fieldModel = baseModel[this.fieldDetails.field_name]
    //   return fieldModel
    // },
    fieldLabel() {
      return (
        this.fieldDetails.label || this.$ft(this.fieldDetails.labelTextTKey)
      )
    },
    validationRules() {
      let validationRules = []
      let ruleNames = this.fieldDetails.validation_rule_names || []
      ruleNames.forEach((ruleName) => {
        if (ruleName === "nameRequired") {
          validationRules.push((v) => !!v || "Name is required")
        }
        if (ruleName === "required") {
          let promptMessage = this.fieldDetails.label_text + " is required"
          validationRules.push((v) => !!v || promptMessage)
        }
        if (ruleName === "emailValidity") {
          validationRules.push(
            (v) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              "E-mail must be valid"
          )
        }
      })
      // console.log(validationRules)
      return validationRules
    },
  },
  props: {
    // searchSelectOptions: {
    //   type: Object,
    //   default() {
    //     return {}
    //   },
    // },
    fieldDetails: {
      type: Object,
      default() {
        return {}
      },
    },
    currentFieldValue: {
      type: String,
    },
    resourceModel: {
      type: Object,
    },
  },
  // props: [
  //   "fieldDetails",
  //   "fieldOptions",
  // ],
  data() {
    return {}
  },
  methods: {
    // triggerSearchUpdate(fieldDetails) {
    //   // up the chain
    //   this.$emit("triggerSearchUpdate", fieldDetails)
    // },
  },
}
</script>

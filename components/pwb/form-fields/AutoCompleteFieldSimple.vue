<template>
  <div :class="fieldDetails.fieldName">
    <div class="text-xs-left"></div>
    <v-autocomplete
      autocomplete="new-password"
      :dense="false"
      cache-items
      :debounce-search="10"
      :clearable="true"
      no-data-text
      :filter="filterFunc"
      :items="selectItems"
      v-model="localFieldValue"
      :label="$ft(fieldDetails.labelTextTKey)"
      :hint="$ft(fieldDetails.labelTextTKey)"
      persistent-hint
      @change="fieldChangeHandler"
      item-text="name"
      :multiple="false"
      single-line
      menu-props="bottom"
      ref="autoSelect"
    >
      <!-- <template v-if="multiple" slot="prepend-item">
        <v-list-item ripple @click="activateSelectAll">
          <v-list-item-action>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $ft('client_shared.core.selectAll') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mt-2"></v-divider>
      </template> -->
      <!-- <template v-slot:selection="data">
        <v-chip
          v-bind="data.attrs"
          :input-value="data.selected"
          close
          @input="removeSelected(data.item)"
        >{{ data.item.name }}</v-chip>
      </template> -->
    </v-autocomplete>
  </div>
</template>
<script>
// Dec 2020 - this is a simpler version of the AutoCompleteField used for bvh
// as it does not support multiple selects
// Commented out the slot and multiple templates
import _ from "lodash"
export default {
  // :label="$ft(fieldDetails.labelTextTKey)"
  // above does not seem to do anything on the autocomplete field..
  props: ["fieldDetails", "currentFieldValue", "fieldOptions"],
  // , "multiple"],
  // TODO - use form of props that states type of prop accepted
  data() {
    return {
      localFieldValue: "",
      searchInputSync: null,
      slicedSelectItems: [],
    }
  },
  watch: {
    currentFieldValue: {
      // This might be better done with vue's .sync (new in 2.3)
      handler(newValue, oldVal) {
        let cfv = this.fieldDetails.defaultValue || ""
        if (newValue) {
          cfv = _.deburr(newValue)
          // In case the initial value has an accent like Málaga
          // deburr above will remove it
        }
        // if (this.multiple) {
        //   cfv = Array.isArray(cfv) ? cfv : cfv.split(",")
        //   cfv = _.uniq(cfv)
        //   // returning unique array
        //   // items in case a value like Estepona is passed in twice
        //   _.pull(cfv, "")
        //   // above needed because "".split(",") will
        //   // return an array of [""]
        // }
        this.localFieldValue = cfv
        // setTimeout(() => {
        //   // Close select popup after a value is picked
        //   this.$refs.autoSelect.isMenuActive = false
        // }, 50)
      },
      // deep: true,
      immediate: true,
    },
  },
  computed: {
    selectItems() {
      // let fieldOptions = this.$store.state.searchStore.searchSelectOptions
      let rawVals = []
      let optionsType = "simple_list"
      if (this.fieldDetails.optionsValues) {
        rawVals = this.fieldDetails.optionsValues
        if (this.fieldDetails.optionsType === "object_list") {
          optionsType = "object_list"
        }
      } else {
        optionsType = "object_list"
        // These are values retrieved from FieldKey col in db
        rawVals = this.fieldOptions[this.fieldDetails.optionsKey] || []
      }
      let selectItems = []

      let preserveLabel = false
      if (["priceRange", "maxPrice"].includes(this.fieldDetails.fieldName)) {
        preserveLabel = true
      }
      rawVals.forEach(function (optionKey) {
        let name = optionKey
        let val = optionKey
        // if (isCurrency) {
        //   name = "€" + optionKey
        //   // below removes comma
        //   val = optionKey.replace(/,/g, '')
        // } else {
        if (optionsType === "object_list") {
          if (preserveLabel) {
            name = optionKey.label
          } else {
            // startCase below will capitalise each word
            // but will also remove accents
            name = _.startCase(optionKey.label)
            // Not used for price range labels
          }
          val = optionKey.global_key
        } else {
          // name = optionKey
          // deburr below will remove accents
          val = _.deburr(optionKey)
        }
        // }
        selectItems.push({
          name: name,
          value: val,
        })
      })
      if (preserveLabel) {
        return selectItems
        // _.sortBy(selectItems, "val")
      } else {
        let sortedSelectItems = _.sortBy(selectItems, "name")
        // sortedSelectItems.unshift(emptyOpt)
        return sortedSelectItems
      }
    },
    selectedAll() {
      return this.localFieldValue.length === 0
    },
    // likesSomeFruit() {
    //   return this.localFieldValue.length > 0 && !this.selectedAll
    // },
    icon() {
      if (this.selectedAll) return "check_box"
      // if (this.likesSomeFruit) return 'mdi-minus-box'
      return "check_box_outline_blank"
    },
  },
  methods: {
    removeSelected(item) {
      const index = this.localFieldValue.indexOf(item.value)
      if (index >= 0) {
        // this.localFieldValue.splice(index, 1)
        // We emit event with the new array of selected values and let
        // that event handle things
        this.localFieldValue.splice(index, 1)
        this.fieldDetails.newValue = this.localFieldValue
        this.$emit("selectChanged", this.fieldDetails)
      }
    },
    filterFunc(item, queryText, itemText) {
      // after removing accents on the value field of items
      // still had to replace the default filter function with below
      // to enable autocomplete to be accent insensitive
      return (
        item.value.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) >
        -1
      )
    },
    activateSelectAll(evt) {
      // Any number of clicks always turns it on
      // deactivated by selecting any other option
      // this.$nextTick(() => {
      //         })
      this.localFieldValue = ""
      this.fieldDetails.newValue = ""
      // Sending an empty new value means filter will not be
      // applied which is eq to selecting all
      this.$emit("selectChanged", this.fieldDetails)
    },
    fieldChangeHandler(selectKeys) {
      if (selectKeys && selectKeys.toString() === "") {
        this.fieldDetails.newValue = null
        // Dec 2020 - sending "" to SearchHoist will result
        // in url getting built wrong
      } else {
        this.fieldDetails.newValue = selectKeys
      }
      // encodeURI(selectKeys)
      this.$emit("selectChanged", this.fieldDetails)
      // setTimeout(() => {
      //   // Close select popup after a value is picked
      //   this.$refs.autoSelect.isMenuActive = false
      // }, 50)
    },
  },
}
</script>
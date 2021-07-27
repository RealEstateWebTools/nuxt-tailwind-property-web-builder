<!-- Used by property types picker - not supporting multiple for this... -->
<template>
  <div :class="fieldDetails.fieldName">
    <div class="text-xs-left"></div>
    <v-autocomplete
      :dense="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
      autocomplete="new-password"
      :items="selectItems"
      v-model="localFieldValue"
      :label="$ft(fieldDetails.labelTextTKey)"
      :hint="$ft(fieldDetails.labelTextTKey)"
      :persistent-hint="true"
      @change="fieldChangeHandler"
      item-text="name"
      :multiple="false"
      :class="['input-no-keyboard']"

    >
      <template slot="selection" slot-scope="data">
        <span v-if="data.item">{{ data.item.name }}</span>
      </template>
      <template v-slot:item="data">
        <template v-if="data.item.isGroupHead">
          <div
            style="pointer-events: none;"
            disabled
            class="font-weight-bold auto-group-head"
            v-text="data.item.name"
          ></div>
        </template>
        <template v-else>
          <v-avatar class="ml-1">-</v-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              <div class="pl-1">{{data.item.name}}</div>
            </v-list-tile-title>
          </v-list-tile-content>
        </template>
      </template>
    </v-autocomplete>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  // :label="$ft(fieldDetails.labelTextTKey)"
  // above does not seem to do anything on the autocomplete field..
  props: [
    'fieldDetails',
    'currentFieldValue',
    'fieldOptions',
    'index',
    'multiple'
  ],
  // data() {
  // },
  mounted() {
    this.$nextTick(() => {
      let inputEl = this.$el.getElementsByClassName("input-no-keyboard")[0].getElementsByTagName("input")[0]
      // Below is to avoid mobile (soft) keyboard appearing
      inputEl.type = "button"
    })
  },
  watch: {
    currentFieldValue: {
      handler(newValue, oldVal) {
        if (newValue) {
          this.localFieldValue = newValue
        } else {
          if (this.multiple) {
            this.localFieldValue = [this.fieldDetails.defaultValue]
          } else {
            this.localFieldValue = this.fieldDetails.defaultValue
          }
        }
      },
      // deep: true,
      immediate: true
    }
  },
  computed: {
    selectItems() {
      let fieldOptions = this.fieldOptions || {}
      let rawVals = []
      let optionsType = 'simple_list'
      if (this.fieldDetails.optionsValues) {
        rawVals = this.fieldDetails.optionsValues
      } else {
        optionsType = 'object_list'
        rawVals = fieldOptions[this.fieldDetails.optionsKey] || []
        // Feb 2020 - bug where this.fieldOptions was undefined when I was
        // navigating away from area page...  Above fixes that
        // rawVals = this.fieldOptions[this.fieldDetails.optionsKey] || []
      }

      let selectItems = []
      let groupedVals = _.groupBy(rawVals, 'group_key')
      let emptyOpt = { name: '', value: '' }
      // this.fieldDetails.emptyValueText = "All"
      if (this.fieldDetails.emptyValueText) {
        let groupHeadObj = {
          name: this.fieldDetails.emptyValueText,
          disabled: true,
          isGroupHead: true
        }
        // throws in a group header line
        selectItems.push(groupHeadObj)

        // selectItems.push(this.fieldDetails.emptyValueText)
        // Above will act as a group header
        emptyOpt.name = this.fieldDetails.emptyValueText
        selectItems.push(emptyOpt)
      }
      // Will take a list like:
      //       "resalesPropertyTypes": [
      // {
      // "global_key": "2-1",
      // "label": "Todo las Casas",
      // "group_key": "Casa"
      // },
      // {
      // "global_key": "2-2",
      // "label": "Villa",
      // "group_key": "Casa"
      // },
      // And return a list per group_key (eg Casa)
      // with the group_key as the first item in the list
      Object.keys(groupedVals).forEach(function(groupHead) {
        let groupHeadObj = {
          name: groupHead,
          disabled: true,
          isGroupHead: true
        }
        // throws in a group header line
        selectItems.push(groupHeadObj)

        // _.sortBy(groupedVals[groupHead], "label")
        // above would have been case sensitive
        let sortedGroupedVals = _.sortBy(groupedVals[groupHead], function(val) {
          return val.label.toLowerCase()
        })
        sortedGroupedVals.forEach(function(optionKey) {
          let name = optionKey
          let val = optionKey

          if (optionsType === 'object_list') {
            // startCase below will capitalise each word
            // but will also remove accents
            name = _.startCase(optionKey.label)
            val = optionKey.global_key
          } else {
            name = optionKey
            // deburr below will remove accents
            val = _.deburr(optionKey)
          }
          selectItems.push({
            name: name,
            value: val
          })
        })
      })
      return selectItems
    }
  },
  methods: {
    // filterFunc(item, queryText, itemText) {
    //   // after removing accents on the value field of items
    //   // still had to replace the default filter function with below
    //   // to enable autocomplete to be accent insensitive
    //   return item.value.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
    // },
    fieldChangeHandler(selectKey) {
      this.fieldDetails.newValue = selectKey
      // encodeURI(selectKey)
      this.$emit('selectChanged', this.fieldDetails)
    }
  }
}
</script>
<style>
.auto-group-head {
  color: black;
}
</style>
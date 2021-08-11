<template>
  <div class="source-json-link">
    {{currComponentName}}: 
    <a :href="sourceJsonUrl" target="__blank">Show source JSON</a>
    <button @click="refreshSourceJson">Refresh source JSON</button>
  </div>
</template>
<script>
export default {
  props: {
    sourceJsonUrl: {
      type: String,
      default: "/",
    },
    currComponentName: {}
  },
  methods: {
    refreshSourceJson() {
      this.$emit("refreshSourceJson")
    },
  },
}
</script>

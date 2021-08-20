<template>
  <div class="pwb-root">
    <div class="v-application v-application--is-ltr theme--light">
      <div class="pwb-p-site v-application--wrap w-full top-nav-admin-hoist">
        <div class="flex flex-col min-h-screen">
          <PageHeaderFromBackend></PageHeaderFromBackend>
          <Nuxt />
          <!-- <div id="root-hoist-el"></div> -->
          <PageFooter></PageFooter>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageFooter from "~/components/pwb/PageFooter"
import PageHeaderFromBackend from "~/components/pwb/PageHeaderFromBackend.vue"
import LoggingMixin from "~/mixins/LoggingMixin"
export default {
  mixins: [LoggingMixin],
  components: {
    PageHeaderFromBackend,
    PageFooter,
  },
}
// import { defineComponent } from '@vue/composition-api'
// export default defineComponent({
//   setup() {

//   },
// })
</script>

<template>
  <div class="pwb-root">
    <div class="v-application v-application--is-ltr theme--light">
      <div class="pwb-p-site v-application--wrap w-full top-nav-admin-hoist">
        <div class="flex flex-col min-h-screen">
          <PageHeaderFromBackend></PageHeaderFromBackend>
          <SectionsFromBackend></SectionsFromBackend>
          <PageMain></PageMain>
          <div id="root-hoist-el"></div>
          <PageFooter></PageFooter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageFooter from "~/components/pwb/PageFooter"
import PageHeader from "~/components/pwb/PageHeader"
import PageMain from "~/components/pwb/PageMain"
import PageHeaderFromBackend from '../components/pwb/PageHeaderFromBackend.vue'
import SectionsFromBackend from "../components/pwb/SectionsFromBackend.vue"
export default {
  components: {
    PageFooter,
    PageHeader,
    PageMain,
    SectionsFromBackend,
    PageHeaderFromBackend,
  },
}
</script>

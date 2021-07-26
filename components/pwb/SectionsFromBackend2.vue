<template>
  <main class="pwb-p-site-inner flex-grow justify-center">
    <div style="width: 100%" class="all-sects-ct">
      <div class="">
        <p v-if="$fetchState.pending">Fetching pageSections...</p>
        <p v-else-if="$fetchState.error">An error occurred :(</p>
        <div v-else>
          <div
            v-for="pageSection of pageDetails.page.page_sections"
            :key="pageSection.id"
          >
            <div v-html="pageSection.html"></div>
          </div>
          <h1>PageSections</h1>
          <ul>
            <li
              v-for="pageSection of pageDetails.page.page_sections"
              :key="pageSection.id"
            >
              {{ pageSection.uuid }}
            </li>
          </ul>
          <button @click="$fetch">Refresh</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import SectionA from "~/components/pwb/sections/SectionA"
export default {
  components: {},
  props: {
    apiEndpoints: {
      // type: String,
      // default: ""
      type: Object,
      default() {
        return {
          pageDetails: {
            url: "http://demo.lvh.me:3000/api_public/v4/en/page/home_page",
          },
          // clientSettings: {
          //   url:"https://marbella-floating-app.weebrix.com/api_public/v3/en/client_settings"
          // }
        }
      },
    },
  },
  data() {
    return {
      // pageSections: [],
      pageDetails: {
        page: {
          page_sections: [],
        },
      },
    }
  },
  async fetch() {
    this.pageDetails = await fetch(this.apiEndpoints.pageDetails.url).then(
      (res) => {
        // debugger
        return res.json()
      }
    )
  },
}
</script>

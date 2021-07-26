<template>
  <main class="pwb-p-site-inner flex-grow justify-center">
    <div style="width: 100%" class="all-sects-ct">
      <div class="">
        <p v-if="$fetchState.pending">Fetching pageSections...</p>
        <p v-else-if="$fetchState.error">An error occurred :(</p>
        <div v-else>
          <div
            v-for="pageSection of pageDetails.page.page_sections"
            :key="pageSection.uuid"
          >
            <div v-html="pageSection.html"></div>
          </div>
          <h1>PageSections....</h1>
          <ul>
            <li
              v-for="pageSection of pageDetails.page.page_sections"
              :key="pageSection.uuid"
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
    pageName: {
      type: String,
      default: "home_page",
    },
    apiEndpoints: {
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
    let pageDetailsUrl = this.apiEndpoints.pageDetailsBase.url + this.pageName
    const pageDetails = await fetch(pageDetailsUrl).then((res) => {
      return res.json()
    })

    // const post = await fetch(
    //   `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
    // ).then((res) => res.json())

    if (pageDetails.page) {
      this.pageDetails = pageDetails
    } else {
      debugger
      // set status code on server and
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404
      }
      // use throw new Error()
      throw new Error("pageDetails not found")
    }
  },
}
</script>

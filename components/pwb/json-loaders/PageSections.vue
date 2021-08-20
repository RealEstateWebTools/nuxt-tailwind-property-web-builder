<template>
  <main class="pwb-p-site-inner flex-grow justify-center">
    <div style="width: 100%" class="all-sects-ct">
      <div class="">
        <p v-if="$fetchState.pending">Fetching pageSections...</p>
        <div v-else-if="$fetchState.error">
          <div>An error occurred :(</div>
          <div>{{ $fetchState.error }}</div>
        </div>
        <div v-else>
          <div
            v-for="pageSection of pageDetails.page.page_sections"
            :key="pageSection.uuid"
          >
            <div v-html="pageSection.html"></div>
          </div>
          <SourceJsonLink
            @refreshSourceJson="$fetch"
            :currComponentName="currComponentName"
            :sourceJsonUrl="sourceJsonUrl"
          ></SourceJsonLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SourceJsonLink from "~/components/pwb/mgmt/SourceJsonLink"
// import LoggingMixin from "~/mixins/LoggingMixin"
export default {
  // mixins: [LoggingMixin(__filename)],
  components: {
    SourceJsonLink,
  },
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
            url: `${this.$config.pwbApiMainHost}/api_public/v4/en/page/home_page/`,
            // url: "http://demo.lvh.me:3000/api_public/v4/en/page/home_page",
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
      currComponentName: "PageSections",
    }
  },
  computed: {
    sourceJsonUrl() {
      return this.apiEndpoints.pageDetailsBase.url + this.pageName
    },
    // currComponentName() {
    //   return this.$options.name
    // },
  },
  async fetch() {
    // let sourceJsonUrl = this.apiEndpoints.pageDetailsBase.url + this.pageName
    // debugger
    console.log(
      `${this.currComponentName} ...Fetching data from ${this.sourceJsonUrl}`
    )
    const pageDetails = await fetch(this.sourceJsonUrl).then((res) => {
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

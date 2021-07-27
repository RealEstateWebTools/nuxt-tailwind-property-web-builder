<template>
  <div class="w-full my-5">
    <li
      class="listing-preview-box mt-8 bg-white flex flex-col p-0 rounded shadow"
    >
      <a :href="currentPropertyUrl">
        <button
          type="button"
          class="v-btn v-btn--absolute v-btn--is-elevated v-btn--fab v-btn--has-bg v-btn--right v-btn--round v-btn--top theme--dark v-size--small red"
          style="z-index: 1"
        >
          <span class="v-btn__content"
            ><i
              aria-hidden="true"
              class="v-icon notranslate material-icons theme--dark"
              >clear</i
            ></span
          >
        </button>
        <div class="w-full lg:flex">
          <div
            class="h-48 lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            :style="
              'background-image: url(' + currentProperty.thumb_image_url + ');'
            "
            title=""
          ></div>
          <div
            class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          >
            <div class="mb-8">
              <div class="text-black font-bold text-xl mb-2">
                {{ currentProperty.title }}
              </div>
              <p class="text-3xl text-gray-900">
                {{ currentProperty.formatted_display_price }}
              </p>
              <p class="text-grey-darker text-base"></p>
            </div>
            <div class="flex items-center">
              <div class="flex p-4 border-t border-gray-300 text-gray-700">
                <div class="flex-1 inline-flex items-center">
                  <svg
                    class="h-6 w-6 text-gray-600 fill-current mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"
                    ></path>
                  </svg>
                  <p>
                    <span class="text-gray-900 font-bold">
                      {{ currentProperty.count_bedrooms }}
                    </span>
                    Bedrooms
                  </p>
                </div>
                <div class="flex-1 inline-flex items-center">
                  <svg
                    class="h-6 w-6 text-gray-600 fill-current mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
                    ></path>
                  </svg>
                  <p>
                    <span class="text-gray-900 font-bold">
                      {{ currentProperty.count_bathrooms }}
                    </span>
                    Bathrooms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  </div>
</template>
<script>
// // import DisplayPriceLegacy from "@jsroot/shared/components/DisplayPriceLegacy"
// import { favsBtn } from "@jsroot/pwb-premium/mixins/favs-btn"
export default {
  // mixins: [favsBtn],
  components: {
    // DisplayPriceLegacy,
  },
  props: {
    currentProperty: {
      type: Object,
      default() {
        return {}
      },
      // default: {},
    },
    removable: {
      type: Boolean,
      default: false,
    },
    favouritable: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
  watch: {},
  computed: {
    currentPropertyUrl(){
      return this.currentProperty.n_client_view_url
    }
  },
  mounted: function () {},
}
</script>
<style>
.listing-thumb-img {
  height: 200px;
}
.t-icon {
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  font-size: 24px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  vertical-align: middle;
  user-select: none;
}
</style>
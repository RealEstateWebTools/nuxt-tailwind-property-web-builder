<template>
  <main class="pwb-p-site-inner flex-grow justify-center">
    <div style="width: 100%" class="all-sects-ct">
      <div class="">
        <p v-if="$fetchState.pending">Fetching mountains...</p>
        <p v-else-if="$fetchState.error">An error occurred :(</p>
        <div v-else>
          <h1>Nuxt Mountains</h1>
          <ul>
            <li v-for="mountain of mountains" :key="mountain.id">
              {{ mountain.title }}
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
  components: {
  },
  data() {
    return {
      mountains: [],
    }
  },
  async fetch() {
    this.mountains = await fetch("https://api.nuxtjs.dev/mountains").then(
      (res) => {
        // debugger
        return res.json()
      }
    )
  },
}
</script>

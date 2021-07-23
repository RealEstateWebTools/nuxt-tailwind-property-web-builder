<template>
  <main class="pwb-p-site-inner flex-grow justify-center">
    <div style="width: 100%" class="all-sects-ct">
      <div class="">
        <div class="mx-0">
          <SectionA></SectionA>
          <SectionB></SectionB>
          <SectionC></SectionC>
          <SectionD></SectionD>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SectionA from "~/components/pwb/sections/SectionA"
import SectionB from "~/components/pwb/sections/SectionB"
import SectionD from "~/components/pwb/sections/SectionD"
import SectionC from "./sections/SectionC.vue"
export default {
  components: {
    SectionA,
    SectionB,
    SectionC,
    SectionD,
    // SectionC,
  },
}
</script>

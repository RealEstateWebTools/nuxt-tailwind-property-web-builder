<template>
  <main class="pwb-p-site-inner flex-grow justify-center">
    <div style="width: 100%" class="all-sects-ct">
      <div class="">
        <div class="mx-0">
          <SectionA></SectionA>
          <SectionB></SectionB>
          <SectionD></SectionD>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SectionA from "~/components/pwb/sections/SectionA"
import SectionB from "~/components/pwb/sections/SectionB"
import SectionC from "~/components/pwb/sections/SectionC"
import SectionD from "~/components/pwb/sections/SectionD"
export default {
  components: {
    SectionA,
    SectionB,
    SectionC,
    SectionD,
  },
}
</script>

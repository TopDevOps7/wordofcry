<template>
  <div>
    <div id="contents" class="Breeding-box page">
      <Header />
      <div class="bg-breeding container">
        <div class="page-header">
          <h1 class="page-title">BREEDING</h1>
          <h2 class="page-subtitle">Cryptoids can breed with each other to produce superior Cryptoids which share similar traits.</h2>
          <p class="page-description">The maximum number of breeds will be capped at seven (7) per Cryptoid. A combination of both $CAC and $CGC will be required in order to breed Cryptoids in addition to a pair of Cryptoids.</p>
        </div>
        <div class="page-body page-body-breeding">
          <img class="cryptoid-1" src="../../img/cryptoid-3.png" alt="">
          <img class="cryptoid-2" src="../../img/cryptoid-4.png" alt="">
          <img class="cryptoid-3" src="../../img/cryptoid-5.png" alt="">
        </div>
      </div>
    </div>
    <Bottom />
  </div>
</template>
<script>
import "./style.scss";
import Header from "@/components/header.vue";
import Bottom from "@/components/bottom.vue";
export default {
  name: "Breeding",
  components: {
    Header,
    Bottom,
  },
};
</script>

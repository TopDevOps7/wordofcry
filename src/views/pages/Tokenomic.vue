<template>
  <div>
    <div id="contents" class="Breeding-box page">
      <Header />
      <div class="bg-tokenomic container">
        <div class="page-header">
          <h1 class="page-title">TOKENOMICS</h1>
        </div>

        <div class="page-body">
          <img src="../../img/tokenomic.png" alt="" class="tokenomic-image" />
          <div class="page-body-title">The 2-token system of World of Cryptoids ($CGC and $CAC) will be used to bring a balance to the gaming ecosystem.</div>
          <div class="page-body-text">Both tokens will be added to the treasury whenever a new Cryptoid is bred and the Cryptoid Treasury will also regularly burn tokens in accordance with the amount of $CGC being in circulation.</div>
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
import Swiper from "swiper";

export default {
  name: "Breeding",
  components: {
    Header,
    Bottom,
  },
};
</script>

<template>
  <div>
    <div id="contents" class="Breeding-box page">
      <Header />
      <div class="bg-nft container">
        <div class="page-header">
          <h1 class="page-title">
            CRYPEGGs<br />
            & NFTs
          </h1>
        </div>

        <div class="page-body">
          <img src="../../img/nft-card.png" alt="" class="nft-image" />
          <div class="page-body-title">CrypEggs are Binance Smart Chain based NFTs that can hatch into Cryptoids with different rarities and traits!</div>
          <div class="page-body-text">CrypEggs are rare and highly sought after with each one hatching into a random Cryptoid with potentially extremely rare traits.</div>
           <div class="market-button-wrap">
              <a class="market-button" href="javascript:void(0);" onclick="alert('body 1 market place')">
                <p class="pp">MARKETPLACE</p>
              </a>
            </div>

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

<template>
  <div>
    <div id="contents" class="sp2e-box page">
      <Header />
      <div id="section-sp2e" class="bg-sp2e container">
        <div class="page-header">
          <h1 class="page-title">WHAT IS SUSTAINABLE PLAY-TO-EARN?</h1>
        </div>

        <div class="page-body">
          <img src="../../img/cryptoid-9.png" alt="" class="cryptoid-1" />
          <p class="sp2e-text">
            The World of Cryptoids economy has an efficient token distribution
            model that ensures players have a stable rate of return.
          </p>

          <ul class="page-body-list">
            <li>
              <h2 class="sp2e-title">SUSTAINED ROI</h2>
            </li>
            <li>
              <h2 class="sp2e-title">DEFLATIONARY TOKEN</h2>
            </li>
            <li>
              <h2 class="sp2e-title">ADVANCED BREEDING MECHANICS</h2>
            </li>
            <li>Burning of $CGC through breeding of new Cryptoids</li>
            <li>
              $CAC used for breeding Cryptoids will also be used to purchase
              more $CGC for burning
            </li>
            <li>Buy-back of tokens through WoC treasury funds</li>
            <li>
              Capping of the number of Cryptoids available to be bred - this
              will not only limit the number of available Cryptoids on the
              market but will steadily increase the value of Cryptoids as more
              players join
            </li>
          </ul>

          <!-- <h2 class="sp2e-title">STABLE NUMBER OF CRYPTOIDS</h2>
          <ul class="page-body-list">
            <li>Capping of the number of Cryptoids available to be bred - this will not only limit the number of available Cryptoids on the market but will steadily increase the value of Cryptoids as more players join</li>
          </ul> -->
        </div>
      </div>
      <div id="section-tokenomics" class="bg-tokenomic container">
        <div class="page-header">
          <h1 class="page-title">TOKENOMICS</h1>
        </div>

        <div class="page-body">
          <img src="../../img/tokenomic.png" alt="" class="tokenomic-image" />
          <img
            src="../../assets/1110z1/images/game-play2-mobile-m-right.png"
            alt=""
            class="tokenomic-image1"
          />
          <img
            src="../../assets/1110z1/images/gam-eplay2-6.png"
            alt=""
            class="tokenomic-image2"
          />
          <img
            src="../../assets/1110z1/images/game-play2-mobile-m-left.png"
            alt=""
            class="tokenomic-image3"
          />
          <div class="page-body-title">
            The dual token system of World of Cryptoids ($CGC and $CAC) will be
            used to bring a balance to the gaming ecosystem.
          </div>
          <div class="page-body-text">
            Both tokens will be added to the treasury whenever a new Cryptoid is
            bred and the Cryptoid Treasury will also regularly burn tokens in
            accordance with the amount of $CGC being in circulation.
          </div>
        </div>
      </div>
      <div id="section-nft" class="bg-nft container">
        <div class="page-header">
          <h1 class="page-title">
            CRYPEGGs<br />
            & NFTs
          </h1>
        </div>

        <div class="page-body">
          <img src="../../img/nft-card.png" alt="" class="nft-image" />
          <div class="page-body-title">
            CrypEggs are Binance Smart Chain based NFTs that can hatch into
            Cryptoids with different rarities and traits!
          </div>
          <div class="page-body-text">
            CrypEggs are rare and highly sought after with each one hatching
            into a random Cryptoid with potentially extremely rare traits.
          </div>
          <div class="market-button-wrap">
            <a class="market-button" href="https://market.cryptoids.world/">
              <p class="pp">MARKETPLACE</p>
            </a>
          </div>
        </div>
      </div>
      <div id="section-guild" class="bg-guild-scholarship container">
        <div class="page-header">
          <h1 class="page-title">
            GUILD <span class="specfied">&</span><br />
            SCHOLARSHIP
          </h1>
        </div>

        <div class="page-body">
          <img
            src="../../img/phone.png"
            alt=""
            class="guild-scholarship-image"
          />
          <div class="scholar-box">
            <div class="scholar-box__inner">
              <img src="../../img/roll.jpg" alt="" />
            </div>
          </div>
          <img src="../../img/cryptoid-10.png" alt="" class="cryptoid-1" />
          <div class="page-body-title">
            Guilds and Scholar Managers play an integral part in the World of
            Cryptoids ecosystem.
          </div>
          <div class="page-body-text">
            We have developed an advanced rental management system which allows
            for easier account leasing and scholar gameplay.
            <br />
            You can participate in a variety of ways:
          </div>
          <ul class="page-body-list">
            <li>Purchasing of Cryptoids for Scholar accounts</li>
            <li>Starting a breeding business by purchasing $CAC/$CGC</li>
            <li>Referral system (paid in mCAC)</li>
          </ul>
          <img src="../../img/cryptoid-11.png" alt="" class="cryptoid-2" />
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
  mounted: function () {
    window.addEventListener(
      "hashchange",
      function () {
        if (location.hash.length > 1) {
          document
            .querySelector("#contents")
            .scrollTo({ top: $(location.hash), behavior: "smooth" });
        }
      },
      false
    );
  },
};
</script>
<style>
@keyframes move {
  0% {
    margin-top: 0;
  }
  100% {
    margin-top: -228vw;
  }
}
@-webkit-keyframes move {
  0% {
    margin-top: 0;
  }
  100% {
    margin-top: -228vw;
  }
}
</style>
<style scoped>
.scholar-box {
  width: 61vw;
  height: 134.81vw;
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: calc(-15 * var(--vh, 1vh));
  margin: auto;
  z-index: 1;
}
.scholar-box__inner {
  animation: move 10s infinite linear;
  -webkit-animation: move 10s infinite linear;
}
.scholar-box__inner img {
  width: 100%;
}
</style>

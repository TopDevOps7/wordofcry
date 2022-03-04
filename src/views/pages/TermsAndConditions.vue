<template>
  <div>
    <div id="contents" class="Breeding-box page">
      <Header />
      <div class="container">
        <img src="../../img/mobile_bg_terms.jpg" alt="" class="header" />
        <div class="body" id="terms">
          <div class="title">Terms of Use</div>
          <div class="content">
            <p>
              These Terms of Use constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity (“you")
              and World of Cryptoids Limited (“we", “us", or “our") concerning
              your access to and use of the www.cryptoids.world website and the
              World of Cryptoids app as well as any other media form, media
              channel, mobile website or mobile application related, linked, or
              otherwise connected thereto (collectively, the “Site" and the
              “App"). World of Cryptoids is a distributed application that is
              currently running on the Binance Smart Chain (the "Blockchains"),
              using specially-developed smart contracts (each, a “Smart
              Contract”) to enable users to own, transfer, battle, and breed
              genetically unique digital creatures. It also enables users to own
              and transfer other digital assets like plots of land and items.
              These assets can then be visualized on a website that the user can
              interact with (the "Site"). The Smart Contracts and the Site are
              collectively referred to in these Terms as the “App”. Using the
              App, users can view their assets and use the Smart Contracts to
              acquire, trade, battle, and breed creatures with other App users.
            </p>
            <p>
              WE ARE ONLY WILLING TO MAKE THE APP, THE SMART CONTRACTS, AND THE
              SITE AVAILABLE TO YOU IF YOU ACCEPT ALL OF THESE TERMS. BY USING
              THE APP, THE SMART CONTRACTS, THE SITE, OR ANY OTHER OFFICIAL
              World of Cryptoids PRODUCT, YOU ARE CONFIRMING THAT YOU HAVE READ,
              UNDERSTAND, AND AGREE TO BE BOUND BY ALL OF THESE TERMS OF USE. IF
              YOU DO NOT AGREE AND/OR ACCEPT ALL OF THESE TERMS OF USE, THEN YOU
              ARE EXPRESSLY PROHIBITED FROM USING THE SITE, THE APP AND THE
              SMART CONTRACTS AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
            <p>
              Supplemental terms and conditions or documents that may be posted
              on the Site, the App, and the Smart Contracts from time to time
              are hereby expressly incorporated herein by reference. We reserve
              the right, in our sole discretion, to make changes or
              modifications to these Terms of Use at any time and for any
              reason. We will alert you of any changes by updating the “Last
              Updated" date of these Terms of Use, and you waive any right to
              receive specific notice of each such change. It is your
              responsibility to periodically review these Terms of Use to stay
              informed of updates. You will be subject to and will be deemed to
              have been made aware of and to have accepted, the changes in any
              revised Terms of Use by your continued use of the Site, the App,
              and the Smart Contracts after the date such revised Terms of Use
              are posted.
            </p>
            <p>
              The information on the Site, the App, and the Smart Contracts are
              not intended for distribution to any person or entity in any
              jurisdiction or country where such distribution or use would be
              contrary to law or regulation, or which would subject us to any
              registration requirement within such jurisdiction or country.
              Accordingly, any persons who access the Site and/or the App while
              breaking their local laws are doing it on their own initiative and
              will have to deal with the consequences when applicable.
            </p>
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

export default {
  name: "TAC",
  components: {
    Header,
    Bottom,
  },
};
</script>
<style scoped>
.container {
  overflow: auto;
}
.header {
  width: 100%;
  display: block;
}

.body {
  padding: 12vw 5.93vw;
}

.title {
  font-size: 5.18vw;
  font-weight: 600;
}
</style>

<template>
  <div>
    <div id="contents" class="Breeding-box page">
      <Header />
      <div class="bg-guild-scholarship container">
        <div class="page-header">
          <h1 class="page-title">
            GUILD<br />
            & SCHOLARSHIP
          </h1>
        </div>

        <div class="page-body">
          <img src="../../img/phone.png" alt="" class="guild-scholarship-image" />
          <img src="../../img/cryptoid-10.png" alt="" class="cryptoid-1" />
          <div class="page-body-title">Guilds and Scholar Managers play an integral part in the World of Cryptoids ecosystem.</div>
          <div class="page-body-text">
            We have developed an in-built scholar manager within the marketplace which allows for easy management of account leasing to other players.
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

export default {
  name: "Breeding",
  components: {
    Header,
    Bottom,
  },
};
</script>

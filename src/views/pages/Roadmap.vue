<template>
  <div>
    <div id="contents" class="Breeding-box page">
      <Header />
      <div class="container" id="rodamap">
        <img src="../../img/mobile_bg_roadmap.jpg" alt="" class="header" />
        <div class="body">
          <div class="line"></div>
          <span class="time">2021 Q4</span>
          <div class="content">
            <img class="icon" src="../../img/egg_01.png" />
            <div class="text">
              CrypEggs Whitelisting
              <br />
              Certik Audited
              <br />
              Closed Beta Testing
              <br />
              $CAC Private Sale
              <br />
              Partnerships and more
            </div>
          </div>
          <span class="time">2022 Q1</span>
          <div class="content" id="second_child">
            <img class="icon" src="../../img/egg_02.png" />
            <div class="text">
              <span class="game_luch_span">Game Official Launch</span>
              <br />$CAC Public Sale <br />CrypEggs Public Sale <br />World of
              Cryptoids Prologue <br />
              <span class="game_luch_span">New Feature: Free-To-Play</span>
              <br />
              <span class="game_luch_span">New Feature: Play as Guest</span>
              <br />
              <span class="game_luch_span">New Game Mode: Arena Season 1</span>
            </div>
          </div>
          <div class="content" id="third_child">
            <img class="icon" src="../../img/egg_03.png" />
            <div class="text">
              <span class="game_luch_span"> New Game Mode: Challenge</span>
              <br />Marketplace Update <br />Staking and Liquidity Pools
              <br />Mobile Available <br />Worldwide Marketing <br />
              <span class="game_luch_span"
                >World of Cryptoids Story - Chapter 1</span
              >
            </div>
          </div>
          <span class="time">2022 Q2</span>
          <div class="content">
            <img class="icon" src="../../img/egg_04.png" />
            <div class="text">
              <br />
              <span class="game_luch_span">New Feature: Epic parts</span>
              <br />
              <span class="game_luch_span">New Feature: Kingdom Land Sale </span
              ><br />
              <span class="game_luch_span">New Game Mode: Kingdom</span>
              <br />
              <span class="game_luch_span">New Feature: Max level upgrade </span
              ><br />
              <span class="game_luch_span"
                >World of Cryptoids Story - Chapter 2</span
              >
              <br />Staking Gamification
            </div>
          </div>
          <span class="time">2022 Q3</span>
          <div class="content">
            <img class="icon" src="../../img/egg_05.png" />
            <div class="text">
              Additional Exchange Listings<br />
              <span class="game_luch_span">New Feature: Legendary </span>
              <br />
              <span class="game_luch_span">New Feature: New parts</span>
              <br />
              <span class="game_luch_span">New Feature: Paid Upgrade</span
              ><br />New Feature: Reborn <br />
              <span class="game_luch_span">New Feature: Race Combination</span>
              <br />
              <span class="game_luch_span">Game Platform Development</span
              ><br />More is yet to come!
            </div>
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
  name: "Breeding",
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
  position: sticky;
  top: 0;
  z-index: 1;
}

.body {
  padding: 0 5.93vw;
  position: relative;
}
.line {
  width: 2px;
  height: 100%;
  background: #d5d5d5;
  position: absolute;
  left: 16.67vw;
  z-index: -1;
}
.time {
  width: 24.54vw;
  line-height: 8.3vw;
  border: 2px solid #d5d5d5;
  text-align: center;
  display: inline-block;
  background: #ffffff;
  margin-top: 5.56vw;
  border-radius: 10vw;
  font-size: 4vw;
}
.content {
  padding: 5.56vw 0 0 3.7vw;
  display: flex;
  align-items: center;
}
.icon {
  width: 15.74vw;
  margin-right: 5.56vw;
  display: block;
}

.text p {
  margin: 0;
}

.text p:last-child {
  margin-top: 5.56vw;
}

.text {
  font-weight: 600;
  line-height: 1.8;
}
</style>

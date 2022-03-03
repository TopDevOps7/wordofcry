<template>
  <div class="swiper-pagination">
    <a class="header-logo" href="/"><img src="../assets/1110z1/images/logo_1.png" /></a>
    <!-- H5 端 header START -->
    <div class="header-nav">
      <div class="nav-text logo-m">
        <img src="../img/play_mobile.png" height="60px" />
      </div>
      <router-link class="nav-text home" to="/">HOME</router-link>

      <div class="nav-text">
        <span v-bind:class="{ 'have-child-after': activeIndex === 0, 'have-child-before': activeIndex !== 0 }" @click="onNavClick(0)">CRYPTOIDS </span>
        <div v-bind:class="{ active: activeIndex === 0 }" class="children">
          <router-link @click.native="onLinkClick" class="text-span" to="/story#0">Story</router-link>
          <router-link @click.native="onLinkClick" class="text-span" to="/story#2">Breeding</router-link>
          <router-link @click.native="onLinkClick" class="text-span" to="/story#3">Battle</router-link>
        </div>
      </div>
      <div class="nav-text">
        <span v-bind:class="{ 'have-child-after': activeIndex === 1, 'have-child-before': activeIndex !== 1 }" @click="onNavClick(1)">GAME INFO </span>
        <div v-bind:class="{ active: activeIndex === 1 }" class="children">
          <router-link @click.native="onLinkClick" class="text-span" to="/sp2e#section-sp2e">sP2E</router-link>
          <router-link @click.native="onLinkClick" class="text-span" to="/sp2e#section-tokenomics">Tokenomics</router-link>
          <router-link @click.native="onLinkClick" class="text-span" to="/sp2e#section-nft">NFT</router-link>
          <router-link @click.native="onLinkClick" class="text-span" to="/sp2e#section-guild">Guild & Scholarship</router-link>
        </div>
      </div>
      <div class="nav-text">
        <span v-bind:class="{ 'have-child-after': activeIndex === 2, 'have-child-before': activeIndex !== 2 }" @click="onNavClick(2)">GETTING STARTED</span>
        <div v-bind:class="{ active: activeIndex === 2 }" class="children">
          <router-link class="text-span" to="/player">Player</router-link>
          <router-link class="text-span" to="/guild">Guild</router-link>
        </div>
      </div>
      <div class="nav-text">
        <span v-bind:class="{ 'have-child-after': activeIndex === 3, 'have-child-before': activeIndex !== 3 }" @click="onNavClick(3)">MISC</span>
        <div v-bind:class="{ active: activeIndex === 3 }" class="children">
          <router-link class="text-span" to="/FAQ">FAQ</router-link>
          <div class="text-span" @click="navTextChildClick">Whitepaper</div>
          <router-link class="text-span" to="/roadmap">Roadmap</router-link>
        </div>
      </div>
      <div class="nav-text"><a style="color: #fff;text-decoration: none;" href="https://market.cryptoids.world/">MARKETPLACE</a></div>
      <!--<div class="nav-btn">-->
      <!--<button @click="headerPlayClick">&nbsp;</button>-->
      <!--</div>-->
      <div class="nav-text share">
        <a href="https://bit.ly/3GXxiJd"><img src="../assets/1110z1/images/Follow-us-10.png" /></a>
        <a href="https://bit.ly/3IGaMWG"><img src="../assets/1110z1/images/Follow-us-7.png" /></a>
      </div>
      <div class="contract">
        <div>
          <span class="address">$CGC Contract Address</span>
          <div>
            <span class="code">0xF35aee66AB0D099aF233c1ab23E5f2138B0ED15B</span>
            <button class="copy" @click="copyCode('.copy', '0xF35aee66AB0D099aF233c1ab23E5f2138B0ED15B')"></button>
          </div>
        </div>
        <div>
          <span class="address">$CAC Contract Address</span>
          <div>
            <span class="code">0x5B7D8a53E63F1817B68d40DC997cB7394dB0ff1a</span>
            <button class="copy" @click="copyCode('.copy', '0x5B7D8a53E63F1817B68d40DC997cB7394dB0ff1a')"></button>
          </div>
        </div>
      </div>
      <div class="nav-closed">
        <button @click="menuClick">
          <i></i>
          <i></i>
        </button>
      </div>
    </div>
    <!-- H5 端 header END -->

    <!-- PC 端 header START -->
    <div class="nav-container">
      <nav class="nav">
        <ul>
          <li>
            <a href="#">CRYPTOIDS</a>
            <ul>
              <li><a href="/story.html#0">Story</a></li>
              <li><a href="/story.html#2">Breeding</a></li>
              <li><a href="/story.html#3">Battle</a></li>
            </ul>
          </li>
          <li>
            <a href="#">GAME INFO</a>
            <ul>
              <li><a href="sP2E.html#0">sP2E</a></li>
              <li><a href="/sP2E.html#1">Tokenomics</a></li>
              <li><a href="/sP2E.html#2">NFT</a></li>
              <li>
                <a href="/sP2E.html#3">Guild & <br />Scholarship</a>
              </li>
            </ul>
          </li>
          <li>
            <a>GETTING STARTED</a>
            <ul>
              <li><a href="/player.html">Player</a></li>
              <li><a href="/Guild.html">Guild</a></li>
            </ul>
          </li>
          <li>
            <a href="#">MISC</a>
            <ul>
              <li><a href="/FAQ.html">FAQ</a></li>
              <li><a href="https://cryptoids.gitbook.io/whitepaper/cryptoids/overview">Whitepaper</a></li>
              <li><a href="/Roadmap.html">Roadmap</a></li>
            </ul>
          </li>
          <li><a href="#" data-to="marketURL" target="_blank">MARKETPLACE</a></li>
        </ul>
      </nav>
    </div>
    <!-- PC 端 header END -->
    <div class="header-play-logo">
      <!-- <div style="display: flex" onclick="alert('1header play logo')"> -->
        <a data-to="playURL">
      <div style="display: flex;cursor:pointer;">
        <div class="logo-p">P</div>
        <div class="logo-l">L</div>
        <div class="logo-a">A</div>
        <div class="logo-y">Y</div>
      </div>
      </a>

      <!-- <ul class="online-ul">
        <li><a data-to="playURL" class="online-btn" href="#" target="_blank">Play online</a></li>
        <li>
          <a href="https://play.google.com/intl/en_us/badges/"><img src="../img/online-2.png" /></a>
        </li>
        <li>
          <a href="https://developer.apple.com/app-store/marketing/guidelines/"><img src="../img/online-3.png" /></a>
        </li>
      </ul> -->
    </div>
    <div class="content-mobile-header-1">
      <button @click="menuClick">
        <i></i>
        <i></i>
        <i></i>
      </button>
    </div>
  </div>
</template>

<script>
// import config from "@/envConfig/index";
import Clipboard from "clipboard";

export default {
  data: () => {
    return {
      // config,
      activeIndex: null,
    };
  },

  methods: {
    // externalLink(url) {
    //   const c = window.localStorage.getItem('c') || '';
    //   const p = window.localStorage.getItem('p') || '';
    //   return `${url}?c=${c}&p=${p}`;
    // },

    onLinkClick: function (index) {
      $(".header-nav").removeClass("full");
      if (location.hash.length > 1) {
        document.querySelector("#contents").scrollTo({ top: $(location.hash).position().top, behavior: "smooth" });
      }
    },
    onNavClick: function (index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    },
    navTextChildClick: function (e) {
      $(".children").removeClass("active");
      alert($(e.target).html());
    },
    menuClick: function (event) {
      $(".header-nav").toggleClass("full");
    },
    copyCode: function (id, text) {
      const clipboard = new Clipboard(id, { text: () => text });
      clipboard.on("success", e => {
        console.log(e.text);
        clipboard.destroy();
        window.alert('Successfully copied');
      });
      clipboard.on("error", e => {
        clipboard.destroy();
        window.alert('Failed copied');
      });
    },
  },
};
</script>

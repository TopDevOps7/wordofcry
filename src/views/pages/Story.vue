<template>
  <div>
    <div id="contents" class="Breeding-box page">
      <Header />

      <div class="bg-story container" data-current="0">
        <div class="page-header"></div>
        <div id="page-container" class="page-body" data-current="0">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <h1 class="page-title">
                IN A DISTANT METAVERSE…
                <br />
                FAR FAR AWAY..
                <br />
                A FORGOTTEN PLANET IS INHABITED BY
                <br />
                - CRYPTOIDS
              </h1>

              <img class="cryptoid-1" src="../../img/cryptoid-3.png" alt="" />
            </div>
            <div class="swiper-slide">
              <h1 class="page-title">THE GENESIS CRYPTOIDS WHICH STOPPED THE WAR AND BROUGHT PEACE TO THE EMPIRE..</h1>

              <div class="cryptoid-2">
                <div class="cryptoid-name">Lozeta</div>
                <img src="../../img/cryptoid-6.png" alt="" />
              </div>
              <div class="cryptoid-3">
                <div class="cryptoid-name">Emo</div>
                <img src="../../img/cryptoid-7.png" alt="" />
              </div>
              <div class="cryptoid-4">
                <div class="cryptoid-name">Tacaro</div>
                <img src="../../img/cryptoid-8.png" alt="" />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="bg-breeding container">
                <div class="page-header">
                  <h1 class="page-title">BREEDING</h1>
                  <h2 class="page-subtitle">Cryptoids can breed with each other to produce superior offspring with similar traits.</h2>
                  <p class="page-description">The maximum number of breeds is capped at seven (7) per cryptoid. A combination of CAC and CGC will be required to breed Cryptoids when paired with each other.</p>
                </div>
                <div class="page-body page-body-breeding">
                  <img class="cryptoid-1" src="../../img/cryptoid-3.png" alt="" />
                  <img class="cryptoid-2" src="../../img/cryptoid-4.png" alt="" />
                  <img class="cryptoid-3" src="../../img/cryptoid-5.png" alt="" />
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="bg-battle container">
                <div class="page-header">
                  <h1 class="page-title">ADVENTURE <br />& ARENA</h1>
                  <h2 class="page-subtitle">A team of 3 Cryptoids band together to defeat monsters and fight against players in a war of attrition.</h2>
                  <p class="page-description">Cryptoids each have different skills that can be used to destroy your opponent!</p>
                </div>

                <div class="page-body">
                  <div class="swiper-container-breeding">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="../../img/pink_img_01.jpg" alt="" />
                      </div>
                      <div class="swiper-slide">
                        <img src="../../img/pink_img_02.jpg" alt="" />
                      </div>
                      <div class="swiper-slide">
                        <img src="../../img/pink_img_03.jpg" alt="" />
                      </div>
                      <div class="swiper-slide">
                        <img src="../../img/pink_img_01.jpg" alt="" />
                      </div>
                      <div class="swiper-slide">
                        <img src="../../img/pink_img_02.jpg" alt="" />
                      </div>
                      <div class="swiper-slide">
                        <img src="../../img/pink_img_03.jpg" alt="" />
                      </div>
                    </div>
                    <div data-v-49110692="" class="swiper-button-next">
                      <div data-v-49110692="" class="icon"><img data-v-49110692="" src="../../assets/1110z1/images/home-icon-2.png" /></div>
                      <div data-v-49110692="" class="icon"><img data-v-49110692="" src="../../assets/1110z1/images/home-icon-1.png" /></div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination-breeding"></div>
                  </div>
                </div>
              </div>
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
import Swiper from "swiper";
import Header from "@/components/header.vue";
import Bottom from "@/components/bottom.vue";
export default {
  name: "Breeding",
  components: {
    Header,
    Bottom,
  },
  data: () => {
    return {
      swiper: null,
    };
  },
  watch: {
    $route(to, from) {
      console.log("===", parseInt(to.hash.replace("#", "")), this.swiper);
      this.swiper.slideTo(parseInt(to.hash.replace("#", "")));
    },
  },
  mounted() {
    this.swiper = new Swiper("#page-container", {
      initialSlide: window.location.hash ? window.location.hash.replace("#", "") : 0,
      direction: "vertical",
      mousewheel: true,
      speed: 1000,
      height: window.innerHeight,
      on: {
        slideChange: swiper => {
          $(".page-body").attr("data-current", swiper.activeIndex);
          $(".bg-story").attr("data-current", swiper.activeIndex);
          window.location.hash = "#" + swiper.activeIndex;
        },
      },
    });
    new Swiper(".swiper-container-breeding", {
      slidesPerView: 1,
      centeredSlides: true,
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination-breeding",
        clickable: true,
        dynamicBullets: true,
      },
    });
  },
};
</script>

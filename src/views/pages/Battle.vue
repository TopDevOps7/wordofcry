<template>
  <div>
    <div id="contents" class="Breeding-box page">
      <Header />
      <div class="bg-battle container">
        <div class="page-header">
          <h1 class="page-title">ADVENTURE <br />& ARENA</h1>
          <h2 class="page-subtitle">A team of three Cryptoids will band together to defeat various monsters or fight against other players in different stages.</h2>
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
  mounted: () => {
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

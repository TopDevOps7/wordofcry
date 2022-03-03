<template>
  <div class="bottom-play">
    <div class="div-btn" @click="watchPlay">
      <button></button>
      WATCH
      <b>TEASER</b>
    </div>
    <a href="#" class="nfc-btn" data-to="eggURL">
      BUY NFT
      <b>CRYPEGGS</b>
      <img src="../img/egg.png" alt="" />
    </a>
  </div>
</template>
<script>
// import config from "@/envConfig/index";

export default {
  data: () => {
    return {
      // config,
    };
  },
  methods: {
    watchPlay: function () {
      this.$popupYoutube({ video: "https://www.youtube.com/embed/QDWO9GVi9OY" });
      setTimeout(function () {
        if ($(".pop video")[0]) {
          $(".pop video")[0].play();
        }
      }, 1000);
    },
  },
};
</script>

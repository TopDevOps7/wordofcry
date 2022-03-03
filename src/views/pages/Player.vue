<template>
  <div>
    <div id="contents" class="Breeding-box page">
      <Header />
      <div class="container" @scroll="handleScroll">
        <div class="header">
          <img src="../../img/mobile_bg_player.jpg" alt="" />
          <div class="tabs">
            <div class="tab-item active">PLAYER</div>
            <router-link class="tab-item" to="/guild"
              >GUILD</router-link
            >
          </div>
          <div class="step">
            <img v-if="step === 1" src="../../img/tab_01.png" alt="" />
            <img v-else-if="step === 2" src="../../img/tab_02.png" alt="" />
            <img v-else src="../../img/tab_03.png" alt="" />
            <div class="step-space">
              <div @click="handleStep(1)"></div>
              <div @click="handleStep(2)"></div>
              <div @click="handleStep(3)"></div>
            </div>
          </div>
        </div>
        <div class="body">
          <div class="step-one" v-if="step === 1">
            <img src="../../img/01_1.jpg" alt="" />
            <img src="../../img/01_2.jpg" alt="" />
            <img src="../../img/01_3.jpg" alt="" />
            <img src="../../img/01_4.jpg" alt="" />
            <img src="../../img/01_5.jpg" alt="" />
            <img src="../../img/01_6.jpg" alt="" />
          </div>
          <div class="step-two" v-else-if="step === 2">
            <img src="../../img/02_1.jpg" alt="" />
            <img src="../../img/02_2.jpg" alt="" />
            <img src="../../img/02_3.jpg" alt="" />
            <img src="../../img/02_4.jpg" alt="" />
            <img src="../../img/02_5.jpg" alt="" />
            <img src="../../img/02_6.jpg" alt="" />
          </div>
          <div class="step-three" v-else>
            <img src="../../img/03_1.jpg" alt="" />
            <img src="../../img/03_2.jpg" alt="" />
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
let timer = null;
export default {
  name: "Player",
  components: {
    Header,
    Bottom,
  },
  data() {
    return {
      step: 1,
      timer: null
    };
  },
  methods: {
    handleStep(num) {
      this.step = num;
    },
    handleScroll(e) {
      if (this.step >= 3 || this.timer) return;

      // 容器高度
      const clientHeight = e.target.clientHeight;
      // 滚动距离
      const scrollTop = e.target.scrollTop;
      // 内容高度
      const scrollHeight = e.target.scrollHeight;

      // 触底加载更多
      if (clientHeight + scrollTop >= scrollHeight - 20) {
        this.timer = setTimeout(() => {
          this.step++;
          document.querySelector(".container").scrollTop = 0;
          if (this.timer) clearTimeout(this.timer);
          this.timer = null
        }, 500);
      }
    },
  },
};
</script>
<style scoped>
.container {
  overflow: auto;
}
.header {
  position: sticky;
  top: 0;
}

.header img {
  width: 100%;
  display: block;
}

.tabs {
  width: 90.7vw;
  height: 10.18vw;
  border: 2px solid #efb088;
  border-radius: 20px;
  position: absolute;
  left: 0;
  right: 0;
  top: 23.15vw;
  margin: auto;
  display: flex;
  align-items: center;
}
.tab-item {
  height: 10.18vw;
  line-height: 10.18vw;
  color: #f6c5a6;
  flex: 1;
  text-align: center;
  text-decoration: none;
}

.tab-item.active {
  font-weight: 600;
  color: #ffffff;
  border-radius: 20px;
  background: #efb088;
}

.step {
  position: absolute;
  bottom: -9.26vw;
}

.step-space {
  width: 100%;
  height: 23.15vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
}

.step-space > div {
  flex: 1;
  height: 100%;
}

.body img {
  width: 100%;
  display: block;
}
</style>

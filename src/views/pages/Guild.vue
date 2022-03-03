<template>
  <div>
    <div id="contents" class="Breeding-box page">
      <Header />
      <div class="container">
        <div class="header">
          <img src="../../img/mobile_bg_getting.jpg" alt="" />
          <div class="tabs">
            <router-link class="tab-item" to="/player"
              >PLAYER</router-link
            >
            <div class="tab-item active">GUILD</div>
          </div>
        </div>
        <div class="body">
          <div class="title">
            We offer the best <br />incentives for<br />
            your guild!
          </div>
          <div class="sub-title">SUSTAINABLE</div>
          <div class="content">
            Sustainable tokenomics will ensure players receive a good return on their investment
          </div>
          <div class="sub-title">AFFILIATE PROGRAM</div>
          <div class="content">Get rewards from all referrals</div>
          <div class="sub-title">SCHOLARSHIP & TRACKING</div>
          <div class="content">
            WOC in-built scholar manager & Tracking dashboard for Guilds
          </div>
          <div class="contact-title">CONTACT US NOW!</div>
          <div class="row">
            <div class="row-label">Your Name</div>
            <input type="text" v-model="name">
          </div>
          <div class="row">
            <div class="row-label">Guild</div>
            <input type="text" v-model="guild"> 
          </div>
          <div class="row">
            <div class="row-label">Message</div>
            <input type="text" v-model="message">
          </div>
          <div class="send-btn" @click="send">SEND</div>
        </div>
        <div class="message" v-if="show">
            <img v-if="!isError" src="../../img/sent.jpeg" alt="">
            <img v-else src="../../img/sent.jpeg" alt="">
            <div class="close" @click="close"></div>
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
import envConfig from "@/envConfig";

export default {
  name: "Guild",
  components: {
    Header,
    Bottom,
  },
  data() {
    return {
      name: '',
      guild: '',
      message: '',
      show: false,
      isError: false
    }
  },
  methods: {
    send() {
      if (
        !this.name ||
        !this.guild ||
        !this.message
      ) return;

      // fetch(import.meta.env.VITE_API_ENDPOINT + "/website/notice?name="+this.name+"&guild="+this.guild+"&message="+this.message)
      fetch(envConfig.apiURL + "/website/notice?name="+this.name+"&guild="+this.guild+"&message="+this.message)
        .then(function (response) {
          return response.json();
        })
        .then((res) => {
          this.show = true;
          if (res.code === 200) {
            this.isError = false;
          } else {
            this.isError = true;
          }
        })
        .then(() => {
          this.show = true;
          this.isError = true;
        });
    },
    close() {
      this.show = false;
    }
  }
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
  border: 2px solid #499ca9;
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
  color: #428892;
  flex: 1;
  text-align: center;
  text-decoration: none;
}

.tab-item.active {
  font-weight: 600;
  color: #ffffff;
  border-radius: 20px;
  background: #499ca9;
}

.body {
  padding: 0 8vw 23.14vw;
}

.title {
  font-weight: bolder;
  font-size: 6.67vw;
  color: #178993;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
}
.sub-title {
  font-weight: 700;
  font-size: 5.18vw;
  margin-top: 9.26vw;
}
.content {
  font-size: 3.7vw;
}
.contact-title {
  font-size: 6.67vw;
  font-weight: bolder;
  text-align: center;
  margin-top: 10vw;
  margin-bottom: 10vw;
}
.row {
  margin-bottom: 5vw;
  display: flex;
  flex-direction: column;
}
.row-label {
  color: #b5b5b5;
}
input {
  font-size: 18px;
  border: none;
  outline: none;
  border-bottom: 1px solid #b5b5b5;
  margin-top: 5vw;
}
.send-btn {
  width: 80%;
  line-height: 50px;
  font-size: 18px;
  font-weight: bolder;
  color: #4d8384;
  border-radius: 50px;
  text-align: center;
  border: 2px solid #4d8384;
  margin: 40px auto 0;
}
.message {
    width: 50%;
    color: #ffffff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.message img {
    width: 100%;
    display: block;
}

.message .close {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
}
</style>

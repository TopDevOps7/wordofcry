import Home from "@/views/home/index.vue";
import Story from "@/views/pages/Story.vue";
import Breeding from "@/views/pages/Breeding.vue";
import Battle from "@/views/pages/Battle.vue";
import SP2E from "@/views/pages/SP2E.vue";
import Tokenomic from "@/views/pages/Tokenomic.vue";
import NFT from "@/views/pages/NFT.vue";
import GuildScholarship from "@/views/pages/GuildScholarship.vue";
import Player from "@/views/pages/Player.vue";
import Guild from "@/views/pages/Guild.vue";
import FAQ from "@/views/pages/FAQ.vue";
import Roadmap from "@/views/pages/Roadmap.vue";
import TAC from "@/views/pages/TermsAndConditions.vue";
import Vue from "vue";
import Router from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(Router);
Vue.use(BootstrapVue)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/story",
      name: "Story",
      component: Story,
    },
    {
      path: "/breeding",
      name: "Breeding",
      component: Breeding,
    },
    {
      path: "/battle",
      name: "Battle",
      component: Battle,
    },
    {
      path: "/sp2e",
      name: "SP2E",
      component: SP2E,
    },
    {
      path: "/tokenomics",
      name: "Tokenomic",
      component: Tokenomic,
    },
    {
      path: "/nft",
      name: "NFT",
      component: NFT,
    },
    {
      path: "/guildscholarship",
      name: "GuildScholarship",
      component: GuildScholarship,
    },
    {
      path: "/player",
      name: "Player",
      component: Player,
    },
    {
      path: "/guild",
      name: "Guild",
      component: Guild,
    },
    {
      path: "/roadmap",
      name: "Roadmap",
      component: Roadmap,
    },
    {
      path: "/FAQ",
      name: "FAQ",
      component: FAQ,
    },
    {
      path: "/TAC",
      name: "TAC",
      component: TAC,
    },
  ],
});

// function openExternalLink () {
//   // 外链跳转时自动携带上c/p参数
//   var eles = document.querySelectorAll('a')

//   for (var i = 0; i < eles.length;i++) {
//     eles[i].addEventListener('click', function (e) {
//       console.log('clickaa:', this, this.href)
//       // 外链
//       if (this.href && (this.href).indexOf(window.location.host) < 0) {
//         e.stopPropagation();
//         e.preventDefault();
//         var cParam = window.localStorage.getItem('c') || '';
//         var pParam = window.localStorage.getItem('p') || '';
//         window.open(`${this.href}?c=${cParam}&p=${pParam}`);
//       }
//     });
//   }
// }

router.afterEach((to, from) => {
  // Vue.nextTick(openExternalLink)
})

export default router;

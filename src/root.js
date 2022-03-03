import Vue from "vue";
// import * as Sentry from "@sentry/vue";
// import { Integrations } from "@sentry/tracing";

import App from "@/App.vue";
import router from "@/router";
// import $ from "jquery";
import Popup from "./components/popup/index";
import CustomHeader from "@/components/header.vue";

Vue.prototype.$popup = Popup.install;
Vue.prototype.$popupYoutube = Popup.youtube;
// window.$ = $;
// window.$popup = Popup.install;
// window.$popupYoutube = Popup.youtube;
// window.jQuery = $;
// Sentry.init({
//   Vue,
//   integrations: [
//     new Integrations.BrowserTracing({
//       routingInstrumentation: Sentry.vueRouterInstrumentation(router),
//       tracingOrigins: ["localhost", /^\//],
//     }),
//   ],
//   debug: false,
//   tracesSampleRate: 1.0,
//   release: "v1.0.0",
//   environment: window.document.domain,
//   ignoreErrors: ["Non-Error exception captured", "Non-Error promise rejection captured"],
// });

// if (window.innerWidth < 480) {
//   document.querySelector(":root").style.setProperty("--vh", Math.min(window.innerHeight, window.outerHeight) / 100 + "px");
// }
// window.addEventListener("resize", () => {
//   if (window.innerWidth < 480) {
//     document.querySelector(":root").style.setProperty("--vh", Math.min(window.innerHeight, window.outerHeight) / 100 + "px");
//   }
// });
// window.VITE_API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

// const init = () => {
//   if (!window.initAjumpFuc) {
//     setTimeout(() => {
//       init();
//     }, 1000);
//     return;
//   }
//   window.initAjumpFuc();
// }

// router.afterEach((to, from) => {
//   console.log('afterEach11')
//   init();
// })

export const root = new Vue({
  router,
  render: h => h(App),
  mounted() {
    window.addEventListener("load", function () {
      // add envConfig
        window.config = (() => {
          const common = {};

          const productionConfig = {
            ...common,
            marketURL: 'https://market.cryptoids.world',
            apiURL: 'https://res.cryptoids.world',
            playURL: 'https://game.cryptoids.world/infinity/',
            eggURL: 'https://market.cryptoids.world/purchase',
          };
      
          const developmentConfig2 = {
            ...common,
            marketURL: 'https://market.kkchain.xyz',
            apiURL: 'https://marketserver.kkchain.xyz',
            playURL: 'https://game.kkchain.xyz/infinity/',
            eggURL: 'https://market.kkchain.xyz/purchase',
          };
          const developmentConfig = productionConfig;
      
          const testConfig2 = {
            ...common,
            marketURL: 'https://market.nnchain.xyz',
            apiURL: 'https://marketserver.nnchain.xyz',
            playURL: 'https://game.nnchain.xyz/infinity/',
            eggURL: 'https://market.nnchain.xyz/purchase',
          };
          const testConfig = productionConfig;
      
          const configList = [
            {
              origin: "kkchain.xyz",
              config: developmentConfig,
            },
            {
              origin: "nnchain.xyz",
              config: testConfig,
            },
            {
              origin: "cryptoids.world",
              config: productionConfig,
            },
          ]
      
          const found = configList.find(item => window.location.origin.indexOf(item.origin) !== -1);
      
          const result = found ? found.config : productionConfig;
      
          return result;
        })()
      
        // 外链跳转时自动携带上c/p参数
        var eles = document.querySelectorAll('a')
        for (var i = 0; i < eles.length;i++) {
          eles[i].addEventListener('click', function (e) {
            const to = this.getAttribute('data-to');
            if (to !== null) {
              e.stopPropagation();
              e.preventDefault();
              const toUrl = window.config[to];
              const c = window.localStorage.getItem('c') || '';
              const p = window.localStorage.getItem('p') || '';
              const resultUrl = `${toUrl}?c=${c}&p=${p}`
              window.open(resultUrl);
            }
          });
        }
      })
  }
});

import $ from "jquery";
import Popup from "./components/popup/index";

import { root } from './root';
// import config from './envConfig';

// console.log('config:', config)
// window.config = config;

window.$ = $;
window.$popup = Popup.install;
window.$popupYoutube = Popup.youtube;
window.jQuery = $;

if (window.innerWidth < 480) {
  document.querySelector(":root").style.setProperty("--vh", Math.min(window.innerHeight, window.outerHeight) / 100 + "px");
}
window.addEventListener("resize", () => {
  if (window.innerWidth < 480) {
    document.querySelector(":root").style.setProperty("--vh", Math.min(window.innerHeight, window.outerHeight) / 100 + "px");
  }
});

root.$mount('#app');

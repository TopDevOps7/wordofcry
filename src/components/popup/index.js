import Vue from "vue";
import Popup from "./index.vue";
import Youtube from "./Youtube.vue";

const PopupBox = Vue.extend(Popup);
const YoutubeBox = Vue.extend(Youtube);

Popup.install = function (data) {
  let instance = new PopupBox({
    data,
  }).$mount();

  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.show = true;
    // show 和弹窗组件里的show对应，用于控制显隐
  });
};
Popup.youtube = function (data) {
  let instance = new YoutubeBox({
    data,
  }).$mount();
  window["youtube-" + data.video] = instance.$el;
  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.show = true;
    // show 和弹窗组件里的show对应，用于控制显隐
  });
};

export default Popup;

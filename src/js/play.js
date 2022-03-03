window.addEventListener("load", function () {
  var headerLogo = document.querySelector(".header-play-logo");
  var background = document.querySelector("#contents .body-0");
  var stoneLeft = document.querySelector("#contents .img-3");
  var stoneRight = document.querySelector("#contents .img-4");
  var cryptoid1 = document.querySelector("#contents .img-1");
  var cryptoid2 = document.querySelector("#contents .img-2");

  var logoP = document.querySelector(".logo-p");
  var logoL = document.querySelector(".logo-l");
  var logoA = document.querySelector(".logo-a");
  var logoY = document.querySelector(".logo-y");

  function moveBackground(e) {
    if (window.innerWidth < 768 || !background) {
      return;
    }
    var width = window.innerWidth / 2;
    var height = window.innerHeight / 2;
    var offsetX = ((e.clientX - width) / width) * 5;
    var offsetY = ((e.clientY - height) / height) * 5;
    background.style.backgroundPosition = (offsetX + 5) * 2 + "%";
    background.style.backgroundSize = `${110 + offsetY * 2}% ${110 + offsetY * 2}%`;
    cryptoid1.style.transform = `translate3d(${2 + offsetX * 0.4}%,${offsetY * 2 - 5}%,0)`;
    cryptoid2.style.transform = `rotateY(180deg) translate3d(${3 - offsetX * 0.6}%,${(offsetY * 2 - 5) * 2}%,0)`;
    stoneLeft.style.transform = `rotateY(180deg) translate3d(${2 + offsetX * 0.4}%,${(5 - offsetY) / 1.5}%,0)`;
    stoneRight.style.transform = `translate3d(${5 - offsetX}%,${(5 - offsetY) * 2}%,0)`;
  }

  function moveLogo(e) {
    var offsetLeft = headerLogo.offsetLeft + headerLogo.offsetWidth / 2;
    var offsetTop = headerLogo.offsetTop + headerLogo.offsetHeight / 2;
    var left = (e.clientX - offsetLeft) / 4;
    var top = ((e.clientY - offsetTop) / headerLogo.offsetHeight) * 2;
    logoP.style.transform = "translate3d(" + left + "px, " + 10 * top + "%, 0)";
    logoP.style.transition = "all .2s linear";
    logoL.style.transform = "translate3d(" + left + "px, " + -40 * top + "%, 0)";
    logoL.style.transition = "all .2s linear";
    logoA.style.transform = "translate3d(" + left + "px, " + 10 * top + "%, 0)";
    logoA.style.transition = "all .2s linear";
    logoY.style.transform = "translate3d(" + left + "px, " + -40 * top + "%, 0)";
    logoY.style.transition = "all .2s linear";
  }

  headerLogo.addEventListener("mousemove", moveLogo);
  window.addEventListener("mousemove", moveBackground);
  headerLogo.addEventListener("mouseleave", function () {
    if (window.innerWidth < 768 || !background) {
      return;
    }
    logoP.style.transform = null;
    logoP.style.transition = null;
    logoL.style.transform = null;
    logoL.style.transition = null;
    logoA.style.transform = null;
    logoA.style.transition = null;
    logoY.style.transform = null;
    logoY.style.transition = null;
  });

  // coinFly();
});
var lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      var nodes = document.querySelectorAll(".animate__zoomIn");
      for (var i = 0; i < nodes.length; i += 1) {
        nodes[i].className = nodes[i].className.replace("animate__zoomIn", "animate__zoomIn-reverse");
      }
    } else {
      var nodes = document.querySelectorAll(".animate__zoomIn-reverse");
      for (var i = 0; i < nodes.length; i += 1) {
        nodes[i].className = nodes[i].className.replace("animate__zoomIn-reverse", "animate__zoomIn");
      }
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);
var header = document.querySelector("#header");
var body3 = document.querySelector(".body-3");
var imgSilver = "/src/img/game-play2-m-1.87657fb4.png";
var imgGold = "/src/img/game-play2-gold.7ff0fed6.png";
var coinImgs = [imgSilver, imgGold];
var animations = ["ease", "ease-in", "ease-in-out", "ease-out"];
// function coinFly() {
//   var duration = 1000;
//   if (header.className.indexOf("content-header-3") >= 0 && header.className.indexOf("content-header-2") < 0) {
//     generateCoin();
//     duration = Math.random() * 500 + 500;
//   }
//   setTimeout(coinFly, duration);
// }

// function generateCoin() {
//   var img = document.createElement("img");
//   img.className = "flying-coin";
//   var duration = Math.random() * 3000 + 3000;
//   var timeFunc = animations[Math.round(duration) % 4];
//   var rotate = Math.random() * 180 - 90;

//   img.src = coinImgs[Math.round(duration) % 2];
//   img.style.transform = "rotateZ(" + rotate + "deg)";
//   img.style.animation = "flyingPast " + duration + "ms " + timeFunc + " forwards";
//   img.style.left = Math.random() * 93.75 + "vw";
//   body3.append(img);
//   setTimeout(function () {
//     img.remove();
//   }, duration + 100);
//   return duration;
// }

$(function () {
  $("body").on("click", ".video-body-1,.video-body-2", function (e) {
    if ($(this).find("video").prop("paused")) {
      $(this).removeClass("paused");
      $(this).find("video").trigger("play");
    } else {
      $(this).addClass("paused");
      $(this).find("video").trigger("pause");
    }
  });
});

var reg = /([^?&=]+)=([^?&=]+)/g;
var c = '';
var p = '';

window.location.href.replaceAll(reg, function (str, $1, $2) {
  if ($1 === 'c') {
    c = $2;
  } else if ($1 === 'p') {
    p = $2;
  }
})

if (c) {
  window.localStorage.setItem('c', c);
}

if (p) {
  window.localStorage.setItem('p', p);
}


window.addEventListener("load", function () {
  window.initAjumpFuc = function () {
    // 外链跳转时自动携带上c/p参数
    var eles = document.querySelectorAll('a')
    for (var i = 0; i < eles.length;i++) {
      eles[i].addEventListener('click', function (e) {
        // 外链
        if (this.href && (this.href).indexOf(window.location.host) < 0) {
          e.stopPropagation();
          e.preventDefault();
          var cParam = window.localStorage.getItem('c');
          var pParam = window.localStorage.getItem('p');
          window.open(this.href + '?c=' + cParam + '&p=' + pParam);
        }
      });
    }
  }
})

import { S as C, M as it, P as nt, C as ot, V as m, R as Z, $ as X, i as lt, B as ct, v as dt } from "./chunk-vendors.js";
const _t = function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver(r => {
    for (const o of r) if (o.type === "childList") for (const n of o.addedNodes) n.tagName === "LINK" && n.rel === "modulepreload" && s(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const o = {};
    return r.integrity && (o.integrity = r.integrity), r.referrerpolicy && (o.referrerPolicy = r.referrerpolicy), r.crossorigin === "use-credentials" ? (o.credentials = "include") : r.crossorigin === "anonymous" ? (o.credentials = "omit") : (o.credentials = "same-origin"), o;
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = t(r);
    fetch(r.href, o);
  }
};
_t();
var vt = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t("div", { attrs: { id: "app" } }, [t("router-view")], 1);
  },
  pt = [];
function l(e, a, t, s, r, o, n, h) {
  var i = typeof e == "function" ? e.options : e;
  a && ((i.render = a), (i.staticRenderFns = t), (i._compiled = !0)), s && (i.functional = !0), o && (i._scopeId = "data-v-" + o);
  var c;
  if (
    (n
      ? ((c = function (d) {
          (d = d || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)), !d && typeof __VUE_SSR_CONTEXT__ != "undefined" && (d = __VUE_SSR_CONTEXT__), r && r.call(this, d), d && d._registeredComponents && d._registeredComponents.add(n);
        }),
        (i._ssrRegister = c))
      : r &&
        (c = h
          ? function () {
              r.call(this, (i.functional ? this.parent : this).$root.$options.shadowRoot);
            }
          : r),
    c)
  )
    if (i.functional) {
      i._injectStyles = c;
      var f = i.render;
      i.render = function (b, g) {
        return c.call(g), f(b, g);
      };
    } else {
      var A = i.beforeCreate;
      i.beforeCreate = A ? [].concat(A, c) : [c];
    }
  return { exports: e, options: i };
}
const ut = { name: "App", components: {} },
  E = {};
var mt = l(ut, vt, pt, !1, ht, "86f7df46", null, null);
function ht(e) {
  for (let a in E) this[a] = E[a];
}
var ft = (function () {
  return mt.exports;
})();
var gt = "/assets/logo_1.bca2d1f0.png",
  Ct =
    "data:image/png;base64,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",
  yt = "/assets/Follow-us-10.4aca6649.png",
  bt = "/assets/Follow-us-7.18ad8b09.png",
  z = "/assets/online-2.259e0915.png",
  J = "/assets/online-3.390c5b76.png",
  At = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t("div", { staticClass: "swiper-pagination" }, [
      e._m(0),
      t(
        "div",
        { staticClass: "header-nav" },
        [
          e._m(1),
          t("router-link", { staticClass: "nav-text home", attrs: { to: "/" } }, [e._v("HOME")]),
          t("div", { staticClass: "nav-text" }, [
            t("span", { staticClass: "have-child-before", on: { click: e.onNavClick } }, [e._v("CRYPTOIDS ")]),
            t(
              "div",
              { staticClass: "children" },
              [t("router-link", { staticClass: "text-span", attrs: { to: "/story" } }, [e._v("Story")]), t("router-link", { staticClass: "text-span", attrs: { to: "/breeding" } }, [e._v("Breeding")]), t("router-link", { staticClass: "text-span", attrs: { to: "/battle" } }, [e._v("Battle")])],
              1
            ),
          ]),
          t("div", { staticClass: "nav-text" }, [
            t("span", { staticClass: "have-child-before", on: { click: e.onNavClick } }, [e._v("GAME INFO")]),
            t(
              "div",
              { staticClass: "children" },
              [
                t("router-link", { staticClass: "text-span", attrs: { to: "/sp2e" } }, [e._v("sP2E")]),
                t("router-link", { staticClass: "text-span", attrs: { to: "/tokenomics" } }, [e._v("Tokenomics")]),
                t("router-link", { staticClass: "text-span", attrs: { to: "/nft" } }, [e._v("NFT")]),
                t("router-link", { staticClass: "text-span", attrs: { to: "/guildscholarship" } }, [e._v("Guild")]),
                t("router-link", { staticClass: "text-span", attrs: { to: "/guildscholarship" } }, [e._v("Scholarship")]),
              ],
              1
            ),
          ]),
          t("div", { staticClass: "nav-text" }, [
            t("span", { staticClass: "have-child-before", on: { click: e.onNavClick } }, [e._v("GETTING STARTED")]),
            t("div", { staticClass: "children" }, [t("router-link", { staticClass: "text-span", attrs: { to: "/player" } }, [e._v("Player")]), t("router-link", { staticClass: "text-span", attrs: { to: "/guild" } }, [e._v("Guild")])], 1),
          ]),
          t("div", { staticClass: "nav-text" }, [
            t("span", { staticClass: "have-child-before", on: { click: e.onNavClick } }, [e._v("MISC")]),
            t(
              "div",
              { staticClass: "children" },
              [t("router-link", { staticClass: "text-span", attrs: { to: "/FAQ" } }, [e._v("FAQ")]), t("div", { staticClass: "text-span", on: { click: e.navTextChildClick } }, [e._v("Whitepaper")]), t("router-link", { staticClass: "text-span", attrs: { to: "/roadmap" } }, [e._v("Roadmap")])],
              1
            ),
          ]),
          e._m(2),
          e._m(3),
          t("div", { staticClass: "contract" }, [
            t("div", [
              t("span", { staticClass: "address" }, [e._v("$CGC Contract Address")]),
              t("div", [
                t("span", { staticClass: "code" }, [e._v("0xF35aee66AB0D099aF233c1ab23E5f2138B0ED15B")]),
                t("button", {
                  staticClass: "copy",
                  on: {
                    click: function (s) {
                      return e.copyCode(".copy", "0xF35aee66AB0D099aF233c1ab23E5f2138B0ED15B");
                    },
                  },
                }),
              ]),
            ]),
            t("div", [
              t("span", { staticClass: "address" }, [e._v("$CAC Contract Address")]),
              t("div", [
                t("span", { staticClass: "code" }, [e._v("0x5B7D8a53E63F1817B68d40DC997cB7394dB0ff1a")]),
                t("button", {
                  staticClass: "copy",
                  on: {
                    click: function (s) {
                      return e.copyCode(".copy", "0x5B7D8a53E63F1817B68d40DC997cB7394dB0ff1a");
                    },
                  },
                }),
              ]),
            ]),
          ]),
          t("div", { staticClass: "nav-closed" }, [t("button", { on: { click: e.menuClick } }, [t("i"), t("i")])]),
        ],
        1
      ),
      e._m(4),
      e._m(5),
      t("div", { staticClass: "content-mobile-header-1" }, [t("button", { on: { click: e.menuClick } }, [t("i"), t("i"), t("i")])]),
    ]);
  },
  wt = [
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "header-logo" }, [t("img", { attrs: { src: gt } })]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "nav-text logo-m" }, [t("img", { attrs: { src: Ct, height: "60px" } })]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "nav-text" }, [t("span", [e._v("MARKETPLACE")])]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "nav-text share" }, [t("a", { attrs: { href: "https://bit.ly/3GXxiJd" } }, [t("img", { attrs: { src: yt } })]), t("a", { attrs: { href: "https://bit.ly/3IGaMWG" } }, [t("img", { attrs: { src: bt } })])]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "nav-container" }, [
        t("nav", { staticClass: "nav" }, [
          t("ul", [
            t("li", [
              t("a", { attrs: { href: "#" } }, [e._v("CRYPTOIDS")]),
              t("ul", [t("li", [t("a", { attrs: { href: "/story.html#0" } }, [e._v("Story")])]), t("li", [t("a", { attrs: { href: "/story.html#2" } }, [e._v("Breeding")])]), t("li", [t("a", { attrs: { href: "/story.html#3" } }, [e._v("Battle")])])]),
            ]),
            t("li", [
              t("a", { attrs: { href: "#" } }, [e._v("GAME INFO")]),
              t("ul", [
                t("li", [t("a", { attrs: { href: "/sP2E.html#1" } }, [e._v("Tokenomics")])]),
                t("li", [t("a", { attrs: { href: "/sP2E.html#2" } }, [e._v("NFT")])]),
                t("li", [t("a", { attrs: { href: "/sP2E.html#3" } }, [e._v("Guild")])]),
                t("li", [t("a", { attrs: { href: "/sP2E.html#3" } }, [e._v("Scholarship")])]),
              ]),
            ]),
            t("li", [t("a", [e._v("GETTING STARTED")]), t("ul", [t("li", [t("a", { attrs: { href: "/player.html" } }, [e._v("Player")])]), t("li", [t("a", { attrs: { href: "/Guild.html" } }, [e._v("Guild")])])])]),
            t("li", [
              t("a", { attrs: { href: "#" } }, [e._v("MISC")]),
              t("ul", [t("li", [t("a", { attrs: { href: "/FAQ.html" } }, [e._v("FAQ")])]), t("li", [t("a", { attrs: { href: "https://cryptoids.gitbook.io/whitepaper/cryptoids/overview" } }, [e._v("Whitepaper")])]), t("li", [t("a", { attrs: { href: "/Roadmap.html" } }, [e._v("Roadmap")])])]),
            ]),
            t("li", [t("a", { attrs: { href: "https://market.cryptoids.world/" } }, [e._v("MARKETPLACE")])]),
          ]),
        ]),
      ]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "header-play-logo" }, [
        t("div", { staticStyle: { display: "flex" }, attrs: { onclick: "alert('header play logo')" } }, [
          t("div", { staticClass: "logo-p" }, [e._v("P")]),
          t("div", { staticClass: "logo-l" }, [e._v("L")]),
          t("div", { staticClass: "logo-a" }, [e._v("A")]),
          t("div", { staticClass: "logo-y" }, [e._v("Y")]),
        ]),
        t("ul", { staticClass: "online-ul" }, [
          t("li", [t("a", { staticClass: "online-btn", attrs: { href: "https://game.cryptoids.world/infinity/?c=&p=" } }, [e._v("Play online")])]),
          t("li", [t("a", { attrs: { href: "javascript:;" } }, [t("img", { attrs: { src: z } })])]),
          t("li", [t("a", { attrs: { href: "javascript:;" } }, [t("img", { attrs: { src: J } })])]),
        ]),
      ]);
    },
  ];
const Et = {
    data: () => ({}),
    methods: {
      onNavClick: function (e) {
        let a = $(e.target).siblings().first().attr("class"),
          t = $(e.target).attr("class"),
          s = $(e.target).parent().siblings();
        console.log(s.length);
        for (let r = 0; r < s.length; r++) console.log($(s[r]).children().first().attr("class")), $(s[r]).children().first().attr("class") && $(s[r]).children().first().attr("class", "have-child-before");
        t === "have-child-before" ? $(e.target).attr("class", "have-child-after") : $(e.target).attr("class", "have-child-before"), a === "children" ? ($(".children").removeClass("active"), $(e.target).siblings().first().addClass("active")) : $(".children").removeClass("active");
      },
      navTextChildClick: function (e) {
        $(".children").removeClass("active"), alert($(e.target).html());
      },
      menuClick: function (e) {
        $(".header-nav").toggleClass("full");
      },
    },
  },
  S = {};
var $t = l(Et, At, wt, !1, St, null, null, null);
function St(e) {
  for (let a in S) this[a] = S[a];
}
var _ = (function () {
    return $t.exports;
  })(),
  xt = "/assets/egg.04f3759a.png",
  qt = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t("div", { staticClass: "bottom-play" }, [t("div", { staticClass: "div-btn", on: { click: e.watchPlay } }, [t("button"), e._v(" WATCH "), t("b", [e._v("TEASER")])]), e._m(0)]);
  },
  Tt = [
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("a", { staticClass: "nfc-btn", attrs: { href: "https://market.cryptoids.world/purchase" } }, [e._v(" BUY NFT "), t("b", [e._v("CRYPEGGS")]), t("img", { attrs: { src: xt, alt: "" } })]);
    },
  ];
const It = {
    data: () => ({}),
    methods: {
      watchPlay: function () {
        this.$popupYoutube({ video: "https://www.youtube.com/embed/QDWO9GVi9OY" }),
          setTimeout(function () {
            $(".pop video")[0].play();
          }, 1e3);
      },
    },
  },
  x = {};
var kt = l(It, qt, Tt, !1, Bt, null, null, null);
function Bt(e) {
  for (let a in x) this[a] = x[a];
}
var v = (function () {
    return kt.exports;
  })(),
  Rt = "/assets/PVP_1.e416772a.mp4",
  w = "/assets/game-play-pic.ea5ecc48.png",
  Yt = "/assets/PVP_2.090e57e8.mp4",
  Ft = "/assets/PVE_1.7ca915f1.mp4",
  Gt = "/assets/PVE_2.d6d45309.mp4",
  Ot = "/assets/footer-egg-1.23766449.png",
  Nt = "/assets/footer-egg-2.b47cfb83.png",
  Lt = "/assets/footer-egg-3.f4d29dd1.png",
  Ut = "/assets/footer-egg-4.1d50efa4.png",
  Pt = "/assets/footer-egg-5.f649cbb7.png",
  Vt = "/assets/game-play2-m-1.df09fa70.png",
  Wt = "/assets/game-play2-gold.2b76c858.png",
  Dt = "/assets/cryptoid-1.97fced72.png",
  Qt = "/assets/cryptoid-2.483ebc80.png",
  q = "/assets/grasses.6fb1e831.png",
  Kt = "/assets/Logo_S2.c45f27b4.png",
  Ht = "/assets/sub_logo.d0369538.png",
  Mt = "/assets/nft_mobile_dw_1.a42e9563.png",
  jt = "/assets/nft_mobile_dw_2.213330c9.png",
  Zt = "/assets/nft_mobile_dw_3.9c10da39.png",
  Xt = "/assets/follow-us-icon-1.36fd531b.png",
  zt = "/assets/follow-us-icon-2.00f5d527.png",
  Jt = "/assets/follow-us-icon-3.bcb80f6f.png",
  te = "/assets/follow-us-icon-4.08f474d5.png",
  ee = "/assets/follow-us-icon-5.920c5c66.png",
  ae = "/assets/follow-us-icon-6.cebd2197.png",
  se = "/assets/follow-us-icon-7.ef134b3c.png",
  re = "/assets/follow-us-dw.fe912b6a.png",
  ie = "/assets/01_bina.b78a2603.png",
  ne = "/assets/02_ide.5c28b338.png",
  oe = "/assets/03_meta.08af7a8b.png",
  le = "/assets/04_path.0c058999.png",
  ce = "/assets/05_astra.a1ea2d70.png",
  de = "/assets/06_cer.b1ec228c.png",
  _e = "/assets/07_refina.a1fe37d3.png",
  ve =
    "data:image/png;base64,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",
  pe = "/assets/08_2_gene.473fd9f1.png",
  ue = "/assets/09_pancake.bdc2e83a.png",
  me = "/assets/10_tre.09fa7371.png",
  he = "/assets/11_vox.0b4b4ad0.png",
  fe = "/assets/12_nft.dc1aacac.png",
  ge = "/assets/footer--icon-1.ed4bd35e.png",
  Ce = "/assets/footer-icon-2.e0cdd6f5.png",
  ye = "/assets/footer-icon-3.e4fa03b6.png",
  be = "/assets/footer-icon-4.cf97694b.png",
  Ae = "/assets/footer-icon-5.68efdf30.png",
  we = "/assets/footer-icon-6.64a74220.png",
  Ee = "/assets/footer-icon-7.b759cfca.png",
  $e = "/assets/home-logo.9ab7c618.png",
  Se = "/assets/team-dw-1.18fe1707.png",
  xe = "/assets/team-dw-2.216e0a08.png",
  qe = "/assets/team-dw-3.55bb1fa3.png",
  Te = "/assets/team-dw-4.c4328e24.png",
  Ie = "/assets/team-dw-5.a69fd6ec.png",
  tt = "/assets/home-icon-2.616816c2.png",
  et = "/assets/home-icon-1.2663b4e2.png",
  ke = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t("div", [
      e._m(0),
      t(
        "div",
        { attrs: { id: "contents" } },
        [
          t("div", { staticClass: "swiper-wrapper" }, [
            t("div", { staticClass: "swiper-slide" }, [
              t("div", { staticClass: "body-0", on: { mousedown: e.mouseDown, mouseup: e.mouseUp, mousemove: e.mouseMove } }, [
                t("div", { staticClass: "play-button", attrs: { id: "home-play-now" } }, [
                  t(
                    "div",
                    { staticClass: "button-label" },
                    [
                      t("a", { attrs: { type: "text", href: "https://cryptoids.gitbook.io/whitepaper/cryptoids/overview" } }, [e._v("WHITERPAPER")]),
                      t("div", { staticClass: "sp" }, [e._v("/")]),
                      t("a", { staticClass: "text text-desktop", attrs: { href: "./player.html" } }, [e._v("TUTORIAL")]),
                      t("router-link", { staticClass: "text text-mobile", attrs: { to: "/player" } }, [e._v("TUTORIAL")]),
                    ],
                    1
                  ),
                  e._m(1),
                  e._m(2),
                ]),
                t("div", { staticClass: "contract" }, [
                  t("div", [
                    t("span", { staticClass: "address" }, [e._v("$CGC Contract Address")]),
                    t("div", [
                      t("span", { staticClass: "code" }, [e._v("0xF35aee66AB0D099aF233c1ab23E5f2138B0ED15B")]),
                      t("button", {
                        staticClass: "copy",
                        on: {
                          click: function (s) {
                            return e.copyCode(".copy", "0xF35aee66AB0D099aF233c1ab23E5f2138B0ED15B");
                          },
                        },
                      }),
                    ]),
                  ]),
                  t("div", [
                    t("span", { staticClass: "address" }, [e._v("$CAC Contract Address")]),
                    t("div", [
                      t("span", { staticClass: "code" }, [e._v("0x5B7D8a53E63F1817B68d40DC997cB7394dB0ff1a")]),
                      t("button", {
                        staticClass: "copy",
                        on: {
                          click: function (s) {
                            return e.copyCode(".copy", "0x5B7D8a53E63F1817B68d40DC997cB7394dB0ff1a");
                          },
                        },
                      }),
                    ]),
                  ]),
                ]),
                e._m(3),
              ]),
            ]),
            e._m(4),
            t("div", { staticClass: "swiper-slide" }, [
              t("div", { staticClass: "body-2" }, [
                e._m(5),
                t("div", { staticClass: "game-video" }, [
                  t("div", { staticClass: "video-body-1", on: { click: e.playOrPause } }, [
                    t("video", {
                      staticClass: "video",
                      attrs: { id: "body2-video1", src: Rt, muted: "", loop: "", poster: w },
                      domProps: { muted: !0 },
                      on: {
                        canplay: function (s) {
                          return e.videoCanplay(1);
                        },
                        play: e.playGameVideoStart,
                      },
                    }),
                  ]),
                  t("div", { staticClass: "video-body-2", on: { click: e.playOrPause } }, [
                    t("video", {
                      staticClass: "video",
                      attrs: { id: "body2-video2", src: Yt, muted: "", loop: "", poster: w },
                      domProps: { muted: !0 },
                      on: {
                        canplay: function (s) {
                          return e.videoCanplay(2);
                        },
                        play: e.playGameVideoStart,
                      },
                    }),
                  ]),
                ]),
                e._m(6),
                e._m(7),
              ]),
            ]),
            t("div", { staticClass: "swiper-slide" }, [
              t("div", { staticClass: "body-3" }, [
                e._m(8),
                t("div", { staticClass: "game-video" }, [
                  t("div", { staticClass: "video-body-1", on: { click: e.playOrPause } }, [
                    t("video", {
                      staticClass: "video",
                      attrs: { id: "body3-video1", src: Ft, muted: "", loop: "", poster: w },
                      domProps: { muted: !0 },
                      on: {
                        canplay: function (s) {
                          return e.videoCanplay(1);
                        },
                        play: e.playGameVideoStart,
                      },
                    }),
                  ]),
                  t("div", { staticClass: "video-body-2", on: { click: e.playOrPause } }, [
                    t("video", {
                      staticClass: "video",
                      attrs: { id: "body3-video2", src: Gt, muted: "", loop: "", poster: w },
                      domProps: { muted: !0 },
                      on: {
                        canplay: function (s) {
                          return e.videoCanplay(2);
                        },
                        play: e.playGameVideoStart,
                      },
                    }),
                  ]),
                ]),
                e._m(9),
                e._m(10),
              ]),
            ]),
            e._m(11),
            e._m(12),
            t("div", { staticClass: "swiper-slide" }, [
              t("div", { staticClass: "body-6" }, [
                t("div", { staticClass: "footer-1" }, [
                  t("div", { staticClass: "content-bg-header" }),
                  t("div", { staticClass: "content-bg" }, [
                    e._m(13),
                    e._m(14),
                    t("div", { staticClass: "footer-eggs" }, [
                      t("a", { attrs: { href: "#" }, on: { click: e.swiperFooter1 } }, [t("img", { attrs: { src: Ot } })]),
                      t("a", { attrs: { href: "#" }, on: { click: e.swiperFooter1 } }, [t("img", { attrs: { src: Nt } })]),
                      t("a", { attrs: { href: "#" }, on: { click: e.swiperFooter1 } }, [t("img", { attrs: { src: Lt } })]),
                      t("a", { attrs: { href: "#" }, on: { click: e.swiperFooter1 } }, [t("img", { attrs: { src: Ut } })]),
                      t("a", { attrs: { href: "#" }, on: { click: e.swiperFooter1 } }, [t("img", { attrs: { src: Pt } })]),
                    ]),
                  ]),
                ]),
                e._m(15),
              ]),
            ]),
          ]),
          t("Bottom"),
          t("Header"),
          e._m(16),
          t(
            "div",
            { staticClass: "swiper-button-prev" },
            e._l(e.pointList, function (s) {
              return s.index > 0 && s.index < 6
                ? t("div", {
                    key: s.id,
                    staticClass: "point",
                    attrs: { id: s.id },
                    on: {
                      click: function (r) {
                        return e.pageSlide(s.index);
                      },
                    },
                  })
                : e._e();
            }),
            0
          ),
        ],
        1
      ),
      t("img", { staticStyle: { display: "none" }, attrs: { id: "coin-0", src: Vt, alt: "" } }),
      t("img", { staticStyle: { display: "none" }, attrs: { id: "coin-1", src: Wt, alt: "" } }),
    ]);
  },
  Be = [
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "content-header", attrs: { id: "header" } }, [
        t("div", { staticClass: "header-0" }),
        t("div", { staticClass: "header-1" }),
        t("div", { staticClass: "header-2" }),
        t("div", { staticClass: "header-3" }),
        t("div", { staticClass: "header-4" }),
        t("div", { staticClass: "header-5" }),
        t("div", { staticClass: "header-6" }),
      ]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("a", { staticClass: "playnow-button", attrs: { href: "https://game.cryptoids.world/infinity/?c=&p=" } }, [t("p", { staticClass: "pp" }, [e._v("PLAY NOW")])]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("a", { staticClass: "play-online", attrs: { href: "javascript:;" } }, [t("img", { attrs: { src: z } }), t("img", { attrs: { src: J } })]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "img-con" }, [
        t("img", { staticClass: "img-1", attrs: { src: Dt } }),
        t("img", { staticClass: "img-2", attrs: { src: Qt } }),
        t("img", { staticClass: "img-3", attrs: { src: q } }),
        t("img", { staticClass: "img-4", attrs: { src: q } }),
        t("div", { staticClass: "img-box" }, [t("img", { staticClass: "img-5", attrs: { src: Kt } }), t("img", { staticClass: "img-6", attrs: { src: Ht } })]),
      ]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "swiper-slide" }, [
        t("div", { staticClass: "body-1" }, [
          t("div", { staticClass: "words" }, [e._v("BREED RARE AND"), t("br"), e._v("UNIQUE CRYPTOIDS")]),
          t("div", { staticClass: "doll-bg" }, [
            t("div", { staticClass: "doll-1" }, [t("img", { staticClass: "doll-1", attrs: { src: Mt, width: "14%" } })]),
            t("div", { staticClass: "doll-2" }, [t("img", { staticClass: "doll-2", attrs: { src: jt, width: "17%" } })]),
            t("div", { staticClass: "doll-3" }, [t("img", { staticClass: "doll-3", attrs: { src: Zt, width: "17%" } })]),
          ]),
          t("div", { staticClass: "market-button-wrap" }, [t("a", { staticClass: "market-button", attrs: { href: "https://market.cryptoids.world/" } }, [t("p", { staticClass: "pp" }, [e._v("MARKETPLACE")])])]),
          t("div", { staticClass: "label" }, [e._v("BREED"), t("br"), e._v("YOUR"), t("br"), e._v("NFT"), t("br"), e._v("COLLECTIBLES")]),
        ]),
      ]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "words" }, [e._v("METAVERSE"), t("br"), e._v("ADVENTURE MODE")]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("a", { staticClass: "market-button", attrs: { href: "https://game.cryptoids.world/infinity/?c=&p=" } }, [t("p", { staticClass: "pp" }, [e._v("PLAY MORE")])]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "label" }, [e._v("CHALLENGING"), t("br"), e._v("GAMEPLAY")]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "words" }, [e._v("EARN CRYPTOCURRENCY"), t("br"), e._v("REWARDS BY PLAYING")]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("a", { staticClass: "market-button", attrs: { href: "https://game.cryptoids.world/infinity/?c=&p=" } }, [t("p", { staticClass: "pp" }, [e._v("EARN MORE")])]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "label" }, [e._v("Sustainable"), t("br"), e._v("play"), t("br"), e._v("to"), t("br"), e._v("earn")]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "swiper-slide" }, [
        t("div", { staticClass: "body-4" }, [
          t("div", { staticClass: "words" }, [e._v(" what are you"), t("br"), e._v(" waiting for?! ")]),
          t("div", { staticClass: "sub-words" }, [e._v("Follow us now!")]),
          t("div", { staticClass: "content-bg" }, [
            t("div", { staticClass: "icons" }, [
              t("a", { attrs: { href: "https://bit.ly/3EXoUJ4" } }, [t("img", { staticClass: "icon-1", attrs: { src: Xt } })]),
              t("a", { attrs: { href: "https://bit.ly/3yqlAU0" } }, [t("img", { staticClass: "icon-1", attrs: { src: zt } })]),
              t("a", { attrs: { href: "https://www.reddit.com/r/worldofcryptoids/" } }, [t("img", { staticClass: "icon-1", attrs: { src: Jt } })]),
              t("a", { attrs: { href: "https://bit.ly/3IGaMWG" } }, [t("img", { staticClass: "icon-1", attrs: { src: te } })]),
              t("a", { attrs: { href: "https://bit.ly/3GXxiJd" } }, [t("img", { staticClass: "icon-1", attrs: { src: ee } })]),
              t("a", { attrs: { href: "https://bit.ly/3dQmfoo" } }, [t("img", { staticClass: "icon-1", attrs: { src: ae } })]),
              t("a", { attrs: { href: "https://bit.ly/3DSor9B" } }, [t("img", { staticClass: "icon-1", attrs: { src: se } })]),
            ]),
            t("div", { staticClass: "doll" }, [t("img", { attrs: { src: re } })]),
          ]),
        ]),
      ]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "swiper-slide" }, [
        t("div", { staticClass: "body-5" }, [
          t("div", { staticClass: "words" }, [e._v("OUR"), t("br"), e._v("Partners")]),
          t("div", { staticClass: "content-bg" }, [
            t("div", { staticClass: "icon-container" }, [
              t("a", { staticClass: "mobile-order-1", attrs: { href: "https://www.binance.com/en" } }, [t("img", { attrs: { src: ie, alt: "" } })]),
              t("a", { staticClass: "mobile-order-1", attrs: { href: "https://ideaology.io/" } }, [t("img", { attrs: { src: ne, alt: "" } })]),
              t("a", { staticClass: "mobile-order-1", attrs: { href: "https://metamask.io/" } }, [t("img", { attrs: { src: oe, alt: "" } })]),
              t("a", { staticClass: "mobile-order-1 ", attrs: { href: "https://pathdao.io/" } }, [t("img", { attrs: { src: le, alt: "" } })]),
              t("a", { staticClass: "mobile-order-5", attrs: { href: "https://astraguild.io/" } }, [t("img", { attrs: { src: ce, alt: "" } })]),
              t("a", { staticClass: "mobile-order-5", attrs: { href: "https://www.certik.com/" } }, [t("img", { attrs: { src: de, alt: "" } })]),
              t("a", { staticClass: "mobile-order-6", attrs: { href: "https://refinable.com/" } }, [t("img", { attrs: { src: _e, alt: "" } })]),
              t("a", { staticClass: "half mobile-order-4 right-space", attrs: { href: "https://www.alphadao.financial/" } }, [t("img", { attrs: { src: ve, alt: "" } })]),
              t("a", { staticClass: "half mobile-order-2 left-space", attrs: { href: "https://www.genshards.com/" } }, [t("img", { attrs: { src: pe, alt: "" } })]),
              t("a", { staticClass: "mobile-order-5 ", attrs: { href: "https://pancakeswap.finance/" } }, [t("img", { attrs: { src: ue, alt: "" } })]),
              t("a", { staticClass: "mobile-order-6", attrs: { href: "https://treasureland.market/" } }, [t("img", { attrs: { src: me, alt: "" } })]),
              t("a", { staticClass: "mobile-order-6 ", attrs: { href: "https://voxmagna.co/" } }, [t("img", { attrs: { src: he, alt: "" } })]),
              t("a", { staticClass: "half half-full mobile-order-3 ", attrs: { href: "https://nftcalendar.io/" } }, [t("img", { attrs: { src: fe, alt: "" } })]),
            ]),
          ]),
        ]),
      ]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "content" }, [
        t("div", { staticClass: "left" }, [
          t("div", { staticClass: "footer-nav" }, [
            t("a", { attrs: { href: "#" } }, [e._v("Cryptoids")]),
            t("div", { staticStyle: { "margin-top": "10px", "margin-bottom": "10px" } }, [t("a", { attrs: { href: "/story.html#0" } }, [e._v("Story")])]),
            t("div", { staticStyle: { "margin-bottom": "10px" } }, [t("a", { attrs: { href: "/story.html#2" } }, [e._v("Breeding")])]),
            t("div", { staticStyle: { "margin-bottom": "10px" } }, [t("a", { attrs: { href: "/story.html#3" } }, [e._v("Battle")])]),
          ]),
          t("div", { staticClass: "footer-nav" }, [
            t("a", { attrs: { href: "#" } }, [e._v("GAME INFO")]),
            t("div", { staticStyle: { "margin-top": "10px", "margin-bottom": "10px" } }, [t("a", { attrs: { href: "/sP2E.html#1" } }, [e._v("Tokenomic")])]),
            t("div", { staticStyle: { "margin-bottom": "10px" } }, [t("a", { attrs: { href: "/sP2E.html#2" } }, [e._v("NFT")])]),
            t("div", { staticStyle: { "margin-bottom": "10px" } }, [t("a", { attrs: { href: "/sP2E.html#3" } }, [e._v("Guild")])]),
            t("div", { staticStyle: { "margin-bottom": "10px" } }, [t("a", { attrs: { href: "/sP2E.html#3" } }, [e._v("Scholarship")])]),
          ]),
          t("div", { staticClass: "footer-nav" }, [
            t("a", { attrs: { href: "#" } }, [e._v("Getting Started")]),
            t("div", { staticStyle: { "margin-top": "10px", "margin-bottom": "10px" } }, [t("a", { attrs: { href: "/player.html" } }, [e._v("Player")])]),
            t("div", { staticStyle: { "margin-bottom": "10px" } }, [t("a", { attrs: { href: "/Guild.html" } }, [e._v("Guild")])]),
          ]),
          t("div", { staticClass: "footer-nav" }, [
            t("a", { attrs: { href: "#" } }, [e._v("MISC")]),
            t("div", { staticStyle: { "margin-top": "10px", "margin-bottom": "10px" } }, [t("a", { attrs: { href: "/FAQ.html" } }, [e._v("FAQ")])]),
            t("div", { staticStyle: { "margin-bottom": "10px" } }, [t("a", { attrs: { href: "https://cryptoids.gitbook.io/whitepaper/cryptoids/overview" } }, [e._v("Whitepaper")])]),
            t("div", { staticStyle: { "margin-bottom": "10px" } }, [t("a", { attrs: { href: "/Roadmap.html" } }, [e._v("Roadmap")])]),
          ]),
          t("div", { staticClass: "footer-nav" }, [
            t("a", { attrs: { href: "#" } }, [e._v("Play Now")]),
            t("div", { staticStyle: { "margin-top": "10px", "margin-bottom": "10px" } }, [t("a", { attrs: { href: "https://market.cryptoids.world/" } }, [e._v("Marketplace")])]),
            t("div", { staticStyle: { "margin-bottom": "10px" } }, [t("a", { attrs: { href: "https://market.cryptoids.world/purchase" } }, [e._v("Buy CrypEggs")])]),
          ]),
        ]),
        t("div", { staticClass: "right" }, [
          t("div", { staticStyle: { color: "whitesmoke", "font-size": "16px", "margin-bottom": "20px" } }, [e._v("Follow US")]),
          t("a", { attrs: { href: "https://bit.ly/3IGaMWG" } }, [t("img", { attrs: { src: ge } })]),
          t("a", { attrs: { href: "https://bit.ly/3GXxiJd" } }, [t("img", { attrs: { src: Ce } })]),
          t("a", { attrs: { href: "https://bit.ly/3dQmfoo" } }, [t("img", { attrs: { src: ye } })]),
          t("a", { attrs: { href: "https://bit.ly/3DSor9B" } }, [t("img", { attrs: { src: be } })]),
          t("br"),
          t("a", { attrs: { href: "https://bit.ly/3EXoUJ4" } }, [t("img", { attrs: { src: Ae } })]),
          t("a", { attrs: { href: "https://bit.ly/3yqlAU0" } }, [t("img", { attrs: { src: we } })]),
          t("a", { attrs: { href: "https://www.reddit.com/r/worldofcryptoids/" } }, [t("img", { attrs: { src: Ee } })]),
        ]),
      ]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "footer-logo" }, [t("img", { attrs: { src: $e } }), t("div", [e._v("World of Crytoids @ 2022, All rights reserved. "), t("a", { attrs: { href: "/TermsAndConditions.html" } }, [e._v("Terms & Conditions. Privacy Policy")])])]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "footer-2" }, [
        t("div", { staticClass: "content-bg-header" }),
        t("div", { staticClass: "content-bg" }, [
          t("div", { staticClass: "footer-eggs" }),
          t("div", { attrs: { id: "team-swiper" } }, [
            t("div", { staticClass: "dolls swiper-wrapper" }, [
              t("div", { staticClass: "doll-body swiper-slide" }, [
                t("a", { staticClass: "dolls-name", attrs: { href: "#" } }, [t("div", [e._v("Yuki Y")]), t("div", [e._v("Creative Director")])]),
                t("div", { staticClass: "doll-pic" }, [t("a", { attrs: { href: "#" } }, [t("img", { attrs: { src: Se } })])]),
              ]),
              t("div", { staticClass: "doll-body swiper-slide" }, [
                t("a", { staticClass: "dolls-name", attrs: { href: "#" } }, [t("div", [e._v("Zeta L")]), t("div", [e._v("Marketing Lead")])]),
                t("div", { staticClass: "doll-pic" }, [t("a", { attrs: { href: "#" } }, [t("img", { attrs: { src: xe } })])]),
              ]),
              t("div", { staticClass: "doll-body swiper-slide" }, [t("a", { staticClass: "dolls-name", attrs: { href: "#" } }, [t("div", [e._v("TC Chan")]), t("div", [e._v("CEO")])]), t("div", { staticClass: "doll-pic" }, [t("a", { attrs: { href: "#" } }, [t("img", { attrs: { src: qe } })])])]),
              t("div", { staticClass: "doll-body swiper-slide" }, [
                t("a", { staticClass: "dolls-name", attrs: { href: "#" } }, [t("div", [e._v("Teemo B")]), t("div", [e._v("Game Economist")])]),
                t("div", { staticClass: "doll-pic" }, [t("a", { attrs: { href: "#" } }, [t("img", { attrs: { src: Te } })])]),
              ]),
              t("div", { staticClass: "doll-body swiper-slide" }, [
                t("a", { staticClass: "dolls-name", attrs: { href: "#" } }, [t("div", [e._v("MaFei Y")]), t("div", [e._v("Game Director")])]),
                t("div", { staticClass: "doll-pic" }, [t("a", { attrs: { href: "#" } }, [t("img", { attrs: { src: Ie } })])]),
              ]),
            ]),
          ]),
          t("div", { staticClass: "team-swiper-pagination" }, [
            t("div", { staticClass: "team-swiper-pagination-point" }),
            t("div", { staticClass: "team-swiper-pagination-point" }),
            t("div", { staticClass: "team-swiper-pagination-point" }),
            t("div", { staticClass: "team-swiper-pagination-point" }),
            t("div", { staticClass: "team-swiper-pagination-point" }),
          ]),
          t("div", { staticClass: "words" }, [e._v(" Hello!"), t("br"), e._v(" WE ARE CRYPTOIDIANS ")]),
        ]),
      ]);
    },
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "swiper-button-next" }, [t("a", { staticClass: "icon", attrs: { href: "https://bit.ly/3IGaMWG" } }, [t("img", { attrs: { src: tt } })]), t("a", { staticClass: "icon", attrs: { href: "https://bit.ly/3GXxiJd" } }, [t("img", { attrs: { src: et } })])]);
    },
  ];
C.use([it, nt]);
let Re = ["ease", "ease-in", "ease-in-out", "ease-out"];
const Ye = {
    name: "test",
    data() {
      return {
        videoCanplay1: !1,
        videoCanplay2: !1,
        videoCanplay3: !1,
        videoCanplay4: !1,
        translateY: 0,
        operateType: "scroll",
        mySwiper: null,
        swiperActiveIndex: 0,
        pointList: [
          { index: 0, color: "", id: "home" },
          { index: 1, color: "#1DBCB5", id: "nft" },
          { index: 2, color: "#3781E5", id: "play" },
          { index: 3, color: "#CE344A", id: "play2" },
          { index: 4, color: "#E86EA4", id: "followUs" },
          { index: 5, color: "#9C69BC", id: "partners" },
          { index: 6, color: "", id: "footer" },
          { index: 7, color: "#D3D3D3", id: "bottom" },
        ],
      };
    },
    components: { Swiper: C, Header: _, Bottom: v },
    mounted: function () {
      this.coinFly();
      let e = document.querySelectorAll("video");
      for (let a = 0; a < e.length; a += 1)
        e[a].oncanplaythrough = function () {
          e[a].muted = !0;
        };
      this.initSwiper(),
        $(".nav li").hover(
          function () {
            $(this).find("ul").show();
          },
          function () {
            $(this).find("ul").hide();
          }
        ),
        window.innerWidth < 480 &&
          ((window.Swiper = C),
          (this.teamSwiper = new C("#team-swiper", {
            direction: "horizontal",
            loop: !0,
            mousewheel: !0,
            speed: 1e3,
            width: window.innerWidth,
            on: {
              touchStart: () => {
                console.log("====touch");
              },
              slideChange: a => {
                $(".team-swiper-pagination-point").removeClass("active"), $(".team-swiper-pagination-point").eq(a.activeIndex).addClass("active");
              },
            },
          }))),
        window.addEventListener("resize", () => {
          this.resize && clearTimeout(this.resize),
            (this.resize = setTimeout(() => {
              this.mySwiper.destroy();
            }, 50));
        });
    },
    methods: {
      initSwiper: function (e) {
        const a = this;
        this.mySwiper = new C("#contents", {
          initialSlide: e || 0,
          direction: "vertical",
          mousewheel: !0,
          autoHeight: !0,
          speed: 1e3,
          height: window.innerHeight,
          pagination: !1,
          navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
          on: {
            destroy: t => {
              a.initSwiper(t.activeIndex);
            },
            slideChangeTransitionStart: t => {
              (a.operateType = "scroll"), (a.translateY = 0);
            },
            sliderMove: (t, s) => {
              (t.activeIndex == 0 || (t.activeIndex == 1 && -t.translate < window.innerHeight)) && ($("#header").css("transition", "none"), $("#header").css("transform", "translateY(calc(100vh + " + t.translate + "px))"));
            },
            touchMove: (t, s) => {
              (a.translateY = t.translate), t.activeIndex === 0 && t.translate <= 0 ? (a.operateType = "touch") : (a.operateType = "scroll");
            },
            touchEnd: (t, s) => {
              $("#header").css("transform", ""), $("#header").css("transition", ""), t.activeIndex === 0 && (console.log("\u79FB\u52A8\u7ED3\u675F\u540E.................", a.translateY), a.translateY < -200 && t.slideTo(1));
            },
            slideChange: t => {
              a.swiperActiveIndex = t.activeIndex;
              let s = $("#header").children(),
                r = "header-" + t.activeIndex;
              for (let c = 0; c < s.length; c++) {
                let f = s[c];
                $(f).attr("class") === r ? $(f).show() : $(f).hide();
              }
              let o = "content-header-" + t.activeIndex,
                n = "content-header-0",
                h = "body-" + (t.activeIndex - 1),
                i = "body-" + t.activeIndex;
              switch (
                ($("#body2-video1")[0] && $("#body2-video1")[0].pause(),
                $("#body2-video2")[0] && $("#body2-video2")[0].pause(),
                $("#body3-video1")[0] && $("#body3-video1")[0].pause(),
                $("#body3-video1")[0] && $("#body3-video2")[0].pause(),
                t.activeIndex !== 6 && $("#header").css({ height: "", transition: "all 1s,height 0.5s ease" }),
                $(".doll").removeClass("translate"),
                $("." + h)
                  .find(".label")
                  .addClass("translate"),
                $("." + i)
                  .find(".label")
                  .removeClass("translate"),
                t.activeIndex)
              ) {
                case 1:
                  (n = "content-header-" + (t.activeIndex - 1)), $(".body-1 .words").addClass("animate__fadeIn");
                  break;
                case 2:
                  (n = "content-header-" + (t.activeIndex - 1)),
                    setTimeout(function () {
                      $("#header").hasClass("content-header-2") && ($("#body2-video1").trigger("play"), $("#body2-video2").trigger("play"));
                    }, 1e3);
                  break;
                case 3:
                  (n = "content-header-" + (t.activeIndex - 1)),
                    setTimeout(function () {
                      $("#header").hasClass("content-header-3") && ($("#body3-video1").trigger("play"), $("#body3-video2").trigger("play"));
                    }, 1e3),
                    setTimeout(function () {
                      $(".game-video img").css("opacity", "1");
                    }, 2e3);
                  break;
                case 4:
                  n = "content-header-" + (t.activeIndex - 1);
                  break;
                case 5:
                  $(".doll").addClass("translate"), (n = "content-header-" + (t.activeIndex - 1)), $(".footer-1").css({ transform: "translateY(0%)", transition: "all 500ms ease" }), $(".footer-2").css({ transform: "translateY(100%)", transition: "all 500ms ease" });
                  break;
                case 6:
                  (n = "content-header-" + (t.activeIndex - 1)), $("#footer-1").css({ transform: "translateY(0%)" });
                  break;
              }
              $("#header").removeClass(n), $("#header").addClass(o), this.pagePointListener(t.activeIndex);
            },
          },
        });
      },
      mouseDown: function () {},
      mouseUp: function () {},
      mouseMove: function () {},
      coinFly: function () {
        let e = 1e3;
        this.swiperActiveIndex == 3 && (this.generateCoin(), (e = Math.random() * 500 + 500)), setTimeout(this.coinFly, e);
      },
      generateCoin: function () {
        let e = document.createElement("img");
        e.className = "flying-coin";
        let a = Math.random() * 3e3 + 3e3,
          t = Re[Math.round(a) % 4],
          s = Math.random() * 180 - 90;
        return (
          (e.src = document.querySelector("#coin-" + [Math.round(a) % 2]).src),
          (e.style.transform = "rotateZ(" + s + "deg)"),
          (e.style.animation = "flyingPast " + a + "ms " + t + " forwards"),
          (e.style.left = Math.random() * 93.75 + "vw"),
          document.querySelector(".body-3").append(e),
          setTimeout(function () {
            e.remove();
          }, a + 100),
          a
        );
      },
      pageSlide: function (e) {
        this.mySwiper.slideTo(e);
      },
      pagePointListener: function (e) {
        this.pointList.map(a => {
          e > 0 && e < 6 ? a.index === e && ($(".point").show(), $(".point").css("background", "#d0d0d0"), $(".point").css("borderColor", "#d0d0d0"), $("#" + a.id).css("background", a.color), $("#" + a.id).css("borderColor", a.color)) : $(".point").hide();
        });
      },
      playGameVideoStart: function (e) {
        let a = $(e.target).parent().siblings(),
          t = $(a[0]).children("video").attr("id");
        $("#" + t).trigger("play");
      },
      videoPlayEnd: function (e) {
        console.log(e), $(e.target).pause().currentTime(0);
      },
      videoCanplay: function (e) {
        switch (e) {
          case 1:
            this.videoCanplay1 = !0;
            break;
          case 2:
            this.videoCanplay2 = !0;
            break;
          case 3:
            this.videoCanplay3 = !0;
            break;
          case 4:
            this.videoCanplay4 = !0;
            break;
        }
      },
      swiperFooter1: function () {
        if ($("#contents").hasClass("with-footer-2")) {
          this.swiperFooter2();
          return;
        }
        this.mySwiper.disable(),
          $("#contents").removeClass("with-footer-1"),
          $("#contents").addClass("with-footer-2"),
          $(".footer-1").css({ transform: "translateY(-100vh)", transition: "all 500ms ease" }),
          $(".footer-2").css({ transform: "translateY(0%)", transition: "all 500ms ease" }),
          $("#header").css({ height: "0", transition: "all 1s,height 0.5s ease" });
      },
      swiperFooter2: function () {
        if ($("#contents").hasClass("with-footer-1")) {
          this.swiperFooter1();
          return;
        }
        this.mySwiper.enable(),
          $("#contents").removeClass("with-footer-2"),
          $("#contents").addClass("with-footer-1"),
          $(".footer-1").css({ transform: "translateY(0%)", transition: "all 500ms ease" }),
          $(".footer-1 .footer-eggs").css("bottom", ""),
          $(".footer-2").css({ transform: "translateY(100vh)", transition: "all 500ms ease" }),
          $("#header").css({ height: "", transition: "all 1s,height 0.5s ease" });
      },
      playOrPause: function (e) {
        $(e.target).find("video").prop("paused") ? $(e.target).addClass("paused") : $(e.target).removeClass("paused");
      },
      copyCode: function (e, a) {
        const t = new ot(e, { text: () => a });
        t.on("success", s => {
          console.log(s.text), alert("\u590D\u5236\u6210\u529F"), t.destroy();
        }),
          t.on("error", s => {
            t.destroy();
          });
      },
    },
  },
  T = {};
var Fe = l(Ye, ke, Be, !1, Ge, "4c0e4e72", null, null);
function Ge(e) {
  for (let a in T) this[a] = T[a];
}
var Oe = (function () {
  return Fe.exports;
})();
var at = "/assets/cryptoid-3.0fefc07f.png",
  Ne = "/assets/cryptoid-6.2a5f9456.png",
  Le = "/assets/cryptoid-7.960425b7.png",
  Ue = "/assets/cryptoid-8.e38972d0.png",
  Pe = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t("div", [t("div", { staticClass: "Breeding-box page", attrs: { id: "contents" } }, [t("Header"), e._m(0)], 1), t("Bottom")], 1);
  },
  Ve = [
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "bg-story container" }, [
        t("div", { staticClass: "page-header" }),
        t("div", { staticClass: "page-body", attrs: { "data-current": "0" } }, [
          t("div", { staticClass: "swiper-wrapper" }, [
            t("div", { staticClass: "swiper-slide" }, [t("h1", { staticClass: "page-title" }, [e._v("IN AN ENDLESS METAVERSE, A FORGOTTEN PLANET LIVES INHABITED BY INTELLIGENT BEINGS - CRYPTOIDS...")]), t("img", { staticClass: "cryptoid-1", attrs: { src: at, alt: "" } })]),
            t("div", { staticClass: "swiper-slide" }, [
              t("h1", { staticClass: "page-title" }, [e._v(" TACARO, EMO,"), t("br"), e._v(" LOZETA - \u201CTHE BEGINNING THREE\u201D, WHICH STOPPED THE BRUTAL WARS AND BRING PEACE... ")]),
              t("div", { staticClass: "cryptoid-2" }, [t("div", { staticClass: "cryptoid-name" }, [e._v("Lozeta")]), t("img", { attrs: { src: Ne, alt: "" } })]),
              t("div", { staticClass: "cryptoid-3" }, [t("div", { staticClass: "cryptoid-name" }, [e._v("Emo")]), t("img", { attrs: { src: Le, alt: "" } })]),
              t("div", { staticClass: "cryptoid-4" }, [t("div", { staticClass: "cryptoid-name" }, [e._v("Tacaro")]), t("img", { attrs: { src: Ue, alt: "" } })]),
            ]),
          ]),
          t("div", { staticClass: "swiper-slide" }),
        ]),
      ]);
    },
  ];
const We = {
    name: "Breeding",
    components: { Header: _, Bottom: v },
    mounted: () => {
      new C(".page-body", {
        direction: "vertical",
        speed: 1e3,
        height: window.innerHeight,
        on: {
          slideChange: e => {
            $(".page-body").attr("data-current", e.activeIndex);
          },
        },
      });
    },
  },
  I = {};
var De = l(We, Pe, Ve, !1, Qe, null, null, null);
function Qe(e) {
  for (let a in I) this[a] = I[a];
}
var Ke = (function () {
    return De.exports;
  })(),
  He = "/assets/cryptoid-4.b4519996.png",
  Me = "/assets/cryptoid-5.8430e324.png",
  je = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t("div", [t("div", { staticClass: "Breeding-box page", attrs: { id: "contents" } }, [t("Header"), e._m(0)], 1), t("Bottom")], 1);
  },
  Ze = [
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "bg-breeding container" }, [
        t("div", { staticClass: "page-header" }, [
          t("h1", { staticClass: "page-title" }, [e._v("BREEDING")]),
          t("h2", { staticClass: "page-subtitle" }, [e._v("Cryptoids can breed with each other to produce superior Cryptoids which share similar traits.")]),
          t("p", { staticClass: "page-description" }, [e._v("The maximum number of breeds will be capped at seven (7) per Cryptoid. A combination of both $CAC and $CGC will be required in order to breed Cryptoids in addition to a pair of Cryptoids.")]),
        ]),
        t("div", { staticClass: "page-body page-body-breeding" }, [t("img", { staticClass: "cryptoid-1", attrs: { src: at, alt: "" } }), t("img", { staticClass: "cryptoid-2", attrs: { src: He, alt: "" } }), t("img", { staticClass: "cryptoid-3", attrs: { src: Me, alt: "" } })]),
      ]);
    },
  ];
const Xe = { name: "Breeding", components: { Header: _, Bottom: v } },
  k = {};
var ze = l(Xe, je, Ze, !1, Je, null, null, null);
function Je(e) {
  for (let a in k) this[a] = k[a];
}
var ta = (function () {
    return ze.exports;
  })(),
  B = "/assets/pink_img_01.4b571710.jpg",
  R = "/assets/pink_img_02.b3b75dfa.jpg",
  Y = "/assets/pink_img_03.8298a3f4.jpg",
  ea = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t("div", [t("div", { staticClass: "Breeding-box page", attrs: { id: "contents" } }, [t("Header"), e._m(0)], 1), t("Bottom")], 1);
  },
  aa = [
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "bg-battle container" }, [
        t("div", { staticClass: "page-header" }, [
          t("h1", { staticClass: "page-title" }, [e._v("ADVENTURE "), t("br"), e._v("& ARENA")]),
          t("h2", { staticClass: "page-subtitle" }, [e._v("A team of three Cryptoids will band together to defeat various monsters or fight against other players in different stages.")]),
          t("p", { staticClass: "page-description" }, [e._v("Cryptoids each have different skills that can be used to destroy your opponent!")]),
        ]),
        t("div", { staticClass: "page-body" }, [
          t("div", { staticClass: "swiper-container-breeding" }, [
            t("div", { staticClass: "swiper-wrapper" }, [
              t("div", { staticClass: "swiper-slide" }, [t("img", { attrs: { src: B, alt: "" } })]),
              t("div", { staticClass: "swiper-slide" }, [t("img", { attrs: { src: R, alt: "" } })]),
              t("div", { staticClass: "swiper-slide" }, [t("img", { attrs: { src: Y, alt: "" } })]),
              t("div", { staticClass: "swiper-slide" }, [t("img", { attrs: { src: B, alt: "" } })]),
              t("div", { staticClass: "swiper-slide" }, [t("img", { attrs: { src: R, alt: "" } })]),
              t("div", { staticClass: "swiper-slide" }, [t("img", { attrs: { src: Y, alt: "" } })]),
            ]),
            t("div", { staticClass: "swiper-button-next", attrs: { "data-v-49110692": "" } }, [
              t("div", { staticClass: "icon", attrs: { "data-v-49110692": "" } }, [t("img", { attrs: { "data-v-49110692": "", src: tt } })]),
              t("div", { staticClass: "icon", attrs: { "data-v-49110692": "" } }, [t("img", { attrs: { "data-v-49110692": "", src: et } })]),
            ]),
            t("div", { staticClass: "swiper-pagination-breeding" }),
          ]),
        ]),
      ]);
    },
  ];
const sa = {
    name: "Breeding",
    components: { Header: _, Bottom: v },
    mounted: () => {
      new C(".swiper-container-breeding", { slidesPerView: 1, centeredSlides: !0, autoplay: !0, loop: !0, pagination: { el: ".swiper-pagination-breeding", clickable: !0, dynamicBullets: !0 } });
    },
  },
  F = {};
var ra = l(sa, ea, aa, !1, ia, null, null, null);
function ia(e) {
  for (let a in F) this[a] = F[a];
}
var na = (function () {
    return ra.exports;
  })(),
  oa = "/assets/cryptoid-9.cca1d0f2.png",
  la = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t("div", [t("div", { staticClass: "Breeding-box page", attrs: { id: "contents" } }, [t("Header"), e._m(0)], 1), t("Bottom")], 1);
  },
  ca = [
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "bg-sp2e container" }, [
        t("div", { staticClass: "page-header" }, [t("h1", { staticClass: "page-title" }, [e._v("WHAT IS SUSTAINABLE PLAY-TO-EARN?")])]),
        t("div", { staticClass: "page-body" }, [
          t("img", { staticClass: "cryptoid-1", attrs: { src: oa, alt: "" } }),
          t("p", { staticClass: "sp2e-text" }, [e._v("The economy of WOC is combined with token distribution, allowing the players able to predict the average rate of income of their purchase over time.")]),
          t("h2", { staticClass: "sp2e-title" }, [e._v(" EARN BACK ROI "), t("br"), e._v(" AT A SUSTAINED RATE ")]),
          t("ul", { staticClass: "page-body-list" }, [t("li", [e._v("Burning of $CGC through breeding of new Cryptoids")]), t("li", [e._v("$CAC used for breeding Cryptoids will also be used to purchase more $CGC for burning")]), t("li", [e._v("Buy-back of tokens through WoC treasury funds")])]),
          t("h2", { staticClass: "sp2e-title" }, [e._v("STABLE NUMBER OF CRYPTOIDS")]),
          t("ul", { staticClass: "page-body-list" }, [t("li", [e._v("Capping of the number of Cryptoids available to be bred - this will not only limit the number of available Cryptoids on the market but will steadily increase the value of Cryptoids as more players join")])]),
        ]),
      ]);
    },
  ];
const da = { name: "Breeding", components: { Header: _, Bottom: v } },
  G = {};
var _a = l(da, la, ca, !1, va, null, null, null);
function va(e) {
  for (let a in G) this[a] = G[a];
}
var pa = (function () {
    return _a.exports;
  })(),
  ua = "/assets/tokenomic.c84a4621.png",
  ma = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t("div", [t("div", { staticClass: "Breeding-box page", attrs: { id: "contents" } }, [t("Header"), e._m(0)], 1), t("Bottom")], 1);
  },
  ha = [
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "bg-tokenomic container" }, [
        t("div", { staticClass: "page-header" }, [t("h1", { staticClass: "page-title" }, [e._v("TOKENOMICS")])]),
        t("div", { staticClass: "page-body" }, [
          t("img", { staticClass: "tokenomic-image", attrs: { src: ua, alt: "" } }),
          t("div", { staticClass: "page-body-title" }, [e._v("The 2-token system of World of Cryptoids ($CGC and $CAC) will be used to bring a balance to the gaming ecosystem.")]),
          t("div", { staticClass: "page-body-text" }, [e._v("Both tokens will be added to the treasury whenever a new Cryptoid is bred and the Cryptoid Treasury will also regularly burn tokens in accordance with the amount of $CGC being in circulation.")]),
        ]),
      ]);
    },
  ];
const fa = { name: "Breeding", components: { Header: _, Bottom: v } },
  O = {};
var ga = l(fa, ma, ha, !1, Ca, null, null, null);
function Ca(e) {
  for (let a in O) this[a] = O[a];
}
var ya = (function () {
    return ga.exports;
  })(),
  ba = "/assets/nft-card.6093f297.png",
  Aa = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t("div", [t("div", { staticClass: "Breeding-box page", attrs: { id: "contents" } }, [t("Header"), e._m(0)], 1), t("Bottom")], 1);
  },
  wa = [
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "bg-nft container" }, [
        t("div", { staticClass: "page-header" }, [t("h1", { staticClass: "page-title" }, [e._v(" CRYPEGGs"), t("br"), e._v(" & NFTs ")])]),
        t("div", { staticClass: "page-body" }, [
          t("img", { staticClass: "nft-image", attrs: { src: ba, alt: "" } }),
          t("div", { staticClass: "page-body-title" }, [e._v("CrypEggs are Binance Smart Chain based NFTs that can hatch into Cryptoids with different rarities and traits!")]),
          t("div", { staticClass: "page-body-text" }, [e._v("CrypEggs are rare and highly sought after with each one hatching into a random Cryptoid with potentially extremely rare traits.")]),
          t("div", { staticClass: "market-button-wrap" }, [t("a", { staticClass: "market-button", attrs: { href: "javascript:void(0);", onclick: "alert('body 1 market place')" } }, [t("p", { staticClass: "pp" }, [e._v("MARKETPLACE")])])]),
        ]),
      ]);
    },
  ];
const Ea = { name: "Breeding", components: { Header: _, Bottom: v } },
  N = {};
var $a = l(Ea, Aa, wa, !1, Sa, null, null, null);
function Sa(e) {
  for (let a in N) this[a] = N[a];
}
var xa = (function () {
    return $a.exports;
  })(),
  qa = "/assets/phone.4b0cc6a4.png",
  Ta = "/assets/cryptoid-10.fcffcc56.png",
  Ia = "/assets/cryptoid-11.276630e9.png",
  ka = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t("div", [t("div", { staticClass: "Breeding-box page", attrs: { id: "contents" } }, [t("Header"), e._m(0)], 1), t("Bottom")], 1);
  },
  Ba = [
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "bg-guild-scholarship container" }, [
        t("div", { staticClass: "page-header" }, [t("h1", { staticClass: "page-title" }, [e._v(" GUILD"), t("br"), e._v(" & SCHOLARSHIP ")])]),
        t("div", { staticClass: "page-body" }, [
          t("img", { staticClass: "guild-scholarship-image", attrs: { src: qa, alt: "" } }),
          t("img", { staticClass: "cryptoid-1", attrs: { src: Ta, alt: "" } }),
          t("div", { staticClass: "page-body-title" }, [e._v("Guilds and Scholar Managers play an integral part in the World of Cryptoids ecosystem.")]),
          t("div", { staticClass: "page-body-text" }, [e._v(" We have developed an in-built scholar manager within the marketplace which allows for easy management of account leasing to other players. "), t("br"), e._v(" You can participate in a variety of ways: ")]),
          t("ul", { staticClass: "page-body-list" }, [t("li", [e._v("Purchasing of Cryptoids for Scholar accounts")]), t("li", [e._v("Starting a breeding business by purchasing $CAC/$CGC")]), t("li", [e._v("Referral system (paid in mCAC)")])]),
          t("img", { staticClass: "cryptoid-2", attrs: { src: Ia, alt: "" } }),
        ]),
      ]);
    },
  ];
const Ra = { name: "Breeding", components: { Header: _, Bottom: v } },
  L = {};
var Ya = l(Ra, ka, Ba, !1, Fa, null, null, null);
function Fa(e) {
  for (let a in L) this[a] = L[a];
}
var Ga = (function () {
    return Ya.exports;
  })(),
  Oa = "/assets/mobile_bg_player.69dd5ca4.jpg",
  Na = "/assets/tab_01.de13f4fe.png",
  La = "/assets/tab_02.c61d4ee0.png",
  Ua = "/assets/tab_03.e4a27c51.png",
  Pa = "/assets/01_1.b8a65280.jpg",
  Va = "/assets/01_2.30ee535f.jpg",
  Wa = "/assets/01_03.9cf40756.jpg",
  Da = "/assets/01_4.5e62fbaf.jpg",
  Qa = "/assets/01_5.113d7519.jpg",
  Ka = "/assets/01_6.f1b81d17.jpg",
  Ha = "/assets/02_1.7be6ef82.jpg",
  Ma = "/assets/02_2.5405e6ae.jpg",
  ja = "/assets/02_3.228e4cdb.jpg",
  Za = "/assets/02_4.ca60129f.jpg",
  Xa = "/assets/02_5.7aeb3837.jpg",
  za = "/assets/02_6.9dd7687e.jpg",
  Ja = "/assets/03_1.c4e199b0.jpg",
  ts = "/assets/03_2.e322f58f.jpg",
  es = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t(
      "div",
      [
        t(
          "div",
          { staticClass: "Breeding-box page", attrs: { id: "contents" } },
          [
            t("Header"),
            t("div", { staticClass: "container", on: { scroll: e.handleScroll } }, [
              t("div", { staticClass: "header" }, [
                t("img", { attrs: { src: Oa, alt: "" } }),
                t("div", { staticClass: "tabs" }, [t("div", { staticClass: "tab-item active" }, [e._v("PLAYER")]), t("router-link", { staticClass: "tab-item", attrs: { tag: "div", to: "/guild" } }, [e._v("GUILD")])], 1),
                t("div", { staticClass: "step" }, [
                  e.step === 1 ? t("img", { attrs: { src: Na, alt: "" } }) : e.step === 2 ? t("img", { attrs: { src: La, alt: "" } }) : t("img", { attrs: { src: Ua, alt: "" } }),
                  t("div", { staticClass: "step-space" }, [
                    t("div", {
                      on: {
                        click: function (s) {
                          return e.handleStep(1);
                        },
                      },
                    }),
                    t("div", {
                      on: {
                        click: function (s) {
                          return e.handleStep(2);
                        },
                      },
                    }),
                    t("div", {
                      on: {
                        click: function (s) {
                          return e.handleStep(3);
                        },
                      },
                    }),
                  ]),
                ]),
              ]),
              t("div", { staticClass: "body" }, [
                e.step === 1
                  ? t("div", { staticClass: "step-one" }, [
                      t("img", { attrs: { src: Pa, alt: "" } }),
                      t("img", { attrs: { src: Va, alt: "" } }),
                      t("img", { attrs: { src: Wa, alt: "" } }),
                      t("img", { attrs: { src: Da, alt: "" } }),
                      t("img", { attrs: { src: Qa, alt: "" } }),
                      t("img", { attrs: { src: Ka, alt: "" } }),
                    ])
                  : e.step === 2
                  ? t("div", { staticClass: "step-two" }, [
                      t("img", { attrs: { src: Ha, alt: "" } }),
                      t("img", { attrs: { src: Ma, alt: "" } }),
                      t("img", { attrs: { src: ja, alt: "" } }),
                      t("img", { attrs: { src: Za, alt: "" } }),
                      t("img", { attrs: { src: Xa, alt: "" } }),
                      t("img", { attrs: { src: za, alt: "" } }),
                    ])
                  : t("div", { staticClass: "step-three" }, [t("img", { attrs: { src: Ja, alt: "" } }), t("img", { attrs: { src: ts, alt: "" } })]),
              ]),
            ]),
          ],
          1
        ),
        t("Bottom"),
      ],
      1
    );
  },
  as = [];
const ss = {
    name: "Player",
    components: { Header: _, Bottom: v },
    data() {
      return { step: 1 };
    },
    methods: {
      handleStep(e) {
        this.step = e;
      },
      handleScroll(e) {
        if (this.step >= 3) return;
        const a = e.target.clientHeight,
          t = e.target.scrollTop,
          s = e.target.scrollHeight;
        a + t >= s - 0 &&
          setTimeout(() => {
            this.step++, (document.querySelector(".container").scrollTop = 0);
          }, 500);
      },
    },
  },
  U = {};
var rs = l(ss, es, as, !1, is, "28d71be9", null, null);
function is(e) {
  for (let a in U) this[a] = U[a];
}
var ns = (function () {
    return rs.exports;
  })(),
  os = "/assets/mobile_bg_getting.7b24fbc1.jpg",
  ls = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t(
      "div",
      [
        t(
          "div",
          { staticClass: "Breeding-box page", attrs: { id: "contents" } },
          [
            t("Header"),
            t("div", { staticClass: "container" }, [
              t("div", { staticClass: "header" }, [
                t("img", { attrs: { src: os, alt: "" } }),
                t("div", { staticClass: "tabs" }, [t("router-link", { staticClass: "tab-item", attrs: { tag: "div", to: "/player" } }, [e._v("PLAYER")]), t("div", { staticClass: "tab-item active" }, [e._v("GUILD")])], 1),
              ]),
              e._m(0),
            ]),
          ],
          1
        ),
        t("Bottom"),
      ],
      1
    );
  },
  cs = [
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "body" }, [
        t("div", { staticClass: "title" }, [e._v(" We offer the best "), t("br"), e._v("incentives for"), t("br"), e._v(" your guild! ")]),
        t("div", { staticClass: "sub-title" }, [e._v("SUSTAINABLE PLAY-TO-EARN")]),
        t("div", { staticClass: "content" }, [e._v(" Offers Players to earn back in their ROI at a sustained rate ")]),
        t("div", { staticClass: "sub-title" }, [e._v("AFFILIATE PROGRAM")]),
        t("div", { staticClass: "content" }, [e._v("Get the accumulative rebates")]),
        t("div", { staticClass: "sub-title" }, [e._v("NFT PACKAGE DEAL")]),
        t("div", { staticClass: "content" }, [e._v("A good deal in NFT package")]),
        t("div", { staticClass: "sub-title" }, [e._v("SCHOLARSHIP & TRACKING")]),
        t("div", { staticClass: "content" }, [e._v(" WOC in-built scholar manager & Tracking dashboard for Guilds ")]),
      ]);
    },
  ];
const ds = { name: "Guild", components: { Header: _, Bottom: v } },
  P = {};
var _s = l(ds, ls, cs, !1, vs, "3beafb99", null, null);
function vs(e) {
  for (let a in P) this[a] = P[a];
}
var ps = (function () {
    return _s.exports;
  })(),
  us = "/assets/mobile_bg_faq.f7c7f7a9.jpg",
  ms = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t(
      "div",
      [
        t(
          "div",
          { staticClass: "Breeding-box page", attrs: { id: "contents" } },
          [
            t("Header"),
            t("div", { staticClass: "container" }, [
              t("img", { staticClass: "header", attrs: { src: us, alt: "" } }),
              t("div", { staticClass: "body" }, [
                t("div", { staticClass: "module-title" }, [e._v("BASICS")]),
                e.curIndex === 0
                  ? t(
                      "div",
                      {
                        staticClass: "module-body active",
                        on: {
                          click: function (s) {
                            return e.handleClick(0);
                          },
                        },
                      },
                      [t("div", { staticClass: "module-name" }, [e._v("What is World of Cryptoids?")]), t("div", { staticClass: "module-content" }, [e._v(" World of Cryptoids is a blockchain based sustainable play to earn (sP2E) game allowing players to have fun and earn at the same time! ")])]
                    )
                  : t(
                      "div",
                      {
                        staticClass: "module-body",
                        on: {
                          click: function (s) {
                            return e.handleClick(0);
                          },
                        },
                      },
                      [t("div", { staticClass: "module-name" }, [e._v("What is World of Cryptoids?")])]
                    ),
                e.curIndex === 1
                  ? t(
                      "div",
                      {
                        staticClass: "module-body active",
                        on: {
                          click: function (s) {
                            return e.handleClick(1);
                          },
                        },
                      },
                      [
                        t("div", { staticClass: "module-name" }, [e._v(" How do I get started & download World of Cryptoids? ")]),
                        t("div", { staticClass: "module-content" }, [e._v(" World of Cryptoids is a blockchain based sustainable play to earn (sP2E) game allowing players to have fun and earn at the same time! ")]),
                      ]
                    )
                  : t(
                      "div",
                      {
                        staticClass: "module-body",
                        on: {
                          click: function (s) {
                            return e.handleClick(1);
                          },
                        },
                      },
                      [t("div", { staticClass: "module-name" }, [e._v(" How do I get started & download World of Cryptoids? ")])]
                    ),
                t("div", { staticClass: "module-title second" }, [e._v("Gameplay")]),
                e.curIndex === 2
                  ? t(
                      "div",
                      {
                        staticClass: "module-body active",
                        on: {
                          click: function (s) {
                            return e.handleClick(2);
                          },
                        },
                      },
                      [
                        t("div", { staticClass: "module-name" }, [e._v(" How do I get started & download World of Cryptoids? ")]),
                        t("div", { staticClass: "module-content" }, [e._v(" World of Cryptoids is a blockchain based sustainable play to earn (sP2E) game allowing players to have fun and earn at the same time! ")]),
                      ]
                    )
                  : t(
                      "div",
                      {
                        staticClass: "module-body",
                        on: {
                          click: function (s) {
                            return e.handleClick(2);
                          },
                        },
                      },
                      [t("div", { staticClass: "module-name" }, [e._v(" How do I get started & download World of Cryptoids? ")])]
                    ),
                e.curIndex === 3
                  ? t(
                      "div",
                      {
                        staticClass: "module-body active",
                        on: {
                          click: function (s) {
                            return e.handleClick(3);
                          },
                        },
                      },
                      [
                        t("div", { staticClass: "module-name" }, [e._v(" How do I get started & download World of Cryptoids? ")]),
                        t("div", { staticClass: "module-content" }, [e._v(" World of Cryptoids is a blockchain based sustainable play to earn (sP2E) game allowing players to have fun and earn at the same time! ")]),
                      ]
                    )
                  : t(
                      "div",
                      {
                        staticClass: "module-body active",
                        on: {
                          click: function (s) {
                            return e.handleClick(3);
                          },
                        },
                      },
                      [t("div", { staticClass: "module-name" }, [e._v(" How do I get started & download World of Cryptoids? ")])]
                    ),
              ]),
            ]),
          ],
          1
        ),
        t("Bottom"),
      ],
      1
    );
  },
  hs = [];
const fs = {
    name: "FAQ",
    components: { Header: _, Bottom: v },
    data() {
      return { curIndex: 0 };
    },
    methods: {
      handleClick(e) {
        this.curIndex = e;
      },
    },
  },
  V = {};
var gs = l(fs, ms, hs, !1, Cs, "474b829c", null, null);
function Cs(e) {
  for (let a in V) this[a] = V[a];
}
var ys = (function () {
    return gs.exports;
  })(),
  bs = "/assets/mobile_bg_roadmap.826a06c8.jpg",
  As = "/assets/egg_01.de6bda5c.png",
  W = "/assets/egg_02.5a6a07dc.png",
  D = "/assets/egg_03.0b1b62a4.png",
  ws = "/assets/egg_04.7d2bcfa4.png",
  Es = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t("div", [t("div", { staticClass: "Breeding-box page", attrs: { id: "contents" } }, [t("Header"), e._m(0)], 1), t("Bottom")], 1);
  },
  $s = [
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "container" }, [
        t("img", { staticClass: "header", attrs: { src: bs, alt: "" } }),
        t("div", { staticClass: "body" }, [
          t("div", { staticClass: "line" }),
          t("span", { staticClass: "time" }, [e._v("2021 Q4")]),
          t("div", { staticClass: "content" }, [t("img", { staticClass: "icon", attrs: { src: As } }), t("div", { staticClass: "text" }, [e._v(" Add CrypEggs Whitelisting and Certik Audited in Q4 ")])]),
          t("span", { staticClass: "time" }, [e._v("2022 Q1")]),
          t("div", { staticClass: "content" }, [t("img", { staticClass: "icon", attrs: { src: W } }), t("div", { staticClass: "text" }, [e._v(" CrypEggs Whitelisting Certik Audited $CAC Public Sale Worldwide Marketing Mobile Available ")])]),
          t("div", { staticClass: "content" }, [t("img", { staticClass: "icon", attrs: { src: D } }), t("div", { staticClass: "text" }, [e._v(" Game Official Launch New Game Mode: Ultimate Challenge"), t("br"), e._v(" Kingdom Land Sale ")])]),
          t("span", { staticClass: "time" }, [e._v("2022 Q2")]),
          t("div", { staticClass: "content" }, [
            t("img", { staticClass: "icon", attrs: { src: D } }),
            t("div", { staticClass: "text" }, [t("p", [e._v("Staking and Liquidity Pools")]), t("p", [e._v(" New Game Mode: Kingdom New Game Mode: Tranning Ground New Feature: Reborn New Feature: Race Combination ")])]),
          ]),
          t("span", { staticClass: "time" }, [e._v("2022 Q3")]),
          t("div", { staticClass: "content" }, [t("img", { staticClass: "icon", attrs: { src: ws } }), t("div", { staticClass: "text" }, [e._v(" Additional Exchange Listings"), t("br"), e._v(" Game Platform Development ")])]),
          t("div", { staticClass: "content" }, [t("img", { staticClass: "icon", attrs: { src: W } }), t("div", { staticClass: "text" }, [e._v("More is yew to come!")])]),
        ]),
      ]);
    },
  ];
const Ss = { name: "Breeding", components: { Header: _, Bottom: v } },
  Q = {};
var xs = l(Ss, Es, $s, !1, qs, "71dc9843", null, null);
function qs(e) {
  for (let a in Q) this[a] = Q[a];
}
var Ts = (function () {
    return xs.exports;
  })(),
  Is = "/assets/mobile_bg_terms.f326d23e.jpg",
  ks = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t("div", [t("div", { staticClass: "Breeding-box page", attrs: { id: "contents" } }, [t("Header"), e._m(0)], 1), t("Bottom")], 1);
  },
  Bs = [
    function () {
      var e = this,
        a = e.$createElement,
        t = e._self._c || a;
      return t("div", { staticClass: "container" }, [
        t("img", { staticClass: "header", attrs: { src: Is, alt: "" } }),
        t("div", { staticClass: "body" }, [
          t("div", { staticClass: "title" }, [e._v("Terms of Use")]),
          t("div", { staticClass: "content" }, [
            t("p", [
              e._v(
                ' These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (\u201Cyou") and World of Cryptoids Limited (\u201Cwe", \u201Cus", or \u201Cour") concerning your access to and use of the www.cryptoids.world website and the World of Cryptoids app as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the \u201CSite" and the \u201CApp"). World of Cryptoids is a distributed application that is currently running on the Binance Smart Chain (the "Blockchains"), using specially-developed smart contracts (each, a \u201CSmart Contract\u201D) to enable users to own, transfer, battle, and breed genetically unique digital creatures. It also enables users to own and transfer other digital assets like plots of land and items. These assets can then be visualized on a website that the user can interact with (the "Site"). The Smart Contracts and the Site are collectively referred to in these Terms as the \u201CApp\u201D. Using the App, users can view their assets and use the Smart Contracts to acquire, trade, battle, and breed creatures with other App users. '
              ),
            ]),
            t("p", [
              e._v(
                " WE ARE ONLY WILLING TO MAKE THE APP, THE SMART CONTRACTS, AND THE SITE AVAILABLE TO YOU IF YOU ACCEPT ALL OF THESE TERMS. BY USING THE APP, THE SMART CONTRACTS, THE SITE, OR ANY OTHER OFFICIAL World of Cryptoids PRODUCT, YOU ARE CONFIRMING THAT YOU HAVE READ, UNDERSTAND, AND AGREE TO BE BOUND BY ALL OF THESE TERMS OF USE. IF YOU DO NOT AGREE AND/OR ACCEPT ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE, THE APP AND THE SMART CONTRACTS AND YOU MUST DISCONTINUE USE IMMEDIATELY. "
              ),
            ]),
            t("p", [
              e._v(
                ' Supplemental terms and conditions or documents that may be posted on the Site, the App, and the Smart Contracts from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you of any changes by updating the \u201CLast Updated" date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site, the App, and the Smart Contracts after the date such revised Terms of Use are posted. '
              ),
            ]),
            t("p", [
              e._v(
                " The information on the Site, the App, and the Smart Contracts are not intended for distribution to any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation, or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, any persons who access the Site and/or the App while breaking their local laws are doing it on their own initiative and will have to deal with the consequences when applicable. "
              ),
            ]),
          ]),
        ]),
      ]);
    },
  ];
const Rs = { name: "TAC", components: { Header: _, Bottom: v } },
  K = {};
var Ys = l(Rs, ks, Bs, !1, Fs, "6ed60e9d", null, null);
function Fs(e) {
  for (let a in K) this[a] = K[a];
}
var Gs = (function () {
  return Ys.exports;
})();
m.use(Z);
const st = new Z({
  mode: "history",
  routes: [
    { path: "/", name: "home", component: Oe },
    { path: "/story", name: "Story", component: Ke },
    { path: "/breeding", name: "Breeding", component: ta },
    { path: "/battle", name: "Battle", component: na },
    { path: "/sp2e", name: "SP2E", component: pa },
    { path: "/tokenomics", name: "Tokenomic", component: ya },
    { path: "/nft", name: "NFT", component: xa },
    { path: "/guildscholarship", name: "GuildScholarship", component: Ga },
    { path: "/player", name: "Player", component: ns },
    { path: "/guild", name: "Guild", component: ps },
    { path: "/roadmap", name: "Roadmap", component: Ts },
    { path: "/FAQ", name: "FAQ", component: ys },
    { path: "/TAC", name: "TAC", component: Gs },
  ],
});
var rt =
    "data:image/png;base64,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",
  Os = "/img/teaser_popup-video-bg.da69e82d.png",
  Ns = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t("transition-group", { attrs: { name: "fade" } }, [
      e.show
        ? t("div", {
            key: "1",
            staticClass: "mask",
            on: {
              click: function (s) {
                e.show = !1;
              },
              touchmove: function (s) {
                s.preventDefault();
              },
            },
          })
        : e._e(),
      t("div", { directives: [{ name: "show", rawName: "v-show", value: e.show, expression: "show" }], key: "2", staticClass: "pop" }, [
        t("div", { staticClass: "content" }, [
          t("img", {
            staticClass: "close",
            attrs: { src: rt, alt: "" },
            on: {
              click: function (s) {
                e.show = !1;
              },
            },
          }),
          t("video", { staticStyle: { width: "100%", height: "100%", "object-fit": "cover" }, attrs: { poster: Os, controls: "controls" } }, [t("source", { attrs: { src: e.video, type: "video/mp4" } })]),
        ]),
      ]),
    ]);
  },
  Ls = [];
const Us = {
    name: "Popup",
    data() {
      return { show: !1, video: "" };
    },
    methods: {
      btnClick() {
        this.click(), (this.show = !1);
      },
    },
  },
  H = {};
var Ps = l(Us, Ns, Ls, !1, Vs, "ca0055c6", null, null);
function Vs(e) {
  for (let a in H) this[a] = H[a];
}
var y = (function () {
    return Ps.exports;
  })(),
  Ws = function () {
    var e = this,
      a = e.$createElement,
      t = e._self._c || a;
    return t("transition-group", { attrs: { name: "fade" } }, [
      e.show
        ? t("div", {
            key: "1",
            staticClass: "mask",
            on: {
              click: function (s) {
                e.show = !1;
              },
              touchmove: function (s) {
                s.preventDefault();
              },
            },
          })
        : e._e(),
      t("div", { directives: [{ name: "show", rawName: "v-show", value: e.show, expression: "show" }], key: "2", staticClass: "pop" }, [
        t("div", { staticClass: "content" }, [
          t("img", { staticClass: "close", attrs: { src: rt, alt: "" }, on: { click: e.closeVideo } }),
          t("iframe", { attrs: { width: "100%", height: "100%", src: e.video, frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowfullscreen: "" } }),
        ]),
      ]),
    ]);
  },
  Ds = [];
const Qs = {
    name: "Popup",
    props: { close: { type: Function } },
    data() {
      return { show: !1, video: "" };
    },
    methods: {
      btnClick() {
        this.click(), (this.show = !1);
      },
      closeVideo() {
        window["youtube-" + this.video] && window["youtube-" + this.video].remove();
      },
    },
  },
  M = {};
var Ks = l(Qs, Ws, Ds, !1, Hs, "5eaed269", null, null);
function Hs(e) {
  for (let a in M) this[a] = M[a];
}
var Ms = (function () {
  return Ks.exports;
})();
const js = m.extend(y),
  Zs = m.extend(Ms);
y.install = function (e) {
  let a = new js({ data: e }).$mount();
  document.body.appendChild(a.$el),
    m.nextTick(() => {
      a.show = !0;
    });
};
y.youtube = function (e) {
  let a = new Zs({ data: e }).$mount();
  (window["youtube-" + e.video] = a.$el),
    document.body.appendChild(a.$el),
    m.nextTick(() => {
      a.show = !0;
    });
};
m.prototype.$popup = y.install;
m.prototype.$popupYoutube = y.youtube;
window.$ = X;
window.$popup = y.install;
window.$popupYoutube = y.youtube;
window.jQuery = X;
lt({ Vue: m, integrations: [new ct({ routingInstrumentation: dt(st), tracingOrigins: ["localhost", /^\//] })], debug: !1, tracesSampleRate: 1, release: "v1.0.0", environment: window.document.domain, ignoreErrors: ["Non-Error exception captured", "Non-Error promise rejection captured"] });
const Xs = new m({ router: st, render: e => e(ft) });
// Xs.$mount("#app");
window.addEventListener("load", function () {
  var e = document.querySelector(".header-play-logo"),
    a = document.querySelector("#contents .body-0"),
    t = document.querySelector("#contents .img-3"),
    s = document.querySelector("#contents .img-4"),
    r = document.querySelector("#contents .img-1"),
    o = document.querySelector("#contents .img-2"),
    n = document.querySelector(".logo-p"),
    h = document.querySelector(".logo-l"),
    i = document.querySelector(".logo-a"),
    c = document.querySelector(".logo-y");
  function f(d) {
    if (!(window.innerWidth < 768 || !a)) {
      var b = window.innerWidth / 2,
        g = window.innerHeight / 2,
        u = ((d.clientX - b) / b) * 5,
        p = ((d.clientY - g) / g) * 5;
      (a.style.backgroundPosition = (u + 5) * 2 + "%"),
        (a.style.backgroundSize = `${110 + p * 2}% ${110 + p * 2}%`),
        (r.style.transform = `translate3d(${2 + u * 0.4}%,${p * 2 - 5}%,0)`),
        (o.style.transform = `rotateY(180deg) translate3d(${3 - u * 0.6}%,${(p * 2 - 5) * 2}%,0)`),
        (t.style.transform = `rotateY(180deg) translate3d(${2 + u * 0.4}%,${(5 - p) / 1.5}%,0)`),
        (s.style.transform = `translate3d(${5 - u}%,${(5 - p) * 2}%,0)`);
    }
  }
  function A(d) {
    var b = e.offsetLeft + e.offsetWidth / 2,
      g = e.offsetTop + e.offsetHeight / 2,
      u = (d.clientX - b) / 4,
      p = ((d.clientY - g) / e.offsetHeight) * 2;
    (n.style.transform = "translate3d(" + u + "px, " + 10 * p + "%, 0)"),
      (n.style.transition = "all .2s linear"),
      (h.style.transform = "translate3d(" + u + "px, " + -40 * p + "%, 0)"),
      (h.style.transition = "all .2s linear"),
      (i.style.transform = "translate3d(" + u + "px, " + 10 * p + "%, 0)"),
      (i.style.transition = "all .2s linear"),
      (c.style.transform = "translate3d(" + u + "px, " + -40 * p + "%, 0)"),
      (c.style.transition = "all .2s linear");
  }
  e.querySelector("div").addEventListener("mousemove", A),
    window.addEventListener("mousemove", f),
    e.addEventListener("mouseleave", function () {
      (n.style.transform = null), (n.style.transition = null), (h.style.transform = null), (h.style.transition = null), (i.style.transform = null), (i.style.transition = null), (c.style.transform = null), (c.style.transition = null);
    });
});
var j = 0;
window.addEventListener(
  "scroll",
  function () {
    var e = window.pageYOffset || document.documentElement.scrollTop;
    if (e > j) for (var a = document.querySelectorAll(".animate__zoomIn"), t = 0; t < a.length; t += 1) a[t].className = a[t].className.replace("animate__zoomIn", "animate__zoomIn-reverse");
    else for (var a = document.querySelectorAll(".animate__zoomIn-reverse"), t = 0; t < a.length; t += 1) a[t].className = a[t].className.replace("animate__zoomIn-reverse", "animate__zoomIn");
    j = e <= 0 ? 0 : e;
  },
  !1
);
document.querySelector("#header");
document.querySelector(".body-3");
$(function () {
  $("body").on("click", ".video-body-1,.video-body-2", function (e) {
    $(this).find("video").prop("paused") ? ($(this).removeClass("paused"), $(this).find("video").trigger("play")) : ($(this).addClass("paused"), $(this).find("video").trigger("pause"));
  });
});

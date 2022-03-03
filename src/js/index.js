(function (t) {
    function s(s) {
        for (var i, n, c = s[0], r = s[1], l = s[2], v = 0, p = []; v < c.length; v++) n = c[v],
            Object.prototype.hasOwnProperty.call(e, n) && e[n] && p.push(e[n][0]),
            e[n] = 0;
        for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        d && d(s);
        while (p.length) p.shift()();
        return o.push.apply(o, l || []),
            a()
    }

    function a() {
        for (var t, s = 0; s < o.length; s++) {
            for (var a = o[s], i = !0, c = 1; c < a.length; c++) {
                var r = a[c];
                0 !== e[r] && (i = !1)
            }
            i && (o.splice(s--, 1), t = n(n.s = a[0]))
        }
        return t
    }
    var i = {},
        e = {
            app: 0
        },
        o = [];

    function n(s) {
        if (i[s]) return i[s].exports;
        var a = i[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return t[s].call(a.exports, a, a.exports, n),
            a.l = !0,
            a.exports
    }
    n.m = t,
        n.c = i,
        n.d = function (t, s, a) {
            n.o(t, s) || Object.defineProperty(t, s, {
                enumerable: !0,
                get: a
            })
        },
        n.r = function (t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        },
        n.t = function (t, s) {
            if (1 & s && (t = n(t)), 8 & s) return t;
            if (4 & s && "object" === typeof t && t && t.__esModule) return t;
            var a = Object.create(null);
            if (n.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & s && "string" != typeof t)
                for (var i in t) n.d(a, i,
                    function (s) {
                        return t[s]
                    }.bind(null, i));
            return a
        },
        n.n = function (t) {
            var s = t && t.__esModule ?
                function () {
                    return t["default"]
                } : function () {
                    return t
                };
            return n.d(s, "a", s),
                s
        },
        n.o = function (t, s) {
            return Object.prototype.hasOwnProperty.call(t, s)
        },
        n.p = "";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        r = c.push.bind(c);
    c.push = s,
        c = c.slice();
    for (var l = 0; l < c.length; l++) s(c[l]);
    var d = r;
    o.push([0, "chunk-vendors"]),
        a()
})({
    0: function (t, s, a) {
        t.exports = a("56d7")
    },
    "02df": function (t, s, a) {
        t.exports = a.p + "img/follow-us-icon-1.aa9abdb1.png"
    },
    "034f": function (t, s, a) {
        "use strict";
        a("85ec")
    },
    "0539": function (t, s, a) {
        t.exports = a.p + "img/logo_1.8b250981.png"
    },
    "0634": function (t, s, a) {
        t.exports = a.p + "img/nft-bg-center-2.ac330dd3.png"
    },
    "0835": function (t, s, a) {
        "use strict";
        a("a291")
    },
    "097a": function (t, s, a) {
        t.exports = a.p + "img/game-play-pic.0ad3bc9b.png"
    },
    "0c11": function (t, s, a) {
        t.exports = a.p + "img/partners_pic_1_logo.709c86eb.png"
    },
    "0fcb": function (t, s, a) {
        t.exports = a.p + "img/teaser_popup-video-bg.da69e82d.png"
    },
    "10b1": function (t, s, a) {
        t.exports = a.p + "img/footer-egg-1.cfb42108.png"
    },
    1195: function (t, s, a) {},
    1745: function (t, s, a) {
        t.exports = a.p + "img/game-play2-gold.7ff0fed6.png"
    },
    "235c": function (t, s, a) {
        t.exports = a.p + "img/partners_pic-5-logo.2f6392f7.png"
    },
    2390: function (t, s, a) {
        "use strict";
        a("c302")
    },
    2835: function (t, s, a) {
        t.exports = a.p + "img/footer-icon-3.35341c6e.png"
    },
    3248: function (t, s, a) {
        t.exports = a.p + "img/team-dw-4.363c4a9e.png"
    },
    "3b88": function (t, s, a) {
        t.exports = a.p + "img/game-play2-m-1.87657fb4.png"
    },
    "3d7a": function (t, s, a) {
        t.exports = a.p + "img/team-dw-1.f36d0818.png"
    },
    4097: function (t, s, a) {
        t.exports = a.p + "img/footer-egg-4.4c4b1b22.png"
    },
    4779: function (t, s, a) {
        t.exports = a.p + "img/team-dw-2.4e0566bc.png"
    },
    "4ffc": function (t, s, a) {
        t.exports = a.p + "img/footer-egg-5.62a7c66b.png"
    },
    "517c": function (t, s, a) {
        t.exports = a.p + "img/partners_pic-4.e469222c.png"
    },
    5458: function (t, s, a) {
        t.exports = a.p + "img/partners_pic-6-logo.7461f6cf.png"
    },
    "56d7": function (t, s, a) {
        "use strict";
        a.r(s);
        a("e260"),
            a("e6cf"),
            a("cca6"),
            a("a79d");
        var i = a("2b0e"),
            e = a("8a39"),
            o = a("1ddb"),
            n = a("688d"),
            c = function () {
                var t = this,
                    s = t.$createElement,
                    a = t._self._c || s;
                return a("div", {
                        attrs: {
                            id: "app"
                        }
                    },
                    [a("router-view")], 1)
            },
            r = [],
            l = {
                name: "App",
                components: {}
            },
            d = l,
            v = (a("034f"), a("2390"), a("2877")),
            p = Object(v["a"])(d, c, r, !1, null, "17e95bbf", null),
            m = p.exports,
            f = (a("b0c0"), a("2f62"));
        i["a"].use(f["a"]);
        new f["a"].Store({
            state: {
                hasAnimated: {
                    hasAnimats: !0,
                    name: ""
                }
            },
            mutations: {
                showAnimation: function (t, s) {
                    t.hasAnimated.hasAnimats = s.hasAnimats,
                        t.hasAnimated.name = s.name
                }
            }
        });
        var C = a("2909"),
            g = (a("d3b7"), a("3ca3"), a("ddb0"), a("99af"), a("c975"), a("8c4f")),
            h = a("bb51"),
            u = function () {
                var t = this,
                    s = t.$createElement,
                    i = t._self._c || s;
                return i("div", [t._m(0), i("div", {
                        attrs: {
                            id: "contents"
                        }
                    },
                    [i("div", {
                            staticClass: "swiper-wrapper"
                        },
                        [i("div", {
                                staticClass: "swiper-slide"
                            },
                            [i("div", {
                                    staticClass: "body-0"
                                },
                                [t._m(1), i("div", {
                                        staticClass: "contract"
                                    },
                                    [i("div", [i("span", {
                                            staticClass: "address"
                                        },
                                        [t._v("$CGC Token Address")]), i("div", [i("span", {
                                            staticClass: "code"
                                        },
                                        [t._v("0xF35aee66AB0D099aF233c1ab23E5f2138B0ED15B")]), i("button", {
                                        staticClass: "copy",
                                        on: {
                                            click: function (s) {
                                                return t.copyCode(".copy", "0xF35aee66AB0D099aF233c1ab23E5f2138B0ED15B")
                                            }
                                        }
                                    })])]), i("div", [i("span", {
                                            staticClass: "address"
                                        },
                                        [t._v("$CAC Token Address")]), i("div", [i("span", {
                                            staticClass: "code"
                                        },
                                        [t._v("0x5B7D8a53E63F1817B68d40DC997cB7394dB0ff1a")]), i("button", {
                                        staticClass: "copy",
                                        on: {
                                            click: function (s) {
                                                return t.copyCode(".copy", "0x5B7D8a53E63F1817B68d40DC997cB7394dB0ff1a")
                                            }
                                        }
                                    })])])])])]), t._m(2), i("div", {
                                staticClass: "swiper-slide"
                            },
                            [i("div", {
                                    staticClass: "body-2"
                                },
                                [i("div", {
                                    staticClass: "words"
                                }, [t._v("METAVERSE\nADVENTURE MODE")]), i("div", {
                                        staticClass: "game-video"
                                    },
                                    [i("div", {
                                            staticClass: "video-body-1",
                                        },
                                        [i("video", {
                                            staticClass: "video",
                                            attrs: {
                                                id: "body2-video1",
                                                src: "img/PVE_1.mp4",
                                                // controls: "controls",
                                                muted: "true",
                                                poster: a("097a")
                                            },
                                            on: {
                                                ended: t.videoPlayEnd,
                                                // play: t.playGameVideoStart
                                            }
                                        })]), i("div", {
                                            staticClass: "video-body-2",
                                        },
                                        [i("video", {
                                            staticClass: "video",
                                            attrs: {
                                                id: "body2-video2",
                                                src: "img/PVE_2.mp4",
                                                muted: "true",
                                                // controls: "controls",
                                                poster: a("097a")
                                            },
                                            on: {
                                                ended: t.videoPlayEnd,
                                                // play: t.playGameVideoStart
                                            }
                                        })])]), t._m(3), i("div", {
                                    staticClass: "label"
                                }, [t._v("CHALLENGING\nGAMEPLAY")])])]), i("div", {
                                staticClass: "swiper-slide"
                            },
                            [i("div", {
                                    staticClass: "body-3"
                                },
                                [i("div", {
                                    staticClass: "words"
                                }, [t._v("EARN CRYPTOCURRENCY\nREWARDS BY PLAYING")]), i("div", {
                                        staticClass: "game-video"
                                    },
                                    [
                                        i("div", {
                                                staticClass: "video-body-1",
                                            },
                                            [i("video", {
                                                staticClass: "video",
                                                attrs: {
                                                    id: "body3-video1",
                                                    src: "img/PVP_1.mp4",
                                                    muted: "true",
                                                    // controls: "controls",
                                                    poster: a("097a")
                                                },
                                                on: {
                                                    ended: t.videoPlayEnd,
                                                    // play: t.playGameVideoStart
                                                }
                                            })]), i("div", {
                                                staticClass: "video-body-2",
                                            },
                                            [i("video", {
                                                staticClass: "video",
                                                attrs: {
                                                    id: "body3-video2",
                                                    src: "img/PVP_2.mp4",
                                                    muted: "true",
                                                    // controls: "controls",
                                                    poster: a("097a")
                                                },
                                                on: {
                                                    ended: t.videoPlayEnd,
                                                    // play: t.playGameVideoStart
                                                }
                                            })])
                                    ]), t._m(4), i("div", {
                                    staticClass: "label"
                                }, [t._v("Sustainable\nplay\nto\nearn")])])]), t._m(5), t._m(6), i("div", {
                                staticClass: "swiper-slide"
                            },
                            [i("div", {
                                    staticClass: "body-6"
                                },
                                [i("div", {
                                        staticClass: "footer-1"
                                    },
                                    [i("div", {
                                        staticClass: "content-bg-header"
                                    }), i("div", {
                                            staticClass: "content-bg"
                                        },
                                        [t._m(7), t._m(8), i("div", {
                                                staticClass: "footer-eggs"
                                            },
                                            [i("a", {
                                                    attrs: {
                                                        href: "#"
                                                    },
                                                    on: {
                                                        click: t.swiperFooter1
                                                    }
                                                },
                                                [i("img", {
                                                    attrs: {
                                                        src: a("10b1")
                                                    }
                                                })]), i("a", {
                                                    attrs: {
                                                        href: "#"
                                                    },
                                                    on: {
                                                        click: t.swiperFooter1
                                                    }
                                                },
                                                [i("img", {
                                                    attrs: {
                                                        src: a("be45")
                                                    }
                                                })]), i("a", {
                                                    attrs: {
                                                        href: "#"
                                                    },
                                                    on: {
                                                        click: t.swiperFooter1
                                                    }
                                                },
                                                [i("img", {
                                                    attrs: {
                                                        src: a("ca1d")
                                                    }
                                                })]), i("a", {
                                                    attrs: {
                                                        href: "#"
                                                    },
                                                    on: {
                                                        click: t.swiperFooter1
                                                    }
                                                },
                                                [i("img", {
                                                    attrs: {
                                                        src: a("4097")
                                                    }
                                                })]), i("a", {
                                                    attrs: {
                                                        href: "#"
                                                    },
                                                    on: {
                                                        click: t.swiperFooter1
                                                    }
                                                },
                                                [i("img", {
                                                    attrs: {
                                                        src: a("4ffc")
                                                    }
                                                })])])])]), i("div", {
                                        staticClass: "footer-2"
                                    },
                                    [i("div", {
                                        staticClass: "content-bg-header"
                                    }), i("div", {
                                            staticClass: "content-bg"
                                        },
                                        [i("div", {
                                            staticClass: "footer-eggs"
                                        }, ), t._m(9), t._m(10)]
                                    )])])])]), i("div", {
                            staticClass: "bottom-play bottom-bg"
                        },
                        [i("div", {
                                staticClass: "div-btn"
                            },
                            [i("button", {
                                on: {
                                    click: t.watchPlay
                                }
                            }), i("img", {
                                attrs: {
                                    src: a("622f"),
                                    width: "5%"
                                }
                            })]), i("a", {
                            staticClass: "nfc-btn",
                            attrs: {
                                href: "https://market.cryptoids.world/purchase"
                            }
                        }, [t._v("BUY NFT"), i("b", {}, [t._v("CRYPEGGS")]), i("img", {
                            attrs: {
                                src: a("6230"),
                                width: "100%"
                            }
                        })])]), i("div", {
                            staticClass: "swiper-pagination"
                        },
                        [t._m(11), i("div", {
                                staticClass: "header-nav"
                            },
                            [t._m(12), i("div", {
                                    staticClass: "nav-text home"
                                },
                                [t._v("HOME")]), i("div", {
                                    staticClass: "nav-text"
                                },
                                [i("span", {
                                        staticClass: "have-child-before",
                                        on: {
                                            click: t.onNavClick
                                        }
                                    },
                                    [t._v("CRYPTOIDS ")]), i("div", {
                                        staticClass: "children"
                                    },
                                    [i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Story")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Breeding")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Battle")])])]), i("div", {
                                    staticClass: "nav-text"
                                },
                                [i("span", {
                                        staticClass: "have-child-before",
                                        on: {
                                            click: t.onNavClick
                                        }
                                    },
                                    [t._v("sP2E")]), i("div", {
                                        staticClass: "children"
                                    },
                                    [i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Tokenomics")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("NFT")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Guild")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Scholarship")])])]), i("div", {
                                    staticClass: "nav-text"
                                },
                                [i("span", {
                                        staticClass: "have-child-before",
                                        on: {
                                            click: t.onNavClick
                                        }
                                    },
                                    [t._v("GETTING STARTED")]), i("div", {
                                        staticClass: "children"
                                    },
                                    [i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Player")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Guild")])])]), i("div", {
                                    staticClass: "nav-text"
                                },
                                [i("span", {
                                        staticClass: "have-child-before",
                                        on: {
                                            click: t.onNavClick
                                        }
                                    },
                                    [t._v("MISC")]), i("div", {
                                        staticClass: "children"
                                    },
                                    [i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("FAQ")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Whitepaper")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Roadmap")])])]), t._m(13), t._m(14), i("div", {
                                    staticClass: "nav-closed"
                                },
                                [i("button", {
                                    on: {
                                        click: t.menuClick
                                    }
                                })])]), t._m(15), t._m(16), i("div", {
                                staticClass: "content-mobile-header-1"
                            },
                            [i("button", {
                                on: {
                                    click: t.menuClick
                                }
                            })])]), t._m(17), i("div", {
                            staticClass: "swiper-button-prev"
                        },
                        t._l(t.pointList, (function (s) {
                            return s.index > 0 && s.index < 6 ? i("div", {
                                key: s.id,
                                staticClass: "point",
                                attrs: {
                                    id: s.id
                                },
                                on: {
                                    click: function (a) {
                                        return t.pageSlide(s.index)
                                    }
                                }
                            }) : t._e()
                        })), 0)])])
            },
            b = [function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                            staticClass: "content-header",
                            attrs: {
                                id: "header"
                            }
                        },
                        [a("div", {
                            staticClass: "header-0"
                        }), a("div", {
                            staticClass: "header-1"
                        }), a("div", {
                            staticClass: "header-2"
                        }), a("div", {
                            staticClass: "header-3"
                        }), a("div", {
                            staticClass: "header-4"
                        }), a("div", {
                            staticClass: "header-5"
                        }), a("div", {
                            staticClass: "header-6"
                        })])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                            staticClass: "play-button"
                        },
                        [a("div", {
                                staticClass: "button-label"
                            },
                            [a("a", {
                                    staticClass: "text",
                                    attrs: {
                                        href: "https://cryptoids.gitbook.io/whitepaper/cryptoids/overview"
                                    }
                                },
                                [t._v("WHITERPAPER")]), a("div", {
                                    staticClass: "sp"
                                },
                                [t._v("/")]), a("a", {
                                    staticClass: "text",
                                    attrs: {
                                        href: "./tutorial.html"
                                    }
                                },
                                [t._v("TUTORIAL")])]), a("a", {
                                staticClass: "playnow-button",
                                attrs: {
                                    href: "https://game.cryptoids.world/infinity/?c=&p="
                                }
                            },
                            [a("p", {
                                    staticClass: "pp"
                                },
                                [t._v("PLAY NOW")])]
                        )])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "swiper-slide"
                        },
                        [i("div", {
                                staticClass: "body-1"
                            },
                            [i("div", {
                                staticClass: "words"
                            }, [t._v("BREED RARE AND\nUNIQUE CRYPTOIDS")]), i("div", {
                                    staticClass: "doll-bg"
                                },
                                [i("div", {
                                    staticClass: "doll-1",
                                }, [i("img", {
                                    attrs: {
                                        src: a("b5c0"),
                                    }
                                })]), i("div", {
                                    staticClass: "doll-2",
                                }, [i("img", {
                                    attrs: {
                                        src: a("e727"),
                                    }
                                })]), i("div", {
                                    staticClass: "doll-3",
                                }, [i("img", {
                                    attrs: {
                                        src: a("5914"),
                                    }
                                })])]), i("div", {
                                staticClass: "market-button-wrap"
                            }, [i("a", {
                                    staticClass: "market-button",
                                    attrs: {
                                        href: "javascript:void(0);",
                                        onclick: "alert('body 1 market place')"
                                    }
                                },
                                [i("p", {
                                        staticClass: "pp"
                                    },
                                    [t._v("MARKETPLACE")])])]), i("div", {
                                staticClass: "label"
                            }, [t._v("BREED\nYOUR\nNFT\nCollectibles")])])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("a", {
                            staticClass: "market-button",
                            attrs: {
                                href: "#",
                                onclick: "alert('body 2 market place')"
                            }
                        },
                        [a("p", {
                                staticClass: "pp"
                            },
                            [t._v("PLAY MORE")])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("a", {
                            staticClass: "market-button",
                            attrs: {
                                onclick: "alert('body 3 market place')"
                            }
                        },
                        [a("p", {
                                staticClass: "pp"
                            },
                            [t._v("EARN MORE")])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "swiper-slide"
                        },
                        [i("div", {
                                staticClass: "body-4"
                            },
                            [i("div", {
                                staticClass: "words"
                            }, [t._v("what are you\n waiting for?!")]), i("div", {
                                staticClass: "sub-words"
                            }, [t._v("Follow us now!")]), i("div", {
                                    staticClass: "content-bg"
                                },
                                [i("div", {
                                        staticClass: "icons"
                                    },
                                    [i("img", {
                                        staticClass: "icon-1",
                                        attrs: {
                                            src: a("02df")
                                        }
                                    }), i("img", {
                                        staticClass: "icon-2",
                                        attrs: {
                                            src: a("d6bd")
                                        }
                                    }), i("img", {
                                        staticClass: "icon-3",
                                        attrs: {
                                            src: a("b8ca")
                                        }
                                    }), i("img", {
                                        staticClass: "icon-4",
                                        attrs: {
                                            src: a("ca2c")
                                        }
                                    }), i("img", {
                                        staticClass: "icon-5",
                                        attrs: {
                                            src: a("e841")
                                        }
                                    }), i("img", {
                                        staticClass: "icon-6",
                                        attrs: {
                                            src: a("637e")
                                        }
                                    }), i("img", {
                                        staticClass: "icon-7",
                                        attrs: {
                                            src: a("dc76")
                                        }
                                    })]), i("div", {
                                        staticClass: "doll"
                                    },
                                    [i("img", {
                                        attrs: {
                                            src: a("f0d2")
                                        }
                                    })])])])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "swiper-slide"
                        },
                        [i("div", {
                                staticClass: "body-5"
                            },
                            [i("div", {
                                staticClass: "words"
                            }, [t._v("OUR\nPartners")]), i("div", {
                                    staticClass: "content-bg"
                                },
                                [i("div", {
                                    staticClass: "icon-container"
                                }, [i("img", {
                                    staticClass: "icon-bg",
                                    attrs: {
                                        src: "img/logo-group.png"
                                    }
                                })])]
                            )])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "content"
                        },
                        [i("div", {
                                staticClass: "left"
                            },
                            [i("div", {
                                    staticClass: "footer-nav"
                                },
                                [i("a", {
                                        staticStyle: {
                                            "font-weight": "bold"
                                        },
                                        attrs: {
                                            href: "#"
                                        }
                                    },
                                    [t._v("Cryptoids")]), i("div", {
                                        staticStyle: {
                                            "margin-top": "10px",
                                            "margin-bottom": "10px"
                                        }
                                    },
                                    [i("a", {
                                            staticStyle: {
                                                "font-weight": "400"
                                            },
                                            attrs: {
                                                href: "#"
                                            }
                                        },
                                        [t._v("Story")])]), i("div", {
                                        staticStyle: {
                                            "margin-bottom": "10px"
                                        }
                                    },
                                    [i("a", {
                                            staticStyle: {
                                                "font-weight": "400"
                                            },
                                            attrs: {
                                                href: "#"
                                            }
                                        },
                                        [t._v("Breeding")])])]), i("div", {
                                    staticClass: "footer-nav"
                                },
                                [i("a", {
                                        staticStyle: {
                                            "font-weight": "bold"
                                        },
                                        attrs: {
                                            href: "#"
                                        }
                                    },
                                    [t._v("sP2E")]), i("div", {
                                        staticStyle: {
                                            "margin-top": "10px",
                                            "margin-bottom": "10px"
                                        }
                                    },
                                    [i("a", {
                                            staticStyle: {
                                                "font-weight": "400"
                                            },
                                            attrs: {
                                                href: "#"
                                            }
                                        },
                                        [t._v("Tokenomic")])]), i("div", {
                                        staticStyle: {
                                            "margin-bottom": "10px"
                                        }
                                    },
                                    [i("a", {
                                            staticStyle: {
                                                "font-weight": "400"
                                            },
                                            attrs: {
                                                href: "#"
                                            }
                                        },
                                        [t._v("NFT")])])]), i("div", {
                                    staticClass: "footer-nav"
                                },
                                [i("a", {
                                        staticStyle: {
                                            "font-weight": "bold"
                                        },
                                        attrs: {
                                            href: "#"
                                        }
                                    },
                                    [t._v("Getting Started")]), i("div", {
                                        staticStyle: {
                                            "margin-top": "10px",
                                            "margin-bottom": "10px"
                                        }
                                    },
                                    [i("a", {
                                            staticStyle: {
                                                "font-weight": "400"
                                            },
                                            attrs: {
                                                href: "#"
                                            }
                                        },
                                        [t._v("Tutorial")])]), i("div", {
                                        staticStyle: {
                                            "margin-bottom": "10px"
                                        }
                                    },
                                    [i("a", {
                                            staticStyle: {
                                                "font-weight": "400"
                                            },
                                            attrs: {
                                                href: "#"
                                            }
                                        },
                                        [t._v("Guild")])])]), i("div", {
                                    staticClass: "footer-nav"
                                },
                                [i("a", {
                                        staticStyle: {
                                            "font-weight": "bold"
                                        },
                                        attrs: {
                                            href: "#"
                                        }
                                    },
                                    [t._v("MISC")]), i("div", {
                                        staticStyle: {
                                            "margin-top": "10px",
                                            "margin-bottom": "10px"
                                        }
                                    },
                                    [i("a", {
                                            staticStyle: {
                                                "font-weight": "400"
                                            },
                                            attrs: {
                                                href: "#"
                                            }
                                        },
                                        [t._v("FAQ")])]), i("div", {
                                        staticStyle: {
                                            "margin-bottom": "10px"
                                        }
                                    },
                                    [i("a", {
                                            staticStyle: {
                                                "font-weight": "400"
                                            },
                                            attrs: {
                                                href: "#"
                                            }
                                        },
                                        [t._v("Whitepaper")])]), i("div", {
                                        staticStyle: {
                                            "margin-bottom": "10px"
                                        }
                                    },
                                    [i("a", {
                                            staticStyle: {
                                                "font-weight": "400"
                                            },
                                            attrs: {
                                                href: "#"
                                            }
                                        },
                                        [t._v("Roadmap")])])]), i("div", {
                                    staticClass: "footer-nav"
                                },
                                [i("a", {
                                        staticStyle: {
                                            "font-weight": "bold"
                                        },
                                        attrs: {
                                            href: "#"
                                        }
                                    },
                                    [t._v("Play Now")]), i("div", {
                                        staticStyle: {
                                            "margin-top": "10px",
                                            "margin-bottom": "10px"
                                        }
                                    },
                                    [i("a", {
                                            staticStyle: {
                                                "font-weight": "400"
                                            },
                                            attrs: {
                                                href: "#"
                                            }
                                        },
                                        [t._v("Marketplace")])]), i("div", {
                                        staticStyle: {
                                            "margin-bottom": "10px"
                                        }
                                    },
                                    [i("a", {
                                            staticStyle: {
                                                "font-weight": "400"
                                            },
                                            attrs: {
                                                href: "#"
                                            }
                                        },
                                        [t._v("Buy CrypEggs")])])])]), i("div", {
                                staticClass: "right"
                            },
                            [i("div", {
                                    staticStyle: {
                                        color: "#fff",
                                        "margin-bottom": "28px"
                                    }
                                },
                                [t._v("Follow US")]), i("img", {
                                attrs: {
                                    src: a("5b59")
                                }
                            }), i("img", {
                                attrs: {
                                    src: a("f8c8")
                                }
                            }), i("img", {
                                attrs: {
                                    src: a("2835")
                                }
                            }), i("img", {
                                attrs: {
                                    src: a("56d8")
                                }
                            }), i("br", {}), i("img", {
                                attrs: {
                                    src: a("81f6")
                                }
                            }), i("img", {
                                attrs: {
                                    src: a("f3e8")
                                }
                            }), i("img", {
                                attrs: {
                                    src: a("6767")
                                }
                            })])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "footer-logo"
                        },
                        [i("img", {
                            attrs: {
                                src: a("fe07")
                            }
                        }), i("div", {
                                staticStyle: {
                                    "margin-top": "13px",
                                    "font-size": "16px",
                                    color: "whitesmoke"
                                }
                            },
                            [t._v("World of Crytoids @ 2022, All rights reserved. Terms & Conditions. Privacy Policy")])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "dolls"
                        },
                        [i("div", {
                                staticClass: "doll-body"
                            },
                            [i("a", {
                                    staticClass: "dolls-name",
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [i("b", [t._v("Yuki Y")]), i("div", [t._v("Creative Director")])]), i("div", {
                                    staticClass: "doll-pic"
                                },
                                [i("a", {
                                        attrs: {
                                            href: "#"
                                        }
                                    },
                                    [i("img", {
                                        attrs: {
                                            src: a("3d7a")
                                        }
                                    })])])]), i("div", {
                                staticClass: "doll-body"
                            },
                            [i("a", {
                                    staticClass: "dolls-name",
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [i("b", [t._v("Zeta L")]), i("div", [t._v("Marketing Lead")])]), i("div", {
                                    staticClass: "doll-pic"
                                },
                                [i("a", {
                                        attrs: {
                                            href: "#"
                                        }
                                    },
                                    [i("img", {
                                        attrs: {
                                            src: a("4779")
                                        }
                                    })])])]), i("div", {
                                staticClass: "doll-body"
                            },
                            [i("a", {
                                    staticClass: "dolls-name",
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [i("b", [t._v("TC Chan")]), i("div", [t._v("CEO")])]), i("div", {
                                    staticClass: "doll-pic"
                                },
                                [i("a", {
                                        attrs: {
                                            href: "#"
                                        }
                                    },
                                    [i("img", {
                                        attrs: {
                                            src: a("875d")
                                        }
                                    })])])]), i("div", {
                                staticClass: "doll-body"
                            },
                            [i("a", {
                                    staticClass: "dolls-name",
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [i("b", [t._v("Teemo B")]), i("div", [t._v("Game Economist")])]), i("div", {
                                    staticClass: "doll-pic"
                                },
                                [i("a", {
                                        attrs: {
                                            href: "#"
                                        }
                                    },
                                    [i("img", {
                                        attrs: {
                                            src: a("3248")
                                        }
                                    })])])]), i("div", {
                                staticClass: "doll-body"
                            },
                            [i("a", {
                                    staticClass: "dolls-name",
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [i("b", [t._v("MaFei Y")]), i("div", [t._v("Game Director")])]), i("div", {
                                    staticClass: "doll-pic"
                                },
                                [i("a", {
                                        attrs: {
                                            href: "#"
                                        }
                                    },
                                    [i("img", {
                                        attrs: {
                                            src: a("6710")
                                        }
                                    })])])])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "words"
                        },
                        [t._v("Hello!\nWE ARE CRYPTOIDIANS")])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("a", {
                            staticClass: "header-logo",
                            attrs: {
                                href: "/",
                            }
                        },
                        [i("img", {
                            attrs: {
                                src: a("0539")
                            }
                        })])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "nav-text logo-m"
                        },
                        [i("img", {
                            attrs: {
                                src: a("ab1d"),
                                height: "60px"
                            }
                        })])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                            staticClass: "nav-text"
                        },
                        [a("span", [t._v("MARKETPLACE")])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "nav-text logo-m",
                            staticStyle: {
                                "margin-top": "50px"
                            }
                        },
                        [i("img", {
                            staticStyle: {
                                "margin-right": "40px"
                            },
                            attrs: {
                                src: a("b401"),
                                width: "50px",
                                height: "50px"
                            }
                        }), i("img", {
                            attrs: {
                                src: a("ec02"),
                                width: "50px",
                                height: "50px"
                            }
                        })])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                            staticClass: "nav-container"
                        },
                        [a("nav", {
                                staticClass: "nav"
                            },
                            [a("ul", [a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("CRYPTOIDS")]), a("ul", [a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Story")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Breeding")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Battle")])])])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("GAME INFO")]), a("ul", [a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Tokenomics")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("NFT")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Guild")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Scholarship")])])])]), a("li", [a("a", [t._v("GETTING STARTED")]), a("ul", [a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Player")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Guild")])])])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("MISC")]), a("ul", [a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("FAQ")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Whitepaper")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Roadmap")])])])]), a("li", [a("a", [t._v("MARKETPLACE")])])])])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                            staticClass: "header-play-logo",
                            attrs: {
                                onclick: "alert('header play logo')"
                            }
                        },
                        [a("div", {
                                staticClass: "logo-p"
                            },
                            [t._v("P")]), a("div", {
                                staticClass: "logo-l"
                            },
                            [t._v("L")]), a("div", {
                                staticClass: "logo-a"
                            },
                            [t._v("A")]), a("div", {
                                staticClass: "logo-y"
                            },
                            [t._v("Y")])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "swiper-button-next"
                        },
                        [i("a", {
                                staticClass: "icon",
                                attrs: {
                                    href: "https://bit.ly/3IGaMWG"
                                }
                            },
                            [i("img", {
                                attrs: {
                                    src: a("ec3e")
                                }
                            })]), i("a", {
                                staticClass: "icon",
                                attrs: {
                                    href: "https://bit.ly/3GXxiJd"
                                }
                            },
                            [i("img", {
                                attrs: {
                                    src: a("dd43")
                                }
                            })])])
                }
            ],
            x = (a("7db0"), a("d81d"), a("b311")),
            A = a.n(x),
            y = (a("e851"), a("4da1")),
            w = (a("5f67"), a("e8bf"), "img/PVE_1.mp4"),
            _ = a.n(w),
            k = {
                name: "test",
                data: function () {
                    return {
                        mySwiper: null,
                        swiperActiveIndex: 0,
                        pointList: [{
                                index: 0,
                                color: "",
                                id: "home"
                            },
                            {
                                index: 1,
                                color: "#1DBCB5",
                                id: "nft"
                            },
                            {
                                index: 2,
                                color: "#3781E5",
                                id: "play"
                            },
                            {
                                index: 3,
                                color: "#CE344A",
                                id: "play2"
                            },
                            {
                                index: 4,
                                color: "#E86EA4",
                                id: "followUs"
                            },
                            {
                                index: 5,
                                color: "#9C69BC",
                                id: "partners"
                            },
                            {
                                index: 6,
                                color: "",
                                id: "footer"
                            },
                            {
                                index: 7,
                                color: "#D3D3D3",
                                id: "bottom"
                            }
                        ]
                    }
                },
                components: {
                    Swiper: y["b"]
                },
                mounted: function () {
                    $(".body-0").append(
                        "<div class='img-con'><img src='./img/cryptoid-1.png' class='img-1' /><img src='./img/cryptoid-2.png' class='img-2' /><img src='./img/grasses.png' class='img-3' /><img src='./img/grasses.png' class='img-4' /><div class='img-box'><img src='./img/Logo_S2.png' class='img-5' /><img src='./img/sub_logo.png' class='img-6' /></div></div>"
                    );
                    $(".body-0 .play-button").append("<a href='javascript:;' class='play-online'><img src='./img/new_icon.png' /></a>");
                    $(".header-play-logo").append("<ul class='online-ul'><li><a class='online-btn' href='https://game.cryptoids.world/infinity/?c=&p='>Play online</a></li><li><a href='javascript:;'><img src='./img/online-2.png'/></a></li><li><a href='javascript:;'><img src='./img/online-3.png'/></a></li></ul>")

                    $(".header-play-logo").hover(function () {
                        $(".online-ul").show();
                    }, function () {
                        $(".online-ul").hide();
                    });
                    // 修改二级页面跳转地址
                    $(".nav a").each(function(){
                       var _name = $(this).text();
                       if(_name === 'Player') {
                           _name = "Player"
                       }
                       if(_name === 'Guild') {
                        _name = "WeGuild"
                    }
                       $(this).addClass(`${_name}`);
                    })

                    var videos = document.querySelectorAll("video");
                    for (let i = 0; i < videos.length; i += 1) {
                      videos[i].oncanplaythrough = function () {
                        videos[i].muted = true;
                      };
                    }
                   $(".Story").attr("href", "./story.html#0");
                   $(".Breeding").attr("href", "./story.html#2");
                   $(".Battle").attr("href", "./story.html#3");
                   $(".Tokenomics").attr("href", ".sP2E.html#0");
                   $(".NFT").attr("href", ".sP2E.html#0");
                   $(".Guild").attr("href", ".sP2E.html#0");
                   $(".Scholarship").attr("href", ".sP2E.html#0");
                   $(".Player").attr("href", "./player.html");
                   $(".WeGuild").attr("href", "./Guild.html");
                   $(".FAQ").attr("href", "./FAQ.html");
                   $(".Whitepaper").attr("href", "https://cryptoids.gitbook.io/whitepaper/cryptoids/overview");
                   $(".Roadmap").attr("href", "./Roadmap.html");
                   $(".MARKETPLACE").attr("href", "https://market.cryptoids.world/");
                   var _activeIndex = 0
                   $(".Tokenomics").click(function(){
                    _activeIndex = 1
                   })
                   $(".NFT").click(function(){
                    _activeIndex = 2
                   })
                   $(".Guild").click(function(){
                    _activeIndex = 3
                   })
                   $(".Scholarship").click(function(){
                    _activeIndex = 3
                   })

                   $(".header-logo img").click(function(){
                       window.location.href="./index.html"
                   })
                    var t = this,
                        s = this;
                    $(".nav li").hover((function () {
                            $(this).find("ul").show()
                        }), (function () {
                            $(this).find("ul").hide()
                        })),
                        this.mySwiper = new y["b"]("#contents", {
                            direction: "vertical",
                            mousewheel: !0,
                            autoHeight: !0,
                            height: window.innerHeight,
                            pagination: {
                                el: ".swiper-pagination",
                                clickable: !0
                            },
                            navigation: {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            }
                        }),
                        this.mySwiper.on("slideChange", (function (a) {
                            s.swiperActiveIndex = a.activeIndex;
                            for (var i = $("#header").children(), e = "header-" + a.activeIndex, o = 0; o < i.length; o++) {
                                var n = i[o],
                                    c = $(n).attr("class");
                                c === e ? $(n).show() : $(n).hide()
                            }
                            var r = "content-header-" + a.activeIndex,
                                l = "content-header-0";
                            a.activeIndex;
                            $(".words").removeClass("animate__fadeIn");
                            // if ($("#body2-video1")[0].currentTime > 0) {
                            //     $("#body2-video1")[0].load();
                            // }
                            // if ($("#body2-video2")[0].currentTime > 0) {
                            //     $("#body2-video2")[0].load();
                            // }
                            // if ($("#body3-video1")[0].currentTime > 0) {
                            //     $("#body3-video1")[0].load();
                            // }
                            // if ($("#body3-video2")[0].currentTime > 0) {
                            //     $("#body3-video2")[0].load();
                            // }
                            $(".pic-1").removeClass('animate__zoomInLeft');
                            $('.game-video img').css("opacity", "0");
                            $(".pic-2").removeClass('animate__zoomInRight');
                            $(".pic-3").removeClass('animate__zoomInUp');
                            $(".doll img").removeClass('animate__jello');
                            $(".body-5 .words").removeClass("animate__fadeIn");
                            if (A.activeIndex !== 6) {
                                $("#header").css({
                                    "height": "",
                                    "transition": "all 1s,height 0.5s ease"
                                });
                            }

                            switch (a.activeIndex) {
                                case 0:
                                    $(".doll").removeClass("translate"),
                                        $(".swiper-button-next").show(),
                                        $(".bottom-play").addClass("bottom-bg");
                                    break;
                                case 1:
                                    $(".doll").removeClass("translate"),
                                        $(".swiper-button-next").show(),
                                        $("." + d).find(".label").addClass("translate"),
                                        $("." + v).find(".label").removeClass("translate"),
                                        l = "content-header-" + (a.activeIndex - 1),
                                        $(".bottom-play").removeClass("bottom-bg");
                                    $(".body-1 .words").addClass("animate__fadeIn");
                                    break;
                                case 2:
                                    $(".doll").removeClass("translate"),
                                        $(".swiper-button-next").show(),
                                        $("." + d).find(".label").addClass("translate"),
                                        $("." + v).find(".label").removeClass("translate");
                                    l = "content-header-" + (a.activeIndex - 1);
                                    $(".bottom-play").removeClass("bottom-bg");
                                    $(".body-2 .words").addClass("animate__fadeIn");
                                    setTimeout(function () {
                                        if ($("#header").hasClass("content-header-2")) {
                                            $("#body2-video1").trigger("play");
                                            $("#body2-video2").trigger("play");
                                        }
                                    }, 1000);
                                    break;
                                case 3:
                                    $(".doll").removeClass("translate"),
                                        $(".swiper-button-next").show(),
                                        $("." + d).find(".label").addClass("translate"),
                                        $("." + v).find(".label").removeClass("translate"),
                                        l = "content-header-" + (a.activeIndex - 1),
                                        $(".bottom-play").removeClass("bottom-bg");
                                    $(".body-3 .words").addClass("animate__fadeIn");
                                    setTimeout(function () {
                                        if ($("#header").hasClass("content-header-3")) {
                                            $("#body3-video1").trigger("play");
                                            $("#body3-video2").trigger("play");
                                        }
                                    }, 1000);
                                    $(".pic-1").addClass('animate__zoomInLeft');
                                    $(".pic-2").addClass('animate__zoomInRight');
                                    $(".pic-3").addClass('animate__zoomInUp');
                                    setTimeout(function () {
                                        $(".game-video img").css("opacity", "1");
                                    }, 2000);
                                    break;
                                case 4:
                                    $(".doll").removeClass("translate"),
                                        $(".swiper-button-next").show(),
                                        $("." + d).find(".label").addClass("translate"),
                                        $("." + v).find(".label").removeClass("translate"),
                                        l = "content-header-" + (a.activeIndex - 1),
                                        $(".bottom-play").removeClass("bottom-bg");
                                    $(".body-4 .words").addClass("animate__fadeIn");
                                    $(".doll img").addClass('animate__jello');
                                    break;
                                case 5:
                                    $(".doll").addClass("translate"),
                                        $(".swiper-button-next").show(),
                                        $("." + d).find(".label").addClass("translate"),
                                        $("." + v).find(".label").removeClass("translate"),
                                        l = "content-header-" + (a.activeIndex - 1),
                                        $(".bottom-play").removeClass("bottom-bg"),
                                        $(".footer-1").css({
                                            transform: "translateY(0%)",
                                            transition: "all 500ms ease"
                                        }),
                                        $(".footer-2").css({
                                            transform: "translateY(100%)",
                                            transition: "all 500ms ease"
                                        });
                                    $(".body-5 .words").addClass("animate__fadeIn");
                                    break;
                                case 6:
                                    $(".doll").removeClass("translate"),
                                        $(".swiper-button-next").hide();
                                    var d = "body-" + (a.activeIndex - 1),
                                        v = "body-" + a.activeIndex;
                                    $("." + d).find(".label").addClass("translate"),
                                        $("." + v).find(".label").removeClass("translate"),
                                        l = "content-header-" + (a.activeIndex - 1),
                                        $(".bottom-play").removeClass("bottom-bg"),
                                        $("#footer-1").css({
                                            transform: "translateY(0%)"
                                        });
                                    break
                            }
                            $(`.header-${a.activeIndex}`).addClass('animate__zoomIn'),
                                $(`.header-${a.activeIndex}`).show()
                            $("#header").removeClass(l),
                                $("#header").addClass(r),
                                t.pagePointListener(a.activeIndex)
                        }))
                },
                methods: {
                    menuClick: function (t) {
                        $(".header-nav").toggleClass("full")
                    },
                    pageSlide: function (t) {
                        this.mySwiper.slideTo(t)
                    },
                    pagePointListener: function (t) {
                        this.pointList.map((function (s) {
                            t > 0 && t < 6 ? s.index === t && ($(".point").show(), $(".point").css("background", "#d0d0d0"), $(".point").css("borderColor", "#d0d0d0"), $("#" + s.id).css("background", s.color), $("#" + s.id).css("borderColor", s.color)) : $(".point").hide()
                        }))
                    },
                    onNavClick: function (t) {
                        for (var s = $(t.target).siblings().first().attr("class"), a = $(t.target).attr("class"), i = $(t.target).parent().siblings(), e = 0; e < i.length; e++) $(i[e]).children().first().attr("class") && $(i[e]).children().first().attr("class", "have-child-before");
                        "have-child-before" === a ? $(t.target).attr("class", "have-child-after") : $(t.target).attr("class", "have-child-before"),
                            "children" === s ? ($(".children").removeClass("active"), $(t.target).siblings().first().addClass("active")) : $(".children").removeClass("active")
                    },
                    navTextChildClick: function (t) {
                        $(".children").removeClass("active"),
                            alert($(t.target).html())
                    },
                    watchPlay: function () {
                        this.$popup({
                            video: _.a
                        })
                    },
                    playGameVideoStart: function (t) {
                        var s = $(t.target).parent().siblings(),
                            a = $(s[0]).children("video").attr("id");
                        $("#" + a).trigger("play");
                    },
                    videoPlayEnd: function (t) {
                        // this.playGameVideoStart(t);
                        $(t.target).pause().currentTime(0)
                    },
                    swiperFooter1: function (e) {
                        if ($("#contents").hasClass("with-footer-2")) {
                            this.swiperFooter2();
                            return;
                        }
                        this.mySwiper.disable();
                        $("#contents").removeClass("with-footer-1");
                        $("#contents").addClass("with-footer-2");
                        $(".footer-1").css({
                                transform: "translateY(-100vh)",
                                transition: "all 500ms ease"
                            }),
                            $(".footer-1 .footer-eggs").css("bottom", "-12.60417vw")
                        $(".footer-2").css({
                                transform: "translateY(0%)",
                                transition: "all 500ms ease"
                            }),
                            $("#header").css({
                                "height": "0",
                                "transition": "all 1s,height 0.5s ease"
                            });
                    },
                    swiperFooter2: function (e) {
                        if ($("#contents").hasClass("with-footer-1")) {
                            this.swiperFooter1();
                            return;
                        }
                        this.mySwiper.enable();
                        $("#contents").removeClass("with-footer-2")
                        $("#contents").addClass("with-footer-1")
                        $(".footer-1").css({
                                transform: "translateY(0%)",
                                transition: "all 500ms ease"
                            }),
                            $(".footer-1 .footer-eggs").css("bottom", "")
                        $(".footer-2").css({
                                transform: "translateY(100vh)",
                                transition: "all 500ms ease"
                            }),
                            $("#header").css({
                                "height": "",
                                "transition": "all 1s,height 0.5s ease"
                            });
                    },
                    copyCode: function (t, s) {
                        var a = new A.a(t, {
                            text: function () {
                                return s
                            }
                        });
                        a.on("success", (function (t) {
                                    a.destroy()
                            })),
                            a.on("error", (function (t) {
                                a.destroy()
                            }))
                    }
                }
            },
            E = k,
            T = Object(v["a"])(E, u, b, !1, null, "49110692", null),
            S = T.exports,
            P = [{
                path: "/home",
                name: "home1",
                component: function () {
                    return Promise.resolve().then(a.bind(null, "bb51"))
                }
            }];
        i["a"].use(g["a"]);
        var I = new g["a"]({
                routes: [].concat(Object(C["a"])(-1 !== ["production", "test"].indexOf("production") ? [] : P), [{
                        path: "/",
                        name: "test",
                        component: S
                    },
                    {
                        path: "/home",
                        name: "home",
                        component: h["default"]
                    }
                ])
            }),
            G = I,
            L = a("1157"),
            N = a.n(L),
            B = function () {
                var t = this,
                    s = t.$createElement,
                    i = t._self._c || s;
                return i("transition-group", {
                        attrs: {
                            name: "fade"
                        }
                    },
                    [t.show ? i("div", {
                        key: "1",
                        staticClass: "mask",
                        on: {
                            click: function (s) {
                                t.show = !1
                            },
                            touchmove: function (t) {
                                t.preventDefault()
                            }
                        }
                    }) : t._e(), i("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.show,
                                expression: "show"
                            }],
                            key: "2",
                            staticClass: "pop",
                        },
                        [i("div", {
                                staticClass: "content"
                            },
                            [i("img", {
                                staticClass: "close",
                                attrs: {
                                    src: a("fde5"),
                                    alt: ""
                                },
                                on: {
                                    click: function (s) {
                                        t.show = !1
                                    }
                                }
                            }), i("video", {
                                    staticStyle: {
                                        width: "100%",
                                        height: "100%",
                                        "object-fit": "cover"
                                    },
                                    attrs: {
                                        autoplay: true,
                                        muted: "true",
                                        poster: a("0fcb"),
                                        controls: "controls",
                                        id: "popVideo"
                                    }
                                },
                                [i("source", {
                                    attrs: {
                                        src: "img/PVE_1.mp4",
                                        type: "video/mp4"
                                    }
                                })])])])])
            },
            R = [],
            O = {
                name: "Popup",
                data: function () {
                    return {
                        show: !1,
                        video: ""
                    }
                },
                methods: {
                    btnClick: function () {
                        this.click(),
                            this.show = !1
                    }
                }
            },
            Y = O,
            V = (a("0835"), Object(v["a"])(Y, B, R, !1, null, "40e07a69", null)),
            D = V.exports,
            F = i["a"].extend(D);
        D.install = function (t) {
            var s = new F({
                data: t
            }).$mount();
            document.body.appendChild(s.$el),
                i["a"].nextTick((function () {
                    s.show = !0
                }))
        };
        var Q = D;
        i["a"].prototype.$popup = Q.install,
            window.$ = N.a,
            window.jQuery = N.a,
            e["a"]({
                Vue: i["a"],
                integrations: [new n["a"].BrowserTracing({
                    routingInstrumentation: o["a"](G),
                    tracingOrigins: ["localhost", /^\//]
                })],
                debug: !1,
                tracesSampleRate: 1,
                release: "v1.0.0",
                environment: window.document.domain,
                ignoreErrors: ["Non-Error exception captured", "Non-Error promise rejection captured"]
            });
        var K = new i["a"]({
            router: G,
            render: function (t) {
                return t(m)
            }
        });
        K.$mount("#app")
    },
    "56d8": function (t, s, a) {
        t.exports = a.p + "img/footer-icon-4.d107df88.png"
    },
    5914: function (t, s, a) {
        t.exports = a.p + "img/nft_mobile_dw_3.a198251c.png"
    },
    "593d": function (t, s, a) {
        t.exports = a.p + "img/partners_pic-2-logo.ed028352.png"
    },
    "5b59": function (t, s, a) {
        t.exports = a.p + "img/footer--icon-1.bec8d0c3.png"
    },
    "5eed": function (t, s, a) {
        t.exports = a.p + "img/dance.22c4e8fa.mp4"
    },
    "622f": function (t, s, a) {
        t.exports = a.p + "img/home-bottom-button-1.e99af1d6.png"
    },
    "6230": function (t, s, a) {
        t.exports = a.p + "img/egg.png"
    },
    "637e": function (t, s, a) {
        t.exports = a.p + "img/follow-us-icon-6.799421f8.png"
    },
    6710: function (t, s, a) {
        t.exports = a.p + "img/team-dw-5.ada0a658.png"
    },
    6767: function (t, s, a) {
        t.exports = a.p + "img/footer-icon-7.fde3a7bb.png"
    },
    "6fbc": function (t, s, a) {
        t.exports = a.p + "img/partners_pic-2.e7a8a333.png"
    },
    "7c47": function (t, s, a) {
        t.exports = a.p + "img/game-play2-m-2.d2f53e50.png"
    },
    "81f6": function (t, s, a) {
        t.exports = a.p + "img/footer-icon-5.254404aa.png"
    },
    "85ec": function (t, s, a) {},
    "875d": function (t, s, a) {
        t.exports = a.p + "img/team-dw-3.5a3b0282.png"
    },
    "8f9c": function (t, s, a) {
        t.exports = a.p + "img/partners_pic-1.ec946600.png"
    },
    9351: function (t, s, a) {
        t.exports = a.p + "img/partners_center-bg.c6f2cd6c.png"
    },
    9860: function (t, s, a) {
        t.exports = a.p + "img/partners_pic-6.401b9cb2.png"
    },
    "9b5d": function (t, s, a) {
        t.exports = a.p + "img/nft-bg-center-4.11cdc571.png"
    },
    "9ba0": function (t, s, a) {
        t.exports = a.p + "img/partners_top-words.8af92637.png"
    },
    a291: function (t, s, a) {},
    a740: function (t, s, a) {
        t.exports = a.p + "img/partners_pic-3-logo.79cfa533.png"
    },
    ab1d: function (t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAqCAYAAACJKcSjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAABcRAAAXEQHKJvM/AAAEhUlEQVR42u2b0XHjOAyG/9tJAboKztcA6Q5OqWB1z3ywUkHsCpJUYKeCdR70vEoFqw5iqYHVVnC6Cu4eBGccrQBRlGTZK30znowNECYNggRI5TeMjNLmkZNlafRob2mmys3YHQDwIMgex+7cNfNp7A7MDMfs3F+Y2bm/MJew504CpU0IYCGo7LM0ylvaDAAsOfns3PORA/giyP8AcGdrTGnjkT2PUdnNy/KZyNIoAZAIKqHSZtHC5Bq8YwsAT7Nzz8tTg/zBxghF7b2g8pylUTEvywxKmyXqI6PI0ujgYjNLo0RpkwDwGZVQafNksfeuIUftDpj33FpoeXwT5L9naVQ4mr8D8F2QP0DYey2idnPs202loX/y1mca58dX2+zuimhaHtdwPD3L0ihX2uwBhIxKU/SuwUdtnqXR/vjmRmmzpS/iGrAobQqUScLrqdFrhqI2bFC7V9rsOkTvBkAA/jevjV6LqP3Q5hPKOsmDGx518ovS5h+lzdrRziVhk9R4KCPICZoUz4JKSHt+lS14XyWUkb/TZ7bsAdgqbd5ohl0d1O/AUn3V5bvoxisXVLaVvi0hryg/RfoQpdASwLcrdfAa9qvYgk6duiAdWvh0AnVkK+jW7tFD1blLdFi2RuR+YP0P0DIaCypb4P2Y0Wd0clDpU6XJuTsAtyevv1EW4jHKekoc+DVFL0VhXX8LlAlQHctKheHCBvxvuaCEV4raDZfYNdW5r9VNGjTTTs42A6ath3K2xR0Hfy64KIwB7FEmWh7TLnH9UiqNnsEncmuheZKlUcwJnZdlmi13kJOCpav9c0LRx/X1hcYaM/Kg5ZnwT1gkV3UUaLho6LTnNgwaAHQX+2eEy3zzk5VLKl067b2E9Y3QsT9Nh0h9JFT/CjKvB/uDQttLyIjfHUrnyQdGj2tvDU2ivaX6webhwflWSHbMvvKei16vh7IIkJOrql4jfTj3L0F26MH+0LCJVE0WGoP/8TsdagAf8hiJXU2SW0sn59Js9QWVtOuAh4QSqQUjfql+0JBj+MyRYSso+z0IKk13wu+0vvKjzNBHOVP9BvWky0CVNv85NHtq8TC7lEjFjOwV/FK+Qj+rVcEJ2lxWNDn3m9LGtYOtH/g6Jw2JVMy1y9IoVtrkqI/4EJb74TkYKqEq0GL5GIlQkL00tI2Zz/tKrHphiCcxCgC3lxy1hFSbvnVYsVawL2kGpe/ITVA69jD2wCQo8VkMZN7vemLVF31FbozyxCRxaOvSRiK30OnjREkixAX8E1tb5yb0t0BZ5hxQHl4Xrh3I0uh2hHEHA9tf4Qqce+sYjReLcLXXJwuljT/2bzfFR1s/C7I9gB8tbS0Z2Qr9bzmtmJRzLZ6R2rTZYpQ2BwBfGXGA9jc9vTK1i4NQkO3b5g50isW16VLzHlBGfd3LmklFLuTD/VdHmzH4SfMZDjVvlka9nHJNJnKp9lwy4kJ6XKUBaVIEYz5HNhnnQq5tY1ejNClyQSUca8BTcm4gyFyX5COJIOt8z+vKZPbcLI3+HND2HUbOjOuYUuROjv8Bcs56S+C+zAAAAAAASUVORK5CYII="
    },
    b049: function (t, s, a) {
        t.exports = a.p + "img/partners_pic-4-log.5a33014b.png"
    },
    b401: function (t, s, a) {
        t.exports = a.p + "img/Follow-us-10.f4d67a64.png"
    },
    b5c0: function (t, s, a) {
        t.exports = a.p + "img/nft_mobile_dw_1.f9d28cf4.png"
    },
    b8ca: function (t, s, a) {
        t.exports = a.p + "img/follow-us-icon-3.b059dda6.png"
    },
    bb51: function (t, s, a) {
        "use strict";
        a.r(s);
        var i = function () {
                var t = this,
                    s = t.$createElement,
                    i = t._self._c || s;
                return i("div", [i("div", {
                        staticClass: "home-wrap"
                    },
                    [i("div", {
                            staticClass: "swiper-wrapper"
                        },
                        [i("div", {
                                staticClass: "swiper-slide"
                            },
                            [i("div", {
                                    staticClass: "content-wrap"
                                },
                                [i("div", {
                                        staticClass: "content-body-1"
                                    },
                                    [i("div", {
                                        staticClass: "content-logo"
                                    }), i("div", {
                                            staticClass: "home-bottom"
                                        },
                                        [i("button", {
                                            staticClass: "bottom-button",
                                            on: {
                                                click: t.headerPlayClick
                                            }
                                        }), i("div", {
                                            staticClass: "bottom-button-label"
                                        })]), t._m(0)])])]), i("div", {
                                staticClass: "swiper-slide"
                            },
                            [i("div", {
                                    staticClass: "content-wrap"
                                },
                                [i("div", {
                                        staticClass: "content-body-2"
                                    },
                                    [i("div", {
                                            staticClass: "market-place"
                                        },
                                        [i("a", {
                                            staticClass: "market-button-mobile",
                                            on: {
                                                click: t.marketPlaceBtnClick
                                            }
                                        }), t._m(1), i("div", {
                                            staticClass: "words"
                                        })]), i("div", {
                                            staticClass: "play-bottom"
                                        },
                                        [i("button", {
                                            staticClass: "bottom-button",
                                            on: {
                                                click: t.headerPlayClick
                                            }
                                        }), i("div", {
                                            staticClass: "bottom-button-label"
                                        })]), t._m(2)])])]), i("div", {
                                staticClass: "swiper-slide"
                            },
                            [i("div", {
                                    staticClass: "content-wrap"
                                },
                                [i("div", {
                                        staticClass: "content-body-3"
                                    },
                                    [i("div", {
                                            staticClass: "video-modal"
                                        },
                                        [i("div", {
                                                staticClass: "video-body-1",
                                            },
                                            [i("video", {
                                                staticClass: "game-video",
                                                attrs: {
                                                    id: "body3-video1",
                                                    muted: "true",
                                                    src: a("5eed"),
                                                    controls: "controls",
                                                    poster: a("097a")
                                                },
                                                on: {
                                                    ended: t.videoPlayEnd,
                                                    canplay: "this.muted=true"
                                                    // play: t.playGameVideoStart
                                                }
                                            })]), i("div", {
                                                staticClass: "video-body-2",
                                            },
                                            [i("video", {
                                                staticClass: "game-video",
                                                attrs: {
                                                    id: "body3-video2",
                                                    src: a("5eed"),
                                                    muted: "true",
                                                    controls: "controls",
                                                    poster: a("097a")
                                                },
                                                on: {
                                                    ended: t.videoPlayEnd,
                                                    // play: t.playGameVideoStart
                                                }
                                            })])]), i("div", {
                                            staticClass: "market-place"
                                        },
                                        [i("a", {
                                            staticClass: "market-button-mobile",
                                            on: {
                                                click: t.marketPlaceBtnClick
                                            }
                                        }), t._m(3), i("div", {
                                            staticClass: "words"
                                        })]), t._m(4)])])]), i("div", {
                                staticClass: "swiper-slide"
                            },
                            [i("div", {
                                    staticClass: "content-wrap"
                                },
                                [i("div", {
                                        staticClass: "content-body-4"
                                    },
                                    [t._m(5), t._m(6), t._m(7), i("div", {
                                            staticClass: "video-modal"
                                        },
                                        [i("div", {
                                                staticClass: "video-body-1",
                                            },
                                            [i("video", {
                                                staticClass: "game-video",
                                                attrs: {
                                                    id: "body4-video1",
                                                    muted: "true",
                                                    src: a("5eed"),
                                                    controls: "controls",
                                                    poster: a("097a")
                                                },
                                                on: {
                                                    ended: t.videoPlayEnd,
                                                    // play: t.playGameVideoStart
                                                }
                                            })]), i("div", {
                                                staticClass: "video-body-2",
                                            },
                                            [i("video", {
                                                staticClass: "game-video",
                                                attrs: {
                                                    id: "body4-video2",
                                                    muted: "true",
                                                    src: a("5eed"),
                                                    controls: "controls",
                                                    poster: a("097a")
                                                },
                                                on: {
                                                    ended: t.videoPlayEnd,
                                                    // play: t.playGameVideoStart
                                                }
                                            })])]), i("div", {
                                            staticClass: "market-place"
                                        },
                                        [i("a", {
                                            staticClass: "market-button-mobile",
                                            on: {
                                                click: t.marketPlaceBtnClick
                                            }
                                        }), t._m(8), i("div", {
                                            staticClass: "words"
                                        })]), t._m(9)])])]), t._m(10), t._m(11), i("div", {
                                staticClass: "swiper-slide"
                            },
                            [i("div", {
                                    staticClass: "content-wrap"
                                },
                                [i("div", {
                                        staticClass: "content-body-7"
                                    },
                                    [t._m(12), t._m(13), i("div", {
                                        staticClass: "footer-bottom-mask"
                                    }), i("div", {
                                            staticClass: "footer-eggs"
                                        },
                                        [i("a", {
                                                attrs: {
                                                    href: "#"
                                                },
                                                on: {
                                                    click: function (s) {
                                                        return t.swiperGoto()
                                                    }
                                                }
                                            },
                                            [i("img", {
                                                attrs: {
                                                    src: a("10b1")
                                                }
                                            })]), i("a", {
                                                attrs: {
                                                    href: "#"
                                                },
                                                on: {
                                                    click: function (s) {
                                                        return t.swiperGoto()
                                                    }
                                                }
                                            },
                                            [i("img", {
                                                attrs: {
                                                    src: a("be45")
                                                }
                                            })]), i("a", {
                                                attrs: {
                                                    href: "#"
                                                },
                                                on: {
                                                    click: function (s) {
                                                        return t.swiperGoto()
                                                    }
                                                }
                                            },
                                            [i("img", {
                                                attrs: {
                                                    src: a("ca1d")
                                                }
                                            })]), i("a", {
                                                attrs: {
                                                    href: "#"
                                                },
                                                on: {
                                                    click: function (s) {
                                                        return t.swiperGoto()
                                                    }
                                                }
                                            },
                                            [i("img", {
                                                attrs: {
                                                    src: a("4097")
                                                }
                                            })]), i("a", {
                                                attrs: {
                                                    href: "#"
                                                },
                                                on: {
                                                    click: function (s) {
                                                        return t.swiperGoto()
                                                    }
                                                }
                                            },
                                            [i("img", {
                                                attrs: {
                                                    src: a("4ffc")
                                                }
                                            })])]), i("div", {
                                            staticClass: "eggs-content-body"
                                        },
                                        [i("div", {
                                            staticClass: "bottom-bg-head"
                                        }), i("div", {
                                                staticClass: "bottom-body-content"
                                            },
                                            [t._m(14), i("div", {
                                                    staticClass: "bottom-image-slider"
                                                },
                                                [i("div", {
                                                        staticClass: "swiper-wrapper"
                                                    },
                                                    t._l(t.teamImageList, (function (s) {
                                                        return i("div", {
                                                                key: s.id,
                                                                staticClass: "swiper-slide"
                                                            },
                                                            [i("div", {
                                                                    staticStyle: {
                                                                        "margin-bottom": "15px",
                                                                        color: "whitesmoke"
                                                                    }
                                                                },
                                                                [i("div", [t._v(t._s(s.name[0]))]), i("div", [t._v(t._s(s.name[1]))])]), i("div", [i("img", {
                                                                attrs: {
                                                                    src: s.path
                                                                }
                                                            })])])
                                                    })), 0), i("div", {
                                                        staticClass: "team-point-area"
                                                    },
                                                    t._l(t.teamImageList, (function (t) {
                                                        return i("div", {
                                                            key: t.id,
                                                            staticClass: "team-point",
                                                            attrs: {
                                                                id: t.id
                                                            }
                                                        })
                                                    })), 0)])]), i("div", {
                                                staticClass: "footer-eggs-2"
                                            },
                                            [i("a", {
                                                    attrs: {
                                                        href: "#"
                                                    },
                                                    on: {
                                                        click: function (s) {
                                                            return t.swiperGoto()
                                                        }
                                                    }
                                                },
                                                [i("img", {
                                                    attrs: {
                                                        src: a("10b1")
                                                    }
                                                })]), i("a", {
                                                    attrs: {
                                                        href: "#"
                                                    },
                                                    on: {
                                                        click: function (s) {
                                                            return t.swiperGoto()
                                                        }
                                                    }
                                                },
                                                [i("img", {
                                                    attrs: {
                                                        src: a("be45")
                                                    }
                                                })]), i("a", {
                                                    attrs: {
                                                        href: "#"
                                                    },
                                                    on: {
                                                        click: function (s) {
                                                            return t.swiperGoto()
                                                        }
                                                    }
                                                },
                                                [i("img", {
                                                    attrs: {
                                                        src: a("ca1d")
                                                    }
                                                })]), i("a", {
                                                    attrs: {
                                                        href: "#"
                                                    },
                                                    on: {
                                                        click: function (s) {
                                                            return t.swiperGoto()
                                                        }
                                                    }
                                                },
                                                [i("img", {
                                                    attrs: {
                                                        src: a("4097")
                                                    }
                                                })]), i("a", {
                                                    attrs: {
                                                        href: "#"
                                                    },
                                                    on: {
                                                        click: function (s) {
                                                            return t.swiperGoto()
                                                        }
                                                    }
                                                },
                                                [i("img", {
                                                    attrs: {
                                                        src: a("4ffc")
                                                    }
                                                })])])])])])])]), i("div", {
                            staticClass: "swiper-pagination"
                        },
                        [t._m(15), i("div", {
                                staticClass: "header-nav"
                            },
                            [t._m(16), i("div", {
                                    staticClass: "nav-text home"
                                },
                                [t._v("HOME")]), i("div", {
                                    staticClass: "nav-text"
                                },
                                [i("span", {
                                        staticClass: "have-child-before",
                                        on: {
                                            click: t.onNavClick
                                        }
                                    },
                                    [t._v("CRYPTOIDS ")]), i("div", {
                                        staticClass: "children"
                                    },
                                    [i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Story")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Breeding")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Battle")])])]), i("div", {
                                    staticClass: "nav-text"
                                },
                                [i("span", {
                                        staticClass: "have-child-before",
                                        on: {
                                            click: t.onNavClick
                                        }
                                    },
                                    [t._v("sP2E")]), i("div", {
                                        staticClass: "children"
                                    },
                                    [i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Tokenomics")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("NFT")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Guild")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Scholarship")])])]), i("div", {
                                    staticClass: "nav-text"
                                },
                                [i("span", {
                                        staticClass: "have-child-before",
                                        on: {
                                            click: t.onNavClick
                                        }
                                    },
                                    [t._v("GETTING STARTED")]), i("div", {
                                        staticClass: "children"
                                    },
                                    [i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Player")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Guild")])])]), i("div", {
                                    staticClass: "nav-text"
                                },
                                [i("span", {
                                        staticClass: "have-child-before",
                                        on: {
                                            click: t.onNavClick
                                        }
                                    },
                                    [t._v("MISC")]), i("div", {
                                        staticClass: "children"
                                    },
                                    [i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("FAQ")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Whitepaper")]), i("div", {
                                            staticClass: "text-span",
                                            on: {
                                                click: t.navTextChildClick
                                            }
                                        },
                                        [t._v("Roadmap")])])]), t._m(17), t._m(18), i("div", {
                                    staticClass: "nav-closed"
                                },
                                [i("button", {
                                    on: {
                                        click: t.menuClick
                                    }
                                })])]), t._m(19), t._m(20), i("div", {
                                staticClass: "content-mobile-header-1"
                            },
                            [i("button", {
                                on: {
                                    click: t.menuClick
                                }
                            })])]), i("div", {
                            staticClass: "swiper-button-prev"
                        },
                        t._l(t.pointList, (function (s) {
                            return s.index > 0 && s.index < 6 ? i("div", {
                                key: s.id,
                                staticClass: "point",
                                attrs: {
                                    id: s.id
                                },
                                on: {
                                    click: function (a) {
                                        return t.onPintClick(s.index)
                                    }
                                }
                            }) : t._e()
                        })), 0), i("div", {
                        staticClass: "swiper-button-next"
                    }), i("div", {
                        staticClass: "swiper-scrollbar"
                    })]), t._m(21)])
            },
            e = [function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                            staticClass: "home-play-button"
                        },
                        [a("div", {
                                staticClass: "div-text"
                            },
                            [a("div", {
                                    staticClass: "text",
                                    attrs: {
                                        href: "https://cryptoids.gitbook.io/whitepaper/cryptoids/overview"
                                    }
                                },
                                [t._v("WHITERPAPER")]), a("div", {
                                    staticClass: "sp"
                                },
                                [t._v("/")]), a("a", {
                                    staticClass: "text",
                                    attrs: {
                                        href: "./tutorial.html"
                                    }
                                },
                                [t._v("TUTORIAL")])]), a("button", {
                            attrs: {
                                onclick: "alert('play')"
                            }
                        })])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("a", {
                            staticClass: "market-button",
                            attrs: {
                                onclick: "alert('bbbb')"
                            }
                        },
                        [a("p", {
                                staticClass: "pp"
                            },
                            [t._v("MARKETPLACE")])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "nft-bg-context"
                        },
                        [i("div", {
                                staticClass: "nft-pic-1"
                            },
                            [i("img", {
                                attrs: {
                                    src: a("0634")
                                }
                            })]), i("div", {
                                staticClass: "nft-pic-2"
                            },
                            [i("img", {
                                attrs: {
                                    src: a("f799")
                                }
                            })]), i("div", {
                                staticClass: "nft-pic-3"
                            },
                            [i("img", {
                                attrs: {
                                    src: a("9b5d")
                                }
                            })])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("a", {
                            staticClass: "market-button",
                            attrs: {
                                onclick: "alert('bbbb')"
                            }
                        },
                        [a("p", {
                                staticClass: "pp"
                            },
                            [t._v("PLAY MORE")])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                            staticClass: "play-bottom"
                        },
                        [a("button", {
                            staticClass: "bottom-button",
                            attrs: {
                                onclick: "alert('body 3 ')"
                            }
                        }), a("div", {
                            staticClass: "bottom-button-label"
                        })])
                },
                // function () {
                //     var t = this,
                //         s = t.$createElement,
                //         i = t._self._c || s;
                //     return i("div", {
                //             staticClass: "pic-1"
                //         },
                //         [i("img", {
                //             attrs: {
                //                 src: a("3b88")
                //             }
                //         })])
                // },
                // function () {
                //     var t = this,
                //         s = t.$createElement,
                //         i = t._self._c || s;
                //     return i("div", {
                //             staticClass: "pic-2"
                //         },
                //         [i("img", {
                //             attrs: {
                //                 src: a("7c47")
                //             }
                //         })])
                // },
                // function () {
                //     var t = this,
                //         s = t.$createElement,
                //         i = t._self._c || s;
                //     return i("div", {
                //             staticClass: "pic-3"
                //         },
                //         [i("img", {
                //             attrs: {
                //                 src: a("1745")
                //             }
                //         })])
                // },
                function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("a", {
                            staticClass: "market-button",
                            attrs: {
                                onclick: "alert('bbbb')"
                            }
                        },
                        [a("p", {
                                staticClass: "pp"
                            },
                            [t._v("EARN MORE")])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                            staticClass: "play-bottom"
                        },
                        [a("button", {
                            staticClass: "bottom-button",
                            attrs: {
                                onclick: "alert('body 3 ')"
                            }
                        }), a("div", {
                            staticClass: "bottom-button-label"
                        })])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "swiper-slide"
                        },
                        [i("div", {
                                staticClass: "content-wrap"
                            },
                            [i("div", {
                                    staticClass: "content-body-5"
                                },
                                [i("div", {
                                        staticClass: "play-bottom"
                                    },
                                    [i("button", {
                                        staticClass: "bottom-button",
                                        attrs: {
                                            onclick: "alert('body 3 ')"
                                        }
                                    }), i("div", {
                                        staticClass: "bottom-button-label"
                                    })]), i("div", {
                                        staticClass: "icons"
                                    },
                                    [i("img", {
                                        attrs: {
                                            src: a("02df")
                                        }
                                    }), i("img", {
                                        attrs: {
                                            src: a("d6bd")
                                        }
                                    }), i("img", {
                                        attrs: {
                                            src: a("b8ca")
                                        }
                                    }), i("img", {
                                        attrs: {
                                            src: a("ca2c")
                                        }
                                    }), i("img", {
                                        attrs: {
                                            src: a("e841")
                                        }
                                    }), i("img", {
                                        attrs: {
                                            src: a("637e")
                                        }
                                    }), i("img", {
                                        attrs: {
                                            src: a("dc76")
                                        }
                                    })]), i("div", {
                                        staticClass: "pic"
                                    },
                                    [i("img", {
                                        attrs: {
                                            src: a("f0d2")
                                        }
                                    })])])])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "swiper-slide"
                        },
                        [i("div", {
                                staticClass: "content-wrap"
                            },
                            [i("div", {
                                    staticClass: "content-body-6"
                                },
                                [i("div", {
                                        staticClass: "play-bottom"
                                    },
                                    [i("button", {
                                        staticClass: "bottom-button",
                                        attrs: {
                                            onclick: "alert('body 3 ')"
                                        }
                                    }), i("div", {
                                        staticClass: "bottom-button-label"
                                    })]), i("div", {
                                        staticClass: "top-words"
                                    },
                                    [i("img", {
                                        attrs: {
                                            src: a("9ba0")
                                        }
                                    })]), i("div", {
                                        staticClass: "category-game"
                                    },
                                    [i("div", {
                                            staticClass: "column-1"
                                        },
                                        [i("div", {
                                            staticClass: "category-1"
                                        }), i("div", {
                                            staticClass: "category-2"
                                        })]), i("div", {
                                            staticClass: "column-2"
                                        },
                                        [i("div", {
                                            staticClass: "category-1"
                                        }), i("div", {
                                            staticClass: "category-2"
                                        })]), i("div", {
                                            staticClass: "column-3"
                                        },
                                        [i("div", {
                                            staticClass: "category-1"
                                        }), i("div", {
                                            staticClass: "category-2"
                                        })])])])])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "footer-content"
                        },
                        [i("div", {
                                staticClass: "footer-menus"
                            },
                            [i("div", {
                                    staticClass: "menu"
                                },
                                [i("div", {
                                        staticClass: "mobile-menu-header"
                                    },
                                    [t._v("CRYPTOIDS")]), i("div", {
                                        staticClass: "mobile-menu-header"
                                    },
                                    [t._v("sp2e")]), i("div", {
                                        staticClass: "mobile-menu-header"
                                    },
                                    [t._v("GETTING STARTED")]), i("div", {
                                        staticClass: "mobile-menu-header"
                                    },
                                    [t._v("WHITEPAPER")]), i("div", {
                                        staticClass: "mobile-menu-header"
                                    },
                                    [t._v("ROADMAP")]), i("div", {
                                        staticClass: "mobile-menu-header"
                                    },
                                    [t._v("BACK TO TOP")]), i("div", {
                                        staticClass: "menu-header"
                                    },
                                    [t._v("Cryptoids")]), i("div", {
                                        staticClass: "menu-children"
                                    },
                                    [i("div", [t._v("Story")]), i("div", [t._v("Breeding")]), i("div", [t._v("Battle")])])]), i("div", {
                                    staticClass: "menu"
                                },
                                [i("div", {
                                        staticClass: "menu-header"
                                    },
                                    [t._v("sP2E")]), i("div", {
                                        staticClass: "menu-children"
                                    },
                                    [i("div", [t._v("Tokenomic")]), i("div", [t._v("NFT")])])]), i("div", {
                                    staticClass: "menu"
                                },
                                [i("div", {
                                        staticClass: "menu-header"
                                    },
                                    [t._v("Getting Started")]), i("div", {
                                        staticClass: "menu-children"
                                    },
                                    [i("div", [t._v("Tutorial")]), i("div", [t._v("Guild")])])]), i("div", {
                                    staticClass: "menu"
                                },
                                [i("div", {
                                        staticClass: "menu-header"
                                    },
                                    [t._v("MISC")]), i("div", {
                                        staticClass: "menu-children"
                                    },
                                    [i("div", [t._v("FAQ")]), i("div", [t._v("Whitepaper")]), i("div", [t._v("Roadmap")])])]), i("div", {
                                    staticClass: "menu"
                                },
                                [i("div", {
                                        staticClass: "menu-header"
                                    },
                                    [t._v("Play Now")]), i("div", {
                                        staticClass: "menu-children"
                                    },
                                    [i("div", {
                                            staticStyle: {
                                                color: "whitesmoke"
                                            }
                                        },
                                        [t._v("Marketplace")]), i("div", [t._v("Buy CrypEggs")])])])]), i("div", {
                                staticClass: "follow-us"
                            },
                            [i("div", {
                                    staticClass: "text"
                                },
                                [t._v("Follow Us")]), i("div", {
                                    staticClass: "icons"
                                },
                                [i("img", {
                                    attrs: {
                                        src: a("5b59")
                                    }
                                }), i("img", {
                                    attrs: {
                                        src: a("f8c8")
                                    }
                                }), i("img", {
                                    attrs: {
                                        src: a("2835")
                                    }
                                }), i("img", {
                                    attrs: {
                                        src: a("56d8")
                                    }
                                }), i("br", {}), i("img", {
                                    attrs: {
                                        src: a("81f6")
                                    }
                                }), i("img", {
                                    attrs: {
                                        src: a("f3e8")
                                    }
                                }), i("img", {
                                    attrs: {
                                        src: a("6767")
                                    }
                                })])])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "footer-bottom"
                        },
                        [i("div", {
                                staticClass: "footer-logo"
                            },
                            [i("img", {
                                attrs: {
                                    src: a("cafe"),
                                    width: "18%"
                                }
                            })]), i("div", {
                                staticClass: "copy-right"
                            },
                            [t._v(" World of Crytoids @ 2022, All rights reserved. Terms & Conditions. Privacy Policy ")])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "bottom-image"
                        },
                        [i("div", {
                                staticClass: "content"
                            },
                            [i("div", {
                                    staticClass: "text"
                                },
                                [i("div", [t._v("Yuki.Y")]), i("div", [t._v("Creative Director")])]), i("div", [i("img", {
                                attrs: {
                                    src: a("3d7a"),
                                    width: "95%"
                                }
                            })])]), i("div", {
                                staticClass: "content"
                            },
                            [i("div", {
                                    staticClass: "text"
                                },
                                [i("div", [t._v("Zeta Lo")]), i("div", [t._v("Marketing Lead")])]), i("div", [i("img", {
                                attrs: {
                                    src: a("4779"),
                                    width: "95%"
                                }
                            })])]), i("div", {
                                staticClass: "content"
                            },
                            [i("div", {
                                    staticClass: "text"
                                },
                                [i("div", [t._v("TC Chan")]), i("div", [t._v("CEO")])]), i("div", [i("img", {
                                attrs: {
                                    src: a("875d"),
                                    width: "90%"
                                }
                            })])]), i("div", {
                                staticClass: "content"
                            },
                            [i("div", {
                                    staticClass: "text"
                                },
                                [i("div", [t._v("T Leung")]), i("div", [t._v("Game Economist")])]), i("div", [i("img", {
                                attrs: {
                                    src: a("3248"),
                                    width: "85%"
                                }
                            })])]), i("div", {
                                staticClass: "content"
                            },
                            [i("div", {
                                    staticClass: "text"
                                },
                                [i("div", [t._v("MaFei")]), i("div", [t._v("Game Director")])]), i("div", [i("img", {
                                attrs: {
                                    src: a("6710"),
                                    width: "100%"
                                }
                            })])])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("a", {
                            staticClass: "header-logo",
                            attrs: {
                                href: "/",
                            }
                        },
                        [i("img", {
                            attrs: {
                                src: a("0539")
                            }
                        })])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "nav-text logo-m"
                        },
                        [i("img", {
                            attrs: {
                                src: a("ab1d"),
                                height: "60px"
                            }
                        })])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                            staticClass: "nav-text"
                        },
                        [a("span", [t._v("MARKETPLACE")])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "nav-text logo-m",
                            staticStyle: {
                                "margin-top": "50px"
                            }
                        },
                        [i("img", {
                            staticStyle: {
                                "margin-right": "40px"
                            },
                            attrs: {
                                src: a("b401"),
                                width: "50px",
                                height: "50px"
                            }
                        }), i("img", {
                            attrs: {
                                src: a("ec02"),
                                width: "50px",
                                height: "50px"
                            }
                        })])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                            staticClass: "nav-container"
                        },
                        [a("nav", {
                                staticClass: "nav"
                            },
                            [a("ul", [a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("CRYPTOIDS")]), a("ul", [a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Story")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Breeding")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Battle")])])])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("sP2E")]), a("ul", [a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Tokenomics")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("NFT")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Guild")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Scholarship")])])])]), a("li", [a("a", [t._v("GETTING STARTED")]), a("ul", [a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Player")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Guild")])])])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("MISC")]), a("ul", [a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("FAQ")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Whitepaper")])]), a("li", [a("a", {
                                    attrs: {
                                        href: "#"
                                    }
                                },
                                [t._v("Roadmap")])])])]), a("li", [a("a", [t._v("MARKETPLACE")])])])])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a("div", {
                            staticClass: "header-play-logo",
                            attrs: {
                                onclick: "alert('header play logo')"
                            }
                        },
                        [a("div", {
                                staticClass: "logo-p"
                            },
                            [t._v("P")]), a("div", {
                                staticClass: "logo-l"
                            },
                            [t._v("L")]), a("div", {
                                staticClass: "logo-a"
                            },
                            [t._v("A")]), a("div", {
                                staticClass: "logo-y"
                            },
                            [t._v("Y")])])
                },
                function () {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                            staticClass: "div-collapse"
                        },
                        [i("img", {
                            staticStyle: {
                                top: "15%",
                                position: "absolute"
                            },
                            attrs: {
                                src: a("5b59")
                            }
                        }), i("img", {
                            staticStyle: {
                                bottom: "15%",
                                position: "absolute"
                            },
                            attrs: {
                                src: a("f8c8")
                            }
                        })])
                }
            ],
            o = (a("7db0"), a("d3b7"), a("d81d"), a("1195"), a("4da1")),
            n = (a("5f67"), a("e8bf"), a("3d7a")),
            c = a.n(n),
            r = a("4779"),
            l = a.n(r),
            d = a("875d"),
            v = a.n(d),
            p = a("3248"),
            m = a.n(p),
            f = a("6710"),
            C = a.n(f),
            g = a("5eed"),
            h = a.n(g);
        o["b"].use([o["a"]]);
        var u = {
                name: "Home",
                components: {},
                data: function () {
                    return {
                        mySwiper: null,
                        pointList: [{
                                index: 0,
                                color: "",
                                id: "home"
                            },
                            {
                                index: 1,
                                color: "#1DBCB5",
                                id: "nft"
                            },
                            {
                                index: 2,
                                color: "#3781E5",
                                id: "play"
                            },
                            {
                                index: 3,
                                color: "#CE344A",
                                id: "play2"
                            },
                            {
                                index: 4,
                                color: "#E86EA4",
                                id: "followUs"
                            },
                            {
                                index: 5,
                                color: "#9C69BC",
                                id: "partners"
                            },
                            {
                                index: 6,
                                color: "",
                                id: "footer"
                            },
                            {
                                index: 7,
                                color: "#D3D3D3",
                                id: "bottom"
                            }
                        ],
                        teamImageList: [{
                                path: c.a,
                                name: ["Yuki.Y", "Creative Director"],
                                id: "yuki"
                            },
                            {
                                path: l.a,
                                name: ["Zeta Lo", "Marketing Lead"],
                                id: "zeta"
                            },
                            {
                                path: v.a,
                                name: ["TC Chan", "CEO"],
                                id: "chan"
                            },
                            {
                                path: m.a,
                                name: ["T Leung", "Game Economist"],
                                id: "leung"
                            },
                            {
                                path: C.a,
                                name: ["MaFei", "Game Director"],
                                id: "mafei"
                            }
                        ],
                        teamActiveIndex: 0,
                        showEggContent: !1
                    }
                },
                mounted: function () {
                    var t = this;
                    $(".nav li").hover((function () {
                            $(this).find("ul").fadeIn()
                        }), (function () {
                            $(this).find("ul").hide()
                        })),
                        this.mySwiper = new o["b"](".home-wrap", {
                            direction: "vertical",
                            mousewheel: !0,
                            autoHeight: !0,
                            height: window.innerHeight,
                            pagination: {
                                el: ".swiper-pagination",
                                clickable: !0
                            },
                            navigation: {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            },
                            scrollbar: {
                                el: ".swiper-scrollbar"
                            }
                        }),
                        this.mySwiper.slideTo(0, 1e3, !0),
                        $(".point").hide(),
                        this.mySwiper.on("slideChange", (function () {
                            7 === t.mySwiper.activeIndex ? ($(".footer-eggs").addClass("transaction"), t.initTeamSwiper()) : $(".footer-eggs").removeClass("transaction"),
                                t.pointList.map((function (s) {
                                    t.mySwiper.activeIndex > 0 && t.mySwiper.activeIndex < 6 ? s.index === t.mySwiper.activeIndex && ($(".point").show(), $(".point").css("background", "#999999"), $(".point").css("borderColor", "#999999"), $("#" + s.id).css("background", s.color), $("#" + s.id).css("borderColor", s.color)) : $(".point").hide()
                                }))
                        }))
                },
                methods: {
                    initTeamSwiper: function () {
                        var t = this,
                            s = new o["b"](".bottom-image-slider", {
                                direction: "horizontal",
                                loop: !1,
                                mousewheel: !1,
                                autoHeight: !0,
                                height: window.innerHeight,
                                pagination: {
                                    el: ".team-slide-pagination",
                                    clickable: !0
                                },
                                navigation: {
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                },
                                scrollbar: {
                                    el: ".swiper-scrollbar"
                                }
                            });
                        s.slideTo(0, 1e3, !0),
                            s.on("slideChange", (function () {
                                var a = s.activeIndex;
                                t.teamActiveIndex = a,
                                    t.teamImageList.map((function (t, s) {
                                        s === a && ($(".team-point").removeClass("active"), $("#" + t.id).addClass("active"))
                                    }))
                            }))
                    },
                    playGameVideoStart: function (t) {
                        var s = $(t.target).parent().siblings(),
                            a = $(s[0]).children("video").attr("id");
                        $("#" + a).trigger("play");
                    },
                    videoPlayEnd: function (t) {
                        // this.playGameVideoStart(t);
                        $(t.target).pause().currentTime(0)
                    },
                    menuClick: function (t) {
                        $(".header-nav").toggleClass("full")
                    },
                    onPintClick: function (t) {
                        $(".children").removeClass("active"),
                            this.mySwiper.slideTo(t, 1e3, !0)
                    },
                    headerPlayClick: function () {
                        this.$popup({
                            video: h.a
                        })
                    },
                    onNavMenuMouseOver: function (t) {
                        for (var s = $(t.target).siblings().first().attr("class"), a = $(t.target).attr("class"), i = $(t.target).parent().siblings(), e = 0; e < i.length; e++) $(i[e]).children().first().attr("class") && $(i[e]).children().first().attr("class", "have-child-before");
                        "have-child-before" === a ? $(t.target).attr("class", "have-child-after") : $(t.target).attr("class", "have-child-before"),
                            "children" === s ? ($(".children").removeClass("active"), $(t.target).siblings().first().addClass("active")) : $(".children").removeClass("active")
                    },
                    onNavMenuMouseLeave: function (t) {},
                    onNavClick: function (t) {
                        for (var s = $(t.target).siblings().first().attr("class"), a = $(t.target).attr("class"), i = $(t.target).parent().siblings(), e = 0; e < i.length; e++) $(i[e]).children().first().attr("class") && $(i[e]).children().first().attr("class", "have-child-before");
                        "have-child-before" === a ? $(t.target).attr("class", "have-child-after") : $(t.target).attr("class", "have-child-before"),
                            "children" === s ? ($(".children").removeClass("active"), $(t.target).siblings().first().addClass("active")) : $(".children").removeClass("active")
                    },
                    navTextChildClick: function (t) {
                        $(".children").removeClass("active"),
                            alert($(t.target).html())
                    },
                    marketPlaceBtnClick: function () {
                        alert("market place click")
                    },
                    swiperGoto: function () {
                        this.showEggContent ? $(".eggs-content-body").animate({
                                    top: "102%",
                                    opacity: 0
                                },
                                (function () {
                                    $(".footer-eggs").animate({
                                        opacity: "1.0"
                                    })
                                })) : ($(".eggs-content-body").animate({
                                top: "0%",
                                opacity: 1
                            }), $(".footer-eggs").animate({
                                opacity: 0
                            })),
                            this.showEggContent = !this.showEggContent
                    }
                }
            },
            b = u,
            x = a("2877"),
            A = Object(x["a"])(b, i, e, !1, null, "54665d22", null);
        s["default"] = A.exports
    },
    be45: function (t, s, a) {
        t.exports = a.p + "img/footer-egg-2.baea8220.png"
    },
    c302: function (t, s, a) {},
    ca1d: function (t, s, a) {
        t.exports = a.p + "img/footer-egg-3.dff16e1d.png"
    },
    ca2c: function (t, s, a) {
        t.exports = a.p + "img/follow-us-icon-4.e58e76d9.png"
    },
    cafe: function (t, s, a) {
        t.exports = a.p + "img/footer-logo.33249165.png"
    },
    d6bd: function (t, s, a) {
        t.exports = a.p + "img/follow-us-icon-2.e99664c1.png"
    },
    dc76: function (t, s, a) {
        t.exports = a.p + "img/follow-us-icon-7.3c3dffaf.png"
    },
    dd43: function (t, s, a) {
        t.exports = a.p + "img/home-icon-1.dcf9de3f.png"
    },
    de50: function (t, s, a) {
        t.exports = a.p + "img/team-words.199f037b.png"
    },
    e471: function (t, s, a) {
        t.exports = a.p + "img/partners_pic-3.5cbfe6f5.png"
    },
    e727: function (t, s, a) {
        t.exports = a.p + "img/nft_mobile_dw_2.ff53ade9.png"
    },
    e841: function (t, s, a) {
        t.exports = a.p + "img/follow-us-icon-5.f0c9408f.png"
    },
    e851: function (t, s, a) {},
    ec02: function (t, s, a) {
        t.exports = a.p + "img/Follow-us-7.7c76ef8a.png"
    },
    ec3e: function (t, s, a) {
        t.exports = a.p + "img/home-icon-2.8e397f7b.png"
    },
    f0d2: function (t, s, a) {
        t.exports = a.p + "img/follow-us-dw.39aa1b16.png"
    },
    f3e8: function (t, s, a) {
        t.exports = a.p + "img/footer-icon-6.0a7ef372.png"
    },
    f799: function (t, s, a) {
        t.exports = a.p + "img/nft-bg-center-3.0bf4a166.png"
    },
    f8c8: function (t, s, a) {
        t.exports = a.p + "img/footer-icon-2.81a227c7.png"
    },
    fdc3: function (t, s, a) {
        t.exports = a.p + "img/partners_pic-5.7a474570.png"
    },
    fde5: function (t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABcSAAAXEgFnn9JSAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAWJJREFUeNq82E1qwzAQBeDXScmRsug5vCiUgHOqLmsIhS58i0IXOVIh0I1UhC3J8/Oc2Xgl6WPQjNE8jeOIRpwA3LBPNPeWxoIPAN8Ahh0wA4CfdMYqnhuYnLbP9J2JmC8Ah+KMSy9DJQYAjgk1kDE5xmWmpINhomqYKko2MAxUD7NCSbrxZ8XGHpQGk+MM4CSp/F4B3MkoC+aeDDcpqoiJ8mDm5aVmodyYWtlHUSFMqzFmlGbjY9E8EcX0fh2eTIUxPZAHFcZsgayoMEYDYqFUGC0oilJjLCAvyoSxgh4SFpCl6eU4pDUDG+TBuFCyM8aMkgdgTCghYX6V1beJEhLmzdASuighYWZjn2qihITxNM8qSogYCkrImDAqP4OYmAjq/xl0JWM8qGv5DLoAmMgYC2rKQ4fyUrdQEYwGNZUTkGXZL1EMTA81bY1jShQTU0OtMK13WUa97zTSmwG8tPb+GwBU8qFpRl0gJgAAAABJRU5ErkJggg=="
    },
    fe07: function (t, s, a) {
        t.exports = a.p + "img/home-logo.bcee8914.png"
    }
});
$(".div-btn button").click(function () {
    $(".video-pop").show();
})
$(".close").click(function () {
    $(".video-pop").hide();
})
$(document).mouseup(function (e) {
    var _con = $(".close"); //设置目标区域
    if (!_con.is(e.target) && _con.has(e.target).length === 0) { //Mark1
        $(".video-pop").hide();
    }
});
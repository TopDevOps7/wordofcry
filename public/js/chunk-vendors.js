/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */ var Dt = Object.freeze({});
function _e(e) {
  return e == null;
}
function D(e) {
  return e != null;
}
function Fe(e) {
  return e === !0;
}
function vp(e) {
  return e === !1;
}
function Un(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "symbol" || typeof e == "boolean";
}
function et(e) {
  return e !== null && typeof e == "object";
}
var Us = Object.prototype.toString;
function mt(e) {
  return Us.call(e) === "[object Object]";
}
function gp(e) {
  return Us.call(e) === "[object RegExp]";
}
function ll(e) {
  var t = parseFloat(String(e));
  return t >= 0 && Math.floor(t) === t && isFinite(e);
}
function ss(e) {
  return D(e) && typeof e.then == "function" && typeof e.catch == "function";
}
function mp(e) {
  return e == null ? "" : Array.isArray(e) || (mt(e) && e.toString === Us) ? JSON.stringify(e, null, 2) : String(e);
}
function $n(e) {
  var t = parseFloat(e);
  return isNaN(t) ? e : t;
}
function Nt(e, t) {
  for (var r = Object.create(null), n = e.split(","), i = 0; i < n.length; i++) r[n[i]] = !0;
  return t
    ? function (a) {
        return r[a.toLowerCase()];
      }
    : function (a) {
        return r[a];
      };
}
Nt("slot,component", !0);
var yp = Nt("key,ref,slot,slot-scope,is");
function Gt(e, t) {
  if (e.length) {
    var r = e.indexOf(t);
    if (r > -1) return e.splice(r, 1);
  }
}
var bp = Object.prototype.hasOwnProperty;
function Ze(e, t) {
  return bp.call(e, t);
}
function Rr(e) {
  var t = Object.create(null);
  return function (n) {
    var i = t[n];
    return i || (t[n] = e(n));
  };
}
var _p = /-(\w)/g,
  Cr = Rr(function (e) {
    return e.replace(_p, function (t, r) {
      return r ? r.toUpperCase() : "";
    });
  }),
  wp = Rr(function (e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }),
  Sp = /\B([A-Z])/g,
  Wn = Rr(function (e) {
    return e.replace(Sp, "-$1").toLowerCase();
  });
function Tp(e, t) {
  function r(n) {
    var i = arguments.length;
    return i ? (i > 1 ? e.apply(t, arguments) : e.call(t, n)) : e.call(t);
  }
  return (r._length = e.length), r;
}
function Ep(e, t) {
  return e.bind(t);
}
var xp = Function.prototype.bind ? Ep : Tp;
function os(e, t) {
  t = t || 0;
  for (var r = e.length - t, n = new Array(r); r--; ) n[r] = e[r + t];
  return n;
}
function Re(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function cl(e) {
  for (var t = {}, r = 0; r < e.length; r++) e[r] && Re(t, e[r]);
  return t;
}
function ot(e, t, r) {}
var fi = function (e, t, r) {
    return !1;
  },
  dl = function (e) {
    return e;
  };
function Or(e, t) {
  if (e === t) return !0;
  var r = et(e),
    n = et(t);
  if (r && n)
    try {
      var i = Array.isArray(e),
        a = Array.isArray(t);
      if (i && a)
        return (
          e.length === t.length &&
          e.every(function (c, h) {
            return Or(c, t[h]);
          })
        );
      if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
      if (!i && !a) {
        var o = Object.keys(e),
          f = Object.keys(t);
        return (
          o.length === f.length &&
          o.every(function (c) {
            return Or(e[c], t[c]);
          })
        );
      } else return !1;
    } catch {
      return !1;
    }
  else return !r && !n ? String(e) === String(t) : !1;
}
function pl(e, t) {
  for (var r = 0; r < e.length; r++) if (Or(e[r], t)) return r;
  return -1;
}
function ji(e) {
  var t = !1;
  return function () {
    t || ((t = !0), e.apply(this, arguments));
  };
}
var Eu = "data-server-rendered",
  ia = ["component", "directive", "filter"],
  hl = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
  St = {
    optionMergeStrategies: Object.create(null),
    silent: !1,
    productionTip: !1,
    devtools: !1,
    performance: !1,
    errorHandler: null,
    warnHandler: null,
    ignoredElements: [],
    keyCodes: Object.create(null),
    isReservedTag: fi,
    isReservedAttr: fi,
    isUnknownElement: fi,
    getTagNamespace: ot,
    parsePlatformTagName: dl,
    mustUseProp: fi,
    async: !0,
    _lifecycleHooks: hl,
  },
  Cp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
function Op(e) {
  var t = (e + "").charCodeAt(0);
  return t === 36 || t === 95;
}
function Kr(e, t, r, n) {
  Object.defineProperty(e, t, { value: r, enumerable: !!n, writable: !0, configurable: !0 });
}
var Ap = new RegExp("[^" + Cp.source + ".$_\\d]");
function kp(e) {
  if (!Ap.test(e)) {
    var t = e.split(".");
    return function (r) {
      for (var n = 0; n < t.length; n++) {
        if (!r) return;
        r = r[t[n]];
      }
      return r;
    };
  }
}
var Pp = "__proto__" in {},
  yt = typeof window != "undefined",
  Ws = typeof WXEnvironment != "undefined" && !!WXEnvironment.platform,
  vl = Ws && WXEnvironment.platform.toLowerCase(),
  Qe = yt && window.navigator.userAgent.toLowerCase(),
  un = Qe && /msie|trident/.test(Qe),
  fn = Qe && Qe.indexOf("msie 9.0") > 0,
  Gs = Qe && Qe.indexOf("edge/") > 0;
Qe && Qe.indexOf("android") > 0;
var Ip = (Qe && /iphone|ipad|ipod|ios/.test(Qe)) || vl === "ios";
Qe && /chrome\/\d+/.test(Qe);
Qe && /phantomjs/.test(Qe);
var xu = Qe && Qe.match(/firefox\/(\d+)/),
  us = {}.watch,
  gl = !1;
if (yt)
  try {
    var Cu = {};
    Object.defineProperty(Cu, "passive", {
      get: function () {
        gl = !0;
      },
    }),
      window.addEventListener("test-passive", null, Cu);
  } catch {}
var li,
  aa = function () {
    return li === void 0 && (!yt && !Ws && typeof global != "undefined" ? (li = global.process && global.process.env.VUE_ENV === "server") : (li = !1)), li;
  },
  Hi = yt && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function Jr(e) {
  return typeof e == "function" && /native code/.test(e.toString());
}
var sa = typeof Symbol != "undefined" && Jr(Symbol) && typeof Reflect != "undefined" && Jr(Reflect.ownKeys),
  Dn;
typeof Set != "undefined" && Jr(Set)
  ? (Dn = Set)
  : (Dn = (function () {
      function e() {
        this.set = Object.create(null);
      }
      return (
        (e.prototype.has = function (r) {
          return this.set[r] === !0;
        }),
        (e.prototype.add = function (r) {
          this.set[r] = !0;
        }),
        (e.prototype.clear = function () {
          this.set = Object.create(null);
        }),
        e
      );
    })());
var Np = ot,
  Rp = 0,
  gt = function () {
    (this.id = Rp++), (this.subs = []);
  };
gt.prototype.addSub = function (t) {
  this.subs.push(t);
};
gt.prototype.removeSub = function (t) {
  Gt(this.subs, t);
};
gt.prototype.depend = function () {
  gt.target && gt.target.addDep(this);
};
gt.prototype.notify = function () {
  for (var t = this.subs.slice(), r = 0, n = t.length; r < n; r++) t[r].update();
};
gt.target = null;
var Ai = [];
function Gn(e) {
  Ai.push(e), (gt.target = e);
}
function Xn() {
  Ai.pop(), (gt.target = Ai[Ai.length - 1]);
}
var ut = function (t, r, n, i, a, o, f, c) {
    (this.tag = t),
      (this.data = r),
      (this.children = n),
      (this.text = i),
      (this.elm = a),
      (this.ns = void 0),
      (this.context = o),
      (this.fnContext = void 0),
      (this.fnOptions = void 0),
      (this.fnScopeId = void 0),
      (this.key = r && r.key),
      (this.componentOptions = f),
      (this.componentInstance = void 0),
      (this.parent = void 0),
      (this.raw = !1),
      (this.isStatic = !1),
      (this.isRootInsert = !0),
      (this.isComment = !1),
      (this.isCloned = !1),
      (this.isOnce = !1),
      (this.asyncFactory = c),
      (this.asyncMeta = void 0),
      (this.isAsyncPlaceholder = !1);
  },
  ml = { child: { configurable: !0 } };
ml.child.get = function () {
  return this.componentInstance;
};
Object.defineProperties(ut.prototype, ml);
var wr = function (e) {
  e === void 0 && (e = "");
  var t = new ut();
  return (t.text = e), (t.isComment = !0), t;
};
function Wr(e) {
  return new ut(void 0, void 0, void 0, String(e));
}
function fs(e) {
  var t = new ut(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
  return (t.ns = e.ns), (t.isStatic = e.isStatic), (t.key = e.key), (t.isComment = e.isComment), (t.fnContext = e.fnContext), (t.fnOptions = e.fnOptions), (t.fnScopeId = e.fnScopeId), (t.asyncMeta = e.asyncMeta), (t.isCloned = !0), t;
}
var yl = Array.prototype,
  Fi = Object.create(yl),
  Lp = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
Lp.forEach(function (e) {
  var t = yl[e];
  Kr(Fi, e, function () {
    for (var n = [], i = arguments.length; i--; ) n[i] = arguments[i];
    var a = t.apply(this, n),
      o = this.__ob__,
      f;
    switch (e) {
      case "push":
      case "unshift":
        f = n;
        break;
      case "splice":
        f = n.slice(2);
        break;
    }
    return f && o.observeArray(f), o.dep.notify(), a;
  });
});
var Mp = Object.getOwnPropertyNames(Fi),
  Xs = !0;
function ir(e) {
  Xs = e;
}
var Bi = function (t) {
  (this.value = t), (this.dep = new gt()), (this.vmCount = 0), Kr(t, "__ob__", this), Array.isArray(t) ? (Pp ? $p(t, Fi) : Dp(t, Fi, Mp), this.observeArray(t)) : this.walk(t);
};
Bi.prototype.walk = function (t) {
  for (var r = Object.keys(t), n = 0; n < r.length; n++) kr(t, r[n]);
};
Bi.prototype.observeArray = function (t) {
  for (var r = 0, n = t.length; r < n; r++) Ar(t[r]);
};
function $p(e, t) {
  e.__proto__ = t;
}
function Dp(e, t, r) {
  for (var n = 0, i = r.length; n < i; n++) {
    var a = r[n];
    Kr(e, a, t[a]);
  }
}
function Ar(e, t) {
  if (!(!et(e) || e instanceof ut)) {
    var r;
    return Ze(e, "__ob__") && e.__ob__ instanceof Bi ? (r = e.__ob__) : Xs && !aa() && (Array.isArray(e) || mt(e)) && Object.isExtensible(e) && !e._isVue && (r = new Bi(e)), t && r && r.vmCount++, r;
  }
}
function kr(e, t, r, n, i) {
  var a = new gt(),
    o = Object.getOwnPropertyDescriptor(e, t);
  if (!(o && o.configurable === !1)) {
    var f = o && o.get,
      c = o && o.set;
    (!f || c) && arguments.length === 2 && (r = e[t]);
    var h = !i && Ar(r);
    Object.defineProperty(e, t, {
      enumerable: !0,
      configurable: !0,
      get: function () {
        var b = f ? f.call(e) : r;
        return gt.target && (a.depend(), h && (h.dep.depend(), Array.isArray(b) && _l(b))), b;
      },
      set: function (b) {
        var w = f ? f.call(e) : r;
        b === w || (b !== b && w !== w) || (f && !c) || (c ? c.call(e, b) : (r = b), (h = !i && Ar(b)), a.notify());
      },
    });
  }
}
function Ys(e, t, r) {
  if (Array.isArray(e) && ll(t)) return (e.length = Math.max(e.length, t)), e.splice(t, 1, r), r;
  if (t in e && !(t in Object.prototype)) return (e[t] = r), r;
  var n = e.__ob__;
  return e._isVue || (n && n.vmCount) ? r : n ? (kr(n.value, t, r), n.dep.notify(), r) : ((e[t] = r), r);
}
function bl(e, t) {
  if (Array.isArray(e) && ll(t)) {
    e.splice(t, 1);
    return;
  }
  var r = e.__ob__;
  e._isVue || (r && r.vmCount) || !Ze(e, t) || (delete e[t], !!r && r.dep.notify());
}
function _l(e) {
  for (var t = void 0, r = 0, n = e.length; r < n; r++) (t = e[r]), t && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && _l(t);
}
var jt = St.optionMergeStrategies;
function ls(e, t) {
  if (!t) return e;
  for (var r, n, i, a = sa ? Reflect.ownKeys(t) : Object.keys(t), o = 0; o < a.length; o++) (r = a[o]), r !== "__ob__" && ((n = e[r]), (i = t[r]), Ze(e, r) ? n !== i && mt(n) && mt(i) && ls(n, i) : Ys(e, r, i));
  return e;
}
function cs(e, t, r) {
  return r
    ? function () {
        var i = typeof t == "function" ? t.call(r, r) : t,
          a = typeof e == "function" ? e.call(r, r) : e;
        return i ? ls(i, a) : a;
      }
    : t
    ? e
      ? function () {
          return ls(typeof t == "function" ? t.call(this, this) : t, typeof e == "function" ? e.call(this, this) : e);
        }
      : t
    : e;
}
jt.data = function (e, t, r) {
  return r ? cs(e, t, r) : t && typeof t != "function" ? e : cs(e, t);
};
function jp(e, t) {
  var r = t ? (e ? e.concat(t) : Array.isArray(t) ? t : [t]) : e;
  return r && Hp(r);
}
function Hp(e) {
  for (var t = [], r = 0; r < e.length; r++) t.indexOf(e[r]) === -1 && t.push(e[r]);
  return t;
}
hl.forEach(function (e) {
  jt[e] = jp;
});
function Fp(e, t, r, n) {
  var i = Object.create(e || null);
  return t ? Re(i, t) : i;
}
ia.forEach(function (e) {
  jt[e + "s"] = Fp;
});
jt.watch = function (e, t, r, n) {
  if ((e === us && (e = void 0), t === us && (t = void 0), !t)) return Object.create(e || null);
  if (!e) return t;
  var i = {};
  Re(i, e);
  for (var a in t) {
    var o = i[a],
      f = t[a];
    o && !Array.isArray(o) && (o = [o]), (i[a] = o ? o.concat(f) : Array.isArray(f) ? f : [f]);
  }
  return i;
};
jt.props =
  jt.methods =
  jt.inject =
  jt.computed =
    function (e, t, r, n) {
      if (!e) return t;
      var i = Object.create(null);
      return Re(i, e), t && Re(i, t), i;
    };
jt.provide = cs;
var Bp = function (e, t) {
  return t === void 0 ? e : t;
};
function qp(e, t) {
  var r = e.props;
  if (!!r) {
    var n = {},
      i,
      a,
      o;
    if (Array.isArray(r)) for (i = r.length; i--; ) (a = r[i]), typeof a == "string" && ((o = Cr(a)), (n[o] = { type: null }));
    else if (mt(r)) for (var f in r) (a = r[f]), (o = Cr(f)), (n[o] = mt(a) ? a : { type: a });
    e.props = n;
  }
}
function zp(e, t) {
  var r = e.inject;
  if (!!r) {
    var n = (e.inject = {});
    if (Array.isArray(r)) for (var i = 0; i < r.length; i++) n[r[i]] = { from: r[i] };
    else if (mt(r))
      for (var a in r) {
        var o = r[a];
        n[a] = mt(o) ? Re({ from: a }, o) : { from: o };
      }
  }
}
function Up(e) {
  var t = e.directives;
  if (t)
    for (var r in t) {
      var n = t[r];
      typeof n == "function" && (t[r] = { bind: n, update: n });
    }
}
function Pr(e, t, r) {
  if ((typeof t == "function" && (t = t.options), qp(t), zp(t), Up(t), !t._base && (t.extends && (e = Pr(e, t.extends, r)), t.mixins))) for (var n = 0, i = t.mixins.length; n < i; n++) e = Pr(e, t.mixins[n], r);
  var a = {},
    o;
  for (o in e) f(o);
  for (o in t) Ze(e, o) || f(o);
  function f(c) {
    var h = jt[c] || Bp;
    a[c] = h(e[c], t[c], r, c);
  }
  return a;
}
function Vs(e, t, r, n) {
  if (typeof r == "string") {
    var i = e[t];
    if (Ze(i, r)) return i[r];
    var a = Cr(r);
    if (Ze(i, a)) return i[a];
    var o = wp(a);
    if (Ze(i, o)) return i[o];
    var f = i[r] || i[a] || i[o];
    return f;
  }
}
function Ks(e, t, r, n) {
  var i = t[e],
    a = !Ze(r, e),
    o = r[e],
    f = Au(Boolean, i.type);
  if (f > -1) {
    if (a && !Ze(i, "default")) o = !1;
    else if (o === "" || o === Wn(e)) {
      var c = Au(String, i.type);
      (c < 0 || f < c) && (o = !0);
    }
  }
  if (o === void 0) {
    o = Wp(n, i, e);
    var h = Xs;
    ir(!0), Ar(o), ir(h);
  }
  return o;
}
function Wp(e, t, r) {
  if (!!Ze(t, "default")) {
    var n = t.default;
    return e && e.$options.propsData && e.$options.propsData[r] === void 0 && e._props[r] !== void 0 ? e._props[r] : typeof n == "function" && ds(t.type) !== "Function" ? n.call(e) : n;
  }
}
var Gp = /^\s*function (\w+)/;
function ds(e) {
  var t = e && e.toString().match(Gp);
  return t ? t[1] : "";
}
function Ou(e, t) {
  return ds(e) === ds(t);
}
function Au(e, t) {
  if (!Array.isArray(t)) return Ou(t, e) ? 0 : -1;
  for (var r = 0, n = t.length; r < n; r++) if (Ou(t[r], e)) return r;
  return -1;
}
function Ir(e, t, r) {
  Gn();
  try {
    if (t)
      for (var n = t; (n = n.$parent); ) {
        var i = n.$options.errorCaptured;
        if (i)
          for (var a = 0; a < i.length; a++)
            try {
              var o = i[a].call(n, e, t, r) === !1;
              if (o) return;
            } catch (f) {
              ku(f, n, "errorCaptured hook");
            }
      }
    ku(e, t, r);
  } finally {
    Xn();
  }
}
function Zr(e, t, r, n, i) {
  var a;
  try {
    (a = r ? e.apply(t, r) : e.call(t)),
      a &&
        !a._isVue &&
        ss(a) &&
        !a._handled &&
        (a.catch(function (o) {
          return Ir(o, n, i + " (Promise/async)");
        }),
        (a._handled = !0));
  } catch (o) {
    Ir(o, n, i);
  }
  return a;
}
function ku(e, t, r) {
  if (St.errorHandler)
    try {
      return St.errorHandler.call(null, e, t, r);
    } catch (n) {
      n !== e && Pu(n);
    }
  Pu(e);
}
function Pu(e, t, r) {
  if ((yt || Ws) && typeof console != "undefined") console.error(e);
  else throw e;
}
var ps = !1,
  hs = [],
  vs = !1;
function ci() {
  vs = !1;
  var e = hs.slice(0);
  hs.length = 0;
  for (var t = 0; t < e.length; t++) e[t]();
}
var Pn;
if (typeof Promise != "undefined" && Jr(Promise)) {
  var Xp = Promise.resolve();
  (Pn = function () {
    Xp.then(ci), Ip && setTimeout(ot);
  }),
    (ps = !0);
} else if (!un && typeof MutationObserver != "undefined" && (Jr(MutationObserver) || MutationObserver.toString() === "[object MutationObserverConstructor]")) {
  var di = 1,
    Yp = new MutationObserver(ci),
    Iu = document.createTextNode(String(di));
  Yp.observe(Iu, { characterData: !0 }),
    (Pn = function () {
      (di = (di + 1) % 2), (Iu.data = String(di));
    }),
    (ps = !0);
} else
  typeof setImmediate != "undefined" && Jr(setImmediate)
    ? (Pn = function () {
        setImmediate(ci);
      })
    : (Pn = function () {
        setTimeout(ci, 0);
      });
function Js(e, t) {
  var r;
  if (
    (hs.push(function () {
      if (e)
        try {
          e.call(t);
        } catch (n) {
          Ir(n, t, "nextTick");
        }
      else r && r(t);
    }),
    vs || ((vs = !0), Pn()),
    !e && typeof Promise != "undefined")
  )
    return new Promise(function (n) {
      r = n;
    });
}
var Nu = new Dn();
function qi(e) {
  gs(e, Nu), Nu.clear();
}
function gs(e, t) {
  var r,
    n,
    i = Array.isArray(e);
  if (!((!i && !et(e)) || Object.isFrozen(e) || e instanceof ut)) {
    if (e.__ob__) {
      var a = e.__ob__.dep.id;
      if (t.has(a)) return;
      t.add(a);
    }
    if (i) for (r = e.length; r--; ) gs(e[r], t);
    else for (n = Object.keys(e), r = n.length; r--; ) gs(e[n[r]], t);
  }
}
var Ru = Rr(function (e) {
  var t = e.charAt(0) === "&";
  e = t ? e.slice(1) : e;
  var r = e.charAt(0) === "~";
  e = r ? e.slice(1) : e;
  var n = e.charAt(0) === "!";
  return (e = n ? e.slice(1) : e), { name: e, once: r, capture: n, passive: t };
});
function ms(e, t) {
  function r() {
    var n = arguments,
      i = r.fns;
    if (Array.isArray(i)) for (var a = i.slice(), o = 0; o < a.length; o++) Zr(a[o], null, n, t, "v-on handler");
    else return Zr(i, null, arguments, t, "v-on handler");
  }
  return (r.fns = e), r;
}
function wl(e, t, r, n, i, a) {
  var o, f, c, h;
  for (o in e) (f = e[o]), (c = t[o]), (h = Ru(o)), _e(f) || (_e(c) ? (_e(f.fns) && (f = e[o] = ms(f, a)), Fe(h.once) && (f = e[o] = i(h.name, f, h.capture)), r(h.name, f, h.capture, h.passive, h.params)) : f !== c && ((c.fns = f), (e[o] = c)));
  for (o in t) _e(e[o]) && ((h = Ru(o)), n(h.name, t[o], h.capture));
}
function Jt(e, t, r) {
  e instanceof ut && (e = e.data.hook || (e.data.hook = {}));
  var n,
    i = e[t];
  function a() {
    r.apply(this, arguments), Gt(n.fns, a);
  }
  _e(i) ? (n = ms([a])) : D(i.fns) && Fe(i.merged) ? ((n = i), n.fns.push(a)) : (n = ms([i, a])), (n.merged = !0), (e[t] = n);
}
function Vp(e, t, r) {
  var n = t.options.props;
  if (!_e(n)) {
    var i = {},
      a = e.attrs,
      o = e.props;
    if (D(a) || D(o))
      for (var f in n) {
        var c = Wn(f);
        Lu(i, o, f, c, !0) || Lu(i, a, f, c, !1);
      }
    return i;
  }
}
function Lu(e, t, r, n, i) {
  if (D(t)) {
    if (Ze(t, r)) return (e[r] = t[r]), i || delete t[r], !0;
    if (Ze(t, n)) return (e[r] = t[n]), i || delete t[n], !0;
  }
  return !1;
}
function Kp(e) {
  for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
  return e;
}
function Qs(e) {
  return Un(e) ? [Wr(e)] : Array.isArray(e) ? Sl(e) : void 0;
}
function xn(e) {
  return D(e) && D(e.text) && vp(e.isComment);
}
function Sl(e, t) {
  var r = [],
    n,
    i,
    a,
    o;
  for (n = 0; n < e.length; n++)
    (i = e[n]),
      !(_e(i) || typeof i == "boolean") &&
        ((a = r.length - 1),
        (o = r[a]),
        Array.isArray(i)
          ? i.length > 0 && ((i = Sl(i, (t || "") + "_" + n)), xn(i[0]) && xn(o) && ((r[a] = Wr(o.text + i[0].text)), i.shift()), r.push.apply(r, i))
          : Un(i)
          ? xn(o)
            ? (r[a] = Wr(o.text + i))
            : i !== "" && r.push(Wr(i))
          : xn(i) && xn(o)
          ? (r[a] = Wr(o.text + i.text))
          : (Fe(e._isVList) && D(i.tag) && _e(i.key) && D(t) && (i.key = "__vlist" + t + "_" + n + "__"), r.push(i)));
  return r;
}
function Jp(e) {
  var t = e.$options.provide;
  t && (e._provided = typeof t == "function" ? t.call(e) : t);
}
function Qp(e) {
  var t = Tl(e.$options.inject, e);
  t &&
    (ir(!1),
    Object.keys(t).forEach(function (r) {
      kr(e, r, t[r]);
    }),
    ir(!0));
}
function Tl(e, t) {
  if (e) {
    for (var r = Object.create(null), n = sa ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < n.length; i++) {
      var a = n[i];
      if (a !== "__ob__") {
        for (var o = e[a].from, f = t; f; ) {
          if (f._provided && Ze(f._provided, o)) {
            r[a] = f._provided[o];
            break;
          }
          f = f.$parent;
        }
        if (!f && "default" in e[a]) {
          var c = e[a].default;
          r[a] = typeof c == "function" ? c.call(t) : c;
        }
      }
    }
    return r;
  }
}
function Zs(e, t) {
  if (!e || !e.length) return {};
  for (var r = {}, n = 0, i = e.length; n < i; n++) {
    var a = e[n],
      o = a.data;
    if ((o && o.attrs && o.attrs.slot && delete o.attrs.slot, (a.context === t || a.fnContext === t) && o && o.slot != null)) {
      var f = o.slot,
        c = r[f] || (r[f] = []);
      a.tag === "template" ? c.push.apply(c, a.children || []) : c.push(a);
    } else (r.default || (r.default = [])).push(a);
  }
  for (var h in r) r[h].every(Zp) && delete r[h];
  return r;
}
function Zp(e) {
  return (e.isComment && !e.asyncFactory) || e.text === " ";
}
function jn(e) {
  return e.isComment && e.asyncFactory;
}
function ki(e, t, r) {
  var n,
    i = Object.keys(t).length > 0,
    a = e ? !!e.$stable : !i,
    o = e && e.$key;
  if (!e) n = {};
  else {
    if (e._normalized) return e._normalized;
    if (a && r && r !== Dt && o === r.$key && !i && !r.$hasNormal) return r;
    n = {};
    for (var f in e) e[f] && f[0] !== "$" && (n[f] = eh(t, f, e[f]));
  }
  for (var c in t) c in n || (n[c] = th(t, c));
  return e && Object.isExtensible(e) && (e._normalized = n), Kr(n, "$stable", a), Kr(n, "$key", o), Kr(n, "$hasNormal", i), n;
}
function eh(e, t, r) {
  var n = function () {
    var i = arguments.length ? r.apply(null, arguments) : r({});
    i = i && typeof i == "object" && !Array.isArray(i) ? [i] : Qs(i);
    var a = i && i[0];
    return i && (!a || (i.length === 1 && a.isComment && !jn(a))) ? void 0 : i;
  };
  return r.proxy && Object.defineProperty(e, t, { get: n, enumerable: !0, configurable: !0 }), n;
}
function th(e, t) {
  return function () {
    return e[t];
  };
}
function rh(e, t) {
  var r, n, i, a, o;
  if (Array.isArray(e) || typeof e == "string") for (r = new Array(e.length), n = 0, i = e.length; n < i; n++) r[n] = t(e[n], n);
  else if (typeof e == "number") for (r = new Array(e), n = 0; n < e; n++) r[n] = t(n + 1, n);
  else if (et(e))
    if (sa && e[Symbol.iterator]) {
      r = [];
      for (var f = e[Symbol.iterator](), c = f.next(); !c.done; ) r.push(t(c.value, r.length)), (c = f.next());
    } else for (a = Object.keys(e), r = new Array(a.length), n = 0, i = a.length; n < i; n++) (o = a[n]), (r[n] = t(e[o], o, n));
  return D(r) || (r = []), (r._isVList = !0), r;
}
function nh(e, t, r, n) {
  var i = this.$scopedSlots[e],
    a;
  i ? ((r = r || {}), n && (r = Re(Re({}, n), r)), (a = i(r) || (typeof t == "function" ? t() : t))) : (a = this.$slots[e] || (typeof t == "function" ? t() : t));
  var o = r && r.slot;
  return o ? this.$createElement("template", { slot: o }, a) : a;
}
function ih(e) {
  return Vs(this.$options, "filters", e) || dl;
}
function Mu(e, t) {
  return Array.isArray(e) ? e.indexOf(t) === -1 : e !== t;
}
function ah(e, t, r, n, i) {
  var a = St.keyCodes[t] || r;
  return i && n && !St.keyCodes[t] ? Mu(i, n) : a ? Mu(a, e) : n ? Wn(n) !== t : e === void 0;
}
function sh(e, t, r, n, i) {
  if (r && et(r)) {
    Array.isArray(r) && (r = cl(r));
    var a,
      o = function (c) {
        if (c === "class" || c === "style" || yp(c)) a = e;
        else {
          var h = e.attrs && e.attrs.type;
          a = n || St.mustUseProp(t, h, c) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
        }
        var g = Cr(c),
          b = Wn(c);
        if (!(g in a) && !(b in a) && ((a[c] = r[c]), i)) {
          var w = e.on || (e.on = {});
          w["update:" + c] = function (A) {
            r[c] = A;
          };
        }
      };
    for (var f in r) o(f);
  }
  return e;
}
function oh(e, t) {
  var r = this._staticTrees || (this._staticTrees = []),
    n = r[e];
  return (n && !t) || ((n = r[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this)), El(n, "__static__" + e, !1)), n;
}
function uh(e, t, r) {
  return El(e, "__once__" + t + (r ? "_" + r : ""), !0), e;
}
function El(e, t, r) {
  if (Array.isArray(e)) for (var n = 0; n < e.length; n++) e[n] && typeof e[n] != "string" && $u(e[n], t + "_" + n, r);
  else $u(e, t, r);
}
function $u(e, t, r) {
  (e.isStatic = !0), (e.key = t), (e.isOnce = r);
}
function fh(e, t) {
  if (t && mt(t)) {
    var r = (e.on = e.on ? Re({}, e.on) : {});
    for (var n in t) {
      var i = r[n],
        a = t[n];
      r[n] = i ? [].concat(i, a) : a;
    }
  }
  return e;
}
function xl(e, t, r, n) {
  t = t || { $stable: !r };
  for (var i = 0; i < e.length; i++) {
    var a = e[i];
    Array.isArray(a) ? xl(a, t, r) : a && (a.proxy && (a.fn.proxy = !0), (t[a.key] = a.fn));
  }
  return n && (t.$key = n), t;
}
function lh(e, t) {
  for (var r = 0; r < t.length; r += 2) {
    var n = t[r];
    typeof n == "string" && n && (e[t[r]] = t[r + 1]);
  }
  return e;
}
function ch(e, t) {
  return typeof e == "string" ? t + e : e;
}
function Cl(e) {
  (e._o = uh), (e._n = $n), (e._s = mp), (e._l = rh), (e._t = nh), (e._q = Or), (e._i = pl), (e._m = oh), (e._f = ih), (e._k = ah), (e._b = sh), (e._v = Wr), (e._e = wr), (e._u = xl), (e._g = fh), (e._d = lh), (e._p = ch);
}
function eo(e, t, r, n, i) {
  var a = this,
    o = i.options,
    f;
  Ze(n, "_uid") ? ((f = Object.create(n)), (f._original = n)) : ((f = n), (n = n._original));
  var c = Fe(o._compiled),
    h = !c;
  (this.data = e),
    (this.props = t),
    (this.children = r),
    (this.parent = n),
    (this.listeners = e.on || Dt),
    (this.injections = Tl(o.inject, n)),
    (this.slots = function () {
      return a.$slots || ki(e.scopedSlots, (a.$slots = Zs(r, n))), a.$slots;
    }),
    Object.defineProperty(this, "scopedSlots", {
      enumerable: !0,
      get: function () {
        return ki(e.scopedSlots, this.slots());
      },
    }),
    c && ((this.$options = o), (this.$slots = this.slots()), (this.$scopedSlots = ki(e.scopedSlots, this.$slots))),
    o._scopeId
      ? (this._c = function (g, b, w, A) {
          var S = zi(f, g, b, w, A, h);
          return S && !Array.isArray(S) && ((S.fnScopeId = o._scopeId), (S.fnContext = n)), S;
        })
      : (this._c = function (g, b, w, A) {
          return zi(f, g, b, w, A, h);
        });
}
Cl(eo.prototype);
function dh(e, t, r, n, i) {
  var a = e.options,
    o = {},
    f = a.props;
  if (D(f)) for (var c in f) o[c] = Ks(c, f, t || Dt);
  else D(r.attrs) && ju(o, r.attrs), D(r.props) && ju(o, r.props);
  var h = new eo(r, o, i, n, e),
    g = a.render.call(null, h._c, h);
  if (g instanceof ut) return Du(g, r, h.parent, a);
  if (Array.isArray(g)) {
    for (var b = Qs(g) || [], w = new Array(b.length), A = 0; A < b.length; A++) w[A] = Du(b[A], r, h.parent, a);
    return w;
  }
}
function Du(e, t, r, n, i) {
  var a = fs(e);
  return (a.fnContext = r), (a.fnOptions = n), t.slot && ((a.data || (a.data = {})).slot = t.slot), a;
}
function ju(e, t) {
  for (var r in t) e[Cr(r)] = t[r];
}
var to = {
    init: function (t, r) {
      if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
        var n = t;
        to.prepatch(n, n);
      } else {
        var i = (t.componentInstance = ph(t, Sr));
        i.$mount(r ? t.elm : void 0, r);
      }
    },
    prepatch: function (t, r) {
      var n = r.componentOptions,
        i = (r.componentInstance = t.componentInstance);
      Nh(i, n.propsData, n.listeners, r, n.children);
    },
    insert: function (t) {
      var r = t.context,
        n = t.componentInstance;
      n._isMounted || ((n._isMounted = !0), Pt(n, "mounted")), t.data.keepAlive && (r._isMounted ? $h(n) : ro(n, !0));
    },
    destroy: function (t) {
      var r = t.componentInstance;
      r._isDestroyed || (t.data.keepAlive ? Rl(r, !0) : r.$destroy());
    },
  },
  Hu = Object.keys(to);
function Fu(e, t, r, n, i) {
  if (!_e(e)) {
    var a = r.$options._base;
    if ((et(e) && (e = a.extend(e)), typeof e == "function")) {
      var o;
      if (_e(e.cid) && ((o = e), (e = Th(o, a)), e === void 0)) return Sh(o, t, r, n, i);
      (t = t || {}), so(e), D(t.model) && gh(e.options, t);
      var f = Vp(t, e);
      if (Fe(e.options.functional)) return dh(e, f, t, r, n);
      var c = t.on;
      if (((t.on = t.nativeOn), Fe(e.options.abstract))) {
        var h = t.slot;
        (t = {}), h && (t.slot = h);
      }
      hh(t);
      var g = e.options.name || i,
        b = new ut("vue-component-" + e.cid + (g ? "-" + g : ""), t, void 0, void 0, void 0, r, { Ctor: e, propsData: f, listeners: c, tag: i, children: n }, o);
      return b;
    }
  }
}
function ph(e, t) {
  var r = { _isComponent: !0, _parentVnode: e, parent: t },
    n = e.data.inlineTemplate;
  return D(n) && ((r.render = n.render), (r.staticRenderFns = n.staticRenderFns)), new e.componentOptions.Ctor(r);
}
function hh(e) {
  for (var t = e.hook || (e.hook = {}), r = 0; r < Hu.length; r++) {
    var n = Hu[r],
      i = t[n],
      a = to[n];
    i !== a && !(i && i._merged) && (t[n] = i ? vh(a, i) : a);
  }
}
function vh(e, t) {
  var r = function (n, i) {
    e(n, i), t(n, i);
  };
  return (r._merged = !0), r;
}
function gh(e, t) {
  var r = (e.model && e.model.prop) || "value",
    n = (e.model && e.model.event) || "input";
  (t.attrs || (t.attrs = {}))[r] = t.model.value;
  var i = t.on || (t.on = {}),
    a = i[n],
    o = t.model.callback;
  D(a) ? (Array.isArray(a) ? a.indexOf(o) === -1 : a !== o) && (i[n] = [o].concat(a)) : (i[n] = o);
}
var mh = 1,
  Ol = 2;
function zi(e, t, r, n, i, a) {
  return (Array.isArray(r) || Un(r)) && ((i = n), (n = r), (r = void 0)), Fe(a) && (i = Ol), yh(e, t, r, n, i);
}
function yh(e, t, r, n, i) {
  if ((D(r) && D(r.__ob__)) || (D(r) && D(r.is) && (t = r.is), !t)) return wr();
  Array.isArray(n) && typeof n[0] == "function" && ((r = r || {}), (r.scopedSlots = { default: n[0] }), (n.length = 0)), i === Ol ? (n = Qs(n)) : i === mh && (n = Kp(n));
  var a, o;
  if (typeof t == "string") {
    var f;
    (o = (e.$vnode && e.$vnode.ns) || St.getTagNamespace(t)), St.isReservedTag(t) ? (a = new ut(St.parsePlatformTagName(t), r, n, void 0, void 0, e)) : (!r || !r.pre) && D((f = Vs(e.$options, "components", t))) ? (a = Fu(f, r, e, n, t)) : (a = new ut(t, r, n, void 0, void 0, e));
  } else a = Fu(t, r, e, n);
  return Array.isArray(a) ? a : D(a) ? (D(o) && Al(a, o), D(r) && bh(r), a) : wr();
}
function Al(e, t, r) {
  if (((e.ns = t), e.tag === "foreignObject" && ((t = void 0), (r = !0)), D(e.children)))
    for (var n = 0, i = e.children.length; n < i; n++) {
      var a = e.children[n];
      D(a.tag) && (_e(a.ns) || (Fe(r) && a.tag !== "svg")) && Al(a, t, r);
    }
}
function bh(e) {
  et(e.style) && qi(e.style), et(e.class) && qi(e.class);
}
function _h(e) {
  (e._vnode = null), (e._staticTrees = null);
  var t = e.$options,
    r = (e.$vnode = t._parentVnode),
    n = r && r.context;
  (e.$slots = Zs(t._renderChildren, n)),
    (e.$scopedSlots = Dt),
    (e._c = function (a, o, f, c) {
      return zi(e, a, o, f, c, !1);
    }),
    (e.$createElement = function (a, o, f, c) {
      return zi(e, a, o, f, c, !0);
    });
  var i = r && r.data;
  kr(e, "$attrs", (i && i.attrs) || Dt, null, !0), kr(e, "$listeners", t._parentListeners || Dt, null, !0);
}
var ys = null;
function wh(e) {
  Cl(e.prototype),
    (e.prototype.$nextTick = function (t) {
      return Js(t, this);
    }),
    (e.prototype._render = function () {
      var t = this,
        r = t.$options,
        n = r.render,
        i = r._parentVnode;
      i && (t.$scopedSlots = ki(i.data.scopedSlots, t.$slots, t.$scopedSlots)), (t.$vnode = i);
      var a;
      try {
        (ys = t), (a = n.call(t._renderProxy, t.$createElement));
      } catch (o) {
        Ir(o, t, "render"), (a = t._vnode);
      } finally {
        ys = null;
      }
      return Array.isArray(a) && a.length === 1 && (a = a[0]), a instanceof ut || (a = wr()), (a.parent = i), a;
    });
}
function Fa(e, t) {
  return (e.__esModule || (sa && e[Symbol.toStringTag] === "Module")) && (e = e.default), et(e) ? t.extend(e) : e;
}
function Sh(e, t, r, n, i) {
  var a = wr();
  return (a.asyncFactory = e), (a.asyncMeta = { data: t, context: r, children: n, tag: i }), a;
}
function Th(e, t) {
  if (Fe(e.error) && D(e.errorComp)) return e.errorComp;
  if (D(e.resolved)) return e.resolved;
  var r = ys;
  if ((r && D(e.owners) && e.owners.indexOf(r) === -1 && e.owners.push(r), Fe(e.loading) && D(e.loadingComp))) return e.loadingComp;
  if (r && !D(e.owners)) {
    var n = (e.owners = [r]),
      i = !0,
      a = null,
      o = null;
    r.$on("hook:destroyed", function () {
      return Gt(n, r);
    });
    var f = function (b) {
        for (var w = 0, A = n.length; w < A; w++) n[w].$forceUpdate();
        b && ((n.length = 0), a !== null && (clearTimeout(a), (a = null)), o !== null && (clearTimeout(o), (o = null)));
      },
      c = ji(function (b) {
        (e.resolved = Fa(b, t)), i ? (n.length = 0) : f(!0);
      }),
      h = ji(function (b) {
        D(e.errorComp) && ((e.error = !0), f(!0));
      }),
      g = e(c, h);
    return (
      et(g) &&
        (ss(g)
          ? _e(e.resolved) && g.then(c, h)
          : ss(g.component) &&
            (g.component.then(c, h),
            D(g.error) && (e.errorComp = Fa(g.error, t)),
            D(g.loading) &&
              ((e.loadingComp = Fa(g.loading, t)),
              g.delay === 0
                ? (e.loading = !0)
                : (a = setTimeout(function () {
                    (a = null), _e(e.resolved) && _e(e.error) && ((e.loading = !0), f(!1));
                  }, g.delay || 200))),
            D(g.timeout) &&
              (o = setTimeout(function () {
                (o = null), _e(e.resolved) && h(null);
              }, g.timeout)))),
      (i = !1),
      e.loading ? e.loadingComp : e.resolved
    );
  }
}
function kl(e) {
  if (Array.isArray(e))
    for (var t = 0; t < e.length; t++) {
      var r = e[t];
      if (D(r) && (D(r.componentOptions) || jn(r))) return r;
    }
}
function Eh(e) {
  (e._events = Object.create(null)), (e._hasHookEvent = !1);
  var t = e.$options._parentListeners;
  t && Pl(e, t);
}
var Hn;
function xh(e, t) {
  Hn.$on(e, t);
}
function Ch(e, t) {
  Hn.$off(e, t);
}
function Oh(e, t) {
  var r = Hn;
  return function n() {
    var i = t.apply(null, arguments);
    i !== null && r.$off(e, n);
  };
}
function Pl(e, t, r) {
  (Hn = e), wl(t, r || {}, xh, Ch, Oh, e), (Hn = void 0);
}
function Ah(e) {
  var t = /^hook:/;
  (e.prototype.$on = function (r, n) {
    var i = this;
    if (Array.isArray(r)) for (var a = 0, o = r.length; a < o; a++) i.$on(r[a], n);
    else (i._events[r] || (i._events[r] = [])).push(n), t.test(r) && (i._hasHookEvent = !0);
    return i;
  }),
    (e.prototype.$once = function (r, n) {
      var i = this;
      function a() {
        i.$off(r, a), n.apply(i, arguments);
      }
      return (a.fn = n), i.$on(r, a), i;
    }),
    (e.prototype.$off = function (r, n) {
      var i = this;
      if (!arguments.length) return (i._events = Object.create(null)), i;
      if (Array.isArray(r)) {
        for (var a = 0, o = r.length; a < o; a++) i.$off(r[a], n);
        return i;
      }
      var f = i._events[r];
      if (!f) return i;
      if (!n) return (i._events[r] = null), i;
      for (var c, h = f.length; h--; )
        if (((c = f[h]), c === n || c.fn === n)) {
          f.splice(h, 1);
          break;
        }
      return i;
    }),
    (e.prototype.$emit = function (r) {
      var n = this,
        i = n._events[r];
      if (i) {
        i = i.length > 1 ? os(i) : i;
        for (var a = os(arguments, 1), o = 'event handler for "' + r + '"', f = 0, c = i.length; f < c; f++) Zr(i[f], n, a, n, o);
      }
      return n;
    });
}
var Sr = null;
function Il(e) {
  var t = Sr;
  return (
    (Sr = e),
    function () {
      Sr = t;
    }
  );
}
function kh(e) {
  var t = e.$options,
    r = t.parent;
  if (r && !t.abstract) {
    for (; r.$options.abstract && r.$parent; ) r = r.$parent;
    r.$children.push(e);
  }
  (e.$parent = r), (e.$root = r ? r.$root : e), (e.$children = []), (e.$refs = {}), (e._watcher = null), (e._inactive = null), (e._directInactive = !1), (e._isMounted = !1), (e._isDestroyed = !1), (e._isBeingDestroyed = !1);
}
function Ph(e) {
  (e.prototype._update = function (t, r) {
    var n = this,
      i = n.$el,
      a = n._vnode,
      o = Il(n);
    (n._vnode = t), a ? (n.$el = n.__patch__(a, t)) : (n.$el = n.__patch__(n.$el, t, r, !1)), o(), i && (i.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
  }),
    (e.prototype.$forceUpdate = function () {
      var t = this;
      t._watcher && t._watcher.update();
    }),
    (e.prototype.$destroy = function () {
      var t = this;
      if (!t._isBeingDestroyed) {
        Pt(t, "beforeDestroy"), (t._isBeingDestroyed = !0);
        var r = t.$parent;
        r && !r._isBeingDestroyed && !t.$options.abstract && Gt(r.$children, t), t._watcher && t._watcher.teardown();
        for (var n = t._watchers.length; n--; ) t._watchers[n].teardown();
        t._data.__ob__ && t._data.__ob__.vmCount--, (t._isDestroyed = !0), t.__patch__(t._vnode, null), Pt(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null);
      }
    });
}
function Ih(e, t, r) {
  (e.$el = t), e.$options.render || (e.$options.render = wr), Pt(e, "beforeMount");
  var n;
  return (
    (n = function () {
      e._update(e._render(), r);
    }),
    new Rt(
      e,
      n,
      ot,
      {
        before: function () {
          e._isMounted && !e._isDestroyed && Pt(e, "beforeUpdate");
        },
      },
      !0
    ),
    (r = !1),
    e.$vnode == null && ((e._isMounted = !0), Pt(e, "mounted")),
    e
  );
}
function Nh(e, t, r, n, i) {
  var a = n.data.scopedSlots,
    o = e.$scopedSlots,
    f = !!((a && !a.$stable) || (o !== Dt && !o.$stable) || (a && e.$scopedSlots.$key !== a.$key) || (!a && e.$scopedSlots.$key)),
    c = !!(i || e.$options._renderChildren || f);
  if (((e.$options._parentVnode = n), (e.$vnode = n), e._vnode && (e._vnode.parent = n), (e.$options._renderChildren = i), (e.$attrs = n.data.attrs || Dt), (e.$listeners = r || Dt), t && e.$options.props)) {
    ir(!1);
    for (var h = e._props, g = e.$options._propKeys || [], b = 0; b < g.length; b++) {
      var w = g[b],
        A = e.$options.props;
      h[w] = Ks(w, A, t, e);
    }
    ir(!0), (e.$options.propsData = t);
  }
  r = r || Dt;
  var S = e.$options._parentListeners;
  (e.$options._parentListeners = r), Pl(e, r, S), c && ((e.$slots = Zs(i, n.context)), e.$forceUpdate());
}
function Nl(e) {
  for (; e && (e = e.$parent); ) if (e._inactive) return !0;
  return !1;
}
function ro(e, t) {
  if (t) {
    if (((e._directInactive = !1), Nl(e))) return;
  } else if (e._directInactive) return;
  if (e._inactive || e._inactive === null) {
    e._inactive = !1;
    for (var r = 0; r < e.$children.length; r++) ro(e.$children[r]);
    Pt(e, "activated");
  }
}
function Rl(e, t) {
  if (!(t && ((e._directInactive = !0), Nl(e))) && !e._inactive) {
    e._inactive = !0;
    for (var r = 0; r < e.$children.length; r++) Rl(e.$children[r]);
    Pt(e, "deactivated");
  }
}
function Pt(e, t) {
  Gn();
  var r = e.$options[t],
    n = t + " hook";
  if (r) for (var i = 0, a = r.length; i < a; i++) Zr(r[i], e, null, e, n);
  e._hasHookEvent && e.$emit("hook:" + t), Xn();
}
var Ut = [],
  no = [],
  Ui = {},
  bs = !1,
  io = !1,
  Gr = 0;
function Rh() {
  (Gr = Ut.length = no.length = 0), (Ui = {}), (bs = io = !1);
}
var Ll = 0,
  _s = Date.now;
if (yt && !un) {
  var Ba = window.performance;
  Ba &&
    typeof Ba.now == "function" &&
    _s() > document.createEvent("Event").timeStamp &&
    (_s = function () {
      return Ba.now();
    });
}
function Lh() {
  (Ll = _s()), (io = !0);
  var e, t;
  for (
    Ut.sort(function (i, a) {
      return i.id - a.id;
    }),
      Gr = 0;
    Gr < Ut.length;
    Gr++
  )
    (e = Ut[Gr]), e.before && e.before(), (t = e.id), (Ui[t] = null), e.run();
  var r = no.slice(),
    n = Ut.slice();
  Rh(), Dh(r), Mh(n), Hi && St.devtools && Hi.emit("flush");
}
function Mh(e) {
  for (var t = e.length; t--; ) {
    var r = e[t],
      n = r.vm;
    n._watcher === r && n._isMounted && !n._isDestroyed && Pt(n, "updated");
  }
}
function $h(e) {
  (e._inactive = !1), no.push(e);
}
function Dh(e) {
  for (var t = 0; t < e.length; t++) (e[t]._inactive = !0), ro(e[t], !0);
}
function jh(e) {
  var t = e.id;
  if (Ui[t] == null) {
    if (((Ui[t] = !0), !io)) Ut.push(e);
    else {
      for (var r = Ut.length - 1; r > Gr && Ut[r].id > e.id; ) r--;
      Ut.splice(r + 1, 0, e);
    }
    bs || ((bs = !0), Js(Lh));
  }
}
var Hh = 0,
  Rt = function (t, r, n, i, a) {
    (this.vm = t),
      a && (t._watcher = this),
      t._watchers.push(this),
      i ? ((this.deep = !!i.deep), (this.user = !!i.user), (this.lazy = !!i.lazy), (this.sync = !!i.sync), (this.before = i.before)) : (this.deep = this.user = this.lazy = this.sync = !1),
      (this.cb = n),
      (this.id = ++Hh),
      (this.active = !0),
      (this.dirty = this.lazy),
      (this.deps = []),
      (this.newDeps = []),
      (this.depIds = new Dn()),
      (this.newDepIds = new Dn()),
      (this.expression = ""),
      typeof r == "function" ? (this.getter = r) : ((this.getter = kp(r)), this.getter || (this.getter = ot)),
      (this.value = this.lazy ? void 0 : this.get());
  };
Rt.prototype.get = function () {
  Gn(this);
  var t,
    r = this.vm;
  try {
    t = this.getter.call(r, r);
  } catch (n) {
    if (this.user) Ir(n, r, 'getter for watcher "' + this.expression + '"');
    else throw n;
  } finally {
    this.deep && qi(t), Xn(), this.cleanupDeps();
  }
  return t;
};
Rt.prototype.addDep = function (t) {
  var r = t.id;
  this.newDepIds.has(r) || (this.newDepIds.add(r), this.newDeps.push(t), this.depIds.has(r) || t.addSub(this));
};
Rt.prototype.cleanupDeps = function () {
  for (var t = this.deps.length; t--; ) {
    var r = this.deps[t];
    this.newDepIds.has(r.id) || r.removeSub(this);
  }
  var n = this.depIds;
  (this.depIds = this.newDepIds), (this.newDepIds = n), this.newDepIds.clear(), (n = this.deps), (this.deps = this.newDeps), (this.newDeps = n), (this.newDeps.length = 0);
};
Rt.prototype.update = function () {
  this.lazy ? (this.dirty = !0) : this.sync ? this.run() : jh(this);
};
Rt.prototype.run = function () {
  if (this.active) {
    var t = this.get();
    if (t !== this.value || et(t) || this.deep) {
      var r = this.value;
      if (((this.value = t), this.user)) {
        var n = 'callback for watcher "' + this.expression + '"';
        Zr(this.cb, this.vm, [t, r], this.vm, n);
      } else this.cb.call(this.vm, t, r);
    }
  }
};
Rt.prototype.evaluate = function () {
  (this.value = this.get()), (this.dirty = !1);
};
Rt.prototype.depend = function () {
  for (var t = this.deps.length; t--; ) this.deps[t].depend();
};
Rt.prototype.teardown = function () {
  if (this.active) {
    this.vm._isBeingDestroyed || Gt(this.vm._watchers, this);
    for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
    this.active = !1;
  }
};
var Vt = { enumerable: !0, configurable: !0, get: ot, set: ot };
function ao(e, t, r) {
  (Vt.get = function () {
    return this[t][r];
  }),
    (Vt.set = function (i) {
      this[t][r] = i;
    }),
    Object.defineProperty(e, r, Vt);
}
function Fh(e) {
  e._watchers = [];
  var t = e.$options;
  t.props && Bh(e, t.props), t.methods && Gh(e, t.methods), t.data ? qh(e) : Ar((e._data = {}), !0), t.computed && Wh(e, t.computed), t.watch && t.watch !== us && Xh(e, t.watch);
}
function Bh(e, t) {
  var r = e.$options.propsData || {},
    n = (e._props = {}),
    i = (e.$options._propKeys = []),
    a = !e.$parent;
  a || ir(!1);
  var o = function (c) {
    i.push(c);
    var h = Ks(c, t, r, e);
    kr(n, c, h), c in e || ao(e, "_props", c);
  };
  for (var f in t) o(f);
  ir(!0);
}
function qh(e) {
  var t = e.$options.data;
  (t = e._data = typeof t == "function" ? zh(t, e) : t || {}), mt(t) || (t = {});
  var r = Object.keys(t),
    n = e.$options.props;
  e.$options.methods;
  for (var i = r.length; i--; ) {
    var a = r[i];
    (n && Ze(n, a)) || Op(a) || ao(e, "_data", a);
  }
  Ar(t, !0);
}
function zh(e, t) {
  Gn();
  try {
    return e.call(t, t);
  } catch (r) {
    return Ir(r, t, "data()"), {};
  } finally {
    Xn();
  }
}
var Uh = { lazy: !0 };
function Wh(e, t) {
  var r = (e._computedWatchers = Object.create(null)),
    n = aa();
  for (var i in t) {
    var a = t[i],
      o = typeof a == "function" ? a : a.get;
    n || (r[i] = new Rt(e, o || ot, ot, Uh)), i in e || Ml(e, i, a);
  }
}
function Ml(e, t, r) {
  var n = !aa();
  typeof r == "function" ? ((Vt.get = n ? Bu(t) : qu(r)), (Vt.set = ot)) : ((Vt.get = r.get ? (n && r.cache !== !1 ? Bu(t) : qu(r.get)) : ot), (Vt.set = r.set || ot)), Object.defineProperty(e, t, Vt);
}
function Bu(e) {
  return function () {
    var r = this._computedWatchers && this._computedWatchers[e];
    if (r) return r.dirty && r.evaluate(), gt.target && r.depend(), r.value;
  };
}
function qu(e) {
  return function () {
    return e.call(this, this);
  };
}
function Gh(e, t) {
  e.$options.props;
  for (var r in t) e[r] = typeof t[r] != "function" ? ot : xp(t[r], e);
}
function Xh(e, t) {
  for (var r in t) {
    var n = t[r];
    if (Array.isArray(n)) for (var i = 0; i < n.length; i++) ws(e, r, n[i]);
    else ws(e, r, n);
  }
}
function ws(e, t, r, n) {
  return mt(r) && ((n = r), (r = r.handler)), typeof r == "string" && (r = e[r]), e.$watch(t, r, n);
}
function Yh(e) {
  var t = {};
  t.get = function () {
    return this._data;
  };
  var r = {};
  (r.get = function () {
    return this._props;
  }),
    Object.defineProperty(e.prototype, "$data", t),
    Object.defineProperty(e.prototype, "$props", r),
    (e.prototype.$set = Ys),
    (e.prototype.$delete = bl),
    (e.prototype.$watch = function (n, i, a) {
      var o = this;
      if (mt(i)) return ws(o, n, i, a);
      (a = a || {}), (a.user = !0);
      var f = new Rt(o, n, i, a);
      if (a.immediate) {
        var c = 'callback for immediate watcher "' + f.expression + '"';
        Gn(), Zr(i, o, [f.value], o, c), Xn();
      }
      return function () {
        f.teardown();
      };
    });
}
var Vh = 0;
function Kh(e) {
  e.prototype._init = function (t) {
    var r = this;
    (r._uid = Vh++), (r._isVue = !0), t && t._isComponent ? Jh(r, t) : (r.$options = Pr(so(r.constructor), t || {}, r)), (r._renderProxy = r), (r._self = r), kh(r), Eh(r), _h(r), Pt(r, "beforeCreate"), Qp(r), Fh(r), Jp(r), Pt(r, "created"), r.$options.el && r.$mount(r.$options.el);
  };
}
function Jh(e, t) {
  var r = (e.$options = Object.create(e.constructor.options)),
    n = t._parentVnode;
  (r.parent = t.parent), (r._parentVnode = n);
  var i = n.componentOptions;
  (r.propsData = i.propsData), (r._parentListeners = i.listeners), (r._renderChildren = i.children), (r._componentTag = i.tag), t.render && ((r.render = t.render), (r.staticRenderFns = t.staticRenderFns));
}
function so(e) {
  var t = e.options;
  if (e.super) {
    var r = so(e.super),
      n = e.superOptions;
    if (r !== n) {
      e.superOptions = r;
      var i = Qh(e);
      i && Re(e.extendOptions, i), (t = e.options = Pr(r, e.extendOptions)), t.name && (t.components[t.name] = e);
    }
  }
  return t;
}
function Qh(e) {
  var t,
    r = e.options,
    n = e.sealedOptions;
  for (var i in r) r[i] !== n[i] && (t || (t = {}), (t[i] = r[i]));
  return t;
}
function Ue(e) {
  this._init(e);
}
Kh(Ue);
Yh(Ue);
Ah(Ue);
Ph(Ue);
wh(Ue);
function Zh(e) {
  e.use = function (t) {
    var r = this._installedPlugins || (this._installedPlugins = []);
    if (r.indexOf(t) > -1) return this;
    var n = os(arguments, 1);
    return n.unshift(this), typeof t.install == "function" ? t.install.apply(t, n) : typeof t == "function" && t.apply(null, n), r.push(t), this;
  };
}
function ev(e) {
  e.mixin = function (t) {
    return (this.options = Pr(this.options, t)), this;
  };
}
function tv(e) {
  e.cid = 0;
  var t = 1;
  e.extend = function (r) {
    r = r || {};
    var n = this,
      i = n.cid,
      a = r._Ctor || (r._Ctor = {});
    if (a[i]) return a[i];
    var o = r.name || n.options.name,
      f = function (h) {
        this._init(h);
      };
    return (
      (f.prototype = Object.create(n.prototype)),
      (f.prototype.constructor = f),
      (f.cid = t++),
      (f.options = Pr(n.options, r)),
      (f.super = n),
      f.options.props && rv(f),
      f.options.computed && nv(f),
      (f.extend = n.extend),
      (f.mixin = n.mixin),
      (f.use = n.use),
      ia.forEach(function (c) {
        f[c] = n[c];
      }),
      o && (f.options.components[o] = f),
      (f.superOptions = n.options),
      (f.extendOptions = r),
      (f.sealedOptions = Re({}, f.options)),
      (a[i] = f),
      f
    );
  };
}
function rv(e) {
  var t = e.options.props;
  for (var r in t) ao(e.prototype, "_props", r);
}
function nv(e) {
  var t = e.options.computed;
  for (var r in t) Ml(e.prototype, r, t[r]);
}
function iv(e) {
  ia.forEach(function (t) {
    e[t] = function (r, n) {
      return n ? (t === "component" && mt(n) && ((n.name = n.name || r), (n = this.options._base.extend(n))), t === "directive" && typeof n == "function" && (n = { bind: n, update: n }), (this.options[t + "s"][r] = n), n) : this.options[t + "s"][r];
    };
  });
}
function zu(e) {
  return e && (e.Ctor.options.name || e.tag);
}
function pi(e, t) {
  return Array.isArray(e) ? e.indexOf(t) > -1 : typeof e == "string" ? e.split(",").indexOf(t) > -1 : gp(e) ? e.test(t) : !1;
}
function Uu(e, t) {
  var r = e.cache,
    n = e.keys,
    i = e._vnode;
  for (var a in r) {
    var o = r[a];
    if (o) {
      var f = o.name;
      f && !t(f) && Ss(r, a, n, i);
    }
  }
}
function Ss(e, t, r, n) {
  var i = e[t];
  i && (!n || i.tag !== n.tag) && i.componentInstance.$destroy(), (e[t] = null), Gt(r, t);
}
var Wu = [String, RegExp, Array],
  av = {
    name: "keep-alive",
    abstract: !0,
    props: { include: Wu, exclude: Wu, max: [String, Number] },
    methods: {
      cacheVNode: function () {
        var t = this,
          r = t.cache,
          n = t.keys,
          i = t.vnodeToCache,
          a = t.keyToCache;
        if (i) {
          var o = i.tag,
            f = i.componentInstance,
            c = i.componentOptions;
          (r[a] = { name: zu(c), tag: o, componentInstance: f }), n.push(a), this.max && n.length > parseInt(this.max) && Ss(r, n[0], n, this._vnode), (this.vnodeToCache = null);
        }
      },
    },
    created: function () {
      (this.cache = Object.create(null)), (this.keys = []);
    },
    destroyed: function () {
      for (var t in this.cache) Ss(this.cache, t, this.keys);
    },
    mounted: function () {
      var t = this;
      this.cacheVNode(),
        this.$watch("include", function (r) {
          Uu(t, function (n) {
            return pi(r, n);
          });
        }),
        this.$watch("exclude", function (r) {
          Uu(t, function (n) {
            return !pi(r, n);
          });
        });
    },
    updated: function () {
      this.cacheVNode();
    },
    render: function () {
      var t = this.$slots.default,
        r = kl(t),
        n = r && r.componentOptions;
      if (n) {
        var i = zu(n),
          a = this,
          o = a.include,
          f = a.exclude;
        if ((o && (!i || !pi(o, i))) || (f && i && pi(f, i))) return r;
        var c = this,
          h = c.cache,
          g = c.keys,
          b = r.key == null ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : r.key;
        h[b] ? ((r.componentInstance = h[b].componentInstance), Gt(g, b), g.push(b)) : ((this.vnodeToCache = r), (this.keyToCache = b)), (r.data.keepAlive = !0);
      }
      return r || (t && t[0]);
    },
  },
  sv = { KeepAlive: av };
function ov(e) {
  var t = {};
  (t.get = function () {
    return St;
  }),
    Object.defineProperty(e, "config", t),
    (e.util = { warn: Np, extend: Re, mergeOptions: Pr, defineReactive: kr }),
    (e.set = Ys),
    (e.delete = bl),
    (e.nextTick = Js),
    (e.observable = function (r) {
      return Ar(r), r;
    }),
    (e.options = Object.create(null)),
    ia.forEach(function (r) {
      e.options[r + "s"] = Object.create(null);
    }),
    (e.options._base = e),
    Re(e.options.components, sv),
    Zh(e),
    ev(e),
    tv(e),
    iv(e);
}
ov(Ue);
Object.defineProperty(Ue.prototype, "$isServer", { get: aa });
Object.defineProperty(Ue.prototype, "$ssrContext", {
  get: function () {
    return this.$vnode && this.$vnode.ssrContext;
  },
});
Object.defineProperty(Ue, "FunctionalRenderContext", { value: eo });
Ue.version = "2.6.14";
var uv = Nt("style,class"),
  fv = Nt("input,textarea,option,select,progress"),
  lv = function (e, t, r) {
    return (r === "value" && fv(e) && t !== "button") || (r === "selected" && e === "option") || (r === "checked" && e === "input") || (r === "muted" && e === "video");
  },
  $l = Nt("contenteditable,draggable,spellcheck"),
  cv = Nt("events,caret,typing,plaintext-only"),
  dv = function (e, t) {
    return Wi(t) || t === "false" ? "false" : e === "contenteditable" && cv(t) ? t : "true";
  },
  pv = Nt(
    "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"
  ),
  Ts = "http://www.w3.org/1999/xlink",
  oo = function (e) {
    return e.charAt(5) === ":" && e.slice(0, 5) === "xlink";
  },
  Dl = function (e) {
    return oo(e) ? e.slice(6, e.length) : "";
  },
  Wi = function (e) {
    return e == null || e === !1;
  };
function hv(e) {
  for (var t = e.data, r = e, n = e; D(n.componentInstance); ) (n = n.componentInstance._vnode), n && n.data && (t = Gu(n.data, t));
  for (; D((r = r.parent)); ) r && r.data && (t = Gu(t, r.data));
  return vv(t.staticClass, t.class);
}
function Gu(e, t) {
  return { staticClass: uo(e.staticClass, t.staticClass), class: D(e.class) ? [e.class, t.class] : t.class };
}
function vv(e, t) {
  return D(e) || D(t) ? uo(e, fo(t)) : "";
}
function uo(e, t) {
  return e ? (t ? e + " " + t : e) : t || "";
}
function fo(e) {
  return Array.isArray(e) ? gv(e) : et(e) ? mv(e) : typeof e == "string" ? e : "";
}
function gv(e) {
  for (var t = "", r, n = 0, i = e.length; n < i; n++) D((r = fo(e[n]))) && r !== "" && (t && (t += " "), (t += r));
  return t;
}
function mv(e) {
  var t = "";
  for (var r in e) e[r] && (t && (t += " "), (t += r));
  return t;
}
var yv = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
  bv = Nt(
    "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
  ),
  lo = Nt("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
  jl = function (e) {
    return bv(e) || lo(e);
  };
function _v(e) {
  if (lo(e)) return "svg";
  if (e === "math") return "math";
}
var hi = Object.create(null);
function wv(e) {
  if (!yt) return !0;
  if (jl(e)) return !1;
  if (((e = e.toLowerCase()), hi[e] != null)) return hi[e];
  var t = document.createElement(e);
  return e.indexOf("-") > -1 ? (hi[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement) : (hi[e] = /HTMLUnknownElement/.test(t.toString()));
}
var Es = Nt("text,number,password,search,email,tel,url");
function Sv(e) {
  if (typeof e == "string") {
    var t = document.querySelector(e);
    return t || document.createElement("div");
  } else return e;
}
function Tv(e, t) {
  var r = document.createElement(e);
  return e !== "select" || (t.data && t.data.attrs && t.data.attrs.multiple !== void 0 && r.setAttribute("multiple", "multiple")), r;
}
function Ev(e, t) {
  return document.createElementNS(yv[e], t);
}
function xv(e) {
  return document.createTextNode(e);
}
function Cv(e) {
  return document.createComment(e);
}
function Ov(e, t, r) {
  e.insertBefore(t, r);
}
function Av(e, t) {
  e.removeChild(t);
}
function kv(e, t) {
  e.appendChild(t);
}
function Pv(e) {
  return e.parentNode;
}
function Iv(e) {
  return e.nextSibling;
}
function Nv(e) {
  return e.tagName;
}
function Rv(e, t) {
  e.textContent = t;
}
function Lv(e, t) {
  e.setAttribute(t, "");
}
var Mv = Object.freeze({ createElement: Tv, createElementNS: Ev, createTextNode: xv, createComment: Cv, insertBefore: Ov, removeChild: Av, appendChild: kv, parentNode: Pv, nextSibling: Iv, tagName: Nv, setTextContent: Rv, setStyleScope: Lv }),
  $v = {
    create: function (t, r) {
      Xr(r);
    },
    update: function (t, r) {
      t.data.ref !== r.data.ref && (Xr(t, !0), Xr(r));
    },
    destroy: function (t) {
      Xr(t, !0);
    },
  };
function Xr(e, t) {
  var r = e.data.ref;
  if (!!D(r)) {
    var n = e.context,
      i = e.componentInstance || e.elm,
      a = n.$refs;
    t ? (Array.isArray(a[r]) ? Gt(a[r], i) : a[r] === i && (a[r] = void 0)) : e.data.refInFor ? (Array.isArray(a[r]) ? a[r].indexOf(i) < 0 && a[r].push(i) : (a[r] = [i])) : (a[r] = i);
  }
}
var _r = new ut("", {}, []),
  Cn = ["create", "activate", "update", "remove", "destroy"];
function mr(e, t) {
  return e.key === t.key && e.asyncFactory === t.asyncFactory && ((e.tag === t.tag && e.isComment === t.isComment && D(e.data) === D(t.data) && Dv(e, t)) || (Fe(e.isAsyncPlaceholder) && _e(t.asyncFactory.error)));
}
function Dv(e, t) {
  if (e.tag !== "input") return !0;
  var r,
    n = D((r = e.data)) && D((r = r.attrs)) && r.type,
    i = D((r = t.data)) && D((r = r.attrs)) && r.type;
  return n === i || (Es(n) && Es(i));
}
function jv(e, t, r) {
  var n,
    i,
    a = {};
  for (n = t; n <= r; ++n) (i = e[n].key), D(i) && (a[i] = n);
  return a;
}
function Hv(e) {
  var t,
    r,
    n = {},
    i = e.modules,
    a = e.nodeOps;
  for (t = 0; t < Cn.length; ++t) for (n[Cn[t]] = [], r = 0; r < i.length; ++r) D(i[r][Cn[t]]) && n[Cn[t]].push(i[r][Cn[t]]);
  function o(O) {
    return new ut(a.tagName(O).toLowerCase(), {}, [], void 0, O);
  }
  function f(O, R) {
    function z() {
      --z.listeners === 0 && c(O);
    }
    return (z.listeners = R), z;
  }
  function c(O) {
    var R = a.parentNode(O);
    D(R) && a.removeChild(R, O);
  }
  function h(O, R, z, re, le, be, fe) {
    if ((D(O.elm) && D(be) && (O = be[fe] = fs(O)), (O.isRootInsert = !le), !g(O, R, z, re))) {
      var ge = O.data,
        xe = O.children,
        V = O.tag;
      D(V) ? ((O.elm = O.ns ? a.createElementNS(O.ns, V) : a.createElement(V, O)), N(O), S(O, xe, R), D(ge) && L(O, R), A(z, O.elm, re)) : Fe(O.isComment) ? ((O.elm = a.createComment(O.text)), A(z, O.elm, re)) : ((O.elm = a.createTextNode(O.text)), A(z, O.elm, re));
    }
  }
  function g(O, R, z, re) {
    var le = O.data;
    if (D(le)) {
      var be = D(O.componentInstance) && le.keepAlive;
      if ((D((le = le.hook)) && D((le = le.init)) && le(O, !1), D(O.componentInstance))) return b(O, R), A(z, O.elm, re), Fe(be) && w(O, R, z, re), !0;
    }
  }
  function b(O, R) {
    D(O.data.pendingInsert) && (R.push.apply(R, O.data.pendingInsert), (O.data.pendingInsert = null)), (O.elm = O.componentInstance.$el), T(O) ? (L(O, R), N(O)) : (Xr(O), R.push(O));
  }
  function w(O, R, z, re) {
    for (var le, be = O; be.componentInstance; )
      if (((be = be.componentInstance._vnode), D((le = be.data)) && D((le = le.transition)))) {
        for (le = 0; le < n.activate.length; ++le) n.activate[le](_r, be);
        R.push(be);
        break;
      }
    A(z, O.elm, re);
  }
  function A(O, R, z) {
    D(O) && (D(z) ? a.parentNode(z) === O && a.insertBefore(O, R, z) : a.appendChild(O, R));
  }
  function S(O, R, z) {
    if (Array.isArray(R)) for (var re = 0; re < R.length; ++re) h(R[re], z, O.elm, null, !0, R, re);
    else Un(O.text) && a.appendChild(O.elm, a.createTextNode(String(O.text)));
  }
  function T(O) {
    for (; O.componentInstance; ) O = O.componentInstance._vnode;
    return D(O.tag);
  }
  function L(O, R) {
    for (var z = 0; z < n.create.length; ++z) n.create[z](_r, O);
    (t = O.data.hook), D(t) && (D(t.create) && t.create(_r, O), D(t.insert) && R.push(O));
  }
  function N(O) {
    var R;
    if (D((R = O.fnScopeId))) a.setStyleScope(O.elm, R);
    else for (var z = O; z; ) D((R = z.context)) && D((R = R.$options._scopeId)) && a.setStyleScope(O.elm, R), (z = z.parent);
    D((R = Sr)) && R !== O.context && R !== O.fnContext && D((R = R.$options._scopeId)) && a.setStyleScope(O.elm, R);
  }
  function U(O, R, z, re, le, be) {
    for (; re <= le; ++re) h(z[re], be, O, R, !1, z, re);
  }
  function H(O) {
    var R,
      z,
      re = O.data;
    if (D(re)) for (D((R = re.hook)) && D((R = R.destroy)) && R(O), R = 0; R < n.destroy.length; ++R) n.destroy[R](O);
    if (D((R = O.children))) for (z = 0; z < O.children.length; ++z) H(O.children[z]);
  }
  function q(O, R, z) {
    for (; R <= z; ++R) {
      var re = O[R];
      D(re) && (D(re.tag) ? (ie(re), H(re)) : c(re.elm));
    }
  }
  function ie(O, R) {
    if (D(R) || D(O.data)) {
      var z,
        re = n.remove.length + 1;
      for (D(R) ? (R.listeners += re) : (R = f(O.elm, re)), D((z = O.componentInstance)) && D((z = z._vnode)) && D(z.data) && ie(z, R), z = 0; z < n.remove.length; ++z) n.remove[z](O, R);
      D((z = O.data.hook)) && D((z = z.remove)) ? z(O, R) : R();
    } else c(O.elm);
  }
  function p(O, R, z, re, le) {
    for (var be = 0, fe = 0, ge = R.length - 1, xe = R[0], V = R[ge], K = z.length - 1, ee = z[0], ce = z[K], de, Te, Me, bt, tt = !le; be <= ge && fe <= K; )
      _e(xe)
        ? (xe = R[++be])
        : _e(V)
        ? (V = R[--ge])
        : mr(xe, ee)
        ? (J(xe, ee, re, z, fe), (xe = R[++be]), (ee = z[++fe]))
        : mr(V, ce)
        ? (J(V, ce, re, z, K), (V = R[--ge]), (ce = z[--K]))
        : mr(xe, ce)
        ? (J(xe, ce, re, z, K), tt && a.insertBefore(O, xe.elm, a.nextSibling(V.elm)), (xe = R[++be]), (ce = z[--K]))
        : mr(V, ee)
        ? (J(V, ee, re, z, fe), tt && a.insertBefore(O, V.elm, xe.elm), (V = R[--ge]), (ee = z[++fe]))
        : (_e(de) && (de = jv(R, be, ge)), (Te = D(ee.key) ? de[ee.key] : se(ee, R, be, ge)), _e(Te) ? h(ee, re, O, xe.elm, !1, z, fe) : ((Me = R[Te]), mr(Me, ee) ? (J(Me, ee, re, z, fe), (R[Te] = void 0), tt && a.insertBefore(O, Me.elm, xe.elm)) : h(ee, re, O, xe.elm, !1, z, fe)), (ee = z[++fe]));
    be > ge ? ((bt = _e(z[K + 1]) ? null : z[K + 1].elm), U(O, bt, z, fe, K, re)) : fe > K && q(R, be, ge);
  }
  function se(O, R, z, re) {
    for (var le = z; le < re; le++) {
      var be = R[le];
      if (D(be) && mr(O, be)) return le;
    }
  }
  function J(O, R, z, re, le, be) {
    if (O !== R) {
      D(R.elm) && D(re) && (R = re[le] = fs(R));
      var fe = (R.elm = O.elm);
      if (Fe(O.isAsyncPlaceholder)) {
        D(R.asyncFactory.resolved) ? ae(O.elm, R, z) : (R.isAsyncPlaceholder = !0);
        return;
      }
      if (Fe(R.isStatic) && Fe(O.isStatic) && R.key === O.key && (Fe(R.isCloned) || Fe(R.isOnce))) {
        R.componentInstance = O.componentInstance;
        return;
      }
      var ge,
        xe = R.data;
      D(xe) && D((ge = xe.hook)) && D((ge = ge.prepatch)) && ge(O, R);
      var V = O.children,
        K = R.children;
      if (D(xe) && T(R)) {
        for (ge = 0; ge < n.update.length; ++ge) n.update[ge](O, R);
        D((ge = xe.hook)) && D((ge = ge.update)) && ge(O, R);
      }
      _e(R.text) ? (D(V) && D(K) ? V !== K && p(fe, V, K, z, be) : D(K) ? (D(O.text) && a.setTextContent(fe, ""), U(fe, null, K, 0, K.length - 1, z)) : D(V) ? q(V, 0, V.length - 1) : D(O.text) && a.setTextContent(fe, "")) : O.text !== R.text && a.setTextContent(fe, R.text),
        D(xe) && D((ge = xe.hook)) && D((ge = ge.postpatch)) && ge(O, R);
    }
  }
  function we(O, R, z) {
    if (Fe(z) && D(O.parent)) O.parent.data.pendingInsert = R;
    else for (var re = 0; re < R.length; ++re) R[re].data.hook.insert(R[re]);
  }
  var Y = Nt("attrs,class,staticClass,staticStyle,key");
  function ae(O, R, z, re) {
    var le,
      be = R.tag,
      fe = R.data,
      ge = R.children;
    if (((re = re || (fe && fe.pre)), (R.elm = O), Fe(R.isComment) && D(R.asyncFactory))) return (R.isAsyncPlaceholder = !0), !0;
    if (D(fe) && (D((le = fe.hook)) && D((le = le.init)) && le(R, !0), D((le = R.componentInstance)))) return b(R, z), !0;
    if (D(be)) {
      if (D(ge))
        if (!O.hasChildNodes()) S(R, ge, z);
        else if (D((le = fe)) && D((le = le.domProps)) && D((le = le.innerHTML))) {
          if (le !== O.innerHTML) return !1;
        } else {
          for (var xe = !0, V = O.firstChild, K = 0; K < ge.length; K++) {
            if (!V || !ae(V, ge[K], z, re)) {
              xe = !1;
              break;
            }
            V = V.nextSibling;
          }
          if (!xe || V) return !1;
        }
      if (D(fe)) {
        var ee = !1;
        for (var ce in fe)
          if (!Y(ce)) {
            (ee = !0), L(R, z);
            break;
          }
        !ee && fe.class && qi(fe.class);
      }
    } else O.data !== R.text && (O.data = R.text);
    return !0;
  }
  return function (R, z, re, le) {
    if (_e(z)) {
      D(R) && H(R);
      return;
    }
    var be = !1,
      fe = [];
    if (_e(R)) (be = !0), h(z, fe);
    else {
      var ge = D(R.nodeType);
      if (!ge && mr(R, z)) J(R, z, fe, null, null, le);
      else {
        if (ge) {
          if ((R.nodeType === 1 && R.hasAttribute(Eu) && (R.removeAttribute(Eu), (re = !0)), Fe(re) && ae(R, z, fe))) return we(z, fe, !0), R;
          R = o(R);
        }
        var xe = R.elm,
          V = a.parentNode(xe);
        if ((h(z, fe, xe._leaveCb ? null : V, a.nextSibling(xe)), D(z.parent)))
          for (var K = z.parent, ee = T(z); K; ) {
            for (var ce = 0; ce < n.destroy.length; ++ce) n.destroy[ce](K);
            if (((K.elm = z.elm), ee)) {
              for (var de = 0; de < n.create.length; ++de) n.create[de](_r, K);
              var Te = K.data.hook.insert;
              if (Te.merged) for (var Me = 1; Me < Te.fns.length; Me++) Te.fns[Me]();
            } else Xr(K);
            K = K.parent;
          }
        D(V) ? q([R], 0, 0) : D(R.tag) && H(R);
      }
    }
    return we(z, fe, be), z.elm;
  };
}
var Fv = {
  create: qa,
  update: qa,
  destroy: function (t) {
    qa(t, _r);
  },
};
function qa(e, t) {
  (e.data.directives || t.data.directives) && Bv(e, t);
}
function Bv(e, t) {
  var r = e === _r,
    n = t === _r,
    i = Xu(e.data.directives, e.context),
    a = Xu(t.data.directives, t.context),
    o = [],
    f = [],
    c,
    h,
    g;
  for (c in a) (h = i[c]), (g = a[c]), h ? ((g.oldValue = h.value), (g.oldArg = h.arg), On(g, "update", t, e), g.def && g.def.componentUpdated && f.push(g)) : (On(g, "bind", t, e), g.def && g.def.inserted && o.push(g));
  if (o.length) {
    var b = function () {
      for (var w = 0; w < o.length; w++) On(o[w], "inserted", t, e);
    };
    r ? Jt(t, "insert", b) : b();
  }
  if (
    (f.length &&
      Jt(t, "postpatch", function () {
        for (var w = 0; w < f.length; w++) On(f[w], "componentUpdated", t, e);
      }),
    !r)
  )
    for (c in i) a[c] || On(i[c], "unbind", e, e, n);
}
var qv = Object.create(null);
function Xu(e, t) {
  var r = Object.create(null);
  if (!e) return r;
  var n, i;
  for (n = 0; n < e.length; n++) (i = e[n]), i.modifiers || (i.modifiers = qv), (r[zv(i)] = i), (i.def = Vs(t.$options, "directives", i.name));
  return r;
}
function zv(e) {
  return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
}
function On(e, t, r, n, i) {
  var a = e.def && e.def[t];
  if (a)
    try {
      a(r.elm, e, r, n, i);
    } catch (o) {
      Ir(o, r.context, "directive " + e.name + " " + t + " hook");
    }
}
var Uv = [$v, Fv];
function Yu(e, t) {
  var r = t.componentOptions;
  if (!(D(r) && r.Ctor.options.inheritAttrs === !1) && !(_e(e.data.attrs) && _e(t.data.attrs))) {
    var n,
      i,
      a,
      o = t.elm,
      f = e.data.attrs || {},
      c = t.data.attrs || {};
    D(c.__ob__) && (c = t.data.attrs = Re({}, c));
    for (n in c) (i = c[n]), (a = f[n]), a !== i && Vu(o, n, i, t.data.pre);
    (un || Gs) && c.value !== f.value && Vu(o, "value", c.value);
    for (n in f) _e(c[n]) && (oo(n) ? o.removeAttributeNS(Ts, Dl(n)) : $l(n) || o.removeAttribute(n));
  }
}
function Vu(e, t, r, n) {
  n || e.tagName.indexOf("-") > -1
    ? Ku(e, t, r)
    : pv(t)
    ? Wi(r)
      ? e.removeAttribute(t)
      : ((r = t === "allowfullscreen" && e.tagName === "EMBED" ? "true" : t), e.setAttribute(t, r))
    : $l(t)
    ? e.setAttribute(t, dv(t, r))
    : oo(t)
    ? Wi(r)
      ? e.removeAttributeNS(Ts, Dl(t))
      : e.setAttributeNS(Ts, t, r)
    : Ku(e, t, r);
}
function Ku(e, t, r) {
  if (Wi(r)) e.removeAttribute(t);
  else {
    if (un && !fn && e.tagName === "TEXTAREA" && t === "placeholder" && r !== "" && !e.__ieph) {
      var n = function (i) {
        i.stopImmediatePropagation(), e.removeEventListener("input", n);
      };
      e.addEventListener("input", n), (e.__ieph = !0);
    }
    e.setAttribute(t, r);
  }
}
var Wv = { create: Yu, update: Yu };
function Ju(e, t) {
  var r = t.elm,
    n = t.data,
    i = e.data;
  if (!(_e(n.staticClass) && _e(n.class) && (_e(i) || (_e(i.staticClass) && _e(i.class))))) {
    var a = hv(t),
      o = r._transitionClasses;
    D(o) && (a = uo(a, fo(o))), a !== r._prevClass && (r.setAttribute("class", a), (r._prevClass = a));
  }
}
var Gv = { create: Ju, update: Ju },
  za = "__r",
  Ua = "__c";
function Xv(e) {
  if (D(e[za])) {
    var t = un ? "change" : "input";
    (e[t] = [].concat(e[za], e[t] || [])), delete e[za];
  }
  D(e[Ua]) && ((e.change = [].concat(e[Ua], e.change || [])), delete e[Ua]);
}
var Fn;
function Yv(e, t, r) {
  var n = Fn;
  return function i() {
    var a = t.apply(null, arguments);
    a !== null && Hl(e, i, r, n);
  };
}
var Vv = ps && !(xu && Number(xu[1]) <= 53);
function Kv(e, t, r, n) {
  if (Vv) {
    var i = Ll,
      a = t;
    t = a._wrapper = function (o) {
      if (o.target === o.currentTarget || o.timeStamp >= i || o.timeStamp <= 0 || o.target.ownerDocument !== document) return a.apply(this, arguments);
    };
  }
  Fn.addEventListener(e, t, gl ? { capture: r, passive: n } : r);
}
function Hl(e, t, r, n) {
  (n || Fn).removeEventListener(e, t._wrapper || t, r);
}
function Qu(e, t) {
  if (!(_e(e.data.on) && _e(t.data.on))) {
    var r = t.data.on || {},
      n = e.data.on || {};
    (Fn = t.elm), Xv(r), wl(r, n, Kv, Hl, Yv, t.context), (Fn = void 0);
  }
}
var Jv = { create: Qu, update: Qu },
  vi;
function Zu(e, t) {
  if (!(_e(e.data.domProps) && _e(t.data.domProps))) {
    var r,
      n,
      i = t.elm,
      a = e.data.domProps || {},
      o = t.data.domProps || {};
    D(o.__ob__) && (o = t.data.domProps = Re({}, o));
    for (r in a) r in o || (i[r] = "");
    for (r in o) {
      if (((n = o[r]), r === "textContent" || r === "innerHTML")) {
        if ((t.children && (t.children.length = 0), n === a[r])) continue;
        i.childNodes.length === 1 && i.removeChild(i.childNodes[0]);
      }
      if (r === "value" && i.tagName !== "PROGRESS") {
        i._value = n;
        var f = _e(n) ? "" : String(n);
        Qv(i, f) && (i.value = f);
      } else if (r === "innerHTML" && lo(i.tagName) && _e(i.innerHTML)) {
        (vi = vi || document.createElement("div")), (vi.innerHTML = "<svg>" + n + "</svg>");
        for (var c = vi.firstChild; i.firstChild; ) i.removeChild(i.firstChild);
        for (; c.firstChild; ) i.appendChild(c.firstChild);
      } else if (n !== a[r])
        try {
          i[r] = n;
        } catch {}
    }
  }
}
function Qv(e, t) {
  return !e.composing && (e.tagName === "OPTION" || Zv(e, t) || eg(e, t));
}
function Zv(e, t) {
  var r = !0;
  try {
    r = document.activeElement !== e;
  } catch {}
  return r && e.value !== t;
}
function eg(e, t) {
  var r = e.value,
    n = e._vModifiers;
  if (D(n)) {
    if (n.number) return $n(r) !== $n(t);
    if (n.trim) return r.trim() !== t.trim();
  }
  return r !== t;
}
var tg = { create: Zu, update: Zu },
  rg = Rr(function (e) {
    var t = {},
      r = /;(?![^(]*\))/g,
      n = /:(.+)/;
    return (
      e.split(r).forEach(function (i) {
        if (i) {
          var a = i.split(n);
          a.length > 1 && (t[a[0].trim()] = a[1].trim());
        }
      }),
      t
    );
  });
function Wa(e) {
  var t = Fl(e.style);
  return e.staticStyle ? Re(e.staticStyle, t) : t;
}
function Fl(e) {
  return Array.isArray(e) ? cl(e) : typeof e == "string" ? rg(e) : e;
}
function ng(e, t) {
  var r = {},
    n;
  if (t) for (var i = e; i.componentInstance; ) (i = i.componentInstance._vnode), i && i.data && (n = Wa(i.data)) && Re(r, n);
  (n = Wa(e.data)) && Re(r, n);
  for (var a = e; (a = a.parent); ) a.data && (n = Wa(a.data)) && Re(r, n);
  return r;
}
var ig = /^--/,
  ef = /\s*!important$/,
  tf = function (e, t, r) {
    if (ig.test(t)) e.style.setProperty(t, r);
    else if (ef.test(r)) e.style.setProperty(Wn(t), r.replace(ef, ""), "important");
    else {
      var n = ag(t);
      if (Array.isArray(r)) for (var i = 0, a = r.length; i < a; i++) e.style[n] = r[i];
      else e.style[n] = r;
    }
  },
  rf = ["Webkit", "Moz", "ms"],
  gi,
  ag = Rr(function (e) {
    if (((gi = gi || document.createElement("div").style), (e = Cr(e)), e !== "filter" && e in gi)) return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < rf.length; r++) {
      var n = rf[r] + t;
      if (n in gi) return n;
    }
  });
function nf(e, t) {
  var r = t.data,
    n = e.data;
  if (!(_e(r.staticStyle) && _e(r.style) && _e(n.staticStyle) && _e(n.style))) {
    var i,
      a,
      o = t.elm,
      f = n.staticStyle,
      c = n.normalizedStyle || n.style || {},
      h = f || c,
      g = Fl(t.data.style) || {};
    t.data.normalizedStyle = D(g.__ob__) ? Re({}, g) : g;
    var b = ng(t, !0);
    for (a in h) _e(b[a]) && tf(o, a, "");
    for (a in b) (i = b[a]), i !== h[a] && tf(o, a, i == null ? "" : i);
  }
}
var sg = { create: nf, update: nf },
  Bl = /\s+/;
function ql(e, t) {
  if (!(!t || !(t = t.trim())))
    if (e.classList)
      t.indexOf(" ") > -1
        ? t.split(Bl).forEach(function (n) {
            return e.classList.add(n);
          })
        : e.classList.add(t);
    else {
      var r = " " + (e.getAttribute("class") || "") + " ";
      r.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (r + t).trim());
    }
}
function zl(e, t) {
  if (!(!t || !(t = t.trim())))
    if (e.classList)
      t.indexOf(" ") > -1
        ? t.split(Bl).forEach(function (i) {
            return e.classList.remove(i);
          })
        : e.classList.remove(t),
        e.classList.length || e.removeAttribute("class");
    else {
      for (var r = " " + (e.getAttribute("class") || "") + " ", n = " " + t + " "; r.indexOf(n) >= 0; ) r = r.replace(n, " ");
      (r = r.trim()), r ? e.setAttribute("class", r) : e.removeAttribute("class");
    }
}
function Ul(e) {
  if (!!e) {
    if (typeof e == "object") {
      var t = {};
      return e.css !== !1 && Re(t, af(e.name || "v")), Re(t, e), t;
    } else if (typeof e == "string") return af(e);
  }
}
var af = Rr(function (e) {
    return { enterClass: e + "-enter", enterToClass: e + "-enter-to", enterActiveClass: e + "-enter-active", leaveClass: e + "-leave", leaveToClass: e + "-leave-to", leaveActiveClass: e + "-leave-active" };
  }),
  Wl = yt && !fn,
  Ur = "transition",
  Ga = "animation",
  Pi = "transition",
  Gi = "transitionend",
  xs = "animation",
  Gl = "animationend";
Wl && (window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0 && ((Pi = "WebkitTransition"), (Gi = "webkitTransitionEnd")), window.onanimationend === void 0 && window.onwebkitanimationend !== void 0 && ((xs = "WebkitAnimation"), (Gl = "webkitAnimationEnd")));
var sf = yt
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : function (e) {
      return e();
    };
function Xl(e) {
  sf(function () {
    sf(e);
  });
}
function Tr(e, t) {
  var r = e._transitionClasses || (e._transitionClasses = []);
  r.indexOf(t) < 0 && (r.push(t), ql(e, t));
}
function Wt(e, t) {
  e._transitionClasses && Gt(e._transitionClasses, t), zl(e, t);
}
function Yl(e, t, r) {
  var n = Vl(e, t),
    i = n.type,
    a = n.timeout,
    o = n.propCount;
  if (!i) return r();
  var f = i === Ur ? Gi : Gl,
    c = 0,
    h = function () {
      e.removeEventListener(f, g), r();
    },
    g = function (b) {
      b.target === e && ++c >= o && h();
    };
  setTimeout(function () {
    c < o && h();
  }, a + 1),
    e.addEventListener(f, g);
}
var og = /\b(transform|all)(,|$)/;
function Vl(e, t) {
  var r = window.getComputedStyle(e),
    n = (r[Pi + "Delay"] || "").split(", "),
    i = (r[Pi + "Duration"] || "").split(", "),
    a = of(n, i),
    o = (r[xs + "Delay"] || "").split(", "),
    f = (r[xs + "Duration"] || "").split(", "),
    c = of(o, f),
    h,
    g = 0,
    b = 0;
  t === Ur ? a > 0 && ((h = Ur), (g = a), (b = i.length)) : t === Ga ? c > 0 && ((h = Ga), (g = c), (b = f.length)) : ((g = Math.max(a, c)), (h = g > 0 ? (a > c ? Ur : Ga) : null), (b = h ? (h === Ur ? i.length : f.length) : 0));
  var w = h === Ur && og.test(r[Pi + "Property"]);
  return { type: h, timeout: g, propCount: b, hasTransform: w };
}
function of(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max.apply(
    null,
    t.map(function (r, n) {
      return uf(r) + uf(e[n]);
    })
  );
}
function uf(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Cs(e, t) {
  var r = e.elm;
  D(r._leaveCb) && ((r._leaveCb.cancelled = !0), r._leaveCb());
  var n = Ul(e.data.transition);
  if (!_e(n) && !(D(r._enterCb) || r.nodeType !== 1)) {
    for (
      var i = n.css,
        a = n.type,
        o = n.enterClass,
        f = n.enterToClass,
        c = n.enterActiveClass,
        h = n.appearClass,
        g = n.appearToClass,
        b = n.appearActiveClass,
        w = n.beforeEnter,
        A = n.enter,
        S = n.afterEnter,
        T = n.enterCancelled,
        L = n.beforeAppear,
        N = n.appear,
        U = n.afterAppear,
        H = n.appearCancelled,
        q = n.duration,
        ie = Sr,
        p = Sr.$vnode;
      p && p.parent;

    )
      (ie = p.context), (p = p.parent);
    var se = !ie._isMounted || !e.isRootInsert;
    if (!(se && !N && N !== "")) {
      var J = se && h ? h : o,
        we = se && b ? b : c,
        Y = se && g ? g : f,
        ae = (se && L) || w,
        O = se && typeof N == "function" ? N : A,
        R = (se && U) || S,
        z = (se && H) || T,
        re = $n(et(q) ? q.enter : q),
        le = i !== !1 && !fn,
        be = co(O),
        fe = (r._enterCb = ji(function () {
          le && (Wt(r, Y), Wt(r, we)), fe.cancelled ? (le && Wt(r, J), z && z(r)) : R && R(r), (r._enterCb = null);
        }));
      e.data.show ||
        Jt(e, "insert", function () {
          var ge = r.parentNode,
            xe = ge && ge._pending && ge._pending[e.key];
          xe && xe.tag === e.tag && xe.elm._leaveCb && xe.elm._leaveCb(), O && O(r, fe);
        }),
        ae && ae(r),
        le &&
          (Tr(r, J),
          Tr(r, we),
          Xl(function () {
            Wt(r, J), fe.cancelled || (Tr(r, Y), be || (Jl(re) ? setTimeout(fe, re) : Yl(r, a, fe)));
          })),
        e.data.show && (t && t(), O && O(r, fe)),
        !le && !be && fe();
    }
  }
}
function Kl(e, t) {
  var r = e.elm;
  D(r._enterCb) && ((r._enterCb.cancelled = !0), r._enterCb());
  var n = Ul(e.data.transition);
  if (_e(n) || r.nodeType !== 1) return t();
  if (D(r._leaveCb)) return;
  var i = n.css,
    a = n.type,
    o = n.leaveClass,
    f = n.leaveToClass,
    c = n.leaveActiveClass,
    h = n.beforeLeave,
    g = n.leave,
    b = n.afterLeave,
    w = n.leaveCancelled,
    A = n.delayLeave,
    S = n.duration,
    T = i !== !1 && !fn,
    L = co(g),
    N = $n(et(S) ? S.leave : S),
    U = (r._leaveCb = ji(function () {
      r.parentNode && r.parentNode._pending && (r.parentNode._pending[e.key] = null), T && (Wt(r, f), Wt(r, c)), U.cancelled ? (T && Wt(r, o), w && w(r)) : (t(), b && b(r)), (r._leaveCb = null);
    }));
  A ? A(H) : H();
  function H() {
    U.cancelled ||
      (!e.data.show && r.parentNode && ((r.parentNode._pending || (r.parentNode._pending = {}))[e.key] = e),
      h && h(r),
      T &&
        (Tr(r, o),
        Tr(r, c),
        Xl(function () {
          Wt(r, o), U.cancelled || (Tr(r, f), L || (Jl(N) ? setTimeout(U, N) : Yl(r, a, U)));
        })),
      g && g(r, U),
      !T && !L && U());
  }
}
function Jl(e) {
  return typeof e == "number" && !isNaN(e);
}
function co(e) {
  if (_e(e)) return !1;
  var t = e.fns;
  return D(t) ? co(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
}
function ff(e, t) {
  t.data.show !== !0 && Cs(t);
}
var ug = yt
    ? {
        create: ff,
        activate: ff,
        remove: function (t, r) {
          t.data.show !== !0 ? Kl(t, r) : r();
        },
      }
    : {},
  fg = [Wv, Gv, Jv, tg, sg, ug],
  lg = fg.concat(Uv),
  cg = Hv({ nodeOps: Mv, modules: lg });
fn &&
  document.addEventListener("selectionchange", function () {
    var e = document.activeElement;
    e && e.vmodel && po(e, "input");
  });
var Ql = {
  inserted: function (t, r, n, i) {
    n.tag === "select"
      ? (i.elm && !i.elm._vOptions
          ? Jt(n, "postpatch", function () {
              Ql.componentUpdated(t, r, n);
            })
          : lf(t, r, n.context),
        (t._vOptions = [].map.call(t.options, Xi)))
      : (n.tag === "textarea" || Es(t.type)) && ((t._vModifiers = r.modifiers), r.modifiers.lazy || (t.addEventListener("compositionstart", dg), t.addEventListener("compositionend", pf), t.addEventListener("change", pf), fn && (t.vmodel = !0)));
  },
  componentUpdated: function (t, r, n) {
    if (n.tag === "select") {
      lf(t, r, n.context);
      var i = t._vOptions,
        a = (t._vOptions = [].map.call(t.options, Xi));
      if (
        a.some(function (f, c) {
          return !Or(f, i[c]);
        })
      ) {
        var o = t.multiple
          ? r.value.some(function (f) {
              return df(f, a);
            })
          : r.value !== r.oldValue && df(r.value, a);
        o && po(t, "change");
      }
    }
  },
};
function lf(e, t, r) {
  cf(e, t),
    (un || Gs) &&
      setTimeout(function () {
        cf(e, t);
      }, 0);
}
function cf(e, t, r) {
  var n = t.value,
    i = e.multiple;
  if (!(i && !Array.isArray(n))) {
    for (var a, o, f = 0, c = e.options.length; f < c; f++)
      if (((o = e.options[f]), i)) (a = pl(n, Xi(o)) > -1), o.selected !== a && (o.selected = a);
      else if (Or(Xi(o), n)) {
        e.selectedIndex !== f && (e.selectedIndex = f);
        return;
      }
    i || (e.selectedIndex = -1);
  }
}
function df(e, t) {
  return t.every(function (r) {
    return !Or(r, e);
  });
}
function Xi(e) {
  return "_value" in e ? e._value : e.value;
}
function dg(e) {
  e.target.composing = !0;
}
function pf(e) {
  !e.target.composing || ((e.target.composing = !1), po(e.target, "input"));
}
function po(e, t) {
  var r = document.createEvent("HTMLEvents");
  r.initEvent(t, !0, !0), e.dispatchEvent(r);
}
function Os(e) {
  return e.componentInstance && (!e.data || !e.data.transition) ? Os(e.componentInstance._vnode) : e;
}
var pg = {
    bind: function (t, r, n) {
      var i = r.value;
      n = Os(n);
      var a = n.data && n.data.transition,
        o = (t.__vOriginalDisplay = t.style.display === "none" ? "" : t.style.display);
      i && a
        ? ((n.data.show = !0),
          Cs(n, function () {
            t.style.display = o;
          }))
        : (t.style.display = i ? o : "none");
    },
    update: function (t, r, n) {
      var i = r.value,
        a = r.oldValue;
      if (!i != !a) {
        n = Os(n);
        var o = n.data && n.data.transition;
        o
          ? ((n.data.show = !0),
            i
              ? Cs(n, function () {
                  t.style.display = t.__vOriginalDisplay;
                })
              : Kl(n, function () {
                  t.style.display = "none";
                }))
          : (t.style.display = i ? t.__vOriginalDisplay : "none");
      }
    },
    unbind: function (t, r, n, i, a) {
      a || (t.style.display = t.__vOriginalDisplay);
    },
  },
  hg = { model: Ql, show: pg },
  Zl = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object],
  };
function As(e) {
  var t = e && e.componentOptions;
  return t && t.Ctor.options.abstract ? As(kl(t.children)) : e;
}
function ec(e) {
  var t = {},
    r = e.$options;
  for (var n in r.propsData) t[n] = e[n];
  var i = r._parentListeners;
  for (var a in i) t[Cr(a)] = i[a];
  return t;
}
function hf(e, t) {
  if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", { props: t.componentOptions.propsData });
}
function vg(e) {
  for (; (e = e.parent); ) if (e.data.transition) return !0;
}
function gg(e, t) {
  return t.key === e.key && t.tag === e.tag;
}
var mg = function (e) {
    return e.tag || jn(e);
  },
  yg = function (e) {
    return e.name === "show";
  },
  bg = {
    name: "transition",
    props: Zl,
    abstract: !0,
    render: function (t) {
      var r = this,
        n = this.$slots.default;
      if (!!n && ((n = n.filter(mg)), !!n.length)) {
        var i = this.mode,
          a = n[0];
        if (vg(this.$vnode)) return a;
        var o = As(a);
        if (!o) return a;
        if (this._leaving) return hf(t, a);
        var f = "__transition-" + this._uid + "-";
        o.key = o.key == null ? (o.isComment ? f + "comment" : f + o.tag) : Un(o.key) ? (String(o.key).indexOf(f) === 0 ? o.key : f + o.key) : o.key;
        var c = ((o.data || (o.data = {})).transition = ec(this)),
          h = this._vnode,
          g = As(h);
        if ((o.data.directives && o.data.directives.some(yg) && (o.data.show = !0), g && g.data && !gg(o, g) && !jn(g) && !(g.componentInstance && g.componentInstance._vnode.isComment))) {
          var b = (g.data.transition = Re({}, c));
          if (i === "out-in")
            return (
              (this._leaving = !0),
              Jt(b, "afterLeave", function () {
                (r._leaving = !1), r.$forceUpdate();
              }),
              hf(t, a)
            );
          if (i === "in-out") {
            if (jn(o)) return h;
            var w,
              A = function () {
                w();
              };
            Jt(c, "afterEnter", A),
              Jt(c, "enterCancelled", A),
              Jt(b, "delayLeave", function (S) {
                w = S;
              });
          }
        }
        return a;
      }
    },
  },
  tc = Re({ tag: String, moveClass: String }, Zl);
delete tc.mode;
var _g = {
  props: tc,
  beforeMount: function () {
    var t = this,
      r = this._update;
    this._update = function (n, i) {
      var a = Il(t);
      t.__patch__(t._vnode, t.kept, !1, !0), (t._vnode = t.kept), a(), r.call(t, n, i);
    };
  },
  render: function (t) {
    for (var r = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), i = (this.prevChildren = this.children), a = this.$slots.default || [], o = (this.children = []), f = ec(this), c = 0; c < a.length; c++) {
      var h = a[c];
      h.tag && h.key != null && String(h.key).indexOf("__vlist") !== 0 && (o.push(h), (n[h.key] = h), ((h.data || (h.data = {})).transition = f));
    }
    if (i) {
      for (var g = [], b = [], w = 0; w < i.length; w++) {
        var A = i[w];
        (A.data.transition = f), (A.data.pos = A.elm.getBoundingClientRect()), n[A.key] ? g.push(A) : b.push(A);
      }
      (this.kept = t(r, null, g)), (this.removed = b);
    }
    return t(r, null, o);
  },
  updated: function () {
    var t = this.prevChildren,
      r = this.moveClass || (this.name || "v") + "-move";
    !t.length ||
      !this.hasMove(t[0].elm, r) ||
      (t.forEach(wg),
      t.forEach(Sg),
      t.forEach(Tg),
      (this._reflow = document.body.offsetHeight),
      t.forEach(function (n) {
        if (n.data.moved) {
          var i = n.elm,
            a = i.style;
          Tr(i, r),
            (a.transform = a.WebkitTransform = a.transitionDuration = ""),
            i.addEventListener(
              Gi,
              (i._moveCb = function o(f) {
                (f && f.target !== i) || ((!f || /transform$/.test(f.propertyName)) && (i.removeEventListener(Gi, o), (i._moveCb = null), Wt(i, r)));
              })
            );
        }
      }));
  },
  methods: {
    hasMove: function (t, r) {
      if (!Wl) return !1;
      if (this._hasMove) return this._hasMove;
      var n = t.cloneNode();
      t._transitionClasses &&
        t._transitionClasses.forEach(function (a) {
          zl(n, a);
        }),
        ql(n, r),
        (n.style.display = "none"),
        this.$el.appendChild(n);
      var i = Vl(n);
      return this.$el.removeChild(n), (this._hasMove = i.hasTransform);
    },
  },
};
function wg(e) {
  e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
}
function Sg(e) {
  e.data.newPos = e.elm.getBoundingClientRect();
}
function Tg(e) {
  var t = e.data.pos,
    r = e.data.newPos,
    n = t.left - r.left,
    i = t.top - r.top;
  if (n || i) {
    e.data.moved = !0;
    var a = e.elm.style;
    (a.transform = a.WebkitTransform = "translate(" + n + "px," + i + "px)"), (a.transitionDuration = "0s");
  }
}
var Eg = { Transition: bg, TransitionGroup: _g };
Ue.config.mustUseProp = lv;
Ue.config.isReservedTag = jl;
Ue.config.isReservedAttr = uv;
Ue.config.getTagNamespace = _v;
Ue.config.isUnknownElement = wv;
Re(Ue.options.directives, hg);
Re(Ue.options.components, Eg);
Ue.prototype.__patch__ = yt ? cg : ot;
Ue.prototype.$mount = function (e, t) {
  return (e = e && yt ? Sv(e) : void 0), Ih(this, e, t);
};
yt &&
  setTimeout(function () {
    St.devtools && Hi && Hi.emit("init", Ue);
  }, 0);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var ks = function (e, t) {
  return (
    (ks =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (r, n) {
          r.__proto__ = n;
        }) ||
      function (r, n) {
        for (var i in n) n.hasOwnProperty(i) && (r[i] = n[i]);
      }),
    ks(e, t)
  );
};
function or(e, t) {
  ks(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var j = function () {
  return (
    (j =
      Object.assign ||
      function (t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
          r = arguments[n];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
        }
        return t;
      }),
    j.apply(this, arguments)
  );
};
function xg(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function ar(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    r = t && e[t],
    n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Nr(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    i,
    a = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) a.push(i.value);
  } catch (f) {
    o = { error: f };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function Be() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Nr(arguments[t]));
  return e;
}
var Ht;
(function (e) {
  (e.Fatal = "fatal"), (e.Error = "error"), (e.Warning = "warning"), (e.Log = "log"), (e.Info = "info"), (e.Debug = "debug"), (e.Critical = "critical");
})(Ht || (Ht = {}));
function Cg(e) {
  e.then(null, function (t) {
    console.error(t);
  });
}
function ze() {
  return typeof __SENTRY_NO_DEBUG__ != "undefined" && !__SENTRY_BROWSER_BUNDLE__;
}
function Og() {
  return typeof __SENTRY_BROWSER_BUNDLE__ != "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function Yn() {
  return !Og() && Object.prototype.toString.call(typeof process != "undefined" ? process : 0) === "[object process]";
}
function Qt(e, t) {
  return e.require(t);
}
function Ag(e) {
  var t;
  try {
    t = Qt(module, e);
  } catch {}
  try {
    var r = Qt(module, "process").cwd;
    t = Qt(module, r() + "/node_modules/" + e);
  } catch {}
  return t;
}
var kg = {};
function Ae() {
  return Yn() ? global : typeof window != "undefined" ? window : typeof self != "undefined" ? self : kg;
}
var rc = Object.prototype.toString;
function nc(e) {
  switch (rc.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return Ft(e, Error);
  }
}
function ln(e, t) {
  return rc.call(e) === "[object " + t + "]";
}
function ic(e) {
  return ln(e, "ErrorEvent");
}
function vf(e) {
  return ln(e, "DOMError");
}
function Pg(e) {
  return ln(e, "DOMException");
}
function en(e) {
  return ln(e, "String");
}
function oa(e) {
  return e === null || (typeof e != "object" && typeof e != "function");
}
function tn(e) {
  return ln(e, "Object");
}
function ho(e) {
  return typeof Event != "undefined" && Ft(e, Event);
}
function gf(e) {
  return typeof Element != "undefined" && Ft(e, Element);
}
function Ig(e) {
  return ln(e, "RegExp");
}
function vo(e) {
  return Boolean(e && e.then && typeof e.then == "function");
}
function Ng(e) {
  return tn(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
function Ft(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function rn(e, t) {
  try {
    for (var r = e, n = 5, i = 80, a = [], o = 0, f = 0, c = " > ", h = c.length, g = void 0; r && o++ < n && ((g = Rg(r, t)), !(g === "html" || (o > 1 && f + a.length * h + g.length >= i))); ) a.push(g), (f += g.length), (r = r.parentNode);
    return a.reverse().join(c);
  } catch {
    return "<unknown>";
  }
}
function Rg(e, t) {
  var r = e,
    n = [],
    i,
    a,
    o,
    f,
    c;
  if (!r || !r.tagName) return "";
  n.push(r.tagName.toLowerCase());
  var h =
    t && t.length
      ? t
          .filter(function (b) {
            return r.getAttribute(b);
          })
          .map(function (b) {
            return [b, r.getAttribute(b)];
          })
      : null;
  if (h && h.length)
    h.forEach(function (b) {
      n.push("[" + b[0] + '="' + b[1] + '"]');
    });
  else if ((r.id && n.push("#" + r.id), (i = r.className), i && en(i))) for (a = i.split(/\s+/), c = 0; c < a.length; c++) n.push("." + a[c]);
  var g = ["type", "name", "title", "alt"];
  for (c = 0; c < g.length; c++) (o = g[c]), (f = r.getAttribute(o)), f && n.push("[" + o + '="' + f + '"]');
  return n.join("");
}
function Lg() {
  var e = Ae();
  try {
    return e.document.location.href;
  } catch {
    return "";
  }
}
var Mg = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? $g : Dg);
function $g(e, t) {
  return (e.__proto__ = t), e;
}
function Dg(e, t) {
  for (var r in t) Object.prototype.hasOwnProperty.call(e, r) || (e[r] = t[r]);
  return e;
}
var Xe = (function (e) {
    or(t, e);
    function t(r) {
      var n = this.constructor,
        i = e.call(this, r) || this;
      return (i.message = r), (i.name = n.prototype.constructor.name), Mg(i, n.prototype), i;
    }
    return t;
  })(Error),
  jg = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Hg(e) {
  return e === "http" || e === "https";
}
function ua(e, t) {
  t === void 0 && (t = !1);
  var r = e.host,
    n = e.path,
    i = e.pass,
    a = e.port,
    o = e.projectId,
    f = e.protocol,
    c = e.publicKey;
  return f + "://" + c + (t && i ? ":" + i : "") + ("@" + r + (a ? ":" + a : "") + "/" + (n && n + "/") + o);
}
function Fg(e) {
  var t = jg.exec(e);
  if (!t) throw new Xe("Invalid Sentry Dsn: " + e);
  var r = Nr(t.slice(1), 6),
    n = r[0],
    i = r[1],
    a = r[2],
    o = a === void 0 ? "" : a,
    f = r[3],
    c = r[4],
    h = c === void 0 ? "" : c,
    g = r[5],
    b = "",
    w = g,
    A = w.split("/");
  if ((A.length > 1 && ((b = A.slice(0, -1).join("/")), (w = A.pop())), w)) {
    var S = w.match(/^\d+/);
    S && (w = S[0]);
  }
  return ac({ host: f, pass: o, path: b, projectId: w, port: h, protocol: n, publicKey: i });
}
function ac(e) {
  return "user" in e && !("publicKey" in e) && (e.publicKey = e.user), { user: e.publicKey || "", protocol: e.protocol, publicKey: e.publicKey || "", pass: e.pass || "", host: e.host, port: e.port || "", path: e.path || "", projectId: e.projectId };
}
function Bg(e) {
  if (!!ze()) {
    var t = e.port,
      r = e.projectId,
      n = e.protocol,
      i = ["protocol", "publicKey", "host", "projectId"];
    if (
      (i.forEach(function (a) {
        if (!e[a]) throw new Xe("Invalid Sentry Dsn: " + a + " missing");
      }),
      !r.match(/^\d+$/))
    )
      throw new Xe("Invalid Sentry Dsn: Invalid projectId " + r);
    if (!Hg(n)) throw new Xe("Invalid Sentry Dsn: Invalid protocol " + n);
    if (t && isNaN(parseInt(t, 10))) throw new Xe("Invalid Sentry Dsn: Invalid port " + t);
    return !0;
  }
}
function go(e) {
  var t = typeof e == "string" ? Fg(e) : ac(e);
  return Bg(t), t;
}
var qg = ["fatal", "error", "warning", "log", "info", "debug", "critical"],
  Er = Ae(),
  Xa = "Sentry Logger ";
function Ii(e) {
  var t = Ae(),
    r = ["debug", "info", "warn", "error", "log", "assert"];
  if (!("console" in t)) return e();
  var n = t.console,
    i = {};
  r.forEach(function (o) {
    o in t.console && n[o].__sentry_original__ && ((i[o] = n[o]), (n[o] = n[o].__sentry_original__));
  });
  var a = e();
  return (
    Object.keys(i).forEach(function (o) {
      n[o] = i[o];
    }),
    a
  );
}
var zg = (function () {
  function e() {
    this._enabled = !1;
  }
  return (
    (e.prototype.disable = function () {
      this._enabled = !1;
    }),
    (e.prototype.enable = function () {
      this._enabled = !0;
    }),
    (e.prototype.log = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      !this._enabled ||
        Ii(function () {
          Er.console.log(Xa + "[Log]: " + t.join(" "));
        });
    }),
    (e.prototype.warn = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      !this._enabled ||
        Ii(function () {
          Er.console.warn(Xa + "[Warn]: " + t.join(" "));
        });
    }),
    (e.prototype.error = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      !this._enabled ||
        Ii(function () {
          Er.console.error(Xa + "[Error]: " + t.join(" "));
        });
    }),
    e
  );
})();
Er.__SENTRY__ = Er.__SENTRY__ || {};
var Z = Er.__SENTRY__.logger || (Er.__SENTRY__.logger = new zg());
function Ug() {
  var e = typeof WeakSet == "function",
    t = e ? new WeakSet() : [];
  function r(i) {
    if (e) return t.has(i) ? !0 : (t.add(i), !1);
    for (var a = 0; a < t.length; a++) {
      var o = t[a];
      if (o === i) return !0;
    }
    return t.push(i), !1;
  }
  function n(i) {
    if (e) t.delete(i);
    else
      for (var a = 0; a < t.length; a++)
        if (t[a] === i) {
          t.splice(a, 1);
          break;
        }
  }
  return [r, n];
}
var Ya = "<anonymous>";
function sr(e) {
  try {
    return !e || typeof e != "function" ? Ya : e.name || Ya;
  } catch {
    return Ya;
  }
}
function Nn(e, t) {
  return t === void 0 && (t = 0), typeof e != "string" || t === 0 || e.length <= t ? e : e.substr(0, t) + "...";
}
function mf(e, t) {
  if (!Array.isArray(e)) return "";
  for (var r = [], n = 0; n < e.length; n++) {
    var i = e[n];
    try {
      r.push(String(i));
    } catch {
      r.push("[value cannot be serialized]");
    }
  }
  return r.join(t);
}
function Rn(e, t) {
  return en(e) ? (Ig(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1) : !1;
}
function Je(e, t, r) {
  if (t in e) {
    var n = e[t],
      i = r(n);
    if (typeof i == "function")
      try {
        sc(i, n);
      } catch {}
    e[t] = i;
  }
}
function fa(e, t, r) {
  Object.defineProperty(e, t, { value: r });
}
function sc(e, t) {
  var r = t.prototype || {};
  (e.prototype = t.prototype = r), fa(e, "__sentry_original__", t);
}
function mo(e) {
  return e.__sentry_original__;
}
function Wg(e) {
  return Object.keys(e)
    .map(function (t) {
      return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
    })
    .join("&");
}
function oc(e) {
  if (nc(e)) {
    var t = e,
      r = { message: t.message, name: t.name, stack: t.stack };
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    return r;
  }
  if (ho(e)) {
    var i = e,
      a = {};
    a.type = i.type;
    try {
      a.target = gf(i.target) ? rn(i.target) : Object.prototype.toString.call(i.target);
    } catch {
      a.target = "<unknown>";
    }
    try {
      a.currentTarget = gf(i.currentTarget) ? rn(i.currentTarget) : Object.prototype.toString.call(i.currentTarget);
    } catch {
      a.currentTarget = "<unknown>";
    }
    typeof CustomEvent != "undefined" && Ft(e, CustomEvent) && (a.detail = i.detail);
    for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (a[o] = i[o]);
    return a;
  }
  return e;
}
function Gg(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function Xg(e) {
  return Gg(JSON.stringify(e));
}
function uc(e, t, r) {
  t === void 0 && (t = 3), r === void 0 && (r = 100 * 1024);
  var n = Yr(e, t);
  return Xg(n) > r ? uc(e, t - 1, r) : n;
}
function Yg(e) {
  if (typeof e == "string") return e;
  var t = Object.prototype.toString.call(e);
  if (t === "[object Object]") return "[Object]";
  if (t === "[object Array]") return "[Array]";
  var r = fc(e);
  return oa(r) ? r : t;
}
function fc(e, t) {
  return t === "domain" && e && typeof e == "object" && e._events
    ? "[Domain]"
    : t === "domainEmitter"
    ? "[DomainEmitter]"
    : typeof global != "undefined" && e === global
    ? "[Global]"
    : typeof window != "undefined" && e === window
    ? "[Window]"
    : typeof document != "undefined" && e === document
    ? "[Document]"
    : Ng(e)
    ? "[SyntheticEvent]"
    : typeof e == "number" && e !== e
    ? "[NaN]"
    : e === void 0
    ? "[undefined]"
    : typeof e == "function"
    ? "[Function: " + sr(e) + "]"
    : typeof e == "symbol"
    ? "[" + String(e) + "]"
    : typeof e == "bigint"
    ? "[BigInt: " + String(e) + "]"
    : e;
}
function lc(e, t, r, n) {
  if ((r === void 0 && (r = 1 / 0), n === void 0 && (n = Ug()), r === 0)) return Yg(t);
  if (t != null && typeof t.toJSON == "function") return t.toJSON();
  var i = fc(t, e);
  if (oa(i)) return i;
  var a = oc(t),
    o = Array.isArray(t) ? [] : {};
  if (n[0](t)) return "[Circular ~]";
  for (var f in a) !Object.prototype.hasOwnProperty.call(a, f) || (o[f] = lc(f, a[f], r - 1, n));
  return n[1](t), o;
}
function Yr(e, t) {
  try {
    return JSON.parse(
      JSON.stringify(e, function (r, n) {
        return lc(r, n, t);
      })
    );
  } catch {
    return "**non-serializable**";
  }
}
function Vg(e, t) {
  t === void 0 && (t = 40);
  var r = Object.keys(oc(e));
  if ((r.sort(), !r.length)) return "[object has no keys]";
  if (r[0].length >= t) return Nn(r[0], t);
  for (var n = r.length; n > 0; n--) {
    var i = r.slice(0, n).join(", ");
    if (!(i.length > t)) return n === r.length ? i : Nn(i, t);
  }
  return "";
}
function xr(e) {
  var t, r;
  if (tn(e)) {
    var n = e,
      i = {};
    try {
      for (var a = ar(Object.keys(n)), o = a.next(); !o.done; o = a.next()) {
        var f = o.value;
        typeof n[f] != "undefined" && (i[f] = xr(n[f]));
      }
    } catch (c) {
      t = { error: c };
    } finally {
      try {
        o && !o.done && (r = a.return) && r.call(a);
      } finally {
        if (t) throw t.error;
      }
    }
    return i;
  }
  return Array.isArray(e) ? e.map(xr) : e;
}
function la() {
  if (!("fetch" in Ae())) return !1;
  try {
    return new Headers(), new Request(""), new Response(), !0;
  } catch {
    return !1;
  }
}
function Ps(e) {
  return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
function Kg() {
  if (!la()) return !1;
  var e = Ae();
  if (Ps(e.fetch)) return !0;
  var t = !1,
    r = e.document;
  if (r && typeof r.createElement == "function")
    try {
      var n = r.createElement("iframe");
      (n.hidden = !0), r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = Ps(n.contentWindow.fetch)), r.head.removeChild(n);
    } catch (i) {
      ze() && Z.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i);
    }
  return t;
}
function Jg() {
  if (!la()) return !1;
  try {
    return new Request("_", { referrerPolicy: "origin" }), !0;
  } catch {
    return !1;
  }
}
function Qg() {
  var e = Ae(),
    t = e.chrome,
    r = t && t.app && t.app.runtime,
    n = "history" in e && !!e.history.pushState && !!e.history.replaceState;
  return !r && n;
}
var De = Ae(),
  Ln = {},
  yf = {};
function Zg(e) {
  if (!yf[e])
    switch (((yf[e] = !0), e)) {
      case "console":
        em();
        break;
      case "dom":
        fm();
        break;
      case "xhr":
        im();
        break;
      case "fetch":
        tm();
        break;
      case "history":
        am();
        break;
      case "error":
        lm();
        break;
      case "unhandledrejection":
        cm();
        break;
      default:
        Z.warn("unknown instrumentation type:", e);
    }
}
function vt(e, t) {
  (Ln[e] = Ln[e] || []), Ln[e].push(t), Zg(e);
}
function It(e, t) {
  var r, n;
  if (!(!e || !Ln[e]))
    try {
      for (var i = ar(Ln[e] || []), a = i.next(); !a.done; a = i.next()) {
        var o = a.value;
        try {
          o(t);
        } catch (f) {
          ze() &&
            Z.error(
              `Error while triggering instrumentation handler.
Type: ` +
                e +
                `
Name: ` +
                sr(o) +
                `
Error: ` +
                f
            );
        }
      }
    } catch (f) {
      r = { error: f };
    } finally {
      try {
        a && !a.done && (n = i.return) && n.call(i);
      } finally {
        if (r) throw r.error;
      }
    }
}
function em() {
  "console" in De &&
    ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
      e in De.console &&
        Je(De.console, e, function (t) {
          return function () {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            It("console", { args: r, level: e }), t && Function.prototype.apply.call(t, De.console, r);
          };
        });
    });
}
function tm() {
  !Kg() ||
    Je(De, "fetch", function (e) {
      return function () {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        var n = { args: t, fetchData: { method: rm(t), url: nm(t) }, startTimestamp: Date.now() };
        return (
          It("fetch", j({}, n)),
          e.apply(De, t).then(
            function (i) {
              return It("fetch", j(j({}, n), { endTimestamp: Date.now(), response: i })), i;
            },
            function (i) {
              throw (It("fetch", j(j({}, n), { endTimestamp: Date.now(), error: i })), i);
            }
          )
        );
      };
    });
}
function rm(e) {
  return e === void 0 && (e = []), "Request" in De && Ft(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET";
}
function nm(e) {
  return e === void 0 && (e = []), typeof e[0] == "string" ? e[0] : "Request" in De && Ft(e[0], Request) ? e[0].url : String(e[0]);
}
function im() {
  if ("XMLHttpRequest" in De) {
    var e = XMLHttpRequest.prototype;
    Je(e, "open", function (t) {
      return function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        var i = this,
          a = r[1],
          o = (i.__sentry_xhr__ = { method: en(r[0]) ? r[0].toUpperCase() : r[0], url: r[1] });
        en(a) && o.method === "POST" && a.match(/sentry_key/) && (i.__sentry_own_request__ = !0);
        var f = function () {
          if (i.readyState === 4) {
            try {
              o.status_code = i.status;
            } catch {}
            It("xhr", { args: r, endTimestamp: Date.now(), startTimestamp: Date.now(), xhr: i });
          }
        };
        return (
          "onreadystatechange" in i && typeof i.onreadystatechange == "function"
            ? Je(i, "onreadystatechange", function (c) {
                return function () {
                  for (var h = [], g = 0; g < arguments.length; g++) h[g] = arguments[g];
                  return f(), c.apply(i, h);
                };
              })
            : i.addEventListener("readystatechange", f),
          t.apply(i, r)
        );
      };
    }),
      Je(e, "send", function (t) {
        return function () {
          for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
          return this.__sentry_xhr__ && r[0] !== void 0 && (this.__sentry_xhr__.body = r[0]), It("xhr", { args: r, startTimestamp: Date.now(), xhr: this }), t.apply(this, r);
        };
      });
  }
}
var mi;
function am() {
  if (!Qg()) return;
  var e = De.onpopstate;
  De.onpopstate = function () {
    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
    var i = De.location.href,
      a = mi;
    if (((mi = i), It("history", { from: a, to: i }), e))
      try {
        return e.apply(this, r);
      } catch {}
  };
  function t(r) {
    return function () {
      for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
      var a = n.length > 2 ? n[2] : void 0;
      if (a) {
        var o = mi,
          f = String(a);
        (mi = f), It("history", { from: o, to: f });
      }
      return r.apply(this, n);
    };
  }
  Je(De.history, "pushState", t), Je(De.history, "replaceState", t);
}
var sm = 1e3,
  yi,
  bi;
function om(e, t) {
  if (!e || e.type !== t.type) return !0;
  try {
    if (e.target !== t.target) return !0;
  } catch {}
  return !1;
}
function um(e) {
  if (e.type !== "keypress") return !1;
  try {
    var t = e.target;
    if (!t || !t.tagName) return !0;
    if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1;
  } catch {}
  return !0;
}
function bf(e, t) {
  return (
    t === void 0 && (t = !1),
    function (r) {
      if (!(!r || bi === r) && !um(r)) {
        var n = r.type === "keypress" ? "input" : r.type;
        yi === void 0 ? (e({ event: r, name: n, global: t }), (bi = r)) : om(bi, r) && (e({ event: r, name: n, global: t }), (bi = r)),
          clearTimeout(yi),
          (yi = De.setTimeout(function () {
            yi = void 0;
          }, sm));
      }
    }
  );
}
function fm() {
  if ("document" in De) {
    var e = It.bind(null, "dom"),
      t = bf(e, !0);
    De.document.addEventListener("click", t, !1),
      De.document.addEventListener("keypress", t, !1),
      ["EventTarget", "Node"].forEach(function (r) {
        var n = De[r] && De[r].prototype;
        !n ||
          !n.hasOwnProperty ||
          !n.hasOwnProperty("addEventListener") ||
          (Je(n, "addEventListener", function (i) {
            return function (a, o, f) {
              if (a === "click" || a == "keypress")
                try {
                  var c = this,
                    h = (c.__sentry_instrumentation_handlers__ = c.__sentry_instrumentation_handlers__ || {}),
                    g = (h[a] = h[a] || { refCount: 0 });
                  if (!g.handler) {
                    var b = bf(e);
                    (g.handler = b), i.call(this, a, b, f);
                  }
                  g.refCount += 1;
                } catch {}
              return i.call(this, a, o, f);
            };
          }),
          Je(n, "removeEventListener", function (i) {
            return function (a, o, f) {
              if (a === "click" || a == "keypress")
                try {
                  var c = this,
                    h = c.__sentry_instrumentation_handlers__ || {},
                    g = h[a];
                  g && ((g.refCount -= 1), g.refCount <= 0 && (i.call(this, a, g.handler, f), (g.handler = void 0), delete h[a]), Object.keys(h).length === 0 && delete c.__sentry_instrumentation_handlers__);
                } catch {}
              return i.call(this, a, o, f);
            };
          }));
      });
  }
}
var Va = null;
function lm() {
  (Va = De.onerror),
    (De.onerror = function (e, t, r, n, i) {
      return It("error", { column: n, error: i, line: r, msg: e, url: t }), Va ? Va.apply(this, arguments) : !1;
    });
}
var Ka = null;
function cm() {
  (Ka = De.onunhandledrejection),
    (De.onunhandledrejection = function (e) {
      return It("unhandledrejection", e), Ka ? Ka.apply(this, arguments) : !0;
    });
}
function er() {
  var e = Ae(),
    t = e.crypto || e.msCrypto;
  if (t !== void 0 && t.getRandomValues) {
    var r = new Uint16Array(8);
    t.getRandomValues(r), (r[3] = (r[3] & 4095) | 16384), (r[4] = (r[4] & 16383) | 32768);
    var n = function (i) {
      for (var a = i.toString(16); a.length < 4; ) a = "0" + a;
      return a;
    };
    return n(r[0]) + n(r[1]) + n(r[2]) + n(r[3]) + n(r[4]) + n(r[5]) + n(r[6]) + n(r[7]);
  }
  return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (i) {
    var a = (Math.random() * 16) | 0,
      o = i === "x" ? a : (a & 3) | 8;
    return o.toString(16);
  });
}
function Ja(e) {
  if (!e) return {};
  var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!t) return {};
  var r = t[6] || "",
    n = t[8] || "";
  return { host: t[4], path: t[5], protocol: t[2], relative: t[5] + r + n };
}
function cc(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function br(e) {
  var t = e.message,
    r = e.event_id;
  if (t) return t;
  var n = cc(e);
  return n ? (n.type && n.value ? n.type + ": " + n.value : n.type || n.value || r || "<unknown>") : r || "<unknown>";
}
function Is(e, t, r) {
  var n = (e.exception = e.exception || {}),
    i = (n.values = n.values || []),
    a = (i[0] = i[0] || {});
  a.value || (a.value = t || ""), a.type || (a.type = r || "Error");
}
function Bn(e, t) {
  var r = cc(e);
  if (!!r) {
    var n = { type: "generic", handled: !0 },
      i = r.mechanism;
    if (((r.mechanism = j(j(j({}, n), i), t)), t && "data" in t)) {
      var a = j(j({}, i && i.data), t.data);
      r.mechanism.data = a;
    }
  }
}
var _f = 60 * 1e3;
function dm(e, t) {
  if (!t) return _f;
  var r = parseInt("" + t, 10);
  if (!isNaN(r)) return r * 1e3;
  var n = Date.parse("" + t);
  return isNaN(n) ? _f : n - e;
}
function wf(e) {
  if (e && e.__sentry_captured__) return !0;
  try {
    fa(e, "__sentry_captured__", !0);
  } catch {}
  return !1;
}
function nn(e) {
  return new Lr(function (t) {
    t(e);
  });
}
function Ns(e) {
  return new Lr(function (t, r) {
    r(e);
  });
}
var Lr = (function () {
  function e(t) {
    var r = this;
    (this._state = 0),
      (this._handlers = []),
      (this._resolve = function (n) {
        r._setResult(1, n);
      }),
      (this._reject = function (n) {
        r._setResult(2, n);
      }),
      (this._setResult = function (n, i) {
        if (r._state === 0) {
          if (vo(i)) {
            i.then(r._resolve, r._reject);
            return;
          }
          (r._state = n), (r._value = i), r._executeHandlers();
        }
      }),
      (this._executeHandlers = function () {
        if (r._state !== 0) {
          var n = r._handlers.slice();
          (r._handlers = []),
            n.forEach(function (i) {
              i[0] || (r._state === 1 && i[1](r._value), r._state === 2 && i[2](r._value), (i[0] = !0));
            });
        }
      });
    try {
      t(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  return (
    (e.prototype.then = function (t, r) {
      var n = this;
      return new e(function (i, a) {
        n._handlers.push([
          !1,
          function (o) {
            if (!t) i(o);
            else
              try {
                i(t(o));
              } catch (f) {
                a(f);
              }
          },
          function (o) {
            if (!r) a(o);
            else
              try {
                i(r(o));
              } catch (f) {
                a(f);
              }
          },
        ]),
          n._executeHandlers();
      });
    }),
    (e.prototype.catch = function (t) {
      return this.then(function (r) {
        return r;
      }, t);
    }),
    (e.prototype.finally = function (t) {
      var r = this;
      return new e(function (n, i) {
        var a, o;
        return r
          .then(
            function (f) {
              (o = !1), (a = f), t && t();
            },
            function (f) {
              (o = !0), (a = f), t && t();
            }
          )
          .then(function () {
            if (o) {
              i(a);
              return;
            }
            n(a);
          });
      });
    }),
    e
  );
})();
function pm(e) {
  var t = [];
  function r() {
    return e === void 0 || t.length < e;
  }
  function n(o) {
    return t.splice(t.indexOf(o), 1)[0];
  }
  function i(o) {
    if (!r()) return Ns(new Xe("Not adding Promise due to buffer limit reached."));
    var f = o();
    return (
      t.indexOf(f) === -1 && t.push(f),
      f
        .then(function () {
          return n(f);
        })
        .then(null, function () {
          return n(f).then(null, function () {});
        }),
      f
    );
  }
  function a(o) {
    return new Lr(function (f, c) {
      var h = t.length;
      if (!h) return f(!0);
      var g = setTimeout(function () {
        o && o > 0 && f(!1);
      }, o);
      t.forEach(function (b) {
        nn(b).then(function () {
          --h || (clearTimeout(g), f(!0));
        }, c);
      });
    });
  }
  return { $: t, add: i, drain: a };
}
function hm(e) {
  return qg.indexOf(e) !== -1;
}
function vm(e) {
  return e === "warn" ? Ht.Warning : hm(e) ? e : Ht.Log;
}
function gm(e) {
  return e >= 200 && e < 300 ? "success" : e === 429 ? "rate_limit" : e >= 400 && e < 500 ? "invalid" : e >= 500 ? "failed" : "unknown";
}
var Rs = {
  nowSeconds: function () {
    return Date.now() / 1e3;
  },
};
function mm() {
  var e = Ae().performance;
  if (!(!e || !e.now)) {
    var t = Date.now() - e.now();
    return {
      now: function () {
        return e.now();
      },
      timeOrigin: t,
    };
  }
}
function ym() {
  try {
    var e = Qt(module, "perf_hooks");
    return e.performance;
  } catch {
    return;
  }
}
var Qa = Yn() ? ym() : mm(),
  Sf =
    Qa === void 0
      ? Rs
      : {
          nowSeconds: function () {
            return (Qa.timeOrigin + Qa.now()) / 1e3;
          },
        },
  ca = Rs.nowSeconds.bind(Rs),
  Yi = Sf.nowSeconds.bind(Sf),
  qn = Yi,
  An = (function () {
    var e = Ae().performance;
    if (!(!e || !e.now)) {
      var t = 3600 * 1e3,
        r = e.now(),
        n = Date.now(),
        i = e.timeOrigin ? Math.abs(e.timeOrigin + r - n) : t,
        a = i < t,
        o = e.timing && e.timing.navigationStart,
        f = typeof o == "number",
        c = f ? Math.abs(o + r - n) : t,
        h = c < t;
      return a || h ? (i <= c ? e.timeOrigin : o) : n;
    }
  })(),
  Tf = 100,
  Vi = (function () {
    function e() {
      (this._notifyingListeners = !1), (this._scopeListeners = []), (this._eventProcessors = []), (this._breadcrumbs = []), (this._user = {}), (this._tags = {}), (this._extra = {}), (this._contexts = {}), (this._sdkProcessingMetadata = {});
    }
    return (
      (e.clone = function (t) {
        var r = new e();
        return (
          t &&
            ((r._breadcrumbs = Be(t._breadcrumbs)),
            (r._tags = j({}, t._tags)),
            (r._extra = j({}, t._extra)),
            (r._contexts = j({}, t._contexts)),
            (r._user = t._user),
            (r._level = t._level),
            (r._span = t._span),
            (r._session = t._session),
            (r._transactionName = t._transactionName),
            (r._fingerprint = t._fingerprint),
            (r._eventProcessors = Be(t._eventProcessors)),
            (r._requestSession = t._requestSession)),
          r
        );
      }),
      (e.prototype.addScopeListener = function (t) {
        this._scopeListeners.push(t);
      }),
      (e.prototype.addEventProcessor = function (t) {
        return this._eventProcessors.push(t), this;
      }),
      (e.prototype.setUser = function (t) {
        return (this._user = t || {}), this._session && this._session.update({ user: t }), this._notifyScopeListeners(), this;
      }),
      (e.prototype.getUser = function () {
        return this._user;
      }),
      (e.prototype.getRequestSession = function () {
        return this._requestSession;
      }),
      (e.prototype.setRequestSession = function (t) {
        return (this._requestSession = t), this;
      }),
      (e.prototype.setTags = function (t) {
        return (this._tags = j(j({}, this._tags), t)), this._notifyScopeListeners(), this;
      }),
      (e.prototype.setTag = function (t, r) {
        var n;
        return (this._tags = j(j({}, this._tags), ((n = {}), (n[t] = r), n))), this._notifyScopeListeners(), this;
      }),
      (e.prototype.setExtras = function (t) {
        return (this._extra = j(j({}, this._extra), t)), this._notifyScopeListeners(), this;
      }),
      (e.prototype.setExtra = function (t, r) {
        var n;
        return (this._extra = j(j({}, this._extra), ((n = {}), (n[t] = r), n))), this._notifyScopeListeners(), this;
      }),
      (e.prototype.setFingerprint = function (t) {
        return (this._fingerprint = t), this._notifyScopeListeners(), this;
      }),
      (e.prototype.setLevel = function (t) {
        return (this._level = t), this._notifyScopeListeners(), this;
      }),
      (e.prototype.setTransactionName = function (t) {
        return (this._transactionName = t), this._notifyScopeListeners(), this;
      }),
      (e.prototype.setTransaction = function (t) {
        return this.setTransactionName(t);
      }),
      (e.prototype.setContext = function (t, r) {
        var n;
        return r === null ? delete this._contexts[t] : (this._contexts = j(j({}, this._contexts), ((n = {}), (n[t] = r), n))), this._notifyScopeListeners(), this;
      }),
      (e.prototype.setSpan = function (t) {
        return (this._span = t), this._notifyScopeListeners(), this;
      }),
      (e.prototype.getSpan = function () {
        return this._span;
      }),
      (e.prototype.getTransaction = function () {
        var t = this.getSpan();
        return t && t.transaction;
      }),
      (e.prototype.setSession = function (t) {
        return t ? (this._session = t) : delete this._session, this._notifyScopeListeners(), this;
      }),
      (e.prototype.getSession = function () {
        return this._session;
      }),
      (e.prototype.update = function (t) {
        if (!t) return this;
        if (typeof t == "function") {
          var r = t(this);
          return r instanceof e ? r : this;
        }
        return (
          t instanceof e
            ? ((this._tags = j(j({}, this._tags), t._tags)),
              (this._extra = j(j({}, this._extra), t._extra)),
              (this._contexts = j(j({}, this._contexts), t._contexts)),
              t._user && Object.keys(t._user).length && (this._user = t._user),
              t._level && (this._level = t._level),
              t._fingerprint && (this._fingerprint = t._fingerprint),
              t._requestSession && (this._requestSession = t._requestSession))
            : tn(t) &&
              ((t = t),
              (this._tags = j(j({}, this._tags), t.tags)),
              (this._extra = j(j({}, this._extra), t.extra)),
              (this._contexts = j(j({}, this._contexts), t.contexts)),
              t.user && (this._user = t.user),
              t.level && (this._level = t.level),
              t.fingerprint && (this._fingerprint = t.fingerprint),
              t.requestSession && (this._requestSession = t.requestSession)),
          this
        );
      }),
      (e.prototype.clear = function () {
        return (
          (this._breadcrumbs = []),
          (this._tags = {}),
          (this._extra = {}),
          (this._user = {}),
          (this._contexts = {}),
          (this._level = void 0),
          (this._transactionName = void 0),
          (this._fingerprint = void 0),
          (this._requestSession = void 0),
          (this._span = void 0),
          (this._session = void 0),
          this._notifyScopeListeners(),
          this
        );
      }),
      (e.prototype.addBreadcrumb = function (t, r) {
        var n = typeof r == "number" ? Math.min(r, Tf) : Tf;
        if (n <= 0) return this;
        var i = j({ timestamp: ca() }, t);
        return (this._breadcrumbs = Be(this._breadcrumbs, [i]).slice(-n)), this._notifyScopeListeners(), this;
      }),
      (e.prototype.clearBreadcrumbs = function () {
        return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
      }),
      (e.prototype.applyToEvent = function (t, r) {
        if (
          (this._extra && Object.keys(this._extra).length && (t.extra = j(j({}, this._extra), t.extra)),
          this._tags && Object.keys(this._tags).length && (t.tags = j(j({}, this._tags), t.tags)),
          this._user && Object.keys(this._user).length && (t.user = j(j({}, this._user), t.user)),
          this._contexts && Object.keys(this._contexts).length && (t.contexts = j(j({}, this._contexts), t.contexts)),
          this._level && (t.level = this._level),
          this._transactionName && (t.transaction = this._transactionName),
          this._span)
        ) {
          t.contexts = j({ trace: this._span.getTraceContext() }, t.contexts);
          var n = this._span.transaction && this._span.transaction.name;
          n && (t.tags = j({ transaction: n }, t.tags));
        }
        return this._applyFingerprint(t), (t.breadcrumbs = Be(t.breadcrumbs || [], this._breadcrumbs)), (t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0), (t.sdkProcessingMetadata = this._sdkProcessingMetadata), this._notifyEventProcessors(Be(dc(), this._eventProcessors), t, r);
      }),
      (e.prototype.setSDKProcessingMetadata = function (t) {
        return (this._sdkProcessingMetadata = j(j({}, this._sdkProcessingMetadata), t)), this;
      }),
      (e.prototype._notifyEventProcessors = function (t, r, n, i) {
        var a = this;
        return (
          i === void 0 && (i = 0),
          new Lr(function (o, f) {
            var c = t[i];
            if (r === null || typeof c != "function") o(r);
            else {
              var h = c(j({}, r), n);
              vo(h)
                ? h
                    .then(function (g) {
                      return a._notifyEventProcessors(t, g, n, i + 1).then(o);
                    })
                    .then(null, f)
                : a
                    ._notifyEventProcessors(t, h, n, i + 1)
                    .then(o)
                    .then(null, f);
            }
          })
        );
      }),
      (e.prototype._notifyScopeListeners = function () {
        var t = this;
        this._notifyingListeners ||
          ((this._notifyingListeners = !0),
          this._scopeListeners.forEach(function (r) {
            r(t);
          }),
          (this._notifyingListeners = !1));
      }),
      (e.prototype._applyFingerprint = function (t) {
        (t.fingerprint = t.fingerprint ? (Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint]) : []), this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
      }),
      e
    );
  })();
function dc() {
  var e = Ae();
  return (e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || []), e.__SENTRY__.globalEventProcessors;
}
function da(e) {
  dc().push(e);
}
var bm = (function () {
    function e(t) {
      (this.errors = 0), (this.sid = er()), (this.duration = 0), (this.status = "ok"), (this.init = !0), (this.ignoreDuration = !1);
      var r = Yi();
      (this.timestamp = r), (this.started = r), t && this.update(t);
    }
    return (
      (e.prototype.update = function (t) {
        if (
          (t === void 0 && (t = {}),
          t.user && (!this.ipAddress && t.user.ip_address && (this.ipAddress = t.user.ip_address), !this.did && !t.did && (this.did = t.user.id || t.user.email || t.user.username)),
          (this.timestamp = t.timestamp || Yi()),
          t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration),
          t.sid && (this.sid = t.sid.length === 32 ? t.sid : er()),
          t.init !== void 0 && (this.init = t.init),
          !this.did && t.did && (this.did = "" + t.did),
          typeof t.started == "number" && (this.started = t.started),
          this.ignoreDuration)
        )
          this.duration = void 0;
        else if (typeof t.duration == "number") this.duration = t.duration;
        else {
          var r = this.timestamp - this.started;
          this.duration = r >= 0 ? r : 0;
        }
        t.release && (this.release = t.release),
          t.environment && (this.environment = t.environment),
          !this.ipAddress && t.ipAddress && (this.ipAddress = t.ipAddress),
          !this.userAgent && t.userAgent && (this.userAgent = t.userAgent),
          typeof t.errors == "number" && (this.errors = t.errors),
          t.status && (this.status = t.status);
      }),
      (e.prototype.close = function (t) {
        t ? this.update({ status: t }) : this.status === "ok" ? this.update({ status: "exited" }) : this.update();
      }),
      (e.prototype.toJSON = function () {
        return xr({
          sid: "" + this.sid,
          init: this.init,
          started: new Date(this.started * 1e3).toISOString(),
          timestamp: new Date(this.timestamp * 1e3).toISOString(),
          status: this.status,
          errors: this.errors,
          did: typeof this.did == "number" || typeof this.did == "string" ? "" + this.did : void 0,
          duration: this.duration,
          attrs: { release: this.release, environment: this.environment, ip_address: this.ipAddress, user_agent: this.userAgent },
        });
      }),
      e
    );
  })(),
  yo = 4,
  _m = 100,
  pa = (function () {
    function e(t, r, n) {
      r === void 0 && (r = new Vi()), n === void 0 && (n = yo), (this._version = n), (this._stack = [{}]), (this.getStackTop().scope = r), t && this.bindClient(t);
    }
    return (
      (e.prototype.isOlderThan = function (t) {
        return this._version < t;
      }),
      (e.prototype.bindClient = function (t) {
        var r = this.getStackTop();
        (r.client = t), t && t.setupIntegrations && t.setupIntegrations();
      }),
      (e.prototype.pushScope = function () {
        var t = Vi.clone(this.getScope());
        return this.getStack().push({ client: this.getClient(), scope: t }), t;
      }),
      (e.prototype.popScope = function () {
        return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
      }),
      (e.prototype.withScope = function (t) {
        var r = this.pushScope();
        try {
          t(r);
        } finally {
          this.popScope();
        }
      }),
      (e.prototype.getClient = function () {
        return this.getStackTop().client;
      }),
      (e.prototype.getScope = function () {
        return this.getStackTop().scope;
      }),
      (e.prototype.getStack = function () {
        return this._stack;
      }),
      (e.prototype.getStackTop = function () {
        return this._stack[this._stack.length - 1];
      }),
      (e.prototype.captureException = function (t, r) {
        var n = (this._lastEventId = er()),
          i = r;
        if (!r) {
          var a = void 0;
          try {
            throw new Error("Sentry syntheticException");
          } catch (o) {
            a = o;
          }
          i = { originalException: t, syntheticException: a };
        }
        return this._invokeClient("captureException", t, j(j({}, i), { event_id: n })), n;
      }),
      (e.prototype.captureMessage = function (t, r, n) {
        var i = (this._lastEventId = er()),
          a = n;
        if (!n) {
          var o = void 0;
          try {
            throw new Error(t);
          } catch (f) {
            o = f;
          }
          a = { originalException: t, syntheticException: o };
        }
        return this._invokeClient("captureMessage", t, r, j(j({}, a), { event_id: i })), i;
      }),
      (e.prototype.captureEvent = function (t, r) {
        var n = er();
        return t.type !== "transaction" && (this._lastEventId = n), this._invokeClient("captureEvent", t, j(j({}, r), { event_id: n })), n;
      }),
      (e.prototype.lastEventId = function () {
        return this._lastEventId;
      }),
      (e.prototype.addBreadcrumb = function (t, r) {
        var n = this.getStackTop(),
          i = n.scope,
          a = n.client;
        if (!(!i || !a)) {
          var o = (a.getOptions && a.getOptions()) || {},
            f = o.beforeBreadcrumb,
            c = f === void 0 ? null : f,
            h = o.maxBreadcrumbs,
            g = h === void 0 ? _m : h;
          if (!(g <= 0)) {
            var b = ca(),
              w = j({ timestamp: b }, t),
              A = c
                ? Ii(function () {
                    return c(w, r);
                  })
                : w;
            A !== null && i.addBreadcrumb(A, g);
          }
        }
      }),
      (e.prototype.setUser = function (t) {
        var r = this.getScope();
        r && r.setUser(t);
      }),
      (e.prototype.setTags = function (t) {
        var r = this.getScope();
        r && r.setTags(t);
      }),
      (e.prototype.setExtras = function (t) {
        var r = this.getScope();
        r && r.setExtras(t);
      }),
      (e.prototype.setTag = function (t, r) {
        var n = this.getScope();
        n && n.setTag(t, r);
      }),
      (e.prototype.setExtra = function (t, r) {
        var n = this.getScope();
        n && n.setExtra(t, r);
      }),
      (e.prototype.setContext = function (t, r) {
        var n = this.getScope();
        n && n.setContext(t, r);
      }),
      (e.prototype.configureScope = function (t) {
        var r = this.getStackTop(),
          n = r.scope,
          i = r.client;
        n && i && t(n);
      }),
      (e.prototype.run = function (t) {
        var r = Ef(this);
        try {
          t(this);
        } finally {
          Ef(r);
        }
      }),
      (e.prototype.getIntegration = function (t) {
        var r = this.getClient();
        if (!r) return null;
        try {
          return r.getIntegration(t);
        } catch {
          return Z.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null;
        }
      }),
      (e.prototype.startSpan = function (t) {
        return this._callExtensionMethod("startSpan", t);
      }),
      (e.prototype.startTransaction = function (t, r) {
        return this._callExtensionMethod("startTransaction", t, r);
      }),
      (e.prototype.traceHeaders = function () {
        return this._callExtensionMethod("traceHeaders");
      }),
      (e.prototype.captureSession = function (t) {
        if ((t === void 0 && (t = !1), t)) return this.endSession();
        this._sendSessionUpdate();
      }),
      (e.prototype.endSession = function () {
        var t = this.getStackTop(),
          r = t && t.scope,
          n = r && r.getSession();
        n && n.close(), this._sendSessionUpdate(), r && r.setSession();
      }),
      (e.prototype.startSession = function (t) {
        var r = this.getStackTop(),
          n = r.scope,
          i = r.client,
          a = (i && i.getOptions()) || {},
          o = a.release,
          f = a.environment,
          c = Ae(),
          h = (c.navigator || {}).userAgent,
          g = new bm(j(j(j({ release: o, environment: f }, n && { user: n.getUser() }), h && { userAgent: h }), t));
        if (n) {
          var b = n.getSession && n.getSession();
          b && b.status === "ok" && b.update({ status: "exited" }), this.endSession(), n.setSession(g);
        }
        return g;
      }),
      (e.prototype._sendSessionUpdate = function () {
        var t = this.getStackTop(),
          r = t.scope,
          n = t.client;
        if (!!r) {
          var i = r.getSession && r.getSession();
          i && n && n.captureSession && n.captureSession(i);
        }
      }),
      (e.prototype._invokeClient = function (t) {
        for (var r, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
        var a = this.getStackTop(),
          o = a.scope,
          f = a.client;
        f && f[t] && (r = f)[t].apply(r, Be(n, [o]));
      }),
      (e.prototype._callExtensionMethod = function (t) {
        for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
        var i = cn(),
          a = i.__SENTRY__;
        if (a && a.extensions && typeof a.extensions[t] == "function") return a.extensions[t].apply(this, r);
        Z.warn("Extension method " + t + " couldn't be found, doing nothing.");
      }),
      e
    );
  })();
function cn() {
  var e = Ae();
  return (e.__SENTRY__ = e.__SENTRY__ || { extensions: {}, hub: void 0 }), e;
}
function Ef(e) {
  var t = cn(),
    r = Kt(t);
  return bo(t, e), r;
}
function He() {
  var e = cn();
  return (!pc(e) || Kt(e).isOlderThan(yo)) && bo(e, new pa()), Yn() ? wm(e) : Kt(e);
}
function wm(e) {
  try {
    var t = cn().__SENTRY__,
      r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
    if (!r) return Kt(e);
    if (!pc(r) || Kt(r).isOlderThan(yo)) {
      var n = Kt(e).getStackTop();
      bo(r, new pa(n.client, Vi.clone(n.scope)));
    }
    return Kt(r);
  } catch {
    return Kt(e);
  }
}
function pc(e) {
  return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
}
function Kt(e) {
  return (e && e.__SENTRY__ && e.__SENTRY__.hub) || ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = new pa())), e.__SENTRY__.hub;
}
function bo(e, t) {
  return e ? ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = t), !0) : !1;
}
function hc(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = He();
  if (n && n[e]) return n[e].apply(n, Be(t));
  throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.");
}
function vc(e, t) {
  var r;
  try {
    throw new Error("Sentry syntheticException");
  } catch (n) {
    r = n;
  }
  return hc("captureException", e, { captureContext: t, originalException: e, syntheticException: r });
}
function Sm(e) {
  hc("withScope", e);
}
var Tm = "7";
function Em(e, t, r) {
  return { initDsn: e, metadata: t || {}, dsn: go(e), tunnel: r };
}
function gc(e) {
  var t = e.protocol ? e.protocol + ":" : "",
    r = e.port ? ":" + e.port : "";
  return t + "//" + e.host + r + (e.path ? "/" + e.path : "") + "/api/";
}
function mc(e, t) {
  return "" + gc(e) + e.projectId + "/" + t + "/";
}
function yc(e) {
  return Wg({ sentry_key: e.publicKey, sentry_version: Tm });
}
function xm(e) {
  return mc(e, "store");
}
function bc(e) {
  return xm(e) + "?" + yc(e);
}
function Cm(e) {
  return mc(e, "envelope");
}
function _o(e, t) {
  return t || Cm(e) + "?" + yc(e);
}
function Om(e, t) {
  var r = go(e),
    n = gc(r) + "embed/error-page/",
    i = "dsn=" + ua(r);
  for (var a in t)
    if (a !== "dsn")
      if (a === "user") {
        if (!t.user) continue;
        t.user.name && (i += "&name=" + encodeURIComponent(t.user.name)), t.user.email && (i += "&email=" + encodeURIComponent(t.user.email));
      } else i += "&" + encodeURIComponent(a) + "=" + encodeURIComponent(t[a]);
  return n + "?" + i;
}
var xf = [];
function Cf(e) {
  return e.reduce(function (t, r) {
    return (
      t.every(function (n) {
        return r.name !== n.name;
      }) && t.push(r),
      t
    );
  }, []);
}
function Am(e) {
  var t = (e.defaultIntegrations && Be(e.defaultIntegrations)) || [],
    r = e.integrations,
    n = Be(Cf(t));
  Array.isArray(r)
    ? (n = Be(
        n.filter(function (o) {
          return r.every(function (f) {
            return f.name !== o.name;
          });
        }),
        Cf(r)
      ))
    : typeof r == "function" && ((n = r(n)), (n = Array.isArray(n) ? n : [n]));
  var i = n.map(function (o) {
      return o.name;
    }),
    a = "Debug";
  return i.indexOf(a) !== -1 && n.push.apply(n, Be(n.splice(i.indexOf(a), 1))), n;
}
function km(e) {
  xf.indexOf(e.name) === -1 && (e.setupOnce(da, He), xf.push(e.name), Z.log("Integration installed: " + e.name));
}
function Pm(e) {
  var t = {};
  return (
    Am(e).forEach(function (r) {
      (t[r.name] = r), km(r);
    }),
    fa(t, "initialized", !0),
    t
  );
}
var Of = "Not capturing exception because it's already been captured.",
  Im = (function () {
    function e(t, r) {
      (this._integrations = {}), (this._numProcessing = 0), (this._backend = new t(r)), (this._options = r), r.dsn && (this._dsn = go(r.dsn));
    }
    return (
      (e.prototype.captureException = function (t, r, n) {
        var i = this;
        if (wf(t)) {
          Z.log(Of);
          return;
        }
        var a = r && r.event_id;
        return (
          this._process(
            this._getBackend()
              .eventFromException(t, r)
              .then(function (o) {
                return i._captureEvent(o, r, n);
              })
              .then(function (o) {
                a = o;
              })
          ),
          a
        );
      }),
      (e.prototype.captureMessage = function (t, r, n, i) {
        var a = this,
          o = n && n.event_id,
          f = oa(t) ? this._getBackend().eventFromMessage(String(t), r, n) : this._getBackend().eventFromException(t, n);
        return (
          this._process(
            f
              .then(function (c) {
                return a._captureEvent(c, n, i);
              })
              .then(function (c) {
                o = c;
              })
          ),
          o
        );
      }),
      (e.prototype.captureEvent = function (t, r, n) {
        if (r && r.originalException && wf(r.originalException)) {
          Z.log(Of);
          return;
        }
        var i = r && r.event_id;
        return (
          this._process(
            this._captureEvent(t, r, n).then(function (a) {
              i = a;
            })
          ),
          i
        );
      }),
      (e.prototype.captureSession = function (t) {
        if (!this._isEnabled()) {
          ze() && Z.warn("SDK not enabled, will not capture session.");
          return;
        }
        typeof t.release != "string" ? ze() && Z.warn("Discarded session because of missing or non-string release") : (this._sendSession(t), t.update({ init: !1 }));
      }),
      (e.prototype.getDsn = function () {
        return this._dsn;
      }),
      (e.prototype.getOptions = function () {
        return this._options;
      }),
      (e.prototype.getTransport = function () {
        return this._getBackend().getTransport();
      }),
      (e.prototype.flush = function (t) {
        var r = this;
        return this._isClientDoneProcessing(t).then(function (n) {
          return r
            .getTransport()
            .close(t)
            .then(function (i) {
              return n && i;
            });
        });
      }),
      (e.prototype.close = function (t) {
        var r = this;
        return this.flush(t).then(function (n) {
          return (r.getOptions().enabled = !1), n;
        });
      }),
      (e.prototype.setupIntegrations = function () {
        this._isEnabled() && !this._integrations.initialized && (this._integrations = Pm(this._options));
      }),
      (e.prototype.getIntegration = function (t) {
        try {
          return this._integrations[t.id] || null;
        } catch {
          return Z.warn("Cannot retrieve integration " + t.id + " from the current Client"), null;
        }
      }),
      (e.prototype._updateSessionFromEvent = function (t, r) {
        var n,
          i,
          a = !1,
          o = !1,
          f = r.exception && r.exception.values;
        if (f) {
          o = !0;
          try {
            for (var c = ar(f), h = c.next(); !h.done; h = c.next()) {
              var g = h.value,
                b = g.mechanism;
              if (b && b.handled === !1) {
                a = !0;
                break;
              }
            }
          } catch (S) {
            n = { error: S };
          } finally {
            try {
              h && !h.done && (i = c.return) && i.call(c);
            } finally {
              if (n) throw n.error;
            }
          }
        }
        var w = t.status === "ok",
          A = (w && t.errors === 0) || (w && a);
        A && (t.update(j(j({}, a && { status: "crashed" }), { errors: t.errors || Number(o || a) })), this.captureSession(t));
      }),
      (e.prototype._sendSession = function (t) {
        this._getBackend().sendSession(t);
      }),
      (e.prototype._isClientDoneProcessing = function (t) {
        var r = this;
        return new Lr(function (n) {
          var i = 0,
            a = 1,
            o = setInterval(function () {
              r._numProcessing == 0 ? (clearInterval(o), n(!0)) : ((i += a), t && i >= t && (clearInterval(o), n(!1)));
            }, a);
        });
      }),
      (e.prototype._getBackend = function () {
        return this._backend;
      }),
      (e.prototype._isEnabled = function () {
        return this.getOptions().enabled !== !1 && this._dsn !== void 0;
      }),
      (e.prototype._prepareEvent = function (t, r, n) {
        var i = this,
          a = this.getOptions().normalizeDepth,
          o = a === void 0 ? 3 : a,
          f = j(j({}, t), { event_id: t.event_id || (n && n.event_id ? n.event_id : er()), timestamp: t.timestamp || ca() });
        this._applyClientOptions(f), this._applyIntegrationsMetadata(f);
        var c = r;
        n && n.captureContext && (c = Vi.clone(c).update(n.captureContext));
        var h = nn(f);
        return (
          c && (h = c.applyToEvent(f, n)),
          h.then(function (g) {
            return typeof o == "number" && o > 0 ? i._normalizeEvent(g, o) : g;
          })
        );
      }),
      (e.prototype._normalizeEvent = function (t, r) {
        if (!t) return null;
        var n = j(
          j(
            j(
              j(
                j({}, t),
                t.breadcrumbs && {
                  breadcrumbs: t.breadcrumbs.map(function (i) {
                    return j(j({}, i), i.data && { data: Yr(i.data, r) });
                  }),
                }
              ),
              t.user && { user: Yr(t.user, r) }
            ),
            t.contexts && { contexts: Yr(t.contexts, r) }
          ),
          t.extra && { extra: Yr(t.extra, r) }
        );
        return t.contexts && t.contexts.trace && (n.contexts.trace = t.contexts.trace), (t.sdkProcessingMetadata = j(j({}, t.sdkProcessingMetadata), { baseClientNormalized: !0 })), n;
      }),
      (e.prototype._applyClientOptions = function (t) {
        var r = this.getOptions(),
          n = r.environment,
          i = r.release,
          a = r.dist,
          o = r.maxValueLength,
          f = o === void 0 ? 250 : o;
        "environment" in t || (t.environment = "environment" in r ? n : "production"), t.release === void 0 && i !== void 0 && (t.release = i), t.dist === void 0 && a !== void 0 && (t.dist = a), t.message && (t.message = Nn(t.message, f));
        var c = t.exception && t.exception.values && t.exception.values[0];
        c && c.value && (c.value = Nn(c.value, f));
        var h = t.request;
        h && h.url && (h.url = Nn(h.url, f));
      }),
      (e.prototype._applyIntegrationsMetadata = function (t) {
        var r = Object.keys(this._integrations);
        r.length > 0 && ((t.sdk = t.sdk || {}), (t.sdk.integrations = Be(t.sdk.integrations || [], r)));
      }),
      (e.prototype._sendEvent = function (t) {
        this._getBackend().sendEvent(t);
      }),
      (e.prototype._captureEvent = function (t, r, n) {
        return this._processEvent(t, r, n).then(
          function (i) {
            return i.event_id;
          },
          function (i) {
            Z.error(i);
          }
        );
      }),
      (e.prototype._processEvent = function (t, r, n) {
        var i = this,
          a = this.getOptions(),
          o = a.beforeSend,
          f = a.sampleRate,
          c = this.getTransport();
        function h(b, w) {
          c.recordLostEvent && c.recordLostEvent(b, w);
        }
        if (!this._isEnabled()) return Ns(new Xe("SDK not enabled, will not capture event."));
        var g = t.type === "transaction";
        return !g && typeof f == "number" && Math.random() > f
          ? (h("sample_rate", "event"), Ns(new Xe("Discarding event because it's not included in the random sample (sampling rate = " + f + ")")))
          : this._prepareEvent(t, n, r)
              .then(function (b) {
                if (b === null) throw (h("event_processor", t.type || "event"), new Xe("An event processor returned null, will not send event."));
                var w = r && r.data && r.data.__sentry__ === !0;
                if (w || g || !o) return b;
                var A = o(b, r);
                return Nm(A);
              })
              .then(function (b) {
                if (b === null) throw (h("before_send", t.type || "event"), new Xe("`beforeSend` returned `null`, will not send event."));
                var w = n && n.getSession && n.getSession();
                return !g && w && i._updateSessionFromEvent(w, b), i._sendEvent(b), b;
              })
              .then(null, function (b) {
                throw b instanceof Xe
                  ? b
                  : (i.captureException(b, { data: { __sentry__: !0 }, originalException: b }),
                    new Xe(
                      `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ` + b
                    ));
              });
      }),
      (e.prototype._process = function (t) {
        var r = this;
        (this._numProcessing += 1),
          t.then(
            function (n) {
              return (r._numProcessing -= 1), n;
            },
            function (n) {
              return (r._numProcessing -= 1), n;
            }
          );
      }),
      e
    );
  })();
function Nm(e) {
  var t = "`beforeSend` method has to return `null` or a valid event.";
  if (vo(e))
    return e.then(
      function (r) {
        if (!(tn(r) || r === null)) throw new Xe(t);
        return r;
      },
      function (r) {
        throw new Xe("beforeSend rejected with " + r);
      }
    );
  if (!(tn(e) || e === null)) throw new Xe(t);
  return e;
}
var Rm = (function () {
    function e() {}
    return (
      (e.prototype.sendEvent = function (t) {
        return nn({ reason: "NoopTransport: Event has been skipped because no Dsn is configured.", status: "skipped" });
      }),
      (e.prototype.close = function (t) {
        return nn(!0);
      }),
      e
    );
  })(),
  Lm = (function () {
    function e(t) {
      (this._options = t), this._options.dsn || Z.warn("No DSN provided, backend will not do anything."), (this._transport = this._setupTransport());
    }
    return (
      (e.prototype.eventFromException = function (t, r) {
        throw new Xe("Backend has to implement `eventFromException` method");
      }),
      (e.prototype.eventFromMessage = function (t, r, n) {
        throw new Xe("Backend has to implement `eventFromMessage` method");
      }),
      (e.prototype.sendEvent = function (t) {
        this._transport.sendEvent(t).then(null, function (r) {
          ze() && Z.error("Error while sending event: " + r);
        });
      }),
      (e.prototype.sendSession = function (t) {
        if (!this._transport.sendSession) {
          ze() && Z.warn("Dropping session because custom transport doesn't implement sendSession");
          return;
        }
        this._transport.sendSession(t).then(null, function (r) {
          ze() && Z.error("Error while sending session: " + r);
        });
      }),
      (e.prototype.getTransport = function () {
        return this._transport;
      }),
      (e.prototype._setupTransport = function () {
        return new Rm();
      }),
      e
    );
  })();
function _c(e) {
  if (!(!e.metadata || !e.metadata.sdk)) {
    var t = e.metadata.sdk,
      r = t.name,
      n = t.version;
    return { name: r, version: n };
  }
}
function Mm(e, t) {
  return t && ((e.sdk = e.sdk || {}), (e.sdk.name = e.sdk.name || t.name), (e.sdk.version = e.sdk.version || t.version), (e.sdk.integrations = Be(e.sdk.integrations || [], t.integrations || [])), (e.sdk.packages = Be(e.sdk.packages || [], t.packages || []))), e;
}
function $m(e, t) {
  var r = _c(t),
    n = JSON.stringify(j(j({ sent_at: new Date().toISOString() }, r && { sdk: r }), !!t.tunnel && { dsn: ua(t.dsn) })),
    i = "aggregates" in e ? "sessions" : "session",
    a = JSON.stringify({ type: i });
  return {
    body:
      n +
      `
` +
      a +
      `
` +
      JSON.stringify(e),
    type: i,
    url: _o(t.dsn, t.tunnel),
  };
}
function Dm(e, t) {
  var r = _c(t),
    n = e.type || "event",
    i = n === "transaction" || !!t.tunnel,
    a = (e.sdkProcessingMetadata || {}).transactionSampling,
    o = a || {},
    f = o.method,
    c = o.rate;
  Mm(e, t.metadata.sdk), (e.tags = e.tags || {}), (e.extra = e.extra || {}), (e.sdkProcessingMetadata && e.sdkProcessingMetadata.baseClientNormalized) || (e.tags.skippedNormalization = !0), delete e.sdkProcessingMetadata;
  var h;
  try {
    h = JSON.stringify(e);
  } catch (T) {
    (e.tags.JSONStringifyError = !0), (e.extra.JSONStringifyError = T);
    try {
      h = JSON.stringify(Yr(e));
    } catch (L) {
      var g = L;
      h = JSON.stringify({ message: "JSON.stringify error after renormalization", extra: { message: g.message, stack: g.stack } });
    }
  }
  var b = { body: h, type: n, url: i ? _o(t.dsn, t.tunnel) : bc(t.dsn) };
  if (i) {
    var w = JSON.stringify(j(j({ event_id: e.event_id, sent_at: new Date().toISOString() }, r && { sdk: r }), !!t.tunnel && { dsn: ua(t.dsn) })),
      A = JSON.stringify({ type: n, sample_rates: [{ id: f, rate: c }] }),
      S =
        w +
        `
` +
        A +
        `
` +
        b.body;
    b.body = S;
  }
  return b;
}
function jm(e, t) {
  t.debug === !0 && Z.enable();
  var r = He(),
    n = r.getScope();
  n && n.update(t.initialScope);
  var i = new e(t);
  r.bindClient(i);
}
var Ki = "6.17.6",
  Af,
  Hm = (function () {
    function e() {
      this.name = e.id;
    }
    return (
      (e.prototype.setupOnce = function () {
        (Af = Function.prototype.toString),
          (Function.prototype.toString = function () {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            var n = mo(this) || this;
            return Af.apply(n, t);
          });
      }),
      (e.id = "FunctionToString"),
      e
    );
  })(),
  Fm = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
  Bm = (function () {
    function e(t) {
      t === void 0 && (t = {}), (this._options = t), (this.name = e.id);
    }
    return (
      (e.prototype.setupOnce = function () {
        da(function (t) {
          var r = He();
          if (!r) return t;
          var n = r.getIntegration(e);
          if (n) {
            var i = r.getClient(),
              a = i ? i.getOptions() : {},
              o = typeof n._mergeOptions == "function" ? n._mergeOptions(a) : {};
            return typeof n._shouldDropEvent != "function" ? t : n._shouldDropEvent(t, o) ? null : t;
          }
          return t;
        });
      }),
      (e.prototype._shouldDropEvent = function (t, r) {
        return this._isSentryError(t, r)
          ? (ze() &&
              Z.warn(
                `Event dropped due to being internal Sentry Error.
Event: ` + br(t)
              ),
            !0)
          : this._isIgnoredError(t, r)
          ? (ze() && Z.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + br(t)), !0)
          : this._isDeniedUrl(t, r)
          ? (ze() &&
              Z.warn(
                "Event dropped due to being matched by `denyUrls` option.\nEvent: " +
                  br(t) +
                  `.
Url: ` +
                  this._getEventFilterUrl(t)
              ),
            !0)
          : this._isAllowedUrl(t, r)
          ? !1
          : (ze() &&
              Z.warn(
                "Event dropped due to not being matched by `allowUrls` option.\nEvent: " +
                  br(t) +
                  `.
Url: ` +
                  this._getEventFilterUrl(t)
              ),
            !0);
      }),
      (e.prototype._isSentryError = function (t, r) {
        if (!r.ignoreInternal) return !1;
        try {
          return t.exception.values[0].type === "SentryError";
        } catch {}
        return !1;
      }),
      (e.prototype._isIgnoredError = function (t, r) {
        return !r.ignoreErrors || !r.ignoreErrors.length
          ? !1
          : this._getPossibleEventMessages(t).some(function (n) {
              return r.ignoreErrors.some(function (i) {
                return Rn(n, i);
              });
            });
      }),
      (e.prototype._isDeniedUrl = function (t, r) {
        if (!r.denyUrls || !r.denyUrls.length) return !1;
        var n = this._getEventFilterUrl(t);
        return n
          ? r.denyUrls.some(function (i) {
              return Rn(n, i);
            })
          : !1;
      }),
      (e.prototype._isAllowedUrl = function (t, r) {
        if (!r.allowUrls || !r.allowUrls.length) return !0;
        var n = this._getEventFilterUrl(t);
        return n
          ? r.allowUrls.some(function (i) {
              return Rn(n, i);
            })
          : !0;
      }),
      (e.prototype._mergeOptions = function (t) {
        return (
          t === void 0 && (t = {}),
          {
            allowUrls: Be(this._options.whitelistUrls || [], this._options.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
            denyUrls: Be(this._options.blacklistUrls || [], this._options.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
            ignoreErrors: Be(this._options.ignoreErrors || [], t.ignoreErrors || [], Fm),
            ignoreInternal: typeof this._options.ignoreInternal != "undefined" ? this._options.ignoreInternal : !0,
          }
        );
      }),
      (e.prototype._getPossibleEventMessages = function (t) {
        if (t.message) return [t.message];
        if (t.exception)
          try {
            var r = (t.exception.values && t.exception.values[0]) || {},
              n = r.type,
              i = n === void 0 ? "" : n,
              a = r.value,
              o = a === void 0 ? "" : a;
            return ["" + o, i + ": " + o];
          } catch {
            return ze() && Z.error("Cannot extract message for event " + br(t)), [];
          }
        return [];
      }),
      (e.prototype._getLastValidUrl = function (t) {
        t === void 0 && (t = []);
        for (var r = t.length - 1; r >= 0; r--) {
          var n = t[r];
          if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null;
        }
        return null;
      }),
      (e.prototype._getEventFilterUrl = function (t) {
        try {
          if (t.stacktrace) return this._getLastValidUrl(t.stacktrace.frames);
          var r;
          try {
            r = t.exception.values[0].stacktrace.frames;
          } catch {}
          return r ? this._getLastValidUrl(r) : null;
        } catch {
          return ze() && Z.error("Cannot extract url for event " + br(t)), null;
        }
      }),
      (e.id = "InboundFilters"),
      e
    );
  })(),
  Vr = "?",
  qm = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  zm = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  Um = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
  Wm = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  Gm = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  Xm = /Minified React error #\d+;/i;
function Qr(e) {
  var t = null,
    r = 0;
  e && (typeof e.framesToPop == "number" ? (r = e.framesToPop) : Xm.test(e.message) && (r = 1));
  try {
    if (((t = Vm(e)), t)) return Pf(t, r);
  } catch {}
  try {
    if (((t = Ym(e)), t)) return Pf(t, r);
  } catch {}
  return { message: wo(e), name: e && e.name, stack: [], failed: !0 };
}
function Ym(e) {
  var t, r;
  if (!e || !e.stack) return null;
  for (
    var n = [],
      i = e.stack.split(`
`),
      a,
      o,
      f,
      c,
      h = 0;
    h < i.length;
    ++h
  ) {
    if ((f = qm.exec(i[h]))) {
      var g = f[2] && f[2].indexOf("native") === 0;
      (a = f[2] && f[2].indexOf("eval") === 0), a && (o = Gm.exec(f[2])) && ((f[2] = o[1]), (f[3] = o[2]), (f[4] = o[3]));
      var b = f[2] && f[2].indexOf("address at ") === 0 ? f[2].substr(11) : f[2],
        w = f[1] || Vr;
      (t = Nr(kf(w, b), 2)), (w = t[0]), (b = t[1]), (c = { url: b, func: w, args: g ? [f[2]] : [], line: f[3] ? +f[3] : null, column: f[4] ? +f[4] : null });
    } else if ((f = Um.exec(i[h]))) c = { url: f[2], func: f[1] || Vr, args: [], line: +f[3], column: f[4] ? +f[4] : null };
    else if ((f = zm.exec(i[h]))) {
      (a = f[3] && f[3].indexOf(" > eval") > -1), a && (o = Wm.exec(f[3])) ? ((f[1] = f[1] || "eval"), (f[3] = o[1]), (f[4] = o[2]), (f[5] = "")) : h === 0 && !f[5] && e.columnNumber !== void 0 && (n[0].column = e.columnNumber + 1);
      var b = f[3],
        w = f[1] || Vr;
      (r = Nr(kf(w, b), 2)), (w = r[0]), (b = r[1]), (c = { url: b, func: w, args: f[2] ? f[2].split(",") : [], line: f[4] ? +f[4] : null, column: f[5] ? +f[5] : null });
    } else continue;
    !c.func && c.line && (c.func = Vr), n.push(c);
  }
  return n.length ? { message: wo(e), name: e.name, stack: n } : null;
}
function Vm(e) {
  if (!e || !e.stacktrace) return null;
  for (
    var t = e.stacktrace,
      r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
      n = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,
      i = t.split(`
`),
      a = [],
      o,
      f = 0;
    f < i.length;
    f += 2
  ) {
    var c = null;
    (o = r.exec(i[f])) ? (c = { url: o[2], func: o[3], args: [], line: +o[1], column: null }) : (o = n.exec(i[f])) && (c = { url: o[6], func: o[3] || o[4], args: o[5] ? o[5].split(",") : [], line: +o[1], column: +o[2] }), c && (!c.func && c.line && (c.func = Vr), a.push(c));
  }
  return a.length ? { message: wo(e), name: e.name, stack: a } : null;
}
var kf = function (e, t) {
  var r = e.indexOf("safari-extension") !== -1,
    n = e.indexOf("safari-web-extension") !== -1;
  return r || n ? [e.indexOf("@") !== -1 ? e.split("@")[0] : Vr, r ? "safari-extension:" + t : "safari-web-extension:" + t] : [e, t];
};
function Pf(e, t) {
  try {
    return j(j({}, e), { stack: e.stack.slice(t) });
  } catch {
    return e;
  }
}
function wo(e) {
  var t = e && e.message;
  return t ? (t.error && typeof t.error.message == "string" ? t.error.message : t) : "No error message";
}
var Km = 50;
function wc(e) {
  var t = So(e.stack),
    r = { type: e.name, value: e.message };
  return t && t.length && (r.stacktrace = { frames: t }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r;
}
function Jm(e, t, r) {
  var n = { exception: { values: [{ type: ho(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error", value: "Non-Error " + (r ? "promise rejection" : "exception") + " captured with keys: " + Vg(e) }] }, extra: { __serialized__: uc(e) } };
  if (t) {
    var i = Qr(t),
      a = So(i.stack);
    n.stacktrace = { frames: a };
  }
  return n;
}
function Za(e) {
  var t = wc(e);
  return { exception: { values: [t] } };
}
function So(e) {
  if (!e || !e.length) return [];
  var t = e,
    r = t[0].func || "",
    n = t[t.length - 1].func || "";
  return (
    (r.indexOf("captureMessage") !== -1 || r.indexOf("captureException") !== -1) && (t = t.slice(1)),
    n.indexOf("sentryWrapped") !== -1 && (t = t.slice(0, -1)),
    t
      .slice(0, Km)
      .map(function (i) {
        return { colno: i.column === null ? void 0 : i.column, filename: i.url || t[0].url, function: i.func || "?", in_app: !0, lineno: i.line === null ? void 0 : i.line };
      })
      .reverse()
  );
}
function Qm(e, t, r) {
  var n = (r && r.syntheticException) || void 0,
    i = To(t, n, { attachStacktrace: e.attachStacktrace });
  return Bn(i), (i.level = Ht.Error), r && r.event_id && (i.event_id = r.event_id), nn(i);
}
function Zm(e, t, r, n) {
  r === void 0 && (r = Ht.Info);
  var i = (n && n.syntheticException) || void 0,
    a = Ls(t, i, { attachStacktrace: e.attachStacktrace });
  return (a.level = r), n && n.event_id && (a.event_id = n.event_id), nn(a);
}
function To(e, t, r) {
  r === void 0 && (r = {});
  var n;
  if (ic(e) && e.error) {
    var i = e;
    return (e = i.error), (n = Za(Qr(e))), n;
  }
  if (vf(e) || Pg(e)) {
    var a = e;
    if ("stack" in e) n = Za(Qr(e));
    else {
      var o = a.name || (vf(a) ? "DOMError" : "DOMException"),
        f = a.message ? o + ": " + a.message : o;
      (n = Ls(f, t, r)), Is(n, f);
    }
    return "code" in a && (n.tags = j(j({}, n.tags), { "DOMException.code": "" + a.code })), n;
  }
  if (nc(e)) return (n = Za(Qr(e))), n;
  if (tn(e) || ho(e)) {
    var c = e;
    return (n = Jm(c, t, r.isRejection)), Bn(n, { synthetic: !0 }), n;
  }
  return (n = Ls(e, t, r)), Is(n, "" + e, void 0), Bn(n, { synthetic: !0 }), n;
}
function Ls(e, t, r) {
  r === void 0 && (r = {});
  var n = { message: e };
  if (r.attachStacktrace && t) {
    var i = Qr(t),
      a = So(i.stack);
    n.stacktrace = { frames: a };
  }
  return n;
}
var At = Ae(),
  _i;
function Sc() {
  if (_i) return _i;
  if (Ps(At.fetch)) return (_i = At.fetch.bind(At));
  var e = At.document,
    t = At.fetch;
  if (e && typeof e.createElement == "function")
    try {
      var r = e.createElement("iframe");
      (r.hidden = !0), e.head.appendChild(r);
      var n = r.contentWindow;
      n && n.fetch && (t = n.fetch), e.head.removeChild(r);
    } catch (i) {
      ze() && Z.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i);
    }
  return (_i = t.bind(At));
}
function ey(e, t) {
  var r = Object.prototype.toString.call(At && At.navigator) === "[object Navigator]",
    n = r && typeof At.navigator.sendBeacon == "function";
  if (n) {
    var i = At.navigator.sendBeacon.bind(At.navigator);
    return i(e, t);
  }
  if (la()) {
    var a = Sc();
    return Cg(a(e, { body: t, method: "POST", credentials: "omit", keepalive: !0 }));
  }
}
function If(e) {
  var t = e;
  return t === "event" ? "error" : t;
}
var es = Ae(),
  Tc = (function () {
    function e(t) {
      var r = this;
      (this.options = t),
        (this._buffer = pm(30)),
        (this._rateLimits = {}),
        (this._outcomes = {}),
        (this._api = Em(t.dsn, t._metadata, t.tunnel)),
        (this.url = bc(this._api.dsn)),
        this.options.sendClientReports &&
          es.document &&
          es.document.addEventListener("visibilitychange", function () {
            es.document.visibilityState === "hidden" && r._flushOutcomes();
          });
    }
    return (
      (e.prototype.sendEvent = function (t) {
        return this._sendRequest(Dm(t, this._api), t);
      }),
      (e.prototype.sendSession = function (t) {
        return this._sendRequest($m(t, this._api), t);
      }),
      (e.prototype.close = function (t) {
        return this._buffer.drain(t);
      }),
      (e.prototype.recordLostEvent = function (t, r) {
        var n;
        if (!!this.options.sendClientReports) {
          var i = If(r) + ":" + t;
          Z.log("Adding outcome: " + i), (this._outcomes[i] = ((n = this._outcomes[i]), (n != null ? n : 0) + 1));
        }
      }),
      (e.prototype._flushOutcomes = function () {
        if (!!this.options.sendClientReports) {
          var t = this._outcomes;
          if (((this._outcomes = {}), !Object.keys(t).length)) {
            Z.log("No outcomes to flush");
            return;
          }
          Z.log(
            `Flushing outcomes:
` + JSON.stringify(t, null, 2)
          );
          var r = _o(this._api.dsn, this._api.tunnel),
            n = JSON.stringify(j({}, this._api.tunnel && { dsn: ua(this._api.dsn) })),
            i = JSON.stringify({ type: "client_report" }),
            a = JSON.stringify({
              timestamp: ca(),
              discarded_events: Object.keys(t).map(function (f) {
                var c = Nr(f.split(":"), 2),
                  h = c[0],
                  g = c[1];
                return { reason: g, category: h, quantity: t[f] };
              }),
            }),
            o =
              n +
              `
` +
              i +
              `
` +
              a;
          try {
            ey(r, o);
          } catch (f) {
            Z.error(f);
          }
        }
      }),
      (e.prototype._handleResponse = function (t) {
        var r = t.requestType,
          n = t.response,
          i = t.headers,
          a = t.resolve,
          o = t.reject,
          f = gm(n.status),
          c = this._handleRateLimit(i);
        if ((c && ze() && Z.warn("Too many " + r + " requests, backing off until: " + this._disabledUntil(r)), f === "success")) {
          a({ status: f });
          return;
        }
        o(n);
      }),
      (e.prototype._disabledUntil = function (t) {
        var r = If(t);
        return this._rateLimits[r] || this._rateLimits.all;
      }),
      (e.prototype._isRateLimited = function (t) {
        return this._disabledUntil(t) > new Date(Date.now());
      }),
      (e.prototype._handleRateLimit = function (t) {
        var r,
          n,
          i,
          a,
          o = Date.now(),
          f = t["x-sentry-rate-limits"],
          c = t["retry-after"];
        if (f) {
          try {
            for (var h = ar(f.trim().split(",")), g = h.next(); !g.done; g = h.next()) {
              var b = g.value,
                w = b.split(":", 2),
                A = parseInt(w[0], 10),
                S = (isNaN(A) ? 60 : A) * 1e3;
              try {
                for (var T = ((i = void 0), ar(w[1].split(";"))), L = T.next(); !L.done; L = T.next()) {
                  var N = L.value;
                  this._rateLimits[N || "all"] = new Date(o + S);
                }
              } catch (U) {
                i = { error: U };
              } finally {
                try {
                  L && !L.done && (a = T.return) && a.call(T);
                } finally {
                  if (i) throw i.error;
                }
              }
            }
          } catch (U) {
            r = { error: U };
          } finally {
            try {
              g && !g.done && (n = h.return) && n.call(h);
            } finally {
              if (r) throw r.error;
            }
          }
          return !0;
        } else if (c) return (this._rateLimits.all = new Date(o + dm(o, c))), !0;
        return !1;
      }),
      e
    );
  })(),
  ty = (function (e) {
    or(t, e);
    function t(r, n) {
      n === void 0 && (n = Sc());
      var i = e.call(this, r) || this;
      return (i._fetch = n), i;
    }
    return (
      (t.prototype._sendRequest = function (r, n) {
        var i = this;
        if (this._isRateLimited(r.type)) return this.recordLostEvent("ratelimit_backoff", r.type), Promise.reject({ event: n, type: r.type, reason: "Transport for " + r.type + " requests locked till " + this._disabledUntil(r.type) + " due to too many requests.", status: 429 });
        var a = { body: r.body, method: "POST", referrerPolicy: Jg() ? "origin" : "" };
        return (
          this.options.fetchParameters !== void 0 && Object.assign(a, this.options.fetchParameters),
          this.options.headers !== void 0 && (a.headers = this.options.headers),
          this._buffer
            .add(function () {
              return new Lr(function (o, f) {
                i._fetch(r.url, a)
                  .then(function (c) {
                    var h = { "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"), "retry-after": c.headers.get("Retry-After") };
                    i._handleResponse({ requestType: r.type, response: c, headers: h, resolve: o, reject: f });
                  })
                  .catch(f);
              });
            })
            .then(void 0, function (o) {
              throw (o instanceof Xe ? i.recordLostEvent("queue_overflow", r.type) : i.recordLostEvent("network_error", r.type), o);
            })
        );
      }),
      t
    );
  })(Tc),
  ry = (function (e) {
    or(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype._sendRequest = function (r, n) {
        var i = this;
        return this._isRateLimited(r.type)
          ? (this.recordLostEvent("ratelimit_backoff", r.type), Promise.reject({ event: n, type: r.type, reason: "Transport for " + r.type + " requests locked till " + this._disabledUntil(r.type) + " due to too many requests.", status: 429 }))
          : this._buffer
              .add(function () {
                return new Lr(function (a, o) {
                  var f = new XMLHttpRequest();
                  (f.onreadystatechange = function () {
                    if (f.readyState === 4) {
                      var h = { "x-sentry-rate-limits": f.getResponseHeader("X-Sentry-Rate-Limits"), "retry-after": f.getResponseHeader("Retry-After") };
                      i._handleResponse({ requestType: r.type, response: f, headers: h, resolve: a, reject: o });
                    }
                  }),
                    f.open("POST", r.url);
                  for (var c in i.options.headers) Object.prototype.hasOwnProperty.call(i.options.headers, c) && f.setRequestHeader(c, i.options.headers[c]);
                  f.send(r.body);
                });
              })
              .then(void 0, function (a) {
                throw (a instanceof Xe ? i.recordLostEvent("queue_overflow", r.type) : i.recordLostEvent("network_error", r.type), a);
              });
      }),
      t
    );
  })(Tc),
  ny = (function (e) {
    or(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.eventFromException = function (r, n) {
        return Qm(this._options, r, n);
      }),
      (t.prototype.eventFromMessage = function (r, n, i) {
        return n === void 0 && (n = Ht.Info), Zm(this._options, r, n, i);
      }),
      (t.prototype._setupTransport = function () {
        if (!this._options.dsn) return e.prototype._setupTransport.call(this);
        var r = j(j({}, this._options.transportOptions), { dsn: this._options.dsn, tunnel: this._options.tunnel, sendClientReports: this._options.sendClientReports, _metadata: this._options._metadata });
        return this._options.transport ? new this._options.transport(r) : la() ? new ty(r) : new ry(r);
      }),
      t
    );
  })(Lm),
  wi = Ae(),
  Ms = 0;
function Ec() {
  return Ms > 0;
}
function iy() {
  (Ms += 1),
    setTimeout(function () {
      Ms -= 1;
    });
}
function an(e, t, r) {
  if ((t === void 0 && (t = {}), typeof e != "function")) return e;
  try {
    var n = e.__sentry_wrapped__;
    if (n) return n;
    if (mo(e)) return e;
  } catch {
    return e;
  }
  var i = function () {
    var f = Array.prototype.slice.call(arguments);
    try {
      r && typeof r == "function" && r.apply(this, arguments);
      var c = f.map(function (h) {
        return an(h, t);
      });
      return e.apply(this, c);
    } catch (h) {
      throw (
        (iy(),
        Sm(function (g) {
          g.addEventProcessor(function (b) {
            return t.mechanism && (Is(b, void 0, void 0), Bn(b, t.mechanism)), (b.extra = j(j({}, b.extra), { arguments: f })), b;
          }),
            vc(h);
        }),
        h)
      );
    }
  };
  try {
    for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (i[a] = e[a]);
  } catch {}
  sc(i, e), fa(e, "__sentry_wrapped__", i);
  try {
    var o = Object.getOwnPropertyDescriptor(i, "name");
    o.configurable &&
      Object.defineProperty(i, "name", {
        get: function () {
          return e.name;
        },
      });
  } catch {}
  return i;
}
function ay(e) {
  if ((e === void 0 && (e = {}), !!wi.document)) {
    if (!e.eventId) {
      ze() && Z.error("Missing eventId option in showReportDialog call");
      return;
    }
    if (!e.dsn) {
      ze() && Z.error("Missing dsn option in showReportDialog call");
      return;
    }
    var t = wi.document.createElement("script");
    (t.async = !0), (t.src = Om(e.dsn, e)), e.onLoad && (t.onload = e.onLoad);
    var r = wi.document.head || wi.document.body;
    r && r.appendChild(t);
  }
}
var Eo = (function () {
  function e(t) {
    (this.name = e.id), (this._installFunc = { onerror: sy, onunhandledrejection: oy }), (this._options = j({ onerror: !0, onunhandledrejection: !0 }, t));
  }
  return (
    (e.prototype.setupOnce = function () {
      Error.stackTraceLimit = 50;
      var t = this._options;
      for (var r in t) {
        var n = this._installFunc[r];
        n && t[r] && (ly(r), n(), (this._installFunc[r] = void 0));
      }
    }),
    (e.id = "GlobalHandlers"),
    e
  );
})();
function sy() {
  vt("error", function (e) {
    var t = Nr(Oc(), 2),
      r = t[0],
      n = t[1];
    if (!!r.getIntegration(Eo)) {
      var i = e.msg,
        a = e.url,
        o = e.line,
        f = e.column,
        c = e.error;
      if (!(Ec() || (c && c.__sentry_own_request__))) {
        var h = c === void 0 && en(i) ? fy(i, a, o, f) : xc(To(c || i, void 0, { attachStacktrace: n, isRejection: !1 }), a, o, f);
        (h.level = Ht.Error), Cc(r, c, h, "onerror");
      }
    }
  });
}
function oy() {
  vt("unhandledrejection", function (e) {
    var t = Nr(Oc(), 2),
      r = t[0],
      n = t[1];
    if (!!r.getIntegration(Eo)) {
      var i = e;
      try {
        "reason" in e ? (i = e.reason) : "detail" in e && "reason" in e.detail && (i = e.detail.reason);
      } catch {}
      if (Ec() || (i && i.__sentry_own_request__)) return !0;
      var a = oa(i) ? uy(i) : To(i, void 0, { attachStacktrace: n, isRejection: !0 });
      (a.level = Ht.Error), Cc(r, i, a, "onunhandledrejection");
    }
  });
}
function uy(e) {
  return { exception: { values: [{ type: "UnhandledRejection", value: "Non-Error promise rejection captured with value: " + String(e) }] } };
}
function fy(e, t, r, n) {
  var i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
    a = ic(e) ? e.message : e,
    o = "Error",
    f = a.match(i);
  f && ((o = f[1]), (a = f[2]));
  var c = { exception: { values: [{ type: o, value: a }] } };
  return xc(c, t, r, n);
}
function xc(e, t, r, n) {
  var i = (e.exception = e.exception || {}),
    a = (i.values = i.values || []),
    o = (a[0] = a[0] || {}),
    f = (o.stacktrace = o.stacktrace || {}),
    c = (f.frames = f.frames || []),
    h = isNaN(parseInt(n, 10)) ? void 0 : n,
    g = isNaN(parseInt(r, 10)) ? void 0 : r,
    b = en(t) && t.length > 0 ? t : Lg();
  return c.length === 0 && c.push({ colno: h, filename: b, function: "?", in_app: !0, lineno: g }), e;
}
function ly(e) {
  ze() && Z.log("Global Handler attached: " + e);
}
function Cc(e, t, r, n) {
  Bn(r, { handled: !1, type: n }), e.captureEvent(r, { originalException: t });
}
function Oc() {
  var e = He(),
    t = e.getClient(),
    r = t && t.getOptions().attachStacktrace;
  return [e, r];
}
var cy = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload",
  ],
  dy = (function () {
    function e(t) {
      (this.name = e.id), (this._options = j({ XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0 }, t));
    }
    return (
      (e.prototype.setupOnce = function () {
        var t = Ae();
        this._options.setTimeout && Je(t, "setTimeout", Nf), this._options.setInterval && Je(t, "setInterval", Nf), this._options.requestAnimationFrame && Je(t, "requestAnimationFrame", py), this._options.XMLHttpRequest && "XMLHttpRequest" in t && Je(XMLHttpRequest.prototype, "send", hy);
        var r = this._options.eventTarget;
        if (r) {
          var n = Array.isArray(r) ? r : cy;
          n.forEach(vy);
        }
      }),
      (e.id = "TryCatch"),
      e
    );
  })();
function Nf(e) {
  return function () {
    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
    var n = t[0];
    return (t[0] = an(n, { mechanism: { data: { function: sr(e) }, handled: !0, type: "instrument" } })), e.apply(this, t);
  };
}
function py(e) {
  return function (t) {
    return e.call(this, an(t, { mechanism: { data: { function: "requestAnimationFrame", handler: sr(e) }, handled: !0, type: "instrument" } }));
  };
}
function hy(e) {
  return function () {
    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
    var n = this,
      i = ["onload", "onerror", "onprogress", "onreadystatechange"];
    return (
      i.forEach(function (a) {
        a in n &&
          typeof n[a] == "function" &&
          Je(n, a, function (o) {
            var f = { mechanism: { data: { function: a, handler: sr(o) }, handled: !0, type: "instrument" } },
              c = mo(o);
            return c && (f.mechanism.data.handler = sr(c)), an(o, f);
          });
      }),
      e.apply(this, t)
    );
  };
}
function vy(e) {
  var t = Ae(),
    r = t[e] && t[e].prototype;
  !r ||
    !r.hasOwnProperty ||
    !r.hasOwnProperty("addEventListener") ||
    (Je(r, "addEventListener", function (n) {
      return function (i, a, o) {
        try {
          typeof a.handleEvent == "function" && (a.handleEvent = an(a.handleEvent.bind(a), { mechanism: { data: { function: "handleEvent", handler: sr(a), target: e }, handled: !0, type: "instrument" } }));
        } catch {}
        return n.call(this, i, an(a, { mechanism: { data: { function: "addEventListener", handler: sr(a), target: e }, handled: !0, type: "instrument" } }), o);
      };
    }),
    Je(r, "removeEventListener", function (n) {
      return function (i, a, o) {
        var f = a;
        try {
          var c = f && f.__sentry_wrapped__;
          c && n.call(this, i, c, o);
        } catch {}
        return n.call(this, i, f, o);
      };
    }));
}
var Ac = (function () {
  function e(t) {
    (this.name = e.id), (this._options = j({ console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 }, t));
  }
  return (
    (e.prototype.addSentryBreadcrumb = function (t) {
      !this._options.sentry || He().addBreadcrumb({ category: "sentry." + (t.type === "transaction" ? "transaction" : "event"), event_id: t.event_id, level: t.level, message: br(t) }, { event: t });
    }),
    (e.prototype.setupOnce = function () {
      this._options.console && vt("console", my), this._options.dom && vt("dom", gy(this._options.dom)), this._options.xhr && vt("xhr", yy), this._options.fetch && vt("fetch", by), this._options.history && vt("history", _y);
    }),
    (e.id = "Breadcrumbs"),
    e
  );
})();
function gy(e) {
  function t(r) {
    var n,
      i = typeof e == "object" ? e.serializeAttribute : void 0;
    typeof i == "string" && (i = [i]);
    try {
      n = r.event.target ? rn(r.event.target, i) : rn(r.event, i);
    } catch {
      n = "<unknown>";
    }
    n.length !== 0 && He().addBreadcrumb({ category: "ui." + r.name, message: n }, { event: r.event, name: r.name, global: r.global });
  }
  return t;
}
function my(e) {
  var t = { category: "console", data: { arguments: e.args, logger: "console" }, level: vm(e.level), message: mf(e.args, " ") };
  if (e.level === "assert")
    if (e.args[0] === !1) (t.message = "Assertion failed: " + (mf(e.args.slice(1), " ") || "console.assert")), (t.data.arguments = e.args.slice(1));
    else return;
  He().addBreadcrumb(t, { input: e.args, level: e.level });
}
function yy(e) {
  if (e.endTimestamp) {
    if (e.xhr.__sentry_own_request__) return;
    var t = e.xhr.__sentry_xhr__ || {},
      r = t.method,
      n = t.url,
      i = t.status_code,
      a = t.body;
    He().addBreadcrumb({ category: "xhr", data: { method: r, url: n, status_code: i }, type: "http" }, { xhr: e.xhr, input: a });
    return;
  }
}
function by(e) {
  !e.endTimestamp ||
    (e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST") ||
    (e.error
      ? He().addBreadcrumb({ category: "fetch", data: e.fetchData, level: Ht.Error, type: "http" }, { data: e.error, input: e.args })
      : He().addBreadcrumb({ category: "fetch", data: j(j({}, e.fetchData), { status_code: e.response.status }), type: "http" }, { input: e.args, response: e.response }));
}
function _y(e) {
  var t = Ae(),
    r = e.from,
    n = e.to,
    i = Ja(t.location.href),
    a = Ja(r),
    o = Ja(n);
  a.path || (a = i), i.protocol === o.protocol && i.host === o.host && (n = o.relative), i.protocol === a.protocol && i.host === a.host && (r = a.relative), He().addBreadcrumb({ category: "navigation", data: { from: r, to: n } });
}
var wy = "cause",
  Sy = 5,
  Ty = (function () {
    function e(t) {
      t === void 0 && (t = {}), (this.name = e.id), (this._key = t.key || wy), (this._limit = t.limit || Sy);
    }
    return (
      (e.prototype.setupOnce = function () {
        da(function (t, r) {
          var n = He().getIntegration(e);
          return n ? Ey(n._key, n._limit, t, r) : t;
        });
      }),
      (e.id = "LinkedErrors"),
      e
    );
  })();
function Ey(e, t, r, n) {
  if (!r.exception || !r.exception.values || !n || !Ft(n.originalException, Error)) return r;
  var i = kc(t, n.originalException, e);
  return (r.exception.values = Be(i, r.exception.values)), r;
}
function kc(e, t, r, n) {
  if ((n === void 0 && (n = []), !Ft(t[r], Error) || n.length + 1 >= e)) return n;
  var i = Qr(t[r]),
    a = wc(i);
  return kc(e, t[r], r, Be([a], n));
}
var yr = Ae(),
  xy = (function () {
    function e() {
      this.name = e.id;
    }
    return (
      (e.prototype.setupOnce = function () {
        da(function (t) {
          if (He().getIntegration(e)) {
            if (!yr.navigator && !yr.location && !yr.document) return t;
            var r = (t.request && t.request.url) || (yr.location && yr.location.href),
              n = (yr.document || {}).referrer,
              i = (yr.navigator || {}).userAgent,
              a = j(j(j({}, t.request && t.request.headers), n && { Referer: n }), i && { "User-Agent": i }),
              o = j(j({}, r && { url: r }), { headers: a });
            return j(j({}, t), { request: o });
          }
          return t;
        });
      }),
      (e.id = "UserAgent"),
      e
    );
  })(),
  Cy = (function () {
    function e() {
      this.name = e.id;
    }
    return (
      (e.prototype.setupOnce = function (t, r) {
        t(function (n) {
          var i = r().getIntegration(e);
          if (i) {
            try {
              if (Oy(n, i._previousEvent)) return Z.warn("Event dropped due to being a duplicate of previously captured event."), null;
            } catch {
              return (i._previousEvent = n);
            }
            return (i._previousEvent = n);
          }
          return n;
        });
      }),
      (e.id = "Dedupe"),
      e
    );
  })();
function Oy(e, t) {
  return t ? !!(Ay(e, t) || ky(e, t)) : !1;
}
function Ay(e, t) {
  var r = e.message,
    n = t.message;
  return !((!r && !n) || (r && !n) || (!r && n) || r !== n || !Ic(e, t) || !Pc(e, t));
}
function ky(e, t) {
  var r = Rf(t),
    n = Rf(e);
  return !(!r || !n || r.type !== n.type || r.value !== n.value || !Ic(e, t) || !Pc(e, t));
}
function Pc(e, t) {
  var r = Lf(e),
    n = Lf(t);
  if (!r && !n) return !0;
  if ((r && !n) || (!r && n) || ((r = r), (n = n), n.length !== r.length)) return !1;
  for (var i = 0; i < n.length; i++) {
    var a = n[i],
      o = r[i];
    if (a.filename !== o.filename || a.lineno !== o.lineno || a.colno !== o.colno || a.function !== o.function) return !1;
  }
  return !0;
}
function Ic(e, t) {
  var r = e.fingerprint,
    n = t.fingerprint;
  if (!r && !n) return !0;
  if ((r && !n) || (!r && n)) return !1;
  (r = r), (n = n);
  try {
    return r.join("") === n.join("");
  } catch {
    return !1;
  }
}
function Rf(e) {
  return e.exception && e.exception.values && e.exception.values[0];
}
function Lf(e) {
  var t = e.exception;
  if (t)
    try {
      return t.values[0].stacktrace.frames;
    } catch {
      return;
    }
  else if (e.stacktrace) return e.stacktrace.frames;
}
var Py = (function (e) {
    or(t, e);
    function t(r) {
      r === void 0 && (r = {});
      var n = this;
      return (r._metadata = r._metadata || {}), (r._metadata.sdk = r._metadata.sdk || { name: "sentry.javascript.browser", packages: [{ name: "npm:@sentry/browser", version: Ki }], version: Ki }), (n = e.call(this, ny, r) || this), n;
    }
    return (
      (t.prototype.showReportDialog = function (r) {
        r === void 0 && (r = {});
        var n = Ae().document;
        if (!!n) {
          if (!this._isEnabled()) {
            Z.error("Trying to call showReportDialog with Sentry Client disabled");
            return;
          }
          ay(j(j({}, r), { dsn: r.dsn || this.getDsn() }));
        }
      }),
      (t.prototype._prepareEvent = function (r, n, i) {
        return (r.platform = r.platform || "javascript"), e.prototype._prepareEvent.call(this, r, n, i);
      }),
      (t.prototype._sendEvent = function (r) {
        var n = this.getIntegration(Ac);
        n && n.addSentryBreadcrumb(r), e.prototype._sendEvent.call(this, r);
      }),
      t
    );
  })(Im),
  Iy = [new Bm(), new Hm(), new dy(), new Ac(), new Eo(), new Ty(), new Cy(), new xy()];
function Ny(e) {
  if ((e === void 0 && (e = {}), e.defaultIntegrations === void 0 && (e.defaultIntegrations = Iy), e.release === void 0)) {
    var t = Ae();
    t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id);
  }
  e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0), e.sendClientReports === void 0 && (e.sendClientReports = !0), jm(Py, e), e.autoSessionTracking && Ry();
}
function Mf(e) {
  e.startSession({ ignoreDuration: !0 }), e.captureSession();
}
function Ry() {
  var e = Ae(),
    t = e.document;
  if (typeof t == "undefined") {
    ze() && Z.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
    return;
  }
  var r = He();
  !r.captureSession ||
    (Mf(r),
    vt("history", function (n) {
      var i = n.from,
        a = n.to;
      i === void 0 || i === a || Mf(He());
    }));
}
var Nc = ["activate", "mount", "update"],
  Ly = /(?:^|[-_])(\w)/g,
  My = function (e) {
    return e
      .replace(Ly, function (t) {
        return t.toUpperCase();
      })
      .replace(/[-_]/g, "");
  },
  $y = "<Root>",
  $f = "<Anonymous>",
  Dy = function (e, t) {
    for (var r = ""; t; ) t % 2 === 1 && (r += e), t > 1 && (e += e), (t >>= 1);
    return r;
  },
  Mn = function (e, t) {
    if (!e) return $f;
    if (e.$root === e) return $y;
    var r = e.$options,
      n = r.name || r._componentTag,
      i = r.__file;
    if (!n && i) {
      var a = i.match(/([^/\\]+)\.vue$/);
      a && (n = a[1]);
    }
    return (n ? "<" + My(n) + ">" : $f) + (i && t !== !1 ? " at " + i : "");
  },
  jy = function (e) {
    var t, r, n;
    if ((((t = e) === null || t === void 0 ? void 0 : t._isVue) || ((r = e) === null || r === void 0 ? void 0 : r.__isVue)) && ((n = e) === null || n === void 0 ? void 0 : n.$parent)) {
      for (var i = [], a = 0; e; ) {
        if (i.length > 0) {
          var o = i[i.length - 1];
          if (o.constructor === e.constructor) {
            (a += 1), (e = e.$parent);
            continue;
          } else a > 0 && ((i[i.length - 1] = [o, a]), (a = 0));
        }
        i.push(e), (e = e.$parent);
      }
      var f = i.map(function (c, h) {
        return "" + ((h === 0 ? "---> " : Dy(" ", 5 + h * 2)) + (Array.isArray(c) ? Mn(c[0]) + "... (" + c[1] + " recursive calls)" : Mn(c)));
      }).join(`
`);
      return (
        `

found in

` + f
      );
    }
    return (
      `

(found in ` +
      Mn(e) +
      ")"
    );
  },
  Hy = function (e, t) {
    var r = e.config,
      n = r.errorHandler,
      i = r.warnHandler,
      a = r.silent;
    e.config.errorHandler = function (o, f, c) {
      var h = Mn(f, !1),
        g = f ? jy(f) : "",
        b = { componentName: h, lifecycleHook: c, trace: g };
      if (
        (f && t.attachProps && (b.propsData = f.$options.propsData || f.$props),
        setTimeout(function () {
          He().withScope(function (S) {
            S.setContext("vue", b), He().captureException(o);
          });
        }),
        typeof n == "function" && n.call(e, o, f, c),
        t.logErrors)
      ) {
        var w = typeof console != "undefined",
          A = "Error in " + c + ': "' + (o && o.toString()) + '"';
        i ? i.call(null, A, f, g) : w && !a && console.error("[Vue warn]: " + A + g);
      }
    };
  },
  Df = "ui.vue",
  Fy = { activate: ["activated", "deactivated"], create: ["beforeCreate", "created"], destroy: ["beforeDestroy", "destroyed"], mount: ["beforeMount", "mounted"], update: ["beforeUpdate", "updated"] };
function jf() {
  var e;
  return (e = He().getScope()) === null || e === void 0 ? void 0 : e.getTransaction();
}
function By(e, t, r) {
  e.$_sentryRootSpanTimer && clearTimeout(e.$_sentryRootSpanTimer),
    (e.$_sentryRootSpanTimer = setTimeout(function () {
      var n;
      ((n = e.$root) === null || n === void 0 ? void 0 : n.$_sentryRootSpan) && (e.$root.$_sentryRootSpan.finish(t), (e.$root.$_sentryRootSpan = void 0));
    }, r));
}
var qy = function (e) {
    var t,
      r,
      n = (e.hooks || []).concat(Nc).filter(function (h, g, b) {
        return b.indexOf(h) === g;
      }),
      i = {},
      a = function (h) {
        var g,
          b,
          w = Fy[h];
        if (!w) return Z.warn("Unknown hook: " + h), "continue";
        var A = function (N) {
          i[N] = function () {
            var U,
              H = this.$root === this;
            if (H) {
              var q = jf();
              q && (this.$_sentryRootSpan = this.$_sentryRootSpan || q.startChild({ description: "Application Render", op: Df }));
            }
            var ie = Mn(this, !1),
              p = Array.isArray(e.trackComponents) ? e.trackComponents.includes(ie) : e.trackComponents;
            if (!(!H && !p))
              if (((this.$_sentrySpans = this.$_sentrySpans || {}), N == w[0])) {
                var q = ((U = this.$root) === null || U === void 0 ? void 0 : U.$_sentryRootSpan) || jf();
                q && (this.$_sentrySpans[h] = q.startChild({ description: "Vue <" + ie + ">", op: Df + "." + h }));
              } else {
                var se = this.$_sentrySpans[h];
                if (!se) return;
                se.finish(), By(this, Yi(), e.timeout);
              }
          };
        };
        try {
          for (var S = ((g = void 0), ar(w)), T = S.next(); !T.done; T = S.next()) {
            var L = T.value;
            A(L);
          }
        } catch (N) {
          g = { error: N };
        } finally {
          try {
            T && !T.done && (b = S.return) && b.call(S);
          } finally {
            if (g) throw g.error;
          }
        }
      };
    try {
      for (var o = ar(n), f = o.next(); !f.done; f = o.next()) {
        var c = f.value;
        a(c);
      }
    } catch (h) {
      t = { error: h };
    } finally {
      try {
        f && !f.done && (r = o.return) && r.call(o);
      } finally {
        if (t) throw t.error;
      }
    }
    return i;
  },
  zy = { Vue: Ae().Vue, attachProps: !0, logErrors: !1, hooks: Nc, timeout: 2e3, trackComponents: !1, _metadata: { sdk: { name: "sentry.javascript.vue", packages: [{ name: "npm:@sentry/vue", version: Ki }], version: Ki } } };
function Lw(e) {
  e === void 0 && (e = {});
  var t = j(j({}, zy), e);
  if ((Ny(t), !t.Vue && !t.app)) {
    Z.warn("Misconfigured SDK. Vue specific errors will not be captured.\nUpdate your `Sentry.init` call with an appropriate config option:\n`app` (Application Instance - Vue 3) or `Vue` (Vue Constructor - Vue 2).");
    return;
  }
  if (t.app) {
    var r = Array.isArray(t.app) ? t.app : [t.app];
    r.forEach(function (n) {
      return Hf(n, t);
    });
  } else t.Vue && Hf(t.Vue, t);
}
var Hf = function (e, t) {
  Hy(e, t), ("tracesSampleRate" in t || "tracesSampler" in t) && e.mixin(qy(j(j({}, t), t.tracingOptions)));
};
function Mw(e) {
  return function (t, r, n) {
    r === void 0 && (r = !0),
      n === void 0 && (n = !0),
      e.onError(function (i) {
        return vc(i);
      }),
      e.beforeEach(function (i, a, o) {
        var f = a.name == null && a.matched.length === 0,
          c = { "routing.instrumentation": "vue-router" },
          h = { params: i.params, query: i.query };
        r && f && t({ name: i.name.toString() || i.path, op: "pageload", tags: c, data: h }), n && !f && t({ name: i.name.toString() || (i.matched[0] && i.matched[0].path) || i.path, op: "navigation", tags: c, data: h }), o();
      });
  };
}
var Uy = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
function xo(e) {
  var t = He().getClient(),
    r = e || (t && t.getOptions());
  return !!r && ("tracesSampleRate" in r || "tracesSampler" in r);
}
function Wy(e) {
  var t = e.match(Uy);
  if (t) {
    var r = void 0;
    return t[3] === "1" ? (r = !0) : t[3] === "0" && (r = !1), { traceId: t[1], parentSampled: r, parentSpanId: t[2] };
  }
}
function ha(e) {
  var t = e || He(),
    r = t.getScope();
  return r && r.getTransaction();
}
function Ve(e) {
  return e / 1e3;
}
function Gy(e) {
  return e * 1e3;
}
function Xy() {
  vt("error", Ff), vt("unhandledrejection", Ff);
}
function Ff() {
  var e = ha();
  if (e) {
    var t = "internal_error";
    Z.log("[Tracing] Transaction: " + t + " -> Global error occured"), e.setStatus(t);
  }
}
var $s = "finishReason",
  Ds = ["heartbeatFailed", "idleTimeout", "documentHidden"],
  Rc = (function () {
    function e(t) {
      t === void 0 && (t = 1e3), (this.spans = []), (this._maxlen = t);
    }
    return (
      (e.prototype.add = function (t) {
        this.spans.length > this._maxlen ? (t.spanRecorder = void 0) : this.spans.push(t);
      }),
      e
    );
  })(),
  Yy = (function () {
    function e(t) {
      if (((this.traceId = er()), (this.spanId = er().substring(16)), (this.startTimestamp = qn()), (this.tags = {}), (this.data = {}), !t)) return this;
      t.traceId && (this.traceId = t.traceId),
        t.spanId && (this.spanId = t.spanId),
        t.parentSpanId && (this.parentSpanId = t.parentSpanId),
        "sampled" in t && (this.sampled = t.sampled),
        t.op && (this.op = t.op),
        t.description && (this.description = t.description),
        t.data && (this.data = t.data),
        t.tags && (this.tags = t.tags),
        t.status && (this.status = t.status),
        t.startTimestamp && (this.startTimestamp = t.startTimestamp),
        t.endTimestamp && (this.endTimestamp = t.endTimestamp);
    }
    return (
      (e.prototype.child = function (t) {
        return this.startChild(t);
      }),
      (e.prototype.startChild = function (t) {
        var r = new e(j(j({}, t), { parentSpanId: this.spanId, sampled: this.sampled, traceId: this.traceId }));
        return (r.spanRecorder = this.spanRecorder), r.spanRecorder && r.spanRecorder.add(r), (r.transaction = this.transaction), r;
      }),
      (e.prototype.setTag = function (t, r) {
        var n;
        return (this.tags = j(j({}, this.tags), ((n = {}), (n[t] = r), n))), this;
      }),
      (e.prototype.setData = function (t, r) {
        var n;
        return (this.data = j(j({}, this.data), ((n = {}), (n[t] = r), n))), this;
      }),
      (e.prototype.setStatus = function (t) {
        return (this.status = t), this;
      }),
      (e.prototype.setHttpStatus = function (t) {
        this.setTag("http.status_code", String(t));
        var r = Vy(t);
        return r !== "unknown_error" && this.setStatus(r), this;
      }),
      (e.prototype.isSuccess = function () {
        return this.status === "ok";
      }),
      (e.prototype.finish = function (t) {
        this.endTimestamp = typeof t == "number" ? t : qn();
      }),
      (e.prototype.toTraceparent = function () {
        var t = "";
        return this.sampled !== void 0 && (t = this.sampled ? "-1" : "-0"), this.traceId + "-" + this.spanId + t;
      }),
      (e.prototype.toContext = function () {
        return xr({ data: this.data, description: this.description, endTimestamp: this.endTimestamp, op: this.op, parentSpanId: this.parentSpanId, sampled: this.sampled, spanId: this.spanId, startTimestamp: this.startTimestamp, status: this.status, tags: this.tags, traceId: this.traceId });
      }),
      (e.prototype.updateWithContext = function (t) {
        var r, n, i, a, o;
        return (
          (this.data = ((r = t.data), r != null ? r : {})),
          (this.description = t.description),
          (this.endTimestamp = t.endTimestamp),
          (this.op = t.op),
          (this.parentSpanId = t.parentSpanId),
          (this.sampled = t.sampled),
          (this.spanId = ((n = t.spanId), n != null ? n : this.spanId)),
          (this.startTimestamp = ((i = t.startTimestamp), i != null ? i : this.startTimestamp)),
          (this.status = t.status),
          (this.tags = ((a = t.tags), a != null ? a : {})),
          (this.traceId = ((o = t.traceId), o != null ? o : this.traceId)),
          this
        );
      }),
      (e.prototype.getTraceContext = function () {
        return xr({ data: Object.keys(this.data).length > 0 ? this.data : void 0, description: this.description, op: this.op, parent_span_id: this.parentSpanId, span_id: this.spanId, status: this.status, tags: Object.keys(this.tags).length > 0 ? this.tags : void 0, trace_id: this.traceId });
      }),
      (e.prototype.toJSON = function () {
        return xr({
          data: Object.keys(this.data).length > 0 ? this.data : void 0,
          description: this.description,
          op: this.op,
          parent_span_id: this.parentSpanId,
          span_id: this.spanId,
          start_timestamp: this.startTimestamp,
          status: this.status,
          tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
          timestamp: this.endTimestamp,
          trace_id: this.traceId,
        });
      }),
      e
    );
  })();
function Vy(e) {
  if (e < 400 && e >= 100) return "ok";
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return "unauthenticated";
      case 403:
        return "permission_denied";
      case 404:
        return "not_found";
      case 409:
        return "already_exists";
      case 413:
        return "failed_precondition";
      case 429:
        return "resource_exhausted";
      default:
        return "invalid_argument";
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return "unimplemented";
      case 503:
        return "unavailable";
      case 504:
        return "deadline_exceeded";
      default:
        return "internal_error";
    }
  return "unknown_error";
}
var Lc = (function (e) {
    or(t, e);
    function t(r, n) {
      var i = e.call(this, r) || this;
      return (i._measurements = {}), (i._hub = He()), Ft(n, pa) && (i._hub = n), (i.name = r.name || ""), (i.metadata = r.metadata || {}), (i._trimEnd = r.trimEnd), (i.transaction = i), i;
    }
    return (
      (t.prototype.setName = function (r) {
        this.name = r;
      }),
      (t.prototype.initSpanRecorder = function (r) {
        r === void 0 && (r = 1e3), this.spanRecorder || (this.spanRecorder = new Rc(r)), this.spanRecorder.add(this);
      }),
      (t.prototype.setMeasurements = function (r) {
        this._measurements = j({}, r);
      }),
      (t.prototype.setMetadata = function (r) {
        this.metadata = j(j({}, this.metadata), r);
      }),
      (t.prototype.finish = function (r) {
        var n = this;
        if (this.endTimestamp === void 0) {
          if ((this.name || (Z.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), (this.name = "<unlabeled transaction>")), e.prototype.finish.call(this, r), this.sampled !== !0)) {
            Z.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
            var i = this._hub.getClient(),
              a = i && i.getTransport && i.getTransport();
            a && a.recordLostEvent && a.recordLostEvent("sample_rate", "transaction");
            return;
          }
          var o = this.spanRecorder
            ? this.spanRecorder.spans.filter(function (h) {
                return h !== n && h.endTimestamp;
              })
            : [];
          this._trimEnd &&
            o.length > 0 &&
            (this.endTimestamp = o.reduce(function (h, g) {
              return h.endTimestamp && g.endTimestamp ? (h.endTimestamp > g.endTimestamp ? h : g) : h;
            }).endTimestamp);
          var f = { contexts: { trace: this.getTraceContext() }, spans: o, start_timestamp: this.startTimestamp, tags: this.tags, timestamp: this.endTimestamp, transaction: this.name, type: "transaction", sdkProcessingMetadata: this.metadata },
            c = Object.keys(this._measurements).length > 0;
          return c && (Z.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), (f.measurements = this._measurements)), Z.log("[Tracing] Finishing " + this.op + " transaction: " + this.name + "."), this._hub.captureEvent(f);
        }
      }),
      (t.prototype.toContext = function () {
        var r = e.prototype.toContext.call(this);
        return xr(j(j({}, r), { name: this.name, trimEnd: this._trimEnd }));
      }),
      (t.prototype.updateWithContext = function (r) {
        var n;
        return e.prototype.updateWithContext.call(this, r), (this.name = ((n = r.name), n != null ? n : "")), (this._trimEnd = r.trimEnd), this;
      }),
      t
    );
  })(Yy),
  Mc = 1e3,
  Ky = 5e3,
  Jy = (function (e) {
    or(t, e);
    function t(r, n, i, a) {
      i === void 0 && (i = "");
      var o = e.call(this, a) || this;
      return (o._pushActivity = r), (o._popActivity = n), (o.transactionSpanId = i), o;
    }
    return (
      (t.prototype.add = function (r) {
        var n = this;
        r.spanId !== this.transactionSpanId &&
          ((r.finish = function (i) {
            (r.endTimestamp = typeof i == "number" ? i : qn()), n._popActivity(r.spanId);
          }),
          r.endTimestamp === void 0 && this._pushActivity(r.spanId)),
          e.prototype.add.call(this, r);
      }),
      t
    );
  })(Rc),
  Qy = (function (e) {
    or(t, e);
    function t(r, n, i, a) {
      i === void 0 && (i = Mc), a === void 0 && (a = !1);
      var o = e.call(this, r, n) || this;
      return (
        (o._idleHub = n),
        (o._idleTimeout = i),
        (o._onScope = a),
        (o.activities = {}),
        (o._heartbeatCounter = 0),
        (o._finished = !1),
        (o._beforeFinishCallbacks = []),
        n &&
          a &&
          (Bf(n),
          Z.log("Setting idle transaction on scope. Span ID: " + o.spanId),
          n.configureScope(function (f) {
            return f.setSpan(o);
          })),
        (o._initTimeout = setTimeout(function () {
          o._finished || o.finish();
        }, o._idleTimeout)),
        o
      );
    }
    return (
      (t.prototype.finish = function (r) {
        var n,
          i,
          a = this;
        if ((r === void 0 && (r = qn()), (this._finished = !0), (this.activities = {}), this.spanRecorder)) {
          Z.log("[Tracing] finishing IdleTransaction", new Date(r * 1e3).toISOString(), this.op);
          try {
            for (var o = ar(this._beforeFinishCallbacks), f = o.next(); !f.done; f = o.next()) {
              var c = f.value;
              c(this, r);
            }
          } catch (h) {
            n = { error: h };
          } finally {
            try {
              f && !f.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          (this.spanRecorder.spans = this.spanRecorder.spans.filter(function (h) {
            if (h.spanId === a.spanId) return !0;
            h.endTimestamp || ((h.endTimestamp = r), h.setStatus("cancelled"), Z.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(h, void 0, 2)));
            var g = h.startTimestamp < r;
            return g || Z.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(h, void 0, 2)), g;
          })),
            Z.log("[Tracing] flushing IdleTransaction");
        } else Z.log("[Tracing] No active IdleTransaction");
        return this._onScope && Bf(this._idleHub), e.prototype.finish.call(this, r);
      }),
      (t.prototype.registerBeforeFinishCallback = function (r) {
        this._beforeFinishCallbacks.push(r);
      }),
      (t.prototype.initSpanRecorder = function (r) {
        var n = this;
        if (!this.spanRecorder) {
          var i = function (o) {
              n._finished || n._pushActivity(o);
            },
            a = function (o) {
              n._finished || n._popActivity(o);
            };
          (this.spanRecorder = new Jy(i, a, this.spanId, r)), Z.log("Starting heartbeat"), this._pingHeartbeat();
        }
        this.spanRecorder.add(this);
      }),
      (t.prototype._pushActivity = function (r) {
        this._initTimeout && (clearTimeout(this._initTimeout), (this._initTimeout = void 0)), Z.log("[Tracing] pushActivity: " + r), (this.activities[r] = !0), Z.log("[Tracing] new activities count", Object.keys(this.activities).length);
      }),
      (t.prototype._popActivity = function (r) {
        var n = this;
        if ((this.activities[r] && (Z.log("[Tracing] popActivity " + r), delete this.activities[r], Z.log("[Tracing] new activities count", Object.keys(this.activities).length)), Object.keys(this.activities).length === 0)) {
          var i = this._idleTimeout,
            a = qn() + i / 1e3;
          setTimeout(function () {
            n._finished || (n.setTag($s, Ds[1]), n.finish(a));
          }, i);
        }
      }),
      (t.prototype._beat = function () {
        if (!this._finished) {
          var r = Object.keys(this.activities).join("");
          r === this._prevHeartbeatString ? (this._heartbeatCounter += 1) : (this._heartbeatCounter = 1),
            (this._prevHeartbeatString = r),
            this._heartbeatCounter >= 3 ? (Z.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this.setTag($s, Ds[0]), this.finish()) : this._pingHeartbeat();
        }
      }),
      (t.prototype._pingHeartbeat = function () {
        var r = this;
        Z.log("pinging Heartbeat -> current counter: " + this._heartbeatCounter),
          setTimeout(function () {
            r._beat();
          }, Ky);
      }),
      t
    );
  })(Lc);
function Bf(e) {
  if (e) {
    var t = e.getScope();
    if (t) {
      var r = t.getTransaction();
      r && t.setSpan(void 0);
    }
  }
}
function Zy() {
  var e = this.getScope();
  if (e) {
    var t = e.getSpan();
    if (t) return { "sentry-trace": t.toTraceparent() };
  }
  return {};
}
function $c(e, t, r) {
  if (!xo(t)) return (e.sampled = !1), e;
  if (e.sampled !== void 0) return e.setMetadata({ transactionSampling: { method: "explicitly_set" } }), e;
  var n;
  return (
    typeof t.tracesSampler == "function"
      ? ((n = t.tracesSampler(r)), e.setMetadata({ transactionSampling: { method: "client_sampler", rate: Number(n) } }))
      : r.parentSampled !== void 0
      ? ((n = r.parentSampled), e.setMetadata({ transactionSampling: { method: "inheritance" } }))
      : ((n = t.tracesSampleRate), e.setMetadata({ transactionSampling: { method: "client_rate", rate: Number(n) } })),
    eb(n)
      ? n
        ? ((e.sampled = Math.random() < n), e.sampled ? (Z.log("[Tracing] starting " + e.op + " transaction - " + e.name), e) : (Z.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(n) + ")"), e))
        : (Z.log("[Tracing] Discarding transaction because " + (typeof t.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), (e.sampled = !1), e)
      : (Z.warn("[Tracing] Discarding transaction because of invalid sample rate."), (e.sampled = !1), e)
  );
}
function eb(e) {
  return isNaN(e) || !(typeof e == "number" || typeof e == "boolean")
    ? (Z.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + JSON.stringify(e) + " of type " + JSON.stringify(typeof e) + "."), !1)
    : e < 0 || e > 1
    ? (Z.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " + e + "."), !1)
    : !0;
}
function tb(e, t) {
  var r = this.getClient(),
    n = (r && r.getOptions()) || {},
    i = new Lc(e, this);
  return (i = $c(i, n, j({ parentSampled: e.parentSampled, transactionContext: e }, t))), i.sampled && i.initSpanRecorder(n._experiments && n._experiments.maxSpans), i;
}
function rb(e, t, r, n, i) {
  var a = e.getClient(),
    o = (a && a.getOptions()) || {},
    f = new Qy(t, e, r, n);
  return (f = $c(f, o, j({ parentSampled: t.parentSampled, transactionContext: t }, i))), f.sampled && f.initSpanRecorder(o._experiments && o._experiments.maxSpans), f;
}
function nb() {
  var e = cn();
  !e.__SENTRY__ || ((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}), e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = tb), e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = Zy));
}
function ib() {
  var e = cn();
  if (!!e.__SENTRY__) {
    var t = {
        mongodb: function () {
          var n = Qt(module, "./integrations/node/mongo");
          return new n.Mongo();
        },
        mongoose: function () {
          var n = Qt(module, "./integrations/node/mongo");
          return new n.Mongo({ mongoose: !0 });
        },
        mysql: function () {
          var n = Qt(module, "./integrations/node/mysql");
          return new n.Mysql();
        },
        pg: function () {
          var n = Qt(module, "./integrations/node/postgres");
          return new n.Postgres();
        },
      },
      r = Object.keys(t)
        .filter(function (n) {
          return !!Ag(n);
        })
        .map(function (n) {
          try {
            return t[n]();
          } catch {
            return;
          }
        })
        .filter(function (n) {
          return n;
        });
    r.length > 0 && (e.__SENTRY__.integrations = Be(e.__SENTRY__.integrations || [], r));
  }
}
function ab() {
  nb(), Yn() && ib(), Xy();
}
var Si = Ae();
function sb() {
  Si && Si.document
    ? Si.document.addEventListener("visibilitychange", function () {
        var e = ha();
        if (Si.document.hidden && e) {
          var t = "cancelled";
          Z.log("[Tracing] Transaction: " + t + " -> since tab moved to the background, op: " + e.op), e.status || e.setStatus(t), e.setTag("visibilitychange", "document.hidden"), e.setTag($s, Ds[2]), e.finish();
        }
      })
    : Z.warn("[Tracing] Could not set up background tab detection due to lack of global document");
}
var Co = function (e, t, r) {
    var n;
    return function (i) {
      t.value >= 0 && (i || r) && ((t.delta = t.value - (n || 0)), (t.delta || n === void 0) && ((n = t.value), e(t)));
    };
  },
  ob = function () {
    return "v2-" + Date.now() + "-" + (Math.floor(Math.random() * (9e12 - 1)) + 1e12);
  },
  Oo = function (e, t) {
    return { name: e, value: t != null ? t : -1, delta: 0, entries: [], id: ob() };
  },
  Ao = function (e, t) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        if (e === "first-input" && !("PerformanceEventTiming" in self)) return;
        var r = new PerformanceObserver(function (n) {
          return n.getEntries().map(t);
        });
        return r.observe({ type: e, buffered: !0 }), r;
      }
    } catch {}
  },
  va = function (e, t) {
    var r = function (n) {
      (n.type === "pagehide" || Ae().document.visibilityState === "hidden") && (e(n), t && (removeEventListener("visibilitychange", r, !0), removeEventListener("pagehide", r, !0)));
    };
    addEventListener("visibilitychange", r, !0), addEventListener("pagehide", r, !0);
  },
  ub = function (e, t) {
    var r = Oo("CLS", 0),
      n,
      i = 0,
      a = [],
      o = function (c) {
        if (c && !c.hadRecentInput) {
          var h = a[0],
            g = a[a.length - 1];
          i && a.length !== 0 && c.startTime - g.startTime < 1e3 && c.startTime - h.startTime < 5e3 ? ((i += c.value), a.push(c)) : ((i = c.value), (a = [c])), i > r.value && ((r.value = i), (r.entries = a), n && n());
        }
      },
      f = Ao("layout-shift", o);
    f &&
      ((n = Co(e, r, t)),
      va(function () {
        f.takeRecords().map(o), n(!0);
      }));
  },
  Ni = -1,
  fb = function () {
    return Ae().document.visibilityState === "hidden" ? 0 : 1 / 0;
  },
  lb = function () {
    va(function (e) {
      var t = e.timeStamp;
      Ni = t;
    }, !0);
  },
  ko = function () {
    return (
      Ni < 0 && ((Ni = fb()), lb()),
      {
        get firstHiddenTime() {
          return Ni;
        },
      }
    );
  },
  cb = function (e, t) {
    var r = ko(),
      n = Oo("FID"),
      i,
      a = function (f) {
        i && f.startTime < r.firstHiddenTime && ((n.value = f.processingStart - f.startTime), n.entries.push(f), i(!0));
      },
      o = Ao("first-input", a);
    o &&
      ((i = Co(e, n, t)),
      va(function () {
        o.takeRecords().map(a), o.disconnect();
      }, !0));
  },
  qf = {},
  db = function (e, t) {
    var r = ko(),
      n = Oo("LCP"),
      i,
      a = function (c) {
        var h = c.startTime;
        h < r.firstHiddenTime && ((n.value = h), n.entries.push(c)), i && i();
      },
      o = Ao("largest-contentful-paint", a);
    if (o) {
      i = Co(e, n, t);
      var f = function () {
        qf[n.id] || (o.takeRecords().map(a), o.disconnect(), (qf[n.id] = !0), i(!0));
      };
      ["keydown", "click"].forEach(function (c) {
        addEventListener(c, f, { once: !0, capture: !0 });
      }),
        va(f, !0);
    }
  },
  Ct = Ae(),
  pb = (function () {
    function e(t) {
      t === void 0 && (t = !1), (this._reportAllChanges = t), (this._measurements = {}), (this._performanceCursor = 0), !Yn() && Ct && Ct.performance && Ct.document && (Ct.performance.mark && Ct.performance.mark("sentry-tracing-init"), this._trackCLS(), this._trackLCP(), this._trackFID());
    }
    return (
      (e.prototype.addPerformanceEntries = function (t) {
        var r = this;
        if (!(!Ct || !Ct.performance || !Ct.performance.getEntries || !An)) {
          Z.log("[Tracing] Adding & adjusting spans using Performance API");
          var n = Ve(An),
            i,
            a;
          if (
            (Ct.performance
              .getEntries()
              .slice(this._performanceCursor)
              .forEach(function (f) {
                var c = Ve(f.startTime),
                  h = Ve(f.duration);
                if (!(t.op === "navigation" && n + c < t.startTimestamp))
                  switch (f.entryType) {
                    case "navigation": {
                      hb(t, f, n), (i = n + Ve(f.responseStart)), (a = n + Ve(f.requestStart));
                      break;
                    }
                    case "mark":
                    case "paint":
                    case "measure": {
                      var g = vb(t, f, c, h, n),
                        b = ko(),
                        w = f.startTime < b.firstHiddenTime;
                      f.name === "first-paint" && w && (Z.log("[Measurements] Adding FP"), (r._measurements.fp = { value: f.startTime }), (r._measurements["mark.fp"] = { value: g })),
                        f.name === "first-contentful-paint" && w && (Z.log("[Measurements] Adding FCP"), (r._measurements.fcp = { value: f.startTime }), (r._measurements["mark.fcp"] = { value: g }));
                      break;
                    }
                    case "resource": {
                      var A = f.name.replace(Ct.location.origin, "");
                      gb(t, f, A, c, h, n);
                      break;
                    }
                  }
              }),
            (this._performanceCursor = Math.max(performance.getEntries().length - 1, 0)),
            this._trackNavigator(t),
            t.op === "pageload")
          ) {
            var o = Ve(An);
            typeof i == "number" && (Z.log("[Measurements] Adding TTFB"), (this._measurements.ttfb = { value: (i - t.startTimestamp) * 1e3 }), typeof a == "number" && a <= i && (this._measurements["ttfb.requestTime"] = { value: (i - a) * 1e3 })),
              ["fcp", "fp", "lcp"].forEach(function (f) {
                if (!(!r._measurements[f] || o >= t.startTimestamp)) {
                  var c = r._measurements[f].value,
                    h = o + Ve(c),
                    g = Math.abs((h - t.startTimestamp) * 1e3),
                    b = g - c;
                  Z.log("[Measurements] Normalized " + f + " from " + c + " to " + g + " (" + b + ")"), (r._measurements[f].value = g);
                }
              }),
              this._measurements["mark.fid"] && this._measurements.fid && sn(t, { description: "first input delay", endTimestamp: this._measurements["mark.fid"].value + Ve(this._measurements.fid.value), op: "web.vitals", startTimestamp: this._measurements["mark.fid"].value }),
              "fcp" in this._measurements || delete this._measurements.cls,
              t.setMeasurements(this._measurements),
              yb(t, this._lcpEntry, this._clsEntry),
              t.setTag("sentry_reportAllChanges", this._reportAllChanges);
          }
        }
      }),
      (e.prototype._trackNavigator = function (t) {
        var r = Ct.navigator;
        if (!!r) {
          var n = r.connection;
          n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), Ei(n.rtt) && (this._measurements["connection.rtt"] = { value: n.rtt }), Ei(n.downlink) && (this._measurements["connection.downlink"] = { value: n.downlink })),
            Ei(r.deviceMemory) && t.setTag("deviceMemory", String(r.deviceMemory)),
            Ei(r.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(r.hardwareConcurrency));
        }
      }),
      (e.prototype._trackCLS = function () {
        var t = this;
        ub(function (r) {
          var n = r.entries.pop();
          !n || (Z.log("[Measurements] Adding CLS"), (t._measurements.cls = { value: r.value }), (t._clsEntry = n));
        });
      }),
      (e.prototype._trackLCP = function () {
        var t = this;
        db(function (r) {
          var n = r.entries.pop();
          if (!!n) {
            var i = Ve(An),
              a = Ve(n.startTime);
            Z.log("[Measurements] Adding LCP"), (t._measurements.lcp = { value: r.value }), (t._measurements["mark.lcp"] = { value: i + a }), (t._lcpEntry = n);
          }
        }, this._reportAllChanges);
      }),
      (e.prototype._trackFID = function () {
        var t = this;
        cb(function (r) {
          var n = r.entries.pop();
          if (!!n) {
            var i = Ve(An),
              a = Ve(n.startTime);
            Z.log("[Measurements] Adding FID"), (t._measurements.fid = { value: r.value }), (t._measurements["mark.fid"] = { value: i + a });
          }
        });
      }),
      e
    );
  })();
function hb(e, t, r) {
  ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(function (n) {
    Ti(e, t, n, r);
  }),
    Ti(e, t, "secureConnection", r, "TLS/SSL", "connectEnd"),
    Ti(e, t, "fetch", r, "cache", "domainLookupStart"),
    Ti(e, t, "domainLookup", r, "DNS"),
    mb(e, t, r);
}
function vb(e, t, r, n, i) {
  var a = i + r,
    o = a + n;
  return sn(e, { description: t.name, endTimestamp: o, op: t.entryType, startTimestamp: a }), a;
}
function gb(e, t, r, n, i, a) {
  if (!(t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch")) {
    var o = {};
    "transferSize" in t && (o["Transfer Size"] = t.transferSize), "encodedBodySize" in t && (o["Encoded Body Size"] = t.encodedBodySize), "decodedBodySize" in t && (o["Decoded Body Size"] = t.decodedBodySize);
    var f = a + n,
      c = f + i;
    sn(e, { description: r, endTimestamp: c, op: t.initiatorType ? "resource." + t.initiatorType : "resource", startTimestamp: f, data: o });
  }
}
function Ti(e, t, r, n, i, a) {
  var o = a ? t[a] : t[r + "End"],
    f = t[r + "Start"];
  !f || !o || sn(e, { op: "browser", description: i != null ? i : r, startTimestamp: n + Ve(f), endTimestamp: n + Ve(o) });
}
function mb(e, t, r) {
  sn(e, { op: "browser", description: "request", startTimestamp: r + Ve(t.requestStart), endTimestamp: r + Ve(t.responseEnd) }), sn(e, { op: "browser", description: "response", startTimestamp: r + Ve(t.responseStart), endTimestamp: r + Ve(t.responseEnd) });
}
function sn(e, t) {
  var r = t.startTimestamp,
    n = xg(t, ["startTimestamp"]);
  return r && e.startTimestamp > r && (e.startTimestamp = r), e.startChild(j({ startTimestamp: r }, n));
}
function Ei(e) {
  return typeof e == "number" && isFinite(e);
}
function yb(e, t, r) {
  t && (Z.log("[Measurements] Adding LCP Data"), t.element && e.setTag("lcp.element", rn(t.element)), t.id && e.setTag("lcp.id", t.id), t.url && e.setTag("lcp.url", t.url.trim().slice(0, 200)), e.setTag("lcp.size", t.size)),
    r &&
      r.sources &&
      (Z.log("[Measurements] Adding CLS Data"),
      r.sources.forEach(function (n, i) {
        return e.setTag("cls.source." + (i + 1), rn(n.node));
      }));
}
var bb = ["localhost", /^\//],
  Ji = { traceFetch: !0, traceXHR: !0, tracingOrigins: bb };
function _b(e) {
  var t = j(j({}, Ji), e),
    r = t.traceFetch,
    n = t.traceXHR,
    i = t.tracingOrigins,
    a = t.shouldCreateSpanForRequest,
    o = {},
    f = function (g) {
      if (o[g]) return o[g];
      var b = i;
      return (
        (o[g] =
          b.some(function (w) {
            return Rn(g, w);
          }) && !Rn(g, "sentry_key")),
        o[g]
      );
    },
    c = f;
  typeof a == "function" &&
    (c = function (g) {
      return f(g) && a(g);
    });
  var h = {};
  r &&
    vt("fetch", function (g) {
      wb(g, c, h);
    }),
    n &&
      vt("xhr", function (g) {
        Sb(g, c, h);
      });
}
function wb(e, t, r) {
  if (!(!xo() || !(e.fetchData && t(e.fetchData.url)))) {
    if (e.endTimestamp) {
      var n = e.fetchData.__span;
      if (!n) return;
      var i = r[n];
      i && (e.response ? i.setHttpStatus(e.response.status) : e.error && i.setStatus("internal_error"), i.finish(), delete r[n]);
      return;
    }
    var a = ha();
    if (a) {
      var i = a.startChild({ data: j(j({}, e.fetchData), { type: "fetch" }), description: e.fetchData.method + " " + e.fetchData.url, op: "http.client" });
      (e.fetchData.__span = i.spanId), (r[i.spanId] = i);
      var o = (e.args[0] = e.args[0]),
        f = (e.args[1] = e.args[1] || {}),
        c = f.headers;
      Ft(o, Request) && (c = o.headers),
        c ? (typeof c.append == "function" ? c.append("sentry-trace", i.toTraceparent()) : Array.isArray(c) ? (c = Be(c, [["sentry-trace", i.toTraceparent()]])) : (c = j(j({}, c), { "sentry-trace": i.toTraceparent() }))) : (c = { "sentry-trace": i.toTraceparent() }),
        (f.headers = c);
    }
  }
}
function Sb(e, t, r) {
  if (!(!xo() || (e.xhr && e.xhr.__sentry_own_request__) || !(e.xhr && e.xhr.__sentry_xhr__ && t(e.xhr.__sentry_xhr__.url)))) {
    var n = e.xhr.__sentry_xhr__;
    if (e.endTimestamp) {
      var i = e.xhr.__sentry_xhr_span_id__;
      if (!i) return;
      var a = r[i];
      a && (a.setHttpStatus(n.status_code), a.finish(), delete r[i]);
      return;
    }
    var o = ha();
    if (o) {
      var a = o.startChild({ data: j(j({}, n.data), { type: "xhr", method: n.method, url: n.url }), description: n.method + " " + n.url, op: "http.client" });
      if (((e.xhr.__sentry_xhr_span_id__ = a.spanId), (r[e.xhr.__sentry_xhr_span_id__] = a), e.xhr.setRequestHeader))
        try {
          e.xhr.setRequestHeader("sentry-trace", a.toTraceparent());
        } catch {}
    }
  }
}
var kn = Ae();
function Tb(e, t, r) {
  if ((t === void 0 && (t = !0), r === void 0 && (r = !0), !kn || !kn.location)) {
    Z.warn("Could not initialize routing instrumentation due to invalid location");
    return;
  }
  var n = kn.location.href,
    i;
  t && (i = e({ name: kn.location.pathname, op: "pageload" })),
    r &&
      vt("history", function (a) {
        var o = a.to,
          f = a.from;
        if (f === void 0 && n && n.indexOf(o) !== -1) {
          n = void 0;
          return;
        }
        f !== o && ((n = void 0), i && (Z.log("[Tracing] Finishing current transaction with op: " + i.op), i.finish()), (i = e({ name: kn.location.pathname, op: "navigation" })));
      });
}
var Eb = 600,
  xb = j({ idleTimeout: Mc, markBackgroundTransactions: !0, maxTransactionDuration: Eb, routingInstrumentation: Tb, startTransactionOnLocationChange: !0, startTransactionOnPageLoad: !0 }, Ji),
  $w = (function () {
    function e(t) {
      (this.name = e.id), (this._emitOptionsWarning = !1), (this._configuredIdleTimeout = void 0);
      var r = Ji.tracingOrigins;
      t && ((this._configuredIdleTimeout = t.idleTimeout), t.tracingOrigins && Array.isArray(t.tracingOrigins) && t.tracingOrigins.length !== 0 ? (r = t.tracingOrigins) : (this._emitOptionsWarning = !0)), (this.options = j(j(j({}, xb), t), { tracingOrigins: r }));
      var n = this.options._metricOptions;
      this._metrics = new pb(n && n._reportAllChanges);
    }
    return (
      (e.prototype.setupOnce = function (t, r) {
        var n = this;
        (this._getCurrentHub = r), this._emitOptionsWarning && (Z.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."), Z.warn("[Tracing] We added a reasonable default for you: " + Ji.tracingOrigins));
        var i = this.options,
          a = i.routingInstrumentation,
          o = i.startTransactionOnLocationChange,
          f = i.startTransactionOnPageLoad,
          c = i.markBackgroundTransactions,
          h = i.traceFetch,
          g = i.traceXHR,
          b = i.tracingOrigins,
          w = i.shouldCreateSpanForRequest;
        a(
          function (A) {
            return n._createRouteTransaction(A);
          },
          f,
          o
        ),
          c && sb(),
          _b({ traceFetch: h, traceXHR: g, tracingOrigins: b, shouldCreateSpanForRequest: w });
      }),
      (e.prototype._createRouteTransaction = function (t) {
        var r = this;
        if (!this._getCurrentHub) {
          Z.warn("[Tracing] Did not create " + t.op + " transaction because _getCurrentHub is invalid.");
          return;
        }
        var n = this.options,
          i = n.beforeNavigate,
          a = n.idleTimeout,
          o = n.maxTransactionDuration,
          f = t.op === "pageload" ? Cb() : void 0,
          c = j(j(j({}, t), f), { trimEnd: !0 }),
          h = typeof i == "function" ? i(c) : c,
          g = h === void 0 ? j(j({}, c), { sampled: !1 }) : h;
        g.sampled === !1 && Z.log("[Tracing] Will not send " + g.op + " transaction because of beforeNavigate."), Z.log("[Tracing] Starting " + g.op + " transaction on scope");
        var b = this._getCurrentHub(),
          w = Ae().location,
          A = rb(b, g, a, !0, { location: w });
        return (
          A.registerBeforeFinishCallback(function (S, T) {
            r._metrics.addPerformanceEntries(S), Ab(Gy(o), S, T);
          }),
          A.setTag("idleTimeout", this._configuredIdleTimeout),
          A
        );
      }),
      (e.id = "BrowserTracing"),
      e
    );
  })();
function Cb() {
  var e = Ob("sentry-trace");
  if (e) return Wy(e);
}
function Ob(e) {
  var t = Ae().document.querySelector("meta[name=" + e + "]");
  return t ? t.getAttribute("content") : null;
}
function Ab(e, t, r) {
  var n = r - t.startTimestamp,
    i = r && (n > e || n < 0);
  i && (t.setStatus("deadline_exceeded"), t.setTag("maxTransactionDurationExceeded", "true"));
}
ab();
var Dc = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function kb(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jc = { exports: {} };
/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */ (function (e, t) {
  (function (n, i) {
    e.exports = i();
  })(Dc, function () {
    return (function () {
      var r = {
          686: function (a, o, f) {
            f.d(o, {
              default: function () {
                return xe;
              },
            });
            var c = f(279),
              h = f.n(c),
              g = f(370),
              b = f.n(g),
              w = f(817),
              A = f.n(w);
            function S(V) {
              try {
                return document.execCommand(V);
              } catch {
                return !1;
              }
            }
            var T = function (K) {
                var ee = A()(K);
                return S("cut"), ee;
              },
              L = T;
            function N(V) {
              var K = document.documentElement.getAttribute("dir") === "rtl",
                ee = document.createElement("textarea");
              (ee.style.fontSize = "12pt"), (ee.style.border = "0"), (ee.style.padding = "0"), (ee.style.margin = "0"), (ee.style.position = "absolute"), (ee.style[K ? "right" : "left"] = "-9999px");
              var ce = window.pageYOffset || document.documentElement.scrollTop;
              return (ee.style.top = "".concat(ce, "px")), ee.setAttribute("readonly", ""), (ee.value = V), ee;
            }
            var U = function (K) {
                var ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { container: document.body },
                  ce = "";
                if (typeof K == "string") {
                  var de = N(K);
                  ee.container.appendChild(de), (ce = A()(de)), S("copy"), de.remove();
                } else (ce = A()(K)), S("copy");
                return ce;
              },
              H = U;
            function q(V) {
              return (
                typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                  ? (q = function (ee) {
                      return typeof ee;
                    })
                  : (q = function (ee) {
                      return ee && typeof Symbol == "function" && ee.constructor === Symbol && ee !== Symbol.prototype ? "symbol" : typeof ee;
                    }),
                q(V)
              );
            }
            var ie = function () {
                var K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                  ee = K.action,
                  ce = ee === void 0 ? "copy" : ee,
                  de = K.container,
                  Te = K.target,
                  Me = K.text;
                if (ce !== "copy" && ce !== "cut") throw new Error('Invalid "action" value, use either "copy" or "cut"');
                if (Te !== void 0)
                  if (Te && q(Te) === "object" && Te.nodeType === 1) {
                    if (ce === "copy" && Te.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if (ce === "cut" && (Te.hasAttribute("readonly") || Te.hasAttribute("disabled"))) throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                  } else throw new Error('Invalid "target" value, use a valid Element');
                if (Me) return H(Me, { container: de });
                if (Te) return ce === "cut" ? L(Te) : H(Te, { container: de });
              },
              p = ie;
            function se(V) {
              return (
                typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                  ? (se = function (ee) {
                      return typeof ee;
                    })
                  : (se = function (ee) {
                      return ee && typeof Symbol == "function" && ee.constructor === Symbol && ee !== Symbol.prototype ? "symbol" : typeof ee;
                    }),
                se(V)
              );
            }
            function J(V, K) {
              if (!(V instanceof K)) throw new TypeError("Cannot call a class as a function");
            }
            function we(V, K) {
              for (var ee = 0; ee < K.length; ee++) {
                var ce = K[ee];
                (ce.enumerable = ce.enumerable || !1), (ce.configurable = !0), "value" in ce && (ce.writable = !0), Object.defineProperty(V, ce.key, ce);
              }
            }
            function Y(V, K, ee) {
              return K && we(V.prototype, K), ee && we(V, ee), V;
            }
            function ae(V, K) {
              if (typeof K != "function" && K !== null) throw new TypeError("Super expression must either be null or a function");
              (V.prototype = Object.create(K && K.prototype, { constructor: { value: V, writable: !0, configurable: !0 } })), K && O(V, K);
            }
            function O(V, K) {
              return (
                (O =
                  Object.setPrototypeOf ||
                  function (ce, de) {
                    return (ce.__proto__ = de), ce;
                  }),
                O(V, K)
              );
            }
            function R(V) {
              var K = le();
              return function () {
                var ce = be(V),
                  de;
                if (K) {
                  var Te = be(this).constructor;
                  de = Reflect.construct(ce, arguments, Te);
                } else de = ce.apply(this, arguments);
                return z(this, de);
              };
            }
            function z(V, K) {
              return K && (se(K) === "object" || typeof K == "function") ? K : re(V);
            }
            function re(V) {
              if (V === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return V;
            }
            function le() {
              if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
              if (typeof Proxy == "function") return !0;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch {
                return !1;
              }
            }
            function be(V) {
              return (
                (be = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (ee) {
                      return ee.__proto__ || Object.getPrototypeOf(ee);
                    }),
                be(V)
              );
            }
            function fe(V, K) {
              var ee = "data-clipboard-".concat(V);
              if (!!K.hasAttribute(ee)) return K.getAttribute(ee);
            }
            var ge = (function (V) {
                ae(ee, V);
                var K = R(ee);
                function ee(ce, de) {
                  var Te;
                  return J(this, ee), (Te = K.call(this)), Te.resolveOptions(de), Te.listenClick(ce), Te;
                }
                return (
                  Y(
                    ee,
                    [
                      {
                        key: "resolveOptions",
                        value: function () {
                          var de = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                          (this.action = typeof de.action == "function" ? de.action : this.defaultAction),
                            (this.target = typeof de.target == "function" ? de.target : this.defaultTarget),
                            (this.text = typeof de.text == "function" ? de.text : this.defaultText),
                            (this.container = se(de.container) === "object" ? de.container : document.body);
                        },
                      },
                      {
                        key: "listenClick",
                        value: function (de) {
                          var Te = this;
                          this.listener = b()(de, "click", function (Me) {
                            return Te.onClick(Me);
                          });
                        },
                      },
                      {
                        key: "onClick",
                        value: function (de) {
                          var Te = de.delegateTarget || de.currentTarget,
                            Me = this.action(Te) || "copy",
                            bt = p({ action: Me, container: this.container, target: this.target(Te), text: this.text(Te) });
                          this.emit(bt ? "success" : "error", {
                            action: Me,
                            text: bt,
                            trigger: Te,
                            clearSelection: function () {
                              Te && Te.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges();
                            },
                          });
                        },
                      },
                      {
                        key: "defaultAction",
                        value: function (de) {
                          return fe("action", de);
                        },
                      },
                      {
                        key: "defaultTarget",
                        value: function (de) {
                          var Te = fe("target", de);
                          if (Te) return document.querySelector(Te);
                        },
                      },
                      {
                        key: "defaultText",
                        value: function (de) {
                          return fe("text", de);
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.listener.destroy();
                        },
                      },
                    ],
                    [
                      {
                        key: "copy",
                        value: function (de) {
                          var Te = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { container: document.body };
                          return H(de, Te);
                        },
                      },
                      {
                        key: "cut",
                        value: function (de) {
                          return L(de);
                        },
                      },
                      {
                        key: "isSupported",
                        value: function () {
                          var de = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"],
                            Te = typeof de == "string" ? [de] : de,
                            Me = !!document.queryCommandSupported;
                          return (
                            Te.forEach(function (bt) {
                              Me = Me && !!document.queryCommandSupported(bt);
                            }),
                            Me
                          );
                        },
                      },
                    ]
                  ),
                  ee
                );
              })(h()),
              xe = ge;
          },
          828: function (a) {
            var o = 9;
            if (typeof Element != "undefined" && !Element.prototype.matches) {
              var f = Element.prototype;
              f.matches = f.matchesSelector || f.mozMatchesSelector || f.msMatchesSelector || f.oMatchesSelector || f.webkitMatchesSelector;
            }
            function c(h, g) {
              for (; h && h.nodeType !== o; ) {
                if (typeof h.matches == "function" && h.matches(g)) return h;
                h = h.parentNode;
              }
            }
            a.exports = c;
          },
          438: function (a, o, f) {
            var c = f(828);
            function h(w, A, S, T, L) {
              var N = b.apply(this, arguments);
              return (
                w.addEventListener(S, N, L),
                {
                  destroy: function () {
                    w.removeEventListener(S, N, L);
                  },
                }
              );
            }
            function g(w, A, S, T, L) {
              return typeof w.addEventListener == "function"
                ? h.apply(null, arguments)
                : typeof S == "function"
                ? h.bind(null, document).apply(null, arguments)
                : (typeof w == "string" && (w = document.querySelectorAll(w)),
                  Array.prototype.map.call(w, function (N) {
                    return h(N, A, S, T, L);
                  }));
            }
            function b(w, A, S, T) {
              return function (L) {
                (L.delegateTarget = c(L.target, A)), L.delegateTarget && T.call(w, L);
              };
            }
            a.exports = g;
          },
          879: function (a, o) {
            (o.node = function (f) {
              return f !== void 0 && f instanceof HTMLElement && f.nodeType === 1;
            }),
              (o.nodeList = function (f) {
                var c = Object.prototype.toString.call(f);
                return f !== void 0 && (c === "[object NodeList]" || c === "[object HTMLCollection]") && "length" in f && (f.length === 0 || o.node(f[0]));
              }),
              (o.string = function (f) {
                return typeof f == "string" || f instanceof String;
              }),
              (o.fn = function (f) {
                var c = Object.prototype.toString.call(f);
                return c === "[object Function]";
              });
          },
          370: function (a, o, f) {
            var c = f(879),
              h = f(438);
            function g(S, T, L) {
              if (!S && !T && !L) throw new Error("Missing required arguments");
              if (!c.string(T)) throw new TypeError("Second argument must be a String");
              if (!c.fn(L)) throw new TypeError("Third argument must be a Function");
              if (c.node(S)) return b(S, T, L);
              if (c.nodeList(S)) return w(S, T, L);
              if (c.string(S)) return A(S, T, L);
              throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            }
            function b(S, T, L) {
              return (
                S.addEventListener(T, L),
                {
                  destroy: function () {
                    S.removeEventListener(T, L);
                  },
                }
              );
            }
            function w(S, T, L) {
              return (
                Array.prototype.forEach.call(S, function (N) {
                  N.addEventListener(T, L);
                }),
                {
                  destroy: function () {
                    Array.prototype.forEach.call(S, function (N) {
                      N.removeEventListener(T, L);
                    });
                  },
                }
              );
            }
            function A(S, T, L) {
              return h(document.body, S, T, L);
            }
            a.exports = g;
          },
          817: function (a) {
            function o(f) {
              var c;
              if (f.nodeName === "SELECT") f.focus(), (c = f.value);
              else if (f.nodeName === "INPUT" || f.nodeName === "TEXTAREA") {
                var h = f.hasAttribute("readonly");
                h || f.setAttribute("readonly", ""), f.select(), f.setSelectionRange(0, f.value.length), h || f.removeAttribute("readonly"), (c = f.value);
              } else {
                f.hasAttribute("contenteditable") && f.focus();
                var g = window.getSelection(),
                  b = document.createRange();
                b.selectNodeContents(f), g.removeAllRanges(), g.addRange(b), (c = g.toString());
              }
              return c;
            }
            a.exports = o;
          },
          279: function (a) {
            function o() {}
            (o.prototype = {
              on: function (f, c, h) {
                var g = this.e || (this.e = {});
                return (g[f] || (g[f] = [])).push({ fn: c, ctx: h }), this;
              },
              once: function (f, c, h) {
                var g = this;
                function b() {
                  g.off(f, b), c.apply(h, arguments);
                }
                return (b._ = c), this.on(f, b, h);
              },
              emit: function (f) {
                var c = [].slice.call(arguments, 1),
                  h = ((this.e || (this.e = {}))[f] || []).slice(),
                  g = 0,
                  b = h.length;
                for (g; g < b; g++) h[g].fn.apply(h[g].ctx, c);
                return this;
              },
              off: function (f, c) {
                var h = this.e || (this.e = {}),
                  g = h[f],
                  b = [];
                if (g && c) for (var w = 0, A = g.length; w < A; w++) g[w].fn !== c && g[w].fn._ !== c && b.push(g[w]);
                return b.length ? (h[f] = b) : delete h[f], this;
              },
            }),
              (a.exports = o),
              (a.exports.TinyEmitter = o);
          },
        },
        n = {};
      function i(a) {
        if (n[a]) return n[a].exports;
        var o = (n[a] = { exports: {} });
        return r[a](o, o.exports, i), o.exports;
      }
      return (
        (function () {
          i.n = function (a) {
            var o =
              a && a.__esModule
                ? function () {
                    return a.default;
                  }
                : function () {
                    return a;
                  };
            return i.d(o, { a: o }), o;
          };
        })(),
        (function () {
          i.d = function (a, o) {
            for (var f in o) i.o(o, f) && !i.o(a, f) && Object.defineProperty(a, f, { enumerable: !0, get: o[f] });
          };
        })(),
        (function () {
          i.o = function (a, o) {
            return Object.prototype.hasOwnProperty.call(a, o);
          };
        })(),
        i(686)
      );
    })().default;
  });
})(jc);
var Dw = kb(jc.exports);
function zf(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function Po(e = {}, t = {}) {
  Object.keys(t).forEach(r => {
    typeof e[r] == "undefined" ? (e[r] = t[r]) : zf(t[r]) && zf(e[r]) && Object.keys(t[r]).length > 0 && Po(e[r], t[r]);
  });
}
const Hc = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
};
function ft() {
  const e = typeof document != "undefined" ? document : {};
  return Po(e, Hc), e;
}
const Pb = {
  document: Hc,
  navigator: { userAgent: "" },
  location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout == "undefined" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout != "undefined" && clearTimeout(e);
  },
};
function Ye() {
  const e = typeof window != "undefined" ? window : {};
  return Po(e, Pb), e;
}
function Ib(e) {
  const t = e.__proto__;
  Object.defineProperty(e, "__proto__", {
    get() {
      return t;
    },
    set(r) {
      t.__proto__ = r;
    },
  });
}
class Zt extends Array {
  constructor(t) {
    if (typeof t == "number") super(t);
    else {
      super(...(t || []));
      Ib(this);
    }
  }
}
function Vn(e = []) {
  const t = [];
  return (
    e.forEach(r => {
      Array.isArray(r) ? t.push(...Vn(r)) : t.push(r);
    }),
    t
  );
}
function Fc(e, t) {
  return Array.prototype.filter.call(e, t);
}
function Nb(e) {
  const t = [];
  for (let r = 0; r < e.length; r += 1) t.indexOf(e[r]) === -1 && t.push(e[r]);
  return t;
}
function Rb(e, t) {
  if (typeof e != "string") return [e];
  const r = [],
    n = t.querySelectorAll(e);
  for (let i = 0; i < n.length; i += 1) r.push(n[i]);
  return r;
}
function ne(e, t) {
  const r = Ye(),
    n = ft();
  let i = [];
  if (!t && e instanceof Zt) return e;
  if (!e) return new Zt(i);
  if (typeof e == "string") {
    const a = e.trim();
    if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
      let o = "div";
      a.indexOf("<li") === 0 && (o = "ul"), a.indexOf("<tr") === 0 && (o = "tbody"), (a.indexOf("<td") === 0 || a.indexOf("<th") === 0) && (o = "tr"), a.indexOf("<tbody") === 0 && (o = "table"), a.indexOf("<option") === 0 && (o = "select");
      const f = n.createElement(o);
      f.innerHTML = a;
      for (let c = 0; c < f.childNodes.length; c += 1) i.push(f.childNodes[c]);
    } else i = Rb(e.trim(), t || n);
  } else if (e.nodeType || e === r || e === n) i.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof Zt) return e;
    i = e;
  }
  return new Zt(Nb(i));
}
ne.fn = Zt.prototype;
function Lb(...e) {
  const t = Vn(e.map(r => r.split(" ")));
  return (
    this.forEach(r => {
      r.classList.add(...t);
    }),
    this
  );
}
function Mb(...e) {
  const t = Vn(e.map(r => r.split(" ")));
  return (
    this.forEach(r => {
      r.classList.remove(...t);
    }),
    this
  );
}
function $b(...e) {
  const t = Vn(e.map(r => r.split(" ")));
  this.forEach(r => {
    t.forEach(n => {
      r.classList.toggle(n);
    });
  });
}
function Db(...e) {
  const t = Vn(e.map(r => r.split(" ")));
  return Fc(this, r => t.filter(n => r.classList.contains(n)).length > 0).length > 0;
}
function jb(e, t) {
  if (arguments.length === 1 && typeof e == "string") return this[0] ? this[0].getAttribute(e) : void 0;
  for (let r = 0; r < this.length; r += 1)
    if (arguments.length === 2) this[r].setAttribute(e, t);
    else for (const n in e) (this[r][n] = e[n]), this[r].setAttribute(n, e[n]);
  return this;
}
function Hb(e) {
  for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
  return this;
}
function Fb(e) {
  for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
  return this;
}
function Bb(e) {
  for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
  return this;
}
function qb(...e) {
  let [t, r, n, i] = e;
  typeof e[1] == "function" && (([t, n, i] = e), (r = void 0)), i || (i = !1);
  function a(h) {
    const g = h.target;
    if (!g) return;
    const b = h.target.dom7EventData || [];
    if ((b.indexOf(h) < 0 && b.unshift(h), ne(g).is(r))) n.apply(g, b);
    else {
      const w = ne(g).parents();
      for (let A = 0; A < w.length; A += 1) ne(w[A]).is(r) && n.apply(w[A], b);
    }
  }
  function o(h) {
    const g = h && h.target ? h.target.dom7EventData || [] : [];
    g.indexOf(h) < 0 && g.unshift(h), n.apply(this, g);
  }
  const f = t.split(" ");
  let c;
  for (let h = 0; h < this.length; h += 1) {
    const g = this[h];
    if (r)
      for (c = 0; c < f.length; c += 1) {
        const b = f[c];
        g.dom7LiveListeners || (g.dom7LiveListeners = {}), g.dom7LiveListeners[b] || (g.dom7LiveListeners[b] = []), g.dom7LiveListeners[b].push({ listener: n, proxyListener: a }), g.addEventListener(b, a, i);
      }
    else
      for (c = 0; c < f.length; c += 1) {
        const b = f[c];
        g.dom7Listeners || (g.dom7Listeners = {}), g.dom7Listeners[b] || (g.dom7Listeners[b] = []), g.dom7Listeners[b].push({ listener: n, proxyListener: o }), g.addEventListener(b, o, i);
      }
  }
  return this;
}
function zb(...e) {
  let [t, r, n, i] = e;
  typeof e[1] == "function" && (([t, n, i] = e), (r = void 0)), i || (i = !1);
  const a = t.split(" ");
  for (let o = 0; o < a.length; o += 1) {
    const f = a[o];
    for (let c = 0; c < this.length; c += 1) {
      const h = this[c];
      let g;
      if ((!r && h.dom7Listeners ? (g = h.dom7Listeners[f]) : r && h.dom7LiveListeners && (g = h.dom7LiveListeners[f]), g && g.length))
        for (let b = g.length - 1; b >= 0; b -= 1) {
          const w = g[b];
          (n && w.listener === n) || (n && w.listener && w.listener.dom7proxy && w.listener.dom7proxy === n) ? (h.removeEventListener(f, w.proxyListener, i), g.splice(b, 1)) : n || (h.removeEventListener(f, w.proxyListener, i), g.splice(b, 1));
        }
    }
  }
  return this;
}
function Ub(...e) {
  const t = Ye(),
    r = e[0].split(" "),
    n = e[1];
  for (let i = 0; i < r.length; i += 1) {
    const a = r[i];
    for (let o = 0; o < this.length; o += 1) {
      const f = this[o];
      if (t.CustomEvent) {
        const c = new t.CustomEvent(a, { detail: n, bubbles: !0, cancelable: !0 });
        (f.dom7EventData = e.filter((h, g) => g > 0)), f.dispatchEvent(c), (f.dom7EventData = []), delete f.dom7EventData;
      }
    }
  }
  return this;
}
function Wb(e) {
  const t = this;
  function r(n) {
    n.target === this && (e.call(this, n), t.off("transitionend", r));
  }
  return e && t.on("transitionend", r), this;
}
function Gb(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function Xb(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function Yb() {
  if (this.length > 0) {
    const e = Ye(),
      t = ft(),
      r = this[0],
      n = r.getBoundingClientRect(),
      i = t.body,
      a = r.clientTop || i.clientTop || 0,
      o = r.clientLeft || i.clientLeft || 0,
      f = r === e ? e.scrollY : r.scrollTop,
      c = r === e ? e.scrollX : r.scrollLeft;
    return { top: n.top + f - a, left: n.left + c - o };
  }
  return null;
}
function Vb() {
  const e = Ye();
  return this[0] ? e.getComputedStyle(this[0], null) : {};
}
function Kb(e, t) {
  const r = Ye();
  let n;
  if (arguments.length === 1)
    if (typeof e == "string") {
      if (this[0]) return r.getComputedStyle(this[0], null).getPropertyValue(e);
    } else {
      for (n = 0; n < this.length; n += 1) for (const i in e) this[n].style[i] = e[i];
      return this;
    }
  if (arguments.length === 2 && typeof e == "string") {
    for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
    return this;
  }
  return this;
}
function Jb(e) {
  return e
    ? (this.forEach((t, r) => {
        e.apply(t, [t, r]);
      }),
      this)
    : this;
}
function Qb(e) {
  const t = Fc(this, e);
  return ne(t);
}
function Zb(e) {
  if (typeof e == "undefined") return this[0] ? this[0].innerHTML : null;
  for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
  return this;
}
function e_(e) {
  if (typeof e == "undefined") return this[0] ? this[0].textContent.trim() : null;
  for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
  return this;
}
function t_(e) {
  const t = Ye(),
    r = ft(),
    n = this[0];
  let i, a;
  if (!n || typeof e == "undefined") return !1;
  if (typeof e == "string") {
    if (n.matches) return n.matches(e);
    if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
    if (n.msMatchesSelector) return n.msMatchesSelector(e);
    for (i = ne(e), a = 0; a < i.length; a += 1) if (i[a] === n) return !0;
    return !1;
  }
  if (e === r) return n === r;
  if (e === t) return n === t;
  if (e.nodeType || e instanceof Zt) {
    for (i = e.nodeType ? [e] : e, a = 0; a < i.length; a += 1) if (i[a] === n) return !0;
    return !1;
  }
  return !1;
}
function r_() {
  let e = this[0],
    t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; ) e.nodeType === 1 && (t += 1);
    return t;
  }
}
function n_(e) {
  if (typeof e == "undefined") return this;
  const t = this.length;
  if (e > t - 1) return ne([]);
  if (e < 0) {
    const r = t + e;
    return r < 0 ? ne([]) : ne([this[r]]);
  }
  return ne([this[e]]);
}
function i_(...e) {
  let t;
  const r = ft();
  for (let n = 0; n < e.length; n += 1) {
    t = e[n];
    for (let i = 0; i < this.length; i += 1)
      if (typeof t == "string") {
        const a = r.createElement("div");
        for (a.innerHTML = t; a.firstChild; ) this[i].appendChild(a.firstChild);
      } else if (t instanceof Zt) for (let a = 0; a < t.length; a += 1) this[i].appendChild(t[a]);
      else this[i].appendChild(t);
  }
  return this;
}
function a_(e) {
  const t = ft();
  let r, n;
  for (r = 0; r < this.length; r += 1)
    if (typeof e == "string") {
      const i = t.createElement("div");
      for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1) this[r].insertBefore(i.childNodes[n], this[r].childNodes[0]);
    } else if (e instanceof Zt) for (n = 0; n < e.length; n += 1) this[r].insertBefore(e[n], this[r].childNodes[0]);
    else this[r].insertBefore(e, this[r].childNodes[0]);
  return this;
}
function s_(e) {
  return this.length > 0 ? (e ? (this[0].nextElementSibling && ne(this[0].nextElementSibling).is(e) ? ne([this[0].nextElementSibling]) : ne([])) : this[0].nextElementSibling ? ne([this[0].nextElementSibling]) : ne([])) : ne([]);
}
function o_(e) {
  const t = [];
  let r = this[0];
  if (!r) return ne([]);
  for (; r.nextElementSibling; ) {
    const n = r.nextElementSibling;
    e ? ne(n).is(e) && t.push(n) : t.push(n), (r = n);
  }
  return ne(t);
}
function u_(e) {
  if (this.length > 0) {
    const t = this[0];
    return e ? (t.previousElementSibling && ne(t.previousElementSibling).is(e) ? ne([t.previousElementSibling]) : ne([])) : t.previousElementSibling ? ne([t.previousElementSibling]) : ne([]);
  }
  return ne([]);
}
function f_(e) {
  const t = [];
  let r = this[0];
  if (!r) return ne([]);
  for (; r.previousElementSibling; ) {
    const n = r.previousElementSibling;
    e ? ne(n).is(e) && t.push(n) : t.push(n), (r = n);
  }
  return ne(t);
}
function l_(e) {
  const t = [];
  for (let r = 0; r < this.length; r += 1) this[r].parentNode !== null && (e ? ne(this[r].parentNode).is(e) && t.push(this[r].parentNode) : t.push(this[r].parentNode));
  return ne(t);
}
function c_(e) {
  const t = [];
  for (let r = 0; r < this.length; r += 1) {
    let n = this[r].parentNode;
    for (; n; ) e ? ne(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
  }
  return ne(t);
}
function d_(e) {
  let t = this;
  return typeof e == "undefined" ? ne([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
}
function p_(e) {
  const t = [];
  for (let r = 0; r < this.length; r += 1) {
    const n = this[r].querySelectorAll(e);
    for (let i = 0; i < n.length; i += 1) t.push(n[i]);
  }
  return ne(t);
}
function h_(e) {
  const t = [];
  for (let r = 0; r < this.length; r += 1) {
    const n = this[r].children;
    for (let i = 0; i < n.length; i += 1) (!e || ne(n[i]).is(e)) && t.push(n[i]);
  }
  return ne(t);
}
function v_() {
  for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
  return this;
}
const Uf = {
  addClass: Lb,
  removeClass: Mb,
  hasClass: Db,
  toggleClass: $b,
  attr: jb,
  removeAttr: Hb,
  transform: Fb,
  transition: Bb,
  on: qb,
  off: zb,
  trigger: Ub,
  transitionEnd: Wb,
  outerWidth: Gb,
  outerHeight: Xb,
  styles: Vb,
  offset: Yb,
  css: Kb,
  each: Jb,
  html: Zb,
  text: e_,
  is: t_,
  index: r_,
  eq: n_,
  append: i_,
  prepend: a_,
  next: s_,
  nextAll: o_,
  prev: u_,
  prevAll: f_,
  parent: l_,
  parents: c_,
  closest: d_,
  find: p_,
  children: h_,
  filter: Qb,
  remove: v_,
};
Object.keys(Uf).forEach(e => {
  Object.defineProperty(ne.fn, e, { value: Uf[e], writable: !0 });
});
function g_(e) {
  const t = e;
  Object.keys(t).forEach(r => {
    try {
      t[r] = null;
    } catch {}
    try {
      delete t[r];
    } catch {}
  });
}
function zn(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function $t() {
  return Date.now();
}
function m_(e) {
  const t = Ye();
  let r;
  return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r;
}
function y_(e, t) {
  t === void 0 && (t = "x");
  const r = Ye();
  let n, i, a;
  const o = m_(e);
  return (
    r.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map(f => f.replace(",", "."))
            .join(", ")),
        (a = new r.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")), (n = a.toString().split(","))),
    t === "x" && (r.WebKitCSSMatrix ? (i = a.m41) : n.length === 16 ? (i = parseFloat(n[12])) : (i = parseFloat(n[4]))),
    t === "y" && (r.WebKitCSSMatrix ? (i = a.m42) : n.length === 16 ? (i = parseFloat(n[13])) : (i = parseFloat(n[5]))),
    i || 0
  );
}
function xi(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function b_(e) {
  return typeof window != "undefined" && typeof window.HTMLElement != "undefined" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
}
function ht() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let r = 1; r < arguments.length; r += 1) {
    const n = r < 0 || arguments.length <= r ? void 0 : arguments[r];
    if (n != null && !b_(n)) {
      const i = Object.keys(Object(n)).filter(a => t.indexOf(a) < 0);
      for (let a = 0, o = i.length; a < o; a += 1) {
        const f = i[a],
          c = Object.getOwnPropertyDescriptor(n, f);
        c !== void 0 && c.enumerable && (xi(e[f]) && xi(n[f]) ? (n[f].__swiper__ ? (e[f] = n[f]) : ht(e[f], n[f])) : !xi(e[f]) && xi(n[f]) ? ((e[f] = {}), n[f].__swiper__ ? (e[f] = n[f]) : ht(e[f], n[f])) : (e[f] = n[f]));
      }
    }
  }
  return e;
}
function Ci(e, t, r) {
  e.style.setProperty(t, r);
}
function Bc(e) {
  let { swiper: t, targetPosition: r, side: n } = e;
  const i = Ye(),
    a = -t.translate;
  let o = null,
    f;
  const c = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"), i.cancelAnimationFrame(t.cssModeFrameID);
  const h = r > a ? "next" : "prev",
    g = (w, A) => (h === "next" && w >= A) || (h === "prev" && w <= A),
    b = () => {
      (f = new Date().getTime()), o === null && (o = f);
      const w = Math.max(Math.min((f - o) / c, 1), 0),
        A = 0.5 - Math.cos(w * Math.PI) / 2;
      let S = a + A * (r - a);
      if ((g(S, r) && (S = r), t.wrapperEl.scrollTo({ [n]: S }), g(S, r))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [n]: S });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(b);
    };
  b();
}
let ts;
function __() {
  const e = Ye(),
    t = ft();
  return {
    smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
    touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
    passiveListener: (function () {
      let n = !1;
      try {
        const i = Object.defineProperty({}, "passive", {
          get() {
            n = !0;
          },
        });
        e.addEventListener("testPassiveListener", null, i);
      } catch {}
      return n;
    })(),
    gestures: (function () {
      return "ongesturestart" in e;
    })(),
  };
}
function qc() {
  return ts || (ts = __()), ts;
}
let rs;
function w_(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const r = qc(),
    n = Ye(),
    i = n.navigator.platform,
    a = t || n.navigator.userAgent,
    o = { ios: !1, android: !1 },
    f = n.screen.width,
    c = n.screen.height,
    h = a.match(/(Android);?[\s\/]+([\d.]+)?/);
  let g = a.match(/(iPad).*OS\s([\d_]+)/);
  const b = a.match(/(iPod)(.*OS\s([\d_]+))?/),
    w = !g && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    A = i === "Win32";
  let S = i === "MacIntel";
  const T = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !g && S && r.touch && T.indexOf(`${f}x${c}`) >= 0 && ((g = a.match(/(Version)\/([\d.]+)/)), g || (g = [0, 1, "13_0_0"]), (S = !1)), h && !A && ((o.os = "android"), (o.android = !0)), (g || w || b) && ((o.os = "ios"), (o.ios = !0)), o;
}
function S_(e) {
  return e === void 0 && (e = {}), rs || (rs = w_(e)), rs;
}
let ns;
function T_() {
  const e = Ye();
  function t() {
    const r = e.navigator.userAgent.toLowerCase();
    return r.indexOf("safari") >= 0 && r.indexOf("chrome") < 0 && r.indexOf("android") < 0;
  }
  return { isSafari: t(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) };
}
function E_() {
  return ns || (ns = T_()), ns;
}
function x_(e) {
  let { swiper: t, on: r, emit: n } = e;
  const i = Ye();
  let a = null,
    o = null;
  const f = () => {
      !t || t.destroyed || !t.initialized || (n("beforeResize"), n("resize"));
    },
    c = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((a = new ResizeObserver(b => {
          o = i.requestAnimationFrame(() => {
            const { width: w, height: A } = t;
            let S = w,
              T = A;
            b.forEach(L => {
              let { contentBoxSize: N, contentRect: U, target: H } = L;
              (H && H !== t.el) || ((S = U ? U.width : (N[0] || N).inlineSize), (T = U ? U.height : (N[0] || N).blockSize));
            }),
              (S !== w || T !== A) && f();
          });
        })),
        a.observe(t.el));
    },
    h = () => {
      o && i.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), (a = null));
    },
    g = () => {
      !t || t.destroyed || !t.initialized || n("orientationchange");
    };
  r("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver != "undefined") {
      c();
      return;
    }
    i.addEventListener("resize", f), i.addEventListener("orientationchange", g);
  }),
    r("destroy", () => {
      h(), i.removeEventListener("resize", f), i.removeEventListener("orientationchange", g);
    });
}
function C_(e) {
  let { swiper: t, extendParams: r, on: n, emit: i } = e;
  const a = [],
    o = Ye(),
    f = function (g, b) {
      b === void 0 && (b = {});
      const w = o.MutationObserver || o.WebkitMutationObserver,
        A = new w(S => {
          if (S.length === 1) {
            i("observerUpdate", S[0]);
            return;
          }
          const T = function () {
            i("observerUpdate", S[0]);
          };
          o.requestAnimationFrame ? o.requestAnimationFrame(T) : o.setTimeout(T, 0);
        });
      A.observe(g, { attributes: typeof b.attributes == "undefined" ? !0 : b.attributes, childList: typeof b.childList == "undefined" ? !0 : b.childList, characterData: typeof b.characterData == "undefined" ? !0 : b.characterData }), a.push(A);
    },
    c = () => {
      if (!!t.params.observer) {
        if (t.params.observeParents) {
          const g = t.$el.parents();
          for (let b = 0; b < g.length; b += 1) f(g[b]);
        }
        f(t.$el[0], { childList: t.params.observeSlideChildren }), f(t.$wrapperEl[0], { attributes: !1 });
      }
    },
    h = () => {
      a.forEach(g => {
        g.disconnect();
      }),
        a.splice(0, a.length);
    };
  r({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), n("init", c), n("destroy", h);
}
var O_ = {
  on(e, t, r) {
    const n = this;
    if (typeof t != "function") return n;
    const i = r ? "unshift" : "push";
    return (
      e.split(" ").forEach(a => {
        n.eventsListeners[a] || (n.eventsListeners[a] = []), n.eventsListeners[a][i](t);
      }),
      n
    );
  },
  once(e, t, r) {
    const n = this;
    if (typeof t != "function") return n;
    function i() {
      n.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var a = arguments.length, o = new Array(a), f = 0; f < a; f++) o[f] = arguments[f];
      t.apply(n, o);
    }
    return (i.__emitterProxy = t), n.on(e, i, r);
  },
  onAny(e, t) {
    const r = this;
    if (typeof e != "function") return r;
    const n = t ? "unshift" : "push";
    return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e), r;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsAnyListeners) return t;
    const r = t.eventsAnyListeners.indexOf(e);
    return r >= 0 && t.eventsAnyListeners.splice(r, 1), t;
  },
  off(e, t) {
    const r = this;
    return (
      r.eventsListeners &&
        e.split(" ").forEach(n => {
          typeof t == "undefined"
            ? (r.eventsListeners[n] = [])
            : r.eventsListeners[n] &&
              r.eventsListeners[n].forEach((i, a) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) && r.eventsListeners[n].splice(a, 1);
              });
        }),
      r
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners) return e;
    let t, r, n;
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return (
      typeof a[0] == "string" || Array.isArray(a[0]) ? ((t = a[0]), (r = a.slice(1, a.length)), (n = e)) : ((t = a[0].events), (r = a[0].data), (n = a[0].context || e)),
      r.unshift(n),
      (Array.isArray(t) ? t : t.split(" ")).forEach(c => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach(h => {
            h.apply(n, [c, ...r]);
          }),
          e.eventsListeners &&
            e.eventsListeners[c] &&
            e.eventsListeners[c].forEach(h => {
              h.apply(n, r);
            });
      }),
      e
    );
  },
};
function A_() {
  const e = this;
  let t, r;
  const n = e.$el;
  typeof e.params.width != "undefined" && e.params.width !== null ? (t = e.params.width) : (t = n[0].clientWidth),
    typeof e.params.height != "undefined" && e.params.height !== null ? (r = e.params.height) : (r = n[0].clientHeight),
    !((t === 0 && e.isHorizontal()) || (r === 0 && e.isVertical())) &&
      ((t = t - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10)),
      (r = r - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(r) && (r = 0),
      Object.assign(e, { width: t, height: r, size: e.isHorizontal() ? t : r }));
}
function k_() {
  const e = this;
  function t(Y) {
    return e.isHorizontal() ? Y : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[Y];
  }
  function r(Y, ae) {
    return parseFloat(Y.getPropertyValue(t(ae)) || 0);
  }
  const n = e.params,
    { $wrapperEl: i, size: a, rtlTranslate: o, wrongRTL: f } = e,
    c = e.virtual && n.virtual.enabled,
    h = c ? e.virtual.slides.length : e.slides.length,
    g = i.children(`.${e.params.slideClass}`),
    b = c ? e.virtual.slides.length : g.length;
  let w = [];
  const A = [],
    S = [];
  let T = n.slidesOffsetBefore;
  typeof T == "function" && (T = n.slidesOffsetBefore.call(e));
  let L = n.slidesOffsetAfter;
  typeof L == "function" && (L = n.slidesOffsetAfter.call(e));
  const N = e.snapGrid.length,
    U = e.slidesGrid.length;
  let H = n.spaceBetween,
    q = -T,
    ie = 0,
    p = 0;
  if (typeof a == "undefined") return;
  typeof H == "string" && H.indexOf("%") >= 0 && (H = (parseFloat(H.replace("%", "")) / 100) * a),
    (e.virtualSize = -H),
    o ? g.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : g.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    n.centeredSlides && n.cssMode && (Ci(e.wrapperEl, "--swiper-centered-offset-before", ""), Ci(e.wrapperEl, "--swiper-centered-offset-after", ""));
  const se = n.grid && n.grid.rows > 1 && e.grid;
  se && e.grid.initSlides(b);
  let J;
  const we = n.slidesPerView === "auto" && n.breakpoints && Object.keys(n.breakpoints).filter(Y => typeof n.breakpoints[Y].slidesPerView != "undefined").length > 0;
  for (let Y = 0; Y < b; Y += 1) {
    J = 0;
    const ae = g.eq(Y);
    if ((se && e.grid.updateSlide(Y, ae, b, t), ae.css("display") !== "none")) {
      if (n.slidesPerView === "auto") {
        we && (g[Y].style[t("width")] = "");
        const O = getComputedStyle(ae[0]),
          R = ae[0].style.transform,
          z = ae[0].style.webkitTransform;
        if ((R && (ae[0].style.transform = "none"), z && (ae[0].style.webkitTransform = "none"), n.roundLengths)) J = e.isHorizontal() ? ae.outerWidth(!0) : ae.outerHeight(!0);
        else {
          const re = r(O, "width"),
            le = r(O, "padding-left"),
            be = r(O, "padding-right"),
            fe = r(O, "margin-left"),
            ge = r(O, "margin-right"),
            xe = O.getPropertyValue("box-sizing");
          if (xe && xe === "border-box") J = re + fe + ge;
          else {
            const { clientWidth: V, offsetWidth: K } = ae[0];
            J = re + le + be + fe + ge + (K - V);
          }
        }
        R && (ae[0].style.transform = R), z && (ae[0].style.webkitTransform = z), n.roundLengths && (J = Math.floor(J));
      } else (J = (a - (n.slidesPerView - 1) * H) / n.slidesPerView), n.roundLengths && (J = Math.floor(J)), g[Y] && (g[Y].style[t("width")] = `${J}px`);
      g[Y] && (g[Y].swiperSlideSize = J),
        S.push(J),
        n.centeredSlides
          ? ((q = q + J / 2 + ie / 2 + H), ie === 0 && Y !== 0 && (q = q - a / 2 - H), Y === 0 && (q = q - a / 2 - H), Math.abs(q) < 1 / 1e3 && (q = 0), n.roundLengths && (q = Math.floor(q)), p % n.slidesPerGroup === 0 && w.push(q), A.push(q))
          : (n.roundLengths && (q = Math.floor(q)), (p - Math.min(e.params.slidesPerGroupSkip, p)) % e.params.slidesPerGroup === 0 && w.push(q), A.push(q), (q = q + J + H)),
        (e.virtualSize += J + H),
        (ie = J),
        (p += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, a) + L),
    o && f && (n.effect === "slide" || n.effect === "coverflow") && i.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
    n.setWrapperSize && i.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
    se && e.grid.updateWrapperSize(J, w, t),
    !n.centeredSlides)
  ) {
    const Y = [];
    for (let ae = 0; ae < w.length; ae += 1) {
      let O = w[ae];
      n.roundLengths && (O = Math.floor(O)), w[ae] <= e.virtualSize - a && Y.push(O);
    }
    (w = Y), Math.floor(e.virtualSize - a) - Math.floor(w[w.length - 1]) > 1 && w.push(e.virtualSize - a);
  }
  if ((w.length === 0 && (w = [0]), n.spaceBetween !== 0)) {
    const Y = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
    g.filter((ae, O) => (n.cssMode ? O !== g.length - 1 : !0)).css({ [Y]: `${H}px` });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let Y = 0;
    S.forEach(O => {
      Y += O + (n.spaceBetween ? n.spaceBetween : 0);
    }),
      (Y -= n.spaceBetween);
    const ae = Y - a;
    w = w.map(O => (O < 0 ? -T : O > ae ? ae + L : O));
  }
  if (n.centerInsufficientSlides) {
    let Y = 0;
    if (
      (S.forEach(ae => {
        Y += ae + (n.spaceBetween ? n.spaceBetween : 0);
      }),
      (Y -= n.spaceBetween),
      Y < a)
    ) {
      const ae = (a - Y) / 2;
      w.forEach((O, R) => {
        w[R] = O - ae;
      }),
        A.forEach((O, R) => {
          A[R] = O + ae;
        });
    }
  }
  if ((Object.assign(e, { slides: g, snapGrid: w, slidesGrid: A, slidesSizesGrid: S }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)) {
    Ci(e.wrapperEl, "--swiper-centered-offset-before", `${-w[0]}px`), Ci(e.wrapperEl, "--swiper-centered-offset-after", `${e.size / 2 - S[S.length - 1] / 2}px`);
    const Y = -e.snapGrid[0],
      ae = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map(O => O + Y)), (e.slidesGrid = e.slidesGrid.map(O => O + ae));
  }
  if (
    (b !== h && e.emit("slidesLengthChange"),
    w.length !== N && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
    A.length !== U && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    !c && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const Y = `${n.containerModifierClass}backface-hidden`,
      ae = e.$el.hasClass(Y);
    b <= n.maxBackfaceHiddenSlides ? ae || e.$el.addClass(Y) : ae && e.$el.removeClass(Y);
  }
}
function P_(e) {
  const t = this,
    r = [],
    n = t.virtual && t.params.virtual.enabled;
  let i = 0,
    a;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const o = f => (n ? t.slides.filter(c => parseInt(c.getAttribute("data-swiper-slide-index"), 10) === f)[0] : t.slides.eq(f)[0]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      t.visibleSlides.each(f => {
        r.push(f);
      });
    else
      for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
        const f = t.activeIndex + a;
        if (f > t.slides.length && !n) break;
        r.push(o(f));
      }
  else r.push(o(t.activeIndex));
  for (a = 0; a < r.length; a += 1)
    if (typeof r[a] != "undefined") {
      const f = r[a].offsetHeight;
      i = f > i ? f : i;
    }
  (i || i === 0) && t.$wrapperEl.css("height", `${i}px`);
}
function I_() {
  const e = this,
    t = e.slides;
  for (let r = 0; r < t.length; r += 1) t[r].swiperSlideOffset = e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop;
}
function N_(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    r = t.params,
    { slides: n, rtlTranslate: i, snapGrid: a } = t;
  if (n.length === 0) return;
  typeof n[0].swiperSlideOffset == "undefined" && t.updateSlidesOffset();
  let o = -e;
  i && (o = e), n.removeClass(r.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  for (let f = 0; f < n.length; f += 1) {
    const c = n[f];
    let h = c.swiperSlideOffset;
    r.cssMode && r.centeredSlides && (h -= n[0].swiperSlideOffset);
    const g = (o + (r.centeredSlides ? t.minTranslate() : 0) - h) / (c.swiperSlideSize + r.spaceBetween),
      b = (o - a[0] + (r.centeredSlides ? t.minTranslate() : 0) - h) / (c.swiperSlideSize + r.spaceBetween),
      w = -(o - h),
      A = w + t.slidesSizesGrid[f];
    ((w >= 0 && w < t.size - 1) || (A > 1 && A <= t.size) || (w <= 0 && A >= t.size)) && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(f), n.eq(f).addClass(r.slideVisibleClass)), (c.progress = i ? -g : g), (c.originalProgress = i ? -b : b);
  }
  t.visibleSlides = ne(t.visibleSlides);
}
function R_(e) {
  const t = this;
  if (typeof e == "undefined") {
    const h = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * h) || 0;
  }
  const r = t.params,
    n = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: a, isEnd: o } = t;
  const f = a,
    c = o;
  n === 0 ? ((i = 0), (a = !0), (o = !0)) : ((i = (e - t.minTranslate()) / n), (a = i <= 0), (o = i >= 1)),
    Object.assign(t, { progress: i, isBeginning: a, isEnd: o }),
    (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) && t.updateSlidesProgress(e),
    a && !f && t.emit("reachBeginning toEdge"),
    o && !c && t.emit("reachEnd toEdge"),
    ((f && !a) || (c && !o)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function L_() {
  const e = this,
    { slides: t, params: r, $wrapperEl: n, activeIndex: i, realIndex: a } = e,
    o = e.virtual && r.virtual.enabled;
  t.removeClass(`${r.slideActiveClass} ${r.slideNextClass} ${r.slidePrevClass} ${r.slideDuplicateActiveClass} ${r.slideDuplicateNextClass} ${r.slideDuplicatePrevClass}`);
  let f;
  o ? (f = e.$wrapperEl.find(`.${r.slideClass}[data-swiper-slide-index="${i}"]`)) : (f = t.eq(i)),
    f.addClass(r.slideActiveClass),
    r.loop &&
      (f.hasClass(r.slideDuplicateClass)
        ? n.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${a}"]`).addClass(r.slideDuplicateActiveClass)
        : n.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${a}"]`).addClass(r.slideDuplicateActiveClass));
  let c = f.nextAll(`.${r.slideClass}`).eq(0).addClass(r.slideNextClass);
  r.loop && c.length === 0 && ((c = t.eq(0)), c.addClass(r.slideNextClass));
  let h = f.prevAll(`.${r.slideClass}`).eq(0).addClass(r.slidePrevClass);
  r.loop && h.length === 0 && ((h = t.eq(-1)), h.addClass(r.slidePrevClass)),
    r.loop &&
      (c.hasClass(r.slideDuplicateClass)
        ? n.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicateNextClass)
        : n.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicateNextClass),
      h.hasClass(r.slideDuplicateClass)
        ? n.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${h.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicatePrevClass)
        : n.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${h.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicatePrevClass)),
    e.emitSlidesClasses();
}
function M_(e) {
  const t = this,
    r = t.rtlTranslate ? t.translate : -t.translate,
    { slidesGrid: n, snapGrid: i, params: a, activeIndex: o, realIndex: f, snapIndex: c } = t;
  let h = e,
    g;
  if (typeof h == "undefined") {
    for (let w = 0; w < n.length; w += 1) typeof n[w + 1] != "undefined" ? (r >= n[w] && r < n[w + 1] - (n[w + 1] - n[w]) / 2 ? (h = w) : r >= n[w] && r < n[w + 1] && (h = w + 1)) : r >= n[w] && (h = w);
    a.normalizeSlideIndex && (h < 0 || typeof h == "undefined") && (h = 0);
  }
  if (i.indexOf(r) >= 0) g = i.indexOf(r);
  else {
    const w = Math.min(a.slidesPerGroupSkip, h);
    g = w + Math.floor((h - w) / a.slidesPerGroup);
  }
  if ((g >= i.length && (g = i.length - 1), h === o)) {
    g !== c && ((t.snapIndex = g), t.emit("snapIndexChange"));
    return;
  }
  const b = parseInt(t.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
  Object.assign(t, { snapIndex: g, realIndex: b, previousIndex: o, activeIndex: h }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), f !== b && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function $_(e) {
  const t = this,
    r = t.params,
    n = ne(e).closest(`.${r.slideClass}`)[0];
  let i = !1,
    a;
  if (n) {
    for (let o = 0; o < t.slides.length; o += 1)
      if (t.slides[o] === n) {
        (i = !0), (a = o);
        break;
      }
  }
  if (n && i) (t.clickedSlide = n), t.virtual && t.params.virtual.enabled ? (t.clickedIndex = parseInt(ne(n).attr("data-swiper-slide-index"), 10)) : (t.clickedIndex = a);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}
var D_ = { updateSize: A_, updateSlides: k_, updateAutoHeight: P_, updateSlidesOffset: I_, updateSlidesProgress: N_, updateProgress: R_, updateSlidesClasses: L_, updateActiveIndex: M_, updateClickedSlide: $_ };
function j_(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: r, rtlTranslate: n, translate: i, $wrapperEl: a } = t;
  if (r.virtualTranslate) return n ? -i : i;
  if (r.cssMode) return i;
  let o = y_(a[0], e);
  return n && (o = -o), o || 0;
}
function H_(e, t) {
  const r = this,
    { rtlTranslate: n, params: i, $wrapperEl: a, wrapperEl: o, progress: f } = r;
  let c = 0,
    h = 0;
  const g = 0;
  r.isHorizontal() ? (c = n ? -e : e) : (h = e),
    i.roundLengths && ((c = Math.floor(c)), (h = Math.floor(h))),
    i.cssMode ? (o[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -c : -h) : i.virtualTranslate || a.transform(`translate3d(${c}px, ${h}px, ${g}px)`),
    (r.previousTranslate = r.translate),
    (r.translate = r.isHorizontal() ? c : h);
  let b;
  const w = r.maxTranslate() - r.minTranslate();
  w === 0 ? (b = 0) : (b = (e - r.minTranslate()) / w), b !== f && r.updateProgress(e), r.emit("setTranslate", r.translate, t);
}
function F_() {
  return -this.snapGrid[0];
}
function B_() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function q_(e, t, r, n, i) {
  e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), r === void 0 && (r = !0), n === void 0 && (n = !0);
  const a = this,
    { params: o, wrapperEl: f } = a;
  if (a.animating && o.preventInteractionOnTransition) return !1;
  const c = a.minTranslate(),
    h = a.maxTranslate();
  let g;
  if ((n && e > c ? (g = c) : n && e < h ? (g = h) : (g = e), a.updateProgress(g), o.cssMode)) {
    const b = a.isHorizontal();
    if (t === 0) f[b ? "scrollLeft" : "scrollTop"] = -g;
    else {
      if (!a.support.smoothScroll) return Bc({ swiper: a, targetPosition: -g, side: b ? "left" : "top" }), !0;
      f.scrollTo({ [b ? "left" : "top"]: -g, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (a.setTransition(0), a.setTranslate(g), r && (a.emit("beforeTransitionStart", t, i), a.emit("transitionEnd")))
      : (a.setTransition(t),
        a.setTranslate(g),
        r && (a.emit("beforeTransitionStart", t, i), a.emit("transitionStart")),
        a.animating ||
          ((a.animating = !0),
          a.onTranslateToWrapperTransitionEnd ||
            (a.onTranslateToWrapperTransitionEnd = function (w) {
              !a ||
                a.destroyed ||
                (w.target === this &&
                  (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                  a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd),
                  (a.onTranslateToWrapperTransitionEnd = null),
                  delete a.onTranslateToWrapperTransitionEnd,
                  r && a.emit("transitionEnd")));
            }),
          a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
          a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))),
    !0
  );
}
var z_ = { getTranslate: j_, setTranslate: H_, minTranslate: F_, maxTranslate: B_, translateTo: q_ };
function U_(e, t) {
  const r = this;
  r.params.cssMode || r.$wrapperEl.transition(e), r.emit("setTransition", e, t);
}
function zc(e) {
  let { swiper: t, runCallbacks: r, direction: n, step: i } = e;
  const { activeIndex: a, previousIndex: o } = t;
  let f = n;
  if ((f || (a > o ? (f = "next") : a < o ? (f = "prev") : (f = "reset")), t.emit(`transition${i}`), r && a !== o)) {
    if (f === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`), f === "next" ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
  }
}
function W_(e, t) {
  e === void 0 && (e = !0);
  const r = this,
    { params: n } = r;
  n.cssMode || (n.autoHeight && r.updateAutoHeight(), zc({ swiper: r, runCallbacks: e, direction: t, step: "Start" }));
}
function G_(e, t) {
  e === void 0 && (e = !0);
  const r = this,
    { params: n } = r;
  (r.animating = !1), !n.cssMode && (r.setTransition(0), zc({ swiper: r, runCallbacks: e, direction: t, step: "End" }));
}
var X_ = { setTransition: U_, transitionStart: W_, transitionEnd: G_ };
function Y_(e, t, r, n, i) {
  if ((e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), r === void 0 && (r = !0), typeof e != "number" && typeof e != "string")) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
  if (typeof e == "string") {
    const H = parseInt(e, 10);
    if (!isFinite(H)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
    e = H;
  }
  const a = this;
  let o = e;
  o < 0 && (o = 0);
  const { params: f, snapGrid: c, slidesGrid: h, previousIndex: g, activeIndex: b, rtlTranslate: w, wrapperEl: A, enabled: S } = a;
  if ((a.animating && f.preventInteractionOnTransition) || (!S && !n && !i)) return !1;
  const T = Math.min(a.params.slidesPerGroupSkip, o);
  let L = T + Math.floor((o - T) / a.params.slidesPerGroup);
  L >= c.length && (L = c.length - 1), (b || f.initialSlide || 0) === (g || 0) && r && a.emit("beforeSlideChangeStart");
  const N = -c[L];
  if ((a.updateProgress(N), f.normalizeSlideIndex))
    for (let H = 0; H < h.length; H += 1) {
      const q = -Math.floor(N * 100),
        ie = Math.floor(h[H] * 100),
        p = Math.floor(h[H + 1] * 100);
      typeof h[H + 1] != "undefined" ? (q >= ie && q < p - (p - ie) / 2 ? (o = H) : q >= ie && q < p && (o = H + 1)) : q >= ie && (o = H);
    }
  if (a.initialized && o !== b && ((!a.allowSlideNext && N < a.translate && N < a.minTranslate()) || (!a.allowSlidePrev && N > a.translate && N > a.maxTranslate() && (b || 0) !== o))) return !1;
  let U;
  if ((o > b ? (U = "next") : o < b ? (U = "prev") : (U = "reset"), (w && -N === a.translate) || (!w && N === a.translate)))
    return a.updateActiveIndex(o), f.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), f.effect !== "slide" && a.setTranslate(N), U !== "reset" && (a.transitionStart(r, U), a.transitionEnd(r, U)), !1;
  if (f.cssMode) {
    const H = a.isHorizontal(),
      q = w ? N : -N;
    if (t === 0) {
      const ie = a.virtual && a.params.virtual.enabled;
      ie && ((a.wrapperEl.style.scrollSnapType = "none"), (a._immediateVirtual = !0)),
        (A[H ? "scrollLeft" : "scrollTop"] = q),
        ie &&
          requestAnimationFrame(() => {
            (a.wrapperEl.style.scrollSnapType = ""), (a._swiperImmediateVirtual = !1);
          });
    } else {
      if (!a.support.smoothScroll) return Bc({ swiper: a, targetPosition: q, side: H ? "left" : "top" }), !0;
      A.scrollTo({ [H ? "left" : "top"]: q, behavior: "smooth" });
    }
    return !0;
  }
  return (
    a.setTransition(t),
    a.setTranslate(N),
    a.updateActiveIndex(o),
    a.updateSlidesClasses(),
    a.emit("beforeTransitionStart", t, n),
    a.transitionStart(r, U),
    t === 0
      ? a.transitionEnd(r, U)
      : a.animating ||
        ((a.animating = !0),
        a.onSlideToWrapperTransitionEnd ||
          (a.onSlideToWrapperTransitionEnd = function (q) {
            !a ||
              a.destroyed ||
              (q.target === this &&
                (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd),
                (a.onSlideToWrapperTransitionEnd = null),
                delete a.onSlideToWrapperTransitionEnd,
                a.transitionEnd(r, U)));
          }),
        a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
        a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd)),
    !0
  );
}
function V_(e, t, r, n) {
  e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), r === void 0 && (r = !0);
  const i = this;
  let a = e;
  return i.params.loop && (a += i.loopedSlides), i.slideTo(a, t, r, n);
}
function K_(e, t, r) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const n = this,
    { animating: i, enabled: a, params: o } = n;
  if (!a) return n;
  let f = o.slidesPerGroup;
  o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (f = Math.max(n.slidesPerViewDynamic("current", !0), 1));
  const c = n.activeIndex < o.slidesPerGroupSkip ? 1 : f;
  if (o.loop) {
    if (i && o.loopPreventsSlide) return !1;
    n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
  }
  return o.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + c, e, t, r);
}
function J_(e, t, r) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const n = this,
    { params: i, animating: a, snapGrid: o, slidesGrid: f, rtlTranslate: c, enabled: h } = n;
  if (!h) return n;
  if (i.loop) {
    if (a && i.loopPreventsSlide) return !1;
    n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
  }
  const g = c ? n.translate : -n.translate;
  function b(L) {
    return L < 0 ? -Math.floor(Math.abs(L)) : Math.floor(L);
  }
  const w = b(g),
    A = o.map(L => b(L));
  let S = o[A.indexOf(w) - 1];
  if (typeof S == "undefined" && i.cssMode) {
    let L;
    o.forEach((N, U) => {
      w >= N && (L = U);
    }),
      typeof L != "undefined" && (S = o[L > 0 ? L - 1 : L]);
  }
  let T = 0;
  if ((typeof S != "undefined" && ((T = f.indexOf(S)), T < 0 && (T = n.activeIndex - 1), i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && ((T = T - n.slidesPerViewDynamic("previous", !0) + 1), (T = Math.max(T, 0)))), i.rewind && n.isBeginning)) {
    const L = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
    return n.slideTo(L, e, t, r);
  }
  return n.slideTo(T, e, t, r);
}
function Q_(e, t, r) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const n = this;
  return n.slideTo(n.activeIndex, e, t, r);
}
function Z_(e, t, r, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), n === void 0 && (n = 0.5);
  const i = this;
  let a = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, a),
    f = o + Math.floor((a - o) / i.params.slidesPerGroup),
    c = i.rtlTranslate ? i.translate : -i.translate;
  if (c >= i.snapGrid[f]) {
    const h = i.snapGrid[f],
      g = i.snapGrid[f + 1];
    c - h > (g - h) * n && (a += i.params.slidesPerGroup);
  } else {
    const h = i.snapGrid[f - 1],
      g = i.snapGrid[f];
    c - h <= (g - h) * n && (a -= i.params.slidesPerGroup);
  }
  return (a = Math.max(a, 0)), (a = Math.min(a, i.slidesGrid.length - 1)), i.slideTo(a, e, t, r);
}
function e0() {
  const e = this,
    { params: t, $wrapperEl: r } = e,
    n = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    a;
  if (t.loop) {
    if (e.animating) return;
    (a = parseInt(ne(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - n / 2 || i > e.slides.length - e.loopedSlides + n / 2
          ? (e.loopFix(),
            (i = r.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index()),
            zn(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - n
        ? (e.loopFix(),
          (i = r.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index()),
          zn(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var t0 = { slideTo: Y_, slideToLoop: V_, slideNext: K_, slidePrev: J_, slideReset: Q_, slideToClosest: Z_, slideToClickedSlide: e0 };
function r0() {
  const e = this,
    t = ft(),
    { params: r, $wrapperEl: n } = e,
    i = n.children().length > 0 ? ne(n.children()[0].parentNode) : n;
  i.children(`.${r.slideClass}.${r.slideDuplicateClass}`).remove();
  let a = i.children(`.${r.slideClass}`);
  if (r.loopFillGroupWithBlank) {
    const c = r.slidesPerGroup - (a.length % r.slidesPerGroup);
    if (c !== r.slidesPerGroup) {
      for (let h = 0; h < c; h += 1) {
        const g = ne(t.createElement("div")).addClass(`${r.slideClass} ${r.slideBlankClass}`);
        i.append(g);
      }
      a = i.children(`.${r.slideClass}`);
    }
  }
  r.slidesPerView === "auto" && !r.loopedSlides && (r.loopedSlides = a.length), (e.loopedSlides = Math.ceil(parseFloat(r.loopedSlides || r.slidesPerView, 10))), (e.loopedSlides += r.loopAdditionalSlides), e.loopedSlides > a.length && (e.loopedSlides = a.length);
  const o = [],
    f = [];
  a.each((c, h) => {
    const g = ne(c);
    h < e.loopedSlides && f.push(c), h < a.length && h >= a.length - e.loopedSlides && o.push(c), g.attr("data-swiper-slide-index", h);
  });
  for (let c = 0; c < f.length; c += 1) i.append(ne(f[c].cloneNode(!0)).addClass(r.slideDuplicateClass));
  for (let c = o.length - 1; c >= 0; c -= 1) i.prepend(ne(o[c].cloneNode(!0)).addClass(r.slideDuplicateClass));
}
function n0() {
  const e = this;
  e.emit("beforeLoopFix");
  const { activeIndex: t, slides: r, loopedSlides: n, allowSlidePrev: i, allowSlideNext: a, snapGrid: o, rtlTranslate: f } = e;
  let c;
  (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
  const g = -o[t] - e.getTranslate();
  t < n ? ((c = r.length - n * 3 + t), (c += n), e.slideTo(c, 0, !1, !0) && g !== 0 && e.setTranslate((f ? -e.translate : e.translate) - g)) : t >= r.length - n && ((c = -r.length + t + n), (c += n), e.slideTo(c, 0, !1, !0) && g !== 0 && e.setTranslate((f ? -e.translate : e.translate) - g)),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = a),
    e.emit("loopFix");
}
function i0() {
  const e = this,
    { $wrapperEl: t, params: r, slides: n } = e;
  t.children(`.${r.slideClass}.${r.slideDuplicateClass},.${r.slideClass}.${r.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index");
}
var a0 = { loopCreate: r0, loopFix: n0, loopDestroy: i0 };
function s0(e) {
  const t = this;
  if (t.support.touch || !t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
  const r = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  (r.style.cursor = "move"), (r.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (r.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (r.style.cursor = e ? "grabbing" : "grab");
}
function o0() {
  const e = this;
  e.support.touch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode || (e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "");
}
var u0 = { setGrabCursor: s0, unsetGrabCursor: o0 };
function f0(e, t) {
  t === void 0 && (t = this);
  function r(n) {
    return !n || n === ft() || n === Ye() ? null : (n.assignedSlot && (n = n.assignedSlot), n.closest(e) || r(n.getRootNode().host));
  }
  return r(t);
}
function l0(e) {
  const t = this,
    r = ft(),
    n = Ye(),
    i = t.touchEventsData,
    { params: a, touches: o, enabled: f } = t;
  if (!f || (t.animating && a.preventInteractionOnTransition)) return;
  !t.animating && a.cssMode && a.loop && t.loopFix();
  let c = e;
  c.originalEvent && (c = c.originalEvent);
  let h = ne(c.target);
  if ((a.touchEventsTarget === "wrapper" && !h.closest(t.wrapperEl).length) || ((i.isTouchEvent = c.type === "touchstart"), !i.isTouchEvent && "which" in c && c.which === 3) || (!i.isTouchEvent && "button" in c && c.button > 0) || (i.isTouched && i.isMoved)) return;
  !!a.noSwipingClass && a.noSwipingClass !== "" && c.target && c.target.shadowRoot && e.path && e.path[0] && (h = ne(e.path[0]));
  const b = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
    w = !!(c.target && c.target.shadowRoot);
  if (a.noSwiping && (w ? f0(b, c.target) : h.closest(b)[0])) {
    t.allowClick = !0;
    return;
  }
  if (a.swipeHandler && !h.closest(a.swipeHandler)[0]) return;
  (o.currentX = c.type === "touchstart" ? c.targetTouches[0].pageX : c.pageX), (o.currentY = c.type === "touchstart" ? c.targetTouches[0].pageY : c.pageY);
  const A = o.currentX,
    S = o.currentY,
    T = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
    L = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
  if (T && (A <= L || A >= n.innerWidth - L))
    if (T === "prevent") e.preventDefault();
    else return;
  if (
    (Object.assign(i, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
    (o.startX = A),
    (o.startY = S),
    (i.touchStartTime = $t()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    a.threshold > 0 && (i.allowThresholdMove = !1),
    c.type !== "touchstart")
  ) {
    let N = !0;
    h.is(i.focusableElements) && ((N = !1), h[0].nodeName === "SELECT" && (i.isTouched = !1)), r.activeElement && ne(r.activeElement).is(i.focusableElements) && r.activeElement !== h[0] && r.activeElement.blur();
    const U = N && t.allowTouchMove && a.touchStartPreventDefault;
    (a.touchStartForcePreventDefault || U) && !h[0].isContentEditable && c.preventDefault();
  }
  t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", c);
}
function c0(e) {
  const t = ft(),
    r = this,
    n = r.touchEventsData,
    { params: i, touches: a, rtlTranslate: o, enabled: f } = r;
  if (!f) return;
  let c = e;
  if ((c.originalEvent && (c = c.originalEvent), !n.isTouched)) {
    n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", c);
    return;
  }
  if (n.isTouchEvent && c.type !== "touchmove") return;
  const h = c.type === "touchmove" && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
    g = c.type === "touchmove" ? h.pageX : c.pageX,
    b = c.type === "touchmove" ? h.pageY : c.pageY;
  if (c.preventedByNestedSwiper) {
    (a.startX = g), (a.startY = b);
    return;
  }
  if (!r.allowTouchMove) {
    ne(c.target).is(n.focusableElements) || (r.allowClick = !1), n.isTouched && (Object.assign(a, { startX: g, startY: b, currentX: g, currentY: b }), (n.touchStartTime = $t()));
    return;
  }
  if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
    if (r.isVertical()) {
      if ((b < a.startY && r.translate <= r.maxTranslate()) || (b > a.startY && r.translate >= r.minTranslate())) {
        (n.isTouched = !1), (n.isMoved = !1);
        return;
      }
    } else if ((g < a.startX && r.translate <= r.maxTranslate()) || (g > a.startX && r.translate >= r.minTranslate())) return;
  }
  if (n.isTouchEvent && t.activeElement && c.target === t.activeElement && ne(c.target).is(n.focusableElements)) {
    (n.isMoved = !0), (r.allowClick = !1);
    return;
  }
  if ((n.allowTouchCallbacks && r.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1)) return;
  (a.currentX = g), (a.currentY = b);
  const w = a.currentX - a.startX,
    A = a.currentY - a.startY;
  if (r.params.threshold && Math.sqrt(w ** 2 + A ** 2) < r.params.threshold) return;
  if (typeof n.isScrolling == "undefined") {
    let N;
    (r.isHorizontal() && a.currentY === a.startY) || (r.isVertical() && a.currentX === a.startX) ? (n.isScrolling = !1) : w * w + A * A >= 25 && ((N = (Math.atan2(Math.abs(A), Math.abs(w)) * 180) / Math.PI), (n.isScrolling = r.isHorizontal() ? N > i.touchAngle : 90 - N > i.touchAngle));
  }
  if ((n.isScrolling && r.emit("touchMoveOpposite", c), typeof n.startMoving == "undefined" && (a.currentX !== a.startX || a.currentY !== a.startY) && (n.startMoving = !0), n.isScrolling)) {
    n.isTouched = !1;
    return;
  }
  if (!n.startMoving) return;
  (r.allowClick = !1),
    !i.cssMode && c.cancelable && c.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && c.stopPropagation(),
    n.isMoved ||
      (i.loop && !i.cssMode && r.loopFix(),
      (n.startTranslate = r.getTranslate()),
      r.setTransition(0),
      r.animating && r.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (n.allowMomentumBounce = !1),
      i.grabCursor && (r.allowSlideNext === !0 || r.allowSlidePrev === !0) && r.setGrabCursor(!0),
      r.emit("sliderFirstMove", c)),
    r.emit("sliderMove", c),
    (n.isMoved = !0);
  let S = r.isHorizontal() ? w : A;
  (a.diff = S), (S *= i.touchRatio), o && (S = -S), (r.swipeDirection = S > 0 ? "prev" : "next"), (n.currentTranslate = S + n.startTranslate);
  let T = !0,
    L = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (L = 0),
    S > 0 && n.currentTranslate > r.minTranslate()
      ? ((T = !1), i.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + S) ** L))
      : S < 0 && n.currentTranslate < r.maxTranslate() && ((T = !1), i.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - S) ** L)),
    T && (c.preventedByNestedSwiper = !0),
    !r.allowSlideNext && r.swipeDirection === "next" && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate),
    !r.allowSlidePrev && r.swipeDirection === "prev" && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate),
    !r.allowSlidePrev && !r.allowSlideNext && (n.currentTranslate = n.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(S) > i.threshold || n.allowThresholdMove) {
      if (!n.allowThresholdMove) {
        (n.allowThresholdMove = !0), (a.startX = a.currentX), (a.startY = a.currentY), (n.currentTranslate = n.startTranslate), (a.diff = r.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
        return;
      }
    } else {
      n.currentTranslate = n.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && r.freeMode) || i.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), r.params.freeMode && i.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(n.currentTranslate), r.setTranslate(n.currentTranslate));
}
function d0(e) {
  const t = this,
    r = t.touchEventsData,
    { params: n, touches: i, rtlTranslate: a, slidesGrid: o, enabled: f } = t;
  if (!f) return;
  let c = e;
  if ((c.originalEvent && (c = c.originalEvent), r.allowTouchCallbacks && t.emit("touchEnd", c), (r.allowTouchCallbacks = !1), !r.isTouched)) {
    r.isMoved && n.grabCursor && t.setGrabCursor(!1), (r.isMoved = !1), (r.startMoving = !1);
    return;
  }
  n.grabCursor && r.isMoved && r.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
  const h = $t(),
    g = h - r.touchStartTime;
  if (t.allowClick) {
    const U = c.path || (c.composedPath && c.composedPath());
    t.updateClickedSlide((U && U[0]) || c.target), t.emit("tap click", c), g < 300 && h - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", c);
  }
  if (
    ((r.lastClickTime = $t()),
    zn(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !r.isTouched || !r.isMoved || !t.swipeDirection || i.diff === 0 || r.currentTranslate === r.startTranslate)
  ) {
    (r.isTouched = !1), (r.isMoved = !1), (r.startMoving = !1);
    return;
  }
  (r.isTouched = !1), (r.isMoved = !1), (r.startMoving = !1);
  let b;
  if ((n.followFinger ? (b = a ? t.translate : -t.translate) : (b = -r.currentTranslate), n.cssMode)) return;
  if (t.params.freeMode && n.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: b });
    return;
  }
  let w = 0,
    A = t.slidesSizesGrid[0];
  for (let U = 0; U < o.length; U += U < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
    const H = U < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    typeof o[U + H] != "undefined" ? b >= o[U] && b < o[U + H] && ((w = U), (A = o[U + H] - o[U])) : b >= o[U] && ((w = U), (A = o[o.length - 1] - o[o.length - 2]));
  }
  let S = null,
    T = null;
  n.rewind && (t.isBeginning ? (T = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1) : t.isEnd && (S = 0));
  const L = (b - o[w]) / A,
    N = w < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
  if (g > n.longSwipesMs) {
    if (!n.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" && (L >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? S : w + N) : t.slideTo(w)), t.swipeDirection === "prev" && (L > 1 - n.longSwipesRatio ? t.slideTo(w + N) : T !== null && L < 0 && Math.abs(L) > n.longSwipesRatio ? t.slideTo(T) : t.slideTo(w));
  } else {
    if (!n.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl) ? (c.target === t.navigation.nextEl ? t.slideTo(w + N) : t.slideTo(w)) : (t.swipeDirection === "next" && t.slideTo(S !== null ? S : w + N), t.swipeDirection === "prev" && t.slideTo(T !== null ? T : w));
  }
}
function Wf() {
  const e = this,
    { params: t, el: r } = e;
  if (r && r.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: n, allowSlidePrev: i, snapGrid: a } = e;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses(),
    (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = n),
    e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
}
function p0(e) {
  const t = this;
  !t.enabled || t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
}
function h0() {
  const e = this,
    { wrapperEl: t, rtlTranslate: r, enabled: n } = e;
  if (!n) return;
  (e.previousTranslate = e.translate), e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop), e.translate === -0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  let i;
  const a = e.maxTranslate() - e.minTranslate();
  a === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / a), i !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
let Gf = !1;
function v0() {}
const Uc = (e, t) => {
  const r = ft(),
    { params: n, touchEvents: i, el: a, wrapperEl: o, device: f, support: c } = e,
    h = !!n.nested,
    g = t === "on" ? "addEventListener" : "removeEventListener",
    b = t;
  if (!c.touch) a[g](i.start, e.onTouchStart, !1), r[g](i.move, e.onTouchMove, h), r[g](i.end, e.onTouchEnd, !1);
  else {
    const w = i.start === "touchstart" && c.passiveListener && n.passiveListeners ? { passive: !0, capture: !1 } : !1;
    a[g](i.start, e.onTouchStart, w), a[g](i.move, e.onTouchMove, c.passiveListener ? { passive: !1, capture: h } : h), a[g](i.end, e.onTouchEnd, w), i.cancel && a[g](i.cancel, e.onTouchEnd, w);
  }
  (n.preventClicks || n.preventClicksPropagation) && a[g]("click", e.onClick, !0), n.cssMode && o[g]("scroll", e.onScroll), n.updateOnWindowResize ? e[b](f.ios || f.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Wf, !0) : e[b]("observerUpdate", Wf, !0);
};
function g0() {
  const e = this,
    t = ft(),
    { params: r, support: n } = e;
  (e.onTouchStart = l0.bind(e)), (e.onTouchMove = c0.bind(e)), (e.onTouchEnd = d0.bind(e)), r.cssMode && (e.onScroll = h0.bind(e)), (e.onClick = p0.bind(e)), n.touch && !Gf && (t.addEventListener("touchstart", v0), (Gf = !0)), Uc(e, "on");
}
function m0() {
  Uc(this, "off");
}
var y0 = { attachEvents: g0, detachEvents: m0 };
const Xf = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function b0() {
  const e = this,
    { activeIndex: t, initialized: r, loopedSlides: n = 0, params: i, $el: a } = e,
    o = i.breakpoints;
  if (!o || (o && Object.keys(o).length === 0)) return;
  const f = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
  if (!f || e.currentBreakpoint === f) return;
  const h = (f in o ? o[f] : void 0) || e.originalParams,
    g = Xf(e, i),
    b = Xf(e, h),
    w = i.enabled;
  g && !b
    ? (a.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses())
    : !g && b && (a.addClass(`${i.containerModifierClass}grid`), ((h.grid.fill && h.grid.fill === "column") || (!h.grid.fill && i.grid.fill === "column")) && a.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses());
  const A = h.direction && h.direction !== i.direction,
    S = i.loop && (h.slidesPerView !== i.slidesPerView || A);
  A && r && e.changeDirection(), ht(e.params, h);
  const T = e.params.enabled;
  Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
    w && !T ? e.disable() : !w && T && e.enable(),
    (e.currentBreakpoint = f),
    e.emit("_beforeBreakpoint", h),
    S && r && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)),
    e.emit("breakpoint", h);
}
function _0(e, t, r) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !r))) return;
  let n = !1;
  const i = Ye(),
    a = t === "window" ? i.innerHeight : r.clientHeight,
    o = Object.keys(e).map(f => {
      if (typeof f == "string" && f.indexOf("@") === 0) {
        const c = parseFloat(f.substr(1));
        return { value: a * c, point: f };
      }
      return { value: f, point: f };
    });
  o.sort((f, c) => parseInt(f.value, 10) - parseInt(c.value, 10));
  for (let f = 0; f < o.length; f += 1) {
    const { point: c, value: h } = o[f];
    t === "window" ? i.matchMedia(`(min-width: ${h}px)`).matches && (n = c) : h <= r.clientWidth && (n = c);
  }
  return n || "max";
}
var w0 = { setBreakpoint: b0, getBreakpoint: _0 };
function S0(e, t) {
  const r = [];
  return (
    e.forEach(n => {
      typeof n == "object"
        ? Object.keys(n).forEach(i => {
            n[i] && r.push(t + i);
          })
        : typeof n == "string" && r.push(t + n);
    }),
    r
  );
}
function T0() {
  const e = this,
    { classNames: t, params: r, rtl: n, $el: i, device: a, support: o } = e,
    f = S0(
      [
        "initialized",
        r.direction,
        { "pointer-events": !o.touch },
        { "free-mode": e.params.freeMode && r.freeMode.enabled },
        { autoheight: r.autoHeight },
        { rtl: n },
        { grid: r.grid && r.grid.rows > 1 },
        { "grid-column": r.grid && r.grid.rows > 1 && r.grid.fill === "column" },
        { android: a.android },
        { ios: a.ios },
        { "css-mode": r.cssMode },
        { centered: r.cssMode && r.centeredSlides },
      ],
      r.containerModifierClass
    );
  t.push(...f), i.addClass([...t].join(" ")), e.emitContainerClasses();
}
function E0() {
  const e = this,
    { $el: t, classNames: r } = e;
  t.removeClass(r.join(" ")), e.emitContainerClasses();
}
var x0 = { addClasses: T0, removeClasses: E0 };
function C0(e, t, r, n, i, a) {
  const o = Ye();
  let f;
  function c() {
    a && a();
  }
  !ne(e).parent("picture")[0] && (!e.complete || !i) && t ? ((f = new o.Image()), (f.onload = c), (f.onerror = c), n && (f.sizes = n), r && (f.srcset = r), t && (f.src = t)) : c();
}
function O0() {
  const e = this;
  e.imagesToLoad = e.$el.find("img");
  function t() {
    typeof e == "undefined" || e === null || !e || e.destroyed || (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
  }
  for (let r = 0; r < e.imagesToLoad.length; r += 1) {
    const n = e.imagesToLoad[r];
    e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t);
  }
}
var A0 = { loadImage: C0, preloadImages: O0 };
function k0() {
  const e = this,
    { isLocked: t, params: r } = e,
    { slidesOffsetBefore: n } = r;
  if (n) {
    const i = e.slides.length - 1,
      a = e.slidesGrid[i] + e.slidesSizesGrid[i] + n * 2;
    e.isLocked = e.size > a;
  } else e.isLocked = e.snapGrid.length === 1;
  r.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), r.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var P0 = { checkOverflow: k0 },
  Yf = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function I0(e, t) {
  return function (n) {
    n === void 0 && (n = {});
    const i = Object.keys(n)[0],
      a = n[i];
    if (typeof a != "object" || a === null) {
      ht(t, n);
      return;
    }
    if ((["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && e[i] === !0 && (e[i] = { auto: !0 }), !(i in e && "enabled" in a))) {
      ht(t, n);
      return;
    }
    e[i] === !0 && (e[i] = { enabled: !0 }), typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0), e[i] || (e[i] = { enabled: !1 }), ht(t, n);
  };
}
const is = { eventsEmitter: O_, update: D_, translate: z_, transition: X_, slide: t0, loop: a0, grabCursor: u0, events: y0, breakpoints: w0, checkOverflow: P0, classes: x0, images: A0 },
  as = {};
class Ot {
  constructor() {
    let t, r;
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    if ((i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === "Object" ? (r = i[0]) : ([t, r] = i), r || (r = {}), (r = ht({}, r)), t && !r.el && (r.el = t), r.el && ne(r.el).length > 1)) {
      const h = [];
      return (
        ne(r.el).each(g => {
          const b = ht({}, r, { el: g });
          h.push(new Ot(b));
        }),
        h
      );
    }
    const o = this;
    (o.__swiper__ = !0), (o.support = qc()), (o.device = S_({ userAgent: r.userAgent })), (o.browser = E_()), (o.eventsListeners = {}), (o.eventsAnyListeners = []), (o.modules = [...o.__modules__]), r.modules && Array.isArray(r.modules) && o.modules.push(...r.modules);
    const f = {};
    o.modules.forEach(h => {
      h({ swiper: o, extendParams: I0(r, f), on: o.on.bind(o), once: o.once.bind(o), off: o.off.bind(o), emit: o.emit.bind(o) });
    });
    const c = ht({}, Yf, f);
    return (
      (o.params = ht({}, c, as, r)),
      (o.originalParams = ht({}, o.params)),
      (o.passedParams = ht({}, r)),
      o.params &&
        o.params.on &&
        Object.keys(o.params.on).forEach(h => {
          o.on(h, o.params.on[h]);
        }),
      o.params && o.params.onAny && o.onAny(o.params.onAny),
      (o.$ = ne),
      Object.assign(o, {
        enabled: o.params.enabled,
        el: t,
        classNames: [],
        slides: ne(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return o.params.direction === "horizontal";
        },
        isVertical() {
          return o.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: o.params.allowSlideNext,
        allowSlidePrev: o.params.allowSlidePrev,
        touchEvents: (function () {
          const g = ["touchstart", "touchmove", "touchend", "touchcancel"],
            b = ["pointerdown", "pointermove", "pointerup"];
          return (o.touchEventsTouch = { start: g[0], move: g[1], end: g[2], cancel: g[3] }), (o.touchEventsDesktop = { start: b[0], move: b[1], end: b[2] }), o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop;
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: o.params.focusableElements,
          lastClickTime: $t(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0,
        },
        allowClick: !0,
        allowTouchMove: o.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      o.emit("_swiper"),
      o.params.init && o.init(),
      o
    );
  }
  enable() {
    const t = this;
    t.enabled || ((t.enabled = !0), t.params.grabCursor && t.setGrabCursor(), t.emit("enable"));
  }
  disable() {
    const t = this;
    !t.enabled || ((t.enabled = !1), t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"));
  }
  setProgress(t, r) {
    const n = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = n.minTranslate(),
      o = (n.maxTranslate() - i) * t + i;
    n.translateTo(o, typeof r == "undefined" ? 0 : r), n.updateActiveIndex(), n.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const r = t.el.className.split(" ").filter(n => n.indexOf("swiper") === 0 || n.indexOf(t.params.containerModifierClass) === 0);
    t.emit("_containerClasses", r.join(" "));
  }
  getSlideClasses(t) {
    const r = this;
    return t.className
      .split(" ")
      .filter(n => n.indexOf("swiper-slide") === 0 || n.indexOf(r.params.slideClass) === 0)
      .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const r = [];
    t.slides.each(n => {
      const i = t.getSlideClasses(n);
      r.push({ slideEl: n, classNames: i }), t.emit("_slideClass", n, i);
    }),
      t.emit("_slideClasses", r);
  }
  slidesPerViewDynamic(t, r) {
    t === void 0 && (t = "current"), r === void 0 && (r = !1);
    const n = this,
      { params: i, slides: a, slidesGrid: o, slidesSizesGrid: f, size: c, activeIndex: h } = n;
    let g = 1;
    if (i.centeredSlides) {
      let b = a[h].swiperSlideSize,
        w;
      for (let A = h + 1; A < a.length; A += 1) a[A] && !w && ((b += a[A].swiperSlideSize), (g += 1), b > c && (w = !0));
      for (let A = h - 1; A >= 0; A -= 1) a[A] && !w && ((b += a[A].swiperSlideSize), (g += 1), b > c && (w = !0));
    } else if (t === "current") for (let b = h + 1; b < a.length; b += 1) (r ? o[b] + f[b] - o[h] < c : o[b] - o[h] < c) && (g += 1);
    else for (let b = h - 1; b >= 0; b -= 1) o[h] - o[b] < c && (g += 1);
    return g;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: r, params: n } = t;
    n.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
    function i() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        f = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(f), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let a;
    t.params.freeMode && t.params.freeMode.enabled
      ? (i(), t.params.autoHeight && t.updateAutoHeight())
      : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? (a = t.slideTo(t.slides.length - 1, 0, !1, !0)) : (a = t.slideTo(t.activeIndex, 0, !1, !0)), a || i()),
      n.watchOverflow && r !== t.snapGrid && t.checkOverflow(),
      t.emit("update");
  }
  changeDirection(t, r) {
    r === void 0 && (r = !0);
    const n = this,
      i = n.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (n.$el.removeClass(`${n.params.containerModifierClass}${i}`).addClass(`${n.params.containerModifierClass}${t}`),
        n.emitContainerClasses(),
        (n.params.direction = t),
        n.slides.each(a => {
          t === "vertical" ? (a.style.width = "") : (a.style.height = "");
        }),
        n.emit("changeDirection"),
        r && n.update()),
      n
    );
  }
  mount(t) {
    const r = this;
    if (r.mounted) return !0;
    const n = ne(t || r.params.el);
    if (((t = n[0]), !t)) return !1;
    t.swiper = r;
    const i = () => `.${(r.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() => {
      if (t && t.shadowRoot && t.shadowRoot.querySelector) {
        const f = ne(t.shadowRoot.querySelector(i()));
        return (f.children = c => n.children(c)), f;
      }
      return n.children(i());
    })();
    if (o.length === 0 && r.params.createElements) {
      const c = ft().createElement("div");
      (o = ne(c)),
        (c.className = r.params.wrapperClass),
        n.append(c),
        n.children(`.${r.params.slideClass}`).each(h => {
          o.append(h);
        });
    }
    return (
      Object.assign(r, {
        $el: n,
        el: t,
        $wrapperEl: o,
        wrapperEl: o[0],
        mounted: !0,
        rtl: t.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl",
        rtlTranslate: r.params.direction === "horizontal" && (t.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl"),
        wrongRTL: o.css("display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const r = this;
    return (
      r.initialized ||
        r.mount(t) === !1 ||
        (r.emit("beforeInit"),
        r.params.breakpoints && r.setBreakpoint(),
        r.addClasses(),
        r.params.loop && r.loopCreate(),
        r.updateSize(),
        r.updateSlides(),
        r.params.watchOverflow && r.checkOverflow(),
        r.params.grabCursor && r.enabled && r.setGrabCursor(),
        r.params.preloadImages && r.preloadImages(),
        r.params.loop ? r.slideTo(r.params.initialSlide + r.loopedSlides, 0, r.params.runCallbacksOnInit, !1, !0) : r.slideTo(r.params.initialSlide, 0, r.params.runCallbacksOnInit, !1, !0),
        r.attachEvents(),
        (r.initialized = !0),
        r.emit("init"),
        r.emit("afterInit")),
      r
    );
  }
  destroy(t, r) {
    t === void 0 && (t = !0), r === void 0 && (r = !0);
    const n = this,
      { params: i, $el: a, $wrapperEl: o, slides: f } = n;
    return (
      typeof n.params == "undefined" ||
        n.destroyed ||
        (n.emit("beforeDestroy"),
        (n.initialized = !1),
        n.detachEvents(),
        i.loop && n.loopDestroy(),
        r && (n.removeClasses(), a.removeAttr("style"), o.removeAttr("style"), f && f.length && f.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
        n.emit("destroy"),
        Object.keys(n.eventsListeners).forEach(c => {
          n.off(c);
        }),
        t !== !1 && ((n.$el[0].swiper = null), g_(n)),
        (n.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    ht(as, t);
  }
  static get extendedDefaults() {
    return as;
  }
  static get defaults() {
    return Yf;
  }
  static installModule(t) {
    Ot.prototype.__modules__ || (Ot.prototype.__modules__ = []);
    const r = Ot.prototype.__modules__;
    typeof t == "function" && r.indexOf(t) < 0 && r.push(t);
  }
  static use(t) {
    return Array.isArray(t) ? (t.forEach(r => Ot.installModule(r)), Ot) : (Ot.installModule(t), Ot);
  }
}
Object.keys(is).forEach(e => {
  Object.keys(is[e]).forEach(t => {
    Ot.prototype[t] = is[e][t];
  });
});
Ot.use([x_, C_]);
function jw(e) {
  let { swiper: t, extendParams: r, on: n, emit: i } = e;
  const a = Ye();
  r({ mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null } }), (t.mousewheel = { enabled: !1 });
  let o,
    f = $t(),
    c;
  const h = [];
  function g(H) {
    let se = 0,
      J = 0,
      we = 0,
      Y = 0;
    return (
      "detail" in H && (J = H.detail),
      "wheelDelta" in H && (J = -H.wheelDelta / 120),
      "wheelDeltaY" in H && (J = -H.wheelDeltaY / 120),
      "wheelDeltaX" in H && (se = -H.wheelDeltaX / 120),
      "axis" in H && H.axis === H.HORIZONTAL_AXIS && ((se = J), (J = 0)),
      (we = se * 10),
      (Y = J * 10),
      "deltaY" in H && (Y = H.deltaY),
      "deltaX" in H && (we = H.deltaX),
      H.shiftKey && !we && ((we = Y), (Y = 0)),
      (we || Y) && H.deltaMode && (H.deltaMode === 1 ? ((we *= 40), (Y *= 40)) : ((we *= 800), (Y *= 800))),
      we && !se && (se = we < 1 ? -1 : 1),
      Y && !J && (J = Y < 1 ? -1 : 1),
      { spinX: se, spinY: J, pixelX: we, pixelY: Y }
    );
  }
  function b() {
    !t.enabled || (t.mouseEntered = !0);
  }
  function w() {
    !t.enabled || (t.mouseEntered = !1);
  }
  function A(H) {
    return (t.params.mousewheel.thresholdDelta && H.delta < t.params.mousewheel.thresholdDelta) || (t.params.mousewheel.thresholdTime && $t() - f < t.params.mousewheel.thresholdTime)
      ? !1
      : H.delta >= 6 && $t() - f < 60
      ? !0
      : (H.direction < 0 ? (!t.isEnd || t.params.loop) && !t.animating && (t.slideNext(), i("scroll", H.raw)) : (!t.isBeginning || t.params.loop) && !t.animating && (t.slidePrev(), i("scroll", H.raw)), (f = new a.Date().getTime()), !1);
  }
  function S(H) {
    const q = t.params.mousewheel;
    if (H.direction < 0) {
      if (t.isEnd && !t.params.loop && q.releaseOnEdges) return !0;
    } else if (t.isBeginning && !t.params.loop && q.releaseOnEdges) return !0;
    return !1;
  }
  function T(H) {
    let q = H,
      ie = !0;
    if (!t.enabled) return;
    const p = t.params.mousewheel;
    t.params.cssMode && q.preventDefault();
    let se = t.$el;
    if ((t.params.mousewheel.eventsTarget !== "container" && (se = ne(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !se[0].contains(q.target) && !p.releaseOnEdges)) return !0;
    q.originalEvent && (q = q.originalEvent);
    let J = 0;
    const we = t.rtlTranslate ? -1 : 1,
      Y = g(q);
    if (p.forceToAxis)
      if (t.isHorizontal())
        if (Math.abs(Y.pixelX) > Math.abs(Y.pixelY)) J = -Y.pixelX * we;
        else return !0;
      else if (Math.abs(Y.pixelY) > Math.abs(Y.pixelX)) J = -Y.pixelY;
      else return !0;
    else J = Math.abs(Y.pixelX) > Math.abs(Y.pixelY) ? -Y.pixelX * we : -Y.pixelY;
    if (J === 0) return !0;
    p.invert && (J = -J);
    let ae = t.getTranslate() + J * p.sensitivity;
    if ((ae >= t.minTranslate() && (ae = t.minTranslate()), ae <= t.maxTranslate() && (ae = t.maxTranslate()), (ie = t.params.loop ? !0 : !(ae === t.minTranslate() || ae === t.maxTranslate())), ie && t.params.nested && q.stopPropagation(), !t.params.freeMode || !t.params.freeMode.enabled)) {
      const O = { time: $t(), delta: Math.abs(J), direction: Math.sign(J), raw: H };
      h.length >= 2 && h.shift();
      const R = h.length ? h[h.length - 1] : void 0;
      if ((h.push(O), R ? (O.direction !== R.direction || O.delta > R.delta || O.time > R.time + 150) && A(O) : A(O), S(O))) return !0;
    } else {
      const O = { time: $t(), delta: Math.abs(J), direction: Math.sign(J) },
        R = c && O.time < c.time + 500 && O.delta <= c.delta && O.direction === c.direction;
      if (!R) {
        (c = void 0), t.params.loop && t.loopFix();
        let z = t.getTranslate() + J * p.sensitivity;
        const re = t.isBeginning,
          le = t.isEnd;
        if (
          (z >= t.minTranslate() && (z = t.minTranslate()),
          z <= t.maxTranslate() && (z = t.maxTranslate()),
          t.setTransition(0),
          t.setTranslate(z),
          t.updateProgress(),
          t.updateActiveIndex(),
          t.updateSlidesClasses(),
          ((!re && t.isBeginning) || (!le && t.isEnd)) && t.updateSlidesClasses(),
          t.params.freeMode.sticky)
        ) {
          clearTimeout(o), (o = void 0), h.length >= 15 && h.shift();
          const be = h.length ? h[h.length - 1] : void 0,
            fe = h[0];
          if ((h.push(O), be && (O.delta > be.delta || O.direction !== be.direction))) h.splice(0);
          else if (h.length >= 15 && O.time - fe.time < 500 && fe.delta - O.delta >= 1 && O.delta <= 6) {
            const ge = J > 0 ? 0.8 : 0.2;
            (c = O),
              h.splice(0),
              (o = zn(() => {
                t.slideToClosest(t.params.speed, !0, void 0, ge);
              }, 0));
          }
          o ||
            (o = zn(() => {
              (c = O), h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, 0.5);
            }, 500));
        }
        if ((R || i("scroll", q), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), z === t.minTranslate() || z === t.maxTranslate())) return !0;
      }
    }
    return q.preventDefault ? q.preventDefault() : (q.returnValue = !1), !1;
  }
  function L(H) {
    let q = t.$el;
    t.params.mousewheel.eventsTarget !== "container" && (q = ne(t.params.mousewheel.eventsTarget)), q[H]("mouseenter", b), q[H]("mouseleave", w), q[H]("wheel", T);
  }
  function N() {
    return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", T), !0) : t.mousewheel.enabled ? !1 : (L("on"), (t.mousewheel.enabled = !0), !0);
  }
  function U() {
    return t.params.cssMode ? (t.wrapperEl.addEventListener(event, T), !0) : t.mousewheel.enabled ? (L("off"), (t.mousewheel.enabled = !1), !0) : !1;
  }
  n("init", () => {
    !t.params.mousewheel.enabled && t.params.cssMode && U(), t.params.mousewheel.enabled && N();
  }),
    n("destroy", () => {
      t.params.cssMode && N(), t.mousewheel.enabled && U();
    }),
    Object.assign(t.mousewheel, { enable: N, disable: U });
}
function N0(e, t, r, n) {
  const i = ft();
  return (
    e.params.createElements &&
      Object.keys(n).forEach(a => {
        if (!r[a] && r.auto === !0) {
          let o = e.$el.children(`.${n[a]}`)[0];
          o || ((o = i.createElement("div")), (o.className = n[a]), e.$el.append(o)), (r[a] = o), (t[a] = o);
        }
      }),
    r
  );
}
function qr(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function Hw(e) {
  let { swiper: t, extendParams: r, on: n, emit: i } = e;
  const a = "swiper-pagination";
  r({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: S => S,
      formatFractionTotal: S => S,
      bulletClass: `${a}-bullet`,
      bulletActiveClass: `${a}-bullet-active`,
      modifierClass: `${a}-`,
      currentClass: `${a}-current`,
      totalClass: `${a}-total`,
      hiddenClass: `${a}-hidden`,
      progressbarFillClass: `${a}-progressbar-fill`,
      progressbarOppositeClass: `${a}-progressbar-opposite`,
      clickableClass: `${a}-clickable`,
      lockClass: `${a}-lock`,
      horizontalClass: `${a}-horizontal`,
      verticalClass: `${a}-vertical`,
    },
  }),
    (t.pagination = { el: null, $el: null, bullets: [] });
  let o,
    f = 0;
  function c() {
    return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || t.pagination.$el.length === 0;
  }
  function h(S, T) {
    const { bulletActiveClass: L } = t.params.pagination;
    S[T]().addClass(`${L}-${T}`)[T]().addClass(`${L}-${T}-${T}`);
  }
  function g() {
    const S = t.rtl,
      T = t.params.pagination;
    if (c()) return;
    const L = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
      N = t.pagination.$el;
    let U;
    const H = t.params.loop ? Math.ceil((L - t.loopedSlides * 2) / t.params.slidesPerGroup) : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((U = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)), U > L - 1 - t.loopedSlides * 2 && (U -= L - t.loopedSlides * 2), U > H - 1 && (U -= H), U < 0 && t.params.paginationType !== "bullets" && (U = H + U))
        : typeof t.snapIndex != "undefined"
        ? (U = t.snapIndex)
        : (U = t.activeIndex || 0),
      T.type === "bullets" && t.pagination.bullets && t.pagination.bullets.length > 0)
    ) {
      const q = t.pagination.bullets;
      let ie, p, se;
      if (
        (T.dynamicBullets &&
          ((o = q.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
          N.css(t.isHorizontal() ? "width" : "height", `${o * (T.dynamicMainBullets + 4)}px`),
          T.dynamicMainBullets > 1 && t.previousIndex !== void 0 && ((f += U - (t.previousIndex - t.loopedSlides || 0)), f > T.dynamicMainBullets - 1 ? (f = T.dynamicMainBullets - 1) : f < 0 && (f = 0)),
          (ie = Math.max(U - f, 0)),
          (p = ie + (Math.min(q.length, T.dynamicMainBullets) - 1)),
          (se = (p + ie) / 2)),
        q.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(J => `${T.bulletActiveClass}${J}`).join(" ")),
        N.length > 1)
      )
        q.each(J => {
          const we = ne(J),
            Y = we.index();
          Y === U && we.addClass(T.bulletActiveClass), T.dynamicBullets && (Y >= ie && Y <= p && we.addClass(`${T.bulletActiveClass}-main`), Y === ie && h(we, "prev"), Y === p && h(we, "next"));
        });
      else {
        const J = q.eq(U),
          we = J.index();
        if ((J.addClass(T.bulletActiveClass), T.dynamicBullets)) {
          const Y = q.eq(ie),
            ae = q.eq(p);
          for (let O = ie; O <= p; O += 1) q.eq(O).addClass(`${T.bulletActiveClass}-main`);
          if (t.params.loop)
            if (we >= q.length) {
              for (let O = T.dynamicMainBullets; O >= 0; O -= 1) q.eq(q.length - O).addClass(`${T.bulletActiveClass}-main`);
              q.eq(q.length - T.dynamicMainBullets - 1).addClass(`${T.bulletActiveClass}-prev`);
            } else h(Y, "prev"), h(ae, "next");
          else h(Y, "prev"), h(ae, "next");
        }
      }
      if (T.dynamicBullets) {
        const J = Math.min(q.length, T.dynamicMainBullets + 4),
          we = (o * J - o) / 2 - se * o,
          Y = S ? "right" : "left";
        q.css(t.isHorizontal() ? Y : "top", `${we}px`);
      }
    }
    if ((T.type === "fraction" && (N.find(qr(T.currentClass)).text(T.formatFractionCurrent(U + 1)), N.find(qr(T.totalClass)).text(T.formatFractionTotal(H))), T.type === "progressbar")) {
      let q;
      T.progressbarOpposite ? (q = t.isHorizontal() ? "vertical" : "horizontal") : (q = t.isHorizontal() ? "horizontal" : "vertical");
      const ie = (U + 1) / H;
      let p = 1,
        se = 1;
      q === "horizontal" ? (p = ie) : (se = ie), N.find(qr(T.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${p}) scaleY(${se})`).transition(t.params.speed);
    }
    T.type === "custom" && T.renderCustom ? (N.html(T.renderCustom(t, U + 1, H)), i("paginationRender", N[0])) : i("paginationUpdate", N[0]), t.params.watchOverflow && t.enabled && N[t.isLocked ? "addClass" : "removeClass"](T.lockClass);
  }
  function b() {
    const S = t.params.pagination;
    if (c()) return;
    const T = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
      L = t.pagination.$el;
    let N = "";
    if (S.type === "bullets") {
      let U = t.params.loop ? Math.ceil((T - t.loopedSlides * 2) / t.params.slidesPerGroup) : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && U > T && (U = T);
      for (let H = 0; H < U; H += 1) S.renderBullet ? (N += S.renderBullet.call(t, H, S.bulletClass)) : (N += `<${S.bulletElement} class="${S.bulletClass}"></${S.bulletElement}>`);
      L.html(N), (t.pagination.bullets = L.find(qr(S.bulletClass)));
    }
    S.type === "fraction" && (S.renderFraction ? (N = S.renderFraction.call(t, S.currentClass, S.totalClass)) : (N = `<span class="${S.currentClass}"></span> / <span class="${S.totalClass}"></span>`), L.html(N)),
      S.type === "progressbar" && (S.renderProgressbar ? (N = S.renderProgressbar.call(t, S.progressbarFillClass)) : (N = `<span class="${S.progressbarFillClass}"></span>`), L.html(N)),
      S.type !== "custom" && i("paginationRender", t.pagination.$el[0]);
  }
  function w() {
    t.params.pagination = N0(t, t.originalParams.pagination, t.params.pagination, { el: "swiper-pagination" });
    const S = t.params.pagination;
    if (!S.el) return;
    let T = ne(S.el);
    T.length !== 0 &&
      (t.params.uniqueNavElements && typeof S.el == "string" && T.length > 1 && ((T = t.$el.find(S.el)), T.length > 1 && (T = T.filter(L => ne(L).parents(".swiper")[0] === t.el))),
      S.type === "bullets" && S.clickable && T.addClass(S.clickableClass),
      T.addClass(S.modifierClass + S.type),
      T.addClass(S.modifierClass + t.params.direction),
      S.type === "bullets" && S.dynamicBullets && (T.addClass(`${S.modifierClass}${S.type}-dynamic`), (f = 0), S.dynamicMainBullets < 1 && (S.dynamicMainBullets = 1)),
      S.type === "progressbar" && S.progressbarOpposite && T.addClass(S.progressbarOppositeClass),
      S.clickable &&
        T.on("click", qr(S.bulletClass), function (N) {
          N.preventDefault();
          let U = ne(this).index() * t.params.slidesPerGroup;
          t.params.loop && (U += t.loopedSlides), t.slideTo(U);
        }),
      Object.assign(t.pagination, { $el: T, el: T[0] }),
      t.enabled || T.addClass(S.lockClass));
  }
  function A() {
    const S = t.params.pagination;
    if (c()) return;
    const T = t.pagination.$el;
    T.removeClass(S.hiddenClass), T.removeClass(S.modifierClass + S.type), T.removeClass(S.modifierClass + t.params.direction), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(S.bulletActiveClass), S.clickable && T.off("click", qr(S.bulletClass));
  }
  n("init", () => {
    w(), b(), g();
  }),
    n("activeIndexChange", () => {
      (t.params.loop || typeof t.snapIndex == "undefined") && g();
    }),
    n("snapIndexChange", () => {
      t.params.loop || g();
    }),
    n("slidesLengthChange", () => {
      t.params.loop && (b(), g());
    }),
    n("snapGridLengthChange", () => {
      t.params.loop || (b(), g());
    }),
    n("destroy", () => {
      A();
    }),
    n("enable disable", () => {
      const { $el: S } = t.pagination;
      S && S[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass);
    }),
    n("lock unlock", () => {
      g();
    }),
    n("click", (S, T) => {
      const L = T.target,
        { $el: N } = t.pagination;
      if (t.params.pagination.el && t.params.pagination.hideOnClick && N.length > 0 && !ne(L).hasClass(t.params.pagination.bulletClass)) {
        if (t.navigation && ((t.navigation.nextEl && L === t.navigation.nextEl) || (t.navigation.prevEl && L === t.navigation.prevEl))) return;
        const U = N.hasClass(t.params.pagination.hiddenClass);
        i(U === !0 ? "paginationShow" : "paginationHide"), N.toggleClass(t.params.pagination.hiddenClass);
      }
    }),
    Object.assign(t.pagination, { render: b, update: g, init: w, destroy: A });
}
/*!
 * vue-router v3.5.3
 * (c) 2021 Evan You
 * @license MIT
 */ function kt(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
var R0 = /[!'()*]/g,
  L0 = function (e) {
    return "%" + e.charCodeAt(0).toString(16);
  },
  M0 = /%2C/g,
  zr = function (e) {
    return encodeURIComponent(e).replace(R0, L0).replace(M0, ",");
  };
function js(e) {
  try {
    return decodeURIComponent(e);
  } catch {}
  return e;
}
function $0(e, t, r) {
  t === void 0 && (t = {});
  var n = r || D0,
    i;
  try {
    i = n(e || "");
  } catch {
    i = {};
  }
  for (var a in t) {
    var o = t[a];
    i[a] = Array.isArray(o) ? o.map(Vf) : Vf(o);
  }
  return i;
}
var Vf = function (e) {
  return e == null || typeof e == "object" ? e : String(e);
};
function D0(e) {
  var t = {};
  return (
    (e = e.trim().replace(/^(\?|#|&)/, "")),
    e &&
      e.split("&").forEach(function (r) {
        var n = r.replace(/\+/g, " ").split("="),
          i = js(n.shift()),
          a = n.length > 0 ? js(n.join("=")) : null;
        t[i] === void 0 ? (t[i] = a) : Array.isArray(t[i]) ? t[i].push(a) : (t[i] = [t[i], a]);
      }),
    t
  );
}
function j0(e) {
  var t = e
    ? Object.keys(e)
        .map(function (r) {
          var n = e[r];
          if (n === void 0) return "";
          if (n === null) return zr(r);
          if (Array.isArray(n)) {
            var i = [];
            return (
              n.forEach(function (a) {
                a !== void 0 && (a === null ? i.push(zr(r)) : i.push(zr(r) + "=" + zr(a)));
              }),
              i.join("&")
            );
          }
          return zr(r) + "=" + zr(n);
        })
        .filter(function (r) {
          return r.length > 0;
        })
        .join("&")
    : null;
  return t ? "?" + t : "";
}
var Qi = /\/?$/;
function Zi(e, t, r, n) {
  var i = n && n.options.stringifyQuery,
    a = t.query || {};
  try {
    a = Hs(a);
  } catch {}
  var o = { name: t.name || (e && e.name), meta: (e && e.meta) || {}, path: t.path || "/", hash: t.hash || "", query: a, params: t.params || {}, fullPath: Kf(t, i), matched: e ? H0(e) : [] };
  return r && (o.redirectedFrom = Kf(r, i)), Object.freeze(o);
}
function Hs(e) {
  if (Array.isArray(e)) return e.map(Hs);
  if (e && typeof e == "object") {
    var t = {};
    for (var r in e) t[r] = Hs(e[r]);
    return t;
  } else return e;
}
var ur = Zi(null, { path: "/" });
function H0(e) {
  for (var t = []; e; ) t.unshift(e), (e = e.parent);
  return t;
}
function Kf(e, t) {
  var r = e.path,
    n = e.query;
  n === void 0 && (n = {});
  var i = e.hash;
  i === void 0 && (i = "");
  var a = t || j0;
  return (r || "/") + a(n) + i;
}
function Wc(e, t, r) {
  return t === ur ? e === t : t ? (e.path && t.path ? e.path.replace(Qi, "") === t.path.replace(Qi, "") && (r || (e.hash === t.hash && Ri(e.query, t.query))) : e.name && t.name ? e.name === t.name && (r || (e.hash === t.hash && Ri(e.query, t.query) && Ri(e.params, t.params))) : !1) : !1;
}
function Ri(e, t) {
  if ((e === void 0 && (e = {}), t === void 0 && (t = {}), !e || !t)) return e === t;
  var r = Object.keys(e).sort(),
    n = Object.keys(t).sort();
  return r.length !== n.length
    ? !1
    : r.every(function (i, a) {
        var o = e[i],
          f = n[a];
        if (f !== i) return !1;
        var c = t[i];
        return o == null || c == null ? o === c : typeof o == "object" && typeof c == "object" ? Ri(o, c) : String(o) === String(c);
      });
}
function F0(e, t) {
  return e.path.replace(Qi, "/").indexOf(t.path.replace(Qi, "/")) === 0 && (!t.hash || e.hash === t.hash) && B0(e.query, t.query);
}
function B0(e, t) {
  for (var r in t) if (!(r in e)) return !1;
  return !0;
}
function Gc(e) {
  for (var t = 0; t < e.matched.length; t++) {
    var r = e.matched[t];
    for (var n in r.instances) {
      var i = r.instances[n],
        a = r.enteredCbs[n];
      if (!(!i || !a)) {
        delete r.enteredCbs[n];
        for (var o = 0; o < a.length; o++) i._isBeingDestroyed || a[o](i);
      }
    }
  }
}
var q0 = {
  name: "RouterView",
  functional: !0,
  props: { name: { type: String, default: "default" } },
  render: function (t, r) {
    var n = r.props,
      i = r.children,
      a = r.parent,
      o = r.data;
    o.routerView = !0;
    for (var f = a.$createElement, c = n.name, h = a.$route, g = a._routerViewCache || (a._routerViewCache = {}), b = 0, w = !1; a && a._routerRoot !== a; ) {
      var A = a.$vnode ? a.$vnode.data : {};
      A.routerView && b++, A.keepAlive && a._directInactive && a._inactive && (w = !0), (a = a.$parent);
    }
    if (((o.routerViewDepth = b), w)) {
      var S = g[c],
        T = S && S.component;
      return T ? (S.configProps && Jf(T, o, S.route, S.configProps), f(T, o, i)) : f();
    }
    var L = h.matched[b],
      N = L && L.components[c];
    if (!L || !N) return (g[c] = null), f();
    (g[c] = { component: N }),
      (o.registerRouteInstance = function (H, q) {
        var ie = L.instances[c];
        ((q && ie !== H) || (!q && ie === H)) && (L.instances[c] = q);
      }),
      ((o.hook || (o.hook = {})).prepatch = function (H, q) {
        L.instances[c] = q.componentInstance;
      }),
      (o.hook.init = function (H) {
        H.data.keepAlive && H.componentInstance && H.componentInstance !== L.instances[c] && (L.instances[c] = H.componentInstance), Gc(h);
      });
    var U = L.props && L.props[c];
    return U && (kt(g[c], { route: h, configProps: U }), Jf(N, o, h, U)), f(N, o, i);
  },
};
function Jf(e, t, r, n) {
  var i = (t.props = z0(r, n));
  if (i) {
    i = t.props = kt({}, i);
    var a = (t.attrs = t.attrs || {});
    for (var o in i) (!e.props || !(o in e.props)) && ((a[o] = i[o]), delete i[o]);
  }
}
function z0(e, t) {
  switch (typeof t) {
    case "undefined":
      return;
    case "object":
      return t;
    case "function":
      return t(e);
    case "boolean":
      return t ? e.params : void 0;
  }
}
function Xc(e, t, r) {
  var n = e.charAt(0);
  if (n === "/") return e;
  if (n === "?" || n === "#") return t + e;
  var i = t.split("/");
  (!r || !i[i.length - 1]) && i.pop();
  for (var a = e.replace(/^\//, "").split("/"), o = 0; o < a.length; o++) {
    var f = a[o];
    f === ".." ? i.pop() : f !== "." && i.push(f);
  }
  return i[0] !== "" && i.unshift(""), i.join("/");
}
function U0(e) {
  var t = "",
    r = "",
    n = e.indexOf("#");
  n >= 0 && ((t = e.slice(n)), (e = e.slice(0, n)));
  var i = e.indexOf("?");
  return i >= 0 && ((r = e.slice(i + 1)), (e = e.slice(0, i))), { path: e, query: r, hash: t };
}
function tr(e) {
  return e.replace(/\/+/g, "/");
}
var ea =
    Array.isArray ||
    function (e) {
      return Object.prototype.toString.call(e) == "[object Array]";
    },
  dn = Kc,
  W0 = Io,
  G0 = K0,
  X0 = Yc,
  Y0 = Vc,
  V0 = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");
function Io(e, t) {
  for (var r = [], n = 0, i = 0, a = "", o = (t && t.delimiter) || "/", f; (f = V0.exec(e)) != null; ) {
    var c = f[0],
      h = f[1],
      g = f.index;
    if (((a += e.slice(i, g)), (i = g + c.length), h)) {
      a += h[1];
      continue;
    }
    var b = e[i],
      w = f[2],
      A = f[3],
      S = f[4],
      T = f[5],
      L = f[6],
      N = f[7];
    a && (r.push(a), (a = ""));
    var U = w != null && b != null && b !== w,
      H = L === "+" || L === "*",
      q = L === "?" || L === "*",
      ie = f[2] || o,
      p = S || T;
    r.push({ name: A || n++, prefix: w || "", delimiter: ie, optional: q, repeat: H, partial: U, asterisk: !!N, pattern: p ? Z0(p) : N ? ".*" : "[^" + Li(ie) + "]+?" });
  }
  return i < e.length && (a += e.substr(i)), a && r.push(a), r;
}
function K0(e, t) {
  return Yc(Io(e, t), t);
}
function J0(e) {
  return encodeURI(e).replace(/[\/?#]/g, function (t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function Q0(e) {
  return encodeURI(e).replace(/[?#]/g, function (t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function Yc(e, t) {
  for (var r = new Array(e.length), n = 0; n < e.length; n++) typeof e[n] == "object" && (r[n] = new RegExp("^(?:" + e[n].pattern + ")$", Ro(t)));
  return function (i, a) {
    for (var o = "", f = i || {}, c = a || {}, h = c.pretty ? J0 : encodeURIComponent, g = 0; g < e.length; g++) {
      var b = e[g];
      if (typeof b == "string") {
        o += b;
        continue;
      }
      var w = f[b.name],
        A;
      if (w == null)
        if (b.optional) {
          b.partial && (o += b.prefix);
          continue;
        } else throw new TypeError('Expected "' + b.name + '" to be defined');
      if (ea(w)) {
        if (!b.repeat) throw new TypeError('Expected "' + b.name + '" to not repeat, but received `' + JSON.stringify(w) + "`");
        if (w.length === 0) {
          if (b.optional) continue;
          throw new TypeError('Expected "' + b.name + '" to not be empty');
        }
        for (var S = 0; S < w.length; S++) {
          if (((A = h(w[S])), !r[g].test(A))) throw new TypeError('Expected all "' + b.name + '" to match "' + b.pattern + '", but received `' + JSON.stringify(A) + "`");
          o += (S === 0 ? b.prefix : b.delimiter) + A;
        }
        continue;
      }
      if (((A = b.asterisk ? Q0(w) : h(w)), !r[g].test(A))) throw new TypeError('Expected "' + b.name + '" to match "' + b.pattern + '", but received "' + A + '"');
      o += b.prefix + A;
    }
    return o;
  };
}
function Li(e) {
  return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function Z0(e) {
  return e.replace(/([=!:$\/()])/g, "\\$1");
}
function No(e, t) {
  return (e.keys = t), e;
}
function Ro(e) {
  return e && e.sensitive ? "" : "i";
}
function ew(e, t) {
  var r = e.source.match(/\((?!\?)/g);
  if (r) for (var n = 0; n < r.length; n++) t.push({ name: n, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, asterisk: !1, pattern: null });
  return No(e, t);
}
function tw(e, t, r) {
  for (var n = [], i = 0; i < e.length; i++) n.push(Kc(e[i], t, r).source);
  var a = new RegExp("(?:" + n.join("|") + ")", Ro(r));
  return No(a, t);
}
function rw(e, t, r) {
  return Vc(Io(e, r), t, r);
}
function Vc(e, t, r) {
  ea(t) || ((r = t || r), (t = [])), (r = r || {});
  for (var n = r.strict, i = r.end !== !1, a = "", o = 0; o < e.length; o++) {
    var f = e[o];
    if (typeof f == "string") a += Li(f);
    else {
      var c = Li(f.prefix),
        h = "(?:" + f.pattern + ")";
      t.push(f), f.repeat && (h += "(?:" + c + h + ")*"), f.optional ? (f.partial ? (h = c + "(" + h + ")?") : (h = "(?:" + c + "(" + h + "))?")) : (h = c + "(" + h + ")"), (a += h);
    }
  }
  var g = Li(r.delimiter || "/"),
    b = a.slice(-g.length) === g;
  return n || (a = (b ? a.slice(0, -g.length) : a) + "(?:" + g + "(?=$))?"), i ? (a += "$") : (a += n && b ? "" : "(?=" + g + "|$)"), No(new RegExp("^" + a, Ro(r)), t);
}
function Kc(e, t, r) {
  return ea(t) || ((r = t || r), (t = [])), (r = r || {}), e instanceof RegExp ? ew(e, t) : ea(e) ? tw(e, t, r) : rw(e, t, r);
}
dn.parse = W0;
dn.compile = G0;
dn.tokensToFunction = X0;
dn.tokensToRegExp = Y0;
var Qf = Object.create(null);
function Mi(e, t, r) {
  t = t || {};
  try {
    var n = Qf[e] || (Qf[e] = dn.compile(e));
    return typeof t.pathMatch == "string" && (t[0] = t.pathMatch), n(t, { pretty: !0 });
  } catch {
    return "";
  } finally {
    delete t[0];
  }
}
function Lo(e, t, r, n) {
  var i = typeof e == "string" ? { path: e } : e;
  if (i._normalized) return i;
  if (i.name) {
    i = kt({}, e);
    var a = i.params;
    return a && typeof a == "object" && (i.params = kt({}, a)), i;
  }
  if (!i.path && i.params && t) {
    (i = kt({}, i)), (i._normalized = !0);
    var o = kt(kt({}, t.params), i.params);
    if (t.name) (i.name = t.name), (i.params = o);
    else if (t.matched.length) {
      var f = t.matched[t.matched.length - 1].path;
      i.path = Mi(f, o, "path " + t.path);
    }
    return i;
  }
  var c = U0(i.path || ""),
    h = (t && t.path) || "/",
    g = c.path ? Xc(c.path, h, r || i.append) : h,
    b = $0(c.query, i.query, n && n.options.parseQuery),
    w = i.hash || c.hash;
  return w && w.charAt(0) !== "#" && (w = "#" + w), { _normalized: !0, path: g, query: b, hash: w };
}
var nw = [String, Object],
  iw = [String, Array],
  Zf = function () {},
  aw = {
    name: "RouterLink",
    props: {
      to: { type: nw, required: !0 },
      tag: { type: String, default: "a" },
      custom: Boolean,
      exact: Boolean,
      exactPath: Boolean,
      append: Boolean,
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      ariaCurrentValue: { type: String, default: "page" },
      event: { type: iw, default: "click" },
    },
    render: function (t) {
      var r = this,
        n = this.$router,
        i = this.$route,
        a = n.resolve(this.to, i, this.append),
        o = a.location,
        f = a.route,
        c = a.href,
        h = {},
        g = n.options.linkActiveClass,
        b = n.options.linkExactActiveClass,
        w = g == null ? "router-link-active" : g,
        A = b == null ? "router-link-exact-active" : b,
        S = this.activeClass == null ? w : this.activeClass,
        T = this.exactActiveClass == null ? A : this.exactActiveClass,
        L = f.redirectedFrom ? Zi(null, Lo(f.redirectedFrom), null, n) : f;
      (h[T] = Wc(i, L, this.exactPath)), (h[S] = this.exact || this.exactPath ? h[T] : F0(i, L));
      var N = h[T] ? this.ariaCurrentValue : null,
        U = function (O) {
          el(O) && (r.replace ? n.replace(o, Zf) : n.push(o, Zf));
        },
        H = { click: el };
      Array.isArray(this.event)
        ? this.event.forEach(function (O) {
            H[O] = U;
          })
        : (H[this.event] = U);
      var q = { class: h },
        ie = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({ href: c, route: f, navigate: U, isActive: h[S], isExactActive: h[T] });
      if (ie) {
        if (ie.length === 1) return ie[0];
        if (ie.length > 1 || !ie.length) return ie.length === 0 ? t() : t("span", {}, ie);
      }
      if (this.tag === "a") (q.on = H), (q.attrs = { href: c, "aria-current": N });
      else {
        var p = Jc(this.$slots.default);
        if (p) {
          p.isStatic = !1;
          var se = (p.data = kt({}, p.data));
          se.on = se.on || {};
          for (var J in se.on) {
            var we = se.on[J];
            J in H && (se.on[J] = Array.isArray(we) ? we : [we]);
          }
          for (var Y in H) Y in se.on ? se.on[Y].push(H[Y]) : (se.on[Y] = U);
          var ae = (p.data.attrs = kt({}, p.data.attrs));
          (ae.href = c), (ae["aria-current"] = N);
        } else q.on = H;
      }
      return t(this.tag, q, this.$slots.default);
    },
  };
function el(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      var t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Jc(e) {
  if (e) {
    for (var t, r = 0; r < e.length; r++) if (((t = e[r]), t.tag === "a" || (t.children && (t = Jc(t.children))))) return t;
  }
}
var ta;
function Fs(e) {
  if (!(Fs.installed && ta === e)) {
    (Fs.installed = !0), (ta = e);
    var t = function (i) {
        return i !== void 0;
      },
      r = function (i, a) {
        var o = i.$options._parentVnode;
        t(o) && t((o = o.data)) && t((o = o.registerRouteInstance)) && o(i, a);
      };
    e.mixin({
      beforeCreate: function () {
        t(this.$options.router) ? ((this._routerRoot = this), (this._router = this.$options.router), this._router.init(this), e.util.defineReactive(this, "_route", this._router.history.current)) : (this._routerRoot = (this.$parent && this.$parent._routerRoot) || this), r(this, this);
      },
      destroyed: function () {
        r(this);
      },
    }),
      Object.defineProperty(e.prototype, "$router", {
        get: function () {
          return this._routerRoot._router;
        },
      }),
      Object.defineProperty(e.prototype, "$route", {
        get: function () {
          return this._routerRoot._route;
        },
      }),
      e.component("RouterView", q0),
      e.component("RouterLink", aw);
    var n = e.config.optionMergeStrategies;
    n.beforeRouteEnter = n.beforeRouteLeave = n.beforeRouteUpdate = n.created;
  }
}
var Kn = typeof window != "undefined";
function Oi(e, t, r, n, i) {
  var a = t || [],
    o = r || Object.create(null),
    f = n || Object.create(null);
  e.forEach(function (g) {
    Bs(a, o, f, g, i);
  });
  for (var c = 0, h = a.length; c < h; c++) a[c] === "*" && (a.push(a.splice(c, 1)[0]), h--, c--);
  return { pathList: a, pathMap: o, nameMap: f };
}
function Bs(e, t, r, n, i, a) {
  var o = n.path,
    f = n.name,
    c = n.pathToRegexpOptions || {},
    h = ow(o, i, c.strict);
  typeof n.caseSensitive == "boolean" && (c.sensitive = n.caseSensitive);
  var g = {
    path: h,
    regex: sw(h, c),
    components: n.components || { default: n.component },
    alias: n.alias ? (typeof n.alias == "string" ? [n.alias] : n.alias) : [],
    instances: {},
    enteredCbs: {},
    name: f,
    parent: i,
    matchAs: a,
    redirect: n.redirect,
    beforeEnter: n.beforeEnter,
    meta: n.meta || {},
    props: n.props == null ? {} : n.components ? n.props : { default: n.props },
  };
  if (
    (n.children &&
      n.children.forEach(function (T) {
        var L = a ? tr(a + "/" + T.path) : void 0;
        Bs(e, t, r, T, g, L);
      }),
    t[g.path] || (e.push(g.path), (t[g.path] = g)),
    n.alias !== void 0)
  )
    for (var b = Array.isArray(n.alias) ? n.alias : [n.alias], w = 0; w < b.length; ++w) {
      var A = b[w],
        S = { path: A, children: n.children };
      Bs(e, t, r, S, i, g.path || "/");
    }
  f && (r[f] || (r[f] = g));
}
function sw(e, t) {
  var r = dn(e, [], t);
  return r;
}
function ow(e, t, r) {
  return r || (e = e.replace(/\/$/, "")), e[0] === "/" || t == null ? e : tr(t.path + "/" + e);
}
function uw(e, t) {
  var r = Oi(e),
    n = r.pathList,
    i = r.pathMap,
    a = r.nameMap;
  function o(A) {
    Oi(A, n, i, a);
  }
  function f(A, S) {
    var T = typeof A != "object" ? a[A] : void 0;
    Oi([S || A], n, i, a, T),
      T &&
        T.alias.length &&
        Oi(
          T.alias.map(function (L) {
            return { path: L, children: [S] };
          }),
          n,
          i,
          a,
          T
        );
  }
  function c() {
    return n.map(function (A) {
      return i[A];
    });
  }
  function h(A, S, T) {
    var L = Lo(A, S, !1, t),
      N = L.name;
    if (N) {
      var U = a[N];
      if (!U) return w(null, L);
      var H = U.regex.keys
        .filter(function (J) {
          return !J.optional;
        })
        .map(function (J) {
          return J.name;
        });
      if ((typeof L.params != "object" && (L.params = {}), S && typeof S.params == "object")) for (var q in S.params) !(q in L.params) && H.indexOf(q) > -1 && (L.params[q] = S.params[q]);
      return (L.path = Mi(U.path, L.params)), w(U, L, T);
    } else if (L.path) {
      L.params = {};
      for (var ie = 0; ie < n.length; ie++) {
        var p = n[ie],
          se = i[p];
        if (fw(se.regex, L.path, L.params)) return w(se, L, T);
      }
    }
    return w(null, L);
  }
  function g(A, S) {
    var T = A.redirect,
      L = typeof T == "function" ? T(Zi(A, S, null, t)) : T;
    if ((typeof L == "string" && (L = { path: L }), !L || typeof L != "object")) return w(null, S);
    var N = L,
      U = N.name,
      H = N.path,
      q = S.query,
      ie = S.hash,
      p = S.params;
    if (((q = N.hasOwnProperty("query") ? N.query : q), (ie = N.hasOwnProperty("hash") ? N.hash : ie), (p = N.hasOwnProperty("params") ? N.params : p), U)) return a[U], h({ _normalized: !0, name: U, query: q, hash: ie, params: p }, void 0, S);
    if (H) {
      var se = lw(H, A),
        J = Mi(se, p);
      return h({ _normalized: !0, path: J, query: q, hash: ie }, void 0, S);
    } else return w(null, S);
  }
  function b(A, S, T) {
    var L = Mi(T, S.params),
      N = h({ _normalized: !0, path: L });
    if (N) {
      var U = N.matched,
        H = U[U.length - 1];
      return (S.params = N.params), w(H, S);
    }
    return w(null, S);
  }
  function w(A, S, T) {
    return A && A.redirect ? g(A, T || S) : A && A.matchAs ? b(A, S, A.matchAs) : Zi(A, S, T, t);
  }
  return { match: h, addRoute: f, getRoutes: c, addRoutes: o };
}
function fw(e, t, r) {
  var n = t.match(e);
  if (n) {
    if (!r) return !0;
  } else return !1;
  for (var i = 1, a = n.length; i < a; ++i) {
    var o = e.keys[i - 1];
    o && (r[o.name || "pathMatch"] = typeof n[i] == "string" ? js(n[i]) : n[i]);
  }
  return !0;
}
function lw(e, t) {
  return Xc(e, t.parent ? t.parent.path : "/", !0);
}
var cw = Kn && window.performance && window.performance.now ? window.performance : Date;
function Qc() {
  return cw.now().toFixed(3);
}
var Zc = Qc();
function ga() {
  return Zc;
}
function ed(e) {
  return (Zc = e);
}
var td = Object.create(null);
function rd() {
  "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual");
  var e = window.location.protocol + "//" + window.location.host,
    t = window.location.href.replace(e, ""),
    r = kt({}, window.history.state);
  return (
    (r.key = ga()),
    window.history.replaceState(r, "", t),
    window.addEventListener("popstate", tl),
    function () {
      window.removeEventListener("popstate", tl);
    }
  );
}
function rr(e, t, r, n) {
  if (!!e.app) {
    var i = e.options.scrollBehavior;
    !i ||
      e.app.$nextTick(function () {
        var a = dw(),
          o = i.call(e, t, r, n ? a : null);
        !o ||
          (typeof o.then == "function"
            ? o
                .then(function (f) {
                  il(f, a);
                })
                .catch(function (f) {})
            : il(o, a));
      });
  }
}
function nd() {
  var e = ga();
  e && (td[e] = { x: window.pageXOffset, y: window.pageYOffset });
}
function tl(e) {
  nd(), e.state && e.state.key && ed(e.state.key);
}
function dw() {
  var e = ga();
  if (e) return td[e];
}
function pw(e, t) {
  var r = document.documentElement,
    n = r.getBoundingClientRect(),
    i = e.getBoundingClientRect();
  return { x: i.left - n.left - t.x, y: i.top - n.top - t.y };
}
function rl(e) {
  return on(e.x) || on(e.y);
}
function nl(e) {
  return { x: on(e.x) ? e.x : window.pageXOffset, y: on(e.y) ? e.y : window.pageYOffset };
}
function hw(e) {
  return { x: on(e.x) ? e.x : 0, y: on(e.y) ? e.y : 0 };
}
function on(e) {
  return typeof e == "number";
}
var vw = /^#\d/;
function il(e, t) {
  var r = typeof e == "object";
  if (r && typeof e.selector == "string") {
    var n = vw.test(e.selector) ? document.getElementById(e.selector.slice(1)) : document.querySelector(e.selector);
    if (n) {
      var i = e.offset && typeof e.offset == "object" ? e.offset : {};
      (i = hw(i)), (t = pw(n, i));
    } else rl(e) && (t = nl(e));
  } else r && rl(e) && (t = nl(e));
  t && ("scrollBehavior" in document.documentElement.style ? window.scrollTo({ left: t.x, top: t.y, behavior: e.behavior }) : window.scrollTo(t.x, t.y));
}
var nr =
  Kn &&
  (function () {
    var e = window.navigator.userAgent;
    return (e.indexOf("Android 2.") !== -1 || e.indexOf("Android 4.0") !== -1) && e.indexOf("Mobile Safari") !== -1 && e.indexOf("Chrome") === -1 && e.indexOf("Windows Phone") === -1 ? !1 : window.history && typeof window.history.pushState == "function";
  })();
function ra(e, t) {
  nd();
  var r = window.history;
  try {
    if (t) {
      var n = kt({}, r.state);
      (n.key = ga()), r.replaceState(n, "", e);
    } else r.pushState({ key: ed(Qc()) }, "", e);
  } catch {
    window.location[t ? "replace" : "assign"](e);
  }
}
function qs(e) {
  ra(e, !0);
}
function al(e, t, r) {
  var n = function (i) {
    i >= e.length
      ? r()
      : e[i]
      ? t(e[i], function () {
          n(i + 1);
        })
      : n(i + 1);
  };
  n(0);
}
var Mr = { redirected: 2, aborted: 4, cancelled: 8, duplicated: 16 };
function gw(e, t) {
  return ma(e, t, Mr.redirected, 'Redirected when going from "' + e.fullPath + '" to "' + _w(t) + '" via a navigation guard.');
}
function mw(e, t) {
  var r = ma(e, t, Mr.duplicated, 'Avoided redundant navigation to current location: "' + e.fullPath + '".');
  return (r.name = "NavigationDuplicated"), r;
}
function sl(e, t) {
  return ma(e, t, Mr.cancelled, 'Navigation cancelled from "' + e.fullPath + '" to "' + t.fullPath + '" with a new navigation.');
}
function yw(e, t) {
  return ma(e, t, Mr.aborted, 'Navigation aborted from "' + e.fullPath + '" to "' + t.fullPath + '" via a navigation guard.');
}
function ma(e, t, r, n) {
  var i = new Error(n);
  return (i._isRouter = !0), (i.from = e), (i.to = t), (i.type = r), i;
}
var bw = ["params", "query", "hash"];
function _w(e) {
  if (typeof e == "string") return e;
  if ("path" in e) return e.path;
  var t = {};
  return (
    bw.forEach(function (r) {
      r in e && (t[r] = e[r]);
    }),
    JSON.stringify(t, null, 2)
  );
}
function na(e) {
  return Object.prototype.toString.call(e).indexOf("Error") > -1;
}
function ya(e, t) {
  return na(e) && e._isRouter && (t == null || e.type === t);
}
function ww(e) {
  return function (t, r, n) {
    var i = !1,
      a = 0,
      o = null;
    id(e, function (f, c, h, g) {
      if (typeof f == "function" && f.cid === void 0) {
        (i = !0), a++;
        var b = ol(function (T) {
            Tw(T) && (T = T.default), (f.resolved = typeof T == "function" ? T : ta.extend(T)), (h.components[g] = T), a--, a <= 0 && n();
          }),
          w = ol(function (T) {
            var L = "Failed to resolve async component " + g + ": " + T;
            o || ((o = na(T) ? T : new Error(L)), n(o));
          }),
          A;
        try {
          A = f(b, w);
        } catch (T) {
          w(T);
        }
        if (A)
          if (typeof A.then == "function") A.then(b, w);
          else {
            var S = A.component;
            S && typeof S.then == "function" && S.then(b, w);
          }
      }
    }),
      i || n();
  };
}
function id(e, t) {
  return ad(
    e.map(function (r) {
      return Object.keys(r.components).map(function (n) {
        return t(r.components[n], r.instances[n], r, n);
      });
    })
  );
}
function ad(e) {
  return Array.prototype.concat.apply([], e);
}
var Sw = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol";
function Tw(e) {
  return e.__esModule || (Sw && e[Symbol.toStringTag] === "Module");
}
function ol(e) {
  var t = !1;
  return function () {
    for (var r = [], n = arguments.length; n--; ) r[n] = arguments[n];
    if (!t) return (t = !0), e.apply(this, r);
  };
}
var Lt = function (t, r) {
  (this.router = t), (this.base = Ew(r)), (this.current = ur), (this.pending = null), (this.ready = !1), (this.readyCbs = []), (this.readyErrorCbs = []), (this.errorCbs = []), (this.listeners = []);
};
Lt.prototype.listen = function (t) {
  this.cb = t;
};
Lt.prototype.onReady = function (t, r) {
  this.ready ? t() : (this.readyCbs.push(t), r && this.readyErrorCbs.push(r));
};
Lt.prototype.onError = function (t) {
  this.errorCbs.push(t);
};
Lt.prototype.transitionTo = function (t, r, n) {
  var i = this,
    a;
  try {
    a = this.router.match(t, this.current);
  } catch (f) {
    throw (
      (this.errorCbs.forEach(function (c) {
        c(f);
      }),
      f)
    );
  }
  var o = this.current;
  this.confirmTransition(
    a,
    function () {
      i.updateRoute(a),
        r && r(a),
        i.ensureURL(),
        i.router.afterHooks.forEach(function (f) {
          f && f(a, o);
        }),
        i.ready ||
          ((i.ready = !0),
          i.readyCbs.forEach(function (f) {
            f(a);
          }));
    },
    function (f) {
      n && n(f),
        f &&
          !i.ready &&
          (!ya(f, Mr.redirected) || o !== ur) &&
          ((i.ready = !0),
          i.readyErrorCbs.forEach(function (c) {
            c(f);
          }));
    }
  );
};
Lt.prototype.confirmTransition = function (t, r, n) {
  var i = this,
    a = this.current;
  this.pending = t;
  var o = function (T) {
      !ya(T) &&
        na(T) &&
        (i.errorCbs.length
          ? i.errorCbs.forEach(function (L) {
              L(T);
            })
          : console.error(T)),
        n && n(T);
    },
    f = t.matched.length - 1,
    c = a.matched.length - 1;
  if (Wc(t, a) && f === c && t.matched[f] === a.matched[c]) return this.ensureURL(), t.hash && rr(this.router, a, t, !1), o(mw(a, t));
  var h = xw(this.current.matched, t.matched),
    g = h.updated,
    b = h.deactivated,
    w = h.activated,
    A = [].concat(
      Ow(b),
      this.router.beforeHooks,
      Aw(g),
      w.map(function (T) {
        return T.beforeEnter;
      }),
      ww(w)
    ),
    S = function (T, L) {
      if (i.pending !== t) return o(sl(a, t));
      try {
        T(t, a, function (N) {
          N === !1 ? (i.ensureURL(!0), o(yw(a, t))) : na(N) ? (i.ensureURL(!0), o(N)) : typeof N == "string" || (typeof N == "object" && (typeof N.path == "string" || typeof N.name == "string")) ? (o(gw(a, t)), typeof N == "object" && N.replace ? i.replace(N) : i.push(N)) : L(N);
        });
      } catch (N) {
        o(N);
      }
    };
  al(A, S, function () {
    var T = kw(w),
      L = T.concat(i.router.resolveHooks);
    al(L, S, function () {
      if (i.pending !== t) return o(sl(a, t));
      (i.pending = null),
        r(t),
        i.router.app &&
          i.router.app.$nextTick(function () {
            Gc(t);
          });
    });
  });
};
Lt.prototype.updateRoute = function (t) {
  (this.current = t), this.cb && this.cb(t);
};
Lt.prototype.setupListeners = function () {};
Lt.prototype.teardown = function () {
  this.listeners.forEach(function (t) {
    t();
  }),
    (this.listeners = []),
    (this.current = ur),
    (this.pending = null);
};
function Ew(e) {
  if (!e)
    if (Kn) {
      var t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"), (e = e.replace(/^https?:\/\/[^\/]+/, ""));
    } else e = "/";
  return e.charAt(0) !== "/" && (e = "/" + e), e.replace(/\/$/, "");
}
function xw(e, t) {
  var r,
    n = Math.max(e.length, t.length);
  for (r = 0; r < n && e[r] === t[r]; r++);
  return { updated: t.slice(0, r), activated: t.slice(r), deactivated: e.slice(r) };
}
function Mo(e, t, r, n) {
  var i = id(e, function (a, o, f, c) {
    var h = Cw(a, t);
    if (h)
      return Array.isArray(h)
        ? h.map(function (g) {
            return r(g, o, f, c);
          })
        : r(h, o, f, c);
  });
  return ad(n ? i.reverse() : i);
}
function Cw(e, t) {
  return typeof e != "function" && (e = ta.extend(e)), e.options[t];
}
function Ow(e) {
  return Mo(e, "beforeRouteLeave", sd, !0);
}
function Aw(e) {
  return Mo(e, "beforeRouteUpdate", sd);
}
function sd(e, t) {
  if (t)
    return function () {
      return e.apply(t, arguments);
    };
}
function kw(e) {
  return Mo(e, "beforeRouteEnter", function (t, r, n, i) {
    return Pw(t, n, i);
  });
}
function Pw(e, t, r) {
  return function (i, a, o) {
    return e(i, a, function (f) {
      typeof f == "function" && (t.enteredCbs[r] || (t.enteredCbs[r] = []), t.enteredCbs[r].push(f)), o(f);
    });
  };
}
var od = (function (e) {
  function t(r, n) {
    e.call(this, r, n), (this._startLocation = In(this.base));
  }
  return (
    e && (t.__proto__ = e),
    (t.prototype = Object.create(e && e.prototype)),
    (t.prototype.constructor = t),
    (t.prototype.setupListeners = function () {
      var n = this;
      if (!(this.listeners.length > 0)) {
        var i = this.router,
          a = i.options.scrollBehavior,
          o = nr && a;
        o && this.listeners.push(rd());
        var f = function () {
          var c = n.current,
            h = In(n.base);
          (n.current === ur && h === n._startLocation) ||
            n.transitionTo(h, function (g) {
              o && rr(i, g, c, !0);
            });
        };
        window.addEventListener("popstate", f),
          this.listeners.push(function () {
            window.removeEventListener("popstate", f);
          });
      }
    }),
    (t.prototype.go = function (n) {
      window.history.go(n);
    }),
    (t.prototype.push = function (n, i, a) {
      var o = this,
        f = this,
        c = f.current;
      this.transitionTo(
        n,
        function (h) {
          ra(tr(o.base + h.fullPath)), rr(o.router, h, c, !1), i && i(h);
        },
        a
      );
    }),
    (t.prototype.replace = function (n, i, a) {
      var o = this,
        f = this,
        c = f.current;
      this.transitionTo(
        n,
        function (h) {
          qs(tr(o.base + h.fullPath)), rr(o.router, h, c, !1), i && i(h);
        },
        a
      );
    }),
    (t.prototype.ensureURL = function (n) {
      if (In(this.base) !== this.current.fullPath) {
        var i = tr(this.base + this.current.fullPath);
        n ? ra(i) : qs(i);
      }
    }),
    (t.prototype.getCurrentLocation = function () {
      return In(this.base);
    }),
    t
  );
})(Lt);
function In(e) {
  var t = window.location.pathname,
    r = t.toLowerCase(),
    n = e.toLowerCase();
  return e && (r === n || r.indexOf(tr(n + "/")) === 0) && (t = t.slice(e.length)), (t || "/") + window.location.search + window.location.hash;
}
var ud = (function (e) {
  function t(r, n, i) {
    e.call(this, r, n), !(i && Iw(this.base)) && ul();
  }
  return (
    e && (t.__proto__ = e),
    (t.prototype = Object.create(e && e.prototype)),
    (t.prototype.constructor = t),
    (t.prototype.setupListeners = function () {
      var n = this;
      if (!(this.listeners.length > 0)) {
        var i = this.router,
          a = i.options.scrollBehavior,
          o = nr && a;
        o && this.listeners.push(rd());
        var f = function () {
            var h = n.current;
            !ul() ||
              n.transitionTo($i(), function (g) {
                o && rr(n.router, g, h, !0), nr || Di(g.fullPath);
              });
          },
          c = nr ? "popstate" : "hashchange";
        window.addEventListener(c, f),
          this.listeners.push(function () {
            window.removeEventListener(c, f);
          });
      }
    }),
    (t.prototype.push = function (n, i, a) {
      var o = this,
        f = this,
        c = f.current;
      this.transitionTo(
        n,
        function (h) {
          fl(h.fullPath), rr(o.router, h, c, !1), i && i(h);
        },
        a
      );
    }),
    (t.prototype.replace = function (n, i, a) {
      var o = this,
        f = this,
        c = f.current;
      this.transitionTo(
        n,
        function (h) {
          Di(h.fullPath), rr(o.router, h, c, !1), i && i(h);
        },
        a
      );
    }),
    (t.prototype.go = function (n) {
      window.history.go(n);
    }),
    (t.prototype.ensureURL = function (n) {
      var i = this.current.fullPath;
      $i() !== i && (n ? fl(i) : Di(i));
    }),
    (t.prototype.getCurrentLocation = function () {
      return $i();
    }),
    t
  );
})(Lt);
function Iw(e) {
  var t = In(e);
  if (!/^\/#/.test(t)) return window.location.replace(tr(e + "/#" + t)), !0;
}
function ul() {
  var e = $i();
  return e.charAt(0) === "/" ? !0 : (Di("/" + e), !1);
}
function $i() {
  var e = window.location.href,
    t = e.indexOf("#");
  return t < 0 ? "" : ((e = e.slice(t + 1)), e);
}
function zs(e) {
  var t = window.location.href,
    r = t.indexOf("#"),
    n = r >= 0 ? t.slice(0, r) : t;
  return n + "#" + e;
}
function fl(e) {
  nr ? ra(zs(e)) : (window.location.hash = e);
}
function Di(e) {
  nr ? qs(zs(e)) : window.location.replace(zs(e));
}
var Nw = (function (e) {
    function t(r, n) {
      e.call(this, r, n), (this.stack = []), (this.index = -1);
    }
    return (
      e && (t.__proto__ = e),
      (t.prototype = Object.create(e && e.prototype)),
      (t.prototype.constructor = t),
      (t.prototype.push = function (n, i, a) {
        var o = this;
        this.transitionTo(
          n,
          function (f) {
            (o.stack = o.stack.slice(0, o.index + 1).concat(f)), o.index++, i && i(f);
          },
          a
        );
      }),
      (t.prototype.replace = function (n, i, a) {
        var o = this;
        this.transitionTo(
          n,
          function (f) {
            (o.stack = o.stack.slice(0, o.index).concat(f)), i && i(f);
          },
          a
        );
      }),
      (t.prototype.go = function (n) {
        var i = this,
          a = this.index + n;
        if (!(a < 0 || a >= this.stack.length)) {
          var o = this.stack[a];
          this.confirmTransition(
            o,
            function () {
              var f = i.current;
              (i.index = a),
                i.updateRoute(o),
                i.router.afterHooks.forEach(function (c) {
                  c && c(o, f);
                });
            },
            function (f) {
              ya(f, Mr.duplicated) && (i.index = a);
            }
          );
        }
      }),
      (t.prototype.getCurrentLocation = function () {
        var n = this.stack[this.stack.length - 1];
        return n ? n.fullPath : "/";
      }),
      (t.prototype.ensureURL = function () {}),
      t
    );
  })(Lt),
  Le = function (t) {
    t === void 0 && (t = {}), (this.app = null), (this.apps = []), (this.options = t), (this.beforeHooks = []), (this.resolveHooks = []), (this.afterHooks = []), (this.matcher = uw(t.routes || [], this));
    var r = t.mode || "hash";
    switch (((this.fallback = r === "history" && !nr && t.fallback !== !1), this.fallback && (r = "hash"), Kn || (r = "abstract"), (this.mode = r), r)) {
      case "history":
        this.history = new od(this, t.base);
        break;
      case "hash":
        this.history = new ud(this, t.base, this.fallback);
        break;
      case "abstract":
        this.history = new Nw(this, t.base);
        break;
    }
  },
  fd = { currentRoute: { configurable: !0 } };
Le.prototype.match = function (t, r, n) {
  return this.matcher.match(t, r, n);
};
fd.currentRoute.get = function () {
  return this.history && this.history.current;
};
Le.prototype.init = function (t) {
  var r = this;
  if (
    (this.apps.push(t),
    t.$once("hook:destroyed", function () {
      var o = r.apps.indexOf(t);
      o > -1 && r.apps.splice(o, 1), r.app === t && (r.app = r.apps[0] || null), r.app || r.history.teardown();
    }),
    !this.app)
  ) {
    this.app = t;
    var n = this.history;
    if (n instanceof od || n instanceof ud) {
      var i = function (o) {
          var f = n.current,
            c = r.options.scrollBehavior,
            h = nr && c;
          h && "fullPath" in o && rr(r, o, f, !1);
        },
        a = function (o) {
          n.setupListeners(), i(o);
        };
      n.transitionTo(n.getCurrentLocation(), a, a);
    }
    n.listen(function (o) {
      r.apps.forEach(function (f) {
        f._route = o;
      });
    });
  }
};
Le.prototype.beforeEach = function (t) {
  return $o(this.beforeHooks, t);
};
Le.prototype.beforeResolve = function (t) {
  return $o(this.resolveHooks, t);
};
Le.prototype.afterEach = function (t) {
  return $o(this.afterHooks, t);
};
Le.prototype.onReady = function (t, r) {
  this.history.onReady(t, r);
};
Le.prototype.onError = function (t) {
  this.history.onError(t);
};
Le.prototype.push = function (t, r, n) {
  var i = this;
  if (!r && !n && typeof Promise != "undefined")
    return new Promise(function (a, o) {
      i.history.push(t, a, o);
    });
  this.history.push(t, r, n);
};
Le.prototype.replace = function (t, r, n) {
  var i = this;
  if (!r && !n && typeof Promise != "undefined")
    return new Promise(function (a, o) {
      i.history.replace(t, a, o);
    });
  this.history.replace(t, r, n);
};
Le.prototype.go = function (t) {
  this.history.go(t);
};
Le.prototype.back = function () {
  this.go(-1);
};
Le.prototype.forward = function () {
  this.go(1);
};
Le.prototype.getMatchedComponents = function (t) {
  var r = t ? (t.matched ? t : this.resolve(t).route) : this.currentRoute;
  return r
    ? [].concat.apply(
        [],
        r.matched.map(function (n) {
          return Object.keys(n.components).map(function (i) {
            return n.components[i];
          });
        })
      )
    : [];
};
Le.prototype.resolve = function (t, r, n) {
  r = r || this.history.current;
  var i = Lo(t, r, n, this),
    a = this.match(i, r),
    o = a.redirectedFrom || a.fullPath,
    f = this.history.base,
    c = Rw(f, o, this.mode);
  return { location: i, route: a, href: c, normalizedTo: i, resolved: a };
};
Le.prototype.getRoutes = function () {
  return this.matcher.getRoutes();
};
Le.prototype.addRoute = function (t, r) {
  this.matcher.addRoute(t, r), this.history.current !== ur && this.history.transitionTo(this.history.getCurrentLocation());
};
Le.prototype.addRoutes = function (t) {
  this.matcher.addRoutes(t), this.history.current !== ur && this.history.transitionTo(this.history.getCurrentLocation());
};
Object.defineProperties(Le.prototype, fd);
function $o(e, t) {
  return (
    e.push(t),
    function () {
      var r = e.indexOf(t);
      r > -1 && e.splice(r, 1);
    }
  );
}
function Rw(e, t, r) {
  var n = r === "hash" ? "#" + t : t;
  return e ? tr(e + "/" + n) : n;
}
Le.install = Fs;
Le.version = "3.5.3";
Le.isNavigationFailure = ya;
Le.NavigationFailureType = Mr;
Le.START_LOCATION = ur;
Kn && window.Vue && window.Vue.use(Le);
var Fw = Le,
  ld = { exports: {} };
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */ (function (e) {
  (function (t, r) {
    e.exports = t.document
      ? r(t, !0)
      : function (n) {
          if (!n.document) throw new Error("jQuery requires a window with a document");
          return r(n);
        };
  })(typeof window != "undefined" ? window : Dc, function (t, r) {
    var n = [],
      i = Object.getPrototypeOf,
      a = n.slice,
      o = n.flat
        ? function (s) {
            return n.flat.call(s);
          }
        : function (s) {
            return n.concat.apply([], s);
          },
      f = n.push,
      c = n.indexOf,
      h = {},
      g = h.toString,
      b = h.hasOwnProperty,
      w = b.toString,
      A = w.call(Object),
      S = {},
      T = function (u) {
        return typeof u == "function" && typeof u.nodeType != "number" && typeof u.item != "function";
      },
      L = function (u) {
        return u != null && u === u.window;
      },
      N = t.document,
      U = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function H(s, u, l) {
      l = l || N;
      var d,
        v,
        m = l.createElement("script");
      if (((m.text = s), u)) for (d in U) (v = u[d] || (u.getAttribute && u.getAttribute(d))), v && m.setAttribute(d, v);
      l.head.appendChild(m).parentNode.removeChild(m);
    }
    function q(s) {
      return s == null ? s + "" : typeof s == "object" || typeof s == "function" ? h[g.call(s)] || "object" : typeof s;
    }
    var ie = "3.6.0",
      p = function (s, u) {
        return new p.fn.init(s, u);
      };
    (p.fn = p.prototype =
      {
        jquery: ie,
        constructor: p,
        length: 0,
        toArray: function () {
          return a.call(this);
        },
        get: function (s) {
          return s == null ? a.call(this) : s < 0 ? this[s + this.length] : this[s];
        },
        pushStack: function (s) {
          var u = p.merge(this.constructor(), s);
          return (u.prevObject = this), u;
        },
        each: function (s) {
          return p.each(this, s);
        },
        map: function (s) {
          return this.pushStack(
            p.map(this, function (u, l) {
              return s.call(u, l, u);
            })
          );
        },
        slice: function () {
          return this.pushStack(a.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            p.grep(this, function (s, u) {
              return (u + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            p.grep(this, function (s, u) {
              return u % 2;
            })
          );
        },
        eq: function (s) {
          var u = this.length,
            l = +s + (s < 0 ? u : 0);
          return this.pushStack(l >= 0 && l < u ? [this[l]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: f,
        sort: n.sort,
        splice: n.splice,
      }),
      (p.extend = p.fn.extend =
        function () {
          var s,
            u,
            l,
            d,
            v,
            m,
            y = arguments[0] || {},
            x = 1,
            C = arguments.length,
            P = !1;
          for (typeof y == "boolean" && ((P = y), (y = arguments[x] || {}), x++), typeof y != "object" && !T(y) && (y = {}), x === C && ((y = this), x--); x < C; x++)
            if ((s = arguments[x]) != null)
              for (u in s) (d = s[u]), !(u === "__proto__" || y === d) && (P && d && (p.isPlainObject(d) || (v = Array.isArray(d))) ? ((l = y[u]), v && !Array.isArray(l) ? (m = []) : !v && !p.isPlainObject(l) ? (m = {}) : (m = l), (v = !1), (y[u] = p.extend(P, m, d))) : d !== void 0 && (y[u] = d));
          return y;
        }),
      p.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (s) {
          throw new Error(s);
        },
        noop: function () {},
        isPlainObject: function (s) {
          var u, l;
          return !s || g.call(s) !== "[object Object]" ? !1 : ((u = i(s)), u ? ((l = b.call(u, "constructor") && u.constructor), typeof l == "function" && w.call(l) === A) : !0);
        },
        isEmptyObject: function (s) {
          var u;
          for (u in s) return !1;
          return !0;
        },
        globalEval: function (s, u, l) {
          H(s, { nonce: u && u.nonce }, l);
        },
        each: function (s, u) {
          var l,
            d = 0;
          if (se(s)) for (l = s.length; d < l && u.call(s[d], d, s[d]) !== !1; d++);
          else for (d in s) if (u.call(s[d], d, s[d]) === !1) break;
          return s;
        },
        makeArray: function (s, u) {
          var l = u || [];
          return s != null && (se(Object(s)) ? p.merge(l, typeof s == "string" ? [s] : s) : f.call(l, s)), l;
        },
        inArray: function (s, u, l) {
          return u == null ? -1 : c.call(u, s, l);
        },
        merge: function (s, u) {
          for (var l = +u.length, d = 0, v = s.length; d < l; d++) s[v++] = u[d];
          return (s.length = v), s;
        },
        grep: function (s, u, l) {
          for (var d, v = [], m = 0, y = s.length, x = !l; m < y; m++) (d = !u(s[m], m)), d !== x && v.push(s[m]);
          return v;
        },
        map: function (s, u, l) {
          var d,
            v,
            m = 0,
            y = [];
          if (se(s)) for (d = s.length; m < d; m++) (v = u(s[m], m, l)), v != null && y.push(v);
          else for (m in s) (v = u(s[m], m, l)), v != null && y.push(v);
          return o(y);
        },
        guid: 1,
        support: S,
      }),
      typeof Symbol == "function" && (p.fn[Symbol.iterator] = n[Symbol.iterator]),
      p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (s, u) {
        h["[object " + u + "]"] = u.toLowerCase();
      });
    function se(s) {
      var u = !!s && "length" in s && s.length,
        l = q(s);
      return T(s) || L(s) ? !1 : l === "array" || u === 0 || (typeof u == "number" && u > 0 && u - 1 in s);
    }
    var J = (function (s) {
      var u,
        l,
        d,
        v,
        m,
        y,
        x,
        C,
        P,
        $,
        G,
        M,
        F,
        oe,
        Ee,
        ue,
        We,
        qe,
        lt,
        Pe = "sizzle" + 1 * new Date(),
        Se = s.document,
        at = 0,
        Oe = 0,
        je = ai(),
        wn = ai(),
        ri = ai(),
        ct = ai(),
        dr = function (_, E) {
          return _ === E && (G = !0), 0;
        },
        pr = {}.hasOwnProperty,
        st = [],
        Xt = st.pop,
        wt = st.push,
        Yt = st.push,
        vu = st.slice,
        hr = function (_, E) {
          for (var k = 0, B = _.length; k < B; k++) if (_[k] === E) return k;
          return -1;
        },
        Na = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ke = "[\\x20\\t\\r\\n\\f]",
        vr = "(?:\\\\[\\da-fA-F]{1,6}" + ke + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        gu = "\\[" + ke + "*(" + vr + ")(?:" + ke + "*([*^$|!~]?=)" + ke + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + vr + "))|)" + ke + "*\\]",
        Ra = ":(" + vr + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + gu + ")*)|.*)\\)|)",
        tp = new RegExp(ke + "+", "g"),
        ni = new RegExp("^" + ke + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ke + "+$", "g"),
        rp = new RegExp("^" + ke + "*," + ke + "*"),
        mu = new RegExp("^" + ke + "*([>+~]|" + ke + ")" + ke + "*"),
        np = new RegExp(ke + "|>"),
        ip = new RegExp(Ra),
        ap = new RegExp("^" + vr + "$"),
        ii = {
          ID: new RegExp("^#(" + vr + ")"),
          CLASS: new RegExp("^\\.(" + vr + ")"),
          TAG: new RegExp("^(" + vr + "|[*])"),
          ATTR: new RegExp("^" + gu),
          PSEUDO: new RegExp("^" + Ra),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ke + "*(even|odd|(([+-]|)(\\d*)n|)" + ke + "*(?:([+-]|)" + ke + "*(\\d+)|))" + ke + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + Na + ")$", "i"),
          needsContext: new RegExp("^" + ke + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ke + "*((?:-\\d)?\\d*)" + ke + "*\\)|)(?=[^-]|$)", "i"),
        },
        sp = /HTML$/i,
        op = /^(?:input|select|textarea|button)$/i,
        up = /^h\d$/i,
        Sn = /^[^{]+\{\s*\[native \w/,
        fp = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        La = /[+~]/,
        qt = new RegExp("\\\\[\\da-fA-F]{1,6}" + ke + "?|\\\\([^\\r\\n\\f])", "g"),
        zt = function (_, E) {
          var k = "0x" + _.slice(1) - 65536;
          return E || (k < 0 ? String.fromCharCode(k + 65536) : String.fromCharCode((k >> 10) | 55296, (k & 1023) | 56320));
        },
        yu = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        bu = function (_, E) {
          return E ? (_ === "\0" ? "\uFFFD" : _.slice(0, -1) + "\\" + _.charCodeAt(_.length - 1).toString(16) + " ") : "\\" + _;
        },
        _u = function () {
          M();
        },
        lp = oi(
          function (_) {
            return _.disabled === !0 && _.nodeName.toLowerCase() === "fieldset";
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        Yt.apply((st = vu.call(Se.childNodes)), Se.childNodes), st[Se.childNodes.length].nodeType;
      } catch {
        Yt = {
          apply: st.length
            ? function (E, k) {
                wt.apply(E, vu.call(k));
              }
            : function (E, k) {
                for (var B = E.length, I = 0; (E[B++] = k[I++]); );
                E.length = B - 1;
              },
        };
      }
      function Ie(_, E, k, B) {
        var I,
          W,
          X,
          Q,
          te,
          he,
          pe,
          ye = E && E.ownerDocument,
          Ce = E ? E.nodeType : 9;
        if (((k = k || []), typeof _ != "string" || !_ || (Ce !== 1 && Ce !== 9 && Ce !== 11))) return k;
        if (!B && (M(E), (E = E || F), Ee)) {
          if (Ce !== 11 && (te = fp.exec(_)))
            if ((I = te[1])) {
              if (Ce === 9)
                if ((X = E.getElementById(I))) {
                  if (X.id === I) return k.push(X), k;
                } else return k;
              else if (ye && (X = ye.getElementById(I)) && lt(E, X) && X.id === I) return k.push(X), k;
            } else {
              if (te[2]) return Yt.apply(k, E.getElementsByTagName(_)), k;
              if ((I = te[3]) && l.getElementsByClassName && E.getElementsByClassName) return Yt.apply(k, E.getElementsByClassName(I)), k;
            }
          if (l.qsa && !ct[_ + " "] && (!ue || !ue.test(_)) && (Ce !== 1 || E.nodeName.toLowerCase() !== "object")) {
            if (((pe = _), (ye = E), Ce === 1 && (np.test(_) || mu.test(_)))) {
              for (ye = (La.test(_) && $a(E.parentNode)) || E, (ye !== E || !l.scope) && ((Q = E.getAttribute("id")) ? (Q = Q.replace(yu, bu)) : E.setAttribute("id", (Q = Pe))), he = y(_), W = he.length; W--; ) he[W] = (Q ? "#" + Q : ":scope") + " " + si(he[W]);
              pe = he.join(",");
            }
            try {
              return Yt.apply(k, ye.querySelectorAll(pe)), k;
            } catch {
              ct(_, !0);
            } finally {
              Q === Pe && E.removeAttribute("id");
            }
          }
        }
        return C(_.replace(ni, "$1"), E, k, B);
      }
      function ai() {
        var _ = [];
        function E(k, B) {
          return _.push(k + " ") > d.cacheLength && delete E[_.shift()], (E[k + " "] = B);
        }
        return E;
      }
      function Et(_) {
        return (_[Pe] = !0), _;
      }
      function xt(_) {
        var E = F.createElement("fieldset");
        try {
          return !!_(E);
        } catch {
          return !1;
        } finally {
          E.parentNode && E.parentNode.removeChild(E), (E = null);
        }
      }
      function Ma(_, E) {
        for (var k = _.split("|"), B = k.length; B--; ) d.attrHandle[k[B]] = E;
      }
      function wu(_, E) {
        var k = E && _,
          B = k && _.nodeType === 1 && E.nodeType === 1 && _.sourceIndex - E.sourceIndex;
        if (B) return B;
        if (k) {
          for (; (k = k.nextSibling); ) if (k === E) return -1;
        }
        return _ ? 1 : -1;
      }
      function cp(_) {
        return function (E) {
          var k = E.nodeName.toLowerCase();
          return k === "input" && E.type === _;
        };
      }
      function dp(_) {
        return function (E) {
          var k = E.nodeName.toLowerCase();
          return (k === "input" || k === "button") && E.type === _;
        };
      }
      function Su(_) {
        return function (E) {
          return "form" in E ? (E.parentNode && E.disabled === !1 ? ("label" in E ? ("label" in E.parentNode ? E.parentNode.disabled === _ : E.disabled === _) : E.isDisabled === _ || (E.isDisabled !== !_ && lp(E) === _)) : E.disabled === _) : "label" in E ? E.disabled === _ : !1;
        };
      }
      function gr(_) {
        return Et(function (E) {
          return (
            (E = +E),
            Et(function (k, B) {
              for (var I, W = _([], k.length, E), X = W.length; X--; ) k[(I = W[X])] && (k[I] = !(B[I] = k[I]));
            })
          );
        });
      }
      function $a(_) {
        return _ && typeof _.getElementsByTagName != "undefined" && _;
      }
      (l = Ie.support = {}),
        (m = Ie.isXML =
          function (_) {
            var E = _ && _.namespaceURI,
              k = _ && (_.ownerDocument || _).documentElement;
            return !sp.test(E || (k && k.nodeName) || "HTML");
          }),
        (M = Ie.setDocument =
          function (_) {
            var E,
              k,
              B = _ ? _.ownerDocument || _ : Se;
            return (
              B == F ||
                B.nodeType !== 9 ||
                !B.documentElement ||
                ((F = B),
                (oe = F.documentElement),
                (Ee = !m(F)),
                Se != F && (k = F.defaultView) && k.top !== k && (k.addEventListener ? k.addEventListener("unload", _u, !1) : k.attachEvent && k.attachEvent("onunload", _u)),
                (l.scope = xt(function (I) {
                  return oe.appendChild(I).appendChild(F.createElement("div")), typeof I.querySelectorAll != "undefined" && !I.querySelectorAll(":scope fieldset div").length;
                })),
                (l.attributes = xt(function (I) {
                  return (I.className = "i"), !I.getAttribute("className");
                })),
                (l.getElementsByTagName = xt(function (I) {
                  return I.appendChild(F.createComment("")), !I.getElementsByTagName("*").length;
                })),
                (l.getElementsByClassName = Sn.test(F.getElementsByClassName)),
                (l.getById = xt(function (I) {
                  return (oe.appendChild(I).id = Pe), !F.getElementsByName || !F.getElementsByName(Pe).length;
                })),
                l.getById
                  ? ((d.filter.ID = function (I) {
                      var W = I.replace(qt, zt);
                      return function (X) {
                        return X.getAttribute("id") === W;
                      };
                    }),
                    (d.find.ID = function (I, W) {
                      if (typeof W.getElementById != "undefined" && Ee) {
                        var X = W.getElementById(I);
                        return X ? [X] : [];
                      }
                    }))
                  : ((d.filter.ID = function (I) {
                      var W = I.replace(qt, zt);
                      return function (X) {
                        var Q = typeof X.getAttributeNode != "undefined" && X.getAttributeNode("id");
                        return Q && Q.value === W;
                      };
                    }),
                    (d.find.ID = function (I, W) {
                      if (typeof W.getElementById != "undefined" && Ee) {
                        var X,
                          Q,
                          te,
                          he = W.getElementById(I);
                        if (he) {
                          if (((X = he.getAttributeNode("id")), X && X.value === I)) return [he];
                          for (te = W.getElementsByName(I), Q = 0; (he = te[Q++]); ) if (((X = he.getAttributeNode("id")), X && X.value === I)) return [he];
                        }
                        return [];
                      }
                    })),
                (d.find.TAG = l.getElementsByTagName
                  ? function (I, W) {
                      if (typeof W.getElementsByTagName != "undefined") return W.getElementsByTagName(I);
                      if (l.qsa) return W.querySelectorAll(I);
                    }
                  : function (I, W) {
                      var X,
                        Q = [],
                        te = 0,
                        he = W.getElementsByTagName(I);
                      if (I === "*") {
                        for (; (X = he[te++]); ) X.nodeType === 1 && Q.push(X);
                        return Q;
                      }
                      return he;
                    }),
                (d.find.CLASS =
                  l.getElementsByClassName &&
                  function (I, W) {
                    if (typeof W.getElementsByClassName != "undefined" && Ee) return W.getElementsByClassName(I);
                  }),
                (We = []),
                (ue = []),
                (l.qsa = Sn.test(F.querySelectorAll)) &&
                  (xt(function (I) {
                    var W;
                    (oe.appendChild(I).innerHTML = "<a id='" + Pe + "'></a><select id='" + Pe + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      I.querySelectorAll("[msallowcapture^='']").length && ue.push("[*^$]=" + ke + `*(?:''|"")`),
                      I.querySelectorAll("[selected]").length || ue.push("\\[" + ke + "*(?:value|" + Na + ")"),
                      I.querySelectorAll("[id~=" + Pe + "-]").length || ue.push("~="),
                      (W = F.createElement("input")),
                      W.setAttribute("name", ""),
                      I.appendChild(W),
                      I.querySelectorAll("[name='']").length || ue.push("\\[" + ke + "*name" + ke + "*=" + ke + `*(?:''|"")`),
                      I.querySelectorAll(":checked").length || ue.push(":checked"),
                      I.querySelectorAll("a#" + Pe + "+*").length || ue.push(".#.+[+~]"),
                      I.querySelectorAll("\\\f"),
                      ue.push("[\\r\\n\\f]");
                  }),
                  xt(function (I) {
                    I.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var W = F.createElement("input");
                    W.setAttribute("type", "hidden"),
                      I.appendChild(W).setAttribute("name", "D"),
                      I.querySelectorAll("[name=d]").length && ue.push("name" + ke + "*[*^$|!~]?="),
                      I.querySelectorAll(":enabled").length !== 2 && ue.push(":enabled", ":disabled"),
                      (oe.appendChild(I).disabled = !0),
                      I.querySelectorAll(":disabled").length !== 2 && ue.push(":enabled", ":disabled"),
                      I.querySelectorAll("*,:x"),
                      ue.push(",.*:");
                  })),
                (l.matchesSelector = Sn.test((qe = oe.matches || oe.webkitMatchesSelector || oe.mozMatchesSelector || oe.oMatchesSelector || oe.msMatchesSelector))) &&
                  xt(function (I) {
                    (l.disconnectedMatch = qe.call(I, "*")), qe.call(I, "[s!='']:x"), We.push("!=", Ra);
                  }),
                (ue = ue.length && new RegExp(ue.join("|"))),
                (We = We.length && new RegExp(We.join("|"))),
                (E = Sn.test(oe.compareDocumentPosition)),
                (lt =
                  E || Sn.test(oe.contains)
                    ? function (I, W) {
                        var X = I.nodeType === 9 ? I.documentElement : I,
                          Q = W && W.parentNode;
                        return I === Q || !!(Q && Q.nodeType === 1 && (X.contains ? X.contains(Q) : I.compareDocumentPosition && I.compareDocumentPosition(Q) & 16));
                      }
                    : function (I, W) {
                        if (W) {
                          for (; (W = W.parentNode); ) if (W === I) return !0;
                        }
                        return !1;
                      }),
                (dr = E
                  ? function (I, W) {
                      if (I === W) return (G = !0), 0;
                      var X = !I.compareDocumentPosition - !W.compareDocumentPosition;
                      return (
                        X ||
                        ((X = (I.ownerDocument || I) == (W.ownerDocument || W) ? I.compareDocumentPosition(W) : 1),
                        X & 1 || (!l.sortDetached && W.compareDocumentPosition(I) === X) ? (I == F || (I.ownerDocument == Se && lt(Se, I)) ? -1 : W == F || (W.ownerDocument == Se && lt(Se, W)) ? 1 : $ ? hr($, I) - hr($, W) : 0) : X & 4 ? -1 : 1)
                      );
                    }
                  : function (I, W) {
                      if (I === W) return (G = !0), 0;
                      var X,
                        Q = 0,
                        te = I.parentNode,
                        he = W.parentNode,
                        pe = [I],
                        ye = [W];
                      if (!te || !he) return I == F ? -1 : W == F ? 1 : te ? -1 : he ? 1 : $ ? hr($, I) - hr($, W) : 0;
                      if (te === he) return wu(I, W);
                      for (X = I; (X = X.parentNode); ) pe.unshift(X);
                      for (X = W; (X = X.parentNode); ) ye.unshift(X);
                      for (; pe[Q] === ye[Q]; ) Q++;
                      return Q ? wu(pe[Q], ye[Q]) : pe[Q] == Se ? -1 : ye[Q] == Se ? 1 : 0;
                    })),
              F
            );
          }),
        (Ie.matches = function (_, E) {
          return Ie(_, null, null, E);
        }),
        (Ie.matchesSelector = function (_, E) {
          if ((M(_), l.matchesSelector && Ee && !ct[E + " "] && (!We || !We.test(E)) && (!ue || !ue.test(E))))
            try {
              var k = qe.call(_, E);
              if (k || l.disconnectedMatch || (_.document && _.document.nodeType !== 11)) return k;
            } catch {
              ct(E, !0);
            }
          return Ie(E, F, null, [_]).length > 0;
        }),
        (Ie.contains = function (_, E) {
          return (_.ownerDocument || _) != F && M(_), lt(_, E);
        }),
        (Ie.attr = function (_, E) {
          (_.ownerDocument || _) != F && M(_);
          var k = d.attrHandle[E.toLowerCase()],
            B = k && pr.call(d.attrHandle, E.toLowerCase()) ? k(_, E, !Ee) : void 0;
          return B !== void 0 ? B : l.attributes || !Ee ? _.getAttribute(E) : (B = _.getAttributeNode(E)) && B.specified ? B.value : null;
        }),
        (Ie.escape = function (_) {
          return (_ + "").replace(yu, bu);
        }),
        (Ie.error = function (_) {
          throw new Error("Syntax error, unrecognized expression: " + _);
        }),
        (Ie.uniqueSort = function (_) {
          var E,
            k = [],
            B = 0,
            I = 0;
          if (((G = !l.detectDuplicates), ($ = !l.sortStable && _.slice(0)), _.sort(dr), G)) {
            for (; (E = _[I++]); ) E === _[I] && (B = k.push(I));
            for (; B--; ) _.splice(k[B], 1);
          }
          return ($ = null), _;
        }),
        (v = Ie.getText =
          function (_) {
            var E,
              k = "",
              B = 0,
              I = _.nodeType;
            if (I) {
              if (I === 1 || I === 9 || I === 11) {
                if (typeof _.textContent == "string") return _.textContent;
                for (_ = _.firstChild; _; _ = _.nextSibling) k += v(_);
              } else if (I === 3 || I === 4) return _.nodeValue;
            } else for (; (E = _[B++]); ) k += v(E);
            return k;
          }),
        (d = Ie.selectors =
          {
            cacheLength: 50,
            createPseudo: Et,
            match: ii,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
              ATTR: function (_) {
                return (_[1] = _[1].replace(qt, zt)), (_[3] = (_[3] || _[4] || _[5] || "").replace(qt, zt)), _[2] === "~=" && (_[3] = " " + _[3] + " "), _.slice(0, 4);
              },
              CHILD: function (_) {
                return (_[1] = _[1].toLowerCase()), _[1].slice(0, 3) === "nth" ? (_[3] || Ie.error(_[0]), (_[4] = +(_[4] ? _[5] + (_[6] || 1) : 2 * (_[3] === "even" || _[3] === "odd"))), (_[5] = +(_[7] + _[8] || _[3] === "odd"))) : _[3] && Ie.error(_[0]), _;
              },
              PSEUDO: function (_) {
                var E,
                  k = !_[6] && _[2];
                return ii.CHILD.test(_[0]) ? null : (_[3] ? (_[2] = _[4] || _[5] || "") : k && ip.test(k) && (E = y(k, !0)) && (E = k.indexOf(")", k.length - E) - k.length) && ((_[0] = _[0].slice(0, E)), (_[2] = k.slice(0, E))), _.slice(0, 3));
              },
            },
            filter: {
              TAG: function (_) {
                var E = _.replace(qt, zt).toLowerCase();
                return _ === "*"
                  ? function () {
                      return !0;
                    }
                  : function (k) {
                      return k.nodeName && k.nodeName.toLowerCase() === E;
                    };
              },
              CLASS: function (_) {
                var E = je[_ + " "];
                return (
                  E ||
                  ((E = new RegExp("(^|" + ke + ")" + _ + "(" + ke + "|$)")) &&
                    je(_, function (k) {
                      return E.test((typeof k.className == "string" && k.className) || (typeof k.getAttribute != "undefined" && k.getAttribute("class")) || "");
                    }))
                );
              },
              ATTR: function (_, E, k) {
                return function (B) {
                  var I = Ie.attr(B, _);
                  return I == null
                    ? E === "!="
                    : E
                    ? ((I += ""),
                      E === "="
                        ? I === k
                        : E === "!="
                        ? I !== k
                        : E === "^="
                        ? k && I.indexOf(k) === 0
                        : E === "*="
                        ? k && I.indexOf(k) > -1
                        : E === "$="
                        ? k && I.slice(-k.length) === k
                        : E === "~="
                        ? (" " + I.replace(tp, " ") + " ").indexOf(k) > -1
                        : E === "|="
                        ? I === k || I.slice(0, k.length + 1) === k + "-"
                        : !1)
                    : !0;
                };
              },
              CHILD: function (_, E, k, B, I) {
                var W = _.slice(0, 3) !== "nth",
                  X = _.slice(-4) !== "last",
                  Q = E === "of-type";
                return B === 1 && I === 0
                  ? function (te) {
                      return !!te.parentNode;
                    }
                  : function (te, he, pe) {
                      var ye,
                        Ce,
                        Ne,
                        ve,
                        Ge,
                        Ke,
                        dt = W !== X ? "nextSibling" : "previousSibling",
                        $e = te.parentNode,
                        Tn = Q && te.nodeName.toLowerCase(),
                        En = !pe && !Q,
                        pt = !1;
                      if ($e) {
                        if (W) {
                          for (; dt; ) {
                            for (ve = te; (ve = ve[dt]); ) if (Q ? ve.nodeName.toLowerCase() === Tn : ve.nodeType === 1) return !1;
                            Ke = dt = _ === "only" && !Ke && "nextSibling";
                          }
                          return !0;
                        }
                        if (((Ke = [X ? $e.firstChild : $e.lastChild]), X && En)) {
                          for (ve = $e, Ne = ve[Pe] || (ve[Pe] = {}), Ce = Ne[ve.uniqueID] || (Ne[ve.uniqueID] = {}), ye = Ce[_] || [], Ge = ye[0] === at && ye[1], pt = Ge && ye[2], ve = Ge && $e.childNodes[Ge]; (ve = (++Ge && ve && ve[dt]) || (pt = Ge = 0) || Ke.pop()); )
                            if (ve.nodeType === 1 && ++pt && ve === te) {
                              Ce[_] = [at, Ge, pt];
                              break;
                            }
                        } else if ((En && ((ve = te), (Ne = ve[Pe] || (ve[Pe] = {})), (Ce = Ne[ve.uniqueID] || (Ne[ve.uniqueID] = {})), (ye = Ce[_] || []), (Ge = ye[0] === at && ye[1]), (pt = Ge)), pt === !1))
                          for (; (ve = (++Ge && ve && ve[dt]) || (pt = Ge = 0) || Ke.pop()) && !((Q ? ve.nodeName.toLowerCase() === Tn : ve.nodeType === 1) && ++pt && (En && ((Ne = ve[Pe] || (ve[Pe] = {})), (Ce = Ne[ve.uniqueID] || (Ne[ve.uniqueID] = {})), (Ce[_] = [at, pt])), ve === te)); );
                        return (pt -= I), pt === B || (pt % B === 0 && pt / B >= 0);
                      }
                    };
              },
              PSEUDO: function (_, E) {
                var k,
                  B = d.pseudos[_] || d.setFilters[_.toLowerCase()] || Ie.error("unsupported pseudo: " + _);
                return B[Pe]
                  ? B(E)
                  : B.length > 1
                  ? ((k = [_, _, "", E]),
                    d.setFilters.hasOwnProperty(_.toLowerCase())
                      ? Et(function (I, W) {
                          for (var X, Q = B(I, E), te = Q.length; te--; ) (X = hr(I, Q[te])), (I[X] = !(W[X] = Q[te]));
                        })
                      : function (I) {
                          return B(I, 0, k);
                        })
                  : B;
              },
            },
            pseudos: {
              not: Et(function (_) {
                var E = [],
                  k = [],
                  B = x(_.replace(ni, "$1"));
                return B[Pe]
                  ? Et(function (I, W, X, Q) {
                      for (var te, he = B(I, null, Q, []), pe = I.length; pe--; ) (te = he[pe]) && (I[pe] = !(W[pe] = te));
                    })
                  : function (I, W, X) {
                      return (E[0] = I), B(E, null, X, k), (E[0] = null), !k.pop();
                    };
              }),
              has: Et(function (_) {
                return function (E) {
                  return Ie(_, E).length > 0;
                };
              }),
              contains: Et(function (_) {
                return (
                  (_ = _.replace(qt, zt)),
                  function (E) {
                    return (E.textContent || v(E)).indexOf(_) > -1;
                  }
                );
              }),
              lang: Et(function (_) {
                return (
                  ap.test(_ || "") || Ie.error("unsupported lang: " + _),
                  (_ = _.replace(qt, zt).toLowerCase()),
                  function (E) {
                    var k;
                    do if ((k = Ee ? E.lang : E.getAttribute("xml:lang") || E.getAttribute("lang"))) return (k = k.toLowerCase()), k === _ || k.indexOf(_ + "-") === 0;
                    while ((E = E.parentNode) && E.nodeType === 1);
                    return !1;
                  }
                );
              }),
              target: function (_) {
                var E = s.location && s.location.hash;
                return E && E.slice(1) === _.id;
              },
              root: function (_) {
                return _ === oe;
              },
              focus: function (_) {
                return _ === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(_.type || _.href || ~_.tabIndex);
              },
              enabled: Su(!1),
              disabled: Su(!0),
              checked: function (_) {
                var E = _.nodeName.toLowerCase();
                return (E === "input" && !!_.checked) || (E === "option" && !!_.selected);
              },
              selected: function (_) {
                return _.parentNode && _.parentNode.selectedIndex, _.selected === !0;
              },
              empty: function (_) {
                for (_ = _.firstChild; _; _ = _.nextSibling) if (_.nodeType < 6) return !1;
                return !0;
              },
              parent: function (_) {
                return !d.pseudos.empty(_);
              },
              header: function (_) {
                return up.test(_.nodeName);
              },
              input: function (_) {
                return op.test(_.nodeName);
              },
              button: function (_) {
                var E = _.nodeName.toLowerCase();
                return (E === "input" && _.type === "button") || E === "button";
              },
              text: function (_) {
                var E;
                return _.nodeName.toLowerCase() === "input" && _.type === "text" && ((E = _.getAttribute("type")) == null || E.toLowerCase() === "text");
              },
              first: gr(function () {
                return [0];
              }),
              last: gr(function (_, E) {
                return [E - 1];
              }),
              eq: gr(function (_, E, k) {
                return [k < 0 ? k + E : k];
              }),
              even: gr(function (_, E) {
                for (var k = 0; k < E; k += 2) _.push(k);
                return _;
              }),
              odd: gr(function (_, E) {
                for (var k = 1; k < E; k += 2) _.push(k);
                return _;
              }),
              lt: gr(function (_, E, k) {
                for (var B = k < 0 ? k + E : k > E ? E : k; --B >= 0; ) _.push(B);
                return _;
              }),
              gt: gr(function (_, E, k) {
                for (var B = k < 0 ? k + E : k; ++B < E; ) _.push(B);
                return _;
              }),
            },
          }),
        (d.pseudos.nth = d.pseudos.eq);
      for (u in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[u] = cp(u);
      for (u in { submit: !0, reset: !0 }) d.pseudos[u] = dp(u);
      function Tu() {}
      (Tu.prototype = d.filters = d.pseudos),
        (d.setFilters = new Tu()),
        (y = Ie.tokenize =
          function (_, E) {
            var k,
              B,
              I,
              W,
              X,
              Q,
              te,
              he = wn[_ + " "];
            if (he) return E ? 0 : he.slice(0);
            for (X = _, Q = [], te = d.preFilter; X; ) {
              (!k || (B = rp.exec(X))) && (B && (X = X.slice(B[0].length) || X), Q.push((I = []))), (k = !1), (B = mu.exec(X)) && ((k = B.shift()), I.push({ value: k, type: B[0].replace(ni, " ") }), (X = X.slice(k.length)));
              for (W in d.filter) (B = ii[W].exec(X)) && (!te[W] || (B = te[W](B))) && ((k = B.shift()), I.push({ value: k, type: W, matches: B }), (X = X.slice(k.length)));
              if (!k) break;
            }
            return E ? X.length : X ? Ie.error(_) : wn(_, Q).slice(0);
          });
      function si(_) {
        for (var E = 0, k = _.length, B = ""; E < k; E++) B += _[E].value;
        return B;
      }
      function oi(_, E, k) {
        var B = E.dir,
          I = E.next,
          W = I || B,
          X = k && W === "parentNode",
          Q = Oe++;
        return E.first
          ? function (te, he, pe) {
              for (; (te = te[B]); ) if (te.nodeType === 1 || X) return _(te, he, pe);
              return !1;
            }
          : function (te, he, pe) {
              var ye,
                Ce,
                Ne,
                ve = [at, Q];
              if (pe) {
                for (; (te = te[B]); ) if ((te.nodeType === 1 || X) && _(te, he, pe)) return !0;
              } else
                for (; (te = te[B]); )
                  if (te.nodeType === 1 || X)
                    if (((Ne = te[Pe] || (te[Pe] = {})), (Ce = Ne[te.uniqueID] || (Ne[te.uniqueID] = {})), I && I === te.nodeName.toLowerCase())) te = te[B] || te;
                    else {
                      if ((ye = Ce[W]) && ye[0] === at && ye[1] === Q) return (ve[2] = ye[2]);
                      if (((Ce[W] = ve), (ve[2] = _(te, he, pe)))) return !0;
                    }
              return !1;
            };
      }
      function Da(_) {
        return _.length > 1
          ? function (E, k, B) {
              for (var I = _.length; I--; ) if (!_[I](E, k, B)) return !1;
              return !0;
            }
          : _[0];
      }
      function pp(_, E, k) {
        for (var B = 0, I = E.length; B < I; B++) Ie(_, E[B], k);
        return k;
      }
      function ui(_, E, k, B, I) {
        for (var W, X = [], Q = 0, te = _.length, he = E != null; Q < te; Q++) (W = _[Q]) && (!k || k(W, B, I)) && (X.push(W), he && E.push(Q));
        return X;
      }
      function ja(_, E, k, B, I, W) {
        return (
          B && !B[Pe] && (B = ja(B)),
          I && !I[Pe] && (I = ja(I, W)),
          Et(function (X, Q, te, he) {
            var pe,
              ye,
              Ce,
              Ne = [],
              ve = [],
              Ge = Q.length,
              Ke = X || pp(E || "*", te.nodeType ? [te] : te, []),
              dt = _ && (X || !E) ? ui(Ke, Ne, _, te, he) : Ke,
              $e = k ? (I || (X ? _ : Ge || B) ? [] : Q) : dt;
            if ((k && k(dt, $e, te, he), B)) for (pe = ui($e, ve), B(pe, [], te, he), ye = pe.length; ye--; ) (Ce = pe[ye]) && ($e[ve[ye]] = !(dt[ve[ye]] = Ce));
            if (X) {
              if (I || _) {
                if (I) {
                  for (pe = [], ye = $e.length; ye--; ) (Ce = $e[ye]) && pe.push((dt[ye] = Ce));
                  I(null, ($e = []), pe, he);
                }
                for (ye = $e.length; ye--; ) (Ce = $e[ye]) && (pe = I ? hr(X, Ce) : Ne[ye]) > -1 && (X[pe] = !(Q[pe] = Ce));
              }
            } else ($e = ui($e === Q ? $e.splice(Ge, $e.length) : $e)), I ? I(null, Q, $e, he) : Yt.apply(Q, $e);
          })
        );
      }
      function Ha(_) {
        for (
          var E,
            k,
            B,
            I = _.length,
            W = d.relative[_[0].type],
            X = W || d.relative[" "],
            Q = W ? 1 : 0,
            te = oi(
              function (ye) {
                return ye === E;
              },
              X,
              !0
            ),
            he = oi(
              function (ye) {
                return hr(E, ye) > -1;
              },
              X,
              !0
            ),
            pe = [
              function (ye, Ce, Ne) {
                var ve = (!W && (Ne || Ce !== P)) || ((E = Ce).nodeType ? te(ye, Ce, Ne) : he(ye, Ce, Ne));
                return (E = null), ve;
              },
            ];
          Q < I;
          Q++
        )
          if ((k = d.relative[_[Q].type])) pe = [oi(Da(pe), k)];
          else {
            if (((k = d.filter[_[Q].type].apply(null, _[Q].matches)), k[Pe])) {
              for (B = ++Q; B < I && !d.relative[_[B].type]; B++);
              return ja(Q > 1 && Da(pe), Q > 1 && si(_.slice(0, Q - 1).concat({ value: _[Q - 2].type === " " ? "*" : "" })).replace(ni, "$1"), k, Q < B && Ha(_.slice(Q, B)), B < I && Ha((_ = _.slice(B))), B < I && si(_));
            }
            pe.push(k);
          }
        return Da(pe);
      }
      function hp(_, E) {
        var k = E.length > 0,
          B = _.length > 0,
          I = function (W, X, Q, te, he) {
            var pe,
              ye,
              Ce,
              Ne = 0,
              ve = "0",
              Ge = W && [],
              Ke = [],
              dt = P,
              $e = W || (B && d.find.TAG("*", he)),
              Tn = (at += dt == null ? 1 : Math.random() || 0.1),
              En = $e.length;
            for (he && (P = X == F || X || he); ve !== En && (pe = $e[ve]) != null; ve++) {
              if (B && pe) {
                for (ye = 0, !X && pe.ownerDocument != F && (M(pe), (Q = !Ee)); (Ce = _[ye++]); )
                  if (Ce(pe, X || F, Q)) {
                    te.push(pe);
                    break;
                  }
                he && (at = Tn);
              }
              k && ((pe = !Ce && pe) && Ne--, W && Ge.push(pe));
            }
            if (((Ne += ve), k && ve !== Ne)) {
              for (ye = 0; (Ce = E[ye++]); ) Ce(Ge, Ke, X, Q);
              if (W) {
                if (Ne > 0) for (; ve--; ) Ge[ve] || Ke[ve] || (Ke[ve] = Xt.call(te));
                Ke = ui(Ke);
              }
              Yt.apply(te, Ke), he && !W && Ke.length > 0 && Ne + E.length > 1 && Ie.uniqueSort(te);
            }
            return he && ((at = Tn), (P = dt)), Ge;
          };
        return k ? Et(I) : I;
      }
      return (
        (x = Ie.compile =
          function (_, E) {
            var k,
              B = [],
              I = [],
              W = ri[_ + " "];
            if (!W) {
              for (E || (E = y(_)), k = E.length; k--; ) (W = Ha(E[k])), W[Pe] ? B.push(W) : I.push(W);
              (W = ri(_, hp(I, B))), (W.selector = _);
            }
            return W;
          }),
        (C = Ie.select =
          function (_, E, k, B) {
            var I,
              W,
              X,
              Q,
              te,
              he = typeof _ == "function" && _,
              pe = !B && y((_ = he.selector || _));
            if (((k = k || []), pe.length === 1)) {
              if (((W = pe[0] = pe[0].slice(0)), W.length > 2 && (X = W[0]).type === "ID" && E.nodeType === 9 && Ee && d.relative[W[1].type])) {
                if (((E = (d.find.ID(X.matches[0].replace(qt, zt), E) || [])[0]), E)) he && (E = E.parentNode);
                else return k;
                _ = _.slice(W.shift().value.length);
              }
              for (I = ii.needsContext.test(_) ? 0 : W.length; I-- && ((X = W[I]), !d.relative[(Q = X.type)]); )
                if ((te = d.find[Q]) && (B = te(X.matches[0].replace(qt, zt), (La.test(W[0].type) && $a(E.parentNode)) || E))) {
                  if ((W.splice(I, 1), (_ = B.length && si(W)), !_)) return Yt.apply(k, B), k;
                  break;
                }
            }
            return (he || x(_, pe))(B, E, !Ee, k, !E || (La.test(_) && $a(E.parentNode)) || E), k;
          }),
        (l.sortStable = Pe.split("").sort(dr).join("") === Pe),
        (l.detectDuplicates = !!G),
        M(),
        (l.sortDetached = xt(function (_) {
          return _.compareDocumentPosition(F.createElement("fieldset")) & 1;
        })),
        xt(function (_) {
          return (_.innerHTML = "<a href='#'></a>"), _.firstChild.getAttribute("href") === "#";
        }) ||
          Ma("type|href|height|width", function (_, E, k) {
            if (!k) return _.getAttribute(E, E.toLowerCase() === "type" ? 1 : 2);
          }),
        (!l.attributes ||
          !xt(function (_) {
            return (_.innerHTML = "<input/>"), _.firstChild.setAttribute("value", ""), _.firstChild.getAttribute("value") === "";
          })) &&
          Ma("value", function (_, E, k) {
            if (!k && _.nodeName.toLowerCase() === "input") return _.defaultValue;
          }),
        xt(function (_) {
          return _.getAttribute("disabled") == null;
        }) ||
          Ma(Na, function (_, E, k) {
            var B;
            if (!k) return _[E] === !0 ? E.toLowerCase() : (B = _.getAttributeNode(E)) && B.specified ? B.value : null;
          }),
        Ie
      );
    })(t);
    (p.find = J), (p.expr = J.selectors), (p.expr[":"] = p.expr.pseudos), (p.uniqueSort = p.unique = J.uniqueSort), (p.text = J.getText), (p.isXMLDoc = J.isXML), (p.contains = J.contains), (p.escapeSelector = J.escape);
    var we = function (s, u, l) {
        for (var d = [], v = l !== void 0; (s = s[u]) && s.nodeType !== 9; )
          if (s.nodeType === 1) {
            if (v && p(s).is(l)) break;
            d.push(s);
          }
        return d;
      },
      Y = function (s, u) {
        for (var l = []; s; s = s.nextSibling) s.nodeType === 1 && s !== u && l.push(s);
        return l;
      },
      ae = p.expr.match.needsContext;
    function O(s, u) {
      return s.nodeName && s.nodeName.toLowerCase() === u.toLowerCase();
    }
    var R = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function z(s, u, l) {
      return T(u)
        ? p.grep(s, function (d, v) {
            return !!u.call(d, v, d) !== l;
          })
        : u.nodeType
        ? p.grep(s, function (d) {
            return (d === u) !== l;
          })
        : typeof u != "string"
        ? p.grep(s, function (d) {
            return c.call(u, d) > -1 !== l;
          })
        : p.filter(u, s, l);
    }
    (p.filter = function (s, u, l) {
      var d = u[0];
      return (
        l && (s = ":not(" + s + ")"),
        u.length === 1 && d.nodeType === 1
          ? p.find.matchesSelector(d, s)
            ? [d]
            : []
          : p.find.matches(
              s,
              p.grep(u, function (v) {
                return v.nodeType === 1;
              })
            )
      );
    }),
      p.fn.extend({
        find: function (s) {
          var u,
            l,
            d = this.length,
            v = this;
          if (typeof s != "string")
            return this.pushStack(
              p(s).filter(function () {
                for (u = 0; u < d; u++) if (p.contains(v[u], this)) return !0;
              })
            );
          for (l = this.pushStack([]), u = 0; u < d; u++) p.find(s, v[u], l);
          return d > 1 ? p.uniqueSort(l) : l;
        },
        filter: function (s) {
          return this.pushStack(z(this, s || [], !1));
        },
        not: function (s) {
          return this.pushStack(z(this, s || [], !0));
        },
        is: function (s) {
          return !!z(this, typeof s == "string" && ae.test(s) ? p(s) : s || [], !1).length;
        },
      });
    var re,
      le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      be = (p.fn.init = function (s, u, l) {
        var d, v;
        if (!s) return this;
        if (((l = l || re), typeof s == "string"))
          if ((s[0] === "<" && s[s.length - 1] === ">" && s.length >= 3 ? (d = [null, s, null]) : (d = le.exec(s)), d && (d[1] || !u)))
            if (d[1]) {
              if (((u = u instanceof p ? u[0] : u), p.merge(this, p.parseHTML(d[1], u && u.nodeType ? u.ownerDocument || u : N, !0)), R.test(d[1]) && p.isPlainObject(u))) for (d in u) T(this[d]) ? this[d](u[d]) : this.attr(d, u[d]);
              return this;
            } else return (v = N.getElementById(d[2])), v && ((this[0] = v), (this.length = 1)), this;
          else return !u || u.jquery ? (u || l).find(s) : this.constructor(u).find(s);
        else {
          if (s.nodeType) return (this[0] = s), (this.length = 1), this;
          if (T(s)) return l.ready !== void 0 ? l.ready(s) : s(p);
        }
        return p.makeArray(s, this);
      });
    (be.prototype = p.fn), (re = p(N));
    var fe = /^(?:parents|prev(?:Until|All))/,
      ge = { children: !0, contents: !0, next: !0, prev: !0 };
    p.fn.extend({
      has: function (s) {
        var u = p(s, this),
          l = u.length;
        return this.filter(function () {
          for (var d = 0; d < l; d++) if (p.contains(this, u[d])) return !0;
        });
      },
      closest: function (s, u) {
        var l,
          d = 0,
          v = this.length,
          m = [],
          y = typeof s != "string" && p(s);
        if (!ae.test(s)) {
          for (; d < v; d++)
            for (l = this[d]; l && l !== u; l = l.parentNode)
              if (l.nodeType < 11 && (y ? y.index(l) > -1 : l.nodeType === 1 && p.find.matchesSelector(l, s))) {
                m.push(l);
                break;
              }
        }
        return this.pushStack(m.length > 1 ? p.uniqueSort(m) : m);
      },
      index: function (s) {
        return s ? (typeof s == "string" ? c.call(p(s), this[0]) : c.call(this, s.jquery ? s[0] : s)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function (s, u) {
        return this.pushStack(p.uniqueSort(p.merge(this.get(), p(s, u))));
      },
      addBack: function (s) {
        return this.add(s == null ? this.prevObject : this.prevObject.filter(s));
      },
    });
    function xe(s, u) {
      for (; (s = s[u]) && s.nodeType !== 1; );
      return s;
    }
    p.each(
      {
        parent: function (s) {
          var u = s.parentNode;
          return u && u.nodeType !== 11 ? u : null;
        },
        parents: function (s) {
          return we(s, "parentNode");
        },
        parentsUntil: function (s, u, l) {
          return we(s, "parentNode", l);
        },
        next: function (s) {
          return xe(s, "nextSibling");
        },
        prev: function (s) {
          return xe(s, "previousSibling");
        },
        nextAll: function (s) {
          return we(s, "nextSibling");
        },
        prevAll: function (s) {
          return we(s, "previousSibling");
        },
        nextUntil: function (s, u, l) {
          return we(s, "nextSibling", l);
        },
        prevUntil: function (s, u, l) {
          return we(s, "previousSibling", l);
        },
        siblings: function (s) {
          return Y((s.parentNode || {}).firstChild, s);
        },
        children: function (s) {
          return Y(s.firstChild);
        },
        contents: function (s) {
          return s.contentDocument != null && i(s.contentDocument) ? s.contentDocument : (O(s, "template") && (s = s.content || s), p.merge([], s.childNodes));
        },
      },
      function (s, u) {
        p.fn[s] = function (l, d) {
          var v = p.map(this, u, l);
          return s.slice(-5) !== "Until" && (d = l), d && typeof d == "string" && (v = p.filter(d, v)), this.length > 1 && (ge[s] || p.uniqueSort(v), fe.test(s) && v.reverse()), this.pushStack(v);
        };
      }
    );
    var V = /[^\x20\t\r\n\f]+/g;
    function K(s) {
      var u = {};
      return (
        p.each(s.match(V) || [], function (l, d) {
          u[d] = !0;
        }),
        u
      );
    }
    p.Callbacks = function (s) {
      s = typeof s == "string" ? K(s) : p.extend({}, s);
      var u,
        l,
        d,
        v,
        m = [],
        y = [],
        x = -1,
        C = function () {
          for (v = v || s.once, d = u = !0; y.length; x = -1) for (l = y.shift(); ++x < m.length; ) m[x].apply(l[0], l[1]) === !1 && s.stopOnFalse && ((x = m.length), (l = !1));
          s.memory || (l = !1), (u = !1), v && (l ? (m = []) : (m = ""));
        },
        P = {
          add: function () {
            return (
              m &&
                (l && !u && ((x = m.length - 1), y.push(l)),
                (function $(G) {
                  p.each(G, function (M, F) {
                    T(F) ? (!s.unique || !P.has(F)) && m.push(F) : F && F.length && q(F) !== "string" && $(F);
                  });
                })(arguments),
                l && !u && C()),
              this
            );
          },
          remove: function () {
            return (
              p.each(arguments, function ($, G) {
                for (var M; (M = p.inArray(G, m, M)) > -1; ) m.splice(M, 1), M <= x && x--;
              }),
              this
            );
          },
          has: function ($) {
            return $ ? p.inArray($, m) > -1 : m.length > 0;
          },
          empty: function () {
            return m && (m = []), this;
          },
          disable: function () {
            return (v = y = []), (m = l = ""), this;
          },
          disabled: function () {
            return !m;
          },
          lock: function () {
            return (v = y = []), !l && !u && (m = l = ""), this;
          },
          locked: function () {
            return !!v;
          },
          fireWith: function ($, G) {
            return v || ((G = G || []), (G = [$, G.slice ? G.slice() : G]), y.push(G), u || C()), this;
          },
          fire: function () {
            return P.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!d;
          },
        };
      return P;
    };
    function ee(s) {
      return s;
    }
    function ce(s) {
      throw s;
    }
    function de(s, u, l, d) {
      var v;
      try {
        s && T((v = s.promise)) ? v.call(s).done(u).fail(l) : s && T((v = s.then)) ? v.call(s, u, l) : u.apply(void 0, [s].slice(d));
      } catch (m) {
        l.apply(void 0, [m]);
      }
    }
    p.extend({
      Deferred: function (s) {
        var u = [
            ["notify", "progress", p.Callbacks("memory"), p.Callbacks("memory"), 2],
            ["resolve", "done", p.Callbacks("once memory"), p.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", p.Callbacks("once memory"), p.Callbacks("once memory"), 1, "rejected"],
          ],
          l = "pending",
          d = {
            state: function () {
              return l;
            },
            always: function () {
              return v.done(arguments).fail(arguments), this;
            },
            catch: function (m) {
              return d.then(null, m);
            },
            pipe: function () {
              var m = arguments;
              return p
                .Deferred(function (y) {
                  p.each(u, function (x, C) {
                    var P = T(m[C[4]]) && m[C[4]];
                    v[C[1]](function () {
                      var $ = P && P.apply(this, arguments);
                      $ && T($.promise) ? $.promise().progress(y.notify).done(y.resolve).fail(y.reject) : y[C[0] + "With"](this, P ? [$] : arguments);
                    });
                  }),
                    (m = null);
                })
                .promise();
            },
            then: function (m, y, x) {
              var C = 0;
              function P($, G, M, F) {
                return function () {
                  var oe = this,
                    Ee = arguments,
                    ue = function () {
                      var qe, lt;
                      if (!($ < C)) {
                        if (((qe = M.apply(oe, Ee)), qe === G.promise())) throw new TypeError("Thenable self-resolution");
                        (lt = qe && (typeof qe == "object" || typeof qe == "function") && qe.then),
                          T(lt) ? (F ? lt.call(qe, P(C, G, ee, F), P(C, G, ce, F)) : (C++, lt.call(qe, P(C, G, ee, F), P(C, G, ce, F), P(C, G, ee, G.notifyWith)))) : (M !== ee && ((oe = void 0), (Ee = [qe])), (F || G.resolveWith)(oe, Ee));
                      }
                    },
                    We = F
                      ? ue
                      : function () {
                          try {
                            ue();
                          } catch (qe) {
                            p.Deferred.exceptionHook && p.Deferred.exceptionHook(qe, We.stackTrace), $ + 1 >= C && (M !== ce && ((oe = void 0), (Ee = [qe])), G.rejectWith(oe, Ee));
                          }
                        };
                  $ ? We() : (p.Deferred.getStackHook && (We.stackTrace = p.Deferred.getStackHook()), t.setTimeout(We));
                };
              }
              return p
                .Deferred(function ($) {
                  u[0][3].add(P(0, $, T(x) ? x : ee, $.notifyWith)), u[1][3].add(P(0, $, T(m) ? m : ee)), u[2][3].add(P(0, $, T(y) ? y : ce));
                })
                .promise();
            },
            promise: function (m) {
              return m != null ? p.extend(m, d) : d;
            },
          },
          v = {};
        return (
          p.each(u, function (m, y) {
            var x = y[2],
              C = y[5];
            (d[y[1]] = x.add),
              C &&
                x.add(
                  function () {
                    l = C;
                  },
                  u[3 - m][2].disable,
                  u[3 - m][3].disable,
                  u[0][2].lock,
                  u[0][3].lock
                ),
              x.add(y[3].fire),
              (v[y[0]] = function () {
                return v[y[0] + "With"](this === v ? void 0 : this, arguments), this;
              }),
              (v[y[0] + "With"] = x.fireWith);
          }),
          d.promise(v),
          s && s.call(v, v),
          v
        );
      },
      when: function (s) {
        var u = arguments.length,
          l = u,
          d = Array(l),
          v = a.call(arguments),
          m = p.Deferred(),
          y = function (x) {
            return function (C) {
              (d[x] = this), (v[x] = arguments.length > 1 ? a.call(arguments) : C), --u || m.resolveWith(d, v);
            };
          };
        if (u <= 1 && (de(s, m.done(y(l)).resolve, m.reject, !u), m.state() === "pending" || T(v[l] && v[l].then))) return m.then();
        for (; l--; ) de(v[l], y(l), m.reject);
        return m.promise();
      },
    });
    var Te = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (p.Deferred.exceptionHook = function (s, u) {
      t.console && t.console.warn && s && Te.test(s.name) && t.console.warn("jQuery.Deferred exception: " + s.message, s.stack, u);
    }),
      (p.readyException = function (s) {
        t.setTimeout(function () {
          throw s;
        });
      });
    var Me = p.Deferred();
    (p.fn.ready = function (s) {
      return (
        Me.then(s).catch(function (u) {
          p.readyException(u);
        }),
        this
      );
    }),
      p.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (s) {
          (s === !0 ? --p.readyWait : p.isReady) || ((p.isReady = !0), !(s !== !0 && --p.readyWait > 0) && Me.resolveWith(N, [p]));
        },
      }),
      (p.ready.then = Me.then);
    function bt() {
      N.removeEventListener("DOMContentLoaded", bt), t.removeEventListener("load", bt), p.ready();
    }
    N.readyState === "complete" || (N.readyState !== "loading" && !N.documentElement.doScroll) ? t.setTimeout(p.ready) : (N.addEventListener("DOMContentLoaded", bt), t.addEventListener("load", bt));
    var tt = function (s, u, l, d, v, m, y) {
        var x = 0,
          C = s.length,
          P = l == null;
        if (q(l) === "object") {
          v = !0;
          for (x in l) tt(s, u, x, l[x], !0, m, y);
        } else if (
          d !== void 0 &&
          ((v = !0),
          T(d) || (y = !0),
          P &&
            (y
              ? (u.call(s, d), (u = null))
              : ((P = u),
                (u = function ($, G, M) {
                  return P.call(p($), M);
                }))),
          u)
        )
          for (; x < C; x++) u(s[x], l, y ? d : d.call(s[x], x, u(s[x], l)));
        return v ? s : P ? u.call(s) : C ? u(s[0], l) : m;
      },
      cd = /^-ms-/,
      dd = /-([a-z])/g;
    function pd(s, u) {
      return u.toUpperCase();
    }
    function Mt(s) {
      return s.replace(cd, "ms-").replace(dd, pd);
    }
    var pn = function (s) {
      return s.nodeType === 1 || s.nodeType === 9 || !+s.nodeType;
    };
    function hn() {
      this.expando = p.expando + hn.uid++;
    }
    (hn.uid = 1),
      (hn.prototype = {
        cache: function (s) {
          var u = s[this.expando];
          return u || ((u = {}), pn(s) && (s.nodeType ? (s[this.expando] = u) : Object.defineProperty(s, this.expando, { value: u, configurable: !0 }))), u;
        },
        set: function (s, u, l) {
          var d,
            v = this.cache(s);
          if (typeof u == "string") v[Mt(u)] = l;
          else for (d in u) v[Mt(d)] = u[d];
          return v;
        },
        get: function (s, u) {
          return u === void 0 ? this.cache(s) : s[this.expando] && s[this.expando][Mt(u)];
        },
        access: function (s, u, l) {
          return u === void 0 || (u && typeof u == "string" && l === void 0) ? this.get(s, u) : (this.set(s, u, l), l !== void 0 ? l : u);
        },
        remove: function (s, u) {
          var l,
            d = s[this.expando];
          if (d !== void 0) {
            if (u !== void 0) for (Array.isArray(u) ? (u = u.map(Mt)) : ((u = Mt(u)), (u = (u in d) ? [u] : u.match(V) || [])), l = u.length; l--; ) delete d[u[l]];
            (u === void 0 || p.isEmptyObject(d)) && (s.nodeType ? (s[this.expando] = void 0) : delete s[this.expando]);
          }
        },
        hasData: function (s) {
          var u = s[this.expando];
          return u !== void 0 && !p.isEmptyObject(u);
        },
      });
    var me = new hn(),
      rt = new hn(),
      hd = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      vd = /[A-Z]/g;
    function gd(s) {
      return s === "true" ? !0 : s === "false" ? !1 : s === "null" ? null : s === +s + "" ? +s : hd.test(s) ? JSON.parse(s) : s;
    }
    function Do(s, u, l) {
      var d;
      if (l === void 0 && s.nodeType === 1)
        if (((d = "data-" + u.replace(vd, "-$&").toLowerCase()), (l = s.getAttribute(d)), typeof l == "string")) {
          try {
            l = gd(l);
          } catch {}
          rt.set(s, u, l);
        } else l = void 0;
      return l;
    }
    p.extend({
      hasData: function (s) {
        return rt.hasData(s) || me.hasData(s);
      },
      data: function (s, u, l) {
        return rt.access(s, u, l);
      },
      removeData: function (s, u) {
        rt.remove(s, u);
      },
      _data: function (s, u, l) {
        return me.access(s, u, l);
      },
      _removeData: function (s, u) {
        me.remove(s, u);
      },
    }),
      p.fn.extend({
        data: function (s, u) {
          var l,
            d,
            v,
            m = this[0],
            y = m && m.attributes;
          if (s === void 0) {
            if (this.length && ((v = rt.get(m)), m.nodeType === 1 && !me.get(m, "hasDataAttrs"))) {
              for (l = y.length; l--; ) y[l] && ((d = y[l].name), d.indexOf("data-") === 0 && ((d = Mt(d.slice(5))), Do(m, d, v[d])));
              me.set(m, "hasDataAttrs", !0);
            }
            return v;
          }
          return typeof s == "object"
            ? this.each(function () {
                rt.set(this, s);
              })
            : tt(
                this,
                function (x) {
                  var C;
                  if (m && x === void 0) return (C = rt.get(m, s)), C !== void 0 || ((C = Do(m, s)), C !== void 0) ? C : void 0;
                  this.each(function () {
                    rt.set(this, s, x);
                  });
                },
                null,
                u,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (s) {
          return this.each(function () {
            rt.remove(this, s);
          });
        },
      }),
      p.extend({
        queue: function (s, u, l) {
          var d;
          if (s) return (u = (u || "fx") + "queue"), (d = me.get(s, u)), l && (!d || Array.isArray(l) ? (d = me.access(s, u, p.makeArray(l))) : d.push(l)), d || [];
        },
        dequeue: function (s, u) {
          u = u || "fx";
          var l = p.queue(s, u),
            d = l.length,
            v = l.shift(),
            m = p._queueHooks(s, u),
            y = function () {
              p.dequeue(s, u);
            };
          v === "inprogress" && ((v = l.shift()), d--), v && (u === "fx" && l.unshift("inprogress"), delete m.stop, v.call(s, y, m)), !d && m && m.empty.fire();
        },
        _queueHooks: function (s, u) {
          var l = u + "queueHooks";
          return (
            me.get(s, l) ||
            me.access(s, l, {
              empty: p.Callbacks("once memory").add(function () {
                me.remove(s, [u + "queue", l]);
              }),
            })
          );
        },
      }),
      p.fn.extend({
        queue: function (s, u) {
          var l = 2;
          return (
            typeof s != "string" && ((u = s), (s = "fx"), l--),
            arguments.length < l
              ? p.queue(this[0], s)
              : u === void 0
              ? this
              : this.each(function () {
                  var d = p.queue(this, s, u);
                  p._queueHooks(this, s), s === "fx" && d[0] !== "inprogress" && p.dequeue(this, s);
                })
          );
        },
        dequeue: function (s) {
          return this.each(function () {
            p.dequeue(this, s);
          });
        },
        clearQueue: function (s) {
          return this.queue(s || "fx", []);
        },
        promise: function (s, u) {
          var l,
            d = 1,
            v = p.Deferred(),
            m = this,
            y = this.length,
            x = function () {
              --d || v.resolveWith(m, [m]);
            };
          for (typeof s != "string" && ((u = s), (s = void 0)), s = s || "fx"; y--; ) (l = me.get(m[y], s + "queueHooks")), l && l.empty && (d++, l.empty.add(x));
          return x(), v.promise(u);
        },
      });
    var jo = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      vn = new RegExp("^(?:([+-])=|)(" + jo + ")([a-z%]*)$", "i"),
      Bt = ["Top", "Right", "Bottom", "Left"],
      fr = N.documentElement,
      $r = function (s) {
        return p.contains(s.ownerDocument, s);
      },
      md = { composed: !0 };
    fr.getRootNode &&
      ($r = function (s) {
        return p.contains(s.ownerDocument, s) || s.getRootNode(md) === s.ownerDocument;
      });
    var Jn = function (s, u) {
      return (s = u || s), s.style.display === "none" || (s.style.display === "" && $r(s) && p.css(s, "display") === "none");
    };
    function Ho(s, u, l, d) {
      var v,
        m,
        y = 20,
        x = d
          ? function () {
              return d.cur();
            }
          : function () {
              return p.css(s, u, "");
            },
        C = x(),
        P = (l && l[3]) || (p.cssNumber[u] ? "" : "px"),
        $ = s.nodeType && (p.cssNumber[u] || (P !== "px" && +C)) && vn.exec(p.css(s, u));
      if ($ && $[3] !== P) {
        for (C = C / 2, P = P || $[3], $ = +C || 1; y--; ) p.style(s, u, $ + P), (1 - m) * (1 - (m = x() / C || 0.5)) <= 0 && (y = 0), ($ = $ / m);
        ($ = $ * 2), p.style(s, u, $ + P), (l = l || []);
      }
      return l && (($ = +$ || +C || 0), (v = l[1] ? $ + (l[1] + 1) * l[2] : +l[2]), d && ((d.unit = P), (d.start = $), (d.end = v))), v;
    }
    var Fo = {};
    function yd(s) {
      var u,
        l = s.ownerDocument,
        d = s.nodeName,
        v = Fo[d];
      return v || ((u = l.body.appendChild(l.createElement(d))), (v = p.css(u, "display")), u.parentNode.removeChild(u), v === "none" && (v = "block"), (Fo[d] = v), v);
    }
    function Dr(s, u) {
      for (var l, d, v = [], m = 0, y = s.length; m < y; m++)
        (d = s[m]), !!d.style && ((l = d.style.display), u ? (l === "none" && ((v[m] = me.get(d, "display") || null), v[m] || (d.style.display = "")), d.style.display === "" && Jn(d) && (v[m] = yd(d))) : l !== "none" && ((v[m] = "none"), me.set(d, "display", l)));
      for (m = 0; m < y; m++) v[m] != null && (s[m].style.display = v[m]);
      return s;
    }
    p.fn.extend({
      show: function () {
        return Dr(this, !0);
      },
      hide: function () {
        return Dr(this);
      },
      toggle: function (s) {
        return typeof s == "boolean"
          ? s
            ? this.show()
            : this.hide()
          : this.each(function () {
              Jn(this) ? p(this).show() : p(this).hide();
            });
      },
    });
    var gn = /^(?:checkbox|radio)$/i,
      Bo = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      qo = /^$|^module$|\/(?:java|ecma)script/i;
    (function () {
      var s = N.createDocumentFragment(),
        u = s.appendChild(N.createElement("div")),
        l = N.createElement("input");
      l.setAttribute("type", "radio"),
        l.setAttribute("checked", "checked"),
        l.setAttribute("name", "t"),
        u.appendChild(l),
        (S.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (u.innerHTML = "<textarea>x</textarea>"),
        (S.noCloneChecked = !!u.cloneNode(!0).lastChild.defaultValue),
        (u.innerHTML = "<option></option>"),
        (S.option = !!u.lastChild);
    })();
    var _t = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    (_t.tbody = _t.tfoot = _t.colgroup = _t.caption = _t.thead), (_t.th = _t.td), S.option || (_t.optgroup = _t.option = [1, "<select multiple='multiple'>", "</select>"]);
    function nt(s, u) {
      var l;
      return typeof s.getElementsByTagName != "undefined" ? (l = s.getElementsByTagName(u || "*")) : typeof s.querySelectorAll != "undefined" ? (l = s.querySelectorAll(u || "*")) : (l = []), u === void 0 || (u && O(s, u)) ? p.merge([s], l) : l;
    }
    function ba(s, u) {
      for (var l = 0, d = s.length; l < d; l++) me.set(s[l], "globalEval", !u || me.get(u[l], "globalEval"));
    }
    var bd = /<|&#?\w+;/;
    function zo(s, u, l, d, v) {
      for (var m, y, x, C, P, $, G = u.createDocumentFragment(), M = [], F = 0, oe = s.length; F < oe; F++)
        if (((m = s[F]), m || m === 0))
          if (q(m) === "object") p.merge(M, m.nodeType ? [m] : m);
          else if (!bd.test(m)) M.push(u.createTextNode(m));
          else {
            for (y = y || G.appendChild(u.createElement("div")), x = (Bo.exec(m) || ["", ""])[1].toLowerCase(), C = _t[x] || _t._default, y.innerHTML = C[1] + p.htmlPrefilter(m) + C[2], $ = C[0]; $--; ) y = y.lastChild;
            p.merge(M, y.childNodes), (y = G.firstChild), (y.textContent = "");
          }
      for (G.textContent = "", F = 0; (m = M[F++]); ) {
        if (d && p.inArray(m, d) > -1) {
          v && v.push(m);
          continue;
        }
        if (((P = $r(m)), (y = nt(G.appendChild(m), "script")), P && ba(y), l)) for ($ = 0; (m = y[$++]); ) qo.test(m.type || "") && l.push(m);
      }
      return G;
    }
    var Uo = /^([^.]*)(?:\.(.+)|)/;
    function jr() {
      return !0;
    }
    function Hr() {
      return !1;
    }
    function _d(s, u) {
      return (s === wd()) == (u === "focus");
    }
    function wd() {
      try {
        return N.activeElement;
      } catch {}
    }
    function _a(s, u, l, d, v, m) {
      var y, x;
      if (typeof u == "object") {
        typeof l != "string" && ((d = d || l), (l = void 0));
        for (x in u) _a(s, x, l, d, u[x], m);
        return s;
      }
      if ((d == null && v == null ? ((v = l), (d = l = void 0)) : v == null && (typeof l == "string" ? ((v = d), (d = void 0)) : ((v = d), (d = l), (l = void 0))), v === !1)) v = Hr;
      else if (!v) return s;
      return (
        m === 1 &&
          ((y = v),
          (v = function (C) {
            return p().off(C), y.apply(this, arguments);
          }),
          (v.guid = y.guid || (y.guid = p.guid++))),
        s.each(function () {
          p.event.add(this, u, v, d, l);
        })
      );
    }
    p.event = {
      global: {},
      add: function (s, u, l, d, v) {
        var m,
          y,
          x,
          C,
          P,
          $,
          G,
          M,
          F,
          oe,
          Ee,
          ue = me.get(s);
        if (!!pn(s))
          for (
            l.handler && ((m = l), (l = m.handler), (v = m.selector)),
              v && p.find.matchesSelector(fr, v),
              l.guid || (l.guid = p.guid++),
              (C = ue.events) || (C = ue.events = Object.create(null)),
              (y = ue.handle) ||
                (y = ue.handle =
                  function (We) {
                    return typeof p != "undefined" && p.event.triggered !== We.type ? p.event.dispatch.apply(s, arguments) : void 0;
                  }),
              u = (u || "").match(V) || [""],
              P = u.length;
            P--;

          )
            (x = Uo.exec(u[P]) || []),
              (F = Ee = x[1]),
              (oe = (x[2] || "").split(".").sort()),
              !!F &&
                ((G = p.event.special[F] || {}),
                (F = (v ? G.delegateType : G.bindType) || F),
                (G = p.event.special[F] || {}),
                ($ = p.extend({ type: F, origType: Ee, data: d, handler: l, guid: l.guid, selector: v, needsContext: v && p.expr.match.needsContext.test(v), namespace: oe.join(".") }, m)),
                (M = C[F]) || ((M = C[F] = []), (M.delegateCount = 0), (!G.setup || G.setup.call(s, d, oe, y) === !1) && s.addEventListener && s.addEventListener(F, y)),
                G.add && (G.add.call(s, $), $.handler.guid || ($.handler.guid = l.guid)),
                v ? M.splice(M.delegateCount++, 0, $) : M.push($),
                (p.event.global[F] = !0));
      },
      remove: function (s, u, l, d, v) {
        var m,
          y,
          x,
          C,
          P,
          $,
          G,
          M,
          F,
          oe,
          Ee,
          ue = me.hasData(s) && me.get(s);
        if (!(!ue || !(C = ue.events))) {
          for (u = (u || "").match(V) || [""], P = u.length; P--; ) {
            if (((x = Uo.exec(u[P]) || []), (F = Ee = x[1]), (oe = (x[2] || "").split(".").sort()), !F)) {
              for (F in C) p.event.remove(s, F + u[P], l, d, !0);
              continue;
            }
            for (G = p.event.special[F] || {}, F = (d ? G.delegateType : G.bindType) || F, M = C[F] || [], x = x[2] && new RegExp("(^|\\.)" + oe.join("\\.(?:.*\\.|)") + "(\\.|$)"), y = m = M.length; m--; )
              ($ = M[m]), (v || Ee === $.origType) && (!l || l.guid === $.guid) && (!x || x.test($.namespace)) && (!d || d === $.selector || (d === "**" && $.selector)) && (M.splice(m, 1), $.selector && M.delegateCount--, G.remove && G.remove.call(s, $));
            y && !M.length && ((!G.teardown || G.teardown.call(s, oe, ue.handle) === !1) && p.removeEvent(s, F, ue.handle), delete C[F]);
          }
          p.isEmptyObject(C) && me.remove(s, "handle events");
        }
      },
      dispatch: function (s) {
        var u,
          l,
          d,
          v,
          m,
          y,
          x = new Array(arguments.length),
          C = p.event.fix(s),
          P = (me.get(this, "events") || Object.create(null))[C.type] || [],
          $ = p.event.special[C.type] || {};
        for (x[0] = C, u = 1; u < arguments.length; u++) x[u] = arguments[u];
        if (((C.delegateTarget = this), !($.preDispatch && $.preDispatch.call(this, C) === !1))) {
          for (y = p.event.handlers.call(this, C, P), u = 0; (v = y[u++]) && !C.isPropagationStopped(); )
            for (C.currentTarget = v.elem, l = 0; (m = v.handlers[l++]) && !C.isImmediatePropagationStopped(); )
              (!C.rnamespace || m.namespace === !1 || C.rnamespace.test(m.namespace)) && ((C.handleObj = m), (C.data = m.data), (d = ((p.event.special[m.origType] || {}).handle || m.handler).apply(v.elem, x)), d !== void 0 && (C.result = d) === !1 && (C.preventDefault(), C.stopPropagation()));
          return $.postDispatch && $.postDispatch.call(this, C), C.result;
        }
      },
      handlers: function (s, u) {
        var l,
          d,
          v,
          m,
          y,
          x = [],
          C = u.delegateCount,
          P = s.target;
        if (C && P.nodeType && !(s.type === "click" && s.button >= 1)) {
          for (; P !== this; P = P.parentNode || this)
            if (P.nodeType === 1 && !(s.type === "click" && P.disabled === !0)) {
              for (m = [], y = {}, l = 0; l < C; l++) (d = u[l]), (v = d.selector + " "), y[v] === void 0 && (y[v] = d.needsContext ? p(v, this).index(P) > -1 : p.find(v, this, null, [P]).length), y[v] && m.push(d);
              m.length && x.push({ elem: P, handlers: m });
            }
        }
        return (P = this), C < u.length && x.push({ elem: P, handlers: u.slice(C) }), x;
      },
      addProp: function (s, u) {
        Object.defineProperty(p.Event.prototype, s, {
          enumerable: !0,
          configurable: !0,
          get: T(u)
            ? function () {
                if (this.originalEvent) return u(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[s];
              },
          set: function (l) {
            Object.defineProperty(this, s, { enumerable: !0, configurable: !0, writable: !0, value: l });
          },
        });
      },
      fix: function (s) {
        return s[p.expando] ? s : new p.Event(s);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (s) {
            var u = this || s;
            return gn.test(u.type) && u.click && O(u, "input") && Qn(u, "click", jr), !1;
          },
          trigger: function (s) {
            var u = this || s;
            return gn.test(u.type) && u.click && O(u, "input") && Qn(u, "click"), !0;
          },
          _default: function (s) {
            var u = s.target;
            return (gn.test(u.type) && u.click && O(u, "input") && me.get(u, "click")) || O(u, "a");
          },
        },
        beforeunload: {
          postDispatch: function (s) {
            s.result !== void 0 && s.originalEvent && (s.originalEvent.returnValue = s.result);
          },
        },
      },
    };
    function Qn(s, u, l) {
      if (!l) {
        me.get(s, u) === void 0 && p.event.add(s, u, jr);
        return;
      }
      me.set(s, u, !1),
        p.event.add(s, u, {
          namespace: !1,
          handler: function (d) {
            var v,
              m,
              y = me.get(this, u);
            if (d.isTrigger & 1 && this[u]) {
              if (y.length) (p.event.special[u] || {}).delegateType && d.stopPropagation();
              else if (((y = a.call(arguments)), me.set(this, u, y), (v = l(this, u)), this[u](), (m = me.get(this, u)), y !== m || v ? me.set(this, u, !1) : (m = {}), y !== m)) return d.stopImmediatePropagation(), d.preventDefault(), m && m.value;
            } else y.length && (me.set(this, u, { value: p.event.trigger(p.extend(y[0], p.Event.prototype), y.slice(1), this) }), d.stopImmediatePropagation());
          },
        });
    }
    (p.removeEvent = function (s, u, l) {
      s.removeEventListener && s.removeEventListener(u, l);
    }),
      (p.Event = function (s, u) {
        if (!(this instanceof p.Event)) return new p.Event(s, u);
        s && s.type
          ? ((this.originalEvent = s),
            (this.type = s.type),
            (this.isDefaultPrevented = s.defaultPrevented || (s.defaultPrevented === void 0 && s.returnValue === !1) ? jr : Hr),
            (this.target = s.target && s.target.nodeType === 3 ? s.target.parentNode : s.target),
            (this.currentTarget = s.currentTarget),
            (this.relatedTarget = s.relatedTarget))
          : (this.type = s),
          u && p.extend(this, u),
          (this.timeStamp = (s && s.timeStamp) || Date.now()),
          (this[p.expando] = !0);
      }),
      (p.Event.prototype = {
        constructor: p.Event,
        isDefaultPrevented: Hr,
        isPropagationStopped: Hr,
        isImmediatePropagationStopped: Hr,
        isSimulated: !1,
        preventDefault: function () {
          var s = this.originalEvent;
          (this.isDefaultPrevented = jr), s && !this.isSimulated && s.preventDefault();
        },
        stopPropagation: function () {
          var s = this.originalEvent;
          (this.isPropagationStopped = jr), s && !this.isSimulated && s.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var s = this.originalEvent;
          (this.isImmediatePropagationStopped = jr), s && !this.isSimulated && s.stopImmediatePropagation(), this.stopPropagation();
        },
      }),
      p.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: !0,
        },
        p.event.addProp
      ),
      p.each({ focus: "focusin", blur: "focusout" }, function (s, u) {
        p.event.special[s] = {
          setup: function () {
            return Qn(this, s, _d), !1;
          },
          trigger: function () {
            return Qn(this, s), !0;
          },
          _default: function () {
            return !0;
          },
          delegateType: u,
        };
      }),
      p.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (s, u) {
        p.event.special[s] = {
          delegateType: u,
          bindType: u,
          handle: function (l) {
            var d,
              v = this,
              m = l.relatedTarget,
              y = l.handleObj;
            return (!m || (m !== v && !p.contains(v, m))) && ((l.type = y.origType), (d = y.handler.apply(this, arguments)), (l.type = u)), d;
          },
        };
      }),
      p.fn.extend({
        on: function (s, u, l, d) {
          return _a(this, s, u, l, d);
        },
        one: function (s, u, l, d) {
          return _a(this, s, u, l, d, 1);
        },
        off: function (s, u, l) {
          var d, v;
          if (s && s.preventDefault && s.handleObj) return (d = s.handleObj), p(s.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
          if (typeof s == "object") {
            for (v in s) this.off(v, u, s[v]);
            return this;
          }
          return (
            (u === !1 || typeof u == "function") && ((l = u), (u = void 0)),
            l === !1 && (l = Hr),
            this.each(function () {
              p.event.remove(this, s, l, u);
            })
          );
        },
      });
    var Sd = /<script|<style|<link/i,
      Td = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ed = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Wo(s, u) {
      return (O(s, "table") && O(u.nodeType !== 11 ? u : u.firstChild, "tr") && p(s).children("tbody")[0]) || s;
    }
    function xd(s) {
      return (s.type = (s.getAttribute("type") !== null) + "/" + s.type), s;
    }
    function Cd(s) {
      return (s.type || "").slice(0, 5) === "true/" ? (s.type = s.type.slice(5)) : s.removeAttribute("type"), s;
    }
    function Go(s, u) {
      var l, d, v, m, y, x, C;
      if (u.nodeType === 1) {
        if (me.hasData(s) && ((m = me.get(s)), (C = m.events), C)) {
          me.remove(u, "handle events");
          for (v in C) for (l = 0, d = C[v].length; l < d; l++) p.event.add(u, v, C[v][l]);
        }
        rt.hasData(s) && ((y = rt.access(s)), (x = p.extend({}, y)), rt.set(u, x));
      }
    }
    function Od(s, u) {
      var l = u.nodeName.toLowerCase();
      l === "input" && gn.test(s.type) ? (u.checked = s.checked) : (l === "input" || l === "textarea") && (u.defaultValue = s.defaultValue);
    }
    function Fr(s, u, l, d) {
      u = o(u);
      var v,
        m,
        y,
        x,
        C,
        P,
        $ = 0,
        G = s.length,
        M = G - 1,
        F = u[0],
        oe = T(F);
      if (oe || (G > 1 && typeof F == "string" && !S.checkClone && Td.test(F)))
        return s.each(function (Ee) {
          var ue = s.eq(Ee);
          oe && (u[0] = F.call(this, Ee, ue.html())), Fr(ue, u, l, d);
        });
      if (G && ((v = zo(u, s[0].ownerDocument, !1, s, d)), (m = v.firstChild), v.childNodes.length === 1 && (v = m), m || d)) {
        for (y = p.map(nt(v, "script"), xd), x = y.length; $ < G; $++) (C = v), $ !== M && ((C = p.clone(C, !0, !0)), x && p.merge(y, nt(C, "script"))), l.call(s[$], C, $);
        if (x)
          for (P = y[y.length - 1].ownerDocument, p.map(y, Cd), $ = 0; $ < x; $++)
            (C = y[$]), qo.test(C.type || "") && !me.access(C, "globalEval") && p.contains(P, C) && (C.src && (C.type || "").toLowerCase() !== "module" ? p._evalUrl && !C.noModule && p._evalUrl(C.src, { nonce: C.nonce || C.getAttribute("nonce") }, P) : H(C.textContent.replace(Ed, ""), C, P));
      }
      return s;
    }
    function Xo(s, u, l) {
      for (var d, v = u ? p.filter(u, s) : s, m = 0; (d = v[m]) != null; m++) !l && d.nodeType === 1 && p.cleanData(nt(d)), d.parentNode && (l && $r(d) && ba(nt(d, "script")), d.parentNode.removeChild(d));
      return s;
    }
    p.extend({
      htmlPrefilter: function (s) {
        return s;
      },
      clone: function (s, u, l) {
        var d,
          v,
          m,
          y,
          x = s.cloneNode(!0),
          C = $r(s);
        if (!S.noCloneChecked && (s.nodeType === 1 || s.nodeType === 11) && !p.isXMLDoc(s)) for (y = nt(x), m = nt(s), d = 0, v = m.length; d < v; d++) Od(m[d], y[d]);
        if (u)
          if (l) for (m = m || nt(s), y = y || nt(x), d = 0, v = m.length; d < v; d++) Go(m[d], y[d]);
          else Go(s, x);
        return (y = nt(x, "script")), y.length > 0 && ba(y, !C && nt(s, "script")), x;
      },
      cleanData: function (s) {
        for (var u, l, d, v = p.event.special, m = 0; (l = s[m]) !== void 0; m++)
          if (pn(l)) {
            if ((u = l[me.expando])) {
              if (u.events) for (d in u.events) v[d] ? p.event.remove(l, d) : p.removeEvent(l, d, u.handle);
              l[me.expando] = void 0;
            }
            l[rt.expando] && (l[rt.expando] = void 0);
          }
      },
    }),
      p.fn.extend({
        detach: function (s) {
          return Xo(this, s, !0);
        },
        remove: function (s) {
          return Xo(this, s);
        },
        text: function (s) {
          return tt(
            this,
            function (u) {
              return u === void 0
                ? p.text(this)
                : this.empty().each(function () {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = u);
                  });
            },
            null,
            s,
            arguments.length
          );
        },
        append: function () {
          return Fr(this, arguments, function (s) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var u = Wo(this, s);
              u.appendChild(s);
            }
          });
        },
        prepend: function () {
          return Fr(this, arguments, function (s) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var u = Wo(this, s);
              u.insertBefore(s, u.firstChild);
            }
          });
        },
        before: function () {
          return Fr(this, arguments, function (s) {
            this.parentNode && this.parentNode.insertBefore(s, this);
          });
        },
        after: function () {
          return Fr(this, arguments, function (s) {
            this.parentNode && this.parentNode.insertBefore(s, this.nextSibling);
          });
        },
        empty: function () {
          for (var s, u = 0; (s = this[u]) != null; u++) s.nodeType === 1 && (p.cleanData(nt(s, !1)), (s.textContent = ""));
          return this;
        },
        clone: function (s, u) {
          return (
            (s = s == null ? !1 : s),
            (u = u == null ? s : u),
            this.map(function () {
              return p.clone(this, s, u);
            })
          );
        },
        html: function (s) {
          return tt(
            this,
            function (u) {
              var l = this[0] || {},
                d = 0,
                v = this.length;
              if (u === void 0 && l.nodeType === 1) return l.innerHTML;
              if (typeof u == "string" && !Sd.test(u) && !_t[(Bo.exec(u) || ["", ""])[1].toLowerCase()]) {
                u = p.htmlPrefilter(u);
                try {
                  for (; d < v; d++) (l = this[d] || {}), l.nodeType === 1 && (p.cleanData(nt(l, !1)), (l.innerHTML = u));
                  l = 0;
                } catch {}
              }
              l && this.empty().append(u);
            },
            null,
            s,
            arguments.length
          );
        },
        replaceWith: function () {
          var s = [];
          return Fr(
            this,
            arguments,
            function (u) {
              var l = this.parentNode;
              p.inArray(this, s) < 0 && (p.cleanData(nt(this)), l && l.replaceChild(u, this));
            },
            s
          );
        },
      }),
      p.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (s, u) {
        p.fn[s] = function (l) {
          for (var d, v = [], m = p(l), y = m.length - 1, x = 0; x <= y; x++) (d = x === y ? this : this.clone(!0)), p(m[x])[u](d), f.apply(v, d.get());
          return this.pushStack(v);
        };
      });
    var wa = new RegExp("^(" + jo + ")(?!px)[a-z%]+$", "i"),
      Zn = function (s) {
        var u = s.ownerDocument.defaultView;
        return (!u || !u.opener) && (u = t), u.getComputedStyle(s);
      },
      Yo = function (s, u, l) {
        var d,
          v,
          m = {};
        for (v in u) (m[v] = s.style[v]), (s.style[v] = u[v]);
        d = l.call(s);
        for (v in u) s.style[v] = m[v];
        return d;
      },
      Ad = new RegExp(Bt.join("|"), "i");
    (function () {
      function s() {
        if (!!P) {
          (C.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"), (P.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"), fr.appendChild(C).appendChild(P);
          var $ = t.getComputedStyle(P);
          (l = $.top !== "1%"), (x = u($.marginLeft) === 12), (P.style.right = "60%"), (m = u($.right) === 36), (d = u($.width) === 36), (P.style.position = "absolute"), (v = u(P.offsetWidth / 3) === 12), fr.removeChild(C), (P = null);
        }
      }
      function u($) {
        return Math.round(parseFloat($));
      }
      var l,
        d,
        v,
        m,
        y,
        x,
        C = N.createElement("div"),
        P = N.createElement("div");
      !P.style ||
        ((P.style.backgroundClip = "content-box"),
        (P.cloneNode(!0).style.backgroundClip = ""),
        (S.clearCloneStyle = P.style.backgroundClip === "content-box"),
        p.extend(S, {
          boxSizingReliable: function () {
            return s(), d;
          },
          pixelBoxStyles: function () {
            return s(), m;
          },
          pixelPosition: function () {
            return s(), l;
          },
          reliableMarginLeft: function () {
            return s(), x;
          },
          scrollboxSize: function () {
            return s(), v;
          },
          reliableTrDimensions: function () {
            var $, G, M, F;
            return (
              y == null &&
                (($ = N.createElement("table")),
                (G = N.createElement("tr")),
                (M = N.createElement("div")),
                ($.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                (G.style.cssText = "border:1px solid"),
                (G.style.height = "1px"),
                (M.style.height = "9px"),
                (M.style.display = "block"),
                fr.appendChild($).appendChild(G).appendChild(M),
                (F = t.getComputedStyle(G)),
                (y = parseInt(F.height, 10) + parseInt(F.borderTopWidth, 10) + parseInt(F.borderBottomWidth, 10) === G.offsetHeight),
                fr.removeChild($)),
              y
            );
          },
        }));
    })();
    function mn(s, u, l) {
      var d,
        v,
        m,
        y,
        x = s.style;
      return (
        (l = l || Zn(s)),
        l &&
          ((y = l.getPropertyValue(u) || l[u]),
          y === "" && !$r(s) && (y = p.style(s, u)),
          !S.pixelBoxStyles() && wa.test(y) && Ad.test(u) && ((d = x.width), (v = x.minWidth), (m = x.maxWidth), (x.minWidth = x.maxWidth = x.width = y), (y = l.width), (x.width = d), (x.minWidth = v), (x.maxWidth = m))),
        y !== void 0 ? y + "" : y
      );
    }
    function Vo(s, u) {
      return {
        get: function () {
          if (s()) {
            delete this.get;
            return;
          }
          return (this.get = u).apply(this, arguments);
        },
      };
    }
    var Ko = ["Webkit", "Moz", "ms"],
      Jo = N.createElement("div").style,
      Qo = {};
    function kd(s) {
      for (var u = s[0].toUpperCase() + s.slice(1), l = Ko.length; l--; ) if (((s = Ko[l] + u), s in Jo)) return s;
    }
    function Sa(s) {
      var u = p.cssProps[s] || Qo[s];
      return u || (s in Jo ? s : (Qo[s] = kd(s) || s));
    }
    var Pd = /^(none|table(?!-c[ea]).+)/,
      Zo = /^--/,
      Id = { position: "absolute", visibility: "hidden", display: "block" },
      eu = { letterSpacing: "0", fontWeight: "400" };
    function tu(s, u, l) {
      var d = vn.exec(u);
      return d ? Math.max(0, d[2] - (l || 0)) + (d[3] || "px") : u;
    }
    function Ta(s, u, l, d, v, m) {
      var y = u === "width" ? 1 : 0,
        x = 0,
        C = 0;
      if (l === (d ? "border" : "content")) return 0;
      for (; y < 4; y += 2)
        l === "margin" && (C += p.css(s, l + Bt[y], !0, v)),
          d
            ? (l === "content" && (C -= p.css(s, "padding" + Bt[y], !0, v)), l !== "margin" && (C -= p.css(s, "border" + Bt[y] + "Width", !0, v)))
            : ((C += p.css(s, "padding" + Bt[y], !0, v)), l !== "padding" ? (C += p.css(s, "border" + Bt[y] + "Width", !0, v)) : (x += p.css(s, "border" + Bt[y] + "Width", !0, v)));
      return !d && m >= 0 && (C += Math.max(0, Math.ceil(s["offset" + u[0].toUpperCase() + u.slice(1)] - m - C - x - 0.5)) || 0), C;
    }
    function ru(s, u, l) {
      var d = Zn(s),
        v = !S.boxSizingReliable() || l,
        m = v && p.css(s, "boxSizing", !1, d) === "border-box",
        y = m,
        x = mn(s, u, d),
        C = "offset" + u[0].toUpperCase() + u.slice(1);
      if (wa.test(x)) {
        if (!l) return x;
        x = "auto";
      }
      return (
        ((!S.boxSizingReliable() && m) || (!S.reliableTrDimensions() && O(s, "tr")) || x === "auto" || (!parseFloat(x) && p.css(s, "display", !1, d) === "inline")) && s.getClientRects().length && ((m = p.css(s, "boxSizing", !1, d) === "border-box"), (y = C in s), y && (x = s[C])),
        (x = parseFloat(x) || 0),
        x + Ta(s, u, l || (m ? "border" : "content"), y, d, x) + "px"
      );
    }
    p.extend({
      cssHooks: {
        opacity: {
          get: function (s, u) {
            if (u) {
              var l = mn(s, "opacity");
              return l === "" ? "1" : l;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {},
      style: function (s, u, l, d) {
        if (!(!s || s.nodeType === 3 || s.nodeType === 8 || !s.style)) {
          var v,
            m,
            y,
            x = Mt(u),
            C = Zo.test(u),
            P = s.style;
          if ((C || (u = Sa(x)), (y = p.cssHooks[u] || p.cssHooks[x]), l !== void 0)) {
            if (((m = typeof l), m === "string" && (v = vn.exec(l)) && v[1] && ((l = Ho(s, u, v)), (m = "number")), l == null || l !== l)) return;
            m === "number" && !C && (l += (v && v[3]) || (p.cssNumber[x] ? "" : "px")), !S.clearCloneStyle && l === "" && u.indexOf("background") === 0 && (P[u] = "inherit"), (!y || !("set" in y) || (l = y.set(s, l, d)) !== void 0) && (C ? P.setProperty(u, l) : (P[u] = l));
          } else return y && "get" in y && (v = y.get(s, !1, d)) !== void 0 ? v : P[u];
        }
      },
      css: function (s, u, l, d) {
        var v,
          m,
          y,
          x = Mt(u),
          C = Zo.test(u);
        return C || (u = Sa(x)), (y = p.cssHooks[u] || p.cssHooks[x]), y && "get" in y && (v = y.get(s, !0, l)), v === void 0 && (v = mn(s, u, d)), v === "normal" && u in eu && (v = eu[u]), l === "" || l ? ((m = parseFloat(v)), l === !0 || isFinite(m) ? m || 0 : v) : v;
      },
    }),
      p.each(["height", "width"], function (s, u) {
        p.cssHooks[u] = {
          get: function (l, d, v) {
            if (d)
              return Pd.test(p.css(l, "display")) && (!l.getClientRects().length || !l.getBoundingClientRect().width)
                ? Yo(l, Id, function () {
                    return ru(l, u, v);
                  })
                : ru(l, u, v);
          },
          set: function (l, d, v) {
            var m,
              y = Zn(l),
              x = !S.scrollboxSize() && y.position === "absolute",
              C = x || v,
              P = C && p.css(l, "boxSizing", !1, y) === "border-box",
              $ = v ? Ta(l, u, v, P, y) : 0;
            return P && x && ($ -= Math.ceil(l["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(y[u]) - Ta(l, u, "border", !1, y) - 0.5)), $ && (m = vn.exec(d)) && (m[3] || "px") !== "px" && ((l.style[u] = d), (d = p.css(l, u))), tu(l, d, $);
          },
        };
      }),
      (p.cssHooks.marginLeft = Vo(S.reliableMarginLeft, function (s, u) {
        if (u)
          return (
            (parseFloat(mn(s, "marginLeft")) ||
              s.getBoundingClientRect().left -
                Yo(s, { marginLeft: 0 }, function () {
                  return s.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      p.each({ margin: "", padding: "", border: "Width" }, function (s, u) {
        (p.cssHooks[s + u] = {
          expand: function (l) {
            for (var d = 0, v = {}, m = typeof l == "string" ? l.split(" ") : [l]; d < 4; d++) v[s + Bt[d] + u] = m[d] || m[d - 2] || m[0];
            return v;
          },
        }),
          s !== "margin" && (p.cssHooks[s + u].set = tu);
      }),
      p.fn.extend({
        css: function (s, u) {
          return tt(
            this,
            function (l, d, v) {
              var m,
                y,
                x = {},
                C = 0;
              if (Array.isArray(d)) {
                for (m = Zn(l), y = d.length; C < y; C++) x[d[C]] = p.css(l, d[C], !1, m);
                return x;
              }
              return v !== void 0 ? p.style(l, d, v) : p.css(l, d);
            },
            s,
            u,
            arguments.length > 1
          );
        },
      });
    function it(s, u, l, d, v) {
      return new it.prototype.init(s, u, l, d, v);
    }
    (p.Tween = it),
      (it.prototype = {
        constructor: it,
        init: function (s, u, l, d, v, m) {
          (this.elem = s), (this.prop = l), (this.easing = v || p.easing._default), (this.options = u), (this.start = this.now = this.cur()), (this.end = d), (this.unit = m || (p.cssNumber[l] ? "" : "px"));
        },
        cur: function () {
          var s = it.propHooks[this.prop];
          return s && s.get ? s.get(this) : it.propHooks._default.get(this);
        },
        run: function (s) {
          var u,
            l = it.propHooks[this.prop];
          return (
            this.options.duration ? (this.pos = u = p.easing[this.easing](s, this.options.duration * s, 0, 1, this.options.duration)) : (this.pos = u = s),
            (this.now = (this.end - this.start) * u + this.start),
            this.options.step && this.options.step.call(this.elem, this.now, this),
            l && l.set ? l.set(this) : it.propHooks._default.set(this),
            this
          );
        },
      }),
      (it.prototype.init.prototype = it.prototype),
      (it.propHooks = {
        _default: {
          get: function (s) {
            var u;
            return s.elem.nodeType !== 1 || (s.elem[s.prop] != null && s.elem.style[s.prop] == null) ? s.elem[s.prop] : ((u = p.css(s.elem, s.prop, "")), !u || u === "auto" ? 0 : u);
          },
          set: function (s) {
            p.fx.step[s.prop] ? p.fx.step[s.prop](s) : s.elem.nodeType === 1 && (p.cssHooks[s.prop] || s.elem.style[Sa(s.prop)] != null) ? p.style(s.elem, s.prop, s.now + s.unit) : (s.elem[s.prop] = s.now);
          },
        },
      }),
      (it.propHooks.scrollTop = it.propHooks.scrollLeft =
        {
          set: function (s) {
            s.elem.nodeType && s.elem.parentNode && (s.elem[s.prop] = s.now);
          },
        }),
      (p.easing = {
        linear: function (s) {
          return s;
        },
        swing: function (s) {
          return 0.5 - Math.cos(s * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (p.fx = it.prototype.init),
      (p.fx.step = {});
    var Br,
      ei,
      Nd = /^(?:toggle|show|hide)$/,
      Rd = /queueHooks$/;
    function Ea() {
      ei && (N.hidden === !1 && t.requestAnimationFrame ? t.requestAnimationFrame(Ea) : t.setTimeout(Ea, p.fx.interval), p.fx.tick());
    }
    function nu() {
      return (
        t.setTimeout(function () {
          Br = void 0;
        }),
        (Br = Date.now())
      );
    }
    function ti(s, u) {
      var l,
        d = 0,
        v = { height: s };
      for (u = u ? 1 : 0; d < 4; d += 2 - u) (l = Bt[d]), (v["margin" + l] = v["padding" + l] = s);
      return u && (v.opacity = v.width = s), v;
    }
    function iu(s, u, l) {
      for (var d, v = (Tt.tweeners[u] || []).concat(Tt.tweeners["*"]), m = 0, y = v.length; m < y; m++) if ((d = v[m].call(l, u, s))) return d;
    }
    function Ld(s, u, l) {
      var d,
        v,
        m,
        y,
        x,
        C,
        P,
        $,
        G = "width" in u || "height" in u,
        M = this,
        F = {},
        oe = s.style,
        Ee = s.nodeType && Jn(s),
        ue = me.get(s, "fxshow");
      l.queue ||
        ((y = p._queueHooks(s, "fx")),
        y.unqueued == null &&
          ((y.unqueued = 0),
          (x = y.empty.fire),
          (y.empty.fire = function () {
            y.unqueued || x();
          })),
        y.unqueued++,
        M.always(function () {
          M.always(function () {
            y.unqueued--, p.queue(s, "fx").length || y.empty.fire();
          });
        }));
      for (d in u)
        if (((v = u[d]), Nd.test(v))) {
          if ((delete u[d], (m = m || v === "toggle"), v === (Ee ? "hide" : "show")))
            if (v === "show" && ue && ue[d] !== void 0) Ee = !0;
            else continue;
          F[d] = (ue && ue[d]) || p.style(s, d);
        }
      if (((C = !p.isEmptyObject(u)), !(!C && p.isEmptyObject(F)))) {
        G &&
          s.nodeType === 1 &&
          ((l.overflow = [oe.overflow, oe.overflowX, oe.overflowY]),
          (P = ue && ue.display),
          P == null && (P = me.get(s, "display")),
          ($ = p.css(s, "display")),
          $ === "none" && (P ? ($ = P) : (Dr([s], !0), (P = s.style.display || P), ($ = p.css(s, "display")), Dr([s]))),
          ($ === "inline" || ($ === "inline-block" && P != null)) &&
            p.css(s, "float") === "none" &&
            (C ||
              (M.done(function () {
                oe.display = P;
              }),
              P == null && (($ = oe.display), (P = $ === "none" ? "" : $))),
            (oe.display = "inline-block"))),
          l.overflow &&
            ((oe.overflow = "hidden"),
            M.always(function () {
              (oe.overflow = l.overflow[0]), (oe.overflowX = l.overflow[1]), (oe.overflowY = l.overflow[2]);
            })),
          (C = !1);
        for (d in F)
          C ||
            (ue ? "hidden" in ue && (Ee = ue.hidden) : (ue = me.access(s, "fxshow", { display: P })),
            m && (ue.hidden = !Ee),
            Ee && Dr([s], !0),
            M.done(function () {
              Ee || Dr([s]), me.remove(s, "fxshow");
              for (d in F) p.style(s, d, F[d]);
            })),
            (C = iu(Ee ? ue[d] : 0, d, M)),
            d in ue || ((ue[d] = C.start), Ee && ((C.end = C.start), (C.start = 0)));
      }
    }
    function Md(s, u) {
      var l, d, v, m, y;
      for (l in s)
        if (((d = Mt(l)), (v = u[d]), (m = s[l]), Array.isArray(m) && ((v = m[1]), (m = s[l] = m[0])), l !== d && ((s[d] = m), delete s[l]), (y = p.cssHooks[d]), y && "expand" in y)) {
          (m = y.expand(m)), delete s[d];
          for (l in m) l in s || ((s[l] = m[l]), (u[l] = v));
        } else u[d] = v;
    }
    function Tt(s, u, l) {
      var d,
        v,
        m = 0,
        y = Tt.prefilters.length,
        x = p.Deferred().always(function () {
          delete C.elem;
        }),
        C = function () {
          if (v) return !1;
          for (var G = Br || nu(), M = Math.max(0, P.startTime + P.duration - G), F = M / P.duration || 0, oe = 1 - F, Ee = 0, ue = P.tweens.length; Ee < ue; Ee++) P.tweens[Ee].run(oe);
          return x.notifyWith(s, [P, oe, M]), oe < 1 && ue ? M : (ue || x.notifyWith(s, [P, 1, 0]), x.resolveWith(s, [P]), !1);
        },
        P = x.promise({
          elem: s,
          props: p.extend({}, u),
          opts: p.extend(!0, { specialEasing: {}, easing: p.easing._default }, l),
          originalProperties: u,
          originalOptions: l,
          startTime: Br || nu(),
          duration: l.duration,
          tweens: [],
          createTween: function (G, M) {
            var F = p.Tween(s, P.opts, G, M, P.opts.specialEasing[G] || P.opts.easing);
            return P.tweens.push(F), F;
          },
          stop: function (G) {
            var M = 0,
              F = G ? P.tweens.length : 0;
            if (v) return this;
            for (v = !0; M < F; M++) P.tweens[M].run(1);
            return G ? (x.notifyWith(s, [P, 1, 0]), x.resolveWith(s, [P, G])) : x.rejectWith(s, [P, G]), this;
          },
        }),
        $ = P.props;
      for (Md($, P.opts.specialEasing); m < y; m++) if (((d = Tt.prefilters[m].call(P, s, $, P.opts)), d)) return T(d.stop) && (p._queueHooks(P.elem, P.opts.queue).stop = d.stop.bind(d)), d;
      return p.map($, iu, P), T(P.opts.start) && P.opts.start.call(s, P), P.progress(P.opts.progress).done(P.opts.done, P.opts.complete).fail(P.opts.fail).always(P.opts.always), p.fx.timer(p.extend(C, { elem: s, anim: P, queue: P.opts.queue })), P;
    }
    (p.Animation = p.extend(Tt, {
      tweeners: {
        "*": [
          function (s, u) {
            var l = this.createTween(s, u);
            return Ho(l.elem, s, vn.exec(u), l), l;
          },
        ],
      },
      tweener: function (s, u) {
        T(s) ? ((u = s), (s = ["*"])) : (s = s.match(V));
        for (var l, d = 0, v = s.length; d < v; d++) (l = s[d]), (Tt.tweeners[l] = Tt.tweeners[l] || []), Tt.tweeners[l].unshift(u);
      },
      prefilters: [Ld],
      prefilter: function (s, u) {
        u ? Tt.prefilters.unshift(s) : Tt.prefilters.push(s);
      },
    })),
      (p.speed = function (s, u, l) {
        var d = s && typeof s == "object" ? p.extend({}, s) : { complete: l || (!l && u) || (T(s) && s), duration: s, easing: (l && u) || (u && !T(u) && u) };
        return (
          p.fx.off ? (d.duration = 0) : typeof d.duration != "number" && (d.duration in p.fx.speeds ? (d.duration = p.fx.speeds[d.duration]) : (d.duration = p.fx.speeds._default)),
          (d.queue == null || d.queue === !0) && (d.queue = "fx"),
          (d.old = d.complete),
          (d.complete = function () {
            T(d.old) && d.old.call(this), d.queue && p.dequeue(this, d.queue);
          }),
          d
        );
      }),
      p.fn.extend({
        fadeTo: function (s, u, l, d) {
          return this.filter(Jn).css("opacity", 0).show().end().animate({ opacity: u }, s, l, d);
        },
        animate: function (s, u, l, d) {
          var v = p.isEmptyObject(s),
            m = p.speed(u, l, d),
            y = function () {
              var x = Tt(this, p.extend({}, s), m);
              (v || me.get(this, "finish")) && x.stop(!0);
            };
          return (y.finish = y), v || m.queue === !1 ? this.each(y) : this.queue(m.queue, y);
        },
        stop: function (s, u, l) {
          var d = function (v) {
            var m = v.stop;
            delete v.stop, m(l);
          };
          return (
            typeof s != "string" && ((l = u), (u = s), (s = void 0)),
            u && this.queue(s || "fx", []),
            this.each(function () {
              var v = !0,
                m = s != null && s + "queueHooks",
                y = p.timers,
                x = me.get(this);
              if (m) x[m] && x[m].stop && d(x[m]);
              else for (m in x) x[m] && x[m].stop && Rd.test(m) && d(x[m]);
              for (m = y.length; m--; ) y[m].elem === this && (s == null || y[m].queue === s) && (y[m].anim.stop(l), (v = !1), y.splice(m, 1));
              (v || !l) && p.dequeue(this, s);
            })
          );
        },
        finish: function (s) {
          return (
            s !== !1 && (s = s || "fx"),
            this.each(function () {
              var u,
                l = me.get(this),
                d = l[s + "queue"],
                v = l[s + "queueHooks"],
                m = p.timers,
                y = d ? d.length : 0;
              for (l.finish = !0, p.queue(this, s, []), v && v.stop && v.stop.call(this, !0), u = m.length; u--; ) m[u].elem === this && m[u].queue === s && (m[u].anim.stop(!0), m.splice(u, 1));
              for (u = 0; u < y; u++) d[u] && d[u].finish && d[u].finish.call(this);
              delete l.finish;
            })
          );
        },
      }),
      p.each(["toggle", "show", "hide"], function (s, u) {
        var l = p.fn[u];
        p.fn[u] = function (d, v, m) {
          return d == null || typeof d == "boolean" ? l.apply(this, arguments) : this.animate(ti(u, !0), d, v, m);
        };
      }),
      p.each({ slideDown: ti("show"), slideUp: ti("hide"), slideToggle: ti("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (s, u) {
        p.fn[s] = function (l, d, v) {
          return this.animate(u, l, d, v);
        };
      }),
      (p.timers = []),
      (p.fx.tick = function () {
        var s,
          u = 0,
          l = p.timers;
        for (Br = Date.now(); u < l.length; u++) (s = l[u]), !s() && l[u] === s && l.splice(u--, 1);
        l.length || p.fx.stop(), (Br = void 0);
      }),
      (p.fx.timer = function (s) {
        p.timers.push(s), p.fx.start();
      }),
      (p.fx.interval = 13),
      (p.fx.start = function () {
        ei || ((ei = !0), Ea());
      }),
      (p.fx.stop = function () {
        ei = null;
      }),
      (p.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (p.fn.delay = function (s, u) {
        return (
          (s = (p.fx && p.fx.speeds[s]) || s),
          (u = u || "fx"),
          this.queue(u, function (l, d) {
            var v = t.setTimeout(l, s);
            d.stop = function () {
              t.clearTimeout(v);
            };
          })
        );
      }),
      (function () {
        var s = N.createElement("input"),
          u = N.createElement("select"),
          l = u.appendChild(N.createElement("option"));
        (s.type = "checkbox"), (S.checkOn = s.value !== ""), (S.optSelected = l.selected), (s = N.createElement("input")), (s.value = "t"), (s.type = "radio"), (S.radioValue = s.value === "t");
      })();
    var au,
      yn = p.expr.attrHandle;
    p.fn.extend({
      attr: function (s, u) {
        return tt(this, p.attr, s, u, arguments.length > 1);
      },
      removeAttr: function (s) {
        return this.each(function () {
          p.removeAttr(this, s);
        });
      },
    }),
      p.extend({
        attr: function (s, u, l) {
          var d,
            v,
            m = s.nodeType;
          if (!(m === 3 || m === 8 || m === 2)) {
            if (typeof s.getAttribute == "undefined") return p.prop(s, u, l);
            if (((m !== 1 || !p.isXMLDoc(s)) && (v = p.attrHooks[u.toLowerCase()] || (p.expr.match.bool.test(u) ? au : void 0)), l !== void 0)) {
              if (l === null) {
                p.removeAttr(s, u);
                return;
              }
              return v && "set" in v && (d = v.set(s, l, u)) !== void 0 ? d : (s.setAttribute(u, l + ""), l);
            }
            return v && "get" in v && (d = v.get(s, u)) !== null ? d : ((d = p.find.attr(s, u)), d == null ? void 0 : d);
          }
        },
        attrHooks: {
          type: {
            set: function (s, u) {
              if (!S.radioValue && u === "radio" && O(s, "input")) {
                var l = s.value;
                return s.setAttribute("type", u), l && (s.value = l), u;
              }
            },
          },
        },
        removeAttr: function (s, u) {
          var l,
            d = 0,
            v = u && u.match(V);
          if (v && s.nodeType === 1) for (; (l = v[d++]); ) s.removeAttribute(l);
        },
      }),
      (au = {
        set: function (s, u, l) {
          return u === !1 ? p.removeAttr(s, l) : s.setAttribute(l, l), l;
        },
      }),
      p.each(p.expr.match.bool.source.match(/\w+/g), function (s, u) {
        var l = yn[u] || p.find.attr;
        yn[u] = function (d, v, m) {
          var y,
            x,
            C = v.toLowerCase();
          return m || ((x = yn[C]), (yn[C] = y), (y = l(d, v, m) != null ? C : null), (yn[C] = x)), y;
        };
      });
    var $d = /^(?:input|select|textarea|button)$/i,
      Dd = /^(?:a|area)$/i;
    p.fn.extend({
      prop: function (s, u) {
        return tt(this, p.prop, s, u, arguments.length > 1);
      },
      removeProp: function (s) {
        return this.each(function () {
          delete this[p.propFix[s] || s];
        });
      },
    }),
      p.extend({
        prop: function (s, u, l) {
          var d,
            v,
            m = s.nodeType;
          if (!(m === 3 || m === 8 || m === 2)) return (m !== 1 || !p.isXMLDoc(s)) && ((u = p.propFix[u] || u), (v = p.propHooks[u])), l !== void 0 ? (v && "set" in v && (d = v.set(s, l, u)) !== void 0 ? d : (s[u] = l)) : v && "get" in v && (d = v.get(s, u)) !== null ? d : s[u];
        },
        propHooks: {
          tabIndex: {
            get: function (s) {
              var u = p.find.attr(s, "tabindex");
              return u ? parseInt(u, 10) : $d.test(s.nodeName) || (Dd.test(s.nodeName) && s.href) ? 0 : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      S.optSelected ||
        (p.propHooks.selected = {
          get: function (s) {
            var u = s.parentNode;
            return u && u.parentNode && u.parentNode.selectedIndex, null;
          },
          set: function (s) {
            var u = s.parentNode;
            u && (u.selectedIndex, u.parentNode && u.parentNode.selectedIndex);
          },
        }),
      p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        p.propFix[this.toLowerCase()] = this;
      });
    function lr(s) {
      var u = s.match(V) || [];
      return u.join(" ");
    }
    function cr(s) {
      return (s.getAttribute && s.getAttribute("class")) || "";
    }
    function xa(s) {
      return Array.isArray(s) ? s : typeof s == "string" ? s.match(V) || [] : [];
    }
    p.fn.extend({
      addClass: function (s) {
        var u,
          l,
          d,
          v,
          m,
          y,
          x,
          C = 0;
        if (T(s))
          return this.each(function (P) {
            p(this).addClass(s.call(this, P, cr(this)));
          });
        if (((u = xa(s)), u.length)) {
          for (; (l = this[C++]); )
            if (((v = cr(l)), (d = l.nodeType === 1 && " " + lr(v) + " "), d)) {
              for (y = 0; (m = u[y++]); ) d.indexOf(" " + m + " ") < 0 && (d += m + " ");
              (x = lr(d)), v !== x && l.setAttribute("class", x);
            }
        }
        return this;
      },
      removeClass: function (s) {
        var u,
          l,
          d,
          v,
          m,
          y,
          x,
          C = 0;
        if (T(s))
          return this.each(function (P) {
            p(this).removeClass(s.call(this, P, cr(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if (((u = xa(s)), u.length)) {
          for (; (l = this[C++]); )
            if (((v = cr(l)), (d = l.nodeType === 1 && " " + lr(v) + " "), d)) {
              for (y = 0; (m = u[y++]); ) for (; d.indexOf(" " + m + " ") > -1; ) d = d.replace(" " + m + " ", " ");
              (x = lr(d)), v !== x && l.setAttribute("class", x);
            }
        }
        return this;
      },
      toggleClass: function (s, u) {
        var l = typeof s,
          d = l === "string" || Array.isArray(s);
        return typeof u == "boolean" && d
          ? u
            ? this.addClass(s)
            : this.removeClass(s)
          : T(s)
          ? this.each(function (v) {
              p(this).toggleClass(s.call(this, v, cr(this), u), u);
            })
          : this.each(function () {
              var v, m, y, x;
              if (d) for (m = 0, y = p(this), x = xa(s); (v = x[m++]); ) y.hasClass(v) ? y.removeClass(v) : y.addClass(v);
              else (s === void 0 || l === "boolean") && ((v = cr(this)), v && me.set(this, "__className__", v), this.setAttribute && this.setAttribute("class", v || s === !1 ? "" : me.get(this, "__className__") || ""));
            });
      },
      hasClass: function (s) {
        var u,
          l,
          d = 0;
        for (u = " " + s + " "; (l = this[d++]); ) if (l.nodeType === 1 && (" " + lr(cr(l)) + " ").indexOf(u) > -1) return !0;
        return !1;
      },
    });
    var jd = /\r/g;
    p.fn.extend({
      val: function (s) {
        var u,
          l,
          d,
          v = this[0];
        return arguments.length
          ? ((d = T(s)),
            this.each(function (m) {
              var y;
              this.nodeType === 1 &&
                (d ? (y = s.call(this, m, p(this).val())) : (y = s),
                y == null
                  ? (y = "")
                  : typeof y == "number"
                  ? (y += "")
                  : Array.isArray(y) &&
                    (y = p.map(y, function (x) {
                      return x == null ? "" : x + "";
                    })),
                (u = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]),
                (!u || !("set" in u) || u.set(this, y, "value") === void 0) && (this.value = y));
            }))
          : v
          ? ((u = p.valHooks[v.type] || p.valHooks[v.nodeName.toLowerCase()]), u && "get" in u && (l = u.get(v, "value")) !== void 0 ? l : ((l = v.value), typeof l == "string" ? l.replace(jd, "") : l == null ? "" : l))
          : void 0;
      },
    }),
      p.extend({
        valHooks: {
          option: {
            get: function (s) {
              var u = p.find.attr(s, "value");
              return u != null ? u : lr(p.text(s));
            },
          },
          select: {
            get: function (s) {
              var u,
                l,
                d,
                v = s.options,
                m = s.selectedIndex,
                y = s.type === "select-one",
                x = y ? null : [],
                C = y ? m + 1 : v.length;
              for (m < 0 ? (d = C) : (d = y ? m : 0); d < C; d++)
                if (((l = v[d]), (l.selected || d === m) && !l.disabled && (!l.parentNode.disabled || !O(l.parentNode, "optgroup")))) {
                  if (((u = p(l).val()), y)) return u;
                  x.push(u);
                }
              return x;
            },
            set: function (s, u) {
              for (var l, d, v = s.options, m = p.makeArray(u), y = v.length; y--; ) (d = v[y]), (d.selected = p.inArray(p.valHooks.option.get(d), m) > -1) && (l = !0);
              return l || (s.selectedIndex = -1), m;
            },
          },
        },
      }),
      p.each(["radio", "checkbox"], function () {
        (p.valHooks[this] = {
          set: function (s, u) {
            if (Array.isArray(u)) return (s.checked = p.inArray(p(s).val(), u) > -1);
          },
        }),
          S.checkOn ||
            (p.valHooks[this].get = function (s) {
              return s.getAttribute("value") === null ? "on" : s.value;
            });
      }),
      (S.focusin = "onfocusin" in t);
    var su = /^(?:focusinfocus|focusoutblur)$/,
      ou = function (s) {
        s.stopPropagation();
      };
    p.extend(p.event, {
      trigger: function (s, u, l, d) {
        var v,
          m,
          y,
          x,
          C,
          P,
          $,
          G,
          M = [l || N],
          F = b.call(s, "type") ? s.type : s,
          oe = b.call(s, "namespace") ? s.namespace.split(".") : [];
        if (
          ((m = G = y = l = l || N),
          !(l.nodeType === 3 || l.nodeType === 8) &&
            !su.test(F + p.event.triggered) &&
            (F.indexOf(".") > -1 && ((oe = F.split(".")), (F = oe.shift()), oe.sort()),
            (C = F.indexOf(":") < 0 && "on" + F),
            (s = s[p.expando] ? s : new p.Event(F, typeof s == "object" && s)),
            (s.isTrigger = d ? 2 : 3),
            (s.namespace = oe.join(".")),
            (s.rnamespace = s.namespace ? new RegExp("(^|\\.)" + oe.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
            (s.result = void 0),
            s.target || (s.target = l),
            (u = u == null ? [s] : p.makeArray(u, [s])),
            ($ = p.event.special[F] || {}),
            !(!d && $.trigger && $.trigger.apply(l, u) === !1)))
        ) {
          if (!d && !$.noBubble && !L(l)) {
            for (x = $.delegateType || F, su.test(x + F) || (m = m.parentNode); m; m = m.parentNode) M.push(m), (y = m);
            y === (l.ownerDocument || N) && M.push(y.defaultView || y.parentWindow || t);
          }
          for (v = 0; (m = M[v++]) && !s.isPropagationStopped(); )
            (G = m), (s.type = v > 1 ? x : $.bindType || F), (P = (me.get(m, "events") || Object.create(null))[s.type] && me.get(m, "handle")), P && P.apply(m, u), (P = C && m[C]), P && P.apply && pn(m) && ((s.result = P.apply(m, u)), s.result === !1 && s.preventDefault());
          return (
            (s.type = F),
            !d &&
              !s.isDefaultPrevented() &&
              (!$._default || $._default.apply(M.pop(), u) === !1) &&
              pn(l) &&
              C &&
              T(l[F]) &&
              !L(l) &&
              ((y = l[C]), y && (l[C] = null), (p.event.triggered = F), s.isPropagationStopped() && G.addEventListener(F, ou), l[F](), s.isPropagationStopped() && G.removeEventListener(F, ou), (p.event.triggered = void 0), y && (l[C] = y)),
            s.result
          );
        }
      },
      simulate: function (s, u, l) {
        var d = p.extend(new p.Event(), l, { type: s, isSimulated: !0 });
        p.event.trigger(d, null, u);
      },
    }),
      p.fn.extend({
        trigger: function (s, u) {
          return this.each(function () {
            p.event.trigger(s, u, this);
          });
        },
        triggerHandler: function (s, u) {
          var l = this[0];
          if (l) return p.event.trigger(s, u, l, !0);
        },
      }),
      S.focusin ||
        p.each({ focus: "focusin", blur: "focusout" }, function (s, u) {
          var l = function (d) {
            p.event.simulate(u, d.target, p.event.fix(d));
          };
          p.event.special[u] = {
            setup: function () {
              var d = this.ownerDocument || this.document || this,
                v = me.access(d, u);
              v || d.addEventListener(s, l, !0), me.access(d, u, (v || 0) + 1);
            },
            teardown: function () {
              var d = this.ownerDocument || this.document || this,
                v = me.access(d, u) - 1;
              v ? me.access(d, u, v) : (d.removeEventListener(s, l, !0), me.remove(d, u));
            },
          };
        });
    var bn = t.location,
      uu = { guid: Date.now() },
      Ca = /\?/;
    p.parseXML = function (s) {
      var u, l;
      if (!s || typeof s != "string") return null;
      try {
        u = new t.DOMParser().parseFromString(s, "text/xml");
      } catch {}
      return (
        (l = u && u.getElementsByTagName("parsererror")[0]),
        (!u || l) &&
          p.error(
            "Invalid XML: " +
              (l
                ? p.map(l.childNodes, function (d) {
                    return d.textContent;
                  }).join(`
`)
                : s)
          ),
        u
      );
    };
    var Hd = /\[\]$/,
      fu = /\r?\n/g,
      Fd = /^(?:submit|button|image|reset|file)$/i,
      Bd = /^(?:input|select|textarea|keygen)/i;
    function Oa(s, u, l, d) {
      var v;
      if (Array.isArray(u))
        p.each(u, function (m, y) {
          l || Hd.test(s) ? d(s, y) : Oa(s + "[" + (typeof y == "object" && y != null ? m : "") + "]", y, l, d);
        });
      else if (!l && q(u) === "object") for (v in u) Oa(s + "[" + v + "]", u[v], l, d);
      else d(s, u);
    }
    (p.param = function (s, u) {
      var l,
        d = [],
        v = function (m, y) {
          var x = T(y) ? y() : y;
          d[d.length] = encodeURIComponent(m) + "=" + encodeURIComponent(x == null ? "" : x);
        };
      if (s == null) return "";
      if (Array.isArray(s) || (s.jquery && !p.isPlainObject(s)))
        p.each(s, function () {
          v(this.name, this.value);
        });
      else for (l in s) Oa(l, s[l], u, v);
      return d.join("&");
    }),
      p.fn.extend({
        serialize: function () {
          return p.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var s = p.prop(this, "elements");
            return s ? p.makeArray(s) : this;
          })
            .filter(function () {
              var s = this.type;
              return this.name && !p(this).is(":disabled") && Bd.test(this.nodeName) && !Fd.test(s) && (this.checked || !gn.test(s));
            })
            .map(function (s, u) {
              var l = p(this).val();
              return l == null
                ? null
                : Array.isArray(l)
                ? p.map(l, function (d) {
                    return {
                      name: u.name,
                      value: d.replace(
                        fu,
                        `\r
`
                      ),
                    };
                  })
                : {
                    name: u.name,
                    value: l.replace(
                      fu,
                      `\r
`
                    ),
                  };
            })
            .get();
        },
      });
    var qd = /%20/g,
      zd = /#.*$/,
      Ud = /([?&])_=[^&]*/,
      Wd = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Gd = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Xd = /^(?:GET|HEAD)$/,
      Yd = /^\/\//,
      lu = {},
      Aa = {},
      cu = "*/".concat("*"),
      ka = N.createElement("a");
    ka.href = bn.href;
    function du(s) {
      return function (u, l) {
        typeof u != "string" && ((l = u), (u = "*"));
        var d,
          v = 0,
          m = u.toLowerCase().match(V) || [];
        if (T(l)) for (; (d = m[v++]); ) d[0] === "+" ? ((d = d.slice(1) || "*"), (s[d] = s[d] || []).unshift(l)) : (s[d] = s[d] || []).push(l);
      };
    }
    function pu(s, u, l, d) {
      var v = {},
        m = s === Aa;
      function y(x) {
        var C;
        return (
          (v[x] = !0),
          p.each(s[x] || [], function (P, $) {
            var G = $(u, l, d);
            if (typeof G == "string" && !m && !v[G]) return u.dataTypes.unshift(G), y(G), !1;
            if (m) return !(C = G);
          }),
          C
        );
      }
      return y(u.dataTypes[0]) || (!v["*"] && y("*"));
    }
    function Pa(s, u) {
      var l,
        d,
        v = p.ajaxSettings.flatOptions || {};
      for (l in u) u[l] !== void 0 && ((v[l] ? s : d || (d = {}))[l] = u[l]);
      return d && p.extend(!0, s, d), s;
    }
    function Vd(s, u, l) {
      for (var d, v, m, y, x = s.contents, C = s.dataTypes; C[0] === "*"; ) C.shift(), d === void 0 && (d = s.mimeType || u.getResponseHeader("Content-Type"));
      if (d) {
        for (v in x)
          if (x[v] && x[v].test(d)) {
            C.unshift(v);
            break;
          }
      }
      if (C[0] in l) m = C[0];
      else {
        for (v in l) {
          if (!C[0] || s.converters[v + " " + C[0]]) {
            m = v;
            break;
          }
          y || (y = v);
        }
        m = m || y;
      }
      if (m) return m !== C[0] && C.unshift(m), l[m];
    }
    function Kd(s, u, l, d) {
      var v,
        m,
        y,
        x,
        C,
        P = {},
        $ = s.dataTypes.slice();
      if ($[1]) for (y in s.converters) P[y.toLowerCase()] = s.converters[y];
      for (m = $.shift(); m; )
        if ((s.responseFields[m] && (l[s.responseFields[m]] = u), !C && d && s.dataFilter && (u = s.dataFilter(u, s.dataType)), (C = m), (m = $.shift()), m)) {
          if (m === "*") m = C;
          else if (C !== "*" && C !== m) {
            if (((y = P[C + " " + m] || P["* " + m]), !y)) {
              for (v in P)
                if (((x = v.split(" ")), x[1] === m && ((y = P[C + " " + x[0]] || P["* " + x[0]]), y))) {
                  y === !0 ? (y = P[v]) : P[v] !== !0 && ((m = x[0]), $.unshift(x[1]));
                  break;
                }
            }
            if (y !== !0)
              if (y && s.throws) u = y(u);
              else
                try {
                  u = y(u);
                } catch (G) {
                  return { state: "parsererror", error: y ? G : "No conversion from " + C + " to " + m };
                }
          }
        }
      return { state: "success", data: u };
    }
    p.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bn.href,
        type: "GET",
        isLocal: Gd.test(bn.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: { "*": cu, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": p.parseXML },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (s, u) {
        return u ? Pa(Pa(s, p.ajaxSettings), u) : Pa(p.ajaxSettings, s);
      },
      ajaxPrefilter: du(lu),
      ajaxTransport: du(Aa),
      ajax: function (s, u) {
        typeof s == "object" && ((u = s), (s = void 0)), (u = u || {});
        var l,
          d,
          v,
          m,
          y,
          x,
          C,
          P,
          $,
          G,
          M = p.ajaxSetup({}, u),
          F = M.context || M,
          oe = M.context && (F.nodeType || F.jquery) ? p(F) : p.event,
          Ee = p.Deferred(),
          ue = p.Callbacks("once memory"),
          We = M.statusCode || {},
          qe = {},
          lt = {},
          Pe = "canceled",
          Se = {
            readyState: 0,
            getResponseHeader: function (Oe) {
              var je;
              if (C) {
                if (!m) for (m = {}; (je = Wd.exec(v)); ) m[je[1].toLowerCase() + " "] = (m[je[1].toLowerCase() + " "] || []).concat(je[2]);
                je = m[Oe.toLowerCase() + " "];
              }
              return je == null ? null : je.join(", ");
            },
            getAllResponseHeaders: function () {
              return C ? v : null;
            },
            setRequestHeader: function (Oe, je) {
              return C == null && ((Oe = lt[Oe.toLowerCase()] = lt[Oe.toLowerCase()] || Oe), (qe[Oe] = je)), this;
            },
            overrideMimeType: function (Oe) {
              return C == null && (M.mimeType = Oe), this;
            },
            statusCode: function (Oe) {
              var je;
              if (Oe)
                if (C) Se.always(Oe[Se.status]);
                else for (je in Oe) We[je] = [We[je], Oe[je]];
              return this;
            },
            abort: function (Oe) {
              var je = Oe || Pe;
              return l && l.abort(je), at(0, je), this;
            },
          };
        if ((Ee.promise(Se), (M.url = ((s || M.url || bn.href) + "").replace(Yd, bn.protocol + "//")), (M.type = u.method || u.type || M.method || M.type), (M.dataTypes = (M.dataType || "*").toLowerCase().match(V) || [""]), M.crossDomain == null)) {
          x = N.createElement("a");
          try {
            (x.href = M.url), (x.href = x.href), (M.crossDomain = ka.protocol + "//" + ka.host != x.protocol + "//" + x.host);
          } catch {
            M.crossDomain = !0;
          }
        }
        if ((M.data && M.processData && typeof M.data != "string" && (M.data = p.param(M.data, M.traditional)), pu(lu, M, u, Se), C)) return Se;
        (P = p.event && M.global),
          P && p.active++ === 0 && p.event.trigger("ajaxStart"),
          (M.type = M.type.toUpperCase()),
          (M.hasContent = !Xd.test(M.type)),
          (d = M.url.replace(zd, "")),
          M.hasContent
            ? M.data && M.processData && (M.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (M.data = M.data.replace(qd, "+"))
            : ((G = M.url.slice(d.length)), M.data && (M.processData || typeof M.data == "string") && ((d += (Ca.test(d) ? "&" : "?") + M.data), delete M.data), M.cache === !1 && ((d = d.replace(Ud, "$1")), (G = (Ca.test(d) ? "&" : "?") + "_=" + uu.guid++ + G)), (M.url = d + G)),
          M.ifModified && (p.lastModified[d] && Se.setRequestHeader("If-Modified-Since", p.lastModified[d]), p.etag[d] && Se.setRequestHeader("If-None-Match", p.etag[d])),
          ((M.data && M.hasContent && M.contentType !== !1) || u.contentType) && Se.setRequestHeader("Content-Type", M.contentType),
          Se.setRequestHeader("Accept", M.dataTypes[0] && M.accepts[M.dataTypes[0]] ? M.accepts[M.dataTypes[0]] + (M.dataTypes[0] !== "*" ? ", " + cu + "; q=0.01" : "") : M.accepts["*"]);
        for ($ in M.headers) Se.setRequestHeader($, M.headers[$]);
        if (M.beforeSend && (M.beforeSend.call(F, Se, M) === !1 || C)) return Se.abort();
        if (((Pe = "abort"), ue.add(M.complete), Se.done(M.success), Se.fail(M.error), (l = pu(Aa, M, u, Se)), !l)) at(-1, "No Transport");
        else {
          if (((Se.readyState = 1), P && oe.trigger("ajaxSend", [Se, M]), C)) return Se;
          M.async &&
            M.timeout > 0 &&
            (y = t.setTimeout(function () {
              Se.abort("timeout");
            }, M.timeout));
          try {
            (C = !1), l.send(qe, at);
          } catch (Oe) {
            if (C) throw Oe;
            at(-1, Oe);
          }
        }
        function at(Oe, je, wn, ri) {
          var ct,
            dr,
            pr,
            st,
            Xt,
            wt = je;
          C ||
            ((C = !0),
            y && t.clearTimeout(y),
            (l = void 0),
            (v = ri || ""),
            (Se.readyState = Oe > 0 ? 4 : 0),
            (ct = (Oe >= 200 && Oe < 300) || Oe === 304),
            wn && (st = Vd(M, Se, wn)),
            !ct && p.inArray("script", M.dataTypes) > -1 && p.inArray("json", M.dataTypes) < 0 && (M.converters["text script"] = function () {}),
            (st = Kd(M, st, Se, ct)),
            ct
              ? (M.ifModified && ((Xt = Se.getResponseHeader("Last-Modified")), Xt && (p.lastModified[d] = Xt), (Xt = Se.getResponseHeader("etag")), Xt && (p.etag[d] = Xt)),
                Oe === 204 || M.type === "HEAD" ? (wt = "nocontent") : Oe === 304 ? (wt = "notmodified") : ((wt = st.state), (dr = st.data), (pr = st.error), (ct = !pr)))
              : ((pr = wt), (Oe || !wt) && ((wt = "error"), Oe < 0 && (Oe = 0))),
            (Se.status = Oe),
            (Se.statusText = (je || wt) + ""),
            ct ? Ee.resolveWith(F, [dr, wt, Se]) : Ee.rejectWith(F, [Se, wt, pr]),
            Se.statusCode(We),
            (We = void 0),
            P && oe.trigger(ct ? "ajaxSuccess" : "ajaxError", [Se, M, ct ? dr : pr]),
            ue.fireWith(F, [Se, wt]),
            P && (oe.trigger("ajaxComplete", [Se, M]), --p.active || p.event.trigger("ajaxStop")));
        }
        return Se;
      },
      getJSON: function (s, u, l) {
        return p.get(s, u, l, "json");
      },
      getScript: function (s, u) {
        return p.get(s, void 0, u, "script");
      },
    }),
      p.each(["get", "post"], function (s, u) {
        p[u] = function (l, d, v, m) {
          return T(d) && ((m = m || v), (v = d), (d = void 0)), p.ajax(p.extend({ url: l, type: u, dataType: m, data: d, success: v }, p.isPlainObject(l) && l));
        };
      }),
      p.ajaxPrefilter(function (s) {
        var u;
        for (u in s.headers) u.toLowerCase() === "content-type" && (s.contentType = s.headers[u] || "");
      }),
      (p._evalUrl = function (s, u, l) {
        return p.ajax({
          url: s,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (d) {
            p.globalEval(d, u, l);
          },
        });
      }),
      p.fn.extend({
        wrapAll: function (s) {
          var u;
          return (
            this[0] &&
              (T(s) && (s = s.call(this[0])),
              (u = p(s, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && u.insertBefore(this[0]),
              u
                .map(function () {
                  for (var l = this; l.firstElementChild; ) l = l.firstElementChild;
                  return l;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (s) {
          return T(s)
            ? this.each(function (u) {
                p(this).wrapInner(s.call(this, u));
              })
            : this.each(function () {
                var u = p(this),
                  l = u.contents();
                l.length ? l.wrapAll(s) : u.append(s);
              });
        },
        wrap: function (s) {
          var u = T(s);
          return this.each(function (l) {
            p(this).wrapAll(u ? s.call(this, l) : s);
          });
        },
        unwrap: function (s) {
          return (
            this.parent(s)
              .not("body")
              .each(function () {
                p(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (p.expr.pseudos.hidden = function (s) {
        return !p.expr.pseudos.visible(s);
      }),
      (p.expr.pseudos.visible = function (s) {
        return !!(s.offsetWidth || s.offsetHeight || s.getClientRects().length);
      }),
      (p.ajaxSettings.xhr = function () {
        try {
          return new t.XMLHttpRequest();
        } catch {}
      });
    var Jd = { 0: 200, 1223: 204 },
      _n = p.ajaxSettings.xhr();
    (S.cors = !!_n && "withCredentials" in _n),
      (S.ajax = _n = !!_n),
      p.ajaxTransport(function (s) {
        var u, l;
        if (S.cors || (_n && !s.crossDomain))
          return {
            send: function (d, v) {
              var m,
                y = s.xhr();
              if ((y.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields)) for (m in s.xhrFields) y[m] = s.xhrFields[m];
              s.mimeType && y.overrideMimeType && y.overrideMimeType(s.mimeType), !s.crossDomain && !d["X-Requested-With"] && (d["X-Requested-With"] = "XMLHttpRequest");
              for (m in d) y.setRequestHeader(m, d[m]);
              (u = function (x) {
                return function () {
                  u &&
                    ((u = l = y.onload = y.onerror = y.onabort = y.ontimeout = y.onreadystatechange = null),
                    x === "abort"
                      ? y.abort()
                      : x === "error"
                      ? typeof y.status != "number"
                        ? v(0, "error")
                        : v(y.status, y.statusText)
                      : v(Jd[y.status] || y.status, y.statusText, (y.responseType || "text") !== "text" || typeof y.responseText != "string" ? { binary: y.response } : { text: y.responseText }, y.getAllResponseHeaders()));
                };
              }),
                (y.onload = u()),
                (l = y.onerror = y.ontimeout = u("error")),
                y.onabort !== void 0
                  ? (y.onabort = l)
                  : (y.onreadystatechange = function () {
                      y.readyState === 4 &&
                        t.setTimeout(function () {
                          u && l();
                        });
                    }),
                (u = u("abort"));
              try {
                y.send((s.hasContent && s.data) || null);
              } catch (x) {
                if (u) throw x;
              }
            },
            abort: function () {
              u && u();
            },
          };
      }),
      p.ajaxPrefilter(function (s) {
        s.crossDomain && (s.contents.script = !1);
      }),
      p.ajaxSetup({
        accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (s) {
            return p.globalEval(s), s;
          },
        },
      }),
      p.ajaxPrefilter("script", function (s) {
        s.cache === void 0 && (s.cache = !1), s.crossDomain && (s.type = "GET");
      }),
      p.ajaxTransport("script", function (s) {
        if (s.crossDomain || s.scriptAttrs) {
          var u, l;
          return {
            send: function (d, v) {
              (u = p("<script>")
                .attr(s.scriptAttrs || {})
                .prop({ charset: s.scriptCharset, src: s.url })
                .on(
                  "load error",
                  (l = function (m) {
                    u.remove(), (l = null), m && v(m.type === "error" ? 404 : 200, m.type);
                  })
                )),
                N.head.appendChild(u[0]);
            },
            abort: function () {
              l && l();
            },
          };
        }
      });
    var hu = [],
      Ia = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var s = hu.pop() || p.expando + "_" + uu.guid++;
        return (this[s] = !0), s;
      },
    }),
      p.ajaxPrefilter("json jsonp", function (s, u, l) {
        var d,
          v,
          m,
          y = s.jsonp !== !1 && (Ia.test(s.url) ? "url" : typeof s.data == "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Ia.test(s.data) && "data");
        if (y || s.dataTypes[0] === "jsonp")
          return (
            (d = s.jsonpCallback = T(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback),
            y ? (s[y] = s[y].replace(Ia, "$1" + d)) : s.jsonp !== !1 && (s.url += (Ca.test(s.url) ? "&" : "?") + s.jsonp + "=" + d),
            (s.converters["script json"] = function () {
              return m || p.error(d + " was not called"), m[0];
            }),
            (s.dataTypes[0] = "json"),
            (v = t[d]),
            (t[d] = function () {
              m = arguments;
            }),
            l.always(function () {
              v === void 0 ? p(t).removeProp(d) : (t[d] = v), s[d] && ((s.jsonpCallback = u.jsonpCallback), hu.push(d)), m && T(v) && v(m[0]), (m = v = void 0);
            }),
            "script"
          );
      }),
      (S.createHTMLDocument = (function () {
        var s = N.implementation.createHTMLDocument("").body;
        return (s.innerHTML = "<form></form><form></form>"), s.childNodes.length === 2;
      })()),
      (p.parseHTML = function (s, u, l) {
        if (typeof s != "string") return [];
        typeof u == "boolean" && ((l = u), (u = !1));
        var d, v, m;
        return (
          u || (S.createHTMLDocument ? ((u = N.implementation.createHTMLDocument("")), (d = u.createElement("base")), (d.href = N.location.href), u.head.appendChild(d)) : (u = N)),
          (v = R.exec(s)),
          (m = !l && []),
          v ? [u.createElement(v[1])] : ((v = zo([s], u, m)), m && m.length && p(m).remove(), p.merge([], v.childNodes))
        );
      }),
      (p.fn.load = function (s, u, l) {
        var d,
          v,
          m,
          y = this,
          x = s.indexOf(" ");
        return (
          x > -1 && ((d = lr(s.slice(x))), (s = s.slice(0, x))),
          T(u) ? ((l = u), (u = void 0)) : u && typeof u == "object" && (v = "POST"),
          y.length > 0 &&
            p
              .ajax({ url: s, type: v || "GET", dataType: "html", data: u })
              .done(function (C) {
                (m = arguments), y.html(d ? p("<div>").append(p.parseHTML(C)).find(d) : C);
              })
              .always(
                l &&
                  function (C, P) {
                    y.each(function () {
                      l.apply(this, m || [C.responseText, P, C]);
                    });
                  }
              ),
          this
        );
      }),
      (p.expr.pseudos.animated = function (s) {
        return p.grep(p.timers, function (u) {
          return s === u.elem;
        }).length;
      }),
      (p.offset = {
        setOffset: function (s, u, l) {
          var d,
            v,
            m,
            y,
            x,
            C,
            P,
            $ = p.css(s, "position"),
            G = p(s),
            M = {};
          $ === "static" && (s.style.position = "relative"),
            (x = G.offset()),
            (m = p.css(s, "top")),
            (C = p.css(s, "left")),
            (P = ($ === "absolute" || $ === "fixed") && (m + C).indexOf("auto") > -1),
            P ? ((d = G.position()), (y = d.top), (v = d.left)) : ((y = parseFloat(m) || 0), (v = parseFloat(C) || 0)),
            T(u) && (u = u.call(s, l, p.extend({}, x))),
            u.top != null && (M.top = u.top - x.top + y),
            u.left != null && (M.left = u.left - x.left + v),
            "using" in u ? u.using.call(s, M) : G.css(M);
        },
      }),
      p.fn.extend({
        offset: function (s) {
          if (arguments.length)
            return s === void 0
              ? this
              : this.each(function (v) {
                  p.offset.setOffset(this, s, v);
                });
          var u,
            l,
            d = this[0];
          if (!!d) return d.getClientRects().length ? ((u = d.getBoundingClientRect()), (l = d.ownerDocument.defaultView), { top: u.top + l.pageYOffset, left: u.left + l.pageXOffset }) : { top: 0, left: 0 };
        },
        position: function () {
          if (!!this[0]) {
            var s,
              u,
              l,
              d = this[0],
              v = { top: 0, left: 0 };
            if (p.css(d, "position") === "fixed") u = d.getBoundingClientRect();
            else {
              for (u = this.offset(), l = d.ownerDocument, s = d.offsetParent || l.documentElement; s && (s === l.body || s === l.documentElement) && p.css(s, "position") === "static"; ) s = s.parentNode;
              s && s !== d && s.nodeType === 1 && ((v = p(s).offset()), (v.top += p.css(s, "borderTopWidth", !0)), (v.left += p.css(s, "borderLeftWidth", !0)));
            }
            return { top: u.top - v.top - p.css(d, "marginTop", !0), left: u.left - v.left - p.css(d, "marginLeft", !0) };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (var s = this.offsetParent; s && p.css(s, "position") === "static"; ) s = s.offsetParent;
            return s || fr;
          });
        },
      }),
      p.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (s, u) {
        var l = u === "pageYOffset";
        p.fn[s] = function (d) {
          return tt(
            this,
            function (v, m, y) {
              var x;
              if ((L(v) ? (x = v) : v.nodeType === 9 && (x = v.defaultView), y === void 0)) return x ? x[u] : v[m];
              x ? x.scrollTo(l ? x.pageXOffset : y, l ? y : x.pageYOffset) : (v[m] = y);
            },
            s,
            d,
            arguments.length
          );
        };
      }),
      p.each(["top", "left"], function (s, u) {
        p.cssHooks[u] = Vo(S.pixelPosition, function (l, d) {
          if (d) return (d = mn(l, u)), wa.test(d) ? p(l).position()[u] + "px" : d;
        });
      }),
      p.each({ Height: "height", Width: "width" }, function (s, u) {
        p.each({ padding: "inner" + s, content: u, "": "outer" + s }, function (l, d) {
          p.fn[d] = function (v, m) {
            var y = arguments.length && (l || typeof v != "boolean"),
              x = l || (v === !0 || m === !0 ? "margin" : "border");
            return tt(
              this,
              function (C, P, $) {
                var G;
                return L(C)
                  ? d.indexOf("outer") === 0
                    ? C["inner" + s]
                    : C.document.documentElement["client" + s]
                  : C.nodeType === 9
                  ? ((G = C.documentElement), Math.max(C.body["scroll" + s], G["scroll" + s], C.body["offset" + s], G["offset" + s], G["client" + s]))
                  : $ === void 0
                  ? p.css(C, P, x)
                  : p.style(C, P, $, x);
              },
              u,
              y ? v : void 0,
              y
            );
          };
        });
      }),
      p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (s, u) {
        p.fn[u] = function (l) {
          return this.on(u, l);
        };
      }),
      p.fn.extend({
        bind: function (s, u, l) {
          return this.on(s, null, u, l);
        },
        unbind: function (s, u) {
          return this.off(s, null, u);
        },
        delegate: function (s, u, l, d) {
          return this.on(u, s, l, d);
        },
        undelegate: function (s, u, l) {
          return arguments.length === 1 ? this.off(s, "**") : this.off(u, s || "**", l);
        },
        hover: function (s, u) {
          return this.mouseenter(s).mouseleave(u || s);
        },
      }),
      p.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (s, u) {
        p.fn[u] = function (l, d) {
          return arguments.length > 0 ? this.on(u, null, l, d) : this.trigger(u);
        };
      });
    var Qd = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (p.proxy = function (s, u) {
      var l, d, v;
      if ((typeof u == "string" && ((l = s[u]), (u = s), (s = l)), !!T(s)))
        return (
          (d = a.call(arguments, 2)),
          (v = function () {
            return s.apply(u || this, d.concat(a.call(arguments)));
          }),
          (v.guid = s.guid = s.guid || p.guid++),
          v
        );
    }),
      (p.holdReady = function (s) {
        s ? p.readyWait++ : p.ready(!0);
      }),
      (p.isArray = Array.isArray),
      (p.parseJSON = JSON.parse),
      (p.nodeName = O),
      (p.isFunction = T),
      (p.isWindow = L),
      (p.camelCase = Mt),
      (p.type = q),
      (p.now = Date.now),
      (p.isNumeric = function (s) {
        var u = p.type(s);
        return (u === "number" || u === "string") && !isNaN(s - parseFloat(s));
      }),
      (p.trim = function (s) {
        return s == null ? "" : (s + "").replace(Qd, "");
      });
    var Zd = t.jQuery,
      ep = t.$;
    return (
      (p.noConflict = function (s) {
        return t.$ === p && (t.$ = ep), s && t.jQuery === p && (t.jQuery = Zd), p;
      }),
      typeof r == "undefined" && (t.jQuery = t.$ = p),
      p
    );
  });
})(ld);
var Bw = ld.exports;
export { Bw as $, $w as B, Dw as C, jw as M, Hw as P, Fw as R, Ot as S, Ue as V, Lw as i, Mw as v };

var Vn = Object.defineProperty, Yn = (n, i, o) => i in n ? Vn(n, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[i] = o, d = (n, i, o) => Yn(n, typeof i != "symbol" ? i + "" : i, o), le = { 0: 8203, 1: 8204, 2: 8205, 3: 8290, 4: 8291, 5: 8288, 6: 65279, 7: 8289, 8: 119155, 9: 119156, a: 119157, b: 119158, c: 119159, d: 119160, e: 119161, f: 119162 }, ue = { 0: 8203, 1: 8204, 2: 8205, 3: 65279 }, Hn = new Array(4).fill(String.fromCodePoint(ue[0])).join(""), ie = "\0", Jn = Object.fromEntries(Object.entries(ue).map((n) => n.reverse())), re = Object.fromEntries(Object.entries(le).map((n) => n.reverse())), Wn = `${Object.values(le).map((n) => `\\u{${n.toString(16)}}`).join("")}`, qn = new RegExp(`[${Wn}]{4,}`, "gu");
function Kn(n) {
  let i = n.match(qn);
  if (i)
    return Zn(i[0], !0)[0];
}
function Zn(n, i = !1) {
  let o = Array.from(n);
  if (o.length % 2 === 0) {
    if (o.length % 4 || !n.startsWith(Hn))
      return Xn(o, i);
  } else
    throw new Error("Encoded data has invalid length");
  let s = [];
  for (let a = o.length * 0.25; a--; ) {
    let f = o.slice(a * 4, a * 4 + 4).map((h) => Jn[h.codePointAt(0)]).join("");
    s.unshift(String.fromCharCode(parseInt(f, 4)));
  }
  if (i) {
    s.shift();
    let a = s.indexOf(ie);
    return a === -1 && (a = s.length), [JSON.parse(s.slice(0, a).join(""))];
  }
  return s.join("").split(ie).filter(Boolean).map((a) => JSON.parse(a));
}
function Xn(n, i) {
  var o;
  let s = [];
  for (let p = n.length * 0.5; p--; ) {
    let l = `${re[n[p * 2].codePointAt(0)]}${re[n[p * 2 + 1].codePointAt(0)]}`;
    s.unshift(String.fromCharCode(parseInt(l, 16)));
  }
  let a = [], f = [s.join("")], h = 10;
  for (; f.length; ) {
    let p = f.shift();
    try {
      if (a.push(JSON.parse(p)), i)
        return a;
    } catch (l) {
      if (!h--)
        throw l;
      let v = +((o = l.message.match(/\sposition\s(\d+)$/)) == null ? void 0 : o[1]);
      if (!v)
        throw l;
      f.unshift(p.substring(0, v), p.substring(v));
    }
  }
  return a;
}
function Qn(n) {
  return Kn(n);
}
const ti = "4.5.2";
let de = !1;
function oe(n) {
  de = n;
}
const It = (n) => (...i) => {
  de && console[n](...i);
}, F = {
  error: It("error"),
  warn: It("warn"),
  log: It("log")
};
function ei(n, i = 500) {
  let o = window.location.href;
  const s = setInterval(() => {
    const a = window.location.href;
    a !== o && (o = a, n(a));
  }, i);
  return () => clearInterval(s);
}
const ni = "live-preview-editor", ii = "live-preview-sdk";
function j(n, i, o) {
  const s = {
    ...i,
    method: n,
    source: ii,
    location: window.location.href,
    version: ti
  };
  F.log("Send message", s), o.forEach((a) => {
    var f;
    (f = window.top) == null || f.postMessage(s, a);
  });
}
function ri(n, i = 100) {
  let o;
  return (...s) => {
    clearTimeout(o), o = setTimeout(() => {
      n.apply(this, s);
    }, i);
  };
}
function oi() {
  var n;
  try {
    return ((n = window.top) == null ? void 0 : n.location.href) !== window.location.href;
  } catch {
    return !0;
  }
}
function si() {
  return `${performance.now()}-${Math.random().toString(36).slice(2)}`;
}
function ai(n) {
  return typeof n.data != "object" || !n.data ? !1 : "source" in n.data && n.data.source === ni;
}
var gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ci(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var vt = { exports: {} };
vt.exports;
(function(n, i) {
  var o = 200, s = "__lodash_hash_undefined__", a = 1, f = 2, h = 9007199254740991, p = "[object Arguments]", l = "[object Array]", v = "[object AsyncFunction]", _ = "[object Boolean]", C = "[object Date]", S = "[object Error]", X = "[object Function]", B = "[object GeneratorFunction]", $ = "[object Map]", Q = "[object Number]", rt = "[object Null]", K = "[object Object]", Lt = "[object Promise]", Ee = "[object Proxy]", St = "[object RegExp]", ot = "[object Set]", Nt = "[object String]", be = "[object Symbol]", me = "[object Undefined]", Et = "[object WeakMap]", Rt = "[object ArrayBuffer]", st = "[object DataView]", ye = "[object Float32Array]", _e = "[object Float64Array]", Te = "[object Int8Array]", we = "[object Int16Array]", Oe = "[object Int32Array]", Ce = "[object Uint8Array]", Ie = "[object Uint8ClampedArray]", De = "[object Uint16Array]", Ae = "[object Uint32Array]", Le = /[\\^$.*+?()[\]{}|]/g, Se = /^\[object .+?Constructor\]$/, Ne = /^(?:0|[1-9]\d*)$/, E = {};
  E[ye] = E[_e] = E[Te] = E[we] = E[Oe] = E[Ce] = E[Ie] = E[De] = E[Ae] = !0, E[p] = E[l] = E[Rt] = E[_] = E[st] = E[C] = E[S] = E[X] = E[$] = E[Q] = E[K] = E[St] = E[ot] = E[Nt] = E[Et] = !1;
  var jt = typeof gt == "object" && gt && gt.Object === Object && gt, Re = typeof self == "object" && self && self.Object === Object && self, U = jt || Re || Function("return this")(), Mt = i && !i.nodeType && i, Ut = Mt && !0 && n && !n.nodeType && n, zt = Ut && Ut.exports === Mt, bt = zt && jt.process, Pt = function() {
    try {
      return bt && bt.binding && bt.binding("util");
    } catch {
    }
  }(), Bt = Pt && Pt.isTypedArray;
  function je(t, e) {
    for (var r = -1, c = t == null ? 0 : t.length, b = 0, u = []; ++r < c; ) {
      var y = t[r];
      e(y, r, t) && (u[b++] = y);
    }
    return u;
  }
  function Me(t, e) {
    for (var r = -1, c = e.length, b = t.length; ++r < c; )
      t[b + r] = e[r];
    return t;
  }
  function Ue(t, e) {
    for (var r = -1, c = t == null ? 0 : t.length; ++r < c; )
      if (e(t[r], r, t))
        return !0;
    return !1;
  }
  function ze(t, e) {
    for (var r = -1, c = Array(t); ++r < t; )
      c[r] = e(r);
    return c;
  }
  function Pe(t) {
    return function(e) {
      return t(e);
    };
  }
  function Be(t, e) {
    return t.has(e);
  }
  function Ge(t, e) {
    return t == null ? void 0 : t[e];
  }
  function ke(t) {
    var e = -1, r = Array(t.size);
    return t.forEach(function(c, b) {
      r[++e] = [b, c];
    }), r;
  }
  function xe(t, e) {
    return function(r) {
      return t(e(r));
    };
  }
  function Fe(t) {
    var e = -1, r = Array(t.size);
    return t.forEach(function(c) {
      r[++e] = c;
    }), r;
  }
  var $e = Array.prototype, Ve = Function.prototype, at = Object.prototype, mt = U["__core-js_shared__"], Gt = Ve.toString, R = at.hasOwnProperty, kt = function() {
    var t = /[^.]+$/.exec(mt && mt.keys && mt.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }(), xt = at.toString, Ye = RegExp(
    "^" + Gt.call(R).replace(Le, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ft = zt ? U.Buffer : void 0, ct = U.Symbol, $t = U.Uint8Array, Vt = at.propertyIsEnumerable, He = $e.splice, V = ct ? ct.toStringTag : void 0, Yt = Object.getOwnPropertySymbols, Je = Ft ? Ft.isBuffer : void 0, We = xe(Object.keys, Object), yt = Z(U, "DataView"), tt = Z(U, "Map"), _t = Z(U, "Promise"), Tt = Z(U, "Set"), wt = Z(U, "WeakMap"), et = Z(Object, "create"), qe = J(yt), Ke = J(tt), Ze = J(_t), Xe = J(Tt), Qe = J(wt), Ht = ct ? ct.prototype : void 0, Ot = Ht ? Ht.valueOf : void 0;
  function Y(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var c = t[e];
      this.set(c[0], c[1]);
    }
  }
  function tn() {
    this.__data__ = et ? et(null) : {}, this.size = 0;
  }
  function en(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e;
  }
  function nn(t) {
    var e = this.__data__;
    if (et) {
      var r = e[t];
      return r === s ? void 0 : r;
    }
    return R.call(e, t) ? e[t] : void 0;
  }
  function rn(t) {
    var e = this.__data__;
    return et ? e[t] !== void 0 : R.call(e, t);
  }
  function on(t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = et && e === void 0 ? s : e, this;
  }
  Y.prototype.clear = tn, Y.prototype.delete = en, Y.prototype.get = nn, Y.prototype.has = rn, Y.prototype.set = on;
  function z(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var c = t[e];
      this.set(c[0], c[1]);
    }
  }
  function sn() {
    this.__data__ = [], this.size = 0;
  }
  function an(t) {
    var e = this.__data__, r = ut(e, t);
    if (r < 0)
      return !1;
    var c = e.length - 1;
    return r == c ? e.pop() : He.call(e, r, 1), --this.size, !0;
  }
  function cn(t) {
    var e = this.__data__, r = ut(e, t);
    return r < 0 ? void 0 : e[r][1];
  }
  function ln(t) {
    return ut(this.__data__, t) > -1;
  }
  function un(t, e) {
    var r = this.__data__, c = ut(r, t);
    return c < 0 ? (++this.size, r.push([t, e])) : r[c][1] = e, this;
  }
  z.prototype.clear = sn, z.prototype.delete = an, z.prototype.get = cn, z.prototype.has = ln, z.prototype.set = un;
  function H(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var c = t[e];
      this.set(c[0], c[1]);
    }
  }
  function dn() {
    this.size = 0, this.__data__ = {
      hash: new Y(),
      map: new (tt || z)(),
      string: new Y()
    };
  }
  function fn(t) {
    var e = dt(this, t).delete(t);
    return this.size -= e ? 1 : 0, e;
  }
  function hn(t) {
    return dt(this, t).get(t);
  }
  function pn(t) {
    return dt(this, t).has(t);
  }
  function gn(t, e) {
    var r = dt(this, t), c = r.size;
    return r.set(t, e), this.size += r.size == c ? 0 : 1, this;
  }
  H.prototype.clear = dn, H.prototype.delete = fn, H.prototype.get = hn, H.prototype.has = pn, H.prototype.set = gn;
  function lt(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.__data__ = new H(); ++e < r; )
      this.add(t[e]);
  }
  function vn(t) {
    return this.__data__.set(t, s), this;
  }
  function En(t) {
    return this.__data__.has(t);
  }
  lt.prototype.add = lt.prototype.push = vn, lt.prototype.has = En;
  function G(t) {
    var e = this.__data__ = new z(t);
    this.size = e.size;
  }
  function bn() {
    this.__data__ = new z(), this.size = 0;
  }
  function mn(t) {
    var e = this.__data__, r = e.delete(t);
    return this.size = e.size, r;
  }
  function yn(t) {
    return this.__data__.get(t);
  }
  function _n(t) {
    return this.__data__.has(t);
  }
  function Tn(t, e) {
    var r = this.__data__;
    if (r instanceof z) {
      var c = r.__data__;
      if (!tt || c.length < o - 1)
        return c.push([t, e]), this.size = ++r.size, this;
      r = this.__data__ = new H(c);
    }
    return r.set(t, e), this.size = r.size, this;
  }
  G.prototype.clear = bn, G.prototype.delete = mn, G.prototype.get = yn, G.prototype.has = _n, G.prototype.set = Tn;
  function wn(t, e) {
    var r = ft(t), c = !r && Bn(t), b = !r && !c && Ct(t), u = !r && !c && !b && ee(t), y = r || c || b || u, T = y ? ze(t.length, String) : [], w = T.length;
    for (var m in t)
      (e || R.call(t, m)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (m == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      b && (m == "offset" || m == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      u && (m == "buffer" || m == "byteLength" || m == "byteOffset") || // Skip index properties.
      jn(m, w))) && T.push(m);
    return T;
  }
  function ut(t, e) {
    for (var r = t.length; r--; )
      if (Zt(t[r][0], e))
        return r;
    return -1;
  }
  function On(t, e, r) {
    var c = e(t);
    return ft(t) ? c : Me(c, r(t));
  }
  function nt(t) {
    return t == null ? t === void 0 ? me : rt : V && V in Object(t) ? Nn(t) : Pn(t);
  }
  function Jt(t) {
    return it(t) && nt(t) == p;
  }
  function Wt(t, e, r, c, b) {
    return t === e ? !0 : t == null || e == null || !it(t) && !it(e) ? t !== t && e !== e : Cn(t, e, r, c, Wt, b);
  }
  function Cn(t, e, r, c, b, u) {
    var y = ft(t), T = ft(e), w = y ? l : k(t), m = T ? l : k(e);
    w = w == p ? K : w, m = m == p ? K : m;
    var I = w == K, N = m == K, O = w == m;
    if (O && Ct(t)) {
      if (!Ct(e))
        return !1;
      y = !0, I = !1;
    }
    if (O && !I)
      return u || (u = new G()), y || ee(t) ? qt(t, e, r, c, b, u) : Ln(t, e, w, r, c, b, u);
    if (!(r & a)) {
      var D = I && R.call(t, "__wrapped__"), A = N && R.call(e, "__wrapped__");
      if (D || A) {
        var x = D ? t.value() : t, P = A ? e.value() : e;
        return u || (u = new G()), b(x, P, r, c, u);
      }
    }
    return O ? (u || (u = new G()), Sn(t, e, r, c, b, u)) : !1;
  }
  function In(t) {
    if (!te(t) || Un(t))
      return !1;
    var e = Xt(t) ? Ye : Se;
    return e.test(J(t));
  }
  function Dn(t) {
    return it(t) && Qt(t.length) && !!E[nt(t)];
  }
  function An(t) {
    if (!zn(t))
      return We(t);
    var e = [];
    for (var r in Object(t))
      R.call(t, r) && r != "constructor" && e.push(r);
    return e;
  }
  function qt(t, e, r, c, b, u) {
    var y = r & a, T = t.length, w = e.length;
    if (T != w && !(y && w > T))
      return !1;
    var m = u.get(t);
    if (m && u.get(e))
      return m == e;
    var I = -1, N = !0, O = r & f ? new lt() : void 0;
    for (u.set(t, e), u.set(e, t); ++I < T; ) {
      var D = t[I], A = e[I];
      if (c)
        var x = y ? c(A, D, I, e, t, u) : c(D, A, I, t, e, u);
      if (x !== void 0) {
        if (x)
          continue;
        N = !1;
        break;
      }
      if (O) {
        if (!Ue(e, function(P, W) {
          if (!Be(O, W) && (D === P || b(D, P, r, c, u)))
            return O.push(W);
        })) {
          N = !1;
          break;
        }
      } else if (!(D === A || b(D, A, r, c, u))) {
        N = !1;
        break;
      }
    }
    return u.delete(t), u.delete(e), N;
  }
  function Ln(t, e, r, c, b, u, y) {
    switch (r) {
      case st:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
          return !1;
        t = t.buffer, e = e.buffer;
      case Rt:
        return !(t.byteLength != e.byteLength || !u(new $t(t), new $t(e)));
      case _:
      case C:
      case Q:
        return Zt(+t, +e);
      case S:
        return t.name == e.name && t.message == e.message;
      case St:
      case Nt:
        return t == e + "";
      case $:
        var T = ke;
      case ot:
        var w = c & a;
        if (T || (T = Fe), t.size != e.size && !w)
          return !1;
        var m = y.get(t);
        if (m)
          return m == e;
        c |= f, y.set(t, e);
        var I = qt(T(t), T(e), c, b, u, y);
        return y.delete(t), I;
      case be:
        if (Ot)
          return Ot.call(t) == Ot.call(e);
    }
    return !1;
  }
  function Sn(t, e, r, c, b, u) {
    var y = r & a, T = Kt(t), w = T.length, m = Kt(e), I = m.length;
    if (w != I && !y)
      return !1;
    for (var N = w; N--; ) {
      var O = T[N];
      if (!(y ? O in e : R.call(e, O)))
        return !1;
    }
    var D = u.get(t);
    if (D && u.get(e))
      return D == e;
    var A = !0;
    u.set(t, e), u.set(e, t);
    for (var x = y; ++N < w; ) {
      O = T[N];
      var P = t[O], W = e[O];
      if (c)
        var ne = y ? c(W, P, O, e, t, u) : c(P, W, O, t, e, u);
      if (!(ne === void 0 ? P === W || b(P, W, r, c, u) : ne)) {
        A = !1;
        break;
      }
      x || (x = O == "constructor");
    }
    if (A && !x) {
      var ht = t.constructor, pt = e.constructor;
      ht != pt && "constructor" in t && "constructor" in e && !(typeof ht == "function" && ht instanceof ht && typeof pt == "function" && pt instanceof pt) && (A = !1);
    }
    return u.delete(t), u.delete(e), A;
  }
  function Kt(t) {
    return On(t, xn, Rn);
  }
  function dt(t, e) {
    var r = t.__data__;
    return Mn(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
  }
  function Z(t, e) {
    var r = Ge(t, e);
    return In(r) ? r : void 0;
  }
  function Nn(t) {
    var e = R.call(t, V), r = t[V];
    try {
      t[V] = void 0;
      var c = !0;
    } catch {
    }
    var b = xt.call(t);
    return c && (e ? t[V] = r : delete t[V]), b;
  }
  var Rn = Yt ? function(t) {
    return t == null ? [] : (t = Object(t), je(Yt(t), function(e) {
      return Vt.call(t, e);
    }));
  } : Fn, k = nt;
  (yt && k(new yt(new ArrayBuffer(1))) != st || tt && k(new tt()) != $ || _t && k(_t.resolve()) != Lt || Tt && k(new Tt()) != ot || wt && k(new wt()) != Et) && (k = function(t) {
    var e = nt(t), r = e == K ? t.constructor : void 0, c = r ? J(r) : "";
    if (c)
      switch (c) {
        case qe:
          return st;
        case Ke:
          return $;
        case Ze:
          return Lt;
        case Xe:
          return ot;
        case Qe:
          return Et;
      }
    return e;
  });
  function jn(t, e) {
    return e = e ?? h, !!e && (typeof t == "number" || Ne.test(t)) && t > -1 && t % 1 == 0 && t < e;
  }
  function Mn(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function Un(t) {
    return !!kt && kt in t;
  }
  function zn(t) {
    var e = t && t.constructor, r = typeof e == "function" && e.prototype || at;
    return t === r;
  }
  function Pn(t) {
    return xt.call(t);
  }
  function J(t) {
    if (t != null) {
      try {
        return Gt.call(t);
      } catch {
      }
      try {
        return t + "";
      } catch {
      }
    }
    return "";
  }
  function Zt(t, e) {
    return t === e || t !== t && e !== e;
  }
  var Bn = Jt(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Jt : function(t) {
    return it(t) && R.call(t, "callee") && !Vt.call(t, "callee");
  }, ft = Array.isArray;
  function Gn(t) {
    return t != null && Qt(t.length) && !Xt(t);
  }
  var Ct = Je || $n;
  function kn(t, e) {
    return Wt(t, e);
  }
  function Xt(t) {
    if (!te(t))
      return !1;
    var e = nt(t);
    return e == X || e == B || e == v || e == Ee;
  }
  function Qt(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= h;
  }
  function te(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function it(t) {
    return t != null && typeof t == "object";
  }
  var ee = Bt ? Pe(Bt) : Dn;
  function xn(t) {
    return Gn(t) ? wn(t) : An(t);
  }
  function Fn() {
    return [];
  }
  function $n() {
    return !1;
  }
  n.exports = kn;
})(vt, vt.exports);
var li = vt.exports;
const ui = /* @__PURE__ */ ci(li);
var g = /* @__PURE__ */ ((n) => (n.FIELD_ID = "data-contentful-field-id", n.ENTRY_ID = "data-contentful-entry-id", n.ASSET_ID = "data-contentful-asset-id", n.LOCALE = "data-contentful-locale", n.SPACE = "data-contentful-space", n.ENVIRONMENT = "data-contentful-environment", n))(g || {}), q = /* @__PURE__ */ ((n) => (n.MOUSE_MOVE = "MOUSE_MOVE", n.SCROLL_START = "SCROLL_START", n.SCROLL_END = "SCROLL_END", n.RESIZE_START = "RESIZE_START", n.RESIZE_END = "RESIZE_END", n.TAGGED_ELEMENTS = "TAGGED_ELEMENTS", n.INSPECTOR_MODE_CHANGED = "INSPECTOR_MODE_CHANGED", n))(q || {}), fe = { 0: 8203, 1: 8204, 2: 8205, 3: 8290, 4: 8291, 5: 8288, 6: 65279, 7: 8289, 8: 119155, 9: 119156, a: 119157, b: 119158, c: 119159, d: 119160, e: 119161, f: 119162 }, he = { 0: 8203, 1: 8204, 2: 8205, 3: 65279 };
new Array(4).fill(String.fromCodePoint(he[0])).join("");
Object.fromEntries(Object.entries(he).map((n) => n.reverse()));
Object.fromEntries(Object.entries(fe).map((n) => n.reverse()));
var di = `${Object.values(fe).map((n) => `\\u{${n.toString(16)}}`).join("")}`, fi = new RegExp(`[${di}]{4,}`, "gu");
const hi = (n) => {
  if (!n || n.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const i = n;
  return !(!i.hasAttribute(g.FIELD_ID) || !i.hasAttribute(g.ENTRY_ID) && !i.hasAttribute(g.ASSET_ID));
};
function pi(n, i) {
  if (!hi(n))
    return null;
  const o = {
    fieldId: n.getAttribute(g.FIELD_ID),
    locale: n.getAttribute(g.LOCALE) ?? i.locale,
    environment: n.getAttribute(g.ENVIRONMENT) ?? i.environment,
    space: n.getAttribute(g.SPACE) ?? i.space,
    manuallyTagged: !0
  }, s = n.getAttribute(g.ENTRY_ID);
  if (s)
    return { ...o, entryId: s };
  const a = n.getAttribute(g.ASSET_ID);
  return a ? { ...o, assetId: a } : null;
}
function pe(n, i) {
  return n.href === i.href;
}
function gi(n, i) {
  return !(!pe(n.sourceMap, i.sourceMap) || n.element !== i.element);
}
function vi(n) {
  let i = [];
  return typeof n.matches == "function" && n.matches("*") && (i = [n]), [
    ...i,
    ...Array.from(n.querySelectorAll("*:not(script,style,meta,title)"))
  ].map((o) => ({ node: o, text: Ei(o) })).filter(({ text: o }) => !!(o && o.match(fi)));
}
function Ei(n) {
  return n.matches("input[type=submit], input[type=button], input[type=reset]") ? n.value : n.matches("img, video") ? n.alt : Array.from(n.childNodes).filter((i) => i.nodeType === Node.TEXT_NODE && !!i.textContent).map((i) => i.textContent).join("");
}
function bi(n, i) {
  for (const o of i)
    if (o.element === n || o.element.contains(n))
      return !0;
  return !1;
}
function At({
  root: n = window.document,
  options: i,
  ignoreManual: o
}) {
  const s = [...o ? [] : n.querySelectorAll(
    `[${g.ASSET_ID}][${g.FIELD_ID}], [${g.ENTRY_ID}][${g.FIELD_ID}]`
  )].map((l) => ({
    element: l,
    attributes: pi(l, i)
  })).filter(({ attributes: l }) => l !== null), a = [], f = vi("body" in n ? n.body : n);
  for (const { node: l, text: v } of f) {
    const _ = Qn(v);
    if (!(!_ || !_.origin.includes("contentful.com")) && !(bi(l, s) || a.some(
      (C) => C.element.contains(l) && pe(C.sourceMap, _)
    ))) {
      if (l.matches("img")) {
        const C = l.closest("figure") || l.closest("picture") || l;
        a.push({ element: C, sourceMap: _ });
        continue;
      }
      a.push({ element: l, sourceMap: _ });
    }
  }
  const h = a.filter(
    (l, v) => a.findIndex((_) => gi(l, _)) === v
  );
  for (const { element: l, sourceMap: v } of h) {
    if (!v.contentful) {
      F.warn(
        "Element has missing information in their ContentSourceMap, please check if you have restricted the platform for the encoding. (Missing parameter: `contentful`)",
        {
          element: l,
          sourceMap: v
        }
      );
      continue;
    }
    const _ = {
      fieldId: v.contentful.field,
      locale: v.contentful.locale,
      space: v.contentful.space,
      environment: v.contentful.environment
    };
    v.contentful.entityType === "Asset" ? _.assetId = v.contentful.entity : v.contentful.entityType === "Entry" && (_.entryId = v.contentful.entity), s.push({
      element: l,
      attributes: _
    });
  }
  const p = s.filter(
    ({ attributes: l }) => (l == null ? void 0 : l.manuallyTagged) === !1 || !(l != null && l.manuallyTagged)
  ).length;
  return {
    taggedElements: s,
    manuallyTaggedCount: s.length - p,
    automaticallyTaggedCount: p,
    autoTaggedElements: h
  };
}
function ge({
  options: n
}) {
  return [
    ...new Set(
      At({ options: n }).taggedElements.map((i) => i.attributes && "entryId" in i.attributes ? i.attributes.entryId : null).filter(Boolean)
    )
  ];
}
class mi {
  constructor(i) {
    d(this, "delay", 300), d(this, "isScrolling", !1), d(this, "scrollTimeout"), d(this, "isResizing", !1), d(this, "resizeTimeout"), d(this, "hoveredElement"), d(this, "taggedElements", []), d(this, "manuallyTaggedCount", 0), d(this, "automaticallyTaggedCount", 0), d(this, "intersectionObserver"), d(this, "observersCB", []), d(this, "cleanupCB", []), d(this, "init", () => {
      this.cleanupCB = [
        this.addScrollListener(),
        this.addMutationListener(document.body),
        this.addResizeListener(),
        this.addHoverListener()
      ], this.updateElements();
    }), d(this, "cleanup", () => {
      this.observersCB.forEach((o) => o()), this.cleanupCB.forEach((o) => o());
    }), d(this, "receiveMessage", (o) => {
      if (o.method === q.INSPECTOR_MODE_CHANGED) {
        const { isInspectorActive: s } = o;
        s ? this.init() : this.cleanup();
      }
    }), d(this, "observe", (o) => {
      this.intersectionObserver.observe(o);
      const s = this.addMutationListener(o);
      this.observersCB.push(s, () => this.intersectionObserver.unobserve(o));
    }), d(this, "addScrollListener", () => {
      const { targetOrigin: o } = this.options, s = () => {
        this.isScrolling || (this.isScrolling = !0, j(q.SCROLL_START, {}, o)), this.scrollTimeout && clearTimeout(this.scrollTimeout), this.scrollTimeout = setTimeout(() => {
          this.isScrolling = !1, j(q.SCROLL_END, {}, o), this.updateElements();
        }, this.delay);
      }, a = { capture: !0, passive: !0 };
      return window.addEventListener("scroll", s, a), () => window.removeEventListener("scroll", s, a);
    }), d(this, "addMutationListener", (o) => {
      const s = new MutationObserver(() => {
        this.updateElements();
      });
      return s.observe(o, {
        // Content source maps
        characterData: !0,
        // Manual tagging
        attributes: !0,
        attributeFilter: [
          g.ENTRY_ID,
          g.FIELD_ID,
          g.LOCALE,
          g.SPACE,
          g.ENVIRONMENT,
          "class",
          "style"
        ],
        // Adding or removal of new nodes
        childList: !0,
        // Include children
        subtree: !0
      }), () => s.disconnect();
    }), d(this, "addResizeListener", () => {
      const { targetOrigin: o } = this.options, s = new ResizeObserver(() => {
        this.isResizing || (this.isResizing = !0, j(q.RESIZE_START, {}, o)), this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(() => {
          this.isResizing = !1, j(q.RESIZE_END, {}, o), this.updateElements();
        }, this.delay);
      });
      return s.observe(document.body), () => s.disconnect();
    }), d(this, "addHoverListener", () => {
      const o = ri((a) => {
        let f;
        for (const h of a) {
          const p = h;
          if (p.nodeName === "BODY")
            break;
          const l = this.taggedElements.find((v) => v.element === p);
          if (l) {
            f = l;
            break;
          }
        }
        this.hoveredElement = f == null ? void 0 : f.element, this.updateElements();
      }, this.delay), s = (a) => {
        o(a.composedPath());
      };
      return window.addEventListener("mouseover", s, { passive: !0 }), () => window.removeEventListener("mouseover", s);
    }), d(this, "sendTaggedElements", () => {
      j(
        q.TAGGED_ELEMENTS,
        {
          elements: this.taggedElements.map((o) => ({
            // Important: do not add `element` as it can't be cloned by sendMessage
            coordinates: o.coordinates,
            isVisible: o.isVisible,
            attributes: o.attributes,
            isHovered: this.hoveredElement === o.element
          })),
          automaticallyTaggedCount: this.automaticallyTaggedCount,
          manuallyTaggedCount: this.manuallyTaggedCount
        },
        this.options.targetOrigin
      );
    }), d(this, "updateElements", () => {
      const { taggedElements: o, manuallyTaggedCount: s, automaticallyTaggedCount: a } = At({
        options: this.options
      }), f = o.map(({ element: h, attributes: p }) => ({
        element: h,
        coordinates: h.getBoundingClientRect(),
        attributes: p,
        isVisible: h.checkVisibility({
          checkOpacity: !0,
          checkVisibilityCSS: !0
        })
      }));
      ui(f, this.taggedElements) || (this.observersCB.forEach((h) => h()), this.observersCB = [], this.taggedElements = f, o.forEach(({ element: h }) => this.observe(h)), this.manuallyTaggedCount = s, this.automaticallyTaggedCount = a);
    }), this.options = i, this.intersectionObserver = new IntersectionObserver(
      (o) => {
        const s = this.taggedElements;
        for (const a of o)
          if (a.isIntersecting)
            for (const f of s)
              f.element === a.target && (f.coordinates = a.intersectionRect, f.isVisible = a.target.checkVisibility({
                checkOpacity: !0,
                checkVisibilityCSS: !0
              }));
        this.taggedElements = s, this.sendTaggedElements();
      },
      { threshold: 0.15 }
    );
  }
}
const { parse: Li, stringify: yi } = JSON, _i = String, Ti = "string", se = "object", wi = (n, i) => i, ae = (n, i, o) => {
  const s = _i(i.push(o) - 1);
  return n.set(o, s), s;
}, Oi = (n, i, o) => {
  const s = i && typeof i === se ? (_, C) => _ === "" || -1 < i.indexOf(_) ? C : void 0 : i || wi, a = /* @__PURE__ */ new Map(), f = [], h = [];
  let p = +ae(a, f, s.call({ "": n }, "", n)), l = !p;
  for (; p < f.length; )
    l = !0, h[p] = yi(f[p++], v, o);
  return "[" + h.join(",") + "]";
  function v(_, C) {
    if (l)
      return l = !l, C;
    const S = s.call(this, _, C);
    switch (typeof S) {
      case se:
        if (S === null)
          return S;
      case Ti:
        return a.get(S) || ae(a, f, S);
    }
    return S;
  }
};
var M = /* @__PURE__ */ ((n) => (n.CONNECTED = "CONNECTED", n.DISCONNECTED = "DISCONNECTED", n.ERROR = "ERROR", n.TAGGED_FIELD_CLICKED = "TAGGED_FIELD_CLICKED", n.URL_CHANGED = "URL_CHANGED", n.SUBSCRIBED = "SUBSCRIBED", n.UNSUBSCRIBED = "UNSUBSCRIBED", n.ENTRY_UPDATED = "ENTRY_UPDATED", n.ENTRY_SAVED = "ENTRY_SAVED", n.DEBUG_MODE_ENABLED = "DEBUG_MODE_ENABLED", n))(M || {});
function Ci(n, i) {
  j(
    "TAGGED_FIELD_CLICKED",
    {
      action: "TAGGED_FIELD_CLICKED",
      ...n
    },
    i
  );
}
function Ii(n, i) {
  j(
    "TAGGED_FIELD_CLICKED",
    {
      action: "TAGGED_FIELD_CLICKED",
      ...n
    },
    i
  );
}
class Di {
  constructor({ locale: i, targetOrigin: o }) {
    d(this, "subscriptions", /* @__PURE__ */ new Map()), d(this, "defaultLocale"), d(this, "sendMessage"), this.defaultLocale = i, this.sendMessage = (s, a) => j(s, a, o);
  }
  /** Receives the data from the message event handler and calls the subscriptions */
  async receiveMessage(i) {
    if (i.method === M.ENTRY_UPDATED) {
      const { data: o, subscriptionId: s } = i, a = this.subscriptions.get(s);
      a ? (a.callback(o), a.data = o, this.subscriptions.set(s, a)) : F.error("Received an update for an unknown subscription", {
        subscriptionId: s,
        data: o,
        subscriptions: this.subscriptions
      });
    }
  }
  /**
   * Subscribe to data changes from the Editor, returns a function to unsubscribe
   * Will be called once initially for the restored data
   */
  subscribe(i) {
    const o = si(), s = i.locale ?? this.defaultLocale;
    this.subscriptions.set(o, {
      ...i
    });
    const a = {
      locale: s,
      event: "edit",
      id: o,
      config: Oi(i)
    };
    return this.sendMessage(M.SUBSCRIBED, a), () => {
      this.sendMessage(M.UNSUBSCRIBED, a), this.subscriptions.delete(o);
    };
  }
}
class Ai {
  constructor({ locale: i, options: o }) {
    d(this, "locale"), d(this, "options"), d(this, "subscription"), this.locale = i, this.options = o;
  }
  subscribe(i) {
    return this.subscription && F.log(
      "There is already a subscription for the save event, the existing one will be replaced."
    ), this.subscription = i, () => {
      this.subscription = void 0;
    };
  }
  receiveMessage(i) {
    if (i.method === M.ENTRY_SAVED && this.subscription) {
      const { entity: o } = i;
      ge({ options: this.options }).includes(o.sys.id) && this.subscription(o);
    }
  }
}
const ce = [
  "https://app.contentful.com",
  "https://app.eu.contentful.com",
  "http://localhost:3001"
  // for local debugging for Contentful engineers
], L = class Dt {
  // Static method to initialize the LivePreview SDK
  static init(i) {
    var o;
    if (typeof i != "object" || !(i != null && i.locale))
      throw new Error(
        "Init function have to be called with a locale configuration (for example: `ContentfulLivePreview.init({ locale: 'en-US'})`)"
      );
    const {
      debugMode: s,
      enableInspectorMode: a,
      enableLiveUpdates: f,
      locale: h,
      environment: p,
      space: l,
      targetOrigin: v
    } = i;
    if (typeof window < "u") {
      if (!oi())
        return this.liveUpdatesEnabled = !1, Promise.resolve(null);
      if (s && oe(s), typeof a == "boolean" && (this.inspectorModeEnabled = a), typeof f == "boolean" && (this.liveUpdatesEnabled = f), this.locale = h, this.space = l, this.environment = p, this.initTargetOrigin(v), this.initialized)
        return F.log("You have already initialized the Live Preview SDK."), Promise.resolve(Dt.inspectorMode);
      this.inspectorModeEnabled && (this.inspectorMode = new mi({
        locale: h,
        space: l,
        environment: p,
        targetOrigin: this.targetOrigin,
        ignoreManuallyTaggedElements: (o = i.experimental) == null ? void 0 : o.ignoreManuallyTaggedElements
      })), this.liveUpdatesEnabled && (this.liveUpdates = new Di({ locale: h, targetOrigin: this.targetOrigin }), this.saveEvent = new Ai({
        locale: h,
        options: {
          locale: this.locale,
          space: this.space,
          environment: this.environment,
          targetOrigin: this.targetOrigin
        }
      })), window.addEventListener("message", (B) => {
        var $, Q, rt;
        if (ai(B)) {
          if (F.log("Received message", B.data), B.data.method === M.DEBUG_MODE_ENABLED) {
            oe(!0);
            return;
          }
          this.inspectorModeEnabled && (($ = this.inspectorMode) == null || $.receiveMessage(B.data)), this.liveUpdatesEnabled && ((Q = this.liveUpdates) == null || Q.receiveMessage(B.data), (rt = this.saveEvent) == null || rt.receiveMessage(B.data));
        }
      }), ei(() => {
        j(
          M.URL_CHANGED,
          {
            action: M.URL_CHANGED,
            taggedElementCount: document.querySelectorAll(
              `[${g.ENTRY_ID}]`
            ).length
          },
          this.targetOrigin
        );
      });
      const { taggedElements: _, manuallyTaggedCount: C, automaticallyTaggedCount: S } = this.inspectorModeEnabled ? At({
        options: {
          locale: this.locale,
          space: this.space,
          environment: this.environment
        }
      }) : {
        taggedElements: [],
        manuallyTaggedCount: 0,
        automaticallyTaggedCount: 0
      }, X = _.length;
      return j(
        M.CONNECTED,
        {
          action: M.CONNECTED,
          connected: !0,
          tags: X,
          taggedElementCount: X,
          locale: this.locale,
          isInspectorEnabled: this.inspectorModeEnabled,
          isLiveUpdatesEnabled: this.liveUpdatesEnabled,
          manuallyTaggedElementCount: C,
          automaticallyTaggedElementCount: S
        },
        this.targetOrigin
      ), this.initialized = !0, Promise.resolve(Dt.inspectorMode);
    }
  }
  static initTargetOrigin(i) {
    if (i)
      this.targetOrigin = Array.isArray(i) ? i : [i];
    else {
      const o = window.location.ancestorOrigins, s = o ? ce.find((a) => o.contains(a)) : (
        //less consistent workaround for Firefox, where ancestorOrigins is not supported
        ce.find((a) => document.referrer.includes(a))
      );
      if (!s)
        throw new Error(
          "The current origin is not supported. Please provide a targetOrigin in the live preview configuration."
        );
      this.targetOrigin = [s];
    }
  }
  static subscribe(i, o) {
    if (!this.liveUpdatesEnabled)
      return () => {
      };
    const s = typeof i == "string" ? i : "edit", a = typeof i == "object" ? i : o;
    if (s === "save") {
      if (!this.saveEvent)
        throw new Error(
          "Save event is not initialized, please call `ContentfulLivePreview.init()` first."
        );
      return this.saveEvent.subscribe(a.callback);
    }
    if (!this.liveUpdates)
      throw new Error(
        "Live updates are not initialized, please call `ContentfulLivePreview.init()` first."
      );
    return this.liveUpdates.subscribe(a);
  }
  // Static method to render live preview data-attributes to HTML element output
  static getProps(i) {
    const { fieldId: o, locale: s, environment: a, space: f } = i;
    if (!this.inspectorModeEnabled)
      return null;
    if (o) {
      const h = {
        ...s ? { [g.LOCALE]: s } : {},
        ...a ? { [g.ENVIRONMENT]: a } : {},
        ...f ? { [g.SPACE]: f } : {},
        [g.FIELD_ID]: o
      };
      if (s && (h[g.LOCALE] = s), i.assetId !== void 0)
        return {
          ...h,
          [g.ASSET_ID]: i.assetId
        };
      if (i.entryId !== void 0)
        return {
          ...h,
          [g.ENTRY_ID]: i.entryId
        };
    }
    return F.warn("Missing property for inspector mode", { ...i }), null;
  }
  static toggleInspectorMode() {
    return this.inspectorModeEnabled = !this.inspectorModeEnabled, this.inspectorModeEnabled;
  }
  static toggleLiveUpdatesMode() {
    return this.liveUpdatesEnabled = !this.liveUpdatesEnabled, this.liveUpdatesEnabled;
  }
  static openEntryInEditor(i) {
    const o = {
      locale: this.locale,
      environment: this.environment,
      space: this.space
    };
    if (i.assetId !== void 0 && i.fieldId) {
      Ii(
        {
          ...o,
          ...i
        },
        this.targetOrigin
      );
      return;
    }
    if (i.entryId !== void 0 && i.fieldId) {
      Ci(
        {
          ...o,
          ...i
        },
        this.targetOrigin
      );
      return;
    }
    F.error("Please provide field id and entry id to openEntryInEditor.");
  }
  /**
   * Returns a list of tagged entries on the page
   */
  static getEntryList() {
    return ge({
      options: {
        locale: this.locale,
        space: this.space,
        environment: this.environment
      }
    });
  }
};
d(L, "initialized", !1), d(L, "inspectorMode", null), d(L, "liveUpdates", null), d(L, "saveEvent", null), d(L, "inspectorModeEnabled", !0), d(L, "liveUpdatesEnabled", !0), d(L, "locale"), d(L, "space"), d(L, "environment"), d(L, "sendMessage"), d(L, "targetOrigin");
let ve = L;
ve.init({
  locale: "en-US",
  debugMode: !0,
  enableLiveUpdates: !0,
  space: "71ayinbFLRWWUEmPZ7RLI1"
});
ve.subscribe("save", {
  callback: async () => {
    const n = window.location.pathname;
    await fetch(`/api/revalidate?pathname=${n}`), window.location.reload();
  }
});

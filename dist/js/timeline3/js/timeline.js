"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TL = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e12) { throw _e12; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e13) { didErr = true; err = _e13; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable */
var TL = function (t) {
  var e = {};

  function i(n) {
    if (e[n]) return e[n].exports;
    var r = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
  }

  return i.m = t, i.c = e, i.d = function (t, e, n) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var r in t) {
      i.d(n, r, function (e) {
        return t[e];
      }.bind(null, r));
    }
    return n;
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return i.d(e, "a", e), e;
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, i.p = "", i(i.s = 5);
}([function (t, e, i) {
  /*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
  t.exports = function () {
    "use strict";

    var t = Object.hasOwnProperty,
        e = Object.setPrototypeOf,
        i = Object.isFrozen,
        n = Object.keys,
        r = Object.freeze,
        a = Object.seal,
        o = "undefined" != typeof Reflect && Reflect,
        s = o.apply,
        l = o.construct;
    s || (s = function s(t, e, i) {
      return t.apply(e, i);
    }), r || (r = function r(t) {
      return t;
    }), a || (a = function a(t) {
      return t;
    }), l || (l = function l(t, e) {
      return new (Function.prototype.bind.apply(t, [null].concat(function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, i = Array(t.length); e < t.length; e++) {
            i[e] = t[e];
          }

          return i;
        }

        return Array.from(t);
      }(e))))();
    });

    var h = k(Array.prototype.forEach),
        c = k(Array.prototype.indexOf),
        u = k(Array.prototype.join),
        d = k(Array.prototype.pop),
        f = k(Array.prototype.push),
        p = k(Array.prototype.slice),
        _ = k(String.prototype.toLowerCase),
        m = k(String.prototype.match),
        g = k(String.prototype.replace),
        v = k(String.prototype.indexOf),
        y = k(String.prototype.trim),
        b = k(RegExp.prototype.test),
        w = T(RegExp),
        x = T(TypeError);

    function k(t) {
      return function (e) {
        for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) {
          n[r - 1] = arguments[r];
        }

        return s(t, e, n);
      };
    }

    function T(t) {
      return function () {
        for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) {
          i[n] = arguments[n];
        }

        return l(t, i);
      };
    }

    function M(t, n) {
      e && e(t, null);

      for (var r = n.length; r--;) {
        var a = n[r];

        if ("string" == typeof a) {
          var o = _(a);

          o !== a && (i(n) || (n[r] = o), a = o);
        }

        t[a] = !0;
      }

      return t;
    }

    function E(e) {
      var i = {},
          n = void 0;

      for (n in e) {
        s(t, e, [n]) && (i[n] = e[n]);
      }

      return i;
    }

    var L = r(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
        S = r(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "audio", "canvas", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "video", "view", "vkern"]),
        D = r(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
        A = r(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
        j = r(["#text"]),
        C = r(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns"]),
        N = r(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
        I = r(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
        O = r(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
        z = a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
        R = a(/<%[\s\S]*|[\s\S]*%>/gm),
        P = a(/^data-[\-\w.\u00B7-\uFFFF]/),
        q = a(/^aria-[\-\w]+$/),
        H = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
        F = a(/^(?:\w+script|data):/i),
        $ = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),
        B = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    };

    function W(t) {
      if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) {
          i[e] = t[e];
        }

        return i;
      }

      return Array.from(t);
    }

    var U = function U() {
      return "undefined" == typeof window ? null : window;
    },
        Z = function Z(t, e) {
      if ("object" !== (void 0 === t ? "undefined" : B(t)) || "function" != typeof t.createPolicy) return null;
      var i = null;
      e.currentScript && e.currentScript.hasAttribute("data-tt-policy-suffix") && (i = e.currentScript.getAttribute("data-tt-policy-suffix"));
      var n = "dompurify" + (i ? "#" + i : "");

      try {
        return t.createPolicy(n, {
          createHTML: function createHTML(t) {
            return t;
          }
        });
      } catch (t) {
        return console.warn("TrustedTypes policy " + n + " could not be created."), null;
      }
    };

    return function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U(),
          i = function i(e) {
        return t(e);
      };

      if (i.version = "2.0.11", i.removed = [], !e || !e.document || 9 !== e.document.nodeType) return i.isSupported = !1, i;
      var a = e.document,
          o = !1,
          s = e.document,
          l = e.DocumentFragment,
          k = e.HTMLTemplateElement,
          T = e.Node,
          G = e.NodeFilter,
          Y = e.NamedNodeMap,
          V = void 0 === Y ? e.NamedNodeMap || e.MozNamedAttrMap : Y,
          J = e.Text,
          X = e.Comment,
          K = e.DOMParser,
          Q = e.trustedTypes;

      if ("function" == typeof k) {
        var tt = s.createElement("template");
        tt.content && tt.content.ownerDocument && (s = tt.content.ownerDocument);
      }

      var et = Z(Q, a),
          it = et ? et.createHTML("") : "",
          nt = s,
          rt = nt.implementation,
          at = nt.createNodeIterator,
          ot = nt.getElementsByTagName,
          st = nt.createDocumentFragment,
          lt = a.importNode,
          ht = {};
      i.isSupported = rt && void 0 !== rt.createHTMLDocument && 9 !== s.documentMode;

      var ct = z,
          ut = R,
          dt = P,
          ft = q,
          pt = F,
          _t = $,
          mt = H,
          gt = null,
          vt = M({}, [].concat(W(L), W(S), W(D), W(A), W(j))),
          yt = null,
          bt = M({}, [].concat(W(C), W(N), W(I), W(O))),
          wt = null,
          xt = null,
          kt = !0,
          Tt = !0,
          Mt = !1,
          Et = !1,
          Lt = !1,
          St = !1,
          Dt = !1,
          At = !1,
          jt = !1,
          Ct = !1,
          Nt = !1,
          It = !1,
          Ot = !0,
          zt = !0,
          Rt = !1,
          Pt = {},
          qt = M({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
          Ht = null,
          Ft = M({}, ["audio", "video", "img", "source", "image", "track"]),
          $t = null,
          Bt = M({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
          Wt = null,
          Ut = s.createElement("form"),
          Zt = function Zt(t) {
        Wt && Wt === t || (t && "object" === (void 0 === t ? "undefined" : B(t)) || (t = {}), gt = "ALLOWED_TAGS" in t ? M({}, t.ALLOWED_TAGS) : vt, yt = "ALLOWED_ATTR" in t ? M({}, t.ALLOWED_ATTR) : bt, $t = "ADD_URI_SAFE_ATTR" in t ? M(E(Bt), t.ADD_URI_SAFE_ATTR) : Bt, Ht = "ADD_DATA_URI_TAGS" in t ? M(E(Ft), t.ADD_DATA_URI_TAGS) : Ft, wt = "FORBID_TAGS" in t ? M({}, t.FORBID_TAGS) : {}, xt = "FORBID_ATTR" in t ? M({}, t.FORBID_ATTR) : {}, Pt = "USE_PROFILES" in t && t.USE_PROFILES, kt = !1 !== t.ALLOW_ARIA_ATTR, Tt = !1 !== t.ALLOW_DATA_ATTR, Mt = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Et = t.SAFE_FOR_JQUERY || !1, Lt = t.SAFE_FOR_TEMPLATES || !1, St = t.WHOLE_DOCUMENT || !1, jt = t.RETURN_DOM || !1, Ct = t.RETURN_DOM_FRAGMENT || !1, Nt = t.RETURN_DOM_IMPORT || !1, It = t.RETURN_TRUSTED_TYPE || !1, At = t.FORCE_BODY || !1, Ot = !1 !== t.SANITIZE_DOM, zt = !1 !== t.KEEP_CONTENT, Rt = t.IN_PLACE || !1, mt = t.ALLOWED_URI_REGEXP || mt, Lt && (Tt = !1), Ct && (jt = !0), Pt && (gt = M({}, [].concat(W(j))), yt = [], !0 === Pt.html && (M(gt, L), M(yt, C)), !0 === Pt.svg && (M(gt, S), M(yt, N), M(yt, O)), !0 === Pt.svgFilters && (M(gt, D), M(yt, N), M(yt, O)), !0 === Pt.mathMl && (M(gt, A), M(yt, I), M(yt, O))), t.ADD_TAGS && (gt === vt && (gt = E(gt)), M(gt, t.ADD_TAGS)), t.ADD_ATTR && (yt === bt && (yt = E(yt)), M(yt, t.ADD_ATTR)), t.ADD_URI_SAFE_ATTR && M($t, t.ADD_URI_SAFE_ATTR), zt && (gt["#text"] = !0), St && M(gt, ["html", "head", "body"]), gt.table && (M(gt, ["tbody"]), delete wt.tbody), r && r(t), Wt = t);
      },
          Gt = function Gt(t) {
        f(i.removed, {
          element: t
        });

        try {
          t.parentNode.removeChild(t);
        } catch (e) {
          t.outerHTML = it;
        }
      },
          Yt = function Yt(t, e) {
        try {
          f(i.removed, {
            attribute: e.getAttributeNode(t),
            from: e
          });
        } catch (t) {
          f(i.removed, {
            attribute: null,
            from: e
          });
        }

        e.removeAttribute(t);
      },
          Vt = function Vt(t) {
        var e = void 0,
            i = void 0;
        if (At) t = "<remove></remove>" + t;else {
          var n = m(t, /^[\r\n\t ]+/);
          i = n && n[0];
        }
        var r = et ? et.createHTML(t) : t;

        try {
          e = new K().parseFromString(r, "text/html");
        } catch (t) {}

        if (o && M(wt, ["title"]), !e || !e.documentElement) {
          var a = (e = rt.createHTMLDocument("")).body;
          a.parentNode.removeChild(a.parentNode.firstElementChild), a.outerHTML = r;
        }

        return t && i && e.body.insertBefore(s.createTextNode(i), e.body.childNodes[0] || null), ot.call(e, St ? "html" : "body")[0];
      };

      i.isSupported && function () {
        try {
          var t = Vt("<x/><title>&lt;/title&gt;&lt;img&gt;");
          b(/<\/title/, t.querySelector("title").innerHTML) && (o = !0);
        } catch (t) {}
      }();

      var Jt = function Jt(t) {
        return at.call(t.ownerDocument || t, t, G.SHOW_ELEMENT | G.SHOW_COMMENT | G.SHOW_TEXT, function () {
          return G.FILTER_ACCEPT;
        }, !1);
      },
          Xt = function Xt(t) {
        return !(t instanceof J || t instanceof X || "string" == typeof t.nodeName && "string" == typeof t.textContent && "function" == typeof t.removeChild && t.attributes instanceof V && "function" == typeof t.removeAttribute && "function" == typeof t.setAttribute && "string" == typeof t.namespaceURI);
      },
          Kt = function Kt(t) {
        return "object" === (void 0 === T ? "undefined" : B(T)) ? t instanceof T : t && "object" === (void 0 === t ? "undefined" : B(t)) && "number" == typeof t.nodeType && "string" == typeof t.nodeName;
      },
          Qt = function Qt(t, e, n) {
        ht[t] && h(ht[t], function (t) {
          t.call(i, e, n, Wt);
        });
      },
          te = function te(t) {
        var e = void 0;
        if (Qt("beforeSanitizeElements", t, null), Xt(t)) return Gt(t), !0;

        var n = _(t.nodeName);

        if (Qt("uponSanitizeElement", t, {
          tagName: n,
          allowedTags: gt
        }), ("svg" === n || "math" === n) && 0 !== t.querySelectorAll("p, br").length) return Gt(t), !0;

        if (!gt[n] || wt[n]) {
          if (zt && !qt[n] && "function" == typeof t.insertAdjacentHTML) try {
            var r = t.innerHTML;
            t.insertAdjacentHTML("AfterEnd", et ? et.createHTML(r) : r);
          } catch (t) {}
          return Gt(t), !0;
        }

        return "noscript" === n && b(/<\/noscript/i, t.innerHTML) || "noembed" === n && b(/<\/noembed/i, t.innerHTML) ? (Gt(t), !0) : (!Et || t.firstElementChild || t.content && t.content.firstElementChild || !b(/</g, t.textContent) || (f(i.removed, {
          element: t.cloneNode()
        }), t.innerHTML ? t.innerHTML = g(t.innerHTML, /</g, "&lt;") : t.innerHTML = g(t.textContent, /</g, "&lt;")), Lt && 3 === t.nodeType && (e = t.textContent, e = g(e, ct, " "), e = g(e, ut, " "), t.textContent !== e && (f(i.removed, {
          element: t.cloneNode()
        }), t.textContent = e)), Qt("afterSanitizeElements", t, null), !1);
      },
          ee = function ee(t, e, i) {
        if (Ot && ("id" === e || "name" === e) && (i in s || i in Ut)) return !1;
        if (Tt && b(dt, e)) ;else if (kt && b(ft, e)) ;else {
          if (!yt[e] || xt[e]) return !1;
          if ($t[e]) ;else if (b(mt, g(i, _t, ""))) ;else if ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== v(i, "data:") || !Ht[t]) if (Mt && !b(pt, g(i, _t, ""))) ;else if (i) return !1;
        }
        return !0;
      },
          ie = function ie(t) {
        var e = void 0,
            r = void 0,
            a = void 0,
            o = void 0,
            s = void 0;
        Qt("beforeSanitizeAttributes", t, null);
        var l = t.attributes;

        if (l) {
          var h = {
            attrName: "",
            attrValue: "",
            keepAttr: !0,
            allowedAttributes: yt
          };

          for (s = l.length; s--;) {
            var f = e = l[s],
                m = f.name,
                v = f.namespaceURI;

            if (r = y(e.value), a = _(m), h.attrName = a, h.attrValue = r, h.keepAttr = !0, h.forceKeepAttr = void 0, Qt("uponSanitizeAttribute", t, h), r = h.attrValue, !h.forceKeepAttr) {
              if ("name" === a && "IMG" === t.nodeName && l.id) o = l.id, l = p(l, []), Yt("id", t), Yt(m, t), c(l, o) > s && t.setAttribute("id", o.value);else {
                if ("INPUT" === t.nodeName && "type" === a && "file" === r && h.keepAttr && (yt[a] || !xt[a])) continue;
                "id" === m && t.setAttribute(m, ""), Yt(m, t);
              }
              if (h.keepAttr) if (Et && b(/\/>/i, r)) Yt(m, t);else if (b(/svg|math/i, t.namespaceURI) && b(w("</(" + u(n(qt), "|") + ")", "i"), r)) Yt(m, t);else {
                Lt && (r = g(r, ct, " "), r = g(r, ut, " "));
                var x = t.nodeName.toLowerCase();
                if (ee(x, a, r)) try {
                  v ? t.setAttributeNS(v, m, r) : t.setAttribute(m, r), d(i.removed);
                } catch (t) {}
              }
            }
          }

          Qt("afterSanitizeAttributes", t, null);
        }
      },
          ne = function t(e) {
        var i = void 0,
            n = Jt(e);

        for (Qt("beforeSanitizeShadowDOM", e, null); i = n.nextNode();) {
          Qt("uponSanitizeShadowNode", i, null), te(i) || (i.content instanceof l && t(i.content), ie(i));
        }

        Qt("afterSanitizeShadowDOM", e, null);
      };

      return i.sanitize = function (t, n) {
        var r = void 0,
            o = void 0,
            s = void 0,
            h = void 0,
            c = void 0;

        if (t || (t = "\x3c!--\x3e"), "string" != typeof t && !Kt(t)) {
          if ("function" != typeof t.toString) throw x("toString is not a function");
          if ("string" != typeof (t = t.toString())) throw x("dirty is not a string, aborting");
        }

        if (!i.isSupported) {
          if ("object" === B(e.toStaticHTML) || "function" == typeof e.toStaticHTML) {
            if ("string" == typeof t) return e.toStaticHTML(t);
            if (Kt(t)) return e.toStaticHTML(t.outerHTML);
          }

          return t;
        }

        if (Dt || Zt(n), i.removed = [], "string" == typeof t && (Rt = !1), Rt) ;else if (t instanceof T) 1 === (o = (r = Vt("\x3c!--\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === o.nodeName || "HTML" === o.nodeName ? r = o : r.appendChild(o);else {
          if (!jt && !Lt && !St && It && -1 === t.indexOf("<")) return et ? et.createHTML(t) : t;
          if (!(r = Vt(t))) return jt ? null : it;
        }
        r && At && Gt(r.firstChild);

        for (var u = Jt(Rt ? t : r); s = u.nextNode();) {
          3 === s.nodeType && s === h || te(s) || (s.content instanceof l && ne(s.content), ie(s), h = s);
        }

        if (h = null, Rt) return t;

        if (jt) {
          if (Ct) for (c = st.call(r.ownerDocument); r.firstChild;) {
            c.appendChild(r.firstChild);
          } else c = r;
          return Nt && (c = lt.call(a, c, !0)), c;
        }

        var d = St ? r.outerHTML : r.innerHTML;
        return Lt && (d = g(d, ct, " "), d = g(d, ut, " ")), et && It ? et.createHTML(d) : d;
      }, i.setConfig = function (t) {
        Zt(t), Dt = !0;
      }, i.clearConfig = function () {
        Wt = null, Dt = !1;
      }, i.isValidAttribute = function (t, e, i) {
        Wt || Zt({});

        var n = _(t),
            r = _(e);

        return ee(n, r, i);
      }, i.addHook = function (t, e) {
        "function" == typeof e && (ht[t] = ht[t] || [], f(ht[t], e));
      }, i.removeHook = function (t) {
        ht[t] && d(ht[t]);
      }, i.removeHooks = function (t) {
        ht[t] && (ht[t] = []);
      }, i.removeAllHooks = function () {
        ht = {};
      }, i;
    }();
  }();
}, function (t, e, i) {}, function (t, e, i) {
  (function (t, n) {
    var r;
    /**
     * @license
     * Lodash <https://lodash.com/>
     * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    (function () {
      var a = "Expected a function",
          o = "__lodash_placeholder__",
          s = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]],
          l = "[object Arguments]",
          h = "[object Array]",
          c = "[object Boolean]",
          u = "[object Date]",
          d = "[object Error]",
          f = "[object Function]",
          p = "[object GeneratorFunction]",
          _ = "[object Map]",
          m = "[object Number]",
          g = "[object Object]",
          v = "[object RegExp]",
          y = "[object Set]",
          b = "[object String]",
          w = "[object Symbol]",
          x = "[object WeakMap]",
          k = "[object ArrayBuffer]",
          T = "[object DataView]",
          M = "[object Float32Array]",
          E = "[object Float64Array]",
          L = "[object Int8Array]",
          S = "[object Int16Array]",
          D = "[object Int32Array]",
          A = "[object Uint8Array]",
          j = "[object Uint16Array]",
          C = "[object Uint32Array]",
          N = /\b__p \+= '';/g,
          I = /\b(__p \+=) '' \+/g,
          O = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          z = /&(?:amp|lt|gt|quot|#39);/g,
          R = /[&<>"']/g,
          P = RegExp(z.source),
          q = RegExp(R.source),
          H = /<%-([\s\S]+?)%>/g,
          F = /<%([\s\S]+?)%>/g,
          $ = /<%=([\s\S]+?)%>/g,
          B = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          W = /^\w*$/,
          U = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          Z = /[\\^$.*+?()[\]{}|]/g,
          G = RegExp(Z.source),
          Y = /^\s+|\s+$/g,
          V = /^\s+/,
          J = /\s+$/,
          X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          K = /\{\n\/\* \[wrapped with (.+)\] \*/,
          Q = /,? & /,
          tt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
          et = /\\(\\)?/g,
          it = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          nt = /\w*$/,
          rt = /^[-+]0x[0-9a-f]+$/i,
          at = /^0b[01]+$/i,
          ot = /^\[object .+?Constructor\]$/,
          st = /^0o[0-7]+$/i,
          lt = /^(?:0|[1-9]\d*)$/,
          ht = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          ct = /($^)/,
          ut = /['\n\r\u2028\u2029\\]/g,
          dt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
          ft = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          pt = "[\\ud800-\\udfff]",
          _t = "[" + ft + "]",
          mt = "[" + dt + "]",
          gt = "\\d+",
          vt = "[\\u2700-\\u27bf]",
          yt = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
          bt = "[^\\ud800-\\udfff" + ft + gt + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
          wt = "\\ud83c[\\udffb-\\udfff]",
          xt = "[^\\ud800-\\udfff]",
          kt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          Tt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          Mt = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
          Et = "(?:" + yt + "|" + bt + ")",
          Lt = "(?:" + Mt + "|" + bt + ")",
          St = "(?:" + mt + "|" + wt + ")" + "?",
          Dt = "[\\ufe0e\\ufe0f]?" + St + ("(?:\\u200d(?:" + [xt, kt, Tt].join("|") + ")[\\ufe0e\\ufe0f]?" + St + ")*"),
          At = "(?:" + [vt, kt, Tt].join("|") + ")" + Dt,
          jt = "(?:" + [xt + mt + "?", mt, kt, Tt, pt].join("|") + ")",
          Ct = RegExp("['’]", "g"),
          Nt = RegExp(mt, "g"),
          It = RegExp(wt + "(?=" + wt + ")|" + jt + Dt, "g"),
          Ot = RegExp([Mt + "?" + yt + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [_t, Mt, "$"].join("|") + ")", Lt + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [_t, Mt + Et, "$"].join("|") + ")", Mt + "?" + Et + "+(?:['’](?:d|ll|m|re|s|t|ve))?", Mt + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", gt, At].join("|"), "g"),
          zt = RegExp("[\\u200d\\ud800-\\udfff" + dt + "\\ufe0e\\ufe0f]"),
          Rt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          Pt = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
          qt = -1,
          Ht = {};

      Ht[M] = Ht[E] = Ht[L] = Ht[S] = Ht[D] = Ht[A] = Ht["[object Uint8ClampedArray]"] = Ht[j] = Ht[C] = !0, Ht[l] = Ht[h] = Ht[k] = Ht[c] = Ht[T] = Ht[u] = Ht[d] = Ht[f] = Ht[_] = Ht[m] = Ht[g] = Ht[v] = Ht[y] = Ht[b] = Ht[x] = !1;
      var Ft = {};
      Ft[l] = Ft[h] = Ft[k] = Ft[T] = Ft[c] = Ft[u] = Ft[M] = Ft[E] = Ft[L] = Ft[S] = Ft[D] = Ft[_] = Ft[m] = Ft[g] = Ft[v] = Ft[y] = Ft[b] = Ft[w] = Ft[A] = Ft["[object Uint8ClampedArray]"] = Ft[j] = Ft[C] = !0, Ft[d] = Ft[f] = Ft[x] = !1;

      var $t = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      },
          Bt = parseFloat,
          Wt = parseInt,
          Ut = "object" == _typeof(t) && t && t.Object === Object && t,
          Zt = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
          Gt = Ut || Zt || Function("return this")(),
          Yt = e && !e.nodeType && e,
          Vt = Yt && "object" == _typeof(n) && n && !n.nodeType && n,
          Jt = Vt && Vt.exports === Yt,
          Xt = Jt && Ut.process,
          Kt = function () {
        try {
          var t = Vt && Vt.require && Vt.require("util").types;

          return t || Xt && Xt.binding && Xt.binding("util");
        } catch (t) {}
      }(),
          Qt = Kt && Kt.isArrayBuffer,
          te = Kt && Kt.isDate,
          ee = Kt && Kt.isMap,
          ie = Kt && Kt.isRegExp,
          ne = Kt && Kt.isSet,
          re = Kt && Kt.isTypedArray;

      function ae(t, e, i) {
        switch (i.length) {
          case 0:
            return t.call(e);

          case 1:
            return t.call(e, i[0]);

          case 2:
            return t.call(e, i[0], i[1]);

          case 3:
            return t.call(e, i[0], i[1], i[2]);
        }

        return t.apply(e, i);
      }

      function oe(t, e, i, n) {
        for (var r = -1, a = null == t ? 0 : t.length; ++r < a;) {
          var o = t[r];
          e(n, o, i(o), t);
        }

        return n;
      }

      function se(t, e) {
        for (var i = -1, n = null == t ? 0 : t.length; ++i < n && !1 !== e(t[i], i, t);) {
          ;
        }

        return t;
      }

      function le(t, e) {
        for (var i = null == t ? 0 : t.length; i-- && !1 !== e(t[i], i, t);) {
          ;
        }

        return t;
      }

      function he(t, e) {
        for (var i = -1, n = null == t ? 0 : t.length; ++i < n;) {
          if (!e(t[i], i, t)) return !1;
        }

        return !0;
      }

      function ce(t, e) {
        for (var i = -1, n = null == t ? 0 : t.length, r = 0, a = []; ++i < n;) {
          var o = t[i];
          e(o, i, t) && (a[r++] = o);
        }

        return a;
      }

      function ue(t, e) {
        return !!(null == t ? 0 : t.length) && we(t, e, 0) > -1;
      }

      function de(t, e, i) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) {
          if (i(e, t[n])) return !0;
        }

        return !1;
      }

      function fe(t, e) {
        for (var i = -1, n = null == t ? 0 : t.length, r = Array(n); ++i < n;) {
          r[i] = e(t[i], i, t);
        }

        return r;
      }

      function pe(t, e) {
        for (var i = -1, n = e.length, r = t.length; ++i < n;) {
          t[r + i] = e[i];
        }

        return t;
      }

      function _e(t, e, i, n) {
        var r = -1,
            a = null == t ? 0 : t.length;

        for (n && a && (i = t[++r]); ++r < a;) {
          i = e(i, t[r], r, t);
        }

        return i;
      }

      function me(t, e, i, n) {
        var r = null == t ? 0 : t.length;

        for (n && r && (i = t[--r]); r--;) {
          i = e(i, t[r], r, t);
        }

        return i;
      }

      function ge(t, e) {
        for (var i = -1, n = null == t ? 0 : t.length; ++i < n;) {
          if (e(t[i], i, t)) return !0;
        }

        return !1;
      }

      var ve = Me("length");

      function ye(t, e, i) {
        var n;
        return i(t, function (t, i, r) {
          if (e(t, i, r)) return n = i, !1;
        }), n;
      }

      function be(t, e, i, n) {
        for (var r = t.length, a = i + (n ? 1 : -1); n ? a-- : ++a < r;) {
          if (e(t[a], a, t)) return a;
        }

        return -1;
      }

      function we(t, e, i) {
        return e == e ? function (t, e, i) {
          var n = i - 1,
              r = t.length;

          for (; ++n < r;) {
            if (t[n] === e) return n;
          }

          return -1;
        }(t, e, i) : be(t, ke, i);
      }

      function xe(t, e, i, n) {
        for (var r = i - 1, a = t.length; ++r < a;) {
          if (n(t[r], e)) return r;
        }

        return -1;
      }

      function ke(t) {
        return t != t;
      }

      function Te(t, e) {
        var i = null == t ? 0 : t.length;
        return i ? Se(t, e) / i : NaN;
      }

      function Me(t) {
        return function (e) {
          return null == e ? void 0 : e[t];
        };
      }

      function Ee(t) {
        return function (e) {
          return null == t ? void 0 : t[e];
        };
      }

      function Le(t, e, i, n, r) {
        return r(t, function (t, r, a) {
          i = n ? (n = !1, t) : e(i, t, r, a);
        }), i;
      }

      function Se(t, e) {
        for (var i, n = -1, r = t.length; ++n < r;) {
          var a = e(t[n]);
          void 0 !== a && (i = void 0 === i ? a : i + a);
        }

        return i;
      }

      function De(t, e) {
        for (var i = -1, n = Array(t); ++i < t;) {
          n[i] = e(i);
        }

        return n;
      }

      function Ae(t) {
        return function (e) {
          return t(e);
        };
      }

      function je(t, e) {
        return fe(e, function (e) {
          return t[e];
        });
      }

      function Ce(t, e) {
        return t.has(e);
      }

      function Ne(t, e) {
        for (var i = -1, n = t.length; ++i < n && we(e, t[i], 0) > -1;) {
          ;
        }

        return i;
      }

      function Ie(t, e) {
        for (var i = t.length; i-- && we(e, t[i], 0) > -1;) {
          ;
        }

        return i;
      }

      function Oe(t, e) {
        for (var i = t.length, n = 0; i--;) {
          t[i] === e && ++n;
        }

        return n;
      }

      var ze = Ee({
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "Ç": "C",
        "ç": "c",
        "Ð": "D",
        "ð": "d",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "Ñ": "N",
        "ñ": "n",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "Ý": "Y",
        "ý": "y",
        "ÿ": "y",
        "Æ": "Ae",
        "æ": "ae",
        "Þ": "Th",
        "þ": "th",
        "ß": "ss",
        "Ā": "A",
        "Ă": "A",
        "Ą": "A",
        "ā": "a",
        "ă": "a",
        "ą": "a",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "Ď": "D",
        "Đ": "D",
        "ď": "d",
        "đ": "d",
        "Ē": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ę": "E",
        "Ě": "E",
        "ē": "e",
        "ĕ": "e",
        "ė": "e",
        "ę": "e",
        "ě": "e",
        "Ĝ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ģ": "G",
        "ĝ": "g",
        "ğ": "g",
        "ġ": "g",
        "ģ": "g",
        "Ĥ": "H",
        "Ħ": "H",
        "ĥ": "h",
        "ħ": "h",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "Į": "I",
        "İ": "I",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "į": "i",
        "ı": "i",
        "Ĵ": "J",
        "ĵ": "j",
        "Ķ": "K",
        "ķ": "k",
        "ĸ": "k",
        "Ĺ": "L",
        "Ļ": "L",
        "Ľ": "L",
        "Ŀ": "L",
        "Ł": "L",
        "ĺ": "l",
        "ļ": "l",
        "ľ": "l",
        "ŀ": "l",
        "ł": "l",
        "Ń": "N",
        "Ņ": "N",
        "Ň": "N",
        "Ŋ": "N",
        "ń": "n",
        "ņ": "n",
        "ň": "n",
        "ŋ": "n",
        "Ō": "O",
        "Ŏ": "O",
        "Ő": "O",
        "ō": "o",
        "ŏ": "o",
        "ő": "o",
        "Ŕ": "R",
        "Ŗ": "R",
        "Ř": "R",
        "ŕ": "r",
        "ŗ": "r",
        "ř": "r",
        "Ś": "S",
        "Ŝ": "S",
        "Ş": "S",
        "Š": "S",
        "ś": "s",
        "ŝ": "s",
        "ş": "s",
        "š": "s",
        "Ţ": "T",
        "Ť": "T",
        "Ŧ": "T",
        "ţ": "t",
        "ť": "t",
        "ŧ": "t",
        "Ũ": "U",
        "Ū": "U",
        "Ŭ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ų": "U",
        "ũ": "u",
        "ū": "u",
        "ŭ": "u",
        "ů": "u",
        "ű": "u",
        "ų": "u",
        "Ŵ": "W",
        "ŵ": "w",
        "Ŷ": "Y",
        "ŷ": "y",
        "Ÿ": "Y",
        "Ź": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "ź": "z",
        "ż": "z",
        "ž": "z",
        "Ĳ": "IJ",
        "ĳ": "ij",
        "Œ": "Oe",
        "œ": "oe",
        "ŉ": "'n",
        "ſ": "s"
      }),
          Re = Ee({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      });

      function Pe(t) {
        return "\\" + $t[t];
      }

      function qe(t) {
        return zt.test(t);
      }

      function He(t) {
        var e = -1,
            i = Array(t.size);
        return t.forEach(function (t, n) {
          i[++e] = [n, t];
        }), i;
      }

      function Fe(t, e) {
        return function (i) {
          return t(e(i));
        };
      }

      function $e(t, e) {
        for (var i = -1, n = t.length, r = 0, a = []; ++i < n;) {
          var s = t[i];
          s !== e && s !== o || (t[i] = o, a[r++] = i);
        }

        return a;
      }

      function Be(t) {
        var e = -1,
            i = Array(t.size);
        return t.forEach(function (t) {
          i[++e] = t;
        }), i;
      }

      function We(t) {
        var e = -1,
            i = Array(t.size);
        return t.forEach(function (t) {
          i[++e] = [t, t];
        }), i;
      }

      function Ue(t) {
        return qe(t) ? function (t) {
          var e = It.lastIndex = 0;

          for (; It.test(t);) {
            ++e;
          }

          return e;
        }(t) : ve(t);
      }

      function Ze(t) {
        return qe(t) ? function (t) {
          return t.match(It) || [];
        }(t) : function (t) {
          return t.split("");
        }(t);
      }

      var Ge = Ee({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      });

      var Ye = function t(e) {
        var i,
            n = (e = null == e ? Gt : Ye.defaults(Gt.Object(), e, Ye.pick(Gt, Pt))).Array,
            r = e.Date,
            dt = e.Error,
            ft = e.Function,
            pt = e.Math,
            _t = e.Object,
            mt = e.RegExp,
            gt = e.String,
            vt = e.TypeError,
            yt = n.prototype,
            bt = ft.prototype,
            wt = _t.prototype,
            xt = e["__core-js_shared__"],
            kt = bt.toString,
            Tt = wt.hasOwnProperty,
            Mt = 0,
            Et = (i = /[^.]+$/.exec(xt && xt.keys && xt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "",
            Lt = wt.toString,
            St = kt.call(_t),
            Dt = Gt._,
            At = mt("^" + kt.call(Tt).replace(Z, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            jt = Jt ? e.Buffer : void 0,
            It = e.Symbol,
            zt = e.Uint8Array,
            $t = jt ? jt.allocUnsafe : void 0,
            Ut = Fe(_t.getPrototypeOf, _t),
            Zt = _t.create,
            Yt = wt.propertyIsEnumerable,
            Vt = yt.splice,
            Xt = It ? It.isConcatSpreadable : void 0,
            Kt = It ? It.iterator : void 0,
            ve = It ? It.toStringTag : void 0,
            Ee = function () {
          try {
            var t = Qr(_t, "defineProperty");
            return t({}, "", {}), t;
          } catch (t) {}
        }(),
            Ve = e.clearTimeout !== Gt.clearTimeout && e.clearTimeout,
            Je = r && r.now !== Gt.Date.now && r.now,
            Xe = e.setTimeout !== Gt.setTimeout && e.setTimeout,
            Ke = pt.ceil,
            Qe = pt.floor,
            ti = _t.getOwnPropertySymbols,
            ei = jt ? jt.isBuffer : void 0,
            ii = e.isFinite,
            ni = yt.join,
            ri = Fe(_t.keys, _t),
            ai = pt.max,
            oi = pt.min,
            si = r.now,
            li = e.parseInt,
            hi = pt.random,
            ci = yt.reverse,
            ui = Qr(e, "DataView"),
            di = Qr(e, "Map"),
            fi = Qr(e, "Promise"),
            pi = Qr(e, "Set"),
            _i = Qr(e, "WeakMap"),
            mi = Qr(_t, "create"),
            gi = _i && new _i(),
            vi = {},
            yi = Ea(ui),
            bi = Ea(di),
            wi = Ea(fi),
            xi = Ea(pi),
            ki = Ea(_i),
            Ti = It ? It.prototype : void 0,
            Mi = Ti ? Ti.valueOf : void 0,
            Ei = Ti ? Ti.toString : void 0;

        function Li(t) {
          if (Wo(t) && !No(t) && !(t instanceof ji)) {
            if (t instanceof Ai) return t;
            if (Tt.call(t, "__wrapped__")) return La(t);
          }

          return new Ai(t);
        }

        var Si = function () {
          function t() {}

          return function (e) {
            if (!Bo(e)) return {};
            if (Zt) return Zt(e);
            t.prototype = e;
            var i = new t();
            return t.prototype = void 0, i;
          };
        }();

        function Di() {}

        function Ai(t, e) {
          this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0;
        }

        function ji(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
        }

        function Ci(t) {
          var e = -1,
              i = null == t ? 0 : t.length;

          for (this.clear(); ++e < i;) {
            var n = t[e];
            this.set(n[0], n[1]);
          }
        }

        function Ni(t) {
          var e = -1,
              i = null == t ? 0 : t.length;

          for (this.clear(); ++e < i;) {
            var n = t[e];
            this.set(n[0], n[1]);
          }
        }

        function Ii(t) {
          var e = -1,
              i = null == t ? 0 : t.length;

          for (this.clear(); ++e < i;) {
            var n = t[e];
            this.set(n[0], n[1]);
          }
        }

        function Oi(t) {
          var e = -1,
              i = null == t ? 0 : t.length;

          for (this.__data__ = new Ii(); ++e < i;) {
            this.add(t[e]);
          }
        }

        function zi(t) {
          var e = this.__data__ = new Ni(t);
          this.size = e.size;
        }

        function Ri(t, e) {
          var i = No(t),
              n = !i && Co(t),
              r = !i && !n && Ro(t),
              a = !i && !n && !r && Ko(t),
              o = i || n || r || a,
              s = o ? De(t.length, gt) : [],
              l = s.length;

          for (var h in t) {
            !e && !Tt.call(t, h) || o && ("length" == h || r && ("offset" == h || "parent" == h) || a && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || oa(h, l)) || s.push(h);
          }

          return s;
        }

        function Pi(t) {
          var e = t.length;
          return e ? t[zn(0, e - 1)] : void 0;
        }

        function qi(t, e) {
          return ka(gr(t), Yi(e, 0, t.length));
        }

        function Hi(t) {
          return ka(gr(t));
        }

        function Fi(t, e, i) {
          (void 0 === i || Do(t[e], i)) && (void 0 !== i || e in t) || Zi(t, e, i);
        }

        function $i(t, e, i) {
          var n = t[e];
          Tt.call(t, e) && Do(n, i) && (void 0 !== i || e in t) || Zi(t, e, i);
        }

        function Bi(t, e) {
          for (var i = t.length; i--;) {
            if (Do(t[i][0], e)) return i;
          }

          return -1;
        }

        function Wi(t, e, i, n) {
          return Qi(t, function (t, r, a) {
            e(n, t, i(t), a);
          }), n;
        }

        function Ui(t, e) {
          return t && vr(e, bs(e), t);
        }

        function Zi(t, e, i) {
          "__proto__" == e && Ee ? Ee(t, e, {
            configurable: !0,
            enumerable: !0,
            value: i,
            writable: !0
          }) : t[e] = i;
        }

        function Gi(t, e) {
          for (var i = -1, r = e.length, a = n(r), o = null == t; ++i < r;) {
            a[i] = o ? void 0 : _s(t, e[i]);
          }

          return a;
        }

        function Yi(t, e, i) {
          return t == t && (void 0 !== i && (t = t <= i ? t : i), void 0 !== e && (t = t >= e ? t : e)), t;
        }

        function Vi(t, e, i, n, r, a) {
          var o,
              s = 1 & e,
              h = 2 & e,
              d = 4 & e;
          if (i && (o = r ? i(t, n, r, a) : i(t)), void 0 !== o) return o;
          if (!Bo(t)) return t;
          var x = No(t);

          if (x) {
            if (o = function (t) {
              var e = t.length,
                  i = new t.constructor(e);
              e && "string" == typeof t[0] && Tt.call(t, "index") && (i.index = t.index, i.input = t.input);
              return i;
            }(t), !s) return gr(t, o);
          } else {
            var N = ia(t),
                I = N == f || N == p;
            if (Ro(t)) return ur(t, s);

            if (N == g || N == l || I && !r) {
              if (o = h || I ? {} : ra(t), !s) return h ? function (t, e) {
                return vr(t, ea(t), e);
              }(t, function (t, e) {
                return t && vr(e, ws(e), t);
              }(o, t)) : function (t, e) {
                return vr(t, ta(t), e);
              }(t, Ui(o, t));
            } else {
              if (!Ft[N]) return r ? t : {};

              o = function (t, e, i) {
                var n = t.constructor;

                switch (e) {
                  case k:
                    return dr(t);

                  case c:
                  case u:
                    return new n(+t);

                  case T:
                    return function (t, e) {
                      var i = e ? dr(t.buffer) : t.buffer;
                      return new t.constructor(i, t.byteOffset, t.byteLength);
                    }(t, i);

                  case M:
                  case E:
                  case L:
                  case S:
                  case D:
                  case A:
                  case "[object Uint8ClampedArray]":
                  case j:
                  case C:
                    return fr(t, i);

                  case _:
                    return new n();

                  case m:
                  case b:
                    return new n(t);

                  case v:
                    return function (t) {
                      var e = new t.constructor(t.source, nt.exec(t));
                      return e.lastIndex = t.lastIndex, e;
                    }(t);

                  case y:
                    return new n();

                  case w:
                    return r = t, Mi ? _t(Mi.call(r)) : {};
                }

                var r;
              }(t, N, s);
            }
          }

          a || (a = new zi());
          var O = a.get(t);
          if (O) return O;
          a.set(t, o), Vo(t) ? t.forEach(function (n) {
            o.add(Vi(n, e, i, n, t, a));
          }) : Uo(t) && t.forEach(function (n, r) {
            o.set(r, Vi(n, e, i, r, t, a));
          });
          var z = x ? void 0 : (d ? h ? Zr : Ur : h ? ws : bs)(t);
          return se(z || t, function (n, r) {
            z && (n = t[r = n]), $i(o, r, Vi(n, e, i, r, t, a));
          }), o;
        }

        function Ji(t, e, i) {
          var n = i.length;
          if (null == t) return !n;

          for (t = _t(t); n--;) {
            var r = i[n],
                a = e[r],
                o = t[r];
            if (void 0 === o && !(r in t) || !a(o)) return !1;
          }

          return !0;
        }

        function Xi(t, e, i) {
          if ("function" != typeof t) throw new vt(a);
          return ya(function () {
            t.apply(void 0, i);
          }, e);
        }

        function Ki(t, e, i, n) {
          var r = -1,
              a = ue,
              o = !0,
              s = t.length,
              l = [],
              h = e.length;
          if (!s) return l;
          i && (e = fe(e, Ae(i))), n ? (a = de, o = !1) : e.length >= 200 && (a = Ce, o = !1, e = new Oi(e));

          t: for (; ++r < s;) {
            var c = t[r],
                u = null == i ? c : i(c);

            if (c = n || 0 !== c ? c : 0, o && u == u) {
              for (var d = h; d--;) {
                if (e[d] === u) continue t;
              }

              l.push(c);
            } else a(e, u, n) || l.push(c);
          }

          return l;
        }

        Li.templateSettings = {
          escape: H,
          evaluate: F,
          interpolate: $,
          variable: "",
          imports: {
            _: Li
          }
        }, Li.prototype = Di.prototype, Li.prototype.constructor = Li, Ai.prototype = Si(Di.prototype), Ai.prototype.constructor = Ai, ji.prototype = Si(Di.prototype), ji.prototype.constructor = ji, Ci.prototype.clear = function () {
          this.__data__ = mi ? mi(null) : {}, this.size = 0;
        }, Ci.prototype.delete = function (t) {
          var e = this.has(t) && delete this.__data__[t];
          return this.size -= e ? 1 : 0, e;
        }, Ci.prototype.get = function (t) {
          var e = this.__data__;

          if (mi) {
            var i = e[t];
            return "__lodash_hash_undefined__" === i ? void 0 : i;
          }

          return Tt.call(e, t) ? e[t] : void 0;
        }, Ci.prototype.has = function (t) {
          var e = this.__data__;
          return mi ? void 0 !== e[t] : Tt.call(e, t);
        }, Ci.prototype.set = function (t, e) {
          var i = this.__data__;
          return this.size += this.has(t) ? 0 : 1, i[t] = mi && void 0 === e ? "__lodash_hash_undefined__" : e, this;
        }, Ni.prototype.clear = function () {
          this.__data__ = [], this.size = 0;
        }, Ni.prototype.delete = function (t) {
          var e = this.__data__,
              i = Bi(e, t);
          return !(i < 0) && (i == e.length - 1 ? e.pop() : Vt.call(e, i, 1), --this.size, !0);
        }, Ni.prototype.get = function (t) {
          var e = this.__data__,
              i = Bi(e, t);
          return i < 0 ? void 0 : e[i][1];
        }, Ni.prototype.has = function (t) {
          return Bi(this.__data__, t) > -1;
        }, Ni.prototype.set = function (t, e) {
          var i = this.__data__,
              n = Bi(i, t);
          return n < 0 ? (++this.size, i.push([t, e])) : i[n][1] = e, this;
        }, Ii.prototype.clear = function () {
          this.size = 0, this.__data__ = {
            hash: new Ci(),
            map: new (di || Ni)(),
            string: new Ci()
          };
        }, Ii.prototype.delete = function (t) {
          var e = Xr(this, t).delete(t);
          return this.size -= e ? 1 : 0, e;
        }, Ii.prototype.get = function (t) {
          return Xr(this, t).get(t);
        }, Ii.prototype.has = function (t) {
          return Xr(this, t).has(t);
        }, Ii.prototype.set = function (t, e) {
          var i = Xr(this, t),
              n = i.size;
          return i.set(t, e), this.size += i.size == n ? 0 : 1, this;
        }, Oi.prototype.add = Oi.prototype.push = function (t) {
          return this.__data__.set(t, "__lodash_hash_undefined__"), this;
        }, Oi.prototype.has = function (t) {
          return this.__data__.has(t);
        }, zi.prototype.clear = function () {
          this.__data__ = new Ni(), this.size = 0;
        }, zi.prototype.delete = function (t) {
          var e = this.__data__,
              i = e.delete(t);
          return this.size = e.size, i;
        }, zi.prototype.get = function (t) {
          return this.__data__.get(t);
        }, zi.prototype.has = function (t) {
          return this.__data__.has(t);
        }, zi.prototype.set = function (t, e) {
          var i = this.__data__;

          if (i instanceof Ni) {
            var n = i.__data__;
            if (!di || n.length < 199) return n.push([t, e]), this.size = ++i.size, this;
            i = this.__data__ = new Ii(n);
          }

          return i.set(t, e), this.size = i.size, this;
        };
        var Qi = wr(ln),
            tn = wr(hn, !0);

        function en(t, e) {
          var i = !0;
          return Qi(t, function (t, n, r) {
            return i = !!e(t, n, r);
          }), i;
        }

        function nn(t, e, i) {
          for (var n = -1, r = t.length; ++n < r;) {
            var a = t[n],
                o = e(a);
            if (null != o && (void 0 === s ? o == o && !Xo(o) : i(o, s))) var s = o,
                l = a;
          }

          return l;
        }

        function rn(t, e) {
          var i = [];
          return Qi(t, function (t, n, r) {
            e(t, n, r) && i.push(t);
          }), i;
        }

        function an(t, e, i, n, r) {
          var a = -1,
              o = t.length;

          for (i || (i = aa), r || (r = []); ++a < o;) {
            var s = t[a];
            e > 0 && i(s) ? e > 1 ? an(s, e - 1, i, n, r) : pe(r, s) : n || (r[r.length] = s);
          }

          return r;
        }

        var on = xr(),
            sn = xr(!0);

        function ln(t, e) {
          return t && on(t, e, bs);
        }

        function hn(t, e) {
          return t && sn(t, e, bs);
        }

        function cn(t, e) {
          return ce(e, function (e) {
            return Ho(t[e]);
          });
        }

        function un(t, e) {
          for (var i = 0, n = (e = sr(e, t)).length; null != t && i < n;) {
            t = t[Ma(e[i++])];
          }

          return i && i == n ? t : void 0;
        }

        function dn(t, e, i) {
          var n = e(t);
          return No(t) ? n : pe(n, i(t));
        }

        function fn(t) {
          return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : ve && ve in _t(t) ? function (t) {
            var e = Tt.call(t, ve),
                i = t[ve];

            try {
              t[ve] = void 0;
              var n = !0;
            } catch (t) {}

            var r = Lt.call(t);
            n && (e ? t[ve] = i : delete t[ve]);
            return r;
          }(t) : function (t) {
            return Lt.call(t);
          }(t);
        }

        function pn(t, e) {
          return t > e;
        }

        function _n(t, e) {
          return null != t && Tt.call(t, e);
        }

        function mn(t, e) {
          return null != t && e in _t(t);
        }

        function gn(t, e, i) {
          for (var r = i ? de : ue, a = t[0].length, o = t.length, s = o, l = n(o), h = 1 / 0, c = []; s--;) {
            var u = t[s];
            s && e && (u = fe(u, Ae(e))), h = oi(u.length, h), l[s] = !i && (e || a >= 120 && u.length >= 120) ? new Oi(s && u) : void 0;
          }

          u = t[0];
          var d = -1,
              f = l[0];

          t: for (; ++d < a && c.length < h;) {
            var p = u[d],
                _ = e ? e(p) : p;

            if (p = i || 0 !== p ? p : 0, !(f ? Ce(f, _) : r(c, _, i))) {
              for (s = o; --s;) {
                var m = l[s];
                if (!(m ? Ce(m, _) : r(t[s], _, i))) continue t;
              }

              f && f.push(_), c.push(p);
            }
          }

          return c;
        }

        function vn(t, e, i) {
          var n = null == (t = _a(t, e = sr(e, t))) ? t : t[Ma(Pa(e))];
          return null == n ? void 0 : ae(n, t, i);
        }

        function yn(t) {
          return Wo(t) && fn(t) == l;
        }

        function bn(t, e, i, n, r) {
          return t === e || (null == t || null == e || !Wo(t) && !Wo(e) ? t != t && e != e : function (t, e, i, n, r, a) {
            var o = No(t),
                s = No(e),
                f = o ? h : ia(t),
                p = s ? h : ia(e),
                x = (f = f == l ? g : f) == g,
                M = (p = p == l ? g : p) == g,
                E = f == p;

            if (E && Ro(t)) {
              if (!Ro(e)) return !1;
              o = !0, x = !1;
            }

            if (E && !x) return a || (a = new zi()), o || Ko(t) ? Br(t, e, i, n, r, a) : function (t, e, i, n, r, a, o) {
              switch (i) {
                case T:
                  if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                  t = t.buffer, e = e.buffer;

                case k:
                  return !(t.byteLength != e.byteLength || !a(new zt(t), new zt(e)));

                case c:
                case u:
                case m:
                  return Do(+t, +e);

                case d:
                  return t.name == e.name && t.message == e.message;

                case v:
                case b:
                  return t == e + "";

                case _:
                  var s = He;

                case y:
                  var l = 1 & n;
                  if (s || (s = Be), t.size != e.size && !l) return !1;
                  var h = o.get(t);
                  if (h) return h == e;
                  n |= 2, o.set(t, e);
                  var f = Br(s(t), s(e), n, r, a, o);
                  return o.delete(t), f;

                case w:
                  if (Mi) return Mi.call(t) == Mi.call(e);
              }

              return !1;
            }(t, e, f, i, n, r, a);

            if (!(1 & i)) {
              var L = x && Tt.call(t, "__wrapped__"),
                  S = M && Tt.call(e, "__wrapped__");

              if (L || S) {
                var D = L ? t.value() : t,
                    A = S ? e.value() : e;
                return a || (a = new zi()), r(D, A, i, n, a);
              }
            }

            if (!E) return !1;
            return a || (a = new zi()), function (t, e, i, n, r, a) {
              var o = 1 & i,
                  s = Ur(t),
                  l = s.length,
                  h = Ur(e).length;
              if (l != h && !o) return !1;
              var c = l;

              for (; c--;) {
                var u = s[c];
                if (!(o ? u in e : Tt.call(e, u))) return !1;
              }

              var d = a.get(t),
                  f = a.get(e);
              if (d && f) return d == e && f == t;
              var p = !0;
              a.set(t, e), a.set(e, t);
              var _ = o;

              for (; ++c < l;) {
                u = s[c];
                var m = t[u],
                    g = e[u];
                if (n) var v = o ? n(g, m, u, e, t, a) : n(m, g, u, t, e, a);

                if (!(void 0 === v ? m === g || r(m, g, i, n, a) : v)) {
                  p = !1;
                  break;
                }

                _ || (_ = "constructor" == u);
              }

              if (p && !_) {
                var y = t.constructor,
                    b = e.constructor;
                y != b && "constructor" in t && "constructor" in e && !("function" == typeof y && y instanceof y && "function" == typeof b && b instanceof b) && (p = !1);
              }

              return a.delete(t), a.delete(e), p;
            }(t, e, i, n, r, a);
          }(t, e, i, n, bn, r));
        }

        function wn(t, e, i, n) {
          var r = i.length,
              a = r,
              o = !n;
          if (null == t) return !a;

          for (t = _t(t); r--;) {
            var s = i[r];
            if (o && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
          }

          for (; ++r < a;) {
            var l = (s = i[r])[0],
                h = t[l],
                c = s[1];

            if (o && s[2]) {
              if (void 0 === h && !(l in t)) return !1;
            } else {
              var u = new zi();
              if (n) var d = n(h, c, l, t, e, u);
              if (!(void 0 === d ? bn(c, h, 3, n, u) : d)) return !1;
            }
          }

          return !0;
        }

        function xn(t) {
          return !(!Bo(t) || (e = t, Et && Et in e)) && (Ho(t) ? At : ot).test(Ea(t));
          var e;
        }

        function kn(t) {
          return "function" == typeof t ? t : null == t ? Zs : "object" == _typeof(t) ? No(t) ? Dn(t[0], t[1]) : Sn(t) : el(t);
        }

        function Tn(t) {
          if (!ua(t)) return ri(t);
          var e = [];

          for (var i in _t(t)) {
            Tt.call(t, i) && "constructor" != i && e.push(i);
          }

          return e;
        }

        function Mn(t) {
          if (!Bo(t)) return function (t) {
            var e = [];
            if (null != t) for (var i in _t(t)) {
              e.push(i);
            }
            return e;
          }(t);
          var e = ua(t),
              i = [];

          for (var n in t) {
            ("constructor" != n || !e && Tt.call(t, n)) && i.push(n);
          }

          return i;
        }

        function En(t, e) {
          return t < e;
        }

        function Ln(t, e) {
          var i = -1,
              r = Oo(t) ? n(t.length) : [];
          return Qi(t, function (t, n, a) {
            r[++i] = e(t, n, a);
          }), r;
        }

        function Sn(t) {
          var e = Kr(t);
          return 1 == e.length && e[0][2] ? fa(e[0][0], e[0][1]) : function (i) {
            return i === t || wn(i, t, e);
          };
        }

        function Dn(t, e) {
          return la(t) && da(e) ? fa(Ma(t), e) : function (i) {
            var n = _s(i, t);

            return void 0 === n && n === e ? ms(i, t) : bn(e, n, 3);
          };
        }

        function An(t, e, i, n, r) {
          t !== e && on(e, function (a, o) {
            if (r || (r = new zi()), Bo(a)) !function (t, e, i, n, r, a, o) {
              var s = ga(t, i),
                  l = ga(e, i),
                  h = o.get(l);
              if (h) return void Fi(t, i, h);
              var c = a ? a(s, l, i + "", t, e, o) : void 0,
                  u = void 0 === c;

              if (u) {
                var d = No(l),
                    f = !d && Ro(l),
                    p = !d && !f && Ko(l);
                c = l, d || f || p ? No(s) ? c = s : zo(s) ? c = gr(s) : f ? (u = !1, c = ur(l, !0)) : p ? (u = !1, c = fr(l, !0)) : c = [] : Go(l) || Co(l) ? (c = s, Co(s) ? c = os(s) : Bo(s) && !Ho(s) || (c = ra(l))) : u = !1;
              }

              u && (o.set(l, c), r(c, l, n, a, o), o.delete(l));
              Fi(t, i, c);
            }(t, e, o, i, An, n, r);else {
              var s = n ? n(ga(t, o), a, o + "", t, e, r) : void 0;
              void 0 === s && (s = a), Fi(t, o, s);
            }
          }, ws);
        }

        function jn(t, e) {
          var i = t.length;
          if (i) return oa(e += e < 0 ? i : 0, i) ? t[e] : void 0;
        }

        function Cn(t, e, i) {
          e = e.length ? fe(e, function (t) {
            return No(t) ? function (e) {
              return un(e, 1 === t.length ? t[0] : t);
            } : t;
          }) : [Zs];
          var n = -1;
          return e = fe(e, Ae(Jr())), function (t, e) {
            var i = t.length;

            for (t.sort(e); i--;) {
              t[i] = t[i].value;
            }

            return t;
          }(Ln(t, function (t, i, r) {
            return {
              criteria: fe(e, function (e) {
                return e(t);
              }),
              index: ++n,
              value: t
            };
          }), function (t, e) {
            return function (t, e, i) {
              var n = -1,
                  r = t.criteria,
                  a = e.criteria,
                  o = r.length,
                  s = i.length;

              for (; ++n < o;) {
                var l = pr(r[n], a[n]);

                if (l) {
                  if (n >= s) return l;
                  var h = i[n];
                  return l * ("desc" == h ? -1 : 1);
                }
              }

              return t.index - e.index;
            }(t, e, i);
          });
        }

        function Nn(t, e, i) {
          for (var n = -1, r = e.length, a = {}; ++n < r;) {
            var o = e[n],
                s = un(t, o);
            i(s, o) && Fn(a, sr(o, t), s);
          }

          return a;
        }

        function In(t, e, i, n) {
          var r = n ? xe : we,
              a = -1,
              o = e.length,
              s = t;

          for (t === e && (e = gr(e)), i && (s = fe(t, Ae(i))); ++a < o;) {
            for (var l = 0, h = e[a], c = i ? i(h) : h; (l = r(s, c, l, n)) > -1;) {
              s !== t && Vt.call(s, l, 1), Vt.call(t, l, 1);
            }
          }

          return t;
        }

        function On(t, e) {
          for (var i = t ? e.length : 0, n = i - 1; i--;) {
            var r = e[i];

            if (i == n || r !== a) {
              var a = r;
              oa(r) ? Vt.call(t, r, 1) : Qn(t, r);
            }
          }

          return t;
        }

        function zn(t, e) {
          return t + Qe(hi() * (e - t + 1));
        }

        function Rn(t, e) {
          var i = "";
          if (!t || e < 1 || e > 9007199254740991) return i;

          do {
            e % 2 && (i += t), (e = Qe(e / 2)) && (t += t);
          } while (e);

          return i;
        }

        function Pn(t, e) {
          return ba(pa(t, e, Zs), t + "");
        }

        function qn(t) {
          return Pi(Ds(t));
        }

        function Hn(t, e) {
          var i = Ds(t);
          return ka(i, Yi(e, 0, i.length));
        }

        function Fn(t, e, i, n) {
          if (!Bo(t)) return t;

          for (var r = -1, a = (e = sr(e, t)).length, o = a - 1, s = t; null != s && ++r < a;) {
            var l = Ma(e[r]),
                h = i;
            if ("__proto__" === l || "constructor" === l || "prototype" === l) return t;

            if (r != o) {
              var c = s[l];
              void 0 === (h = n ? n(c, l, s) : void 0) && (h = Bo(c) ? c : oa(e[r + 1]) ? [] : {});
            }

            $i(s, l, h), s = s[l];
          }

          return t;
        }

        var $n = gi ? function (t, e) {
          return gi.set(t, e), t;
        } : Zs,
            Bn = Ee ? function (t, e) {
          return Ee(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Bs(e),
            writable: !0
          });
        } : Zs;

        function Wn(t) {
          return ka(Ds(t));
        }

        function Un(t, e, i) {
          var r = -1,
              a = t.length;
          e < 0 && (e = -e > a ? 0 : a + e), (i = i > a ? a : i) < 0 && (i += a), a = e > i ? 0 : i - e >>> 0, e >>>= 0;

          for (var o = n(a); ++r < a;) {
            o[r] = t[r + e];
          }

          return o;
        }

        function Zn(t, e) {
          var i;
          return Qi(t, function (t, n, r) {
            return !(i = e(t, n, r));
          }), !!i;
        }

        function Gn(t, e, i) {
          var n = 0,
              r = null == t ? n : t.length;

          if ("number" == typeof e && e == e && r <= 2147483647) {
            for (; n < r;) {
              var a = n + r >>> 1,
                  o = t[a];
              null !== o && !Xo(o) && (i ? o <= e : o < e) ? n = a + 1 : r = a;
            }

            return r;
          }

          return Yn(t, e, Zs, i);
        }

        function Yn(t, e, i, n) {
          var r = 0,
              a = null == t ? 0 : t.length;
          if (0 === a) return 0;

          for (var o = (e = i(e)) != e, s = null === e, l = Xo(e), h = void 0 === e; r < a;) {
            var c = Qe((r + a) / 2),
                u = i(t[c]),
                d = void 0 !== u,
                f = null === u,
                p = u == u,
                _ = Xo(u);

            if (o) var m = n || p;else m = h ? p && (n || d) : s ? p && d && (n || !f) : l ? p && d && !f && (n || !_) : !f && !_ && (n ? u <= e : u < e);
            m ? r = c + 1 : a = c;
          }

          return oi(a, 4294967294);
        }

        function Vn(t, e) {
          for (var i = -1, n = t.length, r = 0, a = []; ++i < n;) {
            var o = t[i],
                s = e ? e(o) : o;

            if (!i || !Do(s, l)) {
              var l = s;
              a[r++] = 0 === o ? 0 : o;
            }
          }

          return a;
        }

        function Jn(t) {
          return "number" == typeof t ? t : Xo(t) ? NaN : +t;
        }

        function Xn(t) {
          if ("string" == typeof t) return t;
          if (No(t)) return fe(t, Xn) + "";
          if (Xo(t)) return Ei ? Ei.call(t) : "";
          var e = t + "";
          return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
        }

        function Kn(t, e, i) {
          var n = -1,
              r = ue,
              a = t.length,
              o = !0,
              s = [],
              l = s;
          if (i) o = !1, r = de;else if (a >= 200) {
            var h = e ? null : Rr(t);
            if (h) return Be(h);
            o = !1, r = Ce, l = new Oi();
          } else l = e ? [] : s;

          t: for (; ++n < a;) {
            var c = t[n],
                u = e ? e(c) : c;

            if (c = i || 0 !== c ? c : 0, o && u == u) {
              for (var d = l.length; d--;) {
                if (l[d] === u) continue t;
              }

              e && l.push(u), s.push(c);
            } else r(l, u, i) || (l !== s && l.push(u), s.push(c));
          }

          return s;
        }

        function Qn(t, e) {
          return null == (t = _a(t, e = sr(e, t))) || delete t[Ma(Pa(e))];
        }

        function tr(t, e, i, n) {
          return Fn(t, e, i(un(t, e)), n);
        }

        function er(t, e, i, n) {
          for (var r = t.length, a = n ? r : -1; (n ? a-- : ++a < r) && e(t[a], a, t);) {
            ;
          }

          return i ? Un(t, n ? 0 : a, n ? a + 1 : r) : Un(t, n ? a + 1 : 0, n ? r : a);
        }

        function ir(t, e) {
          var i = t;
          return i instanceof ji && (i = i.value()), _e(e, function (t, e) {
            return e.func.apply(e.thisArg, pe([t], e.args));
          }, i);
        }

        function nr(t, e, i) {
          var r = t.length;
          if (r < 2) return r ? Kn(t[0]) : [];

          for (var a = -1, o = n(r); ++a < r;) {
            for (var s = t[a], l = -1; ++l < r;) {
              l != a && (o[a] = Ki(o[a] || s, t[l], e, i));
            }
          }

          return Kn(an(o, 1), e, i);
        }

        function rr(t, e, i) {
          for (var n = -1, r = t.length, a = e.length, o = {}; ++n < r;) {
            var s = n < a ? e[n] : void 0;
            i(o, t[n], s);
          }

          return o;
        }

        function ar(t) {
          return zo(t) ? t : [];
        }

        function or(t) {
          return "function" == typeof t ? t : Zs;
        }

        function sr(t, e) {
          return No(t) ? t : la(t, e) ? [t] : Ta(ss(t));
        }

        var lr = Pn;

        function hr(t, e, i) {
          var n = t.length;
          return i = void 0 === i ? n : i, !e && i >= n ? t : Un(t, e, i);
        }

        var cr = Ve || function (t) {
          return Gt.clearTimeout(t);
        };

        function ur(t, e) {
          if (e) return t.slice();
          var i = t.length,
              n = $t ? $t(i) : new t.constructor(i);
          return t.copy(n), n;
        }

        function dr(t) {
          var e = new t.constructor(t.byteLength);
          return new zt(e).set(new zt(t)), e;
        }

        function fr(t, e) {
          var i = e ? dr(t.buffer) : t.buffer;
          return new t.constructor(i, t.byteOffset, t.length);
        }

        function pr(t, e) {
          if (t !== e) {
            var i = void 0 !== t,
                n = null === t,
                r = t == t,
                a = Xo(t),
                o = void 0 !== e,
                s = null === e,
                l = e == e,
                h = Xo(e);
            if (!s && !h && !a && t > e || a && o && l && !s && !h || n && o && l || !i && l || !r) return 1;
            if (!n && !a && !h && t < e || h && i && r && !n && !a || s && i && r || !o && r || !l) return -1;
          }

          return 0;
        }

        function _r(t, e, i, r) {
          for (var a = -1, o = t.length, s = i.length, l = -1, h = e.length, c = ai(o - s, 0), u = n(h + c), d = !r; ++l < h;) {
            u[l] = e[l];
          }

          for (; ++a < s;) {
            (d || a < o) && (u[i[a]] = t[a]);
          }

          for (; c--;) {
            u[l++] = t[a++];
          }

          return u;
        }

        function mr(t, e, i, r) {
          for (var a = -1, o = t.length, s = -1, l = i.length, h = -1, c = e.length, u = ai(o - l, 0), d = n(u + c), f = !r; ++a < u;) {
            d[a] = t[a];
          }

          for (var p = a; ++h < c;) {
            d[p + h] = e[h];
          }

          for (; ++s < l;) {
            (f || a < o) && (d[p + i[s]] = t[a++]);
          }

          return d;
        }

        function gr(t, e) {
          var i = -1,
              r = t.length;

          for (e || (e = n(r)); ++i < r;) {
            e[i] = t[i];
          }

          return e;
        }

        function vr(t, e, i, n) {
          var r = !i;
          i || (i = {});

          for (var a = -1, o = e.length; ++a < o;) {
            var s = e[a],
                l = n ? n(i[s], t[s], s, i, t) : void 0;
            void 0 === l && (l = t[s]), r ? Zi(i, s, l) : $i(i, s, l);
          }

          return i;
        }

        function yr(t, e) {
          return function (i, n) {
            var r = No(i) ? oe : Wi,
                a = e ? e() : {};
            return r(i, t, Jr(n, 2), a);
          };
        }

        function br(t) {
          return Pn(function (e, i) {
            var n = -1,
                r = i.length,
                a = r > 1 ? i[r - 1] : void 0,
                o = r > 2 ? i[2] : void 0;

            for (a = t.length > 3 && "function" == typeof a ? (r--, a) : void 0, o && sa(i[0], i[1], o) && (a = r < 3 ? void 0 : a, r = 1), e = _t(e); ++n < r;) {
              var s = i[n];
              s && t(e, s, n, a);
            }

            return e;
          });
        }

        function wr(t, e) {
          return function (i, n) {
            if (null == i) return i;
            if (!Oo(i)) return t(i, n);

            for (var r = i.length, a = e ? r : -1, o = _t(i); (e ? a-- : ++a < r) && !1 !== n(o[a], a, o);) {
              ;
            }

            return i;
          };
        }

        function xr(t) {
          return function (e, i, n) {
            for (var r = -1, a = _t(e), o = n(e), s = o.length; s--;) {
              var l = o[t ? s : ++r];
              if (!1 === i(a[l], l, a)) break;
            }

            return e;
          };
        }

        function kr(t) {
          return function (e) {
            var i = qe(e = ss(e)) ? Ze(e) : void 0,
                n = i ? i[0] : e.charAt(0),
                r = i ? hr(i, 1).join("") : e.slice(1);
            return n[t]() + r;
          };
        }

        function Tr(t) {
          return function (e) {
            return _e(Hs(Cs(e).replace(Ct, "")), t, "");
          };
        }

        function Mr(t) {
          return function () {
            var e = arguments;

            switch (e.length) {
              case 0:
                return new t();

              case 1:
                return new t(e[0]);

              case 2:
                return new t(e[0], e[1]);

              case 3:
                return new t(e[0], e[1], e[2]);

              case 4:
                return new t(e[0], e[1], e[2], e[3]);

              case 5:
                return new t(e[0], e[1], e[2], e[3], e[4]);

              case 6:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);

              case 7:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
            }

            var i = Si(t.prototype),
                n = t.apply(i, e);
            return Bo(n) ? n : i;
          };
        }

        function Er(t) {
          return function (e, i, n) {
            var r = _t(e);

            if (!Oo(e)) {
              var a = Jr(i, 3);
              e = bs(e), i = function i(t) {
                return a(r[t], t, r);
              };
            }

            var o = t(e, i, n);
            return o > -1 ? r[a ? e[o] : o] : void 0;
          };
        }

        function Lr(t) {
          return Wr(function (e) {
            var i = e.length,
                n = i,
                r = Ai.prototype.thru;

            for (t && e.reverse(); n--;) {
              var o = e[n];
              if ("function" != typeof o) throw new vt(a);
              if (r && !s && "wrapper" == Yr(o)) var s = new Ai([], !0);
            }

            for (n = s ? n : i; ++n < i;) {
              var l = Yr(o = e[n]),
                  h = "wrapper" == l ? Gr(o) : void 0;
              s = h && ha(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? s[Yr(h[0])].apply(s, h[3]) : 1 == o.length && ha(o) ? s[l]() : s.thru(o);
            }

            return function () {
              var t = arguments,
                  n = t[0];
              if (s && 1 == t.length && No(n)) return s.plant(n).value();

              for (var r = 0, a = i ? e[r].apply(this, t) : n; ++r < i;) {
                a = e[r].call(this, a);
              }

              return a;
            };
          });
        }

        function Sr(t, e, i, r, a, o, s, l, h, c) {
          var u = 128 & e,
              d = 1 & e,
              f = 2 & e,
              p = 24 & e,
              _ = 512 & e,
              m = f ? void 0 : Mr(t);

          return function g() {
            for (var v = arguments.length, y = n(v), b = v; b--;) {
              y[b] = arguments[b];
            }

            if (p) var w = Vr(g),
                x = Oe(y, w);

            if (r && (y = _r(y, r, a, p)), o && (y = mr(y, o, s, p)), v -= x, p && v < c) {
              var k = $e(y, w);
              return Or(t, e, Sr, g.placeholder, i, y, k, l, h, c - v);
            }

            var T = d ? i : this,
                M = f ? T[t] : t;
            return v = y.length, l ? y = ma(y, l) : _ && v > 1 && y.reverse(), u && h < v && (y.length = h), this && this !== Gt && this instanceof g && (M = m || Mr(M)), M.apply(T, y);
          };
        }

        function Dr(t, e) {
          return function (i, n) {
            return function (t, e, i, n) {
              return ln(t, function (t, r, a) {
                e(n, i(t), r, a);
              }), n;
            }(i, t, e(n), {});
          };
        }

        function Ar(t, e) {
          return function (i, n) {
            var r;
            if (void 0 === i && void 0 === n) return e;

            if (void 0 !== i && (r = i), void 0 !== n) {
              if (void 0 === r) return n;
              "string" == typeof i || "string" == typeof n ? (i = Xn(i), n = Xn(n)) : (i = Jn(i), n = Jn(n)), r = t(i, n);
            }

            return r;
          };
        }

        function jr(t) {
          return Wr(function (e) {
            return e = fe(e, Ae(Jr())), Pn(function (i) {
              var n = this;
              return t(e, function (t) {
                return ae(t, n, i);
              });
            });
          });
        }

        function Cr(t, e) {
          var i = (e = void 0 === e ? " " : Xn(e)).length;
          if (i < 2) return i ? Rn(e, t) : e;
          var n = Rn(e, Ke(t / Ue(e)));
          return qe(e) ? hr(Ze(n), 0, t).join("") : n.slice(0, t);
        }

        function Nr(t) {
          return function (e, i, r) {
            return r && "number" != typeof r && sa(e, i, r) && (i = r = void 0), e = is(e), void 0 === i ? (i = e, e = 0) : i = is(i), function (t, e, i, r) {
              for (var a = -1, o = ai(Ke((e - t) / (i || 1)), 0), s = n(o); o--;) {
                s[r ? o : ++a] = t, t += i;
              }

              return s;
            }(e, i, r = void 0 === r ? e < i ? 1 : -1 : is(r), t);
          };
        }

        function Ir(t) {
          return function (e, i) {
            return "string" == typeof e && "string" == typeof i || (e = as(e), i = as(i)), t(e, i);
          };
        }

        function Or(t, e, i, n, r, a, o, s, l, h) {
          var c = 8 & e;
          e |= c ? 32 : 64, 4 & (e &= ~(c ? 64 : 32)) || (e &= -4);
          var u = [t, e, r, c ? a : void 0, c ? o : void 0, c ? void 0 : a, c ? void 0 : o, s, l, h],
              d = i.apply(void 0, u);
          return ha(t) && va(d, u), d.placeholder = n, wa(d, t, e);
        }

        function zr(t) {
          var e = pt[t];
          return function (t, i) {
            if (t = as(t), (i = null == i ? 0 : oi(ns(i), 292)) && ii(t)) {
              var n = (ss(t) + "e").split("e");
              return +((n = (ss(e(n[0] + "e" + (+n[1] + i))) + "e").split("e"))[0] + "e" + (+n[1] - i));
            }

            return e(t);
          };
        }

        var Rr = pi && 1 / Be(new pi([, -0]))[1] == 1 / 0 ? function (t) {
          return new pi(t);
        } : Xs;

        function Pr(t) {
          return function (e) {
            var i = ia(e);
            return i == _ ? He(e) : i == y ? We(e) : function (t, e) {
              return fe(e, function (e) {
                return [e, t[e]];
              });
            }(e, t(e));
          };
        }

        function qr(t, e, i, r, s, l, h, c) {
          var u = 2 & e;
          if (!u && "function" != typeof t) throw new vt(a);
          var d = r ? r.length : 0;

          if (d || (e &= -97, r = s = void 0), h = void 0 === h ? h : ai(ns(h), 0), c = void 0 === c ? c : ns(c), d -= s ? s.length : 0, 64 & e) {
            var f = r,
                p = s;
            r = s = void 0;
          }

          var _ = u ? void 0 : Gr(t),
              m = [t, e, i, r, s, f, p, l, h, c];

          if (_ && function (t, e) {
            var i = t[1],
                n = e[1],
                r = i | n,
                a = r < 131,
                s = 128 == n && 8 == i || 128 == n && 256 == i && t[7].length <= e[8] || 384 == n && e[7].length <= e[8] && 8 == i;
            if (!a && !s) return t;
            1 & n && (t[2] = e[2], r |= 1 & i ? 0 : 4);
            var l = e[3];

            if (l) {
              var h = t[3];
              t[3] = h ? _r(h, l, e[4]) : l, t[4] = h ? $e(t[3], o) : e[4];
            }

            (l = e[5]) && (h = t[5], t[5] = h ? mr(h, l, e[6]) : l, t[6] = h ? $e(t[5], o) : e[6]);
            (l = e[7]) && (t[7] = l);
            128 & n && (t[8] = null == t[8] ? e[8] : oi(t[8], e[8]));
            null == t[9] && (t[9] = e[9]);
            t[0] = e[0], t[1] = r;
          }(m, _), t = m[0], e = m[1], i = m[2], r = m[3], s = m[4], !(c = m[9] = void 0 === m[9] ? u ? 0 : t.length : ai(m[9] - d, 0)) && 24 & e && (e &= -25), e && 1 != e) g = 8 == e || 16 == e ? function (t, e, i) {
            var r = Mr(t);
            return function a() {
              for (var o = arguments.length, s = n(o), l = o, h = Vr(a); l--;) {
                s[l] = arguments[l];
              }

              var c = o < 3 && s[0] !== h && s[o - 1] !== h ? [] : $e(s, h);
              if ((o -= c.length) < i) return Or(t, e, Sr, a.placeholder, void 0, s, c, void 0, void 0, i - o);
              var u = this && this !== Gt && this instanceof a ? r : t;
              return ae(u, this, s);
            };
          }(t, e, c) : 32 != e && 33 != e || s.length ? Sr.apply(void 0, m) : function (t, e, i, r) {
            var a = 1 & e,
                o = Mr(t);
            return function e() {
              for (var s = -1, l = arguments.length, h = -1, c = r.length, u = n(c + l), d = this && this !== Gt && this instanceof e ? o : t; ++h < c;) {
                u[h] = r[h];
              }

              for (; l--;) {
                u[h++] = arguments[++s];
              }

              return ae(d, a ? i : this, u);
            };
          }(t, e, i, r);else var g = function (t, e, i) {
            var n = 1 & e,
                r = Mr(t);
            return function e() {
              var a = this && this !== Gt && this instanceof e ? r : t;
              return a.apply(n ? i : this, arguments);
            };
          }(t, e, i);
          return wa((_ ? $n : va)(g, m), t, e);
        }

        function Hr(t, e, i, n) {
          return void 0 === t || Do(t, wt[i]) && !Tt.call(n, i) ? e : t;
        }

        function Fr(t, e, i, n, r, a) {
          return Bo(t) && Bo(e) && (a.set(e, t), An(t, e, void 0, Fr, a), a.delete(e)), t;
        }

        function $r(t) {
          return Go(t) ? void 0 : t;
        }

        function Br(t, e, i, n, r, a) {
          var o = 1 & i,
              s = t.length,
              l = e.length;
          if (s != l && !(o && l > s)) return !1;
          var h = a.get(t),
              c = a.get(e);
          if (h && c) return h == e && c == t;
          var u = -1,
              d = !0,
              f = 2 & i ? new Oi() : void 0;

          for (a.set(t, e), a.set(e, t); ++u < s;) {
            var p = t[u],
                _ = e[u];
            if (n) var m = o ? n(_, p, u, e, t, a) : n(p, _, u, t, e, a);

            if (void 0 !== m) {
              if (m) continue;
              d = !1;
              break;
            }

            if (f) {
              if (!ge(e, function (t, e) {
                if (!Ce(f, e) && (p === t || r(p, t, i, n, a))) return f.push(e);
              })) {
                d = !1;
                break;
              }
            } else if (p !== _ && !r(p, _, i, n, a)) {
              d = !1;
              break;
            }
          }

          return a.delete(t), a.delete(e), d;
        }

        function Wr(t) {
          return ba(pa(t, void 0, Na), t + "");
        }

        function Ur(t) {
          return dn(t, bs, ta);
        }

        function Zr(t) {
          return dn(t, ws, ea);
        }

        var Gr = gi ? function (t) {
          return gi.get(t);
        } : Xs;

        function Yr(t) {
          for (var e = t.name + "", i = vi[e], n = Tt.call(vi, e) ? i.length : 0; n--;) {
            var r = i[n],
                a = r.func;
            if (null == a || a == t) return r.name;
          }

          return e;
        }

        function Vr(t) {
          return (Tt.call(Li, "placeholder") ? Li : t).placeholder;
        }

        function Jr() {
          var t = Li.iteratee || Gs;
          return t = t === Gs ? kn : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }

        function Xr(t, e) {
          var i,
              n,
              r = t.__data__;
          return ("string" == (n = _typeof(i = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? r["string" == typeof e ? "string" : "hash"] : r.map;
        }

        function Kr(t) {
          for (var e = bs(t), i = e.length; i--;) {
            var n = e[i],
                r = t[n];
            e[i] = [n, r, da(r)];
          }

          return e;
        }

        function Qr(t, e) {
          var i = function (t, e) {
            return null == t ? void 0 : t[e];
          }(t, e);

          return xn(i) ? i : void 0;
        }

        var ta = ti ? function (t) {
          return null == t ? [] : (t = _t(t), ce(ti(t), function (e) {
            return Yt.call(t, e);
          }));
        } : rl,
            ea = ti ? function (t) {
          for (var e = []; t;) {
            pe(e, ta(t)), t = Ut(t);
          }

          return e;
        } : rl,
            ia = fn;

        function na(t, e, i) {
          for (var n = -1, r = (e = sr(e, t)).length, a = !1; ++n < r;) {
            var o = Ma(e[n]);
            if (!(a = null != t && i(t, o))) break;
            t = t[o];
          }

          return a || ++n != r ? a : !!(r = null == t ? 0 : t.length) && $o(r) && oa(o, r) && (No(t) || Co(t));
        }

        function ra(t) {
          return "function" != typeof t.constructor || ua(t) ? {} : Si(Ut(t));
        }

        function aa(t) {
          return No(t) || Co(t) || !!(Xt && t && t[Xt]);
        }

        function oa(t, e) {
          var i = _typeof(t);

          return !!(e = null == e ? 9007199254740991 : e) && ("number" == i || "symbol" != i && lt.test(t)) && t > -1 && t % 1 == 0 && t < e;
        }

        function sa(t, e, i) {
          if (!Bo(i)) return !1;

          var n = _typeof(e);

          return !!("number" == n ? Oo(i) && oa(e, i.length) : "string" == n && e in i) && Do(i[e], t);
        }

        function la(t, e) {
          if (No(t)) return !1;

          var i = _typeof(t);

          return !("number" != i && "symbol" != i && "boolean" != i && null != t && !Xo(t)) || W.test(t) || !B.test(t) || null != e && t in _t(e);
        }

        function ha(t) {
          var e = Yr(t),
              i = Li[e];
          if ("function" != typeof i || !(e in ji.prototype)) return !1;
          if (t === i) return !0;
          var n = Gr(i);
          return !!n && t === n[0];
        }

        (ui && ia(new ui(new ArrayBuffer(1))) != T || di && ia(new di()) != _ || fi && "[object Promise]" != ia(fi.resolve()) || pi && ia(new pi()) != y || _i && ia(new _i()) != x) && (ia = function ia(t) {
          var e = fn(t),
              i = e == g ? t.constructor : void 0,
              n = i ? Ea(i) : "";
          if (n) switch (n) {
            case yi:
              return T;

            case bi:
              return _;

            case wi:
              return "[object Promise]";

            case xi:
              return y;

            case ki:
              return x;
          }
          return e;
        });
        var ca = xt ? Ho : al;

        function ua(t) {
          var e = t && t.constructor;
          return t === ("function" == typeof e && e.prototype || wt);
        }

        function da(t) {
          return t == t && !Bo(t);
        }

        function fa(t, e) {
          return function (i) {
            return null != i && i[t] === e && (void 0 !== e || t in _t(i));
          };
        }

        function pa(t, e, i) {
          return e = ai(void 0 === e ? t.length - 1 : e, 0), function () {
            for (var r = arguments, a = -1, o = ai(r.length - e, 0), s = n(o); ++a < o;) {
              s[a] = r[e + a];
            }

            a = -1;

            for (var l = n(e + 1); ++a < e;) {
              l[a] = r[a];
            }

            return l[e] = i(s), ae(t, this, l);
          };
        }

        function _a(t, e) {
          return e.length < 2 ? t : un(t, Un(e, 0, -1));
        }

        function ma(t, e) {
          for (var i = t.length, n = oi(e.length, i), r = gr(t); n--;) {
            var a = e[n];
            t[n] = oa(a, i) ? r[a] : void 0;
          }

          return t;
        }

        function ga(t, e) {
          if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e];
        }

        var va = xa($n),
            ya = Xe || function (t, e) {
          return Gt.setTimeout(t, e);
        },
            ba = xa(Bn);

        function wa(t, e, i) {
          var n = e + "";
          return ba(t, function (t, e) {
            var i = e.length;
            if (!i) return t;
            var n = i - 1;
            return e[n] = (i > 1 ? "& " : "") + e[n], e = e.join(i > 2 ? ", " : " "), t.replace(X, "{\n/* [wrapped with " + e + "] */\n");
          }(n, function (t, e) {
            return se(s, function (i) {
              var n = "_." + i[0];
              e & i[1] && !ue(t, n) && t.push(n);
            }), t.sort();
          }(function (t) {
            var e = t.match(K);
            return e ? e[1].split(Q) : [];
          }(n), i)));
        }

        function xa(t) {
          var e = 0,
              i = 0;
          return function () {
            var n = si(),
                r = 16 - (n - i);

            if (i = n, r > 0) {
              if (++e >= 800) return arguments[0];
            } else e = 0;

            return t.apply(void 0, arguments);
          };
        }

        function ka(t, e) {
          var i = -1,
              n = t.length,
              r = n - 1;

          for (e = void 0 === e ? n : e; ++i < e;) {
            var a = zn(i, r),
                o = t[a];
            t[a] = t[i], t[i] = o;
          }

          return t.length = e, t;
        }

        var Ta = function (t) {
          var e = ko(t, function (t) {
            return 500 === i.size && i.clear(), t;
          }),
              i = e.cache;
          return e;
        }(function (t) {
          var e = [];
          return 46 === t.charCodeAt(0) && e.push(""), t.replace(U, function (t, i, n, r) {
            e.push(n ? r.replace(et, "$1") : i || t);
          }), e;
        });

        function Ma(t) {
          if ("string" == typeof t || Xo(t)) return t;
          var e = t + "";
          return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
        }

        function Ea(t) {
          if (null != t) {
            try {
              return kt.call(t);
            } catch (t) {}

            try {
              return t + "";
            } catch (t) {}
          }

          return "";
        }

        function La(t) {
          if (t instanceof ji) return t.clone();
          var e = new Ai(t.__wrapped__, t.__chain__);
          return e.__actions__ = gr(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e;
        }

        var Sa = Pn(function (t, e) {
          return zo(t) ? Ki(t, an(e, 1, zo, !0)) : [];
        }),
            Da = Pn(function (t, e) {
          var i = Pa(e);
          return zo(i) && (i = void 0), zo(t) ? Ki(t, an(e, 1, zo, !0), Jr(i, 2)) : [];
        }),
            Aa = Pn(function (t, e) {
          var i = Pa(e);
          return zo(i) && (i = void 0), zo(t) ? Ki(t, an(e, 1, zo, !0), void 0, i) : [];
        });

        function ja(t, e, i) {
          var n = null == t ? 0 : t.length;
          if (!n) return -1;
          var r = null == i ? 0 : ns(i);
          return r < 0 && (r = ai(n + r, 0)), be(t, Jr(e, 3), r);
        }

        function Ca(t, e, i) {
          var n = null == t ? 0 : t.length;
          if (!n) return -1;
          var r = n - 1;
          return void 0 !== i && (r = ns(i), r = i < 0 ? ai(n + r, 0) : oi(r, n - 1)), be(t, Jr(e, 3), r, !0);
        }

        function Na(t) {
          return (null == t ? 0 : t.length) ? an(t, 1) : [];
        }

        function Ia(t) {
          return t && t.length ? t[0] : void 0;
        }

        var Oa = Pn(function (t) {
          var e = fe(t, ar);
          return e.length && e[0] === t[0] ? gn(e) : [];
        }),
            za = Pn(function (t) {
          var e = Pa(t),
              i = fe(t, ar);
          return e === Pa(i) ? e = void 0 : i.pop(), i.length && i[0] === t[0] ? gn(i, Jr(e, 2)) : [];
        }),
            Ra = Pn(function (t) {
          var e = Pa(t),
              i = fe(t, ar);
          return (e = "function" == typeof e ? e : void 0) && i.pop(), i.length && i[0] === t[0] ? gn(i, void 0, e) : [];
        });

        function Pa(t) {
          var e = null == t ? 0 : t.length;
          return e ? t[e - 1] : void 0;
        }

        var qa = Pn(Ha);

        function Ha(t, e) {
          return t && t.length && e && e.length ? In(t, e) : t;
        }

        var Fa = Wr(function (t, e) {
          var i = null == t ? 0 : t.length,
              n = Gi(t, e);
          return On(t, fe(e, function (t) {
            return oa(t, i) ? +t : t;
          }).sort(pr)), n;
        });

        function $a(t) {
          return null == t ? t : ci.call(t);
        }

        var Ba = Pn(function (t) {
          return Kn(an(t, 1, zo, !0));
        }),
            Wa = Pn(function (t) {
          var e = Pa(t);
          return zo(e) && (e = void 0), Kn(an(t, 1, zo, !0), Jr(e, 2));
        }),
            Ua = Pn(function (t) {
          var e = Pa(t);
          return e = "function" == typeof e ? e : void 0, Kn(an(t, 1, zo, !0), void 0, e);
        });

        function Za(t) {
          if (!t || !t.length) return [];
          var e = 0;
          return t = ce(t, function (t) {
            if (zo(t)) return e = ai(t.length, e), !0;
          }), De(e, function (e) {
            return fe(t, Me(e));
          });
        }

        function Ga(t, e) {
          if (!t || !t.length) return [];
          var i = Za(t);
          return null == e ? i : fe(i, function (t) {
            return ae(e, void 0, t);
          });
        }

        var Ya = Pn(function (t, e) {
          return zo(t) ? Ki(t, e) : [];
        }),
            Va = Pn(function (t) {
          return nr(ce(t, zo));
        }),
            Ja = Pn(function (t) {
          var e = Pa(t);
          return zo(e) && (e = void 0), nr(ce(t, zo), Jr(e, 2));
        }),
            Xa = Pn(function (t) {
          var e = Pa(t);
          return e = "function" == typeof e ? e : void 0, nr(ce(t, zo), void 0, e);
        }),
            Ka = Pn(Za);
        var Qa = Pn(function (t) {
          var e = t.length,
              i = e > 1 ? t[e - 1] : void 0;
          return i = "function" == typeof i ? (t.pop(), i) : void 0, Ga(t, i);
        });

        function to(t) {
          var e = Li(t);
          return e.__chain__ = !0, e;
        }

        function eo(t, e) {
          return e(t);
        }

        var io = Wr(function (t) {
          var e = t.length,
              i = e ? t[0] : 0,
              n = this.__wrapped__,
              r = function r(e) {
            return Gi(e, t);
          };

          return !(e > 1 || this.__actions__.length) && n instanceof ji && oa(i) ? ((n = n.slice(i, +i + (e ? 1 : 0))).__actions__.push({
            func: eo,
            args: [r],
            thisArg: void 0
          }), new Ai(n, this.__chain__).thru(function (t) {
            return e && !t.length && t.push(void 0), t;
          })) : this.thru(r);
        });
        var no = yr(function (t, e, i) {
          Tt.call(t, i) ? ++t[i] : Zi(t, i, 1);
        });
        var ro = Er(ja),
            ao = Er(Ca);

        function oo(t, e) {
          return (No(t) ? se : Qi)(t, Jr(e, 3));
        }

        function so(t, e) {
          return (No(t) ? le : tn)(t, Jr(e, 3));
        }

        var lo = yr(function (t, e, i) {
          Tt.call(t, i) ? t[i].push(e) : Zi(t, i, [e]);
        });
        var ho = Pn(function (t, e, i) {
          var r = -1,
              a = "function" == typeof e,
              o = Oo(t) ? n(t.length) : [];
          return Qi(t, function (t) {
            o[++r] = a ? ae(e, t, i) : vn(t, e, i);
          }), o;
        }),
            co = yr(function (t, e, i) {
          Zi(t, i, e);
        });

        function uo(t, e) {
          return (No(t) ? fe : Ln)(t, Jr(e, 3));
        }

        var fo = yr(function (t, e, i) {
          t[i ? 0 : 1].push(e);
        }, function () {
          return [[], []];
        });

        var po = Pn(function (t, e) {
          if (null == t) return [];
          var i = e.length;
          return i > 1 && sa(t, e[0], e[1]) ? e = [] : i > 2 && sa(e[0], e[1], e[2]) && (e = [e[0]]), Cn(t, an(e, 1), []);
        }),
            _o = Je || function () {
          return Gt.Date.now();
        };

        function mo(t, e, i) {
          return e = i ? void 0 : e, qr(t, 128, void 0, void 0, void 0, void 0, e = t && null == e ? t.length : e);
        }

        function go(t, e) {
          var i;
          if ("function" != typeof e) throw new vt(a);
          return t = ns(t), function () {
            return --t > 0 && (i = e.apply(this, arguments)), t <= 1 && (e = void 0), i;
          };
        }

        var vo = Pn(function (t, e, i) {
          var n = 1;

          if (i.length) {
            var r = $e(i, Vr(vo));
            n |= 32;
          }

          return qr(t, n, e, i, r);
        }),
            yo = Pn(function (t, e, i) {
          var n = 3;

          if (i.length) {
            var r = $e(i, Vr(yo));
            n |= 32;
          }

          return qr(e, n, t, i, r);
        });

        function bo(t, e, i) {
          var n,
              r,
              o,
              s,
              l,
              h,
              c = 0,
              u = !1,
              d = !1,
              f = !0;
          if ("function" != typeof t) throw new vt(a);

          function p(e) {
            var i = n,
                a = r;
            return n = r = void 0, c = e, s = t.apply(a, i);
          }

          function _(t) {
            return c = t, l = ya(g, e), u ? p(t) : s;
          }

          function m(t) {
            var i = t - h;
            return void 0 === h || i >= e || i < 0 || d && t - c >= o;
          }

          function g() {
            var t = _o();

            if (m(t)) return v(t);
            l = ya(g, function (t) {
              var i = e - (t - h);
              return d ? oi(i, o - (t - c)) : i;
            }(t));
          }

          function v(t) {
            return l = void 0, f && n ? p(t) : (n = r = void 0, s);
          }

          function y() {
            var t = _o(),
                i = m(t);

            if (n = arguments, r = this, h = t, i) {
              if (void 0 === l) return _(h);
              if (d) return cr(l), l = ya(g, e), p(h);
            }

            return void 0 === l && (l = ya(g, e)), s;
          }

          return e = as(e) || 0, Bo(i) && (u = !!i.leading, o = (d = "maxWait" in i) ? ai(as(i.maxWait) || 0, e) : o, f = "trailing" in i ? !!i.trailing : f), y.cancel = function () {
            void 0 !== l && cr(l), c = 0, n = h = r = l = void 0;
          }, y.flush = function () {
            return void 0 === l ? s : v(_o());
          }, y;
        }

        var wo = Pn(function (t, e) {
          return Xi(t, 1, e);
        }),
            xo = Pn(function (t, e, i) {
          return Xi(t, as(e) || 0, i);
        });

        function ko(t, e) {
          if ("function" != typeof t || null != e && "function" != typeof e) throw new vt(a);

          var i = function i() {
            var n = arguments,
                r = e ? e.apply(this, n) : n[0],
                a = i.cache;
            if (a.has(r)) return a.get(r);
            var o = t.apply(this, n);
            return i.cache = a.set(r, o) || a, o;
          };

          return i.cache = new (ko.Cache || Ii)(), i;
        }

        function To(t) {
          if ("function" != typeof t) throw new vt(a);
          return function () {
            var e = arguments;

            switch (e.length) {
              case 0:
                return !t.call(this);

              case 1:
                return !t.call(this, e[0]);

              case 2:
                return !t.call(this, e[0], e[1]);

              case 3:
                return !t.call(this, e[0], e[1], e[2]);
            }

            return !t.apply(this, e);
          };
        }

        ko.Cache = Ii;
        var Mo = lr(function (t, e) {
          var i = (e = 1 == e.length && No(e[0]) ? fe(e[0], Ae(Jr())) : fe(an(e, 1), Ae(Jr()))).length;
          return Pn(function (n) {
            for (var r = -1, a = oi(n.length, i); ++r < a;) {
              n[r] = e[r].call(this, n[r]);
            }

            return ae(t, this, n);
          });
        }),
            Eo = Pn(function (t, e) {
          return qr(t, 32, void 0, e, $e(e, Vr(Eo)));
        }),
            Lo = Pn(function (t, e) {
          return qr(t, 64, void 0, e, $e(e, Vr(Lo)));
        }),
            So = Wr(function (t, e) {
          return qr(t, 256, void 0, void 0, void 0, e);
        });

        function Do(t, e) {
          return t === e || t != t && e != e;
        }

        var Ao = Ir(pn),
            jo = Ir(function (t, e) {
          return t >= e;
        }),
            Co = yn(function () {
          return arguments;
        }()) ? yn : function (t) {
          return Wo(t) && Tt.call(t, "callee") && !Yt.call(t, "callee");
        },
            No = n.isArray,
            Io = Qt ? Ae(Qt) : function (t) {
          return Wo(t) && fn(t) == k;
        };

        function Oo(t) {
          return null != t && $o(t.length) && !Ho(t);
        }

        function zo(t) {
          return Wo(t) && Oo(t);
        }

        var Ro = ei || al,
            Po = te ? Ae(te) : function (t) {
          return Wo(t) && fn(t) == u;
        };

        function qo(t) {
          if (!Wo(t)) return !1;
          var e = fn(t);
          return e == d || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !Go(t);
        }

        function Ho(t) {
          if (!Bo(t)) return !1;
          var e = fn(t);
          return e == f || e == p || "[object AsyncFunction]" == e || "[object Proxy]" == e;
        }

        function Fo(t) {
          return "number" == typeof t && t == ns(t);
        }

        function $o(t) {
          return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
        }

        function Bo(t) {
          var e = _typeof(t);

          return null != t && ("object" == e || "function" == e);
        }

        function Wo(t) {
          return null != t && "object" == _typeof(t);
        }

        var Uo = ee ? Ae(ee) : function (t) {
          return Wo(t) && ia(t) == _;
        };

        function Zo(t) {
          return "number" == typeof t || Wo(t) && fn(t) == m;
        }

        function Go(t) {
          if (!Wo(t) || fn(t) != g) return !1;
          var e = Ut(t);
          if (null === e) return !0;
          var i = Tt.call(e, "constructor") && e.constructor;
          return "function" == typeof i && i instanceof i && kt.call(i) == St;
        }

        var Yo = ie ? Ae(ie) : function (t) {
          return Wo(t) && fn(t) == v;
        };
        var Vo = ne ? Ae(ne) : function (t) {
          return Wo(t) && ia(t) == y;
        };

        function Jo(t) {
          return "string" == typeof t || !No(t) && Wo(t) && fn(t) == b;
        }

        function Xo(t) {
          return "symbol" == _typeof(t) || Wo(t) && fn(t) == w;
        }

        var Ko = re ? Ae(re) : function (t) {
          return Wo(t) && $o(t.length) && !!Ht[fn(t)];
        };
        var Qo = Ir(En),
            ts = Ir(function (t, e) {
          return t <= e;
        });

        function es(t) {
          if (!t) return [];
          if (Oo(t)) return Jo(t) ? Ze(t) : gr(t);
          if (Kt && t[Kt]) return function (t) {
            for (var e, i = []; !(e = t.next()).done;) {
              i.push(e.value);
            }

            return i;
          }(t[Kt]());
          var e = ia(t);
          return (e == _ ? He : e == y ? Be : Ds)(t);
        }

        function is(t) {
          return t ? (t = as(t)) === 1 / 0 || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0;
        }

        function ns(t) {
          var e = is(t),
              i = e % 1;
          return e == e ? i ? e - i : e : 0;
        }

        function rs(t) {
          return t ? Yi(ns(t), 0, 4294967295) : 0;
        }

        function as(t) {
          if ("number" == typeof t) return t;
          if (Xo(t)) return NaN;

          if (Bo(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = Bo(e) ? e + "" : e;
          }

          if ("string" != typeof t) return 0 === t ? t : +t;
          t = t.replace(Y, "");
          var i = at.test(t);
          return i || st.test(t) ? Wt(t.slice(2), i ? 2 : 8) : rt.test(t) ? NaN : +t;
        }

        function os(t) {
          return vr(t, ws(t));
        }

        function ss(t) {
          return null == t ? "" : Xn(t);
        }

        var ls = br(function (t, e) {
          if (ua(e) || Oo(e)) vr(e, bs(e), t);else for (var i in e) {
            Tt.call(e, i) && $i(t, i, e[i]);
          }
        }),
            hs = br(function (t, e) {
          vr(e, ws(e), t);
        }),
            cs = br(function (t, e, i, n) {
          vr(e, ws(e), t, n);
        }),
            us = br(function (t, e, i, n) {
          vr(e, bs(e), t, n);
        }),
            ds = Wr(Gi);
        var fs = Pn(function (t, e) {
          t = _t(t);
          var i = -1,
              n = e.length,
              r = n > 2 ? e[2] : void 0;

          for (r && sa(e[0], e[1], r) && (n = 1); ++i < n;) {
            for (var a = e[i], o = ws(a), s = -1, l = o.length; ++s < l;) {
              var h = o[s],
                  c = t[h];
              (void 0 === c || Do(c, wt[h]) && !Tt.call(t, h)) && (t[h] = a[h]);
            }
          }

          return t;
        }),
            ps = Pn(function (t) {
          return t.push(void 0, Fr), ae(ks, void 0, t);
        });

        function _s(t, e, i) {
          var n = null == t ? void 0 : un(t, e);
          return void 0 === n ? i : n;
        }

        function ms(t, e) {
          return null != t && na(t, e, mn);
        }

        var gs = Dr(function (t, e, i) {
          null != e && "function" != typeof e.toString && (e = Lt.call(e)), t[e] = i;
        }, Bs(Zs)),
            vs = Dr(function (t, e, i) {
          null != e && "function" != typeof e.toString && (e = Lt.call(e)), Tt.call(t, e) ? t[e].push(i) : t[e] = [i];
        }, Jr),
            ys = Pn(vn);

        function bs(t) {
          return Oo(t) ? Ri(t) : Tn(t);
        }

        function ws(t) {
          return Oo(t) ? Ri(t, !0) : Mn(t);
        }

        var xs = br(function (t, e, i) {
          An(t, e, i);
        }),
            ks = br(function (t, e, i, n) {
          An(t, e, i, n);
        }),
            Ts = Wr(function (t, e) {
          var i = {};
          if (null == t) return i;
          var n = !1;
          e = fe(e, function (e) {
            return e = sr(e, t), n || (n = e.length > 1), e;
          }), vr(t, Zr(t), i), n && (i = Vi(i, 7, $r));

          for (var r = e.length; r--;) {
            Qn(i, e[r]);
          }

          return i;
        });
        var Ms = Wr(function (t, e) {
          return null == t ? {} : function (t, e) {
            return Nn(t, e, function (e, i) {
              return ms(t, i);
            });
          }(t, e);
        });

        function Es(t, e) {
          if (null == t) return {};
          var i = fe(Zr(t), function (t) {
            return [t];
          });
          return e = Jr(e), Nn(t, i, function (t, i) {
            return e(t, i[0]);
          });
        }

        var Ls = Pr(bs),
            Ss = Pr(ws);

        function Ds(t) {
          return null == t ? [] : je(t, bs(t));
        }

        var As = Tr(function (t, e, i) {
          return e = e.toLowerCase(), t + (i ? js(e) : e);
        });

        function js(t) {
          return qs(ss(t).toLowerCase());
        }

        function Cs(t) {
          return (t = ss(t)) && t.replace(ht, ze).replace(Nt, "");
        }

        var Ns = Tr(function (t, e, i) {
          return t + (i ? "-" : "") + e.toLowerCase();
        }),
            Is = Tr(function (t, e, i) {
          return t + (i ? " " : "") + e.toLowerCase();
        }),
            Os = kr("toLowerCase");
        var zs = Tr(function (t, e, i) {
          return t + (i ? "_" : "") + e.toLowerCase();
        });
        var Rs = Tr(function (t, e, i) {
          return t + (i ? " " : "") + qs(e);
        });
        var Ps = Tr(function (t, e, i) {
          return t + (i ? " " : "") + e.toUpperCase();
        }),
            qs = kr("toUpperCase");

        function Hs(t, e, i) {
          return t = ss(t), void 0 === (e = i ? void 0 : e) ? function (t) {
            return Rt.test(t);
          }(t) ? function (t) {
            return t.match(Ot) || [];
          }(t) : function (t) {
            return t.match(tt) || [];
          }(t) : t.match(e) || [];
        }

        var Fs = Pn(function (t, e) {
          try {
            return ae(t, void 0, e);
          } catch (t) {
            return qo(t) ? t : new dt(t);
          }
        }),
            $s = Wr(function (t, e) {
          return se(e, function (e) {
            e = Ma(e), Zi(t, e, vo(t[e], t));
          }), t;
        });

        function Bs(t) {
          return function () {
            return t;
          };
        }

        var Ws = Lr(),
            Us = Lr(!0);

        function Zs(t) {
          return t;
        }

        function Gs(t) {
          return kn("function" == typeof t ? t : Vi(t, 1));
        }

        var Ys = Pn(function (t, e) {
          return function (i) {
            return vn(i, t, e);
          };
        }),
            Vs = Pn(function (t, e) {
          return function (i) {
            return vn(t, i, e);
          };
        });

        function Js(t, e, i) {
          var n = bs(e),
              r = cn(e, n);
          null != i || Bo(e) && (r.length || !n.length) || (i = e, e = t, t = this, r = cn(e, bs(e)));
          var a = !(Bo(i) && "chain" in i && !i.chain),
              o = Ho(t);
          return se(r, function (i) {
            var n = e[i];
            t[i] = n, o && (t.prototype[i] = function () {
              var e = this.__chain__;

              if (a || e) {
                var i = t(this.__wrapped__),
                    r = i.__actions__ = gr(this.__actions__);
                return r.push({
                  func: n,
                  args: arguments,
                  thisArg: t
                }), i.__chain__ = e, i;
              }

              return n.apply(t, pe([this.value()], arguments));
            });
          }), t;
        }

        function Xs() {}

        var Ks = jr(fe),
            Qs = jr(he),
            tl = jr(ge);

        function el(t) {
          return la(t) ? Me(Ma(t)) : function (t) {
            return function (e) {
              return un(e, t);
            };
          }(t);
        }

        var il = Nr(),
            nl = Nr(!0);

        function rl() {
          return [];
        }

        function al() {
          return !1;
        }

        var ol = Ar(function (t, e) {
          return t + e;
        }, 0),
            sl = zr("ceil"),
            ll = Ar(function (t, e) {
          return t / e;
        }, 1),
            hl = zr("floor");
        var cl,
            ul = Ar(function (t, e) {
          return t * e;
        }, 1),
            dl = zr("round"),
            fl = Ar(function (t, e) {
          return t - e;
        }, 0);
        return Li.after = function (t, e) {
          if ("function" != typeof e) throw new vt(a);
          return t = ns(t), function () {
            if (--t < 1) return e.apply(this, arguments);
          };
        }, Li.ary = mo, Li.assign = ls, Li.assignIn = hs, Li.assignInWith = cs, Li.assignWith = us, Li.at = ds, Li.before = go, Li.bind = vo, Li.bindAll = $s, Li.bindKey = yo, Li.castArray = function () {
          if (!arguments.length) return [];
          var t = arguments[0];
          return No(t) ? t : [t];
        }, Li.chain = to, Li.chunk = function (t, e, i) {
          e = (i ? sa(t, e, i) : void 0 === e) ? 1 : ai(ns(e), 0);
          var r = null == t ? 0 : t.length;
          if (!r || e < 1) return [];

          for (var a = 0, o = 0, s = n(Ke(r / e)); a < r;) {
            s[o++] = Un(t, a, a += e);
          }

          return s;
        }, Li.compact = function (t) {
          for (var e = -1, i = null == t ? 0 : t.length, n = 0, r = []; ++e < i;) {
            var a = t[e];
            a && (r[n++] = a);
          }

          return r;
        }, Li.concat = function () {
          var t = arguments.length;
          if (!t) return [];

          for (var e = n(t - 1), i = arguments[0], r = t; r--;) {
            e[r - 1] = arguments[r];
          }

          return pe(No(i) ? gr(i) : [i], an(e, 1));
        }, Li.cond = function (t) {
          var e = null == t ? 0 : t.length,
              i = Jr();
          return t = e ? fe(t, function (t) {
            if ("function" != typeof t[1]) throw new vt(a);
            return [i(t[0]), t[1]];
          }) : [], Pn(function (i) {
            for (var n = -1; ++n < e;) {
              var r = t[n];
              if (ae(r[0], this, i)) return ae(r[1], this, i);
            }
          });
        }, Li.conforms = function (t) {
          return function (t) {
            var e = bs(t);
            return function (i) {
              return Ji(i, t, e);
            };
          }(Vi(t, 1));
        }, Li.constant = Bs, Li.countBy = no, Li.create = function (t, e) {
          var i = Si(t);
          return null == e ? i : Ui(i, e);
        }, Li.curry = function t(e, i, n) {
          var r = qr(e, 8, void 0, void 0, void 0, void 0, void 0, i = n ? void 0 : i);
          return r.placeholder = t.placeholder, r;
        }, Li.curryRight = function t(e, i, n) {
          var r = qr(e, 16, void 0, void 0, void 0, void 0, void 0, i = n ? void 0 : i);
          return r.placeholder = t.placeholder, r;
        }, Li.debounce = bo, Li.defaults = fs, Li.defaultsDeep = ps, Li.defer = wo, Li.delay = xo, Li.difference = Sa, Li.differenceBy = Da, Li.differenceWith = Aa, Li.drop = function (t, e, i) {
          var n = null == t ? 0 : t.length;
          return n ? Un(t, (e = i || void 0 === e ? 1 : ns(e)) < 0 ? 0 : e, n) : [];
        }, Li.dropRight = function (t, e, i) {
          var n = null == t ? 0 : t.length;
          return n ? Un(t, 0, (e = n - (e = i || void 0 === e ? 1 : ns(e))) < 0 ? 0 : e) : [];
        }, Li.dropRightWhile = function (t, e) {
          return t && t.length ? er(t, Jr(e, 3), !0, !0) : [];
        }, Li.dropWhile = function (t, e) {
          return t && t.length ? er(t, Jr(e, 3), !0) : [];
        }, Li.fill = function (t, e, i, n) {
          var r = null == t ? 0 : t.length;
          return r ? (i && "number" != typeof i && sa(t, e, i) && (i = 0, n = r), function (t, e, i, n) {
            var r = t.length;

            for ((i = ns(i)) < 0 && (i = -i > r ? 0 : r + i), (n = void 0 === n || n > r ? r : ns(n)) < 0 && (n += r), n = i > n ? 0 : rs(n); i < n;) {
              t[i++] = e;
            }

            return t;
          }(t, e, i, n)) : [];
        }, Li.filter = function (t, e) {
          return (No(t) ? ce : rn)(t, Jr(e, 3));
        }, Li.flatMap = function (t, e) {
          return an(uo(t, e), 1);
        }, Li.flatMapDeep = function (t, e) {
          return an(uo(t, e), 1 / 0);
        }, Li.flatMapDepth = function (t, e, i) {
          return i = void 0 === i ? 1 : ns(i), an(uo(t, e), i);
        }, Li.flatten = Na, Li.flattenDeep = function (t) {
          return (null == t ? 0 : t.length) ? an(t, 1 / 0) : [];
        }, Li.flattenDepth = function (t, e) {
          return (null == t ? 0 : t.length) ? an(t, e = void 0 === e ? 1 : ns(e)) : [];
        }, Li.flip = function (t) {
          return qr(t, 512);
        }, Li.flow = Ws, Li.flowRight = Us, Li.fromPairs = function (t) {
          for (var e = -1, i = null == t ? 0 : t.length, n = {}; ++e < i;) {
            var r = t[e];
            n[r[0]] = r[1];
          }

          return n;
        }, Li.functions = function (t) {
          return null == t ? [] : cn(t, bs(t));
        }, Li.functionsIn = function (t) {
          return null == t ? [] : cn(t, ws(t));
        }, Li.groupBy = lo, Li.initial = function (t) {
          return (null == t ? 0 : t.length) ? Un(t, 0, -1) : [];
        }, Li.intersection = Oa, Li.intersectionBy = za, Li.intersectionWith = Ra, Li.invert = gs, Li.invertBy = vs, Li.invokeMap = ho, Li.iteratee = Gs, Li.keyBy = co, Li.keys = bs, Li.keysIn = ws, Li.map = uo, Li.mapKeys = function (t, e) {
          var i = {};
          return e = Jr(e, 3), ln(t, function (t, n, r) {
            Zi(i, e(t, n, r), t);
          }), i;
        }, Li.mapValues = function (t, e) {
          var i = {};
          return e = Jr(e, 3), ln(t, function (t, n, r) {
            Zi(i, n, e(t, n, r));
          }), i;
        }, Li.matches = function (t) {
          return Sn(Vi(t, 1));
        }, Li.matchesProperty = function (t, e) {
          return Dn(t, Vi(e, 1));
        }, Li.memoize = ko, Li.merge = xs, Li.mergeWith = ks, Li.method = Ys, Li.methodOf = Vs, Li.mixin = Js, Li.negate = To, Li.nthArg = function (t) {
          return t = ns(t), Pn(function (e) {
            return jn(e, t);
          });
        }, Li.omit = Ts, Li.omitBy = function (t, e) {
          return Es(t, To(Jr(e)));
        }, Li.once = function (t) {
          return go(2, t);
        }, Li.orderBy = function (t, e, i, n) {
          return null == t ? [] : (No(e) || (e = null == e ? [] : [e]), No(i = n ? void 0 : i) || (i = null == i ? [] : [i]), Cn(t, e, i));
        }, Li.over = Ks, Li.overArgs = Mo, Li.overEvery = Qs, Li.overSome = tl, Li.partial = Eo, Li.partialRight = Lo, Li.partition = fo, Li.pick = Ms, Li.pickBy = Es, Li.property = el, Li.propertyOf = function (t) {
          return function (e) {
            return null == t ? void 0 : un(t, e);
          };
        }, Li.pull = qa, Li.pullAll = Ha, Li.pullAllBy = function (t, e, i) {
          return t && t.length && e && e.length ? In(t, e, Jr(i, 2)) : t;
        }, Li.pullAllWith = function (t, e, i) {
          return t && t.length && e && e.length ? In(t, e, void 0, i) : t;
        }, Li.pullAt = Fa, Li.range = il, Li.rangeRight = nl, Li.rearg = So, Li.reject = function (t, e) {
          return (No(t) ? ce : rn)(t, To(Jr(e, 3)));
        }, Li.remove = function (t, e) {
          var i = [];
          if (!t || !t.length) return i;
          var n = -1,
              r = [],
              a = t.length;

          for (e = Jr(e, 3); ++n < a;) {
            var o = t[n];
            e(o, n, t) && (i.push(o), r.push(n));
          }

          return On(t, r), i;
        }, Li.rest = function (t, e) {
          if ("function" != typeof t) throw new vt(a);
          return Pn(t, e = void 0 === e ? e : ns(e));
        }, Li.reverse = $a, Li.sampleSize = function (t, e, i) {
          return e = (i ? sa(t, e, i) : void 0 === e) ? 1 : ns(e), (No(t) ? qi : Hn)(t, e);
        }, Li.set = function (t, e, i) {
          return null == t ? t : Fn(t, e, i);
        }, Li.setWith = function (t, e, i, n) {
          return n = "function" == typeof n ? n : void 0, null == t ? t : Fn(t, e, i, n);
        }, Li.shuffle = function (t) {
          return (No(t) ? Hi : Wn)(t);
        }, Li.slice = function (t, e, i) {
          var n = null == t ? 0 : t.length;
          return n ? (i && "number" != typeof i && sa(t, e, i) ? (e = 0, i = n) : (e = null == e ? 0 : ns(e), i = void 0 === i ? n : ns(i)), Un(t, e, i)) : [];
        }, Li.sortBy = po, Li.sortedUniq = function (t) {
          return t && t.length ? Vn(t) : [];
        }, Li.sortedUniqBy = function (t, e) {
          return t && t.length ? Vn(t, Jr(e, 2)) : [];
        }, Li.split = function (t, e, i) {
          return i && "number" != typeof i && sa(t, e, i) && (e = i = void 0), (i = void 0 === i ? 4294967295 : i >>> 0) ? (t = ss(t)) && ("string" == typeof e || null != e && !Yo(e)) && !(e = Xn(e)) && qe(t) ? hr(Ze(t), 0, i) : t.split(e, i) : [];
        }, Li.spread = function (t, e) {
          if ("function" != typeof t) throw new vt(a);
          return e = null == e ? 0 : ai(ns(e), 0), Pn(function (i) {
            var n = i[e],
                r = hr(i, 0, e);
            return n && pe(r, n), ae(t, this, r);
          });
        }, Li.tail = function (t) {
          var e = null == t ? 0 : t.length;
          return e ? Un(t, 1, e) : [];
        }, Li.take = function (t, e, i) {
          return t && t.length ? Un(t, 0, (e = i || void 0 === e ? 1 : ns(e)) < 0 ? 0 : e) : [];
        }, Li.takeRight = function (t, e, i) {
          var n = null == t ? 0 : t.length;
          return n ? Un(t, (e = n - (e = i || void 0 === e ? 1 : ns(e))) < 0 ? 0 : e, n) : [];
        }, Li.takeRightWhile = function (t, e) {
          return t && t.length ? er(t, Jr(e, 3), !1, !0) : [];
        }, Li.takeWhile = function (t, e) {
          return t && t.length ? er(t, Jr(e, 3)) : [];
        }, Li.tap = function (t, e) {
          return e(t), t;
        }, Li.throttle = function (t, e, i) {
          var n = !0,
              r = !0;
          if ("function" != typeof t) throw new vt(a);
          return Bo(i) && (n = "leading" in i ? !!i.leading : n, r = "trailing" in i ? !!i.trailing : r), bo(t, e, {
            leading: n,
            maxWait: e,
            trailing: r
          });
        }, Li.thru = eo, Li.toArray = es, Li.toPairs = Ls, Li.toPairsIn = Ss, Li.toPath = function (t) {
          return No(t) ? fe(t, Ma) : Xo(t) ? [t] : gr(Ta(ss(t)));
        }, Li.toPlainObject = os, Li.transform = function (t, e, i) {
          var n = No(t),
              r = n || Ro(t) || Ko(t);

          if (e = Jr(e, 4), null == i) {
            var a = t && t.constructor;
            i = r ? n ? new a() : [] : Bo(t) && Ho(a) ? Si(Ut(t)) : {};
          }

          return (r ? se : ln)(t, function (t, n, r) {
            return e(i, t, n, r);
          }), i;
        }, Li.unary = function (t) {
          return mo(t, 1);
        }, Li.union = Ba, Li.unionBy = Wa, Li.unionWith = Ua, Li.uniq = function (t) {
          return t && t.length ? Kn(t) : [];
        }, Li.uniqBy = function (t, e) {
          return t && t.length ? Kn(t, Jr(e, 2)) : [];
        }, Li.uniqWith = function (t, e) {
          return e = "function" == typeof e ? e : void 0, t && t.length ? Kn(t, void 0, e) : [];
        }, Li.unset = function (t, e) {
          return null == t || Qn(t, e);
        }, Li.unzip = Za, Li.unzipWith = Ga, Li.update = function (t, e, i) {
          return null == t ? t : tr(t, e, or(i));
        }, Li.updateWith = function (t, e, i, n) {
          return n = "function" == typeof n ? n : void 0, null == t ? t : tr(t, e, or(i), n);
        }, Li.values = Ds, Li.valuesIn = function (t) {
          return null == t ? [] : je(t, ws(t));
        }, Li.without = Ya, Li.words = Hs, Li.wrap = function (t, e) {
          return Eo(or(e), t);
        }, Li.xor = Va, Li.xorBy = Ja, Li.xorWith = Xa, Li.zip = Ka, Li.zipObject = function (t, e) {
          return rr(t || [], e || [], $i);
        }, Li.zipObjectDeep = function (t, e) {
          return rr(t || [], e || [], Fn);
        }, Li.zipWith = Qa, Li.entries = Ls, Li.entriesIn = Ss, Li.extend = hs, Li.extendWith = cs, Js(Li, Li), Li.add = ol, Li.attempt = Fs, Li.camelCase = As, Li.capitalize = js, Li.ceil = sl, Li.clamp = function (t, e, i) {
          return void 0 === i && (i = e, e = void 0), void 0 !== i && (i = (i = as(i)) == i ? i : 0), void 0 !== e && (e = (e = as(e)) == e ? e : 0), Yi(as(t), e, i);
        }, Li.clone = function (t) {
          return Vi(t, 4);
        }, Li.cloneDeep = function (t) {
          return Vi(t, 5);
        }, Li.cloneDeepWith = function (t, e) {
          return Vi(t, 5, e = "function" == typeof e ? e : void 0);
        }, Li.cloneWith = function (t, e) {
          return Vi(t, 4, e = "function" == typeof e ? e : void 0);
        }, Li.conformsTo = function (t, e) {
          return null == e || Ji(t, e, bs(e));
        }, Li.deburr = Cs, Li.defaultTo = function (t, e) {
          return null == t || t != t ? e : t;
        }, Li.divide = ll, Li.endsWith = function (t, e, i) {
          t = ss(t), e = Xn(e);
          var n = t.length,
              r = i = void 0 === i ? n : Yi(ns(i), 0, n);
          return (i -= e.length) >= 0 && t.slice(i, r) == e;
        }, Li.eq = Do, Li.escape = function (t) {
          return (t = ss(t)) && q.test(t) ? t.replace(R, Re) : t;
        }, Li.escapeRegExp = function (t) {
          return (t = ss(t)) && G.test(t) ? t.replace(Z, "\\$&") : t;
        }, Li.every = function (t, e, i) {
          var n = No(t) ? he : en;
          return i && sa(t, e, i) && (e = void 0), n(t, Jr(e, 3));
        }, Li.find = ro, Li.findIndex = ja, Li.findKey = function (t, e) {
          return ye(t, Jr(e, 3), ln);
        }, Li.findLast = ao, Li.findLastIndex = Ca, Li.findLastKey = function (t, e) {
          return ye(t, Jr(e, 3), hn);
        }, Li.floor = hl, Li.forEach = oo, Li.forEachRight = so, Li.forIn = function (t, e) {
          return null == t ? t : on(t, Jr(e, 3), ws);
        }, Li.forInRight = function (t, e) {
          return null == t ? t : sn(t, Jr(e, 3), ws);
        }, Li.forOwn = function (t, e) {
          return t && ln(t, Jr(e, 3));
        }, Li.forOwnRight = function (t, e) {
          return t && hn(t, Jr(e, 3));
        }, Li.get = _s, Li.gt = Ao, Li.gte = jo, Li.has = function (t, e) {
          return null != t && na(t, e, _n);
        }, Li.hasIn = ms, Li.head = Ia, Li.identity = Zs, Li.includes = function (t, e, i, n) {
          t = Oo(t) ? t : Ds(t), i = i && !n ? ns(i) : 0;
          var r = t.length;
          return i < 0 && (i = ai(r + i, 0)), Jo(t) ? i <= r && t.indexOf(e, i) > -1 : !!r && we(t, e, i) > -1;
        }, Li.indexOf = function (t, e, i) {
          var n = null == t ? 0 : t.length;
          if (!n) return -1;
          var r = null == i ? 0 : ns(i);
          return r < 0 && (r = ai(n + r, 0)), we(t, e, r);
        }, Li.inRange = function (t, e, i) {
          return e = is(e), void 0 === i ? (i = e, e = 0) : i = is(i), function (t, e, i) {
            return t >= oi(e, i) && t < ai(e, i);
          }(t = as(t), e, i);
        }, Li.invoke = ys, Li.isArguments = Co, Li.isArray = No, Li.isArrayBuffer = Io, Li.isArrayLike = Oo, Li.isArrayLikeObject = zo, Li.isBoolean = function (t) {
          return !0 === t || !1 === t || Wo(t) && fn(t) == c;
        }, Li.isBuffer = Ro, Li.isDate = Po, Li.isElement = function (t) {
          return Wo(t) && 1 === t.nodeType && !Go(t);
        }, Li.isEmpty = function (t) {
          if (null == t) return !0;
          if (Oo(t) && (No(t) || "string" == typeof t || "function" == typeof t.splice || Ro(t) || Ko(t) || Co(t))) return !t.length;
          var e = ia(t);
          if (e == _ || e == y) return !t.size;
          if (ua(t)) return !Tn(t).length;

          for (var i in t) {
            if (Tt.call(t, i)) return !1;
          }

          return !0;
        }, Li.isEqual = function (t, e) {
          return bn(t, e);
        }, Li.isEqualWith = function (t, e, i) {
          var n = (i = "function" == typeof i ? i : void 0) ? i(t, e) : void 0;
          return void 0 === n ? bn(t, e, void 0, i) : !!n;
        }, Li.isError = qo, Li.isFinite = function (t) {
          return "number" == typeof t && ii(t);
        }, Li.isFunction = Ho, Li.isInteger = Fo, Li.isLength = $o, Li.isMap = Uo, Li.isMatch = function (t, e) {
          return t === e || wn(t, e, Kr(e));
        }, Li.isMatchWith = function (t, e, i) {
          return i = "function" == typeof i ? i : void 0, wn(t, e, Kr(e), i);
        }, Li.isNaN = function (t) {
          return Zo(t) && t != +t;
        }, Li.isNative = function (t) {
          if (ca(t)) throw new dt("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
          return xn(t);
        }, Li.isNil = function (t) {
          return null == t;
        }, Li.isNull = function (t) {
          return null === t;
        }, Li.isNumber = Zo, Li.isObject = Bo, Li.isObjectLike = Wo, Li.isPlainObject = Go, Li.isRegExp = Yo, Li.isSafeInteger = function (t) {
          return Fo(t) && t >= -9007199254740991 && t <= 9007199254740991;
        }, Li.isSet = Vo, Li.isString = Jo, Li.isSymbol = Xo, Li.isTypedArray = Ko, Li.isUndefined = function (t) {
          return void 0 === t;
        }, Li.isWeakMap = function (t) {
          return Wo(t) && ia(t) == x;
        }, Li.isWeakSet = function (t) {
          return Wo(t) && "[object WeakSet]" == fn(t);
        }, Li.join = function (t, e) {
          return null == t ? "" : ni.call(t, e);
        }, Li.kebabCase = Ns, Li.last = Pa, Li.lastIndexOf = function (t, e, i) {
          var n = null == t ? 0 : t.length;
          if (!n) return -1;
          var r = n;
          return void 0 !== i && (r = (r = ns(i)) < 0 ? ai(n + r, 0) : oi(r, n - 1)), e == e ? function (t, e, i) {
            for (var n = i + 1; n--;) {
              if (t[n] === e) return n;
            }

            return n;
          }(t, e, r) : be(t, ke, r, !0);
        }, Li.lowerCase = Is, Li.lowerFirst = Os, Li.lt = Qo, Li.lte = ts, Li.max = function (t) {
          return t && t.length ? nn(t, Zs, pn) : void 0;
        }, Li.maxBy = function (t, e) {
          return t && t.length ? nn(t, Jr(e, 2), pn) : void 0;
        }, Li.mean = function (t) {
          return Te(t, Zs);
        }, Li.meanBy = function (t, e) {
          return Te(t, Jr(e, 2));
        }, Li.min = function (t) {
          return t && t.length ? nn(t, Zs, En) : void 0;
        }, Li.minBy = function (t, e) {
          return t && t.length ? nn(t, Jr(e, 2), En) : void 0;
        }, Li.stubArray = rl, Li.stubFalse = al, Li.stubObject = function () {
          return {};
        }, Li.stubString = function () {
          return "";
        }, Li.stubTrue = function () {
          return !0;
        }, Li.multiply = ul, Li.nth = function (t, e) {
          return t && t.length ? jn(t, ns(e)) : void 0;
        }, Li.noConflict = function () {
          return Gt._ === this && (Gt._ = Dt), this;
        }, Li.noop = Xs, Li.now = _o, Li.pad = function (t, e, i) {
          t = ss(t);
          var n = (e = ns(e)) ? Ue(t) : 0;
          if (!e || n >= e) return t;
          var r = (e - n) / 2;
          return Cr(Qe(r), i) + t + Cr(Ke(r), i);
        }, Li.padEnd = function (t, e, i) {
          t = ss(t);
          var n = (e = ns(e)) ? Ue(t) : 0;
          return e && n < e ? t + Cr(e - n, i) : t;
        }, Li.padStart = function (t, e, i) {
          t = ss(t);
          var n = (e = ns(e)) ? Ue(t) : 0;
          return e && n < e ? Cr(e - n, i) + t : t;
        }, Li.parseInt = function (t, e, i) {
          return i || null == e ? e = 0 : e && (e = +e), li(ss(t).replace(V, ""), e || 0);
        }, Li.random = function (t, e, i) {
          if (i && "boolean" != typeof i && sa(t, e, i) && (e = i = void 0), void 0 === i && ("boolean" == typeof e ? (i = e, e = void 0) : "boolean" == typeof t && (i = t, t = void 0)), void 0 === t && void 0 === e ? (t = 0, e = 1) : (t = is(t), void 0 === e ? (e = t, t = 0) : e = is(e)), t > e) {
            var n = t;
            t = e, e = n;
          }

          if (i || t % 1 || e % 1) {
            var r = hi();
            return oi(t + r * (e - t + Bt("1e-" + ((r + "").length - 1))), e);
          }

          return zn(t, e);
        }, Li.reduce = function (t, e, i) {
          var n = No(t) ? _e : Le,
              r = arguments.length < 3;
          return n(t, Jr(e, 4), i, r, Qi);
        }, Li.reduceRight = function (t, e, i) {
          var n = No(t) ? me : Le,
              r = arguments.length < 3;
          return n(t, Jr(e, 4), i, r, tn);
        }, Li.repeat = function (t, e, i) {
          return e = (i ? sa(t, e, i) : void 0 === e) ? 1 : ns(e), Rn(ss(t), e);
        }, Li.replace = function () {
          var t = arguments,
              e = ss(t[0]);
          return t.length < 3 ? e : e.replace(t[1], t[2]);
        }, Li.result = function (t, e, i) {
          var n = -1,
              r = (e = sr(e, t)).length;

          for (r || (r = 1, t = void 0); ++n < r;) {
            var a = null == t ? void 0 : t[Ma(e[n])];
            void 0 === a && (n = r, a = i), t = Ho(a) ? a.call(t) : a;
          }

          return t;
        }, Li.round = dl, Li.runInContext = t, Li.sample = function (t) {
          return (No(t) ? Pi : qn)(t);
        }, Li.size = function (t) {
          if (null == t) return 0;
          if (Oo(t)) return Jo(t) ? Ue(t) : t.length;
          var e = ia(t);
          return e == _ || e == y ? t.size : Tn(t).length;
        }, Li.snakeCase = zs, Li.some = function (t, e, i) {
          var n = No(t) ? ge : Zn;
          return i && sa(t, e, i) && (e = void 0), n(t, Jr(e, 3));
        }, Li.sortedIndex = function (t, e) {
          return Gn(t, e);
        }, Li.sortedIndexBy = function (t, e, i) {
          return Yn(t, e, Jr(i, 2));
        }, Li.sortedIndexOf = function (t, e) {
          var i = null == t ? 0 : t.length;

          if (i) {
            var n = Gn(t, e);
            if (n < i && Do(t[n], e)) return n;
          }

          return -1;
        }, Li.sortedLastIndex = function (t, e) {
          return Gn(t, e, !0);
        }, Li.sortedLastIndexBy = function (t, e, i) {
          return Yn(t, e, Jr(i, 2), !0);
        }, Li.sortedLastIndexOf = function (t, e) {
          if (null == t ? 0 : t.length) {
            var i = Gn(t, e, !0) - 1;
            if (Do(t[i], e)) return i;
          }

          return -1;
        }, Li.startCase = Rs, Li.startsWith = function (t, e, i) {
          return t = ss(t), i = null == i ? 0 : Yi(ns(i), 0, t.length), e = Xn(e), t.slice(i, i + e.length) == e;
        }, Li.subtract = fl, Li.sum = function (t) {
          return t && t.length ? Se(t, Zs) : 0;
        }, Li.sumBy = function (t, e) {
          return t && t.length ? Se(t, Jr(e, 2)) : 0;
        }, Li.template = function (t, e, i) {
          var n = Li.templateSettings;
          i && sa(t, e, i) && (e = void 0), t = ss(t), e = cs({}, e, n, Hr);
          var r,
              a,
              o = cs({}, e.imports, n.imports, Hr),
              s = bs(o),
              l = je(o, s),
              h = 0,
              c = e.interpolate || ct,
              u = "__p += '",
              d = mt((e.escape || ct).source + "|" + c.source + "|" + (c === $ ? it : ct).source + "|" + (e.evaluate || ct).source + "|$", "g"),
              f = "//# sourceURL=" + (Tt.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++qt + "]") + "\n";
          t.replace(d, function (e, i, n, o, s, l) {
            return n || (n = o), u += t.slice(h, l).replace(ut, Pe), i && (r = !0, u += "' +\n__e(" + i + ") +\n'"), s && (a = !0, u += "';\n" + s + ";\n__p += '"), n && (u += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), h = l + e.length, e;
          }), u += "';\n";
          var p = Tt.call(e, "variable") && e.variable;
          p || (u = "with (obj) {\n" + u + "\n}\n"), u = (a ? u.replace(N, "") : u).replace(I, "$1").replace(O, "$1;"), u = "function(" + (p || "obj") + ") {\n" + (p ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (r ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + u + "return __p\n}";

          var _ = Fs(function () {
            return ft(s, f + "return " + u).apply(void 0, l);
          });

          if (_.source = u, qo(_)) throw _;
          return _;
        }, Li.times = function (t, e) {
          if ((t = ns(t)) < 1 || t > 9007199254740991) return [];
          var i = 4294967295,
              n = oi(t, 4294967295);
          t -= 4294967295;

          for (var r = De(n, e = Jr(e)); ++i < t;) {
            e(i);
          }

          return r;
        }, Li.toFinite = is, Li.toInteger = ns, Li.toLength = rs, Li.toLower = function (t) {
          return ss(t).toLowerCase();
        }, Li.toNumber = as, Li.toSafeInteger = function (t) {
          return t ? Yi(ns(t), -9007199254740991, 9007199254740991) : 0 === t ? t : 0;
        }, Li.toString = ss, Li.toUpper = function (t) {
          return ss(t).toUpperCase();
        }, Li.trim = function (t, e, i) {
          if ((t = ss(t)) && (i || void 0 === e)) return t.replace(Y, "");
          if (!t || !(e = Xn(e))) return t;
          var n = Ze(t),
              r = Ze(e);
          return hr(n, Ne(n, r), Ie(n, r) + 1).join("");
        }, Li.trimEnd = function (t, e, i) {
          if ((t = ss(t)) && (i || void 0 === e)) return t.replace(J, "");
          if (!t || !(e = Xn(e))) return t;
          var n = Ze(t);
          return hr(n, 0, Ie(n, Ze(e)) + 1).join("");
        }, Li.trimStart = function (t, e, i) {
          if ((t = ss(t)) && (i || void 0 === e)) return t.replace(V, "");
          if (!t || !(e = Xn(e))) return t;
          var n = Ze(t);
          return hr(n, Ne(n, Ze(e))).join("");
        }, Li.truncate = function (t, e) {
          var i = 30,
              n = "...";

          if (Bo(e)) {
            var r = "separator" in e ? e.separator : r;
            i = "length" in e ? ns(e.length) : i, n = "omission" in e ? Xn(e.omission) : n;
          }

          var a = (t = ss(t)).length;

          if (qe(t)) {
            var o = Ze(t);
            a = o.length;
          }

          if (i >= a) return t;
          var s = i - Ue(n);
          if (s < 1) return n;
          var l = o ? hr(o, 0, s).join("") : t.slice(0, s);
          if (void 0 === r) return l + n;

          if (o && (s += l.length - s), Yo(r)) {
            if (t.slice(s).search(r)) {
              var h,
                  c = l;

              for (r.global || (r = mt(r.source, ss(nt.exec(r)) + "g")), r.lastIndex = 0; h = r.exec(c);) {
                var u = h.index;
              }

              l = l.slice(0, void 0 === u ? s : u);
            }
          } else if (t.indexOf(Xn(r), s) != s) {
            var d = l.lastIndexOf(r);
            d > -1 && (l = l.slice(0, d));
          }

          return l + n;
        }, Li.unescape = function (t) {
          return (t = ss(t)) && P.test(t) ? t.replace(z, Ge) : t;
        }, Li.uniqueId = function (t) {
          var e = ++Mt;
          return ss(t) + e;
        }, Li.upperCase = Ps, Li.upperFirst = qs, Li.each = oo, Li.eachRight = so, Li.first = Ia, Js(Li, (cl = {}, ln(Li, function (t, e) {
          Tt.call(Li.prototype, e) || (cl[e] = t);
        }), cl), {
          chain: !1
        }), Li.VERSION = "4.17.19", se(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
          Li[t].placeholder = Li;
        }), se(["drop", "take"], function (t, e) {
          ji.prototype[t] = function (i) {
            i = void 0 === i ? 1 : ai(ns(i), 0);
            var n = this.__filtered__ && !e ? new ji(this) : this.clone();
            return n.__filtered__ ? n.__takeCount__ = oi(i, n.__takeCount__) : n.__views__.push({
              size: oi(i, 4294967295),
              type: t + (n.__dir__ < 0 ? "Right" : "")
            }), n;
          }, ji.prototype[t + "Right"] = function (e) {
            return this.reverse()[t](e).reverse();
          };
        }), se(["filter", "map", "takeWhile"], function (t, e) {
          var i = e + 1,
              n = 1 == i || 3 == i;

          ji.prototype[t] = function (t) {
            var e = this.clone();
            return e.__iteratees__.push({
              iteratee: Jr(t, 3),
              type: i
            }), e.__filtered__ = e.__filtered__ || n, e;
          };
        }), se(["head", "last"], function (t, e) {
          var i = "take" + (e ? "Right" : "");

          ji.prototype[t] = function () {
            return this[i](1).value()[0];
          };
        }), se(["initial", "tail"], function (t, e) {
          var i = "drop" + (e ? "" : "Right");

          ji.prototype[t] = function () {
            return this.__filtered__ ? new ji(this) : this[i](1);
          };
        }), ji.prototype.compact = function () {
          return this.filter(Zs);
        }, ji.prototype.find = function (t) {
          return this.filter(t).head();
        }, ji.prototype.findLast = function (t) {
          return this.reverse().find(t);
        }, ji.prototype.invokeMap = Pn(function (t, e) {
          return "function" == typeof t ? new ji(this) : this.map(function (i) {
            return vn(i, t, e);
          });
        }), ji.prototype.reject = function (t) {
          return this.filter(To(Jr(t)));
        }, ji.prototype.slice = function (t, e) {
          t = ns(t);
          var i = this;
          return i.__filtered__ && (t > 0 || e < 0) ? new ji(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), void 0 !== e && (i = (e = ns(e)) < 0 ? i.dropRight(-e) : i.take(e - t)), i);
        }, ji.prototype.takeRightWhile = function (t) {
          return this.reverse().takeWhile(t).reverse();
        }, ji.prototype.toArray = function () {
          return this.take(4294967295);
        }, ln(ji.prototype, function (t, e) {
          var i = /^(?:filter|find|map|reject)|While$/.test(e),
              n = /^(?:head|last)$/.test(e),
              r = Li[n ? "take" + ("last" == e ? "Right" : "") : e],
              a = n || /^find/.test(e);
          r && (Li.prototype[e] = function () {
            var e = this.__wrapped__,
                o = n ? [1] : arguments,
                s = e instanceof ji,
                l = o[0],
                h = s || No(e),
                c = function c(t) {
              var e = r.apply(Li, pe([t], o));
              return n && u ? e[0] : e;
            };

            h && i && "function" == typeof l && 1 != l.length && (s = h = !1);
            var u = this.__chain__,
                d = !!this.__actions__.length,
                f = a && !u,
                p = s && !d;

            if (!a && h) {
              e = p ? e : new ji(this);

              var _ = t.apply(e, o);

              return _.__actions__.push({
                func: eo,
                args: [c],
                thisArg: void 0
              }), new Ai(_, u);
            }

            return f && p ? t.apply(this, o) : (_ = this.thru(c), f ? n ? _.value()[0] : _.value() : _);
          });
        }), se(["pop", "push", "shift", "sort", "splice", "unshift"], function (t) {
          var e = yt[t],
              i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
              n = /^(?:pop|shift)$/.test(t);

          Li.prototype[t] = function () {
            var t = arguments;

            if (n && !this.__chain__) {
              var r = this.value();
              return e.apply(No(r) ? r : [], t);
            }

            return this[i](function (i) {
              return e.apply(No(i) ? i : [], t);
            });
          };
        }), ln(ji.prototype, function (t, e) {
          var i = Li[e];

          if (i) {
            var n = i.name + "";
            Tt.call(vi, n) || (vi[n] = []), vi[n].push({
              name: e,
              func: i
            });
          }
        }), vi[Sr(void 0, 2).name] = [{
          name: "wrapper",
          func: void 0
        }], ji.prototype.clone = function () {
          var t = new ji(this.__wrapped__);
          return t.__actions__ = gr(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = gr(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = gr(this.__views__), t;
        }, ji.prototype.reverse = function () {
          if (this.__filtered__) {
            var t = new ji(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else (t = this.clone()).__dir__ *= -1;

          return t;
        }, ji.prototype.value = function () {
          var t = this.__wrapped__.value(),
              e = this.__dir__,
              i = No(t),
              n = e < 0,
              r = i ? t.length : 0,
              a = function (t, e, i) {
            var n = -1,
                r = i.length;

            for (; ++n < r;) {
              var a = i[n],
                  o = a.size;

              switch (a.type) {
                case "drop":
                  t += o;
                  break;

                case "dropRight":
                  e -= o;
                  break;

                case "take":
                  e = oi(e, t + o);
                  break;

                case "takeRight":
                  t = ai(t, e - o);
              }
            }

            return {
              start: t,
              end: e
            };
          }(0, r, this.__views__),
              o = a.start,
              s = a.end,
              l = s - o,
              h = n ? s : o - 1,
              c = this.__iteratees__,
              u = c.length,
              d = 0,
              f = oi(l, this.__takeCount__);

          if (!i || !n && r == l && f == l) return ir(t, this.__actions__);
          var p = [];

          t: for (; l-- && d < f;) {
            for (var _ = -1, m = t[h += e]; ++_ < u;) {
              var g = c[_],
                  v = g.iteratee,
                  y = g.type,
                  b = v(m);
              if (2 == y) m = b;else if (!b) {
                if (1 == y) continue t;
                break t;
              }
            }

            p[d++] = m;
          }

          return p;
        }, Li.prototype.at = io, Li.prototype.chain = function () {
          return to(this);
        }, Li.prototype.commit = function () {
          return new Ai(this.value(), this.__chain__);
        }, Li.prototype.next = function () {
          void 0 === this.__values__ && (this.__values__ = es(this.value()));
          var t = this.__index__ >= this.__values__.length;
          return {
            done: t,
            value: t ? void 0 : this.__values__[this.__index__++]
          };
        }, Li.prototype.plant = function (t) {
          for (var e, i = this; i instanceof Di;) {
            var n = La(i);
            n.__index__ = 0, n.__values__ = void 0, e ? r.__wrapped__ = n : e = n;
            var r = n;
            i = i.__wrapped__;
          }

          return r.__wrapped__ = t, e;
        }, Li.prototype.reverse = function () {
          var t = this.__wrapped__;

          if (t instanceof ji) {
            var e = t;
            return this.__actions__.length && (e = new ji(this)), (e = e.reverse()).__actions__.push({
              func: eo,
              args: [$a],
              thisArg: void 0
            }), new Ai(e, this.__chain__);
          }

          return this.thru($a);
        }, Li.prototype.toJSON = Li.prototype.valueOf = Li.prototype.value = function () {
          return ir(this.__wrapped__, this.__actions__);
        }, Li.prototype.first = Li.prototype.head, Kt && (Li.prototype[Kt] = function () {
          return this;
        }), Li;
      }();

      Gt._ = Ye, void 0 === (r = function () {
        return Ye;
      }.call(e, i, e, n)) || (n.exports = r);
    }).call(this);
  }).call(this, i(3), i(4)(t));
}, function (t, e) {
  var i;

  i = function () {
    return this;
  }();

  try {
    i = i || new Function("return this")();
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (i = window);
  }

  t.exports = i;
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      get: function get() {
        return t.l;
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0,
      get: function get() {
        return t.i;
      }
    }), t.webpackPolyfill = 1), t;
  };
}, function (t, e, i) {
  "use strict";

  i.r(e), i.d(e, "Timeline", function () {
    return Xe;
  }), i.d(e, "parseGoogleSpreadsheetURL", function () {
    return te;
  }), i.d(e, "lookupMediaType", function () {
    return $e;
  });

  var r = navigator ? navigator.userAgent.toLowerCase() : "no-user-agent-specified",
      a = document ? document.documentElement : null,
      o = !!r && -1 !== r.indexOf("phantom"),
      s = window && "ActiveXObject" in window,
      l = (Boolean(s && r.match(/MSIE 9/i)), s && document && document.addEventListener, -1 !== r.indexOf("webkit")),
      h = (r.indexOf("android"), -1 !== r.search("android [23]")),
      c = !!window && void 0 !== window.orientation,
      u = !(!navigator || !window) && navigator.msPointerEnabled && navigator.msMaxTouchPoints && !window.PointerEvent,
      d = navigator && window ? window.PointerEvent && navigator.pointerEnabled && navigator.maxTouchPoints : u,
      f = !!window && window.opera,
      p = (r.indexOf("gecko"), -1 !== r.indexOf("gecko") && !l && !f && !s),
      _ = (r.indexOf("chrome"), -1 !== r.indexOf("edge/")),
      m = !!a && s && "transition" in a.style,
      g = !!window && "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !h,
      v = !!a && "MozPerspective" in a.style,
      y = !!a && "OTransition" in a.style;

  window && window.L_DISABLE_3D, c && window.opera;
  var b = !!window && "devicePixelRatio" in window && window.devicePixelRatio > 1;

  if (!b && window && "matchMedia" in window) {
    var _t2 = window.matchMedia("(min-resolution:144dpi)");

    b = _t2 && _t2.matches;
  }

  var w = window && !window.L_NO_TOUCH && !o && (d || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch);

  function x(t) {
    return "string" == typeof t ? document.getElementById(t) : t;
  }

  function T(t, e, i) {
    var n = document.createElement(t);
    return n.className = e, i && i.appendChild(n), n;
  }

  function M(t) {
    for (var e = {
      x: 0,
      y: 0
    }; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) {
      e.x += t.offsetLeft, e.y += t.offsetTop, t = t.offsetParent;
    }

    return e;
  }

  function E(t) {
    for (var e = document.documentElement.style, i = 0; i < t.length; i++) {
      if (t[i] in e) return t[i];
    }

    return !1;
  }

  E(["transition", "webkitTransition", "OTransition", "MozTransition", "msTransition"]), E(["transformProperty", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]);

  function L(t, e) {
    (function (t, e) {
      return t.className.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className);
    })(t, e) || (t.className += (t.className ? " " : "") + e);
  }

  function S(t, e) {
    t.className = t.className.replace(/(\S+)\s*/g, function (t, i) {
      return i === e ? "" : t;
    }).replace(/^\s+/, "");
  }

  var D = /*#__PURE__*/function (_Error) {
    _inherits(D, _Error);

    var _super = _createSuper(D);

    function D(t, e) {
      var _this;

      _classCallCheck(this, D);

      _this = _super.call(this), _this.name = "TLError", _this.message = t || "error", _this.message_key = _this.message, _this.detail = e || "";
      return _this;
    }

    return D;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var A = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };

  function j(t) {
    A[t.toLowerCase()] && (t = A[t.toLowerCase()]);
    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, i, n) {
      return e + e + i + i + n + n;
    });
    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return e ? {
      r: parseInt(e[1], 16),
      g: parseInt(e[2], 16),
      b: parseInt(e[3], 16)
    } : null;
  }

  function C(t, e) {
    var i;

    for (i in e) {
      Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }

    return t;
  }

  function N(t) {
    for (var e = Array.prototype.slice.call(arguments, 1), i = 0, n = e.length; i < n; i++) {
      C(t, e[i] || {});
    }

    return t;
  }

  var I = [];

  function O(t) {
    I.forEach(function (e) {
      try {
        e(t);
      } catch (t) {
        console && console.log && console.log("Error handling trace", t);
      }
    });
  }

  function z(t, e) {
    for (t = String(t), e = e || 2; t.length < e;) {
      t = "0" + t;
    }

    return t;
  }

  var R = (P = 0, q = "_tl_id", function (t) {
    return t[q] = t[q] || ++P, t[q];
  });
  var P, q;

  function H(t) {
    return t && "function" == typeof t.replace ? t.replace(/^\s+|\s+$/g, "") : "";
  }

  function F(t) {
    for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      e[_key - 1] = arguments[_key];
    }

    for (var _i2 = 0, _e2 = e; _i2 < _e2.length; _i2++) {
      var _n2 = _e2[_i2];

      var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(_n2.prototype)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;
          t.prototype[i] = _n2.prototype[i];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

  function $(t) {
    t = (t = H(t)).toLowerCase();

    for (var e = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;", i = 0, n = e.length; i < n; i++) {
      t = t.replace(new RegExp(e.charAt(i), "g"), "aaaaaeeeeeiiiiooooouuuunc------".charAt(i));
    }

    return t = (t = t.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")).replace(/^([0-9])/, "_$1");
  }

  function B(t, e) {
    var i = function i() {
      var t;
      return "abcdefghijklmnopqurstuvwxyz".substr((t = 32, Math.floor(Math.random() * t)), 1);
    },
        n = function n(t) {
      for (var e = "", n = 0; n < t; n++) {
        e += i();
      }

      return e;
    };

    return e ? e + "-" + n(t) : "tl-" + n(t);
  }

  function W(t) {
    return t == parseFloat(t) ? !(t % 2) : void 0;
  }

  function U(t, e, i, n) {
    for (var r = n || 0, a = 0; a < e.length; a++) {
      e[a].data[i] == t && (r = a);
    }

    return r;
  }

  function Z(t) {
    return t ? t = (t = t.replace(/<a\b[^>]*>/i, "")).replace(/<\/a>/i, "") : t;
  }

  function G(t) {
    return (t = t.replace(/(<[^>]*>)+/g, "")).replace('"', "'");
  }

  function Y(t, e, i) {
    var n = function n(t, e, i) {
      i || (i = "");
      return e && e.length > 30 && (e = e.substring(0, 30) + "…"), i + "<a class='tl-makelink' href='" + t + "' onclick='void(0)'>" + e + "</a>";
    };

    return t.replace(/\b(?:https?|ftp):\/\/([a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|])/gim, function (t, e, i, r) {
      if (i > 0) {
        var a = r[i - 1];
        if ('"' == a || "'" == a || "=" == a) return t;
      }

      return n(t, e);
    }).replace(/(^|[^\/>])(www\.[\S]+(\b|$))/gim, function (t, e, i, r, a) {
      return n("http://" + i, i, e);
    }).replace(/([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/gim, function (t, e, i, r) {
      return n("mailto:" + e, e);
    });
  }

  function V(t) {
    return t.replace(/(.*)www.dropbox.com\/(.*)/, "$1dl.dropboxusercontent.com/$2");
  }

  var J = function J(t) {
    var e = {
      w: 0,
      h: 0
    };
    return t.w > t.h && t.h > 0 ? (e.h = t.h, e.w = t.h) : (e.w = t.w, e.h = t.w), e;
  },
      X = function X(t) {
    return null !== t.w && "" !== t.w ? Math.round(t.w / 16 * 9) : null !== t.h && "" !== t.h ? Math.round(t.h / 9 * 16) : 0;
  };

  var K = (tt = (Q = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ").length, {
    encode: function encode(t) {
      if ("number" != typeof t || t !== parseInt(t)) throw '"encode" only accepts integers.';

      for (var e = ""; t;) {
        var i = t % tt;
        t = Math.floor(t / tt), e = Q[i].toString() + e;
      }

      return e;
    },
    decode: function decode(t) {
      if ("string" != typeof t) throw '"decode" only accepts strings.';

      for (var e = 0; t;) {
        var i = Q.indexOf(t[0]);
        if (i < 0) throw '"decode" can\'t find "' + t[0] + '" in the alphabet: "' + Q + '"';
        var n = t.length - 1;
        e += i * Math.pow(tt, n), t = t.substring(1);
      }

      return e;
    }
  });
  var Q, tt;

  function et(t) {
    if ("string" == typeof t) {
      var _n3 = t.match(/^\s*(\d+h)?(\d+m)?(\d+s)?\s*/i);

      if (_n3) {
        var e = parseInt(_n3[1]) || 0,
            i = parseInt(_n3[2]) || 0;
        return (parseInt(_n3[3]) || 0) + 60 * i + 60 * e * 60;
      }
    } else if ("number" == typeof t) return t;

    return 0;
  }

  function it(t) {
    return new DOMParser().parseFromString(t, "text/html").body.textContent || "";
  }

  var nt = [.42, 0, 1, 1];

  function rt(t) {}

  function at(t) {
    return new rt(nt).get(t);
  }

  function ot(t) {
    return 1 == t ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function st(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }

  var lt = function lt() {};

  lt.extend = function (t) {
    var e = function e() {
      this.initialize && this.initialize.apply(this, arguments);
    },
        i = function i() {};

    i.prototype = this.prototype;
    var n = new i();

    for (var r in n.constructor = e, e.prototype = n, e.superclass = this.prototype, this) {
      this.hasOwnProperty(r) && "prototype" !== r && "superclass" !== r && (e[r] = this[r]);
    }

    return t.statics && (N(e, t.statics), delete t.statics), t.includes && (N.apply(null, [n].concat(t.includes)), delete t.includes), t.options && n.options && (t.options = N({}, n.options, t.options)), N(n, t), e.extend = lt.extend, e.include = function (t) {
      N(this.prototype, t);
    }, e;
  };

  var ht = /*#__PURE__*/function () {
    function ht() {
      _classCallCheck(this, ht);
    }

    _createClass(ht, [{
      key: "on",
      value: function on(t, e, i) {
        if (!e) throw new D("No callback function provided");
        var n = this._tl_events = this._tl_events || {};
        return n[t] = n[t] || [], n[t].push({
          action: e,
          context: i || this
        }), this;
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(t, e, i) {
        return this.on(t, e, i);
      }
    }, {
      key: "hasEventListeners",
      value: function hasEventListeners(t) {
        var e = "_tl_events";
        return e in this && t in this[e] && this[e][t].length > 0;
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(t, e, i) {
        if (!this.hasEventListeners(t)) return this;

        for (var n = 0, r = this._tl_events, a = r[t].length; n < a; n++) {
          if (r[t][n].action === e && (!i || r[t][n].context === i)) return r[t].splice(n, 1), this;
        }

        return this;
      }
    }, {
      key: "off",
      value: function off(t, e, i) {
        return this.removeEventListener(t, e, i);
      }
    }, {
      key: "fire",
      value: function fire(t, e) {
        if (!this.hasEventListeners(t)) return this;

        for (var i = C({
          type: t,
          target: this
        }, e), n = this._tl_events[t].slice(), r = 0, a = n.length; r < a; r++) {
          n[r].action ? n[r].action.call(n[r].context || this, i) : O("no action defined for ".concat(t, " listener"));
        }

        return this;
      }
    }]);

    return ht;
  }();

  function ct(t, e) {
    return ut(t, e);
  }

  var ut = function () {
    var t = document,
        e = window,
        i = e.performance,
        n = i && (i.now || i.webkitNow || i.msNow || i.mozNow),
        r = n ? function () {
      return n.call(i);
    } : function () {
      return +new Date();
    },
        a = t.documentElement,
        o = !1,
        s = /^rgb\(|#/,
        l = /^([+\-])=([\d\.]+)/,
        h = /^(?:[\+\-]=?)?\d+(?:\.\d+)?(%|in|cm|mm|em|ex|pt|pc|px)$/,
        c = /rotate\(((?:[+\-]=)?([\-\d\.]+))deg\)/,
        u = /scale\(((?:[+\-]=)?([\d\.]+))\)/,
        d = /skew\(((?:[+\-]=)?([\-\d\.]+))deg, ?((?:[+\-]=)?([\-\d\.]+))deg\)/,
        f = /translate\(((?:[+\-]=)?([\-\d\.]+))px, ?((?:[+\-]=)?([\-\d\.]+))px\)/,
        p = {
      lineHeight: 1,
      zoom: 1,
      zIndex: 1,
      opacity: 1,
      transform: 1
    },
        _ = function () {
      var e,
          i = t.createElement("a").style,
          n = ["webkitTransform", "MozTransform", "OTransform", "msTransform", "Transform"];

      for (e = 0; e < n.length; e++) {
        if (n[e] in i) return n[e];
      }
    }(),
        m = void 0 !== t.createElement("a").style.opacity,
        g = t.defaultView && t.defaultView.getComputedStyle ? function (e, i) {
      i = M(i = "transform" == i ? _ : i);
      var n = null,
          r = t.defaultView.getComputedStyle(e, "");
      return r && (n = r[i]), e.style[i] || n;
    } : a.currentStyle ? function (t, e) {
      if ("opacity" == (e = M(e))) {
        var i = 100;

        try {
          i = t.filters["DXImageTransform.Microsoft.Alpha"].opacity;
        } catch (e) {
          try {
            i = t.filters("alpha").opacity;
          } catch (t) {}
        }

        return i / 100;
      }

      var n = t.currentStyle ? t.currentStyle[e] : null;
      return t.style[e] || n;
    } : function (t, e) {
      return t.style[M(e)];
    },
        v = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || e.oRequestAnimationFrame || function (t) {
      e.setTimeout(function () {
        t(+new Date());
      }, 17);
    },
        y = [];

    function b(t) {
      var e,
          i = y.length;

      for (n && t > 1e12 && (t = r()), o && (t = r()), e = i; e--;) {
        y[e](t);
      }

      y.length && v(b);
    }

    function w(t) {
      var e,
          i = function (t, e, i) {
        if (Array.prototype.indexOf) return t.indexOf(e);

        for (i = 0; i < t.length; ++i) {
          if (t[i] === e) return i;
        }
      }(y, t);

      i >= 0 && (e = y.slice(i + 1), y.length = i, y = y.concat(e));
    }

    function x(t, e) {
      var i,
          n = {};
      return (i = t.match(c)) && (n.rotate = j(i[1], e ? e.rotate : null)), (i = t.match(u)) && (n.scale = j(i[1], e ? e.scale : null)), (i = t.match(d)) && (n.skewx = j(i[1], e ? e.skewx : null), n.skewy = j(i[3], e ? e.skewy : null)), (i = t.match(f)) && (n.translatex = j(i[1], e ? e.translatex : null), n.translatey = j(i[3], e ? e.translatey : null)), n;
    }

    function k(t) {
      var e = "";
      return "rotate" in t && (e += "rotate(" + t.rotate + "deg) "), "scale" in t && (e += "scale(" + t.scale + ") "), "translatex" in t && (e += "translate(" + t.translatex + "px," + t.translatey + "px) "), "skewx" in t && (e += "skew(" + t.skewx + "deg," + t.skewy + "deg)"), e;
    }

    function T(t) {
      var e,
          i,
          n,
          r = t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      return (r ? (e = r[1], i = r[2], n = r[3], "#" + (1 << 24 | e << 16 | i << 8 | n).toString(16).slice(1)) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
    }

    function M(t) {
      return t.replace(/-(.)/g, function (t, e) {
        return e.toUpperCase();
      });
    }

    function E(t) {
      return "function" == typeof t;
    }

    function L(t) {
      return Math.sin(t * Math.PI / 2);
    }

    function S(t, e, i, n, a, o) {
      n = E(n) ? n : C.easings[n] || L;
      var s,
          l = t || 1e3,
          h = this,
          c = o - a,
          u = r(),
          d = 0,
          f = 0;
      return s = function t(r) {
        var s = r - u;
        if (s > l || d) return o = isFinite(o) ? o : 1, d ? f && e(o) : e(o), w(t), i && i.apply(h);
        isFinite(o) ? e(c * n(s / l) + a) : e(n(s / l));
      }, 1 === y.push(s) && v(b), {
        stop: function stop(t) {
          d = 1, f = t, t || (i = null);
        }
      };
    }

    function D(t, e) {
      var i,
          n,
          r = t.length,
          a = [];

      for (i = 0; i < r; ++i) {
        a[i] = [t[i][0], t[i][1]];
      }

      for (n = 1; n < r; ++n) {
        for (i = 0; i < r - n; ++i) {
          a[i][0] = (1 - e) * a[i][0] + e * a[parseInt(i + 1, 10)][0], a[i][1] = (1 - e) * a[i][1] + e * a[parseInt(i + 1, 10)][1];
        }
      }

      return [a[0][0], a[0][1]];
    }

    function A(t, e, i, n, r, a, o) {
      if ("transform" == r) {
        for (var s in o = {}, i[a][r]) {
          o[s] = s in n[a][r] ? Math.round(1e3 * ((n[a][r][s] - i[a][r][s]) * t + i[a][r][s])) / 1e3 : i[a][r][s];
        }

        return o;
      }

      return "string" == typeof i[a][r] ? function (t, e, i) {
        var n,
            r,
            a,
            o,
            s = [];

        for (n = 0; n < 6; n++) {
          a = Math.min(15, parseInt(e.charAt(n), 16)), o = Math.min(15, parseInt(i.charAt(n), 16)), r = (r = Math.floor((o - a) * t + a)) > 15 ? 15 : r < 0 ? 0 : r, s[n] = r.toString(16);
        }

        return "#" + s.join("");
      }(t, i[a][r], n[a][r]) : (o = Math.round(1e3 * ((n[a][r] - i[a][r]) * t + i[a][r])) / 1e3, r in p || (o += e[a][r] || "px"), o);
    }

    function j(t, e, i, n, r) {
      return (i = l.exec(t)) ? (r = parseFloat(i[2])) && e + ("+" == i[1] ? 1 : -1) * r : parseFloat(t);
    }

    function C(t, e) {
      var i,
          n,
          r,
          a = t ? a = isFinite(t.length) ? t : [t] : [],
          o = e.complete,
          l = e.duration,
          c = e.easing,
          u = e.bezier,
          d = [],
          f = [],
          p = [],
          v = [];

      for (u && (n = e.left, r = e.top, delete e.right, delete e.bottom, delete e.left, delete e.top), i = a.length; i--;) {
        if (d[i] = {}, f[i] = {}, p[i] = {}, u) {
          var y = g(a[i], "left"),
              b = g(a[i], "top"),
              w = [j(E(n) ? n(a[i]) : n || 0, parseFloat(y)), j(E(r) ? r(a[i]) : r || 0, parseFloat(b))];
          v[i] = E(u) ? u(a[i], w) : u, v[i].push(w), v[i].unshift([parseInt(y, 10), parseInt(b, 10)]);
        }

        for (var L in e) {
          switch (L) {
            case "complete":
            case "duration":
            case "easing":
            case "bezier":
              continue;
          }

          var C,
              N = g(a[i], L),
              I = E(e[L]) ? e[L](a[i]) : e[L];
          "string" != typeof I || !s.test(I) || s.test(N) ? (d[i][L] = "transform" == L ? x(N) : "string" == typeof I && s.test(I) ? T(N).slice(1) : parseFloat(N), f[i][L] = "transform" == L ? x(I, d[i][L]) : "string" == typeof I && "#" == I.charAt(0) ? T(I).slice(1) : j(I, parseFloat(N)), "string" == typeof I && (C = I.match(h)) && (p[i][L] = C[1])) : delete e[L];
        }
      }

      return S.apply(a, [l, function (t, n, r) {
        for (i = a.length; i--;) {
          for (var o in u && (r = D(v[i], t), a[i].style.left = r[0] + "px", a[i].style.top = r[1] + "px"), e) {
            n = A(t, p, d, f, o, i), "transform" == o ? a[i].style[_] = k(n) : "opacity" != o || m ? a[i].style[M(o)] = n : a[i].style.filter = "alpha(opacity=" + 100 * n + ")";
          }
        }
      }, o, c]);
    }

    return v(function (t) {
      o = t > 1e12 != r() > 1e12;
    }), C.tween = S, C.getStyle = g, C.bezier = D, C.transform = _, C.parseTransform = x, C.formatTransform = k, C.easings = {}, C;
  }();

  var dt = /*#__PURE__*/function () {
    function dt() {
      _classCallCheck(this, dt);
    }

    _createClass(dt, [{
      key: "show",
      value: function show(t) {
        t || (this._el.container.style.display = "block");
      }
    }, {
      key: "hide",
      value: function hide(t) {
        this._el.container.style.display = "none";
      }
    }, {
      key: "addTo",
      value: function addTo(t) {
        t.appendChild(this._el.container), this.onAdd();
      }
    }, {
      key: "removeFrom",
      value: function removeFrom(t) {
        t.removeChild(this._el.container), this.onRemove();
      }
    }, {
      key: "animatePosition",
      value: function animatePosition(t, e) {
        var i = {
          duration: this.options.duration,
          easing: this.options.ease
        };

        for (var n in t) {
          t.hasOwnProperty(n) && (i[n] = t[n] + "px");
        }

        this.animator && this.animator.stop(), this.animator = ct(e, i);
      }
    }, {
      key: "onLoaded",
      value: function onLoaded() {
        this.fire("loaded", this.data);
      }
    }, {
      key: "onAdd",
      value: function onAdd() {
        this.fire("added", this.data);
      }
    }, {
      key: "onRemove",
      value: function onRemove() {
        this.fire("removed", this.data);
      }
    }, {
      key: "setPosition",
      value: function setPosition(t, e) {
        for (var i in t) {
          t.hasOwnProperty(i) && (e ? e.style[i] = t[i] + "px" : this._el.container.style[i] = t[i] + "px");
        }
      }
    }, {
      key: "getPosition",
      value: function getPosition() {
        return M(this._el.container);
      }
    }]);

    return dt;
  }();

  var ft = /*#__PURE__*/function () {
    function ft(t, e, i) {
      _classCallCheck(this, ft);

      this._el = {
        drag: t,
        move: t
      }, this.mousedrag = {
        down: "mousedown",
        up: "mouseup",
        leave: "mouseleave",
        move: "mousemove"
      }, this.touchdrag = {
        down: "touchstart",
        up: "touchend",
        leave: "mouseleave",
        move: "touchmove"
      }, i && (this._el.move = i), this.options = {
        enable: {
          x: !0,
          y: !0
        },
        constraint: {
          top: !1,
          bottom: !1,
          left: !1,
          right: !1
        },
        momentum_multiplier: 2e3,
        duration: 1e3,
        ease: st
      }, this.animator = null, this.dragevent = this.mousedrag, w && (this.dragevent = this.touchdrag), this.data = {
        sliding: !1,
        direction: "none",
        pagex: {
          start: 0,
          end: 0
        },
        pagey: {
          start: 0,
          end: 0
        },
        pos: {
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 0,
            y: 0
          }
        },
        new_pos: {
          x: 0,
          y: 0
        },
        new_pos_parent: {
          x: 0,
          y: 0
        },
        time: {
          start: 0,
          end: 0
        },
        touch: !1
      }, C(this.options, e);
    }

    _createClass(ft, [{
      key: "enable",
      value: function enable(t) {
        this.data.pos.start = 0, this._el.move.style.left = this.data.pos.start.x + "px", this._el.move.style.top = this.data.pos.start.y + "px", this._el.move.style.position = "absolute";
      }
    }, {
      key: "disable",
      value: function disable() {
        _t.removeListener(this._el.drag, this.dragevent.down, this._onDragStart, this), _t.removeListener(this._el.drag, this.dragevent.up, this._onDragEnd, this);
      }
    }, {
      key: "stopMomentum",
      value: function stopMomentum() {
        this.animator && this.animator.stop();
      }
    }, {
      key: "updateConstraint",
      value: function updateConstraint(t) {
        this.options.constraint = t;
      }
    }, {
      key: "_onDragStart",
      value: function _onDragStart(t) {
        w ? t.originalEvent ? (this.data.pagex.start = t.originalEvent.touches[0].screenX, this.data.pagey.start = t.originalEvent.touches[0].screenY) : (this.data.pagex.start = t.targetTouches[0].screenX, this.data.pagey.start = t.targetTouches[0].screenY) : (this.data.pagex.start = t.pageX, this.data.pagey.start = t.pageY), this.options.enable.x && (this._el.move.style.left = this.data.pagex.start - this._el.move.offsetWidth / 2 + "px"), this.options.enable.y && (this._el.move.style.top = this.data.pagey.start - this._el.move.offsetHeight / 2 + "px"), this.data.pos.start = M(this._el.drag), this.data.time.start = new Date().getTime(), this.fire("dragstart", this.data), _t.addListener(this._el.drag, this.dragevent.move, this._onDragMove, this), _t.addListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this);
      }
    }, {
      key: "_onDragEnd",
      value: function _onDragEnd(t) {
        this.data.sliding = !1, _t.removeListener(this._el.drag, this.dragevent.move, this._onDragMove, this), _t.removeListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this), this.fire("dragend", this.data), this._momentum();
      }
    }, {
      key: "_onDragMove",
      value: function _onDragMove(t) {
        t.preventDefault(), this.data.sliding = !0, w ? t.originalEvent ? (this.data.pagex.end = t.originalEvent.touches[0].screenX, this.data.pagey.end = t.originalEvent.touches[0].screenY) : (this.data.pagex.end = t.targetTouches[0].screenX, this.data.pagey.end = t.targetTouches[0].screenY) : (this.data.pagex.end = t.pageX, this.data.pagey.end = t.pageY), this.data.pos.end = M(this._el.drag), this.data.new_pos.x = -(this.data.pagex.start - this.data.pagex.end - this.data.pos.start.x), this.data.new_pos.y = -(this.data.pagey.start - this.data.pagey.end - this.data.pos.start.y), this.options.enable.x && (this._el.move.style.left = this.data.new_pos.x + "px"), this.options.enable.y && (this._el.move.style.top = this.data.new_pos.y + "px"), this.fire("dragmove", this.data);
      }
    }, {
      key: "_momentum",
      value: function _momentum() {
        var t = {
          x: 0,
          y: 0,
          time: 0
        },
            e = {
          x: 0,
          y: 0,
          time: 0
        },
            i = !1;
        t.time = 10 * (new Date().getTime() - this.data.time.start), e.time = 10 * (new Date().getTime() - this.data.time.start), e.x = this.options.momentum_multiplier * (Math.abs(this.data.pagex.end) - Math.abs(this.data.pagex.start)), e.y = this.options.momentum_multiplier * (Math.abs(this.data.pagey.end) - Math.abs(this.data.pagey.start)), t.x = Math.round(e.x / e.time), t.y = Math.round(e.y / e.time), this.data.new_pos.x = Math.min(this.data.pos.end.x + t.x), this.data.new_pos.y = Math.min(this.data.pos.end.y + t.y), this.options.enable.x ? this.data.new_pos.x < 0 && (this.data.new_pos.x = 0) : this.data.new_pos.x = this.data.pos.start.x, this.options.enable.y ? this.data.new_pos.y < 0 && (this.data.new_pos.y = 0) : this.data.new_pos.y = this.data.pos.start.y, e.time < 3e3 && (i = !0), Math.abs(e.x) > 1e4 && (this.data.direction = "left", e.x > 0 && (this.data.direction = "right")), Math.abs(e.y) > 1e4 && (this.data.direction = "up", e.y > 0 && (this.data.direction = "down")), this._animateMomentum(), i && this.fire("swipe_" + this.data.direction, this.data);
      }
    }, {
      key: "_animateMomentum",
      value: function _animateMomentum() {
        var t = {
          x: this.data.new_pos.x,
          y: this.data.new_pos.y
        },
            e = {
          duration: this.options.duration,
          easing: ot
        };
        this.options.enable.y && ((this.options.constraint.top || this.options.constraint.bottom) && (t.y > this.options.constraint.bottom ? t.y = this.options.constraint.bottom : t.y < this.options.constraint.top && (t.y = this.options.constraint.top)), e.top = Math.floor(t.y) + "px"), this.options.enable.x && ((this.options.constraint.left || this.options.constraint.right) && (t.x > this.options.constraint.left ? t.x = this.options.constraint.left : t.x < this.options.constraint.right && (t.x = this.options.constraint.right)), e.left = Math.floor(t.x) + "px"), this.animator = ct(this._el.move, e), this.fire("momentum", this.data);
      }
    }]);

    return ft;
  }();

  F(ht);

  var pt,
      _t = {
    addListener: function addListener(t, e, i, n) {
      var r = R(i),
          a = "_tl_" + e + r;

      if (!t[a]) {
        var o = function o(e) {
          return i.call(n || t, e || _t._getEvent());
        };

        if (w && "dblclick" === e && this.addDoubleTapListener) this.addDoubleTapListener(t, o, r);else if ("addEventListener" in t) {
          if ("mousewheel" === e) t.addEventListener("DOMMouseScroll", o, !1), t.addEventListener(e, o, !1);else if ("mouseenter" === e || "mouseleave" === e) {
            var s = o,
                l = "mouseenter" === e ? "mouseover" : "mouseout";
            o = function o(e) {
              if (_t._checkMouse(t, e)) return s(e);
            }, t.addEventListener(l, o, !1);
          } else t.addEventListener(e, o, !1);
        } else "attachEvent" in t && t.attachEvent("on" + e, o);
        t[a] = o;
      }
    },
    removeListener: function removeListener(t, e, i) {
      var n = R(i),
          r = "_tl_" + e + n,
          a = t[r];
      a && (w && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", a, !1), t.removeEventListener(e, a, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", a, !1) : t.removeEventListener(e, a, !1) : "detachEvent" in t && t.detachEvent("on" + e, a), t[r] = null);
    },
    _checkMouse: function _checkMouse(t, e) {
      var i = e.relatedTarget;
      if (!i) return !0;

      try {
        for (; i && i !== t;) {
          i = i.parentNode;
        }
      } catch (t) {
        return !1;
      }

      return i !== t;
    },
    _getEvent: function _getEvent() {
      var t = window.event;
      if (!t) for (var e = arguments.callee.caller; e && (!(t = e.arguments[0]) || window.Event !== t.constructor);) {
        e = e.caller;
      }
      return t;
    },
    stopPropagation: function stopPropagation(t) {
      t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
    },
    disableClickPropagation: function disableClickPropagation(t) {
      _t.addListener(t, ft.START, _t.stopPropagation), _t.addListener(t, "click", _t.stopPropagation), _t.addListener(t, "dblclick", _t.stopPropagation);
    },
    preventDefault: function preventDefault(t) {
      t.preventDefault ? t.preventDefault() : t.returnValue = !1;
    },
    stop: function stop(t) {
      _t.preventDefault(t), _t.stopPropagation(t);
    },
    getWheelDelta: function getWheelDelta(t) {
      var e = 0;
      return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e;
    }
  },
      mt = function () {
    var t,
        e,
        i,
        n,
        r,
        a = [],
        o = a.slice,
        s = a.filter,
        l = window.document,
        h = {},
        c = {},
        u = {
      "column-count": 1,
      columns: 1,
      "font-weight": 1,
      "line-height": 1,
      opacity: 1,
      "z-index": 1,
      zoom: 1
    },
        d = /^\s*<(\w+|!)[^>]*>/,
        f = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        _ = /^(?:body|html)$/i,
        m = /([A-Z])/g,
        g = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        v = l.createElement("table"),
        y = l.createElement("tr"),
        b = {
      tr: l.createElement("tbody"),
      tbody: v,
      thead: v,
      tfoot: v,
      td: y,
      th: y,
      "*": l.createElement("div")
    },
        w = /complete|loaded|interactive/,
        x = /^[\w-]*$/,
        k = {},
        T = k.toString,
        M = {},
        E = l.createElement("div"),
        L = {
      tabindex: "tabIndex",
      readonly: "readOnly",
      for: "htmlFor",
      class: "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
        S = Array.isArray || function (t) {
      return t instanceof Array;
    };

    function D(t) {
      return null == t ? String(t) : k[T.call(t)] || "object";
    }

    function A(t) {
      return "function" == D(t);
    }

    function j(t) {
      return null != t && t == t.window;
    }

    function C(t) {
      return null != t && t.nodeType == t.DOCUMENT_NODE;
    }

    function N(t) {
      return "object" == D(t);
    }

    function I(t) {
      return N(t) && !j(t) && Object.getPrototypeOf(t) == Object.prototype;
    }

    function O(t) {
      return "number" == typeof t.length;
    }

    function z(t) {
      return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
    }

    function R(t) {
      return t in c ? c[t] : c[t] = new RegExp("(^|\\s)" + t + "(\\s|$)");
    }

    function P(t, e) {
      return "number" != typeof e || u[z(t)] ? e : e + "px";
    }

    function q(t) {
      return "children" in t ? o.call(t.children) : e.map(t.childNodes, function (t) {
        if (1 == t.nodeType) return t;
      });
    }

    function H(e, i, n) {
      for (t in i) {
        n && (I(i[t]) || S(i[t])) ? (I(i[t]) && !I(e[t]) && (e[t] = {}), S(i[t]) && !S(e[t]) && (e[t] = []), H(e[t], i[t], n)) : void 0 !== i[t] && (e[t] = i[t]);
      }
    }

    function F(t, i) {
      return null == i ? e(t) : e(t).filter(i);
    }

    function $(t, e, i, n) {
      return A(e) ? e.call(t, i, n) : e;
    }

    function B(t, e, i) {
      null == i ? t.removeAttribute(e) : t.setAttribute(e, i);
    }

    function W(t, e) {
      var i = t.className,
          n = i && void 0 !== i.baseVal;
      if (void 0 === e) return n ? i.baseVal : i;
      n ? i.baseVal = e : t.className = e;
    }

    function U(t) {
      var i;

      try {
        return t ? "true" == t || "false" != t && ("null" == t ? null : /^0/.test(t) || isNaN(i = Number(t)) ? /^[\[\{]/.test(t) ? e.parseJSON(t) : t : i) : t;
      } catch (e) {
        return t;
      }
    }

    function Z(t, e) {
      for (var i in e(t), t.childNodes) {
        Z(t.childNodes[i], e);
      }
    }

    return M.matches = function (t, e) {
      if (!e || !t || 1 !== t.nodeType) return !1;
      var i = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
      if (i) return i.call(t, e);
      var n,
          r = t.parentNode,
          a = !r;
      return a && (r = E).appendChild(t), n = ~M.qsa(r, e).indexOf(t), a && E.removeChild(t), n;
    }, n = function n(t) {
      return t.replace(/-+(.)?/g, function (t, e) {
        return e ? e.toUpperCase() : "";
      });
    }, r = function r(t) {
      return s.call(t, function (e, i) {
        return t.indexOf(e) == i;
      });
    }, M.fragment = function (t, i, n) {
      var r, a, s;
      return f.test(t) && (r = e(l.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(p, "<$1></$2>")), void 0 === i && (i = d.test(t) && RegExp.$1), i in b || (i = "*"), (s = b[i]).innerHTML = "" + t, r = e.each(o.call(s.childNodes), function () {
        s.removeChild(this);
      })), I(n) && (a = e(r), e.each(n, function (t, e) {
        g.indexOf(t) > -1 ? a[t](e) : a.attr(t, e);
      })), r;
    }, M.Z = function (t, i) {
      return (t = t || []).__proto__ = e.fn, t.selector = i || "", t;
    }, M.isZ = function (t) {
      return t instanceof M.Z;
    }, M.init = function (t, i) {
      var n, r;
      if (!t) return M.Z();
      if ("string" == typeof t) {
        if ("<" == (t = t.trim())[0] && d.test(t)) n = M.fragment(t, RegExp.$1, i), t = null;else {
          if (void 0 !== i) return e(i).find(t);
          n = M.qsa(l, t);
        }
      } else {
        if (A(t)) return e(l).ready(t);
        if (M.isZ(t)) return t;
        if (S(t)) r = t, n = s.call(r, function (t) {
          return null != t;
        });else if (N(t)) n = [t], t = null;else if (d.test(t)) n = M.fragment(t.trim(), RegExp.$1, i), t = null;else {
          if (void 0 !== i) return e(i).find(t);
          n = M.qsa(l, t);
        }
      }
      return M.Z(n, t);
    }, (e = function e(t, _e3) {
      return M.init(t, _e3);
    }).extend = function (t) {
      var e,
          i = o.call(arguments, 1);
      return "boolean" == typeof t && (e = t, t = i.shift()), i.forEach(function (i) {
        H(t, i, e);
      }), t;
    }, M.qsa = function (t, e) {
      var i,
          n = "#" == e[0],
          r = !n && "." == e[0],
          a = n || r ? e.slice(1) : e,
          s = x.test(a);
      return C(t) && s && n ? (i = t.getElementById(a)) ? [i] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : o.call(s && !n ? r ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e));
    }, e.contains = function (t, e) {
      return t !== e && t.contains(e);
    }, e.type = D, e.isFunction = A, e.isWindow = j, e.isArray = S, e.isPlainObject = I, e.isEmptyObject = function (t) {
      var e;

      for (e in t) {
        return !1;
      }

      return !0;
    }, e.inArray = function (t, e, i) {
      return a.indexOf.call(e, t, i);
    }, e.camelCase = n, e.trim = function (t) {
      return null == t ? "" : String.prototype.trim.call(t);
    }, e.uuid = 0, e.support = {}, e.expr = {}, e.map = function (t, i) {
      var n,
          r,
          a,
          o,
          s = [];
      if (O(t)) for (r = 0; r < t.length; r++) {
        null != (n = i(t[r], r)) && s.push(n);
      } else for (a in t) {
        null != (n = i(t[a], a)) && s.push(n);
      }
      return (o = s).length > 0 ? e.fn.concat.apply([], o) : o;
    }, e.each = function (t, e) {
      var i, n;

      if (O(t)) {
        for (i = 0; i < t.length; i++) {
          if (!1 === e.call(t[i], i, t[i])) return t;
        }
      } else for (n in t) {
        if (!1 === e.call(t[n], n, t[n])) return t;
      }

      return t;
    }, e.grep = function (t, e) {
      return s.call(t, e);
    }, window.JSON && (e.parseJSON = JSON.parse), e.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
      k["[object " + e + "]"] = e.toLowerCase();
    }), e.fn = {
      forEach: a.forEach,
      reduce: a.reduce,
      push: a.push,
      sort: a.sort,
      indexOf: a.indexOf,
      concat: a.concat,
      map: function map(t) {
        return e(e.map(this, function (e, i) {
          return t.call(e, i, e);
        }));
      },
      slice: function slice() {
        return e(o.apply(this, arguments));
      },
      ready: function ready(t) {
        return w.test(l.readyState) && l.body ? t(e) : l.addEventListener("DOMContentLoaded", function () {
          t(e);
        }, !1), this;
      },
      get: function get(t) {
        return void 0 === t ? o.call(this) : this[t >= 0 ? t : t + this.length];
      },
      toArray: function toArray() {
        return this.get();
      },
      size: function size() {
        return this.length;
      },
      remove: function remove() {
        return this.each(function () {
          null != this.parentNode && this.parentNode.removeChild(this);
        });
      },
      each: function each(t) {
        return a.every.call(this, function (e, i) {
          return !1 !== t.call(e, i, e);
        }), this;
      },
      filter: function filter(t) {
        return A(t) ? this.not(this.not(t)) : e(s.call(this, function (e) {
          return M.matches(e, t);
        }));
      },
      add: function add(t, i) {
        return e(r(this.concat(e(t, i))));
      },
      is: function is(t) {
        return this.length > 0 && M.matches(this[0], t);
      },
      not: function not(t) {
        var i = [];
        if (A(t) && void 0 !== t.call) this.each(function (e) {
          t.call(this, e) || i.push(this);
        });else {
          var n = "string" == typeof t ? this.filter(t) : O(t) && A(t.item) ? o.call(t) : e(t);
          this.forEach(function (t) {
            n.indexOf(t) < 0 && i.push(t);
          });
        }
        return e(i);
      },
      has: function has(t) {
        return this.filter(function () {
          return N(t) ? e.contains(this, t) : e(this).find(t).size();
        });
      },
      eq: function eq(t) {
        return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
      },
      first: function first() {
        var t = this[0];
        return t && !N(t) ? t : e(t);
      },
      last: function last() {
        var t = this[this.length - 1];
        return t && !N(t) ? t : e(t);
      },
      find: function find(t) {
        var i = this;
        return "object" == _typeof(t) ? e(t).filter(function () {
          var t = this;
          return a.some.call(i, function (i) {
            return e.contains(i, t);
          });
        }) : 1 == this.length ? e(M.qsa(this[0], t)) : this.map(function () {
          return M.qsa(this, t);
        });
      },
      closest: function closest(t, i) {
        var n = this[0],
            r = !1;

        for ("object" == _typeof(t) && (r = e(t)); n && !(r ? r.indexOf(n) >= 0 : M.matches(n, t));) {
          n = n !== i && !C(n) && n.parentNode;
        }

        return e(n);
      },
      parents: function parents(t) {
        for (var i = [], n = this; n.length > 0;) {
          n = e.map(n, function (t) {
            if ((t = t.parentNode) && !C(t) && i.indexOf(t) < 0) return i.push(t), t;
          });
        }

        return F(i, t);
      },
      parent: function parent(t) {
        return F(r(this.pluck("parentNode")), t);
      },
      children: function children(t) {
        return F(this.map(function () {
          return q(this);
        }), t);
      },
      contents: function contents() {
        return this.map(function () {
          return o.call(this.childNodes);
        });
      },
      siblings: function siblings(t) {
        return F(this.map(function (t, e) {
          return s.call(q(e.parentNode), function (t) {
            return t !== e;
          });
        }), t);
      },
      empty: function empty() {
        return this.each(function () {
          this.innerHTML = "";
        });
      },
      pluck: function pluck(t) {
        return e.map(this, function (e) {
          return e[t];
        });
      },
      show: function show() {
        return this.each(function () {
          var t, e, i;
          "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (t = this.nodeName, h[t] || (e = l.createElement(t), l.body.appendChild(e), i = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == i && (i = "block"), h[t] = i), h[t]));
        });
      },
      replaceWith: function replaceWith(t) {
        return this.before(t).remove();
      },
      wrap: function wrap(t) {
        var i = A(t);
        if (this[0] && !i) var n = e(t).get(0),
            r = n.parentNode || this.length > 1;
        return this.each(function (a) {
          e(this).wrapAll(i ? t.call(this, a) : r ? n.cloneNode(!0) : n);
        });
      },
      wrapAll: function wrapAll(t) {
        if (this[0]) {
          var i;

          for (e(this[0]).before(t = e(t)); (i = t.children()).length;) {
            t = i.first();
          }

          e(t).append(this);
        }

        return this;
      },
      wrapInner: function wrapInner(t) {
        var i = A(t);
        return this.each(function (n) {
          var r = e(this),
              a = r.contents(),
              o = i ? t.call(this, n) : t;
          a.length ? a.wrapAll(o) : r.append(o);
        });
      },
      unwrap: function unwrap() {
        return this.parent().each(function () {
          e(this).replaceWith(e(this).children());
        }), this;
      },
      clone: function clone() {
        return this.map(function () {
          return this.cloneNode(!0);
        });
      },
      hide: function hide() {
        return this.css("display", "none");
      },
      toggle: function toggle(t) {
        return this.each(function () {
          var i = e(this);
          (void 0 === t ? "none" == i.css("display") : t) ? i.show() : i.hide();
        });
      },
      prev: function prev(t) {
        return e(this.pluck("previousElementSibling")).filter(t || "*");
      },
      next: function next(t) {
        return e(this.pluck("nextElementSibling")).filter(t || "*");
      },
      html: function html(t) {
        return 0 === arguments.length ? this.length > 0 ? this[0].innerHTML : null : this.each(function (i) {
          var n = this.innerHTML;
          e(this).empty().append($(this, t, i, n));
        });
      },
      text: function text(t) {
        return 0 === arguments.length ? this.length > 0 ? this[0].textContent : null : this.each(function () {
          this.textContent = void 0 === t ? "" : "" + t;
        });
      },
      attr: function attr(e, i) {
        var n;
        return "string" == typeof e && void 0 === i ? 0 == this.length || 1 !== this[0].nodeType ? void 0 : "value" == e && "INPUT" == this[0].nodeName ? this.val() : !(n = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : n : this.each(function (n) {
          if (1 === this.nodeType) if (N(e)) for (t in e) {
            B(this, t, e[t]);
          } else B(this, e, $(this, i, n, this.getAttribute(e)));
        });
      },
      removeAttr: function removeAttr(t) {
        return this.each(function () {
          1 === this.nodeType && B(this, t);
        });
      },
      prop: function prop(t, e) {
        return t = L[t] || t, void 0 === e ? this[0] && this[0][t] : this.each(function (i) {
          this[t] = $(this, e, i, this[t]);
        });
      },
      data: function data(t, e) {
        var i = this.attr("data-" + t.replace(m, "-$1").toLowerCase(), e);
        return null !== i ? U(i) : void 0;
      },
      val: function val(t) {
        return 0 === arguments.length ? this[0] && (this[0].multiple ? e(this[0]).find("option").filter(function () {
          return this.selected;
        }).pluck("value") : this[0].value) : this.each(function (e) {
          this.value = $(this, t, e, this.value);
        });
      },
      offset: function offset(t) {
        if (t) return this.each(function (i) {
          var n = e(this),
              r = $(this, t, i, n.offset()),
              a = n.offsetParent().offset(),
              o = {
            top: r.top - a.top,
            left: r.left - a.left
          };
          "static" == n.css("position") && (o.position = "relative"), n.css(o);
        });
        if (0 == this.length) return null;
        var i = this[0].getBoundingClientRect();
        return {
          left: i.left + window.pageXOffset,
          top: i.top + window.pageYOffset,
          width: Math.round(i.width),
          height: Math.round(i.height)
        };
      },
      css: function css(i, r) {
        if (arguments.length < 2) {
          var a = this[0],
              o = getComputedStyle(a, "");
          if (!a) return;
          if ("string" == typeof i) return a.style[n(i)] || o.getPropertyValue(i);

          if (S(i)) {
            var s = {};
            return e.each(S(i) ? i : [i], function (t, e) {
              s[e] = a.style[n(e)] || o.getPropertyValue(e);
            }), s;
          }
        }

        var l = "";
        if ("string" == D(i)) r || 0 === r ? l = z(i) + ":" + P(i, r) : this.each(function () {
          this.style.removeProperty(z(i));
        });else for (t in i) {
          i[t] || 0 === i[t] ? l += z(t) + ":" + P(t, i[t]) + ";" : this.each(function () {
            this.style.removeProperty(z(t));
          });
        }
        return this.each(function () {
          this.style.cssText += ";" + l;
        });
      },
      index: function index(t) {
        return t ? this.indexOf(e(t)[0]) : this.parent().children().indexOf(this[0]);
      },
      hasClass: function hasClass(t) {
        return !!t && a.some.call(this, function (t) {
          return this.test(W(t));
        }, R(t));
      },
      addClass: function addClass(t) {
        return t ? this.each(function (n) {
          i = [];
          var r = W(this);
          $(this, t, n, r).split(/\s+/g).forEach(function (t) {
            e(this).hasClass(t) || i.push(t);
          }, this), i.length && W(this, r + (r ? " " : "") + i.join(" "));
        }) : this;
      },
      removeClass: function removeClass(t) {
        return this.each(function (e) {
          if (void 0 === t) return W(this, "");
          i = W(this), $(this, t, e, i).split(/\s+/g).forEach(function (t) {
            i = i.replace(R(t), " ");
          }), W(this, i.trim());
        });
      },
      toggleClass: function toggleClass(t, i) {
        return t ? this.each(function (n) {
          var r = e(this);
          $(this, t, n, W(this)).split(/\s+/g).forEach(function (t) {
            (void 0 === i ? !r.hasClass(t) : i) ? r.addClass(t) : r.removeClass(t);
          });
        }) : this;
      },
      scrollTop: function scrollTop(t) {
        if (this.length) {
          var e = ("scrollTop" in this[0]);
          return void 0 === t ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
            this.scrollTop = t;
          } : function () {
            this.scrollTo(this.scrollX, t);
          });
        }
      },
      scrollLeft: function scrollLeft(t) {
        if (this.length) {
          var e = ("scrollLeft" in this[0]);
          return void 0 === t ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {
            this.scrollLeft = t;
          } : function () {
            this.scrollTo(t, this.scrollY);
          });
        }
      },
      position: function position() {
        if (this.length) {
          var t = this[0],
              i = this.offsetParent(),
              n = this.offset(),
              r = _.test(i[0].nodeName) ? {
            top: 0,
            left: 0
          } : i.offset();
          return n.top -= parseFloat(e(t).css("margin-top")) || 0, n.left -= parseFloat(e(t).css("margin-left")) || 0, r.top += parseFloat(e(i[0]).css("border-top-width")) || 0, r.left += parseFloat(e(i[0]).css("border-left-width")) || 0, {
            top: n.top - r.top,
            left: n.left - r.left
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          for (var t = this.offsetParent || l.body; t && !_.test(t.nodeName) && "static" == e(t).css("position");) {
            t = t.offsetParent;
          }

          return t;
        });
      }
    }, e.fn.detach = e.fn.remove, ["width", "height"].forEach(function (t) {
      var i = t.replace(/./, function (t) {
        return t[0].toUpperCase();
      });

      e.fn[t] = function (n) {
        var r,
            a = this[0];
        return void 0 === n ? j(a) ? a["inner" + i] : C(a) ? a.documentElement["scroll" + i] : (r = this.offset()) && r[t] : this.each(function (i) {
          (a = e(this)).css(t, $(this, n, i, a[t]()));
        });
      };
    }), ["after", "prepend", "before", "append"].forEach(function (t, i) {
      var n = i % 2;
      e.fn[t] = function () {
        var t,
            r,
            a = e.map(arguments, function (e) {
          return "object" == (t = D(e)) || "array" == t || null == e ? e : M.fragment(e);
        }),
            o = this.length > 1;
        return a.length < 1 ? this : this.each(function (t, s) {
          r = n ? s : s.parentNode, s = 0 == i ? s.nextSibling : 1 == i ? s.firstChild : 2 == i ? s : null, a.forEach(function (t) {
            if (o) t = t.cloneNode(!0);else if (!r) return e(t).remove();
            Z(r.insertBefore(t, s), function (t) {
              null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML);
            });
          });
        });
      }, e.fn[n ? t + "To" : "insert" + (i ? "Before" : "After")] = function (i) {
        return e(i)[t](this), this;
      };
    }), M.Z.prototype = e.fn, M.uniq = r, M.deserializeValue = U, e.zepto = M, e;
  }();

  window.Zepto = mt, void 0 === window.$ && (window.$ = mt), function (t) {
    t.zepto.qsa;

    var e = 1,
        i = Array.prototype.slice,
        n = t.isFunction,
        r = function r(t) {
      return "string" == typeof t;
    },
        a = {},
        o = {},
        s = ("onfocusin" in window),
        l = {
      focus: "focusin",
      blur: "focusout"
    },
        h = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    };

    function c(t) {
      return t._zid || (t._zid = e++);
    }

    function u(t, e, i, n) {
      if ((e = d(e)).ns) var r = (o = e.ns, new RegExp("(?:^| )" + o.replace(" ", " .* ?") + "(?: |$)"));
      var o;
      return (a[c(t)] || []).filter(function (t) {
        return t && (!e.e || t.e == e.e) && (!e.ns || r.test(t.ns)) && (!i || c(t.fn) === c(i)) && (!n || t.sel == n);
      });
    }

    function d(t) {
      var e = ("" + t).split(".");
      return {
        e: e[0],
        ns: e.slice(1).sort().join(" ")
      };
    }

    function f(t, e) {
      return t.del && !s && t.e in l || !!e;
    }

    function p(t) {
      return h[t] || s && l[t] || t;
    }

    function _(e, i, n, r, o, s, l) {
      var u = c(e),
          _ = a[u] || (a[u] = []);

      i.split(/\s/).forEach(function (i) {
        if ("ready" == i) return t(document).ready(n);
        var a = d(i);
        a.fn = n, a.sel = o, a.e in h && (n = function n(e) {
          var i = e.relatedTarget;
          if (!i || i !== this && !t.contains(this, i)) return a.fn.apply(this, arguments);
        }), a.del = s;
        var c = s || n;
        a.proxy = function (t) {
          if (!(t = w(t)).isImmediatePropagationStopped()) {
            t.data = r;
            var i = c.apply(e, null == t._args ? [t] : [t].concat(t._args));
            return !1 === i && (t.preventDefault(), t.stopPropagation()), i;
          }
        }, a.i = _.length, _.push(a), "addEventListener" in e && e.addEventListener(p(a.e), a.proxy, f(a, l));
      });
    }

    function m(t, e, i, n, r) {
      var o = c(t);
      (e || "").split(/\s/).forEach(function (e) {
        u(t, e, i, n).forEach(function (e) {
          delete a[o][e.i], "removeEventListener" in t && t.removeEventListener(p(e.e), e.proxy, f(e, r));
        });
      });
    }

    o.click = o.mousedown = o.mouseup = o.mousemove = "MouseEvents", t.event = {
      add: _,
      remove: m
    }, t.proxy = function (e, i) {
      if (n(e)) {
        var a = function a() {
          return e.apply(i, arguments);
        };

        return a._zid = c(e), a;
      }

      if (r(i)) return t.proxy(e[i], e);
      throw new TypeError("expected function");
    }, t.fn.bind = function (t, e, i) {
      return this.on(t, e, i);
    }, t.fn.unbind = function (t, e) {
      return this.off(t, e);
    }, t.fn.one = function (t, e, i, n) {
      return this.on(t, e, i, n, 1);
    };

    var g = function g() {
      return !0;
    },
        v = function v() {
      return !1;
    },
        y = /^([A-Z]|returnValue$|layer[XY]$)/,
        b = {
      preventDefault: "isDefaultPrevented",
      stopImmediatePropagation: "isImmediatePropagationStopped",
      stopPropagation: "isPropagationStopped"
    };

    function w(e, i) {
      return !i && e.isDefaultPrevented || (i || (i = e), t.each(b, function (t, n) {
        var r = i[t];
        e[t] = function () {
          return this[n] = g, r && r.apply(i, arguments);
        }, e[n] = v;
      }), (void 0 !== i.defaultPrevented ? i.defaultPrevented : "returnValue" in i ? !1 === i.returnValue : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = g)), e;
    }

    function x(t) {
      var e,
          i = {
        originalEvent: t
      };

      for (e in t) {
        y.test(e) || void 0 === t[e] || (i[e] = t[e]);
      }

      return w(i, t);
    }

    t.fn.delegate = function (t, e, i) {
      return this.on(e, t, i);
    }, t.fn.undelegate = function (t, e, i) {
      return this.off(e, t, i);
    }, t.fn.live = function (e, i) {
      return t(document.body).delegate(this.selector, e, i), this;
    }, t.fn.die = function (e, i) {
      return t(document.body).undelegate(this.selector, e, i), this;
    }, t.fn.on = function (e, a, o, s, l) {
      var h,
          c,
          u = this;
      return e && !r(e) ? (t.each(e, function (t, e) {
        u.on(t, a, o, e, l);
      }), u) : (r(a) || n(s) || !1 === s || (s = o, o = a, a = void 0), (n(o) || !1 === o) && (s = o, o = void 0), !1 === s && (s = v), u.each(function (n, r) {
        l && (h = function h(t) {
          return m(r, t.type, s), s.apply(this, arguments);
        }), a && (c = function c(e) {
          var n,
              o = t(e.target).closest(a, r).get(0);
          if (o && o !== r) return n = t.extend(x(e), {
            currentTarget: o,
            liveFired: r
          }), (h || s).apply(o, [n].concat(i.call(arguments, 1)));
        }), _(r, e, s, o, a, c || h);
      }));
    }, t.fn.off = function (e, i, a) {
      var o = this;
      return e && !r(e) ? (t.each(e, function (t, e) {
        o.off(t, i, e);
      }), o) : (r(i) || n(a) || !1 === a || (a = i, i = void 0), !1 === a && (a = v), o.each(function () {
        m(this, e, a, i);
      }));
    }, t.fn.trigger = function (e, i) {
      return (e = r(e) || t.isPlainObject(e) ? t.Event(e) : w(e))._args = i, this.each(function () {
        "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, i);
      });
    }, t.fn.triggerHandler = function (e, i) {
      var n, a;
      return this.each(function (o, s) {
        (n = x(r(e) ? t.Event(e) : e))._args = i, n.target = s, t.each(u(s, e.type || e), function (t, e) {
          if (a = e.proxy(n), n.isImmediatePropagationStopped()) return !1;
        });
      }), a;
    }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
      t.fn[e] = function (t) {
        return t ? this.bind(e, t) : this.trigger(e);
      };
    }), ["focus", "blur"].forEach(function (e) {
      t.fn[e] = function (t) {
        return t ? this.bind(e, t) : this.each(function () {
          try {
            this[e]();
          } catch (t) {}
        }), this;
      };
    }), t.Event = function (t, e) {
      r(t) || (t = (e = t).type);
      var i = document.createEvent(o[t] || "Events"),
          n = !0;
      if (e) for (var a in e) {
        "bubbles" == a ? n = !!e[a] : i[a] = e[a];
      }
      return i.initEvent(t, n, !0), w(i);
    };
  }(mt), function (t) {
    var e,
        i,
        n = 0,
        r = window.document,
        a = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        o = /^(?:text|application)\/javascript/i,
        s = /^(?:text|application)\/xml/i,
        l = /^\s*$/;

    function h(e, i, n, a) {
      if (e.global) return function (e, i, n) {
        var r = t.Event(i);
        return t(e).trigger(r, n), !r.isDefaultPrevented();
      }(i || r, n, a);
    }

    function c(t, e) {
      var i = e.context;
      if (!1 === e.beforeSend.call(i, t, e) || !1 === h(e, i, "ajaxBeforeSend", [t, e])) return !1;
      h(e, i, "ajaxSend", [t, e]);
    }

    function u(t, e, i, n) {
      var r = i.context;
      i.success.call(r, t, "success", e), n && n.resolveWith(r, [t, "success", e]), h(i, r, "ajaxSuccess", [e, i, t]), f("success", e, i);
    }

    function d(t, e, i, n, r) {
      var a = n.context;
      n.error.call(a, i, e, t), r && r.rejectWith(a, [i, e, t]), h(n, a, "ajaxError", [i, n, t || e]), f(e, i, n);
    }

    function f(e, i, n) {
      var r = n.context;
      n.complete.call(r, i, e), h(n, r, "ajaxComplete", [i, n]), function (e) {
        e.global && ! --t.active && h(e, null, "ajaxStop");
      }(n);
    }

    function p() {}

    function _(t, e) {
      return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
    }

    function m(e, i, n, r) {
      var a = !t.isFunction(i);
      return {
        url: e,
        data: a ? i : void 0,
        success: a ? t.isFunction(n) ? n : void 0 : i,
        dataType: a && r || n
      };
    }

    t.active = 0, t.ajaxJSONP = function (e, i) {
      if (!("type" in e)) return t.ajax(e);

      var a,
          o,
          s = e.jsonpCallback,
          l = (t.isFunction(s) ? s() : s) || "jsonp" + ++n,
          h = r.createElement("script"),
          f = window[l],
          p = function p(e) {
        t(h).triggerHandler("error", e || "abort");
      },
          _ = {
        abort: p
      };

      return i && i.promise(_), t(h).on("load error", function (n, r) {
        clearTimeout(o), t(h).off().remove(), "error" != n.type && a ? u(a[0], _, e, i) : d(null, r || "error", _, e, i), window[l] = f, a && t.isFunction(f) && f(a[0]), f = a = void 0;
      }), !1 === c(_, e) ? (p("abort"), _) : (window[l] = function () {
        a = arguments;
      }, h.src = e.url.replace(/\?(.+)=\?/, "?$1=" + l), r.head.appendChild(h), e.timeout > 0 && (o = setTimeout(function () {
        p("timeout");
      }, e.timeout)), _);
    }, t.ajaxSettings = {
      type: "GET",
      beforeSend: p,
      success: p,
      error: p,
      complete: p,
      context: null,
      global: !0,
      xhr: function xhr() {
        return new window.XMLHttpRequest();
      },
      accepts: {
        script: "text/javascript, application/javascript, application/x-javascript",
        json: "application/json",
        xml: "application/xml, text/xml",
        html: "text/html",
        text: "text/plain"
      },
      crossDomain: !1,
      timeout: 0,
      processData: !0,
      cache: !0
    }, t.ajax = function (n) {
      var r = t.extend({}, n || {}),
          a = t.Deferred && t.Deferred();

      for (e in t.ajaxSettings) {
        void 0 === r[e] && (r[e] = t.ajaxSettings[e]);
      }

      !function (e) {
        e.global && 0 == t.active++ && h(e, null, "ajaxStart");
      }(r), r.crossDomain || (r.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(r.url) && RegExp.$2 != window.location.host), r.url || (r.url = window.location.toString()), function (e) {
        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = _(e.url, e.data), e.data = void 0);
      }(r), !1 === r.cache && (r.url = _(r.url, "_=" + Date.now()));
      var f = r.dataType,
          m = /\?.+=\?/.test(r.url);
      if ("jsonp" == f || m) return m || (r.url = _(r.url, r.jsonp ? r.jsonp + "=?" : !1 === r.jsonp ? "" : "callback=?")), t.ajaxJSONP(r, a);

      var g,
          v = r.accepts[f],
          y = {},
          b = function b(t, e) {
        y[t.toLowerCase()] = [t, e];
      },
          w = /^([\w-]+:)\/\//.test(r.url) ? RegExp.$1 : window.location.protocol,
          x = r.xhr(),
          k = x.setRequestHeader;

      if (a && a.promise(x), r.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", v || "*/*"), (v = r.mimeType || v) && (v.indexOf(",") > -1 && (v = v.split(",", 2)[0]), x.overrideMimeType && x.overrideMimeType(v)), (r.contentType || !1 !== r.contentType && r.data && "GET" != r.type.toUpperCase()) && b("Content-Type", r.contentType || "application/x-www-form-urlencoded"), r.headers) for (i in r.headers) {
        b(i, r.headers[i]);
      }
      if (x.setRequestHeader = b, x.onreadystatechange = function () {
        if (4 == x.readyState) {
          x.onreadystatechange = p, clearTimeout(g);
          var e,
              i = !1;

          if (x.status >= 200 && x.status < 300 || 304 == x.status || 0 == x.status && "file:" == w) {
            f = f || function (t) {
              return t && (t = t.split(";", 2)[0]), t && ("text/html" == t ? "html" : "application/json" == t ? "json" : o.test(t) ? "script" : s.test(t) && "xml") || "text";
            }(r.mimeType || x.getResponseHeader("content-type")), e = x.responseText;

            try {
              "script" == f ? (0, eval)(e) : "xml" == f ? e = x.responseXML : "json" == f && (e = l.test(e) ? null : t.parseJSON(e));
            } catch (t) {
              i = t;
            }

            i ? d(i, "parsererror", x, r, a) : u(e, x, r, a);
          } else d(x.statusText || null, x.status ? "error" : "abort", x, r, a);
        }
      }, !1 === c(x, r)) return x.abort(), d(null, "abort", x, r, a), x;
      if (r.xhrFields) for (i in r.xhrFields) {
        x[i] = r.xhrFields[i];
      }
      var T = !("async" in r) || r.async;

      for (i in x.open(r.type, r.url, T, r.username, r.password), y) {
        k.apply(x, y[i]);
      }

      return r.timeout > 0 && (g = setTimeout(function () {
        x.onreadystatechange = p, x.abort(), d(null, "timeout", x, r, a);
      }, r.timeout)), x.send(r.data ? r.data : null), x;
    }, t.get = function (e, i, n, r) {
      return t.ajax(m.apply(null, arguments));
    }, t.post = function (e, i, n, r) {
      var a = m.apply(null, arguments);
      return a.type = "POST", t.ajax(a);
    }, t.getJSON = function (e, i, n) {
      var r = m.apply(null, arguments);
      return r.dataType = "json", t.ajax(r);
    }, t.fetchJSON = function (t) {
      var e = new XMLHttpRequest();
      return new Promise(function (i, n) {
        e.onreadystatechange = function () {
          try {
            if (4 !== e.readyState) return;

            if (e.status >= 200 && e.status < 300) {
              var r = JSON.parse(e.responseText);
              i(r);
            } else n({
              status: e.status,
              statusText: e.statusText
            });
          } catch (e) {
            n({
              status: 400,
              statusText: "Error fetching JSON from ".concat(t, ": ").concat(e)
            });
          }
        }, e.open("GET", t, !0), e.send();
      });
    }, t.fn.load = function (e, i, n) {
      if (!this.length) return this;
      var r,
          o = this,
          s = e.split(/\s/),
          l = m(e, i, n),
          h = l.success;
      return s.length > 1 && (l.url = s[0], r = s[1]), l.success = function (e) {
        o.html(r ? t("<div>").html(e.replace(a, "")).find(r) : e), h && h.apply(o, arguments);
      }, t.ajax(l), this;
    };
    var g = encodeURIComponent;

    t.param = function (e, i) {
      var n = [];
      return n.add = function (t, e) {
        this.push(g(t) + "=" + g(e));
      }, function e(i, n, r, a) {
        var o,
            s = t.isArray(n),
            l = t.isPlainObject(n);
        t.each(n, function (n, h) {
          o = t.type(h), a && (n = r ? a : a + "[" + (l || "object" == o || "array" == o ? n : "") + "]"), !a && s ? i.add(h.name, h.value) : "array" == o || !r && "object" == o ? e(i, h, r, n) : i.add(n, h);
        });
      }(n, e, i), n.join("&").replace(/%20/g, "+");
    };
  }(mt), (pt = mt).fn.serializeArray = function () {
    var t,
        e = [];
    return pt([].slice.call(this.get(0).elements)).each(function () {
      var i = (t = pt(this)).attr("type");
      "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({
        name: t.attr("name"),
        value: t.val()
      });
    }), e;
  }, pt.fn.serialize = function () {
    var t = [];
    return this.serializeArray().forEach(function (e) {
      t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
    }), t.join("&");
  }, pt.fn.submit = function (t) {
    if (t) this.bind("submit", t);else if (this.length) {
      var e = pt.Event("submit");
      this.eq(0).trigger(e), e.isDefaultPrevented() || this.get(0).submit();
    }
    return this;
  }, function (t) {
    "__proto__" in {} || t.extend(t.zepto, {
      Z: function Z(e, i) {
        return e = e || [], t.extend(e, t.fn), e.selector = i || "", e.__Z = !0, e;
      },
      isZ: function isZ(e) {
        return "array" === t.type(e) && "__Z" in e;
      }
    });

    try {
      getComputedStyle(void 0);
    } catch (t) {
      var e = getComputedStyle;

      window.getComputedStyle = function (t, i) {
        try {
          return e(t, i);
        } catch (t) {
          return null;
        }
      };
    }
  }(mt);
  var gt = mt.getJSON,
      vt = mt.ajax,
      yt = mt.fetchJSON,
      bt = [["millisecond", 1, function (t) {}], ["second", 1e3, function (t) {
    t.setMilliseconds(0);
  }], ["minute", 6e4, function (t) {
    t.setSeconds(0);
  }], ["hour", 36e5, function (t) {
    t.setMinutes(0);
  }], ["day", 864e5, function (t) {
    t.setHours(0);
  }], ["month", 2592e6, function (t) {
    t.setDate(1);
  }], ["year", 31536e6, function (t) {
    t.setMonth(0);
  }], ["decade", 31536e7, function (t) {
    var e = t.getFullYear();
    t.setFullYear(e - e % 10);
  }], ["century", 31536e8, function (t) {
    var e = t.getFullYear();
    t.setFullYear(e - e % 100);
  }], ["millennium", 31536e9, function (t) {
    var e = t.getFullYear();
    t.setFullYear(e - e % 1e3);
  }]],
      wt = ["millisecond", "second", "minute", "hour", "day", "month", "year"],
      xt = /^([\+-]?\d+?)(-\d{2}?)?(-\d{2}?)?$/,
      kt = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
  var Tt = {
    base: {
      millisecond: "time_short",
      second: "time",
      minute: "time_no_seconds_small_date",
      hour: "time_no_seconds_small_date",
      day: "full",
      month: "month",
      year: "year",
      decade: "year",
      century: "year",
      millennium: "year",
      age: "fallback",
      epoch: "fallback",
      era: "fallback",
      eon: "fallback",
      eon2: "fallback"
    },
    short: {
      millisecond: "time_short",
      second: "time_short",
      minute: "time_no_seconds_short",
      hour: "time_no_minutes_short",
      day: "full_short",
      month: "month_short",
      year: "year",
      decade: "year",
      century: "year",
      millennium: "year",
      age: "fallback",
      epoch: "fallback",
      era: "fallback",
      eon: "fallback",
      eon2: "fallback"
    }
  },
      Mt = lt.extend({
    initialize: function initialize(t, e, i) {
      "number" == typeof t ? this.data = {
        format: "yyyy mmmm",
        date_obj: new Date(t)
      } : Date == t.constructor ? this.data = {
        format: "yyyy mmmm",
        date_obj: t
      } : (this.data = JSON.parse(JSON.stringify(t)), this._createDateObj()), this._setFormat(e, i);
    },
    setDateFormat: function setDateFormat(t) {
      this.data.format = t;
    },
    getDisplayDate: function getDisplayDate(t, e) {
      if (this.data.display_date) return this.data.display_date;
      t || (t = jt.fallback), t.constructor != jt && (O("First argument to getDisplayDate must be type Language"), t = jt.fallback);
      var i = e || this.data.format;
      return t.formatDate(this.data.date_obj, i);
    },
    getMillisecond: function getMillisecond() {
      return this.getTime();
    },
    getTime: function getTime() {
      return this.data.date_obj.getTime();
    },
    isBefore: function isBefore(t) {
      if (!this.data.date_obj.constructor == t.data.date_obj.constructor) throw new D("date_compare_err");
      return "isBefore" in this.data.date_obj ? this.data.date_obj.isBefore(t.data.date_obj) : this.data.date_obj < t.data.date_obj;
    },
    isAfter: function isAfter(t) {
      if (!this.data.date_obj.constructor == t.data.date_obj.constructor) throw new D("date_compare_err");
      return "isAfter" in this.data.date_obj ? this.data.date_obj.isAfter(t.data.date_obj) : this.data.date_obj > t.data.date_obj;
    },
    floor: function floor(t) {
      for (var e = new Date(this.data.date_obj.getTime()), i = 0; i < bt.length; i++) {
        if (bt[i][2](e), bt[i][0] == t) return new Mt(e);
      }

      throw new D("invalid_scale_err", t);
    },
    _getDateData: function _getDateData() {
      var t = {
        year: 0,
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };

      for (var e in C(t, this.data), wt) {
        if (!H(t[wt[e]]).match(/^-?\d*$/)) throw new D("invalid_date_err", wt[e] + " = '" + t[wt[e]] + "'");
        var i = parseInt(t[wt[e]]);
        isNaN(i) && (i = 4 == e || 5 == e ? 1 : 0), t[wt[e]] = i;
      }

      return t.month > 0 && t.month <= 12 && (t.month = t.month - 1), t;
    },
    _createDateObj: function _createDateObj() {
      var t = this._getDateData();

      this.data.date_obj = new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond), this.data.date_obj.getFullYear() != t.year && this.data.date_obj.setFullYear(t.year);
    },
    findBestFormat: function findBestFormat(t) {
      for (var e = wt, i = 0; i < e.length; i++) {
        if (this.data[e[i]]) return t ? t in Tt || (t = "short") : t = "base", Tt[t][e[i]];
      }

      return "";
    },
    _setFormat: function _setFormat(t, e) {
      t ? this.data.format = t : this.data.format || (this.data.format = this.findBestFormat()), e ? this.data.format_short = e : this.data.format_short || (this.data.format_short = this.findBestFormat(!0));
    }
  });

  function Et(t) {
    if (t.match(xt)) {
      var e = t.match(xt).slice(1),
          i = {
        year: e[0].replace("+", "")
      };
      return e[1] && (i.month = e[1].replace("-", "")), e[2] && (i.day = e[2].replace("-", "")), i;
    }

    if (t.match(kt)) return cls.parseISODate(t);
    if (t.match(/^\-?\d+$/)) return {
      year: t
    };
    var n = {};

    if (t.match(/\d+\/\d+\/\d+/)) {
      var r = t.match(/\d+\/\d+\/\d+/)[0];
      t = H(t.replace(r, ""));
      var a = r.split("/");
      n.month = a[0], n.day = a[1], n.year = a[2];
    }

    if (t.match(/\d+\/\d+/)) {
      r = t.match(/\d+\/\d+/)[0];
      t = H(t.replace(r, ""));
      a = r.split("/");
      n.month = a[0], n.year = a[1];
    }

    if (t.match(":")) {
      var o = t.split(":");

      if (n.hour = o[0], n.minute = o[1], o[2]) {
        var _t3 = o[2].split(".");

        n.second = _t3[0], n.millisecond = _t3[1];
      }
    }

    return n;
  }

  var Lt = lt.extend({
    initialize: function initialize(t) {
      if (this.year = parseInt(t), isNaN(this.year)) throw new D("invalid_year_err", t);
    },
    isBefore: function isBefore(t) {
      return this.year < t.year;
    },
    isAfter: function isAfter(t) {
      return this.year > t.year;
    },
    getTime: function getTime() {
      return this.year;
    }
  });

  function St(t) {
    return function (e) {
      var i = e.getTime();
      return new Lt(Math.floor(i / t) * t);
    };
  }

  var Dt = [["year", 1, new St(1)], ["decade", 10, new St(10)], ["century", 100, new St(100)], ["millennium", 1e3, new St(1e3)], ["age", 1e6, new St(1e6)], ["epoch", 1e7, new St(1e7)], ["era", 1e8, new St(1e8)], ["eon", 1e9, new St(1e9)]],
      At = Mt.extend({
    initialize: function initialize(t, e, i) {
      Lt == t.constructor ? this.data = {
        date_obj: t
      } : (this.data = JSON.parse(JSON.stringify(t)), this._createDateObj()), this._setFormat(e, i);
    },
    _createDateObj: function _createDateObj() {
      var t = this._getDateData();

      this.data.date_obj = new Lt(t.year);
    },
    floor: function floor(t) {
      for (var e = 0; e < Dt.length; e++) {
        if (Dt[e][0] == t) {
          var i = Dt[e][2](this.data.date_obj);
          return new At(i);
        }
      }

      throw new D("invalid_scale_err", t);
    }
  });

  var jt = /*#__PURE__*/function () {
    function jt(t, e) {
      _classCallCheck(this, jt);

      for (var _t4 in It.en) {
        this[_t4] = It.en[_t4];
      }

      if (t && "string" == typeof t && "en" != t) {
        var i = t;

        if (!(i in It)) {
          console.log("Expected language ".concat(i, " to be cached. Did you call the constructor directly?"));
          var n = Ct(i, e);
          yt(n).then(function (t) {
            It[i] = t;
          }).catch(function (t) {
            console.log("Error loading language [".concat(n, "] ").concat(t.statusText, " [").concat(t.status, "]"));
          });
        }

        C(this, It[i]);
      }
    }

    _createClass(jt, [{
      key: "mergeData",
      value: function mergeData(t) {
        for (k in It.en) {
          t[k] && ("object" == _typeof(this[k]) ? C(t[k], this[k]) : this[k] = t[k]);
        }
      }
    }, {
      key: "formatBigYear",
      value: function formatBigYear(t, e) {
        var i = t.year,
            n = this.bigdateformats[e] || this.bigdateformats.fallback;

        if (n) {
          for (var r = 0; r < n.length; r++) {
            var a = n[r];
            if (Math.abs(i / a[0]) > 1) return Nt(Math.abs(i / a[0]), a[1]);
          }

          return i.toString();
        }

        return O("Language file dateformats missing cosmological. Falling back."), Nt(i, e);
      }
    }, {
      key: "_",
      value: function _(t) {
        return this.messages[t] || jt.fallback.messages[t] || t;
      }
    }, {
      key: "formatDate",
      value: function formatDate(t, e) {
        return t.constructor == Date ? this.formatJSDate(t, e) : t.constructor == Lt ? this.formatBigYear(t, e) : t.data && t.data.date_obj ? this.formatDate(t.data.date_obj, e) : (O("Unfamiliar date presented for formatting"), t.toString());
      }
    }, {
      key: "formatJSDate",
      value: function formatJSDate(t, e) {
        var i = this,
            n = function n(t, e) {
          var n = i.period_labels[t];
          if (n) t = e < 12 ? n[0] : n[1];
          return "<span class='tl-timeaxis-timesuffix'>" + t + "</span>";
        };

        e || (e = "full");
        var r = this.dateformats[e] || jt.fallback.dateformats[e];
        r || (r = e);

        var a = t.getDate(),
            o = t.getDay(),
            s = t.getMonth(),
            l = t.getFullYear(),
            h = t.getHours(),
            c = t.getMinutes(),
            u = t.getSeconds(),
            d = t.getMilliseconds(),
            f = t.getTimezoneOffset(),
            p = {
          d: a,
          dd: z(a),
          ddd: this.date.day_abbr[o],
          dddd: this.date.day[o],
          m: s + 1,
          mm: z(s + 1),
          mmm: this.date.month_abbr[s],
          mmmm: this.date.month[s],
          yy: String(l).slice(2),
          yyyy: l < 0 && this.has_negative_year_modifier() ? Math.abs(l) : l,
          h: h % 12 || 12,
          hh: z(h % 12 || 12),
          H: h,
          HH: z(h),
          M: c,
          MM: z(c),
          s: u,
          ss: z(u),
          l: z(d, 3),
          L: z(d > 99 ? Math.round(d / 10) : d),
          t: n("t", h),
          tt: n("tt", h),
          T: n("T", h),
          TT: n("TT", h),
          Z: (String(t).match(/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g) || [""]).pop().replace(/[^-+\dA-Z]/g, ""),
          o: (f > 0 ? "-" : "+") + z(100 * Math.floor(Math.abs(f) / 60) + Math.abs(f) % 60, 4),
          S: ["th", "st", "nd", "rd"][a % 10 > 3 ? 0 : (a % 100 - a % 10 != 10) * a % 10]
        },
            _ = r.replace(jt.DATE_FORMAT_TOKENS, function (t) {
          return t in p ? p[t] : t.slice(1, t.length - 1);
        });

        return this._applyEra(_, l);
      }
    }, {
      key: "has_negative_year_modifier",
      value: function has_negative_year_modifier() {
        return Boolean(this.era_labels.negative_year.prefix || this.era_labels.negative_year.suffix);
      }
    }, {
      key: "_applyEra",
      value: function _applyEra(t, e) {
        var i = e < 0 ? this.era_labels.negative_year : this.era_labels.positive_year,
            n = "";
        return i.prefix && (n += "<span>" + i.prefix + "</span> "), n += t, i.suffix && (n += " <span>" + i.suffix + "</span>"), n;
      }
    }]);

    return jt;
  }();

  function Ct(t, e) {
    if (/\.json$/.test(t)) var i = t;else {
      var n = "/locale/" + t + ".json";
      /\/$/.test(e) && (n = n.substr(1));
      i = e + n;
    }
    return i;
  }

  function Nt(t, e) {
    if (e.match(/%(\.(\d+))?f/)) {
      var i = e.match(/%(\.(\d+))?f/),
          n = i[0];
      return i[2] && (t = t.toFixed(i[2])), e.replace(n, t);
    }

    return e;
  }

  jt.fallback = {
    messages: {}
  }, jt.DATE_FORMAT_TOKENS = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;
  var It = {
    en: {
      name: "English (built-in)",
      lang: "en",
      api: {
        wikipedia: "en"
      },
      messages: {
        loading: "Loading",
        wikipedia: "From Wikipedia, the free encyclopedia",
        error: "Error",
        contract_timeline: "Contract Timeline",
        return_to_title: "Return to Title",
        loading_content: "Loading Content",
        expand_timeline: "Expand Timeline",
        loading_timeline: "Loading Timeline... ",
        swipe_to_navigate: "Swipe to Navigate<br><span class='tl-button'>OK</span>",
        unknown_read_err: "An unexpected error occurred trying to read your spreadsheet data",
        invalid_url_err: "Unable to read Timeline data. Make sure your URL is for a Google Spreadsheet or a Timeline JSON file.",
        invalid_url_share_required: "Because of unexpected changes to Google's data access API, the creator of this timeline must enable 'anyone with the url can read' access for this spreadsheet. See timeline.knightlab.com for more information.",
        network_err: "Unable to read your Google Spreadsheet. Make sure you have published it to the web.",
        empty_feed_err: "No data entries found",
        missing_start_date_err: "Missing start_date",
        invalid_data_format_err: "Header row has been modified.",
        invalid_start_time_without_date: "Invalid configuration: time cannot be used without date.",
        invalid_end_time_without_date: "Invalid configuration: end time cannot be used without end date.",
        date_compare_err: "Can't compare timeline date objects on different scales",
        invalid_scale_err: "Invalid scale",
        invalid_date_err: "Invalid date: month, day and year must be numbers.",
        invalid_separator_error: "Invalid time: misuse of : or . as separator.",
        invalid_hour_err: "Invalid time (hour)",
        invalid_minute_err: "Invalid time (minute)",
        invalid_second_err: "Invalid time (second)",
        invalid_fractional_err: "Invalid time (fractional seconds)",
        invalid_second_fractional_err: "Invalid time (seconds and fractional seconds)",
        invalid_year_err: "Invalid year",
        flickr_notfound_err: "Photo not found or private",
        flickr_invalidurl_err: "Invalid Flickr URL",
        imgur_invalidurl_err: "Invalid Imgur URL",
        twitter_invalidurl_err: "Invalid Twitter URL",
        twitter_load_err: "Unable to load Tweet",
        twitterembed_invalidurl_err: "Invalid Twitter Embed url",
        wikipedia_load_err: "Unable to load Wikipedia entry",
        youtube_invalidurl_err: "Invalid YouTube URL",
        spotify_invalid_url: "Invalid Spotify URL",
        template_value_err: "No value provided for variable",
        invalid_rgb_err: "Invalid RGB argument",
        time_scale_scale_err: "Don't know how to get date from time for scale",
        axis_helper_no_options_err: "Axis helper must be configured with options",
        axis_helper_scale_err: "No AxisHelper available for scale",
        invalid_integer_option: "Invalid option value—must be a whole number.",
        instagram_bad_request: "Invalid or private Instagram URL"
      },
      date: {
        month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        month_abbr: ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
        day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        day_abbr: ["Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."]
      },
      era_labels: {
        positive_year: {
          prefix: "",
          suffix: ""
        },
        negative_year: {
          prefix: "",
          suffix: "BCE"
        }
      },
      period_labels: {
        t: ["a", "p"],
        tt: ["am", "pm"],
        T: ["A", "P"],
        TT: ["AM", "PM"]
      },
      dateformats: {
        year: "yyyy",
        month_short: "mmm",
        month: "mmmm yyyy",
        full_short: "mmm d",
        full: "mmmm d',' yyyy",
        time: "h:MM:ss TT' <small>'mmmm d',' yyyy'</small>'",
        time_short: "h:MM:ss TT",
        time_no_seconds_short: "h:MM TT",
        time_no_minutes_short: "h TT",
        time_no_seconds_small_date: "h:MM TT' <small>'mmmm d',' yyyy'</small>'",
        time_milliseconds: "l",
        full_long: "mmm d',' yyyy 'at' h:MM TT",
        full_long_small_date: "h:MM TT' <small>mmm d',' yyyy'</small>'"
      },
      bigdateformats: {
        fallback: [[1e9, "%.2f billion years ago"], [1e6, "%.1f million years ago"], [1e3, "%.1f thousand years ago"], [1, "%f years ago"]],
        compact: [[1e9, "%.2f bya"], [1e6, "%.1f mya"], [1e3, "%.1f kya"], [1, "%f years ago"]],
        verbose: [[1e9, "%.2f billion years ago"], [1e6, "%.1f million years ago"], [1e3, "%.1f thousand years ago"], [1, "%f years ago"]]
      }
    }
  };
  var Ot = new jt();
  jt.fallback = Ot;

  var zt = /*#__PURE__*/function () {
    function zt() {
      _classCallCheck(this, zt);
    }

    _createClass(zt, [{
      key: "setLanguage",
      value: function setLanguage(t) {
        this.language = t;
      }
    }, {
      key: "getLanguage",
      value: function getLanguage() {
        if (this.language) {
          if ("object" == _typeof(this.language)) return this.language;
          O("I18NMixins.getLanguage: this.language should be object, but is ".concat(_typeof(this.language)));
        }

        return Ot;
      }
    }, {
      key: "_",
      value: function _(t) {
        return this.getLanguage()._(t);
      }
    }]);

    return zt;
  }();

  var Rt = /*#__PURE__*/function () {
    function Rt(t, e, i) {
      _classCallCheck(this, Rt);

      i && this.setLanguage(i), this._el = {
        parent: {},
        container: {},
        message_container: {},
        loading_icon: {},
        message: {}
      }, this.options = {
        width: 600,
        height: 600,
        message_class: "tl-message",
        message_icon_class: "tl-loading-icon"
      }, this.container = t, C(this.options, e), this._el.container = T("div", this.options.message_class), t && (t.appendChild(this._el.container), this._el.parent = t), this.animator = {}, this._initLayout(), this._initEvents();
    }

    _createClass(Rt, [{
      key: "updateMessage",
      value: function updateMessage(t) {
        this._el.message.innerHTML = t || this._("loading"), !this._el.parent.atributes && this.container.attributes && (this.container.appendChild(this._el.container), this._el.parent = this.container);
      }
    }, {
      key: "updateDisplay",
      value: function updateDisplay(t, e) {}
    }, {
      key: "_onMouseClick",
      value: function _onMouseClick() {
        this.fire("clicked", this.options);
      }
    }, {
      key: "_onRemove",
      value: function _onRemove() {
        this._el.parent = {};
      }
    }, {
      key: "_initLayout",
      value: function _initLayout() {
        this._el.message_container = T("div", "tl-message-container", this._el.container), this._el.loading_icon = T("div", this.options.message_icon_class, this._el.message_container), this._el.message = T("div", "tl-message-content", this._el.message_container), this.updateMessage();
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        _t.addListener(this._el.container, "click", this._onMouseClick, this), _t.addListener(this, "removed", this._onRemove, this);
      }
    }]);

    return Rt;
  }();

  function Pt(t, e) {
    e = e || "start_date";
    t.sort(function (t, i) {
      return t[e].isBefore(i[e]) ? -1 : t[e].isAfter(i[e]) ? 1 : 0;
    });
  }

  function qt(t) {
    var e = {
      hour: null,
      minute: null,
      second: null,
      millisecond: null
    },
        i = null,
        n = t.match(/(\s*[AaPp]\.?[Mm]\.?\s*)$/);
    n && (i = H(n[0]), t = H(t.substring(0, t.lastIndexOf(i))));
    var r = [],
        a = t.match(/^\s*(\d{1,2})(\d{2})\s*$/);
    if (a ? r = a.slice(1) : 1 == (r = t.split(":")).length && (r = t.split(".")), r.length > 4) throw new D("invalid_separator_error");
    var o = r[0];
    if (e.hour = parseInt(o), i && "p" == i.toLowerCase()[0] && 12 != e.hour ? e.hour += 12 : i && "a" == i.toLowerCase()[0] && 12 == e.hour && (e.hour = 0), isNaN(e.hour) || e.hour < 0 || e.hour > 23) throw new D("invalid_hour_err", o);

    if (r.length > 1) {
      var _t5 = r[1];
      if (e.minute = parseInt(_t5), isNaN(e.minute)) throw new D("invalid_minute_err", _t5);
    }

    if (r.length > 2) {
      var s = r[2].split(/[\.,]/);
      if ((r = s.concat(r.slice(3))).length > 2) throw new D("invalid_second_fractional_err");
      if (e.second = parseInt(r[0]), isNaN(e.second)) throw new D("invalid_second_err", r[0]);

      if (2 == r.length) {
        var l = parseInt(r[1]);
        if (isNaN(l)) throw new D("invalid_fractional_err", r[1]);
        e.millisecond = 100 * l;
      }
    }

    return e;
  }

  F(Rt, zt, ht, dt);
  var Ht = new RegExp("(^-?\\d+$|^$)");

  function Ft(t) {
    try {
      return Object.keys(t).forEach(function (e) {
        var i = t[e];
        if (i && i.match && !i.match(Ht)) throw "invalid value ".concat(i, " for ").concat(e);
      }), !0;
    } catch (t) {
      return !1;
    }
  }

  var $t = {
    human: Mt,
    cosmological: At
  };
  var Bt = i(0),
      Wt = i.n(Bt);
  var Ut = {
    text: ["headline", "text"],
    media: ["caption", "credit"]
  },
      Zt = {
    start_date: ["display_date"],
    end_date: ["display_date"],
    slide: ["display_date", "group"],
    date: ["display_date"]
  };

  function Gt(t, e, i) {
    Object.keys(i).forEach(function (n) {
      var r = "slide" == n ? t : t[n];
      r && i[n].forEach(function (t) {
        void 0 !== r[t] && (r[t] = e(r[t]));
      });
    });
  }

  function Yt(t) {
    return Wt.a.sanitize(t, {
      ADD_TAGS: ["iframe"],
      ADD_ATTR: ["frameborder", "target"]
    });
  }

  Wt.a.addHook("afterSanitizeAttributes", function (t) {
    if ("A" == t.nodeName && "href" in t) {
      "target" in t.attributes || t.setAttribute("target", "_blank");
      var _e4 = t.attributes.rel;
      _e4 ? -1 == _e4.value.indexOf("noopener") && t.setAttribute("rel", "noopener ".concat(_e4.value)) : t.setAttribute("rel", "noopener");
    }
  });

  var Vt = /*#__PURE__*/function () {
    function Vt(t) {
      var _this2 = this;

      _classCallCheck(this, Vt);

      if (this.title = "", this.scale = "", this.events = [], this.eras = [], this.event_dict = {}, this.messages = {
        errors: [],
        warnings: []
      }, "object" == _typeof(t) && t.events) {
        if (this.scale = t.scale, this.events = [], this._ensureValidScale(t.events), t.title) {
          var e = this._assignID(t.title);

          this._tidyFields(t.title), this.title = t.title, this.event_dict[e] = this.title;
        }

        for (var i = 0; i < t.events.length; i++) {
          try {
            this.addEvent(t.events[i], !0);
          } catch (t) {
            this.logError(t);
          }
        }

        t.eras && t.eras.forEach(function (t, e) {
          try {
            _this2.addEra(t);
          } catch (t) {
            _this2.logError("Era " + e + ": " + t);
          }
        }), Pt(this.events), Pt(this.eras);
      }
    }

    _createClass(Vt, [{
      key: "logError",
      value: function logError(t) {
        O("logError: ".concat(t)), this.messages.errors.push(t);
      }
    }, {
      key: "getErrors",
      value: function getErrors(t) {
        return t ? this.messages.errors.join(t) : this.messages.errors;
      }
    }, {
      key: "validate",
      value: function validate() {
        void 0 !== this.events && void 0 !== this.events.length && 0 != this.events.length || this.logError("Timeline configuration has no events.");

        for (var t = 0; t < this.eras.length; t++) {
          var e;
          if (void 0 === this.eras[t].start_date || void 0 === this.eras[t].end_date) e = this.eras[t].headline ? this.eras[t].headline : "era " + (t + 1), this.logError("All eras must have start and end dates. [" + e + "]");
        }
      }
    }, {
      key: "isValid",
      value: function isValid() {
        return 0 == this.messages.errors.length;
      }
    }, {
      key: "addEvent",
      value: function addEvent(t, e) {
        var i = this._assignID(t);

        return void 0 === t.start_date ? (O("Missing start date, skipping event"), console.log(t), null) : (this._processDates(t), this._tidyFields(t), this.events.push(t), this.event_dict[i] = t, e || Pt(this.events), i);
      }
    }, {
      key: "addEra",
      value: function addEra(t) {
        var e = this._assignID(t);

        if (void 0 === t.start_date) throw new D("missing_start_date_err", e);
        this._processDates(t), this._tidyFields(t), this.eras.push({
          start_date: t.start_date,
          end_date: t.end_date,
          headline: t.text.headline
        });
      }
    }, {
      key: "_assignID",
      value: function _assignID(t) {
        var e = t.unique_id;
        return H(e) || (e = t.text ? $(t.text.headline) : null), t.unique_id = function (t, e) {
          if (e || (e = B(6)), !(e in t)) return e;
          var i = e.match(/^(.+)(-\d+)?$/)[1],
              n = [];

          for (var _e5 in t) {
            _e5.match(/^(.+?)(-\d+)?$/)[1] == i && n.push(_e5);
          }

          e = i + "-" + (n.length + 1);

          for (var r = n.length; -1 != n.indexOf(e); r++) {
            e = i + "-" + r;
          }

          return e;
        }(this.event_dict, e), t.unique_id;
      }
    }, {
      key: "_makeUniqueIdentifiers",
      value: function _makeUniqueIdentifiers(t, e) {
        for (var i = [t], n = 0; n < e.length; n++) {
          H(e[n].unique_id) && (e[n].unique_id = $(e[n].unique_id), -1 == i.indexOf(e[n].unique_id) ? i.push(e[n].unique_id) : e[n].unique_id = "");
        }

        if (i.length != e.length + 1) for (n = 0; n < e.length; n++) {
          if (!e[n].unique_id) {
            var r = e[n].text ? $(e[n].text.headline) : null;
            r || (r = B(6)), -1 != i.indexOf(r) && (r = r + "-" + n), i.push(r), e[n].unique_id = r;
          }
        }
      }
    }, {
      key: "_ensureValidScale",
      value: function _ensureValidScale(t) {
        if (!this.scale) {
          this.scale = "human";

          for (var e = 0; e < t.length; e++) {
            if ("cosmological" == t[e].scale) {
              this.scale = "cosmological";
              break;
            }

            if (t[e].start_date && void 0 !== t[e].start_date.year) {
              var i = new At(t[e].start_date).data.date_obj.year;

              if (i < -271820 || i > 275759) {
                this.scale = "cosmological";
                break;
              }
            }
          }

          O("Determining scale dynamically: ".concat(this.scale));
        }

        $t[this.scale] || this.logError("Don't know how to process dates on scale " + this.scale);
      }
    }, {
      key: "_processDates",
      value: function _processDates(t) {
        var e = $t[this.scale];

        if (!(t.start_date instanceof e)) {
          var i = t.start_date;

          if (t.start_date = new e(i), void 0 !== t.end_date && !(t.end_date instanceof e)) {
            var n = t.end_date,
                r = !0;

            for (var _t6 in i) {
              r = r && i[_t6] == n[_t6];
            }

            r ? (O("End date same as start date is redundant; dropping end date"), delete t.end_date) : t.end_date = new e(n);
          }
        }
      }
    }, {
      key: "getEarliestDate",
      value: function getEarliestDate() {
        var t = this.events[0].start_date;
        return this.eras && this.eras.length > 0 && this.eras[0].start_date.isBefore(t) ? this.eras[0].start_date : t;
      }
    }, {
      key: "getLatestDate",
      value: function getLatestDate() {
        for (var t = [], e = 0; e < this.events.length; e++) {
          this.events[e].end_date ? t.push({
            date: this.events[e].end_date
          }) : t.push({
            date: this.events[e].start_date
          });
        }

        for (e = 0; e < this.eras.length; e++) {
          this.eras[e].end_date ? t.push({
            date: this.eras[e].end_date
          }) : t.push({
            date: this.eras[e].start_date
          });
        }

        return Pt(t, "date"), t.slice(-1)[0].date;
      }
    }, {
      key: "_tidyFields",
      value: function _tidyFields(t) {
        function e(t, e, i) {
          i || (i = ""), t.hasOwnProperty(e) || (t[e] = i);
        }

        t.group && (t.group = H(t.group)), t.text || (t.text = {}), e(t.text, "text"), e(t.text, "headline"), Gt(t, Yt, Ut), Gt(t, it, Zt);
      }
    }]);

    return Vt;
  }();

  function Jt(_x) {
    return _Jt.apply(this, arguments);
  }

  function _Jt() {
    _Jt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (e, i) {
                if (t.data) {
                  var n = Xt(Kt(t.data, t), t);
                  n.useMemoryStore = !0, e(n);
                } else t.url && window.fetch(t.url, {
                  mode: "cors"
                }).then(function (t) {
                  if (200 == t.status) return t.text ? t.text() : t;
                  "application/json" == t.headers.get("content-type") ? t.text().then(function (t) {
                    i(JSON.parse(t));
                  }) : i({
                    status_code: t.status,
                    message: "Error fetching CSV: [".concat(t.status, " ").concat(t.statusText, "]")
                  });
                }).then(function (i) {
                  if (i) {
                    var n = function (t, e) {
                      var i = Xt(Kt(t, e)),
                          n = [];
                      return i.records.forEach(function (t) {
                        var e = {};
                        i.fields.forEach(function (i, n) {
                          return e[i] = t[n];
                        }), n.push(e);
                      }), n;
                    }(i, t);

                    n.useMemoryStore = !0, e(n);
                  }
                }).catch(function (t) {
                  i({
                    status_code: 500,
                    message: "Error fetching CSV: ".concat(t)
                  });
                });
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _Jt.apply(this, arguments);
  }

  function Xt(t, e) {
    return !0 !== (e = e || {}).noHeaderRow && t.length > 0 ? {
      fields: t[0].map(function (t, e) {
        return t && t.trim ? t.trim() : "untitled".concat(e);
      }),
      records: t.slice(1)
    } : {
      records: t
    };
  }

  function Kt(t, e) {
    (!e || e && !e.lineterminator) && (t = function (t, e) {
      if (e && !e.lineterminator) return t.replace(/(\r\n|\n|\r)/gm, "\n");
      return t;
    }(t, e));

    var i = function (t) {
      var e = {
        delimiter: ",",
        doublequote: !0,
        lineterminator: "\n",
        quotechar: '"',
        skipinitialspace: !0,
        skipinitialrows: 0
      };

      for (var i in t) {
        "trim" === i ? e.skipinitialspace = t.trim : e[i.toLowerCase()] = t[i];
      }

      return e;
    }(e);

    t = function (t, e) {
      return null == t ? "" : (e = e || "\n", t.charAt(t.length - e.length) !== e ? t : t.substring(0, t.length - e.length));
    }(t, i.lineterminator);

    var n,
        r,
        a = "",
        o = !1,
        s = !1,
        l = "",
        h = [],
        c = [];

    for (r = function r(t) {
      return !0 !== s && ("" === t ? t = null : !0 === i.skipinitialspace && (t = t.trim())), t;
    }, n = 0; n < t.length; n += 1) {
      a = t.charAt(n), !1 !== o || a !== i.delimiter && a !== i.lineterminator ? a !== i.quotechar ? l += a : o ? t.charAt(n + 1) === i.quotechar ? (l += i.quotechar, n += 1) : o = !1 : (o = !0, s = !0) : (l = r(l), h.push(l), a === i.lineterminator && (c.push(h), h = []), l = "", s = !1);
    }

    return l = r(l), h.push(l), c.push(h), i.skipinitialrows && (c = c.slice(i.skipinitialrows)), c;
  }

  function Qt(t) {
    if (t) return t.replace(/[\s,]+/g, "");
  }

  function te(t) {
    var e = {
      key: null,
      worksheet: 0
    };
    var i = /\bkey=([-_A-Za-z0-9]+)&?/i,
        n = /docs.google.com\/spreadsheets(.*?)\/d\//;
    if (t.match(i)) e.key = t.match(i)[1];else if (t.match(n)) {
      var r = t.search(n) + t.match(n)[0].length,
          a = t.substr(r);
      e.key = a.split("/")[0], t.match(/\?gid=(\d+)/) && (e.worksheet = t.match(/\?gid=(\d+)/)[1]);
    } else t.match(/^\b[-_A-Za-z0-9]+$/) && (e.key = t);
    return e.key ? e : null;
  }

  function ee(_x2, _x3) {
    return _ee.apply(this, arguments);
  }

  function _ee() {
    _ee = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(t, e) {
      var i, n;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              i = [];

              t = function (t) {
                if ((t = t.trim()).match(/^[a-zA-Z0-9-_]+$/)) return "https://docs.google.com/spreadsheets/d/".concat(t, "/pub?output=csv");

                if (t.startsWith("https://docs.google.com/spreadsheets/")) {
                  if (t.match(/\/pub\?output=csv$/)) return t;

                  var _e11 = new URL(t),
                      _i5 = new URLSearchParams(_e11.search);

                  _i5.set("output", "csv"), _i5.get("gid") && _i5.set("single", "true"), _e11.search = "?".concat(_i5.toString());

                  var _n4 = _e11.pathname.substr(0, _e11.pathname.lastIndexOf("/"));

                  return _e11.pathname = "".concat(_n4, "/pub"), _e11.toString();
                }

                throw new D("invalid_url_err", t);
              }(t);

              _context3.next = 4;
              return Jt({
                url: "".concat(e).concat(t)
              }).then(function (t) {
                i = t;
              }).catch(function (t) {
                if ("response_not_csv" == t.proxy_err_code) throw new D("Timeline could not read the data for your timeline. Make sure you have published it to the web.");
                throw new D(t.message);
              });

            case 4:
              n = {
                events: [],
                errors: [],
                warnings: [],
                eras: []
              };
              return _context3.abrupt("return", (i.forEach(function (t, e) {
                try {
                  if (!function (t) {
                    var e = [];
                    if (Object.keys) e = Object.keys(t);else for (var i in t) {
                      Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
                    }

                    for (var n = 0; n < e.length; n++) {
                      var r = e[n];
                      if (null != t[r] && "string" != typeof t[r]) return !1;
                      if (0 != H(t[r]).length) return !1;
                    }

                    return !0;
                  }(t)) {
                    !function (t, e) {
                      var i = "event";
                      void 0 !== t.type && (i = t.type, delete t.type);
                      "title" == i ? e.title ? (e.warnings.push("Multiple title slides detected."), e.events.push(t)) : e.title = t : "era" == i ? e.eras.push(t) : e.events.push(t);
                    }(function (t) {
                      var e = {};
                      Object.keys(t).forEach(function (i) {
                        e[i] = H(t[i]);
                      });
                      var i,
                          n = {
                        media: {
                          caption: e["Media Caption"] || "",
                          credit: e["Media Credit"] || "",
                          url: e.Media || "",
                          thumbnail: e["Media Thumbnail"] || ""
                        },
                        text: {
                          headline: e.Headline || "",
                          text: e.Text || ""
                        },
                        display_date: e["Display Date"] || "",
                        group: e.Group || e.Tag || "",
                        background: (i = e.Background, "string" != typeof i ? "" : i.match(/^(https?:)?\/\/?/) ? {
                          url: i
                        } : {
                          color: i
                        }),
                        type: e.Type || ""
                      };
                      if (Object.keys(e).includes("Start Date") || Object.keys(e).includes("End Date")) e["Start Date"] && (n.start_date = Et(e["Start Date"])), e["End Date"] && (n.end_date = Et(e["End Date"]));else {
                        if (e.Year && (n.start_date = {
                          year: Qt(e.Year),
                          month: Qt(e.Month) || "",
                          day: Qt(e.Day) || ""
                        }), e["End Year"] && (n.end_date = {
                          year: Qt(e["End Year"]) || "",
                          month: Qt(e["End Month"]) || "",
                          day: Qt(e["End Day"]) || ""
                        }), e.Time) {
                          if (!n.start_date) throw new D("invalid_start_time_without_date");
                          C(n.start_date, qt(e.Time));
                        }

                        if (e["End Time"]) {
                          if (!n.end_date) throw new D("invalid_end_time_without_date");
                          C(n.end_date, qt(e["End Time"]));
                        }

                        if (n.start_date && !Ft(n.start_date)) throw new D("invalid_date_err");
                        if (n.end_date && !Ft(n.end_date)) throw new D("invalid_date_err");
                      }
                      return n;
                    }(t), n);
                  }
                } catch (i) {
                  if (i.constructor == D) n.errors.push(i);else {
                    i.message && (i = i.message);

                    var _r3 = t.Headline || e;

                    n.errors.push(i + "[".concat(_r3, "]"));
                  }
                }
              }), n));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _ee.apply(this, arguments);
  }

  function ie(_x4, _x5) {
    return _ie.apply(this, arguments);
  }

  function _ie() {
    _ie = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(t, e) {
      var i, n, r, a, o;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              i = null, n = {};

              if (!("function" == typeof e ? i = e : "object" == _typeof(e) && (n = e, i = e.callback, "function" == typeof n.callback && (i = n.callback)), !i)) {
                _context5.next = 3;
                break;
              }

              throw new D("Second argument to makeConfig must be either a function or an object which includes a 'callback' property with a 'function' type value");

            case 3:
              if (!te(t)) {
                _context5.next = 17;
                break;
              }

              _context5.prev = 4;
              _context5.next = 7;
              return function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(t, e) {
                  var i;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (e.sheets_proxy) {
                            _context4.next = 2;
                            break;
                          }

                          throw new D("Proxy option must be set to read data from Google");

                        case 2:
                          _context4.next = 4;
                          return ee(t, e.sheets_proxy);

                        case 4:
                          i = _context4.sent;

                          if (!i) {
                            _context4.next = 7;
                            break;
                          }

                          return _context4.abrupt("return", i);

                        case 7:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x8, _x9) {
                  return _ref2.apply(this, arguments);
                };
              }()(t, n);

            case 7:
              a = _context5.sent;
              _context5.next = 13;
              break;

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](4);
              return _context5.abrupt("return", (r = new Vt(), "NetworkError" == _context5.t0.name ? r.logError(new D("network_err")) : "TLError" == _context5.t0.name ? r.logError(_context5.t0) : r.logError(new D("unknown_read_err", _context5.t0.name)), void i(r)));

            case 13:
              if (r = new Vt(a), a.errors) for (o = 0; o < a.errors.length; o++) {
                r.logError(a.errors[o]);
              }
              i(r);
              _context5.next = 18;
              break;

            case 17:
              vt({
                url: t,
                dataType: "json",
                success: function success(t) {
                  try {
                    r = new Vt(t);
                  } catch (t) {
                    (r = new Vt()).logError(t);
                  }

                  i(r);
                },
                error: function error(t, e, n) {
                  if (r = new Vt(), "parsererror" == e) n = new D("invalid_url_err");else n = new D("unknown_read_err", e);
                  r.logError(n), i(r);
                }
              });

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[4, 10]]);
    }));
    return _ie.apply(this, arguments);
  }

  var ne = /*#__PURE__*/function () {
    function ne(t) {
      _classCallCheck(this, ne);

      if (!t) throw new D("axis_helper_no_options_err");
      this.scale = t.scale, this.minor = t.minor, this.major = t.major;
    }

    _createClass(ne, [{
      key: "getPixelsPerTick",
      value: function getPixelsPerTick(t) {
        return t * this.minor.factor;
      }
    }, {
      key: "getMajorTicks",
      value: function getMajorTicks(t) {
        return this._getTicks(t, this.major);
      }
    }, {
      key: "getMinorTicks",
      value: function getMinorTicks(t) {
        return this._getTicks(t, this.minor);
      }
    }, {
      key: "_getTicks",
      value: function _getTicks(t, e) {
        for (var i = t._scaled_padding * e.factor, n = t._earliest - i, r = t._latest + i, a = [], o = n; o < r; o += e.factor) {
          a.push(t.getDateFromTime(o).floor(e.name));
        }

        return {
          name: e.name,
          ticks: a
        };
      }
    }]);

    return ne;
  }();

  var re = {},
      ae = function ae(t, e) {
    re[t] = [];

    for (var i = 0; i < e.length - 1; i++) {
      var n = e[i],
          r = e[i + 1];
      re[t].push(new ne({
        scale: n[3],
        minor: {
          name: n[0],
          factor: n[1]
        },
        major: {
          name: r[0],
          factor: r[1]
        }
      }));
    }
  };

  ae("human", bt), ae("cosmological", Dt);
  var oe = {
    millisecond: "time_milliseconds",
    second: "time_short",
    minute: "time_no_seconds_short",
    hour: "time_no_minutes_short",
    day: "full_short",
    month: "month_short",
    year: "year",
    decade: "year",
    century: "year",
    millennium: "year",
    age: "compact",
    epoch: "compact",
    era: "compact",
    eon: "compact",
    eon2: "compact"
  };

  var se = /*#__PURE__*/function () {
    function se(t, e) {
      _classCallCheck(this, se);

      var i = t.events;
      this._scale = t.scale, e = C({
        display_width: 500,
        screen_multiplier: 3,
        max_rows: null
      }, e), this._display_width = e.display_width, this._screen_multiplier = e.screen_multiplier, this._pixel_width = this._screen_multiplier * this._display_width, this._group_labels = void 0, this._positions = [], this._pixels_per_milli = 0, this._earliest = t.getEarliestDate().getTime(), this._latest = t.getLatestDate().getTime(), this._span_in_millis = this._latest - this._earliest, this._span_in_millis <= 0 && (this._span_in_millis = this._computeDefaultSpan(t)), this._average = this._span_in_millis / i.length, this._pixels_per_milli = this.getPixelWidth() / this._span_in_millis, this._axis_helper = function (t, e) {
        "number" != typeof e && (e = 100);
        var i = t.getScale(),
            n = re[i];
        if (!n) throw new D("axis_helper_scale_err", i);

        for (var r = null, a = 0; a < n.length; a++) {
          var o = n[a],
              s = o.getPixelsPerTick(t._pixels_per_milli);
          if (s > e) return null == r || Math.abs(e - s) < Math.abs(e - s) ? o : r;
          r = o;
        }

        return n[n.length - 1];
      }(this), this._scaled_padding = 1 / this.getPixelsPerTick() * (this._display_width / 2), this._computePositionInfo(i, e.max_rows);
    }

    _createClass(se, [{
      key: "_computeDefaultSpan",
      value: function _computeDefaultSpan(t) {
        if ("human" == t.scale) {
          for (var e = {}, i = 0; i < t.events.length; i++) {
            var n = t.events[i].start_date.findBestFormat();
            e[n] = e[n] ? e[n] + 1 : 1;
          }

          for (i = bt.length - 1; i >= 0; i--) {
            if (e.hasOwnProperty(bt[i][0])) {
              var r = bt[bt.length - 1];
              return bt[i + 1] && (r = bt[i + 1]), r[1];
            }
          }

          return 31536e6;
        }

        return 2e5;
      }
    }, {
      key: "getGroupLabels",
      value: function getGroupLabels() {
        return this._group_labels || [];
      }
    }, {
      key: "getScale",
      value: function getScale() {
        return this._scale;
      }
    }, {
      key: "getNumberOfRows",
      value: function getNumberOfRows() {
        return this._number_of_rows;
      }
    }, {
      key: "getPixelWidth",
      value: function getPixelWidth() {
        return this._pixel_width;
      }
    }, {
      key: "getPosition",
      value: function getPosition(t) {
        return (t - this._earliest) * this._pixels_per_milli;
      }
    }, {
      key: "getPositionInfo",
      value: function getPositionInfo(t) {
        return this._positions[t];
      }
    }, {
      key: "getPixelsPerTick",
      value: function getPixelsPerTick() {
        return this._axis_helper.getPixelsPerTick(this._pixels_per_milli);
      }
    }, {
      key: "getTicks",
      value: function getTicks() {
        return {
          major: this._axis_helper.getMajorTicks(this),
          minor: this._axis_helper.getMinorTicks(this)
        };
      }
    }, {
      key: "getDateFromTime",
      value: function getDateFromTime(t) {
        if ("human" == this._scale) return new Mt(t);
        if ("cosmological" == this._scale) return new At(new Lt(t));
        throw new D("time_scale_scale_err", this._scale);
      }
    }, {
      key: "getMajorScale",
      value: function getMajorScale() {
        return this._axis_helper.major.name;
      }
    }, {
      key: "getMinorScale",
      value: function getMinorScale() {
        return this._axis_helper.minor.name;
      }
    }, {
      key: "_assessGroups",
      value: function _assessGroups(t) {
        for (var e = [], i = !1, n = 0; n < t.length; n++) {
          t[n].group && (e.indexOf(t[n].group) < 0 ? e.push(t[n].group) : i = !0);
        }

        return e.length && i && e.push(""), e;
      }
    }, {
      key: "_computeRowInfo",
      value: function _computeRowInfo(t, e) {
        for (var i = [], n = 0, r = 0; r < t.length; r++) {
          var a = t[r],
              o = [];
          delete a.row;

          for (var s = 0; s < i.length; s++) {
            if (o.push(i[s].end - a.start), o[s] <= 0) {
              a.row = s, i[s] = a;
              break;
            }
          }

          if (void 0 === a.row) if (null === e) a.row = i.length, i.push(a);else if (e > 0) a.row = i.length, i.push(a), e--;else {
            var l = Math.min.apply(null, o),
                h = o.indexOf(l);
            a.row = h, a.end > i[h].end && (i[h] = a), n++;
          }
        }

        return {
          n_rows: i.length,
          n_overlaps: n
        };
      }
    }, {
      key: "_computePositionInfo",
      value: function _computePositionInfo(t, e, i) {
        i = i || 100;

        for (var n = [], r = !1, a = 0; a < t.length; a++) {
          var o = {
            start: this.getPosition(t[a].start_date.getTime())
          };

          if (this._positions.push(o), void 0 !== t[a].end_date) {
            var s = this.getPosition(t[a].end_date.getTime());
            o.width = s - o.start, o.width > i ? o.end = o.start + o.width : o.end = o.start + i;
          } else o.width = i, o.end = o.start + i;

          t[a].group ? n.indexOf(t[a].group) < 0 && n.push(t[a].group) : r = !0;
        }

        if (n.length) {
          r && n.push("");
          var l = [];

          for (a = 0; a < n.length; a++) {
            l[a] = {
              label: n[a],
              idx: a,
              positions: [],
              n_rows: 1,
              n_overlaps: 0
            };
          }

          for (a = 0; a < this._positions.length; a++) {
            (o = this._positions[a]).group = n.indexOf(t[a].group || ""), o.row = 0;

            for (var h = (d = l[o.group]).positions.length - 1; h >= 0; h--) {
              d.positions[h].end > o.start && d.n_overlaps++;
            }

            d.positions.push(o);
          }

          for (var c = n.length;;) {
            var u = Math.max(0, e - c);
            if (!u) break;
            if (l.sort(function (t, e) {
              return t.n_overlaps > e.n_overlaps ? -1 : t.n_overlaps < e.n_overlaps ? 1 : t.idx - e.idx;
            }), !l[0].n_overlaps) break;

            for (c = 0, a = 0; a < l.length; a++) {
              var d;

              if ((d = l[a]).n_overlaps && u) {
                var f = this._computeRowInfo(d.positions, d.n_rows + 1);

                d.n_rows = f.n_rows, d.n_overlaps = f.n_overlaps, u--;
              }

              c += d.n_rows;
            }
          }

          this._number_of_rows = c, this._group_labels = [], l.sort(function (t, e) {
            return t.idx - e.idx;
          });
          a = 0;

          for (var p = 0; a < l.length; a++) {
            this._group_labels.push({
              label: l[a].label,
              rows: l[a].n_rows
            });

            for (h = 0; h < l[a].positions.length; h++) {
              (o = l[a].positions[h]).row += p;
            }

            p += l[a].n_rows;
          }
        } else {
          var _ = this._computeRowInfo(this._positions, e);

          this._number_of_rows = _.n_rows;
        }
      }
    }, {
      key: "getAxisTickDateFormat",
      value: function getAxisTickDateFormat(t) {
        return "cosmological" == this._scale ? "compact" : oe[t];
      }
    }]);

    return se;
  }();

  var le = /*#__PURE__*/function () {
    function le(t) {
      _classCallCheck(this, le);

      this._el = {
        parent: {},
        container: {},
        message: {}
      }, this.options = {
        width: 600,
        height: 600
      }, this.data = {
        label: "",
        rows: 1
      }, this._el.container = T("div", "tl-timegroup"), C(this.data, t), this.animator = {}, this._initLayout(), this._initEvents();
    }

    _createClass(le, [{
      key: "updateDisplay",
      value: function updateDisplay(t, e) {}
    }, {
      key: "setRowPosition",
      value: function setRowPosition(t, e) {
        this.options.height = e * this.data.rows, this.setPosition({
          top: t
        }), this._el.container.style.height = this.options.height + "px";
      }
    }, {
      key: "setAlternateRowColor",
      value: function setAlternateRowColor(t, e) {
        var i = "tl-timegroup";
        t && (i += " tl-timegroup-alternate"), e && (i += " tl-timegroup-hidden"), this._el.container.className = i;
      }
    }, {
      key: "_onMouseClick",
      value: function _onMouseClick() {
        this.fire("clicked", this.options);
      }
    }, {
      key: "_initLayout",
      value: function _initLayout() {
        this._el.message = T("div", "tl-timegroup-message", this._el.container), this._el.message.innerHTML = this.data.label;
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        _t.addListener(this._el.container, "click", this._onMouseClick, this);
      }
    }, {
      key: "_updateDisplay",
      value: function _updateDisplay(t, e, i) {}
    }]);

    return le;
  }();

  F(le, ht, dt);
  i(2);

  var he = /*#__PURE__*/function () {
    function he(t, e, i, n) {
      _classCallCheck(this, he);

      this.start_date = t, this.end_date = e, this.headline = i, this._el = {
        container: {},
        background: {},
        content_container: {},
        content: {},
        text: {}
      }, this._text = {}, this._state = {
        loaded: !1
      }, this.options = {
        duration: 1e3,
        ease: at,
        width: 600,
        height: 600,
        marker_width_min: 100
      }, this.active = !1, this.animator = {}, this.has_end_date = !1, C(this.options, n), this._initLayout(), this._initEvents();
    }

    _createClass(he, [{
      key: "show",
      value: function show() {}
    }, {
      key: "hide",
      value: function hide() {}
    }, {
      key: "setActive",
      value: function setActive(t) {}
    }, {
      key: "addTo",
      value: function addTo(t) {
        t.appendChild(this._el.container);
      }
    }, {
      key: "removeFrom",
      value: function removeFrom(t) {
        t.removeChild(this._el.container);
      }
    }, {
      key: "updateDisplay",
      value: function updateDisplay(t, e) {
        this._updateDisplay(t, e);
      }
    }, {
      key: "getLeft",
      value: function getLeft() {
        return this._el.container.style.left.slice(0, -2);
      }
    }, {
      key: "getTime",
      value: function getTime() {
        return this.start_date.getTime();
      }
    }, {
      key: "getEndTime",
      value: function getEndTime() {
        return !!this.end_date && this.end_date.getTime();
      }
    }, {
      key: "setHeight",
      value: function setHeight(t) {
        var e = 1;
        this._el.content_container.style.height = t + "px", this._el.content.className = "tl-timeera-content", l ? ((e = Math.floor(t / 14)) < 1 && (e = 1), this._text.className = "tl-headline", this._text.style.webkitLineClamp = e) : (e = t / 12, this._text.className = e > 1 ? "tl-headline tl-headline-fadeout" : "tl-headline", this._text.style.height = 12 * e + "px");
      }
    }, {
      key: "setWidth",
      value: function setWidth(t) {
        this.end_date && (this._el.container.style.width = t + "px", t > this.options.marker_width_min ? (this._el.content_container.style.width = t + "px", this._el.content_container.className = "tl-timeera-content-container tl-timeera-content-container-long") : (this._el.content_container.style.width = this.options.marker_width_min + "px", this._el.content_container.className = "tl-timeera-content-container"));
      }
    }, {
      key: "setClass",
      value: function setClass(t) {
        this._el.container.className = t;
      }
    }, {
      key: "setRowPosition",
      value: function setRowPosition(t, e) {
        this.setPosition({
          top: t
        }), e < 56 && S(this._el.content_container, "tl-timeera-content-container-small");
      }
    }, {
      key: "setColor",
      value: function setColor(t) {
        this._el.container.className = "tl-timeera tl-timeera-color" + t;
      }
    }, {
      key: "_initLayout",
      value: function _initLayout() {
        this._el.container = T("div", "tl-timeera"), this.end_date && (this.has_end_date = !0, this._el.container.className = "tl-timeera tl-timeera-with-end"), this._el.content_container = T("div", "tl-timeera-content-container", this._el.container), this._el.background = T("div", "tl-timeera-background", this._el.content_container), this._el.content = T("div", "tl-timeera-content", this._el.content_container), this._el.text = T("div", "tl-timeera-text", this._el.content), this._text = T("h2", "tl-headline", this._el.text), this.headline && "" != this.headline && (this._text.innerHTML = Z(this.headline)), this.onLoaded();
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {}
    }, {
      key: "_updateDisplay",
      value: function _updateDisplay(t, e, i) {
        t && (this.options.width = t), e && (this.options.height = e);
      }
    }]);

    return he;
  }();

  F(he, ht, dt);

  var ce = /*#__PURE__*/function () {
    function ce(t, e, i) {
      _classCallCheck(this, ce);

      i && this.setLanguage(i), this._el = {
        container: {},
        content_container: {},
        major: {},
        minor: {}
      }, this._text = {}, this._state = {
        loaded: !1
      }, this.data = {}, this.options = {
        duration: 1e3,
        ease: at,
        width: 600,
        height: 600
      }, this.active = !1, this.animator = {}, this.axis_helper = {}, this.minor_ticks = [], this.major_ticks = [], this._el.container = "object" == _typeof(t) ? t : x(t), C(this.options, e), this._initLayout(), this._initEvents();
    }

    _createClass(ce, [{
      key: "show",
      value: function show() {}
    }, {
      key: "hide",
      value: function hide() {}
    }, {
      key: "addTo",
      value: function addTo(t) {
        t.appendChild(this._el.container);
      }
    }, {
      key: "removeFrom",
      value: function removeFrom(t) {
        t.removeChild(this._el.container);
      }
    }, {
      key: "updateDisplay",
      value: function updateDisplay(t, e) {
        this._updateDisplay(t, e);
      }
    }, {
      key: "getLeft",
      value: function getLeft() {
        return this._el.container.style.left.slice(0, -2);
      }
    }, {
      key: "drawTicks",
      value: function drawTicks(t, e) {
        var i = t.getTicks();
        this._el.major.className = "tl-timeaxis-major", this._el.minor.className = "tl-timeaxis-minor", this._el.major.style.opacity = 0, this._el.minor.style.opacity = 0, this.major_ticks = this._createTickElements(i.major.ticks, this._el.major, t.getAxisTickDateFormat(i.major.name)), this.minor_ticks = this._createTickElements(i.minor.ticks, this._el.minor, t.getAxisTickDateFormat(i.minor.name), i.major.ticks), this.positionTicks(t, e, !0), this._el.major.className = "tl-timeaxis-major tl-animate-opacity tl-timeaxis-animate-opacity", this._el.minor.className = "tl-timeaxis-minor tl-animate-opacity tl-timeaxis-animate-opacity", this._el.major.style.opacity = 1, this._el.minor.style.opacity = 1;
      }
    }, {
      key: "_createTickElements",
      value: function _createTickElements(t, e, i, n) {
        e.innerHTML = "";
        var r = {};
        if (r[new Date(-1, 13, -30).getTime()] = !0, n) for (var a = 0; a < n.length; a++) {
          r[n[a].getTime()] = !0;
        }
        var o = [];

        for (a = 0; a < t.length; a++) {
          var s = t[a];

          if (!(s.getTime() in r)) {
            var l = T("div", "tl-timeaxis-tick", e),
                h = T("span", "tl-timeaxis-tick-text tl-animate-opacity", l);

            var _t7 = s.getDisplayDate(this.getLanguage(), i);

            h.innerHTML = _t7, o.push({
              tick: l,
              tick_text: h,
              display_date: _t7,
              date: s
            });
          }
        }

        return o;
      }
    }, {
      key: "positionTicks",
      value: function positionTicks(t, e, i) {
        i ? (this._el.major.className = "tl-timeaxis-major", this._el.minor.className = "tl-timeaxis-minor") : (this._el.major.className = "tl-timeaxis-major tl-timeaxis-animate", this._el.minor.className = "tl-timeaxis-minor tl-timeaxis-animate"), this._positionTickArray(this.major_ticks, t, e), this._positionTickArray(this.minor_ticks, t, e);
      }
    }, {
      key: "_positionTickArray",
      value: function _positionTickArray(t, e, i) {
        if (t[1] && t[0]) {
          var n = 1;
          e.getPosition(t[1].date.getMillisecond()) - e.getPosition(t[0].date.getMillisecond()) < i && (n = Math.round(i / e.getPixelsPerTick()));

          for (var r = 1, a = 0; a < t.length; a++) {
            var o = t[a];
            o.tick.style.left = e.getPosition(o.date.getMillisecond()) + "px", o.tick_text.innerHTML = o.display_date, n > 1 ? r >= n ? (r = 1, o.tick_text.style.opacity = 1, o.tick.className = "tl-timeaxis-tick") : (r++, o.tick_text.style.opacity = 0, o.tick.className = "tl-timeaxis-tick tl-timeaxis-tick-hidden") : (o.tick_text.style.opacity = 1, o.tick.className = "tl-timeaxis-tick");
          }
        }
      }
    }, {
      key: "_initLayout",
      value: function _initLayout() {
        this._el.content_container = T("div", "tl-timeaxis-content-container", this._el.container), this._el.major = T("div", "tl-timeaxis-major", this._el.content_container), this._el.minor = T("div", "tl-timeaxis-minor", this._el.content_container), this.onLoaded();
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {}
    }, {
      key: "_updateDisplay",
      value: function _updateDisplay(t, e, i) {
        t && (this.options.width = t), e && (this.options.height = e);
      }
    }]);

    return ce;
  }();

  F(ce, ht, dt, zt);

  var ue = /*#__PURE__*/function () {
    function ue(t, e, i) {
      _classCallCheck(this, ue);

      this._el = {
        container: {},
        content_container: {},
        content: {},
        headline: {},
        date: {}
      }, this.options = {
        title: !1
      }, this.data = {
        unique_id: "",
        headline: "headline",
        text: "text"
      }, function (t, e) {
        t.data = N({}, t.data, e), "" === t.data.unique_id && (t.data.unique_id = B(6));
      }(this, t), C(this.options, e), this._el.container = T("div", "tl-text"), this._el.container.id = this.data.unique_id, this._initLayout(), i && i.appendChild(this._el.container);
    }

    _createClass(ue, [{
      key: "show",
      value: function show() {}
    }, {
      key: "hide",
      value: function hide() {}
    }, {
      key: "addTo",
      value: function addTo(t) {
        t.appendChild(this._el.container);
      }
    }, {
      key: "removeFrom",
      value: function removeFrom(t) {
        t.removeChild(this._el.container);
      }
    }, {
      key: "headlineHeight",
      value: function headlineHeight() {
        return this._el.headline.offsetHeight + 40;
      }
    }, {
      key: "addDateText",
      value: function addDateText(t) {
        this._el.date.innerHTML = t;
      }
    }, {
      key: "onLoaded",
      value: function onLoaded() {
        this.fire("loaded", this.data);
      }
    }, {
      key: "onAdd",
      value: function onAdd() {
        this.fire("added", this.data);
      }
    }, {
      key: "onRemove",
      value: function onRemove() {
        this.fire("removed", this.data);
      }
    }, {
      key: "_initLayout",
      value: function _initLayout() {
        if (this._el.content_container = T("div", "tl-text-content-container", this._el.container), this._el.date = T("h3", "tl-headline-date", this._el.content_container), "" != this.data.headline) {
          var t = "tl-headline";
          this.options.title && (t = "tl-headline tl-headline-title"), this._el.headline = T("h2", t, this._el.content_container), this._el.headline.innerHTML = this.data.headline;
        }

        if ("" != this.data.text) {
          var e = "";
          e += (i = 1 == this.options.autolink ? Y(this.data.text) : this.data.text).match(/<p>[\s\S]*?<\/p>/) ? i : "<p>" + i + "</p>", this._el.content = T("div", "tl-text-content", this._el.content_container), this._el.content.innerHTML = e;
        }

        var i;
        this.onLoaded();
      }
    }]);

    return ue;
  }();

  F(ue, ht);

  var de = /*#__PURE__*/function () {
    function de(t, e, i) {
      _classCallCheck(this, de);

      i && this.setLanguage(i), this._el = {
        container: {},
        content_container: {},
        content: {},
        content_item: {},
        content_link: {},
        caption: null,
        credit: null,
        parent: {},
        link: null
      }, this.player = null, this.timer = null, this.load_timer = null, this.message = null, this.media_id = null, this._state = {
        loaded: !1,
        show_meta: !1,
        media_loaded: !1
      }, this.data = {
        unique_id: null,
        url: null,
        credit: null,
        caption: null,
        credit_alternate: null,
        caption_alternate: null,
        link: null,
        link_target: null
      }, this.options = {
        api_key_flickr: "bd3a7c45ddd52f3101825d41563a6125",
        api_key_googlemaps: "AIzaSyB9dW8e_iRrATFa8g24qB6BDBGdkrLDZYI",
        api_key_embedly: "",
        credit_height: 0,
        caption_height: 0,
        background: 0
      }, this.animator = {}, C(this.options, e), C(this.data, t), this.options.background || (this._el.container = T("div", "tl-media"), this.data.unique_id && (this._el.container.id = this.data.unique_id), this._initLayout());
    }

    _createClass(de, [{
      key: "loadMedia",
      value: function loadMedia() {
        var t = this;
        if (!this._state.loaded) try {
          this.load_timer = setTimeout(function () {
            t.loadingMessage(), t._loadMedia(), t._updateDisplay();
          }, 1200);
        } catch (t) {
          trace("Error loading media for ", this._media), trace(t);
        }
      }
    }, {
      key: "_updateMessage",
      value: function _updateMessage(t) {
        this.message && this.message.updateMessage(t);
      }
    }, {
      key: "loadingMessage",
      value: function loadingMessage() {
        this._updateMessage(this._("loading") + " " + this.options.media_name);
      }
    }, {
      key: "errorMessage",
      value: function errorMessage(t) {
        t = t ? this._("error") + ": " + t : this._("error"), this._updateMessage(t);
      }
    }, {
      key: "updateMediaDisplay",
      value: function updateMediaDisplay(t) {
        this._state.loaded && !this.options.background && (this._el.content_item.style.maxHeight = c ? this.options.height / 2 + "px" : this.options.height - this.options.credit_height - this.options.caption_height - 30 + "px", this._el.container.style.maxWidth = this.options.width + "px", p && (this._el.content_item.offsetWidth, this._el.content_item.offsetHeight), this._updateMediaDisplay(t), this._state.media_loaded && (this._el.credit && (this._el.credit.style.width = this._el.content_item.offsetWidth + "px"), this._el.caption && (this._el.caption.style.width = this._el.content_item.offsetWidth + "px")));
      }
    }, {
      key: "_loadMedia",
      value: function _loadMedia() {
        this.onLoaded();
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay(t) {
        p && (this._el.content_item.style.maxWidth = this.options.width + "px", this._el.content_item.style.width = "auto");
      }
    }, {
      key: "_getMeta",
      value: function _getMeta() {}
    }, {
      key: "_getImageURL",
      value: function _getImageURL(t, e) {
        return "";
      }
    }, {
      key: "show",
      value: function show() {}
    }, {
      key: "hide",
      value: function hide() {}
    }, {
      key: "addTo",
      value: function addTo(t) {
        t.appendChild(this._el.container), this.onAdd();
      }
    }, {
      key: "removeFrom",
      value: function removeFrom(t) {
        t.removeChild(this._el.container), this.onRemove();
      }
    }, {
      key: "getImageURL",
      value: function getImageURL(t, e) {
        return this._getImageURL(t, e);
      }
    }, {
      key: "updateDisplay",
      value: function updateDisplay(t, e, i) {
        this._updateDisplay(t, e, i);
      }
    }, {
      key: "stopMedia",
      value: function stopMedia() {
        this._stopMedia();
      }
    }, {
      key: "loadErrorDisplay",
      value: function loadErrorDisplay(t) {
        try {
          this._el.content.removeChild(this._el.content_item);
        } catch (t) {}

        this._el.content_item = T("div", "tl-media-item tl-media-loaderror", this._el.content), this._el.content_item.innerHTML = "<div class='tl-icon-" + this.options.media_type + "'></div><p>" + t + "</p>", this.onLoaded(!0);
      }
    }, {
      key: "onLoaded",
      value: function onLoaded(t) {
        this._state.loaded = !0, this.fire("loaded", this.data), this.message && this.message.hide(), t || this.options.background || this.showMeta(), this.updateDisplay();
      }
    }, {
      key: "onMediaLoaded",
      value: function onMediaLoaded(t) {
        this._state.media_loaded = !0, this.fire("media_loaded", this.data), this._el.credit && (this._el.credit.style.width = this._el.content_item.offsetWidth + "px"), this._el.caption && (this._el.caption.style.width = this._el.content_item.offsetWidth + "px");
      }
    }, {
      key: "showMeta",
      value: function showMeta(t, e) {
        this._state.show_meta = !0, this.data.credit && "" != this.data.credit && (this._el.credit = T("div", "tl-credit", this._el.content_container), this._el.credit.innerHTML = 1 == this.options.autolink ? Y(this.data.credit) : this.data.credit, this.options.credit_height = this._el.credit.offsetHeight), this.data.caption && "" != this.data.caption && (this._el.caption = T("div", "tl-caption", this._el.content_container), this._el.caption.innerHTML = 1 == this.options.autolink ? Y(this.data.caption) : this.data.caption, this.options.caption_height = this._el.caption.offsetHeight), this.data.caption && this.data.credit || this.getMeta();
      }
    }, {
      key: "getMeta",
      value: function getMeta() {
        this._getMeta();
      }
    }, {
      key: "updateMeta",
      value: function updateMeta() {
        !this.data.credit && this.data.credit_alternate && (this._el.credit = T("div", "tl-credit", this._el.content_container), this._el.credit.innerHTML = this.data.credit_alternate, this.options.credit_height = this._el.credit.offsetHeight), !this.data.caption && this.data.caption_alternate && (this._el.caption = T("div", "tl-caption", this._el.content_container), this._el.caption.innerHTML = this.data.caption_alternate, this.options.caption_height = this._el.caption.offsetHeight), this.updateDisplay();
      }
    }, {
      key: "onAdd",
      value: function onAdd() {
        this.fire("added", this.data);
      }
    }, {
      key: "onRemove",
      value: function onRemove() {
        this.fire("removed", this.data);
      }
    }, {
      key: "_initLayout",
      value: function _initLayout() {
        this.message = new Rt(this._el.container, this.options, this.getLanguage()), this._el.content_container = T("div", "tl-media-content-container", this._el.container), this.data.link && "" != this.data.link ? (this._el.link = T("a", "tl-media-link", this._el.content_container), this._el.link.href = this.data.link, this.data.link_target && "" != this.data.link_target ? this._el.link.target = this.data.link_target : this._el.link.target = "_blank", "_blank" == this._el.link.target && this._el.link.setAttribute("rel", "noopener"), this._el.content = T("div", "tl-media-content", this._el.link)) : this._el.content = T("div", "tl-media-content", this._el.content_container);
      }
    }, {
      key: "_updateDisplay",
      value: function _updateDisplay(t, e, i) {
        t && (this.options.width = t), e && (this.options.height = e), i && (this.options.layout = i), this._el.credit && (this.options.credit_height = this._el.credit.offsetHeight), this._el.caption && (this.options.caption_height = this._el.caption.offsetHeight + 5), this.updateMediaDisplay(this.options.layout);
      }
    }, {
      key: "domCreate",
      value: function domCreate() {
        return T.apply(void 0, arguments);
      }
    }, {
      key: "_stopMedia",
      value: function _stopMedia() {}
    }]);

    return de;
  }();

  F(de, ht, zt);

  var fe = /*#__PURE__*/function (_de) {
    _inherits(fe, _de);

    var _super2 = _createSuper(fe);

    function fe() {
      _classCallCheck(this, fe);

      return _super2.apply(this, arguments);
    }

    _createClass(fe, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        this.loadingMessage(), this.options.background || this.createMedia(), this.onLoaded();
      }
    }, {
      key: "createMedia",
      value: function createMedia() {
        var t = this,
            e = "tl-media-item tl-media-image tl-media-shadow";
        (this.data.url.match(/.png(\?.*)?$/) || this.data.url.match(/.svg(\?.*)?$/)) && (e = "tl-media-item tl-media-image"), this.data.link ? (this._el.content_link = this.domCreate("a", "", this._el.content), this._el.content_link.href = this.data.link, this._el.content_link.target = "_blank", this._el.content_link.setAttribute("rel", "noopener"), this._el.content_item = this.domCreate("img", e, this._el.content_link)) : this._el.content_item = this.domCreate("img", e, this._el.content), this.data.alt ? this._el.content_item.alt = this.data.alt : this.data.caption && (this._el.content_item.alt = G(this.data.caption)), this.data.title ? this._el.content_item.title = this.data.title : this.data.caption && (this._el.content_item.title = G(this.data.caption)), this._el.content_item.addEventListener("load", function (e) {
          t.onMediaLoaded();
        }), this._el.content_item.src = this.getImageURL();
      }
    }, {
      key: "getImageURL",
      value: function getImageURL(t, e) {
        return V(this.data.url);
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay(t) {
        p && (this._el.content_item.style.width = "auto");
      }
    }]);

    return fe;
  }(de);

  function pe(t, e, i, n) {
    me.js(t, e, i, n);
  }

  function _e(t, e, i, n) {
    me.css(t, e, i, n);
  }

  var me = new ( /*#__PURE__*/function () {
    function _class(t) {
      _classCallCheck(this, _class);

      this.doc = t, this.pending = {}, this.queue = {
        css: [],
        js: []
      }, this.styleSheets = t.styleSheets, this.env = this.getEnv(), this.head = this.doc.head || this.doc.getElementsByTagName("head")[0], this.pollCount = 0;
    }

    _createClass(_class, [{
      key: "createNode",
      value: function createNode(t, e) {
        var i,
            n = this.doc.createElement(t);

        for (i in e) {
          e.hasOwnProperty(i) && n.setAttribute(i, e[i]);
        }

        return n;
      }
    }, {
      key: "finish",
      value: function finish(t) {
        var e,
            i,
            n = this.pending[t];
        n && (e = n.callback, (i = n.urls).shift(), this.pollCount = 0, i.length || (e && e.call(n.context, n.obj), this.pending[t] = null, this.queue[t].length && this.load(t)));
      }
    }, {
      key: "getEnv",
      value: function getEnv() {
        var t = navigator.userAgent,
            e = {
          async: !0 === this.doc.createElement("script").async
        };
        return (e.webkit = /AppleWebKit\//.test(t)) || (e.ie = /MSIE/.test(t)) || (e.opera = /Opera/.test(t)) || (e.gecko = /Gecko\//.test(t)) || (e.unknown = !0), e;
      }
    }, {
      key: "load",
      value: function load(t, e, i, n, r) {
        var a,
            o,
            s,
            l,
            h,
            c,
            u = function () {
          this.finish(t);
        }.bind(this),
            d = "css" === t,
            f = [];

        if (e) if (e = "string" == typeof e ? [e] : e.concat(), d || this.env.async || this.env.gecko || this.env.opera) this.queue[t].push({
          urls: e,
          callback: i,
          obj: n,
          context: r
        });else for (a = 0, o = e.length; a < o; ++a) {
          this.queue[t].push({
            urls: [e[a]],
            callback: a === o - 1 ? i : null,
            obj: n,
            context: r
          });
        }

        if (!this.pending[t] && (l = this.pending[t] = this.queue[t].shift())) {
          for (a = 0, o = (h = l.urls).length; a < o; ++a) {
            c = h[a], d ? s = this.env.gecko ? this.createNode("style") : this.createNode("link", {
              href: c,
              rel: "stylesheet"
            }) : (s = this.createNode("script", {
              src: c
            })).async = !1, s.className = "lazyload", s.setAttribute("charset", "utf-8"), this.env.ie && !d ? s.onreadystatechange = function () {
              /loaded|complete/.test(s.readyState) && (s.onreadystatechange = null, u());
            } : d && (this.env.gecko || this.env.webkit) ? this.env.webkit ? (l.urls[a] = s.href, this.pollWebKit()) : (s.innerHTML = '@import "' + c + '";', this.pollGecko(s)) : s.onload = s.onerror = u, f.push(s);
          }

          for (a = 0, o = f.length; a < o; ++a) {
            this.head.appendChild(f[a]);
          }
        }
      }
    }, {
      key: "pollGecko",
      value: function pollGecko(t) {
        var e;

        try {
          e = !!t.sheet.cssRules;
        } catch (n) {
          if (this.pollCount += 1, this.pollCount < 200) {
            var i = this;
            setTimeout(function () {
              i.pollGecko(t);
            }, 50);
          } else e && this.finish("css");

          return;
        }

        this.finish("css");
      }
    }, {
      key: "pollWebKit",
      value: function pollWebKit() {
        var t,
            e = this.pending.css;

        if (e) {
          for (t = this.styleSheets.length; --t >= 0;) {
            if (this.styleSheets[t].href === e.urls[0]) {
              this.finish("css");
              break;
            }
          }

          this.pollCount += 1, e && (this.pollCount < 200 ? setTimeout(this.pollWebKit.bind(this), 50) : this.finish("css"));
        }
      }
    }, {
      key: "css",
      value: function css(t, e, i, n) {
        this.load("css", t, e, i, n);
      }
    }, {
      key: "js",
      value: function js(t, e, i, n) {
        this.load("js", t, e, i, n);
      }
    }]);

    return _class;
  }())(document);

  var ge = /*#__PURE__*/function (_de2) {
    _inherits(ge, _de2);

    var _super3 = _createSuper(ge);

    function ge() {
      _classCallCheck(this, ge);

      return _super3.apply(this, arguments);
    }

    _createClass(ge, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        var t,
            e = this;
        this.youtube_loaded = !1, this._el.content_item = this.domCreate("div", "tl-media-item tl-media-youtube tl-media-shadow", this._el.content), this._el.content_item.id = B(7), t = function (t) {
          var e,
              i,
              n,
              r = [];
          (e = t.toString()).match("&#038;") ? e = e.replace("&#038;", "&") : e.match("&#38;") ? e = e.replace("&#38;", "&") : e.match("&amp;") && (e = e.replace("&amp;", "&")), n = e.slice(e.indexOf("?") + 1).split("&");

          for (var a = 0; a < n.length; a++) {
            i = n[a].split("="), r.push(i[0]), r[i[0]] = i[1];
          }

          return r;
        }(this.data.url), this.media_id = {}, this.data.url.match("v=") ? this.media_id.id = t.v : this.data.url.match("/embed/") ? this.media_id.id = this.data.url.split("embed/")[1].split(/[?&]/)[0] : this.data.url.match(/v\/|v=|youtu\.be\//) ? this.media_id.id = this.data.url.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0] : O("YOUTUBE IN URL BUT NOT A VALID VIDEO"), this.data.url.match("start=") ? this.media_id.start = et(this.data.url.split("start=")[1]) : this.data.url.match("t=") && (this.media_id.start = et(this.data.url.split("t=")[1])), this.data.url.match("end=") && (this.media_id.end = et(this.data.url.split("end=")[1])), this.media_id.hd = Boolean(void 0 !== t.hd), pe("https://www.youtube.com/iframe_api", function () {
          e.createMedia();
        });
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay() {
        this._el.content_item.style.height = X({
          w: this.options.width
        }) + "px", this._el.content_item.style.width = this.options.width + "px";
      }
    }, {
      key: "_stopMedia",
      value: function _stopMedia() {
        if (this.youtube_loaded) try {
          this.player.getPlayerState() == YT.PlayerState.PLAYING && this.player.pauseVideo();
        } catch (t) {
          O(t);
        }
      }
    }, {
      key: "createMedia",
      value: function createMedia() {
        var t = this;
        clearTimeout(this.timer), "undefined" != typeof YT && void 0 !== YT.Player ? this.player = new YT.Player(this._el.content_item.id, {
          playerVars: {
            enablejsapi: 1,
            color: "white",
            controls: 1,
            start: this.media_id.start,
            end: this.media_id.end,
            fs: 1
          },
          videoId: this.media_id.id,
          events: {
            onReady: function onReady() {
              t.onPlayerReady(), t.onLoaded();
            },
            onStateChange: t.onStateChange
          }
        }) : this.timer = setTimeout(function () {
          t.createMedia();
        }, 1e3);
      }
    }, {
      key: "onPlayerReady",
      value: function onPlayerReady(t) {
        this.youtube_loaded = !0, this._el.content_item = document.getElementById(this._el.content_item.id), this.onMediaLoaded();
      }
    }, {
      key: "onStateChange",
      value: function onStateChange(t) {
        t.data == YT.PlayerState.ENDED && (t.target.seekTo(0), t.target.pauseVideo());
      }
    }]);

    return ge;
  }(de);

  var ve = /*#__PURE__*/function (_de3) {
    _inherits(ve, _de3);

    var _super4 = _createSuper(ve);

    function ve() {
      _classCallCheck(this, ve);

      return _super4.apply(this, arguments);
    }

    _createClass(ve, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        this._el.content_item = this.domCreate("div", "tl-media-item tl-media-map tl-media-shadow", this._el.content), this.media_id = this.data.url, this.mapframe = this.domCreate("iframe", "", this._el.content_item), this.mapframe.width = "100%", this.mapframe.height = "100%", this.mapframe.frameBorder = "0", this.mapframe.src = this.makeGoogleMapsEmbedURL(this.media_id, this.options.api_key_googlemaps), this.onLoaded();
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay() {
        if (this._state.loaded) {
          var t = J({
            w: this._el.content_item.offsetWidth
          });
          this._el.content_item.style.height = t.h + "px";
        }
      }
    }, {
      key: "makeGoogleMapsEmbedURL",
      value: function makeGoogleMapsEmbedURL(t, e) {
        var i = !1;
        var n = {
          view: ["center"],
          place: ["q", "center"],
          directions: ["origin", "destination", "center"],
          search: ["q", "center"],
          streetview: ["fov", "heading", "pitch"]
        },
            r = /(https:\/\/.+google.+?\/maps)/,
            a = /@([-\d.]+),([-\d.]+)/,
            o = /([\w\W]+)/,
            s = /,((?:[-\d.]+[zmayht],?)*)/,
            l = {
          view: new RegExp(r.source + "/" + a.source + s.source),
          place: new RegExp(r.source + "/place/" + o.source + "/" + a.source + s.source),
          directions: new RegExp(r.source + "/dir/" + o.source + "/" + o.source + "/" + a.source + s.source),
          search: new RegExp(r.source + "/search/" + o.source + "/" + a.source + s.source)
        };
        return function (t) {
          function r(e, r) {
            if ("z" == e.slice(-1)) r.zoom = e;else if ("m" == e.slice(-1)) r.zoom = 14, r.maptype = "satellite";else if ("t" == e.slice(-1)) {
              if (i = !0, "place" == a) var o = t.match(l.place)[3] + "," + t.match(l.place)[4];else {
                o = r.center;
                delete r.center;
              }
              (r = {}).location = o, streetview_params = e.split(",");

              for (var _t8 in n.streetview) {
                var s = parseInt(_t8) + 1;
                "pitch" == n.streetview[_t8] && "90t" == streetview_params[s] ? r[n.streetview[_t8]] = 0 : r[n.streetview[_t8]] = streetview_params[s].slice(0, -1);
              }
            }
            return r;
          }

          var a = "view";
          return t.match(l.place) ? a = "place" : t.match(l.directions) ? a = "directions" : t.match(l.search) && (a = "search"), function (t, a) {
            var o = {},
                s = a[1],
                l = a[a.length - 1];

            for (var _e6 in n[t]) {
              var h = parseInt(_e6) + 2;
              "center" == n[t][_e6] ? o[n[t][_e6]] = a[h] + "," + a[++h] : o[n[t][_e6]] = a[h];
            }

            return (o = r(l, o)).key = e, 1 == i && (t = "streetview"), s + "/embed/v1/" + t + function (t) {
              var e = [];

              for (var i in t) {
                t.hasOwnProperty(i) && e.push(i + "=" + t[i]);
              }

              return "?" + e.join("&");
            }(o);
          }(a, t.match(l[a]));
        }(t);
      }
    }]);

    return ve;
  }(de);

  var ye = /*#__PURE__*/function (_de4) {
    _inherits(ye, _de4);

    var _super5 = _createSuper(ye);

    function ye(t, e, i) {
      var _this3;

      _classCallCheck(this, ye);

      _this3 = _super5.call(this, t, e, i), _this3.blockquote = Wt.a.sanitize(_this3.data.url);
      return _this3;
    }

    _createClass(ye, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        this._el.content_item = this.domCreate("div", "tl-media-item tl-media-blockquote", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this._el.content_item.innerHTML = this.blockquote, this.onLoaded();
      }
    }, {
      key: "updateMediaDisplay",
      value: function updateMediaDisplay() {}
    }]);

    return ye;
  }(de);

  var be = /*#__PURE__*/function (_de5) {
    _inherits(be, _de5);

    var _super6 = _createSuper(be);

    function be() {
      _classCallCheck(this, be);

      return _super6.apply(this, arguments);
    }

    _createClass(be, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        var t,
            e = this;
        this._el.content_item = this.domCreate("div", "tl-media-item tl-media-wikipedia", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this.media_id = this.data.url.split("wiki/")[1].split("#")[0].replace("_", " "), this.media_id = this.media_id.replace(" ", "%20"), t = "https://" + this.data.url.split("//")[1].split(".wikipedia")[0] + ".wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&redirects=&titles=" + this.media_id + "&exintro=1&format=json&callback=?", vt({
          type: "GET",
          url: t,
          dataType: "json",
          success: function success(t) {
            e.createMedia(t);
          },
          error: function error(t, i) {
            var n = "";
            n += e._("wikipedia_load_err") + "<br/>" + e.media_id + "<br/>" + i, e.loadErrorDisplay(n);
          }
        });
      }
    }, {
      key: "createMedia",
      value: function createMedia(t) {
        var e = "";

        if (t.query) {
          var i = "";
          (e = {
            entry: {},
            title: "",
            text: "",
            extract: "",
            paragraphs: 1,
            page_image: "",
            text_array: []
          }).entry = function (t, e) {
            if (void 0 !== t) {
              var i = 0;

              for (var n in t) {
                if (e === i) return t[n];
                i++;
              }

              return "";
            }

            return "";
          }(t.query.pages, 0), e.extract = e.entry.extract, e.title = e.entry.title, e.page_image = e.entry.thumbnail, e.extract.match("<p>") ? e.text_array = e.extract.split("<p>") : e.text_array.push(e.extract);

          for (var n = 0; n < e.text_array.length; n++) {
            n + 1 <= e.paragraphs && n + 1 < e.text_array.length && (e.text += "<p>" + e.text_array[n + 1]);
          }

          i += "<span class='tl-icon-wikipedia'></span>", i += "<div class='tl-wikipedia-title'><h4><a href='" + this.data.url + "' target='_blank' rel='noopener'>" + e.title + "</a></h4>", i += "<span class='tl-wikipedia-source'>" + this._("wikipedia") + "</span></div>", e.page_image, i += e.text, e.extract.match("REDIRECT") || (this._el.content_item.innerHTML = i, this.onLoaded());
        }
      }
    }, {
      key: "updateMediaDisplay",
      value: function updateMediaDisplay() {}
    }]);

    return be;
  }(de);

  var we = /*#__PURE__*/function (_de6) {
    _inherits(we, _de6);

    var _super7 = _createSuper(we);

    function we() {
      _classCallCheck(this, we);

      return _super7.apply(this, arguments);
    }

    _createClass(we, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        var t,
            e = this;
        this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-soundcloud tl-media-shadow", this._el.content), this.media_id = this.data.url, t = "https://soundcloud.com/oembed?url=" + this.media_id + "&format=js&callback=?", gt(t, function (t) {
          pe("https://w.soundcloud.com/player/api.js", function () {
            e.createMedia(t);
          });
        });
      }
    }, {
      key: "createMedia",
      value: function createMedia(t) {
        this._el.content_item.innerHTML = t.html, self.widget = SC.Widget(this._el.content_item.querySelector("iframe")), this.soundCloudCreated = !0, this.onLoaded();
      }
    }, {
      key: "_stopMedia",
      value: function _stopMedia() {
        this.soundCloudCreated && self.widget.pause();
      }
    }]);

    return we;
  }(de);

  var xe = /*#__PURE__*/function (_de7) {
    _inherits(xe, _de7);

    var _super8 = _createSuper(xe);

    function xe() {
      _classCallCheck(this, xe);

      return _super8.apply(this, arguments);
    }

    _createClass(xe, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        var t,
            e = this;
        this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-vimeo tl-media-shadow", this._el.content), this.media_id = this.data.url.split(/video\/|\/\/vimeo\.com\//)[1].split(/[?&]/)[0];
        var i = null;
        this.data.url.match(/#t=([^&]+).*/) && (i = this.data.url.match(/#t=([^&]+).*/)[1]), t = "https://player.vimeo.com/video/" + this.media_id + "?api=1&title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff", i && (t = t += "&amp;#t=" + i), this.player = this.domCreate("iframe", "", this._el.content_item), this.player.addEventListener("load", function (t) {
          e.onMediaLoaded();
        }), this.player.width = "100%", this.player.height = "100%", this.player.frameBorder = "0", this.player.src = t, this.player.setAttribute("allowfullscreen", ""), this.player.setAttribute("webkitallowfullscreen", ""), this.player.setAttribute("mozallowfullscreen", ""), this.onLoaded();
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay() {
        this._el.content_item.style.height = X({
          w: this._el.content_item.offsetWidth
        }) + "px";
      }
    }, {
      key: "_stopMedia",
      value: function _stopMedia() {
        try {
          this.player.contentWindow.postMessage(JSON.stringify({
            method: "pause"
          }), "https://player.vimeo.com");
        } catch (t) {
          O(t);
        }
      }
    }]);

    return xe;
  }(de);

  var ke = /*#__PURE__*/function (_de8) {
    _inherits(ke, _de8);

    var _super9 = _createSuper(ke);

    function ke() {
      _classCallCheck(this, ke);

      return _super9.apply(this, arguments);
    }

    _createClass(ke, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        var t;
        this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-dailymotion", this._el.content), this.data.url.match("video") ? this.media_id = this.data.url.split("video/")[1].split(/[?&]/)[0] : this.media_id = this.data.url.split("embed/")[1].split(/[?&]/)[0], t = "https://www.dailymotion.com/embed/video/" + this.media_id + "?api=postMessage", this._el.content_item.innerHTML = "<iframe autostart='false' frameborder='0' width='100%' height='100%' src='" + t + "'></iframe>", this.onLoaded();
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay() {
        this._state.loaded && (this._el.content_item.style.height = X({
          w: this._el.content_item.offsetWidth
        }) + "px");
      }
    }, {
      key: "_stopMedia",
      value: function _stopMedia() {
        this._state.loaded && this._el.content_item.querySelector("iframe").contentWindow.postMessage('{"command":"pause","parameters":[]}', "*");
      }
    }]);

    return ke;
  }(de);

  var Te = /*#__PURE__*/function (_de9) {
    _inherits(Te, _de9);

    var _super10 = _createSuper(Te);

    function Te() {
      _classCallCheck(this, Te);

      return _super10.apply(this, arguments);
    }

    _createClass(Te, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        var t;
        this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-vine tl-media-shadow", this._el.content), this.media_id = this.data.url.split("vine.co/v/")[1], t = "https://vine.co/v/" + this.media_id + "/embed/simple", this._el.content_item.innerHTML = "<iframe frameborder='0' width='100%' height='100%' src='" + t + "'></iframe><script async src='https://platform.vine.co/static/scripts/embed.js' charset='utf-8'><\/script>", this.onLoaded();
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay() {
        var t = J({
          w: this._el.content_item.offsetWidth,
          h: this.options.height
        });
        this._el.content_item.style.height = t.h + "px";
      }
    }, {
      key: "_stopMedia",
      value: function _stopMedia() {
        this._el.content_item.querySelector("iframe").contentWindow.postMessage("pause", "*");
      }
    }]);

    return Te;
  }(de);

  var Me = /*#__PURE__*/function (_de10) {
    _inherits(Me, _de10);

    var _super11 = _createSuper(Me);

    function Me() {
      _classCallCheck(this, Me);

      return _super11.apply(this, arguments);
    }

    _createClass(Me, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        var t,
            e = this;
        if (this._el.content_item = this.domCreate("div", "tl-media-twitter", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this.data.url.match("^(https?:)?/*(www.)?twitter.com")) this.data.url.match("status/") ? this.media_id = this.data.url.split("status/")[1] : this.data.url.match("statuses/") ? this.media_id = this.data.url.split("statuses/")[1] : this.media_id = "";else if (this.data.url.match("<blockquote class=['\"]twitter-tweet['\"]")) {
          var i = this.data.url.match(/(status|statuses)\/(\d+)/);
          if (!(i && i.length > 2)) return void e.loadErrorDisplay(e._("twitterembed_invalidurl_err"));
          this.media_id = i[2];
        }
        t = "https://api.twitter.com/1/statuses/oembed.json?id=" + this.media_id + "&omit_script=true&include_entities=true&callback=?", vt({
          type: "GET",
          url: t,
          dataType: "json",
          success: function success(t) {
            e.createMedia(t);
          },
          error: function error(t, i) {
            var n = "";
            n += e._("twitter_load_err") + "<br/>" + e.media_id + "<br/>" + i, e.loadErrorDisplay(n);
          }
        });
      }
    }, {
      key: "createMedia",
      value: function createMedia(t) {
        var e,
            i,
            n,
            r = "",
            a = "",
            o = "",
            s = this;
        a = t.html.split("</p>&mdash;")[0] + "</p></blockquote>", e = t.author_url.split("twitter.com/")[1], i = (o = t.html.split("</p>&mdash;")[1].split('<a href="')[1]).split('">')[0], n = o.split('">')[1].split("</a>")[0], (a = a.replace(/<a href/gi, '<a target="_blank" rel="noopener" href')).includes("pic.twitter.com") ? (pe("https://platform.twitter.com/widgets.js", function () {
          twttr.widgets.createTweet(s.media_id, s._el.content_item, {
            conversation: "none",
            linkColor: "#cc0000",
            theme: "light"
          });
        }), this.onLoaded()) : (r += a, r += "<div class='vcard'>", r += "<a href='" + i + "' class='twitter-date' rel='noopener' target='_blank'>" + n + "</a>", r += "<img src='' class='tl-media-item tl-media-image'></a>", r += "<div class='author'>", r += "<a class='screen-name url' href='" + t.author_url + "' rel='noopener' target='_blank'>", r += "<span class='avatar'></span>", r += "<span class='fn'>" + t.author_name + " <span class='tl-icon-twitter'></span></span>", r += "<span class='nickname'>@" + e + "<span class='thumbnail-inline'></span></span>", r += "</a>", r += "</div>", r += "</div>", this._el.content_item.innerHTML = r, this.onLoaded());
      }
    }, {
      key: "updateMediaDisplay",
      value: function updateMediaDisplay() {}
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay() {}
    }]);

    return Me;
  }(de);

  var Ee = /*#__PURE__*/function (_de11) {
    _inherits(Ee, _de11);

    var _super12 = _createSuper(Ee);

    function Ee() {
      _classCallCheck(this, Ee);

      return _super12.apply(this, arguments);
    }

    _createClass(Ee, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        var t,
            e = this;
        this._el.content_item = this.domCreate("div", "tl-media-twitter", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text";
        var i,
            n,
            r,
            a,
            o,
            s,
            l = this.data.url.match(/(status|statuses)\/(\d+)/);
        l && l.length > 2 ? (this.media_id = l[2], t = "https://api.twitter.com/1/statuses/oembed.json?id=" + this.media_id + "&omit_script=true&include_entities=true&callback=?", window.twttr = (i = document, n = "script", r = "twitter-wjs", o = i.getElementsByTagName(n)[0], s = window.twttr || {}, i.getElementById(r) || ((a = i.createElement(n)).id = r, a.src = "https://platform.twitter.com/widgets.js", o.parentNode.insertBefore(a, o), s._e = [], s.ready = function (t) {
          s._e.push(t);
        }), s), vt({
          type: "GET",
          url: t,
          dataType: "json",
          success: function success(t) {
            e.createMedia(t);
          },
          error: function error(t, i) {
            var n = "";
            n += e._("twitter_load_err") + "<br/>" + e.media_id + "<br/>" + i, e.loadErrorDisplay(n);
          }
        })) : e.loadErrorDisplay(e._("twitterembed_invalidurl_err"));
      }
    }, {
      key: "createMedia",
      value: function createMedia(t) {
        var e,
            i,
            n,
            r = "",
            a = "",
            o = "";
        a = t.html.split("</p>&mdash;")[0] + "</p></blockquote>", e = t.author_url.split("twitter.com/")[1], i = (o = t.html.split("</p>&mdash;")[1].split('<a href="')[1]).split('">')[0], n = o.split('">')[1].split("</a>")[0], a = a.replace(/<a href/gi, '<a target="_blank" rel="noopener" href');
        var s = this.media_id;
        a.includes("pic.twitter.com") ? (twttr.ready(function (t) {
          r = document.getElementsByClassName("tl-media-twitter")[0];
          var e = String(s);
          twttr.widgets.createTweet(e, r, {
            conversation: "none",
            linkColor: "#cc0000",
            theme: "light"
          }).then(function (t) {
            this.onLoaded();
          });
        }), this._el.content_item.innerHTML = r, this.onLoaded()) : (r += a, r += "<div class='vcard'>", r += "<a href='" + i + "' class='twitter-date' rel='noopener' target='_blank'>" + n + "</a>", r += "<div class='author'>", r += "<a class='screen-name url' href='" + t.author_url + "' rel='noopener' target='_blank'>", r += "<span class='avatar'></span>", r += "<span class='fn'>" + t.author_name + " <span class='tl-icon-twitter'></span></span>", r += "<span class='nickname'>@" + e + "<span class='thumbnail-inline'></span></span>", r += "</a>", r += "</div>", r += "</div>", this._el.content_item.innerHTML = r, this.onLoaded());
      }
    }, {
      key: "updateMediaDisplay",
      value: function updateMediaDisplay() {}
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay() {}
    }]);

    return Ee;
  }(de);

  var Le = /*#__PURE__*/function (_de12) {
    _inherits(Le, _de12);

    var _super13 = _createSuper(Le);

    function Le() {
      _classCallCheck(this, Le);

      return _super13.apply(this, arguments);
    }

    _createClass(Le, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        var t,
            e = this;

        try {
          this.establishMediaID(), t = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + this.options.api_key_flickr + "&photo_id=" + this.media_id + "&format=json&jsoncallback=?", gt(t, function (t) {
            "ok" == t.stat ? (e.sizes = t.sizes.size, e.options.background || e.createMedia(), e.onLoaded()) : e.loadErrorDisplay(e._("flickr_notfound_err"));
          });
        } catch (t) {
          e.loadErrorDisplay(e._(t.message_key));
        }
      }
    }, {
      key: "establishMediaID",
      value: function establishMediaID() {
        if (this.data.url.match(/flic.kr\/.+/i)) {
          var t = this.data.url.split("/").slice(-1)[0];
          this.media_id = K.decode(t);
        } else {
          var e = this.data.url.indexOf("flickr.com/photos/");
          if (-1 == e) throw new D("flickr_invalidurl_err");
          var i = e + "flickr.com/photos/".length;
          this.media_id = this.data.url.substr(i).split("/")[1];
        }
      }
    }, {
      key: "createMedia",
      value: function createMedia() {
        var t = this;
        this._el.content_link = this.domCreate("a", "", this._el.content), this._el.content_link.href = this.data.url, this._el.content_link.target = "_blank", this._el.content_link.setAttribute("rel", "noopener"), this._el.content_item = this.domCreate("img", "tl-media-item tl-media-image tl-media-flickr tl-media-shadow", this._el.content_link), this.data.alt ? this._el.content_item.alt = this.data.alt : this.data.caption && (this._el.content_item.alt = G(this.data.caption)), this.data.title ? this._el.content_item.title = this.data.title : this.data.caption && (this._el.content_item.title = G(this.data.caption)), this._el.content_item.addEventListener("load", function (e) {
          t.onMediaLoaded();
        }), this._el.content_item.src = this.getImageURL(this.options.width, this.options.height);
      }
    }, {
      key: "getImageURL",
      value: function getImageURL(t, e) {
        for (var i = this.size_label(e), n = this.sizes[this.sizes.length - 2].source, r = 0; r < this.sizes.length; r++) {
          this.sizes[r].label == i && (n = this.sizes[r].source);
        }

        return n;
      }
    }, {
      key: "_getMeta",
      value: function _getMeta() {
        var t,
            e = this;
        t = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + this.options.api_key_flickr + "&photo_id=" + this.media_id + "&format=json&jsoncallback=?", gt(t, function (t) {
          e.data.credit_alternate = "<a href='" + e.data.url + "' target='_blank' rel='noopener'>" + t.photo.owner.realname + "</a>", e.data.caption_alternate = t.photo.title._content + " " + t.photo.description._content, e.updateMeta();
        });
      }
    }, {
      key: "size_label",
      value: function size_label(t) {
        return t <= 75 ? t <= 0 ? "Large" : "Thumbnail" : t <= 180 ? "Small" : t <= 240 ? "Small 320" : t <= 375 ? "Medium" : t <= 480 ? "Medium 640" : "Large";
      }
    }]);

    return Le;
  }(de);

  var Se = /*#__PURE__*/function (_de13) {
    _inherits(Se, _de13);

    var _super14 = _createSuper(Se);

    function Se() {
      _classCallCheck(this, Se);

      return _super14.apply(this, arguments);
    }

    _createClass(Se, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        var t = this;
        this._el.content_item = this.domCreate("div", "tl-media-item tl-media-documentcloud tl-media-shadow", this._el.content), this._el.content_item.id = B(7), this.data.url.match(/\.html$/) ? this.data.url = this._transformURL(this.data.url) : this.data.url.match(/.(json|js)$/) || O("DOCUMENT CLOUD IN URL BUT INVALID SUFFIX"), pe(["https://assets.documentcloud.org/viewer/loader.js", "https://assets.documentcloud.org/viewer/viewer.js"], function () {
          t.createMedia();
        });
      }
    }, {
      key: "_transformURL",
      value: function _transformURL(t) {
        return t.replace(/(.*)\.html$/, "$1.js");
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay() {
        this._el.content_item.style.height = this.options.height + "px";
      }
    }, {
      key: "createMedia",
      value: function createMedia() {
        DV.load(this.data.url, {
          container: "#" + this._el.content_item.id,
          showSidebar: !1
        }), this.onLoaded();
      }
    }]);

    return Se;
  }(de);

  var De = "https://graph.facebook.com/v8.0/instagram_oembed?access_token=704270473831239|830b21071290df4f81a35c56abbea096&fields=html,thumbnail_url,author_name&url=";

  function Ae(t) {
    this.oembed_response = t, this._el.content_link = this.domCreate("a", "", this._el.content), this._el.content_link.href = this.data.url, this._el.content_link.target = "_blank", this._el.content_link.setAttribute("rel", "noopener"), this._el.content_item = this.domCreate("img", "tl-media-item tl-media-image tl-media-instagram tl-media-shadow", this._el.content_link), this.data.alt ? this._el.content_item.alt = this.data.alt : this.data.caption && (this._el.content_item.alt = G(this.data.caption)), this.data.title ? this._el.content_item.title = this.data.title : this.data.caption && (this._el.content_item.title = G(this.data.caption)), this._el.content_item.addEventListener("load", function (t) {
      this.onMediaLoaded();
    }.bind(this)), this._el.content_item.src = t.thumbnail_url, this.onLoaded();
  }

  function je(t) {
    var e = "".concat(t.statusText, " [").concat(t.status, "]");
    400 == t.status && (e = this._("instagram_bad_request")), this.loadErrorDisplay(e);
  }

  var Ce = /*#__PURE__*/function (_de14) {
    _inherits(Ce, _de14);

    var _super15 = _createSuper(Ce);

    function Ce() {
      _classCallCheck(this, Ce);

      return _super15.apply(this, arguments);
    }

    _createClass(Ce, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        this.media_id = this.data.url.split("/p/")[1].split("/")[0], this.options.background || this.createMedia();
      }
    }, {
      key: "createMedia",
      value: function createMedia() {
        this.oembed_response = null;
        var t = "".concat(De).concat(this.data.url);

        try {
          vt({
            url: t,
            dataType: "json",
            success: Ae,
            error: je,
            context: this
          });
        } catch (e) {
          console.log("Instagram: error fetching ".concat(t)), console.log(e);
        }
      }
    }, {
      key: "getImageURL",
      value: function getImageURL() {
        if (this.oembed_response && this.oembed_response.thumbnail_url) return this.oembed_response.thumbnail_url;
        yt("".concat(De).concat(this.data.url)).then(function (t) {
          return t.thumbnail_url;
        }).catch(function (t) {
          O("Instagram getImageURL Error: ".concat(t.status, " ").concat(t.statusText));
        });
      }
    }, {
      key: "_getMeta",
      value: function _getMeta() {
        this.oembed_response && this.oembed_response.author_name && (this.data.credit_alternate = "Instagram: <a href=\"https://instagram.com/".concat(this.oembed_response.author_name, "\" target=\"_blank\">@").concat(this.oembed_response.author_name, "</a>")), this.updateMeta();
      }
    }, {
      key: "sizes",
      value: function sizes(t) {
        return t <= 150 ? "t" : t <= 306 ? "m" : "l";
      }
    }]);

    return Ce;
  }(de);

  var Ne = /*#__PURE__*/function (_de15) {
    _inherits(Ne, _de15);

    var _super16 = _createSuper(Ne);

    function Ne() {
      _classCallCheck(this, Ne);

      return _super16.apply(this, arguments);
    }

    _createClass(Ne, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        this._el.content_item = this.domCreate("img", "tl-media-item tl-media-image tl-media-profile tl-media-shadow", this._el.content), this._el.content_item.src = this.data.url, this.onLoaded();
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay(t) {
        p && (this._el.content_item.style.maxWidth = this.options.width / 2 - 40 + "px");
      }
    }]);

    return Ne;
  }(de);

  var Ie = /*#__PURE__*/function (_de16) {
    _inherits(Ie, _de16);

    var _super17 = _createSuper(Ie);

    function Ie() {
      _classCallCheck(this, Ie);

      return _super17.apply(this, arguments);
    }

    _createClass(Ie, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        var t;
        if (this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe", this._el.content), this.data.url.match(/open\?id=([^&]+)/)) t = "https://drive.google.com/file/d/" + this.data.url.match(/open\?id=([^&]+)/)[1] + "/preview";else if (this.data.url.match(/file\/d\/([^/]*)\/?/)) {
          t = "https://drive.google.com/file/d/" + this.data.url.match(/file\/d\/([^/]*)\/?/)[1] + "/preview";
        } else t = this.data.url;
        this._el.content_item.innerHTML = "<iframe class='doc' frameborder='0' width='100%' height='100%' src='" + t + "'></iframe>", this.onLoaded();
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay() {
        this._el.content_item.style.height = this.options.height + "px";
      }
    }]);

    return Ie;
  }(de);

  var Oe = /*#__PURE__*/function (_de17) {
    _inherits(Oe, _de17);

    var _super18 = _createSuper(Oe);

    function Oe() {
      _classCallCheck(this, Oe);

      return _super18.apply(this, arguments);
    }

    _createClass(Oe, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        var t, e;
        this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-spotify", this._el.content), this.media_id = (e = this.data.url).match(/^spotify:/) ? e : "spotify".concat((e = new URL(e)).pathname.replace(/\/$/, "").replace(/\//g, ":")), this.media_id ? (t = "https://embed.spotify.com/?uri=" + this.media_id + "&theme=white&view=coverart", this.player = this.domCreate("iframe", "tl-media-shadow", this._el.content_item), this.player.width = "100%", this.player.height = "100%", this.player.frameBorder = "0", this.player.src = t, this.onLoaded()) : this.loadErrorDisplay(this._("spotify_invalid_url"));
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay(t) {
        var e = this.options.height,
            i = 0,
            n = 0;
        e = c ? this.options.height / 2 : this.options.height - this.options.credit_height - this.options.caption_height - 30, this._el.content_item.style.maxHeight = "none", O(e), O(this.options.width), e > this.options.width ? (O("height is greater"), i = this.options.width + 80 + "px", n = this.options.width + "px") : (O("width is greater"), O(this.options.width), i = e + "px", n = e - 80 + "px"), this.player.style.width = n, this.player.style.height = i, this._el.credit && (this._el.credit.style.width = n), this._el.caption && (this._el.caption.style.width = n);
      }
    }, {
      key: "_stopMedia",
      value: function _stopMedia() {}
    }]);

    return Oe;
  }(de);

  var ze = /*#__PURE__*/function (_de18) {
    _inherits(ze, _de18);

    var _super19 = _createSuper(ze);

    function ze(t, e, i) {
      var _this4;

      _classCallCheck(this, ze);

      _this4 = _super19.call(this, t, e, i), _this4.iframe = Wt.a.sanitize(_this4.data.url, {
        ADD_TAGS: ["iframe"],
        ADD_ATTR: ["frameborder"]
      });
      return _this4;
    }

    _createClass(ze, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe", this._el.content), this._el.content_item.innerHTML = this.iframe, this.onLoaded();
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay() {
        this._el.content_item.style.height = this.options.height + "px";
      }
    }]);

    return ze;
  }(de);

  var Re = /*#__PURE__*/function (_de19) {
    _inherits(Re, _de19);

    var _super20 = _createSuper(Re);

    function Re() {
      _classCallCheck(this, Re);

      return _super20.apply(this, arguments);
    }

    _createClass(Re, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        try {
          var t = this;

          if (this.data.url.match("<blockquote class=['\"]imgur-embed-pub['\"]")) {
            var e = this.data.url.match(/(imgur\.com)\/(\w+)/);
            this.media_id = e[2], this.data.url = "http://imgur.com/gallery/" + this.media_id;
          } else this.data.url && (this.media_id = this.data.url.split("/").slice(-1)[0]);

          pe(["https://s.imgur.com/min/embed.js"], function () {
            t.createMedia();
          });
        } catch (t) {
          this.loadErrorDisplay(this._("imgur_invalidurl_err"));
        }
      }
    }, {
      key: "createMedia",
      value: function createMedia() {
        var t = this,
            e = "https://api.imgur.com/oembed.json?url=" + this.data.url;
        this._el.content_item = this.domCreate("div", "tl-media-item tl-media-image tl-media-imgur", this._el.content), vt({
          type: "GET",
          url: e,
          dataType: "json",
          success: function success(e) {
            try {
              t._el.content_item.innerHTML = e.html, setInterval(function () {
                null == document.querySelector("blockquote.imgur-embed-pub") ? clearInterval() : (imgurEmbed.createIframe(), document.getElementById("imageElement").removeAttribute("style"), document.getElementById("image").removeAttribute("style"));
              }, 2e3);
            } catch (t) {
              O("Error processing imgur ajax response");
            }
          },
          error: function error(e, i, n) {
            "parsererror" == i ? t.loadErrorDisplay(t._("imgur_invalidurl_err")) : t.loadErrorDisplay(t._("unknown_read_err", i));
          }
        }), this.onLoaded();
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay() {
        this._el.content_item.style.width = this.options.width + "px", this._el.content_item.style.height = X({
          w: this.options.width
        }) + "px";
      }
    }]);

    return Re;
  }(de);

  var Pe = /*#__PURE__*/function (_de20) {
    _inherits(Pe, _de20);

    var _super21 = _createSuper(Pe);

    function Pe() {
      _classCallCheck(this, Pe);

      return _super21.apply(this, arguments);
    }

    _createClass(Pe, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        var t = V(this.data.url);
        this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe", this._el.content);
        var e = "";
        e = s || _ || t.match(/dl.dropboxusercontent.com/) ? "<iframe class='doc' frameborder='0' width='100%' height='100%' src='//docs.google.com/viewer?url=" + t + "&amp;embedded=true'></iframe>" : "<iframe class='doc' frameborder='0' width='100%' height='100%' src='" + t + "'></iframe>", this._el.content_item.innerHTML = e, this.onLoaded();
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay() {
        this._el.content_item.style.height = this.options.height + "px";
      }
    }]);

    return Pe;
  }(de);

  var qe = /*#__PURE__*/function (_de21) {
    _inherits(qe, _de21);

    var _super22 = _createSuper(qe);

    function qe() {
      _classCallCheck(this, qe);

      return _super22.apply(this, arguments);
    }

    _createClass(qe, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        this.loadingMessage(), this.options.background || this.createMedia(), this.onLoaded();
      }
    }, {
      key: "createMedia",
      value: function createMedia() {
        var t = this,
            e = "tl-media-item tl-media-audio tl-media-shadow";
        this.data.link ? (this._el.content_link = this.domCreate("a", "", this._el.content), this._el.content_link.href = this.data.link, this._el.content_link.target = "_blank", this._el.content_link.setAttribute("rel", "noopener"), this._el.content_item = this.domCreate("audio", e, this._el.content_link)) : this._el.content_item = this.domCreate("audio", e, this._el.content), this._el.content_item.controls = !0, this._el.source_item = this.domCreate("source", "", this._el.content_item), this._el.content_item.addEventListener("load", function (e) {
          t.onMediaLoaded();
        }), this._el.source_item.src = this.data.url, this._el.source_item.type = this._getType(this.data.url, this.data.mediatype.match_str), this._el.content_item.innerHTML += "Your browser doesn't support HTML5 audio with " + this._el.source_item.type;
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay(t) {
        p && (this._el.content_item.style.width = "auto");
      }
    }, {
      key: "_getType",
      value: function _getType(t, e) {
        var i = "audio/";

        switch (t.match(e)[1]) {
          case "mp3":
            i += "mpeg";
            break;

          case "wav":
            i += "wav";
            break;

          case "m4a":
            i += "mp4";
            break;

          default:
            i = "audio";
        }

        return i;
      }
    }]);

    return qe;
  }(de);

  var He = /*#__PURE__*/function (_de22) {
    _inherits(He, _de22);

    var _super23 = _createSuper(He);

    function He() {
      _classCallCheck(this, He);

      return _super23.apply(this, arguments);
    }

    _createClass(He, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        this.loadingMessage(), this.options.background || this.createMedia(), this.onLoaded();
      }
    }, {
      key: "createMedia",
      value: function createMedia() {
        var t = this,
            e = "tl-media-item tl-media-video tl-media-shadow";
        this.data.link ? (this._el.content_link = this.domCreate("a", "", this._el.content), this._el.content_link.href = this.data.link, this._el.content_link.target = "_blank", this._el.content_link.setAttribute("rel", "noopener"), this._el.content_item = this.domCreate("video", e, this._el.content_link)) : this._el.content_item = this.domCreate("video", e, this._el.content), this._el.content_item.controls = !0, this._el.source_item = this.domCreate("source", "", this._el.content_item), this._el.content_item.addEventListener("load", function (e) {
          t.onMediaLoaded();
        }), this._el.source_item.src = this.data.url, this._el.source_item.type = this._getType(this.data.url, this.data.mediatype.match_str), this._el.content_item.innerHTML += "Your browser doesn't support HTML5 video with " + this._el.source_item.type;
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay(t) {
        p && (this._el.content_item.style.width = "auto");
      }
    }, {
      key: "_getType",
      value: function _getType(t, e) {
        var i = "video/";

        switch (t.match(e)[1]) {
          case "mp4":
            i += "mp4";
            break;

          default:
            i = "video";
        }

        return i;
      }
    }]);

    return He;
  }(de);

  var Fe = /*#__PURE__*/function (_de23) {
    _inherits(Fe, _de23);

    var _super24 = _createSuper(Fe);

    function Fe() {
      _classCallCheck(this, Fe);

      return _super24.apply(this, arguments);
    }

    _createClass(Fe, [{
      key: "_loadMedia",
      value: function _loadMedia() {
        var t,
            e = this;
        this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-wistia tl-media-shadow", this._el.content), this.media_id = this.data.url.split(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/medias\/(.*)/)[3], O("Wistia: media_id: ".concat(this.media_id)), t = "https://fast.wistia.com/embed/iframe/" + this.media_id + "?version=v1&controlsVisibleOnLoad=true&playerColor=aae3d8", this.player = this.domCreate("iframe", "", this._el.content_item), this.player.addEventListener("load", function (t) {
          e.onMediaLoaded();
        }), this.player.width = "100%", this.player.height = "100%", this.player.frameBorder = "0", this.player.src = t, this.player.setAttribute("allowfullscreen", ""), this.player.setAttribute("webkitallowfullscreen", ""), this.player.setAttribute("mozallowfullscreen", ""), this.onLoaded();
      }
    }, {
      key: "_updateMediaDisplay",
      value: function _updateMediaDisplay() {
        this._el.content_item.style.height = X({
          w: this._el.content_item.offsetWidth
        }) + "px";
      }
    }, {
      key: "_stopMedia",
      value: function _stopMedia() {
        try {
          this.player.contentWindow.postMessage(JSON.stringify({
            method: "pause"
          }), "https://player.vimeo.com");
        } catch (t) {
          O(t);
        }
      }
    }]);

    return Fe;
  }(de);

  function $e(t, e) {
    var i = [{
      type: "youtube",
      name: "YouTube",
      match_str: "^(https?:)?/*(www.)?youtube|youtu.be",
      cls: ge
    }, {
      type: "vimeo",
      name: "Vimeo",
      match_str: "^(https?:)?/*(player.)?vimeo.com",
      cls: xe
    }, {
      type: "dailymotion",
      name: "DailyMotion",
      match_str: "^(https?:)?/*(www.)?dailymotion.com",
      cls: ke
    }, {
      type: "vine",
      name: "Vine",
      match_str: "^(https?:)?/*(www.)?vine.co",
      cls: Te
    }, {
      type: "soundcloud",
      name: "SoundCloud",
      match_str: "^(https?:)?/*(player.)?soundcloud.com",
      cls: we
    }, {
      type: "twitter",
      name: "Twitter",
      match_str: "^(https?:)?/*(www.)?twitter.com",
      cls: Me
    }, {
      type: "twitterembed",
      name: "TwitterEmbed",
      match_str: "<blockquote class=['\"]twitter-tweet['\"]",
      cls: Ee
    }, {
      type: "googlemaps",
      name: "Google Map",
      match_str: /google.+?\/maps\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/search\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/place\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/dir\/([\w\W]+)\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)/,
      cls: ve
    }, {
      type: "flickr",
      name: "Flickr",
      match_str: "^(https?:)?/*(www.)?flickr.com/photos",
      cls: Le
    }, {
      type: "flickr",
      name: "Flickr",
      match_str: "^(https?://)?flic.kr/.*",
      cls: Le
    }, {
      type: "instagram",
      name: "Instagram",
      match_str: /^(https?:)?\/*(www.)?(instagr.am|^(https?:)?\/*(www.)?instagram.com)\/p\//,
      cls: Ce
    }, {
      type: "profile",
      name: "Profile",
      match_str: /^(https?:)?\/*(www.)?instagr.am\/[a-zA-Z0-9]{2,}|^(https?:)?\/*(www.)?instagram.com\/[a-zA-Z0-9]{2,}/,
      cls: Ne
    }, {
      type: "documentcloud",
      name: "Document Cloud",
      match_str: /documentcloud.org\//,
      cls: Se
    }, {
      type: "image",
      name: "Image",
      match_str: /(jpg|jpeg|png|gif|svg|webp)(\?.*)?$/i,
      cls: fe
    }, {
      type: "imgur",
      name: "Imgur",
      match_str: /^.*imgur.com\/.+$|<blockquote class=['\"]imgur-embed-pub['\"]/i,
      cls: Re
    }, {
      type: "googledocs",
      name: "Google Doc",
      match_str: "^(https?:)?/*[^.]*.google.com/[^/]*/d/[^/]*/[^/]*?usp=sharing|^(https?:)?/*drive.google.com/open?id=[^&]*&authuser=0|^(https?:)?//*drive.google.com/open\\?id=[^&]*|^(https?:)?/*[^.]*.googledrive.com/host/[^/]*/",
      cls: Ie
    }, {
      type: "pdf",
      name: "PDF",
      match_str: /^.*\.pdf(\?.*)?(\#.*)?/,
      cls: Pe
    }, {
      type: "wikipedia",
      name: "Wikipedia",
      match_str: "^(https?:)?/*(www.)?wikipedia.org|^(https?:)?/*([a-z][a-z].)?wikipedia.org",
      cls: be
    }, {
      type: "spotify",
      name: "spotify",
      match_str: "spotify",
      cls: Oe
    }, {
      type: "iframe",
      name: "iFrame",
      match_str: "iframe",
      cls: ze
    }, {
      type: "blockquote",
      name: "Quote",
      match_str: "blockquote",
      cls: ye
    }, {
      type: "video",
      name: "Video",
      match_str: /(mp4)(\?.*)?$/i,
      cls: He
    }, {
      type: "wistia",
      name: "Wistia",
      match_str: /https?:\/\/(.+)?(wistia\.com|wi\.st)\/.*/i,
      cls: Fe
    }, {
      type: "audio",
      name: "Audio",
      match_str: /(mp3|wav|m4a)(\?.*)?$/i,
      cls: qe
    }, {
      type: "imageblank",
      name: "Imageblank",
      match_str: "",
      cls: fe
    }];

    if (e) {
      if (t instanceof Array) return !1;

      for (var n = 0; n < i.length; n++) {
        switch (i[n].type) {
          case "flickr":
          case "image":
          case "instagram":
            if (t.url.match(i[n].match_str)) return i[n];
        }
      }
    } else for (n = 0; n < i.length; n++) {
      if (t.url.match(i[n].match_str)) return i[n];
    }

    return !1;
  }

  var Be = /*#__PURE__*/function () {
    function Be(t, e) {
      _classCallCheck(this, Be);

      this._el = {
        container: {},
        content_container: {},
        media_container: {},
        timespan: {},
        line_left: {},
        line_right: {},
        content: {},
        text: {},
        media: {}
      }, this._text = {}, this._state = {
        loaded: !1
      }, this.data = {
        unique_id: "",
        background: null,
        date: {
          year: 0,
          month: 0,
          day: 0,
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0,
          thumbnail: "",
          format: ""
        },
        text: {
          headline: "",
          text: ""
        },
        media: null
      }, this.options = {
        duration: 1e3,
        ease: at,
        width: 600,
        height: 600,
        marker_width_min: 100
      }, this.active = !1, this.animator = {}, this.has_end_date = !1, C(this.options, e), C(this.data, t), this._initLayout(), this._initEvents();
    }

    _createClass(Be, [{
      key: "show",
      value: function show() {}
    }, {
      key: "hide",
      value: function hide() {}
    }, {
      key: "setActive",
      value: function setActive(t) {
        this.active = t, this.active && this.has_end_date ? this._el.container.className = "tl-timemarker tl-timemarker-with-end tl-timemarker-active" : this.active ? this._el.container.className = "tl-timemarker tl-timemarker-active" : this.has_end_date ? this._el.container.className = "tl-timemarker tl-timemarker-with-end" : this._el.container.className = "tl-timemarker";
      }
    }, {
      key: "addTo",
      value: function addTo(t) {
        t.appendChild(this._el.container);
      }
    }, {
      key: "removeFrom",
      value: function removeFrom(t) {
        t.removeChild(this._el.container);
      }
    }, {
      key: "updateDisplay",
      value: function updateDisplay(t, e) {
        this._updateDisplay(t, e);
      }
    }, {
      key: "loadMedia",
      value: function loadMedia() {
        this._media && !this._state.loaded && (this._media.loadMedia(), this._state.loaded = !0);
      }
    }, {
      key: "stopMedia",
      value: function stopMedia() {
        this._media && this._state.loaded && this._media.stopMedia();
      }
    }, {
      key: "getLeft",
      value: function getLeft() {
        return this._el.container.style.left.slice(0, -2);
      }
    }, {
      key: "getTime",
      value: function getTime() {
        return this.data.start_date.getTime();
      }
    }, {
      key: "getEndTime",
      value: function getEndTime() {
        return !!this.data.end_date && this.data.end_date.getTime();
      }
    }, {
      key: "setHeight",
      value: function setHeight(t) {
        var e = 1;
        this._el.content_container.style.height = t + "px", this._el.timespan_content.style.height = t + "px", this._el.content.className = t <= 30 ? "tl-timemarker-content tl-timemarker-content-small" : "tl-timemarker-content", t <= 56 ? L(this._el.content_container, "tl-timemarker-content-container-small") : S(this._el.content_container, "tl-timemarker-content-container-small"), l ? ((e = Math.floor(t / 14)) < 1 && (e = 1), this._text.className = "tl-headline", this._text.style.webkitLineClamp = e) : (e = t / 12, this._text.className = e > 1 ? "tl-headline tl-headline-fadeout" : "tl-headline", this._text.style.height = 12 * e + "px");
      }
    }, {
      key: "setWidth",
      value: function setWidth(t) {
        this.data.end_date && (this._el.container.style.width = t + "px", t > this.options.marker_width_min ? (this._el.content_container.style.width = t + "px", this._el.content_container.className = "tl-timemarker-content-container tl-timemarker-content-container-long") : (this._el.content_container.style.width = this.options.marker_width_min + "px", this._el.content_container.className = "tl-timemarker-content-container"));
      }
    }, {
      key: "setClass",
      value: function setClass(t) {
        this._el.container.className = t;
      }
    }, {
      key: "setRowPosition",
      value: function setRowPosition(t, e) {
        this.setPosition({
          top: t
        }), this._el.timespan.style.height = e + "px";
      }
    }, {
      key: "_onMarkerClick",
      value: function _onMarkerClick(t) {
        this.fire("markerclick", {
          unique_id: this.data.unique_id
        });
      }
    }, {
      key: "_initLayout",
      value: function _initLayout() {
        if (this._el.container = T("div", "tl-timemarker"), this.data.unique_id && (this._el.container.id = this.data.unique_id + "-marker"), this.data.end_date && (this.has_end_date = !0, this._el.container.className = "tl-timemarker tl-timemarker-with-end"), this._el.timespan = T("div", "tl-timemarker-timespan", this._el.container), this._el.timespan_content = T("div", "tl-timemarker-timespan-content", this._el.timespan), this._el.content_container = T("div", "tl-timemarker-content-container", this._el.container), this._el.content = T("div", "tl-timemarker-content", this._el.content_container), this._el.line_left = T("div", "tl-timemarker-line-left", this._el.timespan), this._el.line_right = T("div", "tl-timemarker-line-right", this._el.timespan), this.data.media) {
          this._el.media_container = T("div", "tl-timemarker-media-container", this._el.content);
          var t = {
            url: this.data.media.thumbnail
          },
              e = this.data.media.thumbnail ? $e(t, !0) : null;

          if (e) {
            var i = new e.cls(t);
            i.on("loaded", function () {
              this._el.media = T("img", "tl-timemarker-media", this._el.media_container), this._el.media.src = i.getImageURL();
            }.bind(this)), i.loadMedia();
          } else {
            var n = $e(this.data.media).type;
            this._el.media = T("span", "tl-icon-" + n, this._el.media_container);
          }
        }

        this._el.text = T("div", "tl-timemarker-text", this._el.content), this._text = T("h2", "tl-headline", this._el.text), this.data.text.headline && "" != this.data.text.headline ? this._text.innerHTML = Z(this.data.text.headline) : this.data.text.text && "" != this.data.text.text ? this._text.innerHTML = Z(this.data.text.text) : this.data.media && this.data.media.caption && "" != this.data.media.caption && (this._text.innerHTML = Z(this.data.media.caption)), this.onLoaded();
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        _t.addListener(this._el.container, "click", this._onMarkerClick, this);
      }
    }, {
      key: "_updateDisplay",
      value: function _updateDisplay(t, e, i) {
        t && (this.options.width = t), e && (this.options.height = e);
      }
    }]);

    return Be;
  }();

  F(Be, ht, dt);

  var We = /*#__PURE__*/function () {
    function We(t, e, i) {
      _classCallCheck(this, We);

      this._el = {
        drag: t,
        move: t
      }, this.mousedrag = {
        down: "mousedown",
        up: "mouseup",
        leave: "mouseleave",
        move: "mousemove"
      }, this.touchdrag = {
        down: "touchstart",
        up: "touchend",
        leave: "mouseleave",
        move: "touchmove"
      }, e && (this._el.move = e), this.options = {
        snap: !1,
        enable: {
          x: !0,
          y: !0
        },
        constraint: {
          top: !1,
          bottom: !1,
          left: 0,
          right: !1
        },
        momentum_multiplier: 2e3,
        duration: 1e3,
        ease: st
      }, this.animator = null, this.dragevent = this.mousedrag, w && (this.dragevent = this.touchdrag), this.data = {
        sliding: !1,
        direction: "none",
        pagex: {
          start: 0,
          end: 0
        },
        pagey: {
          start: 0,
          end: 0
        },
        pos: {
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 0,
            y: 0
          }
        },
        new_pos: {
          x: 0,
          y: 0
        },
        new_pos_parent: {
          x: 0,
          y: 0
        },
        time: {
          start: 0,
          end: 0
        },
        touch: !1
      }, C(this.options, i);
    }

    _createClass(We, [{
      key: "enable",
      value: function enable(t) {
        _t.addListener(this._el.drag, this.dragevent.down, this._onDragStart, this), _t.addListener(this._el.drag, this.dragevent.up, this._onDragEnd, this), this.data.pos.start = 0, this._el.move.style.left = this.data.pos.start.x + "px", this._el.move.style.top = this.data.pos.start.y + "px", this._el.move.style.position = "absolute";
      }
    }, {
      key: "disable",
      value: function disable() {
        _t.removeListener(this._el.drag, this.dragevent.down, this._onDragStart, this), _t.removeListener(this._el.drag, this.dragevent.up, this._onDragEnd, this);
      }
    }, {
      key: "stopMomentum",
      value: function stopMomentum() {
        this.animator && this.animator.stop();
      }
    }, {
      key: "updateConstraint",
      value: function updateConstraint(t) {
        this.options.constraint = t;
      }
    }, {
      key: "_onDragStart",
      value: function _onDragStart(t) {
        this.animator && this.animator.stop(), w ? t.originalEvent ? (this.data.pagex.start = t.originalEvent.touches[0].screenX, this.data.pagey.start = t.originalEvent.touches[0].screenY) : (this.data.pagex.start = t.targetTouches[0].screenX, this.data.pagey.start = t.targetTouches[0].screenY) : (this.data.pagex.start = t.pageX, this.data.pagey.start = t.pageY), this.options.enable.x, this.options.enable.y, this.data.pos.start = {
          x: this._el.move.offsetLeft,
          y: this._el.move.offsetTop
        }, this.data.time.start = new Date().getTime(), this.fire("dragstart", this.data), _t.addListener(this._el.drag, this.dragevent.move, this._onDragMove, this), _t.addListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this);
      }
    }, {
      key: "_onDragEnd",
      value: function _onDragEnd(t) {
        this.data.sliding = !1, _t.removeListener(this._el.drag, this.dragevent.move, this._onDragMove, this), _t.removeListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this), this.fire("dragend", this.data), this._momentum();
      }
    }, {
      key: "_onDragMove",
      value: function _onDragMove(t) {
        var e = {
          x: 0,
          y: 0
        };
        this.data.sliding = !0, w ? t.originalEvent ? (this.data.pagex.end = t.originalEvent.touches[0].screenX, this.data.pagey.end = t.originalEvent.touches[0].screenY) : (this.data.pagex.end = t.targetTouches[0].screenX, this.data.pagey.end = t.targetTouches[0].screenY) : (this.data.pagex.end = t.pageX, this.data.pagey.end = t.pageY), e.x = this.data.pagex.start - this.data.pagex.end, e.y = this.data.pagey.start - this.data.pagey.end, this.data.pos.end = {
          x: this._el.drag.offsetLeft,
          y: this._el.drag.offsetTop
        }, this.data.new_pos.x = -(e.x - this.data.pos.start.x), this.data.new_pos.y = -(e.y - this.data.pos.start.y), this.options.enable.x && Math.abs(e.x) > Math.abs(e.y) && (t.preventDefault(), this._el.move.style.left = this.data.new_pos.x + "px"), this.options.enable.y && Math.abs(e.y) > Math.abs(e.y) && (t.preventDefault(), this._el.move.style.top = this.data.new_pos.y + "px"), this.fire("dragmove", this.data);
      }
    }, {
      key: "_momentum",
      value: function _momentum() {
        var t = {
          x: 0,
          y: 0,
          time: 0
        },
            e = {
          x: 0,
          y: 0,
          time: 0
        },
            i = {
          x: !1,
          y: !1
        },
            n = !1;
        this.data.direction = null, t.time = 10 * (new Date().getTime() - this.data.time.start), e.time = 10 * (new Date().getTime() - this.data.time.start), e.x = this.options.momentum_multiplier * (Math.abs(this.data.pagex.end) - Math.abs(this.data.pagex.start)), e.y = this.options.momentum_multiplier * (Math.abs(this.data.pagey.end) - Math.abs(this.data.pagey.start)), t.x = Math.round(e.x / e.time), t.y = Math.round(e.y / e.time), this.data.new_pos.x = Math.min(this.data.new_pos.x + t.x), this.data.new_pos.y = Math.min(this.data.new_pos.y + t.y), this.options.enable.x ? this.options.constraint.left && this.data.new_pos.x > this.options.constraint.left && (this.data.new_pos.x = this.options.constraint.left) : this.data.new_pos.x = this.data.pos.start.x, this.options.enable.y ? this.data.new_pos.y < 0 && (this.data.new_pos.y = 0) : this.data.new_pos.y = this.data.pos.start.y, e.time < 2e3 && (n = !0), this.options.enable.x && this.options.enable.y ? Math.abs(e.x) > Math.abs(e.y) ? i.x = !0 : i.y = !0 : this.options.enable.x ? Math.abs(e.x) > Math.abs(e.y) && (i.x = !0) : Math.abs(e.y) > Math.abs(e.x) && (i.y = !0), i.x && (Math.abs(e.x) > this._el.drag.offsetWidth / 2 && (n = !0), Math.abs(e.x) > 1e4 && (this.data.direction = "left", e.x > 0 && (this.data.direction = "right"))), i.y && (Math.abs(e.y) > this._el.drag.offsetHeight / 2 && (n = !0), Math.abs(e.y) > 1e4 && (this.data.direction = "up", e.y > 0 && (this.data.direction = "down"))), e.time < 1e3 || this._animateMomentum(), n && this.data.direction ? this.fire("swipe_" + this.data.direction, this.data) : this.data.direction ? this.fire("swipe_nodirection", this.data) : this.options.snap && (this.animator.stop(), this.animator = ct(this._el.move, {
          top: this.data.pos.start.y,
          left: this.data.pos.start.x,
          duration: this.options.duration,
          easing: ot
        }));
      }
    }, {
      key: "_animateMomentum",
      value: function _animateMomentum() {
        var t = {
          x: this.data.new_pos.x,
          y: this.data.new_pos.y
        },
            e = {
          duration: this.options.duration,
          easing: ot
        };
        this.options.enable.y && ((this.options.constraint.top || this.options.constraint.bottom) && (t.y > this.options.constraint.bottom ? t.y = this.options.constraint.bottom : t.y < this.options.constraint.top && (t.y = this.options.constraint.top)), e.top = Math.floor(t.y) + "px"), this.options.enable.x && (this.options.constraint.left && t.x >= this.options.constraint.left && (t.x = this.options.constraint.left), this.options.constraint.right && t.x < this.options.constraint.right && (t.x = this.options.constraint.right), e.left = Math.floor(t.x) + "px"), this.animator = ct(this._el.move, e), this.fire("momentum", this.data);
      }
    }]);

    return We;
  }();

  F(We, ht);

  var Ue = /*#__PURE__*/function () {
    function Ue(t, e, i, n) {
      _classCallCheck(this, Ue);

      this.language = n, this._el = {
        parent: {},
        container: {},
        slider: {},
        slider_background: {},
        line: {},
        marker_container_mask: {},
        marker_container: {},
        marker_item_container: {},
        timeaxis: {},
        timeaxis_background: {},
        attribution: {}
      }, this.collapsed = !1, this._el.container = "object" == _typeof(t) ? t : x(t), this.config = e, this.options = {
        width: 600,
        height: 600,
        duration: 1e3,
        ease: st,
        has_groups: !1,
        optimal_tick_width: 50,
        scale_factor: 2,
        marker_padding: 5,
        timenav_height_min: 150,
        marker_height_min: 30,
        marker_width_min: 100,
        zoom_sequence: [.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
      }, this.animator = null, this.ready = !1, this._markers = [], this._eras = [], this.has_eras = !1, this._groups = [], this._calculated_row_height = 100, this.current_id = "", this.timescale = {}, this.timeaxis = {}, this.max_rows = 6, this.animate_css = !1, this._swipable, C(this.options, i);
    }

    _createClass(Ue, [{
      key: "init",
      value: function init() {
        this._initLayout(), this._initEvents(), this._initData(), this.updateDisplay(), this._onLoaded();
      }
    }, {
      key: "positionMarkers",
      value: function positionMarkers(t) {
        for (var e = 0; e < this._markers.length; e++) {
          var i = this.timescale.getPositionInfo(e);
          t ? this._markers[e].setClass("tl-timemarker tl-timemarker-fast") : this._markers[e].setClass("tl-timemarker"), this._markers[e].setPosition({
            left: i.start
          }), this._markers[e].setWidth(i.width);
        }
      }
    }, {
      key: "updateDisplay",
      value: function updateDisplay(t, e, i) {
        var n = !1;
        t && (0 == this.options.width && t > 0 && (n = !0), this.options.width = t), e && e != this.options.height && (this.options.height = e, this.timescale = this._getTimeScale()), this._assignRowsToMarkers(), this._el.slider_background.style.width = this.timescale.getPixelWidth() + this.options.width + "px", this._el.slider_background.style.left = -this.options.width / 2 + "px", this._el.slider.style.width = this.timescale.getPixelWidth() + this.options.width + "px", this._swipable.updateConstraint({
          top: !1,
          bottom: !1,
          left: this.options.width / 2,
          right: -(this.timescale.getPixelWidth() - this.options.width / 2)
        }), n && this._drawTimeline(), this.goToId(this.current_id, !0);
      }
    }, {
      key: "_getTimeScale",
      value: function _getTimeScale() {
        var t = 0;

        try {
          t = parseInt(this.options.marker_height_min);
        } catch (e) {
          O("Invalid value for marker_height_min option."), t = 30;
        }

        return 0 == t && (O("marker_height_min option must not be zero."), t = 30), this.max_rows = Math.round((this.options.height - this._el.timeaxis_background.offsetHeight - this.options.marker_padding) / t), this.max_rows < 1 && (this.max_rows = 1), new se(this.config, {
          display_width: this._el.container.offsetWidth,
          screen_multiplier: this.options.scale_factor,
          max_rows: this.max_rows
        });
      }
    }, {
      key: "_updateTimeScale",
      value: function _updateTimeScale(t) {
        this.options.scale_factor = t, this._updateDrawTimeline();
      }
    }, {
      key: "zoomIn",
      value: function zoomIn() {
        var t = function (t, e, i) {
          for (var n = 0; n < t.length; n++) {
            if (e < t[n]) return t[n];
          }

          return i || e;
        }(this.options.zoom_sequence, this.options.scale_factor);

        this.setZoomFactor(t);
      }
    }, {
      key: "zoomOut",
      value: function zoomOut() {
        var t = function (t, e, i) {
          for (var n = t.length - 1; n >= 0; n--) {
            if (e > t[n]) return t[n];
          }

          return i || e;
        }(this.options.zoom_sequence, this.options.scale_factor);

        this.setZoomFactor(t);
      }
    }, {
      key: "setZoom",
      value: function setZoom(t) {
        var e = this.options.zoom_sequence[t];
        "number" == typeof e ? this.setZoomFactor(e) : console.warn("Invalid zoom level. Please use an index number between 0 and " + (this.options.zoom_sequence.length - 1));
      }
    }, {
      key: "setZoomFactor",
      value: function setZoomFactor(t) {
        t <= this.options.zoom_sequence[0] ? this.fire("zoomtoggle", {
          zoom: "out",
          show: !1
        }) : this.fire("zoomtoggle", {
          zoom: "out",
          show: !0
        }), t >= this.options.zoom_sequence[this.options.zoom_sequence.length - 1] ? this.fire("zoomtoggle", {
          zoom: "in",
          show: !1
        }) : this.fire("zoomtoggle", {
          zoom: "in",
          show: !0
        }), 0 == t && (console.warn("Zoom factor must be greater than zero. Using 0.1"), t = .1), this.options.scale_factor = t, this.goToId(this.current_id, !this._updateDrawTimeline(!0), !0);
      }
    }, {
      key: "_createGroups",
      value: function _createGroups() {
        this._groups = [];
        var t = this.timescale.getGroupLabels();

        if (t) {
          this.options.has_groups = !0;

          for (var e = 0; e < t.length; e++) {
            this._createGroup(t[e]);
          }
        }
      }
    }, {
      key: "_createGroup",
      value: function _createGroup(t) {
        var e = new le(t);
        this._addGroup(e), this._groups.push(e);
      }
    }, {
      key: "_addGroup",
      value: function _addGroup(t) {
        t.addTo(this._el.container);
      }
    }, {
      key: "_positionGroups",
      value: function _positionGroups() {
        if (this.options.has_groups) for (var t = this.options.height - this._el.timeaxis_background.offsetHeight, e = Math.floor(t / this.timescale.getNumberOfRows() - this.options.marker_padding), i = (this.timescale.getGroupLabels(), 0), n = 0; i < this._groups.length; i++) {
          var r = Math.floor(n * (e + this.options.marker_padding)),
              a = !1;
          r > t - this.options.marker_padding && (a = !0), this._groups[i].setRowPosition(r, this._calculated_row_height + this.options.marker_padding / 2), this._groups[i].setAlternateRowColor(W(i), a), n += this._groups[i].data.rows;
        }
      }
    }, {
      key: "_addMarker",
      value: function _addMarker(t) {
        t.addTo(this._el.marker_item_container), t.on("markerclick", this._onMarkerClick, this), t.on("added", this._onMarkerAdded, this);
      }
    }, {
      key: "_createMarker",
      value: function _createMarker(t, e) {
        var i = new Be(t, this.options);
        this._addMarker(i), e < 0 ? this._markers.push(i) : this._markers.splice(e, 0, i);
      }
    }, {
      key: "_createMarkers",
      value: function _createMarkers(t) {
        for (var e = 0; e < t.length; e++) {
          this._createMarker(t[e], -1);
        }
      }
    }, {
      key: "_removeMarker",
      value: function _removeMarker(t) {
        t.removeFrom(this._el.marker_item_container);
      }
    }, {
      key: "_destroyMarker",
      value: function _destroyMarker(t) {
        this._removeMarker(this._markers[t]), this._markers.splice(t, 1);
      }
    }, {
      key: "_calculateMarkerHeight",
      value: function _calculateMarkerHeight(t) {
        return t / this.timescale.getNumberOfRows() - this.options.marker_padding;
      }
    }, {
      key: "_calculateRowHeight",
      value: function _calculateRowHeight(t) {
        return t / this.timescale.getNumberOfRows();
      }
    }, {
      key: "_calculateAvailableHeight",
      value: function _calculateAvailableHeight() {
        return this.options.height - this._el.timeaxis_background.offsetHeight - this.options.marker_padding;
      }
    }, {
      key: "_calculateMinimumTimeNavHeight",
      value: function _calculateMinimumTimeNavHeight() {
        return this.timescale.getNumberOfRows() * this.options.marker_height_min + this._el.timeaxis_background.offsetHeight + this.options.marker_padding;
      }
    }, {
      key: "getMinimumHeight",
      value: function getMinimumHeight() {
        return this._calculateMinimumTimeNavHeight();
      }
    }, {
      key: "_assignRowsToMarkers",
      value: function _assignRowsToMarkers() {
        var t = this._calculateAvailableHeight(),
            e = this._calculateMarkerHeight(t);

        this._positionGroups(), this._calculated_row_height = this._calculateRowHeight(t);

        for (var i = 0; i < this._markers.length; i++) {
          this._markers[i].setHeight(e);

          var n = this.timescale.getPositionInfo(i).row,
              r = Math.floor(n * (e + this.options.marker_padding)) + this.options.marker_padding,
              a = t - r + this.options.marker_padding;

          this._markers[i].setRowPosition(r, a);
        }
      }
    }, {
      key: "_resetMarkersActive",
      value: function _resetMarkersActive() {
        for (var t = 0; t < this._markers.length; t++) {
          this._markers[t].setActive(!1);
        }
      }
    }, {
      key: "_findMarkerIndex",
      value: function _findMarkerIndex(t) {
        var e = -1;
        return ("string" == typeof t || t instanceof String) && (e = U(t, this._markers, "unique_id", e)), e;
      }
    }, {
      key: "_createEras",
      value: function _createEras(t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e],
              n = new he(i.start_date, i.end_date, i.headline, this.options);
          this._eras.push(n), n.addTo(this._el.marker_item_container), n.on("added", this._onEraAdded, this);
        }
      }
    }, {
      key: "_positionEras",
      value: function _positionEras(t) {
        for (var e = 0, i = 0; i < this._eras.length; i++) {
          var n = {
            start: 0,
            end: 0,
            width: 0
          };
          n.start = this.timescale.getPosition(this._eras[i].start_date.getTime()), n.end = this.timescale.getPosition(this._eras[i].end_date.getTime()), n.width = n.end - n.start, t ? this._eras[i].setClass("tl-timeera tl-timeera-fast") : this._eras[i].setClass("tl-timeera"), this._eras[i].setPosition({
            left: n.start
          }), this._eras[i].setWidth(n.width), ++e > 5 && (e = 0), this._eras[i].setColor(e);
        }
      }
    }, {
      key: "createMarker",
      value: function createMarker(t, e) {
        this._createMarker(t, e);
      }
    }, {
      key: "createMarkers",
      value: function createMarkers(t) {
        this._createMarkers(t);
      }
    }, {
      key: "destroyMarker",
      value: function destroyMarker(t) {
        this._destroyMarker(t);
      }
    }, {
      key: "destroyMarkerId",
      value: function destroyMarkerId(t) {
        this.destroyMarker(this._findMarkerIndex(t));
      }
    }, {
      key: "goTo",
      value: function goTo(t, e, i) {
        var n = this.options.ease,
            r = this.options.duration,
            a = t < 0 ? 0 : t;
        this._resetMarkersActive(), t >= 0 && t < this._markers.length && this._markers[t].setActive(!0), this.animator && this.animator.stop(), e ? (this._el.slider.className = "tl-timenav-slider", this._el.slider.style.left = -this._markers[a].getLeft() + this.options.width / 2 + "px") : i ? (this._el.slider.className = "tl-timenav-slider tl-timenav-slider-animate", this.animate_css = !0, this._el.slider.style.left = -this._markers[a].getLeft() + this.options.width / 2 + "px") : (this._el.slider.className = "tl-timenav-slider", this.animator = ct(this._el.slider, {
          left: -this._markers[a].getLeft() + this.options.width / 2 + "px",
          duration: r,
          easing: n
        })), t >= 0 && t < this._markers.length ? this.current_id = this._markers[t].data.unique_id : this.current_id = "";
      }
    }, {
      key: "goToId",
      value: function goToId(t, e, i) {
        this.goTo(this._findMarkerIndex(t), e, i);
      }
    }, {
      key: "_onLoaded",
      value: function _onLoaded() {
        this.ready = !0, this.fire("loaded", this.config);
      }
    }, {
      key: "_onMarkerAdded",
      value: function _onMarkerAdded(t) {
        this.fire("dateAdded", this.config);
      }
    }, {
      key: "_onEraAdded",
      value: function _onEraAdded(t) {
        this.fire("eraAdded", this.config);
      }
    }, {
      key: "_onMarkerRemoved",
      value: function _onMarkerRemoved(t) {
        this.fire("dateRemoved", this.config);
      }
    }, {
      key: "_onMarkerClick",
      value: function _onMarkerClick(t) {
        this.goToId(t.unique_id), this.fire("change", {
          unique_id: t.unique_id
        });
      }
    }, {
      key: "_onMouseScroll",
      value: function _onMouseScroll(t) {
        var e = 0,
            i = 0,
            n = {
          right: -(this.timescale.getPixelWidth() - this.options.width / 2),
          left: this.options.width / 2
        };
        t || (t = window.event), t.originalEvent && (t = t.originalEvent), void 0 !== t.wheelDeltaX && (e = t.wheelDeltaY / 6, e = Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY) ? t.wheelDeltaX / 6 : 0), e && (t.preventDefault && t.preventDefault(), t.returnValue = !1), (i = parseInt(this._el.slider.style.left.replace("px", "")) + e) > n.left ? i = n.left : i < n.right && (i = n.right), this.animate_css && (this._el.slider.className = "tl-timenav-slider", this.animate_css = !1), this._el.slider.style.left = i + "px";
      }
    }, {
      key: "_onDragMove",
      value: function _onDragMove(t) {
        this.animate_css && (this._el.slider.className = "tl-timenav-slider", this.animate_css = !1);
      }
    }, {
      key: "_drawTimeline",
      value: function _drawTimeline(t) {
        this.timescale = this._getTimeScale(), this.timeaxis.drawTicks(this.timescale, this.options.optimal_tick_width), this.positionMarkers(t), this._assignRowsToMarkers(), this._createGroups(), this._positionGroups(), this.has_eras && this._positionEras(t);
      }
    }, {
      key: "_updateDrawTimeline",
      value: function _updateDrawTimeline(t) {
        var e = !1;

        if (t) {
          var i = new se(this.config, {
            display_width: this._el.container.offsetWidth,
            screen_multiplier: this.options.scale_factor,
            max_rows: this.max_rows
          });
          this.timescale.getMajorScale() == i.getMajorScale() && this.timescale.getMinorScale() == i.getMinorScale() && (e = !0);
        } else e = !0;

        return e ? (this.timescale = this._getTimeScale(), this.timeaxis.positionTicks(this.timescale, this.options.optimal_tick_width), this.positionMarkers(), this._assignRowsToMarkers(), this._positionGroups(), this.has_eras && this._positionEras(), this.updateDisplay()) : this._drawTimeline(!0), e;
      }
    }, {
      key: "_initLayout",
      value: function _initLayout() {
        this._el.attribution = T("div", "tl-attribution", this._el.container), this._el.line = T("div", "tl-timenav-line", this._el.container), this._el.slider = T("div", "tl-timenav-slider", this._el.container), this._el.slider_background = T("div", "tl-timenav-slider-background", this._el.slider), this._el.marker_container_mask = T("div", "tl-timenav-container-mask", this._el.slider), this._el.marker_container = T("div", "tl-timenav-container", this._el.marker_container_mask), this._el.marker_item_container = T("div", "tl-timenav-item-container", this._el.marker_container), this._el.timeaxis = T("div", "tl-timeaxis", this._el.slider), this._el.timeaxis_background = T("div", "tl-timeaxis-background", this._el.container), this._el.attribution.innerHTML = "<a href='http://timeline.knightlab.com' target='_blank' rel='noopener'><span class='tl-knightlab-logo'></span>TimelineJS</a>", this.timeaxis = new ce(this._el.timeaxis, this.options, this.language), this._swipable = new We(this._el.slider_background, this._el.slider, {
          enable: {
            x: !0,
            y: !1
          },
          constraint: {
            top: !1,
            bottom: !1,
            left: this.options.width / 2,
            right: !1
          },
          snap: !1
        }), this._swipable.enable();
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        this._swipable.on("dragmove", this._onDragMove, this), _t.addListener(this._el.container, "mousewheel", this._onMouseScroll, this), _t.addListener(this._el.container, "DOMMouseScroll", this._onMouseScroll, this);
      }
    }, {
      key: "_initData",
      value: function _initData() {
        this._createMarkers(this.config.events), this.config.eras && this.config.eras.length > 0 && (this.has_eras = !0, this._createEras(this.config.eras)), this._drawTimeline();
      }
    }]);

    return Ue;
  }();

  F(Ue, ht, dt);

  var Ze = /*#__PURE__*/function () {
    function Ze(t, e, i, n) {
      _classCallCheck(this, Ze);

      n && this.setLanguage(n), this._el = {
        container: {},
        scroll_container: {},
        background: {},
        content_container: {},
        content: {}
      }, this._media = null, this._mediaclass = {}, this._text = {}, this._background_media = null, this._state = {
        loaded: !1
      }, this.has = {
        headline: !1,
        text: !1,
        media: !1,
        title: !1,
        background: {
          image: !1,
          color: !1,
          color_value: ""
        }
      }, this.has.title = i, this.data = {
        unique_id: null,
        background: null,
        start_date: null,
        end_date: null,
        location: null,
        text: null,
        media: null,
        autolink: !0
      }, this.options = {
        duration: 1e3,
        slide_padding_lr: 40,
        ease: at,
        width: 600,
        height: 600,
        skinny_size: 650,
        media_name: ""
      }, this.active = !1, this.animator = {}, C(this.options, e), C(this.data, t), this._initLayout(), this._initEvents();
    }

    _createClass(Ze, [{
      key: "show",
      value: function show() {
        this.animator = ct(this._el.slider_container, {
          left: -this._el.container.offsetWidth * n + "px",
          duration: this.options.duration,
          easing: this.options.ease
        });
      }
    }, {
      key: "hide",
      value: function hide() {}
    }, {
      key: "setActive",
      value: function setActive(t) {
        this.active = t, this.active ? (this.data.background && this.fire("background_change", this.has.background), this.loadMedia()) : this.stopMedia();
      }
    }, {
      key: "addTo",
      value: function addTo(t) {
        t.appendChild(this._el.container);
      }
    }, {
      key: "removeFrom",
      value: function removeFrom(t) {
        t.removeChild(this._el.container);
      }
    }, {
      key: "updateDisplay",
      value: function updateDisplay(t, e, i) {
        var n,
            r = this.options.slide_padding_lr,
            a = this.options.slide_padding_lr;
        this.options.width = t || this._el.container.offsetWidth, n = this.options.width - 2 * this.options.slide_padding_lr, c && this.options.width <= this.options.skinny_size ? (r = 0, a = 0, n = this.options.width) : "landscape" == i || this.options.width <= this.options.skinny_size && (r = 50, a = 50, n = this.options.width - r - a), this._el.content.style.paddingLeft = r + "px", this._el.content.style.paddingRight = a + "px", this._el.content.style.width = n + "px", this.options.height = e || this._el.container.offsetHeight, this._media && (!this.has.text && this.has.headline ? this._media.updateDisplay(n, this.options.height - this._text.headlineHeight(), i) : this.has.text || this.has.headline ? this.options.width <= this.options.skinny_size ? this._media.updateDisplay(n, this.options.height, i) : this._media.updateDisplay(n / 2, this.options.height, i) : this._media.updateDisplay(n, this.options.height, i)), this._updateBackgroundDisplay();
      }
    }, {
      key: "loadMedia",
      value: function loadMedia() {
        var t = this;
        this._media && !this._state.loaded && (this._media.loadMedia(), this._state.loaded = !0), this._background_media && !this._background_media._state.loaded && (this._background_media.on("loaded", function () {
          t._updateBackgroundDisplay();
        }), this._background_media.loadMedia());
      }
    }, {
      key: "stopMedia",
      value: function stopMedia() {
        this._media && this._state.loaded && this._media.stopMedia();
      }
    }, {
      key: "getBackground",
      value: function getBackground() {
        return this.has.background;
      }
    }, {
      key: "scrollToTop",
      value: function scrollToTop() {
        this._el.container.scrollTop = 0;
      }
    }, {
      key: "getFormattedDate",
      value: function getFormattedDate() {
        if (H(this.data.display_date).length > 0) return this.data.display_date;
        var t = "";
        return this.has.title || (this.data.end_date && (t = " &mdash; " + this.data.end_date.getDisplayDate(this.getLanguage())), this.data.start_date && (t = this.data.start_date.getDisplayDate(this.getLanguage()) + t)), t;
      }
    }, {
      key: "_initLayout",
      value: function _initLayout() {
        if (this._el.container = T("div", "tl-slide"), this.has.title && (this._el.container.className = "tl-slide tl-slide-titleslide"), this.data.unique_id && (this._el.container.id = this.data.unique_id), this._el.scroll_container = T("div", "tl-slide-scrollable-container", this._el.container), this._el.content_container = T("div", "tl-slide-content-container", this._el.scroll_container), this._el.content = T("div", "tl-slide-content", this._el.content_container), this._el.background = T("div", "tl-slide-background", this._el.container), this.data.background) {
          if (this.data.background.url) {
            var t = $e(this.data.background, !0);
            t && (this._background_media = new t.cls(this.data.background, {
              background: 1
            }), this.has.background.image = !0, this._el.container.className += " tl-full-image-background", this.has.background.color_value = "#000", this._el.background.style.display = "block");
          }

          this.data.background.color && (this.has.background.color = !0, this._el.container.className += " tl-full-color-background", this.has.background.color_value = this.data.background.color), this.data.background.text_background && (this._el.container.className += " tl-text-background");
        }

        this.data.media && this.data.media.url && "" != this.data.media.url && (this.has.media = !0), this.data.text && this.data.text.text && (this.has.text = !0), this.data.text && this.data.text.headline && (this.has.headline = !0), this.has.media && (this.data.media.mediatype = $e(this.data.media), this.options.media_name = this.data.media.mediatype.name, this.options.media_type = this.data.media.mediatype.type, this.options.autolink = this.data.autolink, this._media = new this.data.media.mediatype.cls(this.data.media, this.options, this.getLanguage())), (this.has.text || this.has.headline) && (this._text = new ue(this.data.text, {
          title: this.has.title,
          language: this.options.language,
          autolink: this.data.autolink
        }), this._text.addDateText(this.getFormattedDate())), this.has.text || this.has.headline || !this.has.media ? this.has.headline && this.has.media && !this.has.text ? (L(this._el.container, "tl-slide-media-only"), this._text.addTo(this._el.content), this._media.addTo(this._el.content)) : this.has.text && this.has.media ? (this._media.addTo(this._el.content), this._text.addTo(this._el.content)) : (this.has.text || this.has.headline) && (L(this._el.container, "tl-slide-text-only"), this._text.addTo(this._el.content)) : (L(this._el.container, "tl-slide-media-only"), this._media.addTo(this._el.content)), this.onLoaded();
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {}
    }, {
      key: "_updateBackgroundDisplay",
      value: function _updateBackgroundDisplay() {
        this._background_media && this._background_media._state.loaded && (this._el.background.style.backgroundImage = "url('" + this._background_media.getImageURL(this.options.width, this.options.height) + "')");
      }
    }]);

    return Ze;
  }();

  F(Ze, zt, ht, dt);

  var Ge = /*#__PURE__*/function () {
    function Ge(t, e, i) {
      _classCallCheck(this, Ge);

      this._el = {
        container: {},
        content_container: {},
        icon: {},
        title: {},
        description: {}
      }, this.mediatype = {}, this.data = {
        title: "Navigation",
        description: "Description",
        date: "Date"
      }, this.options = {
        direction: "previous"
      }, this.animator = null, C(this.options, e), C(this.data, t), this._el.container = T("div", "tl-slidenav-" + this.options.direction), c && this._el.container.setAttribute("ontouchstart", " "), this._initLayout(), this._initEvents(), i && i.appendChild(this._el.container);
    }

    _createClass(Ge, [{
      key: "update",
      value: function update(t) {
        var e = {
          title: "",
          description: "",
          date: t.getFormattedDate()
        };
        t.data.text && t.data.text.headline && (e.title = t.data.text.headline), this._update(e);
      }
    }, {
      key: "setColor",
      value: function setColor(t) {
        this._el.content_container.className = t ? "tl-slidenav-content-container tl-slidenav-inverted" : "tl-slidenav-content-container";
      }
    }, {
      key: "_onMouseClick",
      value: function _onMouseClick() {
        this.fire("clicked", this.options);
      }
    }, {
      key: "_update",
      value: function _update(t) {
        this.data = C(this.data, t), this._el.title.innerHTML = Z(this.data.title), this._el.description.innerHTML = Z(this.data.date);
      }
    }, {
      key: "_initLayout",
      value: function _initLayout() {
        this._el.content_container = T("div", "tl-slidenav-content-container", this._el.container), this._el.icon = T("div", "tl-slidenav-icon", this._el.content_container), this._el.title = T("div", "tl-slidenav-title", this._el.content_container), this._el.description = T("div", "tl-slidenav-description", this._el.content_container), this._el.icon.innerHTML = "&nbsp;", this._update();
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        _t.addListener(this._el.container, "click", this._onMouseClick, this);
      }
    }]);

    return Ge;
  }();

  F(Ge, dt, ht);

  var Ye = /*#__PURE__*/function () {
    function Ye(t, e, i, n) {
      _classCallCheck(this, Ye);

      n && this.setLanguage(n), this._el = {
        container: {},
        background: {},
        slider_container_mask: {},
        slider_container: {},
        slider_item_container: {}
      }, this._nav = {}, this._nav.previous = {}, this._nav.next = {}, this.slide_spacing = 0, this._slides = [], this._swipable, this.preloadTimer, this._message, this.current_id = "", this.data = {}, this.options = {
        id: "",
        layout: "portrait",
        width: 600,
        height: 600,
        default_bg_color: {
          r: 255,
          g: 255,
          b: 255
        },
        slide_padding_lr: 40,
        start_at_slide: 1,
        slide_default_fade: "0%",
        duration: 1e3,
        ease: st,
        dragging: !0,
        trackResize: !0
      }, "object" == _typeof(t) ? (this._el.container = t, this.options.id = B(6, "tl")) : (this.options.id = t, this._el.container = x(t)), this._el.container.id || (this._el.container.id = this.options.id), this.animator = null, C(this.options, i), C(this.data, e);
    }

    _createClass(Ye, [{
      key: "init",
      value: function init() {
        this._initLayout(), this._initEvents(), this._initData(), this.updateDisplay(), this.goTo(this.options.start_at_slide), this._onLoaded();
      }
    }, {
      key: "_addSlide",
      value: function _addSlide(t) {
        t.addTo(this._el.slider_item_container), t.on("added", this._onSlideAdded, this), t.on("background_change", this._onBackgroundChange, this);
      }
    }, {
      key: "_createSlide",
      value: function _createSlide(t, e, i) {
        var n = new Ze(t, this.options, e, this.getLanguage());
        this._addSlide(n), i < 0 ? this._slides.push(n) : this._slides.splice(i, 0, n);
      }
    }, {
      key: "_createSlides",
      value: function _createSlides(t) {
        for (var e = 0; e < t.length; e++) {
          "" == t[e].unique_id && (t[e].unique_id = B(6, "tl-slide")), this._createSlide(t[e], !1, -1);
        }
      }
    }, {
      key: "_removeSlide",
      value: function _removeSlide(t) {
        t.removeFrom(this._el.slider_item_container), t.off("added", this._onSlideRemoved, this), t.off("background_change", this._onBackgroundChange);
      }
    }, {
      key: "_destroySlide",
      value: function _destroySlide(t) {
        this._removeSlide(this._slides[t]), this._slides.splice(t, 1);
      }
    }, {
      key: "_findSlideIndex",
      value: function _findSlideIndex(t) {
        var e = t;
        return ("string" == typeof t || t instanceof String) && (e = U(t, this._slides, "unique_id")), e;
      }
    }, {
      key: "updateDisplay",
      value: function updateDisplay(t, e, i, n) {
        var r, a;
        a = void 0 === n ? this.options.layout : n, this.options.layout = a, this.options.width = t || this._el.container.offsetWidth, this.options.height = e || this._el.container.offsetHeight, this.slide_spacing = 2 * this.options.width, r = this.options.height / 2, this._nav.next.setPosition({
          top: r
        }), this._nav.previous.setPosition({
          top: r
        });

        for (var o = 0; o < this._slides.length; o++) {
          this._slides[o].updateDisplay(this.options.width, this.options.height, a), this._slides[o].setPosition({
            left: this.slide_spacing * o,
            top: 0
          });
        }

        this.goToId(this.current_id, !0, !0);
      }
    }, {
      key: "createSlide",
      value: function createSlide(t, e) {
        this._createSlide(t, !1, e);
      }
    }, {
      key: "createSlides",
      value: function createSlides(t) {
        this._createSlides(t);
      }
    }, {
      key: "destroySlide",
      value: function destroySlide(t) {
        this._destroySlide(t);
      }
    }, {
      key: "destroySlideId",
      value: function destroySlideId(t) {
        this.destroySlide(this._findSlideIndex(t));
      }
    }, {
      key: "goTo",
      value: function goTo(t, e, i) {
        t = parseInt(t), isNaN(t) && (t = 0);
        var n = this;
        this.changeBackground({
          color_value: "",
          image: !1
        }), this.preloadTimer && clearTimeout(this.preloadTimer);

        for (var r = 0; r < this._slides.length; r++) {
          this._slides[r].setActive(!1);
        }

        t < this._slides.length && t >= 0 && (this.current_id = this._slides[t].data.unique_id, this.animator && this.animator.stop(), this._swipable && this._swipable.stopMomentum(), e ? (this._el.slider_container.style.left = -this.slide_spacing * t + "px", this._onSlideChange(i)) : this.animator = ct(this._el.slider_container, {
          left: -this.slide_spacing * t + "px",
          duration: this.options.duration,
          easing: this.options.ease,
          complete: this._onSlideChange(i)
        }), this._slides[t].setActive(!0), this._slides[t + 1] ? (this.showNav(this._nav.next, !0), this._nav.next.update(this._slides[t + 1])) : this.showNav(this._nav.next, !1), this._slides[t - 1] ? (this.showNav(this._nav.previous, !0), this._nav.previous.update(this._slides[t - 1])) : this.showNav(this._nav.previous, !1), this.preloadTimer = setTimeout(function () {
          n.preloadSlides(t);
        }, this.options.duration));
      }
    }, {
      key: "goToId",
      value: function goToId(t, e, i) {
        this.goTo(this._findSlideIndex(t), e, i);
      }
    }, {
      key: "preloadSlides",
      value: function preloadSlides(t) {
        this._slides[t + 1] && (this._slides[t + 1].loadMedia(), this._slides[t + 1].scrollToTop()), this._slides[t + 2] && (this._slides[t + 2].loadMedia(), this._slides[t + 2].scrollToTop()), this._slides[t - 1] && (this._slides[t - 1].loadMedia(), this._slides[t - 1].scrollToTop()), this._slides[t - 2] && (this._slides[t - 2].loadMedia(), this._slides[t - 2].scrollToTop());
      }
    }, {
      key: "next",
      value: function next() {
        var t = this._findSlideIndex(this.current_id);

        t + 1 < this._slides.length ? this.goTo(t + 1) : this.goTo(t);
      }
    }, {
      key: "previous",
      value: function previous() {
        var t = this._findSlideIndex(this.current_id);

        t - 1 >= 0 ? this.goTo(t - 1) : this.goTo(t);
      }
    }, {
      key: "showNav",
      value: function showNav(t, e) {
        this.options.width <= 500 && c || (e ? t.show() : t.hide());
      }
    }, {
      key: "changeBackground",
      value: function changeBackground(t) {
        var e = {
          r: 256,
          g: 256,
          b: 256
        };
        t.color_value && "" != t.color_value ? (e = j(t.color_value)) || (O("Invalid color value " + t.color_value), e = this.options.default_bg_color) : (e = this.options.default_bg_color, t.color_value = "rgb(" + e.r + " , " + e.g + ", " + e.b + ")"), e.r, e.g, e.b, this._el.background.style.backgroundImage = "none", t.color_value ? this._el.background.style.backgroundColor = t.color_value : this._el.background.style.backgroundColor = "transparent", e.r < 255 || e.g < 255 || e.b < 255 || t.image ? (this._nav.next.setColor(!0), this._nav.previous.setColor(!0)) : (this._nav.next.setColor(!1), this._nav.previous.setColor(!1));
      }
    }, {
      key: "_updateDrawSlides",
      value: function _updateDrawSlides() {
        for (var t = this.options.layout, e = 0; e < this._slides.length; e++) {
          this._slides[e].updateDisplay(this.options.width, this.options.height, t), this._slides[e].setPosition({
            left: this.slide_spacing * e,
            top: 0
          });
        }

        this.goToId(this.current_id, !0, !1);
      }
    }, {
      key: "_initLayout",
      value: function _initLayout() {
        L(this._el.container, "tl-storyslider"), this._el.slider_container_mask = T("div", "tl-slider-container-mask", this._el.container), this._el.background = T("div", "tl-slider-background tl-animate", this._el.container), this._el.slider_container = T("div", "tl-slider-container tlanimate", this._el.slider_container_mask), this._el.slider_item_container = T("div", "tl-slider-item-container", this._el.slider_container), this.options.width = this._el.container.offsetWidth, this.options.height = this._el.container.offsetHeight, this._nav.previous = new Ge({
          title: "Previous",
          description: "description"
        }, {
          direction: "previous"
        }), this._nav.next = new Ge({
          title: "Next",
          description: "description"
        }, {
          direction: "next"
        }), this._nav.next.addTo(this._el.container), this._nav.previous.addTo(this._el.container), this._el.slider_container.style.left = "0px", w && (this._swipable = new We(this._el.slider_container_mask, this._el.slider_container, {
          enable: {
            x: !0,
            y: !1
          },
          snap: !0
        }), this._swipable.enable(), this._message = new Rt(this._el.container, {
          message_class: "tl-message-full",
          message_icon_class: "tl-icon-swipe-left"
        }, this.getLanguage()), this._message.updateMessage(this._("swipe_to_navigate")), this._message.addTo(this._el.container));
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        this._nav.next.on("clicked", this._onNavigation, this), this._nav.previous.on("clicked", this._onNavigation, this), this._message && this._message.on("clicked", this._onMessageClick, this), this._swipable && (this._swipable.on("swipe_left", this._onNavigation, this), this._swipable.on("swipe_right", this._onNavigation, this), this._swipable.on("swipe_nodirection", this._onSwipeNoDirection, this));
      }
    }, {
      key: "_initData",
      value: function _initData() {
        this.data.title && this._createSlide(this.data.title, !0, -1), this._createSlides(this.data.events);
      }
    }, {
      key: "_onBackgroundChange",
      value: function _onBackgroundChange(t) {
        var e = this._findSlideIndex(this.current_id),
            i = this._slides[e].getBackground();

        this.changeBackground(t), this.fire("colorchange", i);
      }
    }, {
      key: "_onMessageClick",
      value: function _onMessageClick(t) {
        this._message.hide();
      }
    }, {
      key: "_onSwipeNoDirection",
      value: function _onSwipeNoDirection(t) {
        this.goToId(this.current_id);
      }
    }, {
      key: "_onNavigation",
      value: function _onNavigation(t) {
        "next" == t.direction || "left" == t.direction ? this.next() : "previous" != t.direction && "right" != t.direction || this.previous(), this.fire("nav_" + t.direction, this.data);
      }
    }, {
      key: "_onSlideAdded",
      value: function _onSlideAdded(t) {
        O("slideadded"), this.fire("slideAdded", this.data);
      }
    }, {
      key: "_onSlideRemoved",
      value: function _onSlideRemoved(t) {
        this.fire("slideRemoved", this.data);
      }
    }, {
      key: "_onSlideChange",
      value: function _onSlideChange(t) {
        t || this.fire("change", {
          unique_id: this.current_id
        });
      }
    }, {
      key: "_onMouseClick",
      value: function _onMouseClick(t) {}
    }, {
      key: "_fireMouseEvent",
      value: function _fireMouseEvent(t) {
        if (this._loaded) {
          var e = t.type;
          e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e) && ("contextmenu" === e && _t.preventDefault(t), this.fire(e, {
            latlng: "something",
            layerPoint: "something else"
          }));
        }
      }
    }, {
      key: "_onLoaded",
      value: function _onLoaded() {
        this.fire("loaded", this.data);
      }
    }]);

    return Ye;
  }();

  F(Ye, zt, ht);

  var Ve = /*#__PURE__*/function () {
    function Ve(t, e, i) {
      _classCallCheck(this, Ve);

      this._el = {
        parent: {},
        container: {},
        button_backtostart: {},
        button_zoomin: {},
        button_zoomout: {},
        arrow: {},
        line: {},
        coverbar: {},
        grip: {}
      }, this.collapsed = !1, this._el.container = "object" == _typeof(t) ? t : x(t), e && (this._el.parent = e), this.options = {
        width: 600,
        height: 600,
        duration: 1e3,
        ease: st,
        menubar_default_y: 0
      }, this.animator = {}, C(this.options, i), this._initLayout(), this._initEvents();
    }

    _createClass(Ve, [{
      key: "show",
      value: function show(t) {
        this.options.duration;
      }
    }, {
      key: "hide",
      value: function hide(t) {}
    }, {
      key: "toogleZoomIn",
      value: function toogleZoomIn(t) {
        t ? S(this._el.button_zoomin, "tl-menubar-button-inactive") : L(this._el.button_zoomin, "tl-menubar-button-inactive");
      }
    }, {
      key: "toogleZoomOut",
      value: function toogleZoomOut(t) {
        t ? S(this._el.button_zoomout, "tl-menubar-button-inactive") : L(this._el.button_zoomout, "tl-menubar-button-inactive");
      }
    }, {
      key: "setSticky",
      value: function setSticky(t) {
        this.options.menubar_default_y = t;
      }
    }, {
      key: "setColor",
      value: function setColor(t) {
        this._el.container.className = t ? "tl-menubar tl-menubar-inverted" : "tl-menubar";
      }
    }, {
      key: "updateDisplay",
      value: function updateDisplay(t, e, i, n) {
        this._updateDisplay(t, e, i, n);
      }
    }, {
      key: "_onButtonZoomIn",
      value: function _onButtonZoomIn(t) {
        this.fire("zoom_in", t);
      }
    }, {
      key: "_onButtonZoomOut",
      value: function _onButtonZoomOut(t) {
        this.fire("zoom_out", t);
      }
    }, {
      key: "_onButtonBackToStart",
      value: function _onButtonBackToStart(t) {
        this.fire("back_to_start", t);
      }
    }, {
      key: "_initLayout",
      value: function _initLayout() {
        this._el.button_zoomin = T("span", "tl-menubar-button", this._el.container), this._el.button_zoomout = T("span", "tl-menubar-button", this._el.container), this._el.button_backtostart = T("span", "tl-menubar-button", this._el.container), c && this._el.container.setAttribute("ontouchstart", " "), this._el.button_backtostart.innerHTML = "<span class='tl-icon-goback'></span>", this._el.button_zoomin.innerHTML = "<span class='tl-icon-zoom-in'></span>", this._el.button_zoomout.innerHTML = "<span class='tl-icon-zoom-out'></span>";
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        _t.addListener(this._el.button_backtostart, "click", this._onButtonBackToStart, this), _t.addListener(this._el.button_zoomin, "click", this._onButtonZoomIn, this), _t.addListener(this._el.button_zoomout, "click", this._onButtonZoomOut, this);
      }
    }, {
      key: "_updateDisplay",
      value: function _updateDisplay(t, e, i) {
        t && (this.options.width = t), e && (this.options.height = e);
      }
    }]);

    return Ve;
  }();

  F(Ve, dt, ht);
  var Je = null;

  if (document) {
    var _t9 = document.getElementsByTagName("script");

    _t9 && _t9.length > 0 && (Je = _t9[_t9.length - 1].src);
  }

  var Xe = /*#__PURE__*/function () {
    function Xe(t, e, i) {
      _classCallCheck(this, Xe);

      if (i || (i = {}), this.ready = !1, this._el = {
        container: x(t),
        storyslider: {},
        timenav: {},
        menubar: {}
      }, i.lang && !i.language && (i.language = i.lang), this.language = Ot, this._storyslider = {}, this._timenav = {}, this._menubar = {}, this._loaded = {
        storyslider: !1,
        timenav: !1
      }, this.config = null, this.options = {
        script_path: "https://cdn.knightlab.com/libs/timeline3/latest/js/",
        height: this._el.container.offsetHeight,
        width: this._el.container.offsetWidth,
        debug: !1,
        font: "default",
        is_embed: !1,
        is_full_embed: !1,
        hash_bookmark: !1,
        default_bg_color: {
          r: 255,
          g: 255,
          b: 255
        },
        scale_factor: 2,
        layout: "landscape",
        timenav_position: "bottom",
        optimal_tick_width: 60,
        base_class: "tl-timeline",
        timenav_height: null,
        timenav_height_percentage: 25,
        timenav_mobile_height_percentage: 40,
        timenav_height_min: 175,
        marker_height_min: 30,
        marker_width_min: 100,
        marker_padding: 5,
        start_at_slide: 0,
        start_at_end: !1,
        menubar_height: 0,
        skinny_size: 650,
        medium_size: 800,
        use_bc: !1,
        duration: 1e3,
        ease: st,
        dragging: !0,
        trackResize: !0,
        map_type: "stamen:toner-lite",
        slide_padding_lr: 100,
        slide_default_fade: "0%",
        zoom_sequence: [.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
        language: "en",
        ga_property_id: null,
        track_events: ["back_to_start", "nav_next", "nav_previous", "zoom_in", "zoom_out"],
        theme: null,
        sheets_proxy: "https://sheets-proxy.knightlab.com/proxy/",
        soundcite: !1
      }, this.animator_timenav = null, this.animator_storyslider = null, this.animator_menubar = null, this.message = new Rt(this._el.container, {
        message_class: "tl-message-full"
      }), "string" == typeof i.default_bg_color) {
        var n = j(i.default_bg_color);
        n ? i.default_bg_color = n : (delete i.default_bg_color, O("Invalid default background color. Ignoring."));
      }

      var r, a;
      C(this.options, i), this.options.script_path || (this.options.script_path = this.determineScriptPath()), i.soundcite && this.on("ready", function () {
        O("Loading Soundcite resources "), _e("https://cdn.knightlab.com/libs/soundcite/latest/css/player.css"), pe("https://cdn.knightlab.com/libs/soundcite/latest/js/soundcite.min.js");
      }), this._loadStyles(), document.addEventListener("keydown", (r = this, function (t) {
        if (r.config) {
          var e = t.key,
              i = r._getSlideIndex(self.current_id),
              n = r.config.events.length - 1,
              a = r.config.title ? n + 1 : n;

          "ArrowLeft" == e ? 0 != i && r.goToPrev() : "ArrowRight" == e && i != a && r.goToNext();
        }
      })), window.addEventListener("resize", function (t) {
        this.updateDisplay();
      }.bind(this)), this.options.debug && (a = console.log, I.push(a)), L(this._el.container, "tl-timeline"), this.options.is_embed && L(this._el.container, "tl-timeline-embed"), this.options.is_full_embed && L(this._el.container, "tl-timeline-full-embed"), this._loadLanguage(e);
    }

    _createClass(Xe, [{
      key: "_loadStyles",
      value: function _loadStyles() {
        var t = null,
            e = null;
        if (this.options.font && (0 == this.options.font.indexOf("http") || this.options.font.match(/\.css$/))) t = this.options.font;else if (this.options.font) {
          var _e7 = "../css/fonts/font." + this.options.font.toLowerCase() + ".css";

          t = new URL(_e7, this.options.script_path).toString();
        }
        if (t && _e(t), this.options.theme && (0 == this.options.theme.indexOf("http") || this.options.theme.match(/\.css$/))) e = this.options.theme;else if (this.options.theme) {
          var _t10 = "../css/themes/timeline.theme." + this.options.theme.toLowerCase() + ".css";

          e = new URL(_t10, this.options.script_path).toString();
        }
        e && _e(e);
      }
    }, {
      key: "_loadLanguage",
      value: function _loadLanguage(t) {
        var _this5 = this;

        try {
          var e = this.options.language,
              i = this.options.script_path;
          (function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t, e) {
              var i, _e8;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      i = Ct(t, e);
                      _context.prev = 1;

                      if (It[t]) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 5;
                      return yt(i);

                    case 5:
                      _e8 = _context.sent;
                      It[t] = _e8;

                    case 7:
                      return _context.abrupt("return", new jt(t, e));

                    case 10:
                      _context.prev = 10;
                      _context.t0 = _context["catch"](1);
                      return _context.abrupt("return", (console.log("Error loading language [".concat(i, "] ").concat(_context.t0.statusText)), null));

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[1, 10]]);
            }));

            return function (_x6, _x7) {
              return _ref.apply(this, arguments);
            };
          })()(e, i).then(function (i) {
            i ? (_this5.language = i, _this5.message.setLanguage(_this5.language), _this5.options.language = _this5.language, _this5.showMessage(_this5._("loading_timeline"))) : _this5.showMessage("Error loading ".concat(e)), _this5._initData(t);
          });
        } catch (t) {
          this.showMessage(this._translateError(t));
        }
      }
    }, {
      key: "_initData",
      value: function _initData(t) {
        "string" == typeof t ? ie(t, {
          callback: function (t) {
            this.setConfig(t);
          }.bind(this),
          sheets_proxy: this.options.sheets_proxy
        }) : Vt == t.constructor ? this.setConfig(t) : this.setConfig(new Vt(t));
      }
    }, {
      key: "_translateError",
      value: function _translateError(t) {
        return t.hasOwnProperty("stack") && O(t.stack), t.message_key ? this._(t.message_key) + (t.detail ? " [" + t.detail + "]" : "") : t;
      }
    }, {
      key: "showMessage",
      value: function showMessage(t) {
        this.message ? this.message.updateMessage(t) : (O("No message display available."), O(t));
      }
    }, {
      key: "determineScriptPath",
      value: function determineScriptPath() {
        var t = null;
        if (Je) t = Je;else {
          var _e9 = document.getElementById("timeline-script-tag");

          _e9 && (t = _e9.src);
        }

        if (!t) {
          var _e10 = document.getElementsByTagName("script");

          for (var _i3 = _e10.length - 1; _i3 >= 0; _i3--) {
            if (_e10[_i3].src) {
              t = _e10[_i3].src;
              break;
            }
          }
        }

        return t ? t.substr(0, t.lastIndexOf("/") + 1) : "";
      }
    }, {
      key: "setConfig",
      value: function setConfig(t) {
        if (this.config = t, this.config.isValid() && (this.config.validate(), this._validateOptions()), this.config.isValid()) try {
          "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", this._onDataLoaded.bind(this)) : this._onDataLoaded();
        } catch (t) {
          this.showMessage("<strong>" + this._("error") + ":</strong> " + this._translateError(t));
        } else {
          for (var e = [], i = 0, n = this.config.getErrors(); i < n.length; i++) {
            e.push(this._translateError(n[i]));
          }

          this.showMessage("<strong>" + this._("error") + ":</strong> " + e.join("<br>"));
        }
      }
    }, {
      key: "_onDataLoaded",
      value: function _onDataLoaded() {
        var _this6 = this;

        this.fire("dataloaded"), this._initLayout(), this._initEvents(), this._initAnalytics(), this.message && this.message.hide();
        new IntersectionObserver(function (t, e) {
          t.reduce(function (t, e) {
            return t || e.isIntersecting;
          }, !1) && _this6.updateDisplay();
        }.bind(this)).observe(this._el.container), this.ready = !0, this.fire("ready");
      }
    }, {
      key: "_initLayout",
      value: function _initLayout() {
        this.message.removeFrom(this._el.container), this._el.container.innerHTML = "", "top" == this.options.timenav_position ? (this._el.timenav = T("div", "tl-timenav", this._el.container), this._el.storyslider = T("div", "tl-storyslider", this._el.container)) : (this._el.storyslider = T("div", "tl-storyslider", this._el.container), this._el.timenav = T("div", "tl-timenav", this._el.container)), this._el.menubar = T("div", "tl-menubar", this._el.container), this.options.width = this._el.container.offsetWidth, this.options.height = this._el.container.offsetHeight, this.options.timenav_height = this._calculateTimeNavHeight(this.options.timenav_height), this._timenav = new Ue(this._el.timenav, this.config, this.options, this.language), this._timenav.on("loaded", this._onTimeNavLoaded, this), this._timenav.options.height = this.options.timenav_height, this._timenav.init(), this.options.initial_zoom && this.setZoom(this.options.initial_zoom), this._storyslider = new Ye(this._el.storyslider, this.config, this.options, this.language), this._storyslider.on("loaded", this._onStorySliderLoaded, this), this._storyslider.init(), this._menubar = new Ve(this._el.menubar, this._el.container, this.options), "portrait" == this.options.layout ? this.options.storyslider_height = this.options.height - this.options.timenav_height - 1 : this.options.storyslider_height = this.options.height - 1, this._updateDisplay(this._timenav.options.height, !0, 2e3);
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        this._timenav.on("change", this._onTimeNavChange, this), this._timenav.on("zoomtoggle", this._onZoomToggle, this), this._storyslider.on("change", this._onSlideChange, this), this._storyslider.on("colorchange", this._onColorChange, this), this._storyslider.on("nav_next", this._onStorySliderNext, this), this._storyslider.on("nav_previous", this._onStorySliderPrevious, this), this._menubar.on("zoom_in", this._onZoomIn, this), this._menubar.on("zoom_out", this._onZoomOut, this), this._menubar.on("back_to_start", this._onBackToStart, this);
      }
    }, {
      key: "_onColorChange",
      value: function _onColorChange(t) {
        this.fire("color_change", {
          unique_id: this.current_id
        }, this);
      }
    }, {
      key: "_onSlideChange",
      value: function _onSlideChange(t) {
        this.current_id != t.unique_id && (this.current_id = t.unique_id, this._timenav.goToId(this.current_id), this._onChange(t));
      }
    }, {
      key: "_onTimeNavChange",
      value: function _onTimeNavChange(t) {
        this.current_id != t.unique_id && (this.current_id = t.unique_id, this._storyslider.goToId(this.current_id), this._onChange(t));
      }
    }, {
      key: "_onZoomToggle",
      value: function _onZoomToggle(t) {
        "in" == t.zoom ? this._menubar.toogleZoomIn(t.show) : "out" == t.zoom && this._menubar.toogleZoomOut(t.show);
      }
    }, {
      key: "_onChange",
      value: function _onChange(t) {
        this.fire("change", {
          unique_id: this.current_id
        }, this), this.options.hash_bookmark && this.current_id && this._updateHashBookmark(this.current_id);
      }
    }, {
      key: "_onBackToStart",
      value: function _onBackToStart(t) {
        this._storyslider.goTo(0), this.fire("back_to_start", {
          unique_id: this.current_id
        }, this);
      }
    }, {
      key: "_onZoomIn",
      value: function _onZoomIn(t) {
        this._timenav.zoomIn(), this.fire("zoom_in", {
          zoom_level: this._timenav.options.scale_factor
        }, this);
      }
    }, {
      key: "_onZoomOut",
      value: function _onZoomOut(t) {
        this._timenav.zoomOut(), this.fire("zoom_out", {
          zoom_level: this._timenav.options.scale_factor
        }, this);
      }
    }, {
      key: "_onTimeNavLoaded",
      value: function _onTimeNavLoaded() {
        this._loaded.timenav = !0, this._onLoaded();
      }
    }, {
      key: "_onStorySliderLoaded",
      value: function _onStorySliderLoaded() {
        this._loaded.storyslider = !0, this._onLoaded();
      }
    }, {
      key: "_onStorySliderNext",
      value: function _onStorySliderNext(t) {
        this.fire("nav_next", t);
      }
    }, {
      key: "_onStorySliderPrevious",
      value: function _onStorySliderPrevious(t) {
        this.fire("nav_previous", t);
      }
    }, {
      key: "_updateDisplay",
      value: function _updateDisplay(t, e, i) {
        var n,
            r = this.options.duration,
            a = this.options.base_class,
            o = 0;
        i && (r = i), this.options.width = this._el.container.offsetWidth, this.options.height = this._el.container.offsetHeight, this.options.width <= this.options.skinny_size ? (a += " tl-skinny", this.options.layout = "portrait") : this.options.width <= this.options.medium_size ? (a += " tl-medium", this.options.layout = "landscape") : this.options.layout = "landscape", w && (this.options.layout = (n = "portrait", window.innerWidth > window.innerHeight && (n = "landscape"), Math.abs(window.orientation), n)), c ? (a += " tl-mobile", this.options.timenav_height = this._calculateTimeNavHeight(t, this.options.timenav_mobile_height_percentage)) : this.options.timenav_height = this._calculateTimeNavHeight(t), "portrait" == this.options.layout ? a += " tl-layout-portrait" : a += " tl-layout-landscape", this.options.storyslider_height = this.options.height - this.options.timenav_height, o = "top" == this.options.timenav_position ? Math.ceil(this.options.timenav_height) / 2 - this._el.menubar.offsetHeight / 2 - 19.5 : Math.round(this.options.storyslider_height + 1 + Math.ceil(this.options.timenav_height) / 2 - this._el.menubar.offsetHeight / 2 - 17.5), e ? (this._el.timenav.style.height = Math.ceil(this.options.timenav_height) + "px", this.animator_storyslider && this.animator_storyslider.stop(), this.animator_storyslider = ct(this._el.storyslider, {
          height: this.options.storyslider_height + "px",
          duration: r / 2,
          easing: ot
        }), this.animator_menubar && this.animator_menubar.stop(), this.animator_menubar = ct(this._el.menubar, {
          top: o + "px",
          duration: r / 2,
          easing: ot
        })) : (this._el.timenav.style.height = Math.ceil(this.options.timenav_height) + "px", this._el.storyslider.style.height = this.options.storyslider_height + "px", this._el.menubar.style.top = o + "px"), this.message && this.message.updateDisplay(this.options.width, this.options.height), this._timenav.updateDisplay(this.options.width, this.options.timenav_height, e), this._storyslider.updateDisplay(this.options.width, this.options.storyslider_height, e, this.options.layout), "rtl" == this.options.language.direction && (a += " tl-rtl"), this._el.container.className = a;
      }
    }, {
      key: "_calculateTimeNavHeight",
      value: function _calculateTimeNavHeight(t, e) {
        var i = 0;
        return t ? i = t : (this.options.timenav_height_percentage || e) && (i = e ? Math.round(this.options.height / 100 * e) : Math.round(this.options.height / 100 * this.options.timenav_height_percentage)), this._timenav.ready && this.options.timenav_height_min < this._timenav.getMinimumHeight() && (this.options.timenav_height_min = this._timenav.getMinimumHeight()), i < this.options.timenav_height_min && (i = this.options.timenav_height_min), i -= 2 * this.options.marker_padding;
      }
    }, {
      key: "_validateOptions",
      value: function _validateOptions() {
        for (var t = ["timenav_height", "timenav_height_min", "marker_height_min", "marker_width_min", "marker_padding", "start_at_slide", "slide_padding_lr"], e = 0; e < t.length; e++) {
          var i = t[e],
              n = this.options[i];

          var _r2 = !0;

          "number" == typeof n ? _r2 = n == parseInt(n) : "string" == typeof n && (_r2 = n.match(/^\s*(\-?\d+)?\s*$/)), _r2 || this.config.logError({
            message_key: "invalid_integer_option",
            detail: i
          });
        }
      }
    }, {
      key: "_getSlideIndex",
      value: function _getSlideIndex(t) {
        if (this.config) {
          if (this.config.title && this.config.title.unique_id == t) return 0;

          for (var e = 0; e < this.config.events.length; e++) {
            if (t == this.config.events[e].unique_id) return this.config.title ? e + 1 : e;
          }
        }

        return -1;
      }
    }, {
      key: "_getEventIndex",
      value: function _getEventIndex(t) {
        for (var e = 0; e < this.config.events.length; e++) {
          if (t == this.config.events[e].unique_id) return e;
        }

        return -1;
      }
    }, {
      key: "_onLoaded",
      value: function _onLoaded() {
        if (this._loaded.storyslider && this._loaded.timenav) if (this.fire("loaded", this.config), this.options.hash_bookmark) {
          "" != window.location.hash ? this.goToId(window.location.hash.replace("#event-", "")) : this._updateHashBookmark(this.current_id);

          var _t11 = this;

          window.addEventListener("hashchange", function () {
            0 == window.location.hash.indexOf("#event-") && _t11.goToId(window.location.hash.replace("#event-", ""));
          }, !1);
        } else null != (t = this.options.start_at_end) && (1 == t || "true" == String(t).toLowerCase() || 1 == Number(t)) || this.options.start_at_slide > this.config.events.length ? this.goToEnd() : this.goTo(this.options.start_at_slide);
        var t;
      }
    }, {
      key: "_updateHashBookmark",
      value: function _updateHashBookmark(t) {
        if (t) {
          var e = "#event-" + t.toString();
          window.history.replaceState(null, "Browsing TimelineJS", e), this.fire("hash_updated", {
            unique_id: this.current_id,
            hashbookmark: "#event-" + t.toString()
          }, this);
        }
      }
    }, {
      key: "zoomIn",
      value: function zoomIn() {
        this._timenav.zoomIn();
      }
    }, {
      key: "zoomOut",
      value: function zoomOut() {
        this._timenav.zoomOut();
      }
    }, {
      key: "setZoom",
      value: function setZoom(t) {
        this._timenav.setZoom(t);
      }
    }, {
      key: "goToId",
      value: function goToId(t) {
        this.current_id != t && (this.current_id = t, this._timenav.goToId(this.current_id), this._storyslider.goToId(this.current_id, !1, !0), this.fire("change", {
          unique_id: this.current_id
        }, this));
      }
    }, {
      key: "goTo",
      value: function goTo(t) {
        this.config.title ? 0 == t ? this.goToId(this.config.title.unique_id) : this.goToId(this.config.events[t - 1].unique_id) : this.goToId(this.config.events[t].unique_id);
      }
    }, {
      key: "goToStart",
      value: function goToStart() {
        this.goTo(0);
      }
    }, {
      key: "goToEnd",
      value: function goToEnd() {
        var t = this.config.events.length - 1;
        this.goTo(this.config.title ? t + 1 : t);
      }
    }, {
      key: "goToPrev",
      value: function goToPrev() {
        this.goTo(this._getSlideIndex(this.current_id) - 1);
      }
    }, {
      key: "goToNext",
      value: function goToNext() {
        this.goTo(this._getSlideIndex(this.current_id) + 1);
      }
    }, {
      key: "add",
      value: function add(t) {
        var e = this.config.addEvent(t),
            i = this._getEventIndex(e),
            n = this.config.events[i];

        this._storyslider.createSlide(n, this.config.title ? i + 1 : i), this._storyslider._updateDrawSlides(), this._timenav.createMarker(n, i), this._timenav._updateDrawTimeline(!1), this.fire("added", {
          unique_id: e
        });
      }
    }, {
      key: "remove",
      value: function remove(t) {
        if (t >= 0 && t < this.config.events.length) {
          this.config.events[t].unique_id == this.current_id && (t < this.config.events.length - 1 ? this.goTo(t + 1) : this.goTo(t - 1));
          var e = this.config.events.splice(t, 1);
          delete this.config.event_dict[e[0].unique_id], this._storyslider.destroySlide(this.config.title ? t + 1 : t), this._storyslider._updateDrawSlides(), this._timenav.destroyMarker(t), this._timenav._updateDrawTimeline(!1), this.fire("removed", {
            unique_id: e[0].unique_id
          });
        }
      }
    }, {
      key: "removeId",
      value: function removeId(t) {
        this.remove(this._getEventIndex(t));
      }
    }, {
      key: "getData",
      value: function getData(t) {
        if (this.config.title) {
          if (0 == t) return this.config.title;
          if (t > 0 && t <= this.config.events.length) return this.config.events[t - 1];
        } else if (t >= 0 && t < this.config.events.length) return this.config.events[t];

        return null;
      }
    }, {
      key: "getDataById",
      value: function getDataById(t) {
        return this.getData(this._getSlideIndex(t));
      }
    }, {
      key: "getSlide",
      value: function getSlide(t) {
        return t >= 0 && t < this._storyslider._slides.length ? this._storyslider._slides[t] : null;
      }
    }, {
      key: "getSlideById",
      value: function getSlideById(t) {
        return this.getSlide(this._getSlideIndex(t));
      }
    }, {
      key: "getCurrentSlide",
      value: function getCurrentSlide() {
        return this.getSlideById(this.current_id);
      }
    }, {
      key: "updateDisplay",
      value: function updateDisplay() {
        this.ready ? this._updateDisplay() : O("updateDisplay called but timeline is not in ready state");
      }
    }, {
      key: "_initGoogleAnalytics",
      value: function _initGoogleAnalytics() {
        var t, e, i, n, r, a;
        t = window, e = document, i = "script", n = "ga", t.GoogleAnalyticsObject = n, t.ga = t.ga || function () {
          (t.ga.q = t.ga.q || []).push(arguments);
        }, t.ga.l = 1 * new Date(), r = e.createElement(i), a = e.getElementsByTagName(i)[0], r.async = 1, r.src = "//www.google-analytics.com/analytics.js", a.parentNode.insertBefore(r, a), ga("create", this.options.ga_property_id, "auto"), ga("set", "anonymizeIp", !0);
      }
    }, {
      key: "_initAnalytics",
      value: function _initAnalytics() {
        if (null !== this.options.ga_property_id) {
          this._initGoogleAnalytics(), ga("send", "pageview");
          var t = this.options.track_events;

          for (var _i4 = 0; _i4 < t.length; _i4++) {
            var e = t[_i4];
            this.addEventListener(e, function (t) {
              ga("send", "event", t.type, "clicked");
            });
          }
        }
      }
    }]);

    return Xe;
  }();

  F(Xe, zt, ht), i(1);
}]);

exports.TL = TL;
//# sourceMappingURL=timeline.js.map
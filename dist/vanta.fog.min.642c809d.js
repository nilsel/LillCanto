// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/vanta.fog.min.js":[function(require,module,exports) {
var define;
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports._vantaEffect = t() : e._vantaEffect = t();
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function n(i) {
      if (t[i]) return t[i].exports;
      var o = t[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: i
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) {
        n.d(i, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
      return i;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 9);
  }([function (e, t, n) {
    "use strict";

    function i(e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }

      return e;
    }

    function o() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 600;
    }

    n.d(t, "c", function () {
      return i;
    }), n.d(t, "d", function () {
      return o;
    }), n.d(t, "h", function () {
      return s;
    }), n.d(t, "g", function () {
      return r;
    }), n.d(t, "f", function () {
      return a;
    }), n.d(t, "e", function () {
      return h;
    }), n.d(t, "a", function () {
      return u;
    }), n.d(t, "b", function () {
      return l;
    }), Number.prototype.clamp = function (e, t) {
      return Math.min(Math.max(this, e), t);
    };

    var s = function s(e) {
      return e[Math.floor(Math.random() * e.length)];
    };

    function r(e, t) {
      return null == e && (e = 0), null == t && (t = 1), e + Math.random() * (t - e);
    }

    function a(e, t) {
      return null == e && (e = 0), null == t && (t = 1), Math.floor(e + Math.random() * (t - e + 1));
    }

    var h = function h(e) {
      return document.querySelector(e);
    };

    var u = function u(e) {
      return "number" == typeof e ? "#" + ("00000" + e.toString(16)).slice(-6) : e;
    },
        l = function l(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = u(e),
          i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),
          o = i ? {
        r: parseInt(i[1], 16),
        g: parseInt(i[2], 16),
        b: parseInt(i[3], 16)
      } : null;
      return "rgba(" + o.r + "," + o.g + "," + o.b + "," + t + ")";
    };
  }, function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    });
    var i = n(0);
    var o = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)),
        s = o && window.THREE || {};
    o && !window.VANTA && (window.VANTA = {});
    var r = o && window.VANTA || {};
    r.register = function (e, t) {
      return r[e] = function (e) {
        return new t(e);
      };
    }, r.version = "0.5.1";

    var a = function a() {
      return Array.prototype.unshift.call(arguments, "[VANTA]"), console.error.apply(this, arguments);
    };

    r.VantaBase =
    /*#__PURE__*/
    function () {
      function _class() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, _class);

        if (!o) return !1;
        var t, n, h, u;
        if (r.current = this, this.windowMouseMoveWrapper = this.windowMouseMoveWrapper.bind(this), this.windowTouchWrapper = this.windowTouchWrapper.bind(this), this.resize = this.resize.bind(this), this.animationLoop = this.animationLoop.bind(this), this.restart = this.restart.bind(this), this.options = Object(i.c)({}, this.defaultOptions), e instanceof HTMLElement || "string" == typeof e ? Object(i.c)(this.options, {
          el: e
        }) : Object(i.c)(this.options, e), this.el = this.options.el, null == this.el) a('Instance needs "el" param!');else if (!(this.options.el instanceof HTMLElement || (u = this.el, this.el = Object(i.e)(u), this.el))) return void a("Cannot find element", u);

        for (h = 0; h < this.el.children.length; h++) {
          t = this.el.children[h], "static" === getComputedStyle(t).position && (t.style.position = "relative"), "auto" === getComputedStyle(t).zIndex && (t.style.zIndex = 1);
        }

        "static" === getComputedStyle(this.el).position && (this.el.style.position = "relative"), this.initThree(), this.setSize(), this.uniforms = {
          u_time: {
            type: "f",
            value: 1
          },
          u_resolution: {
            type: "v2",
            value: new s.Vector2(1, 1)
          },
          u_mouse: {
            type: "v2",
            value: new s.Vector2(0, 0)
          }
        };

        try {
          this.init();
        } catch (e) {
          return n = e, a("Init error"), a(n), this.el.removeChild(this.renderer.domElement), void (this.options.backgroundColor && (console.log("[VANTA] Falling back to backgroundColor"), this.el.style.background = Object(i.a)(this.options.backgroundColor)));
        }

        window.addEventListener("resize", this.resize), this.resize(), this.animationLoop(), window.addEventListener("scroll", this.windowMouseMoveWrapper), window.addEventListener("mousemove", this.windowMouseMoveWrapper), window.addEventListener("touchstart", this.windowTouchWrapper), window.addEventListener("touchmove", this.windowTouchWrapper);
      }

      _createClass(_class, [{
        key: "applyCanvasStyles",
        value: function applyCanvasStyles(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          Object(i.c)(e.style, {
            position: "absolute",
            zIndex: 0,
            top: 0,
            left: 0,
            background: ""
          }), Object(i.c)(e.style, t), e.classList.add("vanta-canvas");
        }
      }, {
        key: "initThree",
        value: function initThree() {
          s.WebGLRenderer ? (this.renderer = new s.WebGLRenderer({
            alpha: !0,
            antialias: !0
          }), this.el.appendChild(this.renderer.domElement), this.applyCanvasStyles(this.renderer.domElement), isNaN(this.options.backgroundAlpha) && (this.options.backgroundAlpha = 1), this.scene = new s.Scene()) : console.warn("[VANTA] No THREE defined on window");
        }
      }, {
        key: "windowMouseMoveWrapper",
        value: function windowMouseMoveWrapper(e) {
          var t = this.renderer.domElement.getBoundingClientRect(),
              n = e.clientX - t.left,
              i = e.clientY - t.top;
          n >= 0 && i >= 0 && n <= t.width && i <= t.height && (this.mouseX = n, this.mouseY = i, this.options.mouseEase || this.triggerMouseMove(n, i));
        }
      }, {
        key: "windowTouchWrapper",
        value: function windowTouchWrapper(e) {
          if (1 === e.touches.length) {
            var _t = this.renderer.domElement.getBoundingClientRect(),
                _n = e.touches[0].clientX - _t.left,
                _i = e.touches[0].clientY - _t.top;

            _n >= 0 && _i >= 0 && _n <= _t.width && _i <= _t.height && (this.mouseX = _n, this.mouseY = _i, this.options.mouseEase || this.triggerMouseMove(_n, _i));
          }
        }
      }, {
        key: "triggerMouseMove",
        value: function triggerMouseMove(e, t) {
          this.uniforms && (this.uniforms.u_mouse.value.x = e / this.scale, this.uniforms.u_mouse.value.y = t / this.scale);
          var n = e / this.width,
              i = t / this.height;
          "function" == typeof this.onMouseMove && this.onMouseMove(n, i);
        }
      }, {
        key: "setSize",
        value: function setSize() {
          this.scale || (this.scale = 1), Object(i.d)() && this.options.scaleMobile ? this.scale = this.options.scaleMobile : this.options.scale && (this.scale = this.options.scale), this.width = this.el.offsetWidth || window.innerWidth, this.height = this.el.offsetHeight || window.innerHeight;
        }
      }, {
        key: "resize",
        value: function resize() {
          var e, t;
          this.setSize(), null != (e = this.camera) && (e.aspect = this.width / this.height), null != (t = this.camera) && "function" == typeof t.updateProjectionMatrix && t.updateProjectionMatrix(), this.renderer && (this.renderer.setSize(this.width, this.height), this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)), "function" == typeof this.onResize && this.onResize();
        }
      }, {
        key: "animationLoop",
        value: function animationLoop() {
          var e, t, n, i, o, s;
          return this.t || (this.t = 0), this.t += 1, this.t2 || (this.t2 = 0), this.t2 += this.options.speed || 1, this.uniforms && (this.uniforms.u_time.value = .016667 * this.t2), e = this.el.offsetHeight, t = this.el.getBoundingClientRect(), s = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop, i = (o = t.top + s) - window.innerHeight, n = o + e, this.options.mouseEase && (this.mouseEaseX = this.mouseEaseX || this.mouseX || 0, this.mouseEaseY = this.mouseEaseY || this.mouseY || 0, Math.abs(this.mouseEaseX - this.mouseX) + Math.abs(this.mouseEaseY - this.mouseY) > .1 && (this.mouseEaseX = this.mouseEaseX + .05 * (this.mouseX - this.mouseEaseX), this.mouseEaseY = this.mouseEaseY + .05 * (this.mouseY - this.mouseEaseY), this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))), i <= s && s <= n && ("function" == typeof this.onUpdate && this.onUpdate(), this.scene && this.camera && (this.renderer.render(this.scene, this.camera), this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundAlpha)), this.fps && this.fps.update && this.fps.update()), this.req = window.requestAnimationFrame(this.animationLoop);
        }
      }, {
        key: "restart",
        value: function restart() {
          if (this.scene) for (; this.scene.children.length;) {
            this.scene.remove(this.scene.children[0]);
          }
          "function" == typeof this.onRestart && this.onRestart(), this.init();
        }
      }, {
        key: "init",
        value: function init() {
          "function" == typeof this.onInit && this.onInit();
        }
      }, {
        key: "destroy",
        value: function destroy() {
          "function" == typeof this.onDestroy && this.onDestroy(), window.removeEventListener("touchstart", this.windowTouchWrapper), window.removeEventListener("touchmove", this.windowTouchWrapper), window.removeEventListener("scroll", this.windowMouseMoveWrapper), window.removeEventListener("mousemove", this.windowMouseMoveWrapper), window.removeEventListener("resize", this.resize), window.cancelAnimationFrame(this.req), this.renderer && (this.el.removeChild(this.renderer.domElement), this.renderer = null, this.scene = null);
        }
      }]);

      return _class;
    }(), t.b = r.VantaBase;
  }, function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return s;
    });
    var i = n(1),
        o = n(0);
    n.d(t, "a", function () {
      return i.a;
    }), "object" == (typeof THREE === "undefined" ? "undefined" : _typeof(THREE)) && (THREE.Color.prototype.toVector = function () {
      return new THREE.Vector3(this.r, this.g, this.b);
    });

    var s =
    /*#__PURE__*/
    function (_i$b) {
      _inherits(s, _i$b);

      function s(e) {
        var _this;

        _classCallCheck(this, s);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), _this.mode = "shader", _this.updateUniforms = _this.updateUniforms.bind(_assertThisInitialized(_this));
        return _this;
      }

      _createClass(s, [{
        key: "initBasicShader",
        value: function initBasicShader() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.fragmentShader;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.vertexShader;
          var n, i, o;
          return t || (t = "uniform float u_time;\nuniform vec2 u_resolution;\nvoid main() {\n  gl_Position = vec4( position, 1.0 );\n}"), this.updateUniforms(), "function" == typeof this.valuesChanger && this.valuesChanger(), n = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: t,
            fragmentShader: e
          }), (o = this.options.texturePath) && (this.uniforms.u_tex = {
            type: "t",
            value: new THREE.TextureLoader().load(o)
          }), i = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), n), this.scene.add(i), this.camera = new THREE.Camera(), this.camera.position.z = 1;
        }
      }, {
        key: "updateUniforms",
        value: function updateUniforms() {
          var e, t, n, i;

          for (e in t = {}, n = this.options) {
            i = n[e], -1 !== e.toLowerCase().indexOf("color") ? t[e] = {
              type: "v3",
              value: new THREE.Color(i).toVector()
            } : "number" == typeof i && (t[e] = {
              type: "f",
              value: i
            });
          }

          return Object(o.c)(this.uniforms, t);
        }
      }, {
        key: "init",
        value: function init() {
          _get(_getPrototypeOf(s.prototype), "init", this).call(this), this.fragmentShader && this.initBasicShader();
        }
      }, {
        key: "resize",
        value: function resize() {
          _get(_getPrototypeOf(s.prototype), "resize", this).call(this), this.uniforms.u_resolution.value.x = this.width / this.scale, this.uniforms.u_resolution.value.y = this.height / this.scale;
        }
      }]);

      return s;
    }(i.b);
  },,,,,,, function (e, t, n) {
    "use strict";

    n.r(t);
    var i = n(2);

    var o =
    /*#__PURE__*/
    function (_i$b2) {
      _inherits(o, _i$b2);

      function o() {
        _classCallCheck(this, o);

        return _possibleConstructorReturn(this, _getPrototypeOf(o).apply(this, arguments));
      }

      return o;
    }(i.b);

    t.default = i.a.register("FOG", o), o.prototype.defaultOptions = {
      highlightColor: 16761600,
      midtoneColor: 16719616,
      lowlightColor: 2949375,
      baseColor: 16772075,
      blurFactor: .6,
      speed: 1,
      zoom: 1,
      scale: 2,
      scaleMobile: 4
    }, o.prototype.fragmentShader = "uniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\n\nuniform float blurFactor;\nuniform vec3 baseColor;\nuniform vec3 lowlightColor;\nuniform vec3 midtoneColor;\nuniform vec3 highlightColor;\nuniform float zoom;\n\nfloat random (in vec2 _st) {\n  return fract(sin(dot(_st.xy,\n                        vec2(12.9898,78.233)))*\n      43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise (in vec2 _st) {\n  vec2 i = floor(_st);\n  vec2 f = fract(_st);\n\n  // Four corners in 2D of a tile\n  float a = random(i);\n  float b = random(i + vec2(1.0, 0.0));\n  float c = random(i + vec2(0.0, 1.0));\n  float d = random(i + vec2(1.0, 1.0));\n\n  vec2 u = f * f * (3.0 - 2.0 * f);\n\n  return mix(a, b, u.x) +\n          (c - a)* u.y * (1.0 - u.x) +\n          (d - b) * u.x * u.y;\n}\n\n#define NUM_OCTAVES 6\n\nfloat fbm ( in vec2 _st) {\n  float v = 0.0;\n  float a = blurFactor;\n  vec2 shift = vec2(100.0);\n  // Rotate to reduce axial bias\n  mat2 rot = mat2(cos(0.5), sin(0.5),\n                  -sin(0.5), cos(0.50));\n  for (int i = 0; i < NUM_OCTAVES; ++i) {\n      v += a * noise(_st);\n      _st = rot * _st * 2.0 + shift;\n      a *= (1. - blurFactor);\n  }\n  return v;\n}\n\nvoid main() {\n  vec2 st = gl_FragCoord.xy / u_resolution.xy*3.;\n  st.x *= 0.7 * u_resolution.x / u_resolution.y ; // Still keep it more landscape than square\n  st *= zoom;\n\n  // st += st * abs(sin(u_time*0.1)*3.0);\n  vec3 color = vec3(0.0);\n\n  vec2 q = vec2(0.);\n  q.x = fbm( st + 0.00*u_time);\n  q.y = fbm( st + vec2(1.0));\n\n  vec2 dir = vec2(0.15,0.126);\n  vec2 r = vec2(0.);\n  r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ dir.x*u_time );\n  r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ dir.y*u_time);\n\n  float f = fbm(st+r);\n\n  color = mix(baseColor,\n              lowlightColor,\n              clamp((f*f)*4.0,0.0,1.0));\n\n  color = mix(color,\n              midtoneColor,\n              clamp(length(q),0.0,1.0));\n\n  color = mix(color,\n              highlightColor,\n              clamp(length(r.x),0.0,1.0));\n\n  vec3 finalColor = mix(baseColor, color, f*f*f+.6*f*f+.5*f);\n  gl_FragColor = vec4(finalColor,1.0);\n}\n";
  }]);
});
},{}],"../../../.nvm/versions/node/v10.15.0/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52838" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.nvm/versions/node/v10.15.0/lib/node_modules/parcel/src/builtins/hmr-runtime.js","js/vanta.fog.min.js"], null)
//# sourceMappingURL=/vanta.fog.min.642c809d.js.map
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.Sweetalert2 = e());
})(this, function () {
  "use strict";
  function r(t) {
    return (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(t);
  }
  function o(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(t, o.key, o);
    }
  }
  function a(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function u() {
    return (u =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }).apply(this, arguments);
  }
  function s(t) {
    return (s = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function c(t, e) {
    return (c =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function l(t, e, n) {
    return (l = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Reflect.construct
      : function (t, e, n) {
          var o = [null];
          o.push.apply(o, e);
          var i = new (Function.bind.apply(t, o))();
          return n && c(i, n.prototype), i;
        }).apply(null, arguments);
  }
  function d(t, e) {
    return !e || ("object" != typeof e && "function" != typeof e)
      ? (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        })(t)
      : e;
  }
  function p(t, e, n) {
    return (p =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, n) {
            var o = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = s(t));

              );
              return t;
            })(t, e);
            if (o) {
              var i = Object.getOwnPropertyDescriptor(o, e);
              return i.get ? i.get.call(n) : i.value;
            }
          })(t, e, n || t);
  }
  function f(e) {
    return Object.keys(e).map(function (t) {
      return e[t];
    });
  }
  function m(t) {
    return Array.prototype.slice.call(t);
  }
  function h(t) {
    console.error("".concat(D, " ").concat(t));
  }
  function g(t, e) {
    !(function (t) {
      -1 === U.indexOf(t) && (U.push(t), N(t));
    })(
      '"'
        .concat(
          t,
          '" is deprecated and will be removed in the next major release. Please use "'
        )
        .concat(e, '" instead.')
    );
  }
  function v(t) {
    return t && Promise.resolve(t) === t;
  }
  function b(t) {
    return (
      t instanceof Element ||
      (function (t) {
        return "object" === r(t) && t.jquery;
      })(t)
    );
  }
  function t(t) {
    var e = {};
    for (var n in t) e[t[n]] = "swal2-" + t[n];
    return e;
  }
  function y() {
    return document.body.querySelector("." + z.container);
  }
  function w(t) {
    var e = y();
    return e ? e.querySelector(t) : null;
  }
  function e(t) {
    return w("." + t);
  }
  function C() {
    return e(z.popup);
  }
  function n() {
    var t = C();
    return m(t.querySelectorAll("." + z.icon));
  }
  function k() {
    var t = n().filter(function (t) {
      return dt(t);
    });
    return t.length ? t[0] : null;
  }
  function x() {
    return e(z.title);
  }
  function P() {
    return e(z.content);
  }
  function A() {
    return e(z.image);
  }
  function B() {
    return e(z["progress-steps"]);
  }
  function S() {
    return e(z["validation-message"]);
  }
  function E() {
    return w("." + z.actions + " ." + z.confirm);
  }
  function T() {
    return w("." + z.actions + " ." + z.cancel);
  }
  function L() {
    return e(z.actions);
  }
  function O() {
    return e(z.header);
  }
  function M() {
    return e(z.footer);
  }
  function H() {
    return e(z["timer-progress-bar"]);
  }
  function j() {
    return e(z.close);
  }
  function V() {
    var t = m(
        C().querySelectorAll(
          '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
        )
      ).sort(function (t, e) {
        return (
          (t = parseInt(t.getAttribute("tabindex"))),
          (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0
        );
      }),
      e = m(
        C().querySelectorAll(
          '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
        )
      ).filter(function (t) {
        return "-1" !== t.getAttribute("tabindex");
      });
    return (function (t) {
      for (var e = [], n = 0; n < t.length; n++)
        -1 === e.indexOf(t[n]) && e.push(t[n]);
      return e;
    })(t.concat(e)).filter(function (t) {
      return dt(t);
    });
  }
  function I() {
    return !K() && !document.body.classList.contains(z["no-backdrop"]);
  }
  function q(t, e) {
    return t.classList.contains(e);
  }
  function R(t, e, n) {
    if (
      ((function (e) {
        m(e.classList).forEach(function (t) {
          -1 === f(z).indexOf(t) &&
            -1 === f(W).indexOf(t) &&
            e.classList.remove(t);
        });
      })(t),
      e && e[n])
    ) {
      if ("string" != typeof e[n] && !e[n].forEach)
        return N(
          "Invalid type of customClass."
            .concat(n, '! Expected string or iterable object, got "')
            .concat(r(e[n]), '"')
        );
      st(t, e[n]);
    }
  }
  var D = "SweetAlert2:",
    N = function (t) {
      console.warn("".concat(D, " ").concat(t));
    },
    U = [],
    F = function (t) {
      return "function" == typeof t ? t() : t;
    },
    _ = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer",
    }),
    z = t([
      "container",
      "shown",
      "height-auto",
      "iosfix",
      "popup",
      "modal",
      "no-backdrop",
      "toast",
      "toast-shown",
      "toast-column",
      "show",
      "hide",
      "close",
      "title",
      "header",
      "content",
      "actions",
      "confirm",
      "cancel",
      "footer",
      "icon",
      "icon-content",
      "image",
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "label",
      "textarea",
      "inputerror",
      "validation-message",
      "progress-steps",
      "active-progress-step",
      "progress-step",
      "progress-step-line",
      "loading",
      "styled",
      "top",
      "top-start",
      "top-end",
      "top-left",
      "top-right",
      "center",
      "center-start",
      "center-end",
      "center-left",
      "center-right",
      "bottom",
      "bottom-start",
      "bottom-end",
      "bottom-left",
      "bottom-right",
      "grow-row",
      "grow-column",
      "grow-fullscreen",
      "rtl",
      "timer-progress-bar",
    ]),
    W = t(["success", "warning", "info", "question", "error"]),
    K = function () {
      return document.body.classList.contains(z["toast-shown"]);
    },
    Y = { previousBodyPadding: null };
  function Z(t, e) {
    if (!e) return null;
    switch (e) {
      case "select":
      case "textarea":
      case "file":
        return lt(t, z[e]);
      case "checkbox":
        return t.querySelector(".".concat(z.checkbox, " input"));
      case "radio":
        return (
          t.querySelector(".".concat(z.radio, " input:checked")) ||
          t.querySelector(".".concat(z.radio, " input:first-child"))
        );
      case "range":
        return t.querySelector(".".concat(z.range, " input"));
      default:
        return lt(t, z.input);
    }
  }
  function Q(t) {
    if ((t.focus(), "file" !== t.type)) {
      var e = t.value;
      (t.value = ""), (t.value = e);
    }
  }
  function $(t, e, n) {
    t &&
      e &&
      ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)),
      e.forEach(function (e) {
        t.forEach
          ? t.forEach(function (t) {
              n ? t.classList.add(e) : t.classList.remove(e);
            })
          : n
          ? t.classList.add(e)
          : t.classList.remove(e);
      }));
  }
  function J(t, e, n) {
    n || 0 === parseInt(n)
      ? (t.style[e] = "number" == typeof n ? n + "px" : n)
      : t.style.removeProperty(e);
  }
  function X(t, e) {
    var n = 1 < arguments.length && void 0 !== e ? e : "flex";
    (t.style.opacity = ""), (t.style.display = n);
  }
  function G(t) {
    (t.style.opacity = ""), (t.style.display = "none");
  }
  function tt(t, e, n) {
    e ? X(t, n) : G(t);
  }
  function et(t) {
    var e = window.getComputedStyle(t),
      n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
      o = parseFloat(e.getPropertyValue("transition-duration") || "0");
    return 0 < n || 0 < o;
  }
  function nt(t) {
    var e = H();
    dt(e) &&
      ((e.style.transition = "width ".concat(t / 1e3, "s linear")),
      (e.style.width = "0%"));
  }
  function ot() {
    return "undefined" == typeof window || "undefined" == typeof document;
  }
  function it(t) {
    Qe.isVisible() && ut !== t.target.value && Qe.resetValidationMessage(),
      (ut = t.target.value);
  }
  function rt(t, e) {
    t instanceof HTMLElement
      ? e.appendChild(t)
      : "object" === r(t)
      ? mt(e, t)
      : t && (e.innerHTML = t);
  }
  function at(t, e) {
    var n = L(),
      o = E(),
      i = T();
    e.showConfirmButton || e.showCancelButton || G(n),
      R(n, e.customClass, "actions"),
      gt(o, "confirm", e),
      gt(i, "cancel", e),
      e.buttonsStyling
        ? (function (t, e, n) {
            st([t, e], z.styled),
              n.confirmButtonColor &&
                (t.style.backgroundColor = n.confirmButtonColor);
            n.cancelButtonColor &&
              (e.style.backgroundColor = n.cancelButtonColor);
            var o = window
              .getComputedStyle(t)
              .getPropertyValue("background-color");
            (t.style.borderLeftColor = o), (t.style.borderRightColor = o);
          })(o, i, e)
        : (ct([o, i], z.styled),
          (o.style.backgroundColor =
            o.style.borderLeftColor =
            o.style.borderRightColor =
              ""),
          (i.style.backgroundColor =
            i.style.borderLeftColor =
            i.style.borderRightColor =
              "")),
      e.reverseButtons && o.parentNode.insertBefore(i, o);
  }
  var ut,
    st = function (t, e) {
      $(t, e, !0);
    },
    ct = function (t, e) {
      $(t, e, !1);
    },
    lt = function (t, e) {
      for (var n = 0; n < t.childNodes.length; n++)
        if (q(t.childNodes[n], e)) return t.childNodes[n];
    },
    dt = function (t) {
      return !(
        !t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
      );
    },
    pt = '\n <div aria-labelledby="'
      .concat(z.title, '" aria-describedby="')
      .concat(z.content, '" class="')
      .concat(z.popup, '" tabindex="-1">\n   <div class="')
      .concat(z.header, '">\n     <ul class="')
      .concat(z["progress-steps"], '"></ul>\n     <div class="')
      .concat(z.icon, " ")
      .concat(W.error, '"></div>\n     <div class="')
      .concat(z.icon, " ")
      .concat(W.question, '"></div>\n     <div class="')
      .concat(z.icon, " ")
      .concat(W.warning, '"></div>\n     <div class="')
      .concat(z.icon, " ")
      .concat(W.info, '"></div>\n     <div class="')
      .concat(z.icon, " ")
      .concat(W.success, '"></div>\n     <img class="')
      .concat(z.image, '" />\n     <h2 class="')
      .concat(z.title, '" id="')
      .concat(z.title, '"></h2>\n     <button type="button" class="')
      .concat(z.close, '"></button>\n   </div>\n   <div class="')
      .concat(z.content, '">\n     <div id="')
      .concat(z.content, '"></div>\n     <input class="')
      .concat(z.input, '" />\n     <input type="file" class="')
      .concat(z.file, '" />\n     <div class="')
      .concat(
        z.range,
        '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="'
      )
      .concat(z.select, '"></select>\n     <div class="')
      .concat(z.radio, '"></div>\n     <label for="')
      .concat(z.checkbox, '" class="')
      .concat(
        z.checkbox,
        '">\n       <input type="checkbox" />\n       <span class="'
      )
      .concat(z.label, '"></span>\n     </label>\n     <textarea class="')
      .concat(z.textarea, '"></textarea>\n     <div class="')
      .concat(z["validation-message"], '" id="')
      .concat(z["validation-message"], '"></div>\n   </div>\n   <div class="')
      .concat(z.actions, '">\n     <button type="button" class="')
      .concat(z.confirm, '">OK</button>\n     <button type="button" class="')
      .concat(z.cancel, '">Cancel</button>\n   </div>\n   <div class="')
      .concat(z.footer, '"></div>\n   <div class="')
      .concat(z["timer-progress-bar"], '"></div>\n </div>\n')
      .replace(/(^|\n)\s*/g, ""),
    ft = function (t) {
      if (
        ((function () {
          var t = y();
          t &&
            (t.parentNode.removeChild(t),
            ct(
              [document.documentElement, document.body],
              [z["no-backdrop"], z["toast-shown"], z["has-column"]]
            ));
        })(),
        ot())
      )
        h("SweetAlert2 requires document to initialize");
      else {
        var e = document.createElement("div");
        (e.className = z.container), (e.innerHTML = pt);
        var n = (function (t) {
          return "string" == typeof t ? document.querySelector(t) : t;
        })(t.target);
        n.appendChild(e),
          (function (t) {
            var e = C();
            e.setAttribute("role", t.toast ? "alert" : "dialog"),
              e.setAttribute("aria-live", t.toast ? "polite" : "assertive"),
              t.toast || e.setAttribute("aria-modal", "true");
          })(t),
          (function (t) {
            "rtl" === window.getComputedStyle(t).direction && st(y(), z.rtl);
          })(n),
          (function () {
            var t = P(),
              e = lt(t, z.input),
              n = lt(t, z.file),
              o = t.querySelector(".".concat(z.range, " input")),
              i = t.querySelector(".".concat(z.range, " output")),
              r = lt(t, z.select),
              a = t.querySelector(".".concat(z.checkbox, " input")),
              u = lt(t, z.textarea);
            (e.oninput = it),
              (n.onchange = it),
              (r.onchange = it),
              (a.onchange = it),
              (u.oninput = it),
              (o.oninput = function (t) {
                it(t), (i.value = o.value);
              }),
              (o.onchange = function (t) {
                it(t), (o.nextSibling.value = o.value);
              });
          })();
      }
    },
    mt = function (t, e) {
      if (((t.innerHTML = ""), 0 in e))
        for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
      else t.appendChild(e.cloneNode(!0));
    },
    ht = (function () {
      if (ot()) return !1;
      var t = document.createElement("div"),
        e = {
          WebkitAnimation: "webkitAnimationEnd",
          OAnimation: "oAnimationEnd oanimationend",
          animation: "animationend",
        };
      for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n])
          return e[n];
      return !1;
    })();
  function gt(t, e, n) {
    tt(t, n["showC" + e.substring(1) + "Button"], "inline-block"),
      (t.innerHTML = n[e + "ButtonText"]),
      t.setAttribute("aria-label", n[e + "ButtonAriaLabel"]),
      (t.className = z[e]),
      R(t, n.customClass, e + "Button"),
      st(t, n[e + "ButtonClass"]);
  }
  function vt(t, e) {
    var n = y();
    n &&
      ((function (t, e) {
        "string" == typeof e
          ? (t.style.background = e)
          : e ||
            st([document.documentElement, document.body], z["no-backdrop"]);
      })(n, e.backdrop),
      !e.backdrop &&
        e.allowOutsideClick &&
        N(
          '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
        ),
      (function (t, e) {
        e in z
          ? st(t, z[e])
          : (N('The "position" parameter is not valid, defaulting to "center"'),
            st(t, z.center));
      })(n, e.position),
      (function (t, e) {
        if (e && "string" == typeof e) {
          var n = "grow-" + e;
          n in z && st(t, z[n]);
        }
      })(n, e.grow),
      R(n, e.customClass, "container"));
  }
  function bt(t, e) {
    (t.placeholder && !e.inputPlaceholder) ||
      (t.placeholder = e.inputPlaceholder);
  }
  var yt = {
      promise: new WeakMap(),
      innerParams: new WeakMap(),
      domCache: new WeakMap(),
    },
    wt = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
    Ct = function (t) {
      if (!At[t.input])
        return h(
          'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
            t.input,
            '"'
          )
        );
      var e = Pt(t.input),
        n = At[t.input](e, t);
      X(n),
        setTimeout(function () {
          Q(n);
        });
    },
    kt = function (t, e) {
      var n = Z(P(), t);
      if (n)
        for (var o in ((function (t) {
          for (var e = 0; e < t.attributes.length; e++) {
            var n = t.attributes[e].name;
            -1 === ["type", "value", "style"].indexOf(n) &&
              t.removeAttribute(n);
          }
        })(n),
        e))
          ("range" === t && "placeholder" === o) || n.setAttribute(o, e[o]);
    },
    xt = function (t) {
      var e = Pt(t.input);
      t.customClass && st(e, t.customClass.input);
    },
    Pt = function (t) {
      var e = z[t] ? z[t] : z.input;
      return lt(P(), e);
    },
    At = {};
  (At.text =
    At.email =
    At.password =
    At.number =
    At.tel =
    At.url =
      function (t, e) {
        return (
          "string" == typeof e.inputValue || "number" == typeof e.inputValue
            ? (t.value = e.inputValue)
            : v(e.inputValue) ||
              N(
                'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                  r(e.inputValue),
                  '"'
                )
              ),
          bt(t, e),
          (t.type = e.input),
          t
        );
      }),
    (At.file = function (t, e) {
      return bt(t, e), t;
    }),
    (At.range = function (t, e) {
      var n = t.querySelector("input"),
        o = t.querySelector("output");
      return (
        (n.value = e.inputValue),
        (n.type = e.input),
        (o.value = e.inputValue),
        t
      );
    }),
    (At.select = function (t, e) {
      if (((t.innerHTML = ""), e.inputPlaceholder)) {
        var n = document.createElement("option");
        (n.innerHTML = e.inputPlaceholder),
          (n.value = ""),
          (n.disabled = !0),
          (n.selected = !0),
          t.appendChild(n);
      }
      return t;
    }),
    (At.radio = function (t) {
      return (t.innerHTML = ""), t;
    }),
    (At.checkbox = function (t, e) {
      var n = Z(P(), "checkbox");
      return (
        (n.value = 1),
        (n.id = z.checkbox),
        (n.checked = Boolean(e.inputValue)),
        (t.querySelector("span").innerHTML = e.inputPlaceholder),
        t
      );
    }),
    (At.textarea = function (e, t) {
      if (((e.value = t.inputValue), bt(e, t), "MutationObserver" in window)) {
        var n = parseInt(window.getComputedStyle(C()).width),
          o =
            parseInt(window.getComputedStyle(C()).paddingLeft) +
            parseInt(window.getComputedStyle(C()).paddingRight);
        new MutationObserver(function () {
          var t = e.offsetWidth + o;
          C().style.width = n < t ? t + "px" : null;
        }).observe(e, { attributes: !0, attributeFilter: ["style"] });
      }
      return e;
    });
  function Bt(t, e) {
    var n = P().querySelector("#" + z.content);
    e.html
      ? (rt(e.html, n), X(n, "block"))
      : e.text
      ? ((n.textContent = e.text), X(n, "block"))
      : G(n),
      (function (t, o) {
        var i = P(),
          e = yt.innerParams.get(t),
          r = !e || o.input !== e.input;
        wt.forEach(function (t) {
          var e = z[t],
            n = lt(i, e);
          kt(t, o.inputAttributes), (n.className = e), r && G(n);
        }),
          o.input && (r && Ct(o), xt(o));
      })(t, e),
      R(P(), e.customClass, "content");
  }
  function St(t, i) {
    var r = B();
    if (!i.progressSteps || 0 === i.progressSteps.length) return G(r);
    X(r), (r.innerHTML = "");
    var a = parseInt(
      null === i.currentProgressStep ? Qe.getQueueStep() : i.currentProgressStep
    );
    a >= i.progressSteps.length &&
      N(
        "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
      ),
      i.progressSteps.forEach(function (t, e) {
        var n = (function (t) {
          var e = document.createElement("li");
          return st(e, z["progress-step"]), (e.innerHTML = t), e;
        })(t);
        if (
          (r.appendChild(n),
          e === a && st(n, z["active-progress-step"]),
          e !== i.progressSteps.length - 1)
        ) {
          var o = (function (t) {
            var e = document.createElement("li");
            return (
              st(e, z["progress-step-line"]),
              t.progressStepsDistance &&
                (e.style.width = t.progressStepsDistance),
              e
            );
          })(t);
          r.appendChild(o);
        }
      });
  }
  function Et(t, e) {
    var n = O();
    R(n, e.customClass, "header"),
      St(0, e),
      (function (t, e) {
        var n = yt.innerParams.get(t);
        if (n && e.icon === n.icon && k()) R(k(), e.customClass, "icon");
        else if ((Ot(), e.icon))
          if (-1 !== Object.keys(W).indexOf(e.icon)) {
            var o = w(".".concat(z.icon, ".").concat(W[e.icon]));
            X(o),
              Ht(o, e),
              Mt(),
              R(o, e.customClass, "icon"),
              st(o, e.showClass.icon);
          } else
            h(
              'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                e.icon,
                '"'
              )
            );
      })(t, e),
      (function (t, e) {
        var n = A();
        if (!e.imageUrl) return G(n);
        X(n),
          n.setAttribute("src", e.imageUrl),
          n.setAttribute("alt", e.imageAlt),
          J(n, "width", e.imageWidth),
          J(n, "height", e.imageHeight),
          (n.className = z.image),
          R(n, e.customClass, "image");
      })(0, e),
      (function (t, e) {
        var n = x();
        tt(n, e.title || e.titleText),
          e.title && rt(e.title, n),
          e.titleText && (n.innerText = e.titleText),
          R(n, e.customClass, "title");
      })(0, e),
      (function (t, e) {
        var n = j();
        (n.innerHTML = e.closeButtonHtml),
          R(n, e.customClass, "closeButton"),
          tt(n, e.showCloseButton),
          n.setAttribute("aria-label", e.closeButtonAriaLabel);
      })(0, e);
  }
  function Tt(t, e) {
    !(function (t, e) {
      var n = C();
      J(n, "width", e.width),
        J(n, "padding", e.padding),
        e.background && (n.style.background = e.background),
        (n.className = z.popup),
        e.toast
          ? (st([document.documentElement, document.body], z["toast-shown"]),
            st(n, z.toast))
          : st(n, z.modal),
        R(n, e.customClass, "popup"),
        "string" == typeof e.customClass && st(n, e.customClass);
    })(0, e),
      vt(0, e),
      Et(t, e),
      Bt(t, e),
      at(0, e),
      (function (t, e) {
        var n = M();
        tt(n, e.footer),
          e.footer && rt(e.footer, n),
          R(n, e.customClass, "footer");
      })(0, e),
      "function" == typeof e.onRender && e.onRender(C());
  }
  function Lt() {
    return E() && E().click();
  }
  var Ot = function () {
      for (var t = n(), e = 0; e < t.length; e++) G(t[e]);
    },
    Mt = function () {
      for (
        var t = C(),
          e = window.getComputedStyle(t).getPropertyValue("background-color"),
          n = t.querySelectorAll(
            "[class^=swal2-success-circular-line], .swal2-success-fix"
          ),
          o = 0;
        o < n.length;
        o++
      )
        n[o].style.backgroundColor = e;
    },
    Ht = function (t, e) {
      if (((t.innerHTML = ""), e.iconHtml)) t.innerHTML = jt(e.iconHtml);
      else if ("success" === e.icon)
        t.innerHTML =
          '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ';
      else if ("error" === e.icon)
        t.innerHTML =
          '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ';
      else {
        t.innerHTML = jt({ question: "?", warning: "!", info: "i" }[e.icon]);
      }
    },
    jt = function (t) {
      return '<div class="'.concat(z["icon-content"], '">').concat(t, "</div>");
    };
  function Vt() {
    var t = C();
    t || Qe.fire(""), (t = C());
    var e = L(),
      n = E();
    X(e),
      X(n),
      st([t, e], z.loading),
      (n.disabled = !0),
      t.setAttribute("data-loading", !0),
      t.setAttribute("aria-busy", !0),
      t.focus();
  }
  function It() {
    return new Promise(function (t) {
      var e = window.scrollX,
        n = window.scrollY;
      (Ft.restoreFocusTimeout = setTimeout(function () {
        Ft.previousActiveElement && Ft.previousActiveElement.focus
          ? (Ft.previousActiveElement.focus(),
            (Ft.previousActiveElement = null))
          : document.body && document.body.focus(),
          t();
      }, 100)),
        void 0 !== e && void 0 !== n && window.scrollTo(e, n);
    });
  }
  function qt() {
    if (Ft.timeout)
      return (
        (function () {
          var t = H(),
            e = parseInt(window.getComputedStyle(t).width);
          t.style.removeProperty("transition"), (t.style.width = "100%");
          var n = parseInt(window.getComputedStyle(t).width),
            o = parseInt((e / n) * 100);
          t.style.removeProperty("transition"),
            (t.style.width = "".concat(o, "%"));
        })(),
        Ft.timeout.stop()
      );
  }
  function Rt() {
    if (Ft.timeout) {
      var t = Ft.timeout.start();
      return nt(t), t;
    }
  }
  function Dt(t) {
    return Object.prototype.hasOwnProperty.call(_t, t);
  }
  function Nt(t) {
    return Wt[t];
  }
  var Ut = [],
    Ft = {},
    _t = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: null,
      iconHtml: null,
      toast: !1,
      animation: !0,
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show",
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide",
      },
      customClass: "",
      target: "body",
      backdrop: !0,
      heightAuto: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      stopKeydownPropagation: !0,
      keydownListenerCapture: !1,
      showConfirmButton: !0,
      showCancelButton: !1,
      preConfirm: null,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: null,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: null,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusCancel: !1,
      showCloseButton: !1,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      showLoaderOnConfirm: !1,
      imageUrl: null,
      imageWidth: null,
      imageHeight: null,
      imageAlt: "",
      timer: null,
      timerProgressBar: !1,
      width: null,
      padding: null,
      background: null,
      input: null,
      inputPlaceholder: "",
      inputValue: "",
      inputOptions: {},
      inputAutoTrim: !0,
      inputAttributes: {},
      inputValidator: null,
      validationMessage: null,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: null,
      progressStepsDistance: null,
      onBeforeOpen: null,
      onOpen: null,
      onRender: null,
      onClose: null,
      onAfterClose: null,
      scrollbarPadding: !0,
    },
    zt = [
      "title",
      "titleText",
      "text",
      "html",
      "type",
      "customClass",
      "showConfirmButton",
      "showCancelButton",
      "confirmButtonText",
      "confirmButtonAriaLabel",
      "confirmButtonColor",
      "cancelButtonText",
      "cancelButtonAriaLabel",
      "cancelButtonColor",
      "buttonsStyling",
      "reverseButtons",
      "imageUrl",
      "imageWidth",
      "imageHeigth",
      "imageAlt",
      "progressSteps",
      "currentProgressStep",
    ],
    Wt = { animation: 'showClass" and "hideClass' },
    Kt = [
      "allowOutsideClick",
      "allowEnterKey",
      "backdrop",
      "focusConfirm",
      "focusCancel",
      "heightAuto",
      "keydownListenerCapture",
    ],
    Yt = Object.freeze({
      isValidParameter: Dt,
      isUpdatableParameter: function (t) {
        return -1 !== zt.indexOf(t);
      },
      isDeprecatedParameter: Nt,
      argsToParams: function (o) {
        var i = {};
        return (
          "object" !== r(o[0]) || b(o[0])
            ? ["title", "html", "icon"].forEach(function (t, e) {
                var n = o[e];
                "string" == typeof n || b(n)
                  ? (i[t] = n)
                  : void 0 !== n &&
                    h(
                      "Unexpected type of "
                        .concat(t, '! Expected "string" or "Element", got ')
                        .concat(r(n))
                    );
              })
            : u(i, o[0]),
          i
        );
      },
      isVisible: function () {
        return dt(C());
      },
      clickConfirm: Lt,
      clickCancel: function () {
        return T() && T().click();
      },
      getContainer: y,
      getPopup: C,
      getTitle: x,
      getContent: P,
      getImage: A,
      getIcon: k,
      getIcons: n,
      getCloseButton: j,
      getActions: L,
      getConfirmButton: E,
      getCancelButton: T,
      getHeader: O,
      getFooter: M,
      getFocusableElements: V,
      getValidationMessage: S,
      isLoading: function () {
        return C().hasAttribute("data-loading");
      },
      fire: function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return l(this, e);
      },
      mixin: function (n) {
        return (function (t) {
          function e() {
            return o(this, e), d(this, s(e).apply(this, arguments));
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && c(t, e);
            })(e, t),
            a(e, [
              {
                key: "_main",
                value: function (t) {
                  return p(s(e.prototype), "_main", this).call(
                    this,
                    u({}, n, t)
                  );
                },
              },
            ]),
            e
          );
        })(this);
      },
      queue: function (t) {
        var r = this;
        Ut = t;
        function a(t, e) {
          (Ut = []),
            document.body.removeAttribute("data-swal2-queue-step"),
            t(e);
        }
        var u = [];
        return new Promise(function (i) {
          !(function e(n, o) {
            n < Ut.length
              ? (document.body.setAttribute("data-swal2-queue-step", n),
                r.fire(Ut[n]).then(function (t) {
                  void 0 !== t.value
                    ? (u.push(t.value), e(n + 1, o))
                    : a(i, { dismiss: t.dismiss });
                }))
              : a(i, { value: u });
          })(0);
        });
      },
      getQueueStep: function () {
        return document.body.getAttribute("data-swal2-queue-step");
      },
      insertQueueStep: function (t, e) {
        return e && e < Ut.length ? Ut.splice(e, 0, t) : Ut.push(t);
      },
      deleteQueueStep: function (t) {
        void 0 !== Ut[t] && Ut.splice(t, 1);
      },
      showLoading: Vt,
      enableLoading: Vt,
      getTimerLeft: function () {
        return Ft.timeout && Ft.timeout.getTimerLeft();
      },
      stopTimer: qt,
      resumeTimer: Rt,
      toggleTimer: function () {
        var t = Ft.timeout;
        return t && (t.running ? qt() : Rt());
      },
      increaseTimer: function (t) {
        return Ft.timeout && Ft.timeout.increase(t);
      },
      isTimerRunning: function () {
        return Ft.timeout && Ft.timeout.isRunning();
      },
    });
  function Zt() {
    var t = yt.innerParams.get(this),
      e = yt.domCache.get(this);
    t.showConfirmButton ||
      (G(e.confirmButton), t.showCancelButton || G(e.actions)),
      ct([e.popup, e.actions], z.loading),
      e.popup.removeAttribute("aria-busy"),
      e.popup.removeAttribute("data-loading"),
      (e.confirmButton.disabled = !1),
      (e.cancelButton.disabled = !1);
  }
  function Qt() {
    null === Y.previousBodyPadding &&
      document.body.scrollHeight > window.innerHeight &&
      ((Y.previousBodyPadding = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right")
      )),
      (document.body.style.paddingRight =
        Y.previousBodyPadding +
        (function () {
          if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;
          var t = document.createElement("div");
          (t.style.width = "50px"),
            (t.style.height = "50px"),
            (t.style.overflow = "scroll"),
            document.body.appendChild(t);
          var e = t.offsetWidth - t.clientWidth;
          return document.body.removeChild(t), e;
        })() +
        "px"));
  }
  function $t() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }
  function Jt() {
    var t = y(),
      e = C();
    t.style.removeProperty("align-items"),
      e.offsetTop < 0 && (t.style.alignItems = "flex-start");
  }
  var Xt = function () {
      var e,
        n = y();
      (n.ontouchstart = function (t) {
        e =
          t.target === n ||
          (!(function (t) {
            return !!(t.scrollHeight > t.clientHeight);
          })(n) &&
            "INPUT" !== t.target.tagName);
      }),
        (n.ontouchmove = function (t) {
          e && (t.preventDefault(), t.stopPropagation());
        });
    },
    Gt = { swalPromiseResolve: new WeakMap() };
  function te(t, e, n, o) {
    n
      ? ie(t, o)
      : (It().then(function () {
          return ie(t, o);
        }),
        Ft.keydownTarget.removeEventListener("keydown", Ft.keydownHandler, {
          capture: Ft.keydownListenerCapture,
        }),
        (Ft.keydownHandlerAdded = !1)),
      e.parentNode && e.parentNode.removeChild(e),
      I() &&
        (null !== Y.previousBodyPadding &&
          ((document.body.style.paddingRight = Y.previousBodyPadding + "px"),
          (Y.previousBodyPadding = null)),
        (function () {
          if (q(document.body, z.iosfix)) {
            var t = parseInt(document.body.style.top, 10);
            ct(document.body, z.iosfix),
              (document.body.style.top = ""),
              (document.body.scrollTop = -1 * t);
          }
        })(),
        "undefined" != typeof window &&
          $t() &&
          window.removeEventListener("resize", Jt),
        m(document.body.children).forEach(function (t) {
          t.hasAttribute("data-previous-aria-hidden")
            ? (t.setAttribute(
                "aria-hidden",
                t.getAttribute("data-previous-aria-hidden")
              ),
              t.removeAttribute("data-previous-aria-hidden"))
            : t.removeAttribute("aria-hidden");
        })),
      ct(
        [document.documentElement, document.body],
        [
          z.shown,
          z["height-auto"],
          z["no-backdrop"],
          z["toast-shown"],
          z["toast-column"],
        ]
      );
  }
  function ee(t) {
    var e = C();
    if (e) {
      var n = yt.innerParams.get(this);
      if (n && !q(e, n.hideClass.popup)) {
        var o = Gt.swalPromiseResolve.get(this);
        ct(e, n.showClass.popup), st(e, n.hideClass.popup);
        var i = y();
        ct(i, n.showClass.backdrop),
          st(i, n.hideClass.backdrop),
          (function (t, e, n) {
            var o = y(),
              i = ht && et(e),
              r = n.onClose,
              a = n.onAfterClose;
            if (r !== null && typeof r === "function") {
              r(e);
            }
            if (i) {
              oe(t, e, o, a);
            } else {
              te(t, o, K(), a);
            }
          })(this, e, n),
          o(t || {});
      }
    }
  }
  function ne(t) {
    for (var e in t) t[e] = new WeakMap();
  }
  var oe = function (t, e, n, o) {
      (Ft.swalCloseEventFinishedCallback = te.bind(null, t, n, K(), o)),
        e.addEventListener(ht, function (t) {
          t.target === e &&
            (Ft.swalCloseEventFinishedCallback(),
            delete Ft.swalCloseEventFinishedCallback);
        });
    },
    ie = function (t, e) {
      setTimeout(function () {
        null !== e && "function" == typeof e && e(),
          C() ||
            (function (t) {
              delete t.params,
                delete Ft.keydownHandler,
                delete Ft.keydownTarget,
                ne(yt),
                ne(Gt);
            })(t);
      });
    };
  function re(t, e, n) {
    var o = yt.domCache.get(t);
    e.forEach(function (t) {
      o[t].disabled = n;
    });
  }
  function ae(t, e) {
    if (!t) return !1;
    if ("radio" === t.type)
      for (
        var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0;
        o < n.length;
        o++
      )
        n[o].disabled = e;
    else t.disabled = e;
  }
  var ue = (function () {
      function n(t, e) {
        o(this, n),
          (this.callback = t),
          (this.remaining = e),
          (this.running = !1),
          this.start();
      }
      return (
        a(n, [
          {
            key: "start",
            value: function () {
              return (
                this.running ||
                  ((this.running = !0),
                  (this.started = new Date()),
                  (this.id = setTimeout(this.callback, this.remaining))),
                this.remaining
              );
            },
          },
          {
            key: "stop",
            value: function () {
              return (
                this.running &&
                  ((this.running = !1),
                  clearTimeout(this.id),
                  (this.remaining -= new Date() - this.started)),
                this.remaining
              );
            },
          },
          {
            key: "increase",
            value: function (t) {
              var e = this.running;
              return (
                e && this.stop(),
                (this.remaining += t),
                e && this.start(),
                this.remaining
              );
            },
          },
          {
            key: "getTimerLeft",
            value: function () {
              return (
                this.running && (this.stop(), this.start()), this.remaining
              );
            },
          },
          {
            key: "isRunning",
            value: function () {
              return this.running;
            },
          },
        ]),
        n
      );
    })(),
    se = {
      email: function (t, e) {
        return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)
          ? Promise.resolve()
          : Promise.resolve(e || "Invalid email address");
      },
      url: function (t, e) {
        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
          t
        )
          ? Promise.resolve()
          : Promise.resolve(e || "Invalid URL");
      },
    };
  function ce(t) {
    !(function (e) {
      e.inputValidator ||
        Object.keys(se).forEach(function (t) {
          e.input === t && (e.inputValidator = se[t]);
        });
    })(t),
      t.showLoaderOnConfirm &&
        !t.preConfirm &&
        N(
          "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
        ),
      (t.animation = F(t.animation)),
      (function (t) {
        (t.target &&
          ("string" != typeof t.target || document.querySelector(t.target)) &&
          ("string" == typeof t.target || t.target.appendChild)) ||
          (N('Target parameter is not valid, defaulting to "body"'),
          (t.target = "body"));
      })(t),
      "string" == typeof t.title &&
        (t.title = t.title.split("\n").join("<br />")),
      ft(t);
  }
  function le(t, e) {
    t.removeEventListener(ht, le), (e.style.overflowY = "auto");
  }
  function de(t) {
    var e = y(),
      n = C();
    "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n),
      Ce(e, n, t),
      ye(e, n),
      I() && we(e, t.scrollbarPadding),
      K() ||
        Ft.previousActiveElement ||
        (Ft.previousActiveElement = document.activeElement),
      "function" == typeof t.onOpen &&
        setTimeout(function () {
          return t.onOpen(n);
        });
  }
  function pe(t, e) {
    "select" === e.input || "radio" === e.input
      ? Ae(t, e)
      : -1 !==
          ["text", "email", "number", "tel", "textarea"].indexOf(e.input) &&
        v(e.inputValue) &&
        Be(t, e);
  }
  function fe(t, e) {
    t.disableButtons(), e.input ? Te(t, e) : Le(t, e, !0);
  }
  function me(t, e) {
    t.disableButtons(), e(_.cancel);
  }
  function he(t, e) {
    t.closePopup({ value: e });
  }
  function ge(e, t, n, o) {
    t.keydownTarget &&
      t.keydownHandlerAdded &&
      (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
        capture: t.keydownListenerCapture,
      }),
      (t.keydownHandlerAdded = !1)),
      n.toast ||
        ((t.keydownHandler = function (t) {
          return He(e, t, n, o);
        }),
        (t.keydownTarget = n.keydownListenerCapture ? window : C()),
        (t.keydownListenerCapture = n.keydownListenerCapture),
        t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
          capture: t.keydownListenerCapture,
        }),
        (t.keydownHandlerAdded = !0));
  }
  function ve(t, e, n) {
    for (var o = V(), i = 0; i < o.length; i++)
      return (
        (e += n) === o.length ? (e = 0) : -1 === e && (e = o.length - 1),
        o[e].focus()
      );
    C().focus();
  }
  function be(t, e, n) {
    e.toast ? Re(t, e, n) : (Ne(t), Ue(t), Fe(t, e, n));
  }
  var ye = function (t, e) {
      ht && et(e)
        ? ((t.style.overflowY = "hidden"),
          e.addEventListener(ht, le.bind(null, e, t)))
        : (t.style.overflowY = "auto");
    },
    we = function (t, e) {
      !(function () {
        if (
          ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
            ("MacIntel" === navigator.platform &&
              1 < navigator.maxTouchPoints)) &&
          !q(document.body, z.iosfix)
        ) {
          var t = document.body.scrollTop;
          (document.body.style.top = -1 * t + "px"),
            st(document.body, z.iosfix),
            Xt();
        }
      })(),
        "undefined" != typeof window &&
          $t() &&
          (Jt(), window.addEventListener("resize", Jt)),
        m(document.body.children).forEach(function (t) {
          t === y() ||
            (function (t, e) {
              if ("function" == typeof t.contains) return t.contains(e);
            })(t, y()) ||
            (t.hasAttribute("aria-hidden") &&
              t.setAttribute(
                "data-previous-aria-hidden",
                t.getAttribute("aria-hidden")
              ),
            t.setAttribute("aria-hidden", "true"));
        }),
        e && Qt(),
        setTimeout(function () {
          t.scrollTop = 0;
        });
    },
    Ce = function (t, e, n) {
      st(e, n.showClass.popup),
        st(t, n.showClass.backdrop),
        X(e),
        st([document.documentElement, document.body], z.shown),
        n.heightAuto &&
          n.backdrop &&
          !n.toast &&
          st([document.documentElement, document.body], z["height-auto"]);
    },
    ke = function (t) {
      return t.checked ? 1 : 0;
    },
    xe = function (t) {
      return t.checked ? t.value : null;
    },
    Pe = function (t) {
      return t.files.length
        ? null !== t.getAttribute("multiple")
          ? t.files
          : t.files[0]
        : null;
    },
    Ae = function (e, n) {
      function o(t) {
        return Se[n.input](i, Ee(t), n);
      }
      var i = P();
      v(n.inputOptions)
        ? (Vt(),
          n.inputOptions.then(function (t) {
            e.hideLoading(), o(t);
          }))
        : "object" === r(n.inputOptions)
        ? o(n.inputOptions)
        : h(
            "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
              r(n.inputOptions)
            )
          );
    },
    Be = function (e, n) {
      var o = e.getInput();
      G(o),
        n.inputValue
          .then(function (t) {
            (o.value = "number" === n.input ? parseFloat(t) || 0 : t + ""),
              X(o),
              o.focus(),
              e.hideLoading();
          })
          .catch(function (t) {
            h("Error in inputValue promise: " + t),
              (o.value = ""),
              X(o),
              o.focus(),
              e.hideLoading();
          });
    },
    Se = {
      select: function (t, e, i) {
        var r = lt(t, z.select);
        e.forEach(function (t) {
          var e = t[0],
            n = t[1],
            o = document.createElement("option");
          (o.value = e),
            (o.innerHTML = n),
            i.inputValue.toString() === e.toString() && (o.selected = !0),
            r.appendChild(o);
        }),
          r.focus();
      },
      radio: function (t, e, a) {
        var u = lt(t, z.radio);
        e.forEach(function (t) {
          var e = t[0],
            n = t[1],
            o = document.createElement("input"),
            i = document.createElement("label");
          (o.type = "radio"),
            (o.name = z.radio),
            (o.value = e),
            a.inputValue.toString() === e.toString() && (o.checked = !0);
          var r = document.createElement("span");
          (r.innerHTML = n),
            (r.className = z.label),
            i.appendChild(o),
            i.appendChild(r),
            u.appendChild(i);
        });
        var n = u.querySelectorAll("input");
        n.length && n[0].focus();
      },
    },
    Ee = function (e) {
      var n = [];
      return (
        "undefined" != typeof Map && e instanceof Map
          ? e.forEach(function (t, e) {
              n.push([e, t]);
            })
          : Object.keys(e).forEach(function (t) {
              n.push([t, e[t]]);
            }),
        n
      );
    },
    Te = function (e, n) {
      var o = (function (t, e) {
        var n = t.getInput();
        if (!n) return null;
        switch (e.input) {
          case "checkbox":
            return ke(n);
          case "radio":
            return xe(n);
          case "file":
            return Pe(n);
          default:
            return e.inputAutoTrim ? n.value.trim() : n.value;
        }
      })(e, n);
      n.inputValidator
        ? (e.disableInput(),
          Promise.resolve()
            .then(function () {
              return n.inputValidator(o, n.validationMessage);
            })
            .then(function (t) {
              e.enableButtons(),
                e.enableInput(),
                t ? e.showValidationMessage(t) : Le(e, n, o);
            }))
        : e.getInput().checkValidity()
        ? Le(e, n, o)
        : (e.enableButtons(), e.showValidationMessage(n.validationMessage));
    },
    Le = function (e, t, n) {
      (t.showLoaderOnConfirm && Vt(), t.preConfirm)
        ? (e.resetValidationMessage(),
          Promise.resolve()
            .then(function () {
              return t.preConfirm(n, t.validationMessage);
            })
            .then(function (t) {
              dt(S()) || !1 === t
                ? e.hideLoading()
                : he(e, void 0 === t ? n : t);
            }))
        : he(e, n);
    },
    Oe = [
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Left",
      "Right",
      "Up",
      "Down",
    ],
    Me = ["Escape", "Esc"],
    He = function (t, e, n, o) {
      n.stopKeydownPropagation && e.stopPropagation(),
        "Enter" === e.key
          ? je(t, e, n)
          : "Tab" === e.key
          ? Ve(e, n)
          : -1 !== Oe.indexOf(e.key)
          ? Ie()
          : -1 !== Me.indexOf(e.key) && qe(e, n, o);
    },
    je = function (t, e, n) {
      if (
        !e.isComposing &&
        e.target &&
        t.getInput() &&
        e.target.outerHTML === t.getInput().outerHTML
      ) {
        if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
        Lt(), e.preventDefault();
      }
    },
    Ve = function (t, e) {
      for (var n = t.target, o = V(), i = -1, r = 0; r < o.length; r++)
        if (n === o[r]) {
          i = r;
          break;
        }
      t.shiftKey ? ve(0, i, -1) : ve(0, i, 1),
        t.stopPropagation(),
        t.preventDefault();
    },
    Ie = function () {
      var t = E(),
        e = T();
      document.activeElement === t && dt(e)
        ? e.focus()
        : document.activeElement === e && dt(t) && t.focus();
    },
    qe = function (t, e, n) {
      F(e.allowEscapeKey) && (t.preventDefault(), n(_.esc));
    },
    Re = function (t, e, n) {
      t.popup.onclick = function () {
        e.showConfirmButton ||
          e.showCancelButton ||
          e.showCloseButton ||
          e.input ||
          n(_.close);
      };
    },
    De = !1,
    Ne = function (e) {
      e.popup.onmousedown = function () {
        e.container.onmouseup = function (t) {
          (e.container.onmouseup = void 0),
            t.target === e.container && (De = !0);
        };
      };
    },
    Ue = function (e) {
      e.container.onmousedown = function () {
        e.popup.onmouseup = function (t) {
          (e.popup.onmouseup = void 0),
            (t.target !== e.popup && !e.popup.contains(t.target)) || (De = !0);
        };
      };
    },
    Fe = function (e, n, o) {
      e.container.onclick = function (t) {
        De
          ? (De = !1)
          : t.target === e.container && F(n.allowOutsideClick) && o(_.backdrop);
      };
    };
  var _e = function (t, e, n) {
      var o = H();
      G(o),
        e.timer &&
          ((t.timeout = new ue(function () {
            n("timer"), delete t.timeout;
          }, e.timer)),
          e.timerProgressBar &&
            (X(o),
            setTimeout(function () {
              nt(e.timer);
            })));
    },
    ze = function (t, e) {
      if (!e.toast)
        return F(e.allowEnterKey)
          ? e.focusCancel && dt(t.cancelButton)
            ? t.cancelButton.focus()
            : e.focusConfirm && dt(t.confirmButton)
            ? t.confirmButton.focus()
            : void ve(0, -1, 1)
          : We();
    },
    We = function () {
      document.activeElement &&
        "function" == typeof document.activeElement.blur &&
        document.activeElement.blur();
    };
  var Ke,
    Ye = Object.freeze({
      hideLoading: Zt,
      disableLoading: Zt,
      getInput: function (t) {
        var e = yt.innerParams.get(t || this),
          n = yt.domCache.get(t || this);
        return n ? Z(n.content, e.input) : null;
      },
      close: ee,
      closePopup: ee,
      closeModal: ee,
      closeToast: ee,
      enableButtons: function () {
        re(this, ["confirmButton", "cancelButton"], !1);
      },
      disableButtons: function () {
        re(this, ["confirmButton", "cancelButton"], !0);
      },
      enableInput: function () {
        return ae(this.getInput(), !1);
      },
      disableInput: function () {
        return ae(this.getInput(), !0);
      },
      showValidationMessage: function (t) {
        var e = yt.domCache.get(this);
        e.validationMessage.innerHTML = t;
        var n = window.getComputedStyle(e.popup);
        (e.validationMessage.style.marginLeft = "-".concat(
          n.getPropertyValue("padding-left")
        )),
          (e.validationMessage.style.marginRight = "-".concat(
            n.getPropertyValue("padding-right")
          )),
          X(e.validationMessage);
        var o = this.getInput();
        o &&
          (o.setAttribute("aria-invalid", !0),
          o.setAttribute("aria-describedBy", z["validation-message"]),
          Q(o),
          st(o, z.inputerror));
      },
      resetValidationMessage: function () {
        var t = yt.domCache.get(this);
        t.validationMessage && G(t.validationMessage);
        var e = this.getInput();
        e &&
          (e.removeAttribute("aria-invalid"),
          e.removeAttribute("aria-describedBy"),
          ct(e, z.inputerror));
      },
      getProgressSteps: function () {
        return yt.domCache.get(this).progressSteps;
      },
      _main: function (t) {
        !(function (t) {
          for (var e in t)
            Dt((i = e)) || N('Unknown parameter "'.concat(i, '"')),
              t.toast &&
                ((o = e),
                -1 !== Kt.indexOf(o) &&
                  N(
                    'The parameter "'.concat(o, '" is incompatible with toasts')
                  )),
              Nt((n = e)) && g(n, Nt(n));
          var n, o, i;
        })(t),
          C() &&
            Ft.swalCloseEventFinishedCallback &&
            (Ft.swalCloseEventFinishedCallback(),
            delete Ft.swalCloseEventFinishedCallback),
          Ft.deferDisposalTimer &&
            (clearTimeout(Ft.deferDisposalTimer), delete Ft.deferDisposalTimer);
        var e = (function (t) {
          var e = u({}, _t.showClass, t.showClass),
            n = u({}, _t.hideClass, t.hideClass),
            o = u({}, _t, t);
          if (((o.showClass = e), (o.hideClass = n), !1 === t.animation)) {
            o.showClass = {
              popup: "",
              backdrop: "swal2-backdrop-show swal2-noanimation",
            };
            o.hideClass = {};
          }
          return o;
        })(t);
        ce(e),
          Object.freeze(e),
          Ft.timeout && (Ft.timeout.stop(), delete Ft.timeout),
          clearTimeout(Ft.restoreFocusTimeout);
        var n = (function (t) {
          var e = {
            popup: C(),
            container: y(),
            content: P(),
            actions: L(),
            confirmButton: E(),
            cancelButton: T(),
            closeButton: j(),
            validationMessage: S(),
            progressSteps: B(),
          };
          return yt.domCache.set(t, e), e;
        })(this);
        return (
          Tt(this, e),
          yt.innerParams.set(this, e),
          (function (n, o, i) {
            return new Promise(function (t) {
              var e = function t(e) {
                n.closePopup({ dismiss: e });
              };
              Gt.swalPromiseResolve.set(n, t);
              _e(Ft, i, e);
              o.confirmButton.onclick = function () {
                return fe(n, i);
              };
              o.cancelButton.onclick = function () {
                return me(n, e);
              };
              o.closeButton.onclick = function () {
                return e(_.close);
              };
              be(o, i, e);
              ge(n, Ft, i, e);
              if (i.toast && (i.input || i.footer || i.showCloseButton)) {
                st(document.body, z["toast-column"]);
              } else {
                ct(document.body, z["toast-column"]);
              }
              pe(n, i);
              de(i);
              ze(o, i);
              o.container.scrollTop = 0;
            });
          })(this, n, e)
        );
      },
      update: function (e) {
        var t = C(),
          n = yt.innerParams.get(this);
        if (!t || q(t, n.hideClass.popup))
          return N(
            "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
          );
        var o = {};
        Object.keys(e).forEach(function (t) {
          Qe.isUpdatableParameter(t)
            ? (o[t] = e[t])
            : N(
                'Invalid parameter to update: "'.concat(
                  t,
                  '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'
                )
              );
        });
        var i = u({}, n, o);
        Tt(this, i),
          yt.innerParams.set(this, i),
          Object.defineProperties(this, {
            params: {
              value: u({}, this.params, e),
              writable: !1,
              enumerable: !0,
            },
          });
      },
    });
  function Ze() {
    if ("undefined" != typeof window) {
      "undefined" == typeof Promise &&
        h(
          "This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"
        ),
        (Ke = this);
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      var o = Object.freeze(this.constructor.argsToParams(e));
      Object.defineProperties(this, {
        params: { value: o, writable: !1, enumerable: !0, configurable: !0 },
      });
      var i = this._main(this.params);
      yt.promise.set(this, i);
    }
  }
  (Ze.prototype.then = function (t) {
    return yt.promise.get(this).then(t);
  }),
    (Ze.prototype.finally = function (t) {
      return yt.promise.get(this).finally(t);
    }),
    u(Ze.prototype, Ye),
    u(Ze, Yt),
    Object.keys(Ye).forEach(function (e) {
      Ze[e] = function () {
        var t;
        if (Ke) return (t = Ke)[e].apply(t, arguments);
      };
    }),
    (Ze.DismissReason = _),
    (Ze.version = "9.3.1");
  var Qe = Ze;
  return (Qe.default = Qe);
}),
  void 0 !== this &&
    this.Sweetalert2 &&
    (this.swal =
      this.sweetAlert =
      this.Swal =
      this.SweetAlert =
        this.Sweetalert2);
"undefined" != typeof document &&
  (function (e, t) {
    var n = e.createElement("style");
    if ((e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet))
      n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else
      try {
        n.innerHTML = t;
      } catch (e) {
        n.innerText = t;
      }
  })(
    document,
    '.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar{position:absolute;bottom:0;left:0;width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:inherit}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:inherit;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}'
  );

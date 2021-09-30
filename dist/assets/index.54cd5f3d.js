var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
export function __vite_legacy_guard() {
  import("data:text/javascript,");
}
;
import { d as defineComponent, r as ref, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, F as Fragment, b as createVNode, w as withCtx, p as pushScopeId, e as popScopeId, n as normalizeClass, f as createTextVNode, g as getCurrentInstance, h as renderSlot, u as unref, i as debounce, j as withAsyncContext, k as createBlock, S as Suspense, l as reactive, m as onBeforeMount, q as createApp, s as defineCustomElement } from "./vendor.a114a50c.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var Hmr_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$c = /* @__PURE__ */ createBaseVNode("h2", { class: "hmr" }, "HMR", -1);
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("p", null, "Click the button then edit this message. The count should be preserved.", -1);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  setup(__props) {
    let foo = 0;
    const count = ref(foo);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$c,
        _hoisted_2$9,
        createBaseVNode("button", {
          class: "hmr-inc",
          onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
        }, "count is " + toDisplayString(count.value), 1)
      ], 64);
    };
  }
});
const _hoisted_1$b = /* @__PURE__ */ createBaseVNode("h2", null, "Syntax Support", -1);
const _hoisted_2$8 = { class: "syntax" };
const _sfc_main$b = {
  setup(__props) {
    const foo = {
      bar: "baz"
    };
    const a = ref({
      b: foo == null ? void 0 : foo.bar
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$b,
        createBaseVNode("p", _hoisted_2$8, toDisplayString((_a = a.value) == null ? void 0 : _a.b), 1)
      ], 64);
    };
  }
};
var PreProcessors_vue_vue_type_style_index_0_lang = "";
var PreProcessors_vue_vue_type_style_index_1_scoped_true_lang = "";
var PreProcessors_vue_vue_type_style_index_2_lang = "";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _withScopeId$4 = (n) => (pushScopeId("data-v-4ea13465"), n = n(), popScopeId(), n);
const _hoisted_1$a = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("h2", { class: "pre-processors" }, "Pre-Processors", -1));
const _hoisted_2$7 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("p", { class: "pug" }, 'This is rendered from <template lang="pug"> and styled with <style lang="sass">. It should be megenta.', -1));
const _hoisted_3$5 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("p", { class: "pug-less" }, 'This is rendered from <template lang="pug"> and styled with <style lang="less">. It should be green.', -1));
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("p", { class: "pug-stylus" }, 'This is rendered from <template lang="pug"> and styled with <style lang="stylus">. It should be orange.', -1));
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "pug-slot" }, "slot content", -1));
const _sfc_main$a = {
  setup(__props) {
    function SlotComponent(_, { slots }) {
      return slots["test-slot"]();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$a,
        _hoisted_2$7,
        _hoisted_3$5,
        _hoisted_4$2,
        createVNode(SlotComponent, null, {
          "test-slot": withCtx(() => [
            _hoisted_5$1
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
var PreProcessors = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-4ea13465"]]);
const blueColor = "_blue-color_1s4zt_2";
var style0 = {
  blueColor
};
const orangeColor = "_orange-color_1iw5l_1";
var style1 = {
  orangeColor
};
const _sfc_main$9 = {};
const _hoisted_1$9 = /* @__PURE__ */ createBaseVNode("h2", null, "CSS Modules", -1);
const _hoisted_2$6 = /* @__PURE__ */ createTextVNode(" <style module> - this should be blue ");
const _hoisted_3$4 = /* @__PURE__ */ createTextVNode(" CSS - this should be orange ");
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$9,
    createBaseVNode("div", {
      class: normalizeClass(["sfc-css-modules", _ctx.$style.blueColor])
    }, [
      _hoisted_2$6,
      createBaseVNode("pre", null, toDisplayString(_ctx.$style), 1)
    ], 2),
    createBaseVNode("div", {
      class: normalizeClass(["sfc-css-modules-with-pre", _ctx.mod.orangeColor])
    }, [
      _hoisted_3$4,
      createBaseVNode("pre", null, toDisplayString(_ctx.mod), 1)
    ], 2)
  ], 64);
}
const cssModules = {};
cssModules["$style"] = style0;
cssModules["mod"] = style1;
var CssModules = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$3], ["__cssModules", cssModules]]);
var _imports_1 = "/assets/asset.b9f46fb3.png";
var _imports_2 = "/icon.png";
var _imports_3 = "/assets/fragment.d2571ff2.svg";
var Assets_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$8 = {};
const _withScopeId$3 = (n) => (pushScopeId("data-v-7ad4e7cc"), n = n(), popScopeId(), n);
const _hoisted_1$8 = _imports_3 + "#icon-heart-view";
const _hoisted_2$5 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("h2", null, "Template Static Asset Reference", -1));
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Relative "),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "relative-import",
    src: _imports_1
  })
], -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Absolute "),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "absolute-import",
    src: _imports_1
  })
], -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Absolute import from public dir "),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "public-import",
    src: _imports_2
  })
], -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Relative URL in style "),
  /* @__PURE__ */ createBaseVNode("span", { class: "relative-style-url" })
], -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" SVG Fragment reference "),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "svg-frag",
    style: { "width": "32px", "height": "32px" },
    src: _hoisted_1$8,
    alt: ""
  })
], -1));
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_2$5,
    _hoisted_3$3,
    _hoisted_4$1,
    _hoisted_5,
    _hoisted_6,
    _hoisted_7
  ], 64);
}
var Assets = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$2], ["__scopeId", "data-v-7ad4e7cc"]]);
var block0 = (Comp) => {
  Comp.i18n = { "en": { "hello": "hello,vite!" }, "ja": { "hello": "\u3053\u3093\u306B\u3061\u306F\u3001vite\uFF01" } };
};
function useI18n(locale = "en") {
  const instance = getCurrentInstance();
  const resources = instance.type.i18n || { en: {} };
  function t(key) {
    const res = resources[locale] || {};
    return res[key];
  }
  return { t };
}
const _sfc_main$7 = {
  setup() {
    return __spreadValues({}, useI18n("ja"));
  }
};
const _hoisted_1$7 = /* @__PURE__ */ createBaseVNode("h2", null, "Custom Blocks", -1);
const _hoisted_2$4 = { class: "custom-block" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$7,
    createBaseVNode("p", _hoisted_2$4, toDisplayString(_ctx.t("hello")), 1)
  ], 64);
}
if (typeof block0 === "function")
  block0(_sfc_main$7);
var CustomBlock = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$1]]);
var _sfc_main$6 = defineComponent({
  setup() {
    return {
      msg: "hello from script src!"
    };
  }
});
const _withScopeId$2 = (n) => (pushScopeId("data-v-2c227604"), n = n(), popScopeId(), n);
const _hoisted_1$6 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h2", null, "SFC Src Imports", -1));
const _hoisted_2$3 = { class: "src-imports-script" };
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "src-imports-style" }, "This should be tan", -1));
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$6,
    createBaseVNode("div", _hoisted_2$3, toDisplayString(_ctx.msg), 1),
    _hoisted_3$2
  ], 64);
}
var style_css_vue_type_style_index_0_src_scoped_true_lang = "";
var SrcImport = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", render], ["__scopeId", "data-v-2c227604"]]);
var Slotted_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = {};
const _withScopeId$1 = (n) => (pushScopeId("data-v-7d107005"), n = n(), popScopeId(), n);
const _hoisted_1$5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", null, ":slotted", -1));
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1$5,
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Slotted = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render], ["__scopeId", "data-v-7d107005"]]);
const _hoisted_1$4 = /* @__PURE__ */ createBaseVNode("h2", null, "Scan Deps from <script setup lang=ts> blocks", -1);
const _hoisted_2$2 = { class: "scan" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$4,
        createBaseVNode("div", _hoisted_2$2, toDisplayString(typeof unref(debounce) === "function" ? "ok" : "error"), 1)
      ], 64);
    };
  }
});
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("h2", null, "Async Component", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("p", null, "Testing TLA and for await compatibility with esbuild", -1);
const _hoisted_3$1 = { class: "async-component" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  async setup(__props) {
    let __temp, __restore;
    let test = "";
    const forAwaitTest = async (array) => {
      for await (const value of array) {
        test += value;
      }
    };
    [__temp, __restore] = withAsyncContext(() => forAwaitTest([Promise.resolve("a"), Promise.resolve("b")]).catch(() => {
    })), await __temp, __restore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$3,
        _hoisted_2$1,
        createBaseVNode("p", _hoisted_3$1, "ab == " + toDisplayString(unref(test)), 1)
      ], 64);
    };
  }
});
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("h2", null, "Ref Transform", -1);
const _sfc_main$2 = {
  setup(__props) {
    let a = ref(0);
    const inc = () => a.value++;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$2,
        createBaseVNode("button", {
          class: "ref-transform",
          onClick: inc
        }, toDisplayString(a.value), 1)
      ], 64);
    };
  }
};
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "comments" }, null, -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", null, "Vue SFCs", -1);
const _hoisted_3 = { class: "hmr-block" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "slotted" }, "this should be red", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const time = ref("loading...");
    window.addEventListener("load", () => {
      setTimeout(() => {
        const [entry] = performance.getEntriesByType("navigation");
        time.value = `loaded in ${entry.duration.toFixed(2)}ms.`;
      }, 0);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$1,
        _hoisted_2,
        createBaseVNode("pre", null, toDisplayString(time.value), 1),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_sfc_main$c)
        ]),
        createVNode(_sfc_main$b),
        createVNode(PreProcessors),
        createVNode(CssModules),
        createVNode(Assets),
        createVNode(CustomBlock),
        createVNode(SrcImport),
        createVNode(Slotted, null, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        }),
        createVNode(_sfc_main$4),
        (openBlock(), createBlock(Suspense, null, {
          default: withCtx(() => [
            createVNode(_sfc_main$3)
          ]),
          _: 1
        })),
        createVNode(_sfc_main$2)
      ], 64);
    };
  }
});
var _style_0 = ".custom-element[data-v-644a1dfa]{color:green}\n";
const _withScopeId = (n) => (pushScopeId("data-v-644a1dfa"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "Custom Element", -1));
const _sfc_main = {
  props: {
    label: String
  },
  setup(__props) {
    const state = reactive({ count: 0 });
    onBeforeMount(() => {
      state.count = 1;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createBaseVNode("button", {
          class: "custom-element",
          type: "button",
          onClick: _cache[0] || (_cache[0] = ($event) => unref(state).count++)
        }, toDisplayString(__props.label) + ": " + toDisplayString(unref(state).count), 1)
      ], 64);
    };
  }
};
var CustomElement = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__scopeId", "data-v-644a1dfa"]]);
createApp(_sfc_main$1).mount("#app");
customElements.define("custom-element", defineCustomElement(CustomElement));

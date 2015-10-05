System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "bundle.js": [
      "npm:react@0.14.0-rc1",
      "npm:react@0.14.0-rc1/react",
      "npm:babel-runtime@5.8.25/helpers/get",
      "npm:babel-runtime@5.8.25/helpers/inherits",
      "npm:babel-runtime@5.8.25/helpers/create-class",
      "npm:babel-runtime@5.8.25/helpers/class-call-check",
      "npm:react@0.14.0-rc1/lib/React",
      "npm:babel-runtime@5.8.25/core-js/object/get-own-property-descriptor",
      "npm:babel-runtime@5.8.25/core-js/object/create",
      "npm:babel-runtime@5.8.25/core-js/object/set-prototype-of",
      "npm:babel-runtime@5.8.25/core-js/object/define-property",
      "npm:react@0.14.0-rc1/lib/ReactDOM",
      "npm:react@0.14.0-rc1/lib/ReactDOMServer",
      "npm:react@0.14.0-rc1/lib/ReactIsomorphic",
      "npm:react@0.14.0-rc1/lib/Object.assign",
      "npm:react@0.14.0-rc1/lib/deprecated",
      "npm:core-js@1.2.1/library/fn/object/get-own-property-descriptor",
      "npm:core-js@1.2.1/library/fn/object/create",
      "npm:core-js@1.2.1/library/fn/object/set-prototype-of",
      "npm:core-js@1.2.1/library/fn/object/define-property",
      "npm:react@0.14.0-rc1/lib/ReactCurrentOwner",
      "npm:react@0.14.0-rc1/lib/ReactDOMTextComponent",
      "npm:react@0.14.0-rc1/lib/ReactDefaultInjection",
      "npm:react@0.14.0-rc1/lib/ReactInstanceHandles",
      "npm:react@0.14.0-rc1/lib/ReactMount",
      "npm:react@0.14.0-rc1/lib/ReactPerf",
      "npm:react@0.14.0-rc1/lib/ReactReconciler",
      "npm:react@0.14.0-rc1/lib/ReactUpdates",
      "npm:react@0.14.0-rc1/lib/ReactVersion",
      "npm:react@0.14.0-rc1/lib/findDOMNode",
      "npm:react@0.14.0-rc1/lib/renderSubtreeIntoContainer",
      "npm:fbjs@0.2.1/lib/warning",
      "npm:fbjs@0.2.1/lib/ExecutionEnvironment",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:react@0.14.0-rc1/lib/ReactServerRendering",
      "npm:react@0.14.0-rc1/lib/ReactChildren",
      "npm:react@0.14.0-rc1/lib/ReactComponent",
      "npm:react@0.14.0-rc1/lib/ReactClass",
      "npm:react@0.14.0-rc1/lib/ReactDOMFactories",
      "npm:react@0.14.0-rc1/lib/ReactElement",
      "npm:react@0.14.0-rc1/lib/ReactElementValidator",
      "npm:react@0.14.0-rc1/lib/ReactPropTypes",
      "npm:react@0.14.0-rc1/lib/onlyChild",
      "npm:core-js@1.2.1/library/modules/$",
      "npm:core-js@1.2.1/library/modules/es6.object.get-own-property-descriptor",
      "npm:core-js@1.2.1/library/modules/es6.object.set-prototype-of",
      "npm:core-js@1.2.1/library/modules/$.core",
      "npm:react@0.14.0-rc1/lib/DOMChildrenOperations",
      "npm:react@0.14.0-rc1/lib/DOMPropertyOperations",
      "npm:react@0.14.0-rc1/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.0-rc1/lib/escapeTextContentForBrowser",
      "npm:react@0.14.0-rc1/lib/setTextContent",
      "npm:react@0.14.0-rc1/lib/validateDOMNesting",
      "npm:react@0.14.0-rc1/lib/BeforeInputEventPlugin",
      "npm:react@0.14.0-rc1/lib/ChangeEventPlugin",
      "npm:react@0.14.0-rc1/lib/ClientReactRootIndex",
      "npm:react@0.14.0-rc1/lib/DefaultEventPluginOrder",
      "npm:react@0.14.0-rc1/lib/EnterLeaveEventPlugin",
      "npm:react@0.14.0-rc1/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.0-rc1/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.0-rc1/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.0-rc1/lib/ReactDOMComponent",
      "npm:react@0.14.0-rc1/lib/ReactEventListener",
      "npm:react@0.14.0-rc1/lib/ReactInjection",
      "npm:react@0.14.0-rc1/lib/ReactReconcileTransaction",
      "npm:react@0.14.0-rc1/lib/SelectEventPlugin",
      "npm:react@0.14.0-rc1/lib/ServerReactRootIndex",
      "npm:react@0.14.0-rc1/lib/SimpleEventPlugin",
      "npm:react@0.14.0-rc1/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.0-rc1/lib/ReactDefaultPerf",
      "npm:react@0.14.0-rc1/lib/ReactRootIndex",
      "npm:fbjs@0.2.1/lib/invariant",
      "npm:react@0.14.0-rc1/lib/DOMProperty",
      "npm:react@0.14.0-rc1/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.0-rc1/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.0-rc1/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.0-rc1/lib/ReactInstanceMap",
      "npm:react@0.14.0-rc1/lib/ReactMarkupChecksum",
      "npm:react@0.14.0-rc1/lib/ReactUpdateQueue",
      "npm:fbjs@0.2.1/lib/emptyObject",
      "npm:fbjs@0.2.1/lib/containsNode",
      "npm:react@0.14.0-rc1/lib/instantiateReactComponent",
      "npm:react@0.14.0-rc1/lib/setInnerHTML",
      "npm:react@0.14.0-rc1/lib/shouldUpdateReactComponent",
      "npm:react@0.14.0-rc1/lib/ReactRef",
      "npm:react@0.14.0-rc1/lib/CallbackQueue",
      "npm:react@0.14.0-rc1/lib/PooledClass",
      "npm:react@0.14.0-rc1/lib/Transaction",
      "npm:fbjs@0.2.1/lib/emptyFunction",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:react@0.14.0-rc1/lib/ReactServerBatchingStrategy",
      "npm:react@0.14.0-rc1/lib/ReactServerRenderingTransaction",
      "npm:react@0.14.0-rc1/lib/traverseAllChildren",
      "npm:react@0.14.0-rc1/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.0-rc1/lib/ReactPropTypeLocations",
      "npm:react@0.14.0-rc1/lib/ReactPropTypeLocationNames",
      "npm:fbjs@0.2.1/lib/keyMirror",
      "npm:fbjs@0.2.1/lib/keyOf",
      "npm:fbjs@0.2.1/lib/mapObject",
      "npm:react@0.14.0-rc1/lib/getIteratorFn",
      "npm:core-js@1.2.1/library/modules/$.to-iobject",
      "npm:core-js@1.2.1/library/modules/$.object-sap",
      "npm:core-js@1.2.1/library/modules/$.def",
      "npm:core-js@1.2.1/library/modules/$.set-proto",
      "npm:react@0.14.0-rc1/lib/Danger",
      "npm:react@0.14.0-rc1/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.0-rc1/lib/quoteAttributeValueForBrowser",
      "npm:react@0.14.0-rc1/lib/ReactDOMIDOperations",
      "npm:react@0.14.0-rc1/lib/EventConstants",
      "npm:react@0.14.0-rc1/lib/EventPropagators",
      "npm:react@0.14.0-rc1/lib/FallbackCompositionState",
      "npm:react@0.14.0-rc1/lib/SyntheticCompositionEvent",
      "npm:react@0.14.0-rc1/lib/SyntheticInputEvent",
      "npm:react@0.14.0-rc1/lib/EventPluginHub",
      "npm:react@0.14.0-rc1/lib/SyntheticEvent",
      "npm:react@0.14.0-rc1/lib/getEventTarget",
      "npm:react@0.14.0-rc1/lib/isEventSupported",
      "npm:react@0.14.0-rc1/lib/isTextInputElement",
      "npm:react@0.14.0-rc1/lib/SyntheticMouseEvent",
      "npm:react@0.14.0-rc1/lib/AutoFocusUtils",
      "npm:react@0.14.0-rc1/lib/CSSPropertyOperations",
      "npm:react@0.14.0-rc1/lib/ReactDOMButton",
      "npm:react@0.14.0-rc1/lib/ReactDOMInput",
      "npm:react@0.14.0-rc1/lib/ReactDOMOption",
      "npm:react@0.14.0-rc1/lib/ReactDOMSelect",
      "npm:react@0.14.0-rc1/lib/ReactDOMTextarea",
      "npm:react@0.14.0-rc1/lib/ReactMultiChild",
      "npm:fbjs@0.2.1/lib/shallowEqual",
      "npm:fbjs@0.2.1/lib/EventListener",
      "npm:fbjs@0.2.1/lib/getUnboundedScrollPosition",
      "npm:react@0.14.0-rc1/lib/ReactComponentEnvironment",
      "npm:react@0.14.0-rc1/lib/ReactEmptyComponent",
      "npm:react@0.14.0-rc1/lib/ReactNativeComponent",
      "npm:react@0.14.0-rc1/lib/ReactInputSelection",
      "npm:fbjs@0.2.1/lib/getActiveElement",
      "npm:react@0.14.0-rc1/lib/SyntheticClipboardEvent",
      "npm:react@0.14.0-rc1/lib/SyntheticFocusEvent",
      "npm:react@0.14.0-rc1/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.0-rc1/lib/SyntheticDragEvent",
      "npm:react@0.14.0-rc1/lib/SyntheticTouchEvent",
      "npm:react@0.14.0-rc1/lib/SyntheticUIEvent",
      "npm:react@0.14.0-rc1/lib/SyntheticWheelEvent",
      "npm:react@0.14.0-rc1/lib/getEventCharCode",
      "npm:react@0.14.0-rc1/lib/ReactDefaultPerfAnalysis",
      "npm:fbjs@0.2.1/lib/performanceNow",
      "npm:react@0.14.0-rc1/lib/EventPluginRegistry",
      "npm:react@0.14.0-rc1/lib/ReactEventEmitterMixin",
      "npm:react@0.14.0-rc1/lib/ViewportMetrics",
      "npm:react@0.14.0-rc1/lib/adler32",
      "npm:fbjs@0.2.1/lib/isTextNode",
      "npm:react@0.14.0-rc1/lib/ReactCompositeComponent",
      "npm:react@0.14.0-rc1/lib/ReactOwner",
      "npm:process@0.10.1",
      "npm:core-js@1.2.1/library/modules/$.iobject",
      "npm:core-js@1.2.1/library/modules/$.defined",
      "npm:core-js@1.2.1/library/modules/$.fails",
      "npm:core-js@1.2.1/library/modules/$.global",
      "npm:core-js@1.2.1/library/modules/$.is-object",
      "npm:core-js@1.2.1/library/modules/$.an-object",
      "npm:core-js@1.2.1/library/modules/$.ctx",
      "npm:fbjs@0.2.1/lib/createNodesFromMarkup",
      "npm:fbjs@0.2.1/lib/getMarkupWrap",
      "npm:react@0.14.0-rc1/lib/accumulateInto",
      "npm:react@0.14.0-rc1/lib/forEachAccumulated",
      "npm:react@0.14.0-rc1/lib/getTextContentAccessor",
      "npm:react@0.14.0-rc1/lib/EventPluginUtils",
      "npm:react@0.14.0-rc1/lib/ReactErrorUtils",
      "npm:react@0.14.0-rc1/lib/getEventModifierState",
      "npm:fbjs@0.2.1/lib/focusNode",
      "npm:react@0.14.0-rc1/lib/CSSProperty",
      "npm:fbjs@0.2.1/lib/camelizeStyleName",
      "npm:react@0.14.0-rc1/lib/dangerousStyleValue",
      "npm:fbjs@0.2.1/lib/hyphenateStyleName",
      "npm:react@0.14.0-rc1/lib/memoizeStringOnly",
      "npm:react@0.14.0-rc1/lib/LinkedValueUtils",
      "npm:react@0.14.0-rc1/lib/ReactChildReconciler",
      "npm:react@0.14.0-rc1/lib/flattenChildren",
      "npm:react@0.14.0-rc1/lib/ReactDOMSelection",
      "npm:react@0.14.0-rc1/lib/getEventKey",
      "npm:fbjs@0.2.1/lib/performance",
      "npm:fbjs@0.2.1/lib/isNode",
      "npm:process@0.10.1/browser",
      "npm:core-js@1.2.1/library/modules/$.cof",
      "npm:core-js@1.2.1/library/modules/$.a-function",
      "npm:fbjs@0.2.1/lib/createArrayFromMixed",
      "npm:fbjs@0.2.1/lib/camelize",
      "npm:fbjs@0.2.1/lib/hyphenate",
      "npm:react@0.14.0-rc1/lib/getNodeForCharacterOffset",
      "npm:fbjs@0.2.1/lib/toArray",
      "npm:react-dom@0.14.0-rc1",
      "npm:react-dom@0.14.0-rc1/index"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.25",
    "core-js": "npm:core-js@1.2.1",
    "css": "npm:jspm-loader-css@1.0.1-beta1",
    "css-global": "npm:jspm-loader-css@1.0.1-beta1",
    "css-modules": "npm:jspm-loader-css-modules@1.0.1-beta1",
    "postcss-safe-parser": "npm:postcss-safe-parser@1.0.1",
    "react": "npm:react@0.14.0-rc1",
    "react-dom": "npm:react-dom@0.14.0-rc1",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.5.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:core-js@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:css-modules-loader-core@1.0.0-beta4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "icss-replace-symbols": "npm:icss-replace-symbols@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@5.0.8",
      "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0-beta2",
      "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.0.0-beta1",
      "postcss-modules-scope": "npm:postcss-modules-scope@1.0.0-beta2",
      "postcss-modules-values": "npm:postcss-modules-values@1.0.0"
    },
    "npm:css-selector-tokenizer@0.5.4": {
      "cssesc": "npm:cssesc@0.1.0",
      "fastparse": "npm:fastparse@1.1.1"
    },
    "npm:debounce@1.0.0": {
      "date-now": "npm:date-now@1.0.1"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:fastparse@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:fbjs@0.2.1": {
      "core-js": "npm:core-js@1.2.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "promise": "npm:promise@7.0.4",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:has-flag@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:js-base64@2.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:jspm-loader-css-modules@1.0.1-beta1": {
      "jspm-loader-css": "npm:jspm-loader-css@1.0.1-beta1"
    },
    "npm:jspm-loader-css@1.0.1-beta1": {
      "css-modules-loader-core": "npm:css-modules-loader-core@1.0.0-beta4",
      "debounce": "npm:debounce@1.0.0",
      "path": "npm:path@0.12.7",
      "toposort": "npm:toposort@0.2.12"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path@0.12.7": {
      "process": "npm:process@0.11.2",
      "util": "npm:util@0.10.3"
    },
    "npm:postcss-modules-extract-imports@1.0.0-beta2": {
      "postcss": "npm:postcss@5.0.8",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-modules-local-by-default@1.0.0-beta1": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
      "postcss": "npm:postcss@5.0.8"
    },
    "npm:postcss-modules-scope@1.0.0-beta2": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
      "postcss": "npm:postcss@5.0.8",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-modules-values@1.0.0": {
      "icss-replace-symbols": "npm:icss-replace-symbols@1.0.1",
      "postcss": "npm:postcss@5.0.8"
    },
    "npm:postcss-safe-parser@1.0.1": {
      "postcss": "npm:postcss@5.0.8"
    },
    "npm:postcss@5.0.8": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.5.1",
      "supports-color": "npm:supports-color@3.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:react-dom@0.14.0-rc1": {
      "react": "npm:react@0.14.0-rc1"
    },
    "npm:react@0.14.0-rc1": {
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.2.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.5.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:supports-color@3.1.1": {
      "has-flag": "npm:has-flag@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:toposort@0.2.12": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

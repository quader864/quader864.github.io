// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"n0fw4":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5e0263af3c14d121";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"kTBnD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _smoothScrollbar = require("smooth-scrollbar");
var _smoothScrollbarDefault = parcelHelpers.interopDefault(_smoothScrollbar);
var _bootstrapMinCss = require("bootstrap/dist/css/bootstrap.min.css");
var _bootstrapBundleMinJs = require("bootstrap/dist/js/bootstrap.bundle.min.js");
// Initialize smooth scrollbar
const scrollbar = (0, _smoothScrollbarDefault.default).init(document.querySelector('#my-scrollbar'), {
    damping: 0.04,
    alwaysShowTracks: true,
    continuousScrolling: false
});
// Utility Functions
function showAlert(message, isSuccess = false) {
    const alertBox = document.createElement('div');
    alertBox.className = `alert alert-${isSuccess ? 'success' : 'danger'} position-fixed top-0 start-0 end-0 m-3`;
    alertBox.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
      <span>${message}</span>
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
  `;
    document.body.prepend(alertBox);
    setTimeout(()=>alertBox.remove(), 5000);
}
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function setLoadingState(form, isLoading) {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = isLoading;
        submitBtn.innerHTML = isLoading ? '<span class="spinner-border spinner-border-sm"></span> Processing...' : submitBtn.dataset.originalText || 'Submit';
    }
}
// Main Auth Logic
document.addEventListener("DOMContentLoaded", ()=>{
    const API_BASE_URL = "https://api-verifier.onrender.com";
    const FRONTEND_BASE_URL = "https://quader864.github.io";
    // Save original button texts
    document.querySelectorAll('button[type="submit"]').forEach((btn)=>{
        btn.dataset.originalText = btn.textContent;
    });
    // --- Signup Logic ---
    const signupForm = document.getElementById("signupForm");
    if (signupForm) signupForm.addEventListener("submit", async function(e) {
        e.preventDefault();
        setLoadingState(signupForm, true);
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        // Client-side validation
        if (!firstName || !lastName || !email || !password) {
            showAlert("All fields are required!", false);
            setLoadingState(signupForm, false);
            return;
        }
        if (!validateEmail(email)) {
            showAlert("Please enter a valid email address", false);
            setLoadingState(signupForm, false);
            return;
        }
        if (password.length < 8) {
            showAlert("Password must be at least 8 characters", false);
            setLoadingState(signupForm, false);
            return;
        }
        try {
            const response = await fetch(`${API_BASE_URL}/web-register`, {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password
                })
            });
            const data = await response.json();
            if (response.status === 201) {
                showAlert(data.message || "Account created successfully! Redirecting...", true);
                window.location.href = data.redirectUrl || `${FRONTEND_BASE_URL}/profile.html`;
            } else showAlert(data.message || "Registration failed", false);
        } catch (err) {
            console.error("Fetch error:", err);
            showAlert("Network error. Please try again.", false);
        } finally{
            setLoadingState(signupForm, false);
        }
    });
    // --- Login Logic ---
    const loginForm = document.getElementById("loginForm");
    if (loginForm) loginForm.addEventListener("submit", async function(e) {
        e.preventDefault();
        setLoadingState(loginForm, true);
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;
        if (!email || !password) {
            showAlert("Both email and password are required", false);
            setLoadingState(loginForm, false);
            return;
        }
        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await response.json();
            if (response.ok) {
                showAlert(data.message || "Logged in successfully! Redirecting...", true);
                window.location.href = data.redirectUrl || `${FRONTEND_BASE_URL}/profile.html`;
            } else showAlert(data.message || "Login failed. Please check your credentials.", false);
        } catch (err) {
            console.error("Login error:", err);
            showAlert("Network error. Please try again.", false);
        } finally{
            setLoadingState(loginForm, false);
        }
    });
    // --- Logout Logic ---
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) logoutBtn.addEventListener("click", async ()=>{
        try {
            const response = await fetch(`${API_BASE_URL}/logout`, {
                method: "GET",
                credentials: "include"
            });
            const data = await response.json();
            if (response.ok) {
                showAlert(data.message || "Logged out successfully", true);
                window.location.href = data.redirectUrl || `${FRONTEND_BASE_URL}/index.html`;
            } else showAlert(data.message || "Logout failed. Please try again.", false);
        } catch (err) {
            console.error("Logout error:", err);
            showAlert("Network error during logout", false);
        }
    });
    // --- Session Verification for Protected Pages ---
    if (document.querySelector('.protected-page')) verifySession();
    async function verifySession() {
        try {
            const response = await fetch(`${API_BASE_URL}/verify`, {
                method: "POST",
                credentials: "include"
            });
            const data = await response.json();
            if (!response.ok || data.status !== "authorized") window.location.href = `${FRONTEND_BASE_URL}/login.html`;
        } catch (err) {
            console.error("Session verification failed:", err);
            window.location.href = `${FRONTEND_BASE_URL}/login.html`;
        }
    }
});

},{"smooth-scrollbar":"lwF0H","bootstrap/dist/css/bootstrap.min.css":"i5LP7","bootstrap/dist/js/bootstrap.bundle.min.js":"joWv1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lwF0H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollbarPlugin", ()=>(0, _plugin.ScrollbarPlugin));
var _tslib = require("tslib");
var _polyfills = require("./polyfills");
var _scrollbar = require("./scrollbar");
var _plugin = require("./plugin");
var _style = require("./style");
/**
 * cast `I.Scrollbar` to `Scrollbar` to avoid error
 *
 * `I.Scrollbar` is not assignable to `Scrollbar`:
 *     "privateProp" is missing in `I.Scrollbar`
 *
 * @see https://github.com/Microsoft/TypeScript/issues/2672
 */ var SmoothScrollbar = /** @class */ function(_super) {
    (0, _tslib.__extends)(SmoothScrollbar, _super);
    function SmoothScrollbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initializes a scrollbar on the given element.
     *
     * @param elem The DOM element that you want to initialize scrollbar to
     * @param [options] Initial options
     */ SmoothScrollbar.init = function(elem, options) {
        if (!elem || elem.nodeType !== 1) throw new TypeError("expect element to be DOM Element, but got " + elem);
        // attach stylesheet
        (0, _style.attachStyle)();
        if ((0, _scrollbar.scrollbarMap).has(elem)) return (0, _scrollbar.scrollbarMap).get(elem);
        return new (0, _scrollbar.Scrollbar)(elem, options);
    };
    /**
     * Automatically init scrollbar on all elements base on the selector `[data-scrollbar]`
     *
     * @param options Initial options
     */ SmoothScrollbar.initAll = function(options) {
        return Array.from(document.querySelectorAll('[data-scrollbar]'), function(elem) {
            return SmoothScrollbar.init(elem, options);
        });
    };
    /**
     * Check if there is a scrollbar on given element
     *
     * @param elem The DOM element that you want to check
     */ SmoothScrollbar.has = function(elem) {
        return (0, _scrollbar.scrollbarMap).has(elem);
    };
    /**
     * Gets scrollbar on the given element.
     * If no scrollbar instance exsits, returns `undefined`
     *
     * @param elem The DOM element that you want to check.
     */ SmoothScrollbar.get = function(elem) {
        return (0, _scrollbar.scrollbarMap).get(elem);
    };
    /**
     * Returns an array that contains all scrollbar instances
     */ SmoothScrollbar.getAll = function() {
        return Array.from((0, _scrollbar.scrollbarMap).values());
    };
    /**
     * Removes scrollbar on the given element
     */ SmoothScrollbar.destroy = function(elem) {
        var scrollbar = (0, _scrollbar.scrollbarMap).get(elem);
        if (scrollbar) scrollbar.destroy();
    };
    /**
     * Removes all scrollbar instances from current document
     */ SmoothScrollbar.destroyAll = function() {
        (0, _scrollbar.scrollbarMap).forEach(function(scrollbar) {
            scrollbar.destroy();
        });
    };
    /**
     * Attaches plugins to scrollbars
     *
     * @param ...Plugins Scrollbar plugin classes
     */ SmoothScrollbar.use = function() {
        var Plugins = [];
        for(var _i = 0; _i < arguments.length; _i++)Plugins[_i] = arguments[_i];
        return (0, _plugin.addPlugins).apply(void 0, Plugins);
    };
    /**
     * Attaches default style sheets to current document.
     * You don't need to call this method manually unless
     * you removed the default styles via `Scrollbar.detachStyle()`
     */ SmoothScrollbar.attachStyle = function() {
        return (0, _style.attachStyle)();
    };
    /**
     * Removes default styles from current document.
     * Use this method when you want to use your own css for scrollbars.
     */ SmoothScrollbar.detachStyle = function() {
        return (0, _style.detachStyle)();
    };
    SmoothScrollbar.version = "8.8.4";
    SmoothScrollbar.ScrollbarPlugin = (0, _plugin.ScrollbarPlugin);
    return SmoothScrollbar;
}((0, _scrollbar.Scrollbar));
exports.default = SmoothScrollbar;

},{"tslib":"iC1Dx","./polyfills":"jNLGZ","./scrollbar":"1lZQK","./plugin":"6ZkZJ","./style":"j1fs3","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iC1Dx":[function(require,module,exports,__globalThis) {
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
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
parcelHelpers.export(exports, "__spread", ()=>__spread);
parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jNLGZ":[function(require,module,exports,__globalThis) {

},{}],"1lZQK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrollbarMap", ()=>scrollbarMap);
parcelHelpers.export(exports, "Scrollbar", ()=>Scrollbar);
var _tslib = require("tslib");
var _utils = require("./utils");
var _options = require("./options");
var _ = require("./utils/");
var _1 = require("./decorators/");
var _2 = require("./track/");
var _3 = require("./geometry/");
var _4 = require("./scrolling/");
var _plugin = require("./plugin");
var _5 = require("./events/");
var scrollbarMap = new Map();
var Scrollbar = /** @class */ function() {
    function Scrollbar(containerEl, options) {
        var _this = this;
        /**
         * Current scrolling offsets
         */ this.offset = {
            x: 0,
            y: 0
        };
        /**
         * Max-allowed scrolling offsets
         */ this.limit = {
            x: Infinity,
            y: Infinity
        };
        /**
         * Container bounding rect
         */ this.bounding = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        // private _observer: ResizeObserver;
        this._plugins = [];
        this._momentum = {
            x: 0,
            y: 0
        };
        this._listeners = new Set();
        this.containerEl = containerEl;
        var contentEl = this.contentEl = document.createElement('div');
        this.options = new (0, _options.Options)(options);
        // mark as a scroll element
        containerEl.setAttribute('data-scrollbar', 'true');
        // make container focusable
        containerEl.setAttribute('tabindex', '-1');
        (0, _.setStyle)(containerEl, {
            overflow: 'hidden',
            outline: 'none'
        });
        // enable touch event capturing in IE, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/39
        if (window.navigator.msPointerEnabled) containerEl.style.msTouchAction = 'none';
        // mount content
        contentEl.className = 'scroll-content';
        Array.from(containerEl.childNodes).forEach(function(node) {
            contentEl.appendChild(node);
        });
        containerEl.appendChild(contentEl);
        // attach track
        this.track = new (0, _2.TrackController)(this);
        // initial measuring
        this.size = this.getSize();
        // init plugins
        this._plugins = (0, _plugin.initPlugins)(this, this.options.plugins);
        // preserve scroll offset
        var scrollLeft = containerEl.scrollLeft, scrollTop = containerEl.scrollTop;
        containerEl.scrollLeft = containerEl.scrollTop = 0;
        this.setPosition(scrollLeft, scrollTop, {
            withoutCallbacks: true
        });
        // FIXME: update typescript
        var ResizeObserver = window.ResizeObserver;
        // observe
        if (typeof ResizeObserver === 'function') {
            this._observer = new ResizeObserver(function() {
                _this.update();
            });
            this._observer.observe(contentEl);
        }
        scrollbarMap.set(containerEl, this);
        // wait for DOM ready
        requestAnimationFrame(function() {
            _this._init();
        });
    }
    Object.defineProperty(Scrollbar.prototype, "parent", {
        /**
         * Parent scrollbar
         */ get: function() {
            var elem = this.containerEl.parentElement;
            while(elem){
                var parentScrollbar = scrollbarMap.get(elem);
                if (parentScrollbar) return parentScrollbar;
                elem = elem.parentElement;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollTop", {
        /**
         * Gets or sets `scrollbar.offset.y`
         */ get: function() {
            return this.offset.y;
        },
        set: function(y) {
            this.setPosition(this.scrollLeft, y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollLeft", {
        /**
         * Gets or sets `scrollbar.offset.x`
         */ get: function() {
            return this.offset.x;
        },
        set: function(x) {
            this.setPosition(x, this.scrollTop);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the size of the scrollbar container element
     * and the content wrapper element
     */ Scrollbar.prototype.getSize = function() {
        return (0, _3.getSize)(this);
    };
    /**
     * Forces scrollbar to update geometry infomation.
     *
     * By default, scrollbars are automatically updated with `100ms` debounce (or `MutationObserver` fires).
     * You can call this method to force an update when you modified contents
     */ Scrollbar.prototype.update = function() {
        (0, _3.update)(this);
        this._plugins.forEach(function(plugin) {
            plugin.onUpdate();
        });
    };
    /**
     * Checks if an element is visible in the current view area
     */ Scrollbar.prototype.isVisible = function(elem) {
        return (0, _3.isVisible)(this, elem);
    };
    /**
     * Sets the scrollbar to the given offset without easing
     */ Scrollbar.prototype.setPosition = function(x, y, options) {
        var _this = this;
        if (x === void 0) x = this.offset.x;
        if (y === void 0) y = this.offset.y;
        if (options === void 0) options = {};
        var status = (0, _4.setPosition)(this, x, y);
        if (!status || options.withoutCallbacks) return;
        this._listeners.forEach(function(fn) {
            fn.call(_this, status);
        });
    };
    /**
     * Scrolls to given position with easing function
     */ Scrollbar.prototype.scrollTo = function(x, y, duration, options) {
        if (x === void 0) x = this.offset.x;
        if (y === void 0) y = this.offset.y;
        if (duration === void 0) duration = 0;
        if (options === void 0) options = {};
        (0, _4.scrollTo)(this, x, y, duration, options);
    };
    /**
     * Scrolls the target element into visible area of scrollbar,
     * likes the DOM method `element.scrollIntoView().
     */ Scrollbar.prototype.scrollIntoView = function(elem, options) {
        if (options === void 0) options = {};
        (0, _4.scrollIntoView)(this, elem, options);
    };
    /**
     * Adds scrolling listener
     */ Scrollbar.prototype.addListener = function(fn) {
        if (typeof fn !== 'function') throw new TypeError('[smooth-scrollbar] scrolling listener should be a function');
        this._listeners.add(fn);
    };
    /**
     * Removes listener previously registered with `scrollbar.addListener()`
     */ Scrollbar.prototype.removeListener = function(fn) {
        this._listeners.delete(fn);
    };
    /**
     * Adds momentum and applys delta transformers.
     */ Scrollbar.prototype.addTransformableMomentum = function(x, y, fromEvent, callback) {
        this._updateDebounced();
        var finalDelta = this._plugins.reduce(function(delta, plugin) {
            return plugin.transformDelta(delta, fromEvent) || delta;
        }, {
            x: x,
            y: y
        });
        var willScroll = !this._shouldPropagateMomentum(finalDelta.x, finalDelta.y);
        if (willScroll) this.addMomentum(finalDelta.x, finalDelta.y);
        if (callback) callback.call(this, willScroll);
    };
    /**
     * Increases scrollbar's momentum
     */ Scrollbar.prototype.addMomentum = function(x, y) {
        this.setMomentum(this._momentum.x + x, this._momentum.y + y);
    };
    /**
     * Sets scrollbar's momentum to given value
     */ Scrollbar.prototype.setMomentum = function(x, y) {
        if (this.limit.x === 0) x = 0;
        if (this.limit.y === 0) y = 0;
        if (this.options.renderByPixels) {
            x = Math.round(x);
            y = Math.round(y);
        }
        this._momentum.x = x;
        this._momentum.y = y;
    };
    /**
     * Update options for specific plugin
     *
     * @param pluginName Name of the plugin
     * @param [options] An object includes the properties that you want to update
     */ Scrollbar.prototype.updatePluginOptions = function(pluginName, options) {
        this._plugins.forEach(function(plugin) {
            if (plugin.name === pluginName) Object.assign(plugin.options, options);
        });
    };
    Scrollbar.prototype.destroy = function() {
        var _a = this, containerEl = _a.containerEl, contentEl = _a.contentEl;
        (0, _.clearEventsOn)(this);
        this._listeners.clear();
        this.setMomentum(0, 0);
        cancelAnimationFrame(this._renderID);
        if (this._observer) this._observer.disconnect();
        scrollbarMap.delete(this.containerEl);
        // restore contents
        var childNodes = Array.from(contentEl.childNodes);
        while(containerEl.firstChild)containerEl.removeChild(containerEl.firstChild);
        childNodes.forEach(function(el) {
            containerEl.appendChild(el);
        });
        // reset scroll position
        (0, _.setStyle)(containerEl, {
            overflow: ''
        });
        containerEl.scrollTop = this.scrollTop;
        containerEl.scrollLeft = this.scrollLeft;
        // invoke plugin.onDestroy
        this._plugins.forEach(function(plugin) {
            plugin.onDestroy();
        });
        this._plugins.length = 0;
    };
    Scrollbar.prototype._init = function() {
        var _this = this;
        this.update();
        // init evet handlers
        Object.keys(_5).forEach(function(prop) {
            _5[prop](_this);
        });
        // invoke `plugin.onInit`
        this._plugins.forEach(function(plugin) {
            plugin.onInit();
        });
        this._render();
    };
    Scrollbar.prototype._updateDebounced = function() {
        this.update();
    };
    // check whether to propagate monmentum to parent scrollbar
    // the following situations are considered as `true`:
    //         1. continuous scrolling is enabled (automatically disabled when overscroll is enabled)
    //         2. scrollbar reaches one side and is not about to scroll on the other direction
    Scrollbar.prototype._shouldPropagateMomentum = function(deltaX, deltaY) {
        if (deltaX === void 0) deltaX = 0;
        if (deltaY === void 0) deltaY = 0;
        var _a = this, options = _a.options, offset = _a.offset, limit = _a.limit;
        if (!options.continuousScrolling) return false;
        // force an update when scrollbar is "unscrollable", see #106
        if (limit.x === 0 && limit.y === 0) this._updateDebounced();
        var destX = (0, _utils.clamp)(deltaX + offset.x, 0, limit.x);
        var destY = (0, _utils.clamp)(deltaY + offset.y, 0, limit.y);
        var res = true;
        // offsets are not about to change
        // `&=` operator is not allowed for boolean types
        res = res && destX === offset.x;
        res = res && destY === offset.y;
        // current offsets are on the edge
        res = res && (offset.x === limit.x || offset.x === 0 || offset.y === limit.y || offset.y === 0);
        return res;
    };
    Scrollbar.prototype._render = function() {
        var _momentum = this._momentum;
        if (_momentum.x || _momentum.y) {
            var nextX = this._nextTick('x');
            var nextY = this._nextTick('y');
            _momentum.x = nextX.momentum;
            _momentum.y = nextY.momentum;
            this.setPosition(nextX.position, nextY.position);
        }
        var remain = (0, _tslib.__assign)({}, this._momentum);
        this._plugins.forEach(function(plugin) {
            plugin.onRender(remain);
        });
        this._renderID = requestAnimationFrame(this._render.bind(this));
    };
    Scrollbar.prototype._nextTick = function(direction) {
        var _a = this, options = _a.options, offset = _a.offset, _momentum = _a._momentum;
        var current = offset[direction];
        var remain = _momentum[direction];
        if (Math.abs(remain) <= 0.1) return {
            momentum: 0,
            position: current + remain
        };
        var nextMomentum = remain * (1 - options.damping);
        if (options.renderByPixels) nextMomentum |= 0;
        return {
            momentum: nextMomentum,
            position: current + remain - nextMomentum
        };
    };
    (0, _tslib.__decorate)([
        (0, _1.debounce)(100, true)
    ], Scrollbar.prototype, "_updateDebounced", null);
    return Scrollbar;
}();

},{"tslib":"iC1Dx","./utils":"1ymNo","./options":"7oxNn","./utils/":"1ymNo","./decorators/":"bGjVF","./track/":"bECjl","./geometry/":"bdbkb","./scrolling/":"lJA2C","./plugin":"6ZkZJ","./events/":"i4saI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1ymNo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>(0, _clamp.clamp));
parcelHelpers.export(exports, "debounce", ()=>(0, _debounce.debounce));
var _eventHub = require("./event-hub");
parcelHelpers.exportAll(_eventHub, exports);
var _getPointerData = require("./get-pointer-data");
parcelHelpers.exportAll(_getPointerData, exports);
var _getPosition = require("./get-position");
parcelHelpers.exportAll(_getPosition, exports);
var _isOneOf = require("./is-one-of");
parcelHelpers.exportAll(_isOneOf, exports);
var _setStyle = require("./set-style");
parcelHelpers.exportAll(_setStyle, exports);
var _touchRecord = require("./touch-record");
parcelHelpers.exportAll(_touchRecord, exports);
var _clamp = require("./clamp");
var _debounce = require("./debounce");

},{"./event-hub":"dQ3WI","./get-pointer-data":"5dSN7","./get-position":"l6cMg","./is-one-of":"gnBnL","./set-style":"blJGs","./touch-record":"5y0id","./clamp":"f5yv3","./debounce":"jm6Vp","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dQ3WI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventScope", ()=>eventScope);
parcelHelpers.export(exports, "clearEventsOn", ()=>clearEventsOn);
var eventListenerOptions;
var eventMap = new WeakMap();
function getOptions() {
    if (eventListenerOptions !== undefined) return eventListenerOptions;
    var supportPassiveEvent = false;
    try {
        var noop = function() {};
        var options = Object.defineProperty({}, 'passive', {
            enumerable: true,
            get: function() {
                supportPassiveEvent = true;
                return true;
            }
        });
        window.addEventListener('testPassive', noop, options);
        window.removeEventListener('testPassive', noop, options);
    } catch (e) {}
    eventListenerOptions = supportPassiveEvent ? {
        passive: false
    } : false;
    return eventListenerOptions;
}
function eventScope(scrollbar) {
    var configs = eventMap.get(scrollbar) || [];
    eventMap.set(scrollbar, configs);
    return function addEvent(elem, events, fn) {
        function handler(event) {
            // ignore default prevented events
            if (event.defaultPrevented) return;
            fn(event);
        }
        events.split(/\s+/g).forEach(function(eventName) {
            configs.push({
                elem: elem,
                eventName: eventName,
                handler: handler
            });
            elem.addEventListener(eventName, handler, getOptions());
        });
    };
}
function clearEventsOn(scrollbar) {
    var configs = eventMap.get(scrollbar);
    if (!configs) return;
    configs.forEach(function(_a) {
        var elem = _a.elem, eventName = _a.eventName, handler = _a.handler;
        elem.removeEventListener(eventName, handler, getOptions());
    });
    eventMap.delete(scrollbar);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5dSN7":[function(require,module,exports,__globalThis) {
/**
 * Get pointer/touch data
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPointerData", ()=>getPointerData);
function getPointerData(evt) {
    // if is touch event, return last item in touchList
    // else return original event
    return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l6cMg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Get pointer/finger position
 */ parcelHelpers.export(exports, "getPosition", ()=>getPosition);
var _getPointerData = require("./get-pointer-data");
function getPosition(evt) {
    var data = (0, _getPointerData.getPointerData)(evt);
    return {
        x: data.clientX,
        y: data.clientY
    };
}

},{"./get-pointer-data":"5dSN7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gnBnL":[function(require,module,exports,__globalThis) {
/**
 * Check if `a` is one of `[...b]`
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isOneOf", ()=>isOneOf);
function isOneOf(a, b) {
    if (b === void 0) b = [];
    return b.some(function(v) {
        return a === v;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"blJGs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setStyle", ()=>setStyle);
var VENDOR_PREFIX = [
    'webkit',
    'moz',
    'ms',
    'o'
];
var RE = new RegExp("^-(?!(?:" + VENDOR_PREFIX.join('|') + ")-)");
function autoPrefix(styles) {
    var res = {};
    Object.keys(styles).forEach(function(prop) {
        if (!RE.test(prop)) {
            res[prop] = styles[prop];
            return;
        }
        var val = styles[prop];
        prop = prop.replace(/^-/, '');
        res[prop] = val;
        VENDOR_PREFIX.forEach(function(prefix) {
            res["-" + prefix + "-" + prop] = val;
        });
    });
    return res;
}
function setStyle(elem, styles) {
    styles = autoPrefix(styles);
    Object.keys(styles).forEach(function(prop) {
        var cssProp = prop.replace(/^-/, '').replace(/-([a-z])/g, function(_, $1) {
            return $1.toUpperCase();
        });
        elem.style[cssProp] = styles[prop];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5y0id":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tracker", ()=>Tracker);
parcelHelpers.export(exports, "TouchRecord", ()=>TouchRecord);
var _tslib = require("tslib");
var _getPosition = require("./get-position");
var Tracker = /** @class */ function() {
    function Tracker(touch) {
        this.velocityMultiplier = window.devicePixelRatio;
        this.updateTime = Date.now();
        this.delta = {
            x: 0,
            y: 0
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.lastPosition = {
            x: 0,
            y: 0
        };
        this.lastPosition = (0, _getPosition.getPosition)(touch);
    }
    Tracker.prototype.update = function(touch) {
        var _a = this, velocity = _a.velocity, updateTime = _a.updateTime, lastPosition = _a.lastPosition;
        var now = Date.now();
        var position = (0, _getPosition.getPosition)(touch);
        var delta = {
            x: -(position.x - lastPosition.x),
            y: -(position.y - lastPosition.y)
        };
        var duration = now - updateTime || 16.7;
        var vx = delta.x / duration * 16.7;
        var vy = delta.y / duration * 16.7;
        velocity.x = vx * this.velocityMultiplier;
        velocity.y = vy * this.velocityMultiplier;
        this.delta = delta;
        this.updateTime = now;
        this.lastPosition = position;
    };
    return Tracker;
}();
var TouchRecord = /** @class */ function() {
    function TouchRecord() {
        this._touchList = {};
    }
    Object.defineProperty(TouchRecord.prototype, "_primitiveValue", {
        get: function() {
            return {
                x: 0,
                y: 0
            };
        },
        enumerable: true,
        configurable: true
    });
    TouchRecord.prototype.isActive = function() {
        return this._activeTouchID !== undefined;
    };
    TouchRecord.prototype.getDelta = function() {
        var tracker = this._getActiveTracker();
        if (!tracker) return this._primitiveValue;
        return (0, _tslib.__assign)({}, tracker.delta);
    };
    TouchRecord.prototype.getVelocity = function() {
        var tracker = this._getActiveTracker();
        if (!tracker) return this._primitiveValue;
        return (0, _tslib.__assign)({}, tracker.velocity);
    };
    TouchRecord.prototype.getEasingDistance = function(damping) {
        var deAcceleration = 1 - damping;
        var distance = {
            x: 0,
            y: 0
        };
        var vel = this.getVelocity();
        Object.keys(vel).forEach(function(dir) {
            // ignore small velocity
            var v = Math.abs(vel[dir]) <= 10 ? 0 : vel[dir];
            while(v !== 0){
                distance[dir] += v;
                v = v * deAcceleration | 0;
            }
        });
        return distance;
    };
    TouchRecord.prototype.track = function(evt) {
        var _this = this;
        var targetTouches = evt.targetTouches;
        Array.from(targetTouches).forEach(function(touch) {
            _this._add(touch);
        });
        return this._touchList;
    };
    TouchRecord.prototype.update = function(evt) {
        var _this = this;
        var touches = evt.touches, changedTouches = evt.changedTouches;
        Array.from(touches).forEach(function(touch) {
            _this._renew(touch);
        });
        this._setActiveID(changedTouches);
        return this._touchList;
    };
    TouchRecord.prototype.release = function(evt) {
        var _this = this;
        delete this._activeTouchID;
        Array.from(evt.changedTouches).forEach(function(touch) {
            _this._delete(touch);
        });
    };
    TouchRecord.prototype._add = function(touch) {
        if (this._has(touch)) // reset tracker
        this._delete(touch);
        var tracker = new Tracker(touch);
        this._touchList[touch.identifier] = tracker;
    };
    TouchRecord.prototype._renew = function(touch) {
        if (!this._has(touch)) return;
        var tracker = this._touchList[touch.identifier];
        tracker.update(touch);
    };
    TouchRecord.prototype._delete = function(touch) {
        delete this._touchList[touch.identifier];
    };
    TouchRecord.prototype._has = function(touch) {
        return this._touchList.hasOwnProperty(touch.identifier);
    };
    TouchRecord.prototype._setActiveID = function(touches) {
        this._activeTouchID = touches[touches.length - 1].identifier;
    };
    TouchRecord.prototype._getActiveTracker = function() {
        var _a = this, _touchList = _a._touchList, _activeTouchID = _a._activeTouchID;
        return _touchList[_activeTouchID];
    };
    return TouchRecord;
}();

},{"tslib":"iC1Dx","./get-position":"l6cMg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f5yv3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
function clamp(value, lower, upper) {
    return Math.max(lower, Math.min(upper, value));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jm6Vp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce);
function debounce(fn, wait, leading) {
    if (wait === void 0) wait = 0;
    var timer;
    var lastCalledAt = -Infinity;
    return function debouncedFn() {
        var _this = this;
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (leading) {
            var now = Date.now();
            var elapsed = now - lastCalledAt;
            lastCalledAt = now;
            if (elapsed >= wait) fn.apply(this, args);
        }
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(_this, args);
        }, wait);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7oxNn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Options", ()=>Options);
var _tslib = require("tslib");
var _ = require("./decorators/");
var Options = /** @class */ function() {
    function Options(config) {
        var _this = this;
        if (config === void 0) config = {};
        /**
         * Momentum reduction damping factor, a float value between `(0, 1)`.
         * The lower the value is, the more smooth the scrolling will be
         * (also the more paint frames).
         */ this.damping = 0.1;
        /**
         * Minimal size for scrollbar thumbs.
         */ this.thumbMinSize = 20;
        /**
         * Render every frame in integer pixel values
         * set to `true` to improve scrolling performance.
         */ this.renderByPixels = true;
        /**
         * Keep scrollbar tracks visible
         */ this.alwaysShowTracks = false;
        /**
         * Set to `true` to allow outer scrollbars continue scrolling
         * when current scrollbar reaches edge.
         */ this.continuousScrolling = true;
        /**
         * Delegate wheel events and touch events to the given element.
         * By default, the container element is used.
         * This option will be useful for dealing with fixed elements.
         */ this.delegateTo = null;
        /**
         * Options for plugins. Syntax:
         *   plugins[pluginName] = pluginOptions: any
         */ this.plugins = {};
        Object.keys(config).forEach(function(prop) {
            _this[prop] = config[prop];
        });
    }
    Object.defineProperty(Options.prototype, "wheelEventTarget", {
        get: function() {
            return this.delegateTo;
        },
        set: function(el) {
            console.warn('[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.');
            this.delegateTo = el;
        },
        enumerable: true,
        configurable: true
    });
    (0, _tslib.__decorate)([
        (0, _.range)(0, 1)
    ], Options.prototype, "damping", void 0);
    (0, _tslib.__decorate)([
        (0, _.range)(0, Infinity)
    ], Options.prototype, "thumbMinSize", void 0);
    (0, _tslib.__decorate)([
        (0, _.boolean)
    ], Options.prototype, "renderByPixels", void 0);
    (0, _tslib.__decorate)([
        (0, _.boolean)
    ], Options.prototype, "alwaysShowTracks", void 0);
    (0, _tslib.__decorate)([
        (0, _.boolean)
    ], Options.prototype, "continuousScrolling", void 0);
    return Options;
}();

},{"tslib":"iC1Dx","./decorators/":"bGjVF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bGjVF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _range = require("./range");
parcelHelpers.exportAll(_range, exports);
var _boolean = require("./boolean");
parcelHelpers.exportAll(_boolean, exports);
var _debounce = require("./debounce");
parcelHelpers.exportAll(_debounce, exports);

},{"./range":"lg0ct","./boolean":"3ab8k","./debounce":"5Iw58","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lg0ct":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "range", ()=>range);
var _utils = require("../utils");
function range(min, max) {
    if (min === void 0) min = -Infinity;
    if (max === void 0) max = Infinity;
    return function(proto, key) {
        var alias = "_" + key;
        Object.defineProperty(proto, key, {
            get: function() {
                return this[alias];
            },
            set: function(val) {
                Object.defineProperty(this, alias, {
                    value: (0, _utils.clamp)(val, min, max),
                    enumerable: false,
                    writable: true,
                    configurable: true
                });
            },
            enumerable: true,
            configurable: true
        });
    };
}

},{"../utils":"1ymNo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3ab8k":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "boolean", ()=>boolean);
function boolean(proto, key) {
    var alias = "_" + key;
    Object.defineProperty(proto, key, {
        get: function() {
            return this[alias];
        },
        set: function(val) {
            Object.defineProperty(this, alias, {
                value: !!val,
                enumerable: false,
                writable: true,
                configurable: true
            });
        },
        enumerable: true,
        configurable: true
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Iw58":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce);
var _tslib = require("tslib");
var _utils = require("../utils");
function debounce() {
    var options = [];
    for(var _i = 0; _i < arguments.length; _i++)options[_i] = arguments[_i];
    return function(_proto, key, descriptor) {
        var fn = descriptor.value;
        return {
            get: function() {
                if (!this.hasOwnProperty(key)) Object.defineProperty(this, key, {
                    value: (0, _utils.debounce).apply(void 0, (0, _tslib.__spreadArrays)([
                        fn
                    ], options))
                });
                return this[key];
            }
        };
    };
}

},{"tslib":"iC1Dx","../utils":"1ymNo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bECjl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TrackController", ()=>TrackController);
var _tslib = require("tslib");
var _track = require("./track");
var _direction = require("./direction");
var _ = require("../decorators/");
var TrackController = /** @class */ function() {
    function TrackController(_scrollbar) {
        this._scrollbar = _scrollbar;
        var thumbMinSize = _scrollbar.options.thumbMinSize;
        this.xAxis = new (0, _track.ScrollbarTrack)((0, _direction.TrackDirection).X, thumbMinSize);
        this.yAxis = new (0, _track.ScrollbarTrack)((0, _direction.TrackDirection).Y, thumbMinSize);
        this.xAxis.attachTo(_scrollbar.containerEl);
        this.yAxis.attachTo(_scrollbar.containerEl);
        if (_scrollbar.options.alwaysShowTracks) {
            this.xAxis.show();
            this.yAxis.show();
        }
    }
    /**
     * Updates track appearance
     */ TrackController.prototype.update = function() {
        var _a = this._scrollbar, size = _a.size, offset = _a.offset;
        this.xAxis.update(offset.x, size.container.width, size.content.width);
        this.yAxis.update(offset.y, size.container.height, size.content.height);
    };
    /**
     * Automatically hide tracks when scrollbar is in idle state
     */ TrackController.prototype.autoHideOnIdle = function() {
        if (this._scrollbar.options.alwaysShowTracks) return;
        this.xAxis.hide();
        this.yAxis.hide();
    };
    (0, _tslib.__decorate)([
        (0, _.debounce)(300)
    ], TrackController.prototype, "autoHideOnIdle", null);
    return TrackController;
}();

},{"tslib":"iC1Dx","./track":"6ByAH","./direction":"hUza5","../decorators/":"bGjVF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6ByAH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollbarTrack", ()=>ScrollbarTrack);
var _thumb = require("./thumb");
var _ = require("../utils/");
var ScrollbarTrack = /** @class */ function() {
    function ScrollbarTrack(direction, thumbMinSize) {
        if (thumbMinSize === void 0) thumbMinSize = 0;
        /**
         * Track element
         */ this.element = document.createElement('div');
        this._isShown = false;
        this.element.className = "scrollbar-track scrollbar-track-" + direction;
        this.thumb = new (0, _thumb.ScrollbarThumb)(direction, thumbMinSize);
        this.thumb.attachTo(this.element);
    }
    /**
     * Attach to scrollbar container element
     *
     * @param scrollbarContainer Scrollbar container element
     */ ScrollbarTrack.prototype.attachTo = function(scrollbarContainer) {
        scrollbarContainer.appendChild(this.element);
    };
    /**
     * Show track immediately
     */ ScrollbarTrack.prototype.show = function() {
        if (this._isShown) return;
        this._isShown = true;
        this.element.classList.add('show');
    };
    /**
     * Hide track immediately
     */ ScrollbarTrack.prototype.hide = function() {
        if (!this._isShown) return;
        this._isShown = false;
        this.element.classList.remove('show');
    };
    ScrollbarTrack.prototype.update = function(scrollOffset, containerSize, pageSize) {
        (0, _.setStyle)(this.element, {
            display: pageSize <= containerSize ? 'none' : 'block'
        });
        this.thumb.update(scrollOffset, containerSize, pageSize);
    };
    return ScrollbarTrack;
}();

},{"./thumb":"6ABc1","../utils/":"1ymNo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6ABc1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollbarThumb", ()=>ScrollbarThumb);
var _direction = require("./direction");
var _ = require("../utils/");
var ScrollbarThumb = /** @class */ function() {
    function ScrollbarThumb(_direction, _minSize) {
        if (_minSize === void 0) _minSize = 0;
        this._direction = _direction;
        this._minSize = _minSize;
        /**
         * Thumb element
         */ this.element = document.createElement('div');
        /**
         * Display size of the thumb
         * will always be greater than `scrollbar.options.thumbMinSize`
         */ this.displaySize = 0;
        /**
         * Actual size of the thumb
         */ this.realSize = 0;
        /**
         * Thumb offset to the top
         */ this.offset = 0;
        this.element.className = "scrollbar-thumb scrollbar-thumb-" + _direction;
    }
    /**
     * Attach to track element
     *
     * @param trackEl Track element
     */ ScrollbarThumb.prototype.attachTo = function(trackEl) {
        trackEl.appendChild(this.element);
    };
    ScrollbarThumb.prototype.update = function(scrollOffset, containerSize, pageSize) {
        // calculate thumb size
        // pageSize > containerSize -> scrollable
        this.realSize = Math.min(containerSize / pageSize, 1) * containerSize;
        this.displaySize = Math.max(this.realSize, this._minSize);
        // calculate thumb offset
        this.offset = scrollOffset / pageSize * (containerSize + (this.realSize - this.displaySize));
        (0, _.setStyle)(this.element, this._getStyle());
    };
    ScrollbarThumb.prototype._getStyle = function() {
        switch(this._direction){
            case (0, _direction.TrackDirection).X:
                return {
                    width: this.displaySize + "px",
                    '-transform': "translate3d(" + this.offset + "px, 0, 0)"
                };
            case (0, _direction.TrackDirection).Y:
                return {
                    height: this.displaySize + "px",
                    '-transform': "translate3d(0, " + this.offset + "px, 0)"
                };
            default:
                return null;
        }
    };
    return ScrollbarThumb;
}();

},{"./direction":"hUza5","../utils/":"1ymNo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hUza5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TrackDirection", ()=>TrackDirection);
var TrackDirection;
(function(TrackDirection) {
    TrackDirection["X"] = "x";
    TrackDirection["Y"] = "y";
})(TrackDirection || (TrackDirection = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bdbkb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getSize = require("./get-size");
parcelHelpers.exportAll(_getSize, exports);
var _isVisible = require("./is-visible");
parcelHelpers.exportAll(_isVisible, exports);
var _update = require("./update");
parcelHelpers.exportAll(_update, exports);

},{"./get-size":"aQCAn","./is-visible":"5akf3","./update":"2TjOt","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aQCAn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSize", ()=>getSize);
function getSize(scrollbar) {
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    var containerStyles = getComputedStyle(containerEl);
    var paddings = [
        'paddingTop',
        'paddingBottom',
        'paddingLeft',
        'paddingRight'
    ].map(function(prop) {
        return containerStyles[prop] ? parseFloat(containerStyles[prop]) : 0;
    });
    var verticalPadding = paddings[0] + paddings[1];
    var horizontalPadding = paddings[2] + paddings[3];
    return {
        container: {
            // requires `overflow: hidden`
            width: containerEl.clientWidth,
            height: containerEl.clientHeight
        },
        content: {
            // border width and paddings should be included
            width: contentEl.offsetWidth - contentEl.clientWidth + contentEl.scrollWidth + horizontalPadding,
            height: contentEl.offsetHeight - contentEl.clientHeight + contentEl.scrollHeight + verticalPadding
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5akf3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isVisible", ()=>isVisible);
function isVisible(scrollbar, elem) {
    var bounding = scrollbar.bounding;
    var targetBounding = elem.getBoundingClientRect();
    // check overlapping
    var top = Math.max(bounding.top, targetBounding.top);
    var left = Math.max(bounding.left, targetBounding.left);
    var right = Math.min(bounding.right, targetBounding.right);
    var bottom = Math.min(bounding.bottom, targetBounding.bottom);
    return top < bottom && left < right;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2TjOt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "update", ()=>update);
function update(scrollbar) {
    var newSize = scrollbar.getSize();
    var limit = {
        x: Math.max(newSize.content.width - newSize.container.width, 0),
        y: Math.max(newSize.content.height - newSize.container.height, 0)
    };
    // metrics
    var containerBounding = scrollbar.containerEl.getBoundingClientRect();
    var bounding = {
        top: Math.max(containerBounding.top, 0),
        right: Math.min(containerBounding.right, window.innerWidth),
        bottom: Math.min(containerBounding.bottom, window.innerHeight),
        left: Math.max(containerBounding.left, 0)
    };
    // assign props
    scrollbar.size = newSize;
    scrollbar.limit = limit;
    scrollbar.bounding = bounding;
    // update tracks
    scrollbar.track.update();
    // re-positioning
    scrollbar.setPosition();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lJA2C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPosition = require("./set-position");
parcelHelpers.exportAll(_setPosition, exports);
var _scrollTo = require("./scroll-to");
parcelHelpers.exportAll(_scrollTo, exports);
var _scrollIntoView = require("./scroll-into-view");
parcelHelpers.exportAll(_scrollIntoView, exports);

},{"./set-position":"7AZ17","./scroll-to":"g8B4Y","./scroll-into-view":"k15uV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7AZ17":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setPosition", ()=>setPosition);
var _tslib = require("tslib");
var _utils = require("../utils");
var _ = require("../utils/");
function setPosition(scrollbar, x, y) {
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit, track = scrollbar.track, contentEl = scrollbar.contentEl;
    if (options.renderByPixels) {
        x = Math.round(x);
        y = Math.round(y);
    }
    x = (0, _utils.clamp)(x, 0, limit.x);
    y = (0, _utils.clamp)(y, 0, limit.y);
    // position changed -> show track for 300ms
    if (x !== offset.x) track.xAxis.show();
    if (y !== offset.y) track.yAxis.show();
    if (!options.alwaysShowTracks) track.autoHideOnIdle();
    if (x === offset.x && y === offset.y) return null;
    offset.x = x;
    offset.y = y;
    (0, _.setStyle)(contentEl, {
        '-transform': "translate3d(" + -x + "px, " + -y + "px, 0)"
    });
    track.update();
    return {
        offset: (0, _tslib.__assign)({}, offset),
        limit: (0, _tslib.__assign)({}, limit)
    };
}

},{"tslib":"iC1Dx","../utils":"1ymNo","../utils/":"1ymNo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g8B4Y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrollTo", ()=>scrollTo);
var _utils = require("../utils");
var animationIDStorage = new WeakMap();
function scrollTo(scrollbar, x, y, duration, _a) {
    if (duration === void 0) duration = 0;
    var _b = _a === void 0 ? {} : _a, _c = _b.easing, easing = _c === void 0 ? defaultEasing : _c, callback = _b.callback;
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit;
    if (options.renderByPixels) {
        // ensure resolved with integer
        x = Math.round(x);
        y = Math.round(y);
    }
    var startX = offset.x;
    var startY = offset.y;
    var disX = (0, _utils.clamp)(x, 0, limit.x) - startX;
    var disY = (0, _utils.clamp)(y, 0, limit.y) - startY;
    var start = Date.now();
    function scroll() {
        var elapse = Date.now() - start;
        var progress = duration ? easing(Math.min(elapse / duration, 1)) : 1;
        scrollbar.setPosition(startX + disX * progress, startY + disY * progress);
        if (elapse >= duration) {
            if (typeof callback === 'function') callback.call(scrollbar);
        } else {
            var animationID = requestAnimationFrame(scroll);
            animationIDStorage.set(scrollbar, animationID);
        }
    }
    cancelAnimationFrame(animationIDStorage.get(scrollbar));
    scroll();
}
/**
 * easeOutCubic
 */ function defaultEasing(t) {
    return Math.pow(t - 1, 3) + 1;
}

},{"../utils":"1ymNo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"k15uV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrollIntoView", ()=>scrollIntoView);
var _utils = require("../utils");
function scrollIntoView(scrollbar, elem, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.alignToTop, alignToTop = _c === void 0 ? true : _c, _d = _b.onlyScrollIfNeeded, onlyScrollIfNeeded = _d === void 0 ? false : _d, _e = _b.offsetTop, offsetTop = _e === void 0 ? 0 : _e, _f = _b.offsetLeft, offsetLeft = _f === void 0 ? 0 : _f, _g = _b.offsetBottom, offsetBottom = _g === void 0 ? 0 : _g;
    var containerEl = scrollbar.containerEl, bounding = scrollbar.bounding, offset = scrollbar.offset, limit = scrollbar.limit;
    if (!elem || !containerEl.contains(elem)) return;
    var targetBounding = elem.getBoundingClientRect();
    if (onlyScrollIfNeeded && scrollbar.isVisible(elem)) return;
    var delta = alignToTop ? targetBounding.top - bounding.top - offsetTop : targetBounding.bottom - bounding.bottom + offsetBottom;
    scrollbar.setMomentum(targetBounding.left - bounding.left - offsetLeft, (0, _utils.clamp)(delta, -offset.y, limit.y - offset.y));
}

},{"../utils":"1ymNo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6ZkZJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollbarPlugin", ()=>ScrollbarPlugin);
parcelHelpers.export(exports, "globalPlugins", ()=>globalPlugins);
parcelHelpers.export(exports, "addPlugins", ()=>addPlugins);
parcelHelpers.export(exports, "initPlugins", ()=>initPlugins);
var _tslib = require("tslib");
var ScrollbarPlugin = /** @class */ function() {
    function ScrollbarPlugin(scrollbar, options) {
        var _newTarget = this.constructor;
        this.scrollbar = scrollbar;
        this.name = _newTarget.pluginName;
        this.options = (0, _tslib.__assign)((0, _tslib.__assign)({}, _newTarget.defaultOptions), options);
    }
    ScrollbarPlugin.prototype.onInit = function() {};
    ScrollbarPlugin.prototype.onDestroy = function() {};
    ScrollbarPlugin.prototype.onUpdate = function() {};
    ScrollbarPlugin.prototype.onRender = function(_remainMomentum) {};
    ScrollbarPlugin.prototype.transformDelta = function(delta, _evt) {
        return (0, _tslib.__assign)({}, delta);
    };
    ScrollbarPlugin.pluginName = '';
    ScrollbarPlugin.defaultOptions = {};
    return ScrollbarPlugin;
}();
var globalPlugins = {
    order: new Set(),
    constructors: {}
};
function addPlugins() {
    var Plugins = [];
    for(var _i = 0; _i < arguments.length; _i++)Plugins[_i] = arguments[_i];
    Plugins.forEach(function(P) {
        var pluginName = P.pluginName;
        if (!pluginName) throw new TypeError("plugin name is required");
        globalPlugins.order.add(pluginName);
        globalPlugins.constructors[pluginName] = P;
    });
}
function initPlugins(scrollbar, options) {
    return Array.from(globalPlugins.order).filter(function(pluginName) {
        return options[pluginName] !== false;
    }).map(function(pluginName) {
        var Plugin = globalPlugins.constructors[pluginName];
        var instance = new Plugin(scrollbar, options[pluginName]);
        // bind plugin options to `scrollbar.options`
        options[pluginName] = instance.options;
        return instance;
    });
}

},{"tslib":"iC1Dx","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i4saI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _keyboard = require("./keyboard");
parcelHelpers.exportAll(_keyboard, exports);
var _mouse = require("./mouse");
parcelHelpers.exportAll(_mouse, exports);
var _resize = require("./resize");
parcelHelpers.exportAll(_resize, exports);
var _select = require("./select");
parcelHelpers.exportAll(_select, exports);
var _touch = require("./touch");
parcelHelpers.exportAll(_touch, exports);
var _wheel = require("./wheel");
parcelHelpers.exportAll(_wheel, exports);

},{"./keyboard":"iAjan","./mouse":"dtZMt","./resize":"9OsRS","./select":"2B7ow","./touch":"2LXge","./wheel":"iVaw8","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iAjan":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keyboardHandler", ()=>keyboardHandler);
var _ = require("../utils/");
var KEY_CODE;
(function(KEY_CODE) {
    KEY_CODE[KEY_CODE["TAB"] = 9] = "TAB";
    KEY_CODE[KEY_CODE["SPACE"] = 32] = "SPACE";
    KEY_CODE[KEY_CODE["PAGE_UP"] = 33] = "PAGE_UP";
    KEY_CODE[KEY_CODE["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    KEY_CODE[KEY_CODE["END"] = 35] = "END";
    KEY_CODE[KEY_CODE["HOME"] = 36] = "HOME";
    KEY_CODE[KEY_CODE["LEFT"] = 37] = "LEFT";
    KEY_CODE[KEY_CODE["UP"] = 38] = "UP";
    KEY_CODE[KEY_CODE["RIGHT"] = 39] = "RIGHT";
    KEY_CODE[KEY_CODE["DOWN"] = 40] = "DOWN";
})(KEY_CODE || (KEY_CODE = {}));
function keyboardHandler(scrollbar) {
    var addEvent = (0, _.eventScope)(scrollbar);
    var container = scrollbar.containerEl;
    addEvent(container, 'keydown', function(evt) {
        var activeElement = document.activeElement;
        if (activeElement !== container && !container.contains(activeElement)) return;
        if (isEditable(activeElement)) return;
        var delta = getKeyDelta(scrollbar, evt.keyCode || evt.which);
        if (!delta) return;
        var x = delta[0], y = delta[1];
        scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
            if (willScroll) evt.preventDefault();
            else {
                scrollbar.containerEl.blur();
                if (scrollbar.parent) scrollbar.parent.containerEl.focus();
            }
        });
    });
}
function getKeyDelta(scrollbar, keyCode) {
    var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
    switch(keyCode){
        case KEY_CODE.TAB:
            return handleTabKey(scrollbar);
        case KEY_CODE.SPACE:
            return [
                0,
                200
            ];
        case KEY_CODE.PAGE_UP:
            return [
                0,
                -size.container.height + 40
            ];
        case KEY_CODE.PAGE_DOWN:
            return [
                0,
                size.container.height - 40
            ];
        case KEY_CODE.END:
            return [
                0,
                limit.y - offset.y
            ];
        case KEY_CODE.HOME:
            return [
                0,
                -offset.y
            ];
        case KEY_CODE.LEFT:
            return [
                -40,
                0
            ];
        case KEY_CODE.UP:
            return [
                0,
                -40
            ];
        case KEY_CODE.RIGHT:
            return [
                40,
                0
            ];
        case KEY_CODE.DOWN:
            return [
                0,
                40
            ];
        default:
            return null;
    }
}
function handleTabKey(scrollbar) {
    // handle in next frame
    requestAnimationFrame(function() {
        scrollbar.scrollIntoView(document.activeElement, {
            offsetTop: scrollbar.size.container.height / 2,
            offsetLeft: scrollbar.size.container.width / 2,
            onlyScrollIfNeeded: true
        });
    });
}
function isEditable(elem) {
    if (elem.tagName === 'INPUT' || elem.tagName === 'SELECT' || elem.tagName === 'TEXTAREA' || elem.isContentEditable) return !elem.disabled;
    return false;
}

},{"../utils/":"1ymNo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dtZMt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mouseHandler", ()=>mouseHandler);
var _utils = require("../utils");
var _ = require("../utils/");
var Direction;
(function(Direction) {
    Direction[Direction["X"] = 0] = "X";
    Direction[Direction["Y"] = 1] = "Y";
})(Direction || (Direction = {}));
function mouseHandler(scrollbar) {
    var addEvent = (0, _.eventScope)(scrollbar);
    var container = scrollbar.containerEl;
    var _a = scrollbar.track, xAxis = _a.xAxis, yAxis = _a.yAxis;
    function calcMomentum(direction, clickPosition) {
        var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
        if (direction === Direction.X) {
            var totalWidth = size.container.width + (xAxis.thumb.realSize - xAxis.thumb.displaySize);
            return (0, _utils.clamp)(clickPosition / totalWidth * size.content.width, 0, limit.x) - offset.x;
        }
        if (direction === Direction.Y) {
            var totalHeight = size.container.height + (yAxis.thumb.realSize - yAxis.thumb.displaySize);
            return (0, _utils.clamp)(clickPosition / totalHeight * size.content.height, 0, limit.y) - offset.y;
        }
        return 0;
    }
    function getTrackDirection(elem) {
        if ((0, _.isOneOf)(elem, [
            xAxis.element,
            xAxis.thumb.element
        ])) return Direction.X;
        if ((0, _.isOneOf)(elem, [
            yAxis.element,
            yAxis.thumb.element
        ])) return Direction.Y;
        return void 0;
    }
    var isMouseDown;
    var isMouseMoving;
    var startOffsetToThumb;
    var trackDirection;
    var containerRect;
    addEvent(container, 'click', function(evt) {
        if (isMouseMoving || !(0, _.isOneOf)(evt.target, [
            xAxis.element,
            yAxis.element
        ])) return;
        var track = evt.target;
        var direction = getTrackDirection(track);
        var rect = track.getBoundingClientRect();
        var clickPos = (0, _.getPosition)(evt);
        if (direction === Direction.X) {
            var offsetOnTrack = clickPos.x - rect.left - xAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(calcMomentum(direction, offsetOnTrack), 0);
        }
        if (direction === Direction.Y) {
            var offsetOnTrack = clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(0, calcMomentum(direction, offsetOnTrack));
        }
    });
    addEvent(container, 'mousedown', function(evt) {
        if (!(0, _.isOneOf)(evt.target, [
            xAxis.thumb.element,
            yAxis.thumb.element
        ])) return;
        isMouseDown = true;
        var thumb = evt.target;
        var cursorPos = (0, _.getPosition)(evt);
        var thumbRect = thumb.getBoundingClientRect();
        trackDirection = getTrackDirection(thumb);
        // pointer offset to thumb
        startOffsetToThumb = {
            x: cursorPos.x - thumbRect.left,
            y: cursorPos.y - thumbRect.top
        };
        // container bounding rectangle
        containerRect = container.getBoundingClientRect();
        // prevent selection, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/48
        (0, _.setStyle)(scrollbar.containerEl, {
            '-user-select': 'none'
        });
    });
    addEvent(window, 'mousemove', function(evt) {
        if (!isMouseDown) return;
        isMouseMoving = true;
        var cursorPos = (0, _.getPosition)(evt);
        if (trackDirection === Direction.X) {
            // get percentage of pointer position in track
            // then tranform to px
            // don't need easing
            var offsetOnTrack = cursorPos.x - startOffsetToThumb.x - containerRect.left;
            scrollbar.setMomentum(calcMomentum(trackDirection, offsetOnTrack), 0);
        }
        if (trackDirection === Direction.Y) {
            var offsetOnTrack = cursorPos.y - startOffsetToThumb.y - containerRect.top;
            scrollbar.setMomentum(0, calcMomentum(trackDirection, offsetOnTrack));
        }
    });
    addEvent(window, 'mouseup blur', function() {
        isMouseDown = isMouseMoving = false;
        (0, _.setStyle)(scrollbar.containerEl, {
            '-user-select': ''
        });
    });
}

},{"../utils":"1ymNo","../utils/":"1ymNo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9OsRS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resizeHandler", ()=>resizeHandler);
var _utils = require("../utils");
var _ = require("../utils/");
function resizeHandler(scrollbar) {
    var addEvent = (0, _.eventScope)(scrollbar);
    addEvent(window, 'resize', (0, _utils.debounce)(scrollbar.update.bind(scrollbar), 300));
}

},{"../utils":"1ymNo","../utils/":"1ymNo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2B7ow":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "selectHandler", ()=>selectHandler);
var _utils = require("../utils");
var _ = require("../utils/");
function selectHandler(scrollbar) {
    var addEvent = (0, _.eventScope)(scrollbar);
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    var isSelected = false;
    var isContextMenuOpened = false; // flag to prevent selection when context menu is opened
    var animationID;
    function scroll(_a) {
        var x = _a.x, y = _a.y;
        if (!x && !y) return;
        var offset = scrollbar.offset, limit = scrollbar.limit;
        // DISALLOW delta transformation
        scrollbar.setMomentum((0, _utils.clamp)(offset.x + x, 0, limit.x) - offset.x, (0, _utils.clamp)(offset.y + y, 0, limit.y) - offset.y);
        animationID = requestAnimationFrame(function() {
            scroll({
                x: x,
                y: y
            });
        });
    }
    addEvent(window, 'mousemove', function(evt) {
        if (!isSelected) return;
        cancelAnimationFrame(animationID);
        var dir = calcMomentum(scrollbar, evt);
        scroll(dir);
    });
    // prevent scrolling when context menu is opened
    // NOTE: `contextmenu` event may be fired
    //          1. BEFORE `selectstart`: when user right-clicks on the text content -> prevent future scrolling,
    //          2. AFTER `selectstart`: when user right-clicks on the blank area -> cancel current scrolling,
    //        so we need to both set the flag and cancel current scrolling
    addEvent(contentEl, 'contextmenu', function() {
        // set the flag to prevent future scrolling
        isContextMenuOpened = true;
        // stop current scrolling
        cancelAnimationFrame(animationID);
        isSelected = false;
    });
    // reset context menu flag on mouse down
    // to ensure the scrolling is allowed in the next selection
    addEvent(contentEl, 'mousedown', function() {
        isContextMenuOpened = false;
    });
    addEvent(contentEl, 'selectstart', function() {
        if (isContextMenuOpened) return;
        cancelAnimationFrame(animationID);
        isSelected = true;
    });
    addEvent(window, 'mouseup blur', function() {
        cancelAnimationFrame(animationID);
        isSelected = false;
        isContextMenuOpened = false;
    });
    // patch for touch devices
    addEvent(containerEl, 'scroll', function(evt) {
        evt.preventDefault();
        containerEl.scrollTop = containerEl.scrollLeft = 0;
    });
}
function calcMomentum(scrollbar, evt) {
    var _a = scrollbar.bounding, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
    var _b = (0, _.getPosition)(evt), x = _b.x, y = _b.y;
    var res = {
        x: 0,
        y: 0
    };
    var padding = 20;
    if (x === 0 && y === 0) return res;
    if (x > right - padding) res.x = x - right + padding;
    else if (x < left + padding) res.x = x - left - padding;
    if (y > bottom - padding) res.y = y - bottom + padding;
    else if (y < top + padding) res.y = y - top - padding;
    res.x *= 2;
    res.y *= 2;
    return res;
}

},{"../utils":"1ymNo","../utils/":"1ymNo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2LXge":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "touchHandler", ()=>touchHandler);
var _ = require("../utils/");
var activeScrollbar;
function touchHandler(scrollbar) {
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var touchRecord = new (0, _.TouchRecord)();
    var addEvent = (0, _.eventScope)(scrollbar);
    var damping;
    var pointerCount = 0;
    addEvent(target, 'touchstart', function(evt) {
        // start records
        touchRecord.track(evt);
        // stop scrolling
        scrollbar.setMomentum(0, 0);
        // save damping
        if (pointerCount === 0) {
            damping = scrollbar.options.damping;
            scrollbar.options.damping = Math.max(damping, 0.5); // less frames on touchmove
        }
        pointerCount++;
    });
    addEvent(target, 'touchmove', function(evt) {
        if (activeScrollbar && activeScrollbar !== scrollbar) return;
        touchRecord.update(evt);
        var _a = touchRecord.getDelta(), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
            if (willScroll && evt.cancelable) {
                evt.preventDefault();
                activeScrollbar = scrollbar;
            }
        });
    });
    addEvent(target, 'touchcancel touchend', function(evt) {
        var delta = touchRecord.getEasingDistance(damping);
        scrollbar.addTransformableMomentum(delta.x, delta.y, evt);
        pointerCount--;
        // restore damping
        if (pointerCount === 0) scrollbar.options.damping = damping;
        touchRecord.release(evt);
        activeScrollbar = null;
    });
}

},{"../utils/":"1ymNo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iVaw8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wheelHandler", ()=>wheelHandler);
var _ = require("../utils/");
function wheelHandler(scrollbar) {
    var addEvent = (0, _.eventScope)(scrollbar);
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var eventName = 'onwheel' in window || document.implementation.hasFeature('Events.wheel', '3.0') ? 'wheel' : 'mousewheel';
    addEvent(target, eventName, function(evt) {
        var _a = normalizeDelta(evt), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
            if (willScroll) evt.preventDefault();
        });
    });
}
// Normalizing wheel delta
var DELTA_SCALE = {
    STANDARD: 1,
    OTHERS: -3
};
var DELTA_MODE = [
    1.0,
    28.0,
    500.0
];
var getDeltaMode = function(mode) {
    return DELTA_MODE[mode] || DELTA_MODE[0];
};
function normalizeDelta(evt) {
    if ('deltaX' in evt) {
        var mode = getDeltaMode(evt.deltaMode);
        return {
            x: evt.deltaX / DELTA_SCALE.STANDARD * mode,
            y: evt.deltaY / DELTA_SCALE.STANDARD * mode
        };
    }
    if ('wheelDeltaX' in evt) return {
        x: evt.wheelDeltaX / DELTA_SCALE.OTHERS,
        y: evt.wheelDeltaY / DELTA_SCALE.OTHERS
    };
    // ie with touchpad
    return {
        x: 0,
        y: evt.wheelDelta / DELTA_SCALE.OTHERS
    };
}

},{"../utils/":"1ymNo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j1fs3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attachStyle", ()=>attachStyle);
parcelHelpers.export(exports, "detachStyle", ()=>detachStyle);
var TRACK_BG = 'rgba(222, 222, 222, .75)';
var THUMB_BG = 'rgba(0, 0, 0, .5)';
// sets content's display type to `flow-root` to suppress margin collapsing
var SCROLLBAR_STYLE = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: " + TRACK_BG + ";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: " + THUMB_BG + ";\n  border-radius: 4px;\n}\n";
var STYLE_ID = 'smooth-scrollbar-style';
var isStyleAttached = false;
function attachStyle() {
    if (isStyleAttached || typeof window === 'undefined') return;
    var styleEl = document.createElement('style');
    styleEl.id = STYLE_ID;
    styleEl.textContent = SCROLLBAR_STYLE;
    if (document.head) document.head.appendChild(styleEl);
    isStyleAttached = true;
}
function detachStyle() {
    if (!isStyleAttached || typeof window === 'undefined') return;
    var styleEl = document.getElementById(STYLE_ID);
    if (!styleEl || !styleEl.parentNode) return;
    styleEl.parentNode.removeChild(styleEl);
    isStyleAttached = false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i5LP7":[function() {},{}],"joWv1":[function(require,module,exports,__globalThis) {
/*!
  * Bootstrap v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ !function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    const t = new Map, e = {
        set (e, i, n) {
            t.has(e) || t.set(e, new Map);
            const s = t.get(e);
            s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
        },
        get: (e, i)=>t.has(e) && t.get(e).get(i) || null,
        remove (e, i) {
            if (!t.has(e)) return;
            const n = t.get(e);
            n.delete(i), 0 === n.size && t.delete(e);
        }
    }, i = "transitionend", n = (t)=>(t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, (t, e)=>`#${CSS.escape(e)}`)), t), s = (t)=>{
        t.dispatchEvent(new Event(i));
    }, o = (t)=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType), r = (t)=>o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null, a = (t)=>{
        if (!o(t) || 0 === t.getClientRects().length) return !1;
        const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"), i = t.closest("details:not([open])");
        if (!i) return e;
        if (i !== t) {
            const e = t.closest("summary");
            if (e && e.parentNode !== i) return !1;
            if (null === e) return !1;
        }
        return e;
    }, l = (t)=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), c = (t)=>{
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null;
    }, h = ()=>{}, d = (t)=>{
        t.offsetHeight;
    }, u = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, f = [], p = ()=>"rtl" === document.documentElement.dir, m = (t)=>{
        var e;
        e = ()=>{
            const e = u();
            if (e) {
                const i = t.NAME, n = e.fn[i];
                e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = ()=>(e.fn[i] = n, t.jQueryInterface);
            }
        }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", ()=>{
            for (const t of f)t();
        }), f.push(e)) : e();
    }, g = (t, e = [], i = t)=>"function" == typeof t ? t.call(...e) : i, _ = (t, e, n = !0)=>{
        if (!n) return void g(t);
        const o = ((t)=>{
            if (!t) return 0;
            let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t);
            const n = Number.parseFloat(e), s = Number.parseFloat(i);
            return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
        })(e) + 5;
        let r = !1;
        const a = ({ target: n })=>{
            n === e && (r = !0, e.removeEventListener(i, a), g(t));
        };
        e.addEventListener(i, a), setTimeout(()=>{
            r || s(e);
        }, o);
    }, b = (t, e, i, n)=>{
        const s = t.length;
        let o = t.indexOf(e);
        return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
    }, v = /[^.]*(?=\..*)\.|.*/, y = /\..*/, w = /::\d+$/, A = {};
    let E = 1;
    const T = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, C = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    function O(t, e) {
        return e && `${e}::${E++}` || t.uidEvent || E++;
    }
    function x(t) {
        const e = O(t);
        return t.uidEvent = e, A[e] = A[e] || {}, A[e];
    }
    function k(t, e, i = null) {
        return Object.values(t).find((t)=>t.callable === e && t.delegationSelector === i);
    }
    function L(t, e, i) {
        const n = "string" == typeof e, s = n ? i : e || i;
        let o = I(t);
        return C.has(o) || (o = t), [
            n,
            s,
            o
        ];
    }
    function S(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = L(e, i, n);
        if (e in T) {
            const t = (t)=>function(e) {
                    if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
                };
            r = t(r);
        }
        const l = x(t), c = l[a] || (l[a] = {}), h = k(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && s);
        const d = O(r, e.replace(v, "")), u = o ? function(t, e, i) {
            return function n(s) {
                const o = t.querySelectorAll(e);
                for(let { target: r } = s; r && r !== this; r = r.parentNode)for (const a of o)if (a === r) return P(s, {
                    delegateTarget: r
                }), n.oneOff && N.off(t, s.type, e, i), i.apply(r, [
                    s
                ]);
            };
        }(t, i, r) : function(t, e) {
            return function i(n) {
                return P(n, {
                    delegateTarget: t
                }), i.oneOff && N.off(t, n.type, e), e.apply(t, [
                    n
                ]);
            };
        }(t, r);
        u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
    }
    function D(t, e, i, n, s) {
        const o = k(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    function $(t, e, i, n) {
        const s = e[i] || {};
        for (const [o, r] of Object.entries(s))o.includes(n) && D(t, e, i, r.callable, r.delegationSelector);
    }
    function I(t) {
        return t = t.replace(y, ""), T[t] || t;
    }
    const N = {
        on (t, e, i, n) {
            S(t, e, i, n, !1);
        },
        one (t, e, i, n) {
            S(t, e, i, n, !0);
        },
        off (t, e, i, n) {
            if ("string" != typeof e || !t) return;
            const [s, o, r] = L(e, i, n), a = r !== e, l = x(t), c = l[r] || {}, h = e.startsWith(".");
            if (void 0 === o) {
                if (h) for (const i of Object.keys(l))$(t, l, i, e.slice(1));
                for (const [i, n] of Object.entries(c)){
                    const s = i.replace(w, "");
                    a && !e.includes(s) || D(t, l, r, n.callable, n.delegationSelector);
                }
            } else {
                if (!Object.keys(c).length) return;
                D(t, l, r, o, s ? i : null);
            }
        },
        trigger (t, e, i) {
            if ("string" != typeof e || !t) return null;
            const n = u();
            let s = null, o = !0, r = !0, a = !1;
            e !== I(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
            const l = P(new Event(e, {
                bubbles: o,
                cancelable: !0
            }), i);
            return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
        }
    };
    function P(t, e = {}) {
        for (const [i, n] of Object.entries(e))try {
            t[i] = n;
        } catch (e) {
            Object.defineProperty(t, i, {
                configurable: !0,
                get: ()=>n
            });
        }
        return t;
    }
    function j(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t));
        } catch (e) {
            return t;
        }
    }
    function M(t) {
        return t.replace(/[A-Z]/g, (t)=>`-${t.toLowerCase()}`);
    }
    const F = {
        setDataAttribute (t, e, i) {
            t.setAttribute(`data-bs-${M(e)}`, i);
        },
        removeDataAttribute (t, e) {
            t.removeAttribute(`data-bs-${M(e)}`);
        },
        getDataAttributes (t) {
            if (!t) return {};
            const e = {}, i = Object.keys(t.dataset).filter((t)=>t.startsWith("bs") && !t.startsWith("bsConfig"));
            for (const n of i){
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1), e[i] = j(t.dataset[n]);
            }
            return e;
        },
        getDataAttribute: (t, e)=>j(t.getAttribute(`data-bs-${M(e)}`))
    };
    class H {
        static get Default() {
            return {};
        }
        static get DefaultType() {
            return {};
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t;
        }
        _mergeConfigObj(t, e) {
            const i = o(e) ? F.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...o(e) ? F.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const [n, s] of Object.entries(e)){
                const e = t[n], r = o(e) ? "element" : null == (i = e) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(s).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`);
            }
            var i;
        }
    }
    class W extends H {
        constructor(t, i){
            super(), (t = r(t)) && (this._element = t, this._config = this._getConfig(i), e.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this))this[t] = null;
        }
        _queueCallback(t, e, i = !0) {
            _(t, e, i);
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        static getInstance(t) {
            return e.get(r(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
        }
        static get VERSION() {
            return "5.3.5";
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`;
        }
    }
    const B = (t)=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null;
        }
        return e ? e.split(",").map((t)=>n(t)).join(",") : null;
    }, z = {
        find: (t, e = document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e = document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t, e)=>[].concat(...t.children).filter((t)=>t.matches(e)),
        parents (t, e) {
            const i = [];
            let n = t.parentNode.closest(e);
            for(; n;)i.push(n), n = n.parentNode.closest(e);
            return i;
        },
        prev (t, e) {
            let i = t.previousElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.previousElementSibling;
            }
            return [];
        },
        next (t, e) {
            let i = t.nextElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.nextElementSibling;
            }
            return [];
        },
        focusableChildren (t) {
            const e = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]'
            ].map((t)=>`${t}:not([tabindex^="-"])`).join(",");
            return this.find(e, t).filter((t)=>!l(t) && a(t));
        },
        getSelectorFromElement (t) {
            const e = B(t);
            return e && z.findOne(e) ? e : null;
        },
        getElementFromSelector (t) {
            const e = B(t);
            return e ? z.findOne(e) : null;
        },
        getMultipleElementsFromSelector (t) {
            const e = B(t);
            return e ? z.find(e) : [];
        }
    }, R = (t, e = "hide")=>{
        const i = `click.dismiss${t.EVENT_KEY}`, n = t.NAME;
        N.on(document, i, `[data-bs-dismiss="${n}"]`, function(i) {
            if ([
                "A",
                "AREA"
            ].includes(this.tagName) && i.preventDefault(), l(this)) return;
            const s = z.getElementFromSelector(this) || this.closest(`.${n}`);
            t.getOrCreateInstance(s)[e]();
        });
    }, q = ".bs.alert", V = `close${q}`, K = `closed${q}`;
    class Q extends W {
        static get NAME() {
            return "alert";
        }
        close() {
            if (N.trigger(this._element, V).defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(), N.trigger(this._element, K), this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    R(Q, "close"), m(Q);
    const X = '[data-bs-toggle="button"]';
    class Y extends W {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Y.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    N.on(document, "click.bs.button.data-api", X, (t)=>{
        t.preventDefault();
        const e = t.target.closest(X);
        Y.getOrCreateInstance(e).toggle();
    }), m(Y);
    const U = ".bs.swipe", G = `touchstart${U}`, J = `touchmove${U}`, Z = `touchend${U}`, tt = `pointerdown${U}`, et = `pointerup${U}`, it = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }, nt = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class st extends H {
        constructor(t, e){
            super(), this._element = t, t && st.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
        }
        static get Default() {
            return it;
        }
        static get DefaultType() {
            return nt;
        }
        static get NAME() {
            return "swipe";
        }
        dispose() {
            N.off(this._element, U);
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback);
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
            this._supportPointerEvents ? (N.on(this._element, tt, (t)=>this._start(t)), N.on(this._element, et, (t)=>this._end(t)), this._element.classList.add("pointer-event")) : (N.on(this._element, G, (t)=>this._start(t)), N.on(this._element, J, (t)=>this._move(t)), N.on(this._element, Z, (t)=>this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
    }
    const ot = ".bs.carousel", rt = ".data-api", at = "ArrowLeft", lt = "ArrowRight", ct = "next", ht = "prev", dt = "left", ut = "right", ft = `slide${ot}`, pt = `slid${ot}`, mt = `keydown${ot}`, gt = `mouseenter${ot}`, _t = `mouseleave${ot}`, bt = `dragstart${ot}`, vt = `load${ot}${rt}`, yt = `click${ot}${rt}`, wt = "carousel", At = "active", Et = ".active", Tt = ".carousel-item", Ct = Et + Tt, Ot = {
        [at]: ut,
        [lt]: dt
    }, xt = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }, kt = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class Lt extends W {
        constructor(t, e){
            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === wt && this.cycle();
        }
        static get Default() {
            return xt;
        }
        static get DefaultType() {
            return kt;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(ct);
        }
        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next();
        }
        prev() {
            this._slide(ht);
        }
        pause() {
            this._isSliding && s(this._element), this._clearInterval();
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval);
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? N.one(this._element, pt, ()=>this.cycle()) : this.cycle());
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void N.one(this._element, pt, ()=>this.to(t));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const n = t > i ? ct : ht;
            this._slide(n, e[t]);
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval, t;
        }
        _addEventListeners() {
            this._config.keyboard && N.on(this._element, mt, (t)=>this._keydown(t)), "hover" === this._config.pause && (N.on(this._element, gt, ()=>this.pause()), N.on(this._element, _t, ()=>this._maybeEnableCycle())), this._config.touch && st.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            for (const t of z.find(".carousel-item img", this._element))N.on(t, bt, (t)=>t.preventDefault());
            const t = {
                leftCallback: ()=>this._slide(this._directionToOrder(dt)),
                rightCallback: ()=>this._slide(this._directionToOrder(ut)),
                endCallback: ()=>{
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), 500 + this._config.interval));
                }
            };
            this._swipeHelper = new st(this._element, t);
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = Ot[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = z.findOne(Et, this._indicatorsElement);
            e.classList.remove(At), e.removeAttribute("aria-current");
            const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(At), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(), n = t === ct, s = e || b(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            const o = this._getItemIndex(s), r = (e)=>N.trigger(this._element, e, {
                    relatedTarget: s,
                    direction: this._orderToDirection(t),
                    from: this._getItemIndex(i),
                    to: o
                });
            if (r(ft).defaultPrevented) return;
            if (!i || !s) return;
            const a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
            const l = n ? "carousel-item-start" : "carousel-item-end", c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback(()=>{
                s.classList.remove(l, c), s.classList.add(At), i.classList.remove(At, c, l), this._isSliding = !1, r(pt);
            }, i, this._isAnimated()), a && this.cycle();
        }
        _isAnimated() {
            return this._element.classList.contains("slide");
        }
        _getActive() {
            return z.findOne(Ct, this._element);
        }
        _getItems() {
            return z.find(Tt, this._element);
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null);
        }
        _directionToOrder(t) {
            return p() ? t === dt ? ht : ct : t === dt ? ct : ht;
        }
        _orderToDirection(t) {
            return p() ? t === ht ? dt : ut : t === ht ? ut : dt;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Lt.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                } else e.to(t);
            });
        }
    }
    N.on(document, yt, "[data-bs-slide], [data-bs-slide-to]", function(t) {
        const e = z.getElementFromSelector(this);
        if (!e || !e.classList.contains(wt)) return;
        t.preventDefault();
        const i = Lt.getOrCreateInstance(e), n = this.getAttribute("data-bs-slide-to");
        return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
    }), N.on(window, vt, ()=>{
        const t = z.find('[data-bs-ride="carousel"]');
        for (const e of t)Lt.getOrCreateInstance(e);
    }), m(Lt);
    const St = ".bs.collapse", Dt = `show${St}`, $t = `shown${St}`, It = `hide${St}`, Nt = `hidden${St}`, Pt = `click${St}.data-api`, jt = "show", Mt = "collapse", Ft = "collapsing", Ht = `:scope .${Mt} .${Mt}`, Wt = '[data-bs-toggle="collapse"]', Bt = {
        parent: null,
        toggle: !0
    }, zt = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class Rt extends W {
        constructor(t, e){
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            const i = z.find(Wt);
            for (const t of i){
                const e = z.getSelectorFromElement(t), i = z.find(e).filter((t)=>t === this._element);
                null !== e && i.length && this._triggerArray.push(t);
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
            return Bt;
        }
        static get DefaultType() {
            return zt;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t)=>t !== this._element).map((t)=>Rt.getOrCreateInstance(t, {
                    toggle: !1
                }))), t.length && t[0]._isTransitioning) return;
            if (N.trigger(this._element, Dt).defaultPrevented) return;
            for (const e of t)e.hide();
            const e = this._getDimension();
            this._element.classList.remove(Mt), this._element.classList.add(Ft), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(Ft), this._element.classList.add(Mt, jt), this._element.style[e] = "", N.trigger(this._element, $t);
            }, this._element, !0), this._element.style[e] = `${this._element[i]}px`;
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (N.trigger(this._element, It).defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, d(this._element), this._element.classList.add(Ft), this._element.classList.remove(Mt, jt);
            for (const t of this._triggerArray){
                const e = z.getElementFromSelector(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([
                    t
                ], !1);
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(Ft), this._element.classList.add(Mt), N.trigger(this._element, Nt);
            }, this._element, !0);
        }
        _isShown(t = this._element) {
            return t.classList.contains(jt);
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(Wt);
            for (const e of t){
                const t = z.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([
                    e
                ], this._isShown(t));
            }
        }
        _getFirstLevelChildren(t) {
            const e = z.find(Ht, this._config.parent);
            return z.find(t, this._config.parent).filter((t)=>!e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length) for (const i of t)i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e);
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function() {
                const i = Rt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]();
                }
            });
        }
    }
    N.on(document, Pt, Wt, function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        for (const t of z.getMultipleElementsFromSelector(this))Rt.getOrCreateInstance(t, {
            toggle: !1
        }).toggle();
    }), m(Rt);
    var qt = "top", Vt = "bottom", Kt = "right", Qt = "left", Xt = "auto", Yt = [
        qt,
        Vt,
        Kt,
        Qt
    ], Ut = "start", Gt = "end", Jt = "clippingParents", Zt = "viewport", te = "popper", ee = "reference", ie = Yt.reduce(function(t, e) {
        return t.concat([
            e + "-" + Ut,
            e + "-" + Gt
        ]);
    }, []), ne = [].concat(Yt, [
        Xt
    ]).reduce(function(t, e) {
        return t.concat([
            e,
            e + "-" + Ut,
            e + "-" + Gt
        ]);
    }, []), se = "beforeRead", oe = "read", re = "afterRead", ae = "beforeMain", le = "main", ce = "afterMain", he = "beforeWrite", de = "write", ue = "afterWrite", fe = [
        se,
        oe,
        re,
        ae,
        le,
        ce,
        he,
        de,
        ue
    ];
    function pe(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function me(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window;
        }
        return t;
    }
    function ge(t) {
        return t instanceof me(t).Element || t instanceof Element;
    }
    function _e(t) {
        return t instanceof me(t).HTMLElement || t instanceof HTMLElement;
    }
    function be(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof me(t).ShadowRoot || t instanceof ShadowRoot);
    }
    const ve = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function(t) {
                var i = e.styles[t] || {}, n = e.attributes[t] || {}, s = e.elements[t];
                _e(s) && pe(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
                }));
            });
        },
        effect: function(t) {
            var e = t.state, i = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function() {
                Object.keys(e.elements).forEach(function(t) {
                    var n = e.elements[t], s = e.attributes[t] || {}, o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function(t, e) {
                        return t[e] = "", t;
                    }, {});
                    _e(n) && pe(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function(t) {
                        n.removeAttribute(t);
                    }));
                });
            };
        },
        requires: [
            "computeStyles"
        ]
    };
    function ye(t) {
        return t.split("-")[0];
    }
    var we = Math.max, Ae = Math.min, Ee = Math.round;
    function Te() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map(function(t) {
            return t.brand + "/" + t.version;
        }).join(" ") : navigator.userAgent;
    }
    function Ce() {
        return !/^((?!chrome|android).)*safari/i.test(Te());
    }
    function Oe(t, e, i) {
        void 0 === e && (e = !1), void 0 === i && (i = !1);
        var n = t.getBoundingClientRect(), s = 1, o = 1;
        e && _e(t) && (s = t.offsetWidth > 0 && Ee(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && Ee(n.height) / t.offsetHeight || 1);
        var r = (ge(t) ? me(t) : window).visualViewport, a = !Ce() && i, l = (n.left + (a && r ? r.offsetLeft : 0)) / s, c = (n.top + (a && r ? r.offsetTop : 0)) / o, h = n.width / s, d = n.height / o;
        return {
            width: h,
            height: d,
            top: c,
            right: l + h,
            bottom: c + d,
            left: l,
            x: l,
            y: c
        };
    }
    function xe(t) {
        var e = Oe(t), i = t.offsetWidth, n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        };
    }
    function ke(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && be(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            }while (n);
        }
        return !1;
    }
    function Le(t) {
        return me(t).getComputedStyle(t);
    }
    function Se(t) {
        return [
            "table",
            "td",
            "th"
        ].indexOf(pe(t)) >= 0;
    }
    function De(t) {
        return ((ge(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }
    function $e(t) {
        return "html" === pe(t) ? t : t.assignedSlot || t.parentNode || (be(t) ? t.host : null) || De(t);
    }
    function Ie(t) {
        return _e(t) && "fixed" !== Le(t).position ? t.offsetParent : null;
    }
    function Ne(t) {
        for(var e = me(t), i = Ie(t); i && Se(i) && "static" === Le(i).position;)i = Ie(i);
        return i && ("html" === pe(i) || "body" === pe(i) && "static" === Le(i).position) ? e : i || function(t) {
            var e = /firefox/i.test(Te());
            if (/Trident/i.test(Te()) && _e(t) && "fixed" === Le(t).position) return null;
            var i = $e(t);
            for(be(i) && (i = i.host); _e(i) && [
                "html",
                "body"
            ].indexOf(pe(i)) < 0;){
                var n = Le(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== [
                    "transform",
                    "perspective"
                ].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode;
            }
            return null;
        }(t) || e;
    }
    function Pe(t) {
        return [
            "top",
            "bottom"
        ].indexOf(t) >= 0 ? "x" : "y";
    }
    function je(t, e, i) {
        return we(t, Ae(e, i));
    }
    function Me(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t);
    }
    function Fe(t, e) {
        return e.reduce(function(e, i) {
            return e[i] = t, e;
        }, {});
    }
    const He = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i = t.state, n = t.name, s = t.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = ye(i.placement), l = Pe(a), c = [
                Qt,
                Kt
            ].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                    return Me("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t) ? t : Fe(t, Yt));
                }(s.padding, i), d = xe(o), u = "y" === l ? qt : Qt, f = "y" === l ? Vt : Kt, p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c], m = r[l] - i.rects.reference[l], g = Ne(o), _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = p / 2 - m / 2, v = h[u], y = _ - d[c] - h[f], w = _ / 2 - d[c] / 2 + b, A = je(v, w, y), E = l;
                i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e);
            }
        },
        effect: function(t) {
            var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && ke(e.elements.popper, n) && (e.elements.arrow = n);
        },
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    };
    function We(t) {
        return t.split("-")[1];
    }
    var Be = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function ze(t) {
        var e, i = t.popper, n = t.popperRect, s = t.placement, o = t.variation, r = t.offsets, a = t.position, l = t.gpuAcceleration, c = t.adaptive, h = t.roundOffsets, d = t.isFixed, u = r.x, f = void 0 === u ? 0 : u, p = r.y, m = void 0 === p ? 0 : p, g = "function" == typeof h ? h({
            x: f,
            y: m
        }) : {
            x: f,
            y: m
        };
        f = g.x, m = g.y;
        var _ = r.hasOwnProperty("x"), b = r.hasOwnProperty("y"), v = Qt, y = qt, w = window;
        if (c) {
            var A = Ne(i), E = "clientHeight", T = "clientWidth";
            A === me(i) && "static" !== Le(A = De(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === qt || (s === Qt || s === Kt) && o === Gt) && (y = Vt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== Qt && (s !== qt && s !== Vt || o !== Gt) || (v = Kt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1);
        }
        var C, O = Object.assign({
            position: a
        }, c && Be), x = !0 === h ? function(t, e) {
            var i = t.x, n = t.y, s = e.devicePixelRatio || 1;
            return {
                x: Ee(i * s) / s || 0,
                y: Ee(n * s) / s || 0
            };
        }({
            x: f,
            y: m
        }, me(i)) : {
            x: f,
            y: m
        };
        return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e));
    }
    const Re = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state, i = t.options, n = i.gpuAcceleration, s = void 0 === n || n, o = i.adaptive, r = void 0 === o || o, a = i.roundOffsets, l = void 0 === a || a, c = {
                placement: ye(e.placement),
                variation: We(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s,
                isFixed: "fixed" === e.options.strategy
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, ze(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, ze(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            });
        },
        data: {}
    };
    var qe = {
        passive: !0
    };
    const Ve = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state, i = t.instance, n = t.options, s = n.scroll, o = void 0 === s || s, r = n.resize, a = void 0 === r || r, l = me(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach(function(t) {
                t.addEventListener("scroll", i.update, qe);
            }), a && l.addEventListener("resize", i.update, qe), function() {
                o && c.forEach(function(t) {
                    t.removeEventListener("scroll", i.update, qe);
                }), a && l.removeEventListener("resize", i.update, qe);
            };
        },
        data: {}
    };
    var Ke = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Qe(t) {
        return t.replace(/left|right|bottom|top/g, function(t) {
            return Ke[t];
        });
    }
    var Xe = {
        start: "end",
        end: "start"
    };
    function Ye(t) {
        return t.replace(/start|end/g, function(t) {
            return Xe[t];
        });
    }
    function Ue(t) {
        var e = me(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        };
    }
    function Ge(t) {
        return Oe(De(t)).left + Ue(t).scrollLeft;
    }
    function Je(t) {
        var e = Le(t), i = e.overflow, n = e.overflowX, s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }
    function Ze(t) {
        return [
            "html",
            "body",
            "#document"
        ].indexOf(pe(t)) >= 0 ? t.ownerDocument.body : _e(t) && Je(t) ? t : Ze($e(t));
    }
    function ti(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ze(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body), o = me(n), r = s ? [
            o
        ].concat(o.visualViewport || [], Je(n) ? n : []) : n, a = e.concat(r);
        return s ? a : a.concat(ti($e(r)));
    }
    function ei(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        });
    }
    function ii(t, e, i) {
        return e === Zt ? ei(function(t, e) {
            var i = me(t), n = De(t), s = i.visualViewport, o = n.clientWidth, r = n.clientHeight, a = 0, l = 0;
            if (s) {
                o = s.width, r = s.height;
                var c = Ce();
                (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop);
            }
            return {
                width: o,
                height: r,
                x: a + Ge(t),
                y: l
            };
        }(t, i)) : ge(e) ? function(t, e) {
            var i = Oe(t, !1, "fixed" === e);
            return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i;
        }(e, i) : ei(function(t) {
            var e, i = De(t), n = Ue(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = we(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = we(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + Ge(t), l = -n.scrollTop;
            return "rtl" === Le(s || i).direction && (a += we(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            };
        }(De(t)));
    }
    function ni(t) {
        var e, i = t.reference, n = t.element, s = t.placement, o = s ? ye(s) : null, r = s ? We(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch(o){
            case qt:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case Vt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case Kt:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case Qt:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                };
        }
        var c = o ? Pe(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch(r){
                case Ut:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Gt:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }
    function si(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = void 0 === n ? t.placement : n, o = i.strategy, r = void 0 === o ? t.strategy : o, a = i.boundary, l = void 0 === a ? Jt : a, c = i.rootBoundary, h = void 0 === c ? Zt : c, d = i.elementContext, u = void 0 === d ? te : d, f = i.altBoundary, p = void 0 !== f && f, m = i.padding, g = void 0 === m ? 0 : m, _ = Me("number" != typeof g ? g : Fe(g, Yt)), b = u === te ? ee : te, v = t.rects.popper, y = t.elements[p ? b : u], w = function(t, e, i, n) {
            var s = "clippingParents" === e ? function(t) {
                var e = ti($e(t)), i = [
                    "absolute",
                    "fixed"
                ].indexOf(Le(t).position) >= 0 && _e(t) ? Ne(t) : t;
                return ge(i) ? e.filter(function(t) {
                    return ge(t) && ke(t, i) && "body" !== pe(t);
                }) : [];
            }(t) : [].concat(e), o = [].concat(s, [
                i
            ]), r = o[0], a = o.reduce(function(e, i) {
                var s = ii(t, i, n);
                return e.top = we(s.top, e.top), e.right = Ae(s.right, e.right), e.bottom = Ae(s.bottom, e.bottom), e.left = we(s.left, e.left), e;
            }, ii(t, r, n));
            return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
        }(ge(y) ? y : y.contextElement || De(t.elements.popper), l, h, r), A = Oe(t.elements.reference), E = ni({
            reference: A,
            element: v,
            placement: s
        }), T = ei(Object.assign({}, v, E)), C = u === te ? T : A, O = {
            top: w.top - C.top + _.top,
            bottom: C.bottom - w.bottom + _.bottom,
            left: w.left - C.left + _.left,
            right: C.right - w.right + _.right
        }, x = t.modifiersData.offset;
        if (u === te && x) {
            var k = x[s];
            Object.keys(O).forEach(function(t) {
                var e = [
                    Kt,
                    Vt
                ].indexOf(t) >= 0 ? 1 : -1, i = [
                    qt,
                    Vt
                ].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e;
            });
        }
        return O;
    }
    function oi(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = i.boundary, o = i.rootBoundary, r = i.padding, a = i.flipVariations, l = i.allowedAutoPlacements, c = void 0 === l ? ne : l, h = We(n), d = h ? a ? ie : ie.filter(function(t) {
            return We(t) === h;
        }) : Yt, u = d.filter(function(t) {
            return c.indexOf(t) >= 0;
        });
        0 === u.length && (u = d);
        var f = u.reduce(function(e, i) {
            return e[i] = si(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[ye(i)], e;
        }, {});
        return Object.keys(f).sort(function(t, e) {
            return f[t] - f[e];
        });
    }
    const ri = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name;
            if (!e.modifiersData[n]._skip) {
                for(var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = ye(g), b = l || (_ !== g && p ? function(t) {
                    if (ye(t) === Xt) return [];
                    var e = Qe(t);
                    return [
                        Ye(t),
                        e,
                        Ye(e)
                    ];
                }(g) : [
                    Qe(g)
                ]), v = [
                    g
                ].concat(b).reduce(function(t, i) {
                    return t.concat(ye(i) === Xt ? oi(e, {
                        placement: i,
                        boundary: h,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: m
                    }) : i);
                }, []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++){
                    var O = v[C], x = ye(O), k = We(O) === Ut, L = [
                        qt,
                        Vt
                    ].indexOf(x) >= 0, S = L ? "width" : "height", D = si(e, {
                        placement: O,
                        boundary: h,
                        rootBoundary: d,
                        altBoundary: u,
                        padding: c
                    }), $ = L ? k ? Kt : Qt : k ? Vt : qt;
                    y[S] > w[S] && ($ = Qe($));
                    var I = Qe($), N = [];
                    if (o && N.push(D[x] <= 0), a && N.push(D[$] <= 0, D[I] <= 0), N.every(function(t) {
                        return t;
                    })) {
                        T = O, E = !1;
                        break;
                    }
                    A.set(O, N);
                }
                if (E) for(var P = function(t) {
                    var e = v.find(function(e) {
                        var i = A.get(e);
                        if (i) return i.slice(0, t).every(function(t) {
                            return t;
                        });
                    });
                    if (e) return T = e, "break";
                }, j = p ? 3 : 1; j > 0 && "break" !== P(j); j--);
                e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
            }
        },
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    };
    function ai(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        };
    }
    function li(t) {
        return [
            qt,
            Kt,
            Vt,
            Qt
        ].some(function(e) {
            return t[e] >= 0;
        });
    }
    const ci = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: function(t) {
            var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, r = si(e, {
                elementContext: "reference"
            }), a = si(e, {
                altBoundary: !0
            }), l = ai(r, n), c = ai(a, s, o), h = li(l), d = li(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
            });
        }
    }, hi = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name, s = i.offset, o = void 0 === s ? [
                0,
                0
            ] : s, r = ne.reduce(function(t, i) {
                return t[i] = function(t, e, i) {
                    var n = ye(t), s = [
                        Qt,
                        qt
                    ].indexOf(n) >= 0 ? -1 : 1, o = "function" == typeof i ? i(Object.assign({}, e, {
                        placement: t
                    })) : i, r = o[0], a = o[1];
                    return r = r || 0, a = (a || 0) * s, [
                        Qt,
                        Kt
                    ].indexOf(n) >= 0 ? {
                        x: a,
                        y: r
                    } : {
                        x: r,
                        y: a
                    };
                }(i, e.rects, o), t;
            }, {}), a = r[e.placement], l = a.x, c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
        }
    }, di = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = ni({
                reference: e.rects.reference,
                element: e.rects.popper,
                placement: e.placement
            });
        },
        data: {}
    }, ui = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name, s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 !== r && r, l = i.boundary, c = i.rootBoundary, h = i.altBoundary, d = i.padding, u = i.tether, f = void 0 === u || u, p = i.tetherOffset, m = void 0 === p ? 0 : p, g = si(e, {
                boundary: l,
                rootBoundary: c,
                padding: d,
                altBoundary: h
            }), _ = ye(e.placement), b = We(e.placement), v = !b, y = Pe(_), w = "x" === y ? "y" : "x", A = e.modifiersData.popperOffsets, E = e.rects.reference, T = e.rects.popper, C = "function" == typeof m ? m(Object.assign({}, e.rects, {
                placement: e.placement
            })) : m, O = "number" == typeof C ? {
                mainAxis: C,
                altAxis: C
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, C), x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, k = {
                x: 0,
                y: 0
            };
            if (A) {
                if (o) {
                    var L, S = "y" === y ? qt : Qt, D = "y" === y ? Vt : Kt, $ = "y" === y ? "height" : "width", I = A[y], N = I + g[S], P = I - g[D], j = f ? -T[$] / 2 : 0, M = b === Ut ? E[$] : T[$], F = b === Ut ? -T[$] : -E[$], H = e.elements.arrow, W = f && H ? xe(H) : {
                        width: 0,
                        height: 0
                    }, B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, z = B[S], R = B[D], q = je(0, E[$], W[$]), V = v ? E[$] / 2 - j - q - z - O.mainAxis : M - q - z - O.mainAxis, K = v ? -E[$] / 2 + j + q + R + O.mainAxis : F + q + R + O.mainAxis, Q = e.elements.arrow && Ne(e.elements.arrow), X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0, Y = null != (L = null == x ? void 0 : x[y]) ? L : 0, U = I + K - Y, G = je(f ? Ae(N, I + V - Y - X) : N, I, f ? we(P, U) : P);
                    A[y] = G, k[y] = G - I;
                }
                if (a) {
                    var J, Z = "x" === y ? qt : Qt, tt = "x" === y ? Vt : Kt, et = A[w], it = "y" === w ? "height" : "width", nt = et + g[Z], st = et - g[tt], ot = -1 !== [
                        qt,
                        Qt
                    ].indexOf(_), rt = null != (J = null == x ? void 0 : x[w]) ? J : 0, at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis, lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st, ct = f && ot ? function(t, e, i) {
                        var n = je(t, e, i);
                        return n > i ? i : n;
                    }(at, et, lt) : je(f ? at : nt, et, f ? lt : st);
                    A[w] = ct, k[w] = ct - et;
                }
                e.modifiersData[n] = k;
            }
        },
        requiresIfExists: [
            "offset"
        ]
    };
    function fi(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = _e(e), r = _e(e) && function(t) {
            var e = t.getBoundingClientRect(), i = Ee(e.width) / t.offsetWidth || 1, n = Ee(e.height) / t.offsetHeight || 1;
            return 1 !== i || 1 !== n;
        }(e), a = De(e), l = Oe(t, r, i), c = {
            scrollLeft: 0,
            scrollTop: 0
        }, h = {
            x: 0,
            y: 0
        };
        return (o || !o && !i) && (("body" !== pe(e) || Je(a)) && (c = (n = e) !== me(n) && _e(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : Ue(n)), _e(e) ? ((h = Oe(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Ge(a))), {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height
        };
    }
    function pi(t) {
        var e = new Map, i = new Set, n = [];
        function s(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n);
                }
            }), n.push(t);
        }
        return t.forEach(function(t) {
            e.set(t.name, t);
        }), t.forEach(function(t) {
            i.has(t.name) || s(t);
        }), n;
    }
    var mi = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function gi() {
        for(var t = arguments.length, e = new Array(t), i = 0; i < t; i++)e[i] = arguments[i];
        return !e.some(function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function _i(t) {
        void 0 === t && (t = {});
        var e = t, i = e.defaultModifiers, n = void 0 === i ? [] : i, s = e.defaultOptions, o = void 0 === s ? mi : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, mi, o),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            }, l = [], c = !1, h = {
                state: a,
                setOptions: function(i) {
                    var s = "function" == typeof i ? i(a.options) : i;
                    d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                        reference: ge(t) ? ti(t) : t.contextElement ? ti(t.contextElement) : [],
                        popper: ti(e)
                    };
                    var r, c, u = function(t) {
                        var e = pi(t);
                        return fe.reduce(function(t, i) {
                            return t.concat(e.filter(function(t) {
                                return t.phase === i;
                            }));
                        }, []);
                    }((r = [].concat(n, a.options.modifiers), c = r.reduce(function(t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({}, i, e, {
                            options: Object.assign({}, i.options, e.options),
                            data: Object.assign({}, i.data, e.data)
                        }) : e, t;
                    }, {}), Object.keys(c).map(function(t) {
                        return c[t];
                    })));
                    return a.orderedModifiers = u.filter(function(t) {
                        return t.enabled;
                    }), a.orderedModifiers.forEach(function(t) {
                        var e = t.name, i = t.options, n = void 0 === i ? {} : i, s = t.effect;
                        if ("function" == typeof s) {
                            var o = s({
                                state: a,
                                name: e,
                                instance: h,
                                options: n
                            });
                            l.push(o || function() {});
                        }
                    }), h.update();
                },
                forceUpdate: function() {
                    if (!c) {
                        var t = a.elements, e = t.reference, i = t.popper;
                        if (gi(e, i)) {
                            a.rects = {
                                reference: fi(e, Ne(i), "fixed" === a.options.strategy),
                                popper: xe(i)
                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function(t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data);
                            });
                            for(var n = 0; n < a.orderedModifiers.length; n++)if (!0 !== a.reset) {
                                var s = a.orderedModifiers[n], o = s.fn, r = s.options, l = void 0 === r ? {} : r, d = s.name;
                                "function" == typeof o && (a = o({
                                    state: a,
                                    options: l,
                                    name: d,
                                    instance: h
                                }) || a);
                            } else a.reset = !1, n = -1;
                        }
                    }
                },
                update: (s = function() {
                    return new Promise(function(t) {
                        h.forceUpdate(), t(a);
                    });
                }, function() {
                    return r || (r = new Promise(function(t) {
                        Promise.resolve().then(function() {
                            r = void 0, t(s());
                        });
                    })), r;
                }),
                destroy: function() {
                    d(), c = !0;
                }
            };
            if (!gi(t, e)) return h;
            function d() {
                l.forEach(function(t) {
                    return t();
                }), l = [];
            }
            return h.setOptions(i).then(function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t);
            }), h;
        };
    }
    var bi = _i(), vi = _i({
        defaultModifiers: [
            Ve,
            di,
            Re,
            ve
        ]
    }), yi = _i({
        defaultModifiers: [
            Ve,
            di,
            Re,
            ve,
            hi,
            ri,
            ui,
            He,
            ci
        ]
    });
    const wi = Object.freeze(Object.defineProperty({
        __proto__: null,
        afterMain: ce,
        afterRead: re,
        afterWrite: ue,
        applyStyles: ve,
        arrow: He,
        auto: Xt,
        basePlacements: Yt,
        beforeMain: ae,
        beforeRead: se,
        beforeWrite: he,
        bottom: Vt,
        clippingParents: Jt,
        computeStyles: Re,
        createPopper: yi,
        createPopperBase: bi,
        createPopperLite: vi,
        detectOverflow: si,
        end: Gt,
        eventListeners: Ve,
        flip: ri,
        hide: ci,
        left: Qt,
        main: le,
        modifierPhases: fe,
        offset: hi,
        placements: ne,
        popper: te,
        popperGenerator: _i,
        popperOffsets: di,
        preventOverflow: ui,
        read: oe,
        reference: ee,
        right: Kt,
        start: Ut,
        top: qt,
        variationPlacements: ie,
        viewport: Zt,
        write: de
    }, Symbol.toStringTag, {
        value: "Module"
    })), Ai = "dropdown", Ei = ".bs.dropdown", Ti = ".data-api", Ci = "ArrowUp", Oi = "ArrowDown", xi = `hide${Ei}`, ki = `hidden${Ei}`, Li = `show${Ei}`, Si = `shown${Ei}`, Di = `click${Ei}${Ti}`, $i = `keydown${Ei}${Ti}`, Ii = `keyup${Ei}${Ti}`, Ni = "show", Pi = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', ji = `${Pi}.${Ni}`, Mi = ".dropdown-menu", Fi = p() ? "top-end" : "top-start", Hi = p() ? "top-start" : "top-end", Wi = p() ? "bottom-end" : "bottom-start", Bi = p() ? "bottom-start" : "bottom-end", zi = p() ? "left-start" : "right-start", Ri = p() ? "right-start" : "left-start", qi = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [
            0,
            2
        ],
        popperConfig: null,
        reference: "toggle"
    }, Vi = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class Ki extends W {
        constructor(t, e){
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = z.next(this._element, Mi)[0] || z.prev(this._element, Mi)[0] || z.findOne(Mi, this._parent), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
            return qi;
        }
        static get DefaultType() {
            return Vi;
        }
        static get NAME() {
            return Ai;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (l(this._element) || this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            if (!N.trigger(this._element, Li, t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t of [].concat(...document.body.children))N.on(t, "mouseover", h);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ni), this._element.classList.add(Ni), N.trigger(this._element, Si, t);
            }
        }
        hide() {
            if (l(this._element) || !this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _completeHide(t) {
            if (!N.trigger(this._element, xi, t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))N.off(t, "mouseover", h);
                this._popper && this._popper.destroy(), this._menu.classList.remove(Ni), this._element.classList.remove(Ni), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, ki, t);
            }
        }
        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Ai.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t;
        }
        _createPopper() {
            if (void 0 === wi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = yi(t, this._menu, e);
        }
        _isShown() {
            return this._menu.classList.contains(Ni);
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return zi;
            if (t.classList.contains("dropstart")) return Ri;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? Hi : Fi : e ? Bi : Wi;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            };
            return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [
                {
                    name: "applyStyles",
                    enabled: !1
                }
            ]), {
                ...t,
                ...g(this._config.popperConfig, [
                    void 0,
                    t
                ])
            };
        }
        _selectMenuItem({ key: t, target: e }) {
            const i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t)=>a(t));
            i.length && b(i, e, t === Oi, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Ki.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
            const e = z.find(ji);
            for (const i of e){
                const e = Ki.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const n = t.composedPath(), s = n.includes(e._menu);
                if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o);
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName), i = "Escape" === t.key, n = [
                Ci,
                Oi
            ].includes(t.key);
            if (!n && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const s = this.matches(Pi) ? this : z.prev(this, Pi)[0] || z.next(this, Pi)[0] || z.findOne(Pi, t.delegateTarget.parentNode), o = Ki.getOrCreateInstance(s);
            if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
        }
    }
    N.on(document, $i, Pi, Ki.dataApiKeydownHandler), N.on(document, $i, Mi, Ki.dataApiKeydownHandler), N.on(document, Di, Ki.clearMenus), N.on(document, Ii, Ki.clearMenus), N.on(document, Di, Pi, function(t) {
        t.preventDefault(), Ki.getOrCreateInstance(this).toggle();
    }), m(Ki);
    const Qi = "backdrop", Xi = "show", Yi = `mousedown.bs.${Qi}`, Ui = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }, Gi = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class Ji extends H {
        constructor(t){
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
        }
        static get Default() {
            return Ui;
        }
        static get DefaultType() {
            return Gi;
        }
        static get NAME() {
            return Qi;
        }
        show(t) {
            if (!this._config.isVisible) return void g(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && d(e), e.classList.add(Xi), this._emulateAnimation(()=>{
                g(t);
            });
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(Xi), this._emulateAnimation(()=>{
                this.dispose(), g(t);
            })) : g(t);
        }
        dispose() {
            this._isAppended && (N.off(this._element, Yi), this._element.remove(), this._isAppended = !1);
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t;
            }
            return this._element;
        }
        _configAfterMerge(t) {
            return t.rootElement = r(t.rootElement), t;
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t), N.on(t, Yi, ()=>{
                g(this._config.clickCallback);
            }), this._isAppended = !0;
        }
        _emulateAnimation(t) {
            _(t, this._getElement(), this._config.isAnimated);
        }
    }
    const Zi = ".bs.focustrap", tn = `focusin${Zi}`, en = `keydown.tab${Zi}`, nn = "backward", sn = {
        autofocus: !0,
        trapElement: null
    }, on = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class rn extends H {
        constructor(t){
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
        }
        static get Default() {
            return sn;
        }
        static get DefaultType() {
            return on;
        }
        static get NAME() {
            return "focustrap";
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Zi), N.on(document, tn, (t)=>this._handleFocusin(t)), N.on(document, en, (t)=>this._handleKeydown(t)), this._isActive = !0);
        }
        deactivate() {
            this._isActive && (this._isActive = !1, N.off(document, Zi));
        }
        _handleFocusin(t) {
            const { trapElement: e } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const i = z.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === nn ? i[i.length - 1].focus() : i[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? nn : "forward");
        }
    }
    const an = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ln = ".sticky-top", cn = "padding-right", hn = "margin-right";
    class dn {
        constructor(){
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, cn, (e)=>e + t), this._setElementAttributes(an, cn, (e)=>e + t), this._setElementAttributes(ln, hn, (e)=>e - t);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, cn), this._resetElementAttributes(an, cn), this._resetElementAttributes(ln, hn);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t)=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
            });
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && F.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t)=>{
                const i = F.getDataAttribute(t, e);
                null !== i ? (F.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
            });
        }
        _applyManipulationCallback(t, e) {
            if (o(t)) e(t);
            else for (const i of z.find(t, this._element))e(i);
        }
    }
    const un = ".bs.modal", fn = `hide${un}`, pn = `hidePrevented${un}`, mn = `hidden${un}`, gn = `show${un}`, _n = `shown${un}`, bn = `resize${un}`, vn = `click.dismiss${un}`, yn = `mousedown.dismiss${un}`, wn = `keydown.dismiss${un}`, An = `click${un}.data-api`, En = "modal-open", Tn = "show", Cn = "modal-static", On = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }, xn = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class kn extends W {
        constructor(t, e){
            super(t, e), this._dialog = z.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new dn, this._addEventListeners();
        }
        static get Default() {
            return On;
        }
        static get DefaultType() {
            return xn;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || this._isTransitioning || N.trigger(this._element, gn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(En), this._adjustDialog(), this._backdrop.show(()=>this._showElement(t)));
        }
        hide() {
            this._isShown && !this._isTransitioning && (N.trigger(this._element, fn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Tn), this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated())));
        }
        dispose() {
            N.off(window, un), N.off(this._dialog, un), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new Ji({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            });
        }
        _initializeFocusTrap() {
            return new rn({
                trapElement: this._element
            });
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e = z.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), d(this._element), this._element.classList.add(Tn), this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, N.trigger(this._element, _n, {
                    relatedTarget: t
                });
            }, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
            N.on(this._element, wn, (t)=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
            }), N.on(window, bn, ()=>{
                this._isShown && !this._isTransitioning && this._adjustDialog();
            }), N.on(this._element, yn, (t)=>{
                N.one(this._element, vn, (e)=>{
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
                });
            });
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(()=>{
                document.body.classList.remove(En), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, mn);
            });
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (N.trigger(this._element, pn).defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(Cn) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(Cn), this._queueCallback(()=>{
                this._element.classList.remove(Cn), this._queueCallback(()=>{
                    this._element.style.overflowY = e;
                }, this._dialog);
            }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
            if (i && !t) {
                const t = p() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`;
            }
            if (!i && t) {
                const t = p() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`;
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                const i = kn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    N.on(document, An, '[data-bs-toggle="modal"]', function(t) {
        const e = z.getElementFromSelector(this);
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), N.one(e, gn, (t)=>{
            t.defaultPrevented || N.one(e, mn, ()=>{
                a(this) && this.focus();
            });
        });
        const i = z.findOne(".modal.show");
        i && kn.getInstance(i).hide(), kn.getOrCreateInstance(e).toggle(this);
    }), R(kn), m(kn);
    const Ln = ".bs.offcanvas", Sn = ".data-api", Dn = `load${Ln}${Sn}`, $n = "show", In = "showing", Nn = "hiding", Pn = ".offcanvas.show", jn = `show${Ln}`, Mn = `shown${Ln}`, Fn = `hide${Ln}`, Hn = `hidePrevented${Ln}`, Wn = `hidden${Ln}`, Bn = `resize${Ln}`, zn = `click${Ln}${Sn}`, Rn = `keydown.dismiss${Ln}`, qn = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }, Vn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class Kn extends W {
        constructor(t, e){
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get Default() {
            return qn;
        }
        static get DefaultType() {
            return Vn;
        }
        static get NAME() {
            return "offcanvas";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || N.trigger(this._element, jn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new dn).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(In), this._queueCallback(()=>{
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add($n), this._element.classList.remove(In), N.trigger(this._element, Mn, {
                    relatedTarget: t
                });
            }, this._element, !0));
        }
        hide() {
            this._isShown && (N.trigger(this._element, Fn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Nn), this._backdrop.hide(), this._queueCallback(()=>{
                this._element.classList.remove($n, Nn), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new dn).reset(), N.trigger(this._element, Wn);
            }, this._element, !0)));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Ji({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? ()=>{
                    "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, Hn);
                } : null
            });
        }
        _initializeFocusTrap() {
            return new rn({
                trapElement: this._element
            });
        }
        _addEventListeners() {
            N.on(this._element, Rn, (t)=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, Hn));
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Kn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    N.on(document, zn, '[data-bs-toggle="offcanvas"]', function(t) {
        const e = z.getElementFromSelector(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), l(this)) return;
        N.one(e, Wn, ()=>{
            a(this) && this.focus();
        });
        const i = z.findOne(Pn);
        i && i !== e && Kn.getInstance(i).hide(), Kn.getOrCreateInstance(e).toggle(this);
    }), N.on(window, Dn, ()=>{
        for (const t of z.find(Pn))Kn.getOrCreateInstance(t).show();
    }), N.on(window, Bn, ()=>{
        for (const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed" !== getComputedStyle(t).position && Kn.getOrCreateInstance(t).hide();
    }), R(Kn), m(Kn);
    const Qn = {
        "*": [
            "class",
            "dir",
            "id",
            "lang",
            "role",
            /^aria-[\w-]*$/i
        ],
        a: [
            "target",
            "href",
            "title",
            "rel"
        ],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: [
            "src",
            "srcset",
            "alt",
            "title",
            "width",
            "height"
        ],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }, Xn = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]), Yn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Un = (t, e)=>{
        const i = t.nodeName.toLowerCase();
        return e.includes(i) ? !Xn.has(i) || Boolean(Yn.test(t.nodeValue)) : e.filter((t)=>t instanceof RegExp).some((t)=>t.test(i));
    }, Gn = {
        allowList: Qn,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }, Jn = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }, Zn = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class ts extends H {
        constructor(t){
            super(), this._config = this._getConfig(t);
        }
        static get Default() {
            return Gn;
        }
        static get DefaultType() {
            return Jn;
        }
        static get NAME() {
            return "TemplateFactory";
        }
        getContent() {
            return Object.values(this._config.content).map((t)=>this._resolvePossibleFunction(t)).filter(Boolean);
        }
        hasContent() {
            return this.getContent().length > 0;
        }
        changeContent(t) {
            return this._checkContent(t), this._config.content = {
                ...this._config.content,
                ...t
            }, this;
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content))this._setContent(t, i, e);
            const e = t.children[0], i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e;
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
            for (const [e, i] of Object.entries(t))super._typeCheckConfig({
                selector: e,
                entry: i
            }, Zn);
        }
        _setContent(t, e, i) {
            const n = z.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove());
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const n = (new window.DOMParser).parseFromString(t, "text/html"), s = [].concat(...n.body.querySelectorAll("*"));
                for (const t of s){
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue;
                    }
                    const n = [].concat(...t.attributes), s = [].concat(e["*"] || [], e[i] || []);
                    for (const e of n)Un(e, s) || t.removeAttribute(e.nodeName);
                }
                return n.body.innerHTML;
            }(t, this._config.allowList, this._config.sanitizeFn) : t;
        }
        _resolvePossibleFunction(t) {
            return g(t, [
                void 0,
                this
            ]);
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent;
        }
    }
    const es = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]), is = "fade", ns = "show", ss = ".tooltip-inner", os = ".modal", rs = "hide.bs.modal", as = "hover", ls = "focus", cs = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: p() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: p() ? "right" : "left"
    }, hs = {
        allowList: Qn,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        html: !1,
        offset: [
            0,
            6
        ],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }, ds = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class us extends W {
        constructor(t, e){
            if (void 0 === wi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
        }
        static get Default() {
            return hs;
        }
        static get DefaultType() {
            return ds;
        }
        static get NAME() {
            return "tooltip";
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle() {
            this._isEnabled && (this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
            clearTimeout(this._timeout), N.off(this._element.closest(os), rs, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = N.trigger(this._element, this.constructor.eventName("show")), e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this._disposePopper();
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const { container: n } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(ns), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))N.on(t, "mouseover", h);
            this._queueCallback(()=>{
                N.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1;
            }, this.tip, this._isAnimated());
        }
        hide() {
            if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(ns), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))N.off(t, "mouseover", h);
                this._activeTrigger.click = !1, this._activeTrigger[ls] = !1, this._activeTrigger[as] = !1, this._isHovered = null, this._queueCallback(()=>{
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName("hidden")));
                }, this.tip, this._isAnimated());
            }
        }
        update() {
            this._popper && this._popper.update();
        }
        _isWithContent() {
            return Boolean(this._getTitle());
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(is, ns), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = ((t)=>{
                do t += Math.floor(1e6 * Math.random());
                while (document.getElementById(t));
                return t;
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(is), e;
        }
        setContent(t) {
            this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new ts({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory;
        }
        _getContentForTemplate() {
            return {
                [ss]: this._getTitle()
            };
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(is);
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(ns);
        }
        _createPopper(t) {
            const e = g(this._config.placement, [
                this,
                t,
                this._element
            ]), i = cs[e.toUpperCase()];
            return yi(this._element, t, this._getPopperConfig(i));
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _resolvePossibleFunction(t) {
            return g(t, [
                this._element,
                this._element
            ]);
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: (t)=>{
                            this._getTipElement().setAttribute("data-popper-placement", t.state.placement);
                        }
                    }
                ]
            };
            return {
                ...e,
                ...g(this._config.popperConfig, [
                    void 0,
                    e
                ])
            };
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)if ("click" === e) N.on(this._element, this.constructor.eventName("click"), this._config.selector, (t)=>{
                this._initializeOnDelegatedTarget(t).toggle();
            });
            else if ("manual" !== e) {
                const t = e === as ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i = e === as ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                N.on(this._element, t, this._config.selector, (t)=>{
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? ls : as] = !0, e._enter();
                }), N.on(this._element, i, this._config.selector, (t)=>{
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? ls : as] = e._element.contains(t.relatedTarget), e._leave();
                });
            }
            this._hideModalHandler = ()=>{
                this._element && this.hide();
            }, N.on(this._element.closest(os), rs, this._hideModalHandler);
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(()=>{
                this._isHovered && this.show();
            }, this._config.delay.show));
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(()=>{
                this._isHovered || this.hide();
            }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
            const e = F.getDataAttributes(this._element);
            for (const t of Object.keys(e))es.has(t) && delete e[t];
            return t = {
                ...e,
                ..."object" == typeof t && t ? t : {}
            }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
        }
        _getDelegateConfig() {
            const t = {};
            for (const [e, i] of Object.entries(this._config))this.constructor.Default[e] !== i && (t[e] = i);
            return t.selector = !1, t.trigger = "manual", t;
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = us.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    m(us);
    const fs = ".popover-header", ps = ".popover-body", ms = {
        ...us.Default,
        content: "",
        offset: [
            0,
            8
        ],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }, gs = {
        ...us.DefaultType,
        content: "(null|string|element|function)"
    };
    class _s extends us {
        static get Default() {
            return ms;
        }
        static get DefaultType() {
            return gs;
        }
        static get NAME() {
            return "popover";
        }
        _isWithContent() {
            return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
            return {
                [fs]: this._getTitle(),
                [ps]: this._getContent()
            };
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = _s.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    m(_s);
    const bs = ".bs.scrollspy", vs = `activate${bs}`, ys = `click${bs}`, ws = `load${bs}.data-api`, As = "active", Es = "[href]", Ts = ".nav-link", Cs = `${Ts}, .nav-item > ${Ts}, .list-group-item`, Os = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [
            .1,
            .5,
            1
        ]
    }, xs = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class ks extends W {
        constructor(t, e){
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh();
        }
        static get Default() {
            return Os;
        }
        static get DefaultType() {
            return xs;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values())this._observer.observe(t);
        }
        dispose() {
            this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
            return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t)=>Number.parseFloat(t))), t;
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (N.off(this._config.target, ys), N.on(this._config.target, ys, Es, (t)=>{
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window, n = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) return void i.scrollTo({
                        top: n,
                        behavior: "smooth"
                    });
                    i.scrollTop = n;
                }
            }));
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((t)=>this._observerCallback(t), t);
        }
        _observerCallback(t) {
            const e = (t)=>this._targetLinks.get(`#${t.target.id}`), i = (t)=>{
                this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t));
            }, n = (this._rootElement || document.documentElement).scrollTop, s = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n;
            for (const o of t){
                if (!o.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(o));
                    continue;
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && t) {
                    if (i(o), !n) return;
                } else s || t || i(o);
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const t = z.find(Es, this._config.target);
            for (const e of t){
                if (!e.hash || l(e)) continue;
                const t = z.findOne(decodeURI(e.hash), this._element);
                a(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t));
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(As), this._activateParents(t), N.trigger(this._element, vs, {
                relatedTarget: t
            }));
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(As);
            else for (const e of z.parents(t, ".nav, .list-group"))for (const t of z.prev(e, Cs))t.classList.add(As);
        }
        _clearActiveClass(t) {
            t.classList.remove(As);
            const e = z.find(`${Es}.${As}`, t);
            for (const t of e)t.classList.remove(As);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = ks.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    N.on(window, ws, ()=>{
        for (const t of z.find('[data-bs-spy="scroll"]'))ks.getOrCreateInstance(t);
    }), m(ks);
    const Ls = ".bs.tab", Ss = `hide${Ls}`, Ds = `hidden${Ls}`, $s = `show${Ls}`, Is = `shown${Ls}`, Ns = `click${Ls}`, Ps = `keydown${Ls}`, js = `load${Ls}`, Ms = "ArrowLeft", Fs = "ArrowRight", Hs = "ArrowUp", Ws = "ArrowDown", Bs = "Home", zs = "End", Rs = "active", qs = "fade", Vs = "show", Ks = ".dropdown-toggle", Qs = `:not(${Ks})`, Xs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Ys = `.nav-link${Qs}, .list-group-item${Qs}, [role="tab"]${Qs}, ${Xs}`, Us = `.${Rs}[data-bs-toggle="tab"], .${Rs}[data-bs-toggle="pill"], .${Rs}[data-bs-toggle="list"]`;
    class Gs extends W {
        constructor(t){
            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, Ps, (t)=>this._keydown(t)));
        }
        static get NAME() {
            return "tab";
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(), i = e ? N.trigger(e, Ss, {
                relatedTarget: t
            }) : null;
            N.trigger(t, $s, {
                relatedTarget: e
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
            t && (t.classList.add(Rs), this._activate(z.getElementFromSelector(t)), this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), N.trigger(t, Is, {
                    relatedTarget: e
                })) : t.classList.add(Vs);
            }, t, t.classList.contains(qs)));
        }
        _deactivate(t, e) {
            t && (t.classList.remove(Rs), t.blur(), this._deactivate(z.getElementFromSelector(t)), this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), N.trigger(t, Ds, {
                    relatedTarget: e
                })) : t.classList.remove(Vs);
            }, t, t.classList.contains(qs)));
        }
        _keydown(t) {
            if (![
                Ms,
                Fs,
                Hs,
                Ws,
                Bs,
                zs
            ].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = this._getChildren().filter((t)=>!l(t));
            let i;
            if ([
                Bs,
                zs
            ].includes(t.key)) i = e[t.key === Bs ? 0 : e.length - 1];
            else {
                const n = [
                    Fs,
                    Ws
                ].includes(t.key);
                i = b(e, t.target, n, !0);
            }
            i && (i.focus({
                preventScroll: !0
            }), Gs.getOrCreateInstance(i).show());
        }
        _getChildren() {
            return z.find(Ys, this._parent);
        }
        _getActiveElem() {
            return this._getChildren().find((t)=>this._elemIsActive(t)) || null;
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e)this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t), i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = z.getElementFromSelector(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const n = (t, n)=>{
                const s = z.findOne(t, i);
                s && s.classList.toggle(n, e);
            };
            n(Ks, Rs), n(".dropdown-menu", Vs), i.setAttribute("aria-expanded", e);
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i);
        }
        _elemIsActive(t) {
            return t.classList.contains(Rs);
        }
        _getInnerElement(t) {
            return t.matches(Ys) ? t : z.findOne(Ys, t);
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Gs.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    N.on(document, Ns, Xs, function(t) {
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), l(this) || Gs.getOrCreateInstance(this).show();
    }), N.on(window, js, ()=>{
        for (const t of z.find(Us))Gs.getOrCreateInstance(t);
    }), m(Gs);
    const Js = ".bs.toast", Zs = `mouseover${Js}`, to = `mouseout${Js}`, eo = `focusin${Js}`, io = `focusout${Js}`, no = `hide${Js}`, so = `hidden${Js}`, oo = `show${Js}`, ro = `shown${Js}`, ao = "hide", lo = "show", co = "showing", ho = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, uo = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class fo extends W {
        constructor(t, e){
            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get Default() {
            return uo;
        }
        static get DefaultType() {
            return ho;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            N.trigger(this._element, oo).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(ao), d(this._element), this._element.classList.add(lo, co), this._queueCallback(()=>{
                this._element.classList.remove(co), N.trigger(this._element, ro), this._maybeScheduleHide();
            }, this._element, this._config.animation));
        }
        hide() {
            this.isShown() && (N.trigger(this._element, no).defaultPrevented || (this._element.classList.add(co), this._queueCallback(()=>{
                this._element.classList.add(ao), this._element.classList.remove(co, lo), N.trigger(this._element, so);
            }, this._element, this._config.animation)));
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(lo), super.dispose();
        }
        isShown() {
            return this._element.classList.contains(lo);
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch(t.type){
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide();
        }
        _setListeners() {
            N.on(this._element, Zs, (t)=>this._onInteraction(t, !0)), N.on(this._element, to, (t)=>this._onInteraction(t, !1)), N.on(this._element, eo, (t)=>this._onInteraction(t, !0)), N.on(this._element, io, (t)=>this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = fo.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return R(fo), m(fo), {
        Alert: Q,
        Button: Y,
        Carousel: Lt,
        Collapse: Rt,
        Dropdown: Ki,
        Modal: kn,
        Offcanvas: Kn,
        Popover: _s,
        ScrollSpy: ks,
        Tab: Gs,
        Toast: fo,
        Tooltip: us
    };
});

},{}]},["n0fw4","kTBnD"], "kTBnD", "parcelRequire94c2", {})

//# sourceMappingURL=login.3c14d121.js.map

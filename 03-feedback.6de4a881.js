function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function T(e){return c=e,f=setTimeout(N,t),l?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function N(){var e=g();if(h(e))return j(e);f=setTimeout(N,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function j(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function E(){var e=g(),n=h(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return T(u);if(s)return f=setTimeout(N,t),y(u)}return void 0===f&&(f=setTimeout(N,t)),a}return t=p(t)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(p(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),E.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},E.flush=function(){return void 0===f?a:j(g())},E}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),T=e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500);let h={};function N(e){try{return JSON.parse(localStorage.getItem(e))}catch(e){console.log(e)}}y.addEventListener("input",T),y.addEventListener("submit",(function(e){e.preventDefault(),function(e){let t=!0;for(let n=0;n<e.elements.length;n++){const r=e.elements[n];if("INPUT"===r.tagName||"TEXTAREA"===r.tagName){if(""===r.value.trim()){t=!1;break}}}return!!t||(alert("Please fill in all the fields!"),!1)}(e.currentTarget)&&(console.log(N("feedback-form-state")),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),h={})})),localStorage.getItem("feedback-form-state")&&(h=N("feedback-form-state"),function(e,t){const n=Object.keys(e);for(let r=0;r<t.elements.length;r++){const o=t.elements[r];if("INPUT"===o.tagName||"TEXTAREA"===o.tagName){const t=o.name;n.includes(t)&&(o.value=e[t])}}}(h,y));
//# sourceMappingURL=03-feedback.6de4a881.js.map

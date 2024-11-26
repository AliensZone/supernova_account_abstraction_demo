          .close-selector-button:focus-visible {
            outline: 2px solid #181818;
            outline-offset: -0.25px;
          }
        `),eY=eI("<div role=button tabindex=0 class=close-selector-button>");function eQ(e){var t;return(t=eW()).style.setProperty("display","block"),function(e,t={},r,n){let i={};n||V(()=>i.children=eC(e,t.children,i.children)),V(()=>t.ref&&t.ref(e)),V(()=>(function(e,t,r,n,i={},o=!1){for(let n in t||(t={}),i)if(!(n in t)){if("children"===n)continue;i[n]=eN(e,n,null,i[n],r,o)}for(let s in t){if("children"===s){n||eC(e,t.children);continue}let a=t[s];i[s]=eN(e,s,a,i[s],r,o)}})(e,t,r,!0,i,!0))}(t,e,!0,!0),t}function eJ(e){var t;return[eq(),((t=eY()).style.setProperty("position","absolute"),t.style.setProperty("top","16px"),t.style.setProperty("right","16px"),t.style.setProperty("background","none"),t.style.setProperty("border","none"),t.style.setProperty("cursor","pointer"),t.style.setProperty("padding","0"),t.style.setProperty("margin","0"),t.style.setProperty("border-radius","50%"),t.addEventListener("click",e.onClose),t.addEventListener("keydown",function(t){("Enter"===t.key||" "===t.key)&&e.onClose()}),ek(t,ef(eQ,{})),t)]}var eZ=eI(`<style>
/*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

/*
Document
========
*/

/**
Use a better box model (opinionated).
*/

*,
::before,
::after {
	box-sizing: border-box;
	margin: 0; /* Remove all margins from everywhere. */
}

:host {
	/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */
	font-family:
		'DM Sans', /* Note: not part of modern-normalize, added specifically for this project. */
		system-ui,
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji';
	line-height: 1.15; /* 1. Correct the line height in all browsers. */
	-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */
	-moz-tab-size: 4; /* 3. Use a more readable tab size (opinionated). */
	tab-size: 4; /* 3 */
}

/*
Sections
========
*/

:host {
	margin: 0; /* Remove the margin in all browsers. */
}

/*
Grouping content
================
*/

/**
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
*/

hr {
	height: 0; /* 1 */
	color: inherit; /* 2 */
}

/*
Text-level semantics
====================
*/

/**
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr[title] {
	text-decoration: underline dotted;
}

/**
Add the correct font weight in Edge and Safari.
*/

b,
strong {
	font-weight: bolder;
}

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
	font-family:
		ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace; /* 1 */
	font-size: 1em; /* 2 */
}

/**
Add the correct font size in all browsers.
*/

small {
	font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

/*
Tabular data
============
*/

/**
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

table {
	text-indent: 0; /* 1 */
	border-color: inherit; /* 2 */
}

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 1 */
	line-height: 1.15; /* 1 */
	margin: 0; /* 2 */
}

/**
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
	text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
}

/**
Remove the inner border and padding in Firefox.
*/

::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

/**
Restore the focus styles unset by the previous rule.
*/

:-moz-focusring {
	outline: 1px dotted ButtonText;
}

/**
Remove the additional ':invalid' styles in Firefox.
See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/

:-moz-ui-invalid {
	box-shadow: none;
}

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
	padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
	vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
	-webkit-appearance: textfield; /* 1 */
	outline-offset: -2px; /* 2 */
}

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
	-webkit-appearance: none;
}

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
	-webkit-appearance: button; /* 1 */
	font: inherit; /* 2 */
}

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

summary {
	display: list-item;
}
`);function eX(){return eZ()}var e$=eI("<div class=divider><div>");function e0(){var e,t;return(t=(e=e$()).firstChild).style.setProperty("height","100%"),t.style.setProperty("width","1px"),t.style.setProperty("background","#dcdcdc"),e}var e1=eI("<div>");function e2(e){var t;return(t=e1()).style.setProperty("padding","24px"),t.style.setProperty("height","100%"),ek(t,()=>e.children),t}var e3=eI("<div>");function e6(e){var t;return(t=e3()).style.setProperty("display","flex"),t.style.setProperty("flex-direction","column"),t.style.setProperty("justify-content","center"),t.style.setProperty("align-items","center"),t.style.setProperty("height","100%"),ek(t,()=>e.children),t}var e4=eI("<div><div>\uD83E\uDD14</div><div>What is a wallet?</div><p>Wallets let you send, receive, store and display digital assets like Bitcoin, Stacks, Ordinals & NFTs.</p><p>Explore Bitcoin apps by connecting your wallet.");function e5(){var e,t,r,n,i;return i=(n=(r=(t=(e=e4()).firstChild).nextSibling).nextSibling).nextSibling,e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","column"),e.style.setProperty("row-gap","8px"),e.style.setProperty("justify-content","center"),e.style.setProperty("align-items","center"),t.style.setProperty("font-size","50px"),t.style.setProperty("line-height","140%"),V(e=>(e.e=eP(r,eK,e.e),e.t=eP(n,eG,e.t),e.a=eP(i,eG,e.a),e),{e:void 0,t:void 0,a:void 0}),e}function e8(e){var t;let r=null==(t=e.installPrompt)?void 0:t.url;if(!r){console.error("No install prompt URL found for",e.id);return}window.open(r,"_blank")}var e7=eI(`<style>
          .install-prompt-button:focus-visible {
            outline: 2px solid #181818;
            outline-offset: 2px;
          }
        `),e9=eI("<div><img><h1>Don't have <!>?</h1><p>Download it on the Chrome web store.</p><div class=install-prompt-button role=button tabindex=0>Get");function te(e){var t,r,n,i,o,s;return[e7(),((i=(n=(r=(t=e9()).firstChild).nextSibling).firstChild.nextSibling).nextSibling,s=(o=n.nextSibling).nextSibling,t.style.setProperty("display","flex"),t.style.setProperty("flex-direction","column"),t.style.setProperty("align-items","center"),t.style.setProperty("row-gap","16px"),r.style.setProperty("border-radius","12px"),r.style.setProperty("height","64px"),r.style.setProperty("width","64px"),r.style.setProperty("object-fit","cover"),ek(n,()=>e.option.name,i),s.addEventListener("click",function(){e8(e.option)}),s.addEventListener("keydown",function(t){("Enter"===t.key||" "===t.key)&&e8(e.option)}),V(t=>{var i=e.option.icon,a=e.option.name,u={...eK,"text-align":"center"},f={...eV,cursor:"pointer","border-radius":"12px",background:"#181818",color:"white",padding:"12px 16px"};return i!==t.e&&eT(r,"src",t.e=i),a!==t.t&&eT(r,"alt",t.t=a),t.a=eP(n,u,t.a),t.o=eP(o,eG,t.o),t.i=eP(s,f,t.i),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),t)]}var tt=eI('<svg width=20 height=20 viewBox="0 0 20 20"xmlns=http://www.w3.org/2000/svg><circle cx=10 cy=10 r=9.05 stroke=black stroke-width=1.9 fill=none stroke-dasharray="42.65 14.22"stroke-dashoffset=0><animateTransform attributeName=transform attributeType=XML type=rotate from="0 10 10"to="360 10 10"dur=0.75s repeatCount=indefinite>'),tr=eI("<div>");let tn=()=>tt();function ti(){var e;return(e=tr()).style.setProperty("display","flex"),e.style.setProperty("justify-content","center"),e.style.setProperty("align-items","center"),e.style.setProperty("height","100%"),e.style.setProperty("animation","spin 1s linear infinite"),ek(e,ef(tn,{})),e}var to=eI("<div><img><h1>Opening <!>...</h1><p>Confirm the operation in ");function ts(e){var t,r,n,i,o;return(i=(n=(r=(t=to()).firstChild).nextSibling).firstChild.nextSibling).nextSibling,(o=n.nextSibling).firstChild,t.style.setProperty("display","flex"),t.style.setProperty("flex-direction","column"),t.style.setProperty("align-items","center"),t.style.setProperty("row-gap","16px"),r.style.setProperty("border-radius","12px"),r.style.setProperty("height","64px"),r.style.setProperty("width","64px"),r.style.setProperty("object-fit","cover"),ek(n,()=>e.option.name,i),ek(o,()=>e.option.name,null),ek(t,ef(ti,{}),null),V(t=>{var i=e.option.icon,s=e.option.name,a={...eK,"text-align":"center"};return i!==t.e&&eT(r,"src",t.e=i),s!==t.t&&eT(r,"alt",t.t=s),t.a=eP(n,a,t.a),t.o=eP(o,eG,t.o),t},{e:void 0,t:void 0,a:void 0,o:void 0}),t}var ta=eI("<div><div tabindex=0><img><div>");function tu(e){var t,r,n,i;function o(){e.onProviderSelected(e.id)}let s=q(()=>ty(e)?"button":"link"),[a,u]=G(!1),[f,l]=G(!1),c=()=>a()||f();return i=(n=(r=(t=ta()).firstChild).firstChild).nextSibling,t.style.setProperty("aspect-ratio","1 / 1"),t.style.setProperty("overflow","hidden"),r.style.setProperty("display","flex"),r.style.setProperty("flex-direction","column"),r.style.setProperty("row-gap","12px"),r.style.setProperty("align-items","center"),r.style.setProperty("cursor","pointer"),r.style.setProperty("outline","none"),r.style.setProperty("padding-top","10px"),r.addEventListener("click",o),r.addEventListener("keydown",function(e){if("link"===s()){"Enter"===e.key&&o();return}if("button"===s()){("Enter"===e.key||" "===e.key)&&o();return}}),r.addEventListener("mouseenter",()=>u(!0)),r.addEventListener("mouseleave",()=>u(!1)),r.addEventListener("focus",()=>l(!0)),r.addEventListener("blur",()=>l(!1)),n.style.setProperty("width","56px"),n.style.setProperty("height","56px"),n.style.setProperty("object-fit","cover"),n.style.setProperty("border-radius","12px"),ek(i,()=>e.name),V(t=>{var o=s(),a=c()?"6px solid rgba(24, 24, 24, 0.20)":"none",u=e.icon,f=e.name,l={...eG,color:c()?"rgba(24, 24, 24, 0.60)":void 0,"text-align":"center"};return o!==t.e&&eT(r,"role",t.e=o),a!==t.t&&(null!=(t.t=a)?n.style.setProperty("outline",a):n.style.removeProperty("outline")),u!==t.a&&eT(n,"src",t.a=u),f!==t.o&&eT(n,"alt",t.o=f),t.i=eP(i,l,t.i),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),t}var tf=eI('<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&amp;display=swap"rel=stylesheet>'),tl=eI("<div class=side-panel>"),tc=eI('<div><div></div><div><div class=card-width-container><div class=card-height-container><div class=card><div class=card-grid><div class=main-panel><div></div><div></div><div class=wallets-grid-container data-desc="wallet grid container for padding"><div class=wallets-grid data-desc="wallet grid container">'),th=eI(`<div><style>
        @keyframes wallet-selector-fade-in {
          from {opacity: 0; transform: translateY(40px);}
          to {opacity: 1; transform: translateY(0);}
        }

        @keyframes wallet-selector-fade-out {
          from {opacity: 1; transform: translateY(0);}
          to {opacity: 0; transform: translateY(40px);}
        }
        @keyframes wallet-selector-blur-in {
          from {opacity: 0; backdrop-filter: blur(0px);}
          to {opacity: 1; backdrop-filter: blur(10px);}
        }

        @keyframes wallet-selector-blur-out {
          from {opacity: 1; backdrop-filter: blur(10px);}
          to {opacity: 0; backdrop-filter: blur(0px);}
        }
      </style><style>`);let td="24px";function tp(){var e,t,r,n;let[i,o]=G(),[s,a]=G(),[u,f]=G(),[l,c]=G(!1),[h,d]=G(!1),[p,g]=G([]),[y,m]=G({type:"none"}),b=()=>p().some(e=>!ty(e)),v=()=>c(!1);function w(){let e=new CustomEvent(ej,{bubbles:!0,composed:!0});window.dispatchEvent(e),v()}function E(e){"Escape"===e.key&&w()}function A(e){let t=p().find(t=>t.id===e);if(ty(t)){!function(){let e=i(),t=u();return!(!e||!t||!e.contains(t)||"none"===getComputedStyle(t).display)}()?e8(t):m({type:"install-wallet-prompt",option:t});return}let r=new CustomEvent(eD,{detail:e,bubbles:!0,composed:!0});window.dispatchEvent(r)}function _(e){et(()=>{c(!0),d(!0);let t=e.detail.options;g(t),t.some(e=>!e.installPrompt)?m({type:"explainer"}):m({type:"none"})},!1)}function S(){c(!1)}W(()=>{if(l()){window.addEventListener("keydown",E);return}window.removeEventListener("keydown",E)});let M=()=>{l()||d(!1)};function I(e){let t=e.detail;m({type:"opening-wallet",option:p().find(e=>e.id===t)})}function T(){m({type:"explainer"})}return e=()=>{window.addEventListener(eU,_),window.addEventListener(eF,S),window.addEventListener(ez,I),window.addEventListener(eH,T),document.head.appendChild(tf())},W(()=>Y(e)),Q(()=>{window.removeEventListener(eU,_),window.removeEventListener(eF,S)}),n=(r=(t=th()).firstChild).nextSibling,eO(o,t),t.style.setProperty("inset","0"),t.addEventListener("click",function(e){let t=e.target;if(!t)return;let r=s();r&&(r.contains(t)||w())}),t.addEventListener("keydown",()=>{console.log("Inside root keydown")}),ek(t,ef(eX,{}),r),ek(n,()=>`
        .card-width-container {
          container: card-width-container / inline-size;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 740px;
        }

        .card-height-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          height: 100%;
          width: 100%;
        }

        .card {
          min-height: 340px;
          max-height: calc(100vh - 8rem);
          width: 100%;
          border-top-left-radius: ${td};
          border-top-right-radius: ${td};

          background: rgb(196, 177, 217);
          overflow: hidden;

          display: flex;
          flex-direction: column;

          position: "relative"; /* For the close button */
          background-color: #ffffff;
          display: ${h()?"block":"none"};

          box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.25);
          animation: ${l()?"wallet-selector-fade-in 0.4s cubic-bezier(.05, .7, .1, 1) forwards":"wallet-selector-fade-out 0.2s cubic-bezier(.3, 0, .8, .15) forwards"};
        }

        .card-grid {
          flex-grow: 1;
          height: 100%;
          
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas: "mainPanel";
        }

        .main-panel {
          height: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          grid-area: mainPanel;
        }

        .wallets-grid-container {
          overflow: auto;
          flex-grow: 1;
        }

        .wallets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          align-content: start;

          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 40px;
        }

        .divider {
          display: none;
          grid-area: divider;
        }

        .side-panel {
          display: none;
          grid-area: sidePanel;
        }

        @container card-width-container (width > 400px) {
          .card-height-container {
            justify-content: center;
          }

          .card {
            max-width: calc(100vw - 2rem);
            max-height: 460px;
            ${b()?"":"width: 360px;"}
            border-bottom-left-radius: ${td};
            border-bottom-right-radius: ${td};
          }

          .card-grid {
            grid-template-columns: ${b()?"5fr auto 4fr":"1fr"};
            grid-template-areas: ${b()?'"mainPanel divider sidePanel"':'"mainPanel"'};
          }

          .divider {
            display: block;
          }

          .side-panel {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
      `),ek(t,ef(ey,{get when(){return h()},get children(){var P=tc(),O=P.firstChild,k=O.nextSibling,x=k.firstChild.firstChild.firstChild,N=x.firstChild,C=N.firstChild.firstChild,L=C.nextSibling,B=L.nextSibling.firstChild;return P.style.setProperty("position","fixed"),P.style.setProperty("inset","0"),O.style.setProperty("background-color","#FFFFFF80"),O.style.setProperty("position","absolute"),O.style.setProperty("inset","0"),k.style.setProperty("display","flex"),k.style.setProperty("justify-content","center"),k.style.setProperty("align-items","center"),k.style.setProperty("height","100%"),eO(a,x),x.addEventListener("animationend",M),ek(C,()=>b()?"Choose wallet to connect":"Don't have a wallet?"),ek(L,()=>b()?"Start by selecting with one of the wallets below and confirming the connection.":"Start by installing one of the wallets below."),ek(B,ef(eg,{get each(){return p()},children:e=>ef(tu,function(...e){let t=!1;for(let r=0;r<e.length;r++){let n=e[r];t=t||!!n&&R in n,e[r]="function"==typeof n?(t=!0,q(n)):n}if(t)return new Proxy({get(t){for(let r=e.length-1;r>=0;r--){let n=eh(e[r])[t];if(void 0!==n)return n}},has(t){for(let r=e.length-1;r>=0;r--)if(t in eh(e[r]))return!0;return!1},keys(){let t=[];for(let r=0;r<e.length;r++)t.push(...Object.keys(eh(e[r])));return[...new Set(t)]}},ec);let r={},n=Object.create(null);for(let t=e.length-1;t>=0;t--){let i=e[t];if(!i)continue;let o=Object.getOwnPropertyNames(i);for(let e=o.length-1;e>=0;e--){let t=o[e];if("__proto__"===t||"constructor"===t)continue;let s=Object.getOwnPropertyDescriptor(i,t);if(n[t]){let e=r[t];e&&(s.get?e.push(s.get.bind(i)):void 0!==s.value&&e.push(()=>s.value))}else n[t]=s.get?{enumerable:!0,configurable:!0,get:ed.bind(r[t]=[s.get.bind(i)])}:void 0!==s.value?s:void 0}}let i={},o=Object.keys(n);for(let e=o.length-1;e>=0;e--){let t=o[e],r=n[t];r&&r.get?Object.defineProperty(i,t,r):i[t]=r?r.value:void 0}return i}(e,{onProviderSelected:A}))})),ek(N,ef(ey,{get when(){return"none"!==y().type},get children(){return ef(e0,{})}}),null),ek(N,ef(ey,{get when(){return"none"!==y().type},get children(){var D=tl();return eO(f,D),ek(D,ef(e2,{get children(){return ef(e6,{get children(){return ef(em,{fallback:null,get children(){return[ef(eb,{get when(){return"install-wallet-prompt"===y().type},get children(){return ef(te,{get option(){return y().option}})}}),ef(eb,{get when(){return"explainer"===y().type},get children(){return ef(e5,{})}}),ef(eb,{get when(){return"opening-wallet"===y().type},get children(){return ef(ts,{get option(){return y().option}})}})]}})}})}})),D}}),null),ek(x,ef(eJ,{onClose:w}),null),V(e=>{var t=l()?"wallet-selector-blur-in 0.2s cubic-bezier(.05, .7, .1, 1) forwards":"wallet-selector-blur-out 0.2s cubic-bezier(.3, 0, .8, .15) forwards",r={...eK,margin:"0","padding-top":"24px","padding-left":"24px","padding-right":"24px","padding-bottom":"16px"},n={...eG,"padding-left":"24px","padding-right":"24px","padding-bottom":"30px"};return t!==e.e&&(null!=(e.e=t)?O.style.setProperty("animation",t):O.style.removeProperty("animation")),e.t=eP(C,r,e.t),e.a=eP(L,n,e.a),e},{e:void 0,t:void 0,a:void 0}),P}}),null),V(()=>(h(),t.style.setProperty("position",h()?"fixed":"static"))),t}let tg="sats-connect-wallet-provider-selector";function ty(e){return!!e.installPrompt}var tm=r(6244),tb=r(3493);function tv(e){let t=function(e){let t=tb.getParser(window.navigator.userAgent);return t.satisfies({desktop:{chrome:">=1"}})?e.chromeWebStoreUrl:t.satisfies({desktop:{firefox:">=1"}})?e.mozillaAddOnsUrl:t.satisfies({android:{chrome:">=1",safari:">=1"}})?e.googlePlayStoreUrl:t.satisfies({ios:{chrome:">=1",safari:">=1"}})?e.iOSAppStoreUrl:void 0}(e);return t?{installPrompt:{url:t}}:(console.error(`[makeDefaultConfig]: No app store URL found for ${e.name}.`),{})}var tw=new class{providerId;defaultAdapters=O;createCustomConfig;isProviderSet(){return!!this.providerId}setCreateCustomConfig(e){this.createCustomConfig=e}async selectProvider(){let e=function(){let e=[...(window.btc_providers||(window.btc_providers=[]),window.btc_providers)];for(let t in f(P,["xverse"]))e.push(P[t]);return e.map(e=>({...e,isInstalled:!!w(e.id)}))}();if(0===e.length)throw Error("No wallets detected, may want to prompt user to install a wallet.");let t=this.createCustomConfig?this.createCustomConfig(e):function(e){let t={options:[]},r=e.find(e=>e.id===tm.Q0.xverse.id);if(t.options.push(r||{...tm.Q0.xverse,...tv(tm.Q0.xverse)}),void 0!==window.ReactNativeWebView)return t;let n=e.find(e=>"unisat"===e.id);return n&&n.isInstalled&&t.options.push(n),t.options.concat(e.filter(e=>e.id!==tm.Q0.xverse.id&&"unisat"!==e.id).map(e=>({...e,...tv(e)}))),t}(e),r=await new Promise((e,r)=>{if(!document.getElementById(tg)){r("Failed to detect the wallet provider selector.");return}function n(){window.removeEventListener(eD,i),window.removeEventListener(ej,o)}function i(t){e(t.detail),n()}function o(){r(),n()}window.addEventListener(eD,i),window.addEventListener(ej,o);let s=new CustomEvent(eU,{detail:t});window.dispatchEvent(s)});this.providerId=r}async disconnect(){this.providerId=void 0,localStorage.removeItem("sats-connect_defaultProvider")}async request(e,t){!function(){if(customElements.get(tg))return;!function(e,t,r){var i;2==arguments.length&&(r=t,t={}),(function(e,t={},r={}){let{BaseElement:i=HTMLElement,extension:o}=r;return r=>{if(!e)throw Error("tag is required to register a Component");let s=customElements.get(e);return s?s.prototype.Component=r:((s=function(e,t){let r=Object.keys(t);return class extends e{static get observedAttributes(){return r.map(e=>t[e].attribute)}constructor(){super(),this.__initialized=!1,this.__released=!1,this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props={}}connectedCallback(){var e;if(this.__initialized)return;this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props=function(e,t){let r=Object.keys(t).reduce((e,r)=>{var n;let i=t[r];return e[r]=Object.assign({},i),!N(i.value)||(n=i.value,"[object Function]"===Object.prototype.toString.call(n))||Array.isArray(i.value)||(e[r].value=Object.assign({},i.value)),Array.isArray(i.value)&&(e[r].value=i.value.slice(0)),e},{});return Object.keys(t).forEach(t=>{let n=r[t],i=e.getAttribute(n.attribute),o=e[t];i&&(n.value=n.parse?k(i):i),null!=o&&(n.value=Array.isArray(o)?o.slice(0):o),n.reflect&&x(e,n.attribute,n.value),Object.defineProperty(e,t,{get:()=>n.value,set(e){let r=n.value;n.value=e,n.reflect&&x(this,n.attribute,n.value);for(let n=0,i=this.__propertyChangedCallbacks.length;n<i;n++)this.__propertyChangedCallbacks[n](t,e,r)},enumerable:!0,configurable:!0})}),r}(this,t);let r=Object.keys(e=this.props).reduce((t,r)=>(t[r]=e[r].value,t),{}),i=this.Component,o=n;try{n=this,this.__initialized=!0,"function"==typeof i&&0===i.toString().indexOf("class")?new i(r,{element:this}):i(r,{element:this})}finally{n=o}}async disconnectedCallback(){if(await Promise.resolve(),this.isConnected)return;this.__propertyChangedCallbacks.length=0;let e=null;for(;e=this.__releaseCallbacks.pop();)e(this);delete this.__initialized,this.__released=!0}attributeChangedCallback(e,r,n){this.__initialized&&!this.__updating[e]&&(e=this.lookupProp(e))in t&&(null!=n||this[e])&&(this[e]=t[e].parse?k(n):n)}lookupProp(e){if(t)return r.find(r=>e===r||e===t[r].attribute)}get renderRoot(){return this.shadowRoot||this.attachShadow({mode:"open"})}addReleaseCallback(e){this.__releaseCallbacks.push(e)}addPropertyChangedCallback(e){this.__propertyChangedCallbacks.push(e)}}}(i,t?Object.keys(t).reduce((e,r)=>{let n=t[r];return e[r]=N(n)&&"value"in n?n:{value:n},e[r].attribute||(e[r].attribute=r.replace(/\.?([A-Z]+)/g,(e,t)=>"-"+t.toLowerCase()).replace("_","-").replace(/^-/,"")),e[r].parse="parse"in e[r]?e[r].parse:"string"!=typeof e[r].value,e},{}):{})).prototype.Component=r,s.prototype.registeredTag=e,customElements.define(e,s,o)),s}})(e,t)((i=r,(e,t)=>{let{element:r}=t;return K(n=>{let o=function(e){let t=Object.keys(e),r={};for(let n=0;n<t.length;n++){let[i,o]=G(e[t[n]]);Object.defineProperty(r,t[n],{get:i,set(e){o(()=>e)}})}return r}(e);r.addPropertyChangedCallback((e,t)=>o[e]=t),r.addReleaseCallback(()=>{r.renderRoot.textContent="",n()});let s=i(o,t);return ek(r.renderRoot,s)},function(e){if(e.assignedSlot&&e.assignedSlot._$owner)return e.assignedSlot._$owner;let t=e.parentNode;for(;t&&!t._$owner&&!(t.assignedSlot&&t.assignedSlot._$owner);)t=t.parentNode;return t&&t.assignedSlot?t.assignedSlot._$owner:e._$owner}(r))}))}(tg,tp);let e=document.createElement(tg);e.id=tg,e.style.position="relative",e.style.zIndex="999999",document.body.appendChild(e)}();let r=localStorage.getItem("sats-connect_defaultProvider");if(!this.isProviderSet()){if(r)this.providerId=r;else try{await this.selectProvider()}catch{return{status:"error",error:{code:d.INTERNAL_ERROR,message:"Failed to select the provider. User may have cancelled the selection prompt."}}}}let i=this.defaultAdapters[this.providerId];!function(e){let t=new CustomEvent(ez,{detail:e});window.dispatchEvent(t)}(this.providerId);let o=i?await new i().request(e,t):await new T(this.providerId).request(e,t);if(!function(){let e=new CustomEvent(eH);window.dispatchEvent(e)}(),o?.status==="error"&&o.error?.code===d.USER_REJECTION)r||(this.providerId=void 0);else{var s;s=this.providerId,localStorage.setItem("sats-connect_defaultProvider",s)}return(!function(){let e=new CustomEvent(eF);window.dispatchEvent(e)}(),o)?o:{status:"error",error:{code:d.INTERNAL_ERROR,message:"Wallet Error processing the request"}}}}},18:function(e){"use strict";e.exports=JSON.parse('{"COMPRESSED_TYPE_INVALID":"compressed should be a boolean","EC_PRIVATE_KEY_TYPE_INVALID":"private key should be a Buffer","EC_PRIVATE_KEY_LENGTH_INVALID":"private key length is invalid","EC_PRIVATE_KEY_RANGE_INVALID":"private key range is invalid","EC_PRIVATE_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting private key is invalid","EC_PRIVATE_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PRIVATE_KEY_EXPORT_DER_FAIL":"couldn\'t export to DER format","EC_PRIVATE_KEY_IMPORT_DER_FAIL":"couldn\'t import from DER format","EC_PUBLIC_KEYS_TYPE_INVALID":"public keys should be an Array","EC_PUBLIC_KEYS_LENGTH_INVALID":"public keys Array should have at least 1 element","EC_PUBLIC_KEY_TYPE_INVALID":"public key should be a Buffer","EC_PUBLIC_KEY_LENGTH_INVALID":"public key length is invalid","EC_PUBLIC_KEY_PARSE_FAIL":"the public key could not be parsed or is invalid","EC_PUBLIC_KEY_CREATE_FAIL":"private was invalid, try again","EC_PUBLIC_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting public key is invalid","EC_PUBLIC_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PUBLIC_KEY_COMBINE_FAIL":"the sum of the public keys is not valid","ECDH_FAIL":"scalar was invalid (zero or overflow)","ECDSA_SIGNATURE_TYPE_INVALID":"signature should be a Buffer","ECDSA_SIGNATURE_LENGTH_INVALID":"signature length is invalid","ECDSA_SIGNATURE_PARSE_FAIL":"couldn\'t parse signature","ECDSA_SIGNATURE_PARSE_DER_FAIL":"couldn\'t parse DER signature","ECDSA_SIGNATURE_SERIALIZE_DER_FAIL":"couldn\'t serialize signature to DER format","ECDSA_SIGN_FAIL":"nonce generation function failed or private key is invalid","ECDSA_RECOVER_FAIL":"couldn\'t recover public key from signature","MSG32_TYPE_INVALID":"message should be a Buffer","MSG32_LENGTH_INVALID":"message length is invalid","OPTIONS_TYPE_INVALID":"options should be an Object","OPTIONS_DATA_TYPE_INVALID":"options.data should be a Buffer","OPTIONS_DATA_LENGTH_INVALID":"options.data length is invalid","OPTIONS_NONCEFN_TYPE_INVALID":"options.noncefn should be a Function","RECOVERY_ID_TYPE_INVALID":"recovery should be a Number","RECOVERY_ID_VALUE_INVALID":"recovery should have value between -1 and 4","TWEAK_TYPE_INVALID":"tweak should be a Buffer","TWEAK_LENGTH_INVALID":"tweak length is invalid"}')},8274:function(e){"use strict";e.exports={i8:"6.6.1"}}}]);
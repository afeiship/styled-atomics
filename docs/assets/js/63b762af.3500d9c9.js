(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[707],{876:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},146:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7560),o=r(8283),i=(r(2784),r(876)),a=["components"],s={id:"position",title:"position",sidebar_label:"position",slug:"/generators/position"},c="position",u={unversionedId:"generators/position",id:"generators/position",isDocsHomePage:!1,title:"position",description:"\u5bf9\u5e94 CSS \u7684 position.",source:"@site/docs/generators/position.mdx",sourceDirName:"generators",slug:"/generators/position",permalink:"/styled-atomics/docs/generators/position",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/generators/position.mdx",version:"current",frontMatter:{id:"position",title:"position",sidebar_label:"position",slug:"/generators/position"},sidebar:"someSidebar",previous:{title:"padding",permalink:"/styled-atomics/docs/generators/padding"},next:{title:"raw",permalink:"/styled-atomics/docs/generators/raw"}},p=[{value:"usage",id:"usage",children:[]}],l={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"position"},"position"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5bf9\u5e94 CSS \u7684 position.")),(0,i.kt)("h2",{id:"usage"},"usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"<View debug debug_ relative abs_ wh={800} auto>\n  <View t={0}>T0</View>\n  <View r={0}>R0</View>\n  <View b={0}>B0</View>\n  <View l={100}>left: 100</View>\n  <View trbl={200} bg={'#eee'}>trbl: 300</View>\n</View>\n")))}f.isMDXComponent=!0}}]);
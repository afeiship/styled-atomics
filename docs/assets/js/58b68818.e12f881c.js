(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2597],{876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,b=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5737:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(7560),i=n(8283),o=(n(2784),n(876)),a=["components"],c={id:"z-index",title:"z-index",sidebar_label:"z-index",slug:"/generators/z-index"},s="z-index",l={unversionedId:"generators/z-index",id:"generators/z-index",isDocsHomePage:!1,title:"z-index",description:"\u76d2\u5b50\u7684z-index.",source:"@site/docs/generators/z-index.mdx",sourceDirName:"generators",slug:"/generators/z-index",permalink:"/styled-atomics/docs/generators/z-index",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/generators/z-index.mdx",version:"current",frontMatter:{id:"z-index",title:"z-index",sidebar_label:"z-index",slug:"/generators/z-index"},sidebar:"someSidebar",previous:{title:"width",permalink:"/styled-atomics/docs/generators/width"},next:{title:"align",permalink:"/styled-atomics/docs/shortys/align"}},u=[{value:"usage",id:"usage",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"z-index"},"z-index"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u76d2\u5b50\u7684z-index.")),(0,o.kt)("h2",{id:"usage"},"usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"<View p_={10} relative debug_ wh={300}>\n    <View l={10} abs wh={100} z={1} bg={'#eee'}>box1</View>\n    <View t={40} l={60} abs wh={100} z={2} bg={'lightgreen'}>box2</View>\n    <View t={90} l={90} abs wh={100} z={3} bg={'lightblue'}>box3</View>\n</View>\n")))}p.isMDXComponent=!0}}]);
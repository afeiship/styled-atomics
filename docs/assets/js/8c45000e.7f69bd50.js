(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2751],{876:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,g=p["".concat(u,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2499:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(7560),a=r(8283),i=(r(2784),r(876)),o=["components"],l={id:"margin",title:"margin",sidebar_label:"margin",slug:"/shortys/margin"},u="margin",s={unversionedId:"shortys/margin",id:"shortys/margin",isDocsHomePage:!1,title:"margin",description:"\u5bf9\u5e94 css \u7684 margin \u5c5e\u6027\u76f8\u5173.",source:"@site/docs/shortys/margin.mdx",sourceDirName:"shortys",slug:"/shortys/margin",permalink:"/styled-atomics/docs/shortys/margin",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/shortys/margin.mdx",version:"current",frontMatter:{id:"margin",title:"margin",sidebar_label:"margin",slug:"/shortys/margin"},sidebar:"someSidebar",previous:{title:"height",permalink:"/styled-atomics/docs/shortys/height"},next:{title:"overflow",permalink:"/styled-atomics/docs/shortys/overflow"}},c=[{value:"usage",id:"usage",children:[]}],m={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"margin"},"margin"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5bf9\u5e94 css \u7684 margin \u5c5e\u6027\u76f8\u5173.")),(0,i.kt)("h2",{id:"usage"},"usage"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5f53\u524d\u76d2\u5b50/\u5b50\u7ea7\u6dfb\u52a0\u80cc\u666f")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"auto"),(0,i.kt)("li",{parentName:"ul"},"maa"),(0,i.kt)("li",{parentName:"ul"},"m0a"),(0,i.kt)("li",{parentName:"ul"},"m0"),(0,i.kt)("li",{parentName:"ul"},"mt0"),(0,i.kt)("li",{parentName:"ul"},"mr0"),(0,i.kt)("li",{parentName:"ul"},"mb0"),(0,i.kt)("li",{parentName:"ul"},"ml0"),(0,i.kt)("li",{parentName:"ul"},"mt_"),(0,i.kt)("li",{parentName:"ul"},"mr_"),(0,i.kt)("li",{parentName:"ul"},"mb_"),(0,i.kt)("li",{parentName:"ul"},"ml_")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"<View debug_ spy={20}>\n     <View w={200} auto>\n        Width + margin-left/right: auto; \u5b9e\u73b0\u5c45\u4e2d\n     </View>\n     <View w={200} m0a>\n        Width + m0a; \u5b9e\u73b0\u5c45\u4e2d, \u4e0e\u4e0a\u9762\u4e0d\u540c\u7684\u662f\uff1a margin: 0 auto;\n     </View>\n</View>\n")))}p.isMDXComponent=!0}}]);
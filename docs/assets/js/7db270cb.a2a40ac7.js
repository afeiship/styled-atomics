(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6092],{876:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(2784);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,g=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5172:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=t(7560),o=t(8283),a=(t(2784),t(876)),i=["components"],l={id:"overflow",title:"overflow",sidebar_label:"overflow",slug:"/generators/overflow"},c="overflow",s={unversionedId:"generators/overflow",id:"generators/overflow",isDocsHomePage:!1,title:"overflow",description:"\u5bf9\u5e94 CSS \u7684 overflow.",source:"@site/docs/generators/overflow.mdx",sourceDirName:"generators",slug:"/generators/overflow",permalink:"/styled-atomics/docs/generators/overflow",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/generators/overflow.mdx",version:"current",frontMatter:{id:"overflow",title:"overflow",sidebar_label:"overflow",slug:"/generators/overflow"},sidebar:"someSidebar",previous:{title:"opacity",permalink:"/styled-atomics/docs/generators/opacity"},next:{title:"padding",permalink:"/styled-atomics/docs/generators/padding"}},u=[{value:"usage",id:"usage",children:[]}],f={toc:u};function p(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overflow"},"overflow"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5bf9\u5e94 CSS \u7684 overflow.")),(0,a.kt)("h2",{id:"usage"},"usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<View debug spy={20}>\n    <View ovy="scroll" wh={300} auto debug>\n        \u5411\u5f80\u4e00\u79cd\u56de\u5f52\u81ea\u7136\u7684\u751f\u6d3b\uff0c\u4e8e\u5fc3\u95f4\u4fee\u7bf1\u79cd\u83ca\uff0c\u5728\u4e00\u5c71\u4e00\u6c34\u95f4\u9886\u609f\u60a0\u5e7d\u7985\u610f\uff0c\u6ecb\u517b\u7075\u9b42\uff0c\u9759\u5c45\u5e7d\u8c37\uff0c\u6668\u972d\u7f2d\u7ed5\uff0c\u665a\u971e\u8f7b\u821e\uff0c\u5e7d\u7af9\u62d4\u8282\uff0c\u7fe0\u6797\u7ab8\u7aa3\uff0c\u6eaa\u6c34\u6f7a\u6f7a\uff0c\u6cc9\u6c34\u53ee\u549a\uff0c\u8702\u98de\u8776\u821e\uff0c\u9e1f\u8bed\u82b1\u9999\uff0c\u9752\u82d4\u840b\u840b\uff0c\u716e\u4e00\u58f6\u8336\uff0c\u63fd\u4e00\u62b9\u6696\u9633\uff0c\u94fa\u4e00\u5377\u5510\u8bd7\u5b8b\u8bcd\uff0c\u644a\u4e00\u7eb8\u7d20\u7b3a\uff0c\u4e8e\u6587\u5b57\u95f4\u8ffd\u5bfb\u4e00\u4efd\u6de1\u7136\u4f18\u96c5\uff0c\u4e0d\u53bb\u8003\u91cf\u5bf9\u9519\u597d\u574f\uff0c\u4e0d\u53bb\u601d\u5fd6\u662f\u975e\u66f2\u76f4\uff0c\u5b88\u671b\u4e00\u4e2a\u4e0d\u8001\u7684\u4f20\u8bf4\uff0c\u5178\u85cf\u4e00\u4efd\u5f9c\u5f89\u5728\u751f\u547d\u91cc\u7684\u9988\u8d60\uff0c\u9759\u770b\u70df\u706b\u60a0\u60a0\u7ed5\u5c71\u8170\uff0c\u8046\u542c\u96e8\u58f0\u6dc5\u6ca5\u8bc9\u7f20\u7ef5\uff0c\u60a6\u8d4f\u767d\u96ea\u98d8\u98d8\u4efb\u900d\u9065\uff0c\u6e05\u98ce\u6717\u6708\uff0c\u4e91\u5377\u4e91\u8212\u7686\u7f8e\u753b\uff0c\u82b1\u5f00\u82b1\u843d\uff0c\u98ce\u5439\u53f6\u843d\u5c3d\u8bd7\u610f\uff0c\u53ea\u8981\u6709\u7231\uff0c\u4e16\u754c\u5c31\u4e0d\u4f1a\u4e00\u7247\u8352\u51c9\uff0c\u53ea\u8981\u6709\u60c5\uff0c\u6ee1\u773c\u90fd\u662f\u6f4b\u6edf\u6e05\u6ce2\uff0c\u4e00\u8def\u98ce\u5149\u65d6\u65ce\u3002\n    </View>\n    <View ovx="scroll" w={300} ws="nowrap" auto debug>\n        \u6e05\u6668\u9192\u6765\uff0c\u6253\u5f00\u7a97\u5e18\uff0c\u4e00\u62b9\u6175\u61d2\u7684\u9633\u5149\u7167\u8fdb\u6765\uff0c\u6696\u6696\u7684\uff0c\u67d4\u67d4\u7684\uff0c\u65f6\u5149\u77ac\u95f4\u53d8\u5f97\u6e29\u5a49\u9759\u7f8e\uff0c\u6253\u5f00\u97f3\u4e50\uff0c\u6c8f\u4e00\u676f\u82b1\u8336\uff0c\u8eba\u5728\u5e8a\u4e0a\uff0c\u6696\u9633\u6dfc\u6dfc\uff0c\u8336\u9999\u6de1\u6de1\uff0c\u97f3\u4e50\u8885\u8885\uff0c\u95ed\u4e0a\u773c\u775b\uff0c\u5634\u89d2\u8f7b\u8f7b\u4e0a\u626c\uff0c\u7b97\u662f\u5bf9\u7740\u5149\u9634\u7684\u955c\u5b50\uff0c\u548c\u81ea\u5df1\u6492\u4e2a\u5a07\u3002\n    </View>\n    <View ov="hidden" radius={100} wh={200} auto debug>\n        <View as="img" src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg"/>\n    </View>\n</View>\n')))}p.isMDXComponent=!0}}]);
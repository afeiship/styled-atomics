(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2462],{876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(n),h=i,f=g["".concat(c,".").concat(h)]||g[h]||p[h]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},937:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return g}});var r=n(7560),i=n(8283),o=(n(2784),n(876)),a=["components"],l={id:"line-height",title:"line-height",sidebar_label:"line-height",slug:"/generators/line-height"},c="line-height",u={unversionedId:"generators/line-height",id:"generators/line-height",isDocsHomePage:!1,title:"line-height",description:"\u884c\u9ad8\u3002",source:"@site/docs/generators/line-height.mdx",sourceDirName:"generators",slug:"/generators/line-height",permalink:"/styled-atomics/docs/generators/line-height",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/generators/line-height.mdx",version:"current",frontMatter:{id:"line-height",title:"line-height",sidebar_label:"line-height",slug:"/generators/line-height"},sidebar:"someSidebar",previous:{title:"line-clamp",permalink:"/styled-atomics/docs/generators/line-clamp"},next:{title:"margin",permalink:"/styled-atomics/docs/generators/margin"}},s=[{value:"usage",id:"usage",children:[]}],p={toc:s};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"line-height"},"line-height"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u884c\u9ad8\u3002")),(0,o.kt)("h2",{id:"usage"},"usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"<View space={20} y strip>\n  <View debug wp={5} auto>\n    <View lh={2} unitless>\n    \u4eba\u751f\u6ca1\u6709\u9884\u5b9a\u7684\u8f68\u8ff9\uff0c\u4e00\u5207\u90fd\u5728\u4e0d\u786e\u5b9a\u4e2d\u524d\u884c\uff0c\u4f60\u6839\u672c\u5c31\u65e0\u6cd5\u9884\u77e5\u660e\u5929\u4f1a\u662f\u4ec0\u4e48\u6837\uff0c\u597d\u60f3\u628a\u65e5\u5b50\u8fc7\u6210\u8bd7\uff0c\u7231\u4e3a\u4e3b\u9898\uff0c\u5e78\u798f\u4e3a\u80cc\u666f\uff0c\u601d\u8003\u4e3a\u4e3b\u7ebf\uff0c\u5fae\u7b11\u4e3a\u97f5\u811a\uff0c\u65e5\u6708\u661f\u8fb0\uff0c\u82b1\u8349\u6811\u6728\uff0c\u96e8\u971c\u96ea\u9732\u4e3a\u8f7d\u4f53\uff0c\u7ecf\u5386\u548c\u611f\u53d7\u4e3a\u8868\u8fbe\u65b9\u5f0f\uff0c\u60f3\u8c61\u548c\u5e7b\u60f3\u4e3a\u5ef6\u4f38\uff0c\u65f6\u5149\u6e29\u5a49\uff0c\u5c81\u6708\u9759\u597d\uff0c\u8ba9\u751f\u6d3b\u5145\u6ee1\u7f8e\u5999\u65cb\u5f8b\u3002\u81f3\u4e8e\u751f\u6d3b\u4e2d\u51fa\u73b0\u7684\u4e00\u5207\u4e0d\u723d\u5c31\u8ba9\u6c89\u9ed8\u6765\u63a9\u57cb\uff0c\u8ba9\u96e8\u96ea\u53bb\u6d88\u878d\uff0c\u4e0d\u8bba\u600e\u6837\uff0c\u90fd\u4e0d\u80fd\u8ba9\u7075\u9b42\u53d1\u51fa\u60e8\u6de1\u82cd\u767d\u7684\u58f0\u97f3\uff0c\u54ea\u6015\u662f\u5b64\u72ec\u8f7b\u5f71\u8315\u8315\u5b51\u7acb \uff0c\u4e5f\u8981\u64ad\u4e00\u66f2\u68b5\u97f3\uff0c\u5728\u67d4\u548c\u5178\u96c5\uff0c\u6e05\u6f88\u6e5b\u5bc2\uff0c\u660e\u51c0\u6e05\u5e7d\u7684\u97f3\u4e50\u4e2d\uff0c\u628a\u5bc2\u5be5\u5750\u7a7f\uff0c\u628a\u6d51\u6d4a\u9a71\u6563\uff0c\u5728\u5fc3\u95f4\u5f00\u51fa\u4e00\u6735\u83b2\u3002\n        \n    </View>\n  </View>\n\n  <View debug wp={5} auto>\n    <View lh={'100%'} unitless>\n    \u5c11\u5e74\u65f6\uff0c\u60f3\u78b0\u5230\u4e00\u4e2a\u8042\u5c0f\u5029\uff0c\u62fc\u4e86\u6027\u547d\u7231\u4e00\u573a\uff0c\u5929\u4eae\u524d\u5e26\u7740\u5979\u7684\u9b42\u9b44\u8fdc\u8d70\u4ed6\u4e61\u3002\n    \u9752\u5e74\u65f6\uff0c\u60f3\u78b0\u5230\u4e00\u4e2a\u767d\u7d20\u8d1e\uff0c\u5bb6\u5927\u4e1a\u5927\uff0c\u8981\u5565\u6709\u5565\uff0c\u5403\u5b8c\u8f6f\u996d\u4e00\u62b9\u5634\uff0c\u8fd8\u6709\u4eba\u8d1f\u8d23\u628a\u5979\u5173\u8fdb\u96f7\u5cf0\u5854\u3002\n    \u4e2d\u5e74\u65f6\uff0c\u60f3\u8981\u4e00\u4e2a\u7530\u87ba\u59d1\u5a18\uff0c\u6e29\u5a49\u53ef\u4eba\uff0c\u7ea2\u8896\u6dfb\u9999\uff0c\u534a\u591c\u5199\u7d2f\u4e86\uff0c\u8ba9\u5979\u53d8\u56de\u539f\u5f62\uff0c\u52a0\u5e72\u8fa3\u6912\u3001\u82b1\u6912\u3001\u59dc\u3001\u849c\u7247\u7206\u7092\uff0c\u6dcb\u5165\u9999\u6cb9\uff0c\u8d77\u9505\u88c5\u76d8\u3002\n    </View>\n  </View>\n\n  <View lh={40} debug wp={5} auto>\n    \u6e05\u6668\u9192\u6765\uff0c\u6253\u5f00\u7a97\u5e18\uff0c\u4e00\u62b9\u6175\u61d2\u7684\u9633\u5149\u7167\u8fdb\u6765\uff0c\u6696\u6696\u7684\uff0c\u67d4\u67d4\u7684\uff0c\u65f6\u5149\u77ac\u95f4\u53d8\u5f97\u6e29\u5a49\u9759\u7f8e\uff0c\u6253\u5f00\u97f3\u4e50\uff0c\u6c8f\u4e00\u676f\u82b1\u8336\uff0c\u8eba\u5728\u5e8a\u4e0a\uff0c\u6696\u9633\u6dfc\u6dfc\uff0c\u8336\u9999\u6de1\u6de1\uff0c\u97f3\u4e50\u8885\u8885\uff0c\u95ed\u4e0a\u773c\u775b\uff0c\u5634\u89d2\u8f7b\u8f7b\u4e0a\u626c\uff0c\u7b97\u662f\u5bf9\u7740\u5149\u9634\u7684\u955c\u5b50\uff0c\u548c\u81ea\u5df1\u6492\u4e2a\u5a07\u3002\n  </View>\n</View>\n")))}g.isMDXComponent=!0}}]);
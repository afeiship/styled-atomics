(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4896],{876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1846:function(e,t,n){"use strict";var r=n(2784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6770:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(2784),a=n(4253);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6277),o="tabItem_2hXw",s="tabItemActive_2xke";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,d=e.groupId,m=e.className,v=i(),f=v.tabGroupChoices,g=v.setTabGroupChoices,b=(0,r.useState)(a),k=b[0],h=b[1],y=r.Children.toArray(e.children),N=[];if(null!=d){var w=f[d];null!=w&&w!==k&&p.some((function(e){return e.value===w}))&&h(w)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;h(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,a,i,l,o,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case u:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},4253:function(e,t,n){"use strict";var r=(0,n(2784).createContext)(void 0);t.Z=r},5888:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var r=n(7560),a=n(8283),i=(n(2784),n(876)),l=n(6770),o=n(1846),s=["components"],u={id:"responsive-list",title:"responsive-list",sidebar_label:"responsive-list",slug:"/plugins/responsive-list"},c=void 0,p={unversionedId:"plugins/responsive-list",id:"plugins/responsive-list",isDocsHomePage:!1,title:"responsive-list",description:"\u63d2\u4ef6\u540d",source:"@site/docs/plugins/responsive-list.mdx",sourceDirName:"plugins",slug:"/plugins/responsive-list",permalink:"/styled-atomics/docs/plugins/responsive-list",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/plugins/responsive-list.mdx",version:"current",frontMatter:{id:"responsive-list",title:"responsive-list",sidebar_label:"responsive-list",slug:"/plugins/responsive-list"},sidebar:"someSidebar",previous:{title:"radius-strip",permalink:"/styled-atomics/docs/plugins/radius-strip"},next:{title:"scaleable-image",permalink:"/styled-atomics/docs/plugins/scaleable-image"}},d=[{value:"\u63d2\u4ef6\u540d",id:"\u63d2\u4ef6\u540d",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u539f\u7406",id:"\u539f\u7406",children:[]},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[]},{value:"\u6f14\u793a",id:"\u6f14\u793a",children:[]}],m={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u63d2\u4ef6\u540d"},"\u63d2\u4ef6\u540d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-config"},"responsive-list\n")),(0,i.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.kt)(l.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @jswork/styled-plugin-responsive-list\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @jswork/styled-plugin-responsive-list\n")))),(0,i.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"gap"),(0,i.kt)("td",{parentName:"tr",align:null},"numeric"),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"numeric"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2aitem\u7684\u6700\u5c0f\u5bbd\u5ea6")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u7edd\u5bf9\u5c45\u4e2d\u7684\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f\u3002")),(0,i.kt)("h3",{id:"\u539f\u7406"},"\u539f\u7406"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"display: grid;"),(0,i.kt)("li",{parentName:"ol"},"grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));"),(0,i.kt)("li",{parentName:"ol"},"\u9002\u7528\u4e8e\u517c\u5bb9\u6027\u8981\u6c42\u4e0d\u9ad8\u7684\u573a\u666f\uff0c\u5982\u540e\u53f0\u7684list\u5217\u8868")))),(0,i.kt)("h3",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4ec5 X \u65b9\u5411\u5c45\u4e2d")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<View plugin="responsive-list:x">\n  <div style={{width: 200, height: 400}}>\u6211\u662f\u8981\u88ab\u5c45\u4e2d\u7684 element</div>\n</View>\n')),(0,i.kt)("h3",{id:"\u6f14\u793a"},"\u6f14\u793a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<View relative wp={9} auto>\n  <View\n    plugin="responsive-list:150"\n    debug\n    bg="#eee"\n  >\n  {\n    nx.RandomAvatar.gets(28).map((img,index) => {\n      return (<View as="img" w100 key={index} src={img} />)\n    })\n  }\n  </View>\n</View>\n')))}v.isMDXComponent=!0},6277:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);
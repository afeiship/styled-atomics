(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3085],{6663:function(e,t,n){"use strict";n.d(t,{N:function(){return m},Z:function(){return f}});var r=n(8283),a=n(7560),l=n(2784),c=n(6277),i=n(7921),o=n(3241),s="enhancedAnchor_b0Ka",d="h1Heading_Fr2O",u=["id"],m=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,a.Z)({},t,{id:void 0,className:d}),t.children))},f=function(e){return"h1"===e?m:(t=e,function(e){var n,a=e.id,d=(0,r.Z)(e,u),m=(0,o.LU)().navbar.hideOnScroll;return a?l.createElement(t,d,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,c.Z)("anchor",(n={},n[s]=!m,n)),id:a}),d.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,d)});var t}},5432:function(e,t,n){"use strict";var r=n(2784),a=n(1510),l=n(7438),c=n(6663),i={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(l.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(a.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(l.Z,(0,r.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:(0,c.Z)("h1"),h2:(0,c.Z)("h2"),h3:(0,c.Z)("h3"),h4:(0,c.Z)("h4"),h5:(0,c.Z)("h5"),h6:(0,c.Z)("h6")};t.Z=i},9125:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(2784),a=n(6277),l=n(3884),c=n(876),i=n(5432),o=n(9715),s=n(3241),d="mdxPageWrapper_1Rbk";var u=function(e){var t=e.content,n=t.frontMatter,u=t.metadata,m=n.title,f=n.description,h=n.wrapperClassName,v=n.hide_table_of_contents,E=u.permalink;return r.createElement(l.Z,{title:m,description:f,permalink:E,wrapperClassName:null!=h?h:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",d)},r.createElement("div",{className:(0,a.Z)("col",!v&&"col--8")},r.createElement(c.Zo,{components:i.Z},r.createElement(t,null))),!v&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(o.Z,{toc:t.toc})))))}},9715:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2784),a=n(6277);var l=function(e,t,n){var a=(0,r.useState)(void 0),l=a[0],c=a[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var a=0,i=!1,o=document.getElementsByClassName(e);a<o.length&&!i;){var s=o[a],d=s.href,u=decodeURIComponent(d.substring(d.indexOf("#")+1));r.id===u&&(l&&l.classList.remove(t),s.classList.add(t),c(s),i=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},c="tableOfContents_2Tf-",i="table-of-contents__link";function o(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:i,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return l(i,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(c,"thin-scrollbar")},r.createElement(o,{toc:t}))}}}]);
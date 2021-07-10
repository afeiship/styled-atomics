/*! For license information please see f47e1805.255ca21a.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[231],{5664:function(n,t,e){"use strict";var a,r=e(9511),i=e(1793),l=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},o=function(){function n(n){var t=this;this.values=[];var e=n.props.plugin;this.entity=n,this.plugins=(0,r.Z)(e),this.current=this.plugins.find((function(n){var e=t.name===n.name,a=t.aliases.includes(n.name);return(e||a)&&!n.done})),this.current&&Object.assign(this.current,Object.assign(this.defaults,this.current))}return Object.defineProperty(n.prototype,"aliases",{get:function(){return[]},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"name",{get:function(){return"styled-abstract-plugin"},enumerable:!1,configurable:!0}),n.getEntity=function(n){return new this(n).get()},Object.defineProperty(n.prototype,"defaults",{get:function(){return{}},enumerable:!1,configurable:!0}),n.prototype.pipe=function(){this.values=(0,i.default)(a||(a=l([""],[""])))},n.prototype.merge=function(){this.entity.data=this.entity.data.concat(this.values)},n.prototype.get=function(){return this.pipe(),this.merge(),this.current&&(this.current.done=!0),this.entity},n}();t.Z=o},4734:function(n,t,e){!function(n,t,e,a,r,i,l,o,u,d,c,p,s){"use strict";function f(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var m,b,g,h,v,y,_,k,w,x,j,O,T,N,V,P,Z,z,C,A,D,E,M,S,F,q,X,B,I,U,H,L,R,Y,G,J,K,Q,W,$,nn,tn,en,an,rn=f(e),ln=f(a),on=f(r),un=f(i),dn=f(l),cn=f(o),pn=f(u),sn=f(d),fn=f(c),mn=f(p),bn=f(s),gn=["#004FC0","#E01FAD","#FF7100","#137A19","#70AC00","#0070c0","#20C281"],hn=[function(n){var e=n.props,a=n.data,r=e.bg,i=e.bg_,l=e.sub,o=fn.default(m||(m=t.__makeTemplateObject(["\n    ","\n    ","\n  "],["\n    ","\n    ","\n  "])),r&&"background:"+r+";",i&&"> "+l+" { background: "+i+"; }");return n.data=a.concat(o),n},function(n){var e=n.props,a=n.data,r=e.val,i=e.blank,l=e.unit,o=e.unitless?"":l;if(i){var u=fn.default(b||(b=t.__makeTemplateObject(["\n      display: block;\n      font-size: 0;\n      overflow: hidden;\n      clear: both;\n      height: ",";\n    "],["\n      display: block;\n      font-size: 0;\n      overflow: hidden;\n      clear: both;\n      height: ",";\n    "])),r(i)+o);n.data=a.concat(u)}return n},function(n){var e=n.props,a=n.data,r=e.val,i=e.radius,l=e.radius_,o=e.sub,u=e.unit,d=e.unitless?"":u,c=fn.default(g||(g=t.__makeTemplateObject(["\n    ","\n    ","\n  "],["\n    ","\n    ","\n  "])),i&&"border-radius:"+r(i)+d+";",l&&"> "+o+" { border-radius: "+r(l)+d+"; }");return n.data=a.concat(c),n},function(n){var e=n.props,a=n.data,r=e.val,i=e.bdw,l=e.bds,o=e.bdc,u=e.unit,d=e.unitless?"":u,c=fn.default(h||(h=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n  "])),i&&"border-width: "+r(i)+d+";",l&&"border-style: "+l+";",o&&"border-color: "+o+";");return n.data=a.concat(c),n},function(n){var e=n.props,a=n.data,r=e.c,i=e.c_,l=e.sub,o=fn.default(v||(v=t.__makeTemplateObject(["\n    ","\n    ","\n  "],["\n    ","\n    ","\n  "])),r&&"color:"+r+";",i&&"> "+l+" { color: "+i+"}");return n.data=a.concat(o),n},function(n){var e=n.props,a=n.data,r=e.val,i=e.unit,l=e.unitless,o=e.debug,u=l?"":i;if(!o)return n;var d=function(n){var t=mn.default(gn);if(!0===n)return{color:t,width:1};if(!n.includes("@"))return{color:t,width:1};var e=n.split("@"),a=e[0],r=e[1];return{color:a||t,width:parseInt(r)}}(o),c=d.color,p=r(d.width)+u,s=fn.default(y||(y=t.__makeTemplateObject(["\n    border: "," solid ",";\n  "],["\n    border: "," solid ",";\n  "])),p,c);return n.data=a.concat(s),n},function(n){var e=n.props,a=n.data,r=e.flex,i=e.flex_,l=e.sub,o=Number(r),u=fn.default(_||(_=t.__makeTemplateObject(["\n    ","\n    ","\n  "],["\n    ","\n    ","\n  "])),r&&"flex:"+o+";",i&&"> "+l+" { flex: "+i+"; }");return n.data=a.concat(u),n},function(n){var e=n.props,a=n.data,r=e.val,i=e.f,l=e.f_,o=e.sub,u=e.unit,d=e.unitless?"":u,c=fn.default(k||(k=t.__makeTemplateObject(["\n    ","\n    ","\n  "],["\n    ","\n    ","\n  "])),i&&"font-size:"+r(i)+d+";",l&&"> "+o+" { font-size: "+r(l)+d+"}");return n.data=a.concat(c),n},function(n){var e=n.props,a=n.data,r=e.val,i=e.h,l=e.hp,o=e.unit,u=e.unitless?"":o,d=fn.default(w||(w=t.__makeTemplateObject(["\n    ","\n    ","\n  "],["\n    ","\n    ","\n  "])),i&&"height:"+r(i)+u+";",l&&"height:"+10*l+"%;");return n.data=a.concat(d),n},function(n){var e=n.props,a=n.data,r=e.lc;if(r){var i=fn.default(x||(x=t.__makeTemplateObject(["\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: flex;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      ","\n    "],["\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: flex;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      ","\n    "])),r&&"-webkit-line-clamp: "+r+";");n.data=a.concat(i)}return n},function(n){var e=n.props,a=n.data,r=e.lh,i=e.hlh,l=e.unit,o=e.unitless,u=e.val,d=o?"":l,c=fn.default(j||(j=t.__makeTemplateObject(["\n    ","\n    ","\n  "],["\n    ","\n    ","\n  "])),r&&"line-height:"+u(r)+d+";",i&&"line-height:"+u(i)+d+";height:"+u(i)+d+";");return n.data=a.concat(c),n},function(n){var e=n.props,a=n.data,r=e.val,i=e.m,l=e.mt,o=e.mr,u=e.mb,d=e.ml,c=e.mx,p=e.my,s=e.m_,f=e.mt_,m=e.mr_,b=e.mb_,g=e.ml_,h=e.sub,v=e.unit,y=e.unitless?"":v,_=fn.default(O||(O=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n    ","\n    ","\n\n    ","\n    ","\n    ","\n    ","\n    ","\n\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n    ","\n    ","\n\n    ","\n    ","\n    ","\n    ","\n    ","\n\n    ","\n    ","\n  "])),i&&"margin:"+r(i)+y+";",l&&"margin-top:"+r(l)+y+";",o&&"margin-right:"+r(o)+y+";",u&&"margin-bottom:"+r(u)+y+";",d&&"margin-left:"+r(d)+y+";",s&&"> "+h+" { margin: "+r(s)+y+"; }",f&&"> "+h+" { margin-top: "+r(f)+y+"; }",m&&"> "+h+" { margin-right: "+r(m)+y+"; }",b&&"> "+h+" { margin-bottom: "+r(b)+y+"; }",g&&"> "+h+" { margin-left: "+r(g)+y+"; }",c&&"margin-left:"+r(c)+y+"; margin-right:"+r(c)+y+";",p&&"margin-top:"+r(p)+y+"; margin-bottom:"+r(p)+y+";");return n.data=a.concat(_),n},function(n){var e=n.props,a=n.data,r=e.o,i=e.opactiy,l=fn.default(T||(T=t.__makeTemplateObject(["\n    ","\n    ","\n  "],["\n    ","\n    ","\n  "])),i&&"opactiy:"+i+";",void 0!==r&&"opacity:"+r/10+";");return n.data=a.concat(l),n},function(n){var e=n.props,a=n.data,r=e.ov,i=e.ovx,l=e.ovy,o=fn.default(N||(N=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n  "])),r&&"overflow:"+r+";",i&&"overflow-x:"+i+";",l&&"overflow-y:"+l+";");return n.data=a.concat(o),n},function(n){var e=n.props,a=n.data,r=e.val,i=e.p,l=e.pt,o=e.pr,u=e.pb,d=e.pl,c=e.px,p=e.py,s=e.p_,f=e.pt_,m=e.pr_,b=e.pb_,g=e.pl_,h=e.sub,v=e.unit,y=e.unitless?"":v,_=fn.default(V||(V=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n    ","\n    ","\n\n\n    ","\n    ","\n    ","\n    ","\n    ","\n\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n    ","\n    ","\n\n\n    ","\n    ","\n    ","\n    ","\n    ","\n\n    ","\n    ","\n  "])),i&&"padding:"+r(i)+y+";",l&&"padding-top:"+r(l)+y+";",o&&"padding-right:"+r(o)+y+";",u&&"padding-bottop:"+r(u)+y+";",d&&"padding-left:"+r(d)+y+";",s&&"> "+h+" { padding: "+r(s)+y+"; }",f&&"> "+h+" { padding-top: "+r(f)+y+"; }",m&&"> "+h+" { padding-right: "+r(m)+y+"; }",b&&"> "+h+" { padding-bottom: "+r(b)+y+"; }",g&&"> "+h+" { padding-left: "+r(g)+y+"; }",c&&"padding-left:"+r(c)+y+"; padding-right:"+r(c)+y+";",p&&"padding-top:"+r(p)+y+"; padding-bottom:"+r(p)+y+";");return n.data=a.concat(_),n},function(n){var e=n.props,a=n.data,r=e.val,i=e.t,l=e.r,o=e.b,u=e.l,d=e.trbl,c=e.unit,p=e.unitless?"":c,s=fn.default(P||(P=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n    ","\n    ","\n  "])),i&&"top:"+r(i)+p+";",l&&"right:"+r(l)+p+";",o&&"bottom:"+r(o)+p+";",u&&"left:"+r(u)+p+";",d&&function(n){return["top:"+n+";","right:"+n+";","bottom:"+n+";","left:"+n+";"].join("")}(r(d)+p));return n.data=a.concat(s),n},function(n){var e=n.props,a=n.data,r=e.color,i=e.cursor,l=e.background,o=e.width,u=e.height,d=e.opacity,c=e.size,p=e.margin,s=e.padding,f=e.top,m=e.right,b=e.bottom,g=e.left,h=fn.default(Z||(Z=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n  "])),r&&"color:"+r+";",i&&"cursor:"+i+";",l&&"background:"+l+";",u&&"height:"+u+";",o&&"width:"+o+";",p&&"margin:"+p+";",s&&"padding:"+s+";",f&&"top:"+f+";",m&&"right:"+m+";",b&&"bottom:"+b+";",g&&"left:"+g+";",c&&"width:"+c+"; height: "+c+";",d&&"opacity:"+d+";");return n.data=a.concat(h),n},function(n){var e=n.props,a=n.data,r=e.val,i=e.space,l=e.unit,o=e.unitless,u=e.x,d=e.y,c=e.strip,p=o?"":l;if(i){var s=fn.default(z||(z=t.__makeTemplateObject(["\n      ","\n      ","\n      ","\n      ","\n    "],["\n      ","\n      ","\n      ","\n      ","\n    "])),u&&c&&"> * { &:last-child { margin-right:0 } }",d&&c&&"> * { &:last-child { margin-bottom:0 } }",u&&i&&" > * { margin-right: "+r(i)+p+";}",d&&i&&" > * { margin-bottom: "+r(i)+p+";}");n.data=a.concat(s)}return n},function(n){var e=n.props,a=n.data,r=e.val,i=e.wh,l=e.unit,o=e.unitless?"":l,u=fn.default(C||(C=t.__makeTemplateObject(["\n    ","\n  "],["\n    ","\n  "])),i&&"width:"+r(i)+o+"; height: "+r(i)+o+";");return n.data=a.concat(u),n},function(n){var e=n.props,a=n.data,r=e.val,i=e.w,l=e.wp,o=e.w1,u=e.unit,d=e.unitless?"":u,c=fn.default(A||(A=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n  "])),i&&"width:"+r(i)+d+";",l&&"width:"+10*l+"%;",o&&"width:"+100/o+"%;");return n.data=a.concat(c),n},function(n){var e=n.props,a=n.data,r=e.z,i=fn.default(D||(D=t.__makeTemplateObject(["\n    ","\n  "],["\n    ","\n  "])),r&&"z-index:"+r+";");return n.data=a.concat(i),n}],vn={s:"flex-start",e:"flex-end",sa:"space-around",sb:"space-between",start:"flex-start",end:"flex-end",around:"space-around",between:"space-between"},yn=[function(n){var e=n.props,a=n.data,r=e.vat,i=e.vab,l=e.vam,o=e.vabs,u=e.vat_,d=e.vab_,c=e.vam_,p=e.vabs_,s=e.sub,f=fn.default(E||(E=t.__makeTemplateObject(["\n    ","\n    ","\n\n    ","\n    ","\n\n    ","\n    ","\n\n    ","\n    ","\n  "],["\n    ","\n    ","\n\n    ","\n    ","\n\n    ","\n    ","\n\n    ","\n    ","\n  "])),r&&"vertical-align: top;",u&&"> "+s+" { vertical-align: top; }",i&&"vertical-align: bottom;",d&&"> "+s+" { vertical-align: bottom; }",l&&"vertical-align: middle;",c&&"> "+s+" { vertical-align: middle; }",o&&"vertical-align: baseline;",p&&"> "+s+" { vertical-align: baseline; }");return n.data=a.concat(f),n},function(n){var e=n.props,a=n.data,r=e.bgn,i=fn.default(M||(M=t.__makeTemplateObject(["\n    ","\n  "],["\n    ","\n  "])),r&&"background: none;");return n.data=a.concat(i),n},function(n){var e=n.props,a=n.data,r=e.bdn,i=fn.default(S||(S=t.__makeTemplateObject(["\n    ","\n  "],["\n    ","\n  "])),r&&"border: none;");return n.data=a.concat(i),n},function(n){var e=n.props,a=n.data,r=e.bsb,i=e.bsc,l=fn.default(F||(F=t.__makeTemplateObject(["\n    ","\n    ","\n  "],["\n    ","\n    ","\n  "])),r&&"box-sizing: border-box;",i&&"box-sizing: content-box;");return n.data=a.concat(l),n},function(n){var e=n.props,a=n.data,r=e.bgdn,i=e.wh100,l=fn.default(q||(q=t.__makeTemplateObject(["\n    ","\n    ","\n  "],["\n    ","\n    ","\n  "])),r&&"border:none; background: none;",i&&"width: 100%; height: 100%;");return n.data=a.concat(l),n},function(n){var e=n.props,a=n.data;if(e.clearfix){var r=fn.default(X||(X=t.__makeTemplateObject(["\n      &:before,\n      &:after {\n        content: ' '; /* 1 */\n        display: table; /* 2 */\n      }\n      &:after {\n        clear: both;\n      }\n    "],["\n      &:before,\n      &:after {\n        content: ' '; /* 1 */\n        display: table; /* 2 */\n      }\n      &:after {\n        clear: both;\n      }\n    "])));n.data=a.concat(r)}return n},function(n){var e=n.props,a=n.data,r=e.cd,i=e.cm,l=e.cp,o=e.pn,u=fn.default(B||(B=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n    ","\n  "])),r&&"cursor: default;",l&&"cursor: pointer;",i&&"cursor: move;",o&&"pointer-events: none;");return n.data=a.concat(u),n},function(n){var e=n.props,a=n.data,r=e.db,i=e.di,l=e.dib,o=e.dtbc,u=e.dtb,d=e.dflex,c=e.diflex,p=e.dgrid,s=e.dn,f=e.db_,m=e.di_,b=e.dib_,g=e.dtbc_,h=e.sub,v=fn.default(I||(I=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n\n    ","\n    ","\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n\n    ","\n    ","\n    ","\n    ","\n  "])),r&&"display: block;",i&&"display: inline;",l&&"display: inline-block;",o&&"display: table-cell;",u&&"display: table;",d&&"display: flex;",c&&"display: inline-flex;",p&&"display: grid;",s&&"display: none;",f&&"> "+h+" { display: block; }",m&&"> "+h+" { display: inline; }",b&&"> "+h+" { display: inline-block; }",g&&"> "+h+" { display: table-cell; }");return n.data=a.concat(v),n},function(n){var e=n.props,a=n.data,r=e.wrap,i=e.align,l=e.justify,o=e.row,u=e.column,d=fn.default(U||(U=t.__makeTemplateObject(["\n    ","\n    ","\n\n    ","\n    ","\n\n    /* align */\n    ","\n    /* justify */\n    ","\n  "],["\n    ","\n    ","\n\n    ","\n    ","\n\n    /* align */\n    ","\n    /* justify */\n    ","\n  "])),!0===r&&"flex-wrap: wrap",!1===r&&"flex-wrap: nowrap",o&&"flex-direction: row; ",u&&"flex-direction: column; ",i&&"align-items:"+(vn[i]||i)+";",l&&"justify-content:"+(vn[l]||l)+";");return n.data=a.concat(d),n},function(n){var e=n.props,a=n.data,r=e.fl,i=e.fr,l=e.fl_,o=e.fr_,u=e.sub,d=fn.default(H||(H=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n    ","\n  "])),r&&"float: left;",i&&"float: right;",l&&"> "+u+" { float: "+l+"; }",o&&"> "+u+" { float: "+o+"; }");return n.data=a.concat(d),n},function(n){var e=n.props,a=n.data,r=e.f0,i=fn.default(L||(L=t.__makeTemplateObject(["\n    ","\n  "],["\n    ","\n  "])),r&&"font-size: 0;");return n.data=a.concat(i),n},function(n){var e=n.props,a=n.data,r=e.h100,i=e.v100,l=e.min100,o=e.y,u=e.max100,d=fn.default(R||(R=t.__makeTemplateObject(["\n    ","\n    ",";\n    ","\n    ","\n  "],["\n    ","\n    ",";\n    ","\n    ","\n  "])),r&&"height: 100%;",i&&o&&"height: 100vh;",l&&o&&"min-height: 100%;",u&&o&&"max-height: 100%;");return n.data=a.concat(d),n},function(n){var e=n.props,a=n.data,r=e.auto,i=e.maa,l=e.m0a,o=e.m0,u=e.mt0,d=e.mr0,c=e.mb0,p=e.ml0,s=e.mt_,f=e.mr_,m=e.mb_,b=e.ml_,g=e.sub,h=e.strip,v=fn.default(Y||(Y=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n\n    ","\n    ","\n    ","\n    ","\n    ","\n\n    ","\n    ","\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n\n    ","\n    ","\n    ","\n    ","\n    ","\n\n    ","\n    ","\n    ","\n    ","\n  "])),r&&"margin-left: auto; margin-right: auto;",i&&"margin: auto;",l&&"margin: 0 auto;",o&&"margin: 0;",u&&"margin-top: 0;",d&&"margin-right: 0;",c&&"margin-bottom: 0;",p&&"margin-left: 0;",s&&h&&" > "+g+":first-child{ margin-right:0; }",f&&h&&" > "+g+":last-child{ margin-right:0; }",m&&h&&" > "+g+":last-child{ margin-bottom:0; }",b&&h&&" > "+g+":first-child{ margin-left:0; }");return n.data=a.concat(v),n},function(n){var e=n.props,a=n.data,r=e.ovh,i=e.x,l=e.y,o=e.ovs,u=e.ova,d=fn.default(G||(G=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n\n    ","\n    ","\n\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n\n    ","\n    ","\n\n    ","\n    ","\n  "])),r&&!i&&!l&&"overflow: hidden;",o&&!i&&!l&&"overflow: scroll;",u&&"overflow: auto;",r&&i&&"overflow-x: hidden;",r&&l&&"overflow-y: hidden;",o&&i&&"overflow-x: scroll;",o&&l&&"overflow-y: scroll;");return n.data=a.concat(d),n},function(n){var e=n.props,a=n.data,r=e.p0,i=e.pt0,l=e.pr0,o=e.pb0,u=e.pl0,d=e.pt_,c=e.pr_,p=e.pb_,s=e.pl_,f=e.sub,m=e.strip,b=fn.default(J||(J=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n    ","\n    ","\n\n    ","\n    ","\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n    ","\n    ","\n\n    ","\n    ","\n    ","\n    ","\n  "])),r&&"padding:0;",i&&"padding-top:0;",l&&"padding-right:0;",o&&"padding-bottom:0;",u&&"padding-left:0;",d&&m&&" > "+f+":first-child{ padding-top:0; }",c&&m&&" > "+f+":last-child{ padding-right:0; }",p&&m&&" > "+f+":last-child{ padding-bottom:0; }",s&&m&&" > "+f+":first-child{ padding-left:0; }");return n.data=a.concat(b),n},function(n){var e=n.props,a=n.data,r=e.relative,i=e.abs,l=e.fixed,o=e.sticky,u=e.t0,d=e.r0,c=e.b0,p=e.l0,s=e.lr0,f=e.tb0,m=e.tr0,b=e.rb0,g=e.bl0,h=e.trbl0,v=e.lt5,y=e.t375,_=e.t125,k=e.t50,w=e.r50,x=e.b50,j=e.l50,O=e.t100,T=e.r100,N=e.b100,V=e.l100,P=bn.default({relative:r,abs:i,fixed:l,sticky:o}),Z=fn.default(K||(K=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n  "])),P&&"position:"+P+";",u&&"top: 0;",d&&"right: 0;",c&&"bottom: 0;",p&&"left: 0;",s&&"left: 0; right: 0;",f&&"top: 0; bottom: 0;",m&&"top: 0; right: 0;",b&&"right: 0; bottom: 0;",g&&"bottom: 0; left: 0;",h&&"top: 0; right: 0; bottom: 0; left: 0;",v&&"left: 50%; top: 50%;",y&&"top: 37.5%;",_&&"top: 12.5%;",k&&"top: 50%;",w&&"right: 50%;",x&&"bottom: 50%;",j&&"left: 50%;",O&&"top: 100%;",T&&"right: 100%;",N&&"bottom: 100%;",V&&"left: 100%;");return n.data=a.concat(Z),n},function(n){var e=n.props,a=n.data,r=e.smooth,i=fn.default(Q||(Q=t.__makeTemplateObject(["\n    ","\n  "],["\n    ","\n  "])),r&&"scroll-behavior: smooth;");return n.data=a.concat(i),n},function(n){var e=n.props,a=n.data,r=e.circle,i=e.round,l=e.rect,o=fn.default(W||(W=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n  "])),r&&"border-radius: 50%;",i&&"border-radius: 1000px;",l&&"border-radius: none;");return n.data=a.concat(o),n},function(n){var e=n.props,a=n.data,r=e.disabled,i=e.hidden,l=fn.default($||($=t.__makeTemplateObject(["\n    ","\n    ","\n  "],["\n    ","\n    ","\n  "])),r&&"pointer-events: none; opacity: 0.5; user-select: none; filter: grayscale(100%);",i&&"display: none;");return n.data=a.concat(l),n},function(n){var e=n.props,a=n.data,r=e.tdn,i=e.tdu,l=e.tdlh,o=e.tl,u=e.tc,d=e.tr,c=e.tj,p=e.tlr_,s=e.ell,f=e.fwb,m=e.fsn,b=e.usn,g=e.wsn,h=e.wsnw,v=fn.default(nn||(nn=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n\n    ","\n    ","\n    ","\n    ","\n    ","\n\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n\n    ","\n    ","\n    ","\n    ","\n    ","\n\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n  "])),r&&"text-decoration: none;",i&&"text-decoration: underline;",l&&"text-decoration: line-through;",o&&"text-align: left;",u&&"text-align: center;",d&&"text-align: right;",c&&"text-align: justify;",p&&"> *:first-child { text-align: left; } > *:last-child { text-align: right; }",s&&"white-space: nowrap; text-overflow: ellipsis; vertical-align: middle; overflow: hidden;",f&&"font-weight: bold;",m&&"font-weight: normal; font-style: normal;",b&&"user-select: none;",g&&"white-space: normal;",h&&"white-space: nowrap;");return n.data=a.concat(v),n},function(n){var e=n.props,a=n.data,r=e.tsy5,i=e.tsx5,l=e.tsxy5,o=fn.default(tn||(tn=t.__makeTemplateObject(["\n    ","\n    ","\n    ","\n  "],["\n    ","\n    ","\n    ","\n  "])),r&&"transform: translateY(-50%);",i&&"transform: translateX(-50%);",l&&"transform: translate(-50%, -50%);");return n.data=a.concat(o),n},function(n){var e=n.props,a=n.data,r=e.w100,i=e.v100,l=e.min100,o=e.x,u=e.max100,d=fn.default(en||(en=t.__makeTemplateObject(["\n    ","\n    ",";\n    ","\n    ","\n  "],["\n    ","\n    ",";\n    ","\n    ","\n  "])),r&&"width: 100%;",i&&o&&"width: 100vw;",l&&o&&"min-width: 100%;",u&&o&&"max-width: 100%;");return n.data=a.concat(d),n}],_n=t.__spreadArray(t.__spreadArray([],hn),yn),kn="styled-box",wn=["rel","x","y"],xn=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return t.__extends(e,n),e.prototype.shouldComponentUpdate=function(n){var t=n.staticStyled,e=n.deps,a=pn.default(e,n.deps);return!t||!a},e.prototype.render=function(){var n=this.props,e=n.className,a=n.as,r=n.styled;n.plugins;var i=t.__rest(n,["className","as","styled","plugins"]),l=dn.default.apply(null,[sn.default].concat(_n))({props:this.props,data:[]}).data.filter(Boolean),o=cn.default(i,wn),u=r(a)(an||(an=t.__makeTemplateObject(["\n      ","\n    "],["\n      ","\n    "])),l.join(""));return on.default.createElement(u,t.__assign({className:rn.default(kn,e)},o))},e.displayName=kn,e.version="1.0.48",e.propTypes={className:ln.default.string,styled:ln.default.any.isRequired,unit:ln.default.string,unitless:ln.default.bool,as:ln.default.any,val:ln.default.func,plugins:ln.default.array,plugin:ln.default.oneOfType([ln.default.string,ln.default.object,ln.default.array]),options:ln.default.any,deps:ln.default.any,staticStyled:ln.default.bool},e.defaultProps={sub:"*",unit:"px",unitless:!1,as:"div",val:un.default.stubValue,plugins:[],staticStyled:!1},e}(r.Component);n.default=xn,Object.defineProperty(n,"__esModule",{value:!0})}(t,e(5163),e(2779),e(3980),e(2784),e(2285),e(5069),e(5130),e(3185),e(821),e(1793),e(772),e(3703))},1793:function(n,t,e){"use strict";function a(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];for(var a=t.map((function(n){if("string"==typeof n||"number"==typeof n)return n})),r=a.length+n.length,i=[],l=n.slice(0),o=0;o<r;o++)o%2?i.push(a.shift()):i.push(l.shift());return i}e.r(t),e.d(t,{default:function(){return a}})},821:function(n,t,e){"use strict";e.r(t);var a=e(2285),r=e.n(a),i=e(5069),l=e.n(i),o=e(9511);t.default=function(n){var t=n.props,e=t.plugin,a=t.plugins;if(!e)return n;var i=(0,o.Z)(e).map((function(n){var t,e,i=(t=a,e=n.name,t.find((function(n){var t=n.prototype,a=t.name,r=t.aliases;return a===e||r.includes(e)})));return i?function(n){return i.getEntity(n)}:r().stubValue}));return l().apply(null,i)(n)}},3912:function(n,t,e){"use strict";var a,r,i=e(5664),l=e(1793),o=(a=function(n,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])})(n,t)},function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=n}a(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),u=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},d=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return o(t,n),Object.defineProperty(t.prototype,"name",{get:function(){return"line"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"defaults",{get:function(){return{value:1,style:"solid",color:"#ebedf0"}},enumerable:!1,configurable:!0}),t.prototype.pipe=function(){if(this.current){var n=this.current,t=n.color,e=n.style,a=n.value,i=this.entity.props,o=i.val,d=i.unit,c=o(a)+d;this.values=(0,l.default)(r||(r=u(["\n      border-bottom: "," "," ",";\n    "],["\n      border-bottom: "," "," ",";\n    "])),c,e,t)}},t}(i.Z);t.Z=d},9511:function(n,t){"use strict";t.Z=function n(t){var e=[];if("string"==typeof t){if(t.includes(";"))return t.split(";").reduce((function(t,e){return t=t.concat(n(e))}),e);if(t.includes(":")){var a=t.split(":"),r=a[0],i=a[1];return[{name:r.trim(),value:i.trim()}]}var l=t.trim();return l?[{name:l}]:e}return Array.isArray(t)?t.reduce((function(t,e){return t=t.concat(n(e))}),e):"object"==typeof t?[t]:e}},3923:function(n,t,e){"use strict";e.r(t),e.d(t,{contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return f},toc:function(){return m}});var a=e(7560),r=e(8283),i=(e(2784),e(876)),l=e(7438),o=e(4734),u=e.n(o),d=e(2275),c=["components"],p={id:"line",title:"line",sidebar_label:"line",slug:"/plugins/line"},s=void 0,f={unversionedId:"plugins/line",id:"plugins/line",isDocsHomePage:!1,title:"line",description:"\u63d2\u4ef6\u540d",source:"@site/docs/plugins/line.mdx",sourceDirName:"plugins",slug:"/plugins/line",permalink:"/styled-atomics/docs/plugins/line",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/plugins/line.mdx",version:"current",frontMatter:{id:"line",title:"line",sidebar_label:"line",slug:"/plugins/line"},sidebar:"someSidebar",previous:{title:"flexbox",permalink:"/styled-atomics/docs/plugins/flexbox"},next:{title:"list",permalink:"/styled-atomics/docs/plugins/list"}};Object.assign(u().defaultProps,{styled:d.ZP,plugins:[e(3912).Z]});var m=[{value:"\u63d2\u4ef6\u540d",id:"\u63d2\u4ef6\u540d",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u539f\u7406",id:"\u539f\u7406",children:[]},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u6f14\u793a",id:"\u6f14\u793a",children:[]}],b={toc:m};function g(n){var t=n.components,e=(0,r.Z)(n,c);return(0,i.kt)("wrapper",(0,a.Z)({},b,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u63d2\u4ef6\u540d"},"\u63d2\u4ef6\u540d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-config"},"line\n")),(0,i.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7ebf\u6761\u7684\u5bbd\u5ea6")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u7edd\u5bf9\u5c45\u4e2d\u7684\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f\u3002")),(0,i.kt)("h3",{id:"\u539f\u7406"},"\u539f\u7406"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5229\u7528 border-bottom \u5b9e\u73b0\u5404\u79cd\u5bbd\u5ea6\u7684\u7ebf\u6761"),(0,i.kt)("li",{parentName:"ol"},"todo: \u540e\u9762\u4f1a\u52a0\u4e0a hairline \u7684\u5b9e\u73b0")),(0,i.kt)("h3",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<View plugin="line:1" my={10} />\n')),(0,i.kt)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,i.kt)(l.Z,{className:"language-jsx",mdxType:"CodeBlock"},'<View plugin="line:1" my={10} />\n<View plugin="line:2" my={10} />\n<View plugin="line:3" my={10} />\n<View plugin="line:5" my={10} />\n<View plugin="line:10" my={10} />\n<View plugin="line:20" my={10} />\n<View plugin="line:100" my={10} />'),(0,i.kt)("h2",{id:"\u6f14\u793a"},"\u6f14\u793a"),(0,i.kt)(u(),{plugin:"line:1",my:10,mdxType:"View"}),(0,i.kt)(u(),{plugin:"line:2",my:10,mdxType:"View"}),(0,i.kt)(u(),{plugin:"line:3",my:10,mdxType:"View"}),(0,i.kt)(u(),{plugin:"line:5",my:10,mdxType:"View"}),(0,i.kt)(u(),{plugin:"line:10",my:10,mdxType:"View"}),(0,i.kt)(u(),{plugin:"line:20",my:10,mdxType:"View"}),(0,i.kt)(u(),{plugin:"line:100",my:10,mdxType:"View"}))}g.isMDXComponent=!0},3260:function(){}}]);
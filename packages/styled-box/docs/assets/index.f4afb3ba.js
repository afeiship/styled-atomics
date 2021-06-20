var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(e,n,r)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;import{_ as o,n as i,a as l,P as c,r as s,b as u,R as p,c as d,q as m,d as f,e as b}from"./vendor.c536b275.js";
/*!
 * name: @jswork/styled-atomics
 * description:
 * homepage:
 * version:
 * date: 2021-06-15 17:28:48
 * license:
 */function g(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var r=e.map((function(t){if("string"==typeof t||"number"==typeof t)return t})),a=r.length+t.length,o=[],i=t.slice(0),l=0;l<a;l++)l%2?o.push(r.shift()):o.push(i.shift());return o}var h=[...[t=>{const{props:e,data:n}=t,{bg:r,bg_:a,sub:o}=e,i=g`
    ${r&&"background:"+r+";"}
    ${a&&"> "+o+" { background: "+a+"; }"}
  `;return t.data=n.concat(i),t},t=>{const{props:e,data:n}=t,{val:r,blank:a,unit:o}=e;if(a){const e=g`
      display: block;
      font-size: 0;
      overflow: hidden;
      clear: both;
      height: ${r(a)+o};
    `;t.data=n.concat(e)}return t},t=>{const{props:e,data:n}=t,{val:r,radius:a,unit:o}=e,i=g`
    ${a&&"border-radius:"+r(a)+o+";"}
  `;return t.data=n.concat(i),t},t=>{const{props:e,data:n}=t,{val:r,bdw:a,bds:o,bdc:i,unit:l}=e,c=g`
    ${a&&"border-width: "+r(a)+l+";"}
    ${o&&"border-style: "+o+";"}
    ${i&&"border-color: "+i+";"}
  `;return t.data=n.concat(c),t},t=>{const{props:e,data:n}=t,{c:r,c_:a,sub:o}=e,i=g`
    ${r&&"color:"+r+";"}
    ${a&&"> "+o+" { color: "+a+"}"}
  `;return t.data=n.concat(i),t},t=>{const{props:e,data:n}=t,{flex:r,flex_:a,sub:o}=e,i=Number(r),l=g`
    ${r&&"flex:"+i+";"}
    ${a&&"> "+o+" { flex: "+a+"; }"}
  `;return t.data=n.concat(l),t},t=>{const{props:e,data:n}=t,{val:r,f:a,f_:o,sub:i,unit:l}=e,c=g`
    ${a&&"font-size:"+r(a)+l+";"}
    ${o&&"> "+i+" { font-size: "+r(o)+l+"}"}
  `;return t.data=n.concat(c),t},t=>{const{props:e,data:n}=t,{val:r,h:a,hp:o,unit:i}=e,l=g`
    ${a&&"height:"+r(a)+i+";"}
    ${o&&"height:"+10*o+"%;"}
  `;return t.data=n.concat(l),t},t=>{const{props:e,data:n}=t,{lc:r}=e;if(r){const e=g`
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      ${r&&"-webkit-line-clamp: "+r+";"}
    `;t.data=n.concat(e)}return t},t=>{const{props:e,data:n}=t,{lh:r,hlh:a}=e,o=g`
    ${r&&"line-height:"+r+";"}
    ${a&&"line-height:"+a+";height:"+a+";"}
  `;return t.data=n.concat(o),t},t=>{const{props:e,data:n}=t,{val:r,m:a,mt:o,mr:i,mb:l,ml:c,mx:s,my:u,m_:p,mt_:d,mr_:m,mb_:f,ml_:b,sub:h,unit:y}=e,v=g`
    ${a&&"margin:"+r(a)+y+";"}
    ${o&&"margin-top:"+r(o)+y+";"}
    ${i&&"margin-right:"+r(i)+y+";"}
    ${l&&"margin-bottom:"+r(l)+y+";"}
    ${c&&"margin-left:"+r(c)+y+";"}

    ${p&&"> "+h+" { margin: "+r(p)+y+"; }"}
    ${d&&"> "+h+" { margin-top: "+r(d)+y+"; }"}
    ${m&&"> "+h+" { margin-right: "+r(m)+y+"; }"}
    ${f&&"> "+h+" { margin-bottom: "+r(f)+y+"; }"}
    ${b&&"> "+h+" { margin-left: "+r(b)+y+"; }"}

    ${s&&"margin-left:"+s+y+"; margin-right:"+r(s)+y+";"}
    ${u&&"margin-top:"+u+y+"; margin-bottom:"+r(u)+y+";"}
  `;return t.data=n.concat(v),t},t=>{const{props:e,data:n}=t,{o:r}=e,a=g`
    ${void 0!==r&&"opacity:"+r/10+";"}
  `;return t.data=n.concat(a),t},t=>{const{props:e,data:n}=t,{ov:r,ovx:a,ovy:o}=e,i=g`
    ${r&&"overflow:"+r+";"}
    ${a&&"overflow-x:"+a+";"}
    ${o&&"overflow-y:"+o+";"}
  `;return t.data=n.concat(i),t},t=>{const{props:e,data:n}=t,{val:r,p:a,pt:o,pr:i,pb:l,pl:c,px:s,py:u,p_:p,pt_:d,pr_:m,pb_:f,pl_:b,sub:h,unit:y}=e,v=g`
    ${a&&"padding:"+r(a)+y+";"}
    ${o&&"padding-top:"+r(o)+y+";"}
    ${i&&"padding-right:"+r(i)+y+";"}
    ${l&&"padding-bottop:"+r(l)+y+";"}
    ${c&&"padding-left:"+r(c)+y+";"}


    ${p&&"> "+h+" { padding: "+r(p)+y+"; }"}
    ${d&&"> "+h+" { padding-top: "+r(d)+y+"; }"}
    ${m&&"> "+h+" { padding-right: "+r(m)+y+"; }"}
    ${f&&"> "+h+" { padding-bottom: "+r(f)+y+"; }"}
    ${b&&"> "+h+" { padding-left: "+r(b)+y+"; }"}

    ${s&&"padding-left:"+r(s)+y+"; padding-right:"+r(s)+y+";"}
    ${u&&"padding-top:"+r(u)+y+"; padding-bottom:"+r(u)+y+";"}
  `;return t.data=n.concat(v),t},t=>{const{props:e,data:n}=t,{val:r,t:a,r:o,b:i,l:l,unit:c}=e,s=g`
    ${a&&"top:"+r(a)+c+";"}
    ${o&&"right:"+r(o)+c+";"}
    ${i&&"bottom:"+r(i)+c+";"}
    ${l&&"left:"+r(l)+c+";"}
  `;return t.data=n.concat(s),t},t=>{const{props:e,data:n}=t,{val:r,space:a,unit:o,x:i,y:l,strip:c}=e;if(a){const e=g`
      ${i&&c&&"> * { &:last-child { margin-right:0 } }"}
      ${l&&c&&"> * { &:last-child { margin-bottom:0 } }"}
      ${i&&a&&" > * { margin-right: "+r(a)+o+";}"}
      ${l&&a&&" > * { margin-bottom: "+r(a)+o+";}"}
    `;t.data=n.concat(e)}return t},t=>{const{props:e,data:n}=t,{val:r,wh:a,unit:o}=e,i=g`
    ${a&&"width:"+r(a)+o+"; height: "+r(a)+o+";"}
  `;return t.data=n.concat(i),t},t=>{const{props:e,data:n}=t,{val:r,w:a,wp:o,w1:i,unit:l}=e,c=g`
    ${a&&"width:"+r(a)+l+";"}
    ${o&&"width:"+10*o+"%;"}
    ${i&&"width:"+100/i+"%;"}
  `;return t.data=n.concat(c),t},t=>{const{props:e,data:n}=t,{z:r}=e,a=g`
    ${r&&"z-index:"+r+";"}
  `;return t.data=n.concat(a),t}],...[t=>{const{props:e,data:n}=t,{vat:r,vab:a,vam:o,vabs:i,vat_:l,vab_:c,vam_:s,vabs_:u,sub:p}=e,d=g`
    ${r&&"vertical-align: top;"}
    ${l&&"> "+p+" { vertical-align: top; }"}

    ${a&&"vertical-align: bottom;"}
    ${c&&"> "+p+" { vertical-align: bottom; }"}

    ${o&&"vertical-align: middle;"}
    ${s&&"> "+p+" { vertical-align: middle; }"}

    ${i&&"vertical-align: baseline;"}
    ${u&&"> "+p+" { vertical-align: baseline; }"}
  `;return t.data=n.concat(d),t},t=>{const{props:e,data:n}=t,{bgn:r}=e,a=g`
    ${r&&"background: none;"}
  `;return t.data=n.concat(a),t},t=>{const{props:e,data:n}=t,{bdn:r}=e,a=g`
    ${r&&"border: none;"}
  `;return t.data=n.concat(a),t},t=>{const{props:e,data:n}=t,{bsb:r,bsc:a}=e,o=g`
    ${r&&"box-sizing: border-box;"}
    ${a&&"box-sizing: content-box;"}
  `;return t.data=n.concat(o),t},t=>{const{props:e,data:n}=t,{bgdn:r,wh100:a}=e,o=g`
    ${r&&"border:none; background: none;"}
    ${a&&"width: 100%; height: 100%;"}
  `;return t.data=n.concat(o),t},t=>{const{props:e,data:n}=t,{clearfix:r}=e;if(r){const e=g`
      &:before,
      &:after {
        content: ' '; /* 1 */
        display: table; /* 2 */
      }
      &:after {
        clear: both;
      }
    `;t.data=n.concat(e)}return t},t=>{const{props:e,data:n}=t,{cd:r,cm:a,cp:o,pn:i}=e,l=g`
    ${r&&"cursor: default;"}
    ${o&&"cursor: pointer;"}
    ${a&&"cursor: move;"}
    ${i&&"pointer-events: none;"}
  `;return t.data=n.concat(l),t},t=>{const{props:e,data:n}=t,{debug:r,value:a}=e,o=g`
    ${r&&"border: 2px solid "+(a||"red")+";"}
  `;return t.data=n.concat(o),t},t=>{const{props:e,data:n}=t,{db:r,di:a,dib:o,dtbc:i,dtb:l,dflex:c,dn:s,db_:u,di_:p,dib_:d,dtbc_:m,sub:f}=e,b=g`
    ${r&&"display: block;"}
    ${a&&"display: inline;"}
    ${o&&"display: inline-block;"}
    ${i&&"display: table-cell;"}
    ${l&&"display: table;"}
    ${c&&"display: flex;"}
    ${s&&"display: none;"}

    ${u&&"> "+f+" { display: block; }"}
    ${p&&"> "+f+" { display: inline; }"}
    ${d&&"> "+f+" { display: inline-block; }"}
    ${m&&"> "+f+" { display: table-cell; }"}
  `;return t.data=n.concat(b),t},t=>{const{props:e,data:n}=t,{wrap:r,align:a,justify:o,row:i,column:l}=e,c=g`
    ${!0===r&&"flex-wrap: wrap"}
    ${!1===r&&"flex-wrap: nowrap"}

    ${i&&"flex-direction: row; "}
    ${l&&"flex-direction: column; "}

    /* align */
    ${a&&"align-items:"+a+";"}
    /* justify */
    ${o&&"justify-content:"+o+";"}
  `;return t.data=n.concat(c),t},t=>{const{props:e,data:n}=t,{fl:r,fr:a,fl_:o,fr_:i,sub:l}=e,c=g`
    ${r&&"float: left;"}
    ${a&&"float: right;"}
    ${o&&"> "+l+" { float: "+o+"; }"}
    ${i&&"> "+l+" { float: "+i+"; }"}
  `;return t.data=n.concat(c),t},t=>{const{props:e,data:n}=t,{f0:r}=e,a=g`
    ${r&&"font-size: 0;"}
  `;return t.data=n.concat(a),t},t=>{const{props:e,data:n}=t,{h100:r,v100:a,min100:o,y:i,max100:l}=e,c=g`
    ${r&&"height: 100%;"}
    ${a&&i&&"height: 100vh;"};
    ${o&&i&&"min-height: 100%;"}
    ${l&&i&&"max-height: 100%;"}
  `;return t.data=n.concat(c),t},t=>{const{props:e,data:n}=t,{auto:r,maa:a,m0a:o,m0:i,mt0:l,mr0:c,mb0:s,ml0:u,mt_:p,mr_:d,mb_:m,ml_:f,sub:b,strip:h}=e,y=g`
    ${r&&"margin-left: auto; margin-right: auto;"}
    ${a&&"margin: auto;"}
    ${o&&"margin: 0 auto;"}

    ${i&&"margin: 0;"}
    ${l&&"margin-top: 0;"}
    ${c&&"margin-right: 0;"}
    ${s&&"margin-bottom: 0;"}
    ${u&&"margin-left: 0;"}

    ${p&&h&&" > "+b+":first-child{ margin-right:0; }"}
    ${d&&h&&" > "+b+":last-child{ margin-right:0; }"}
    ${m&&h&&" > "+b+":last-child{ margin-bottom:0; }"}
    ${f&&h&&" > "+b+":first-child{ margin-left:0; }"}
  `;return t.data=n.concat(y),t},t=>{const{props:e,data:n}=t,{ovh:r,x:a,y:o,ovs:i,ova:l}=e,c=g`
    ${r&&!a&&!o&&"overflow: hidden;"}
    ${i&&!a&&!o&&"overflow: scroll;"}
    ${l&&"overflow: auto;"}

    ${r&&a&&"overflow-x: hidden;"}
    ${r&&o&&"overflow-y: hidden;"}

    ${i&&a&&"overflow-x: scroll;"}
    ${i&&o&&"overflow-y: scroll;"}
  `;return t.data=n.concat(c),t},t=>{const{props:e,data:n}=t,{p0:r,pt0:a,pr0:o,pb0:i,pl0:l,pt_:c,pr_:s,pb_:u,pl_:p,sub:d,strip:m}=e,f=g`
    ${r&&"padding:0;"}
    ${a&&"padding-top:0;"}
    ${o&&"padding-right:0;"}
    ${i&&"padding-bottom:0;"}
    ${l&&"padding-left:0;"}

    ${c&&m&&" > "+d+":first-child{ padding-top:0; }"}
    ${s&&m&&" > "+d+":last-child{ padding-right:0; }"}
    ${u&&m&&" > "+d+":last-child{ padding-bottom:0; }"}
    ${p&&m&&" > "+d+":first-child{ padding-left:0; }"}
  `;return t.data=n.concat(f),t},t=>{const{props:e,data:n}=t,{relative:r,abs:a,fixed:i,sticky:l,t0:c,r0:s,b0:u,l0:p,lr0:d,tb0:m,tr0:f,rb0:b,bl0:h,trbl0:y,lt5:v,t375:$,t125:w,t50:x,r50:E,b50:_,l50:O,t100:j,r100:P,b100:N,l100:k}=e,A=o({relative:r,abs:a,fixed:i,sticky:l}),S=g`
    ${A&&"position:"+A+";"}
    ${c&&"top: 0;"}
    ${s&&"right: 0;"}
    ${u&&"bottom: 0;"}
    ${p&&"left: 0;"}
    ${d&&"left: 0; right: 0;"}
    ${m&&"top: 0; bottom: 0;"}
    ${f&&"top: 0; right: 0;"}
    ${b&&"right: 0; bottom: 0;"}
    ${h&&"bottom: 0; left: 0;"}
    ${y&&"top: 0; right: 0; bottom: 0; left: 0;"}
    ${v&&"left: 50%; top: 50%;"}
    ${$&&"top: 37.5%;"}
    ${w&&"top: 12.5%;"}
    ${x&&"top: 50%;"}
    ${E&&"right: 50%;"}
    ${_&&"bottom: 50%;"}
    ${O&&"left: 50%;"}
    ${j&&"top: 100%;"}
    ${P&&"right: 100%;"}
    ${N&&"bottom: 100%;"}
    ${k&&"left: 100%;"}
  `;return t.data=n.concat(S),t},t=>{const{props:e,data:n}=t,{smooth:r}=e,a=g`
    ${r&&"scroll-behavior: smooth;"}
  `;return t.data=n.concat(a),t},t=>{const{props:e,data:n}=t,{circle:r,round:a,rect:o}=e,i=g`
    ${r&&"border-radius: 50%;"}
    ${a&&"border-radius: 1000px;"}
    ${o&&"border-radius: none;"}
  `;return t.data=n.concat(i),t},t=>{const{props:e,data:n}=t,{disabled:r,hidden:a}=e,o=g`
    ${r&&"pointer-events: none; opacity: 0.5; user-select: none; filter: grayscale(100%);"}
    ${a&&"display: none;"}
  `;return t.data=n.concat(o),t},t=>{const{props:e,data:n}=t,{tdn:r,tdu:a,tdlh:o,tl:i,tc:l,tr:c,tj:s,tlr_:u,ell:p,fwb:d,fsn:m,usn:f,wsn:b,wsnw:h}=e,y=g`
    ${r&&"text-decoration: none;"}
    ${a&&"text-decoration: underline;"}
    ${o&&"text-decoration: line-through;"}

    ${i&&"text-align: left;"}
    ${l&&"text-align: center;"}
    ${c&&"text-align: right;"}
    ${s&&"text-align: justify;"}
    ${u&&"> *:first-child { text-align: left; } > *:last-child { text-align: right; }"}

    ${p&&"white-space: nowrap; text-overflow: ellipsis; vertical-align: middle; overflow: hidden;"}
    ${d&&"font-weight: bold;"}
    ${m&&"font-weight: normal; font-style: normal;"}
    ${f&&"user-select: none;"}
    ${b&&"white-space: normal;"}
    ${h&&"white-space: nowrap;"}
  `;return t.data=n.concat(y),t},t=>{const{props:e,data:n}=t,{tsy5:r,tsx5:a,tsxy5:o}=e,i=g`
    ${r&&"transform: translateY(-50%);"}
    ${a&&"transform: translateX(-50%);"}
    ${o&&"transform: translate(-50%, -50%);"}
  `;return t.data=n.concat(i),t},t=>{const{props:e,data:n}=t,{w100:r,v100:a,min100:o,x:i,max100:l}=e,c=g`
    ${r&&"width: 100%;"}
    ${a&&i&&"width: 100vw;"};
    ${o&&i&&"min-width: 100%;"}
    ${l&&i&&"max-width: 100%;"}
  `;return t.data=n.concat(c),t}]];function y(t){var e=[];if("string"==typeof t){if(t.includes(";"))return t.split(";").reduce((function(t,e){return t=t.concat(y(e))}),e);if(t.includes(":")){var n=t.split(":"),r=n[0],a=n[1];return[{name:r.trim(),value:a.trim()}]}var o=t.trim();return o?[{name:o}]:e}return Array.isArray(t)?t.reduce((function(t,e){return t=t.concat(y(e))}),e):"object"==typeof t?[t]:e}
/*!
 * name: @jswork/styled-atomics
 * description:
 * homepage:
 * version:
 * date: 2021-06-15 17:28:53
 * license:
 */var v=function(t){var e=t.props,n=e.plugin,r=e.plugins;if(!n)return t;var a=y(n).map((function(t){var e,n,a=(e=r,n=t.name,e.find((function(t){var e=t.prototype,r=e.name,a=e.aliases;return r===n||a.includes(n)})));return a?function(t){return a.getEntity(t)}:i.stubValue}));return l.apply(null,a)(t)};const $=["rel","x","y"];class w extends s.exports.Component{render(){const t=this.props,{className:o,as:i,styled:c,plugins:s}=t,m=((t,a)=>{var o={};for(var i in t)n.call(t,i)&&a.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&e)for(var i of e(t))a.indexOf(i)<0&&r.call(t,i)&&(o[i]=t[i]);return o})(t,["className","as","styled","plugins"]),f=l.apply(null,h.concat(v))({props:this.props,data:[]}).data.filter(Boolean),b=u(m,$),g=c(i)`
      ${f.join("")}
    `;return p.createElement(g,((t,o)=>{for(var i in o||(o={}))n.call(o,i)&&a(t,i,o[i]);if(e)for(var i of e(o))r.call(o,i)&&a(t,i,o[i]);return t})({className:d("styled-box",o)},b))}}w.displayName="styled-box",w.version="__VERSION__",w.propTypes={className:c.string,styled:c.any.isRequired,unit:c.string,as:c.any,val:c.func,plugins:c.array,plugin:c.oneOfType([c.string,c.object,c.array]),options:c.any},w.defaultProps={sub:"*",unit:"px",as:"div",val:i.stubValue,plugins:[]};
/*!
 * name: @jswork/styled-abstract-plugin
 * description: Abstract plugin for styled atomics.
 * homepage:
 * version: 1.0.6
 * date: 2021-06-15 17:28:53
 * license: MIT
 */
var x,E,_,O,j,P,N,k,A,S,z,C=function(){function t(t){var e=this;this.current=null,this.values=[];var n=t.props.plugin;this.entity=t,this.plugins=y(n),this.current=this.plugins.find((function(t){return t.name===e.name}))||null}return Object.defineProperty(t.prototype,"aliases",{get:function(){return[]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return"styled-abstract-plugin"},enumerable:!1,configurable:!0}),t.getEntity=function(t){return new this(t).get()},t.prototype.pipe=function(){var t,e;this.values=g(x||(t=[""],e=[""],Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,x=t))},t.prototype.merge=function(){this.entity.data=this.entity.data.concat(this.values)},t.prototype.get=function(){return this.pipe(),this.merge(),this.entity},t}(),T=(E=function(t,e){return(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}E(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),M=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return T(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return"absolute-center"},enumerable:!1,configurable:!0}),e.prototype.pipe=function(){if(this.current){var t,e,n=this.current,r=n.name,a=n.value;this.values=g(_||(t=["\n      ","\n      ","\n      ","\n    "],e=["\n      ","\n      ","\n      ","\n    "],Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,_=t),r===this.name&&"position: absolute; margin: auto;",("x"===a||"xy"===a)&&"left:0; right:0;",("y"===a||"xy"===a)&&"top:0; bottom:0;")}},e}(C),I=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),R=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return I(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return"em-justify-list"},enumerable:!1,configurable:!0}),e.prototype.pipe=function(){if(this.current){var t,e,n=this.current.value,r=this.entity.props,a=100/n+"%";this.values=g(O||(t=["\n      margin: -0.5em;\n      overflow: hidden;\n\n      > "," {\n        box-sizing: border-box;\n        float: left;\n        margin: 0.5em;\n        width: calc("," - 1em);\n      }\n    "],e=["\n      margin: -0.5em;\n      overflow: hidden;\n\n      > "," {\n        box-sizing: border-box;\n        float: left;\n        margin: 0.5em;\n        width: calc("," - 1em);\n      }\n    "],Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,O=t),r.sub,a)}},e}(C),X=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return X(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return"flexbox"},enumerable:!1,configurable:!0}),e.prototype.pipe=function(){if(this.current){var t,e,n=this.current,r=n.name,a=n.row,o=n.column,i=n.wrap,l=n.value,c=n.align,s=n.justify;r===this.name&&(this.values=g(j||(t=["\n        display: flex;\n        box-sizing: border-box;\n        flex-wrap: ",";\n\n        ","\n        ","\n\n        /* align */\n        ","\n        /* justify */\n        ","\n\n        /* center */\n        ","\n\n        /* lalararlr */\n        ","\n\n        /* ta|tab|ab|tb */\n        ","\n\n        /* la|lar|ta|tab */\n        ","\n\n        /* ab|ar */\n        ","\n\n        /* lr|tb */\n        ","\n      "],e=["\n        display: flex;\n        box-sizing: border-box;\n        flex-wrap: ",";\n\n        ","\n        ","\n\n        /* align */\n        ","\n        /* justify */\n        ","\n\n        /* center */\n        ","\n\n        /* la\\lar\\ar\\lr */\n        ","\n\n        /* ta|tab|ab|tb */\n        ","\n\n        /* la|lar|ta|tab */\n        ","\n\n        /* ab|ar */\n        ","\n\n        /* lr|tb */\n        ","\n      "],Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,j=t),i?"wrap":"nowrap",a&&"flex-direction: row; ",o&&"flex-direction: column; ",c&&"align-items:"+c+";",s&&"justify-content:"+s+";","center"===l&&"align-items: center; justify-content: center;",["la","lar","ar","lr"].includes(l)&&"width: 100%; flex-direction: row;",["ta","tab","ab","tb"].includes(l)&&"height: 100%; flex-direction: column;",["la","lar","ta","tab"].includes(l)&&"& > * { &:nth-child(2) { flex: 1; } }",["ar","ab"].includes(l)&&"& > * { &:nth-child(1) { flex: 1; } }",["lr","tb"].includes(l)&&"justify-content: space-between;"))}},e}(C),q=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return q(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return"radius-strip"},enumerable:!1,configurable:!0}),e.prototype.pipe=function(){if(this.current){var t,e,n=this.current,r=n.name,a=n.value;r===this.name&&(this.values=g(P||(t=["\n        ",";\n        ",";\n        ",";\n        ",";\n      "],e=["\n        ",";\n        ",";\n        ",";\n        ",";\n      "],Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,P=t),a.includes("t0")&&"border-top-left-radius: 0; border-top-right-radius:0;",a.includes("r0")&&"border-top-right-radius: 0; border-bottom-right-radius:0;",a.includes("b0")&&"border-bottom-left-radius: 0; border-bottom-right-radius:0;",a.includes("l0")&&"border-bottom-left-radius: 0; border-top-left-radius:0;"))}},e}(C),V=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),B=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return V(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return"shadow"},enumerable:!1,configurable:!0}),e.prototype.pipe=function(){if(this.current){var t,e,n=this.current,r=n.value,a=n.inset?"inset ":"";this.values=g(N||(t=["\n      box-shadow: ",";\n      box-shadow: ",";\n      box-shadow: ",";\n      box-shadow: ",";\n      box-shadow: ",";\n      box-shadow: ",";\n    "],e=["\n      box-shadow: ",";\n      box-shadow: ",";\n      box-shadow: ",";\n      box-shadow: ",";\n      box-shadow: ",";\n      box-shadow: ",";\n    "],Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,N=t),1==r&&a+"0 1px 2px rgba(0, 0, 0, 0.2);",2==r&&a+"0 1px 6px rgba(0, 0, 0, 0.12);",3==r&&a+"0 3px 10px rgba(0, 0, 0, 0.16);",4==r&&a+"0 10px 30px rgba(0, 0, 0, 0.19);",5==r&&a+"0 14px 45px rgba(0, 0, 0, 0.25);",6==r&&a+"0 19px 60px rgba(0, 0, 0, 0.3);")}},e}(C),W=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),D=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return W(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return"transform-center"},enumerable:!1,configurable:!0}),e.prototype.pipe=function(){if(this.current){var t,e,n=this.current,r=n.name,a=n.value;this.values=g(k||(t=["\n      ","\n      ","\n      ","\n      ","\n    "],e=["\n      ","\n      ","\n      ","\n      ","\n    "],Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,k=t),r===this.name&&"position: absolute;","x"===a&&"left: 50%; transform: translateX(-50%);","y"===a&&"top: 50%; transform: translateY(-50%);","xy"===a&&"left: 50%; top: 50%; transform: translate(-50%, -50%);")}},e}(C),F=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Z=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return F(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return"scaleable-image"},enumerable:!1,configurable:!0}),e.prototype.pipe=function(){if(this.current){var t,e,n=this.current,r=n.name,a=n.value,o=n.duration||"0.3s",i=a||1.05;this.values=g(A||(t=["\n      ","\n      .is-scaleable {\n        transition: all ease-out ",";\n      }\n\n      &:hover {\n        .is-scaleable {\n          transform: scale(",", ",");\n        }\n      }\n    "],e=["\n      ","\n      .is-scaleable {\n        transition: all ease-out ",";\n      }\n\n      &:hover {\n        .is-scaleable {\n          transform: scale(",", ",");\n        }\n      }\n    "],Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,A=t),r===this.name&&"display: block; overflow: hidden;",o,i,i)}},e}(C),G=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),H=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return G(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return"absolute-rect"},enumerable:!1,configurable:!0}),e.prototype.pipe=function(){if(this.current){var t=this.entity.props,e=t.val,n=t.unit,r=this.current,a=r.name,o=r.value;console.log(this.current);var i,l,c=e(o||0)+n,s=["position: absolute","top: "+c,"right: "+c,"bottom: "+c,"left: "+c].join(";")+";";this.values=g(S||(i=["\n      ","\n    "],l=["\n      ","\n    "],Object.defineProperty?Object.defineProperty(i,"raw",{value:l}):i.raw=l,S=i),a===this.name&&s)}},e}(C),J=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),K={center:"left: 50%; top: 50%; transform: translate(-50%, -50%);",top:"top: 0; left: 50%; transform: translateX(-50%);",bottom:"bottom: 0; left: 50%; transform: translateX(-50%);",left:"left:0; top: 50%; transform: translateY(-50%);",right:"right:0; top: 50%; transform: translateY(-50%);",tl:"left: 0; top: 0;",tr:"right: 0; top: 0;",br:"right: 0; bottom: 0;",bl:"left: 0; bottom: 0;"},Q=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return J(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return"position-box"},enumerable:!1,configurable:!0}),e.prototype.pipe=function(){if(this.current){var t,e,n=this.current.value;this.values=g(z||(t=["\n      position: absolute;\n      ","\n    "],e=["\n      position: absolute;\n      ","\n    "],Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,z=t),K[n])}},e}(C);Object.assign(w.defaultProps,{styled:m,val:t=>(parseInt(t)/16).toFixed(2),unit:"rem",plugins:[M,R,Y,L,B,D,Z,H,Q]});const U=m.div`
  width: 80%;
  margin: 30px auto 0;
`;var tt=t=>p.createElement(U,null,p.createElement(w,{c:"#000",wp:8,bdw:"2",bds:"dashed",bdc:"#ccc",bg:"#fefefe",p:20,auto:!0},p.createElement(w,{relative:!0,debug:!0,wh:300,auto:!0,mb:20},p.createElement(w,{debug:!0,plugin:"position-box:center"},"Center"),p.createElement(w,{debug:!0,plugin:"position-box:tr"},"tr"),p.createElement(w,{debug:!0,plugin:"position-box:tl"},"tl"),p.createElement(w,{debug:!0,plugin:"position-box:bl"},"bl"),p.createElement(w,{debug:!0,plugin:"position-box:br"},"br"),p.createElement(w,{debug:!0,plugin:"position-box:top"},"top"),p.createElement(w,{debug:!0,plugin:"position-box:right"},"right"),p.createElement(w,{debug:!0,plugin:"position-box:bottom"},"bottom"),p.createElement(w,{debug:!0,plugin:"position-box:left"},"left")),p.createElement(w,{debug:!0,relative:!0,value:"green",w:200,h:200},p.createElement(w,{debug:!0,plugin:"absolute-rect:10",ovs:!0,y:!0},p.createElement("p",null,"道可道，非常道；名可名，非常名。 "),p.createElement("p",null,"无名，天地之始，有名，万物之母。"),p.createElement("p",null,"故常无欲，以观其妙，常有欲，以观其徼。"),p.createElement("p",null,"此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。"))),p.createElement(w,{debug:!0,relative:!0,value:"green",w:300,h:300},p.createElement(w,{debug:!0,plugin:"absolute-rect",wsnw:!0,ov:"hidden",ovs:!0,x:!0},p.createElement("p",null,"道可道，非常道；名可名，非常名。 "),p.createElement("p",null,"无名，天地之始，有名，万物之母。"),p.createElement("p",null,"故常无欲，以观其妙，常有欲，以观其徼。"),p.createElement("p",null,"此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。"),p.createElement("p",null,"天下皆知美之为美，斯恶已，皆知善之为善，斯不善已。"),p.createElement("p",null,"故有无相生，难易相成，长短相形，高下相倾，音声相和，前后相随。"),p.createElement("p",null,"是以圣人处无为之事，行不言之教，万物作焉而不辞，生而不有，为而不恃，功成而弗居。"),p.createElement("p",null,"夫惟弗居，是以不去。"))),p.createElement(w,{p_:10,mb:10,debug:!0,dflex:!0,flex_:1},p.createElement("div",{className:"is-item"},"item1"),p.createElement("div",{className:"is-item"},"item2"),p.createElement("div",{className:"is-item"},"item3"),p.createElement("div",{className:"is-item"},"item4")),p.createElement(w,{radius:8,c:"#fff",bg:"#4cd964",p:10,mb:10,f:14,lh:1.6},"道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。 故常无欲，以观其妙，常有欲，以观其徼。 此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。"),p.createElement(w,{radius:4,c:"#fff",bg:"#007aff",p:10,f:14},"天下皆知美之为美，斯恶已，皆知善之为善，斯不善已。 故有无相生，难易相成，长短相形，高下相倾，音声相和，前后相随。 是以圣人处无为之事，行不言之教，万物作焉而不辞，生而不有，为而不恃，功成而弗居。 夫惟弗居，是以不去。"),p.createElement(w,{mt:10,plugin:"flexbox:la"},p.createElement(w,{p:10,bg:"#f80",debug:!0,className:"is-left"},"Left"),p.createElement(w,{p:10,bg:"#eee",debug:!0,className:"is-right"},"Auto")),p.createElement(w,{mt:10,plugin:{name:"flexbox",value:"lr",align:"center"},debug:!0,h:120},p.createElement(w,{p:10,bg:"#f80",debug:!0,className:"is-left"},"Left"),p.createElement(w,{p:10,bg:"#060",debug:!0,className:"is-left"},"Middle"),p.createElement(w,{p:10,bg:"#eee",debug:!0,className:"is-right"},"Auto")),p.createElement("h2",null,"elements: margin/padding"),p.createElement(w,{mb_:10},p.createElement(w,{debug:!0,className:"is-item"},"item1"),p.createElement(w,{debug:!0,className:"is-item"},"item2"),p.createElement(w,{debug:!0,className:"is-item"},"item3"),p.createElement(w,{debug:!0,className:"is-item"},"item4"),p.createElement(w,{debug:!0,className:"is-item"},"item5")),p.createElement(w,{blank:20}),p.createElement(w,{mb_:18,p_:5,strip:!0,bdc:"#ccc",bdw:5,bds:"dashed"},p.createElement(w,{debug:!0,className:"is-item"},"item1"),p.createElement(w,{debug:!0,className:"is-item"},"item2"),p.createElement(w,{debug:!0,className:"is-item"},"item3"),p.createElement(w,{debug:!0,className:"is-item"},"item4"),p.createElement(w,{debug:!0,className:"is-item"},"item5")),p.createElement("h2",null,"elements: space"),p.createElement(w,{space:20,debug:!0,p:10,y:!0,strip:!0},p.createElement(w,{debug:!0,className:"is-item"},"item1"),p.createElement(w,{debug:!0,className:"is-item"},"item2"),p.createElement(w,{debug:!0,className:"is-item"},"item3"),p.createElement(w,{debug:!0,className:"is-item"},"item4"),p.createElement(w,{debug:!0,className:"is-item"},"item5")),p.createElement("h2",null,"elements: blank"),p.createElement(w,{debug:!0,className:"is-item"},"item1"),p.createElement(w,{blank:10,bg:"#eee",debug:!0}),p.createElement(w,{debug:!0,className:"is-item"},"item3"),p.createElement(w,{blank:20,bg:"#eee",debug:!0}),p.createElement(w,{debug:!0,className:"is-item"},"item4"),p.createElement(w,{blank:100,bg:"#eee",debug:!0}),p.createElement(w,{debug:!0,className:"is-item"},"item5"),p.createElement("h2",null,"elements: lc(1/2/3)"),p.createElement(w,{value:"green",debug:!0,p:10,mb:10},p.createElement(w,{lc:1,className:"is-item"},"道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。 故常无欲，以观其妙，常有欲，以观其徼。 此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。")),p.createElement(w,{debug:!0,lc:2,mb:10,wp:2,className:"is-item"},"道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。 故常无欲，以观其妙，常有欲，以观其徼。 此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。"),p.createElement(w,{debug:!0,lc:3,wp:3,className:"is-item"},"清晨醒来，打开窗帘，一抹慵懒的阳光照进来，暖暖的，柔柔的，时光瞬间变得温婉静美，打开音乐，沏一杯花茶，躺在床上，暖阳淼淼，茶香淡淡，音乐袅袅，闭上眼睛，嘴角轻轻上扬，算是对着光阴的镜子，和自己撒个娇。"),p.createElement("h2",null,"Module: transform-center use InlinePlugin"),p.createElement(w,{debug:!0,wh:200,relative:!0},p.createElement(w,{bg:"#f60",c:"#fff",f:"38",o:5,wh:100,circle:!0,plugin:[{name:"transform-center",value:"xy"},{name:"flexbox",value:"center"}],tc:!0},"道")),p.createElement("h2",null,"Module: transform-center use stringInlinePlugin"),p.createElement(w,{debug:!0,wh:200,relative:!0},p.createElement(w,{bg:"#f60",c:"#fff",f:"38",wh:100,circle:!0,plugin:"transform-center:xy",tc:!0},"道")),p.createElement("h2",null,"as: image - tobe avatar"),p.createElement(w,{plugin:"scaleable-image"},p.createElement(w,{as:"img",circle:!0,className:"is-scaleable",src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg"})),p.createElement("h2",null,"Module: em-justify-list"),p.createElement(w,{w:900,auto:!0,debug:!0},p.createElement(w,{plugin:{name:"em-justify-list",value:5}},p.createElement(w,{bg:"#eee",h:100,className:"is-item"},"item1"),p.createElement(w,{bg:"#f30",h:100,className:"is-item"},"item2"),p.createElement(w,{bg:"#ddd",h:100,className:"is-item"},"item3"),p.createElement(w,{bg:"#030",h:100,className:"is-item"},"item2"),p.createElement(w,{bg:"#ddd",h:100,className:"is-item"},"item3"),p.createElement(w,{bg:"#ccc",h:100,className:"is-item"},"item3"),p.createElement(w,{bg:"#999",h:100,className:"is-item"},"item3"))),p.createElement("h1",null,"Module: shadow"),p.createElement(w,{mb_:10},p.createElement(w,{p:10,plugin:"shadow:2"},"道可道，非常道；名可名，非常名。"),p.createElement(w,{p:10,plugin:[{name:"shadow",inset:!0,value:1}]},"道可道，非常道；名可名，非常名。")),p.createElement("h1",null," Mouule: Multiple plugins"),p.createElement(w,{bg:"#0f0",c:"#fff",f:"38",wh:100,lh:"2",circle:!0,plugin:[{name:"transform-center",value:"xy"},{name:"shadow",value:3}],fixed:!0,tc:!0},"道"),p.createElement("h1",null," As: details!"),p.createElement(w,{as:"details",open:!0},p.createElement("summary",null,"Epcot Center"),p.createElement("p",null,"Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.")),p.createElement("h1",null," As: ReactList?"),p.createElement(w,{debug:!0,value:"green"},p.createElement(w,{as:f,items:[1,2,3],template:({item:t})=>p.createElement(w,{debug:!0},t)}))));b.render(p.createElement(p.StrictMode,null,p.createElement(tt,null)),document.getElementById("root"));

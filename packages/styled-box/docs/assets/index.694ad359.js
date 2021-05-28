var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{A as i,_ as l,P as o,r as s,n as c,R as d,c as p,q as m,a as u}from"./vendor.5f80a05f.js";var g=[e=>{const{props:t,data:a}=e,{m:r,mt:n,mr:l,mb:o,ml:s,mx:c,my:d,auto:p,unit:m}=t,u=i`
    ${r&&"margin:"+r+m+";"}
    ${n&&"margin-top:"+n+m+";"}
    ${l&&"margin-right:"+l+m+";"}
    ${o&&"margin-bottom:"+o+m+";"}
    ${s&&"margin-left:"+s+m+";"}
    ${c&&"margin-left:"+c+m+"; margin-right:"+c+m+";"}
    ${d&&"margin-top:"+d+m+"; margin-bottom:"+d+m+";"}
    ${p&&"margin-left: auto; margin-right: auto;"}
  `;return e.data=a.concat(u),e},e=>{const{props:t,data:a}=e,{p:r,pt:n,pr:l,pb:o,pl:s,px:c,py:d,unit:p}=t,m=i`
    ${r&&"padding:"+r+p+";"}
    ${n&&"padding-top:"+n+p+";"}
    ${l&&"padding-right:"+l+p+";"}
    ${o&&"padding-bottop:"+o+p+";"}
    ${s&&"padding-left:"+s+p+";"}
    ${c&&"padding-left:"+c+p+"; padding-right:"+c+p+";"}
    ${d&&"padding-top:"+d+p+"; padding-bottop:"+d+p+";"}
  `;return e.data=a.concat(m),e},e=>{const{props:t,data:a}=e,{relative:r,abs:n,fixed:o,sticky:s,t:c,r:d,b:p,l:m,trbl0:u,unit:g}=t,b=l({relative:r,abs:n,fixed:o,sticky:s}),f=i`
    ${b&&"position:"+b+";"}
    ${c&&"top:"+c+g+";"}
    ${d&&"right:"+d+g+";"}
    ${p&&"bottom:"+p+g+";"}
    ${m&&"left:"+m+g+";"}
    ${u&&"top:0; right:0; bottom:0; left:0;"}
  `;return e.data=a.concat(f),e},e=>{const{props:t,data:a}=e,{flexbox:r}=t;if(r){const{wrap:t,value:n,align:l,justify:o}=r,s=i`
      display: flex;
      box-sizing: border-box;
      flex-wrap: ${t?"wrap":"nowrap"};
      /* align */
      ${l&&"align-items:"+l+";"}
      /* justify */
      ${o&&"justify-content:"+o+";"}

      /* center */
      ${"center"===n&&"align-items: center; justify-content: center;"}

      /* la\lar\ar\lr */
      ${("la"===n||"lar"===n||"ar"===n||"lr"===n)&&"width: 100%; flex-direction: row;"}

      /* ta|tab|ab|tb */
      ${("ta"===n||"tab"===n||"ab"===n||"tb"===n)&&"height: 100%; flex-direction: column;"}

      /* la|lar|ta|tab */
      ${("la"===n||"lar"===n||"ta"===n||"tab"===n)&&"& > * { &:nth-child(2) { flex: 1; } }"}

      /* ab|ar */
      ${("ar"===n||"ab"===n)&&"& > * { &:nth-child(1) { flex: 1; } }"}

      /* lr|tb */
      ${("lr"===n||"tb"===n)&&"justify-content: space-between;"}
    `;e.data=a.concat(s)}return e},e=>{const{props:t,data:a}=e,{f:r,unit:n}=t,l=i`
    ${r&&"font-size:"+r+n+";"}
  `;return e.data=a.concat(l),e},e=>{const{props:t,data:a}=e,{c:r}=t,n=i`
    ${r&&"color:"+r+";"}
  `;return e.data=a.concat(n),e},e=>{const{props:t,data:a}=e,{debug:r}=t,n=i`
    ${r&&"border: 1px solid "+(!0===r?"red":r)+";"}
  `;return e.data=a.concat(n),e},e=>{const{props:t,data:a}=e,{bg:r}=t,n=i`
    ${r&&"background:"+r+";"}
  `;return e.data=a.concat(n),e},e=>{const{props:t,data:a}=e,{radius:r,circle:n,round:l,unit:o}=t,s=i`
    ${r&&"border-radius:"+r+o+";"}
    ${n&&"border-radius: 50%;"}
    ${l&&"border-radius: 10000px;"}
  `;return e.data=a.concat(s),e},e=>{const{props:t,data:a}=e,{w:r,wp:n,w1:l,w100:o,unit:s}=t,c=i`
    ${r&&"width:"+r+s+";"}
    ${n&&"width:"+10*n+"%;"}
    ${l&&"width:"+l/10+"%;"}
    ${o&&"width: 100%;"}
  `;return e.data=a.concat(c),e},e=>{const{props:t,data:a}=e,{h:r,hp:n,h100:l,unit:o}=t,s=i`
    ${r&&"height:"+r+o+";"}
    ${n&&"height:"+10*n+"%;"}
    ${l&&"height: 100%;"}
  `;return e.data=a.concat(s),e},e=>{const{props:t,data:a}=e,{wh:r,wh100:n,unit:l}=t;if(r){const t=i`
      ${r&&"width:"+r+l+"; height: "+r+l+";"}
      ${n&&"width: 100%; height: 100%;"}
    `;e.data=a.concat(t)}return e},e=>{const{props:t,data:a}=e,{plugin:r}=t;if(r){const t=i`
      ${r.includes("transform-center")&&"position: absolute;"}
      ${"transform-center:x"===r&&"left: 50%; transform: translateX(-50%);"}
      ${"transform-center:y"===r&&"top: 50%; transform: translateY(-50%);"}
      ${"transform-center:xy"===r&&"left: 50%; top: 50%; transform: translate(-50%, -50%);"}
    `;e.data=a.concat(t)}return e},e=>{const{props:t,data:a}=e,{plugin:r}=t;if(r){const t=i`
      ${r.includes("absolute-center")&&"position: absolute; margin: auto;"}
      ${("absolute-center:x"===r||"absolute-center:xy"===r)&&"left:0; right:0;"}
      ${("absolute-center:y"===r||"absolute-center:xy"===r)&&"top:0; bottom:0;"}
    `;e.data=a.concat(t)}return e},e=>{const{props:t,data:a}=e,{plugin:r}=t;if(r&&r.includes("em-justify-list")){const t=parseInt(r.split(":")[1])||1,n=i`
        margin: -0.5em;
        overflow: hidden;

        > .is-item {
          box-sizing: border-box;
          float: left;
          margin: 0.5em;
          width: calc(${100/t+"%"} - 1em);
        }
      `;e.data=a.concat(n)}return e}];class b extends s.exports.Component{render(){const e=this.props,{className:i,nodeName:l,engine:o,plugins:s}=e,m=((e,n)=>{var i={};for(var l in e)a.call(e,l)&&n.indexOf(l)<0&&(i[l]=e[l]);if(null!=e&&t)for(var l of t(e))n.indexOf(l)<0&&r.call(e,l)&&(i[l]=e[l]);return i})(e,["className","nodeName","engine","plugins"]),u=c.apply(null,g.concat(s))({props:this.props,data:[]}),b=o.styled(l)`
      ${u.data.join("")}
    `;return d.createElement(b,((e,i)=>{for(var l in i||(i={}))a.call(i,l)&&n(e,l,i[l]);if(t)for(var l of t(i))r.call(i,l)&&n(e,l,i[l]);return e})({className:p("styled-box",i)},m))}}b.displayName="styled-box",b.version="__VERSION__",b.propTypes={className:o.string,engine:o.any,unit:o.string,nodeName:o.any,plugins:o.array,plugin:o.string,options:o.any},b.defaultProps={engine:null,unit:"px",nodeName:"div",plugins:[]};Object.assign(b.defaultProps,{engine:{styled:m,css:i},plugins:[e=>{const{props:t,data:a}=e,{plugin:r}=t;if(r&&r.includes("pp")){const t=r.split(":")[1]||"#f60",n=i`
      ${"border:1px solid "+t+"; padding: 10px; background:#eee;"}
    `;e.data=a.concat(n)}return e}]});const f=m.div`
  width: 80%;
  margin: 30px auto 0;
`;var h=e=>d.createElement(f,null,d.createElement(b,{c:"#000",wp:8,auto:!0},d.createElement(b,{radius:8,c:"#fff",bg:"#4cd964",p:10,mb:10,f:14,lh:1.6},"道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。 故常无欲，以观其妙，常有欲，以观其徼。 此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。"),d.createElement(b,{radius:4,c:"#fff",bg:"#007aff",p:10,f:14},"天下皆知美之为美，斯恶已，皆知善之为善，斯不善已。 故有无相生，难易相成，长短相形，高下相倾，音声相和，前后相随。 是以圣人处无为之事，行不言之教，万物作焉而不辞，生而不有，为而不恃，功成而弗居。 夫惟弗居，是以不去。"),d.createElement(b,{mt:10,flexbox:{value:"la"}},d.createElement(b,{p:10,bg:"#f80",debug:"red",className:"is-left"},"Left"),d.createElement(b,{p:10,bg:"#eee",debug:"blue",className:"is-right"},"Auto")),d.createElement(b,{mt:10,flexbox:{value:"lr",align:"center"},debug:"red",h:120},d.createElement(b,{p:10,bg:"#f80",debug:"red",className:"is-left"},"Left"),d.createElement(b,{p:10,bg:"#060",debug:"red",className:"is-left"},"Middle"),d.createElement(b,{p:10,bg:"#eee",debug:"blue",className:"is-right"},"Auto")),d.createElement("h2",null,"Module: transform-center"),d.createElement(b,{debug:"red",wh:200,relative:!0},d.createElement(b,{bg:"#f60",wh:100,circle:!0,plugin:"transform-center:xy"})),d.createElement("h2",null,"Module: em-justify-list"),d.createElement(b,{w:900,auto:!0,debug:!0},d.createElement(b,{plugin:"em-justify-list:5"},d.createElement(b,{bg:"#eee",h:100,className:"is-item"},"item1"),d.createElement(b,{bg:"#f30",h:100,className:"is-item"},"item2"),d.createElement(b,{bg:"#ddd",h:100,className:"is-item"},"item3"),d.createElement(b,{bg:"#030",h:100,className:"is-item"},"item2"),d.createElement(b,{bg:"#ddd",h:100,className:"is-item"},"item3"),d.createElement(b,{bg:"#ccc",h:100,className:"is-item"},"item3"),d.createElement(b,{bg:"#999",h:100,className:"is-item"},"item3"))),d.createElement("h1",null,"Customize plugin:"),d.createElement(b,{plugin:"pp:#999"},"道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。 故常无欲，以观其妙，常有欲，以观其徼。 此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。")));u.render(d.createElement(d.StrictMode,null,d.createElement(h,null)),document.getElementById("root"));

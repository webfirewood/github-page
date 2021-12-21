(this["webpackJsonpreact-master"]=this["webpackJsonpreact-master"]||[]).push([[0],{73:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),r=t(23),o=t.n(r),a=t(10),s=t(20),l=t(6),d=t(9),j=t(13),b=t(14),h=t.n(b),u=t(31),p="https://api.coinpaprika.com/v1";function x(){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(h.a.mark((function n(){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat(p,"/coins")).then((function(n){return n.json()})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function O(n){return fetch("".concat(p,"/tickers/").concat(n)).then((function(n){return n.json()}))}var m,g,v,y,k,w,C,L=t(32),S=t(17),q=Object(S.b)({key:"isDark",default:!1}),_=t(1),M=d.c.div(m||(m=Object(a.a)(["\npadding: 0px 20px;\nmax-width: 480px;\n  margin: 0 auto;\n\n"]))),I=d.c.header(g||(g=Object(a.a)(["\nheight: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),P=d.c.li(v||(v=Object(a.a)([""]))),z=d.c.h1(y||(y=Object(a.a)(["\nbackground-color: ",";\ncolor:",";\n  padding: 20px;\n  border-radius: 15px;\n  margin-bottom: 10px;\n  border: 1px solid white;\n  a {\n    display: flex;\n    align-items: center;\n    transition: color .2s ease-in;\n  }\n  &:hover{\n    a {\n      color:","\n    }\n  }\n"])),(function(n){return n.theme.cardBgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),A=d.c.h1(k||(k=Object(a.a)(["\n  font-size: 48px;\ncolor:","\n"])),(function(n){return n.theme.accentColor})),D=d.c.div(w||(w=Object(a.a)(["\ntext-align: center;\n  display: block;\n"]))),Q=d.c.img(C||(C=Object(a.a)(["\n    width: 35px;\n  height: 35px;\n  margin-right: 10px;\n\n"])));var B,U,H,T=function(){var n=Object(S.d)(q),e=Object(j.useQuery)("allCoins",x),t=e.isLoading,c=e.data;return console.log(c),Object(_.jsxs)(M,{children:[Object(_.jsx)(L.a,{children:Object(_.jsx)("title",{children:"\ucf54\uc778"})}),Object(_.jsxs)(I,{children:[Object(_.jsx)(A,{children:"\ucf54\uc778"}),Object(_.jsx)("button",{onClick:function(){return n((function(n){return!n}))},children:"Toggle Mode"})]}),t?Object(_.jsx)(D,{children:"Loading..."}):Object(_.jsx)(P,{children:null===c||void 0===c?void 0:c.slice(0,100).map((function(n){return Object(_.jsx)(z,{children:Object(_.jsxs)(s.b,{to:"/".concat(n.id),state:{name:n.name},children:[Object(_.jsx)(Q,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})},Y=d.c.div(B||(B=Object(a.a)(["\n  max-width: 480px;\n  margin: 0 auto;\n"]))),E=d.c.div(U||(U=Object(a.a)(["\ndisplay: flex;\n  flex-direction: column;\n"]))),F=d.c.div(H||(H=Object(a.a)(["\n  background-color: ",";\n  border-radius: 15px;\n  padding-left: 10px;\n  padding-top: 10px;\n  height: 30px;\n  width: 100%;\n  margin-top: 20px;\n  color: ",";\n  span {\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto;\n  }\n  \n \n\n"])),(function(n){return n.theme.cardBgColor}),(function(n){return n.theme.textColor}));var W=function(){var n=Object(l.h)().coinId,e=Object(j.useQuery)(["tickers",n],(function(){return O(n)})),t=e.isLoading,c=e.data;return Object(_.jsx)(Y,{children:t?"Loading...":Object(_.jsxs)(E,{children:[Object(_.jsxs)(F,{children:[Object(_.jsx)("span",{children:"Price : "}),Object(_.jsx)("span",{children:null===c||void 0===c?void 0:c.quotes.USD.ath_price})]}),Object(_.jsxs)(F,{children:[Object(_.jsx)("span",{children:"percent_change_7d : "}),Object(_.jsx)("span",{children:null===c||void 0===c?void 0:c.quotes.USD.percent_change_7d})]}),Object(_.jsxs)(F,{children:[Object(_.jsx)("span",{children:"percent_change_30m : "}),Object(_.jsx)("span",{children:null===c||void 0===c?void 0:c.quotes.USD.percent_change_30m})]})]})})},J=t(5),R=t(51),X=t.n(R);var K,N,G,V,Z,$,nn,en,tn,cn=function(n){var e=n.coinId,t=Object(j.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(p,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)})),i=t.isLoading,r=t.data,o=Object(S.c)(q),a=Object(c.useState)([]),s=Object(J.a)(a,2),l=s[0],d=s[1],b=[];return Object(c.useEffect)((function(){null===r||void 0===r||r.forEach((function(n){b.push({x:n.time_close,y:[n.open,n.high,n.low,n.close]})})),d(b)}),[r]),Object(_.jsx)("div",{children:i?"Loading chart...":Object(_.jsx)(X.a,{type:"candlestick",series:[{data:l}],options:{chart:{height:350},theme:{mode:o?"light":"dark"},tooltip:{enabled:!1,x:{show:!1,format:"dd MMM",formatter:void 0},y:{formatter:void 0,title:{formatter:function(n){return n}}},fixed:{enabled:!1}},title:{text:"CandleStick Chart",align:"left"},xaxis:{type:"datetime",labels:{show:!0,rotate:-45,rotateAlways:!1,hideOverlappingLabels:!0,showDuplicates:!1,trim:!1,minHeight:void 0,maxHeight:120,style:{fontSize:"12px"}}},yaxis:{tooltip:{enabled:!1},labels:{show:!0,align:"right",minWidth:0,maxWidth:160,style:{fontSize:"12px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:400,cssClass:"apexcharts-yaxis-label"},offsetX:0,offsetY:0,rotate:0,formatter:function(n){return n.toFixed(2)}}}}})})},rn=d.c.h1(K||(K=Object(a.a)(["\n  font-size: 48px;\n  margin: 0 auto;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),on=d.c.div(N||(N=Object(a.a)(["\ntext-align: center;\n  display: block;\n"]))),an=d.c.div(G||(G=Object(a.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),sn=d.c.header(V||(V=Object(a.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  div:first-child {\n    margin-right: auto;\n  }\n"]))),ln=d.c.div(Z||(Z=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),dn=d.c.div($||($=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),jn=d.c.p(nn||(nn=Object(a.a)(["\n  margin: 20px 0px;\n"]))),bn=d.c.div(en||(en=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),hn=d.c.span(tn||(tn=Object(a.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: ",";\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n  a {\n    display: block;\n  }\n"])),(function(n){return n.theme.cardBgColor}),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var un=function(){var n,e,t=Object(l.h)().coinId,c=Object(l.e)().state,i=Object(l.f)("/:coinId/price"),r=Object(l.f)("/:coinId/chart"),o=Object(j.useQuery)(["info",t],(function(){return function(n){return fetch("".concat(p,"/coins/").concat(n)).then((function(n){return n.json()}))}(t)})),a=o.isLoading,d=o.data,b=Object(j.useQuery)(["tickers",t],(function(){return O(t)})),h=b.isLoading,u=b.data,x=a||h;return Object(_.jsxs)(an,{children:[Object(_.jsx)(L.a,{children:Object(_.jsx)("title",{children:(null===c||void 0===c?void 0:c.name)?c.name:x?"Loading...":null===d||void 0===d?void 0:d.name})}),Object(_.jsxs)(sn,{children:[Object(_.jsx)(s.b,{to:"/",children:"\uc774\uc804"}),Object(_.jsx)(rn,{children:(null===c||void 0===c?void 0:c.name)?c.name:x?"Loading...":null===d||void 0===d?void 0:d.name})]}),x?Object(_.jsx)(on,{children:"Loading..."}):Object(_.jsxs)("div",{children:[Object(_.jsxs)(ln,{children:[Object(_.jsxs)(dn,{children:[Object(_.jsx)("span",{children:"RANK:"}),Object(_.jsx)("span",{children:null===d||void 0===d?void 0:d.rank})]}),Object(_.jsxs)(dn,{children:[Object(_.jsx)("span",{children:"SYMBOL:"}),Object(_.jsx)("span",{children:null===d||void 0===d?void 0:d.symbol})]}),Object(_.jsxs)(dn,{children:[Object(_.jsx)("span",{children:"Price"}),Object(_.jsx)("span",{children:null===u||void 0===u||null===(n=u.quotes)||void 0===n||null===(e=n.USD)||void 0===e?void 0:e.price})]})]}),Object(_.jsx)(jn,{children:null===d||void 0===d?void 0:d.description}),Object(_.jsxs)(ln,{children:[Object(_.jsxs)(dn,{children:["TOTAL SUPPLY:",Object(_.jsx)("span",{children:null===u||void 0===u?void 0:u.total_supply})]}),Object(_.jsxs)(dn,{children:["MAX SUPPLY:",Object(_.jsx)("span",{children:null===u||void 0===u?void 0:u.max_supply})]})]}),Object(_.jsxs)(bn,{children:[Object(_.jsx)(hn,{isActive:null!==r,children:Object(_.jsx)(s.b,{to:"/".concat(t,"/chart"),children:"Chart"})}),Object(_.jsx)(hn,{isActive:null!==i,children:Object(_.jsx)(s.b,{to:"/".concat(t,"/price"),children:"price"})})]}),Object(_.jsxs)(l.c,{children:[Object(_.jsx)(l.a,{path:"chart",element:Object(_.jsx)(cn,{coinId:t})}),Object(_.jsx)(l.a,{path:"price",element:Object(_.jsx)(W,{})})]})]})]})};var pn,xn=function(){return Object(_.jsx)(s.a,{basename:"/cryptotracker",children:Object(_.jsxs)(l.c,{children:[Object(_.jsx)(l.a,{path:"/",element:Object(_.jsx)(T,{})}),Object(_.jsx)(l.a,{path:"/:coinId/*",element:Object(_.jsx)(un,{})})]})})},fn=t(52),On={bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},mn={bgColor:"whitesmoke",textColor:"black",accentColor:"#9c88ff",cardBgColor:"white"},gn=Object(d.b)(pn||(pn=Object(a.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\n\n  /* http://meyerweb.com/eric/tools/css/reset/\n     v5.0.1 | 20191019\n     License: none (public domain)\n  */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, menu, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  main, menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, main, menu, nav, section {\n    display: block;\n  }\n  /* HTML5 hidden-attribute fix for newer browsers */\n  *[hidden] {\n      display: none;\n  }\n  body {\n    line-height: 1;\n  }\n  menu, ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: 'Source Sans Pro', sans-serif;\n    background-color: ",";\n    color:",";\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var vn=function(){var n=Object(S.c)(q);return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(d.a,{theme:n?On:mn,children:[Object(_.jsx)(gn,{}),Object(_.jsx)(xn,{}),Object(_.jsx)(fn.ReactQueryDevtools,{initialIsOpen:!0})]})})},yn=new j.QueryClient;o.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(S.a,{children:Object(_.jsx)(j.QueryClientProvider,{client:yn,children:Object(_.jsx)(vn,{})})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.5912897c.chunk.js.map
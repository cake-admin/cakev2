/*! For license information please see main.64564bee.js.LICENSE.txt */
(()=>{var e={39:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(7749)},219:(e,t,n)=>{"use strict";var r=n(3763),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return r.isMemo(e)?a:l[e.$$typeof]||i}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[r.Memo]=a;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var i=f(n);i&&i!==h&&e(t,i,r)}var a=u(n);d&&(a=a.concat(d(n)));for(var l=s(t),m=s(n),g=0;g<a.length;++g){var x=a[g];if(!o[x]&&(!r||!r[x])&&(!m||!m[x])&&(!l||!l[x])){var v=p(n,x);try{c(t,x,v)}catch(y){}}}}return t}},457:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A});var r=n(7868)},528:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler");Symbol.for("react.provider");var l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.for("react.view_transition"),m=Symbol.for("react.client.reference");function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case a:case o:case u:case d:case h:return e;default:switch(e=e&&e.$$typeof){case s:case c:case f:case p:case l:return e;default:return t}}case r:return t}}}t.vM=c,t.lD=p},579:(e,t,n)=>{"use strict";e.exports=n(1153)},1132:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download")},1153:(e,t,n)=>{"use strict";var r=n(5043),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:l.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},1337:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},1528:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"}),"Error")},1602:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalStyles:()=>qe,StyledEngineProvider:()=>Xe,ThemeContext:()=>Me,css:()=>Ve,default:()=>Qe,internal_processStyles:()=>Je,internal_serializeStyles:()=>et,keyframes:()=>Ge});var r=n(8168),i=n(5043),o=n.t(i,2);var a=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),l=Math.abs,s=String.fromCharCode,c=Object.assign;function u(e){return e.trim()}function d(e,t,n){return e.replace(t,n)}function p(e,t){return e.indexOf(t)}function f(e,t){return 0|e.charCodeAt(t)}function h(e,t,n){return e.slice(t,n)}function m(e){return e.length}function g(e){return e.length}function x(e,t){return t.push(e),e}var v=1,y=1,b=0,w=0,k=0,j="";function S(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:v,column:y,length:a,return:""}}function A(e,t){return c(S("",null,null,"",null,null,0),e,{length:-e.length},t)}function E(){return k=w>0?f(j,--w):0,y--,10===k&&(y=1,v--),k}function C(){return k=w<b?f(j,w++):0,y++,10===k&&(y=1,v++),k}function F(){return f(j,w)}function D(){return w}function z(e,t){return h(j,e,t)}function M(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I(e){return v=y=1,b=m(j=e),w=0,[]}function $(e){return j="",e}function L(e){return u(z(w-1,_(91===e?e+2:40===e?e+1:e)))}function T(e){for(;(k=F())&&k<33;)C();return M(e)>2||M(k)>3?"":" "}function R(e,t){for(;--t&&C()&&!(k<48||k>102||k>57&&k<65||k>70&&k<97););return z(e,D()+(t<6&&32==F()&&32==C()))}function _(e){for(;C();)switch(k){case e:return w;case 34:case 39:34!==e&&39!==e&&_(k);break;case 40:41===e&&_(e);break;case 92:C()}return w}function O(e,t){for(;C()&&e+k!==57&&(e+k!==84||47!==F()););return"/*"+z(t,w-1)+"*"+s(47===e?e:C())}function P(e){for(;!M(F());)C();return z(e,w)}var N="-ms-",B="-moz-",U="-webkit-",W="comm",H="rule",V="decl",G="@keyframes";function K(e,t){for(var n="",r=g(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Y(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case V:return e.return=e.return||e.value;case W:return"";case G:return e.return=e.value+"{"+K(e.children,r)+"}";case H:e.value=e.props.join(",")}return m(n=K(e.children,r))?e.return=e.value+"{"+n+"}":""}function X(e){return $(q("",null,null,null,[""],e=I(e),0,[0],e))}function q(e,t,n,r,i,o,a,l,c){for(var u=0,h=0,g=a,v=0,y=0,b=0,w=1,k=1,j=1,S=0,A="",z=i,M=o,I=r,$=A;k;)switch(b=S,S=C()){case 40:if(108!=b&&58==f($,g-1)){-1!=p($+=d(L(S),"&","&\f"),"&\f")&&(j=-1);break}case 34:case 39:case 91:$+=L(S);break;case 9:case 10:case 13:case 32:$+=T(b);break;case 92:$+=R(D()-1,7);continue;case 47:switch(F()){case 42:case 47:x(J(O(C(),D()),t,n),c);break;default:$+="/"}break;case 123*w:l[u++]=m($)*j;case 125*w:case 59:case 0:switch(S){case 0:case 125:k=0;case 59+h:-1==j&&($=d($,/\f/g,"")),y>0&&m($)-g&&x(y>32?Z($+";",r,n,g-1):Z(d($," ","")+";",r,n,g-2),c);break;case 59:$+=";";default:if(x(I=Q($,t,n,u,h,i,l,A,z=[],M=[],g),o),123===S)if(0===h)q($,t,I,I,z,o,g,l,M);else switch(99===v&&110===f($,3)?100:v){case 100:case 108:case 109:case 115:q(e,I,I,r&&x(Q(e,I,I,0,0,i,l,A,i,z=[],g),M),i,M,g,l,r?z:M);break;default:q($,I,I,I,[""],M,0,l,M)}}u=h=y=0,w=j=1,A=$="",g=a;break;case 58:g=1+m($),y=b;default:if(w<1)if(123==S)--w;else if(125==S&&0==w++&&125==E())continue;switch($+=s(S),S*w){case 38:j=h>0?1:($+="\f",-1);break;case 44:l[u++]=(m($)-1)*j,j=1;break;case 64:45===F()&&($+=L(C())),v=F(),h=g=m(A=$+=P(D())),S++;break;case 45:45===b&&2==m($)&&(w=0)}}return o}function Q(e,t,n,r,i,o,a,s,c,p,f){for(var m=i-1,x=0===i?o:[""],v=g(x),y=0,b=0,w=0;y<r;++y)for(var k=0,j=h(e,m+1,m=l(b=a[y])),A=e;k<v;++k)(A=u(b>0?x[k]+" "+j:d(j,/&\f/g,x[k])))&&(c[w++]=A);return S(e,t,n,0===i?H:s,c,p,f)}function J(e,t,n){return S(e,t,n,W,s(k),h(e,2,-2),0)}function Z(e,t,n,r){return S(e,t,n,V,h(e,0,r),h(e,r+1,-1),r)}var ee=function(e,t,n){for(var r=0,i=0;r=i,i=F(),38===r&&12===i&&(t[n]=1),!M(i);)C();return z(e,w)},te=function(e,t){return $(function(e,t){var n=-1,r=44;do{switch(M(r)){case 0:38===r&&12===F()&&(t[n]=1),e[n]+=ee(w-1,t,n);break;case 2:e[n]+=L(r);break;case 4:if(44===r){e[++n]=58===F()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=s(r)}}while(r=C());return e}(I(e),t))},ne=new WeakMap,re=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ne.get(n))&&!r){ne.set(e,!0);for(var i=[],o=te(t,i),a=n.props,l=0,s=0;l<o.length;l++)for(var c=0;c<a.length;c++,s++)e.props[s]=i[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},ie=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function oe(e,t){switch(function(e,t){return 45^f(e,0)?(((t<<2^f(e,0))<<2^f(e,1))<<2^f(e,2))<<2^f(e,3):0}(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+B+e+N+e+e;case 6828:case 4268:return U+e+N+e+e;case 6165:return U+e+N+"flex-"+e+e;case 5187:return U+e+d(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return U+e+N+"flex-item-"+d(e,/flex-|-self/,"")+e;case 4675:return U+e+N+"flex-line-pack"+d(e,/align-content|flex-|-self/,"")+e;case 5548:return U+e+N+d(e,"shrink","negative")+e;case 5292:return U+e+N+d(e,"basis","preferred-size")+e;case 6060:return U+"box-"+d(e,"-grow","")+U+e+N+d(e,"grow","positive")+e;case 4554:return U+d(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return d(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(m(e)-1-t>6)switch(f(e,t+1)){case 109:if(45!==f(e,t+4))break;case 102:return d(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+B+(108==f(e,t+3)?"$3":"$2-$3"))+e;case 115:return~p(e,"stretch")?oe(d(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==f(e,t+1))break;case 6444:switch(f(e,m(e)-3-(~p(e,"!important")&&10))){case 107:return d(e,":",":"+U)+e;case 101:return d(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+U+(45===f(e,14)?"inline-":"")+"box$3$1"+U+"$2$3$1"+N+"$2box$3")+e}break;case 5936:switch(f(e,t+11)){case 114:return U+e+N+d(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+N+d(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+N+d(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return U+e+N+e+e}return e}var ae=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case V:e.return=oe(e.value,e.length);break;case G:return K([A(e,{value:d(e.value,"@","@"+U)})],r);case H:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return K([A(e,{props:[d(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return K([A(e,{props:[d(t,/:(plac\w+)/,":"+U+"input-$1")]}),A(e,{props:[d(t,/:(plac\w+)/,":-moz-$1")]}),A(e,{props:[d(t,/:(plac\w+)/,N+"input-$1")]})],r)}return""})}}],le=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var r,i,o=e.stylisPlugins||ae,l={},s=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)l[t[n]]=!0;s.push(e)});var c,u,d=[Y,(u=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],p=function(e){var t=g(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}([re,ie].concat(o,d));i=function(e,t,n,r){c=n,K(X(e?e+"{"+t.styles+"}":t.styles),p),r&&(f.inserted[t.name]=!0)};var f={key:t,sheet:new a({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:i};return f.sheet.hydrate(s),f};function se(e,t,n){var r="";return n.split(" ").forEach(function(n){void 0!==e[n]?t.push(e[n]+";"):n&&(r+=n+" ")}),r}var ce=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},ue=function(e,t,n){ce(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do{e.insert(t===i?"."+r:"",i,e.sheet,!0),i=i.next}while(void 0!==i)}};var de={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function pe(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var fe=!1,he=/[A-Z]|^ms/g,me=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ge=function(e){return 45===e.charCodeAt(1)},xe=function(e){return null!=e&&"boolean"!==typeof e},ve=pe(function(e){return ge(e)?e:e.replace(he,"-$&").toLowerCase()}),ye=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(me,function(e,t,n){return ke={name:t,styles:n,next:ke},t})}return 1===de[e]||ge(e)||"number"!==typeof t||0===t?t:t+"px"},be="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function we(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var i=n;if(1===i.anim)return ke={name:i.name,styles:i.styles,next:ke},i.name;var o=n;if(void 0!==o.styles){var a=o.next;if(void 0!==a)for(;void 0!==a;)ke={name:a.name,styles:a.styles,next:ke},a=a.next;return o.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=we(e,t,n[i])+";";else for(var o in n){var a=n[o];if("object"!==typeof a){var l=a;null!=t&&void 0!==t[l]?r+=o+"{"+t[l]+"}":xe(l)&&(r+=ve(o)+":"+ye(o,l)+";")}else{if("NO_COMPONENT_SELECTOR"===o&&fe)throw new Error(be);if(!Array.isArray(a)||"string"!==typeof a[0]||null!=t&&void 0!==t[a[0]]){var s=we(e,t,a);switch(o){case"animation":case"animationName":r+=ve(o)+":"+s+";";break;default:r+=o+"{"+s+"}"}}else for(var c=0;c<a.length;c++)xe(a[c])&&(r+=ve(o)+":"+ye(o,a[c])+";")}}return r}(e,t,n);case"function":if(void 0!==e){var l=ke,s=n(e);return ke=l,we(e,t,s)}}var c=n;if(null==t)return c;var u=t[c];return void 0!==u?u:c}var ke,je=/label:\s*([^\s;{]+)\s*(;|$)/g;function Se(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,i="";ke=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,i+=we(n,t,o)):i+=o[0];for(var a=1;a<e.length;a++){if(i+=we(n,t,e[a]),r)i+=o[a]}je.lastIndex=0;for(var l,s="";null!==(l=je.exec(i));)s+="-"+l[1];var c=function(e){for(var t,n=0,r=0,i=e.length;i>=4;++r,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(i){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(i)+s;return{name:c,styles:i,next:ke}}var Ae=!!o.useInsertionEffect&&o.useInsertionEffect,Ee=Ae||function(e){return e()},Ce=Ae||i.useLayoutEffect,Fe=i.createContext("undefined"!==typeof HTMLElement?le({key:"css"}):null),De=Fe.Provider,ze=function(e){return(0,i.forwardRef)(function(t,n){var r=(0,i.useContext)(Fe);return e(t,r,n)})},Me=i.createContext({});var Ie={}.hasOwnProperty,$e="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Le=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return ce(t,n,r),Ee(function(){return ue(t,n,r)}),null},Te=ze(function(e,t,n){var r=e.css;"string"===typeof r&&void 0!==t.registered[r]&&(r=t.registered[r]);var o=e[$e],a=[r],l="";"string"===typeof e.className?l=se(t.registered,a,e.className):null!=e.className&&(l=e.className+" ");var s=Se(a,void 0,i.useContext(Me));l+=t.key+"-"+s.name;var c={};for(var u in e)Ie.call(e,u)&&"css"!==u&&u!==$e&&(c[u]=e[u]);return c.className=l,n&&(c.ref=n),i.createElement(i.Fragment,null,i.createElement(Le,{cache:t,serialized:s,isStringTag:"string"===typeof o}),i.createElement(o,c))}),Re=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_e=pe(function(e){return Re.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),Oe=function(e){return"theme"!==e},Pe=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?_e:Oe},Ne=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!==typeof r&&n&&(r=e.__emotion_forwardProp),r},Be=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return ce(t,n,r),Ee(function(){return ue(t,n,r)}),null},Ue=function e(t,n){var o,a,l=t.__emotion_real===t,s=l&&t.__emotion_base||t;void 0!==n&&(o=n.label,a=n.target);var c=Ne(t,n,l),u=c||Pe(s),d=!u("as");return function(){var p=arguments,f=l&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==o&&f.push("label:"+o+";"),null==p[0]||void 0===p[0].raw)f.push.apply(f,p);else{var h=p[0];f.push(h[0]);for(var m=p.length,g=1;g<m;g++)f.push(p[g],h[g])}var x=ze(function(e,t,n){var r=d&&e.as||s,o="",l=[],p=e;if(null==e.theme){for(var h in p={},e)p[h]=e[h];p.theme=i.useContext(Me)}"string"===typeof e.className?o=se(t.registered,l,e.className):null!=e.className&&(o=e.className+" ");var m=Se(f.concat(l),t.registered,p);o+=t.key+"-"+m.name,void 0!==a&&(o+=" "+a);var g=d&&void 0===c?Pe(r):u,x={};for(var v in e)d&&"as"===v||g(v)&&(x[v]=e[v]);return x.className=o,n&&(x.ref=n),i.createElement(i.Fragment,null,i.createElement(Be,{cache:t,serialized:m,isStringTag:"string"===typeof r}),i.createElement(r,x))});return x.displayName=void 0!==o?o:"Styled("+("string"===typeof s?s:s.displayName||s.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=s,x.__emotion_styles=f,x.__emotion_forwardProp=c,Object.defineProperty(x,"toString",{value:function(){return"."+a}}),x.withComponent=function(t,i){return e(t,(0,r.A)({},n,i,{shouldForwardProp:Ne(x,i,!0)})).apply(void 0,f)},x}}.bind(null);["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){Ue[e]=Ue(e)});n(219);var We=function(e,t){var n=arguments;if(null==t||!Ie.call(t,"css"))return i.createElement.apply(void 0,n);var r=n.length,o=new Array(r);o[0]=Te,o[1]=function(e,t){var n={};for(var r in t)Ie.call(t,r)&&(n[r]=t[r]);return n[$e]=e,n}(e,t);for(var a=2;a<r;a++)o[a]=n[a];return i.createElement.apply(null,o)};!function(e){var t;t||(t=e.JSX||(e.JSX={}))}(We||(We={}));var He=ze(function(e,t){var n=Se([e.styles],void 0,i.useContext(Me)),r=i.useRef();return Ce(function(){var e=t.key+"-global",i=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),o=!1,a=document.querySelector('style[data-emotion="'+e+" "+n.name+'"]');return t.sheet.tags.length&&(i.before=t.sheet.tags[0]),null!==a&&(o=!0,a.setAttribute("data-emotion",e),i.hydrate([a])),r.current=[i,o],function(){i.flush()}},[t]),Ce(function(){var e=r.current,i=e[0];if(e[1])e[1]=!1;else{if(void 0!==n.next&&ue(t,n.next,!0),i.tags.length){var o=i.tags[i.tags.length-1].nextElementSibling;i.before=o,i.flush()}t.insert("",n,i,!1)}},[t,n.name]),null});function Ve(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Se(t)}function Ge(){var e=Ve.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Ke=n(579);const Ye=new Map;function Xe(e){const{injectFirst:t,enableCssLayer:n,children:r}=e,o=i.useMemo(()=>{const e=`${t}-${n}`;if("object"===typeof document&&Ye.has(e))return Ye.get(e);const r=function(e,t){const n=le({key:"css",prepend:e});if(t){const e=n.insert;n.insert=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n[1].styles.match(/^@layer\s+[^{]*$/)||(n[1].styles=`@layer mui {${n[1].styles}}`),e(...n)}}return n}(t,n);return Ye.set(e,r),r},[t,n]);return t||n?(0,Ke.jsx)(De,{value:o,children:r}):r}function qe(e){const{styles:t,defaultTheme:n={}}=e,r="function"===typeof t?e=>{return t(void 0===(r=e)||null===r||0===Object.keys(r).length?n:e);var r}:t;return(0,Ke.jsx)(He,{styles:r})}function Qe(e,t){return Ue(e,t)}const Je=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},Ze=[];function et(e){return Ze[0]=e,Se(Ze)}},1707:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight")},2177:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person")},2577:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings")},2730:(e,t,n)=>{"use strict";var r=n(5043),i=n(8853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function m(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function y(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(h,e)||!d.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),C=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),I=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var $=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var L=Symbol.iterator;function T(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=L&&e[L]||e["@@iterator"])?e:null}var R,_=Object.assign;function O(e){if(void 0===R)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);R=t&&t[1]||""}return"\n"+R+e}var P=!1;function N(e,t){if(!e||P)return"";P=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(1!==a||1!==l)do{if(a--,0>--l||i[a]!==o[l]){var s="\n"+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=a&&0<=l);break}}}finally{P=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?O(e):""}function B(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=N(e.type,!1);case 11:return e=N(e.type.render,!1);case 1:return e=N(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case j:return"Fragment";case k:return"Portal";case A:return"Profiler";case S:return"StrictMode";case D:return"Suspense";case z:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case C:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case F:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case M:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case I:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function G(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function X(e,t){var n=t.checked;return _({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){Q(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return _({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function oe(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ue(e,t)})}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(fe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]})});var xe=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,je=null,Se=null;function Ae(e){if(e=yi(e)){if("function"!==typeof ke)throw Error(o(280));var t=e.stateNode;t&&(t=wi(t),ke(e.stateNode,e.type,t))}}function Ee(e){je?Se?Se.push(e):Se=[e]:je=e}function Ce(){if(je){var e=je,t=Se;if(Se=je=null,Ae(e),t)for(e=0;e<t.length;e++)Ae(t[e])}}function Fe(e,t){return e(t)}function De(){}var ze=!1;function Me(e,t,n){if(ze)return e(t,n);ze=!0;try{return Fe(e,t,n)}finally{ze=!1,(null!==je||null!==Se)&&(De(),Ce())}}function Ie(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var $e=!1;if(u)try{var Le={};Object.defineProperty(Le,"passive",{get:function(){$e=!0}}),window.addEventListener("test",Le,Le),window.removeEventListener("test",Le,Le)}catch(ue){$e=!1}function Te(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Re=!1,_e=null,Oe=!1,Pe=null,Ne={onError:function(e){Re=!0,_e=e}};function Be(e,t,n,r,i,o,a,l,s){Re=!1,_e=null,Te.apply(Ne,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Ue(e)!==e)throw Error(o(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return He(i),e;if(a===r)return He(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ge(e):null}function Ge(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ge(e);if(null!==t)return t;e=e.sibling}return null}var Ke=i.unstable_scheduleCallback,Ye=i.unstable_cancelCallback,Xe=i.unstable_shouldYield,qe=i.unstable_requestPaint,Qe=i.unstable_now,Je=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var l=a&~i;0!==l?r=dt(l):0!==(o&=a)&&(r=dt(o))}else 0!==(a=n&~i)?r=dt(a):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var yt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,jt,St,At,Et=!1,Ct=[],Ft=null,Dt=null,zt=null,Mt=new Map,It=new Map,$t=[],Lt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tt(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Mt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":It.delete(t.pointerId)}}function Rt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=yi(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function _t(e){var t=vi(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void At(e.priority,function(){jt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Ot(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yi(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Pt(e,t,n){Ot(e)&&n.delete(t)}function Nt(){Et=!1,null!==Ft&&Ot(Ft)&&(Ft=null),null!==Dt&&Ot(Dt)&&(Dt=null),null!==zt&&Ot(zt)&&(zt=null),Mt.forEach(Pt),It.forEach(Pt)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Nt)))}function Ut(e){function t(t){return Bt(t,e)}if(0<Ct.length){Bt(Ct[0],e);for(var n=1;n<Ct.length;n++){var r=Ct[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Ft&&Bt(Ft,e),null!==Dt&&Bt(Dt,e),null!==zt&&Bt(zt,e),Mt.forEach(t),It.forEach(t),n=0;n<$t.length;n++)(r=$t[n]).blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&null===(n=$t[0]).blockedOn;)_t(n),null===n.blockedOn&&$t.shift()}var Wt=b.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var i=yt,o=Wt.transition;Wt.transition=null;try{yt=1,Kt(e,t,n,r)}finally{yt=i,Wt.transition=o}}function Gt(e,t,n,r){var i=yt,o=Wt.transition;Wt.transition=null;try{yt=4,Kt(e,t,n,r)}finally{yt=i,Wt.transition=o}}function Kt(e,t,n,r){if(Ht){var i=Xt(e,t,n,r);if(null===i)Hr(e,t,r,Yt,n),Tt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Ft=Rt(Ft,e,t,n,r,i),!0;case"dragenter":return Dt=Rt(Dt,e,t,n,r,i),!0;case"mouseover":return zt=Rt(zt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mt.set(o,Rt(Mt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,It.set(o,Rt(It.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Tt(e,r),4&t&&-1<Lt.indexOf(e)){for(;null!==i;){var o=yi(i);if(null!==o&&wt(o),null===(o=Xt(e,t,n,r))&&Hr(e,t,r,Yt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Yt=null;function Xt(e,t,n,r){if(Yt=null,null!==(e=vi(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Qt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,i="value"in Qt?Qt.value:Qt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=_({},cn,{view:0,detail:0}),pn=on(dn),fn=_({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:An,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=on(fn),mn=on(_({},fn,{dataTransfer:0})),gn=on(_({},dn,{relatedTarget:0})),xn=on(_({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=_({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=on(vn),bn=on(_({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=jn[e])&&!!t[e]}function An(){return Sn}var En=_({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:An,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cn=on(En),Fn=on(_({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Dn=on(_({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:An})),zn=on(_({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Mn=_({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),In=on(Mn),$n=[9,13,27,32],Ln=u&&"CompositionEvent"in window,Tn=null;u&&"documentMode"in document&&(Tn=document.documentMode);var Rn=u&&"TextEvent"in window&&!Tn,_n=u&&(!Ln||Tn&&8<Tn&&11>=Tn),On=String.fromCharCode(32),Pn=!1;function Nn(e,t){switch(e){case"keyup":return-1!==$n.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Vn(e,t,n,r){Ee(r),0<(t=Gr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Kn=null;function Yn(e){Or(e,0)}function Xn(e){if(K(bi(e)))return e}function qn(e,t){if("change"===e)return t}var Qn=!1;if(u){var Jn;if(u){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Qn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Gn&&(Gn.detachEvent("onpropertychange",nr),Kn=Gn=null)}function nr(e){if("value"===e.propertyName&&Xn(Kn)){var t=[];Vn(t,Kn,e,we(e)),Me(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Gn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Xn(Kn)}function or(e,t){if("click"===e)return Xn(t)}function ar(e,t){if("input"===e||"change"===e)return Xn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!lr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ur(n,o);var a=ur(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,xr=null,vr=null,yr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==gr||gr!==Y(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&sr(vr,r)||(vr=r,0<(r=Gr(xr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},jr={},Sr={};function Ar(e){if(jr[e])return jr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Sr)return jr[e]=n[t];return e}u&&(Sr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Er=Ar("animationend"),Cr=Ar("animationiteration"),Fr=Ar("animationstart"),Dr=Ar("transitionend"),zr=new Map,Mr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(e,t){zr.set(e,t),s(t,[e])}for(var $r=0;$r<Mr.length;$r++){var Lr=Mr[$r];Ir(Lr.toLowerCase(),"on"+(Lr[0].toUpperCase()+Lr.slice(1)))}Ir(Er,"onAnimationEnd"),Ir(Cr,"onAnimationIteration"),Ir(Fr,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(Dr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function _r(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,l,s,c){if(Be.apply(this,arguments),Re){if(!Re)throw Error(o(198));var u=_e;Re=!1,_e=null,Oe||(Oe=!0,Pe=u)}}(r,t,void 0,e),e.currentTarget=null}function Or(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;_r(i,l,c),o=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;_r(i,l,c),o=s}}}if(Oe)throw e=Pe,Oe=!1,Pe=null,e}function Pr(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Nr(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Br]){e[Br]=!0,a.forEach(function(t){"selectionchange"!==t&&(Rr.has(t)||Nr(t,!1,e),Nr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Nr("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(qt(t)){case 1:var i=Vt;break;case 4:i=Gt;break;default:i=Kt}n=i.bind(null,t,n,e),i=void 0,!$e||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===i||8===l.nodeType&&l.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var s=a.tag;if((3===s||4===s)&&((s=a.stateNode.containerInfo)===i||8===s.nodeType&&s.parentNode===i))return;a=a.return}for(;null!==l;){if(null===(a=vi(l)))return;if(5===(s=a.tag)||6===s){r=o=a;continue e}l=l.parentNode}}r=r.return}Me(function(){var r=o,i=we(n),a=[];e:{var l=zr.get(e);if(void 0!==l){var s=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Cn;break;case"focusin":c="focus",s=gn;break;case"focusout":c="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Dn;break;case Er:case Cr:case Fr:s=xn;break;case Dr:s=zn;break;case"scroll":s=pn;break;case"wheel":s=In;break;case"copy":case"cut":case"paste":s=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Fn}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==l?l+"Capture":null:l;u=[];for(var f,h=r;null!==h;){var m=(f=h).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==p&&(null!=(m=Ie(h,p))&&u.push(Vr(h,m,f)))),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,n,i),a.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!vi(c)&&!c[hi])&&(s||l)&&(l=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?vi(c):null)&&(c!==(d=Ue(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(u=hn,m="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=Fn,m="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==s?l:bi(s),f=null==c?l:bi(c),(l=new u(m,h+"leave",s,n,i)).target=d,l.relatedTarget=f,m=null,vi(i)===r&&((u=new u(p,h+"enter",c,n,i)).target=f,u.relatedTarget=d,m=u),d=m,s&&c)e:{for(p=c,h=0,f=u=s;f;f=Kr(f))h++;for(f=0,m=p;m;m=Kr(m))f++;for(;0<h-f;)u=Kr(u),h--;for(;0<f-h;)p=Kr(p),f--;for(;h--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kr(u),p=Kr(p)}u=null}else u=null;null!==s&&Yr(a,l,s,u,!1),null!==c&&null!==d&&Yr(a,d,c,u,!0)}if("select"===(s=(l=r?bi(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=qn;else if(Hn(l))if(Qn)g=ar;else{g=ir;var x=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=or);switch(g&&(g=g(e,r))?Vn(a,g,n,i):(x&&x(e,l,r),"focusout"===e&&(x=l._wrapperState)&&x.controlled&&"number"===l.type&&ee(l,"number",l.value)),x=r?bi(r):window,e){case"focusin":(Hn(x)||"true"===x.contentEditable)&&(gr=x,xr=r,vr=null);break;case"focusout":vr=xr=gr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,br(a,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(a,n,i)}var v;if(Ln)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Un?Nn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(_n&&"ko"!==n.locale&&(Un||"onCompositionStart"!==y?"onCompositionEnd"===y&&Un&&(v=en()):(Jt="value"in(Qt=i)?Qt.value:Qt.textContent,Un=!0)),0<(x=Gr(r,y)).length&&(y=new bn(y,e,null,n,i),a.push({event:y,listeners:x}),v?y.data=v:null!==(v=Bn(n))&&(y.data=v))),(v=Rn?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(Pn=!0,On);case"textInput":return(e=t.data)===On&&Pn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!Ln&&Nn(e,t)?(e=en(),Zt=Jt=Qt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _n&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Gr(r,"onBeforeInput")).length&&(i=new bn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=v))}Or(a,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Ie(e,n))&&r.unshift(Vr(e,o,i)),null!=(o=Ie(e,t))&&r.push(Vr(e,o,i))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,i?null!=(s=Ie(n,o))&&a.unshift(Vr(n,s,l)):i||null!=(s=Ie(n,o))&&a.push(Vr(n,s,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Xr=/\r\n?/g,qr=/\u0000|\uFFFD/g;function Qr(e){return("string"===typeof e?e:""+e).replace(Xr,"\n").replace(qr,"")}function Jr(e,t,n){if(t=Qr(t),Qr(e)!==t&&n)throw Error(o(425))}function Zr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(li)}:ri;function li(e){setTimeout(function(){throw e})}function si(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Ut(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),pi="__reactFiber$"+di,fi="__reactProps$"+di,hi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,xi="__reactHandles$"+di;function vi(e){var t=e[pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[pi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ui(e);null!==e;){if(n=e[pi])return n;e=ui(e)}return t}n=(e=n).parentNode}return null}function yi(e){return!(e=e[pi]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wi(e){return e[fi]||null}var ki=[],ji=-1;function Si(e){return{current:e}}function Ai(e){0>ji||(e.current=ki[ji],ki[ji]=null,ji--)}function Ei(e,t){ji++,ki[ji]=e.current,e.current=t}var Ci={},Fi=Si(Ci),Di=Si(!1),zi=Ci;function Mi(e,t){var n=e.type.contextTypes;if(!n)return Ci;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ii(e){return null!==(e=e.childContextTypes)&&void 0!==e}function $i(){Ai(Di),Ai(Fi)}function Li(e,t,n){if(Fi.current!==Ci)throw Error(o(168));Ei(Fi,t),Ei(Di,n)}function Ti(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,W(e)||"Unknown",i));return _({},n,r)}function Ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ci,zi=Fi.current,Ei(Fi,e),Ei(Di,Di.current),!0}function _i(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Ti(e,t,zi),r.__reactInternalMemoizedMergedChildContext=e,Ai(Di),Ai(Fi),Ei(Fi,e)):Ai(Di),Ei(Di,n)}var Oi=null,Pi=!1,Ni=!1;function Bi(e){null===Oi?Oi=[e]:Oi.push(e)}function Ui(){if(!Ni&&null!==Oi){Ni=!0;var e=0,t=yt;try{var n=Oi;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Oi=null,Pi=!1}catch(i){throw null!==Oi&&(Oi=Oi.slice(e+1)),Ke(Ze,Ui),i}finally{yt=t,Ni=!1}}return null}var Wi=[],Hi=0,Vi=null,Gi=0,Ki=[],Yi=0,Xi=null,qi=1,Qi="";function Ji(e,t){Wi[Hi++]=Gi,Wi[Hi++]=Vi,Vi=e,Gi=t}function Zi(e,t,n){Ki[Yi++]=qi,Ki[Yi++]=Qi,Ki[Yi++]=Xi,Xi=e;var r=qi;e=Qi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,qi=1<<32-at(t)+i|n<<i|r,Qi=o+e}else qi=1<<o|n<<i|r,Qi=e}function eo(e){null!==e.return&&(Ji(e,1),Zi(e,1,0))}function to(e){for(;e===Vi;)Vi=Wi[--Hi],Wi[Hi]=null,Gi=Wi[--Hi],Wi[Hi]=null;for(;e===Xi;)Xi=Ki[--Yi],Ki[Yi]=null,Qi=Ki[--Yi],Ki[Yi]=null,qi=Ki[--Yi],Ki[Yi]=null}var no=null,ro=null,io=!1,oo=null;function ao(e,t){var n=Mc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Xi?{id:qi,overflow:Qi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Mc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function co(e){if(io){var t=ro;if(t){var n=t;if(!lo(e,t)){if(so(e))throw Error(o(418));t=ci(n.nextSibling);var r=no;t&&lo(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function po(e){if(e!==no)return!1;if(!io)return uo(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw fo(),Error(o(418));for(;t;)ao(e,t),t=ci(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ci(e.stateNode.nextSibling):null;return!0}function fo(){for(var e=ro;e;)e=ci(e.nextSibling)}function ho(){ro=no=null,io=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=b.ReactCurrentBatchConfig;function xo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yo(e){return(0,e._init)(e._payload)}function bo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=$c(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=_c(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===j?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===I&&yo(o)===t.type)?((r=i(t,n.props)).ref=xo(e,t,n),r.return=e,r):((r=Lc(n.type,n.key,n.props,null,e.mode,r)).ref=xo(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Oc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Tc(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=_c(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Lc(t.type,t.key,t.props,null,e.mode,n)).ref=xo(e,null,t),n.return=e,n;case k:return(t=Oc(t,e.mode,n)).return=e,t;case I:return p(e,(0,t._init)(t._payload),n)}if(te(t)||T(t))return(t=Tc(t,e.mode,n,null)).return=e,t;vo(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case k:return n.key===i?u(e,t,n,r):null;case I:return f(e,t,(i=n._init)(n._payload),r)}if(te(n)||T(n))return null!==i?null:d(e,t,n,r,null);vo(e,n)}return null}function h(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case I:return h(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||T(r))return d(t,e=e.get(n)||null,r,i,null);vo(t,r)}return null}function m(i,o,l,s){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var x=f(i,d,l[m],s);if(null===x){null===d&&(d=g);break}e&&d&&null===x.alternate&&t(i,d),o=a(x,o,m),null===u?c=x:u.sibling=x,u=x,d=g}if(m===l.length)return n(i,d),io&&Ji(i,m),c;if(null===d){for(;m<l.length;m++)null!==(d=p(i,l[m],s))&&(o=a(d,o,m),null===u?c=d:u.sibling=d,u=d);return io&&Ji(i,m),c}for(d=r(i,d);m<l.length;m++)null!==(g=h(d,i,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),io&&Ji(i,m),c}function g(i,l,s,c){var u=T(s);if("function"!==typeof u)throw Error(o(150));if(null==(s=u.call(s)))throw Error(o(151));for(var d=u=null,m=l,g=l=0,x=null,v=s.next();null!==m&&!v.done;g++,v=s.next()){m.index>g?(x=m,m=null):x=m.sibling;var y=f(i,m,v.value,c);if(null===y){null===m&&(m=x);break}e&&m&&null===y.alternate&&t(i,m),l=a(y,l,g),null===d?u=y:d.sibling=y,d=y,m=x}if(v.done)return n(i,m),io&&Ji(i,g),u;if(null===m){for(;!v.done;g++,v=s.next())null!==(v=p(i,v.value,c))&&(l=a(v,l,g),null===d?u=v:d.sibling=v,d=v);return io&&Ji(i,g),u}for(m=r(i,m);!v.done;g++,v=s.next())null!==(v=h(m,i,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),l=a(v,l,g),null===d?u=v:d.sibling=v,d=v);return e&&m.forEach(function(e){return t(i,e)}),io&&Ji(i,g),u}return function e(r,o,a,s){if("object"===typeof a&&null!==a&&a.type===j&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var c=a.key,u=o;null!==u;){if(u.key===c){if((c=a.type)===j){if(7===u.tag){n(r,u.sibling),(o=i(u,a.props.children)).return=r,r=o;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===I&&yo(c)===u.type){n(r,u.sibling),(o=i(u,a.props)).ref=xo(r,u,a),o.return=r,r=o;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===j?((o=Tc(a.props.children,r.mode,s,a.key)).return=r,r=o):((s=Lc(a.type,a.key,a.props,null,r.mode,s)).ref=xo(r,o,a),s.return=r,r=s)}return l(r);case k:e:{for(u=a.key;null!==o;){if(o.key===u){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Oc(a,r.mode,s)).return=r,r=o}return l(r);case I:return e(r,o,(u=a._init)(a._payload),s)}if(te(a))return m(r,o,a,s);if(T(a))return g(r,o,a,s);vo(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=_c(a,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var wo=bo(!0),ko=bo(!1),jo=Si(null),So=null,Ao=null,Eo=null;function Co(){Eo=Ao=So=null}function Fo(e){var t=jo.current;Ai(jo),e._currentValue=t}function Do(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zo(e,t){So=e,Eo=Ao=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function Mo(e){var t=e._currentValue;if(Eo!==e)if(e={context:e,memoizedValue:t,next:null},null===Ao){if(null===So)throw Error(o(308));Ao=e,So.dependencies={lanes:0,firstContext:e}}else Ao=Ao.next=e;return t}var Io=null;function $o(e){null===Io?Io=[e]:Io.push(e)}function Lo(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,$o(t)):(n.next=i.next,i.next=n),t.interleaved=n,To(e,r)}function To(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ro=!1;function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Po(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function No(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Fs)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,To(e,n)}return null===(i=r.interleaved)?(t.next=t,$o(r)):(t.next=i.next,i.next=t),r.interleaved=t,To(e,n)}function Bo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Uo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,r){var i=e.updateQueue;Ro=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(null!==l){i.shared.pending=null;var s=l,c=s.next;s.next=null,null===a?o=c:a.next=c,a=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==o){var d=i.baseState;for(a=0,u=c=s=null,l=o;;){var p=l.lane,f=l.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(p=t,f=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=m.payload)?h.call(f,d,p):h)||void 0===p)break e;d=_({},d,p);break e;case 2:Ro=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=f,s=d):u=u.next=f,a|=p;if(null===(l=l.next)){if(null===(l=i.shared.pending))break;l=(p=l).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===u&&(s=d),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Rs|=a,e.lanes=a,e.memoizedState=d}}function Ho(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var Vo={},Go=Si(Vo),Ko=Si(Vo),Yo=Si(Vo);function Xo(e){if(e===Vo)throw Error(o(174));return e}function qo(e,t){switch(Ei(Yo,t),Ei(Ko,e),Ei(Go,Vo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ai(Go),Ei(Go,t)}function Qo(){Ai(Go),Ai(Ko),Ai(Yo)}function Jo(e){Xo(Yo.current);var t=Xo(Go.current),n=se(t,e.type);t!==n&&(Ei(Ko,e),Ei(Go,n))}function Zo(e){Ko.current===e&&(Ai(Go),Ai(Ko))}var ea=Si(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var ia=b.ReactCurrentDispatcher,oa=b.ReactCurrentBatchConfig,aa=0,la=null,sa=null,ca=null,ua=!1,da=!1,pa=0,fa=0;function ha(){throw Error(o(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,a){if(aa=a,la=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?Za:el,e=n(r,i),da){a=0;do{if(da=!1,pa=0,25<=a)throw Error(o(301));a+=1,ca=sa=null,t.updateQueue=null,ia.current=tl,e=n(r,i)}while(da)}if(ia.current=Ja,t=null!==sa&&null!==sa.next,aa=0,ca=sa=la=null,ua=!1,t)throw Error(o(300));return e}function xa(){var e=0!==pa;return pa=0,e}function va(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?la.memoizedState=ca=e:ca=ca.next=e,ca}function ya(){if(null===sa){var e=la.alternate;e=null!==e?e.memoizedState:null}else e=sa.next;var t=null===ca?la.memoizedState:ca.next;if(null!==t)ca=t,sa=e;else{if(null===e)throw Error(o(310));e={memoizedState:(sa=e).memoizedState,baseState:sa.baseState,baseQueue:sa.baseQueue,queue:sa.queue,next:null},null===ca?la.memoizedState=ca=e:ca=ca.next=e}return ca}function ba(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=ya(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=sa,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var s=l=null,c=null,u=a;do{var d=u.lane;if((aa&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=p,l=r):c=c.next=p,la.lanes|=d,Rs|=d}u=u.next}while(null!==u&&u!==a);null===c?l=r:c.next=s,lr(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,la.lanes|=a,Rs|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=ya(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var l=i=i.next;do{a=e(a,l.action),l=l.next}while(l!==i);lr(a,t.memoizedState)||(yl=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ja(){}function Sa(e,t){var n=la,r=ya(),i=t(),a=!lr(r.memoizedState,i);if(a&&(r.memoizedState=i,yl=!0),r=r.queue,Ra(Ca.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(n.flags|=2048,Ma(9,Ea.bind(null,n,r,i,t),void 0,null),null===Ds)throw Error(o(349));0!==(30&aa)||Aa(n,t,i)}return i}function Aa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ea(e,t,n,r){t.value=n,t.getSnapshot=r,Fa(t)&&Da(e)}function Ca(e,t,n){return n(function(){Fa(t)&&Da(e)})}function Fa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Da(e){var t=To(e,1);null!==t&&nc(t,e,1,-1)}function za(e){var t=va();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=Ya.bind(null,la,e),[t.memoizedState,e]}function Ma(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ia(){return ya().memoizedState}function $a(e,t,n,r){var i=va();la.flags|=e,i.memoizedState=Ma(1|t,n,void 0,void 0===r?null:r)}function La(e,t,n,r){var i=ya();r=void 0===r?null:r;var o=void 0;if(null!==sa){var a=sa.memoizedState;if(o=a.destroy,null!==r&&ma(r,a.deps))return void(i.memoizedState=Ma(t,n,o,r))}la.flags|=e,i.memoizedState=Ma(1|t,n,o,r)}function Ta(e,t){return $a(8390656,8,e,t)}function Ra(e,t){return La(2048,8,e,t)}function _a(e,t){return La(4,2,e,t)}function Oa(e,t){return La(4,4,e,t)}function Pa(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Na(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,La(4,4,Pa.bind(null,t,e),n)}function Ba(){}function Ua(e,t){var n=ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wa(e,t){var n=ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ha(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),la.lanes|=n,Rs|=n,e.baseState=!0),t)}function Va(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{yt=n,oa.transition=r}}function Ga(){return ya().memoizedState}function Ka(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xa(e))qa(t,n);else if(null!==(n=Lo(e,t,n,r))){nc(n,e,r,ec()),Qa(n,t,r)}}function Ya(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xa(e))qa(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,lr(l,a)){var s=t.interleaved;return null===s?(i.next=i,$o(t)):(i.next=s.next,s.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=Lo(e,t,i,r))&&(nc(n,e,r,i=ec()),Qa(n,t,r))}}function Xa(e){var t=e.alternate;return e===la||null!==t&&t===la}function qa(e,t){da=ua=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qa(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Ja={readContext:Mo,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useInsertionEffect:ha,useLayoutEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useMutableSource:ha,useSyncExternalStore:ha,useId:ha,unstable_isNewReconciler:!1},Za={readContext:Mo,useCallback:function(e,t){return va().memoizedState=[e,void 0===t?null:t],e},useContext:Mo,useEffect:Ta,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,$a(4194308,4,Pa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $a(4194308,4,e,t)},useInsertionEffect:function(e,t){return $a(4,2,e,t)},useMemo:function(e,t){var n=va();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=va();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ka.bind(null,la,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},va().memoizedState=e},useState:za,useDebugValue:Ba,useDeferredValue:function(e){return va().memoizedState=e},useTransition:function(){var e=za(!1),t=e[0];return e=Va.bind(null,e[1]),va().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=la,i=va();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Ds)throw Error(o(349));0!==(30&aa)||Aa(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Ta(Ca.bind(null,r,a,e),[e]),r.flags|=2048,Ma(9,Ea.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=va(),t=Ds.identifierPrefix;if(io){var n=Qi;t=":"+t+"R"+(n=(qi&~(1<<32-at(qi)-1)).toString(32)+n),0<(n=pa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Mo,useCallback:Ua,useContext:Mo,useEffect:Ra,useImperativeHandle:Na,useInsertionEffect:_a,useLayoutEffect:Oa,useMemo:Wa,useReducer:wa,useRef:Ia,useState:function(){return wa(ba)},useDebugValue:Ba,useDeferredValue:function(e){return Ha(ya(),sa.memoizedState,e)},useTransition:function(){return[wa(ba)[0],ya().memoizedState]},useMutableSource:ja,useSyncExternalStore:Sa,useId:Ga,unstable_isNewReconciler:!1},tl={readContext:Mo,useCallback:Ua,useContext:Mo,useEffect:Ra,useImperativeHandle:Na,useInsertionEffect:_a,useLayoutEffect:Oa,useMemo:Wa,useReducer:ka,useRef:Ia,useState:function(){return ka(ba)},useDebugValue:Ba,useDeferredValue:function(e){var t=ya();return null===sa?t.memoizedState=e:Ha(t,sa.memoizedState,e)},useTransition:function(){return[ka(ba)[0],ya().memoizedState]},useMutableSource:ja,useSyncExternalStore:Sa,useId:Ga,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=_({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:_({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Po(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=No(e,o,i))&&(nc(t,e,i,r),Bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Po(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=No(e,o,i))&&(nc(t,e,i,r),Bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=Po(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=No(e,i,r))&&(nc(t,e,r,n),Bo(t,e,r))}};function ol(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(i,o))}function al(e,t,n){var r=!1,i=Ci,o=t.contextType;return"object"===typeof o&&null!==o?o=Mo(o):(i=Ii(t)?zi:Fi.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Mi(e,i):Ci),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},_o(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=Mo(o):(o=Ii(t)?zi:Fi.current,i.context=Mi(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rl(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&il.enqueueReplaceState(i,i.state,null),Wo(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pl="function"===typeof WeakMap?WeakMap:Map;function fl(e,t,n){(n=Po(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hs||(Hs=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Po(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){dl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Gs?Gs=new Set([this]):Gs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pl;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ac.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xl(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Po(-1,1)).tag=2,No(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var vl=b.ReactCurrentOwner,yl=!1;function bl(e,t,n,r){t.child=null===e?ko(t,null,n,r):wo(t,e.child,n,r)}function wl(e,t,n,r,i){n=n.render;var o=t.ref;return zo(t,i),r=ga(e,t,n,r,o,i),n=xa(),null===e||yl?(io&&n&&eo(t),t.flags|=1,bl(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hl(e,t,i))}function kl(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||Ic(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Lc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,jl(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(a,r)&&e.ref===t.ref)return Hl(e,t,i)}return t.flags|=1,(e=$c(o,r)).ref=t.ref,e.return=t,t.child=e}function jl(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,Hl(e,t,i);0!==(131072&e.flags)&&(yl=!0)}}return El(e,t,n,r,i)}function Sl(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ei($s,Is),Is|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ei($s,Is),Is|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ei($s,Is),Is|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ei($s,Is),Is|=r;return bl(e,t,i,n),t.child}function Al(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,n,r,i){var o=Ii(n)?zi:Fi.current;return o=Mi(t,o),zo(t,i),n=ga(e,t,n,r,o,i),r=xa(),null===e||yl?(io&&r&&eo(t),t.flags|=1,bl(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hl(e,t,i))}function Cl(e,t,n,r,i){if(Ii(n)){var o=!0;Ri(t)}else o=!1;if(zo(t,i),null===t.stateNode)Wl(e,t),al(t,n,r),sl(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;"object"===typeof c&&null!==c?c=Mo(c):c=Mi(t,c=Ii(n)?zi:Fi.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==r||s!==c)&&ll(t,a,r,c),Ro=!1;var p=t.memoizedState;a.state=p,Wo(t,r,a,i),s=t.memoizedState,l!==r||p!==s||Di.current||Ro?("function"===typeof u&&(rl(t,n,u,r),s=t.memoizedState),(l=Ro||ol(t,n,l,r,p,s,c))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Oo(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:nl(t.type,l),a.props=c,d=t.pendingProps,p=a.context,"object"===typeof(s=n.contextType)&&null!==s?s=Mo(s):s=Mi(t,s=Ii(n)?zi:Fi.current);var f=n.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==d||p!==s)&&ll(t,a,r,s),Ro=!1,p=t.memoizedState,a.state=p,Wo(t,r,a,i);var h=t.memoizedState;l!==d||p!==h||Di.current||Ro?("function"===typeof f&&(rl(t,n,f,r),h=t.memoizedState),(c=Ro||ol(t,n,c,r,p,h,s)||!1)?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,s),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=c):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Fl(e,t,n,r,o,i)}function Fl(e,t,n,r,i,o){Al(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&_i(t,n,!1),Hl(e,t,o);r=t.stateNode,vl.current=t;var l=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,l,o)):bl(e,t,l,o),t.memoizedState=r.state,i&&_i(t,n,!0),t.child}function Dl(e){var t=e.stateNode;t.pendingContext?Li(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Li(0,t.context,!1),qo(e,t.containerInfo)}function zl(e,t,n,r,i){return ho(),mo(i),t.flags|=256,bl(e,t,n,r),t.child}var Ml,Il,$l,Ll,Tl={dehydrated:null,treeContext:null,retryLane:0};function Rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function _l(e,t,n){var r,i=t.pendingProps,a=ea.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Ei(ea,1&a),null===e)return co(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,l?(i=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&i)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Rc(s,i,0,null),e=Tc(e,i,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Rl(n),t.memoizedState=Tl,e):Ol(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,l){if(n)return 256&t.flags?(t.flags&=-257,Pl(e,t,l,r=ul(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Rc({mode:"visible",children:r.children},i,0,null),(a=Tc(a,i,l,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,l),t.child.memoizedState=Rl(l),t.memoizedState=Tl,a);if(0===(1&t.mode))return Pl(e,t,l,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var s=r.dgst;return r=s,Pl(e,t,l,r=ul(a=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),yl||s){if(null!==(r=Ds)){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|l))?0:i)&&i!==a.retryLane&&(a.retryLane=i,To(e,i),nc(r,e,i,-1))}return mc(),Pl(e,t,l,r=ul(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Cc.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ro=ci(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(Ki[Yi++]=qi,Ki[Yi++]=Qi,Ki[Yi++]=Xi,qi=e.id,Qi=e.overflow,Xi=t),t=Ol(t,r.children),t.flags|=4096,t)}(e,t,s,i,r,a,n);if(l){l=i.fallback,s=t.mode,r=(a=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&s)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=$c(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==r?l=$c(r,l):(l=Tc(l,s,n,null)).flags|=2,l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,s=null===(s=e.child.memoizedState)?Rl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Tl,i}return e=(l=e.child).sibling,i=$c(l,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ol(e,t){return(t=Rc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Pl(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=Ol(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Nl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Do(e.return,t,n)}function Bl(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ul(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(bl(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Nl(e,n,t);else if(19===e.tag)Nl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ei(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bl(t,!0,n,null,o);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Rs|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=$c(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=$c(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Gl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gl(t),null;case 1:case 17:return Ii(t.type)&&$i(),Gl(t),null;case 3:return r=t.stateNode,Qo(),Ai(Di),Ai(Fi),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(po(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(ac(oo),oo=null))),Il(e,t),Gl(t),null;case 5:Zo(t);var i=Xo(Yo.current);if(n=t.type,null!==e&&null!=t.stateNode)$l(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Gl(t),null}if(e=Xo(Go.current),po(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[pi]=t,r[fi]=a,e=0!==(1&t.mode),n){case"dialog":Pr("cancel",r),Pr("close",r);break;case"iframe":case"object":case"embed":Pr("load",r);break;case"video":case"audio":for(i=0;i<Tr.length;i++)Pr(Tr[i],r);break;case"source":Pr("error",r);break;case"img":case"image":case"link":Pr("error",r),Pr("load",r);break;case"details":Pr("toggle",r);break;case"input":q(r,a),Pr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Pr("invalid",r);break;case"textarea":ie(r,a),Pr("invalid",r)}for(var s in ve(n,a),i=null,a)if(a.hasOwnProperty(s)){var c=a[s];"children"===s?"string"===typeof c?r.textContent!==c&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,c,e),i=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&Pr("scroll",r)}switch(n){case"input":G(r),Z(r,a,!0);break;case"textarea":G(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Zr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[pi]=t,e[fi]=r,Ml(e,t,!1,!1),t.stateNode=e;e:{switch(s=ye(n,r),n){case"dialog":Pr("cancel",e),Pr("close",e),i=r;break;case"iframe":case"object":case"embed":Pr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tr.length;i++)Pr(Tr[i],e);i=r;break;case"source":Pr("error",e),i=r;break;case"img":case"image":case"link":Pr("error",e),Pr("load",e),i=r;break;case"details":Pr("toggle",e),i=r;break;case"input":q(e,r),i=X(e,r),Pr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=_({},r,{value:void 0}),Pr("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Pr("invalid",e)}for(a in ve(n,i),c=i)if(c.hasOwnProperty(a)){var u=c[a];"style"===a?ge(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(l.hasOwnProperty(a)?null!=u&&"onScroll"===a&&Pr("scroll",e):null!=u&&y(e,a,u,s))}switch(n){case"input":G(e),Z(e,r,!1);break;case"textarea":G(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Gl(t),null;case 6:if(e&&null!=t.stateNode)Ll(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Xo(Yo.current),Xo(Go.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[pi]=t,(a=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pi]=t,t.stateNode=r}return Gl(t),null;case 13:if(Ai(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))fo(),ho(),t.flags|=98560,a=!1;else if(a=po(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[pi]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Gl(t),a=!1}else null!==oo&&(ac(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Ls&&(Ls=3):mc())),null!==t.updateQueue&&(t.flags|=4),Gl(t),null);case 4:return Qo(),Il(e,t),null===e&&Ur(t.stateNode.containerInfo),Gl(t),null;case 10:return Fo(t.type._context),Gl(t),null;case 19:if(Ai(ea),null===(a=t.memoizedState))return Gl(t),null;if(r=0!==(128&t.flags),null===(s=a.rendering))if(r)Vl(a,!1);else{if(0!==Ls||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ta(e))){for(t.flags|=128,Vl(a,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(s=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ei(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Qe()>Us&&(t.flags|=128,r=!0,Vl(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(a,!0),null===a.tail&&"hidden"===a.tailMode&&!s.alternate&&!io)return Gl(t),null}else 2*Qe()-a.renderingStartTime>Us&&1073741824!==n&&(t.flags|=128,r=!0,Vl(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=a.last)?n.sibling=s:t.child=s,a.last=s)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Qe(),t.sibling=null,n=ea.current,Ei(ea,r?1&n|2:1&n),t):(Gl(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Is)&&(Gl(t),6&t.subtreeFlags&&(t.flags|=8192)):Gl(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Yl(e,t){switch(to(t),t.tag){case 1:return Ii(t.type)&&$i(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qo(),Ai(Di),Ai(Fi),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(Ai(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ai(ea),null;case 4:return Qo(),null;case 10:return Fo(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Ml=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Il=function(){},$l=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xo(Go.current);var o,a=null;switch(n){case"input":i=X(e,i),r=X(e,r),a=[];break;case"select":i=_({},i,{value:void 0}),r=_({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in ve(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(s=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(a=a||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Pr("scroll",e),a||s===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Ll=function(e,t,n,r){n!==r&&(t.flags|=4)};var Xl=!1,ql=!1,Ql="function"===typeof WeakSet?WeakSet:Set,Jl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Sc(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Sc(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&es(t,n,o)}i=i.next}while(i!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function is(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[fi],delete t[mi],delete t[gi],delete t[xi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function as(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||as(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var us=null,ds=!1;function ps(e,t,n){for(n=n.child;null!==n;)fs(e,t,n),n=n.sibling}function fs(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(l){}switch(n.tag){case 5:ql||Zl(n,t);case 6:var r=us,i=ds;us=null,ps(e,t,n),ds=i,null!==(us=r)&&(ds?(e=us,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):us.removeChild(n.stateNode));break;case 18:null!==us&&(ds?(e=us,n=n.stateNode,8===e.nodeType?si(e.parentNode,n):1===e.nodeType&&si(e,n),Ut(e)):si(us,n.stateNode));break;case 4:r=us,i=ds,us=n.stateNode.containerInfo,ds=!0,ps(e,t,n),us=r,ds=i;break;case 0:case 11:case 14:case 15:if(!ql&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&es(n,t,a),i=i.next}while(i!==r)}ps(e,t,n);break;case 1:if(!ql&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Sc(n,t,l)}ps(e,t,n);break;case 21:ps(e,t,n);break;case 22:1&n.mode?(ql=(r=ql)||null!==n.memoizedState,ps(e,t,n),ql=r):ps(e,t,n);break;default:ps(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Ql),t.forEach(function(t){var r=Fc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(o(160));fs(a,l,i),us=null,ds=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(u){Sc(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),xs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Sc(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Sc(e,e.return,g)}}break;case 1:ms(t,e),xs(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(ms(t,e),xs(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(g){Sc(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,l=null!==n?n.memoizedProps:a,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===a.type&&null!=a.name&&Q(i,a),ye(s,l);var u=ye(s,a);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];"style"===d?ge(i,p):"dangerouslySetInnerHTML"===d?de(i,p):"children"===d?pe(i,p):y(i,d,p,u)}switch(s){case"input":J(i,a);break;case"textarea":oe(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(i,!!a.multiple,h,!1):f!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[fi]=a}catch(g){Sc(e,e.return,g)}}break;case 6:if(ms(t,e),xs(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Sc(e,e.return,g)}}break;case 3:if(ms(t,e),xs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){Sc(e,e.return,g)}break;case 4:default:ms(t,e),xs(e);break;case 13:ms(t,e),xs(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Bs=Qe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(ql=(u=ql)||d,ms(t,e),ql=u):ms(t,e),xs(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Jl=e,d=e.child;null!==d;){for(p=Jl=d;null!==Jl;){switch(h=(f=Jl).child,f.tag){case 0:case 11:case 14:case 15:ns(4,f,f.return);break;case 1:Zl(f,f.return);var m=f.stateNode;if("function"===typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Sc(r,n,g)}}break;case 5:Zl(f,f.return);break;case 22:if(null!==f.memoizedState){ws(p);continue}}null!==h?(h.return=f,Jl=h):ws(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{i=p.stateNode,u?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(s=p.stateNode,l=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=me("display",l))}catch(g){Sc(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){Sc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ms(t,e),xs(e),4&r&&hs(e);case 21:}}function xs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(as(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(pe(i,""),r.flags&=-33),cs(e,ls(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;ss(e,ls(e),a);break;default:throw Error(o(161))}}catch(l){Sc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vs(e,t,n){Jl=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!==(1&e.mode);null!==Jl;){var i=Jl,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Xl;if(!a){var l=i.alternate,s=null!==l&&null!==l.memoizedState||ql;l=Xl;var c=ql;if(Xl=a,(ql=s)&&!c)for(Jl=i;null!==Jl;)s=(a=Jl).child,22===a.tag&&null!==a.memoizedState?ks(i):null!==s?(s.return=a,Jl=s):ks(i);for(;null!==o;)Jl=o,ys(o,t,n),o=o.sibling;Jl=i,Xl=l,ql=c}bs(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,Jl=o):bs(e)}}function bs(e){for(;null!==Jl;){var t=Jl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:ql||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!ql)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Ho(t,a,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ho(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Ut(p)}}}break;default:throw Error(o(163))}ql||512&t.flags&&is(t)}catch(f){Sc(t,t.return,f)}}if(t===e){Jl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Jl=n;break}Jl=t.return}}function ws(e){for(;null!==Jl;){var t=Jl;if(t===e){Jl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Jl=n;break}Jl=t.return}}function ks(e){for(;null!==Jl;){var t=Jl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Sc(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(s){Sc(t,i,s)}}var o=t.return;try{is(t)}catch(s){Sc(t,o,s)}break;case 5:var a=t.return;try{is(t)}catch(s){Sc(t,a,s)}}}catch(s){Sc(t,t.return,s)}if(t===e){Jl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Jl=l;break}Jl=t.return}}var js,Ss=Math.ceil,As=b.ReactCurrentDispatcher,Es=b.ReactCurrentOwner,Cs=b.ReactCurrentBatchConfig,Fs=0,Ds=null,zs=null,Ms=0,Is=0,$s=Si(0),Ls=0,Ts=null,Rs=0,_s=0,Os=0,Ps=null,Ns=null,Bs=0,Us=1/0,Ws=null,Hs=!1,Vs=null,Gs=null,Ks=!1,Ys=null,Xs=0,qs=0,Qs=null,Js=-1,Zs=0;function ec(){return 0!==(6&Fs)?Qe():-1!==Js?Js:Js=Qe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Fs)&&0!==Ms?Ms&-Ms:null!==go.transition?(0===Zs&&(Zs=mt()),Zs):0!==(e=yt)?e:e=void 0===(e=window.event)?16:qt(e.type)}function nc(e,t,n,r){if(50<qs)throw qs=0,Qs=null,Error(o(185));xt(e,n,r),0!==(2&Fs)&&e===Ds||(e===Ds&&(0===(2&Fs)&&(_s|=n),4===Ls&&lc(e,Ms)),rc(e,r),1===n&&0===Fs&&0===(1&t.mode)&&(Us=Qe()+500,Pi&&Ui()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),l=1<<a,s=i[a];-1===s?0!==(l&n)&&0===(l&r)||(i[a]=ft(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=pt(e,e===Ds?Ms:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Pi=!0,Bi(e)}(sc.bind(null,e)):Bi(sc.bind(null,e)),ai(function(){0===(6&Fs)&&Ui()}),n=null;else{switch(bt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Dc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Js=-1,Zs=0,0!==(6&Fs))throw Error(o(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=pt(e,e===Ds?Ms:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var i=Fs;Fs|=2;var a=hc();for(Ds===e&&Ms===t||(Ws=null,Us=Qe()+500,pc(e,t));;)try{vc();break}catch(s){fc(e,s)}Co(),As.current=a,Fs=i,null!==zs?t=0:(Ds=null,Ms=0,t=Ls)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(r=i,t=oc(e,i))),1===t)throw n=Ts,pc(e,0),lc(e,r),rc(e,Qe()),n;if(6===t)lc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!lr(o(),i))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,r))&&(0!==(a=ht(e))&&(r=a,t=oc(e,a))),1===t))throw n=Ts,pc(e,0),lc(e,r),rc(e,Qe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wc(e,Ns,Ws);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=Bs+500-Qe())){if(0!==pt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wc.bind(null,e,Ns,Ws),t);break}wc(e,Ns,Ws);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-at(r);a=1<<l,(l=t[l])>i&&(i=l),r&=~a}if(r=i,10<(r=(120>(r=Qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ss(r/1960))-r)){e.timeoutHandle=ri(wc.bind(null,e,Ns,Ws),r);break}wc(e,Ns,Ws);break;default:throw Error(o(329))}}}return rc(e,Qe()),e.callbackNode===n?ic.bind(null,e):null}function oc(e,t){var n=Ps;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Ns,Ns=n,null!==t&&ac(t)),e}function ac(e){null===Ns?Ns=e:Ns.push.apply(Ns,e)}function lc(e,t){for(t&=~Os,t&=~_s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(0!==(6&Fs))throw Error(o(327));kc();var t=pt(e,0);if(0===(1&t))return rc(e,Qe()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=oc(e,r))}if(1===n)throw n=Ts,pc(e,0),lc(e,t),rc(e,Qe()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Ns,Ws),rc(e,Qe()),null}function cc(e,t){var n=Fs;Fs|=1;try{return e(t)}finally{0===(Fs=n)&&(Us=Qe()+500,Pi&&Ui())}}function uc(e){null!==Ys&&0===Ys.tag&&0===(6&Fs)&&kc();var t=Fs;Fs|=1;var n=Cs.transition,r=yt;try{if(Cs.transition=null,yt=1,e)return e()}finally{yt=r,Cs.transition=n,0===(6&(Fs=t))&&Ui()}}function dc(){Is=$s.current,Ai($s)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==zs)for(n=zs.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&$i();break;case 3:Qo(),Ai(Di),Ai(Fi),ra();break;case 5:Zo(r);break;case 4:Qo();break;case 13:case 19:Ai(ea);break;case 10:Fo(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Ds=e,zs=e=$c(e.current,null),Ms=Is=t,Ls=0,Ts=null,Os=_s=Rs=0,Ns=Ps=null,null!==Io){for(t=0;t<Io.length;t++)if(null!==(r=(n=Io[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}Io=null}return e}function fc(e,t){for(;;){var n=zs;try{if(Co(),ia.current=Ja,ua){for(var r=la.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ua=!1}if(aa=0,ca=sa=la=null,da=!1,pa=0,Es.current=null,null===n||null===n.return){Ls=1,Ts=t,zs=null;break}e:{var a=e,l=n.return,s=n,c=t;if(t=Ms,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,xl(h,l,s,0,t),1&h.mode&&ml(a,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ml(a,u,t),mc();break e}c=Error(o(426))}else if(io&&1&s.mode){var x=gl(l);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xl(x,l,s,0,t),mo(cl(c,s));break e}}a=c=cl(c,s),4!==Ls&&(Ls=2),null===Ps?Ps=[a]:Ps.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Uo(a,fl(0,c,t));break e;case 1:s=c;var v=a.type,y=a.stateNode;if(0===(128&a.flags)&&("function"===typeof v.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Gs||!Gs.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t,Uo(a,hl(a,s,t));break e}}a=a.return}while(null!==a)}bc(n)}catch(b){t=b,zs===n&&null!==n&&(zs=n=n.return);continue}break}}function hc(){var e=As.current;return As.current=Ja,null===e?Ja:e}function mc(){0!==Ls&&3!==Ls&&2!==Ls||(Ls=4),null===Ds||0===(268435455&Rs)&&0===(268435455&_s)||lc(Ds,Ms)}function gc(e,t){var n=Fs;Fs|=2;var r=hc();for(Ds===e&&Ms===t||(Ws=null,pc(e,t));;)try{xc();break}catch(i){fc(e,i)}if(Co(),Fs=n,As.current=r,null!==zs)throw Error(o(261));return Ds=null,Ms=0,Ls}function xc(){for(;null!==zs;)yc(zs)}function vc(){for(;null!==zs&&!Xe();)yc(zs)}function yc(e){var t=js(e.alternate,e,Is);e.memoizedProps=e.pendingProps,null===t?bc(e):zs=t,Es.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,Is)))return void(zs=n)}else{if(null!==(n=Yl(n,t)))return n.flags&=32767,void(zs=n);if(null===e)return Ls=6,void(zs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(zs=t);zs=t=e}while(null!==t);0===Ls&&(Ls=5)}function wc(e,t,n){var r=yt,i=Cs.transition;try{Cs.transition=null,yt=1,function(e,t,n,r){do{kc()}while(null!==Ys);if(0!==(6&Fs))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===Ds&&(zs=Ds=null,Ms=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,Dc(tt,function(){return kc(),null})),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Cs.transition,Cs.transition=null;var l=yt;yt=1;var s=Fs;Fs|=4,Es.current=null,function(e,t){if(ei=Ht,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==i&&3!==p.nodeType||(s=l+i),p!==a||0!==r&&3!==p.nodeType||(c=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===i&&(s=l),f===a&&++d===r&&(c=l),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Ht=!1,Jl=t;null!==Jl;)if(e=(t=Jl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Jl=e;else for(;null!==Jl;){t=Jl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,x=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),x);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(o(163))}}catch(w){Sc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Jl=e;break}Jl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(ti),Ht=!!ei,ti=ei=null,e.current=n,vs(n,e,i),qe(),Fs=s,yt=l,Cs.transition=a}else e.current=n;if(Ks&&(Ks=!1,Ys=e,Xs=i),a=e.pendingLanes,0===a&&(Gs=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hs)throw Hs=!1,e=Vs,Vs=null,e;0!==(1&Xs)&&0!==e.tag&&kc(),a=e.pendingLanes,0!==(1&a)?e===Qs?qs++:(qs=0,Qs=e):qs=0,Ui()}(e,t,n,r)}finally{Cs.transition=i,yt=r}return null}function kc(){if(null!==Ys){var e=bt(Xs),t=Cs.transition,n=yt;try{if(Cs.transition=null,yt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,Xs=0,0!==(6&Fs))throw Error(o(331));var i=Fs;for(Fs|=4,Jl=e.current;null!==Jl;){var a=Jl,l=a.child;if(0!==(16&Jl.flags)){var s=a.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Jl=u;null!==Jl;){var d=Jl;switch(d.tag){case 0:case 11:case 15:ns(8,d,a)}var p=d.child;if(null!==p)p.return=d,Jl=p;else for(;null!==Jl;){var f=(d=Jl).sibling,h=d.return;if(os(d),d===u){Jl=null;break}if(null!==f){f.return=h,Jl=f;break}Jl=h}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Jl=a}}if(0!==(2064&a.subtreeFlags)&&null!==l)l.return=a,Jl=l;else e:for(;null!==Jl;){if(0!==(2048&(a=Jl).flags))switch(a.tag){case 0:case 11:case 15:ns(9,a,a.return)}var v=a.sibling;if(null!==v){v.return=a.return,Jl=v;break e}Jl=a.return}}var y=e.current;for(Jl=y;null!==Jl;){var b=(l=Jl).child;if(0!==(2064&l.subtreeFlags)&&null!==b)b.return=l,Jl=b;else e:for(l=y;null!==Jl;){if(0!==(2048&(s=Jl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){Sc(s,s.return,k)}if(s===l){Jl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Jl=w;break e}Jl=s.return}}if(Fs=i,Ui(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(k){}r=!0}return r}finally{yt=n,Cs.transition=t}}return!1}function jc(e,t,n){e=No(e,t=fl(0,t=cl(n,t),1),1),t=ec(),null!==e&&(xt(e,1,t),rc(e,t))}function Sc(e,t,n){if(3===e.tag)jc(e,e,n);else for(;null!==t;){if(3===t.tag){jc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Gs||!Gs.has(r))){t=No(t,e=hl(t,e=cl(n,e),1),1),e=ec(),null!==t&&(xt(t,1,e),rc(t,e));break}}t=t.return}}function Ac(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Ds===e&&(Ms&n)===n&&(4===Ls||3===Ls&&(130023424&Ms)===Ms&&500>Qe()-Bs?pc(e,0):Os|=n),rc(e,t)}function Ec(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=To(e,t))&&(xt(e,t,n),rc(e,n))}function Cc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ec(e,n)}function Fc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Ec(e,n)}function Dc(e,t){return Ke(e,t)}function zc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mc(e,t,n,r){return new zc(e,t,n,r)}function Ic(e){return!(!(e=e.prototype)||!e.isReactComponent)}function $c(e,t){var n=e.alternate;return null===n?((n=Mc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lc(e,t,n,r,i,a){var l=2;if(r=e,"function"===typeof e)Ic(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case j:return Tc(n.children,i,a,t);case S:l=8,i|=8;break;case A:return(e=Mc(12,n,t,2|i)).elementType=A,e.lanes=a,e;case D:return(e=Mc(13,n,t,i)).elementType=D,e.lanes=a,e;case z:return(e=Mc(19,n,t,i)).elementType=z,e.lanes=a,e;case $:return Rc(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:l=10;break e;case C:l=9;break e;case F:l=11;break e;case M:l=14;break e;case I:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Mc(l,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Tc(e,t,n,r){return(e=Mc(7,e,r,t)).lanes=n,e}function Rc(e,t,n,r){return(e=Mc(22,e,r,t)).elementType=$,e.lanes=n,e.stateNode={isHidden:!1},e}function _c(e,t,n){return(e=Mc(6,e,null,t)).lanes=n,e}function Oc(e,t,n){return(t=Mc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nc(e,t,n,r,i,o,a,l,s){return e=new Pc(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Mc(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_o(o),e}function Bc(e){if(!e)return Ci;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ii(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Ii(n))return Ti(e,n,t)}return t}function Uc(e,t,n,r,i,o,a,l,s){return(e=Nc(n,r,!0,e,0,o,0,l,s)).context=Bc(null),n=e.current,(o=Po(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,No(n,o,i),e.current.lanes=i,xt(e,i,r),rc(e,r),e}function Wc(e,t,n,r){var i=t.current,o=ec(),a=tc(i);return n=Bc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Po(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=No(i,t,a))&&(nc(e,i,a,o),Bo(e,i,a)),a}function Hc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Gc(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}js=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Di.current)yl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Dl(t),ho();break;case 5:Jo(t);break;case 1:Ii(t.type)&&Ri(t);break;case 4:qo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ei(jo,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ei(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?_l(e,t,n):(Ei(ea,1&ea.current),null!==(e=Hl(e,t,n))?e.sibling:null);Ei(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Ul(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ei(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,Sl(e,t,n)}return Hl(e,t,n)}(e,t,n);yl=0!==(131072&e.flags)}else yl=!1,io&&0!==(1048576&t.flags)&&Zi(t,Gi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var i=Mi(t,Fi.current);zo(t,n),i=ga(null,t,r,e,i,n);var a=xa();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ii(r)?(a=!0,Ri(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,_o(t),i.updater=il,t.stateNode=i,i._reactInternals=t,sl(t,r,e,n),t=Fl(null,t,r,!0,a,n)):(t.tag=0,io&&a&&eo(t),bl(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Ic(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===F)return 11;if(e===M)return 14}return 2}(r),e=nl(r,e),i){case 0:t=El(null,t,r,e,n);break e;case 1:t=Cl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,nl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,El(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 1:return r=t.type,i=t.pendingProps,Cl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 3:e:{if(Dl(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,Oo(e,t),Wo(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=zl(e,t,r,n,i=cl(Error(o(423)),t));break e}if(r!==i){t=zl(e,t,r,n,i=cl(Error(o(424)),t));break e}for(ro=ci(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=ko(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===i){t=Hl(e,t,n);break e}bl(e,t,r,n)}t=t.child}return t;case 5:return Jo(t),null===e&&co(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,l=i.children,ni(r,i)?l=null:null!==a&&ni(r,a)&&(t.flags|=32),Al(e,t),bl(e,t,l,n),t.child;case 6:return null===e&&co(t),null;case 13:return _l(e,t,n);case 4:return qo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):bl(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,wl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 7:return bl(e,t,t.pendingProps,n),t.child;case 8:case 12:return bl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,Ei(jo,r._currentValue),r._currentValue=l,null!==a)if(lr(a.value,l)){if(a.children===i.children&&!Di.current){t=Hl(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){l=a.child;for(var c=s.firstContext;null!==c;){if(c.context===r){if(1===a.tag){(c=Po(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,null!==(c=a.alternate)&&(c.lanes|=n),Do(a.return,n,t),s.lanes|=n;break}c=c.next}}else if(10===a.tag)l=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(l=a.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Do(l,n,t),l=a.sibling}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===t){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}bl(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zo(t,n),r=r(i=Mo(i)),t.flags|=1,bl(e,t,r,n),t.child;case 14:return i=nl(r=t.type,t.pendingProps),kl(e,t,r,i=nl(r.type,i),n);case 15:return jl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nl(r,i),Wl(e,t),t.tag=1,Ii(r)?(e=!0,Ri(t)):e=!1,zo(t,n),al(t,r,i),sl(t,r,i,n),Fl(null,t,r,!0,e,n);case 19:return Ul(e,t,n);case 22:return Sl(e,t,n)}throw Error(o(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}function Xc(e){this._internalRoot=e}function qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"===typeof i){var l=i;i=function(){var e=Hc(a);l.call(e)}}Wc(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=Hc(a);o.call(e)}}var a=Uc(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=a,e[hi]=a.current,Ur(8===e.nodeType?e.parentNode:e),uc(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var l=r;r=function(){var e=Hc(s);l.call(e)}}var s=Nc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=s,e[hi]=s.current,Ur(8===e.nodeType?e.parentNode:e),uc(function(){Wc(t,s,n,r)}),s}(n,t,e,i,r);return Hc(a)}Xc.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Wc(e,t,null,null)},Xc.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc(function(){Wc(null,e,null,null)}),t[hi]=null}},Xc.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&0!==t&&t<$t[n].priority;n++);$t.splice(n,0,e),0===n&&_t(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),rc(t,Qe()),0===(6&Fs)&&(Us=Qe()+500,Ui()))}break;case 13:uc(function(){var t=To(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}}),Gc(e,1)}},kt=function(e){if(13===e.tag){var t=To(e,134217728);if(null!==t)nc(t,e,134217728,ec());Gc(e,134217728)}},jt=function(e){if(13===e.tag){var t=tc(e),n=To(e,t);if(null!==n)nc(n,e,t,ec());Gc(e,t)}},St=function(){return yt},At=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},ke=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(o(90));K(r),J(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Fe=cc,De=uc;var eu={usingClientEntryPoint:!1,Events:[yi,bi,wi,Ee,Ce,cc]},tu={findFiberByHostInstance:vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{it=ru.inject(nu),ot=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qc(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!qc(e))throw Error(o(299));var n=!1,r="",i=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Nc(e,1,!1,null,0,n,0,r,i),e[hi]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Yc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Qc(t))throw Error(o(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!qc(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",l=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Uc(t,null,e,1,null!=n?n:null,i,0,a,l),e[hi]=t.current,Ur(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Xc(t)},t.render=function(e,t,n){if(!Qc(t))throw Error(o(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(o(40));return!!e._reactRootContainer&&(uc(function(){Zc(null,null,e,!1,function(){e._reactRootContainer=null,e[hi]=null})}),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qc(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},3102:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"Warning")},3382:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s,getFunctionName:()=>o});var r=n(528);const i=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function o(e){const t=`${e}`.match(i);return t&&t[1]||""}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.displayName||e.name||o(e)||t}function l(e,t,n){const r=a(t);return e.displayName||(""!==r?`${n}(${r})`:n)}function s(e){if(null!=e){if("string"===typeof e)return e;if("function"===typeof e)return a(e,"Component");if("object"===typeof e)switch(e.$$typeof){case r.vM:return l(e,e.render,"ForwardRef");case r.lD:return l(e,e.type,"memo");default:return}}}},3763:(e,t,n)=>{"use strict";e.exports=n(4983)},3815:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(9172);const i=function(e,t){return t?(0,r.A)(e,t,{clone:!1}):e}},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=x.prototype;var b=y.prototype=new v;b.constructor=y,m(b,x.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,r){var i,o={},a=null,l=null;if(null!=t)for(i in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,i)&&!S.hasOwnProperty(i)&&(o[i]=t[i]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===o[i]&&(o[i]=s[i]);return{$$typeof:n,type:e,key:a,ref:l,props:o,_owner:j.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function F(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function D(e,t,i,o,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===o?"."+F(s,0):o,w(a)?(i="",null!=e&&(i=e.replace(C,"$&/")+"/"),D(a,t,i,"",function(e){return e})):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(s=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+F(l=e[c],c);s+=D(l,t,i,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=D(l=l.value,t,i,u=o+F(l,c++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function z(e,t,n){if(null==e)return e;var r=[],i=0;return D(e,r,"","",function(e){return t.call(n,e,i++)}),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},$={transition:null},L={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:$,ReactCurrentOwner:j};function T(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:z,forEach:function(e,t,n){z(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return z(e,function(){t++}),t},toArray:function(e){return z(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=i,t.Profiler=a,t.PureComponent=y,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.act=T,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=j.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!S.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];i.children=s}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=A,t.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=T,t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.3.1"},4391:(e,t,n)=>{"use strict";var r=n(7950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},4536:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown")},4634:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4802:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},4853:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(8587),i=n(8168);const o=["values","unit","step"],a=e=>{const t=Object.keys(e).map(t=>({key:t,val:e[t]}))||[];return t.sort((e,t)=>e.val-t.val),t.reduce((e,t)=>(0,i.A)({},e,{[t.key]:t.val}),{})};function l(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:l=5}=e,s=(0,r.A)(e,o),c=a(t),u=Object.keys(c);function d(e){return`@media (min-width:${"number"===typeof t[e]?t[e]:e}${n})`}function p(e){return`@media (max-width:${("number"===typeof t[e]?t[e]:e)-l/100}${n})`}function f(e,r){const i=u.indexOf(r);return`@media (min-width:${"number"===typeof t[e]?t[e]:e}${n}) and (max-width:${(-1!==i&&"number"===typeof t[u[i]]?t[u[i]]:r)-l/100}${n})`}return(0,i.A)({keys:u,values:c,up:d,down:p,between:f,only:function(e){return u.indexOf(e)+1<u.length?f(e,u[u.indexOf(e)+1]):d(e)},not:function(e){const t=u.indexOf(e);return 0===t?d(u[1]):t===u.length-1?p(u[t]):f(e,u[u.indexOf(e)+1]).replace("@media","@media not all and")},unit:n},s)}},4893:e=>{e.exports=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n},e.exports.__esModule=!0,e.exports.default=e.exports},4914:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy")},4983:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,x=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,y=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case d:case o:case l:case a:case f:return e;default:switch(e=e&&e.$$typeof){case c:case p:case g:case m:case s:return e;default:return t}}case i:return t}}}function k(e){return w(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=s,t.Element=r,t.ForwardRef=p,t.Fragment=o,t.Lazy=g,t.Memo=m,t.Portal=i,t.Profiler=l,t.StrictMode=a,t.Suspense=f,t.isAsyncMode=function(e){return k(e)||w(e)===u},t.isConcurrentMode=k,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===l},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===d||e===l||e===a||e===f||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===p||e.$$typeof===v||e.$$typeof===y||e.$$typeof===b||e.$$typeof===x)},t.typeOf=w},4989:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A,private_createBreakpoints:()=>i.A,unstable_applyStyles:()=>o.A});var r=n(8280),i=n(4853),o=n(9703)},4994:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},5473:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess")},5502:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"}),"Cancel")},5896:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft")},6360:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},6485:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew")},6502:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward")},7162:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>l,BO:()=>a,Yn:()=>o});var r=n(7598),i=n(9751);function o(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!t||"string"!==typeof t)return null;if(e&&e.vars&&n){const n=`vars.${t}`.split(".").reduce((e,t)=>e&&e[t]?e[t]:null,e);if(null!=n)return n}return t.split(".").reduce((e,t)=>e&&null!=e[t]?e[t]:null,e)}function a(e,t,n){let r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;return r="function"===typeof e?e(n):Array.isArray(e)?e[n]||i:o(e,n)||i,t&&(r=t(r,i,e)),r}const l=function(e){const{prop:t,cssProperty:n=e.prop,themeKey:l,transform:s}=e,c=e=>{if(null==e[t])return null;const c=e[t],u=o(e.theme,l)||{};return(0,i.NI)(e,c,e=>{let i=a(u,s,e);return e===i&&"string"===typeof e&&(i=a(u,s,`${t}${"default"===e?"":(0,r.A)(e)}`,e)),!1===n?i:{[n]:i}})};return c.propTypes={},c.filterProps=[t],c}},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>o(s,n))c<i&&0>o(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<i&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,$(k);else{var t=r(u);null!==t&&L(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,v(E),E=-1),h=!0;var o=f;try{for(b(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!D());){var a=p.callback;if("function"===typeof a){p.callback=null,f=p.priorityLevel;var l=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?p.callback=l:p===r(c)&&i(c),b(n)}else i(c);p=r(c)}if(null!==p)var s=!0;else{var d=r(u);null!==d&&L(w,d.startTime-n),s=!1}return s}finally{p=null,f=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var j,S=!1,A=null,E=-1,C=5,F=-1;function D(){return!(t.unstable_now()-F<C)}function z(){if(null!==A){var e=t.unstable_now();F=e;var n=!0;try{n=A(!0,e)}finally{n?j():(S=!1,A=null)}}else S=!1}if("function"===typeof y)j=function(){y(z)};else if("undefined"!==typeof MessageChannel){var M=new MessageChannel,I=M.port2;M.port1.onmessage=z,j=function(){I.postMessage(null)}}else j=function(){x(z,0)};function $(e){A=e,S||(S=!0,j())}function L(e,n){E=x(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,$(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>a?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(g?(v(E),E=-1):g=!0,L(w,o-a))):(e.sortIndex=l,n(c,e),m||h||(m=!0,$(k))),e},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},7266:(e,t,n)=>{"use strict";var r=n(4994);t.e$=h,t.eM=function(e,t){const n=p(e),r=p(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)},t.a=m;var i=r(n(457)),o=r(n(9214));function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,o.default)(e,t,n)}function l(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&1===n[0].length&&(n=n.map(e=>e+e)),n?`rgb${4===n.length?"a":""}(${n.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}function s(e){if(e.type)return e;if("#"===e.charAt(0))return s(l(e));const t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(n))throw new Error((0,i.default)(9,e));let r,o=e.substring(t+1,e.length-1);if("color"===n){if(o=o.split(" "),r=o.shift(),4===o.length&&"/"===o[3].charAt(0)&&(o[3]=o[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(r))throw new Error((0,i.default)(10,r))}else o=o.split(",");return o=o.map(e=>parseFloat(e)),{type:n,values:o,colorSpace:r}}const c=e=>{const t=s(e);return t.values.slice(0,3).map((e,n)=>-1!==t.type.indexOf("hsl")&&0!==n?`${e}%`:e).join(" ")};function u(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return-1!==t.indexOf("rgb")?r=r.map((e,t)=>t<3?parseInt(e,10):e):-1!==t.indexOf("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),r=-1!==t.indexOf("color")?`${n} ${r.join(" ")}`:`${r.join(", ")}`,`${t}(${r})`}function d(e){e=s(e);const{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,o=r*Math.min(i,1-i),a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+n/30)%12;return i-o*Math.max(Math.min(t-3,9-t,1),-1)};let l="rgb";const c=[Math.round(255*a(0)),Math.round(255*a(8)),Math.round(255*a(4))];return"hsla"===e.type&&(l+="a",c.push(t[3])),u({type:l,values:c})}function p(e){let t="hsl"===(e=s(e)).type||"hsla"===e.type?s(d(e)).values:e.values;return t=t.map(t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function f(e,t){return e=s(e),t=a(t),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,u(e)}function h(e,t){if(e=s(e),t=a(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return u(e)}function m(e,t){if(e=s(e),t=a(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return u(e)}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15;return p(e)>.5?h(e,t):m(e,t)}},7324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},7598:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(7868);function i(e){if("string"!==typeof e)throw new Error((0,r.A)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},7749:(e,t,n)=>{"use strict";n.r(t),n.d(t,{capitalize:()=>o,createChainedFunction:()=>a,createSvgIcon:()=>ue,debounce:()=>de,deprecatedPropType:()=>pe,isMuiElement:()=>fe,ownerDocument:()=>me,ownerWindow:()=>ge,requirePropFactory:()=>xe,setRef:()=>ye,unstable_ClassNameGenerator:()=>Pe,unstable_useEnhancedEffect:()=>we,unstable_useId:()=>Se,unsupportedProp:()=>Ae,useControlled:()=>Ee,useEventCallback:()=>Ce,useForkRef:()=>Fe,useIsFocusVisible:()=>Oe});const r=e=>e,i=(()=>{let e=r;return{configure(t){e=t},generate:t=>e(t),reset(){e=r}}})();const o=n(7598).A;const a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((e,t)=>null==t?e:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e.apply(this,r),t.apply(this,r)},()=>{})};var l=n(8168),s=n(5043),c=n.t(s,2),u=n(8587);function d(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=d(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const p=function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=d(e))&&(r&&(r+=" "),r+=t);return r};function f(e,t){const n=(0,l.A)({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=(0,l.A)({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=e[r]||{},o=t[r];n[r]={},o&&Object.keys(o)?i&&Object.keys(i)?(n[r]=(0,l.A)({},o),Object.keys(i).forEach(e=>{n[r][e]=f(i[e],o[e])})):n[r]=o:n[r]=i}else void 0===n[r]&&(n[r]=e[r])}),n}var h=n(579);const m=s.createContext(void 0);function g(e){let{props:t,name:n}=e;return function(e){const{theme:t,name:n,props:r}=e;if(!t||!t.components||!t.components[n])return r;const i=t.components[n];return i.defaultProps?f(i.defaultProps,r):i.styleOverrides||i.variants?r:f(i,r)}({props:t,name:n,theme:{components:s.useContext(m)}})}var x=n(8052),v=n(7868),y=n(9172),b=n(7758),w=n(8812),k=n(8280);var j=n(7266);const S={black:"#000",white:"#fff"},A={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},E={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},C={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},F={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},D={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},z={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},M={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},I=["mode","contrastThreshold","tonalOffset"],$={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:S.white,default:S.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},L={text:{primary:S.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:S.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function T(e,t,n,r){const i=r.light||r,o=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=(0,j.a)(e.main,i):"dark"===t&&(e.dark=(0,j.e$)(e.main,o)))}function R(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,i=(0,u.A)(e,I),o=e.primary||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:D[200],light:D[50],dark:D[400]}:{main:D[700],light:D[400],dark:D[800]}}(t),a=e.secondary||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:E[200],light:E[50],dark:E[400]}:{main:E[500],light:E[300],dark:E[700]}}(t),s=e.error||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:C[500],light:C[300],dark:C[700]}:{main:C[700],light:C[400],dark:C[800]}}(t),c=e.info||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:z[400],light:z[300],dark:z[700]}:{main:z[700],light:z[500],dark:z[900]}}(t),d=e.success||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:M[400],light:M[300],dark:M[700]}:{main:M[800],light:M[500],dark:M[900]}}(t),p=e.warning||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:F[400],light:F[300],dark:F[700]}:{main:"#ed6c02",light:F[500],dark:F[900]}}(t);function f(e){return(0,j.eM)(e,L.text.primary)>=n?L.text.primary:$.text.primary}const h=e=>{let{color:t,name:n,mainShade:i=500,lightShade:o=300,darkShade:a=700}=e;if(t=(0,l.A)({},t),!t.main&&t[i]&&(t.main=t[i]),!t.hasOwnProperty("main"))throw new Error((0,v.A)(11,n?` (${n})`:"",i));if("string"!==typeof t.main)throw new Error((0,v.A)(12,n?` (${n})`:"",JSON.stringify(t.main)));return T(t,"light",o,r),T(t,"dark",a,r),t.contrastText||(t.contrastText=f(t.main)),t},m={dark:L,light:$};return(0,y.A)((0,l.A)({common:(0,l.A)({},S),mode:t,primary:h({color:o,name:"primary"}),secondary:h({color:a,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:h({color:s,name:"error"}),warning:h({color:p,name:"warning"}),info:h({color:c,name:"info"}),success:h({color:d,name:"success"}),grey:A,contrastThreshold:n,getContrastText:f,augmentColor:h,tonalOffset:r},m[t]),i)}const _=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];const O={textTransform:"uppercase"},P='"Roboto", "Helvetica", "Arial", sans-serif';function N(e,t){const n="function"===typeof t?t(e):t,{fontFamily:r=P,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:a=400,fontWeightMedium:s=500,fontWeightBold:c=700,htmlFontSize:d=16,allVariants:p,pxToRem:f}=n,h=(0,u.A)(n,_);const m=i/14,g=f||(e=>e/d*m+"rem"),x=(e,t,n,i,o)=>{return(0,l.A)({fontFamily:r,fontWeight:e,fontSize:g(t),lineHeight:n},r===P?{letterSpacing:(a=i/t,Math.round(1e5*a)/1e5)+"em"}:{},o,p);var a},v={h1:x(o,96,1.167,-1.5),h2:x(o,60,1.2,-.5),h3:x(a,48,1.167,0),h4:x(a,34,1.235,.25),h5:x(a,24,1.334,0),h6:x(s,20,1.6,.15),subtitle1:x(a,16,1.75,.15),subtitle2:x(s,14,1.57,.1),body1:x(a,16,1.5,.15),body2:x(a,14,1.43,.15),button:x(s,14,1.75,.4,O),caption:x(a,12,1.66,.4),overline:x(a,12,2.66,1,O),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return(0,y.A)((0,l.A)({htmlFontSize:d,pxToRem:g,fontFamily:r,fontSize:i,fontWeightLight:o,fontWeightRegular:a,fontWeightMedium:s,fontWeightBold:c},v),h,{clone:!1})}function B(){return[`${arguments.length<=0?void 0:arguments[0]}px ${arguments.length<=1?void 0:arguments[1]}px ${arguments.length<=2?void 0:arguments[2]}px ${arguments.length<=3?void 0:arguments[3]}px rgba(0,0,0,0.2)`,`${arguments.length<=4?void 0:arguments[4]}px ${arguments.length<=5?void 0:arguments[5]}px ${arguments.length<=6?void 0:arguments[6]}px ${arguments.length<=7?void 0:arguments[7]}px rgba(0,0,0,0.14)`,`${arguments.length<=8?void 0:arguments[8]}px ${arguments.length<=9?void 0:arguments[9]}px ${arguments.length<=10?void 0:arguments[10]}px ${arguments.length<=11?void 0:arguments[11]}px rgba(0,0,0,0.12)`].join(",")}const U=["none",B(0,2,1,-1,0,1,1,0,0,1,3,0),B(0,3,1,-2,0,2,2,0,0,1,5,0),B(0,3,3,-2,0,3,4,0,0,1,8,0),B(0,2,4,-1,0,4,5,0,0,1,10,0),B(0,3,5,-1,0,5,8,0,0,1,14,0),B(0,3,5,-1,0,6,10,0,0,1,18,0),B(0,4,5,-2,0,7,10,1,0,2,16,1),B(0,5,5,-3,0,8,10,1,0,3,14,2),B(0,5,6,-3,0,9,12,1,0,3,16,2),B(0,6,6,-3,0,10,14,1,0,4,18,3),B(0,6,7,-4,0,11,15,1,0,4,20,3),B(0,7,8,-4,0,12,17,2,0,5,22,4),B(0,7,8,-4,0,13,19,2,0,5,24,4),B(0,7,9,-4,0,14,21,2,0,5,26,4),B(0,8,9,-5,0,15,22,2,0,6,28,5),B(0,8,10,-5,0,16,24,2,0,6,30,5),B(0,8,11,-5,0,17,26,2,0,6,32,5),B(0,9,11,-5,0,18,28,2,0,7,34,6),B(0,9,12,-6,0,19,29,2,0,7,36,6),B(0,10,13,-6,0,20,31,3,0,8,38,7),B(0,10,13,-6,0,21,33,3,0,8,40,7),B(0,10,14,-6,0,22,35,3,0,8,42,7),B(0,11,14,-7,0,23,36,3,0,9,44,8),B(0,11,15,-7,0,24,38,3,0,9,46,8)],W=["duration","easing","delay"],H={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},V={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function G(e){return`${Math.round(e)}ms`}function K(e){if(!e)return 0;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}function Y(e){const t=(0,l.A)({},H,e.easing),n=(0,l.A)({},V,e.duration);return(0,l.A)({getAutoHeightDuration:K,create:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{duration:i=n.standard,easing:o=t.easeInOut,delay:a=0}=r;(0,u.A)(r,W);return(Array.isArray(e)?e:[e]).map(e=>`${e} ${"string"===typeof i?i:G(i)} ${o} ${"string"===typeof a?a:G(a)}`).join(",")}},e,{easing:t,duration:n})}const X={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},q=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{mixins:t={},palette:n={},transitions:r={},typography:i={}}=e,o=(0,u.A)(e,q);if(e.vars&&void 0===e.generateCssVars)throw new Error((0,v.A)(18));const a=R(n),s=(0,k.A)(e);let c=(0,y.A)(s,{mixins:(d=s.breakpoints,p=t,(0,l.A)({toolbar:{minHeight:56,[d.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[d.up("sm")]:{minHeight:64}}},p)),palette:a,shadows:U.slice(),typography:N(a,i),transitions:Y(r),zIndex:(0,l.A)({},X)});var d,p;c=(0,y.A)(c,o);for(var f=arguments.length,h=new Array(f>1?f-1:0),m=1;m<f;m++)h[m-1]=arguments[m];return c=h.reduce((e,t)=>(0,y.A)(e,t),c),c.unstable_sxConfig=(0,l.A)({},b.A,null==o?void 0:o.unstable_sxConfig),c.unstable_sx=function(e){return(0,w.A)({sx:e,theme:this})},c}const J=Q();const Z=function(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e},ee=e=>Z(e)&&"classes"!==e,te=(0,x.Ay)({themeId:"$$material",defaultTheme:J,rootShouldForwardProp:ee}),ne={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function re(e,t){const n=ne[t];return n?`${arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui"}-${n}`:`${i.generate(e)}-${t}`}function ie(e){return re("MuiSvgIcon",e)}!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui";const r={};t.forEach(t=>{r[t]=re(e,t,n)})}("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const oe=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],ae=e=>{const{color:t,fontSize:n,classes:r}=e;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;const r={};return Object.keys(e).forEach(i=>{r[i]=e[i].reduce((e,r)=>{if(r){const i=t(r);""!==i&&e.push(i),n&&n[r]&&e.push(n[r])}return e},[]).join(" ")}),r}({root:["root","inherit"!==t&&`color${o(t)}`,`fontSize${o(n)}`]},ie,r)},le=te("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${o(n.color)}`],t[`fontSize${o(n.fontSize)}`]]}})(e=>{let{theme:t,ownerState:n}=e;var r,i,o,a,l,s,c,u,d,p,f,h,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:n.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(r=t.transitions)||null==(i=r.create)?void 0:i.call(r,"fill",{duration:null==(o=t.transitions)||null==(o=o.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(a=t.typography)||null==(l=a.pxToRem)?void 0:l.call(a,20))||"1.25rem",medium:(null==(s=t.typography)||null==(c=s.pxToRem)?void 0:c.call(s,24))||"1.5rem",large:(null==(u=t.typography)||null==(d=u.pxToRem)?void 0:d.call(u,35))||"2.1875rem"}[n.fontSize],color:null!=(p=null==(f=(t.vars||t).palette)||null==(f=f[n.color])?void 0:f.main)?p:{action:null==(h=(t.vars||t).palette)||null==(h=h.action)?void 0:h.active,disabled:null==(m=(t.vars||t).palette)||null==(m=m.action)?void 0:m.disabled,inherit:void 0}[n.color]}}),se=s.forwardRef(function(e,t){const n=g({props:e,name:"MuiSvgIcon"});const{children:r,className:i,color:o="inherit",component:a="svg",fontSize:c="medium",htmlColor:d,inheritViewBox:f=!1,titleAccess:m,viewBox:x="0 0 24 24"}=n,v=(0,u.A)(n,oe),y=s.isValidElement(r)&&"svg"===r.type,b=(0,l.A)({},n,{color:o,component:a,fontSize:c,instanceFontSize:e.fontSize,inheritViewBox:f,viewBox:x,hasSvgAsChild:y}),w={};f||(w.viewBox=x);const k=ae(b);return(0,h.jsxs)(le,(0,l.A)({as:a,className:p(k.root,i),focusable:"false",color:d,"aria-hidden":!m||void 0,role:m?"img":void 0,ref:t},w,v,y&&r.props,{ownerState:b,children:[y?r.props.children:r,m?(0,h.jsx)("title",{children:m}):null]}))});se.muiName="SvgIcon";const ce=se;function ue(e,t){function n(n,r){return(0,h.jsx)(ce,(0,l.A)({"data-testid":`${t}Icon`,ref:r},n,{children:e}))}return n.muiName=ce.muiName,s.memo(s.forwardRef(n))}const de=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];clearTimeout(t),t=setTimeout(()=>{e.apply(this,i)},n)}return r.clear=()=>{clearTimeout(t)},r};const pe=function(e,t){return()=>null};const fe=function(e,t){var n,r;return s.isValidElement(e)&&-1!==t.indexOf(null!=(n=e.type.muiName)?n:null==(r=e.type)||null==(r=r._payload)||null==(r=r.value)?void 0:r.muiName)};function he(e){return e&&e.ownerDocument||document}const me=he;const ge=function(e){return he(e).defaultView||window};const xe=function(e,t){return()=>null};function ve(e,t){"function"===typeof e?e(t):e&&(e.current=t)}const ye=ve,be="undefined"!==typeof window?s.useLayoutEffect:s.useEffect,we=be;let ke=0;const je=c["useId".toString()];const Se=function(e){if(void 0!==je){const t=je();return null!=e?e:t}return function(e){const[t,n]=s.useState(e),r=e||t;return s.useEffect(()=>{null==t&&(ke+=1,n(`mui-${ke}`))},[t]),r}(e)};const Ae=function(e,t,n,r,i){return null};const Ee=function(e){let{controlled:t,default:n,name:r,state:i="value"}=e;const{current:o}=s.useRef(void 0!==t),[a,l]=s.useState(n);return[o?t:a,s.useCallback(e=>{o||l(e)},[])]};const Ce=function(e){const t=s.useRef(e);return be(()=>{t.current=e}),s.useRef(function(){return(0,t.current)(...arguments)}).current};const Fe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s.useMemo(()=>t.every(e=>null==e)?null:e=>{t.forEach(t=>{ve(t,e)})},t)};class De{constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new De}start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}}let ze=!0,Me=!1;const Ie=new De,$e={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Le(e){e.metaKey||e.altKey||e.ctrlKey||(ze=!0)}function Te(){ze=!1}function Re(){"hidden"===this.visibilityState&&Me&&(ze=!0)}function _e(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return ze||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!$e[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}const Oe=function(){const e=s.useCallback(e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",Le,!0),t.addEventListener("mousedown",Te,!0),t.addEventListener("pointerdown",Te,!0),t.addEventListener("touchstart",Te,!0),t.addEventListener("visibilitychange",Re,!0))},[]),t=s.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!_e(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(Me=!0,Ie.start(100,()=>{Me=!1}),t.current=!1,!0)},ref:e}},Pe={configure:e=>{i.configure(e)}}},7758:(e,t,n)=>{"use strict";n.d(t,{A:()=>L});var r=n(8604),i=n(7162),o=n(3815);const a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce((e,t)=>(t.filterProps.forEach(n=>{e[n]=t}),e),{}),i=e=>Object.keys(e).reduce((t,n)=>r[n]?(0,o.A)(t,r[n](e)):t,{});return i.propTypes={},i.filterProps=t.reduce((e,t)=>e.concat(t.filterProps),[]),i};var l=n(9751);function s(e){return"number"!==typeof e?e:`${e}px solid`}function c(e,t){return(0,i.Ay)({prop:e,themeKey:"borders",transform:t})}const u=c("border",s),d=c("borderTop",s),p=c("borderRight",s),f=c("borderBottom",s),h=c("borderLeft",s),m=c("borderColor"),g=c("borderTopColor"),x=c("borderRightColor"),v=c("borderBottomColor"),y=c("borderLeftColor"),b=c("outline",s),w=c("outlineColor"),k=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){const t=(0,r.MA)(e.theme,"shape.borderRadius",4,"borderRadius"),n=e=>({borderRadius:(0,r._W)(t,e)});return(0,l.NI)(e,e.borderRadius,n)}return null};k.propTypes={},k.filterProps=["borderRadius"];a(u,d,p,f,h,m,g,x,v,y,k,b,w);const j=e=>{if(void 0!==e.gap&&null!==e.gap){const t=(0,r.MA)(e.theme,"spacing",8,"gap"),n=e=>({gap:(0,r._W)(t,e)});return(0,l.NI)(e,e.gap,n)}return null};j.propTypes={},j.filterProps=["gap"];const S=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){const t=(0,r.MA)(e.theme,"spacing",8,"columnGap"),n=e=>({columnGap:(0,r._W)(t,e)});return(0,l.NI)(e,e.columnGap,n)}return null};S.propTypes={},S.filterProps=["columnGap"];const A=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){const t=(0,r.MA)(e.theme,"spacing",8,"rowGap"),n=e=>({rowGap:(0,r._W)(t,e)});return(0,l.NI)(e,e.rowGap,n)}return null};A.propTypes={},A.filterProps=["rowGap"];a(j,S,A,(0,i.Ay)({prop:"gridColumn"}),(0,i.Ay)({prop:"gridRow"}),(0,i.Ay)({prop:"gridAutoFlow"}),(0,i.Ay)({prop:"gridAutoColumns"}),(0,i.Ay)({prop:"gridAutoRows"}),(0,i.Ay)({prop:"gridTemplateColumns"}),(0,i.Ay)({prop:"gridTemplateRows"}),(0,i.Ay)({prop:"gridTemplateAreas"}),(0,i.Ay)({prop:"gridArea"}));function E(e,t){return"grey"===t?t:e}a((0,i.Ay)({prop:"color",themeKey:"palette",transform:E}),(0,i.Ay)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:E}),(0,i.Ay)({prop:"backgroundColor",themeKey:"palette",transform:E}));function C(e){return e<=1&&0!==e?100*e+"%":e}const F=(0,i.Ay)({prop:"width",transform:C}),D=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){const t=t=>{var n,r;const i=(null==(n=e.theme)||null==(n=n.breakpoints)||null==(n=n.values)?void 0:n[t])||l.zu[t];return i?"px"!==(null==(r=e.theme)||null==(r=r.breakpoints)?void 0:r.unit)?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:C(t)}};return(0,l.NI)(e,e.maxWidth,t)}return null};D.filterProps=["maxWidth"];const z=(0,i.Ay)({prop:"minWidth",transform:C}),M=(0,i.Ay)({prop:"height",transform:C}),I=(0,i.Ay)({prop:"maxHeight",transform:C}),$=(0,i.Ay)({prop:"minHeight",transform:C}),L=((0,i.Ay)({prop:"size",cssProperty:"width",transform:C}),(0,i.Ay)({prop:"size",cssProperty:"height",transform:C}),a(F,D,z,M,I,$,(0,i.Ay)({prop:"boxSizing"})),{border:{themeKey:"borders",transform:s},borderTop:{themeKey:"borders",transform:s},borderRight:{themeKey:"borders",transform:s},borderBottom:{themeKey:"borders",transform:s},borderLeft:{themeKey:"borders",transform:s},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:s},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:k},color:{themeKey:"palette",transform:E},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:E},backgroundColor:{themeKey:"palette",transform:E},p:{style:r.Ms},pt:{style:r.Ms},pr:{style:r.Ms},pb:{style:r.Ms},pl:{style:r.Ms},px:{style:r.Ms},py:{style:r.Ms},padding:{style:r.Ms},paddingTop:{style:r.Ms},paddingRight:{style:r.Ms},paddingBottom:{style:r.Ms},paddingLeft:{style:r.Ms},paddingX:{style:r.Ms},paddingY:{style:r.Ms},paddingInline:{style:r.Ms},paddingInlineStart:{style:r.Ms},paddingInlineEnd:{style:r.Ms},paddingBlock:{style:r.Ms},paddingBlockStart:{style:r.Ms},paddingBlockEnd:{style:r.Ms},m:{style:r.Lc},mt:{style:r.Lc},mr:{style:r.Lc},mb:{style:r.Lc},ml:{style:r.Lc},mx:{style:r.Lc},my:{style:r.Lc},margin:{style:r.Lc},marginTop:{style:r.Lc},marginRight:{style:r.Lc},marginBottom:{style:r.Lc},marginLeft:{style:r.Lc},marginX:{style:r.Lc},marginY:{style:r.Lc},marginInline:{style:r.Lc},marginInlineStart:{style:r.Lc},marginInlineEnd:{style:r.Lc},marginBlock:{style:r.Lc},marginBlockStart:{style:r.Lc},marginBlockEnd:{style:r.Lc},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:j},rowGap:{style:A},columnGap:{style:S},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:C},maxWidth:{style:D},minWidth:{transform:C},height:{transform:C},maxHeight:{transform:C},minHeight:{transform:C},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}})},7868:(e,t,n)=>{"use strict";function r(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}n.d(t,{A:()=>r})},7918:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A});var r=n(7598)},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},8052:(e,t,n)=>{"use strict";var r=n(4994);t.Ay=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:n=g,rootShouldForwardProp:r=h,slotShouldForwardProp:s=h}=e,u=e=>(0,c.default)((0,i.default)({},e,{theme:v((0,i.default)({},e,{defaultTheme:n,themeId:t}))}));return u.__mui_systemSx=!0,function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,a.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));const{name:d,slot:f,skipVariantsResolver:m,skipSx:g,overridesResolver:w=y(x(f))}=c,k=(0,o.default)(c,p),j=d&&d.startsWith("Mui")||f?"components":"custom",S=void 0!==m?m:f&&"Root"!==f&&"root"!==f||!1,A=g||!1;let E=h;"Root"===f||"root"===f?E=r:f?E=s:function(e){return"string"===typeof e&&e.charCodeAt(0)>96}(e)&&(E=void 0);const C=(0,a.default)(e,(0,i.default)({shouldForwardProp:E,label:undefined},k)),F=e=>"function"===typeof e&&e.__emotion_real!==e||(0,l.isPlainObject)(e)?r=>{const o=v({theme:r.theme,defaultTheme:n,themeId:t});return b(e,(0,i.default)({},r,{theme:o}),o.modularCssLayers?j:void 0)}:e,D=function(r){let o=F(r);for(var a=arguments.length,l=new Array(a>1?a-1:0),s=1;s<a;s++)l[s-1]=arguments[s];const c=l?l.map(F):[];d&&w&&c.push(e=>{const r=v((0,i.default)({},e,{defaultTheme:n,themeId:t}));if(!r.components||!r.components[d]||!r.components[d].styleOverrides)return null;const o=r.components[d].styleOverrides,a={};return Object.entries(o).forEach(t=>{let[n,o]=t;a[n]=b(o,(0,i.default)({},e,{theme:r}),r.modularCssLayers?"theme":void 0)}),w(e,a)}),d&&!S&&c.push(e=>{var r;const o=v((0,i.default)({},e,{defaultTheme:n,themeId:t}));return b({variants:null==o||null==(r=o.components)||null==(r=r[d])?void 0:r.variants},(0,i.default)({},e,{theme:o}),o.modularCssLayers?"theme":void 0)}),A||c.push(u);const p=c.length-l.length;if(Array.isArray(r)&&p>0){const e=new Array(p).fill("");o=[...r,...e],o.raw=[...r.raw,...e]}const f=C(o,...c);return e.muiName&&(f.muiName=e.muiName),f};return C.withConfig&&(D.withConfig=C.withConfig),D}};var i=r(n(4634)),o=r(n(4893)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(1602)),l=n(9482),s=(r(n(7918)),r(n(3382)),r(n(4989))),c=r(n(9265));const u=["ownerState"],d=["variants"],p=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function h(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}function m(e,t){return t&&e&&"object"===typeof e&&e.styles&&!e.styles.startsWith("@layer")&&(e.styles=`@layer ${t}{${String(e.styles)}}`),e}const g=(0,s.default)(),x=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function v(e){let{defaultTheme:t,theme:n,themeId:r}=e;return i=n,0===Object.keys(i).length?t:n[r]||n;var i}function y(e){return e?(t,n)=>n[e]:null}function b(e,t,n){let{ownerState:r}=t,l=(0,o.default)(t,u);const s="function"===typeof e?e((0,i.default)({ownerState:r},l)):e;if(Array.isArray(s))return s.flatMap(e=>b(e,(0,i.default)({ownerState:r},l),n));if(s&&"object"===typeof s&&Array.isArray(s.variants)){const{variants:e=[]}=s;let t=(0,o.default)(s,d);return e.forEach(e=>{let o=!0;if("function"===typeof e.props?o=e.props((0,i.default)({ownerState:r},l,r)):Object.keys(e.props).forEach(t=>{(null==r?void 0:r[t])!==e.props[t]&&l[t]!==e.props[t]&&(o=!1)}),o){Array.isArray(t)||(t=[t]);const o="function"===typeof e.style?e.style((0,i.default)({ownerState:r},l,r)):e.style;t.push(n?m((0,a.internal_serializeStyles)(o),n):o)}}),t}return n?m((0,a.internal_serializeStyles)(s),n):s}},8168:(e,t,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(null,arguments)}n.d(t,{A:()=>r})},8280:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var r=n(8168),i=n(8587),o=n(9172),a=n(4853);const l={borderRadius:4};var s=n(8604);var c=n(8812),u=n(7758),d=n(9703);const p=["breakpoints","palette","spacing","shape"];const f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{breakpoints:t={},palette:n={},spacing:f,shape:h={}}=e,m=(0,i.A)(e,p),g=(0,a.A)(t),x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(e.mui)return e;const t=(0,s.LX)({spacing:e}),n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0===n.length?[1]:n).map(e=>{const n=t(e);return"number"===typeof n?`${n}px`:n}).join(" ")};return n.mui=!0,n}(f);let v=(0,o.A)({breakpoints:g,direction:"ltr",components:{},palette:(0,r.A)({mode:"light"},n),spacing:x,shape:(0,r.A)({},l,h)},m);v.applyStyles=d.A;for(var y=arguments.length,b=new Array(y>1?y-1:0),w=1;w<y;w++)b[w-1]=arguments[w];return v=b.reduce((e,t)=>(0,o.A)(e,t),v),v.unstable_sxConfig=(0,r.A)({},u.A,null==m?void 0:m.unstable_sxConfig),v.unstable_sx=function(e){return(0,c.A)({sx:e,theme:this})},v}},8348:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"}),"Info")},8587:(e,t,n)=>{"use strict";function r(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}n.d(t,{A:()=>r})},8604:(e,t,n)=>{"use strict";n.d(t,{LX:()=>h,MA:()=>f,_W:()=>m,Lc:()=>v,Ms:()=>y});var r=n(9751),i=n(7162),o=n(3815);const a={m:"margin",p:"padding"},l={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},s={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},c=function(e){const t={};return n=>(void 0===t[n]&&(t[n]=e(n)),t[n])}(e=>{if(e.length>2){if(!s[e])return[e];e=s[e]}const[t,n]=e.split(""),r=a[t],i=l[n]||"";return Array.isArray(i)?i.map(e=>r+e):[r+i]}),u=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],d=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],p=[...u,...d];function f(e,t,n,r){var o;const a=null!=(o=(0,i.Yn)(e,t,!1))?o:n;return"number"===typeof a?e=>"string"===typeof e?e:a*e:Array.isArray(a)?e=>"string"===typeof e?e:a[e]:"function"===typeof a?a:()=>{}}function h(e){return f(e,"spacing",8)}function m(e,t){if("string"===typeof t||null==t)return t;const n=e(Math.abs(t));return t>=0?n:"number"===typeof n?-n:`-${n}`}function g(e,t,n,i){if(-1===t.indexOf(n))return null;const o=function(e,t){return n=>e.reduce((e,r)=>(e[r]=m(t,n),e),{})}(c(n),i),a=e[n];return(0,r.NI)(e,a,o)}function x(e,t){const n=h(e.theme);return Object.keys(e).map(r=>g(e,t,r,n)).reduce(o.A,{})}function v(e){return x(e,u)}function y(e){return x(e,d)}function b(e){return x(e,p)}v.propTypes={},v.filterProps=u,y.propTypes={},y.filterProps=d,b.propTypes={},b.filterProps=p},8812:(e,t,n)=>{"use strict";n.d(t,{A:()=>u,k:()=>s});var r=n(7598),i=n(3815),o=n(7162),a=n(9751),l=n(7758);function s(){function e(e,t,n,i){const l={[e]:t,theme:n},s=i[e];if(!s)return{[e]:t};const{cssProperty:c=e,themeKey:u,transform:d,style:p}=s;if(null==t)return null;if("typography"===u&&"inherit"===t)return{[e]:t};const f=(0,o.Yn)(n,u)||{};if(p)return p(l);return(0,a.NI)(l,t,t=>{let n=(0,o.BO)(f,d,t);return t===n&&"string"===typeof t&&(n=(0,o.BO)(f,d,`${e}${"default"===t?"":(0,r.A)(t)}`,t)),!1===c?n:{[c]:n}})}return function t(n){var r;const{sx:o,theme:s={},nested:c}=n||{};if(!o)return null;const u=null!=(r=s.unstable_sxConfig)?r:l.A;function d(n){let r=n;if("function"===typeof n)r=n(s);else if("object"!==typeof n)return n;if(!r)return null;const o=(0,a.EU)(s.breakpoints),l=Object.keys(o);let d=o;return Object.keys(r).forEach(n=>{const o=(l=r[n],c=s,"function"===typeof l?l(c):l);var l,c;if(null!==o&&void 0!==o)if("object"===typeof o)if(u[n])d=(0,i.A)(d,e(n,o,s,u));else{const e=(0,a.NI)({theme:s},o,e=>({[n]:e}));!function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce((e,t)=>e.concat(Object.keys(t)),[]),i=new Set(r);return t.every(e=>i.size===Object.keys(e).length)}(e,o)?d=(0,i.A)(d,e):d[n]=t({sx:o,theme:s,nested:!0})}else d=(0,i.A)(d,e(n,o,s,u))}),!c&&s.modularCssLayers?{"@layer sx":(0,a.vf)(l,d)}:(0,a.vf)(l,d)}return Array.isArray(o)?o.map(d):d(o)}}const c=s();c.filterProps=["sx"];const u=c},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},9172:(e,t,n)=>{"use strict";n.d(t,{A:()=>l,Q:()=>o});var r=n(8168),i=n(5043);function o(e){if("object"!==typeof e||null===e)return!1;const t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function a(e){if(i.isValidElement(e)||!o(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=a(e[n])}),t}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{clone:!0};const s=n.clone?(0,r.A)({},e):e;return o(e)&&o(t)&&Object.keys(t).forEach(r=>{i.isValidElement(t[r])?s[r]=t[r]:o(t[r])&&Object.prototype.hasOwnProperty.call(e,r)&&o(e[r])?s[r]=l(e[r],t[r],n):n.clone?s[r]=o(t[r])?a(t[r]):t[r]:s[r]=t[r]}),s}},9214:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MIN_SAFE_INTEGER,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Number.MAX_SAFE_INTEGER;return Math.max(t,Math.min(e,n))}},9265:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A,extendSxProp:()=>u,unstable_createStyleFunctionSx:()=>r.k,unstable_defaultSxConfig:()=>l.A});var r=n(8812),i=n(8168),o=n(8587),a=n(9172),l=n(7758);const s=["sx"],c=e=>{var t,n;const r={systemProps:{},otherProps:{}},i=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:l.A;return Object.keys(e).forEach(t=>{i[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]}),r};function u(e){const{sx:t}=e,n=(0,o.A)(e,s),{systemProps:r,otherProps:l}=c(n);let u;return u=Array.isArray(t)?[r,...t]:"function"===typeof t?function(){const e=t(...arguments);return(0,a.Q)(e)?(0,i.A)({},r,e):r}:(0,i.A)({},r,t),(0,i.A)({},l,{sx:u})}},9482:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A,isPlainObject:()=>r.Q});var r=n(9172)},9611:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu")},9703:(e,t,n)=>{"use strict";function r(e,t){const n=this;if(n.vars&&"function"===typeof n.getColorSchemeSelector){const r=n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)");return{[r]:t}}return n.palette.mode===e?t:{}}n.d(t,{A:()=>r})},9751:(e,t,n)=>{"use strict";n.d(t,{EU:()=>a,NI:()=>o,vf:()=>l,zu:()=>r});const r={xs:0,sm:600,md:900,lg:1200,xl:1536},i={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${r[e]}px)`};function o(e,t,n){const o=e.theme||{};if(Array.isArray(t)){const e=o.breakpoints||i;return t.reduce((r,i,o)=>(r[e.up(e.keys[o])]=n(t[o]),r),{})}if("object"===typeof t){const e=o.breakpoints||i;return Object.keys(t).reduce((i,o)=>{if(-1!==Object.keys(e.values||r).indexOf(o)){i[e.up(o)]=n(t[o],o)}else{const e=o;i[e]=t[e]}return i},{})}return n(t)}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var t;return(null==(t=e.keys)?void 0:t.reduce((t,n)=>(t[e.up(n)]={},t),{}))||{}}function l(e,t){return e.reduce((e,t)=>{const n=e[t];return(!n||0===Object.keys(n).length)&&delete e[t],e},t)}},9778:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle")},9882:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var i=r(n(39)),o=n(579);t.A=(0,i.default)((0,o.jsx)("path",{d:"m16.24 11.51 1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3 17.25V21h3.75l4.76-4.76 4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.45 1.45zm7.88 7.89-4.13-4.13 1.9-1.9 1.45 1.45-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27zm3.65-11.92c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83 3.75 3.75z"}),"DesignServices")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&r;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>a[e]=()=>r[e]);return a.default=()=>r,n.d(o,a),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.nc=void 0,(()=>{"use strict";var e,t=n(5043),r=n.t(t,2),i=n(4391);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const a="popstate";function l(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function s(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,t,n,r){return void 0===n&&(n=null),o({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?p(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function f(t,n,r,i){void 0===i&&(i={});let{window:s=document.defaultView,v5Compat:p=!1}=i,f=s.history,h=e.Pop,m=null,g=x();function x(){return(f.state||{idx:null}).idx}function v(){h=e.Pop;let t=x(),n=null==t?null:t-g;g=t,m&&m({action:h,location:b.location,delta:n})}function y(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"===typeof e?e:d(e);return n=n.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,f.replaceState(o({},f.state,{idx:g}),""));let b={get action(){return h},get location(){return t(s,f)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(a,v),m=e,()=>{s.removeEventListener(a,v),m=null}},createHref:e=>n(s,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let i=u(b.location,t,n);r&&r(i,t),g=x()+1;let o=c(i,g),a=b.createHref(i);try{f.pushState(o,"",a)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;s.location.assign(a)}p&&m&&m({action:h,location:b.location,delta:1})},replace:function(t,n){h=e.Replace;let i=u(b.location,t,n);r&&r(i,t),g=x();let o=c(i,g),a=b.createHref(i);f.replaceState(o,"",a),p&&m&&m({action:h,location:b.location,delta:0})},go:e=>f.go(e)};return b}var h;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(h||(h={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function m(e,t,n){return void 0===n&&(n="/"),g(e,t,n,!1)}function g(e,t,n,r){let i=z(("string"===typeof t?p(t):t).pathname||"/",n);if(null==i)return null;let o=x(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o);let a=null;for(let l=0;null==a&&l<o.length;++l){let e=D(i);a=C(o[l],e,r)}return a}function x(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,o)=>{let a={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(l(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let s=T([r,a.relativePath]),c=n.concat(a);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),x(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:E(s,e.index),routesMeta:c})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of v(e.path))i(e,t,r);else i(e,t)}),t}function v(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=v(r.join("/")),l=[];return l.push(...a.map(e=>""===e?o:[o,e].join("/"))),i&&l.push(...a),l.map(t=>e.startsWith("/")&&""===t?"/":t)}const y=/^:[\w-]+$/,b=3,w=2,k=1,j=10,S=-2,A=e=>"*"===e;function E(e,t){let n=e.split("/"),r=n.length;return n.some(A)&&(r+=S),t&&(r+=w),n.filter(e=>!A(e)).reduce((e,t)=>e+(y.test(t)?b:""===t?k:j),r)}function C(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===o?t:t.slice(o.length)||"/",u=F({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=F({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),a.push({params:i,pathname:T([o,u.pathname]),pathnameBase:R(T([o,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(o=T([o,u.pathnameBase]))}return a}function F(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=l[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=i&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:o,pathnameBase:a,pattern:e}}function D(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function z(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function M(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function I(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function $(e,t){let n=I(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function L(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=p(e):(i=o({},e),l(!i.pathname||!i.pathname.includes("?"),M("?","pathname","search",i)),l(!i.pathname||!i.pathname.includes("#"),M("#","pathname","hash",i)),l(!i.search||!i.search.includes("#"),M("#","search","hash",i)));let a,s=""===e||""===i.pathname,c=s?"/":i.pathname;if(null==c)a=n;else{let e=t.length-1;if(!r&&c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?p(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:_(r),hash:O(i)}}(i,a),d=c&&"/"!==c&&c.endsWith("/"),f=(s||"."===c)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}const T=e=>e.join("/").replace(/\/\/+/g,"/"),R=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",O=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function P(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const N=["post","put","patch","delete"],B=(new Set(N),["get",...N]);new Set(B),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}const W=t.createContext(null);const H=t.createContext(null);const V=t.createContext(null);const G=t.createContext(null);const K=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Y=t.createContext(null);function X(){return null!=t.useContext(G)}function q(){return X()||l(!1),t.useContext(G).location}function Q(e){t.useContext(V).static||t.useLayoutEffect(e)}function J(){let{isDataRoute:e}=t.useContext(K);return e?function(){let{router:e}=se(ae.UseNavigateStable),n=ue(le.UseNavigateStable),r=t.useRef(!1);return Q(()=>{r.current=!0}),t.useCallback(function(t,i){void 0===i&&(i={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,U({fromRouteId:n},i)))},[e,n])}():function(){X()||l(!1);let e=t.useContext(W),{basename:n,future:r,navigator:i}=t.useContext(V),{matches:o}=t.useContext(K),{pathname:a}=q(),s=JSON.stringify($(o,r.v7_relativeSplatPath)),c=t.useRef(!1);return Q(()=>{c.current=!0}),t.useCallback(function(t,r){if(void 0===r&&(r={}),!c.current)return;if("number"===typeof t)return void i.go(t);let o=L(t,JSON.parse(s),a,"path"===r.relative);null==e&&"/"!==n&&(o.pathname="/"===o.pathname?n:T([n,o.pathname])),(r.replace?i.replace:i.push)(o,r.state,r)},[n,i,s,a,e])}()}function Z(e,n){let{relative:r}=void 0===n?{}:n,{future:i}=t.useContext(V),{matches:o}=t.useContext(K),{pathname:a}=q(),l=JSON.stringify($(o,i.v7_relativeSplatPath));return t.useMemo(()=>L(e,JSON.parse(l),a,"path"===r),[e,l,a,r])}function ee(n,r,i,o){X()||l(!1);let{navigator:a}=t.useContext(V),{matches:s}=t.useContext(K),c=s[s.length-1],u=c?c.params:{},d=(c&&c.pathname,c?c.pathnameBase:"/");c&&c.route;let f,h=q();if(r){var g;let e="string"===typeof r?p(r):r;"/"===d||(null==(g=e.pathname)?void 0:g.startsWith(d))||l(!1),f=e}else f=h;let x=f.pathname||"/",v=x;if("/"!==d){let e=d.replace(/^\//,"").split("/");v="/"+x.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=m(n,{pathname:v});let b=oe(y&&y.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:T([d,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:T([d,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),s,i,o);return r&&b?t.createElement(G.Provider,{value:{location:U({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},b):b}function te(){let e=function(){var e;let n=t.useContext(Y),r=ce(le.UseRouteError),i=ue(le.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[i]}(),n=P(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:o},r):null,null)}const ne=t.createElement(te,null);class re extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(K.Provider,{value:this.props.routeContext},t.createElement(Y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ie(e){let{routeContext:n,match:r,children:i}=e,o=t.useContext(W);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(K.Provider,{value:n},i)}function oe(e,n,r,i){var o;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===i&&(i=null),null==e){var a;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(a=i)&&a.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,c=null==(o=r)?void 0:o.errors;if(null!=c){let e=s.findIndex(e=>e.route.id&&void 0!==(null==c?void 0:c[e.route.id]));e>=0||l(!1),s=s.slice(0,Math.min(s.length,e+1))}let u=!1,d=-1;if(r&&i&&i.v7_partialHydration)for(let t=0;t<s.length;t++){let e=s[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,i=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||i){u=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight((e,i,o)=>{let a,l=!1,p=null,f=null;var h;r&&(a=c&&i.route.id?c[i.route.id]:void 0,p=i.route.errorElement||ne,u&&(d<0&&0===o?(h="route-fallback",!1||de[h]||(de[h]=!0),l=!0,f=null):d===o&&(l=!0,f=i.route.hydrateFallbackElement||null)));let m=n.concat(s.slice(0,o+1)),g=()=>{let n;return n=a?p:l?f:i.route.Component?t.createElement(i.route.Component,null):i.route.element?i.route.element:e,t.createElement(ie,{match:i,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===o)?t.createElement(re,{location:r.location,revalidation:r.revalidation,component:p,error:a,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var ae=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ae||{}),le=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(le||{});function se(e){let n=t.useContext(W);return n||l(!1),n}function ce(e){let n=t.useContext(H);return n||l(!1),n}function ue(e){let n=function(){let e=t.useContext(K);return e||l(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||l(!1),r.route.id}const de={};function pe(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function fe(e){l(!1)}function he(n){let{basename:r="/",children:i=null,location:o,navigationType:a=e.Pop,navigator:s,static:c=!1,future:u}=n;X()&&l(!1);let d=r.replace(/^\/*/,"/"),f=t.useMemo(()=>({basename:d,navigator:s,static:c,future:U({v7_relativeSplatPath:!1},u)}),[d,u,s,c]);"string"===typeof o&&(o=p(o));let{pathname:h="/",search:m="",hash:g="",state:x=null,key:v="default"}=o,y=t.useMemo(()=>{let e=z(h,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:x,key:v},navigationType:a}},[d,h,m,g,x,v,a]);return null==y?null:t.createElement(V.Provider,{value:f},t.createElement(G.Provider,{children:i,value:y}))}function me(e){let{children:t,location:n}=e;return function(e,t){return ee(e,t)}(ge(t),n)}new Promise(()=>{});t.Component;function ge(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,(e,i)=>{if(!t.isValidElement(e))return;let o=[...n,i];if(e.type===t.Fragment)return void r.push.apply(r,ge(e.props.children,o));e.type!==fe&&l(!1),e.props.index&&e.props.children&&l(!1);let a={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=ge(e.props.children,o)),r.push(a)}),r}var xe=n(7950),ve=n.t(xe,2);function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye.apply(this,arguments)}function be(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const we=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ke=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch(yf){}const je=t.createContext({isTransitioning:!1});new Map;const Se=r.startTransition;ve.flushSync,r.useId;function Ae(e){let{basename:n,children:r,future:i,window:o}=e,a=t.useRef();var l;null==a.current&&(a.current=(void 0===(l={window:o,v5Compat:!0})&&(l={}),f(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return u("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:d(t)},null,l)));let s=a.current,[c,p]=t.useState({action:s.action,location:s.location}),{v7_startTransition:h}=i||{},m=t.useCallback(e=>{h&&Se?Se(()=>p(e)):p(e)},[p,h]);return t.useLayoutEffect(()=>s.listen(m),[s,m]),t.useEffect(()=>pe(i),[i]),t.createElement(he,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:s,future:i})}const Ee="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Ce=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fe=t.forwardRef(function(e,n){let r,{onClick:i,relative:o,reloadDocument:a,replace:s,state:c,target:u,to:p,preventScrollReset:f,viewTransition:h}=e,m=be(e,we),{basename:g}=t.useContext(V),x=!1;if("string"===typeof p&&Ce.test(p)&&(r=p,Ee))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),n=z(t.pathname,g);t.origin===e.origin&&null!=n?p=n+t.search+t.hash:x=!0}catch(yf){}let v=function(e,n){let{relative:r}=void 0===n?{}:n;X()||l(!1);let{basename:i,navigator:o}=t.useContext(V),{hash:a,pathname:s,search:c}=Z(e,{relative:r}),u=s;return"/"!==i&&(u="/"===s?i:T([i,s])),o.createHref({pathname:u,search:c,hash:a})}(p,{relative:o}),y=function(e,n){let{target:r,replace:i,state:o,preventScrollReset:a,relative:l,viewTransition:s}=void 0===n?{}:n,c=J(),u=q(),p=Z(e,{relative:l});return t.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==i?i:d(u)===d(p);c(e,{replace:n,state:o,preventScrollReset:a,relative:l,viewTransition:s})}},[u,c,p,i,o,r,e,a,l,s])}(p,{replace:s,state:c,target:u,preventScrollReset:f,relative:o,viewTransition:h});return t.createElement("a",ye({},m,{href:r||v,onClick:x||a?i:function(e){i&&i(e),e.defaultPrevented||y(e)},ref:n,target:u}))});const De=t.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:c,viewTransition:u,children:d}=e,p=be(e,ke),f=Z(c,{relative:p.relative}),h=q(),m=t.useContext(H),{navigator:g,basename:x}=t.useContext(V),v=null!=m&&function(e,n){void 0===n&&(n={});let r=t.useContext(je);null==r&&l(!1);let{basename:i}=Ie(ze.useViewTransitionState),o=Z(e,{relative:n.relative});if(!r.isTransitioning)return!1;let a=z(r.currentLocation.pathname,i)||r.currentLocation.pathname,s=z(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=F(o.pathname,s)||null!=F(o.pathname,a)}(f)&&!0===u,y=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,b=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(b=b.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&x&&(w=z(w,x)||w);const k="/"!==y&&y.endsWith("/")?y.length-1:y.length;let j,S=b===y||!a&&b.startsWith(y)&&"/"===b.charAt(k),A=null!=w&&(w===y||!a&&w.startsWith(y)&&"/"===w.charAt(y.length)),E={isActive:S,isPending:A,isTransitioning:v},C=S?r:void 0;j="function"===typeof o?o(E):[o,S?"active":null,A?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let D="function"===typeof s?s(E):s;return t.createElement(Fe,ye({},p,{"aria-current":C,className:j,ref:n,style:D,to:c,viewTransition:u}),"function"===typeof d?d(E):d)});var ze,Me;function Ie(e){let n=t.useContext(W);return n||l(!1),n}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ze||(ze={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Me||(Me={}));var $e=function(){return $e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},$e.apply(this,arguments)};Object.create;function Le(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Te=n(7324),Re=n.n(Te),_e="-ms-",Oe="-moz-",Pe="-webkit-",Ne="comm",Be="rule",Ue="decl",We="@keyframes",He=Math.abs,Ve=String.fromCharCode,Ge=Object.assign;function Ke(e){return e.trim()}function Ye(e,t){return(e=t.exec(e))?e[0]:e}function Xe(e,t,n){return e.replace(t,n)}function qe(e,t,n){return e.indexOf(t,n)}function Qe(e,t){return 0|e.charCodeAt(t)}function Je(e,t,n){return e.slice(t,n)}function Ze(e){return e.length}function et(e){return e.length}function tt(e,t){return t.push(e),e}function nt(e,t){return e.filter(function(e){return!Ye(e,t)})}var rt=1,it=1,ot=0,at=0,lt=0,st="";function ct(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:rt,column:it,length:a,return:"",siblings:l}}function ut(e,t){return Ge(ct("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function dt(e){for(;e.root;)e=ut(e.root,{children:[e]});tt(e,e.siblings)}function pt(){return lt=at>0?Qe(st,--at):0,it--,10===lt&&(it=1,rt--),lt}function ft(){return lt=at<ot?Qe(st,at++):0,it++,10===lt&&(it=1,rt++),lt}function ht(){return Qe(st,at)}function mt(){return at}function gt(e,t){return Je(st,e,t)}function xt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vt(e){return rt=it=1,ot=Ze(st=e),at=0,[]}function yt(e){return st="",e}function bt(e){return Ke(gt(at-1,jt(91===e?e+2:40===e?e+1:e)))}function wt(e){for(;(lt=ht())&&lt<33;)ft();return xt(e)>2||xt(lt)>3?"":" "}function kt(e,t){for(;--t&&ft()&&!(lt<48||lt>102||lt>57&&lt<65||lt>70&&lt<97););return gt(e,mt()+(t<6&&32==ht()&&32==ft()))}function jt(e){for(;ft();)switch(lt){case e:return at;case 34:case 39:34!==e&&39!==e&&jt(lt);break;case 40:41===e&&jt(e);break;case 92:ft()}return at}function St(e,t){for(;ft()&&e+lt!==57&&(e+lt!==84||47!==ht()););return"/*"+gt(t,at-1)+"*"+Ve(47===e?e:ft())}function At(e){for(;!xt(ht());)ft();return gt(e,at)}function Et(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ct(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Ue:return e.return=e.return||e.value;case Ne:return"";case We:return e.return=e.value+"{"+Et(e.children,r)+"}";case Be:if(!Ze(e.value=e.props.join(",")))return""}return Ze(n=Et(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ft(e,t,n){switch(function(e,t){return 45^Qe(e,0)?(((t<<2^Qe(e,0))<<2^Qe(e,1))<<2^Qe(e,2))<<2^Qe(e,3):0}(e,t)){case 5103:return Pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Pe+e+e;case 4789:return Oe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Pe+e+Oe+e+_e+e+e;case 5936:switch(Qe(e,t+11)){case 114:return Pe+e+_e+Xe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Pe+e+_e+Xe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Pe+e+_e+Xe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Pe+e+_e+e+e;case 6165:return Pe+e+_e+"flex-"+e+e;case 5187:return Pe+e+Xe(e,/(\w+).+(:[^]+)/,Pe+"box-$1$2"+_e+"flex-$1$2")+e;case 5443:return Pe+e+_e+"flex-item-"+Xe(e,/flex-|-self/g,"")+(Ye(e,/flex-|baseline/)?"":_e+"grid-row-"+Xe(e,/flex-|-self/g,""))+e;case 4675:return Pe+e+_e+"flex-line-pack"+Xe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Pe+e+_e+Xe(e,"shrink","negative")+e;case 5292:return Pe+e+_e+Xe(e,"basis","preferred-size")+e;case 6060:return Pe+"box-"+Xe(e,"-grow","")+Pe+e+_e+Xe(e,"grow","positive")+e;case 4554:return Pe+Xe(e,/([^-])(transform)/g,"$1"+Pe+"$2")+e;case 6187:return Xe(Xe(Xe(e,/(zoom-|grab)/,Pe+"$1"),/(image-set)/,Pe+"$1"),e,"")+e;case 5495:case 3959:return Xe(e,/(image-set\([^]*)/,Pe+"$1$`$1");case 4968:return Xe(Xe(e,/(.+:)(flex-)?(.*)/,Pe+"box-pack:$3"+_e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Pe+e+e;case 4200:if(!Ye(e,/flex-|baseline/))return _e+"grid-column-align"+Je(e,t)+e;break;case 2592:case 3360:return _e+Xe(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Ye(e.props,/grid-\w+-end/)})?~qe(e+(n=n[t].value),"span",0)?e:_e+Xe(e,"-start","")+e+_e+"grid-row-span:"+(~qe(n,"span",0)?Ye(n,/\d+/):+Ye(n,/\d+/)-+Ye(e,/\d+/))+";":_e+Xe(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Ye(e.props,/grid-\w+-start/)})?e:_e+Xe(Xe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Xe(e,/(.+)-inline(.+)/,Pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ze(e)-1-t>6)switch(Qe(e,t+1)){case 109:if(45!==Qe(e,t+4))break;case 102:return Xe(e,/(.+:)(.+)-([^]+)/,"$1"+Pe+"$2-$3$1"+Oe+(108==Qe(e,t+3)?"$3":"$2-$3"))+e;case 115:return~qe(e,"stretch",0)?Ft(Xe(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Xe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,o,a,l){return _e+n+":"+r+l+(i?_e+n+"-span:"+(o?a:+a-+r)+l:"")+e});case 4949:if(121===Qe(e,t+6))return Xe(e,":",":"+Pe)+e;break;case 6444:switch(Qe(e,45===Qe(e,14)?18:11)){case 120:return Xe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Pe+(45===Qe(e,14)?"inline-":"")+"box$3$1"+Pe+"$2$3$1"+_e+"$2box$3")+e;case 100:return Xe(e,":",":"+_e)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Xe(e,"scroll-","scroll-snap-")+e}return e}function Dt(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ue:return void(e.return=Ft(e.value,e.length,n));case We:return Et([ut(e,{value:Xe(e.value,"@","@"+Pe)})],r);case Be:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Ye(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dt(ut(e,{props:[Xe(t,/:(read-\w+)/,":-moz-$1")]})),dt(ut(e,{props:[t]})),Ge(e,{props:nt(n,r)});break;case"::placeholder":dt(ut(e,{props:[Xe(t,/:(plac\w+)/,":"+Pe+"input-$1")]})),dt(ut(e,{props:[Xe(t,/:(plac\w+)/,":-moz-$1")]})),dt(ut(e,{props:[Xe(t,/:(plac\w+)/,_e+"input-$1")]})),dt(ut(e,{props:[t]})),Ge(e,{props:nt(n,r)})}return""})}}function zt(e){return yt(Mt("",null,null,null,[""],e=vt(e),0,[0],e))}function Mt(e,t,n,r,i,o,a,l,s){for(var c=0,u=0,d=a,p=0,f=0,h=0,m=1,g=1,x=1,v=0,y="",b=i,w=o,k=r,j=y;g;)switch(h=v,v=ft()){case 40:if(108!=h&&58==Qe(j,d-1)){-1!=qe(j+=Xe(bt(v),"&","&\f"),"&\f",He(c?l[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:j+=bt(v);break;case 9:case 10:case 13:case 32:j+=wt(h);break;case 92:j+=kt(mt()-1,7);continue;case 47:switch(ht()){case 42:case 47:tt($t(St(ft(),mt()),t,n,s),s);break;default:j+="/"}break;case 123*m:l[c++]=Ze(j)*x;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==x&&(j=Xe(j,/\f/g,"")),f>0&&Ze(j)-d&&tt(f>32?Lt(j+";",r,n,d-1,s):Lt(Xe(j," ","")+";",r,n,d-2,s),s);break;case 59:j+=";";default:if(tt(k=It(j,t,n,c,u,i,l,y,b=[],w=[],d,o),o),123===v)if(0===u)Mt(j,t,k,k,b,o,d,l,w);else switch(99===p&&110===Qe(j,3)?100:p){case 100:case 108:case 109:case 115:Mt(e,k,k,r&&tt(It(e,k,k,0,0,i,l,y,i,b=[],d,w),w),i,w,d,l,r?b:w);break;default:Mt(j,k,k,k,[""],w,0,l,w)}}c=u=f=0,m=x=1,y=j="",d=a;break;case 58:d=1+Ze(j),f=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==pt())continue;switch(j+=Ve(v),v*m){case 38:x=u>0?1:(j+="\f",-1);break;case 44:l[c++]=(Ze(j)-1)*x,x=1;break;case 64:45===ht()&&(j+=bt(ft())),p=ht(),u=d=Ze(y=j+=At(mt())),v++;break;case 45:45===h&&2==Ze(j)&&(m=0)}}return o}function It(e,t,n,r,i,o,a,l,s,c,u,d){for(var p=i-1,f=0===i?o:[""],h=et(f),m=0,g=0,x=0;m<r;++m)for(var v=0,y=Je(e,p+1,p=He(g=a[m])),b=e;v<h;++v)(b=Ke(g>0?f[v]+" "+y:Xe(y,/&\f/g,f[v])))&&(s[x++]=b);return ct(e,t,n,0===i?Be:l,s,c,u,d)}function $t(e,t,n,r){return ct(e,t,n,Ne,Ve(lt),Je(e,2,-2),0,r)}function Lt(e,t,n,r,i){return ct(e,t,n,Ue,Je(e,0,r),Je(e,r+1,-1),r,i)}var Tt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",_t="active",Ot="data-styled-version",Pt="6.1.19",Nt="/*!sc*/\n",Bt="undefined"!=typeof window&&"undefined"!=typeof document,Ut=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Wt={},Ht=(new Set,Object.freeze([])),Vt=Object.freeze({});function Gt(e,t,n){return void 0===n&&(n=Vt),e.theme!==n.theme&&e.theme||t||n.theme}var Kt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Yt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xt=/(^-|-$)/g;function qt(e){return e.replace(Yt,"-").replace(Xt,"")}var Qt=/(a)(d)/gi,Jt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Zt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Jt(t%52)+n;return(Jt(t%52)+n).replace(Qt,"$1-$2")}var en,tn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},nn=function(e){return tn(5381,e)};function rn(e){return Zt(nn(e)>>>0)}function on(e){return e.displayName||e.name||"Component"}function an(e){return"string"==typeof e&&!0}var ln="function"==typeof Symbol&&Symbol.for,sn=ln?Symbol.for("react.memo"):60115,cn=ln?Symbol.for("react.forward_ref"):60112,un={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},dn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fn=((en={})[cn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},en[sn]=pn,en);function hn(e){return("type"in(t=e)&&t.type.$$typeof)===sn?pn:"$$typeof"in e?fn[e.$$typeof]:un;var t}var mn=Object.defineProperty,gn=Object.getOwnPropertyNames,xn=Object.getOwnPropertySymbols,vn=Object.getOwnPropertyDescriptor,yn=Object.getPrototypeOf,bn=Object.prototype;function wn(e,t,n){if("string"!=typeof t){if(bn){var r=yn(t);r&&r!==bn&&wn(e,r,n)}var i=gn(t);xn&&(i=i.concat(xn(t)));for(var o=hn(e),a=hn(t),l=0;l<i.length;++l){var s=i[l];if(!(s in dn||n&&n[s]||a&&s in a||o&&s in o)){var c=vn(t,s);try{mn(e,s,c)}catch(e){}}}}return e}function kn(e){return"function"==typeof e}function jn(e){return"object"==typeof e&&"styledComponentId"in e}function Sn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function An(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function En(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Cn(e,t,n){if(void 0===n&&(n=!1),!n&&!En(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Cn(e[r],t[r]);else if(En(t))for(var r in t)e[r]=Cn(e[r],t[r]);return e}function Fn(e,t){Object.defineProperty(e,"toString",{value:t})}function Dn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var zn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Dn(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(Nt);return t},e}(),Mn=new Map,In=new Map,$n=1,Ln=function(e){if(Mn.has(e))return Mn.get(e);for(;In.has($n);)$n++;var t=$n++;return Mn.set(e,t),In.set(t,e),t},Tn=function(e,t){$n=t+1,Mn.set(e,t),In.set(t,e)},Rn="style[".concat(Rt,"][").concat(Ot,'="').concat(Pt,'"]'),_n=new RegExp("^".concat(Rt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),On=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},Pn=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Nt),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(_n);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(Tn(u,c),On(e,u,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},Nn=function(e){for(var t=document.querySelectorAll(Rn),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Rt)!==_t&&(Pn(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Bn(){return n.nc}var Un=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Rt,"]")));return t[t.length-1]}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(Rt,_t),r.setAttribute(Ot,Pt);var a=Bn();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Wn=function(){function e(e){this.element=Un(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Dn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Hn=function(){function e(e){this.element=Un(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Vn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Gn=Bt,Kn={isServer:!Bt,useCSSOMInjection:!Ut},Yn=function(){function e(e,t,n){void 0===e&&(e=Vt),void 0===t&&(t={});var r=this;this.options=$e($e({},Kn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Bt&&Gn&&(Gn=!1,Nn(this)),Fn(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return In.get(e)}(n);if(void 0===i)return"continue";var o=e.names.get(i),a=t.getGroup(n);if(void 0===o||!o.size||0===a.length)return"continue";var l="".concat(Rt,".g").concat(n,'[id="').concat(i,'"]'),s="";void 0!==o&&o.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),r+="".concat(a).concat(l,'{content:"').concat(s,'"}').concat(Nt)},o=0;o<n;o++)i(o);return r}(r)})}return e.registerId=function(e){return Ln(e)},e.prototype.rehydrate=function(){!this.server&&Bt&&Nn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e($e($e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Vn(n):t?new Wn(n):new Hn(n)}(this.options),new zn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Ln(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Ln(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Ln(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Xn=/&/g,qn=/^\s*\/\/.*$/gm;function Qn(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Qn(e.children,t)),e})}function Jn(e){var t,n,r,i=void 0===e?Vt:e,o=i.options,a=void 0===o?Vt:o,l=i.plugins,s=void 0===l?Ht:l,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push(function(e){e.type===Be&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Xn,n).replace(r,c))}),a.prefix&&u.push(Dt),u.push(Ct);var d=function(e,i,o,l){void 0===i&&(i=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(qn,""),c=zt(o||i?"".concat(o," ").concat(i," { ").concat(s," }"):s);a.namespace&&(c=Qn(c,a.namespace));var d,p=[];return Et(c,function(e){var t=et(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=s.length?s.reduce(function(e,t){return t.name||Dn(15),tn(e,t.name)},5381).toString():"",d}var Zn=new Yn,er=Jn(),tr=t.createContext({shouldForwardProp:void 0,styleSheet:Zn,stylis:er}),nr=(tr.Consumer,t.createContext(void 0));function rr(){return(0,t.useContext)(tr)}function ir(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],i=n[1],o=rr().styleSheet,a=(0,t.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),l=(0,t.useMemo)(function(){return Jn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)(function(){Re()(r,e.stylisPlugins)||i(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,t.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:l}},[e.shouldForwardProp,a,l]);return t.createElement(tr.Provider,{value:s},t.createElement(nr.Provider,{value:l},e.children))}var or=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=er);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Fn(this,function(){throw Dn(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=er),this.name+e.hash},e}(),ar=function(e){return e>="A"&&e<="Z"};function lr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;ar(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var sr=function(e){return null==e||!1===e||""===e},cr=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!sr(o)&&(Array.isArray(o)&&o.isCss||kn(o)?r.push("".concat(lr(i),":"),o,";"):En(o)?r.push.apply(r,Le(Le(["".concat(i," {")],cr(o),!1),["}"],!1)):r.push("".concat(lr(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Tt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ur(e,t,n,r){return sr(e)?[]:jn(e)?[".".concat(e.styledComponentId)]:kn(e)?!kn(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:ur(e(t),t,n,r):e instanceof or?n?(e.inject(n,r),[e.getName(r)]):[e]:En(e)?cr(e):Array.isArray(e)?Array.prototype.concat.apply(Ht,e.map(function(e){return ur(e,t,n,r)})):[e.toString()];var i}function dr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(kn(n)&&!jn(n))return!1}return!0}var pr=nn(Pt),fr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&dr(e),this.componentId=t,this.baseHash=tn(pr,t),this.baseStyle=n,Yn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Sn(r,this.staticRulesId);else{var i=An(ur(this.rules,e,t,n)),o=Zt(tn(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=Sn(r,o),this.staticRulesId=o}else{for(var l=tn(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=An(ur(u,e,t,n));l=tn(l,d+c),s+=d}}if(s){var p=Zt(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(s,".".concat(p),void 0,this.componentId)),r=Sn(r,p)}}return r},e}(),hr=t.createContext(void 0);hr.Consumer;var mr={};new Set;function gr(e,n,r){var i=jn(e),o=e,a=!an(e),l=n.attrs,s=void 0===l?Ht:l,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":qt(e);mr[n]=(mr[n]||0)+1;var r="".concat(n,"-").concat(rn(Pt+n+mr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,p=void 0===d?function(e){return an(e)?"styled.".concat(e):"Styled(".concat(on(e),")")}(e):d,f=n.displayName&&n.componentId?"".concat(qt(n.displayName),"-").concat(n.componentId):n.componentId||u,h=i&&o.attrs?o.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(i&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var x=n.shouldForwardProp;m=function(e,t){return g(e,t)&&x(e,t)}}else m=g}var v=new fr(r,f,i?o.componentStyle:void 0);function y(e,n){return function(e,n,r){var i=e.attrs,o=e.componentStyle,a=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=t.useContext(hr),d=rr(),p=e.shouldForwardProp||d.shouldForwardProp,f=Gt(n,u,a)||Vt,h=function(e,t,n){for(var r,i=$e($e({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=kn(r=e[o])?r(i):r;for(var l in a)i[l]="className"===l?Sn(i[l],a[l]):"style"===l?$e($e({},i[l]),a[l]):a[l]}return t.className&&(i.className=Sn(i.className,t.className)),i}(i,n,f),m=h.as||c,g={};for(var x in h)void 0===h[x]||"$"===x[0]||"as"===x||"theme"===x&&h.theme===f||("forwardedAs"===x?g.as=h.forwardedAs:p&&!p(x,m)||(g[x]=h[x]));var v=function(e,t){var n=rr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),y=Sn(l,s);return v&&(y+=" "+v),h.className&&(y+=" "+h.className),g[an(m)&&!Kt.has(m)?"class":"className"]=y,r&&(g.ref=r),(0,t.createElement)(m,g)}(b,e,n)}y.displayName=p;var b=t.forwardRef(y);return b.attrs=h,b.componentStyle=v,b.displayName=p,b.shouldForwardProp=m,b.foldedComponentIds=i?Sn(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=f,b.target=i?o.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Cn(e,i[r],!0);return e}({},o.defaultProps,e):e}}),Fn(b,function(){return".".concat(b.styledComponentId)}),a&&wn(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function xr(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var vr=function(e){return Object.assign(e,{isCss:!0})};function yr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(kn(e)||En(e))return vr(ur(xr(Ht,Le([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?ur(r):vr(ur(xr(r,t)))}function br(e,t,n){if(void 0===n&&(n=Vt),!t)throw Dn(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,yr.apply(void 0,Le([r],i,!1)))};return r.attrs=function(r){return br(e,t,$e($e({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return br(e,t,$e($e({},n),r))},r}var wr=function(e){return br(gr,e)},kr=wr;Kt.forEach(function(e){kr[e]=wr(e)});var jr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=dr(e),Yn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(An(ur(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Yn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Sr(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=yr.apply(void 0,Le([e],n,!1)),o="sc-global-".concat(rn(JSON.stringify(i))),a=new jr(i,o),l=function(e){var n=rr(),r=t.useContext(hr),i=t.useRef(n.styleSheet.allocateGSInstance(o)).current;return n.styleSheet.server&&s(i,e,n.styleSheet,r,n.stylis),t.useLayoutEffect(function(){if(!n.styleSheet.server)return s(i,e,n.styleSheet,r,n.stylis),function(){return a.removeStyles(i,n.styleSheet)}},[i,e,n.styleSheet,r,n.stylis]),null};function s(e,t,n,r,i){if(a.isStatic)a.renderStyles(e,Wt,n,i);else{var o=$e($e({},t),{theme:Gt(t,r,l.defaultProps)});a.renderStyles(e,o,n,i)}}return t.memo(l)}function Ar(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=An(yr.apply(void 0,Le([e],t,!1))),i=rn(r);return new or(i,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Bn(),r=An([n&&'nonce="'.concat(n,'"'),"".concat(Rt,'="true"'),"".concat(Ot,'="').concat(Pt,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Dn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw Dn(2);var r=e.instance.toString();if(!r)return[];var i=((n={})[Rt]="",n[Ot]=Pt,n.dangerouslySetInnerHTML={__html:r},n),o=Bn();return o&&(i.nonce=o),[t.createElement("style",$e({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Yn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Dn(2);return t.createElement(ir,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Dn(3)}})(),"__sc-".concat(Rt,"__");const Er=n.p+"static/media/cake.2dc83bec29f46a24a4fb0d4de2525a9d.svg";var Cr=n(6360),Fr=n(4802);const Dr='"Noto Sans", system-ui, sans-serif',zr=Sr`
  body {
    font-family: ${Dr};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${"#F8FAFC"};
  }
  
  h1 {
    font-size: 2rem;
  }
`,Mr=n.p+"static/media/win_desk.57f582e536e7ad45a69c.png";var Ir=n(579);const $r=()=>(0,Ir.jsx)("svg",{width:"10",height:"1",viewBox:"0 0 10 1",children:(0,Ir.jsx)("rect",{width:"10",height:"1",fill:"currentColor"})}),Lr=()=>(0,Ir.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",children:(0,Ir.jsx)("rect",{width:"10",height:"10",fill:"none",stroke:"currentColor"})}),Tr=()=>(0,Ir.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",children:(0,Ir.jsx)("path",{d:"M1,1 L9,9 M9,1 L1,9",stroke:"currentColor",strokeWidth:"1.5"})}),Rr=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,_r=kr.div`
  margin-bottom: 48px;
`,Or=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Pr=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Nr=kr.div`
  margin-top: 2rem;
`,Br=(kr.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,kr.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url(${Mr});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
`),Ur=kr.div`
  width: 100%;
  height: 32px;
  background: rgba(248, 250, 252, 0.95);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: flex-end; // Windows 11 has controls right-aligned
  padding: 0;
  border-radius: 16px 16px 0 0;
`,Wr=kr.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
  gap: 4px;
`,Hr=(kr.span`
  font-size: 12px;
  color: #000;
  font-weight: 500;
`,kr.div`
  display: flex;
  align-items: center;
  height: 100%;
`),Vr=kr.button`
  width: 46px;
  height: 100%;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: ${e=>e.isClose?"rgb(255, 96, 92)":"rgba(0, 0, 0, 0.06)"};
    color: ${e=>e.isClose?"white":"inherit"};
  }

  &:active {
    background: ${e=>e.isClose?"rgb(235, 76, 72)":"rgba(0, 0, 0, 0.09)"};
  }

  svg {
    width: 10px;
    height: 10px;
    opacity: 0.7;
  }
`,Gr=kr.div`
  position: absolute;
  width: 300px;
  height: 200px;
  background: rgba(248, 250, 252, 0.80);
  border-radius: 16px;
  box-shadow: 0px 30px 30px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  cursor: move;
  user-select: none;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Kr=kr.div`
  padding: 1rem;
  flex: 1;
  cursor: default;
`,Yr=()=>{const[e,n]=(0,t.useState)({x:0,y:0}),[r,i]=(0,t.useState)(!1),[o,a]=(0,t.useState)({x:0,y:0});(0,t.useEffect)(()=>{const e=document.querySelector("#demo-container");if(e){const t=e.getBoundingClientRect(),r=(t.width-300)/2,i=(t.height-200)/2;n({x:r,y:i})}},[]);const l=()=>{i(!1)};return(0,Ir.jsxs)(Rr,{children:[(0,Ir.jsxs)(_r,{children:[(0,Ir.jsx)(Or,{children:"Canvas"}),(0,Ir.jsx)(Pr,{children:"The canvas background provides a neutral, consistent foundation for application content. It ensures readability, visual clarity, and appropriate contrast with interactive components."})]}),(0,Ir.jsx)(Nr,{children:(0,Ir.jsx)(Br,{id:"demo-container",onMouseMove:e=>{if(r){const t=document.querySelector("#demo-container").getBoundingClientRect();let r=e.clientX-t.left-o.x,i=e.clientY-t.top-o.y;r=Math.max(0,Math.min(r,t.width-300)),i=Math.max(0,Math.min(i,t.height-200)),n({x:r,y:i})}},onMouseUp:l,onMouseLeave:l,children:(0,Ir.jsxs)(Gr,{onMouseDown:e=>{i(!0);const t=e.target.getBoundingClientRect();a({x:e.clientX-t.left,y:e.clientY-t.top})},style:{left:`${e.x}px`,top:`${e.y}px`},children:[(0,Ir.jsxs)(Ur,{children:[(0,Ir.jsx)(Wr,{}),(0,Ir.jsxs)(Hr,{children:[(0,Ir.jsx)(Vr,{children:(0,Ir.jsx)($r,{})}),(0,Ir.jsx)(Vr,{children:(0,Ir.jsx)(Lr,{})}),(0,Ir.jsx)(Vr,{isClose:!0,children:(0,Ir.jsx)(Tr,{})})]})]}),(0,Ir.jsx)(Kr,{})]})})})]})},Xr=JSON.parse('{"slate":{"50":"#f8fafc","100":"#f1f5f9","200":"#e2e8f0","300":"#cbd5e1","400":"#94a3b8","500":"#64748b","600":"#475569","700":"#334155","800":"#1e293b","900":"#0f172a"},"gray":{"50":"#f9fafb","100":"#f3f4f6","200":"#e5e7eb","300":"#d1d5db","400":"#9ca3af","500":"#6b7280","600":"#4b5563","700":"#374151","800":"#1f2937","900":"#111827"},"zinc":{"50":"#fafafa","100":"#f4f4f5","200":"#e4e4e7","300":"#d4d4d8","400":"#a1a1aa","500":"#71717a","600":"#52525b","700":"#3f3f46","800":"#27272a","900":"#18181b"},"neutral":{"50":"#fafafa","100":"#f5f5f5","200":"#e5e5e5","300":"#d4d4d4","400":"#a3a3a3","500":"#737373","600":"#525252","700":"#404040","800":"#262626","900":"#171717"},"stone":{"50":"#fafaf9","100":"#f5f5f4","200":"#e7e5e4","300":"#d6d3d1","400":"#a8a29e","500":"#78716c","600":"#57534e","700":"#44403c","800":"#292524","900":"#1c1917"},"red":{"50":"#fef2f2","100":"#fee2e2","200":"#fecaca","300":"#fca5a5","400":"#f87171","500":"#ef4444","600":"#dc2626","700":"#b91c1c","800":"#991b1b","900":"#7f1d1d"},"orange":{"50":"#fff7ed","100":"#ffedd5","200":"#fed7aa","300":"#fdba74","400":"#fb923c","500":"#f97316","600":"#ea580c","700":"#c2410c","800":"#9a3412","900":"#7c2d12"},"amber":{"50":"#fffbeb","100":"#fef3c7","200":"#fde68a","300":"#fcd34d","400":"#fbbf24","500":"#f59e0b","600":"#d97706","700":"#b45309","800":"#92400e","900":"#78350f"},"yellow":{"50":"#fefce8","100":"#fef9c3","200":"#fef08a","300":"#fde047","400":"#facc15","500":"#eab308","600":"#ca8a04","700":"#a16207","800":"#854d0e","900":"#713f12"},"lime":{"50":"#f7fee7","100":"#ecfccb","200":"#d9f99d","300":"#bef264","400":"#a3e635","500":"#84cc16","600":"#65a30d","700":"#4d7c0f","800":"#3f6212","900":"#365314"},"green":{"50":"#f0fdf4","100":"#dcfce7","200":"#bbf7d0","300":"#86efac","400":"#4ade80","500":"#22c55e","600":"#16a34a","700":"#15803d","800":"#166534","900":"#14532d"},"emerald":{"50":"#ecfdf5","100":"#d1fae5","200":"#a7f3d0","300":"#6ee7b7","400":"#34d399","500":"#10b981","600":"#059669","700":"#047857","800":"#065f46","900":"#064e3b"},"teal":{"50":"#f0fdfa","100":"#ccfbf1","200":"#99f6e4","300":"#5eead4","400":"#2dd4bf","500":"#14b8a6","600":"#0d9488","700":"#0f766e","800":"#115e59","900":"#134e4a"},"cyan":{"50":"#ecfeff","100":"#cffafe","200":"#a5f3fc","300":"#67e8f9","400":"#22d3ee","500":"#06b6d4","600":"#0891b2","700":"#0e7490","800":"#155e75","900":"#164e63"},"sky":{"50":"#f0f9ff","100":"#e0f2fe","200":"#bae6fd","300":"#7dd3fc","400":"#38bdf8","500":"#0ea5e9","600":"#0284c7","700":"#0369a1","800":"#075985","900":"#0c4a6e"},"blue":{"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},"indigo":{"50":"#eef2ff","100":"#e0e7ff","200":"#c7d2fe","300":"#a5b4fc","400":"#818cf8","500":"#6366f1","600":"#4f46e5","700":"#4338ca","800":"#3730a3","900":"#312e81"},"violet":{"50":"#f5f3ff","100":"#ede9fe","200":"#ddd6fe","300":"#c4b5fd","400":"#a78bfa","500":"#8b5cf6","600":"#7c3aed","700":"#6d28d9","800":"#5b21b6","900":"#4c1d95"},"purple":{"50":"#faf5ff","100":"#f3e8ff","200":"#e9d5ff","300":"#d8b4fe","400":"#c084fc","500":"#a855f7","600":"#9333ea","700":"#7e22ce","800":"#6b21a8","900":"#581c87"},"pink":{"50":"#fdf2f8","100":"#fce7f3","200":"#fbcfe8","300":"#f9a8d4","400":"#f472b6","500":"#ec4899","600":"#db2777","700":"#be185d","800":"#9d174d","900":"#831843"},"rose":{"50":"#fff1f2","100":"#ffe4e6","200":"#fecdd3","300":"#fda4af","400":"#fb7185","500":"#f43f5e","600":"#e11d48","700":"#be123c","800":"#9f1239","900":"#881337"},"common":{"white":"#ffffff","black":"#000000"},"brand":{"lenovo_signature_red":"#e1251b"}}'),qr="unchecked",Qr="checked",Jr="indeterminate",Zr={LIGHT:"light.a",DARK:"dark.a"},ei={SMALL:"small",MEDIUM:"medium",LARGE:"large"},ti=kr.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.disabled?.5:1};
  user-select: none;
  position: relative;
  line-height: 1;
`,ni=kr.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  pointer-events: none;
`,ri=kr.div`
  position: relative;
  width: ${e=>{switch(e.size){case ei.SMALL:return"14px";case ei.LARGE:return"18px";default:return"16px"}}};
  height: ${e=>{switch(e.size){case ei.SMALL:return"14px";case ei.LARGE:return"18px";default:return"16px"}}};
  border: 1.5px solid ${e=>e.colors.border};
  border-radius: 3px;
  background-color: ${e=>e.colors.background};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
`,ii=kr.div`
  position: absolute;
  top: -6px;
  left: -6px;
  right: -6px;
  bottom: -6px;
  border: 3px solid ${e=>e.theme===Zr.DARK?"#93C5FD":"#1D4ED8"};
  border-radius: 6px;
  opacity: ${e=>e.visible?1:0};
  transition: opacity 0.2s ease;
  pointer-events: none;
`,oi=kr.svg`
  width: ${e=>{switch(e.size){case ei.SMALL:return"8px";case ei.LARGE:return"12px";default:return"10px"}}};
  height: ${e=>{switch(e.size){case ei.SMALL:return"8px";case ei.LARGE:return"12px";default:return"10px"}}};
  opacity: ${e=>e.visible?1:0};
  transition: opacity 0.2s ease;
`,ai=kr.div`
  width: ${e=>{switch(e.size){case ei.SMALL:return"6px";case ei.LARGE:return"10px";default:return"8px"}}};
  height: 2px;
  background-color: ${e=>e.color};
  border-radius: 1px;
  opacity: ${e=>e.visible?1:0};
  transition: opacity 0.2s ease;
`,li=kr.label`
  font-size: ${e=>{switch(e.size){case ei.SMALL:return"12px";case ei.LARGE:return"16px";default:return"14px"}}};
  font-weight: 600;
  color: ${e=>e.colors.label};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  line-height: 1;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
  margin-top: 3px;
`,si=(0,t.forwardRef)((e,n)=>{let{checked:r=!1,indeterminate:i=!1,disabled:o=!1,label:a="Label",theme:l=Zr.LIGHT,size:s=ei.MEDIUM,onChange:c,onFocus:u,onBlur:d,id:p,name:f,value:h,className:m,style:g,"aria-describedby":x,...v}=e;const[y,b]=(0,t.useState)(!1),[w,k]=(0,t.useState)(!1),[j,S]=(0,t.useState)(!1),[A,E]=(0,t.useState)(r),[C,F]=(0,t.useState)(!1),D=void 0!==r,z=D?r:A,M=i?Jr:z?Qr:qr,I=((e,t,n,r,i,o)=>t===Zr.DARK?n?{border:"#9CA3AF",background:"#27272A",icon:"#9CA3AF",label:"#9CA3AF"}:e===Qr||e===Jr?{border:"#52525B",background:"#93C5FD",icon:"#18181B",label:"#D4D4D8"}:o?{border:"#71717A",background:"transparent",icon:"transparent",label:"#D4D4D8"}:i?{border:"#D4D4D8",background:"transparent",icon:"transparent",label:"#D4D4D8"}:{border:"#71717A",background:"transparent",icon:"transparent",label:"#D4D4D8"}:n?{border:"#64748B",background:"#F1F5F9",icon:"#475569",label:"#475569"}:e===Qr||e===Jr?o?{border:"#1D4ED8",background:"#1D4ED8",icon:"#FFFFFF",label:"#0F172A"}:i?{border:"#1E3A8A",background:"#1E3A8A",icon:"#FFFFFF",label:"#0F172A"}:{border:"#1D4ED8",background:"#1D4ED8",icon:"#FFFFFF",label:"#0F172A"}:o?{border:"#64748B",background:"transparent",icon:"transparent",label:"#0F172A"}:i?{border:"#0F172A",background:"transparent",icon:"transparent",label:"#0F172A"}:{border:"#64748B",background:"transparent",icon:"transparent",label:"#0F172A"})(M,l,o,0,w,j);(0,t.useEffect)(()=>{D||E(r)},[r,D]);const $=e=>{if(o)return;const t=e.target.checked;D||E(t),c&&c(e)},L=p||`checkbox-${Math.random().toString(36).substr(2,9)}`;return(0,Ir.jsxs)(ti,{disabled:o,className:m,style:g,onClick:e=>{if(o)return;if("LABEL"===e.target.tagName)return;$({target:{checked:!z,type:"checkbox"}})},onMouseEnter:()=>{o||k(!0)},onMouseLeave:()=>{k(!1),S(!1)},onMouseDown:()=>{o||S(!0)},onMouseUp:()=>{S(!1)},children:[(0,Ir.jsx)(ni,{ref:n,type:"checkbox",id:L,name:f,value:h,checked:z,disabled:o,onChange:$,onFocus:e=>{b(!0),F(!0),u&&u(e)},onBlur:e=>{b(!1),F(!1),d&&d(e)},onKeyDown:e=>{if(!o&&(" "===e.key||"Enter"===e.key)){e.preventDefault();$({target:{checked:!z,type:"checkbox"}})}},tabIndex:o?-1:0,role:"checkbox","aria-checked":z,"aria-describedby":x,...v}),(0,Ir.jsxs)(ri,{colors:I,disabled:o,theme:l,size:s,children:[(0,Ir.jsx)(ii,{visible:C,theme:l}),M===Qr&&(0,Ir.jsx)(oi,{visible:!0,color:I.icon,size:s,viewBox:"0 0 24 24",children:(0,Ir.jsx)("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",stroke:I.icon,strokeWidth:"3",fill:"none"})}),M===Jr&&(0,Ir.jsx)(ai,{visible:!0,color:I.icon,size:s})]}),(0,Ir.jsx)(li,{htmlFor:L,disabled:o,colors:I,size:s,children:a})]})});si.displayName="Checkbox";const ci=si,ui=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,di=kr.div`
  margin-bottom: 48px;
`,pi=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,fi=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,hi=kr.section`
  margin-bottom: 48px;
`,mi=(kr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),gi=kr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,xi=kr.label`
  font-weight: 600;
  color: #0F172A;
`,vi=kr.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`,yi=(kr.input`
  padding: 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`,kr.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid ${e=>e.theme===Zr.DARK?"#52525B":"#E2E8F0"};
  border-radius: 8px;
  background-color: ${e=>e.theme===Zr.DARK?"#18181B":"#FFFFFF"};
`),bi=()=>{const[e,n]=(0,t.useState)(qr),[r,i]=(0,t.useState)(Zr.LIGHT),[o,a]=(0,t.useState)(!1);return(0,Ir.jsxs)(ui,{children:[(0,Ir.jsxs)(di,{children:[(0,Ir.jsx)(pi,{children:"Checkbox"}),(0,Ir.jsx)(fi,{children:"Interactive checkbox component for form inputs, selections, and toggles with support for checked, unchecked, indeterminate, and disabled states. The checkbox component follows accessibility best practices and includes proper ARIA attributes for screen readers."})]}),(0,Ir.jsxs)(hi,{children:[(0,Ir.jsxs)(mi,{children:[(0,Ir.jsxs)(gi,{children:[(0,Ir.jsx)(xi,{children:"State"}),(0,Ir.jsxs)(vi,{value:e,onChange:e=>n(e.target.value),children:[(0,Ir.jsx)("option",{value:"default",children:"Default"}),(0,Ir.jsx)("option",{value:"indeterminate",children:"Indeterminate"}),(0,Ir.jsx)("option",{value:"disabled",children:"Disabled"}),(0,Ir.jsx)("option",{value:"disabled-indeterminate",children:"Disabled Indeterminate"})]})]}),(0,Ir.jsxs)(gi,{children:[(0,Ir.jsx)(xi,{children:"Theme"}),(0,Ir.jsxs)(vi,{value:r,onChange:e=>i(e.target.value),children:[(0,Ir.jsx)("option",{value:Zr.LIGHT,children:"Light.a"}),(0,Ir.jsx)("option",{value:Zr.DARK,children:"Dark.a"})]})]})]}),(0,Ir.jsx)(yi,{theme:r,children:(0,Ir.jsx)(ci,{...(()=>{const t={label:"Label",theme:r};return"disabled"===e?(t.disabled=!0,t.checked=o):"indeterminate"===e?(t.disabled=!1,t.indeterminate=!0,t.checked=o):"disabled-indeterminate"===e?(t.disabled=!0,t.indeterminate=!0,t.checked=o):(t.disabled=!1,t.checked=o,t.onChange=e=>{a(e.target.checked)}),t})()})})]})]})},wi=kr.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s ease;
  border: 1px solid #e5e7eb;
  
  ${e=>e.elevated&&"\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  "}
  
  ${e=>e.hoverable&&"\n    cursor: pointer;\n    \n    &:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n    }\n  "}
  
  ${e=>{switch(e.variant){case"outlined":return"\n          background: transparent;\n          border: 2px solid #e5e7eb;\n          box-shadow: none;\n        ";case"elevated":return"\n          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n        ";default:return""}}}
`,ki=kr.div`
  padding: 20px 24px;
  border-bottom: 1px solid #f3f4f6;
  
  ${e=>e.compact&&"\n    padding: 16px 20px;\n  "}
`,ji=kr.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${Xr.slate[900]};
  
  ${e=>e.compact&&"\n    font-size: 16px;\n  "}
`,Si=kr.p`
  margin: 4px 0 0 0;
  font-size: 14px;
  color: ${Xr.slate[700]};
  
  ${e=>e.compact&&"\n    font-size: 13px;\n  "}
`,Ai=kr.div`
  padding: 24px;
  
  ${e=>e.compact&&"\n    padding: 20px;\n  "}
`,Ei=kr.div`
  padding: 20px 24px;
  border-top: 1px solid #f3f4f6;
  background-color: #f9fafb;
  
  ${e=>e.compact&&"\n    padding: 16px 20px;\n  "}
`,Ci=kr.img`
  width: 100%;
  height: auto;
  display: block;
`,Fi=e=>{let{children:t,variant:n="default",elevated:r=!1,hoverable:i=!1,compact:o=!1,onClick:a,...l}=e;return(0,Ir.jsx)(wi,{variant:n,elevated:r,hoverable:i,onClick:a,...l,children:t})};Fi.Header=ki,Fi.Title=ji,Fi.Subtitle=Si,Fi.Body=Ai,Fi.Footer=Ei,Fi.Image=Ci;const Di=Fi,zi=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Mi=kr.div`
  margin-bottom: 48px;
`,Ii=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,$i=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Li=kr.section`
  margin-bottom: 60px;
`,Ti=kr.h2`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
`,Ri=kr.p`
  font-size: 16px;
  color: #6b7280;
  margin: 0 0 32px 0;
  line-height: 1.6;
`,_i=kr.div`
  position: relative;
  padding-left: 32px;
  
  &::before {
    content: '';
    position: absolute;
    left: 16px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e5e7eb;
  }
`,Oi=kr.div`
  position: relative;
  margin-bottom: 40px;
  
  &::before {
    content: '';
    position: absolute;
    left: -24px;
    top: 8px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${e=>e.isLatest?"#2563eb":e.isMajor?"#dc2626":e.isMinor?"#059669":"#6b7280"};
    border: 2px solid #ffffff;
    box-shadow: 0 0 0 2px #e5e7eb;
  }
`,Pi=kr.div`
  margin-bottom: 16px;
`,Ni=kr.h3`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,Bi=kr.div`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
`,Ui=kr.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${e=>"latest"===e.type?"background: #eff6ff; color: #2563eb;":"major"===e.type?"background: #fef2f2; color: #dc2626;":"minor"===e.type?"background: #f0fdf4; color: #059669;":"background: #f3f4f6; color: #6b7280;"}
`,Wi=kr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Hi=kr.li`
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${e=>"added"===e.type?"#059669":"changed"===e.type?"#d97706":"removed"===e.type?"#dc2626":"#6b7280"};
  }
`,Vi=kr.span`
  color: #374151;
  line-height: 1.5;
`,Gi=(kr.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 12px;
  margin: 12px 0;
  
  &::before {
    content: '⚠️ Breaking Change';
    display: block;
    font-weight: 600;
    color: #dc2626;
    margin-bottom: 4px;
    font-size: 14px;
  }
`,kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
`),Ki=()=>{const e=e=>{switch(e){case"added":return"Added";case"changed":return"Changed";case"removed":return"Removed";case"fixed":return"Fixed";default:return"Updated"}};return(0,Ir.jsxs)(zi,{children:[(0,Ir.jsxs)(Mi,{children:[(0,Ir.jsx)(Ii,{children:"Version Control"}),(0,Ir.jsx)($i,{children:"Track the evolution of our design system through version history and changelog entries."})]}),(0,Ir.jsxs)(Li,{children:[(0,Ir.jsx)(Ti,{children:"Current Version"}),(0,Ir.jsx)(Ri,{children:"We're currently on version 4.0.1, which represents our latest major release with significant improvements in accessibility and component functionality."}),(0,Ir.jsxs)(Di,{elevated:!0,children:[(0,Ir.jsxs)(Di.Header,{children:[(0,Ir.jsx)(Di.Title,{children:"Version 4.0.1 - Latest Release"}),(0,Ir.jsx)(Di.Subtitle,{children:"Released on March 15, 2024"})]}),(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)("p",{style:{margin:"0 0 16px 0",color:"#6b7280",lineHeight:"1.6"},children:"This release brings major improvements to our component library with enhanced accessibility, dark mode support, and performance optimizations."}),(0,Ir.jsxs)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,Ir.jsx)("span",{style:{background:"#eff6ff",color:"#2563eb",padding:"4px 8px",borderRadius:"4px",fontSize:"12px",fontWeight:"500"},children:"Latest Release"}),(0,Ir.jsx)("span",{style:{background:"#f0fdf4",color:"#059669",padding:"4px 8px",borderRadius:"4px",fontSize:"12px",fontWeight:"500"},children:"Production Ready"})]})]})]})]}),(0,Ir.jsxs)(Li,{children:[(0,Ir.jsx)(Ti,{children:"Changelog"}),(0,Ir.jsx)(Ri,{children:"A complete history of all changes, improvements, and new features added to the design system."}),(0,Ir.jsx)(_i,{children:[{version:"4.0.1",date:"2024-03-15",type:"latest",isLatest:!0,isMajor:!0,description:"Major update with enhanced components and accessibility improvements",changes:[{type:"added",text:"Enhanced component library with improved accessibility"},{type:"added",text:"New color system with better contrast ratios"},{type:"added",text:"Improved documentation and examples"},{type:"added",text:"Advanced form components and validation"},{type:"added",text:"Dark mode support across all components"},{type:"added",text:"Performance optimizations and bug fixes"}]},{version:"3.0.0",date:"2024-02-15",type:"major",isMajor:!0,description:"Complete design system overhaul",changes:[{type:"added",text:"Redesigned component architecture"},{type:"added",text:"New theming system"},{type:"added",text:"Improved responsive design"},{type:"changed",text:"Updated color palette and typography"},{type:"changed",text:"Enhanced component APIs"}]},{version:"2.0.0",date:"2024-01-15",type:"major",isMajor:!0,description:"Major feature update",changes:[{type:"added",text:"Advanced component library"},{type:"added",text:"Interactive documentation"},{type:"added",text:"New design tokens system"},{type:"changed",text:"Improved accessibility standards"}]},{version:"1.0.0",date:"2024-01-01",type:"major",isMajor:!0,description:"Initial stable release",changes:[{type:"added",text:"Core component library"},{type:"added",text:"Basic documentation"},{type:"added",text:"Design tokens"},{type:"added",text:"Basic theming support"}]}].map((t,n)=>(0,Ir.jsxs)(Oi,{isLatest:t.isLatest,isMajor:t.isMajor,isMinor:t.isMinor,children:[(0,Ir.jsxs)(Pi,{children:[(0,Ir.jsxs)(Ni,{children:["v",t.version,t.isLatest&&(0,Ir.jsx)(Ui,{type:"latest",children:"Latest"}),t.isMajor&&(0,Ir.jsx)(Ui,{type:"major",children:"Major"}),t.isMinor&&(0,Ir.jsx)(Ui,{type:"minor",children:"Minor"})]}),(0,Ir.jsx)(Bi,{children:t.date}),(0,Ir.jsx)("p",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:t.description})]}),(0,Ir.jsx)(Wi,{children:t.changes.map((t,n)=>(0,Ir.jsx)(Hi,{type:t.type,children:(0,Ir.jsxs)(Vi,{children:[(0,Ir.jsxs)("strong",{children:[e(t.type),":"]})," ",t.text]})},n))})]},t.version))})]}),(0,Ir.jsxs)(Li,{children:[(0,Ir.jsx)(Ti,{children:"Versioning Strategy"}),(0,Ir.jsx)(Ri,{children:"We follow semantic versioning (SemVer) to ensure clear communication about the nature of changes."}),(0,Ir.jsxs)(Gi,{children:[(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"Major Versions"}),(0,Ir.jsx)("p",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:"Incompatible API changes that may require updates to existing implementations. These releases include breaking changes and new major features."})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"Minor Versions"}),(0,Ir.jsx)("p",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:"New functionality added in a backwards-compatible manner. These releases include new features and improvements to existing components."})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"Patch Versions"}),(0,Ir.jsx)("p",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:"Backwards-compatible bug fixes and minor improvements. These releases focus on stability and bug fixes without new features."})]})})]})]}),(0,Ir.jsxs)(Li,{children:[(0,Ir.jsx)(Ti,{children:"Upcoming Features"}),(0,Ir.jsx)(Ri,{children:"Planned features and improvements for future releases of the design system."}),(0,Ir.jsxs)(Gi,{children:[(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"v1.1.0 - Enhanced Components"}),(0,Ir.jsxs)("ul",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:[(0,Ir.jsx)("li",{children:"Dropdown component with search and multi-select"}),(0,Ir.jsx)("li",{children:"Table component with sorting and pagination"}),(0,Ir.jsx)("li",{children:"Toast notification system"}),(0,Ir.jsx)("li",{children:"Enhanced form validation"})]})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"v1.2.0 - Advanced Features"}),(0,Ir.jsxs)("ul",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:[(0,Ir.jsx)("li",{children:"Date picker component"}),(0,Ir.jsx)("li",{children:"File upload component"}),(0,Ir.jsx)("li",{children:"Rich text editor"}),(0,Ir.jsx)("li",{children:"Advanced data visualization"})]})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"v2.0.0 - Major Overhaul"}),(0,Ir.jsxs)("ul",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:[(0,Ir.jsx)("li",{children:"Dark mode support"}),(0,Ir.jsx)("li",{children:"Customizable theme system"}),(0,Ir.jsx)("li",{children:"Animation library integration"}),(0,Ir.jsx)("li",{children:"Performance optimizations"})]})]})})]})]})]})},Yi=kr.div`
  display: flex;
  flex-direction: column;
  min-width: 80px;
  height: 64px;
  position: relative;
  cursor: pointer;
`,Xi=kr.div`
  height: 100%;
  width: 100%;
  background-color: ${e=>e.color};
`,qi=kr.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6px 8px;
  background: rgba(255, 255, 255, 0.9);
  font-family: ${Dr};
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${Yi}:hover & {
    opacity: 1;
  }
`,Qi=kr.div`
  font-weight: 400;
  color: ${Xr.slate[900]};
  margin-bottom: 2px;
  font-size: 16px;
`,Ji=kr.div`
  font-family: monospace;
  color: ${Xr.slate[700]};
  font-size: 11px;
`,Zi=e=>{let{name:t,hex:n,onCopy:r}=e;return(0,Ir.jsxs)(Yi,{onClick:async()=>{try{await navigator.clipboard.writeText(n),r&&r()}catch(e){console.error("Failed to copy:",e)}},children:[(0,Ir.jsx)(Xi,{color:n}),(0,Ir.jsxs)(qi,{children:[(0,Ir.jsx)(Qi,{children:t}),(0,Ir.jsx)(Ji,{children:n})]})]})};var eo=n(6485),to=n(1132);const no={PRIMARY:"primary",SECONDARY:"secondary",DANGER:"danger",TEXT:"text",ICON:"icon"},ro={PRIMARY:"primary",SECONDARY:"secondary"},io={PRIMARY:"primary",SECONDARY:"secondary"},oo={SMALL:"small",MEDIUM:"medium",LARGE:"large",XLARGE:"xlarge"},ao={NONE:"none",LEFT:"left",RIGHT:"right"},lo={PILL:"pill",SQUARE:"square"},so=Ar`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,co=kr.div`
  width: ${e=>{if(e.variant===no.ICON)switch(e.size){case oo.SMALL:return"16px";case oo.MEDIUM:return"20px";case oo.LARGE:return"24px";case oo.XLARGE:return"28px";default:return"20px"}return e.size===oo.LARGE?"20px":"16px"}};
  height: ${e=>{if(e.variant===no.ICON)switch(e.size){case oo.SMALL:return"16px";case oo.MEDIUM:return"20px";case oo.LARGE:return"24px";case oo.XLARGE:return"28px";default:return"20px"}return e.size===oo.LARGE?"20px":"16px"}};
  border: 2px solid ${e=>e.isDarkMode?"#52525B":"#CBD5E1"};
  border-top: 2px solid ${e=>e.isDarkMode?"#93C5FD":"#1D4ED8"};
  border-radius: 50%;
  animation: ${so} 0.8s linear infinite;
  margin: 0;
`,uo=kr.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  
  /* Track hover state for text color changes */
  &:hover {
    color: ${e=>e.$disabled||e.$loading?e.isDarkMode?"#9CA3AF":"#475569":e.variant===no.ICON?e.iconVariant===io.PRIMARY?e.isDarkMode?"#93C5FD":"#1E40AF":e.isDarkMode?"#E2E8F0":"#0F172A":e.variant===no.TEXT?e.textVariant===ro.PRIMARY?e.isDarkMode?"#93C5FD":"#1E3A8A":e.isDarkMode?"#E2E8F0":"#1E293B":e.color};
  }
  
  /* Track pressed state for text color changes */
  &:active {
    color: ${e=>e.$disabled||e.$loading?e.isDarkMode?"#9CA3AF":"#475569":e.variant===no.ICON?e.iconVariant===io.PRIMARY?e.isDarkMode?"#93C5FD":"#1E3A8A":e.isDarkMode?"#E2E8F0":"#0F172A":e.variant===no.TEXT?e.textVariant===ro.PRIMARY?e.isDarkMode?"#93C5FD":"#1E3A8A":e.isDarkMode?"#E2E8F0":"#0F172A":e.color};
  }
  padding: ${e=>{if(e.variant===no.ICON)return"0";return`${e.size===oo.LARGE?"14px":"10px"} ${e.size===oo.LARGE?"24px":"20px"}`}};
  height: ${e=>{if(e.variant===no.ICON)switch(e.size){case oo.SMALL:return"24px";case oo.MEDIUM:return"32px";case oo.LARGE:return"40px";case oo.XLARGE:return"48px";default:return"32px"}return e.size===oo.LARGE?"44px":"36px"}};
  width: ${e=>e.variant===no.ICON?"auto":"fit-content"};
  aspect-ratio: ${e=>e.variant===no.ICON?"1 / 1":"auto"};
  max-width: ${e=>e.variant===no.ICON?"none":"264px"};
  display: ${e=>(e.variant,no.ICON,"inline-flex")};
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: visible;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  
  /* Style for the label text to enable middle truncation */
  span.button-text {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    overflow: visible;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: ${e=>e.size===oo.LARGE?"1rem":"0.875rem"};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;
    vertical-align: baseline;
  }
  
  background-color: ${e=>e.$disabled||e.$loading?e.variant===no.TEXT||e.variant===no.ICON?"transparent":e.isDarkMode?"rgba(100, 116, 139, 0.2)":"rgba(203, 213, 225, 0.5)":((e,t)=>{if(e===no.ICON)return"transparent";if(e===no.TEXT)return"transparent";if(t)switch(e){case no.PRIMARY:return"#93C5FD";case no.SECONDARY:return"#CBD5E1";case no.DANGER:return"#FCA5A5";default:return"#93C5FD"}switch(e){case no.PRIMARY:return"#1D4ED8";case no.SECONDARY:return"#E2E8F0";case no.DANGER:return"#B91C1C";default:return"#1D4ED8"}})(e.variant,e.isDarkMode)};
  color: ${e=>e.$disabled||e.$loading?e.isDarkMode?"#9CA3AF":"#475569":((e,t,n,r)=>{if(e===no.ICON)return r===io.PRIMARY?t?"#93C5FD":"#1D4ED8":t?"#E2E8F0":"#1E293B";if(e===no.TEXT)return n===ro.PRIMARY?t?"#93C5FD":"#1D4ED8":t?"#E2E8F0":"#334155";if(t)switch(e){case no.PRIMARY:return"#18181B";case no.SECONDARY:return"#000000";case no.DANGER:default:return"#18181B"}switch(e){case no.PRIMARY:return"#FFFFFF";case no.SECONDARY:return"#0F172A";case no.DANGER:default:return"#FFFFFF"}})(e.variant,e.isDarkMode,e.textVariant,e.iconVariant)};
  border: none;
  border-radius: ${e=>e.variant===no.ICON?e.buttonStyle===lo.PILL?"100%":"4px":e.buttonStyle===lo.PILL?"100px":"4px"};
  font-family: ${Dr};
  font-weight: 600;
  font-size: ${e=>e.size===oo.LARGE?"1rem":"0.875rem"};
  line-height: 1.2;
  cursor: ${e=>e.$disabled||e.$loading?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  user-select: none;
  gap: 8px;

  &:hover {
    background-color: ${e=>e.$disabled||e.$loading?e.variant===no.TEXT||e.variant===no.ICON?"transparent":e.isDarkMode?"rgba(100, 116, 139, 0.2)":"rgba(203, 213, 225, 0.5)":((e,t,n,r)=>{if(e===no.ICON)return r===io.PRIMARY?t?"rgba(59, 130, 246, 0.45)":"#DBEAFE":t?"rgba(100, 116, 139, 0.25)":"#E2E8F0";if(e===no.TEXT)return t?n===ro.PRIMARY?"rgba(59, 130, 246, 0.45)":"rgba(100, 116, 139, 0.25)":n===ro.PRIMARY?"#DBEAFE":"#E2E8F0";if(t)switch(e){case no.PRIMARY:return"#60A5FA";case no.SECONDARY:return"#94A3B8";case no.DANGER:return"#EF4444";default:return"#60A5FA"}switch(e){case no.PRIMARY:return"#1E3A8A";case no.SECONDARY:return"#CBD5E1";case no.DANGER:return"#7F1D1D";default:return"#1E3A8A"}})(e.variant,e.isDarkMode,e.textVariant,e.iconVariant)};
  }

  &:active {
    background-color: ${e=>e.$disabled||e.$loading?e.variant===no.TEXT||e.variant===no.ICON?"transparent":e.isDarkMode?"rgba(100, 116, 139, 0.2)":"rgba(203, 213, 225, 0.5)":((e,t,n,r)=>{if(e===no.ICON)return r===io.PRIMARY?t?"rgba(59, 130, 246, 0.35)":"#BFDBFE":t?"rgba(100, 116, 139, 0.35)":"#CBD5E1";if(e===no.TEXT)return t?n===ro.PRIMARY?"rgba(59, 130, 246, 0.35)":"rgba(100, 116, 139, 0.35)":n===ro.PRIMARY?"#BFDBFE":"#CBD5E1";if(t)switch(e){case no.PRIMARY:return"#93C5FD";case no.SECONDARY:return"#CBD5E1";case no.DANGER:return"#FCA5A5";default:return"#93C5FD"}switch(e){case no.PRIMARY:return"#1D4ED8";case no.SECONDARY:return"#E2E8F0";case no.DANGER:return"#B91C1C";default:return"#1D4ED8"}})(e.variant,e.isDarkMode,e.textVariant,e.iconVariant)};
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${e=>{const t=e.isDarkMode?"#93C5FD":"#1D4ED8";return e.variant===no.ICON?`0 0 0 2px ${t}`:`0 0 0 2px ${e.isDarkMode?"#18181B":"#FFFFFF"}, 0 0 0 5px ${t}`}};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${e=>{if(e.variant===no.ICON)switch(e.size){case oo.SMALL:return"16px";case oo.MEDIUM:return"20px";case oo.LARGE:return"24px";case oo.XLARGE:return"28px";default:return"20px"}return e.size===oo.LARGE?"20px":"16px"}};
    height: ${e=>{if(e.variant===no.ICON)switch(e.size){case oo.SMALL:return"16px";case oo.MEDIUM:return"20px";case oo.LARGE:return"24px";case oo.XLARGE:return"28px";default:return"20px"}return e.size===oo.LARGE?"20px":"16px"}};
    flex-shrink: 0;
    color: ${e=>e.$disabled||e.$loading?e.isDarkMode?"#9CA3AF":"#475569":"inherit"};

    svg {
      width: 100%;
      height: 100%;
    }
  }
`,po=e=>{let{variant:t=no.PRIMARY,textVariant:n=ro.PRIMARY,iconVariant:r=io.PRIMARY,size:i=oo.MEDIUM,iconPosition:o=ao.NONE,buttonStyle:a=lo.PILL,label:l="Button",disabled:s=!1,loading:c=!1,isDarkMode:u=!1,className:d,onClick:p,customIcon:f,...h}=e;const m=t===no.ICON,g=(ao.NONE,()=>f||(m?(0,Ir.jsx)(to.A,{}):(0,Ir.jsx)(eo.A,{})));return(0,Ir.jsxs)(uo,{variant:t,textVariant:n,iconVariant:r,size:i,buttonStyle:a,$disabled:s,$loading:c,isDarkMode:u,className:d,onClick:e=>{s||c||null===p||void 0===p||p(e)},"aria-disabled":s||c,...h,children:[!c&&(m||o===ao.LEFT)&&(0,Ir.jsx)("span",{className:"icon",children:g()}),!m&&(0,Ir.jsx)("span",{className:"button-text",children:l}),!c&&!m&&o===ao.RIGHT&&(0,Ir.jsx)("span",{className:"icon",children:g()}),c&&(0,Ir.jsx)(co,{variant:t,size:i,isDarkMode:u})]})};var fo=n(8348),ho=n(9778),mo=n(3102),go=n(1528);const xo={TOAST:"toast",INLINE:"inline"},vo={SIMPLE:"simple",ADVANCED:"advanced"},yo={SUCCESS:"success",WARNING:"warning",ERROR:"error",INFO:"info"},bo={LIGHT:"light.a",DARK:"dark.a"},wo={TOP_RIGHT:"top-right",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",TOP_CENTER:"top-center",BOTTOM_CENTER:"bottom-center"},ko=(e,t)=>{const n=t===bo.DARK,r={[yo.SUCCESS]:{light:{background:"#FFFFFF",border:"#047857",icon:"#047857",text:"#0F172A",metadata:"#334155"},dark:{background:"#27272A",border:"#34D399",icon:"#34D399",text:"#D4D4D8",metadata:"#A1A1AA"}},[yo.WARNING]:{light:{background:"#FFFFFF",border:"#C2410C",icon:"#C2410C",text:"#0F172A",metadata:"#334155"},dark:{background:"#27272A",border:"#FDBA74",icon:"#FDBA74",text:"#D4D4D8",metadata:"#A1A1AA"}},[yo.ERROR]:{light:{background:"#FFFFFF",border:"#B91C1C",icon:"#B91C1C",text:"#0F172A",metadata:"#334155"},dark:{background:"#27272A",border:"#FCA5A5",icon:"#FCA5A5",text:"#D4D4D8",metadata:"#A1A1AA"}},[yo.INFO]:{light:{background:"#FFFFFF",border:"#1D4ED8",icon:"#1D4ED8",text:"#0F172A",metadata:"#334155"},dark:{background:"#27272A",border:"#60A5FA",icon:"#60A5FA",text:"#D4D4D8",metadata:"#A1A1AA"}}};return n?r[e].dark:r[e].light},jo=e=>({[yo.SUCCESS]:(0,Ir.jsx)(ho.A,{style:{width:"24px",height:"24px",fill:"currentColor"}}),[yo.WARNING]:(0,Ir.jsx)(mo.A,{style:{width:"24px",height:"24px",fill:"currentColor"}}),[yo.ERROR]:(0,Ir.jsx)(go.A,{style:{width:"24px",height:"24px",fill:"currentColor"}}),[yo.INFO]:(0,Ir.jsx)(fo.A,{style:{width:"24px",height:"24px",fill:"currentColor"}})}[e]),So=kr.div`
  position: ${e=>e.type===xo.TOAST?"fixed":"relative"};
  ${e=>e.type===xo.TOAST&&`\n    z-index: 1000;\n    ${"top-left"===e.position?"left: 20px;":"top-right"===e.position?"right: 20px;":"top-center"===e.position?"left: 20px; right: 20px;":"bottom-left"===e.position?"left: 20px;":"bottom-right"===e.position?"right: 20px;":(e.position,"left: 20px; right: 20px;")}\n    ${e.position.includes("top")?"top: 20px;":"bottom: 20px;"}\n    \n    @media (min-width: 769px) {\n      ${"top-center"===e.position?"left: 50%; right: auto; transform: translateX(-50%);":""}\n      ${"bottom-center"===e.position?"left: 50%; right: auto; transform: translateX(-50%);":""}\n    }\n  `}
  
  background: ${e=>ko(e.severity,e.theme).background};
  border: none;
  border-radius: 4px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${e=>e.variant===vo.ADVANCED||e.variant===vo.SIMPLE?ko(e.severity,e.theme).icon:ko(e.severity,e.theme).border};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  padding: ${e=>e.variant===vo.SIMPLE?"12px 16px":"16px"};
  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15);
  max-width: 512px;
  min-width: ${e=>e.type===xo.TOAST?e.variant===vo.SIMPLE?"400px":"320px":"auto"};
  
  /* Responsive styling for toast alerts */
  ${e=>e.type===xo.TOAST&&`\n    @media (max-width: 768px) {\n      min-width: ${e.variant===vo.SIMPLE?"360px":"280px"};\n      max-width: calc(100vw - 40px);\n      margin: 0 20px;\n    }\n    \n    @media (max-width: 480px) {\n      min-width: ${e.variant===vo.SIMPLE?"320px":"260px"};\n      max-width: calc(100vw - 32px);\n      margin: 0 16px;\n      padding: ${e.variant===vo.SIMPLE?"10px 12px":"14px"};\n    }\n  `}
  
  ${e=>e.type===xo.TOAST&&`\n    animation: slideIn${e.position.replace("-","")} 0.3s ease-out;\n    \n    @keyframes slideIn${e.position.replace("-","")} {\n      from {\n        opacity: 0;\n        transform: ${"top-left"===e.position?"translateX(-100%)":"top-right"===e.position?"translateX(100%)":"top-center"===e.position?"translateY(-100%) translateX(-50%)":"bottom-left"===e.position?"translateX(-100%)":"bottom-right"===e.position?"translateX(100%)":(e.position,"translateY(100%) translateX(-50%)")};\n      }\n      to {\n        opacity: 1;\n        transform: ${"top-center"===e.position||"bottom-center"===e.position?"translateX(-50%)":"translateY(0) translateX(0)"};\n      }\n    }\n  `}
  
  ${e=>e.isExiting&&e.type===xo.TOAST&&`\n    animation: slideOut${e.position.replace("-","")} 0.3s ease-in;\n    \n    @keyframes slideOut${e.position.replace("-","")} {\n      from {\n        opacity: 1;\n        transform: ${"top-center"===e.position||"bottom-center"===e.position?"translateX(-50%)":"translateY(0) translateX(0)"};\n      }\n      to {\n        opacity: 0;\n        transform: ${"top-left"===e.position?"translateX(-100%)":"top-right"===e.position?"translateX(100%)":"top-center"===e.position?"translateY(-100%) translateX(-50%)":"bottom-left"===e.position?"translateX(-100%)":"bottom-right"===e.position?"translateX(100%)":(e.position,"translateY(100%) translateX(-50%)")};\n      }\n    }\n  `}
`,Ao=kr.div`
  display: flex;
  align-items: ${e=>e.variant===vo.SIMPLE?"center":"flex-start"};
  gap: 16px;
  
  /* Responsive styling for smaller screens */
  @media (max-width: 480px) {
    gap: 12px;
  }
`,Eo=kr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>(e.variant,vo.SIMPLE,ko(e.severity,e.theme).icon)};
  background: transparent;
  border-radius: 0;
  width: auto;
  height: auto;
  flex-shrink: 0;
`,Co=kr.div`
  flex: 1;
  min-width: 0;
  display: ${e=>e.variant===vo.SIMPLE?"flex":"block"};
  align-items: ${e=>e.variant===vo.SIMPLE?"center":"flex-start"};
  gap: ${e=>e.variant===vo.SIMPLE?"16px":"0"};
`,Fo=kr.div`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.4;
  color: ${e=>ko(e.severity,e.theme).text};
  margin-bottom: ${e=>e.variant===vo.ADVANCED?"4px":"0"};
  margin-top: ${e=>e.variant===vo.SIMPLE?"2px":"0"};
`,Do=kr.div`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
  color: ${e=>ko(e.severity,e.theme).text};
  opacity: ${e=>e.variant===vo.ADVANCED?"1":"0.9"};
`,zo=kr.div`
  display: flex;
  gap: 8px;
  margin-top: ${e=>e.variant===vo.ADVANCED?"12px":"0"};
  flex-wrap: wrap;
  margin-left: ${e=>e.variant===vo.SIMPLE?"auto":e.variant===vo.ADVANCED?"-20px":"0"};
`,Mo=(kr.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${e=>"primary"===e.variant&&`\n    background: transparent;\n    color: ${e=>e.isAdvanced?"#3B82F6":e=>e.isSimple?"#2563EB":"#3B82F6"};\n    \n    &:hover {\n      background: ${e=>e.isAdvanced?"rgba(59, 130, 246, 0.05)":e=>e.isSimple?"rgba(37, 99, 235, 0.05)":"rgba(59, 130, 246, 0.05)"};\n    }\n  `}
  
  ${e=>"secondary"===e.variant&&`\n    background: transparent;\n    color: ${e=>e.isAdvanced?"#475569":e=>e.isSimple?"#4B5563":ko(e.severity,e.theme).text};\n    border: none;\n    \n    &:hover {\n      background: rgba(0, 0, 0, 0.05);\n    }\n  `}
  
  ${e=>"tertiary"===e.variant&&`\n    background: transparent;\n    color: ${e=>e.isAdvanced?"#475569":e=>e.isSimple?"#4B5563":ko(e.severity,e.theme).text};\n    \n    &:hover {\n      background: rgba(0, 0, 0, 0.05);\n    }\n  `}
`,kr.div`
  font-size: 12px;
  color: ${e=>ko(e.severity,e.theme).metadata};
  opacity: ${e=>e.variant===vo.ADVANCED?"1":"0.7"};
  margin-top: ${e=>e.variant===vo.ADVANCED?"16px":"0"};
`),Io=(0,t.forwardRef)((e,n)=>{let{type:r=xo.INLINE,variant:i=vo.SIMPLE,severity:o=yo.INFO,theme:a=bo.LIGHT,position:l=wo.TOP_RIGHT,title:s,message:c,dismissible:u=!1,autoDismiss:d=!1,autoDismissTime:p=5e3,onDismiss:f,onAction:h,actions:m=[],timestamp:g,className:x,keepVisible:v=!1,...y}=e;const[b,w]=(0,t.useState)(!0),[k,j]=(0,t.useState)(!1),[S,A]=(0,t.useState)(p),[E,C]=(0,t.useState)(!1),[F,D]=(0,t.useState)(!1),[z,M]=(0,t.useState)("");(0,t.useEffect)(()=>{r===xo.TOAST&&(w(!0),j(!1),D(!1),C(!1),A(p))},[r,p]),(0,t.useEffect)(()=>{if(void 0===g&&i===vo.ADVANCED){const e=()=>{const e=new Date,t=e.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}),n=e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0});M(`${t} \u2022 ${n}`)};e();const t=setInterval(e,6e4);return()=>clearInterval(t)}void 0!==g&&M("")},[g,i,r]),(0,t.useEffect)(()=>{let e;return d&&r===xo.TOAST&&!E&&b&&(e=setTimeout(()=>{I()},p)),()=>{e&&clearTimeout(e)}},[d,p,r,E,b]),(0,t.useEffect)(()=>{if(d&&r===xo.TOAST){const e=setInterval(()=>{A(e=>Math.max(0,e-100))},100);return()=>clearInterval(e)}},[d,r]);const I=()=>{!F&&b&&(v?null===f||void 0===f||f():(D(!0),r===xo.TOAST?(j(!0),setTimeout(()=>{w(!1),null===f||void 0===f||f()},300)):(w(!1),null===f||void 0===f||f())))},$=e=>{null===h||void 0===h||h(e)};if(!b)return null;ko(o,a);return(0,Ir.jsx)(So,{ref:n,type:r,variant:i,severity:o,theme:a,position:l,isExiting:k,className:x,role:"alert","aria-live":r===xo.TOAST?"polite":"assertive",onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),...y,children:(0,Ir.jsxs)(Ao,{variant:i,children:[(0,Ir.jsx)(Eo,{variant:i,severity:o,theme:a,children:jo(o)}),i===vo.SIMPLE?(0,Ir.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flex:1},children:[(0,Ir.jsx)("div",{style:{display:"flex",flexDirection:"column",flex:1},children:s&&(0,Ir.jsx)(Fo,{variant:i,severity:o,theme:a,children:s})}),(0,Ir.jsxs)(zo,{variant:i,style:{marginLeft:"auto",marginTop:0,gap:"8px"},children:[m.map((e,t)=>(0,Ir.jsx)(po,{variant:no.TEXT,textVariant:"primary"===e.variant?ro.PRIMARY:ro.SECONDARY,size:"small",label:e.label,onClick:()=>$(e),style:{padding:"8px 12px"},isDarkMode:a===bo.DARK},t)),u&&(0,Ir.jsx)(po,{variant:no.ICON,iconVariant:io.SECONDARY,size:"medium",customIcon:(0,Ir.jsx)(Fr.A,{}),onClick:I,"aria-label":"Close alert",isDarkMode:a===bo.DARK})]})]}):(0,Ir.jsxs)("div",{style:{display:"flex",flexDirection:"column",flex:1,minWidth:0},children:[(0,Ir.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",flex:1},children:[(0,Ir.jsxs)(Co,{variant:i,children:[s&&(0,Ir.jsx)(Fo,{variant:i,severity:o,theme:a,children:s}),c&&i!==vo.SIMPLE&&(0,Ir.jsx)(Do,{severity:o,theme:a,children:c})]}),u&&i!==vo.SIMPLE&&(0,Ir.jsx)(po,{variant:no.ICON,iconVariant:io.SECONDARY,size:"medium",customIcon:(0,Ir.jsx)(Fr.A,{}),onClick:I,"aria-label":"Close alert",isDarkMode:a===bo.DARK,style:{flexShrink:0,marginTop:"2px"}})]}),i===vo.ADVANCED&&m.length>0&&(0,Ir.jsx)(zo,{variant:i,children:m.map((e,t)=>(0,Ir.jsx)(po,{variant:no.TEXT,textVariant:"primary"===e.variant?ro.PRIMARY:ro.SECONDARY,size:"small",label:e.label,iconPosition:e.icon?ao.LEFT:ao.NONE,customIcon:e.icon,onClick:()=>$(e),isDarkMode:a===bo.DARK},t))}),i===vo.ADVANCED&&null!==g&&(g||z)&&(0,Ir.jsx)(Mo,{variant:i,severity:o,theme:a,children:g||z})]})]})})});Io.displayName="Alert";const $o=Io,Lo=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,To=kr.div`
  margin-bottom: 48px;
`,Ro=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,_o=kr.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`,Oo=kr.h2`
  font-size: 16px;
  font-weight: 400;
  color: ${Xr.slate[700]};
  text-transform: none;
  font-family: ${Dr};
  width: 120px;
  min-width: 120px;
  margin: 0;
  padding-right: 24px;
  position: sticky;
  top: 0;
`,Po=kr.div`
  flex: 1;
  min-width: 0;
`,No=kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 4px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
`,Bo=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Uo=()=>{const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)(0),[o,a]=(0,t.useState)(""),l=(e,t)=>{a(`${e} - ${t}`),i(e=>e+1),n(!0)},s=Object.keys(Xr),c=["50","100","200","300","400","500","600","700","800","900"],u=(e,t)=>"common"===e||"brand"===e?(0,Ir.jsx)(Po,{children:(0,Ir.jsx)(No,{children:Object.entries(t).map(t=>{let[n,r]=t;return(0,Ir.jsx)(Zi,{name:n,hex:r,onCopy:()=>l(n,r)},`${e}-${n}`)})})}):(0,Ir.jsx)(Po,{children:(0,Ir.jsx)(No,{children:c.map(n=>(0,Ir.jsx)(Zi,{name:n,hex:t[n],onCopy:()=>l(`${e} ${n}`,t[n])},`${e}-${n}`))})});return(0,Ir.jsxs)(Lo,{children:[(0,Ir.jsxs)(To,{children:[(0,Ir.jsx)(Ro,{children:"Color"}),(0,Ir.jsx)(Bo,{children:"Color is a fundamental part of our design language. It sets the tone for our brand, guides user attention, and ensures accessible, consistent experiences across products. This section outlines our core color palette and provides usage guidance to maintain visual harmony, support accessibility, and reinforce brand identity."})]}),s.map(e=>{const t=Xr[e],n=e.charAt(0).toUpperCase()+e.slice(1);return(0,Ir.jsxs)(_o,{children:[(0,Ir.jsx)(Oo,{children:n}),u(e,t)]},e)}),e&&(0,Ir.jsx)($o,{type:xo.TOAST,variant:vo.SIMPLE,severity:yo.SUCCESS,position:wo.BOTTOM_CENTER,title:"Color Copied!",message:`Color ${o} has been copied to clipboard`,dismissible:!0,autoDismiss:!0,autoDismissTime:3e3,onDismiss:()=>n(!1)},r)]})},Wo={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error"},Ho={SMALL:"small",LARGE:"large"},Vo={PILL:"pill",SQUARE:"square"},Go=kr.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.isIconOnly?"0":"small"===e.size&&e.leftIcon?"4px 12px 4px 8px":"large"===e.size&&e.leftIcon?"6px 16px 6px 12px":(e.leftIcon||e.rightIcon,"small"===e.size?"4px 12px":"6px 16px")};
  height: ${e=>(e.isIconOnly,"small"===e.size?"24px":"32px")};
  width: ${e=>e.isIconOnly?"small"===e.size?"24px":"32px":"auto"};
  aspect-ratio: ${e=>e.isIconOnly?"1 / 1":"auto"};
  background-color: ${e=>((e,t)=>{if(t)switch(e){case Wo.INFO:return"#93C5FD";case Wo.SUCCESS:return"#34D399";case Wo.WARNING:return"#FDBA74";case Wo.ERROR:return"#FCA5A5";default:return"#93C5FD"}switch(e){case Wo.INFO:return"#EFF6FF";case Wo.SUCCESS:return"#ECFDF5";case Wo.WARNING:return"#FFF7ED";case Wo.ERROR:return"#FEF2F2";default:return"#EFF6FF"}})(e.type,e.isDarkMode)};
  border-radius: ${e=>e.isIconOnly?"square"===e.chipStyle?"4px":"50%":"pill"===e.chipStyle?"100px":"4px"};
  color: #0F172A;
  font-family: ${Dr};
  font-weight: 600;
  font-size: ${e=>"small"===e.size?"12px":"14px"};
  line-height: 1;
  box-sizing: border-box;
  user-select: none;
  transition: all 0.2s ease-in-out;

  .icon-left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${e=>"small"===e.size?"16px":"20px"};
    height: ${e=>"small"===e.size?"16px":"20px"};
    margin-right: ${e=>!e.isIconOnly&&("small"===e.size?"6px":"8px")};
    flex-shrink: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .icon-right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${e=>"small"===e.size?"16px":"20px"};
    height: ${e=>"small"===e.size?"16px":"20px"};
    margin-left: ${e=>"small"===e.size?"6px":"8px"};
    flex-shrink: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`,Ko=e=>{let{type:t=Wo.INFO,size:n=Ho.SMALL,chipStyle:r=Vo.PILL,label:i,leftIcon:o,rightIcon:a,isIconOnly:l=!1,className:s,isDarkMode:c=!1,...u}=e;return(0,Ir.jsx)(Go,{type:t,size:n,chipStyle:r,className:s,isDarkMode:c,isIconOnly:l,leftIcon:o,rightIcon:a,role:"status",...u,children:l?(0,Ir.jsx)("span",{className:"icon-left",children:o}):(0,Ir.jsxs)(Ir.Fragment,{children:[o&&(0,Ir.jsx)("span",{className:"icon-left",children:o}),i,a&&(0,Ir.jsx)("span",{className:"icon-right",children:a})]})})},Yo=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Xo=kr.div`
  margin-bottom: 48px;
`,qo=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Qo=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Jo=kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
`,Zo=kr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 32px;
`,ea=kr.div`
  font-size: 14px;
  color: ${Xr.slate[600]};
  margin-bottom: 12px;
`,ta=kr.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 0 20px;
`,na=kr(ho.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#047857"};
`,ra=(kr(fo.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#1D4ED8"};
`,kr.ul`
  margin: 0;
  padding-left: 24px;
  
  li {
    font-size: 14px;
    color: ${Xr.slate[700]};
    line-height: 1.6;
    margin-bottom: 12px;
    padding-left: 4px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`),ia=kr(Di.Title)`
  font-size: 24px !important;
  font-weight: 600 !important;
  color: ${Xr.slate[900]} !important;
  margin: 0 !important;
`,oa=()=>{const e=!1,t={title:"\ud83c\udf89 Cake Web V2 Update",date:(new Date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),description:"We're thrilled to announce the launch of Cake Web V2! This major update brings a modern, responsive design system built with React that empowers teams to create consistent, high-quality experiences across all Lenovo digital products. With comprehensive accessibility features meeting WCAG 2.2 AA standards, standardized design tokens, and an enhanced component library, Cake V2 is your complete toolkit for building cohesive, user-centered interfaces that reflect Lenovo's brand identity."},n=[{version:"v1.4.0",date:"May 1, 2025",type:"Major",current:!0,changes:["Updated core components and focus state to meet WCAG 2.2 guidelines","Improved interaction consistency across all core components","Color contrast improvements for better readability and accessibility"]},{version:"v1.3.0",date:"July 17, 2024",type:"Minor",current:!1,changes:["Improved core component consistency and usability","Refined Figma layout for easier navigation","Added sections for raw components, themes, and usage guidelines"]},{version:"v1.2.8",date:"May 16, 2024",type:"Minor",current:!1,changes:["Added Date Picker component","Updated asterisk required to error color token and SegoeUI font 14 style"]},{version:"v1.2.7",date:"May 8, 2024",type:"Minor",current:!1,changes:["Added Alerts component",'Added "inline-alert" color token']},{version:"v1.2.3",date:"April 19, 2024",type:"Minor",current:!1,changes:["Added Horizontal Tabs component","S & XS breakpoint behaviors"]},{version:"v1.2.0",date:"March 7, 2024",type:"Minor",current:!1,changes:["Enhancements to Alert components","Additional color tokens"]}];return(0,Ir.jsxs)(Yo,{children:[(0,Ir.jsxs)(Xo,{children:[(0,Ir.jsx)(qo,{children:"What's New"}),(0,Ir.jsx)(Qo,{children:"Track the latest updates, improvements, and fixes to the Cake Design System. Each release represents significant changes and additions to help you stay informed about our evolving design language."})]}),(0,Ir.jsx)(Zo,{children:(0,Ir.jsx)(Di,{elevated:!0,hoverable:!0,children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ea,{children:t.date}),(0,Ir.jsx)(ia,{children:t.title}),(0,Ir.jsx)(Qo,{style:{marginTop:"16px",marginBottom:"0"},children:t.description})]})})}),(0,Ir.jsx)(Jo,{children:(()=>{const t=n.sort((e,t)=>new Date(t.date)-new Date(e.date));return t.map((t,n)=>(0,Ir.jsx)(Di,{hoverable:!0,elevated:!0,children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ea,{children:t.date}),(0,Ir.jsx)(ia,{children:t.version}),(0,Ir.jsxs)(ta,{children:[t.current&&(0,Ir.jsx)(Ko,{type:Wo.SUCCESS,size:Ho.SMALL,chipStyle:Vo.PILL,label:"Current",rightIcon:(0,Ir.jsx)(na,{isDarkMode:e}),isDarkMode:e}),(0,Ir.jsx)(Ko,{type:Wo.INFO,size:Ho.SMALL,chipStyle:Vo.PILL,label:`${t.type} release`,isDarkMode:e})]}),(0,Ir.jsx)(ra,{children:t.changes.map((e,t)=>(0,Ir.jsx)("li",{children:e},t))})]})},n))})()})]})},aa=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,la=kr.div`
  margin-bottom: 48px;
`,sa=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,ca=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,ua=kr.div`
  margin-bottom: 40px;
`,da=kr.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
`,pa=()=>(0,Ir.jsxs)(aa,{children:[(0,Ir.jsxs)(la,{children:[(0,Ir.jsx)(sa,{children:"Figma Libraries"}),(0,Ir.jsx)(ca,{children:"Access and use our official Figma libraries to ensure consistency across your designs. These libraries contain all the components, styles, and patterns used in the Cake design system."})]}),(0,Ir.jsxs)(ua,{children:[(0,Ir.jsx)(da,{children:"Getting Started"}),(0,Ir.jsx)(ca,{children:"To get started with our Figma libraries, request access through your team lead or project manager. Once granted access, you'll be able to use all of our components and styles in your Figma designs."})]}),(0,Ir.jsxs)(ua,{children:[(0,Ir.jsx)(da,{children:"Available Libraries"}),(0,Ir.jsxs)(ca,{children:["\u2022 Core Components Library - Contains all basic UI components",(0,Ir.jsx)("br",{}),"\u2022 Icons Library - Complete set of system icons",(0,Ir.jsx)("br",{}),"\u2022 Patterns Library - Common UI patterns and layouts",(0,Ir.jsx)("br",{}),"\u2022 Brand Assets - Logos, colors, and other brand resources"]})]}),(0,Ir.jsxs)(ua,{children:[(0,Ir.jsx)(da,{children:"Best Practices"}),(0,Ir.jsxs)(ca,{children:["\u2022 Always use components from the library instead of creating new ones",(0,Ir.jsx)("br",{}),"\u2022 Keep your designs in sync with the latest library updates",(0,Ir.jsx)("br",{}),"\u2022 Report any issues or suggestions through the design system team",(0,Ir.jsx)("br",{}),"\u2022 Follow the component documentation for proper usage guidelines"]})]})]}),fa=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,ha=kr.div`
  margin-bottom: 48px;
`,ma=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,ga=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,xa=kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
`,va=kr(Fe)`
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 24px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  }
`,ya=kr.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1D4ED8;
  margin: 0 0 12px 0;
  font-family: ${Dr};
`,ba=kr.p`
  margin: 0;
  color: ${Xr.slate[700]};
  font-size: 14px;
  line-height: 1.6;
`,wa=kr.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`,ka=kr.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${Xr.slate[900]};
  margin: 0 0 16px 0;
  font-family: ${Dr};
`,ja=kr.ul`
  margin: 0 0 24px 0;
  padding-left: 20px;
  color: ${Xr.slate[700]};
  font-size: 14px;
  line-height: 1.6;
  
  li {
    margin-bottom: 8px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: ${Xr.slate[900]};
  }
`,Sa=()=>(0,Ir.jsxs)(fa,{children:[(0,Ir.jsxs)(ha,{children:[(0,Ir.jsx)(ma,{children:"About Cake"}),(0,Ir.jsx)(ga,{children:"Cake is One Lenovo's unified design system that helps teams build consistent, high-quality experiences across all Lenovo digital products. It provides a comprehensive set of tools, components, and guidelines to create cohesive, user-centered experiences efficiently while maintaining Lenovo's brand identity and quality standards."})]}),(0,Ir.jsxs)(xa,{children:[(0,Ir.jsxs)(va,{to:"/foundations/colors",children:[(0,Ir.jsx)(ya,{children:"Foundations"}),(0,Ir.jsx)(ba,{children:"Explore our core design foundations including colors, typography, spacing, and grid systems that form the basis of our design language."})]}),(0,Ir.jsxs)(va,{to:"/components/button",children:[(0,Ir.jsx)(ya,{children:"Components"}),(0,Ir.jsx)(ba,{children:"Discover our library of reusable UI components, built with accessibility and flexibility in mind to help you create consistent interfaces."})]}),(0,Ir.jsxs)(va,{to:"/content/guidelines",children:[(0,Ir.jsx)(ya,{children:"Content"}),(0,Ir.jsx)(ba,{children:"Learn about our content guidelines, voice and tone, writing style, and best practices for creating clear and consistent user experiences."})]})]}),(0,Ir.jsxs)(wa,{children:[(0,Ir.jsx)(ka,{children:"Key Features"}),(0,Ir.jsxs)(ja,{children:[(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Unified Components:"})," A comprehensive library of reusable UI components that maintain consistency across all Lenovo products."]}),(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Design Tokens:"})," Standardized design variables for colors, typography, spacing, and other foundational elements."]}),(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Accessibility:"})," Built-in accessibility features ensuring all components meet WCAG guidelines."]}),(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Documentation:"})," Detailed guidelines and best practices for implementing the design system effectively."]})]})]}),(0,Ir.jsxs)(wa,{children:[(0,Ir.jsx)(ka,{children:"Who It's For"}),(0,Ir.jsxs)(ja,{children:[(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Designers:"})," Create consistent designs using our Figma libraries and guidelines."]}),(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Developers:"})," Build robust applications using our React component library and documentation."]}),(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Product Managers:"})," Ensure product consistency and quality across the Lenovo ecosystem."]}),(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Content Strategists:"})," Maintain consistent voice and tone using our content guidelines."]})]})]}),(0,Ir.jsxs)(wa,{children:[(0,Ir.jsx)(ka,{children:"Version Information"}),(0,Ir.jsx)(ga,{children:"Cake is continuously evolving to meet the needs of our teams and users. The current version (4.0.1) introduces improved accessibility features, expanded component library, and enhanced documentation."})]})]});const Aa=n.p+"static/media/icon full color.c5f43b778340b71a9564f8cbea84a26c.svg",Ea=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Ca=kr.div`
  margin-bottom: 48px;
`,Fa=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Da=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,za=kr.section`
  margin-bottom: 48px;
`,Ma=kr.h2`
  color: #334155;
  font-family: ${Dr};
  font-weight: 600;
  font-size: 18px;
  margin: 0 0 16px 0;
`,Ia=kr.p`
  color: #334155;
  font-family: ${Dr};
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 24px 0;
  max-width: 680px;
`,$a=kr.div`
  padding-top: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
`,La=kr.h3`
  margin: 0 0 12px 0;
  color: #334155;
  font-family: ${Dr};
  font-size: 18px;
  font-weight: 600;
`,Ta=kr.p`
  margin: 0;
  color: #334155;
  line-height: 1.5;
  font-family: ${Dr};
  font-size: 14px;
  max-width: 680px;
`,Ra=kr.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  margin-right: 16px;
  
  img {
    width: 64px;
    height: 64px;
  }
`,_a=kr.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 16px;
`,Oa=kr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: #64748B;
  opacity: 0.8;
  transition: opacity 0.2s ease;
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  &:hover {
    opacity: 1;
    color: #475569;
  }
`,Pa=(kr.a`
  color: #1D4ED8;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    text-decoration: underline;
  }
`,()=>(0,Ir.jsxs)(Ea,{children:[(0,Ir.jsxs)(Ca,{children:[(0,Ir.jsx)(Fa,{children:"Resources"}),(0,Ir.jsx)(Da,{children:"Access our comprehensive collection of design resources including Figma libraries and brand assets designed for different use cases and industries."})]}),(0,Ir.jsxs)(za,{children:[(0,Ir.jsx)(Ma,{children:"Figma Libraries"}),(0,Ir.jsx)(Ia,{children:"Design system libraries and components for different use cases and industries."}),(0,Ir.jsx)($a,{children:[{title:"Cake",description:"Core design system components and foundations for Lenovo products.",link:"https://www.figma.com/community/file/1397963315281891204/cake-one-lenovo-design-system"},{title:"Cake for AI (C4AI)",description:"Specialized components and patterns for AI-powered interfaces and experiences.",link:"https://www.figma.com/community/file/1537497596724978160/cake-for-ai"}].map((e,t)=>(0,Ir.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},children:(0,Ir.jsx)(Di,{elevated:!0,hoverable:!0,children:(0,Ir.jsxs)(Di.Body,{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,Ir.jsxs)(_a,{children:[(0,Ir.jsx)(Ra,{children:(0,Ir.jsx)("img",{src:Aa,alt:"Figma"})}),(0,Ir.jsx)(Oa,{children:(0,Ir.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h12V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7z"})})})]}),(0,Ir.jsx)(La,{children:e.title}),(0,Ir.jsx)(Ta,{style:{marginBottom:"20px",flex:1},children:e.description})]})},t)}))})]})]}));var Na=n(6502),Ba=n(9882);const Ua=Ar`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.1);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`,Wa=kr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
`,Ha=kr.div`
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.15) 0%,
    rgba(147, 51, 234, 0.1) 25%,
    rgba(236, 72, 153, 0.08) 50%,
    rgba(34, 197, 94, 0.06) 75%,
    transparent 100%
  );
  filter: blur(60px);
  animation: ${Ua} 20s ease-in-out infinite;
  opacity: 0.6;
  
  &:nth-child(1) {
    top: -400px;
    left: -200px;
    animation-delay: 0s;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.2) 0%,
      rgba(147, 51, 234, 0.15) 50%,
      transparent 100%
    );
  }
  
  &:nth-child(2) {
    top: 50%;
    right: -300px;
    animation-delay: -5s;
    background: radial-gradient(
      circle,
      rgba(236, 72, 153, 0.15) 0%,
      rgba(34, 197, 94, 0.1) 50%,
      transparent 100%
    );
  }
  
  &:nth-child(3) {
    bottom: -200px;
    left: 50%;
    animation-delay: -10s;
    background: radial-gradient(
      circle,
      rgba(147, 51, 234, 0.12) 0%,
      rgba(59, 130, 246, 0.08) 50%,
      transparent 100%
    );
  }
  
  &:nth-child(4) {
    top: 20%;
    left: 20%;
    animation-delay: -15s;
    background: radial-gradient(
      circle,
      rgba(34, 197, 94, 0.1) 0%,
      rgba(236, 72, 153, 0.08) 50%,
      transparent 100%
    );
  }
`,Va=()=>(0,Ir.jsxs)(Wa,{children:[(0,Ir.jsx)(Ha,{}),(0,Ir.jsx)(Ha,{}),(0,Ir.jsx)(Ha,{}),(0,Ir.jsx)(Ha,{})]}),Ga=kr.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px 120px 20px;
  position: relative;
  z-index: 1;
`,Ka=kr.div`
  margin-bottom: 20px;
`,Ya=(kr.div`
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.05);
  min-width: 200px;
`,kr.div`
  color: #64748B;
  font-family: ${Dr};
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`),Xa=kr.div`
  color: #0F172A;
  font-family: ${Dr};
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`,qa=(kr.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,kr(ho.A)`
  color: #047857;
`,kr(Ko)`
  background-color: #D1FAE5 !important;
  color: #065F46 !important;
  
  .icon-left svg {
    color: #10B981 !important;
  }
`,kr.h1`
  color: #0F172A;
  font-family: ${Dr};
  font-weight: 800;
  font-size: clamp(4rem, 12vw, 8rem);
  line-height: 1.1;
  padding-bottom: 0.5rem;
  margin: 0;

  @media (max-width: 640px) {
    line-height: 1.2;
  }
`),Qa=(kr.h1`
  color: #0F172A;
  font-family: ${Dr};
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 0 0 1rem 0;
`,kr.h2`
  color: #334155;
  font-family: ${Dr};
  font-weight: 400;
  font-stretch: 580;
  font-size: 2.25rem;
  line-height: 1.4;
  margin: 0 0 0.5rem 0;
  max-width: 680px;
`),Ja=(kr.p`
  color: #334155;
  font-family: ${Dr};
  font-weight: 400;
  font-stretch: 580;
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin: 0 0 1.5rem 0;
  max-width: 680px;
`,kr.section`
  padding: 1rem 0px;
`),Za=kr.h2`
  color: #334155;
  font-family: ${Dr};
  font-weight: 600;
  font-size: 1.125rem;
  margin: 0 0 0.5rem 0;
`,el=(kr.p`
  color: #334155;
  font-family: ${Dr};
  font-weight: 400;
  font-stretch: 580;
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin: 0 0 1rem 0;
  max-width: 680px;
`,kr.div`
  padding-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  align-items: stretch;
`),tl=kr.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  color: #1E293B;
  
  & > svg {
    width: 2rem;
    height: 2rem;
  }
`,nl=kr.h3`
  margin: 0 0 0.75rem 0;
  color: #334155;
  font-family: ${Dr};
  font-size: 0.875rem;
  font-weight: 600;
`,rl=kr.p`
  margin: 0;
  color: #334155;
  line-height: 1.5;
  font-family: ${Dr};
  font-weight: 400;
  font-stretch: 580;
  font-size: 0.875rem;
  max-width: 680px;

  a {
    color: #1D4ED8;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,il=(kr.button`
  background: none;
  border: none;
  color: #1D4ED8;
  font-family: ${Dr};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  margin: 0;
  text-align: left;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    color: #1E3A8A;
  }
  
  &:focus {
    outline: none;
  }
`,()=>(0,Ir.jsxs)(Ir.Fragment,{children:[(0,Ir.jsx)(Va,{}),(0,Ir.jsxs)(Ga,{children:[(0,Ir.jsxs)(Ka,{children:[(0,Ir.jsx)(qa,{children:"Cake"}),(0,Ir.jsx)(Qa,{children:"Ingredients for great design."})]}),(0,Ir.jsxs)(el,{children:[(0,Ir.jsx)(Fe,{to:"/resources",style:{textDecoration:"none",color:"inherit",display:"block",height:"100%"},children:(0,Ir.jsx)(Di,{elevated:!0,hoverable:!0,style:{display:"flex",flexDirection:"column",height:"100%"},children:(0,Ir.jsxs)(Di.Body,{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Ir.jsxs)("div",{children:[(0,Ir.jsx)(nl,{style:{fontSize:"1.125rem",marginBottom:"0.5rem"},children:"Get started"}),(0,Ir.jsx)(rl,{style:{marginBottom:"1.25rem",fontSize:"1rem"},children:"Start building modular, accessible, and brand-aligned features using our core components. Explore foundations, patterns, and reusable components to design faster and more consistently across Lenovo products."})]}),(0,Ir.jsx)("div",{style:{marginTop:"auto"},children:(0,Ir.jsxs)("button",{style:{background:"none",border:"none",color:"#1D4ED8",fontFamily:Dr,fontSize:"0.875rem",fontWeight:"600",cursor:"pointer",padding:"0",margin:"0",textAlign:"left",textDecoration:"none",display:"flex",alignItems:"center",gap:"4px"},children:["Access Figma Libraries",(0,Ir.jsx)(Na.A,{style:{width:"16px",height:"16px"}})]})})]})})}),(0,Ir.jsx)(Fe,{to:"/whats-new",style:{textDecoration:"none",color:"inherit",display:"block",height:"100%"},children:(0,Ir.jsx)(Di,{elevated:!0,hoverable:!0,style:{display:"flex",flexDirection:"column",height:"100%"},children:(0,Ir.jsxs)(Di.Body,{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Ir.jsxs)("div",{children:[(0,Ir.jsx)(nl,{style:{fontSize:"1.125rem",marginBottom:"1rem"},children:"What's new"}),(0,Ir.jsx)("div",{style:{padding:"1rem",border:"1px solid #E2E8F0",borderRadius:"0.75rem",background:"white"},children:(0,Ir.jsxs)("div",{children:[(0,Ir.jsx)(Ya,{style:{fontSize:"0.75rem",marginBottom:"0.5rem"},children:(new Date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}),(0,Ir.jsx)(Xa,{style:{fontSize:"1rem",marginBottom:"0.5rem"},children:"\ud83c\udf89 Cake Web V2 Update"})]})})]}),(0,Ir.jsx)("div",{style:{marginTop:"auto",paddingTop:"1rem"},children:(0,Ir.jsxs)("button",{style:{background:"none",border:"none",color:"#1D4ED8",fontFamily:Dr,fontSize:"0.875rem",fontWeight:"600",cursor:"pointer",padding:"0",margin:"0",textAlign:"left",textDecoration:"none",display:"flex",alignItems:"center",gap:"4px"},children:["Find out what's new",(0,Ir.jsx)(Na.A,{style:{width:"16px",height:"16px"}})]})})]})})})]}),(0,Ir.jsxs)(Ja,{style:{marginTop:"2rem"},children:[(0,Ir.jsx)(Za,{style:{fontSize:"1.5rem",fontWeight:"600",marginBottom:"1rem",color:"#0F172A"},children:"Why build with Cake?"}),(0,Ir.jsxs)(el,{children:[(0,Ir.jsx)(Di,{elevated:!0,style:{display:"flex",flexDirection:"column"},children:(0,Ir.jsxs)(Di.Body,{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Ir.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",marginBottom:"1rem"},children:(0,Ir.jsx)(tl,{children:(0,Ir.jsx)("svg",{width:"2rem",height:"2rem",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H19c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"})})})}),(0,Ir.jsx)(nl,{style:{fontSize:"1.125rem",marginBottom:"0.5rem"},children:"Modularity"}),(0,Ir.jsx)(rl,{style:{marginBottom:"1.25rem",flex:1,fontSize:"1rem"},children:"Build with confidence using our modular component system. Mix and match components to create consistent, scalable interfaces that adapt to your needs."})]})}),(0,Ir.jsx)(Di,{elevated:!0,style:{display:"flex",flexDirection:"column"},children:(0,Ir.jsxs)(Di.Body,{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Ir.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",marginBottom:"1rem"},children:(0,Ir.jsx)(tl,{children:(0,Ir.jsx)("svg",{width:"2rem",height:"2rem",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"})})})}),(0,Ir.jsx)(nl,{style:{fontSize:"1.125rem",marginBottom:"0.5rem"},children:"Accessibility"}),(0,Ir.jsxs)(rl,{style:{marginBottom:"1.25rem",flex:1,fontSize:"1rem"},children:["Every Cake component is built to meet"," ",(0,Ir.jsx)("a",{href:"https://www.w3.org/TR/WCAG22/",target:"_blank",rel:"noopener noreferrer",style:{color:"#1D4ED8",textDecoration:"none"},children:"WCAG 2.2 AA standards"}),", ensuring your experiences are accessible, inclusive, and usable by everyone, regardless of ability or device."]})]})}),(0,Ir.jsx)(Di,{elevated:!0,style:{display:"flex",flexDirection:"column"},children:(0,Ir.jsxs)(Di.Body,{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Ir.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",marginBottom:"1rem"},children:(0,Ir.jsx)(tl,{children:(0,Ir.jsx)(Ba.A,{})})}),(0,Ir.jsx)(nl,{style:{fontSize:"1.125rem",marginBottom:"0.5rem"},children:"Brand"}),(0,Ir.jsx)(rl,{style:{marginBottom:"1.25rem",flex:1,fontSize:"1rem"},children:"Maintain brand consistency across all your applications. Cake provides the building blocks that reflect Lenovo's design language and values."})]})})]})]})]})]})),ol=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,al=kr.div`
  margin-bottom: 48px;
`,ll=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,sl=kr.p`
  font-size: 16px;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,cl=kr.section`
  margin-bottom: 48px;
`,ul=(kr.h2`
  font-size: 24px;
  margin-bottom: 24px;
  color: #0F172A;
`,kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),dl=kr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,pl=kr.label`
  font-weight: 600;
  color: #0F172A;
`,fl=kr.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`,hl=kr.div`
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,ml=(kr.pre`
  background: #0F172A;
  color: #F8FAFC;
  padding: 24px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,kr(fo.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#1D4ED8"};
`),gl=kr(ho.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#047857"};
`,xl=kr(mo.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#C2410C"};
`,vl=kr(go.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#B91C1C"};
`,yl="light.a",bl="dark.a",wl=(e,t)=>{switch(e){case Wo.INFO:return(0,Ir.jsx)(ml,{isDarkMode:t});case Wo.SUCCESS:return(0,Ir.jsx)(gl,{isDarkMode:t});case Wo.WARNING:return(0,Ir.jsx)(xl,{isDarkMode:t});case Wo.ERROR:return(0,Ir.jsx)(vl,{isDarkMode:t});default:return null}},kl=()=>{const[e,n]=(0,t.useState)(Ho.LARGE),[r,i]=(0,t.useState)(Vo.PILL),[o,a]=(0,t.useState)(!1),[l,s]=(0,t.useState)(!0),[c,u]=(0,t.useState)(!1),[d,p]=(0,t.useState)(yl),f=d===bl,h=e=>e.charAt(0).toUpperCase()+e.slice(1);return(0,Ir.jsxs)(ol,{children:[(0,Ir.jsxs)(al,{children:[(0,Ir.jsx)(ll,{children:"Chip"}),(0,Ir.jsx)(sl,{children:"The Chip Component is a compact and versatile UI element used to represent discrete pieces of information, attributes, or actions within an interface. It offers a visually appealing way to display and interact with small sets of data or options."})]}),(0,Ir.jsxs)(cl,{children:[(0,Ir.jsxs)(ul,{children:[(0,Ir.jsxs)(dl,{children:[(0,Ir.jsx)(pl,{children:"Size"}),(0,Ir.jsx)(fl,{value:e,onChange:e=>n(e.target.value),children:Object.values(Ho).map(e=>(0,Ir.jsx)("option",{value:e,children:e.toLowerCase()},e))})]}),(0,Ir.jsxs)(dl,{children:[(0,Ir.jsx)(pl,{children:"Style"}),(0,Ir.jsx)(fl,{value:r,onChange:e=>i(e.target.value),children:Object.values(Vo).map(e=>(0,Ir.jsx)("option",{value:e,children:e.toLowerCase()},e))})]}),(0,Ir.jsxs)(dl,{children:[(0,Ir.jsx)(pl,{children:"Icons"}),(0,Ir.jsxs)(fl,{value:c?"icon-only":`${o}-${l}`,onChange:e=>{const t=e.target.value;if("icon-only"===t)u(!0),a(!0),s(!1);else{u(!1);const[e,n]=t.split("-");a("true"===e),s("true"===n)}},children:[(0,Ir.jsx)("option",{value:"icon-only",children:"Icon only"}),(0,Ir.jsx)("option",{value:"true-false",children:"Left icon only"}),(0,Ir.jsx)("option",{value:"false-true",children:"Right icon only"}),(0,Ir.jsx)("option",{value:"false-false",children:"No icons"})]})]}),(0,Ir.jsxs)(dl,{children:[(0,Ir.jsx)(pl,{children:"Theme"}),(0,Ir.jsxs)(fl,{value:d,onChange:e=>p(e.target.value),children:[(0,Ir.jsx)("option",{value:yl,children:"Light.a"}),(0,Ir.jsx)("option",{value:bl,children:"Dark.a"})]})]})]}),(0,Ir.jsx)(hl,{isDarkMode:f,children:Object.values(Wo).map(t=>(0,Ir.jsx)(Ko,{type:t,size:e,chipStyle:r,label:c?void 0:h(t),leftIcon:o||c?wl(t,f):null,rightIcon:l&&!c?wl(t,f):null,isIconOnly:c,isDarkMode:f},t))})]})]})};var jl=n(4536);const Sl=Ar`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Al=kr.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${e=>"large"===e.size?"8px 24px":"6px 20px"};
  height: ${e=>"large"===e.size?"40px":"32px"};
  background-color: ${e=>e.disabled?e.isDarkMode?"#1F2937":"#E2E8F0":"secondary"===e.variant?e.isDarkMode?"#CBD5E1":"#E2E8F0":e.isDarkMode?"#93C5FD":"#1D4ED8"};
  color: ${e=>e.disabled?e.isDarkMode?"#9CA3AF":"#94A3B8":"secondary"===e.variant?e.isDarkMode?"#000000":"#0F172A":e.isDarkMode?"#18181B":"#FFFFFF"};
  
  border: none;
  border-radius: ${e=>"pill"===e.buttonStyle?"100px":"8px"};
  font-family: ${Dr};
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: background-color 200ms ease-in-out, transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  user-select: none;
  position: relative;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    color: ${e=>e.disabled?e.isDarkMode?"#9CA3AF":"#94A3B8":"secondary"===e.variant?"#0F172A":"inherit"};
    transform: rotate(${e=>e.$isOpen?"180deg":"0deg"});
    transition: transform 0s;
  }

  &:hover:not(:disabled) {
    background-color: ${e=>"secondary"===e.variant?e.isDarkMode?"#94A3B8":"#CBD5E1":e.isDarkMode?"#60A5FA":"#1E3A8A"};
    color: ${e=>"secondary"===e.variant?e.isDarkMode?"#000000":"#0F172A":e.isDarkMode?"#18181B":"#FFFFFF"};
  }

  &:active:not(:disabled) {
    background-color: ${e=>"secondary"===e.variant?(e.isDarkMode,"#CBD5E1"):e.isDarkMode?"#93C5FD":"#1E40AF"};
    color: ${e=>"secondary"===e.variant?e.isDarkMode?"#000000":"#0F172A":e.isDarkMode?"#18181B":"#FFFFFF"};
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${e=>`0 0 0 2px ${e.isDarkMode?"#18181B":"#FFFFFF"}, 0 0 0 4px #3B82F6`};
    background-color: ${e=>"secondary"===e.variant?e.isDarkMode?"#CBD5E1":"#E2E8F0":e.isDarkMode?"#93C5FD":"#1D4ED8"};
  }


`,El=kr.div`
  position: absolute;
  ${e=>"down"===e.$calculatedPosition.direction?"top: calc(100% + 8px);":"bottom: calc(100% + 8px);"}
  ${e=>"right"===e.$calculatedPosition.alignment?"right: 0;":"left: 0;"}
  min-width: 100%;
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  border-radius: 8px;
  border: ${e=>e.isDarkMode?"1px solid #52525B":"1px solid #E2E8F0"}; // border-gray-200 in light mode
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); // shadow-lg
  z-index: 1000;
  overflow: hidden;
  padding: 4px 0;
  animation: ${Sl} 0.2s ease-out;
  
  &.dropdown-up {
    transform-origin: bottom;
  }
  
  &.dropdown-down {
    transform-origin: top;
  }
`,Cl=kr.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  background: none;
  border: none;
  font-family: ${Dr};
  font-size: 14px;
  color: ${e=>e.isDarkMode?"#D4D4D8":"#374151"}; // text-gray-700 in light mode
  cursor: pointer;
  transition: all 200ms ease-in-out;

  .menu-item-content {
    flex: 1;
  }



  &:hover {
    background-color: ${e=>e.isDarkMode?"#27272A":"#F3F4F6"};
  }

  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px ${e=>e.isDarkMode?"#60A5FA":"#3B82F6"};
  }
`,Fl=e=>{let{label:n="Dropdown",items:r=[],disabled:i=!1,buttonStyle:o="pill",size:a="medium",isDarkMode:l=!1,className:s,onSelect:c,renderItem:u,position:d="bottom-left",variant:p="primary"}=e;const[f,h]=(0,t.useState)(!1),[m,g]=(0,t.useState)(null),[x,v]=(0,t.useState)({direction:d.startsWith("bottom")?"down":"up",alignment:d.endsWith("right")?"right":"left"}),y=(0,t.useRef)(null),b=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(f&&y.current&&b.current){const e=()=>{const e=((e,t,n)=>{const r=e.getBoundingClientRect(),i=t.offsetHeight,o=window.innerHeight-r.bottom,a=r.top;let l;return l=n.startsWith("bottom")&&o>=i+20?"down":n.startsWith("top")&&a>=i+20?"up":o>=a?"down":"up",{direction:l,alignment:n.endsWith("right")?"right":"left"}})(y.current,b.current,d);v(e)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}},[f,d]),(0,t.useEffect)(()=>{const e=e=>{y.current&&!y.current.contains(e.target)&&b.current&&!b.current.contains(e.target)&&h(!1)},t=e=>{"Escape"===e.key&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}},[]);const w=e=>{g(t=>{const n=t===e?null:e;return console.log("Previous selection:",t),console.log("New selection:",n),n}),h(!1),null===c||void 0===c||c(e)};return(0,Ir.jsxs)("div",{style:{position:"relative",display:"inline-block"},children:[(0,Ir.jsxs)(Al,{ref:y,disabled:i,onClick:()=>{i||h(!f)},onKeyDown:e=>{var t;if(!i)switch(e.key){case"Enter":case" ":e.preventDefault(),h(!f);break;case"ArrowDown":if(f&&r.length>0){e.preventDefault();const t=m?r.indexOf(m):-1,n=t<r.length-1?t+1:0,i=document.querySelectorAll('[role="menuitem"]');i[n]&&i[n].focus()}break;case"ArrowUp":if(f&&r.length>0){e.preventDefault();const t=m?r.indexOf(m):0,n=t>0?t-1:r.length-1,i=document.querySelectorAll('[role="menuitem"]');i[n]&&i[n].focus()}break;case"Enter":case" ":if(f&&"menuitem"===(null===(t=document.activeElement)||void 0===t?void 0:t.getAttribute("role"))){e.preventDefault();const t=r[Array.from(document.querySelectorAll('[role="menuitem"]')).indexOf(document.activeElement)];t&&w(t)}}},$isOpen:f,buttonStyle:o,size:a,isDarkMode:l,className:s,variant:p,"aria-haspopup":"true","aria-expanded":f,"aria-disabled":i,children:[n,(0,Ir.jsx)("span",{className:"icon",children:(0,Ir.jsx)(jl.A,{})})]}),f&&(0,Ir.jsx)(El,{ref:b,position:d,isDarkMode:l,role:"menu",$calculatedPosition:x,className:`dropdown-${x.direction}`,children:r.map((e,t)=>(0,Ir.jsx)(Cl,{onClick:()=>w(e),selected:m===e,isDarkMode:l,role:"menuitem",tabIndex:-1,"aria-selected":m===e,children:u?u(e,m===e):e},t))})]})},Dl=kr.div`
  display: inline-flex;
  background: ${e=>e.$isDarkMode?"#1F2937":"#F1F5F9"};
  position: relative;
  border-radius: 4px;
  border: 2px solid ${e=>e.$isDarkMode?"#52525B":"#CBD5E1"};
  padding: 0;
  gap: 0;
  box-sizing: content-box;
  overflow: hidden;
`,zl=kr.button`
  position: relative;
  padding: ${e=>"large"===e.$size?"8px 24px":"6px 16px"};
  height: ${e=>"large"===e.$size?"40px":"32px"};
  font-size: ${e=>"large"===e.$size?"15px":"14px"};
  line-height: 1;
  border: none;

  &:not(:last-child) {
    border-right: 2px solid ${e=>e.$isDarkMode?"#52525B":"#CBD5E1"};
  }

  &:not(:last-child)[aria-checked="true"],
  &:not(:last-child) + button[aria-checked="true"] {
    border-right-color: ${e=>e.$isDarkMode?"#52525B":"transparent"};
  }
  border-radius: ${e=>e.$isFirst?"2px 0 0 2px":e.$isLast?"0 2px 2px 0":"0"};
  
  ${e=>e.$selected&&`\n    background: ${e.$isDarkMode?"#93C5FD":"#1D4ED8"};\n    color: ${e.$isDarkMode?"#18181B":"#FFFFFF"};\n  `}
  font-family: ${Dr};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  white-space: nowrap;
  min-width: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  
  background: ${e=>e.$selected?e.$isDarkMode?"#93C5FD":"#1D4ED8":e.$isDarkMode?"#CBD5E1":"#E2E8F0"};
  
  color: ${e=>e.$selected?e.$isDarkMode?"#18181B":"#FFFFFF":e.$isDarkMode?"#000000":"#0F172A"};

  &:hover:not(:disabled) {
    background: ${e=>e.$selected?e.$isDarkMode?"#60A5FA":"#1E3A8A":e.$isDarkMode?"#94A3B8":"#CBD5E1"};
  }

  &:active:not(:disabled) {
    background: ${e=>e.$selected?e.$isDarkMode?"#60A5FA":"#1E3A8A":(e.$isDarkMode,"#CBD5E1")};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>e.$isDarkMode?"#93C5FD":"#1D4ED8"};
  }

  &:disabled {
    background: ${e=>e.$isDarkMode?"#1F2937":"#E5E7EB"} !important;
    color: ${e=>e.$isDarkMode?"#9CA3AF":"#475569"};
    cursor: not-allowed;
  }
`,Ml=e=>{let{options:n,value:r,defaultValue:i,onChange:o,disabled:a=!1,className:l,isDarkMode:s=!1,size:c="medium"}=e;const[u,d]=(0,t.useState)(i),p=void 0!==r,f=p?r:u,h=(0,t.useCallback)(e=>{if(a)return;const t=f===e?void 0:e;p||d(t),null===o||void 0===o||o(t)},[a,p,o,f]);return(0,Ir.jsx)(Dl,{className:l,$isDarkMode:s,role:"radiogroup",children:n.map((e,t)=>(0,Ir.jsx)(zl,{onClick:()=>h(e.value),$selected:f===e.value,$isDarkMode:s,$size:c,$isFirst:0===t,$isLast:t===n.length-1,disabled:a||e.disabled,role:"radio","aria-checked":f===e.value,type:"button",children:e.label},e.value))})},Il=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,$l=kr.div`
  margin-bottom: 48px;
`,Ll=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Tl=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;

  &[data-has-bullets='true'] {
    padding-left: 24px;
    
    li {
      position: relative;
      list-style-type: none;
      margin-bottom: 8px;
      
      &:before {
        content: "•";
        position: absolute;
        left: -24px;
        color: #475569;
      }
    }
  }
`,Rl=kr.section`
  margin-bottom: 48px;
`,_l=kr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,Ol=kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,Pl=kr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Nl=kr.label`
  font-weight: 600;
  color: #0F172A;
`,Bl=kr.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`,Ul=kr.div`
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Wl="light.a",Hl="dark.a",Vl="disabled",Gl="loading",Kl=()=>{const[e,n]=(0,t.useState)(oo.MEDIUM),[r,i]=(0,t.useState)(ao.NONE),[o,a]=(0,t.useState)(""),[l,s]=(0,t.useState)(Wl),[c,u]=(0,t.useState)(lo.PILL),d=l===Hl,[p,f]=(0,t.useState)(oo.MEDIUM),[h,m]=(0,t.useState)(ao.NONE),[g,x]=(0,t.useState)(""),[v,y]=(0,t.useState)(Wl),[b,w]=(0,t.useState)(lo.PILL),k=v===Hl,[j,S]=(0,t.useState)(oo.MEDIUM),[A,E]=(0,t.useState)(""),[C,F]=(0,t.useState)(Wl),[D,z]=(0,t.useState)(lo.PILL),M=C===Hl,[I,$]=(0,t.useState)(oo.MEDIUM),[L,T]=(0,t.useState)(""),[R,_]=(0,t.useState)(Wl),[O,P]=(0,t.useState)(lo.PILL),N=R===Hl,[B,U]=(0,t.useState)("medium"),[W,H]=(0,t.useState)(""),[V,G]=(0,t.useState)(Wl),K=V===Hl,Y=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),X=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();return(0,Ir.jsxs)(Il,{children:[(0,Ir.jsxs)($l,{children:[(0,Ir.jsx)(Ll,{children:"Button"}),(0,Ir.jsx)(Tl,{children:"The Button Component is a fundamental element of the user interface used for triggering actions, navigating between pages, or submitting forms. It provides a clear call-to-action and enhances user interaction within the application or website."})]}),(0,Ir.jsxs)(Rl,{children:[(0,Ir.jsx)(_l,{children:"Basic button"}),(0,Ir.jsxs)(Ol,{children:[(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Size"}),(0,Ir.jsx)(Bl,{value:e,onChange:e=>n(e.target.value),children:Object.values(oo).filter(e=>e!==oo.SMALL&&e!==oo.XLARGE).map(e=>(0,Ir.jsx)("option",{value:e,children:Y(e)},e))})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Icon position"}),(0,Ir.jsxs)(Bl,{value:r,onChange:e=>i(e.target.value),children:[(0,Ir.jsx)("option",{value:ao.NONE,children:"No icon"}),(0,Ir.jsx)("option",{value:ao.LEFT,children:"Left icon"}),(0,Ir.jsx)("option",{value:ao.RIGHT,children:"Right icon"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Style"}),(0,Ir.jsxs)(Bl,{value:c,onChange:e=>u(e.target.value),children:[(0,Ir.jsx)("option",{value:lo.PILL,children:"Pill"}),(0,Ir.jsx)("option",{value:lo.SQUARE,children:"Square"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"State"}),(0,Ir.jsxs)(Bl,{value:o,onChange:e=>a(e.target.value),children:[(0,Ir.jsx)("option",{value:"",children:"None"}),(0,Ir.jsx)("option",{value:Vl,children:"Disabled"}),(0,Ir.jsx)("option",{value:Gl,children:"Loading"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Theme"}),(0,Ir.jsxs)(Bl,{value:l,onChange:e=>s(e.target.value),children:[(0,Ir.jsx)("option",{value:Wl,children:"Light.a"}),(0,Ir.jsx)("option",{value:Hl,children:"Dark.a"})]})]})]}),(0,Ir.jsx)(Ul,{isDarkMode:d,children:Object.values(no).filter(e=>e!==no.TEXT&&e!==no.ICON).map(t=>(0,Ir.jsx)(po,{variant:t,size:e,iconPosition:r,buttonStyle:c,label:X(t),disabled:o===Vl,loading:o===Gl,isDarkMode:d},t))})]}),(0,Ir.jsxs)(Rl,{children:[(0,Ir.jsx)(_l,{children:"Text button"}),(0,Ir.jsxs)(Ol,{children:[(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Size"}),(0,Ir.jsx)(Bl,{value:p,onChange:e=>f(e.target.value),children:Object.values(oo).filter(e=>e!==oo.SMALL&&e!==oo.XLARGE).map(e=>(0,Ir.jsx)("option",{value:e,children:Y(e)},e))})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Icon position"}),(0,Ir.jsxs)(Bl,{value:h,onChange:e=>m(e.target.value),children:[(0,Ir.jsx)("option",{value:ao.NONE,children:"No icon"}),(0,Ir.jsx)("option",{value:ao.LEFT,children:"Left icon"}),(0,Ir.jsx)("option",{value:ao.RIGHT,children:"Right icon"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Style"}),(0,Ir.jsxs)(Bl,{value:b,onChange:e=>w(e.target.value),children:[(0,Ir.jsx)("option",{value:lo.PILL,children:"Pill"}),(0,Ir.jsx)("option",{value:lo.SQUARE,children:"Square"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"State"}),(0,Ir.jsxs)(Bl,{value:g,onChange:e=>x(e.target.value),children:[(0,Ir.jsx)("option",{value:"",children:"None"}),(0,Ir.jsx)("option",{value:Vl,children:"Disabled"}),(0,Ir.jsx)("option",{value:Gl,children:"Loading"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Theme"}),(0,Ir.jsxs)(Bl,{value:v,onChange:e=>y(e.target.value),children:[(0,Ir.jsx)("option",{value:Wl,children:"Light.a"}),(0,Ir.jsx)("option",{value:Hl,children:"Dark.a"})]})]})]}),(0,Ir.jsxs)(Ul,{isDarkMode:k,children:[(0,Ir.jsx)(po,{variant:no.TEXT,textVariant:"primary",size:p,iconPosition:h,buttonStyle:b,label:"Primary",disabled:g===Vl,loading:g===Gl,isDarkMode:k}),(0,Ir.jsx)(po,{variant:no.TEXT,textVariant:"secondary",size:p,iconPosition:h,buttonStyle:b,label:"Secondary",disabled:g===Vl,loading:g===Gl,isDarkMode:k})]})]}),(0,Ir.jsxs)(Rl,{children:[(0,Ir.jsx)(_l,{children:"Icon button"}),(0,Ir.jsxs)(Ol,{children:[(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Size"}),(0,Ir.jsxs)(Bl,{value:j,onChange:e=>S(e.target.value),children:[(0,Ir.jsx)("option",{value:oo.SMALL,children:"Small"}),(0,Ir.jsx)("option",{value:oo.MEDIUM,children:"Medium"}),(0,Ir.jsx)("option",{value:oo.LARGE,children:"Large"}),(0,Ir.jsx)("option",{value:oo.XLARGE,children:"XLarge"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Style"}),(0,Ir.jsxs)(Bl,{value:D,onChange:e=>z(e.target.value),children:[(0,Ir.jsx)("option",{value:lo.PILL,children:"Pill"}),(0,Ir.jsx)("option",{value:lo.SQUARE,children:"Square"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"State"}),(0,Ir.jsxs)(Bl,{value:A,onChange:e=>E(e.target.value),children:[(0,Ir.jsx)("option",{value:"",children:"None"}),(0,Ir.jsx)("option",{value:Vl,children:"Disabled"}),(0,Ir.jsx)("option",{value:Gl,children:"Loading"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Theme"}),(0,Ir.jsxs)(Bl,{value:C,onChange:e=>F(e.target.value),children:[(0,Ir.jsx)("option",{value:Wl,children:"Light.a"}),(0,Ir.jsx)("option",{value:Hl,children:"Dark.a"})]})]})]}),(0,Ir.jsxs)(Ul,{isDarkMode:M,children:[(0,Ir.jsx)(po,{variant:no.ICON,iconVariant:io.PRIMARY,size:j,iconPosition:ao.NONE,buttonStyle:D,"aria-label":"Download",disabled:A===Vl,loading:A===Gl,isDarkMode:M}),(0,Ir.jsx)(po,{variant:no.ICON,iconVariant:io.SECONDARY,size:j,iconPosition:ao.NONE,buttonStyle:D,"aria-label":"Download",disabled:A===Vl,loading:A===Gl,isDarkMode:M})]})]}),(0,Ir.jsxs)(Rl,{children:[(0,Ir.jsx)(_l,{children:"Dropdown button"}),(0,Ir.jsxs)(Ol,{children:[(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Size"}),(0,Ir.jsx)(Bl,{value:I,onChange:e=>$(e.target.value),children:Object.values(oo).filter(e=>e!==oo.SMALL&&e!==oo.XLARGE).map(e=>(0,Ir.jsx)("option",{value:e,children:Y(e)},e))})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Style"}),(0,Ir.jsxs)(Bl,{value:O,onChange:e=>P(e.target.value),children:[(0,Ir.jsx)("option",{value:lo.PILL,children:"Pill"}),(0,Ir.jsx)("option",{value:lo.SQUARE,children:"Square"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"State"}),(0,Ir.jsxs)(Bl,{value:L,onChange:e=>T(e.target.value),children:[(0,Ir.jsx)("option",{value:"",children:"None"}),(0,Ir.jsx)("option",{value:Vl,children:"Disabled"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Theme"}),(0,Ir.jsxs)(Bl,{value:R,onChange:e=>_(e.target.value),children:[(0,Ir.jsx)("option",{value:Wl,children:"Light.a"}),(0,Ir.jsx)("option",{value:Hl,children:"Dark.a"})]})]})]}),(0,Ir.jsxs)(Ul,{isDarkMode:N,children:[(0,Ir.jsx)(Fl,{label:"Primary",items:["Item","Item","Item","Item","Item"],disabled:L===Vl,buttonStyle:O,size:I,isDarkMode:N}),(0,Ir.jsx)(Fl,{label:"Secondary",items:["Item","Item","Item","Item","Item"],disabled:L===Vl,buttonStyle:O,size:I,isDarkMode:N,variant:"secondary"})]})]}),(0,Ir.jsxs)(Rl,{children:[(0,Ir.jsx)(_l,{children:"Toggle group"}),(0,Ir.jsxs)(Ol,{children:[(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Size"}),(0,Ir.jsxs)(Bl,{value:B,onChange:e=>U(e.target.value),children:[(0,Ir.jsx)("option",{value:"medium",children:"Medium"}),(0,Ir.jsx)("option",{value:"large",children:"Large"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"State"}),(0,Ir.jsxs)(Bl,{value:W,onChange:e=>H(e.target.value),children:[(0,Ir.jsx)("option",{value:"",children:"None"}),(0,Ir.jsx)("option",{value:Vl,children:"Disabled"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Theme"}),(0,Ir.jsxs)(Bl,{value:V,onChange:e=>G(e.target.value),children:[(0,Ir.jsx)("option",{value:Wl,children:"Light.a"}),(0,Ir.jsx)("option",{value:Hl,children:"Dark.a"})]})]})]}),(0,Ir.jsxs)(Ul,{isDarkMode:K,children:[(0,Ir.jsx)(Ml,{options:[{label:"AM",value:"am"},{label:"PM",value:"pm"}],size:B,disabled:W===Vl,isDarkMode:K}),(0,Ir.jsx)(Ml,{options:[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"}],size:B,disabled:W===Vl,isDarkMode:K})]})]})]})},Yl=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()))(e);return t.charAt(0).toUpperCase()+t.slice(1)},Xl=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()},ql=e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0};var Ql={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Jl=(0,t.forwardRef)((e,n)=>{let{color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:s,iconNode:c,...u}=e;return(0,t.createElement)("svg",{ref:n,...Ql,width:i,height:i,stroke:r,strokeWidth:a?24*Number(o)/Number(i):o,className:Xl("lucide",l),...!s&&!ql(u)&&{"aria-hidden":"true"},...u},[...c.map(e=>{let[n,r]=e;return(0,t.createElement)(n,r)}),...Array.isArray(s)?s:[s]])}),Zl=((e,n)=>{const r=(0,t.forwardRef)((r,i)=>{let{className:o,...a}=r;return(0,t.createElement)(Jl,{ref:i,iconNode:n,className:Xl(`lucide-${l=Yl(e),l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,o),...a});var l});return r.displayName=Yl(e),r})("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),es=kr.div`
  width: 100%;
`,ts=kr.div`
  border: 1px solid ${e=>"light"===e.theme?"#64748B":"#71717A"};
  border-radius: 8px;
  background: ${e=>"light"===e.theme?"#FFFFFF":"#18181B"};
  overflow: hidden;
  transition: border-color 200ms ease-in-out;

  ${e=>e.disabled&&"\n    opacity: 0.5;\n    pointer-events: none;\n  "}
`,ns=kr.div`
  background: ${e=>"light"===e.theme?"#FFFFFF":"#18181B"};
  transition: background-color 200ms ease-in-out;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>"light"===e.theme?"#64748B":"#71717A"};
  }
`,rs=kr.button`
  width: 100%;
  text-align: left;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  color: ${e=>"light"===e.theme?"#0F172A":"#FFFFFF"};
  transition: background-color 200ms ease-in-out;

  &:focus-visible {
    outline: 2px solid #3B82F6;
    outline-offset: -2px;
    border-radius: 8px;
  }

  &:hover {
    background-color: ${e=>"light"===e.theme?"#F1F5F9":"#27272A"};
  }
`,is=kr.div`
  flex: 1;
  min-width: 0;
`,os=kr.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: ${e=>"light"===e.theme?"#0F172A":"#D4D4D8"};
  text-align: left;
`,as=kr.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 8px;
  color: ${e=>"light"===e.theme?"#0F172A":"#D4D4D8"};
`,ls=kr(Zl)`
  flex-shrink: 0;
  margin-left: 16px;
  margin-top: 4px;
  width: 20px;
  height: 20px;
  color: ${e=>"light"===e.theme?"#0F172A":"#D4D4D8"};
  transform: ${e=>e.isExpanded?"rotate(180deg)":"rotate(0)"};
  transition: transform 200ms ease-in-out;
`,ss=kr.div`
  padding: ${e=>e.isExpanded?"16px":"0 16px"};
  height: ${e=>e.isExpanded?"auto":"0"};
  opacity: ${e=>e.isExpanded?"1":"0"};
  overflow: hidden;
  transition: all 200ms ease-in-out;
`,cs=kr.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: ${e=>"light"===e.theme?"#334155":"#D4D4D8"};
`,us=e=>{let{title:t,subtitle:n,content:r,isExpanded:i,onToggle:o,theme:a="light",disabled:l=!1,id:s}=e;const c=`accordion-header-${s}`,u=`accordion-panel-${s}`;return(0,Ir.jsxs)(ns,{theme:a,disabled:l,role:"presentation",children:[(0,Ir.jsxs)(rs,{onClick:o,"aria-expanded":i,"aria-controls":u,id:c,theme:a,disabled:l,"aria-disabled":l,children:[(0,Ir.jsx)(is,{children:(0,Ir.jsx)(os,{theme:a,children:t})}),(0,Ir.jsx)(ls,{theme:a,isExpanded:i,"aria-hidden":"true"})]}),(0,Ir.jsxs)(ss,{theme:a,isExpanded:i,role:"region","aria-labelledby":c,id:u,children:[n&&(0,Ir.jsx)(as,{theme:a,id:`${u}-subtitle`,children:n}),(0,Ir.jsx)(cs,{theme:a,children:r})]})]})},ds=e=>{let{items:n,theme:r="light",disabled:i=!1}=e;const o=t.useId(),[a,l]=(0,t.useState)(new Set);return(0,Ir.jsx)(es,{role:"presentation",children:(0,Ir.jsx)(ts,{theme:r,disabled:i,role:"list","aria-label":"Accordion",children:n.map(e=>(0,Ir.jsx)(us,{...e,id:`${o}-${e.id}`,theme:r,isExpanded:a.has(e.id),onToggle:()=>{return t=e.id,void(i||l(e=>{const n=new Set(e);return e.has(t)?n.delete(t):n.add(t),n}));var t},disabled:i},e.id))})})},ps=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,fs=kr.div`
  margin-bottom: 48px;
`,hs=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,ms=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,gs=kr.section`
  margin-bottom: 48px;
`,xs=(kr.h2`
  font-size: 1.125rem;
  margin-bottom: 24px;
  color: #0F172A;
`,kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),vs=kr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ys=kr.label`
  font-weight: 600;
  color: #0F172A;
`,bs=kr.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`,ws=kr.div`
  background: ${e=>e.isDarkMode?"#000000":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,ks="light",js="dark",Ss="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",As=[{id:"1",title:"Title",content:Ss},{id:"2",title:"Title",content:Ss,subtitle:"Subtitle"},{id:"3",title:"Title",content:Ss},{id:"4",title:"Title",content:Ss}],Es=()=>{const[e,n]=(0,t.useState)(ks),r=e===js;return(0,Ir.jsxs)(ps,{children:[(0,Ir.jsxs)(fs,{children:[(0,Ir.jsx)(hs,{children:"Accordion"}),(0,Ir.jsx)(ms,{children:"Accordions are interactive components that expand and collapse to reveal content, helping users manage information density and maintain context."})]}),(0,Ir.jsxs)(gs,{children:[(0,Ir.jsx)(xs,{children:(0,Ir.jsxs)(vs,{children:[(0,Ir.jsx)(ys,{children:"Theme"}),(0,Ir.jsxs)(bs,{value:e,onChange:e=>n(e.target.value),children:[(0,Ir.jsx)("option",{value:ks,children:"Light.a"}),(0,Ir.jsx)("option",{value:js,children:"Dark.a"})]})]})}),(0,Ir.jsx)(ws,{isDarkMode:r,children:(0,Ir.jsx)(ds,{items:As,theme:e})})]})]})};var Cs=n(5502);const Fs=n.p+"static/media/moto_ai.c5f68773b0ff40aa6a981017f522b827.svg";const Ds=n.p+"static/media/moto_ai_color.dedad4eb8931a964b63a18720feb0c25.svg";const zs=n.p+"static/media/robo_1.b02753fb44b056683a1c016b94d986ca.svg";const Ms=n.p+"static/media/robo_2.e39f3910b4d6fe81f64767d4fc2f53d9.svg",Is=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,$s=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Ls=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
  margin-bottom: 32px;
`,Ts=kr.section`
  margin-bottom: 48px;
`,Rs=kr.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: #0F172A;
`,_s=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Os=kr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`,Ps=kr(Di)`
  position: relative;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  height: auto;
  min-height: fit-content;
`,Ns=kr.div`
  display: grid;
  grid-template-columns: ${e=>e.smaller?"repeat(2, 96px)":"repeat(2, 108px)"};
  gap: 24px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
`,Bs=kr.img`
  width: ${e=>e.smaller?"96px":"108px"};
  height: ${e=>e.smaller?"96px":"108px"};
`,Us=kr.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  background-color: ${e=>"do"===e.type?"#f0fdf4":"#fef2f2"};
  padding: 16px 16px 12px;
  margin: -24px -24px 16px -24px;
  border-bottom: 4px solid ${e=>"do"===e.type?"#047857":"#B91C1C"};
`,Ws=kr.div`
  color: ${e=>"do"===e.type?"#047857":"#B91C1C"};
  display: flex;
  align-items: center;
`,Hs=kr.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>"do"===e.type?"#047857":"#B91C1C"};
  margin: 0;
`,Vs=kr.p`
  font-size: 14px;
  line-height: 1.5;
  color: #4b5563;
  margin: 0;
`,Gs=kr.div`
  padding-top: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
`,Ks=kr.h3`
  margin: 0 0 12px 0;
  color: #334155;
  font-family: ${Dr};
  font-size: 18px;
  font-weight: 600;
`,Ys=kr.p`
  margin: 0;
  color: #334155;
  line-height: 1.5;
  font-family: ${Dr};
  font-size: 14px;
  max-width: 680px;
`,Xs=kr.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  margin-right: 16px;
  
  img {
    width: 64px;
    height: 64px;
  }
`,qs=kr.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 16px;
`,Qs=kr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: #64748B;
  opacity: 0.8;
  transition: opacity 0.2s ease;
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  &:hover {
    opacity: 1;
    color: #475569;
  }
`,Js=()=>{const e="Cake for AI (C4AI)",t="Specialized components and patterns for AI-powered interfaces and experiences.",n="https://www.figma.com/community/file/1537497596724978160/cake-for-ai";return(0,Ir.jsxs)(Is,{children:[(0,Ir.jsx)($s,{children:"Cake AI"}),(0,Ir.jsx)(Ls,{children:"Our AI design system ensures a consistent, recognizable look across all products and platforms. It's designed to communicate intelligence, approachability, and trust while aligning with the broader brand language."}),(0,Ir.jsxs)(Ts,{children:[(0,Ir.jsx)(Rs,{children:"Logo usage"}),(0,Ir.jsx)(_s,{children:"Lenovo's AI identity will maintain consistency across all software applications. The Moto AI logo has been adapted as the standard iconography for AI features within these applications."}),(0,Ir.jsxs)(Os,{children:[(0,Ir.jsx)(Ps,{type:"do",children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsxs)(Us,{type:"do",children:[(0,Ir.jsx)(Ws,{type:"do",children:(0,Ir.jsx)(ho.A,{})}),(0,Ir.jsx)(Hs,{type:"do",children:"Do"})]}),(0,Ir.jsxs)(Ns,{children:[(0,Ir.jsx)(Bs,{src:Ds,alt:"Moto AI color icon"}),(0,Ir.jsx)(Bs,{src:Fs,alt:"Moto AI icon"})]}),(0,Ir.jsx)(Vs,{children:"Use the Moto AI logo as the primary visual identity for Lenovo AI software."})]})}),(0,Ir.jsx)(Ps,{type:"dont",children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsxs)(Us,{type:"dont",children:[(0,Ir.jsx)(Ws,{type:"dont",children:(0,Ir.jsx)(Cs.A,{})}),(0,Ir.jsx)(Hs,{type:"dont",children:"Don't"})]}),(0,Ir.jsxs)(Ns,{smaller:!0,children:[(0,Ir.jsx)(Bs,{smaller:!0,src:zs,alt:"Example of robot imagery to avoid - robot 1"}),(0,Ir.jsx)(Bs,{smaller:!0,src:Ms,alt:"Example of robot imagery to avoid - robot 2"})]}),(0,Ir.jsx)(Vs,{children:"Do not use robot and / or android images for Lenovo AI software."})]})})]})]}),(0,Ir.jsxs)(Ts,{children:[(0,Ir.jsx)(Rs,{children:"Resources"}),(0,Ir.jsx)(_s,{children:"Access design resources and components specifically designed for AI-powered interfaces and experiences."}),(0,Ir.jsx)(Gs,{children:(0,Ir.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},children:(0,Ir.jsx)(Di,{elevated:!0,hoverable:!0,children:(0,Ir.jsxs)(Di.Body,{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,Ir.jsxs)(qs,{children:[(0,Ir.jsx)(Xs,{children:(0,Ir.jsx)("img",{src:Aa,alt:"Figma"})}),(0,Ir.jsx)(Qs,{children:(0,Ir.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h12V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7z"})})})]}),(0,Ir.jsx)(Ks,{children:e}),(0,Ir.jsx)(Ys,{style:{marginBottom:"20px",flex:1},children:t})]})})})})]})]})},Zs=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,ec=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
  font-family: ${Dr};
`,tc=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
  margin-bottom: 32px;
  font-family: ${Dr};
`,nc=kr.section`
  margin-bottom: 48px;
`,rc=kr.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: #0F172A;
  font-family: ${Dr};
`,ic=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
  font-family: ${Dr};
`,oc=kr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`,ac=kr(Di)`
  position: relative;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  height: auto;
  min-height: fit-content;
`,lc=kr.div`
  display: grid;
  grid-template-columns: ${e=>e.smaller?"repeat(2, 96px)":"repeat(2, 108px)"};
  gap: 24px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
`,sc=kr.img`
  width: ${e=>e.smaller?"96px":"108px"};
  height: ${e=>e.smaller?"96px":"108px"};
`,cc=kr.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  background-color: ${e=>"do"===e.type?"#f0fdf4":"#fef2f2"};
  padding: 16px 16px 12px;
  margin: -24px -24px 16px -24px;
  border-bottom: 4px solid ${e=>"do"===e.type?"#047857":"#B91C1C"};
`,uc=kr.div`
  color: ${e=>"do"===e.type?"#047857":"#B91C1C"};
  display: flex;
  align-items: center;
`,dc=kr.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>"do"===e.type?"#047857":"#B91C1C"};
  margin: 0;
  font-family: ${Dr};
`,pc=kr.p`
  font-size: 14px;
  line-height: 1.5;
  color: #4b5563;
  margin: 0;
  font-family: ${Dr};
`,fc=kr.div`
  padding-top: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
`,hc=kr.h3`
  margin: 0 0 12px 0;
  color: #334155;
  font-family: ${Dr};
  font-size: 18px;
  font-weight: 600;
`,mc=kr.p`
  margin: 0;
  color: #334155;
  line-height: 1.5;
  font-family: ${Dr};
  font-size: 14px;
  max-width: 680px;
`,gc=kr.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  margin-right: 16px;
  
  img {
    width: 64px;
    height: 64px;
  }
`,xc=kr.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 16px;
`,vc=kr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: #64748B;
  opacity: 0.8;
  transition: opacity 0.2s ease;
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  &:hover {
    opacity: 1;
    color: #475569;
  }
`,yc=()=>{const e="Cake for AI (C4AI)",t="Specialized components and patterns for AI-powered interfaces and experiences.",n="https://www.figma.com/community/file/1537497596724978160/cake-for-ai";return(0,Ir.jsxs)(Zs,{children:[(0,Ir.jsx)(ec,{children:"Icon & Identity"}),(0,Ir.jsx)(tc,{children:"Lenovo's AI identity maintains consistency across all software applications. The Moto AI logo has been adapted as the standard iconography for AI features within these applications."}),(0,Ir.jsxs)(nc,{children:[(0,Ir.jsx)(rc,{children:"Logo Usage"}),(0,Ir.jsx)(ic,{children:"Use the Moto AI logo as the primary visual identity for Lenovo AI software to maintain brand consistency and recognition across all platforms."}),(0,Ir.jsxs)(oc,{children:[(0,Ir.jsx)(ac,{type:"do",children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsxs)(cc,{type:"do",children:[(0,Ir.jsx)(uc,{type:"do",children:(0,Ir.jsx)(ho.A,{})}),(0,Ir.jsx)(dc,{type:"do",children:"Do"})]}),(0,Ir.jsxs)(lc,{children:[(0,Ir.jsx)(sc,{src:Ds,alt:"Moto AI color icon"}),(0,Ir.jsx)(sc,{src:Fs,alt:"Moto AI icon"})]}),(0,Ir.jsx)(pc,{children:"Use the Moto AI logo as the primary visual identity for Lenovo AI software."})]})}),(0,Ir.jsx)(ac,{type:"dont",children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsxs)(cc,{type:"dont",children:[(0,Ir.jsx)(uc,{type:"dont",children:(0,Ir.jsx)(Cs.A,{})}),(0,Ir.jsx)(dc,{type:"dont",children:"Don't"})]}),(0,Ir.jsxs)(lc,{smaller:!0,children:[(0,Ir.jsx)(sc,{smaller:!0,src:zs,alt:"Example of robot imagery to avoid - robot 1"}),(0,Ir.jsx)(sc,{smaller:!0,src:Ms,alt:"Example of robot imagery to avoid - robot 2"})]}),(0,Ir.jsx)(pc,{children:"Do not use robot and / or android images for Lenovo AI software."})]})})]})]}),(0,Ir.jsxs)(nc,{children:[(0,Ir.jsx)(rc,{children:"Brand Guidelines"}),(0,Ir.jsx)(ic,{children:"Our AI identity communicates intelligence, approachability, and trust while aligning with the broader Lenovo brand language."}),(0,Ir.jsxs)(oc,{children:[(0,Ir.jsx)(ac,{children:(0,Ir.jsx)(Di.Body,{children:(0,Ir.jsxs)(pc,{children:[(0,Ir.jsx)("strong",{children:"Consistency:"})," Always use the approved Moto AI logo across all AI-powered features and applications."]})})}),(0,Ir.jsx)(ac,{children:(0,Ir.jsx)(Di.Body,{children:(0,Ir.jsxs)(pc,{children:[(0,Ir.jsx)("strong",{children:"Color Variations:"})," Use the full-color version on light backgrounds and the monochrome version when color is not available."]})})}),(0,Ir.jsx)(ac,{children:(0,Ir.jsx)(Di.Body,{children:(0,Ir.jsxs)(pc,{children:[(0,Ir.jsx)("strong",{children:"Clear Space:"})," Maintain adequate clear space around the logo to ensure visual clarity and impact."]})})})]})]}),(0,Ir.jsxs)(nc,{children:[(0,Ir.jsx)(rc,{children:"Resources"}),(0,Ir.jsx)(ic,{children:"Access design resources and components specifically designed for AI-powered interfaces and experiences."}),(0,Ir.jsx)(fc,{children:(0,Ir.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},children:(0,Ir.jsx)(Di,{elevated:!0,hoverable:!0,children:(0,Ir.jsxs)(Di.Body,{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,Ir.jsxs)(xc,{children:[(0,Ir.jsx)(gc,{children:(0,Ir.jsx)("img",{src:Aa,alt:"Figma"})}),(0,Ir.jsx)(vc,{children:(0,Ir.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h12V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7z"})})})]}),(0,Ir.jsx)(hc,{children:e}),(0,Ir.jsx)(mc,{style:{marginBottom:"20px",flex:1},children:t})]})})})})]})]})};var bc=n(2177);const wc={IMAGE:"image",INITIALS:"initials",ICON:"icon"},kc={XLARGE:"64",LARGE:"48",MEDIUM:"40",SMALL:"32"},jc=kr.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: ${e=>`${e.size}px`};
  height: ${e=>`${e.size}px`};
  border-radius: 50%;
  background-color: ${e=>{return t=e.variant,n=e.isDarkMode,t===wc.INITIALS||t===wc.ICON?n?"#CBD5E1":"#E2E8F0":"transparent";var t,n}};
  border: 2px solid ${e=>e.isDarkMode?"#71717A":"#64748B"};
  overflow: hidden;
  user-select: none;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .initials {
    font-family: ${Dr};
    font-weight: 600;
    color: ${e=>e.isDarkMode?"#000000":"#0F172A"};
    font-size: ${e=>{switch(e.size){case kc.XLARGE:return"24px";case kc.LARGE:return"20px";case kc.MEDIUM:return"16px";case kc.SMALL:return"14px";default:return"16px"}}};
    line-height: 1;
    text-transform: uppercase;
  }

  .icon {
    color: ${e=>e.isDarkMode?"#000000":"#0F172A"};
    width: ${e=>.5*parseInt(e.size)+"px"};
    height: ${e=>.5*parseInt(e.size)+"px"};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>e.isDarkMode?"#18181B":"#FFFFFF"},
                0 0 0 4px ${e=>e.isDarkMode?"#93C5FD":"#1D4ED8"};
  }
`,Sc=e=>{let{variant:n=wc.ICON,size:r=kc.MEDIUM,src:i,initials:o,alt:a,isDarkMode:l=!1,className:s,...c}=e;const[u,d]=t.useState(!1),p=()=>{d(!0)};return(0,Ir.jsx)(jc,{variant:u?wc.ICON:n,size:r,isDarkMode:l,className:s,role:"img","aria-label":a,...c,children:n===wc.IMAGE&&i&&!u?(0,Ir.jsx)("img",{src:i,alt:a,onError:p}):n===wc.INITIALS&&o?(0,Ir.jsx)("span",{className:"initials",children:o.slice(0,2)}):(0,Ir.jsx)(bc.A,{className:"icon"})})};const Ac=n.p+"static/media/avatar.e74bce257af805a2cf17dceb8fadcfc4.svg",Ec="light.a",Cc="dark.a",Fc=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Dc=kr.div`
  margin-bottom: 48px;
`,zc=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Mc=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Ic=kr.section`
  margin-bottom: 48px;
`,$c=kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,Lc=kr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Tc=kr.label`
  font-weight: 600;
  color: #0F172A;
`,Rc=kr.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`,_c=kr.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  align-items: center;
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Oc=()=>{const[e,n]=(0,t.useState)(kc.MEDIUM),[r,i]=(0,t.useState)(Ec),o=r===Cc,a=Ac;return(0,Ir.jsxs)(Fc,{children:[(0,Ir.jsxs)(Dc,{children:[(0,Ir.jsx)(zc,{children:"Avatar"}),(0,Ir.jsx)(Mc,{children:"Avatars are used to represent people or organizations. They can display images, initials, or a fallback icon."})]}),(0,Ir.jsxs)(Ic,{children:[(0,Ir.jsxs)($c,{children:[(0,Ir.jsxs)(Lc,{children:[(0,Ir.jsx)(Tc,{children:"Size"}),(0,Ir.jsxs)(Rc,{value:e,onChange:e=>n(e.target.value),children:[(0,Ir.jsx)("option",{value:kc.XLARGE,children:"Extra Large (64px)"}),(0,Ir.jsx)("option",{value:kc.LARGE,children:"Large (48px)"}),(0,Ir.jsx)("option",{value:kc.MEDIUM,children:"Medium (40px)"}),(0,Ir.jsx)("option",{value:kc.SMALL,children:"Small (32px)"})]})]}),(0,Ir.jsxs)(Lc,{children:[(0,Ir.jsx)(Tc,{children:"Theme"}),(0,Ir.jsxs)(Rc,{value:r,onChange:e=>i(e.target.value),children:[(0,Ir.jsx)("option",{value:Ec,children:"Light.a"}),(0,Ir.jsx)("option",{value:Cc,children:"Dark.a"})]})]})]}),(0,Ir.jsxs)(_c,{isDarkMode:o,children:[(0,Ir.jsx)(Sc,{variant:wc.IMAGE,size:e,src:a,alt:"Image Avatar",isDarkMode:o}),(0,Ir.jsx)(Sc,{variant:wc.INITIALS,size:e,initials:"JD",alt:"Initials Avatar",isDarkMode:o}),(0,Ir.jsx)(Sc,{variant:wc.ICON,size:e,alt:"Icon Avatar",isDarkMode:o})]})]})]})},Pc={BLUE:"blue",RED:"red"},Nc={SMALL:"small",MEDIUM:"medium",LARGE:"large"},Bc=e=>{switch(e){case Nc.SMALL:return{minWidth:"16px",height:"16px",fontSize:"10px",padding:"0 4px"};case Nc.LARGE:return{minWidth:"24px",height:"24px",fontSize:"14px",padding:"0 8px"};default:return{minWidth:"20px",height:"20px",fontSize:"12px",padding:"0 6px"}}},Uc=kr.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  font-family: ${Dr};
  font-weight: 600;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  border-radius: ${e=>{var t;const n=(null===(t=e.children)||void 0===t?void 0:t.toString())||"";return/^\d{1}$/.test(n)?"50%":"12px"}};
  
  /* Size styles */
  min-width: ${e=>Bc(e.size).minWidth};
  height: ${e=>Bc(e.size).height};
  font-size: ${e=>Bc(e.size).fontSize};
  padding: ${e=>{var t;const n=(null===(t=e.children)||void 0===t?void 0:t.toString())||"",r=/^\d{1}$/.test(n),i=Bc(e.size).padding;return r?"0":i}};
  
  /* Color styles */
  background-color: ${e=>((e,t)=>{if(t)switch(e){case Pc.BLUE:return"#60A5FA";case Pc.RED:return"#FB7185";default:return"#60A5FA"}switch(e){case Pc.BLUE:return"#1D4ED8";case Pc.RED:return"#B91C1C";default:return"#1D4ED8"}})(e.color,e.isDarkMode)};
  color: ${e=>(e.color,e.isDarkMode?"#18181B":"#FFFFFF")};
  
  /* Transitions */
  transition: all 0.2s ease-in-out;
  
  /* Focus styles for accessibility */
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>e.isDarkMode?"#93C5FD":"#1D4ED8"};
  }
`,Wc=e=>{let{color:t=Pc.BLUE,size:n=Nc.MEDIUM,isDarkMode:r=!1,children:i="1",className:o,...a}=e;const l=(null===i||void 0===i?void 0:i.toString())||"",s=/^\d+$/.test(l)&&l.length>0?l:"1";return(0,Ir.jsx)(Uc,{color:t,size:n,isDarkMode:r,className:o,role:"status","aria-label":`Badge: ${s}`,...a,children:s})},Hc=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Vc=kr.div`
  margin-bottom: 48px;
`,Gc=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Kc=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Yc=kr.section`
  margin-bottom: 48px;
`,Xc=(kr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),qc=kr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Qc=kr.label`
  font-weight: 600;
  color: #0F172A;
`,Jc=kr.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`,Zc=kr.input`
  padding: 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`,eu=kr.div`
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,tu="light.a",nu="dark.a",ru=()=>{const[e,n]=(0,t.useState)("1"),[r,i]=(0,t.useState)(tu),o=r===nu;return(0,Ir.jsxs)(Hc,{children:[(0,Ir.jsxs)(Vc,{children:[(0,Ir.jsx)(Gc,{children:"Badge"}),(0,Ir.jsx)(Kc,{children:"The Badge component is a compact UI element used to display small amounts of information, such as notification counts, status indicators, or numerical labels. It automatically adapts its shape from circular (for single digits) to pill-shaped (for multi-digit numbers) to provide optimal visual presentation."})]}),(0,Ir.jsxs)(Yc,{children:[(0,Ir.jsxs)(Xc,{children:[(0,Ir.jsxs)(qc,{children:[(0,Ir.jsx)(Qc,{children:"Value"}),(0,Ir.jsx)(Zc,{type:"text",value:e,onChange:e=>{const t=e.target.value;(""===t||/^\d+$/.test(t))&&n(t)},placeholder:"Enter numbers only"})]}),(0,Ir.jsxs)(qc,{children:[(0,Ir.jsx)(Qc,{children:"Theme"}),(0,Ir.jsxs)(Jc,{value:r,onChange:e=>i(e.target.value),children:[(0,Ir.jsx)("option",{value:tu,children:"Light.a"}),(0,Ir.jsx)("option",{value:nu,children:"Dark.a"})]})]})]}),(0,Ir.jsxs)(eu,{isDarkMode:o,children:[(0,Ir.jsx)(Wc,{color:Pc.BLUE,size:Nc.MEDIUM,isDarkMode:o,children:e}),(0,Ir.jsx)(Wc,{color:Pc.RED,size:Nc.MEDIUM,isDarkMode:o,children:e})]})]})]})},iu={CHEVRON:"chevron",SLASH:"slash",ARROW:"arrow"},ou={SMALL:"small",MEDIUM:"medium",LARGE:"large"},au=e=>{switch(e){case ou.SMALL:return{fontSize:"12px",lineHeight:"16px",iconSize:"14px",padding:"4px 8px"};case ou.LARGE:return{fontSize:"16px",lineHeight:"24px",iconSize:"20px",padding:"8px 12px"};default:return{fontSize:"14px",lineHeight:"20px",iconSize:"16px",padding:"6px 10px"}}},lu=kr.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${Dr};
  font-size: ${e=>au(e.size).fontSize};
  line-height: ${e=>au(e.size).lineHeight};
  
  /* Accessibility */
  aria-label: "Breadcrumb navigation";
`,su=kr.ol`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 16px;
`,cu=kr.li`
  display: flex;
  align-items: center;
`,uu=kr.a`
  display: inline-flex;
  align-items: center;
  padding: ${e=>au(e.size).padding};
  color: ${e=>e.isDarkMode?"#D4D4D8":"#171717"};
  text-decoration: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  
  &:hover {
    color: ${e=>e.isDarkMode?"#93C5FD":"#1D4ED8"};
  }
  
  &:active {
    color: ${e=>e.isDarkMode?"#60A5FA":"#1E3A8A"};
  }
  
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #1D4ED8;
  }
`,du=kr.span`
  display: inline-flex;
  align-items: center;
  padding: ${e=>au(e.size).padding};
  color: ${e=>e.isDarkMode?"#D4D4D8":"#171717"};
  font-size: 18px;
  font-weight: 600;
  cursor: default;
`,pu=kr.span`
  display: inline-flex;
  align-items: center;
  color: ${e=>e.isDarkMode?"#A1A1AA":"#171717"};
  margin: 0 8px;
  
  svg {
    width: 24px;
    height: 24px;
  }
`,fu=()=>(0,Ir.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,Ir.jsx)("polyline",{points:"9 18 15 12 9 6"})}),hu=()=>(0,Ir.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,Ir.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,Ir.jsx)("polyline",{points:"12 5 19 12 12 19"})]}),mu=()=>(0,Ir.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,Ir.jsx)("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),(0,Ir.jsx)("polyline",{points:"12 19 5 12 12 5"})]}),gu=kr.div`
  margin-bottom: 8px;
`,xu=e=>{let{size:t,isDarkMode:n,onClick:r,backButtonText:i,...o}=e;return(0,Ir.jsx)(po,{variant:no.TEXT,textVariant:ro.SECONDARY,iconPosition:ao.LEFT,label:i,size:t,isDarkMode:n,onClick:r,"aria-label":`${i} button`,customIcon:(0,Ir.jsx)(mu,{}),...o})},vu=e=>{switch(e){case iu.ARROW:return(0,Ir.jsx)(hu,{});case iu.SLASH:return"/";default:return(0,Ir.jsx)(fu,{})}},yu=e=>{let{items:t=[],showBackButton:n=!0,backButtonText:r="Back",separatorType:i=iu.CHEVRON,size:o=ou.MEDIUM,isDarkMode:a=!1,onBackClick:l,onItemClick:s,className:c,...u}=e;return(0,Ir.jsxs)(lu,{size:o,isDarkMode:a,className:c,"aria-label":"Breadcrumb navigation",...u,children:[n&&(0,Ir.jsx)(gu,{children:(0,Ir.jsx)(xu,{size:o,isDarkMode:a,onClick:e=>{e.preventDefault(),l&&l(e)},backButtonText:r})}),(0,Ir.jsx)(su,{children:t.map((e,n)=>{const r=n===t.length-1,l=!r&&!1!==e.onClick;return(0,Ir.jsxs)(cu,{children:[r?(0,Ir.jsx)(du,{size:o,isDarkMode:a,children:e.label}):(0,Ir.jsx)(uu,{size:o,isDarkMode:a,href:e.href||"#",onClick:l?e=>((e,t)=>{t.preventDefault(),s&&s(e,t)})(n,e):void 0,"aria-current":r?"page":void 0,children:e.label}),!r&&(0,Ir.jsx)(pu,{isDarkMode:a,size:o,children:vu(i)})]},n)})})]})},bu=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,wu=kr.div`
  margin-bottom: 48px;
`,ku=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,ju=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Su=kr.section`
  margin-bottom: 48px;
`,Au=(kr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),Eu=kr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Cu=kr.label`
  font-weight: 600;
  color: #0F172A;
`,Fu=kr.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`,Du=(kr.input`
  padding: 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`,kr.div`
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`),zu="light.a",Mu="dark.a",Iu=[{label:"Item",href:"/"},{label:"Item",href:"/item2"},{label:"Item",href:"/item3"},{label:"Item",href:"/item4"},{label:"Item",href:"/item5"}],$u=()=>{const[e,n]=(0,t.useState)(zu),[r,i]=(0,t.useState)(!0),[o,a]=(0,t.useState)(2),l=e===Mu,s=e=>Iu.slice(0,Math.max(1,Math.min(e,Iu.length)));return(0,Ir.jsxs)(bu,{children:[(0,Ir.jsxs)(wu,{children:[(0,Ir.jsx)(ku,{children:"Breadcrumb"}),(0,Ir.jsx)(ju,{children:"The Breadcrumb Component is a navigation aid that provides users with a trail of links representing their current location within a hierarchical structure. It allows users to easily trace their path back to previous pages or sections within an application or website."})]}),(0,Ir.jsxs)(Su,{children:[(0,Ir.jsxs)(Au,{children:[(0,Ir.jsxs)(Eu,{children:[(0,Ir.jsx)(Cu,{children:"Number of Items"}),(0,Ir.jsxs)(Fu,{value:o,onChange:e=>a(parseInt(e.target.value)),children:[(0,Ir.jsx)("option",{value:2,children:"2 items"}),(0,Ir.jsx)("option",{value:3,children:"3 items"}),(0,Ir.jsx)("option",{value:4,children:"4 items"}),(0,Ir.jsx)("option",{value:5,children:"5 items"})]})]}),(0,Ir.jsxs)(Eu,{children:[(0,Ir.jsx)(Cu,{children:"Show Back Button"}),(0,Ir.jsxs)(Fu,{value:r?"yes":"no",onChange:e=>i("yes"===e.target.value),children:[(0,Ir.jsx)("option",{value:"yes",children:"Yes"}),(0,Ir.jsx)("option",{value:"no",children:"No"})]})]}),(0,Ir.jsxs)(Eu,{children:[(0,Ir.jsx)(Cu,{children:"Theme"}),(0,Ir.jsxs)(Fu,{value:e,onChange:e=>n(e.target.value),children:[(0,Ir.jsx)("option",{value:zu,children:"Light.a"}),(0,Ir.jsx)("option",{value:Mu,children:"Dark.a"})]})]})]}),(0,Ir.jsx)(Du,{isDarkMode:l,children:(0,Ir.jsx)(yu,{items:s(o),showBackButton:r,backButtonText:"Back",separatorType:iu.CHEVRON,size:ou.MEDIUM,isDarkMode:l,onBackClick:e=>{console.log("Back button clicked")},onItemClick:(e,t)=>{console.log(`Breadcrumb item ${e} clicked:`,s(o)[e])}})})]})]})},Lu="unselected",Tu="selected",Ru={LIGHT:"light.a",DARK:"dark.a"},_u={SMALL:"small",MEDIUM:"medium",LARGE:"large"},Ou=(e,t,n,r,i,o)=>t===Ru.DARK?n?e===Tu?{border:"#9CA3AF",background:"#27272A",dot:"#9CA3AF",label:"#9CA3AF"}:{border:"#9CA3AF",background:"#27272A",dot:"transparent",label:"#9CA3AF"}:e===Tu?{border:"#93C5FD",background:"transparent",dot:"#93C5FD",label:"#D4D4D8"}:i?{border:"#D4D4D8",background:"transparent",dot:"transparent",label:"#D4D4D8"}:{border:"#71717A",background:"transparent",dot:"transparent",label:"#D4D4D8"}:n?e===Tu?{border:"#64748B",background:"#F1F5F9",dot:"#9CA3AF",label:"#9CA3AF"}:{border:"#64748B",background:"#F1F5F9",dot:"transparent",label:"#9CA3AF"}:e===Tu?i?{border:"#1E40AF",background:"#1E40AF",dot:"#1E40AF",label:"#0F172A"}:{border:"#1D4ED8",background:"#1D4ED8",dot:"#1D4ED8",label:"#0F172A"}:i?{border:"#0F172A",background:"transparent",dot:"transparent",label:"#0F172A"}:{border:"#64748B",background:"transparent",dot:"transparent",label:"#0F172A"},Pu=e=>{switch(e){case _u.SMALL:return{radioSize:"16px",dotSize:"8px",labelFontSize:"14px",focusRingSize:"24px"};case _u.LARGE:return{radioSize:"24px",dotSize:"12px",labelFontSize:"16px",focusRingSize:"32px"};default:return{radioSize:"14px",dotSize:"8px",labelFontSize:"14px",focusRingSize:"20px"}}},Nu=kr.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${e=>e.isDisabled?"not-allowed":"pointer"};
  user-select: none;
  position: relative;
  outline: none;
`,Bu=kr.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`,Uu=kr.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  position: relative;
  flex-shrink: 0;

  ${e=>e.isHovered&&e.theme===Ru.LIGHT&&e.state===Lu&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      right: -4px;\n      bottom: -4px;\n      background: #E2E8F0;\n      border-radius: 50%;\n      opacity: 0.8;\n      z-index: 0;\n      transition: all 0.3s ease-out;\n    }\n  "}

  ${e=>e.isHovered&&e.theme===Ru.LIGHT&&e.state===Tu&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      right: -4px;\n      bottom: -4px;\n      background: #DBEAFE;\n      border-radius: 50%;\n      opacity: 0.8;\n      z-index: 0;\n      transition: all 0.3s ease-out;\n    }\n  "}

  ${e=>e.isHovered&&e.theme===Ru.DARK&&e.state===Lu&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      right: -4px;\n      bottom: -4px;\n      background: #64748B;\n      border-radius: 50%;\n      opacity: 0.25;\n      z-index: 0;\n      transition: all 0.3s ease-out;\n    }\n  "}

  ${e=>e.isHovered&&e.theme===Ru.DARK&&e.state===Tu&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      right: -4px;\n      bottom: -4px;\n      background: #3B82F6;\n      border-radius: 50%;\n      opacity: 0.45;\n      z-index: 0;\n      transition: all 0.3s ease-out;\n    }\n  "}
`,Wu=kr.div`
  width: ${e=>Pu(e.size).radioSize};
  height: ${e=>Pu(e.size).radioSize};
  border: 2px solid ${e=>Ou(e.state,e.theme,e.isDisabled,e.isFocused,e.isHovered,e.isPressed).border};
  border-radius: 50%;
  background: ${e=>e.state===Tu?"transparent":Ou(e.state,e.theme,e.isDisabled,e.isFocused,e.isHovered,e.isPressed).background};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;

  ${e=>e.isFocused&&e.theme===Ru.LIGHT&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -8px;\n      left: -8px;\n      right: -8px;\n      bottom: -8px;\n      border: 3px solid #1D4ED8;\n      border-radius: 50%;\n    }\n  "}

  ${e=>e.isFocused&&e.theme===Ru.DARK&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -8px;\n      left: -8px;\n      right: -8px;\n      bottom: -8px;\n      border: 3px solid #93C5FD;\n      border-radius: 50%;\n    }\n  "}
`,Hu=kr.div`
  width: ${e=>Pu(e.size).dotSize};
  height: ${e=>Pu(e.size).dotSize};
  border-radius: 50%;
  background: ${e=>Ou(e.state,e.theme,e.isDisabled,e.isFocused,e.isHovered,e.isPressed).dot};
  transition: all 0.2s ease-in-out;
  opacity: ${e=>e.state===Tu?1:0};
  position: relative;
  z-index: 2;
`,Vu=kr.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${e=>Pu(e.size).radioSize-8}px;
  height: ${e=>Pu(e.size).radioSize-8}px;
  border-radius: 50%;
  background: ${e=>e.theme===Ru.LIGHT?"#FFFFFF":"transparent"};
  opacity: ${e=>e.state===Tu?1:0};
  transition: all 0.2s ease-in-out;
  z-index: 1;
`,Gu=kr.label`
  font-size: ${e=>Pu(e.size).labelFontSize};
  font-weight: 600;
  color: ${e=>Ou(e.state,e.theme,e.isDisabled,e.isFocused,e.isHovered,e.isPressed).label};
  cursor: ${e=>e.isDisabled?"not-allowed":"pointer"};
  margin: 0;
  margin-top: 2px;
  display: flex;
  align-items: center;
`,Ku=(0,t.forwardRef)((e,n)=>{let{checked:r=!1,disabled:i=!1,label:o="",name:a="",value:l="",size:s=_u.MEDIUM,theme:c=Ru.LIGHT,onChange:u,onFocus:d,onBlur:p,className:f,id:h,...m}=e;const[g,x]=(0,t.useState)(!1),[v,y]=(0,t.useState)(!1),[b,w]=(0,t.useState)(!1),k=r?Tu:Lu,j=h||`radio-${Math.random().toString(36).substr(2,9)}`,S=e=>{if(!i&&u){x(!1);const t={...e,target:{...e.target,checked:!r,value:l}};u(t)}};return(0,Ir.jsxs)(Nu,{isDisabled:i,onMouseEnter:()=>{i||y(!0)},onMouseLeave:()=>{y(!1),w(!1)},onMouseDown:()=>{i||w(!0)},onMouseUp:()=>{w(!1)},onClick:S,onKeyDown:e=>{if(!i&&(" "===e.key||"Enter"===e.key)){e.preventDefault();const t={...e,target:{...e.target,checked:!r,value:l}};u(t)}},tabIndex:i?-1:0,role:"radio","aria-checked":r,className:f,children:[(0,Ir.jsx)(Bu,{ref:n,type:"radio",id:j,name:a,value:l,checked:r,disabled:i,onChange:e=>{if(!i&&u){const t={...e,target:{...e.target,checked:!r,value:e.target.value}};u(t)}},onFocus:e=>{i||(x(!0),d&&d(e))},onBlur:e=>{x(!1),p&&p(e)},...m}),(0,Ir.jsx)(Uu,{state:k,theme:c,isDisabled:i,isFocused:g,isHovered:v,isPressed:b,size:s,children:(0,Ir.jsxs)(Wu,{state:k,theme:c,isDisabled:i,isFocused:g,isHovered:v,isPressed:b,size:s,children:[(0,Ir.jsx)(Vu,{state:k,theme:c,size:s}),(0,Ir.jsx)(Hu,{state:k,theme:c,isDisabled:i,isFocused:g,isHovered:v,isPressed:b,size:s})]})}),o&&(0,Ir.jsx)(Gu,{htmlFor:j,isDisabled:i,state:k,theme:c,isFocused:g,isHovered:v,isPressed:b,size:s,onClick:e=>{e.preventDefault(),S(e)},children:o})]})});Ku.displayName="Radio";const Yu=Ku,Xu=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,qu=kr.div`
  margin-bottom: 48px;
`,Qu=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Ju=kr.p`
  font-size: 16px;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Zu=kr.section`
  margin-bottom: 48px;
`,ed=(kr.h2`
  font-size: 24px;
  margin-bottom: 24px;
  color: #0F172A;
`,kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),td=kr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,nd=kr.label`
  font-weight: 600;
  color: #0F172A;
`,rd=kr.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`,id=(kr.input`
  padding: 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`,kr.input`
  width: 16px;
  height: 16px;
  margin: 0;
`,kr.div`
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`),od=(kr.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,kr.div`
  display: flex;
  gap: 32px;
  align-items: center;
`,"light.a"),ad="dark.a",ld=()=>{const[e,n]=(0,t.useState)(_u.MEDIUM),[r,i]=(0,t.useState)(od),[o,a]=(0,t.useState)("Label"),[l,s]=(0,t.useState)(!1),[c,u]=(0,t.useState)(!1),[d,p]=(0,t.useState)(!1),[f,h]=(0,t.useState)(""),[m,g]=(0,t.useState)(""),x=r===ad;return(0,Ir.jsxs)(Xu,{children:[(0,Ir.jsxs)(qu,{children:[(0,Ir.jsx)(Qu,{children:"Radio"}),(0,Ir.jsx)(Ju,{children:"The Radio Component is used for single-choice selections from multiple options. It provides a clean, accessible interface for mutually exclusive choices with support for various states, themes, and sizes."})]}),(0,Ir.jsxs)(Zu,{children:[(0,Ir.jsxs)(ed,{children:[(0,Ir.jsxs)(td,{children:[(0,Ir.jsx)(nd,{children:"State"}),(0,Ir.jsxs)(rd,{value:l?"disabled":"default",onChange:e=>s("disabled"===e.target.value),children:[(0,Ir.jsx)("option",{value:"default",children:"Default"}),(0,Ir.jsx)("option",{value:"disabled",children:"Disabled"})]})]}),(0,Ir.jsxs)(td,{children:[(0,Ir.jsx)(nd,{children:"Theme"}),(0,Ir.jsxs)(rd,{value:r,onChange:e=>i(e.target.value),children:[(0,Ir.jsx)("option",{value:od,children:"Light.a"}),(0,Ir.jsx)("option",{value:ad,children:"Dark.a"})]})]})]}),(0,Ir.jsx)(id,{isDarkMode:x,children:(0,Ir.jsx)("div",{children:(0,Ir.jsx)(Yu,{size:e,theme:r,label:o,disabled:l,checked:"option1"===f,onChange:e=>h(e.target.checked?"option1":""),value:"option1",name:"single-radio"})})})]})]})},sd=kr.div`
  /* Override the Alert component's styling */
  & > div {
    background: ${e=>((e,t)=>{const n=t===bo.DARK,r={[yo.SUCCESS]:{light:{background:"#F8FAFC",border:"#047857",icon:"#047857",text:"#0F172A",metadata:"#334155"},dark:{background:"#1F2937",border:"#34D399",icon:"#34D399",text:"#D4D4D8",metadata:"#A1A1AA"}},[yo.WARNING]:{light:{background:"#F8FAFC",border:"#C2410C",icon:"#C2410C",text:"#0F172A",metadata:"#334155"},dark:{background:"#1F2937",border:"#FDBA74",icon:"#FDBA74",text:"#D4D4D8",metadata:"#A1A1AA"}},[yo.ERROR]:{light:{background:"#F8FAFC",border:"#B91C1C",icon:"#B91C1C",text:"#0F172A",metadata:"#334155"},dark:{background:"#1F2937",border:"#FCA5A5",icon:"#FCA5A5",text:"#D4D4D8",metadata:"#A1A1AA"}},[yo.INFO]:{light:{background:"#F8FAFC",border:"#1D4ED8",icon:"#1D4ED8",text:"#0F172A",metadata:"#334155"},dark:{background:"#1F2937",border:"#60A5FA",icon:"#60A5FA",text:"#D4D4D8",metadata:"#A1A1AA"}}};return n?r[e].dark:r[e].light})(e.severity,e.theme).background} !important;
    box-shadow: none !important;
    max-width: 100% !important;
    min-width: auto !important;
    position: relative !important;
  }
`,cd=e=>(0,Ir.jsx)(sd,{severity:e.severity,theme:e.theme,children:(0,Ir.jsx)($o,{...e,type:xo.INLINE})}),ud=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,dd=kr.div`
  margin-bottom: 48px;
`,pd=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,fd=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,hd=kr.section`
  margin-bottom: 48px;
`,md=kr.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: #0F172A;
`,gd=kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,xd=kr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,vd=kr.label`
  font-weight: 600;
  color: #0F172A;
`,yd=kr.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 0.875rem;
  background-color: #FFFFFF;
  color: #0F172A;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`,bd=(kr.input`
  padding: 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 0.875rem;
  background-color: #FFFFFF;
  color: #0F172A;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`,kr.input`
  width: 16px;
  height: 16px;
  accent-color: #3B82F6;
`,kr.div`
  background: ${e=>e.theme===bo.DARK?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`),wd=()=>{const[e,n]=(0,t.useState)(vo.SIMPLE),[r,i]=(0,t.useState)(yo.INFO),[o,a]=(0,t.useState)(bo.LIGHT),[l,s]=(0,t.useState)(wo.BOTTOM_CENTER),[c,u]=(0,t.useState)("Alert Title"),[d,p]=(0,t.useState)("This is an alert message that provides important information to the user."),[f,h]=(0,t.useState)(!0),[m,g]=(0,t.useState)(!0),[x,v]=(0,t.useState)(3e3),[y,b]=(0,t.useState)(!0),[w,k]=(0,t.useState)(!1),[j,S]=(0,t.useState)(wo.BOTTOM_CENTER),[A,E]=(0,t.useState)(0),[C,F]=(0,t.useState)(vo.SIMPLE),[D,z]=(0,t.useState)(yo.INFO),[M,I]=(0,t.useState)(bo.LIGHT),[$,L]=(0,t.useState)("Inline Alert Title"),[T,R]=(0,t.useState)("This is an inline alert message that appears within the page content."),[_,O]=(0,t.useState)(!0),[P,N]=(0,t.useState)(!0),B=()=>{console.log("Alert dismissed")},U=e=>{console.log("Action clicked:",e)},W=e===vo.SIMPLE?[{label:"Secondary",variant:"secondary"},{label:"Primary",variant:"primary"}]:y?[{label:"Tertiary",variant:"tertiary"},{label:"Secondary",variant:"secondary"},{label:"Primary",variant:"primary"}]:[],H=C===vo.SIMPLE?[{label:"Secondary",variant:"secondary"},{label:"Primary",variant:"primary"}]:P?[{label:"Tertiary",variant:"tertiary"},{label:"Secondary",variant:"secondary"},{label:"Primary",variant:"primary"}]:[];return(0,Ir.jsxs)(ud,{children:[(0,Ir.jsxs)(dd,{children:[(0,Ir.jsx)(pd,{children:"Alert"}),(0,Ir.jsx)(fd,{children:"The Alert Component is a versatile UI element designed to deliver important messages, notifications, warnings, or feedback to users in an efficient and visually appealing manner. It serves as a crucial part of our design system, ensuring consistent and effective communication across all digital platforms."})]}),(0,Ir.jsxs)(hd,{children:[(0,Ir.jsx)(md,{children:"Toast Alert"}),(0,Ir.jsx)(fd,{style:{marginBottom:"32px"},children:"The Toast Alert Component is a lightweight and non-intrusive UI element designed to display transient messages or notifications to users. It appears briefly and automatically fades away, providing timely feedback without disrupting the user's workflow."}),(0,Ir.jsxs)(gd,{children:[(0,Ir.jsxs)(xd,{children:[(0,Ir.jsx)(vd,{children:"Variant"}),(0,Ir.jsxs)(yd,{value:e,onChange:e=>n(e.target.value),children:[(0,Ir.jsx)("option",{value:vo.SIMPLE,children:"Simple"}),(0,Ir.jsx)("option",{value:vo.ADVANCED,children:"Advanced"})]})]}),(0,Ir.jsxs)(xd,{children:[(0,Ir.jsx)(vd,{children:"Severity"}),(0,Ir.jsxs)(yd,{value:r,onChange:e=>i(e.target.value),children:[(0,Ir.jsx)("option",{value:yo.INFO,children:"Info"}),(0,Ir.jsx)("option",{value:yo.SUCCESS,children:"Success"}),(0,Ir.jsx)("option",{value:yo.WARNING,children:"Warning"}),(0,Ir.jsx)("option",{value:yo.ERROR,children:"Error"})]})]}),e===vo.ADVANCED&&(0,Ir.jsxs)(xd,{children:[(0,Ir.jsx)(vd,{children:"Show Actions"}),(0,Ir.jsxs)(yd,{value:y?"yes":"no",onChange:e=>b("yes"===e.target.value),children:[(0,Ir.jsx)("option",{value:"no",children:"No"}),(0,Ir.jsx)("option",{value:"yes",children:"Yes"})]})]}),(0,Ir.jsxs)(xd,{children:[(0,Ir.jsx)(vd,{children:"Dismissible"}),(0,Ir.jsxs)(yd,{value:f?"yes":"no",onChange:e=>h("yes"===e.target.value),children:[(0,Ir.jsx)("option",{value:"no",children:"No"}),(0,Ir.jsx)("option",{value:"yes",children:"Yes"})]})]}),(0,Ir.jsxs)(xd,{children:[(0,Ir.jsx)(vd,{children:"Theme"}),(0,Ir.jsxs)(yd,{value:o,onChange:e=>a(e.target.value),children:[(0,Ir.jsx)("option",{value:bo.LIGHT,children:"Light.a"}),(0,Ir.jsx)("option",{value:bo.DARK,children:"Dark.a"})]})]})]}),(0,Ir.jsxs)("div",{style:{marginBottom:"24px",display:"flex",gap:"12px"},children:[(0,Ir.jsx)(po,{variant:no.SECONDARY,size:oo.MEDIUM,onClick:()=>{k(!1),setTimeout(()=>{S(wo.BOTTOM_RIGHT),E(e=>e+1),k(!0)},50)},disabled:w,label:"Show toast right"}),(0,Ir.jsx)(po,{variant:no.SECONDARY,size:oo.MEDIUM,onClick:()=>{k(!1),setTimeout(()=>{S(wo.BOTTOM_CENTER),E(e=>e+1),k(!0)},50)},disabled:w,label:"Show toast centered"})]}),(0,Ir.jsx)(bd,{theme:o,children:(0,Ir.jsx)($o,{type:xo.INLINE,variant:e,severity:r,theme:o,title:c,message:d,dismissible:f,keepVisible:!0,onDismiss:B,onAction:U,actions:W,timestamp:e===vo.ADVANCED?void 0:null})}),w&&(0,Ir.jsx)($o,{type:xo.TOAST,variant:e,severity:r,theme:o,position:j,title:c,message:d,dismissible:f,autoDismiss:!0,autoDismissTime:3e3,onDismiss:()=>{k(!1)},onAction:U,actions:W,timestamp:e===vo.ADVANCED?void 0:null},A)]}),(0,Ir.jsxs)(hd,{children:[(0,Ir.jsx)(md,{children:"Inline Alert"}),(0,Ir.jsx)(fd,{style:{marginBottom:"32px"},children:"The Inline Alert Component is a lightweight UI element designed to provide contextual feedback or notifications within a block of content. It seamlessly integrates into your interface, allowing you to convey important information without disrupting the user's workflow."}),(0,Ir.jsxs)(gd,{children:[(0,Ir.jsxs)(xd,{children:[(0,Ir.jsx)(vd,{children:"Variant"}),(0,Ir.jsxs)(yd,{value:C,onChange:e=>F(e.target.value),children:[(0,Ir.jsx)("option",{value:vo.SIMPLE,children:"Simple"}),(0,Ir.jsx)("option",{value:vo.ADVANCED,children:"Advanced"})]})]}),(0,Ir.jsxs)(xd,{children:[(0,Ir.jsx)(vd,{children:"Severity"}),(0,Ir.jsxs)(yd,{value:D,onChange:e=>z(e.target.value),children:[(0,Ir.jsx)("option",{value:yo.INFO,children:"Info"}),(0,Ir.jsx)("option",{value:yo.SUCCESS,children:"Success"}),(0,Ir.jsx)("option",{value:yo.WARNING,children:"Warning"}),(0,Ir.jsx)("option",{value:yo.ERROR,children:"Error"})]})]}),C===vo.ADVANCED&&(0,Ir.jsxs)(xd,{children:[(0,Ir.jsx)(vd,{children:"Show Actions"}),(0,Ir.jsxs)(yd,{value:P?"yes":"no",onChange:e=>N("yes"===e.target.value),children:[(0,Ir.jsx)("option",{value:"no",children:"No"}),(0,Ir.jsx)("option",{value:"yes",children:"Yes"})]})]}),(0,Ir.jsxs)(xd,{children:[(0,Ir.jsx)(vd,{children:"Dismissible"}),(0,Ir.jsxs)(yd,{value:_?"yes":"no",onChange:e=>O("yes"===e.target.value),children:[(0,Ir.jsx)("option",{value:"no",children:"No"}),(0,Ir.jsx)("option",{value:"yes",children:"Yes"})]})]}),(0,Ir.jsxs)(xd,{children:[(0,Ir.jsx)(vd,{children:"Theme"}),(0,Ir.jsxs)(yd,{value:M,onChange:e=>I(e.target.value),children:[(0,Ir.jsx)("option",{value:bo.LIGHT,children:"Light.a"}),(0,Ir.jsx)("option",{value:bo.DARK,children:"Dark.a"})]})]})]}),(0,Ir.jsx)(bd,{theme:M,children:(0,Ir.jsx)(cd,{variant:C,severity:D,theme:M,title:$,message:T,dismissible:_,keepVisible:!0,onDismiss:B,onAction:U,actions:H,timestamp:null})})]}),(0,Ir.jsxs)(hd,{children:[(0,Ir.jsx)("h3",{style:{fontSize:"1.25rem",marginBottom:"24px",color:"#0F172A"},children:"Usage Guidelines"}),(0,Ir.jsx)(fd,{style:{marginBottom:"32px"},children:"Inline alerts are designed to be integrated seamlessly within your content. Here are some common usage patterns and examples."}),(0,Ir.jsxs)("div",{style:{display:"grid",gap:"24px",gridTemplateColumns:"repeat(auto-fit, minmax(400px, 1fr))"},children:[(0,Ir.jsx)("div",{children:(0,Ir.jsxs)("div",{style:{background:"#FFFFFF",border:"1px solid #E2E8F0",borderRadius:"8px",padding:"24px",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 16px 0",fontSize:"1.125rem",fontWeight:"600",color:"#0F172A"},children:"Example 1"}),(0,Ir.jsx)("p",{style:{margin:"0 0 24px 0",color:"#475569",lineHeight:"1.5"},children:"Use an informational Inline Alert to inform users that a setting is disabled because it is already configured in Windows Settings. Include a button for users to navigate directly to the relevant setting for customization."}),(0,Ir.jsx)("hr",{style:{border:"none",height:"1px",background:"#E2E8F0",margin:"0 0 24px 0"}}),(0,Ir.jsx)("h4",{style:{margin:"0 0 8px 0",fontSize:"1rem",fontWeight:"600",color:"#0F172A"},children:"Section title"}),(0,Ir.jsx)("p",{style:{margin:"0 0 16px 0",color:"#475569",lineHeight:"1.5",fontSize:"0.875rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,Ir.jsx)(cd,{variant:vo.ADVANCED,severity:yo.INFO,theme:bo.LIGHT,title:"System Theme",message:"This setting is controlled by Windows Settings. You can customize your system theme directly in Windows Settings.",dismissible:!1,keepVisible:!0,actions:[{label:"Open in Windows Settings",variant:"primary",icon:(0,Ir.jsx)(eo.A,{style:{fontSize:"16px"}})}],timestamp:null})]})}),(0,Ir.jsx)("div",{children:(0,Ir.jsxs)("div",{style:{background:"#FFFFFF",border:"1px solid #E2E8F0",borderRadius:"8px",padding:"24px",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 16px 0",fontSize:"1.125rem",fontWeight:"600",color:"#0F172A"},children:"Example 2"}),(0,Ir.jsx)("p",{style:{margin:"0 0 24px 0",color:"#475569",lineHeight:"1.5"},children:"Use a warning Inline Alert to draw attention to critical information about a feature or section."}),(0,Ir.jsx)("hr",{style:{border:"none",height:"1px",background:"#E2E8F0",margin:"0 0 24px 0"}}),(0,Ir.jsx)("h4",{style:{margin:"0 0 8px 0",fontSize:"1rem",fontWeight:"600",color:"#0F172A"},children:"Section title"}),(0,Ir.jsx)("p",{style:{margin:"0 0 16px 0",color:"#475569",lineHeight:"1.5",fontSize:"0.875rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,Ir.jsx)(cd,{variant:vo.ADVANCED,severity:yo.WARNING,theme:bo.LIGHT,title:"Beta Feature",message:"This feature is currently in beta and may have limited functionality. Please report any issues you encounter.",dismissible:!1,keepVisible:!0,actions:[],timestamp:null})]})})]})]})]})};var kd=n(4914),jd=n(1707),Sd=n(5896),Ad=n(1337),Ed=n(5473),Cd=n(9611),Fd=n(2577);const Dd=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,zd=kr.div`
  margin-bottom: 48px;
`,Md=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Id=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,$d=kr.section`
  margin-bottom: 48px;
`,Ld=kr.h2`
  font-size: 1.125rem; /* 18px */
  color: #0F172A;
`,Td=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  margin-bottom: 32px;
  max-width: 800px;
`,Rd=kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,_d=kr.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Od=kr.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
`,Pd=kr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${e=>e.color||"#475569"};
  font-size: 24px;
`,Nd=kr.div`
  flex: 1;
`,Bd=kr.h4`
  font-size: 14px;
  font-weight: 600;
  color: #0F172A;
  margin: 0 0 4px 0;
`,Ud=kr.p`
  font-size: 12px;
  color: #64748B;
  margin: 0;
  line-height: 1.4;
`,Wd=kr.pre`
  background: #1E293B;
  color: #E2E8F0;
  padding: 16px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.5;
  overflow-x: auto;
  margin: 16px 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
`,Hd=(kr.code`
  background: #F1F5F9;
  color: #0F172A;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
`,kr.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
`),Vd=kr.h3`
  font-size: 16px;
  font-weight: 600;
  color: #0F172A;
  margin: 0 0 8px 0;
`,Gd=kr.p`
  font-size: 14px;
  color: #475569;
  margin: 0 0 12px 0;
  line-height: 1.5;
`,Kd=(kr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,kr.li`
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.5;
  color: #475569;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #1D4ED8;
    font-weight: bold;
  }
`,()=>{const e=[{icon:(0,Ir.jsx)(fo.A,{}),name:"InfoIcon",description:"Used for informational messages and help text",color:"#1D4ED8"},{icon:(0,Ir.jsx)(ho.A,{}),name:"CheckCircleIcon",description:"Indicates success states and completed actions",color:"#047857"},{icon:(0,Ir.jsx)(mo.A,{}),name:"WarningIcon",description:"Shows warnings and cautionary information",color:"#C2410C"},{icon:(0,Ir.jsx)(go.A,{}),name:"ErrorIcon",description:"Displays error states and critical issues",color:"#B91C1C"}],t=[{icon:(0,Ir.jsx)(to.A,{}),name:"DownloadIcon",description:"File download and export actions",color:"#0F172A"},{icon:(0,Ir.jsx)(kd.A,{}),name:"ContentCopyIcon",description:"Copy to clipboard functionality",color:"#0F172A"},{icon:(0,Ir.jsx)(jd.A,{}),name:"ChevronRightIcon",description:"Forward navigation and next actions",color:"#0F172A"},{icon:(0,Ir.jsx)(Sd.A,{}),name:"ChevronLeftIcon",description:"Backward navigation and previous actions",color:"#0F172A"},{icon:(0,Ir.jsx)(Ad.A,{}),name:"ExpandMoreIcon",description:"Expand content or show more options",color:"#0F172A"},{icon:(0,Ir.jsx)(Ed.A,{}),name:"ExpandLessIcon",description:"Collapse content or show fewer options",color:"#0F172A"}],n=[{icon:(0,Ir.jsx)(Cd.A,{}),name:"MenuIcon",description:"Hamburger menu and navigation drawer",color:"#0F172A"},{icon:(0,Ir.jsx)(Fr.A,{}),name:"CloseIcon",description:"Close dialogs, modals, and dismiss actions",color:"#0F172A"},{icon:(0,Ir.jsx)(Cr.A,{}),name:"SearchIcon",description:"Search functionality and query input",color:"#0F172A"},{icon:(0,Ir.jsx)(Fd.A,{}),name:"SettingsIcon",description:"Configuration and preferences",color:"#0F172A"}];return(0,Ir.jsxs)(Dd,{children:[(0,Ir.jsxs)(zd,{children:[(0,Ir.jsx)(Md,{children:"Iconography"}),(0,Ir.jsx)(Id,{children:"Our design system adopts the Material Design icon library to ensure consistency and accessibility across all interfaces. Material Design icons provide a comprehensive set of scalable vector icons that enhance user experience and provide visual clarity. These icons are designed to be simple, modern, and accessible, making them perfect for creating intuitive user interfaces."})]}),(0,Ir.jsxs)($d,{children:[(0,Ir.jsx)(Ld,{children:"Semantic Status Icons"}),(0,Ir.jsx)(Td,{children:"Status icons communicate specific states and provide immediate visual feedback to users. These icons use semantic colors to reinforce their meaning and improve accessibility."}),(0,Ir.jsx)(Rd,{children:e.map((e,t)=>(0,Ir.jsx)(_d,{children:(0,Ir.jsxs)(Od,{children:[(0,Ir.jsx)(Pd,{color:e.color,children:e.icon}),(0,Ir.jsxs)(Nd,{children:[(0,Ir.jsx)(Bd,{children:e.name}),(0,Ir.jsx)(Ud,{children:e.description})]})]})},t))})]}),(0,Ir.jsxs)($d,{children:[(0,Ir.jsx)(Ld,{children:"Action Icons"}),(0,Ir.jsx)(Td,{children:"Action icons represent common user interactions and system operations. These icons help users understand available actions and improve interface efficiency."}),(0,Ir.jsx)(Rd,{children:t.map((e,t)=>(0,Ir.jsx)(_d,{children:(0,Ir.jsxs)(Od,{children:[(0,Ir.jsx)(Pd,{color:e.color,children:e.icon}),(0,Ir.jsxs)(Nd,{children:[(0,Ir.jsx)(Bd,{children:e.name}),(0,Ir.jsx)(Ud,{children:e.description})]})]})},t))})]}),(0,Ir.jsxs)($d,{children:[(0,Ir.jsx)(Ld,{children:"Navigation & UI Icons"}),(0,Ir.jsx)(Td,{children:"Navigation and UI icons help users navigate through the interface and access different sections. These icons provide consistent wayfinding and improve overall user experience."}),(0,Ir.jsx)(Rd,{children:n.map((e,t)=>(0,Ir.jsx)(_d,{children:(0,Ir.jsxs)(Od,{children:[(0,Ir.jsx)(Pd,{color:e.color,children:e.icon}),(0,Ir.jsxs)(Nd,{children:[(0,Ir.jsx)(Bd,{children:e.name}),(0,Ir.jsx)(Ud,{children:e.description})]})]})},t))})]}),(0,Ir.jsxs)($d,{children:[(0,Ir.jsx)(Ld,{children:"Resources"}),(0,Ir.jsx)(Td,{children:"Access official documentation and additional icon libraries to expand your icon toolkit."}),(0,Ir.jsxs)(Hd,{children:[(0,Ir.jsx)(Vd,{children:"Google Material Design Icons Library"}),(0,Ir.jsx)(Gd,{children:"Official Material Design icon library with comprehensive icon sets, search functionality, and download options."}),(0,Ir.jsx)(po,{variant:"text",textVariant:"primary",size:"small",label:"Visit Material Design Icons",iconPosition:ao.LEFT,customIcon:(0,Ir.jsx)(eo.A,{}),onClick:()=>window.open("https://fonts.google.com/icons","_blank","noopener,noreferrer")})]}),(0,Ir.jsxs)(Hd,{children:[(0,Ir.jsx)(Vd,{children:"MUI Icons Installation & Usage"}),(0,Ir.jsx)(Gd,{children:"Complete documentation for installing and using Material-UI icons in React applications."}),(0,Ir.jsx)(po,{variant:"text",textVariant:"primary",size:"small",label:"MUI Icons Documentation",iconPosition:ao.LEFT,customIcon:(0,Ir.jsx)(eo.A,{}),onClick:()=>window.open("https://mui.com/material-ui/material-icons/","_blank","noopener,noreferrer")}),(0,Ir.jsx)(Wd,{style:{marginTop:"12px"},children:"npm install @mui/icons-material"})]})]})]})}),Yd=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Xd=kr.div`
  margin-bottom: 48px;
`,qd=kr.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #0F172A;
`,Qd=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Jd=kr.div`
  margin-bottom: 3rem;
`,Zd=kr.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #0F172A;
  font-weight: 600;
`,ep=kr.div`
  margin-bottom: 2rem;
`,tp=kr.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #1E293B;
  font-weight: 600;
`,np=kr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #475569;
  margin-bottom: 1rem;
  max-width: 680px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,rp=(kr.a`
  color: #3B82F6;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`,kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`),ip=kr.h3`
  margin: 0 0 0.75rem 0;
  color: #334155;
  font-family: ${Dr};
  font-size: 1.125rem;
  font-weight: 600;
`,op=kr.p`
  margin: 0;
  color: #334155;
  line-height: 1.5;
  font-family: ${Dr};
  font-size: 1rem;
`,ap=kr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`,lp=kr(Di)`
  position: relative;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  height: auto;
  min-height: fit-content;
`,sp=kr.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  background-color: ${e=>"do"===e.type?"#f0fdf4":"#fef2f2"};
  padding: 16px 16px 12px;
  margin: -24px -24px 16px -24px;
  border-bottom: 4px solid ${e=>"do"===e.type?"#047857":"#B91C1C"};
`,cp=kr.div`
  color: ${e=>"do"===e.type?"#047857":"#B91C1C"};
  display: flex;
  align-items: center;
`,up=kr.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>"do"===e.type?"#047857":"#B91C1C"};
  margin: 0;
`,dp=kr.div`
  margin-bottom: 0;
  font-family: ${Dr};
  font-size: 1rem;
  color: #334155;
  font-weight: 500;
`,pp=kr.div`
  margin-bottom: 0;
  font-family: ${Dr};
  font-size: 1rem;
  color: #334155;
  font-weight: 500;
  width: 200px;
  line-height: 1.4;
`,fp=kr.div`
  margin-bottom: 0;
  font-family: ${Dr};
  font-size: 1rem;
  color: #334155;
  font-weight: 500;
  width: 120px;
  line-height: 1.2;
`,hp=(kr.p`
  font-size: 14px;
  line-height: 1.5;
  color: #4b5563;
  margin: 0;
`,kr.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
`),mp=kr.h3`
  font-size: 16px;
  font-weight: 600;
  color: #0F172A;
  margin: 0 0 8px 0;
`,gp=kr.p`
  font-size: 14px;
  color: #475569;
  margin: 0 0 12px 0;
  line-height: 1.5;
  max-width: 680px;
`,xp=kr.a`
  color: #3B82F6;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    text-decoration: underline;
  }
`,vp=[{path:"/",component:il,title:"Home",description:"Welcome to Cake Design System",category:"guides"},{path:"/components/alert",component:wd,title:"Alert",description:"Alert components provide feedback to users about important information, success states, warnings, or errors",category:"components"},{path:"/components/accordion",component:Es,title:"Accordion",description:"Expandable and collapsible content sections for organizing information",category:"components"},{path:"/components/avatar",component:Oc,title:"Avatar",description:"Component for displaying user profile images, initials, or icons",category:"components"},{path:"/components/badge",component:ru,title:"Badge",description:"Compact UI element for displaying notification counts, status indicators, or numerical labels",category:"components"},{path:"/components/breadcrumb",component:$u,title:"Breadcrumb",description:"Hierarchical navigation component for displaying page location and navigation context",category:"components"},{path:"/components/button",component:Kl,title:"Button",description:"Interactive button component with various styles and states",category:"components"},{path:"/components/canvas",component:Yr,title:"Canvas",description:"Drawing and illustration component",category:"components"},{path:"/components/checkbox",component:bi,title:"Checkbox",description:"Interactive checkbox component for form inputs, selections, and toggles with support for checked, unchecked, indeterminate, and disabled states",category:"components"},{path:"/components/chip",component:kl,title:"Chip",description:"Compact and versatile UI element for displaying discrete information",category:"components"},{path:"/components/radio",component:ld,title:"Radio",description:"Interactive radio component for single-choice selections from multiple options with support for various states and themes",category:"components"},{path:"/version-control",component:Ki,title:"Version Control",description:"Version history and changelog",category:"guides"},{path:"/foundations/colors",component:Uo,title:"Colors",description:"Color system and design tokens",category:"foundations"},{path:"/whats-new",component:oa,title:"What's New",description:"Latest updates and changes",category:"guides"},{path:"/resources",component:Pa,title:"Resources",description:"Figma libraries and design resources",category:"guides"},{path:"/get-started/figma-libraries",component:pa,title:"Figma Libraries",description:"Design resources and Figma components",category:"guides"},{path:"/get-started/about-cake",component:Sa,title:"About Cake",description:"Introduction to Cake Design System",category:"guides"},{path:"/subsystems/ai/cake-ai",component:Js,title:"Cake AI",description:"AI design system guidelines, icon identity, and resources for AI-powered interfaces",category:"subsystems",hasChildren:!0},{path:"/subsystems/ai/icon-identity",component:yc,title:"Icon & Identity",description:"AI icon and brand identity guidelines for Lenovo software applications",category:"subsystems",parentPath:"/subsystems/ai/cake-ai"},{path:"/foundations/iconography",component:Kd,title:"Iconography",description:"Material Design icon library usage, guidelines, and implementation patterns",category:"foundations"},{path:"/foundations/language-grammar",component:()=>(0,Ir.jsxs)(Yd,{children:[(0,Ir.jsxs)(Xd,{children:[(0,Ir.jsx)(qd,{children:"Language & Grammar"}),(0,Ir.jsx)(Qd,{children:"Guidelines for creating clear, accessible, and purposeful content that aligns with Lenovo's tone of voice and supports our mission of Smarter Technology for All."})]}),(0,Ir.jsxs)(Jd,{children:[(0,Ir.jsx)(Zd,{children:"Tone of Voice"}),(0,Ir.jsx)(np,{children:"We are tech optimists: We believe in the power of technology to enable positive human-centered outcomes and we know that a global, inclusive perspective is critical to real change."}),(0,Ir.jsxs)(ep,{children:[(0,Ir.jsx)(tp,{children:"Lenovo is"}),(0,Ir.jsxs)(rp,{children:[(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Purposeful"}),(0,Ir.jsx)(op,{children:"There is an intent to everything we do."})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Unexpected"}),(0,Ir.jsx)(op,{children:"We don't sound like everyone else."})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Brave"}),(0,Ir.jsx)(op,{children:"We are confident in our point of view."})]})})]})]})]}),(0,Ir.jsxs)(Jd,{children:[(0,Ir.jsx)(Zd,{children:"Content Guidelines"}),(0,Ir.jsxs)(ep,{children:[(0,Ir.jsx)(tp,{children:"Generally, the text itself is"}),(0,Ir.jsxs)(rp,{children:[(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Accessible"}),(0,Ir.jsxs)(op,{children:["Language below a 7th grade reading level.",(0,Ir.jsx)("br",{}),(0,Ir.jsx)("br",{}),"Every element has text for screen readers including URLs and button states.",(0,Ir.jsx)("br",{}),(0,Ir.jsx)("br",{}),"Available in the languages our users are most proficient in."]})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Purposeful"}),(0,Ir.jsxs)(op,{children:["What our user can or should do to meet the goals in their best interest is clear.",(0,Ir.jsx)("br",{}),(0,Ir.jsx)("br",{}),"Suggestions supports Lenovo's mission of Smarter Technology for All."]})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Concise"}),(0,Ir.jsxs)(op,{children:["Information presented is relevant at the moment of the experience.",(0,Ir.jsx)("br",{}),(0,Ir.jsx)("br",{}),"Text is <50 characters wide and <4 lines long.",(0,Ir.jsx)("br",{}),(0,Ir.jsx)("br",{}),"Buttons have three or fewer words."]})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Conversational"}),(0,Ir.jsxs)(op,{children:["The words, phrases, and ideas presented are familiar or well explained.",(0,Ir.jsx)("br",{}),(0,Ir.jsx)("br",{}),"Directions are presented in useful, logical, and complete steps."]})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Clear"}),(0,Ir.jsxs)(op,{children:["Actions have unambiguous results.",(0,Ir.jsx)("br",{}),(0,Ir.jsx)("br",{}),"Error messages help our users to move forward.",(0,Ir.jsx)("br",{}),(0,Ir.jsx)("br",{}),"The same term means the same thing every time it is used.",(0,Ir.jsx)("br",{}),(0,Ir.jsx)("br",{}),"Policy information is easy to find."]})]})})]})]})]}),(0,Ir.jsxs)(Jd,{children:[(0,Ir.jsx)(Zd,{children:"Capitalization"}),(0,Ir.jsx)(np,{children:"Sentence case should be used in all titles, headings, menu items, lists, labels and buttons."}),(0,Ir.jsxs)(ap,{children:[(0,Ir.jsx)(lp,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsxs)(sp,{type:"do",children:[(0,Ir.jsx)(cp,{type:"do",children:(0,Ir.jsx)(ho.A,{})}),(0,Ir.jsx)(up,{type:"do",children:"Do use sentence case for all UI text elements."})]}),(0,Ir.jsx)(dp,{children:"Check for updates"})]})}),(0,Ir.jsx)(lp,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsxs)(sp,{type:"dont",children:[(0,Ir.jsx)(cp,{type:"dont",children:(0,Ir.jsx)(Cs.A,{})}),(0,Ir.jsx)(up,{type:"dont",children:"Don't use title case or capitalize every word."})]}),(0,Ir.jsx)(dp,{children:"Check for Updates"})]})})]})]}),(0,Ir.jsxs)(Jd,{children:[(0,Ir.jsx)(Zd,{children:"Punctuation"}),(0,Ir.jsxs)(rp,{children:[(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Consistent"}),(0,Ir.jsx)(op,{children:"Punctuation is consistent."})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Headers"}),(0,Ir.jsx)(op,{children:"Short strings such as headers do not need punctuation."})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Full sentences"}),(0,Ir.jsx)(op,{children:"Full sentences always get full punctuation."})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Exclamation points"}),(0,Ir.jsx)(op,{children:"Friendly, delightful uses of exclamation points are encouraged!"})]})})]})]}),(0,Ir.jsxs)(Jd,{children:[(0,Ir.jsx)(Zd,{children:"Body text"}),(0,Ir.jsxs)(rp,{children:[(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Detailed but not technical"}),(0,Ir.jsx)(op,{children:"Body text should be detailed but not overly technical."})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Concise with opportunities"}),(0,Ir.jsx)(op,{children:"Be concise but offer opportunities to learn more."})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Familiar language"}),(0,Ir.jsx)(op,{children:"Use familiar language, especially when discussing technical or unfamiliar topics."})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Support with visuals"}),(0,Ir.jsx)(op,{children:"Support with visuals."})]})}),(0,Ir.jsx)(Di,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsx)(ip,{children:"Avoid orphans and widows"}),(0,Ir.jsx)(op,{children:"One word alone on a line (an orphan) and two words alone on a line (a widow) are to be avoided wherever possible."})]})})]}),(0,Ir.jsx)(np,{children:"Example:"}),(0,Ir.jsxs)(ap,{children:[(0,Ir.jsx)(lp,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsxs)(sp,{type:"do",children:[(0,Ir.jsx)(cp,{type:"do",children:(0,Ir.jsx)(ho.A,{})}),(0,Ir.jsx)(up,{type:"do",children:"Do"})]}),(0,Ir.jsx)(dp,{children:"This is a good example where there are several words on every line."})]})}),(0,Ir.jsx)(lp,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsxs)(sp,{type:"dont",children:[(0,Ir.jsx)(cp,{type:"dont",children:(0,Ir.jsx)(Cs.A,{})}),(0,Ir.jsx)(up,{type:"dont",children:"Don't"})]}),(0,Ir.jsx)(pp,{children:"This is an example where two words, called a widow, are alone on a line as a result of a line break."})]})}),(0,Ir.jsx)(lp,{children:(0,Ir.jsxs)(Di.Body,{children:[(0,Ir.jsxs)(sp,{type:"dont",children:[(0,Ir.jsx)(cp,{type:"dont",children:(0,Ir.jsx)(Cs.A,{})}),(0,Ir.jsx)(up,{type:"dont",children:"Don't"})]}),(0,Ir.jsx)(fp,{children:"This is an example where one word, called an orphan, is alone on a line as a result of a line break."})]})})]})]}),(0,Ir.jsxs)(Jd,{children:[(0,Ir.jsx)(Zd,{children:"Resources"}),(0,Ir.jsx)(np,{children:"Access official documentation and additional resources to expand your content toolkit."}),(0,Ir.jsxs)(hp,{children:[(0,Ir.jsx)(mp,{children:"Lenovo brand voice and tone guidelines"}),(0,Ir.jsx)(gp,{children:"Official Lenovo brand guidelines for tone of voice, messaging, and content strategy."}),(0,Ir.jsxs)(xp,{href:"https://brandworld.lenovo.com/tone-of-voice/",target:"_blank",rel:"noopener noreferrer",children:["Visit Lenovo brand guidelines",(0,Ir.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h12V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7z"})})]})]})]})]}),title:"Language & Grammar",description:"Guidelines for creating clear, accessible, and purposeful content that aligns with Lenovo's tone of voice",category:"foundations"}],yp=kr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
  z-index: 1000;
`,bp=kr.div`
  width: 600px;
  max-width: 90vw;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  font-family: ${Dr};
`,wp=kr.div`
  padding: 16px;
  border-bottom: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  gap: 12px;
`,kp=kr.input`
  flex: 1;
  border: none;
  font-size: 16px;
  color: #171717;
  background: transparent;
  padding: 0;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #94A3B8;
  }
`,jp=kr.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #64748B;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  &:hover {
    background: #F1F5F9;
    color: #475569;
  }
`,Sp=kr.div`
  max-height: 400px;
  overflow-y: auto;
`,Ap=kr.div`
  padding: 8px 0;
`,Ep=kr.div`
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Cp=kr.button`
  width: 100%;
  text-align: left;
  padding: 8px 16px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;

  &:hover {
    background: #F8FAFC;
  }
`,Fp=kr.span`
  font-size: 14px;
  color: #171717;
  font-weight: 500;
`,Dp=kr.span`
  font-size: 12px;
  color: #64748B;
`,zp=kr.div`
  padding: 32px 16px;
  text-align: center;
  color: #64748B;
  font-size: 14px;
`,Mp=e=>{let{isOpen:n,onClose:r,initialQuery:i=""}=e;const[o,a]=(0,t.useState)(i),[l,s]=(0,t.useState)({components:[],foundations:[],guides:[]}),c=J(),u=(0,t.useCallback)(e=>{const t=setTimeout(()=>{s((e=>{if(!e.trim())return{components:[],foundations:[],guides:[],subsystems:[]};const t=e.toLowerCase(),n={components:[],foundations:[],guides:[],subsystems:[]};return vp.forEach(e=>{const r=e.title.toLowerCase().includes(t),i=e.description.toLowerCase().includes(t),o=e.path.toLowerCase().includes(t);(r||i||o)&&n[e.category].push({title:e.title,path:e.path,description:e.description})}),n})(e))},300);return()=>clearTimeout(t)},[]);(0,t.useEffect)(()=>{const e=u(o);return()=>e()},[o,u]),(0,t.useEffect)(()=>{const e=e=>{"Escape"===e.key&&r()};return n&&(document.addEventListener("keydown",e),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",e),document.body.style.overflow=""}},[n,r]);return n?(0,Ir.jsx)(yp,{onClick:r,role:"dialog","aria-modal":"true","aria-labelledby":"search-modal-title",children:(0,Ir.jsxs)(bp,{onClick:e=>e.stopPropagation(),children:[(0,Ir.jsxs)(wp,{children:[(0,Ir.jsx)(Cr.A,{style:{color:"#64748B"},"aria-hidden":"true"}),(0,Ir.jsx)(kp,{id:"search-input",role:"searchbox","aria-label":"Search design system",autoFocus:!0,placeholder:"Search...",value:o,onChange:e=>a(e.target.value)}),(0,Ir.jsx)(jp,{onClick:r,"aria-label":"Close search",children:(0,Ir.jsx)(Fr.A,{"aria-hidden":"true"})})]}),(0,Ir.jsx)(Sp,{role:"region","aria-label":"Search results",children:o.trim()?Object.entries(l).map(e=>{let[t,n]=e;return n.length>0&&(0,Ir.jsxs)(Ap,{children:[(0,Ir.jsx)(Ep,{children:t}),n.map((e,t)=>(0,Ir.jsxs)(Cp,{onClick:()=>{return t=e.path,c(t),void r();var t},role:"button","aria-label":`Go to ${e.title}`,children:[(0,Ir.jsx)(Fp,{children:e.title}),(0,Ir.jsx)(Dp,{children:e.description})]},t))]},t)}):(0,Ir.jsx)(zp,{children:"Start typing to search..."})})]})}):null},Ip=kr.div`
  position: relative;
  width: 100%;
  padding: 0 24px 24px 24px;
  box-sizing: border-box;
  font-family: ${Dr};
`,$p=kr.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background: #F8FAFC;
  border: 1px solid #CBD5E1;
  border-radius: 6px;
  transition: all 0.2s ease;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background: #F1F5F9;
  }
`,Lp=kr.div`
  position: absolute;
  left: 8px;
  color: #64748B;
  display: flex;
  align-items: center;

  & > svg {
    font-size: 18px;
  }
`,Tp=kr.div`
  width: 100%;
  height: 36px;
  padding: 0 56px 0 32px;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #94A3B8;
  font-family: inherit;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`,Rp=kr.div`
  position: absolute;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  
  @media (max-width: 768px) {
    display: none;
  }
`,_p=kr.kbd`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  padding: 0 4px;
  min-width: 16px;
  height: 16px;
  font-size: 11px;
  color: #64748B;
  font-family: inherit;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`,Op=()=>{const[e,n]=(0,t.useState)(!1),r=e=>{"k"===e.key&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),n(!0))};t.useEffect(()=>(document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)),[]);return(0,Ir.jsxs)(Ir.Fragment,{children:[(0,Ir.jsx)(Ip,{children:(0,Ir.jsxs)($p,{onClick:()=>{n(!0)},children:[(0,Ir.jsx)(Lp,{children:(0,Ir.jsx)(Cr.A,{})}),(0,Ir.jsx)(Tp,{children:"Search..."}),(0,Ir.jsxs)(Rp,{children:[(0,Ir.jsx)(_p,{children:navigator.platform.includes("Mac")?"\u2318":"Ctrl"}),(0,Ir.jsx)(_p,{children:"K"})]})]})}),(0,Ir.jsx)(Mp,{isOpen:e,onClose:()=>{n(!1)}})]})},Pp=Sr`
  .iQvbDV {
    padding-right: 24px !important;
  }
`,Np=kr.nav`
  width: 250px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background: #ffffff;
  border-right: 1px solid #E2E8F0;
  font-size: 14px;
  font-family: ${Dr};
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  z-index: 1001;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    position: fixed;
    left: ${e=>e.isOpen?"0":"-250px"};
    z-index: 1001;
    transition: left 0.3s ease;
    box-shadow: ${e=>e.isOpen?"2px 0 8px rgba(0,0,0,0.1)":"none"};
  }
`,Bp=kr.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 24px;
  background: #fff;
`,Up=kr(De)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  width: 100%;
  color: inherit;
  
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`,Wp=kr.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
`,Hp=kr.div`
  display: flex;
  flex-direction: column;
`,Vp=kr.span`
  font-size: 16px;
  font-weight: 700;
  color: #171717;
  line-height: 1.2;
`,Gp=kr.span`
  font-size: 10px;
  color: #64748B;
  margin-top: 2px;
`,Kp=kr.div`
  width: 100%;
  margin: 0;
  padding: 0;
`,Yp=kr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Xp=kr.li`
  width: 100%;
`,qp=kr(De)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 40px;
  text-decoration: none;
  color: ${Xr.slate[900]};
  position: relative;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 40px;
  border-radius: 0;
  margin: 0;
  transition: background 0.2s, color 0.2s;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover:not(.active) {
    color: ${Xr.slate[900]};
    background-color: #F1F5F9;
  }
  
  &.active {
    background-color: #EFF6FF;
    color: #1D4ED8;
    font-weight: 600;
  }
  
  &.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #1D4ED8;
    border-radius: 0px;
  }
`,Qp=kr.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 40px;
  text-decoration: none;
  color: ${Xr.slate[900]};
  position: relative;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1;
  border-radius: 0;
  margin: 8px 0 4px 0;
  transition: background 0.2s, color 0.2s;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  
  &:hover {
    color: ${Xr.slate[900]};
    background-color: #F1F5F9;
  }
`,Jp=kr.span`
  transition: transform 0.3s ease;
  margin-right: 0;
  color: ${Xr.slate[900]};
  transform-origin: center;
  transform: rotate(0deg);
  
  ${e=>e.expanded&&"\n    transform: rotate(180deg);\n  "}
`,Zp=kr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: ${e=>e.expanded?"1000px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`,ef=kr.li`
  width: 100%;
`,tf=kr(De)`
  width: 100%;
  padding: 0 24px;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 16px;
  color: #171717;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  
  &:hover {
    background-color: #F1F5F9;
    color: #171717;
  }
  
  &.active {
    background-color: #EFF6FF;
    color: #1D4ED8;
    font-weight: 600;
  }
  
  &.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #1D4ED8;
    border-radius: 0px;
  }
`,nf=kr.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 0 48px;
  height: 40px;
  text-decoration: none;
  color: ${Xr.slate[900]};
  position: relative;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1;
  border-radius: 0;
  margin: 0;
  transition: background 0.2s, color 0.2s;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  
  &:hover {
    background-color: #F1F5F9;
    color: ${Xr.slate[900]};
  }
`,rf=kr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: ${e=>e.expanded?"1000px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`,of=kr.li`
  width: 100%;
`,af=kr(De)`
  width: 100%;
  padding: 0 24px 0 72px;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 16px;
  color: #171717;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  
  &:hover {
    background-color: #F1F5F9;
    color: #171717;
  }
  
  &.active {
    background-color: #EFF6FF;
    color: #1D4ED8;
    font-weight: 600;
  }
  
  &.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #1D4ED8;
    border-radius: 0px;
  }
`,lf=kr.button`
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;
  background: #ffffff;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    display: block;
  }
`,sf=kr.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${e=>e.isOpen?"block":"none"};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  }
`,cf=()=>{var e,n,r;const i=q(),o=function(e){X()||l(!1);let{pathname:n}=q();return t.useMemo(()=>F(e,D(n)),[n,e])}("/"),[a,s]=(0,t.useState)(!1),[c,u]=(0,t.useState)({getStarted:i.pathname.startsWith("/get-started"),foundations:i.pathname.startsWith("/foundations"),components:i.pathname.startsWith("/components"),subsystems:i.pathname.startsWith("/subsystems"),"cake-ai":i.pathname.startsWith("/subsystems/ai/")}),d=()=>{s(!1)},p=e=>{u(t=>({...t,[e]:!t[e]}))},f=(0,t.useMemo)(()=>{const e=vp.map(e=>({...e,children:[]}));return e.forEach(t=>{if(t.parentPath){const n=e.find(e=>e.path===t.parentPath);n&&n.children.push(t)}}),e.reduce((e,t)=>(e[t.category]||(e[t.category]=[]),t.parentPath||e[t.category].push(t),e),{})},[]);return(0,Ir.jsxs)(Ir.Fragment,{children:[(0,Ir.jsx)(Pp,{}),(0,Ir.jsx)(lf,{onClick:()=>{s(!a)},children:(0,Ir.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:(0,Ir.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,Ir.jsx)(sf,{isOpen:a,onClick:d}),(0,Ir.jsxs)(Np,{isOpen:a,children:[(0,Ir.jsx)(Bp,{children:(0,Ir.jsxs)(Up,{to:"/",onClick:d,children:[(0,Ir.jsx)(Wp,{src:Er,alt:"Cake Logo"}),(0,Ir.jsxs)(Hp,{children:[(0,Ir.jsx)(Vp,{children:"Cake"}),(0,Ir.jsx)(Gp,{children:"Version 1.4.0"})]})]})}),(0,Ir.jsx)(Op,{}),(0,Ir.jsx)(Kp,{children:(0,Ir.jsxs)(Yp,{children:[(0,Ir.jsx)(Xp,{children:(0,Ir.jsx)(qp,{to:"/",end:!0,onClick:d,className:o?"active":"",children:"Home"})}),(0,Ir.jsx)(Xp,{children:(0,Ir.jsx)(qp,{to:"/resources",onClick:d,children:"Resources"})}),(0,Ir.jsx)(Xp,{children:(0,Ir.jsx)(qp,{to:"/whats-new",onClick:d,children:"What's New"})}),(0,Ir.jsxs)(Xp,{children:[(0,Ir.jsxs)(Qp,{onClick:()=>p("foundations"),children:["Foundations",(0,Ir.jsx)(Jp,{expanded:c.foundations,children:(0,Ir.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z"})})})]}),(0,Ir.jsx)(Zp,{expanded:c.foundations,children:null===(e=f.foundations)||void 0===e?void 0:e.map(e=>(0,Ir.jsx)(ef,{children:(0,Ir.jsx)(tf,{to:e.path,onClick:d,children:e.title})},e.path))})]}),(0,Ir.jsxs)(Xp,{children:[(0,Ir.jsxs)(Qp,{onClick:()=>p("components"),children:["Components",(0,Ir.jsx)(Jp,{expanded:c.components,children:(0,Ir.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z"})})})]}),(0,Ir.jsx)(Zp,{expanded:c.components,children:null===(n=f.components)||void 0===n?void 0:n.map(e=>(0,Ir.jsx)(ef,{children:(0,Ir.jsx)(tf,{to:e.path,onClick:d,children:e.title})},e.path))})]}),(0,Ir.jsxs)(Xp,{children:[(0,Ir.jsxs)(Qp,{onClick:()=>p("subsystems"),children:["Subsystems",(0,Ir.jsx)(Jp,{expanded:c.subsystems,children:(0,Ir.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z"})})})]}),(0,Ir.jsx)(Zp,{expanded:c.subsystems,children:null===(r=f.subsystems)||void 0===r?void 0:r.map(e=>{var t;return(0,Ir.jsx)(ef,{children:e.hasChildren?(0,Ir.jsxs)(Ir.Fragment,{children:[(0,Ir.jsxs)(nf,{onClick:()=>p("cake-ai"),children:[e.title,(0,Ir.jsx)(Jp,{expanded:c["cake-ai"],children:(0,Ir.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z"})})})]}),(0,Ir.jsx)(rf,{expanded:c["cake-ai"],children:null===(t=e.children)||void 0===t?void 0:t.map(e=>(0,Ir.jsx)(of,{children:(0,Ir.jsx)(af,{to:e.path,onClick:d,children:e.title})},e.path))})]}):(0,Ir.jsx)(tf,{to:e.path,onClick:d,children:e.title})},e.path)})})]})]})})]})]})};const uf=n.p+"static/media/logo_vert.2144fac276ecca3cfa03aa23d92a3571.svg",df=kr.div`
  position: fixed;
  bottom: 136px;
  right: 0;
  width: 48px;
  background-color: #e1251b;
  cursor: pointer;
  z-index: 1000;
  
  @media (max-width: 768px) {
    width: 36px;
  }
  
  @media (max-width: 480px) {
    width: 32px;
  }
`,pf=kr.img`
  width: 100%;
  height: auto;
  display: block;
`,ff=()=>(0,Ir.jsx)(df,{onClick:()=>{window.open("https://lenovo.com","_blank","noopener,noreferrer")},role:"button",tabIndex:"0","aria-label":"Visit Lenovo.com",children:(0,Ir.jsx)(pf,{src:uf,alt:"Lenovo"})}),hf=()=>{const{pathname:e}=q();return(0,t.useEffect)(()=>{window.scrollTo(0,0)},[e]),null},mf=kr.div`
  padding-left: 250px;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`,gf=kr.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  padding: 15px;
  box-sizing: border-box;
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    padding: 20px;
  }
`,xf=kr.footer`
  text-align: center;
  font-size: 10px;
  color: #999;
  padding: 40px 0px;
`;const vf=function(){return(0,Ir.jsxs)(Ae,{basename:"",children:[(0,Ir.jsx)(zr,{}),(0,Ir.jsx)(cf,{}),(0,Ir.jsx)(ff,{}),(0,Ir.jsx)(hf,{}),(0,Ir.jsx)(mf,{children:(0,Ir.jsxs)(gf,{"data-content-container":!0,children:[(0,Ir.jsx)(me,{children:vp.map(e=>(0,Ir.jsx)(fe,{path:e.path,element:(0,Ir.jsx)(e.component,{})},e.path))}),(0,Ir.jsxs)(xf,{children:["\xa9 ",(new Date).getFullYear()," Cake Design System. All rights reserved."]})]})})]})};i.createRoot(document.getElementById("root")).render((0,Ir.jsx)(t.StrictMode,{children:(0,Ir.jsx)(vf,{})}))})()})();
//# sourceMappingURL=main.64564bee.js.map
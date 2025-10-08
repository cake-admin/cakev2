/*! For license information please see main.26049bbd.js.LICENSE.txt */
(()=>{var e={39:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(7749)},219:(e,t,n)=>{"use strict";var r=n(3763),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return r.isMemo(e)?a:l[e.$$typeof]||o}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[r.Memo]=a;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var o=f(n);o&&o!==h&&e(t,o,r)}var a=u(n);d&&(a=a.concat(d(n)));for(var l=s(t),m=s(n),g=0;g<a.length;++g){var x=a[g];if(!i[x]&&(!r||!r[x])&&(!m||!m[x])&&(!l||!l[x])){var v=p(n,x);try{c(t,x,v)}catch(y){}}}}return t}},457:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A});var r=n(7868)},528:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler");Symbol.for("react.provider");var l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.for("react.view_transition"),m=Symbol.for("react.client.reference");function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case a:case i:case u:case d:case h:return e;default:switch(e=e&&e.$$typeof){case s:case c:case f:case p:case l:return e;default:return t}}case r:return t}}}t.vM=c,t.lD=p},579:(e,t,n)=>{"use strict";e.exports=n(1153)},1132:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download")},1153:(e,t,n)=>{"use strict";var r=n(5043),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},1337:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},1528:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"}),"Error")},1602:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalStyles:()=>qe,StyledEngineProvider:()=>Xe,ThemeContext:()=>Me,css:()=>Ve,default:()=>Qe,internal_processStyles:()=>Je,internal_serializeStyles:()=>et,keyframes:()=>Ge});var r=n(8168),o=n(5043),i=n.t(o,2);var a=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),l=Math.abs,s=String.fromCharCode,c=Object.assign;function u(e){return e.trim()}function d(e,t,n){return e.replace(t,n)}function p(e,t){return e.indexOf(t)}function f(e,t){return 0|e.charCodeAt(t)}function h(e,t,n){return e.slice(t,n)}function m(e){return e.length}function g(e){return e.length}function x(e,t){return t.push(e),e}var v=1,y=1,b=0,w=0,k=0,S="";function j(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:v,column:y,length:a,return:""}}function E(e,t){return c(j("",null,null,"",null,null,0),e,{length:-e.length},t)}function A(){return k=w>0?f(S,--w):0,y--,10===k&&(y=1,v--),k}function C(){return k=w<b?f(S,w++):0,y++,10===k&&(y=1,v++),k}function F(){return f(S,w)}function D(){return w}function z(e,t){return h(S,e,t)}function M(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I(e){return v=y=1,b=m(S=e),w=0,[]}function $(e){return S="",e}function L(e){return u(z(w-1,_(91===e?e+2:40===e?e+1:e)))}function R(e){for(;(k=F())&&k<33;)C();return M(e)>2||M(k)>3?"":" "}function T(e,t){for(;--t&&C()&&!(k<48||k>102||k>57&&k<65||k>70&&k<97););return z(e,D()+(t<6&&32==F()&&32==C()))}function _(e){for(;C();)switch(k){case e:return w;case 34:case 39:34!==e&&39!==e&&_(k);break;case 40:41===e&&_(e);break;case 92:C()}return w}function O(e,t){for(;C()&&e+k!==57&&(e+k!==84||47!==F()););return"/*"+z(t,w-1)+"*"+s(47===e?e:C())}function P(e){for(;!M(F());)C();return z(e,w)}var N="-ms-",B="-moz-",U="-webkit-",W="comm",H="rule",V="decl",G="@keyframes";function K(e,t){for(var n="",r=g(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Y(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case V:return e.return=e.return||e.value;case W:return"";case G:return e.return=e.value+"{"+K(e.children,r)+"}";case H:e.value=e.props.join(",")}return m(n=K(e.children,r))?e.return=e.value+"{"+n+"}":""}function X(e){return $(q("",null,null,null,[""],e=I(e),0,[0],e))}function q(e,t,n,r,o,i,a,l,c){for(var u=0,h=0,g=a,v=0,y=0,b=0,w=1,k=1,S=1,j=0,E="",z=o,M=i,I=r,$=E;k;)switch(b=j,j=C()){case 40:if(108!=b&&58==f($,g-1)){-1!=p($+=d(L(j),"&","&\f"),"&\f")&&(S=-1);break}case 34:case 39:case 91:$+=L(j);break;case 9:case 10:case 13:case 32:$+=R(b);break;case 92:$+=T(D()-1,7);continue;case 47:switch(F()){case 42:case 47:x(J(O(C(),D()),t,n),c);break;default:$+="/"}break;case 123*w:l[u++]=m($)*S;case 125*w:case 59:case 0:switch(j){case 0:case 125:k=0;case 59+h:-1==S&&($=d($,/\f/g,"")),y>0&&m($)-g&&x(y>32?Z($+";",r,n,g-1):Z(d($," ","")+";",r,n,g-2),c);break;case 59:$+=";";default:if(x(I=Q($,t,n,u,h,o,l,E,z=[],M=[],g),i),123===j)if(0===h)q($,t,I,I,z,i,g,l,M);else switch(99===v&&110===f($,3)?100:v){case 100:case 108:case 109:case 115:q(e,I,I,r&&x(Q(e,I,I,0,0,o,l,E,o,z=[],g),M),o,M,g,l,r?z:M);break;default:q($,I,I,I,[""],M,0,l,M)}}u=h=y=0,w=S=1,E=$="",g=a;break;case 58:g=1+m($),y=b;default:if(w<1)if(123==j)--w;else if(125==j&&0==w++&&125==A())continue;switch($+=s(j),j*w){case 38:S=h>0?1:($+="\f",-1);break;case 44:l[u++]=(m($)-1)*S,S=1;break;case 64:45===F()&&($+=L(C())),v=F(),h=g=m(E=$+=P(D())),j++;break;case 45:45===b&&2==m($)&&(w=0)}}return i}function Q(e,t,n,r,o,i,a,s,c,p,f){for(var m=o-1,x=0===o?i:[""],v=g(x),y=0,b=0,w=0;y<r;++y)for(var k=0,S=h(e,m+1,m=l(b=a[y])),E=e;k<v;++k)(E=u(b>0?x[k]+" "+S:d(S,/&\f/g,x[k])))&&(c[w++]=E);return j(e,t,n,0===o?H:s,c,p,f)}function J(e,t,n){return j(e,t,n,W,s(k),h(e,2,-2),0)}function Z(e,t,n,r){return j(e,t,n,V,h(e,0,r),h(e,r+1,-1),r)}var ee=function(e,t,n){for(var r=0,o=0;r=o,o=F(),38===r&&12===o&&(t[n]=1),!M(o);)C();return z(e,w)},te=function(e,t){return $(function(e,t){var n=-1,r=44;do{switch(M(r)){case 0:38===r&&12===F()&&(t[n]=1),e[n]+=ee(w-1,t,n);break;case 2:e[n]+=L(r);break;case 4:if(44===r){e[++n]=58===F()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=s(r)}}while(r=C());return e}(I(e),t))},ne=new WeakMap,re=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ne.get(n))&&!r){ne.set(e,!0);for(var o=[],i=te(t,o),a=n.props,l=0,s=0;l<i.length;l++)for(var c=0;c<a.length;c++,s++)e.props[s]=o[l]?i[l].replace(/&\f/g,a[c]):a[c]+" "+i[l]}}},oe=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ie(e,t){switch(function(e,t){return 45^f(e,0)?(((t<<2^f(e,0))<<2^f(e,1))<<2^f(e,2))<<2^f(e,3):0}(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+B+e+N+e+e;case 6828:case 4268:return U+e+N+e+e;case 6165:return U+e+N+"flex-"+e+e;case 5187:return U+e+d(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return U+e+N+"flex-item-"+d(e,/flex-|-self/,"")+e;case 4675:return U+e+N+"flex-line-pack"+d(e,/align-content|flex-|-self/,"")+e;case 5548:return U+e+N+d(e,"shrink","negative")+e;case 5292:return U+e+N+d(e,"basis","preferred-size")+e;case 6060:return U+"box-"+d(e,"-grow","")+U+e+N+d(e,"grow","positive")+e;case 4554:return U+d(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return d(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(m(e)-1-t>6)switch(f(e,t+1)){case 109:if(45!==f(e,t+4))break;case 102:return d(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+B+(108==f(e,t+3)?"$3":"$2-$3"))+e;case 115:return~p(e,"stretch")?ie(d(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==f(e,t+1))break;case 6444:switch(f(e,m(e)-3-(~p(e,"!important")&&10))){case 107:return d(e,":",":"+U)+e;case 101:return d(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+U+(45===f(e,14)?"inline-":"")+"box$3$1"+U+"$2$3$1"+N+"$2box$3")+e}break;case 5936:switch(f(e,t+11)){case 114:return U+e+N+d(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+N+d(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+N+d(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return U+e+N+e+e}return e}var ae=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case V:e.return=ie(e.value,e.length);break;case G:return K([E(e,{value:d(e.value,"@","@"+U)})],r);case H:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return K([E(e,{props:[d(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return K([E(e,{props:[d(t,/:(plac\w+)/,":"+U+"input-$1")]}),E(e,{props:[d(t,/:(plac\w+)/,":-moz-$1")]}),E(e,{props:[d(t,/:(plac\w+)/,N+"input-$1")]})],r)}return""})}}],le=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var r,o,i=e.stylisPlugins||ae,l={},s=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)l[t[n]]=!0;s.push(e)});var c,u,d=[Y,(u=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],p=function(e){var t=g(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}([re,oe].concat(i,d));o=function(e,t,n,r){c=n,K(X(e?e+"{"+t.styles+"}":t.styles),p),r&&(f.inserted[t.name]=!0)};var f={key:t,sheet:new a({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:o};return f.sheet.hydrate(s),f};function se(e,t,n){var r="";return n.split(" ").forEach(function(n){void 0!==e[n]?t.push(e[n]+";"):n&&(r+=n+" ")}),r}var ce=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},ue=function(e,t,n){ce(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+r:"",o,e.sheet,!0),o=o.next}while(void 0!==o)}};var de={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function pe(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var fe=!1,he=/[A-Z]|^ms/g,me=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ge=function(e){return 45===e.charCodeAt(1)},xe=function(e){return null!=e&&"boolean"!==typeof e},ve=pe(function(e){return ge(e)?e:e.replace(he,"-$&").toLowerCase()}),ye=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(me,function(e,t,n){return ke={name:t,styles:n,next:ke},t})}return 1===de[e]||ge(e)||"number"!==typeof t||0===t?t:t+"px"},be="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function we(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var o=n;if(1===o.anim)return ke={name:o.name,styles:o.styles,next:ke},o.name;var i=n;if(void 0!==i.styles){var a=i.next;if(void 0!==a)for(;void 0!==a;)ke={name:a.name,styles:a.styles,next:ke},a=a.next;return i.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=we(e,t,n[o])+";";else for(var i in n){var a=n[i];if("object"!==typeof a){var l=a;null!=t&&void 0!==t[l]?r+=i+"{"+t[l]+"}":xe(l)&&(r+=ve(i)+":"+ye(i,l)+";")}else{if("NO_COMPONENT_SELECTOR"===i&&fe)throw new Error(be);if(!Array.isArray(a)||"string"!==typeof a[0]||null!=t&&void 0!==t[a[0]]){var s=we(e,t,a);switch(i){case"animation":case"animationName":r+=ve(i)+":"+s+";";break;default:r+=i+"{"+s+"}"}}else for(var c=0;c<a.length;c++)xe(a[c])&&(r+=ve(i)+":"+ye(i,a[c])+";")}}return r}(e,t,n);case"function":if(void 0!==e){var l=ke,s=n(e);return ke=l,we(e,t,s)}}var c=n;if(null==t)return c;var u=t[c];return void 0!==u?u:c}var ke,Se=/label:\s*([^\s;{]+)\s*(;|$)/g;function je(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,o="";ke=void 0;var i=e[0];null==i||void 0===i.raw?(r=!1,o+=we(n,t,i)):o+=i[0];for(var a=1;a<e.length;a++){if(o+=we(n,t,e[a]),r)o+=i[a]}Se.lastIndex=0;for(var l,s="";null!==(l=Se.exec(o));)s+="-"+l[1];var c=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(o)+s;return{name:c,styles:o,next:ke}}var Ee=!!i.useInsertionEffect&&i.useInsertionEffect,Ae=Ee||function(e){return e()},Ce=Ee||o.useLayoutEffect,Fe=o.createContext("undefined"!==typeof HTMLElement?le({key:"css"}):null),De=Fe.Provider,ze=function(e){return(0,o.forwardRef)(function(t,n){var r=(0,o.useContext)(Fe);return e(t,r,n)})},Me=o.createContext({});var Ie={}.hasOwnProperty,$e="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Le=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return ce(t,n,r),Ae(function(){return ue(t,n,r)}),null},Re=ze(function(e,t,n){var r=e.css;"string"===typeof r&&void 0!==t.registered[r]&&(r=t.registered[r]);var i=e[$e],a=[r],l="";"string"===typeof e.className?l=se(t.registered,a,e.className):null!=e.className&&(l=e.className+" ");var s=je(a,void 0,o.useContext(Me));l+=t.key+"-"+s.name;var c={};for(var u in e)Ie.call(e,u)&&"css"!==u&&u!==$e&&(c[u]=e[u]);return c.className=l,n&&(c.ref=n),o.createElement(o.Fragment,null,o.createElement(Le,{cache:t,serialized:s,isStringTag:"string"===typeof i}),o.createElement(i,c))}),Te=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_e=pe(function(e){return Te.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),Oe=function(e){return"theme"!==e},Pe=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?_e:Oe},Ne=function(e,t,n){var r;if(t){var o=t.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!==typeof r&&n&&(r=e.__emotion_forwardProp),r},Be=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return ce(t,n,r),Ae(function(){return ue(t,n,r)}),null},Ue=function e(t,n){var i,a,l=t.__emotion_real===t,s=l&&t.__emotion_base||t;void 0!==n&&(i=n.label,a=n.target);var c=Ne(t,n,l),u=c||Pe(s),d=!u("as");return function(){var p=arguments,f=l&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==i&&f.push("label:"+i+";"),null==p[0]||void 0===p[0].raw)f.push.apply(f,p);else{var h=p[0];f.push(h[0]);for(var m=p.length,g=1;g<m;g++)f.push(p[g],h[g])}var x=ze(function(e,t,n){var r=d&&e.as||s,i="",l=[],p=e;if(null==e.theme){for(var h in p={},e)p[h]=e[h];p.theme=o.useContext(Me)}"string"===typeof e.className?i=se(t.registered,l,e.className):null!=e.className&&(i=e.className+" ");var m=je(f.concat(l),t.registered,p);i+=t.key+"-"+m.name,void 0!==a&&(i+=" "+a);var g=d&&void 0===c?Pe(r):u,x={};for(var v in e)d&&"as"===v||g(v)&&(x[v]=e[v]);return x.className=i,n&&(x.ref=n),o.createElement(o.Fragment,null,o.createElement(Be,{cache:t,serialized:m,isStringTag:"string"===typeof r}),o.createElement(r,x))});return x.displayName=void 0!==i?i:"Styled("+("string"===typeof s?s:s.displayName||s.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=s,x.__emotion_styles=f,x.__emotion_forwardProp=c,Object.defineProperty(x,"toString",{value:function(){return"."+a}}),x.withComponent=function(t,o){return e(t,(0,r.A)({},n,o,{shouldForwardProp:Ne(x,o,!0)})).apply(void 0,f)},x}}.bind(null);["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){Ue[e]=Ue(e)});n(219);var We=function(e,t){var n=arguments;if(null==t||!Ie.call(t,"css"))return o.createElement.apply(void 0,n);var r=n.length,i=new Array(r);i[0]=Re,i[1]=function(e,t){var n={};for(var r in t)Ie.call(t,r)&&(n[r]=t[r]);return n[$e]=e,n}(e,t);for(var a=2;a<r;a++)i[a]=n[a];return o.createElement.apply(null,i)};!function(e){var t;t||(t=e.JSX||(e.JSX={}))}(We||(We={}));var He=ze(function(e,t){var n=je([e.styles],void 0,o.useContext(Me)),r=o.useRef();return Ce(function(){var e=t.key+"-global",o=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),i=!1,a=document.querySelector('style[data-emotion="'+e+" "+n.name+'"]');return t.sheet.tags.length&&(o.before=t.sheet.tags[0]),null!==a&&(i=!0,a.setAttribute("data-emotion",e),o.hydrate([a])),r.current=[o,i],function(){o.flush()}},[t]),Ce(function(){var e=r.current,o=e[0];if(e[1])e[1]=!1;else{if(void 0!==n.next&&ue(t,n.next,!0),o.tags.length){var i=o.tags[o.tags.length-1].nextElementSibling;o.before=i,o.flush()}t.insert("",n,o,!1)}},[t,n.name]),null});function Ve(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return je(t)}function Ge(){var e=Ve.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Ke=n(579);const Ye=new Map;function Xe(e){const{injectFirst:t,enableCssLayer:n,children:r}=e,i=o.useMemo(()=>{const e=`${t}-${n}`;if("object"===typeof document&&Ye.has(e))return Ye.get(e);const r=function(e,t){const n=le({key:"css",prepend:e});if(t){const e=n.insert;n.insert=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n[1].styles.match(/^@layer\s+[^{]*$/)||(n[1].styles=`@layer mui {${n[1].styles}}`),e(...n)}}return n}(t,n);return Ye.set(e,r),r},[t,n]);return t||n?(0,Ke.jsx)(De,{value:i,children:r}):r}function qe(e){const{styles:t,defaultTheme:n={}}=e,r="function"===typeof t?e=>{return t(void 0===(r=e)||null===r||0===Object.keys(r).length?n:e);var r}:t;return(0,Ke.jsx)(He,{styles:r})}function Qe(e,t){return Ue(e,t)}const Je=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},Ze=[];function et(e){return Ze[0]=e,je(Ze)}},1707:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight")},2177:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person")},2577:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings")},2730:(e,t,n)=>{"use strict";var r=n(5043),o=n(8853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function m(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function y(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(h,e)||!d.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),C=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),I=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var $=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var L=Symbol.iterator;function R(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=L&&e[L]||e["@@iterator"])?e:null}var T,_=Object.assign;function O(e){if(void 0===T)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);T=t&&t[1]||""}return"\n"+T+e}var P=!1;function N(e,t){if(!e||P)return"";P=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var o=c.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(1!==a||1!==l)do{if(a--,0>--l||o[a]!==i[l]){var s="\n"+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=a&&0<=l);break}}}finally{P=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?O(e):""}function B(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=N(e.type,!1);case 11:return e=N(e.type.render,!1);case 1:return e=N(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case E:return"Profiler";case j:return"StrictMode";case D:return"Suspense";case z:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case C:return(e.displayName||"Context")+".Consumer";case A:return(e._context.displayName||"Context")+".Provider";case F:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case M:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case I:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function G(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function X(e,t){var n=t.checked;return _({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){Q(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return _({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function ie(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ue(e,t)})}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(fe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]})});var xe=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,je=null;function Ee(e){if(e=bo(e)){if("function"!==typeof ke)throw Error(i(280));var t=e.stateNode;t&&(t=ko(t),ke(e.stateNode,e.type,t))}}function Ae(e){Se?je?je.push(e):je=[e]:Se=e}function Ce(){if(Se){var e=Se,t=je;if(je=Se=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Fe(e,t){return e(t)}function De(){}var ze=!1;function Me(e,t,n){if(ze)return e(t,n);ze=!0;try{return Fe(e,t,n)}finally{ze=!1,(null!==Se||null!==je)&&(De(),Ce())}}function Ie(e,t){var n=e.stateNode;if(null===n)return null;var r=ko(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var $e=!1;if(u)try{var Le={};Object.defineProperty(Le,"passive",{get:function(){$e=!0}}),window.addEventListener("test",Le,Le),window.removeEventListener("test",Le,Le)}catch(ue){$e=!1}function Re(e,t,n,r,o,i,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Te=!1,_e=null,Oe=!1,Pe=null,Ne={onError:function(e){Te=!0,_e=e}};function Be(e,t,n,r,o,i,a,l,s){Te=!1,_e=null,Re.apply(Ne,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Ue(e)!==e)throw Error(i(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(r=o.return)){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return He(o),e;if(a===r)return He(o),t;a=a.sibling}throw Error(i(188))}if(n.return!==r.return)n=o,r=a;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ge(e):null}function Ge(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ge(e);if(null!==t)return t;e=e.sibling}return null}var Ke=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,Xe=o.unstable_shouldYield,qe=o.unstable_requestPaint,Qe=o.unstable_now,Je=o.unstable_getCurrentPriorityLevel,Ze=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,it=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var l=a&~o;0!==l?r=dt(l):0!==(i&=a)&&(r=dt(i))}else 0!==(a=n&~o)?r=dt(a):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-at(t)),r|=e[n],t&=~o;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var yt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,jt,Et,At=!1,Ct=[],Ft=null,Dt=null,zt=null,Mt=new Map,It=new Map,$t=[],Lt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rt(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Mt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":It.delete(t.pointerId)}}function Tt(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=bo(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function _t(e){var t=yo(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Et(e.priority,function(){St(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Ot(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=bo(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Pt(e,t,n){Ot(e)&&n.delete(t)}function Nt(){At=!1,null!==Ft&&Ot(Ft)&&(Ft=null),null!==Dt&&Ot(Dt)&&(Dt=null),null!==zt&&Ot(zt)&&(zt=null),Mt.forEach(Pt),It.forEach(Pt)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,At||(At=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Nt)))}function Ut(e){function t(t){return Bt(t,e)}if(0<Ct.length){Bt(Ct[0],e);for(var n=1;n<Ct.length;n++){var r=Ct[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Ft&&Bt(Ft,e),null!==Dt&&Bt(Dt,e),null!==zt&&Bt(zt,e),Mt.forEach(t),It.forEach(t),n=0;n<$t.length;n++)(r=$t[n]).blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&null===(n=$t[0]).blockedOn;)_t(n),null===n.blockedOn&&$t.shift()}var Wt=b.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var o=yt,i=Wt.transition;Wt.transition=null;try{yt=1,Kt(e,t,n,r)}finally{yt=o,Wt.transition=i}}function Gt(e,t,n,r){var o=yt,i=Wt.transition;Wt.transition=null;try{yt=4,Kt(e,t,n,r)}finally{yt=o,Wt.transition=i}}function Kt(e,t,n,r){if(Ht){var o=Xt(e,t,n,r);if(null===o)Hr(e,t,r,Yt,n),Rt(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Ft=Tt(Ft,e,t,n,r,o),!0;case"dragenter":return Dt=Tt(Dt,e,t,n,r,o),!0;case"mouseover":return zt=Tt(zt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Mt.set(i,Tt(Mt.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,It.set(i,Tt(It.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(Rt(e,r),4&t&&-1<Lt.indexOf(e)){for(;null!==o;){var i=bo(o);if(null!==i&&wt(i),null===(i=Xt(e,t,n,r))&&Hr(e,t,r,Yt,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Yt=null;function Xt(e,t,n,r){if(Yt=null,null!==(e=yo(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Qt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,o="value"in Qt?Qt.value:Qt.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Zt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=_({},cn,{view:0,detail:0}),pn=on(dn),fn=_({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=on(fn),mn=on(_({},fn,{dataTransfer:0})),gn=on(_({},dn,{relatedTarget:0})),xn=on(_({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=_({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=on(vn),bn=on(_({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function En(){return jn}var An=_({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cn=on(An),Fn=on(_({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Dn=on(_({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),zn=on(_({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Mn=_({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),In=on(Mn),$n=[9,13,27,32],Ln=u&&"CompositionEvent"in window,Rn=null;u&&"documentMode"in document&&(Rn=document.documentMode);var Tn=u&&"TextEvent"in window&&!Rn,_n=u&&(!Ln||Rn&&8<Rn&&11>=Rn),On=String.fromCharCode(32),Pn=!1;function Nn(e,t){switch(e){case"keyup":return-1!==$n.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Vn(e,t,n,r){Ae(r),0<(t=Gr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Kn=null;function Yn(e){Or(e,0)}function Xn(e){if(K(wo(e)))return e}function qn(e,t){if("change"===e)return t}var Qn=!1;if(u){var Jn;if(u){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Qn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Gn&&(Gn.detachEvent("onpropertychange",nr),Kn=Gn=null)}function nr(e){if("value"===e.propertyName&&Xn(Kn)){var t=[];Vn(t,Kn,e,we(e)),Me(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Gn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Xn(Kn)}function ir(e,t){if("click"===e)return Xn(t)}function ar(e,t){if("input"===e||"change"===e)return Xn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!lr(e[o],t[o]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ur(n,i);var a=ur(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,xr=null,vr=null,yr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==gr||gr!==Y(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&sr(vr,r)||(vr=r,0<(r=Gr(xr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},jr={};function Er(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Sr[e]=n[t];return e}u&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Ar=Er("animationend"),Cr=Er("animationiteration"),Fr=Er("animationstart"),Dr=Er("transitionend"),zr=new Map,Mr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(e,t){zr.set(e,t),s(t,[e])}for(var $r=0;$r<Mr.length;$r++){var Lr=Mr[$r];Ir(Lr.toLowerCase(),"on"+(Lr[0].toUpperCase()+Lr.slice(1)))}Ir(Ar,"onAnimationEnd"),Ir(Cr,"onAnimationIteration"),Ir(Fr,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(Dr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function _r(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,a,l,s,c){if(Be.apply(this,arguments),Te){if(!Te)throw Error(i(198));var u=_e;Te=!1,_e=null,Oe||(Oe=!0,Pe=u)}}(r,t,void 0,e),e.currentTarget=null}function Or(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;_r(o,l,c),i=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,c=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;_r(o,l,c),i=s}}}if(Oe)throw e=Pe,Oe=!1,Pe=null,e}function Pr(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Nr(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Br]){e[Br]=!0,a.forEach(function(t){"selectionchange"!==t&&(Tr.has(t)||Nr(t,!1,e),Nr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Nr("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(qt(t)){case 1:var o=Vt;break;case 4:o=Gt;break;default:o=Kt}n=o.bind(null,t,n,e),o=void 0,!$e||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var s=a.tag;if((3===s||4===s)&&((s=a.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;a=a.return}for(;null!==l;){if(null===(a=yo(l)))return;if(5===(s=a.tag)||6===s){r=i=a;continue e}l=l.parentNode}}r=r.return}Me(function(){var r=i,o=we(n),a=[];e:{var l=zr.get(e);if(void 0!==l){var s=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Cn;break;case"focusin":c="focus",s=gn;break;case"focusout":c="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Dn;break;case Ar:case Cr:case Fr:s=xn;break;case Dr:s=zn;break;case"scroll":s=pn;break;case"wheel":s=In;break;case"copy":case"cut":case"paste":s=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Fn}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==l?l+"Capture":null:l;u=[];for(var f,h=r;null!==h;){var m=(f=h).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==p&&(null!=(m=Ie(h,p))&&u.push(Vr(h,m,f)))),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,n,o),a.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!yo(c)&&!c[mo])&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?yo(c):null)&&(c!==(d=Ue(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(u=hn,m="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=Fn,m="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==s?l:wo(s),f=null==c?l:wo(c),(l=new u(m,h+"leave",s,n,o)).target=d,l.relatedTarget=f,m=null,yo(o)===r&&((u=new u(p,h+"enter",c,n,o)).target=f,u.relatedTarget=d,m=u),d=m,s&&c)e:{for(p=c,h=0,f=u=s;f;f=Kr(f))h++;for(f=0,m=p;m;m=Kr(m))f++;for(;0<h-f;)u=Kr(u),h--;for(;0<f-h;)p=Kr(p),f--;for(;h--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kr(u),p=Kr(p)}u=null}else u=null;null!==s&&Yr(a,l,s,u,!1),null!==c&&null!==d&&Yr(a,d,c,u,!0)}if("select"===(s=(l=r?wo(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=qn;else if(Hn(l))if(Qn)g=ar;else{g=or;var x=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ir);switch(g&&(g=g(e,r))?Vn(a,g,n,o):(x&&x(e,l,r),"focusout"===e&&(x=l._wrapperState)&&x.controlled&&"number"===l.type&&ee(l,"number",l.value)),x=r?wo(r):window,e){case"focusin":(Hn(x)||"true"===x.contentEditable)&&(gr=x,xr=r,vr=null);break;case"focusout":vr=xr=gr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,br(a,n,o);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(a,n,o)}var v;if(Ln)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Un?Nn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(_n&&"ko"!==n.locale&&(Un||"onCompositionStart"!==y?"onCompositionEnd"===y&&Un&&(v=en()):(Jt="value"in(Qt=o)?Qt.value:Qt.textContent,Un=!0)),0<(x=Gr(r,y)).length&&(y=new bn(y,e,null,n,o),a.push({event:y,listeners:x}),v?y.data=v:null!==(v=Bn(n))&&(y.data=v))),(v=Tn?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(Pn=!0,On);case"textInput":return(e=t.data)===On&&Pn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!Ln&&Nn(e,t)?(e=en(),Zt=Jt=Qt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _n&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Gr(r,"onBeforeInput")).length&&(o=new bn("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=v))}Or(a,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=Ie(e,n))&&r.unshift(Vr(e,i,o)),null!=(i=Ie(e,t))&&r.push(Vr(e,i,o))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,o?null!=(s=Ie(n,i))&&a.unshift(Vr(n,s,l)):o||null!=(s=Ie(n,i))&&a.push(Vr(n,s,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Xr=/\r\n?/g,qr=/\u0000|\uFFFD/g;function Qr(e){return("string"===typeof e?e:""+e).replace(Xr,"\n").replace(qr,"")}function Jr(e,t,n){if(t=Qr(t),Qr(e)!==t&&n)throw Error(i(425))}function Zr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,io="function"===typeof Promise?Promise:void 0,ao="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof io?function(e){return io.resolve(null).then(e).catch(lo)}:ro;function lo(e){setTimeout(function(){throw e})}function so(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Ut(t)}function co(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function uo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),fo="__reactFiber$"+po,ho="__reactProps$"+po,mo="__reactContainer$"+po,go="__reactEvents$"+po,xo="__reactListeners$"+po,vo="__reactHandles$"+po;function yo(e){var t=e[fo];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[fo]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=uo(e);null!==e;){if(n=e[fo])return n;e=uo(e)}return t}n=(e=n).parentNode}return null}function bo(e){return!(e=e[fo]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function ko(e){return e[ho]||null}var So=[],jo=-1;function Eo(e){return{current:e}}function Ao(e){0>jo||(e.current=So[jo],So[jo]=null,jo--)}function Co(e,t){jo++,So[jo]=e.current,e.current=t}var Fo={},Do=Eo(Fo),zo=Eo(!1),Mo=Fo;function Io(e,t){var n=e.type.contextTypes;if(!n)return Fo;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $o(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Lo(){Ao(zo),Ao(Do)}function Ro(e,t,n){if(Do.current!==Fo)throw Error(i(168));Co(Do,t),Co(zo,n)}function To(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(i(108,W(e)||"Unknown",o));return _({},n,r)}function _o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fo,Mo=Do.current,Co(Do,e),Co(zo,zo.current),!0}function Oo(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=To(e,t,Mo),r.__reactInternalMemoizedMergedChildContext=e,Ao(zo),Ao(Do),Co(Do,e)):Ao(zo),Co(zo,n)}var Po=null,No=!1,Bo=!1;function Uo(e){null===Po?Po=[e]:Po.push(e)}function Wo(){if(!Bo&&null!==Po){Bo=!0;var e=0,t=yt;try{var n=Po;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Po=null,No=!1}catch(o){throw null!==Po&&(Po=Po.slice(e+1)),Ke(Ze,Wo),o}finally{yt=t,Bo=!1}}return null}var Ho=[],Vo=0,Go=null,Ko=0,Yo=[],Xo=0,qo=null,Qo=1,Jo="";function Zo(e,t){Ho[Vo++]=Ko,Ho[Vo++]=Go,Go=e,Ko=t}function ei(e,t,n){Yo[Xo++]=Qo,Yo[Xo++]=Jo,Yo[Xo++]=qo,qo=e;var r=Qo;e=Jo;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Qo=1<<32-at(t)+o|n<<o|r,Jo=i+e}else Qo=1<<i|n<<o|r,Jo=e}function ti(e){null!==e.return&&(Zo(e,1),ei(e,1,0))}function ni(e){for(;e===Go;)Go=Ho[--Vo],Ho[Vo]=null,Ko=Ho[--Vo],Ho[Vo]=null;for(;e===qo;)qo=Yo[--Xo],Yo[Xo]=null,Jo=Yo[--Xo],Yo[Xo]=null,Qo=Yo[--Xo],Yo[Xo]=null}var ri=null,oi=null,ii=!1,ai=null;function li(e,t){var n=Mc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function si(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ri=e,oi=co(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ri=e,oi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==qo?{id:Qo,overflow:Jo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Mc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ri=e,oi=null,!0);default:return!1}}function ci(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ui(e){if(ii){var t=oi;if(t){var n=t;if(!si(e,t)){if(ci(e))throw Error(i(418));t=co(n.nextSibling);var r=ri;t&&si(e,t)?li(r,n):(e.flags=-4097&e.flags|2,ii=!1,ri=e)}}else{if(ci(e))throw Error(i(418));e.flags=-4097&e.flags|2,ii=!1,ri=e}}}function di(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ri=e}function pi(e){if(e!==ri)return!1;if(!ii)return di(e),ii=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oi)){if(ci(e))throw fi(),Error(i(418));for(;t;)li(e,t),t=co(t.nextSibling)}if(di(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oi=co(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oi=null}}else oi=ri?co(e.stateNode.nextSibling):null;return!0}function fi(){for(var e=oi;e;)e=co(e.nextSibling)}function hi(){oi=ri=null,ii=!1}function mi(e){null===ai?ai=[e]:ai.push(e)}var gi=b.ReactCurrentBatchConfig;function xi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var o=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=o.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yi(e){return(0,e._init)(e._payload)}function bi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=$c(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=_c(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===I&&yi(i)===t.type)?((r=o(t,n.props)).ref=xi(e,t,n),r.return=e,r):((r=Lc(n.type,n.key,n.props,null,e.mode,r)).ref=xi(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Oc(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Rc(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=_c(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Lc(t.type,t.key,t.props,null,e.mode,n)).ref=xi(e,null,t),n.return=e,n;case k:return(t=Oc(t,e.mode,n)).return=e,t;case I:return p(e,(0,t._init)(t._payload),n)}if(te(t)||R(t))return(t=Rc(t,e.mode,n,null)).return=e,t;vi(e,t)}return null}function f(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?c(e,t,n,r):null;case k:return n.key===o?u(e,t,n,r):null;case I:return f(e,t,(o=n._init)(n._payload),r)}if(te(n)||R(n))return null!==o?null:d(e,t,n,r,null);vi(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case I:return h(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||R(r))return d(t,e=e.get(n)||null,r,o,null);vi(t,r)}return null}function m(o,i,l,s){for(var c=null,u=null,d=i,m=i=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var x=f(o,d,l[m],s);if(null===x){null===d&&(d=g);break}e&&d&&null===x.alternate&&t(o,d),i=a(x,i,m),null===u?c=x:u.sibling=x,u=x,d=g}if(m===l.length)return n(o,d),ii&&Zo(o,m),c;if(null===d){for(;m<l.length;m++)null!==(d=p(o,l[m],s))&&(i=a(d,i,m),null===u?c=d:u.sibling=d,u=d);return ii&&Zo(o,m),c}for(d=r(o,d);m<l.length;m++)null!==(g=h(d,o,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=a(g,i,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(o,e)}),ii&&Zo(o,m),c}function g(o,l,s,c){var u=R(s);if("function"!==typeof u)throw Error(i(150));if(null==(s=u.call(s)))throw Error(i(151));for(var d=u=null,m=l,g=l=0,x=null,v=s.next();null!==m&&!v.done;g++,v=s.next()){m.index>g?(x=m,m=null):x=m.sibling;var y=f(o,m,v.value,c);if(null===y){null===m&&(m=x);break}e&&m&&null===y.alternate&&t(o,m),l=a(y,l,g),null===d?u=y:d.sibling=y,d=y,m=x}if(v.done)return n(o,m),ii&&Zo(o,g),u;if(null===m){for(;!v.done;g++,v=s.next())null!==(v=p(o,v.value,c))&&(l=a(v,l,g),null===d?u=v:d.sibling=v,d=v);return ii&&Zo(o,g),u}for(m=r(o,m);!v.done;g++,v=s.next())null!==(v=h(m,o,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),l=a(v,l,g),null===d?u=v:d.sibling=v,d=v);return e&&m.forEach(function(e){return t(o,e)}),ii&&Zo(o,g),u}return function e(r,i,a,s){if("object"===typeof a&&null!==a&&a.type===S&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var c=a.key,u=i;null!==u;){if(u.key===c){if((c=a.type)===S){if(7===u.tag){n(r,u.sibling),(i=o(u,a.props.children)).return=r,r=i;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===I&&yi(c)===u.type){n(r,u.sibling),(i=o(u,a.props)).ref=xi(r,u,a),i.return=r,r=i;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===S?((i=Rc(a.props.children,r.mode,s,a.key)).return=r,r=i):((s=Lc(a.type,a.key,a.props,null,r.mode,s)).ref=xi(r,i,a),s.return=r,r=s)}return l(r);case k:e:{for(u=a.key;null!==i;){if(i.key===u){if(4===i.tag&&i.stateNode.containerInfo===a.containerInfo&&i.stateNode.implementation===a.implementation){n(r,i.sibling),(i=o(i,a.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Oc(a,r.mode,s)).return=r,r=i}return l(r);case I:return e(r,i,(u=a._init)(a._payload),s)}if(te(a))return m(r,i,a,s);if(R(a))return g(r,i,a,s);vi(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==i&&6===i.tag?(n(r,i.sibling),(i=o(i,a)).return=r,r=i):(n(r,i),(i=_c(a,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var wi=bi(!0),ki=bi(!1),Si=Eo(null),ji=null,Ei=null,Ai=null;function Ci(){Ai=Ei=ji=null}function Fi(e){var t=Si.current;Ao(Si),e._currentValue=t}function Di(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zi(e,t){ji=e,Ai=Ei=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function Mi(e){var t=e._currentValue;if(Ai!==e)if(e={context:e,memoizedValue:t,next:null},null===Ei){if(null===ji)throw Error(i(308));Ei=e,ji.dependencies={lanes:0,firstContext:e}}else Ei=Ei.next=e;return t}var Ii=null;function $i(e){null===Ii?Ii=[e]:Ii.push(e)}function Li(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,$i(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ri(e,r)}function Ri(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ti=!1;function _i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ni(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Fs)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ri(e,n)}return null===(o=r.interleaved)?(t.next=t,$i(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ri(e,n)}function Bi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Ui(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wi(e,t,n,r){var o=e.updateQueue;Ti=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,c=s.next;s.next=null,null===a?i=c:a.next=c,a=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==i){var d=o.baseState;for(a=0,u=c=s=null,l=i;;){var p=l.lane,f=l.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(p=t,f=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=m.payload)?h.call(f,d,p):h)||void 0===p)break e;d=_({},d,p);break e;case 2:Ti=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(p=o.effects)?o.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=f,s=d):u=u.next=f,a|=p;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(p=l).next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}if(null===u&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);Ts|=a,e.lanes=a,e.memoizedState=d}}function Hi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(i(191,o));o.call(r)}}}var Vi={},Gi=Eo(Vi),Ki=Eo(Vi),Yi=Eo(Vi);function Xi(e){if(e===Vi)throw Error(i(174));return e}function qi(e,t){switch(Co(Yi,t),Co(Ki,e),Co(Gi,Vi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ao(Gi),Co(Gi,t)}function Qi(){Ao(Gi),Ao(Ki),Ao(Yi)}function Ji(e){Xi(Yi.current);var t=Xi(Gi.current),n=se(t,e.type);t!==n&&(Co(Ki,e),Co(Gi,n))}function Zi(e){Ki.current===e&&(Ao(Gi),Ao(Ki))}var ea=Eo(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var oa=b.ReactCurrentDispatcher,ia=b.ReactCurrentBatchConfig,aa=0,la=null,sa=null,ca=null,ua=!1,da=!1,pa=0,fa=0;function ha(){throw Error(i(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,o,a){if(aa=a,la=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oa.current=null===e||null===e.memoizedState?Za:el,e=n(r,o),da){a=0;do{if(da=!1,pa=0,25<=a)throw Error(i(301));a+=1,ca=sa=null,t.updateQueue=null,oa.current=tl,e=n(r,o)}while(da)}if(oa.current=Ja,t=null!==sa&&null!==sa.next,aa=0,ca=sa=la=null,ua=!1,t)throw Error(i(300));return e}function xa(){var e=0!==pa;return pa=0,e}function va(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?la.memoizedState=ca=e:ca=ca.next=e,ca}function ya(){if(null===sa){var e=la.alternate;e=null!==e?e.memoizedState:null}else e=sa.next;var t=null===ca?la.memoizedState:ca.next;if(null!==t)ca=t,sa=e;else{if(null===e)throw Error(i(310));e={memoizedState:(sa=e).memoizedState,baseState:sa.baseState,baseQueue:sa.baseQueue,queue:sa.queue,next:null},null===ca?la.memoizedState=ca=e:ca=ca.next=e}return ca}function ba(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=ya(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=sa,o=r.baseQueue,a=n.pending;if(null!==a){if(null!==o){var l=o.next;o.next=a.next,a.next=l}r.baseQueue=o=a,n.pending=null}if(null!==o){a=o.next,r=r.baseState;var s=l=null,c=null,u=a;do{var d=u.lane;if((aa&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=p,l=r):c=c.next=p,la.lanes|=d,Ts|=d}u=u.next}while(null!==u&&u!==a);null===c?l=r:c.next=s,lr(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{a=o.lane,la.lanes|=a,Ts|=a,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=ya(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{a=e(a,l.action),l=l.next}while(l!==o);lr(a,t.memoizedState)||(yl=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Sa(){}function ja(e,t){var n=la,r=ya(),o=t(),a=!lr(r.memoizedState,o);if(a&&(r.memoizedState=o,yl=!0),r=r.queue,Ta(Ca.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(n.flags|=2048,Ma(9,Aa.bind(null,n,r,o,t),void 0,null),null===Ds)throw Error(i(349));0!==(30&aa)||Ea(n,t,o)}return o}function Ea(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Aa(e,t,n,r){t.value=n,t.getSnapshot=r,Fa(t)&&Da(e)}function Ca(e,t,n){return n(function(){Fa(t)&&Da(e)})}function Fa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Da(e){var t=Ri(e,1);null!==t&&nc(t,e,1,-1)}function za(e){var t=va();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=Ya.bind(null,la,e),[t.memoizedState,e]}function Ma(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ia(){return ya().memoizedState}function $a(e,t,n,r){var o=va();la.flags|=e,o.memoizedState=Ma(1|t,n,void 0,void 0===r?null:r)}function La(e,t,n,r){var o=ya();r=void 0===r?null:r;var i=void 0;if(null!==sa){var a=sa.memoizedState;if(i=a.destroy,null!==r&&ma(r,a.deps))return void(o.memoizedState=Ma(t,n,i,r))}la.flags|=e,o.memoizedState=Ma(1|t,n,i,r)}function Ra(e,t){return $a(8390656,8,e,t)}function Ta(e,t){return La(2048,8,e,t)}function _a(e,t){return La(4,2,e,t)}function Oa(e,t){return La(4,4,e,t)}function Pa(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Na(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,La(4,4,Pa.bind(null,t,e),n)}function Ba(){}function Ua(e,t){var n=ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wa(e,t){var n=ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ha(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),la.lanes|=n,Ts|=n,e.baseState=!0),t)}function Va(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{yt=n,ia.transition=r}}function Ga(){return ya().memoizedState}function Ka(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xa(e))qa(t,n);else if(null!==(n=Li(e,t,n,r))){nc(n,e,r,ec()),Qa(n,t,r)}}function Ya(e,t,n){var r=tc(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xa(e))qa(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,lr(l,a)){var s=t.interleaved;return null===s?(o.next=o,$i(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch(c){}null!==(n=Li(e,t,o,r))&&(nc(n,e,r,o=ec()),Qa(n,t,r))}}function Xa(e){var t=e.alternate;return e===la||null!==t&&t===la}function qa(e,t){da=ua=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qa(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Ja={readContext:Mi,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useInsertionEffect:ha,useLayoutEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useMutableSource:ha,useSyncExternalStore:ha,useId:ha,unstable_isNewReconciler:!1},Za={readContext:Mi,useCallback:function(e,t){return va().memoizedState=[e,void 0===t?null:t],e},useContext:Mi,useEffect:Ra,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,$a(4194308,4,Pa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $a(4194308,4,e,t)},useInsertionEffect:function(e,t){return $a(4,2,e,t)},useMemo:function(e,t){var n=va();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=va();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ka.bind(null,la,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},va().memoizedState=e},useState:za,useDebugValue:Ba,useDeferredValue:function(e){return va().memoizedState=e},useTransition:function(){var e=za(!1),t=e[0];return e=Va.bind(null,e[1]),va().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=la,o=va();if(ii){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Ds)throw Error(i(349));0!==(30&aa)||Ea(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Ra(Ca.bind(null,r,a,e),[e]),r.flags|=2048,Ma(9,Aa.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=va(),t=Ds.identifierPrefix;if(ii){var n=Jo;t=":"+t+"R"+(n=(Qo&~(1<<32-at(Qo)-1)).toString(32)+n),0<(n=pa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Mi,useCallback:Ua,useContext:Mi,useEffect:Ta,useImperativeHandle:Na,useInsertionEffect:_a,useLayoutEffect:Oa,useMemo:Wa,useReducer:wa,useRef:Ia,useState:function(){return wa(ba)},useDebugValue:Ba,useDeferredValue:function(e){return Ha(ya(),sa.memoizedState,e)},useTransition:function(){return[wa(ba)[0],ya().memoizedState]},useMutableSource:Sa,useSyncExternalStore:ja,useId:Ga,unstable_isNewReconciler:!1},tl={readContext:Mi,useCallback:Ua,useContext:Mi,useEffect:Ta,useImperativeHandle:Na,useInsertionEffect:_a,useLayoutEffect:Oa,useMemo:Wa,useReducer:ka,useRef:Ia,useState:function(){return ka(ba)},useDebugValue:Ba,useDeferredValue:function(e){var t=ya();return null===sa?t.memoizedState=e:Ha(t,sa.memoizedState,e)},useTransition:function(){return[ka(ba)[0],ya().memoizedState]},useMutableSource:Sa,useSyncExternalStore:ja,useId:Ga,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=_({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:_({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),i=Pi(r,o);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Ni(e,i,o))&&(nc(t,e,o,r),Bi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),i=Pi(r,o);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Ni(e,i,o))&&(nc(t,e,o,r),Bi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),o=Pi(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Ni(e,o,r))&&(nc(t,e,r,n),Bi(t,e,r))}};function il(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(o,i))}function al(e,t,n){var r=!1,o=Fo,i=t.contextType;return"object"===typeof i&&null!==i?i=Mi(i):(o=$o(t)?Mo:Do.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?Io(e,o):Fo),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},_i(e);var i=t.contextType;"object"===typeof i&&null!==i?o.context=Mi(i):(i=$o(t)?Mo:Do.current,o.context=Io(e,i)),o.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rl(e,t,i,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Wi(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var o=n}catch(i){o="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:o,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pl="function"===typeof WeakMap?WeakMap:Map;function fl(e,t,n){(n=Pi(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hs||(Hs=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Pi(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){dl(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Gs?Gs=new Set([this]):Gs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pl;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ec.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xl(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Pi(-1,1)).tag=2,Ni(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var vl=b.ReactCurrentOwner,yl=!1;function bl(e,t,n,r){t.child=null===e?ki(t,null,n,r):wi(t,e.child,n,r)}function wl(e,t,n,r,o){n=n.render;var i=t.ref;return zi(t,o),r=ga(e,t,n,r,i,o),n=xa(),null===e||yl?(ii&&n&&ti(t),t.flags|=1,bl(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Hl(e,t,o))}function kl(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||Ic(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Lc(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Sl(e,t,i,r,o))}if(i=e.child,0===(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(a,r)&&e.ref===t.ref)return Hl(e,t,o)}return t.flags|=1,(e=$c(i,r)).ref=t.ref,e.return=t,t.child=e}function Sl(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=i,0===(e.lanes&o))return t.lanes=e.lanes,Hl(e,t,o);0!==(131072&e.flags)&&(yl=!0)}}return Al(e,t,n,r,o)}function jl(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Co($s,Is),Is|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Co($s,Is),Is|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Co($s,Is),Is|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Co($s,Is),Is|=r;return bl(e,t,o,n),t.child}function El(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Al(e,t,n,r,o){var i=$o(n)?Mo:Do.current;return i=Io(t,i),zi(t,o),n=ga(e,t,n,r,i,o),r=xa(),null===e||yl?(ii&&r&&ti(t),t.flags|=1,bl(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Hl(e,t,o))}function Cl(e,t,n,r,o){if($o(n)){var i=!0;_o(t)}else i=!1;if(zi(t,o),null===t.stateNode)Wl(e,t),al(t,n,r),sl(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;"object"===typeof c&&null!==c?c=Mi(c):c=Io(t,c=$o(n)?Mo:Do.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==r||s!==c)&&ll(t,a,r,c),Ti=!1;var p=t.memoizedState;a.state=p,Wi(t,r,a,o),s=t.memoizedState,l!==r||p!==s||zo.current||Ti?("function"===typeof u&&(rl(t,n,u,r),s=t.memoizedState),(l=Ti||il(t,n,l,r,p,s,c))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Oi(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:nl(t.type,l),a.props=c,d=t.pendingProps,p=a.context,"object"===typeof(s=n.contextType)&&null!==s?s=Mi(s):s=Io(t,s=$o(n)?Mo:Do.current);var f=n.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==d||p!==s)&&ll(t,a,r,s),Ti=!1,p=t.memoizedState,a.state=p,Wi(t,r,a,o);var h=t.memoizedState;l!==d||p!==h||zo.current||Ti?("function"===typeof f&&(rl(t,n,f,r),h=t.memoizedState),(c=Ti||il(t,n,c,r,p,h,s)||!1)?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,s),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=c):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Fl(e,t,n,r,i,o)}function Fl(e,t,n,r,o,i){El(e,t);var a=0!==(128&t.flags);if(!r&&!a)return o&&Oo(t,n,!1),Hl(e,t,i);r=t.stateNode,vl.current=t;var l=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wi(t,e.child,null,i),t.child=wi(t,null,l,i)):bl(e,t,l,i),t.memoizedState=r.state,o&&Oo(t,n,!0),t.child}function Dl(e){var t=e.stateNode;t.pendingContext?Ro(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ro(0,t.context,!1),qi(e,t.containerInfo)}function zl(e,t,n,r,o){return hi(),mi(o),t.flags|=256,bl(e,t,n,r),t.child}var Ml,Il,$l,Ll,Rl={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function _l(e,t,n){var r,o=t.pendingProps,a=ea.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Co(ea,1&a),null===e)return ui(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&o)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Tc(s,o,0,null),e=Rc(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Tl(n),t.memoizedState=Rl,e):Ol(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,o,a,l){if(n)return 256&t.flags?(t.flags&=-257,Pl(e,t,l,r=ul(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Tc({mode:"visible",children:r.children},o,0,null),(a=Rc(a,o,l,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wi(t,e.child,null,l),t.child.memoizedState=Tl(l),t.memoizedState=Rl,a);if(0===(1&t.mode))return Pl(e,t,l,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var s=r.dgst;return r=s,Pl(e,t,l,r=ul(a=Error(i(419)),r,void 0))}if(s=0!==(l&e.childLanes),yl||s){if(null!==(r=Ds)){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|l))?0:o)&&o!==a.retryLane&&(a.retryLane=o,Ri(e,o),nc(r,e,o,-1))}return mc(),Pl(e,t,l,r=ul(Error(i(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Cc.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,oi=co(o.nextSibling),ri=t,ii=!0,ai=null,null!==e&&(Yo[Xo++]=Qo,Yo[Xo++]=Jo,Yo[Xo++]=qo,Qo=e.id,Jo=e.overflow,qo=t),t=Ol(t,r.children),t.flags|=4096,t)}(e,t,s,o,r,a,n);if(l){l=o.fallback,s=t.mode,r=(a=e.child).sibling;var c={mode:"hidden",children:o.children};return 0===(1&s)&&t.child!==a?((o=t.child).childLanes=0,o.pendingProps=c,t.deletions=null):(o=$c(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==r?l=$c(r,l):(l=Rc(l,s,n,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=null===(s=e.child.memoizedState)?Tl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Rl,o}return e=(l=e.child).sibling,o=$c(l,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ol(e,t){return(t=Tc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Pl(e,t,n,r){return null!==r&&mi(r),wi(t,e.child,null,n),(e=Ol(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Nl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Di(e.return,t,n)}function Bl(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ul(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(bl(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Nl(e,n,t);else if(19===e.tag)Nl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Co(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Bl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ta(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Bl(t,!0,n,null,i);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ts|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=$c(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=$c(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ii)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Gl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gl(t),null;case 1:case 17:return $o(t.type)&&Lo(),Gl(t),null;case 3:return r=t.stateNode,Qi(),Ao(zo),Ao(Do),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(pi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ai&&(ac(ai),ai=null))),Il(e,t),Gl(t),null;case 5:Zi(t);var o=Xi(Yi.current);if(n=t.type,null!==e&&null!=t.stateNode)$l(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Gl(t),null}if(e=Xi(Gi.current),pi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[fo]=t,r[ho]=a,e=0!==(1&t.mode),n){case"dialog":Pr("cancel",r),Pr("close",r);break;case"iframe":case"object":case"embed":Pr("load",r);break;case"video":case"audio":for(o=0;o<Rr.length;o++)Pr(Rr[o],r);break;case"source":Pr("error",r);break;case"img":case"image":case"link":Pr("error",r),Pr("load",r);break;case"details":Pr("toggle",r);break;case"input":q(r,a),Pr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Pr("invalid",r);break;case"textarea":oe(r,a),Pr("invalid",r)}for(var s in ve(n,a),o=null,a)if(a.hasOwnProperty(s)){var c=a[s];"children"===s?"string"===typeof c?r.textContent!==c&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,c,e),o=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,c,e),o=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&Pr("scroll",r)}switch(n){case"input":G(r),Z(r,a,!0);break;case"textarea":G(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Zr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fo]=t,e[ho]=r,Ml(e,t,!1,!1),t.stateNode=e;e:{switch(s=ye(n,r),n){case"dialog":Pr("cancel",e),Pr("close",e),o=r;break;case"iframe":case"object":case"embed":Pr("load",e),o=r;break;case"video":case"audio":for(o=0;o<Rr.length;o++)Pr(Rr[o],e);o=r;break;case"source":Pr("error",e),o=r;break;case"img":case"image":case"link":Pr("error",e),Pr("load",e),o=r;break;case"details":Pr("toggle",e),o=r;break;case"input":q(e,r),o=X(e,r),Pr("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=_({},r,{value:void 0}),Pr("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),Pr("invalid",e)}for(a in ve(n,o),c=o)if(c.hasOwnProperty(a)){var u=c[a];"style"===a?ge(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(l.hasOwnProperty(a)?null!=u&&"onScroll"===a&&Pr("scroll",e):null!=u&&y(e,a,u,s))}switch(n){case"input":G(e),Z(e,r,!1);break;case"textarea":G(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Gl(t),null;case 6:if(e&&null!=t.stateNode)Ll(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Xi(Yi.current),Xi(Gi.current),pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[fo]=t,(a=r.nodeValue!==n)&&null!==(e=ri))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fo]=t,t.stateNode=r}return Gl(t),null;case 13:if(Ao(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ii&&null!==oi&&0!==(1&t.mode)&&0===(128&t.flags))fi(),hi(),t.flags|=98560,a=!1;else if(a=pi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[fo]=t}else hi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Gl(t),a=!1}else null!==ai&&(ac(ai),ai=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Ls&&(Ls=3):mc())),null!==t.updateQueue&&(t.flags|=4),Gl(t),null);case 4:return Qi(),Il(e,t),null===e&&Ur(t.stateNode.containerInfo),Gl(t),null;case 10:return Fi(t.type._context),Gl(t),null;case 19:if(Ao(ea),null===(a=t.memoizedState))return Gl(t),null;if(r=0!==(128&t.flags),null===(s=a.rendering))if(r)Vl(a,!1);else{if(0!==Ls||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ta(e))){for(t.flags|=128,Vl(a,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(s=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Co(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Qe()>Us&&(t.flags|=128,r=!0,Vl(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(a,!0),null===a.tail&&"hidden"===a.tailMode&&!s.alternate&&!ii)return Gl(t),null}else 2*Qe()-a.renderingStartTime>Us&&1073741824!==n&&(t.flags|=128,r=!0,Vl(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=a.last)?n.sibling=s:t.child=s,a.last=s)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Qe(),t.sibling=null,n=ea.current,Co(ea,r?1&n|2:1&n),t):(Gl(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Is)&&(Gl(t),6&t.subtreeFlags&&(t.flags|=8192)):Gl(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Yl(e,t){switch(ni(t),t.tag){case 1:return $o(t.type)&&Lo(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qi(),Ao(zo),Ao(Do),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zi(t),null;case 13:if(Ao(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));hi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ao(ea),null;case 4:return Qi(),null;case 10:return Fi(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Ml=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Il=function(){},$l=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Xi(Gi.current);var i,a=null;switch(n){case"input":o=X(e,o),r=X(e,r),a=[];break;case"select":o=_({},o,{value:void 0}),r=_({},r,{value:void 0}),a=[];break;case"textarea":o=re(e,o),r=re(e,r),a=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in ve(n,r),n=null,o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u])if("style"===u){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(s=null!=o?o[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(i in s)!s.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&s[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(a||(a=[]),a.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(a=a||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Pr("scroll",e),a||s===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Ll=function(e,t,n,r){n!==r&&(t.flags|=4)};var Xl=!1,ql=!1,Ql="function"===typeof WeakSet?WeakSet:Set,Jl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){jc(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){jc(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&es(t,n,i)}o=o.next}while(o!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fo],delete t[ho],delete t[go],delete t[xo],delete t[vo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function as(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||as(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var us=null,ds=!1;function ps(e,t,n){for(n=n.child;null!==n;)fs(e,t,n),n=n.sibling}function fs(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(ot,n)}catch(l){}switch(n.tag){case 5:ql||Zl(n,t);case 6:var r=us,o=ds;us=null,ps(e,t,n),ds=o,null!==(us=r)&&(ds?(e=us,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):us.removeChild(n.stateNode));break;case 18:null!==us&&(ds?(e=us,n=n.stateNode,8===e.nodeType?so(e.parentNode,n):1===e.nodeType&&so(e,n),Ut(e)):so(us,n.stateNode));break;case 4:r=us,o=ds,us=n.stateNode.containerInfo,ds=!0,ps(e,t,n),us=r,ds=o;break;case 0:case 11:case 14:case 15:if(!ql&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!==(2&i)||0!==(4&i))&&es(n,t,a),o=o.next}while(o!==r)}ps(e,t,n);break;case 1:if(!ql&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){jc(n,t,l)}ps(e,t,n);break;case 21:ps(e,t,n);break;case 22:1&n.mode?(ql=(r=ql)||null!==n.memoizedState,ps(e,t,n),ql=r):ps(e,t,n);break;default:ps(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Ql),t.forEach(function(t){var r=Fc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(i(160));fs(a,l,o),us=null,ds=!1;var c=o.alternate;null!==c&&(c.return=null),o.return=null}catch(u){jc(o,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),xs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){jc(e,e.return,g)}try{ns(5,e,e.return)}catch(g){jc(e,e.return,g)}}break;case 1:ms(t,e),xs(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(ms(t,e),xs(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var o=e.stateNode;try{pe(o,"")}catch(g){jc(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var a=e.memoizedProps,l=null!==n?n.memoizedProps:a,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===a.type&&null!=a.name&&Q(o,a),ye(s,l);var u=ye(s,a);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];"style"===d?ge(o,p):"dangerouslySetInnerHTML"===d?de(o,p):"children"===d?pe(o,p):y(o,d,p,u)}switch(s){case"input":J(o,a);break;case"textarea":ie(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(o,!!a.multiple,h,!1):f!==!!a.multiple&&(null!=a.defaultValue?ne(o,!!a.multiple,a.defaultValue,!0):ne(o,!!a.multiple,a.multiple?[]:"",!1))}o[ho]=a}catch(g){jc(e,e.return,g)}}break;case 6:if(ms(t,e),xs(e),4&r){if(null===e.stateNode)throw Error(i(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(g){jc(e,e.return,g)}}break;case 3:if(ms(t,e),xs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){jc(e,e.return,g)}break;case 4:default:ms(t,e),xs(e);break;case 13:ms(t,e),xs(e),8192&(o=e.child).flags&&(a=null!==o.memoizedState,o.stateNode.isHidden=a,!a||null!==o.alternate&&null!==o.alternate.memoizedState||(Bs=Qe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(ql=(u=ql)||d,ms(t,e),ql=u):ms(t,e),xs(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Jl=e,d=e.child;null!==d;){for(p=Jl=d;null!==Jl;){switch(h=(f=Jl).child,f.tag){case 0:case 11:case 14:case 15:ns(4,f,f.return);break;case 1:Zl(f,f.return);var m=f.stateNode;if("function"===typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){jc(r,n,g)}}break;case 5:Zl(f,f.return);break;case 22:if(null!==f.memoizedState){ws(p);continue}}null!==h?(h.return=f,Jl=h):ws(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{o=p.stateNode,u?"function"===typeof(a=o.style).setProperty?a.setProperty("display","none","important"):a.display="none":(s=p.stateNode,l=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=me("display",l))}catch(g){jc(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){jc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ms(t,e),xs(e),4&r&&hs(e);case 21:}}function xs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(as(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(pe(o,""),r.flags&=-33),cs(e,ls(e),o);break;case 3:case 4:var a=r.stateNode.containerInfo;ss(e,ls(e),a);break;default:throw Error(i(161))}}catch(l){jc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vs(e,t,n){Jl=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!==(1&e.mode);null!==Jl;){var o=Jl,i=o.child;if(22===o.tag&&r){var a=null!==o.memoizedState||Xl;if(!a){var l=o.alternate,s=null!==l&&null!==l.memoizedState||ql;l=Xl;var c=ql;if(Xl=a,(ql=s)&&!c)for(Jl=o;null!==Jl;)s=(a=Jl).child,22===a.tag&&null!==a.memoizedState?ks(o):null!==s?(s.return=a,Jl=s):ks(o);for(;null!==i;)Jl=i,ys(i,t,n),i=i.sibling;Jl=o,Xl=l,ql=c}bs(e)}else 0!==(8772&o.subtreeFlags)&&null!==i?(i.return=o,Jl=i):bs(e)}}function bs(e){for(;null!==Jl;){var t=Jl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:ql||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!ql)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Hi(t,a,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Hi(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Ut(p)}}}break;default:throw Error(i(163))}ql||512&t.flags&&os(t)}catch(f){jc(t,t.return,f)}}if(t===e){Jl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Jl=n;break}Jl=t.return}}function ws(e){for(;null!==Jl;){var t=Jl;if(t===e){Jl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Jl=n;break}Jl=t.return}}function ks(e){for(;null!==Jl;){var t=Jl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){jc(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(s){jc(t,o,s)}}var i=t.return;try{os(t)}catch(s){jc(t,i,s)}break;case 5:var a=t.return;try{os(t)}catch(s){jc(t,a,s)}}}catch(s){jc(t,t.return,s)}if(t===e){Jl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Jl=l;break}Jl=t.return}}var Ss,js=Math.ceil,Es=b.ReactCurrentDispatcher,As=b.ReactCurrentOwner,Cs=b.ReactCurrentBatchConfig,Fs=0,Ds=null,zs=null,Ms=0,Is=0,$s=Eo(0),Ls=0,Rs=null,Ts=0,_s=0,Os=0,Ps=null,Ns=null,Bs=0,Us=1/0,Ws=null,Hs=!1,Vs=null,Gs=null,Ks=!1,Ys=null,Xs=0,qs=0,Qs=null,Js=-1,Zs=0;function ec(){return 0!==(6&Fs)?Qe():-1!==Js?Js:Js=Qe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Fs)&&0!==Ms?Ms&-Ms:null!==gi.transition?(0===Zs&&(Zs=mt()),Zs):0!==(e=yt)?e:e=void 0===(e=window.event)?16:qt(e.type)}function nc(e,t,n,r){if(50<qs)throw qs=0,Qs=null,Error(i(185));xt(e,n,r),0!==(2&Fs)&&e===Ds||(e===Ds&&(0===(2&Fs)&&(_s|=n),4===Ls&&lc(e,Ms)),rc(e,r),1===n&&0===Fs&&0===(1&t.mode)&&(Us=Qe()+500,No&&Wo()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-at(i),l=1<<a,s=o[a];-1===s?0!==(l&n)&&0===(l&r)||(o[a]=ft(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=pt(e,e===Ds?Ms:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){No=!0,Uo(e)}(sc.bind(null,e)):Uo(sc.bind(null,e)),ao(function(){0===(6&Fs)&&Wo()}),n=null;else{switch(bt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Dc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Js=-1,Zs=0,0!==(6&Fs))throw Error(i(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=pt(e,e===Ds?Ms:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var o=Fs;Fs|=2;var a=hc();for(Ds===e&&Ms===t||(Ws=null,Us=Qe()+500,pc(e,t));;)try{vc();break}catch(s){fc(e,s)}Ci(),Es.current=a,Fs=o,null!==zs?t=0:(Ds=null,Ms=0,t=Ls)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=ic(e,o))),1===t)throw n=Rs,pc(e,0),lc(e,r),rc(e,Qe()),n;if(6===t)lc(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!lr(i(),o))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gc(e,r))&&(0!==(a=ht(e))&&(r=a,t=ic(e,a))),1===t))throw n=Rs,pc(e,0),lc(e,r),rc(e,Qe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wc(e,Ns,Ws);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=Bs+500-Qe())){if(0!==pt(e,0))break;if(((o=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(wc.bind(null,e,Ns,Ws),t);break}wc(e,Ns,Ws);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-at(r);a=1<<l,(l=t[l])>o&&(o=l),r&=~a}if(r=o,10<(r=(120>(r=Qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*js(r/1960))-r)){e.timeoutHandle=ro(wc.bind(null,e,Ns,Ws),r);break}wc(e,Ns,Ws);break;default:throw Error(i(329))}}}return rc(e,Qe()),e.callbackNode===n?oc.bind(null,e):null}function ic(e,t){var n=Ps;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Ns,Ns=n,null!==t&&ac(t)),e}function ac(e){null===Ns?Ns=e:Ns.push.apply(Ns,e)}function lc(e,t){for(t&=~Os,t&=~_s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(0!==(6&Fs))throw Error(i(327));kc();var t=pt(e,0);if(0===(1&t))return rc(e,Qe()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ic(e,r))}if(1===n)throw n=Rs,pc(e,0),lc(e,t),rc(e,Qe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Ns,Ws),rc(e,Qe()),null}function cc(e,t){var n=Fs;Fs|=1;try{return e(t)}finally{0===(Fs=n)&&(Us=Qe()+500,No&&Wo())}}function uc(e){null!==Ys&&0===Ys.tag&&0===(6&Fs)&&kc();var t=Fs;Fs|=1;var n=Cs.transition,r=yt;try{if(Cs.transition=null,yt=1,e)return e()}finally{yt=r,Cs.transition=n,0===(6&(Fs=t))&&Wo()}}function dc(){Is=$s.current,Ao($s)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==zs)for(n=zs.return;null!==n;){var r=n;switch(ni(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Lo();break;case 3:Qi(),Ao(zo),Ao(Do),ra();break;case 5:Zi(r);break;case 4:Qi();break;case 13:case 19:Ao(ea);break;case 10:Fi(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Ds=e,zs=e=$c(e.current,null),Ms=Is=t,Ls=0,Rs=null,Os=_s=Ts=0,Ns=Ps=null,null!==Ii){for(t=0;t<Ii.length;t++)if(null!==(r=(n=Ii[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}Ii=null}return e}function fc(e,t){for(;;){var n=zs;try{if(Ci(),oa.current=Ja,ua){for(var r=la.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ua=!1}if(aa=0,ca=sa=la=null,da=!1,pa=0,As.current=null,null===n||null===n.return){Ls=1,Rs=t,zs=null;break}e:{var a=e,l=n.return,s=n,c=t;if(t=Ms,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,xl(h,l,s,0,t),1&h.mode&&ml(a,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ml(a,u,t),mc();break e}c=Error(i(426))}else if(ii&&1&s.mode){var x=gl(l);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xl(x,l,s,0,t),mi(cl(c,s));break e}}a=c=cl(c,s),4!==Ls&&(Ls=2),null===Ps?Ps=[a]:Ps.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Ui(a,fl(0,c,t));break e;case 1:s=c;var v=a.type,y=a.stateNode;if(0===(128&a.flags)&&("function"===typeof v.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Gs||!Gs.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t,Ui(a,hl(a,s,t));break e}}a=a.return}while(null!==a)}bc(n)}catch(b){t=b,zs===n&&null!==n&&(zs=n=n.return);continue}break}}function hc(){var e=Es.current;return Es.current=Ja,null===e?Ja:e}function mc(){0!==Ls&&3!==Ls&&2!==Ls||(Ls=4),null===Ds||0===(268435455&Ts)&&0===(268435455&_s)||lc(Ds,Ms)}function gc(e,t){var n=Fs;Fs|=2;var r=hc();for(Ds===e&&Ms===t||(Ws=null,pc(e,t));;)try{xc();break}catch(o){fc(e,o)}if(Ci(),Fs=n,Es.current=r,null!==zs)throw Error(i(261));return Ds=null,Ms=0,Ls}function xc(){for(;null!==zs;)yc(zs)}function vc(){for(;null!==zs&&!Xe();)yc(zs)}function yc(e){var t=Ss(e.alternate,e,Is);e.memoizedProps=e.pendingProps,null===t?bc(e):zs=t,As.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,Is)))return void(zs=n)}else{if(null!==(n=Yl(n,t)))return n.flags&=32767,void(zs=n);if(null===e)return Ls=6,void(zs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(zs=t);zs=t=e}while(null!==t);0===Ls&&(Ls=5)}function wc(e,t,n){var r=yt,o=Cs.transition;try{Cs.transition=null,yt=1,function(e,t,n,r){do{kc()}while(null!==Ys);if(0!==(6&Fs))throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,a),e===Ds&&(zs=Ds=null,Ms=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,Dc(tt,function(){return kc(),null})),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Cs.transition,Cs.transition=null;var l=yt;yt=1;var s=Fs;Fs|=4,As.current=null,function(e,t){if(eo=Ht,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==o&&3!==p.nodeType||(s=l+o),p!==a||0!==r&&3!==p.nodeType||(c=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===o&&(s=l),f===a&&++d===r&&(c=l),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},Ht=!1,Jl=t;null!==Jl;)if(e=(t=Jl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Jl=e;else for(;null!==Jl;){t=Jl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,x=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),x);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(i(163))}}catch(w){jc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Jl=e;break}Jl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(to),Ht=!!eo,to=eo=null,e.current=n,vs(n,e,o),qe(),Fs=s,yt=l,Cs.transition=a}else e.current=n;if(Ks&&(Ks=!1,Ys=e,Xs=o),a=e.pendingLanes,0===a&&(Gs=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Hs)throw Hs=!1,e=Vs,Vs=null,e;0!==(1&Xs)&&0!==e.tag&&kc(),a=e.pendingLanes,0!==(1&a)?e===Qs?qs++:(qs=0,Qs=e):qs=0,Wo()}(e,t,n,r)}finally{Cs.transition=o,yt=r}return null}function kc(){if(null!==Ys){var e=bt(Xs),t=Cs.transition,n=yt;try{if(Cs.transition=null,yt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,Xs=0,0!==(6&Fs))throw Error(i(331));var o=Fs;for(Fs|=4,Jl=e.current;null!==Jl;){var a=Jl,l=a.child;if(0!==(16&Jl.flags)){var s=a.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Jl=u;null!==Jl;){var d=Jl;switch(d.tag){case 0:case 11:case 15:ns(8,d,a)}var p=d.child;if(null!==p)p.return=d,Jl=p;else for(;null!==Jl;){var f=(d=Jl).sibling,h=d.return;if(is(d),d===u){Jl=null;break}if(null!==f){f.return=h,Jl=f;break}Jl=h}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Jl=a}}if(0!==(2064&a.subtreeFlags)&&null!==l)l.return=a,Jl=l;else e:for(;null!==Jl;){if(0!==(2048&(a=Jl).flags))switch(a.tag){case 0:case 11:case 15:ns(9,a,a.return)}var v=a.sibling;if(null!==v){v.return=a.return,Jl=v;break e}Jl=a.return}}var y=e.current;for(Jl=y;null!==Jl;){var b=(l=Jl).child;if(0!==(2064&l.subtreeFlags)&&null!==b)b.return=l,Jl=b;else e:for(l=y;null!==Jl;){if(0!==(2048&(s=Jl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){jc(s,s.return,k)}if(s===l){Jl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Jl=w;break e}Jl=s.return}}if(Fs=o,Wo(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(ot,e)}catch(k){}r=!0}return r}finally{yt=n,Cs.transition=t}}return!1}function Sc(e,t,n){e=Ni(e,t=fl(0,t=cl(n,t),1),1),t=ec(),null!==e&&(xt(e,1,t),rc(e,t))}function jc(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Gs||!Gs.has(r))){t=Ni(t,e=hl(t,e=cl(n,e),1),1),e=ec(),null!==t&&(xt(t,1,e),rc(t,e));break}}t=t.return}}function Ec(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Ds===e&&(Ms&n)===n&&(4===Ls||3===Ls&&(130023424&Ms)===Ms&&500>Qe()-Bs?pc(e,0):Os|=n),rc(e,t)}function Ac(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Ri(e,t))&&(xt(e,t,n),rc(e,n))}function Cc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ac(e,n)}function Fc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),Ac(e,n)}function Dc(e,t){return Ke(e,t)}function zc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mc(e,t,n,r){return new zc(e,t,n,r)}function Ic(e){return!(!(e=e.prototype)||!e.isReactComponent)}function $c(e,t){var n=e.alternate;return null===n?((n=Mc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lc(e,t,n,r,o,a){var l=2;if(r=e,"function"===typeof e)Ic(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Rc(n.children,o,a,t);case j:l=8,o|=8;break;case E:return(e=Mc(12,n,t,2|o)).elementType=E,e.lanes=a,e;case D:return(e=Mc(13,n,t,o)).elementType=D,e.lanes=a,e;case z:return(e=Mc(19,n,t,o)).elementType=z,e.lanes=a,e;case $:return Tc(n,o,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case A:l=10;break e;case C:l=9;break e;case F:l=11;break e;case M:l=14;break e;case I:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Mc(l,n,t,o)).elementType=e,t.type=r,t.lanes=a,t}function Rc(e,t,n,r){return(e=Mc(7,e,r,t)).lanes=n,e}function Tc(e,t,n,r){return(e=Mc(22,e,r,t)).elementType=$,e.lanes=n,e.stateNode={isHidden:!1},e}function _c(e,t,n){return(e=Mc(6,e,null,t)).lanes=n,e}function Oc(e,t,n){return(t=Mc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pc(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Nc(e,t,n,r,o,i,a,l,s){return e=new Pc(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Mc(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_i(i),e}function Bc(e){if(!e)return Fo;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($o(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if($o(n))return To(e,n,t)}return t}function Uc(e,t,n,r,o,i,a,l,s){return(e=Nc(n,r,!0,e,0,i,0,l,s)).context=Bc(null),n=e.current,(i=Pi(r=ec(),o=tc(n))).callback=void 0!==t&&null!==t?t:null,Ni(n,i,o),e.current.lanes=o,xt(e,o,r),rc(e,r),e}function Wc(e,t,n,r){var o=t.current,i=ec(),a=tc(o);return n=Bc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Pi(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ni(o,t,a))&&(nc(e,o,a,i),Bi(e,o,a)),a}function Hc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Gc(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}Ss=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||zo.current)yl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Dl(t),hi();break;case 5:Ji(t);break;case 1:$o(t.type)&&_o(t);break;case 4:qi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Co(Si,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Co(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?_l(e,t,n):(Co(ea,1&ea.current),null!==(e=Hl(e,t,n))?e.sibling:null);Co(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Ul(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),Co(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,jl(e,t,n)}return Hl(e,t,n)}(e,t,n);yl=0!==(131072&e.flags)}else yl=!1,ii&&0!==(1048576&t.flags)&&ei(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var o=Io(t,Do.current);zi(t,n),o=ga(null,t,r,e,o,n);var a=xa();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$o(r)?(a=!0,_o(t)):a=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,_i(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,sl(t,r,e,n),t=Fl(null,t,r,!0,a,n)):(t.tag=0,ii&&a&&ti(t),bl(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return Ic(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===F)return 11;if(e===M)return 14}return 2}(r),e=nl(r,e),o){case 0:t=Al(null,t,r,e,n);break e;case 1:t=Cl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,nl(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,Al(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 1:return r=t.type,o=t.pendingProps,Cl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 3:e:{if(Dl(t),null===e)throw Error(i(387));r=t.pendingProps,o=(a=t.memoizedState).element,Oi(e,t),Wi(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=zl(e,t,r,n,o=cl(Error(i(423)),t));break e}if(r!==o){t=zl(e,t,r,n,o=cl(Error(i(424)),t));break e}for(oi=co(t.stateNode.containerInfo.firstChild),ri=t,ii=!0,ai=null,n=ki(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(hi(),r===o){t=Hl(e,t,n);break e}bl(e,t,r,n)}t=t.child}return t;case 5:return Ji(t),null===e&&ui(t),r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,l=o.children,no(r,o)?l=null:null!==a&&no(r,a)&&(t.flags|=32),El(e,t),bl(e,t,l,n),t.child;case 6:return null===e&&ui(t),null;case 13:return _l(e,t,n);case 4:return qi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wi(t,null,r,n):bl(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,wl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 7:return bl(e,t,t.pendingProps,n),t.child;case 8:case 12:return bl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,l=o.value,Co(Si,r._currentValue),r._currentValue=l,null!==a)if(lr(a.value,l)){if(a.children===o.children&&!zo.current){t=Hl(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){l=a.child;for(var c=s.firstContext;null!==c;){if(c.context===r){if(1===a.tag){(c=Pi(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,null!==(c=a.alternate)&&(c.lanes|=n),Di(a.return,n,t),s.lanes|=n;break}c=c.next}}else if(10===a.tag)l=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(l=a.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Di(l,n,t),l=a.sibling}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===t){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}bl(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,zi(t,n),r=r(o=Mi(o)),t.flags|=1,bl(e,t,r,n),t.child;case 14:return o=nl(r=t.type,t.pendingProps),kl(e,t,r,o=nl(r.type,o),n);case 15:return Sl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nl(r,o),Wl(e,t),t.tag=1,$o(r)?(e=!0,_o(t)):e=!1,zi(t,n),al(t,r,o),sl(t,r,o,n),Fl(null,t,r,!0,e,n);case 19:return Ul(e,t,n);case 22:return jl(e,t,n)}throw Error(i(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}function Xc(e){this._internalRoot=e}function qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"===typeof o){var l=o;o=function(){var e=Hc(a);l.call(e)}}Wc(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"===typeof r){var i=r;r=function(){var e=Hc(a);i.call(e)}}var a=Uc(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=a,e[mo]=a.current,Ur(8===e.nodeType?e.parentNode:e),uc(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var l=r;r=function(){var e=Hc(s);l.call(e)}}var s=Nc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=s,e[mo]=s.current,Ur(8===e.nodeType?e.parentNode:e),uc(function(){Wc(t,s,n,r)}),s}(n,t,e,o,r);return Hc(a)}Xc.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Wc(e,t,null,null)},Xc.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc(function(){Wc(null,e,null,null)}),t[mo]=null}},Xc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&0!==t&&t<$t[n].priority;n++);$t.splice(n,0,e),0===n&&_t(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),rc(t,Qe()),0===(6&Fs)&&(Us=Qe()+500,Wo()))}break;case 13:uc(function(){var t=Ri(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}}),Gc(e,1)}},kt=function(e){if(13===e.tag){var t=Ri(e,134217728);if(null!==t)nc(t,e,134217728,ec());Gc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Ri(e,t);if(null!==n)nc(n,e,t,ec());Gc(e,t)}},jt=function(){return yt},Et=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},ke=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ko(r);if(!o)throw Error(i(90));K(r),J(r,o)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Fe=cc,De=uc;var eu={usingClientEntryPoint:!1,Events:[bo,wo,ko,Ae,Ce,cc]},tu={findFiberByHostInstance:yo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{ot=ru.inject(nu),it=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qc(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!qc(e))throw Error(i(299));var n=!1,r="",o=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Nc(e,1,!1,null,0,n,0,r,o),e[mo]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Yc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Qc(t))throw Error(i(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!qc(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,o=!1,a="",l=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Uc(t,null,e,1,null!=n?n:null,o,0,a,l),e[mo]=t.current,Ur(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Xc(t)},t.render=function(e,t,n){if(!Qc(t))throw Error(i(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(i(40));return!!e._reactRootContainer&&(uc(function(){Zc(null,null,e,!1,function(){e._reactRootContainer=null,e[mo]=null})}),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qc(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},3102:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"Warning")},3382:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s,getFunctionName:()=>i});var r=n(528);const o=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function i(e){const t=`${e}`.match(o);return t&&t[1]||""}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.displayName||e.name||i(e)||t}function l(e,t,n){const r=a(t);return e.displayName||(""!==r?`${n}(${r})`:n)}function s(e){if(null!=e){if("string"===typeof e)return e;if("function"===typeof e)return a(e,"Component");if("object"===typeof e)switch(e.$$typeof){case r.vM:return l(e,e.render,"ForwardRef");case r.lD:return l(e,e.type,"memo");default:return}}}},3763:(e,t,n)=>{"use strict";e.exports=n(4983)},3815:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(9172);const o=function(e,t){return t?(0,r.A)(e,t,{clone:!1}):e}},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=x.prototype;var b=y.prototype=new v;b.constructor=y,m(b,x.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,i={},a=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,o)&&!j.hasOwnProperty(o)&&(i[o]=t[o]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:n,type:e,key:a,ref:l,props:i,_owner:S.current}}function A(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function F(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function D(e,t,o,i,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===i?"."+F(s,0):i,w(a)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),D(a,t,o,"",function(e){return e})):null!=a&&(A(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(s=0,i=""===i?".":i+":",w(e))for(var c=0;c<e.length;c++){var u=i+F(l=e[c],c);s+=D(l,t,o,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=D(l=l.value,t,o,u=i+F(l,c++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function z(e,t,n){if(null==e)return e;var r=[],o=0;return D(e,r,"","",function(e){return t.call(n,e,o++)}),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},$={transition:null},L={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:$,ReactCurrentOwner:S};function R(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:z,forEach:function(e,t,n){z(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return z(e,function(){t++}),t},toArray:function(e){return z(e,function(e){return e})||[]},only:function(e){if(!A(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=o,t.Profiler=a,t.PureComponent=y,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.act=R,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!j.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=A,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=R,t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.3.1"},4391:(e,t,n)=>{"use strict";var r=n(7950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},4536:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown")},4634:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4802:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},4853:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(8587),o=n(8168);const i=["values","unit","step"],a=e=>{const t=Object.keys(e).map(t=>({key:t,val:e[t]}))||[];return t.sort((e,t)=>e.val-t.val),t.reduce((e,t)=>(0,o.A)({},e,{[t.key]:t.val}),{})};function l(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:l=5}=e,s=(0,r.A)(e,i),c=a(t),u=Object.keys(c);function d(e){return`@media (min-width:${"number"===typeof t[e]?t[e]:e}${n})`}function p(e){return`@media (max-width:${("number"===typeof t[e]?t[e]:e)-l/100}${n})`}function f(e,r){const o=u.indexOf(r);return`@media (min-width:${"number"===typeof t[e]?t[e]:e}${n}) and (max-width:${(-1!==o&&"number"===typeof t[u[o]]?t[u[o]]:r)-l/100}${n})`}return(0,o.A)({keys:u,values:c,up:d,down:p,between:f,only:function(e){return u.indexOf(e)+1<u.length?f(e,u[u.indexOf(e)+1]):d(e)},not:function(e){const t=u.indexOf(e);return 0===t?d(u[1]):t===u.length-1?p(u[t]):f(e,u[u.indexOf(e)+1]).replace("@media","@media not all and")},unit:n},s)}},4893:e=>{e.exports=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n},e.exports.__esModule=!0,e.exports.default=e.exports},4914:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy")},4983:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,x=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,y=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case d:case i:case l:case a:case f:return e;default:switch(e=e&&e.$$typeof){case c:case p:case g:case m:case s:return e;default:return t}}case o:return t}}}function k(e){return w(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=s,t.Element=r,t.ForwardRef=p,t.Fragment=i,t.Lazy=g,t.Memo=m,t.Portal=o,t.Profiler=l,t.StrictMode=a,t.Suspense=f,t.isAsyncMode=function(e){return k(e)||w(e)===u},t.isConcurrentMode=k,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===l},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===d||e===l||e===a||e===f||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===p||e.$$typeof===v||e.$$typeof===y||e.$$typeof===b||e.$$typeof===x)},t.typeOf=w},4989:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A,private_createBreakpoints:()=>o.A,unstable_applyStyles:()=>i.A});var r=n(8280),o=n(4853),i=n(9703)},4994:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},5473:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess")},5502:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"}),"Cancel")},5896:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft")},6360:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},6485:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew")},6502:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward")},7162:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>l,BO:()=>a,Yn:()=>i});var r=n(7598),o=n(9751);function i(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!t||"string"!==typeof t)return null;if(e&&e.vars&&n){const n=`vars.${t}`.split(".").reduce((e,t)=>e&&e[t]?e[t]:null,e);if(null!=n)return n}return t.split(".").reduce((e,t)=>e&&null!=e[t]?e[t]:null,e)}function a(e,t,n){let r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;return r="function"===typeof e?e(n):Array.isArray(e)?e[n]||o:i(e,n)||o,t&&(r=t(r,o,e)),r}const l=function(e){const{prop:t,cssProperty:n=e.prop,themeKey:l,transform:s}=e,c=e=>{if(null==e[t])return null;const c=e[t],u=i(e.theme,l)||{};return(0,o.NI)(e,c,e=>{let o=a(u,s,e);return e===o&&"string"===typeof e&&(o=a(u,s,`${t}${"default"===e?"":(0,r.A)(e)}`,e)),!1===n?o:{[n]:o}})};return c.propTypes={},c.filterProps=[t],c}},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>i(s,n))c<o&&0>i(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<o&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,$(k);else{var t=r(u);null!==t&&L(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,v(A),A=-1),h=!0;var i=f;try{for(b(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!D());){var a=p.callback;if("function"===typeof a){p.callback=null,f=p.priorityLevel;var l=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?p.callback=l:p===r(c)&&o(c),b(n)}else o(c);p=r(c)}if(null!==p)var s=!0;else{var d=r(u);null!==d&&L(w,d.startTime-n),s=!1}return s}finally{p=null,f=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,j=!1,E=null,A=-1,C=5,F=-1;function D(){return!(t.unstable_now()-F<C)}function z(){if(null!==E){var e=t.unstable_now();F=e;var n=!0;try{n=E(!0,e)}finally{n?S():(j=!1,E=null)}}else j=!1}if("function"===typeof y)S=function(){y(z)};else if("undefined"!==typeof MessageChannel){var M=new MessageChannel,I=M.port2;M.port1.onmessage=z,S=function(){I.postMessage(null)}}else S=function(){x(z,0)};function $(e){E=e,j||(j=!0,S())}function L(e,n){A=x(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,$(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>a?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(g?(v(A),A=-1):g=!0,L(w,i-a))):(e.sortIndex=l,n(c,e),m||h||(m=!0,$(k))),e},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},7266:(e,t,n)=>{"use strict";var r=n(4994);t.e$=h,t.eM=function(e,t){const n=p(e),r=p(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)},t.a=m;var o=r(n(457)),i=r(n(9214));function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,i.default)(e,t,n)}function l(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&1===n[0].length&&(n=n.map(e=>e+e)),n?`rgb${4===n.length?"a":""}(${n.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}function s(e){if(e.type)return e;if("#"===e.charAt(0))return s(l(e));const t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(n))throw new Error((0,o.default)(9,e));let r,i=e.substring(t+1,e.length-1);if("color"===n){if(i=i.split(" "),r=i.shift(),4===i.length&&"/"===i[3].charAt(0)&&(i[3]=i[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(r))throw new Error((0,o.default)(10,r))}else i=i.split(",");return i=i.map(e=>parseFloat(e)),{type:n,values:i,colorSpace:r}}const c=e=>{const t=s(e);return t.values.slice(0,3).map((e,n)=>-1!==t.type.indexOf("hsl")&&0!==n?`${e}%`:e).join(" ")};function u(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return-1!==t.indexOf("rgb")?r=r.map((e,t)=>t<3?parseInt(e,10):e):-1!==t.indexOf("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),r=-1!==t.indexOf("color")?`${n} ${r.join(" ")}`:`${r.join(", ")}`,`${t}(${r})`}function d(e){e=s(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+n/30)%12;return o-i*Math.max(Math.min(t-3,9-t,1),-1)};let l="rgb";const c=[Math.round(255*a(0)),Math.round(255*a(8)),Math.round(255*a(4))];return"hsla"===e.type&&(l+="a",c.push(t[3])),u({type:l,values:c})}function p(e){let t="hsl"===(e=s(e)).type||"hsla"===e.type?s(d(e)).values:e.values;return t=t.map(t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function f(e,t){return e=s(e),t=a(t),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,u(e)}function h(e,t){if(e=s(e),t=a(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return u(e)}function m(e,t){if(e=s(e),t=a(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return u(e)}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15;return p(e)>.5?h(e,t):m(e,t)}},7324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var c=i[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(o=n?n.call(r,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},7598:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(7868);function o(e){if("string"!==typeof e)throw new Error((0,r.A)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},7749:(e,t,n)=>{"use strict";n.r(t),n.d(t,{capitalize:()=>i,createChainedFunction:()=>a,createSvgIcon:()=>ue,debounce:()=>de,deprecatedPropType:()=>pe,isMuiElement:()=>fe,ownerDocument:()=>me,ownerWindow:()=>ge,requirePropFactory:()=>xe,setRef:()=>ye,unstable_ClassNameGenerator:()=>Pe,unstable_useEnhancedEffect:()=>we,unstable_useId:()=>je,unsupportedProp:()=>Ee,useControlled:()=>Ae,useEventCallback:()=>Ce,useForkRef:()=>Fe,useIsFocusVisible:()=>Oe});const r=e=>e,o=(()=>{let e=r;return{configure(t){e=t},generate:t=>e(t),reset(){e=r}}})();const i=n(7598).A;const a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((e,t)=>null==t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)},()=>{})};var l=n(8168),s=n(5043),c=n.t(s,2),u=n(8587);function d(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=d(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const p=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=d(e))&&(r&&(r+=" "),r+=t);return r};function f(e,t){const n=(0,l.A)({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=(0,l.A)({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},i&&Object.keys(i)?o&&Object.keys(o)?(n[r]=(0,l.A)({},i),Object.keys(o).forEach(e=>{n[r][e]=f(o[e],i[e])})):n[r]=i:n[r]=o}else void 0===n[r]&&(n[r]=e[r])}),n}var h=n(579);const m=s.createContext(void 0);function g(e){let{props:t,name:n}=e;return function(e){const{theme:t,name:n,props:r}=e;if(!t||!t.components||!t.components[n])return r;const o=t.components[n];return o.defaultProps?f(o.defaultProps,r):o.styleOverrides||o.variants?r:f(o,r)}({props:t,name:n,theme:{components:s.useContext(m)}})}var x=n(8052),v=n(7868),y=n(9172),b=n(7758),w=n(8812),k=n(8280);var S=n(7266);const j={black:"#000",white:"#fff"},E={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},A={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},C={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},F={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},D={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},z={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},M={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},I=["mode","contrastThreshold","tonalOffset"],$={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:j.white,default:j.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},L={text:{primary:j.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:j.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function R(e,t,n,r){const o=r.light||r,i=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=(0,S.a)(e.main,o):"dark"===t&&(e.dark=(0,S.e$)(e.main,i)))}function T(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=(0,u.A)(e,I),i=e.primary||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:D[200],light:D[50],dark:D[400]}:{main:D[700],light:D[400],dark:D[800]}}(t),a=e.secondary||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:A[200],light:A[50],dark:A[400]}:{main:A[500],light:A[300],dark:A[700]}}(t),s=e.error||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:C[500],light:C[300],dark:C[700]}:{main:C[700],light:C[400],dark:C[800]}}(t),c=e.info||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:z[400],light:z[300],dark:z[700]}:{main:z[700],light:z[500],dark:z[900]}}(t),d=e.success||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:M[400],light:M[300],dark:M[700]}:{main:M[800],light:M[500],dark:M[900]}}(t),p=e.warning||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:F[400],light:F[300],dark:F[700]}:{main:"#ed6c02",light:F[500],dark:F[900]}}(t);function f(e){return(0,S.eM)(e,L.text.primary)>=n?L.text.primary:$.text.primary}const h=e=>{let{color:t,name:n,mainShade:o=500,lightShade:i=300,darkShade:a=700}=e;if(t=(0,l.A)({},t),!t.main&&t[o]&&(t.main=t[o]),!t.hasOwnProperty("main"))throw new Error((0,v.A)(11,n?` (${n})`:"",o));if("string"!==typeof t.main)throw new Error((0,v.A)(12,n?` (${n})`:"",JSON.stringify(t.main)));return R(t,"light",i,r),R(t,"dark",a,r),t.contrastText||(t.contrastText=f(t.main)),t},m={dark:L,light:$};return(0,y.A)((0,l.A)({common:(0,l.A)({},j),mode:t,primary:h({color:i,name:"primary"}),secondary:h({color:a,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:h({color:s,name:"error"}),warning:h({color:p,name:"warning"}),info:h({color:c,name:"info"}),success:h({color:d,name:"success"}),grey:E,contrastThreshold:n,getContrastText:f,augmentColor:h,tonalOffset:r},m[t]),o)}const _=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];const O={textTransform:"uppercase"},P='"Roboto", "Helvetica", "Arial", sans-serif';function N(e,t){const n="function"===typeof t?t(e):t,{fontFamily:r=P,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:a=400,fontWeightMedium:s=500,fontWeightBold:c=700,htmlFontSize:d=16,allVariants:p,pxToRem:f}=n,h=(0,u.A)(n,_);const m=o/14,g=f||(e=>e/d*m+"rem"),x=(e,t,n,o,i)=>{return(0,l.A)({fontFamily:r,fontWeight:e,fontSize:g(t),lineHeight:n},r===P?{letterSpacing:(a=o/t,Math.round(1e5*a)/1e5)+"em"}:{},i,p);var a},v={h1:x(i,96,1.167,-1.5),h2:x(i,60,1.2,-.5),h3:x(a,48,1.167,0),h4:x(a,34,1.235,.25),h5:x(a,24,1.334,0),h6:x(s,20,1.6,.15),subtitle1:x(a,16,1.75,.15),subtitle2:x(s,14,1.57,.1),body1:x(a,16,1.5,.15),body2:x(a,14,1.43,.15),button:x(s,14,1.75,.4,O),caption:x(a,12,1.66,.4),overline:x(a,12,2.66,1,O),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return(0,y.A)((0,l.A)({htmlFontSize:d,pxToRem:g,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:a,fontWeightMedium:s,fontWeightBold:c},v),h,{clone:!1})}function B(){return[`${arguments.length<=0?void 0:arguments[0]}px ${arguments.length<=1?void 0:arguments[1]}px ${arguments.length<=2?void 0:arguments[2]}px ${arguments.length<=3?void 0:arguments[3]}px rgba(0,0,0,0.2)`,`${arguments.length<=4?void 0:arguments[4]}px ${arguments.length<=5?void 0:arguments[5]}px ${arguments.length<=6?void 0:arguments[6]}px ${arguments.length<=7?void 0:arguments[7]}px rgba(0,0,0,0.14)`,`${arguments.length<=8?void 0:arguments[8]}px ${arguments.length<=9?void 0:arguments[9]}px ${arguments.length<=10?void 0:arguments[10]}px ${arguments.length<=11?void 0:arguments[11]}px rgba(0,0,0,0.12)`].join(",")}const U=["none",B(0,2,1,-1,0,1,1,0,0,1,3,0),B(0,3,1,-2,0,2,2,0,0,1,5,0),B(0,3,3,-2,0,3,4,0,0,1,8,0),B(0,2,4,-1,0,4,5,0,0,1,10,0),B(0,3,5,-1,0,5,8,0,0,1,14,0),B(0,3,5,-1,0,6,10,0,0,1,18,0),B(0,4,5,-2,0,7,10,1,0,2,16,1),B(0,5,5,-3,0,8,10,1,0,3,14,2),B(0,5,6,-3,0,9,12,1,0,3,16,2),B(0,6,6,-3,0,10,14,1,0,4,18,3),B(0,6,7,-4,0,11,15,1,0,4,20,3),B(0,7,8,-4,0,12,17,2,0,5,22,4),B(0,7,8,-4,0,13,19,2,0,5,24,4),B(0,7,9,-4,0,14,21,2,0,5,26,4),B(0,8,9,-5,0,15,22,2,0,6,28,5),B(0,8,10,-5,0,16,24,2,0,6,30,5),B(0,8,11,-5,0,17,26,2,0,6,32,5),B(0,9,11,-5,0,18,28,2,0,7,34,6),B(0,9,12,-6,0,19,29,2,0,7,36,6),B(0,10,13,-6,0,20,31,3,0,8,38,7),B(0,10,13,-6,0,21,33,3,0,8,40,7),B(0,10,14,-6,0,22,35,3,0,8,42,7),B(0,11,14,-7,0,23,36,3,0,9,44,8),B(0,11,15,-7,0,24,38,3,0,9,46,8)],W=["duration","easing","delay"],H={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},V={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function G(e){return`${Math.round(e)}ms`}function K(e){if(!e)return 0;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}function Y(e){const t=(0,l.A)({},H,e.easing),n=(0,l.A)({},V,e.duration);return(0,l.A)({getAutoHeightDuration:K,create:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{duration:o=n.standard,easing:i=t.easeInOut,delay:a=0}=r;(0,u.A)(r,W);return(Array.isArray(e)?e:[e]).map(e=>`${e} ${"string"===typeof o?o:G(o)} ${i} ${"string"===typeof a?a:G(a)}`).join(",")}},e,{easing:t,duration:n})}const X={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},q=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{mixins:t={},palette:n={},transitions:r={},typography:o={}}=e,i=(0,u.A)(e,q);if(e.vars&&void 0===e.generateCssVars)throw new Error((0,v.A)(18));const a=T(n),s=(0,k.A)(e);let c=(0,y.A)(s,{mixins:(d=s.breakpoints,p=t,(0,l.A)({toolbar:{minHeight:56,[d.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[d.up("sm")]:{minHeight:64}}},p)),palette:a,shadows:U.slice(),typography:N(a,o),transitions:Y(r),zIndex:(0,l.A)({},X)});var d,p;c=(0,y.A)(c,i);for(var f=arguments.length,h=new Array(f>1?f-1:0),m=1;m<f;m++)h[m-1]=arguments[m];return c=h.reduce((e,t)=>(0,y.A)(e,t),c),c.unstable_sxConfig=(0,l.A)({},b.A,null==i?void 0:i.unstable_sxConfig),c.unstable_sx=function(e){return(0,w.A)({sx:e,theme:this})},c}const J=Q();const Z=function(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e},ee=e=>Z(e)&&"classes"!==e,te=(0,x.Ay)({themeId:"$$material",defaultTheme:J,rootShouldForwardProp:ee}),ne={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function re(e,t){const n=ne[t];return n?`${arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui"}-${n}`:`${o.generate(e)}-${t}`}function oe(e){return re("MuiSvgIcon",e)}!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui";const r={};t.forEach(t=>{r[t]=re(e,t,n)})}("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const ie=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],ae=e=>{const{color:t,fontSize:n,classes:r}=e;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((e,r)=>{if(r){const o=t(r);""!==o&&e.push(o),n&&n[r]&&e.push(n[r])}return e},[]).join(" ")}),r}({root:["root","inherit"!==t&&`color${i(t)}`,`fontSize${i(n)}`]},oe,r)},le=te("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${i(n.color)}`],t[`fontSize${i(n.fontSize)}`]]}})(e=>{let{theme:t,ownerState:n}=e;var r,o,i,a,l,s,c,u,d,p,f,h,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:n.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(r=t.transitions)||null==(o=r.create)?void 0:o.call(r,"fill",{duration:null==(i=t.transitions)||null==(i=i.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(a=t.typography)||null==(l=a.pxToRem)?void 0:l.call(a,20))||"1.25rem",medium:(null==(s=t.typography)||null==(c=s.pxToRem)?void 0:c.call(s,24))||"1.5rem",large:(null==(u=t.typography)||null==(d=u.pxToRem)?void 0:d.call(u,35))||"2.1875rem"}[n.fontSize],color:null!=(p=null==(f=(t.vars||t).palette)||null==(f=f[n.color])?void 0:f.main)?p:{action:null==(h=(t.vars||t).palette)||null==(h=h.action)?void 0:h.active,disabled:null==(m=(t.vars||t).palette)||null==(m=m.action)?void 0:m.disabled,inherit:void 0}[n.color]}}),se=s.forwardRef(function(e,t){const n=g({props:e,name:"MuiSvgIcon"});const{children:r,className:o,color:i="inherit",component:a="svg",fontSize:c="medium",htmlColor:d,inheritViewBox:f=!1,titleAccess:m,viewBox:x="0 0 24 24"}=n,v=(0,u.A)(n,ie),y=s.isValidElement(r)&&"svg"===r.type,b=(0,l.A)({},n,{color:i,component:a,fontSize:c,instanceFontSize:e.fontSize,inheritViewBox:f,viewBox:x,hasSvgAsChild:y}),w={};f||(w.viewBox=x);const k=ae(b);return(0,h.jsxs)(le,(0,l.A)({as:a,className:p(k.root,o),focusable:"false",color:d,"aria-hidden":!m||void 0,role:m?"img":void 0,ref:t},w,v,y&&r.props,{ownerState:b,children:[y?r.props.children:r,m?(0,h.jsx)("title",{children:m}):null]}))});se.muiName="SvgIcon";const ce=se;function ue(e,t){function n(n,r){return(0,h.jsx)(ce,(0,l.A)({"data-testid":`${t}Icon`,ref:r},n,{children:e}))}return n.muiName=ce.muiName,s.memo(s.forwardRef(n))}const de=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];clearTimeout(t),t=setTimeout(()=>{e.apply(this,o)},n)}return r.clear=()=>{clearTimeout(t)},r};const pe=function(e,t){return()=>null};const fe=function(e,t){var n,r;return s.isValidElement(e)&&-1!==t.indexOf(null!=(n=e.type.muiName)?n:null==(r=e.type)||null==(r=r._payload)||null==(r=r.value)?void 0:r.muiName)};function he(e){return e&&e.ownerDocument||document}const me=he;const ge=function(e){return he(e).defaultView||window};const xe=function(e,t){return()=>null};function ve(e,t){"function"===typeof e?e(t):e&&(e.current=t)}const ye=ve,be="undefined"!==typeof window?s.useLayoutEffect:s.useEffect,we=be;let ke=0;const Se=c["useId".toString()];const je=function(e){if(void 0!==Se){const t=Se();return null!=e?e:t}return function(e){const[t,n]=s.useState(e),r=e||t;return s.useEffect(()=>{null==t&&(ke+=1,n(`mui-${ke}`))},[t]),r}(e)};const Ee=function(e,t,n,r,o){return null};const Ae=function(e){let{controlled:t,default:n,name:r,state:o="value"}=e;const{current:i}=s.useRef(void 0!==t),[a,l]=s.useState(n);return[i?t:a,s.useCallback(e=>{i||l(e)},[])]};const Ce=function(e){const t=s.useRef(e);return be(()=>{t.current=e}),s.useRef(function(){return(0,t.current)(...arguments)}).current};const Fe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s.useMemo(()=>t.every(e=>null==e)?null:e=>{t.forEach(t=>{ve(t,e)})},t)};class De{constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new De}start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}}let ze=!0,Me=!1;const Ie=new De,$e={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Le(e){e.metaKey||e.altKey||e.ctrlKey||(ze=!0)}function Re(){ze=!1}function Te(){"hidden"===this.visibilityState&&Me&&(ze=!0)}function _e(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return ze||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!$e[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}const Oe=function(){const e=s.useCallback(e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",Le,!0),t.addEventListener("mousedown",Re,!0),t.addEventListener("pointerdown",Re,!0),t.addEventListener("touchstart",Re,!0),t.addEventListener("visibilitychange",Te,!0))},[]),t=s.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!_e(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(Me=!0,Ie.start(100,()=>{Me=!1}),t.current=!1,!0)},ref:e}},Pe={configure:e=>{o.configure(e)}}},7758:(e,t,n)=>{"use strict";n.d(t,{A:()=>L});var r=n(8604),o=n(7162),i=n(3815);const a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce((e,t)=>(t.filterProps.forEach(n=>{e[n]=t}),e),{}),o=e=>Object.keys(e).reduce((t,n)=>r[n]?(0,i.A)(t,r[n](e)):t,{});return o.propTypes={},o.filterProps=t.reduce((e,t)=>e.concat(t.filterProps),[]),o};var l=n(9751);function s(e){return"number"!==typeof e?e:`${e}px solid`}function c(e,t){return(0,o.Ay)({prop:e,themeKey:"borders",transform:t})}const u=c("border",s),d=c("borderTop",s),p=c("borderRight",s),f=c("borderBottom",s),h=c("borderLeft",s),m=c("borderColor"),g=c("borderTopColor"),x=c("borderRightColor"),v=c("borderBottomColor"),y=c("borderLeftColor"),b=c("outline",s),w=c("outlineColor"),k=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){const t=(0,r.MA)(e.theme,"shape.borderRadius",4,"borderRadius"),n=e=>({borderRadius:(0,r._W)(t,e)});return(0,l.NI)(e,e.borderRadius,n)}return null};k.propTypes={},k.filterProps=["borderRadius"];a(u,d,p,f,h,m,g,x,v,y,k,b,w);const S=e=>{if(void 0!==e.gap&&null!==e.gap){const t=(0,r.MA)(e.theme,"spacing",8,"gap"),n=e=>({gap:(0,r._W)(t,e)});return(0,l.NI)(e,e.gap,n)}return null};S.propTypes={},S.filterProps=["gap"];const j=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){const t=(0,r.MA)(e.theme,"spacing",8,"columnGap"),n=e=>({columnGap:(0,r._W)(t,e)});return(0,l.NI)(e,e.columnGap,n)}return null};j.propTypes={},j.filterProps=["columnGap"];const E=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){const t=(0,r.MA)(e.theme,"spacing",8,"rowGap"),n=e=>({rowGap:(0,r._W)(t,e)});return(0,l.NI)(e,e.rowGap,n)}return null};E.propTypes={},E.filterProps=["rowGap"];a(S,j,E,(0,o.Ay)({prop:"gridColumn"}),(0,o.Ay)({prop:"gridRow"}),(0,o.Ay)({prop:"gridAutoFlow"}),(0,o.Ay)({prop:"gridAutoColumns"}),(0,o.Ay)({prop:"gridAutoRows"}),(0,o.Ay)({prop:"gridTemplateColumns"}),(0,o.Ay)({prop:"gridTemplateRows"}),(0,o.Ay)({prop:"gridTemplateAreas"}),(0,o.Ay)({prop:"gridArea"}));function A(e,t){return"grey"===t?t:e}a((0,o.Ay)({prop:"color",themeKey:"palette",transform:A}),(0,o.Ay)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:A}),(0,o.Ay)({prop:"backgroundColor",themeKey:"palette",transform:A}));function C(e){return e<=1&&0!==e?100*e+"%":e}const F=(0,o.Ay)({prop:"width",transform:C}),D=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){const t=t=>{var n,r;const o=(null==(n=e.theme)||null==(n=n.breakpoints)||null==(n=n.values)?void 0:n[t])||l.zu[t];return o?"px"!==(null==(r=e.theme)||null==(r=r.breakpoints)?void 0:r.unit)?{maxWidth:`${o}${e.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:C(t)}};return(0,l.NI)(e,e.maxWidth,t)}return null};D.filterProps=["maxWidth"];const z=(0,o.Ay)({prop:"minWidth",transform:C}),M=(0,o.Ay)({prop:"height",transform:C}),I=(0,o.Ay)({prop:"maxHeight",transform:C}),$=(0,o.Ay)({prop:"minHeight",transform:C}),L=((0,o.Ay)({prop:"size",cssProperty:"width",transform:C}),(0,o.Ay)({prop:"size",cssProperty:"height",transform:C}),a(F,D,z,M,I,$,(0,o.Ay)({prop:"boxSizing"})),{border:{themeKey:"borders",transform:s},borderTop:{themeKey:"borders",transform:s},borderRight:{themeKey:"borders",transform:s},borderBottom:{themeKey:"borders",transform:s},borderLeft:{themeKey:"borders",transform:s},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:s},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:k},color:{themeKey:"palette",transform:A},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:A},backgroundColor:{themeKey:"palette",transform:A},p:{style:r.Ms},pt:{style:r.Ms},pr:{style:r.Ms},pb:{style:r.Ms},pl:{style:r.Ms},px:{style:r.Ms},py:{style:r.Ms},padding:{style:r.Ms},paddingTop:{style:r.Ms},paddingRight:{style:r.Ms},paddingBottom:{style:r.Ms},paddingLeft:{style:r.Ms},paddingX:{style:r.Ms},paddingY:{style:r.Ms},paddingInline:{style:r.Ms},paddingInlineStart:{style:r.Ms},paddingInlineEnd:{style:r.Ms},paddingBlock:{style:r.Ms},paddingBlockStart:{style:r.Ms},paddingBlockEnd:{style:r.Ms},m:{style:r.Lc},mt:{style:r.Lc},mr:{style:r.Lc},mb:{style:r.Lc},ml:{style:r.Lc},mx:{style:r.Lc},my:{style:r.Lc},margin:{style:r.Lc},marginTop:{style:r.Lc},marginRight:{style:r.Lc},marginBottom:{style:r.Lc},marginLeft:{style:r.Lc},marginX:{style:r.Lc},marginY:{style:r.Lc},marginInline:{style:r.Lc},marginInlineStart:{style:r.Lc},marginInlineEnd:{style:r.Lc},marginBlock:{style:r.Lc},marginBlockStart:{style:r.Lc},marginBlockEnd:{style:r.Lc},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:S},rowGap:{style:E},columnGap:{style:j},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:C},maxWidth:{style:D},minWidth:{transform:C},height:{transform:C},maxHeight:{transform:C},minHeight:{transform:C},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}})},7868:(e,t,n)=>{"use strict";function r(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}n.d(t,{A:()=>r})},7918:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A});var r=n(7598)},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},8052:(e,t,n)=>{"use strict";var r=n(4994);t.Ay=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:n=g,rootShouldForwardProp:r=h,slotShouldForwardProp:s=h}=e,u=e=>(0,c.default)((0,o.default)({},e,{theme:v((0,o.default)({},e,{defaultTheme:n,themeId:t}))}));return u.__mui_systemSx=!0,function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,a.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));const{name:d,slot:f,skipVariantsResolver:m,skipSx:g,overridesResolver:w=y(x(f))}=c,k=(0,i.default)(c,p),S=d&&d.startsWith("Mui")||f?"components":"custom",j=void 0!==m?m:f&&"Root"!==f&&"root"!==f||!1,E=g||!1;let A=h;"Root"===f||"root"===f?A=r:f?A=s:function(e){return"string"===typeof e&&e.charCodeAt(0)>96}(e)&&(A=void 0);const C=(0,a.default)(e,(0,o.default)({shouldForwardProp:A,label:undefined},k)),F=e=>"function"===typeof e&&e.__emotion_real!==e||(0,l.isPlainObject)(e)?r=>{const i=v({theme:r.theme,defaultTheme:n,themeId:t});return b(e,(0,o.default)({},r,{theme:i}),i.modularCssLayers?S:void 0)}:e,D=function(r){let i=F(r);for(var a=arguments.length,l=new Array(a>1?a-1:0),s=1;s<a;s++)l[s-1]=arguments[s];const c=l?l.map(F):[];d&&w&&c.push(e=>{const r=v((0,o.default)({},e,{defaultTheme:n,themeId:t}));if(!r.components||!r.components[d]||!r.components[d].styleOverrides)return null;const i=r.components[d].styleOverrides,a={};return Object.entries(i).forEach(t=>{let[n,i]=t;a[n]=b(i,(0,o.default)({},e,{theme:r}),r.modularCssLayers?"theme":void 0)}),w(e,a)}),d&&!j&&c.push(e=>{var r;const i=v((0,o.default)({},e,{defaultTheme:n,themeId:t}));return b({variants:null==i||null==(r=i.components)||null==(r=r[d])?void 0:r.variants},(0,o.default)({},e,{theme:i}),i.modularCssLayers?"theme":void 0)}),E||c.push(u);const p=c.length-l.length;if(Array.isArray(r)&&p>0){const e=new Array(p).fill("");i=[...r,...e],i.raw=[...r.raw,...e]}const f=C(i,...c);return e.muiName&&(f.muiName=e.muiName),f};return C.withConfig&&(D.withConfig=C.withConfig),D}};var o=r(n(4634)),i=r(n(4893)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}(n(1602)),l=n(9482),s=(r(n(7918)),r(n(3382)),r(n(4989))),c=r(n(9265));const u=["ownerState"],d=["variants"],p=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function h(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}function m(e,t){return t&&e&&"object"===typeof e&&e.styles&&!e.styles.startsWith("@layer")&&(e.styles=`@layer ${t}{${String(e.styles)}}`),e}const g=(0,s.default)(),x=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function v(e){let{defaultTheme:t,theme:n,themeId:r}=e;return o=n,0===Object.keys(o).length?t:n[r]||n;var o}function y(e){return e?(t,n)=>n[e]:null}function b(e,t,n){let{ownerState:r}=t,l=(0,i.default)(t,u);const s="function"===typeof e?e((0,o.default)({ownerState:r},l)):e;if(Array.isArray(s))return s.flatMap(e=>b(e,(0,o.default)({ownerState:r},l),n));if(s&&"object"===typeof s&&Array.isArray(s.variants)){const{variants:e=[]}=s;let t=(0,i.default)(s,d);return e.forEach(e=>{let i=!0;if("function"===typeof e.props?i=e.props((0,o.default)({ownerState:r},l,r)):Object.keys(e.props).forEach(t=>{(null==r?void 0:r[t])!==e.props[t]&&l[t]!==e.props[t]&&(i=!1)}),i){Array.isArray(t)||(t=[t]);const i="function"===typeof e.style?e.style((0,o.default)({ownerState:r},l,r)):e.style;t.push(n?m((0,a.internal_serializeStyles)(i),n):i)}}),t}return n?m((0,a.internal_serializeStyles)(s),n):s}},8168:(e,t,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(null,arguments)}n.d(t,{A:()=>r})},8280:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var r=n(8168),o=n(8587),i=n(9172),a=n(4853);const l={borderRadius:4};var s=n(8604);var c=n(8812),u=n(7758),d=n(9703);const p=["breakpoints","palette","spacing","shape"];const f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{breakpoints:t={},palette:n={},spacing:f,shape:h={}}=e,m=(0,o.A)(e,p),g=(0,a.A)(t),x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(e.mui)return e;const t=(0,s.LX)({spacing:e}),n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0===n.length?[1]:n).map(e=>{const n=t(e);return"number"===typeof n?`${n}px`:n}).join(" ")};return n.mui=!0,n}(f);let v=(0,i.A)({breakpoints:g,direction:"ltr",components:{},palette:(0,r.A)({mode:"light"},n),spacing:x,shape:(0,r.A)({},l,h)},m);v.applyStyles=d.A;for(var y=arguments.length,b=new Array(y>1?y-1:0),w=1;w<y;w++)b[w-1]=arguments[w];return v=b.reduce((e,t)=>(0,i.A)(e,t),v),v.unstable_sxConfig=(0,r.A)({},u.A,null==m?void 0:m.unstable_sxConfig),v.unstable_sx=function(e){return(0,c.A)({sx:e,theme:this})},v}},8348:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"}),"Info")},8587:(e,t,n)=>{"use strict";function r(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}n.d(t,{A:()=>r})},8604:(e,t,n)=>{"use strict";n.d(t,{LX:()=>h,MA:()=>f,_W:()=>m,Lc:()=>v,Ms:()=>y});var r=n(9751),o=n(7162),i=n(3815);const a={m:"margin",p:"padding"},l={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},s={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},c=function(e){const t={};return n=>(void 0===t[n]&&(t[n]=e(n)),t[n])}(e=>{if(e.length>2){if(!s[e])return[e];e=s[e]}const[t,n]=e.split(""),r=a[t],o=l[n]||"";return Array.isArray(o)?o.map(e=>r+e):[r+o]}),u=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],d=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],p=[...u,...d];function f(e,t,n,r){var i;const a=null!=(i=(0,o.Yn)(e,t,!1))?i:n;return"number"===typeof a?e=>"string"===typeof e?e:a*e:Array.isArray(a)?e=>"string"===typeof e?e:a[e]:"function"===typeof a?a:()=>{}}function h(e){return f(e,"spacing",8)}function m(e,t){if("string"===typeof t||null==t)return t;const n=e(Math.abs(t));return t>=0?n:"number"===typeof n?-n:`-${n}`}function g(e,t,n,o){if(-1===t.indexOf(n))return null;const i=function(e,t){return n=>e.reduce((e,r)=>(e[r]=m(t,n),e),{})}(c(n),o),a=e[n];return(0,r.NI)(e,a,i)}function x(e,t){const n=h(e.theme);return Object.keys(e).map(r=>g(e,t,r,n)).reduce(i.A,{})}function v(e){return x(e,u)}function y(e){return x(e,d)}function b(e){return x(e,p)}v.propTypes={},v.filterProps=u,y.propTypes={},y.filterProps=d,b.propTypes={},b.filterProps=p},8812:(e,t,n)=>{"use strict";n.d(t,{A:()=>u,k:()=>s});var r=n(7598),o=n(3815),i=n(7162),a=n(9751),l=n(7758);function s(){function e(e,t,n,o){const l={[e]:t,theme:n},s=o[e];if(!s)return{[e]:t};const{cssProperty:c=e,themeKey:u,transform:d,style:p}=s;if(null==t)return null;if("typography"===u&&"inherit"===t)return{[e]:t};const f=(0,i.Yn)(n,u)||{};if(p)return p(l);return(0,a.NI)(l,t,t=>{let n=(0,i.BO)(f,d,t);return t===n&&"string"===typeof t&&(n=(0,i.BO)(f,d,`${e}${"default"===t?"":(0,r.A)(t)}`,t)),!1===c?n:{[c]:n}})}return function t(n){var r;const{sx:i,theme:s={},nested:c}=n||{};if(!i)return null;const u=null!=(r=s.unstable_sxConfig)?r:l.A;function d(n){let r=n;if("function"===typeof n)r=n(s);else if("object"!==typeof n)return n;if(!r)return null;const i=(0,a.EU)(s.breakpoints),l=Object.keys(i);let d=i;return Object.keys(r).forEach(n=>{const i=(l=r[n],c=s,"function"===typeof l?l(c):l);var l,c;if(null!==i&&void 0!==i)if("object"===typeof i)if(u[n])d=(0,o.A)(d,e(n,i,s,u));else{const e=(0,a.NI)({theme:s},i,e=>({[n]:e}));!function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce((e,t)=>e.concat(Object.keys(t)),[]),o=new Set(r);return t.every(e=>o.size===Object.keys(e).length)}(e,i)?d=(0,o.A)(d,e):d[n]=t({sx:i,theme:s,nested:!0})}else d=(0,o.A)(d,e(n,i,s,u))}),!c&&s.modularCssLayers?{"@layer sx":(0,a.vf)(l,d)}:(0,a.vf)(l,d)}return Array.isArray(i)?i.map(d):d(i)}}const c=s();c.filterProps=["sx"];const u=c},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},9172:(e,t,n)=>{"use strict";n.d(t,{A:()=>l,Q:()=>i});var r=n(8168),o=n(5043);function i(e){if("object"!==typeof e||null===e)return!1;const t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function a(e){if(o.isValidElement(e)||!i(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=a(e[n])}),t}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{clone:!0};const s=n.clone?(0,r.A)({},e):e;return i(e)&&i(t)&&Object.keys(t).forEach(r=>{o.isValidElement(t[r])?s[r]=t[r]:i(t[r])&&Object.prototype.hasOwnProperty.call(e,r)&&i(e[r])?s[r]=l(e[r],t[r],n):n.clone?s[r]=i(t[r])?a(t[r]):t[r]:s[r]=t[r]}),s}},9214:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MIN_SAFE_INTEGER,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Number.MAX_SAFE_INTEGER;return Math.max(t,Math.min(e,n))}},9265:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A,extendSxProp:()=>u,unstable_createStyleFunctionSx:()=>r.k,unstable_defaultSxConfig:()=>l.A});var r=n(8812),o=n(8168),i=n(8587),a=n(9172),l=n(7758);const s=["sx"],c=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:l.A;return Object.keys(e).forEach(t=>{o[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]}),r};function u(e){const{sx:t}=e,n=(0,i.A)(e,s),{systemProps:r,otherProps:l}=c(n);let u;return u=Array.isArray(t)?[r,...t]:"function"===typeof t?function(){const e=t(...arguments);return(0,a.Q)(e)?(0,o.A)({},r,e):r}:(0,o.A)({},r,t),(0,o.A)({},l,{sx:u})}},9482:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A,isPlainObject:()=>r.Q});var r=n(9172)},9611:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu")},9703:(e,t,n)=>{"use strict";function r(e,t){const n=this;if(n.vars&&"function"===typeof n.getColorSchemeSelector){const r=n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)");return{[r]:t}}return n.palette.mode===e?t:{}}n.d(t,{A:()=>r})},9751:(e,t,n)=>{"use strict";n.d(t,{EU:()=>a,NI:()=>i,vf:()=>l,zu:()=>r});const r={xs:0,sm:600,md:900,lg:1200,xl:1536},o={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${r[e]}px)`};function i(e,t,n){const i=e.theme||{};if(Array.isArray(t)){const e=i.breakpoints||o;return t.reduce((r,o,i)=>(r[e.up(e.keys[i])]=n(t[i]),r),{})}if("object"===typeof t){const e=i.breakpoints||o;return Object.keys(t).reduce((o,i)=>{if(-1!==Object.keys(e.values||r).indexOf(i)){o[e.up(i)]=n(t[i],i)}else{const e=i;o[e]=t[e]}return o},{})}return n(t)}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var t;return(null==(t=e.keys)?void 0:t.reduce((t,n)=>(t[e.up(n)]={},t),{}))||{}}function l(e,t){return e.reduce((e,t)=>{const n=e[t];return(!n||0===Object.keys(n).length)&&delete e[t],e},t)}},9778:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle")},9882:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"m16.24 11.51 1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3 17.25V21h3.75l4.76-4.76 4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.45 1.45zm7.88 7.89-4.13-4.13 1.9-1.9 1.45 1.45-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27zm3.65-11.92c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83 3.75 3.75z"}),"DesignServices")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>a[e]=()=>r[e]);return a.default=()=>r,n.d(i,a),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.nc=void 0,(()=>{"use strict";var e,t=n(5043),r=n.t(t,2),o=n(4391);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const a="popstate";function l(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function s(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,t,n,r){return void 0===n&&(n=null),i({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?p(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function f(t,n,r,o){void 0===o&&(o={});let{window:s=document.defaultView,v5Compat:p=!1}=o,f=s.history,h=e.Pop,m=null,g=x();function x(){return(f.state||{idx:null}).idx}function v(){h=e.Pop;let t=x(),n=null==t?null:t-g;g=t,m&&m({action:h,location:b.location,delta:n})}function y(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"===typeof e?e:d(e);return n=n.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,f.replaceState(i({},f.state,{idx:g}),""));let b={get action(){return h},get location(){return t(s,f)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(a,v),m=e,()=>{s.removeEventListener(a,v),m=null}},createHref:e=>n(s,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let o=u(b.location,t,n);r&&r(o,t),g=x()+1;let i=c(o,g),a=b.createHref(o);try{f.pushState(i,"",a)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;s.location.assign(a)}p&&m&&m({action:h,location:b.location,delta:1})},replace:function(t,n){h=e.Replace;let o=u(b.location,t,n);r&&r(o,t),g=x();let i=c(o,g),a=b.createHref(o);f.replaceState(i,"",a),p&&m&&m({action:h,location:b.location,delta:0})},go:e=>f.go(e)};return b}var h;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(h||(h={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function m(e,t,n){return void 0===n&&(n="/"),g(e,t,n,!1)}function g(e,t,n,r){let o=z(("string"===typeof t?p(t):t).pathname||"/",n);if(null==o)return null;let i=x(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(i);let a=null;for(let l=0;null==a&&l<i.length;++l){let e=D(o);a=C(i[l],e,r)}return a}function x(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,i)=>{let a={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(l(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let s=R([r,a.relativePath]),c=n.concat(a);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),x(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:A(s,e.index),routesMeta:c})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of v(e.path))o(e,t,r);else o(e,t)}),t}function v(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=v(r.join("/")),l=[];return l.push(...a.map(e=>""===e?i:[i,e].join("/"))),o&&l.push(...a),l.map(t=>e.startsWith("/")&&""===t?"/":t)}const y=/^:[\w-]+$/,b=3,w=2,k=1,S=10,j=-2,E=e=>"*"===e;function A(e,t){let n=e.split("/"),r=n.length;return n.some(E)&&(r+=j),t&&(r+=w),n.filter(e=>!E(e)).reduce((e,t)=>e+(y.test(t)?b:""===t?k:S),r)}function C(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===i?t:t.slice(i.length)||"/",u=F({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=F({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),a.push({params:o,pathname:R([i,u.pathname]),pathnameBase:T(R([i,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(i=R([i,u.pathnameBase]))}return a}function F(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let i=new RegExp(o,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:i,pathnameBase:a,pattern:e}}function D(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function z(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function M(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function I(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function $(e,t){let n=I(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function L(e,t,n,r){let o;void 0===r&&(r=!1),"string"===typeof e?o=p(e):(o=i({},e),l(!o.pathname||!o.pathname.includes("?"),M("?","pathname","search",o)),l(!o.pathname||!o.pathname.includes("#"),M("#","pathname","hash",o)),l(!o.search||!o.search.includes("#"),M("#","search","hash",o)));let a,s=""===e||""===o.pathname,c=s?"/":o.pathname;if(null==c)a=n;else{let e=t.length-1;if(!r&&c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"===typeof e?p(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:_(r),hash:O(o)}}(o,a),d=c&&"/"!==c&&c.endsWith("/"),f=(s||"."===c)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}const R=e=>e.join("/").replace(/\/\/+/g,"/"),T=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",O=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function P(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const N=["post","put","patch","delete"],B=(new Set(N),["get",...N]);new Set(B),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}const W=t.createContext(null);const H=t.createContext(null);const V=t.createContext(null);const G=t.createContext(null);const K=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Y=t.createContext(null);function X(){return null!=t.useContext(G)}function q(){return X()||l(!1),t.useContext(G).location}function Q(e){t.useContext(V).static||t.useLayoutEffect(e)}function J(){let{isDataRoute:e}=t.useContext(K);return e?function(){let{router:e}=se(ae.UseNavigateStable),n=ue(le.UseNavigateStable),r=t.useRef(!1);return Q(()=>{r.current=!0}),t.useCallback(function(t,o){void 0===o&&(o={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,U({fromRouteId:n},o)))},[e,n])}():function(){X()||l(!1);let e=t.useContext(W),{basename:n,future:r,navigator:o}=t.useContext(V),{matches:i}=t.useContext(K),{pathname:a}=q(),s=JSON.stringify($(i,r.v7_relativeSplatPath)),c=t.useRef(!1);return Q(()=>{c.current=!0}),t.useCallback(function(t,r){if(void 0===r&&(r={}),!c.current)return;if("number"===typeof t)return void o.go(t);let i=L(t,JSON.parse(s),a,"path"===r.relative);null==e&&"/"!==n&&(i.pathname="/"===i.pathname?n:R([n,i.pathname])),(r.replace?o.replace:o.push)(i,r.state,r)},[n,o,s,a,e])}()}function Z(e,n){let{relative:r}=void 0===n?{}:n,{future:o}=t.useContext(V),{matches:i}=t.useContext(K),{pathname:a}=q(),l=JSON.stringify($(i,o.v7_relativeSplatPath));return t.useMemo(()=>L(e,JSON.parse(l),a,"path"===r),[e,l,a,r])}function ee(n,r,o,i){X()||l(!1);let{navigator:a}=t.useContext(V),{matches:s}=t.useContext(K),c=s[s.length-1],u=c?c.params:{},d=(c&&c.pathname,c?c.pathnameBase:"/");c&&c.route;let f,h=q();if(r){var g;let e="string"===typeof r?p(r):r;"/"===d||(null==(g=e.pathname)?void 0:g.startsWith(d))||l(!1),f=e}else f=h;let x=f.pathname||"/",v=x;if("/"!==d){let e=d.replace(/^\//,"").split("/");v="/"+x.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=m(n,{pathname:v});let b=ie(y&&y.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:R([d,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:R([d,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),s,o,i);return r&&b?t.createElement(G.Provider,{value:{location:U({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},b):b}function te(){let e=function(){var e;let n=t.useContext(Y),r=ce(le.UseRouteError),o=ue(le.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[o]}(),n=P(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:i},r):null,null)}const ne=t.createElement(te,null);class re extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(K.Provider,{value:this.props.routeContext},t.createElement(Y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oe(e){let{routeContext:n,match:r,children:o}=e,i=t.useContext(W);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(K.Provider,{value:n},o)}function ie(e,n,r,o){var i;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===o&&(o=null),null==e){var a;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(a=o)&&a.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,c=null==(i=r)?void 0:i.errors;if(null!=c){let e=s.findIndex(e=>e.route.id&&void 0!==(null==c?void 0:c[e.route.id]));e>=0||l(!1),s=s.slice(0,Math.min(s.length,e+1))}let u=!1,d=-1;if(r&&o&&o.v7_partialHydration)for(let t=0;t<s.length;t++){let e=s[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,o=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||o){u=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight((e,o,i)=>{let a,l=!1,p=null,f=null;var h;r&&(a=c&&o.route.id?c[o.route.id]:void 0,p=o.route.errorElement||ne,u&&(d<0&&0===i?(h="route-fallback",!1||de[h]||(de[h]=!0),l=!0,f=null):d===i&&(l=!0,f=o.route.hydrateFallbackElement||null)));let m=n.concat(s.slice(0,i+1)),g=()=>{let n;return n=a?p:l?f:o.route.Component?t.createElement(o.route.Component,null):o.route.element?o.route.element:e,t.createElement(oe,{match:o,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===i)?t.createElement(re,{location:r.location,revalidation:r.revalidation,component:p,error:a,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var ae=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ae||{}),le=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(le||{});function se(e){let n=t.useContext(W);return n||l(!1),n}function ce(e){let n=t.useContext(H);return n||l(!1),n}function ue(e){let n=function(){let e=t.useContext(K);return e||l(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||l(!1),r.route.id}const de={};function pe(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function fe(e){l(!1)}function he(n){let{basename:r="/",children:o=null,location:i,navigationType:a=e.Pop,navigator:s,static:c=!1,future:u}=n;X()&&l(!1);let d=r.replace(/^\/*/,"/"),f=t.useMemo(()=>({basename:d,navigator:s,static:c,future:U({v7_relativeSplatPath:!1},u)}),[d,u,s,c]);"string"===typeof i&&(i=p(i));let{pathname:h="/",search:m="",hash:g="",state:x=null,key:v="default"}=i,y=t.useMemo(()=>{let e=z(h,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:x,key:v},navigationType:a}},[d,h,m,g,x,v,a]);return null==y?null:t.createElement(V.Provider,{value:f},t.createElement(G.Provider,{children:o,value:y}))}function me(e){let{children:t,location:n}=e;return function(e,t){return ee(e,t)}(ge(t),n)}new Promise(()=>{});t.Component;function ge(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,(e,o)=>{if(!t.isValidElement(e))return;let i=[...n,o];if(e.type===t.Fragment)return void r.push.apply(r,ge(e.props.children,i));e.type!==fe&&l(!1),e.props.index&&e.props.children&&l(!1);let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=ge(e.props.children,i)),r.push(a)}),r}var xe=n(7950),ve=n.t(xe,2);function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye.apply(this,arguments)}function be(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const we=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ke=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch(gp){}const Se=t.createContext({isTransitioning:!1});new Map;const je=r.startTransition;ve.flushSync,r.useId;function Ee(e){let{basename:n,children:r,future:o,window:i}=e,a=t.useRef();var l;null==a.current&&(a.current=(void 0===(l={window:i,v5Compat:!0})&&(l={}),f(function(e,t){let{pathname:n,search:r,hash:o}=e.location;return u("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:d(t)},null,l)));let s=a.current,[c,p]=t.useState({action:s.action,location:s.location}),{v7_startTransition:h}=o||{},m=t.useCallback(e=>{h&&je?je(()=>p(e)):p(e)},[p,h]);return t.useLayoutEffect(()=>s.listen(m),[s,m]),t.useEffect(()=>pe(o),[o]),t.createElement(he,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:s,future:o})}const Ae="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Ce=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fe=t.forwardRef(function(e,n){let r,{onClick:o,relative:i,reloadDocument:a,replace:s,state:c,target:u,to:p,preventScrollReset:f,viewTransition:h}=e,m=be(e,we),{basename:g}=t.useContext(V),x=!1;if("string"===typeof p&&Ce.test(p)&&(r=p,Ae))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),n=z(t.pathname,g);t.origin===e.origin&&null!=n?p=n+t.search+t.hash:x=!0}catch(gp){}let v=function(e,n){let{relative:r}=void 0===n?{}:n;X()||l(!1);let{basename:o,navigator:i}=t.useContext(V),{hash:a,pathname:s,search:c}=Z(e,{relative:r}),u=s;return"/"!==o&&(u="/"===s?o:R([o,s])),i.createHref({pathname:u,search:c,hash:a})}(p,{relative:i}),y=function(e,n){let{target:r,replace:o,state:i,preventScrollReset:a,relative:l,viewTransition:s}=void 0===n?{}:n,c=J(),u=q(),p=Z(e,{relative:l});return t.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==o?o:d(u)===d(p);c(e,{replace:n,state:i,preventScrollReset:a,relative:l,viewTransition:s})}},[u,c,p,o,i,r,e,a,l,s])}(p,{replace:s,state:c,target:u,preventScrollReset:f,relative:i,viewTransition:h});return t.createElement("a",ye({},m,{href:r||v,onClick:x||a?o:function(e){o&&o(e),e.defaultPrevented||y(e)},ref:n,target:u}))});const De=t.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:s,to:c,viewTransition:u,children:d}=e,p=be(e,ke),f=Z(c,{relative:p.relative}),h=q(),m=t.useContext(H),{navigator:g,basename:x}=t.useContext(V),v=null!=m&&function(e,n){void 0===n&&(n={});let r=t.useContext(Se);null==r&&l(!1);let{basename:o}=Ie(ze.useViewTransitionState),i=Z(e,{relative:n.relative});if(!r.isTransitioning)return!1;let a=z(r.currentLocation.pathname,o)||r.currentLocation.pathname,s=z(r.nextLocation.pathname,o)||r.nextLocation.pathname;return null!=F(i.pathname,s)||null!=F(i.pathname,a)}(f)&&!0===u,y=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,b=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;o||(b=b.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&x&&(w=z(w,x)||w);const k="/"!==y&&y.endsWith("/")?y.length-1:y.length;let S,j=b===y||!a&&b.startsWith(y)&&"/"===b.charAt(k),E=null!=w&&(w===y||!a&&w.startsWith(y)&&"/"===w.charAt(y.length)),A={isActive:j,isPending:E,isTransitioning:v},C=j?r:void 0;S="function"===typeof i?i(A):[i,j?"active":null,E?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let D="function"===typeof s?s(A):s;return t.createElement(Fe,ye({},p,{"aria-current":C,className:S,ref:n,style:D,to:c,viewTransition:u}),"function"===typeof d?d(A):d)});var ze,Me;function Ie(e){let n=t.useContext(W);return n||l(!1),n}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ze||(ze={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Me||(Me={}));var $e=function(){return $e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},$e.apply(this,arguments)};Object.create;function Le(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Re=n(7324),Te=n.n(Re),_e="-ms-",Oe="-moz-",Pe="-webkit-",Ne="comm",Be="rule",Ue="decl",We="@keyframes",He=Math.abs,Ve=String.fromCharCode,Ge=Object.assign;function Ke(e){return e.trim()}function Ye(e,t){return(e=t.exec(e))?e[0]:e}function Xe(e,t,n){return e.replace(t,n)}function qe(e,t,n){return e.indexOf(t,n)}function Qe(e,t){return 0|e.charCodeAt(t)}function Je(e,t,n){return e.slice(t,n)}function Ze(e){return e.length}function et(e){return e.length}function tt(e,t){return t.push(e),e}function nt(e,t){return e.filter(function(e){return!Ye(e,t)})}var rt=1,ot=1,it=0,at=0,lt=0,st="";function ct(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:rt,column:ot,length:a,return:"",siblings:l}}function ut(e,t){return Ge(ct("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function dt(e){for(;e.root;)e=ut(e.root,{children:[e]});tt(e,e.siblings)}function pt(){return lt=at>0?Qe(st,--at):0,ot--,10===lt&&(ot=1,rt--),lt}function ft(){return lt=at<it?Qe(st,at++):0,ot++,10===lt&&(ot=1,rt++),lt}function ht(){return Qe(st,at)}function mt(){return at}function gt(e,t){return Je(st,e,t)}function xt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vt(e){return rt=ot=1,it=Ze(st=e),at=0,[]}function yt(e){return st="",e}function bt(e){return Ke(gt(at-1,St(91===e?e+2:40===e?e+1:e)))}function wt(e){for(;(lt=ht())&&lt<33;)ft();return xt(e)>2||xt(lt)>3?"":" "}function kt(e,t){for(;--t&&ft()&&!(lt<48||lt>102||lt>57&&lt<65||lt>70&&lt<97););return gt(e,mt()+(t<6&&32==ht()&&32==ft()))}function St(e){for(;ft();)switch(lt){case e:return at;case 34:case 39:34!==e&&39!==e&&St(lt);break;case 40:41===e&&St(e);break;case 92:ft()}return at}function jt(e,t){for(;ft()&&e+lt!==57&&(e+lt!==84||47!==ht()););return"/*"+gt(t,at-1)+"*"+Ve(47===e?e:ft())}function Et(e){for(;!xt(ht());)ft();return gt(e,at)}function At(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ct(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Ue:return e.return=e.return||e.value;case Ne:return"";case We:return e.return=e.value+"{"+At(e.children,r)+"}";case Be:if(!Ze(e.value=e.props.join(",")))return""}return Ze(n=At(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ft(e,t,n){switch(function(e,t){return 45^Qe(e,0)?(((t<<2^Qe(e,0))<<2^Qe(e,1))<<2^Qe(e,2))<<2^Qe(e,3):0}(e,t)){case 5103:return Pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Pe+e+e;case 4789:return Oe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Pe+e+Oe+e+_e+e+e;case 5936:switch(Qe(e,t+11)){case 114:return Pe+e+_e+Xe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Pe+e+_e+Xe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Pe+e+_e+Xe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Pe+e+_e+e+e;case 6165:return Pe+e+_e+"flex-"+e+e;case 5187:return Pe+e+Xe(e,/(\w+).+(:[^]+)/,Pe+"box-$1$2"+_e+"flex-$1$2")+e;case 5443:return Pe+e+_e+"flex-item-"+Xe(e,/flex-|-self/g,"")+(Ye(e,/flex-|baseline/)?"":_e+"grid-row-"+Xe(e,/flex-|-self/g,""))+e;case 4675:return Pe+e+_e+"flex-line-pack"+Xe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Pe+e+_e+Xe(e,"shrink","negative")+e;case 5292:return Pe+e+_e+Xe(e,"basis","preferred-size")+e;case 6060:return Pe+"box-"+Xe(e,"-grow","")+Pe+e+_e+Xe(e,"grow","positive")+e;case 4554:return Pe+Xe(e,/([^-])(transform)/g,"$1"+Pe+"$2")+e;case 6187:return Xe(Xe(Xe(e,/(zoom-|grab)/,Pe+"$1"),/(image-set)/,Pe+"$1"),e,"")+e;case 5495:case 3959:return Xe(e,/(image-set\([^]*)/,Pe+"$1$`$1");case 4968:return Xe(Xe(e,/(.+:)(flex-)?(.*)/,Pe+"box-pack:$3"+_e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Pe+e+e;case 4200:if(!Ye(e,/flex-|baseline/))return _e+"grid-column-align"+Je(e,t)+e;break;case 2592:case 3360:return _e+Xe(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Ye(e.props,/grid-\w+-end/)})?~qe(e+(n=n[t].value),"span",0)?e:_e+Xe(e,"-start","")+e+_e+"grid-row-span:"+(~qe(n,"span",0)?Ye(n,/\d+/):+Ye(n,/\d+/)-+Ye(e,/\d+/))+";":_e+Xe(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Ye(e.props,/grid-\w+-start/)})?e:_e+Xe(Xe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Xe(e,/(.+)-inline(.+)/,Pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ze(e)-1-t>6)switch(Qe(e,t+1)){case 109:if(45!==Qe(e,t+4))break;case 102:return Xe(e,/(.+:)(.+)-([^]+)/,"$1"+Pe+"$2-$3$1"+Oe+(108==Qe(e,t+3)?"$3":"$2-$3"))+e;case 115:return~qe(e,"stretch",0)?Ft(Xe(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Xe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,o,i,a,l){return _e+n+":"+r+l+(o?_e+n+"-span:"+(i?a:+a-+r)+l:"")+e});case 4949:if(121===Qe(e,t+6))return Xe(e,":",":"+Pe)+e;break;case 6444:switch(Qe(e,45===Qe(e,14)?18:11)){case 120:return Xe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Pe+(45===Qe(e,14)?"inline-":"")+"box$3$1"+Pe+"$2$3$1"+_e+"$2box$3")+e;case 100:return Xe(e,":",":"+_e)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Xe(e,"scroll-","scroll-snap-")+e}return e}function Dt(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ue:return void(e.return=Ft(e.value,e.length,n));case We:return At([ut(e,{value:Xe(e.value,"@","@"+Pe)})],r);case Be:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Ye(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dt(ut(e,{props:[Xe(t,/:(read-\w+)/,":-moz-$1")]})),dt(ut(e,{props:[t]})),Ge(e,{props:nt(n,r)});break;case"::placeholder":dt(ut(e,{props:[Xe(t,/:(plac\w+)/,":"+Pe+"input-$1")]})),dt(ut(e,{props:[Xe(t,/:(plac\w+)/,":-moz-$1")]})),dt(ut(e,{props:[Xe(t,/:(plac\w+)/,_e+"input-$1")]})),dt(ut(e,{props:[t]})),Ge(e,{props:nt(n,r)})}return""})}}function zt(e){return yt(Mt("",null,null,null,[""],e=vt(e),0,[0],e))}function Mt(e,t,n,r,o,i,a,l,s){for(var c=0,u=0,d=a,p=0,f=0,h=0,m=1,g=1,x=1,v=0,y="",b=o,w=i,k=r,S=y;g;)switch(h=v,v=ft()){case 40:if(108!=h&&58==Qe(S,d-1)){-1!=qe(S+=Xe(bt(v),"&","&\f"),"&\f",He(c?l[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:S+=bt(v);break;case 9:case 10:case 13:case 32:S+=wt(h);break;case 92:S+=kt(mt()-1,7);continue;case 47:switch(ht()){case 42:case 47:tt($t(jt(ft(),mt()),t,n,s),s);break;default:S+="/"}break;case 123*m:l[c++]=Ze(S)*x;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==x&&(S=Xe(S,/\f/g,"")),f>0&&Ze(S)-d&&tt(f>32?Lt(S+";",r,n,d-1,s):Lt(Xe(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(tt(k=It(S,t,n,c,u,o,l,y,b=[],w=[],d,i),i),123===v)if(0===u)Mt(S,t,k,k,b,i,d,l,w);else switch(99===p&&110===Qe(S,3)?100:p){case 100:case 108:case 109:case 115:Mt(e,k,k,r&&tt(It(e,k,k,0,0,o,l,y,o,b=[],d,w),w),o,w,d,l,r?b:w);break;default:Mt(S,k,k,k,[""],w,0,l,w)}}c=u=f=0,m=x=1,y=S="",d=a;break;case 58:d=1+Ze(S),f=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==pt())continue;switch(S+=Ve(v),v*m){case 38:x=u>0?1:(S+="\f",-1);break;case 44:l[c++]=(Ze(S)-1)*x,x=1;break;case 64:45===ht()&&(S+=bt(ft())),p=ht(),u=d=Ze(y=S+=Et(mt())),v++;break;case 45:45===h&&2==Ze(S)&&(m=0)}}return i}function It(e,t,n,r,o,i,a,l,s,c,u,d){for(var p=o-1,f=0===o?i:[""],h=et(f),m=0,g=0,x=0;m<r;++m)for(var v=0,y=Je(e,p+1,p=He(g=a[m])),b=e;v<h;++v)(b=Ke(g>0?f[v]+" "+y:Xe(y,/&\f/g,f[v])))&&(s[x++]=b);return ct(e,t,n,0===o?Be:l,s,c,u,d)}function $t(e,t,n,r){return ct(e,t,n,Ne,Ve(lt),Je(e,2,-2),0,r)}function Lt(e,t,n,r,o){return ct(e,t,n,Ue,Je(e,0,r),Je(e,r+1,-1),r,o)}var Rt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Tt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",_t="active",Ot="data-styled-version",Pt="6.1.19",Nt="/*!sc*/\n",Bt="undefined"!=typeof window&&"undefined"!=typeof document,Ut=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Wt={},Ht=(new Set,Object.freeze([])),Vt=Object.freeze({});function Gt(e,t,n){return void 0===n&&(n=Vt),e.theme!==n.theme&&e.theme||t||n.theme}var Kt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Yt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xt=/(^-|-$)/g;function qt(e){return e.replace(Yt,"-").replace(Xt,"")}var Qt=/(a)(d)/gi,Jt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Zt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Jt(t%52)+n;return(Jt(t%52)+n).replace(Qt,"$1-$2")}var en,tn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},nn=function(e){return tn(5381,e)};function rn(e){return Zt(nn(e)>>>0)}function on(e){return e.displayName||e.name||"Component"}function an(e){return"string"==typeof e&&!0}var ln="function"==typeof Symbol&&Symbol.for,sn=ln?Symbol.for("react.memo"):60115,cn=ln?Symbol.for("react.forward_ref"):60112,un={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},dn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fn=((en={})[cn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},en[sn]=pn,en);function hn(e){return("type"in(t=e)&&t.type.$$typeof)===sn?pn:"$$typeof"in e?fn[e.$$typeof]:un;var t}var mn=Object.defineProperty,gn=Object.getOwnPropertyNames,xn=Object.getOwnPropertySymbols,vn=Object.getOwnPropertyDescriptor,yn=Object.getPrototypeOf,bn=Object.prototype;function wn(e,t,n){if("string"!=typeof t){if(bn){var r=yn(t);r&&r!==bn&&wn(e,r,n)}var o=gn(t);xn&&(o=o.concat(xn(t)));for(var i=hn(e),a=hn(t),l=0;l<o.length;++l){var s=o[l];if(!(s in dn||n&&n[s]||a&&s in a||i&&s in i)){var c=vn(t,s);try{mn(e,s,c)}catch(e){}}}}return e}function kn(e){return"function"==typeof e}function Sn(e){return"object"==typeof e&&"styledComponentId"in e}function jn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function En(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function An(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Cn(e,t,n){if(void 0===n&&(n=!1),!n&&!An(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Cn(e[r],t[r]);else if(An(t))for(var r in t)e[r]=Cn(e[r],t[r]);return e}function Fn(e,t){Object.defineProperty(e,"toString",{value:t})}function Dn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var zn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Dn(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(Nt);return t},e}(),Mn=new Map,In=new Map,$n=1,Ln=function(e){if(Mn.has(e))return Mn.get(e);for(;In.has($n);)$n++;var t=$n++;return Mn.set(e,t),In.set(t,e),t},Rn=function(e,t){$n=t+1,Mn.set(e,t),In.set(t,e)},Tn="style[".concat(Tt,"][").concat(Ot,'="').concat(Pt,'"]'),_n=new RegExp("^".concat(Tt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),On=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Pn=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Nt),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(_n);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(Rn(u,c),On(e,u,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},Nn=function(e){for(var t=document.querySelectorAll(Tn),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Tt)!==_t&&(Pn(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Bn(){return n.nc}var Un=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Tt,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(Tt,_t),r.setAttribute(Ot,Pt);var a=Bn();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},Wn=function(){function e(e){this.element=Un(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw Dn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Hn=function(){function e(e){this.element=Un(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Vn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Gn=Bt,Kn={isServer:!Bt,useCSSOMInjection:!Ut},Yn=function(){function e(e,t,n){void 0===e&&(e=Vt),void 0===t&&(t={});var r=this;this.options=$e($e({},Kn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Bt&&Gn&&(Gn=!1,Nn(this)),Fn(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return In.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var l="".concat(Tt,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==i&&i.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),r+="".concat(a).concat(l,'{content:"').concat(s,'"}').concat(Nt)},i=0;i<n;i++)o(i);return r}(r)})}return e.registerId=function(e){return Ln(e)},e.prototype.rehydrate=function(){!this.server&&Bt&&Nn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e($e($e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Vn(n):t?new Wn(n):new Hn(n)}(this.options),new zn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Ln(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Ln(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Ln(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Xn=/&/g,qn=/^\s*\/\/.*$/gm;function Qn(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Qn(e.children,t)),e})}function Jn(e){var t,n,r,o=void 0===e?Vt:e,i=o.options,a=void 0===i?Vt:i,l=o.plugins,s=void 0===l?Ht:l,c=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push(function(e){e.type===Be&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Xn,n).replace(r,c))}),a.prefix&&u.push(Dt),u.push(Ct);var d=function(e,o,i,l){void 0===o&&(o=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(qn,""),c=zt(i||o?"".concat(i," ").concat(o," { ").concat(s," }"):s);a.namespace&&(c=Qn(c,a.namespace));var d,p=[];return At(c,function(e){var t=et(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=s.length?s.reduce(function(e,t){return t.name||Dn(15),tn(e,t.name)},5381).toString():"",d}var Zn=new Yn,er=Jn(),tr=t.createContext({shouldForwardProp:void 0,styleSheet:Zn,stylis:er}),nr=(tr.Consumer,t.createContext(void 0));function rr(){return(0,t.useContext)(tr)}function or(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],o=n[1],i=rr().styleSheet,a=(0,t.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),l=(0,t.useMemo)(function(){return Jn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)(function(){Te()(r,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,t.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:l}},[e.shouldForwardProp,a,l]);return t.createElement(tr.Provider,{value:s},t.createElement(nr.Provider,{value:l},e.children))}var ir=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=er);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Fn(this,function(){throw Dn(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=er),this.name+e.hash},e}(),ar=function(e){return e>="A"&&e<="Z"};function lr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;ar(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var sr=function(e){return null==e||!1===e||""===e},cr=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!sr(i)&&(Array.isArray(i)&&i.isCss||kn(i)?r.push("".concat(lr(o),":"),i,";"):An(i)?r.push.apply(r,Le(Le(["".concat(o," {")],cr(i),!1),["}"],!1)):r.push("".concat(lr(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Rt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ur(e,t,n,r){return sr(e)?[]:Sn(e)?[".".concat(e.styledComponentId)]:kn(e)?!kn(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:ur(e(t),t,n,r):e instanceof ir?n?(e.inject(n,r),[e.getName(r)]):[e]:An(e)?cr(e):Array.isArray(e)?Array.prototype.concat.apply(Ht,e.map(function(e){return ur(e,t,n,r)})):[e.toString()];var o}function dr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(kn(n)&&!Sn(n))return!1}return!0}var pr=nn(Pt),fr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&dr(e),this.componentId=t,this.baseHash=tn(pr,t),this.baseStyle=n,Yn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=jn(r,this.staticRulesId);else{var o=En(ur(this.rules,e,t,n)),i=Zt(tn(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=jn(r,i),this.staticRulesId=i}else{for(var l=tn(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=En(ur(u,e,t,n));l=tn(l,d+c),s+=d}}if(s){var p=Zt(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(s,".".concat(p),void 0,this.componentId)),r=jn(r,p)}}return r},e}(),hr=t.createContext(void 0);hr.Consumer;var mr={};new Set;function gr(e,n,r){var o=Sn(e),i=e,a=!an(e),l=n.attrs,s=void 0===l?Ht:l,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":qt(e);mr[n]=(mr[n]||0)+1;var r="".concat(n,"-").concat(rn(Pt+n+mr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,p=void 0===d?function(e){return an(e)?"styled.".concat(e):"Styled(".concat(on(e),")")}(e):d,f=n.displayName&&n.componentId?"".concat(qt(n.displayName),"-").concat(n.componentId):n.componentId||u,h=o&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(o&&i.shouldForwardProp){var g=i.shouldForwardProp;if(n.shouldForwardProp){var x=n.shouldForwardProp;m=function(e,t){return g(e,t)&&x(e,t)}}else m=g}var v=new fr(r,f,o?i.componentStyle:void 0);function y(e,n){return function(e,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=t.useContext(hr),d=rr(),p=e.shouldForwardProp||d.shouldForwardProp,f=Gt(n,u,a)||Vt,h=function(e,t,n){for(var r,o=$e($e({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=kn(r=e[i])?r(o):r;for(var l in a)o[l]="className"===l?jn(o[l],a[l]):"style"===l?$e($e({},o[l]),a[l]):a[l]}return t.className&&(o.className=jn(o.className,t.className)),o}(o,n,f),m=h.as||c,g={};for(var x in h)void 0===h[x]||"$"===x[0]||"as"===x||"theme"===x&&h.theme===f||("forwardedAs"===x?g.as=h.forwardedAs:p&&!p(x,m)||(g[x]=h[x]));var v=function(e,t){var n=rr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),y=jn(l,s);return v&&(y+=" "+v),h.className&&(y+=" "+h.className),g[an(m)&&!Kt.has(m)?"class":"className"]=y,r&&(g.ref=r),(0,t.createElement)(m,g)}(b,e,n)}y.displayName=p;var b=t.forwardRef(y);return b.attrs=h,b.componentStyle=v,b.displayName=p,b.shouldForwardProp=m,b.foldedComponentIds=o?jn(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=f,b.target=o?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Cn(e,o[r],!0);return e}({},i.defaultProps,e):e}}),Fn(b,function(){return".".concat(b.styledComponentId)}),a&&wn(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function xr(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var vr=function(e){return Object.assign(e,{isCss:!0})};function yr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(kn(e)||An(e))return vr(ur(xr(Ht,Le([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?ur(r):vr(ur(xr(r,t)))}function br(e,t,n){if(void 0===n&&(n=Vt),!t)throw Dn(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,yr.apply(void 0,Le([r],o,!1)))};return r.attrs=function(r){return br(e,t,$e($e({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return br(e,t,$e($e({},n),r))},r}var wr=function(e){return br(gr,e)},kr=wr;Kt.forEach(function(e){kr[e]=wr(e)});var Sr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=dr(e),Yn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var o=r(En(ur(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Yn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function jr(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=yr.apply(void 0,Le([e],n,!1)),i="sc-global-".concat(rn(JSON.stringify(o))),a=new Sr(o,i),l=function(e){var n=rr(),r=t.useContext(hr),o=t.useRef(n.styleSheet.allocateGSInstance(i)).current;return n.styleSheet.server&&s(o,e,n.styleSheet,r,n.stylis),t.useLayoutEffect(function(){if(!n.styleSheet.server)return s(o,e,n.styleSheet,r,n.stylis),function(){return a.removeStyles(o,n.styleSheet)}},[o,e,n.styleSheet,r,n.stylis]),null};function s(e,t,n,r,o){if(a.isStatic)a.renderStyles(e,Wt,n,o);else{var i=$e($e({},t),{theme:Gt(t,r,l.defaultProps)});a.renderStyles(e,i,n,o)}}return t.memo(l)}function Er(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=En(yr.apply(void 0,Le([e],t,!1))),o=rn(r);return new ir(o,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Bn(),r=En([n&&'nonce="'.concat(n,'"'),"".concat(Tt,'="true"'),"".concat(Ot,'="').concat(Pt,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Dn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw Dn(2);var r=e.instance.toString();if(!r)return[];var o=((n={})[Tt]="",n[Ot]=Pt,n.dangerouslySetInnerHTML={__html:r},n),i=Bn();return i&&(o.nonce=i),[t.createElement("style",$e({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Yn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Dn(2);return t.createElement(or,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Dn(3)}})(),"__sc-".concat(Tt,"__");const Ar=n.p+"static/media/cake.2dc83bec29f46a24a4fb0d4de2525a9d.svg";var Cr=n(6360),Fr=n(4802);const Dr='"Noto Sans", system-ui, sans-serif',zr=jr`
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
`,Mr=n.p+"static/media/win_desk.57f582e536e7ad45a69c.png";var Ir=n(579);const $r=()=>(0,Ir.jsx)("svg",{width:"10",height:"1",viewBox:"0 0 10 1",children:(0,Ir.jsx)("rect",{width:"10",height:"1",fill:"currentColor"})}),Lr=()=>(0,Ir.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",children:(0,Ir.jsx)("rect",{width:"10",height:"10",fill:"none",stroke:"currentColor"})}),Rr=()=>(0,Ir.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",children:(0,Ir.jsx)("path",{d:"M1,1 L9,9 M9,1 L1,9",stroke:"currentColor",strokeWidth:"1.5"})}),Tr=kr.div`
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
`,Yr=()=>{const[e,n]=(0,t.useState)({x:0,y:0}),[r,o]=(0,t.useState)(!1),[i,a]=(0,t.useState)({x:0,y:0});(0,t.useEffect)(()=>{const e=document.querySelector("#demo-container");if(e){const t=e.getBoundingClientRect(),r=(t.width-300)/2,o=(t.height-200)/2;n({x:r,y:o})}},[]);const l=()=>{o(!1)};return(0,Ir.jsxs)(Tr,{children:[(0,Ir.jsxs)(_r,{children:[(0,Ir.jsx)(Or,{children:"Canvas"}),(0,Ir.jsx)(Pr,{children:"The canvas background provides a neutral, consistent foundation for application content. It ensures readability, visual clarity, and appropriate contrast with interactive components."})]}),(0,Ir.jsx)(Nr,{children:(0,Ir.jsx)(Br,{id:"demo-container",onMouseMove:e=>{if(r){const t=document.querySelector("#demo-container").getBoundingClientRect();let r=e.clientX-t.left-i.x,o=e.clientY-t.top-i.y;r=Math.max(0,Math.min(r,t.width-300)),o=Math.max(0,Math.min(o,t.height-200)),n({x:r,y:o})}},onMouseUp:l,onMouseLeave:l,children:(0,Ir.jsxs)(Gr,{onMouseDown:e=>{o(!0);const t=e.target.getBoundingClientRect();a({x:e.clientX-t.left,y:e.clientY-t.top})},style:{left:`${e.x}px`,top:`${e.y}px`},children:[(0,Ir.jsxs)(Ur,{children:[(0,Ir.jsx)(Wr,{}),(0,Ir.jsxs)(Hr,{children:[(0,Ir.jsx)(Vr,{children:(0,Ir.jsx)($r,{})}),(0,Ir.jsx)(Vr,{children:(0,Ir.jsx)(Lr,{})}),(0,Ir.jsx)(Vr,{isClose:!0,children:(0,Ir.jsx)(Rr,{})})]})]}),(0,Ir.jsx)(Kr,{})]})})})]})},Xr=JSON.parse('{"slate":{"50":"#f8fafc","100":"#f1f5f9","200":"#e2e8f0","300":"#cbd5e1","400":"#94a3b8","500":"#64748b","600":"#475569","700":"#334155","800":"#1e293b","900":"#0f172a"},"gray":{"50":"#f9fafb","100":"#f3f4f6","200":"#e5e7eb","300":"#d1d5db","400":"#9ca3af","500":"#6b7280","600":"#4b5563","700":"#374151","800":"#1f2937","900":"#111827"},"zinc":{"50":"#fafafa","100":"#f4f4f5","200":"#e4e4e7","300":"#d4d4d8","400":"#a1a1aa","500":"#71717a","600":"#52525b","700":"#3f3f46","800":"#27272a","900":"#18181b"},"neutral":{"50":"#fafafa","100":"#f5f5f5","200":"#e5e5e5","300":"#d4d4d4","400":"#a3a3a3","500":"#737373","600":"#525252","700":"#404040","800":"#262626","900":"#171717"},"stone":{"50":"#fafaf9","100":"#f5f5f4","200":"#e7e5e4","300":"#d6d3d1","400":"#a8a29e","500":"#78716c","600":"#57534e","700":"#44403c","800":"#292524","900":"#1c1917"},"red":{"50":"#fef2f2","100":"#fee2e2","200":"#fecaca","300":"#fca5a5","400":"#f87171","500":"#ef4444","600":"#dc2626","700":"#b91c1c","800":"#991b1b","900":"#7f1d1d"},"orange":{"50":"#fff7ed","100":"#ffedd5","200":"#fed7aa","300":"#fdba74","400":"#fb923c","500":"#f97316","600":"#ea580c","700":"#c2410c","800":"#9a3412","900":"#7c2d12"},"amber":{"50":"#fffbeb","100":"#fef3c7","200":"#fde68a","300":"#fcd34d","400":"#fbbf24","500":"#f59e0b","600":"#d97706","700":"#b45309","800":"#92400e","900":"#78350f"},"yellow":{"50":"#fefce8","100":"#fef9c3","200":"#fef08a","300":"#fde047","400":"#facc15","500":"#eab308","600":"#ca8a04","700":"#a16207","800":"#854d0e","900":"#713f12"},"lime":{"50":"#f7fee7","100":"#ecfccb","200":"#d9f99d","300":"#bef264","400":"#a3e635","500":"#84cc16","600":"#65a30d","700":"#4d7c0f","800":"#3f6212","900":"#365314"},"green":{"50":"#f0fdf4","100":"#dcfce7","200":"#bbf7d0","300":"#86efac","400":"#4ade80","500":"#22c55e","600":"#16a34a","700":"#15803d","800":"#166534","900":"#14532d"},"emerald":{"50":"#ecfdf5","100":"#d1fae5","200":"#a7f3d0","300":"#6ee7b7","400":"#34d399","500":"#10b981","600":"#059669","700":"#047857","800":"#065f46","900":"#064e3b"},"teal":{"50":"#f0fdfa","100":"#ccfbf1","200":"#99f6e4","300":"#5eead4","400":"#2dd4bf","500":"#14b8a6","600":"#0d9488","700":"#0f766e","800":"#115e59","900":"#134e4a"},"cyan":{"50":"#ecfeff","100":"#cffafe","200":"#a5f3fc","300":"#67e8f9","400":"#22d3ee","500":"#06b6d4","600":"#0891b2","700":"#0e7490","800":"#155e75","900":"#164e63"},"sky":{"50":"#f0f9ff","100":"#e0f2fe","200":"#bae6fd","300":"#7dd3fc","400":"#38bdf8","500":"#0ea5e9","600":"#0284c7","700":"#0369a1","800":"#075985","900":"#0c4a6e"},"blue":{"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},"indigo":{"50":"#eef2ff","100":"#e0e7ff","200":"#c7d2fe","300":"#a5b4fc","400":"#818cf8","500":"#6366f1","600":"#4f46e5","700":"#4338ca","800":"#3730a3","900":"#312e81"},"violet":{"50":"#f5f3ff","100":"#ede9fe","200":"#ddd6fe","300":"#c4b5fd","400":"#a78bfa","500":"#8b5cf6","600":"#7c3aed","700":"#6d28d9","800":"#5b21b6","900":"#4c1d95"},"purple":{"50":"#faf5ff","100":"#f3e8ff","200":"#e9d5ff","300":"#d8b4fe","400":"#c084fc","500":"#a855f7","600":"#9333ea","700":"#7e22ce","800":"#6b21a8","900":"#581c87"},"pink":{"50":"#fdf2f8","100":"#fce7f3","200":"#fbcfe8","300":"#f9a8d4","400":"#f472b6","500":"#ec4899","600":"#db2777","700":"#be185d","800":"#9d174d","900":"#831843"},"rose":{"50":"#fff1f2","100":"#ffe4e6","200":"#fecdd3","300":"#fda4af","400":"#fb7185","500":"#f43f5e","600":"#e11d48","700":"#be123c","800":"#9f1239","900":"#881337"},"common":{"white":"#ffffff","black":"#000000"},"brand":{"lenovo_signature_red":"#e1251b"}}'),qr="unchecked",Qr="checked",Jr="indeterminate",Zr={LIGHT:"light.a",DARK:"dark.a"},eo={SMALL:"small",MEDIUM:"medium",LARGE:"large"},to=kr.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.disabled?.5:1};
  user-select: none;
  position: relative;
  line-height: 1;
`,no=kr.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  pointer-events: none;
`,ro=kr.div`
  position: relative;
  width: ${e=>{switch(e.size){case eo.SMALL:return"14px";case eo.LARGE:return"18px";default:return"16px"}}};
  height: ${e=>{switch(e.size){case eo.SMALL:return"14px";case eo.LARGE:return"18px";default:return"16px"}}};
  border: 1.5px solid ${e=>e.colors.border};
  border-radius: 3px;
  background-color: ${e=>e.colors.background};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
`,oo=kr.div`
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
`,io=kr.svg`
  width: ${e=>{switch(e.size){case eo.SMALL:return"8px";case eo.LARGE:return"12px";default:return"10px"}}};
  height: ${e=>{switch(e.size){case eo.SMALL:return"8px";case eo.LARGE:return"12px";default:return"10px"}}};
  opacity: ${e=>e.visible?1:0};
  transition: opacity 0.2s ease;
`,ao=kr.div`
  width: ${e=>{switch(e.size){case eo.SMALL:return"6px";case eo.LARGE:return"10px";default:return"8px"}}};
  height: 2px;
  background-color: ${e=>e.color};
  border-radius: 1px;
  opacity: ${e=>e.visible?1:0};
  transition: opacity 0.2s ease;
`,lo=kr.label`
  font-size: ${e=>{switch(e.size){case eo.SMALL:return"12px";case eo.LARGE:return"16px";default:return"14px"}}};
  font-weight: 600;
  color: ${e=>e.colors.label};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  line-height: 1;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
  margin-top: 3px;
`,so=(0,t.forwardRef)((e,n)=>{let{checked:r=!1,indeterminate:o=!1,disabled:i=!1,label:a="Label",theme:l=Zr.LIGHT,size:s=eo.MEDIUM,onChange:c,onFocus:u,onBlur:d,id:p,name:f,value:h,className:m,style:g,"aria-describedby":x,...v}=e;const[y,b]=(0,t.useState)(!1),[w,k]=(0,t.useState)(!1),[S,j]=(0,t.useState)(!1),[E,A]=(0,t.useState)(r),[C,F]=(0,t.useState)(!1),D=void 0!==r,z=D?r:E,M=o?Jr:z?Qr:qr,I=((e,t,n,r,o,i)=>t===Zr.DARK?n?{border:"#9CA3AF",background:"#27272A",icon:"#9CA3AF",label:"#9CA3AF"}:e===Qr||e===Jr?{border:"#52525B",background:"#93C5FD",icon:"#18181B",label:"#D4D4D8"}:i?{border:"#71717A",background:"transparent",icon:"transparent",label:"#D4D4D8"}:o?{border:"#D4D4D8",background:"transparent",icon:"transparent",label:"#D4D4D8"}:{border:"#71717A",background:"transparent",icon:"transparent",label:"#D4D4D8"}:n?{border:"#64748B",background:"#F1F5F9",icon:"#475569",label:"#475569"}:e===Qr||e===Jr?i?{border:"#1D4ED8",background:"#1D4ED8",icon:"#FFFFFF",label:"#0F172A"}:o?{border:"#1E3A8A",background:"#1E3A8A",icon:"#FFFFFF",label:"#0F172A"}:{border:"#1D4ED8",background:"#1D4ED8",icon:"#FFFFFF",label:"#0F172A"}:i?{border:"#64748B",background:"transparent",icon:"transparent",label:"#0F172A"}:o?{border:"#0F172A",background:"transparent",icon:"transparent",label:"#0F172A"}:{border:"#64748B",background:"transparent",icon:"transparent",label:"#0F172A"})(M,l,i,0,w,S);(0,t.useEffect)(()=>{D||A(r)},[r,D]);const $=e=>{if(i)return;const t=e.target.checked;D||A(t),c&&c(e)},L=p||`checkbox-${Math.random().toString(36).substr(2,9)}`;return(0,Ir.jsxs)(to,{disabled:i,className:m,style:g,onClick:e=>{if(i)return;if("LABEL"===e.target.tagName)return;$({target:{checked:!z,type:"checkbox"}})},onMouseEnter:()=>{i||k(!0)},onMouseLeave:()=>{k(!1),j(!1)},onMouseDown:()=>{i||j(!0)},onMouseUp:()=>{j(!1)},children:[(0,Ir.jsx)(no,{ref:n,type:"checkbox",id:L,name:f,value:h,checked:z,disabled:i,onChange:$,onFocus:e=>{b(!0),F(!0),u&&u(e)},onBlur:e=>{b(!1),F(!1),d&&d(e)},onKeyDown:e=>{if(!i&&(" "===e.key||"Enter"===e.key)){e.preventDefault();$({target:{checked:!z,type:"checkbox"}})}},tabIndex:i?-1:0,role:"checkbox","aria-checked":z,"aria-describedby":x,...v}),(0,Ir.jsxs)(ro,{colors:I,disabled:i,theme:l,size:s,children:[(0,Ir.jsx)(oo,{visible:C,theme:l}),M===Qr&&(0,Ir.jsx)(io,{visible:!0,color:I.icon,size:s,viewBox:"0 0 24 24",children:(0,Ir.jsx)("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",stroke:I.icon,strokeWidth:"3",fill:"none"})}),M===Jr&&(0,Ir.jsx)(ao,{visible:!0,color:I.icon,size:s})]}),(0,Ir.jsx)(lo,{htmlFor:L,disabled:i,colors:I,size:s,children:a})]})});so.displayName="Checkbox";const co=so,uo=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,po=kr.div`
  margin-bottom: 48px;
`,fo=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,ho=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,mo=kr.section`
  margin-bottom: 48px;
`,go=(kr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),xo=kr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,vo=kr.label`
  font-weight: 600;
  color: #0F172A;
`,yo=kr.select`
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
`,bo=(kr.input`
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
`),wo=()=>{const[e,n]=(0,t.useState)(qr),[r,o]=(0,t.useState)(Zr.LIGHT),[i,a]=(0,t.useState)(!1);return(0,Ir.jsxs)(uo,{children:[(0,Ir.jsxs)(po,{children:[(0,Ir.jsx)(fo,{children:"Checkbox"}),(0,Ir.jsx)(ho,{children:"Interactive checkbox component for form inputs, selections, and toggles with support for checked, unchecked, indeterminate, and disabled states. The checkbox component follows accessibility best practices and includes proper ARIA attributes for screen readers."})]}),(0,Ir.jsxs)(mo,{children:[(0,Ir.jsxs)(go,{children:[(0,Ir.jsxs)(xo,{children:[(0,Ir.jsx)(vo,{children:"State"}),(0,Ir.jsxs)(yo,{value:e,onChange:e=>n(e.target.value),children:[(0,Ir.jsx)("option",{value:"default",children:"Default"}),(0,Ir.jsx)("option",{value:"indeterminate",children:"Indeterminate"}),(0,Ir.jsx)("option",{value:"disabled",children:"Disabled"}),(0,Ir.jsx)("option",{value:"disabled-indeterminate",children:"Disabled Indeterminate"})]})]}),(0,Ir.jsxs)(xo,{children:[(0,Ir.jsx)(vo,{children:"Theme"}),(0,Ir.jsxs)(yo,{value:r,onChange:e=>o(e.target.value),children:[(0,Ir.jsx)("option",{value:Zr.LIGHT,children:"Light.a"}),(0,Ir.jsx)("option",{value:Zr.DARK,children:"Dark.a"})]})]})]}),(0,Ir.jsx)(bo,{theme:r,children:(0,Ir.jsx)(co,{...(()=>{const t={label:"Label",theme:r};return"disabled"===e?(t.disabled=!0,t.checked=i):"indeterminate"===e?(t.disabled=!1,t.indeterminate=!0,t.checked=i):"disabled-indeterminate"===e?(t.disabled=!0,t.indeterminate=!0,t.checked=i):(t.disabled=!1,t.checked=i,t.onChange=e=>{a(e.target.checked)}),t})()})})]})]})},ko=kr.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s ease;
  border: 1px solid #e5e7eb;
  
  ${e=>e.elevated&&"\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  "}
  
  ${e=>e.hoverable&&"\n    cursor: pointer;\n    \n    &:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n    }\n  "}
  
  ${e=>{switch(e.variant){case"outlined":return"\n          background: transparent;\n          border: 2px solid #e5e7eb;\n          box-shadow: none;\n        ";case"elevated":return"\n          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n        ";default:return""}}}
`,So=kr.div`
  padding: 20px 24px;
  border-bottom: 1px solid #f3f4f6;
  
  ${e=>e.compact&&"\n    padding: 16px 20px;\n  "}
`,jo=kr.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${Xr.slate[900]};
  
  ${e=>e.compact&&"\n    font-size: 16px;\n  "}
`,Eo=kr.p`
  margin: 4px 0 0 0;
  font-size: 14px;
  color: ${Xr.slate[700]};
  
  ${e=>e.compact&&"\n    font-size: 13px;\n  "}
`,Ao=kr.div`
  padding: 24px;
  
  ${e=>e.compact&&"\n    padding: 20px;\n  "}
`,Co=kr.div`
  padding: 20px 24px;
  border-top: 1px solid #f3f4f6;
  background-color: #f9fafb;
  
  ${e=>e.compact&&"\n    padding: 16px 20px;\n  "}
`,Fo=kr.img`
  width: 100%;
  height: auto;
  display: block;
`,Do=e=>{let{children:t,variant:n="default",elevated:r=!1,hoverable:o=!1,compact:i=!1,onClick:a,...l}=e;return(0,Ir.jsx)(ko,{variant:n,elevated:r,hoverable:o,onClick:a,...l,children:t})};Do.Header=So,Do.Title=jo,Do.Subtitle=Eo,Do.Body=Ao,Do.Footer=Co,Do.Image=Fo;const zo=Do,Mo=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Io=kr.div`
  margin-bottom: 48px;
`,$o=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Lo=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Ro=kr.section`
  margin-bottom: 60px;
`,To=kr.h2`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
`,_o=kr.p`
  font-size: 16px;
  color: #6b7280;
  margin: 0 0 32px 0;
  line-height: 1.6;
`,Oo=kr.div`
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
`,Po=kr.div`
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
`,No=kr.div`
  margin-bottom: 16px;
`,Bo=kr.h3`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,Uo=kr.div`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
`,Wo=kr.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${e=>"latest"===e.type?"background: #eff6ff; color: #2563eb;":"major"===e.type?"background: #fef2f2; color: #dc2626;":"minor"===e.type?"background: #f0fdf4; color: #059669;":"background: #f3f4f6; color: #6b7280;"}
`,Ho=kr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Vo=kr.li`
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
`,Go=kr.span`
  color: #374151;
  line-height: 1.5;
`,Ko=(kr.div`
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
`),Yo=()=>{const e=e=>{switch(e){case"added":return"Added";case"changed":return"Changed";case"removed":return"Removed";case"fixed":return"Fixed";default:return"Updated"}};return(0,Ir.jsxs)(Mo,{children:[(0,Ir.jsxs)(Io,{children:[(0,Ir.jsx)($o,{children:"Version Control"}),(0,Ir.jsx)(Lo,{children:"Track the evolution of our design system through version history and changelog entries."})]}),(0,Ir.jsxs)(Ro,{children:[(0,Ir.jsx)(To,{children:"Current Version"}),(0,Ir.jsx)(_o,{children:"We're currently on version 4.0.1, which represents our latest major release with significant improvements in accessibility and component functionality."}),(0,Ir.jsxs)(zo,{elevated:!0,children:[(0,Ir.jsxs)(zo.Header,{children:[(0,Ir.jsx)(zo.Title,{children:"Version 4.0.1 - Latest Release"}),(0,Ir.jsx)(zo.Subtitle,{children:"Released on March 15, 2024"})]}),(0,Ir.jsxs)(zo.Body,{children:[(0,Ir.jsx)("p",{style:{margin:"0 0 16px 0",color:"#6b7280",lineHeight:"1.6"},children:"This release brings major improvements to our component library with enhanced accessibility, dark mode support, and performance optimizations."}),(0,Ir.jsxs)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,Ir.jsx)("span",{style:{background:"#eff6ff",color:"#2563eb",padding:"4px 8px",borderRadius:"4px",fontSize:"12px",fontWeight:"500"},children:"Latest Release"}),(0,Ir.jsx)("span",{style:{background:"#f0fdf4",color:"#059669",padding:"4px 8px",borderRadius:"4px",fontSize:"12px",fontWeight:"500"},children:"Production Ready"})]})]})]})]}),(0,Ir.jsxs)(Ro,{children:[(0,Ir.jsx)(To,{children:"Changelog"}),(0,Ir.jsx)(_o,{children:"A complete history of all changes, improvements, and new features added to the design system."}),(0,Ir.jsx)(Oo,{children:[{version:"4.0.1",date:"2024-03-15",type:"latest",isLatest:!0,isMajor:!0,description:"Major update with enhanced components and accessibility improvements",changes:[{type:"added",text:"Enhanced component library with improved accessibility"},{type:"added",text:"New color system with better contrast ratios"},{type:"added",text:"Improved documentation and examples"},{type:"added",text:"Advanced form components and validation"},{type:"added",text:"Dark mode support across all components"},{type:"added",text:"Performance optimizations and bug fixes"}]},{version:"3.0.0",date:"2024-02-15",type:"major",isMajor:!0,description:"Complete design system overhaul",changes:[{type:"added",text:"Redesigned component architecture"},{type:"added",text:"New theming system"},{type:"added",text:"Improved responsive design"},{type:"changed",text:"Updated color palette and typography"},{type:"changed",text:"Enhanced component APIs"}]},{version:"2.0.0",date:"2024-01-15",type:"major",isMajor:!0,description:"Major feature update",changes:[{type:"added",text:"Advanced component library"},{type:"added",text:"Interactive documentation"},{type:"added",text:"New design tokens system"},{type:"changed",text:"Improved accessibility standards"}]},{version:"1.0.0",date:"2024-01-01",type:"major",isMajor:!0,description:"Initial stable release",changes:[{type:"added",text:"Core component library"},{type:"added",text:"Basic documentation"},{type:"added",text:"Design tokens"},{type:"added",text:"Basic theming support"}]}].map((t,n)=>(0,Ir.jsxs)(Po,{isLatest:t.isLatest,isMajor:t.isMajor,isMinor:t.isMinor,children:[(0,Ir.jsxs)(No,{children:[(0,Ir.jsxs)(Bo,{children:["v",t.version,t.isLatest&&(0,Ir.jsx)(Wo,{type:"latest",children:"Latest"}),t.isMajor&&(0,Ir.jsx)(Wo,{type:"major",children:"Major"}),t.isMinor&&(0,Ir.jsx)(Wo,{type:"minor",children:"Minor"})]}),(0,Ir.jsx)(Uo,{children:t.date}),(0,Ir.jsx)("p",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:t.description})]}),(0,Ir.jsx)(Ho,{children:t.changes.map((t,n)=>(0,Ir.jsx)(Vo,{type:t.type,children:(0,Ir.jsxs)(Go,{children:[(0,Ir.jsxs)("strong",{children:[e(t.type),":"]})," ",t.text]})},n))})]},t.version))})]}),(0,Ir.jsxs)(Ro,{children:[(0,Ir.jsx)(To,{children:"Versioning Strategy"}),(0,Ir.jsx)(_o,{children:"We follow semantic versioning (SemVer) to ensure clear communication about the nature of changes."}),(0,Ir.jsxs)(Ko,{children:[(0,Ir.jsx)(zo,{children:(0,Ir.jsxs)(zo.Body,{children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"Major Versions"}),(0,Ir.jsx)("p",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:"Incompatible API changes that may require updates to existing implementations. These releases include breaking changes and new major features."})]})}),(0,Ir.jsx)(zo,{children:(0,Ir.jsxs)(zo.Body,{children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"Minor Versions"}),(0,Ir.jsx)("p",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:"New functionality added in a backwards-compatible manner. These releases include new features and improvements to existing components."})]})}),(0,Ir.jsx)(zo,{children:(0,Ir.jsxs)(zo.Body,{children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"Patch Versions"}),(0,Ir.jsx)("p",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:"Backwards-compatible bug fixes and minor improvements. These releases focus on stability and bug fixes without new features."})]})})]})]}),(0,Ir.jsxs)(Ro,{children:[(0,Ir.jsx)(To,{children:"Upcoming Features"}),(0,Ir.jsx)(_o,{children:"Planned features and improvements for future releases of the design system."}),(0,Ir.jsxs)(Ko,{children:[(0,Ir.jsx)(zo,{children:(0,Ir.jsxs)(zo.Body,{children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"v1.1.0 - Enhanced Components"}),(0,Ir.jsxs)("ul",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:[(0,Ir.jsx)("li",{children:"Dropdown component with search and multi-select"}),(0,Ir.jsx)("li",{children:"Table component with sorting and pagination"}),(0,Ir.jsx)("li",{children:"Toast notification system"}),(0,Ir.jsx)("li",{children:"Enhanced form validation"})]})]})}),(0,Ir.jsx)(zo,{children:(0,Ir.jsxs)(zo.Body,{children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"v1.2.0 - Advanced Features"}),(0,Ir.jsxs)("ul",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:[(0,Ir.jsx)("li",{children:"Date picker component"}),(0,Ir.jsx)("li",{children:"File upload component"}),(0,Ir.jsx)("li",{children:"Rich text editor"}),(0,Ir.jsx)("li",{children:"Advanced data visualization"})]})]})}),(0,Ir.jsx)(zo,{children:(0,Ir.jsxs)(zo.Body,{children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"v2.0.0 - Major Overhaul"}),(0,Ir.jsxs)("ul",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:[(0,Ir.jsx)("li",{children:"Dark mode support"}),(0,Ir.jsx)("li",{children:"Customizable theme system"}),(0,Ir.jsx)("li",{children:"Animation library integration"}),(0,Ir.jsx)("li",{children:"Performance optimizations"})]})]})})]})]})]})},Xo=kr.div`
  display: flex;
  flex-direction: column;
  min-width: 80px;
  height: 64px;
  position: relative;
  cursor: pointer;
`,qo=kr.div`
  height: 100%;
  width: 100%;
  background-color: ${e=>e.color};
`,Qo=kr.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6px 8px;
  background: rgba(255, 255, 255, 0.9);
  font-family: ${Dr};
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${Xo}:hover & {
    opacity: 1;
  }
`,Jo=kr.div`
  font-weight: 400;
  color: ${Xr.slate[900]};
  margin-bottom: 2px;
  font-size: 16px;
`,Zo=kr.div`
  font-family: monospace;
  color: ${Xr.slate[700]};
  font-size: 11px;
`,ei=e=>{let{name:t,hex:n,onCopy:r}=e;return(0,Ir.jsxs)(Xo,{onClick:async()=>{try{await navigator.clipboard.writeText(n),r&&r()}catch(e){console.error("Failed to copy:",e)}},children:[(0,Ir.jsx)(qo,{color:n}),(0,Ir.jsxs)(Qo,{children:[(0,Ir.jsx)(Jo,{children:t}),(0,Ir.jsx)(Zo,{children:n})]})]})};var ti=n(6485),ni=n(1132);const ri={PRIMARY:"primary",SECONDARY:"secondary",DANGER:"danger",TEXT:"text",ICON:"icon"},oi={PRIMARY:"primary",SECONDARY:"secondary"},ii={PRIMARY:"primary",SECONDARY:"secondary"},ai={SMALL:"small",MEDIUM:"medium",LARGE:"large",XLARGE:"xlarge"},li={NONE:"none",LEFT:"left",RIGHT:"right"},si={PILL:"pill",SQUARE:"square"},ci=Er`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,ui=kr.div`
  width: ${e=>{if(e.variant===ri.ICON)switch(e.size){case ai.SMALL:return"16px";case ai.MEDIUM:return"20px";case ai.LARGE:return"24px";case ai.XLARGE:return"28px";default:return"20px"}return e.size===ai.LARGE?"20px":"16px"}};
  height: ${e=>{if(e.variant===ri.ICON)switch(e.size){case ai.SMALL:return"16px";case ai.MEDIUM:return"20px";case ai.LARGE:return"24px";case ai.XLARGE:return"28px";default:return"20px"}return e.size===ai.LARGE?"20px":"16px"}};
  border: 2px solid ${e=>e.isDarkMode?"#52525B":"#CBD5E1"};
  border-top: 2px solid ${e=>e.isDarkMode?"#93C5FD":"#1D4ED8"};
  border-radius: 50%;
  animation: ${ci} 0.8s linear infinite;
  margin: 0;
`,di=kr.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  
  /* Track hover state for text color changes */
  &:hover {
    color: ${e=>e.$disabled||e.$loading?e.isDarkMode?"#9CA3AF":"#475569":e.variant===ri.ICON?e.iconVariant===ii.PRIMARY?e.isDarkMode?"#93C5FD":"#1E40AF":e.isDarkMode?"#E2E8F0":"#0F172A":e.variant===ri.TEXT?e.textVariant===oi.PRIMARY?e.isDarkMode?"#93C5FD":"#1E3A8A":e.isDarkMode?"#E2E8F0":"#1E293B":e.color};
  }
  
  /* Track pressed state for text color changes */
  &:active {
    color: ${e=>e.$disabled||e.$loading?e.isDarkMode?"#9CA3AF":"#475569":e.variant===ri.ICON?e.iconVariant===ii.PRIMARY?e.isDarkMode?"#93C5FD":"#1E3A8A":e.isDarkMode?"#E2E8F0":"#0F172A":e.variant===ri.TEXT?e.textVariant===oi.PRIMARY?e.isDarkMode?"#93C5FD":"#1E3A8A":e.isDarkMode?"#E2E8F0":"#0F172A":e.color};
  }
  padding: ${e=>{if(e.variant===ri.ICON)return"0";return`${e.size===ai.LARGE?"12px":"8px"} ${e.size===ai.LARGE?"24px":"20px"}`}};
  height: ${e=>{if(e.variant===ri.ICON)switch(e.size){case ai.SMALL:return"24px";case ai.MEDIUM:return"32px";case ai.LARGE:return"40px";case ai.XLARGE:return"48px";default:return"32px"}return e.size===ai.LARGE?"40px":"32px"}};
  width: ${e=>e.variant===ri.ICON?"auto":"fit-content"};
  aspect-ratio: ${e=>e.variant===ri.ICON?"1 / 1":"auto"};
  max-width: ${e=>e.variant===ri.ICON?"none":"264px"};
  display: ${e=>(e.variant,ri.ICON,"inline-flex")};
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  
  /* Style for the label text to enable middle truncation */
  span.button-text {
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: ${e=>e.size===ai.LARGE?"1rem":"0.875rem"};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transform: translateY(0.5px);
    min-height: 100%;
    line-height: 1;
  }
  
  background-color: ${e=>e.$disabled||e.$loading?e.variant===ri.TEXT||e.variant===ri.ICON?"transparent":e.isDarkMode?"rgba(100, 116, 139, 0.2)":"rgba(203, 213, 225, 0.5)":((e,t)=>{if(e===ri.ICON)return"transparent";if(e===ri.TEXT)return"transparent";if(t)switch(e){case ri.PRIMARY:return"#93C5FD";case ri.SECONDARY:return"#CBD5E1";case ri.DANGER:return"#FCA5A5";default:return"#93C5FD"}switch(e){case ri.PRIMARY:return"#1D4ED8";case ri.SECONDARY:return"#E2E8F0";case ri.DANGER:return"#B91C1C";default:return"#1D4ED8"}})(e.variant,e.isDarkMode)};
  color: ${e=>e.$disabled||e.$loading?e.isDarkMode?"#9CA3AF":"#475569":((e,t,n,r)=>{if(e===ri.ICON)return r===ii.PRIMARY?t?"#93C5FD":"#1D4ED8":t?"#E2E8F0":"#1E293B";if(e===ri.TEXT)return n===oi.PRIMARY?t?"#93C5FD":"#1D4ED8":t?"#E2E8F0":"#334155";if(t)switch(e){case ri.PRIMARY:return"#18181B";case ri.SECONDARY:return"#000000";case ri.DANGER:default:return"#18181B"}switch(e){case ri.PRIMARY:return"#FFFFFF";case ri.SECONDARY:return"#0F172A";case ri.DANGER:default:return"#FFFFFF"}})(e.variant,e.isDarkMode,e.textVariant,e.iconVariant)};
  border: none;
  border-radius: ${e=>e.variant===ri.ICON?e.buttonStyle===si.PILL?"100%":"4px":e.buttonStyle===si.PILL?"100px":"4px"};
  font-family: ${Dr};
  font-weight: 600;
  font-size: ${e=>e.size===ai.LARGE?"1rem":"0.875rem"};
  line-height: 1;
  cursor: ${e=>e.$disabled||e.$loading?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  user-select: none;
  gap: 8px;

  &:hover {
    background-color: ${e=>e.$disabled||e.$loading?e.variant===ri.TEXT||e.variant===ri.ICON?"transparent":e.isDarkMode?"rgba(100, 116, 139, 0.2)":"rgba(203, 213, 225, 0.5)":((e,t,n,r)=>{if(e===ri.ICON)return r===ii.PRIMARY?t?"rgba(59, 130, 246, 0.45)":"#DBEAFE":t?"rgba(100, 116, 139, 0.25)":"#E2E8F0";if(e===ri.TEXT)return t?n===oi.PRIMARY?"rgba(59, 130, 246, 0.45)":"rgba(100, 116, 139, 0.25)":n===oi.PRIMARY?"#DBEAFE":"#E2E8F0";if(t)switch(e){case ri.PRIMARY:return"#60A5FA";case ri.SECONDARY:return"#94A3B8";case ri.DANGER:return"#EF4444";default:return"#60A5FA"}switch(e){case ri.PRIMARY:return"#1E3A8A";case ri.SECONDARY:return"#CBD5E1";case ri.DANGER:return"#7F1D1D";default:return"#1E3A8A"}})(e.variant,e.isDarkMode,e.textVariant,e.iconVariant)};
  }

  &:active {
    background-color: ${e=>e.$disabled||e.$loading?e.variant===ri.TEXT||e.variant===ri.ICON?"transparent":e.isDarkMode?"rgba(100, 116, 139, 0.2)":"rgba(203, 213, 225, 0.5)":((e,t,n,r)=>{if(e===ri.ICON)return r===ii.PRIMARY?t?"rgba(59, 130, 246, 0.35)":"#BFDBFE":t?"rgba(100, 116, 139, 0.35)":"#CBD5E1";if(e===ri.TEXT)return t?n===oi.PRIMARY?"rgba(59, 130, 246, 0.35)":"rgba(100, 116, 139, 0.35)":n===oi.PRIMARY?"#BFDBFE":"#CBD5E1";if(t)switch(e){case ri.PRIMARY:return"#93C5FD";case ri.SECONDARY:return"#CBD5E1";case ri.DANGER:return"#FCA5A5";default:return"#93C5FD"}switch(e){case ri.PRIMARY:return"#1D4ED8";case ri.SECONDARY:return"#E2E8F0";case ri.DANGER:return"#B91C1C";default:return"#1D4ED8"}})(e.variant,e.isDarkMode,e.textVariant,e.iconVariant)};
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${e=>{const t=e.isDarkMode?"#93C5FD":"#1D4ED8";return e.variant===ri.ICON?`0 0 0 2px ${t}`:`0 0 0 2px ${e.isDarkMode?"#18181B":"#FFFFFF"}, 0 0 0 5px ${t}`}};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${e=>{if(e.variant===ri.ICON)switch(e.size){case ai.SMALL:return"16px";case ai.MEDIUM:return"20px";case ai.LARGE:return"24px";case ai.XLARGE:return"28px";default:return"20px"}return e.size===ai.LARGE?"20px":"16px"}};
    height: ${e=>{if(e.variant===ri.ICON)switch(e.size){case ai.SMALL:return"16px";case ai.MEDIUM:return"20px";case ai.LARGE:return"24px";case ai.XLARGE:return"28px";default:return"20px"}return e.size===ai.LARGE?"20px":"16px"}};
    flex-shrink: 0;
    color: ${e=>e.$disabled||e.$loading?e.isDarkMode?"#9CA3AF":"#475569":"inherit"};

    svg {
      width: 100%;
      height: 100%;
    }
  }
`,pi=e=>{let{variant:t=ri.PRIMARY,textVariant:n=oi.PRIMARY,iconVariant:r=ii.PRIMARY,size:o=ai.MEDIUM,iconPosition:i=li.NONE,buttonStyle:a=si.PILL,label:l="Button",disabled:s=!1,loading:c=!1,isDarkMode:u=!1,className:d,onClick:p,customIcon:f,...h}=e;const m=t===ri.ICON,g=(li.NONE,()=>f||(m?(0,Ir.jsx)(ni.A,{}):(0,Ir.jsx)(ti.A,{})));return(0,Ir.jsxs)(di,{variant:t,textVariant:n,iconVariant:r,size:o,buttonStyle:a,$disabled:s,$loading:c,isDarkMode:u,className:d,onClick:e=>{s||c||null===p||void 0===p||p(e)},"aria-disabled":s||c,...h,children:[!c&&(m||i===li.LEFT)&&(0,Ir.jsx)("span",{className:"icon",children:g()}),!m&&(0,Ir.jsx)("span",{className:"button-text",children:l}),!c&&!m&&i===li.RIGHT&&(0,Ir.jsx)("span",{className:"icon",children:g()}),c&&(0,Ir.jsx)(ui,{variant:t,size:o,isDarkMode:u})]})};var fi=n(8348),hi=n(9778),mi=n(3102),gi=n(1528);const xi={TOAST:"toast",INLINE:"inline"},vi={SIMPLE:"simple",ADVANCED:"advanced"},yi={SUCCESS:"success",WARNING:"warning",ERROR:"error",INFO:"info"},bi={LIGHT:"light.a",DARK:"dark.a"},wi={TOP_RIGHT:"top-right",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",TOP_CENTER:"top-center",BOTTOM_CENTER:"bottom-center"},ki=(e,t)=>{const n=t===bi.DARK,r={[yi.SUCCESS]:{light:{background:"#FFFFFF",border:"#047857",icon:"#047857",text:"#0F172A",metadata:"#334155"},dark:{background:"#27272A",border:"#34D399",icon:"#34D399",text:"#D4D4D8",metadata:"#A1A1AA"}},[yi.WARNING]:{light:{background:"#FFFFFF",border:"#C2410C",icon:"#C2410C",text:"#0F172A",metadata:"#334155"},dark:{background:"#27272A",border:"#FDBA74",icon:"#FDBA74",text:"#D4D4D8",metadata:"#A1A1AA"}},[yi.ERROR]:{light:{background:"#FFFFFF",border:"#B91C1C",icon:"#B91C1C",text:"#0F172A",metadata:"#334155"},dark:{background:"#27272A",border:"#FCA5A5",icon:"#FCA5A5",text:"#D4D4D8",metadata:"#A1A1AA"}},[yi.INFO]:{light:{background:"#FFFFFF",border:"#1D4ED8",icon:"#1D4ED8",text:"#0F172A",metadata:"#334155"},dark:{background:"#27272A",border:"#60A5FA",icon:"#60A5FA",text:"#D4D4D8",metadata:"#A1A1AA"}}};return n?r[e].dark:r[e].light},Si=e=>({[yi.SUCCESS]:(0,Ir.jsx)(hi.A,{style:{width:"24px",height:"24px",fill:"currentColor"}}),[yi.WARNING]:(0,Ir.jsx)(mi.A,{style:{width:"24px",height:"24px",fill:"currentColor"}}),[yi.ERROR]:(0,Ir.jsx)(gi.A,{style:{width:"24px",height:"24px",fill:"currentColor"}}),[yi.INFO]:(0,Ir.jsx)(fi.A,{style:{width:"24px",height:"24px",fill:"currentColor"}})}[e]),ji=kr.div`
  position: ${e=>e.type===xi.TOAST?"fixed":"relative"};
  ${e=>e.type===xi.TOAST&&`\n    z-index: 1000;\n    ${"top-left"===e.position?"left: 20px;":"top-right"===e.position?"right: 20px;":"top-center"===e.position?"left: 20px; right: 20px;":"bottom-left"===e.position?"left: 20px;":"bottom-right"===e.position?"right: 20px;":(e.position,"left: 20px; right: 20px;")}\n    ${e.position.includes("top")?"top: 20px;":"bottom: 20px;"}\n    \n    @media (min-width: 769px) {\n      ${"top-center"===e.position?"left: 50%; right: auto; transform: translateX(-50%);":""}\n      ${"bottom-center"===e.position?"left: 50%; right: auto; transform: translateX(-50%);":""}\n    }\n  `}
  
  background: ${e=>ki(e.severity,e.theme).background};
  border: none;
  border-radius: 4px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${e=>e.variant===vi.ADVANCED||e.variant===vi.SIMPLE?ki(e.severity,e.theme).icon:ki(e.severity,e.theme).border};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  padding: ${e=>e.variant===vi.SIMPLE?"12px 16px":"16px"};
  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15);
  max-width: 512px;
  min-width: ${e=>e.type===xi.TOAST?e.variant===vi.SIMPLE?"400px":"320px":"auto"};
  
  /* Responsive styling for toast alerts */
  ${e=>e.type===xi.TOAST&&`\n    @media (max-width: 768px) {\n      min-width: ${e.variant===vi.SIMPLE?"360px":"280px"};\n      max-width: calc(100vw - 40px);\n      margin: 0 20px;\n    }\n    \n    @media (max-width: 480px) {\n      min-width: ${e.variant===vi.SIMPLE?"320px":"260px"};\n      max-width: calc(100vw - 32px);\n      margin: 0 16px;\n      padding: ${e.variant===vi.SIMPLE?"10px 12px":"14px"};\n    }\n  `}
  
  ${e=>e.type===xi.TOAST&&`\n    animation: slideIn${e.position.replace("-","")} 0.3s ease-out;\n    \n    @keyframes slideIn${e.position.replace("-","")} {\n      from {\n        opacity: 0;\n        transform: ${"top-left"===e.position?"translateX(-100%)":"top-right"===e.position?"translateX(100%)":"top-center"===e.position?"translateY(-100%) translateX(-50%)":"bottom-left"===e.position?"translateX(-100%)":"bottom-right"===e.position?"translateX(100%)":(e.position,"translateY(100%) translateX(-50%)")};\n      }\n      to {\n        opacity: 1;\n        transform: ${"top-center"===e.position||"bottom-center"===e.position?"translateX(-50%)":"translateY(0) translateX(0)"};\n      }\n    }\n  `}
  
  ${e=>e.isExiting&&e.type===xi.TOAST&&`\n    animation: slideOut${e.position.replace("-","")} 0.3s ease-in;\n    \n    @keyframes slideOut${e.position.replace("-","")} {\n      from {\n        opacity: 1;\n        transform: ${"top-center"===e.position||"bottom-center"===e.position?"translateX(-50%)":"translateY(0) translateX(0)"};\n      }\n      to {\n        opacity: 0;\n        transform: ${"top-left"===e.position?"translateX(-100%)":"top-right"===e.position?"translateX(100%)":"top-center"===e.position?"translateY(-100%) translateX(-50%)":"bottom-left"===e.position?"translateX(-100%)":"bottom-right"===e.position?"translateX(100%)":(e.position,"translateY(100%) translateX(-50%)")};\n      }\n    }\n  `}
`,Ei=kr.div`
  display: flex;
  align-items: ${e=>e.variant===vi.SIMPLE?"center":"flex-start"};
  gap: 16px;
  
  /* Responsive styling for smaller screens */
  @media (max-width: 480px) {
    gap: 12px;
  }
`,Ai=kr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>(e.variant,vi.SIMPLE,ki(e.severity,e.theme).icon)};
  background: transparent;
  border-radius: 0;
  width: auto;
  height: auto;
  flex-shrink: 0;
`,Ci=kr.div`
  flex: 1;
  min-width: 0;
  display: ${e=>e.variant===vi.SIMPLE?"flex":"block"};
  align-items: ${e=>e.variant===vi.SIMPLE?"center":"flex-start"};
  gap: ${e=>e.variant===vi.SIMPLE?"16px":"0"};
`,Fi=kr.div`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.4;
  color: ${e=>ki(e.severity,e.theme).text};
  margin-bottom: ${e=>e.variant===vi.ADVANCED?"4px":"0"};
  margin-top: ${e=>e.variant===vi.SIMPLE?"2px":"0"};
`,Di=kr.div`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
  color: ${e=>ki(e.severity,e.theme).text};
  opacity: ${e=>e.variant===vi.ADVANCED?"1":"0.9"};
`,zi=kr.div`
  display: flex;
  gap: 8px;
  margin-top: ${e=>e.variant===vi.ADVANCED?"12px":"0"};
  flex-wrap: wrap;
  margin-left: ${e=>e.variant===vi.SIMPLE?"auto":e.variant===vi.ADVANCED?"-20px":"0"};
`,Mi=(kr.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${e=>"primary"===e.variant&&`\n    background: transparent;\n    color: ${e=>e.isAdvanced?"#3B82F6":e=>e.isSimple?"#2563EB":"#3B82F6"};\n    \n    &:hover {\n      background: ${e=>e.isAdvanced?"rgba(59, 130, 246, 0.05)":e=>e.isSimple?"rgba(37, 99, 235, 0.05)":"rgba(59, 130, 246, 0.05)"};\n    }\n  `}
  
  ${e=>"secondary"===e.variant&&`\n    background: transparent;\n    color: ${e=>e.isAdvanced?"#475569":e=>e.isSimple?"#4B5563":ki(e.severity,e.theme).text};\n    border: none;\n    \n    &:hover {\n      background: rgba(0, 0, 0, 0.05);\n    }\n  `}
  
  ${e=>"tertiary"===e.variant&&`\n    background: transparent;\n    color: ${e=>e.isAdvanced?"#475569":e=>e.isSimple?"#4B5563":ki(e.severity,e.theme).text};\n    \n    &:hover {\n      background: rgba(0, 0, 0, 0.05);\n    }\n  `}
`,kr.div`
  font-size: 12px;
  color: ${e=>ki(e.severity,e.theme).metadata};
  opacity: ${e=>e.variant===vi.ADVANCED?"1":"0.7"};
  margin-top: ${e=>e.variant===vi.ADVANCED?"16px":"0"};
`),Ii=(0,t.forwardRef)((e,n)=>{let{type:r=xi.INLINE,variant:o=vi.SIMPLE,severity:i=yi.INFO,theme:a=bi.LIGHT,position:l=wi.TOP_RIGHT,title:s,message:c,dismissible:u=!1,autoDismiss:d=!1,autoDismissTime:p=5e3,onDismiss:f,onAction:h,actions:m=[],timestamp:g,className:x,keepVisible:v=!1,...y}=e;const[b,w]=(0,t.useState)(!0),[k,S]=(0,t.useState)(!1),[j,E]=(0,t.useState)(p),[A,C]=(0,t.useState)(!1),[F,D]=(0,t.useState)(!1),[z,M]=(0,t.useState)("");(0,t.useEffect)(()=>{r===xi.TOAST&&(w(!0),S(!1),D(!1),C(!1),E(p))},[r,p]),(0,t.useEffect)(()=>{if(void 0===g&&o===vi.ADVANCED){const e=()=>{const e=new Date,t=e.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}),n=e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0});M(`${t} \u2022 ${n}`)};e();const t=setInterval(e,6e4);return()=>clearInterval(t)}void 0!==g&&M("")},[g,o,r]),(0,t.useEffect)(()=>{let e;return d&&r===xi.TOAST&&!A&&b&&(e=setTimeout(()=>{I()},p)),()=>{e&&clearTimeout(e)}},[d,p,r,A,b]),(0,t.useEffect)(()=>{if(d&&r===xi.TOAST){const e=setInterval(()=>{E(e=>Math.max(0,e-100))},100);return()=>clearInterval(e)}},[d,r]);const I=()=>{!F&&b&&(v?null===f||void 0===f||f():(D(!0),r===xi.TOAST?(S(!0),setTimeout(()=>{w(!1),null===f||void 0===f||f()},300)):(w(!1),null===f||void 0===f||f())))},$=e=>{null===h||void 0===h||h(e)};if(!b)return null;ki(i,a);return(0,Ir.jsx)(ji,{ref:n,type:r,variant:o,severity:i,theme:a,position:l,isExiting:k,className:x,role:"alert","aria-live":r===xi.TOAST?"polite":"assertive",onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),...y,children:(0,Ir.jsxs)(Ei,{variant:o,children:[(0,Ir.jsx)(Ai,{variant:o,severity:i,theme:a,children:Si(i)}),o===vi.SIMPLE?(0,Ir.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flex:1},children:[(0,Ir.jsx)("div",{style:{display:"flex",flexDirection:"column",flex:1},children:s&&(0,Ir.jsx)(Fi,{variant:o,severity:i,theme:a,children:s})}),(0,Ir.jsxs)(zi,{variant:o,style:{marginLeft:"auto",marginTop:0,gap:"8px"},children:[m.map((e,t)=>(0,Ir.jsx)(pi,{variant:ri.TEXT,textVariant:"primary"===e.variant?oi.PRIMARY:oi.SECONDARY,size:"small",label:e.label,onClick:()=>$(e),style:{padding:"8px 12px"},isDarkMode:a===bi.DARK},t)),u&&(0,Ir.jsx)(pi,{variant:ri.ICON,iconVariant:ii.SECONDARY,size:"medium",customIcon:(0,Ir.jsx)(Fr.A,{}),onClick:I,"aria-label":"Close alert",isDarkMode:a===bi.DARK})]})]}):(0,Ir.jsxs)("div",{style:{display:"flex",flexDirection:"column",flex:1,minWidth:0},children:[(0,Ir.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",flex:1},children:[(0,Ir.jsxs)(Ci,{variant:o,children:[s&&(0,Ir.jsx)(Fi,{variant:o,severity:i,theme:a,children:s}),c&&o!==vi.SIMPLE&&(0,Ir.jsx)(Di,{severity:i,theme:a,children:c})]}),u&&o!==vi.SIMPLE&&(0,Ir.jsx)(pi,{variant:ri.ICON,iconVariant:ii.SECONDARY,size:"medium",customIcon:(0,Ir.jsx)(Fr.A,{}),onClick:I,"aria-label":"Close alert",isDarkMode:a===bi.DARK,style:{flexShrink:0,marginTop:"2px"}})]}),o===vi.ADVANCED&&m.length>0&&(0,Ir.jsx)(zi,{variant:o,children:m.map((e,t)=>(0,Ir.jsx)(pi,{variant:ri.TEXT,textVariant:"primary"===e.variant?oi.PRIMARY:oi.SECONDARY,size:"small",label:e.label,iconPosition:e.icon?li.LEFT:li.NONE,customIcon:e.icon,onClick:()=>$(e),isDarkMode:a===bi.DARK},t))}),o===vi.ADVANCED&&null!==g&&(g||z)&&(0,Ir.jsx)(Mi,{variant:o,severity:i,theme:a,children:g||z})]})]})})});Ii.displayName="Alert";const $i=Ii,Li=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Ri=kr.div`
  margin-bottom: 48px;
`,Ti=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,_i=kr.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`,Oi=kr.h2`
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
`,Pi=kr.div`
  flex: 1;
  min-width: 0;
`,Ni=kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 4px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
`,Bi=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Ui=()=>{const[e,n]=(0,t.useState)(!1),[r,o]=(0,t.useState)(0),[i,a]=(0,t.useState)(""),l=(e,t)=>{a(`${e} - ${t}`),o(e=>e+1),n(!0)},s=Object.keys(Xr),c=["50","100","200","300","400","500","600","700","800","900"],u=(e,t)=>"common"===e||"brand"===e?(0,Ir.jsx)(Pi,{children:(0,Ir.jsx)(Ni,{children:Object.entries(t).map(t=>{let[n,r]=t;return(0,Ir.jsx)(ei,{name:n,hex:r,onCopy:()=>l(n,r)},`${e}-${n}`)})})}):(0,Ir.jsx)(Pi,{children:(0,Ir.jsx)(Ni,{children:c.map(n=>(0,Ir.jsx)(ei,{name:n,hex:t[n],onCopy:()=>l(`${e} ${n}`,t[n])},`${e}-${n}`))})});return(0,Ir.jsxs)(Li,{children:[(0,Ir.jsxs)(Ri,{children:[(0,Ir.jsx)(Ti,{children:"Color"}),(0,Ir.jsx)(Bi,{children:"Color is a fundamental part of our design language. It sets the tone for our brand, guides user attention, and ensures accessible, consistent experiences across products. This section outlines our core color palette and provides usage guidance to maintain visual harmony, support accessibility, and reinforce brand identity."})]}),s.map(e=>{const t=Xr[e],n=e.charAt(0).toUpperCase()+e.slice(1);return(0,Ir.jsxs)(_i,{children:[(0,Ir.jsx)(Oi,{children:n}),u(e,t)]},e)}),e&&(0,Ir.jsx)($i,{type:xi.TOAST,variant:vi.SIMPLE,severity:yi.SUCCESS,position:wi.BOTTOM_CENTER,title:"Color Copied!",message:`Color ${i} has been copied to clipboard`,dismissible:!0,autoDismiss:!0,autoDismissTime:3e3,onDismiss:()=>n(!1)},r)]})},Wi={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error"},Hi={SMALL:"small",LARGE:"large"},Vi={PILL:"pill",SQUARE:"square"},Gi=kr.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.isIconOnly?"0":"small"===e.size&&e.leftIcon?"4px 12px 4px 8px":"large"===e.size&&e.leftIcon?"6px 16px 6px 12px":(e.leftIcon||e.rightIcon,"small"===e.size?"4px 12px":"6px 16px")};
  height: ${e=>(e.isIconOnly,"small"===e.size?"24px":"32px")};
  width: ${e=>e.isIconOnly?"small"===e.size?"24px":"32px":"auto"};
  aspect-ratio: ${e=>e.isIconOnly?"1 / 1":"auto"};
  background-color: ${e=>((e,t)=>{if(t)switch(e){case Wi.INFO:return"#93C5FD";case Wi.SUCCESS:return"#34D399";case Wi.WARNING:return"#FDBA74";case Wi.ERROR:return"#FCA5A5";default:return"#93C5FD"}switch(e){case Wi.INFO:return"#EFF6FF";case Wi.SUCCESS:return"#ECFDF5";case Wi.WARNING:return"#FFF7ED";case Wi.ERROR:return"#FEF2F2";default:return"#EFF6FF"}})(e.type,e.isDarkMode)};
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
`,Ki=e=>{let{type:t=Wi.INFO,size:n=Hi.SMALL,chipStyle:r=Vi.PILL,label:o,leftIcon:i,rightIcon:a,isIconOnly:l=!1,className:s,isDarkMode:c=!1,...u}=e;return(0,Ir.jsx)(Gi,{type:t,size:n,chipStyle:r,className:s,isDarkMode:c,isIconOnly:l,leftIcon:i,rightIcon:a,role:"status",...u,children:l?(0,Ir.jsx)("span",{className:"icon-left",children:i}):(0,Ir.jsxs)(Ir.Fragment,{children:[i&&(0,Ir.jsx)("span",{className:"icon-left",children:i}),o,a&&(0,Ir.jsx)("span",{className:"icon-right",children:a})]})})},Yi=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Xi=kr.div`
  margin-bottom: 48px;
`,qi=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Qi=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Ji=kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
`,Zi=kr.div`
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
`,na=kr(hi.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#047857"};
`,ra=(kr(fi.A)`
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
`),oa=kr(zo.Title)`
  font-size: 24px !important;
  font-weight: 600 !important;
  color: ${Xr.slate[900]} !important;
  margin: 0 !important;
`,ia=()=>{const e=!1,t={title:"\ud83c\udf89 Cake Web V2 Update",date:(new Date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),description:"We're thrilled to announce the launch of Cake Web V2! This major update brings a modern, responsive design system built with React that empowers teams to create consistent, high-quality experiences across all Lenovo digital products. With comprehensive accessibility features meeting WCAG 2.2 AA standards, standardized design tokens, and an enhanced component library, Cake V2 is your complete toolkit for building cohesive, user-centered interfaces that reflect Lenovo's brand identity."},n=[{version:"v1.4.0",date:"May 1, 2025",type:"Major",current:!0,changes:["Updated core components and focus state to meet WCAG 2.2 guidelines","Improved interaction consistency across all core components","Color contrast improvements for better readability and accessibility"]},{version:"v1.3.0",date:"July 17, 2024",type:"Minor",current:!1,changes:["Improved core component consistency and usability","Refined Figma layout for easier navigation","Added sections for raw components, themes, and usage guidelines"]},{version:"v1.2.8",date:"May 16, 2024",type:"Minor",current:!1,changes:["Added Date Picker component","Updated asterisk required to error color token and SegoeUI font 14 style"]},{version:"v1.2.7",date:"May 8, 2024",type:"Minor",current:!1,changes:["Added Alerts component",'Added "inline-alert" color token']},{version:"v1.2.3",date:"April 19, 2024",type:"Minor",current:!1,changes:["Added Horizontal Tabs component","S & XS breakpoint behaviors"]},{version:"v1.2.0",date:"March 7, 2024",type:"Minor",current:!1,changes:["Enhancements to Alert components","Additional color tokens"]}];return(0,Ir.jsxs)(Yi,{children:[(0,Ir.jsxs)(Xi,{children:[(0,Ir.jsx)(qi,{children:"What's New"}),(0,Ir.jsx)(Qi,{children:"Track the latest updates, improvements, and fixes to the Cake Design System. Each release represents significant changes and additions to help you stay informed about our evolving design language."})]}),(0,Ir.jsx)(Zi,{children:(0,Ir.jsx)(zo,{elevated:!0,hoverable:!0,children:(0,Ir.jsxs)(zo.Body,{children:[(0,Ir.jsx)(ea,{children:t.date}),(0,Ir.jsx)(oa,{children:t.title}),(0,Ir.jsx)(Qi,{style:{marginTop:"16px",marginBottom:"0"},children:t.description})]})})}),(0,Ir.jsx)(Ji,{children:(()=>{const t=n.sort((e,t)=>new Date(t.date)-new Date(e.date));return t.map((t,n)=>(0,Ir.jsx)(zo,{hoverable:!0,elevated:!0,children:(0,Ir.jsxs)(zo.Body,{children:[(0,Ir.jsx)(ea,{children:t.date}),(0,Ir.jsx)(oa,{children:t.version}),(0,Ir.jsxs)(ta,{children:[t.current&&(0,Ir.jsx)(Ki,{type:Wi.SUCCESS,size:Hi.SMALL,chipStyle:Vi.PILL,label:"Current",rightIcon:(0,Ir.jsx)(na,{isDarkMode:e}),isDarkMode:e}),(0,Ir.jsx)(Ki,{type:Wi.INFO,size:Hi.SMALL,chipStyle:Vi.PILL,label:`${t.type} release`,isDarkMode:e})]}),(0,Ir.jsx)(ra,{children:t.changes.map((e,t)=>(0,Ir.jsx)("li",{children:e},t))})]})},n))})()})]})},aa=kr.div`
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
`,Sa=kr.ul`
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
`,ja=()=>(0,Ir.jsxs)(fa,{children:[(0,Ir.jsxs)(ha,{children:[(0,Ir.jsx)(ma,{children:"About Cake"}),(0,Ir.jsx)(ga,{children:"Cake is One Lenovo's unified design system that helps teams build consistent, high-quality experiences across all Lenovo digital products. It provides a comprehensive set of tools, components, and guidelines to create cohesive, user-centered experiences efficiently while maintaining Lenovo's brand identity and quality standards."})]}),(0,Ir.jsxs)(xa,{children:[(0,Ir.jsxs)(va,{to:"/foundations/colors",children:[(0,Ir.jsx)(ya,{children:"Foundations"}),(0,Ir.jsx)(ba,{children:"Explore our core design foundations including colors, typography, spacing, and grid systems that form the basis of our design language."})]}),(0,Ir.jsxs)(va,{to:"/components/button",children:[(0,Ir.jsx)(ya,{children:"Components"}),(0,Ir.jsx)(ba,{children:"Discover our library of reusable UI components, built with accessibility and flexibility in mind to help you create consistent interfaces."})]}),(0,Ir.jsxs)(va,{to:"/content/guidelines",children:[(0,Ir.jsx)(ya,{children:"Content"}),(0,Ir.jsx)(ba,{children:"Learn about our content guidelines, voice and tone, writing style, and best practices for creating clear and consistent user experiences."})]})]}),(0,Ir.jsxs)(wa,{children:[(0,Ir.jsx)(ka,{children:"Key Features"}),(0,Ir.jsxs)(Sa,{children:[(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Unified Components:"})," A comprehensive library of reusable UI components that maintain consistency across all Lenovo products."]}),(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Design Tokens:"})," Standardized design variables for colors, typography, spacing, and other foundational elements."]}),(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Accessibility:"})," Built-in accessibility features ensuring all components meet WCAG guidelines."]}),(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Documentation:"})," Detailed guidelines and best practices for implementing the design system effectively."]})]})]}),(0,Ir.jsxs)(wa,{children:[(0,Ir.jsx)(ka,{children:"Who It's For"}),(0,Ir.jsxs)(Sa,{children:[(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Designers:"})," Create consistent designs using our Figma libraries and guidelines."]}),(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Developers:"})," Build robust applications using our React component library and documentation."]}),(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Product Managers:"})," Ensure product consistency and quality across the Lenovo ecosystem."]}),(0,Ir.jsxs)("li",{children:[(0,Ir.jsx)("strong",{children:"Content Strategists:"})," Maintain consistent voice and tone using our content guidelines."]})]})]}),(0,Ir.jsxs)(wa,{children:[(0,Ir.jsx)(ka,{children:"Version Information"}),(0,Ir.jsx)(ga,{children:"Cake is continuously evolving to meet the needs of our teams and users. The current version (4.0.1) introduces improved accessibility features, expanded component library, and enhanced documentation."})]})]});const Ea=n.p+"static/media/icon full color.c5f43b778340b71a9564f8cbea84a26c.svg",Aa=kr.div`
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
`,Ra=kr.p`
  margin: 0;
  color: #334155;
  line-height: 1.5;
  font-family: ${Dr};
  font-size: 14px;
  max-width: 680px;
`,Ta=kr.div`
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
`,()=>(0,Ir.jsxs)(Aa,{children:[(0,Ir.jsxs)(Ca,{children:[(0,Ir.jsx)(Fa,{children:"Resources"}),(0,Ir.jsx)(Da,{children:"Access our comprehensive collection of design resources including Figma libraries and brand assets designed for different use cases and industries."})]}),(0,Ir.jsxs)(za,{children:[(0,Ir.jsx)(Ma,{children:"Figma Libraries"}),(0,Ir.jsx)(Ia,{children:"Design system libraries and components for different use cases and industries."}),(0,Ir.jsx)($a,{children:[{title:"Cake",description:"Core design system components and foundations for Lenovo products.",link:"https://www.figma.com/community/file/1397963315281891204/cake-one-lenovo-design-system"},{title:"Cake for AI (C4AI)",description:"Specialized components and patterns for AI-powered interfaces and experiences.",link:"https://www.figma.com/community/file/1537497596724978160/cake-for-ai"}].map((e,t)=>(0,Ir.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},children:(0,Ir.jsx)(zo,{elevated:!0,hoverable:!0,children:(0,Ir.jsxs)(zo.Body,{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,Ir.jsxs)(_a,{children:[(0,Ir.jsx)(Ta,{children:(0,Ir.jsx)("img",{src:Ea,alt:"Figma"})}),(0,Ir.jsx)(Oa,{children:(0,Ir.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h12V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7z"})})})]}),(0,Ir.jsx)(La,{children:e.title}),(0,Ir.jsx)(Ra,{style:{marginBottom:"20px",flex:1},children:e.description})]})},t)}))})]})]}));var Na=n(6502),Ba=n(9882);const Ua=Er`
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
`,kr(hi.A)`
  color: #047857;
`,kr(Ki)`
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
`,ol=(kr.button`
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
`,()=>(0,Ir.jsxs)(Ir.Fragment,{children:[(0,Ir.jsx)(Va,{}),(0,Ir.jsxs)(Ga,{children:[(0,Ir.jsxs)(Ka,{children:[(0,Ir.jsx)(qa,{children:"Cake"}),(0,Ir.jsx)(Qa,{children:"Ingredients for great design."})]}),(0,Ir.jsxs)(el,{children:[(0,Ir.jsx)(Fe,{to:"/resources",style:{textDecoration:"none",color:"inherit",display:"block",height:"100%"},children:(0,Ir.jsx)(zo,{elevated:!0,hoverable:!0,style:{display:"flex",flexDirection:"column",height:"100%"},children:(0,Ir.jsxs)(zo.Body,{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Ir.jsxs)("div",{children:[(0,Ir.jsx)(nl,{style:{fontSize:"1.125rem",marginBottom:"0.5rem"},children:"Get started"}),(0,Ir.jsx)(rl,{style:{marginBottom:"1.25rem",fontSize:"1rem"},children:"Start building modular, accessible, and brand-aligned features using our core components. Explore foundations, patterns, and reusable components to design faster and more consistently across Lenovo products."})]}),(0,Ir.jsx)("div",{style:{marginTop:"auto"},children:(0,Ir.jsxs)("button",{style:{background:"none",border:"none",color:"#1D4ED8",fontFamily:Dr,fontSize:"0.875rem",fontWeight:"600",cursor:"pointer",padding:"0",margin:"0",textAlign:"left",textDecoration:"none",display:"flex",alignItems:"center",gap:"4px"},children:["Access Figma Libraries",(0,Ir.jsx)(Na.A,{style:{width:"16px",height:"16px"}})]})})]})})}),(0,Ir.jsx)(Fe,{to:"/whats-new",style:{textDecoration:"none",color:"inherit",display:"block",height:"100%"},children:(0,Ir.jsx)(zo,{elevated:!0,hoverable:!0,style:{display:"flex",flexDirection:"column",height:"100%"},children:(0,Ir.jsxs)(zo.Body,{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Ir.jsxs)("div",{children:[(0,Ir.jsx)(nl,{style:{fontSize:"1.125rem",marginBottom:"1rem"},children:"What's new"}),(0,Ir.jsx)("div",{style:{padding:"1rem",border:"1px solid #E2E8F0",borderRadius:"0.75rem",background:"white"},children:(0,Ir.jsxs)("div",{children:[(0,Ir.jsx)(Ya,{style:{fontSize:"0.75rem",marginBottom:"0.5rem"},children:(new Date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}),(0,Ir.jsx)(Xa,{style:{fontSize:"1rem",marginBottom:"0.5rem"},children:"\ud83c\udf89 Cake Web V2 Update"})]})})]}),(0,Ir.jsx)("div",{style:{marginTop:"auto",paddingTop:"1rem"},children:(0,Ir.jsxs)("button",{style:{background:"none",border:"none",color:"#1D4ED8",fontFamily:Dr,fontSize:"0.875rem",fontWeight:"600",cursor:"pointer",padding:"0",margin:"0",textAlign:"left",textDecoration:"none",display:"flex",alignItems:"center",gap:"4px"},children:["Find out what's new",(0,Ir.jsx)(Na.A,{style:{width:"16px",height:"16px"}})]})})]})})})]}),(0,Ir.jsxs)(Ja,{style:{marginTop:"2rem"},children:[(0,Ir.jsx)(Za,{style:{fontSize:"1.5rem",fontWeight:"600",marginBottom:"1rem",color:"#0F172A"},children:"Why build with Cake?"}),(0,Ir.jsxs)(el,{children:[(0,Ir.jsx)(zo,{elevated:!0,style:{display:"flex",flexDirection:"column"},children:(0,Ir.jsxs)(zo.Body,{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Ir.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",marginBottom:"1rem"},children:(0,Ir.jsx)(tl,{children:(0,Ir.jsx)("svg",{width:"2rem",height:"2rem",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H19c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"})})})}),(0,Ir.jsx)(nl,{style:{fontSize:"1.125rem",marginBottom:"0.5rem"},children:"Modularity"}),(0,Ir.jsx)(rl,{style:{marginBottom:"1.25rem",flex:1,fontSize:"1rem"},children:"Build with confidence using our modular component system. Mix and match components to create consistent, scalable interfaces that adapt to your needs."})]})}),(0,Ir.jsx)(zo,{elevated:!0,style:{display:"flex",flexDirection:"column"},children:(0,Ir.jsxs)(zo.Body,{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Ir.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",marginBottom:"1rem"},children:(0,Ir.jsx)(tl,{children:(0,Ir.jsx)("svg",{width:"2rem",height:"2rem",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"})})})}),(0,Ir.jsx)(nl,{style:{fontSize:"1.125rem",marginBottom:"0.5rem"},children:"Accessibility"}),(0,Ir.jsxs)(rl,{style:{marginBottom:"1.25rem",flex:1,fontSize:"1rem"},children:["Every Cake component is built to meet"," ",(0,Ir.jsx)("a",{href:"https://www.w3.org/TR/WCAG22/",target:"_blank",rel:"noopener noreferrer",style:{color:"#1D4ED8",textDecoration:"none"},children:"WCAG 2.2 AA standards"}),", ensuring your experiences are accessible, inclusive, and usable by everyone, regardless of ability or device."]})]})}),(0,Ir.jsx)(zo,{elevated:!0,style:{display:"flex",flexDirection:"column"},children:(0,Ir.jsxs)(zo.Body,{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Ir.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",marginBottom:"1rem"},children:(0,Ir.jsx)(tl,{children:(0,Ir.jsx)(Ba.A,{})})}),(0,Ir.jsx)(nl,{style:{fontSize:"1.125rem",marginBottom:"0.5rem"},children:"Brand"}),(0,Ir.jsx)(rl,{style:{marginBottom:"1.25rem",flex:1,fontSize:"1rem"},children:"Maintain brand consistency across all your applications. Cake provides the building blocks that reflect Lenovo's design language and values."})]})})]})]})]})]})),il=kr.div`
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
`,kr(fi.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#1D4ED8"};
`),gl=kr(hi.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#047857"};
`,xl=kr(mi.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#C2410C"};
`,vl=kr(gi.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#B91C1C"};
`,yl="light.a",bl="dark.a",wl=(e,t)=>{switch(e){case Wi.INFO:return(0,Ir.jsx)(ml,{isDarkMode:t});case Wi.SUCCESS:return(0,Ir.jsx)(gl,{isDarkMode:t});case Wi.WARNING:return(0,Ir.jsx)(xl,{isDarkMode:t});case Wi.ERROR:return(0,Ir.jsx)(vl,{isDarkMode:t});default:return null}},kl=()=>{const[e,n]=(0,t.useState)(Hi.LARGE),[r,o]=(0,t.useState)(Vi.PILL),[i,a]=(0,t.useState)(!1),[l,s]=(0,t.useState)(!0),[c,u]=(0,t.useState)(!1),[d,p]=(0,t.useState)(yl),f=d===bl,h=e=>e.charAt(0).toUpperCase()+e.slice(1);return(0,Ir.jsxs)(il,{children:[(0,Ir.jsxs)(al,{children:[(0,Ir.jsx)(ll,{children:"Chip"}),(0,Ir.jsx)(sl,{children:"The Chip Component is a compact and versatile UI element used to represent discrete pieces of information, attributes, or actions within an interface. It offers a visually appealing way to display and interact with small sets of data or options."})]}),(0,Ir.jsxs)(cl,{children:[(0,Ir.jsxs)(ul,{children:[(0,Ir.jsxs)(dl,{children:[(0,Ir.jsx)(pl,{children:"Size"}),(0,Ir.jsx)(fl,{value:e,onChange:e=>n(e.target.value),children:Object.values(Hi).map(e=>(0,Ir.jsx)("option",{value:e,children:e.toLowerCase()},e))})]}),(0,Ir.jsxs)(dl,{children:[(0,Ir.jsx)(pl,{children:"Style"}),(0,Ir.jsx)(fl,{value:r,onChange:e=>o(e.target.value),children:Object.values(Vi).map(e=>(0,Ir.jsx)("option",{value:e,children:e.toLowerCase()},e))})]}),(0,Ir.jsxs)(dl,{children:[(0,Ir.jsx)(pl,{children:"Icons"}),(0,Ir.jsxs)(fl,{value:c?"icon-only":`${i}-${l}`,onChange:e=>{const t=e.target.value;if("icon-only"===t)u(!0),a(!0),s(!1);else{u(!1);const[e,n]=t.split("-");a("true"===e),s("true"===n)}},children:[(0,Ir.jsx)("option",{value:"icon-only",children:"Icon only"}),(0,Ir.jsx)("option",{value:"true-false",children:"Left icon only"}),(0,Ir.jsx)("option",{value:"false-true",children:"Right icon only"}),(0,Ir.jsx)("option",{value:"false-false",children:"No icons"})]})]}),(0,Ir.jsxs)(dl,{children:[(0,Ir.jsx)(pl,{children:"Theme"}),(0,Ir.jsxs)(fl,{value:d,onChange:e=>p(e.target.value),children:[(0,Ir.jsx)("option",{value:yl,children:"Light.a"}),(0,Ir.jsx)("option",{value:bl,children:"Dark.a"})]})]})]}),(0,Ir.jsx)(hl,{isDarkMode:f,children:Object.values(Wi).map(t=>(0,Ir.jsx)(Ki,{type:t,size:e,chipStyle:r,label:c?void 0:h(t),leftIcon:i||c?wl(t,f):null,rightIcon:l&&!c?wl(t,f):null,isIconOnly:c,isDarkMode:f},t))})]})]})};var Sl=n(4536);const jl=Er`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,El=kr.button`
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


`,Al=kr.div`
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
  animation: ${jl} 0.2s ease-out;
  
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
`,Fl=e=>{let{label:n="Dropdown",items:r=[],disabled:o=!1,buttonStyle:i="pill",size:a="medium",isDarkMode:l=!1,className:s,onSelect:c,renderItem:u,position:d="bottom-left",variant:p="primary"}=e;const[f,h]=(0,t.useState)(!1),[m,g]=(0,t.useState)(null),[x,v]=(0,t.useState)({direction:d.startsWith("bottom")?"down":"up",alignment:d.endsWith("right")?"right":"left"}),y=(0,t.useRef)(null),b=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(f&&y.current&&b.current){const e=()=>{const e=((e,t,n)=>{const r=e.getBoundingClientRect(),o=t.offsetHeight,i=window.innerHeight-r.bottom,a=r.top;let l;return l=n.startsWith("bottom")&&i>=o+20?"down":n.startsWith("top")&&a>=o+20?"up":i>=a?"down":"up",{direction:l,alignment:n.endsWith("right")?"right":"left"}})(y.current,b.current,d);v(e)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}},[f,d]),(0,t.useEffect)(()=>{const e=e=>{y.current&&!y.current.contains(e.target)&&b.current&&!b.current.contains(e.target)&&h(!1)},t=e=>{"Escape"===e.key&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}},[]);const w=e=>{g(t=>{const n=t===e?null:e;return console.log("Previous selection:",t),console.log("New selection:",n),n}),h(!1),null===c||void 0===c||c(e)};return(0,Ir.jsxs)("div",{style:{position:"relative",display:"inline-block"},children:[(0,Ir.jsxs)(El,{ref:y,disabled:o,onClick:()=>{o||h(!f)},onKeyDown:e=>{var t;if(!o)switch(e.key){case"Enter":case" ":e.preventDefault(),h(!f);break;case"ArrowDown":if(f&&r.length>0){e.preventDefault();const t=m?r.indexOf(m):-1,n=t<r.length-1?t+1:0,o=document.querySelectorAll('[role="menuitem"]');o[n]&&o[n].focus()}break;case"ArrowUp":if(f&&r.length>0){e.preventDefault();const t=m?r.indexOf(m):0,n=t>0?t-1:r.length-1,o=document.querySelectorAll('[role="menuitem"]');o[n]&&o[n].focus()}break;case"Enter":case" ":if(f&&"menuitem"===(null===(t=document.activeElement)||void 0===t?void 0:t.getAttribute("role"))){e.preventDefault();const t=r[Array.from(document.querySelectorAll('[role="menuitem"]')).indexOf(document.activeElement)];t&&w(t)}}},$isOpen:f,buttonStyle:i,size:a,isDarkMode:l,className:s,variant:p,"aria-haspopup":"true","aria-expanded":f,"aria-disabled":o,children:[n,(0,Ir.jsx)("span",{className:"icon",children:(0,Ir.jsx)(Sl.A,{})})]}),f&&(0,Ir.jsx)(Al,{ref:b,position:d,isDarkMode:l,role:"menu",$calculatedPosition:x,className:`dropdown-${x.direction}`,children:r.map((e,t)=>(0,Ir.jsx)(Cl,{onClick:()=>w(e),selected:m===e,isDarkMode:l,role:"menuitem",tabIndex:-1,"aria-selected":m===e,children:u?u(e,m===e):e},t))})]})},Dl=kr.div`
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
`,Ml=e=>{let{options:n,value:r,defaultValue:o,onChange:i,disabled:a=!1,className:l,isDarkMode:s=!1,size:c="medium"}=e;const[u,d]=(0,t.useState)(o),p=void 0!==r,f=p?r:u,h=(0,t.useCallback)(e=>{if(a)return;const t=f===e?void 0:e;p||d(t),null===i||void 0===i||i(t)},[a,p,i,f]);return(0,Ir.jsx)(Dl,{className:l,$isDarkMode:s,role:"radiogroup",children:n.map((e,t)=>(0,Ir.jsx)(zl,{onClick:()=>h(e.value),$selected:f===e.value,$isDarkMode:s,$size:c,$isFirst:0===t,$isLast:t===n.length-1,disabled:a||e.disabled,role:"radio","aria-checked":f===e.value,type:"button",children:e.label},e.value))})},Il=kr.div`
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
`,Rl=kr.p`
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
`,Tl=kr.section`
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
`,Wl="light.a",Hl="dark.a",Vl="disabled",Gl="loading",Kl=()=>{const[e,n]=(0,t.useState)(ai.MEDIUM),[r,o]=(0,t.useState)(li.NONE),[i,a]=(0,t.useState)(""),[l,s]=(0,t.useState)(Wl),[c,u]=(0,t.useState)(si.PILL),d=l===Hl,[p,f]=(0,t.useState)(ai.MEDIUM),[h,m]=(0,t.useState)(li.NONE),[g,x]=(0,t.useState)(""),[v,y]=(0,t.useState)(Wl),[b,w]=(0,t.useState)(si.PILL),k=v===Hl,[S,j]=(0,t.useState)(ai.MEDIUM),[E,A]=(0,t.useState)(""),[C,F]=(0,t.useState)(Wl),[D,z]=(0,t.useState)(si.PILL),M=C===Hl,[I,$]=(0,t.useState)(ai.MEDIUM),[L,R]=(0,t.useState)(""),[T,_]=(0,t.useState)(Wl),[O,P]=(0,t.useState)(si.PILL),N=T===Hl,[B,U]=(0,t.useState)("medium"),[W,H]=(0,t.useState)(""),[V,G]=(0,t.useState)(Wl),K=V===Hl,Y=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),X=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();return(0,Ir.jsxs)(Il,{children:[(0,Ir.jsxs)($l,{children:[(0,Ir.jsx)(Ll,{children:"Button"}),(0,Ir.jsx)(Rl,{children:"The Button Component is a fundamental element of the user interface used for triggering actions, navigating between pages, or submitting forms. It provides a clear call-to-action and enhances user interaction within the application or website."})]}),(0,Ir.jsxs)(Tl,{children:[(0,Ir.jsx)(_l,{children:"Basic button"}),(0,Ir.jsxs)(Ol,{children:[(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Size"}),(0,Ir.jsx)(Bl,{value:e,onChange:e=>n(e.target.value),children:Object.values(ai).filter(e=>e!==ai.SMALL&&e!==ai.XLARGE).map(e=>(0,Ir.jsx)("option",{value:e,children:Y(e)},e))})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Icon position"}),(0,Ir.jsxs)(Bl,{value:r,onChange:e=>o(e.target.value),children:[(0,Ir.jsx)("option",{value:li.NONE,children:"No icon"}),(0,Ir.jsx)("option",{value:li.LEFT,children:"Left icon"}),(0,Ir.jsx)("option",{value:li.RIGHT,children:"Right icon"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Style"}),(0,Ir.jsxs)(Bl,{value:c,onChange:e=>u(e.target.value),children:[(0,Ir.jsx)("option",{value:si.PILL,children:"Pill"}),(0,Ir.jsx)("option",{value:si.SQUARE,children:"Square"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"State"}),(0,Ir.jsxs)(Bl,{value:i,onChange:e=>a(e.target.value),children:[(0,Ir.jsx)("option",{value:"",children:"None"}),(0,Ir.jsx)("option",{value:Vl,children:"Disabled"}),(0,Ir.jsx)("option",{value:Gl,children:"Loading"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Theme"}),(0,Ir.jsxs)(Bl,{value:l,onChange:e=>s(e.target.value),children:[(0,Ir.jsx)("option",{value:Wl,children:"Light.a"}),(0,Ir.jsx)("option",{value:Hl,children:"Dark.a"})]})]})]}),(0,Ir.jsx)(Ul,{isDarkMode:d,children:Object.values(ri).filter(e=>e!==ri.TEXT&&e!==ri.ICON).map(t=>(0,Ir.jsx)(pi,{variant:t,size:e,iconPosition:r,buttonStyle:c,label:X(t),disabled:i===Vl,loading:i===Gl,isDarkMode:d},t))})]}),(0,Ir.jsxs)(Tl,{children:[(0,Ir.jsx)(_l,{children:"Text button"}),(0,Ir.jsxs)(Ol,{children:[(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Size"}),(0,Ir.jsx)(Bl,{value:p,onChange:e=>f(e.target.value),children:Object.values(ai).filter(e=>e!==ai.SMALL&&e!==ai.XLARGE).map(e=>(0,Ir.jsx)("option",{value:e,children:Y(e)},e))})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Icon position"}),(0,Ir.jsxs)(Bl,{value:h,onChange:e=>m(e.target.value),children:[(0,Ir.jsx)("option",{value:li.NONE,children:"No icon"}),(0,Ir.jsx)("option",{value:li.LEFT,children:"Left icon"}),(0,Ir.jsx)("option",{value:li.RIGHT,children:"Right icon"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Style"}),(0,Ir.jsxs)(Bl,{value:b,onChange:e=>w(e.target.value),children:[(0,Ir.jsx)("option",{value:si.PILL,children:"Pill"}),(0,Ir.jsx)("option",{value:si.SQUARE,children:"Square"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"State"}),(0,Ir.jsxs)(Bl,{value:g,onChange:e=>x(e.target.value),children:[(0,Ir.jsx)("option",{value:"",children:"None"}),(0,Ir.jsx)("option",{value:Vl,children:"Disabled"}),(0,Ir.jsx)("option",{value:Gl,children:"Loading"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Theme"}),(0,Ir.jsxs)(Bl,{value:v,onChange:e=>y(e.target.value),children:[(0,Ir.jsx)("option",{value:Wl,children:"Light.a"}),(0,Ir.jsx)("option",{value:Hl,children:"Dark.a"})]})]})]}),(0,Ir.jsxs)(Ul,{isDarkMode:k,children:[(0,Ir.jsx)(pi,{variant:ri.TEXT,textVariant:"primary",size:p,iconPosition:h,buttonStyle:b,label:"Primary",disabled:g===Vl,loading:g===Gl,isDarkMode:k}),(0,Ir.jsx)(pi,{variant:ri.TEXT,textVariant:"secondary",size:p,iconPosition:h,buttonStyle:b,label:"Secondary",disabled:g===Vl,loading:g===Gl,isDarkMode:k})]})]}),(0,Ir.jsxs)(Tl,{children:[(0,Ir.jsx)(_l,{children:"Icon button"}),(0,Ir.jsxs)(Ol,{children:[(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Size"}),(0,Ir.jsxs)(Bl,{value:S,onChange:e=>j(e.target.value),children:[(0,Ir.jsx)("option",{value:ai.SMALL,children:"Small"}),(0,Ir.jsx)("option",{value:ai.MEDIUM,children:"Medium"}),(0,Ir.jsx)("option",{value:ai.LARGE,children:"Large"}),(0,Ir.jsx)("option",{value:ai.XLARGE,children:"XLarge"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Style"}),(0,Ir.jsxs)(Bl,{value:D,onChange:e=>z(e.target.value),children:[(0,Ir.jsx)("option",{value:si.PILL,children:"Pill"}),(0,Ir.jsx)("option",{value:si.SQUARE,children:"Square"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"State"}),(0,Ir.jsxs)(Bl,{value:E,onChange:e=>A(e.target.value),children:[(0,Ir.jsx)("option",{value:"",children:"None"}),(0,Ir.jsx)("option",{value:Vl,children:"Disabled"}),(0,Ir.jsx)("option",{value:Gl,children:"Loading"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Theme"}),(0,Ir.jsxs)(Bl,{value:C,onChange:e=>F(e.target.value),children:[(0,Ir.jsx)("option",{value:Wl,children:"Light.a"}),(0,Ir.jsx)("option",{value:Hl,children:"Dark.a"})]})]})]}),(0,Ir.jsxs)(Ul,{isDarkMode:M,children:[(0,Ir.jsx)(pi,{variant:ri.ICON,iconVariant:ii.PRIMARY,size:S,iconPosition:li.NONE,buttonStyle:D,"aria-label":"Download",disabled:E===Vl,loading:E===Gl,isDarkMode:M}),(0,Ir.jsx)(pi,{variant:ri.ICON,iconVariant:ii.SECONDARY,size:S,iconPosition:li.NONE,buttonStyle:D,"aria-label":"Download",disabled:E===Vl,loading:E===Gl,isDarkMode:M})]})]}),(0,Ir.jsxs)(Tl,{children:[(0,Ir.jsx)(_l,{children:"Dropdown button"}),(0,Ir.jsxs)(Ol,{children:[(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Size"}),(0,Ir.jsx)(Bl,{value:I,onChange:e=>$(e.target.value),children:Object.values(ai).filter(e=>e!==ai.SMALL&&e!==ai.XLARGE).map(e=>(0,Ir.jsx)("option",{value:e,children:Y(e)},e))})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Style"}),(0,Ir.jsxs)(Bl,{value:O,onChange:e=>P(e.target.value),children:[(0,Ir.jsx)("option",{value:si.PILL,children:"Pill"}),(0,Ir.jsx)("option",{value:si.SQUARE,children:"Square"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"State"}),(0,Ir.jsxs)(Bl,{value:L,onChange:e=>R(e.target.value),children:[(0,Ir.jsx)("option",{value:"",children:"None"}),(0,Ir.jsx)("option",{value:Vl,children:"Disabled"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Theme"}),(0,Ir.jsxs)(Bl,{value:T,onChange:e=>_(e.target.value),children:[(0,Ir.jsx)("option",{value:Wl,children:"Light.a"}),(0,Ir.jsx)("option",{value:Hl,children:"Dark.a"})]})]})]}),(0,Ir.jsxs)(Ul,{isDarkMode:N,children:[(0,Ir.jsx)(Fl,{label:"Primary",items:["Item","Item","Item","Item","Item"],disabled:L===Vl,buttonStyle:O,size:I,isDarkMode:N}),(0,Ir.jsx)(Fl,{label:"Secondary",items:["Item","Item","Item","Item","Item"],disabled:L===Vl,buttonStyle:O,size:I,isDarkMode:N,variant:"secondary"})]})]}),(0,Ir.jsxs)(Tl,{children:[(0,Ir.jsx)(_l,{children:"Toggle group"}),(0,Ir.jsxs)(Ol,{children:[(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Size"}),(0,Ir.jsxs)(Bl,{value:B,onChange:e=>U(e.target.value),children:[(0,Ir.jsx)("option",{value:"medium",children:"Medium"}),(0,Ir.jsx)("option",{value:"large",children:"Large"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"State"}),(0,Ir.jsxs)(Bl,{value:W,onChange:e=>H(e.target.value),children:[(0,Ir.jsx)("option",{value:"",children:"None"}),(0,Ir.jsx)("option",{value:Vl,children:"Disabled"})]})]}),(0,Ir.jsxs)(Pl,{children:[(0,Ir.jsx)(Nl,{children:"Theme"}),(0,Ir.jsxs)(Bl,{value:V,onChange:e=>G(e.target.value),children:[(0,Ir.jsx)("option",{value:Wl,children:"Light.a"}),(0,Ir.jsx)("option",{value:Hl,children:"Dark.a"})]})]})]}),(0,Ir.jsxs)(Ul,{isDarkMode:K,children:[(0,Ir.jsx)(Ml,{options:[{label:"AM",value:"am"},{label:"PM",value:"pm"}],size:B,disabled:W===Vl,isDarkMode:K}),(0,Ir.jsx)(Ml,{options:[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"}],size:B,disabled:W===Vl,isDarkMode:K})]})]})]})},Yl=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()))(e);return t.charAt(0).toUpperCase()+t.slice(1)},Xl=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()},ql=e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0};var Ql={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Jl=(0,t.forwardRef)((e,n)=>{let{color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:l="",children:s,iconNode:c,...u}=e;return(0,t.createElement)("svg",{ref:n,...Ql,width:o,height:o,stroke:r,strokeWidth:a?24*Number(i)/Number(o):i,className:Xl("lucide",l),...!s&&!ql(u)&&{"aria-hidden":"true"},...u},[...c.map(e=>{let[n,r]=e;return(0,t.createElement)(n,r)}),...Array.isArray(s)?s:[s]])}),Zl=((e,n)=>{const r=(0,t.forwardRef)((r,o)=>{let{className:i,...a}=r;return(0,t.createElement)(Jl,{ref:o,iconNode:n,className:Xl(`lucide-${l=Yl(e),l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...a});var l});return r.displayName=Yl(e),r})("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),es=kr.div`
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
`,os=kr.div`
  flex: 1;
  min-width: 0;
`,is=kr.h3`
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
`,us=e=>{let{title:t,subtitle:n,content:r,isExpanded:o,onToggle:i,theme:a="light",disabled:l=!1,id:s}=e;const c=`accordion-header-${s}`,u=`accordion-panel-${s}`;return(0,Ir.jsxs)(ns,{theme:a,disabled:l,role:"presentation",children:[(0,Ir.jsxs)(rs,{onClick:i,"aria-expanded":o,"aria-controls":u,id:c,theme:a,disabled:l,"aria-disabled":l,children:[(0,Ir.jsx)(os,{children:(0,Ir.jsx)(is,{theme:a,children:t})}),(0,Ir.jsx)(ls,{theme:a,isExpanded:o,"aria-hidden":"true"})]}),(0,Ir.jsxs)(ss,{theme:a,isExpanded:o,role:"region","aria-labelledby":c,id:u,children:[n&&(0,Ir.jsx)(as,{theme:a,id:`${u}-subtitle`,children:n}),(0,Ir.jsx)(cs,{theme:a,children:r})]})]})},ds=e=>{let{items:n,theme:r="light",disabled:o=!1}=e;const i=t.useId(),[a,l]=(0,t.useState)(new Set);return(0,Ir.jsx)(es,{role:"presentation",children:(0,Ir.jsx)(ts,{theme:r,disabled:o,role:"list","aria-label":"Accordion",children:n.map(e=>(0,Ir.jsx)(us,{...e,id:`${i}-${e.id}`,theme:r,isExpanded:a.has(e.id),onToggle:()=>{return t=e.id,void(o||l(e=>{const n=new Set(e);return e.has(t)?n.delete(t):n.add(t),n}));var t},disabled:o},e.id))})})},ps=kr.div`
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
`,ks="light",Ss="dark",js="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",Es=[{id:"1",title:"Title",content:js},{id:"2",title:"Title",content:js,subtitle:"Subtitle"},{id:"3",title:"Title",content:js},{id:"4",title:"Title",content:js}],As=()=>{const[e,n]=(0,t.useState)(ks),r=e===Ss;return(0,Ir.jsxs)(ps,{children:[(0,Ir.jsxs)(fs,{children:[(0,Ir.jsx)(hs,{children:"Accordion"}),(0,Ir.jsx)(ms,{children:"Accordions are interactive components that expand and collapse to reveal content, helping users manage information density and maintain context."})]}),(0,Ir.jsxs)(gs,{children:[(0,Ir.jsx)(xs,{children:(0,Ir.jsxs)(vs,{children:[(0,Ir.jsx)(ys,{children:"Theme"}),(0,Ir.jsxs)(bs,{value:e,onChange:e=>n(e.target.value),children:[(0,Ir.jsx)("option",{value:ks,children:"Light.a"}),(0,Ir.jsx)("option",{value:Ss,children:"Dark.a"})]})]})}),(0,Ir.jsx)(ws,{isDarkMode:r,children:(0,Ir.jsx)(ds,{items:Es,theme:e})})]})]})};var Cs=n(5502);const Fs=n.p+"static/media/moto_ai.c5f68773b0ff40aa6a981017f522b827.svg";const Ds=n.p+"static/media/moto_ai_color.dedad4eb8931a964b63a18720feb0c25.svg";const zs=n.p+"static/media/robo_1.b02753fb44b056683a1c016b94d986ca.svg";const Ms=n.p+"static/media/robo_2.e39f3910b4d6fe81f64767d4fc2f53d9.svg",Is=kr.div`
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
`,Rs=kr.section`
  margin-bottom: 48px;
`,Ts=kr.h2`
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
`,Ps=kr(zo)`
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
`,Gs=()=>(0,Ir.jsxs)(Is,{children:[(0,Ir.jsx)($s,{children:"Icon & Identity"}),(0,Ir.jsx)(Ls,{children:"Our AI icon and identity system ensures a consistent, recognizable look across all products and platforms. It's designed to communicate intelligence, approachability, and trust while aligning with the broader brand language."}),(0,Ir.jsxs)(Rs,{children:[(0,Ir.jsx)(Ts,{children:"Logo usage"}),(0,Ir.jsx)(_s,{children:"Lenovo's AI identity will maintain consistency across all software applications. The Moto AI logo has been adapted as the standard iconography for AI features within these applications."}),(0,Ir.jsxs)(Os,{children:[(0,Ir.jsx)(Ps,{type:"do",children:(0,Ir.jsxs)(zo.Body,{children:[(0,Ir.jsxs)(Us,{type:"do",children:[(0,Ir.jsx)(Ws,{type:"do",children:(0,Ir.jsx)(hi.A,{})}),(0,Ir.jsx)(Hs,{type:"do",children:"Do"})]}),(0,Ir.jsxs)(Ns,{children:[(0,Ir.jsx)(Bs,{src:Ds,alt:"Moto AI color icon"}),(0,Ir.jsx)(Bs,{src:Fs,alt:"Moto AI icon"})]}),(0,Ir.jsx)(Vs,{children:"Use the Moto AI logo as the primary visual identity for Lenovo AI software."})]})}),(0,Ir.jsx)(Ps,{type:"dont",children:(0,Ir.jsxs)(zo.Body,{children:[(0,Ir.jsxs)(Us,{type:"dont",children:[(0,Ir.jsx)(Ws,{type:"dont",children:(0,Ir.jsx)(Cs.A,{})}),(0,Ir.jsx)(Hs,{type:"dont",children:"Don't"})]}),(0,Ir.jsxs)(Ns,{smaller:!0,children:[(0,Ir.jsx)(Bs,{smaller:!0,src:zs,alt:"Example of robot imagery to avoid - robot 1"}),(0,Ir.jsx)(Bs,{smaller:!0,src:Ms,alt:"Example of robot imagery to avoid - robot 2"})]}),(0,Ir.jsx)(Vs,{children:"Do not use robot and / or android images for Lenovo AI software."})]})})]})]})]});var Ks=n(2177);const Ys={IMAGE:"image",INITIALS:"initials",ICON:"icon"},Xs={XLARGE:"64",LARGE:"48",MEDIUM:"40",SMALL:"32"},qs=kr.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: ${e=>`${e.size}px`};
  height: ${e=>`${e.size}px`};
  border-radius: 50%;
  background-color: ${e=>{return t=e.variant,n=e.isDarkMode,t===Ys.INITIALS||t===Ys.ICON?n?"#CBD5E1":"#E2E8F0":"transparent";var t,n}};
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
    font-size: ${e=>{switch(e.size){case Xs.XLARGE:return"24px";case Xs.LARGE:return"20px";case Xs.MEDIUM:return"16px";case Xs.SMALL:return"14px";default:return"16px"}}};
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
`,Qs=e=>{let{variant:n=Ys.ICON,size:r=Xs.MEDIUM,src:o,initials:i,alt:a,isDarkMode:l=!1,className:s,...c}=e;const[u,d]=t.useState(!1),p=()=>{d(!0)};return(0,Ir.jsx)(qs,{variant:u?Ys.ICON:n,size:r,isDarkMode:l,className:s,role:"img","aria-label":a,...c,children:n===Ys.IMAGE&&o&&!u?(0,Ir.jsx)("img",{src:o,alt:a,onError:p}):n===Ys.INITIALS&&i?(0,Ir.jsx)("span",{className:"initials",children:i.slice(0,2)}):(0,Ir.jsx)(Ks.A,{className:"icon"})})};const Js=n.p+"static/media/avatar.e74bce257af805a2cf17dceb8fadcfc4.svg",Zs="light.a",ec="dark.a",tc=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,nc=kr.div`
  margin-bottom: 48px;
`,rc=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,oc=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,ic=kr.section`
  margin-bottom: 48px;
`,ac=kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,lc=kr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,sc=kr.label`
  font-weight: 600;
  color: #0F172A;
`,cc=kr.select`
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
`,uc=kr.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  align-items: center;
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,dc=()=>{const[e,n]=(0,t.useState)(Xs.MEDIUM),[r,o]=(0,t.useState)(Zs),i=r===ec,a=Js;return(0,Ir.jsxs)(tc,{children:[(0,Ir.jsxs)(nc,{children:[(0,Ir.jsx)(rc,{children:"Avatar"}),(0,Ir.jsx)(oc,{children:"Avatars are used to represent people or organizations. They can display images, initials, or a fallback icon."})]}),(0,Ir.jsxs)(ic,{children:[(0,Ir.jsxs)(ac,{children:[(0,Ir.jsxs)(lc,{children:[(0,Ir.jsx)(sc,{children:"Size"}),(0,Ir.jsxs)(cc,{value:e,onChange:e=>n(e.target.value),children:[(0,Ir.jsx)("option",{value:Xs.XLARGE,children:"Extra Large (64px)"}),(0,Ir.jsx)("option",{value:Xs.LARGE,children:"Large (48px)"}),(0,Ir.jsx)("option",{value:Xs.MEDIUM,children:"Medium (40px)"}),(0,Ir.jsx)("option",{value:Xs.SMALL,children:"Small (32px)"})]})]}),(0,Ir.jsxs)(lc,{children:[(0,Ir.jsx)(sc,{children:"Theme"}),(0,Ir.jsxs)(cc,{value:r,onChange:e=>o(e.target.value),children:[(0,Ir.jsx)("option",{value:Zs,children:"Light.a"}),(0,Ir.jsx)("option",{value:ec,children:"Dark.a"})]})]})]}),(0,Ir.jsxs)(uc,{isDarkMode:i,children:[(0,Ir.jsx)(Qs,{variant:Ys.IMAGE,size:e,src:a,alt:"Image Avatar",isDarkMode:i}),(0,Ir.jsx)(Qs,{variant:Ys.INITIALS,size:e,initials:"JD",alt:"Initials Avatar",isDarkMode:i}),(0,Ir.jsx)(Qs,{variant:Ys.ICON,size:e,alt:"Icon Avatar",isDarkMode:i})]})]})]})},pc={BLUE:"blue",RED:"red"},fc={SMALL:"small",MEDIUM:"medium",LARGE:"large"},hc=e=>{switch(e){case fc.SMALL:return{minWidth:"16px",height:"16px",fontSize:"10px",padding:"0 4px"};case fc.LARGE:return{minWidth:"24px",height:"24px",fontSize:"14px",padding:"0 8px"};default:return{minWidth:"20px",height:"20px",fontSize:"12px",padding:"0 6px"}}},mc=kr.span`
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
  min-width: ${e=>hc(e.size).minWidth};
  height: ${e=>hc(e.size).height};
  font-size: ${e=>hc(e.size).fontSize};
  padding: ${e=>{var t;const n=(null===(t=e.children)||void 0===t?void 0:t.toString())||"",r=/^\d{1}$/.test(n),o=hc(e.size).padding;return r?"0":o}};
  
  /* Color styles */
  background-color: ${e=>((e,t)=>{if(t)switch(e){case pc.BLUE:return"#60A5FA";case pc.RED:return"#FB7185";default:return"#60A5FA"}switch(e){case pc.BLUE:return"#1D4ED8";case pc.RED:return"#B91C1C";default:return"#1D4ED8"}})(e.color,e.isDarkMode)};
  color: ${e=>(e.color,e.isDarkMode?"#18181B":"#FFFFFF")};
  
  /* Transitions */
  transition: all 0.2s ease-in-out;
  
  /* Focus styles for accessibility */
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>e.isDarkMode?"#93C5FD":"#1D4ED8"};
  }
`,gc=e=>{let{color:t=pc.BLUE,size:n=fc.MEDIUM,isDarkMode:r=!1,children:o="1",className:i,...a}=e;const l=(null===o||void 0===o?void 0:o.toString())||"",s=/^\d+$/.test(l)&&l.length>0?l:"1";return(0,Ir.jsx)(mc,{color:t,size:n,isDarkMode:r,className:i,role:"status","aria-label":`Badge: ${s}`,...a,children:s})},xc=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,vc=kr.div`
  margin-bottom: 48px;
`,yc=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,bc=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,wc=kr.section`
  margin-bottom: 48px;
`,kc=(kr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),Sc=kr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,jc=kr.label`
  font-weight: 600;
  color: #0F172A;
`,Ec=kr.select`
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
`,Ac=kr.input`
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
`,Cc=kr.div`
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Fc="light.a",Dc="dark.a",zc=()=>{const[e,n]=(0,t.useState)("1"),[r,o]=(0,t.useState)(Fc),i=r===Dc;return(0,Ir.jsxs)(xc,{children:[(0,Ir.jsxs)(vc,{children:[(0,Ir.jsx)(yc,{children:"Badge"}),(0,Ir.jsx)(bc,{children:"The Badge component is a compact UI element used to display small amounts of information, such as notification counts, status indicators, or numerical labels. It automatically adapts its shape from circular (for single digits) to pill-shaped (for multi-digit numbers) to provide optimal visual presentation."})]}),(0,Ir.jsxs)(wc,{children:[(0,Ir.jsxs)(kc,{children:[(0,Ir.jsxs)(Sc,{children:[(0,Ir.jsx)(jc,{children:"Value"}),(0,Ir.jsx)(Ac,{type:"text",value:e,onChange:e=>{const t=e.target.value;(""===t||/^\d+$/.test(t))&&n(t)},placeholder:"Enter numbers only"})]}),(0,Ir.jsxs)(Sc,{children:[(0,Ir.jsx)(jc,{children:"Theme"}),(0,Ir.jsxs)(Ec,{value:r,onChange:e=>o(e.target.value),children:[(0,Ir.jsx)("option",{value:Fc,children:"Light.a"}),(0,Ir.jsx)("option",{value:Dc,children:"Dark.a"})]})]})]}),(0,Ir.jsxs)(Cc,{isDarkMode:i,children:[(0,Ir.jsx)(gc,{color:pc.BLUE,size:fc.MEDIUM,isDarkMode:i,children:e}),(0,Ir.jsx)(gc,{color:pc.RED,size:fc.MEDIUM,isDarkMode:i,children:e})]})]})]})},Mc={CHEVRON:"chevron",SLASH:"slash",ARROW:"arrow"},Ic={SMALL:"small",MEDIUM:"medium",LARGE:"large"},$c=e=>{switch(e){case Ic.SMALL:return{fontSize:"12px",lineHeight:"16px",iconSize:"14px",padding:"4px 8px"};case Ic.LARGE:return{fontSize:"16px",lineHeight:"24px",iconSize:"20px",padding:"8px 12px"};default:return{fontSize:"14px",lineHeight:"20px",iconSize:"16px",padding:"6px 10px"}}},Lc=kr.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${Dr};
  font-size: ${e=>$c(e.size).fontSize};
  line-height: ${e=>$c(e.size).lineHeight};
  
  /* Accessibility */
  aria-label: "Breadcrumb navigation";
`,Rc=kr.ol`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 16px;
`,Tc=kr.li`
  display: flex;
  align-items: center;
`,_c=kr.a`
  display: inline-flex;
  align-items: center;
  padding: ${e=>$c(e.size).padding};
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
`,Oc=kr.span`
  display: inline-flex;
  align-items: center;
  padding: ${e=>$c(e.size).padding};
  color: ${e=>e.isDarkMode?"#D4D4D8":"#171717"};
  font-size: 18px;
  font-weight: 600;
  cursor: default;
`,Pc=kr.span`
  display: inline-flex;
  align-items: center;
  color: ${e=>e.isDarkMode?"#A1A1AA":"#171717"};
  margin: 0 8px;
  
  svg {
    width: 24px;
    height: 24px;
  }
`,Nc=()=>(0,Ir.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,Ir.jsx)("polyline",{points:"9 18 15 12 9 6"})}),Bc=()=>(0,Ir.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,Ir.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,Ir.jsx)("polyline",{points:"12 5 19 12 12 19"})]}),Uc=()=>(0,Ir.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,Ir.jsx)("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),(0,Ir.jsx)("polyline",{points:"12 19 5 12 12 5"})]}),Wc=kr.div`
  margin-bottom: 8px;
`,Hc=e=>{let{size:t,isDarkMode:n,onClick:r,backButtonText:o,...i}=e;return(0,Ir.jsx)(pi,{variant:ri.TEXT,textVariant:oi.SECONDARY,iconPosition:li.LEFT,label:o,size:t,isDarkMode:n,onClick:r,"aria-label":`${o} button`,customIcon:(0,Ir.jsx)(Uc,{}),...i})},Vc=e=>{switch(e){case Mc.ARROW:return(0,Ir.jsx)(Bc,{});case Mc.SLASH:return"/";default:return(0,Ir.jsx)(Nc,{})}},Gc=e=>{let{items:t=[],showBackButton:n=!0,backButtonText:r="Back",separatorType:o=Mc.CHEVRON,size:i=Ic.MEDIUM,isDarkMode:a=!1,onBackClick:l,onItemClick:s,className:c,...u}=e;return(0,Ir.jsxs)(Lc,{size:i,isDarkMode:a,className:c,"aria-label":"Breadcrumb navigation",...u,children:[n&&(0,Ir.jsx)(Wc,{children:(0,Ir.jsx)(Hc,{size:i,isDarkMode:a,onClick:e=>{e.preventDefault(),l&&l(e)},backButtonText:r})}),(0,Ir.jsx)(Rc,{children:t.map((e,n)=>{const r=n===t.length-1,l=!r&&!1!==e.onClick;return(0,Ir.jsxs)(Tc,{children:[r?(0,Ir.jsx)(Oc,{size:i,isDarkMode:a,children:e.label}):(0,Ir.jsx)(_c,{size:i,isDarkMode:a,href:e.href||"#",onClick:l?e=>((e,t)=>{t.preventDefault(),s&&s(e,t)})(n,e):void 0,"aria-current":r?"page":void 0,children:e.label}),!r&&(0,Ir.jsx)(Pc,{isDarkMode:a,size:i,children:Vc(o)})]},n)})})]})},Kc=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Yc=kr.div`
  margin-bottom: 48px;
`,Xc=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,qc=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Qc=kr.section`
  margin-bottom: 48px;
`,Jc=(kr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),Zc=kr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,eu=kr.label`
  font-weight: 600;
  color: #0F172A;
`,tu=kr.select`
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
`,nu=(kr.input`
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
`),ru="light.a",ou="dark.a",iu=[{label:"Item",href:"/"},{label:"Item",href:"/item2"},{label:"Item",href:"/item3"},{label:"Item",href:"/item4"},{label:"Item",href:"/item5"}],au=()=>{const[e,n]=(0,t.useState)(ru),[r,o]=(0,t.useState)(!0),[i,a]=(0,t.useState)(2),l=e===ou,s=e=>iu.slice(0,Math.max(1,Math.min(e,iu.length)));return(0,Ir.jsxs)(Kc,{children:[(0,Ir.jsxs)(Yc,{children:[(0,Ir.jsx)(Xc,{children:"Breadcrumb"}),(0,Ir.jsx)(qc,{children:"The Breadcrumb Component is a navigation aid that provides users with a trail of links representing their current location within a hierarchical structure. It allows users to easily trace their path back to previous pages or sections within an application or website."})]}),(0,Ir.jsxs)(Qc,{children:[(0,Ir.jsxs)(Jc,{children:[(0,Ir.jsxs)(Zc,{children:[(0,Ir.jsx)(eu,{children:"Number of Items"}),(0,Ir.jsxs)(tu,{value:i,onChange:e=>a(parseInt(e.target.value)),children:[(0,Ir.jsx)("option",{value:2,children:"2 items"}),(0,Ir.jsx)("option",{value:3,children:"3 items"}),(0,Ir.jsx)("option",{value:4,children:"4 items"}),(0,Ir.jsx)("option",{value:5,children:"5 items"})]})]}),(0,Ir.jsxs)(Zc,{children:[(0,Ir.jsx)(eu,{children:"Show Back Button"}),(0,Ir.jsxs)(tu,{value:r?"yes":"no",onChange:e=>o("yes"===e.target.value),children:[(0,Ir.jsx)("option",{value:"yes",children:"Yes"}),(0,Ir.jsx)("option",{value:"no",children:"No"})]})]}),(0,Ir.jsxs)(Zc,{children:[(0,Ir.jsx)(eu,{children:"Theme"}),(0,Ir.jsxs)(tu,{value:e,onChange:e=>n(e.target.value),children:[(0,Ir.jsx)("option",{value:ru,children:"Light.a"}),(0,Ir.jsx)("option",{value:ou,children:"Dark.a"})]})]})]}),(0,Ir.jsx)(nu,{isDarkMode:l,children:(0,Ir.jsx)(Gc,{items:s(i),showBackButton:r,backButtonText:"Back",separatorType:Mc.CHEVRON,size:Ic.MEDIUM,isDarkMode:l,onBackClick:e=>{console.log("Back button clicked")},onItemClick:(e,t)=>{console.log(`Breadcrumb item ${e} clicked:`,s(i)[e])}})})]})]})},lu="unselected",su="selected",cu={LIGHT:"light.a",DARK:"dark.a"},uu={SMALL:"small",MEDIUM:"medium",LARGE:"large"},du=(e,t,n,r,o,i)=>t===cu.DARK?n?e===su?{border:"#9CA3AF",background:"#27272A",dot:"#9CA3AF",label:"#9CA3AF"}:{border:"#9CA3AF",background:"#27272A",dot:"transparent",label:"#9CA3AF"}:e===su?{border:"#93C5FD",background:"transparent",dot:"#93C5FD",label:"#D4D4D8"}:o?{border:"#D4D4D8",background:"transparent",dot:"transparent",label:"#D4D4D8"}:{border:"#71717A",background:"transparent",dot:"transparent",label:"#D4D4D8"}:n?e===su?{border:"#64748B",background:"#F1F5F9",dot:"#9CA3AF",label:"#9CA3AF"}:{border:"#64748B",background:"#F1F5F9",dot:"transparent",label:"#9CA3AF"}:e===su?o?{border:"#1E40AF",background:"#1E40AF",dot:"#1E40AF",label:"#0F172A"}:{border:"#1D4ED8",background:"#1D4ED8",dot:"#1D4ED8",label:"#0F172A"}:o?{border:"#0F172A",background:"transparent",dot:"transparent",label:"#0F172A"}:{border:"#64748B",background:"transparent",dot:"transparent",label:"#0F172A"},pu=e=>{switch(e){case uu.SMALL:return{radioSize:"16px",dotSize:"8px",labelFontSize:"14px",focusRingSize:"24px"};case uu.LARGE:return{radioSize:"24px",dotSize:"12px",labelFontSize:"16px",focusRingSize:"32px"};default:return{radioSize:"14px",dotSize:"8px",labelFontSize:"14px",focusRingSize:"20px"}}},fu=kr.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${e=>e.isDisabled?"not-allowed":"pointer"};
  user-select: none;
  position: relative;
  outline: none;
`,hu=kr.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`,mu=kr.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  position: relative;
  flex-shrink: 0;

  ${e=>e.isHovered&&e.theme===cu.LIGHT&&e.state===lu&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      right: -4px;\n      bottom: -4px;\n      background: #E2E8F0;\n      border-radius: 50%;\n      opacity: 0.8;\n      z-index: 0;\n      transition: all 0.3s ease-out;\n    }\n  "}

  ${e=>e.isHovered&&e.theme===cu.LIGHT&&e.state===su&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      right: -4px;\n      bottom: -4px;\n      background: #DBEAFE;\n      border-radius: 50%;\n      opacity: 0.8;\n      z-index: 0;\n      transition: all 0.3s ease-out;\n    }\n  "}

  ${e=>e.isHovered&&e.theme===cu.DARK&&e.state===lu&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      right: -4px;\n      bottom: -4px;\n      background: #64748B;\n      border-radius: 50%;\n      opacity: 0.25;\n      z-index: 0;\n      transition: all 0.3s ease-out;\n    }\n  "}

  ${e=>e.isHovered&&e.theme===cu.DARK&&e.state===su&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      right: -4px;\n      bottom: -4px;\n      background: #3B82F6;\n      border-radius: 50%;\n      opacity: 0.45;\n      z-index: 0;\n      transition: all 0.3s ease-out;\n    }\n  "}
`,gu=kr.div`
  width: ${e=>pu(e.size).radioSize};
  height: ${e=>pu(e.size).radioSize};
  border: 2px solid ${e=>du(e.state,e.theme,e.isDisabled,e.isFocused,e.isHovered,e.isPressed).border};
  border-radius: 50%;
  background: ${e=>e.state===su?"transparent":du(e.state,e.theme,e.isDisabled,e.isFocused,e.isHovered,e.isPressed).background};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;

  ${e=>e.isFocused&&e.theme===cu.LIGHT&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -8px;\n      left: -8px;\n      right: -8px;\n      bottom: -8px;\n      border: 3px solid #1D4ED8;\n      border-radius: 50%;\n    }\n  "}

  ${e=>e.isFocused&&e.theme===cu.DARK&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -8px;\n      left: -8px;\n      right: -8px;\n      bottom: -8px;\n      border: 3px solid #93C5FD;\n      border-radius: 50%;\n    }\n  "}
`,xu=kr.div`
  width: ${e=>pu(e.size).dotSize};
  height: ${e=>pu(e.size).dotSize};
  border-radius: 50%;
  background: ${e=>du(e.state,e.theme,e.isDisabled,e.isFocused,e.isHovered,e.isPressed).dot};
  transition: all 0.2s ease-in-out;
  opacity: ${e=>e.state===su?1:0};
  position: relative;
  z-index: 2;
`,vu=kr.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${e=>pu(e.size).radioSize-8}px;
  height: ${e=>pu(e.size).radioSize-8}px;
  border-radius: 50%;
  background: ${e=>e.theme===cu.LIGHT?"#FFFFFF":"transparent"};
  opacity: ${e=>e.state===su?1:0};
  transition: all 0.2s ease-in-out;
  z-index: 1;
`,yu=kr.label`
  font-size: ${e=>pu(e.size).labelFontSize};
  font-weight: 600;
  color: ${e=>du(e.state,e.theme,e.isDisabled,e.isFocused,e.isHovered,e.isPressed).label};
  cursor: ${e=>e.isDisabled?"not-allowed":"pointer"};
  margin: 0;
  margin-top: 2px;
  display: flex;
  align-items: center;
`,bu=(0,t.forwardRef)((e,n)=>{let{checked:r=!1,disabled:o=!1,label:i="",name:a="",value:l="",size:s=uu.MEDIUM,theme:c=cu.LIGHT,onChange:u,onFocus:d,onBlur:p,className:f,id:h,...m}=e;const[g,x]=(0,t.useState)(!1),[v,y]=(0,t.useState)(!1),[b,w]=(0,t.useState)(!1),k=r?su:lu,S=h||`radio-${Math.random().toString(36).substr(2,9)}`,j=e=>{if(!o&&u){x(!1);const t={...e,target:{...e.target,checked:!r,value:l}};u(t)}};return(0,Ir.jsxs)(fu,{isDisabled:o,onMouseEnter:()=>{o||y(!0)},onMouseLeave:()=>{y(!1),w(!1)},onMouseDown:()=>{o||w(!0)},onMouseUp:()=>{w(!1)},onClick:j,onKeyDown:e=>{if(!o&&(" "===e.key||"Enter"===e.key)){e.preventDefault();const t={...e,target:{...e.target,checked:!r,value:l}};u(t)}},tabIndex:o?-1:0,role:"radio","aria-checked":r,className:f,children:[(0,Ir.jsx)(hu,{ref:n,type:"radio",id:S,name:a,value:l,checked:r,disabled:o,onChange:e=>{if(!o&&u){const t={...e,target:{...e.target,checked:!r,value:e.target.value}};u(t)}},onFocus:e=>{o||(x(!0),d&&d(e))},onBlur:e=>{x(!1),p&&p(e)},...m}),(0,Ir.jsx)(mu,{state:k,theme:c,isDisabled:o,isFocused:g,isHovered:v,isPressed:b,size:s,children:(0,Ir.jsxs)(gu,{state:k,theme:c,isDisabled:o,isFocused:g,isHovered:v,isPressed:b,size:s,children:[(0,Ir.jsx)(vu,{state:k,theme:c,size:s}),(0,Ir.jsx)(xu,{state:k,theme:c,isDisabled:o,isFocused:g,isHovered:v,isPressed:b,size:s})]})}),i&&(0,Ir.jsx)(yu,{htmlFor:S,isDisabled:o,state:k,theme:c,isFocused:g,isHovered:v,isPressed:b,size:s,onClick:e=>{e.preventDefault(),j(e)},children:i})]})});bu.displayName="Radio";const wu=bu,ku=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Su=kr.div`
  margin-bottom: 48px;
`,ju=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Eu=kr.p`
  font-size: 16px;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Au=kr.section`
  margin-bottom: 48px;
`,Cu=(kr.h2`
  font-size: 24px;
  margin-bottom: 24px;
  color: #0F172A;
`,kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),Fu=kr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Du=kr.label`
  font-weight: 600;
  color: #0F172A;
`,zu=kr.select`
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
`,Mu=(kr.input`
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
`),Iu=(kr.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,kr.div`
  display: flex;
  gap: 32px;
  align-items: center;
`,"light.a"),$u="dark.a",Lu=()=>{const[e,n]=(0,t.useState)(uu.MEDIUM),[r,o]=(0,t.useState)(Iu),[i,a]=(0,t.useState)("Label"),[l,s]=(0,t.useState)(!1),[c,u]=(0,t.useState)(!1),[d,p]=(0,t.useState)(!1),[f,h]=(0,t.useState)(""),[m,g]=(0,t.useState)(""),x=r===$u;return(0,Ir.jsxs)(ku,{children:[(0,Ir.jsxs)(Su,{children:[(0,Ir.jsx)(ju,{children:"Radio"}),(0,Ir.jsx)(Eu,{children:"The Radio Component is used for single-choice selections from multiple options. It provides a clean, accessible interface for mutually exclusive choices with support for various states, themes, and sizes."})]}),(0,Ir.jsxs)(Au,{children:[(0,Ir.jsxs)(Cu,{children:[(0,Ir.jsxs)(Fu,{children:[(0,Ir.jsx)(Du,{children:"State"}),(0,Ir.jsxs)(zu,{value:l?"disabled":"default",onChange:e=>s("disabled"===e.target.value),children:[(0,Ir.jsx)("option",{value:"default",children:"Default"}),(0,Ir.jsx)("option",{value:"disabled",children:"Disabled"})]})]}),(0,Ir.jsxs)(Fu,{children:[(0,Ir.jsx)(Du,{children:"Theme"}),(0,Ir.jsxs)(zu,{value:r,onChange:e=>o(e.target.value),children:[(0,Ir.jsx)("option",{value:Iu,children:"Light.a"}),(0,Ir.jsx)("option",{value:$u,children:"Dark.a"})]})]})]}),(0,Ir.jsx)(Mu,{isDarkMode:x,children:(0,Ir.jsx)("div",{children:(0,Ir.jsx)(wu,{size:e,theme:r,label:i,disabled:l,checked:"option1"===f,onChange:e=>h(e.target.checked?"option1":""),value:"option1",name:"single-radio"})})})]})]})},Ru=kr.div`
  /* Override the Alert component's styling */
  & > div {
    background: ${e=>((e,t)=>{const n=t===bi.DARK,r={[yi.SUCCESS]:{light:{background:"#F8FAFC",border:"#047857",icon:"#047857",text:"#0F172A",metadata:"#334155"},dark:{background:"#1F2937",border:"#34D399",icon:"#34D399",text:"#D4D4D8",metadata:"#A1A1AA"}},[yi.WARNING]:{light:{background:"#F8FAFC",border:"#C2410C",icon:"#C2410C",text:"#0F172A",metadata:"#334155"},dark:{background:"#1F2937",border:"#FDBA74",icon:"#FDBA74",text:"#D4D4D8",metadata:"#A1A1AA"}},[yi.ERROR]:{light:{background:"#F8FAFC",border:"#B91C1C",icon:"#B91C1C",text:"#0F172A",metadata:"#334155"},dark:{background:"#1F2937",border:"#FCA5A5",icon:"#FCA5A5",text:"#D4D4D8",metadata:"#A1A1AA"}},[yi.INFO]:{light:{background:"#F8FAFC",border:"#1D4ED8",icon:"#1D4ED8",text:"#0F172A",metadata:"#334155"},dark:{background:"#1F2937",border:"#60A5FA",icon:"#60A5FA",text:"#D4D4D8",metadata:"#A1A1AA"}}};return n?r[e].dark:r[e].light})(e.severity,e.theme).background} !important;
    box-shadow: none !important;
    max-width: 100% !important;
    min-width: auto !important;
    position: relative !important;
  }
`,Tu=e=>(0,Ir.jsx)(Ru,{severity:e.severity,theme:e.theme,children:(0,Ir.jsx)($i,{...e,type:xi.INLINE})}),_u=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Ou=kr.div`
  margin-bottom: 48px;
`,Pu=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Nu=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Bu=kr.section`
  margin-bottom: 48px;
`,Uu=kr.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: #0F172A;
`,Wu=kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,Hu=kr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Vu=kr.label`
  font-weight: 600;
  color: #0F172A;
`,Gu=kr.select`
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
`,Ku=(kr.input`
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
  background: ${e=>e.theme===bi.DARK?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`),Yu=()=>{const[e,n]=(0,t.useState)(vi.SIMPLE),[r,o]=(0,t.useState)(yi.INFO),[i,a]=(0,t.useState)(bi.LIGHT),[l,s]=(0,t.useState)(wi.BOTTOM_CENTER),[c,u]=(0,t.useState)("Alert Title"),[d,p]=(0,t.useState)("This is an alert message that provides important information to the user."),[f,h]=(0,t.useState)(!0),[m,g]=(0,t.useState)(!0),[x,v]=(0,t.useState)(3e3),[y,b]=(0,t.useState)(!0),[w,k]=(0,t.useState)(!1),[S,j]=(0,t.useState)(wi.BOTTOM_CENTER),[E,A]=(0,t.useState)(0),[C,F]=(0,t.useState)(vi.SIMPLE),[D,z]=(0,t.useState)(yi.INFO),[M,I]=(0,t.useState)(bi.LIGHT),[$,L]=(0,t.useState)("Inline Alert Title"),[R,T]=(0,t.useState)("This is an inline alert message that appears within the page content."),[_,O]=(0,t.useState)(!0),[P,N]=(0,t.useState)(!0),B=()=>{console.log("Alert dismissed")},U=e=>{console.log("Action clicked:",e)},W=e===vi.SIMPLE?[{label:"Secondary",variant:"secondary"},{label:"Primary",variant:"primary"}]:y?[{label:"Tertiary",variant:"tertiary"},{label:"Secondary",variant:"secondary"},{label:"Primary",variant:"primary"}]:[],H=C===vi.SIMPLE?[{label:"Secondary",variant:"secondary"},{label:"Primary",variant:"primary"}]:P?[{label:"Tertiary",variant:"tertiary"},{label:"Secondary",variant:"secondary"},{label:"Primary",variant:"primary"}]:[];return(0,Ir.jsxs)(_u,{children:[(0,Ir.jsxs)(Ou,{children:[(0,Ir.jsx)(Pu,{children:"Alert"}),(0,Ir.jsx)(Nu,{children:"The Alert Component is a versatile UI element designed to deliver important messages, notifications, warnings, or feedback to users in an efficient and visually appealing manner. It serves as a crucial part of our design system, ensuring consistent and effective communication across all digital platforms."})]}),(0,Ir.jsxs)(Bu,{children:[(0,Ir.jsx)(Uu,{children:"Toast Alert"}),(0,Ir.jsx)(Nu,{style:{marginBottom:"32px"},children:"The Toast Alert Component is a lightweight and non-intrusive UI element designed to display transient messages or notifications to users. It appears briefly and automatically fades away, providing timely feedback without disrupting the user's workflow."}),(0,Ir.jsxs)(Wu,{children:[(0,Ir.jsxs)(Hu,{children:[(0,Ir.jsx)(Vu,{children:"Variant"}),(0,Ir.jsxs)(Gu,{value:e,onChange:e=>n(e.target.value),children:[(0,Ir.jsx)("option",{value:vi.SIMPLE,children:"Simple"}),(0,Ir.jsx)("option",{value:vi.ADVANCED,children:"Advanced"})]})]}),(0,Ir.jsxs)(Hu,{children:[(0,Ir.jsx)(Vu,{children:"Severity"}),(0,Ir.jsxs)(Gu,{value:r,onChange:e=>o(e.target.value),children:[(0,Ir.jsx)("option",{value:yi.INFO,children:"Info"}),(0,Ir.jsx)("option",{value:yi.SUCCESS,children:"Success"}),(0,Ir.jsx)("option",{value:yi.WARNING,children:"Warning"}),(0,Ir.jsx)("option",{value:yi.ERROR,children:"Error"})]})]}),e===vi.ADVANCED&&(0,Ir.jsxs)(Hu,{children:[(0,Ir.jsx)(Vu,{children:"Show Actions"}),(0,Ir.jsxs)(Gu,{value:y?"yes":"no",onChange:e=>b("yes"===e.target.value),children:[(0,Ir.jsx)("option",{value:"no",children:"No"}),(0,Ir.jsx)("option",{value:"yes",children:"Yes"})]})]}),(0,Ir.jsxs)(Hu,{children:[(0,Ir.jsx)(Vu,{children:"Dismissible"}),(0,Ir.jsxs)(Gu,{value:f?"yes":"no",onChange:e=>h("yes"===e.target.value),children:[(0,Ir.jsx)("option",{value:"no",children:"No"}),(0,Ir.jsx)("option",{value:"yes",children:"Yes"})]})]}),(0,Ir.jsxs)(Hu,{children:[(0,Ir.jsx)(Vu,{children:"Theme"}),(0,Ir.jsxs)(Gu,{value:i,onChange:e=>a(e.target.value),children:[(0,Ir.jsx)("option",{value:bi.LIGHT,children:"Light.a"}),(0,Ir.jsx)("option",{value:bi.DARK,children:"Dark.a"})]})]})]}),(0,Ir.jsxs)("div",{style:{marginBottom:"24px",display:"flex",gap:"12px"},children:[(0,Ir.jsx)(pi,{variant:ri.SECONDARY,size:ai.MEDIUM,onClick:()=>{k(!1),setTimeout(()=>{j(wi.BOTTOM_RIGHT),A(e=>e+1),k(!0)},50)},disabled:w,label:"Show toast right"}),(0,Ir.jsx)(pi,{variant:ri.SECONDARY,size:ai.MEDIUM,onClick:()=>{k(!1),setTimeout(()=>{j(wi.BOTTOM_CENTER),A(e=>e+1),k(!0)},50)},disabled:w,label:"Show toast centered"})]}),(0,Ir.jsx)(Ku,{theme:i,children:(0,Ir.jsx)($i,{type:xi.INLINE,variant:e,severity:r,theme:i,title:c,message:d,dismissible:f,keepVisible:!0,onDismiss:B,onAction:U,actions:W,timestamp:e===vi.ADVANCED?void 0:null})}),w&&(0,Ir.jsx)($i,{type:xi.TOAST,variant:e,severity:r,theme:i,position:S,title:c,message:d,dismissible:f,autoDismiss:!0,autoDismissTime:3e3,onDismiss:()=>{k(!1)},onAction:U,actions:W,timestamp:e===vi.ADVANCED?void 0:null},E)]}),(0,Ir.jsxs)(Bu,{children:[(0,Ir.jsx)(Uu,{children:"Inline Alert"}),(0,Ir.jsx)(Nu,{style:{marginBottom:"32px"},children:"The Inline Alert Component is a lightweight UI element designed to provide contextual feedback or notifications within a block of content. It seamlessly integrates into your interface, allowing you to convey important information without disrupting the user's workflow."}),(0,Ir.jsxs)(Wu,{children:[(0,Ir.jsxs)(Hu,{children:[(0,Ir.jsx)(Vu,{children:"Variant"}),(0,Ir.jsxs)(Gu,{value:C,onChange:e=>F(e.target.value),children:[(0,Ir.jsx)("option",{value:vi.SIMPLE,children:"Simple"}),(0,Ir.jsx)("option",{value:vi.ADVANCED,children:"Advanced"})]})]}),(0,Ir.jsxs)(Hu,{children:[(0,Ir.jsx)(Vu,{children:"Severity"}),(0,Ir.jsxs)(Gu,{value:D,onChange:e=>z(e.target.value),children:[(0,Ir.jsx)("option",{value:yi.INFO,children:"Info"}),(0,Ir.jsx)("option",{value:yi.SUCCESS,children:"Success"}),(0,Ir.jsx)("option",{value:yi.WARNING,children:"Warning"}),(0,Ir.jsx)("option",{value:yi.ERROR,children:"Error"})]})]}),C===vi.ADVANCED&&(0,Ir.jsxs)(Hu,{children:[(0,Ir.jsx)(Vu,{children:"Show Actions"}),(0,Ir.jsxs)(Gu,{value:P?"yes":"no",onChange:e=>N("yes"===e.target.value),children:[(0,Ir.jsx)("option",{value:"no",children:"No"}),(0,Ir.jsx)("option",{value:"yes",children:"Yes"})]})]}),(0,Ir.jsxs)(Hu,{children:[(0,Ir.jsx)(Vu,{children:"Dismissible"}),(0,Ir.jsxs)(Gu,{value:_?"yes":"no",onChange:e=>O("yes"===e.target.value),children:[(0,Ir.jsx)("option",{value:"no",children:"No"}),(0,Ir.jsx)("option",{value:"yes",children:"Yes"})]})]}),(0,Ir.jsxs)(Hu,{children:[(0,Ir.jsx)(Vu,{children:"Theme"}),(0,Ir.jsxs)(Gu,{value:M,onChange:e=>I(e.target.value),children:[(0,Ir.jsx)("option",{value:bi.LIGHT,children:"Light.a"}),(0,Ir.jsx)("option",{value:bi.DARK,children:"Dark.a"})]})]})]}),(0,Ir.jsx)(Ku,{theme:M,children:(0,Ir.jsx)(Tu,{variant:C,severity:D,theme:M,title:$,message:R,dismissible:_,keepVisible:!0,onDismiss:B,onAction:U,actions:H,timestamp:null})})]}),(0,Ir.jsxs)(Bu,{children:[(0,Ir.jsx)("h3",{style:{fontSize:"1.25rem",marginBottom:"24px",color:"#0F172A"},children:"Usage Guidelines"}),(0,Ir.jsx)(Nu,{style:{marginBottom:"32px"},children:"Inline alerts are designed to be integrated seamlessly within your content. Here are some common usage patterns and examples."}),(0,Ir.jsxs)("div",{style:{display:"grid",gap:"24px",gridTemplateColumns:"repeat(auto-fit, minmax(400px, 1fr))"},children:[(0,Ir.jsx)("div",{children:(0,Ir.jsxs)("div",{style:{background:"#FFFFFF",border:"1px solid #E2E8F0",borderRadius:"8px",padding:"24px",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 16px 0",fontSize:"1.125rem",fontWeight:"600",color:"#0F172A"},children:"Example 1"}),(0,Ir.jsx)("p",{style:{margin:"0 0 24px 0",color:"#475569",lineHeight:"1.5"},children:"Use an informational Inline Alert to inform users that a setting is disabled because it is already configured in Windows Settings. Include a button for users to navigate directly to the relevant setting for customization."}),(0,Ir.jsx)("hr",{style:{border:"none",height:"1px",background:"#E2E8F0",margin:"0 0 24px 0"}}),(0,Ir.jsx)("h4",{style:{margin:"0 0 8px 0",fontSize:"1rem",fontWeight:"600",color:"#0F172A"},children:"Section title"}),(0,Ir.jsx)("p",{style:{margin:"0 0 16px 0",color:"#475569",lineHeight:"1.5",fontSize:"0.875rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,Ir.jsx)(Tu,{variant:vi.ADVANCED,severity:yi.INFO,theme:bi.LIGHT,title:"System Theme",message:"This setting is controlled by Windows Settings. You can customize your system theme directly in Windows Settings.",dismissible:!1,keepVisible:!0,actions:[{label:"Open in Windows Settings",variant:"primary",icon:(0,Ir.jsx)(ti.A,{style:{fontSize:"16px"}})}],timestamp:null})]})}),(0,Ir.jsx)("div",{children:(0,Ir.jsxs)("div",{style:{background:"#FFFFFF",border:"1px solid #E2E8F0",borderRadius:"8px",padding:"24px",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[(0,Ir.jsx)("h3",{style:{margin:"0 0 16px 0",fontSize:"1.125rem",fontWeight:"600",color:"#0F172A"},children:"Example 2"}),(0,Ir.jsx)("p",{style:{margin:"0 0 24px 0",color:"#475569",lineHeight:"1.5"},children:"Use a warning Inline Alert to draw attention to critical information about a feature or section."}),(0,Ir.jsx)("hr",{style:{border:"none",height:"1px",background:"#E2E8F0",margin:"0 0 24px 0"}}),(0,Ir.jsx)("h4",{style:{margin:"0 0 8px 0",fontSize:"1rem",fontWeight:"600",color:"#0F172A"},children:"Section title"}),(0,Ir.jsx)("p",{style:{margin:"0 0 16px 0",color:"#475569",lineHeight:"1.5",fontSize:"0.875rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,Ir.jsx)(Tu,{variant:vi.ADVANCED,severity:yi.WARNING,theme:bi.LIGHT,title:"Beta Feature",message:"This feature is currently in beta and may have limited functionality. Please report any issues you encounter.",dismissible:!1,keepVisible:!0,actions:[],timestamp:null})]})})]})]})]})};var Xu=n(4914),qu=n(1707),Qu=n(5896),Ju=n(1337),Zu=n(5473),ed=n(9611),td=n(2577);const nd=kr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,rd=kr.div`
  margin-bottom: 48px;
`,od=kr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,id=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,ad=kr.section`
  margin-bottom: 48px;
`,ld=kr.h2`
  font-size: 1.125rem; /* 18px */
  color: #0F172A;
`,sd=kr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  margin-bottom: 32px;
  max-width: 800px;
`,cd=kr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,ud=kr.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,dd=kr.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
`,pd=kr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${e=>e.color||"#475569"};
  font-size: 24px;
`,fd=kr.div`
  flex: 1;
`,hd=kr.h4`
  font-size: 14px;
  font-weight: 600;
  color: #0F172A;
  margin: 0 0 4px 0;
`,md=kr.p`
  font-size: 12px;
  color: #64748B;
  margin: 0;
  line-height: 1.4;
`,gd=kr.pre`
  background: #1E293B;
  color: #E2E8F0;
  padding: 16px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.5;
  overflow-x: auto;
  margin: 16px 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
`,xd=(kr.code`
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
`),vd=kr.h3`
  font-size: 16px;
  font-weight: 600;
  color: #0F172A;
  margin: 0 0 8px 0;
`,yd=kr.p`
  font-size: 14px;
  color: #475569;
  margin: 0 0 12px 0;
  line-height: 1.5;
`,bd=(kr.ul`
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
`,[{path:"/",component:ol,title:"Home",description:"Welcome to Cake Design System",category:"guides"},{path:"/components/alert",component:Yu,title:"Alert",description:"Alert components provide feedback to users about important information, success states, warnings, or errors",category:"components"},{path:"/components/accordion",component:As,title:"Accordion",description:"Expandable and collapsible content sections for organizing information",category:"components"},{path:"/components/avatar",component:dc,title:"Avatar",description:"Component for displaying user profile images, initials, or icons",category:"components"},{path:"/components/badge",component:zc,title:"Badge",description:"Compact UI element for displaying notification counts, status indicators, or numerical labels",category:"components"},{path:"/components/breadcrumb",component:au,title:"Breadcrumb",description:"Hierarchical navigation component for displaying page location and navigation context",category:"components"},{path:"/components/button",component:Kl,title:"Button",description:"Interactive button component with various styles and states",category:"components"},{path:"/components/canvas",component:Yr,title:"Canvas",description:"Drawing and illustration component",category:"components"},{path:"/components/checkbox",component:wo,title:"Checkbox",description:"Interactive checkbox component for form inputs, selections, and toggles with support for checked, unchecked, indeterminate, and disabled states",category:"components"},{path:"/components/chip",component:kl,title:"Chip",description:"Compact and versatile UI element for displaying discrete information",category:"components"},{path:"/components/radio",component:Lu,title:"Radio",description:"Interactive radio component for single-choice selections from multiple options with support for various states and themes",category:"components"},{path:"/version-control",component:Yo,title:"Version Control",description:"Version history and changelog",category:"guides"},{path:"/foundations/colors",component:Ui,title:"Colors",description:"Color system and design tokens",category:"foundations"},{path:"/whats-new",component:ia,title:"What's New",description:"Latest updates and changes",category:"guides"},{path:"/resources",component:Pa,title:"Resources",description:"Figma libraries and design resources",category:"guides"},{path:"/get-started/figma-libraries",component:pa,title:"Figma Libraries",description:"Design resources and Figma components",category:"guides"},{path:"/get-started/about-cake",component:ja,title:"About Cake",description:"Introduction to Cake Design System",category:"guides"},{path:"/subsystems/ai/icon-identity",component:Gs,title:"Icon & Identity",description:"Guidelines and components for AI-powered icon generation and brand identity management",category:"subsystems"},{path:"/foundations/iconography",component:()=>{const e=[{icon:(0,Ir.jsx)(fi.A,{}),name:"InfoIcon",description:"Used for informational messages and help text",color:"#1D4ED8"},{icon:(0,Ir.jsx)(hi.A,{}),name:"CheckCircleIcon",description:"Indicates success states and completed actions",color:"#047857"},{icon:(0,Ir.jsx)(mi.A,{}),name:"WarningIcon",description:"Shows warnings and cautionary information",color:"#C2410C"},{icon:(0,Ir.jsx)(gi.A,{}),name:"ErrorIcon",description:"Displays error states and critical issues",color:"#B91C1C"}],t=[{icon:(0,Ir.jsx)(ni.A,{}),name:"DownloadIcon",description:"File download and export actions",color:"#0F172A"},{icon:(0,Ir.jsx)(Xu.A,{}),name:"ContentCopyIcon",description:"Copy to clipboard functionality",color:"#0F172A"},{icon:(0,Ir.jsx)(qu.A,{}),name:"ChevronRightIcon",description:"Forward navigation and next actions",color:"#0F172A"},{icon:(0,Ir.jsx)(Qu.A,{}),name:"ChevronLeftIcon",description:"Backward navigation and previous actions",color:"#0F172A"},{icon:(0,Ir.jsx)(Ju.A,{}),name:"ExpandMoreIcon",description:"Expand content or show more options",color:"#0F172A"},{icon:(0,Ir.jsx)(Zu.A,{}),name:"ExpandLessIcon",description:"Collapse content or show fewer options",color:"#0F172A"}],n=[{icon:(0,Ir.jsx)(ed.A,{}),name:"MenuIcon",description:"Hamburger menu and navigation drawer",color:"#0F172A"},{icon:(0,Ir.jsx)(Fr.A,{}),name:"CloseIcon",description:"Close dialogs, modals, and dismiss actions",color:"#0F172A"},{icon:(0,Ir.jsx)(Cr.A,{}),name:"SearchIcon",description:"Search functionality and query input",color:"#0F172A"},{icon:(0,Ir.jsx)(td.A,{}),name:"SettingsIcon",description:"Configuration and preferences",color:"#0F172A"}];return(0,Ir.jsxs)(nd,{children:[(0,Ir.jsxs)(rd,{children:[(0,Ir.jsx)(od,{children:"Iconography"}),(0,Ir.jsx)(id,{children:"Our design system adopts the Material Design icon library to ensure consistency and accessibility across all interfaces. Material Design icons provide a comprehensive set of scalable vector icons that enhance user experience and provide visual clarity. These icons are designed to be simple, modern, and accessible, making them perfect for creating intuitive user interfaces."})]}),(0,Ir.jsxs)(ad,{children:[(0,Ir.jsx)(ld,{children:"Semantic Status Icons"}),(0,Ir.jsx)(sd,{children:"Status icons communicate specific states and provide immediate visual feedback to users. These icons use semantic colors to reinforce their meaning and improve accessibility."}),(0,Ir.jsx)(cd,{children:e.map((e,t)=>(0,Ir.jsx)(ud,{children:(0,Ir.jsxs)(dd,{children:[(0,Ir.jsx)(pd,{color:e.color,children:e.icon}),(0,Ir.jsxs)(fd,{children:[(0,Ir.jsx)(hd,{children:e.name}),(0,Ir.jsx)(md,{children:e.description})]})]})},t))})]}),(0,Ir.jsxs)(ad,{children:[(0,Ir.jsx)(ld,{children:"Action Icons"}),(0,Ir.jsx)(sd,{children:"Action icons represent common user interactions and system operations. These icons help users understand available actions and improve interface efficiency."}),(0,Ir.jsx)(cd,{children:t.map((e,t)=>(0,Ir.jsx)(ud,{children:(0,Ir.jsxs)(dd,{children:[(0,Ir.jsx)(pd,{color:e.color,children:e.icon}),(0,Ir.jsxs)(fd,{children:[(0,Ir.jsx)(hd,{children:e.name}),(0,Ir.jsx)(md,{children:e.description})]})]})},t))})]}),(0,Ir.jsxs)(ad,{children:[(0,Ir.jsx)(ld,{children:"Navigation & UI Icons"}),(0,Ir.jsx)(sd,{children:"Navigation and UI icons help users navigate through the interface and access different sections. These icons provide consistent wayfinding and improve overall user experience."}),(0,Ir.jsx)(cd,{children:n.map((e,t)=>(0,Ir.jsx)(ud,{children:(0,Ir.jsxs)(dd,{children:[(0,Ir.jsx)(pd,{color:e.color,children:e.icon}),(0,Ir.jsxs)(fd,{children:[(0,Ir.jsx)(hd,{children:e.name}),(0,Ir.jsx)(md,{children:e.description})]})]})},t))})]}),(0,Ir.jsxs)(ad,{children:[(0,Ir.jsx)(ld,{children:"Resources"}),(0,Ir.jsx)(sd,{children:"Access official documentation and additional icon libraries to expand your icon toolkit."}),(0,Ir.jsxs)(xd,{children:[(0,Ir.jsx)(vd,{children:"Google Material Design Icons Library"}),(0,Ir.jsx)(yd,{children:"Official Material Design icon library with comprehensive icon sets, search functionality, and download options."}),(0,Ir.jsx)(pi,{variant:"text",textVariant:"primary",size:"small",label:"Visit Material Design Icons",iconPosition:li.LEFT,customIcon:(0,Ir.jsx)(ti.A,{}),onClick:()=>window.open("https://fonts.google.com/icons","_blank","noopener,noreferrer")})]}),(0,Ir.jsxs)(xd,{children:[(0,Ir.jsx)(vd,{children:"MUI Icons Installation & Usage"}),(0,Ir.jsx)(yd,{children:"Complete documentation for installing and using Material-UI icons in React applications."}),(0,Ir.jsx)(pi,{variant:"text",textVariant:"primary",size:"small",label:"MUI Icons Documentation",iconPosition:li.LEFT,customIcon:(0,Ir.jsx)(ti.A,{}),onClick:()=>window.open("https://mui.com/material-ui/material-icons/","_blank","noopener,noreferrer")}),(0,Ir.jsx)(gd,{style:{marginTop:"12px"},children:"npm install @mui/icons-material"})]})]})]})},title:"Iconography",description:"Material Design icon library usage, guidelines, and implementation patterns",category:"foundations"}]),wd=kr.div`
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
`,kd=kr.div`
  width: 600px;
  max-width: 90vw;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  font-family: ${Dr};
`,Sd=kr.div`
  padding: 16px;
  border-bottom: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  gap: 12px;
`,jd=kr.input`
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
`,Ed=kr.button`
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
`,Ad=kr.div`
  max-height: 400px;
  overflow-y: auto;
`,Cd=kr.div`
  padding: 8px 0;
`,Fd=kr.div`
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Dd=kr.button`
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
`,zd=kr.span`
  font-size: 14px;
  color: #171717;
  font-weight: 500;
`,Md=kr.span`
  font-size: 12px;
  color: #64748B;
`,Id=kr.div`
  padding: 32px 16px;
  text-align: center;
  color: #64748B;
  font-size: 14px;
`,$d=e=>{let{isOpen:n,onClose:r,initialQuery:o=""}=e;const[i,a]=(0,t.useState)(o),[l,s]=(0,t.useState)({components:[],foundations:[],guides:[]}),c=J(),u=(0,t.useCallback)(e=>{const t=setTimeout(()=>{s((e=>{if(!e.trim())return{components:[],foundations:[],guides:[],subsystems:[]};const t=e.toLowerCase(),n={components:[],foundations:[],guides:[],subsystems:[]};return bd.forEach(e=>{const r=e.title.toLowerCase().includes(t),o=e.description.toLowerCase().includes(t),i=e.path.toLowerCase().includes(t);(r||o||i)&&n[e.category].push({title:e.title,path:e.path,description:e.description})}),n})(e))},300);return()=>clearTimeout(t)},[]);(0,t.useEffect)(()=>{const e=u(i);return()=>e()},[i,u]),(0,t.useEffect)(()=>{const e=e=>{"Escape"===e.key&&r()};return n&&(document.addEventListener("keydown",e),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",e),document.body.style.overflow=""}},[n,r]);return n?(0,Ir.jsx)(wd,{onClick:r,role:"dialog","aria-modal":"true","aria-labelledby":"search-modal-title",children:(0,Ir.jsxs)(kd,{onClick:e=>e.stopPropagation(),children:[(0,Ir.jsxs)(Sd,{children:[(0,Ir.jsx)(Cr.A,{style:{color:"#64748B"},"aria-hidden":"true"}),(0,Ir.jsx)(jd,{id:"search-input",role:"searchbox","aria-label":"Search design system",autoFocus:!0,placeholder:"Search...",value:i,onChange:e=>a(e.target.value)}),(0,Ir.jsx)(Ed,{onClick:r,"aria-label":"Close search",children:(0,Ir.jsx)(Fr.A,{"aria-hidden":"true"})})]}),(0,Ir.jsx)(Ad,{role:"region","aria-label":"Search results",children:i.trim()?Object.entries(l).map(e=>{let[t,n]=e;return n.length>0&&(0,Ir.jsxs)(Cd,{children:[(0,Ir.jsx)(Fd,{children:t}),n.map((e,t)=>(0,Ir.jsxs)(Dd,{onClick:()=>{return t=e.path,c(t),void r();var t},role:"button","aria-label":`Go to ${e.title}`,children:[(0,Ir.jsx)(zd,{children:e.title}),(0,Ir.jsx)(Md,{children:e.description})]},t))]},t)}):(0,Ir.jsx)(Id,{children:"Start typing to search..."})})]})}):null},Ld=kr.div`
  position: relative;
  width: 100%;
  padding: 0 24px 24px 24px;
  box-sizing: border-box;
  font-family: ${Dr};
`,Rd=kr.div`
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
`,Td=kr.div`
  position: absolute;
  left: 8px;
  color: #64748B;
  display: flex;
  align-items: center;

  & > svg {
    font-size: 18px;
  }
`,_d=kr.div`
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
`,Od=kr.div`
  position: absolute;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  
  @media (max-width: 768px) {
    display: none;
  }
`,Pd=kr.kbd`
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
`,Nd=()=>{const[e,n]=(0,t.useState)(!1),r=e=>{"k"===e.key&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),n(!0))};t.useEffect(()=>(document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)),[]);return(0,Ir.jsxs)(Ir.Fragment,{children:[(0,Ir.jsx)(Ld,{children:(0,Ir.jsxs)(Rd,{onClick:()=>{n(!0)},children:[(0,Ir.jsx)(Td,{children:(0,Ir.jsx)(Cr.A,{})}),(0,Ir.jsx)(_d,{children:"Search..."}),(0,Ir.jsxs)(Od,{children:[(0,Ir.jsx)(Pd,{children:navigator.platform.includes("Mac")?"\u2318":"Ctrl"}),(0,Ir.jsx)(Pd,{children:"K"})]})]})}),(0,Ir.jsx)($d,{isOpen:e,onClose:()=>{n(!1)}})]})},Bd=jr`
  .iQvbDV {
    padding-right: 24px !important;
  }
`,Ud=kr.nav`
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
`,Wd=kr.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 24px;
  background: #fff;
`,Hd=kr(De)`
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
`,Vd=kr.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
`,Gd=kr.div`
  display: flex;
  flex-direction: column;
`,Kd=kr.span`
  font-size: 16px;
  font-weight: 700;
  color: #171717;
  line-height: 1.2;
`,Yd=kr.span`
  font-size: 10px;
  color: #64748B;
  margin-top: 2px;
`,Xd=kr.div`
  width: 100%;
  margin: 0;
  padding: 0;
`,qd=kr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Qd=kr.li`
  width: 100%;
`,Jd=kr(De)`
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
`,Zd=kr.button`
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
`,ep=kr.span`
  transition: transform 0.3s ease;
  margin-right: 0;
  color: ${Xr.slate[900]};
  transform-origin: center;
  transform: rotate(0deg);
  
  ${e=>e.expanded&&"\n    transform: rotate(180deg);\n  "}
`,tp=kr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: ${e=>e.expanded?"1000px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`,np=kr.li`
  width: 100%;
`,rp=kr(De)`
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
`,op=kr.button`
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
`,ip=kr.div`
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
`,ap=()=>{var e,n,r;const o=q(),i=function(e){X()||l(!1);let{pathname:n}=q();return t.useMemo(()=>F(e,D(n)),[n,e])}("/"),[a,s]=(0,t.useState)(!1),[c,u]=(0,t.useState)({getStarted:o.pathname.startsWith("/get-started"),foundations:o.pathname.startsWith("/foundations"),components:o.pathname.startsWith("/components"),subsystems:o.pathname.startsWith("/subsystems"),subsystems_ai:o.pathname.startsWith("/subsystems/ai")}),d=()=>{s(!1)},p=e=>{u(t=>({...t,[e]:!t[e]}))},f=bd.reduce((e,t)=>(e[t.category]||(e[t.category]=[]),e[t.category].push(t),e),{});return(0,Ir.jsxs)(Ir.Fragment,{children:[(0,Ir.jsx)(Bd,{}),(0,Ir.jsx)(op,{onClick:()=>{s(!a)},children:(0,Ir.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:(0,Ir.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,Ir.jsx)(ip,{isOpen:a,onClick:d}),(0,Ir.jsxs)(Ud,{isOpen:a,children:[(0,Ir.jsx)(Wd,{children:(0,Ir.jsxs)(Hd,{to:"/",onClick:d,children:[(0,Ir.jsx)(Vd,{src:Ar,alt:"Cake Logo"}),(0,Ir.jsxs)(Gd,{children:[(0,Ir.jsx)(Kd,{children:"Cake"}),(0,Ir.jsx)(Yd,{children:"Version 1.4.0"})]})]})}),(0,Ir.jsx)(Nd,{}),(0,Ir.jsx)(Xd,{children:(0,Ir.jsxs)(qd,{children:[(0,Ir.jsx)(Qd,{children:(0,Ir.jsx)(Jd,{to:"/",end:!0,onClick:d,className:i?"active":"",children:"Home"})}),(0,Ir.jsx)(Qd,{children:(0,Ir.jsx)(Jd,{to:"/resources",onClick:d,children:"Resources"})}),(0,Ir.jsx)(Qd,{children:(0,Ir.jsx)(Jd,{to:"/whats-new",onClick:d,children:"What's New"})}),(0,Ir.jsxs)(Qd,{children:[(0,Ir.jsxs)(Zd,{onClick:()=>p("foundations"),children:["Foundations",(0,Ir.jsx)(ep,{expanded:c.foundations,children:(0,Ir.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z"})})})]}),(0,Ir.jsx)(tp,{expanded:c.foundations,children:null===(e=f.foundations)||void 0===e?void 0:e.map(e=>(0,Ir.jsx)(np,{children:(0,Ir.jsx)(rp,{to:e.path,onClick:d,children:e.title})},e.path))})]}),(0,Ir.jsxs)(Qd,{children:[(0,Ir.jsxs)(Zd,{onClick:()=>p("components"),children:["Components",(0,Ir.jsx)(ep,{expanded:c.components,children:(0,Ir.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z"})})})]}),(0,Ir.jsx)(tp,{expanded:c.components,children:null===(n=f.components)||void 0===n?void 0:n.map(e=>(0,Ir.jsx)(np,{children:(0,Ir.jsx)(rp,{to:e.path,onClick:d,children:e.title})},e.path))})]}),(0,Ir.jsxs)(Qd,{children:[(0,Ir.jsxs)(Zd,{onClick:()=>p("subsystems"),children:["Subsystems",(0,Ir.jsx)(ep,{expanded:c.subsystems,children:(0,Ir.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z"})})})]}),(0,Ir.jsx)(tp,{expanded:c.subsystems,children:(0,Ir.jsxs)(np,{children:[(0,Ir.jsxs)(Zd,{onClick:()=>p("subsystems_ai"),style:{paddingLeft:"40px"},children:["Cake AI",(0,Ir.jsx)(ep,{expanded:c.subsystems_ai,children:(0,Ir.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Ir.jsx)("path",{d:"M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z"})})})]}),(0,Ir.jsx)(tp,{expanded:c.subsystems_ai,children:null===(r=f.subsystems)||void 0===r?void 0:r.filter(e=>e.path.startsWith("/subsystems/ai")).map(e=>(0,Ir.jsx)(np,{children:(0,Ir.jsx)(rp,{to:e.path,onClick:d,style:{paddingLeft:"40px"},children:e.title})},e.path))})]})})]})]})})]})]})};const lp=n.p+"static/media/logo_vert.2144fac276ecca3cfa03aa23d92a3571.svg",sp=kr.div`
  position: fixed;
  bottom: 136px;
  right: 0;
  width: 48px;
  background-color: #e1251b;
  padding: 8px;
  cursor: pointer;
  z-index: 1000;
  
  @media (max-width: 768px) {
    width: 36px;
    padding: 6px;
  }
  
  @media (max-width: 480px) {
    width: 32px;
    padding: 4px;
  }
`,cp=kr.img`
  width: 100%;
  height: auto;
  display: block;
`,up=()=>(0,Ir.jsx)(sp,{onClick:()=>{window.open("https://lenovo.com","_blank","noopener,noreferrer")},role:"button",tabIndex:"0","aria-label":"Visit Lenovo.com",children:(0,Ir.jsx)(cp,{src:lp,alt:"Lenovo"})}),dp=()=>{const{pathname:e}=q();return(0,t.useEffect)(()=>{window.scrollTo(0,0)},[e]),null},pp=kr.div`
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
`,fp=kr.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  padding: 15px;
  box-sizing: border-box;
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    padding: 20px;
  }
`,hp=kr.footer`
  text-align: center;
  font-size: 10px;
  color: #999;
  padding: 40px 0px;
`;const mp=function(){return(0,Ir.jsxs)(Ee,{basename:"",children:[(0,Ir.jsx)(zr,{}),(0,Ir.jsx)(ap,{}),(0,Ir.jsx)(up,{}),(0,Ir.jsx)(dp,{}),(0,Ir.jsx)(pp,{children:(0,Ir.jsxs)(fp,{"data-content-container":!0,children:[(0,Ir.jsx)(me,{children:bd.map(e=>(0,Ir.jsx)(fe,{path:e.path,element:(0,Ir.jsx)(e.component,{})},e.path))}),(0,Ir.jsxs)(hp,{children:["\xa9 ",(new Date).getFullYear()," Cake Design System. All rights reserved."]})]})})]})};o.createRoot(document.getElementById("root")).render((0,Ir.jsx)(t.StrictMode,{children:(0,Ir.jsx)(mp,{})}))})()})();
//# sourceMappingURL=main.26049bbd.js.map
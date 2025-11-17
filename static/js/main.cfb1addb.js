/*! For license information please see main.cfb1addb.js.LICENSE.txt */
(()=>{var e={39:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(7749)},219:(e,t,n)=>{"use strict";var r=n(3763),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return r.isMemo(e)?a:s[e.$$typeof]||o}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=a;var c=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var o=f(n);o&&o!==h&&e(t,o,r)}var a=d(n);u&&(a=a.concat(u(n)));for(var s=l(t),m=l(n),g=0;g<a.length;++g){var x=a[g];if(!i[x]&&(!r||!r[x])&&(!m||!m[x])&&(!s||!s[x])){var b=p(n,x);try{c(t,x,b)}catch(v){}}}}return t}},457:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A});var r=n(7868)},528:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler");Symbol.for("react.provider");var s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.for("react.view_transition"),m=Symbol.for("react.client.reference");function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case a:case i:case d:case u:case h:return e;default:switch(e=e&&e.$$typeof){case l:case c:case f:case p:case s:return e;default:return t}}case r:return t}}}t.vM=c,t.lD=p},579:(e,t,n)=>{"use strict";e.exports=n(1153)},1132:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download")},1153:(e,t,n)=>{"use strict";var r=n(5043),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},1337:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},1528:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"}),"Error")},1602:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalStyles:()=>qe,StyledEngineProvider:()=>Xe,ThemeContext:()=>Me,css:()=>Ve,default:()=>Qe,internal_processStyles:()=>Je,internal_serializeStyles:()=>et,keyframes:()=>Ge});var r=n(8168),o=n(5043),i=n.t(o,2);var a=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),s=Math.abs,l=String.fromCharCode,c=Object.assign;function d(e){return e.trim()}function u(e,t,n){return e.replace(t,n)}function p(e,t){return e.indexOf(t)}function f(e,t){return 0|e.charCodeAt(t)}function h(e,t,n){return e.slice(t,n)}function m(e){return e.length}function g(e){return e.length}function x(e,t){return t.push(e),e}var b=1,v=1,y=0,k=0,w=0,A="";function j(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:b,column:v,length:a,return:""}}function F(e,t){return c(j("",null,null,"",null,null,0),e,{length:-e.length},t)}function S(){return w=k>0?f(A,--k):0,v--,10===w&&(v=1,b--),w}function C(){return w=k<y?f(A,k++):0,v++,10===w&&(v=1,b++),w}function E(){return f(A,k)}function D(){return k}function $(e,t){return h(A,e,t)}function M(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return b=v=1,y=m(A=e),k=0,[]}function I(e){return A="",e}function z(e){return d($(k-1,R(91===e?e+2:40===e?e+1:e)))}function B(e){for(;(w=E())&&w<33;)C();return M(e)>2||M(w)>3?"":" "}function L(e,t){for(;--t&&C()&&!(w<48||w>102||w>57&&w<65||w>70&&w<97););return $(e,D()+(t<6&&32==E()&&32==C()))}function R(e){for(;C();)switch(w){case e:return k;case 34:case 39:34!==e&&39!==e&&R(w);break;case 40:41===e&&R(e);break;case 92:C()}return k}function P(e,t){for(;C()&&e+w!==57&&(e+w!==84||47!==E()););return"/*"+$(t,k-1)+"*"+l(47===e?e:C())}function O(e){for(;!M(E());)C();return $(e,k)}var N="-ms-",_="-moz-",H="-webkit-",U="comm",W="rule",V="decl",G="@keyframes";function K(e,t){for(var n="",r=g(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Y(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case V:return e.return=e.return||e.value;case U:return"";case G:return e.return=e.value+"{"+K(e.children,r)+"}";case W:e.value=e.props.join(",")}return m(n=K(e.children,r))?e.return=e.value+"{"+n+"}":""}function X(e){return I(q("",null,null,null,[""],e=T(e),0,[0],e))}function q(e,t,n,r,o,i,a,s,c){for(var d=0,h=0,g=a,b=0,v=0,y=0,k=1,w=1,A=1,j=0,F="",$=o,M=i,T=r,I=F;w;)switch(y=j,j=C()){case 40:if(108!=y&&58==f(I,g-1)){-1!=p(I+=u(z(j),"&","&\f"),"&\f")&&(A=-1);break}case 34:case 39:case 91:I+=z(j);break;case 9:case 10:case 13:case 32:I+=B(y);break;case 92:I+=L(D()-1,7);continue;case 47:switch(E()){case 42:case 47:x(J(P(C(),D()),t,n),c);break;default:I+="/"}break;case 123*k:s[d++]=m(I)*A;case 125*k:case 59:case 0:switch(j){case 0:case 125:w=0;case 59+h:-1==A&&(I=u(I,/\f/g,"")),v>0&&m(I)-g&&x(v>32?Z(I+";",r,n,g-1):Z(u(I," ","")+";",r,n,g-2),c);break;case 59:I+=";";default:if(x(T=Q(I,t,n,d,h,o,s,F,$=[],M=[],g),i),123===j)if(0===h)q(I,t,T,T,$,i,g,s,M);else switch(99===b&&110===f(I,3)?100:b){case 100:case 108:case 109:case 115:q(e,T,T,r&&x(Q(e,T,T,0,0,o,s,F,o,$=[],g),M),o,M,g,s,r?$:M);break;default:q(I,T,T,T,[""],M,0,s,M)}}d=h=v=0,k=A=1,F=I="",g=a;break;case 58:g=1+m(I),v=y;default:if(k<1)if(123==j)--k;else if(125==j&&0==k++&&125==S())continue;switch(I+=l(j),j*k){case 38:A=h>0?1:(I+="\f",-1);break;case 44:s[d++]=(m(I)-1)*A,A=1;break;case 64:45===E()&&(I+=z(C())),b=E(),h=g=m(F=I+=O(D())),j++;break;case 45:45===y&&2==m(I)&&(k=0)}}return i}function Q(e,t,n,r,o,i,a,l,c,p,f){for(var m=o-1,x=0===o?i:[""],b=g(x),v=0,y=0,k=0;v<r;++v)for(var w=0,A=h(e,m+1,m=s(y=a[v])),F=e;w<b;++w)(F=d(y>0?x[w]+" "+A:u(A,/&\f/g,x[w])))&&(c[k++]=F);return j(e,t,n,0===o?W:l,c,p,f)}function J(e,t,n){return j(e,t,n,U,l(w),h(e,2,-2),0)}function Z(e,t,n,r){return j(e,t,n,V,h(e,0,r),h(e,r+1,-1),r)}var ee=function(e,t,n){for(var r=0,o=0;r=o,o=E(),38===r&&12===o&&(t[n]=1),!M(o);)C();return $(e,k)},te=function(e,t){return I(function(e,t){var n=-1,r=44;do{switch(M(r)){case 0:38===r&&12===E()&&(t[n]=1),e[n]+=ee(k-1,t,n);break;case 2:e[n]+=z(r);break;case 4:if(44===r){e[++n]=58===E()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=l(r)}}while(r=C());return e}(T(e),t))},ne=new WeakMap,re=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ne.get(n))&&!r){ne.set(e,!0);for(var o=[],i=te(t,o),a=n.props,s=0,l=0;s<i.length;s++)for(var c=0;c<a.length;c++,l++)e.props[l]=o[s]?i[s].replace(/&\f/g,a[c]):a[c]+" "+i[s]}}},oe=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ie(e,t){switch(function(e,t){return 45^f(e,0)?(((t<<2^f(e,0))<<2^f(e,1))<<2^f(e,2))<<2^f(e,3):0}(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+_+e+N+e+e;case 6828:case 4268:return H+e+N+e+e;case 6165:return H+e+N+"flex-"+e+e;case 5187:return H+e+u(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return H+e+N+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return H+e+N+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return H+e+N+u(e,"shrink","negative")+e;case 5292:return H+e+N+u(e,"basis","preferred-size")+e;case 6060:return H+"box-"+u(e,"-grow","")+H+e+N+u(e,"grow","positive")+e;case 4554:return H+u(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(m(e)-1-t>6)switch(f(e,t+1)){case 109:if(45!==f(e,t+4))break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+_+(108==f(e,t+3)?"$3":"$2-$3"))+e;case 115:return~p(e,"stretch")?ie(u(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==f(e,t+1))break;case 6444:switch(f(e,m(e)-3-(~p(e,"!important")&&10))){case 107:return u(e,":",":"+H)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+H+(45===f(e,14)?"inline-":"")+"box$3$1"+H+"$2$3$1"+N+"$2box$3")+e}break;case 5936:switch(f(e,t+11)){case 114:return H+e+N+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+N+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+N+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return H+e+N+e+e}return e}var ae=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case V:e.return=ie(e.value,e.length);break;case G:return K([F(e,{value:u(e.value,"@","@"+H)})],r);case W:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return K([F(e,{props:[u(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return K([F(e,{props:[u(t,/:(plac\w+)/,":"+H+"input-$1")]}),F(e,{props:[u(t,/:(plac\w+)/,":-moz-$1")]}),F(e,{props:[u(t,/:(plac\w+)/,N+"input-$1")]})],r)}return""})}}],se=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var r,o,i=e.stylisPlugins||ae,s={},l=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)s[t[n]]=!0;l.push(e)});var c,d,u=[Y,(d=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],p=function(e){var t=g(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}([re,oe].concat(i,u));o=function(e,t,n,r){c=n,K(X(e?e+"{"+t.styles+"}":t.styles),p),r&&(f.inserted[t.name]=!0)};var f={key:t,sheet:new a({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:o};return f.sheet.hydrate(l),f};function le(e,t,n){var r="";return n.split(" ").forEach(function(n){void 0!==e[n]?t.push(e[n]+";"):n&&(r+=n+" ")}),r}var ce=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},de=function(e,t,n){ce(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+r:"",o,e.sheet,!0),o=o.next}while(void 0!==o)}};var ue={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function pe(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var fe=!1,he=/[A-Z]|^ms/g,me=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ge=function(e){return 45===e.charCodeAt(1)},xe=function(e){return null!=e&&"boolean"!==typeof e},be=pe(function(e){return ge(e)?e:e.replace(he,"-$&").toLowerCase()}),ve=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(me,function(e,t,n){return we={name:t,styles:n,next:we},t})}return 1===ue[e]||ge(e)||"number"!==typeof t||0===t?t:t+"px"},ye="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function ke(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var o=n;if(1===o.anim)return we={name:o.name,styles:o.styles,next:we},o.name;var i=n;if(void 0!==i.styles){var a=i.next;if(void 0!==a)for(;void 0!==a;)we={name:a.name,styles:a.styles,next:we},a=a.next;return i.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=ke(e,t,n[o])+";";else for(var i in n){var a=n[i];if("object"!==typeof a){var s=a;null!=t&&void 0!==t[s]?r+=i+"{"+t[s]+"}":xe(s)&&(r+=be(i)+":"+ve(i,s)+";")}else{if("NO_COMPONENT_SELECTOR"===i&&fe)throw new Error(ye);if(!Array.isArray(a)||"string"!==typeof a[0]||null!=t&&void 0!==t[a[0]]){var l=ke(e,t,a);switch(i){case"animation":case"animationName":r+=be(i)+":"+l+";";break;default:r+=i+"{"+l+"}"}}else for(var c=0;c<a.length;c++)xe(a[c])&&(r+=be(i)+":"+ve(i,a[c])+";")}}return r}(e,t,n);case"function":if(void 0!==e){var s=we,l=n(e);return we=s,ke(e,t,l)}}var c=n;if(null==t)return c;var d=t[c];return void 0!==d?d:c}var we,Ae=/label:\s*([^\s;{]+)\s*(;|$)/g;function je(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,o="";we=void 0;var i=e[0];null==i||void 0===i.raw?(r=!1,o+=ke(n,t,i)):o+=i[0];for(var a=1;a<e.length;a++){if(o+=ke(n,t,e[a]),r)o+=i[a]}Ae.lastIndex=0;for(var s,l="";null!==(s=Ae.exec(o));)l+="-"+s[1];var c=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(o)+l;return{name:c,styles:o,next:we}}var Fe=!!i.useInsertionEffect&&i.useInsertionEffect,Se=Fe||function(e){return e()},Ce=Fe||o.useLayoutEffect,Ee=o.createContext("undefined"!==typeof HTMLElement?se({key:"css"}):null),De=Ee.Provider,$e=function(e){return(0,o.forwardRef)(function(t,n){var r=(0,o.useContext)(Ee);return e(t,r,n)})},Me=o.createContext({});var Te={}.hasOwnProperty,Ie="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",ze=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return ce(t,n,r),Se(function(){return de(t,n,r)}),null},Be=$e(function(e,t,n){var r=e.css;"string"===typeof r&&void 0!==t.registered[r]&&(r=t.registered[r]);var i=e[Ie],a=[r],s="";"string"===typeof e.className?s=le(t.registered,a,e.className):null!=e.className&&(s=e.className+" ");var l=je(a,void 0,o.useContext(Me));s+=t.key+"-"+l.name;var c={};for(var d in e)Te.call(e,d)&&"css"!==d&&d!==Ie&&(c[d]=e[d]);return c.className=s,n&&(c.ref=n),o.createElement(o.Fragment,null,o.createElement(ze,{cache:t,serialized:l,isStringTag:"string"===typeof i}),o.createElement(i,c))}),Le=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Re=pe(function(e){return Le.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),Pe=function(e){return"theme"!==e},Oe=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?Re:Pe},Ne=function(e,t,n){var r;if(t){var o=t.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!==typeof r&&n&&(r=e.__emotion_forwardProp),r},_e=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return ce(t,n,r),Se(function(){return de(t,n,r)}),null},He=function e(t,n){var i,a,s=t.__emotion_real===t,l=s&&t.__emotion_base||t;void 0!==n&&(i=n.label,a=n.target);var c=Ne(t,n,s),d=c||Oe(l),u=!d("as");return function(){var p=arguments,f=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==i&&f.push("label:"+i+";"),null==p[0]||void 0===p[0].raw)f.push.apply(f,p);else{var h=p[0];f.push(h[0]);for(var m=p.length,g=1;g<m;g++)f.push(p[g],h[g])}var x=$e(function(e,t,n){var r=u&&e.as||l,i="",s=[],p=e;if(null==e.theme){for(var h in p={},e)p[h]=e[h];p.theme=o.useContext(Me)}"string"===typeof e.className?i=le(t.registered,s,e.className):null!=e.className&&(i=e.className+" ");var m=je(f.concat(s),t.registered,p);i+=t.key+"-"+m.name,void 0!==a&&(i+=" "+a);var g=u&&void 0===c?Oe(r):d,x={};for(var b in e)u&&"as"===b||g(b)&&(x[b]=e[b]);return x.className=i,n&&(x.ref=n),o.createElement(o.Fragment,null,o.createElement(_e,{cache:t,serialized:m,isStringTag:"string"===typeof r}),o.createElement(r,x))});return x.displayName=void 0!==i?i:"Styled("+("string"===typeof l?l:l.displayName||l.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=l,x.__emotion_styles=f,x.__emotion_forwardProp=c,Object.defineProperty(x,"toString",{value:function(){return"."+a}}),x.withComponent=function(t,o){return e(t,(0,r.A)({},n,o,{shouldForwardProp:Ne(x,o,!0)})).apply(void 0,f)},x}}.bind(null);["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){He[e]=He(e)});n(219);var Ue=function(e,t){var n=arguments;if(null==t||!Te.call(t,"css"))return o.createElement.apply(void 0,n);var r=n.length,i=new Array(r);i[0]=Be,i[1]=function(e,t){var n={};for(var r in t)Te.call(t,r)&&(n[r]=t[r]);return n[Ie]=e,n}(e,t);for(var a=2;a<r;a++)i[a]=n[a];return o.createElement.apply(null,i)};!function(e){var t;t||(t=e.JSX||(e.JSX={}))}(Ue||(Ue={}));var We=$e(function(e,t){var n=je([e.styles],void 0,o.useContext(Me)),r=o.useRef();return Ce(function(){var e=t.key+"-global",o=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),i=!1,a=document.querySelector('style[data-emotion="'+e+" "+n.name+'"]');return t.sheet.tags.length&&(o.before=t.sheet.tags[0]),null!==a&&(i=!0,a.setAttribute("data-emotion",e),o.hydrate([a])),r.current=[o,i],function(){o.flush()}},[t]),Ce(function(){var e=r.current,o=e[0];if(e[1])e[1]=!1;else{if(void 0!==n.next&&de(t,n.next,!0),o.tags.length){var i=o.tags[o.tags.length-1].nextElementSibling;o.before=i,o.flush()}t.insert("",n,o,!1)}},[t,n.name]),null});function Ve(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return je(t)}function Ge(){var e=Ve.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Ke=n(579);const Ye=new Map;function Xe(e){const{injectFirst:t,enableCssLayer:n,children:r}=e,i=o.useMemo(()=>{const e=`${t}-${n}`;if("object"===typeof document&&Ye.has(e))return Ye.get(e);const r=function(e,t){const n=se({key:"css",prepend:e});if(t){const e=n.insert;n.insert=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n[1].styles.match(/^@layer\s+[^{]*$/)||(n[1].styles=`@layer mui {${n[1].styles}}`),e(...n)}}return n}(t,n);return Ye.set(e,r),r},[t,n]);return t||n?(0,Ke.jsx)(De,{value:i,children:r}):r}function qe(e){const{styles:t,defaultTheme:n={}}=e,r="function"===typeof t?e=>{return t(void 0===(r=e)||null===r||0===Object.keys(r).length?n:e);var r}:t;return(0,Ke.jsx)(We,{styles:r})}function Qe(e,t){return He(e,t)}const Je=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},Ze=[];function et(e){return Ze[0]=e,je(Ze)}},1707:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight")},2177:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person")},2577:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings")},2730:(e,t,n)=>{"use strict";var r=n(5043),o=n(8853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var d=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),u=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function m(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function v(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!u.call(h,e)||!u.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(x,b);g[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(x,b);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(x,b);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var y=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),w=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),C=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),T=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var I=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var z=Symbol.iterator;function B(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=z&&e[z]||e["@@iterator"])?e:null}var L,R=Object.assign;function P(e){if(void 0===L)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);L=t&&t[1]||""}return"\n"+L+e}var O=!1;function N(e,t){if(!e||O)return"";O=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var o=c.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(1!==a||1!==s)do{if(a--,0>--s||o[a]!==i[s]){var l="\n"+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{O=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?P(e):""}function _(e){switch(e.tag){case 5:return P(e.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return e=N(e.type,!1);case 11:return e=N(e.type.render,!1);case 1:return e=N(e.type,!0);default:return""}}function H(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case A:return"Fragment";case w:return"Portal";case F:return"Profiler";case j:return"StrictMode";case D:return"Suspense";case $:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case C:return(e.displayName||"Context")+".Consumer";case S:return(e._context.displayName||"Context")+".Provider";case E:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case M:return null!==(t=e.displayName||null)?t:H(e.type)||"Memo";case T:t=e._payload,e=e._init;try{return H(e(t))}catch(n){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function G(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function X(e,t){var n=t.checked;return R({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&v(e,"checked",t,!1)}function J(e,t){Q(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return R({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function ie(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,de,ue=(de=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return de(e,t)})}:de);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(fe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]})});var xe=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function ve(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function ke(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var we=null,Ae=null,je=null;function Fe(e){if(e=yo(e)){if("function"!==typeof we)throw Error(i(280));var t=e.stateNode;t&&(t=wo(t),we(e.stateNode,e.type,t))}}function Se(e){Ae?je?je.push(e):je=[e]:Ae=e}function Ce(){if(Ae){var e=Ae,t=je;if(je=Ae=null,Fe(e),t)for(e=0;e<t.length;e++)Fe(t[e])}}function Ee(e,t){return e(t)}function De(){}var $e=!1;function Me(e,t,n){if($e)return e(t,n);$e=!0;try{return Ee(e,t,n)}finally{$e=!1,(null!==Ae||null!==je)&&(De(),Ce())}}function Te(e,t){var n=e.stateNode;if(null===n)return null;var r=wo(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Ie=!1;if(d)try{var ze={};Object.defineProperty(ze,"passive",{get:function(){Ie=!0}}),window.addEventListener("test",ze,ze),window.removeEventListener("test",ze,ze)}catch(de){Ie=!1}function Be(e,t,n,r,o,i,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Le=!1,Re=null,Pe=!1,Oe=null,Ne={onError:function(e){Le=!0,Re=e}};function _e(e,t,n,r,o,i,a,s,l){Le=!1,Re=null,Be.apply(Ne,arguments)}function He(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ue(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(He(e)!==e)throw Error(i(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=He(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(r=o.return)){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return We(o),e;if(a===r)return We(o),t;a=a.sibling}throw Error(i(188))}if(n.return!==r.return)n=o,r=a;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=a;break}if(l===r){s=!0,r=o,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=o;break}if(l===r){s=!0,r=a,n=o;break}l=l.sibling}if(!s)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ge(e):null}function Ge(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ge(e);if(null!==t)return t;e=e.sibling}return null}var Ke=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,Xe=o.unstable_shouldYield,qe=o.unstable_requestPaint,Qe=o.unstable_now,Je=o.unstable_getCurrentPriorityLevel,Ze=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,it=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,dt=4194304;function ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~o;0!==s?r=ut(s):0!==(i&=a)&&(r=ut(i))}else 0!==(a=n&~o)?r=ut(a):0!==i&&(r=ut(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-at(t)),r|=e[n],t&=~o;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var vt=0;function yt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var kt,wt,At,jt,Ft,St=!1,Ct=[],Et=null,Dt=null,$t=null,Mt=new Map,Tt=new Map,It=[],zt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bt(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Mt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tt.delete(t.pointerId)}}function Lt(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=yo(t))&&wt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Rt(e){var t=vo(e.target);if(null!==t){var n=He(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ue(n)))return e.blockedOn=t,void Ft(e.priority,function(){At(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Pt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yo(n))&&wt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ye=r,n.target.dispatchEvent(r),ye=null,t.shift()}return!0}function Ot(e,t,n){Pt(e)&&n.delete(t)}function Nt(){St=!1,null!==Et&&Pt(Et)&&(Et=null),null!==Dt&&Pt(Dt)&&(Dt=null),null!==$t&&Pt($t)&&($t=null),Mt.forEach(Ot),Tt.forEach(Ot)}function _t(e,t){e.blockedOn===t&&(e.blockedOn=null,St||(St=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Nt)))}function Ht(e){function t(t){return _t(t,e)}if(0<Ct.length){_t(Ct[0],e);for(var n=1;n<Ct.length;n++){var r=Ct[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Et&&_t(Et,e),null!==Dt&&_t(Dt,e),null!==$t&&_t($t,e),Mt.forEach(t),Tt.forEach(t),n=0;n<It.length;n++)(r=It[n]).blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&null===(n=It[0]).blockedOn;)Rt(n),null===n.blockedOn&&It.shift()}var Ut=y.ReactCurrentBatchConfig,Wt=!0;function Vt(e,t,n,r){var o=vt,i=Ut.transition;Ut.transition=null;try{vt=1,Kt(e,t,n,r)}finally{vt=o,Ut.transition=i}}function Gt(e,t,n,r){var o=vt,i=Ut.transition;Ut.transition=null;try{vt=4,Kt(e,t,n,r)}finally{vt=o,Ut.transition=i}}function Kt(e,t,n,r){if(Wt){var o=Xt(e,t,n,r);if(null===o)Wr(e,t,r,Yt,n),Bt(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Et=Lt(Et,e,t,n,r,o),!0;case"dragenter":return Dt=Lt(Dt,e,t,n,r,o),!0;case"mouseover":return $t=Lt($t,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Mt.set(i,Lt(Mt.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Tt.set(i,Lt(Tt.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(Bt(e,r),4&t&&-1<zt.indexOf(e)){for(;null!==o;){var i=yo(o);if(null!==i&&kt(i),null===(i=Xt(e,t,n,r))&&Wr(e,t,r,Yt,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Yt=null;function Xt(e,t,n,r){if(Yt=null,null!==(e=vo(e=ke(r))))if(null===(t=He(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ue(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Qt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,o="value"in Qt?Qt.value:Qt.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Zt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dn=on(cn),un=R({},cn,{view:0,detail:0}),pn=on(un),fn=R({},un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(an=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=an=0,ln=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),hn=on(fn),mn=on(R({},fn,{dataTransfer:0})),gn=on(R({},un,{relatedTarget:0})),xn=on(R({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=R({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vn=on(bn),yn=on(R({},cn,{data:0})),kn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},An={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=An[e])&&!!t[e]}function Fn(){return jn}var Sn=R({},un,{key:function(e){if(e.key){var t=kn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cn=on(Sn),En=on(R({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Dn=on(R({},un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fn})),$n=on(R({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Mn=R({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tn=on(Mn),In=[9,13,27,32],zn=d&&"CompositionEvent"in window,Bn=null;d&&"documentMode"in document&&(Bn=document.documentMode);var Ln=d&&"TextEvent"in window&&!Bn,Rn=d&&(!zn||Bn&&8<Bn&&11>=Bn),Pn=String.fromCharCode(32),On=!1;function Nn(e,t){switch(e){case"keyup":return-1!==In.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _n(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Hn=!1;var Un={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Un[e.type]:"textarea"===t}function Vn(e,t,n,r){Se(r),0<(t=Gr(t,"onChange")).length&&(n=new dn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Kn=null;function Yn(e){Pr(e,0)}function Xn(e){if(K(ko(e)))return e}function qn(e,t){if("change"===e)return t}var Qn=!1;if(d){var Jn;if(d){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Qn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Gn&&(Gn.detachEvent("onpropertychange",nr),Kn=Gn=null)}function nr(e){if("value"===e.propertyName&&Xn(Kn)){var t=[];Vn(t,Kn,e,ke(e)),Me(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Gn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Xn(Kn)}function ir(e,t){if("click"===e)return Xn(t)}function ar(e,t){if("input"===e||"change"===e)return Xn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!u.call(t,o)||!sr(e[o],t[o]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dr(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function ur(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?ur(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ur(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=dr(n,i);var a=dr(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=d&&"documentMode"in document&&11>=document.documentMode,gr=null,xr=null,br=null,vr=!1;function yr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;vr||null==gr||gr!==Y(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&lr(br,r)||(br=r,0<(r=Gr(xr,"onSelect")).length&&(t=new dn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wr={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Ar={},jr={};function Fr(e){if(Ar[e])return Ar[e];if(!wr[e])return e;var t,n=wr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Ar[e]=n[t];return e}d&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);var Sr=Fr("animationend"),Cr=Fr("animationiteration"),Er=Fr("animationstart"),Dr=Fr("transitionend"),$r=new Map,Mr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(e,t){$r.set(e,t),l(t,[e])}for(var Ir=0;Ir<Mr.length;Ir++){var zr=Mr[Ir];Tr(zr.toLowerCase(),"on"+(zr[0].toUpperCase()+zr.slice(1)))}Tr(Sr,"onAnimationEnd"),Tr(Cr,"onAnimationIteration"),Tr(Er,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(Dr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Rr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,a,s,l,c){if(_e.apply(this,arguments),Le){if(!Le)throw Error(i(198));var d=Re;Le=!1,Re=null,Pe||(Pe=!0,Oe=d)}}(r,t,void 0,e),e.currentTarget=null}function Pr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Rr(o,s,c),i=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Rr(o,s,c),i=l}}}if(Pe)throw e=Oe,Pe=!1,Oe=null,e}function Or(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Ur(t,e,2,!1),n.add(r))}function Nr(e,t,n){var r=0;t&&(r|=4),Ur(n,e,r,t)}var _r="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[_r]){e[_r]=!0,a.forEach(function(t){"selectionchange"!==t&&(Lr.has(t)||Nr(t,!1,e),Nr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[_r]||(t[_r]=!0,Nr("selectionchange",!1,t))}}function Ur(e,t,n,r){switch(qt(t)){case 1:var o=Vt;break;case 4:o=Gt;break;default:o=Kt}n=o.bind(null,t,n,e),o=void 0,!Ie||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===o||8===s.nodeType&&s.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===o||8===l.nodeType&&l.parentNode===o))return;a=a.return}for(;null!==s;){if(null===(a=vo(s)))return;if(5===(l=a.tag)||6===l){r=i=a;continue e}s=s.parentNode}}r=r.return}Me(function(){var r=i,o=ke(n),a=[];e:{var s=$r.get(e);if(void 0!==s){var l=dn,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=Cn;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Dn;break;case Sr:case Cr:case Er:l=xn;break;case Dr:l=$n;break;case"scroll":l=pn;break;case"wheel":l=Tn;break;case"copy":case"cut":case"paste":l=vn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=En}var d=0!==(4&t),u=!d&&"scroll"===e,p=d?null!==s?s+"Capture":null:s;d=[];for(var f,h=r;null!==h;){var m=(f=h).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==p&&(null!=(m=Te(h,p))&&d.push(Vr(h,m,f)))),u)break;h=h.return}0<d.length&&(s=new l(s,c,null,n,o),a.push({event:s,listeners:d}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===ye||!(c=n.relatedTarget||n.fromElement)||!vo(c)&&!c[mo])&&(l||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?vo(c):null)&&(c!==(u=He(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(d=hn,m="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(d=En,m="onPointerLeave",p="onPointerEnter",h="pointer"),u=null==l?s:ko(l),f=null==c?s:ko(c),(s=new d(m,h+"leave",l,n,o)).target=u,s.relatedTarget=f,m=null,vo(o)===r&&((d=new d(p,h+"enter",c,n,o)).target=f,d.relatedTarget=u,m=d),u=m,l&&c)e:{for(p=c,h=0,f=d=l;f;f=Kr(f))h++;for(f=0,m=p;m;m=Kr(m))f++;for(;0<h-f;)d=Kr(d),h--;for(;0<f-h;)p=Kr(p),f--;for(;h--;){if(d===p||null!==p&&d===p.alternate)break e;d=Kr(d),p=Kr(p)}d=null}else d=null;null!==l&&Yr(a,s,l,d,!1),null!==c&&null!==u&&Yr(a,u,c,d,!0)}if("select"===(l=(s=r?ko(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=qn;else if(Wn(s))if(Qn)g=ar;else{g=or;var x=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=ir);switch(g&&(g=g(e,r))?Vn(a,g,n,o):(x&&x(e,s,r),"focusout"===e&&(x=s._wrapperState)&&x.controlled&&"number"===s.type&&ee(s,"number",s.value)),x=r?ko(r):window,e){case"focusin":(Wn(x)||"true"===x.contentEditable)&&(gr=x,xr=r,br=null);break;case"focusout":br=xr=gr=null;break;case"mousedown":vr=!0;break;case"contextmenu":case"mouseup":case"dragend":vr=!1,yr(a,n,o);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":yr(a,n,o)}var b;if(zn)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Hn?Nn(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Rn&&"ko"!==n.locale&&(Hn||"onCompositionStart"!==v?"onCompositionEnd"===v&&Hn&&(b=en()):(Jt="value"in(Qt=o)?Qt.value:Qt.textContent,Hn=!0)),0<(x=Gr(r,v)).length&&(v=new yn(v,e,null,n,o),a.push({event:v,listeners:x}),b?v.data=b:null!==(b=_n(n))&&(v.data=b))),(b=Ln?function(e,t){switch(e){case"compositionend":return _n(t);case"keypress":return 32!==t.which?null:(On=!0,Pn);case"textInput":return(e=t.data)===Pn&&On?null:e;default:return null}}(e,n):function(e,t){if(Hn)return"compositionend"===e||!zn&&Nn(e,t)?(e=en(),Zt=Jt=Qt=null,Hn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Gr(r,"onBeforeInput")).length&&(o=new yn("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=b))}Pr(a,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=Te(e,n))&&r.unshift(Vr(e,i,o)),null!=(i=Te(e,t))&&r.push(Vr(e,i,o))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,o?null!=(l=Te(n,i))&&a.unshift(Vr(n,l,s)):o||null!=(l=Te(n,i))&&a.push(Vr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Xr=/\r\n?/g,qr=/\u0000|\uFFFD/g;function Qr(e){return("string"===typeof e?e:""+e).replace(Xr,"\n").replace(qr,"")}function Jr(e,t,n){if(t=Qr(t),Qr(e)!==t&&n)throw Error(i(425))}function Zr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,io="function"===typeof Promise?Promise:void 0,ao="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof io?function(e){return io.resolve(null).then(e).catch(so)}:ro;function so(e){setTimeout(function(){throw e})}function lo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Ht(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Ht(t)}function co(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function uo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),fo="__reactFiber$"+po,ho="__reactProps$"+po,mo="__reactContainer$"+po,go="__reactEvents$"+po,xo="__reactListeners$"+po,bo="__reactHandles$"+po;function vo(e){var t=e[fo];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[fo]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=uo(e);null!==e;){if(n=e[fo])return n;e=uo(e)}return t}n=(e=n).parentNode}return null}function yo(e){return!(e=e[fo]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ko(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function wo(e){return e[ho]||null}var Ao=[],jo=-1;function Fo(e){return{current:e}}function So(e){0>jo||(e.current=Ao[jo],Ao[jo]=null,jo--)}function Co(e,t){jo++,Ao[jo]=e.current,e.current=t}var Eo={},Do=Fo(Eo),$o=Fo(!1),Mo=Eo;function To(e,t){var n=e.type.contextTypes;if(!n)return Eo;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Io(e){return null!==(e=e.childContextTypes)&&void 0!==e}function zo(){So($o),So(Do)}function Bo(e,t,n){if(Do.current!==Eo)throw Error(i(168));Co(Do,t),Co($o,n)}function Lo(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(i(108,U(e)||"Unknown",o));return R({},n,r)}function Ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Eo,Mo=Do.current,Co(Do,e),Co($o,$o.current),!0}function Po(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Lo(e,t,Mo),r.__reactInternalMemoizedMergedChildContext=e,So($o),So(Do),Co(Do,e)):So($o),Co($o,n)}var Oo=null,No=!1,_o=!1;function Ho(e){null===Oo?Oo=[e]:Oo.push(e)}function Uo(){if(!_o&&null!==Oo){_o=!0;var e=0,t=vt;try{var n=Oo;for(vt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Oo=null,No=!1}catch(o){throw null!==Oo&&(Oo=Oo.slice(e+1)),Ke(Ze,Uo),o}finally{vt=t,_o=!1}}return null}var Wo=[],Vo=0,Go=null,Ko=0,Yo=[],Xo=0,qo=null,Qo=1,Jo="";function Zo(e,t){Wo[Vo++]=Ko,Wo[Vo++]=Go,Go=e,Ko=t}function ei(e,t,n){Yo[Xo++]=Qo,Yo[Xo++]=Jo,Yo[Xo++]=qo,qo=e;var r=Qo;e=Jo;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Qo=1<<32-at(t)+o|n<<o|r,Jo=i+e}else Qo=1<<i|n<<o|r,Jo=e}function ti(e){null!==e.return&&(Zo(e,1),ei(e,1,0))}function ni(e){for(;e===Go;)Go=Wo[--Vo],Wo[Vo]=null,Ko=Wo[--Vo],Wo[Vo]=null;for(;e===qo;)qo=Yo[--Xo],Yo[Xo]=null,Jo=Yo[--Xo],Yo[Xo]=null,Qo=Yo[--Xo],Yo[Xo]=null}var ri=null,oi=null,ii=!1,ai=null;function si(e,t){var n=Mc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ri=e,oi=co(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ri=e,oi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==qo?{id:Qo,overflow:Jo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Mc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ri=e,oi=null,!0);default:return!1}}function ci(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function di(e){if(ii){var t=oi;if(t){var n=t;if(!li(e,t)){if(ci(e))throw Error(i(418));t=co(n.nextSibling);var r=ri;t&&li(e,t)?si(r,n):(e.flags=-4097&e.flags|2,ii=!1,ri=e)}}else{if(ci(e))throw Error(i(418));e.flags=-4097&e.flags|2,ii=!1,ri=e}}}function ui(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ri=e}function pi(e){if(e!==ri)return!1;if(!ii)return ui(e),ii=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oi)){if(ci(e))throw fi(),Error(i(418));for(;t;)si(e,t),t=co(t.nextSibling)}if(ui(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oi=co(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oi=null}}else oi=ri?co(e.stateNode.nextSibling):null;return!0}function fi(){for(var e=oi;e;)e=co(e.nextSibling)}function hi(){oi=ri=null,ii=!1}function mi(e){null===ai?ai=[e]:ai.push(e)}var gi=y.ReactCurrentBatchConfig;function xi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var o=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=o.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function bi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vi(e){return(0,e._init)(e._payload)}function yi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Ic(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Rc(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===A?u(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===T&&vi(i)===t.type)?((r=o(t,n.props)).ref=xi(e,t,n),r.return=e,r):((r=zc(n.type,n.key,n.props,null,e.mode,r)).ref=xi(e,t,n),r.return=e,r)}function d(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Pc(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function u(e,t,n,r,i){return null===t||7!==t.tag?((t=Bc(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Rc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case k:return(n=zc(t.type,t.key,t.props,null,e.mode,n)).ref=xi(e,null,t),n.return=e,n;case w:return(t=Pc(t,e.mode,n)).return=e,t;case T:return p(e,(0,t._init)(t._payload),n)}if(te(t)||B(t))return(t=Bc(t,e.mode,n,null)).return=e,t;bi(e,t)}return null}function f(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case k:return n.key===o?c(e,t,n,r):null;case w:return n.key===o?d(e,t,n,r):null;case T:return f(e,t,(o=n._init)(n._payload),r)}if(te(n)||B(n))return null!==o?null:u(e,t,n,r,null);bi(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case w:return d(t,e=e.get(null===r.key?n:r.key)||null,r,o);case T:return h(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||B(r))return u(t,e=e.get(n)||null,r,o,null);bi(t,r)}return null}function m(o,i,s,l){for(var c=null,d=null,u=i,m=i=0,g=null;null!==u&&m<s.length;m++){u.index>m?(g=u,u=null):g=u.sibling;var x=f(o,u,s[m],l);if(null===x){null===u&&(u=g);break}e&&u&&null===x.alternate&&t(o,u),i=a(x,i,m),null===d?c=x:d.sibling=x,d=x,u=g}if(m===s.length)return n(o,u),ii&&Zo(o,m),c;if(null===u){for(;m<s.length;m++)null!==(u=p(o,s[m],l))&&(i=a(u,i,m),null===d?c=u:d.sibling=u,d=u);return ii&&Zo(o,m),c}for(u=r(o,u);m<s.length;m++)null!==(g=h(u,o,m,s[m],l))&&(e&&null!==g.alternate&&u.delete(null===g.key?m:g.key),i=a(g,i,m),null===d?c=g:d.sibling=g,d=g);return e&&u.forEach(function(e){return t(o,e)}),ii&&Zo(o,m),c}function g(o,s,l,c){var d=B(l);if("function"!==typeof d)throw Error(i(150));if(null==(l=d.call(l)))throw Error(i(151));for(var u=d=null,m=s,g=s=0,x=null,b=l.next();null!==m&&!b.done;g++,b=l.next()){m.index>g?(x=m,m=null):x=m.sibling;var v=f(o,m,b.value,c);if(null===v){null===m&&(m=x);break}e&&m&&null===v.alternate&&t(o,m),s=a(v,s,g),null===u?d=v:u.sibling=v,u=v,m=x}if(b.done)return n(o,m),ii&&Zo(o,g),d;if(null===m){for(;!b.done;g++,b=l.next())null!==(b=p(o,b.value,c))&&(s=a(b,s,g),null===u?d=b:u.sibling=b,u=b);return ii&&Zo(o,g),d}for(m=r(o,m);!b.done;g++,b=l.next())null!==(b=h(m,o,g,b.value,c))&&(e&&null!==b.alternate&&m.delete(null===b.key?g:b.key),s=a(b,s,g),null===u?d=b:u.sibling=b,u=b);return e&&m.forEach(function(e){return t(o,e)}),ii&&Zo(o,g),d}return function e(r,i,a,l){if("object"===typeof a&&null!==a&&a.type===A&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case k:e:{for(var c=a.key,d=i;null!==d;){if(d.key===c){if((c=a.type)===A){if(7===d.tag){n(r,d.sibling),(i=o(d,a.props.children)).return=r,r=i;break e}}else if(d.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===T&&vi(c)===d.type){n(r,d.sibling),(i=o(d,a.props)).ref=xi(r,d,a),i.return=r,r=i;break e}n(r,d);break}t(r,d),d=d.sibling}a.type===A?((i=Bc(a.props.children,r.mode,l,a.key)).return=r,r=i):((l=zc(a.type,a.key,a.props,null,r.mode,l)).ref=xi(r,i,a),l.return=r,r=l)}return s(r);case w:e:{for(d=a.key;null!==i;){if(i.key===d){if(4===i.tag&&i.stateNode.containerInfo===a.containerInfo&&i.stateNode.implementation===a.implementation){n(r,i.sibling),(i=o(i,a.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Pc(a,r.mode,l)).return=r,r=i}return s(r);case T:return e(r,i,(d=a._init)(a._payload),l)}if(te(a))return m(r,i,a,l);if(B(a))return g(r,i,a,l);bi(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==i&&6===i.tag?(n(r,i.sibling),(i=o(i,a)).return=r,r=i):(n(r,i),(i=Rc(a,r.mode,l)).return=r,r=i),s(r)):n(r,i)}}var ki=yi(!0),wi=yi(!1),Ai=Fo(null),ji=null,Fi=null,Si=null;function Ci(){Si=Fi=ji=null}function Ei(e){var t=Ai.current;So(Ai),e._currentValue=t}function Di(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $i(e,t){ji=e,Si=Fi=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(vs=!0),e.firstContext=null)}function Mi(e){var t=e._currentValue;if(Si!==e)if(e={context:e,memoizedValue:t,next:null},null===Fi){if(null===ji)throw Error(i(308));Fi=e,ji.dependencies={lanes:0,firstContext:e}}else Fi=Fi.next=e;return t}var Ti=null;function Ii(e){null===Ti?Ti=[e]:Ti.push(e)}function zi(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,Ii(t)):(n.next=o.next,o.next=n),t.interleaved=n,Bi(e,r)}function Bi(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Li=!1;function Ri(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Oi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ni(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&El)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Bi(e,n)}return null===(o=r.interleaved)?(t.next=t,Ii(r)):(t.next=o.next,o.next=t),r.interleaved=t,Bi(e,n)}function _i(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Hi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ui(e,t,n,r){var o=e.updateQueue;Li=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(null!==s){o.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?i=c:a.next=c,a=l;var d=e.alternate;null!==d&&((s=(d=d.updateQueue).lastBaseUpdate)!==a&&(null===s?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(null!==i){var u=o.baseState;for(a=0,d=c=l=null,s=i;;){var p=s.lane,f=s.eventTime;if((r&p)===p){null!==d&&(d=d.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(p=t,f=n,m.tag){case 1:if("function"===typeof(h=m.payload)){u=h.call(f,u,p);break e}u=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=m.payload)?h.call(f,u,p):h)||void 0===p)break e;u=R({},u,p);break e;case 2:Li=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=o.effects)?o.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===d?(c=d=f,l=u):d=d.next=f,a|=p;if(null===(s=s.next)){if(null===(s=o.shared.pending))break;s=(p=s).next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}if(null===d&&(l=u),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=d,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);Ll|=a,e.lanes=a,e.memoizedState=u}}function Wi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(i(191,o));o.call(r)}}}var Vi={},Gi=Fo(Vi),Ki=Fo(Vi),Yi=Fo(Vi);function Xi(e){if(e===Vi)throw Error(i(174));return e}function qi(e,t){switch(Co(Yi,t),Co(Ki,e),Co(Gi,Vi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}So(Gi),Co(Gi,t)}function Qi(){So(Gi),So(Ki),So(Yi)}function Ji(e){Xi(Yi.current);var t=Xi(Gi.current),n=le(t,e.type);t!==n&&(Co(Ki,e),Co(Gi,n))}function Zi(e){Ki.current===e&&(So(Gi),So(Ki))}var ea=Fo(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var oa=y.ReactCurrentDispatcher,ia=y.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ca=null,da=!1,ua=!1,pa=0,fa=0;function ha(){throw Error(i(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,o,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oa.current=null===e||null===e.memoizedState?Za:es,e=n(r,o),ua){a=0;do{if(ua=!1,pa=0,25<=a)throw Error(i(301));a+=1,ca=la=null,t.updateQueue=null,oa.current=ts,e=n(r,o)}while(ua)}if(oa.current=Ja,t=null!==la&&null!==la.next,aa=0,ca=la=sa=null,da=!1,t)throw Error(i(300));return e}function xa(){var e=0!==pa;return pa=0,e}function ba(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?sa.memoizedState=ca=e:ca=ca.next=e,ca}function va(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ca?sa.memoizedState:ca.next;if(null!==t)ca=t,la=e;else{if(null===e)throw Error(i(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ca?sa.memoizedState=ca=e:ca=ca.next=e}return ca}function ya(e,t){return"function"===typeof t?t(e):t}function ka(e){var t=va(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=la,o=r.baseQueue,a=n.pending;if(null!==a){if(null!==o){var s=o.next;o.next=a.next,a.next=s}r.baseQueue=o=a,n.pending=null}if(null!==o){a=o.next,r=r.baseState;var l=s=null,c=null,d=a;do{var u=d.lane;if((aa&u)===u)null!==c&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};null===c?(l=c=p,s=r):c=c.next=p,sa.lanes|=u,Ll|=u}d=d.next}while(null!==d&&d!==a);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(vs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{a=o.lane,sa.lanes|=a,Ll|=a,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wa(e){var t=va(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(null!==o){n.pending=null;var s=o=o.next;do{a=e(a,s.action),s=s.next}while(s!==o);sr(a,t.memoizedState)||(vs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Aa(){}function ja(e,t){var n=sa,r=va(),o=t(),a=!sr(r.memoizedState,o);if(a&&(r.memoizedState=o,vs=!0),r=r.queue,La(Ca.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(n.flags|=2048,Ma(9,Sa.bind(null,n,r,o,t),void 0,null),null===Dl)throw Error(i(349));0!==(30&aa)||Fa(n,t,o)}return o}function Fa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Sa(e,t,n,r){t.value=n,t.getSnapshot=r,Ea(t)&&Da(e)}function Ca(e,t,n){return n(function(){Ea(t)&&Da(e)})}function Ea(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function Da(e){var t=Bi(e,1);null!==t&&nc(t,e,1,-1)}function $a(e){var t=ba();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},t.queue=e,e=e.dispatch=Ya.bind(null,sa,e),[t.memoizedState,e]}function Ma(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ta(){return va().memoizedState}function Ia(e,t,n,r){var o=ba();sa.flags|=e,o.memoizedState=Ma(1|t,n,void 0,void 0===r?null:r)}function za(e,t,n,r){var o=va();r=void 0===r?null:r;var i=void 0;if(null!==la){var a=la.memoizedState;if(i=a.destroy,null!==r&&ma(r,a.deps))return void(o.memoizedState=Ma(t,n,i,r))}sa.flags|=e,o.memoizedState=Ma(1|t,n,i,r)}function Ba(e,t){return Ia(8390656,8,e,t)}function La(e,t){return za(2048,8,e,t)}function Ra(e,t){return za(4,2,e,t)}function Pa(e,t){return za(4,4,e,t)}function Oa(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Na(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,za(4,4,Oa.bind(null,t,e),n)}function _a(){}function Ha(e,t){var n=va();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ua(e,t){var n=va();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wa(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,vs=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),sa.lanes|=n,Ll|=n,e.baseState=!0),t)}function Va(e,t){var n=vt;vt=0!==n&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{vt=n,ia.transition=r}}function Ga(){return va().memoizedState}function Ka(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xa(e))qa(t,n);else if(null!==(n=zi(e,t,n,r))){nc(n,e,r,ec()),Qa(n,t,r)}}function Ya(e,t,n){var r=tc(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xa(e))qa(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,sr(s,a)){var l=t.interleaved;return null===l?(o.next=o,Ii(t)):(o.next=l.next,l.next=o),void(t.interleaved=o)}}catch(c){}null!==(n=zi(e,t,o,r))&&(nc(n,e,r,o=ec()),Qa(n,t,r))}}function Xa(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function qa(e,t){ua=da=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qa(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Ja={readContext:Mi,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useInsertionEffect:ha,useLayoutEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useMutableSource:ha,useSyncExternalStore:ha,useId:ha,unstable_isNewReconciler:!1},Za={readContext:Mi,useCallback:function(e,t){return ba().memoizedState=[e,void 0===t?null:t],e},useContext:Mi,useEffect:Ba,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ia(4194308,4,Oa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ia(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ia(4,2,e,t)},useMemo:function(e,t){var n=ba();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ba();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ka.bind(null,sa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ba().memoizedState=e},useState:$a,useDebugValue:_a,useDeferredValue:function(e){return ba().memoizedState=e},useTransition:function(){var e=$a(!1),t=e[0];return e=Va.bind(null,e[1]),ba().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sa,o=ba();if(ii){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Dl)throw Error(i(349));0!==(30&aa)||Fa(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Ba(Ca.bind(null,r,a,e),[e]),r.flags|=2048,Ma(9,Sa.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ba(),t=Dl.identifierPrefix;if(ii){var n=Jo;t=":"+t+"R"+(n=(Qo&~(1<<32-at(Qo)-1)).toString(32)+n),0<(n=pa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Mi,useCallback:Ha,useContext:Mi,useEffect:La,useImperativeHandle:Na,useInsertionEffect:Ra,useLayoutEffect:Pa,useMemo:Ua,useReducer:ka,useRef:Ta,useState:function(){return ka(ya)},useDebugValue:_a,useDeferredValue:function(e){return Wa(va(),la.memoizedState,e)},useTransition:function(){return[ka(ya)[0],va().memoizedState]},useMutableSource:Aa,useSyncExternalStore:ja,useId:Ga,unstable_isNewReconciler:!1},ts={readContext:Mi,useCallback:Ha,useContext:Mi,useEffect:La,useImperativeHandle:Na,useInsertionEffect:Ra,useLayoutEffect:Pa,useMemo:Ua,useReducer:wa,useRef:Ta,useState:function(){return wa(ya)},useDebugValue:_a,useDeferredValue:function(e){var t=va();return null===la?t.memoizedState=e:Wa(t,la.memoizedState,e)},useTransition:function(){return[wa(ya)[0],va().memoizedState]},useMutableSource:Aa,useSyncExternalStore:ja,useId:Ga,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=R({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:R({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var os={isMounted:function(e){return!!(e=e._reactInternals)&&He(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),i=Oi(r,o);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Ni(e,i,o))&&(nc(t,e,o,r),_i(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),i=Oi(r,o);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Ni(e,i,o))&&(nc(t,e,o,r),_i(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),o=Oi(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Ni(e,o,r))&&(nc(t,e,r,n),_i(t,e,r))}};function is(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(o,i))}function as(e,t,n){var r=!1,o=Eo,i=t.contextType;return"object"===typeof i&&null!==i?i=Mi(i):(o=Io(t)?Mo:Do.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?To(e,o):Eo),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=os,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&os.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ri(e);var i=t.contextType;"object"===typeof i&&null!==i?o.context=Mi(i):(i=Io(t)?Mo:Do.current,o.context=To(e,i)),o.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rs(e,t,i,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&os.enqueueReplaceState(o,o.state,null),Ui(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=_(r),r=r.return}while(r);var o=n}catch(i){o="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:o,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function us(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ps="function"===typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=Oi(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,Vl=r),us(0,t)},n}function hs(e,t,n){(n=Oi(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){us(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){us(0,t),"function"!==typeof r&&(null===Gl?Gl=new Set([this]):Gl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Fc.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xs(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Oi(-1,1)).tag=2,Ni(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var bs=y.ReactCurrentOwner,vs=!1;function ys(e,t,n,r){t.child=null===e?wi(t,null,n,r):ki(t,e.child,n,r)}function ks(e,t,n,r,o){n=n.render;var i=t.ref;return $i(t,o),r=ga(e,t,n,r,i,o),n=xa(),null===e||vs?(ii&&n&&ti(t),t.flags|=1,ys(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ws(e,t,o))}function ws(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||Tc(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=zc(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,As(e,t,i,r,o))}if(i=e.child,0===(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(a,r)&&e.ref===t.ref)return Ws(e,t,o)}return t.flags|=1,(e=Ic(i,r)).ref=t.ref,e.return=t,t.child=e}function As(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(lr(i,r)&&e.ref===t.ref){if(vs=!1,t.pendingProps=r=i,0===(e.lanes&o))return t.lanes=e.lanes,Ws(e,t,o);0!==(131072&e.flags)&&(vs=!0)}}return Ss(e,t,n,r,o)}function js(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Co(Il,Tl),Tl|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Co(Il,Tl),Tl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Co(Il,Tl),Tl|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Co(Il,Tl),Tl|=r;return ys(e,t,o,n),t.child}function Fs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ss(e,t,n,r,o){var i=Io(n)?Mo:Do.current;return i=To(t,i),$i(t,o),n=ga(e,t,n,r,i,o),r=xa(),null===e||vs?(ii&&r&&ti(t),t.flags|=1,ys(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ws(e,t,o))}function Cs(e,t,n,r,o){if(Io(n)){var i=!0;Ro(t)}else i=!1;if($i(t,o),null===t.stateNode)Us(e,t),as(t,n,r),ls(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;"object"===typeof c&&null!==c?c=Mi(c):c=To(t,c=Io(n)?Mo:Do.current);var d=n.getDerivedStateFromProps,u="function"===typeof d||"function"===typeof a.getSnapshotBeforeUpdate;u||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,a,r,c),Li=!1;var p=t.memoizedState;a.state=p,Ui(t,r,a,o),l=t.memoizedState,s!==r||p!==l||$o.current||Li?("function"===typeof d&&(rs(t,n,d,r),l=t.memoizedState),(s=Li||is(t,n,s,r,p,l,c))?(u||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Pi(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),a.props=c,u=t.pendingProps,p=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=Mi(l):l=To(t,l=Io(n)?Mo:Do.current);var f=n.getDerivedStateFromProps;(d="function"===typeof f||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==u||p!==l)&&ss(t,a,r,l),Li=!1,p=t.memoizedState,a.state=p,Ui(t,r,a,o);var h=t.memoizedState;s!==u||p!==h||$o.current||Li?("function"===typeof f&&(rs(t,n,f,r),h=t.memoizedState),(c=Li||is(t,n,c,r,p,h,l)||!1)?(d||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=c):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Es(e,t,n,r,i,o)}function Es(e,t,n,r,o,i){Fs(e,t);var a=0!==(128&t.flags);if(!r&&!a)return o&&Po(t,n,!1),Ws(e,t,i);r=t.stateNode,bs.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=ki(t,e.child,null,i),t.child=ki(t,null,s,i)):ys(e,t,s,i),t.memoizedState=r.state,o&&Po(t,n,!0),t.child}function Ds(e){var t=e.stateNode;t.pendingContext?Bo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Bo(0,t.context,!1),qi(e,t.containerInfo)}function $s(e,t,n,r,o){return hi(),mi(o),t.flags|=256,ys(e,t,n,r),t.child}var Ms,Ts,Is,zs,Bs={dehydrated:null,treeContext:null,retryLane:0};function Ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rs(e,t,n){var r,o=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Co(ea,1&a),null===e)return di(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&o)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Lc(l,o,0,null),e=Bc(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ls(n),t.memoizedState=Bs,e):Ps(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,o,a,s){if(n)return 256&t.flags?(t.flags&=-257,Os(e,t,s,r=ds(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Lc({mode:"visible",children:r.children},o,0,null),(a=Bc(a,o,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&ki(t,e.child,null,s),t.child.memoizedState=Ls(s),t.memoizedState=Bs,a);if(0===(1&t.mode))return Os(e,t,s,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var l=r.dgst;return r=l,Os(e,t,s,r=ds(a=Error(i(419)),r,void 0))}if(l=0!==(s&e.childLanes),vs||l){if(null!==(r=Dl)){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|s))?0:o)&&o!==a.retryLane&&(a.retryLane=o,Bi(e,o),nc(r,e,o,-1))}return mc(),Os(e,t,s,r=ds(Error(i(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Cc.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,oi=co(o.nextSibling),ri=t,ii=!0,ai=null,null!==e&&(Yo[Xo++]=Qo,Yo[Xo++]=Jo,Yo[Xo++]=qo,Qo=e.id,Jo=e.overflow,qo=t),t=Ps(t,r.children),t.flags|=4096,t)}(e,t,l,o,r,a,n);if(s){s=o.fallback,l=t.mode,r=(a=e.child).sibling;var c={mode:"hidden",children:o.children};return 0===(1&l)&&t.child!==a?((o=t.child).childLanes=0,o.pendingProps=c,t.deletions=null):(o=Ic(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=Ic(r,s):(s=Bc(s,l,n,null)).flags|=2,s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=null===(l=e.child.memoizedState)?Ls(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Bs,o}return e=(s=e.child).sibling,o=Ic(s,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ps(e,t){return(t=Lc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Os(e,t,n,r){return null!==r&&mi(r),ki(t,e.child,null,n),(e=Ps(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ns(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Di(e.return,t,n)}function _s(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Hs(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ys(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ns(e,n,t);else if(19===e.tag)Ns(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Co(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),_s(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ta(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}_s(t,!0,n,null,i);break;case"together":_s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Us(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ws(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ll|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Ic(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ic(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vs(e,t){if(!ii)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Gs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ks(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gs(t),null;case 1:case 17:return Io(t.type)&&zo(),Gs(t),null;case 3:return r=t.stateNode,Qi(),So($o),So(Do),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(pi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ai&&(ac(ai),ai=null))),Ts(e,t),Gs(t),null;case 5:Zi(t);var o=Xi(Yi.current);if(n=t.type,null!==e&&null!=t.stateNode)Is(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Gs(t),null}if(e=Xi(Gi.current),pi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[fo]=t,r[ho]=a,e=0!==(1&t.mode),n){case"dialog":Or("cancel",r),Or("close",r);break;case"iframe":case"object":case"embed":Or("load",r);break;case"video":case"audio":for(o=0;o<Br.length;o++)Or(Br[o],r);break;case"source":Or("error",r);break;case"img":case"image":case"link":Or("error",r),Or("load",r);break;case"details":Or("toggle",r);break;case"input":q(r,a),Or("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Or("invalid",r);break;case"textarea":oe(r,a),Or("invalid",r)}for(var l in be(n,a),o=null,a)if(a.hasOwnProperty(l)){var c=a[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,c,e),o=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,c,e),o=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Or("scroll",r)}switch(n){case"input":G(r),Z(r,a,!0);break;case"textarea":G(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Zr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[fo]=t,e[ho]=r,Ms(e,t,!1,!1),t.stateNode=e;e:{switch(l=ve(n,r),n){case"dialog":Or("cancel",e),Or("close",e),o=r;break;case"iframe":case"object":case"embed":Or("load",e),o=r;break;case"video":case"audio":for(o=0;o<Br.length;o++)Or(Br[o],e);o=r;break;case"source":Or("error",e),o=r;break;case"img":case"image":case"link":Or("error",e),Or("load",e),o=r;break;case"details":Or("toggle",e),o=r;break;case"input":q(e,r),o=X(e,r),Or("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=R({},r,{value:void 0}),Or("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),Or("invalid",e)}for(a in be(n,o),c=o)if(c.hasOwnProperty(a)){var d=c[a];"style"===a?ge(e,d):"dangerouslySetInnerHTML"===a?null!=(d=d?d.__html:void 0)&&ue(e,d):"children"===a?"string"===typeof d?("textarea"!==n||""!==d)&&pe(e,d):"number"===typeof d&&pe(e,""+d):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=d&&"onScroll"===a&&Or("scroll",e):null!=d&&v(e,a,d,l))}switch(n){case"input":G(e),Z(e,r,!1);break;case"textarea":G(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Gs(t),null;case 6:if(e&&null!=t.stateNode)zs(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Xi(Yi.current),Xi(Gi.current),pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[fo]=t,(a=r.nodeValue!==n)&&null!==(e=ri))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fo]=t,t.stateNode=r}return Gs(t),null;case 13:if(So(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ii&&null!==oi&&0!==(1&t.mode)&&0===(128&t.flags))fi(),hi(),t.flags|=98560,a=!1;else if(a=pi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[fo]=t}else hi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Gs(t),a=!1}else null!==ai&&(ac(ai),ai=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===zl&&(zl=3):mc())),null!==t.updateQueue&&(t.flags|=4),Gs(t),null);case 4:return Qi(),Ts(e,t),null===e&&Hr(t.stateNode.containerInfo),Gs(t),null;case 10:return Ei(t.type._context),Gs(t),null;case 19:if(So(ea),null===(a=t.memoizedState))return Gs(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)Vs(a,!1);else{if(0!==zl||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Vs(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Co(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Qe()>Hl&&(t.flags|=128,r=!0,Vs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!ii)return Gs(t),null}else 2*Qe()-a.renderingStartTime>Hl&&1073741824!==n&&(t.flags|=128,r=!0,Vs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Qe(),t.sibling=null,n=ea.current,Co(ea,r?1&n|2:1&n),t):(Gs(t),null);case 22:case 23:return uc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Tl)&&(Gs(t),6&t.subtreeFlags&&(t.flags|=8192)):Gs(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Ys(e,t){switch(ni(t),t.tag){case 1:return Io(t.type)&&zo(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qi(),So($o),So(Do),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zi(t),null;case 13:if(So(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));hi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return So(ea),null;case 4:return Qi(),null;case 10:return Ei(t.type._context),null;case 22:case 23:return uc(),null;default:return null}}Ms=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ts=function(){},Is=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Xi(Gi.current);var i,a=null;switch(n){case"input":o=X(e,o),r=X(e,r),a=[];break;case"select":o=R({},o,{value:void 0}),r=R({},r,{value:void 0}),a=[];break;case"textarea":o=re(e,o),r=re(e,r),a=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(d in be(n,r),n=null,o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&null!=o[d])if("style"===d){var l=o[d];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==d&&"children"!==d&&"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(s.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var c=r[d];if(l=null!=o?o[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(null!=c||null!=l))if("style"===d)if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(a||(a=[]),a.push(d,n)),n=c;else"dangerouslySetInnerHTML"===d?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(a=a||[]).push(d,c)):"children"===d?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(d,""+c):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&(s.hasOwnProperty(d)?(null!=c&&"onScroll"===d&&Or("scroll",e),a||l===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}},zs=function(e,t,n,r){n!==r&&(t.flags|=4)};var Xs=!1,qs=!1,Qs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){jc(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){jc(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&el(t,n,i)}o=o.next}while(o!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ol(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function il(e){var t=e.alternate;null!==t&&(e.alternate=null,il(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fo],delete t[ho],delete t[go],delete t[xo],delete t[bo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var dl=null,ul=!1;function pl(e,t,n){for(n=n.child;null!==n;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(ot,n)}catch(s){}switch(n.tag){case 5:qs||Zs(n,t);case 6:var r=dl,o=ul;dl=null,pl(e,t,n),ul=o,null!==(dl=r)&&(ul?(e=dl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):dl.removeChild(n.stateNode));break;case 18:null!==dl&&(ul?(e=dl,n=n.stateNode,8===e.nodeType?lo(e.parentNode,n):1===e.nodeType&&lo(e,n),Ht(e)):lo(dl,n.stateNode));break;case 4:r=dl,o=ul,dl=n.stateNode.containerInfo,ul=!0,pl(e,t,n),dl=r,ul=o;break;case 0:case 11:case 14:case 15:if(!qs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!==(2&i)||0!==(4&i))&&el(n,t,a),o=o.next}while(o!==r)}pl(e,t,n);break;case 1:if(!qs&&(Zs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){jc(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(qs=(r=qs)||null!==n.memoizedState,pl(e,t,n),qs=r):pl(e,t,n);break;default:pl(e,t,n)}}function hl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Qs),t.forEach(function(t){var r=Ec.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:dl=l.stateNode,ul=!1;break e;case 3:case 4:dl=l.stateNode.containerInfo,ul=!0;break e}l=l.return}if(null===dl)throw Error(i(160));fl(a,s,o),dl=null,ul=!1;var c=o.alternate;null!==c&&(c.return=null),o.return=null}catch(d){jc(o,t,d)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),xl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){jc(e,e.return,g)}try{nl(5,e,e.return)}catch(g){jc(e,e.return,g)}}break;case 1:ml(t,e),xl(e),512&r&&null!==n&&Zs(n,n.return);break;case 5:if(ml(t,e),xl(e),512&r&&null!==n&&Zs(n,n.return),32&e.flags){var o=e.stateNode;try{pe(o,"")}catch(g){jc(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===a.type&&null!=a.name&&Q(o,a),ve(l,s);var d=ve(l,a);for(s=0;s<c.length;s+=2){var u=c[s],p=c[s+1];"style"===u?ge(o,p):"dangerouslySetInnerHTML"===u?ue(o,p):"children"===u?pe(o,p):v(o,u,p,d)}switch(l){case"input":J(o,a);break;case"textarea":ie(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(o,!!a.multiple,h,!1):f!==!!a.multiple&&(null!=a.defaultValue?ne(o,!!a.multiple,a.defaultValue,!0):ne(o,!!a.multiple,a.multiple?[]:"",!1))}o[ho]=a}catch(g){jc(e,e.return,g)}}break;case 6:if(ml(t,e),xl(e),4&r){if(null===e.stateNode)throw Error(i(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(g){jc(e,e.return,g)}}break;case 3:if(ml(t,e),xl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ht(t.containerInfo)}catch(g){jc(e,e.return,g)}break;case 4:default:ml(t,e),xl(e);break;case 13:ml(t,e),xl(e),8192&(o=e.child).flags&&(a=null!==o.memoizedState,o.stateNode.isHidden=a,!a||null!==o.alternate&&null!==o.alternate.memoizedState||(_l=Qe())),4&r&&hl(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(qs=(d=qs)||u,ml(t,e),qs=d):ml(t,e),xl(e),8192&r){if(d=null!==e.memoizedState,(e.stateNode.isHidden=d)&&!u&&0!==(1&e.mode))for(Js=e,u=e.child;null!==u;){for(p=Js=u;null!==Js;){switch(h=(f=Js).child,f.tag){case 0:case 11:case 14:case 15:nl(4,f,f.return);break;case 1:Zs(f,f.return);var m=f.stateNode;if("function"===typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){jc(r,n,g)}}break;case 5:Zs(f,f.return);break;case 22:if(null!==f.memoizedState){kl(p);continue}}null!==h?(h.return=f,Js=h):kl(p)}u=u.sibling}e:for(u=null,p=e;;){if(5===p.tag){if(null===u){u=p;try{o=p.stateNode,d?"function"===typeof(a=o.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",s))}catch(g){jc(e,e.return,g)}}}else if(6===p.tag){if(null===u)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(g){jc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ml(t,e),xl(e),4&r&&hl(e);case 21:}}function xl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(al(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(pe(o,""),r.flags&=-33),cl(e,sl(e),o);break;case 3:case 4:var a=r.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(i(161))}}catch(s){jc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bl(e,t,n){Js=e,vl(e,t,n)}function vl(e,t,n){for(var r=0!==(1&e.mode);null!==Js;){var o=Js,i=o.child;if(22===o.tag&&r){var a=null!==o.memoizedState||Xs;if(!a){var s=o.alternate,l=null!==s&&null!==s.memoizedState||qs;s=Xs;var c=qs;if(Xs=a,(qs=l)&&!c)for(Js=o;null!==Js;)l=(a=Js).child,22===a.tag&&null!==a.memoizedState?wl(o):null!==l?(l.return=a,Js=l):wl(o);for(;null!==i;)Js=i,vl(i,t,n),i=i.sibling;Js=o,Xs=s,qs=c}yl(e)}else 0!==(8772&o.subtreeFlags)&&null!==i?(i.return=o,Js=i):yl(e)}}function yl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:qs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!qs)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Wi(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wi(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var d=t.alternate;if(null!==d){var u=d.memoizedState;if(null!==u){var p=u.dehydrated;null!==p&&Ht(p)}}}break;default:throw Error(i(163))}qs||512&t.flags&&ol(t)}catch(f){jc(t,t.return,f)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function kl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){jc(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(l){jc(t,o,l)}}var i=t.return;try{ol(t)}catch(l){jc(t,i,l)}break;case 5:var a=t.return;try{ol(t)}catch(l){jc(t,a,l)}}}catch(l){jc(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var Al,jl=Math.ceil,Fl=y.ReactCurrentDispatcher,Sl=y.ReactCurrentOwner,Cl=y.ReactCurrentBatchConfig,El=0,Dl=null,$l=null,Ml=0,Tl=0,Il=Fo(0),zl=0,Bl=null,Ll=0,Rl=0,Pl=0,Ol=null,Nl=null,_l=0,Hl=1/0,Ul=null,Wl=!1,Vl=null,Gl=null,Kl=!1,Yl=null,Xl=0,ql=0,Ql=null,Jl=-1,Zl=0;function ec(){return 0!==(6&El)?Qe():-1!==Jl?Jl:Jl=Qe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&El)&&0!==Ml?Ml&-Ml:null!==gi.transition?(0===Zl&&(Zl=mt()),Zl):0!==(e=vt)?e:e=void 0===(e=window.event)?16:qt(e.type)}function nc(e,t,n,r){if(50<ql)throw ql=0,Ql=null,Error(i(185));xt(e,n,r),0!==(2&El)&&e===Dl||(e===Dl&&(0===(2&El)&&(Rl|=n),4===zl&&sc(e,Ml)),rc(e,r),1===n&&0===El&&0===(1&t.mode)&&(Hl=Qe()+500,No&&Uo()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-at(i),s=1<<a,l=o[a];-1===l?0!==(s&n)&&0===(s&r)||(o[a]=ft(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}(e,t);var r=pt(e,e===Dl?Ml:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){No=!0,Ho(e)}(lc.bind(null,e)):Ho(lc.bind(null,e)),ao(function(){0===(6&El)&&Uo()}),n=null;else{switch(yt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Dc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Jl=-1,Zl=0,0!==(6&El))throw Error(i(327));var n=e.callbackNode;if(wc()&&e.callbackNode!==n)return null;var r=pt(e,e===Dl?Ml:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var o=El;El|=2;var a=hc();for(Dl===e&&Ml===t||(Ul=null,Hl=Qe()+500,pc(e,t));;)try{bc();break}catch(l){fc(e,l)}Ci(),Fl.current=a,El=o,null!==$l?t=0:(Dl=null,Ml=0,t=zl)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=ic(e,o))),1===t)throw n=Bl,pc(e,0),sc(e,r),rc(e,Qe()),n;if(6===t)sc(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!sr(i(),o))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gc(e,r))&&(0!==(a=ht(e))&&(r=a,t=ic(e,a))),1===t))throw n=Bl,pc(e,0),sc(e,r),rc(e,Qe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:kc(e,Nl,Ul);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=_l+500-Qe())){if(0!==pt(e,0))break;if(((o=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(kc.bind(null,e,Nl,Ul),t);break}kc(e,Nl,Ul);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>o&&(o=s),r&=~a}if(r=o,10<(r=(120>(r=Qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jl(r/1960))-r)){e.timeoutHandle=ro(kc.bind(null,e,Nl,Ul),r);break}kc(e,Nl,Ul);break;default:throw Error(i(329))}}}return rc(e,Qe()),e.callbackNode===n?oc.bind(null,e):null}function ic(e,t){var n=Ol;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Nl,Nl=n,null!==t&&ac(t)),e}function ac(e){null===Nl?Nl=e:Nl.push.apply(Nl,e)}function sc(e,t){for(t&=~Pl,t&=~Rl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&El))throw Error(i(327));wc();var t=pt(e,0);if(0===(1&t))return rc(e,Qe()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ic(e,r))}if(1===n)throw n=Bl,pc(e,0),sc(e,t),rc(e,Qe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kc(e,Nl,Ul),rc(e,Qe()),null}function cc(e,t){var n=El;El|=1;try{return e(t)}finally{0===(El=n)&&(Hl=Qe()+500,No&&Uo())}}function dc(e){null!==Yl&&0===Yl.tag&&0===(6&El)&&wc();var t=El;El|=1;var n=Cl.transition,r=vt;try{if(Cl.transition=null,vt=1,e)return e()}finally{vt=r,Cl.transition=n,0===(6&(El=t))&&Uo()}}function uc(){Tl=Il.current,So(Il)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==$l)for(n=$l.return;null!==n;){var r=n;switch(ni(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&zo();break;case 3:Qi(),So($o),So(Do),ra();break;case 5:Zi(r);break;case 4:Qi();break;case 13:case 19:So(ea);break;case 10:Ei(r.type._context);break;case 22:case 23:uc()}n=n.return}if(Dl=e,$l=e=Ic(e.current,null),Ml=Tl=t,zl=0,Bl=null,Pl=Rl=Ll=0,Nl=Ol=null,null!==Ti){for(t=0;t<Ti.length;t++)if(null!==(r=(n=Ti[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}Ti=null}return e}function fc(e,t){for(;;){var n=$l;try{if(Ci(),oa.current=Ja,da){for(var r=sa.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}da=!1}if(aa=0,ca=la=sa=null,ua=!1,pa=0,Sl.current=null,null===n||null===n.return){zl=1,Bl=t,$l=null;break}e:{var a=e,s=n.return,l=n,c=t;if(t=Ml,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var d=c,u=l,p=u.tag;if(0===(1&u.mode)&&(0===p||11===p||15===p)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=gs(s);if(null!==h){h.flags&=-257,xs(h,s,l,0,t),1&h.mode&&ms(a,d,t),c=d;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ms(a,d,t),mc();break e}c=Error(i(426))}else if(ii&&1&l.mode){var x=gs(s);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xs(x,s,l,0,t),mi(cs(c,l));break e}}a=c=cs(c,l),4!==zl&&(zl=2),null===Ol?Ol=[a]:Ol.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Hi(a,fs(0,c,t));break e;case 1:l=c;var b=a.type,v=a.stateNode;if(0===(128&a.flags)&&("function"===typeof b.getDerivedStateFromError||null!==v&&"function"===typeof v.componentDidCatch&&(null===Gl||!Gl.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t,Hi(a,hs(a,l,t));break e}}a=a.return}while(null!==a)}yc(n)}catch(y){t=y,$l===n&&null!==n&&($l=n=n.return);continue}break}}function hc(){var e=Fl.current;return Fl.current=Ja,null===e?Ja:e}function mc(){0!==zl&&3!==zl&&2!==zl||(zl=4),null===Dl||0===(268435455&Ll)&&0===(268435455&Rl)||sc(Dl,Ml)}function gc(e,t){var n=El;El|=2;var r=hc();for(Dl===e&&Ml===t||(Ul=null,pc(e,t));;)try{xc();break}catch(o){fc(e,o)}if(Ci(),El=n,Fl.current=r,null!==$l)throw Error(i(261));return Dl=null,Ml=0,zl}function xc(){for(;null!==$l;)vc($l)}function bc(){for(;null!==$l&&!Xe();)vc($l)}function vc(e){var t=Al(e.alternate,e,Tl);e.memoizedProps=e.pendingProps,null===t?yc(e):$l=t,Sl.current=null}function yc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ks(n,t,Tl)))return void($l=n)}else{if(null!==(n=Ys(n,t)))return n.flags&=32767,void($l=n);if(null===e)return zl=6,void($l=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void($l=t);$l=t=e}while(null!==t);0===zl&&(zl=5)}function kc(e,t,n){var r=vt,o=Cl.transition;try{Cl.transition=null,vt=1,function(e,t,n,r){do{wc()}while(null!==Yl);if(0!==(6&El))throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,a),e===Dl&&($l=Dl=null,Ml=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Kl||(Kl=!0,Dc(tt,function(){return wc(),null})),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Cl.transition,Cl.transition=null;var s=vt;vt=1;var l=El;El|=4,Sl.current=null,function(e,t){if(eo=Wt,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(k){n=null;break e}var s=0,l=-1,c=-1,d=0,u=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==o&&3!==p.nodeType||(l=s+o),p!==a||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++d===o&&(l=s),f===a&&++u===r&&(c=s),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},Wt=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,x=m.memoizedState,b=t.stateNode,v=b.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),x);b.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=t.stateNode.containerInfo;1===y.nodeType?y.textContent="":9===y.nodeType&&y.documentElement&&y.removeChild(y.documentElement);break;default:throw Error(i(163))}}catch(k){jc(t,t.return,k)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}m=tl,tl=!1}(e,n),gl(n,e),hr(to),Wt=!!eo,to=eo=null,e.current=n,bl(n,e,o),qe(),El=l,vt=s,Cl.transition=a}else e.current=n;if(Kl&&(Kl=!1,Yl=e,Xl=o),a=e.pendingLanes,0===a&&(Gl=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Wl)throw Wl=!1,e=Vl,Vl=null,e;0!==(1&Xl)&&0!==e.tag&&wc(),a=e.pendingLanes,0!==(1&a)?e===Ql?ql++:(ql=0,Ql=e):ql=0,Uo()}(e,t,n,r)}finally{Cl.transition=o,vt=r}return null}function wc(){if(null!==Yl){var e=yt(Xl),t=Cl.transition,n=vt;try{if(Cl.transition=null,vt=16>e?16:e,null===Yl)var r=!1;else{if(e=Yl,Yl=null,Xl=0,0!==(6&El))throw Error(i(331));var o=El;for(El|=4,Js=e.current;null!==Js;){var a=Js,s=a.child;if(0!==(16&Js.flags)){var l=a.deletions;if(null!==l){for(var c=0;c<l.length;c++){var d=l[c];for(Js=d;null!==Js;){var u=Js;switch(u.tag){case 0:case 11:case 15:nl(8,u,a)}var p=u.child;if(null!==p)p.return=u,Js=p;else for(;null!==Js;){var f=(u=Js).sibling,h=u.return;if(il(u),u===d){Js=null;break}if(null!==f){f.return=h,Js=f;break}Js=h}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Js=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Js=s;else e:for(;null!==Js;){if(0!==(2048&(a=Js).flags))switch(a.tag){case 0:case 11:case 15:nl(9,a,a.return)}var b=a.sibling;if(null!==b){b.return=a.return,Js=b;break e}Js=a.return}}var v=e.current;for(Js=v;null!==Js;){var y=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==y)y.return=s,Js=y;else e:for(s=v;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(w){jc(l,l.return,w)}if(l===s){Js=null;break e}var k=l.sibling;if(null!==k){k.return=l.return,Js=k;break e}Js=l.return}}if(El=o,Uo(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(ot,e)}catch(w){}r=!0}return r}finally{vt=n,Cl.transition=t}}return!1}function Ac(e,t,n){e=Ni(e,t=fs(0,t=cs(n,t),1),1),t=ec(),null!==e&&(xt(e,1,t),rc(e,t))}function jc(e,t,n){if(3===e.tag)Ac(e,e,n);else for(;null!==t;){if(3===t.tag){Ac(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Gl||!Gl.has(r))){t=Ni(t,e=hs(t,e=cs(n,e),1),1),e=ec(),null!==t&&(xt(t,1,e),rc(t,e));break}}t=t.return}}function Fc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Dl===e&&(Ml&n)===n&&(4===zl||3===zl&&(130023424&Ml)===Ml&&500>Qe()-_l?pc(e,0):Pl|=n),rc(e,t)}function Sc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=dt,0===(130023424&(dt<<=1))&&(dt=4194304)));var n=ec();null!==(e=Bi(e,t))&&(xt(e,t,n),rc(e,n))}function Cc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Sc(e,n)}function Ec(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),Sc(e,n)}function Dc(e,t){return Ke(e,t)}function $c(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mc(e,t,n,r){return new $c(e,t,n,r)}function Tc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ic(e,t){var n=e.alternate;return null===n?((n=Mc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zc(e,t,n,r,o,a){var s=2;if(r=e,"function"===typeof e)Tc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case A:return Bc(n.children,o,a,t);case j:s=8,o|=8;break;case F:return(e=Mc(12,n,t,2|o)).elementType=F,e.lanes=a,e;case D:return(e=Mc(13,n,t,o)).elementType=D,e.lanes=a,e;case $:return(e=Mc(19,n,t,o)).elementType=$,e.lanes=a,e;case I:return Lc(n,o,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case S:s=10;break e;case C:s=9;break e;case E:s=11;break e;case M:s=14;break e;case T:s=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Mc(s,n,t,o)).elementType=e,t.type=r,t.lanes=a,t}function Bc(e,t,n,r){return(e=Mc(7,e,r,t)).lanes=n,e}function Lc(e,t,n,r){return(e=Mc(22,e,r,t)).elementType=I,e.lanes=n,e.stateNode={isHidden:!1},e}function Rc(e,t,n){return(e=Mc(6,e,null,t)).lanes=n,e}function Pc(e,t,n){return(t=Mc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Oc(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Nc(e,t,n,r,o,i,a,s,l){return e=new Oc(e,t,n,s,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Mc(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ri(i),e}function _c(e){if(!e)return Eo;e:{if(He(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Io(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Io(n))return Lo(e,n,t)}return t}function Hc(e,t,n,r,o,i,a,s,l){return(e=Nc(n,r,!0,e,0,i,0,s,l)).context=_c(null),n=e.current,(i=Oi(r=ec(),o=tc(n))).callback=void 0!==t&&null!==t?t:null,Ni(n,i,o),e.current.lanes=o,xt(e,o,r),rc(e,r),e}function Uc(e,t,n,r){var o=t.current,i=ec(),a=tc(o);return n=_c(n),null===t.context?t.context=n:t.pendingContext=n,(t=Oi(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ni(o,t,a))&&(nc(e,o,a,i),_i(e,o,a)),a}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Gc(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}Al=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||$o.current)vs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return vs=!1,function(e,t,n){switch(t.tag){case 3:Ds(t),hi();break;case 5:Ji(t);break;case 1:Io(t.type)&&Ro(t);break;case 4:qi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Co(Ai,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Co(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Rs(e,t,n):(Co(ea,1&ea.current),null!==(e=Ws(e,t,n))?e.sibling:null);Co(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Hs(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),Co(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,js(e,t,n)}return Ws(e,t,n)}(e,t,n);vs=0!==(131072&e.flags)}else vs=!1,ii&&0!==(1048576&t.flags)&&ei(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Us(e,t),e=t.pendingProps;var o=To(t,Do.current);$i(t,n),o=ga(null,t,r,e,o,n);var a=xa();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Io(r)?(a=!0,Ro(t)):a=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Ri(t),o.updater=os,t.stateNode=o,o._reactInternals=t,ls(t,r,e,n),t=Es(null,t,r,!0,a,n)):(t.tag=0,ii&&a&&ti(t),ys(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Us(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return Tc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===E)return 11;if(e===M)return 14}return 2}(r),e=ns(r,e),o){case 0:t=Ss(null,t,r,e,n);break e;case 1:t=Cs(null,t,r,e,n);break e;case 11:t=ks(null,t,r,e,n);break e;case 14:t=ws(null,t,r,ns(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,Ss(e,t,r,o=t.elementType===r?o:ns(r,o),n);case 1:return r=t.type,o=t.pendingProps,Cs(e,t,r,o=t.elementType===r?o:ns(r,o),n);case 3:e:{if(Ds(t),null===e)throw Error(i(387));r=t.pendingProps,o=(a=t.memoizedState).element,Pi(e,t),Ui(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=$s(e,t,r,n,o=cs(Error(i(423)),t));break e}if(r!==o){t=$s(e,t,r,n,o=cs(Error(i(424)),t));break e}for(oi=co(t.stateNode.containerInfo.firstChild),ri=t,ii=!0,ai=null,n=wi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(hi(),r===o){t=Ws(e,t,n);break e}ys(e,t,r,n)}t=t.child}return t;case 5:return Ji(t),null===e&&di(t),r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,s=o.children,no(r,o)?s=null:null!==a&&no(r,a)&&(t.flags|=32),Fs(e,t),ys(e,t,s,n),t.child;case 6:return null===e&&di(t),null;case 13:return Rs(e,t,n);case 4:return qi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ki(t,null,r,n):ys(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,ks(e,t,r,o=t.elementType===r?o:ns(r,o),n);case 7:return ys(e,t,t.pendingProps,n),t.child;case 8:case 12:return ys(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,Co(Ai,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===o.children&&!$o.current){t=Ws(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===a.tag){(c=Oi(-1,n&-n)).tag=2;var d=a.updateQueue;if(null!==d){var u=(d=d.shared).pending;null===u?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}a.lanes|=n,null!==(c=a.alternate)&&(c.lanes|=n),Di(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(i(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Di(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}ys(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,$i(t,n),r=r(o=Mi(o)),t.flags|=1,ys(e,t,r,n),t.child;case 14:return o=ns(r=t.type,t.pendingProps),ws(e,t,r,o=ns(r.type,o),n);case 15:return As(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ns(r,o),Us(e,t),t.tag=1,Io(r)?(e=!0,Ro(t)):e=!1,$i(t,n),as(t,r,o),ls(t,r,o,n),Es(null,t,r,!0,e,n);case 19:return Hs(e,t,n);case 22:return js(e,t,n)}throw Error(i(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}function Xc(e){this._internalRoot=e}function qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"===typeof o){var s=o;o=function(){var e=Wc(a);s.call(e)}}Uc(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"===typeof r){var i=r;r=function(){var e=Wc(a);i.call(e)}}var a=Hc(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=a,e[mo]=a.current,Hr(8===e.nodeType?e.parentNode:e),dc(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var s=r;r=function(){var e=Wc(l);s.call(e)}}var l=Nc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=l,e[mo]=l.current,Hr(8===e.nodeType?e.parentNode:e),dc(function(){Uc(t,l,n,r)}),l}(n,t,e,o,r);return Wc(a)}Xc.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Uc(e,t,null,null)},Xc.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;dc(function(){Uc(null,e,null,null)}),t[mo]=null}},Xc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&0!==t&&t<It[n].priority;n++);It.splice(n,0,e),0===n&&Rt(e)}},kt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ut(t.pendingLanes);0!==n&&(bt(t,1|n),rc(t,Qe()),0===(6&El)&&(Hl=Qe()+500,Uo()))}break;case 13:dc(function(){var t=Bi(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}}),Gc(e,1)}},wt=function(e){if(13===e.tag){var t=Bi(e,134217728);if(null!==t)nc(t,e,134217728,ec());Gc(e,134217728)}},At=function(e){if(13===e.tag){var t=tc(e),n=Bi(e,t);if(null!==n)nc(n,e,t,ec());Gc(e,t)}},jt=function(){return vt},Ft=function(e,t){var n=vt;try{return vt=e,t()}finally{vt=n}},we=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=wo(r);if(!o)throw Error(i(90));K(r),J(r,o)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Ee=cc,De=dc;var ed={usingClientEntryPoint:!1,Events:[yo,ko,wo,Se,Ce,cc]},td={findFiberByHostInstance:vo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nd={bundleType:td.bundleType,version:td.version,rendererPackageName:td.rendererPackageName,rendererConfig:td.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:td.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rd.isDisabled&&rd.supportsFiber)try{ot=rd.inject(nd),it=rd}catch(de){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ed,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qc(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:w,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!qc(e))throw Error(i(299));var n=!1,r="",o=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Nc(e,1,!1,null,0,n,0,r,o),e[mo]=t.current,Hr(8===e.nodeType?e.parentNode:e),new Yc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return dc(e)},t.hydrate=function(e,t,n){if(!Qc(t))throw Error(i(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!qc(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,o=!1,a="",s=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Hc(t,null,e,1,null!=n?n:null,o,0,a,s),e[mo]=t.current,Hr(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Xc(t)},t.render=function(e,t,n){if(!Qc(t))throw Error(i(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(i(40));return!!e._reactRootContainer&&(dc(function(){Zc(null,null,e,!1,function(){e._reactRootContainer=null,e[mo]=null})}),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qc(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},2826:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12m8 5h2v-2h-2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64zm-10 9h2V7h-2z"}),"SyncProblemOutlined")},3102:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"Warning")},3382:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l,getFunctionName:()=>i});var r=n(528);const o=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function i(e){const t=`${e}`.match(o);return t&&t[1]||""}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.displayName||e.name||i(e)||t}function s(e,t,n){const r=a(t);return e.displayName||(""!==r?`${n}(${r})`:n)}function l(e){if(null!=e){if("string"===typeof e)return e;if("function"===typeof e)return a(e,"Component");if("object"===typeof e)switch(e.$$typeof){case r.vM:return s(e,e.render,"ForwardRef");case r.lD:return s(e,e.type,"memo");default:return}}}},3763:(e,t,n)=>{"use strict";e.exports=n(4983)},3815:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(9172);const o=function(e,t){return t?(0,r.A)(e,t,{clone:!1}):e}},4055:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz")},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=x.prototype;var y=v.prototype=new b;y.constructor=v,m(y,x.prototype),y.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,A={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function F(e,t,r){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,o)&&!j.hasOwnProperty(o)&&(i[o]=t[o]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:n,type:e,key:a,ref:s,props:i,_owner:A.current}}function S(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function E(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function D(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===i?"."+E(l,0):i,k(a)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),D(a,t,o,"",function(e){return e})):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(l=0,i=""===i?".":i+":",k(e))for(var c=0;c<e.length;c++){var d=i+E(s=e[c],c);l+=D(s,t,o,d,a)}else if(d=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof d)for(e=d.call(e),c=0;!(s=e.next()).done;)l+=D(s=s.value,t,o,d=i+E(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function $(e,t,n){if(null==e)return e;var r=[],o=0;return D(e,r,"","",function(e){return t.call(n,e,o++)}),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},z={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:A};function B(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:$,forEach:function(e,t,n){$(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $(e,function(){t++}),t},toArray:function(e){return $(e,function(e){return e})||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=o,t.Profiler=a,t.PureComponent=v,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.act=B,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=A.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)w.call(t,c)&&!j.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=F,t.createFactory=function(e){var t=F.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=B,t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.3.1"},4391:(e,t,n)=>{"use strict";var r=n(7950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},4536:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown")},4634:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4802:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},4853:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(8587),o=n(8168);const i=["values","unit","step"],a=e=>{const t=Object.keys(e).map(t=>({key:t,val:e[t]}))||[];return t.sort((e,t)=>e.val-t.val),t.reduce((e,t)=>(0,o.A)({},e,{[t.key]:t.val}),{})};function s(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:s=5}=e,l=(0,r.A)(e,i),c=a(t),d=Object.keys(c);function u(e){return`@media (min-width:${"number"===typeof t[e]?t[e]:e}${n})`}function p(e){return`@media (max-width:${("number"===typeof t[e]?t[e]:e)-s/100}${n})`}function f(e,r){const o=d.indexOf(r);return`@media (min-width:${"number"===typeof t[e]?t[e]:e}${n}) and (max-width:${(-1!==o&&"number"===typeof t[d[o]]?t[d[o]]:r)-s/100}${n})`}return(0,o.A)({keys:d,values:c,up:u,down:p,between:f,only:function(e){return d.indexOf(e)+1<d.length?f(e,d[d.indexOf(e)+1]):u(e)},not:function(e){const t=d.indexOf(e);return 0===t?u(d[1]):t===d.length-1?p(d[t]):f(e,d[d.indexOf(e)+1]).replace("@media","@media not all and")},unit:n},l)}},4893:e=>{e.exports=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n},e.exports.__esModule=!0,e.exports.default=e.exports},4914:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy")},4977:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{fillRule:"evenodd",d:"M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3"}),"PushPin")},4983:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,x=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,y=n?Symbol.for("react.scope"):60119;function k(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case d:case u:case i:case s:case a:case f:return e;default:switch(e=e&&e.$$typeof){case c:case p:case g:case m:case l:return e;default:return t}}case o:return t}}}function w(e){return k(e)===u}t.AsyncMode=d,t.ConcurrentMode=u,t.ContextConsumer=c,t.ContextProvider=l,t.Element=r,t.ForwardRef=p,t.Fragment=i,t.Lazy=g,t.Memo=m,t.Portal=o,t.Profiler=s,t.StrictMode=a,t.Suspense=f,t.isAsyncMode=function(e){return w(e)||k(e)===d},t.isConcurrentMode=w,t.isContextConsumer=function(e){return k(e)===c},t.isContextProvider=function(e){return k(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return k(e)===p},t.isFragment=function(e){return k(e)===i},t.isLazy=function(e){return k(e)===g},t.isMemo=function(e){return k(e)===m},t.isPortal=function(e){return k(e)===o},t.isProfiler=function(e){return k(e)===s},t.isStrictMode=function(e){return k(e)===a},t.isSuspense=function(e){return k(e)===f},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===u||e===s||e===a||e===f||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===x)},t.typeOf=k},4989:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A,private_createBreakpoints:()=>o.A,unstable_applyStyles:()=>i.A});var r=n(8280),o=n(4853),i=n(9703)},4994:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},5382:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check")},5465:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"}),"HelpOutline")},5473:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess")},5502:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"}),"Cancel")},5874:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2m4 0v12h4V3z"}),"ThumbDown")},5896:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft")},6360:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},6485:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew")},6502:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward")},7052:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2m0 12-4.34 4.34L12 14H3v-2l3-7h9zm4-12h4v12h-4z"}),"ThumbDownOutlined")},7162:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>s,BO:()=>a,Yn:()=>i});var r=n(7598),o=n(9751);function i(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!t||"string"!==typeof t)return null;if(e&&e.vars&&n){const n=`vars.${t}`.split(".").reduce((e,t)=>e&&e[t]?e[t]:null,e);if(null!=n)return n}return t.split(".").reduce((e,t)=>e&&null!=e[t]?e[t]:null,e)}function a(e,t,n){let r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;return r="function"===typeof e?e(n):Array.isArray(e)?e[n]||o:i(e,n)||o,t&&(r=t(r,o,e)),r}const s=function(e){const{prop:t,cssProperty:n=e.prop,themeKey:s,transform:l}=e,c=e=>{if(null==e[t])return null;const c=e[t],d=i(e.theme,s)||{};return(0,o.NI)(e,c,e=>{let o=a(d,l,e);return e===o&&"string"===typeof e&&(o=a(d,l,`${t}${"default"===e?"":(0,r.A)(e)}`,e)),!1===n?o:{[n]:o}})};return c.propTypes={},c.filterProps=[t],c}},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,d=e[c];if(0>i(l,n))c<o&&0>i(d,l)?(e[r]=d,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<o&&0>i(d,n)))break e;e[r]=d,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],d=[],u=1,p=null,f=3,h=!1,m=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function y(e){for(var t=r(d);null!==t;){if(null===t.callback)o(d);else{if(!(t.startTime<=e))break;o(d),t.sortIndex=t.expirationTime,n(c,t)}t=r(d)}}function k(e){if(g=!1,y(e),!m)if(null!==r(c))m=!0,I(w);else{var t=r(d);null!==t&&z(k,t.startTime-e)}}function w(e,n){m=!1,g&&(g=!1,b(S),S=-1),h=!0;var i=f;try{for(y(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!D());){var a=p.callback;if("function"===typeof a){p.callback=null,f=p.priorityLevel;var s=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(c)&&o(c),y(n)}else o(c);p=r(c)}if(null!==p)var l=!0;else{var u=r(d);null!==u&&z(k,u.startTime-n),l=!1}return l}finally{p=null,f=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var A,j=!1,F=null,S=-1,C=5,E=-1;function D(){return!(t.unstable_now()-E<C)}function $(){if(null!==F){var e=t.unstable_now();E=e;var n=!0;try{n=F(!0,e)}finally{n?A():(j=!1,F=null)}}else j=!1}if("function"===typeof v)A=function(){v($)};else if("undefined"!==typeof MessageChannel){var M=new MessageChannel,T=M.port2;M.port1.onmessage=$,A=function(){T.postMessage(null)}}else A=function(){x($,0)};function I(e){F=e,j||(j=!0,A())}function z(e,n){S=x(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,I(w))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:u++,callback:o,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>a?(e.sortIndex=i,n(d,e),null===r(c)&&e===r(d)&&(g?(b(S),S=-1):g=!0,z(k,i-a))):(e.sortIndex=s,n(c,e),m||h||(m=!0,I(w))),e},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},7235:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4zm3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1"}),"PushPinOutlined")},7266:(e,t,n)=>{"use strict";var r=n(4994);t.e$=h,t.eM=function(e,t){const n=p(e),r=p(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)},t.a=m;var o=r(n(457)),i=r(n(9214));function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,i.default)(e,t,n)}function s(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&1===n[0].length&&(n=n.map(e=>e+e)),n?`rgb${4===n.length?"a":""}(${n.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}function l(e){if(e.type)return e;if("#"===e.charAt(0))return l(s(e));const t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(n))throw new Error((0,o.default)(9,e));let r,i=e.substring(t+1,e.length-1);if("color"===n){if(i=i.split(" "),r=i.shift(),4===i.length&&"/"===i[3].charAt(0)&&(i[3]=i[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(r))throw new Error((0,o.default)(10,r))}else i=i.split(",");return i=i.map(e=>parseFloat(e)),{type:n,values:i,colorSpace:r}}const c=e=>{const t=l(e);return t.values.slice(0,3).map((e,n)=>-1!==t.type.indexOf("hsl")&&0!==n?`${e}%`:e).join(" ")};function d(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return-1!==t.indexOf("rgb")?r=r.map((e,t)=>t<3?parseInt(e,10):e):-1!==t.indexOf("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),r=-1!==t.indexOf("color")?`${n} ${r.join(" ")}`:`${r.join(", ")}`,`${t}(${r})`}function u(e){e=l(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+n/30)%12;return o-i*Math.max(Math.min(t-3,9-t,1),-1)};let s="rgb";const c=[Math.round(255*a(0)),Math.round(255*a(8)),Math.round(255*a(4))];return"hsla"===e.type&&(s+="a",c.push(t[3])),d({type:s,values:c})}function p(e){let t="hsl"===(e=l(e)).type||"hsla"===e.type?l(u(e)).values:e.values;return t=t.map(t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function f(e,t){return e=l(e),t=a(t),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,d(e)}function h(e,t){if(e=l(e),t=a(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return d(e)}function m(e,t){if(e=l(e),t=a(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return d(e)}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15;return p(e)>.5?h(e,t):m(e,t)}},7324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!s(c))return!1;var d=e[c],u=t[c];if(!1===(o=n?n.call(r,d,u,c):void 0)||void 0===o&&d!==u)return!1}return!0}},7412:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star")},7598:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(7868);function o(e){if("string"!==typeof e)throw new Error((0,r.A)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},7749:(e,t,n)=>{"use strict";n.r(t),n.d(t,{capitalize:()=>i,createChainedFunction:()=>a,createSvgIcon:()=>de,debounce:()=>ue,deprecatedPropType:()=>pe,isMuiElement:()=>fe,ownerDocument:()=>me,ownerWindow:()=>ge,requirePropFactory:()=>xe,setRef:()=>ve,unstable_ClassNameGenerator:()=>Oe,unstable_useEnhancedEffect:()=>ke,unstable_useId:()=>je,unsupportedProp:()=>Fe,useControlled:()=>Se,useEventCallback:()=>Ce,useForkRef:()=>Ee,useIsFocusVisible:()=>Pe});const r=e=>e,o=(()=>{let e=r;return{configure(t){e=t},generate:t=>e(t),reset(){e=r}}})();const i=n(7598).A;const a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((e,t)=>null==t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)},()=>{})};var s=n(8168),l=n(5043),c=n.t(l,2),d=n(8587);function u(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=u(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const p=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=u(e))&&(r&&(r+=" "),r+=t);return r};function f(e,t){const n=(0,s.A)({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=(0,s.A)({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},i&&Object.keys(i)?o&&Object.keys(o)?(n[r]=(0,s.A)({},i),Object.keys(o).forEach(e=>{n[r][e]=f(o[e],i[e])})):n[r]=i:n[r]=o}else void 0===n[r]&&(n[r]=e[r])}),n}var h=n(579);const m=l.createContext(void 0);function g(e){let{props:t,name:n}=e;return function(e){const{theme:t,name:n,props:r}=e;if(!t||!t.components||!t.components[n])return r;const o=t.components[n];return o.defaultProps?f(o.defaultProps,r):o.styleOverrides||o.variants?r:f(o,r)}({props:t,name:n,theme:{components:l.useContext(m)}})}var x=n(8052),b=n(7868),v=n(9172),y=n(7758),k=n(8812),w=n(8280);var A=n(7266);const j={black:"#000",white:"#fff"},F={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},S={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},C={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},E={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},D={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},$={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},M={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},T=["mode","contrastThreshold","tonalOffset"],I={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:j.white,default:j.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},z={text:{primary:j.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:j.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function B(e,t,n,r){const o=r.light||r,i=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=(0,A.a)(e.main,o):"dark"===t&&(e.dark=(0,A.e$)(e.main,i)))}function L(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=(0,d.A)(e,T),i=e.primary||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:D[200],light:D[50],dark:D[400]}:{main:D[700],light:D[400],dark:D[800]}}(t),a=e.secondary||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:S[200],light:S[50],dark:S[400]}:{main:S[500],light:S[300],dark:S[700]}}(t),l=e.error||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:C[500],light:C[300],dark:C[700]}:{main:C[700],light:C[400],dark:C[800]}}(t),c=e.info||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:$[400],light:$[300],dark:$[700]}:{main:$[700],light:$[500],dark:$[900]}}(t),u=e.success||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:M[400],light:M[300],dark:M[700]}:{main:M[800],light:M[500],dark:M[900]}}(t),p=e.warning||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:E[400],light:E[300],dark:E[700]}:{main:"#ed6c02",light:E[500],dark:E[900]}}(t);function f(e){return(0,A.eM)(e,z.text.primary)>=n?z.text.primary:I.text.primary}const h=e=>{let{color:t,name:n,mainShade:o=500,lightShade:i=300,darkShade:a=700}=e;if(t=(0,s.A)({},t),!t.main&&t[o]&&(t.main=t[o]),!t.hasOwnProperty("main"))throw new Error((0,b.A)(11,n?` (${n})`:"",o));if("string"!==typeof t.main)throw new Error((0,b.A)(12,n?` (${n})`:"",JSON.stringify(t.main)));return B(t,"light",i,r),B(t,"dark",a,r),t.contrastText||(t.contrastText=f(t.main)),t},m={dark:z,light:I};return(0,v.A)((0,s.A)({common:(0,s.A)({},j),mode:t,primary:h({color:i,name:"primary"}),secondary:h({color:a,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:h({color:l,name:"error"}),warning:h({color:p,name:"warning"}),info:h({color:c,name:"info"}),success:h({color:u,name:"success"}),grey:F,contrastThreshold:n,getContrastText:f,augmentColor:h,tonalOffset:r},m[t]),o)}const R=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];const P={textTransform:"uppercase"},O='"Roboto", "Helvetica", "Arial", sans-serif';function N(e,t){const n="function"===typeof t?t(e):t,{fontFamily:r=O,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:a=400,fontWeightMedium:l=500,fontWeightBold:c=700,htmlFontSize:u=16,allVariants:p,pxToRem:f}=n,h=(0,d.A)(n,R);const m=o/14,g=f||(e=>e/u*m+"rem"),x=(e,t,n,o,i)=>{return(0,s.A)({fontFamily:r,fontWeight:e,fontSize:g(t),lineHeight:n},r===O?{letterSpacing:(a=o/t,Math.round(1e5*a)/1e5)+"em"}:{},i,p);var a},b={h1:x(i,96,1.167,-1.5),h2:x(i,60,1.2,-.5),h3:x(a,48,1.167,0),h4:x(a,34,1.235,.25),h5:x(a,24,1.334,0),h6:x(l,20,1.6,.15),subtitle1:x(a,16,1.75,.15),subtitle2:x(l,14,1.57,.1),body1:x(a,16,1.5,.15),body2:x(a,14,1.43,.15),button:x(l,14,1.75,.4,P),caption:x(a,12,1.66,.4),overline:x(a,12,2.66,1,P),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return(0,v.A)((0,s.A)({htmlFontSize:u,pxToRem:g,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:a,fontWeightMedium:l,fontWeightBold:c},b),h,{clone:!1})}function _(){return[`${arguments.length<=0?void 0:arguments[0]}px ${arguments.length<=1?void 0:arguments[1]}px ${arguments.length<=2?void 0:arguments[2]}px ${arguments.length<=3?void 0:arguments[3]}px rgba(0,0,0,0.2)`,`${arguments.length<=4?void 0:arguments[4]}px ${arguments.length<=5?void 0:arguments[5]}px ${arguments.length<=6?void 0:arguments[6]}px ${arguments.length<=7?void 0:arguments[7]}px rgba(0,0,0,0.14)`,`${arguments.length<=8?void 0:arguments[8]}px ${arguments.length<=9?void 0:arguments[9]}px ${arguments.length<=10?void 0:arguments[10]}px ${arguments.length<=11?void 0:arguments[11]}px rgba(0,0,0,0.12)`].join(",")}const H=["none",_(0,2,1,-1,0,1,1,0,0,1,3,0),_(0,3,1,-2,0,2,2,0,0,1,5,0),_(0,3,3,-2,0,3,4,0,0,1,8,0),_(0,2,4,-1,0,4,5,0,0,1,10,0),_(0,3,5,-1,0,5,8,0,0,1,14,0),_(0,3,5,-1,0,6,10,0,0,1,18,0),_(0,4,5,-2,0,7,10,1,0,2,16,1),_(0,5,5,-3,0,8,10,1,0,3,14,2),_(0,5,6,-3,0,9,12,1,0,3,16,2),_(0,6,6,-3,0,10,14,1,0,4,18,3),_(0,6,7,-4,0,11,15,1,0,4,20,3),_(0,7,8,-4,0,12,17,2,0,5,22,4),_(0,7,8,-4,0,13,19,2,0,5,24,4),_(0,7,9,-4,0,14,21,2,0,5,26,4),_(0,8,9,-5,0,15,22,2,0,6,28,5),_(0,8,10,-5,0,16,24,2,0,6,30,5),_(0,8,11,-5,0,17,26,2,0,6,32,5),_(0,9,11,-5,0,18,28,2,0,7,34,6),_(0,9,12,-6,0,19,29,2,0,7,36,6),_(0,10,13,-6,0,20,31,3,0,8,38,7),_(0,10,13,-6,0,21,33,3,0,8,40,7),_(0,10,14,-6,0,22,35,3,0,8,42,7),_(0,11,14,-7,0,23,36,3,0,9,44,8),_(0,11,15,-7,0,24,38,3,0,9,46,8)],U=["duration","easing","delay"],W={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},V={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function G(e){return`${Math.round(e)}ms`}function K(e){if(!e)return 0;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}function Y(e){const t=(0,s.A)({},W,e.easing),n=(0,s.A)({},V,e.duration);return(0,s.A)({getAutoHeightDuration:K,create:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{duration:o=n.standard,easing:i=t.easeInOut,delay:a=0}=r;(0,d.A)(r,U);return(Array.isArray(e)?e:[e]).map(e=>`${e} ${"string"===typeof o?o:G(o)} ${i} ${"string"===typeof a?a:G(a)}`).join(",")}},e,{easing:t,duration:n})}const X={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},q=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{mixins:t={},palette:n={},transitions:r={},typography:o={}}=e,i=(0,d.A)(e,q);if(e.vars&&void 0===e.generateCssVars)throw new Error((0,b.A)(18));const a=L(n),l=(0,w.A)(e);let c=(0,v.A)(l,{mixins:(u=l.breakpoints,p=t,(0,s.A)({toolbar:{minHeight:56,[u.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[u.up("sm")]:{minHeight:64}}},p)),palette:a,shadows:H.slice(),typography:N(a,o),transitions:Y(r),zIndex:(0,s.A)({},X)});var u,p;c=(0,v.A)(c,i);for(var f=arguments.length,h=new Array(f>1?f-1:0),m=1;m<f;m++)h[m-1]=arguments[m];return c=h.reduce((e,t)=>(0,v.A)(e,t),c),c.unstable_sxConfig=(0,s.A)({},y.A,null==i?void 0:i.unstable_sxConfig),c.unstable_sx=function(e){return(0,k.A)({sx:e,theme:this})},c}const J=Q();const Z=function(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e},ee=e=>Z(e)&&"classes"!==e,te=(0,x.Ay)({themeId:"$$material",defaultTheme:J,rootShouldForwardProp:ee}),ne={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function re(e,t){const n=ne[t];return n?`${arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui"}-${n}`:`${o.generate(e)}-${t}`}function oe(e){return re("MuiSvgIcon",e)}!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui";const r={};t.forEach(t=>{r[t]=re(e,t,n)})}("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const ie=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],ae=e=>{const{color:t,fontSize:n,classes:r}=e;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((e,r)=>{if(r){const o=t(r);""!==o&&e.push(o),n&&n[r]&&e.push(n[r])}return e},[]).join(" ")}),r}({root:["root","inherit"!==t&&`color${i(t)}`,`fontSize${i(n)}`]},oe,r)},se=te("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${i(n.color)}`],t[`fontSize${i(n.fontSize)}`]]}})(e=>{let{theme:t,ownerState:n}=e;var r,o,i,a,s,l,c,d,u,p,f,h,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:n.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(r=t.transitions)||null==(o=r.create)?void 0:o.call(r,"fill",{duration:null==(i=t.transitions)||null==(i=i.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(a=t.typography)||null==(s=a.pxToRem)?void 0:s.call(a,20))||"1.25rem",medium:(null==(l=t.typography)||null==(c=l.pxToRem)?void 0:c.call(l,24))||"1.5rem",large:(null==(d=t.typography)||null==(u=d.pxToRem)?void 0:u.call(d,35))||"2.1875rem"}[n.fontSize],color:null!=(p=null==(f=(t.vars||t).palette)||null==(f=f[n.color])?void 0:f.main)?p:{action:null==(h=(t.vars||t).palette)||null==(h=h.action)?void 0:h.active,disabled:null==(m=(t.vars||t).palette)||null==(m=m.action)?void 0:m.disabled,inherit:void 0}[n.color]}}),le=l.forwardRef(function(e,t){const n=g({props:e,name:"MuiSvgIcon"});const{children:r,className:o,color:i="inherit",component:a="svg",fontSize:c="medium",htmlColor:u,inheritViewBox:f=!1,titleAccess:m,viewBox:x="0 0 24 24"}=n,b=(0,d.A)(n,ie),v=l.isValidElement(r)&&"svg"===r.type,y=(0,s.A)({},n,{color:i,component:a,fontSize:c,instanceFontSize:e.fontSize,inheritViewBox:f,viewBox:x,hasSvgAsChild:v}),k={};f||(k.viewBox=x);const w=ae(y);return(0,h.jsxs)(se,(0,s.A)({as:a,className:p(w.root,o),focusable:"false",color:u,"aria-hidden":!m||void 0,role:m?"img":void 0,ref:t},k,b,v&&r.props,{ownerState:y,children:[v?r.props.children:r,m?(0,h.jsx)("title",{children:m}):null]}))});le.muiName="SvgIcon";const ce=le;function de(e,t){function n(n,r){return(0,h.jsx)(ce,(0,s.A)({"data-testid":`${t}Icon`,ref:r},n,{children:e}))}return n.muiName=ce.muiName,l.memo(l.forwardRef(n))}const ue=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];clearTimeout(t),t=setTimeout(()=>{e.apply(this,o)},n)}return r.clear=()=>{clearTimeout(t)},r};const pe=function(e,t){return()=>null};const fe=function(e,t){var n,r;return l.isValidElement(e)&&-1!==t.indexOf(null!=(n=e.type.muiName)?n:null==(r=e.type)||null==(r=r._payload)||null==(r=r.value)?void 0:r.muiName)};function he(e){return e&&e.ownerDocument||document}const me=he;const ge=function(e){return he(e).defaultView||window};const xe=function(e,t){return()=>null};function be(e,t){"function"===typeof e?e(t):e&&(e.current=t)}const ve=be,ye="undefined"!==typeof window?l.useLayoutEffect:l.useEffect,ke=ye;let we=0;const Ae=c["useId".toString()];const je=function(e){if(void 0!==Ae){const t=Ae();return null!=e?e:t}return function(e){const[t,n]=l.useState(e),r=e||t;return l.useEffect(()=>{null==t&&(we+=1,n(`mui-${we}`))},[t]),r}(e)};const Fe=function(e,t,n,r,o){return null};const Se=function(e){let{controlled:t,default:n,name:r,state:o="value"}=e;const{current:i}=l.useRef(void 0!==t),[a,s]=l.useState(n);return[i?t:a,l.useCallback(e=>{i||s(e)},[])]};const Ce=function(e){const t=l.useRef(e);return ye(()=>{t.current=e}),l.useRef(function(){return(0,t.current)(...arguments)}).current};const Ee=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l.useMemo(()=>t.every(e=>null==e)?null:e=>{t.forEach(t=>{be(t,e)})},t)};class De{constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new De}start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}}let $e=!0,Me=!1;const Te=new De,Ie={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function ze(e){e.metaKey||e.altKey||e.ctrlKey||($e=!0)}function Be(){$e=!1}function Le(){"hidden"===this.visibilityState&&Me&&($e=!0)}function Re(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return $e||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!Ie[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}const Pe=function(){const e=l.useCallback(e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",ze,!0),t.addEventListener("mousedown",Be,!0),t.addEventListener("pointerdown",Be,!0),t.addEventListener("touchstart",Be,!0),t.addEventListener("visibilitychange",Le,!0))},[]),t=l.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!Re(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(Me=!0,Te.start(100,()=>{Me=!1}),t.current=!1,!0)},ref:e}},Oe={configure:e=>{o.configure(e)}}},7758:(e,t,n)=>{"use strict";n.d(t,{A:()=>z});var r=n(8604),o=n(7162),i=n(3815);const a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce((e,t)=>(t.filterProps.forEach(n=>{e[n]=t}),e),{}),o=e=>Object.keys(e).reduce((t,n)=>r[n]?(0,i.A)(t,r[n](e)):t,{});return o.propTypes={},o.filterProps=t.reduce((e,t)=>e.concat(t.filterProps),[]),o};var s=n(9751);function l(e){return"number"!==typeof e?e:`${e}px solid`}function c(e,t){return(0,o.Ay)({prop:e,themeKey:"borders",transform:t})}const d=c("border",l),u=c("borderTop",l),p=c("borderRight",l),f=c("borderBottom",l),h=c("borderLeft",l),m=c("borderColor"),g=c("borderTopColor"),x=c("borderRightColor"),b=c("borderBottomColor"),v=c("borderLeftColor"),y=c("outline",l),k=c("outlineColor"),w=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){const t=(0,r.MA)(e.theme,"shape.borderRadius",4,"borderRadius"),n=e=>({borderRadius:(0,r._W)(t,e)});return(0,s.NI)(e,e.borderRadius,n)}return null};w.propTypes={},w.filterProps=["borderRadius"];a(d,u,p,f,h,m,g,x,b,v,w,y,k);const A=e=>{if(void 0!==e.gap&&null!==e.gap){const t=(0,r.MA)(e.theme,"spacing",8,"gap"),n=e=>({gap:(0,r._W)(t,e)});return(0,s.NI)(e,e.gap,n)}return null};A.propTypes={},A.filterProps=["gap"];const j=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){const t=(0,r.MA)(e.theme,"spacing",8,"columnGap"),n=e=>({columnGap:(0,r._W)(t,e)});return(0,s.NI)(e,e.columnGap,n)}return null};j.propTypes={},j.filterProps=["columnGap"];const F=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){const t=(0,r.MA)(e.theme,"spacing",8,"rowGap"),n=e=>({rowGap:(0,r._W)(t,e)});return(0,s.NI)(e,e.rowGap,n)}return null};F.propTypes={},F.filterProps=["rowGap"];a(A,j,F,(0,o.Ay)({prop:"gridColumn"}),(0,o.Ay)({prop:"gridRow"}),(0,o.Ay)({prop:"gridAutoFlow"}),(0,o.Ay)({prop:"gridAutoColumns"}),(0,o.Ay)({prop:"gridAutoRows"}),(0,o.Ay)({prop:"gridTemplateColumns"}),(0,o.Ay)({prop:"gridTemplateRows"}),(0,o.Ay)({prop:"gridTemplateAreas"}),(0,o.Ay)({prop:"gridArea"}));function S(e,t){return"grey"===t?t:e}a((0,o.Ay)({prop:"color",themeKey:"palette",transform:S}),(0,o.Ay)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:S}),(0,o.Ay)({prop:"backgroundColor",themeKey:"palette",transform:S}));function C(e){return e<=1&&0!==e?100*e+"%":e}const E=(0,o.Ay)({prop:"width",transform:C}),D=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){const t=t=>{var n,r;const o=(null==(n=e.theme)||null==(n=n.breakpoints)||null==(n=n.values)?void 0:n[t])||s.zu[t];return o?"px"!==(null==(r=e.theme)||null==(r=r.breakpoints)?void 0:r.unit)?{maxWidth:`${o}${e.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:C(t)}};return(0,s.NI)(e,e.maxWidth,t)}return null};D.filterProps=["maxWidth"];const $=(0,o.Ay)({prop:"minWidth",transform:C}),M=(0,o.Ay)({prop:"height",transform:C}),T=(0,o.Ay)({prop:"maxHeight",transform:C}),I=(0,o.Ay)({prop:"minHeight",transform:C}),z=((0,o.Ay)({prop:"size",cssProperty:"width",transform:C}),(0,o.Ay)({prop:"size",cssProperty:"height",transform:C}),a(E,D,$,M,T,I,(0,o.Ay)({prop:"boxSizing"})),{border:{themeKey:"borders",transform:l},borderTop:{themeKey:"borders",transform:l},borderRight:{themeKey:"borders",transform:l},borderBottom:{themeKey:"borders",transform:l},borderLeft:{themeKey:"borders",transform:l},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:l},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:w},color:{themeKey:"palette",transform:S},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:S},backgroundColor:{themeKey:"palette",transform:S},p:{style:r.Ms},pt:{style:r.Ms},pr:{style:r.Ms},pb:{style:r.Ms},pl:{style:r.Ms},px:{style:r.Ms},py:{style:r.Ms},padding:{style:r.Ms},paddingTop:{style:r.Ms},paddingRight:{style:r.Ms},paddingBottom:{style:r.Ms},paddingLeft:{style:r.Ms},paddingX:{style:r.Ms},paddingY:{style:r.Ms},paddingInline:{style:r.Ms},paddingInlineStart:{style:r.Ms},paddingInlineEnd:{style:r.Ms},paddingBlock:{style:r.Ms},paddingBlockStart:{style:r.Ms},paddingBlockEnd:{style:r.Ms},m:{style:r.Lc},mt:{style:r.Lc},mr:{style:r.Lc},mb:{style:r.Lc},ml:{style:r.Lc},mx:{style:r.Lc},my:{style:r.Lc},margin:{style:r.Lc},marginTop:{style:r.Lc},marginRight:{style:r.Lc},marginBottom:{style:r.Lc},marginLeft:{style:r.Lc},marginX:{style:r.Lc},marginY:{style:r.Lc},marginInline:{style:r.Lc},marginInlineStart:{style:r.Lc},marginInlineEnd:{style:r.Lc},marginBlock:{style:r.Lc},marginBlockStart:{style:r.Lc},marginBlockEnd:{style:r.Lc},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:A},rowGap:{style:F},columnGap:{style:j},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:C},maxWidth:{style:D},minWidth:{transform:C},height:{transform:C},maxHeight:{transform:C},minHeight:{transform:C},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}})},7779:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4z"}),"Sync")},7868:(e,t,n)=>{"use strict";function r(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}n.d(t,{A:()=>r})},7918:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A});var r=n(7598)},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},8052:(e,t,n)=>{"use strict";var r=n(4994);t.Ay=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:n=g,rootShouldForwardProp:r=h,slotShouldForwardProp:l=h}=e,d=e=>(0,c.default)((0,o.default)({},e,{theme:b((0,o.default)({},e,{defaultTheme:n,themeId:t}))}));return d.__mui_systemSx=!0,function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,a.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));const{name:u,slot:f,skipVariantsResolver:m,skipSx:g,overridesResolver:k=v(x(f))}=c,w=(0,i.default)(c,p),A=u&&u.startsWith("Mui")||f?"components":"custom",j=void 0!==m?m:f&&"Root"!==f&&"root"!==f||!1,F=g||!1;let S=h;"Root"===f||"root"===f?S=r:f?S=l:function(e){return"string"===typeof e&&e.charCodeAt(0)>96}(e)&&(S=void 0);const C=(0,a.default)(e,(0,o.default)({shouldForwardProp:S,label:undefined},w)),E=e=>"function"===typeof e&&e.__emotion_real!==e||(0,s.isPlainObject)(e)?r=>{const i=b({theme:r.theme,defaultTheme:n,themeId:t});return y(e,(0,o.default)({},r,{theme:i}),i.modularCssLayers?A:void 0)}:e,D=function(r){let i=E(r);for(var a=arguments.length,s=new Array(a>1?a-1:0),l=1;l<a;l++)s[l-1]=arguments[l];const c=s?s.map(E):[];u&&k&&c.push(e=>{const r=b((0,o.default)({},e,{defaultTheme:n,themeId:t}));if(!r.components||!r.components[u]||!r.components[u].styleOverrides)return null;const i=r.components[u].styleOverrides,a={};return Object.entries(i).forEach(t=>{let[n,i]=t;a[n]=y(i,(0,o.default)({},e,{theme:r}),r.modularCssLayers?"theme":void 0)}),k(e,a)}),u&&!j&&c.push(e=>{var r;const i=b((0,o.default)({},e,{defaultTheme:n,themeId:t}));return y({variants:null==i||null==(r=i.components)||null==(r=r[u])?void 0:r.variants},(0,o.default)({},e,{theme:i}),i.modularCssLayers?"theme":void 0)}),F||c.push(d);const p=c.length-s.length;if(Array.isArray(r)&&p>0){const e=new Array(p).fill("");i=[...r,...e],i.raw=[...r.raw,...e]}const f=C(i,...c);return e.muiName&&(f.muiName=e.muiName),f};return C.withConfig&&(D.withConfig=C.withConfig),D}};var o=r(n(4634)),i=r(n(4893)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}(n(1602)),s=n(9482),l=(r(n(7918)),r(n(3382)),r(n(4989))),c=r(n(9265));const d=["ownerState"],u=["variants"],p=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function h(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}function m(e,t){return t&&e&&"object"===typeof e&&e.styles&&!e.styles.startsWith("@layer")&&(e.styles=`@layer ${t}{${String(e.styles)}}`),e}const g=(0,l.default)(),x=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function b(e){let{defaultTheme:t,theme:n,themeId:r}=e;return o=n,0===Object.keys(o).length?t:n[r]||n;var o}function v(e){return e?(t,n)=>n[e]:null}function y(e,t,n){let{ownerState:r}=t,s=(0,i.default)(t,d);const l="function"===typeof e?e((0,o.default)({ownerState:r},s)):e;if(Array.isArray(l))return l.flatMap(e=>y(e,(0,o.default)({ownerState:r},s),n));if(l&&"object"===typeof l&&Array.isArray(l.variants)){const{variants:e=[]}=l;let t=(0,i.default)(l,u);return e.forEach(e=>{let i=!0;if("function"===typeof e.props?i=e.props((0,o.default)({ownerState:r},s,r)):Object.keys(e.props).forEach(t=>{(null==r?void 0:r[t])!==e.props[t]&&s[t]!==e.props[t]&&(i=!1)}),i){Array.isArray(t)||(t=[t]);const i="function"===typeof e.style?e.style((0,o.default)({ownerState:r},s,r)):e.style;t.push(n?m((0,a.internal_serializeStyles)(i),n):i)}}),t}return n?m((0,a.internal_serializeStyles)(l),n):l}},8168:(e,t,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(null,arguments)}n.d(t,{A:()=>r})},8280:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var r=n(8168),o=n(8587),i=n(9172),a=n(4853);const s={borderRadius:4};var l=n(8604);var c=n(8812),d=n(7758),u=n(9703);const p=["breakpoints","palette","spacing","shape"];const f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{breakpoints:t={},palette:n={},spacing:f,shape:h={}}=e,m=(0,o.A)(e,p),g=(0,a.A)(t),x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(e.mui)return e;const t=(0,l.LX)({spacing:e}),n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0===n.length?[1]:n).map(e=>{const n=t(e);return"number"===typeof n?`${n}px`:n}).join(" ")};return n.mui=!0,n}(f);let b=(0,i.A)({breakpoints:g,direction:"ltr",components:{},palette:(0,r.A)({mode:"light"},n),spacing:x,shape:(0,r.A)({},s,h)},m);b.applyStyles=u.A;for(var v=arguments.length,y=new Array(v>1?v-1:0),k=1;k<v;k++)y[k-1]=arguments[k];return b=y.reduce((e,t)=>(0,i.A)(e,t),b),b.unstable_sxConfig=(0,r.A)({},d.A,null==m?void 0:m.unstable_sxConfig),b.unstable_sx=function(e){return(0,c.A)({sx:e,theme:this})},b}},8348:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"}),"Info")},8587:(e,t,n)=>{"use strict";function r(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}n.d(t,{A:()=>r})},8604:(e,t,n)=>{"use strict";n.d(t,{LX:()=>h,MA:()=>f,_W:()=>m,Lc:()=>b,Ms:()=>v});var r=n(9751),o=n(7162),i=n(3815);const a={m:"margin",p:"padding"},s={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},l={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},c=function(e){const t={};return n=>(void 0===t[n]&&(t[n]=e(n)),t[n])}(e=>{if(e.length>2){if(!l[e])return[e];e=l[e]}const[t,n]=e.split(""),r=a[t],o=s[n]||"";return Array.isArray(o)?o.map(e=>r+e):[r+o]}),d=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],u=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],p=[...d,...u];function f(e,t,n,r){var i;const a=null!=(i=(0,o.Yn)(e,t,!1))?i:n;return"number"===typeof a?e=>"string"===typeof e?e:a*e:Array.isArray(a)?e=>"string"===typeof e?e:a[e]:"function"===typeof a?a:()=>{}}function h(e){return f(e,"spacing",8)}function m(e,t){if("string"===typeof t||null==t)return t;const n=e(Math.abs(t));return t>=0?n:"number"===typeof n?-n:`-${n}`}function g(e,t,n,o){if(-1===t.indexOf(n))return null;const i=function(e,t){return n=>e.reduce((e,r)=>(e[r]=m(t,n),e),{})}(c(n),o),a=e[n];return(0,r.NI)(e,a,i)}function x(e,t){const n=h(e.theme);return Object.keys(e).map(r=>g(e,t,r,n)).reduce(i.A,{})}function b(e){return x(e,d)}function v(e){return x(e,u)}function y(e){return x(e,p)}b.propTypes={},b.filterProps=d,v.propTypes={},v.filterProps=u,y.propTypes={},y.filterProps=p},8620:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"}),"StarBorderOutlined")},8812:(e,t,n)=>{"use strict";n.d(t,{A:()=>d,k:()=>l});var r=n(7598),o=n(3815),i=n(7162),a=n(9751),s=n(7758);function l(){function e(e,t,n,o){const s={[e]:t,theme:n},l=o[e];if(!l)return{[e]:t};const{cssProperty:c=e,themeKey:d,transform:u,style:p}=l;if(null==t)return null;if("typography"===d&&"inherit"===t)return{[e]:t};const f=(0,i.Yn)(n,d)||{};if(p)return p(s);return(0,a.NI)(s,t,t=>{let n=(0,i.BO)(f,u,t);return t===n&&"string"===typeof t&&(n=(0,i.BO)(f,u,`${e}${"default"===t?"":(0,r.A)(t)}`,t)),!1===c?n:{[c]:n}})}return function t(n){var r;const{sx:i,theme:l={},nested:c}=n||{};if(!i)return null;const d=null!=(r=l.unstable_sxConfig)?r:s.A;function u(n){let r=n;if("function"===typeof n)r=n(l);else if("object"!==typeof n)return n;if(!r)return null;const i=(0,a.EU)(l.breakpoints),s=Object.keys(i);let u=i;return Object.keys(r).forEach(n=>{const i=(s=r[n],c=l,"function"===typeof s?s(c):s);var s,c;if(null!==i&&void 0!==i)if("object"===typeof i)if(d[n])u=(0,o.A)(u,e(n,i,l,d));else{const e=(0,a.NI)({theme:l},i,e=>({[n]:e}));!function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce((e,t)=>e.concat(Object.keys(t)),[]),o=new Set(r);return t.every(e=>o.size===Object.keys(e).length)}(e,i)?u=(0,o.A)(u,e):u[n]=t({sx:i,theme:l,nested:!0})}else u=(0,o.A)(u,e(n,i,l,d))}),!c&&l.modularCssLayers?{"@layer sx":(0,a.vf)(s,u)}:(0,a.vf)(s,u)}return Array.isArray(i)?i.map(u):u(i)}}const c=l();c.filterProps=["sx"];const d=c},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},9172:(e,t,n)=>{"use strict";n.d(t,{A:()=>s,Q:()=>i});var r=n(8168),o=n(5043);function i(e){if("object"!==typeof e||null===e)return!1;const t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function a(e){if(o.isValidElement(e)||!i(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=a(e[n])}),t}function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{clone:!0};const l=n.clone?(0,r.A)({},e):e;return i(e)&&i(t)&&Object.keys(t).forEach(r=>{o.isValidElement(t[r])?l[r]=t[r]:i(t[r])&&Object.prototype.hasOwnProperty.call(e,r)&&i(e[r])?l[r]=s(e[r],t[r],n):n.clone?l[r]=i(t[r])?a(t[r]):t[r]:l[r]=t[r]}),l}},9179:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M1 21h4V9H1zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73z"}),"ThumbUp")},9214:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MIN_SAFE_INTEGER,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Number.MAX_SAFE_INTEGER;return Math.max(t,Math.min(e,n))}},9265:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A,extendSxProp:()=>d,unstable_createStyleFunctionSx:()=>r.k,unstable_defaultSxConfig:()=>s.A});var r=n(8812),o=n(8168),i=n(8587),a=n(9172),s=n(7758);const l=["sx"],c=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:s.A;return Object.keys(e).forEach(t=>{o[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]}),r};function d(e){const{sx:t}=e,n=(0,i.A)(e,l),{systemProps:r,otherProps:s}=c(n);let d;return d=Array.isArray(t)?[r,...t]:"function"===typeof t?function(){const e=t(...arguments);return(0,a.Q)(e)?(0,o.A)({},r,e):r}:(0,o.A)({},r,t),(0,o.A)({},s,{sx:d})}},9482:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A,isPlainObject:()=>r.Q});var r=n(9172)},9611:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu")},9703:(e,t,n)=>{"use strict";function r(e,t){const n=this;if(n.vars&&"function"===typeof n.getColorSchemeSelector){const r=n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)");return{[r]:t}}return n.palette.mode===e?t:{}}n.d(t,{A:()=>r})},9751:(e,t,n)=>{"use strict";n.d(t,{EU:()=>a,NI:()=>i,vf:()=>s,zu:()=>r});const r={xs:0,sm:600,md:900,lg:1200,xl:1536},o={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${r[e]}px)`};function i(e,t,n){const i=e.theme||{};if(Array.isArray(t)){const e=i.breakpoints||o;return t.reduce((r,o,i)=>(r[e.up(e.keys[i])]=n(t[i]),r),{})}if("object"===typeof t){const e=i.breakpoints||o;return Object.keys(t).reduce((o,i)=>{if(-1!==Object.keys(e.values||r).indexOf(i)){o[e.up(i)]=n(t[i],i)}else{const e=i;o[e]=t[e]}return o},{})}return n(t)}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var t;return(null==(t=e.keys)?void 0:t.reduce((t,n)=>(t[e.up(n)]={},t),{}))||{}}function s(e,t){return e.reduce((e,t)=>{const n=e[t];return(!n||0===Object.keys(n).length)&&delete e[t],e},t)}},9778:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle")},9882:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"m16.24 11.51 1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3 17.25V21h3.75l4.76-4.76 4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.45 1.45zm7.88 7.89-4.13-4.13 1.9-1.9 1.45 1.45-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27zm3.65-11.92c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83 3.75 3.75z"}),"DesignServices")},9901:(e,t,n)=>{"use strict";var r=n(4994);t.A=void 0;var o=r(n(39)),i=n(579);t.A=(0,o.default)((0,i.jsx)("path",{d:"M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2M9 9l4.34-4.34L12 10h9v2l-3 7H9zM1 9h4v12H1z"}),"ThumbUpOutlined")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&r;("object"==typeof s||"function"==typeof s)&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>a[e]=()=>r[e]);return a.default=()=>r,n.d(i,a),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.nc=void 0,(()=>{"use strict";var e,t=n(5043),r=n.t(t,2),o=n(4391);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const a="popstate";function s(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function l(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function d(e,t,n,r){return void 0===n&&(n=null),i({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?p(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function u(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function f(t,n,r,o){void 0===o&&(o={});let{window:l=document.defaultView,v5Compat:p=!1}=o,f=l.history,h=e.Pop,m=null,g=x();function x(){return(f.state||{idx:null}).idx}function b(){h=e.Pop;let t=x(),n=null==t?null:t-g;g=t,m&&m({action:h,location:y.location,delta:n})}function v(e){let t="null"!==l.location.origin?l.location.origin:l.location.href,n="string"===typeof e?e:u(e);return n=n.replace(/ $/,"%20"),s(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,f.replaceState(i({},f.state,{idx:g}),""));let y={get action(){return h},get location(){return t(l,f)},listen(e){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(a,b),m=e,()=>{l.removeEventListener(a,b),m=null}},createHref:e=>n(l,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let o=d(y.location,t,n);r&&r(o,t),g=x()+1;let i=c(o,g),a=y.createHref(o);try{f.pushState(i,"",a)}catch(s){if(s instanceof DOMException&&"DataCloneError"===s.name)throw s;l.location.assign(a)}p&&m&&m({action:h,location:y.location,delta:1})},replace:function(t,n){h=e.Replace;let o=d(y.location,t,n);r&&r(o,t),g=x();let i=c(o,g),a=y.createHref(o);f.replaceState(i,"",a),p&&m&&m({action:h,location:y.location,delta:0})},go:e=>f.go(e)};return y}var h;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(h||(h={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function m(e,t,n){return void 0===n&&(n="/"),g(e,t,n,!1)}function g(e,t,n,r){let o=$(("string"===typeof t?p(t):t).pathname||"/",n);if(null==o)return null;let i=x(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(i);let a=null;for(let s=0;null==a&&s<i.length;++s){let e=D(o);a=C(i[s],e,r)}return a}function x(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,i)=>{let a={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(s(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let l=B([r,a.relativePath]),c=n.concat(a);e.children&&e.children.length>0&&(s(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),x(e.children,t,c,l)),(null!=e.path||e.index)&&t.push({path:l,score:S(l,e.index),routesMeta:c})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of b(e.path))o(e,t,r);else o(e,t)}),t}function b(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=b(r.join("/")),s=[];return s.push(...a.map(e=>""===e?i:[i,e].join("/"))),o&&s.push(...a),s.map(t=>e.startsWith("/")&&""===t?"/":t)}const v=/^:[\w-]+$/,y=3,k=2,w=1,A=10,j=-2,F=e=>"*"===e;function S(e,t){let n=e.split("/"),r=n.length;return n.some(F)&&(r+=j),t&&(r+=k),n.filter(e=>!F(e)).reduce((e,t)=>e+(v.test(t)?y:""===t?w:A),r)}function C(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===i?t:t.slice(i.length)||"/",d=E({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),u=e.route;if(!d&&l&&n&&!r[r.length-1].route.index&&(d=E({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!d)return null;Object.assign(o,d.params),a.push({params:o,pathname:B([i,d.pathname]),pathnameBase:L(B([i,d.pathnameBase])),route:u}),"/"!==d.pathnameBase&&(i=B([i,d.pathnameBase]))}return a}function E(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);l("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let i=new RegExp(o,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=s[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=o&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{}),pathname:i,pathnameBase:a,pattern:e}}function D(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return l(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function $(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function M(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function T(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function I(e,t){let n=T(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function z(e,t,n,r){let o;void 0===r&&(r=!1),"string"===typeof e?o=p(e):(o=i({},e),s(!o.pathname||!o.pathname.includes("?"),M("?","pathname","search",o)),s(!o.pathname||!o.pathname.includes("#"),M("#","pathname","hash",o)),s(!o.search||!o.search.includes("#"),M("#","search","hash",o)));let a,l=""===e||""===o.pathname,c=l?"/":o.pathname;if(null==c)a=n;else{let e=t.length-1;if(!r&&c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let d=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"===typeof e?p(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:R(r),hash:P(o)}}(o,a),u=c&&"/"!==c&&c.endsWith("/"),f=(l||"."===c)&&n.endsWith("/");return d.pathname.endsWith("/")||!u&&!f||(d.pathname+="/"),d}const B=e=>e.join("/").replace(/\/\/+/g,"/"),L=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),R=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",P=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function O(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const N=["post","put","patch","delete"],_=(new Set(N),["get",...N]);new Set(_),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}const U=t.createContext(null);const W=t.createContext(null);const V=t.createContext(null);const G=t.createContext(null);const K=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Y=t.createContext(null);function X(){return null!=t.useContext(G)}function q(){return X()||s(!1),t.useContext(G).location}function Q(e){t.useContext(V).static||t.useLayoutEffect(e)}function J(){let{isDataRoute:e}=t.useContext(K);return e?function(){let{router:e}=le(ae.UseNavigateStable),n=de(se.UseNavigateStable),r=t.useRef(!1);return Q(()=>{r.current=!0}),t.useCallback(function(t,o){void 0===o&&(o={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,H({fromRouteId:n},o)))},[e,n])}():function(){X()||s(!1);let e=t.useContext(U),{basename:n,future:r,navigator:o}=t.useContext(V),{matches:i}=t.useContext(K),{pathname:a}=q(),l=JSON.stringify(I(i,r.v7_relativeSplatPath)),c=t.useRef(!1);return Q(()=>{c.current=!0}),t.useCallback(function(t,r){if(void 0===r&&(r={}),!c.current)return;if("number"===typeof t)return void o.go(t);let i=z(t,JSON.parse(l),a,"path"===r.relative);null==e&&"/"!==n&&(i.pathname="/"===i.pathname?n:B([n,i.pathname])),(r.replace?o.replace:o.push)(i,r.state,r)},[n,o,l,a,e])}()}function Z(e,n){let{relative:r}=void 0===n?{}:n,{future:o}=t.useContext(V),{matches:i}=t.useContext(K),{pathname:a}=q(),s=JSON.stringify(I(i,o.v7_relativeSplatPath));return t.useMemo(()=>z(e,JSON.parse(s),a,"path"===r),[e,s,a,r])}function ee(n,r,o,i){X()||s(!1);let{navigator:a}=t.useContext(V),{matches:l}=t.useContext(K),c=l[l.length-1],d=c?c.params:{},u=(c&&c.pathname,c?c.pathnameBase:"/");c&&c.route;let f,h=q();if(r){var g;let e="string"===typeof r?p(r):r;"/"===u||(null==(g=e.pathname)?void 0:g.startsWith(u))||s(!1),f=e}else f=h;let x=f.pathname||"/",b=x;if("/"!==u){let e=u.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(e.length).join("/")}let v=m(n,{pathname:b});let y=ie(v&&v.map(e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:B([u,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:B([u,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),l,o,i);return r&&y?t.createElement(G.Provider,{value:{location:H({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},y):y}function te(){let e=function(){var e;let n=t.useContext(Y),r=ce(se.UseRouteError),o=de(se.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[o]}(),n=O(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:i},r):null,null)}const ne=t.createElement(te,null);class re extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(K.Provider,{value:this.props.routeContext},t.createElement(Y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oe(e){let{routeContext:n,match:r,children:o}=e,i=t.useContext(U);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(K.Provider,{value:n},o)}function ie(e,n,r,o){var i;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===o&&(o=null),null==e){var a;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(a=o)&&a.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let l=e,c=null==(i=r)?void 0:i.errors;if(null!=c){let e=l.findIndex(e=>e.route.id&&void 0!==(null==c?void 0:c[e.route.id]));e>=0||s(!1),l=l.slice(0,Math.min(l.length,e+1))}let d=!1,u=-1;if(r&&o&&o.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=t),e.route.id){let{loaderData:t,errors:n}=r,o=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||o){d=!0,l=u>=0?l.slice(0,u+1):[l[0]];break}}}return l.reduceRight((e,o,i)=>{let a,s=!1,p=null,f=null;var h;r&&(a=c&&o.route.id?c[o.route.id]:void 0,p=o.route.errorElement||ne,d&&(u<0&&0===i?(h="route-fallback",!1||ue[h]||(ue[h]=!0),s=!0,f=null):u===i&&(s=!0,f=o.route.hydrateFallbackElement||null)));let m=n.concat(l.slice(0,i+1)),g=()=>{let n;return n=a?p:s?f:o.route.Component?t.createElement(o.route.Component,null):o.route.element?o.route.element:e,t.createElement(oe,{match:o,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===i)?t.createElement(re,{location:r.location,revalidation:r.revalidation,component:p,error:a,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var ae=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ae||{}),se=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(se||{});function le(e){let n=t.useContext(U);return n||s(!1),n}function ce(e){let n=t.useContext(W);return n||s(!1),n}function de(e){let n=function(){let e=t.useContext(K);return e||s(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||s(!1),r.route.id}const ue={};function pe(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function fe(e){s(!1)}function he(n){let{basename:r="/",children:o=null,location:i,navigationType:a=e.Pop,navigator:l,static:c=!1,future:d}=n;X()&&s(!1);let u=r.replace(/^\/*/,"/"),f=t.useMemo(()=>({basename:u,navigator:l,static:c,future:H({v7_relativeSplatPath:!1},d)}),[u,d,l,c]);"string"===typeof i&&(i=p(i));let{pathname:h="/",search:m="",hash:g="",state:x=null,key:b="default"}=i,v=t.useMemo(()=>{let e=$(h,u);return null==e?null:{location:{pathname:e,search:m,hash:g,state:x,key:b},navigationType:a}},[u,h,m,g,x,b,a]);return null==v?null:t.createElement(V.Provider,{value:f},t.createElement(G.Provider,{children:o,value:v}))}function me(e){let{children:t,location:n}=e;return function(e,t){return ee(e,t)}(ge(t),n)}new Promise(()=>{});t.Component;function ge(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,(e,o)=>{if(!t.isValidElement(e))return;let i=[...n,o];if(e.type===t.Fragment)return void r.push.apply(r,ge(e.props.children,i));e.type!==fe&&s(!1),e.props.index&&e.props.children&&s(!1);let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=ge(e.props.children,i)),r.push(a)}),r}var xe=n(7950),be=n.t(xe,2);function ve(){return ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ve.apply(this,arguments)}function ye(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const ke=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],we=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch(ty){}const Ae=t.createContext({isTransitioning:!1});new Map;const je=r.startTransition;be.flushSync,r.useId;function Fe(e){let{basename:n,children:r,future:o,window:i}=e,a=t.useRef();var s;null==a.current&&(a.current=(void 0===(s={window:i,v5Compat:!0})&&(s={}),f(function(e,t){let{pathname:n,search:r,hash:o}=e.location;return d("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:u(t)},null,s)));let l=a.current,[c,p]=t.useState({action:l.action,location:l.location}),{v7_startTransition:h}=o||{},m=t.useCallback(e=>{h&&je?je(()=>p(e)):p(e)},[p,h]);return t.useLayoutEffect(()=>l.listen(m),[l,m]),t.useEffect(()=>pe(o),[o]),t.createElement(he,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:l,future:o})}const Se="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Ce=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ee=t.forwardRef(function(e,n){let r,{onClick:o,relative:i,reloadDocument:a,replace:l,state:c,target:d,to:p,preventScrollReset:f,viewTransition:h}=e,m=ye(e,ke),{basename:g}=t.useContext(V),x=!1;if("string"===typeof p&&Ce.test(p)&&(r=p,Se))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),n=$(t.pathname,g);t.origin===e.origin&&null!=n?p=n+t.search+t.hash:x=!0}catch(ty){}let b=function(e,n){let{relative:r}=void 0===n?{}:n;X()||s(!1);let{basename:o,navigator:i}=t.useContext(V),{hash:a,pathname:l,search:c}=Z(e,{relative:r}),d=l;return"/"!==o&&(d="/"===l?o:B([o,l])),i.createHref({pathname:d,search:c,hash:a})}(p,{relative:i}),v=function(e,n){let{target:r,replace:o,state:i,preventScrollReset:a,relative:s,viewTransition:l}=void 0===n?{}:n,c=J(),d=q(),p=Z(e,{relative:s});return t.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==o?o:u(d)===u(p);c(e,{replace:n,state:i,preventScrollReset:a,relative:s,viewTransition:l})}},[d,c,p,o,i,r,e,a,s,l])}(p,{replace:l,state:c,target:d,preventScrollReset:f,relative:i,viewTransition:h});return t.createElement("a",ve({},m,{href:r||b,onClick:x||a?o:function(e){o&&o(e),e.defaultPrevented||v(e)},ref:n,target:d}))});const De=t.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:c,viewTransition:d,children:u}=e,p=ye(e,we),f=Z(c,{relative:p.relative}),h=q(),m=t.useContext(W),{navigator:g,basename:x}=t.useContext(V),b=null!=m&&function(e,n){void 0===n&&(n={});let r=t.useContext(Ae);null==r&&s(!1);let{basename:o}=Te($e.useViewTransitionState),i=Z(e,{relative:n.relative});if(!r.isTransitioning)return!1;let a=$(r.currentLocation.pathname,o)||r.currentLocation.pathname,l=$(r.nextLocation.pathname,o)||r.nextLocation.pathname;return null!=E(i.pathname,l)||null!=E(i.pathname,a)}(f)&&!0===d,v=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,y=h.pathname,k=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;o||(y=y.toLowerCase(),k=k?k.toLowerCase():null,v=v.toLowerCase()),k&&x&&(k=$(k,x)||k);const w="/"!==v&&v.endsWith("/")?v.length-1:v.length;let A,j=y===v||!a&&y.startsWith(v)&&"/"===y.charAt(w),F=null!=k&&(k===v||!a&&k.startsWith(v)&&"/"===k.charAt(v.length)),S={isActive:j,isPending:F,isTransitioning:b},C=j?r:void 0;A="function"===typeof i?i(S):[i,j?"active":null,F?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let D="function"===typeof l?l(S):l;return t.createElement(Ee,ve({},p,{"aria-current":C,className:A,ref:n,style:D,to:c,viewTransition:d}),"function"===typeof u?u(S):u)});var $e,Me;function Te(e){let n=t.useContext(U);return n||s(!1),n}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})($e||($e={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Me||(Me={}));var Ie=function(){return Ie=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Ie.apply(this,arguments)};Object.create;function ze(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Be=n(7324),Le=n.n(Be),Re="-ms-",Pe="-moz-",Oe="-webkit-",Ne="comm",_e="rule",He="decl",Ue="@keyframes",We=Math.abs,Ve=String.fromCharCode,Ge=Object.assign;function Ke(e){return e.trim()}function Ye(e,t){return(e=t.exec(e))?e[0]:e}function Xe(e,t,n){return e.replace(t,n)}function qe(e,t,n){return e.indexOf(t,n)}function Qe(e,t){return 0|e.charCodeAt(t)}function Je(e,t,n){return e.slice(t,n)}function Ze(e){return e.length}function et(e){return e.length}function tt(e,t){return t.push(e),e}function nt(e,t){return e.filter(function(e){return!Ye(e,t)})}var rt=1,ot=1,it=0,at=0,st=0,lt="";function ct(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:rt,column:ot,length:a,return:"",siblings:s}}function dt(e,t){return Ge(ct("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ut(e){for(;e.root;)e=dt(e.root,{children:[e]});tt(e,e.siblings)}function pt(){return st=at>0?Qe(lt,--at):0,ot--,10===st&&(ot=1,rt--),st}function ft(){return st=at<it?Qe(lt,at++):0,ot++,10===st&&(ot=1,rt++),st}function ht(){return Qe(lt,at)}function mt(){return at}function gt(e,t){return Je(lt,e,t)}function xt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bt(e){return rt=ot=1,it=Ze(lt=e),at=0,[]}function vt(e){return lt="",e}function yt(e){return Ke(gt(at-1,At(91===e?e+2:40===e?e+1:e)))}function kt(e){for(;(st=ht())&&st<33;)ft();return xt(e)>2||xt(st)>3?"":" "}function wt(e,t){for(;--t&&ft()&&!(st<48||st>102||st>57&&st<65||st>70&&st<97););return gt(e,mt()+(t<6&&32==ht()&&32==ft()))}function At(e){for(;ft();)switch(st){case e:return at;case 34:case 39:34!==e&&39!==e&&At(st);break;case 40:41===e&&At(e);break;case 92:ft()}return at}function jt(e,t){for(;ft()&&e+st!==57&&(e+st!==84||47!==ht()););return"/*"+gt(t,at-1)+"*"+Ve(47===e?e:ft())}function Ft(e){for(;!xt(ht());)ft();return gt(e,at)}function St(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ct(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case He:return e.return=e.return||e.value;case Ne:return"";case Ue:return e.return=e.value+"{"+St(e.children,r)+"}";case _e:if(!Ze(e.value=e.props.join(",")))return""}return Ze(n=St(e.children,r))?e.return=e.value+"{"+n+"}":""}function Et(e,t,n){switch(function(e,t){return 45^Qe(e,0)?(((t<<2^Qe(e,0))<<2^Qe(e,1))<<2^Qe(e,2))<<2^Qe(e,3):0}(e,t)){case 5103:return Oe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+e+e;case 4789:return Pe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+e+Pe+e+Re+e+e;case 5936:switch(Qe(e,t+11)){case 114:return Oe+e+Re+Xe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Oe+e+Re+Xe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Oe+e+Re+Xe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Oe+e+Re+e+e;case 6165:return Oe+e+Re+"flex-"+e+e;case 5187:return Oe+e+Xe(e,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+Re+"flex-$1$2")+e;case 5443:return Oe+e+Re+"flex-item-"+Xe(e,/flex-|-self/g,"")+(Ye(e,/flex-|baseline/)?"":Re+"grid-row-"+Xe(e,/flex-|-self/g,""))+e;case 4675:return Oe+e+Re+"flex-line-pack"+Xe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Oe+e+Re+Xe(e,"shrink","negative")+e;case 5292:return Oe+e+Re+Xe(e,"basis","preferred-size")+e;case 6060:return Oe+"box-"+Xe(e,"-grow","")+Oe+e+Re+Xe(e,"grow","positive")+e;case 4554:return Oe+Xe(e,/([^-])(transform)/g,"$1"+Oe+"$2")+e;case 6187:return Xe(Xe(Xe(e,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),e,"")+e;case 5495:case 3959:return Xe(e,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return Xe(Xe(e,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+e+e;case 4200:if(!Ye(e,/flex-|baseline/))return Re+"grid-column-align"+Je(e,t)+e;break;case 2592:case 3360:return Re+Xe(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Ye(e.props,/grid-\w+-end/)})?~qe(e+(n=n[t].value),"span",0)?e:Re+Xe(e,"-start","")+e+Re+"grid-row-span:"+(~qe(n,"span",0)?Ye(n,/\d+/):+Ye(n,/\d+/)-+Ye(e,/\d+/))+";":Re+Xe(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Ye(e.props,/grid-\w+-start/)})?e:Re+Xe(Xe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Xe(e,/(.+)-inline(.+)/,Oe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ze(e)-1-t>6)switch(Qe(e,t+1)){case 109:if(45!==Qe(e,t+4))break;case 102:return Xe(e,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+Pe+(108==Qe(e,t+3)?"$3":"$2-$3"))+e;case 115:return~qe(e,"stretch",0)?Et(Xe(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Xe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,o,i,a,s){return Re+n+":"+r+s+(o?Re+n+"-span:"+(i?a:+a-+r)+s:"")+e});case 4949:if(121===Qe(e,t+6))return Xe(e,":",":"+Oe)+e;break;case 6444:switch(Qe(e,45===Qe(e,14)?18:11)){case 120:return Xe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Oe+(45===Qe(e,14)?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+Re+"$2box$3")+e;case 100:return Xe(e,":",":"+Re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Xe(e,"scroll-","scroll-snap-")+e}return e}function Dt(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case He:return void(e.return=Et(e.value,e.length,n));case Ue:return St([dt(e,{value:Xe(e.value,"@","@"+Oe)})],r);case _e:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Ye(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ut(dt(e,{props:[Xe(t,/:(read-\w+)/,":-moz-$1")]})),ut(dt(e,{props:[t]})),Ge(e,{props:nt(n,r)});break;case"::placeholder":ut(dt(e,{props:[Xe(t,/:(plac\w+)/,":"+Oe+"input-$1")]})),ut(dt(e,{props:[Xe(t,/:(plac\w+)/,":-moz-$1")]})),ut(dt(e,{props:[Xe(t,/:(plac\w+)/,Re+"input-$1")]})),ut(dt(e,{props:[t]})),Ge(e,{props:nt(n,r)})}return""})}}function $t(e){return vt(Mt("",null,null,null,[""],e=bt(e),0,[0],e))}function Mt(e,t,n,r,o,i,a,s,l){for(var c=0,d=0,u=a,p=0,f=0,h=0,m=1,g=1,x=1,b=0,v="",y=o,k=i,w=r,A=v;g;)switch(h=b,b=ft()){case 40:if(108!=h&&58==Qe(A,u-1)){-1!=qe(A+=Xe(yt(b),"&","&\f"),"&\f",We(c?s[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:A+=yt(b);break;case 9:case 10:case 13:case 32:A+=kt(h);break;case 92:A+=wt(mt()-1,7);continue;case 47:switch(ht()){case 42:case 47:tt(It(jt(ft(),mt()),t,n,l),l);break;default:A+="/"}break;case 123*m:s[c++]=Ze(A)*x;case 125*m:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+d:-1==x&&(A=Xe(A,/\f/g,"")),f>0&&Ze(A)-u&&tt(f>32?zt(A+";",r,n,u-1,l):zt(Xe(A," ","")+";",r,n,u-2,l),l);break;case 59:A+=";";default:if(tt(w=Tt(A,t,n,c,d,o,s,v,y=[],k=[],u,i),i),123===b)if(0===d)Mt(A,t,w,w,y,i,u,s,k);else switch(99===p&&110===Qe(A,3)?100:p){case 100:case 108:case 109:case 115:Mt(e,w,w,r&&tt(Tt(e,w,w,0,0,o,s,v,o,y=[],u,k),k),o,k,u,s,r?y:k);break;default:Mt(A,w,w,w,[""],k,0,s,k)}}c=d=f=0,m=x=1,v=A="",u=a;break;case 58:u=1+Ze(A),f=h;default:if(m<1)if(123==b)--m;else if(125==b&&0==m++&&125==pt())continue;switch(A+=Ve(b),b*m){case 38:x=d>0?1:(A+="\f",-1);break;case 44:s[c++]=(Ze(A)-1)*x,x=1;break;case 64:45===ht()&&(A+=yt(ft())),p=ht(),d=u=Ze(v=A+=Ft(mt())),b++;break;case 45:45===h&&2==Ze(A)&&(m=0)}}return i}function Tt(e,t,n,r,o,i,a,s,l,c,d,u){for(var p=o-1,f=0===o?i:[""],h=et(f),m=0,g=0,x=0;m<r;++m)for(var b=0,v=Je(e,p+1,p=We(g=a[m])),y=e;b<h;++b)(y=Ke(g>0?f[b]+" "+v:Xe(v,/&\f/g,f[b])))&&(l[x++]=y);return ct(e,t,n,0===o?_e:s,l,c,d,u)}function It(e,t,n,r){return ct(e,t,n,Ne,Ve(st),Je(e,2,-2),0,r)}function zt(e,t,n,r,o){return ct(e,t,n,He,Je(e,0,r),Je(e,r+1,-1),r,o)}var Bt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Rt="active",Pt="data-styled-version",Ot="6.1.19",Nt="/*!sc*/\n",_t="undefined"!=typeof window&&"undefined"!=typeof document,Ht=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Ut={},Wt=(new Set,Object.freeze([])),Vt=Object.freeze({});function Gt(e,t,n){return void 0===n&&(n=Vt),e.theme!==n.theme&&e.theme||t||n.theme}var Kt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Yt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xt=/(^-|-$)/g;function qt(e){return e.replace(Yt,"-").replace(Xt,"")}var Qt=/(a)(d)/gi,Jt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Zt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Jt(t%52)+n;return(Jt(t%52)+n).replace(Qt,"$1-$2")}var en,tn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},nn=function(e){return tn(5381,e)};function rn(e){return Zt(nn(e)>>>0)}function on(e){return e.displayName||e.name||"Component"}function an(e){return"string"==typeof e&&!0}var sn="function"==typeof Symbol&&Symbol.for,ln=sn?Symbol.for("react.memo"):60115,cn=sn?Symbol.for("react.forward_ref"):60112,dn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},un={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fn=((en={})[cn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},en[ln]=pn,en);function hn(e){return("type"in(t=e)&&t.type.$$typeof)===ln?pn:"$$typeof"in e?fn[e.$$typeof]:dn;var t}var mn=Object.defineProperty,gn=Object.getOwnPropertyNames,xn=Object.getOwnPropertySymbols,bn=Object.getOwnPropertyDescriptor,vn=Object.getPrototypeOf,yn=Object.prototype;function kn(e,t,n){if("string"!=typeof t){if(yn){var r=vn(t);r&&r!==yn&&kn(e,r,n)}var o=gn(t);xn&&(o=o.concat(xn(t)));for(var i=hn(e),a=hn(t),s=0;s<o.length;++s){var l=o[s];if(!(l in un||n&&n[l]||a&&l in a||i&&l in i)){var c=bn(t,l);try{mn(e,l,c)}catch(e){}}}}return e}function wn(e){return"function"==typeof e}function An(e){return"object"==typeof e&&"styledComponentId"in e}function jn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Fn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Sn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Cn(e,t,n){if(void 0===n&&(n=!1),!n&&!Sn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Cn(e[r],t[r]);else if(Sn(t))for(var r in t)e[r]=Cn(e[r],t[r]);return e}function En(e,t){Object.defineProperty(e,"toString",{value:t})}function Dn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var $n=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Dn(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(Nt);return t},e}(),Mn=new Map,Tn=new Map,In=1,zn=function(e){if(Mn.has(e))return Mn.get(e);for(;Tn.has(In);)In++;var t=In++;return Mn.set(e,t),Tn.set(t,e),t},Bn=function(e,t){In=t+1,Mn.set(e,t),Tn.set(t,e)},Ln="style[".concat(Lt,"][").concat(Pt,'="').concat(Ot,'"]'),Rn=new RegExp("^".concat(Lt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Pn=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},On=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Nt),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(Rn);if(l){var c=0|parseInt(l[1],10),d=l[2];0!==c&&(Bn(d,c),Pn(e,d,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},Nn=function(e){for(var t=document.querySelectorAll(Ln),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Lt)!==Rt&&(On(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function _n(){return n.nc}var Hn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Lt,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(Lt,Rt),r.setAttribute(Pt,Ot);var a=_n();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},Un=function(){function e(e){this.element=Hn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw Dn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Wn=function(){function e(e){this.element=Hn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Vn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Gn=_t,Kn={isServer:!_t,useCSSOMInjection:!Ht},Yn=function(){function e(e,t,n){void 0===e&&(e=Vt),void 0===t&&(t={});var r=this;this.options=Ie(Ie({},Kn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&_t&&Gn&&(Gn=!1,Nn(this)),En(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return Tn.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var s="".concat(Lt,".g").concat(n,'[id="').concat(o,'"]'),l="";void 0!==i&&i.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(Nt)},i=0;i<n;i++)o(i);return r}(r)})}return e.registerId=function(e){return zn(e)},e.prototype.rehydrate=function(){!this.server&&_t&&Nn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Ie(Ie({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Vn(n):t?new Un(n):new Wn(n)}(this.options),new $n(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(zn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(zn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(zn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Xn=/&/g,qn=/^\s*\/\/.*$/gm;function Qn(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Qn(e.children,t)),e})}function Jn(e){var t,n,r,o=void 0===e?Vt:e,i=o.options,a=void 0===i?Vt:i,s=o.plugins,l=void 0===s?Wt:s,c=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},d=l.slice();d.push(function(e){e.type===_e&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Xn,n).replace(r,c))}),a.prefix&&d.push(Dt),d.push(Ct);var u=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(qn,""),c=$t(i||o?"".concat(i," ").concat(o," { ").concat(l," }"):l);a.namespace&&(c=Qn(c,a.namespace));var u,p=[];return St(c,function(e){var t=et(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}(d.concat((u=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&u(e)})))),p};return u.hash=l.length?l.reduce(function(e,t){return t.name||Dn(15),tn(e,t.name)},5381).toString():"",u}var Zn=new Yn,er=Jn(),tr=t.createContext({shouldForwardProp:void 0,styleSheet:Zn,stylis:er}),nr=(tr.Consumer,t.createContext(void 0));function rr(){return(0,t.useContext)(tr)}function or(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],o=n[1],i=rr().styleSheet,a=(0,t.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),s=(0,t.useMemo)(function(){return Jn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)(function(){Le()(r,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,t.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}},[e.shouldForwardProp,a,s]);return t.createElement(tr.Provider,{value:l},t.createElement(nr.Provider,{value:s},e.children))}var ir=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=er);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,En(this,function(){throw Dn(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=er),this.name+e.hash},e}(),ar=function(e){return e>="A"&&e<="Z"};function sr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;ar(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var lr=function(e){return null==e||!1===e||""===e},cr=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!lr(i)&&(Array.isArray(i)&&i.isCss||wn(i)?r.push("".concat(sr(o),":"),i,";"):Sn(i)?r.push.apply(r,ze(ze(["".concat(o," {")],cr(i),!1),["}"],!1)):r.push("".concat(sr(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Bt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function dr(e,t,n,r){return lr(e)?[]:An(e)?[".".concat(e.styledComponentId)]:wn(e)?!wn(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:dr(e(t),t,n,r):e instanceof ir?n?(e.inject(n,r),[e.getName(r)]):[e]:Sn(e)?cr(e):Array.isArray(e)?Array.prototype.concat.apply(Wt,e.map(function(e){return dr(e,t,n,r)})):[e.toString()];var o}function ur(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(wn(n)&&!An(n))return!1}return!0}var pr=nn(Ot),fr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ur(e),this.componentId=t,this.baseHash=tn(pr,t),this.baseStyle=n,Yn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=jn(r,this.staticRulesId);else{var o=Fn(dr(this.rules,e,t,n)),i=Zt(tn(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=jn(r,i),this.staticRulesId=i}else{for(var s=tn(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var d=this.rules[c];if("string"==typeof d)l+=d;else if(d){var u=Fn(dr(d,e,t,n));s=tn(s,u+c),l+=u}}if(l){var p=Zt(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=jn(r,p)}}return r},e}(),hr=t.createContext(void 0);hr.Consumer;var mr={};new Set;function gr(e,n,r){var o=An(e),i=e,a=!an(e),s=n.attrs,l=void 0===s?Wt:s,c=n.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":qt(e);mr[n]=(mr[n]||0)+1;var r="".concat(n,"-").concat(rn(Ot+n+mr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,u=n.displayName,p=void 0===u?function(e){return an(e)?"styled.".concat(e):"Styled(".concat(on(e),")")}(e):u,f=n.displayName&&n.componentId?"".concat(qt(n.displayName),"-").concat(n.componentId):n.componentId||d,h=o&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(o&&i.shouldForwardProp){var g=i.shouldForwardProp;if(n.shouldForwardProp){var x=n.shouldForwardProp;m=function(e,t){return g(e,t)&&x(e,t)}}else m=g}var b=new fr(r,f,o?i.componentStyle:void 0);function v(e,n){return function(e,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,d=t.useContext(hr),u=rr(),p=e.shouldForwardProp||u.shouldForwardProp,f=Gt(n,d,a)||Vt,h=function(e,t,n){for(var r,o=Ie(Ie({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=wn(r=e[i])?r(o):r;for(var s in a)o[s]="className"===s?jn(o[s],a[s]):"style"===s?Ie(Ie({},o[s]),a[s]):a[s]}return t.className&&(o.className=jn(o.className,t.className)),o}(o,n,f),m=h.as||c,g={};for(var x in h)void 0===h[x]||"$"===x[0]||"as"===x||"theme"===x&&h.theme===f||("forwardedAs"===x?g.as=h.forwardedAs:p&&!p(x,m)||(g[x]=h[x]));var b=function(e,t){var n=rr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),v=jn(s,l);return b&&(v+=" "+b),h.className&&(v+=" "+h.className),g[an(m)&&!Kt.has(m)?"class":"className"]=v,r&&(g.ref=r),(0,t.createElement)(m,g)}(y,e,n)}v.displayName=p;var y=t.forwardRef(v);return y.attrs=h,y.componentStyle=b,y.displayName=p,y.shouldForwardProp=m,y.foldedComponentIds=o?jn(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=f,y.target=o?i.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Cn(e,o[r],!0);return e}({},i.defaultProps,e):e}}),En(y,function(){return".".concat(y.styledComponentId)}),a&&kn(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function xr(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var br=function(e){return Object.assign(e,{isCss:!0})};function vr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(wn(e)||Sn(e))return br(dr(xr(Wt,ze([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?dr(r):br(dr(xr(r,t)))}function yr(e,t,n){if(void 0===n&&(n=Vt),!t)throw Dn(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,vr.apply(void 0,ze([r],o,!1)))};return r.attrs=function(r){return yr(e,t,Ie(Ie({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return yr(e,t,Ie(Ie({},n),r))},r}var kr=function(e){return yr(gr,e)},wr=kr;Kt.forEach(function(e){wr[e]=kr(e)});var Ar=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ur(e),Yn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var o=r(Fn(dr(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Yn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function jr(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=vr.apply(void 0,ze([e],n,!1)),i="sc-global-".concat(rn(JSON.stringify(o))),a=new Ar(o,i),s=function(e){var n=rr(),r=t.useContext(hr),o=t.useRef(n.styleSheet.allocateGSInstance(i)).current;return n.styleSheet.server&&l(o,e,n.styleSheet,r,n.stylis),t.useLayoutEffect(function(){if(!n.styleSheet.server)return l(o,e,n.styleSheet,r,n.stylis),function(){return a.removeStyles(o,n.styleSheet)}},[o,e,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,o){if(a.isStatic)a.renderStyles(e,Ut,n,o);else{var i=Ie(Ie({},t),{theme:Gt(t,r,s.defaultProps)});a.renderStyles(e,i,n,o)}}return t.memo(s)}function Fr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Fn(vr.apply(void 0,ze([e],t,!1))),o=rn(r);return new ir(o,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=_n(),r=Fn([n&&'nonce="'.concat(n,'"'),"".concat(Lt,'="true"'),"".concat(Pt,'="').concat(Ot,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Dn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw Dn(2);var r=e.instance.toString();if(!r)return[];var o=((n={})[Lt]="",n[Pt]=Ot,n.dangerouslySetInnerHTML={__html:r},n),i=_n();return i&&(o.nonce=i),[t.createElement("style",Ie({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Yn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Dn(2);return t.createElement(or,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Dn(3)}})(),"__sc-".concat(Lt,"__");const Sr=n.p+"static/media/cake.2dc83bec29f46a24a4fb0d4de2525a9d.svg";var Cr=n(6360),Er=n(4802);const Dr='"Noto Sans", system-ui, sans-serif',$r=jr`
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
`,Mr=n.p+"static/media/win_desk.57f582e536e7ad45a69c.png";var Tr=n(579);const Ir=()=>(0,Tr.jsx)("svg",{width:"10",height:"1",viewBox:"0 0 10 1",children:(0,Tr.jsx)("rect",{width:"10",height:"1",fill:"currentColor"})}),zr=()=>(0,Tr.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",children:(0,Tr.jsx)("rect",{width:"10",height:"10",fill:"none",stroke:"currentColor"})}),Br=()=>(0,Tr.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",children:(0,Tr.jsx)("path",{d:"M1,1 L9,9 M9,1 L1,9",stroke:"currentColor",strokeWidth:"1.5"})}),Lr=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Rr=wr.div`
  margin-bottom: 48px;
`,Pr=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Or=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Nr=wr.div`
  margin-top: 2rem;
`,_r=(wr.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,wr.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url(${Mr});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
`),Hr=wr.div`
  width: 100%;
  height: 32px;
  background: rgba(248, 250, 252, 0.95);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: flex-end; // Windows 11 has controls right-aligned
  padding: 0;
  border-radius: 16px 16px 0 0;
`,Ur=wr.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
  gap: 4px;
`,Wr=(wr.span`
  font-size: 12px;
  color: #000;
  font-weight: 500;
`,wr.div`
  display: flex;
  align-items: center;
  height: 100%;
`),Vr=wr.button`
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
`,Gr=wr.div`
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
`,Kr=wr.div`
  padding: 1rem;
  flex: 1;
  cursor: default;
`,Yr=()=>{const[e,n]=(0,t.useState)({x:0,y:0}),[r,o]=(0,t.useState)(!1),[i,a]=(0,t.useState)({x:0,y:0});(0,t.useEffect)(()=>{const e=document.querySelector("#demo-container");if(e){const t=e.getBoundingClientRect(),r=(t.width-300)/2,o=(t.height-200)/2;n({x:r,y:o})}},[]);const s=()=>{o(!1)};return(0,Tr.jsxs)(Lr,{children:[(0,Tr.jsxs)(Rr,{children:[(0,Tr.jsx)(Pr,{children:"Canvas"}),(0,Tr.jsx)(Or,{children:"The canvas background provides a neutral, consistent foundation for application content. It ensures readability, visual clarity, and appropriate contrast with interactive components."})]}),(0,Tr.jsx)(Nr,{children:(0,Tr.jsx)(_r,{id:"demo-container",onMouseMove:e=>{if(r){const t=document.querySelector("#demo-container").getBoundingClientRect();let r=e.clientX-t.left-i.x,o=e.clientY-t.top-i.y;r=Math.max(0,Math.min(r,t.width-300)),o=Math.max(0,Math.min(o,t.height-200)),n({x:r,y:o})}},onMouseUp:s,onMouseLeave:s,children:(0,Tr.jsxs)(Gr,{onMouseDown:e=>{o(!0);const t=e.target.getBoundingClientRect();a({x:e.clientX-t.left,y:e.clientY-t.top})},style:{left:`${e.x}px`,top:`${e.y}px`},children:[(0,Tr.jsxs)(Hr,{children:[(0,Tr.jsx)(Ur,{}),(0,Tr.jsxs)(Wr,{children:[(0,Tr.jsx)(Vr,{children:(0,Tr.jsx)(Ir,{})}),(0,Tr.jsx)(Vr,{children:(0,Tr.jsx)(zr,{})}),(0,Tr.jsx)(Vr,{isClose:!0,children:(0,Tr.jsx)(Br,{})})]})]}),(0,Tr.jsx)(Kr,{})]})})})]})},Xr=JSON.parse('{"slate":{"50":"#f8fafc","100":"#f1f5f9","200":"#e2e8f0","300":"#cbd5e1","400":"#94a3b8","500":"#64748b","600":"#475569","700":"#334155","800":"#1e293b","900":"#0f172a"},"gray":{"50":"#f9fafb","100":"#f3f4f6","200":"#e5e7eb","300":"#d1d5db","400":"#9ca3af","500":"#6b7280","600":"#4b5563","700":"#374151","800":"#1f2937","900":"#111827"},"zinc":{"50":"#fafafa","100":"#f4f4f5","200":"#e4e4e7","300":"#d4d4d8","400":"#a1a1aa","500":"#71717a","600":"#52525b","700":"#3f3f46","800":"#27272a","900":"#18181b"},"neutral":{"50":"#fafafa","100":"#f5f5f5","200":"#e5e5e5","300":"#d4d4d4","400":"#a3a3a3","500":"#737373","600":"#525252","700":"#404040","800":"#262626","900":"#171717"},"stone":{"50":"#fafaf9","100":"#f5f5f4","200":"#e7e5e4","300":"#d6d3d1","400":"#a8a29e","500":"#78716c","600":"#57534e","700":"#44403c","800":"#292524","900":"#1c1917"},"red":{"50":"#fef2f2","100":"#fee2e2","200":"#fecaca","300":"#fca5a5","400":"#f87171","500":"#ef4444","600":"#dc2626","700":"#b91c1c","800":"#991b1b","900":"#7f1d1d"},"orange":{"50":"#fff7ed","100":"#ffedd5","200":"#fed7aa","300":"#fdba74","400":"#fb923c","500":"#f97316","600":"#ea580c","700":"#c2410c","800":"#9a3412","900":"#7c2d12"},"amber":{"50":"#fffbeb","100":"#fef3c7","200":"#fde68a","300":"#fcd34d","400":"#fbbf24","500":"#f59e0b","600":"#d97706","700":"#b45309","800":"#92400e","900":"#78350f"},"yellow":{"50":"#fefce8","100":"#fef9c3","200":"#fef08a","300":"#fde047","400":"#facc15","500":"#eab308","600":"#ca8a04","700":"#a16207","800":"#854d0e","900":"#713f12"},"lime":{"50":"#f7fee7","100":"#ecfccb","200":"#d9f99d","300":"#bef264","400":"#a3e635","500":"#84cc16","600":"#65a30d","700":"#4d7c0f","800":"#3f6212","900":"#365314"},"green":{"50":"#f0fdf4","100":"#dcfce7","200":"#bbf7d0","300":"#86efac","400":"#4ade80","500":"#22c55e","600":"#16a34a","700":"#15803d","800":"#166534","900":"#14532d"},"emerald":{"50":"#ecfdf5","100":"#d1fae5","200":"#a7f3d0","300":"#6ee7b7","400":"#34d399","500":"#10b981","600":"#059669","700":"#047857","800":"#065f46","900":"#064e3b"},"teal":{"50":"#f0fdfa","100":"#ccfbf1","200":"#99f6e4","300":"#5eead4","400":"#2dd4bf","500":"#14b8a6","600":"#0d9488","700":"#0f766e","800":"#115e59","900":"#134e4a"},"cyan":{"50":"#ecfeff","100":"#cffafe","200":"#a5f3fc","300":"#67e8f9","400":"#22d3ee","500":"#06b6d4","600":"#0891b2","700":"#0e7490","800":"#155e75","900":"#164e63"},"sky":{"50":"#f0f9ff","100":"#e0f2fe","200":"#bae6fd","300":"#7dd3fc","400":"#38bdf8","500":"#0ea5e9","600":"#0284c7","700":"#0369a1","800":"#075985","900":"#0c4a6e"},"blue":{"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},"indigo":{"50":"#eef2ff","100":"#e0e7ff","200":"#c7d2fe","300":"#a5b4fc","400":"#818cf8","500":"#6366f1","600":"#4f46e5","700":"#4338ca","800":"#3730a3","900":"#312e81"},"violet":{"50":"#f5f3ff","100":"#ede9fe","200":"#ddd6fe","300":"#c4b5fd","400":"#a78bfa","500":"#8b5cf6","600":"#7c3aed","700":"#6d28d9","800":"#5b21b6","900":"#4c1d95"},"purple":{"50":"#faf5ff","100":"#f3e8ff","200":"#e9d5ff","300":"#d8b4fe","400":"#c084fc","500":"#a855f7","600":"#9333ea","700":"#7e22ce","800":"#6b21a8","900":"#581c87"},"pink":{"50":"#fdf2f8","100":"#fce7f3","200":"#fbcfe8","300":"#f9a8d4","400":"#f472b6","500":"#ec4899","600":"#db2777","700":"#be185d","800":"#9d174d","900":"#831843"},"rose":{"50":"#fff1f2","100":"#ffe4e6","200":"#fecdd3","300":"#fda4af","400":"#fb7185","500":"#f43f5e","600":"#e11d48","700":"#be123c","800":"#9f1239","900":"#881337"},"common":{"white":"#ffffff","black":"#000000"},"brand":{"lenovo_signature_red":"#e1251b"}}'),qr="unchecked",Qr="checked",Jr="indeterminate",Zr={LIGHT:"light.a",DARK:"dark.a"},eo={SMALL:"small",MEDIUM:"medium",LARGE:"large"},to=wr.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.disabled?.5:1};
  user-select: none;
  position: relative;
  line-height: 1;
`,no=wr.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  pointer-events: none;
`,ro=wr.div`
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
`,oo=wr.div`
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
`,io=wr.svg`
  width: ${e=>{switch(e.size){case eo.SMALL:return"8px";case eo.LARGE:return"12px";default:return"10px"}}};
  height: ${e=>{switch(e.size){case eo.SMALL:return"8px";case eo.LARGE:return"12px";default:return"10px"}}};
  opacity: ${e=>e.visible?1:0};
  transition: opacity 0.2s ease;
`,ao=wr.div`
  width: ${e=>{switch(e.size){case eo.SMALL:return"6px";case eo.LARGE:return"10px";default:return"8px"}}};
  height: 2px;
  background-color: ${e=>e.color};
  border-radius: 1px;
  opacity: ${e=>e.visible?1:0};
  transition: opacity 0.2s ease;
`,so=wr.label`
  font-size: ${e=>{switch(e.size){case eo.SMALL:return"12px";case eo.LARGE:return"16px";default:return"14px"}}};
  font-weight: 600;
  color: ${e=>e.colors.label};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  line-height: 1;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
  margin-top: 3px;
`,lo=(0,t.forwardRef)((e,n)=>{let{checked:r=!1,indeterminate:o=!1,disabled:i=!1,label:a="Label",theme:s=Zr.LIGHT,size:l=eo.MEDIUM,onChange:c,onFocus:d,onBlur:u,id:p,name:f,value:h,className:m,style:g,"aria-describedby":x,...b}=e;const[v,y]=(0,t.useState)(!1),[k,w]=(0,t.useState)(!1),[A,j]=(0,t.useState)(!1),[F,S]=(0,t.useState)(r),[C,E]=(0,t.useState)(!1),D=void 0!==r,$=D?r:F,M=o?Jr:$?Qr:qr,T=((e,t,n,r,o,i)=>t===Zr.DARK?n?{border:"#9CA3AF",background:"#27272A",icon:"#9CA3AF",label:"#9CA3AF"}:e===Qr||e===Jr?{border:"#52525B",background:"#93C5FD",icon:"#18181B",label:"#D4D4D8"}:i?{border:"#71717A",background:"transparent",icon:"transparent",label:"#D4D4D8"}:o?{border:"#D4D4D8",background:"transparent",icon:"transparent",label:"#D4D4D8"}:{border:"#71717A",background:"transparent",icon:"transparent",label:"#D4D4D8"}:n?{border:"#64748B",background:"#F1F5F9",icon:"#475569",label:"#475569"}:e===Qr||e===Jr?i?{border:"#1D4ED8",background:"#1D4ED8",icon:"#FFFFFF",label:"#0F172A"}:o?{border:"#1E3A8A",background:"#1E3A8A",icon:"#FFFFFF",label:"#0F172A"}:{border:"#1D4ED8",background:"#1D4ED8",icon:"#FFFFFF",label:"#0F172A"}:i?{border:"#64748B",background:"transparent",icon:"transparent",label:"#0F172A"}:o?{border:"#0F172A",background:"transparent",icon:"transparent",label:"#0F172A"}:{border:"#64748B",background:"transparent",icon:"transparent",label:"#0F172A"})(M,s,i,0,k,A);(0,t.useEffect)(()=>{D||S(r)},[r,D]);const I=e=>{if(i)return;const t=e.target.checked;D||S(t),c&&c(e)},z=p||`checkbox-${Math.random().toString(36).substr(2,9)}`;return(0,Tr.jsxs)(to,{disabled:i,className:m,style:g,onClick:e=>{if(i)return;if("LABEL"===e.target.tagName)return;I({target:{checked:!$,type:"checkbox"}})},onMouseEnter:()=>{i||w(!0)},onMouseLeave:()=>{w(!1),j(!1)},onMouseDown:()=>{i||j(!0)},onMouseUp:()=>{j(!1)},children:[(0,Tr.jsx)(no,{ref:n,type:"checkbox",id:z,name:f,value:h,checked:$,disabled:i,onChange:I,onFocus:e=>{y(!0),E(!0),d&&d(e)},onBlur:e=>{y(!1),E(!1),u&&u(e)},onKeyDown:e=>{if(!i&&(" "===e.key||"Enter"===e.key)){e.preventDefault();I({target:{checked:!$,type:"checkbox"}})}},tabIndex:i?-1:0,role:"checkbox","aria-checked":$,"aria-describedby":x,...b}),(0,Tr.jsxs)(ro,{colors:T,disabled:i,theme:s,size:l,children:[(0,Tr.jsx)(oo,{visible:C,theme:s}),M===Qr&&(0,Tr.jsx)(io,{visible:!0,color:T.icon,size:l,viewBox:"0 0 24 24",children:(0,Tr.jsx)("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",stroke:T.icon,strokeWidth:"3",fill:"none"})}),M===Jr&&(0,Tr.jsx)(ao,{visible:!0,color:T.icon,size:l})]}),(0,Tr.jsx)(so,{htmlFor:z,disabled:i,colors:T,size:l,children:a})]})});lo.displayName="Checkbox";const co=lo,uo=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,po=wr.div`
  margin-bottom: 48px;
`,fo=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,ho=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,mo=wr.section`
  margin-bottom: 48px;
`,go=(wr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),xo=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,bo=wr.label`
  font-weight: 600;
  color: #0F172A;
`,vo=wr.select`
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
`,yo=(wr.input`
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
`,wr.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid ${e=>e.theme===Zr.DARK?"#52525B":"#E2E8F0"};
  border-radius: 8px;
  background-color: ${e=>e.theme===Zr.DARK?"#18181B":"#FFFFFF"};
`),ko=()=>{const[e,n]=(0,t.useState)(qr),[r,o]=(0,t.useState)(Zr.LIGHT),[i,a]=(0,t.useState)(!1);return(0,Tr.jsxs)(uo,{children:[(0,Tr.jsxs)(po,{children:[(0,Tr.jsx)(fo,{children:"Checkbox"}),(0,Tr.jsx)(ho,{children:"Interactive checkbox component for form inputs, selections, and toggles with support for checked, unchecked, indeterminate, and disabled states. The checkbox component follows accessibility best practices and includes proper ARIA attributes for screen readers."})]}),(0,Tr.jsxs)(mo,{children:[(0,Tr.jsxs)(go,{children:[(0,Tr.jsxs)(xo,{children:[(0,Tr.jsx)(bo,{children:"State"}),(0,Tr.jsxs)(vo,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:"default",children:"Default"}),(0,Tr.jsx)("option",{value:"indeterminate",children:"Indeterminate"}),(0,Tr.jsx)("option",{value:"disabled",children:"Disabled"}),(0,Tr.jsx)("option",{value:"disabled-indeterminate",children:"Disabled Indeterminate"})]})]}),(0,Tr.jsxs)(xo,{children:[(0,Tr.jsx)(bo,{children:"Theme"}),(0,Tr.jsxs)(vo,{value:r,onChange:e=>o(e.target.value),children:[(0,Tr.jsx)("option",{value:Zr.LIGHT,children:"Light.a"}),(0,Tr.jsx)("option",{value:Zr.DARK,children:"Dark.a"})]})]})]}),(0,Tr.jsx)(yo,{theme:r,children:(0,Tr.jsx)(co,{...(()=>{const t={label:"Label",theme:r};return"disabled"===e?(t.disabled=!0,t.checked=i):"indeterminate"===e?(t.disabled=!1,t.indeterminate=!0,t.checked=i):"disabled-indeterminate"===e?(t.disabled=!0,t.indeterminate=!0,t.checked=i):(t.disabled=!1,t.checked=i,t.onChange=e=>{a(e.target.checked)}),t})()})})]})]})},wo=wr.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s ease;
  border: 1px solid #e5e7eb;
  
  ${e=>e.elevated&&"\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  "}
  
  ${e=>e.hoverable&&"\n    cursor: pointer;\n    \n    &:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n    }\n  "}
  
  ${e=>{switch(e.variant){case"outlined":return"\n          background: transparent;\n          border: 2px solid #e5e7eb;\n          box-shadow: none;\n        ";case"elevated":return"\n          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n        ";default:return""}}}
`,Ao=wr.div`
  padding: 20px 24px;
  border-bottom: 1px solid #f3f4f6;
  
  ${e=>e.compact&&"\n    padding: 16px 20px;\n  "}
`,jo=wr.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${Xr.slate[900]};
  
  ${e=>e.compact&&"\n    font-size: 16px;\n  "}
`,Fo=wr.p`
  margin: 4px 0 0 0;
  font-size: 14px;
  color: ${Xr.slate[700]};
  
  ${e=>e.compact&&"\n    font-size: 13px;\n  "}
`,So=wr.div`
  padding: 24px;
  
  ${e=>e.compact&&"\n    padding: 20px;\n  "}
`,Co=wr.div`
  padding: 20px 24px;
  border-top: 1px solid #f3f4f6;
  background-color: #f9fafb;
  
  ${e=>e.compact&&"\n    padding: 16px 20px;\n  "}
`,Eo=wr.img`
  width: 100%;
  height: auto;
  display: block;
`,Do=e=>{let{children:t,variant:n="default",elevated:r=!1,hoverable:o=!1,compact:i=!1,onClick:a,...s}=e;return(0,Tr.jsx)(wo,{variant:n,elevated:r,hoverable:o,onClick:a,...s,children:t})};Do.Header=Ao,Do.Title=jo,Do.Subtitle=Fo,Do.Body=So,Do.Footer=Co,Do.Image=Eo;const $o=Do,Mo=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,To=wr.div`
  margin-bottom: 48px;
`,Io=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,zo=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Bo=wr.section`
  margin-bottom: 60px;
`,Lo=wr.h2`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
`,Ro=wr.p`
  font-size: 16px;
  color: #6b7280;
  margin: 0 0 32px 0;
  line-height: 1.6;
`,Po=wr.div`
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
`,Oo=wr.div`
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
`,No=wr.div`
  margin-bottom: 16px;
`,_o=wr.h3`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,Ho=wr.div`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
`,Uo=wr.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${e=>"latest"===e.type?"background: #eff6ff; color: #2563eb;":"major"===e.type?"background: #fef2f2; color: #dc2626;":"minor"===e.type?"background: #f0fdf4; color: #059669;":"background: #f3f4f6; color: #6b7280;"}
`,Wo=wr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Vo=wr.li`
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
`,Go=wr.span`
  color: #374151;
  line-height: 1.5;
`,Ko=(wr.div`
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
`,wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
`),Yo=()=>{const e=e=>{switch(e){case"added":return"Added";case"changed":return"Changed";case"removed":return"Removed";case"fixed":return"Fixed";default:return"Updated"}};return(0,Tr.jsxs)(Mo,{children:[(0,Tr.jsxs)(To,{children:[(0,Tr.jsx)(Io,{children:"Version Control"}),(0,Tr.jsx)(zo,{children:"Track the evolution of our design system through version history and changelog entries."})]}),(0,Tr.jsxs)(Bo,{children:[(0,Tr.jsx)(Lo,{children:"Current Version"}),(0,Tr.jsx)(Ro,{children:"We're currently on version 4.0.1, which represents our latest major release with significant improvements in accessibility and component functionality."}),(0,Tr.jsxs)($o,{elevated:!0,children:[(0,Tr.jsxs)($o.Header,{children:[(0,Tr.jsx)($o.Title,{children:"Version 4.0.1 - Latest Release"}),(0,Tr.jsx)($o.Subtitle,{children:"Released on March 15, 2024"})]}),(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)("p",{style:{margin:"0 0 16px 0",color:"#6b7280",lineHeight:"1.6"},children:"This release brings major improvements to our component library with enhanced accessibility, dark mode support, and performance optimizations."}),(0,Tr.jsxs)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,Tr.jsx)("span",{style:{background:"#eff6ff",color:"#2563eb",padding:"4px 8px",borderRadius:"4px",fontSize:"12px",fontWeight:"500"},children:"Latest Release"}),(0,Tr.jsx)("span",{style:{background:"#f0fdf4",color:"#059669",padding:"4px 8px",borderRadius:"4px",fontSize:"12px",fontWeight:"500"},children:"Production Ready"})]})]})]})]}),(0,Tr.jsxs)(Bo,{children:[(0,Tr.jsx)(Lo,{children:"Changelog"}),(0,Tr.jsx)(Ro,{children:"A complete history of all changes, improvements, and new features added to the design system."}),(0,Tr.jsx)(Po,{children:[{version:"4.0.1",date:"2024-03-15",type:"latest",isLatest:!0,isMajor:!0,description:"Major update with enhanced components and accessibility improvements",changes:[{type:"added",text:"Enhanced component library with improved accessibility"},{type:"added",text:"New color system with better contrast ratios"},{type:"added",text:"Improved documentation and examples"},{type:"added",text:"Advanced form components and validation"},{type:"added",text:"Dark mode support across all components"},{type:"added",text:"Performance optimizations and bug fixes"}]},{version:"3.0.0",date:"2024-02-15",type:"major",isMajor:!0,description:"Complete design system overhaul",changes:[{type:"added",text:"Redesigned component architecture"},{type:"added",text:"New theming system"},{type:"added",text:"Improved responsive design"},{type:"changed",text:"Updated color palette and typography"},{type:"changed",text:"Enhanced component APIs"}]},{version:"2.0.0",date:"2024-01-15",type:"major",isMajor:!0,description:"Major feature update",changes:[{type:"added",text:"Advanced component library"},{type:"added",text:"Interactive documentation"},{type:"added",text:"New design tokens system"},{type:"changed",text:"Improved accessibility standards"}]},{version:"1.0.0",date:"2024-01-01",type:"major",isMajor:!0,description:"Initial stable release",changes:[{type:"added",text:"Core component library"},{type:"added",text:"Basic documentation"},{type:"added",text:"Design tokens"},{type:"added",text:"Basic theming support"}]}].map((t,n)=>(0,Tr.jsxs)(Oo,{isLatest:t.isLatest,isMajor:t.isMajor,isMinor:t.isMinor,children:[(0,Tr.jsxs)(No,{children:[(0,Tr.jsxs)(_o,{children:["v",t.version,t.isLatest&&(0,Tr.jsx)(Uo,{type:"latest",children:"Latest"}),t.isMajor&&(0,Tr.jsx)(Uo,{type:"major",children:"Major"}),t.isMinor&&(0,Tr.jsx)(Uo,{type:"minor",children:"Minor"})]}),(0,Tr.jsx)(Ho,{children:t.date}),(0,Tr.jsx)("p",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:t.description})]}),(0,Tr.jsx)(Wo,{children:t.changes.map((t,n)=>(0,Tr.jsx)(Vo,{type:t.type,children:(0,Tr.jsxs)(Go,{children:[(0,Tr.jsxs)("strong",{children:[e(t.type),":"]})," ",t.text]})},n))})]},t.version))})]}),(0,Tr.jsxs)(Bo,{children:[(0,Tr.jsx)(Lo,{children:"Versioning Strategy"}),(0,Tr.jsx)(Ro,{children:"We follow semantic versioning (SemVer) to ensure clear communication about the nature of changes."}),(0,Tr.jsxs)(Ko,{children:[(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"Major Versions"}),(0,Tr.jsx)("p",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:"Incompatible API changes that may require updates to existing implementations. These releases include breaking changes and new major features."})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"Minor Versions"}),(0,Tr.jsx)("p",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:"New functionality added in a backwards-compatible manner. These releases include new features and improvements to existing components."})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"Patch Versions"}),(0,Tr.jsx)("p",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:"Backwards-compatible bug fixes and minor improvements. These releases focus on stability and bug fixes without new features."})]})})]})]}),(0,Tr.jsxs)(Bo,{children:[(0,Tr.jsx)(Lo,{children:"Upcoming Features"}),(0,Tr.jsx)(Ro,{children:"Planned features and improvements for future releases of the design system."}),(0,Tr.jsxs)(Ko,{children:[(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"v1.1.0 - Enhanced Components"}),(0,Tr.jsxs)("ul",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:[(0,Tr.jsx)("li",{children:"Dropdown component with search and multi-select"}),(0,Tr.jsx)("li",{children:"Table component with sorting and pagination"}),(0,Tr.jsx)("li",{children:"Toast notification system"}),(0,Tr.jsx)("li",{children:"Enhanced form validation"})]})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"v1.2.0 - Advanced Features"}),(0,Tr.jsxs)("ul",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:[(0,Tr.jsx)("li",{children:"Date picker component"}),(0,Tr.jsx)("li",{children:"File upload component"}),(0,Tr.jsx)("li",{children:"Rich text editor"}),(0,Tr.jsx)("li",{children:"Advanced data visualization"})]})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)("h3",{style:{margin:"0 0 12px 0",color:"#111827"},children:"v2.0.0 - Major Overhaul"}),(0,Tr.jsxs)("ul",{style:{margin:0,color:"#6b7280",lineHeight:"1.5"},children:[(0,Tr.jsx)("li",{children:"Dark mode support"}),(0,Tr.jsx)("li",{children:"Customizable theme system"}),(0,Tr.jsx)("li",{children:"Animation library integration"}),(0,Tr.jsx)("li",{children:"Performance optimizations"})]})]})})]})]})]})},Xo=wr.div`
  display: flex;
  flex-direction: column;
  min-width: 80px;
  height: 64px;
  position: relative;
  cursor: pointer;
`,qo=wr.div`
  height: 100%;
  width: 100%;
  background-color: ${e=>e.color};
`,Qo=wr.div`
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
`,Jo=wr.div`
  font-weight: 400;
  color: ${Xr.slate[900]};
  margin-bottom: 2px;
  font-size: 16px;
`,Zo=wr.div`
  font-family: monospace;
  color: ${Xr.slate[700]};
  font-size: 11px;
`,ei=e=>{let{name:t,hex:n,onCopy:r}=e;return(0,Tr.jsxs)(Xo,{onClick:async()=>{try{await navigator.clipboard.writeText(n),r&&r()}catch(e){console.error("Failed to copy:",e)}},children:[(0,Tr.jsx)(qo,{color:n}),(0,Tr.jsxs)(Qo,{children:[(0,Tr.jsx)(Jo,{children:t}),(0,Tr.jsx)(Zo,{children:n})]})]})};var ti=n(6485),ni=n(1132);const ri=JSON.parse('{"textPrimary":{"lightA":"#0f172a","darkA":"#d4d4d8","winHct":"#ffffff"},"textSecondary":{"lightA":"#334155","darkA":"#a1a1aa","winHct":"#ffffff"},"surfaceDisabled":{"lightA":"#9ca3af","darkA":"#71717a","winHct":"#a6a6a6"},"referenceBrand":{"lightA":"#e1251b","darkA":"#e1251b","winHct":"#e1251b"},"referencePrimary":{"lightA":"#1d4ed8","darkA":"#93c5fd","winHct":"#8ee3f0"},"referenceError":{"lightA":"#b91c1c","darkA":"#fca5a5","winHct":"#ffffff"},"referenceWarn":{"lightA":"#c2410c","darkA":"#fdba74","winHct":"#ffffff"},"referenceInfo":{"lightA":"#1d4ed8","darkA":"#60a5fa","winHct":"#ffffff"},"referenceSuccess":{"lightA":"#047857","darkA":"#34d399","winHct":"#ffffff"},"referenceErrorWeak":{"lightA":"#fef2f2","darkA":"#2f0808","winHct":"#202020"},"referenceWarnWeak":{"lightA":"#fff7ed","darkA":"#311104","winHct":"#202020"},"referenceInfoWeak":{"lightA":"#eff6ff","darkA":"#081437","winHct":"#202020"},"referenceSuccessWeak":{"lightA":"#ecfdf5","darkA":"#021f17","winHct":"#202020"},"referenceWarnStrong":{"lightA":"#9a3412","darkA":"#fdba74","winHct":"#ffffff"},"referenceErrorStrong":{"lightA":"#991b1b","darkA":"#fca5a5","winHct":"#ffffff"},"referenceInfoStrong":{"lightA":"#1e3a8a","darkA":"#93c5fd","winHct":"#ffffff"},"referenceSuccessStrong":{"lightA":"#065f46","darkA":"#047857","winHct":"#ffffff"},"referenceHyperlink":{"lightA":"#1d4ed8","darkA":"#1d4ed8","winHct":"#75e9fc"},"textOnPrimary":{"lightA":"#ffffff","darkA":"#18181b","winHct":"#202020"},"textOnSecondary":{"lightA":"#0f172a","darkA":"#f8fafc","winHct":"#ffffff"},"textOnPrimaryDisabled":{"lightA":"#9ca3af","darkA":"#9ca3af","winHct":"#202020"},"textOnSecondaryDisabled":{"lightA":"#94a3b8","darkA":"#9ca3af","winHct":"#a6a6a6"},"iconPrimary":{"lightA":"#0f172a","darkA":"#a1a1aa","winHct":"#ffffff"},"iconSecondary":{"lightA":"#0f172a","darkA":"#d4d4d8","winHct":"#ffffff"},"referenceHelper":{"lightA":"#475569","darkA":"#a1a1aa","winHct":"#ffffff"},"iconOnPrimary":{"lightA":"#ffffff","darkA":"#18181b","winHct":"#202020"},"iconOnSecondary":{"lightA":"#0f172a","darkA":"#f8fafc","winHct":"#202020"},"surfaceCanvas":{"lightA":"#f8fafc","darkA":"#000000","winHct":"#202020"},"surfaceCard":{"lightA":"#ffffff","darkA":"#18181b","winHct":"#202020"},"surfaceOnCard":{"lightA":"#f8fafc","darkA":"#000000","winHct":"#202020"},"surfaceContrast":{"lightA":"#0f172a","darkA":"#27272a","winHct":"#202020"},"textOnContrast":{"lightA":"#f1f5f9","darkA":"#0f172a","winHct":"#ffffff"},"surfaceButtonPrimary":{"lightA":"#1d4ed8","darkA":"#1d4ed8","winHct":"#8ee3f0"},"surfaceButtonSecondary":{"lightA":"#e2e8f0","darkA":"#cbd5e1","winHct":"#202020"},"referenceSecondary":{"lightA":"#cbd5e1","darkA":"#a1a1aa33","winHct":"#202020"},"surfaceButtonSecondaryHover":{"lightA":"#cbd5e1","darkA":"#94a3b8","winHct":"#8ee3f0"},"surfaceButtonSecondaryPress":{"lightA":"#e2e8f0","darkA":"#cbd5e1","winHct":"#8ee3f0"},"surfaceButtonPrimaryHover":{"lightA":"#1e3a8a","darkA":"#60a5fa","winHct":"#8ee3f0"},"surfaceButtonPrimaryPress":{"lightA":"#1d4ed8","darkA":"#1d4ed8","winHct":"#8ee3f0"},"referenceSurfaceDisabled":{"lightA":"#f1f5f9","darkA":"#27272a","winHct":"#202020"},"surfaceItem":{"lightA":"#ffffff","darkA":"#18181b","winHct":"#202020"},"surfaceItemHover":{"lightA":"#f1f5f9","darkA":"#27272a","winHct":"#202020"},"referencePrimaryWeaker":{"lightA":"#eff6ff","darkA":"#3b82f659","winHct":"#8ee3f0"},"surfaceItemDisabled":{"lightA":"#f1f5f9","darkA":"#f1f5f9","winHct":"#202020"},"surfaceInput":{"lightA":"#f8fafc","darkA":"#f8fafc","winHct":"#202020"},"surfaceInputHover":{"lightA":"#ffffff","darkA":"#27272a","winHct":"#202020"},"surfaceInputFocus":{"lightA":"#ffffff","darkA":"#27272a","winHct":"#202020"},"surfaceInputRest":{"lightA":"#ffffff","darkA":"#27272a","winHct":"#202020"},"surfaceInputDisabled":{"lightA":"#f1f5f9","darkA":"#f1f5f9","winHct":"#202020"},"surfaceInputError":{"lightA":"#fef2f2","darkA":"#fef2f2","winHct":"#202020"},"borderPrimary":{"lightA":"#cbd5e1","darkA":"#52525b","winHct":"#ffffff"},"borderInputHover":{"lightA":"#64748b","darkA":"#71717a","winHct":"#ffffff"},"borderInputRest":{"lightA":"#64748b","darkA":"#71717a","winHct":"#ffffff"},"borderInputError":{"lightA":"#b91c1c","darkA":"#b91c1c","winHct":"#ffffff"},"borderInput":{"lightA":"#64748b","darkA":"#71717a","winHct":"#ffffff"},"borderDisabled":{"lightA":"#9ca3af","darkA":"#9ca3af","winHct":"#9ca3af"},"borderFocus":{"lightA":"#1d4ed8","darkA":"#1d4ed8","winHct":"#75e9fc"},"referenceFocus":{"lightA":"#1d4ed8","darkA":"#93c5fd","winHct":"#75e9fc"},"borderWeak":{"lightA":"#e2e8f0","darkA":"#3f3f46","winHct":"#ffffff"},"referenceOnSemantic":{"lightA":"#0f172a","darkA":"#d4d4d8","winHct":"#ffffff"},"borderContrast":{"lightA":"#ffffff","darkA":"#18181b","winHct":"#202020"},"referencePrimaryStrong":{"lightA":"#1e40af","darkA":"#60a5fa","winHct":"#8ee3f0"},"textOnPrimaryWeak":{"lightA":"#1d4ed8","darkA":"#1d4ed8","winHct":"#202020"},"borderStrong":{"lightA":"#64748b","darkA":"#71717a","winHct":"#ffffff"},"textOnItemHover":{"lightA":"#0f172a","darkA":"#f4f4f5","winHct":"#ffffff"},"iconOnPrimaryWeak":{"lightA":"#1e40af","darkA":"#1d4ed8","winHct":"#202020"},"referenceSecondaryStrong":{"lightA":"#94a3b8","darkA":"#a1a1aa19","winHct":"#202020"},"textOnSecondaryWeak":{"lightA":"#0f172a","darkA":"#18181b","winHct":"#202020"},"iconOnSecondaryWeak":{"lightA":"#0f172a","darkA":"#0f172a","winHct":"#202020"},"referenceSecondaryWeak":{"lightA":"#e2e8f0","darkA":"#64748b3f","winHct":"#8ee3f0"},"surfaceOnCanvas":{"lightA":"#f1f5f9","darkA":"#18181b","winHct":"#202020"},"surfaceItemSelected":{"lightA":"#eff6ff","darkA":"#60a5fa0d","winHct":"#202020"},"textOnItemSelected":{"lightA":"#1d4ed8","darkA":"#1d4ed8","winHct":"#ffffff"},"iconOnItemSelected":{"lightA":"#1d4ed8","darkA":"#1d4ed8","winHct":"#ffffff"},"surfaceItemSelectedOnCanvas":{"lightA":"#eff6ff","darkA":"#18181b","winHct":"#202020"},"surfaceItemHoverOnCanvas":{"lightA":"#f8fafc","darkA":"#1d4ed819","winHct":"#202020"},"textOnSemantic":{"lightA":"#ffffff","darkA":"#18181b","winHct":"#202020"},"surfaceInputOnCanvas":{"lightA":"#f1f5f9","darkA":"#27272a","winHct":"#202020"},"surfaceButtonDestructive":{"lightA":"#b91c1c","darkA":"#b91c1c","winHct":"#8ee3f0"},"surfaceButtonDestructiveHover":{"lightA":"#7f1d1d","darkA":"#ef4444","winHct":"#8ee3f0"},"surfaceButtonDestructivePress":{"lightA":"#b91c1c","darkA":"#b91c1c","winHct":"#8ee3f0"},"referenceOnDisabled":{"lightA":"#9ca3af","darkA":"#9ca3af","winHct":"#202020"},"iconOnCanvasPrimary":{"lightA":"#1d4ed8","darkA":"#1d4ed8","winHct":"#8ee3f0"},"textOnCanvasPrimary":{"lightA":"#1d4ed8","darkA":"#1d4ed8","winHct":"#ffffff"},"textOnCanvasSecondary":{"lightA":"#334155","darkA":"#334155","winHct":"#ffffff"},"borderZero":{"lightA":"#ffffff00","darkA":"#64748b","winHct":"#ffffff"},"surfaceModal":{"lightA":"#ffffff","darkA":"#27272a","winHct":"#202020"},"surfaceItemSelectedHover":{"lightA":"#dbeafe","darkA":"#60a5fa1a","winHct":"#202020"},"referencePrimaryStronger":{"lightA":"#1e3a8a","darkA":"#93c5fd","winHct":"#8ee3f0"},"referenceSecondaryStronger":{"lightA":"#64748b","darkA":"#94a3b8","winHct":"#202020"},"referencePrimaryWeak":{"lightA":"#dbeafe","darkA":"#3b82f672","winHct":"#8ee3f0"},"surfaceToggleSecondary":{"lightA":"#334155","darkA":"#cbd5e1","winHct":"#ffffff"},"surfaceToggleSecondaryHover":{"lightA":"#0f172a","darkA":"#e2e8f0","winHct":"#ffffff"},"iconToggleOnSecondary":{"lightA":"#f8fafc","darkA":"#0f172a","winHct":"#ffffff"},"borderInputSuccess":{"lightA":"#047857","darkA":"#047857","winHct":"#ffffff"},"referenceInfoA50":{"lightA":"#1d4ed80c","darkA":"#60a5fa0c","winHct":"#ffffff"},"referenceInfoA100":{"lightA":"#1d4ed819","darkA":"#60a5fa19","winHct":"#ffffff"},"referenceWarnA50":{"lightA":"#c2410c0c","darkA":"#fdba740c","winHct":"#ffffff"},"referenceWarnA100":{"lightA":"#c2410c19","darkA":"#fdba7419","winHct":"#ffffff"},"referenceErrorA50":{"lightA":"#b91c1c0c","darkA":"#f871710c","winHct":"#ffffff"},"referenceErrorA100":{"lightA":"#b91c1c19","darkA":"#f8717119","winHct":"#ffffff"},"referenceSuccessA50":{"lightA":"#0478570c","darkA":"#34d3990c","winHct":"#ffffff"},"referenceSuccessA100":{"lightA":"#04785719","darkA":"#34d39919","winHct":"#ffffff"},"textPrimaryOnInfoHover":{"lightA":"#1e3a8a","darkA":"#1e3a8a","winHct":"#ffffff"},"textPrimaryOnInfoPress":{"lightA":"#1e3a8a","darkA":"#1e3a8a","winHct":"#ffffff"},"textPrimaryOnSuccessHover":{"lightA":"#065f46","darkA":"#065f46","winHct":"#ffffff"},"textPrimaryOnSuccessPress":{"lightA":"#065f46","darkA":"#065f46","winHct":"#ffffff"},"textPrimaryOnWarnHover":{"lightA":"#9a3412","darkA":"#9a3412","winHct":"#ffffff"},"textPrimaryOnWarnPress":{"lightA":"#9a3412","darkA":"#9a3412","winHct":"#ffffff"},"textPrimaryOnErrorHover":{"lightA":"#991b1b","darkA":"#991b1b","winHct":"#ffffff"},"textPrimaryOnErrorPress":{"lightA":"#991b1b","darkA":"#991b1b","winHct":"#ffffff"},"surfaceInlineAlert":{"lightA":"#f8fafc","darkA":"#27272a","winHct":"#202020"},"referenceErrorWeaker":{"lightA":"#fee2e2","darkA":"#3d0a0a","winHct":"#202020"},"referenceSuccessWeaker":{"lightA":"#d1fae5","darkA":"#033d2d","winHct":"#202020"},"referenceWarnWeaker":{"lightA":"#fff7ed","darkA":"#3d1504","winHct":"#202020"},"referenceInfoWeaker":{"lightA":"#eff6ff","darkA":"#0b1d51","winHct":"#202020"},"surfaceInlineAlertOnModal":{"lightA":"#f8fafc","darkA":"#18181b","winHct":"#202020"},"surfaceRangeHover":{"lightA":"#e2e8f0","darkA":"#1d4ed80c","winHct":"#ffffff"},"surfaceRangeSelected":{"lightA":"#eff6ff","darkA":"#1d4ed819","winHct":"#ffffff"},"referenceHyperlinkHovered":{"lightA":"#1e3a8a","darkA":"#1e3a8a","winHct":"#75e9fc"},"surfaceOnCardHover":{"lightA":"#f1f5f9","darkA":"#27272a","winHct":"#202020"},"textDisabled":{"lightA":"#475569","darkA":"#9ca3af","winHct":"#ffffff"},"surfaceButtonDisabled":{"lightA":"#e5e7eb","darkA":"#1f2937","winHct":"#a6a6a6"},"iconDisabled":{"lightA":"#64748b","darkA":"#9ca3af","winHct":"#a6a6a6"},"textTextButtonPrimary":{"lightA":"#1d4ed8","darkA":"#1d4ed8","winHct":"#8ee3f0"},"textTextButtonPrimaryHover":{"lightA":"#1e3a8a","darkA":"#1d4ed8","winHct":"#8ee3f0"},"textTextButtonPrimaryPressed":{"lightA":"#1e3a8a","darkA":"#1d4ed8","winHct":"#8ee3f0"},"iconTextButtonPrimary":{"lightA":"#1d4ed8","darkA":"#1d4ed8","winHct":"#8ee3f0"},"iconTextButtonPrimaryHover":{"lightA":"#1e3a8a","darkA":"#1d4ed8","winHct":"#8ee3f0"},"iconTextButtonPrimaryPressed":{"lightA":"#1e3a8a","darkA":"#1d4ed8","winHct":"#8ee3f0"},"textTextButtonSecondary":{"lightA":"#334155","darkA":"#e2e8f0","winHct":"#8ee3f0"},"textTextButtonSecondaryHover":{"lightA":"#1e293b","darkA":"#e2e8f0","winHct":"#8ee3f0"},"textTextButtonSecondaryPressed":{"lightA":"#0f172a","darkA":"#e2e8f0","winHct":"#8ee3f0"},"iconTextButtonSecondary":{"lightA":"#334155","darkA":"#e2e8f0","winHct":"#8ee3f0"},"iconTextButtonSecondaryHover":{"lightA":"#1e293b","darkA":"#e2e8f0","winHct":"#8ee3f0"},"iconTextButtonSecondaryPressed":{"lightA":"#334155","darkA":"#e2e8f0","winHct":"#8ee3f0"},"iconIconButtonPrimary":{"lightA":"#1d4ed8","darkA":"#1d4ed8","winHct":"#8ee3f0"},"iconIconButtonPrimaryHover":{"lightA":"#1e40af","darkA":"#1d4ed8","winHct":"#8ee3f0"},"iconIconButtonPrimaryPressed":{"lightA":"#1e3a8a","darkA":"#1d4ed8","winHct":"#8ee3f0"},"iconIconButtonSecondary":{"lightA":"#1e293b","darkA":"#e2e8f0","winHct":"#8ee3f0"},"iconIconButtonSecondaryHover":{"lightA":"#0f172a","darkA":"#e2e8f0","winHct":"#8ee3f0"},"iconIconButtonSecondaryPressed":{"lightA":"#0f172a","darkA":"#e2e8f0","winHct":"#8ee3f0"},"surfaceTextButtonSecondaryHover":{"lightA":"#e2e8f0","darkA":"#e2e8f0","winHct":"#ffffff"},"surfaceTextButtonPrimaryHover":{"lightA":"#dbeafe","darkA":"#dbeafe","winHct":"#ffffff"},"surfaceTextButtonSecondaryPress":{"lightA":"#cbd5e1","darkA":"#f8fafc","winHct":"#ffffff"},"surfaceTextButtonPrimaryPress":{"lightA":"#bfdbfe","darkA":"#eff6ff","winHct":"#ffffff"},"surfaceIconButtonPrimaryHover":{"lightA":"#dbeafe","darkA":"#dbeafe","winHct":"#ffffff"},"surfaceIconButtonPrimaryPress":{"lightA":"#bfdbfe","darkA":"#eff6ff","winHct":"#ffffff"},"surfaceIconButtonSecondaryHover":{"lightA":"#e2e8f0","darkA":"#e2e8f0","winHct":"#ffffff"},"surfaceIconButtonSecondaryPress":{"lightA":"#cbd5e1","darkA":"#f8fafc","winHct":"#ffffff"},"textOnSecondaryHover":{"lightA":"#0f172a","darkA":"#f8fafc","winHct":"#ffffff"},"textOnSecondaryPress":{"lightA":"#0f172a","darkA":"#f8fafc","winHct":"#ffffff"},"iconOnSecondaryHover":{"lightA":"#1e293b","darkA":"#f8fafc","winHct":"#8ee3f0"},"surfaceToggleButtonSecondary":{"lightA":"#ffffff","darkA":"#ffffff","winHct":"#ffffff"},"textToggleButtonSecondary":{"lightA":"#0f172a","darkA":"#f1f5f9","winHct":"#8ee3f0"},"iconToggleButtonSecondary":{"lightA":"#0f172a","darkA":"#f4f4f5","winHct":"#8ee3f0"},"surfaceToggleButtonSecondaryHover":{"lightA":"#e2e8f0","darkA":"#e2e8f0","winHct":"#ffffff"},"surfaceToggleButtonSecondaryPress":{"lightA":"#1d4ed8","darkA":"#1d4ed8","winHct":"#ffffff"},"textToggleButtonSecondaryHover":{"lightA":"#0f172a","darkA":"#e2e8f0","winHct":"#8ee3f0"},"iconToggleButtonSecondaryHover":{"lightA":"#0f172a","darkA":"#e2e8f0","winHct":"#8ee3f0"},"surfaceToggleButtonPrimaryPress":{"lightA":"#ffffff","darkA":"#ffffff","winHct":"#ffffff"},"textToggleButtonPrimaryPress":{"lightA":"#0f172a","darkA":"#f8fafc","winHct":"#8ee3f0"},"iconToggleButtonPrimaryPress":{"lightA":"#0f172a","darkA":"#f8fafc","winHct":"#8ee3f0"},"textToggleButtonSecondaryPress":{"lightA":"#f8fafc","darkA":"#f8fafc","winHct":"#8ee3f0"},"iconToggleButtonSecondaryPress":{"lightA":"#f8fafc","darkA":"#f8fafc","winHct":"#8ee3f0"},"surfaceToggleDisabled":{"lightA":"#e5e7eb","darkA":"#1f2937","winHct":"#a6a6a6"},"textBreadcrumbPressed":{"lightA":"#1e3a8a","darkA":"#60a5fa","winHct":"#ffffff"},"referenceSecondaryWeaker":{"lightA":"#f8fafc","darkA":"#64748b59","winHct":"#8ee3f0"},"borderStronger":{"lightA":"#0f172a","darkA":"#d4d4d8","winHct":"#ffffff"},"borderRadioPrimary":{"lightA":"#1d4ed8","darkA":"#93c5fd","winHct":"#ffffff"},"borderRadioPrimaryHover":{"lightA":"#1e40af","darkA":"#1e3a8a","winHct":"#ffffff"},"borderRadioPrimaryPress":{"lightA":"#1d4ed8","darkA":"#1d4ed8","winHct":"#ffffff"},"surfaceRadioPrimaryHover":{"lightA":"#dbeafe","darkA":"#dbeafe","winHct":"#ffffff"},"surfaceRadioPrimaryPress":{"lightA":"#eff6ff","darkA":"#eff6ff","winHct":"#ffffff"},"surfaceRadioSecondaryHover":{"lightA":"#e2e8f0","darkA":"#e2e8f0","winHct":"#ffffff"},"surfaceRadioSecondaryPress":{"lightA":"#f8fafc","darkA":"#f8fafc","winHct":"#ffffff"},"borderRadioSecondary":{"lightA":"#64748b","darkA":"#64748b","winHct":"#ffffff"},"borderRadioSecondaryHover":{"lightA":"#0f172a","darkA":"#0f172a","winHct":"#ffffff"},"borderRadioSecondaryPress":{"lightA":"#64748b","darkA":"#64748b","winHct":"#ffffff"},"surfaceChipError":{"lightA":"#fef2f2","darkA":"#991b1b","winHct":"#ffffff"},"surfaceChipWarn":{"lightA":"#fff7ed","darkA":"#9a3412","winHct":"#ffffff"},"surfaceChipInfo":{"lightA":"#eff6ff","darkA":"#1e3a8a","winHct":"#ffffff"},"surfaceChipSuccess":{"lightA":"#ecfdf5","darkA":"#065f46","winHct":"#ffffff"},"textChipOnSemantic":{"lightA":"#0f172a","darkA":"#ffffff","winHct":"#202020"},"iconChipOnError":{"lightA":"#b91c1c","darkA":"#ffffff","winHct":"#202020"},"iconChipOnWarn":{"lightA":"#c2410c","darkA":"#ffffff","winHct":"#202020"},"iconChipOnInfo":{"lightA":"#1d4ed8","darkA":"#ffffff","winHct":"#202020"},"iconChipOnSuccess":{"lightA":"#047857","darkA":"#ffffff","winHct":"#202020"},"surfaceTabPrimaryRest":{"lightA":"#ffffff","darkA":"#18181b","winHct":"#202020"},"surfaceTabPrimarySelectedRest":{"lightA":"#eff6ff","darkA":"#18181b","winHct":"#202020"},"surfaceTabPrimaryHover":{"lightA":"#f8fafc","darkA":"#1d4ed819","winHct":"#202020"},"surfaceTabPrimaryDisabled":{"lightA":"#f1f5f9","darkA":"#27272a","winHct":"#202020"},"textTabPrimaryRest":{"lightA":"#0f172a","darkA":"#d4d4d8","winHct":"#ffffff"},"textTabPrimarySelectedRest":{"lightA":"#1d4ed8","darkA":"#93c5fd","winHct":"#ffffff"},"textTabPrimaryDisabled":{"lightA":"#475569","darkA":"#9ca3af","winHct":"#ffffff"},"borderTabPrimarySelectedRest":{"lightA":"#1d4ed8","darkA":"#93c5fd","winHct":"#8ee3f0"},"iconTabScrollRest":{"lightA":"#0f172a","darkA":"#d4d4d8","winHct":"#ffffff"},"iconTabScrollHover":{"lightA":"#0f172a","darkA":"#a1a1aa","winHct":"#ffffff"},"iconTabScrollDisabled":{"lightA":"#64748b","darkA":"#9ca3af","winHct":"#a6a6a6"}}'),oi={XSMALL:"xsml",SMALL:"sml",LARGE:"lrg"};let ii;try{ii="string"===typeof ri?JSON.parse(ri):ri}catch(ny){console.error("Failed to parse cake-color-tokens.json:",ny),ii={}}const ai=(e,t)=>{const n=t?"darkA":"lightA";if(ii[e]&&ii[e][n])return ii[e][n];const r={borderPrimary:{lightA:"#CBD5E1",darkA:"#52525B"},referencePrimary:{lightA:"#1D4ED8",darkA:"#93C5FD"}};return r[e]?r[e][n]:(console.warn(`Color token "${e}" not found in cake-color-tokens.json`),t?"#52525B":"#CBD5E1")},si=e=>{switch(e){case oi.XSMALL:return"16px";case oi.SMALL:return"24px";case oi.LARGE:return"64px";default:return"24px"}},li=Fr`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,ci=wr.div`
  width: ${e=>si(e.size)};
  height: ${e=>si(e.size)};
  border: 2px solid ${e=>ai("borderPrimary",e.isDarkMode)};
  border-top: 2px solid ${e=>ai("referencePrimary",e.isDarkMode)};
  border-radius: 50%;
  animation: ${li} 0.8s linear infinite;
  display: inline-block;
  box-sizing: border-box;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    border-top-color: ${e=>ai("referencePrimary",e.isDarkMode)};
  }
`,di=e=>{let{size:t=oi.SMALL,isDarkMode:n=!1,className:r,ariaLabel:o="Loading",...i}=e;return(0,Tr.jsx)(ci,{size:t,isDarkMode:n,className:r,role:"status","aria-label":o,...i})},ui={PRIMARY:"primary",SECONDARY:"secondary",DANGER:"danger",TEXT:"text",ICON:"icon"},pi={PRIMARY:"primary",SECONDARY:"secondary"},fi={PRIMARY:"primary",SECONDARY:"secondary"},hi={SMALL:"small",MEDIUM:"medium",LARGE:"large",XLARGE:"xlarge"},mi={NONE:"none",LEFT:"left",RIGHT:"right"},gi={PILL:"pill",SQUARE:"square"},xi=(e,t)=>t===ui.ICON?e===hi.SMALL?oi.XSMALL:oi.SMALL:e===hi.LARGE?oi.SMALL:oi.XSMALL,bi=wr.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  
  /* Track hover state for text color changes */
  &:hover {
    color: ${e=>e.$disabled||e.$loading?e.isDarkMode?"#9CA3AF":"#475569":e.variant===ui.ICON?e.iconVariant===fi.PRIMARY?e.isDarkMode?"#93C5FD":"#1E40AF":e.isDarkMode?"#E2E8F0":"#0F172A":e.variant===ui.TEXT?e.textVariant===pi.PRIMARY?e.isDarkMode?"#93C5FD":"#1E3A8A":e.isDarkMode?"#E2E8F0":"#1E293B":e.color};
  }
  
  /* Track pressed state for text color changes */
  &:active {
    color: ${e=>e.$disabled||e.$loading?e.isDarkMode?"#9CA3AF":"#475569":e.variant===ui.ICON?e.iconVariant===fi.PRIMARY?e.isDarkMode?"#93C5FD":"#1E3A8A":e.isDarkMode?"#E2E8F0":"#0F172A":e.variant===ui.TEXT?e.textVariant===pi.PRIMARY?e.isDarkMode?"#93C5FD":"#1E3A8A":e.isDarkMode?"#E2E8F0":"#0F172A":e.color};
  }
  padding: ${e=>{if(e.variant===ui.ICON)return"0";return`${e.size===hi.LARGE?"14px":"10px"} ${e.size===hi.LARGE?"24px":"20px"}`}};
  height: ${e=>{if(e.variant===ui.ICON)switch(e.size){case hi.SMALL:return"24px";case hi.MEDIUM:return"32px";case hi.LARGE:return"40px";case hi.XLARGE:return"48px";default:return"32px"}return e.size===hi.LARGE?"44px":"36px"}};
  width: ${e=>e.variant===ui.ICON?"auto":"fit-content"};
  aspect-ratio: ${e=>e.variant===ui.ICON?"1 / 1":"auto"};
  max-width: ${e=>e.variant===ui.ICON?"none":"264px"};
  display: ${e=>(e.variant,ui.ICON,"inline-flex")};
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
    font-size: ${e=>e.size===hi.LARGE?"1rem":"0.875rem"};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;
    vertical-align: baseline;
  }
  
  background-color: ${e=>e.$disabled||e.$loading?e.variant===ui.TEXT||e.variant===ui.ICON?"transparent":e.isDarkMode?"rgba(100, 116, 139, 0.2)":"rgba(203, 213, 225, 0.5)":((e,t)=>{if(e===ui.ICON)return"transparent";if(e===ui.TEXT)return"transparent";if(t)switch(e){case ui.PRIMARY:return"#93C5FD";case ui.SECONDARY:return"#CBD5E1";case ui.DANGER:return"#FCA5A5";default:return"#93C5FD"}switch(e){case ui.PRIMARY:return"#1D4ED8";case ui.SECONDARY:return"#E2E8F0";case ui.DANGER:return"#B91C1C";default:return"#1D4ED8"}})(e.variant,e.isDarkMode)};
  color: ${e=>e.$disabled||e.$loading?e.isDarkMode?"#9CA3AF":"#475569":((e,t,n,r)=>{if(e===ui.ICON)return r===fi.PRIMARY?t?"#93C5FD":"#1D4ED8":t?"#E2E8F0":"#1E293B";if(e===ui.TEXT)return n===pi.PRIMARY?t?"#93C5FD":"#1D4ED8":t?"#E2E8F0":"#334155";if(t)switch(e){case ui.PRIMARY:return"#18181B";case ui.SECONDARY:return"#000000";case ui.DANGER:default:return"#18181B"}switch(e){case ui.PRIMARY:return"#FFFFFF";case ui.SECONDARY:return"#0F172A";case ui.DANGER:default:return"#FFFFFF"}})(e.variant,e.isDarkMode,e.textVariant,e.iconVariant)};
  border: none;
  border-radius: ${e=>e.variant===ui.ICON?e.buttonStyle===gi.PILL?"100%":"4px":e.buttonStyle===gi.PILL?"100px":"4px"};
  font-family: ${Dr};
  font-weight: 600;
  font-size: ${e=>e.size===hi.LARGE?"1rem":"0.875rem"};
  line-height: 1.2;
  cursor: ${e=>e.$disabled||e.$loading?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  user-select: none;
  gap: 8px;

  &:hover {
    background-color: ${e=>e.$disabled||e.$loading?e.variant===ui.TEXT||e.variant===ui.ICON?"transparent":e.isDarkMode?"rgba(100, 116, 139, 0.2)":"rgba(203, 213, 225, 0.5)":((e,t,n,r)=>{if(e===ui.ICON)return r===fi.PRIMARY?t?"rgba(59, 130, 246, 0.45)":"#DBEAFE":t?"rgba(100, 116, 139, 0.25)":"#E2E8F0";if(e===ui.TEXT)return t?n===pi.PRIMARY?"rgba(59, 130, 246, 0.45)":"rgba(100, 116, 139, 0.25)":n===pi.PRIMARY?"#DBEAFE":"#E2E8F0";if(t)switch(e){case ui.PRIMARY:return"#60A5FA";case ui.SECONDARY:return"#94A3B8";case ui.DANGER:return"#EF4444";default:return"#60A5FA"}switch(e){case ui.PRIMARY:return"#1E3A8A";case ui.SECONDARY:return"#CBD5E1";case ui.DANGER:return"#7F1D1D";default:return"#1E3A8A"}})(e.variant,e.isDarkMode,e.textVariant,e.iconVariant)};
  }

  &:active {
    background-color: ${e=>e.$disabled||e.$loading?e.variant===ui.TEXT||e.variant===ui.ICON?"transparent":e.isDarkMode?"rgba(100, 116, 139, 0.2)":"rgba(203, 213, 225, 0.5)":((e,t,n,r)=>{if(e===ui.ICON)return r===fi.PRIMARY?t?"rgba(59, 130, 246, 0.35)":"#BFDBFE":t?"rgba(100, 116, 139, 0.35)":"#CBD5E1";if(e===ui.TEXT)return t?n===pi.PRIMARY?"rgba(59, 130, 246, 0.35)":"rgba(100, 116, 139, 0.35)":n===pi.PRIMARY?"#BFDBFE":"#CBD5E1";if(t)switch(e){case ui.PRIMARY:return"#93C5FD";case ui.SECONDARY:return"#CBD5E1";case ui.DANGER:return"#FCA5A5";default:return"#93C5FD"}switch(e){case ui.PRIMARY:return"#1D4ED8";case ui.SECONDARY:return"#E2E8F0";case ui.DANGER:return"#B91C1C";default:return"#1D4ED8"}})(e.variant,e.isDarkMode,e.textVariant,e.iconVariant)};
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${e=>{const t=e.isDarkMode?"#93C5FD":"#1D4ED8";return e.variant===ui.ICON?`0 0 0 2px ${t}`:`0 0 0 2px ${e.isDarkMode?"#18181B":"#FFFFFF"}, 0 0 0 5px ${t}`}};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${e=>{if(e.variant===ui.ICON)switch(e.size){case hi.SMALL:return"16px";case hi.MEDIUM:return"20px";case hi.LARGE:return"24px";case hi.XLARGE:return"28px";default:return"20px"}return e.size===hi.LARGE?"20px":"16px"}};
    height: ${e=>{if(e.variant===ui.ICON)switch(e.size){case hi.SMALL:return"16px";case hi.MEDIUM:return"20px";case hi.LARGE:return"24px";case hi.XLARGE:return"28px";default:return"20px"}return e.size===hi.LARGE?"20px":"16px"}};
    flex-shrink: 0;
    color: ${e=>e.$disabled||e.$loading?e.isDarkMode?"#9CA3AF":"#475569":"inherit"};

    svg {
      width: 100%;
      height: 100%;
    }
  }
`,vi=e=>{let{variant:t=ui.PRIMARY,textVariant:n=pi.PRIMARY,iconVariant:r=fi.PRIMARY,size:o=hi.MEDIUM,iconPosition:i=mi.NONE,buttonStyle:a=gi.PILL,label:s="Button",disabled:l=!1,loading:c=!1,isDarkMode:d=!1,className:u,onClick:p,customIcon:f,...h}=e;const m=t===ui.ICON,g=(mi.NONE,()=>f||(m?(0,Tr.jsx)(ni.A,{}):(0,Tr.jsx)(ti.A,{})));return(0,Tr.jsxs)(bi,{variant:t,textVariant:n,iconVariant:r,size:o,buttonStyle:a,$disabled:l,$loading:c,isDarkMode:d,className:u,onClick:e=>{l||c||null===p||void 0===p||p(e)},"aria-disabled":l||c,...h,children:[!c&&(m||i===mi.LEFT)&&(0,Tr.jsx)("span",{className:"icon",children:g()}),!m&&(0,Tr.jsx)("span",{className:"button-text",children:s}),!c&&!m&&i===mi.RIGHT&&(0,Tr.jsx)("span",{className:"icon",children:g()}),c&&(0,Tr.jsx)(di,{size:xi(o,t),isDarkMode:d,ariaLabel:"Loading"})]})};var yi=n(8348),ki=n(9778),wi=n(3102),Ai=n(1528);const ji={TOAST:"toast",INLINE:"inline"},Fi={SIMPLE:"simple",ADVANCED:"advanced"},Si={SUCCESS:"success",WARNING:"warning",ERROR:"error",INFO:"info"},Ci={LIGHT:"light.a",DARK:"dark.a"},Ei={TOP_RIGHT:"top-right",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",TOP_CENTER:"top-center",BOTTOM_CENTER:"bottom-center"},Di=(e,t)=>{const n=t===Ci.DARK,r={[Si.SUCCESS]:{light:{background:"#FFFFFF",border:"#047857",icon:"#047857",text:"#0F172A",metadata:"#334155"},dark:{background:"#27272A",border:"#34D399",icon:"#34D399",text:"#D4D4D8",metadata:"#A1A1AA"}},[Si.WARNING]:{light:{background:"#FFFFFF",border:"#C2410C",icon:"#C2410C",text:"#0F172A",metadata:"#334155"},dark:{background:"#27272A",border:"#FDBA74",icon:"#FDBA74",text:"#D4D4D8",metadata:"#A1A1AA"}},[Si.ERROR]:{light:{background:"#FFFFFF",border:"#B91C1C",icon:"#B91C1C",text:"#0F172A",metadata:"#334155"},dark:{background:"#27272A",border:"#FCA5A5",icon:"#FCA5A5",text:"#D4D4D8",metadata:"#A1A1AA"}},[Si.INFO]:{light:{background:"#FFFFFF",border:"#1D4ED8",icon:"#1D4ED8",text:"#0F172A",metadata:"#334155"},dark:{background:"#27272A",border:"#60A5FA",icon:"#60A5FA",text:"#D4D4D8",metadata:"#A1A1AA"}}};return n?r[e].dark:r[e].light},$i=e=>({[Si.SUCCESS]:(0,Tr.jsx)(ki.A,{style:{width:"24px",height:"24px",fill:"currentColor"}}),[Si.WARNING]:(0,Tr.jsx)(wi.A,{style:{width:"24px",height:"24px",fill:"currentColor"}}),[Si.ERROR]:(0,Tr.jsx)(Ai.A,{style:{width:"24px",height:"24px",fill:"currentColor"}}),[Si.INFO]:(0,Tr.jsx)(yi.A,{style:{width:"24px",height:"24px",fill:"currentColor"}})}[e]),Mi=wr.div`
  position: ${e=>e.type===ji.TOAST?"fixed":"relative"};
  ${e=>e.type===ji.TOAST&&`\n    z-index: 1000;\n    ${"top-left"===e.position?"left: 20px;":"top-right"===e.position?"right: 20px;":"top-center"===e.position?"left: 20px; right: 20px;":"bottom-left"===e.position?"left: 20px;":"bottom-right"===e.position?"right: 20px;":(e.position,"left: 20px; right: 20px;")}\n    ${e.position.includes("top")?"top: 20px;":"bottom: 20px;"}\n    \n    @media (min-width: 769px) {\n      ${"top-center"===e.position?"left: 50%; right: auto; transform: translateX(-50%);":""}\n      ${"bottom-center"===e.position?"left: 50%; right: auto; transform: translateX(-50%);":""}\n    }\n  `}
  
  background: ${e=>Di(e.severity,e.theme).background};
  border: none;
  border-radius: 4px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${e=>e.variant===Fi.ADVANCED||e.variant===Fi.SIMPLE?Di(e.severity,e.theme).icon:Di(e.severity,e.theme).border};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  padding: ${e=>e.variant===Fi.SIMPLE?"12px 16px":"16px"};
  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15);
  max-width: 512px;
  min-width: ${e=>e.type===ji.TOAST?e.variant===Fi.SIMPLE?"400px":"320px":"auto"};
  
  /* Responsive styling for toast alerts */
  ${e=>e.type===ji.TOAST&&`\n    @media (max-width: 768px) {\n      min-width: ${e.variant===Fi.SIMPLE?"360px":"280px"};\n      max-width: calc(100vw - 40px);\n      margin: 0 20px;\n    }\n    \n    @media (max-width: 480px) {\n      min-width: ${e.variant===Fi.SIMPLE?"320px":"260px"};\n      max-width: calc(100vw - 32px);\n      margin: 0 16px;\n      padding: ${e.variant===Fi.SIMPLE?"10px 12px":"14px"};\n    }\n  `}
  
  ${e=>e.type===ji.TOAST&&`\n    animation: slideIn${e.position.replace("-","")} 0.3s ease-out;\n    \n    @keyframes slideIn${e.position.replace("-","")} {\n      from {\n        opacity: 0;\n        transform: ${"top-left"===e.position?"translateX(-100%)":"top-right"===e.position?"translateX(100%)":"top-center"===e.position?"translateY(-100%) translateX(-50%)":"bottom-left"===e.position?"translateX(-100%)":"bottom-right"===e.position?"translateX(100%)":(e.position,"translateY(100%) translateX(-50%)")};\n      }\n      to {\n        opacity: 1;\n        transform: ${"top-center"===e.position||"bottom-center"===e.position?"translateX(-50%)":"translateY(0) translateX(0)"};\n      }\n    }\n  `}
  
  ${e=>e.isExiting&&e.type===ji.TOAST&&`\n    animation: slideOut${e.position.replace("-","")} 0.3s ease-in;\n    \n    @keyframes slideOut${e.position.replace("-","")} {\n      from {\n        opacity: 1;\n        transform: ${"top-center"===e.position||"bottom-center"===e.position?"translateX(-50%)":"translateY(0) translateX(0)"};\n      }\n      to {\n        opacity: 0;\n        transform: ${"top-left"===e.position?"translateX(-100%)":"top-right"===e.position?"translateX(100%)":"top-center"===e.position?"translateY(-100%) translateX(-50%)":"bottom-left"===e.position?"translateX(-100%)":"bottom-right"===e.position?"translateX(100%)":(e.position,"translateY(100%) translateX(-50%)")};\n      }\n    }\n  `}
`,Ti=wr.div`
  display: flex;
  align-items: ${e=>e.variant===Fi.SIMPLE?"center":"flex-start"};
  gap: 16px;
  
  /* Responsive styling for smaller screens */
  @media (max-width: 480px) {
    gap: 12px;
  }
`,Ii=wr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>(e.variant,Fi.SIMPLE,Di(e.severity,e.theme).icon)};
  background: transparent;
  border-radius: 0;
  width: auto;
  height: auto;
  flex-shrink: 0;
`,zi=wr.div`
  flex: 1;
  min-width: 0;
  display: ${e=>e.variant===Fi.SIMPLE?"flex":"block"};
  align-items: ${e=>e.variant===Fi.SIMPLE?"center":"flex-start"};
  gap: ${e=>e.variant===Fi.SIMPLE?"16px":"0"};
`,Bi=wr.div`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.4;
  color: ${e=>Di(e.severity,e.theme).text};
  margin-bottom: ${e=>e.variant===Fi.ADVANCED?"4px":"0"};
  margin-top: ${e=>e.variant===Fi.SIMPLE?"2px":"0"};
`,Li=wr.div`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
  color: ${e=>Di(e.severity,e.theme).text};
  opacity: ${e=>e.variant===Fi.ADVANCED?"1":"0.9"};
`,Ri=wr.div`
  display: flex;
  gap: 8px;
  margin-top: ${e=>e.variant===Fi.ADVANCED?"12px":"0"};
  flex-wrap: wrap;
  margin-left: ${e=>e.variant===Fi.SIMPLE?"auto":e.variant===Fi.ADVANCED?"-20px":"0"};
`,Pi=(wr.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${e=>"primary"===e.variant&&`\n    background: transparent;\n    color: ${e=>e.isAdvanced?"#3B82F6":e=>e.isSimple?"#2563EB":"#3B82F6"};\n    \n    &:hover {\n      background: ${e=>e.isAdvanced?"rgba(59, 130, 246, 0.05)":e=>e.isSimple?"rgba(37, 99, 235, 0.05)":"rgba(59, 130, 246, 0.05)"};\n    }\n  `}
  
  ${e=>"secondary"===e.variant&&`\n    background: transparent;\n    color: ${e=>e.isAdvanced?"#475569":e=>e.isSimple?"#4B5563":Di(e.severity,e.theme).text};\n    border: none;\n    \n    &:hover {\n      background: rgba(0, 0, 0, 0.05);\n    }\n  `}
  
  ${e=>"tertiary"===e.variant&&`\n    background: transparent;\n    color: ${e=>e.isAdvanced?"#475569":e=>e.isSimple?"#4B5563":Di(e.severity,e.theme).text};\n    \n    &:hover {\n      background: rgba(0, 0, 0, 0.05);\n    }\n  `}
`,wr.div`
  font-size: 12px;
  color: ${e=>Di(e.severity,e.theme).metadata};
  opacity: ${e=>e.variant===Fi.ADVANCED?"1":"0.7"};
  margin-top: ${e=>e.variant===Fi.ADVANCED?"16px":"0"};
`),Oi=(0,t.forwardRef)((e,n)=>{let{type:r=ji.INLINE,variant:o=Fi.SIMPLE,severity:i=Si.INFO,theme:a=Ci.LIGHT,position:s=Ei.TOP_RIGHT,title:l,message:c,dismissible:d=!1,autoDismiss:u=!1,autoDismissTime:p=5e3,onDismiss:f,onAction:h,actions:m=[],timestamp:g,className:x,keepVisible:b=!1,...v}=e;const[y,k]=(0,t.useState)(!0),[w,A]=(0,t.useState)(!1),[j,F]=(0,t.useState)(p),[S,C]=(0,t.useState)(!1),[E,D]=(0,t.useState)(!1),[$,M]=(0,t.useState)("");(0,t.useEffect)(()=>{r===ji.TOAST&&(k(!0),A(!1),D(!1),C(!1),F(p))},[r,p]),(0,t.useEffect)(()=>{if(void 0===g&&o===Fi.ADVANCED){const e=()=>{const e=new Date,t=e.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}),n=e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0});M(`${t} \u2022 ${n}`)};e();const t=setInterval(e,6e4);return()=>clearInterval(t)}void 0!==g&&M("")},[g,o,r]),(0,t.useEffect)(()=>{let e;return u&&r===ji.TOAST&&!S&&y&&(e=setTimeout(()=>{T()},p)),()=>{e&&clearTimeout(e)}},[u,p,r,S,y]),(0,t.useEffect)(()=>{if(u&&r===ji.TOAST){const e=setInterval(()=>{F(e=>Math.max(0,e-100))},100);return()=>clearInterval(e)}},[u,r]);const T=()=>{!E&&y&&(b?null===f||void 0===f||f():(D(!0),r===ji.TOAST?(A(!0),setTimeout(()=>{k(!1),null===f||void 0===f||f()},300)):(k(!1),null===f||void 0===f||f())))},I=e=>{null===h||void 0===h||h(e)};if(!y)return null;Di(i,a);return(0,Tr.jsx)(Mi,{ref:n,type:r,variant:o,severity:i,theme:a,position:s,isExiting:w,className:x,role:"alert","aria-live":r===ji.TOAST?"polite":"assertive",onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),...v,children:(0,Tr.jsxs)(Ti,{variant:o,children:[(0,Tr.jsx)(Ii,{variant:o,severity:i,theme:a,children:$i(i)}),o===Fi.SIMPLE?(0,Tr.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flex:1},children:[(0,Tr.jsx)("div",{style:{display:"flex",flexDirection:"column",flex:1},children:l&&(0,Tr.jsx)(Bi,{variant:o,severity:i,theme:a,children:l})}),(0,Tr.jsxs)(Ri,{variant:o,style:{marginLeft:"auto",marginTop:0,gap:"8px"},children:[m.map((e,t)=>(0,Tr.jsx)(vi,{variant:ui.TEXT,textVariant:"primary"===e.variant?pi.PRIMARY:pi.SECONDARY,size:"small",label:e.label,onClick:()=>I(e),style:{padding:"8px 12px"},isDarkMode:a===Ci.DARK},t)),d&&(0,Tr.jsx)(vi,{variant:ui.ICON,iconVariant:fi.SECONDARY,size:"medium",customIcon:(0,Tr.jsx)(Er.A,{}),onClick:T,"aria-label":"Close alert",isDarkMode:a===Ci.DARK})]})]}):(0,Tr.jsxs)("div",{style:{display:"flex",flexDirection:"column",flex:1,minWidth:0},children:[(0,Tr.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",flex:1},children:[(0,Tr.jsxs)(zi,{variant:o,children:[l&&(0,Tr.jsx)(Bi,{variant:o,severity:i,theme:a,children:l}),c&&o!==Fi.SIMPLE&&(0,Tr.jsx)(Li,{severity:i,theme:a,children:c})]}),d&&o!==Fi.SIMPLE&&(0,Tr.jsx)(vi,{variant:ui.ICON,iconVariant:fi.SECONDARY,size:"medium",customIcon:(0,Tr.jsx)(Er.A,{}),onClick:T,"aria-label":"Close alert",isDarkMode:a===Ci.DARK,style:{flexShrink:0,marginTop:"2px"}})]}),o===Fi.ADVANCED&&m.length>0&&(0,Tr.jsx)(Ri,{variant:o,children:m.map((e,t)=>(0,Tr.jsx)(vi,{variant:ui.TEXT,textVariant:"primary"===e.variant?pi.PRIMARY:pi.SECONDARY,size:"small",label:e.label,iconPosition:e.icon?mi.LEFT:mi.NONE,customIcon:e.icon,onClick:()=>I(e),isDarkMode:a===Ci.DARK},t))}),o===Fi.ADVANCED&&null!==g&&(g||$)&&(0,Tr.jsx)(Pi,{variant:o,severity:i,theme:a,children:g||$})]})]})})});Oi.displayName="Alert";const Ni=Oi,_i=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Hi=wr.div`
  margin-bottom: 48px;
`,Ui=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Wi=wr.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`,Vi=wr.h2`
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
`,Gi=wr.div`
  flex: 1;
  min-width: 0;
`,Ki=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 4px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
`,Yi=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Xi=()=>{const[e,n]=(0,t.useState)(!1),[r,o]=(0,t.useState)(0),[i,a]=(0,t.useState)(""),s=(e,t)=>{a(`${e} - ${t}`),o(e=>e+1),n(!0)},l=Object.keys(Xr),c=["50","100","200","300","400","500","600","700","800","900"],d=(e,t)=>"common"===e||"brand"===e?(0,Tr.jsx)(Gi,{children:(0,Tr.jsx)(Ki,{children:Object.entries(t).map(t=>{let[n,r]=t;return(0,Tr.jsx)(ei,{name:n,hex:r,onCopy:()=>s(n,r)},`${e}-${n}`)})})}):(0,Tr.jsx)(Gi,{children:(0,Tr.jsx)(Ki,{children:c.map(n=>(0,Tr.jsx)(ei,{name:n,hex:t[n],onCopy:()=>s(`${e} ${n}`,t[n])},`${e}-${n}`))})});return(0,Tr.jsxs)(_i,{children:[(0,Tr.jsxs)(Hi,{children:[(0,Tr.jsx)(Ui,{children:"Color"}),(0,Tr.jsx)(Yi,{children:"Color is a fundamental part of our design language. It sets the tone for our brand, guides user attention, and ensures accessible, consistent experiences across products. This section outlines our core color palette and provides usage guidance to maintain visual harmony, support accessibility, and reinforce brand identity."})]}),l.map(e=>{const t=Xr[e],n=e.charAt(0).toUpperCase()+e.slice(1);return(0,Tr.jsxs)(Wi,{children:[(0,Tr.jsx)(Vi,{children:n}),d(e,t)]},e)}),e&&(0,Tr.jsx)(Ni,{type:ji.TOAST,variant:Fi.SIMPLE,severity:Si.SUCCESS,position:Ei.BOTTOM_CENTER,title:"Color Copied!",message:`Color ${i} has been copied to clipboard`,dismissible:!0,autoDismiss:!0,autoDismissTime:3e3,onDismiss:()=>n(!1)},r)]})},qi={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error"},Qi={SMALL:"small",LARGE:"large"},Ji={PILL:"pill",SQUARE:"square"},Zi=wr.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.isIconOnly?"0":"small"===e.size&&e.leftIcon?"4px 12px 4px 8px":"large"===e.size&&e.leftIcon?"6px 16px 6px 12px":(e.leftIcon||e.rightIcon,"small"===e.size?"4px 12px":"6px 16px")};
  height: ${e=>(e.isIconOnly,"small"===e.size?"24px":"32px")};
  width: ${e=>e.isIconOnly?"small"===e.size?"24px":"32px":"auto"};
  aspect-ratio: ${e=>e.isIconOnly?"1 / 1":"auto"};
  background-color: ${e=>((e,t)=>{if(t)switch(e){case qi.INFO:return"#93C5FD";case qi.SUCCESS:return"#34D399";case qi.WARNING:return"#FDBA74";case qi.ERROR:return"#FCA5A5";default:return"#93C5FD"}switch(e){case qi.INFO:return"#EFF6FF";case qi.SUCCESS:return"#ECFDF5";case qi.WARNING:return"#FFF7ED";case qi.ERROR:return"#FEF2F2";default:return"#EFF6FF"}})(e.type,e.isDarkMode)};
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
`,ea=e=>{let{type:t=qi.INFO,size:n=Qi.SMALL,chipStyle:r=Ji.PILL,label:o,leftIcon:i,rightIcon:a,isIconOnly:s=!1,className:l,isDarkMode:c=!1,...d}=e;return(0,Tr.jsx)(Zi,{type:t,size:n,chipStyle:r,className:l,isDarkMode:c,isIconOnly:s,leftIcon:i,rightIcon:a,role:"status",...d,children:s?(0,Tr.jsx)("span",{className:"icon-left",children:i}):(0,Tr.jsxs)(Tr.Fragment,{children:[i&&(0,Tr.jsx)("span",{className:"icon-left",children:i}),o,a&&(0,Tr.jsx)("span",{className:"icon-right",children:a})]})})},ta=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,na=wr.div`
  margin-bottom: 48px;
`,ra=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,oa=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,ia=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
`,aa=wr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 32px;
`,sa=wr.div`
  font-size: 14px;
  color: ${Xr.slate[600]};
  margin-bottom: 12px;
`,la=wr.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 0 20px;
`,ca=wr(ki.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#047857"};
`,da=(wr(yi.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#1D4ED8"};
`,wr.ul`
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
`),ua=wr($o.Title)`
  font-size: 24px !important;
  font-weight: 600 !important;
  color: ${Xr.slate[900]} !important;
  margin: 0 !important;
`,pa=()=>{const e=!1,t="\ud83c\udf89 Cake Web V2 Update",n="October 8, 2025",r="We're thrilled to announce the launch of Cake Web V2! This major update brings a modern, responsive design system built with React that empowers teams to create consistent, high-quality experiences across all Lenovo digital products. With comprehensive accessibility features meeting WCAG 2.2 AA standards, standardized design tokens, and an enhanced component library, Cake V2 is your complete toolkit for building cohesive, user-centered interfaces that reflect Lenovo's brand identity.",o=[{version:"v1.4.0",date:"May 1, 2025",type:"Major",current:!0,changes:["Updated core components and focus state to meet WCAG 2.2 guidelines","Improved interaction consistency across all core components","Color contrast improvements for better readability and accessibility"]},{version:"v1.3.0",date:"July 17, 2024",type:"Minor",current:!1,changes:["Improved core component consistency and usability","Refined Figma layout for easier navigation","Added sections for raw components, themes, and usage guidelines"]},{version:"v1.2.8",date:"May 16, 2024",type:"Minor",current:!1,changes:["Added Date Picker component","Updated asterisk required to error color token and SegoeUI font 14 style"]},{version:"v1.2.7",date:"May 8, 2024",type:"Minor",current:!1,changes:["Added Alerts component",'Added "inline-alert" color token']},{version:"v1.2.3",date:"April 19, 2024",type:"Minor",current:!1,changes:["Added Horizontal Tabs component","S & XS breakpoint behaviors"]},{version:"v1.2.0",date:"March 7, 2024",type:"Minor",current:!1,changes:["Enhancements to Alert components","Additional color tokens"]}];return(0,Tr.jsxs)(ta,{children:[(0,Tr.jsxs)(na,{children:[(0,Tr.jsx)(ra,{children:"What's New"}),(0,Tr.jsx)(oa,{children:"Track the latest updates, improvements, and fixes to the Cake Design System. Each release represents significant changes and additions to help you stay informed about our evolving design language."})]}),(0,Tr.jsx)(aa,{children:(0,Tr.jsx)($o,{elevated:!0,hoverable:!0,children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(sa,{children:n}),(0,Tr.jsx)(ua,{children:t}),(0,Tr.jsx)(oa,{style:{marginTop:"16px",marginBottom:"0"},children:r})]})})}),(0,Tr.jsx)(ia,{children:(()=>{const t=o.sort((e,t)=>new Date(t.date)-new Date(e.date));return t.map((t,n)=>(0,Tr.jsx)($o,{hoverable:!0,elevated:!0,children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(sa,{children:t.date}),(0,Tr.jsx)(ua,{children:t.version}),(0,Tr.jsxs)(la,{children:[t.current&&(0,Tr.jsx)(ea,{type:qi.SUCCESS,size:Qi.SMALL,chipStyle:Ji.PILL,label:"Current",rightIcon:(0,Tr.jsx)(ca,{isDarkMode:e}),isDarkMode:e}),(0,Tr.jsx)(ea,{type:qi.INFO,size:Qi.SMALL,chipStyle:Ji.PILL,label:`${t.type} release`,isDarkMode:e})]}),(0,Tr.jsx)(da,{children:t.changes.map((e,t)=>(0,Tr.jsx)("li",{children:e},t))})]})},n))})()})]})},fa=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,ha=wr.div`
  margin-bottom: 48px;
`,ma=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,ga=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,xa=wr.div`
  margin-bottom: 40px;
`,ba=wr.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
`,va=()=>(0,Tr.jsxs)(fa,{children:[(0,Tr.jsxs)(ha,{children:[(0,Tr.jsx)(ma,{children:"Figma Libraries"}),(0,Tr.jsx)(ga,{children:"Access and use our official Figma libraries to ensure consistency across your designs. These libraries contain all the components, styles, and patterns used in the Cake design system."})]}),(0,Tr.jsxs)(xa,{children:[(0,Tr.jsx)(ba,{children:"Getting Started"}),(0,Tr.jsx)(ga,{children:"To get started with our Figma libraries, request access through your team lead or project manager. Once granted access, you'll be able to use all of our components and styles in your Figma designs."})]}),(0,Tr.jsxs)(xa,{children:[(0,Tr.jsx)(ba,{children:"Available Libraries"}),(0,Tr.jsxs)(ga,{children:["\u2022 Core Components Library - Contains all basic UI components",(0,Tr.jsx)("br",{}),"\u2022 Icons Library - Complete set of system icons",(0,Tr.jsx)("br",{}),"\u2022 Patterns Library - Common UI patterns and layouts",(0,Tr.jsx)("br",{}),"\u2022 Brand Assets - Logos, colors, and other brand resources"]})]}),(0,Tr.jsxs)(xa,{children:[(0,Tr.jsx)(ba,{children:"Best Practices"}),(0,Tr.jsxs)(ga,{children:["\u2022 Always use components from the library instead of creating new ones",(0,Tr.jsx)("br",{}),"\u2022 Keep your designs in sync with the latest library updates",(0,Tr.jsx)("br",{}),"\u2022 Report any issues or suggestions through the design system team",(0,Tr.jsx)("br",{}),"\u2022 Follow the component documentation for proper usage guidelines"]})]})]}),ya=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,ka=wr.div`
  margin-bottom: 48px;
`,wa=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Aa=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,ja=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
`,Fa=wr(Ee)`
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
`,Sa=wr.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1D4ED8;
  margin: 0 0 12px 0;
  font-family: ${Dr};
`,Ca=wr.p`
  margin: 0;
  color: ${Xr.slate[700]};
  font-size: 14px;
  line-height: 1.6;
`,Ea=wr.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`,Da=wr.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${Xr.slate[900]};
  margin: 0 0 16px 0;
  font-family: ${Dr};
`,$a=wr.ul`
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
`,Ma=()=>(0,Tr.jsxs)(ya,{children:[(0,Tr.jsxs)(ka,{children:[(0,Tr.jsx)(wa,{children:"About Cake"}),(0,Tr.jsx)(Aa,{children:"Cake is One Lenovo's unified design system that helps teams build consistent, high-quality experiences across all Lenovo digital products. It provides a comprehensive set of tools, components, and guidelines to create cohesive, user-centered experiences efficiently while maintaining Lenovo's brand identity and quality standards."})]}),(0,Tr.jsxs)(ja,{children:[(0,Tr.jsxs)(Fa,{to:"/foundations/colors",children:[(0,Tr.jsx)(Sa,{children:"Foundations"}),(0,Tr.jsx)(Ca,{children:"Explore our core design foundations including colors, typography, spacing, and grid systems that form the basis of our design language."})]}),(0,Tr.jsxs)(Fa,{to:"/components/button",children:[(0,Tr.jsx)(Sa,{children:"Components"}),(0,Tr.jsx)(Ca,{children:"Discover our library of reusable UI components, built with accessibility and flexibility in mind to help you create consistent interfaces."})]}),(0,Tr.jsxs)(Fa,{to:"/content/guidelines",children:[(0,Tr.jsx)(Sa,{children:"Content"}),(0,Tr.jsx)(Ca,{children:"Learn about our content guidelines, voice and tone, writing style, and best practices for creating clear and consistent user experiences."})]})]}),(0,Tr.jsxs)(Ea,{children:[(0,Tr.jsx)(Da,{children:"Key Features"}),(0,Tr.jsxs)($a,{children:[(0,Tr.jsxs)("li",{children:[(0,Tr.jsx)("strong",{children:"Unified Components:"})," A comprehensive library of reusable UI components that maintain consistency across all Lenovo products."]}),(0,Tr.jsxs)("li",{children:[(0,Tr.jsx)("strong",{children:"Design Tokens:"})," Standardized design variables for colors, typography, spacing, and other foundational elements."]}),(0,Tr.jsxs)("li",{children:[(0,Tr.jsx)("strong",{children:"Accessibility:"})," Built-in accessibility features ensuring all components meet WCAG guidelines."]}),(0,Tr.jsxs)("li",{children:[(0,Tr.jsx)("strong",{children:"Documentation:"})," Detailed guidelines and best practices for implementing the design system effectively."]})]})]}),(0,Tr.jsxs)(Ea,{children:[(0,Tr.jsx)(Da,{children:"Who It's For"}),(0,Tr.jsxs)($a,{children:[(0,Tr.jsxs)("li",{children:[(0,Tr.jsx)("strong",{children:"Designers:"})," Create consistent designs using our Figma libraries and guidelines."]}),(0,Tr.jsxs)("li",{children:[(0,Tr.jsx)("strong",{children:"Developers:"})," Build robust applications using our React component library and documentation."]}),(0,Tr.jsxs)("li",{children:[(0,Tr.jsx)("strong",{children:"Product Managers:"})," Ensure product consistency and quality across the Lenovo ecosystem."]}),(0,Tr.jsxs)("li",{children:[(0,Tr.jsx)("strong",{children:"Content Strategists:"})," Maintain consistent voice and tone using our content guidelines."]})]})]}),(0,Tr.jsxs)(Ea,{children:[(0,Tr.jsx)(Da,{children:"Version Information"}),(0,Tr.jsx)(Aa,{children:"Cake is continuously evolving to meet the needs of our teams and users. The current version (4.0.1) introduces improved accessibility features, expanded component library, and enhanced documentation."})]})]});const Ta=n.p+"static/media/icon full color.c5f43b778340b71a9564f8cbea84a26c.svg",Ia=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,za=wr.div`
  margin-bottom: 48px;
`,Ba=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,La=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Ra=wr.section`
  margin-bottom: 48px;
`,Pa=wr.h2`
  color: #334155;
  font-family: ${Dr};
  font-weight: 600;
  font-size: 18px;
  margin: 0 0 16px 0;
`,Oa=wr.p`
  color: #334155;
  font-family: ${Dr};
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 24px 0;
  max-width: 680px;
`,Na=wr.div`
  padding-top: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
`,_a=wr.h3`
  margin: 0 0 12px 0;
  color: #334155;
  font-family: ${Dr};
  font-size: 18px;
  font-weight: 600;
`,Ha=wr.p`
  margin: 0;
  color: #334155;
  line-height: 1.5;
  font-family: ${Dr};
  font-size: 14px;
  max-width: 680px;
`,Ua=wr.div`
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
`,Wa=wr.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 16px;
`,Va=wr.div`
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
`,Ga=(wr.a`
  color: #1D4ED8;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    text-decoration: underline;
  }
`,()=>(0,Tr.jsxs)(Ia,{children:[(0,Tr.jsxs)(za,{children:[(0,Tr.jsx)(Ba,{children:"Resources"}),(0,Tr.jsx)(La,{children:"Access our comprehensive collection of design resources including Figma libraries and brand assets designed for different use cases and industries."})]}),(0,Tr.jsxs)(Ra,{children:[(0,Tr.jsx)(Pa,{children:"Figma Libraries"}),(0,Tr.jsx)(Oa,{children:"Design system libraries and components for different use cases and industries."}),(0,Tr.jsx)(Na,{children:[{title:"Cake",description:"Core design system components and foundations for Lenovo products.",link:"https://www.figma.com/community/file/1397963315281891204/cake-one-lenovo-design-system"}].map((e,t)=>(0,Tr.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},children:(0,Tr.jsx)($o,{elevated:!0,hoverable:!0,children:(0,Tr.jsxs)($o.Body,{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,Tr.jsxs)(Wa,{children:[(0,Tr.jsx)(Ua,{children:(0,Tr.jsx)("img",{src:Ta,alt:"Figma"})}),(0,Tr.jsx)(Va,{children:(0,Tr.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Tr.jsx)("path",{d:"M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h12V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7z"})})})]}),(0,Tr.jsx)(_a,{children:e.title}),(0,Tr.jsx)(Ha,{style:{marginBottom:"20px",flex:1},children:e.description})]})},t)}))})]})]}));var Ka=n(6502),Ya=n(9882);const Xa=Fr`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.1);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`,qa=wr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
`,Qa=wr.div`
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
  animation: ${Xa} 20s ease-in-out infinite;
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
`,Ja=()=>(0,Tr.jsxs)(qa,{children:[(0,Tr.jsx)(Qa,{}),(0,Tr.jsx)(Qa,{}),(0,Tr.jsx)(Qa,{}),(0,Tr.jsx)(Qa,{})]}),Za=wr.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px 120px 20px;
  position: relative;
  z-index: 1;
`,es=wr.div`
  margin-bottom: 20px;
`,ts=(wr.div`
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.05);
  min-width: 200px;
`,wr.div`
  color: #64748B;
  font-family: ${Dr};
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`),ns=wr.div`
  color: #0F172A;
  font-family: ${Dr};
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`,rs=(wr.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,wr(ki.A)`
  color: #047857;
`,wr(ea)`
  background-color: #D1FAE5 !important;
  color: #065F46 !important;
  
  .icon-left svg {
    color: #10B981 !important;
  }
`,wr.h1`
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
`),os=(wr.h1`
  color: #0F172A;
  font-family: ${Dr};
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 0 0 1rem 0;
`,wr.h2`
  color: #334155;
  font-family: ${Dr};
  font-weight: 400;
  font-stretch: 580;
  font-size: 2.25rem;
  line-height: 1.4;
  margin: 0 0 0.5rem 0;
  max-width: 680px;
`),is=(wr.p`
  color: #334155;
  font-family: ${Dr};
  font-weight: 400;
  font-stretch: 580;
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin: 0 0 1.5rem 0;
  max-width: 680px;
`,wr.section`
  padding: 1rem 0px;
`),as=wr.h2`
  color: #334155;
  font-family: ${Dr};
  font-weight: 600;
  font-size: 1.125rem;
  margin: 0 0 0.5rem 0;
`,ss=(wr.p`
  color: #334155;
  font-family: ${Dr};
  font-weight: 400;
  font-stretch: 580;
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin: 0 0 1rem 0;
  max-width: 680px;
`,wr.div`
  padding-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  align-items: stretch;
`),ls=wr.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  color: #1E293B;
  
  & > svg {
    width: 2rem;
    height: 2rem;
  }
`,cs=wr.h3`
  margin: 0 0 0.75rem 0;
  color: #334155;
  font-family: ${Dr};
  font-size: 0.875rem;
  font-weight: 600;
`,ds=wr.p`
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
`,us=(wr.button`
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
`,()=>(0,Tr.jsxs)(Tr.Fragment,{children:[(0,Tr.jsx)(Ja,{}),(0,Tr.jsxs)(Za,{children:[(0,Tr.jsxs)(es,{children:[(0,Tr.jsx)(rs,{children:"Cake"}),(0,Tr.jsx)(os,{children:"Ingredients for great design."})]}),(0,Tr.jsxs)(ss,{children:[(0,Tr.jsx)(Ee,{to:"/resources",style:{textDecoration:"none",color:"inherit",display:"block",height:"100%"},children:(0,Tr.jsx)($o,{elevated:!0,hoverable:!0,style:{display:"flex",flexDirection:"column",height:"100%"},children:(0,Tr.jsxs)($o.Body,{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Tr.jsxs)("div",{children:[(0,Tr.jsx)(cs,{style:{fontSize:"1.125rem",marginBottom:"0.5rem"},children:"Get started"}),(0,Tr.jsx)(ds,{style:{marginBottom:"1.25rem",fontSize:"1rem"},children:"Start building modular, accessible, and brand-aligned features using our core components. Explore foundations, patterns, and reusable components to design faster and more consistently across Lenovo products."})]}),(0,Tr.jsx)("div",{style:{marginTop:"auto"},children:(0,Tr.jsxs)("button",{style:{background:"none",border:"none",color:"#1D4ED8",fontFamily:Dr,fontSize:"0.875rem",fontWeight:"600",cursor:"pointer",padding:"0",margin:"0",textAlign:"left",textDecoration:"none",display:"flex",alignItems:"center",gap:"4px"},children:["Access Figma Libraries",(0,Tr.jsx)(Ka.A,{style:{width:"16px",height:"16px"}})]})})]})})}),(0,Tr.jsx)(Ee,{to:"/whats-new",style:{textDecoration:"none",color:"inherit",display:"block",height:"100%"},children:(0,Tr.jsx)($o,{elevated:!0,hoverable:!0,style:{display:"flex",flexDirection:"column",height:"100%"},children:(0,Tr.jsxs)($o.Body,{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Tr.jsxs)("div",{children:[(0,Tr.jsx)(cs,{style:{fontSize:"1.125rem",marginBottom:"1rem"},children:"What's new"}),(0,Tr.jsx)("div",{style:{padding:"1rem",border:"1px solid #E2E8F0",borderRadius:"0.75rem",background:"white"},children:(0,Tr.jsxs)("div",{children:[(0,Tr.jsx)(ts,{style:{fontSize:"0.75rem",marginBottom:"0.5rem"},children:"October 8, 2025"}),(0,Tr.jsx)(ns,{style:{fontSize:"1rem",marginBottom:"0.5rem"},children:"\ud83c\udf89 Cake Web V2 Update"})]})})]}),(0,Tr.jsx)("div",{style:{marginTop:"auto",paddingTop:"1rem"},children:(0,Tr.jsxs)("button",{style:{background:"none",border:"none",color:"#1D4ED8",fontFamily:Dr,fontSize:"0.875rem",fontWeight:"600",cursor:"pointer",padding:"0",margin:"0",textAlign:"left",textDecoration:"none",display:"flex",alignItems:"center",gap:"4px"},children:["Find out what's new",(0,Tr.jsx)(Ka.A,{style:{width:"16px",height:"16px"}})]})})]})})})]}),(0,Tr.jsxs)(is,{style:{marginTop:"2rem"},children:[(0,Tr.jsx)(as,{style:{fontSize:"1.5rem",fontWeight:"600",marginBottom:"1rem",color:"#0F172A"},children:"Why build with Cake?"}),(0,Tr.jsxs)(ss,{children:[(0,Tr.jsx)($o,{elevated:!0,style:{display:"flex",flexDirection:"column"},children:(0,Tr.jsxs)($o.Body,{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Tr.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",marginBottom:"1rem"},children:(0,Tr.jsx)(ls,{children:(0,Tr.jsx)("svg",{width:"2rem",height:"2rem",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Tr.jsx)("path",{d:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"})})})}),(0,Tr.jsx)(cs,{style:{fontSize:"1.125rem",marginBottom:"0.5rem"},children:"Accessibility"}),(0,Tr.jsxs)(ds,{style:{marginBottom:"1.25rem",flex:1,fontSize:"1rem"},children:["Every Cake component is built to meet"," ",(0,Tr.jsx)("a",{href:"https://www.w3.org/TR/WCAG22/",target:"_blank",rel:"noopener noreferrer",style:{color:"#1D4ED8",textDecoration:"none"},children:"WCAG 2.2 AA standards"}),", ensuring your experiences are accessible, inclusive, and usable by everyone, regardless of ability or device."]})]})}),(0,Tr.jsx)($o,{elevated:!0,style:{display:"flex",flexDirection:"column"},children:(0,Tr.jsxs)($o.Body,{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Tr.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",marginBottom:"1rem"},children:(0,Tr.jsx)(ls,{children:(0,Tr.jsx)(Ya.A,{})})}),(0,Tr.jsx)(cs,{style:{fontSize:"1.125rem",marginBottom:"0.5rem"},children:"Brand"}),(0,Tr.jsx)(ds,{style:{marginBottom:"1.25rem",flex:1,fontSize:"1rem"},children:"Maintain brand consistency across all your applications. Cake provides the building blocks that reflect Lenovo's design language and values."})]})}),(0,Tr.jsx)($o,{elevated:!0,style:{display:"flex",flexDirection:"column"},children:(0,Tr.jsxs)($o.Body,{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Tr.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",marginBottom:"1rem"},children:(0,Tr.jsx)(ls,{children:(0,Tr.jsx)("svg",{width:"2rem",height:"2rem",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Tr.jsx)("path",{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H19c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"})})})}),(0,Tr.jsx)(cs,{style:{fontSize:"1.125rem",marginBottom:"0.5rem"},children:"Modularity"}),(0,Tr.jsx)(ds,{style:{marginBottom:"1.25rem",flex:1,fontSize:"1rem"},children:"Build with confidence using our modular component system. Mix and match components to create consistent, scalable interfaces that adapt to your needs."})]})})]})]})]})]})),ps=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,fs=wr.div`
  margin-bottom: 48px;
`,hs=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,ms=wr.p`
  font-size: 16px;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,gs=wr.section`
  margin-bottom: 48px;
`,xs=(wr.h2`
  font-size: 24px;
  margin-bottom: 24px;
  color: #0F172A;
`,wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),bs=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,vs=wr.label`
  font-weight: 600;
  color: #0F172A;
`,ys=wr.select`
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
`,ks=wr.div`
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,ws=(wr.pre`
  background: #0F172A;
  color: #F8FAFC;
  padding: 24px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,wr(yi.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#1D4ED8"};
`),As=wr(ki.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#047857"};
`,js=wr(wi.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#C2410C"};
`,Fs=wr(Ai.A)`
  color: ${e=>e.isDarkMode?"#18181B":"#B91C1C"};
`,Ss="light.a",Cs="dark.a",Es=(e,t)=>{switch(e){case qi.INFO:return(0,Tr.jsx)(ws,{isDarkMode:t});case qi.SUCCESS:return(0,Tr.jsx)(As,{isDarkMode:t});case qi.WARNING:return(0,Tr.jsx)(js,{isDarkMode:t});case qi.ERROR:return(0,Tr.jsx)(Fs,{isDarkMode:t});default:return null}},Ds=()=>{const[e,n]=(0,t.useState)(Qi.LARGE),[r,o]=(0,t.useState)(Ji.PILL),[i,a]=(0,t.useState)(!1),[s,l]=(0,t.useState)(!0),[c,d]=(0,t.useState)(!1),[u,p]=(0,t.useState)(Ss),f=u===Cs,h=e=>e.charAt(0).toUpperCase()+e.slice(1);return(0,Tr.jsxs)(ps,{children:[(0,Tr.jsxs)(fs,{children:[(0,Tr.jsx)(hs,{children:"Chip"}),(0,Tr.jsx)(ms,{children:"The Chip Component is a compact and versatile UI element used to represent discrete pieces of information, attributes, or actions within an interface. It offers a visually appealing way to display and interact with small sets of data or options."})]}),(0,Tr.jsxs)(gs,{children:[(0,Tr.jsxs)(xs,{children:[(0,Tr.jsxs)(bs,{children:[(0,Tr.jsx)(vs,{children:"Size"}),(0,Tr.jsx)(ys,{value:e,onChange:e=>n(e.target.value),children:Object.values(Qi).map(e=>(0,Tr.jsx)("option",{value:e,children:e.toLowerCase()},e))})]}),(0,Tr.jsxs)(bs,{children:[(0,Tr.jsx)(vs,{children:"Style"}),(0,Tr.jsx)(ys,{value:r,onChange:e=>o(e.target.value),children:Object.values(Ji).map(e=>(0,Tr.jsx)("option",{value:e,children:e.toLowerCase()},e))})]}),(0,Tr.jsxs)(bs,{children:[(0,Tr.jsx)(vs,{children:"Icons"}),(0,Tr.jsxs)(ys,{value:c?"icon-only":`${i}-${s}`,onChange:e=>{const t=e.target.value;if("icon-only"===t)d(!0),a(!0),l(!1);else{d(!1);const[e,n]=t.split("-");a("true"===e),l("true"===n)}},children:[(0,Tr.jsx)("option",{value:"icon-only",children:"Icon only"}),(0,Tr.jsx)("option",{value:"true-false",children:"Left icon only"}),(0,Tr.jsx)("option",{value:"false-true",children:"Right icon only"}),(0,Tr.jsx)("option",{value:"false-false",children:"No icons"})]})]}),(0,Tr.jsxs)(bs,{children:[(0,Tr.jsx)(vs,{children:"Theme"}),(0,Tr.jsxs)(ys,{value:u,onChange:e=>p(e.target.value),children:[(0,Tr.jsx)("option",{value:Ss,children:"Light.a"}),(0,Tr.jsx)("option",{value:Cs,children:"Dark.a"})]})]})]}),(0,Tr.jsx)(ks,{isDarkMode:f,children:Object.values(qi).map(t=>(0,Tr.jsx)(ea,{type:t,size:e,chipStyle:r,label:c?void 0:h(t),leftIcon:i||c?Es(t,f):null,rightIcon:s&&!c?Es(t,f):null,isIconOnly:c,isDarkMode:f},t))})]})]})};var $s=n(4536);const Ms=Fr`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ts=wr.button`
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


`,Is=wr.div`
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
  animation: ${Ms} 0.2s ease-out;
  
  &.dropdown-up {
    transform-origin: bottom;
  }
  
  &.dropdown-down {
    transform-origin: top;
  }
`,zs=wr.button`
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
`,Bs=e=>{let{label:n="Dropdown",items:r=[],disabled:o=!1,buttonStyle:i="pill",size:a="medium",isDarkMode:s=!1,className:l,onSelect:c,renderItem:d,position:u="bottom-left",variant:p="primary"}=e;const[f,h]=(0,t.useState)(!1),[m,g]=(0,t.useState)(null),[x,b]=(0,t.useState)({direction:u.startsWith("bottom")?"down":"up",alignment:u.endsWith("right")?"right":"left"}),v=(0,t.useRef)(null),y=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(f&&v.current&&y.current){const e=()=>{const e=((e,t,n)=>{const r=e.getBoundingClientRect(),o=t.offsetHeight,i=window.innerHeight-r.bottom,a=r.top;let s;return s=n.startsWith("bottom")&&i>=o+20?"down":n.startsWith("top")&&a>=o+20?"up":i>=a?"down":"up",{direction:s,alignment:n.endsWith("right")?"right":"left"}})(v.current,y.current,u);b(e)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}},[f,u]),(0,t.useEffect)(()=>{const e=e=>{v.current&&!v.current.contains(e.target)&&y.current&&!y.current.contains(e.target)&&h(!1)},t=e=>{"Escape"===e.key&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}},[]);const k=e=>{g(t=>{const n=t===e?null:e;return console.log("Previous selection:",t),console.log("New selection:",n),n}),h(!1),null===c||void 0===c||c(e)};return(0,Tr.jsxs)("div",{style:{position:"relative",display:"inline-block"},children:[(0,Tr.jsxs)(Ts,{ref:v,disabled:o,onClick:()=>{o||h(!f)},onKeyDown:e=>{var t;if(!o)switch(e.key){case"Enter":case" ":e.preventDefault(),h(!f);break;case"ArrowDown":if(f&&r.length>0){e.preventDefault();const t=m?r.indexOf(m):-1,n=t<r.length-1?t+1:0,o=document.querySelectorAll('[role="menuitem"]');o[n]&&o[n].focus()}break;case"ArrowUp":if(f&&r.length>0){e.preventDefault();const t=m?r.indexOf(m):0,n=t>0?t-1:r.length-1,o=document.querySelectorAll('[role="menuitem"]');o[n]&&o[n].focus()}break;case"Enter":case" ":if(f&&"menuitem"===(null===(t=document.activeElement)||void 0===t?void 0:t.getAttribute("role"))){e.preventDefault();const t=r[Array.from(document.querySelectorAll('[role="menuitem"]')).indexOf(document.activeElement)];t&&k(t)}}},$isOpen:f,buttonStyle:i,size:a,isDarkMode:s,className:l,variant:p,"aria-haspopup":"true","aria-expanded":f,"aria-disabled":o,children:[n,(0,Tr.jsx)("span",{className:"icon",children:(0,Tr.jsx)($s.A,{})})]}),f&&(0,Tr.jsx)(Is,{ref:y,position:u,isDarkMode:s,role:"menu",$calculatedPosition:x,className:`dropdown-${x.direction}`,children:r.map((e,t)=>(0,Tr.jsx)(zs,{onClick:()=>k(e),selected:m===e,isDarkMode:s,role:"menuitem",tabIndex:-1,"aria-selected":m===e,children:d?d(e,m===e):e},t))})]})},Ls=wr.div`
  display: inline-flex;
  background: ${e=>e.$isDarkMode?"#1F2937":"#F1F5F9"};
  position: relative;
  border-radius: 4px;
  border: 2px solid ${e=>e.$isDarkMode?"#52525B":"#CBD5E1"};
  padding: 0;
  gap: 0;
  box-sizing: content-box;
  overflow: hidden;
`,Rs=wr.button`
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
`,Ps=e=>{let{options:n,value:r,defaultValue:o,onChange:i,disabled:a=!1,className:s,isDarkMode:l=!1,size:c="medium"}=e;const[d,u]=(0,t.useState)(o),p=void 0!==r,f=p?r:d,h=(0,t.useCallback)(e=>{if(a)return;const t=f===e?void 0:e;p||u(t),null===i||void 0===i||i(t)},[a,p,i,f]);return(0,Tr.jsx)(Ls,{className:s,$isDarkMode:l,role:"radiogroup",children:n.map((e,t)=>(0,Tr.jsx)(Rs,{onClick:()=>h(e.value),$selected:f===e.value,$isDarkMode:l,$size:c,$isFirst:0===t,$isLast:t===n.length-1,disabled:a||e.disabled,role:"radio","aria-checked":f===e.value,type:"button",children:e.label},e.value))})},Os=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Ns=wr.div`
  margin-bottom: 48px;
`,_s=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Hs=wr.p`
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
`,Us=wr.section`
  margin-bottom: 48px;
`,Ws=wr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,Vs=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,Gs=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ks=wr.label`
  font-weight: 600;
  color: #0F172A;
`,Ys=wr.select`
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
`,Xs=wr.div`
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,qs="light.a",Qs="dark.a",Js="disabled",Zs="loading",el=()=>{const[e,n]=(0,t.useState)(hi.MEDIUM),[r,o]=(0,t.useState)(mi.NONE),[i,a]=(0,t.useState)(""),[s,l]=(0,t.useState)(qs),[c,d]=(0,t.useState)(gi.PILL),u=s===Qs,[p,f]=(0,t.useState)(hi.MEDIUM),[h,m]=(0,t.useState)(mi.NONE),[g,x]=(0,t.useState)(""),[b,v]=(0,t.useState)(qs),[y,k]=(0,t.useState)(gi.PILL),w=b===Qs,[A,j]=(0,t.useState)(hi.MEDIUM),[F,S]=(0,t.useState)(""),[C,E]=(0,t.useState)(qs),[D,$]=(0,t.useState)(gi.PILL),M=C===Qs,[T,I]=(0,t.useState)(hi.MEDIUM),[z,B]=(0,t.useState)(""),[L,R]=(0,t.useState)(qs),[P,O]=(0,t.useState)(gi.PILL),N=L===Qs,[_,H]=(0,t.useState)("medium"),[U,W]=(0,t.useState)(""),[V,G]=(0,t.useState)(qs),K=V===Qs,Y=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),X=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();return(0,Tr.jsxs)(Os,{children:[(0,Tr.jsxs)(Ns,{children:[(0,Tr.jsx)(_s,{children:"Button"}),(0,Tr.jsx)(Hs,{children:"The Button Component is a fundamental element of the user interface used for triggering actions, navigating between pages, or submitting forms. It provides a clear call-to-action and enhances user interaction within the application or website."})]}),(0,Tr.jsxs)(Us,{children:[(0,Tr.jsx)(Ws,{children:"Basic button"}),(0,Tr.jsxs)(Vs,{children:[(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Size"}),(0,Tr.jsx)(Ys,{value:e,onChange:e=>n(e.target.value),children:Object.values(hi).filter(e=>e!==hi.SMALL&&e!==hi.XLARGE).map(e=>(0,Tr.jsx)("option",{value:e,children:Y(e)},e))})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Icon position"}),(0,Tr.jsxs)(Ys,{value:r,onChange:e=>o(e.target.value),children:[(0,Tr.jsx)("option",{value:mi.NONE,children:"No icon"}),(0,Tr.jsx)("option",{value:mi.LEFT,children:"Left icon"}),(0,Tr.jsx)("option",{value:mi.RIGHT,children:"Right icon"})]})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Style"}),(0,Tr.jsxs)(Ys,{value:c,onChange:e=>d(e.target.value),children:[(0,Tr.jsx)("option",{value:gi.PILL,children:"Pill"}),(0,Tr.jsx)("option",{value:gi.SQUARE,children:"Square"})]})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"State"}),(0,Tr.jsxs)(Ys,{value:i,onChange:e=>a(e.target.value),children:[(0,Tr.jsx)("option",{value:"",children:"None"}),(0,Tr.jsx)("option",{value:Js,children:"Disabled"}),(0,Tr.jsx)("option",{value:Zs,children:"Loading"})]})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Theme"}),(0,Tr.jsxs)(Ys,{value:s,onChange:e=>l(e.target.value),children:[(0,Tr.jsx)("option",{value:qs,children:"Light.a"}),(0,Tr.jsx)("option",{value:Qs,children:"Dark.a"})]})]})]}),(0,Tr.jsx)(Xs,{isDarkMode:u,children:Object.values(ui).filter(e=>e!==ui.TEXT&&e!==ui.ICON).map(t=>(0,Tr.jsx)(vi,{variant:t,size:e,iconPosition:r,buttonStyle:c,label:X(t),disabled:i===Js,loading:i===Zs,isDarkMode:u},t))})]}),(0,Tr.jsxs)(Us,{children:[(0,Tr.jsx)(Ws,{children:"Text button"}),(0,Tr.jsxs)(Vs,{children:[(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Size"}),(0,Tr.jsx)(Ys,{value:p,onChange:e=>f(e.target.value),children:Object.values(hi).filter(e=>e!==hi.SMALL&&e!==hi.XLARGE).map(e=>(0,Tr.jsx)("option",{value:e,children:Y(e)},e))})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Icon position"}),(0,Tr.jsxs)(Ys,{value:h,onChange:e=>m(e.target.value),children:[(0,Tr.jsx)("option",{value:mi.NONE,children:"No icon"}),(0,Tr.jsx)("option",{value:mi.LEFT,children:"Left icon"}),(0,Tr.jsx)("option",{value:mi.RIGHT,children:"Right icon"})]})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Style"}),(0,Tr.jsxs)(Ys,{value:y,onChange:e=>k(e.target.value),children:[(0,Tr.jsx)("option",{value:gi.PILL,children:"Pill"}),(0,Tr.jsx)("option",{value:gi.SQUARE,children:"Square"})]})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"State"}),(0,Tr.jsxs)(Ys,{value:g,onChange:e=>x(e.target.value),children:[(0,Tr.jsx)("option",{value:"",children:"None"}),(0,Tr.jsx)("option",{value:Js,children:"Disabled"}),(0,Tr.jsx)("option",{value:Zs,children:"Loading"})]})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Theme"}),(0,Tr.jsxs)(Ys,{value:b,onChange:e=>v(e.target.value),children:[(0,Tr.jsx)("option",{value:qs,children:"Light.a"}),(0,Tr.jsx)("option",{value:Qs,children:"Dark.a"})]})]})]}),(0,Tr.jsxs)(Xs,{isDarkMode:w,children:[(0,Tr.jsx)(vi,{variant:ui.TEXT,textVariant:"primary",size:p,iconPosition:h,buttonStyle:y,label:"Primary",disabled:g===Js,loading:g===Zs,isDarkMode:w}),(0,Tr.jsx)(vi,{variant:ui.TEXT,textVariant:"secondary",size:p,iconPosition:h,buttonStyle:y,label:"Secondary",disabled:g===Js,loading:g===Zs,isDarkMode:w})]})]}),(0,Tr.jsxs)(Us,{children:[(0,Tr.jsx)(Ws,{children:"Icon button"}),(0,Tr.jsxs)(Vs,{children:[(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Size"}),(0,Tr.jsxs)(Ys,{value:A,onChange:e=>j(e.target.value),children:[(0,Tr.jsx)("option",{value:hi.SMALL,children:"Small"}),(0,Tr.jsx)("option",{value:hi.MEDIUM,children:"Medium"}),(0,Tr.jsx)("option",{value:hi.LARGE,children:"Large"}),(0,Tr.jsx)("option",{value:hi.XLARGE,children:"XLarge"})]})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Style"}),(0,Tr.jsxs)(Ys,{value:D,onChange:e=>$(e.target.value),children:[(0,Tr.jsx)("option",{value:gi.PILL,children:"Pill"}),(0,Tr.jsx)("option",{value:gi.SQUARE,children:"Square"})]})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"State"}),(0,Tr.jsxs)(Ys,{value:F,onChange:e=>S(e.target.value),children:[(0,Tr.jsx)("option",{value:"",children:"None"}),(0,Tr.jsx)("option",{value:Js,children:"Disabled"}),(0,Tr.jsx)("option",{value:Zs,children:"Loading"})]})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Theme"}),(0,Tr.jsxs)(Ys,{value:C,onChange:e=>E(e.target.value),children:[(0,Tr.jsx)("option",{value:qs,children:"Light.a"}),(0,Tr.jsx)("option",{value:Qs,children:"Dark.a"})]})]})]}),(0,Tr.jsxs)(Xs,{isDarkMode:M,children:[(0,Tr.jsx)(vi,{variant:ui.ICON,iconVariant:fi.PRIMARY,size:A,iconPosition:mi.NONE,buttonStyle:D,"aria-label":"Download",disabled:F===Js,loading:F===Zs,isDarkMode:M}),(0,Tr.jsx)(vi,{variant:ui.ICON,iconVariant:fi.SECONDARY,size:A,iconPosition:mi.NONE,buttonStyle:D,"aria-label":"Download",disabled:F===Js,loading:F===Zs,isDarkMode:M})]})]}),(0,Tr.jsxs)(Us,{children:[(0,Tr.jsx)(Ws,{children:"Dropdown button"}),(0,Tr.jsxs)(Vs,{children:[(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Size"}),(0,Tr.jsx)(Ys,{value:T,onChange:e=>I(e.target.value),children:Object.values(hi).filter(e=>e!==hi.SMALL&&e!==hi.XLARGE).map(e=>(0,Tr.jsx)("option",{value:e,children:Y(e)},e))})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Style"}),(0,Tr.jsxs)(Ys,{value:P,onChange:e=>O(e.target.value),children:[(0,Tr.jsx)("option",{value:gi.PILL,children:"Pill"}),(0,Tr.jsx)("option",{value:gi.SQUARE,children:"Square"})]})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"State"}),(0,Tr.jsxs)(Ys,{value:z,onChange:e=>B(e.target.value),children:[(0,Tr.jsx)("option",{value:"",children:"None"}),(0,Tr.jsx)("option",{value:Js,children:"Disabled"})]})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Theme"}),(0,Tr.jsxs)(Ys,{value:L,onChange:e=>R(e.target.value),children:[(0,Tr.jsx)("option",{value:qs,children:"Light.a"}),(0,Tr.jsx)("option",{value:Qs,children:"Dark.a"})]})]})]}),(0,Tr.jsxs)(Xs,{isDarkMode:N,children:[(0,Tr.jsx)(Bs,{label:"Primary",items:["Item","Item","Item","Item","Item"],disabled:z===Js,buttonStyle:P,size:T,isDarkMode:N}),(0,Tr.jsx)(Bs,{label:"Secondary",items:["Item","Item","Item","Item","Item"],disabled:z===Js,buttonStyle:P,size:T,isDarkMode:N,variant:"secondary"})]})]}),(0,Tr.jsxs)(Us,{children:[(0,Tr.jsx)(Ws,{children:"Toggle group"}),(0,Tr.jsxs)(Vs,{children:[(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Size"}),(0,Tr.jsxs)(Ys,{value:_,onChange:e=>H(e.target.value),children:[(0,Tr.jsx)("option",{value:"medium",children:"Medium"}),(0,Tr.jsx)("option",{value:"large",children:"Large"})]})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"State"}),(0,Tr.jsxs)(Ys,{value:U,onChange:e=>W(e.target.value),children:[(0,Tr.jsx)("option",{value:"",children:"None"}),(0,Tr.jsx)("option",{value:Js,children:"Disabled"})]})]}),(0,Tr.jsxs)(Gs,{children:[(0,Tr.jsx)(Ks,{children:"Theme"}),(0,Tr.jsxs)(Ys,{value:V,onChange:e=>G(e.target.value),children:[(0,Tr.jsx)("option",{value:qs,children:"Light.a"}),(0,Tr.jsx)("option",{value:Qs,children:"Dark.a"})]})]})]}),(0,Tr.jsxs)(Xs,{isDarkMode:K,children:[(0,Tr.jsx)(Ps,{options:[{label:"AM",value:"am"},{label:"PM",value:"pm"}],size:_,disabled:U===Js,isDarkMode:K}),(0,Tr.jsx)(Ps,{options:[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"}],size:_,disabled:U===Js,isDarkMode:K})]})]})]})},tl=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()))(e);return t.charAt(0).toUpperCase()+t.slice(1)},nl=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()},rl=e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0};var ol={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const il=(0,t.forwardRef)((e,n)=>{let{color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:s="",children:l,iconNode:c,...d}=e;return(0,t.createElement)("svg",{ref:n,...ol,width:o,height:o,stroke:r,strokeWidth:a?24*Number(i)/Number(o):i,className:nl("lucide",s),...!l&&!rl(d)&&{"aria-hidden":"true"},...d},[...c.map(e=>{let[n,r]=e;return(0,t.createElement)(n,r)}),...Array.isArray(l)?l:[l]])}),al=((e,n)=>{const r=(0,t.forwardRef)((r,o)=>{let{className:i,...a}=r;return(0,t.createElement)(il,{ref:o,iconNode:n,className:nl(`lucide-${s=tl(e),s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...a});var s});return r.displayName=tl(e),r})("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),sl=wr.div`
  width: 100%;
`,ll=wr.div`
  border: 1px solid ${e=>"light"===e.theme?"#64748B":"#71717A"};
  border-radius: 8px;
  background: ${e=>"light"===e.theme?"#FFFFFF":"#18181B"};
  overflow: hidden;
  transition: border-color 200ms ease-in-out;

  ${e=>e.disabled&&"\n    opacity: 0.5;\n    pointer-events: none;\n  "}
`,cl=wr.div`
  background: ${e=>"light"===e.theme?"#FFFFFF":"#18181B"};
  transition: background-color 200ms ease-in-out;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>"light"===e.theme?"#64748B":"#71717A"};
  }
`,dl=wr.button`
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
`,ul=wr.div`
  flex: 1;
  min-width: 0;
`,pl=wr.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: ${e=>"light"===e.theme?"#0F172A":"#D4D4D8"};
  text-align: left;
`,fl=wr.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 8px;
  color: ${e=>"light"===e.theme?"#0F172A":"#D4D4D8"};
`,hl=wr(al)`
  flex-shrink: 0;
  margin-left: 16px;
  margin-top: 4px;
  width: 20px;
  height: 20px;
  color: ${e=>"light"===e.theme?"#0F172A":"#D4D4D8"};
  transform: ${e=>e.isExpanded?"rotate(180deg)":"rotate(0)"};
  transition: transform 200ms ease-in-out;
`,ml=wr.div`
  padding: ${e=>e.isExpanded?"16px":"0 16px"};
  height: ${e=>e.isExpanded?"auto":"0"};
  opacity: ${e=>e.isExpanded?"1":"0"};
  overflow: hidden;
  transition: all 200ms ease-in-out;
`,gl=wr.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: ${e=>"light"===e.theme?"#334155":"#D4D4D8"};
`,xl=e=>{let{title:t,subtitle:n,content:r,isExpanded:o,onToggle:i,theme:a="light",disabled:s=!1,id:l}=e;const c=`accordion-header-${l}`,d=`accordion-panel-${l}`;return(0,Tr.jsxs)(cl,{theme:a,disabled:s,role:"presentation",children:[(0,Tr.jsxs)(dl,{onClick:i,"aria-expanded":o,"aria-controls":d,id:c,theme:a,disabled:s,"aria-disabled":s,children:[(0,Tr.jsx)(ul,{children:(0,Tr.jsx)(pl,{theme:a,children:t})}),(0,Tr.jsx)(hl,{theme:a,isExpanded:o,"aria-hidden":"true"})]}),(0,Tr.jsxs)(ml,{theme:a,isExpanded:o,role:"region","aria-labelledby":c,id:d,children:[n&&(0,Tr.jsx)(fl,{theme:a,id:`${d}-subtitle`,children:n}),(0,Tr.jsx)(gl,{theme:a,children:r})]})]})},bl=e=>{let{items:n,theme:r="light",disabled:o=!1}=e;const i=t.useId(),[a,s]=(0,t.useState)(new Set);return(0,Tr.jsx)(sl,{role:"presentation",children:(0,Tr.jsx)(ll,{theme:r,disabled:o,role:"list","aria-label":"Accordion",children:n.map(e=>(0,Tr.jsx)(xl,{...e,id:`${i}-${e.id}`,theme:r,isExpanded:a.has(e.id),onToggle:()=>{return t=e.id,void(o||s(e=>{const n=new Set(e);return e.has(t)?n.delete(t):n.add(t),n}));var t},disabled:o},e.id))})})},vl=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,yl=wr.div`
  margin-bottom: 48px;
`,kl=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,wl=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Al=wr.section`
  margin-bottom: 48px;
`,jl=(wr.h2`
  font-size: 1.125rem;
  margin-bottom: 24px;
  color: #0F172A;
`,wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),Fl=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Sl=wr.label`
  font-weight: 600;
  color: #0F172A;
`,Cl=wr.select`
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
`,El=wr.div`
  background: ${e=>e.isDarkMode?"#000000":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Dl="light",$l="dark",Ml="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",Tl=[{id:"1",title:"Title",content:Ml},{id:"2",title:"Title",content:Ml,subtitle:"Subtitle"},{id:"3",title:"Title",content:Ml},{id:"4",title:"Title",content:Ml}],Il=()=>{const[e,n]=(0,t.useState)(Dl),r=e===$l;return(0,Tr.jsxs)(vl,{children:[(0,Tr.jsxs)(yl,{children:[(0,Tr.jsx)(kl,{children:"Accordion"}),(0,Tr.jsx)(wl,{children:"Accordions are interactive components that expand and collapse to reveal content, helping users manage information density and maintain context."})]}),(0,Tr.jsxs)(Al,{children:[(0,Tr.jsx)(jl,{children:(0,Tr.jsxs)(Fl,{children:[(0,Tr.jsx)(Sl,{children:"Theme"}),(0,Tr.jsxs)(Cl,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:Dl,children:"Light.a"}),(0,Tr.jsx)("option",{value:$l,children:"Dark.a"})]})]})}),(0,Tr.jsx)(El,{isDarkMode:r,children:(0,Tr.jsx)(bl,{items:Tl,theme:e})})]})]})};var zl=n(5502);const Bl=n.p+"static/media/moto_ai.c5f68773b0ff40aa6a981017f522b827.svg";const Ll=n.p+"static/media/moto_ai_color.dedad4eb8931a964b63a18720feb0c25.svg";const Rl=n.p+"static/media/robo_1.b02753fb44b056683a1c016b94d986ca.svg";const Pl=n.p+"static/media/robo_2.e39f3910b4d6fe81f64767d4fc2f53d9.svg",Ol=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Nl=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
  font-family: ${Dr};
`,_l=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
  margin-bottom: 32px;
  font-family: ${Dr};
`,Hl=wr.section`
  margin-bottom: 48px;
`,Ul=wr.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: #0F172A;
  font-family: ${Dr};
`,Wl=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
  font-family: ${Dr};
`,Vl=wr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`,Gl=wr($o)`
  position: relative;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  height: auto;
  min-height: fit-content;
`,Kl=wr.div`
  display: grid;
  grid-template-columns: ${e=>e.smaller?"repeat(2, 96px)":"repeat(2, 108px)"};
  gap: 24px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
`,Yl=wr.img`
  width: ${e=>e.smaller?"96px":"108px"};
  height: ${e=>e.smaller?"96px":"108px"};
`,Xl=wr.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  background-color: ${e=>"do"===e.type?"#f0fdf4":"#fef2f2"};
  padding: 16px 16px 12px;
  margin: -24px -24px 16px -24px;
  border-bottom: 4px solid ${e=>"do"===e.type?"#047857":"#B91C1C"};
`,ql=wr.div`
  color: ${e=>"do"===e.type?"#047857":"#B91C1C"};
  display: flex;
  align-items: center;
`,Ql=wr.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>"do"===e.type?"#047857":"#B91C1C"};
  margin: 0;
  font-family: ${Dr};
`,Jl=wr.p`
  font-size: 14px;
  line-height: 1.5;
  color: #4b5563;
  margin: 0;
  font-family: ${Dr};
`,Zl=wr.div`
  padding-top: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
`,ec=wr.h3`
  margin: 0 0 12px 0;
  color: #334155;
  font-family: ${Dr};
  font-size: 18px;
  font-weight: 600;
`,tc=wr.p`
  margin: 0;
  color: #334155;
  line-height: 1.5;
  font-family: ${Dr};
  font-size: 14px;
  max-width: 680px;
`,nc=wr.div`
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
`,rc=wr.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 16px;
`,oc=wr.div`
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
`,ic=()=>{const e="Cake for AI (C4AI)",t="Specialized components and patterns for AI-powered interfaces and experiences.",n="https://www.figma.com/community/file/1537497596724978160/cake-for-ai";return(0,Tr.jsxs)(Ol,{children:[(0,Tr.jsx)(Nl,{children:"Icon & Identity"}),(0,Tr.jsx)(_l,{children:"Lenovo's AI identity maintains consistency across all software applications. The Moto AI logo has been adapted as the standard iconography for AI features within these applications."}),(0,Tr.jsxs)(Hl,{children:[(0,Tr.jsx)(Ul,{children:"Logo Usage"}),(0,Tr.jsx)(Wl,{children:"Use the Moto AI logo as the primary visual identity for Lenovo AI software to maintain brand consistency and recognition across all platforms."}),(0,Tr.jsxs)(Vl,{children:[(0,Tr.jsx)(Gl,{type:"do",children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsxs)(Xl,{type:"do",children:[(0,Tr.jsx)(ql,{type:"do",children:(0,Tr.jsx)(ki.A,{})}),(0,Tr.jsx)(Ql,{type:"do",children:"Do"})]}),(0,Tr.jsxs)(Kl,{children:[(0,Tr.jsx)(Yl,{src:Ll,alt:"Moto AI color icon"}),(0,Tr.jsx)(Yl,{src:Bl,alt:"Moto AI icon"})]}),(0,Tr.jsx)(Jl,{children:"Use the Moto AI logo as the primary visual identity for Lenovo AI software."})]})}),(0,Tr.jsx)(Gl,{type:"dont",children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsxs)(Xl,{type:"dont",children:[(0,Tr.jsx)(ql,{type:"dont",children:(0,Tr.jsx)(zl.A,{})}),(0,Tr.jsx)(Ql,{type:"dont",children:"Don't"})]}),(0,Tr.jsxs)(Kl,{smaller:!0,children:[(0,Tr.jsx)(Yl,{smaller:!0,src:Rl,alt:"Example of robot imagery to avoid - robot 1"}),(0,Tr.jsx)(Yl,{smaller:!0,src:Pl,alt:"Example of robot imagery to avoid - robot 2"})]}),(0,Tr.jsx)(Jl,{children:"Do not use robot and / or android images for Lenovo AI software."})]})})]})]}),(0,Tr.jsxs)(Hl,{children:[(0,Tr.jsx)(Ul,{children:"Brand Guidelines"}),(0,Tr.jsx)(Wl,{children:"Our AI identity communicates intelligence, approachability, and trust while aligning with the broader Lenovo brand language."}),(0,Tr.jsxs)(Vl,{children:[(0,Tr.jsx)(Gl,{children:(0,Tr.jsx)($o.Body,{children:(0,Tr.jsxs)(Jl,{children:[(0,Tr.jsx)("strong",{children:"Consistency:"})," Always use the approved Moto AI logo across all AI-powered features and applications."]})})}),(0,Tr.jsx)(Gl,{children:(0,Tr.jsx)($o.Body,{children:(0,Tr.jsxs)(Jl,{children:[(0,Tr.jsx)("strong",{children:"Color Variations:"})," Use the full-color version on light backgrounds and the monochrome version when color is not available."]})})}),(0,Tr.jsx)(Gl,{children:(0,Tr.jsx)($o.Body,{children:(0,Tr.jsxs)(Jl,{children:[(0,Tr.jsx)("strong",{children:"Clear Space:"})," Maintain adequate clear space around the logo to ensure visual clarity and impact."]})})})]})]}),(0,Tr.jsxs)(Hl,{children:[(0,Tr.jsx)(Ul,{children:"Resources"}),(0,Tr.jsx)(Wl,{children:"Access design resources and components specifically designed for AI-powered interfaces and experiences."}),(0,Tr.jsx)(Zl,{children:(0,Tr.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},children:(0,Tr.jsx)($o,{elevated:!0,hoverable:!0,children:(0,Tr.jsxs)($o.Body,{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,Tr.jsxs)(rc,{children:[(0,Tr.jsx)(nc,{children:(0,Tr.jsx)("img",{src:Ta,alt:"Figma"})}),(0,Tr.jsx)(oc,{children:(0,Tr.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Tr.jsx)("path",{d:"M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h12V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7z"})})})]}),(0,Tr.jsx)(ec,{children:e}),(0,Tr.jsx)(tc,{style:{marginBottom:"20px",flex:1},children:t})]})})})})]})]})};var ac=n(2177);const sc={IMAGE:"image",INITIALS:"initials",ICON:"icon"},lc={XLARGE:"64",LARGE:"48",MEDIUM:"40",SMALL:"32"},cc=wr.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: ${e=>`${e.size}px`};
  height: ${e=>`${e.size}px`};
  border-radius: 50%;
  background-color: ${e=>{return t=e.variant,n=e.isDarkMode,t===sc.INITIALS||t===sc.ICON?n?"#CBD5E1":"#E2E8F0":"transparent";var t,n}};
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
    font-size: ${e=>{switch(e.size){case lc.XLARGE:return"24px";case lc.LARGE:return"20px";case lc.MEDIUM:return"16px";case lc.SMALL:return"14px";default:return"16px"}}};
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
`,dc=e=>{let{variant:n=sc.ICON,size:r=lc.MEDIUM,src:o,initials:i,alt:a,isDarkMode:s=!1,className:l,...c}=e;const[d,u]=t.useState(!1),p=()=>{u(!0)};return(0,Tr.jsx)(cc,{variant:d?sc.ICON:n,size:r,isDarkMode:s,className:l,role:"img","aria-label":a,...c,children:n===sc.IMAGE&&o&&!d?(0,Tr.jsx)("img",{src:o,alt:a,onError:p}):n===sc.INITIALS&&i?(0,Tr.jsx)("span",{className:"initials",children:i.slice(0,2)}):(0,Tr.jsx)(ac.A,{className:"icon"})})};const uc=n.p+"static/media/avatar.e74bce257af805a2cf17dceb8fadcfc4.svg",pc="light.a",fc="dark.a",hc=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,mc=wr.div`
  margin-bottom: 48px;
`,gc=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,xc=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,bc=wr.section`
  margin-bottom: 48px;
`,vc=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,yc=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,kc=wr.label`
  font-weight: 600;
  color: #0F172A;
`,wc=wr.select`
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
`,Ac=wr.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  align-items: center;
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,jc=()=>{const[e,n]=(0,t.useState)(lc.MEDIUM),[r,o]=(0,t.useState)(pc),i=r===fc,a=uc;return(0,Tr.jsxs)(hc,{children:[(0,Tr.jsxs)(mc,{children:[(0,Tr.jsx)(gc,{children:"Avatar"}),(0,Tr.jsx)(xc,{children:"Avatars are used to represent people or organizations. They can display images, initials, or a fallback icon."})]}),(0,Tr.jsxs)(bc,{children:[(0,Tr.jsxs)(vc,{children:[(0,Tr.jsxs)(yc,{children:[(0,Tr.jsx)(kc,{children:"Size"}),(0,Tr.jsxs)(wc,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:lc.XLARGE,children:"Extra Large (64px)"}),(0,Tr.jsx)("option",{value:lc.LARGE,children:"Large (48px)"}),(0,Tr.jsx)("option",{value:lc.MEDIUM,children:"Medium (40px)"}),(0,Tr.jsx)("option",{value:lc.SMALL,children:"Small (32px)"})]})]}),(0,Tr.jsxs)(yc,{children:[(0,Tr.jsx)(kc,{children:"Theme"}),(0,Tr.jsxs)(wc,{value:r,onChange:e=>o(e.target.value),children:[(0,Tr.jsx)("option",{value:pc,children:"Light.a"}),(0,Tr.jsx)("option",{value:fc,children:"Dark.a"})]})]})]}),(0,Tr.jsxs)(Ac,{isDarkMode:i,children:[(0,Tr.jsx)(dc,{variant:sc.IMAGE,size:e,src:a,alt:"Image Avatar",isDarkMode:i}),(0,Tr.jsx)(dc,{variant:sc.INITIALS,size:e,initials:"JD",alt:"Initials Avatar",isDarkMode:i}),(0,Tr.jsx)(dc,{variant:sc.ICON,size:e,alt:"Icon Avatar",isDarkMode:i})]})]})]})},Fc={BLUE:"blue",RED:"red"},Sc={SMALL:"small",MEDIUM:"medium",LARGE:"large"},Cc=e=>{switch(e){case Sc.SMALL:return{minWidth:"16px",height:"16px",fontSize:"10px",padding:"0 4px"};case Sc.LARGE:return{minWidth:"24px",height:"24px",fontSize:"14px",padding:"0 8px"};default:return{minWidth:"20px",height:"20px",fontSize:"12px",padding:"0 6px"}}},Ec=wr.span`
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
  min-width: ${e=>Cc(e.size).minWidth};
  height: ${e=>Cc(e.size).height};
  font-size: ${e=>Cc(e.size).fontSize};
  padding: ${e=>{var t;const n=(null===(t=e.children)||void 0===t?void 0:t.toString())||"",r=/^\d{1}$/.test(n),o=Cc(e.size).padding;return r?"0":o}};
  
  /* Color styles */
  background-color: ${e=>((e,t)=>{if(t)switch(e){case Fc.BLUE:return"#60A5FA";case Fc.RED:return"#FB7185";default:return"#60A5FA"}switch(e){case Fc.BLUE:return"#1D4ED8";case Fc.RED:return"#B91C1C";default:return"#1D4ED8"}})(e.color,e.isDarkMode)};
  color: ${e=>(e.color,e.isDarkMode?"#18181B":"#FFFFFF")};
  
  /* Transitions */
  transition: all 0.2s ease-in-out;
  
  /* Focus styles for accessibility */
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>e.isDarkMode?"#93C5FD":"#1D4ED8"};
  }
`,Dc=e=>{let{color:t=Fc.BLUE,size:n=Sc.MEDIUM,isDarkMode:r=!1,children:o="1",className:i,...a}=e;const s=(null===o||void 0===o?void 0:o.toString())||"",l=/^\d+$/.test(s)&&s.length>0?s:"1";return(0,Tr.jsx)(Ec,{color:t,size:n,isDarkMode:r,className:i,role:"status","aria-label":`Badge: ${l}`,...a,children:l})},$c=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Mc=wr.div`
  margin-bottom: 48px;
`,Tc=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Ic=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,zc=wr.section`
  margin-bottom: 48px;
`,Bc=(wr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),Lc=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Rc=wr.label`
  font-weight: 600;
  color: #0F172A;
`,Pc=wr.select`
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
`,Oc=wr.input`
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
`,Nc=wr.div`
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,_c="light.a",Hc="dark.a",Uc=()=>{const[e,n]=(0,t.useState)("1"),[r,o]=(0,t.useState)(_c),i=r===Hc;return(0,Tr.jsxs)($c,{children:[(0,Tr.jsxs)(Mc,{children:[(0,Tr.jsx)(Tc,{children:"Badge"}),(0,Tr.jsx)(Ic,{children:"The Badge component is a compact UI element used to display small amounts of information, such as notification counts, status indicators, or numerical labels. It automatically adapts its shape from circular (for single digits) to pill-shaped (for multi-digit numbers) to provide optimal visual presentation."})]}),(0,Tr.jsxs)(zc,{children:[(0,Tr.jsxs)(Bc,{children:[(0,Tr.jsxs)(Lc,{children:[(0,Tr.jsx)(Rc,{children:"Value"}),(0,Tr.jsx)(Oc,{type:"text",value:e,onChange:e=>{const t=e.target.value;(""===t||/^\d+$/.test(t))&&n(t)},placeholder:"Enter numbers only"})]}),(0,Tr.jsxs)(Lc,{children:[(0,Tr.jsx)(Rc,{children:"Theme"}),(0,Tr.jsxs)(Pc,{value:r,onChange:e=>o(e.target.value),children:[(0,Tr.jsx)("option",{value:_c,children:"Light.a"}),(0,Tr.jsx)("option",{value:Hc,children:"Dark.a"})]})]})]}),(0,Tr.jsxs)(Nc,{isDarkMode:i,children:[(0,Tr.jsx)(Dc,{color:Fc.BLUE,size:Sc.MEDIUM,isDarkMode:i,children:e}),(0,Tr.jsx)(Dc,{color:Fc.RED,size:Sc.MEDIUM,isDarkMode:i,children:e})]})]})]})},Wc={CHEVRON:"chevron",SLASH:"slash",ARROW:"arrow"},Vc={SMALL:"small",MEDIUM:"medium",LARGE:"large"},Gc=e=>{switch(e){case Vc.SMALL:return{fontSize:"12px",lineHeight:"16px",iconSize:"14px",padding:"4px 8px"};case Vc.LARGE:return{fontSize:"16px",lineHeight:"24px",iconSize:"20px",padding:"8px 12px"};default:return{fontSize:"14px",lineHeight:"20px",iconSize:"16px",padding:"6px 10px"}}},Kc=wr.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${Dr};
  font-size: ${e=>Gc(e.size).fontSize};
  line-height: ${e=>Gc(e.size).lineHeight};
  
  /* Accessibility */
  aria-label: "Breadcrumb navigation";
`,Yc=wr.ol`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 16px;
`,Xc=wr.li`
  display: flex;
  align-items: center;
`,qc=wr.a`
  display: inline-flex;
  align-items: center;
  padding: ${e=>Gc(e.size).padding};
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
`,Qc=wr.span`
  display: inline-flex;
  align-items: center;
  padding: ${e=>Gc(e.size).padding};
  color: ${e=>e.isDarkMode?"#D4D4D8":"#171717"};
  font-size: 18px;
  font-weight: 600;
  cursor: default;
`,Jc=wr.span`
  display: inline-flex;
  align-items: center;
  color: ${e=>e.isDarkMode?"#A1A1AA":"#171717"};
  margin: 0 8px;
  
  svg {
    width: 24px;
    height: 24px;
  }
`,Zc=()=>(0,Tr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,Tr.jsx)("polyline",{points:"9 18 15 12 9 6"})}),ed=()=>(0,Tr.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,Tr.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,Tr.jsx)("polyline",{points:"12 5 19 12 12 19"})]}),td=()=>(0,Tr.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,Tr.jsx)("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),(0,Tr.jsx)("polyline",{points:"12 19 5 12 12 5"})]}),nd=wr.div`
  margin-bottom: 8px;
`,rd=e=>{let{size:t,isDarkMode:n,onClick:r,backButtonText:o,...i}=e;return(0,Tr.jsx)(vi,{variant:ui.TEXT,textVariant:pi.SECONDARY,iconPosition:mi.LEFT,label:o,size:t,isDarkMode:n,onClick:r,"aria-label":`${o} button`,customIcon:(0,Tr.jsx)(td,{}),...i})},od=e=>{switch(e){case Wc.ARROW:return(0,Tr.jsx)(ed,{});case Wc.SLASH:return"/";default:return(0,Tr.jsx)(Zc,{})}},id=e=>{let{items:t=[],showBackButton:n=!0,backButtonText:r="Back",separatorType:o=Wc.CHEVRON,size:i=Vc.MEDIUM,isDarkMode:a=!1,onBackClick:s,onItemClick:l,className:c,...d}=e;return(0,Tr.jsxs)(Kc,{size:i,isDarkMode:a,className:c,"aria-label":"Breadcrumb navigation",...d,children:[n&&(0,Tr.jsx)(nd,{children:(0,Tr.jsx)(rd,{size:i,isDarkMode:a,onClick:e=>{e.preventDefault(),s&&s(e)},backButtonText:r})}),(0,Tr.jsx)(Yc,{children:t.map((e,n)=>{const r=n===t.length-1,s=!r&&!1!==e.onClick;return(0,Tr.jsxs)(Xc,{children:[r?(0,Tr.jsx)(Qc,{size:i,isDarkMode:a,children:e.label}):(0,Tr.jsx)(qc,{size:i,isDarkMode:a,href:e.href||"#",onClick:s?e=>((e,t)=>{t.preventDefault(),l&&l(e,t)})(n,e):void 0,"aria-current":r?"page":void 0,children:e.label}),!r&&(0,Tr.jsx)(Jc,{isDarkMode:a,size:i,children:od(o)})]},n)})})]})},ad=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,sd=wr.div`
  margin-bottom: 48px;
`,ld=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,cd=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,dd=wr.section`
  margin-bottom: 48px;
`,ud=(wr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),pd=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,fd=wr.label`
  font-weight: 600;
  color: #0F172A;
`,hd=wr.select`
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
`,md=(wr.input`
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
`,wr.div`
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`),gd="light.a",xd="dark.a",bd=[{label:"Item",href:"/"},{label:"Item",href:"/item2"},{label:"Item",href:"/item3"},{label:"Item",href:"/item4"},{label:"Item",href:"/item5"}],vd=()=>{const[e,n]=(0,t.useState)(gd),[r,o]=(0,t.useState)(!0),[i,a]=(0,t.useState)(2),s=e===xd,l=e=>bd.slice(0,Math.max(1,Math.min(e,bd.length)));return(0,Tr.jsxs)(ad,{children:[(0,Tr.jsxs)(sd,{children:[(0,Tr.jsx)(ld,{children:"Breadcrumb"}),(0,Tr.jsx)(cd,{children:"The Breadcrumb Component is a navigation aid that provides users with a trail of links representing their current location within a hierarchical structure. It allows users to easily trace their path back to previous pages or sections within an application or website."})]}),(0,Tr.jsxs)(dd,{children:[(0,Tr.jsxs)(ud,{children:[(0,Tr.jsxs)(pd,{children:[(0,Tr.jsx)(fd,{children:"Number of Items"}),(0,Tr.jsxs)(hd,{value:i,onChange:e=>a(parseInt(e.target.value)),children:[(0,Tr.jsx)("option",{value:2,children:"2 items"}),(0,Tr.jsx)("option",{value:3,children:"3 items"}),(0,Tr.jsx)("option",{value:4,children:"4 items"}),(0,Tr.jsx)("option",{value:5,children:"5 items"})]})]}),(0,Tr.jsxs)(pd,{children:[(0,Tr.jsx)(fd,{children:"Show Back Button"}),(0,Tr.jsxs)(hd,{value:r?"yes":"no",onChange:e=>o("yes"===e.target.value),children:[(0,Tr.jsx)("option",{value:"yes",children:"Yes"}),(0,Tr.jsx)("option",{value:"no",children:"No"})]})]}),(0,Tr.jsxs)(pd,{children:[(0,Tr.jsx)(fd,{children:"Theme"}),(0,Tr.jsxs)(hd,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:gd,children:"Light.a"}),(0,Tr.jsx)("option",{value:xd,children:"Dark.a"})]})]})]}),(0,Tr.jsx)(md,{isDarkMode:s,children:(0,Tr.jsx)(id,{items:l(i),showBackButton:r,backButtonText:"Back",separatorType:Wc.CHEVRON,size:Vc.MEDIUM,isDarkMode:s,onBackClick:e=>{console.log("Back button clicked")},onItemClick:(e,t)=>{console.log(`Breadcrumb item ${e} clicked:`,l(i)[e])}})})]})]})},yd="unselected",kd="selected",wd={LIGHT:"light.a",DARK:"dark.a"},Ad={SMALL:"small",MEDIUM:"medium",LARGE:"large"},jd=(e,t,n,r,o,i)=>t===wd.DARK?n?e===kd?{border:"#9CA3AF",background:"#27272A",dot:"#9CA3AF",label:"#9CA3AF"}:{border:"#9CA3AF",background:"#27272A",dot:"transparent",label:"#9CA3AF"}:e===kd?{border:"#93C5FD",background:"transparent",dot:"#93C5FD",label:"#D4D4D8"}:o?{border:"#D4D4D8",background:"transparent",dot:"transparent",label:"#D4D4D8"}:{border:"#71717A",background:"transparent",dot:"transparent",label:"#D4D4D8"}:n?e===kd?{border:"#64748B",background:"#F1F5F9",dot:"#9CA3AF",label:"#9CA3AF"}:{border:"#64748B",background:"#F1F5F9",dot:"transparent",label:"#9CA3AF"}:e===kd?o?{border:"#1E40AF",background:"#1E40AF",dot:"#1E40AF",label:"#0F172A"}:{border:"#1D4ED8",background:"#1D4ED8",dot:"#1D4ED8",label:"#0F172A"}:o?{border:"#0F172A",background:"transparent",dot:"transparent",label:"#0F172A"}:{border:"#64748B",background:"transparent",dot:"transparent",label:"#0F172A"},Fd=e=>{switch(e){case Ad.SMALL:return{radioSize:"16px",dotSize:"8px",labelFontSize:"14px",focusRingSize:"24px"};case Ad.LARGE:return{radioSize:"24px",dotSize:"12px",labelFontSize:"16px",focusRingSize:"32px"};default:return{radioSize:"14px",dotSize:"8px",labelFontSize:"14px",focusRingSize:"20px"}}},Sd=wr.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${e=>e.isDisabled?"not-allowed":"pointer"};
  user-select: none;
  position: relative;
  outline: none;
`,Cd=wr.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`,Ed=wr.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  position: relative;
  flex-shrink: 0;

  ${e=>e.isHovered&&e.theme===wd.LIGHT&&e.state===yd&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      right: -4px;\n      bottom: -4px;\n      background: #E2E8F0;\n      border-radius: 50%;\n      opacity: 0.8;\n      z-index: 0;\n      transition: all 0.3s ease-out;\n    }\n  "}

  ${e=>e.isHovered&&e.theme===wd.LIGHT&&e.state===kd&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      right: -4px;\n      bottom: -4px;\n      background: #DBEAFE;\n      border-radius: 50%;\n      opacity: 0.8;\n      z-index: 0;\n      transition: all 0.3s ease-out;\n    }\n  "}

  ${e=>e.isHovered&&e.theme===wd.DARK&&e.state===yd&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      right: -4px;\n      bottom: -4px;\n      background: #64748B;\n      border-radius: 50%;\n      opacity: 0.25;\n      z-index: 0;\n      transition: all 0.3s ease-out;\n    }\n  "}

  ${e=>e.isHovered&&e.theme===wd.DARK&&e.state===kd&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      right: -4px;\n      bottom: -4px;\n      background: #3B82F6;\n      border-radius: 50%;\n      opacity: 0.45;\n      z-index: 0;\n      transition: all 0.3s ease-out;\n    }\n  "}
`,Dd=wr.div`
  width: ${e=>Fd(e.size).radioSize};
  height: ${e=>Fd(e.size).radioSize};
  border: 2px solid ${e=>jd(e.state,e.theme,e.isDisabled,e.isFocused,e.isHovered,e.isPressed).border};
  border-radius: 50%;
  background: ${e=>e.state===kd?"transparent":jd(e.state,e.theme,e.isDisabled,e.isFocused,e.isHovered,e.isPressed).background};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;

  ${e=>e.isFocused&&e.theme===wd.LIGHT&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -8px;\n      left: -8px;\n      right: -8px;\n      bottom: -8px;\n      border: 3px solid #1D4ED8;\n      border-radius: 50%;\n    }\n  "}

  ${e=>e.isFocused&&e.theme===wd.DARK&&"\n    &::after {\n      content: '';\n      position: absolute;\n      top: -8px;\n      left: -8px;\n      right: -8px;\n      bottom: -8px;\n      border: 3px solid #93C5FD;\n      border-radius: 50%;\n    }\n  "}
`,$d=wr.div`
  width: ${e=>Fd(e.size).dotSize};
  height: ${e=>Fd(e.size).dotSize};
  border-radius: 50%;
  background: ${e=>jd(e.state,e.theme,e.isDisabled,e.isFocused,e.isHovered,e.isPressed).dot};
  transition: all 0.2s ease-in-out;
  opacity: ${e=>e.state===kd?1:0};
  position: relative;
  z-index: 2;
`,Md=wr.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${e=>Fd(e.size).radioSize-8}px;
  height: ${e=>Fd(e.size).radioSize-8}px;
  border-radius: 50%;
  background: ${e=>e.theme===wd.LIGHT?"#FFFFFF":"transparent"};
  opacity: ${e=>e.state===kd?1:0};
  transition: all 0.2s ease-in-out;
  z-index: 1;
`,Td=wr.label`
  font-size: ${e=>Fd(e.size).labelFontSize};
  font-weight: 600;
  color: ${e=>jd(e.state,e.theme,e.isDisabled,e.isFocused,e.isHovered,e.isPressed).label};
  cursor: ${e=>e.isDisabled?"not-allowed":"pointer"};
  margin: 0;
  margin-top: 2px;
  display: flex;
  align-items: center;
`,Id=(0,t.forwardRef)((e,n)=>{let{checked:r=!1,disabled:o=!1,label:i="",name:a="",value:s="",size:l=Ad.MEDIUM,theme:c=wd.LIGHT,onChange:d,onFocus:u,onBlur:p,className:f,id:h,...m}=e;const[g,x]=(0,t.useState)(!1),[b,v]=(0,t.useState)(!1),[y,k]=(0,t.useState)(!1),w=r?kd:yd,A=h||`radio-${Math.random().toString(36).substr(2,9)}`,j=e=>{if(!o&&d){x(!1);const t={...e,target:{...e.target,checked:!r,value:s}};d(t)}};return(0,Tr.jsxs)(Sd,{isDisabled:o,onMouseEnter:()=>{o||v(!0)},onMouseLeave:()=>{v(!1),k(!1)},onMouseDown:()=>{o||k(!0)},onMouseUp:()=>{k(!1)},onClick:j,onKeyDown:e=>{if(!o&&(" "===e.key||"Enter"===e.key)){e.preventDefault();const t={...e,target:{...e.target,checked:!r,value:s}};d(t)}},tabIndex:o?-1:0,role:"radio","aria-checked":r,className:f,children:[(0,Tr.jsx)(Cd,{ref:n,type:"radio",id:A,name:a,value:s,checked:r,disabled:o,onChange:e=>{if(!o&&d){const t={...e,target:{...e.target,checked:!r,value:e.target.value}};d(t)}},onFocus:e=>{o||(x(!0),u&&u(e))},onBlur:e=>{x(!1),p&&p(e)},...m}),(0,Tr.jsx)(Ed,{state:w,theme:c,isDisabled:o,isFocused:g,isHovered:b,isPressed:y,size:l,children:(0,Tr.jsxs)(Dd,{state:w,theme:c,isDisabled:o,isFocused:g,isHovered:b,isPressed:y,size:l,children:[(0,Tr.jsx)(Md,{state:w,theme:c,size:l}),(0,Tr.jsx)($d,{state:w,theme:c,isDisabled:o,isFocused:g,isHovered:b,isPressed:y,size:l})]})}),i&&(0,Tr.jsx)(Td,{htmlFor:A,isDisabled:o,state:w,theme:c,isFocused:g,isHovered:b,isPressed:y,size:l,onClick:e=>{e.preventDefault(),j(e)},children:i})]})});Id.displayName="Radio";const zd=Id,Bd=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Ld=wr.div`
  margin-bottom: 48px;
`,Rd=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Pd=wr.p`
  font-size: 16px;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Od=wr.section`
  margin-bottom: 48px;
`,Nd=(wr.h2`
  font-size: 24px;
  margin-bottom: 24px;
  color: #0F172A;
`,wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),_d=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Hd=wr.label`
  font-weight: 600;
  color: #0F172A;
`,Ud=wr.select`
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
`,Wd=(wr.input`
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
`,wr.input`
  width: 16px;
  height: 16px;
  margin: 0;
`,wr.div`
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`),Vd=(wr.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,wr.div`
  display: flex;
  gap: 32px;
  align-items: center;
`,"light.a"),Gd="dark.a",Kd=()=>{const[e,n]=(0,t.useState)(Ad.MEDIUM),[r,o]=(0,t.useState)(Vd),[i,a]=(0,t.useState)("Label"),[s,l]=(0,t.useState)(!1),[c,d]=(0,t.useState)(!1),[u,p]=(0,t.useState)(!1),[f,h]=(0,t.useState)(""),[m,g]=(0,t.useState)(""),x=r===Gd;return(0,Tr.jsxs)(Bd,{children:[(0,Tr.jsxs)(Ld,{children:[(0,Tr.jsx)(Rd,{children:"Radio"}),(0,Tr.jsx)(Pd,{children:"The Radio Component is used for single-choice selections from multiple options. It provides a clean, accessible interface for mutually exclusive choices with support for various states, themes, and sizes."})]}),(0,Tr.jsxs)(Od,{children:[(0,Tr.jsxs)(Nd,{children:[(0,Tr.jsxs)(_d,{children:[(0,Tr.jsx)(Hd,{children:"State"}),(0,Tr.jsxs)(Ud,{value:s?"disabled":"default",onChange:e=>l("disabled"===e.target.value),children:[(0,Tr.jsx)("option",{value:"default",children:"Default"}),(0,Tr.jsx)("option",{value:"disabled",children:"Disabled"})]})]}),(0,Tr.jsxs)(_d,{children:[(0,Tr.jsx)(Hd,{children:"Theme"}),(0,Tr.jsxs)(Ud,{value:r,onChange:e=>o(e.target.value),children:[(0,Tr.jsx)("option",{value:Vd,children:"Light.a"}),(0,Tr.jsx)("option",{value:Gd,children:"Dark.a"})]})]})]}),(0,Tr.jsx)(Wd,{isDarkMode:x,children:(0,Tr.jsx)("div",{children:(0,Tr.jsx)(zd,{size:e,theme:r,label:i,disabled:s,checked:"option1"===f,onChange:e=>h(e.target.checked?"option1":""),value:"option1",name:"single-radio"})})})]})]})},Yd={RADIO:"radio",CHECKBOX:"checkbox"},Xd={LIGHT:"light.a",DARK:"dark.a"};let qd;try{qd="string"===typeof ri?JSON.parse(ri):ri}catch(ny){console.error("Failed to parse cake-color-tokens.json:",ny),qd={}}const Qd=(e,t)=>{const n=t===Xd.DARK,r=n?"darkA":"lightA";if(qd[e]&&qd[e][r])return qd[e][r];const o={borderPrimary:{lightA:"#CBD5E1",darkA:"#52525B"},borderRadioPrimary:{lightA:"#1D4ED8",darkA:"#93C5FD"},surfaceItem:{lightA:"#FFFFFF",darkA:"#18181B"},surfaceItemHover:{lightA:"#F1F5F9",darkA:"#27272A"},surfaceItemSelected:{lightA:"#EFF6FF",darkA:"#60A5FA0D"},surfaceItemSelectedHover:{lightA:"#DBEAFE",darkA:"#60A5FA1A"},textPrimary:{lightA:"#0F172A",darkA:"#D4D4D8"}};return o[e]?o[e][r]:(console.warn(`Color token "${e}" not found in cake-color-tokens.json`),n?"#52525B":"#CBD5E1")},Jd=wr.div`
  display: inline-flex;
  align-items: center;
  gap: 0;
  position: relative;
`,Zd=wr.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  border: 2px solid ${e=>e.$disabled?Qd("borderPrimary",e.$theme):e.$selected?Qd("borderRadioPrimary",e.$theme):Qd("borderPrimary",e.$theme)};
  background: ${e=>e.$disabled?Qd("surfaceItem",e.$theme):e.$selected?e.$isHovered?Qd("surfaceItemSelectedHover",e.$theme):Qd("surfaceItemSelected",e.$theme):e.$isHovered?Qd("surfaceItemHover",e.$theme):Qd("surfaceItem",e.$theme)};
  border-radius: 4px;
  padding: 12px 24px 12px 12px;
  box-sizing: border-box;
  transition: all 0.15s ease-in-out;
  user-select: none;
  
  &:not(:last-child) {
    margin-right: 16px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    border: 3px solid ${e=>Qd("borderRadioPrimary",e.$theme)};
    border-radius: 6px;
    opacity: ${e=>e.$isFocused?1:0};
    pointer-events: none;
    transition: opacity 0.2s ease;
    z-index: 1;
  }
  
  &:focus-visible {
    outline: none;
  }
  
  &:active:not([$disabled]) {
    transform: scale(0.98);
  }
`,eu=wr.div`
  pointer-events: none;
  width: 100%;
  display: flex;
  align-items: center;
  
  /* Hide from screen readers since segment container handles announcements */
  & > * {
    pointer-events: none;
  }
`,tu=(0,t.forwardRef)((e,n)=>{let{mode:r=Yd.RADIO,options:o=[],value:i,defaultValue:a,values:s,defaultValues:l,onChange:c,theme:d=Xd.LIGHT,disabled:u=!1,name:p,className:f,id:h,...m}=e;const g=r===Yd.RADIO,x=g?void 0!==i:void 0!==s,[b,v]=(0,t.useState)(g?a:void 0),[y,k]=(0,t.useState)(g?void 0:l||[]),w=g?x?i:b:void 0,A=g?void 0:x?s:y,j=(0,t.useCallback)(e=>g?w===e:Array.isArray(A)&&A.includes(e),[g,w,A]),F=((0,t.useCallback)((e,t)=>{if(!u)if(g){const n=t?e:void 0;x||v(n),c&&c(n)}else{const n=Array.isArray(A)?[...A]:[];let r;r=t?[...n,e]:n.filter(t=>t!==e),x||k(r),c&&c(r)}},[u,g,x,A,c]),(0,t.useMemo)(()=>g&&p?p:g&&!p?`segmented-control-radio-${Math.random().toString(36).substr(2,9)}`:void 0,[g,p])),S=h||`segmented-control-${Math.random().toString(36).substr(2,9)}`,[C,E]=(0,t.useState)(null),[D,$]=(0,t.useState)(null),M=(0,t.useCallback)((e,t)=>{if(!u)if(t&&t.stopPropagation(),g){const t=w===e?void 0:e;x||v(t),c&&c(t)}else{const t=Array.isArray(A)?[...A]:[],n=t.includes(e)?t.filter(t=>t!==e):[...t,e];x||k(n),c&&c(n)}},[u,g,x,w,A,c]),T=(0,t.useCallback)((e,t)=>{u||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),M(e,t))},[u,M]);return(0,Tr.jsx)(Jd,{ref:n,className:f,role:g?"radiogroup":"group",id:S,"aria-label":m["aria-label"],...m,children:o.map((e,t)=>{const n=j(e.value),r=u||e.disabled,o=C===e.value,i=D===e.value;return g?(0,Tr.jsx)(Zd,{$selected:n,$isHovered:o,$isFocused:i,$disabled:r,$theme:d,onClick:t=>M(e.value,t),onKeyDown:t=>T(e.value,t),onFocus:()=>!r&&$(e.value),onBlur:()=>$(null),onMouseEnter:()=>!r&&E(e.value),onMouseLeave:()=>E(null),tabIndex:r?-1:0,role:"radio","aria-checked":n,"aria-label":e.label,children:(0,Tr.jsx)(eu,{"aria-hidden":"true",children:(0,Tr.jsx)(zd,{checked:n,disabled:r,label:e.label,name:F,value:e.value,theme:d})})},e.value):(0,Tr.jsx)(Zd,{$selected:n,$isHovered:o,$isFocused:i,$disabled:r,$theme:d,onClick:t=>M(e.value,t),onKeyDown:t=>T(e.value,t),onFocus:()=>!r&&$(e.value),onBlur:()=>$(null),onMouseEnter:()=>!r&&E(e.value),onMouseLeave:()=>E(null),tabIndex:r?-1:0,role:"checkbox","aria-checked":n,"aria-label":e.label,children:(0,Tr.jsx)(eu,{"aria-hidden":"true",children:(0,Tr.jsx)(co,{checked:n,disabled:r,label:e.label,value:e.value,theme:d})})},e.value)})})});tu.displayName="SegmentedControl";const nu=tu,ru=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,ou=wr.div`
  margin-bottom: 48px;
`,iu=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,au=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,su=wr.section`
  margin-bottom: 48px;
`,lu=wr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,cu=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,du=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,uu=wr.label`
  font-weight: 600;
  color: #0F172A;
`,pu=wr.select`
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
`,fu=wr.div`
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,hu=wr.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,mu=wr.p`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.isDarkMode?"#D4D4D8":"#0F172A"};
  margin: 0;
`,gu=()=>{const[e,n]=(0,t.useState)(Yd.RADIO),[r,o]=(0,t.useState)(Xd.LIGHT),[i,a]=(0,t.useState)(!1),[s,l]=(0,t.useState)("option1"),[c,d]=(0,t.useState)(["option1"]),u=r===Xd.DARK,p=[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"}];return(0,Tr.jsxs)(ru,{children:[(0,Tr.jsxs)(ou,{children:[(0,Tr.jsx)(iu,{children:"Segmented Control"}),(0,Tr.jsx)(au,{children:"A segmented control component that displays Radio or Checkbox components in a segmented layout. Supports both single selection (radio mode) and multiple selection (checkbox mode) with full accessibility support and theme variants."})]}),(0,Tr.jsxs)(su,{children:[(0,Tr.jsx)(lu,{children:"Interactive Example"}),(0,Tr.jsxs)(cu,{children:[(0,Tr.jsxs)(du,{children:[(0,Tr.jsx)(uu,{children:"Mode"}),(0,Tr.jsxs)(pu,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:Yd.RADIO,children:"Radio (Single Selection)"}),(0,Tr.jsx)("option",{value:Yd.CHECKBOX,children:"Checkbox (Multiple Selection)"})]})]}),(0,Tr.jsxs)(du,{children:[(0,Tr.jsx)(uu,{children:"Theme"}),(0,Tr.jsxs)(pu,{value:r,onChange:e=>o(e.target.value),children:[(0,Tr.jsx)("option",{value:Xd.LIGHT,children:"Light.a"}),(0,Tr.jsx)("option",{value:Xd.DARK,children:"Dark.a"})]})]}),(0,Tr.jsxs)(du,{children:[(0,Tr.jsx)(uu,{children:"State"}),(0,Tr.jsxs)(pu,{value:i?"disabled":"default",onChange:e=>a("disabled"===e.target.value),children:[(0,Tr.jsx)("option",{value:"default",children:"Default"}),(0,Tr.jsx)("option",{value:"disabled",children:"Disabled"})]})]})]}),(0,Tr.jsx)(fu,{isDarkMode:u,children:(0,Tr.jsxs)(hu,{children:[(0,Tr.jsx)(mu,{isDarkMode:u,children:e===Yd.RADIO?"Radio Mode (Single Selection)":"Checkbox Mode (Multiple Selection)"}),e===Yd.RADIO?(0,Tr.jsx)(nu,{mode:Yd.RADIO,options:p,value:s,onChange:e=>l(e),theme:r,disabled:i,name:"segmented-radio-example"}):(0,Tr.jsx)(nu,{mode:Yd.CHECKBOX,options:p,values:c,onChange:e=>d(e),theme:r,disabled:i})]})})]})]})},xu={LIGHT:"light.a",DARK:"dark.a"},bu="default",vu="focused",yu="error",ku="success",wu="required_empty",Au="disabled",ju=wr.div`
  position: relative;
  width: 100%;
`,Fu=wr.input`
  width: 100%;
  height: 40px;
  padding: 8px 12px; /* Matching Figma: py-[8px] pl-[12px] pr-[8px] */
  border: 2px solid ${e=>e.$colors.border};
  border-radius: 4px; /* Matching Figma: rounded-[4px] */
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* Matching Figma font stack */
  font-size: 14px; /* Matching Figma: text-[14px] */
  font-weight: 400; /* Matching Figma: SegoeUI Regular */
  line-height: 20px; /* Matching Figma: leading-[20px] */
  letter-spacing: 0;
  color: ${e=>e.$colors.text};
  background-color: ${e=>e.$colors.background};
  transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  box-sizing: border-box;
  
  /* Ensure consistent rendering across browsers */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  &::placeholder {
    color: ${e=>e.$colors.placeholder};
    font-weight: 400;
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  }
  
  &:hover:not(:disabled) {
    border-color: ${e=>e.$colors.hoverBorder||e.$colors.border};
    background-color: ${e=>"#F8FAFC"===e.$colors.background?"#FFFFFF":e.$colors.background}; /* Hover changes background to white */
  }
  
  &:hover:disabled {
    cursor: not-allowed;
  }
  
  &:focus {
    outline: none;
    border-width: 2px;
    border-color: ${e=>e.$colors.focusBorder||e.$colors.border};
    background-color: ${e=>"#F8FAFC"===e.$colors.background?"#FFFFFF":e.$colors.background}; /* Focus changes background to white */
  }
  
  &:disabled {
    cursor: not-allowed;
    background-color: ${e=>e.$colors.disabledBackground||e.$colors.background};
  }
  
  &:active:not(:disabled) {
    border-color: ${e=>e.$colors.activeBorder||e.$colors.border};
  }
`,Su=wr.div`
  display: flex;
  gap: 4px; /* Matching Figma: gap-[4px] */
  align-items: flex-start;
  margin-bottom: 4px; /* Matching Figma: gap-[4px] */
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* Matching Figma font stack */
  font-size: 14px; /* Matching Figma: text-[14px] */
  font-weight: 600; /* Matching Figma: SegoeUI Semibold */
  line-height: 20px; /* Matching Figma: leading-[20px] */
  letter-spacing: 0;
`,Cu=wr.span`
  color: ${e=>e.$colors.error};
  font-weight: 600; /* Matching Figma: SegoeUI Semibold */
  white-space: nowrap;
  flex-shrink: 0;
`,Eu=wr.label`
  color: ${e=>e.$colors.label};
  font-weight: 600; /* Matching Figma: SegoeUI Semibold */
  flex: 1;
  min-width: 0;
`,Du=wr.p`
  margin: 6px 0 0 0; /* Matching Figma spacing */
  font-size: 12px;
  font-weight: 400;
  color: ${e=>e.$colors.helper};
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* Matching Figma font stack */
  line-height: 1.4;
  letter-spacing: 0;
`,$u=wr.div`
  margin: 6px 0 0 0; /* Matching Figma spacing */
  display: flex;
  align-items: center;
  gap: 8px; /* Matching Figma: gap-[8px] */
  font-size: 12px;
  font-weight: 400;
  color: ${e=>e.$colors.error};
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* Matching Figma font stack */
  line-height: 1.4;
  letter-spacing: 0;
`,Mu=wr.div`
  margin: 6px 0 0 0; /* Matching Figma spacing */
  display: flex;
  align-items: center;
  gap: 8px; /* Matching Figma: gap-[8px] */
  font-size: 12px;
  font-weight: 400;
  color: ${e=>e.$colors.helper};
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* Matching Figma font stack */
  line-height: 1.4;
  letter-spacing: 0;
`,Tu=(0,t.forwardRef)((e,n)=>{let{label:r,placeholder:o,value:i="",onChange:a,error:s=!1,errorMessage:l,success:c=!1,successMessage:d,helperText:u,disabled:p=!1,required:f=!1,type:h="text",theme:m=xu.LIGHT,state:g,id:x,name:b,className:v,style:y,"aria-describedby":k,...w}=e;const[A,j]=(0,t.useState)(!1),[F,S]=(0,t.useState)(!1),[C,E]=(0,t.useState)(i),D=void 0!==i,$=D?i:C,M=g||(p?Au:s?yu:c?ku:A?vu:!f||$&&""!==$.trim()?bu:wu),T=$&&""!==$.trim(),I=function(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return t===xu.DARK?e===Au?{border:"#374151",background:"#1F2937",text:"#6B7280",placeholder:"#6B7280",label:"#6B7280",helper:"#6B7280",error:"#FCA5A5",disabledBackground:"#1F2937",hoverBorder:"#374151",focusBorder:"#374151",activeBorder:"#374151"}:e===yu?{border:"#FCA5A5",background:"#2F0808",text:"#D4D4D8",placeholder:"#A1A1AA",label:"#D4D4D8",helper:"#FCA5A5",error:"#FCA5A5",hoverBorder:"#F87171",focusBorder:"#FCA5A5",activeBorder:"#FCA5A5"}:e===vu?{border:"#3B82F6",background:"#1F2937",text:"#F9FAFB",placeholder:"#9CA3AF",label:"#F9FAFB",helper:"#9CA3AF",error:"#FCA5A5",hoverBorder:"#3B82F6",focusBorder:"#3B82F6",activeBorder:"#3B82F6"}:e===ku?{border:"#34D399",background:"#064E3B",text:"#D4D4D8",placeholder:"#A1A1AA",label:"#D4D4D8",helper:"#34D399",error:"#FCA5A5",hoverBorder:"#10B981",focusBorder:"#34D399",activeBorder:"#34D399"}:{border:"#4B5563",background:"#1F2937",text:"#F9FAFB",placeholder:"#9CA3AF",label:"#F9FAFB",helper:"#9CA3AF",error:"#FCA5A5",hoverBorder:"#6B7280",focusBorder:"#3B82F6",activeBorder:"#3B82F6"}:e===Au?{border:"#9CA3AF",background:"#F1F5F9",text:"#475569",placeholder:"#9CA3AF",label:"#475569",helper:"#475569",error:"#dc2626",disabledBackground:"#F1F5F9",hoverBorder:"#9CA3AF",focusBorder:"#9CA3AF",activeBorder:"#9CA3AF"}:e===yu?{border:"#B91C1C",background:"#FEF2F2",text:"#0F172A",placeholder:"#9CA3AF",label:"#0F172A",helper:"#B91C1C",error:"#dc2626",hoverBorder:"#F87171",focusBorder:"#B91C1C",activeBorder:"#B91C1C"}:e===ku?{border:"#047857",background:"#ECFDF5",text:"#0F172A",placeholder:"#9CA3AF",label:"#0F172A",helper:"#047857",error:"#dc2626",hoverBorder:"#059669",focusBorder:"#047857",activeBorder:"#047857"}:e===wu?{border:"#9CA3AF",background:"#F1F5F9",text:"#475569",placeholder:"#9CA3AF",label:"#475569",helper:"#9CA3AF",error:"#dc2626",hoverBorder:"#9CA3AF",focusBorder:"#9CA3AF",activeBorder:"#9CA3AF"}:e===vu?{border:"#1D4ED8",background:"#FFFFFF",text:o?"#0F172A":"#475569",placeholder:"#475569",label:"#0F172A",helper:"#64748B",error:"#dc2626",hoverBorder:"#1D4ED8",focusBorder:"#1D4ED8",activeBorder:"#1D4ED8"}:r&&!n?{border:"#64748B",background:"#FFFFFF",text:o?"#0F172A":"#475569",placeholder:"#475569",label:"#0F172A",helper:"#64748B",error:"#dc2626",hoverBorder:"#9CA3AF",focusBorder:"#1D4ED8",activeBorder:"#1D4ED8"}:{border:"#64748B",background:o?"#FFFFFF":"#F8FAFC",text:o?"#0F172A":"#475569",placeholder:"#475569",label:"#0F172A",helper:"#64748B",error:"#dc2626",hoverBorder:"#9CA3AF",focusBorder:"#1D4ED8",activeBorder:"#1D4ED8"}}(M,m,A,F,T);(0,t.useEffect)(()=>{D||E(i)},[i,D]);const z=x||`textfield-${Math.random().toString(36).substr(2,9)}`,B=u?`${z}-helper`:void 0,L=l?`${z}-error`:void 0,R=d?`${z}-success`:void 0,P=[B,L,R].filter(Boolean).join(" ")||void 0;return(0,Tr.jsxs)(ju,{className:v,style:y,onMouseEnter:()=>{p||S(!0)},onMouseLeave:()=>{S(!1)},children:[r&&(0,Tr.jsxs)(Su,{children:[f&&(0,Tr.jsx)(Cu,{$colors:I,children:"*"}),(0,Tr.jsx)(Eu,{htmlFor:z,$colors:I,children:r})]}),(0,Tr.jsx)(Fu,{ref:n,type:h,id:z,name:b,placeholder:o,value:$,onChange:e=>{if(p)return;const t=e.target.value;D||E(t),a&&a(t)},onFocus:e=>{p||j(!0)},onBlur:e=>{p||j(!1)},disabled:p,$colors:I,$state:M,$theme:m,"aria-describedby":P||k,"aria-invalid":s,"aria-required":f,"data-testid":w["data-testid"],...w}),s&&l&&(0,Tr.jsxs)($u,{id:L,$colors:I,children:[(0,Tr.jsx)(Ai.A,{style:{fontSize:16}}),l]}),c&&d&&(0,Tr.jsxs)(Mu,{id:R,$colors:I,children:[(0,Tr.jsx)(ki.A,{style:{fontSize:16}}),d]}),!s&&!c&&u&&(0,Tr.jsx)(Du,{id:B,$colors:I,children:u})]})});Tu.displayName="TextField";const Iu=Tu,zu={LIGHT:"light.a",DARK:"dark.a"},Bu="default",Lu="focused",Ru="error",Pu="success",Ou="required_empty",Nu="disabled",_u=wr.div`
  position: relative;
  width: 100%;
`,Hu=wr.textarea`
  width: 100%;
  padding: 8px 12px; /* Matching Figma: py-[8px] pl-[12px] pr-[8px] */
  border: 2px solid ${e=>e.$colors.border};
  border-radius: 4px; /* Matching Figma: rounded-[4px] */
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* Matching Figma font stack */
  font-size: 14px; /* Matching Figma: text-[14px] */
  font-weight: 400; /* Matching Figma: SegoeUI Regular */
  line-height: 20px; /* Matching Figma: leading-[20px] */
  letter-spacing: 0;
  color: ${e=>e.$colors.text};
  background-color: ${e=>e.$colors.background};
  transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  resize: ${e=>e.$resize};
  min-height: ${e=>1.4*e.$rows+.75}em;
  box-sizing: border-box;
  
  /* Ensure consistent rendering across browsers */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  &::placeholder {
    color: ${e=>e.$colors.placeholder};
    font-weight: 400;
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  }
  
  &:hover:not(:disabled) {
    border-color: ${e=>e.$colors.hoverBorder||e.$colors.border};
    background-color: ${e=>"#F8FAFC"===e.$colors.background?"#FFFFFF":e.$colors.background}; /* Hover changes background to white */
  }
  
  &:hover:disabled {
    cursor: not-allowed;
  }
  
  &:focus {
    outline: none;
    border-width: 2px;
    border-color: ${e=>e.$colors.focusBorder||e.$colors.border};
    background-color: ${e=>"#F8FAFC"===e.$colors.background?"#FFFFFF":e.$colors.background}; /* Focus changes background to white */
  }
  
  &:disabled {
    cursor: not-allowed;
    background-color: ${e=>e.$colors.disabledBackground||e.$colors.background};
  }
  
  &:active:not(:disabled) {
    border-color: ${e=>e.$colors.activeBorder||e.$colors.border};
  }
`,Uu=wr.div`
  display: flex;
  gap: 4px; /* Matching Figma: gap-[4px] */
  align-items: flex-start;
  margin-bottom: 4px; /* Matching Figma: gap-[4px] */
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* Matching Figma font stack */
  font-size: 14px; /* Matching Figma: text-[14px] */
  font-weight: 600; /* Matching Figma: SegoeUI Semibold */
  line-height: 20px; /* Matching Figma: leading-[20px] */
  letter-spacing: 0;
`,Wu=wr.span`
  color: ${e=>e.$colors.error};
  font-weight: 600; /* Matching Figma: SegoeUI Semibold */
  white-space: nowrap;
  flex-shrink: 0;
`,Vu=wr.label`
  color: ${e=>e.$colors.label};
  font-weight: 600; /* Matching Figma: SegoeUI Semibold */
  flex: 1;
  min-width: 0;
`,Gu=wr.p`
  margin: 6px 0 0 0; /* Matching Figma spacing */
  font-size: 12px;
  font-weight: 400;
  color: ${e=>e.$colors.helper};
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* Matching Figma font stack */
  line-height: 1.4;
  letter-spacing: 0;
`,Ku=wr.div`
  margin: 6px 0 0 0; /* Matching Figma spacing */
  display: flex;
  align-items: center;
  gap: 8px; /* Matching Figma: gap-[8px] */
  font-size: 12px;
  font-weight: 400;
  color: ${e=>e.$colors.error};
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* Matching Figma font stack */
  line-height: 1.4;
  letter-spacing: 0;
`,Yu=wr.div`
  margin: 6px 0 0 0; /* Matching Figma spacing */
  display: flex;
  align-items: center;
  gap: 8px; /* Matching Figma: gap-[8px] */
  font-size: 12px;
  font-weight: 400;
  color: ${e=>e.$colors.helper};
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* Matching Figma font stack */
  line-height: 1.4;
  letter-spacing: 0;
`,Xu=(0,t.forwardRef)((e,n)=>{let{label:r,placeholder:o,value:i="",onChange:a,error:s=!1,errorMessage:l,success:c=!1,successMessage:d,helperText:u,disabled:p=!1,required:f=!1,rows:h=4,resize:m="vertical",theme:g=zu.LIGHT,state:x,id:b,name:v,className:y,style:k,"aria-describedby":w,...A}=e;const[j,F]=(0,t.useState)(!1),[S,C]=(0,t.useState)(!1),[E,D]=(0,t.useState)(i),$=void 0!==i,M=$?i:E,T=x||(p?Nu:s?Ru:c?Pu:j?Lu:!f||M&&""!==M.trim()?Bu:Ou),I=M&&""!==M.trim(),z=function(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return t===zu.DARK?e===Nu?{border:"#374151",background:"#1F2937",text:"#6B7280",placeholder:"#6B7280",label:"#6B7280",helper:"#6B7280",error:"#FCA5A5",disabledBackground:"#1F2937",hoverBorder:"#374151",focusBorder:"#374151",activeBorder:"#374151"}:e===Ru?{border:"#FCA5A5",background:"#2F0808",text:"#D4D4D8",placeholder:"#A1A1AA",label:"#D4D4D8",helper:"#FCA5A5",error:"#FCA5A5",hoverBorder:"#F87171",focusBorder:"#FCA5A5",activeBorder:"#FCA5A5"}:e===Lu?{border:"#3B82F6",background:"#1F2937",text:"#F9FAFB",placeholder:"#9CA3AF",label:"#F9FAFB",helper:"#9CA3AF",error:"#FCA5A5",hoverBorder:"#3B82F6",focusBorder:"#3B82F6",activeBorder:"#3B82F6"}:e===Pu?{border:"#34D399",background:"#064E3B",text:"#D4D4D8",placeholder:"#A1A1AA",label:"#D4D4D8",helper:"#34D399",error:"#FCA5A5",hoverBorder:"#10B981",focusBorder:"#34D399",activeBorder:"#34D399"}:{border:"#4B5563",background:"#1F2937",text:"#F9FAFB",placeholder:"#9CA3AF",label:"#F9FAFB",helper:"#9CA3AF",error:"#FCA5A5",hoverBorder:"#6B7280",focusBorder:"#3B82F6",activeBorder:"#3B82F6"}:e===Nu?{border:"#9CA3AF",background:"#F1F5F9",text:"#475569",placeholder:"#9CA3AF",label:"#475569",helper:"#475569",error:"#dc2626",disabledBackground:"#F1F5F9",hoverBorder:"#9CA3AF",focusBorder:"#9CA3AF",activeBorder:"#9CA3AF"}:e===Ru?{border:"#B91C1C",background:"#FEF2F2",text:"#0F172A",placeholder:"#9CA3AF",label:"#0F172A",helper:"#B91C1C",error:"#dc2626",hoverBorder:"#F87171",focusBorder:"#B91C1C",activeBorder:"#B91C1C"}:e===Pu?{border:"#047857",background:"#ECFDF5",text:"#0F172A",placeholder:"#9CA3AF",label:"#0F172A",helper:"#047857",error:"#dc2626",hoverBorder:"#059669",focusBorder:"#047857",activeBorder:"#047857"}:e===Ou?{border:"#9CA3AF",background:"#F1F5F9",text:"#475569",placeholder:"#9CA3AF",label:"#475569",helper:"#9CA3AF",error:"#dc2626",hoverBorder:"#9CA3AF",focusBorder:"#9CA3AF",activeBorder:"#9CA3AF"}:e===Lu?{border:"#1D4ED8",background:"#FFFFFF",text:o?"#0F172A":"#475569",placeholder:"#475569",label:"#0F172A",helper:"#64748B",error:"#dc2626",hoverBorder:"#1D4ED8",focusBorder:"#1D4ED8",activeBorder:"#1D4ED8"}:r&&!n?{border:"#64748B",background:"#FFFFFF",text:o?"#0F172A":"#475569",placeholder:"#475569",label:"#0F172A",helper:"#64748B",error:"#dc2626",hoverBorder:"#9CA3AF",focusBorder:"#1D4ED8",activeBorder:"#1D4ED8"}:{border:"#64748B",background:o?"#FFFFFF":"#F8FAFC",text:o?"#0F172A":"#475569",placeholder:"#475569",label:"#0F172A",helper:"#64748B",error:"#dc2626",hoverBorder:"#9CA3AF",focusBorder:"#1D4ED8",activeBorder:"#1D4ED8"}}(T,g,j,S,I);(0,t.useEffect)(()=>{$||D(i)},[i,$]);const B=b||`textarea-${Math.random().toString(36).substr(2,9)}`,L=u?`${B}-helper`:void 0,R=l?`${B}-error`:void 0,P=d?`${B}-success`:void 0,O=[L,R,P].filter(Boolean).join(" ")||void 0;return(0,Tr.jsxs)(_u,{className:y,style:k,onMouseEnter:()=>{p||C(!0)},onMouseLeave:()=>{C(!1)},children:[r&&(0,Tr.jsxs)(Uu,{children:[f&&(0,Tr.jsx)(Wu,{$colors:z,children:"*"}),(0,Tr.jsx)(Vu,{htmlFor:B,$colors:z,children:r})]}),(0,Tr.jsx)(Hu,{ref:n,id:B,name:v,placeholder:o,value:M,onChange:e=>{if(p)return;const t=e.target.value;$||D(t),a&&a(t)},onFocus:e=>{p||F(!0)},onBlur:e=>{p||F(!1)},disabled:p,$rows:h,$resize:m,$colors:z,$state:T,$theme:g,"aria-describedby":O||w,"aria-invalid":s,"aria-required":f,...A}),s&&l&&(0,Tr.jsxs)(Ku,{id:R,$colors:z,children:[(0,Tr.jsx)(Ai.A,{style:{fontSize:16}}),l]}),c&&d&&(0,Tr.jsxs)(Yu,{id:P,$colors:z,children:[(0,Tr.jsx)(ki.A,{style:{fontSize:16}}),d]}),!s&&!c&&u&&(0,Tr.jsx)(Gu,{id:L,$colors:z,children:u})]})});Xu.displayName="TextArea";const qu=Xu,Qu=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Ju=wr.div`
  margin-bottom: 48px;
`,Zu=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,ep=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,tp=wr.section`
  margin-bottom: 48px;
`,np=wr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,rp=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,op=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ip=wr.label`
  font-weight: 600;
  color: #0F172A;
`,ap=wr.select`
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
`,sp=(wr.input`
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
`,wr.div`
  background: ${e=>e.$isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid ${e=>e.$isDarkMode?"#52525B":"#E2E8F0"};
`),lp=wr.div`
  width: 320px;
`,cp="light.a",dp="dark.a",up="default",pp="focused",fp="error",hp="success",mp="disabled",gp=()=>{const[e,n]=(0,t.useState)(up),[r,o]=(0,t.useState)(cp),[i,a]=(0,t.useState)(!0),[s,l]=(0,t.useState)(!1),[c,d]=(0,t.useState)(""),u=r===dp,[p,f]=(0,t.useState)(up),[h,m]=(0,t.useState)(cp),[g,x]=(0,t.useState)(4),[b,v]=(0,t.useState)("vertical"),[y,k]=(0,t.useState)(!0),[w,A]=(0,t.useState)(!1),[j,F]=(0,t.useState)(""),S=h===dp;return(0,Tr.jsxs)(Qu,{children:[(0,Tr.jsxs)(Ju,{children:[(0,Tr.jsx)(Zu,{children:"Text Inputs"}),(0,Tr.jsxs)(ep,{children:["The Text Input component lets users enter and edit text in forms, dialogs, and other interfaces. It supports various states, validation, and input types to match different use cases, from short labels to longer multiline entries.",(0,Tr.jsx)("br",{}),(0,Tr.jsx)("br",{}),"Use Text Input whenever users need to provide freeform text, such as names, emails, or search terms."]})]}),(0,Tr.jsxs)(tp,{children:[(0,Tr.jsx)(np,{children:"Text field"}),(0,Tr.jsxs)(rp,{children:[(0,Tr.jsxs)(op,{children:[(0,Tr.jsx)(ip,{children:"State"}),(0,Tr.jsxs)(ap,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:up,children:"Default"}),(0,Tr.jsx)("option",{value:pp,children:"Focused"}),(0,Tr.jsx)("option",{value:fp,children:"Error"}),(0,Tr.jsx)("option",{value:hp,children:"Success"}),(0,Tr.jsx)("option",{value:mp,children:"Disabled"})]})]}),(0,Tr.jsxs)(op,{children:[(0,Tr.jsx)(ip,{children:"Has Label"}),(0,Tr.jsxs)(ap,{value:i,onChange:e=>a("true"===e.target.value),children:[(0,Tr.jsx)("option",{value:"true",children:"Yes"}),(0,Tr.jsx)("option",{value:"false",children:"No"})]})]}),(0,Tr.jsxs)(op,{children:[(0,Tr.jsx)(ip,{children:"Required"}),(0,Tr.jsxs)(ap,{value:s,onChange:e=>l("true"===e.target.value),children:[(0,Tr.jsx)("option",{value:"false",children:"No"}),(0,Tr.jsx)("option",{value:"true",children:"Yes"})]})]}),(0,Tr.jsxs)(op,{children:[(0,Tr.jsx)(ip,{children:"Theme"}),(0,Tr.jsxs)(ap,{value:r,onChange:e=>o(e.target.value),children:[(0,Tr.jsx)("option",{value:cp,children:"Light.a"}),(0,Tr.jsx)("option",{value:dp,children:"Dark.a"})]})]})]}),(0,Tr.jsx)(sp,{$isDarkMode:u,children:(0,Tr.jsx)(lp,{children:(0,Tr.jsx)(Iu,{...(()=>{const t={placeholder:"Enter text...",value:c,onChange:d,theme:r,state:e===up?void 0:e};return i&&(t.label="Label"),s&&(t.required=!0),e===fp&&(t.error=!0,t.errorMessage="Error message"),e===hp&&(t.success=!0,t.successMessage="Success message"),e===mp&&(t.disabled=!0),t})()})})})]}),(0,Tr.jsxs)(tp,{children:[(0,Tr.jsx)(np,{children:"Text area"}),(0,Tr.jsxs)(rp,{children:[(0,Tr.jsxs)(op,{children:[(0,Tr.jsx)(ip,{children:"State"}),(0,Tr.jsxs)(ap,{value:p,onChange:e=>f(e.target.value),children:[(0,Tr.jsx)("option",{value:up,children:"Default"}),(0,Tr.jsx)("option",{value:pp,children:"Focused"}),(0,Tr.jsx)("option",{value:fp,children:"Error"}),(0,Tr.jsx)("option",{value:hp,children:"Success"}),(0,Tr.jsx)("option",{value:mp,children:"Disabled"})]})]}),(0,Tr.jsxs)(op,{children:[(0,Tr.jsx)(ip,{children:"Rows"}),(0,Tr.jsxs)(ap,{value:g,onChange:e=>x(parseInt(e.target.value)),children:[(0,Tr.jsx)("option",{value:"3",children:"3"}),(0,Tr.jsx)("option",{value:"4",children:"4"}),(0,Tr.jsx)("option",{value:"5",children:"5"}),(0,Tr.jsx)("option",{value:"6",children:"6"})]})]}),(0,Tr.jsxs)(op,{children:[(0,Tr.jsx)(ip,{children:"Resize"}),(0,Tr.jsxs)(ap,{value:b,onChange:e=>v(e.target.value),children:[(0,Tr.jsx)("option",{value:"none",children:"None"}),(0,Tr.jsx)("option",{value:"vertical",children:"Vertical"}),(0,Tr.jsx)("option",{value:"horizontal",children:"Horizontal"}),(0,Tr.jsx)("option",{value:"both",children:"Both"})]})]}),(0,Tr.jsxs)(op,{children:[(0,Tr.jsx)(ip,{children:"Has Label"}),(0,Tr.jsxs)(ap,{value:y,onChange:e=>k("true"===e.target.value),children:[(0,Tr.jsx)("option",{value:"true",children:"Yes"}),(0,Tr.jsx)("option",{value:"false",children:"No"})]})]}),(0,Tr.jsxs)(op,{children:[(0,Tr.jsx)(ip,{children:"Required"}),(0,Tr.jsxs)(ap,{value:w,onChange:e=>A("true"===e.target.value),children:[(0,Tr.jsx)("option",{value:"false",children:"No"}),(0,Tr.jsx)("option",{value:"true",children:"Yes"})]})]}),(0,Tr.jsxs)(op,{children:[(0,Tr.jsx)(ip,{children:"Theme"}),(0,Tr.jsxs)(ap,{value:h,onChange:e=>m(e.target.value),children:[(0,Tr.jsx)("option",{value:cp,children:"Light.a"}),(0,Tr.jsx)("option",{value:dp,children:"Dark.a"})]})]})]}),(0,Tr.jsx)(sp,{$isDarkMode:S,children:(0,Tr.jsx)(lp,{children:(0,Tr.jsx)(qu,{...(()=>{const e={placeholder:"Enter text...",value:j,onChange:F,theme:h,state:p===up?void 0:p,rows:g,resize:b};return y&&(e.label="Label"),w&&(e.required=!0),p===fp&&(e.error=!0,e.errorMessage="Error message"),p===hp&&(e.success=!0,e.successMessage="Success message"),p===mp&&(e.disabled=!0),e})()})})})]})]})};var xp,bp,vp,yp,kp,wp,Ap,jp,Fp,Sp,Cp,Ep,Dp,$p,Mp,Tp,Ip,zp,Bp,Lp,Rp,Pp,Op,Np,_p,Hp,Up,Wp,Vp,Gp,Kp,Yp,Xp,qp;const Qp="light.a",Jp="dark.a";let Zp;try{Zp="string"===typeof ri?JSON.parse(ri):ri}catch(ny){console.error("Failed to parse cake-color-tokens.json:",ny),Zp={}}const ef=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!Zp||"object"!==typeof Zp)return console.warn(`cakeColorTokens is not available. Token: ${e}`),n;const r=Zp[e];if(!r||"object"!==typeof r)return console.warn(`Token '${e}' not found in cake-color-tokens.json`),n;const o=r[t];return o||(console.warn(`Theme '${t}' not found for token '${e}'`),n)},tf={background:{canvas:{[Qp]:Zp.surfaceCanvas.lightA,[Jp]:Zp.surfaceCanvas.darkA},default:{[Qp]:"#FFFFFF",[Jp]:"#27272A"},disabled:{[Qp]:"#F1F5F9",[Jp]:"#1F2937"},error:{[Qp]:"#FEF2F2",[Jp]:"#2F0808"},success:{[Qp]:"#ECFDF5",[Jp]:"#064E3B"}},border:{default:{[Qp]:"#E2E8F0",[Jp]:"#4B5563"},hover:{[Qp]:"#CBD5E1",[Jp]:"#6B7280"},focus:{[Qp]:"#3B82F6",[Jp]:"#3B82F6"},disabled:{[Qp]:"#9CA3AF",[Jp]:"#374151"},error:{[Qp]:"#DC2626",[Jp]:"#FCA5A5"},success:{[Qp]:"#059669",[Jp]:"#34D399"},zero:{[Qp]:Zp.borderZero.lightA,[Jp]:Zp.borderZero.darkA},weak:{[Qp]:(null===(xp=Zp)||void 0===xp||null===(bp=xp.borderWeak)||void 0===bp?void 0:bp.lightA)||ef("borderWeak","lightA","#E2E8F0"),[Jp]:(null===(vp=Zp)||void 0===vp||null===(yp=vp.borderWeak)||void 0===yp?void 0:yp.darkA)||ef("borderWeak","darkA","#3F3F46")}},text:{primary:{[Qp]:"#0F172A",[Jp]:"#F9FAFB"},secondary:{[Qp]:"#334155",[Jp]:"#D4D4D8"},tertiary:{[Qp]:"#64748B",[Jp]:"#A1A1AA"},disabled:{[Qp]:"#475569",[Jp]:"#6B7280"},placeholder:{[Qp]:"#9CA3AF",[Jp]:"#9CA3AF"},error:{[Qp]:"#DC2626",[Jp]:"#FCA5A5"},success:{[Qp]:"#047857",[Jp]:"#34D399"},metadata:{[Qp]:"#334155",[Jp]:"#A1A1AA"}},button:{primary:{background:{[Qp]:"#1D4ED8",[Jp]:"#93C5FD"},backgroundHover:{[Qp]:"#1E3A8A",[Jp]:"#60A5FA"},backgroundPressed:{[Qp]:"#1D4ED8",[Jp]:"#93C5FD"},text:{[Qp]:"#FFFFFF",[Jp]:"#18181B"}},secondary:{background:{[Qp]:"#E2E8F0",[Jp]:"#CBD5E1"},backgroundHover:{[Qp]:"#CBD5E1",[Jp]:"#94A3B8"},backgroundPressed:{[Qp]:"#E2E8F0",[Jp]:"#CBD5E1"},text:{[Qp]:"#1E293B",[Jp]:"#18181B"}},danger:{background:{[Qp]:"#B91C1C",[Jp]:"#FCA5A5"},backgroundHover:{[Qp]:"#7F1D1D",[Jp]:"#EF4444"},backgroundPressed:{[Qp]:"#B91C1C",[Jp]:"#FCA5A5"},text:{[Qp]:"#FFFFFF",[Jp]:"#18181B"}},text:{primary:{text:{[Qp]:"#1D4ED8",[Jp]:"#93C5FD"},backgroundHover:{[Qp]:"#DBEAFE",[Jp]:"rgba(59, 130, 246, 0.45)"},backgroundPressed:{[Qp]:"#BFDBFE",[Jp]:"rgba(59, 130, 246, 0.35)"}},secondary:{text:{[Qp]:"#334155",[Jp]:"#E2E8F0"},backgroundHover:{[Qp]:"#E2E8F0",[Jp]:"rgba(100, 116, 139, 0.25)"},backgroundPressed:{[Qp]:"#CBD5E1",[Jp]:"rgba(100, 116, 139, 0.35)"}}},icon:{primary:{icon:{[Qp]:"#1D4ED8",[Jp]:"#93C5FD"},iconHover:{[Qp]:"#1E40AF",[Jp]:"#93C5FD"},iconPressed:{[Qp]:"#1E3A8A",[Jp]:"#93C5FD"},backgroundHover:{[Qp]:"#DBEAFE",[Jp]:"rgba(59, 130, 246, 0.45)"},backgroundPressed:{[Qp]:"#BFDBFE",[Jp]:"rgba(59, 130, 246, 0.35)"}},secondary:{icon:{[Qp]:"#1E293B",[Jp]:"#E2E8F0"},iconHover:{[Qp]:"#0F172A",[Jp]:"#E2E8F0"},iconPressed:{[Qp]:"#0F172A",[Jp]:"#E2E8F0"},backgroundHover:{[Qp]:"#E2E8F0",[Jp]:"rgba(100, 116, 139, 0.25)"},backgroundPressed:{[Qp]:"#CBD5E1",[Jp]:"rgba(100, 116, 139, 0.35)"}}},text:{primary:{textHover:{[Qp]:"#1E3A8A",[Jp]:"#93C5FD"},textPressed:{[Qp]:"#1E3A8A",[Jp]:"#93C5FD"}},secondary:{textHover:{[Qp]:"#1E293B",[Jp]:"#E2E8F0"},textPressed:{[Qp]:"#0F172A",[Jp]:"#E2E8F0"}}},disabled:{background:{[Qp]:"rgba(203, 213, 225, 0.5)",[Jp]:"rgba(100, 116, 139, 0.2)"},text:{[Qp]:"#475569",[Jp]:"#9CA3AF"},icon:{[Qp]:"#475569",[Jp]:"#9CA3AF"}},focus:{ring:{[Qp]:"#1D4ED8",[Jp]:"#93C5FD"},ringInner:{[Qp]:"#FFFFFF",[Jp]:"#18181B"}}},alert:{success:{background:{[Qp]:"#FFFFFF",[Jp]:"#27272A"},border:{[Qp]:"#047857",[Jp]:"#34D399"},icon:{[Qp]:"#047857",[Jp]:"#34D399"},text:{[Qp]:"#0F172A",[Jp]:"#D4D4D8"}},warning:{background:{[Qp]:"#FFFFFF",[Jp]:"#27272A"},border:{[Qp]:"#C2410C",[Jp]:"#FDBA74"},icon:{[Qp]:"#C2410C",[Jp]:"#FDBA74"},text:{[Qp]:"#0F172A",[Jp]:"#D4D4D8"}},error:{background:{[Qp]:"#FFFFFF",[Jp]:"#27272A"},border:{[Qp]:"#B91C1C",[Jp]:"#FCA5A5"},icon:{[Qp]:"#B91C1C",[Jp]:"#FCA5A5"},text:{[Qp]:"#0F172A",[Jp]:"#D4D4D8"}},info:{background:{[Qp]:"#FFFFFF",[Jp]:"#27272A"},border:{[Qp]:"#1D4ED8",[Jp]:"#60A5FA"},icon:{[Qp]:"#1D4ED8",[Jp]:"#60A5FA"},text:{[Qp]:"#0F172A",[Jp]:"#D4D4D8"}}},badge:{blue:{background:{[Qp]:"#1D4ED8",[Jp]:"#60A5FA"},text:{[Qp]:"#FFFFFF",[Jp]:"#0F172A"}},red:{background:{[Qp]:"#B91C1C",[Jp]:"#FB7185"},text:{[Qp]:"#FFFFFF",[Jp]:"#0F172A"}}},checkbox:{border:{default:{[Qp]:"#64748B",[Jp]:"#71717A"},hover:{[Qp]:"#0F172A",[Jp]:"#D4D4D8"},checked:{[Qp]:"#1D4ED8",[Jp]:"#52525B"},disabled:{[Qp]:"#9CA3AF",[Jp]:"#9CA3AF"}},background:{checked:{[Qp]:"#1D4ED8",[Jp]:"#93C5FD"},disabled:{[Qp]:"#F3F4F6",[Jp]:"#27272A"}},icon:{checked:{[Qp]:"#FFFFFF",[Jp]:"#18181B"},disabled:{[Qp]:"#9CA3AF",[Jp]:"#9CA3AF"}},label:{default:{[Qp]:"#0F172A",[Jp]:"#D4D4D8"},disabled:{[Qp]:"#9CA3AF",[Jp]:"#9CA3AF"}}},radio:{border:{default:{[Qp]:"#64748B",[Jp]:"#71717A"},hover:{[Qp]:"#0F172A",[Jp]:"#D4D4D8"},selected:{[Qp]:"#1D4ED8",[Jp]:"#93C5FD"},disabled:{[Qp]:"#9CA3AF",[Jp]:"#9CA3AF"}},dot:{selected:{[Qp]:"#1D4ED8",[Jp]:"#93C5FD"},disabled:{[Qp]:"transparent",[Jp]:"#9CA3AF"}},label:{default:{[Qp]:"#0F172A",[Jp]:"#D4D4D8"},disabled:{[Qp]:"#9CA3AF",[Jp]:"#9CA3AF"}}},chip:{info:{background:{[Qp]:"#EFF6FF",[Jp]:"#93C5FD"},text:{[Qp]:"#1E3A8A",[Jp]:"#0F172A"}},success:{background:{[Qp]:"#ECFDF5",[Jp]:"#34D399"},text:{[Qp]:"#047857",[Jp]:"#064E3B"}},warning:{background:{[Qp]:"#FFF7ED",[Jp]:"#FDBA74"},text:{[Qp]:"#C2410C",[Jp]:"#7C2D12"}},error:{background:{[Qp]:"#FEF2F2",[Jp]:"#FCA5A5"},text:{[Qp]:"#B91C1C",[Jp]:"#7F1D1D"}}},reference:{primary:{[Qp]:Zp.referencePrimary.lightA,[Jp]:Zp.referencePrimary.darkA},surfaceDisabled:{[Qp]:"#F1F5F9",[Jp]:"#1F2937"},errorWeak:{[Qp]:"#FEF2F2",[Jp]:"#2F0808"},infoWeak:{[Qp]:Zp.referenceInfoWeak.lightA,[Jp]:Zp.referenceInfoWeak.darkA},secondaryWeak:{[Qp]:Zp.referenceSecondaryWeak.lightA,[Jp]:Zp.referenceSecondaryWeak.darkA},focus:{[Qp]:Zp.referenceFocus.lightA,[Jp]:Zp.referenceFocus.darkA},helper:{[Qp]:Zp.referenceHelper.lightA,[Jp]:Zp.referenceHelper.darkA}},surface:{card:{[Qp]:(null===(kp=Zp)||void 0===kp||null===(wp=kp.surfaceCard)||void 0===wp?void 0:wp.lightA)||"#FFFFFF",[Jp]:(null===(Ap=Zp)||void 0===Ap||null===(jp=Ap.surfaceCard)||void 0===jp?void 0:jp.darkA)||"#27272A"},itemSelectedOnCanvas:{[Qp]:Zp.surfaceItemSelectedOnCanvas.lightA,[Jp]:Zp.surfaceItemSelectedOnCanvas.darkA},itemSelectedHover:{[Qp]:Zp.surfaceItemSelectedHover.lightA,[Jp]:Zp.surfaceItemSelectedHover.darkA},itemHover:{[Qp]:Zp.surfaceItemHover.lightA,[Jp]:Zp.surfaceItemHover.darkA},itemSelected:{[Qp]:Zp.surfaceItemSelected.lightA,[Jp]:Zp.surfaceItemSelected.darkA},iconButtonSecondaryHover:{[Qp]:(null===(Fp=Zp)||void 0===Fp||null===(Sp=Fp.surfaceIconButtonSecondaryHover)||void 0===Sp?void 0:Sp.lightA)||ef("surfaceIconButtonSecondaryHover","lightA","#E2E8F0"),[Jp]:(null===(Cp=Zp)||void 0===Cp||null===(Ep=Cp.surfaceIconButtonSecondaryHover)||void 0===Ep?void 0:Ep.darkA)||ef("surfaceIconButtonSecondaryHover","darkA","#E2E8F0")},iconButtonSecondaryPress:{[Qp]:(null===(Dp=Zp)||void 0===Dp||null===($p=Dp.surfaceIconButtonSecondaryPress)||void 0===$p?void 0:$p.lightA)||ef("surfaceIconButtonSecondaryPress","lightA","#CBD5E1"),[Jp]:(null===(Mp=Zp)||void 0===Mp||null===(Tp=Mp.surfaceIconButtonSecondaryPress)||void 0===Tp?void 0:Tp.darkA)||ef("surfaceIconButtonSecondaryPress","darkA","#F8FAFC")},disabled:{[Qp]:Zp.surfaceDisabled.lightA,[Jp]:Zp.surfaceDisabled.darkA}},icon:{disabled:{[Qp]:(null===(Ip=Zp.iconDisabled)||void 0===Ip?void 0:Ip.lightA)||"#64748B",[Jp]:(null===(zp=Zp.iconDisabled)||void 0===zp?void 0:zp.darkA)||"#9CA3AF"},primary:{[Qp]:(null===(Bp=Zp)||void 0===Bp||null===(Lp=Bp.iconPrimary)||void 0===Lp?void 0:Lp.lightA)||ef("iconPrimary","lightA","#0F172A"),[Jp]:(null===(Rp=Zp)||void 0===Rp||null===(Pp=Rp.iconPrimary)||void 0===Pp?void 0:Pp.darkA)||ef("iconPrimary","darkA","#A1A1AA")},iconButtonSecondary:{[Qp]:(null===(Op=Zp)||void 0===Op||null===(Np=Op.iconIconButtonSecondary)||void 0===Np?void 0:Np.lightA)||ef("iconIconButtonSecondary","lightA","#1E293B"),[Jp]:(null===(_p=Zp)||void 0===_p||null===(Hp=_p.iconIconButtonSecondary)||void 0===Hp?void 0:Hp.darkA)||ef("iconIconButtonSecondary","darkA","#E2E8F0")},iconButtonSecondaryHover:{[Qp]:(null===(Up=Zp)||void 0===Up||null===(Wp=Up.iconIconButtonSecondaryHover)||void 0===Wp?void 0:Wp.lightA)||ef("iconIconButtonSecondaryHover","lightA","#0F172A"),[Jp]:(null===(Vp=Zp)||void 0===Vp||null===(Gp=Vp.iconIconButtonSecondaryHover)||void 0===Gp?void 0:Gp.darkA)||ef("iconIconButtonSecondaryHover","darkA","#E2E8F0")},iconButtonSecondaryPressed:{[Qp]:(null===(Kp=Zp)||void 0===Kp||null===(Yp=Kp.iconIconButtonSecondaryPressed)||void 0===Yp?void 0:Yp.lightA)||ef("iconIconButtonSecondaryPressed","lightA","#0F172A"),[Jp]:(null===(Xp=Zp)||void 0===Xp||null===(qp=Xp.iconIconButtonSecondaryPressed)||void 0===qp?void 0:qp.darkA)||ef("iconIconButtonSecondaryPressed","darkA","#E2E8F0")}},textField:{surface:{input:{[Qp]:"#F8FAFC",[Jp]:"#1F2937"},inputOnCanvas:{[Qp]:"#F1F5F9",[Jp]:"#1F2937"},inputHover:{[Qp]:"#FFFFFF",[Jp]:"#27272A"},inputFocus:{[Qp]:"#FFFFFF",[Jp]:"#1F2937"},inputRest:{[Qp]:"#FFFFFF",[Jp]:"#27272A"},disabled:{[Qp]:"#F1F5F9",[Jp]:"#1F2937"},inputError:{[Qp]:"#FEF2F2",[Jp]:"#2F0808"},errorWeak:{[Qp]:"#FEF2F2",[Jp]:"#2F0808"},successWeak:{[Qp]:"#ECFDF5",[Jp]:"#064E3B"}},border:{input:{[Qp]:"#64748B",[Jp]:"#4B5563"},focus:{[Qp]:"#1D4ED8",[Jp]:"#3B82F6"},inputError:{[Qp]:"#B91C1C",[Jp]:"#FCA5A5"},inputSuccess:{[Qp]:"#047857",[Jp]:"#34D399"},disabled:{[Qp]:"#9CA3AF",[Jp]:"#374151"}},reference:{helper:{[Qp]:"#475569",[Jp]:"#9CA3AF"},error:{[Qp]:"#B91C1C",[Jp]:"#FCA5A5"},success:{[Qp]:"#047857",[Jp]:"#34D399"}},text:{disabled:{[Qp]:"#475569",[Jp]:"#6B7280"},disabledSurface:{[Qp]:"#9CA3AF",[Jp]:"#9CA3AF"}},surface:{disabled:{[Qp]:"#9CA3AF",[Jp]:"#9CA3AF"}}},zinc:{800:{[Qp]:"#27272A",[Jp]:"#27272A"}},toggle:{track:{on:{[Qp]:"#1D4ED8",[Jp]:"#93C5FD"},onHover:{[Qp]:"#1E40AF",[Jp]:"#60A5FA"},off:{[Qp]:"#334155",[Jp]:"#CBD5E1"},offHover:{[Qp]:"#0F172A",[Jp]:"#E2E8F0"},disabled:{[Qp]:"#E5E7EB",[Jp]:"#1F2937"}},thumb:{on:{[Qp]:"#FFFFFF",[Jp]:"#18181B"},off:{[Qp]:"#F8FAFC",[Jp]:"#0F172A"},disabled:{[Qp]:"#64748B",[Jp]:"#9CA3AF"},pressed:{[Qp]:"#FFFFFF",[Jp]:"#18181B"}},label:{default:{[Qp]:"#0F172A",[Jp]:"#D4D4D8"},disabled:{[Qp]:"#475569",[Jp]:"#9CA3AF"}},focus:{ring:{[Qp]:"#1D4ED8",[Jp]:"#93C5FD"},innerBorder:{[Qp]:"#FFFFFF",[Jp]:"#FFFFFF"},background:{[Qp]:"#94A3B8",[Jp]:"#A1A1AA19"}}},menu:{surface:{item:{[Qp]:"#FFFFFF",[Jp]:"#27272A"},itemHover:{[Qp]:"#F3F4F6",[Jp]:"#3F3F46"},itemSelected:{[Qp]:"#EFF6FF",[Jp]:"rgba(29, 78, 216, 0.05)"},itemSelectedHover:{[Qp]:"#DBEAFE",[Jp]:"rgba(29, 78, 216, 0.10)"},itemFocused:{[Qp]:"#FFFFFF",[Jp]:"#27272A"},itemDisabled:{[Qp]:"#FFFFFF",[Jp]:"#27272A"},search:{[Qp]:"#F1F5F9",[Jp]:"#1F2937"}},border:{zero:{[Qp]:"rgba(255, 255, 255, 0)",[Jp]:"rgba(255, 255, 255, 0)"},search:{[Qp]:"#64748B",[Jp]:"#4B5563"},strong:{[Qp]:"#64748B",[Jp]:"#64748B"}},text:{item:{[Qp]:"#0F172A",[Jp]:"#F9FAFB"},itemSelected:{[Qp]:"#0F172A",[Jp]:"#F9FAFB"},itemDisabled:{[Qp]:"#9CA3AF",[Jp]:"#6B7280"},search:{[Qp]:"#475569",[Jp]:"#9CA3AF"}}},tab:{surface:{selected:{[Qp]:Zp.surfaceTabPrimarySelectedRest.lightA,[Jp]:Zp.surfaceTabPrimarySelectedRest.darkA},unselected:{[Qp]:Zp.surfaceTabPrimaryRest.lightA,[Jp]:Zp.surfaceTabPrimaryRest.darkA},hover:{[Qp]:Zp.surfaceTabPrimaryHover.lightA,[Jp]:Zp.surfaceTabPrimaryHover.darkA},disabled:{[Qp]:Zp.surfaceTabPrimaryDisabled.lightA,[Jp]:Zp.surfaceTabPrimaryDisabled.darkA}},text:{selected:{[Qp]:Zp.textTabPrimarySelectedRest.lightA,[Jp]:Zp.textTabPrimarySelectedRest.darkA},unselected:{[Qp]:Zp.textTabPrimaryRest.lightA,[Jp]:Zp.textTabPrimaryRest.darkA},disabled:{[Qp]:Zp.textTabPrimaryDisabled.lightA,[Jp]:Zp.textTabPrimaryDisabled.darkA}},border:{selected:{[Qp]:Zp.borderTabPrimarySelectedRest.lightA,[Jp]:Zp.borderTabPrimarySelectedRest.darkA}},icon:{scroll:{[Qp]:Zp.iconTabScrollRest.lightA,[Jp]:Zp.iconTabScrollRest.darkA},scrollHover:{[Qp]:Zp.iconTabScrollHover.lightA,[Jp]:Zp.iconTabScrollHover.darkA},scrollDisabled:{[Qp]:Zp.iconTabScrollDisabled.lightA,[Jp]:Zp.iconTabScrollDisabled.darkA}}}},nf=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Qp;const n=e.split(".");let r=tf;for(const o of n){if(!r||"object"!==typeof r||!(o in r))return console.warn(`[ColorTokens] Token path not found: "${e}" (failed at "${o}")`),"#000000";r=r[o]}if("object"===typeof r&&t in r){const n=r[t];return n||"transparent"===n?n:(console.warn(`[ColorTokens] Token "${e}" has no value for theme "${t}". This may indicate missing data in cake-color-tokens.json`),"#000000")}return console.warn(`[ColorTokens] Theme '${t}' not found for token: "${e}". Available themes: ${"object"===typeof r?Object.keys(r).join(", "):"none"}`),"#000000"},rf={LIGHT:"light.a",DARK:"dark.a"},of="Enabled",af="Hovered",sf="Pressed",lf="Disabled",cf=wr.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  user-select: none;
  position: relative;
`,df=wr.button`
  position: relative;
  width: 40px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  outline: none;
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    width: 52px;
    height: 36px;
    border: 3px solid ${e=>nf("toggle.focus.ring",e.theme)};
    border-radius: 100px;
    pointer-events: none;
    box-sizing: border-box;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:focus-visible::before {
    opacity: 1;
  }
`,uf=wr.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 24px;
  border-radius: 100px;
  background-color: ${e=>e.colors.track};
  transition: background-color 0.2s ease;
  z-index: 3;
`,pf=wr.div`
  position: absolute;
  top: 4px;
  left: ${e=>e.isPressed?e.isOn?"12px":"4px":e.isOn?"20px":"4px"};
  width: ${e=>e.isPressed?"24px":"16px"};
  height: 16px;
  border-radius: 100px;
  background-color: ${e=>e.colors.thumb};
  transition: all 0.2s ease;
  z-index: 4;
`,ff=wr.label`
  font-family: ${Dr};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${e=>e.colors.label};
  margin: 0;
  white-space: nowrap;
  transition: color 0.2s ease;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,hf=(0,t.forwardRef)((e,n)=>{let{checked:r=!1,disabled:o=!1,label:i="Label",theme:a=rf.LIGHT,onChange:s,onFocus:l,onBlur:c,id:d,name:u,value:p,className:f,style:h,"aria-describedby":m,...g}=e;const[x,b]=(0,t.useState)(!1),[v,y]=(0,t.useState)(!1),[k,w]=(0,t.useState)(!1),[A,j]=(0,t.useState)(r),F=void 0!==r,S=F?r:A,C=((e,t,n,r,o,i,a)=>(rf.DARK,a?{track:nf("toggle.track.disabled",t),thumb:nf("toggle.thumb.disabled",t),label:nf("toggle.label.disabled",t)}:e?o?{track:nf("toggle.track.on",t),thumb:nf("toggle.thumb.pressed",t),label:nf("toggle.label.default",t)}:r||n===af?{track:nf("toggle.track.onHover",t),thumb:nf("toggle.thumb.on",t),label:nf("toggle.label.default",t)}:{track:nf("toggle.track.on",t),thumb:nf("toggle.thumb.on",t),label:nf("toggle.label.default",t)}:o||n===sf?{track:nf("toggle.track.off",t),thumb:nf("toggle.thumb.off",t),label:nf("toggle.label.default",t)}:r||n===af?{track:nf("toggle.track.offHover",t),thumb:nf("toggle.thumb.off",t),label:nf("toggle.label.default",t)}:{track:nf("toggle.track.off",t),thumb:nf("toggle.thumb.off",t),label:nf("toggle.label.default",t)}))(S,a,o?lf:of,v,k,0,o),E=(0,t.useCallback)(e=>{if(o)return;const t=!S;if(F||j(t),s){const n={...e,target:{...e.target,checked:t,type:"checkbox",value:p}};s(n)}},[o,F,s,S,p]),D=d||`toggle-${Math.random().toString(36).substr(2,9)}`;return(0,Tr.jsxs)(cf,{disabled:o,className:f,style:h,onMouseEnter:()=>{o||y(!0)},onMouseLeave:()=>{y(!1),w(!1)},children:[(0,Tr.jsxs)(df,{ref:n,id:D,type:"button",role:"switch","aria-checked":S,"aria-label":i,"aria-describedby":m,disabled:o,theme:a,onClick:E,onFocus:e=>{o||(b(!0),l&&l(e))},onBlur:e=>{b(!1),c&&c(e)},onMouseDown:()=>{o||w(!0)},onMouseUp:()=>{w(!1)},onKeyDown:e=>{o||" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),E(e))},tabIndex:o?-1:0,...g,children:[(0,Tr.jsx)(uf,{colors:C}),(0,Tr.jsx)(pf,{isOn:S,isPressed:k,colors:C})]}),i&&(0,Tr.jsx)(ff,{htmlFor:D,colors:C,disabled:o,onClick:e=>{o||(e.preventDefault(),E(e))},children:i})]})});hf.displayName="Toggle";const mf=hf,gf=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,xf=wr.div`
  margin-bottom: 48px;
`,bf=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,vf=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,yf=wr.section`
  margin-bottom: 48px;
`,kf=(wr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`),wf=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Af=wr.label`
  font-weight: 600;
  color: #0F172A;
`,jf=wr.select`
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
`,Ff=wr.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid ${e=>e.theme===rf.DARK?"#52525B":"#E2E8F0"};
  border-radius: 8px;
  background-color: ${e=>e.theme===rf.DARK?"#18181B":"#FFFFFF"};
`,Sf=()=>{const[e,n]=(0,t.useState)("Enabled"),[r,o]=(0,t.useState)(rf.LIGHT),[i,a]=(0,t.useState)(!1);return(0,Tr.jsxs)(gf,{children:[(0,Tr.jsxs)(xf,{children:[(0,Tr.jsx)(bf,{children:"Toggle"}),(0,Tr.jsx)(vf,{children:"Interactive toggle switch component for binary choices and settings. The toggle component supports all interaction states including enabled, hovered, pressed, focus, and disabled states, with support for both light and dark themes."})]}),(0,Tr.jsxs)(yf,{children:[(0,Tr.jsxs)(kf,{children:[(0,Tr.jsxs)(wf,{children:[(0,Tr.jsx)(Af,{children:"State"}),(0,Tr.jsxs)(jf,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:"Enabled",children:"Enabled"}),(0,Tr.jsx)("option",{value:"Hovered",children:"Hovered"}),(0,Tr.jsx)("option",{value:"Pressed",children:"Pressed"}),(0,Tr.jsx)("option",{value:"Focus",children:"Focus"}),(0,Tr.jsx)("option",{value:"Disabled",children:"Disabled"})]})]}),(0,Tr.jsxs)(wf,{children:[(0,Tr.jsx)(Af,{children:"Theme"}),(0,Tr.jsxs)(jf,{value:r,onChange:e=>o(e.target.value),children:[(0,Tr.jsx)("option",{value:rf.LIGHT,children:"Light.a"}),(0,Tr.jsx)("option",{value:rf.DARK,children:"Dark.a"})]})]}),(0,Tr.jsxs)(wf,{children:[(0,Tr.jsx)(Af,{children:"Toggle State"}),(0,Tr.jsxs)(jf,{value:i?"on":"off",onChange:e=>a("on"===e.target.value),children:[(0,Tr.jsx)("option",{value:"off",children:"Off"}),(0,Tr.jsx)("option",{value:"on",children:"On"})]})]})]}),(0,Tr.jsx)(Ff,{theme:r,children:(0,Tr.jsx)(mf,{...(()=>{const t={label:"Label",theme:r,checked:i};return"Disabled"===e?t.disabled=!0:(t.disabled=!1,t.onChange=e=>{a(e.target.checked)}),t})()})})]})]})};var Cf=n(5896),Ef=n(1707);const Df={HORIZONTAL:"horizontal",VERTICAL:"vertical"},$f={LIGHT:"light.a",DARK:"dark.a"},Mf=wr.div`
  position: relative;
  display: flex;
  align-items: ${e=>e.$orientation===Df.VERTICAL?"flex-start":"center"};
  flex-direction: ${e=>e.$orientation===Df.VERTICAL?"column":"row"};
  width: ${e=>e.$orientation===Df.VERTICAL?"auto":"100%"};
  background-color: ${e=>e.$orientation===Df.VERTICAL?"transparent":nf("tab.surface.unselected",e.theme)};
`,Tf=wr.div`
  display: flex;
  flex-direction: ${e=>e.$orientation===Df.VERTICAL?"column":"row"};
  align-items: ${e=>e.$orientation===Df.VERTICAL?"stretch":"center"};
  gap: ${e=>(e.$orientation,Df.VERTICAL,"0")};
  overflow-x: ${e=>e.$orientation===Df.VERTICAL?"visible":"auto"};
  overflow-y: ${e=>e.$orientation===Df.VERTICAL?"auto":"hidden"};
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  width: ${e=>{if(e.$orientation===Df.VERTICAL)return"200px";if(!e.hasOverflow)return"100%";let t="100%";return e.hasOverflow&&(t=`calc(${t} - 96px)`),t}};
  margin-left: ${e=>e.hasOverflow&&e.$orientation!==Df.VERTICAL?"48px":"0"};
  margin-right: ${e=>e.hasOverflow&&e.$orientation!==Df.VERTICAL?"48px":"0"};
`,If=wr.button`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$orientation===Df.VERTICAL?"flex-start":"center"};
  height: 48px;
  width: ${e=>e.$orientation===Df.VERTICAL?"200px":"auto"};
  padding: ${e=>e.$orientation===Df.VERTICAL?"12px 16px 12px 24px":"8px 24px"};
  gap: 12px;
  border: none;
  background-color: ${e=>e.$disabled?nf("tab.surface.disabled",e.theme):e.$orientation===Df.VERTICAL?e.$selected?nf("surface.itemSelectedOnCanvas",e.theme):nf("background.canvas",e.theme):e.$selected?nf("tab.surface.selected",e.theme):nf("tab.surface.unselected",e.theme)};
  color: ${e=>e.$disabled&&e.$selected?nf("icon.disabled",e.theme):e.$disabled?nf("tab.text.disabled",e.theme):e.$orientation===Df.VERTICAL?e.$selected?nf("reference.primary",e.theme):nf("text.primary",e.theme):e.$selected?nf("tab.text.selected",e.theme):nf("tab.text.unselected",e.theme)};
  border-bottom: ${e=>e.$orientation===Df.VERTICAL?"none":e.$selected?"4px solid":"4px solid transparent"};
  border-bottom-color: ${e=>e.$orientation===Df.VERTICAL?"transparent":e.$disabled&&e.$selected?nf("icon.disabled",e.theme):e.$selected?nf("tab.border.selected",e.theme):"transparent"};
  border-left: none;
  border-radius: 0;
  font-family: ${Dr};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: background-color 0.2s ease, color 0.2s ease, border-bottom-color 0.2s ease, border 0.2s ease;
  user-select: none;
  position: relative;
  
  &:hover {
    background-color: ${e=>e.$disabled?nf("tab.surface.disabled",e.theme):e.$orientation===Df.VERTICAL?e.$selected?nf("surface.itemSelectedHover",e.theme):nf("surface.itemHover",e.theme):e.$selected?nf("tab.surface.selected",e.theme):nf("tab.surface.hover",e.theme)};
  }
  
  &:focus-visible {
    outline: none;
    ${e=>{if(e.$orientation===Df.VERTICAL){return`border: 3px solid ${nf("reference.focus",e.theme)};`}return`box-shadow: inset 0 0 0 2px ${nf("border.focus",e.theme)};`}}
  }
  
  &:active {
    background-color: ${e=>e.$disabled?nf("tab.surface.disabled",e.theme):e.$orientation===Df.VERTICAL?e.$selected?nf("surface.itemSelectedHover",e.theme):nf("surface.itemHover",e.theme):e.$selected?nf("tab.surface.selected",e.theme):nf("tab.surface.hover",e.theme)};
  }
`,zf=wr.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: ${e=>e.$disabled?nf("icon.disabled",e.theme):nf("reference.primary",e.theme)};
`,Bf=wr.button`
  position: absolute;
  top: 0;
  ${e=>"left"===e.direction?"left: 0;":"right: 0;"}
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${e=>nf("tab.surface.unselected",e.theme)};
  color: ${e=>e.$disabled?nf("tab.icon.scrollDisabled",e.theme):nf("tab.icon.scroll",e.theme)};
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: background-color 0.2s ease, color 0.2s ease;
  z-index: 1;
  flex-shrink: 0;
  
  &:hover {
    background-color: ${e=>e.$disabled?nf("tab.surface.unselected",e.theme):nf("tab.surface.hover",e.theme)};
    color: ${e=>e.$disabled?nf("tab.icon.scrollDisabled",e.theme):nf("tab.icon.scrollHover",e.theme)};
  }
  
  &:focus-visible {
    outline: none;
    box-shadow: ${e=>`inset 0 0 0 2px ${nf("border.focus",e.theme)}`};
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`,Lf=e=>{let{tabs:n=[],selectedTab:r,onTabChange:o,theme:i=$f.LIGHT,orientation:a=Df.HORIZONTAL,disabled:s=!1,className:l,...c}=e;const d=(0,t.useRef)(null),[u,p]=(0,t.useState)(!1),[f,h]=(0,t.useState)(!1),[m,g]=(0,t.useState)(!1),[x,b]=(0,t.useState)(null),v=(0,t.useCallback)(()=>{if(!d.current)return;const e=d.current,t=a===Df.VERTICAL,n=t?e.scrollHeight>e.clientHeight:e.scrollWidth>e.clientWidth;p(n),n&&!t?(h(e.scrollLeft>0),g(e.scrollLeft<e.scrollWidth-e.clientWidth-1)):(h(!1),g(!1))},[a]),y=(0,t.useCallback)(()=>{if(!d.current||a===Df.VERTICAL)return;const e=d.current;h(e.scrollLeft>0),g(e.scrollLeft<e.scrollWidth-e.clientWidth-1)},[a]),k=(0,t.useCallback)(()=>{if(!d.current||!f)return;d.current.scrollBy({left:-200,behavior:"smooth"})},[f]),w=(0,t.useCallback)(()=>{if(!d.current||!m)return;d.current.scrollBy({left:200,behavior:"smooth"})},[m]),A=(0,t.useCallback)(()=>{if(!d.current||!u)return;const e=n.findIndex(e=>e.id===r);if(-1===e)return;const t=d.current,o=t.children;if(!o[e])return;const i=o[e],s=t.getBoundingClientRect(),l=i.getBoundingClientRect();a===Df.VERTICAL?l.top<s.top?t.scrollBy({top:l.top-s.top-10,behavior:"smooth"}):l.bottom>s.bottom&&t.scrollBy({top:l.bottom-s.bottom+10,behavior:"smooth"}):l.left<s.left?t.scrollBy({left:l.left-s.left-10,behavior:"smooth"}):l.right>s.right&&t.scrollBy({left:l.right-s.right+10,behavior:"smooth"})},[n,r,u,a]);(0,t.useEffect)(()=>(v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)),[v,n,a]),(0,t.useEffect)(()=>{A()},[A]);const j=e=>{s||null===o||void 0===o||o(e)};return(0,Tr.jsxs)(Mf,{className:l,theme:i,$orientation:a,...c,children:[u&&a!==Df.VERTICAL&&(0,Tr.jsx)(Bf,{direction:"left",theme:i,$disabled:!f,onClick:k,"aria-label":"Scroll tabs left",tabIndex:f?0:-1,children:(0,Tr.jsx)(Cf.A,{})}),(0,Tr.jsx)(Tf,{ref:d,role:"tablist","aria-label":"Tabs","aria-orientation":a===Df.VERTICAL?"vertical":"horizontal",theme:i,$orientation:a,hasOverflow:u,showLeftButton:f,showRightButton:m,onScroll:y,children:n.map((e,t)=>{const o=r===e.id,l=s||e.disabled,c=`tab-${e.id}`,u=`tabpanel-${e.id}`;return(0,Tr.jsxs)(If,{id:c,role:"tab","aria-selected":o,"aria-controls":u,"aria-disabled":l,tabIndex:o&&!l?0:-1,$selected:o,$disabled:l,$orientation:a,theme:i,onClick:()=>j(e.id),onKeyDown:e=>((e,t)=>{if(s)return;const r=a===Df.VERTICAL;let o=t;switch(e.key){case"ArrowLeft":if(r)return;e.preventDefault(),o=t>0?t-1:n.length-1;break;case"ArrowRight":if(r)return;e.preventDefault(),o=t<n.length-1?t+1:0;break;case"ArrowUp":if(!r)return;e.preventDefault(),o=t>0?t-1:n.length-1;break;case"ArrowDown":if(!r)return;e.preventDefault(),o=t<n.length-1?t+1:0;break;case"Home":e.preventDefault(),o=0;break;case"End":e.preventDefault(),o=n.length-1;break;case"Enter":case" ":return e.preventDefault(),void(n[t]&&!n[t].disabled&&j(n[t].id));default:return}if(o>=0&&o<n.length){var i;b(o);const e=null===(i=d.current)||void 0===i?void 0:i.children;e&&e[o]&&e[o].focus()}})(e,t),onFocus:()=>b(t),onBlur:()=>{setTimeout(()=>{var e;null!==(e=d.current)&&void 0!==e&&e.contains(document.activeElement)||b(null)},0)},children:[a===Df.VERTICAL&&o&&(0,Tr.jsx)(zf,{$disabled:l,theme:i}),e.label]},e.id)})}),u&&a!==Df.VERTICAL&&(0,Tr.jsx)(Bf,{direction:"right",theme:i,$disabled:!m,onClick:w,"aria-label":"Scroll tabs right",tabIndex:m?0:-1,children:(0,Tr.jsx)(Ef.A,{})})]})},Rf=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Pf=wr.div`
  margin-bottom: 48px;
`,Of=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Nf=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,_f=wr.section`
  margin-bottom: 48px;
`,Hf=wr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,Uf=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,Wf=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Vf=wr.label`
  font-weight: 600;
  color: #0F172A;
`,Gf=wr.select`
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
`,Kf=wr.div`
  background: ${e=>nf("background.canvas",e.theme||(e.isDarkMode?"dark.a":"light.a"))};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Yf=wr.div`
  width: 100%;
  max-width: ${e=>e.maxWidth||"100%"};
`,Xf="light.a",qf="dark.a",Qf="disabled",Jf=()=>{const[e,n]=(0,t.useState)(Xf),[r,o]=(0,t.useState)(""),[i,a]=(0,t.useState)("tab1"),[s,l]=(0,t.useState)(Xf),[c,d]=(0,t.useState)(""),[u,p]=(0,t.useState)("tab1"),[f,h]=(0,t.useState)(Xf),[m,g]=(0,t.useState)(""),[x,b]=(0,t.useState)("tab1");return(0,Tr.jsxs)(Rf,{children:[(0,Tr.jsxs)(Pf,{children:[(0,Tr.jsx)(Of,{children:"Tab"}),(0,Tr.jsx)(Nf,{children:"The Tab component is used to organize content into multiple panels that can be switched between. Tabs provide a clear way to navigate between different sections of content while maintaining context."})]}),(0,Tr.jsxs)(_f,{children:[(0,Tr.jsx)(Hf,{children:"Basic horizontal tabs"}),(0,Tr.jsxs)(Uf,{children:[(0,Tr.jsxs)(Wf,{children:[(0,Tr.jsx)(Vf,{children:"Theme"}),(0,Tr.jsxs)(Gf,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:Xf,children:"Light.a"}),(0,Tr.jsx)("option",{value:qf,children:"Dark.a"})]})]}),(0,Tr.jsxs)(Wf,{children:[(0,Tr.jsx)(Vf,{children:"State"}),(0,Tr.jsxs)(Gf,{value:r,onChange:e=>o(e.target.value),children:[(0,Tr.jsx)("option",{value:"",children:"None"}),(0,Tr.jsx)("option",{value:Qf,children:"Disabled"})]})]})]}),(0,Tr.jsx)(Kf,{theme:e,children:(0,Tr.jsx)(Yf,{maxWidth:"600px",children:(0,Tr.jsx)(Lf,{tabs:[{id:"tab1",label:"Tab"},{id:"tab2",label:"Tab"},{id:"tab3",label:"Tab"},{id:"tab4",label:"Tab"},{id:"tab5",label:"Tab"},{id:"tab6",label:"Tab"},{id:"tab7",label:"Tab"}],selectedTab:i,onTabChange:a,theme:e,disabled:r===Qf})})})]}),(0,Tr.jsxs)(_f,{children:[(0,Tr.jsx)(Hf,{children:"Horizontal tabs with overflow"}),(0,Tr.jsxs)(Uf,{children:[(0,Tr.jsxs)(Wf,{children:[(0,Tr.jsx)(Vf,{children:"Theme"}),(0,Tr.jsxs)(Gf,{value:s,onChange:e=>l(e.target.value),children:[(0,Tr.jsx)("option",{value:Xf,children:"Light.a"}),(0,Tr.jsx)("option",{value:qf,children:"Dark.a"})]})]}),(0,Tr.jsxs)(Wf,{children:[(0,Tr.jsx)(Vf,{children:"State"}),(0,Tr.jsxs)(Gf,{value:c,onChange:e=>d(e.target.value),children:[(0,Tr.jsx)("option",{value:"",children:"None"}),(0,Tr.jsx)("option",{value:Qf,children:"Disabled"})]})]})]}),(0,Tr.jsx)(Kf,{theme:s,children:(0,Tr.jsx)(Yf,{maxWidth:"600px",children:(0,Tr.jsx)(Lf,{tabs:[{id:"tab1",label:"Tab"},{id:"tab2",label:"Tab"},{id:"tab3",label:"Tab"},{id:"tab4",label:"Tab"},{id:"tab5",label:"Tab"},{id:"tab6",label:"Tab"},{id:"tab7",label:"Tab"},{id:"tab8",label:"Tab"},{id:"tab9",label:"Tab"},{id:"tab10",label:"Tab"},{id:"tab11",label:"Tab"},{id:"tab12",label:"Tab"}],selectedTab:u,onTabChange:p,theme:s,disabled:c===Qf})})})]}),(0,Tr.jsxs)(_f,{children:[(0,Tr.jsx)(Hf,{children:"Vertical tabs"}),(0,Tr.jsxs)(Uf,{children:[(0,Tr.jsxs)(Wf,{children:[(0,Tr.jsx)(Vf,{children:"Theme"}),(0,Tr.jsxs)(Gf,{value:f,onChange:e=>h(e.target.value),children:[(0,Tr.jsx)("option",{value:Xf,children:"Light.a"}),(0,Tr.jsx)("option",{value:qf,children:"Dark.a"})]})]}),(0,Tr.jsxs)(Wf,{children:[(0,Tr.jsx)(Vf,{children:"State"}),(0,Tr.jsxs)(Gf,{value:m,onChange:e=>g(e.target.value),children:[(0,Tr.jsx)("option",{value:"",children:"None"}),(0,Tr.jsx)("option",{value:Qf,children:"Disabled"})]})]})]}),(0,Tr.jsx)(Kf,{theme:f,children:(0,Tr.jsx)(Yf,{children:(0,Tr.jsx)(Lf,{tabs:[{id:"tab1",label:"Tab"},{id:"tab2",label:"Tab"},{id:"tab3",label:"Tab"},{id:"tab4",label:"Tab"},{id:"tab5",label:"Tab"},{id:"tab6",label:"Tab"},{id:"tab7",label:"Tab"},{id:"tab8",label:"Tab"}],selectedTab:x,onTabChange:b,theme:f,orientation:Df.VERTICAL,disabled:m===Qf})})})]})]})},Zf={LIGHT:"light.a",DARK:"dark.a"},eh="Enabled",th="Hovered",nh="Pressed",rh="Disabled",oh=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  position: relative;
`,ih=wr.div`
  position: relative;
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  user-select: none;
`,ah=wr.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 2px;
  background-color: ${e=>e.colors.track};
  transition: background-color 0.2s ease;
`,sh=wr.div`
  position: absolute;
  left: 0;
  height: 4px;
  border-radius: 2px;
  background-color: ${e=>e.colors.fill};
  transition: ${e=>e.isDragging?"background-color 0.2s ease":"background-color 0.2s ease, width 0.1s ease"};
  width: ${e=>e.percentage}%;
`,lh=wr.div`
  position: absolute;
  left: ${e=>e.percentage}%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${e=>e.colors.thumb};
  border: 2px solid ${e=>e.colors.thumb};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: ${e=>e.isDragging?"none":"transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease"};
  cursor: ${e=>e.disabled?"not-allowed":"grab"};
  z-index: 2;

  &:active {
    cursor: ${e=>e.disabled?"not-allowed":"grabbing"};
    transform: translateX(-50%) scale(1.1);
  }

  &:hover {
    ${e=>!e.disabled&&!e.isDragging&&"\n      transform: translateX(-50%) scale(1.05);\n    "}
  }
`,ch=wr.input`
  position: absolute;
  width: 100%;
  height: 24px;
  opacity: 0;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  z-index: 3;
  margin: 0;
  padding: 0;
`,dh=wr.label`
  font-family: ${Dr};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${e=>e.colors.label};
  margin: 0;
  white-space: nowrap;
  transition: color 0.2s ease;
`,uh=wr.span`
  font-family: ${Dr};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.colors.value};
  margin: 0;
  white-space: nowrap;
  transition: color 0.2s ease;
`,ph=wr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,fh=wr.div`
  position: absolute;
  top: -4px;
  left: ${e=>e.percentage}%;
  transform: translateX(-50%);
  width: 32px;
  height: 32px;
  border: 3px solid ${e=>nf("reference.focus",e.theme)};
  border-radius: 50%;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${e=>e.isFocused&&"\n    opacity: 1;\n  "}
`,hh=wr.div`
  position: absolute;
  bottom: 100%;
  left: ${e=>e.percentage}%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  padding: 8px 12px;
  background-color: ${e=>nf("text.primary",e.theme)};
  color: ${e=>nf("background.canvas",e.theme)};
  border-radius: 4px;
  font-family: ${Dr};
  font-size: 0.875rem;
  line-height: 1.4;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  opacity: ${e=>e.$visible?1:0};
  visibility: ${e=>e.$visible?"visible":"hidden"};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`,mh=wr.div`
  display: flex;
  gap: 24px;
  align-items: center;
  width: 100%;
`,gh=wr.input`
  width: 64px;
  height: 40px;
  padding: 8px 12px;
  border: 2px solid ${e=>e.$colors.border};
  border-radius: 4px;
  font-family: ${Dr};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.$colors.text};
  background-color: ${e=>e.$colors.background};
  transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  box-sizing: border-box;
  text-align: right;
  
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  &:hover:not(:disabled) {
    border-color: ${e=>e.$colors.hoverBorder||e.$colors.border};
    background-color: ${e=>"#F8FAFC"===e.$colors.background?"#FFFFFF":e.$colors.background};
  }
  
  &:focus {
    outline: none;
    border-width: 2px;
    border-color: ${e=>e.$colors.focusBorder||e.$colors.border};
    background-color: ${e=>"#F8FAFC"===e.$colors.background?"#FFFFFF":e.$colors.background};
  }
  
  &:disabled {
    cursor: not-allowed;
    background-color: ${e=>e.$colors.disabledBackground||e.$colors.background};
  }
  
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  &[type="number"] {
    -moz-appearance: textfield;
  }
`,xh=wr.div`
  flex: 1;
  position: relative;
  height: 24px;
  display: flex;
  align-items: center;
`,bh=(e,t)=>{const n=t.toString(),r=n.indexOf(".");if(-1===r)return Math.round(e).toString();const o=n.length-r-1,i=e.toFixed(o);return parseFloat(i).toString()},vh=(0,t.forwardRef)((e,n)=>{let{value:r,min:o=0,max:i=100,step:a=1,disabled:s=!1,label:l="",showValue:c=!1,withInputField:d=!1,theme:u=Zf.LIGHT,onChange:p,onFocus:f,onBlur:h,id:m,name:g,className:x,style:b,"aria-describedby":v,...y}=e;const[k,w]=(0,t.useState)(!1),[A,j]=(0,t.useState)(!1),[F,S]=(0,t.useState)(!1),[C,E]=(0,t.useState)(!1),D=void 0!==r?r:(o+i)/2,[$,M]=(0,t.useState)(D),[T,I]=(0,t.useState)(()=>d?bh(D,a):""),z=(0,t.useRef)(null),B=void 0!==r,L=B?r:$,R=Math.max(o,Math.min(i,L)),P=(R-o)/(i-o)*100;(0,t.useEffect)(()=>{if(d){const e=bh(R,a);I(e)}else I("")},[R,a,d]);const O=((e,t,n,r,o,i)=>i?{track:nf("border.disabled",e),fill:nf("border.disabled",e),thumb:nf("border.disabled",e),label:nf("text.disabled",e),value:nf("text.disabled",e)}:r||t===nh?{track:nf("border.default",e),fill:nf("reference.primary",e),thumb:nf("reference.primary",e),label:nf("text.primary",e),value:nf("text.primary",e)}:n||t===th?{track:nf("border.default",e),fill:nf("button.primary.backgroundHover",e),thumb:nf("button.primary.backgroundHover",e),label:nf("text.primary",e),value:nf("text.primary",e)}:{track:nf("border.default",e),fill:nf("reference.primary",e),thumb:nf("reference.primary",e),label:nf("text.primary",e),value:nf("text.primary",e)})(u,s?rh:eh,A,F,0,s),N=(0,t.useCallback)(e=>{if(s)return;const t=parseFloat(e.target.value);B||M(t),p&&p(e)},[s,B,p]),_=(0,t.useCallback)(e=>{if(s)return;const t=e.target.value;if(I(t),""===t||"-"===t)return;const n=parseFloat(t);if(!isNaN(n)){const t=Math.max(o,Math.min(i,n)),r=Math.round(t/a)*a,s=Math.max(o,Math.min(i,r));B||M(s);const l={target:{value:s.toString(),...e.target},...e};p&&p(l)}},[s,o,i,a,B,p]),H=(0,t.useCallback)(e=>{const t=parseFloat(e.target.value);if(isNaN(t)||""===e.target.value||"-"===e.target.value){const e=bh(R,a);I(e)}else{const n=Math.max(o,Math.min(i,t)),r=Math.round(n/a)*a,s=Math.max(o,Math.min(i,r)),l=bh(s,a);if(I(l),s!==R){B||M(s);const t={target:{value:s.toString(),...e.target},...e};p&&p(t)}}h&&h(e)},[R,a,o,i,B,p,h]),U=e=>{s||(w(!0),f&&f(e))},W=e=>{w(!1),h&&h(e)},V=()=>{s||(S(!0),E(!0))},G=()=>{S(!1),E(!1)},K=()=>{s||(S(!0),E(!0))},Y=()=>{S(!1),E(!1)},X=m||`slider-${Math.random().toString(36).substr(2,9)}`;(0,t.useEffect)(()=>{n&&("function"===typeof n?n(z.current):n.current=z.current)},[n]),(0,t.useEffect)(()=>{if(C){const e=()=>{E(!1),S(!1)},t=()=>{E(!1),S(!1)};return document.addEventListener("mouseup",e),document.addEventListener("touchend",t),()=>{document.removeEventListener("mouseup",e),document.removeEventListener("touchend",t)}}},[C]);const q=((e,t)=>{const n=e===Zf.DARK;return t?{border:n?"#374151":"#9CA3AF",background:n?"#1F2937":"#F1F5F9",text:n?"#6B7280":"#475569",hoverBorder:n?"#374151":"#9CA3AF",focusBorder:n?"#374151":"#9CA3AF",disabledBackground:n?"#1F2937":"#F1F5F9"}:{border:n?"#4B5563":"#64748B",background:n?"#1F2937":"#F8FAFC",text:n?"#F9FAFB":"#0F172A",hoverBorder:n?"#4B5563":"#64748B",focusBorder:n?"#3B82F6":"#1D4ED8",disabledBackground:n?"#1F2937":"#F1F5F9"}})(u,s),Q=`${X}-value-input`,J=()=>(0,Tr.jsxs)(ih,{disabled:s,children:[(0,Tr.jsx)(fh,{percentage:P,theme:u,isFocused:k}),C&&!s&&(0,Tr.jsx)(hh,{percentage:P,theme:u,$visible:C,role:"tooltip",children:bh(R,a)}),(0,Tr.jsx)(ah,{colors:O}),(0,Tr.jsx)(sh,{colors:O,percentage:P,isDragging:C}),(0,Tr.jsx)(lh,{colors:O,percentage:P,disabled:s,isDragging:C,onMouseDown:V,onMouseUp:G}),(0,Tr.jsx)(ch,{ref:z,id:X,type:"range",min:o,max:i,step:a,value:R,disabled:s,theme:u,onChange:N,onFocus:U,onBlur:W,onMouseDown:V,onMouseUp:G,onTouchStart:K,onTouchEnd:Y,"aria-label":l||"Slider","aria-valuemin":o,"aria-valuemax":i,"aria-valuenow":R,"aria-describedby":v,tabIndex:s?-1:0,...y})]});return(0,Tr.jsxs)(oh,{className:x,style:b,onMouseEnter:()=>{s||j(!0)},onMouseLeave:()=>{j(!1),S(!1),E(!1)},children:[(l||c)&&(0,Tr.jsxs)(ph,{children:[l&&(0,Tr.jsx)(dh,{htmlFor:X,colors:O,children:l}),c&&!d&&(0,Tr.jsx)(uh,{colors:O,children:R})]}),d?(0,Tr.jsxs)(mh,{children:[(0,Tr.jsx)(xh,{children:J()}),(0,Tr.jsx)(gh,{id:Q,type:"number",min:o,max:i,step:a,value:T,disabled:s,$colors:q,onChange:_,onBlur:H,onFocus:U,"aria-label":`Current value: ${R}`,"aria-valuemin":o,"aria-valuemax":i,"aria-valuenow":R})]}):J()]})});vh.displayName="Slider";const yh=vh,kh=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 16px;
  }

  @media (max-width: 375px) {
    padding: 12px;
  }
`,wh=wr.div`
  margin-bottom: 48px;
`,Ah=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,jh=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Fh=wr.section`
  margin-bottom: 48px;
`,Sh=wr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,Ch=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,Eh=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Dh=wr.label`
  font-weight: 600;
  color: #0F172A;
`,$h=wr.select`
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
`,Mh=wr.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  border: 1px solid ${e=>e.theme===Zf.DARK?"#52525B":"#E2E8F0"};
  border-radius: 8px;
  background-color: ${e=>e.theme===Zf.DARK?"#18181B":"#FFFFFF"};
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 16px;
    gap: 16px;
    max-width: min(600px, calc(100vw - 64px));
  }

  @media (max-width: 375px) {
    padding: 12px;
    max-width: calc(100vw - 24px);
  }
`,Th=()=>{const[e,n]=(0,t.useState)(Zf.LIGHT),[r,o]=(0,t.useState)(50),[i,a]=(0,t.useState)(50),[s,l]=(0,t.useState)(50),[c,d]=(0,t.useState)("standard");return(0,Tr.jsxs)(kh,{children:[(0,Tr.jsxs)(wh,{children:[(0,Tr.jsx)(Ah,{children:"Slider"}),(0,Tr.jsx)(jh,{children:"Interactive slider component for selecting values within a range. The slider component supports all interaction states including enabled, hovered, pressed, focus, and disabled states, with support for both light and dark themes."})]}),(0,Tr.jsxs)(Fh,{children:[(0,Tr.jsx)(Sh,{children:"Basic Slider"}),(0,Tr.jsxs)(Ch,{children:[(0,Tr.jsxs)(Eh,{children:[(0,Tr.jsx)(Dh,{children:"Variant"}),(0,Tr.jsxs)($h,{value:c,onChange:e=>d(e.target.value),children:[(0,Tr.jsx)("option",{value:"standard",children:"Standard"}),(0,Tr.jsx)("option",{value:"withInputField",children:"With Input Field"})]})]}),(0,Tr.jsxs)(Eh,{children:[(0,Tr.jsx)(Dh,{children:"Theme"}),(0,Tr.jsxs)($h,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:Zf.LIGHT,children:"Light.a"}),(0,Tr.jsx)("option",{value:Zf.DARK,children:"Dark.a"})]})]})]}),(0,Tr.jsx)(Mh,{theme:e,children:(0,Tr.jsx)(yh,{theme:e,value:r,min:0,max:100,step:1,withInputField:"withInputField"===c,onChange:e=>o(parseFloat(e.target.value))})})]}),(0,Tr.jsxs)(Fh,{children:[(0,Tr.jsx)(Sh,{children:"With Label"}),(0,Tr.jsx)(Mh,{theme:e,children:(0,Tr.jsx)(yh,{label:"Volume",value:i,min:0,max:100,step:1,theme:e,onChange:e=>a(parseFloat(e.target.value))})})]}),(0,Tr.jsxs)(Fh,{children:[(0,Tr.jsx)(Sh,{children:"With Value Display"}),(0,Tr.jsx)(Mh,{theme:e,children:(0,Tr.jsx)(yh,{label:"Brightness",showValue:!0,value:s,min:0,max:100,step:1,theme:e,onChange:e=>l(parseFloat(e.target.value))})})]}),(0,Tr.jsxs)(Fh,{children:[(0,Tr.jsx)(Sh,{children:"Disabled State"}),(0,Tr.jsx)(Mh,{theme:e,children:(0,Tr.jsx)(yh,{label:"Disabled Slider",value:50,min:0,max:100,step:1,theme:e,disabled:!0})})]})]})},Ih=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,zh=wr.div`
  margin-bottom: 48px;
`,Bh=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Lh=wr.p`
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
`,Rh=wr.section`
  margin-bottom: 48px;
`,Ph=wr.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`,Oh=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,Nh=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,_h=wr.label`
  font-weight: 600;
  color: #0F172A;
`,Hh=wr.select`
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
`,Uh=wr.div`
  background: ${e=>e.theme===Jp||e.$theme===Jp||e.isDarkMode||e.$isDarkMode?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid ${e=>e.theme===Jp||e.$theme===Jp||e.isDarkMode||e.$isDarkMode?"#52525B":"#E2E8F0"};
`,Wh=wr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`,Vh="light.a",Gh="dark.a",Kh=()=>{const[e,n]=(0,t.useState)(oi.SMALL),[r,o]=(0,t.useState)(Vh),i=r===Gh;return(0,Tr.jsxs)(Ih,{children:[(0,Tr.jsxs)(zh,{children:[(0,Tr.jsx)(Bh,{children:"Loading"}),(0,Tr.jsx)(Lh,{children:"Loading indicator component for displaying progress and loading states. The spinner provides visual feedback to users that content is being loaded or processed."})]}),(0,Tr.jsxs)(Rh,{children:[(0,Tr.jsx)(Ph,{children:"Spinner"}),(0,Tr.jsxs)(Oh,{children:[(0,Tr.jsxs)(Nh,{children:[(0,Tr.jsx)(_h,{children:"Size"}),(0,Tr.jsxs)(Hh,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:oi.XSMALL,children:"Extra Small (16px)"}),(0,Tr.jsx)("option",{value:oi.SMALL,children:"Small (24px)"}),(0,Tr.jsx)("option",{value:oi.LARGE,children:"Large (64px)"})]})]}),(0,Tr.jsxs)(Nh,{children:[(0,Tr.jsx)(_h,{children:"Theme"}),(0,Tr.jsxs)(Hh,{value:r,onChange:e=>o(e.target.value),children:[(0,Tr.jsx)("option",{value:Vh,children:"Light.a"}),(0,Tr.jsx)("option",{value:Gh,children:"Dark.a"})]})]})]}),(0,Tr.jsx)(Uh,{theme:r,children:(0,Tr.jsx)(Wh,{children:(0,Tr.jsx)(di,{size:e,isDarkMode:i})})})]})]})};let Yh;try{Yh="string"===typeof ri?JSON.parse(ri):ri}catch(ny){console.error("Failed to parse cake-color-tokens.json:",ny),Yh={}}const Xh=(e,t)=>{const n=t?"darkA":"lightA";if(Yh[e]&&Yh[e][n])return Yh[e][n];const r={referenceHyperlink:{lightA:"#1D4ED8",darkA:"#1D4ED8"},referenceHyperlinkHovered:{lightA:"#1E3A8A",darkA:"#1E3A8A"},textDisabled:{lightA:"#475569",darkA:"#9CA3AF"}};return r[e]?r[e][n]:(console.warn(`Color token "${e}" not found in cake-color-tokens.json`),t?"#9CA3AF":"#475569")},qh=wr.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${Dr};
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-underline-position: from-font;
  color: ${e=>e.$disabled?Xh("textDisabled",e.isDarkMode):Xh("referenceHyperlink",e.isDarkMode)};
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  pointer-events: ${e=>e.$disabled?"none":"auto"};
  transition: color 0.2s ease-in-out;
  white-space: nowrap;
  
  &:hover {
    color: ${e=>e.$disabled?Xh("textDisabled",e.isDarkMode):Xh("referenceHyperlinkHovered",e.isDarkMode)};
  }
  
  &:focus-visible {
    outline: 2px solid ${e=>Xh("referenceFocus",e.isDarkMode)};
    outline-offset: 2px;
    border-radius: 2px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Qh=wr.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: inherit;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Jh=e=>{let{href:t,children:n,icon:r,disabled:o=!1,isDarkMode:i=!1,className:a,target:s,rel:l,...c}=e;return(0,Tr.jsxs)(qh,{href:o?void 0:t,$disabled:o,isDarkMode:i,className:a,onClick:e=>{o&&e.preventDefault()},target:s,rel:l,"aria-disabled":o,...c,children:[r&&(0,Tr.jsx)(Qh,{children:r}),n]})};let Zh;try{Zh="string"===typeof ri?JSON.parse(ri):ri}catch(ny){console.error("Failed to parse cake-color-tokens.json:",ny),Zh={}}const em=(e,t)=>{const n=t?"darkA":"lightA";if(Zh[e]&&Zh[e][n])return Zh[e][n];const r={textPrimary:{lightA:"#0F172A",darkA:"#D4D4D8"},textSecondary:{lightA:"#334155",darkA:"#A1A1AA"}};return r[e]?r[e][n]:(console.warn(`Color token "${e}" not found in cake-color-tokens.json`),t?"#A1A1AA":"#334155")},tm=wr.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
`,nm=wr.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
`,rm=wr.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  padding: 24px;
  border-radius: 4px;
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  border: 1px solid ${e=>(e.isDarkMode,"rgba(255, 255, 255, 0)")};
  width: 100%;
  max-width: 432px;
`,om=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`,im=wr.p`
  font-family: ${Dr};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  color: ${e=>em("textPrimary",e.isDarkMode)};
`,am=wr.p`
  font-family: ${Dr};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  color: ${e=>em("textSecondary",e.isDarkMode)};
`,sm=(wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  width: 100%;
`,"light.a"),lm="dark.a",cm=()=>{const[e,n]=(0,t.useState)(sm),r=e===lm;return(0,Tr.jsxs)(Ih,{children:[(0,Tr.jsxs)(zh,{children:[(0,Tr.jsx)(Bh,{children:"Link"}),(0,Tr.jsx)(Lh,{children:"Interactive link component for navigation with optional icon support. Links provide clear visual feedback for clickable text and support multiple states including enabled, hovered, and disabled."})]}),(0,Tr.jsxs)(Rh,{children:[(0,Tr.jsx)(Ph,{children:"Link States"}),(0,Tr.jsx)(Oh,{children:(0,Tr.jsxs)(Nh,{children:[(0,Tr.jsx)(_h,{children:"Theme"}),(0,Tr.jsxs)(Hh,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:sm,children:"Light.a"}),(0,Tr.jsx)("option",{value:lm,children:"Dark.a"})]})]})}),(0,Tr.jsx)(Uh,{theme:e,children:(0,Tr.jsxs)(tm,{children:[(0,Tr.jsxs)(nm,{children:[(0,Tr.jsx)(Jh,{href:"#",isDarkMode:r,children:"Link"}),(0,Tr.jsx)(Jh,{href:"#",icon:(0,Tr.jsx)(ti.A,{}),isDarkMode:r,children:"Link with icon"})]}),(0,Tr.jsxs)(nm,{children:[(0,Tr.jsx)(Jh,{href:"#",disabled:!0,isDarkMode:r,children:"Disabled link"}),(0,Tr.jsx)(Jh,{href:"#",icon:(0,Tr.jsx)(ti.A,{}),disabled:!0,isDarkMode:r,children:"Disabled link with icon"})]})]})})]}),(0,Tr.jsxs)(Rh,{children:[(0,Tr.jsx)(Ph,{children:"Usage Examples"}),(0,Tr.jsx)(Uh,{theme:e,children:(0,Tr.jsxs)(rm,{isDarkMode:r,children:[(0,Tr.jsxs)(om,{isDarkMode:r,children:[(0,Tr.jsx)(im,{isDarkMode:r,children:"Subtitle"}),(0,Tr.jsx)(am,{isDarkMode:r,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."})]}),(0,Tr.jsx)(Jh,{href:"#",icon:(0,Tr.jsx)(ti.A,{}),isDarkMode:r,children:"Open in windows settings"})]})})]})]})},dm=wr.div`
  /* Override the Alert component's styling */
  & > div {
    background: ${e=>((e,t)=>{const n=t===Ci.DARK,r={[Si.SUCCESS]:{light:{background:"#F8FAFC",border:"#047857",icon:"#047857",text:"#0F172A",metadata:"#334155"},dark:{background:"#1F2937",border:"#34D399",icon:"#34D399",text:"#D4D4D8",metadata:"#A1A1AA"}},[Si.WARNING]:{light:{background:"#F8FAFC",border:"#C2410C",icon:"#C2410C",text:"#0F172A",metadata:"#334155"},dark:{background:"#1F2937",border:"#FDBA74",icon:"#FDBA74",text:"#D4D4D8",metadata:"#A1A1AA"}},[Si.ERROR]:{light:{background:"#F8FAFC",border:"#B91C1C",icon:"#B91C1C",text:"#0F172A",metadata:"#334155"},dark:{background:"#1F2937",border:"#FCA5A5",icon:"#FCA5A5",text:"#D4D4D8",metadata:"#A1A1AA"}},[Si.INFO]:{light:{background:"#F8FAFC",border:"#1D4ED8",icon:"#1D4ED8",text:"#0F172A",metadata:"#334155"},dark:{background:"#1F2937",border:"#60A5FA",icon:"#60A5FA",text:"#D4D4D8",metadata:"#A1A1AA"}}};return n?r[e].dark:r[e].light})(e.severity,e.theme).background} !important;
    box-shadow: none !important;
    max-width: 100% !important;
    min-width: auto !important;
    position: relative !important;
  }
`,um=e=>(0,Tr.jsx)(dm,{severity:e.severity,theme:e.theme,children:(0,Tr.jsx)(Ni,{...e,type:ji.INLINE})}),pm=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,fm=wr.div`
  margin-bottom: 48px;
`,hm=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,mm=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,gm=wr.section`
  margin-bottom: 48px;
`,xm=wr.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: #0F172A;
`,bm=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,vm=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ym=wr.label`
  font-weight: 600;
  color: #0F172A;
`,km=wr.select`
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
`,wm=(wr.input`
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
`,wr.input`
  width: 16px;
  height: 16px;
  accent-color: #3B82F6;
`,wr.div`
  background: ${e=>e.theme===Ci.DARK?"#18181B":"#FFFFFF"};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`),Am=()=>{const[e,n]=(0,t.useState)(Fi.SIMPLE),[r,o]=(0,t.useState)(Si.INFO),[i,a]=(0,t.useState)(Ci.LIGHT),[s,l]=(0,t.useState)(Ei.BOTTOM_CENTER),[c,d]=(0,t.useState)("Alert Title"),[u,p]=(0,t.useState)("This is an alert message that provides important information to the user."),[f,h]=(0,t.useState)(!0),[m,g]=(0,t.useState)(!0),[x,b]=(0,t.useState)(3e3),[v,y]=(0,t.useState)(!0),[k,w]=(0,t.useState)(!1),[A,j]=(0,t.useState)(Ei.BOTTOM_CENTER),[F,S]=(0,t.useState)(0),[C,E]=(0,t.useState)(Fi.SIMPLE),[D,$]=(0,t.useState)(Si.INFO),[M,T]=(0,t.useState)(Ci.LIGHT),[I,z]=(0,t.useState)("Inline Alert Title"),[B,L]=(0,t.useState)("This is an inline alert message that appears within the page content."),[R,P]=(0,t.useState)(!0),[O,N]=(0,t.useState)(!0),_=()=>{console.log("Alert dismissed")},H=e=>{console.log("Action clicked:",e)},U=e===Fi.SIMPLE?[{label:"Secondary",variant:"secondary"},{label:"Primary",variant:"primary"}]:v?[{label:"Tertiary",variant:"tertiary"},{label:"Secondary",variant:"secondary"},{label:"Primary",variant:"primary"}]:[],W=C===Fi.SIMPLE?[{label:"Secondary",variant:"secondary"},{label:"Primary",variant:"primary"}]:O?[{label:"Tertiary",variant:"tertiary"},{label:"Secondary",variant:"secondary"},{label:"Primary",variant:"primary"}]:[];return(0,Tr.jsxs)(pm,{children:[(0,Tr.jsxs)(fm,{children:[(0,Tr.jsx)(hm,{children:"Alert"}),(0,Tr.jsx)(mm,{children:"The Alert Component is a versatile UI element designed to deliver important messages, notifications, warnings, or feedback to users in an efficient and visually appealing manner. It serves as a crucial part of our design system, ensuring consistent and effective communication across all digital platforms."})]}),(0,Tr.jsxs)(gm,{children:[(0,Tr.jsx)(xm,{children:"Toast Alert"}),(0,Tr.jsx)(mm,{style:{marginBottom:"32px"},children:"The Toast Alert Component is a lightweight and non-intrusive UI element designed to display transient messages or notifications to users. It appears briefly and automatically fades away, providing timely feedback without disrupting the user's workflow."}),(0,Tr.jsxs)(bm,{children:[(0,Tr.jsxs)(vm,{children:[(0,Tr.jsx)(ym,{children:"Variant"}),(0,Tr.jsxs)(km,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:Fi.SIMPLE,children:"Simple"}),(0,Tr.jsx)("option",{value:Fi.ADVANCED,children:"Advanced"})]})]}),(0,Tr.jsxs)(vm,{children:[(0,Tr.jsx)(ym,{children:"Severity"}),(0,Tr.jsxs)(km,{value:r,onChange:e=>o(e.target.value),children:[(0,Tr.jsx)("option",{value:Si.INFO,children:"Info"}),(0,Tr.jsx)("option",{value:Si.SUCCESS,children:"Success"}),(0,Tr.jsx)("option",{value:Si.WARNING,children:"Warning"}),(0,Tr.jsx)("option",{value:Si.ERROR,children:"Error"})]})]}),e===Fi.ADVANCED&&(0,Tr.jsxs)(vm,{children:[(0,Tr.jsx)(ym,{children:"Show Actions"}),(0,Tr.jsxs)(km,{value:v?"yes":"no",onChange:e=>y("yes"===e.target.value),children:[(0,Tr.jsx)("option",{value:"no",children:"No"}),(0,Tr.jsx)("option",{value:"yes",children:"Yes"})]})]}),(0,Tr.jsxs)(vm,{children:[(0,Tr.jsx)(ym,{children:"Dismissible"}),(0,Tr.jsxs)(km,{value:f?"yes":"no",onChange:e=>h("yes"===e.target.value),children:[(0,Tr.jsx)("option",{value:"no",children:"No"}),(0,Tr.jsx)("option",{value:"yes",children:"Yes"})]})]}),(0,Tr.jsxs)(vm,{children:[(0,Tr.jsx)(ym,{children:"Theme"}),(0,Tr.jsxs)(km,{value:i,onChange:e=>a(e.target.value),children:[(0,Tr.jsx)("option",{value:Ci.LIGHT,children:"Light.a"}),(0,Tr.jsx)("option",{value:Ci.DARK,children:"Dark.a"})]})]})]}),(0,Tr.jsxs)("div",{style:{marginBottom:"24px",display:"flex",gap:"12px"},children:[(0,Tr.jsx)(vi,{variant:ui.SECONDARY,size:hi.MEDIUM,onClick:()=>{w(!1),setTimeout(()=>{j(Ei.BOTTOM_RIGHT),S(e=>e+1),w(!0)},50)},disabled:k,label:"Show toast right"}),(0,Tr.jsx)(vi,{variant:ui.SECONDARY,size:hi.MEDIUM,onClick:()=>{w(!1),setTimeout(()=>{j(Ei.BOTTOM_CENTER),S(e=>e+1),w(!0)},50)},disabled:k,label:"Show toast centered"})]}),(0,Tr.jsx)(wm,{theme:i,children:(0,Tr.jsx)(Ni,{type:ji.INLINE,variant:e,severity:r,theme:i,title:c,message:u,dismissible:f,keepVisible:!0,onDismiss:_,onAction:H,actions:U,timestamp:e===Fi.ADVANCED?void 0:null})}),k&&(0,Tr.jsx)(Ni,{type:ji.TOAST,variant:e,severity:r,theme:i,position:A,title:c,message:u,dismissible:f,autoDismiss:!0,autoDismissTime:3e3,onDismiss:()=>{w(!1)},onAction:H,actions:U,timestamp:e===Fi.ADVANCED?void 0:null},F)]}),(0,Tr.jsxs)(gm,{children:[(0,Tr.jsx)(xm,{children:"Inline Alert"}),(0,Tr.jsx)(mm,{style:{marginBottom:"32px"},children:"The Inline Alert Component is a lightweight UI element designed to provide contextual feedback or notifications within a block of content. It seamlessly integrates into your interface, allowing you to convey important information without disrupting the user's workflow."}),(0,Tr.jsxs)(bm,{children:[(0,Tr.jsxs)(vm,{children:[(0,Tr.jsx)(ym,{children:"Variant"}),(0,Tr.jsxs)(km,{value:C,onChange:e=>E(e.target.value),children:[(0,Tr.jsx)("option",{value:Fi.SIMPLE,children:"Simple"}),(0,Tr.jsx)("option",{value:Fi.ADVANCED,children:"Advanced"})]})]}),(0,Tr.jsxs)(vm,{children:[(0,Tr.jsx)(ym,{children:"Severity"}),(0,Tr.jsxs)(km,{value:D,onChange:e=>$(e.target.value),children:[(0,Tr.jsx)("option",{value:Si.INFO,children:"Info"}),(0,Tr.jsx)("option",{value:Si.SUCCESS,children:"Success"}),(0,Tr.jsx)("option",{value:Si.WARNING,children:"Warning"}),(0,Tr.jsx)("option",{value:Si.ERROR,children:"Error"})]})]}),C===Fi.ADVANCED&&(0,Tr.jsxs)(vm,{children:[(0,Tr.jsx)(ym,{children:"Show Actions"}),(0,Tr.jsxs)(km,{value:O?"yes":"no",onChange:e=>N("yes"===e.target.value),children:[(0,Tr.jsx)("option",{value:"no",children:"No"}),(0,Tr.jsx)("option",{value:"yes",children:"Yes"})]})]}),(0,Tr.jsxs)(vm,{children:[(0,Tr.jsx)(ym,{children:"Dismissible"}),(0,Tr.jsxs)(km,{value:R?"yes":"no",onChange:e=>P("yes"===e.target.value),children:[(0,Tr.jsx)("option",{value:"no",children:"No"}),(0,Tr.jsx)("option",{value:"yes",children:"Yes"})]})]}),(0,Tr.jsxs)(vm,{children:[(0,Tr.jsx)(ym,{children:"Theme"}),(0,Tr.jsxs)(km,{value:M,onChange:e=>T(e.target.value),children:[(0,Tr.jsx)("option",{value:Ci.LIGHT,children:"Light.a"}),(0,Tr.jsx)("option",{value:Ci.DARK,children:"Dark.a"})]})]})]}),(0,Tr.jsx)(wm,{theme:M,children:(0,Tr.jsx)(um,{variant:C,severity:D,theme:M,title:I,message:B,dismissible:R,keepVisible:!0,onDismiss:_,onAction:H,actions:W,timestamp:null})})]}),(0,Tr.jsxs)(gm,{children:[(0,Tr.jsx)("h3",{style:{fontSize:"1.25rem",marginBottom:"24px",color:"#0F172A"},children:"Usage Guidelines"}),(0,Tr.jsx)(mm,{style:{marginBottom:"32px"},children:"Inline alerts are designed to be integrated seamlessly within your content. Here are some common usage patterns and examples."}),(0,Tr.jsxs)("div",{style:{display:"grid",gap:"24px",gridTemplateColumns:"repeat(auto-fit, minmax(400px, 1fr))"},children:[(0,Tr.jsx)("div",{children:(0,Tr.jsxs)("div",{style:{background:"#FFFFFF",border:"1px solid #E2E8F0",borderRadius:"8px",padding:"24px",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[(0,Tr.jsx)("h3",{style:{margin:"0 0 16px 0",fontSize:"1.125rem",fontWeight:"600",color:"#0F172A"},children:"Example 1"}),(0,Tr.jsx)("p",{style:{margin:"0 0 24px 0",color:"#475569",lineHeight:"1.5"},children:"Use an informational Inline Alert to inform users that a setting is disabled because it is already configured in Windows Settings. Include a button for users to navigate directly to the relevant setting for customization."}),(0,Tr.jsx)("hr",{style:{border:"none",height:"1px",background:"#E2E8F0",margin:"0 0 24px 0"}}),(0,Tr.jsx)("h4",{style:{margin:"0 0 8px 0",fontSize:"1rem",fontWeight:"600",color:"#0F172A"},children:"Section title"}),(0,Tr.jsx)("p",{style:{margin:"0 0 16px 0",color:"#475569",lineHeight:"1.5",fontSize:"0.875rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,Tr.jsx)(um,{variant:Fi.ADVANCED,severity:Si.INFO,theme:Ci.LIGHT,title:"System Theme",message:"This setting is controlled by Windows Settings. You can customize your system theme directly in Windows Settings.",dismissible:!1,keepVisible:!0,actions:[{label:"Open in Windows Settings",variant:"primary",icon:(0,Tr.jsx)(ti.A,{style:{fontSize:"16px"}})}],timestamp:null})]})}),(0,Tr.jsx)("div",{children:(0,Tr.jsxs)("div",{style:{background:"#FFFFFF",border:"1px solid #E2E8F0",borderRadius:"8px",padding:"24px",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[(0,Tr.jsx)("h3",{style:{margin:"0 0 16px 0",fontSize:"1.125rem",fontWeight:"600",color:"#0F172A"},children:"Example 2"}),(0,Tr.jsx)("p",{style:{margin:"0 0 24px 0",color:"#475569",lineHeight:"1.5"},children:"Use a warning Inline Alert to draw attention to critical information about a feature or section."}),(0,Tr.jsx)("hr",{style:{border:"none",height:"1px",background:"#E2E8F0",margin:"0 0 24px 0"}}),(0,Tr.jsx)("h4",{style:{margin:"0 0 8px 0",fontSize:"1rem",fontWeight:"600",color:"#0F172A"},children:"Section title"}),(0,Tr.jsx)("p",{style:{margin:"0 0 16px 0",color:"#475569",lineHeight:"1.5",fontSize:"0.875rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,Tr.jsx)(um,{variant:Fi.ADVANCED,severity:Si.WARNING,theme:Ci.LIGHT,title:"Beta Feature",message:"This feature is currently in beta and may have limited functionality. Please report any issues you encounter.",dismissible:!1,keepVisible:!0,actions:[],timestamp:null})]})})]})]})]})};var jm=n(5382);const Fm={LIGHT:"light.a",DARK:"dark.a"},Sm={DEFAULT:"default",HOVER:"hover",SELECTED:"selected",SELECTED_HOVER:"selected-hover",FOCUSED:"focused",DISABLED:"disabled"},Cm=wr.div`
  background: ${e=>nf("menu.surface.item",e.$theme||"light.a")};
  border: none;
  border-radius: 8px;
  padding: 8px 0;
  width: 180px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  overflow-x: hidden;
  
  ${e=>e.$hasScroll&&`\n    max-height: ${e.$maxHeight||300}px;\n    overflow-y: auto;\n  `}
`,Em=wr.div`
  display: flex;
  flex-direction: column;
`,Dm=wr.button`
  width: 100%;
  height: 40px;
  padding: 8px 24px;
  background: ${e=>{const t=e.$theme||"light.a";return e.$disabled?nf("menu.surface.itemDisabled",t):e.$selected&&e.$state===Sm.SELECTED_HOVER?nf("menu.surface.itemSelectedHover",t):e.$selected?nf("menu.surface.itemSelected",t):e.$state===Sm.HOVER?nf("menu.surface.itemHover",t):e.$state===Sm.FOCUSED?nf("menu.surface.itemFocused",t):nf("menu.surface.item",t)}};
  border: none;
  font-family: ${Dr};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>{const t=e.$theme||"light.a";return e.$disabled?nf("menu.text.itemDisabled",t):nf("text.primary",t)}};
  text-align: left;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-sizing: border-box;
  
  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px ${e=>nf("border.focus",e.$theme||"light.a")};
  }
  
  &:hover:not(:disabled) {
    background-color: ${e=>{const t=e.$theme||"light.a";return e.$selected?nf("menu.surface.itemSelectedHover",t):nf("menu.surface.itemHover",t)}};
  }
  
  &:active:not(:disabled) {
    background-color: ${e=>{const t=e.$theme||"light.a";return e.$selected?nf("menu.surface.itemSelectedHover",t):nf("menu.surface.itemHover",t)}};
  }
`,$m=e=>{let{item:n,state:r=Sm.DEFAULT,selected:o=!1,disabled:i=!1,theme:a=Fm.LIGHT,onItemClick:s,onMouseEnter:l,onMouseLeave:c,onFocus:d,onBlur:u,forceState:p}=e;const[f,h]=(0,t.useState)(!1),[m,g]=(0,t.useState)(!1),x=p||(i?Sm.DISABLED:m?Sm.FOCUSED:o&&f?Sm.SELECTED_HOVER:o?Sm.SELECTED:f?Sm.HOVER:Sm.DEFAULT),b=nf("text.primary",a);return(0,Tr.jsxs)(Dm,{$state:x,$theme:a,$selected:o,$disabled:i,onClick:()=>{!i&&s&&s(n)},onMouseEnter:()=>{i||p||(h(!0),null===l||void 0===l||l())},onMouseLeave:()=>{p||(h(!1),null===c||void 0===c||c())},onFocus:()=>{i||p||(g(!0),null===d||void 0===d||d())},onBlur:()=>{p||(g(!1),null===u||void 0===u||u())},disabled:i,role:"menuitem","aria-selected":o,"aria-disabled":i,children:[(0,Tr.jsx)("span",{style:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n}),o&&(0,Tr.jsx)(jm.A,{style:{width:"16px",height:"16px",fontSize:"16px",color:b,flexShrink:0}})]})},Mm=e=>{let{items:t=[],selectedItem:n,onItemClick:r,theme:o=Fm.LIGHT,width:i=180,className:a,style:s,itemStates:l,hasScroll:c=!1,maxHeight:d=300}=e;return(0,Tr.jsx)(Cm,{$theme:o,$hasScroll:c,$maxHeight:d,className:a,style:{...s,width:`${i}px`},role:"menu",children:(0,Tr.jsx)(Em,{children:t.map((e,t)=>{const i=null===l||void 0===l?void 0:l.find(t=>t.item===e);return(0,Tr.jsx)($m,{item:e,selected:void 0!==(null===i||void 0===i?void 0:i.selected)?i.selected:n===e,disabled:(null===i||void 0===i?void 0:i.disabled)||!1,forceState:null===i||void 0===i?void 0:i.state,theme:o,onItemClick:r},t)})})})},Tm=wr.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Im="light.a",zm="dark.a",Bm=()=>{const[e,n]=(0,t.useState)(Im),[r,o]=(0,t.useState)("Item 2"),[i]=(0,t.useState)(["Item 1","Item 2","Item 3","Item 4","Item 5"]);return(0,Tr.jsxs)(Ih,{children:[(0,Tr.jsxs)(zh,{children:[(0,Tr.jsx)(Bh,{children:"Menu"}),(0,Tr.jsx)(Lh,{children:"Menu component for displaying a list of options that users can select from. Supports various item states including hover, selected, focused, and disabled."})]}),(0,Tr.jsxs)(Rh,{children:[(0,Tr.jsx)(Ph,{children:"Menu"}),(0,Tr.jsx)(Oh,{children:(0,Tr.jsxs)(Nh,{children:[(0,Tr.jsx)(_h,{children:"Theme"}),(0,Tr.jsxs)(Hh,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:Im,children:"Light.a"}),(0,Tr.jsx)("option",{value:zm,children:"Dark.a"})]})]})}),(0,Tr.jsx)(Uh,{theme:e,children:(0,Tr.jsx)(Tm,{children:(0,Tr.jsx)(Mm,{items:i,selectedItem:r,theme:e,onItemClick:e=>{o(e===r?"":e)}})})})]})]})};var Lm=n(1337),Rm=n(5473);const Pm=Fr`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Om=wr.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,Nm=wr.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`,_m=wr.label`
  font-family: ${Dr};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${e=>nf("text.primary",e.$theme||"light.a")};
`,Hm=wr.div`
  position: relative;
  height: 40px;
  background-color: ${e=>{const t=e.$theme||"light.a";return e.$disabled?nf("reference.surfaceDisabled",t):e.$isFocused||e.$isOpen||e.$isSelected||e.$isHovered&&!e.$isFocused?nf("dark.a"===t?"zinc.800":"surface.card",t):nf("background.canvas",t)}};
  border: 2px solid ${e=>{const t=e.$theme||"light.a";return e.$disabled?nf("textField.border.disabled",t):e.$isFocused||e.$isOpen?nf("border.focus",t):nf("textField.border.input",t)}};
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 8px 8px 12px;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  
  &:hover:not(:disabled) {
    border-color: ${e=>{const t=e.$theme||"light.a";return e.$isFocused?nf("border.focus",t):nf("textField.border.input",t)}};
  }
`,Um=wr.div`
  flex: 1;
  font-family: ${Dr};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>{const t=e.$theme||"light.a";return e.$disabled?nf("textField.text.disabled",t):e.$hasValue?nf("text.primary",t):nf("textField.reference.helper",t)}};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Wm=wr.span`
  color: ${e=>nf("textField.reference.helper",e.$theme||"light.a")};
`,Vm=wr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  flex-shrink: 0;
  color: ${e=>{const t=e.$theme||"light.a";return e.$disabled?nf("textField.text.disabled",t):nf("text.primary",t)}};
  
  svg {
    width: 20px;
    height: 20px;
  }
`,Gm=wr.div`
  padding: 0 8px 8px 8px;
  border-bottom: none;
`,Km=wr.div`
  position: relative;
  display: flex;
  align-items: center;
  background: ${e=>nf("textField.surface.inputOnCanvas",e.$theme||"light.a")};
  border: 1px solid ${e=>nf("textField.border.input",e.$theme||"light.a")};
  border-radius: 4px;
  height: 32px;
  padding: 0 8px;
  gap: 12px;
  
  &:focus-within {
    background: ${e=>nf("textField.surface.inputOnCanvas",e.$theme||"light.a")};
    border-color: ${e=>nf("border.focus",e.$theme||"light.a")};
  }
`,Ym=wr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${e=>nf("menu.text.search",e.$theme||"light.a")};
  flex-shrink: 0;
  
  svg {
    width: 16px;
    height: 16px;
  }
`,Xm=wr.input`
  flex: 1;
  border: none;
  background: transparent;
  font-family: ${Dr};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>nf("text.primary",e.$theme||"light.a")};
  outline: none;
  
  &::placeholder {
    color: ${e=>nf("menu.text.search",e.$theme||"light.a")};
  }
`,qm=wr.div`
  position: absolute;
  ${e=>"down"===e.$calculatedPosition.direction?"top: calc(100% + 8px);":"bottom: calc(100% + 8px);"}
  ${e=>"right"===e.$calculatedPosition.alignment?"right: 0;":"left: 0;"}
  min-width: 100%;
  z-index: 1000;
  animation: ${Pm} 0.2s ease-out;
  background: ${e=>nf("menu.surface.item",e.$theme||"light.a")};
  border-radius: 4px;
  padding: 8px 0;
  
  &.dropdown-up {
    transform-origin: bottom;
  }
  
  &.dropdown-down {
    transform-origin: top;
  }
`,Qm=e=>{var n;let{label:r,placeholder:o="Select",items:i=[],selectedItem:a,hasSearch:s=!1,hasScroll:l=!1,disabled:c=!1,theme:d="light.a",onSelect:u,className:p}=e;const[f,h]=(0,t.useState)(!1),[m,g]=(0,t.useState)(!1),[x,b]=(0,t.useState)(!1),[v,y]=(0,t.useState)(""),[k,w]=(0,t.useState)({direction:"down",alignment:"left"}),[A,j]=(0,t.useState)(-1),F=(0,t.useRef)(null),S=(0,t.useRef)(null),C=(0,t.useRef)(null),E=(0,t.useRef)(null),D=s&&v?i.filter(e=>e.toLowerCase().includes(v.toLowerCase())):i;(0,t.useEffect)(()=>{if(f&&S.current&&C.current){const e=()=>{const e=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"bottom-left";const r=e.getBoundingClientRect(),o=t.offsetHeight,i=window.innerHeight-r.bottom,a=r.top;let s;return s=n.startsWith("bottom")&&i>=o+20?"down":n.startsWith("top")&&a>=o+20?"up":i>=a?"down":"up",{direction:s,alignment:n.endsWith("right")?"right":"left"}}(S.current,C.current,"bottom-left");w(e)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}},[f,D.length]),(0,t.useEffect)(()=>{f&&s&&E.current&&E.current.focus()},[f,s]),(0,t.useEffect)(()=>{if(f&&A>=0&&C.current){const e=C.current.querySelectorAll('[role="menuitem"]');e[A]&&e[A].focus()}},[f,A]),(0,t.useEffect)(()=>{const e=e=>{F.current&&!F.current.contains(e.target)&&(h(!1),y(""),j(-1))};if(f)return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[f]);const $=e=>{h(!1),y(""),j(-1),null===u||void 0===u||u(e)},M=a||"";return(0,Tr.jsxs)(Om,{ref:F,className:p,children:[(0,Tr.jsxs)(Nm,{children:[r&&(0,Tr.jsx)(_m,{$theme:d,children:r}),(0,Tr.jsxs)(Hm,{ref:S,$isOpen:f,$isHovered:m,$isFocused:x,$isSelected:!!a,$disabled:c,$theme:d,onClick:()=>{c||(h(!f),f||(y(""),j(-1)))},onMouseEnter:()=>!c&&g(!0),onMouseLeave:()=>g(!1),onFocus:()=>!c&&b(!0),onBlur:()=>b(!1),onKeyDown:e=>{if(!c)switch(e.key){case"Enter":case" ":e.preventDefault(),f?A>=0&&A<D.length&&$(D[A]):h(!0);break;case"Escape":var t;if(f)e.preventDefault(),h(!1),y(""),j(-1),null===(t=S.current)||void 0===t||t.focus();break;case"ArrowDown":e.preventDefault(),f?j(e=>e<D.length-1?e+1:0):h(!0);break;case"ArrowUp":e.preventDefault(),f&&j(e=>e>0?e-1:D.length-1);break;case"Tab":f&&(h(!1),y(""),j(-1))}},tabIndex:c?-1:0,role:"combobox","aria-haspopup":"listbox","aria-expanded":f,"aria-disabled":c,"aria-controls":"dropdown-menu",children:[(0,Tr.jsx)(Um,{$theme:d,$disabled:c,$hasValue:!!M,children:M||(0,Tr.jsx)(Wm,{$theme:d,children:o})}),(0,Tr.jsx)(Vm,{$isOpen:f,$theme:d,$disabled:c,children:f?(0,Tr.jsx)(Rm.A,{}):(0,Tr.jsx)(Lm.A,{})})]})]}),f&&(0,Tr.jsxs)(qm,{ref:C,$calculatedPosition:k,$theme:d,className:`dropdown-${k.direction}`,id:"dropdown-menu",children:[s&&(0,Tr.jsx)(Gm,{$theme:d,children:(0,Tr.jsxs)(Km,{$theme:d,children:[(0,Tr.jsx)(Ym,{$theme:d,children:(0,Tr.jsx)(Cr.A,{})}),(0,Tr.jsx)(Xm,{ref:E,$theme:d,type:"text",placeholder:"Search...",value:v,onChange:e=>{y(e.target.value),j(-1)},onKeyDown:e=>{"ArrowDown"===e.key||"ArrowUp"===e.key?(e.preventDefault(),j("ArrowDown"===e.key?0:D.length-1)):"Enter"===e.key&&(e.preventDefault(),A>=0&&A<D.length?$(D[A]):D.length>0&&$(D[0]))}})]})}),(0,Tr.jsx)(Mm,{items:D,selectedItem:a,theme:d,onItemClick:$,width:(null===(n=S.current)||void 0===n?void 0:n.offsetWidth)||228,hasScroll:l,style:{boxShadow:"0px 4px 12px rgba(0, 0, 0, 0.15)",borderRadius:"4px"}})]})]})},Jm=wr.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 400px;
`,Zm="light.a",eg="dark.a",tg="enabled",ng="disabled",rg=()=>{const[e,n]=(0,t.useState)(Zm),[r,o]=(0,t.useState)(""),[i,a]=(0,t.useState)(""),[s,l]=(0,t.useState)(tg),[c]=(0,t.useState)(["Option 1","Option 2","Option 3","Option 4","Option 5"]),[d]=(0,t.useState)(["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6","Item 7","Item 8","Item 9","Item 10","Item 11","Item 12","Item 13","Item 14","Item 15"]),u=s===ng;return(0,Tr.jsxs)(Ih,{children:[(0,Tr.jsxs)(zh,{children:[(0,Tr.jsx)(Bh,{children:"Dropdown"}),(0,Tr.jsx)(Lh,{children:"Dropdown component for selecting options from a list. Supports scrolling for long lists and various interaction states. The dropdown displays a labeled input trigger that opens a menu with selectable items."})]}),(0,Tr.jsxs)(Rh,{children:[(0,Tr.jsx)(Ph,{children:"Basic Dropdown"}),(0,Tr.jsxs)(Oh,{children:[(0,Tr.jsxs)(Nh,{children:[(0,Tr.jsx)(_h,{children:"Theme"}),(0,Tr.jsxs)(Hh,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:Zm,children:"Light.a"}),(0,Tr.jsx)("option",{value:eg,children:"Dark.a"})]})]}),(0,Tr.jsxs)(Nh,{children:[(0,Tr.jsx)(_h,{children:"State"}),(0,Tr.jsxs)(Hh,{value:s,onChange:e=>l(e.target.value),children:[(0,Tr.jsx)("option",{value:tg,children:"Enabled"}),(0,Tr.jsx)("option",{value:ng,children:"Disabled"})]})]})]}),(0,Tr.jsx)(Uh,{theme:e,children:(0,Tr.jsx)(Jm,{children:(0,Tr.jsx)(Qm,{label:"Label",placeholder:"Select",items:c,selectedItem:r,disabled:u,theme:e,onSelect:e=>{o(e)}})})})]}),(0,Tr.jsxs)(Rh,{children:[(0,Tr.jsx)(Ph,{children:"Dropdown with Scroll"}),(0,Tr.jsx)(Oh,{children:(0,Tr.jsxs)(Nh,{children:[(0,Tr.jsx)(_h,{children:"Theme"}),(0,Tr.jsxs)(Hh,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:Zm,children:"Light.a"}),(0,Tr.jsx)("option",{value:eg,children:"Dark.a"})]})]})}),(0,Tr.jsx)(Uh,{theme:e,children:(0,Tr.jsx)(Jm,{children:(0,Tr.jsx)(Qm,{label:"Long List",placeholder:"Select an item",items:d,selectedItem:i,hasScroll:!0,theme:e,onSelect:e=>{a(e)}})})})]})]})},og=Fr`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,ig=Fr`
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,ag={INFO:"Info",SUCCESS:"Success",WARNING:"Warning",ERROR:"Error"},sg=wr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 20px;
  animation: ${og} 0.2s ease-out;
`,lg=wr.div`
  background-color: ${e=>nf("surface.card",e.$theme||"light.a")};
  border: 1px solid ${e=>nf("menu.border.zero",e.$theme||"light.a")};
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 662px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${ig} 0.3s ease-out;
  position: relative;
`,cg=wr.div`
  background-color: ${e=>nf("surface.card",e.$theme||"light.a")};
  border: 1px solid ${e=>nf("menu.border.zero",e.$theme||"light.a")};
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 526px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${ig} 0.3s ease-out;
  position: relative;
`,dg=wr.div`
  background-color: ${e=>nf("surface.card",e.$theme||"light.a")};
  border-bottom: 1px solid ${e=>nf("border.default",e.$theme||"light.a")};
  box-sizing: border-box;
  display: flex;
  height: 80px;
  align-items: center;
  padding: 0 16px 0 24px;
  gap: 16px;
  flex-shrink: 0;
`,ug=wr.h2`
  flex: 1;
  font-family: ${Dr};
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${e=>nf("text.primary",e.$theme||"light.a")};
  margin: 0;
`,pg=wr.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 100px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${e=>nf("text.primary",e.$theme||"light.a")};
  padding: 0;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${e=>{const t=e.$theme||"light.a";return nf("menu.surface.itemHover",t)}};
  }
  
  &:focus {
    outline: 2px solid ${e=>nf("border.focus",e.$theme||"light.a")};
    outline-offset: 2px;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`,fg=wr.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 32px;
  padding-bottom: 40px;
  flex-shrink: 0;
`,hg=wr.h3`
  font-family: ${Dr};
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: ${e=>nf("text.primary",e.$theme||"light.a")};
  margin: 0;
`,mg=wr.p`
  font-family: ${Dr};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>nf("text.secondary",e.$theme||"light.a")};
  margin: 0;
`,gg=wr.div`
  border-top: 1px solid ${e=>nf("border.default",e.$theme||"light.a")};
  box-sizing: border-box;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
  padding: 24px 32px;
  flex-shrink: 0;
`,xg=wr.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
`,bg=wr.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,vg=wr.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`,yg=wr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: ${e=>{const t=e.$theme||"light.a";switch(e.$status){case ag.INFO:return nf("alert.info.icon",t);case ag.SUCCESS:return nf("alert.success.icon",t);case ag.WARNING:return nf("alert.warning.icon",t);case ag.ERROR:return nf("alert.error.icon",t);default:return nf("alert.info.icon",t)}}};
  
  svg {
    width: 24px;
    height: 24px;
  }
`,kg=wr.h2`
  flex: 1;
  font-family: ${Dr};
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${e=>nf("text.primary",e.$theme||"light.a")};
  margin: 0;
`,wg=wr.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,Ag=wr.p`
  flex: 1;
  font-family: ${Dr};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>nf("text.secondary",e.$theme||"light.a")};
  margin: 0;
`,jg=wr.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
`,Fg=e=>{switch(e){case ag.INFO:return(0,Tr.jsx)(yi.A,{});case ag.SUCCESS:return(0,Tr.jsx)(ki.A,{});case ag.WARNING:return(0,Tr.jsx)(wi.A,{});case ag.ERROR:return(0,Tr.jsx)(Ai.A,{});default:return(0,Tr.jsx)(yi.A,{})}},Sg=e=>{let{isOpen:n,onClose:r,header:o,subtitle:i,copy:a,primaryButtonLabel:s="Primary",secondaryButtonLabel:l="Secondary",onPrimaryClick:c,onSecondaryClick:d,primaryButtonDisabled:u=!1,secondaryButtonDisabled:p=!1,theme:f="light.a",className:h,closeOnOverlayClick:m=!0}=e;const g=(0,t.useRef)(null),x=(0,t.useRef)(null);if((0,t.useEffect)(()=>{n?(x.current=document.activeElement,document.body.style.overflow="hidden",g.current&&g.current.focus()):(document.body.style.overflow="unset",x.current&&x.current.focus())},[n]),(0,t.useEffect)(()=>{const e=e=>{"Escape"===e.key&&n&&r()};if(n)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[n,r]),(0,t.useEffect)(()=>{if(!n)return;const e=g.current;if(!e)return;const t=e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=t[0],o=t[t.length-1],i=e=>{"Tab"===e.key&&(e.shiftKey?document.activeElement===r&&(e.preventDefault(),null===o||void 0===o||o.focus()):document.activeElement===o&&(e.preventDefault(),null===r||void 0===r||r.focus()))};return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[n]),!n)return null;const b="dark.a"===f,v=(0,Tr.jsx)(sg,{$theme:f,onClick:e=>{m&&e.target===e.currentTarget&&r()},"aria-modal":"true",role:"dialog",children:(0,Tr.jsxs)(lg,{ref:g,$theme:f,className:h,onClick:e=>e.stopPropagation(),tabIndex:-1,"aria-labelledby":"basic-modal-title","aria-describedby":i||a?"basic-modal-description":void 0,children:[(0,Tr.jsxs)(dg,{$theme:f,children:[(0,Tr.jsx)(ug,{id:"basic-modal-title",$theme:f,children:o}),(0,Tr.jsx)(pg,{$theme:f,onClick:r,"aria-label":"Close modal",type:"button",children:(0,Tr.jsx)(Er.A,{})})]}),(0,Tr.jsxs)(fg,{$theme:f,children:[i&&(0,Tr.jsx)(hg,{id:"basic-modal-description",$theme:f,children:i}),a&&(0,Tr.jsx)(mg,{id:i?void 0:"basic-modal-description",$theme:f,children:a})]}),(0,Tr.jsxs)(gg,{$theme:f,children:[(0,Tr.jsx)(vi,{variant:ui.SECONDARY,label:l,onClick:()=>{d?d():r()},disabled:p,isDarkMode:b,buttonStyle:gi.PILL,size:"medium"}),(0,Tr.jsx)(vi,{variant:ui.PRIMARY,label:s,onClick:()=>{c?c():r()},disabled:u,isDarkMode:b,buttonStyle:gi.PILL,size:"medium"})]})]})});return(0,xe.createPortal)(v,document.body)},Cg=e=>{let{isOpen:n,onClose:r,title:o,body:i,status:a=ag.INFO,showCheckbox:s=!1,checkboxLabel:l="Do not show again",checkboxChecked:c=!1,onCheckboxChange:d,primaryButtonLabel:u="Primary",secondaryButtonLabel:p="Secondary",onPrimaryClick:f,onSecondaryClick:h,primaryButtonDisabled:m=!1,secondaryButtonDisabled:g=!1,theme:x="light.a",className:b,closeOnOverlayClick:v=!0}=e;const y=(0,t.useRef)(null),k=(0,t.useRef)(null),[w,A]=(0,t.useState)(c);if((0,t.useEffect)(()=>{A(c)},[c]),(0,t.useEffect)(()=>{n?(k.current=document.activeElement,document.body.style.overflow="hidden",y.current&&y.current.focus()):(document.body.style.overflow="unset",k.current&&k.current.focus())},[n]),(0,t.useEffect)(()=>{const e=e=>{"Escape"===e.key&&n&&r()};if(n)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[n,r]),(0,t.useEffect)(()=>{if(!n)return;const e=y.current;if(!e)return;const t=e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=t[0],o=t[t.length-1],i=e=>{"Tab"===e.key&&(e.shiftKey?document.activeElement===r&&(e.preventDefault(),null===o||void 0===o||o.focus()):document.activeElement===o&&(e.preventDefault(),null===r||void 0===r||r.focus()))};return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[n]),!n)return null;const j="dark.a"===x,F=(0,Tr.jsx)(sg,{$theme:x,onClick:e=>{v&&e.target===e.currentTarget&&r()},"aria-modal":"true",role:"dialog",children:(0,Tr.jsx)(cg,{ref:y,$theme:x,className:b,onClick:e=>e.stopPropagation(),tabIndex:-1,"aria-labelledby":"confirmation-modal-title","aria-describedby":"confirmation-modal-description",children:(0,Tr.jsxs)(xg,{$theme:x,children:[(0,Tr.jsxs)(bg,{$theme:x,children:[(0,Tr.jsxs)(vg,{$theme:x,children:[(0,Tr.jsx)(yg,{$status:a,$theme:x,children:Fg(a)}),(0,Tr.jsx)(kg,{id:"confirmation-modal-title",$theme:x,children:o})]}),(0,Tr.jsx)(wg,{$theme:x,children:(0,Tr.jsx)(Ag,{id:"confirmation-modal-description",$theme:x,children:i})}),s&&(0,Tr.jsx)(co,{checked:w,onChange:e=>{const t=e.target.checked;A(t),null===d||void 0===d||d(t)},label:l,theme:x,size:"medium"})]}),(0,Tr.jsxs)(jg,{$theme:x,children:[(0,Tr.jsx)(vi,{variant:ui.SECONDARY,label:p,onClick:()=>{h?h():r()},disabled:g,isDarkMode:j,buttonStyle:gi.PILL,size:"medium"}),(0,Tr.jsx)(vi,{variant:ui.PRIMARY,label:u,onClick:()=>{f?f():r()},disabled:m,isDarkMode:j,buttonStyle:gi.PILL,size:"medium"})]})]})})});return(0,xe.createPortal)(F,document.body)},Eg=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Dg=wr.div`
  margin-bottom: 48px;
`,$g=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,Mg=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Tg=wr.section`
  margin-bottom: 48px;
`,Ig=wr.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: #0F172A;
`,zg=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,Bg=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Lg=wr.label`
  font-weight: 600;
  color: #0F172A;
`,Rg=wr.select`
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
`,Pg=wr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,Og="light.a",Ng="dark.a",_g=()=>{const[e,n]=(0,t.useState)(!1),[r,o]=(0,t.useState)(Og),[i,a]=(0,t.useState)("Header"),[s,l]=(0,t.useState)("Subtitle"),[c,d]=(0,t.useState)("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nunc sed urna ultricies placerat. Etiam dictum rhoncus justo ut cursus. Curabitur tincidunt malesuada mi, ac aliquam lorem ullamcorper a. Quisque faucibus non magna at pulvinar. Cras at ante nisi. Sed massa mauris, luctus vitae dolor ac, rhoncus maximus metus. Phasellus ultrices tristique eros, at luctus sapien."),[u,p]=(0,t.useState)("Primary"),[f,h]=(0,t.useState)("Secondary"),[m,g]=(0,t.useState)(!1),[x,b]=(0,t.useState)(Og),[v,y]=(0,t.useState)(ag.INFO),[k,w]=(0,t.useState)("Title"),[A,j]=(0,t.useState)("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor lorem quis vulputate rhoncus. Donec ornare enim purus."),[F,S]=(0,t.useState)(!1),[C,E]=(0,t.useState)(!1),[D,$]=(0,t.useState)("Primary"),[M,T]=(0,t.useState)("Secondary");return(0,Tr.jsxs)(Eg,{children:[(0,Tr.jsxs)(Dg,{children:[(0,Tr.jsx)($g,{children:"Modal"}),(0,Tr.jsx)(Mg,{children:"Modal components provide a focused way to display content, gather user input, or confirm actions. The design system includes two modal types: Basic Modal for general content display and Confirmation Modal for status-based confirmations with optional checkbox support."})]}),(0,Tr.jsxs)(Tg,{children:[(0,Tr.jsx)(Ig,{children:"Basic Modal"}),(0,Tr.jsx)(zg,{children:(0,Tr.jsxs)(Bg,{children:[(0,Tr.jsx)(Lg,{children:"Theme"}),(0,Tr.jsxs)(Rg,{value:r,onChange:e=>o(e.target.value),children:[(0,Tr.jsx)("option",{value:Og,children:"Light.a"}),(0,Tr.jsx)("option",{value:Ng,children:"Dark.a"})]})]})}),(0,Tr.jsx)(Pg,{children:(0,Tr.jsx)(vi,{variant:ui.SECONDARY,label:"Open Basic Modal",onClick:()=>n(!0)})}),(0,Tr.jsx)(Sg,{isOpen:e,onClose:()=>n(!1),header:i,subtitle:s,copy:c,primaryButtonLabel:u,secondaryButtonLabel:f,theme:r,onPrimaryClick:()=>{console.log("Primary button clicked"),n(!1)},onSecondaryClick:()=>{console.log("Secondary button clicked"),n(!1)}})]}),(0,Tr.jsxs)(Tg,{children:[(0,Tr.jsx)(Ig,{children:"Confirmation Modal"}),(0,Tr.jsxs)(zg,{children:[(0,Tr.jsxs)(Bg,{children:[(0,Tr.jsx)(Lg,{children:"Theme"}),(0,Tr.jsxs)(Rg,{value:x,onChange:e=>b(e.target.value),children:[(0,Tr.jsx)("option",{value:Og,children:"Light.a"}),(0,Tr.jsx)("option",{value:Ng,children:"Dark.a"})]})]}),(0,Tr.jsxs)(Bg,{children:[(0,Tr.jsx)(Lg,{children:"Status"}),(0,Tr.jsxs)(Rg,{value:v,onChange:e=>y(e.target.value),children:[(0,Tr.jsx)("option",{value:ag.INFO,children:"Info"}),(0,Tr.jsx)("option",{value:ag.SUCCESS,children:"Success"}),(0,Tr.jsx)("option",{value:ag.WARNING,children:"Warning"}),(0,Tr.jsx)("option",{value:ag.ERROR,children:"Error"})]})]}),(0,Tr.jsxs)(Bg,{children:[(0,Tr.jsx)(Lg,{children:"Show Checkbox"}),(0,Tr.jsxs)(Rg,{value:F.toString(),onChange:e=>S("true"===e.target.value),children:[(0,Tr.jsx)("option",{value:"false",children:"No"}),(0,Tr.jsx)("option",{value:"true",children:"Yes"})]})]})]}),(0,Tr.jsx)(Pg,{children:(0,Tr.jsx)(vi,{variant:ui.SECONDARY,label:"Open Confirmation Modal",onClick:()=>g(!0)})}),(0,Tr.jsx)(Cg,{isOpen:m,onClose:()=>g(!1),title:k,body:A,status:v,showCheckbox:F,checkboxChecked:C,onCheckboxChange:e=>E(e),primaryButtonLabel:D,secondaryButtonLabel:M,theme:x,onPrimaryClick:()=>{console.log("Primary button clicked",{checkboxChecked:C}),g(!1)},onSecondaryClick:()=>{console.log("Secondary button clicked"),g(!1)}})]})]})},Hg={TOP:"top",BOTTOM:"bottom",LEFT:"left",RIGHT:"right"},Ug=wr.div`
  display: inline-block;
  position: relative;
`,Wg=wr.div`
  position: absolute;
  z-index: 1000;
  padding: 8px 12px;
  background-color: ${e=>e.isDarkMode?nf("text.primary",Jp):nf("text.primary",Qp)};
  color: ${e=>e.isDarkMode?nf("background.canvas",Jp):nf("background.canvas",Qp)};
  border-radius: 4px;
  font-family: ${Dr};
  font-size: 0.875rem;
  line-height: 1.4;
  white-space: nowrap;
  pointer-events: none;
  opacity: ${e=>e.$visible?1:0};
  visibility: ${e=>e.$visible?"visible":"hidden"};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  /* Position styles */
  ${e=>{switch(e.position){case Hg.TOP:return"\n          bottom: 100%;\n          left: 50%;\n          transform: translateX(-50%) translateY(-4px);\n          margin-bottom: 4px;\n        ";case Hg.BOTTOM:return"\n          top: 100%;\n          left: 50%;\n          transform: translateX(-50%) translateY(4px);\n          margin-top: 4px;\n        ";case Hg.LEFT:return"\n          right: 100%;\n          top: 50%;\n          transform: translateY(-50%) translateX(-4px);\n          margin-right: 4px;\n        ";case Hg.RIGHT:return"\n          left: 100%;\n          top: 50%;\n          transform: translateY(-50%) translateX(4px);\n          margin-left: 4px;\n        ";default:return""}}}
`,Vg=e=>{let{children:n,content:r,position:o=Hg.TOP,isDarkMode:i=!1,disabled:a=!1,delay:s=0,className:l,...c}=e;const[d,u]=(0,t.useState)(!1),[p,f]=(0,t.useState)(o),h=(0,t.useRef)(null),m=(0,t.useRef)(null),g=(0,t.useRef)(null);(0,t.useEffect)(()=>()=>{g.current&&clearTimeout(g.current)},[]);const x=()=>{!a&&r&&(s>0?g.current=setTimeout(()=>{u(!0)},s):u(!0))},b=()=>{g.current&&clearTimeout(g.current),u(!1)};(0,t.useEffect)(()=>{if(d&&m.current&&h.current){const e=m.current,t=h.current.getBoundingClientRect(),n=e.getBoundingClientRect(),r=window.innerWidth,i=window.innerHeight;let a=o;o===Hg.TOP&&t.top-n.height<0?a=Hg.BOTTOM:o===Hg.BOTTOM&&t.bottom+n.height>i?a=Hg.TOP:o===Hg.LEFT&&t.left-n.width<0?a=Hg.RIGHT:o===Hg.RIGHT&&t.right+n.width>r&&(a=Hg.LEFT),f(a)}},[d,o]);if(!r||a)return(0,Tr.jsx)(Tr.Fragment,{children:n});const v=`tooltip-${Math.random().toString(36).substr(2,9)}`;return(0,Tr.jsxs)(Ug,{ref:h,onMouseEnter:()=>x(),onMouseLeave:()=>b(),onFocus:()=>x(),onBlur:()=>b(),className:l,...c,children:[t.cloneElement(n,{"aria-describedby":v}),d&&(0,Tr.jsx)(Wg,{ref:m,id:v,role:"tooltip",position:p,isDarkMode:i,$visible:d,children:r})]})};var Gg=n(5465);const Kg=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Yg=wr.div`
  margin-bottom: 48px;
`,Xg=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,qg=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Qg=wr.section`
  margin-bottom: 48px;
`,Jg=wr.h2`
  font-size: 1.125rem;
  margin-bottom: 24px;
  color: #0F172A;
`,Zg=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,ex=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,tx=wr.label`
  font-weight: 600;
  color: #0F172A;
`,nx=wr.select`
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
`,rx=wr.div`
  background: ${e=>e.isDarkMode?"#18181B":"#FFFFFF"};
  padding: 48px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  min-height: 200px;
`,ox=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,ix=wr.div`
  background: ${e=>nf("surface.card",e.isDarkMode?Jp:Qp)};
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${e=>e.isDarkMode?"#3F3F46":"#E2E8F0"};
`,ax=wr.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${e=>e.isDarkMode?"#D4D4D8":"#0F172A"};
  margin-bottom: 16px;
`,sx=wr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
`,lx=()=>{const[e,n]=(0,t.useState)(Hg.TOP),[r,o]=(0,t.useState)(Qp),i=r===Jp;return(0,Tr.jsxs)(Kg,{children:[(0,Tr.jsxs)(Yg,{children:[(0,Tr.jsx)(Xg,{children:"Tooltip"}),(0,Tr.jsx)(qg,{children:"Tooltips provide contextual information when users hover over or focus on an element. They are useful for displaying additional details, help text, or brief explanations without cluttering the interface."})]}),(0,Tr.jsxs)(Qg,{children:[(0,Tr.jsx)(Jg,{children:"Basic tooltip"}),(0,Tr.jsxs)(Zg,{children:[(0,Tr.jsxs)(ex,{children:[(0,Tr.jsx)(tx,{children:"Position"}),(0,Tr.jsxs)(nx,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:Hg.TOP,children:"Top"}),(0,Tr.jsx)("option",{value:Hg.BOTTOM,children:"Bottom"}),(0,Tr.jsx)("option",{value:Hg.LEFT,children:"Left"}),(0,Tr.jsx)("option",{value:Hg.RIGHT,children:"Right"})]})]}),(0,Tr.jsxs)(ex,{children:[(0,Tr.jsx)(tx,{children:"Theme"}),(0,Tr.jsxs)(nx,{value:r,onChange:e=>o(e.target.value),children:[(0,Tr.jsx)("option",{value:Qp,children:"Light.a"}),(0,Tr.jsx)("option",{value:Jp,children:"Dark.a"})]})]})]}),(0,Tr.jsx)(rx,{isDarkMode:i,children:(0,Tr.jsx)(Vg,{content:"This is a tooltip example",position:e,isDarkMode:i,children:(0,Tr.jsx)(vi,{variant:ui.ICON,iconVariant:fi.SECONDARY,size:hi.MEDIUM,isDarkMode:i,customIcon:(0,Tr.jsx)(yi.A,{}),"aria-label":"Information"})})})]}),(0,Tr.jsxs)(Qg,{children:[(0,Tr.jsx)(Jg,{children:"Position examples"}),(0,Tr.jsxs)(ox,{children:[(0,Tr.jsxs)(ix,{isDarkMode:i,children:[(0,Tr.jsx)(ax,{isDarkMode:i,children:"Top"}),(0,Tr.jsx)(sx,{children:(0,Tr.jsx)(Vg,{content:"Tooltip on top",position:Hg.TOP,isDarkMode:i,children:(0,Tr.jsx)(vi,{variant:ui.ICON,iconVariant:fi.SECONDARY,size:hi.MEDIUM,isDarkMode:i,customIcon:(0,Tr.jsx)(Gg.A,{}),"aria-label":"Help"})})})]}),(0,Tr.jsxs)(ix,{isDarkMode:i,children:[(0,Tr.jsx)(ax,{isDarkMode:i,children:"Bottom"}),(0,Tr.jsx)(sx,{children:(0,Tr.jsx)(Vg,{content:"Tooltip on bottom",position:Hg.BOTTOM,isDarkMode:i,children:(0,Tr.jsx)(vi,{variant:ui.ICON,iconVariant:fi.SECONDARY,size:hi.MEDIUM,isDarkMode:i,customIcon:(0,Tr.jsx)(Gg.A,{}),"aria-label":"Help"})})})]}),(0,Tr.jsxs)(ix,{isDarkMode:i,children:[(0,Tr.jsx)(ax,{isDarkMode:i,children:"Left"}),(0,Tr.jsx)(sx,{children:(0,Tr.jsx)(Vg,{content:"Tooltip on left",position:Hg.LEFT,isDarkMode:i,children:(0,Tr.jsx)(vi,{variant:ui.ICON,iconVariant:fi.SECONDARY,size:hi.MEDIUM,isDarkMode:i,customIcon:(0,Tr.jsx)(Gg.A,{}),"aria-label":"Help"})})})]}),(0,Tr.jsxs)(ix,{isDarkMode:i,children:[(0,Tr.jsx)(ax,{isDarkMode:i,children:"Right"}),(0,Tr.jsx)(sx,{children:(0,Tr.jsx)(Vg,{content:"Tooltip on right",position:Hg.RIGHT,isDarkMode:i,children:(0,Tr.jsx)(vi,{variant:ui.ICON,iconVariant:fi.SECONDARY,size:hi.MEDIUM,isDarkMode:i,customIcon:(0,Tr.jsx)(Gg.A,{}),"aria-label":"Help"})})})]})]})]})]})};var cx=n(4914),dx=n(9611),ux=n(2577);const px=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,fx=wr.div`
  margin-bottom: 48px;
`,hx=wr.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`,mx=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,gx=wr.section`
  margin-bottom: 48px;
`,xx=wr.h2`
  font-size: 1.125rem; /* 18px */
  color: #0F172A;
`,bx=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  margin-bottom: 32px;
  max-width: 800px;
`,vx=wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`,yx=wr.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,kx=wr.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
`,wx=wr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${e=>e.color||"#475569"};
  font-size: 24px;
`,Ax=wr.div`
  flex: 1;
`,jx=wr.h4`
  font-size: 14px;
  font-weight: 600;
  color: #0F172A;
  margin: 0 0 4px 0;
`,Fx=wr.p`
  font-size: 12px;
  color: #64748B;
  margin: 0;
  line-height: 1.4;
`,Sx=wr.pre`
  background: #1E293B;
  color: #E2E8F0;
  padding: 16px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.5;
  overflow-x: auto;
  margin: 16px 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
`,Cx=(wr.code`
  background: #F1F5F9;
  color: #0F172A;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
`,wr.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
`),Ex=wr.h3`
  font-size: 16px;
  font-weight: 600;
  color: #0F172A;
  margin: 0 0 8px 0;
`,Dx=wr.p`
  font-size: 14px;
  color: #475569;
  margin: 0 0 12px 0;
  line-height: 1.5;
`,$x=(wr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,wr.li`
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
`,()=>{const e=[{icon:(0,Tr.jsx)(yi.A,{}),name:"InfoIcon",description:"Used for informational messages and help text",color:"#1D4ED8"},{icon:(0,Tr.jsx)(ki.A,{}),name:"CheckCircleIcon",description:"Indicates success states and completed actions",color:"#047857"},{icon:(0,Tr.jsx)(wi.A,{}),name:"WarningIcon",description:"Shows warnings and cautionary information",color:"#C2410C"},{icon:(0,Tr.jsx)(Ai.A,{}),name:"ErrorIcon",description:"Displays error states and critical issues",color:"#B91C1C"}],t=[{icon:(0,Tr.jsx)(ni.A,{}),name:"DownloadIcon",description:"File download and export actions",color:"#0F172A"},{icon:(0,Tr.jsx)(cx.A,{}),name:"ContentCopyIcon",description:"Copy to clipboard functionality",color:"#0F172A"},{icon:(0,Tr.jsx)(Ef.A,{}),name:"ChevronRightIcon",description:"Forward navigation and next actions",color:"#0F172A"},{icon:(0,Tr.jsx)(Cf.A,{}),name:"ChevronLeftIcon",description:"Backward navigation and previous actions",color:"#0F172A"},{icon:(0,Tr.jsx)(Lm.A,{}),name:"ExpandMoreIcon",description:"Expand content or show more options",color:"#0F172A"},{icon:(0,Tr.jsx)(Rm.A,{}),name:"ExpandLessIcon",description:"Collapse content or show fewer options",color:"#0F172A"}],n=[{icon:(0,Tr.jsx)(dx.A,{}),name:"MenuIcon",description:"Hamburger menu and navigation drawer",color:"#0F172A"},{icon:(0,Tr.jsx)(Er.A,{}),name:"CloseIcon",description:"Close dialogs, modals, and dismiss actions",color:"#0F172A"},{icon:(0,Tr.jsx)(Cr.A,{}),name:"SearchIcon",description:"Search functionality and query input",color:"#0F172A"},{icon:(0,Tr.jsx)(ux.A,{}),name:"SettingsIcon",description:"Configuration and preferences",color:"#0F172A"}];return(0,Tr.jsxs)(px,{children:[(0,Tr.jsxs)(fx,{children:[(0,Tr.jsx)(hx,{children:"Iconography"}),(0,Tr.jsx)(mx,{children:"Our design system adopts the Material Design icon library to ensure consistency and accessibility across all interfaces. Material Design icons provide a comprehensive set of scalable vector icons that enhance user experience and provide visual clarity. These icons are designed to be simple, modern, and accessible, making them perfect for creating intuitive user interfaces."})]}),(0,Tr.jsxs)(gx,{children:[(0,Tr.jsx)(xx,{children:"Semantic Status Icons"}),(0,Tr.jsx)(bx,{children:"Status icons communicate specific states and provide immediate visual feedback to users. These icons use semantic colors to reinforce their meaning and improve accessibility."}),(0,Tr.jsx)(vx,{children:e.map((e,t)=>(0,Tr.jsx)(yx,{children:(0,Tr.jsxs)(kx,{children:[(0,Tr.jsx)(wx,{color:e.color,children:e.icon}),(0,Tr.jsxs)(Ax,{children:[(0,Tr.jsx)(jx,{children:e.name}),(0,Tr.jsx)(Fx,{children:e.description})]})]})},t))})]}),(0,Tr.jsxs)(gx,{children:[(0,Tr.jsx)(xx,{children:"Action Icons"}),(0,Tr.jsx)(bx,{children:"Action icons represent common user interactions and system operations. These icons help users understand available actions and improve interface efficiency."}),(0,Tr.jsx)(vx,{children:t.map((e,t)=>(0,Tr.jsx)(yx,{children:(0,Tr.jsxs)(kx,{children:[(0,Tr.jsx)(wx,{color:e.color,children:e.icon}),(0,Tr.jsxs)(Ax,{children:[(0,Tr.jsx)(jx,{children:e.name}),(0,Tr.jsx)(Fx,{children:e.description})]})]})},t))})]}),(0,Tr.jsxs)(gx,{children:[(0,Tr.jsx)(xx,{children:"Navigation & UI Icons"}),(0,Tr.jsx)(bx,{children:"Navigation and UI icons help users navigate through the interface and access different sections. These icons provide consistent wayfinding and improve overall user experience."}),(0,Tr.jsx)(vx,{children:n.map((e,t)=>(0,Tr.jsx)(yx,{children:(0,Tr.jsxs)(kx,{children:[(0,Tr.jsx)(wx,{color:e.color,children:e.icon}),(0,Tr.jsxs)(Ax,{children:[(0,Tr.jsx)(jx,{children:e.name}),(0,Tr.jsx)(Fx,{children:e.description})]})]})},t))})]}),(0,Tr.jsxs)(gx,{children:[(0,Tr.jsx)(xx,{children:"Resources"}),(0,Tr.jsx)(bx,{children:"Access official documentation and additional icon libraries to expand your icon toolkit."}),(0,Tr.jsxs)(Cx,{children:[(0,Tr.jsx)(Ex,{children:"Google Material Design Icons Library"}),(0,Tr.jsx)(Dx,{children:"Official Material Design icon library with comprehensive icon sets, search functionality, and download options."}),(0,Tr.jsx)(vi,{variant:"text",textVariant:"primary",size:"small",label:"Visit Material Design Icons",iconPosition:mi.LEFT,customIcon:(0,Tr.jsx)(ti.A,{}),onClick:()=>window.open("https://fonts.google.com/icons","_blank","noopener,noreferrer")})]}),(0,Tr.jsxs)(Cx,{children:[(0,Tr.jsx)(Ex,{children:"MUI Icons Installation & Usage"}),(0,Tr.jsx)(Dx,{children:"Complete documentation for installing and using Material-UI icons in React applications."}),(0,Tr.jsx)(vi,{variant:"text",textVariant:"primary",size:"small",label:"MUI Icons Documentation",iconPosition:mi.LEFT,customIcon:(0,Tr.jsx)(ti.A,{}),onClick:()=>window.open("https://mui.com/material-ui/material-icons/","_blank","noopener,noreferrer")}),(0,Tr.jsx)(Sx,{style:{marginTop:"12px"},children:"npm install @mui/icons-material"})]})]})]})}),Mx=wr.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`,Tx=wr.div`
  margin-bottom: 48px;
`,Ix=wr.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #0F172A;
`,zx=wr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`,Bx=wr.div`
  margin-bottom: 3rem;
`,Lx=wr.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #0F172A;
  font-weight: 600;
`,Rx=wr.div`
  margin-bottom: 2rem;
`,Px=wr.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #1E293B;
  font-weight: 600;
`,Ox=wr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #475569;
  margin-bottom: 1rem;
  max-width: 680px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Nx=(wr.a`
  color: #3B82F6;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`,wr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`),_x=wr.h3`
  margin: 0 0 0.75rem 0;
  color: #334155;
  font-family: ${Dr};
  font-size: 1.125rem;
  font-weight: 600;
`,Hx=wr.p`
  margin: 0;
  color: #334155;
  line-height: 1.5;
  font-family: ${Dr};
  font-size: 1rem;
`,Ux=wr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`,Wx=wr($o)`
  position: relative;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  height: auto;
  min-height: fit-content;
`,Vx=wr.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  background-color: ${e=>"do"===e.type?"#f0fdf4":"#fef2f2"};
  padding: 16px 16px 12px;
  margin: -24px -24px 16px -24px;
  border-bottom: 4px solid ${e=>"do"===e.type?"#047857":"#B91C1C"};
`,Gx=wr.div`
  color: ${e=>"do"===e.type?"#047857":"#B91C1C"};
  display: flex;
  align-items: center;
`,Kx=wr.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>"do"===e.type?"#047857":"#B91C1C"};
  margin: 0;
`,Yx=wr.div`
  margin-bottom: 0;
  font-family: ${Dr};
  font-size: 1rem;
  color: #334155;
  font-weight: 500;
`,Xx=wr.div`
  margin-bottom: 0;
  font-family: ${Dr};
  font-size: 1rem;
  color: #334155;
  font-weight: 500;
  width: 200px;
  line-height: 1.4;
`,qx=wr.div`
  margin-bottom: 0;
  font-family: ${Dr};
  font-size: 1rem;
  color: #334155;
  font-weight: 500;
  width: 120px;
  line-height: 1.2;
`,Qx=(wr.p`
  font-size: 14px;
  line-height: 1.5;
  color: #4b5563;
  margin: 0;
`,wr.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
`),Jx=wr.h3`
  font-size: 16px;
  font-weight: 600;
  color: #0F172A;
  margin: 0 0 8px 0;
`,Zx=wr.p`
  font-size: 14px;
  color: #475569;
  margin: 0 0 12px 0;
  line-height: 1.5;
  max-width: 680px;
`,eb=wr.a`
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
`,tb=()=>(0,Tr.jsxs)(Mx,{children:[(0,Tr.jsxs)(Tx,{children:[(0,Tr.jsx)(Ix,{children:"Language & Grammar"}),(0,Tr.jsx)(zx,{children:"Guidelines for creating clear, accessible, and purposeful content that aligns with Lenovo's tone of voice and supports our mission of Smarter Technology for All."})]}),(0,Tr.jsxs)(Bx,{children:[(0,Tr.jsx)(Lx,{children:"Tone of Voice"}),(0,Tr.jsx)(Ox,{children:"We are tech optimists: We believe in the power of technology to enable positive human-centered outcomes and we know that a global, inclusive perspective is critical to real change."}),(0,Tr.jsxs)(Rx,{children:[(0,Tr.jsx)(Px,{children:"Lenovo is"}),(0,Tr.jsxs)(Nx,{children:[(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Purposeful"}),(0,Tr.jsx)(Hx,{children:"There is an intent to everything we do."})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Unexpected"}),(0,Tr.jsx)(Hx,{children:"We don't sound like everyone else."})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Brave"}),(0,Tr.jsx)(Hx,{children:"We are confident in our point of view."})]})})]})]})]}),(0,Tr.jsxs)(Bx,{children:[(0,Tr.jsx)(Lx,{children:"Content Guidelines"}),(0,Tr.jsxs)(Rx,{children:[(0,Tr.jsx)(Px,{children:"Generally, the text itself is"}),(0,Tr.jsxs)(Nx,{children:[(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Accessible"}),(0,Tr.jsxs)(Hx,{children:["Language below a 7th grade reading level.",(0,Tr.jsx)("br",{}),(0,Tr.jsx)("br",{}),"Every element has text for screen readers including URLs and button states.",(0,Tr.jsx)("br",{}),(0,Tr.jsx)("br",{}),"Available in the languages our users are most proficient in."]})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Purposeful"}),(0,Tr.jsxs)(Hx,{children:["What our user can or should do to meet the goals in their best interest is clear.",(0,Tr.jsx)("br",{}),(0,Tr.jsx)("br",{}),"Suggestions supports Lenovo's mission of Smarter Technology for All."]})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Concise"}),(0,Tr.jsxs)(Hx,{children:["Information presented is relevant at the moment of the experience.",(0,Tr.jsx)("br",{}),(0,Tr.jsx)("br",{}),"Text is <50 characters wide and <4 lines long.",(0,Tr.jsx)("br",{}),(0,Tr.jsx)("br",{}),"Buttons have three or fewer words."]})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Conversational"}),(0,Tr.jsxs)(Hx,{children:["The words, phrases, and ideas presented are familiar or well explained.",(0,Tr.jsx)("br",{}),(0,Tr.jsx)("br",{}),"Directions are presented in useful, logical, and complete steps."]})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Clear"}),(0,Tr.jsxs)(Hx,{children:["Actions have unambiguous results.",(0,Tr.jsx)("br",{}),(0,Tr.jsx)("br",{}),"Error messages help our users to move forward.",(0,Tr.jsx)("br",{}),(0,Tr.jsx)("br",{}),"The same term means the same thing every time it is used.",(0,Tr.jsx)("br",{}),(0,Tr.jsx)("br",{}),"Policy information is easy to find."]})]})})]})]})]}),(0,Tr.jsxs)(Bx,{children:[(0,Tr.jsx)(Lx,{children:"Capitalization"}),(0,Tr.jsx)(Ox,{children:"Sentence case should be used in all titles, headings, menu items, lists, labels and buttons."}),(0,Tr.jsxs)(Ux,{children:[(0,Tr.jsx)(Wx,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsxs)(Vx,{type:"do",children:[(0,Tr.jsx)(Gx,{type:"do",children:(0,Tr.jsx)(ki.A,{})}),(0,Tr.jsx)(Kx,{type:"do",children:"Do use sentence case for all UI text elements."})]}),(0,Tr.jsx)(Yx,{children:"Check for updates"})]})}),(0,Tr.jsx)(Wx,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsxs)(Vx,{type:"dont",children:[(0,Tr.jsx)(Gx,{type:"dont",children:(0,Tr.jsx)(zl.A,{})}),(0,Tr.jsx)(Kx,{type:"dont",children:"Don't use title case or capitalize every word."})]}),(0,Tr.jsx)(Yx,{children:"Check for Updates"})]})})]})]}),(0,Tr.jsxs)(Bx,{children:[(0,Tr.jsx)(Lx,{children:"Punctuation"}),(0,Tr.jsxs)(Nx,{children:[(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Consistent"}),(0,Tr.jsx)(Hx,{children:"Punctuation is consistent."})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Headers"}),(0,Tr.jsx)(Hx,{children:"Short strings such as headers do not need punctuation."})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Full sentences"}),(0,Tr.jsx)(Hx,{children:"Full sentences always get full punctuation."})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Exclamation points"}),(0,Tr.jsx)(Hx,{children:"Friendly, delightful uses of exclamation points are encouraged!"})]})})]})]}),(0,Tr.jsxs)(Bx,{children:[(0,Tr.jsx)(Lx,{children:"Body text"}),(0,Tr.jsxs)(Nx,{children:[(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Detailed but not technical"}),(0,Tr.jsx)(Hx,{children:"Body text should be detailed but not overly technical."})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Concise with opportunities"}),(0,Tr.jsx)(Hx,{children:"Be concise but offer opportunities to learn more."})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Familiar language"}),(0,Tr.jsx)(Hx,{children:"Use familiar language, especially when discussing technical or unfamiliar topics."})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Support with visuals"}),(0,Tr.jsx)(Hx,{children:"Support with visuals."})]})}),(0,Tr.jsx)($o,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsx)(_x,{children:"Avoid orphans and widows"}),(0,Tr.jsx)(Hx,{children:"One word alone on a line (an orphan) and two words alone on a line (a widow) are to be avoided wherever possible."})]})})]}),(0,Tr.jsx)(Ox,{children:"Example:"}),(0,Tr.jsxs)(Ux,{children:[(0,Tr.jsx)(Wx,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsxs)(Vx,{type:"do",children:[(0,Tr.jsx)(Gx,{type:"do",children:(0,Tr.jsx)(ki.A,{})}),(0,Tr.jsx)(Kx,{type:"do",children:"Do"})]}),(0,Tr.jsx)(Yx,{children:"This is a good example where there are several words on every line."})]})}),(0,Tr.jsx)(Wx,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsxs)(Vx,{type:"dont",children:[(0,Tr.jsx)(Gx,{type:"dont",children:(0,Tr.jsx)(zl.A,{})}),(0,Tr.jsx)(Kx,{type:"dont",children:"Don't"})]}),(0,Tr.jsx)(Xx,{children:"This is an example where two words, called a widow, are alone on a line as a result of a line break."})]})}),(0,Tr.jsx)(Wx,{children:(0,Tr.jsxs)($o.Body,{children:[(0,Tr.jsxs)(Vx,{type:"dont",children:[(0,Tr.jsx)(Gx,{type:"dont",children:(0,Tr.jsx)(zl.A,{})}),(0,Tr.jsx)(Kx,{type:"dont",children:"Don't"})]}),(0,Tr.jsx)(qx,{children:"This is an example where one word, called an orphan, is alone on a line as a result of a line break."})]})})]})]}),(0,Tr.jsxs)(Bx,{children:[(0,Tr.jsx)(Lx,{children:"Resources"}),(0,Tr.jsx)(Ox,{children:"Access official documentation and additional resources to expand your content toolkit."}),(0,Tr.jsxs)(Qx,{children:[(0,Tr.jsx)(Jx,{children:"Lenovo brand voice and tone guidelines"}),(0,Tr.jsx)(Zx,{children:"Official Lenovo brand guidelines for tone of voice, messaging, and content strategy."}),(0,Tr.jsxs)(eb,{href:"https://brandworld.lenovo.com/tone-of-voice/",target:"_blank",rel:"noopener noreferrer",children:["Visit Lenovo brand guidelines",(0,Tr.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Tr.jsx)("path",{d:"M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h12V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7z"})})]})]})]})]}),nb=wr.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: relative;
  overflow: clip;
  flex-shrink: 0;
  
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    filter: ${e=>e.isDarkMode?"brightness(0) invert(1) brightness(0.63)":"none"};
    /* 
     * Dark mode filter explanation:
     * - brightness(0): Makes icon black
     * - invert(1): Inverts to white
     * - brightness(0.63): Adjusts to target color #a1a1aa (161/255 ≈ 0.63)
     * This converts the dark #0F172A icon to light #a1a1aa in dark mode
     */
  }
`,rb=e=>{let{isDarkMode:t=!1,className:n,...r}=e;return(0,Tr.jsx)(nb,{isDarkMode:t,className:n,role:"img","aria-label":"Moto AI avatar",...r,children:(0,Tr.jsx)("img",{src:Bl,alt:"Moto AI"})})},ob=wr.div`
  background-color: ${e=>e.isDarkMode?ri.surfaceCard.darkA:ri.surfaceCard.lightA};
  border: 1px solid ${e=>e.isDarkMode?ri.borderWeak.darkA:ri.borderWeak.lightA};
  border-radius: 4px 4px 4px 0;
  padding: 16px;
  max-width: 480px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.isDarkMode?ri.textPrimary.darkA:ri.textPrimary.lightA};
  word-wrap: break-word;
`,ib=e=>{let{text:t="",isDarkMode:n=!1,className:r,...o}=e;return(0,Tr.jsx)(ob,{isDarkMode:n,className:r,role:"article","aria-label":"AI response",...o,children:t})};var ab=n(7779),sb=n(2826);const lb={REST:"rest",REGENERATION:"regeneration",MAX:"max"},cb=wr.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 24px;
  border: 1px solid ${e=>nf("border.weak",e.isDarkMode?Jp:Qp)};
  border-radius: 4px;
  background-color: ${e=>nf("surface.card",e.isDarkMode?Jp:Qp)};
  overflow: clip;
`,db=wr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 32px;
  height: 24px;
  padding: 6px 8px;
  overflow: clip;
  border-radius: inherit;
`,ub=wr.button`
  position: relative;
  box-sizing: border-box;
  width: 32px;
  height: 24px;
  border: 1px solid ${e=>nf("border.weak",e.isDarkMode?Jp:Qp)};
  border-radius: 4px;
  background-color: ${e=>nf("surface.card",e.isDarkMode?Jp:Qp)};
  cursor: pointer;
  padding: 0;
  outline: none;
  transition: background-color 0.2s ease, color 0.2s ease;
  
  /* Focus ring - only visible on keyboard navigation (tab), not on mouse click */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 32px;
    height: 24px;
    border: 1.5px solid ${e=>nf("border.focus",e.isDarkMode?Jp:Qp)};
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }
  
  &:focus-visible::before {
    opacity: 1;
  }
  
  &:hover {
    background-color: ${e=>nf("reference.secondaryWeak",e.isDarkMode?Jp:Qp)};
    
    svg {
      color: ${e=>nf("icon.primary",e.isDarkMode?Jp:Qp)};
    }
  }
  
  &:active {
    background-color: ${e=>nf("surface.iconButtonSecondaryPress",e.isDarkMode?Jp:Qp)};
    
    svg {
      color: ${e=>nf("icon.primary",e.isDarkMode?Jp:Qp)};
    }
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${e=>nf("icon.primary",e.isDarkMode?Jp:Qp)};
    transition: color 0.2s ease;
  }
`,pb=wr.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: 32px;
  height: 24px;
  border: none;
  background-color: ${e=>{const t=e.isDarkMode?Jp:Qp;return e.$disabled?nf("reference.surfaceDisabled",t):nf("surface.card",t)}};
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  padding: 6px 8px;
  overflow: clip;
  outline: none;
  transition: background-color 0.2s ease, color 0.2s ease;
  
  /* Border-radius based on position */
  ${e=>e.$isFirst?"\n        border-top-left-radius: 4px;\n        border-bottom-left-radius: 4px;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n      ":e.$isLast?"\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n        border-top-right-radius: 4px;\n        border-bottom-right-radius: 4px;\n      ":"\n        border-radius: 0;\n      "}
  
  /* Focus ring - only visible on keyboard navigation (tab), not on mouse click */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 32px;
    height: 24px;
    border: 1.5px solid ${e=>nf("border.focus",e.isDarkMode?Jp:Qp)};
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
    ${e=>e.$isFirst?"\n          border-top-left-radius: 4px;\n          border-bottom-left-radius: 4px;\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0;\n        ":e.$isLast?"\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0;\n          border-top-right-radius: 4px;\n          border-bottom-right-radius: 4px;\n        ":"\n          border-radius: 0;\n        "}
  }
  
  &:focus-visible::before {
    opacity: 1;
  }
  
  &:hover:not(:disabled) {
    background-color: ${e=>nf("reference.secondaryWeak",e.isDarkMode?Jp:Qp)};
    
    svg {
      color: ${e=>nf("icon.primary",e.isDarkMode?Jp:Qp)};
    }
  }
  
  &:active:not(:disabled) {
    background-color: ${e=>nf("surface.iconButtonSecondaryPress",e.isDarkMode?Jp:Qp)};
    
    svg {
      color: ${e=>nf("icon.primary",e.isDarkMode?Jp:Qp)};
    }
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${e=>{const t=e.isDarkMode?Jp:Qp;return e.$disabled?nf("surface.disabled",t):nf("icon.primary",t)}};
    transition: color 0.2s ease;
  }
`,fb=wr(pb)`
  border-left: 1px solid ${e=>nf("border.weak",e.isDarkMode?Jp:Qp)};
`,hb=wr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 24px;
  padding: 6px 8px;
  border-left: 1px solid ${e=>nf("border.weak",e.isDarkMode?Jp:Qp)};
  background-color: ${e=>nf("surface.card",e.isDarkMode?Jp:Qp)};
`,mb=wr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 32px;
  padding: 0 6px;
`,gb=wr.p`
  font-family: 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${e=>nf("text.primary",e.isDarkMode?Jp:Qp)};
  margin: 0;
  text-align: center;
  flex: 1 1 0;
  min-width: 0;
  min-height: 1px;
`,xb=e=>{let{state:t=lb.REST,currentIndex:n=1,totalCount:r=1,isDarkMode:o=!1,onRegenerate:i,onPrevious:a,onNext:s,className:l,...c}=e;const d=t===lb.REST,u=t===lb.MAX,p=n>1,f=n<r,h=e=>{!u&&i&&i(e)};return d?(0,Tr.jsx)(ub,{isDarkMode:o,onClick:h,"aria-label":"Regenerate",className:l,...c,children:(0,Tr.jsx)(db,{children:(0,Tr.jsx)(ab.A,{fontSize:"small"})})}):(0,Tr.jsxs)(cb,{isDarkMode:o,className:l,...c,children:[(0,Tr.jsx)(pb,{isDarkMode:o,$disabled:u,$isFirst:!0,disabled:u,onClick:h,"aria-label":u?"Regenerate (max reached)":"Regenerate","aria-disabled":u,children:u?(0,Tr.jsx)(sb.A,{fontSize:"small"}):(0,Tr.jsx)(ab.A,{fontSize:"small"})}),(0,Tr.jsx)(fb,{isDarkMode:o,$disabled:!p,disabled:!p,onClick:e=>{p&&a&&a(e)},"aria-label":"Previous regeneration","aria-disabled":!p,children:(0,Tr.jsx)(Cf.A,{fontSize:"small"})}),(0,Tr.jsx)(hb,{isDarkMode:o,children:(0,Tr.jsx)(mb,{children:(0,Tr.jsxs)(gb,{isDarkMode:o,children:[n,"/",r]})})}),(0,Tr.jsx)(fb,{isDarkMode:o,$disabled:!f,$isLast:!0,disabled:!f,onClick:e=>{f&&s&&s(e)},"aria-label":"Next regeneration","aria-disabled":!f,children:(0,Tr.jsx)(Ef.A,{fontSize:"small"})})]})};xb.REGENERATE_STATES=lb;const bb=xb;var vb=n(4977),yb=n(7235);const kb={REST:"rest",HOVER:"hover",FOCUS:"focus",DISABLED:"disabled"},wb={LIGHT:"light.a",DARK:"dark.a"},Ab=wr.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: 32px;
  height: 24px;
  padding: 6px 8px;
  border: 1px solid ${e=>{return t=e.$state,e.$isPinned,n=e.theme,t===kb.DISABLED?nf("border.disabled",n):nf("border.weak",n);var t,n}};
  border-radius: 4px;
  background-color: ${e=>{return t=e.$state,e.$isPinned,n=e.theme,wb.DARK,t===kb.DISABLED?nf("reference.surfaceDisabled",n):t===kb.HOVER?nf("reference.secondaryWeak",n):nf("surface.card",n);var t,n}};
  cursor: ${e=>e.$state===kb.DISABLED?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  user-select: none;
  outline: none;
  overflow: visible;
  
  /* Focus ring - only visible on keyboard navigation (tab), not on mouse click */
  /* Matches Figma: left-0 top-0, h-[24px] w-[32px], border-[1.5px] */
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    box-sizing: border-box;
    border: 1.5px solid ${e=>nf("border.focus",e.theme)};
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }
  
  &:focus-visible::before {
    opacity: 1;
  }
  
  &:hover {
    background-color: ${e=>e.$state===kb.DISABLED?nf("reference.surfaceDisabled",e.theme):nf("reference.secondaryWeak",e.theme)};
  }
  
  &:active {
    background-color: ${e=>e.$state===kb.DISABLED?nf("reference.surfaceDisabled",e.theme):nf("surface.iconButtonSecondaryPress",e.theme)};
  }
  
  svg {
    width: 16px !important;
    height: 16px !important;
    font-size: 16px !important;
    color: ${e=>{return t=e.$state,e.$isPinned,n=e.theme,wb.DARK,t===kb.DISABLED?nf("icon.disabled",n):nf("icon.primary",n);var t,n}};
    fill: currentColor;
    transition: color 0.2s ease-in-out;
  }
`,jb=e=>{let{isPinned:n,state:r=kb.REST,theme:o=wb.LIGHT,disabled:i=!1,onClick:a,className:s,"aria-label":l,...c}=e;const[d,u]=(0,t.useState)(!1),[p,f]=(0,t.useState)(!1),[h,m]=(0,t.useState)(!1),g=void 0!==n,x=g?n:h,b=i?kb.DISABLED:r===kb.FOCUS||p?kb.FOCUS:r===kb.HOVER||d?kb.HOVER:kb.REST,v=x?"Unpin":"Pin";return(0,Tr.jsx)(Ab,{$isPinned:x,$state:b,theme:o,disabled:i,onClick:e=>{i||(g||m(e=>!e),null===a||void 0===a||a(e))},onMouseEnter:()=>{i||u(!0)},onMouseLeave:()=>{u(!1)},onFocus:e=>{i||f(!0)},onBlur:e=>{f(!1)},className:s,"aria-label":l||v,"aria-pressed":x,tabIndex:i?-1:0,...c,children:(0,Tr.jsx)("span",{children:x?(0,Tr.jsx)(vb.A,{sx:{fontSize:"16px",width:"16px",height:"16px"}}):(0,Tr.jsx)(yb.A,{sx:{fontSize:"16px",width:"16px",height:"16px"}})},x?"pinned":"unpinned")})};var Fb=n(9179),Sb=n(5874),Cb=n(9901),Eb=n(7052),Db=n(4055);const $b=wr.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Mb=wr.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`,Tb=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  max-width: 480px;
`,Ib=wr.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 480px;
`,zb=wr.p`
  font-family: 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${e=>nf("reference.helper",e.isDarkMode?Jp:Qp)};
  margin: 0;
  white-space: nowrap;
`,Bb=wr.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;
  width: 240px;

  @media (max-width: 768px) {
    width: auto;
  }
`,Lb=wr.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: 32px;
  height: 24px;
  border: 1px solid ${e=>nf("border.weak",e.isDarkMode?Jp:Qp)};
  border-radius: 4px;
  background-color: ${e=>nf("surface.card",e.isDarkMode?Jp:Qp)};
  cursor: pointer;
  padding: 6px 8px;
  overflow: visible;
  outline: none;
  transition: background-color 0.2s ease, color 0.2s ease;
  
  /* Focus ring - only visible on keyboard navigation (tab), not on mouse click */
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    box-sizing: border-box;
    border: 1.5px solid ${e=>nf("border.focus",e.isDarkMode?Jp:Qp)};
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }
  
  &:focus-visible::before {
    opacity: 1;
  }
  
  &:hover {
    background-color: ${e=>nf("reference.secondaryWeak",e.isDarkMode?Jp:Qp)};
    
    svg {
      color: ${e=>nf("icon.primary",e.isDarkMode?Jp:Qp)};
    }
  }
  
  &:active {
    background-color: ${e=>nf("surface.iconButtonSecondaryPress",e.isDarkMode?Jp:Qp)};
    
    svg {
      color: ${e=>nf("icon.primary",e.isDarkMode?Jp:Qp)};
    }
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${e=>nf("icon.primary",e.isDarkMode?Jp:Qp)};
    transition: color 0.2s ease;
  }
`,Rb=wr.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  height: 24px;
  width: 32px;
  border: none;
  background-color: ${e=>nf("surface.card",e.isDarkMode?Jp:Qp)};
  cursor: pointer;
  padding: 6px 8px;
  overflow: hidden;
  outline: none;
  transition: background-color 0.2s ease, color 0.2s ease;
  
  /* Focus ring - only visible on keyboard navigation (tab), not on mouse click */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 32px;
    height: 24px;
    border: 1.5px solid ${e=>nf("border.focus",e.isDarkMode?Jp:Qp)};
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
    ${e=>e.$isThumbsUp?"\n          border-top-left-radius: 4px;\n          border-bottom-left-radius: 4px;\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0;\n        ":`\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0;\n          border-top-right-radius: ${e.$showRightBorder?"0":"4px"};\n          border-bottom-right-radius: ${e.$showRightBorder?"0":"4px"};\n        `}
  }
  
  &:focus-visible::before {
    opacity: 1;
  }
  
  &:hover {
    background-color: ${e=>nf("surface.itemHover",e.isDarkMode?Jp:Qp)};
  }
  
  &:active {
    background-color: ${e=>nf("surface.itemSelected",e.isDarkMode?Jp:Qp)};
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${e=>nf("icon.primary",e.isDarkMode?Jp:Qp)};
    transition: color 0.2s ease;
  }
  
  ${e=>{const t=nf("border.weak",e.isDarkMode?Jp:Qp);return e.$isThumbsUp?`\n        border-top-left-radius: 4px;\n        border-bottom-left-radius: 4px;\n        border-right: ${e.$showRightBorder?`1px solid ${t}`:"none"};\n      `:`\n        border-top-right-radius: ${e.$showRightBorder?"0":"4px"};\n        border-bottom-right-radius: ${e.$showRightBorder?"0":"4px"};\n        border-right: ${e.$showRightBorder?`1px solid ${t}`:"none"};\n      `}}
`,Pb=wr.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  height: 24px;
  padding: 6px 12px;
  border: none;
  background-color: ${e=>{const t=e.isDarkMode?Jp:Qp;return e.$disabled?nf("reference.surfaceDisabled",t):nf("surface.card",t)}};
  color: ${e=>{const t=e.isDarkMode?Jp:Qp;return e.$disabled?nf("surface.disabled",t):nf("text.primary",t)}};
  font-family: 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  outline: none;
  transition: background-color 0.2s ease, color 0.2s ease;
  white-space: nowrap;
  
  /* Focus ring - only visible on keyboard navigation (tab), not on mouse click */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    border: 1.5px solid ${e=>nf("border.focus",e.isDarkMode?Jp:Qp)};
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }
  
  &:focus-visible::before {
    opacity: 1;
  }
  
  &:hover:not(:disabled) {
    background-color: ${e=>nf("surface.itemHover",e.isDarkMode?Jp:Qp)};
  }
  
  &:active:not(:disabled) {
    background-color: ${e=>nf("surface.itemSelected",e.isDarkMode?Jp:Qp)};
  }
`,Ob=wr.div`
  width: 1px;
  height: 23px;
  background-color: ${e=>nf("border.weak",e.isDarkMode?Jp:Qp)};
  flex-shrink: 0;
`,Nb=wr.div`
  display: flex;
  align-items: center;
  border: 1px solid ${e=>nf("border.weak",e.isDarkMode?Jp:Qp)};
  border-radius: 4px;
  background-color: ${e=>nf("surface.card",e.isDarkMode?Jp:Qp)};
`,_b=wr.div`
  position: relative;
  display: inline-block;
`,Hb=wr.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 1000;
`,Ub=wr.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`,Wb=e=>{let{text:n="",time:r,isDarkMode:o=!1,className:i,onFeedbackGood:a,onFeedbackBad:s,onGiveFeedback:l,onRegenerate:c,onPin:d,onOverflow:u,overflowMenuItems:p=["Copy","Delete","Edit","Share"],onOverflowMenuItemClick:f,regenerateState:h="rest",regenerateCurrentIndex:m=1,regenerateTotalCount:g=1,onRegeneratePrevious:x,onRegenerateNext:b,isPinned:v,...y}=e;const[k,w]=(0,t.useState)(null),[A,j]=(0,t.useState)(!1),[F,S]=(0,t.useState)(!1),[C,E]=(0,t.useState)(null),[D,$]=(0,t.useState)(!1),M=(0,t.useRef)(null),T=(0,t.useRef)(null),I=void 0!==v,z=I?v:F;(0,t.useEffect)(()=>{if(void 0===r){const e=()=>{const e=new Date;E((e=>{const t=new Date,n=new Date(t.getFullYear(),t.getMonth(),t.getDate()),r=new Date(n);r.setDate(r.getDate()-1);const o=new Date(e.getFullYear(),e.getMonth(),e.getDate());let i;return i=o.getTime()===n.getTime()?"Today":o.getTime()===r.getTime()?"Yesterday":e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:e.getFullYear()!==t.getFullYear()?"numeric":void 0}),`${i}, ${e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}`})(e))};e();const t=setInterval(e,6e4);return()=>clearInterval(t)}E(null)},[r]);const B=(0,t.useCallback)(e=>{$(!1),f&&f(e)},[f]);return(0,t.useEffect)(()=>{const e=e=>{D&&M.current&&!M.current.contains(e.target)&&T.current&&!T.current.contains(e.target)&&$(!1)},t=e=>{"Escape"===e.key&&D&&$(!1)};return D&&(document.addEventListener("mousedown",e),document.addEventListener("keydown",t)),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}},[D]),(0,Tr.jsx)($b,{className:i,...y,children:(0,Tr.jsxs)(Mb,{children:[(0,Tr.jsx)(rb,{isDarkMode:o}),(0,Tr.jsxs)(Tb,{children:[(0,Tr.jsx)(ib,{text:n,isDarkMode:o}),(0,Tr.jsxs)(Ib,{children:[(0,Tr.jsx)(zb,{isDarkMode:o,children:void 0!==r?r:C||"Today, 12:00 PM"}),(0,Tr.jsxs)(Bb,{children:[(0,Tr.jsxs)(Nb,{isDarkMode:o,children:[(0,Tr.jsx)(Vg,{content:"Good feedback",position:Hg.TOP,isDarkMode:o,children:(0,Tr.jsx)(Rb,{isDarkMode:o,$isThumbsUp:!0,$showRightBorder:!0,onClick:()=>{const e="good"===k?null:"good";w(e),a&&a("good"===e)},"aria-label":"Thumbs up","aria-pressed":"good"===k,children:"good"===k?(0,Tr.jsx)(Fb.A,{sx:{fontSize:"16px"}}):(0,Tr.jsx)(Cb.A,{sx:{fontSize:"16px"}})})}),(0,Tr.jsx)(Vg,{content:"Bad feedback",position:Hg.TOP,isDarkMode:o,children:(0,Tr.jsx)(Rb,{isDarkMode:o,$isThumbsUp:!1,$showRightBorder:!1,onClick:()=>{const e="bad"===k?null:"bad";w(e),s&&s("bad"===e)},"aria-label":"Thumbs down","aria-pressed":"bad"===k,children:"bad"===k?(0,Tr.jsx)(Sb.A,{sx:{fontSize:"16px"}}):(0,Tr.jsx)(Eb.A,{sx:{fontSize:"16px"}})})}),"bad"===k&&(0,Tr.jsxs)(Tr.Fragment,{children:[(0,Tr.jsx)(Ob,{isDarkMode:o}),(0,Tr.jsx)(Pb,{isDarkMode:o,$disabled:A,disabled:A,onClick:()=>{A||"bad"!==k||(j(!0),l&&l())},"aria-label":"Give feedback",children:"Give feedback"})]})]}),(0,Tr.jsx)(Ub,{children:(0,Tr.jsx)(Vg,{content:"max"===h?"Regenerate (max reached)":"Regenerate",position:Hg.TOP,isDarkMode:o,children:(0,Tr.jsx)(bb,{state:h,currentIndex:m,totalCount:g,isDarkMode:o,onRegenerate:c,onPrevious:x,onNext:b})})}),(0,Tr.jsx)(Ub,{children:(0,Tr.jsx)(Vg,{content:z?"Unpin":"Pin",position:Hg.TOP,isDarkMode:o,children:(0,Tr.jsx)(jb,{isPinned:z,theme:o?wb.DARK:wb.LIGHT,onClick:()=>{if(I||S(e=>!e),d){d(!z)}}})})}),(0,Tr.jsxs)(_b,{children:[(0,Tr.jsx)(Vg,{content:"More options",position:Hg.TOP,isDarkMode:o,children:(0,Tr.jsx)(Lb,{ref:M,isDarkMode:o,onClick:()=>{$(e=>!e),u&&u()},"aria-label":"More options","aria-haspopup":"true","aria-expanded":D,children:(0,Tr.jsx)(Db.A,{sx:{fontSize:"16px"}})})}),D&&(0,Tr.jsx)(Hb,{ref:T,children:(0,Tr.jsx)(Mm,{items:p,theme:o?"dark.a":"light.a",onItemClick:B,width:180})})]})]})]})]})]})})},Vb=wr.div`
  background-color: ${e=>e.isDarkMode?ri.referencePrimaryWeaker.darkA:ri.referencePrimaryWeaker.lightA};
  border: 1px solid ${e=>e.isDarkMode?ri.borderWeak.darkA:ri.borderWeak.lightA};
  border-radius: 4px 4px 0 4px;
  padding: 16px;
  max-width: 480px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.isDarkMode?ri.textPrimary.darkA:ri.textPrimary.lightA};
  word-wrap: break-word;
`,Gb=e=>{let{text:t="",isDarkMode:n=!1,className:r,...o}=e;return(0,Tr.jsx)(Vb,{isDarkMode:n,className:r,role:"article","aria-label":"User message",...o,children:t})};var Kb=n(7412),Yb=n(8620);const Xb=wr.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,qb=wr.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  justify-content: flex-end;
`,Qb=wr.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  max-width: 480px;
`,Jb=wr.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 480px;
  gap: 16px;
`,Zb=wr.p`
  font-family: 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${e=>nf("reference.helper",e.isDarkMode?Jp:Qp)};
  margin: 0;
  white-space: nowrap;
`,ev=wr.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: 32px;
  height: 24px;
  border: 1px solid ${e=>nf("border.weak",e.isDarkMode?Jp:Qp)};
  border-radius: 4px;
  background-color: ${e=>nf("surface.card",e.isDarkMode?Jp:Qp)};
  cursor: pointer;
  padding: 6px 8px;
  overflow: visible;
  outline: none;
  transition: background-color 0.2s ease, color 0.2s ease;
  
  /* Focus ring - only visible on keyboard navigation (tab), not on mouse click */
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    box-sizing: border-box;
    border: 1.5px solid ${e=>nf("border.focus",e.isDarkMode?Jp:Qp)};
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }
  
  &:focus-visible::before {
    opacity: 1;
  }
  
  &:hover {
    background-color: ${e=>nf("surface.itemHover",e.isDarkMode?Jp:Qp)};
    
    svg {
      color: ${e=>nf("icon.primary",e.isDarkMode?Jp:Qp)};
    }
  }
  
  &:active {
    background-color: ${e=>nf("surface.itemSelected",e.isDarkMode?Jp:Qp)};
    
    svg {
      color: ${e=>nf("icon.primary",e.isDarkMode?Jp:Qp)};
    }
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${e=>nf("icon.primary",e.isDarkMode?Jp:Qp)};
    transition: color 0.2s ease;
  }
`,tv=e=>{let{text:n="",time:r,isDarkMode:o=!1,className:i,onFavorite:a,isFavorited:s,...l}=e;const[c,d]=(0,t.useState)(!1),[u,p]=(0,t.useState)(null),f=void 0!==s,h=f?s:c;(0,t.useEffect)(()=>{if(void 0===r){const e=()=>{const e=new Date;p((e=>{const t=new Date,n=new Date(t.getFullYear(),t.getMonth(),t.getDate()),r=new Date(n);r.setDate(r.getDate()-1);const o=new Date(e.getFullYear(),e.getMonth(),e.getDate());let i;return i=o.getTime()===n.getTime()?"Today":o.getTime()===r.getTime()?"Yesterday":e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:e.getFullYear()!==t.getFullYear()?"numeric":void 0}),`${i}, ${e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}`})(e))};e();const t=setInterval(e,6e4);return()=>clearInterval(t)}p(null)},[r]);return(0,Tr.jsx)(Xb,{className:i,...l,children:(0,Tr.jsx)(qb,{children:(0,Tr.jsxs)(Qb,{children:[(0,Tr.jsx)(Gb,{text:n,isDarkMode:o}),(0,Tr.jsxs)(Jb,{children:[(0,Tr.jsx)(Zb,{isDarkMode:o,children:void 0!==r?r:u||"Today, 12:00 PM"}),(0,Tr.jsx)(Vg,{content:h?"Remove favorite":"Add favorite",position:Hg.TOP,isDarkMode:o,children:(0,Tr.jsx)(ev,{isDarkMode:o,onClick:()=>{if(f||d(e=>!e),a){a(!h)}},"aria-label":h?"Remove favorite":"Add favorite","aria-pressed":h,children:h?(0,Tr.jsx)(Kb.A,{sx:{fontSize:"16px"}}):(0,Tr.jsx)(Yb.A,{sx:{fontSize:"16px"}})})})]})]})})})},nv="light.a",rv="dark.a",ov=["Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.","Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.","Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.","At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias."],iv=[{path:"/",component:us,title:"Home",description:"Welcome to Cake Design System",category:"guides"},{path:"/components/ai",title:"AI",description:"AI components for chat interfaces and AI-powered features",category:"components",hasChildren:!0},{path:"/components/ai/response",component:()=>{const[e,n]=(0,t.useState)(nv),r=e===rv,[o,i]=(0,t.useState)([ov[0]]),[a,s]=(0,t.useState)(1),[l,c]=(0,t.useState)(1),d=(0,t.useMemo)(()=>1===a?"rest":a>=5?"max":"regeneration",[a,5]),u=(0,t.useMemo)(()=>o[l-1]||o[0],[o,l]);return(0,Tr.jsxs)(Ih,{children:[(0,Tr.jsxs)(zh,{children:[(0,Tr.jsx)(Bh,{children:"AI Response"}),(0,Tr.jsx)(Lh,{children:"Component for displaying AI-generated chat responses with interactive controls for feedback, regeneration, pinning, and favoriting. This component provides a consistent interface for AI interactions across the Cake Design System."})]}),(0,Tr.jsxs)(Rh,{children:[(0,Tr.jsx)(Ph,{children:"Basic Response"}),(0,Tr.jsx)(Lh,{children:"The basic AI chat response component displays a message bubble with timestamp and action buttons. All buttons are interactive. Click regenerate to see the response text change, and use pagination controls to navigate between regenerations."}),(0,Tr.jsx)(Oh,{children:(0,Tr.jsxs)(Nh,{children:[(0,Tr.jsx)(_h,{children:"Theme"}),(0,Tr.jsxs)(Hh,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:nv,children:"Light"}),(0,Tr.jsx)("option",{value:rv,children:"Dark"})]})]})}),(0,Tr.jsx)(Uh,{theme:e,children:(0,Tr.jsx)(Wb,{text:u,isDarkMode:r,regenerateState:d,regenerateCurrentIndex:l,regenerateTotalCount:a,onRegenerate:()=>{if("max"===d)return;const e=o.map((e,t)=>ov.indexOf(o[t]));let t=0;for(let i=0;i<ov.length;i++){if(!e.includes(i)){t=i;break}t=o.length%ov.length}const n=ov[t],r=a+1;i([...o,n]),s(r),c(r)},onRegeneratePrevious:()=>{l>1&&c(l-1)},onRegenerateNext:()=>{l<a&&c(l+1)}})})]}),(0,Tr.jsxs)(Rh,{children:[(0,Tr.jsx)(Ph,{children:"User Response"}),(0,Tr.jsx)(Lh,{children:"The user response component displays a right-aligned message bubble with a timestamp and favorite button. The bubble uses a light blue background to distinguish user messages from AI responses. Click the star icon to favorite or unfavorite the message."}),(0,Tr.jsx)(Oh,{children:(0,Tr.jsxs)(Nh,{children:[(0,Tr.jsx)(_h,{children:"Theme"}),(0,Tr.jsxs)(Hh,{value:e,onChange:e=>n(e.target.value),children:[(0,Tr.jsx)("option",{value:nv,children:"Light"}),(0,Tr.jsx)("option",{value:rv,children:"Dark"})]})]})}),(0,Tr.jsx)(Uh,{theme:e,children:(0,Tr.jsx)(tv,{text:ov[0],isDarkMode:r})})]})]})},title:"AI Response",description:"Component for displaying AI-generated chat responses with interactive controls for feedback, regeneration, pinning, and favoriting",category:"components",parentPath:"/components/ai"},{path:"/components/ai/icon-identity",component:ic,title:"AI Icon & Identity",description:"AI icon and brand identity guidelines for Lenovo software applications",category:"components",parentPath:"/components/ai"},{path:"/components/alert",component:Am,title:"Alert",description:"Alert components provide feedback to users about important information, success states, warnings, or errors",category:"components"},{path:"/components/accordion",component:Il,title:"Accordion",description:"Expandable and collapsible content sections for organizing information",category:"components"},{path:"/components/avatar",component:jc,title:"Avatar",description:"Component for displaying user profile images, initials, or icons",category:"components"},{path:"/components/badge",component:Uc,title:"Badge",description:"Compact UI element for displaying notification counts, status indicators, or numerical labels",category:"components"},{path:"/components/breadcrumb",component:vd,title:"Breadcrumb",description:"Hierarchical navigation component for displaying page location and navigation context",category:"components"},{path:"/components/button",component:el,title:"Button",description:"Interactive button component with various styles and states",category:"components"},{path:"/components/canvas",component:Yr,title:"Canvas",description:"Drawing and illustration component",category:"components"},{path:"/components/checkbox",component:ko,title:"Checkbox",description:"Interactive checkbox component for form inputs, selections, and toggles with support for checked, unchecked, indeterminate, and disabled states",category:"components"},{path:"/components/chip",component:Ds,title:"Chip",description:"Compact and versatile UI element for displaying discrete information",category:"components"},{path:"/components/menu",component:Bm,title:"Menu",description:"Menu component for displaying selectable options with search and scroll support",category:"components"},{path:"/components/dropdown",component:rg,title:"Dropdown",description:"Dropdown component for selecting options from a list with optional search functionality and scrolling support",category:"components"},{path:"/components/modal",component:_g,title:"Modal",description:"Modal components for displaying content, gathering user input, or confirming actions with Basic and Confirmation variants",category:"components"},{path:"/components/radio",component:Kd,title:"Radio",description:"Interactive radio component for single-choice selections from multiple options with support for various states and themes",category:"components"},{path:"/components/segmented-control",component:gu,title:"Segmented Control",description:"A segmented control component that displays Radio or Checkbox components in a segmented layout with support for single and multiple selection modes",category:"components"},{path:"/components/text-inputs",component:gp,title:"Text Inputs",description:"Text field and text area components for form inputs with support for labels, helper text, error states, and validation",category:"components"},{path:"/components/toggle",component:Sf,title:"Toggle",description:"Interactive toggle switch component for binary choices and settings with support for all interaction states and themes",category:"components"},{path:"/components/slider",component:Th,title:"Slider",description:"Interactive slider component for selecting values within a range with support for all interaction states and themes",category:"components"},{path:"/components/spinner",component:Kh,title:"Loading",description:"Loading indicator component for displaying progress and loading states",category:"components"},{path:"/components/link",component:cm,title:"Link",description:"Interactive link component for navigation with optional icon support",category:"components"},{path:"/components/tab",component:Jf,title:"Tab",description:"Tab component for organizing content into multiple panels",category:"components"},{path:"/components/tooltip",component:lx,title:"Tooltip",description:"Tooltip component for displaying contextual information when hovering over or focusing on elements",category:"components"},{path:"/version-control",component:Yo,title:"Version Control",description:"Version history and changelog",category:"guides"},{path:"/foundations/colors",component:Xi,title:"Colors",description:"Color system and design tokens",category:"foundations"},{path:"/whats-new",component:pa,title:"What's New",description:"Latest updates and changes",category:"guides"},{path:"/resources",component:Ga,title:"Resources",description:"Figma libraries and design resources",category:"guides"},{path:"/get-started/figma-libraries",component:va,title:"Figma Libraries",description:"Design resources and Figma components",category:"guides"},{path:"/get-started/about-cake",component:Ma,title:"About Cake",description:"Introduction to Cake Design System",category:"guides"},{path:"/foundations/iconography",component:$x,title:"Iconography",description:"Material Design icon library usage, guidelines, and implementation patterns",category:"foundations"},{path:"/foundations/language-grammar",component:tb,title:"Language & Grammar",description:"Guidelines for creating clear, accessible, and purposeful content that aligns with Lenovo's tone of voice",category:"foundations"}],av=wr.div`
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
`,sv=wr.div`
  width: 600px;
  max-width: 90vw;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  font-family: ${Dr};
`,lv=wr.div`
  padding: 16px;
  border-bottom: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  gap: 12px;
`,cv=wr.input`
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
`,dv=wr.button`
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
`,uv=wr.div`
  max-height: 400px;
  overflow-y: auto;
`,pv=wr.div`
  padding: 8px 0;
`,fv=wr.div`
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,hv=wr.button`
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
`,mv=wr.span`
  font-size: 14px;
  color: #171717;
  font-weight: 500;
`,gv=wr.span`
  font-size: 12px;
  color: #64748B;
`,xv=wr.div`
  padding: 32px 16px;
  text-align: center;
  color: #64748B;
  font-size: 14px;
`,bv=e=>{let{isOpen:n,onClose:r,initialQuery:o=""}=e;const[i,a]=(0,t.useState)(o),[s,l]=(0,t.useState)({components:[],foundations:[],guides:[]}),c=J(),d=(0,t.useCallback)(e=>{const t=setTimeout(()=>{l((e=>{if(!e.trim())return{components:[],foundations:[],guides:[],subsystems:[]};const t=e.toLowerCase(),n={components:[],foundations:[],guides:[],subsystems:[]};return iv.forEach(e=>{const r=e.title.toLowerCase().includes(t),o=e.description.toLowerCase().includes(t),i=e.path.toLowerCase().includes(t);(r||o||i)&&n[e.category].push({title:e.title,path:e.path,description:e.description})}),n})(e))},300);return()=>clearTimeout(t)},[]);(0,t.useEffect)(()=>{const e=d(i);return()=>e()},[i,d]),(0,t.useEffect)(()=>{const e=e=>{"Escape"===e.key&&r()};return n&&(document.addEventListener("keydown",e),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",e),document.body.style.overflow=""}},[n,r]);return n?(0,Tr.jsx)(av,{onClick:r,role:"dialog","aria-modal":"true","aria-labelledby":"search-modal-title",children:(0,Tr.jsxs)(sv,{onClick:e=>e.stopPropagation(),children:[(0,Tr.jsxs)(lv,{children:[(0,Tr.jsx)(Cr.A,{style:{color:"#64748B"},"aria-hidden":"true"}),(0,Tr.jsx)(cv,{id:"search-input",role:"searchbox","aria-label":"Search design system",autoFocus:!0,placeholder:"Search...",value:i,onChange:e=>a(e.target.value)}),(0,Tr.jsx)(dv,{onClick:r,"aria-label":"Close search",children:(0,Tr.jsx)(Er.A,{"aria-hidden":"true"})})]}),(0,Tr.jsx)(uv,{role:"region","aria-label":"Search results",children:i.trim()?Object.entries(s).map(e=>{let[t,n]=e;return n.length>0&&(0,Tr.jsxs)(pv,{children:[(0,Tr.jsx)(fv,{children:t}),n.map((e,t)=>(0,Tr.jsxs)(hv,{onClick:()=>{return t=e.path,c(t),void r();var t},role:"button","aria-label":`Go to ${e.title}`,children:[(0,Tr.jsx)(mv,{children:e.title}),(0,Tr.jsx)(gv,{children:e.description})]},t))]},t)}):(0,Tr.jsx)(xv,{children:"Start typing to search..."})})]})}):null},vv=wr.div`
  position: relative;
  width: 100%;
  padding: 0 24px 24px 24px;
  box-sizing: border-box;
  font-family: ${Dr};
`,yv=wr.div`
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
`,kv=wr.div`
  position: absolute;
  left: 8px;
  color: #64748B;
  display: flex;
  align-items: center;

  & > svg {
    font-size: 18px;
  }
`,wv=wr.div`
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
`,Av=wr.div`
  position: absolute;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  
  @media (max-width: 768px) {
    display: none;
  }
`,jv=wr.kbd`
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
`,Fv=()=>{const[e,n]=(0,t.useState)(!1),r=e=>{"k"===e.key&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),n(!0))};t.useEffect(()=>(document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)),[]);return(0,Tr.jsxs)(Tr.Fragment,{children:[(0,Tr.jsx)(vv,{children:(0,Tr.jsxs)(yv,{onClick:()=>{n(!0)},children:[(0,Tr.jsx)(kv,{children:(0,Tr.jsx)(Cr.A,{})}),(0,Tr.jsx)(wv,{children:"Search..."}),(0,Tr.jsxs)(Av,{children:[(0,Tr.jsx)(jv,{children:navigator.platform.includes("Mac")?"\u2318":"Ctrl"}),(0,Tr.jsx)(jv,{children:"K"})]})]})}),(0,Tr.jsx)(bv,{isOpen:e,onClose:()=>{n(!1)}})]})},Sv=jr`
  .iQvbDV {
    padding-right: 24px !important;
  }
`,Cv=wr.nav`
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
`,Ev=wr.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 24px;
  background: #fff;
`,Dv=wr(De)`
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
`,$v=wr.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
`,Mv=wr.div`
  display: flex;
  flex-direction: column;
`,Tv=wr.span`
  font-size: 16px;
  font-weight: 700;
  color: #171717;
  line-height: 1.2;
`,Iv=wr.span`
  font-size: 10px;
  color: #64748B;
  margin-top: 2px;
`,zv=wr.div`
  width: 100%;
  margin: 0;
  padding: 0;
`,Bv=wr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Lv=wr.li`
  width: 100%;
`,Rv=wr(De)`
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
`,Pv=wr.button`
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
`,Ov=wr.span`
  transition: transform 0.3s ease;
  margin-right: 0;
  color: ${Xr.slate[900]};
  transform-origin: center;
  transform: rotate(0deg);
  
  ${e=>e.expanded&&"\n    transform: rotate(180deg);\n  "}
`,Nv=wr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: ${e=>e.expanded?"1000px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  padding-left: ${e=>e.$indent?"12px":"0"};
`,_v=wr.li`
  width: 100%;
`,Hv=wr(De)`
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
`,Uv=(wr.button`
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
`,wr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: ${e=>e.expanded?"1000px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`,wr.li`
  width: 100%;
`,wr(De)`
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
`,wr.button`
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
`),Wv=wr.div`
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
`,Vv=()=>{var e,n;const r=q(),o=function(e){X()||s(!1);let{pathname:n}=q();return t.useMemo(()=>E(e,D(n)),[n,e])}("/"),[i,a]=(0,t.useState)(!1),[l,c]=(0,t.useState)({getStarted:r.pathname.startsWith("/get-started"),foundations:r.pathname.startsWith("/foundations"),components:r.pathname.startsWith("/components"),"components-ai":r.pathname.startsWith("/components/ai")}),d=()=>{a(!1)},u=e=>{c(t=>({...t,[e]:!t[e]}))},p=(0,t.useMemo)(()=>{const e=iv.map(e=>({...e,children:[]}));e.forEach(t=>{if(t.parentPath){const n=e.find(e=>e.path===t.parentPath);n&&n.children.push(t)}}),e.forEach(e=>{e.children.length>0&&e.children.sort((e,t)=>e.title.localeCompare(t.title,void 0,{sensitivity:"base"}))});const t=e.reduce((e,t)=>(e[t.category]||(e[t.category]=[]),t.parentPath||e[t.category].push(t),e),{});return Object.keys(t).forEach(e=>{if("components"===e){const n=t[e].find(e=>"/components/ai"===e.path),r=t[e].filter(e=>"/components/ai"!==e.path);r.sort((e,t)=>e.title.localeCompare(t.title,void 0,{sensitivity:"base"})),t[e]=n?[n,...r]:r}else t[e].sort((e,t)=>e.title.localeCompare(t.title,void 0,{sensitivity:"base"}))}),t},[]);return(0,Tr.jsxs)(Tr.Fragment,{children:[(0,Tr.jsx)(Sv,{}),(0,Tr.jsx)(Uv,{onClick:()=>{a(!i)},children:(0,Tr.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:(0,Tr.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,Tr.jsx)(Wv,{isOpen:i,onClick:d}),(0,Tr.jsxs)(Cv,{isOpen:i,children:[(0,Tr.jsx)(Ev,{children:(0,Tr.jsxs)(Dv,{to:"/",onClick:d,children:[(0,Tr.jsx)($v,{src:Sr,alt:"Cake Logo"}),(0,Tr.jsxs)(Mv,{children:[(0,Tr.jsx)(Tv,{children:"Cake"}),(0,Tr.jsx)(Iv,{children:"Version 1.4.0"})]})]})}),(0,Tr.jsx)(Fv,{}),(0,Tr.jsx)(zv,{children:(0,Tr.jsxs)(Bv,{children:[(0,Tr.jsx)(Lv,{children:(0,Tr.jsx)(Rv,{to:"/",end:!0,onClick:d,className:o?"active":"",children:"Home"})}),(0,Tr.jsx)(Lv,{children:(0,Tr.jsx)(Rv,{to:"/resources",onClick:d,children:"Resources"})}),(0,Tr.jsx)(Lv,{children:(0,Tr.jsx)(Rv,{to:"/whats-new",onClick:d,children:"What's New"})}),(0,Tr.jsxs)(Lv,{children:[(0,Tr.jsxs)(Pv,{onClick:()=>u("foundations"),children:["Foundations",(0,Tr.jsx)(Ov,{expanded:l.foundations,children:(0,Tr.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Tr.jsx)("path",{d:"M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z"})})})]}),(0,Tr.jsx)(Nv,{expanded:l.foundations,children:null===(e=p.foundations)||void 0===e?void 0:e.map(e=>(0,Tr.jsx)(_v,{children:(0,Tr.jsx)(Hv,{to:e.path,onClick:d,children:e.title})},e.path))})]}),(0,Tr.jsxs)(Lv,{children:[(0,Tr.jsxs)(Pv,{onClick:()=>u("components"),children:["Components",(0,Tr.jsx)(Ov,{expanded:l.components,children:(0,Tr.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Tr.jsx)("path",{d:"M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z"})})})]}),(0,Tr.jsx)(Nv,{expanded:l.components,children:null===(n=p.components)||void 0===n?void 0:n.map(e=>{var t;return(0,Tr.jsx)(_v,{children:e.hasChildren?(0,Tr.jsxs)(Tr.Fragment,{children:[(0,Tr.jsxs)(Pv,{onClick:()=>u("components-ai"),children:[e.title,(0,Tr.jsx)(Ov,{expanded:l["components-ai"],children:(0,Tr.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:(0,Tr.jsx)("path",{d:"M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z"})})})]}),(0,Tr.jsx)(Nv,{expanded:l["components-ai"],$indent:!0,children:null===(t=e.children)||void 0===t?void 0:t.map(e=>(0,Tr.jsx)(_v,{children:(0,Tr.jsx)(Hv,{to:e.path,onClick:d,children:e.title})},e.path))})]}):(0,Tr.jsx)(Hv,{to:e.path,onClick:d,children:e.title})},e.path)})})]})]})})]})]})};const Gv=n.p+"static/media/logo_vert.2144fac276ecca3cfa03aa23d92a3571.svg",Kv=wr.div`
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
`,Yv=wr.img`
  width: 100%;
  height: auto;
  display: block;
`,Xv=()=>(0,Tr.jsx)(Kv,{onClick:()=>{window.open("https://lenovo.com","_blank","noopener,noreferrer")},role:"button",tabIndex:"0","aria-label":"Visit Lenovo.com",children:(0,Tr.jsx)(Yv,{src:Gv,alt:"Lenovo"})}),qv=()=>{const{pathname:e}=q();return(0,t.useEffect)(()=>{window.scrollTo(0,0)},[e]),null},Qv=wr.div`
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
`,Jv=wr.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  padding: 15px;
  box-sizing: border-box;
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    padding: 20px;
  }
`,Zv=wr.footer`
  text-align: center;
  font-size: 10px;
  color: #999;
  padding: 40px 0px;
`;const ey=function(){return(0,Tr.jsxs)(Fe,{basename:"",children:[(0,Tr.jsx)($r,{}),(0,Tr.jsx)(Vv,{}),(0,Tr.jsx)(Xv,{}),(0,Tr.jsx)(qv,{}),(0,Tr.jsx)(Qv,{children:(0,Tr.jsxs)(Jv,{"data-content-container":!0,children:[(0,Tr.jsx)(me,{children:iv.map(e=>(0,Tr.jsx)(fe,{path:e.path,element:(0,Tr.jsx)(e.component,{})},e.path))}),(0,Tr.jsxs)(Zv,{children:["\xa9 ",(new Date).getFullYear()," Cake Design System. All rights reserved."]})]})})]})};o.createRoot(document.getElementById("root")).render((0,Tr.jsx)(t.StrictMode,{children:(0,Tr.jsx)(ey,{})}))})()})();
//# sourceMappingURL=main.cfb1addb.js.map
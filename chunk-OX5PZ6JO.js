import{$ as M,Ab as m,Ca as G,S as Me,T as Le,V as _,Va as Pe,X as Be,Xa as E,Z as N,Za as se,aa as P,ab as H,bc as ke,cc as Ne,ea as Re,eb as oe,ga as Oe,ha as x,ia as U,ic as ue,jc as ae,kc as $e,lc as xe,pc as ce,xa as V,ya as Te,zb as A}from"./chunk-CEJEKODL.js";var Ke=null;function de(){return Ke}function In(e){Ke??=e}var Ue=class{};var Ae=new N(""),Se=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=_({token:t,factory:()=>P(nt),providedIn:"platform"});let e=t;return e})(),Mn=new N(""),nt=(()=>{let t=class t extends Se{constructor(){super(),this._doc=P(Ae),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return de().getBaseHref(this._doc)}onPopState(n){let i=de().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=de().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,r){this._history.pushState(n,i,r)}replaceState(n,i,r){this._history.replaceState(n,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=_({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function be(e,t){if(e.length==0)return t;if(t.length==0)return e;let s=0;return e.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?e+t.substring(1):s==1?e+t:e+"/"+t}function ze(e){let t=e.match(/#|\?|$/),s=t&&t.index||e.length,n=s-(e[s-1]==="/"?1:0);return e.slice(0,n)+e.slice(s)}function B(e){return e&&e[0]!=="?"?"?"+e:e}var ne=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=_({token:t,factory:()=>P(it),providedIn:"root"});let e=t;return e})(),qe=new N(""),it=(()=>{let t=class t extends ne{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??P(Ae).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return be(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+B(this._platformLocation.search),r=this._platformLocation.hash;return r&&n?`${i}${r}`:i}pushState(n,i,r,o){let u=this.prepareExternalUrl(r+B(o));this._platformLocation.pushState(n,i,u)}replaceState(n,i,r,o){let u=this.prepareExternalUrl(r+B(o));this._platformLocation.replaceState(n,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(i){return new(i||t)(M(Se),M(qe,8))},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Ln=(()=>{let t=class t extends ne{constructor(n,i){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(n){let i=be(this._baseHref,n);return i.length>0?"#"+i:i}pushState(n,i,r,o){let u=this.prepareExternalUrl(r+B(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.pushState(n,i,u)}replaceState(n,i,r,o){let u=this.prepareExternalUrl(r+B(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.replaceState(n,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(i){return new(i||t)(M(Se),M(qe,8))},t.\u0275prov=_({token:t,factory:t.\u0275fac});let e=t;return e})(),rt=(()=>{let t=class t{constructor(n){this._subject=new Te,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=ut(ze(je(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+B(i))}normalize(n){return t.stripTrailingSlash(ot(this._basePath,je(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",r=null){this._locationStrategy.pushState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+B(i)),r)}replaceState(n,i="",r=null){this._locationStrategy.replaceState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+B(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(r=>r(n,i))}subscribe(n,i,r){return this._subject.subscribe({next:n,error:i,complete:r})}};t.normalizeQueryParams=B,t.joinWithSlash=be,t.stripTrailingSlash=ze,t.\u0275fac=function(i){return new(i||t)(M(ne))},t.\u0275prov=_({token:t,factory:()=>st(),providedIn:"root"});let e=t;return e})();function st(){return new rt(M(ne))}function ot(e,t){if(!e||!t.startsWith(e))return t;let s=t.substring(e.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function je(e){return e.replace(/\/index.html$/,"")}function ut(e){if(new RegExp("^(https?:)?//").test(e)){let[,s]=e.split(/\/\/[^\/]+/);return s}return e}var Xe=function(e){return e[e.Decimal=0]="Decimal",e[e.Percent=1]="Percent",e[e.Currency=2]="Currency",e[e.Scientific=3]="Scientific",e}(Xe||{});var w=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(w||{}),h=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(h||{}),S=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(S||{}),b={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function at(e){return A(e)[m.LocaleId]}function ct(e,t,s){let n=A(e),i=[n[m.DayPeriodsFormat],n[m.DayPeriodsStandalone]],r=v(i,t);return v(r,s)}function dt(e,t,s){let n=A(e),i=[n[m.DaysFormat],n[m.DaysStandalone]],r=v(i,t);return v(r,s)}function lt(e,t,s){let n=A(e),i=[n[m.MonthsFormat],n[m.MonthsStandalone]],r=v(i,t);return v(r,s)}function ht(e,t){let n=A(e)[m.Eras];return v(n,t)}function Y(e,t){let s=A(e);return v(s[m.DateFormat],t)}function W(e,t){let s=A(e);return v(s[m.TimeFormat],t)}function Z(e,t){let n=A(e)[m.DateTimeFormat];return v(n,t)}function R(e,t){let s=A(e),n=s[m.NumberSymbols][t];if(typeof n>"u"){if(t===b.CurrencyDecimal)return s[m.NumberSymbols][b.Decimal];if(t===b.CurrencyGroup)return s[m.NumberSymbols][b.Group]}return n}function ft(e,t){return A(e)[m.NumberFormats][t]}function Qe(e){if(!e[m.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[m.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Dt(e){let t=A(e);return Qe(t),(t[m.ExtraData][2]||[]).map(n=>typeof n=="string"?le(n):[le(n[0]),le(n[1])])}function gt(e,t,s){let n=A(e);Qe(n);let i=[n[m.ExtraData][0],n[m.ExtraData][1]],r=v(i,t)||[];return v(r,s)||[]}function v(e,t){for(let s=t;s>-1;s--)if(typeof e[s]<"u")return e[s];throw new Error("Locale data API: locale data undefined")}function le(e){let[t,s]=e.split(":");return{hours:+t,minutes:+s}}var pt=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,K={},mt=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,O=function(e){return e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended",e}(O||{}),d=function(e){return e[e.FullYear=0]="FullYear",e[e.Month=1]="Month",e[e.Date=2]="Date",e[e.Hours=3]="Hours",e[e.Minutes=4]="Minutes",e[e.Seconds=5]="Seconds",e[e.FractionalSeconds=6]="FractionalSeconds",e[e.Day=7]="Day",e}(d||{}),c=function(e){return e[e.DayPeriods=0]="DayPeriods",e[e.Days=1]="Days",e[e.Months=2]="Months",e[e.Eras=3]="Eras",e}(c||{});function Ft(e,t,s,n){let i=_t(e);t=L(s,t)||t;let o=[],u;for(;t;)if(u=mt.exec(t),u){o=o.concat(u.slice(1));let g=o.pop();if(!g)break;t=g}else{o.push(t);break}let l=i.getTimezoneOffset();n&&(l=et(n,l),i=vt(i,n,!0));let D="";return o.forEach(g=>{let a=St(g);D+=a?a(i,s,l):g==="''"?"'":g.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),D}function ee(e,t,s){let n=new Date(0);return n.setFullYear(e,t,s),n.setHours(0,0,0),n}function L(e,t){let s=at(e);if(K[s]??={},K[s][t])return K[s][t];let n="";switch(t){case"shortDate":n=Y(e,S.Short);break;case"mediumDate":n=Y(e,S.Medium);break;case"longDate":n=Y(e,S.Long);break;case"fullDate":n=Y(e,S.Full);break;case"shortTime":n=W(e,S.Short);break;case"mediumTime":n=W(e,S.Medium);break;case"longTime":n=W(e,S.Long);break;case"fullTime":n=W(e,S.Full);break;case"short":let i=L(e,"shortTime"),r=L(e,"shortDate");n=q(Z(e,S.Short),[i,r]);break;case"medium":let o=L(e,"mediumTime"),u=L(e,"mediumDate");n=q(Z(e,S.Medium),[o,u]);break;case"long":let l=L(e,"longTime"),D=L(e,"longDate");n=q(Z(e,S.Long),[l,D]);break;case"full":let g=L(e,"fullTime"),a=L(e,"fullDate");n=q(Z(e,S.Full),[g,a]);break}return n&&(K[s][t]=n),n}function q(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,function(s,n){return t!=null&&n in t?t[n]:s})),e}function I(e,t,s="-",n,i){let r="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,r=s));let o=String(e);for(;o.length<t;)o="0"+o;return n&&(o=o.slice(o.length-t)),r+o}function Ct(e,t){return I(e,3).substring(0,t)}function F(e,t,s=0,n=!1,i=!1){return function(r,o){let u=Et(e,r);if((s>0||u>-s)&&(u+=s),e===d.Hours)u===0&&s===-12&&(u=12);else if(e===d.FractionalSeconds)return Ct(u,t);let l=R(o,b.MinusSign);return I(u,t,l,n,i)}}function Et(e,t){switch(e){case d.FullYear:return t.getFullYear();case d.Month:return t.getMonth();case d.Date:return t.getDate();case d.Hours:return t.getHours();case d.Minutes:return t.getMinutes();case d.Seconds:return t.getSeconds();case d.FractionalSeconds:return t.getMilliseconds();case d.Day:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function f(e,t,s=w.Format,n=!1){return function(i,r){return yt(i,r,e,t,s,n)}}function yt(e,t,s,n,i,r){switch(s){case c.Months:return lt(t,i,n)[e.getMonth()];case c.Days:return dt(t,i,n)[e.getDay()];case c.DayPeriods:let o=e.getHours(),u=e.getMinutes();if(r){let D=Dt(t),g=gt(t,i,n),a=D.findIndex(C=>{if(Array.isArray(C)){let[p,y]=C,$=o>=p.hours&&u>=p.minutes,T=o<y.hours||o===y.hours&&u<y.minutes;if(p.hours<y.hours){if($&&T)return!0}else if($||T)return!0}else if(C.hours===o&&C.minutes===u)return!0;return!1});if(a!==-1)return g[a]}return ct(t,i,n)[o<12?0:1];case c.Eras:return ht(t,n)[e.getFullYear()<=0?0:1];default:let l=s;throw new Error(`unexpected translation type ${l}`)}}function X(e){return function(t,s,n){let i=-1*n,r=R(s,b.MinusSign),o=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case O.Short:return(i>=0?"+":"")+I(o,2,r)+I(Math.abs(i%60),2,r);case O.ShortGMT:return"GMT"+(i>=0?"+":"")+I(o,1,r);case O.Long:return"GMT"+(i>=0?"+":"")+I(o,2,r)+":"+I(Math.abs(i%60),2,r);case O.Extended:return n===0?"Z":(i>=0?"+":"")+I(o,2,r)+":"+I(Math.abs(i%60),2,r);default:throw new Error(`Unknown zone width "${e}"`)}}}var wt=0,J=4;function At(e){let t=ee(e,wt,1).getDay();return ee(e,0,1+(t<=J?J:J+7)-t)}function Je(e){let t=e.getDay(),s=t===0?-3:J-t;return ee(e.getFullYear(),e.getMonth(),e.getDate()+s)}function he(e,t=!1){return function(s,n){let i;if(t){let r=new Date(s.getFullYear(),s.getMonth(),1).getDay()-1,o=s.getDate();i=1+Math.floor((o+r)/7)}else{let r=Je(s),o=At(r.getFullYear()),u=r.getTime()-o.getTime();i=1+Math.round(u/6048e5)}return I(i,e,R(n,b.MinusSign))}}function Q(e,t=!1){return function(s,n){let r=Je(s).getFullYear();return I(r,e,R(n,b.MinusSign),t)}}var fe={};function St(e){if(fe[e])return fe[e];let t;switch(e){case"G":case"GG":case"GGG":t=f(c.Eras,h.Abbreviated);break;case"GGGG":t=f(c.Eras,h.Wide);break;case"GGGGG":t=f(c.Eras,h.Narrow);break;case"y":t=F(d.FullYear,1,0,!1,!0);break;case"yy":t=F(d.FullYear,2,0,!0,!0);break;case"yyy":t=F(d.FullYear,3,0,!1,!0);break;case"yyyy":t=F(d.FullYear,4,0,!1,!0);break;case"Y":t=Q(1);break;case"YY":t=Q(2,!0);break;case"YYY":t=Q(3);break;case"YYYY":t=Q(4);break;case"M":case"L":t=F(d.Month,1,1);break;case"MM":case"LL":t=F(d.Month,2,1);break;case"MMM":t=f(c.Months,h.Abbreviated);break;case"MMMM":t=f(c.Months,h.Wide);break;case"MMMMM":t=f(c.Months,h.Narrow);break;case"LLL":t=f(c.Months,h.Abbreviated,w.Standalone);break;case"LLLL":t=f(c.Months,h.Wide,w.Standalone);break;case"LLLLL":t=f(c.Months,h.Narrow,w.Standalone);break;case"w":t=he(1);break;case"ww":t=he(2);break;case"W":t=he(1,!0);break;case"d":t=F(d.Date,1);break;case"dd":t=F(d.Date,2);break;case"c":case"cc":t=F(d.Day,1);break;case"ccc":t=f(c.Days,h.Abbreviated,w.Standalone);break;case"cccc":t=f(c.Days,h.Wide,w.Standalone);break;case"ccccc":t=f(c.Days,h.Narrow,w.Standalone);break;case"cccccc":t=f(c.Days,h.Short,w.Standalone);break;case"E":case"EE":case"EEE":t=f(c.Days,h.Abbreviated);break;case"EEEE":t=f(c.Days,h.Wide);break;case"EEEEE":t=f(c.Days,h.Narrow);break;case"EEEEEE":t=f(c.Days,h.Short);break;case"a":case"aa":case"aaa":t=f(c.DayPeriods,h.Abbreviated);break;case"aaaa":t=f(c.DayPeriods,h.Wide);break;case"aaaaa":t=f(c.DayPeriods,h.Narrow);break;case"b":case"bb":case"bbb":t=f(c.DayPeriods,h.Abbreviated,w.Standalone,!0);break;case"bbbb":t=f(c.DayPeriods,h.Wide,w.Standalone,!0);break;case"bbbbb":t=f(c.DayPeriods,h.Narrow,w.Standalone,!0);break;case"B":case"BB":case"BBB":t=f(c.DayPeriods,h.Abbreviated,w.Format,!0);break;case"BBBB":t=f(c.DayPeriods,h.Wide,w.Format,!0);break;case"BBBBB":t=f(c.DayPeriods,h.Narrow,w.Format,!0);break;case"h":t=F(d.Hours,1,-12);break;case"hh":t=F(d.Hours,2,-12);break;case"H":t=F(d.Hours,1);break;case"HH":t=F(d.Hours,2);break;case"m":t=F(d.Minutes,1);break;case"mm":t=F(d.Minutes,2);break;case"s":t=F(d.Seconds,1);break;case"ss":t=F(d.Seconds,2);break;case"S":t=F(d.FractionalSeconds,1);break;case"SS":t=F(d.FractionalSeconds,2);break;case"SSS":t=F(d.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":t=X(O.Short);break;case"ZZZZZ":t=X(O.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=X(O.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=X(O.Long);break;default:return null}return fe[e]=t,t}function et(e,t){e=e.replace(/:/g,"");let s=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(s)?t:s}function bt(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function vt(e,t,s){let n=s?-1:1,i=e.getTimezoneOffset(),r=et(t,i);return bt(e,n*(r-i))}function _t(e){if(Ve(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,r=1,o=1]=e.split("-").map(u=>+u);return ee(i,r-1,o)}let s=parseFloat(e);if(!isNaN(e-s))return new Date(s);let n;if(n=e.match(pt))return It(n)}let t=new Date(e);if(!Ve(t))throw new Error(`Unable to convert "${e}" into a date`);return t}function It(e){let t=new Date(0),s=0,n=0,i=e[8]?t.setUTCFullYear:t.setFullYear,r=e[8]?t.setUTCHours:t.setHours;e[9]&&(s=Number(e[9]+e[10]),n=Number(e[9]+e[11])),i.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));let o=Number(e[4]||0)-s,u=Number(e[5]||0)-n,l=Number(e[6]||0),D=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return r.call(t,o,u,l,D),t}function Ve(e){return e instanceof Date&&!isNaN(e.valueOf())}var Mt=/^(\d+)?\.((\d+)(-(\d+))?)?$/,Ge=22,te=".",z="0",Lt=";",Bt=",",De="#";function Rt(e,t,s,n,i,r,o=!1){let u="",l=!1;if(!isFinite(e))u=R(s,b.Infinity);else{let D=kt(e);o&&(D=Pt(D));let g=t.minInt,a=t.minFrac,C=t.maxFrac;if(r){let k=r.match(Mt);if(k===null)throw new Error(`${r} is not a valid digit info`);let _e=k[1],re=k[3],Ie=k[5];_e!=null&&(g=ge(_e)),re!=null&&(a=ge(re)),Ie!=null?C=ge(Ie):re!=null&&a>C&&(C=a)}Nt(D,a,C);let p=D.digits,y=D.integerLen,$=D.exponent,T=[];for(l=p.every(k=>!k);y<g;y++)p.unshift(0);for(;y<0;y++)p.unshift(0);y>0?T=p.splice(y,p.length):(T=p,p=[0]);let j=[];for(p.length>=t.lgSize&&j.unshift(p.splice(-t.lgSize,p.length).join(""));p.length>t.gSize;)j.unshift(p.splice(-t.gSize,p.length).join(""));p.length&&j.unshift(p.join("")),u=j.join(R(s,n)),T.length&&(u+=R(s,i)+T.join("")),$&&(u+=R(s,b.Exponential)+"+"+$)}return e<0&&!l?u=t.negPre+u+t.negSuf:u=t.posPre+u+t.posSuf,u}function Ot(e,t,s){let n=ft(t,Xe.Decimal),i=Tt(n,R(t,b.MinusSign));return Rt(e,i,t,b.Group,b.Decimal,s)}function Tt(e,t="-"){let s={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=e.split(Lt),i=n[0],r=n[1],o=i.indexOf(te)!==-1?i.split(te):[i.substring(0,i.lastIndexOf(z)+1),i.substring(i.lastIndexOf(z)+1)],u=o[0],l=o[1]||"";s.posPre=u.substring(0,u.indexOf(De));for(let g=0;g<l.length;g++){let a=l.charAt(g);a===z?s.minFrac=s.maxFrac=g+1:a===De?s.maxFrac=g+1:s.posSuf+=a}let D=u.split(Bt);if(s.gSize=D[1]?D[1].length:0,s.lgSize=D[2]||D[1]?(D[2]||D[1]).length:0,r){let g=i.length-s.posPre.length-s.posSuf.length,a=r.indexOf(De);s.negPre=r.substring(0,a).replace(/'/g,""),s.negSuf=r.slice(a+g).replace(/'/g,"")}else s.negPre=t+s.posPre,s.negSuf=s.posSuf;return s}function Pt(e){if(e.digits[0]===0)return e;let t=e.digits.length-e.integerLen;return e.exponent?e.exponent+=2:(t===0?e.digits.push(0,0):t===1&&e.digits.push(0),e.integerLen+=2),e}function kt(e){let t=Math.abs(e)+"",s=0,n,i,r,o,u;for((i=t.indexOf(te))>-1&&(t=t.replace(te,"")),(r=t.search(/e/i))>0?(i<0&&(i=r),i+=+t.slice(r+1),t=t.substring(0,r)):i<0&&(i=t.length),r=0;t.charAt(r)===z;r++);if(r===(u=t.length))n=[0],i=1;else{for(u--;t.charAt(u)===z;)u--;for(i-=r,n=[],o=0;r<=u;r++,o++)n[o]=Number(t.charAt(r))}return i>Ge&&(n=n.splice(0,Ge-1),s=i-1,i=1),{digits:n,exponent:s,integerLen:i}}function Nt(e,t,s){if(t>s)throw new Error(`The minimum number of digits after fraction (${t}) is higher than the maximum (${s}).`);let n=e.digits,i=n.length-e.integerLen,r=Math.min(Math.max(t,i),s),o=r+e.integerLen,u=n[o];if(o>0){n.splice(Math.max(e.integerLen,o));for(let a=o;a<n.length;a++)n[a]=0}else{i=Math.max(0,i),e.integerLen=1,n.length=Math.max(1,o=r+1),n[0]=0;for(let a=1;a<o;a++)n[a]=0}if(u>=5)if(o-1<0){for(let a=0;a>o;a--)n.unshift(0),e.integerLen++;n.unshift(1),e.integerLen++}else n[o-1]++;for(;i<Math.max(0,r);i++)n.push(0);let l=r!==0,D=t+e.integerLen,g=n.reduceRight(function(a,C,p,y){return C=C+a,y[p]=C<10?C:C-10,l&&(y[p]===0&&p>=D?y.pop():l=!1),C>=10?1:0},0);g&&(n.unshift(g),e.integerLen++)}function ge(e){let t=parseInt(e);if(isNaN(t))throw new Error("Invalid integer literal when parsing "+e);return t}function Bn(e,t){t=encodeURIComponent(t);for(let s of e.split(";")){let n=s.indexOf("="),[i,r]=n==-1?[s,""]:[s.slice(0,n),s.slice(n+1)];if(i.trim()===t)return decodeURIComponent(r)}return null}var pe=/\s+/,He=[],Rn=(()=>{let t=class t{constructor(n,i){this._ngEl=n,this._renderer=i,this.initialClasses=He,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(pe):He}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(pe):n}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let i of n)this._updateState(i,!0);else if(n!=null)for(let i of Object.keys(n))this._updateState(i,!!n[i]);this._applyStateDiff()}_updateState(n,i){let r=this.stateMap.get(n);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(n,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let i=n[0],r=n[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(n,i){n=n.trim(),n.length>0&&n.split(pe).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};t.\u0275fac=function(i){return new(i||t)(E(V),E(H))},t.\u0275dir=x({type:t,selectors:[["","ngClass",""]],inputs:{klass:[Re.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let e=t;return e})();var me=class{constructor(t,s,n,i){this.$implicit=t,this.ngForOf=s,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},On=(()=>{let t=class t{set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}constructor(n,i,r){this._viewContainer=n,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let n=this._ngForOf;if(!this._differ&&n)if(0)try{}catch{}else this._differ=this._differs.find(n).create(this.ngForTrackBy)}if(this._differ){let n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){let i=this._viewContainer;n.forEachOperation((r,o,u)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new me(r.item,this._ngForOf,-1,-1),u===null?void 0:u);else if(u==null)i.remove(o===null?void 0:o);else if(o!==null){let l=i.get(o);i.move(l,u),Ye(l,r)}});for(let r=0,o=i.length;r<o;r++){let l=i.get(r).context;l.index=r,l.count=o,l.ngForOf=this._ngForOf}n.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);Ye(o,r)})}static ngTemplateContextGuard(n,i){return!0}};t.\u0275fac=function(i){return new(i||t)(E(oe),E(se),E($e))},t.\u0275dir=x({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let e=t;return e})();function Ye(e,t){e.context.$implicit=t.item}var Tn=(()=>{let t=class t{constructor(n,i){this._viewContainer=n,this._context=new Fe,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){We("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){We("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,i){return!0}};t.\u0275fac=function(i){return new(i||t)(E(oe),E(se))},t.\u0275dir=x({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let e=t;return e})(),Fe=class{constructor(){this.$implicit=null,this.ngIf=null}};function We(e,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${e} must be a TemplateRef, but received '${Le(t)}'.`)}var Pn=(()=>{let t=class t{constructor(n,i,r){this._ngEl=n,this._differs=i,this._renderer=r,this._ngStyle=null,this._differ=null}set ngStyle(n){this._ngStyle=n,!this._differ&&n&&(this._differ=this._differs.find(n).create())}ngDoCheck(){if(this._differ){let n=this._differ.diff(this._ngStyle);n&&this._applyChanges(n)}}_setStyle(n,i){let[r,o]=n.split("."),u=r.indexOf("-")===-1?void 0:Pe.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,u):this._renderer.removeStyle(this._ngEl.nativeElement,r,u)}_applyChanges(n){n.forEachRemovedItem(i=>this._setStyle(i.key,null)),n.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),n.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}};t.\u0275fac=function(i){return new(i||t)(E(V),E(xe),E(H))},t.\u0275dir=x({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0});let e=t;return e})();function ie(e,t){return new Me(2100,!1)}var Ce=class{createSubscription(t,s){return ce(()=>t.subscribe({next:s,error:n=>{throw n}}))}dispose(t){ce(()=>t.unsubscribe())}},Ee=class{createSubscription(t,s){return t.then(s,n=>{throw n})}dispose(t){}},$t=new Ee,xt=new Ce,kn=(()=>{let t=class t{constructor(n){this._latestValue=null,this.markForCheckOnValueUpdate=!0,this._subscription=null,this._obj=null,this._strategy=null,this._ref=n}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(n){if(!this._obj){if(n)try{this.markForCheckOnValueUpdate=!1,this._subscribe(n)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return n!==this._obj?(this._dispose(),this.transform(n)):this._latestValue}_subscribe(n){this._obj=n,this._strategy=this._selectStrategy(n),this._subscription=this._strategy.createSubscription(n,i=>this._updateLatestValue(n,i))}_selectStrategy(n){if(ke(n))return $t;if(Ne(n))return xt;throw ie(t,n)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(n,i){n===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}};t.\u0275fac=function(i){return new(i||t)(E(ae,16))},t.\u0275pipe=U({name:"async",type:t,pure:!1,standalone:!0});let e=t;return e})();var Ut=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g,Nn=(()=>{let t=class t{transform(n){if(n==null)return null;if(typeof n!="string")throw ie(t,n);return n.replace(Ut,i=>i[0].toUpperCase()+i.slice(1).toLowerCase())}};t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=U({name:"titlecase",type:t,pure:!0,standalone:!0});let e=t;return e})();var zt="mediumDate",jt=new N(""),Vt=new N(""),$n=(()=>{let t=class t{constructor(n,i,r){this.locale=n,this.defaultTimezone=i,this.defaultOptions=r}transform(n,i,r,o){if(n==null||n===""||n!==n)return null;try{let u=i??this.defaultOptions?.dateFormat??zt,l=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Ft(n,u,o||this.locale,l)}catch(u){throw ie(t,u.message)}}};t.\u0275fac=function(i){return new(i||t)(E(ue,16),E(jt,24),E(Vt,24))},t.\u0275pipe=U({name:"date",type:t,pure:!0,standalone:!0});let e=t;return e})();var xn=(()=>{let t=class t{constructor(n){this._locale=n}transform(n,i,r){if(!Gt(n))return null;r||=this._locale;try{let o=Ht(n);return Ot(o,r,i)}catch(o){throw ie(t,o.message)}}};t.\u0275fac=function(i){return new(i||t)(E(ue,16))},t.\u0275pipe=U({name:"number",type:t,pure:!0,standalone:!0});let e=t;return e})();function Gt(e){return!(e==null||e===""||e!==e)}function Ht(e){if(typeof e=="string"&&!isNaN(Number(e)-parseFloat(e)))return Number(e);if(typeof e!="number")throw new Error(`${e} is not a number`);return e}var Un=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=Oe({type:t}),t.\u0275inj=Be({});let e=t;return e})(),Yt="browser",Wt="server";function ve(e){return e===Yt}function zn(e){return e===Wt}var jn=(()=>{let t=class t{};t.\u0275prov=_({token:t,providedIn:"root",factory:()=>ve(P(G))?new ye(P(Ae),window):new we});let e=t;return e})(),ye=class{constructor(t,s){this.document=t,this.window=s,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t){this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){let s=Zt(this.document,t);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(t){this.window.history.scrollRestoration=t}scrollToElement(t){let s=t.getBoundingClientRect(),n=s.left+this.window.pageXOffset,i=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(n-r[0],i-r[1])}};function Zt(e,t){let s=e.getElementById(t)||e.getElementsByName(t)[0];if(s)return s;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let n=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let r=i.shadowRoot;if(r){let o=r.getElementById(t)||r.querySelector(`[name="${t}"]`);if(o)return o}i=n.nextNode()}}return null}var we=class{setOffset(t){}getScrollPosition(){return[0,0]}scrollToPosition(t){}scrollToAnchor(t){}setHistoryScrollRestoration(t){}},Ze=class{};var Kn=(()=>{let t=class t{constructor(n){this.platformId=n}isBrowser(){return!!ve(this.platformId)}};t.\u0275fac=function(i){return new(i||t)(M(G))},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{de as a,In as b,Ue as c,Ae as d,Mn as e,ne as f,it as g,Ln as h,rt as i,Bn as j,Rn as k,On as l,Tn as m,Pn as n,kn as o,Nn as p,$n as q,xn as r,Un as s,Yt as t,ve as u,zn as v,jn as w,Ze as x,Kn as y};

import{a as d}from"./chunk-MR6KYNWV.js";import{y as m}from"./chunk-ZHB5NX4Y.js";import{Hb as p,eb as a,g as c,gc as s,oa as n}from"./chunk-CM677TLH.js";var r=c(d());var h=(()=>{let e=class e{constructor(t){this.browserService=t}ngAfterViewInit(){if(this.browserService.isBrowser()){this.map=r.map("map").setView([35.3119,46.9964],12),r.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"\xA9 OpenStreetMap"}).addTo(this.map);let t=this.map;t.on("click",function(i){r.marker(i.latlng).addTo(t).bindPopup(`${i.latlng}`)})}}};e.\u0275fac=function(i){return new(i||e)(a(m))},e.\u0275cmp=n({type:e,selectors:[["app-profile-agencie-map"]],standalone:!0,features:[s],decls:1,vars:0,consts:[["id","map",1,"box-shadow-2","d-flex","flex-column","justify-content-center","align-items-center",2,"height","90vh","width","100%","border-radius","0 0 10px 10px","margin-top","-7px","z-index","2"]],template:function(i,l){i&1&&p(0,"div",0)}});let o=e;return o})();export{h as ProfileAgencieMapComponent};

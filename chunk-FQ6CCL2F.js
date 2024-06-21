import{a as q}from"./chunk-Q43UFRHZ.js";import{s as g,y as v}from"./chunk-GQM57KWZ.js";import{Eb as l,Fb as d,Gb as m,eb as n,fc as p,g as y,oa as o}from"./chunk-HBDLDI7D.js";var i=y(q());var T=(()=>{let a=class a{constructor(t){this.browserService=t,this.locations=[[35.3119,46.9964],[35.311152474759936,47.00108613188733],[35.31094235450366,46.986623662207144],[35.320467257721496,46.99349011669805],[35.32689851459618,47.01516109172433],[35.32273183881013,46.97370487083354],[35.338907142943945,46.985120352735905],[35.29982879685737,46.967782552906954],[35.29051163725103,47.021941714167056],[35.2826647761545,46.984777028807514],[35.264235675691154,47.007178837254536],[35.25470415406881,47.030524783101384],[35.31944277648517,47.01636090758903]],this.distanceOption=[],this.closestOptions=[],this.closestOptionsNoRepeat=[],this.closestMarker=[]}ngAfterViewInit(){if(this.browserService.isBrowser()){this.map=i.map("map").setView([35.3119,46.9964],12),i.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"\xA9 OpenStreetMap"}).addTo(this.map);for(let t=0;t<this.locations.length;t++)i.marker([this.locations[t][0],this.locations[t][1]],{icon:i.divIcon({html:`
            <div class="map-options position-relative">
              <div class="custom-marker h-c-2 bg-g d-flex align-items-center position-relative w-f-c" style="border: 0.2cqmax solid white;border-radius: 2cqmax;padding: 0.18cqmax 0 0.2cqmax 0.1cqmax;box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;">
                  <img src="https://sina0043.github.io/sawda_ssr/assets/img/advertisings-list/car-map.png" alt="" class="w-c-15 h-c-15 b-ra-50">
                  <span class="ma-x-025 d-flex" style="margin-top: 0.1cqmax;">
                      <span class="f-s-075 text-white">3200</span>
                      <span class="f-s-075 text-white">$</span>
                  </span>
              </div>
              <div class="mini-card bg-white pa-05 b-ra-06 w-f-c ma-t-025 d-none" style="border:0.1cqmax solid #FED215;width:17cqmax;">
                  <div class="d-flex">
                      <div class="w-p-45">
                        <img src="https://sina0043.github.io/sawda_ssr/assets/img/advertisings-list/car-map.png" alt="" class="b-ra-04 w-p-100">
                      </div>
                      <div class="w-c-1"></div>
                      <div class="w-p-55">
                        <div class="d-flex h-p-100 flex-wrap">
                          <div class="d-flex align-items-center justify-content-between w-p-100">
                              <span class="f-s-1 title o-dots">BMW 510</span>
                              <img src="https://sina0043.github.io/sawda_ssr/assets/img/chat/bonga.png" alt="" class="w-c-2">
                          </div>
                          <div class="d-flex align-items-center w-p-100">
                              <div class="w-p-40 o-dots">
                                  <span class="f-s-1 title">$2500</span>
                              </div>
                              <div class="w-p-40 o-dots">
                                  <span class="f-s-075 t-l-g">/1000km</span>
                              </div>
                          </div>
                          <div class="d-flex align-items-center justify-content-between align-self-end w-p-100">
                              <div class="d-flex align-items-center w-p-50">
                                  <img src="https://sina0043.github.io/sawda_ssr/assets/img/chat/date.png" alt="" class="w-c-1">
                                  <div class="w-c-025"></div>
                                  <span class="f-s-075 t-l-g o-dots" style="margin-top: 0.1cqmax;">2020</span>
                              </div>
                              <div class="d-flex align-items-center justify-content-end w-p-50">
                                  <img src="https://sina0043.github.io/sawda_ssr/assets/img/chat/color.png" alt="" class="w-c-1">
                                  <div class="w-c-025"></div>
                                  <span class="f-s-075 t-l-g o-dots" style="margin-top: 0.1cqmax;">2 Pics</span>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            `})}).addTo(this.map);document.querySelectorAll(".map-options").forEach(t=>{t.closest(".leaflet-marker-icon").classList.remove("leaflet-div-icon"),t.addEventListener("click",e=>{let c=e.currentTarget.querySelector(".custom-marker").offsetWidth,u=e.currentTarget.querySelector(".custom-marker").offsetHeight,f=window.getComputedStyle(e.currentTarget.closest(".leaflet-marker-icon")).transform.split(",")[4].trim(),h=window.getComputedStyle(e.currentTarget.closest(".leaflet-marker-icon")).transform.split(",")[5].split(")")[0].trim();e.currentTarget.classList.contains("active")?(e.currentTarget.classList.remove("active"),e.currentTarget.querySelector(".mini-card")?.classList.add("d-none"),document.querySelector(".mini-card-list").classList.remove("active"),document.querySelector(".mini-card-list").classList.add("d-none")):(this.closestMarker=[],document.querySelector(".mini-card-list").innerHTML="",document.querySelector(".mini-card-list").classList.remove("active"),document.querySelector(".mini-card-list").classList.add("d-none"),document.querySelectorAll(".map-options").forEach(s=>{s.closest(".leaflet-marker-icon").style.zIndex="1",s.classList.remove("active"),s.querySelector(".mini-card")?.classList.add("d-none");let S=s.querySelector(".custom-marker").offsetWidth,k=s.querySelector(".custom-marker").offsetHeight,x=window.getComputedStyle(s.closest(".leaflet-marker-icon")).transform.split(",")[4].trim(),w=window.getComputedStyle(s.closest(".leaflet-marker-icon")).transform.split(",")[5].split(")")[0].trim();Math.abs(f-x)<=c&&Math.abs(h-w)<=u&&this.closestMarker.push(s.querySelector(".mini-card").cloneNode(!0))}),this.closestMarker.length==1?(e.currentTarget.classList.add("active"),e.currentTarget.closest(".leaflet-marker-icon").style.zIndex="9999",e.currentTarget.querySelector(".mini-card")?.classList.remove("d-none")):(this.closestMarker.forEach(s=>{document.querySelector(".mini-card-list").append(s),s.classList.remove("d-none")}),document.querySelector(".mini-card-list").classList.add("active"),document.querySelector(".mini-card-list").classList.remove("d-none")))})}),document.getElementById("map")?.addEventListener("click",t=>{t.target.closest(".leaflet-marker-icon")||document.querySelectorAll(".map-options").forEach(e=>{e.classList.remove("active"),e.closest(".leaflet-marker-icon").style.zIndex="1",e.querySelector(".mini-card")?.classList.add("d-none"),document.querySelector(".mini-card-list").classList.remove("active"),document.querySelector(".mini-card-list").classList.add("d-none")})})}}};a.\u0275fac=function(e){return new(e||a)(n(v))},a.\u0275cmp=o({type:a,selectors:[["app-advertising-map"]],standalone:!0,features:[p],decls:4,vars:0,consts:[[1,"position-relative","b-t-02","b-c-lightgray"],[1,"ma-x-n-5"],["id","map",1,"box-shadow-2","d-flex","flex-column","justify-content-center","align-items-center",2,"height","90vh","width","100%","z-index","2"],[1,"mini-card-list","position-absolute","b-ra-06","bg-white","o-a","d-none",2,"z-index","99999","top","50vh","right","2%","max-height","30cqmax","transform","translateY(-60%)","padding","0.50cqmax 0.75cqmax 0.75cqmax 0.75cqmax"]],template:function(e,c){e&1&&(l(0,"div",0)(1,"div",1),m(2,"div",2)(3,"div",3),d()())},dependencies:[g]});let r=a;return r})();export{T as AdvertisingMapComponent};

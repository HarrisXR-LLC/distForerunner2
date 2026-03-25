"use strict";(self.webpackChunkforerunner=self.webpackChunkforerunner||[]).push([[207],{5242:(e,t,i)=>{i.r(t),i.d(t,{CanvasRecorder:()=>Ai,catalogLoader:()=>tt,loadPlugins:()=>wa,missile:()=>a,startGoogleAnalytics:()=>Ca,uiManagerFinal:()=>ka});var a={};i.r(a),i.d(a,{bottomMenuClick:()=>P,hideSideMenus:()=>_,init:()=>z,missileChange:()=>O,missileSubmit:()=>U,msAttackerChange:()=>j,msErrorClick:()=>R,msTargetChange:()=>D,onHelpMenuClick:()=>$,searchForRvs:()=>G,uiManagerFinal:()=>B,uiManagerInit:()=>F,updateLoop:()=>I});var s=i(4516),n=i(3443),o=i(6145),l=i(5753),r=i(2599),c=i(8527);const d=i.p+"../img/flag.png";var u=i(811),g=i(7141),p=i(4134);class h extends u.S{constructor(){super(h.PLUGIN_NAME),this.bottomIconElementName="menu-countries-icon",this.bottomIconImg=d,this.bottomIconLabel="Countries",this.sideMenuElementHtml=l.d.html`
    <div id="countries-menu" class="side-menu-parent start-hidden text-select">
      <div id="country-menu" class="side-menu">
        <ul>
          <h5 class="center-align">Countries</h5>
          <li class="divider"></li>
          <li class="menu-selectable country-option" data-group="Argentina">Argentina</li>
          <li class="menu-selectable country-option" data-group="Austria">Austria</li>
          <li class="menu-selectable country-option" data-group="Australia">Australia</li>
          <li class="menu-selectable country-option" data-group="Belgium">Belgium</li>
          <li class="menu-selectable country-option" data-group="Brazil">Brazil</li>
          <li class="menu-selectable country-option" data-group="Canada">Canada</li>
          <li class="menu-selectable country-option" data-group="China">China</li>
          <li class="menu-selectable country-option" data-group="Colombia">Colombia</li>
          <li class="menu-selectable country-option" data-group="Denmark">Denmark</li>
          <li class="menu-selectable country-option" data-group="Egypt">Egypt</li>
          <li class="menu-selectable country-option" data-group="Finland">Finland</li>
          <li class="menu-selectable country-option" data-group="France">France</li>
          <li class="menu-selectable country-option" data-group="Germany">Germany</li>
          <li class="menu-selectable country-option" data-group="Hong Kong">Hong Kong</li>
          <li class="menu-selectable country-option" data-group="Hungary">Hungary</li>
          <li class="menu-selectable country-option" data-group="India">India</li>
          <li class="menu-selectable country-option" data-group="Indonesia">Indonesia</li>
          <li class="menu-selectable country-option" data-group="Iran">Iran</li>
          <li class="menu-selectable country-option" data-group="Ireland">Ireland</li>
          <li class="menu-selectable country-option" data-group="Italy">Italy</li>
          <li class="menu-selectable country-option" data-group="Israel">Israel</li>
          <li class="menu-selectable country-option" data-group="Japan">Japan</li>
          <li class="menu-selectable country-option" data-group="North Korea">North Korea</li>
          <li class="menu-selectable country-option" data-group="South Korea">South Korea</li>
          <li class="menu-selectable country-option" data-group="Mexico">Mexico</li>
          <li class="menu-selectable country-option" data-group="Norway">Norway</li>
          <li class="menu-selectable country-option" data-group="New Zealand">New Zealand</li>
          <li class="menu-selectable country-option" data-group="Philippines">Philippines</li>
          <li class="menu-selectable country-option" data-group="Poland">Poland</li>
          <li class="menu-selectable country-option" data-group="Russia">Russia</li>
          <li class="menu-selectable country-option" data-group="Saudi Arabia">Saudi Arabia</li>
          <li class="menu-selectable country-option" data-group="Singapore">Singapore</li>
          <li class="menu-selectable country-option" data-group="Spain">Spain</li>
          <li class="menu-selectable country-option" data-group="Sweden">Sweden</li>
          <li class="menu-selectable country-option" data-group="Switzerland">Switzerland</li>
          <li class="menu-selectable country-option" data-group="Thailand">Thailand</li>
          <li class="menu-selectable country-option" data-group="Turkey">Turkey</li>
          <li class="menu-selectable country-option" data-group="United Kingdom">United Kingdom</li>
          <li class="menu-selectable country-option" data-group="United States">United States</li>
          <li class="menu-selectable country-option" data-group="Venezuela">Venezuela</li>
          <li class="menu-selectable country-option" data-group="Vietnam">Vietnam</li>
          <li class="menu-selectable country-option" data-group="South Africa">South Africa</li>
        </ul>
      </div>
    </div>
    `,this.sideMenuElementName="countries-menu",this.helpTitle="Countries Menu",this.helpBody=l.d.html`The Countries Menu allows you to filter the satellites by country of origin.`}addJs(){super.addJs(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.gE)("country-menu").querySelectorAll("li").forEach(e=>{e.addEventListener("click",function(){var e;null===(e=l.d.getSoundManager())||void 0===e||e.play(p.A.CLICK),h.countryMenuClick_(this.getAttribute("data-group"))})}),(0,s.m)((0,n.gE)(this.sideMenuElementName))}})}static countryMenuClick_(e){const t=l.d.getGroupsManager(),i=c.o.getCountryCode(e);if(""===i)throw new Error("Unknown country group");t.groupList[e]||t.createGroup(r.M.COUNTRY,i,e),h.groupSelected_(e)}static groupSelected_(e){var t;const i=l.d.getGroupsManager(),a=l.d.getCatalogManager(),s=l.d.getUiManager(),o=(0,n.gE)("search");void 0!==e&&void 0!==i.groupList[e]&&(i.selectGroup(i.groupList[e]),i.groupList[e].ids.length<settingsManager.searchLimit?s.searchManager.doSearch(i.groupList[e].ids.reduce((e,t)=>{var i;return`${e}${null===(i=a.getSat(t))||void 0===i?void 0:i.sccNum},`},"").slice(0,-1)):(o.value=i.groupList[e].ids.reduce((e,t)=>{var i;return`${e}${null===(i=a.getSat(t))||void 0===i?void 0:i.sccNum},`},"").slice(0,-1),s.searchManager.fillResultBox(i.groupList[e].ids.map(e=>({id:e})),a)),null===(t=l.d.getPlugin(g.A))||void 0===t||t.selectSat(-1),settingsManager.isMobileModeEnabled&&s.searchManager.closeSearch(),s.hideSideMenus())}}h.PLUGIN_NAME="Countries Menu";const m=new h;var v=i(6961),b=i(1535),f=i(2427),S=i(8577),E=i(528),M=i(8008);class y extends u.S{static checkAz(e,t,i){return e.filter(e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,M.Eg)(l.d.getTimeManager().simulationTimeObj,l.d.getCatalogManager().getSat(e.id,o.Z.POSITION_ONLY).position,l.d.getSensorManager().currentSensors[0]);return a.az>=t&&a.az<=i})}static checkEl(e,t,i){return e.filter(e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,M.Eg)(l.d.getTimeManager().simulationTimeObj,l.d.getCatalogManager().getSat(e.id,o.Z.POSITION_ONLY).position,l.d.getSensorManager().currentSensors[0]);return a.el>=t&&a.el<=i})}static checkInview(e){const t=l.d.getDotsManager();return e.filter(e=>1===t.inViewData[e.id])}static checkObjtype(e,t){return e.filter(e=>e.type===t)}static checkRange(e,t,i){return e.filter(e=>{if(!e.isSatellite()&&!e.isMissile())return!1;const a=(0,M.Eg)(l.d.getTimeManager().simulationTimeObj,l.d.getCatalogManager().getSat(e.id,o.Z.POSITION_ONLY).position,l.d.getSensorManager().currentSensors[0]);return a.rng>=t&&a.rng<=i})}static limitPossibles(e,t){const i=l.d.getUiManager();return e.length>=t&&i.toast(`Too many results, limited to ${t}`,"serious"),e.slice(0,t)}static searchSats(e){let{az:t,el:i,rng:a,countryCode:s,inc:o,azMarg:r,elMarg:c,rngMarg:d,incMarg:u,period:g,periodMarg:p,rcs:h,rcsMarg:m,objType:v,raan:b,raanMarg:f,argPe:S,argPeMarg:M,bus:w,shape:A,payload:k,altPerLower:C,altPerUpper:L,altApoLower:T,altApoUpper:N}=e;function x(e){return void 0!==e&&!isNaN(e)&&isFinite(e)}const I=x(t),_=x(i),P=x(a),O=x(o),R=x(b),D=x(S),U=x(g),F=x(h),G="All"!==s,B="All"!==w,z="All"!==A,$="All"!==k;let j=C,V=L,H=T,Y=N;const J=x(C)||x(L),X=x(T)||x(N);if(J&&(j=void 0!==C?C:Number.MIN_SAFE_INTEGER,V=void 0!==L?L:Number.MAX_SAFE_INTEGER),X&&(H=void 0!==T?T:Number.MIN_SAFE_INTEGER,Y=void 0!==N?N:Number.MAX_SAFE_INTEGER),r=!isNaN(r)&&isFinite(r)?r:5,c=!isNaN(c)&&isFinite(c)?c:5,d=!isNaN(d)&&isFinite(d)?d:200,u=!isNaN(u)&&isFinite(u)?u:1,p=!isNaN(p)&&isFinite(p)?p:.5,m=!isNaN(m)&&isFinite(m)?m:h/10,f=!isNaN(f)&&isFinite(f)?f:1,M=!isNaN(M)&&isFinite(M)?M:1,!(_||P||I||O||U||F||D||R||G||B||z||$||J||X))throw new Error("No Search Criteria Entered");let K=l.d.getCatalogManager().getSats();if(K=O||U||!(I||_||P)?K:y.checkInview(K),K=0!==v?y.checkObjtype(K,v):K,I&&(K=y.checkAz(K,t-r,t+r)),_&&(K=y.checkEl(K,i-c,i+c)),P&&(K=y.checkRange(K,a-d,a+d)),O&&(K=y.checkInc(K,o-u,o+u)),R&&(K=y.checkRightAscension(K,b-f,b+f)),D&&(K=y.checkArgPe(K,S-M,S+M)),U&&(K=y.checkPeriod(K,g-p,g+p)),F&&(K=y.checkRcs(K,h-m,h+m)),J&&(K=y.checkAltPer(K,j,V)),X&&(K=y.checkAltApo(K,H,Y)),"All"!==s){let e=s.split("|").map(e=>E.$5[e]);e=e.filter((t,i)=>t&&e.indexOf(t)===i),K=K.filter(t=>e.includes(t.country))}"All"!==w&&(K=K.filter(e=>e.bus===w)),"All"!==A&&(K=K.filter(e=>e.shape===A)),"All"!==k&&(K=K.filter(e=>{var t,i,a;return(null===(a=null===(i=null===(t=e.payload)||void 0===t?void 0:t.split(" ")[0])||void 0===i?void 0:i.split("-")[0])||void 0===a?void 0:a.replace(/[^a-zA-Z]/gu,""))===k})),K=y.limitPossibles(K,settingsManager.searchLimit);let W="";return K.forEach((e,t)=>{W+=t<K.length-1?`${e.sccNum},`:`${e.sccNum}`}),(0,n.gE)("search").value=W,l.d.getUiManager().doSearch((0,n.gE)("search").value),K}findByLooksSubmit(){return e=this,t=void 0,a=function*(){const e=l.d.getUiManager(),t=parseFloat((0,n.gE)("fbl-azimuth").value),i=parseFloat((0,n.gE)("fbl-elevation").value),a=parseFloat((0,n.gE)("fbl-range").value),s=parseFloat((0,n.gE)("fbl-inc").value),o=parseFloat((0,n.gE)("fbl-period").value),r=parseFloat((0,n.gE)("fbl-rcs").value),c=parseFloat((0,n.gE)("fbl-azimuth-margin").value),d=parseFloat((0,n.gE)("fbl-elevation-margin").value),u=parseFloat((0,n.gE)("fbl-range-margin").value),g=parseFloat((0,n.gE)("fbl-inc-margin").value),p=parseFloat((0,n.gE)("fbl-period-margin").value),h=parseFloat((0,n.gE)("fbl-rcs-margin").value),m=parseInt((0,n.gE)("fbl-type").value),v=parseFloat((0,n.gE)("fbl-raan").value),b=parseFloat((0,n.gE)("fbl-raan-margin").value),f=parseFloat((0,n.gE)("fbl-argPe").value),S=parseFloat((0,n.gE)("fbl-argPe-margin").value),E=parseFloat((0,n.gE)("fbl-altPer-Lower").value),M=parseFloat((0,n.gE)("fbl-altPer-Upper").value),w=parseFloat((0,n.gE)("fbl-altApo-Lower").value),A=parseFloat((0,n.gE)("fbl-altApo-Upper").value),k=(0,n.gE)("fbl-country").value,C=(0,n.gE)("fbl-bus").value,L=(0,n.gE)("fbl-payload").value,T=(0,n.gE)("fbl-shape").value;(0,n.gE)("search").value="";try{const n={az:t,el:i,rng:a,inc:s,azMarg:c,elMarg:d,rngMarg:u,incMarg:g,period:o,periodMarg:p,rcs:r,rcsMarg:h,objType:m,raan:v,raanMarg:b,argPe:f,argPeMarg:S,countryCode:k,bus:C,payload:L,shape:T,altPerLower:E,altPerUpper:M,altApoLower:w,altApoUpper:A};this.lastResults=y.searchSats(n),0===this.lastResults.length&&e.toast("No Satellites Found","critical")}catch(t){"No Search Criteria Entered"===t.message&&e.toast("No Search Criteria Entered","critical")}},new((i=void 0)||(i=Promise))(function(s,n){function o(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(o,l)}r((a=a.apply(e,t||[])).next())});var e,t,i,a}addJs(){super.addJs(),l.d.register({event:o.QY.uiManagerInit,cbName:"findSat",cb:()=>{(0,n.gE)("fbl-error").addEventListener("click",function(){(0,n.gE)("fbl-error").style.display="none"})}}),l.d.register({event:o.QY.uiManagerFinal,cbName:"findSat",cb:this.uiManagerFinal.bind(this)})}constructor(){super(y.PLUGIN_NAME),this.lastResults=[],this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:700},this.sideMenuElementName="findByLooks-menu",this.sideMenuElementHtml=l.d.html`
  <div id="findByLooks-menu" class="side-menu-parent start-hidden text-select">
    <div id="findByLooks-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Find Object</h5>
        <form id="findByLooks-form">
          <div class="row">
            <div class="input-field col s12">
              <select value=0 id="fbl-type" type="text">
                <option value=0>All</option>
                <option value=1>Payload</option>
                <option value=2>Rocket Body</option>
                <option value=3>Debris</option>
              </select>
              <label for="disabled">Object Type</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select value=0 id="fbl-country" type="text">
                <option value='All'>All</option>
              </select>
              <label for="disabled">Country</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select value=0 id="fbl-bus" type="text">
                <option value='All'>All</option>
              </select>
              <label for="disabled">Satellite Bus</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select value=0 id="fbl-payload" type="text">
                <option value='All'>All</option>
              </select>
              <label for="disabled">Payload</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select value=0 id="fbl-shape" type="text">
                <option value='All'>All</option>
              </select>
              <label for="disabled">Shape</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="xxx.x" id="fbl-azimuth" type="text">
              <label for="fbl-azimuth" class="active">Azimuth (deg)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input placeholder="5" id="fbl-azimuth-margin" type="text">
              <label for="fbl-azimuth-margin "class="active">Margin (deg)</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-elevation" type="text">
              <label for="fbl-elevation "class="active">Elevation (deg)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input placeholder="5" id="fbl-elevation-margin" type="text">
              <label for="fbl-elevation-margin "class="active">Margin (deg)</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="xxxx.x" id="fbl-range" type="text">
              <label for="fbl-range "class="active">Range (km)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input placeholder="500" id="fbl-range-margin" type="text">
              <label for="fbl-range-margin "class="active">Margin (km)</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-inc" type="text">
              <label for="fbl-inc "class="active">Inclination (deg)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input value="0.5" placeholder="0.5" id="fbl-inc-margin" type="text">
              <label for="fbl-inc-margin "class="active">Margin (deg)</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-period" type="text">
              <label for="fbl-period "class="active">Period (min)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input value="10" placeholder="10" id="fbl-period-margin" type="text">
              <label for="fbl-period-margin "class="active">Margin (min)</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-rcs" type="text">
              <!-- RCS in meters squared -->
              <label for="fbl-rcs "class="active">RCS (m<sup>2</sup>)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input value="10" placeholder="10" id="fbl-rcs-margin" type="text">
              <label for="fbl-rcs-margin "class="active">Margin (m<sup>2</sup>)</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-raan" type="text">
              <label for="fbl-raan "class="active">Right Ascension (deg)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input value="0.5" placeholder="0.5" id="fbl-raan-margin" type="text">
              <label for="fbl-raan-margin "class="active">Margin (deg)</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XX.X" id="fbl-argPe" type="text">
              <label for="fbl-argPe "class="active">Arg of Perigee (deg)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input value="0.5" placeholder="0.5" id="fbl-argPe-margin" type="text">
              <label for="fbl-argPe-margin "class="active">Margin (deg)</label>
            </div>
          </div>
          <!-- ALTITUDE OF PERIGEE -->
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XXXX" id="fbl-altPer-Lower" type="text">
              <label for="fbl-altPer-Lower" class="active">Minimum Perigee Altitude (km)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input placeholder="XXXX" id="fbl-altPer-Upper" type="text">
              <label for="fbl-altPer-Upper "class="active">Maximum Perigee Altitude (km)</label>
            </div>
          </div>
          <!-- ALTITUDE OF APOGEE -->
          <div class="row">
            <div class="input-field col s12 m6 l6">
              <input placeholder="XXXX" id="fbl-altApo-Lower" type="text">
              <label for="fbl-altApo-Lower" class="active">Minimum Apogee Altitude (km)</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <input placeholder="XXXX" id="fbl-altApo-Upper" type="text">
              <label for="fbl-altApo-Upper "class="active">Maximum Apogee Altitude (km)</label>
            </div>
          </div>
          <div class="center-align">
            <button id="findByLooks-submit" class="btn btn-ui waves-effect waves-light" type="submit"
              name="action">Find Object(s) &#9658;
            </button>
          </div>
        </form>
        <div class="row center-align" style="margin-top:20px;">
          <span id="fbl-error" class="menu-selectable"></span>
        </div>
      </div>
    </div>
  </div>`,this.bottomIconElementName="menu-find-sat",this.bottomIconImg=S,this.bottomIconLabel="Find Object",this.helpTitle="Find Object Menu",this.helpBody=l.d.html`The Find Object Menu is used for finding objects by orbital parameters or object characteristics.
<br><br>
For most parameters, you type in the target value on the left and then a margin of error on the right.
For example, if you wanted to find all objects in a 51-52 degree inclination, you can type 51.5 in the left box and 0.5 in the right box.
The search will then find all objects within those inclinations and display them in the search bar.
`}printLastResults(){f.J.info(this.lastResults.map(e=>e.name).join("\n"))}uiManagerFinal(){const e=l.d.getCatalogManager().objectCache;(0,n.gE)("findByLooks-form").addEventListener("submit",e=>{e.preventDefault(),(0,b.Cs)(()=>{this.findByLooksSubmit(),(0,b.RZ)()})}),(0,v.c)(e.filter(e=>null==e?void 0:e.bus).map(e=>e.bus)).sort((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase())).forEach(e=>{(0,n.gE)("fbl-bus").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)}),E.QK.forEach(e=>{(0,n.gE)("fbl-country").insertAdjacentHTML("beforeend",`<option value="${E.kj[e]}">${e}</option>`)}),(0,v.c)(e.filter(e=>null==e?void 0:e.shape).map(e=>e.shape)).sort((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase())).forEach(e=>{(0,n.gE)("fbl-shape").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)});const t=e.filter(e=>null==e?void 0:e.payload).map(e=>e.payload.split(" ")[0].split("-")[0].replace(/[^a-zA-Z]/gu,"")).filter(e=>e.length>=3);(0,v.c)(t).sort((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase())).forEach(e=>{""!==e&&e.length>3&&(0,n.gE)("fbl-payload").insertAdjacentHTML("beforeend",`<option value="${e}">${e}</option>`)})}static checkArgPe(e,t,i){return e.filter(e=>e.argOfPerigee<i&&e.argOfPerigee>t)}static checkInc(e,t,i){return e.filter(e=>e.inclination<i&&e.inclination>t)}static checkPeriod(e,t,i){return e.filter(e=>e.period>t&&e.period<i)}static checkRightAscension(e,t,i){return e.filter(e=>e.rightAscension<i&&e.rightAscension>t)}static checkRcs(e,t,i){return e.filter(e=>e.rcs>t&&e.rcs<i)}static checkAltPer(e,t,i){return e.filter(e=>e.perigee>t&&e.perigee<i)}static checkAltApo(e,t,i){return e.filter(e=>e.apogee>t&&e.apogee<i)}}y.PLUGIN_NAME="findSat";var w=i(4892);const A=i.p+"../img/missile.png";var k=i(8623);const C=l.d.html`The Missile Menu is used for generating notional missile launches between countries.
<br><br>
When you using submarine launched missiles, the launch point is a custom latitude and longitude. When you are using land based missiles, the launch point is a fix latitude and longitude based on open source reporting.
<br><br>
In addition to custom missiles, a few predefined scenarios involving hundreds of missiles are available.
<br><br>
All missile launches are notional and are not intended to represent real world events. The launch trajectories are all based on the same ballistic model, but use different minimum and maximum ranges.
`;var L=i(9639);let T=!1,N=!1,x=0;const I=()=>{if(void 0!==L.Uu&&L.Uu.missileArray.length>0){const e=l.d.getOrbitManager();for(x=0;x<L.Uu.missileArray.length;x++)e.updateOrbitBuffer(L.Uu.missileArray[x].id)}},_=()=>{(0,w.pz)((0,n.gE)("missile-menu"),1e3),(0,n.gE)("menu-missile").classList.remove("bmenu-item-selected"),T=!1},P=e=>{if("menu-missile"===e){const e=l.d.getUiManager();return T?(T=!1,void e.hideSideMenus()):(settingsManager.isMobileModeEnabled&&e.searchManager.closeSearch(),e.hideSideMenus(),(0,w.xA)((0,n.gE)("missile-menu"),1e3),(0,n.gE)("menu-missile").classList.add("bmenu-item-selected"),void(T=!0))}},O=()=>{0!==parseFloat((0,n.gE)("ms-type").value)?(0,n.gE)("ms-custom-opt").style.display="none":(0,n.gE)("ms-custom-opt").style.display="block"},R=()=>{(0,n.gE)("ms-error").style.display="none"},D=()=>{-1!==parseInt((0,n.gE)("ms-target").value)?((0,n.gE)("ms-tgt-holder-lat").style.display="none",(0,n.gE)("ms-tgt-holder-lon").style.display="none"):((0,n.gE)("ms-tgt-holder-lat").style.display="block",(0,n.gE)("ms-tgt-holder-lon").style.display="block")},U=()=>{(0,b.Cs)(()=>{const e=l.d.getTimeManager(),t=l.d.getUiManager();(0,n.gE)("ms-error").style.display="none";const i=parseFloat((0,n.gE)("ms-type").value),a=parseFloat((0,n.gE)("ms-attacker").value);let s=parseFloat((0,n.gE)("ms-lat-lau").value),o=parseFloat((0,n.gE)("ms-lon-lau").value);const r=parseFloat((0,n.gE)("ms-target").value);let c=parseFloat((0,n.gE)("ms-lat").value),d=parseFloat((0,n.gE)("ms-lon").value);const u=e.selectedDate.getTime();let g="";if(1===i&&(g="simulation/Russia2USA.json",L.Uu.MassRaidPre(u,g)),2===i&&(g="simulation/Russia2USAalt.json",L.Uu.MassRaidPre(u,g)),3===i&&(g="simulation/China2USA.json",L.Uu.MassRaidPre(u,g)),4===i&&(g="simulation/NorthKorea2USA.json",L.Uu.MassRaidPre(u,g)),5===i&&(g="simulation/USA2Russia.json",L.Uu.MassRaidPre(u,g)),6===i&&(g="simulation/USA2China.json",L.Uu.MassRaidPre(u,g)),7===i&&(g="simulation/USA2NorthKorea.json",L.Uu.MassRaidPre(u,g)),0!==i&&t.toast(`${g} Loaded`,"standby",!0),0===i){if(-1===r){if(isNaN(c))return t.toast("Invalid Target Latitude!","critical"),void((0,n.gE)("loading-screen").style.display="none");if(isNaN(d))return t.toast("Invalid Target Longitude!","critical"),void((0,n.gE)("loading-screen").style.display="none")}else c=L.Uu.globalBMTargets[3*r],d=L.Uu.globalBMTargets[3*r+1];if(N){if(isNaN(s))return t.toast("Invalid Launch Latitude!","critical"),void((0,n.gE)("loading-screen").style.display="none");if(isNaN(o))return t.toast("Invalid Launch Longitude!","critical"),void((0,n.gE)("loading-screen").style.display="none")}let e,i;const g=l.d.getCatalogManager();if(a<200){e=a-100,i=500-L.Uu.missilesInUse;let t=1200;100!=a&&(s=L.Uu.UsaICBM[4*e],o=L.Uu.UsaICBM[4*e+1],t=1100),L.Uu.Missile(s,o,c,d,3,g.missileSats-i,u,L.Uu.UsaICBM[4*e+2],30,2.9,.07,L.Uu.UsaICBM[4*e+3],"United States",t)}else if(a<300){e=a-200,i=500-L.Uu.missilesInUse;const t=1120;213!=a&&214!=a&&215!=a&&(s=L.Uu.RussianICBM[4*e],o=L.Uu.RussianICBM[4*e+1]),L.Uu.Missile(s,o,c,d,3,g.missileSats-i,u,L.Uu.RussianICBM[4*e+2],30,2.9,.07,L.Uu.RussianICBM[4*e+3],"Russia",t)}else if(a<400){e=a-300,i=500-L.Uu.missilesInUse;const t=1120;321!=a&&(s=L.Uu.ChinaICBM[4*e],o=L.Uu.ChinaICBM[4*e+1]),L.Uu.Missile(s,o,c,d,3,g.missileSats-i,u,L.Uu.ChinaICBM[4*e+2],30,2.9,.07,L.Uu.ChinaICBM[4*e+3],"China",t)}else if(a<500){e=a-400,i=500-L.Uu.missilesInUse;const t=1120;400!=a&&(s=L.Uu.NorthKoreanBM[4*e],o=L.Uu.NorthKoreanBM[4*e+1]),L.Uu.Missile(s,o,c,d,3,g.missileSats-i,u,L.Uu.NorthKoreanBM[4*e+2],30,2.9,.07,L.Uu.NorthKoreanBM[4*e+3],"North Korea",t)}else if(a<600){e=a-500,i=500-L.Uu.missilesInUse;const t=1e3;500!=a&&(s=L.Uu.FraSLBM[4*e],o=L.Uu.FraSLBM[4*e+1]),L.Uu.Missile(s,o,c,d,3,g.missileSats-i,u,L.Uu.FraSLBM[4*e+2],30,2.9,.07,L.Uu.FraSLBM[4*e+3],"France",t)}else if(a<700){e=a-600,i=500-L.Uu.missilesInUse;const t=1200;600!=a&&(s=L.Uu.ukSLBM[4*e],o=L.Uu.ukSLBM[4*e+1]),L.Uu.Missile(s,o,c,d,3,g.missileSats-i,u,L.Uu.ukSLBM[4*e+2],30,2.9,.07,L.Uu.ukSLBM[4*e+3],"United Kigndom",t)}t.toast(L.Uu.lastMissileError,L.Uu.lastMissileErrorType),t.doSearch("RV_")}(0,n.gE)("loading-screen").style.display="none"})},F=()=>{(0,n.gE)("left-menus").insertAdjacentHTML("beforeend",l.d.html`
        <div id="missile-menu" class="side-menu-parent start-hidden text-select">
          <div id="missile-content" class="side-menu">
            <div class="row">
              <h5 class="center-align">Create Missile Attack</h5>
              <form id="missile" class="col s12">
                <div class="input-field col s12">
                  <select id="ms-type">
                    <option value="0">Custom Missile</option>
                    <option value="1">Russia to USA</option>
                    <option value="2">Russia to USA w/ Subs</option>
                    <option value="3">China to USA</option>
                    <option value="4">North Korea to USA</option>
                    <option value="5">USA to Russia</option>
                    <option value="6">USA to China</option>
                    <option value="7">USA to North Korea</option>
                  </select>
                  <label>Type of Attack</label>
                </div>
                <div id="ms-custom-opt">
                  <div class="input-field col s12">
                    <select id="ms-attacker">
                      <optgroup label="Russia">
                        <option value="200">Aleysk</option>
                        <option value="201">Dombarovskiy</option>
                        <option value="202">Uzhur</option>
                        <option value="203">Kartaly</option>
                        <option value="204">Irkutsk</option>
                        <option value="205">Kansk</option>
                        <option value="206">Krasnoyarsk</option>
                        <option value="207">Nizhniy Tagil</option>
                        <option value="208">Novosibirsk</option>
                        <option value="209">Tatischevo (SS-19)</option>
                        <option value="210">Tatischevo (SS-27)</option>
                        <option value="211">Teykovo</option>
                        <option value="212">Yoshkar Ola</option>
                        <option value="213">Borei Sub (Bulava)</option>
                        <option value="214">Delta IV Sub (Sineva)</option>
                        <option value="215">Delta IV Sub (Layner)</option>
                      </optgroup>
                      <optgroup label="China">
                        <option value="321">Type 092 Sub (JL-2)</option>
                        <option value="300">Nanyang</option>
                        <option value="301">Xining</option>
                        <option value="302">Delingha</option>
                        <option value="303">Haiyan</option>
                        <option value="304">Datong</option>
                        <option value="305">Tainshui</option>
                        <option value="306">Xixia</option>
                        <option value="307">Shaoyang</option>
                        <option value="308">Yuxi</option>
                        <option value="309">Luoyang</option>
                        <option value="310">Wuzhai</option>
                        <option value="311">Xuanhua</option>
                        <option value="312">Tongdao</option>
                        <option value="313">Lushi</option>
                        <option value="314">Jingxian A</option>
                        <option value="315">Jingxian B</option>
                        <option value="316">Hunan</option>
                        <option value="317">Daqing City</option>
                        <option value="318">Xinyang City</option>
                        <option value="319">Xinjiang Province</option>
                        <option value="320">Tibet Province</option>
                      </optgroup>
                      <optgroup label="United States">
                        <option value="101">Minot</option>
                        <option value="102">Malmstrom</option>
                        <option value="103">F.E. Warren</option>
                        <option value="100">Ohio Sub (Trident II)</option>
                      </optgroup>
                      <optgroup label="United Kingdom">
                        <option value="600">Vanguard Sub (Trident II)</option>
                        <option value="601">HMNB Clyde (Trident II)</option>
                      </optgroup>
                      <optgroup label="France">
                        <option value="500">Triomphant Sub (M51)</option>
                        <option value="501">Bay of Biscay</option>
                      </optgroup>
                      <optgroup label="North Korea">
                        <option value="400">Sinpo Sub (Pukkŭksŏng-1)</option>
                        <option value="401">Sinpo</option>
                        <option value="402">P'yong'an</option>
                        <option value="403">Pyongyang</option>
                      </optgroup>
                    </select>
                    <label>Launch Location</label>
                  </div>
                  <div id="ms-lau-holder-lat" class="input-field col s12">
                    <input placeholder="00.000" id="ms-lat-lau" type="text" maxlength="8" />
                    <label for="ms-lat-lau" class="active">Custom Launch Latitude</label>
                  </div>
                  <div id="ms-lau-holder-lon" class="input-field col s12">
                    <input placeholder="00.000" id="ms-lon-lau" type="text" maxlength="8" />
                    <label for="ms-lon-lau" class="active">Custom Launch Longitude</label>
                  </div>
                  <div class="input-field col s12">
                    <select id="ms-target">
                      <optgroup label="United States">
                        <option value="0">Washington DC</option>
                        <option value="1">New York City</option>
                        <option value="2">Los Angeles</option>
                        <option value="3">Chicago</option>
                        <option value="4">Boston</option>
                        <option value="5">Seattle</option>
                        <option value="6">Miami</option>
                        <option value="7">Dallas</option>
                        <option value="8">Colorado Springs</option>
                        <option value="9">Omaha</option>
                        <option value="10">Hawaii</option>
                        <option value="11">Guam</option>
                      </optgroup>
                      <option value="-1">Custom Impact</option>
                      <optgroup label="NATO Countries">
                        <option value="12">London</option>
                        <option value="13">Paris</option>
                        <option value="14">French Caribean</option>
                        <option value="15">Madrid</option>
                        <option value="16">Rome</option>
                        <option value="17">Berlin</option>
                        <option value="18">Toronto</option>
                      </optgroup>
                      <optgroup label="Non-NATO Countries">
                        <option value="19">Moscow</option>
                        <option value="20">St. Petersburg</option>
                        <option value="21">Novosibirsk</option>
                        <option value="22">Beijing</option>
                        <option value="23">Pyongyang</option>
                      </optgroup>
                    </select>
                    <label>Target Location</label>
                  </div>
                  <div id="ms-tgt-holder-lat" class="input-field col s12">
                    <input placeholder="00.000" id="ms-lat" type="text" maxlength="8" />
                    <label for="ms-lat" class="active">Custom Target Latitude</label>
                  </div>
                  <div id="ms-tgt-holder-lon" class="input-field col s12">
                    <input placeholder="00.000" id="ms-lon" type="text" maxlength="8" />
                    <label for="ms-lon" class="active">Custom Target Longitude</label>
                  </div>
                </div>
                <div class="center-align">
                  <button class="btn btn-ui waves-effect waves-light" type="submit" name="action">Launch Missile Attack &#9658;</button>
                </div>
              </form>
              <div class="row"></div>
              <div class="center-align">
                <button id="searchRvBtn" class="btn btn-ui waves-effect waves-light" name="search">Show All Missiles &#9658;</button>
              </div>
            </div>
            <div id="ms-error" class="center-align menu-selectable start-hidden">
              <h6 class="center-align">Error</h6>
            </div>
          </div>
        </div>
      `),(0,n.gE)("bottom-icons").insertAdjacentHTML("beforeend",l.d.html`
        <div id="menu-missile" class="bmenu-item">
          <img
            alt="missile"
            src="" delayedsrc=${A}
          />
          <span class="bmenu-title">Missile</span>
          <div class="status-icon"></div>
        </div>
        `)},G=()=>{l.d.getUiManager().doSearch("RV_")},B=()=>{(0,s.m)((0,n.gE)("missile-menu")),(0,n.gE)("missile").addEventListener("submit",e=>{e.preventDefault(),U()}),(0,n.gE)("ms-attacker").addEventListener("change",j),(0,n.gE)("ms-target").addEventListener("change",D),(0,n.gE)("ms-error").addEventListener("click",R),(0,n.gE)("missile").addEventListener("change",O),(0,n.gE)("searchRvBtn").addEventListener("click",G),j(),D()},z=()=>{l.d.register({event:o.QY.uiManagerInit,cbName:"missile",cb:F}),l.d.register({event:o.QY.uiManagerFinal,cbName:"missile",cb:B}),l.d.register({event:o.QY.bottomMenuClick,cbName:"missile",cb:P}),l.d.register({event:o.QY.hideSideMenus,cbName:"missile",cb:_}),l.d.register({event:o.QY.updateLoop,cbName:"updateMissileOrbits",cb:I}),l.d.register({event:o.QY.onHelpMenuClick,cbName:"missile",cb:$})},$=()=>!!T&&(k.Z.showAdvice("Missile Menu",C),!0),j=()=>{N=!1;const e=[100,600,213,214,215,321,500,400];for(let t=0;t<e.length;t++)e[t]==parseInt((0,n.gE)("ms-attacker").value)&&(N=!0);N?((0,n.gE)("ms-lau-holder-lat").style.display="block",(0,n.gE)("ms-lau-holder-lon").style.display="block"):((0,n.gE)("ms-lau-holder-lat").style.display="none",(0,n.gE)("ms-lau-holder-lon").style.display="none")};var V=i(4655),H=i(8816);const Y=i.p+"../img/sat3.png";class J extends u.S{constructor(){super(J.PLUGIN_NAME),this.dependencies=[g.A.PLUGIN_NAME],this.bottomIconElementName="menu-satview",this.bottomIconLabel="Satellite View",this.bottomIconImg=Y,this.isIconDisabledOnLoad=!0,this.bottomIconCallback=()=>{l.d.getMainCamera().cameraType===H.A.SATELLITE?(l.d.getUiManager().hideSideMenus(),l.d.getMainCamera().cameraType=H.A.FIXED_TO_SAT,(0,n.gE)(this.bottomIconElementName).classList.remove("bmenu-item-selected")):-1!==this.selectSatManager_.selectedSat?(l.d.getMainCamera().cameraType=H.A.SATELLITE,(0,n.gE)(this.bottomIconElementName).classList.add("bmenu-item-selected")):(l.d.getUiManager().toast("This operation requires a satellite to be selected first.","caution"),(0,V.h)((0,n.gE)(this.bottomIconElementName)))},this.lastLongAudioTime=0,this.selectSatManager_=l.d.getPlugin(g.A)}}J.PLUGIN_NAME="Satellite View";var X=i(4174);const K=i.p+"../audio/beep1.mp3",W=i.p+"../audio/button.mp3",Z=i.p+"../audio/button2.mp3",Q=i.p+"../audio/chatter1.mp3",q=i.p+"../audio/chatter2.mp3",ee=i.p+"../audio/chatter3.mp3",te=i.p+"../audio/chatter4.mp3",ie=i.p+"../audio/chatter5.mp3",ae=i.p+"../audio/chatter6.mp3",se=i.p+"../audio/chatter7.mp3",ne=i.p+"../audio/chatter8.mp3",oe=i.p+"../audio/click10.mp3",le=i.p+"../audio/click11.mp3",re=i.p+"../audio/click12.mp3",ce=i.p+"../audio/click13.mp3",de=i.p+"../audio/click14.mp3",ue=i.p+"../audio/click15.mp3",ge=i.p+"../audio/click16.mp3",pe=i.p+"../audio/click17.mp3",he=i.p+"../audio/click18.mp3",me=i.p+"../audio/click19.mp3",ve=i.p+"../audio/click2.mp3",be=i.p+"../audio/click20.mp3",fe=i.p+"../audio/click21.mp3",Se=i.p+"../audio/click22.mp3",Ee=i.p+"../audio/click23.mp3",Me=i.p+"../audio/click24.mp3",ye=i.p+"../audio/click25.mp3",we=i.p+"../audio/click26.mp3",Ae=i.p+"../audio/click27.mp3",ke=i.p+"../audio/click28.mp3",Ce=i.p+"../audio/click29.mp3",Le=i.p+"../audio/click3.mp3",Te=i.p+"../audio/click30.mp3",Ne=i.p+"../audio/click4.mp3",xe=i.p+"../audio/click7.mp3",Ie=i.p+"../audio/click8.mp3",_e=i.p+"../audio/error.mp3",Pe=i.p+"../audio/error2.mp3",Oe=i.p+"../audio/export.wav",Re=i.p+"../audio/genericBeep1.mp3",De=i.p+"../audio/genericBeep2.mp3",Ue=i.p+"../audio/genericBeep3.mp3",Fe=i.p+"../audio/liftoff.mp3",Ge=i.p+"../audio/loading.wav",Be=i.p+"../audio/pop.mp3",ze=i.p+"../audio/switch.mp3",$e=i.p+"../audio/toggle-off.mp3",je=i.p+"../audio/toggle-on.mp3",Ve=i.p+"../audio/whoosh1.mp3",He=i.p+"../audio/whoosh2.mp3",Ye=i.p+"../audio/whoosh3.mp3",Je=i.p+"../audio/whoosh4.mp3",Xe=i.p+"../audio/whoosh5.mp3",Ke=i.p+"../audio/whoosh6.mp3",We=i.p+"../audio/whoosh7.mp3",Ze=i.p+"../audio/whoosh8.mp3";class Qe extends u.S{constructor(){super("Sound Manager"),this.lastLongAudioTime=0,this.isMute=!1,this.currentChatterClip_=0,this.voices=[],this.maxClickClip_=0,this.sounds={standby:new Audio(Be),error1:new Audio(_e),error2:new Audio(Pe),export:new Audio(Oe),click:new Audio(ze),beep1:new Audio(K),genericBeep1:new Audio(Re),genericBeep2:new Audio(De),genericBeep3:new Audio(Ue),whoosh1:new Audio(Ve),whoosh2:new Audio(He),whoosh3:new Audio(Ye),whoosh4:new Audio(Je),whoosh5:new Audio(Xe),whoosh6:new Audio(Ke),whoosh7:new Audio(We),whoosh8:new Audio(Ze),click1:new Audio(Te),click2:new Audio(ve),click3:new Audio(Le),click4:new Audio(Ne),click5:new Audio(Ce),click6:new Audio(Ae),click7:new Audio(xe),click8:new Audio(Ie),click9:new Audio(ke),click10:new Audio(oe),click11:new Audio(le),click12:new Audio(re),click13:new Audio(ce),click14:new Audio(de),click15:new Audio(ue),click16:new Audio(ge),click17:new Audio(pe),click18:new Audio(he),click19:new Audio(me),click20:new Audio(be),click21:new Audio(fe),click22:new Audio(Se),click23:new Audio(Ee),click24:new Audio(Me),click25:new Audio(ye),click26:new Audio(we),chatter1:new Audio(Q),chatter2:new Audio(q),chatter3:new Audio(ee),chatter4:new Audio(te),chatter5:new Audio(ie),chatter6:new Audio(ae),chatter7:new Audio(se),chatter8:new Audio(ne),loading:new Audio(Ge),button:new Audio(W),menuButton:new Audio(Z),toggleOn:new Audio(je),toggleOff:new Audio($e),liftoff:new Audio(Fe)},this.addJs=()=>{super.addJs(),X.u.registerSingleton(o.dz.SoundManager,this),l.d.register({event:o.QY.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>{this.voices=speechSynthesis.getVoices()}}),this.sounds.loading.volume=.25,this.sounds.export.volume=.3,this.sounds.error2.volume=.5},Object.keys(this.sounds).forEach(e=>{if(e.startsWith("click")){const t=parseInt(e.replace("click",""));t>this.maxClickClip_&&(this.maxClickClip_=t)}})}speak(e){if(this.isMute)return;const t=new SpeechSynthesisUtterance;t.text=e,t.volume=.5,t.rate=1,t.pitch=1,t.voice=this.voices.filter(function(e){return"Google UK English Female"==e.name})[0],window.speechSynthesis.speak(t)}stop(e,t=!0){if(e===p.A.CHATTER){clearTimeout(this.nextChatter);for(let e=1;e<=8;e++)this.stop(`chatter${e}`,t);return}const i=this.sounds[e];t&&Qe.fadeOut_(i)}static fadeOut_(e,t=1e3){const i=e.volume,a=t/10,s=e.volume/a;let n=0;const o=setInterval(()=>{n++,e.volume>.05&&(e.volume-=s),n===a&&(e.pause(),e.currentTime=0,clearInterval(o),e.volume=i)},10)}play(e){var t;null===(t=navigator.userActivation)||void 0===t||t.hasBeenActive}}const qe=new Qe;var et=i(7910),tt=i(8007),it=i(855),at=i(324),st=i(7278);class nt{static exportTle2Csv(e,t=!0){try{const i=[],a=e.filter(e=>e.isSatellite()&&e.tle1);if(0==a.length)return void f.J.info("No TLE data to export");a.sort((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum));for(const e of a)void 0!==e.tle1&&void 0!==e.tle2&&(t&&"ANALSAT"==e.country||i.push({satId:e.sccNum,name:e.name,tle1:e.tle1,tle2:e.tle2,inclination:e.inclination,eccentricity:e.eccentricity,period:e.period,raan:e.rightAscension,apogee:e.apogee,perigee:e.perigee,country:e.country,site:e.launchSite,rocket:e.launchVehicle,rcs:e.rcs,visualMagnitude:e.vmag,user:e.user,mission:e.mission,purpose:e.purpose,contractor:e.manufacturer,dryMass:e.dryMass,liftMass:e.launchMass,lifeExpected:e.lifetime,power:e.power}));(0,at.g3)(i,"catalogInfo")}catch(e){}}static exportSatInFov2Csv(e){const t=e.filter(e=>{var t;return e.isSatellite()&&e.tle1&&1===(null===(t=l.d.getDotsManager().inViewData)||void 0===t?void 0:t[e.id])}).map(e=>{const t=e;return{satId:t.sccNum,name:t.name,country:t.country,apogee:t.apogee,perigee:t.perigee}});(0,at.g3)(t,"satInView")}static exportTle2Txt(e,t=2,i=!0){try{const a=[],s=e.filter(e=>e.isSatellite()&&e.tle1);if(0==s.length)return void f.J.info("No TLE data to export");s.sort((e,t)=>parseInt(e.sccNum)-parseInt(t.sccNum));for(const e of s)void 0!==e.tle1&&void 0!==e.tle2&&(i&&"ANALSAT"==e.country||(3==t&&a.push(e.name),e.tle1.includes("NO TLE")&&console.log(e.sccNum),e.tle2.includes("NO TLE")&&console.log(e.sccNum),a.push(e.tle1),a.push(e.tle2)));const n=a.join("\n"),o=new Blob([n],{type:"text/plain;charset=utf-8"});(0,st.saveAs)(o,"TLE.txt")}catch(e){}}}var ot=i(6340);const lt=i.p+"../img/analysis.png";class rt extends u.S{addHtml(){super.addHtml(),l.d.register({event:o.QY.uiManagerFinal,cbName:"analysis",cb:()=>{var e,t,i,a,o,r,c;null===(e=(0,n.gE)("analysis-bpt"))||void 0===e||e.addEventListener("submit",function(e){e.preventDefault(),rt.analysisBptSumbit_()}),null===(t=(0,n.gE)("findCsoBtn"))||void 0===t||t.addEventListener("click",()=>{(0,b.Cs)(this.findCsoBtnClick_.bind(this))}),null===(i=(0,n.gE)("findReentries"))||void 0===i||i.addEventListener("click",()=>{(0,b.Cs)(rt.findRaBtnClick_)});const d=l.d.getCatalogManager().objectCache;null===(a=(0,n.gE)("export-catalog-csv-btn"))||void 0===a||a.addEventListener("click",()=>{nt.exportTle2Csv(d)}),null===(o=(0,n.gE)("export-sat-fov-csv-btn"))||void 0===o||o.addEventListener("click",()=>{nt.exportSatInFov2Csv(d)}),null===(r=(0,n.gE)("export-catalog-txt-2a"))||void 0===r||r.addEventListener("click",()=>{nt.exportTle2Txt(d)}),null===(c=(0,n.gE)("export-catalog-txt-3a"))||void 0===c||c.addEventListener("click",()=>{nt.exportTle2Txt(d,3)}),(0,s.m)((0,n.gE)("analysis-menu"))}}),l.d.register({event:o.QY.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{rt.setSensor_(e)}})}findCloseObjects(){if(this.searchStrCache_)return this.searchStrCache_;let e=rt.getValidSats_();e=(0,v.c)(e),e.sort((e,t)=>e.position.x-t.position.x);let t=rt.getPossibleCSOs_(e,50),i=(0,v.c)(t);const a=rt.getActualCSOs_(i,50),s=Array.from(new Set(a));let n="";for(let e=0;e<s.length;e++)e==s.length-1?n+=s[e]:n+=s[e]+",";return this.searchStrCache_=n,n}static getActualCSOs_(e,t){const i=[];for(const t of e){let e=t.sat1,i=it.h.getEci(e,new Date(Date.now()+18e5));i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(t.sat1.position=i.position,e=t.sat2,i=it.h.getEci(e,new Date(Date.now()+18e5)),i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||(e.position=i.position,t.sat2.position=i.position))}for(const a of e){let e=a.sat1,s=e.position;if(void 0===s)continue;let n=s.x-t,o=s.x+t,l=s.y-t,r=s.y+t,c=s.z-t,d=s.z+t,u=a.sat2,g=u.position;void 0!==g&&g.x<o&&g.x>n&&g.y<r&&g.y>l&&g.z<d&&g.z>c&&(i.push(e.sccNum),i.push(u.sccNum))}return i}static getPossibleCSOs_(e,t){let i=[];for(let a=0;a<e.length;a++){const s=e[a],n=s.position,o=n.x-t,l=n.x+t,r=n.y-t,c=n.y+t,d=n.z-t,u=n.z+t;let g=0;for(g=Math.max(0,a-200);g<e.length;g++){const t=e[g];if(s==t)continue;const a=t.position;if(a.x>l)break;a.x<l&&a.x>o&&a.y<c&&a.y>r&&a.z<u&&a.z>d&&i.push({sat1:s,sat2:t})}}return i}static getValidSats_(){let e=[];for(let t=0;t<l.d.getCatalogManager().orbitalSats;t++){const i=l.d.getCatalogManager().getSat(t);i&&(void 0===i.position&&(i.position=it.h.getEci(i,new Date).position||{x:0,y:0,z:0}),isNaN(i.position.x)||isNaN(i.position.y)||isNaN(i.position.z)||i.position&&"boolean"!=typeof i.position&&0===i.position.x&&0===i.position.y&&0===i.position.z||e.push(i))}return e}static findBestPass(e,t){const i=l.d.getTimeManager();if(t.length<=0||!t[0]||void 0===t[0].minAz)return l.d.getUiManager().toast("Sensor's format incorrect. Did you select a sensor first?","critical"),[];const a=t[0];let s=0;const n=l.d.getCatalogManager().calcSatrec(e),o=[];let r=M.hJ/(n.no*M.hJ/M.DD),c=0,d=null,u=null,g=null,p=null,h=a.maxRng,m=0,v=!1,b=!1;const f=(e,t)=>{let n=it.h.getRae(e,t,a);if(it.h.checkIsInView(a,n)){const o=i.getOffsetTimeObj(s-5e3);let l=it.h.getRae(o,t,a),r=it.h.checkIsInView(a,l);if(r){let o=i.getOffsetTimeObj(s+5e3);if(l=it.h.getRae(o,t,a),r=it.h.checkIsInView(a,l),!r){if(b=n.el<=3.5,null==p)return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null};c=Math.min((e.getTime()-p.getTime())/1e3/60*10/8,10);let i=Math.min(m/50*10,10);i*=v&&b?2:1,c+=i,c+=Math.min(7500/h,10);let a=0;return a=(e.getTime()-p.getTime())/1e3||0,{sortTime:p.getTime(),scc:t.satnum,score:c,startDate:p,startTime:p,startAz:d,startEl:u,startrng:g,stopDate:e,stopTime:e,stopAz:n.az.toFixed(0),stopEl:n.el.toFixed(1),stoprng:n.rng.toFixed(0),tic:a,minrng:h.toFixed(0),passMaxEl:m.toFixed(1)}}}else n.el<=3.5&&(v=!0),p=e,d=n.az.toFixed(0),u=n.el.toFixed(1),g=n.rng.toFixed(0);m<n.el&&(m=n.el),h>n.rng&&(h=n.rng)}return{sortTime:null,scc:null,score:null,startDate:null,startTime:null,startAz:null,startEl:null,startrng:null,stopDate:null,stopTime:null,stopAz:null,stopEl:null,stoprng:null,tic:null,minrng:null,passMaxEl:null}};for(let e=0;e<604800;e+=5){s=1e3*e;const t=i.getOffsetTimeObj(s);if(o.length<=5e3){const i=f(t,n);null!==i.score&&(o.push(i),c=0,d=null,u=null,g=null,p=null,h=a.maxRng,m=0,v=!1,b=!1,e+=60*r*.75)}}return o}static findBestPasses(e,t){const i=(e=e.replace(/ /gu,",")).split(",");let a=[];for(const e of i)try{if(void 0===e||null==e||""===e||" "===e)continue;const i=l.d.getCatalogManager().sccNum2Sat(parseInt(e)),s=rt.findBestPass(i,[t]);for(const e of s)a.push(e)}catch(e){console.debug(e)}a.sort((e,t)=>t.sortTime-e.sortTime),a.reverse(),a.forEach(e=>{delete e.sortTime});for(const e of a)e.startDate=e.startDate.toISOString().split("T")[0],e.startTime=e.startTime.toISOString().split("T")[1].split(".")[0],e.stopDate=e.stopDate.toISOString().split("T")[0],e.stopTime=e.stopTime.toISOString().split("T")[1].split(".")[0];(0,at.g3)(a,"bestSatTimes")}findCsoBtnClick_(){const e=this.findCloseObjects();l.d.getUiManager().doSearch(e)}static findRaBtnClick_(){const e=ot.g.findReentry(l.d.getCatalogManager().objectCache).join(",");l.d.getUiManager().doSearch(e)}static analysisBptSumbit_(){const e=(0,n.gE)("analysis-bpt-sats").value,t=l.d.getSensorManager();t.isSensorSelected()?rt.findBestPasses(e,t.currentSensors[0]):l.d.getUiManager().toast("You must select a sensor first!","critical")}static setSensor_(e){const t=(0,n.gE)("analysis-bpt-submit");e?(t.disabled=!1,t.textContent="Generate Best Pass Times ▶"):(t.disabled=!0,t.textContent="Select Sensor First!")}constructor(){super("Analysis Menu"),this.bottomIconElementName="analysis-bottom-icon",this.bottomIconImg=lt,this.bottomIconLabel="Analysis Menu",this.sideMenuElementName="analysis-menu",this.sideMenuElementHtml=l.d.html`
  <div id="analysis-menu" class="side-menu-parent start-hidden text-select">
    <div id="analysis-inner-menu" class="side-menu">
      <h5 class="center-align">Export Catalog</h5>
      <div class="divider"></div>
      <div class="row"></div>
      <!-- <form id="analysis-form">
        <div class="row">
          <div class="input-field col s12">
            <input value="25544" id="anal-sat" type="text" />
            <label for="anal-sat" class="active">Satellite Number</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <select value="0" id="anal-type" type="text">
              <optgroup label="Orbital Parameters">
                <option value='inc'>Inclination</option>
                <option value='ap'>Apogee</option>
                <option value='pe'>Perigee</option>
                <option value='per'>Period</option>
                <option value='e'>Eccentricity</option>
                <option value='ra'>RAAN</option>
                <option value='all'>All</option>
              </optgroup>
              <optgroup id="anal-look-opt" label="Look Angles">
                <option value='az'>Azimuth</option>
                <option value='el'>Elevation</option>
                <option value='rng'>Range</option>
                <option value='rae'>All</option>
              </optgroup>
            </select>
            <label for="disabled">Chart Type</label>
          </div>
        </div>
        <div class="row">
          <center>
            <button id="analysis-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">
              View Trends &#9658;
            </button>
          </center>
        </div>
      </form> -->
      <div class="row">
        <center>
          <button id="export-catalog-txt-2a" class="btn btn-ui waves-effect waves-light">
            Export Official TLEs &#9658;
          </button>
        </center>
      </div>
      <div class="row">
        <center>
          <button id="export-catalog-txt-3a" class="btn btn-ui waves-effect waves-light">
            Export Official 3LEs &#9658;
          </button>
        </center>
      </div>
      <div class="row">
        <center>
          <button id="export-catalog-csv-btn" class="btn btn-ui waves-effect waves-light">
            Export Catalog CSV &#9658;
        </button>
        </center>
      </div>
      <h5 class="center-align">Find Objects</h5>
      <div class="divider"></div>
      <div class="row"></div>
      <div class="row">
        <center>
          <button id="export-sat-fov-csv-btn" class="btn btn-ui waves-effect waves-light">
            Export Satellites in FOV &#9658;
        </button>
        </center>
      </div>
      <div class="row">
        <center>
          <button id="findCsoBtn" class="btn btn-ui waves-effect waves-light">Find Close Objects &#9658;</button>
        </center>
      </div>
      <div class="row">
        <center>
          <button id="findReentries" class="btn btn-ui waves-effect waves-light">
          Find Reentries &#9658;
          </button>
        </center>
      </div>
      <h5 class="center-align">Best Pass Times</h5>
      <div class="divider"></div>
      <div class="row"></div>
      <div class="row">
        <form id="analysis-bpt">
          <div class="row">
            <div class="input-field col s12">
              <input value="25544,00005" id="analysis-bpt-sats" type="text" />
              <label for="analysis-bpt-sats" class="active">Satellite Numbers</label>
            </div>
          </div>
          <div class="row">
            <center>
              <button id="analysis-bpt-submit" class="btn btn-ui waves-effect waves-light" type="submit"
                name="action">Generate Best Pass Times &#9658;</button>
            </center>
          </div>
        </form>
      </div>
    </div>
  </div>
`,this.helpTitle="Analysis Menu",this.helpBody=l.d.html`The Analysis Menu provides a number of tools to help you analyze the data in the current view. The tools are:
  <ul style="margin-left: 40px;">
    <li>Export Official TLEs - Export real two line element sets.</li>
    <li>Export 3LES - Export three line element sets.</li>
    <li>Export Forerunner TLEs - Export All Forerunner two line element sets including analysts.</li>
    <li>Export Forerunner 3LES - Export All Forerunner three line element sets including analysts.</li>
    <li>Find Close Objects - Find objects that are close to each other.</li>
    <li>Find Reentries - Find objects that are likely to reenter the atmosphere.</li>
    <li>Best Passes - Find the best passes for a satellite based on the currently selected sensor.</li>
  </ul>`,this.searchStrCache_=null}}const ct=new rt;var dt=i(6683);const ut=i.p+"../img/constellation.png",gt=i.p+"../img/planetarium.png";class pt extends u.S{constructor(){super(pt.PLUGIN_NAME),this.bottomIconElementName="menu-planetarium",this.bottomIconLabel="Planetarium View",this.bottomIconImg=gt,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=l.d.getRenderer(),i=l.d.getUiManager();if(this.isMenuButtonActive){if(!this.verifySensorSelected())return;l.d.getMainCamera().cameraType=H.A.PLANETARIUM;try{(0,n.gE)("cspocAllSensor").style.display="none",(0,n.gE)("mwAllSensor").style.display="none",(0,n.gE)("mdAllSensor").style.display="none",(0,n.gE)("esocAllSensor").style.display="none",(0,n.gE)("llAllSensor").style.display="none",(0,n.gE)("rusAllSensor").style.display="none",(0,n.gE)("prcAllSensor").style.display="none"}catch(e){}dt.b.change("planetarium"),l.d.getCatalogManager().isStarManagerLoaded&&l.d.getStarManager().clearConstellations(),null===(e=l.d.getPlugin(ht))||void 0===e||e.setBottomIconToUnselected()}else l.d.getMainCamera().isPanReset=!0,l.d.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,t.glInit(),i.hideSideMenus(),l.d.getOrbitManager().clearInViewOrbit(),l.d.getMainCamera().cameraType=H.A.DEFAULT}}addJs(){super.addJs(),l.d.register({event:o.QY.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,n.gE)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,n.gE)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}pt.PLUGIN_NAME="Planetarium";class ht extends u.S{constructor(){super(ht.PLUGIN_NAME),this.bottomIconElementName="menu-astronomy",this.bottomIconLabel="Astronomy View",this.bottomIconImg=ut,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconCallback=()=>{var e;const t=l.d.getCatalogManager(),i=l.d.getOrbitManager(),a=l.d.getRenderer(),s=l.d.getUiManager();if(this.isMenuButtonActive){if(!this.verifySensorSelected())return;t.isStarManagerLoaded&&l.d.getStarManager().drawAllConstellations(),i.clearInViewOrbit(),l.d.getMainCamera().cameraType=H.A.ASTRONOMY,dt.b.change("astronomy"),null===(e=l.d.getPlugin(pt))||void 0===e||e.setBottomIconToUnselected()}else l.d.getMainCamera().isPanReset=!0,l.d.getMainCamera().isLocalRotateReset=!0,settingsManager.fieldOfView=.6,a.glInit(),s.hideSideMenus(),l.d.getMainCamera().cameraType=H.A.DEFAULT,dt.b.change("default"),t.isStarManagerLoaded&&l.d.getStarManager().clearConstellations(),(0,n.gE)(this.bottomIconElementName).classList.remove("bmenu-item-selected")}}addJs(){super.addJs(),l.d.register({event:o.QY.setSensor,cbName:this.PLUGIN_NAME,cb:e=>{e?((0,n.gE)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1):((0,n.gE)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0)}})}}ht.PLUGIN_NAME="Astronomy";var mt=i(233);const vt=i.p+"../img/breakup.png";var bt=i(2321),ft=i(8597),St=i(7339);class Et extends u.S{constructor(){super(Et.PLUGIN_NAME),this.dependencies=[g.A.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.bottomIconElementName="menu-breakup",this.bottomIconLabel="Create Breakup",this.bottomIconImg=vt,this.maxDifApogeeVsPerigee_=1e3,this.bottomIconCallback=()=>{const e=this.selectSatManager_.getSelectedSat(o.Z.EXTRA_ONLY);if(!(null==e?void 0:e.isSatellite()))return;const t=e;if((null==t?void 0:t.apogee)-(null==t?void 0:t.perigee)>this.maxDifApogeeVsPerigee_)return f.J.warn("Cannot create a breakup for non-circular orbits. Working on a fix."),this.closeSideMenu(),void this.setBottomIconToDisabled();this.updateSccNumInMenu_()},this.dragOptions={isDraggable:!0},this.sideMenuElementName="breakup-menu",this.sideMenuElementHtml=l.d.html`
  <div id="breakup-menu" class="side-menu-parent start-hidden text-select">
    <div id="breakup-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Breakup Simulator</h5>
        <form id="breakup" class="col s12">
          <div class="input-field col s12">
            <input disabled value="00005" id="hc-scc" type="text" />
            <label for="disabled" class="active">Satellite SCC#</label>
          </div>
          <div class="input-field col s12">
            <select id="hc-inc">
              <option value="0">0 Degrees</option>
              <option value="0.1">0.1 Degrees</option>
              <option value="0.2" selected>0.2 Degrees</option>
              <option value="0.3">0.3 Degrees</option>
              <option value="0.4">0.4 Degrees</option>
              <option value="0.5">0.5 Degrees</option>
              <option value="0.6">0.6 Degrees</option>
              <option value="0.7">0.7 Degrees</option>
              <option value="0.8">0.8 Degrees</option>
              <option value="0.9">0.9 Degrees</option>
              <option value="1">1 Degrees</option>
            </select>
            <label>Inclination Variation</label>
          </div>
          <div class="input-field col s12">
            <select id="hc-per">
              <option value="0">0 Percent</option>
              <option value="0.005">0.5 Percent</option>
              <option value="0.01">1 Percent</option>
              <option value="0.015">1.5 Percent</option>
              <option value="0.02" selected>2 Percent</option>
              <option value="0.025">2.5 Percent</option>
              <option value="0.03">3 Percent</option>
              <option value="0.035">3.5 Percent</option>
              <option value="0.04">4 Percent</option>
              <option value="0.045">4.5 Percent</option>
              <option value="0.05">5 Percent</option>
            </select>
            <label>Period Variation</label>
          </div>
          <div class="input-field col s12">
            <select id="hc-raan">
            <option value="0">0 Degrees</option>
              <option value="0.1">0.1 Degrees</option>
              <option value="0.2" selected>0.2 Degrees</option>
              <option value="0.3">0.3 Degrees</option>
              <option value="0.4">0.4 Degrees</option>
              <option value="0.5">0.5 Degrees</option>
              <option value="0.6">0.6 Degrees</option>
              <option value="0.7">0.7 Degrees</option>
              <option value="0.8">0.8 Degrees</option>
              <option value="0.9">0.9 Degrees</option>
              <option value="1">1 Degrees</option>
            </select>
            <label>Right Ascension Variation</label>
          </div>
          <div class="input-field col s12">
            <select id="hc-count">
              <option value="10">10</option>
              <option value="25" selected>25</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
            </select>
            <label>Pieces</label>
          </div>
          <div class="center-align">
            <button class="btn btn-ui waves-effect waves-light" type="submit" name="action">Create Breakup &#9658;</button>
          </div>
        </form>
      </div>
    </div>
  </div>`,this.helpTitle="Breakup Menu",this.helpBody=l.d.html`The Breakup Menu is a tool for simulating the breakup of a satellite.
  <br><br>
  By modifying duplicating and modifying a satellite's orbit we can model the breakup of a satellite.
  After selecting a satellite and opening the menu, the user can select:
  <ul style="margin-left: 40px;">
    <li>Inclination Variation</li>
    <li>RAAN Variation</li>
    <li>Period Variation</li>
    <li>Number of Breakup Pieces</li>
  </ul>
  The larger the variation the bigger the spread in the simulated breakup. The default variations are sufficient to simulate a breakup with a reasonable spread.`,this.selectSatManager_=l.d.getPlugin(g.A)}addHtml(){super.addHtml(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.gE)("breakup").addEventListener("submit",e=>{e.preventDefault(),(0,b.Cs)(()=>this.onSubmit_())})}}),l.d.register({event:o.QY.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.isSatellite())?(null==e?void 0:e.apogee)-(null==e?void 0:e.perigee)>this.maxDifApogeeVsPerigee_?(this.isMenuButtonActive&&(this.closeSideMenu(),f.J.warn("Cannot create a breakup for non-circular orbits. Working on a fix.")),this.setBottomIconToUnselected(),this.setBottomIconToDisabled()):(this.setBottomIconToEnabled(),this.isMenuButtonActive&&this.updateSccNumInMenu_()):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToUnselected(),this.setBottomIconToDisabled())}})}updateSccNumInMenu_(){if(!this.isMenuButtonActive)return;const e=this.selectSatManager_.getSelectedSat(o.Z.EXTRA_ONLY);(null==e?void 0:e.isSatellite())&&((0,n.gE)("hc-scc").value=e.sccNum)}onSubmit_(){const{simulationTimeObj:e}=l.d.getTimeManager(),t=l.d.getCatalogManager(),{satId:i,breakupCount:a,rascVariation:s,incVariation:n,meanmoVariation:o}=Et.getFormData_(t),r=t.getSat(i),c=r,d=it.h.calculateTimeVariables(e).gmst,u=(0,M.tc)(r.position,d),g=u.lat,p=u.lon,h=it.h.getDirection(r,e);"Error"===h&&f.J.warn("Cannot calculate direction of satellite. Try again later.");const m=ft.V.currentEpoch(e);if(r.tle1=r.tle1.substring(0,18)+m[0]+m[1]+r.tle1.substring(32),l.d.getMainCamera().isAutoPitchYawToTarget=!1,r.apogee-r.perigee>this.maxDifApogeeVsPerigee_)return void f.J.warn("Cannot create a breakup for non-circular orbits. Working on a fix.");const v=r.apogee-r.perigee<300?0:u.alt;let b=new bt.f(r,g,p,h,e,v).rotateOrbitToLatLon();const S=b[0],E=b[1],y=new M.mJ(Object.assign(Object.assign({},r),{id:i,tle1:S,tle2:E,active:!0}));t.objectCache[i]=y,t.satCruncher.postMessage({typ:St.XY.SAT_EDIT,id:i,tle1:S,tle2:E});const w=l.d.getOrbitManager();w.changeOrbitBufferData(i,S,E);const A=15e-5,k=r.eccentricity;let C=0;for(let i=0;i<=4&&!(C>=a);i++){const l=M.e2.convert6DigitToA5((mt.v.ANALYST_START_ID+C).toString()),d=t.sccNum2Id(l);t.getObject(d);let m=c;const v=-s/2+s*(i/4),b=r.apogee-r.perigee<300?0:u.alt;let S=new bt.f(m,g,p,h,e,b,v).rotateOrbitToLatLon();if("Error"===S[0]&&(S=new bt.f(m,g,p,h,new Date(e.getTime()+1),b,v).rotateOrbitToLatLon(),"Error"===S[0]))return void f.J.error(new Error(S[1]),"breakup.ts","Error creating breakup!");let y=S[0],L=S[1];for(;C<(i+1)*a/4;C++){let i=parseFloat(E.substring(8,16));i=i+Math.random()*n*2-n;const a=i.toFixed(4).padStart(8,"0");if(8!==a.length)throw new Error(`Inclination length is not 8 - ${a} - ${E}`);m.eccentricity=k,m.eccentricity+=Math.random()*A*2-A;let s=parseFloat(L.substring(52,62));s=s+Math.random()*o*2-o;const l=s.toFixed(8).padStart(11,"0");if(11!==l.length)throw new Error(`meanmo length is not 11 - ${l} - ${L}`);const r=M.e2.convert6DigitToA5((mt.v.ANALYST_START_ID+C).toString()),c=t.sccNum2Id(r);if(y=`1 ${r}`+y.substring(7),L=`2 ${r} ${a} ${L.substring(17,52)}${l}${L.substring(63)}`,69!==y.length)throw new Error(`Invalid tle1: length is not 69 - ${y}`);if(69!==L.length)throw new Error(`Invalid tle1: length is not 69 - ${L}`);let d;try{d=new M.mJ(Object.assign(Object.assign({},t.objectCache[c]),{id:c,tle1:y,tle2:L,active:!0}))}catch(e){return void f.J.error(e,"breakup.ts","Error creating breakup!")}it.h.altitudeCheck(d.satrec,e)>1?(t.objectCache[c]=d,t.satCruncher.postMessage({typ:St.XY.SAT_EDIT,id:c,active:!0,tle1:y,tle2:L}),w.changeOrbitBufferData(c,y,L)):f.J.warn("Breakup Generator Failed")}}a>settingsManager.searchLimit&&(settingsManager.searchLimit=a),l.d.getUiManager().doSearch(`${r.sccNum},Analyst`)}static getFormData_(e){const t=e.sccNum2Id((0,n.gE)("hc-scc").value),i=parseFloat((0,n.gE)("hc-per").value),a=parseFloat((0,n.gE)("hc-inc").value),s=parseFloat((0,n.gE)("hc-raan").value);return{satId:t,breakupCount:parseInt((0,n.gE)("hc-count").value),rascVariation:s,incVariation:a,meanmoVariation:i}}}Et.PLUGIN_NAME="Breakup";class Mt{static getColors(e){let t,i;switch(e){case"Top Secret//SCI":t="#fce93a",i="black";break;case"Top Secret":t="#ff8c00",i="black";break;case"Secret":t="#ff0000",i="white";break;case"Confidential":t="#0033a0",i="white";break;case"CUI":t="#512b85",i="white";break;case"Unclassified":t="#007a33",i="white";break;default:throw new Error(`Invalid classification: ${e}`)}return{backgroundColor:t,color:i}}static isValidClassification(e){return["Unclassified","Confidential","CUI","Secret","Top Secret","Top Secret//SCI"].includes(e)}}class yt extends u.S{constructor(){super("Classification"),this.isClassificationContainerLoaded_=!1,this.isExpanded_=!1,this.containerDomId="classification-container",this.textStringDomId="classification-string",this.containerHeight=20}init(){super.init(),this.classificationString_=settingsManager.classificationStr||""}updateString(e=this.classificationString_,t="#ffffff",i="#000000"){this.isClassificationContainerLoaded_||this.createContainer_(),""===e?((0,n.gE)(this.containerDomId).style.display="none",this.updateTopMenuHeight_(!1)):((0,n.gE)(this.containerDomId).style.display="flex",this.updateTopMenuHeight_(!0)),(0,n.gE)(this.textStringDomId).innerHTML=e;const a=(0,n.gE)(this.containerDomId);if(a.style.fontWeight="500",Mt.isValidClassification(e)){const a=Mt.getColors(e);t=a.backgroundColor,i=a.color}a.style.backgroundColor=t,a.style.color=i,this.classificationString_=e}addHtml(){super.addHtml(),l.d.register({event:o.QY.uiManagerInit,cbName:this.PLUGIN_NAME,cb:this.uiManagerInit_.bind(this)})}createContainer_(){const e=document.createElement("div");e.innerHTML=l.d.html`<span id="${this.textStringDomId}"></span>`,e.id=this.containerDomId,e.style.cssText=`\n      height: ${this.containerHeight}px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      `,l.d.containerRoot.insertBefore(e,l.d.containerRoot.firstChild),this.isClassificationContainerLoaded_=!0}uiManagerInit_(){""!==settingsManager.classificationStr?(this.createContainer_(),this.updateString()):f.J.log("Classification string is empty so not loading classification bar")}updateTopMenuHeight_(e){if(this.isExpanded_===e)return;if(!l.d.getPlugin(et.p))return;let t=parseInt(document.documentElement.style.getPropertyValue("--top-menu-height").replace("px",""));isNaN(t)&&(t=0),document.documentElement.style.setProperty("--top-menu-height",t+(e?this.containerHeight:-this.containerHeight)+"px"),this.isExpanded_=e}}new yt;const wt=i.p+"../img/socrates.png";class At extends u.S{constructor(){super(At.PLUGIN_NAME),this.collisionDataSrc="./tle/SOCRATES.json",this.selectSatIdOnCruncher_=null,this.collisionList_=[],this.bottomIconElementName="menu-satellite-collision",this.bottomIconImg=wt,this.bottomIconLabel="Collisions",this.sideMenuElementName="socrates-menu",this.sideMenuElementHtml=l.d.html`
  <div id="socrates-menu" class="side-menu-parent start-hidden text-select">
    <div id="socrates-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Possible Collisions</h5>
        <table id="socrates-table" class="center-align"></table>
      </div>
    </div>
  </div>`,this.helpTitle="Collisions Menu",this.helpBody=l.d.html`The Collisions Menu shows satellites with a high probability of collision.
  <br><br>
  Clicking on a row will select the two satellites involved in the collision and change the time to the time of the collision.`,this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:650},this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.parseCollisionData_()}}addJs(){super.addJs(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:this.uiManagerFinal_.bind(this)}),l.d.register({event:o.QY.onCruncherMessage,cbName:this.PLUGIN_NAME,cb:()=>{var e;null!==this.selectSatIdOnCruncher_&&(null===(e=l.d.getPlugin(g.A))||void 0===e||e.selectSat(this.selectSatIdOnCruncher_),this.selectSatIdOnCruncher_=null)}})}uiManagerFinal_(){(0,n.gE)(this.sideMenuElementName).addEventListener("click",e=>{const t=e.target.parentElement;t.classList.contains("socrates-object")&&(0,b.Cs)(()=>{var e;const i=null===(e=t.dataset)||void 0===e?void 0:e.row;null!==i&&this.eventClicked_(parseInt(i))})})}parseCollisionData_(){0===this.collisionList_.length&&fetch(this.collisionDataSrc).then(e=>{e.json().then(e=>{this.collisionList_=e,this.createTable_(),0===this.collisionList_.length&&f.J.warn("No collisions data found!")})})}eventClicked_(e){const t=new Date;l.d.getTimeManager().changeStaticOffset(new Date(this.collisionList_[e].toca).getTime()-t.getTime()-3e4),l.d.getMainCamera().isAutoPitchYawToTarget=!1;const i=this.collisionList_[e].sat1.padStart(5,"0"),a=this.collisionList_[e].sat2.padStart(5,"0");l.d.getUiManager().doSearch(`${i},${a}`);const s=l.d.getCatalogManager();this.selectSatIdOnCruncher_=s.sccNum2Id(parseInt(i))}createTable_(){try{const e=(0,n.gE)("socrates-table");e.innerHTML="",At.createHeaders_(e),this.createBody_(e)}catch(e){f.J.warn("Error processing SOCRATES data!")}}createBody_(e){for(let t=0;t<this.collisionList_.length;t++)this.createRow_(e,t)}static createHeaders_(e){let t=e.insertRow();const i=["TOCA","#1","#2","Max Prob","Min Range (km)","Rel Speed (km/s)"];for(const e of i){const i=t.insertCell();i.appendChild(document.createTextNode(e)),i.setAttribute("style","text-decoration: underline")}}createRow_(e,t){const i=e.insertRow();return i.setAttribute("class","socrates-object link"),i.setAttribute("data-row",t.toString()),At.createCell_(i,this.collisionList_[t].toca.slice(0,19).replace("T"," ")),At.createCell_(i,this.collisionList_[t].sat1),At.createCell_(i,this.collisionList_[t].sat2),At.createCell_(i,this.collisionList_[t].maxProb.toFixed(3)),At.createCell_(i,this.collisionList_[t].minRng.toString()),At.createCell_(i,this.collisionList_[t].relSpeed.toFixed(2)),i}static createCell_(e,t){e.insertCell().appendChild(document.createTextNode(t))}}At.PLUGIN_NAME="collisions";const kt=()=>{f.J.info("Cruncher failed to meet requirement after two tries!")},Ct=(e,t,i,a=kt,s=0)=>{e.addEventListener("message",n=>{i(n.data)?t():s<5?Ct(e,t,i,a,s++):a()},{once:!0})},Lt=i.p+"../img/colors.png";class Tt extends u.S{constructor(){super(Tt.PLUGIN_NAME),this.bottomIconImg=Lt,this.bottomIconElementName="menu-color-scheme",this.bottomIconLabel="Color Schemes",this.sideMenuElementName="color-scheme-menu",this.sideMenuElementHtml=l.d.html`
  <div id="color-scheme-menu" class="side-menu-parent start-hidden text-select">
    <div id="colors-menu" class="side-menu">
      <ul>
        <h5 class="center-align">Color Schemes</h5>
        <li class="divider"></li>
        <li class="menu-selectable" data-color="default">Object Type</li>
        <li class="menu-selectable" data-color="sunlight">Sunlight</li>
        <li class="menu-selectable" data-color="velocity">Velocity</li>
        <li class="menu-selectable" data-color="neighbors">Orbit Density</li>
        <li class="menu-selectable" data-color="confidence">Confidence Level</li>
        <li class="menu-selectable" data-color="rcs">Radar Cross Section</li>
        <li class="menu-selectable" data-color="smallsats">Small Satellites</li>
        <li class="menu-selectable" data-color="countries">Countries</li>
        <li class="menu-selectable" data-color="near-earth">Near Earth</li>
        <li class="menu-selectable" data-color="deep-space">Deep Space</li>
        <li class="menu-selectable" data-color="elset-age">Elset Age</li>
        <li class="menu-selectable" data-color="lost-objects">Lost Objects</li>
      </ul>
    </div>
  </div>`,this.helpTitle="Colors Menu",this.helpBody=l.d.html`The Colors Menu is a place to change the color theme used to render the objects.
<br><br>
The various themes can change the colors based on the objects' orbits, objects' characteristics, or the objects' relation to sun and/or earth.
`,this.rmbCallback=e=>{switch(e){case"colors-default-rmb":Tt.colorsMenuClick("default");break;case"colors-confidence-rmb":Tt.colorsMenuClick("confidence");break;case"colors-rcs-rmb":Tt.colorsMenuClick("rcs");break;case"colors-density-rmb":Tt.colorsMenuClick("neighbors");break;case"colors-sunlight-rmb":Tt.colorsMenuClick("sunlight");break;case"colors-country-rmb":Tt.colorsMenuClick("countries");break;case"colors-velocity-rmb":Tt.colorsMenuClick("velocity");break;case"colors-ageOfElset-rmb":Tt.colorsMenuClick("elset-age")}},this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.gE)("colors-menu").querySelectorAll("li").forEach(e=>{e.addEventListener("click",function(){const e=this.dataset.color;Tt.colorsMenuClick(e)})})}})}}Tt.PLUGIN_NAME="Color Menu",Tt.colorsMenuClick=e=>{var t;const i=l.d.getCatalogManager(),a=l.d.getColorSchemeManager(),s=l.d.getUiManager();switch(null===(t=l.d.getPlugin(g.A))||void 0===t||t.selectSat(-1),"sunlight"!==e&&i.satCruncher.postMessage({isSunlightView:!1,typ:St.XY.SUNLIGHT_VIEW}),e){case"default":dt.b.change("default"),a.setColorScheme(a.default,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"confidence":dt.b.change("confidence"),a.setColorScheme(a.confidence,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"velocity":dt.b.change("velocity"),a.setColorScheme(a.velocity,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"sunlight":i.satCruncher.postMessage({isSunlightView:!0,typ:St.XY.SUNLIGHT_VIEW}),dt.b.change("sunlight"),s.colorSchemeChangeAlert(a.sunlight),Ct(i.satCruncher,()=>{a.setColorScheme(a.sunlight,!0)},e=>e.satInSun);break;case"near-earth":dt.b.change("near"),a.setColorScheme(a.leo,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"deep-space":dt.b.change("deep"),a.setColorScheme(a.geo,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"elset-age":(0,b.Cs)(()=>{dt.b.change("ageOfElset"),a.setColorScheme(a.ageOfElset,!0),s.colorSchemeChangeAlert(a.currentColorScheme)});break;case"lost-objects":(0,n.gE)("search").value="",(0,b.Cs)(()=>{settingsManager.lostSatStr="",a.setColorScheme(a.lostobjects,!0),(0,n.gE)("search").value=settingsManager.lostSatStr,s.colorSchemeChangeAlert(a.currentColorScheme),s.doSearch((0,n.gE)("search").value)});break;case"rcs":dt.b.change("rcs"),a.setColorScheme(a.rcs,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"smallsats":dt.b.change("small"),a.setColorScheme(a.smallsats,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"neighbors":dt.b.change("neighbors"),a.setColorScheme(a.neighbors,!0),s.colorSchemeChangeAlert(a.currentColorScheme);break;case"countries":dt.b.change("countries"),null!==l.d.getGroupsManager().selectedGroup?a.setColorScheme(a.groupCountries,!0):a.setColorScheme(a.countries,!0),s.colorSchemeChangeAlert(a.currentColorScheme)}l.d.getUiManager().hideSideMenus()};const Nt=new Tt;var xt=i(9693),It=i(1956);const _t=i.p+"../img/about.png";var Pt,Ot,Rt=i(6979),Dt=i(2409),Ut=function(e,t,i,a){return new(i||(i=Promise))(function(s,n){function o(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(o,l)}r((a=a.apply(e,t||[])).next())})};!function(e){e.SPHERICAL="spherical",e.RECTANGULAR="rectangular"}(Ot||(Ot={}));class Ft extends u.S{constructor(){super(Pt.PLUGIN_NAME),this.minimumSizeValue="0.0001",this.dependencies=[g.A.PLUGIN_NAME],this.referenceTime=new Date(0),this.orientation=Ot.SPHERICAL,this.uVal=-1,this.vVal=-1,this.wVal=-1,this.rVal=-1,this.formPrefix_="ds",this.bottomIconElementName="debris-screening-icon",this.bottomIconImg=_t,this.bottomIconLabel=this.PLUGIN_NAME,this.sideMenuElementName="debris-screening-menu",this.sideMenuElementHtml=l.d.html`
<div id="${this.sideMenuElementName}" class="side-menu-parent start-hidden text-select">
	<div id="${this.sideMenuElementName}-content" class="side-menu">
		<div class="row">
			<h5 class="center-align">${this.PLUGIN_NAME}</h5>
			<form id="${this.sideMenuElementName}-form" class="col s12">
				<div class="input-field col s12">
					<label for="${this.formPrefix_}-scc">Primary Object SCC#</label>
					<input value="" id="${this.formPrefix_}-scc" placeholder="NORAD ID" maxlength="5" type="text" pattern="[0-9]{5}" />
					<div id="${this.formPrefix_}-scc-validation" class="error-message">Could not find an object with that NORAD ID</div>
				</div>

				<div class="input-field col s12">
					<label style="font-size:0.8rem">Search Volume</label>
					<br/>
					<select id="${this.formPrefix_}-orientation">
						<option value="spherical" selected>Spherical</option>
						<option value="rectangular">Rectangular</option>
					</select>
				</div>

				<div id="spherical-options">
					<div class="input-field col s12">
						<label style="font-size:0.8rem">Radial</label>
						<br/>
						<div style="width: 34%; float:left;">
							<input id="${this.formPrefix_}-r" value="1" type="number" min="${this.minimumSizeValue}" step="any"/>
						</div>

						<div style="width: 64%; float:right; text-align: left;">
							<label style="line-height:3rem; font-size:1rem; position:absolute; left: auto; bottom: 0;">Kilometer(s)</label>
						</div>
					</div>
				</div>

				<div id="rectangular-options" style="display:none;">
					<div class="input-field col s12">
						<label style="font-size:0.8rem">Radial</label>
						<br/>
						<div style="width: 34%; float:left;">
							<input id="${this.formPrefix_}-u" value="1" type="number" min="${this.minimumSizeValue}" step="any"/>
						</div>

						<div style="width: 64%; float:right; text-align: left;">
							<label style="line-height:3rem; font-size:1rem; position:absolute; left: auto; bottom: 0;">Kilometer(s)</label>
						</div>
						</div>

						<div class="input-field col s12">
						<label style="font-size:0.8rem">In-track</label>
						<br/>
						<div style="width: 34%; float:left;">
							<input id="${this.formPrefix_}-v" value="1" type="number" min="${this.minimumSizeValue}" step="any"/>              
						</div>

						<div style="width: 64%; float:right; text-align: left;">
							<label style="line-height:3rem; font-size:1rem; position:absolute; left: auto; bottom: 0;">Kilometer(s)</label>
						</div>
					</div>

					<div class="input-field col s12">
						<label style="font-size:0.8rem">Cross-track</label>
						<br/>
						<div style="width: 34%; float:left;">
							<input id="${this.formPrefix_}-w" value="1" type="number" min="${this.minimumSizeValue}" step="any"/>              
						</div>

						<div style="width: 64%; float:right; text-align: left;">
							<label style="line-height:3rem; font-size:1rem; position:absolute; left: auto; bottom: 0;">Kilometer(s)</label>
						</div>
					</div>
				</div>

				<div class="input-field col s12">
                    <label for="ds-time-start-input" style="font-size:0.8rem;">Start Time (UTC)</label>
					<br/>
					<div id="ds-time-start-box">
						<input type="text" id="ds-time-start-input" />
					</div>
				</div>

				<div class="input-field col s12">
                    <label for="ds-time-end-input" style="font-size:0.8rem;">End Time (UTC)</label>
					<br/>
					<div id="ds-time-end-box">
						<input type="text" id="ds-time-end-input" />
					</div>
				</div>

				<div class="input-field col s12">
					<label style="font-size:0.8rem;">Assessment Interval</label>
					<br/>
					<div style="width: 34%; float:left;">
						<input id="${this.formPrefix_}-timestep-value" value="10" type="number" min="0.01" step="any" />
					</div>

					<div style="width: 64%; float:right;">
						<select id="${this.formPrefix_}-timestep-unit">              
							<option value="millis">Millisecond(s)</option>
							<option value="second" selected>Second(s)</option>
							<option value="minute">Minute(s)</option>
						</select>
					</div>
					<br />
					<label style="position: relative; color: red !important; left: 0px; font-size:0.65rem;">Note: Smaller timesteps and very large date ranges can drastically increase runtime</label>
				</div>

				<div class="input-field col s12">
                    <label for="ds-search-options-input" style="font-size:0.8rem;">Search For</label>
					<br/>
					<div id="ds-search-options-box">
						<input type="checkbox" checked id="ds-search-options-satellites" style="position: relative; pointer-events: all; opacity: 100; font-size:0.8rem;">
						<label for="ds-search-options-satellites" style="font-size:0.8rem;">Satellites</label><br><br>
						
						<input type="checkbox" checked id="ds-search-options-debris" style="position: relative; pointer-events: all; opacity: 100; font-size:0.8rem;">
						<label for="ds-search-options-debris" style="font-size:0.8rem;">Debris</label><br><br>
						
						<input type="checkbox" checked id="ds-search-options-rocket-body" style="position: relative; pointer-events: all; opacity: 100; font-size:0.8rem;">
						<label for="ds-search-options-rocket-body" style="font-size:0.8rem;">Rocket Body</label><br><br>
					</div>
				</div>
				
				<div class="row">
					<div class="center-align">
						<button id="${this.sideMenuElementName}-vis" class="btn btn-ui waves-effect waves-light">Draw Search Volume &#9658;</button>
					</div>
				</div>
				<div class="row">
					<div class="center-align">
						<button id="${this.sideMenuElementName}-clear-vis" class="btn btn-ui waves-effect waves-light">Clear Search Volume &#9658;</button>
					</div>
				</div>
				<div class="row">
					<div class="center-align">
						<button id="conjunctor-submit-button" class="btn btn-ui waves-effect waves-light" type="submit" name="action" disabled>Screen for Conjunctors &#9658;</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
		`,this.helpTitle="Debris Screening",this.helpBody=l.d.html`The Debris Screening menu is used to generate a list of debris objects that could potentially be seen by a satellite. The list is generated by calculating the orbital parameters of the debris objects and comparing them to the orbital parameters of the satellite. The user can choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to filter the list by the debris object's size and the debris object's magnitude. The user can also choose to generate the list using either the TLE or the SGP4 propagator. The user can also choose to filter the list by the debris object's size and the debris object's magnitude.`,this.helpImage=l.d.html`<img src="${_t}" />`,this.selectSatManager_=l.d.getPlugin(g.A),l.d.register({event:o.QY.uiManagerFinal,cbName:"Pinned Object Manager",cb:this.addListeners.bind(this)})}addJs(){super.addJs();const e=this;function t(){const t=e.getStartDate(),i=60*t.getTimezoneOffset()*1e3,a=new Date(t.getTime()+i);Dt("#ds-time-end-input").datetimepicker("option","minDate",a)}function i(e,t){Dt(e).datetimepicker("setDate",t).datetimepicker("setTime",t)}function a(e){const t=new Date;Dt(e).datetimepicker({dateFormat:"yy-mm-dd",timeFormat:"HH:mm:ss",timezone:"+0000",showTimepicker:!0,addSliderAccess:!1,timeInput:!0,showHour:!1,showMinute:!1,showSecond:!1,showButtonPanel:!0,changeMonth:!0,changeYear:!0}).datetimepicker("setDate",t)}l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var s,o,l;(0,n.gE)(`${this.sideMenuElementName}-form`).addEventListener("submit",e=>{e.preventDefault(),this.onFormSubmit()}),null===(s=(0,n.gE)(`${this.sideMenuElementName}-vis`))||void 0===s||s.addEventListener("click",e=>{e.preventDefault(),this.onVisClick()}),null===(o=(0,n.gE)(`${this.sideMenuElementName}-clear-vis`))||void 0===o||o.addEventListener("click",e=>{e.preventDefault(),Pt.onClearVisClick()}),null===(l=(0,n.gE)(`${this.formPrefix_}-scc`))||void 0===l||l.addEventListener("input",this.handleInputChange.bind(this)),a("#ds-time-start-input"),a("#ds-time-end-input"),t(),Dt("#ds-time-start-input").datepicker().on("blur",function(){const a=e.getStartDate();let s=e.getEndDate();s&&a>s&&i("#ds-time-end-input",a),t()}),Dt("#ds-time-end-input").datepicker().on("blur",function(){const t=e.getStartDate();t>e.getEndDate()&&!e.preventRecursion&&(e.preventRecursion=!0,i("#ds-time-end-input",new Date(t.getTime()+1e3)),e.preventRecursion=!1)})}}),l.d.register({event:o.QY.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{(null==e?void 0:e.isSatellite())&&((0,n.gE)(`${this.formPrefix_}-scc`).value=e.sccNum,(0,n.gE)("conjunctor-submit-button").disabled=!1)}}),l.d.register({event:o.QY.hideSideMenus,cbName:this.PLUGIN_NAME,cb:()=>{Pt.onClearVisClick()}})}getStartDate(){return Dt("#ds-time-start-input").datepicker("getDate")}getEndDate(){return Dt("#ds-time-end-input").datepicker("getDate")}handleInputChange(){const e=l.d.getCatalogManager(),t=(0,n.gE)(`${this.formPrefix_}-scc`),i=(0,n.gE)("conjunctor-submit-button");if(""!=t.value&&(t.value=t.value.replace(/[^0-9]/g,"").slice(0,5),5===t.value.length)){const a=(0,n.gE)(`${this.formPrefix_}-scc-validation`),s=e.sccNum2Sat(parseInt(t.value));if(null!=s){if(s.active){if(this.previousInput==t.value)return;return i.disabled=!1,a.style.display="none",this.selectSatManager_.selectSat(s.id,!1),void(this.previousInput=t.value)}return a.textContent="No TLE exists for current simulation time or prior",a.style.display="block",void(this.previousInput=t.value)}a.textContent="Could not find an object with that NORAD ID",a.style.display="block"}this.previousInput=t.value,i.disabled=!0,this.selectSatManager_.selectSatReset_()}addListeners(){const e=(0,n.gE)(`${this.formPrefix_}-orientation`);e.addEventListener("change",function(){e.value==Ot.SPHERICAL?((0,n.gE)("rectangular-options").style.display="none",(0,n.gE)("spherical-options").style.display="block"):e.value==Ot.RECTANGULAR&&((0,n.gE)("rectangular-options").style.display="block",(0,n.gE)("spherical-options").style.display="none"),Pt.showVis&&this.onVisClick()}.bind(this))}onVisClick(){Pt.showVis=!0;const e=(0,n.gE)(`${this.formPrefix_}-orientation`).value;if(e==Ot.RECTANGULAR){const e=parseFloat((0,n.gE)(`${this.formPrefix_}-u`).value),t=parseFloat((0,n.gE)(`${this.formPrefix_}-v`).value),i=parseFloat((0,n.gE)(`${this.formPrefix_}-w`).value);l.d.getScene().searchBox.setCubeSize(e,t,i),l.d.getScene().searchSphere.setSphereSize(0)}if(e==Ot.SPHERICAL){const e=parseFloat((0,n.gE)(`${this.formPrefix_}-r`).value);l.d.getScene().searchSphere.setSphereSize(e),l.d.getScene().searchBox.setCubeSize(0,0,0)}}static onClearVisClick(){Pt.showVis=!1,l.d.getScene().searchBox.setCubeSize(0,0,0),l.d.getScene().searchSphere.setSphereSize(0)}getTimestepValue(){const e=parseFloat((0,n.gE)(`${this.formPrefix_}-timestep-value`).value);let t=-1;switch((0,n.gE)(`${this.formPrefix_}-timestep-unit`).value){case"millis":t=1;break;case"second":t=1e3;break;case"minute":t=6e4;break;case"hour":t=36e5;break;default:console.error("Invalid timestep unit for collision analysis")}return e*t}onFormSubmit(){return Ut(this,void 0,void 0,function*(){if((0,n.gE)("conjunctor-submit-button").disabled)return;Rt.e.SetStatus("Conj assessment started",1);const e=(0,n.gE)("loading-screen",!0);let t;e.style.transition="opacity 0.2s ease-in-out",e.style.display="flex",e.style.opacity="1";const i=this.getTimestepValue(),a=this.getStartDate(),s=this.getEndDate(),o=(0,n.gE)(`${this.formPrefix_}-search-options-satellites`).checked,r=(0,n.gE)(`${this.formPrefix_}-search-options-debris`).checked,c=(0,n.gE)(`${this.formPrefix_}-search-options-rocket-body`).checked;this.orientation=(0,n.gE)(`${this.formPrefix_}-orientation`).value,this.uVal=parseFloat((0,n.gE)(`${this.formPrefix_}-u`).value),this.vVal=parseFloat((0,n.gE)(`${this.formPrefix_}-v`).value),this.wVal=parseFloat((0,n.gE)(`${this.formPrefix_}-w`).value),this.rVal=parseFloat((0,n.gE)(`${this.formPrefix_}-r`).value);const d=l.d.getCatalogManager().sccNum2Sat(parseInt((0,n.gE)(`${this.formPrefix_}-scc`).value));let u=0;this.orientation==Ot.RECTANGULAR&&(u=this.uVal,t=[this.uVal,this.vVal,this.wVal]),this.orientation==Ot.SPHERICAL&&(u=this.rVal,t=[this.rVal]);const g=l.d.getTimeManager(),p=l.d.getTLEManager(),h=new Date(g.simulationTimeObj.getTime());this.referenceTime=new Date(a),yield p.forceDate(this.referenceTime);let m=!0;Rt.e.SetStatus("Conj assessment - Detecting orbit overlap",25);const v=l.d.getCatalogManager().objectCache.filter(e=>{if(e.isDebris()){if(!r)return!1}else if(e.isRocketBody()){if(!c&&e.isRocketBody())return!1}else{if(!e.isSatellite())return!1;if(!o&&e.isSatellite())return!1}if(e.id==d.id||!e.active)return!1;m&&(m=!1);const t=e;return!(t.perigee>d.apogee+u||d.perigee-u>t.apogee)});Rt.e.SetStatus("Conj assessment - Finding collisions",50);const b=yield this.findCollisions(d,v,a,s,i);Rt.e.SetStatus("Conj assessment - Increasing precision",55);const f=[];for(var S=0;S<b.length;S++)f.push(this.findPreciseEvent(b[S],i,Pt.reportingPrecision));Rt.e.SetStatus("Conj assessment - Cleanup",60),this.referenceTime=new Date(0),yield p.forceDate(h),l.d.getUiManager().closeManager.clear(),Rt.e.SetStatus("Conj assessment - Populating results",85),l.d.getUiManager().closeManager.addItems(f),(0,n.FG)(l.d.getUiManager().closeManager.container);const E=l.d.getUiManager().closeManager,M=(0,n.gE)(`${this.formPrefix_}-orientation`).value,y=(0,n.gE)(`${this.formPrefix_}-timestep-value`).value,w=(0,n.gE)(`${this.formPrefix_}-timestep-unit`).value;E.setInfo(d,a,s,M,y,w,t),Rt.e.SetStatus("Conj assessment - Done",100,600),e.style.opacity="0",setTimeout(()=>{e.style.display="none"},200)})}findCollisions(e,t,i,a,s){return Ut(this,void 0,void 0,function*(){let n={};const o=i.getTime()-l.d.getTimeManager().simulationTimeObj.getTime(),r=a.getTime()-i.getTime(),c=Math.ceil(r/s);for(let i=0;i<c;i++){const a=i*s,r=l.d.getTimeManager().getOffsetTimeObj(o+a),c=it.h.calculateTimeVariables(r,e.satrec),d=M.j0.propagate(e.satrec,c.m);Math.abs(r.getTime()-this.referenceTime.getTime())>Pt.tleUpdateInterval&&(this.referenceTime=new Date(r),yield l.d.getTLEManager().forceDate(this.referenceTime));for(let i=0;i<t.length;i++){const a=t[i],s=it.h.calculateTimeVariables(r,a.satrec),o=M.j0.propagate(a.satrec,s.m);if(this.orientation==Ot.RECTANGULAR){const t=It.i.sat2ric({position:d.position,velocity:d.velocity},{position:o.position,velocity:o.velocity});if(Math.abs(t.position[0])<this.uVal&&Math.abs(t.position[1])<this.vVal&&Math.abs(t.position[2])<this.wVal){const t={date:new Date(r),distance:(0,M.FB)(d.position,o.position),primaryObj:e,conjunctor:a,primaryObj_ElsetDate:l.d.getTLEManager().getDateFromElset(e.tle1),conjunctor_ElsetDate:l.d.getTLEManager().getDateFromElset(a.tle1),primaryObj_Src:"Space-Track.org",conjunctor_Src:"Space-Track.org",primaryObjSatrec:JSON.parse(JSON.stringify(e.satrec)),conjunctorSatrec:JSON.parse(JSON.stringify(a.satrec))};n[a.sccNum]||(n[a.sccNum]=[]),n[a.sccNum].push(t)}}if(this.orientation==Ot.SPHERICAL){const t=(0,M.FB)(d.position,o.position);if(t<this.rVal){n[a.sccNum]||(n[a.sccNum]=[]);const i={date:new Date(r),distance:t,primaryObj:e,conjunctor:a,primaryObj_ElsetDate:l.d.getTLEManager().getDateFromElset(e.tle1),conjunctor_ElsetDate:l.d.getTLEManager().getDateFromElset(a.tle1),primaryObj_Src:"Space-Track.org",conjunctor_Src:"Space-Track.org",primaryObjSatrec:JSON.parse(JSON.stringify(e.satrec)),conjunctorSatrec:JSON.parse(JSON.stringify(a.satrec))};n[a.sccNum].push(i)}}}}let d=[];for(let e in n){const t=this.collapseEvents(n[e],s);d=d.concat(t)}return d})}findCollisionWithSatrec(e,t,i,a,s,n,o){let r={};const c=s.getTime()-l.d.getTimeManager().simulationTimeObj.getTime(),d=n.getTime()-s.getTime(),u=Math.ceil(d/o);for(let s=0;s<u;s++){const n=s*o,d=l.d.getTimeManager().getOffsetTimeObj(c+n),u=it.h.calculateTimeVariables(d,i),g=M.j0.propagate(i,u.m),p=it.h.calculateTimeVariables(d,a),h=M.j0.propagate(a,p.m);if(this.orientation==Ot.RECTANGULAR){const s=It.i.sat2ric({position:g.position,velocity:g.velocity},{position:h.position,velocity:h.velocity});if(Math.abs(s.position[0])<this.uVal&&Math.abs(s.position[1])<this.vVal&&Math.abs(s.position[2])<this.wVal){const s={date:new Date(d),distance:(0,M.FB)(g.position,h.position),primaryObj:e,conjunctor:t,primaryObj_ElsetDate:l.d.getTLEManager().getDateFromElset(e.tle1),conjunctor_ElsetDate:l.d.getTLEManager().getDateFromElset(t.tle1),primaryObj_Src:"Space-Track.org",conjunctor_Src:"Space-Track.org",primaryObjSatrec:i,conjunctorSatrec:a};r[t.sccNum]||(r[t.sccNum]=[]),r[t.sccNum].push(s)}}if(this.orientation==Ot.SPHERICAL){const s=(0,M.FB)(g.position,h.position);if(s<this.rVal){r[t.sccNum]||(r[t.sccNum]=[]);const n={date:new Date(d),distance:s,primaryObj:e,conjunctor:t,primaryObj_ElsetDate:l.d.getTLEManager().getDateFromElset(e.tle1),conjunctor_ElsetDate:l.d.getTLEManager().getDateFromElset(t.tle1),primaryObj_Src:"Space-Track.org",conjunctor_Src:"Space-Track.org",primaryObjSatrec:i,conjunctorSatrec:a};r[t.sccNum].push(n)}}}let g=[];for(let e in r){const t=this.collapseEvents(r[e],o);g=g.concat(t)}return g}collapseEvents(e,t){let i=[],a=new Date(0);for(let s=0;s<e.length;s++){let n=e[s];n.date.getTime()<=a.getTime()+t?n.distance<i[i.length-1].distance&&(i[i.length-1].distance=n.distance,i[i.length-1].date=n.date):i.push(n),a=n.date}return i}findPreciseEvent(e,t,i){if(t<=i)return e;var a=null;for(let e=0;e<Pt.orderedTimestepUnits.length;e++)if(t>Pt.orderedTimestepUnits[e]){a=Pt.orderedTimestepUnits[e];break}const s=new Date(e.date.getTime()-Math.ceil(t/a)*a),n=new Date(e.date.getTime()+t);let o=this.findCollisionWithSatrec(e.primaryObj,e.conjunctor,e.primaryObjSatrec,e.conjunctorSatrec,s,n,a);if(1!=o.length)throw new Error("Error finding precise collision");return this.findPreciseEvent(o[0],a,Pt.reportingPrecision)}}Pt=Ft,Ft.PLUGIN_NAME="Conj. Assessment",Ft.showVis=!1,Ft.orderedTimestepUnits=[6e4,1e3,1],Ft.reportingPrecision=Pt.orderedTimestepUnits[1],Ft.tleUpdateInterval=2592e5;var Gt=i(9796);const Bt=i.p+"../img/gps.png";var zt=i(6654),$t=i.n(zt),jt=i(2702);class Vt{static calculateDops(e){let t={pdop:"50.00",hdop:"50.00",gdop:"50.00",vdop:"50.00",tdop:"50.00"},i=e.length;if(i<4)return t;const a=$t().rep([i,4],0);for(let t=1;t<=i;t++){const{az:i,el:s}=e[t-1],n=[Math.cos(s*M.up)*Math.sin(i*M.up),Math.cos(s*M.up)*Math.cos(i*M.up),Math.sin(s*M.up),1];$t().setBlock(a,[t-1,0],[t-1,3],[n])}const s=$t().dot($t().transpose(a),a),n=$t().inv(s),o=Math.sqrt(n[0][0]+n[1][1]+n[2][2]),l=Math.sqrt(n[0][0]+n[1][1]),r=Math.sqrt(n[0][0]+n[1][1]+n[2][2]+n[3][3]),c=Math.sqrt(n[2][2]),d=Math.sqrt(n[3][3]);return t.pdop=(Math.round(100*o)/100).toFixed(2),t.hdop=(Math.round(100*l)/100).toFixed(2),t.gdop=(Math.round(100*r)/100).toFixed(2),t.vdop=(Math.round(100*c)/100).toFixed(2),t.tdop=(Math.round(100*d)/100).toFixed(2),t}static getDops(e,t,i,a,s,n=10){if(void 0===i||void 0===a)return{pdop:"N/A",hdop:"N/A",gdop:"N/A",vdop:"N/A",tdop:"N/A"};null!=s||(s=0);const{gmst:o}=it.h.calculateTimeVariables(e);let l=[];return t.forEach(e=>{const t=(0,M.Xm)({lon:a,lat:i,alt:s},(0,M.yW)(e.position,o)),r={az:t.az,el:t.el};r.el>n&&l.push(r)}),Vt.calculateDops(l)}static updateDopsTable(e){if(!e||0===e.length)throw new Error("No DOPs results found!");let t=(0,n.gE)("dops");if(!t)throw new Error("Table not found!");t.innerHTML="";let i=t.insertRow(),a=i.insertCell();a.appendChild(document.createTextNode("Time"));let s=i.insertCell();s.appendChild(document.createTextNode("HDOP"));let o=i.insertCell();o.appendChild(document.createTextNode("PDOP"));let l=i.insertCell();l.appendChild(document.createTextNode("GDOP"));for(let n of e)i=t.insertRow(),a=i.insertCell(),a.appendChild(document.createTextNode((0,jt.i)(n.time,"isoDateTime",!0))),s=i.insertCell(),s.appendChild(document.createTextNode(n.dops.hdop)),o=i.insertCell(),o.appendChild(document.createTextNode(n.dops.pdop)),l=i.insertCell(),l.appendChild(document.createTextNode(n.dops.gdop))}static getDopsList(e,t,i,a,s,n){let o=[];for(let l=0;l<1440;l++){const r=e(60*l*M.If);let c=Vt.getDops(r,t,i,a,s,n);o.push({time:r,dops:c})}return o}}class Ht extends u.S{constructor(){super(Ht.PLUGIN_NAME),this.bottomIconElementName="menu-dops",this.bottomIconLabel="View DOPs",this.bottomIconImg=Bt,this.bottomIconCallback=()=>{this.isMenuButtonActive&&(0,b.Cs)(Ht.updateSideMenu)},this.helpTitle="Dilution of Precision (DOP) Menu",this.helpBody=l.d.html`The Dilution of Precision (DOP) Menu is used to calculate the Dilution of Precision (DOP) for a given location and elevation mask.
    <br><br>
    HDOP is the Horizontal Dilution of Precision. It is a measure of the accuracy of the horizontal position.
    <br><br>
    PDOP is the Position Dilution of Precision. It is a measure of the accuracy of the position.
    <br><br>
    GDOP is the Geometric Dilution of Precision. It is a measure of the accuracy of the position.
  `,this.sideMenuElementName="dops-menu",this.sideMenuElementHtml=l.d.html`
  <div id="${this.sideMenuElementName}" class="side-menu-parent start-hidden text-select">
    <div id="dops-content" class="side-menu">
      <form id="dops-form">
        <div class="switch row">
          <h5 class="center-align">DOP Table</h5>
          <div class="input-field col s3" data-position="bottom" data-offset="60" data-tooltip="Latitude in Degrees">
            <input value="41" id="dops-lat" type="text">
            <label for="dops-lat" class="active">Latitude</label>
          </div>
          <div class="input-field col s3" data-position="bottom" data-offset="60" data-tooltip="Longitude in Degrees">
            <input value="-71" id="dops-lon" type="text">
            <label for="dops-lon" class="active">Longitude</label>
          </div>
          <div class="input-field col s3" data-position="bottom" data-offset="60" data-tooltip="Altitude in KM">
            <input value="-71" id="dops-alt" type="text">
            <label for="dops-lon" class="active">Altitude</label>
          </div>
          <div class="input-field col s3" data-position="bottom" data-offset="60" data-tooltip="Minimum Elevation for GPS Lock">
            <input value="15" id="dops-el" type="text">
            <label for="dops-el" class="active">Mask</label>
          </div>
        </div>
        <div class="row center">
          <button id="dops-submit" class="btn btn-ui waves-effect waves-light" type="submit"
            name="action">Update DOP Data &#9658;
          </button>
        </div>
      </form>
    <div class="row">
      <table id="dops" class="center-align striped-light centered"></table>
    </div>
  </div>`,this.rmbCallback=e=>{switch(e){case"dops-curdops-rmb":{let e=l.d.getInputManager().mouse.latLon;const t=l.d.getInputManager().mouse.dragPosition;if(void 0===e||isNaN(e.lat)||isNaN(e.lon)){console.debug("latLon undefined!");const i=it.h.calculateTimeVariables(l.d.getTimeManager().simulationTimeObj).gmst;e=(0,M.tc)({x:t[0],y:t[1],z:t[2]},i)}const i=Ht.getGpsSats(l.d.getCatalogManager(),l.d.getGroupsManager()),a=Vt.getDops(l.d.getTimeManager().simulationTimeObj,i,e.lat,e.lon,0,settingsManager.gpsElevationMask);l.d.getUiManager().toast(`HDOP: ${a.hdop}<br/>VDOP: ${a.vdop}<br/>PDOP: ${a.pdop}<br/>GDOP: ${a.gdop}<br/>TDOP: ${a.tdop}`,"normal",!0)}break;case"dops-24dops-rmb":{const e=l.d.getInputManager().mouse.latLon;if(this.isMenuButtonActive){(0,b.Cs)(Ht.updateSideMenu),this.setBottomIconToEnabled();break}(0,n.gE)("dops-lat").value=e.lat.toFixed(3),(0,n.gE)("dops-lon").value=e.lon.toFixed(3),(0,n.gE)("dops-alt").value="0",(0,n.gE)("dops-el").value=settingsManager.gpsElevationMask.toString(),l.d.runEvent(o.QY.bottomMenuClick,this.bottomIconElementName)}}}}addJs(){super.addJs(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.gE)("dops-form").addEventListener("submit",e=>{e.preventDefault(),Ht.updateSideMenu()})}})}static updateSideMenu(){const e=l.d.getGroupsManager(),t=l.d.getCatalogManager(),i=l.d.getTimeManager(),a=parseFloat((0,n.gE)("dops-lat").value),s=parseFloat((0,n.gE)("dops-lon").value),o=parseFloat((0,n.gE)("dops-alt").value),r=parseFloat((0,n.gE)("dops-el").value);settingsManager.gpsElevationMask=r;const c=Ht.getGpsSats(t,e),d=Vt.getDopsList(e=>i.getOffsetTimeObj(e),c,a,s,o,r);Vt.updateDopsTable(d)}static getGpsSats(e,t){var i,a;const s=null!==(i=(a=t.groupList).GPSGroup)&&void 0!==i?i:a.GPSGroup=t.createGroup(r.M.NAME_REGEX,/NAVSTAR/iu,"GPSGroup"),n=[];return s.ids.forEach(t=>{const i=e.getSat(t);i&&n.push(i)}),n}}Ht.PLUGIN_NAME="DOPs Plugin";const Yt=new Ht;var Jt=i(4167),Xt=i(5070);class Kt extends u.S{constructor(){super(Kt.PLUGIN_NAME),this.dependencies=[g.A.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isIconDisabled=!0,this.isIconDisabledOnLoad=!0,this.helpTitle="Edit Satellite Menu",this.helpBody=l.d.html`The Edit Satellite Menu is used to edit the satellite data.
    <br><br>
    <ul>
       <li>
           Satellite SCC# - A unique number assigned to each satellite by the US Space Force.
       </li>
         <li>
            Epoch Year - The year of the satellite's last orbital update.
        </li>
        <li>
            Epoch Day - The day of the year of the satellite's last orbital update.
        </li>
        <li>
            Inclination - The angle between the satellite's orbital plane and the equatorial plane.
        </li>
        <li>
            Right Ascension - The angle between the ascending node and the satellite's position at the time of the last orbital update.
        </li>
        <li>
            Eccentricity - The amount by which the satellite's orbit deviates from a perfect circle.
        </li>
        <li>
            Argument of Perigee - The angle between the ascending node and the satellite's closest point to the earth.
        </li>
        <li>
            Mean Anomaly - The angle between the satellite's position at the time of the last orbital update and the satellite's closest point to the earth.
        </li>
        <li>
            Mean Motion - The rate at which the satellite's mean anomaly changes.
        </li>
    </ul>`,this.sideMenuElementName="editSat-menu",this.sideMenuElementHtml=l.d.html`
    <div id="editSat-menu" class="side-menu-parent start-hidden text-select">
      <div id="editSat-content" class="side-menu">
        <div class="row">
          <h5 class="center-align">Edit Satellite</h5>
          <form id="editSat">
            <div class="input-field col s12">
              <input disabled value="AAAAA" id="${Kt.elementPrefix}-scc" type="text" maxlength="5" />
              <label for="disabled" class="active">Satellite SCC#</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA" id="${Kt.elementPrefix}-year" type="text" maxlength="2" />
              <label for="${Kt.elementPrefix}-year" class="active">Epoch Year</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAAAAAA" id="${Kt.elementPrefix}-day" type="text" maxlength="12" />
              <label for="${Kt.elementPrefix}-day" class="active">Epoch Day</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Kt.elementPrefix}-inc" type="text" maxlength="8" />
              <label for="${Kt.elementPrefix}-inc" class="active">Inclination</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Kt.elementPrefix}-rasc" type="text" maxlength="8" />
              <label for="${Kt.elementPrefix}-rasc" class="active">Right Ascension</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${Kt.elementPrefix}-ecen" type="text" maxlength="7" />
              <label for="${Kt.elementPrefix}-ecen" class="active">Eccentricity</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AA.AAAAAAAA" id="${Kt.elementPrefix}-argPe" type="text" maxlength="8" />
              <label for="${Kt.elementPrefix}-argPe" class="active">Argument of Perigee</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Kt.elementPrefix}-meana" type="text" maxlength="8" />
              <label for="${Kt.elementPrefix}-meana" class="active">Mean Anomaly</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="AAA.AAAA" id="${Kt.elementPrefix}-meanmo" type="text" maxlength="11" />
              <label for="${Kt.elementPrefix}-meanmo" class="active">Mean Motion</label>
            </div>
            <div class="input-field col s12">
              <input placeholder="" id="${Kt.elementPrefix}-per" type="text" maxlength="11" />
              <label for="${Kt.elementPrefix}-per" class="active">Period</label>
            </div>
            <div class="center-align row">
              <button id="editSat-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Update Satellite &#9658;</button>
            </div>
            <div class="center-align row">
              <button id="editSat-newTLE" class="btn btn-ui waves-effect waves-light" type="button" name="action">Update Epoch to Now &#9658;</button>
            </div>
            <div class="center-align row">
              <button id="editSat-save" class="btn btn-ui waves-effect waves-light" type="button" name="action">Save TLE &#9658;</button>
            </div>
            <div class="center-align row">
              <button id="editSat-open" class="btn btn-ui waves-effect waves-light" type="button" name="action">Load TLE &#9658;</button>
              <input id="editSat-file" class="start-hidden" type="file" name="files[]" />
            </div>
          </form>
        </div>
        <div id="${Kt.elementPrefix}-error" class="center-align menu-selectable start-hidden">
          <h6 class="center-align">Error</h6>
        </div>
      </div>
    </div>
    `,this.bottomIconElementName="editSat-icon",this.bottomIconImg=Xt,this.bottomIconLabel="Edit Satellite",this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.populateSideMenu_()},this.dragOptions={isDraggable:!0},this.selectSatManager_=l.d.getPlugin(g.A)}addHtml(){super.addHtml(),l.d.register({event:o.QY.uiManagerFinal,cbName:"editSat",cb:()=>{(0,n.gE)("editSat-newTLE").addEventListener("click",this.editSatNewTleClick_.bind(this)),(0,n.gE)("editSat").addEventListener("submit",function(e){e.preventDefault(),Kt.editSatSubmit()}),(0,n.gE)(`${Kt.elementPrefix}-per`).addEventListener("change",function(){const e=(0,n.gE)("es-per").value;if(""===e)return;const t=1440/parseFloat(e);(0,n.gE)("es-meanmo").value=t.toFixed(8)}),(0,n.gE)(`${Kt.elementPrefix}-meanmo`).addEventListener("change",function(){const e=(0,n.gE)(`${Kt.elementPrefix}-meanmo`).value;if(""===e)return;const t=(1440/parseFloat(e)).toFixed(8);(0,n.gE)(`${Kt.elementPrefix}-per`).value=t}),(0,n.gE)("editSat-save").addEventListener("click",Kt.editSatSaveClick),(0,n.gE)("editSat-open").addEventListener("click",function(){l.d.getSoundManager().play(p.A.MENU_BUTTON),(0,n.gE)("editSat-file").click()}),(0,n.gE)("editSat-file").addEventListener("change",function(e){window.FileReader&&(Kt.doReaderActions_(e),e.preventDefault())}),(0,n.gE)(`${Kt.elementPrefix}-error`).addEventListener("click",function(){(0,n.gE)(`${Kt.elementPrefix}-error`).style.display="none"})}})}addJs(){super.addJs(),l.d.register({event:o.QY.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e||(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}})}static doReaderActions_(e){try{const t=new FileReader;t.onload=Kt.readerOnLoad_,t.readAsText(e.target.files[0])}catch(e){f.J.error(e,"doReaderActions","Error reading file!")}}static readerOnLoad_(e){if(2!==e.target.readyState)return;if(e.target.error)return void f.J.warn("Error while reading file!");const t=l.d.getTimeManager(),i=l.d.getOrbitManager(),a=l.d.getUiManager(),s=JSON.parse(e.target.result),n=parseInt(Jt.V.pad0(s.tle1.substr(2,5).trim(),5)),o=l.d.getCatalogManager().sccNum2Sat(n);let r;try{r=M.j0.createSatrec(s.tle1,s.tle2)}catch(e){return void f.J.error(e,"edit-sat.ts","Error creating satellite record!")}it.h.altitudeCheck(r,t.simulationTimeObj)>1?(l.d.getCatalogManager().satCruncher.postMessage({typ:St.XY.SAT_EDIT,id:o.id,active:!0,tle1:s.tle1,tle2:s.tle2}),i.changeOrbitBufferData(o.id,s.tle1,s.tle2),o.active=!0):a.toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}populateSideMenu_(){const e=this.selectSatManager_.getSelectedSat(o.Z.EXTRA_ONLY);if(!(null==e?void 0:e.isSatellite()))return;const t=e;(0,n.gE)(`${Kt.elementPrefix}-scc`).value=t.sccNum;const i=t.inclination.toFixed(4).padStart(8,"0");(0,n.gE)(`${Kt.elementPrefix}-inc`).value=i,(0,n.gE)(`${Kt.elementPrefix}-year`).value=t.tle1.substr(18,2),(0,n.gE)(`${Kt.elementPrefix}-day`).value=t.tle1.substr(20,12),(0,n.gE)(`${Kt.elementPrefix}-meanmo`).value=t.tle2.substr(52,11),(0,n.gE)(`${Kt.elementPrefix}-per`).value=(1440/parseFloat(t.tle2.substr(52,11))).toFixed(4);const a=t.rightAscension.toFixed(4).padStart(8,"0");(0,n.gE)(`${Kt.elementPrefix}-rasc`).value=a,(0,n.gE)(`${Kt.elementPrefix}-ecen`).value=t.eccentricity.toFixed(7).substr(2,7);const s=t.argOfPerigee.toFixed(4).padStart(8,"0");(0,n.gE)(`${Kt.elementPrefix}-argPe`).value=Jt.V.pad0(s,8),(0,n.gE)(`${Kt.elementPrefix}-meana`).value=t.tle2.substr(43,8)}editSatNewTleClick_(){(0,b.Cs)(this.editSatNewTleClickFadeIn_.bind(this))}editSatNewTleClickFadeIn_(){const e=l.d.getTimeManager(),t=l.d.getUiManager();try{const i=l.d.getCatalogManager().sccNum2Id(parseInt((0,n.gE)(`${Kt.elementPrefix}-scc`).value)),a=l.d.getCatalogManager().getObject(i);if(!a.isSatellite())return;const s=a,r=it.h.calculateTimeVariables(e.simulationTimeObj).gmst,c=(0,M.tc)(s.position,r);let d=c.lon,u=c.lat,g=c.alt;const p=it.h.getDirection(s,e.simulationTimeObj);"Error"===p&&t.toast("Cannot calculate direction of satellite. Try again later.","caution");const h=e.simulationTimeObj,m=ft.V.currentEpoch(h);let v;s.tle1=s.tle1.substr(0,18)+m[0]+m[1]+s.tle1.substr(32),l.d.getMainCamera().isAutoPitchYawToTarget=!1,v=s.apogee-s.perigee<300?new bt.f(s,u,d,p,h).rotateOrbitToLatLon():new bt.f(s,u,d,p,h,g).rotateOrbitToLatLon();const b=v[0],f=v[1];if("Error"===b)return void t.toast(`${f}`,"critical",!0);l.d.getCatalogManager().satCruncher.postMessage({typ:St.XY.SAT_EDIT,id:i,tle1:b,tle2:f}),l.d.getOrbitManager().changeOrbitBufferData(i,b,f);const S=this.selectSatManager_.getSelectedSat(o.Z.EXTRA_ONLY);if(!S.isSatellite())return;const E=S;(0,n.gE)(`${Kt.elementPrefix}-scc`).value=E.sccNum;const y=E.inclination.toFixed(4).padStart(8,"0");(0,n.gE)(`${Kt.elementPrefix}-inc`).value=Jt.V.pad0(y,8),(0,n.gE)(`${Kt.elementPrefix}-year`).value=E.tle1.substr(18,2),(0,n.gE)(`${Kt.elementPrefix}-day`).value=E.tle1.substr(20,12),(0,n.gE)(`${Kt.elementPrefix}-meanmo`).value=E.tle2.substr(52,11),(0,n.gE)(`${Kt.elementPrefix}-per`).value=(1440/parseFloat(E.tle2.substr(52,11))).toFixed(4);const w=E.rightAscension.toFixed(4).padStart(8,"0");(0,n.gE)(`${Kt.elementPrefix}-rasc`).value=w,(0,n.gE)(`${Kt.elementPrefix}-ecen`).value=E.eccentricity.toFixed(7).substr(2,7);const A=E.argOfPerigee.toFixed(4).padStart(8,"0");(0,n.gE)(`${Kt.elementPrefix}-argPe`).value=A,(0,n.gE)(`${Kt.elementPrefix}-meana`).value=E.tle2.substr(43,8)}catch(e){f.J.warn(e)}}static editSatSubmit(){l.d.getSoundManager().play(p.A.MENU_BUTTON);const e=l.d.getCatalogManager();(0,n.gE)(`${Kt.elementPrefix}-error`).style.display="none";const t=(0,n.gE)(`${Kt.elementPrefix}-scc`).value,i=e.sccNum2Id(parseInt(t));null===i&&f.J.info("Not a Real Satellite");const a=e.getObject(i,o.Z.EXTRA_ONLY);if(!a.isSatellite())return;const s=a,r=s.tle1.substr(9,8);let c=(0,n.gE)(`${Kt.elementPrefix}-inc`).value,d=(0,n.gE)(`${Kt.elementPrefix}-meanmo`).value,u=(0,n.gE)(`${Kt.elementPrefix}-rasc`).value;const g=(0,n.gE)(`${Kt.elementPrefix}-ecen`).value;let h=(0,n.gE)(`${Kt.elementPrefix}-argPe`).value,m=(0,n.gE)(`${Kt.elementPrefix}-meana`).value;const v=(0,n.gE)(`${Kt.elementPrefix}-year`).value,b=(0,n.gE)(`${Kt.elementPrefix}-day`).value,{tle1:S,tle2:E}=M.rX.createTle({sat:s,inc:c,meanmo:d,rasc:u,argPe:h,meana:m,ecen:g,epochyr:v,epochday:b,intl:r,scc:t}),y=S,w=E;let A;try{A=M.j0.createSatrec(y,w)}catch(e){return void f.J.error(e,"edit-sat.ts","Error creating satellite record!")}it.h.altitudeCheck(A,l.d.getTimeManager().simulationTimeObj)>1?(e.satCruncher.postMessage({typ:St.XY.SAT_EDIT,id:i,active:!0,tle1:y,tle2:w}),l.d.getOrbitManager().changeOrbitBufferData(i,y,w),s.active=!0,s.editTle(y,w),l.d.getMainCamera().zoomTarget=M.N$.GEO):l.d.getUiManager().toast("Failed to propagate satellite. Try different parameters or if you are confident they are correct report this issue.","caution",!0)}static editSatSaveClick(e){const t=l.d.getCatalogManager();l.d.getSoundManager().play(p.A.EXPORT);try{const e=(0,n.gE)(`${Kt.elementPrefix}-scc`).value,i=t.sccNum2Id(parseInt(e)),a=t.getObject(i,o.Z.EXTRA_ONLY),s={tle1:a.tle1,tle2:a.tle2},l=JSON.stringify(s),r=new Blob([l],{type:"text/plain;charset=utf-8"});(0,st.saveAs)(r,e+".tle")}catch(e){}e.preventDefault()}}Kt.PLUGIN_NAME="Edit Sat",Kt.elementPrefix="es";class Wt{constructor(){this.PLUGIN_NAME="Gamepad",this.deadzone=.55,this.buttonsPressedHistory=[],this.buttonsPressed=[]}init(){window.addEventListener("gamepadconnected",e=>{settingsManager.cruncherReady?this.initializeGamepad(e.gamepad):l.d.register({event:o.QY.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>this.initializeGamepad(e.gamepad)})}),window.addEventListener("gamepaddisconnected",()=>{l.d.getUiManager().toast("Gamepad disconnected","critical"),this.currentController=null})}initializeGamepad(e){l.d.getUiManager().toast("Gamepad connected","normal"),this.currentController||l.d.register({event:o.QY.updateLoop,cbName:this.PLUGIN_NAME,cb:this.updateGamepad.bind(this)}),this.currentController=e}updateGamepad(e){null!=e||(e=0);const t=Wt.getController(e);null!==t&&(this.currentController=t,this.updateZoom_(),this.updateLeftStick_(),this.updateRightStick_(),this.updateButtons_())}updateButtons_(){this.currentController.buttons.forEach((e,t)=>{if(e.pressed&&!this.buttonsPressed[t])switch(this.buttonsPressed[t]=!0,this.buttonsPressedHistory.push(t),this.buttonsPressedHistory.length>8&&this.buttonsPressedHistory.shift(),t){case 0:this.btnA_();break;case 1:this.btnB_();break;case 2:this.btnX_();break;case 3:this.btnY_();break;case 4:this.btnLeftBumper();break;case 5:this.btnRightBumper_();break;case 8:this.btnHome_();break;case 9:this.btnStart_();break;case 10:this.btnLeftStick_();break;case 11:this.btnRightStick_();break;case 12:this.btnDpadUp_();break;case 13:this.btnDpadDown_();break;case 14:this.btnDpadLeft_();break;case 15:this.btnDpadRight_();break;case 16:this.btnXbox()}else!e.pressed&&this.buttonsPressed[t]&&(this.buttonsPressed[t]=!1)})}btnA_(){var e;settingsManager.isLimitedGamepadControls||(console.log("A"),null===(e=l.d.getPlugin(g.A))||void 0===e||e.selectSat(l.d.getHoverManager().hoveringSat))}btnB_(){var e;settingsManager.isLimitedGamepadControls||(console.log("B"),null===(e=l.d.getPlugin(g.A))||void 0===e||e.selectSat(-1),l.d.getMainCamera().zoomTarget=.8)}btnX_(){settingsManager.isLimitedGamepadControls||(console.log("X"),l.d.getMainCamera().autoRotate())}btnY_(){console.log("Y")}btnLeftBumper(){if(settingsManager.isLimitedGamepadControls)return;console.log("Left Bumper");const e=l.d.getPlugin(g.A);if(!e)return;const t=e.selectedSat-1;if(t>=0)e.selectSat(t);else{const t=l.d.getCatalogManager().getActiveSats(),i=t[t.length-1].id;e.selectSat(i)}}btnRightBumper_(){if(settingsManager.isLimitedGamepadControls)return;console.log("Right Bumper");const e=l.d.getPlugin(g.A);if(!e)return;const t=l.d.getCatalogManager().getActiveSats(),i=t[t.length-1].id,a=e.selectedSat+1;a<=i?e.selectSat(a):e.selectSat(0)}btnHome_(){settingsManager.isLimitedGamepadControls||(console.log("Home"),l.d.getMainCamera().isPanReset=!0,l.d.getMainCamera().isLocalRotateReset=!0,l.d.getMainCamera().ftsRotateReset=!0)}btnXbox(){console.log("Xbox Button")}btnStart_(){console.log("Start")}btnLeftStick_(){console.log("Left Stick")}btnRightStick_(){console.log("Right Stick")}btnDpadUp_(){console.log("D-Pad Up"),settingsManager.isAutoRotateD=!1,settingsManager.isAutoRotateU=!settingsManager.isAutoRotateU,l.d.getMainCamera().autoRotate(!0)}btnDpadDown_(){console.log("D-Pad Down"),settingsManager.isAutoRotateU=!1,settingsManager.isAutoRotateD=!settingsManager.isAutoRotateD,l.d.getMainCamera().autoRotate(!0)}btnDpadLeft_(){console.log("D-Pad Left"),settingsManager.isAutoRotateR=!1,settingsManager.isAutoRotateL=!settingsManager.isAutoRotateL,l.d.getMainCamera().autoRotate(!0)}btnDpadRight_(){console.log("Right"),settingsManager.isAutoRotateL=!1,settingsManager.isAutoRotateR=!settingsManager.isAutoRotateR,l.d.getMainCamera().autoRotate(!0)}updateZoom_(){const e=this.currentController.buttons[6].value,t=this.currentController.buttons[7].value;if(0===e&&0===t)return;const i=l.d.getRenderer();let a=l.d.getMainCamera().zoomLevel();switch(l.d.getMainCamera().cameraType){case H.A.DEFAULT:case H.A.OFFSET:case H.A.FIXED_TO_SAT:a+=e/500*i.dt,a-=t/500*i.dt,l.d.getMainCamera().zoomTarget=a,l.d.getMainCamera().camZoomSnappedOnSat=!1,l.d.getMainCamera().isAutoPitchYawToTarget=!1,a<l.d.getMainCamera().zoomLevel()?l.d.getMainCamera().isZoomIn=!0:l.d.getMainCamera().isZoomIn=!1;break;case H.A.FPS:case H.A.SATELLITE:case H.A.PLANETARIUM:case H.A.ASTRONOMY:0!==e&&(l.d.getMainCamera().fpsVertSpeed+=Math.pow(2*e,3)*i.dt*settingsManager.cameraMovementSpeed),0!==t&&(l.d.getMainCamera().fpsVertSpeed-=Math.pow(2*t,3)*i.dt*settingsManager.cameraMovementSpeed)}}updateLeftStick_(){const e=this.currentController.axes[0],t=this.currentController.axes[1];if(e>this.deadzone||e<-this.deadzone||t>this.deadzone||t<-this.deadzone){l.d.getMainCamera().autoRotate(!1);const i=l.d.getRenderer();switch(settingsManager.lastGamepadMovement=Date.now(),l.d.getMainCamera().cameraType){case H.A.DEFAULT:case H.A.OFFSET:case H.A.FIXED_TO_SAT:l.d.getMainCamera().camAngleSnappedOnSat=!1,l.d.getMainCamera().isAutoPitchYawToTarget=!1,l.d.getMainCamera().camPitchSpeed-=Math.pow(t,3)/200*i.dt*settingsManager.cameraMovementSpeed,l.d.getMainCamera().camYawSpeed+=Math.pow(e,3)/200*i.dt*settingsManager.cameraMovementSpeed;break;case H.A.FPS:case H.A.SATELLITE:case H.A.PLANETARIUM:case H.A.ASTRONOMY:(t>this.deadzone||t<-this.deadzone)&&(l.d.getMainCamera().fpsForwardSpeed=-Math.pow(t,3)*i.dt),(e>this.deadzone||e<-this.deadzone)&&(l.d.getMainCamera().fpsSideSpeed=Math.pow(e,3)*i.dt)}}}updateRightStick_(){if(settingsManager.isLimitedGamepadControls)return;const e=this.currentController.axes[2],t=this.currentController.axes[3],i=l.d.getRenderer();if(l.d.getMainCamera().isLocalRotateOverride=!1,t>this.deadzone||t<-this.deadzone||e>this.deadzone||e<-this.deadzone)switch(l.d.getMainCamera().autoRotate(!1),l.d.getMainCamera().cameraType){case H.A.DEFAULT:case H.A.OFFSET:case H.A.FIXED_TO_SAT:l.d.getMainCamera().isLocalRotateOverride=!0,l.d.getMainCamera().localRotateDif.pitch=200*-t,l.d.getMainCamera().localRotateDif.yaw=200*-e;break;case H.A.FPS:case H.A.SATELLITE:case H.A.PLANETARIUM:case H.A.ASTRONOMY:l.d.getMainCamera().camPitchSpeed+=t/100*i.dt*settingsManager.cameraMovementSpeed,l.d.getMainCamera().camYawSpeed-=e/100*i.dt*settingsManager.cameraMovementSpeed}}vibrate(e){this.currentController&&this.currentController.vibrationActuator.playEffect("dual-rumble",{duration:e||300,strongMagnitude:1,weakMagnitude:1,startDelay:0})}static getController(e=0){const t=navigator.getGamepads().filter(e=>null!==e);return t.length>e&&null!==t[e]?t[e]:null}}const Zt=new Wt;var Qt=i(3561);const qt=i.p+"../img/calendar.png";class ei extends u.S{constructor(){super("Launch Menu"),this.bottomIconElementName="menu-launches",this.bottomIconImg=qt,this.bottomIconLabel="Launch Calendar",this.bottomIconCallback=()=>{if(this.isMenuButtonActive){settingsManager.isPreventColorboxClose=!0,setTimeout(function(){settingsManager.isPreventColorboxClose=!1},2e3);const e=(new Date).getFullYear();(0,Qt.r9)(`https://space.skyrocket.de/doc_chr/lau${e}.htm`,{callback:this.closeColorbox_.bind(this)})}},this.isForceHideSideMenus=!0}closeColorbox_(){this.isMenuButtonActive&&(this.isMenuButtonActive=!1,(0,n.gE)(this.bottomIconElementName).classList.remove("bmenu-item-selected"))}}const ti=new ei;var ii=i(2228);const ai=i.p+"../img/rocket.png";var si=i(5198);class ni extends u.S{constructor(){super(ni.PLUGIN_NAME),this.dependencies=[g.A.PLUGIN_NAME],this.bottomIconCallback=()=>{if(!this.isMenuButtonActive)return;if(!this.verifySatelliteSelected())return;const e=l.d.getCatalogManager().getObject(this.selectSatManager_.selectedSat,o.Z.EXTRA_ONLY);(0,n.gE)("nl-scc").value=e.sccNum,(0,n.gE)("nl-inc").value=Jt.V.pad0(e.inclination.toFixed(4),8)},this.bottomIconElementName="menu-new-launch",this.bottomIconLabel="New Launch",this.bottomIconImg=ai,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="newLaunch-menu",this.sideMenuElementHtml=l.d.html`
  <div id="newLaunch-menu" class="side-menu-parent start-hidden text-select">
    <div id="newLaunch-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">New Launch</h5>
        <form id="${this.sideMenuElementName}-form" class="col s12">
          <div class="input-field col s12">
            <input disabled value="00005" id="nl-scc" type="text">
            <label for="disabled" class="active">Satellite SCC#</label>
          </div>
          <div class="input-field col s12">
            <input disabled value="50.00" id="nl-inc" type="text">
            <label for="disabled" class="active">Inclination</label>
          </div>
          <div class="input-field col s12">
            <select value="50.00" id="nl-updown" type="text">
              <option value="N">North</option>
              <option value="S">South</option>
            </select>
            <label for="disabled">Launching North or South</label>
          </div>
          <div class="input-field col s12" id="nl-launch-menu">
            <select id="nl-facility">
              <optgroup label="United States">
                <option value="CAS">Canary Island Air Space (Pegasus)</option>
                <option value="AFETR">Cape Canaveral AFS | Kennedy Space Center</option>
                <option value="ERAS">Eastern Range Air Space (Pegasus)</option>
                <option value="KODAK">Kodiak Launch Complex</option>
                <option value="KWAJ">Reagan Test Site</option>
                <option value="AFWTR">Vandenberg AFB</option>
                <option value="WLPIS">Wallops Flight Facility</option>
                <option value="WRAS">Western Range Air Space (Pegasus)</option>
              </optgroup>
              <optgroup label="Russia">
                <option value="KYMTR">Kasputin Yar MSC</option>
                <option value="PKMTR">Plesetsk MSC</option>
                <option value="SEAL">Sea Launch Platform</option>
                <option value="SADOL">Submarine Launch, Barents Sea</option>
                <option value="TTMTR">Tyuratam MSC | Baikonur Cosmodrome</option>
                <option value="VOSTO">Vostochny Cosmodrome</option>
                <option value="OREN">Yasny (Dombarovskiy) Cosmodrome</option>
              </optgroup>
              <optgroup label="China">
                <option value="JSC">Jiuquan SLC</option>
                <option value="TSC">Taiyuan SLC</option>
                <option value="WSC">Wenchang SLC</option>
                <option value="XSC">Xichang SLC</option>
              </optgroup>
              <optgroup label="Japan">
                <option value="TNSTA">Tanegashima Space Center</option>
                <option value="KSCUT">Uchinoura Space Center</option>
              </optgroup>
              <optgroup label="North Korea">
                <option value="YUN">Sohae Satellite Launch Station</option>
                <option value="TNGH">Tonghae Satellite Launching Ground</option>
              </optgroup>
              <optgroup label="Other">
                <option value="FRGUI">Guiana Space Centre (Kourou FG)</option>
                <option value="HGSTR">Hammaguira Space Track Range</option>
                <option value="NSC">Naro Space Center</option>
                <option value="YAVNE">Palmachim Air Force Base</option>
                <option value="RLLC">Rocket Labs Launch Complex</option>
                <option value="SNMLP">San Marco Launch Platform</option>
                <option value="SRI">Satish Dhawan Space Centre (Sriharikota IN)</option>
                <option value="SEM">Semnan Spaceport</option>
                <option value="WOMRA">Woomera Test Range</option>
              </optgroup>
            </select>
            <label>Launch Facility</label>
          </div>
          <div class="center-align">
            <button
            id="${this.sideMenuElementName}-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Create Launch
              Nominal &#9658;
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  `,this.helpTitle="New Launch Menu",this.helpBody=l.d.html`The New Launch Menu is used for generating notional orbital launches by modifying existing satellites with similar parameters.
    <br><br>
    After selecting a satellite, you can select a launch location and a north/south azimuth.
    The selected satellite will be modified to align it with the launch site.
    The clock is then changed to 00:00:00 to represent relative time after the launch.
    This can be helpful in calculating sensor coverage relative to launch time.
    The objects relationship with other orbital objects will be incorrect.`,this.dragOptions={isDraggable:!0},this.isDoingCalculations=!1,this.submitCallback=()=>{var e;if(this.isDoingCalculations)return;this.isDoingCalculations=!0;const t=l.d.getTimeManager(),i=l.d.getCatalogManager(),a=l.d.getUiManager(),s=l.d.getColorSchemeManager();(0,b.p$)();const o=(0,n.gE)("nl-scc").value,r=i.sccNum2Id(parseInt(o));let c=i.getObject(r);const d=(0,n.gE)("nl-updown").value,u=(0,n.gE)("nl-facility").value;let g,h;if(!i.isLaunchSiteManagerLoaded)throw new Error("Launch Site Manager not loaded!");for(const e in i.launchSites)i.launchSites[e].name===u&&(g=i.launchSites[e].lat,h=i.launchSites[e].lon);h>180&&(h-=360);const m=new Date,v=new Date(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate(),0,0,0);v.setUTCHours(0);const S=t.staticOffset;t.changeStaticOffset(v.getTime()-m.getTime()),s.setColorScheme(settingsManager.currentColorScheme,!0),l.d.getMainCamera().isAutoPitchYawToTarget=!1;const E=t.simulationTimeObj,y=new bt.f(c,g,h,d,E).rotateOrbitToLatLon(),w=y[0],A=y[1];if("Error"===w||69!==w.length||69!==A.length)return"Error"===w?a.toast(`Failed to Create TLE: ${A}`,"critical"):69!==w.length?a.toast(`Invalid TLE1 Created: length is not 69 - ${w}`,"critical"):69!==A.length&&a.toast(`Invalid TLE2 Created: length is not 69 - ${A}`,"critical"),t.changeStaticOffset(S),this.isDoingCalculations=!1,void(0,b.RZ)();let k;a.toast("Time is now relative to launch time.","standby"),null===(e=l.d.getSoundManager())||void 0===e||e.play(p.A.LIFT_OFF),c.satrec=null;try{k=M.j0.createSatrec(w,A)}catch(e){return void f.J.error(e,"new-launch.ts","Error creating satellite record!")}it.h.altitudeCheck(k,E)>1?(i.satCruncher.postMessage({typ:St.XY.SAT_EDIT,id:r,active:!0,TLE1:w,TLE2:A}),l.d.getOrbitManager().changeOrbitBufferData(r,w,A)):a.toast("Failed Altitude Test - Try a Different Satellite!","critical"),Ct(i.satCruncher,()=>{this.isDoingCalculations=!1,(0,b.RZ)(),l.d.getUiManager().searchManager.doSearch(c.sccNum)},e=>void 0!==e.satPos,()=>{this.isDoingCalculations=!1,(0,b.RZ)(),a.toast("Cruncher failed to meet requirement after multiple tries! Is this launch even possible?","critical")})},this.selectSatManager_=l.d.getPlugin(g.A)}addJs(){super.addJs(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.gE)(this.sideMenuElementName+"-form").addEventListener("change",()=>{const e=l.d.getCatalogManager().getObject(this.selectSatManager_.selectedSat,o.Z.EXTRA_ONLY);e.isSatellite()&&this.preValidate_(e)})}}),l.d.register({event:o.QY.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{if(null==e?void 0:e.isSatellite()){const t=e;(0,n.gE)("nl-scc").value=t.sccNum,(0,n.gE)(this.bottomIconElementName).classList.remove("bmenu-item-disabled"),this.isIconDisabled=!1,this.preValidate_(t)}else(0,n.gE)(this.bottomIconElementName).classList.add("bmenu-item-disabled"),this.isIconDisabled=!0}})}preValidate_(e){const t=(0,n.gE)("nl-facility").value,i=si.g[t].lat;let a=e.inclination;a=a>90?180-a:a;const s=(0,n.gE)(this.sideMenuElementName+"-submit");a<i?(s.disabled=!0,s.textContent="Inclination Too Low!"):(s.disabled=!1,s.textContent="Create Launch Nominal ▶")}}ni.PLUGIN_NAME="New Launch";const oi=(e,t)=>e?e.length<=t?e:`${e.slice(0,t)}...`:"Unknown",li=i.p+"../img/calendar2.png";class ri extends u.S{constructor(){super(ri.PLUGIN_NAME),this.bottomIconCallback=()=>{this.isMenuButtonActive&&this.showTable()},this.bottomIconElementName="menu-nextLaunch",this.bottomIconImg=li,this.bottomIconLabel="Next Launches",this.dragOptions={isDraggable:!0,maxWidth:650,minWidth:450},this.helpTitle="Next Launches Menu",this.helpBody=l.d.html`The Next Launches Menu pulls data from <a href="https://thespacedevs.com/" target="_blank">The Space Devs</a> to display upcoming launches.`,this.sideMenuElementName="nextLaunch-menu",this.sideMenuElementHtml=l.d.html`
  <div id="nextLaunch-menu" class="side-menu-parent start-hidden text-select">
    <div id="nextLaunch-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Next Launches</h5>
        <table id="nextLaunch-table" class="center-align striped-light centered"></table>
      </div>
      <div class="row">
        <center>
          <button id="export-launch-info" class="btn btn-ui waves-effect waves-light">Export Launch Info &#9658;</button>
        </center>
      </div>
    </div>
  </div>`,this.launchList=[]}addHtml(){super.addHtml(),i.e(323).then(i.bind(i,2323)).then(e=>e)}addJs(){super.addJs(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.gE)("export-launch-info").addEventListener("click",()=>{l.d.getSoundManager().play(p.A.EXPORT),(0,at.g3)(this.launchList,"launchList")})}})}showTable(){if(0===this.launchList.length){const e="localhost"===window.location.hostname?"lldev":"ll";fetch(`https://${e}.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=20&mode=detailed`).then(e=>e.json()).then(e=>this.processData(e)).catch(()=>f.J.warn(`https://${e}.thespacedevs.com/2.0.0/ is Unavailable!`)).finally(()=>{const e=(0,n.gE)("nextLaunch-table");e&&""==e.innerHTML&&(ri.initTable(e,this.launchList),(0,n.gE)("nextLaunch-table").querySelectorAll("a").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),(0,Qt.r9)(e.href)})}))})}}processData(e){var t,i,a,s,n,o;for(let l=0;l<e.results.length;l++){const r=e.results[l],c={name:"",updated:null,windowStart:new Date(r.window_start),windowEnd:new Date(r.window_end),location:"",locationURL:"",agency:"",agencyURL:"",country:"",mission:"",missionName:"",missionType:"",missionURL:"",rocket:"",rocketConfig:"",rocketFamily:"",rocketURL:""};void 0!==r.last_updated&&(c.updated=new Date(r.last_updated)),c.name=void 0!==r.name?r.name:"Unknown",c.location=null===(i=null===(t=r.pad)||void 0===t?void 0:t.location)||void 0===i?void 0:i.name.split(",",1)[0],c.locationURL=null===(a=r.pad)||void 0===a?void 0:a.wiki_url,void 0!==r.launch_service_provider?(c.agency=void 0!==r.launch_service_provider.name?r.launch_service_provider.name:"Unknown",c.country=void 0!==r.launch_service_provider.country_code?r.launch_service_provider.country_code:"Unknown",void 0!==r.launch_service_provider.wiki_url&&(c.agencyURL=r.launch_service_provider.wiki_url)):(c.agency="Unknown",c.country="UNK",c.agencyURL=""),null!=r.mission&&(c.mission=r.mission.description,c.missionName=r.mission.name,c.missionType=r.mission.type,void 0!==r.mission.wiki_url&&(c.missionURL=r.mission.wiki_url)),c.rocket=null===(s=r.rocket)||void 0===s?void 0:s.configuration.full_name,c.rocketConfig=null===(n=r.rocket)||void 0===n?void 0:n.configuration.name,c.rocketFamily=null===(o=r.rocket)||void 0===o?void 0:o.configuration.family,void 0!==r.rocket.configuration.wiki_url&&(c.rocketURL=r.rocket.configuration.wiki_url),this.launchList[l]=c}}static makeTableHeaders(e){const t=e.insertRow(),i=t.insertCell();i.appendChild(document.createTextNode("Launch Window")),i.setAttribute("style","text-decoration: underline; width: 120px;");const a=t.insertCell();a.appendChild(document.createTextNode("Mission")),a.setAttribute("style","text-decoration: underline; width: 140px;");const s=t.insertCell();s.appendChild(document.createTextNode("Location")),s.setAttribute("style","text-decoration: underline");const n=t.insertCell();n.appendChild(document.createTextNode("Agency")),n.setAttribute("style","text-decoration: underline");const o=t.insertCell();o.appendChild(document.createTextNode("Country")),o.setAttribute("style","text-decoration: underline")}static initTable(e,t){var i,a,s,n,o,l;ri.makeTableHeaders(e);for(let r=0;r<t.length;r++){const c=e.insertRow(),d=c.insertCell(),u=t[r].windowStart.valueOf()<=Date.now()-864e5?"TBD":(0,jt.i)(t[r].windowStart,"isoDateTime",!0)+" UTC";d.appendChild(document.createTextNode(u));const g=c.insertCell(),p=(null===(i=t[r])||void 0===i?void 0:i.missionName)||"Unknown",h=(null===(a=t[r])||void 0===a?void 0:a.missionURL)&&""!==t[r].missionURL?`<a class='iframe' href="${t[r].missionURL}">${oi(p,15)}</a>`:`${oi(p,15)}`,m=(null===(s=t[r])||void 0===s?void 0:s.rocketURL)?`<a class='iframe' href="${t[r].rocketURL}">${t[r].rocket}</a>`:`${t[r].rocket}`;g.innerHTML=`${h}<br />${m}`;const v=(null===(n=t[r])||void 0===n?void 0:n.locationURL)&&""!==(null===(o=t[r])||void 0===o?void 0:o.locationURL)?`<a class='iframe' href="${t[r].locationURL}">${oi(t[r].location,25)}</a>`:`${oi(t[r].location,25)}`;c.insertCell().innerHTML=v;const b=(null===(l=t[r])||void 0===l?void 0:l.agencyURL)?`<a class='iframe' href="${t[r].agencyURL}">${oi(t[r].agency,30)}</a>`:`${oi(t[r].agency,30)}`;c.insertCell().innerHTML=b,c.insertCell().innerHTML=`<span class="badge dark-gray-badge" data-badge-caption="${t[r].country}"></span>`}}}ri.PLUGIN_NAME="Next Launches";const ci=i.p+"../img/day-night.png";class di extends u.S{constructor(){super("Night Toggle"),this.bottomIconElementName="menu-day-night",this.bottomIconLabel="Night Toggle",this.bottomIconImg=ci}addJs(){super.addJs(),l.d.register({event:o.QY.nightToggle,cbName:this.PLUGIN_NAME,cb:(e,t,i)=>{this.isMenuButtonActive?e.bindTexture(e.TEXTURE_2D,i):e.bindTexture(e.TEXTURE_2D,t)}})}}var ui=i(7536);class gi extends u.S{constructor(){super(gi.PLUGIN_NAME),this.dependencies=[ui.c.PLUGIN_NAME,g.A.PLUGIN_NAME],this.doOnce=!1,this.isReferenceSatsActive=!1,this.selectSatManager_=l.d.getPlugin(g.A)}addHtml(){super.addHtml(),l.d.register({event:o.QY.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{e&&(this.doOnce||((0,n.gE)("sat-info-top-links").insertAdjacentHTML("beforeend",l.d.html`
                <div id="orbit-references-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                      data-tooltip="Create Analyst Satellites in Orbit">Generate Orbit Reference Satellites...</div>
              `),(0,n.gE)("orbit-references-link").addEventListener("click",this.orbitReferencesLinkClick.bind(this)),this.doOnce=!0))}})}orbitReferencesLinkClick(){const e=l.d.getCatalogManager(),t=e.getSat(this.selectSatManager_.selectedSat);if(!t)return;let i="";const a=t.eccentricity.toString(),s=t.rightAscension.toString(),n=t.argOfPerigee.toString(),o=t.inclination.toString(),r=t.meanMotion.toString(),c=t.epochYear.toString(),d=t.epochDay.toString(),u=t.intlDes,g=t.sccNum,p=1440/parseFloat(r);let h=0;for(let l=0;l<360;l++){const m=h.toFixed(4).padStart(8,"0"),{tle1:v,tle2:b}=M.rX.createTle({sat:t,inc:o,meanmo:r,rasc:s,argPe:n,meana:m,ecen:a,epochyr:c,epochday:d,intl:u,scc:g}),f=M.e2.convert6DigitToA5((mt.v.ANALYST_START_ID+l).toString().padStart(5,"0")),S=e.sccNum2Id(f),E=e.addAnalystSat(v,b,S,f);if(E&&(i+=E.sccNum.toString()+","),h+=360/p*4,h>=360)break}i=i.slice(0,-1),l.d.getUiManager().doSearch(i),this.isReferenceSatsActive=!0}}gi.PLUGIN_NAME="Orbit References";var pi=i(9531),hi=i(1479),mi=i(756);class vi extends u.S{constructor(){super(vi.PLUGIN_NAME),this.bottomIconImg=mi,this.bottomIconElementName="menu-constellations",this.bottomIconLabel="Constellations",this.sideMenuElementName="constellations-menu",this.sideMenuElementHtml=l.d.html`
  <div id="constellations-menu" class="side-menu-parent start-hidden text-select">
    <div id="constellation-menu" class="side-menu">
      <ul>
        <h5 class="center-align">Constellations</h5>
        <li class="divider"></li>
        <li class="menu-selectable" data-group="SpaceStations">Space Stations</li>
        <li class="menu-selectable" data-group="AmatuerRadio">Amateur Radio</li>
        <li class="menu-selectable" data-group="GPSGroup">GPS Satellites</li>
        <li class="menu-selectable" data-group="GalileoGroup">Galileo Satellites</li>
        <li class="menu-selectable" data-group="GlonassGroup">Glonass Satellites</li>
        <li class="menu-selectable" data-group="iridium">Iridium</li>
        <li class="menu-selectable" data-group="orbcomm">Orbcomm</li>
        <li class="menu-selectable" data-group="globalstar">Globalstar</li>
        <li class="menu-selectable" data-group="ses">SES</li>
        <li class="menu-selectable" data-group="aehf">Milstar and AEHF</li>
        <li class="menu-selectable" data-group="wgs">DSCS and WGS</li>
        <li class="menu-selectable" data-group="starlink">Starlink</li>
        <li class="menu-selectable" data-group="sbirs">SBIRS</li>
      </ul>
    </div>
  </div>`,this.helpTitle="Constellations Menu",this.helpBody=l.d.html`The Constellations menu allows you to view groups of satellites.
  <br><br>
  For some constellations, notional uplink/downlinks and/or crosslinks will be drawn between satellites in the constellation.`,this.dragOptions={isDraggable:!0}}addHtml(){super.addHtml(),l.d.register({event:o.QY.uiManagerFinal,cbName:"constellations",cb:()=>{(0,n.gE)("constellation-menu").querySelectorAll("li").forEach(e=>{e.addEventListener("click",function(e){vi.constellationMenuClick(e.target.dataset.group)})})}})}static constellationMenuClick(e){const t=l.d.getTimeManager(),i=l.d.getCatalogManager(),a=l.d.getGroupsManager();if(void 0!==a){switch(e){case"SpaceStations":a.groupList[e]||a.createGroup(r.M.SCC_NUM,[25544,48274],e);break;case"GlonassGroup":a.groupList[e]||a.createGroup(r.M.PAYLOAD_NAME_REGEX,/GLONASS/u,e);break;case"GalileoGroup":a.groupList[e]||a.createGroup(r.M.PAYLOAD_NAME_REGEX,/GALILEO/u,e);break;case"GPSGroup":a.groupList[e]||a.createGroup(r.M.PAYLOAD_NAME_REGEX,/NAVSTAR/u,e);break;case"iridium":a.groupList[e]||a.createGroup(r.M.PAYLOAD_NAME_REGEX,/IRIDIUM/u,e);break;case"orbcomm":a.groupList[e]||a.createGroup(r.M.PAYLOAD_NAME_REGEX,/ORBCOMM/u,e);break;case"globalstar":a.groupList[e]||a.createGroup(r.M.PAYLOAD_NAME_REGEX,/GLOBALSTAR/u,e);break;case"ses":a.groupList[e]||a.createGroup(r.M.PAYLOAD_NAME_REGEX,/SES \d+/u,e);break;case"AmatuerRadio":a.groupList[e]||a.createGroup(r.M.SCC_NUM,[7530,14781,20442,22826,24278,25338,25397,25544,26931,27607,27844,27848,28895,32785,32788,32789,32791,33493,33498,33499,35932,35933,35935,37224,37839,37841,37855,38760,39090,39134,39136,39161,39417,39430,39436,39439,39440,39444,39469,39770,40014,40021,40024,40025,40030,40032,40042,40043,40057,40071,40074,40377,40378,40379,40380,40654,40719,40900,40903,40906,40907,40908,40910,40911,40912,40926,40927,40928,40931,40967,40968,41168,41171,41340,41459,41460,41465,41474,41600,41619,41789,41932,41935,42017],e);break;case"aehf":a.groupList[e]||a.createGroup(r.M.SCC_NUM,i.id2satnum(i.satLinkManager.aehf),e),(0,b.Cs)(()=>{hi.B4.clear(),i.satLinkManager.showLinks(hi.B4,pi.PU.Aehf,t)});break;case"wgs":if(!a.groupList[e]){const t=i.satLinkManager.wgs.concat(i.satLinkManager.dscs);a.createGroup(r.M.SCC_NUM,i.id2satnum(t),e)}(0,b.Cs)(()=>{hi.B4.clear(),i.satLinkManager.showLinks(hi.B4,pi.PU.Wgs,t)});break;case"starlink":a.groupList[e]||a.createGroup(r.M.NAME_REGEX,/STARLINK/u,e);break;case"sbirs":if(!a.groupList[e]){const t=[...i.satLinkManager.sbirs,...i.satLinkManager.dsp];a.createGroup(r.M.SCC_NUM,i.id2satnum(t),e)}break;default:throw new Error("Unknown group name: "+e)}vi.groupSelected(e)}}static groupSelected(e){var t;if(void 0===e)return;const i=l.d.getCatalogManager(),a=l.d.getGroupsManager();if(void 0===a.groupList[e])throw new Error("Unknown group name: "+e);const s=(0,n.gE)("search");a.selectGroup(a.groupList[e]),s.innerHTML=a.groupList[e].ids.reduce((e,t)=>{var a;return`${e}${null===(a=i.getSat(t))||void 0===a?void 0:a.sccNum},`},"").slice(0,-1),null===(t=l.d.getPlugin(g.A))||void 0===t||t.selectSat(-1);const o=l.d.getUiManager();o.searchManager.doSearch(a.groupList[e].ids.map(e=>{var t;return null===(t=i.getSat(e))||void 0===t?void 0:t.sccNum}).join(",")),settingsManager.isMobileModeEnabled&&o.searchManager.closeSearch(),o.hideSideMenus()}}vi.PLUGIN_NAME="Sat Constellations";const bi=new vi;var fi=i(1537),Si=i(4356);const Ei=i.p+"../img/photoManager.png";class Mi extends u.S{constructor(){super(Mi.PLUGIN_NAME),this.discvrPhotos_=[],this.bottomIconElementName="menu-sat-photos",this.bottomIconLabel="SatellitePhotos",this.bottomIconImg=Ei,this.sideMenuElementName="sat-photo-menu",this.sideMenuElementHtml=l.d.html`
  <div id="sat-photo-menu" class="side-menu-parent start-hidden text-select">
    <div id="sat-photo-menu-content" class="side-menu">
      <ul id="sat-photo-menu-list">
        <h5 class="center-align">Satellites Imagery List</h5>
        <li id="meteosat9-link" class="link satPhotoRow">MeteoSat 9</li>
        <li id="meteosat11-link" class="link satPhotoRow">MeteoSat 11</li>
        <li id="himawari8-link" class="link satPhotoRow">Himawari 8</li>
        <li id="goes16-link" class="link satPhotoRow">GOES 16</li>
        <li id="goes18-link" class="link satPhotoRow">GOES 18</li>
      </ul>
    </div>
  </div>`,this.helpTitle="Satellite Photos Menu",this.helpBody=l.d.html`The Satellite Photos Menu is used for displaying live photos from select satellites.
  <br><br>
  Note - changes in the image API may cause the wrong satellite to be selected in Forerunner.`}addJs(){super.addJs(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.gE)("meteosat9-link").addEventListener("click",()=>{Mi.loadPic(28912,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSGIODC_RGBNatColour_LowResolution.jpg")}),(0,n.gE)("meteosat11-link").addEventListener("click",()=>{Mi.loadPic(40732,"https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSG_RGBNatColour_LowResolution.jpg")}),(0,n.gE)("himawari8-link").addEventListener("click",()=>{Mi.himawari8()}),(0,n.gE)("goes16-link").addEventListener("click",()=>{Mi.loadPic(41866,"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/latest.jpg")}),(0,n.gE)("goes18-link").addEventListener("click",()=>{Mi.loadPic(51850,"https://cdn.star.nesdis.noaa.gov/GOES18/ABI/FD/GEOCOLOR/latest.jpg")})}}),l.d.register({event:o.QY.onForerunnerReady,cbName:this.PLUGIN_NAME,cb:()=>{this.initDISCOVR_()}})}initDISCOVR_(){const e=new XMLHttpRequest;e.open("GET","https://epic.gsfc.nasa.gov/api/natural",!0),e.onload=()=>{if(e.status>=200&&e.status<400){JSON.parse(e.response).forEach(e=>{const t=e.image,i=e.identifier,a=i.slice(0,4),s=i.slice(4,6),n=i.slice(6,8),o=e.centroid_coordinates.lat,l=e.centroid_coordinates.lon;this.discvrPhotos_.push({imageUrl:`https://epic.gsfc.nasa.gov/archive/natural/${a}/${s}/${n}/png/${t}.png`,lat:o,lon:l})});for(let e=1;e<this.discvrPhotos_.length+1;e++){const t=`<li id="discovr-link${e}" class="link satPhotoRow">DSCOVR Image ${e}</li>`;(0,n.gE)("sat-photo-menu-list").insertAdjacentHTML("beforeend",t),(0,n.gE)(`discovr-link${e}`).addEventListener("click",()=>{Mi.loadPic(-1,this.discvrPhotos_[e-1].imageUrl),l.d.getMainCamera().camSnap((0,Si.sk)(this.discvrPhotos_[e-1].lat),(0,Si.fq)(this.discvrPhotos_[e-1].lon,l.d.getTimeManager().simulationTimeObj)),l.d.getMainCamera().changeZoom(.7)})}}else{f.J.log("https://epic.gsfc.nasa.gov/ request failed!");const e='<li class="link satPhotoRow disabled">DSCOVR Temporarily Unavailable</li>';(0,n.gE)("sat-photo-menu-list").insertAdjacentHTML("beforeend",e)}},e.onerror=function(){f.J.log("https://epic.gsfc.nasa.gov/ request failed!"),(0,n.gE)("sat-photo-menu-list").insertAdjacentHTML("beforeend",'<li class="link satPhotoRow disabled">DSCOVR Temporarily Unavailable</li>')},e.send()}static loadPic(e,t){var i;l.d.getUiManager().searchManager.hideResults(),null===(i=l.d.getPlugin(g.A))||void 0===i||i.selectSat(l.d.getCatalogManager().sccNum2Id(e)),l.d.getMainCamera().changeZoom(.7),Mi.colorbox(t)}static himawari8(){var e;null===(e=l.d.getPlugin(g.A))||void 0===e||e.selectSat(l.d.getCatalogManager().sccNum2Id(40267)),l.d.getMainCamera().changeZoom(.7);let t=l.d.getTimeManager().simulationTimeObj;t.getTime()<Date.now()?t=new Date(t.getTime()-18e5):(l.d.getUiManager().toast("Can't load pictures from the future. Loading most recent photos.","caution"),t=new Date(Date.now()-18e5));const i=t.getUTCFullYear(),a=(t.getUTCMonth()+1).toString().padStart(2,"0"),s=t.getUTCDate().toString().padStart(2,"0"),n=t.getUTCHours().toString().padStart(2,"0"),o=(10*Math.floor(t.getUTCMinutes()/10)).toString().padStart(2,"0");settingsManager.isPreventColorboxClose=!0,setTimeout(function(){settingsManager.isPreventColorboxClose=!1},2e3),(0,Qt.r9)(`https://himawari8.nict.go.jp/img/D531106/1d/550/${i}/${a}/${s}/${n}${o}00_0_0.png`,{image:!0})}}Mi.PLUGIN_NAME="Satellite Photos",Mi.colorbox=e=>{settingsManager.isPreventColorboxClose=!0,setTimeout(function(){settingsManager.isPreventColorboxClose=!1},2e3),(0,Qt.r9)(e,{image:!0})};const yi=new Mi,wi=i.p+"../img/video.png";class Ai{constructor(e,t,i,a){this.mediaRecorder_=null,this.recordedBlobs=[],this.supportedType=null,this.videoBitsPerSec_=null,this.isVideoRecording=!1,this.videoBitsPerSec_=e,this.onStop_=t,this.onMinorError_=i,this.onError_=a}static handleError(e){e.message.includes("Permission denied")?f.J.warn('Permission denied! Did you click "Share"?'):f.J.warn("Error:"+e)}getStream(e){return t=this,i=void 0,s=function*(){return null!=e||(e={video:{cursor:"never"},audio:!1}),"https:"===window.location.protocol||settingsManager.offline?"getDisplayMedia"in navigator?navigator.getDisplayMedia(e).catch(e=>(Ai.handleError(e),null)):"getDisplayMedia"in navigator.mediaDevices?navigator.mediaDevices.getDisplayMedia(e).catch(e=>(Ai.handleError(e),null)):(f.J.warn("Compatibility Error with Recording"),this.onError_(),!1):(f.J.warn("No Recording Support in Http! Try Https!"),this.onError_(),!1)},new((a=void 0)||(a=Promise))(function(e,n){function o(e){try{r(s.next(e))}catch(e){n(e)}}function l(e){try{r(s.throw(e))}catch(e){n(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof a?i:new a(function(e){e(i)})).then(o,l)}r((s=s.apply(t,i||[])).next())});var t,i,a,s}handleDataAvailable(e){e.data&&e.data.size>0&&this.recordedBlobs.push(e.data)}stop(){if(!this.mediaRecorder_)throw new Error("MediaRecorder is not initialized");0!=this.isVideoRecording&&(f.J.debug("Recorder stopped."),this.stream_.getTracks().forEach(e=>e.stop()),this.mediaRecorder_.stop(),this.isVideoRecording=!1,this.onStop_())}save(e){const t=e,i=new Blob(this.recordedBlobs,{type:this.supportedType}),a=window.URL.createObjectURL(i),s=document.createElement("a");s.style.display="none",s.href=a,s.download=t,l.d.containerRoot.appendChild(s),s.click(),setTimeout(()=>{l.d.containerRoot.removeChild(s),window.URL.revokeObjectURL(a)},100)}start(){this.getStream().then(e=>{if(0==e)return;this.isVideoRecording=!0,this.stream_=e;let t=["video/webm","video/webm,codecs=vp9","video/vp8","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm;codecs=h264","video/mpeg"];for(let e in t)if(window.MediaRecorder.isTypeSupported(t[e])){this.supportedType=t[e];break}null==this.supportedType&&f.J.debug("No supported type found for MediaRecorder");let i={mimeType:this.supportedType,videoBitsPerSecond:this.videoBitsPerSec_||Ai.BIT_RATE_30_MBPS};this.recordedBlobs=[];try{this.mediaRecorder_=new window.MediaRecorder(this.stream_,i)}catch(e){return this.onMinorError_(),void(this.isVideoRecording=!1)}f.J.debug(`Created MediaRecorder ${this.mediaRecorder_} with options ${i}`),this.mediaRecorder_.onstop=this.stop.bind(this),this.mediaRecorder_.ondataavailable=this.handleDataAvailable.bind(this),this.mediaRecorder_.start(100),f.J.debug(`Created MediaRecorder ${this.mediaRecorder_}`)}).catch(()=>{})}}Ai.BIT_RATE_30_MBPS=3e7,Ai.BIT_RATE_20_MBPS=2e7,Ai.BIT_RATE_10_MBPS=1e7,Ai.BIT_RATE_5_MBPS=5e6,Ai.BIT_RATE_2_MBPS=2e6,Ai.BIT_RATE_1_MBPS=1e6;class ki extends u.S{constructor(){super("Screen Recorder"),this.bottomIconCallback=()=>{if(this.isCompatibilityIssue)return f.J.warn("Recording unavailable due to compatibility issues!"),void this.shakeBottomIcon();if(this.streamManagerInstance.isVideoRecording)this.streamManagerInstance.stop();else try{this.setBottomIconToSelected(),this.streamManagerInstance.start(),this.streamManagerInstance.isVideoRecording=!0}catch(e){f.J.warn("Compatibility Error with Recording!"),this.streamManagerInstance.isVideoRecording=!1,this.setBottomIconToDisabled(),this.shakeBottomIcon(),this.isCompatibilityIssue=!0}},this.bottomIconElementName="menu-record",this.bottomIconImg=wi,this.bottomIconLabel="Record Video",this.isCompatibilityIssue=!1}addJs(){super.addJs(),l.d.register({event:o.QY.uiManagerOnReady,cbName:this.PLUGIN_NAME,cb:()=>{try{this.streamManagerInstance=new Ai(settingsManager.videoBitsPerSecond,this.onStop.bind(this),this.onMinorError.bind(this),this.onError.bind(this))}catch(e){console.warn(e)}}})}getRecorderObject(){return this.streamManagerInstance}onError(){this.setBottomIconToDisabled(),this.isIconDisabled=!0,this.streamManagerInstance.isVideoRecording=!1,this.shakeBottomIcon(),this.isCompatibilityIssue=!0}onMinorError(){this.setBottomIconToUnselected()}onStop(){this.streamManagerInstance.save(ki.FILE_NAME),this.setBottomIconToUnselected()}}ki.FILE_NAME="forerunner.webm";const Ci=new ki,Li=i.p+"../img/camera.png";class Ti extends u.S{constructor(){super("Screenshot"),this.bottomIconCallback=()=>{this.saveHiResPhoto("4k")},this.isIconDisabled=!0,this.bottomIconElementName="menu-screenshot",this.bottomIconImg=Li,this.bottomIconLabel="Take Photo",this.rmbCallback=e=>{switch(e){case"save-hd-rmb":this.saveHiResPhoto("hd");break;case"save-4k-rmb":this.saveHiResPhoto("4k");break;case"save-8k-rmb":this.saveHiResPhoto("8k")}},this.saveHiResPhoto=e=>{switch(e){case"hd":settingsManager.hiResWidth=1920,settingsManager.hiResHeight=1080;break;case"4k":settingsManager.hiResWidth=3840,settingsManager.hiResHeight=2160;break;case"8k":settingsManager.hiResWidth=7680,settingsManager.hiResHeight=4320}this.queuedScreenshot_=!0},this.queuedScreenshot_=!1}addJs(){super.addJs(),l.d.register({event:o.QY.altCanvasResize,cbName:this.PLUGIN_NAME,cb:()=>this.queuedScreenshot_}),l.d.register({event:o.QY.endOfDraw,cbName:this.PLUGIN_NAME,cb:()=>{this.queuedScreenshot_&&this.takeScreenShot()}})}takeScreenShot(){let e=document.createElement("a");e.download="spaceinteractions.png";let t=(new Date).getUTCFullYear(),i=settingsManager.copyrightOveride?"":`©${t} INTERACTIONS.SPACE`;e.href=Ti.watermarkedDataUrl(i),e.click(),this.queuedScreenshot_=!1}static watermarkedDataUrl(e){const t=l.d.getRenderer().domElement,i=document.createElement("canvas"),a=i.getContext("2d");let s=i.width=t.width,n=i.height=t.height;a.drawImage(t,0,0),a.font="24px nasalization";let o=a.measureText(e).width;a.globalAlpha=1,a.fillStyle="white",a.fillText(e,s-o-30,n-30);const{classificationstr:r,classificationColor:c}=Ti.calculateClassificationText();""!==r&&(a.font="24px nasalization",a.globalAlpha=1,a.fillStyle=c,o=a.measureText(r).width,a.fillText(r,s/2-o,n-20),a.fillText(r,s/2-o,34)),l.d.containerRoot.appendChild(i);let d=i.toDataURL();return i.parentNode.removeChild(i),d}static calculateClassificationText(){return""===settingsManager.classificationStr?{classificationstr:"",classificationColor:""}:{classificationstr:settingsManager.classificationStr,classificationColor:Mt.getColors(settingsManager.classificationStr).backgroundColor}}}const Ni=new Ti;var xi=i(6658),Ii=i(5093),_i=i(8460),Pi=i(8185);const Oi=i.p+"../img/radar.png";var Ri=i(8560),Di=i.n(Ri),Ui=i(3089),Fi=i.n(Ui),Gi=i(1195),Bi=i.n(Gi),zi=i(704),$i=i.n(zi),ji=i(9740),Vi=i.n(ji),Hi=i(6185),Yi=i.n(Hi),Ji=i(5490),Xi={};Xi.styleTagTransform=Yi(),Xi.setAttributes=$i(),Xi.insert=Bi().bind(null,"head"),Xi.domAPI=Fi(),Xi.insertStyleElement=Vi(),Di()(Ji.A,Xi),Ji.A&&Ji.A.locals&&Ji.A.locals;class Ki extends u.S{constructor(){super(Ki.PLUGIN_NAME),this.dependencies=[xt.l.PLUGIN_NAME],this.bottomIconCallback=()=>{var e;this.isMenuButtonActive&&((null===(e=l.d.getPlugin(pt))||void 0===e?void 0:e.isMenuButtonActive)?(0,_i.t)("sensor-top-link").forEach(e=>{e.style.display="none"}):(0,_i.t)("sensor-top-link").forEach(e=>{e.style.gridTemplateColumns="repeat(2,1fr)",e.style.display=""}))},this.dragOptions={isDraggable:!0,minWidth:500,maxWidth:700},this.bottomIconElementName="sensor-list-icon",this.bottomIconLabel="Sensors",this.bottomIconImg=Oi,this.sideMenuElementName="sensor-list-menu",this.sideMenuElementHtml=l.d.html`
    <div id="sensor-list-menu" class="side-menu-parent start-hidden text-select">
        <div id="sensor-list-content" class="side-menu">
        <div class="row">
          <ul id="reset-sensor-text" class="sensor-reset-menu">
            <button id="reset-sensor-button" class="center-align btn btn-ui waves-effect waves-light menu-selectable" type="button">Reset Sensor &#9658;</button>
            <li class="divider"></li>
          </ul>
          <ul id="list-of-sensors">`+Ki.ssnSensors_()+Ki.mwSensors_()+Ki.mdaSensors_()+Ki.leoLabsSensors_()+Ki.esocSensors_()+Ki.russianSensors_()+Ki.chineseSensors_()+Ki.otherSensors_()+l.d.html`
          </ul>
        </div>
      </div>
    </div>`,this.isSensorLinksAdded=!1,this.helpTitle="Sensors Menu",this.helpBody=l.d.html`The Sensors menu allows you to select a sensor for use in calculations and other menu's functions.
  Sensors are in groups based on the networks they primarily support.
  On the left side of the menu is the name of the sensor and on the right side is the country/organization that owns it.
  <br><br>
  Selecting an "All...Sensors" option will select all sensors in that group.
  This is useful for visualizing the networks coverage, but currently does not work for all calculations.
  If you are trying to calculate look angles for a network it is best to use the multi-site look angles tool or
  to use look angles for each of the individual sensors in the network.
  <br><br>
  Sensors on this list include Mechanical and Phased Array Radars, in addition to Optical sensors:
  <ul style="margin-left: 40px;">
    <li>
      Phased Array Radars typically are limited to Low Earth Orbit (LEO).
    </li>
    <li>
      Mechanical Radars can be used for both LEO and Geostationary Orbit (GEO).
    </li>
    <li>
      Optical sensors are typically used for GEO, but can also be used for LEO.
    </li>
    <li>
      Optical sensors are limited to night time observations in clear skies, whereas radars can be used for both day and night.
    </li>
  </ul>
  <br>
  Sensor information is based on publicly available data and can be verified in the Sensor Info menu.
  If you have public data on additional sensors or corrections to existing sensor information please contact me at <a href="mailto:theodore.kruczek@gmail.com">theodore.kruczek@gmail.com</a>.`}addHtml(){super.addHtml(),l.d.register({event:o.QY.uiManagerInit,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.gE)("nav-mobile").insertAdjacentHTML("beforeend",l.d.html`<div id="sensor-selected" class="waves-effect waves-light"></div>`)}}),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.gE)("sensor-selected").addEventListener("click",()=>{var e;l.d.runEvent(o.QY.bottomMenuClick,this.bottomIconElementName),null===(e=l.d.getSoundManager())||void 0===e||e.play(p.A.CLICK)}),(0,n.gE)("sensor-list-content").addEventListener("click",e=>{var t;let i=e.target;if(!(null==i?void 0:i.classList.contains("menu-selectable"))&&(i=null==i?void 0:i.closest(".menu-selectable"),!(null==i?void 0:i.classList.contains("menu-selectable"))))return;if("reset-sensor-button"===i.id)return l.d.getSensorManager().resetSensorSelected(),void l.d.getSoundManager().play(p.A.MENU_BUTTON);null===(t=l.d.getSoundManager())||void 0===t||t.play(p.A.CLICK);const a=i.dataset.sensor;this.sensorListContentClick(a)})}}),l.d.register({event:o.QY.selectSatData,cbName:"sensor",cb:e=>{null!=e&&(null===l.d.getPlugin(ui.c)||this.isSensorLinksAdded||((0,n.gE)("sat-info-top-links").insertAdjacentHTML("beforeend",l.d.html`
                  <div id="sensors-in-fov-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                        data-tooltip="Visualize Sensor Coverage">Show All Sensors with FOV...</div>
                `),(0,n.gE)("sensors-in-fov-link").addEventListener("click",()=>{l.d.getSoundManager().play(p.A.CLICK);const e=l.d.getPlugin(g.A);if(!e)return;const t=e.getSelectedSat();t.isMissile()||Object.keys(Ii.a).forEach(e=>{const i=Ii.a[e];i.isSatInFov(t,l.d.getTimeManager().simulationTimeObj)&&l.d.getLineManager().create(hi.wj.MULTI_SENSORS_TO_SAT,[t.id,l.d.getCatalogManager().getSensorFromSensorName(i.name)],"g")})}),this.isSensorLinksAdded=!0))}})}addJs(){super.addJs(),l.d.register({event:o.QY.sensorDotSelected,cbName:this.PLUGIN_NAME,cb:e=>{if(settingsManager.isMobileModeEnabled)return;if(!e.isSensor())return;const t=e,i=l.d.getSensorManager();if(i.setSensor(null,t.sensorId),0===i.currentSensors.length)throw new Error("No sensors found");const a=l.d.getTimeManager();l.d.getMainCamera().lookAtLatLon(i.currentSensors[0].lat,i.currentSensors[0].lon,i.currentSensors[0].zoom,a.selectedDate)}}),l.d.register({event:o.QY.onCruncherReady,cbName:this.PLUGIN_NAME,cb:()=>{!settingsManager.disableUI&&settingsManager.isLoadLastSensor&&Ki.reloadLastSensor_()}})}sensorListContentClick(e){var t;if(!this.isMenuButtonActive)return;const i=l.d.getSensorManager();if(void 0!==e){switch(e){case"cspocAll":i.setSensor("SSN");break;case"mwAll":i.setSensor("NATO-MW");break;case"mdAll":i.setSensor("MD-ALL");break;case"esocAll":i.setSensor("ESOC-ALL");break;case"llAll":i.setSensor("LEO-LABS");break;case"rusAll":i.setSensor("RUS-ALL");break;case"prcAll":i.setSensor("PRC-ALL");break;default:i.setSensor(Ii.a[`${e}`])}null===(t=l.d.getPlugin(g.A))||void 0===t||t.selectSat(-1);try{l.d.getMainCamera().lookAtLatLon(i.currentSensors[0].lat,i.currentSensors[0].lon,i.currentSensors[0].zoom,l.d.getTimeManager().selectedDate)}catch(e){f.J.warn("Error in sensorListContentClick: "+e)}settingsManager.currentColorScheme==l.d.getColorSchemeManager().default&&dt.b.change("default")}else f.J.debug("The menu item was clicked but the menu was not defined.")}static createLiForSensor_(e){return l.d.html`
      <li class="menu-selectable" data-sensor="${e.objName}">
        <span>${e.uiName}</span>
        <span>${e.system}</span>
        <span class="badge dark-blue-badge" data-badge-caption="${e.operator}"></span>
      </li>
    `}static ssnSensors_(){return this.createSection_({header:"Space Surveillance Network Sensors",sensors:[Ii.a.EGLAFB,Ii.a.KWAJSPF,Ii.a.GEODDSDGC,Ii.a.GEODDSMAU,Ii.a.GEODDSSOC,Ii.a.KWAJALT,Ii.a.KWAJMMW,Ii.a.KWAJALC,Ii.a.KWAJTDX,Ii.a.MITMIL,Ii.a.RAFASC,Ii.a.GLBII,Ii.a.HOLCBAND,Ii.a.HOLSST],topLinks:[{name:"All SSN Sensors",dataSensor:"ssnAll",badge:"COALITION"}]})}static mwSensors_(){return this.createSection_({header:"US Missile Warning Sensors",sensors:[Ii.a.BLEAFB,Ii.a.CODSFS,Ii.a.CAVSFS,Ii.a.CLRSFS,Ii.a.COBRADANE,Ii.a.RAFFYL,Ii.a.PITSB],topLinks:[{name:"All MW Sensors",dataSensor:"mwAll",badge:"NORAD"}]})}static mdaSensors_(){return this.createSection_({header:"US Missile Defense Agency Sensors",sensors:[Ii.a.HARTPY,Ii.a.QTRTPY,Ii.a.KURTPY,Ii.a.SHATPY,Ii.a.KCSTPY,Ii.a.SBXRDR],topLinks:[{name:"All MDA Sensors",dataSensor:"mdAll",badge:"MDA"}]})}static createSection_(e){return l.d.html`
              <li class="divider"></li>
              <h5 class="center-align">${e.header}</h5>
              <li class="divider"></li>
              ${e.topLinks.map(e=>l.d.html`<li class="menu-selectable sensor-top-link" data-sensor="${e.dataSensor}">
                <span>${e.name}</span>
                <span class="badge dark-blue-badge" data-badge-caption="${e.badge}"></span>
              </li>`).join("")}
              ${e.sensors.map(e=>Ki.createLiForSensor_(e)).join("")}
              `}static esocSensors_(){return this.createSection_({header:"ESA Space Operations Center Sensors",sensors:[Ii.a.GRV,Ii.a.TIR,Ii.a.GES,Ii.a.NRC,Ii.a.PDM,Ii.a.TRO,Ii.a.Tenerife,Ii.a.ZimLAT,Ii.a.ZimSMART,Ii.a.Tromso,Ii.a.Kiruna,Ii.a.Sodankyla,Ii.a.Svalbard],topLinks:[{name:"All ESOC Sensors",dataSensor:"esocAll",badge:"ESA"}]})}static leoLabsSensors_(){return this.createSection_({header:"Leo Labs Sensors",sensors:[Ii.a.LEOCRSR,Ii.a.LEOAZORES,Ii.a.LEOKSR,Ii.a.LEOPFISR,Ii.a.LEOMSR],topLinks:[{name:"All Leo Labs Sensors",dataSensor:"llAll",badge:"LEOLABS"}]})}static otherSensors_(){return this.createSection_({header:"Other Sensors",sensors:[Ii.a.ROC,Ii.a.MLS,Ii.a.PO,Ii.a.LSO,Ii.a.MAY],topLinks:[]})}static russianSensors_(){return this.createSection_({header:"Russian Sensors",sensors:[Ii.a.OLED,Ii.a.OLEV,Ii.a.PEC,Ii.a.MISD,Ii.a.MISV,Ii.a.LEKV,Ii.a.ARMV,Ii.a.KALV,Ii.a.BARV,Ii.a.YENV,Ii.a.ORSV,Ii.a.STO,Ii.a.NAK],topLinks:[{name:"All Russian Sensors",dataSensor:"rusAll",badge:"RUS"}]})}static chineseSensors_(){return this.createSection_({header:"Chinese Sensors",sensors:[Ii.a.SHD,Ii.a.HEI,Ii.a.ZHE,Ii.a.XIN,Ii.a.PMO],topLinks:[{name:"All Chinese Sensors",dataSensor:"prcAll",badge:"PRC"}]})}static reloadLastSensor_(){const e=Pi.l.getInstance().getItem(Pi.Z.CURRENT_SENSOR);if(!e)return;const t=JSON.parse(e);if(null!==t)try{const e=l.d.getSensorManager();void 0===t[0]||null==t[0]?(e.setSensor(null,t[1]),dt.b.change("default")):void 0===t[0].objName?(e.setSensor(t[0],t[1]),dt.b.change("default")):(e.setSensor(Ii.a[t[0].objName],t[1]),dt.b.change("default"))}catch(e){Pi.l.getInstance().removeItem(Pi.Z.CURRENT_SENSOR)}}}Ki.PLUGIN_NAME="Sensor List";var Wi=i(1);const Zi=e=>{const t=new CustomEvent("customSubmit",{cancelable:!0});e.dispatchEvent(t)};var Qi=i(2376);class qi{static updateSensorPosition(e){var t;const i=l.d.getTimeManager(),a=l.d.getCatalogManager(),s=l.d.getSensorManager(),{lon:n,lat:o,alt:r,minaz:c,maxaz:d,minel:u,maxel:p,minrange:h,maxrange:m}=qi.updateSettingsManager(e);s.whichRadar="CUSTOM",qi.updateCustomSensorUi_();const v={lat:o,lon:n,alt:r,minAz:c,maxAz:d,minEl:u,maxEl:p,minRng:h,maxRng:m};a.satCruncher.postMessage({typ:St.XY.SENSOR,sensor:v}),Qi.g.updateSensorUiStyling([v]),null===(t=l.d.getPlugin(g.A))||void 0===t||t.selectSat(-1);const b=l.d.getMainCamera();m>6e3?b.changeZoom(M.N$.GEO):b.changeZoom(M.N$.LEO),b.camSnap((0,Si.sk)(o),(0,Si.fq)(n,i.simulationTimeObj))}static updateSettingsManager(e){return settingsManager.geolocation.lat=e.coords.latitude,settingsManager.geolocation.lon=e.coords.longitude,settingsManager.geolocation.alt=e.coords.altitude/1e3,settingsManager.geolocation.minaz=0,settingsManager.geolocation.maxaz=360,settingsManager.geolocation.minel=30,settingsManager.geolocation.maxel=90,settingsManager.geolocation.minrange=0,settingsManager.geolocation.maxrange=1e5,settingsManager.geolocation}static useCurrentGeolocationAsSensor(){"https:"===location.protocol&&!settingsManager.geolocationUsed&&settingsManager.isMobileModeEnabled&&navigator.geolocation.getCurrentPosition(qi.updateSensorPosition)}static updateCustomSensorUi_(){if(!settingsManager.geolocation)throw new Error("geolocation is not defined");if("number"!=typeof settingsManager.geolocation.lat)throw new Error("geolocation.lat is not valid");if("number"!=typeof settingsManager.geolocation.lon)throw new Error("geolocation.lon is not valid");if("number"!=typeof settingsManager.geolocation.alt)throw new Error("geolocation.alt is not valid");try{const e=(0,n.gE)("cs-lat"),t=(0,n.gE)("cs-lon"),i=(0,n.gE)("cs-hei");e.value=settingsManager.geolocation.lat.toString(),e.dispatchEvent(new Event("change")),t.value=settingsManager.geolocation.lon.toString(),t.dispatchEvent(new Event("change")),i.value=settingsManager.geolocation.alt.toString(),i.dispatchEvent(new Event("change")),(0,n.gE)("cs-telescope").checked=!0,(0,n.gE)("cs-minaz").disabled=!0,(0,n.gE)("cs-maxaz").disabled=!0,(0,n.gE)("cs-minel").disabled=!0,(0,n.gE)("cs-maxel").disabled=!0,(0,n.gE)("cs-minrange").disabled=!0,(0,n.gE)("cs-maxrange").disabled=!0,(0,n.gE)("cs-minaz-div").style.display="none",(0,n.gE)("cs-maxaz-div").style.display="none",(0,n.gE)("cs-minel-div").style.display="none",(0,n.gE)("cs-maxel-div").style.display="none",(0,n.gE)("cs-minrange-div").style.display="none",(0,n.gE)("cs-maxrange-div").style.display="none",(0,n.gE)("cs-minaz").value="0",(0,n.gE)("cs-maxaz").value="360",(0,n.gE)("cs-minel").value="10",(0,n.gE)("cs-maxel").value="90",(0,n.gE)("cs-minrange").value="100",(0,n.gE)("cs-maxrange").value="50000",(0,n.gE)("sensor-type").innerHTML="Telescope",(0,n.gE)("sensor-info-title").innerHTML="Custom Sensor",(0,n.gE)("sensor-country").innerHTML="Custom Sensor"}catch(e){f.J.debug("Error updating custom sensor UI. Is the plugin loaded?")}}}const ea=i.p+"../img/custom.png",ta=i.p+"../img/multi-site.png";class ia extends u.S{constructor(){super(ia.PLUGIN_NAME),this.dependencies=[g.A.PLUGIN_NAME],this.isRequireSatelliteSelected=!0,this.isRequireSensorSelected=!1,this.bottomIconCallback=()=>{const e=this.selectSatManager_.getSelectedSat();(null==e?void 0:e.isSatellite())&&this.refreshSideMenuData(e)},this.lookanglesLength=1,this.lookanglesInterval=30,this.disabledSensors=[],this.bottomIconElementName="multi-site-look-angles-icon",this.bottomIconLabel="Multi-Site Looks",this.bottomIconImg=ta,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.dragOptions={isDraggable:!0,minWidth:350,maxWidth:500},this.helpTitle="Multi-Site Look Angles Menu",this.helpBody=l.d.html`
    The Multi-Site Look Angles menu allows you to calculate the range, azimuth, and elevation angles between a satellite and multiple sensors.
    A satellite must first be selected before the menu can be used.
    <br><br>
    By default the menu will calculate the look angles for all sensors in the Space Surveillance Netowrk.
    If you would like to calculate the look angles for additional sensors, you can export a csv file at the bottom of the menu.
    The csv file will contain look angles for all sensors.
    <br><br>
    Clicking on a row in the table will select the sensor and change the simulation time to the time of the look angle.`,this.sideMenuElementName="multi-site-look-angles-menu",this.sideMenuElementHtml=l.d.html`
    <div id="${this.sideMenuElementName}" class="side-menu-parent start-hidden text-select">
        <div id="multi-site-look-angles-content" class="side-menu">
        <div class="row">
            <h5 class="center-align">Multi-Sensor Look Angles</h5>
            <div id="multi-site-look-angles-sensor-list">
            </div>
            <table id="multi-site-look-angles-table" class="center-align striped-light centered"></table>
            <br />
            <center>
            <button id="multi-site-look-angles-export" class="btn btn-ui waves-effect waves-light">Export &#9658;</button>
            </center>
        </div>
        </div>
    </div>`,this.selectSatManager_=l.d.getPlugin(g.A)}addHtml(){super.addHtml(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e;null===(e=(0,n.gE)("multi-site-look-angles-export"))||void 0===e||e.addEventListener("click",()=>{l.d.getSoundManager().play(p.A.EXPORT);const e=l.d.getSensorManager().lastMultiSiteArray.map(e=>({time:e.time,sensor:e.objName,az:e.az.toFixed(2),el:e.el.toFixed(2),rng:e.rng.toFixed(2)}));(0,at.g3)(e,"multiSiteLooks")})}}),l.d.register({event:o.QY.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfCanBeEnabled_(e)}})}checkIfCanBeEnabled_(e){(null==e?void 0:e.isSatellite())&&l.d.getSensorManager().isSensorSelected()?(this.setBottomIconToEnabled(),this.isMenuButtonActive&&e&&this.refreshSideMenuData(e)):(this.isMenuButtonActive&&this.closeSideMenu(),this.setBottomIconToDisabled())}addJs(){super.addJs(),l.d.register({event:o.QY.staticOffsetChange,cbName:this.PLUGIN_NAME,cb:()=>{const e=this.selectSatManager_.getSelectedSat();(null==e?void 0:e.isSatellite())&&this.refreshSideMenuData(e)}})}refreshSideMenuData(e){this.isMenuButtonActive&&e&&(0,b.Cs)(()=>{const t=(0,n.gE)("multi-site-look-angles-sensor-list");if(!t)return void f.J.warn("Could not find sensor list dom");t.innerHTML="";const i=[];for(const a of l.d.getSensorManager().sensorListUS){if(!a.shortName)continue;const s=document.createElement("button");s.classList.add("btn","btn-ui","waves-effect","waves-light"),this.disabledSensors.includes(a)&&s.classList.add("btn-red"),i.push(a),s.innerText=a.shortName,s.addEventListener("click",()=>{s.classList.contains("btn-red")?(s.classList.remove("btn-red"),this.disabledSensors.splice(this.disabledSensors.indexOf(a),1),l.d.getSoundManager().play(p.A.TOGGLE_ON)):(s.classList.add("btn-red"),this.disabledSensors.push(a),l.d.getSoundManager().play(p.A.TOGGLE_OFF)),this.getlookanglesMultiSite_(e,i.filter(e=>!this.disabledSensors.includes(e)))}),t.appendChild(s),t.appendChild(document.createTextNode(" "))}this.getlookanglesMultiSite_(e,i.filter(e=>!this.disabledSensors.includes(e)))})}getlookanglesMultiSite_(e,t){const i=l.d.getTimeManager(),a=l.d.getSensorManager(),s=l.d.getCatalogManager().staticSet;if(!t){t=[];for(const e in s){const i=s[e];t.push(i)}}const n=!a.isSensorSelected(),o=[...a.currentSensors],r=M.hJ/(e.satrec.no*M.hJ/M.DD),c=[];for(const a of t){if(a.maxRng<e.perigee&&(!a.maxRng2||a.maxRng2<e.perigee))continue;Qi.g.updateSensorUiStyling([a]);let t=0;for(let s=0;s<24*this.lookanglesLength*60*60;s+=this.lookanglesInterval){t=1e3*s;let n=i.getOffsetTimeObj(t),o=ia.propagateMultiSite_(n,e.satrec,a);""!==o.time&&(c.push(o),s+=60*r*.75)}}c.sort((e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime()),a.lastMultiSiteArray=c,n?a.setCurrentSensor(null):a.setCurrentSensor(o),ia.populateMultiSiteTable_(c)}static propagateMultiSite_(e,t,i){const a=it.h.getRae(e,t,i);return it.h.checkIsInView(i,a)?{time:e.toISOString(),el:a.el,az:a.az,rng:a.rng,objName:i.objName}:{time:"",el:0,az:0,rng:0,objName:""}}static populateMultiSiteTable_(e){var t;const i=l.d.getSensorManager(),a=l.d.getCatalogManager().staticSet,s=(0,n.gE)("multi-site-look-angles-table");s.innerHTML="";let o=s.insertRow(),r=o.insertCell();r.appendChild(document.createTextNode("Time")),r.setAttribute("style","text-decoration: underline");let c=o.insertCell();c.appendChild(document.createTextNode("El")),c.setAttribute("style","text-decoration: underline");let d=o.insertCell();d.appendChild(document.createTextNode("Az")),d.setAttribute("style","text-decoration: underline");let u=o.insertCell();u.appendChild(document.createTextNode("Rng")),u.setAttribute("style","text-decoration: underline");let g=o.insertCell();g.appendChild(document.createTextNode("Sensor")),g.setAttribute("style","text-decoration: underline");const p=l.d.getTimeManager();for(const n of e){const e=a.find(e=>e.objName===n.objName);e&&(o=s.insertRow(),o.setAttribute("class","link"),r=o.insertCell(),r.appendChild(document.createTextNode((0,jt.i)(n.time,"isoDateTime",!0))),c=o.insertCell(),c.appendChild(document.createTextNode(n.el.toFixed(1))),d=o.insertCell(),d.appendChild(document.createTextNode(n.az.toFixed(0))),u=o.insertCell(),u.appendChild(document.createTextNode(n.rng.toFixed(0))),g=o.insertCell(),g.appendChild(document.createTextNode(null!==(t=e.shortName)&&void 0!==t?t:"")),o.addEventListener("click",()=>{p.changeStaticOffset(new Date(n.time).getTime()-(new Date).getTime()),i.setSensor(e,e.sensorId)}))}}}ia.PLUGIN_NAME="Multi Site Look Angles";class aa extends u.S{constructor(){super(ia.PLUGIN_NAME),this.bottomIconCallback=()=>{if(this.isMenuButtonActive){const e=l.d.getSensorManager();e.isSensorSelected()&&((0,n.gE)("cs-lat").value=e.currentSensors[0].lat.toString(),(0,n.gE)("cs-lon").value=e.currentSensors[0].lon.toString(),(0,n.gE)("cs-hei").value=e.currentSensors[0].alt.toString())}},this.bottomIconElementName="custom-sensor-icon",this.bottomIconLabel="Custom Sensor",this.bottomIconImg=ea,this.sideMenuElementName="custom-sensor-menu",this.sideMenuElementHtml=l.d.html`
    <div id="custom-sensor-menu" class="side-menu-parent start-hidden text-select">
        <div id="customSensor-content" class="side-menu">
        <div class="row">
            <h5 class="center-align">Custom Sensor</h5>
            <form id="customSensor">
            <div class="input-field col s12" data-position="top" data-delay="50" data-tooltip="Latitude in Decimal Form (ex: 43.283)">
                <input id="cs-lat" type="text" value="0" />
                <label for="cs-lat" class="active">Latitude</label>
            </div>
            <div class="input-field col s12" data-position="top" data-delay="50" data-tooltip="Longitude in Decimal Form (ex: -73.283)">
                <input id="cs-lon" type="text" value="0" />
                <label for="cs-lon" class="active">Longitude</label>
            </div>
            <div class="input-field col s12" data-position="top" data-delay="50" data-tooltip="Elevation in kilometers (ex: 0.645)">
                <input id="cs-hei" type="text" value="0" />
                <label for="cs-hei" class="active">Elevation Above Sea Level (Km)</label>
            </div>
            <div class="input-field col s12">
                <select id="cs-type">
                <option value="Observer">Observer</option>
                <option value="Optical">Optical</option>
                <option value="Phased Array Radar">Phased Array Radar</option>
                <option value="Mechanical">Mechanical</option>
                </select>
                <label>Type of Sensor</label>
            </div>
            <div class="input-field col s12">
              <div class="switch row" data-position="top" data-delay="50" data-tooltip="Is this Sensor a Telescope?">
                  <label>
                  <input id="cs-telescope" type="checkbox" checked="false" />
                  <span class="lever"></span>
                  Telescope
                  </label>
              </div>
            </div>
            <div id="cs-minaz-div" class="start-hidden input-field col s12" data-position="top" data-delay="50" data-tooltip="Azimuth in degrees (ex: 50)">
                <input id="cs-minaz" type="text" value="0" />
                <label for="cs-minaz" class="active">Minimum Azimuth</label>
            </div>
            <div id="cs-maxaz-div" class="start-hidden input-field col s12" data-position="top" data-delay="50" data-tooltip="Azimuth in degrees (ex: 120)">
                <input id="cs-maxaz" type="text" value="360" />
                <label for="cs-maxaz" class="active">Maximum Azimuth</label>
            </div>
            <div id="cs-minel-div" class="start-hidden input-field col s12" data-position="top" data-delay="50" data-tooltip="Elevation in degrees (ex: 10)">
                <input id="cs-minel" type="text" value="10" />
                <label for="cs-minel" class="active">Minimum Elevation</label>
            </div>
            <div id="cs-maxel-div" class="start-hidden input-field col s12" data-position="top" data-delay="50" data-tooltip="Elevation in degrees (ex: 90)">
                <input id="cs-maxel" type="text" value="90" />
                <label for="cs-maxel" class="active">Maximum Elevation</label>
            </div>
            <div id="cs-minrange-div" class="start-hidden input-field col s12" data-position="top" data-delay="50" data-tooltip="Range in kilometers (ex: 500)">
                <input id="cs-minrange" type="text" value="100" />
                <label for="cs-minrange" class="active">Minimum Range</label>
            </div>
            <div id="cs-maxrange-div" class="start-hidden input-field col s12" data-position="top" data-delay="50" data-tooltip="Range in kilometers (ex: 20000)">
                <input id="cs-maxrange" type="text" value="50000" />
                <label for="cs-maxrange" class="active">Maximum Range</label>
            </div>
            <div class="center-align">
                <button id="cs-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Add Custom Sensor &#9658;</button>
                <br />
                <br />
                <button id="cs-clear" class="btn btn-ui waves-effect waves-light" name="action">Clear Custom Sensors &#9658;</button>
                <br />
                <br />
                <button id="cs-geolocation" class="btn btn-ui waves-effect waves-light" name="search">Use Geolocation &#9658;</button>
            </div>
            </form>
        </div>
        </div>
    </div>`,this.rmbCallback=e=>{const t=l.d.getSensorManager(),i=l.d.getColorSchemeManager(),a=l.d.getUiManager(),s=l.d.getCatalogManager(),o=l.d.getInputManager().mouse;switch(e){case"create-observer-rmb":(0,w.xA)((0,n.gE)("custom-sensor-menu"),1e3),(0,n.gE)("custom-sensor-icon").classList.add("bmenu-item-selected"),t.isCustomSensorMenuOpen=!0,(0,n.gE)("cs-telescope").checked||(0,n.gE)("cs-telescope").click(),(0,n.gE)("cs-lat").value=o.latLon.lat.toString(),(0,n.gE)("cs-lon").value=o.latLon.lon.toString(),(0,n.gE)("cs-hei").value="0",(0,n.gE)("cs-type").value="Observer",Zi((0,n.gE)("customSensor")),s.satCruncher.postMessage({isSunlightView:!0,typ:St.XY.SUNLIGHT_VIEW}),dt.b.change("sunlight"),a.colorSchemeChangeAlert(i.sunlight),Ct(s.satCruncher,()=>{i.setColorScheme(i.sunlight,!0)},e=>e.satInSun);break;case"create-sensor-rmb":(0,w.xA)((0,n.gE)("custom-sensor-menu"),1e3),(0,n.gE)("custom-sensor-icon").classList.add("bmenu-item-selected"),t.isCustomSensorMenuOpen=!0,(0,n.gE)("cs-telescope").checked&&(0,n.gE)("cs-telescope").click(),(0,n.gE)("cs-lat").value=o.latLon.lat.toString(),(0,n.gE)("cs-lon").value=o.latLon.lon.toString(),(0,n.gE)("cs-hei").value="0",(0,n.gE)("cs-type").value="Phased Array Radar",(0,n.gE)("cs-minaz").value="0",(0,n.gE)("cs-maxaz").value="360",(0,n.gE)("cs-minel").value="10",(0,n.gE)("cs-maxel").value="90",(0,n.gE)("cs-minrange").value="0",(0,n.gE)("cs-maxrange").value="5556",Zi((0,n.gE)("customSensor")),dt.b.change("default"),i.setColorScheme(i.default,!0),a.colorSchemeChangeAlert(settingsManager.currentColorScheme),s.satCruncher.postMessage({isSunlightView:!1,typ:St.XY.SUNLIGHT_VIEW})}},this.dragOptions={isDraggable:!0},this.helpTitle="Custom Sensor Menu",this.helpBody=l.d.html`
  This allows you to create a custom sensor for use in calculations and other menu's functions.
  This can be a completely original sensor or a modification of an existing sensor.
  <br><br>
  After setting the latitude, longitude, and altitude of the sensor, you can set the sensor's field of view.
  Selecting telescope will create a 360 degree field of view with an elevation mask of 10 degrees and unlimited range.
  Deselecting the telescope option will allow you to set the field of view manually.
  <br><br>
  If you are trying to edit an existing sensor, you can select it from the sensor list first and the custom sensor will be updated with the selected sensor's information.`}addHtml(){super.addHtml(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{aa.httpsCheck_(),aa.addCustomSensorFormSubmitListener(),aa.addTelescopeClickListener_(),aa.addCustomSensorBtnCLickListener_(),aa.addClearCustomSensorListener_()}})}static httpsCheck_(){"https:"!==location.protocol?(0,n.ys)("cs-geolocation"):aa.addUseGeolocationListener_()}static addCustomSensorFormSubmitListener(){(0,n.gE)("customSensor").addEventListener("submit",e=>{e.preventDefault()})}static addUseGeolocationListener_(){(0,n.gE)("cs-geolocation").addEventListener("click",qi.useCurrentGeolocationAsSensor)}static addClearCustomSensorListener_(){(0,n.gE)("cs-clear").addEventListener("click",()=>{l.d.getSensorManager().clearSecondarySensors()})}static addCustomSensorBtnCLickListener_(){(0,n.gE)("cs-submit").addEventListener("click",()=>{aa.processCustomSensorSubmit_()})}static processCustomSensorSubmit_(){var e,t,i,a,s;null===(e=(0,n.gE)("menu-sensor-info"))||void 0===e||e.classList.remove("bmenu-item-disabled"),null===(t=(0,n.gE)("menu-fov-bubble"))||void 0===t||t.classList.remove("bmenu-item-disabled"),null===(i=(0,n.gE)("menu-surveillance"))||void 0===i||i.classList.remove("bmenu-item-disabled"),null===(a=(0,n.gE)("menu-planetarium"))||void 0===a||a.classList.remove("bmenu-item-disabled"),null===(s=(0,n.gE)("menu-astronomy"))||void 0===s||s.classList.remove("bmenu-item-disabled"),(0,n.gE)("sensor-type").value=(0,n.gE)("cs-type").value.replace(/</gu,"&lt;").replace(/>/gu,"&gt;"),(0,n.gE)("sensor-info-title").innerHTML="Custom Sensor",(0,n.gE)("sensor-country").innerHTML="Custom Sensor";const o=aa.str2Deg((0,n.gE)("cs-lon").value),r=aa.str2Deg((0,n.gE)("cs-lat").value),c=(0,n.gE)("cs-hei").value,d=(0,n.gE)("cs-type").value,u=(0,n.gE)("cs-minaz").value,g=(0,n.gE)("cs-maxaz").value,p=(0,n.gE)("cs-minel").value,h=(0,n.gE)("cs-maxel").value,m=(0,n.gE)("cs-minrange").value,v=(0,n.gE)("cs-maxrange").value;let b=M._V.OBSERVER;switch(d){case"Observer":b=M._V.OBSERVER;break;case"Optical":b=M._V.OPTICAL;break;case"Mechanical":b=M._V.MECHANICAL;break;case"Phased Array Radar":b=M._V.PHASED_ARRAY_RADAR;break;default:f.J.info("Unknown sensor type: "+d),b=M._V.OBSERVER}l.d.getSensorManager().addSecondarySensor(new M.tn({id:null,lat:r,lon:o,alt:aa.str2Km(c),minAz:aa.str2Deg(u),maxAz:aa.str2Deg(g),minEl:aa.str2Deg(p),maxEl:aa.str2Deg(h),minRng:aa.str2Km(m),maxRng:aa.str2Km(v),type:b,name:"Custom Sensor",uiName:"Custom Sensor",system:"Custom Sensor",country:"Custom Sensor",objName:"Custom Sensor",operator:"Custom Sensor",zoom:aa.str2Km(v)>6e3?M.N$.GEO:M.N$.LEO,volume:!1}))}static addTelescopeClickListener_(){(0,n.gE)("cs-telescope").addEventListener("click",()=>{if((0,n.gE)("cs-telescope").checked)(0,n.gE)("cs-minaz-div").style.display="none",(0,n.gE)("cs-maxaz-div").style.display="none",(0,n.gE)("cs-minel-div").style.display="none",(0,n.gE)("cs-maxel-div").style.display="none",(0,n.gE)("cs-minrange-div").style.display="none",(0,n.gE)("cs-maxrange-div").style.display="none",(0,n.gE)("cs-minaz").value="0",(0,n.gE)("cs-maxaz").value="360",(0,n.gE)("cs-minel").value="10",(0,n.gE)("cs-maxel").value="90",(0,n.gE)("cs-minrange").value="100",(0,n.gE)("cs-maxrange").value="1000000";else{(0,n.gE)("cs-minaz-div").style.display="block",(0,n.gE)("cs-maxaz-div").style.display="block",(0,n.gE)("cs-minel-div").style.display="block",(0,n.gE)("cs-maxel-div").style.display="block",(0,n.gE)("cs-minrange-div").style.display="block",(0,n.gE)("cs-maxrange-div").style.display="block";const e=l.d.getSensorManager();e.isSensorSelected()&&((0,n.gE)("cs-minaz").value=e.currentSensors[0].minAz.toString(),(0,n.gE)("cs-maxaz").value=e.currentSensors[0].maxAz.toString(),(0,n.gE)("cs-minel").value=e.currentSensors[0].minEl.toString(),(0,n.gE)("cs-maxel").value=e.currentSensors[0].maxEl.toString(),(0,n.gE)("cs-minrange").value=e.currentSensors[0].minRng.toString(),(0,n.gE)("cs-maxrange").value=e.currentSensors[0].maxRng.toString())}})}static str2Km(e){return parseFloat(e)}static str2Deg(e){return parseFloat(e)}}aa.PLUGIN_NAME="Custom Sensor";const sa=i.p+"../img/radio-tower.png";class na extends u.S{constructor(){super(na.PLUGIN_NAME),this.isRequireSensorSelected=!0,this.bottomIconCallback=()=>{this.getSensorInfo(),this.checkIfLinesVisible_(l.d.getLineManager())},this.bottomIconElementName="sensor-info-icon",this.bottomIconLabel="Sensor Info",this.bottomIconImg=sa,this.isIconDisabledOnLoad=!0,this.isIconDisabled=!0,this.sideMenuElementName="sensor-info-menu",this.sideMenuElementHtml=l.d.html`
    <div id="sensor-info-menu" class="side-menu-parent start-hidden text-select">
    <div id="sensor-content" class="side-menu">
        <div class="row">
        <h5 id="sensor-info-title" class="center-align">Sensor Name</h5>
        <div class="sensor-info-row" style="margin-top: 0px;">
            <div class="sensor-info-key">Country</div>
            <div class="sensor-info-value" id="sensor-country">USA</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Sensor Type</div>
            <div class="sensor-info-value" id="sensor-type">Unknown</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Latitude</div>
            <div class="sensor-info-value" id="sensor-latitude">0</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Longitude</div>
            <div class="sensor-info-value" id="sensor-longitude">0</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Min Azimuth</div>
            <div class="sensor-info-value" id="sensor-minazimuth">30 deg</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Max Azimuth</div>
            <div class="sensor-info-value" id="sensor-maxazimuth">30 deg</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Min Elevation</div>
            <div class="sensor-info-value" id="sensor-minelevation">60 deg</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Max Elevation</div>
            <div class="sensor-info-value" id="sensor-maxelevation">60 deg</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Min Range</div>
            <div class="sensor-info-value" id="sensor-minrange">1000 km</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Max Range</div>
            <div class="sensor-info-value" id="sensor-maxrange">1000 km</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Band</div>
            <div class="sensor-info-value" id="sensor-band">UHF</div>
        </div>
        <div class="sensor-info-row">
            <div class="sensor-info-key">Beam Width</div>
            <div class="sensor-info-value" id="sensor-beamwidth">10 deg</div>
        </div>
        <div class="center-align row">
            <button id="sensor-sun-btn" class="btn btn-ui waves-effect waves-light" type="button">Draw Line to Sun &#9658;</button>
        </div>
        <div class="center-align row">
            <button id="sensor-moon-btn" class="btn btn-ui waves-effect waves-light" type="button">Draw Line to Moon &#9658;</button>
        </div>
        </div>
    </div>
    </div>`,this.dragOptions={isDraggable:!0},this.isSunLineVisible_=!1,this.isMonnLineVisible_=!1,this.helpTitle="Sensor Info",this.helpBody=l.d.html`
    Sensor Info provides information about the currently selected sensor.
    The information is based on publicly available data and may not always be 100% accurate.
    If you have public data on additional sensors or corrections to existing sensor information please contact me at <a href="mailto:theodore.kruczek@gmail.com">theodore.kruczek@gmail.com</a>.
    <br><br>
    The information provided includes:
    <ul style="margin-left: 40px;">
      <li>
        Sensor Name
      </li>
      <li>
        Sensor Owner
      </li>
      <li>
        Sensor Type
      </li>
      <li>
        Sensor Field of View
      </li>
    </ul>
    <br>
    Additionally, lines can be quickly created from the sensor to the sun or moon from this menu.`}addHtml(){super.addHtml(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{this.addSensorToSunBtnListener_(),this.addSensorToMoonBtnListener()}}),l.d.register({event:o.QY.onLineAdded,cbName:this.PLUGIN_NAME,cb:e=>{this.checkIfLinesVisible_(e)}})}checkIfLinesVisible_(e){this.isSunLineVisible_=e.drawLineList.some(e=>e.type===hi.wj.SENSOR_TO_SUN),this.isSunLineVisible_?((0,n.gE)("sensor-sun-btn").textContent="Remove Line to Sun  ▶",this.isSunLineVisible_=!0):((0,n.gE)("sensor-sun-btn").textContent="Add Line to Sun  ▶",this.isSunLineVisible_=!1),this.isMonnLineVisible_=e.drawLineList.some(e=>e.type===hi.wj.SENSOR_TO_MOON),this.isMonnLineVisible_?((0,n.gE)("sensor-moon-btn").textContent="Remove Line to Moon  ▶",this.isMonnLineVisible_=!0):((0,n.gE)("sensor-moon-btn").textContent="Add Line to Moon  ▶",this.isMonnLineVisible_=!1)}addSensorToMoonBtnListener(){(0,n.gE)("sensor-moon-btn").addEventListener("click",()=>{if(this.isMonnLineVisible_){const e=l.d.getLineManager();for(const t of e.drawLineList)if(t.type===hi.wj.SENSOR_TO_MOON)return e.drawLineList.splice(e.drawLineList.indexOf(t),1),(0,n.gE)("sensor-moon-btn").textContent="Add Line to Moon  ▶",this.isMonnLineVisible_=!1,void l.d.getSoundManager().play(p.A.TOGGLE_OFF)}else{const e=l.d.getSensorManager().currentSensors;1!==e.length&&l.d.getUiManager().toast("Please Select Only One Sensor","caution");const t=l.d.getScene();l.d.getLineManager().create(hi.wj.SENSOR_TO_MOON,[l.d.getCatalogManager().getSensorFromSensorName(e[0].name),t.moon.position[0],t.moon.position[1],t.moon.position[2]],"w"),(0,n.gE)("sensor-moon-btn").textContent="Remove Line to Moon  ▶",this.isMonnLineVisible_=!0,l.d.getSoundManager().play(p.A.TOGGLE_ON)}})}addSensorToSunBtnListener_(){(0,n.gE)("sensor-sun-btn").addEventListener("click",()=>{if(this.isSunLineVisible_){const e=l.d.getLineManager();for(const t of e.drawLineList)if(t.type===hi.wj.SENSOR_TO_SUN)return e.drawLineList.splice(e.drawLineList.indexOf(t),1),(0,n.gE)("sensor-sun-btn").textContent="Add Line to Sun  ▶",this.isSunLineVisible_=!1,void l.d.getSoundManager().play(p.A.TOGGLE_OFF)}else{const e=l.d.getSensorManager().currentSensors;1!==e.length&&l.d.getUiManager().toast("Please Select Only One Sensor","caution");const t=l.d.getScene();l.d.getLineManager().create(hi.wj.SENSOR_TO_SUN,[l.d.getCatalogManager().getSensorFromSensorName(e[0].name),t.sun.position[0],t.sun.position[1],t.sun.position[2]],"o"),(0,n.gE)("sensor-sun-btn").textContent="Remove Line to Sun  ▶",this.isSunLineVisible_=!0,l.d.getSoundManager().play(p.A.TOGGLE_ON)}})}getSensorInfo(){if(!this.isHtmlAdded)return;const e=l.d.getSensorManager().currentSensors[0];(0,n.gE)("sensor-latitude").innerHTML=e.lat>0?`${e.lat.toFixed(2)}° N`:`${Math.abs(e.lat).toFixed(2)}° S`,(0,n.gE)("sensor-longitude").innerHTML=e.lon>0?`${e.lon.toFixed(2)}° E`:`${Math.abs(e.lon).toFixed(2)}° W`,(0,n.gE)("sensor-minazimuth").innerHTML=`${e.minAz.toFixed(1).toString()}°`,(0,n.gE)("sensor-maxazimuth").innerHTML=`${e.maxAz.toFixed(1).toString()}°`,(0,n.gE)("sensor-minelevation").innerHTML=`${e.minEl.toFixed(1).toString()}°`,(0,n.gE)("sensor-maxelevation").innerHTML=`${e.maxEl.toFixed(1).toString()}°`,(0,n.gE)("sensor-minrange").innerHTML=`${e.minRng.toFixed(1).toString()} km`,(0,n.gE)("sensor-maxrange").innerHTML=`${e.maxRng.toFixed(1).toString()} km`,e.type===M._V.OPTICAL||e.type===M._V.OBSERVER?((0,n.ys)((0,n.gE)("sensor-band").parentElement),(0,n.ys)((0,n.gE)("sensor-beamwidth").parentElement)):((0,n.FG)((0,n.gE)("sensor-band").parentElement),(0,n.gE)("sensor-band").innerHTML=e.freqBand?e.freqBand:"Unknown",e instanceof M.x9?((0,n.FG)((0,n.gE)("sensor-beamwidth").parentElement),(0,n.gE)("sensor-beamwidth").innerHTML=e.beamwidth?`${e.beamwidth.toFixed(1).toString()}°`:"Unknown"):(0,n.ys)((0,n.gE)("sensor-beamwidth").parentElement))}}na.PLUGIN_NAME="Sensor Info";var oa=i(4407);const la=i.p+"../img/settings.png";var ra=i(4436),ca=i(2409),da=i.n(ca),ua=i(2787);class ga extends u.S{constructor(){super(ga.PLUGIN_NAME),this.bottomIconElementName="settings-menu-icon",this.bottomIconImg=la,this.bottomIconLabel="Settings Menu",this.sideMenuElementName="settings-menu",this.sideMenuElementHtml=l.d.html`
  <div id="settings-menu" class="side-menu-parent start-hidden text-select">
    <div id="settings-content" class="side-menu">
      <div class="row">
        <form id="settings-form">
          <div id="settings-general">
            <div class="row center"></div>
            </br>
            <div class="row center">
              <button id="settings-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Update Settings &#9658;</button>
            </div>
            <div class="row center">
              <button id="settings-reset" class="btn btn-ui waves-effect waves-light" type="button" name="action">Reset to Defaults &#9658;</button>
            </div>
            <h5 class="center-align">General Settings</h5>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide notional satellites">
                <input id="settings-notionalSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show Notional Satellites
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide LEO satellites">
                <input id="settings-leoSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show LEO Satellites
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide Starlink satellites">
                <input id="settings-starlinkSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show Starlink Satellites
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide HEO satellites">
                <input id="settings-heoSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show HEO Satellites
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide MEO satellites">
                <input id="settings-meoSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show MEO Satellites
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide GEO satellites">
                <input id="settings-geoSats" type="checkbox" checked/>
                <span class="lever"></span>
                Show GEO Satellites
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide Payloads">
                <input id="settings-showPayloads" type="checkbox" checked/>
                <span class="lever"></span>
                Show Payloads
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide Rocket Bodies">
                <input id="settings-showRocketBodies" type="checkbox" checked/>
                <span class="lever"></span>
                Show Rocket Bodies
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide Debris">
                <input id="settings-showDebris" type="checkbox" checked/>
                <span class="lever"></span>
                Show Debris
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Planned feature - This will show agencies on the globe.">
                <input id="settings-showAgencies" type="checkbox" disabled/>
                <span class="lever"></span>
                Show Agencies
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable this to hide orbit lines">
                <input id="settings-drawOrbits" type="checkbox" checked/>
                <span class="lever"></span>
                Draw Orbits
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Enable this to show where a satellite was instead of where it is going">
                <input id="settings-drawTrailingOrbits" type="checkbox"/>
                <span class="lever"></span>
                Draw Trailing Orbits
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Orbits will be drawn using ECF vs ECI (Mainly for GEO Orbits)">
                <input id="settings-drawEcf" type="checkbox" />
                <span class="lever"></span>
                Draw Orbits in ECF
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Draw lines from sensor to satellites when in FOV">
                <input id="settings-isDrawInCoverageLines" type="checkbox" checked/>
                <span class="lever"></span>
                Draw FOV Lines
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Draw the Sun">
                <input id="settings-drawSun" type="checkbox" checked/>
                <span class="lever"></span>
                Draw the Sun
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Hides Earth Textures">
                <input id="settings-drawBlackEarth" type="checkbox"/>
                <span class="lever"></span>
                Draw Black Earth
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide the Atmosphere">
                <input id="settings-drawAtmosphere" type="checkbox" checked/>
                <span class="lever"></span>
                Draw Atmosphere
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable to hide the Aurora">
                <input id="settings-drawAurora" type="checkbox" checked/>
                <span class="lever"></span>
                Draw Aurora
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Change the Skybox to Gray">
                <input id="settings-graySkybox" type="checkbox" checked/>
                <span class="lever"></span>
                Draw Gray Background
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Draw Milky Way in Background">
                <input id="settings-drawMilkyWay" type="checkbox" checked/>
                <span class="lever"></span>
                Draw the Milky Way
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Display ECI Coordinates on Hover">
                <input id="settings-eciOnHover" type="checkbox"/>
                <span class="lever"></span>
                Display ECI on Hover
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Non-selectable satellites will be hidden instead of grayed out.">
                <input id="settings-hos" type="checkbox" />
                <span class="lever"></span>
                Hide Other Satellites
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Show confidence levels for satellite's element sets.">
                <input id="settings-confidence-levels" type="checkbox" />
                <span class="lever"></span>
                Show Confidence Levels
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Every 3 seconds a new satellite will be selected from FOV">
                <input id="settings-demo-mode" type="checkbox" />
                <span class="lever"></span>
                Enable Demo Mode
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Small text labels will appear next to all satellites in FOV.">
                <input id="settings-sat-label-mode" type="checkbox" checked />
                <span class="lever"></span>
                Enable Satellite Label Mode
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Time will freeze as you rotate the camera.">
                <input id="settings-freeze-drag" type="checkbox" />
                <span class="lever"></span>
                Enable Freeze Time on Click
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Time Machine stop showing toast messages.">
                <input id="settings-time-machine-toasts" type="checkbox" />
                <span class="lever"></span>
                Disable Time Machine Toasts
              </label>
            </div>
          </div>
          <div class="row light-blue darken-3" style="height:4px; display:block;"></div>
          <div id="settings-colors">
            <h5 class="center-align">Color Settings</h5>
            <div class="input-field col s6">
              <center>
                <p>Payload</p>
                <button id="settings-color-payload" class="btn waves-effect waves-light"></button>
              </center>
            </div>
            <div class="input-field col s6">
              <center>
                <p>Rocket Body</p>
                <button id="settings-color-rocketBody" class="btn waves-effect waves-light"></button>
              </center>
            </div>
            <div class="input-field col s6">
              <center>
                <p>Debris</p>
                <button id="settings-color-debris" class="btn waves-effect waves-light"></button>
              </center>
            </div>
            <div class="input-field col s6">
              <center>
                <p>In View</p>
                <button id="settings-color-inview" class="btn waves-effect waves-light"></button>
              </center>
            </div>
            <div class="input-field col s6">
              <center>
                <p>Missile</p>
                <button id="settings-color-missile" class="btn waves-effect waves-light"></button>
              </center>
            </div>
            <div class="input-field col s6">
              <center>
                <p>Missile (FOV)</p>
                <button id="settings-color-missileInview" class="btn waves-effect waves-light"></button>
              </center>
            </div>
            <div class="input-field col s6">
              <center>
                <p>Special Sats</p>
                <button id="settings-color-special" class="btn waves-effect waves-light"></button>
              </center>
            </div>
          </div>
          <div class="row"></div>
          <div id="settings-opt">
            <h5 class="center-align">Settings Overrides</h5>
            <div class="input-field col s12">
              <input value="150" id="maxSearchSats" type="text" data-position="top" data-delay="50" data-tooltip="Maximum satellites to display in search" />
              <label for="maxSearchSats" class="active">Maximum Satellites in Search</label>
            </div>
            <div class="input-field col s12">
              <input value="30" id="satFieldOfView" type="text" data-position="top" data-delay="50" data-tooltip="What is the satellite's field of view in degrees" />
              <label for="satFieldOfView" class="active">Satellite Field of View</label>
            </div>
            <div class="row"></div>
          </div>
          <div id="fastCompSettings">
            <h5 class="center-align">Fast CPU Required</h5>
            <div class="switch row">
              <label>
                <input id="settings-snp" type="checkbox" />
                <span class="lever"></span>
                Show Next Pass on Hover
              </label>
            </div>
          </div>
          <!-- <div id="settings-lowperf" class="row center">
            <button class="red btn waves-effect waves-light" onclick="uiManagerInstance.startLowPerf();">Low End PC Version &#9658;</button>
          </div> -->
        </form>
      </div>
    </div>
  </div>`,this.helpTitle="Settings Menu",this.helpBody=l.d.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{var e,t,i,a,s,o,l;(0,n.gE)("settings-form").addEventListener("change",ga.onFormChange),(0,n.gE)("settings-form").addEventListener("submit",ga.onSubmit),(0,n.gE)("settings-reset").addEventListener("click",ga.resetToDefaults);const r=[(0,oa.N)([1,0,0,1]),(0,oa.N)([1,.75,0,1]),(0,oa.N)([.85,.5,0,1]),(0,oa.N)([1,1,0,1]),(0,oa.N)([0,1,0,1]),(0,oa.N)([.2,1,0,.5]),(0,oa.N)([.2,1,1,1]),(0,oa.N)([0,0,1,1]),(0,oa.N)([.2,.4,1,1]),(0,oa.N)([.64,0,.64,1]),(0,oa.N)([1,0,.6,1]),(0,oa.N)([.5,.5,.5,1]),(0,oa.N)([1,1,1,1])],c=this;da()("#settings-color-payload").colorPick({initialColor:(0,oa.N)((null===(e=settingsManager.colors)||void 0===e?void 0:e.payload)||[.2,1,0,.5]),palette:r,onColorSelected:function(){c.onColorSelected(this,"payload")}}),da()("#settings-color-rocketBody").colorPick({initialColor:(0,oa.N)((null===(t=settingsManager.colors)||void 0===t?void 0:t.rocketBody)||[.2,.4,1,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"rocketBody")}}),da()("#settings-color-debris").colorPick({initialColor:(0,oa.N)((null===(i=settingsManager.colors)||void 0===i?void 0:i.debris)||[.5,.5,.5,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"debris")}}),da()("#settings-color-inview").colorPick({initialColor:(0,oa.N)((null===(a=settingsManager.colors)||void 0===a?void 0:a.inFOV)||[.85,.5,0,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"inview")}}),da()("#settings-color-missile").colorPick({initialColor:(0,oa.N)((null===(s=settingsManager.colors)||void 0===s?void 0:s.missile)||[1,1,0,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"missile")}}),da()("#settings-color-missileInview").colorPick({initialColor:(0,oa.N)((null===(o=settingsManager.colors)||void 0===o?void 0:o.missileInview)||[1,0,0,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"missileInview")}}),da()("#settings-color-special").colorPick({initialColor:(0,oa.N)((null===(l=settingsManager.colors)||void 0===l?void 0:l.pink)||[1,0,.6,1]),palette:r,onColorSelected:function(){c.onColorSelected(this,"pink")}}),this.isNotColorPickerInitialSetup=!0}})}addJs(){super.addJs(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{ga.syncOnLoad()}})}onColorSelected(e,t){if(null==e)throw new Error("context is undefined");if(null==t)throw new Error("colorStr is undefined");if(e.element.css("cssText",`background-color: ${e.color} !important; color: ${e.color};`),this.isNotColorPickerInitialSetup){settingsManager.colors[t]=(e=>{let[t,i,a,s]=e.match(/(?<!\w)-?[\d.]+/gu);if(t=parseFloat(t)/255,i=parseFloat(i)/255,a=parseFloat(a)/255,s=parseFloat(s),t<0||t>1||i<0||i>1||a<0||a>1||s<0||s>1||isNaN(t)||isNaN(i)||isNaN(a)||isNaN(s))throw new Error("Invalid rgba input");return[t,i,a,s]})(e.color),dt.b.legendColorsChange();const i=l.d.getColorSchemeManager();i.setColorScheme(i.currentColorScheme,!0),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_MANAGER_COLORS,JSON.stringify(settingsManager.colors))}}static onFormChange(e,t,i){var a,s,o;if(null==e)throw new Error("e is undefined");switch(null===(a=e.target)||void 0===a?void 0:a.id){case"settings-notionalSats":case"settings-leoSats":case"settings-starlinkSats":case"settings-heoSats":case"settings-meoSats":case"settings-geoSats":case"settings-showPayloads":case"settings-showRocketBodies":case"settings-showDebris":case"settings-showAgencies":case"settings-drawOrbits":case"settings-drawTrailingOrbits":case"settings-drawEcf":case"settings-isDrawInCoverageLines":case"settings-drawSun":case"settings-drawBlackEarth":case"settings-drawAtmosphere":case"settings-drawAurora":case"settings-drawMilkyWay":case"settings-graySkybox":case"settings-eciOnHover":case"settings-hos":case"settings-confidence-levels":case"settings-demo-mode":case"settings-sat-label-mode":case"settings-freeze-drag":case"settings-time-machine-toasts":case"settings-snp":(0,n.gE)(e.target.id).checked?null===(s=l.d.getSoundManager())||void 0===s||s.play(p.A.TOGGLE_ON):null===(o=l.d.getSoundManager())||void 0===o||o.play(p.A.TOGGLE_OFF)}null!=t||(t=(0,n.gE)("settings-demo-mode").checked),null!=i||(i=(0,n.gE)("settings-sat-label-mode").checked),i&&"settings-demo-mode"===e.target.id&&((0,n.gE)("settings-sat-label-mode").checked=!1,(0,n.gE)("settings-demo-mode").classList.remove("lever:after")),t&&"settings-sat-label-mode"===e.target.id&&((0,n.gE)("settings-demo-mode").checked=!1,(0,n.gE)("settings-sat-label-mode").classList.remove("lever:after"))}static syncOnLoad(){(0,n.gE)("settings-notionalSats").checked=settingsManager.isShowNotionalSats,(0,n.gE)("settings-leoSats").checked=settingsManager.isShowLeoSats,(0,n.gE)("settings-starlinkSats").checked=settingsManager.isShowStarlinkSats,(0,n.gE)("settings-heoSats").checked=settingsManager.isShowHeoSats,(0,n.gE)("settings-meoSats").checked=settingsManager.isShowMeoSats,(0,n.gE)("settings-geoSats").checked=settingsManager.isShowGeoSats,(0,n.gE)("settings-showPayloads").checked=settingsManager.isShowPayloads,(0,n.gE)("settings-showRocketBodies").checked=settingsManager.isShowRocketBodies,(0,n.gE)("settings-showDebris").checked=settingsManager.isShowDebris,(0,n.gE)("settings-showAgencies").checked=settingsManager.isShowAgencies,(0,n.gE)("settings-drawOrbits").checked=settingsManager.isDrawOrbits,(0,n.gE)("settings-drawTrailingOrbits").checked=settingsManager.isDrawTrailingOrbits,(0,n.gE)("settings-drawEcf").checked=settingsManager.isOrbitCruncherInEcf,(0,n.gE)("settings-isDrawInCoverageLines").checked=settingsManager.isDrawInCoverageLines,(0,n.gE)("settings-drawSun").checked=settingsManager.isDrawSun,(0,n.gE)("settings-drawBlackEarth").checked=settingsManager.isBlackEarth,(0,n.gE)("settings-drawAtmosphere").checked=settingsManager.isDrawAtmosphere,(0,n.gE)("settings-drawAurora").checked=settingsManager.isDrawAurora,(0,n.gE)("settings-drawMilkyWay").checked=settingsManager.isDrawMilkyWay,(0,n.gE)("settings-graySkybox").checked=settingsManager.isGraySkybox,(0,n.gE)("settings-eciOnHover").checked=settingsManager.isEciOnHover,(0,n.gE)("settings-hos").checked=0===settingsManager.colors.transparent[3],(0,n.gE)("settings-confidence-levels").checked=settingsManager.isShowConfidenceLevels,(0,n.gE)("settings-demo-mode").checked=settingsManager.isDemoModeOn,(0,n.gE)("settings-sat-label-mode").checked=settingsManager.isSatLabelModeOn,(0,n.gE)("settings-freeze-drag").checked=settingsManager.isFreezePropRateOnDrag,(0,n.gE)("settings-time-machine-toasts").checked=settingsManager.isDisableTimeMachineToasts,(0,n.gE)("maxSearchSats").value=settingsManager.searchLimit.toString()}static preserveSettings(){Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_LEO_SATS,settingsManager.isShowLeoSats.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_STARLINK_SATS,settingsManager.isShowStarlinkSats.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_HEO_SATS,settingsManager.isShowHeoSats.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_MEO_SATS,settingsManager.isShowMeoSats.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_GEO_SATS,settingsManager.isShowGeoSats.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_PAYLOADS,settingsManager.isShowPayloads.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_ROCKET_BODIES,settingsManager.isShowRocketBodies.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_DEBRIS,settingsManager.isShowDebris.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_AGENCIES,settingsManager.isShowAgencies.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_DRAW_ORBITS,settingsManager.isDrawOrbits.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_DRAW_TRAILING_ORBITS,settingsManager.isDrawTrailingOrbits.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_DRAW_ECF,settingsManager.isOrbitCruncherInEcf.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_DRAW_IN_COVERAGE_LINES,settingsManager.isDrawInCoverageLines.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_DRAW_SUN,settingsManager.isDrawSun.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_DRAW_BLACK_EARTH,settingsManager.isBlackEarth.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_DRAW_ATMOSPHERE,settingsManager.isDrawAtmosphere.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_DRAW_AURORA,settingsManager.isDrawAurora.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_DRAW_MILKY_WAY,settingsManager.isDrawMilkyWay.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_GRAY_SKYBOX,settingsManager.isGraySkybox.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_ECI_ON_HOVER,settingsManager.isEciOnHover.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_HOS,0===settingsManager.colors.transparent[3]?"true":"false"),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_CONFIDENCE_LEVELS,settingsManager.isShowConfidenceLevels.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_DEMO_MODE,settingsManager.isDemoModeOn.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_SAT_LABEL_MODE,settingsManager.isSatLabelModeOn.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_FREEZE_PROP_RATE_ON_DRAG,settingsManager.isFreezePropRateOnDrag.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_DISABLE_TIME_MACHINE_TOASTS,settingsManager.isDisableTimeMachineToasts.toString()),Pi.l.getInstance().saveItem(Pi.Z.SETTINGS_SEARCH_LIMIT,settingsManager.searchLimit.toString())}static resetToDefaults(){settingsManager.isShowLeoSats=!0,settingsManager.isShowHeoSats=!0,settingsManager.isShowMeoSats=!0,settingsManager.isShowGeoSats=!0,settingsManager.isShowPayloads=!0,settingsManager.isShowRocketBodies=!0,settingsManager.isShowDebris=!0,settingsManager.isShowAgencies=!1,settingsManager.isDrawOrbits=!0,settingsManager.isDrawTrailingOrbits=!1,settingsManager.isOrbitCruncherInEcf=!1,settingsManager.isDrawInCoverageLines=!0,settingsManager.isDrawSun=!0,settingsManager.isBlackEarth=!1,settingsManager.isDrawAtmosphere=!0,settingsManager.isDrawAurora=!0,settingsManager.isDrawMilkyWay=!0,settingsManager.isGraySkybox=!1,settingsManager.isEciOnHover=!1,settingsManager.isDemoModeOn=!1,settingsManager.isSatLabelModeOn=!0,settingsManager.isFreezePropRateOnDrag=!1,settingsManager.isDisableTimeMachineToasts=!1,settingsManager.searchLimit=150,ga.preserveSettings(),ga.syncOnLoad()}static onSubmit(e){var t,i;if(null==e)throw new Error("e is undefined");e.preventDefault();const a=l.d.getUiManager(),s=l.d.getColorSchemeManager();null===(t=l.d.getSoundManager())||void 0===t||t.play(p.A.BUTTON_CLICK),settingsManager.isShowNotionalSats=(0,n.gE)("settings-notionalSats").checked,settingsManager.isShowLeoSats=(0,n.gE)("settings-leoSats").checked,settingsManager.isShowStarlinkSats=(0,n.gE)("settings-starlinkSats").checked,settingsManager.isShowHeoSats=(0,n.gE)("settings-heoSats").checked,settingsManager.isShowMeoSats=(0,n.gE)("settings-meoSats").checked,settingsManager.isShowGeoSats=(0,n.gE)("settings-geoSats").checked,settingsManager.isShowPayloads=(0,n.gE)("settings-showPayloads").checked,settingsManager.isShowRocketBodies=(0,n.gE)("settings-showRocketBodies").checked,settingsManager.isShowDebris=(0,n.gE)("settings-showDebris").checked,settingsManager.isShowAgencies=(0,n.gE)("settings-showAgencies").checked,settingsManager.isOrbitCruncherInEcf=(0,n.gE)("settings-drawEcf").checked,settingsManager.isDrawInCoverageLines=(0,n.gE)("settings-isDrawInCoverageLines").checked,settingsManager.isDrawSun=(0,n.gE)("settings-drawSun").checked;let o=settingsManager.isBlackEarth!==(0,n.gE)("settings-drawBlackEarth").checked,r=settingsManager.isDrawAtmosphere!==(0,n.gE)("settings-drawAtmosphere").checked,c=settingsManager.isDrawAurora!==(0,n.gE)("settings-drawAurora").checked;settingsManager.isBlackEarth=(0,n.gE)("settings-drawBlackEarth").checked,settingsManager.isDrawAtmosphere=(0,n.gE)("settings-drawAtmosphere").checked,settingsManager.isDrawAurora=(0,n.gE)("settings-drawAurora").checked,(o||r||c)&&l.d.getScene().earth.reloadEarthHiResTextures();const d=settingsManager.isDrawOrbits!==(0,n.gE)("settings-drawOrbits").checked;settingsManager.isDrawOrbits=(0,n.gE)("settings-drawOrbits").checked,d&&l.d.getOrbitManager().drawOrbitsSettingChanged(),settingsManager.isDrawTrailingOrbits=(0,n.gE)("settings-drawTrailingOrbits").checked,l.d.getOrbitManager().orbitWorker&&(settingsManager.isDrawTrailingOrbits?l.d.getOrbitManager().orbitWorker.postMessage({typ:ra.tI.CHANGE_ORBIT_TYPE,orbitType:ra.qj.TRAIL}):l.d.getOrbitManager().orbitWorker.postMessage({typ:ra.tI.CHANGE_ORBIT_TYPE,orbitType:ra.qj.ORBIT}));let u=settingsManager.isDrawMilkyWay!==(0,n.gE)("settings-drawMilkyWay").checked,g=settingsManager.isGraySkybox!==(0,n.gE)("settings-graySkybox").checked;settingsManager.isDrawMilkyWay=(0,n.gE)("settings-drawMilkyWay").checked,settingsManager.isGraySkybox=(0,n.gE)("settings-graySkybox").checked,(u||g)&&l.d.getScene().skybox.init(settingsManager,l.d.getRenderer().gl),settingsManager.isEciOnHover=(0,n.gE)("settings-eciOnHover").checked;const h=(0,n.gE)("settings-hos").checked;settingsManager.colors.transparent=h?[1,1,1,0]:[1,1,1,.1],settingsManager.isShowConfidenceLevels=(0,n.gE)("settings-confidence-levels").checked,settingsManager.isDemoModeOn=(0,n.gE)("settings-demo-mode").checked,settingsManager.isSatLabelModeOn=(0,n.gE)("settings-sat-label-mode").checked,settingsManager.isShowNextPass=(0,n.gE)("settings-snp").checked,settingsManager.isFreezePropRateOnDrag=(0,n.gE)("settings-freeze-drag").checked,settingsManager.isDisableTimeMachineToasts=(0,n.gE)("settings-time-machine-toasts").checked,l.d.getPlugin(ua.$)&&(l.d.getPlugin(ua.$).isMenuButtonActive=!1),l.d.getGroupsManager().clearSelect(),s.setColorScheme(s.default,!0),null===(i=(0,n.gE)("menu-time-machine"))||void 0===i||i.classList.remove("bmenu-item-selected"),s.reloadColors();const m=parseInt((0,n.gE)("satFieldOfView").value);isNaN(m)?((0,n.gE)("satFieldOfView").value="30",a.toast("Invalid field of view value!","critical")):l.d.getCatalogManager().satCruncher.postMessage({typ:St.XY.IS_UPDATE_SATELLITE_OVERFLY,selectedSatFOV:m});const v=parseInt((0,n.gE)("maxSearchSats").value);isNaN(v)?((0,n.gE)("maxSearchSats").value=settingsManager.searchLimit.toString(),a.toast("Invalid max search sats value!","critical")):(settingsManager.searchLimit=v,a.searchManager.doSearch(l.d.getUiManager().searchManager.getCurrentSearch())),s.setColorScheme(s.currentColorScheme,!0),ga.preserveSettings()}}ga.PLUGIN_NAME="Settings Menu";const pa=new ga,ha=i.p+"../img/search.png";class ma extends u.S{constructor(){super(ma.PLUGIN_NAME),this.dependencies=[ui.c.PLUGIN_NAME,g.A.PLUGIN_NAME],this.bottomIconElementName="stf-bottom-icon",this.bottomIconLabel="Short Term Fence",this.bottomIconImg=ha,this.isRequireSensorSelected=!0,this.isAddStfLinksOnce=!1,this.helpTitle="Short Term Fences (STF) Menu",this.helpBody=l.d.html`The Short Term Fences (STF) Menu is used for visualizing sensor search boxes.
  <br><br>
  This is unlikely to be very helpful unless you own/operate a sensor with a search box functionality.`,this.sideMenuElementName="stf-menu",this.sideMenuElementHtml=l.d.html`
  <div id="stf-menu" class="side-menu-parent start-hidden text-select">
    <div id="stf-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Short Term Fence</h5>
        <form id="stfForm">
          <div id="stf-az-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Search Center Azimuth Point in degrees (ex: 50)">
            <input id="stf-az" type="text" value="50" />
            <label for="stf-az" class="active">Center Azimuth</label>
          </div>
          <div id="stf-azExt-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Total Extent Outside of Center Azimuth in degrees (ex: 4)">
            <input id="stf-azExt" type="text" value="4" />
            <label for="stf-azExt" class="active">Azimuth Extent (deg)</label>
          </div>
          <div id="stf-azExtKm-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Total Extent Outside of Center Azimuth in kilometers (ex: 120)">
            <input id="stf-azExtKm" type="text" value="4" disabled/>
            <label for="stf-azExtKm" class="active">Azimuth Extent (km)</label>
          </div>
          <div id="stf-el-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Search Center Elevation Point in degrees (ex: 20)">
            <input id="stf-el" type="text" value="20" />
            <label for="stf-el" class="active">Center Elevation</label>
          </div>
          <div id="stf-elExt-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Total Extent Outside of Center Elevation in degrees (ex: 4)">
            <input id="stf-elExt" type="text" value="4" />
            <label for="stf-elExt" class="active">Elevation Extent (deg)</label>
          </div>
          <div id="stf-elExtKm-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Total Extent Outside of Center Elevation in kilometers (ex: 120)">
            <input id="stf-elExtKm" type="text" value="4" disabled/>
            <label for="stf-elExtKm" class="active">Elevation Extent (km)</label>
          </div>
          <div id="stf-rng-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Search Center Range Point in kilometers (ex: 1000)">
            <input id="stf-rng" type="text" value="1000" />
            <label for="stf-rng" class="active">Center Range</label>
          </div>
          <div id="stf-rngExt-div" class=" input-field col s12" data-position="top" data-delay="50" data-tooltip="Total Extent Outside of Center Range in kilometers (ex: 100)">
            <input id="stf-rngExt" type="text" value="100" />
            <label for="stf-rngExt" class="active">Range Extent</label>
          </div>
          <div class="center-align">
            <button id="stf-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Create New STF &#9658;</button>
          </div>
        </form>
        <br>
        <div class="center-align">
          <button id="stf-remove-last" class="btn btn-ui waves-effect waves-light" type="button" name="action">Remove Last &#9658;</button>
        </div>
        <br>
        <div class="center-align">
          <button id="stf-clear-all" class="btn btn-ui waves-effect waves-light" type="button" name="action">Clear All STFs &#9658;</button>
        </div>
      </div>
    </div>
  </div>`,this.selectSatManager_=l.d.getPlugin(g.A)}addHtml(){super.addHtml(),l.d.register({event:o.QY.selectSatData,cbName:this.PLUGIN_NAME,cb:e=>{null!=e&&l.d.getPlugin(ui.c)&&!this.isAddStfLinksOnce&&((0,n.gE)("sat-info-top-links").insertAdjacentHTML("beforeend",l.d.html`
            <div id="stf-on-object-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                  data-tooltip="Visualize Sensor Search Capability">Build Short Term Fence on this object...</div>
            `),(0,n.gE)("stf-on-object-link").addEventListener("click",this.stfOnObjectLinkClick.bind(this)),this.isAddStfLinksOnce=!0)}})}addJs(){super.addJs(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.gE)("stfForm").addEventListener("submit",e=>{e.preventDefault(),l.d.getSoundManager().play(p.A.MENU_BUTTON),this.onSubmit.bind(this)()}),(0,n.gE)("stf-remove-last").addEventListener("click",()=>{l.d.getSoundManager().play(p.A.MENU_BUTTON),l.d.getSensorManager().removeStf()}),(0,n.gE)("stf-clear-all").addEventListener("click",()=>{l.d.getSoundManager().play(p.A.MENU_BUTTON),l.d.getSensorManager().clearStf()}),(0,n.gE)("stf-azExt").addEventListener("blur",()=>{const e=parseFloat((0,n.gE)("stf-az").value),t=parseFloat((0,n.gE)("stf-el").value),i=parseFloat((0,n.gE)("stf-rng").value);let a=parseFloat((0,n.gE)("stf-azExt").value);a>80&&(a=80,(0,n.gE)("stf-azExt").value=a.toFixed(1));const s=M.kp.fromDateTime(l.d.getTimeManager().simulationTimeObj),o=l.d.getSensorManager().currentSensors[0].toGeodetic().toITRF(s).toJ2000(),r=new M.Jf(s,i,(e-a/2)*M.up,t*M.up).position(o),c=new M.Jf(M.kp.fromDateTime(l.d.getTimeManager().simulationTimeObj),i,(e+a/2)*M.up,t*M.up).position(o),d=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)+Math.pow(r.z-c.z,2));(0,n.gE)("stf-azExtKm").value=d.toFixed(1)}),(0,n.gE)("stf-elExt").addEventListener("blur",()=>{const e=parseFloat((0,n.gE)("stf-az").value),t=parseFloat((0,n.gE)("stf-el").value),i=parseFloat((0,n.gE)("stf-rng").value);let a=parseFloat((0,n.gE)("stf-elExt").value);a>80&&(a=80,(0,n.gE)("stf-elExt").value=a.toFixed(1));const s=M.kp.fromDateTime(l.d.getTimeManager().simulationTimeObj),o=l.d.getSensorManager().currentSensors[0].toGeodetic().toITRF(s).toJ2000(),r=new M.Jf(s,i,e*M.up,(t-a/2)*M.up).position(o),c=new M.Jf(M.kp.fromDateTime(l.d.getTimeManager().simulationTimeObj),i,e*M.up,(t+a/2)*M.up).position(o),d=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)+Math.pow(r.z-c.z,2));(0,n.gE)("stf-elExtKm").value=d.toFixed(1)})}}),l.d.register({event:o.QY.resetSensor,cbName:"shortTermFences",cb:this.closeAndDisable.bind(this)}),l.d.register({event:o.QY.setSensor,cbName:"shortTermFences",cb:(e,t)=>{null==e&&null==t?(this.closeAndDisable(),(0,w.pz)((0,n.gE)(this.sideMenuElementName),1e3)):this.setBottomIconToEnabled()}})}closeAndDisable(){this.isMenuButtonActive=!1,this.setBottomIconToUnselected(),this.setBottomIconToDisabled(),l.d.getUiManager().hideSideMenus()}onSubmit(){var e;if(!this.verifySensorSelected())return;const t=parseFloat((0,n.gE)("stf-az").value),i=parseFloat((0,n.gE)("stf-azExt").value),a=parseFloat((0,n.gE)("stf-el").value),s=parseFloat((0,n.gE)("stf-elExt").value),o=parseFloat((0,n.gE)("stf-rng").value),r=parseFloat((0,n.gE)("stf-rngExt").value),c=t-i/2<0?t-i/2+360:t-i/2,d=t+i/2>360?t+i/2-360:t+i/2,u=a-s/2,g=a+s/2,p=o-r/2,h=o+r/2,m=l.d.getSensorManager().currentSensors[0],v=new M.tn({lat:m.lat,lon:m.lon,alt:m.alt,minAz:c,maxAz:d,minEl:u,maxEl:g,minRng:p,maxRng:h,type:M._V.SHORT_TERM_FENCE,name:"STF",uiName:"STF",zoom:h>6e3?M.N$.GEO:M.N$.LEO,volume:!0});m.isRaeInFov({az:c,el:u,rng:p})&&m.isRaeInFov({az:d,el:g,rng:h})?(l.d.getSensorManager().addStf(v),null===(e=l.d.getPlugin(xi.a))||void 0===e||e.enableFovView()):f.J.warn("STF is not in view of the sensor!")}stfOnObjectLinkClick(){const e=l.d.getSensorManager();if(!this.verifySensorSelected())return;if(!this.verifySatelliteSelected())return;const t=l.d.getTimeManager().simulationTimeObj,i=(0,M.Eg)(t,this.selectSatManager_.primarySatObj.position,e.currentSensors[0]);(0,n.gE)("stf-az").value=i.az.toFixed(1),(0,n.gE)("stf-el").value=i.el.toFixed(1),(0,n.gE)("stf-rng").value=i.rng.toFixed(1),l.d.getUiManager().hideSideMenus(),(0,w.xA)((0,n.gE)("stf-menu"),1e3),this.isMenuButtonActive=!0,this.setBottomIconToSelected()}}ma.PLUGIN_NAME="Short Term Fences";var va=i(1299);class ba extends u.S{constructor(){super("Social Media"),this.dependencies=["Top Menu"]}addHtml(){super.addHtml(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:ba.uiManagerFinal_})}static uiManagerFinal_(){var e;const t=document.createElement("li");t.innerHTML=l.d.html`
          <a id="github-share1" class="top-menu-btns" rel="noreferrer" href="https://github.com/si/forerunner.space/" target="_blank">
            <img
            width="22"
            height="22"
            style="margin-top: 1px;"
            src="${va}"
            />
          </a>
          `,null===(e=(0,n.gE)("nav-mobile2",!0))||void 0===e||e.insertBefore(t,(0,n.gE)("nav-mobile2").firstChild)}}var fa=i(8868);class Sa extends u.S{constructor(){super(Sa.PLUGIN_NAME),this.isRotateL=!0,this.isRotateR=!1,this.isRotateU=!1,this.isRotateD=!1,this.bottomIconElementName="video-director-icon",this.bottomIconImg=la,this.bottomIconLabel="Video Director",this.sideMenuElementName="video-director-menu",this.sideMenuElementHtml=l.d.html`
  <div id="video-director-menu" class="side-menu-parent start-hidden text-select">
    <div id="video-director-content" class="side-menu">
      <div class="row">
        <form id="video-director-form">
          <div id="video-director-general">
            <div class="row center"></div>
            </br>
            <div class="row center">
              <button id="video-director-submit" class="btn btn-ui waves-effect waves-light" type="submit" name="action">Update video-director &#9658;</button>
            </div>
            <h5 class="center-align">General video-director</h5>
            <div class="input-field col s12">
              <input value="0.000075" id="video-director-rotateSpeed" type="text" maxlength="9" />
              <label for="video-director-rotateSpeed" class="active">Rotate Speed</label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Rotate Camera to the Left">
                <input id="video-director-rotateL" type="checkbox" checked/>
                <span class="lever"></span>
                Rotate Camera Left
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Rotate Camera to the Right">
                <input id="video-director-rotateR" type="checkbox"/>
                <span class="lever"></span>
                Rotate Camera Right
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Rotate Camera Up">
                <input id="video-director-rotateU" type="checkbox"/>
                <span class="lever"></span>
                Rotate Camera Up
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Rotate Camera Down">
                <input id="video-director-rotateD" type="checkbox"/>
                <span class="lever"></span>
                Rotate Camera Down
              </label>
            </div>
            <div class="input-field col s12">
              <input value="0.05" id="video-director-panSpeed" type="text" maxlength="9" />
              <label for="video-director-panSpeed" class="active">Pan Speed</label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Pan Camera Left">
                <input id="video-director-panL" type="checkbox"/>
                <span class="lever"></span>
                Pan Camera Left
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Pan Camera Right">
                <input id="video-director-panR" type="checkbox"/>
                <span class="lever"></span>
                Pan Camera Right
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Pan Camera Up">
                <input id="video-director-panU" type="checkbox"/>
                <span class="lever"></span>
                Pan Camera Up
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Pan Camera Down">
                <input id="video-director-panD" type="checkbox"/>
                <span class="lever"></span>
                Pan Camera Down
              </label>
            </div>
            <div class="input-field col s12">
              <input value="0.0005" id="video-director-zoomSpeed" type="text" maxlength="9" />
              <label for="video-director-zoomSpeed" class="active">Zoom Speed</label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Zoom Camera In">
                <input id="video-director-zoomIn" type="checkbox"/>
                <span class="lever"></span>
                Zoom Camera In
              </label>
            </div>
            <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Zoom Camera Out">
                <input id="video-director-zoomOut" type="checkbox"/>
                <span class="lever"></span>
                Zoom Camera Out
              </label>
          </div>
          <div class="switch row">
              <label data-position="top" data-delay="50" data-tooltip="Disable Selected Satellite Dot">
                <input id="video-director-selectedColor" type="checkbox"/>
                <span class="lever"></span>
                Disable Selected Satellite Dot
              </label>
          </div>
          <div class="center-align row">
            <button id="video-director-rotate" class="btn btn-ui waves-effect waves-light" type="button" name="action">Start Auto Rotate &#9658;</button>
          </div>
        </form>
      </div>
    </div>
  </div>`,this.helpTitle="Settings Menu",this.helpBody=l.d.html`The Settings menu allows you to configure the application.`,this.isNotColorPickerInitialSetup=!1}addHtml(){super.addHtml(),l.d.register({event:o.QY.uiManagerFinal,cbName:this.PLUGIN_NAME,cb:()=>{(0,n.gE)("video-director-form").addEventListener("change",Sa.onFormChange),(0,n.gE)("video-director-form").addEventListener("submit",Sa.onSubmit),(0,n.gE)("video-director-rotate").addEventListener("click",()=>{var e;null===(e=l.d.getSoundManager())||void 0===e||e.play(p.A.BUTTON_CLICK),l.d.getMainCamera().autoRotate(!0)})}})}static onFormChange(e){var t,i,a;if(null==e)throw new Error("e is undefined");switch(null===(t=e.target)||void 0===t?void 0:t.id){case"video-director-rotateL":case"video-director-rotateR":case"video-director-rotateU":case"video-director-rotateD":case"video-director-panL":case"video-director-panR":case"video-director-panU":case"video-director-panD":case"video-director-zoomIn":case"video-director-zoomOut":(0,n.gE)(e.target.id).checked?null===(i=l.d.getSoundManager())||void 0===i||i.play(p.A.TOGGLE_ON):null===(a=l.d.getSoundManager())||void 0===a||a.play(p.A.TOGGLE_OFF)}(0,n.gE)("video-director-selectedColor").checked&&0!==settingsManager.selectedColor[3]?(settingsManager.selectedColorFallback=settingsManager.selectedColor,settingsManager.selectedColor=[0,0,0,0]):settingsManager.selectedColor=settingsManager.selectedColorFallback,settingsManager.autoRotateSpeed=parseFloat((0,n.gE)("video-director-rotateSpeed").value),settingsManager.autoPanSpeed=parseFloat((0,n.gE)("video-director-panSpeed").value),settingsManager.autoZoomSpeed=parseFloat((0,n.gE)("video-director-zoomSpeed").value);const s=(0,n.gE)("video-director-rotateL").checked,o=(0,n.gE)("video-director-rotateR").checked,r=(0,n.gE)("video-director-rotateU").checked,c=(0,n.gE)("video-director-rotateD").checked,d=(0,n.gE)("video-director-panL").checked,u=(0,n.gE)("video-director-panR").checked,g=(0,n.gE)("video-director-panU").checked,h=(0,n.gE)("video-director-panD").checked,m=(0,n.gE)("video-director-zoomIn").checked,v=(0,n.gE)("video-director-zoomOut").checked;s&&!settingsManager.isAutoRotateL&&((0,n.gE)("video-director-rotateR").checked=!1),o&&!settingsManager.isAutoRotateR&&((0,n.gE)("video-director-rotateL").checked=!1),r&&!settingsManager.isAutoRotateU&&((0,n.gE)("video-director-rotateD").checked=!1),c&&!settingsManager.isAutoRotateD&&((0,n.gE)("video-director-rotateU").checked=!1),d&&!settingsManager.isAutoPanL&&((0,n.gE)("video-director-panR").checked=!1),u&&!settingsManager.isAutoPanR&&((0,n.gE)("video-director-panL").checked=!1),g&&!settingsManager.isAutoPanU&&((0,n.gE)("video-director-panD").checked=!1),h&&!settingsManager.isAutoPanD&&((0,n.gE)("video-director-panU").checked=!1),m&&!settingsManager.isAutoZoomIn&&((0,n.gE)("video-director-zoomOut").checked=!1),v&&!settingsManager.isAutoZoomOut&&((0,n.gE)("video-director-zoomIn").checked=!1)}static onSubmit(e){var t;if(null==e)throw new Error("e is undefined");e.preventDefault(),null===(t=l.d.getSoundManager())||void 0===t||t.play(p.A.BUTTON_CLICK),settingsManager.isAutoRotateR=(0,n.gE)("video-director-rotateR").checked,settingsManager.isAutoRotateL=(0,n.gE)("video-director-rotateL").checked,settingsManager.isAutoRotateU=(0,n.gE)("video-director-rotateU").checked,settingsManager.isAutoRotateD=(0,n.gE)("video-director-rotateD").checked,settingsManager.isAutoPanR=(0,n.gE)("video-director-panR").checked,settingsManager.isAutoPanL=(0,n.gE)("video-director-panL").checked,settingsManager.isAutoPanU=(0,n.gE)("video-director-panU").checked,settingsManager.isAutoPanD=(0,n.gE)("video-director-panD").checked,settingsManager.isAutoZoomIn=(0,n.gE)("video-director-zoomIn").checked,settingsManager.isAutoZoomOut=(0,n.gE)("video-director-zoomOut").checked}}Sa.PLUGIN_NAME="Video Director";const Ea=new Sa;var Ma=i(4455),ya=i(3323);const wa=(e,t)=>{return i=void 0,a=void 0,n=function*(){null!=t||(t={});try{Aa(t),t.photoManager&&yi.init(),t.screenRecorder&&Ci.init(),t.screenshot&&Ni.init(),t.findSat&&(new y).init(),t.editSat&&(new Kt).init(),t.constellations&&bi.init(),t.satelliteView&&(new J).init(),t.satelliteFov&&(new fi.H).init(),t.nextLaunch&&(new ri).init(),t.newLaunch&&(new ni).init(),t.collisions&&(new At).init(),t.debrisScreening&&(new Ft).init(),t.breakup&&(new Et).init(),t.sensor&&((new Ki).init(),(new na).init(),(new aa).init()),t.sensorFov&&(new xi.a).init(),t.sensorSurv&&(new Wi.q).init(),t.watchlist&&((new Ma.P).init(),(new ya.m).init()),t.shortTermFences&&(new ma).init(),t.orbitReferences&&(new gi).init(),t.missile&&z(),t.stereoMap&&(new fa.b).init(),t.planetarium&&(new pt).init(),t.astronomy&&(new ht).init(),t.nightToggle&&(new di).init(),t.dops&&Yt.init(),t.countries&&m.init(),t.launchCalendar&&ti.init(),t.timeMachine&&ua.g.init(),t.analysis&&ct.init(),t.classificationBar&&(new yt).init(),t.looptime&&(new ii.b).init(),t.colorsMenu&&Nt.init(),t.settingsMenu&&pa.init(),t.soundManager&&qe.init(),t.gamepad&&Zt.init(),t.videoDirector&&Ea.init(),e.register({event:o.QY.uiManagerFinal,cbName:"core",cb:()=>{ka(t)}})}catch(e){f.J.info("Error loading core plugins:"+e.message)}},new((s=void 0)||(s=Promise))(function(e,t){function o(e){try{r(n.next(e))}catch(e){t(e)}}function l(e){try{r(n.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s(function(e){e(i)})).then(o,l)}r((n=n.apply(i,a||[])).next())});var i,a,s,n},Aa=e=>{e.debug&&(new Gt.u).init(),(new g.A).init(),e.topMenu&&(new et.p).init(),e.satInfoboxCore&&(new ui.c).init(),e.datetime&&(new xt.l).init(),e.statusBar&&(new Rt.e).init(),e.social&&(new ba).init()},ka=e=>{const t=(0,n.gE)("bottom-icons-container");if(t){const e=t.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-height",e+"px")}else document.documentElement.style.setProperty("--bottom-menu-height","0px");if(e.topMenu){let e=parseInt(document.documentElement.style.getPropertyValue("--top-menu-height").replace("px",""));isNaN(e)&&(e=0),settingsManager.isMobileModeEnabled?document.documentElement.style.setProperty("--top-menu-height",e+17+"px"):document.documentElement.style.setProperty("--top-menu-height",e+25+"px")}(0,n.gE)("bottom-icons")&&""==(0,n.gE)("bottom-icons").innerText?((0,n.gE)("nav-footer").style.visibility="hidden",(0,n.ys)("nav-footer")):(0,n.FG)("nav-footer");const i=(0,n.gE)("bottom-icons-container");if(i){const e=i.offsetHeight;document.documentElement.style.setProperty("--bottom-menu-top",e+"px")}e.aboutManager&&((0,n.gE)("versionNumber-text").innerHTML=`${settingsManager.versionNumber} - ${settingsManager.versionDate}`),"forerunner.space"!==window.location.hostname&&"www.forerunner.space"!==window.location.hostname||Ca(),(0,n.gE)("bottom-icons-container").addEventListener("mousewheel",e=>{e.preventDefault(),((e,t)=>{const i=e.scrollTop+.15*t;e.scrollTop=i})(e.currentTarget,e.deltaY)},{passive:!1})},Ca=()=>{const e=document.createElement("script");e.type="text/javascript",e.setAttribute("async","true"),e.setAttribute("src","https://www.googletagmanager.com/gtag/js?id=G-ENHWK6L0X7"),document.documentElement.firstChild.appendChild(e),window.dataLayer=window.dataLayer||[];const t=function(e,t){window.dataLayer.push(arguments)};t("js",new Date),t("config","G-ENHWK6L0X7")}},5490:(e,t,i)=>{i.d(t,{A:()=>l});var a=i(7072),s=i.n(a),n=i(5153),o=i.n(n)()(s());o.push([e.id,"#reset-sensor-button {\n  margin: 10px 0px;\n}\n\n#reset-sensor-text {\n  text-align: center;\n}\n\n#list-of-sensors li:first-child {\n  display: none;\n}\n\n#sensor-list-content ul li {\n  padding: 2px !important;\n  overflow: hidden !important;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n/* First span goes left */\n#sensor-list-content ul li span:first-child {\n  float: left;\n  text-align: left;\n}\n\n/* Second span is centered */\n#sensor-list-content ul li span:nth-child(2) {\n  text-align: center;\n}\n\n/* Third span goes right */\n#sensor-list-content ul li span:last-child {\n  float: right;\n  text-align: right;\n}\n",""]);const l=o}}]);
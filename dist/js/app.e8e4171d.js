(function(e){function t(t){for(var i,n,o=t[0],s=t[1],c=t[2],u=0,p=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(p.length)p.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],i=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(i=!1)}i&&(l.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},r={app:0},l=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=s;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"044e":function(e,t,a){"use strict";var i=a("de6c"),r=a.n(i);r.a},"1b79":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("div",{staticClass:"container"},[a("router-view")],1)],1)},l=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"red lighten-2"},[a("div",{staticClass:"nav-wrap"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-car",staticStyle:{"margin-top":"15px"}}),e._v(" Moja Garaza"),a("i",{staticClass:"fa fa-wrench",staticStyle:{"margin-top":"15px"}})])],1)])])},o=[],s=a("2877"),c={},d=Object(s["a"])(c,n,o,!1,null,null,null),u=d.exports,p={name:"App",components:{Navbar:u}},m=p,v=Object(s["a"])(m,r,l,!1,null,null,null),h=v.exports,f=a("8c4f"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[e._v(" Auto ")]),e._l(e.cars,(function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v(" Auto ")]),e._v(" "+e._s(t.name)+" "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-car",params:{vehicle_id:t.vehicle_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)}))],2),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new-vehicle"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},y=[],_=(a("4160"),a("159b"),a("8aa5")),b=a.n(_),w=(a("e71f"),{apiKey:"AIzaSyCx1xAtD9QabTlai-EohO3p6yTPpB6QgFA",authDomain:"mojagaraza-bf794.firebaseapp.com",databaseURL:"https://mojagaraza-bf794.firebaseio.com",projectId:"mojagaraza-bf794",storageBucket:"mojagaraza-bf794.appspot.com",messagingSenderId:"1041656713469",appId:"1:1041656713469:web:caa76738752e9e5ac22e94",measurementId:"G-FBCH16PFEK"}),C=b.a.initializeApp(w),k=C.firestore(),x={name:"dashboard",data:function(){return{cars:[]}},created:function(){var e=this;k.collection("vehicles").orderBy("type").get().then((function(t){t.forEach((function(t){var a={id:t.id,vehicle_id:t.data().vehicle_id,name:t.data().mark,model:t.data().model,km:t.data().mileage,years:t.data().year};e.cars.push(a)}))}))}},P=x,j=Object(s["a"])(P,g,y,!1,null,null,null),E=j.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-car"}},[a("h3",[e._v("Izmeni karakteristike vozila")]),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateVehicle(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicle_id,expression:"vehicle_id"}],attrs:{type:"text",required:""},domProps:{value:e.vehicle_id},on:{input:function(t){t.target.composing||(e.vehicle_id=t.target.value)}}})]),a("div",{staticClass:"input-field col s3"},[a("p",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{name:"group1",type:"radio",value:"car",checked:""},domProps:{checked:e._q(e.type,"car")},on:{change:function(t){e.type="car"}}}),a("span",[e._v("Automobil")])]),a("br"),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{name:"group1",type:"radio",value:"moto"},domProps:{checked:e._q(e.type,"moto")},on:{change:function(t){e.type="moto"}}}),a("span",[e._v("Motor")])]),a("br"),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{name:"group1",type:"radio",value:"other"},domProps:{checked:e._q(e.type,"other")},on:{change:function(t){e.type="other"}}}),a("span",[e._v("Ostalo")])])])]),a("div",{staticClass:"input-field col s3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mark,expression:"mark"}],attrs:{type:"text",name:"mark",required:""},domProps:{value:e.mark},on:{input:function(t){t.target.composing||(e.mark=t.target.value)}}})]),a("div",{staticClass:"input-field col s3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],attrs:{type:"text",name:"model",required:""},domProps:{value:e.model},on:{input:function(t){t.target.composing||(e.model=t.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mileage,expression:"mileage"}],attrs:{type:"text",required:""},domProps:{value:e.mileage},on:{input:function(t){t.target.composing||(e.mileage=t.target.value)}}})]),a("div",{staticClass:"input-field col s4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.registration,expression:"registration"}],attrs:{type:"date",required:""},domProps:{value:e.registration},on:{input:function(t){t.target.composing||(e.registration=t.target.value)}}})]),a("div",{staticClass:"input-field col s4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],attrs:{type:"text",required:""},domProps:{value:e.year},on:{input:function(t){t.target.composing||(e.year=t.target.value)}}})])]),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},O=[],q={name:"view-car",data:function(){return{created_at:null,mark:null,mileage:null,model:null,registration:null,type:null,vehicle_id:null,year:null}},beforeRouteEnter:function(e,t,a){k.collection("vehicles").where("vehicle_id","==",e.params.vehicle_id).get().then((function(e){e.forEach((function(e){a((function(t){t.vehicle_id=e.data().vehicle_id,t.created_at=e.data().created_at,t.mark=e.data().mark,t.mileage=e.data().mileage,t.type=e.data().type,t.year=e.data().year,t.model=e.data().model,t.registration=e.data().registration}))}))}))},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;k.collection("vehicles").where("vehicle_id","==",this.$route.params.vehicle_id).get().then((function(t){t.forEach((function(t){e.vehicle_id=t.data().vehicle_id,e.created_at=t.data().created_at,e.mark=t.data().mark,e.mileage=t.data().mileage,e.type=t.data().type,e.year=t.data().year,e.model=t.data().model,e.registration=t.data().registration}))}))},updateVehicle:function(){var e=this;k.collection("vehicles").where("vehicle_id","==",this.$route.params.vehicle_id).get().then((function(t){t.forEach((function(t){t.ref.update({vehicle_id:e.vehicle_id,created_a:e.created_at,mark:e.mark,mileage:e.mileage,type:e.type,year:e.year,model:e.model,registration:e.registration}).then((function(){e.$router.push({name:"view-vehicle",params:{vehicle_id:e.vehicle_id}})}))}))}))}}},$=q,z=(a("c528"),Object(s["a"])($,N,O,!1,null,"6c04fd0a",null)),S=z.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-car"}},[a("h3",[e._v("Dodaj vozilo")]),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveVehicle(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicle_id,expression:"vehicle_id"}],attrs:{type:"text",required:""},domProps:{value:e.vehicle_id},on:{input:function(t){t.target.composing||(e.vehicle_id=t.target.value)}}}),a("label",{attrs:{for:""}},[e._v("Registracija")])]),a("div",{staticClass:"input-field col s3"},[a("label",{attrs:{for:""}},[e._v("Tip vozila")]),a("br"),a("p",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{name:"group1",type:"radio",value:"car",checked:""},domProps:{checked:e._q(e.type,"car")},on:{change:function(t){e.type="car"}}}),a("span",[e._v("Automobil")])]),a("br"),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{name:"group1",type:"radio",value:"moto"},domProps:{checked:e._q(e.type,"moto")},on:{change:function(t){e.type="moto"}}}),a("span",[e._v("Motor")])]),a("br"),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{name:"group1",type:"radio",value:"other"},domProps:{checked:e._q(e.type,"other")},on:{change:function(t){e.type="other"}}}),a("span",[e._v("Ostalo")])])])]),a("div",{staticClass:"input-field col s3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mark,expression:"mark"}],attrs:{type:"text",name:"mark",required:""},domProps:{value:e.mark},on:{input:function(t){t.target.composing||(e.mark=t.target.value)}}}),a("label",[e._v("Marka")])]),a("div",{staticClass:"input-field col s3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],attrs:{type:"text",name:"model",required:""},domProps:{value:e.model},on:{input:function(t){t.target.composing||(e.model=t.target.value)}}}),a("label",[e._v("Model")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mileage,expression:"mileage"}],attrs:{type:"text",required:""},domProps:{value:e.mileage},on:{input:function(t){t.target.composing||(e.mileage=t.target.value)}}}),a("label",{attrs:{for:""}},[e._v("Kilometraza")])]),a("div",{staticClass:"input-field col s4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.registration,expression:"registration"}],attrs:{type:"date",required:""},domProps:{value:e.registration},on:{input:function(t){t.target.composing||(e.registration=t.target.value)}}}),a("label",{attrs:{for:""}},[e._v("Datum Registracije")])]),a("div",{staticClass:"input-field col s4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],attrs:{type:"text",required:""},domProps:{value:e.year},on:{input:function(t){t.target.composing||(e.year=t.target.value)}}}),a("label",{attrs:{for:""}},[e._v("Godiste")])])]),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},A=[],M={name:"new-vehicle",data:function(){return{mark:null,mileage:null,model:null,registration:null,type:null,vehicle_id:null,year:null}},methods:{saveVehicle:function(){k.collection("vehicles").add({created_at:Date.now(),mark:this.mark,mileage:this.mileage,model:this.model,registration:this.registration,type:this.type,vehicle_id:this.vehicle_id,year:this.year}).then(this.$router.push("/")).catch((function(e){return console.log(e)}))}}},I=M,T=(a("044e"),Object(s["a"])(I,D,A,!1,null,"5ee93ebe",null)),V=T.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view-car"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(e._s(e.mark))])]),a("li",{staticClass:"collection-item"},[e._v(" Kilometraza: "+e._s(e.mileage)+" ")])]),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Nazad")]),a("button",{staticClass:"btn red",on:{click:e.deleteVehicle}},[e._v("Izbrisi")]),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large blue",attrs:{to:{name:"edit-vehicle",params:{vehicle_id:e.vehicle_id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},B=[],F={name:"view-car",data:function(){return{created_at:null,mark:null,mileage:null,model:null,registration:null,type:null,vehicle_id:null,year:null}},beforeRouteEnter:function(e,t,a){k.collection("vehicles").where("vehicle_id","==",e.params.vehicle_id).get().then((function(e){e.forEach((function(e){a((function(t){t.vehicle_id=e.data().vehicle_id,t.created_at=e.data().created_at,t.mark=e.data().mark,t.mileage=e.data().mileage,t.type=e.data().type,t.year=e.data().year,t.model=e.data().model,t.registration=e.data().registration}))}))}))},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;k.collection("vehicles").where("vehicle_id","==",this.$route.params.vehicle_id).get().then((function(t){t.forEach((function(t){e.vehicle_id=t.data().vehicle_id,e.created_at=t.data().created_at,e.mark=t.data().mark,e.mileage=t.data().mileage,e.type=t.data().type,e.year=t.data().year,e.model=t.data().model,e.registration=t.data().registration}))}))},deleteVehicle:function(){var e=this;confirm("Da li ste sigurni")&&k.collection("vehicles").where("vehicle_id","==",this.$route.params.vehicle_id).get().then((function(t){t.forEach((function(t){t.ref.delete(),e.$router.push("/")}))}))}}},K=F,G=Object(s["a"])(K,R,B,!1,null,null,null),J=G.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("center",[a("div",{staticClass:"section"}),a("div",{staticClass:"container"},[a("div",{staticClass:"z-depth-1 grey lighten-4 row",staticStyle:{display:"inline-block",padding:"32px 48px 0px 48px",border:"1px solid #EEE"}},[a("form",{staticClass:"col s12",attrs:{method:"post"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"})]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12 "},[a("input",{staticClass:"validate",attrs:{type:"email",name:"email",id:"email"}}),a("label",{staticClass:"blue-text",attrs:{for:"email"}},[e._v("Username or email ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{staticClass:"validate",attrs:{type:"password",name:"password",id:"password"}}),a("label",{staticClass:"blue-text",attrs:{for:"password"}},[e._v("Password")])]),a("label",{staticStyle:{float:"left"}},[a("a",{attrs:{href:"#!"}},[a("b",[e._v("Create Account?")])])]),a("label",{staticStyle:{float:"right"}},[a("a",{attrs:{href:"#!"}},[a("b",[e._v("Forgot Password?")])])])]),a("br"),a("center",[a("div",{staticClass:"row"},[a("button",{staticClass:"col s12 btn btn-large waves-effect red lighten-2",attrs:{type:"submit",name:"btn_login"}},[e._v("Login")])])])],1)])])])],1)},Q=[],U=(a("aeb0"),{}),H=Object(s["a"])(U,L,Q,!1,null,"376d1ea4",null),W=H.exports;i["a"].use(f["a"]);var X=[{path:"/",name:"dashboard",component:E},{path:"/login",name:"login",component:W},{path:"/new-vehicle",name:"new-vehicle",component:V},{path:"/edit-vehicle/:vehicle_id",name:"edit-vehicle",component:S},{path:"/:vehicle_id",name:"view-car",component:J}],Y=new f["a"]({mode:"history",base:"/",routes:X}),Z=Y;i["a"].config.productionTip=!1,new i["a"]({router:Z,render:function(e){return e(h)}}).$mount("#app")},aeb0:function(e,t,a){"use strict";var i=a("da21"),r=a.n(i);r.a},c528:function(e,t,a){"use strict";var i=a("1b79"),r=a.n(i);r.a},da21:function(e,t,a){},de6c:function(e,t,a){}});
//# sourceMappingURL=app.e8e4171d.js.map
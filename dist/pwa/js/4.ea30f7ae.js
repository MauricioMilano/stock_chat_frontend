(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"277f":function(t,a,e){},"765b":function(t,a,e){"use strict";e("277f")},e422:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-ma-md"},[e("div",{staticClass:"q-gutter-md"},[e("q-card",{staticClass:"my-card login-box"},[e("h3",{staticClass:".text-h3 login-title"},[t._v(" Signup")]),e("q-card-section",[e("q-input",{staticClass:"input",attrs:{label:"Name",bla:!0},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.Signup(a)}},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}}),e("q-input",{staticClass:"input",attrs:{label:"Email",bla:!0},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.Signup(a)}},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),e("q-input",{staticClass:"input",attrs:{type:"password",label:"password"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.Signup(a)}},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("q-btn",{attrs:{color:"primary",label:"Enviar",loading:t.isLoading},on:{click:t.Signup}})],1),e("q-card-section",[e("p",{staticClass:"signup-text-below"},[t._v("Do you have an account? "),e("a",{attrs:{href:"/#"},on:{click:t.LoginPage}},[t._v("Login Here")])])])],1)],1)])},i=[],s=(e("e6cf"),{name:"Signup",data(){return{name:"",password:"",email:"",isLoading:!1}},created(){console.log(this.$moment().format("MMMM Do YYYY, h:mm:ss a"))},methods:{async Signup(){try{this.isLoading=!this.isLoading,await this.$store.dispatch("auth/SIGNUP_REQUEST",{user_name:this.name,email:this.email,password:this.password}),this.$router.push({path:"/chat"}),this.isLoading=!this.isLoading}catch(t){this.isLoading=!this.isLoading}},LoginPage(){this.$router.push({path:"/login"})}}}),o=s,l=(e("765b"),e("2877")),r=e("f09f"),c=e("a370"),u=e("27f9"),p=e("9c40"),d=e("eebe"),m=e.n(d),h=Object(l["a"])(o,n,i,!1,null,null,null);a["default"]=h.exports;m()(h,"components",{QCard:r["a"],QCardSection:c["a"],QInput:u["a"],QBtn:p["a"]})}}]);
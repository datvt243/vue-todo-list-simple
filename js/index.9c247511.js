(function(t){function e(e){for(var i,l,r=e[0],a=e[1],c=e[2],u=0,m=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&m.push(n[l][0]),n[l]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],i=!0,r=1;r<o.length;r++){var a=o[r];0!==n[a]&&(i=!1)}i&&(s.splice(e--,1),t=l(l.s=o[0]))}return t}var i={},n={index:0},s=[];function l(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=i,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(o,i,function(e){return t[e]}.bind(null,i));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vue-todo-list-simple/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=a;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"15b0":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("4160"),o("d3b7"),o("ac1f"),o("5319"),o("159b"),o("ddb0"),o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container is-flex"},[o("Header",{attrs:{projectName:t.projectName}}),o("main",{staticClass:"main-wrapper"},[o("TodoWrapper")],1),o("Footer")],1)])},s=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header-wrapper mb-4"},[i("nav",{staticClass:"navbar bg-dark px-4 rounded-3"},[i("span",{staticClass:"navbar-brand"},[i("img",{staticClass:"d-inline-block align-top",attrs:{src:o("cf05"),width:"30",alt:"",loading:"lazy"}}),i("strong",{staticClass:"ms-2 h5"},[t._v(t._s(t.projectName))])])])])},r=[],a={name:"Header",props:["projectName"]},c=a,d=o("2877"),u=Object(d["a"])(c,l,r,!1,null,null,null),m=u.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer-wrapper"},[o("div",{staticClass:"clearfix"},[o("p",{staticClass:"text-center"},[t._v(" Make by me © 2021 ")])])])}],h={data:function(){return{}}},C=h,v=Object(d["a"])(C,p,f,!1,null,null,null),b=v.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bg-dark p-4 text-white rounded-3"},[o("div",{staticClass:"mb-2"},[o("TodoForm",{on:{addNewToDo:t.addNewToDo}})],1),o("div",{staticClass:"todo-content"},[t.listTodo.length?o("div",{staticClass:"clearfix"},[o("div",{staticClass:"clearfix mb-2"},[t._m(0),o("transition-group",{staticClass:"list-group list-group-flush mb-4",attrs:{tag:"ul",name:"animate"}},t._l(t.getListToDo,(function(e,i){return o("li",{key:i,staticClass:"list-group-item"},[o("TodoItem",{attrs:{item:e,index:i},on:{editTodo:t.editTodo,canotEdit:t.canotEdit,updateToDo:t.updateToDo,deleteToDo:t.deleteToDo}})],1)})),0)],1),o("div",{staticClass:"clearfix mb-4"},[o("TodoResult",{attrs:{getNotComplete:t.getNotComplete,isCheckAll:t.isCheckAll},on:{checkAllComplete:t.checkAllComplete}})],1),o("div",{staticClass:"clearfix mb-4"},[o("TodoControl",{attrs:{disabledBtnIsComplete:t.disabledBtnIsComplete,disabledBtnNotComplete:t.disabledBtnNotComplete,showBtnClearComplete:t.showBtnClearComplete,clearComplete:t.clearComplete}})],1)]):o("transition",{attrs:{name:"animate"}},[o("TodoFooter")],1)],1)])},T=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mb-2"},[o("div",{staticClass:"text-end text-info"},[o("small",[o("i",[t._v("DoubleClick vào title để edit")])])])])}],_=(o("4de4"),o("a434"),o("498a"),o("5530")),w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"doto-form"},[o("div",{staticClass:"input-group"},[t._m(0),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"todo-input",placeholder:"thêm tác vụ mới ... [Enter] để thêm vào"},domProps:{value:t.newTodo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.emitAddNewTodo(e)},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}})])])},k=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"input-group-text",attrs:{id:"basic-addon3"}},[o("strong",{staticClass:"h5 mb-0"},[t._v("Thêm Mới")])])}],x={name:"TodoForm",data:function(){return{newTodo:""}},methods:{emitAddNewTodo:function(){this.$emit("addNewToDo",this.newTodo),this.newTodo=""}}},y=x,E=Object(d["a"])(y,w,k,!1,null,"1ad32456",null),O=E.exports,j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item"},[o("div",{staticClass:"row align-items-center"},[o("div",{staticClass:"col-auto"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.item.isComplete,expression:"item.isComplete"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"doto-"+t.index},domProps:{checked:Array.isArray(t.item.isComplete)?t._i(t.item.isComplete,null)>-1:t.item.isComplete},on:{change:function(e){var o=t.item.isComplete,i=e.target,n=!!i.checked;if(Array.isArray(o)){var s=null,l=t._i(o,s);i.checked?l<0&&t.$set(t.item,"isComplete",o.concat([s])):l>-1&&t.$set(t.item,"isComplete",o.slice(0,l).concat(o.slice(l+1)))}else t.$set(t.item,"isComplete",n)}}})]),o("div",{staticClass:"col flex-grow-1"},[t.item.isEdit?o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.item.content,expression:"item.content"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.item.content},on:{blur:function(e){return t.emitUpdateToDo(t.item)},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.emitUpdateToDo(t.item)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.emitCanNotEdit(t.item)}],input:function(e){e.target.composing||t.$set(t.item,"content",e.target.value)}}})]):o("p",{class:{del:t.item.isComplete},on:{dblclick:function(e){return t.emitEditTodo(t.item)}}},[t._v(" "+t._s(t.item.content)+" ")])]),o("div",{staticClass:"col-auto"},[o("span",{staticClass:"btn text-white",on:{click:function(e){return t.emitDeleteToDo(t.index)}}},[o("base-icon-delete")],1)])])])},D=[],N={name:"TodoItem",props:["item","index"],methods:{emitEditTodo:function(t){this.$emit("editTodo",t)},emitCanNotEdit:function(t){this.$emit("canotEdit",t)},emitUpdateToDo:function(t){this.$emit("updateToDo",t)},emitDeleteToDo:function(t){this.$emit("deleteToDo",t)}},directives:{focus:{inserted:function(t){t.focus()}}}},$=N,B=Object(d["a"])($,j,D,!1,null,null,null),F=B.exports,A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"clearfix"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-auto"},[o("button",{staticClass:"btn btn-light border-0",class:{"is-active":"all"==t.getFilter},attrs:{type:"button"},on:{click:function(e){return t.setFilter("all")}}},[t._v(" Tất cả ")])]),o("div",{staticClass:"col-auto"},[o("button",{staticClass:"btn btn-light border-0",class:{"is-active":"done"==t.getFilter},attrs:{type:"button",disabled:!t.disabledBtnIsComplete},on:{click:function(e){return t.setFilter("done")}}},[t._v(" Đã hoàn thành ")])]),o("div",{staticClass:"col-auto"},[o("button",{staticClass:"btn btn-light border-0",class:{"is-active":"notDone"==t.getFilter},attrs:{type:"button",disabled:!t.disabledBtnNotComplete},on:{click:function(e){return t.setFilter("notDone")}}},[t._v(" Chưa hoàn thành ")])])])]),o("div",{staticClass:"col-auto"},[o("transition",{attrs:{name:"animate"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.showBtnClearComplete,expression:"showBtnClearComplete != 0"}],staticClass:"float-right"},[o("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.clearComplete}},[t._v(" Xóa các mục đã hoàn thành ")])])])],1)])])},L=[],I=o("2f62"),P={name:"TodoControl",props:["disabledBtnIsComplete","disabledBtnNotComplete","showBtnClearComplete","clearComplete"],computed:Object(_["a"])({},Object(I["b"])(["getFilter"])),methods:Object(_["a"])({},Object(I["c"])(["setFilter"]))},M=P,S=(o("7003"),Object(d["a"])(M,A,L,!1,null,"2e9d70db",null)),H=S.exports,U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row align-items-center justify-content-between"},[t._m(0),o("div",{staticClass:"col-auto"},[o("div",{staticClass:"form-check"},[o("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"checkall"},domProps:{checked:t.isCheckAll},on:{change:t.emitCheckAllComplete}}),o("label",{staticClass:"form-check-label",attrs:{for:"checkall"}},[t._v(' Đánh dấu tất cả là "Đã hoàn thành" ')])])]),o("div",{staticClass:"col-auto"},[o("p",{staticClass:"text-right"},[t._v(" Có "),o("strong",[t._v("["+t._s(t.getNotComplete)+"]")]),t._v(" mục chưa hoàn thành ")])])])},z=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mb-4"},[o("hr")])}],R={name:"TodoResult",props:["getNotComplete","isCheckAll"],methods:{emitCheckAllComplete:function(){this.$emit("checkAllComplete")}}},W=R,q=Object(d["a"])(W,U,z,!1,null,"3cde4c36",null),J=q.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"clearfix"},[o("p",[t._v(" List trống, thêm mới nào ... ")])])}],G={data:function(){return{}}},K=G,Q=Object(d["a"])(K,V,X,!1,null,null,null),Y=Q.exports,Z={name:"TodoWrapper",components:{TodoForm:O,TodoItem:F,TodoControl:H,TodoResult:J,TodoFooter:Y},data:function(){return{listTodo:[{id:1,content:"Lorem ipsum dolor sit amet.",isComplete:!0,isEdit:!1},{id:2,content:"Lorem ipsum dolor sit amet consectetur adipisicing.",isComplete:!1,isEdit:!1},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, cumque.",isComplete:!1,isEdit:!1}]}},computed:Object(_["a"])(Object(_["a"])({},Object(I["b"])(["getFilter","getBeforeEdit"])),{},{getListToDo:function(){return"all"==this.getFilter?this.listTodo:"notDone"==this.getFilter?this.listTodo.filter((function(t){return!t.isComplete})):"done"==this.getFilter?this.listTodo.filter((function(t){return t.isComplete})):this.listTodo},getNotComplete:function(){return this.listTodo.filter((function(t){return 0==t.isComplete})).length},getIDLast:function(){return 0==this.listTodo.length?1:this.listTodo[this.listTodo.length-1].id},isCheckAll:function(){return 0==this.getNotComplete},showBtnClearComplete:function(){return this.listTodo.filter((function(t){return t.isComplete})).length},disabledBtnIsComplete:function(){return this.listTodo.filter((function(t){return t.isComplete})).length},disabledBtnNotComplete:function(){return this.listTodo.filter((function(t){return!t.isComplete})).length}}),methods:Object(_["a"])(Object(_["a"])({},Object(I["c"])(["setFilter","setBeforeEdit"])),{},{addNewToDo:function(t){""!=t.trim()&&this.listTodo.push({id:this.getIDLast+1,content:t,isComplete:!1,isEdit:!1})},deleteToDo:function(t){this.listTodo.splice(t,1)},editTodo:function(t){this.setBeforeEdit(t.content),t.isEdit=!0},canotEdit:function(t){this.setBeforeEdit(""),t.isEdit=!1},updateToDo:function(t){""==t.content.trim()&&(t.content=this.getBeforeEdit),t.isEdit=!1},checkAllComplete:function(){this.listTodo.forEach((function(t){return t.isComplete=event.target.checked}))},clearComplete:function(){this.listTodo=this.getListToDo.filter((function(t){return!t.isComplete}))}})},tt=Z,et=(o("e730"),Object(d["a"])(tt,g,T,!1,null,null,null)),ot=et.exports,it={name:"app",components:{Header:m,Footer:b,TodoWrapper:ot},data:function(){return{projectName:"TODO List"}}},nt=it,st=(o("cf25"),Object(d["a"])(nt,n,s,!1,null,null,null)),lt=st.exports;i["a"].use(I["a"]);var rt=new I["a"].Store({state:{filter:"all",beforeEdit:""},getters:{getFilter:function(t){return t.filter},getBeforeEdit:function(t){return t.beforeEdit}},mutations:{setFilter:function(t,e){t.filter=e},setBeforeEdit:function(t,e){t.beforeEdit=e}},actions:{},modules:{}}),at=o("8103"),ct=o.n(at),dt=o("bba4"),ut=o.n(dt),mt=o("eeb4");mt.keys().forEach((function(t){var e=mt(t),o=ct()(ut()(t.replace(/^\.\/(.*)\.\w+$/,"$1")));i["a"].component(o,e.default||e)})),i["a"].config.productionTip=!1,new i["a"]({store:rt,render:function(t){return t(lt)}}).$mount("#app")},6120:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{staticClass:"bi bi-x-square delete",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}}),o("path",{attrs:{"fill-rule":"evenodd",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])},n=[],s={name:"BaseButton",props:{classname:{type:String,default:"btn-light"}}},l=s,r=o("2877"),a=Object(r["a"])(l,i,n,!1,null,null,null);e["default"]=a.exports},7003:function(t,e,o){"use strict";var i=o("93a5"),n=o.n(i);n.a},"93a5":function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},cf25:function(t,e,o){"use strict";var i=o("fea6"),n=o.n(i);n.a},e730:function(t,e,o){"use strict";var i=o("15b0"),n=o.n(i);n.a},eeb4:function(t,e,o){var i={"./BaseIconDelete.vue":"6120"};function n(t){var e=s(t);return o(e)}function s(t){if(!o.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="eeb4"},fea6:function(t,e,o){}});
//# sourceMappingURL=index.9c247511.js.map
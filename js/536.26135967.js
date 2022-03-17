"use strict";(self["webpackChunkvue_week7"]=self["webpackChunkvue_week7"]||[]).push([[536],{9087:function(e,t,l){function a(e){const t=new Date(1e3*e);return t.toLocaleDateString()}l.d(t,{D:function(){return a}})},4053:function(e,t,l){l.d(t,{Z:function(){return b}});var a=l(6252),n=l(3577),s=l(9963);const d={"aria-label":"Page navigation example"},r={class:"pagination"},o=(0,a._)("span",{"aria-hidden":"true"},"«",-1),i=[o],c=["onClick"],u=(0,a._)("span",{"aria-hidden":"true"},"»",-1),p=[u];function h(e,t,l,o,u,h){return(0,a.wg)(),(0,a.iD)("nav",d,[(0,a._)("ul",r,[(0,a._)("li",{class:(0,n.C_)(["page-item",{disabled:!l.pages.has_pre}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,s.iM)((e=>h.changePages(l.pages.current_page-1)),["prevent"]))},i)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(e=>((0,a.wg)(),(0,a.iD)("li",{class:(0,n.C_)(["page-item",{active:e===l.pages.current_page}]),key:e+123},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((t=>h.changePages(e)),["prevent"])},(0,n.zw)(e),9,c)],2)))),128)),(0,a._)("li",{class:(0,n.C_)(["page-item",{disabled:!l.pages.has_next}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,s.iM)((e=>h.changePages(l.pages.current_page+1)),["prevent"]))},p)],2)])])}var _={props:["pages"],methods:{changePages(e){this.$emit("change-pages",e)}}},g=l(3744);const m=(0,g.Z)(_,[["render",h]]);var b=m},1536:function(e,t,l){l.r(t),l.d(t,{default:function(){return ze}});var a=l(6252),n=l(3577),s=l(9963);const d={class:"container"},r={class:"table mt-4"},o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"購買時間"),(0,a._)("th",null,"Email"),(0,a._)("th",null,"購買款項"),(0,a._)("th",null,"應付金額"),(0,a._)("th",null,"是否付款"),(0,a._)("th",null,"編輯")])],-1),i=["textContent"],c={class:"list-unstyled"},u={class:"text-right"},p={class:"form-check form-switch"},h=["id","onUpdate:modelValue","onChange"],_=["for"],g={key:0},m={key:1},b={class:"btn-group"},w=["onClick"],O=["onClick"];function k(e,t,l,k,v,y){const f=(0,a.up)("VLoading"),D=(0,a.up)("PaginationComponent"),C=(0,a.up)("OrderModalComponent"),M=(0,a.up)("DelOrderModalComponent");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(f,{active:v.isLoading,"z-index":1060},null,8,["active"]),(0,a._)("div",d,[(0,a._)("table",r,[o,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(v.orders,((e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:e.id+t},[v.orders.length?((0,a.wg)(),(0,a.iD)("tr",{key:0,class:(0,n.C_)({"text-secondary":!e.is_paid})},[(0,a._)("td",null,(0,n.zw)(y.DateFn(e.create_at)),1),(0,a._)("td",null,[e.user?((0,a.wg)(),(0,a.iD)("span",{key:0,textContent:(0,n.zw)(e.user.email)},null,8,i)):(0,a.kq)("",!0)]),(0,a._)("td",null,[(0,a._)("ul",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.products,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t},(0,n.zw)(e.product.title)+" 數量："+(0,n.zw)(e.qty)+" "+(0,n.zw)(e.product.unit),1)))),128))])]),(0,a._)("td",u,(0,n.zw)(e.total),1),(0,a._)("td",null,[(0,a._)("div",p,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${e.id}`,"onUpdate:modelValue":t=>e.is_paid=t,onChange:t=>y.updatePaid(e)},null,40,h),[[s.e8,e.is_paid]]),(0,a._)("label",{class:"form-check-label",for:`paidSwitch${e.id}`},[e.is_paid?((0,a.wg)(),(0,a.iD)("span",g,"已付款")):((0,a.wg)(),(0,a.iD)("span",m,"未付款"))],8,_)])]),(0,a._)("td",null,[(0,a._)("div",b,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:t=>y.openModal("view",e)}," 檢視 ",8,w),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:t=>y.openModal("del",e)}," 刪除 ",8,O)])])],2)):(0,a.kq)("",!0)],64)))),128))])]),(0,a.Wm)(D,{pages:v.pagination,onChangePages:y.getOrders},null,8,["pages","onChangePages"]),(0,a.Wm)(C,{ref:"orderModal","temp-order":v.tempOrder,"current-page":v.pagination.current_page,onUpdatePaid:y.updatePaid},null,8,["temp-order","current-page","onUpdatePaid"]),(0,a.Wm)(M,{ref:"delOrderModal","temp-order":v.tempOrder,"current-page":v.pagination.current_page,onGetOrders:y.getOrders},null,8,["temp-order","current-page","onGetOrders"])])],64)}var v=l(9087);const y={id:"delOrderModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"delOrderModalLabel","aria-hidden":"true"},f={class:"modal-dialog"},D={class:"modal-content border-0"},C=(0,a._)("div",{class:"modal-header bg-danger text-white"},[(0,a._)("h5",{id:"delOrderModalLabel",class:"modal-title"},[(0,a._)("span",null,"刪除產品")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),M={class:"modal-body"},x=(0,a.Uk)(" 是否刪除 "),z={class:"text-danger"},P=(0,a.Uk)(" 訂單(刪除後將無法恢復)。 "),L={class:"modal-footer"};function $(e,t,l,s,d,r){const o=(0,a.up)("VLoading");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(o,{active:d.isLoading,"z-index":1060},null,8,["active"]),(0,a._)("div",y,[(0,a._)("div",f,[(0,a._)("div",D,[C,(0,a._)("div",M,[x,(0,a._)("strong",z,(0,n.zw)(l.tempOrder.id),1),P]),(0,a._)("div",L,[(0,a._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:t[0]||(t[0]=(...e)=>r.closeModal&&r.closeModal(...e))}," 取消 "),(0,a._)("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=(...e)=>r.delOrder&&r.delOrder(...e))}," 確認刪除 ")])])])],512)],64)}var Z=l(6716),S=l(4902),H={props:["tempOrder","currentPage"],emits:["get-orders"],mixins:[Z.Z],data(){return{isLoading:!1}},methods:{delOrder(){console.log(this.tempOrder),this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/v2/api/clothes/admin/order/${this.tempOrder.id}`;this.$http.delete(e).then((e=>{this.isLoading=!1,S.Z.emit("push-message",{style:"success",title:this.tempOrder.id+"訂單"+e.data.message}),this.$emit("get-orders",this.currentPage),this.closeModal()})).catch((e=>{console.dir(e),this.isLoading=!1}))},closeModal(){this.modal.hide()}}},U=l(3744);const Y=(0,U.Z)(H,[["render",$]]);var q=Y,F=l(4053);const N={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},V={class:"modal-dialog modal-xl",role:"document"},W={class:"modal-content border-0"},J={class:"modal-header bg-dark text-white"},K=(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"訂單細節")],-1),E={class:"modal-body"},G={class:"row"},j={class:"col-md-4"},A=(0,a._)("h3",null,"用戶資料",-1),B={class:"table"},I={key:0},Q=(0,a._)("th",{style:{width:"100px"}},"姓名",-1),R=(0,a._)("th",null,"Email",-1),T=(0,a._)("th",null,"電話",-1),X=(0,a._)("th",null,"地址",-1),ee={class:"col-md-8"},te=(0,a._)("h3",null,"訂單細節",-1),le={class:"table"},ae=(0,a._)("th",{style:{width:"100px"}},"訂單編號",-1),ne=(0,a._)("th",null,"下單時間",-1),se=(0,a._)("th",null,"付款時間",-1),de={key:0},re={key:1},oe=(0,a._)("th",null,"付款狀態",-1),ie={key:0,class:"text-success"},ce={key:1,class:"text-muted"},ue=(0,a._)("th",null,"總金額",-1),pe=(0,a._)("h3",null,"選購商品",-1),he={class:"table"},_e=(0,a._)("thead",null,[(0,a._)("tr")],-1),ge={class:"text-end"},me={class:"d-flex justify-content-end"},be={class:"form-check"},we={class:"form-check-label",for:"flexCheckDefault"},Oe={key:0},ke={key:1},ve={class:"modal-footer"};function ye(e,t,l,d,r,o){return(0,a.wg)(),(0,a.iD)("div",N,[(0,a._)("div",V,[(0,a._)("div",W,[(0,a._)("div",J,[K,(0,a._)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=(...e)=>o.closeModal&&o.closeModal(...e)),"aria-label":"Close"})]),(0,a._)("div",E,[(0,a._)("div",G,[(0,a._)("div",j,[A,(0,a._)("table",B,[r.localOrder.user?((0,a.wg)(),(0,a.iD)("tbody",I,[(0,a._)("tr",null,[Q,(0,a._)("td",null,(0,n.zw)(r.localOrder.user.name),1)]),(0,a._)("tr",null,[R,(0,a._)("td",null,(0,n.zw)(r.localOrder.user.email),1)]),(0,a._)("tr",null,[T,(0,a._)("td",null,(0,n.zw)(r.localOrder.user.tel),1)]),(0,a._)("tr",null,[X,(0,a._)("td",null,(0,n.zw)(r.localOrder.user.address),1)])])):(0,a.kq)("",!0)])]),(0,a._)("div",ee,[te,(0,a._)("table",le,[(0,a._)("tbody",null,[(0,a._)("tr",null,[ae,(0,a._)("td",null,(0,n.zw)(r.localOrder.id),1)]),(0,a._)("tr",null,[ne,(0,a._)("td",null,(0,n.zw)(o.DateFn(r.localOrder.create_at)),1)]),(0,a._)("tr",null,[se,(0,a._)("td",null,[r.localOrder.paid_date?((0,a.wg)(),(0,a.iD)("span",de,(0,n.zw)(o.DateFn(r.localOrder.paid_date)),1)):((0,a.wg)(),(0,a.iD)("span",re,"時間不正確"))])]),(0,a._)("tr",null,[oe,(0,a._)("td",null,[r.localOrder.is_paid?((0,a.wg)(),(0,a.iD)("strong",ie,"已付款")):((0,a.wg)(),(0,a.iD)("span",ce,"尚未付款"))])]),(0,a._)("tr",null,[ue,(0,a._)("td",null,(0,n.zw)(r.localOrder.total),1)])])]),pe,(0,a._)("table",he,[_e,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.localOrder.products,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("th",null,(0,n.zw)(e.product.title),1),(0,a._)("td",null,(0,n.zw)(e.qty)+" / "+(0,n.zw)(e.product.unit),1),(0,a._)("td",ge,(0,n.zw)(e.final_total),1)])))),128))])]),(0,a._)("div",me,[(0,a._)("div",be,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[1]||(t[1]=e=>r.localOrder.is_paid=e)},null,512),[[s.e8,r.localOrder.is_paid]]),(0,a._)("label",we,[r.localOrder.is_paid?((0,a.wg)(),(0,a.iD)("span",Oe,"已付款")):((0,a.wg)(),(0,a.iD)("span",ke,"未付款"))])])])])])]),(0,a._)("div",ve,[(0,a._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:t[2]||(t[2]=(...e)=>o.closeModal&&o.closeModal(...e))}," 取消 "),(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=t=>e.$emit("update-paid",r.localOrder))}," 修改付款狀態 ")])])])],512)}var fe={props:["tempOrder","currentPage"],mixins:[Z.Z],data(){return{localOrder:{}}},watch:{tempOrder(){this.localOrder=this.tempOrder}},methods:{closeModal(){this.modal.hide()},DateFn:v.D}};const De=(0,U.Z)(fe,[["render",ye]]);var Ce=De,Me={components:{PaginationComponent:F.Z,OrderModalComponent:Ce,DelOrderModalComponent:q},data(){return{tempOrder:{},orders:[],pagination:{},isLoading:!1}},methods:{getOrders(e=1){const t=`https://vue3-course-api.hexschool.io/v2/api/clothes/admin/orders?page=${e}`;this.isLoading=!0,this.$http.get(t,this.tempProduct).then((e=>{this.orders=e.data.orders,this.pagination=e.data.pagination,this.isLoading=!1})).catch((e=>{console.dir(e)}))},DateFn:v.D,openModal(e,t){"view"===e?(this.tempOrder=JSON.parse(JSON.stringify(t)),this.$refs.orderModal.openModal()):"del"===e&&(this.tempOrder=JSON.parse(JSON.stringify(t)),this.$refs.delOrderModal.openModal())},updatePaid(e){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/v2/api/clothes/admin/order/${e.id}`,l={is_paid:e.is_paid};this.$http.put(t,{data:l}).then((e=>{this.isLoading=!1;const t=this.$refs.orderModal;t.hideModal(),this.getOrders(this.currentPage),console.log(e),S.Z.emit("push-message",{style:"success",title:"更新付款狀態"})})).catch((e=>{console.dir(e),this.isLoading=!1,S.Z.emit("push-message",{style:"danger",title:"付款狀態更新失敗",content:String(e.response.data.message)})}))}},mounted(){this.getOrders()}};const xe=(0,U.Z)(Me,[["render",k]]);var ze=xe}}]);
//# sourceMappingURL=536.26135967.js.map
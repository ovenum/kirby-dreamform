(function(){"use strict";function p(o,e,t,n,s,a,i,l){var d=typeof o=="function"?o.options:o;return e&&(d.render=e,d.staticRenderFns=t,d._compiled=!0),{exports:o,options:d}}const I={extends:"k-layout",computed:{isPageIndicator:{get(){return this.columns.length===1&&this.columns[0].width==="dreamform-page"}}}};var D=function(){var e=this,t=e._self._c;return t("section",{staticClass:"k-layout",class:{"df-layout-page":e.isPageIndicator},attrs:{"data-selected":e.isSelected,tabindex:"0"},on:{click:function(n){return e.$emit("select")}}},[e.isPageIndicator?t("div",{staticClass:"k-layout-columns df-layout-column"},[t("k-icon",{attrs:{type:"survey"}}),e._v(" "+e._s(e.$t("dreamform.form.nextPage"))+" ")],1):t("k-grid",{staticClass:"k-layout-columns"},e._l(e.columns,function(n,s){return t("k-layout-column",e._b({key:n.id,on:{input:function(a){return e.$emit("updateColumn",{column:n,columnIndex:s,blocks:a})}}},"k-layout-column",{...n,endpoints:e.endpoints,fieldsetGroups:e.fieldsetGroups,fieldsets:e.fieldsets},!1))}),1),e.disabled?e._e():t("nav",{staticClass:"k-layout-toolbar"},[e.settings&&!e.isPageIndicator?t("k-button",{staticClass:"k-layout-toolbar-button",attrs:{title:e.$t("settings"),icon:"settings"},on:{click:e.openSettings}}):e._e(),t("k-button",{staticClass:"k-layout-toolbar-button",attrs:{icon:"angle-down"},on:{click:function(n){return e.$refs.options.toggle()}}}),t("k-dropdown-content",{ref:"options",attrs:{options:e.options,"align-x":"end"}}),t("k-sort-handle")],1)],1)},B=[],q=p(I,D,B);const T=q.exports,N={extends:"k-layout-selector"};var U=function(){var n,s;var e=this,t=e._self._c;return t("k-dialog",e._b({staticClass:"k-layout-selector",attrs:{size:((n=e.selector)==null?void 0:n.size)??"medium"},on:{cancel:function(a){return e.$emit("cancel")},submit:function(a){return e.$emit("submit",e.value)}}},"k-dialog",e.$props,!1),[t("h3",{staticClass:"k-label"},[e._v(e._s(e.label))]),t("k-navigate",{staticClass:"k-layout-selector-options",style:{"--columns":Number(((s=e.selector)==null?void 0:s.columns)??3)},attrs:{axis:"x"}},e._l(e.layouts,function(a,i){return t("button",{key:i,staticClass:"k-layout-selector-option",attrs:{"aria-current":e.value===a,"aria-label":a.join(","),value:a},on:{click:function(l){return e.$emit("input",a)}}},[a[0]!=="dreamform-page"?t("k-grid",{attrs:{"aria-hidden":""}},e._l(a,function(l,d){return t("k-column",{key:d,attrs:{width:l}})}),1):t("k-grid",[t("div",{staticClass:"df-layout-selector-page"},[t("k-icon",{attrs:{type:"survey"}}),t("span",[e._v(" "+e._s(e.$t("dreamform.form.newPage"))+" ")])],1)])],1)}),0)],1)},z=[],K=p(N,U,z);const G=K.exports,r=window.Vue;function k(){return window.panel}function P(){return k().api}function x(){return k().app}function Z(){const o=P();return{load:({parent:t,name:n})=>o.get(`${t}/sections/${n}`)}}const L=r.computed;r.customRef,r.defineAsyncComponent,r.defineComponent,r.effectScope,r.getCurrentInstance,r.getCurrentScope,r.h,r.inject,r.isProxy,r.isReactive,r.isReadonly,r.isRef,r.isShallow,r.markRaw;const O=r.nextTick;r.onActivated,r.onBeforeMount,r.onBeforeUnmount,r.onBeforeUpdate,r.onDeactivated,r.onErrorCaptured;const A=r.onMounted;r.onRenderTracked,r.onRenderTriggered,r.onScopeDispose,r.onServerPrefetch,r.onUnmounted,r.onUpdated,r.provide,r.proxyRefs,r.reactive,r.readonly;const m=r.ref;r.shallowReactive,r.shallowReadonly,r.shallowRef,r.toRaw,r.toRef,r.toRefs,r.triggerRef,r.unref,r.useAttrs,r.useCssModule,r.useCssVars,r.useListeners,r.useSlots;const R=r.watch;r.watchEffect,r.watchPostEffect,r.watchSyncEffect;const J={after:String},Q={autofocus:Boolean},W={before:String},E={disabled:Boolean},X={icon:{type:String}},Y={id:{type:[Number,String],default(){return this._uid}}},ee={invalid:Boolean},te={label:String},ne={name:[Number,String]},se={required:Boolean},H={blueprint:String,lock:[Boolean,Object],help:String,name:String,parent:String,timestamp:Number},oe={__name:"ApiObject",props:{formData:{type:Object,default:()=>({})},sync:String,api:String,empty:String,value:[String,Object],novalidate:{type:Boolean,default:!1},config:Object,endpoints:Object,...Q,...J,...W,...E,...X,...ee,...te,...ne,...{type:String},...se},emits:["input"],setup(o,{emit:e}){const t=o,n=m([]),s=P(),a=async()=>{if(!t.formData[t.sync])return;const i=await s.get(`/dreamform/object/mailchimp/${t.endpoints.model}/${t.formData[t.sync]}`);n.value=Object.fromEntries(Object.entries(i).map(([l,d])=>[l,{...d,saveable:l==="tags"?!1:d.saveable}]))};return R(()=>t.formData[t.sync],()=>a()),a(),{__sfc:!0,props:t,emit:e,fields:n,api:s,loadRemoteFields:a}}};var ae=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("k-object-field",e._b({attrs:{fields:n.fields},on:{input:function(s){return n.emit("input",s)}}},"k-object-field",n.props,!1))},re=[],ce=p(oe,ae,re);const ie=ce.exports,le={__name:"License",props:H,setup(o){const e=o,t=m(!0),n=m(!1),s=async()=>{const{load:d}=Z(),g=await d({parent:e.parent,name:e.name});t.value=g.activated,n.value=g.local},a=x(),i=k(),l=()=>{a.$dialog("dreamform/activate",{on:{success(d){i.dialog.close(),i.notification.success(d.message),s()}}})};return s(),{__sfc:!0,props:e,activated:t,local:n,loadSection:s,app:a,panel:i,openDialog:l}}};var de=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return n.activated?e._e():t("k-section",{staticClass:"df-license-section"},[t("div",{staticClass:"df-license-section-wrapper"},[t("a",{staticClass:"df-logo",attrs:{href:"https://plugins.andkindness.com/dreamform",target:"_blank"}},[t("k-icon",{attrs:{type:"dreamform"}}),t("h1",[e._v("DreamForm")])],1),t("h2",{domProps:{textContent:e._s(e.$t(n.local?"dreamform.license.cta":"dreamform.license.demoMode"))}})]),t("a",{attrs:{href:"https://plugins.andkindness.com/dreamform/pricing",target:"_blank"}},[e._v(" "+e._s(e.$t("dreamform.license.buy"))+" ")]),t("k-button",{attrs:{size:"sm",theme:"info",variant:"filled",icon:"key"},on:{click:function(s){return n.openDialog()}}},[e._v(" "+e._s(e.$t("dreamform.license.activate"))+" ")])],1)},ue=[],pe=p(le,de,ue);const _e=pe.exports;function fe(o){const e=window.panel.user.language,t=new Intl.RelativeTimeFormat(e,{numeric:"auto"}),n=(new Date().getTime()-o*1e3)/1e3,s=[{unit:"year",seconds:365*24*60*60},{unit:"month",seconds:30*24*60*60},{unit:"day",seconds:24*60*60},{unit:"hour",seconds:60*60},{unit:"minute",seconds:60}];for(const{unit:a,seconds:i}of s){const l=Math.floor(n/i);if(l>0)return t.format(0-l,a)}return window.panel.$t("dreamform.justNow")}const me={__name:"EntryBase",props:{title:String,template:{type:Object,default:()=>({})},icon:String,timestamp:Number},setup(o){const e=o,t=fe(e.timestamp);return{__sfc:!0,props:e,date:t}}};var ve=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"df-log-entry"},[t("k-icon",{staticClass:"df-log-entry-icon",attrs:{type:n.props.icon}}),t("span",{staticClass:"df-log-entry-line"}),t("div",{staticClass:"df-log-entry-content"},[t("div",{staticClass:"df-log-entry-heading"},[t("span",[e._v(e._s(e.$t(n.props.title,n.props.template,n.props.title)))]),t("span",[e._v(e._s(n.date))])]),e.$slots.default?t("div",{staticClass:"df-log-entry-details"},[e._t("default")],2):e._e()])],1)},ge=[],be=p(me,ve,ge);const he=be.exports,ye={__name:"Submission",props:H,setup(o){const e=o,t=x(),n=k(),s=m(!1),a=m(!1),i=m(!1),l=m([]),d=async()=>{const{load:c}=Z(),f=await c({parent:e.parent,name:e.name});s.value=!0,a.value=f.isSpam,i.value=f.isPartial,l.value=f.log,console.log(l.value)},g=()=>{t.$dialog(`submission/${e.parent.split("/")[2]}/mark-as-${a.value?"ham":"spam"}`,{on:{success(c){n.dialog.close(),n.notification.success(c.message),d()}}})},V=()=>{t.$dialog(`submission/${e.parent.split("/")[2]}/run-actions`,{on:{success(c){n.dialog.close(),n.notification.success(c.message),d()}}})},C=c=>t.$helper.isComponent(`df-log-${c}-entry`);return d(),{__sfc:!0,props:e,app:t,panel:n,didLoad:s,isSpam:a,isPartial:i,log:l,loadSection:d,toggleSpam:g,runActions:V,exists:C,EntryBase:he}}};var $e=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return n.didLoad?t("k-section",{attrs:{headline:e.$t("dreamform.submission")}},[t("k-button",{attrs:{slot:"options",icon:"play",size:"xs",variant:"filled"},on:{click:n.runActions},slot:"options"},[e._v(" "+e._s(e.$t("dreamform.submission.runActions.button"))+" ")]),t("div",{staticClass:"df-submission-section"},[n.isPartial?t("div",{staticClass:"df-stat"},[t("span",{staticClass:"df-stat-value"},[t("k-icon",{attrs:{type:"circle-half"}}),e._v(" "+e._s(e.$t("dreamform.submission.partial"))+" ")],1)]):t("div",{staticClass:"df-stat"},[e._v(" "+e._s(e.$t("dreamform.submission.markedAs").split("…")[0])+" "),t("span",{staticClass:"df-stat-value",class:n.isSpam?"is-negative":"is-positive"},[t("k-icon",{attrs:{type:n.isSpam?"spam":"shield-check"}}),e._v(" "+e._s(e.$t("dreamform.submission."+(n.isSpam?"spam":"ham")))+" ")],1),e._v(" "+e._s(e.$t("dreamform.submission.markedAs").split("…")[1])+" ")])]),n.isPartial?e._e():t("div",{staticClass:"df-submission-section"},[t("k-button",{attrs:{type:"button",variant:"dimmed",size:"sm",icon:"angle-right",theme:n.isSpam?"positive":"error"},on:{click:n.toggleSpam}},[e._v(" "+e._s(e.$t(n.isSpam?"dreamform.submission.reportAsHam.button":"dreamform.submission.reportAsSpam.button"))+" ")])],1),t("div",{staticClass:"df-submission-log"},[e._l(n.log,function(s){var a;return[n.exists(s.type)||s.type==="none"?t(n.EntryBase,{key:s.id,attrs:{template:(a=s.data)==null?void 0:a.template,timestamp:s.timestamp,title:s.title,icon:s.icon}},[t(`df-log-${s.type}-entry`,e._b({tag:"component"},"component",s.data,!1))],1):t("k-box",{key:`${s.id}-error`,attrs:{text:e.$t("dreamform.submission.error.logType",{type:s.type}),icon:"alert",theme:"negative"}})]})],2)],1):e._e()},ke=[],Ce=p(ye,$e,ke);const xe=Ce.exports,h={fieldset:H.fieldset,...E,...Y,endpoints:{default:()=>({}),type:[Array,Object]},content:Object},Fe={__name:"Editable",props:{tag:String,modelValue:String,placeholder:String,slugify:Boolean},emits:["update:modelValue","backspace","enter"],setup(o,{expose:e,emit:t}){const n=o,s=m();e({el:s});const a=k(),i=x();A(()=>s.value.textContent=n.modelValue);const l=()=>{if(n.slugify&&n.modelValue===s.value.textContent.trim())return;const c=window.getSelection(),f=c.rangeCount>0?c.getRangeAt(0):null;let b=f?f.startOffset:0;const w=f?f.endOffset:0,$=n.slugify?i.$helper.slug(s.value.textContent,[a.language.rules??a.$system.slugs,a.$system.ascii],"a-zA-Z0-9_"):s.value.textContent;if($!==s.value.textContent&&(s.value.textContent=$,f)){const u=document.createRange();b=Math.min(b,$.length);const _=Math.min(w,$.length);u.setStart(s.value.firstChild,b),u.setEnd(s.value.firstChild,_),c.removeAllRanges(),c.addRange(u)}t("update:modelValue",$)};R(()=>n.modelValue,c=>{s.value.textContent!==c&&(s.value.textContent=c)});const d=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","a","c","v","z","x","r"];return{__sfc:!0,props:n,el:s,panel:a,app:i,emit:t,handleUpdate:l,metaKeyAllowList:d,handleKeyDown:c=>{c.key==="Backspace"&&!s.value.textContent&&(c.preventDefault(),t("backspace",c)),c.key==="Enter"&&(c.preventDefault(),t("enter",c)),c.metaKey&&!d.includes(c.key)&&c.preventDefault()},handlePaste:c=>{c.preventDefault();const f=c.clipboardData.getData("text/plain").replaceAll(`\r
`," ").replaceAll(`
`," ").replaceAll("\r"," ");document.execCommand("insertText",!1,f)},focus:()=>s.value.focus()}}};var Se=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(e.tag,{tag:"component",staticClass:"df-editable",on:{click:n.focus}},[t("span",{ref:"el",attrs:{contenteditable:"",role:"text-box"},on:{input:n.handleUpdate,blur:n.handleUpdate,keydown:n.handleKeyDown,paste:n.handlePaste}}),e.modelValue?e._e():t("span",[e._v(e._s(e.placeholder))])])},Ve=[],we=p(Fe,Se,Ve);const y=we.exports,Re={__name:"FieldError",props:{content:Object},emits:["update"],setup(o,{emit:e}){return{__sfc:!0,props:o,emit:e,Editable:y}}};var He=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"df-field-error"},[t("span",[e._v(e._s(e.$t("dreamform.common.errorMessage.label"))+":")]),t(n.Editable,{attrs:{tag:"span",placeholder:e.$t("dreamform.fields.error.required"),modelValue:e.content.errormessage},on:{"update:modelValue":function(s){return n.emit("update",{...e.content,errormessage:s})}}})],1)},Pe=[],Ze=p(Re,He,Pe);const F=Ze.exports,Le={__name:"FieldInput",props:{icon:String,content:Object},emits:["update"],setup(o,{emit:e}){return{__sfc:!0,props:o,emit:e,Editable:y}}};var Oe=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"df-input"},[t(n.Editable,{staticClass:"df-placeholder",attrs:{tag:"div",placeholder:e.$t("dreamform.common.placeholder.label"),modelValue:e.content.placeholder},on:{"update:modelValue":function(s){return n.emit("update",{...e.content,placeholder:s})}}}),e.icon?t("k-icon",{attrs:{type:e.icon}}):e._e()],1)},Ae=[],Ee=p(Le,Oe,Ae);const M=Ee.exports,Me={__name:"FieldHeader",props:{content:Object,fieldset:Object,requireLabel:Boolean},emits:["update"],setup(o,{emit:e}){const t=o;return{__sfc:!0,props:t,emit:e,update:s=>e("update",{...t.content,...s}),Editable:y}}};var je=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"df-field-header"},[t("div",[t(n.Editable,{staticClass:"df-field-label",class:{"is-invalid":!e.content.label&&e.requireLabel},attrs:{tag:"div",placeholder:e.fieldset.name,modelValue:e.content.label},on:{"update:modelValue":function(s){return n.update({label:s})}}}),t("button",{staticClass:"df-field-required",class:{"is-active":n.props.content.required},attrs:{type:"button"},on:{click:function(s){return n.update({required:!n.props.content.required})}}},[e._v(" ✶ "),t("span",[e._v(e._s(e.$t("dreamform.common.required.label")))])])],1),t("div",{staticClass:"df-field-key"},[t(n.Editable,{class:{"is-invalid":!e.content.key},attrs:{tag:"code",slugify:!0,placeholder:e.$t("dreamform.common.key.label"),modelValue:e.content.key},on:{"update:modelValue":function(s){return n.update({key:s})}}}),t("k-icon",{attrs:{type:"key"}})],1)])},Ie=[],De=p(Me,je,Ie);const S=De.exports,Be={__name:"TextField",props:h,emits:["update","open"],setup(o,{emit:e}){const t=o,n=l=>e("update",{...t.content,...l}),s=l=>{l.target===l.currentTarget&&e("open")},a=L(()=>!!(t.content.required||t.fieldset.type==="email-field"||t.fieldset.type==="number-field"&&(t.content.min!==""||t.content.max!==""))),i=L(()=>["title","text-left"].includes(t.fieldset.icon)?null:t.fieldset.icon==="document"?"angle-down":t.fieldset.icon);return{__sfc:!0,props:t,emit:e,update:n,open:s,showError:a,icon:i,FieldError:F,FieldInput:M,FieldHeader:S}}};var qe=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"df-field",on:{dblclick:n.open}},[t(n.FieldHeader,{attrs:{requireLabel:!0,content:e.content,fieldset:e.fieldset},on:{update:n.update}}),t(n.FieldInput,{attrs:{content:e.content,icon:n.icon},on:{update:n.update}}),n.showError?t(n.FieldError,{attrs:{content:e.content},on:{update:n.update}}):e._e()],1)},Te=[],Ne=p(Be,qe,Te);const Ue=Ne.exports,ze={__name:"Options",props:{classMod:String,options:Array},emits:["update"],setup(o,{emit:e}){const t=o,n=x(),s=m([]),a=u=>{s.value=u.map(_=>({_id:n.$helper.uuid(),..._}))};A(()=>a(t.options)),R(()=>t.options,u=>a(u));const i=u=>e("update",u),l=()=>i(s.value),d=(u,_)=>{const v=s.value.findIndex(Et=>Et._id===u);s.value[v]={...s.value[v],..._},i(s.value)},g=()=>{i([...s.value,{value:"",label:""}]),O(()=>b(s.value[s.value.length-1]._id))},V=u=>{i(s.value.filter(_=>_._id!==u)),O(()=>{s.value.length&&w(s.value[s.value.length-1]._id)})},C=m([]),c=m([]),f=u=>{u.focus();const _=document.createRange(),v=window.getSelection();_.setStart(u,u.childNodes.length),_.collapse(!0),v.removeAllRanges(),v.addRange(_)},b=u=>{const _=s.value.findIndex(v=>v._id===u);f(C.value[_].el)},w=u=>{const _=s.value.findIndex(v=>v._id===u);f(c.value[_].el)};return{__sfc:!0,app:n,props:t,items:s,setItems:a,emit:e,update:i,sort:l,updateOption:d,addOption:g,removeOption:V,labelInputs:C,valueInputs:c,focusEndOf:f,focusLabel:b,focusValue:w,focusNextOrAddOption:u=>{const _=s.value.findIndex(v=>v._id===u);_===s.value.length-1?g():b(s.value[_+1]._id)},Editable:y}}};var Ke=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"df-options-list"},[t("k-draggable",{staticClass:"df-options-list-draggable",attrs:{handle:".df-option-drag",list:n.items},on:{sort:n.sort}},e._l(n.items,function(s){return t("div",{ref:s._id,refInFor:!0,staticClass:"df-option",class:e.classMod},[t("div",{staticClass:"df-option-inner"},[t("span",{staticClass:"df-option-icon"}),t(n.Editable,{ref:"labelInputs",refInFor:!0,staticClass:"df-option-label",class:{"is-invalid":!s.label},attrs:{tag:"div",placeholder:e.$t("dreamform.common.label.label"),modelValue:s.label},on:{"update:modelValue":function(a){return n.updateOption(s._id,{label:a})},backspace:function(a){return n.removeOption(s._id)},enter:function(a){return n.focusValue(s._id)}}}),t(n.Editable,{ref:"valueInputs",refInFor:!0,staticClass:"df-option-value",class:{"is-invalid":!s.value},attrs:{tag:"code",placeholder:e.$t("dreamform.common.options.value.label"),modelValue:s.value},on:{"update:modelValue":function(a){return n.updateOption(s._id,{value:a})},backspace:function(a){return n.focusLabel(s._id)},enter:function(a){return n.focusNextOrAddOption(s._id)}}})],1),t("button",{staticClass:"df-option-drag",attrs:{type:"button"}},[t("k-icon",{attrs:{type:"sort"}})],1),t("button",{staticClass:"df-option-remove",attrs:{type:"button","aria-label":e.$t("dreamform.common.options.remove")},on:{click:function(a){return n.removeOption(s._id)}}},[t("k-icon",{attrs:{type:"trash"}})],1)])}),0),t("button",{staticClass:"df-option df-option-add-button",class:e.classMod,attrs:{type:"button"},on:{click:n.addOption}},[t("span",{staticClass:"df-option-icon"}),t("span",{staticClass:"df-option-label"},[e._v(e._s(e.$t("dreamform.common.options.add")))])])],1)},Ge=[],Je=p(ze,Ke,Ge);const j=Je.exports,Qe={__name:"SelectField",props:h,emits:["update","open"],setup(o,{emit:e}){const t=o;return{__sfc:!0,props:t,emit:e,update:a=>e("update",{...t.content,...a}),open:a=>{a.target===a.currentTarget&&e("open")},FieldHeader:S,Options:j,FieldError:F,FieldInput:M}}};var We=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"df-field df-select-field",on:{dblclick:n.open}},[t(n.FieldHeader,{attrs:{requireLabel:!0,content:e.content,fieldset:e.fieldset},on:{update:n.update}}),t(n.FieldInput,{attrs:{content:e.content,icon:"angle-down"},on:{update:n.update}}),t(n.Options,{attrs:{classMod:"is-select",options:e.content.options},on:{update:function(s){return n.update({options:s})}}}),e.content.required?t(n.FieldError,{attrs:{content:e.content},on:{update:n.update}}):e._e()],1)},Xe=[],Ye=p(Qe,We,Xe);const et=Ye.exports,tt={__name:"HiddenField",props:h,emits:["update","open"],setup(o,{emit:e}){return{__sfc:!0,props:o,emit:e,Editable:y}}};var nt=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"df-field"},[t("div",{staticClass:"df-input df-hidden-input",class:{"is-invalid":!e.content.key}},[t("k-icon",{attrs:{type:"hidden"}}),t(n.Editable,{staticClass:"df-hidden-key",attrs:{tag:"code",slugify:!0,placeholder:e.$t("dreamform.fields.hidden.placeholder"),modelValue:e.content.key},on:{"update:modelValue":function(s){return n.emit("update",{...n.props.content,key:s})}}})],1)])},st=[],ot=p(tt,nt,st);const at=ot.exports,rt={__name:"FileUploadField",props:h,emits:["update","open"],setup(o,{emit:e}){const t=o;return{__sfc:!0,props:t,emit:e,update:a=>e("update",{...t.content,...a}),open:a=>{a.target===a.currentTarget&&e("open")},FieldError:F,FieldHeader:S}}};var ct=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"df-field",on:{dblclick:n.open}},[t(n.FieldHeader,{attrs:{requireLabel:!0,content:e.content,fieldset:e.fieldset},on:{update:n.update}}),t("div",{staticClass:"df-file-upload",on:{click:n.open}},[t("k-icon",{attrs:{type:"upload"}}),t("span",[e._v(e._s(e.$t("toolbar.button.file.upload")))])],1),e.content.required||e.content.maxsize!==""||e.content.allowedtypes.length>0?t(n.FieldError,{attrs:{content:e.content},on:{update:n.update}}):e._e()],1)},it=[],lt=p(rt,ct,it);const dt=lt.exports,ut={__name:"ChoicesField",props:h,emits:["update","open"],setup(o,{emit:e}){const t=o;return{__sfc:!0,props:t,emit:e,update:a=>e("update",{...t.content,...a}),open:a=>{a.target===a.currentTarget&&e("open")},FieldHeader:S,Options:j,FieldError:F}}};var pt=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"df-field",on:{dblclick:n.open}},[t(n.FieldHeader,{attrs:{content:e.content,fieldset:e.fieldset},on:{update:n.update}}),t(n.Options,{attrs:{classMod:{"is-radio":e.fieldset.type==="radio-field","is-checkbox":e.fieldset.type==="checkbox-field"},options:e.content.options},on:{update:function(s){return n.update({options:s})}}}),e.content.required?t(n.FieldError,{attrs:{content:e.content},on:{update:n.update}}):e._e()],1)},_t=[],ft=p(ut,pt,_t);const mt=ft.exports,vt={__name:"ButtonField",props:h,emits:["update"],setup(o,{emit:e}){return{__sfc:!0,props:o,emit:e,Editable:y}}};var gt=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"df-field"},[t(n.Editable,{staticClass:"df-button-input",attrs:{tag:"div",placeholder:e.$t("dreamform.fields.button.label.label"),modelValue:e.content.label},on:{"update:modelValue":function(s){return n.emit("update",{...n.props.content,label:s})},dblClick:e.open}})],1)},bt=[],ht=p(vt,gt,bt);const yt=ht.exports,$t={__name:"ErrorEntry",props:{text:String,template:{type:Object,default:()=>({})}},setup(o){return{__sfc:!0,props:o}}};var kt=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("k-box",{staticClass:"df-log-error-entry",attrs:{text:e.$t(n.props.text,n.props.template,n.props.text),theme:"negative",icon:"alert",html:!0}})},Ct=[],xt=p($t,kt,Ct);const Ft=xt.exports,St={__name:"InfoEntry",props:{text:String,template:{type:Object,default:()=>({})}},setup(o){return{__sfc:!0,props:o}}};var Vt=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"df-log-info-entry",domProps:{innerHTML:e._s(e.$t(n.props.text,n.props.template,n.props.text))}})},wt=[],Rt=p(St,Vt,wt);const Ht=Rt.exports,Pt={__name:"EmailEntry",props:{text:String},setup(o){return{__sfc:!0,props:o}}};var Zt=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div")},Lt=[],Ot=p(Pt,Zt,Lt);const At=Ot.exports;panel.plugin("tobimori/dreamform",{icons:{"mail-send":'<path d="M21 3c.5523 0 1 .4477 1 1v16.0066c0 .5486-.4553.9934-.9918.9934H2.9918C2.444 21 2 20.5551 2 20.0066V19h18V7.3l-8 7.2-10-9V4c0-.5523.4477-1 1-1h18ZM8 15v2H0v-2h8Zm-3-5v2H0v-2h5Zm14.5659-5H4.4341L12 11.8093 19.5659 5Z"/>',dreamform:'<path fill="#1B4493" d="M3 1.5h4.5l16.5 9v3l-16.5 9H3l1.5-9H12v-3H4.5L3 1.5Z"/>',"shield-check":'<path d="m12 1 8.2169 1.826A1 1 0 0 1 21 3.8022v9.9867a6 6 0 0 1-2.6718 4.9923L12 23l-6.3282-4.2188A6 6 0 0 1 3 13.7889V3.8022a1 1 0 0 1 .783-.9762L12 1Zm0 2.0488L5 4.6043v9.1846a4 4 0 0 0 1.7812 3.3282L12 20.5963l5.2188-3.4792A4 4 0 0 0 19 13.7889V4.6043l-7-1.5555Zm4.4524 5.173 1.4142 1.4142L11.5026 16 7.26 11.7574l1.4142-1.4143 2.8277 2.8278 4.9505-4.949Z"/>',spam:'<path d="M17.5 2.5 23 12l-5.5 9.5h-11L1 12l5.5-9.5h11Zm-1.1531 2H7.6531L3.311 12l4.3421 7.5h8.6938L20.689 12l-4.3421-7.5ZM11 15h2v2h-2v-2Zm0-8h2v6h-2V7Z"/>',survey:'<path d="M17 2V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7V2H17ZM7 6H5V20H19V6H17V8H7V6ZM9 16V18H7V16H9ZM9 13V15H7V13H9ZM9 10V12H7V10H9ZM15 4H9V6H15V4Z" />',"input-cursor-move":'<path d="M8 21V19H11V5H8V3H16V5H13V19H16V21H8ZM18.0503 7.05025L23 12L18.0503 16.9497L16.636 15.5355L20.1716 12L16.636 8.46447L18.0503 7.05025ZM5.94975 7.05025L7.36396 8.46447L3.82843 12L7.36396 15.5355L5.94975 16.9497L1 12L5.94975 7.05025Z" />',webhook:'<path d="M8.8687 14.1392c-.2131.352-.3186.6386-.1483 1.0861.4701 1.236-.193 2.4387-1.4394 2.7652-1.1754.308-2.3206-.4645-2.5539-1.7229-.2066-1.1139.6578-2.2059 1.8858-2.3799.0667-.0096.1343-.0137.2206-.0189.047-.0028.0994-.006.1603-.0106l1.8681-3.1325C7.687 9.5574 6.9877 8.1917 7.1425 6.4994c.1094-1.1963.5798-2.23 1.4396-3.0774 1.6467-1.6226 4.159-1.8853 6.0979-.6399 1.8623 1.1963 2.7151 3.5266 1.9881 5.521l-1.707-.4631c.2284-1.1088.0595-2.1046-.6884-2.9577-.4941-.5632-1.1281-.8584-1.8491-.9671-1.4453-.2184-2.8644.7102-3.2854 2.1288-.478 1.61.2454 2.9252 2.2221 3.9163-.8292 1.3938-1.6517 2.7915-2.4916 4.1789Zm4.9151-5.8658c.5978 1.0546 1.2048 2.1252 1.8064 3.1859 3.0408-.9407 5.3335.7425 6.156 2.5447.9934 2.1769.3143 4.7553-1.6368 6.0983-2.0027 1.3787-4.5353 1.1431-6.3097-.6279l1.3922-1.165c1.7525 1.1351 3.2853 1.0817 4.4232-.2624.9704-1.1467.9493-2.8564-.0492-3.979-1.1523-1.2954-2.6958-1.3349-4.5615-.0913-.7739-1.373-1.5614-2.7354-2.3108-4.1182-.2527-.4662-.5318-.7365-1.1013-.8352-.9512-.165-1.5653-.9817-1.6021-1.8969-.0362-.905.4969-1.7231 1.3303-2.0419.8255-.3157 1.7943-.0608 2.3496.641.4538.5735.598 1.219.3592 1.9262-.045.1335-.0989.2641-.158.4071-.0282.0681-.0575.1392-.0875.2146ZM11.552 16.895h3.6606c.051.068.0987.1353.1453.2009.0972.1371.1895.2673.2972.3829.7753.8289 2.0844.8701 2.9131.1007.8589-.7974.8978-2.1369.0862-2.9694-.7942-.8146-2.1515-.8924-2.8889-.0299-.4479.5242-.9069.5858-1.5014.5765-1.5227-.0235-3.0464-.0077-4.5689-.0077.0989 2.1419-.7108 3.4765-2.3168 3.7934-1.5726.3104-3.0209-.492-3.5308-1.956-.5792-1.6635.137-2.9939 2.2066-4.0498-.1557-.5641-.313-1.135-.4688-1.7006-2.2556.4916-3.948 2.68-3.7732 5.142.1543 2.1734 1.9075 4.1035 4.0515 4.4493 1.1645.188 2.2586-.0073 3.2737-.5831 1.3059-.741 2.0637-1.9061 2.4146-3.3492Z"/>',mailchimp:'<path fill-rule="evenodd" d="M6.6336 16.1898a.1104.1104 0 0 0-.0248-.0605c-.0425-.0535-.1125-.0373-.1802-.0214a.6417.6417 0 0 1-.1595.0225.3452.3452 0 0 1-.2921-.1485.545.545 0 0 1 .0126-.5038 3.9734 3.9734 0 0 1 .0401-.0918 1.493 1.493 0 0 0 .109-1.3177 1.1635 1.1635 0 0 0-.8908-.6498 1.1424 1.1424 0 0 0-.9812.3548 1.4174 1.4174 0 0 0-.3644 1.1899c.0269.0736.0688.094.0993.0982.0644.0086.1596-.0383.2192-.1993.0043-.0115.01-.0295.017-.0523a1.5847 1.5847 0 0 1 .1572-.3704.6714.6714 0 0 1 .4285-.297.6853.6853 0 0 1 .5238.0981.6736.6736 0 0 1 .254.8105 1.8986 1.8986 0 0 0-.1326.7208.7147.7147 0 0 0 .6375.7384.5452.5452 0 0 0 .5137-.2566.1108.1108 0 0 0 .0137-.0641Zm16.1751 2.6229a7.1629 7.1629 0 0 0 .4861-2.2669c0-.9555-.5386-1.3515-.8815-1.3515a1.3796 1.3796 0 0 1-.0062-.0221c-.0209-.0751-.0833-.2996-.1655-.5638a4.7429 4.7429 0 0 0-.1898-.5112c.2807-.39.3994-.8736.3311-1.3492a1.7095 1.7095 0 0 0-.4948-.9643 4.0184 4.0184 0 0 0-1.7472-.868c-.043-.0121-.1299-.0362-.2157-.06a25.6976 25.6976 0 0 1-.2294-.064 21.1992 21.1992 0 0 1-.0069-.2611c-.0083-.3406-.0225-.9288-.0358-1.2354a5.143 5.143 0 0 0-.1965-1.3156 3.5268 3.5268 0 0 0-.9082-1.6264c1.1085-1.1525 1.8005-2.4223 1.7989-3.5117C20.3441.7468 17.7792.113 14.6185 1.4258c-.0033.0014-.6649.2827-.6697.2852l-.0651-.0641C13.6318 1.399 12.7356.5172 12.7199.5036 9.1162-2.6492-2.1509 9.9126 1.4514 12.9635l.7873.669a3.8918 3.8918 0 0 0-.219 1.7923 3.5337 3.5337 0 0 0 1.2159 2.2664 3.6922 3.6922 0 0 0 2.3855.9634c1.4019 3.2403 4.6049 5.2281 8.3604 5.34 4.0285.12 7.4102-1.7761 8.8272-5.1819ZM5.3297 12.486c.7279.04 1.8005.6005 2.0454 2.1909.217 1.4085-.1276 2.8424-1.4442 3.0676a1.9349 1.9349 0 0 1-.3731.0263 2.9089 2.9089 0 0 1-2.6617-2.4345c-.1443-1.4402.5893-2.5486 1.8883-2.8114a2.2072 2.2072 0 0 1 .5454-.0389Zm7.775-10.3309A25.654 25.654 0 0 0 9.5954 4.581a15.9792 15.9792 0 0 0-5.0233 7.0824 3.0969 3.0969 0 0 0-1.9573 1.2524 5.3263 5.3263 0 0 1-.8315-.8042c-.6958-1.3252.7594-3.9019 1.776-5.3569 2.5122-3.596 6.4471-6.318 8.2685-5.824.2962.084 1.2769 1.2245 1.2769 1.2245Zm.752 15.5742a1.2032 1.2032 0 0 1-.3024-.5627c2.3252.7213 3.7893.0394 3.7893.0394a.0715.0715 0 0 0 .0416-.0715.0671.0671 0 0 0-.0736-.0601 8.4977 8.4977 0 0 1-3.7066-.3782c.1577-.514.5255-.4657 1.0732-.3938.1337.0176.278.0366.4327.0491a10.9763 10.9763 0 0 0 3.6352-.3943 8.3163 8.3163 0 0 0 2.7185-1.3561c.1794.4156.307.8518.3797 1.2986a.6304.6304 0 0 1 .3987.0731c.1715.1059.2973.326.2113.895a4.9599 4.9599 0 0 1-1.3825 2.7197 5.7 5.7 0 0 1-1.6606 1.2448 7.002 7.002 0 0 1-1.0844.4593c-2.8543.9351-5.776-.0929-6.7178-2.3004a3.5623 3.5623 0 0 1-.1888-.5214 4.5873 4.5873 0 0 1 1.0044-4.2986v-.0006a.3894.3894 0 0 0 .1327-.256.4521.4521 0 0 0-.1026-.2431c-.0739-.1075-.1839-.2301-.3108-.3714-.5128-.5711-1.3011-1.4491-1.0935-2.8822a2.432 2.432 0 0 1 2.35-2.1353c.0691.0036.1385.0077.2076.0118l.057.0034c.216.0129.4189.0329.6125.052.2118.0208.4125.0406.6071.0487a2.4337 2.4337 0 0 0 1.8478-.6187 1.4293 1.4293 0 0 1 .7074-.401.8587.8587 0 0 1 .2702-.0266.8903.8903 0 0 1 .455.1458c.5323.3553.6077 1.2157.6353 1.8452.0158.3593.0591 1.2286.0739 1.4781.0339.5706.1834.6511.4859.751.1354.0447.263.0803.4266.126l.1343.0376a3.1595 3.1595 0 0 1 1.3855.6583.8743.8743 0 0 1 .2527.497c.0831.6079-.4706 1.3589-1.9361 2.0413a9.8125 9.8125 0 0 1-4.8885.7847 315.283 315.283 0 0 1-.4705-.0533c-1.0742-.1451-1.6869 1.2473-1.0423 2.2013.4156.6148 1.5472 1.0149 2.6795 1.0151 2.5962.0004 4.5916-1.1117 5.3339-2.0721a.978.978 0 0 0 .0594-.0849c.0365-.0552.0064-.0857-.0391-.0544-.6065.4162-3.3001 2.0686-6.1814 1.5715a3.832 3.832 0 0 1-.6697-.1824 1.2036 1.2036 0 0 1-.5477-.3287Zm-1.376-12.3547a9.0827 9.0827 0 0 0-3.2143 1.425.0405.0405 0 0 1-.0543-.0596 10.6182 10.6182 0 0 1 2.9775-2.4407.0388.0388 0 0 1 .0518.0532 2.8865 2.8865 0 0 0-.2765.677.0405.0405 0 0 0 .0618.0423 5.7895 5.7895 0 0 1 2.6137-.9256.0414.0414 0 0 1 .0276.0738 2.2325 2.2325 0 0 0-.4113.414.0401.0401 0 0 0 .0105.0575.04.04 0 0 0 .0207.0062 5.1093 5.1093 0 0 1 2.1853.5746c.0408.0229.0117.1021-.0339.0917a8.8707 8.8707 0 0 0-3.9586.0106Zm4.6386 7.5472a.3798.3798 0 0 1-.2654-.0537c-.203-.0947-.3086-.2855-.2358-.426a.3798.3798 0 0 1 .4991-.0832c.203.0948.3085.2856.2358.4262a.3794.3794 0 0 1-.2337.1367Zm.6644-1.6353a1.7194 1.7194 0 0 1-.3074-.6994c-.1146-.5215-.1027-.8993.2179-.9485.3208-.049.4761.2666.5908.788a1.479 1.479 0 0 1-.0234.8599 1.9594 1.9594 0 0 0-.4779 0Zm.1287.5062a.4028.4028 0 0 1 .2464-.0078.3537.3537 0 0 1 .2915.3938.4031.4031 0 0 1-.2796.3768.4034.4034 0 0 1-.4467-.1438.4027.4027 0 0 1 .1884-.619Zm-5.1586-.1124c.0064.029.0282.0509.0794.0581a9.3419 9.3419 0 0 1 1.0246-.2284c.2916-.0093.581.0531.843.1816l.0351.0154c.1974.0868.3197.1407.3694.0883.0337-.0346.0236-.1005-.0285-.1856a1.2811 1.2811 0 0 0-.5638-.4538 1.5377 1.5377 0 0 0-1.4949.1795c-.1458.1068-.2842.2549-.2643.3449Zm1.9113.2897a.8261.8261 0 0 1 .3414.2158.0805.0805 0 0 1 .008.0907c-.0305.0478-.0953.0405-.2308.0252l-.0105-.0012a1.8088 1.8088 0 0 0-.9144.095.8667.8667 0 0 1-.2078.0576.0685.0685 0 0 1-.0633-.0412.0655.0655 0 0 1-.0051-.0283.3473.3473 0 0 1 .1384-.2163 1.0293 1.0293 0 0 1 .5412-.2255.8282.8282 0 0 1 .4029.0282Z" clip-rule="evenodd"/>',salesforce:'<path stroke="currentcolor" stroke-width="2" d="m9.1863 6.4429.7056.928.8098-.8387c.6012-.6226 1.4274-1.0058 2.3279-1.0058 1.2016 0 2.2572.6688 2.8317 1.6886l.4482.7955.8329-.3742c.5077-.2281 1.079-.3554 1.6864-.3554C21.1299 7.2809 23 9.1602 23 11.4983c0 2.3369-1.8782 4.2174-4.1712 4.2174a4.1923 4.1923 0 0 1-.8197-.0822l-.7132-.1426-.3554.6346c-.4771.852-1.3885 1.4278-2.4334 1.4278a2.8116 2.8116 0 0 1-1.2191-.2796l-.9441-.4546-.41.9643c-.5051 1.1881-1.6855 2.0231-3.0505 2.0231-1.4247 0-2.6467-.8999-3.1156-2.1717l-.2978-.8077-.843.1744a3.069 3.069 0 0 1-.6193.0624C2.3542 17.0639 1 15.7121 1 14.01c0-1.1307.6062-2.1182 1.5085-2.6457l.7714-.451-.3616-.8171c-.1932-.4364-.3023-.9265-.3023-1.4513v-.0037C2.6088 6.643 4.2507 5 6.2701 5a3.6535 3.6535 0 0 1 2.9162 1.4429Z"/>',buttondown:'<path fill="currentcolor" fill-rule="evenodd" d="M0 12c0-2.8833 0-4.325.331-5.5045A8.9 8.9 0 0 1 6.4955.331C7.675 0 9.1167 0 12 0s4.325 0 5.5045.331a8.8998 8.8998 0 0 1 6.1645 6.1645C24 7.675 24 9.1167 24 12s0 4.325-.331 5.5045a8.8996 8.8996 0 0 1-6.1645 6.1645C16.325 24 14.8833 24 12 24s-4.325 0-5.5045-.331A8.8998 8.8998 0 0 1 .331 17.5045C0 16.325 0 14.8833 0 12Zm5.1-4.4C5.1 6.164 6.264 5 7.7 5h8.8c1.4359 0 2.6 1.164 2.6 2.6v8.8c0 1.4359-1.1641 2.6-2.6 2.6H7.7c-1.436 0-2.6-1.1641-2.6-2.6V7.6Zm.9868 3.6132c2.0615 2.0614 3.9358 3.3909 6.0099 3.3743 2.0674-.0166 3.9116-1.3695 5.9165-3.3743l-1.6264-1.6264c-1.9951 1.9952-3.2509 2.6923-4.3085 2.7007-1.0509.0084-2.3266-.6621-4.3651-2.7007l-1.6264 1.6264Z" clip-rule="evenodd"/>'},components:{"k-layout":T,"k-layout-selector":G,"df-log-error-entry":Ft,"df-log-info-entry":Ht,"df-log-email-entry":At},blocks:{"button-field":yt,"choices-field":mt,"fields.upload.name":dt,"hidden-field":at,"select-field":et,"text-field":Ue},fields:{"dreamform-api-object":ie},sections:{"dreamform-license":_e,"dreamform-submission":xe}})})();

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c08fed6"],{"4a7a":function(e,t,n){!function(t,n){e.exports=n()}("undefined"!=typeof self&&self,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=8)}([function(e,t,n){var i=n(4),o=n(5),r=n(6);e.exports=function(e){return i(e)||o(e)||r()}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,n){"use strict";var i=n(2);n.n(i).a},function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(1),s=n.n(r),a=n(3),l=n.n(a),u={watch:{typeAheadPointer:function(){this.maybeAdjustScroll()}},methods:{maybeAdjustScroll:function(){var e=this.pixelsToPointerTop(),t=this.pixelsToPointerBottom();return e<=this.viewport().top?this.scrollTo(e):t>=this.viewport().bottom?this.scrollTo(this.viewport().top+this.pointerHeight()):void 0},pixelsToPointerTop:function(){var e=0;if(this.$refs.dropdownMenu&&this.dropdownOpen)for(var t=0;t<this.typeAheadPointer;t++)e+=this.$refs.dropdownMenu.children[t].offsetHeight;return e},pixelsToPointerBottom:function(){return this.pixelsToPointerTop()+this.pointerHeight()},pointerHeight:function(){var e=!!this.$refs.dropdownMenu&&this.$refs.dropdownMenu.children[this.typeAheadPointer];return e?e.offsetHeight:0},viewport:function(){return{top:this.$refs.dropdownMenu?this.$refs.dropdownMenu.scrollTop:0,bottom:this.$refs.dropdownMenu?this.$refs.dropdownMenu.offsetHeight+this.$refs.dropdownMenu.scrollTop:0}},scrollTo:function(e){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.scrollTop=e:null}}},c={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){for(var e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}}},methods:{typeAheadUp:function(){for(var e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e,this.maybeAdjustScroll&&this.maybeAdjustScroll();break}},typeAheadDown:function(){for(var e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e,this.maybeAdjustScroll&&this.maybeAdjustScroll();break}},typeAheadSelect:function(){var e=this.filteredOptions[this.typeAheadPointer];e?this.select(e):this.taggable&&this.search.length&&this.select(this.createOption(this.search)),this.clearSearchOnSelect&&(this.search="")}}},p={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(e){this.mutableLoading=e}},methods:{toggleLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.mutableLoading=null==e?!this.mutableLoading:e}}};function h(e,t,n,i,o,r,s,a){var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:u}}var d={Deselect:h({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[t("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])}),[],!1,null,null,null).exports,OpenIndicator:h({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[t("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])}),[],!1,null,null,null).exports},f={inserted:function(e,t,n){var i=n.context;if(i.appendToBody){var o=i.$refs.toggle.getBoundingClientRect(),r=o.height,s=o.top,a=o.left,l=o.width;e.unbindPosition=i.calculatePosition(e,i,{width:l+"px",top:window.scrollY+s+r+"px",left:window.scrollX+a+"px"}),document.body.appendChild(e)}},unbind:function(e,t,n){n.context.appendToBody&&(e.unbindPosition&&"function"==typeof e.unbindPosition&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}},v=function(e){var t={};return Object.keys(e).sort().forEach((function(n){t[n]=e[n]})),JSON.stringify(t)},y=0,b=function(){return++y};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={components:m({},d),mixins:[u,c,p],directives:{appendToBody:f},props:{value:{},components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(e){return e}},selectable:{type:Function,default:function(e){return!0}},getOptionLabel:{type:Function,default:function(e){return"object"===s()(e)?e.hasOwnProperty(this.label)?e[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(e),".\n")+"https://vue-select.org/api/props.html#getoptionlabel"):e}},getOptionKey:{type:Function,default:function(e){if("object"!==s()(e))return e;try{return e.hasOwnProperty("id")?e.id:v(e)}catch(t){return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey",e,t)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(e,t,n){return(t||"").toLowerCase().indexOf(n.toLowerCase())>-1}},filter:{type:Function,default:function(e,t){var n=this;return e.filter((function(e){var i=n.getOptionLabel(e);return"number"==typeof i&&(i=i.toString()),n.filterBy(e,i,t)}))}},createOption:{type:Function,default:function(e){return"object"===s()(this.optionList[0])?l()({},this.label,e):e}},resetOnOptionsChange:{default:!1,validator:function(e){return["function","boolean"].includes(s()(e))}},clearSearchOnBlur:{type:Function,default:function(e){var t=e.clearSearchOnSelect,n=e.multiple;return t&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(e,t){return e}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(e,t,n){var i=n.width,o=n.top,r=n.left;e.style.top=o,e.style.left=r,e.style.width=i}}},data:function(){return{uid:b(),search:"",open:!1,isComposing:!1,pushedTags:[],_value:[]}},watch:{options:function(e,t){var n=this;!this.taggable&&("function"==typeof n.resetOnOptionsChange?n.resetOnOptionsChange(e,t,n.selectedValue):n.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value)},value:function(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)},multiple:function(){this.clearSelection()},open:function(e){this.$emit(e?"open":"close")}},created:function(){this.mutableLoading=this.loading,void 0!==this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value),this.$on("option:created",this.pushTag)},methods:{setInternalValueFromOptions:function(e){var t=this;Array.isArray(e)?this.$data._value=e.map((function(e){return t.findOptionFromReducedValue(e)})):this.$data._value=this.findOptionFromReducedValue(e)},select:function(e){this.isOptionSelected(e)||(this.taggable&&!this.optionExists(e)&&this.$emit("option:created",e),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e)),this.onAfterSelect(e)},deselect:function(e){var t=this;this.updateValue(this.selectedValue.filter((function(n){return!t.optionComparator(n,e)})))},clearSelection:function(){this.updateValue(this.multiple?[]:null)},onAfterSelect:function(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue:function(e){var t=this;this.isTrackingValues&&(this.$data._value=e),null!==e&&(e=Array.isArray(e)?e.map((function(e){return t.reduce(e)})):this.reduce(e)),this.$emit("input",e)},toggleDropdown:function(e){var t=e.target;[].concat(o()(this.$refs.deselectButtons||[]),o()([this.$refs.clearButton]||!1)).some((function(e){return e.contains(t)||e===t}))||(this.open?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus()))},isOptionSelected:function(e){var t=this;return this.selectedValue.some((function(n){return t.optionComparator(n,e)}))},optionComparator:function(e,t){return this.getOptionKey(e)===this.getOptionKey(t)},findOptionFromReducedValue:function(e){var t=this,n=[].concat(o()(this.options),o()(this.pushedTags)).filter((function(n){return JSON.stringify(t.reduce(n))===JSON.stringify(e)}));return 1===n.length?n[0]:n.find((function(e){return t.optionComparator(e,t.$data._value)}))||e},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var e=null;this.multiple&&(e=o()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(e)}},optionExists:function(e){var t=this;return this.optionList.some((function(n){return t.optionComparator(n,e)}))},normalizeOptionForSlot:function(e){return"object"===s()(e)?e:l()({},this.label,e)},pushTag:function(e){this.pushedTags.push(e)},onEscape:function(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur:function(){if(!this.mousedown||this.searching){var e=this.clearSearchOnSelect,t=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:t})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onSearchKeyDown:function(e){var t=this,n=function(e){return e.preventDefault(),!t.isComposing&&t.typeAheadSelect()},i={8:function(e){return t.maybeDeleteValue()},9:function(e){return t.onTab()},27:function(e){return t.onEscape()},38:function(e){return e.preventDefault(),t.typeAheadUp()},40:function(e){return e.preventDefault(),t.typeAheadDown()}};this.selectOnKeyCodes.forEach((function(e){return i[e]=n}));var o=this.mapKeydown(i,this);if("function"==typeof o[e.keyCode])return o[e.keyCode](e)}},computed:{isTrackingValues:function(){return void 0===this.value||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var e=this.value;return this.isTrackingValues&&(e=this.$data._value),e?[].concat(e):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var e=this,t={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:m({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":"vs".concat(this.uid,"__combobox"),"aria-controls":"vs".concat(this.uid,"__listbox"),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return e.isComposing=!0},compositionend:function(){return e.isComposing=!1},keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(t){return e.search=t.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.loading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:t,listFooter:t,header:m({},t,{deselect:this.deselect}),footer:m({},t,{deselect:this.deselect})}},childComponents:function(){return m({},d,{},this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return!this.noDrop&&this.open&&!this.mutableLoading},searchPlaceholder:function(){if(this.isValueEmpty&&this.placeholder)return this.placeholder},filteredOptions:function(){var e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;var t=this.search.length?this.filter(e,this.search,this):e;return this.taggable&&this.search.length&&!this.optionExists(this.createOption(this.search))&&t.unshift(this.search),t},isValueEmpty:function(){return 0===this.selectedValue.length},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}}},O=(n(7),h(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-select",class:e.stateClasses,attrs:{dir:e.dir}},[e._t("header",null,null,e.scope.header),e._v(" "),n("div",{ref:"toggle",staticClass:"vs__dropdown-toggle",attrs:{id:"vs"+e.uid+"__combobox",role:"combobox","aria-expanded":e.dropdownOpen.toString(),"aria-owns":"vs"+e.uid+"__listbox","aria-label":"Search for option"},on:{mousedown:function(t){return t.preventDefault(),e.toggleDropdown(t)}}},[n("div",{ref:"selectedOptions",staticClass:"vs__selected-options"},[e._l(e.selectedValue,(function(t){return e._t("selected-option-container",[n("span",{key:e.getOptionKey(t),staticClass:"vs__selected"},[e._t("selected-option",[e._v("\n            "+e._s(e.getOptionLabel(t))+"\n          ")],null,e.normalizeOptionForSlot(t)),e._v(" "),e.multiple?n("button",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{disabled:e.disabled,type:"button",title:"Deselect "+e.getOptionLabel(t),"aria-label":"Deselect "+e.getOptionLabel(t)},on:{click:function(n){return e.deselect(t)}}},[n(e.childComponents.Deselect,{tag:"component"})],1):e._e()],2)],{option:e.normalizeOptionForSlot(t),deselect:e.deselect,multiple:e.multiple,disabled:e.disabled})})),e._v(" "),e._t("search",[n("input",e._g(e._b({staticClass:"vs__search"},"input",e.scope.search.attributes,!1),e.scope.search.events))],null,e.scope.search)],2),e._v(" "),n("div",{ref:"actions",staticClass:"vs__actions"},[n("button",{directives:[{name:"show",rawName:"v-show",value:e.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{disabled:e.disabled,type:"button",title:"Clear Selected","aria-label":"Clear Selected"},on:{click:e.clearSelection}},[n(e.childComponents.Deselect,{tag:"component"})],1),e._v(" "),e._t("open-indicator",[e.noDrop?e._e():n(e.childComponents.OpenIndicator,e._b({tag:"component"},"component",e.scope.openIndicator.attributes,!1))],null,e.scope.openIndicator),e._v(" "),e._t("spinner",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[e._v("Loading...")])],null,e.scope.spinner)],2)]),e._v(" "),n("transition",{attrs:{name:e.transition}},[e.dropdownOpen?n("ul",{directives:[{name:"append-to-body",rawName:"v-append-to-body"}],ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{id:"vs"+e.uid+"__listbox",role:"listbox"},on:{mousedown:function(t){return t.preventDefault(),e.onMousedown(t)},mouseup:e.onMouseUp}},[e._t("list-header",null,null,e.scope.listHeader),e._v(" "),e._l(e.filteredOptions,(function(t,i){return n("li",{key:e.getOptionKey(t),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--selected":e.isOptionSelected(t),"vs__dropdown-option--highlight":i===e.typeAheadPointer,"vs__dropdown-option--disabled":!e.selectable(t)},attrs:{role:"option",id:"vs"+e.uid+"__option-"+i,"aria-selected":i===e.typeAheadPointer||null},on:{mouseover:function(n){e.selectable(t)&&(e.typeAheadPointer=i)},mousedown:function(n){n.preventDefault(),n.stopPropagation(),e.selectable(t)&&e.select(t)}}},[e._t("option",[e._v("\n          "+e._s(e.getOptionLabel(t))+"\n        ")],null,e.normalizeOptionForSlot(t))],2)})),e._v(" "),0===e.filteredOptions.length?n("li",{staticClass:"vs__no-options"},[e._t("no-options",[e._v("Sorry, no matching options.")],null,e.scope.noOptions)],2):e._e(),e._v(" "),e._t("list-footer",null,null,e.scope.listFooter)],2):n("ul",{staticStyle:{display:"none",visibility:"hidden"},attrs:{id:"vs"+e.uid+"__listbox",role:"listbox"}})]),e._v(" "),e._t("footer",null,null,e.scope.footer)],2)}),[],!1,null,null,null).exports),w={ajax:p,pointer:c,pointerScroll:u};n.d(t,"VueSelect",(function(){return O})),n.d(t,"mixins",(function(){return w})),t.default=O}])}))},"696c":function(e,t,n){"use strict";var i=n("7629"),o=n.n(i);o.a},7629:function(e,t,n){},dd4a:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("CRow",[n("CCol",{attrs:{xl:"6",lg:"12"}},[n("CCard",{attrs:{tag:"div"}},[n("CCardHeader",{attrs:{tag:"div"}},[n("h5",[e._v("Simple Crypto - Fiat Price Exchanger")])]),n("CCardBody",[n("CRow",[n("CCol",{staticClass:"\n                                d-flex\n                                align-items-top\n                                justify-content-center"},[n("CInput",{ref:"pair0",attrs:{type:"text"},on:{keydown:function(t){return e.numberOnly(t)},keyup:function(t){return e.formatNum_pair0("pair0_value","pair1_value","pair0_select","pair1_select")}},model:{value:e.pair0_value,callback:function(t){e.pair0_value=t},expression:"pair0_value"}}),n("CSelect",{attrs:{options:e.cryptooption,value:e.pair0_select},on:{"update:value":[function(t){e.pair0_select=t},function(t){return e.formatNum_pair0("pair0_value","pair1_value","pair0_select","pair1_select")}]}}),n("span",{staticClass:"mx-2"},[n("h2",[e._v("=")])]),n("CInput",{ref:"target",attrs:{type:"text",lazy:!0},on:{keydown:function(t){return e.numberOnly(t)},keyup:function(t){return e.formatNum_pair1("pair0_value","pair1_value","pair0_select","pair1_select")}},model:{value:e.pair1_value,callback:function(t){e.pair1_value=t},expression:"pair1_value"}}),n("CSelect",{attrs:{options:e.forexoption,value:e.pair1_select},on:{"update:value":[function(t){e.pair1_select=t},function(t){return e.formatNum_pair0("pair0_value","pair1_value","pair0_select","pair1_select")}]}})],1)],1),n("CRow",[n("CCol",{staticClass:"col d-flex justify-content-end"},[n("p",[e._v("*All the prices value is historical and does not reflect actual current prices")])])],1)],1)],1)],1),n("CCol",{attrs:{xl:"6",lg:"12"}},[n("CCard",{attrs:{tag:"div"}},[n("CCardHeader",{attrs:{tag:"div"}},[n("h5",[e._v("Simple Crypto - Fiat Price Exchanger")]),n("p",[e._v("(Uses vue-select)")])]),n("CCardBody",[n("CRow",[n("CCol",{staticClass:"\n                                d-flex\n                                align-items-top\n                                justify-content-center"},[n("CInput",{ref:"pair0",attrs:{type:"text"},on:{keydown:function(t){return e.numberOnly(t)},keyup:function(t){return e.formatNum_pair0("pair0_value1","pair1_value1","pair0_select1","pair1_select1")}},model:{value:e.pair0_value1,callback:function(t){e.pair0_value1=t},expression:"pair0_value1"}}),n("v-select",{attrs:{label:"label",options:e.cryptooption,value:e.pair0_select1,clearable:!1,reduce:function(e){return e.value},filterable:!1},on:{input:function(t){return e.formatNum_pair0("pair0_value1","pair1_value1","pair0_select1","pair1_select1")}},model:{value:e.pair0_select1,callback:function(t){e.pair0_select1=t},expression:"pair0_select1"}}),n("span",{staticClass:"mx-2"},[n("h2",[e._v("=")])]),n("CInput",{ref:"target",attrs:{type:"text",lazy:!0},on:{keydown:function(t){return e.numberOnly(t)},keyup:function(t){return e.formatNum_pair1("pair0_value1","pair1_value1","pair0_select1","pair1_select1")}},model:{value:e.pair1_value1,callback:function(t){e.pair1_value1=t},expression:"pair1_value1"}}),n("v-select",{attrs:{label:"label",options:e.forexoption,value:e.pair1_select1,clearable:!1,reduce:function(e){return e.value}},on:{input:function(t){return e.formatNum_pair0("pair0_value1","pair1_value1","pair0_select1","pair1_select1")}},model:{value:e.pair1_select1,callback:function(t){e.pair1_select1=t},expression:"pair1_select1"}})],1)],1),n("CRow",[n("CCol",{staticClass:"col d-flex justify-content-end"},[n("p",[e._v("*All the prices value is historical and does not reflect actual current prices")])])],1)],1)],1)],1)],1)],1)},o=[],r=n("a026"),s=n("4a7a"),a=n.n(s),l=n("7b60");r["a"].component("v-select",a.a);var u={name:"SimpleExchanger",data:function(){return{pair0_value:"",pair1_value:"",pair0_select:"BTC",pair1_select:"USD",pair0_value1:"",pair1_value1:"",pair0_select1:"BTC",pair1_select1:"USD",forexoption:[{value:"USD",label:"USD"},{value:"EUR",label:"EUR"},{value:"JPY",label:"JPY"},{value:"IDR",label:"IDR"}],cryptooption:[{value:"BTC",label:"BTC"},{value:"XRP",label:"XRP"},{value:"ETH",label:"ETH"},{value:"USDT",label:"USDT"}]}},methods:{dumpLog(e){console.log(this[e])},numberOnly(e){Object(l["d"])(e.key)&&e.preventDefault()},async formatNum_pair0(e,t,n,i){this[e]=Object(l["e"])(this[e]);var o=await this.getCurrencyValue(this[n],this[i]);o=new l["a"](o);var r=o.multipliedBy(Object(l["f"])(this[e]));this[t]=Object(l["e"])(r.toString())},async formatNum_pair1(e,t,n,i){this[t]=Object(l["e"])(this[t]);var o=await this.getCurrencyValue(this[n],this[i]),r=new l["a"](1),s=r.dividedBy(o).multipliedBy(Object(l["f"])(this[t]));this[e]=Object(l["e"])(s.toString())},async getCurrencyValue(e,t){var n=this.$store.state.currencypair[e+"_"+t];if("undefined"===typeof n){let i=await Object(l["b"])(e,t);n=i[e+"_"+t],this.$store.commit("currencypair/updateCurrency",[e+"_"+t,n])}return n}},computed:{getPair0_validity:function(){return this.$store.state.forexinput.simpleEx.pair0_valid},getPair0(){return this.$store.state.forexinput.simpleEx.prev_pair0}}},c=u,p=(n("696c"),n("2877")),h=Object(p["a"])(c,i,o,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-0c08fed6.d751dd87.js.map
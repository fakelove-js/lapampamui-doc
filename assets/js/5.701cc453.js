(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{320:function(t,e,n){},354:function(t,e,n){"use strict";var s=n(320);n.n(s).a},361:function(t,e,n){"use strict";n.r(e);var s={name:"laButton",props:{type:{type:String,default:function(){return"primary"}},size:{type:String,default:function(){return""}},circle:{type:Boolean,default:function(){return!1}}},methods:{touchstart:function(){this.$refs.btn.classList.add("click")},touchend:function(){this.$refs.btn.classList.remove("click")},handleClick:function(t){this.$emit("click",t)}},mounted:function(){this.$refs.btn.addEventListener("touchstart",this.touchstart),this.$refs.btn.addEventListener("touchend",this.touchend)},beforeDestroy:function(){this.$refs.btn.removeEventListener("touchstart",this.touchstart),this.$refs.btn.removeEventListener("touchend",this.touchend)}},i=(n(354),n(42)),c=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{ref:"btn",staticClass:"la-button",class:["la-button-"+this.type,this.size,this.circle?"circle":""],on:{click:this.handleClick}},[e("span",[this._t("default")],2)])}),[],!1,null,"6918652a",null);e.default=c.exports}}]);
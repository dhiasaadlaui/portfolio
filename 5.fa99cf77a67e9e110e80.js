(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Lwag:function(t,e,n){"use strict";n.r(e),n.d(e,"ResumeModule",(function(){return i}));var c=n("ofXK"),o=n("fXoL");let r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Fb({type:t,selectors:[["app-about"]],decls:2,vars:0,template:function(t,e){1&t&&(o.Rb(0,"p"),o.wc(1,"about works!"),o.Qb())},styles:[""]}),t})();var a=n("tyNb");const s=[{path:"",component:(()=>{class t{constructor(t,e){this.route=t,this.router=e,this.language="en-US"}ngOnInit(){localStorage.setItem("lang","en-US")}setFR(){localStorage.setItem("lang","fr-EN"),this.language="fr-EN"}setEN(){localStorage.setItem("lang","en-US"),this.language="en-US"}navigateTo(t){this.router.navigate([t],{relativeTo:this.route})}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(a.a),o.Lb(a.b))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-resume"]],decls:13,vars:1,consts:[[3,"click"],["onclick","startReco()",1,"talk"],["id","listening",2,"display","none"],["id","speech"]],template:function(t,e){1&t&&(o.Rb(0,"div"),o.wc(1," language "),o.Rb(2,"button",0),o.Yb("click",(function(){return e.setFR()})),o.wc(3,"FR"),o.Qb(),o.Rb(4,"button",0),o.Yb("click",(function(){return e.setEN()})),o.wc(5,"EN"),o.Qb(),o.Rb(6,"h1"),o.wc(7),o.Qb(),o.Qb(),o.Rb(8,"button",1),o.wc(9,"Talk"),o.Qb(),o.Rb(10,"h3",2),o.wc(11,"Listening"),o.Qb(),o.Mb(12,"h1",3)),2&t&&(o.zb(7),o.yc("current language: ",e.language,""))},styles:[""]}),t})(),children:[{path:"about",component:r}]}];let u=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[a.d.forChild(s)],a.d]}),t})(),i=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[c.c,u]]}),t})()}}]);
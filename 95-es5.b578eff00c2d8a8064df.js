function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,i){return n&&_defineProperties(e.prototype,n),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{hBK9:function(e,n,i){"use strict";i.r(n),i.d(n,"SettingPageModule",(function(){return p}));var t,a=i("ofXK"),o=i("3Pt+"),c=i("tyNb"),b=i("TEn/"),l=i("9qQp"),r=i("V7IR"),g=i("l/Ya"),s=i("fXoL"),d=((t=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"getActiveLanguages",value:function(){return this.langSettings.filter((function(e){return e.active}))}},{key:"getAllLanguages",value:function(){return this.langSettings}},{key:"getLangDataLabel",value:function(e){return Object(l.b)(e)}},{key:"getLangDataLabelLocal",value:function(e,n){return Object(l.c)(e,n)}},{key:"getDialectList",value:function(e){return e===l.a.de?[0]:[0,1]}},{key:"getDialectLabel",value:function(e,n,i){return e===l.a.en?0===i?Object(g.b)(g.a.British,n):Object(g.b)(g.a.AmE,n):e===l.a.cns||e===l.a.cnt?0===i?Object(g.b)(g.a.Mandarin,n):Object(g.b)(g.a.Cantonese,n):void 0}}]),e}()).\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t);function u(e,n){if(1&e&&(s.Mb(0,"ion-select-option",14),s.hc(1),s.Lb()),2&e){var i=n.$implicit,t=s.Wb();s.Zb("value",i.langData),s.zb(1),s.jc(" ",t.languageService.getLangDataLabel(i.langData)," ")}}function h(e,n){if(1&e&&(s.Mb(0,"ion-select-option",14),s.hc(1),s.Lb()),2&e){var i=n.$implicit,t=s.Wb().$implicit,a=s.Wb();s.Zb("value",i),s.zb(1),s.jc(" ",a.languageService.getDialectLabel(t.langData,a.cacheService.settings.langUi,i)," ")}}function L(e,n){if(1&e){var i=s.Nb();s.Mb(0,"ion-item"),s.Mb(1,"ion-grid",15),s.Mb(2,"ion-row"),s.Mb(3,"ion-col",16),s.Mb(4,"ion-item"),s.Mb(5,"ion-checkbox",9),s.Ub("ngModelChange",(function(e){return s.dc(i),n.$implicit.active=e})),s.Lb(),s.Mb(6,"ion-label"),s.hc(7),s.Lb(),s.Lb(),s.Lb(),s.Mb(8,"ion-col",17),s.Mb(9,"ion-item",18),s.Kb(10,"ion-icon",19),s.Mb(11,"ion-checkbox",20),s.Ub("ngModelChange",(function(e){return s.dc(i),n.$implicit.hide=e})),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(12,"ion-row"),s.Mb(13,"ion-col",21),s.Mb(14,"ion-select",22),s.Ub("ngModelChange",(function(e){return s.dc(i),n.$implicit.langSpeechIndex=e})),s.gc(15,h,2,2,"ion-select-option",6),s.Lb(),s.Lb(),s.Mb(16,"ion-col",21),s.Mb(17,"ion-item",18),s.Kb(18,"ion-icon",23),s.Mb(19,"ion-select",24),s.Ub("ngModelChange",(function(e){return s.dc(i),n.$implicit.speakRate=e})),s.Mb(20,"ion-select-option",14),s.hc(21,"1.00x"),s.Lb(),s.Mb(22,"ion-select-option",14),s.hc(23,"0.75x"),s.Lb(),s.Mb(24,"ion-select-option",14),s.hc(25,"0.50x"),s.Lb(),s.Mb(26,"ion-select-option",14),s.hc(27,"0.25x"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Kb(28,"ion-reorder",25),s.Lb()}if(2&e){var t=n.$implicit,a=s.Wb();s.zb(5),s.Zb("ngModel",t.active),s.zb(2),s.jc(" \xa0 \xa0",a.getLangLabel(t.langData),""),s.zb(2),s.Zb("disabled",!t.active),s.zb(2),s.Zb("ngModel",t.hide),s.zb(3),s.Zb("disabled",!t.active||a.languageService.getDialectList(t.langData).length<2)("ngModel",t.langSpeechIndex)("cancelText",a.getUiLabel(a.UIL.Cancel)),s.zb(1),s.Zb("ngForOf",a.languageService.getDialectList(t.langData)),s.zb(2),s.Zb("disabled",!t.active),s.zb(2),s.Zb("ngModel",t.speakRate)("cancelText",a.getUiLabel(a.UIL.Cancel)),s.zb(1),s.Zb("value",1),s.zb(2),s.Zb("value",.75),s.zb(2),s.Zb("value",.5),s.zb(2),s.Zb("value",.25)}}var M,f,v=[{path:"",component:(M=function(){function e(n,i,t){_classCallCheck(this,e),this.location=n,this.languageService=i,this.cacheService=t,this.UIL=g.a,console.log("in the setting page")}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"getUiLabel",value:function(e){return Object(g.b)(e,this.cacheService.settings.langUi)}},{key:"getLangLabel",value:function(e){return Object(l.c)(e,this.cacheService.settings.langUi)}},{key:"save",value:function(){console.log("save settings")}},{key:"goBack",value:function(){this.save(),this.location.back()}},{key:"doReorder",value:function(e){console.log("Dragged from index",e.detail.from,"to",e.detail.to),e.detail.complete(this.cacheService.settings.langSettings)}},{key:"onChangeDarkMode",value:function(){document.body.classList.toggle("dark",this.cacheService.settings.darkMode)}}]),e}(),M.\u0275fac=function(e){return new(e||M)(s.Jb(a.f),s.Jb(d),s.Jb(r.a))},M.\u0275cmp=s.Db({type:M,selectors:[["app-setting"]],decls:47,vars:17,consts:[["slot","start"],["size","large",3,"click"],["name","chevron-back-outline"],["padding",""],["interface","action-sheet",3,"ngModel","cancelText","ngModelChange"],["langsel",""],[3,"value",4,"ngFor","ngForOf"],["disabled","false",3,"ionItemReorder"],[4,"ngFor","ngForOf"],[3,"ngModel","ngModelChange"],["min","0.5","max","1","step","0.05","snaps","true",3,"ngModel","ngModelChange"],[1,"hr"],["name","moon"],["slot","end",3,"ngModel","ngModelChange","ionChange"],[3,"value"],[1,"ion-no-padding"],["size","7"],["size","5"],[3,"disabled"],["name","eye-off-outline"],["slot","end",3,"ngModel","ngModelChange"],["size","6"],["interface","action-sheet",2,"max-width","100%","width","100%",3,"disabled","ngModel","cancelText","ngModelChange"],["name","speedometer-outline"],["interface","action-sheet",2,"max-width","100%","width","100%",3,"ngModel","cancelText","ngModelChange"],["slot","end"]],template:function(e,n){1&e&&(s.Mb(0,"ion-header"),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-buttons",0),s.Mb(3,"ion-button",1),s.Ub("click",(function(){return n.goBack()})),s.Kb(4,"ion-icon",2),s.hc(5),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(6,"ion-content",3),s.Mb(7,"ion-card"),s.Mb(8,"ion-item"),s.Mb(9,"ion-label"),s.Mb(10,"b"),s.hc(11),s.Lb(),s.Lb(),s.Mb(12,"ion-select",4,5),s.Ub("ngModelChange",(function(e){return n.cacheService.settings.langUi=e})),s.gc(14,u,2,2,"ion-select-option",6),s.Lb(),s.Lb(),s.Lb(),s.Mb(15,"ion-reorder-group",7),s.Ub("ionItemReorder",(function(e){return n.doReorder(e)})),s.gc(16,L,29,15,"ion-item",8),s.Lb(),s.Mb(17,"ion-card",3),s.Mb(18,"ion-row"),s.Mb(19,"ion-col"),s.Mb(20,"ion-chip"),s.hc(21),s.Mb(22,"ion-checkbox",9),s.Ub("ngModelChange",(function(e){return n.cacheService.settings.showImageCard=e})),s.Lb(),s.Lb(),s.Lb(),s.Mb(23,"ion-col"),s.Mb(24,"ion-chip"),s.hc(25),s.Mb(26,"ion-checkbox",9),s.Ub("ngModelChange",(function(e){return n.cacheService.settings.showImageList=e})),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(27,"ion-card",3),s.Mb(28,"ion-card-header"),s.Mb(29,"ion-card-title"),s.hc(30),s.Lb(),s.Lb(),s.Mb(31,"ion-card-content"),s.Mb(32,"div"),s.hc(33),s.Lb(),s.Mb(34,"ion-item"),s.Mb(35,"ion-range",10),s.Ub("ngModelChange",(function(e){return n.cacheService.settings.miaohongLeniency=e})),s.Lb(),s.Lb(),s.Kb(36,"div",11),s.Mb(37,"div"),s.hc(38),s.Lb(),s.Mb(39,"ion-item"),s.Mb(40,"ion-range",10),s.Ub("ngModelChange",(function(e){return n.cacheService.settings.moxieLeniency=e})),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(41,"ion-card"),s.Mb(42,"ion-item"),s.Kb(43,"ion-icon",12),s.Mb(44,"ion-label"),s.hc(45),s.Lb(),s.Mb(46,"ion-toggle",13),s.Ub("ngModelChange",(function(e){return n.cacheService.settings.darkMode=e}))("ionChange",(function(){return n.onChangeDarkMode()})),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&e&&(s.zb(5),s.jc(" ",n.getUiLabel(n.UIL.Save)," "),s.zb(6),s.ic(n.getUiLabel(n.UIL.DisplayLang)),s.zb(1),s.Zb("ngModel",n.cacheService.settings.langUi)("cancelText",n.getUiLabel(n.UIL.Cancel)),s.zb(2),s.Zb("ngForOf",n.cacheService.settings.langSettings),s.zb(2),s.Zb("ngForOf",n.cacheService.settings.langSettings),s.zb(5),s.jc(" ",n.getUiLabel(n.UIL.DisplayImageInCard)," \xa0 \xa0 "),s.zb(1),s.Zb("ngModel",n.cacheService.settings.showImageCard),s.zb(3),s.jc(" ",n.getUiLabel(n.UIL.DisplayImageInList)," \xa0 \xa0 "),s.zb(1),s.Zb("ngModel",n.cacheService.settings.showImageList),s.zb(4),s.ic(n.getUiLabel(n.UIL.LeniencyChinese)),s.zb(3),s.ic(n.getUiLabel(n.UIL.TraceOver)),s.zb(2),s.Zb("ngModel",n.cacheService.settings.miaohongLeniency),s.zb(3),s.ic(n.getUiLabel(n.UIL.Dictation)),s.zb(2),s.Zb("ngModel",n.cacheService.settings.moxieLeniency),s.zb(5),s.jc("\xa0 \xa0",n.getUiLabel(n.UIL.DarkMode),""),s.zb(1),s.Zb("ngModel",n.cacheService.settings.darkMode))},directives:[b.p,b.D,b.f,b.e,b.q,b.n,b.g,b.s,b.t,b.z,b.K,o.c,o.f,a.h,b.w,b.y,b.m,b.l,b.k,b.a,b.i,b.j,b.h,b.u,b.C,b.A,b.o,b.v],styles:[".hr[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;margin:20px 0;width:100%}"]}),M)}],p=((f=function e(){_classCallCheck(this,e)}).\u0275mod=s.Hb({type:f}),f.\u0275inj=s.Gb({factory:function(e){return new(e||f)},imports:[[a.b,o.a,b.E,c.i.forChild(v)]]}),f)}}]);
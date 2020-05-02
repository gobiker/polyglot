function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function asyncGeneratorStep(e,n,t,r,i,a,s){try{var c=e[a](s),o=c.value}catch(d){return void t(d)}c.done?n(o):Promise.resolve(o).then(r,i)}function _asyncToGenerator(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function s(e){asyncGeneratorStep(a,r,i,s,c,"next",e)}function c(e){asyncGeneratorStep(a,r,i,s,c,"throw",e)}s(void 0)}))}}function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(e,n,t){var r="".concat(e*n/t-e,"ms"),i=2*Math.PI*n/t;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(e,n,t){var r=n/t,i="".concat(e*r-e,"ms"),a=2*Math.PI*r;return{r:5,style:{top:"".concat(9*Math.sin(a),"px"),left:"".concat(9*Math.cos(a),"px"),"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,n){return{r:6,style:{left:"".concat(9-9*n,"px"),"animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(e,n,t){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":"".concat(e*n/t-e,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,n,t){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":"".concat(e*n/t-e,"ms")}}}}}},"9qQp":function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return s}));var r=function(e){return e[e.cns=1]="cns",e[e.cnt=2]="cnt",e[e.en=3]="en",e[e.de=4]="de",e}({}),i=[["\u7b80\u4f53\u4e2d\u6587","\u7c21\u9ad4\u4e2d\u6587","S. Chinese","V. Chinesisch"],["\u7e41\u4f53\u4e2d\u6587","\u7e41\u9ad4\u4e2d\u6587","T. Chinese","T. Chinesisch"],["\u82f1\u8bed","\u82f1\u8a9e","English","Englisch"],["\u5fb7\u8bed","\u5fb7\u8a9e","German","Deutsch"]];function a(e){return i[e-1][e-1]}function s(e,n){return i[e-1][n-1]}},KwJk:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return c}));var r=function(e,n){return null!==n.closest(e)},i=function(e){return"string"==typeof e&&e.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(e),!0):void 0},a=function(e){var n={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return n[e]=!0})),n},s=/^[a-z][a-z0-9+\-.]*:/,c=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t,r){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==n||"#"===n[0]||s.test(n)){e.next=4;break}if(!(i=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=t&&t.preventDefault(),i.push(n,r)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()},NNRI:function(e){e.exports=JSON.parse('{"langUi":1,"miaohongLeniency":0.7,"moxieLeniency":1,"showImageCard":true,"showImageList":true,"darkMode":true,"langSettings":[{"active":true,"hide":false,"langData":1,"langSpeechIndex":0,"position":1,"speakRate":1},{"active":false,"hide":true,"langData":2,"langSpeechIndex":0,"position":2,"speakRate":1},{"active":true,"hide":false,"langData":3,"langSpeechIndex":0,"position":3,"speakRate":1},{"active":true,"hide":false,"langData":4,"langSpeechIndex":0,"position":4,"speakRate":1}]}')},NqGI:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i}));var r=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t,r,i,a){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return",n.attachViewToDom(t,r,a,i));case 2:if("string"==typeof r||r instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(s="string"==typeof r?t.ownerDocument&&t.ownerDocument.createElement(r):r,i&&i.forEach((function(e){return s.classList.add(e)})),a&&Object.assign(s,a),t.appendChild(s),e.t0=s.componentOnReady,!e.t0){e.next=12;break}return e.next=12,s.componentOnReady();case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})));return function(n,t,r,i,a){return e.apply(this,arguments)}}(),i=function(e,n){if(n){if(e)return e.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},Uwmq:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e){try{if("string"!=typeof e||""===e)return e;var n=document.createDocumentFragment(),t=document.createElement("div");n.appendChild(t),t.innerHTML=e,c.forEach((function(e){for(var t=n.querySelectorAll(e),r=t.length-1;r>=0;r--){var s=t[r];s.parentNode?s.parentNode.removeChild(s):n.removeChild(s);for(var c=a(s),o=0;o<c.length;o++)i(c[o])}}));for(var r=a(n),s=0;s<r.length;s++)i(r[s]);var o=document.createElement("div");o.appendChild(n);var d=o.querySelector("div");return null!==d?d.innerHTML:o.innerHTML}catch(u){return console.error(u),""}},i=function e(n){if(!n.nodeType||1===n.nodeType){for(var t=n.attributes.length-1;t>=0;t--){var r=n.attributes.item(t),i=r.name;if(s.includes(i.toLowerCase())){var c=r.value;null!=c&&c.toLowerCase().includes("javascript:")&&n.removeAttribute(i)}else n.removeAttribute(i)}for(var o=a(n),d=0;d<o.length;d++)e(o[d])}},a=function(e){return null!=e.children?e.children:e.childNodes},s=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},V7IR:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("NNRI"),i=t("l/Ya"),a=t("fXoL"),s=function(){var e=function(){function e(){_classCallCheck(this,e),this.settings=r,console.log("Reading local json files"),console.log(this.settings),document.body.classList.toggle("dark",this.settings.darkMode)}return _createClass(e,[{key:"getUiLabel",value:function(e){return Object(i.b)(e,this.settings.langUi)}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},fzvj:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return s})),t.d(n,"d",(function(){return r}));var r=function(){var e=window.TapticEngine;e&&e.selection()},i=function(){var e=window.TapticEngine;e&&e.gestureSelectionStart()},a=function(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()},s=function(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}},"l/Ya":function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return a}));var r=t("9qQp"),i=function(e){return e[e.ChineseS=0]="ChineseS",e[e.ChineseT=1]="ChineseT",e[e.English=2]="English",e[e.German=3]="German",e[e.British=4]="British",e[e.AmE=5]="AmE",e[e.Mandarin=6]="Mandarin",e[e.Cantonese=7]="Cantonese",e[e.Menu=8]="Menu",e[e.CardList=9]="CardList",e[e.WordList=10]="WordList",e[e.Settings=11]="Settings",e[e.AddCard=12]="AddCard",e[e.Categories=13]="Categories",e[e.UserTags=14]="UserTags",e[e.InputHanzi=15]="InputHanzi",e[e.Back=16]="Back",e[e.A_Z=17]="A_Z",e[e.ID=18]="ID",e[e.Random=19]="Random",e[e.Tags=20]="Tags",e[e.DelLast=21]="DelLast",e[e.Delete=22]="Delete",e[e.LangSetting=23]="LangSetting",e[e.defaultSettingList=24]="defaultSettingList",e[e.defaultSettingDetails=25]="defaultSettingDetails",e[e.Hide=26]="Hide",e[e.SpeechSpeed=27]="SpeechSpeed",e[e.LeniencyChinese=28]="LeniencyChinese",e[e.TraceOver=29]="TraceOver",e[e.Dictation=30]="Dictation",e[e.Order=31]="Order",e[e.Outline=32]="Outline",e[e.Write=33]="Write",e[e.Filter=34]="Filter",e[e.SelectAll=35]="SelectAll",e[e.ClearAll=36]="ClearAll",e[e.DisplayLang=37]="DisplayLang",e[e.Save=38]="Save",e[e.Cancel=39]="Cancel",e[e.DataSetting=40]="DataSetting",e[e.DataLang=41]="DataLang",e[e.Aktive=42]="Aktive",e[e.DisplayOrder=43]="DisplayOrder",e[e.DisplayImageInCard=44]="DisplayImageInCard",e[e.DisplayImageInList=45]="DisplayImageInList",e[e.Noun=46]="Noun",e[e.Verb=47]="Verb",e[e.Adjective=48]="Adjective",e[e.InputAnyChinese=49]="InputAnyChinese",e[e.OnlyChinese=50]="OnlyChinese",e[e.DeleteCard=51]="DeleteCard",e[e.AddWord=52]="AddWord",e[e.DeleteImage=53]="DeleteImage",e[e.DarkMode=54]="DarkMode",e}({});function a(e,n){var t=s.find((function(n){return n.id===e}));if(!t)return"empty";switch(n){case r.a.cns:return t.zh_CN;case r.a.cnt:return t.zh_TW;case r.a.de:return t.de;default:return t.en}}var s=[{id:i.ChineseS,en:"S. Chinese",zh_CN:"\u7b80\u4f53\u4e2d\u6587",zh_TW:"\u7c21\u9ad4\u4e2d\u6587",de:"V. Chinesisch"},{id:i.ChineseT,en:"T. Chinese",zh_CN:"\u7e41\u4f53\u4e2d\u6587",zh_TW:"\u7e41\u9ad4\u4e2d\u6587",de:"T. Chinesisch"},{id:i.English,en:"English",zh_CN:"\u82f1\u8bed",zh_TW:"\u82f1\u8a9e",de:"Englisch"},{id:i.German,en:"German",zh_CN:"\u5fb7\u8bed",zh_TW:"\u5fb7\u8a9e",de:"Deutsch"},{id:i.British,en:"British",zh_CN:"\u82f1\u5f0f",zh_TW:"\u82f1\u5f0f",de:"Britisch"},{id:i.AmE,en:"AmE",zh_CN:"\u7f8e\u5f0f",zh_TW:"\u7f8e\u5f0f",de:"AmE"},{id:i.Mandarin,en:"Mandarin",zh_CN:"\u666e\u901a\u8bdd",zh_TW:"\u570b\u8a9e",de:"Mandarin"},{id:i.Cantonese,en:"Cantonese",zh_CN:"\u7ca4\u8bed",zh_TW:"\u7cb5\u8a9e",de:"Kantonesisch"},{id:i.Menu,en:"Menu",zh_CN:"\u76ee\u5f55",zh_TW:"\u76ee\u9304",de:"Men\xfc"},{id:i.CardList,en:"Card List",zh_CN:"\u5361\u7247\u5217\u8868",zh_TW:"\u5361\u7247\u5217\u8868",de:"Kartenliste"},{id:i.WordList,en:"Word List",zh_CN:"\u5355\u8bcd\u5217\u8868",zh_TW:"\u55ae\u8a5e\u5217\u8868",de:"Wortliste"},{id:i.Settings,en:"Settings",zh_CN:"\u8bbe\u7f6e",zh_TW:"\u8a2d\u5b9a",de:"Einstellungen"},{id:i.InputHanzi,en:"Input Chinese",zh_CN:"\u81ea\u5b9a\u4e49\u6c49\u5b57",zh_TW:"\u81ea\u5b9a\u7fa9\u6f22\u5b57",de:"Chinesisches Zeichen"},{id:i.AddCard,en:"New Card",zh_CN:"\u65b0\u5efa\u5361\u7247",zh_TW:"\u65b0\u5efa\u5361\u7247",de:"Neue Karte"},{id:i.Categories,en:"Categories",zh_CN:"\u7c7b\u522b",zh_TW:"\u985e\u5225",de:"Kategorien"},{id:i.UserTags,en:"Tags",zh_CN:"\u6807\u7b7e",zh_TW:"\u6a19\u7c64",de:"Stichworte"},{id:i.Back,en:"back",zh_CN:"\u8fd4\u56de",zh_TW:"\u8fd4\u56de",de:"Zur\xfcck"},{id:i.A_Z,en:"A-Z",zh_CN:"\u5b57\u6bcd",zh_TW:"\u5b57\u6bcd",de:"A-Z"},{id:i.ID,en:"ID",zh_CN:"\u65b0\u65e7",zh_TW:"\u65b0\u820a",de:"ID"},{id:i.Random,en:"random",zh_CN:"\u968f\u673a",zh_TW:"\u96a8\u6a5f",de:"zuf\xe4llig"},{id:i.Tags,en:"tags",zh_CN:"\u6807\u7b7e",zh_TW:"\u6a19\u7c64",de:"Stichworte"},{id:i.DelLast,en:"delete the last one",zh_CN:"\u5220\u9664\u6700\u540e\u4e00\u4e2a",zh_TW:"\u522a\u9664\u6700\u5f8c\u4e00\u500b",de:"den letzten l\xf6schen"},{id:i.Delete,en:"delete",zh_CN:"\u5220\u9664",zh_TW:"\u522a\u9664",de:"l\xf6schen"},{id:i.LangSetting,en:"language settings",zh_CN:"\u8bed\u8a00\u8bbe\u7f6e",zh_TW:"\u8a9e\u8a00\u8a2d\u5b9a",de:"Spracheinstellungen"},{id:i.defaultSettingList,en:"default settings of list",zh_CN:"\u5217\u8868\u7684\u9ed8\u8ba4\u8bbe\u7f6e",zh_TW:"\u5217\u8868\u7684\u9810\u8a2d\u8a2d\u5b9a",de:"Standardeinstellungen der Liste"},{id:i.defaultSettingDetails,en:"settings of scratch",zh_CN:"\u522e\u522e\u5361\u8bbe\u7f6e",zh_TW:"\u522e\u522e\u5361\u8a2d\u5b9a",de:"Einstellungen des Rubbellos"},{id:i.Hide,en:"hide",zh_CN:"\u906e\u853d",zh_TW:"\u906e\u853d",de:"versteckt"},{id:i.SpeechSpeed,en:"speed",zh_CN:"\u53d1\u97f3\u901f\u5ea6",zh_TW:"\u767c\u97f3\u901f\u5ea6",de:"Geschwindigkeit"},{id:i.LeniencyChinese,en:"Error tolerance for chinese writing",zh_CN:"\u6c49\u5b57\u7ec3\u4e60\u5bb9\u9519\u7387",zh_TW:"\u6f22\u5b57\u7df4\u7fd2\u5bb9\u932f\u7387",de:"Fehlertoleranz f\xfcr chinesische Schreib\xfcbungen"},{id:i.TraceOver,en:"Trace Over",zh_CN:"\u63cf\u7ea2",zh_TW:"\u63cf\u7d05",de:"nach Vorlage"},{id:i.Dictation,en:"Dictation",zh_CN:"\u9ed8\u5199",zh_TW:"\u9ed8\u5beb",de:"Diktat"},{id:i.Order,en:"Demo",zh_CN:"\u7b14\u987a",zh_TW:"\u7b46\u9806",de:"Demo"},{id:i.Outline,en:"Trace over",zh_CN:"\u63cf\u7ea2",zh_TW:"\u63cf\u7d05",de:"nach Vorlage"},{id:i.Write,en:"Dictation",zh_CN:"\u9ed8\u5199",zh_TW:"\u9ed8\u5beb",de:"Diktat"},{id:i.Filter,en:"filter",zh_CN:"\u8bcd\u8bed\u7b5b\u9009",zh_TW:"\u8a5e\u8a9e\u7be9\u9078",de:"Filter"},{id:i.SelectAll,en:"select all",zh_CN:"\u5168\u90e8\u9009\u4e2d",zh_TW:"\u5168\u90e8\u9078\u4e2d",de:"Alles aktivieren"},{id:i.ClearAll,en:"clear all",zh_CN:"\u5168\u90e8\u6e05\u9664",zh_TW:"\u5168\u90e8\u6e05\u9664",de:"Alles deaktivieren"},{id:i.DisplayLang,en:"Display Language",zh_CN:"\u754c\u9762\u8bed\u8a00",zh_TW:"\u4ecb\u9762\u8a9e\u8a00",de:"Anzeigesprache"},{id:i.Save,en:"Save",zh_CN:"\u4fdd\u5b58",zh_TW:"\u4fdd\u5b58",de:"Speichen"},{id:i.Cancel,en:"Cancel",zh_CN:"\u53d6\u6d88",zh_TW:"\u53d6\u6d88",de:"Abrechen"},{id:i.DataSetting,en:"Data Settings",zh_CN:"\u6570\u636e\u8bbe\u7f6e",zh_TW:"\u8cc7\u6599\u8a2d\u5b9a",de:"Dateneinstellungen"},{id:i.DataLang,en:"Data Language",zh_CN:"\u6570\u636e\u8bed\u8a00",zh_TW:"\u8cc7\u6599\u8a9e\u8a00",de:"Datensprache"},{id:i.Aktive,en:"aktive",zh_CN:"\u542f\u7528",zh_TW:"\u555f\u7528",de:"Aktiv"},{id:i.DisplayOrder,en:"Order",zh_CN:"\u663e\u793a\u987a\u5e8f",zh_TW:"\u986f\u793a\u9806\u5e8f",de:"Reihenfolge"},{id:i.DisplayImageInCard,en:"Card Image",zh_CN:"\u5361\u7247\u56fe\u7247",zh_TW:"\u5361\u7247\u5716\u7247",de:"Kartenbild"},{id:i.DisplayImageInList,en:"List Image",zh_CN:"\u5217\u8868\u56fe\u7247",zh_TW:"\u5217\u8868\u5716\u7247",de:"ListenBild"},{id:i.Noun,en:"noun",zh_CN:"\u540d\u8bcd",zh_TW:"\u540d\u8a5e",de:"Substantiv"},{id:i.Verb,en:"verb",zh_CN:"\u52a8\u8bcd",zh_TW:"\u52d5\u8a5e",de:"Verb"},{id:i.Adjective,en:"adjective",zh_CN:"\u5f62\u5bb9\u8bcd",zh_TW:"\u5f62\u5bb9\u8a5e",de:"Adjektiv"},{id:i.InputAnyChinese,en:"Input any Chinese characters",zh_CN:"\u8f93\u5165\u4efb\u610f\u6c49\u5b57",zh_TW:"\u8f38\u5165\u4efb\u610f\u6f22\u5b57",de:"Geben Sie chinesische Schriftzeichen ein"},{id:i.OnlyChinese,en:"Only Chinese characters allowed",zh_CN:"\u53ea\u5141\u8bb8\u4e2d\u6587\u5b57\u7b26",zh_TW:"\u53ea\u5141\u8a31\u4e2d\u6587\u5b57\u7b26",de:"Nur chinesische Schriftzeichen erlaubt"},{id:i.DeleteCard,en:"Delete Card",zh_CN:"\u5220\u9664\u5361\u7247",zh_TW:"\u522a\u9664\u5361\u7247",de:"Karte l\xf6schen"},{id:i.AddWord,en:"Add Word",zh_CN:"\u6dfb\u52a0\u5355\u8bcd",zh_TW:"\u6dfb\u52a0\u55ae\u8a5e",de:"Wort hinzuf\xfcgen"},{id:i.DeleteImage,en:"Delete Image",zh_CN:"\u5220\u9664\u56fe\u50cf",zh_TW:"\u522a\u9664\u5716\u50cf",de:"Bild l\xf6schen"},{id:i.DarkMode,en:"Dark Mode",zh_CN:"\u6697\u9ed1\u754c\u9762",zh_TW:"\u6697\u9ed1\u754c\u9762",de:"Dark Mode"}]}}]);
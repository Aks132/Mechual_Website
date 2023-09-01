function ShowCategory(a){var b=jQuery(".job_list:visible"),c="-1";return void 0!==b&&void 0!==b.attr("id")&&(c=b.attr("id").replace("department_","")),c!=a?(jQuery(".job_list").slideUp(),jQuery("#department_"+a).slideToggle()):jQuery("#department_"+a).slideUp(),!1}function IRR(a,b){for(var c=function(a,b,c){for(var d=c+1,e=a[0],f=1;f<a.length;f++)e+=a[f]/Math.pow(d,(b[f]-b[0])/365);return e},d=function(a,b,c){for(var d=c+1,e=0,f=1;f<a.length;f++){var g=(b[f]-b[0])/365;e-=g*a[f]/Math.pow(d,g+1)}return e},e=[],f=!1,g=!1,h=0;h<a.length;h++)e[h]=0===h?0:e[h-1]+365,a[h]>0&&(f=!0),a[h]<0&&(g=!0);if(!f||!g)return"#NUM!";var i,j,k,b="undefined"==typeof b?.1:b,l=b,m=1e-10,n=50,o=0,p=!0;do k=c(a,e,l),i=l-k/d(a,e,l),j=Math.abs(i-l),l=i,p=j>m&&Math.abs(k)>m;while(p&&++o<n);return p?"#NUM!":l}!function(a){"use strict";function b(b,c,d){"addEventListener"in a?b.addEventListener(c,d,!1):"attachEvent"in a&&b.attachEvent("on"+c,d)}function c(b,c,d){"removeEventListener"in a?b.removeEventListener(c,d,!1):"detachEvent"in a&&b.detachEvent("on"+c,d)}function d(){var b,c=["moz","webkit","o","ms"];for(b=0;b<c.length&&!N;b+=1)N=a[c[b]+"RequestAnimationFrame"];N||h("setup","RequestAnimationFrame not supported")}function e(b){var c="Host page: "+b;return a.top!==a.self&&(c=a.parentIFrame&&a.parentIFrame.getId?a.parentIFrame.getId()+": "+b:"Nested host page: "+b),c}function f(a){return K+"["+e(a)+"]"}function g(a){return P[a]?P[a].log:G}function h(a,b){k("log",a,b,g(a))}function i(a,b){k("info",a,b,g(a))}function j(a,b){k("warn",a,b,!0)}function k(b,c,d,e){!0===e&&"object"==typeof a.console&&console[b](f(c),d)}function l(d){function e(){function a(){s(V),p(W)}g("Height"),g("Width"),t(a,V,"init")}function f(){var a=U.substr(L).split(":");return{iframe:P[a[0]].iframe,id:a[0],height:a[1],width:a[2],type:a[3]}}function g(a){var b=Number(P[W]["max"+a]),c=Number(P[W]["min"+a]),d=a.toLowerCase(),e=Number(V[d]);h(W,"Checking "+d+" is in range "+c+"-"+b),c>e&&(e=c,h(W,"Set "+d+" to min value")),e>b&&(e=b,h(W,"Set "+d+" to max value")),V[d]=""+e}function k(){function a(){function a(){var a=0,d=!1;for(h(W,"Checking connection is from allowed list of origins: "+c);a<c.length;a++)if(c[a]===b){d=!0;break}return d}function d(){var a=P[W].remoteHost;return h(W,"Checking connection is from: "+a),b===a}return c.constructor===Array?a():d()}var b=d.origin,c=P[W].checkOrigin;if(c&&""+b!="null"&&!a())throw new Error("Unexpected message received from: "+b+" for "+V.iframe.id+". Message was: "+d.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function l(){return K===(""+U).substr(0,L)&&U.substr(L).split(":")[0]in P}function w(){var a=V.type in{true:1,false:1,undefined:1};return a&&h(W,"Ignoring init message from meta parent page"),a}function y(a){return U.substr(U.indexOf(":")+J+a)}function z(a){h(W,"MessageCallback passed: {iframe: "+V.iframe.id+", message: "+a+"}"),N("messageCallback",{iframe:V.iframe,message:JSON.parse(a)}),h(W,"--")}function A(){var b=document.body.getBoundingClientRect(),c=V.iframe.getBoundingClientRect();return JSON.stringify({clientHeight:Math.max(document.documentElement.clientHeight,a.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,a.innerWidth||0),offsetTop:parseInt(c.top-b.top,10),offsetLeft:parseInt(c.left-b.left,10),scrollTop:a.pageYOffset,scrollLeft:a.pageXOffset})}function B(a,b){function c(){u("Send Page Info","pageInfo:"+A(),a,b)}x(c,32)}function C(){function d(b,c){function d(){P[g]?B(P[g].iframe,g):e()}["scroll","resize"].forEach(function(e){h(g,b+e+" listener for sendPageInfo"),c(a,e,d)})}function e(){d("Remove ",c)}function f(){d("Add ",b)}var g=W;f(),P[g].stopPageInfo=e}function D(){P[W]&&P[W].stopPageInfo&&(P[W].stopPageInfo(),delete P[W].stopPageInfo)}function E(){var a=!0;return null===V.iframe&&(j(W,"IFrame ("+V.id+") not found"),a=!1),a}function F(a){var b=a.getBoundingClientRect();return o(W),{x:Math.floor(Number(b.left)+Number(M.x)),y:Math.floor(Number(b.top)+Number(M.y))}}function G(b){function c(){M=g,H(),h(W,"--")}function d(){return{x:Number(V.width)+f.x,y:Number(V.height)+f.y}}function e(){a.parentIFrame?a.parentIFrame["scrollTo"+(b?"Offset":"")](g.x,g.y):j(W,"Unable to scroll to requested position, window.parentIFrame not found")}var f=b?F(V.iframe):{x:0,y:0},g=d();h(W,"Reposition requested from iFrame (offset x:"+f.x+" y:"+f.y+")"),a.top!==a.self?e():c()}function H(){!1!==N("scrollCallback",M)?p(W):q()}function I(b){function c(){var a=F(g);h(W,"Moving to in page link (#"+e+") at x: "+a.x+" y: "+a.y),M={x:a.x,y:a.y},H(),h(W,"--")}function d(){a.parentIFrame?a.parentIFrame.moveToAnchor(e):h(W,"In page link #"+e+" not found and window.parentIFrame not found")}var e=b.split("#")[1]||"",f=decodeURIComponent(e),g=document.getElementById(f)||document.getElementsByName(f)[0];g?c():a.top!==a.self?d():h(W,"In page link #"+e+" not found")}function N(a,b){return m(W,a,b)}function O(){switch(P[W].firstRun&&T(),V.type){case"close":n(V.iframe);break;case"message":z(y(6));break;case"scrollTo":G(!1);break;case"scrollToOffset":G(!0);break;case"pageInfo":B(P[W].iframe,W),C();break;case"pageInfoStop":D();break;case"inPageLink":I(y(9));break;case"reset":r(V);break;case"init":e(),N("initCallback",V.iframe),N("resizedCallback",V);break;default:e(),N("resizedCallback",V)}}function Q(a){var b=!0;return P[a]||(b=!1,j(V.type+" No settings for "+a+". Message was: "+U)),b}function S(){for(var a in P)u("iFrame requested init",v(a),document.getElementById(a),a)}function T(){P[W].firstRun=!1}var U=d.data,V={},W=null;"[iFrameResizerChild]Ready"===U?S():l()?(V=f(),W=R=V.id,!w()&&Q(W)&&(h(W,"Received: "+U),E()&&k()&&O())):i(W,"Ignored: "+U)}function m(a,b,c){var d=null,e=null;if(P[a]){if(d=P[a][b],"function"!=typeof d)throw new TypeError(b+" on iFrame["+a+"] is not a function");e=d(c)}return e}function n(a){var b=a.id;h(b,"Removing iFrame: "+b),a.parentNode.removeChild(a),m(b,"closedCallback",b),h(b,"--"),delete P[b]}function o(b){null===M&&(M={x:void 0!==a.pageXOffset?a.pageXOffset:document.documentElement.scrollLeft,y:void 0!==a.pageYOffset?a.pageYOffset:document.documentElement.scrollTop},h(b,"Get page position: "+M.x+","+M.y))}function p(b){null!==M&&(a.scrollTo(M.x,M.y),h(b,"Set page position: "+M.x+","+M.y),q())}function q(){M=null}function r(a){function b(){s(a),u("reset","reset",a.iframe,a.id)}h(a.id,"Size reset requested by "+("init"===a.type?"host page":"iFrame")),o(a.id),t(b,a,"reset")}function s(a){function b(b){a.iframe.style[b]=a[b]+"px",h(a.id,"IFrame ("+e+") "+b+" set to "+a[b]+"px")}function c(b){H||"0"!==a[b]||(H=!0,h(e,"Hidden iFrame detected, creating visibility listener"),y())}function d(a){b(a),c(a)}var e=a.iframe.id;P[e]&&(P[e].sizeHeight&&d("height"),P[e].sizeWidth&&d("width"))}function t(a,b,c){c!==b.type&&N?(h(b.id,"Requesting animation frame"),N(a)):a()}function u(a,b,c,d){function e(){var e=P[d].targetOrigin;h(d,"["+a+"] Sending msg to iframe["+d+"] ("+b+") targetOrigin: "+e),c.contentWindow.postMessage(K+b,e)}function f(){i(d,"["+a+"] IFrame("+d+") not found"),P[d]&&delete P[d]}function g(){c&&"contentWindow"in c&&null!==c.contentWindow?e():f()}d=d||c.id,P[d]&&g()}function v(a){return a+":"+P[a].bodyMarginV1+":"+P[a].sizeWidth+":"+P[a].log+":"+P[a].interval+":"+P[a].enablePublicMethods+":"+P[a].autoResize+":"+P[a].bodyMargin+":"+P[a].heightCalculationMethod+":"+P[a].bodyBackground+":"+P[a].bodyPadding+":"+P[a].tolerance+":"+P[a].inPageLinks+":"+P[a].resizeFrom+":"+P[a].widthCalculationMethod}function w(a,c){function d(){function b(b){1/0!==P[w][b]&&0!==P[w][b]&&(a.style[b]=P[w][b]+"px",h(w,"Set "+b+" = "+P[w][b]+"px"))}function c(a){if(P[w]["min"+a]>P[w]["max"+a])throw new Error("Value for min"+a+" can not be greater than max"+a)}c("Height"),c("Width"),b("maxHeight"),b("minHeight"),b("maxWidth"),b("minWidth")}function e(){var a=c&&c.id||S.id+F++;return null!==document.getElementById(a)&&(a+=F++),a}function f(b){return R=b,""===b&&(a.id=b=e(),G=(c||{}).log,R=b,h(b,"Added missing iframe ID: "+b+" ("+a.src+")")),b}function g(){h(w,"IFrame scrolling "+(P[w].scrolling?"enabled":"disabled")+" for "+w),a.style.overflow=!1===P[w].scrolling?"hidden":"auto",a.scrolling=!1===P[w].scrolling?"no":"yes"}function i(){("number"==typeof P[w].bodyMargin||"0"===P[w].bodyMargin)&&(P[w].bodyMarginV1=P[w].bodyMargin,P[w].bodyMargin=""+P[w].bodyMargin+"px")}function k(){var b=P[w].firstRun,c=P[w].heightCalculationMethod in O;!b&&c&&r({iframe:a,height:0,width:0,type:"init"})}function l(){Function.prototype.bind&&(P[w].iframe.iFrameResizer={close:n.bind(null,P[w].iframe),resize:u.bind(null,"Window resize","resize",P[w].iframe),moveToAnchor:function(a){u("Move to anchor","inPageLink:"+a,P[w].iframe,w)},sendMessage:function(a){a=JSON.stringify(a),u("Send Message","message:"+a,P[w].iframe,w)}})}function m(c){function d(){u("iFrame.onload",c,a),k()}b(a,"load",d),u("init",c,a)}function o(a){if("object"!=typeof a)throw new TypeError("Options is not an object")}function p(a){for(var b in S)S.hasOwnProperty(b)&&(P[w][b]=a.hasOwnProperty(b)?a[b]:S[b])}function q(a){return""===a||"file://"===a?"*":a}function s(b){b=b||{},P[w]={firstRun:!0,iframe:a,remoteHost:a.src.split("/").slice(0,3).join("/")},o(b),p(b),P[w].targetOrigin=!0===P[w].checkOrigin?q(P[w].remoteHost):"*"}function t(){return w in P&&"iFrameResizer"in a}var w=f(a.id);t()?j(w,"Ignored iFrame, already setup."):(s(c),g(),d(),i(),m(v(w)),l())}function x(a,b){null===Q&&(Q=setTimeout(function(){Q=null,a()},b))}function y(){function b(){function a(a){function b(b){return"0px"===P[a].iframe.style[b]}function c(a){return null!==a.offsetParent}c(P[a].iframe)&&(b("height")||b("width"))&&u("Visibility change","resize",P[a].iframe,a)}for(var b in P)a(b)}function c(a){h("window","Mutation observed: "+a[0].target+" "+a[0].type),x(b,16)}function d(){var a=document.querySelector("body"),b={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},d=new e(c);d.observe(a,b)}var e=a.MutationObserver||a.WebKitMutationObserver;e&&d()}function z(a){function b(){B("Window "+a,"resize")}h("window","Trigger event: "+a),x(b,16)}function A(){function a(){B("Tab Visable","resize")}"hidden"!==document.visibilityState&&(h("document","Trigger event: Visiblity change"),x(a,16))}function B(a,b){function c(a){return"parent"===P[a].resizeFrom&&P[a].autoResize&&!P[a].firstRun}for(var d in P)c(d)&&u(a,b,document.getElementById(d),d)}function C(){b(a,"message",l),b(a,"resize",function(){z("resize")}),b(document,"visibilitychange",A),b(document,"-webkit-visibilitychange",A),b(a,"focusin",function(){z("focus")}),b(a,"focus",function(){z("focus")})}function D(){function a(a,c){function d(){if(!c.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==c.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+c.tagName+">")}c&&(d(),w(c,a),b.push(c))}var b;return d(),C(),function(c,d){switch(b=[],typeof d){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(d||"iframe"),a.bind(void 0,c));break;case"object":a(c,d);break;default:throw new TypeError("Unexpected data type ("+typeof d+")")}return b}}function E(a){a.fn.iFrameResize=function(a){return this.filter("iframe").each(function(b,c){w(c,a)}).end()}}var F=0,G=!1,H=!1,I="message",J=I.length,K="[iFrameSizer]",L=K.length,M=null,N=a.requestAnimationFrame,O={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},P={},Q=null,R="Host Page",S={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,widthCalculationMethod:"scroll",closedCallback:function(){},initCallback:function(){},messageCallback:function(){j("MessageCallback function not defined")},resizedCallback:function(){},scrollCallback:function(){return!0}};a.jQuery&&E(jQuery),"function"==typeof define&&define.amd?define([],D):"object"==typeof module&&"object"==typeof module.exports?module.exports=D():a.iFrameResize=a.iFrameResize||D()}(window||{}),window.iFrameResize({log:!1,bodyMargin:"30px 0",checkOrigin:["http://go.pardot.com","https://go.pardot.com"]}),jQuery(document).ready(function(){function g(a){var b=0;jQuery(a).children().each(function(a){jQuery(this).innerHeight()>b&&(b=jQuery(this).innerHeight())}),jQuery(a).children().css("height",b+"px")}function h(a){var b=jQuery(a).children().size();jQuery(a).children().each(function(a){jQuery(this).css("width",100/b-1+"%")})}function i(a){var b=jQuery(a),c=b.innerHeight(),d="cp__subnav__sticky",e=jQuery("#wpadminbar"),f=0;e.length&&(f+=e.innerHeight()),b.waypoint({handler:function(a){"down"==a?(b.parent().css("height",c+"px"),b.addClass(d).stop().css("top",jQuery("#main-header").innerHeight()+"px")):(b.parent().css("height","auto"),b.removeClass(d).stop())},offset:c})}console.log("Clearpath Robotics");var a=document.getElementsByClassName("cp__3d__model");void 0===typeof a&&(a=a[0].getElementsByTagName("iframe"));for(var b=[],c=0;c<a.length;c++)a[c].dataset.aspectRatio=a[c].height/a[c].width,a[c].dataset.maxHeight=a[c].height,a[c].dataset.maxWidth=a[c].width,b[c]=a[c].parentNode;window.addEventListener("resize",function(){for(var c=0;c<a.length;c++){var d=b[c].clientWidth;d<a[c].dataset.maxWidth&&(a[c].height=d*a[c].dataset.aspectRatio,a[c].width=d)}});var d=document.createEvent("UIEvents");d.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(d),jQuery("#downloads a").click(function(){var a=this.text;console.log("click"),ga("send","event","Download","Resources Download",a)}),jQuery(".et_pb_toggle_title").click(function(){var h,a=jQuery(this),b=a.closest(".et_pb_toggle"),c=b.parents(".et_pb_section"),d=b.find(".et_pb_toggle_content"),e=b.closest(".et_pb_accordion"),f=e.length,g=e.hasClass("et_pb_accordion_toggling");if(f){if(b.hasClass("et_pb_toggle_open")||g)return!1;e.addClass("et_pb_accordion_toggling"),h=b.siblings(".et_pb_toggle_open")}d.is(":animated")||(d.slideToggle(200,function(){b.hasClass("et_pb_toggle_close")?b.removeClass("et_pb_toggle_close").addClass("et_pb_toggle_open"):b.removeClass("et_pb_toggle_open").addClass("et_pb_toggle_close"),c.hasClass("et_pb_section_parallax")&&!c.children().hasClass("et_pb_parallax_css")&&jQuery.proxy(et_parallax_set_height,c)()}),f&&h.find(".et_pb_toggle_content").slideToggle(200,function(){h.removeClass("et_pb_toggle_open").addClass("et_pb_toggle_close"),e.removeClass("et_pb_accordion_toggling")}))});var e=jQuery(".et_pb_tabs");e.find(".et_pb_tabs_controls li");e.length&&e.et_pb_simple_slider({use_controls:!1,use_arrows:!1,slide:".et_pb_all_tabs > div",tabs_animation:!0,fade_speed:0}).on("et_hashchange",function(a){var b=a.params,c=jQuery("#"+a.target.id),d=b[0];c.find(".et_pb_tabs_controls li").eq(d).hasClass("et_pb_tab_active")||c.find(".et_pb_tabs_controls li").eq(d).click()}),h(".et_pb_tabs_controls"),g(".et_pb_tabs_controls"),i("#cp__product__sub-menu"),i("#cp__sub-menu"),jQuery('#cp__sub-menu #menu-services-page-menu a[href^="#"]').on("click",function(a){var b=jQuery(this).attr("href");setTimeout(function(){jQuery(document.body).animate({scrollTop:jQuery(b).offset().top-100},400)},800)}),jQuery('#cp__product__sub-menu .fullwidth-menu a[href^="#"]').on("click",function(a){var b=jQuery(this).attr("href");setTimeout(function(){jQuery(document.body).animate({scrollTop:jQuery(b).offset().top-100},400)},800)}),g(".cp__customer__blurb-container .et_pb_blurb_container"),jQuery(".cp__founders__person").each(function(){var a=jQuery(this).find("img");jQuery(this).css("background-image","url("+a.attr("src")+")"),a.hide()}),jQuery(".post-meta").append(jQuery(".sharedaddy").detach())}),!function(a){if("function"==typeof define&&define.amd)define(a);else if("object"==typeof exports)module.exports=a();else{var b=window.Cookies,c=window.Cookies=a();c.noConflict=function(){return window.Cookies=b,c}}}(function(){function a(){for(var a=0,b={};a<arguments.length;a++){var c=arguments[a];for(var d in c)b[d]=c[d]}return b}function b(c){function d(b,e,f){var g;if(arguments.length>1){if(f=a({path:"/"},d.defaults,f),"number"==typeof f.expires){var h=new Date;h.setMilliseconds(h.getMilliseconds()+864e5*f.expires),f.expires=h}try{g=JSON.stringify(e),/^[\{\[]/.test(g)&&(e=g)}catch(a){}return e=c.write?c.write(e,b):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),b=encodeURIComponent(String(b)),b=b.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),b=b.replace(/[\(\)]/g,escape),document.cookie=[b,"=",e,f.expires&&"; expires="+f.expires.toUTCString(),f.path&&"; path="+f.path,f.domain&&"; domain="+f.domain,f.secure?"; secure":""].join("")}b||(g={});for(var i=document.cookie?document.cookie.split("; "):[],j=/(%[0-9A-Z]{2})+/g,k=0;k<i.length;k++){var l=i[k].split("="),m=l[0].replace(j,decodeURIComponent),n=l.slice(1).join("=");'"'===n.charAt(0)&&(n=n.slice(1,-1));try{if(n=c.read?c.read(n,m):c(n,m)||n.replace(j,decodeURIComponent),this.json)try{n=JSON.parse(n)}catch(a){}if(b===m){g=n;break}b||(g[m]=n)}catch(a){}}return g}return d.get=d.set=d,d.getJSON=function(){return d.apply({json:!0},[].slice.call(arguments))},d.defaults={},d.remove=function(b,c){d(b,"",a(c,{expires:-1}))},d.withConverter=b,d}return b(function(){})}),function(){jQuery(function(){var a,b,c,d,e,f,g,h,i;return a=jQuery,g=a("#loading").hide(),h=a("#overlay").hide(),a.fn.scrollView=function(){return this.each(function(){return a("html, body").animate({scrollTop:a(this).offset().top},1e3)})},a.fn.isValid=function(){return this[0].checkValidity()},a(".roi__range__input").on("input",function(){var b,c,d,e,f,g;return b=a(this),e=b.next("output"),g=b.width(),d=(b.val()-b.attr("min"))/(b.attr("max")-b.attr("min")),f=1-70/g,c=0>d?0:d>1?g:g*d*f+e.width(),b.next("output").css({left:c}).text(b.val())}).trigger("input"),d=function(){var b,c,d,e,f;return b=function(a){return".roi__input"+("[name='"+a+"']")},e=function(c){return parseFloat(a(b(c)).val())},f=function(c){return a(b(c)).val()},c=function(c){return a(b(c)).val().split(" ")[0]},d=function(c){var d;return d=a(b(c)).val().split(" "),d.shift(),d.join(" ")},{n:f("roi-full-name"),fn:c("roi-full-name"),ln:d("roi-full-name"),em:f("roi-email"),co:f("roi-company"),ph:f("roi-telephone"),c:125e3,o:15e3,p:e("roi-personnel"),l:e("roi-labor-rate"),h:e("roi-hours"),s:e("roi-shift"),d:e("roi-days"),w:e("roi-weeks")}},f=function(){var a,b,c,d,e,f,g,h;return f=function(a){return Math.round((a.c+a.o)*a.p/(a.p*a.l*a.h*a.s*a.d*a.w)*12)},d=function(a){return a.l*a.h*a.d*a.w*a.s*a.p-a.o*a.p},c=function(a){return[a.c*a.p*-1,d(a),d(a),d(a),d(a),d(a)]},a=function(a){return IRR(c(a))},g=function(a){return Math.round(100*a)},b=function(a){var b,c;return c=g(a),b=["< 20%*","20-40%*","40-60%*","> 60%*"],20>c?b[0]:c>=20&&40>c?b[1]:c>=40&&60>c?b[2]:c>=60?b[3]:b[0]},e=function(a){var b,c;return c=a,b=["< 12 Months*","12-18 Months*","18-24 Months*","24-36 Months*","> 36 Months*"],12>c?b[0]:c>=12&&18>c?b[1]:c>=18&&24>c?b[2]:c>=24&&36>c?b[3]:c>=36?b[4]:b[4]},h=function(a){return{paybackPeriod:e(a),fiveYearIrr:b(a)}},{paybackPeriod:f,irrInputs:c,calculateIRR:a,irrBucket:b,paybackBucket:e,results:h}},e=function(){var b,c,d,e,f,g,h;return e=function(a){return""===a.trim()},f=function(a){var b;return b=/^([\w.-]+)@([\w.-]+)\.([a-zA-Z.]{2,6})$/i,!!a.match(b)},c=function(a){return"roi-first-name="+a.fn+"&roi-last-name="+a.fn+"&roi-email="+a.em+"&roi-company="+a.co+"&roi-telephone="+a.ph+"&roi-personnel="+a.p+"&roi-labor-rate="+a.l+"&roi-hours="+a.h+"&roi-shift="+a.s+"&roi-days="+a.d+"&roi-weeks="+a.w},g=function(){return"https://go.pardot.com/l/92812/2016-02-26/vvt4x"},d={n:'.roi__input[name="roi-full-name"]',em:'.roi__input[name="roi-email"]',co:'.roi__input[name="roi-company"]',ph:'.roi__input[name="roi-telephone"]'},h=function(b){return a('.roi__input[name="roi-first-name"]').val(b.fn),a('.roi__input[name="roi-last-name"]').val(b.ln)},b=function(){var b,c,f,g;b=0,a(".roi__input").removeClass("roi__input--error"),a(".roi__calculator__errors").hide();for(f in d)g=d[f],c=a(g),(e(c.val())||!c.isValid())&&(c.addClass("roi__input--error"),a(".roi__calculator__errors").fadeIn(),b++);return!(b>0)},{isBlank:e,isEmail:f,postUrl:g(),data:c,setHidden:h,valid:b}},c=function(a){var b,c;return null==a&&(a=!1),b=f(),c=function(c){return a?(console.log("Input",c),console.log("Payback Period",b.paybackPeriod(c)),console.log("IRR Input",b.irrInputs(c)),console.log("IRR Output",b.calculateIRR(c)),console.log("PP Bucket",b.paybackBucket(b.paybackPeriod(c))),console.log("IRR Output",b.irrBucket(b.calculateIRR(c)))):console.log("Debug mode is disabled"),!1},{print:c}},i=function(){var b,c,d,e,g,h,i,j;return b="CPRoiCalculator",g={n:"roi-full-name",fn:"roi-first-name",ln:"roi-last-name",em:"roi-email",co:"roi-company",ph:"roi-telephone",p:"roi-personnel",l:"roi-labor-rate",h:"roi-hours",s:"roi-shift",d:"roi-days",w:"roi-weeks"},e=function(a){return".roi__input"+("[name='"+a+"']")},d=function(){return!!Cookies.get(b)},i=function(a){return Cookies.set(b,a,{expires:1,path:""})},c=function(){return Cookies.getJSON(b)},j=function(b){var c;return c=f(),a("#pp-result").text(c.paybackBucket(c.paybackPeriod(b))),a("#irr-result").text(c.irrBucket(c.calculateIRR(b)))},h=function(){var b,f,h;if(d()){b=c(),a(".roi__calculator__information").hide(),a("#roi__submit").val("Recalculate ROI"),j(b);for(f in g)h=g[f],a(e(h)).val(b[f]).trigger("input")}return!1},{save:i,load:c,resume:h,isSet:d,showResults:j}},b=i(),b.resume(),0!==a("#roi__calculator").size()&&(a("#roi__calculator")[0].noValidate=!0),a("#roi__calculator").on("submit",function(c){var f,i,j;if(j=d(),f=e(),i=function(){return a(".roi__calculator__information").is(":visible")},f.valid(j)){if(!b.isSet())return f.setHidden(j),void b.save(j);c.preventDefault,h.fadeIn().delay(1e3).fadeOut(),g.fadeIn().delay(1e3).fadeOut(),a(".roi__result").fadeOut("slow",function(){return b.showResults(j),b.save(j)}).delay(1100).fadeIn(),a(".roi__result").scrollView()}else a(".roi__calculator__information").scrollView();return!1})})}.call(this),function(){}.call(this);
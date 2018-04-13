!function(t){var e={init:function(e){return this.each(function(){var a={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",transitionSpeed:600,showOnLoad:"all",sortOnLoad:!1,multiFilter:!1,filterLogic:"or",resizeContainer:!0,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:!0,onMixLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:!1,origDisplay:"",origLayout:"",origHeight:0,newHeight:0,isTouch:!1,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},clean:{},fade:"1",scale:"",rotateX:"",rotateY:"",rotateZ:"",blur:"",grayscale:""};e&&t.extend(a,e),this.config=a,t.support.touch="ontouchend"in document,t.support.touch&&(a.isTouch=!0,a.resetDelay=350),a.container=t(this);var s,n,o=a.container;(a.prefix=function(t){for(var e=["Webkit","Moz","O","ms"],i=0;i<e.length;i++)if(e[i]+"Transition"in t.style)return e[i];return"transition"in t.style&&""}(o[0]),a.prefix=a.prefix?"-"+a.prefix.toLowerCase()+"-":"",o.find(a.targetSelector).each(function(){a.origOrder.push(t(this))}),a.sortOnLoad)&&(t.isArray(a.sortOnLoad)?(s=a.sortOnLoad[0],n=a.sortOnLoad[1],t(a.sortSelector+"[data-sort="+a.sortOnLoad[0]+"][data-order="+a.sortOnLoad[1]+"]").addClass("active")):(t(a.sortSelector+"[data-sort="+a.sortOnLoad+"]").addClass("active"),s=a.sortOnLoad,a.sortOnLoad="desc"),r(s,n,o,a));for(var l=0;l<2;l++){var c=0==l?c=a.prefix:"";a.transition[c+"transition"]="all "+a.transitionSpeed+"ms ease-in-out",a.perspective[c+"perspective"]=a.perspectiveDistance+"px",a.perspective[c+"perspective-origin"]=a.perspectiveOrigin}for(l=0;l<2;l++){c=0==l?c=a.prefix:"";a.clean[c+"transition"]="none"}"list"==a.layoutMode?(o.addClass(a.listClass),a.origDisplay=a.targetDisplayList):(o.addClass(a.gridClass),a.origDisplay=a.targetDisplayGrid),a.origLayout=a.layoutMode;var d=a.showOnLoad.split(" ");t.each(d,function(){t(a.filterSelector+'[data-filter="'+this+'"]').addClass("active")}),o.find(a.targetSelector).addClass("mix_all"),"all"==d[0]&&(d[0]="mix_all",a.showOnLoad="mix_all");var f=t();t.each(d,function(){f=f.add(t("."+this))}),f.each(function(){var e=t(this);"list"==a.layoutMode?e.css("display",a.targetDisplayList):e.css("display",a.targetDisplayGrid),e.css(a.transition)});setTimeout(function(){a.mixing=!0,f.css("opacity","1");setTimeout(function(){if("list"==a.layoutMode?f.removeStyle(a.prefix+"transition, transition").css({display:a.targetDisplayList,opacity:1}):f.removeStyle(a.prefix+"transition, transition").css({display:a.targetDisplayGrid,opacity:1}),a.mixing=!1,"function"==typeof a.onMixLoad){var t=a.onMixLoad.call(this,a);a=t||a}},a.transitionSpeed)},10);a.filter=a.showOnLoad,t(a.sortSelector).bind(a.buttonEvent,function(){if(!a.mixing){var e=t(this),r=e.attr("data-sort"),s=e.attr("data-order");if(e.hasClass("active")){if("random"!=r)return!1}else t(a.sortSelector).removeClass("active"),e.addClass("active");o.find(a.targetSelector).each(function(){a.startOrder.push(t(this))}),i(a.filter,r,s,o,a)}}),t(a.filterSelector).bind(a.buttonEvent,function(){if(!a.mixing){var e=t(this);if(0==a.multiFilter)t(a.filterSelector).removeClass("active"),e.addClass("active"),a.filter=e.attr("data-filter"),t(a.filterSelector+'[data-filter="'+a.filter+'"]').addClass("active");else{var r=e.attr("data-filter");if(e.hasClass("active")){e.removeClass("active");var s=new RegExp("(\\s|^)"+r);a.filter=a.filter.replace(s,"")}else e.addClass("active"),a.filter=a.filter+" "+r}i(a.filter,null,null,o,a)}})})},toGrid:function(){return this.each(function(){var e=this.config;"grid"!=e.layoutMode&&(e.layoutMode="grid",i(e.filter,null,null,t(this),e))})},toList:function(){return this.each(function(){var e=this.config;"list"!=e.layoutMode&&(e.layoutMode="list",i(e.filter,null,null,t(this),e))})},filter:function(e){return this.each(function(){var r=this.config;r.mixing||(t(r.filterSelector).removeClass("active"),t(r.filterSelector+'[data-filter="'+e+'"]').addClass("active"),i(e,null,null,t(this),r))})},sort:function(e){return this.each(function(){var r=this.config,a=t(this);if(!r.mixing){if(t(r.sortSelector).removeClass("active"),t.isArray(e)){var s=e[0],n=e[1];t(r.sortSelector+'[data-sort="'+e[0]+'"][data-order="'+e[1]+'"]').addClass("active")}else{t(r.sortSelector+'[data-sort="'+e+'"]').addClass("active");s=e,n="desc"}a.find(r.targetSelector).each(function(){r.startOrder.push(t(this))}),i(r.filter,s,n,a,r)}})},multimix:function(e){return this.each(function(){var r=this.config,a=t(this);multiOut={filter:r.filter,sort:null,order:"desc",layoutMode:r.layoutMode},t.extend(multiOut,e),r.mixing||(t(r.filterSelector).add(r.sortSelector).removeClass("active"),t(r.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass("active"),void 0!==multiOut.sort&&(t(r.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass("active"),a.find(r.targetSelector).each(function(){r.startOrder.push(t(this))})),r.layoutMode=multiOut.layoutMode,i(multiOut.filter,multiOut.sort,multiOut.order,a,r))})},remix:function(e){return this.each(function(){var r=this.config,a=t(this);r.origOrder=[],a.find(r.targetSelector).each(function(){var e=t(this);e.addClass("mix_all"),r.origOrder.push(e)}),r.mixing||void 0===e||(t(r.filterSelector).removeClass("active"),t(r.filterSelector+'[data-filter="'+e+'"]').addClass("active"),i(e,null,null,a,r))})}};function i(e,i,s,n,o){if(clearInterval(o.failsafe),o.mixing=!0,o.filter=e,"function"==typeof o.onMixStart){var l=o.onMixStart.call(this,o);o=l||o}for(var c=o.transitionSpeed,d=0;d<2;d++){var f=0==d?f=o.prefix:"";o.transition[f+"transition"]="all "+c+"ms linear",o.transition[f+"transform"]=f+"translate3d(0,0,0)",o.perspective[f+"perspective"]=o.perspectiveDistance+"px",o.perspective[f+"perspective-origin"]=o.perspectiveOrigin}var p=o.targetSelector,u=n.find(p);u.each(function(){this.data={}});var h=u.parent();h.css(o.perspective),o.easingFallback="ease-in-out","smooth"==o.easing&&(o.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"),"snap"==o.easing&&(o.easing="cubic-bezier(0.77, 0, 0.175, 1)"),"windback"==o.easing&&(o.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",o.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)"),"windup"==o.easing&&(o.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",o.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)");var g="list"==o.layoutMode&&null!=o.listEffects?o.listEffects:o.effects;Array.prototype.indexOf&&(o.fade=g.indexOf("fade")>-1?"0":"",o.scale=g.indexOf("scale")>-1?"scale(.01)":"",o.rotateZ=g.indexOf("rotateZ")>-1?"rotate(180deg)":"",o.rotateY=g.indexOf("rotateY")>-1?"rotateY(90deg)":"",o.rotateX=g.indexOf("rotateX")>-1?"rotateX(90deg)":"",o.blur=g.indexOf("blur")>-1?"blur(8px)":"",o.grayscale=g.indexOf("grayscale")>-1?"grayscale(100%)":"");var v=t(),y=t(),m=[],x=!1;"string"==typeof e?m=a(e):(x=!0,t.each(e,function(t){m[t]=a(this)})),"or"==o.filterLogic?(""==m[0]&&m.shift(),m.length<1?y=y.add(n.find(p+":visible")):u.each(function(){var e=t(this);if(x){var i=0;t.each(m,function(t){this.length?e.is("."+this.join(", ."))&&i++:i>0&&i++}),i==m.length?v=v.add(e):y=y.add(e)}else e.is("."+m.join(", ."))?v=v.add(e):y=y.add(e)})):(v=v.add(h.find(p+"."+m.join("."))),y=y.add(h.find(p+":not(."+m.join(".")+"):visible")));var C=v.length,O=t(),S=t(),b=t();if(y.each(function(){var e=t(this);"none"!=e.css("display")&&(O=O.add(e),b=b.add(e))}),v.filter(":visible").length==C&&!O.length&&!i){if(o.origLayout==o.layoutMode)return L(),!1;if(1==v.length)return"list"==o.layoutMode?(n.addClass(o.listClass),n.removeClass(o.gridClass),b.css("display",o.targetDisplayList)):(n.addClass(o.gridClass),n.removeClass(o.listClass),b.css("display",o.targetDisplayGrid)),L(),!1}if(o.origHeight=h.height(),v.length){if(n.removeClass(o.failClass),v.each(function(){var e=t(this);"none"==e.css("display")?S=S.add(e):b=b.add(e)}),o.origLayout!=o.layoutMode&&0==o.animateGridList)return"list"==o.layoutMode?(n.addClass(o.listClass),n.removeClass(o.gridClass),b.css("display",o.targetDisplayList)):(n.addClass(o.gridClass),n.removeClass(o.listClass),b.css("display",o.targetDisplayGrid)),L(),!1;if(!window.atob)return L(),!1;if(u.css(o.clean),b.each(function(){this.data.origPos=t(this).offset()}),"list"==o.layoutMode?(n.addClass(o.listClass),n.removeClass(o.gridClass),S.css("display",o.targetDisplayList)):(n.addClass(o.gridClass),n.removeClass(o.listClass),S.css("display",o.targetDisplayGrid)),S.each(function(){this.data.showInterPos=t(this).offset()}),O.each(function(){this.data.hideInterPos=t(this).offset()}),b.each(function(){this.data.preInterPos=t(this).offset()}),"list"==o.layoutMode?b.css("display",o.targetDisplayList):b.css("display",o.targetDisplayGrid),i&&r(i,s,n,o),i&&function(t,e){if(t.length!=e.length)return!1;for(var i=0;i<e.length;i++){if(t[i].compare&&!t[i].compare(e[i]))return!1;if(t[i]!==e[i])return!1}return!0}(o.origSort,o.checkSort))return L(),!1;O.hide(),S.each(function(e){this.data.finalPos=t(this).offset()}),b.each(function(){this.data.finalPrePos=t(this).offset()}),o.newHeight=h.height(),i&&r("reset",null,n,o),S.hide(),b.css("display",o.origDisplay),"block"==o.origDisplay?(n.addClass(o.listClass),S.css("display",o.targetDisplayList)):(n.removeClass(o.listClass),S.css("display",o.targetDisplayGrid)),o.resizeContainer&&h.css("height",o.origHeight+"px");var w={};for(d=0;d<2;d++){w[(f=0==d?f=o.prefix:"")+"transform"]=o.scale+" "+o.rotateX+" "+o.rotateY+" "+o.rotateZ,w[f+"filter"]=o.blur+" "+o.grayscale}S.css(w),b.each(function(){var e=this.data,i=t(this);i.hasClass("mix_tohide")?(e.preTX=e.origPos.left-e.hideInterPos.left,e.preTY=e.origPos.top-e.hideInterPos.top):(e.preTX=e.origPos.left-e.preInterPos.left,e.preTY=e.origPos.top-e.preInterPos.top);for(var r={},a=0;a<2;a++){var s=0==a?s=o.prefix:"";r[s+"transform"]="translate("+e.preTX+"px,"+e.preTY+"px)"}i.css(r)}),"list"==o.layoutMode?(n.addClass(o.listClass),n.removeClass(o.gridClass)):(n.addClass(o.gridClass),n.removeClass(o.listClass));setTimeout(function(){if(o.resizeContainer){for(var e={},i=0;i<2;i++){e[(a=0==i?a=o.prefix:"")+"transition"]="all "+c+"ms ease-in-out",e.height=o.newHeight+"px"}h.css(e)}O.css("opacity",o.fade),S.css("opacity",1),S.each(function(){var e=this.data;e.tX=e.finalPos.left-e.showInterPos.left,e.tY=e.finalPos.top-e.showInterPos.top;for(var i={},r=0;r<2;r++){var a=0==r?a=o.prefix:"";i[a+"transition-property"]=a+"transform, "+a+"filter, opacity",i[a+"transition-timing-function"]=o.easing+", linear, linear",i[a+"transition-duration"]=c+"ms",i[a+"transition-delay"]="0",i[a+"transform"]="translate("+e.tX+"px,"+e.tY+"px)",i[a+"filter"]="none"}t(this).css("-webkit-transition","all "+c+"ms "+o.easingFallback).css(i)}),b.each(function(){var e=this.data;e.tX=0!=e.finalPrePos.left?e.finalPrePos.left-e.preInterPos.left:0,e.tY=0!=e.finalPrePos.left?e.finalPrePos.top-e.preInterPos.top:0;for(var i={},r=0;r<2;r++){var a=0==r?a=o.prefix:"";i[a+"transition"]="all "+c+"ms "+o.easing,i[a+"transform"]="translate("+e.tX+"px,"+e.tY+"px)"}t(this).css("-webkit-transition","all "+c+"ms "+o.easingFallback).css(i)});var r={};for(i=0;i<2;i++){var a;r[(a=0==i?a=o.prefix:"")+"transition"]="all "+c+"ms "+o.easing+", "+a+"filter "+c+"ms linear, opacity "+c+"ms linear",r[a+"transform"]=o.scale+" "+o.rotateX+" "+o.rotateY+" "+o.rotateZ,r[a+"filter"]=o.blur+" "+o.grayscale,r.opacity=o.fade}O.css(r),h.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(e){(e.originalEvent.propertyName.indexOf("transform")>-1||e.originalEvent.propertyName.indexOf("opacity")>-1)&&(p.indexOf(".")>-1?t(e.target).hasClass(p.replace(".",""))&&L():t(e.target).is(p)&&L())})},10);o.failsafe=setTimeout(function(){o.mixing&&L()},c+400)}else{if(o.resizeContainer&&h.css("height",o.origHeight+"px"),!window.atob)return L(),!1;O=y;setTimeout(function(){if(h.css(o.perspective),o.resizeContainer){for(var t={},e=0;e<2;e++){t[(r=0==e?r=o.prefix:"")+"transition"]="height "+c+"ms ease-in-out",t.height=o.minHeight+"px"}h.css(t)}if(u.css(o.transition),y.length){var i={};for(e=0;e<2;e++){var r;i[(r=0==e?r=o.prefix:"")+"transform"]=o.scale+" "+o.rotateX+" "+o.rotateY+" "+o.rotateZ,i[r+"filter"]=o.blur+" "+o.grayscale,i.opacity=o.fade}O.css(i),h.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(t){(t.originalEvent.propertyName.indexOf("transform")>-1||t.originalEvent.propertyName.indexOf("opacity")>-1)&&(n.addClass(o.failClass),L())})}else o.mixing=!1},10)}function L(){h.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd"),i&&r(i,s,n,o),o.startOrder=[],o.newOrder=[],o.origSort=[],o.checkSort=[],u.removeStyle(o.prefix+"filter, filter, "+o.prefix+"transform, transform, opacity, display").css(o.clean).removeAttr("data-checksum"),window.atob||u.css({display:"none",opacity:"0"});var t=o.resizeContainer?"height":"";h.removeStyle(o.prefix+"transition, transition, "+o.prefix+"perspective, perspective, "+o.prefix+"perspective-origin, perspective-origin, "+t),"list"==o.layoutMode?(v.css({display:o.targetDisplayList,opacity:"1"}),o.origDisplay=o.targetDisplayList):(v.css({display:o.targetDisplayGrid,opacity:"1"}),o.origDisplay=o.targetDisplayGrid),o.origLayout=o.layoutMode;setTimeout(function(){if(u.removeStyle(o.prefix+"transition, transition"),o.mixing=!1,"function"==typeof o.onMixEnd){var t=o.onMixEnd.call(this,o);o=t||o}})}}function r(e,i,r,a){function s(t){"asc"==i?n.prepend(t).prepend(" "):n.append(t).append(" ")}r.find(a.targetSelector).wrapAll('<div class="mix_sorter"/>');var n=r.find(".mix_sorter");if(a.origSort.length||n.find(a.targetSelector+":visible").each(function(){t(this).wrap("<s/>"),a.origSort.push(t(this).parent().html().replace(/\s+/g,"")),t(this).unwrap()}),n.empty(),"reset"==e)t.each(a.startOrder,function(){n.append(this).append(" ")});else if("default"==e)t.each(a.origOrder,function(){s(this)});else if("random"==e)a.newOrder.length||(a.newOrder=function(t){for(var e=t.slice(),i=e.length,r=i;r--;){var a=parseInt(Math.random()*i),s=e[r];e[r]=e[a],e[a]=s}return e}(a.startOrder)),t.each(a.newOrder,function(){n.append(this).append(" ")});else if("custom"==e)t.each(i,function(){s(this)});else{if(void 0===a.origOrder[0].attr(e))return console.log("No such attribute found. Terminating"),!1;a.newOrder.length||(t.each(a.origOrder,function(){a.newOrder.push(t(this))}),a.newOrder.sort(function(t,i){var r=isNaN(1*t.attr(e))?t.attr(e).toLowerCase():1*t.attr(e),a=isNaN(1*i.attr(e))?i.attr(e).toLowerCase():1*i.attr(e);return r<a?-1:r>a?1:0})),t.each(a.newOrder,function(){s(this)})}a.checkSort=[],n.find(a.targetSelector+":visible").each(function(e){var i=t(this);0==e&&i.attr("data-checksum","1"),i.wrap("<s/>"),a.checkSort.push(i.parent().html().replace(/\s+/g,"")),i.unwrap()}),r.find(a.targetSelector).unwrap()}function a(e){var i=(e=e.replace(/\s{2,}/g," ")).split(" ");return t.each(i,function(t){"all"==this&&(i[t]="mix_all")}),""==i[0]&&i.shift(),i}t.fn.mixitup=function(t,i){return e[t]?e[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void 0:e.init.apply(this,arguments)},t.fn.removeStyle=function(e){return this.each(function(){var i=t(this),r=(e=e.replace(/\s+/g,"")).split(",");t.each(r,function(){var t=new RegExp(this.toString()+"[^;]+;?","g");i.attr("style",function(e,i){if(i)return i.replace(t,"")})})})}}(jQuery);
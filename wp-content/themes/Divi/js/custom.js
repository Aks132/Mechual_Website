!function(e){function t(t){var i,a,n=e("body"),s=e("#logo"),o=parseInt(s.attr("data-actual-width")),_=parseInt(s.attr("data-actual-height")),d=parseInt(s.attr("data-height-percentage")),l=e("#et-top-navigation"),r=parseInt(l.attr("data-height")),h=parseInt(l.attr("data-fixed-height")),c=e("#main-header"),p=n.hasClass("et_header_style_split"),m=c.hasClass("et-fixed-header"),f=n.hasClass("et_vertical_nav"),g=n.hasClass("et_hide_primary_logo"),u=n.hasClass("et_hide_fixed_logo"),t="undefined"==typeof t?!1:t,v=m?r:h;p&&!f&&(t&&(v=r),a=v*(d/100)+22,i=o*(a/_),g&&(m||t)&&(i=0),!u||m||t||(i=0),e(".et_header_style_split .centered-inline-logo-wrap").css({width:i}))}function i(t){var i=e(".et_header_style_slide .et_slide_in_menu_container"),a=e(".et_header_style_slide #page-container, .et_header_style_slide.et_fixed_nav #main-header"),n=e(".et_header_style_slide #main-header"),s=i.hasClass("et_pb_slide_menu_opened"),o="undefined"!=typeof t?t:"auto",_=e("body").hasClass("et_boxed_layout"),d=_?parseFloat(e("#page-container").css("margin-left")):0,r=i.innerWidth();"auto"!==o&&(s&&"open"===o||!s&&"close"===o)||(s?(i.css({right:"-"+r+"px"}),a.css({left:"0"}),_&&l&&n.css({left:d+"px"}),setTimeout(function(){i.css({display:"none"})},700)):(i.css({display:"block"}),setTimeout(function(){if(i.css({right:"0"}),a.css({left:"-"+(r-d)+"px"}),_&&l){var e=0>r-2*d?Math.abs(r-2*d):"-"+(r-2*d);r>e&&n.css({left:e+"px"})}},50)),e("body").toggleClass("et_pb_slide_menu_active"),i.toggleClass("et_pb_slide_menu_opened"))}var a,n,s,o,_=e(".single.et_pb_pagebuilder_layout.et_full_width_page"),d=(navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/),navigator.userAgent.match(/iPad/),e(".container")),l=(d.width(),e("body").hasClass("et_fixed_nav")),r=e("body").hasClass("et_vertical_fixed"),h=e("body").hasClass("rtl"),c=e("body").hasClass("et_hide_nav"),p=e("body").hasClass("et_header_style_left"),m=e("body").hasClass("et_vertical_nav"),f=e("#top-header"),g=e("#main-header"),u=e("#page-container"),v=e(".et_transparent_nav"),b=e("#main-content .container:first-child"),w=b.find(".et_post_meta_wrapper:first"),C=w.find("h1.entry-title"),y=(b.find(".entry-content:first"),e("body.single-post")),x=e(window),T=!1,$=e(".et_vertical_nav"),I=e(".et_header_style_split"),k=e("#et-top-navigation"),H=(e("#logo"),e("body.et_pb_pagebuilder_layout .et_pb_section:first-child"));if(e(document).ready(function(){function i(){var t=e("#main-header > .container > .logo_container"),i=e(".centered-inline-logo-wrap > .logo_container"),a=k.children("nav").children("ul").children("li").size(),n=Math.round(a/2)-1;x.width()>980&&t.length&&(e('<li class="centered-inline-logo-wrap"></li>').insertAfter(k.find("nav > ul >li:nth("+n+")")),t.appendTo(k.find(".centered-inline-logo-wrap"))),x.width()<=980&&i.length&&(i.prependTo("#main-header > .container"),e("#main-header .centered-inline-logo-wrap").remove())}function W(t){setTimeout(function(){var t=e("body"),i=e("#wpadminbar"),a=e("#top-header"),n=0;i.length&&(n+=i.innerHeight()),a.length&&a.is(":visible")&&(n+=a.innerHeight()),!t.hasClass("et_vertical_nav")&&t.hasClass("et_fixed_nav")&&e("#main-header").css("top",n)},t)}function A(){var t=e("body"),i=e(document).height(),n=e(window).height()+a+200;(t.hasClass("et_hide_nav")||t.hasClass("et_hide_nav_disabled")&&t.hasClass("et_fixed_nav"))&&(i>n?(t.hasClass("et_hide_nav_disabled")&&(t.addClass("et_hide_nav"),t.removeClass("et_hide_nav_disabled")),e("#main-header").css("transform","translateY(-"+a+"px)"),e("#top-header").css("transform","translateY(-"+a+"px)")):(e("#main-header").css({transform:"translateY(0)",opacity:"1"}),e("#top-header").css({transform:"translateY(0)",opacity:"1"}),t.removeClass("et_hide_nav"),t.addClass("et_hide_nav_disabled")))}function z(){var t=x.width(),i=e("#top-header"),a=i.length&&i.is(":visible")?i.innerHeight():0;if(t>980&&!g.attr("data-height-loaded")&&g.attr({"data-height-onload":g.height(),"data-height-loaded":!0}),980>=t){var n=g.innerHeight()+a-1;v.length&&!H.length&&(n+=58)}else{var n=parseInt(g.attr("data-height-onload"))+a;v.length&&!$.length&&b.length&&(n+=58)}if(v.length&&!$.length){H.addClass("et_pb_section_first");var s=H.length,o=s&&y.length,d=_.length&&C.length,r=_.length&&0===C.length,h=H.is(".et_pb_fullwidth_section"),c=980>=t&&b.length;if(!o||r&&h)if(h){var p=H.children(".et_pb_module:first");if(r&&h&&t>980&&(n-=58),p.is(".et_pb_slider")){var m=p.find(".et_pb_slide_image"),f=p.find(".et_pb_slide"),T=p.find(".et_pb_slide .et_pb_container"),I=0-parseInt(m.height())/2,k=p.find(".et-pb-slider-arrows a"),A=k.height();f.css({paddingTop:n}),T.css({"min-height":""}),m.css({marginTop:I}),k.css({marginTop:n/2-A/2}),et_pb_first_row_slide_container_height_new=0,p.find(".et_pb_slide").each(function(){var t=e(this),i=t.find(".et_pb_container");t.show(),i.css({"min-height":""});var a=i.innerHeight();et_pb_first_row_slide_container_height_new<a&&(et_pb_first_row_slide_container_height_new=a),t.is(':not(".et-pb-active-slide")')&&t.hide()}),T.css({"min-height":et_pb_first_row_slide_container_height_new})}else if(p.is(".et_pb_fullwidth_header")){p.removeAttr("style");var z=parseInt(p.css("paddingTop"));p.css({paddingTop:n+z})}else if(p.is(".et_pb_fullwidth_portfolio"))p.css({paddingTop:n});else if(p.is(".et_pb_map_container")){var M=p.find(".et_pb_map");M.css({height:""}),p.find(".et_pb_map").css({height:n+parseInt(M.css("height"))}),p.addClass("et_beneath_transparent_nav")}else if(p.is(".et_pb_fullwidth_menu"))p.css({marginTop:n});else if(p.is(".et_pb_fullwidth_code")){var O=p;O.css({paddingTop:""});var P=parseInt(O.css("paddingTop"));O.css({paddingTop:n+P})}else if(p.is(".et_pb_post_title")){var Y=p;Y.css({paddingTop:n+50})}}else s?(H.css({paddingTop:""}),et_pb_first_row_padding_top=n+parseInt(H.css("paddingBottom")),H.css({paddingTop:et_pb_first_row_padding_top})):c?b.css({paddingTop:n}):e("#main-content .container:first-child").css({paddingTop:n});else b.css({paddingTop:""}),980>t&&(n+=40),h&&H.css({paddingTop:"0"}),d?w.css({paddingTop:n}):r?H.css({paddingTop:n}):b.css({paddingTop:n});e("#et_fix_page_container_position").length||e("<style />",{id:"et_fix_page_container_position",text:"#page-container{ padding-top: 0 !important;}"}).appendTo("head")}else l&&u.css("paddingTop",n);W(0)}function M(){e(".et_search_form_container").hasClass("et_pb_is_animating")||(e(".et_menu_container").removeClass("et_pb_menu_hidden et_pb_no_animation").addClass("et_pb_menu_visible"),e(".et_search_form_container").removeClass("et_pb_search_visible et_pb_no_animation").addClass("et_pb_search_form_hidden et_pb_is_animating"),setTimeout(function(){e(".et_menu_container").addClass("et_pb_no_animation"),e(".et_search_form_container").addClass("et_pb_no_animation").removeClass("et_pb_is_animating")},1e3))}function O(){var t=e(".et_search_form_container"),i=e("body");if(t.hasClass("et_pb_search_visible")){var a=e("#main-header").innerHeight(),n=e("#top-menu").width(),s=e("#top-menu li a").css("font-size");t.css({height:a+"px"}),t.find("input").css("font-size",s),i.hasClass("et_header_style_left")?t.find("form").css("max-width",n+60):t.css("max-width",n+60)}}function P(){var i,a,n,s=e("#logo"),o=s.attr("src"),_="svg"===o.substr(-3,3);e("body").append(e("<div />",{id:"et-define-logo-wrap",style:"position: fixed; bottom: 0; opacity: 0;"})),i=e("#et-define-logo-wrap"),_&&i.addClass("svg-logo"),i.html(s.clone().css({display:"block"}).removeAttr("id")),a=i.find("img").width(),n=i.find("img").height(),s.attr({"data-actual-width":a,"data-actual-height":n}),i.remove(),t(!0)}var Y,B=e("ul.nav"),D=(e("#et_search_icon"),300),F=!0;B.find("li").hover(function(){e(this).closest("li.mega-menu").length&&!e(this).hasClass("mega-menu")||(e(this).addClass("et-show-dropdown"),e(this).removeClass("et-hover").addClass("et-hover"))},function(){var t=e(this);t.removeClass("et-show-dropdown"),setTimeout(function(){t.hasClass("et-show-dropdown")||t.removeClass("et-hover")},200)}),B.find(".menu-item-has-children > a").on("touchstart",function(){Y=(new Date).getTime()}).on("touchend",function(){var t=(new Date).getTime();if(t>=Y+D)F=!0;else{F=!1;var i=e(this).parent("li");i.hasClass("et-hover")?i.trigger("mouseleave"):i.trigger("mouseenter")}Y=0}).click(function(){return!!F}),B.find("li.mega-menu").each(function(){var t=e(this),i=t.children("ul").children("li"),a=i.length;4>a&&t.addClass("mega-menu-parent mega-menu-parent-"+a)}),I.length&&$.length<1&&(i(),e(window).resize(function(){i()})),e("ul.et_disable_top_tier").length&&e("ul.et_disable_top_tier > li > ul").prev("a").attr("href","#"),e(".et_vertical_nav").length&&e("#main-header").height()<e("#et-top-navigation").height()&&e("#main-header").height(e("#et-top-navigation").height()+e("#logo").height()+100),window.et_calculate_header_values=function(){var t=e("#top-header"),i=t.length&&t.is(":visible")?t.innerHeight():0,_=e("#wpadminbar").length?e("#wpadminbar").innerHeight():0,d=e(".et_header_style_slide .et_slide_in_menu_container");if(a=e("#main-header").innerHeight()+i,n=90>=a?a-29:a-56,s=n+_,o=i+_,d.length&&!e("body").hasClass("et_pb_slide_menu_active")&&(d.css({right:"-"+d.innerWidth()+"px",display:"none"}),e("body").hasClass("et_boxed_layout"))){var l=u.css("margin-left");g.css({left:l})}};var S=e("#commentform");if("undefined"!=typeof et_pb_form_placeholders_init&&et_pb_form_placeholders_init(S),S.submit(function(){et_pb_remove_placeholder_text(S)}),et_duplicate_menu(e("#et-top-navigation ul.nav"),e("#et-top-navigation .mobile_nav"),"mobile_menu","et_mobile_menu"),et_duplicate_menu("",e(".et_pb_fullscreen_nav_container"),"mobile_menu_slide","et_mobile_menu","no_click_event"),e("#et-secondary-nav").length&&e("#et-top-navigation #mobile_menu").append(e("#et-secondary-nav").clone().html()),e(".et_slide_in_menu_container").length){var V=e(".et_slide_in_menu_container").find(".menu-item-has-children > a");V.length&&V.append('<span class="et_mobile_menu_arrow"></span>')}if(d.data("previous-width",d.width()),e(window).resize(function(){var t=x.width(),i=d.data("previous-width"),a=d.css("width"),n="undefined"!=typeof a?"%"!==a.substr(-1,1):"",s=n?d.width():d.width()/100*t,o=i!==s,_=e(".et_slide_in_menu_container");if(l&&o){"undefined"!=typeof r&&clearTimeout(r);var r=setTimeout(function(){z(),"function"==typeof et_fix_fullscreen_section&&et_fix_fullscreen_section()},200);d.data("previous-width",s)}if(c&&A(),e("#wpadminbar").length&&l&&t>=740&&782>=t&&(et_calculate_header_values(),W(0)),O(),_.length&&!e("body").hasClass("et_pb_slide_menu_active")&&(_.css({right:"-"+_.innerWidth()+"px"}),e("body").hasClass("et_boxed_layout")&&l)){var h=u.css("margin-left");g.css({left:h})}if(_.length&&e("body").hasClass("et_pb_slide_menu_active"))if(e("body").hasClass("et_boxed_layout")){var p,h=parseFloat(u.css("margin-left"));u.css({left:"-"+(_.innerWidth()-h)+"px"}),l&&(p=0>_.innerWidth()-2*h?Math.abs(_.innerWidth()-2*h):"-"+(_.innerWidth()-2*h),p<_.innerWidth()&&g.css({left:p+"px"}))}else e("#page-container, .et_fixed_nav #main-header").css({left:"-"+_.innerWidth()+"px"});if(_.length&&e("body").hasClass("et_header_style_fullscreen")){var m=_.find(".et_slide_menu_top").innerHeight();_.css({"padding-top":m+20})}}),e(window).ready(function(){e.fn.fitVids&&e("#main-content").fitVids({customSelector:"iframe[src^='http://www.hulu.com'], iframe[src^='http://www.dailymotion.com'], iframe[src^='http://www.funnyordie.com'], iframe[src^='https://embed-ssl.ted.com'], iframe[src^='http://embed.revision3.com'], iframe[src^='https://flickr.com'], iframe[src^='http://blip.tv'], iframe[src^='http://www.collegehumor.com']"})}),e(window).load(function(){if(l&&et_calculate_header_values(),z(),p&&!m&&($logo_width=e("#logo").width(),h?k.css("padding-right",$logo_width+30):k.css("padding-left",$logo_width+30)),e("p.demo_store").length&&e("#footer-bottom").css("margin-bottom",e("p.demo_store").innerHeight()),e.fn.waypoint){if(r){var i=e("#main-content");i.waypoint({handler:function(i){t(),"down"===i?e("#main-header").addClass("et-fixed-header"):e("#main-header").removeClass("et-fixed-header")}})}if(l){if(v.length&&!$.length&&H.length)if(H.is(".et_pb_fullwidth_section"))var i=H.children(".et_pb_module");else var i=H.find(".et_pb_row");else if(v.length&&!$.length&&b.length)var i=e("#content-area");else var i=e("#main-content");i.waypoint({offset:function(){if(T&&(setTimeout(function(){et_calculate_header_values()},200),T=!1),c)return s-a-200;var e=i.offset();return e.top<s&&(s=0-(s-e.top)),s},handler:function(i){if(t(),"down"===i){if(g.addClass("et-fixed-header"),u.addClass("et-animated-content"),f.addClass("et-fixed-header"),!c&&!v.length&&!e(".mobile_menu_bar_toggle").is(":visible")){var a,n,s,o=f.height(),_=e("body").hasClass("et_vertical_nav");a=g.clone().addClass("et-fixed-header, et_header_clone").css({transition:"none",display:"none"}),n=a.prependTo("body").height(),_||(s=parseInt(u.css("padding-top"))-n-o+1,u.css("margin-top",-s)),e(".et_header_clone").remove()}}else g.removeClass("et-fixed-header"),f.removeClass("et-fixed-header"),u.css("margin-top","-1px");setTimeout(function(){O()},400)}})}c&&A()}}),e('a[href*="#"]:not([href="#"])').click(function(){var t=e(this),i=t.closest(".et_smooth_scroll_disabled").length,a=t.closest(".woocommerce-tabs").length&&t.closest(".tabs").length,n=t.closest(".eab-shortcode_calendar-navigation-link").length,s=t.hasClass("acomment-reply"),o=i||a||n||s;if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname&&!o){var _=e(this.hash);if(_=_.length?_:e("[name="+this.hash.slice(1)+"]"),_.length)return et_pb_smooth_scroll(_,!1,800),!e("#main-header").hasClass("et-fixed-header")&&e("body").hasClass("et_fixed_nav")&&e(window).width()>980&&setTimeout(function(){et_pb_smooth_scroll(_,!1,40,"linear")},780),!1}}),e(".et_pb_section").length>1&&e(".et_pb_side_nav_page").length){var j=0;e("#main-content").append('<ul class="et_pb_side_nav"></ul>'),e(".et_pb_section").each(function(){e(this).height()>0&&($active_class=0==j?"active":"",e(".et_pb_side_nav").append('<li class="side_nav_item"><a href="#" id="side_nav_item_id_'+j+'" class= "'+$active_class+'">'+j+"</a></li>"),e(this).addClass("et_pb_scroll_"+j),j++)}),$side_nav_offset=(20*j+40)/2,e("ul.et_pb_side_nav").css("marginTop","-"+parseInt($side_nav_offset)+"px"),e(".et_pb_side_nav").addClass("et-visible"),e(".et_pb_side_nav a").click(function(){return $top_section="0"==e(this).text(),$target=e(".et_pb_scroll_"+e(this).text()),et_pb_smooth_scroll($target,$top_section,800),!e("#main-header").hasClass("et-fixed-header")&&e("body").hasClass("et_fixed_nav")&&e(window).width()>980&&setTimeout(function(){et_pb_smooth_scroll($target,$top_section,200)},500),!1}),e(window).scroll(function(){$add_offset=e("body").hasClass("et_fixed_nav")?20:-90,e("#wpadminbar").length&&e(window).width()>600&&($add_offset+=e("#wpadminbar").outerHeight()),$side_offset=e("body").hasClass("et_vertical_nav")?e("#top-header").height()+$add_offset+60:e("#top-header").height()+e("#main-header").height()+$add_offset;for(var t=0;t<=e(".side_nav_item a").length-1;t++)e(window).scrollTop()+e(window).height()==e(document).height()?($last=e(".side_nav_item a").length-1,e(".side_nav_item a").removeClass("active"),e("a#side_nav_item_id_"+$last).addClass("active")):e(this).scrollTop()>=e(".et_pb_scroll_"+t).offset().top-$side_offset&&(e(".side_nav_item a").removeClass("active"),e("a#side_nav_item_id_"+t).addClass("active"))})}e(".et_pb_scroll_top").length&&(e(window).scroll(function(){e(this).scrollTop()>800?e(".et_pb_scroll_top").show().removeClass("et-hidden").addClass("et-visible"):e(".et_pb_scroll_top").removeClass("et-visible").addClass("et-hidden")}),e(".et_pb_scroll_top").click(function(){e("html, body").animate({scrollTop:0},800)})),e(".comment-reply-link").length&&e(".comment-reply-link").addClass("et_pb_button"),e("#et_top_search").click(function(){var t=e(".et_search_form_container");t.hasClass("et_pb_is_animating")||(e(".et_menu_container").removeClass("et_pb_menu_visible et_pb_no_animation").addClass("et_pb_menu_hidden"),t.removeClass("et_pb_search_form_hidden et_pb_no_animation").addClass("et_pb_search_visible et_pb_is_animating"),setTimeout(function(){e(".et_menu_container").addClass("et_pb_no_animation"),t.addClass("et_pb_no_animation").removeClass("et_pb_is_animating")},1e3),t.find("input").focus(),O())}),e(".et_close_search_field").click(function(){M()}),e(document).mouseup(function(t){var i=e("#main-header");e(".et_menu_container").hasClass("et_pb_menu_hidden")&&(i.is(t.target)||0!==i.has(t.target).length||M())}),e("#logo").length&&e("#logo").attr("src",e("#logo").attr("src")).load(function(){P()}),e(".footer-widget").each(function(){var t=e(this),i=t.width(),a=t.find(".widget_adsensewidget ins");a.length&&a.width(i)})}),e("#main-header").on("click",".et_toggle_slide_menu",function(){i()}),x.on("swipeleft",function(e){var t=parseInt(x.width()),a=parseInt(e.swipestart.coords[0]);30>=t-a&&i("open")}),x.on("swiperight",function(){e("body").hasClass("et_pb_slide_menu_active")&&i("close")}),e("#page-container").on("click",".et_toggle_fullscreen_menu",function(){var t=e(".et_header_style_fullscreen .et_slide_in_menu_container"),i=t.find(".et_slide_menu_top").innerHeight();t.toggleClass("et_pb_fullscreen_menu_opened"),e("body").toggleClass("et_pb_fullscreen_menu_active"),t.hasClass("et_pb_fullscreen_menu_opened")?(t.addClass("et_pb_fullscreen_menu_animated"),t.css({"padding-top":i+20})):setTimeout(function(){t.removeClass("et_pb_fullscreen_menu_animated")},1e3)}),e(".et_pb_fullscreen_nav_container").on("click","li.menu-item-has-children > a",function(){var t=e(this).closest("li"),i=t.find(">a .et_mobile_menu_arrow"),a=t.find(">ul"),n=i.hasClass("et_pb_submenu_opened");return i.toggleClass("et_pb_submenu_opened"),n?(a.removeClass("et_pb_slide_dropdown_opened"),a.slideToggle(700,"easeInOutCubic")):(a.slideToggle(700,"easeInOutCubic"),a.addClass("et_pb_slide_dropdown_opened")),!1}),e("body").hasClass("et_header_style_fullscreen")){var W=e(".et_header_style_fullscreen .et_slide_in_menu_container");if(W.length){var A=W.find(".et_slide_menu_top").innerHeight();W.css({"padding-top":A+20})}}}(jQuery);
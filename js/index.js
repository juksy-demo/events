"use strict";!function(){window.JUKSY={apiUri:"https://www.juksy.com/api"}}(jQuery),function(){function t(t){t=(t||navigator.userAgent).toLowerCase();var e=t.match(/android\s([0-9\.]*)/);return!!e&&e[1]}parseFloat(t())<4.4&&alert("Android 4.3 以下手機，請使用Chrome瀏覽器閱讀"),window.WebFontConfig={google:{families:["Roboto+Condensed:400,400italic,700,700italic:latin","Open+Sans:400,700,800"]}},window.fbAsyncInit=function(){FB.init({appId:"608477045879026",cookie:!0,xfbml:!0,version:"v2.8"})}}(),function(){function t(){function t(){l.stop(!0,!0).removeClass(x)}var e=$(this).scrollTop();e>b?l.stop(!0,!0).addClass(x):0==e?t():e<b&&a.scroll(_.debounce(t,1e4)),b=e}function e(){r.stop(!0,!0).animate({opacity:1},500)}function n(){var t,e=$(this).index(),n=$(this).parent("ul.submenu").length;0==n&&3==e||(n>0&&(e+=3),t=$('[data-menu="true"]').eq(e).offset().top,v.trigger("click"),$("html,body").animate({scrollTop:t},1e3))}for(var i,r,o,a=$(window),l=$(".nav_01"),s=$("body"),u=$("#template-n01").html(),c=$("#template-n01-more-start").html(),d=$("#template-n01-more-end").html(),f=l.find(".menuWrap ul.menu"),p=f.data("navli")?f.data("navli"):{},h=p.length,m="",g=l.find(".mIcon .open"),v=l.find(".mIcon .close"),y="menuOpen",w="noscroll",b=0,x="scrollout",C=0;C<h;C++){3==C&&(i=Handlebars.compile(c),m+=i());var S={title:p[C]};i=Handlebars.compile(u),m+=i(S),C>=3&&C==h-1&&(i=Handlebars.compile(d),m+=i())}f.html(m),g.click(function(){l.addClass(y),s.addClass(w)}),v.click(function(){l.removeClass(y),s.removeClass(w)}),l.find("ul.share li.fb, ul.share .title").click(function(t){t.preventDefault(),FB.ui({method:"share",href:document.URL},function(){})}),l.find("ul.share li.line a.btn").attr("href","http://line.naver.jp/R/msg/text/?"+document.title+"%0A"+document.URL),a.scroll(_.throttle(t,500)),r=l.find("ul.menu >li"),r.hover(function(){clearTimeout(o),r.not(this).stop(!0,!0).animate({opacity:.5},500),$(this).stop(!0,!0).animate({opacity:1},500)},function(){o=setTimeout(e,300)}),l.find("ul.menu >li").not("notli").click(n),l.find("ul.submenu >li").click(n)}(),function(){function t(t){var e;e=f.eq(t).offset().top,$("html,body").animate({scrollTop:e},1e3)}function e(t,n){return t=t.toString(),t.length<n?e("0"+t,n):t}function n(){var t=f.length,n=r.scrollTop();u.find(".number .total").text(e(t,2));for(var i=0;i<t;i++){n+100>f.eq(i).offset().top&&u.find(".number .now").text(e(i+1,2)),0==n&&u.find(".number .now").text(e(1,2))}}function i(){for(var t=f.length,e=r.scrollTop(),n=0;n<t;n++)if(n!=t-1){var i=f.eq(n).offset().top;e+100>i&&d.css({transform:"translateY("+72*n+"px)"}),0==e&&d.css({transform:"translateY(0)"})}}var r=$(window),o=$(".nav_02_btn"),a=$("body"),l=$(".nav_02"),s=l.find("ul.list li"),u=$(".nav_02_line"),c=u.find(".listWrap ul.list li"),d=u.find(".listWrap .line"),f=$('[data-menu="true"]'),p="open";o.click(function(){$(this).toggleClass(p),l.toggleClass(p),u.toggleClass(p),r.width()<1024&&a.toggleClass("noscroll")}),s.click(function(){t($(this).index()),o.trigger("click")}),c.click(function(){t($(this).index())}),r.width()>=1024&&r.scroll(_.throttle(n,250)),r.width()>=1024&&r.scroll(_.throttle(i,250))}(),function(){var t=$("#header_03_banner"),e=t.lightSlider({item:1,slideMargin:0,addClass:"header_03_banner",speed:1e3,auto:!0,loop:!0,pause:3e3,controls:!1,galleryMargin:0,pager:t.data("pager"),onSliderLoad:function(t){t.parents().find("ul.lSpg >li").click(function(){e.pause()})}})}(),function(){$(".list_04").each(function(){var t=$(this),e=t.find("ul.slides").width(),n=$(window).width();if(n<1024){var i=(e-20-n)/2;t.find(".slidesWrap").scrollLeft(i)}})}(),function(){$(".list_09").each(function(){function t(){nowNum.text(r+1),r==totalLength-1?rightBtn.addClass("end"):rightBtn.removeClass("end"),0==r?leftBtn.addClass("end"):leftBtn.removeClass("end")}function e(){pic.eq(r).removeClass("now"),date.eq(r).removeClass("now"),article.eq(r).removeClass("now")}function n(){pic.eq(r).addClass("now"),date.eq(r).addClass("now"),article.eq(r).addClass("now")}var i=$(this),r=0;pic=i.find("ul.pic li"),date=i.find("ul.dateWrap li"),article=i.find("ul.main li"),totalLength=i.find(".article ul.pic li").length,nowNum=i.find(".nav span.now"),totalNum=i.find(".nav span.total"),navBtn=i.find(".nav .btn"),rightBtn=i.find(".nav .btn.right"),leftBtn=i.find(".nav .btn.left"),totalNum.text(totalLength),navBtn.click(function(){var i=$(this).index();switch(e(),i){case 0:0!==r&&r--;break;case 2:r!==totalLength-1&&r++}n(),t()}),pic.swipe({allowPageScroll:"none",preventDefaultEvents:!1,excludedElements:"",swipeLeft:function(){$(this).index(),e(),r==totalLength-1?r=0:r++,n(),t()},swipeRight:function(){$(this).index(),e(),0==r?r=totalLength-1:r--,n(),t()}})})}(),function(){$(".gallery_01").each(function(t){function e(t,e){o.find(".img").each(function(){var n=$(this).find("img");n.data("width")/n.data("height")>=4/3?n.attr({width:t,height:"auto"}):n.attr({width:"auto",height:e})})}var n=$(window).width(),i=3*n/4,r=(n-800)/2,o=$(this).find(".slider"),a=Math.round(n/800*10)/10,l=n<1024?1:Math.ceil(a),s={addClass:"gallery_01_slider",speed:1e3,controls:!1,gallery:!0,item:1,loop:!0,thumbItem:5,slideMargin:0},u={addClass:"gallery_01_slider",speed:1e3,controls:!0,gallery:!0,item:a,loop:!0,thumbItem:10,slideMargin:0,galleryMargin:10,thumbMargin:15,prevHtml:'<svg class="arrowL" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 60"><polyline points="18.91 0.51 1.17 30.17 18.91 59.38" /></svg>',nextHtml:'<svg class="arrowR" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 60"><polyline points="0.86 0.51 18.61 30.17 0.86 59.38" /></svg>',onSliderLoad:function(t){t.css({"margin-left":r}),t.parents().find("ul.lSGallery").wrap('<div class="galleryWrap"></div>'),t.parent().find(".lSAction >a").width(r)}};o.attr("id","gallery_01_slider"+t),e(n,i),n<1024?(e(n,i),$("#gallery_01_slider"+t).lightSlider(s)):(e(800,600),$("#gallery_01_slider"+t).lightSlider(u));for(var c=document.querySelectorAll(".pswp")[0],d=[],f=o.find(">li"),p=f.length,t=l;t<p-l;t++){var h=f.eq(t).find(".img img"),m=h.attr("src"),g=h.data("width"),v=h.data("height"),y=m;d.push({src:m,w:g,h:v,msrc:y})}var w,b;f.find(".img img").on("click",function(){var t=$(this).parents("li").index();t<l&&(t+=p-2*l),w={shareEl:!1,index:t-l,getThumbBoundsFn:function(t){var e=f.eq(t+l).find(".img img"),n=e.offset(),i=e.width();return{x:n.left,y:n.top,w:i}}},b=new PhotoSwipe(c,PhotoSwipeUI_Default,d,w),b.init()})})}(),function(){var t=$(".social_02"),e=$(window).width();t.each(function(){var t=$(this).find(".photo iframe"),n=t.data("msrc"),i=t.data("pcsrc");e<1024?t.attr("src",n):t.attr("src",i),iFrameResize()})}(),function(){function t(){if($("#footer").length){var t=$(this).scrollTop(),n=$("#footer").offset().top-e.height()-300,i=$(".fixedBtn_01");t>n?i.addClass("show"):0==t&&i.removeClass("show")}}$("ul.fixedBtn_01 li.top").click(function(){$("html,body").animate({scrollTop:0},1e3)}),$("ul.fixedBtn_01 li.share").mousedown(function(){$(".fixedBtnCover_01").addClass("show")}),$(".fixedBtnCover_01 .coverWrap .backCover, .fixedBtnCover_01 .item .arrow").bind("mousedown touchstart",function(){$(".fixedBtnCover_01").removeClass("show")}),$(".fixedBtnCover_01 ul.share li.line .material_btn").click(function(t){t.preventDefault(),window.location.href="http://line.naver.jp/R/msg/text/?"+document.title+"%0A"+document.URL}),$(".fixedBtnCover_01 ul.share li.fb .material_btn").click(function(t){t.preventDefault(),FB.ui({method:"share",href:document.URL},function(){})}),new Clipboard(".fixedBtnCover_01 ul.share li.copy .material_btn",{text:function(){return document.URL}}).on("success",function(){function t(){$(".fixedBtnCover_01 .coverWrap .copytip").removeClass("show")}var e;clearTimeout(e),$(".fixedBtnCover_01 .coverWrap .copytip").addClass("show"),e=setTimeout(t,2e3)});var e=$(window);e.scroll(_.throttle(t,500))}(),(new WOW).init(),$(document).on("showOnScroll",function(){function t(){var t=e.scrollTop(),n=e.height();$(".showOnScroll:not(.animated)").each(function(){var e=$(this),i=e.offset().top;t+n-e.data("show-offset")>i&&e.addClass("animated "+e.data("show-animation"))}),$(".showOnScroll.animated").each(function(){var e=$(this),i=e.offset().top,r=e.data("show-offset"),o=$(this).height();(t+n+r<i||t>i+o+r)&&($(this).removeClass("animated"),$(this).removeClass(e.data("show-animation")))})}var e=$(window);t(),e.scroll(_.throttle(t,250))}),$(document).trigger("showOnScroll"),$(document).on("lazy_image",function(){function t(){for(var t=n.length,r=0;r<t;r++)if(!n.eq(r).hasClass(i)){var o=n.eq(r).offset().top+100,a=e.scrollTop()+e.height()+150;if(o<a){var l=n.eq(r).data("lazyimg");n.eq(r).css("background-image","url("+l+")"),n.eq(r).addClass(i)}}}var e=$(window),n=$('[data-module="lazy_image"]'),i="lazyImgComplete";t(),e.scroll(_.throttle(t,250))}),$(document).trigger("lazy_image"),$(document).on("dotdotdot",function(){$('[data-module="dotdotdot"]').dotdotdot({wrap:"letter"})}),$(document).trigger("dotdotdot"),$(document).on("parallax",function(){var t=$('[data-module="parallax"]');t.each(function(e){var n=e;t.eq(n).css("z-index",-1-n),$(window).on("load scroll",function(){var e=t.eq(n),i=e.parent().height(),r=e.parent().offset().top,o=r+i,a=$(this).scrollTop();a>=r&&a<=o?(e.css("transform","translate3d(0, "+.25*(r-a)+"px, 0)"),e.css("z-index",-1)):a>o?(e.css("transform","none"),e.css("z-index",-t.length-n)):(e.css("transform","none"),e.css("z-index",-1-n))})})}),$(document).trigger("parallax"),$(".list_03_infinit").each(function(){var t,e,n,i=$(this).find(".layoutWrap"),r=".moreBtn",o=0,a=6,l=function(){i.find(r).one("click",function(){$(this).remove(),o+=a,u(o,a),s()})},s=function(){i.append('<div class="articleWrap">'+n+"</div>"),$(document).trigger("lazy_image"),$(document).trigger("dotdotdot"),l()},u=function(r,o){n="";var a={from:r,size:o,tags:i.data("tags"),filter:i.data("filter")};$.ajax({url:JUKSY.apiUri+"/v1.0/search/articles",data:{tags:a.tags,filter:a.filter,from:a.from,size:a.size},type:"GET",dataType:"json",success:function(i){if(console.log("AJAX layout_03 SUCCESS!!!"),i.length){t=$("#entry-template-start").html(),e=Handlebars.compile(t),n+=e();for(var r=0;r<i.length;r++)t=$("#entry-template"+r%2).html(),e=Handlebars.compile(t),n+=e(i[r]);i.length<a.size?n+="</ul>":(t=$("#entry-template-end").html(),e=Handlebars.compile(t),n+=e()),s()}},error:function(){console.log("AJAX layout_03 ERROR!!!")}})};u(o,a)}),$(".list_05_tag").each(function(){var t,e,n,i=$(this).find(".layoutWrap"),r=i.data("engtitle"),o=i.data("title"),a=i.data("description"),l=function(){i.append(n),i.find(".title").html(r),i.find(".detail").html(o),i.find("p.subTitle").html(a),$(document).trigger("lazy_image"),$(document).trigger("dotdotdot")};!function(r,o){n="";var a={from:r,size:o,tags:i.data("tags"),filter:i.data("filter")};$.ajax({url:JUKSY.apiUri+"/v1.0/search/articles",data:{tags:a.tags,filter:a.filter,from:a.from,size:a.size},type:"GET",dataType:"json",success:function(i){if(console.log("AJAX layout_05 SUCCESS!!!"),i.length){t=$("#template-l05-start").html(),e=Handlebars.compile(t),n+=e();for(var r=0;r<i.length;r++)t=$("#template-l05").html(),e=Handlebars.compile(t),n+=e(i[r]);t=$("#template-l05-end").html(),e=Handlebars.compile(t),n+=e(),l()}},error:function(){console.log("AJAX layout_05 ERROR!!!")}})}(0,8)});var YTdeferred=$.Deferred();window.onYouTubeIframeAPIReady=function(){YTdeferred.resolve(window.YT)};var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag),$(function(){var t,e=$("#header_02_player"),n=e.data("videoid"),i=e.data("start"),r=$("#video_02_player"),o=r.data("videoid"),a=r.data("start");YTdeferred.done(function(e){t=new e.Player("header_02_player",{videoId:n,width:560,height:315,playerVars:{rel:0,controls:0,start:i,autoplay:1,loop:1,playlist:n,showinfo:0,modestbranding:1,fs:0,cc_load_policty:0,iv_load_policy:3,autohide:0},events:{onReady:function(t){t.target.mute()}}}),t=new e.Player("video_02_player",{videoId:o,width:1280,height:720,playerVars:{rel:0,controls:0,start:a,autoplay:0,loop:1,playlist:o,showinfo:0,modestbranding:1,fs:0,cc_load_policty:0,iv_load_policy:3,autohide:0},events:{onReady:function(t){function e(){var e=n.parents().find(".title").offset().top,r=i.scrollTop();"true"!=n.data("vplay")&&e<r&&(t.target.playVideo(),n.data("vplay","true"))}var n=$("#video_02_player"),i=$(window);i.width()<1024||(t.target.setPlaybackQuality("hd1080"),n.parents().find(".parallaxContent").click(function(){1==t.target.getPlayerState()?t.target.pauseVideo():t.target.playVideo()}),i.scroll(_.throttle(e,250)))}}})})});
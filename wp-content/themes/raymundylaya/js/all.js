!function(e){function t(o){if(a[o])return a[o].exports;var n=a[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){a(1),a(2),a(3),a(4),e.exports=a(5)},function(e,t){!function(){function e(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}var t,a,o,n,i,r,l;if(t=document.getElementById("site-navigation"),t&&(a=t.getElementsByTagName("button")[0],"undefined"!=typeof a)){if(o=t.getElementsByTagName("ul")[0],"undefined"==typeof o)return void(a.style.display="none");for(o.setAttribute("aria-expanded","false"),-1===o.className.indexOf("nav-menu")&&(o.className+=" nav-menu"),a.onclick=function(){-1!==t.className.indexOf("toggled")?(t.className=t.className.replace(" toggled",""),a.setAttribute("aria-expanded","false"),o.setAttribute("aria-expanded","false")):(t.className+=" toggled",a.setAttribute("aria-expanded","true"),o.setAttribute("aria-expanded","true"))},n=o.getElementsByTagName("a"),i=o.getElementsByTagName("ul"),r=0,l=i.length;r<l;r++)i[r].parentNode.setAttribute("aria-haspopup","true");for(r=0,l=n.length;r<l;r++)n[r].addEventListener("focus",e,!0),n[r].addEventListener("blur",e,!0)}}()},function(e,t){!function(){var e=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,t=navigator.userAgent.toLowerCase().indexOf("opera")>-1,a=navigator.userAgent.toLowerCase().indexOf("msie")>-1;(e||t||a)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t),e&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus()))},!1)}()},function(e,t){!function(){function e(){z.keyboardSupport&&m("keydown",n)}function t(){if(!S&&document.body){S=!0;var t=document.body,a=document.documentElement,o=window.innerHeight,n=t.scrollHeight;if(N=document.compatMode.indexOf("CSS")>=0?a:t,y=t,e(),top!=self)E=!0;else if(n>o&&(t.offsetHeight<=o||a.offsetHeight<=o)){var i=document.createElement("div");i.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+N.scrollHeight+"px",document.body.appendChild(i);var r,l=function(){r||(r=setTimeout(function(){A||(i.style.height="0",i.style.height=N.scrollHeight+"px",r=null)},500))};setTimeout(l,10);var s={attributes:!0,childList:!0,characterData:!1};if(x=new X(l),x.observe(t,s),N.offsetHeight<=o){var c=document.createElement("div");c.style.clear="both",t.appendChild(c)}}z.fixedBackground||A||(t.style.backgroundAttachment="scroll",a.style.backgroundAttachment="scroll")}}function a(e,t,a){if(h(t,a),1!=z.accelerationMax){var o=Date.now(),n=o-L;if(n<z.accelerationDelta){var i=(1+50/n)/2;i>1&&(i=Math.min(i,z.accelerationMax),t*=i,a*=i)}L=Date.now()}if(j.push({x:t,y:a,lastX:t<0?.99:-.99,lastY:a<0?.99:-.99,start:Date.now()}),!H){var r=e===document.body,l=function(o){for(var n=Date.now(),i=0,s=0,c=0;c<j.length;c++){var u=j[c],d=n-u.start,m=d>=z.animationTime,p=m?1:d/z.animationTime;z.pulseAlgorithm&&(p=F(p));var h=u.x*p-u.lastX>>0,f=u.y*p-u.lastY>>0;i+=h,s+=f,u.lastX+=h,u.lastY+=f,m&&(j.splice(c,1),c--)}r?window.scrollBy(i,s):(i&&(e.scrollLeft+=i),s&&(e.scrollTop+=s)),t||a||(j=[]),j.length?R(l,e,1e3/z.frameRate+1):H=!1};R(l,e,0),H=!0}}function o(e){S||t();var o=e.target,n=s(o);if(!n||e.defaultPrevented||e.ctrlKey)return!0;if(p(y,"embed")||p(o,"embed")&&/\.pdf/i.test(o.src)||p(y,"object"))return!0;var i=-e.wheelDeltaX||e.deltaX||0,l=-e.wheelDeltaY||e.deltaY||0;return M&&(e.wheelDeltaX&&g(e.wheelDeltaX,120)&&(i=-120*(e.wheelDeltaX/Math.abs(e.wheelDeltaX))),e.wheelDeltaY&&g(e.wheelDeltaY,120)&&(l=-120*(e.wheelDeltaY/Math.abs(e.wheelDeltaY)))),i||l||(l=-e.wheelDelta||0),1===e.deltaMode&&(i*=40,l*=40),!(z.touchpadSupport||!f(l))||(Math.abs(i)>1.2&&(i*=z.stepSize/120),Math.abs(l)>1.2&&(l*=z.stepSize/120),a(n,i,l),e.preventDefault(),void r())}function n(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==B.spacebar;document.contains(y)||(y=document.activeElement);var n=/^(textarea|select|embed|object)$/i,i=/^(button|submit|radio|checkbox|file|color|image)$/i;if(n.test(t.nodeName)||p(t,"input")&&!i.test(t.type)||p(y,"video")||v(e)||t.isContentEditable||e.defaultPrevented||o)return!0;if((p(t,"button")||p(t,"input")&&i.test(t.type))&&e.keyCode===B.spacebar)return!0;var l,c=0,u=0,d=s(y),m=d.clientHeight;switch(d==document.body&&(m=window.innerHeight),e.keyCode){case B.up:u=-z.arrowScroll;break;case B.down:u=z.arrowScroll;break;case B.spacebar:l=e.shiftKey?1:-1,u=-l*m*.9;break;case B.pageup:u=.9*-m;break;case B.pagedown:u=.9*m;break;case B.home:u=-d.scrollTop;break;case B.end:var h=d.scrollHeight-d.scrollTop-m;u=h>0?h+10:0;break;case B.left:c=-z.arrowScroll;break;case B.right:c=z.arrowScroll;break;default:return!0}a(d,c,u),e.preventDefault(),r()}function i(e){y=e.target}function r(){clearTimeout(k),k=setInterval(function(){_={}},1e3)}function l(e,t){for(var a=e.length;a--;)_[O(e[a])]=t;return t}function s(e){var t=[],a=document.body,o=N.scrollHeight;do{var n=_[O(e)];if(n)return l(t,n);if(t.push(e),o===e.scrollHeight){var i=u(N)&&u(a),r=i||d(N);if(E&&c(N)||!E&&r)return l(t,Y())}else if(c(e)&&d(e))return l(t,e)}while(e=e.parentElement)}function c(e){return e.clientHeight+10<e.scrollHeight}function u(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"hidden"!==t}function d(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function m(e,t){window.addEventListener(e,t,!1)}function p(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function h(e,t){e=e>0?1:-1,t=t>0?1:-1,T.x===e&&T.y===t||(T.x=e,T.y=t,j=[],L=0)}function f(e){if(e)return q.length||(q=[e,e,e]),e=Math.abs(e),q.push(e),q.shift(),clearTimeout(D),D=setTimeout(function(){window.localStorage&&(localStorage.SS_deltaBuffer=q.join(","))},1e3),!w(120)&&!w(100)}function g(e,t){return Math.floor(e/t)==e/t}function w(e){return g(q[0],e)&&g(q[1],e)&&g(q[2],e)}function v(e){var t=e.target,a=!1;if(document.URL.indexOf("www.youtube.com/watch")!=-1)do if(a=t.classList&&t.classList.contains("html5-video-controls"))break;while(t=t.parentNode);return a}function b(e){var t,a,o;return e*=z.pulseScale,e<1?t=e-(1-Math.exp(-e)):(a=Math.exp(-1),e-=1,o=1-Math.exp(-e),t=a+o*(1-a)),t*z.pulseNormalize}function F(e){return e>=1?1:e<=0?0:(1==z.pulseNormalize&&(z.pulseNormalize/=b(1)),b(e))}var y,x,k,D,C={frameRate:150,animationTime:400,stepSize:120,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},z=C,A=!1,E=!1,T={x:0,y:0},S=!1,N=document.documentElement,q=[],M=/^Mac/.test(navigator.platform),B={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},z=C,j=[],H=!1,L=Date.now(),O=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),_={};window.localStorage&&localStorage.SS_deltaBuffer&&(q=localStorage.SS_deltaBuffer.split(","));var I,R=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,a){window.setTimeout(e,a||1e3/60)}}(),X=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,Y=function(){var e;return function(){if(!e){var t=document.createElement("div");t.style.cssText="height:10000px;width:1px;",document.body.appendChild(t);var a=document.body.scrollTop;document.documentElement.scrollTop;window.scrollBy(0,1),e=document.body.scrollTop!=a?document.body:document.documentElement,window.scrollBy(0,-1),document.body.removeChild(t)}return e}}();"onwheel"in document.createElement("div")?I="wheel":"onmousewheel"in document.createElement("div")&&(I="mousewheel"),I&&(m(I,o),m("mousedown",i),m("load",t))}()},function(e,t){function a(e){var t=/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;return t.test(e)}jQuery("#notify").on("click",function(){return!!a(jQuery("#email-notify").val())});var o=document.createElement("script");o.src="https://www.youtube.com/iframe_api";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(o,n);jQuery(document).ready(function(e){function t(t){clearTimeout(a),a=setTimeout(function(){i.scrollTop()>=50?(e("header#masthead").hasClass("scrolled")||e("header#masthead").addClass("onscroll"),n=setTimeout(function(){e("header#masthead").removeClass("onscroll"),e("header#masthead").addClass("scrolled")},200)):(e("header#masthead").removeClass("onscroll"),e("header#masthead").removeClass("scrolled")),i.scrollTop()+i.height()>r.height()-100},o)}var a=null,o=100,n=null,i=e(window),r=e(document),l=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(l=!0),l&&(e("#banner").height("auto"),e("header#masthead").css({"background-color":"#34495e"}),e(".loop-container").css({width:"75%",height:"90px","border-bottom":"1px solid white"}),e(".loop-container hr").css({width:"100%"}));var s=e("[rvy-parallax-img]").attr("src");e("#bgImage").attr("src",s).load(function(){l&&e("#bgImage").remove(),l||(setTimeout(function(){e(".loop-container").addClass("active")},1e3),setTimeout(function(){e(".loop-container").addClass("active-height").addClass("add-border-bottom")},1800)),setTimeout(function(){var t=e(".loop-container p"),a=0;e(t[0]).show(),function o(){t.delay(2e3).fadeOut(300).eq(++a%t.length).fadeIn(500,o)}()},2e3)}),l||(i.off("scroll",t).on("scroll",t),i.scrollTop()>=50&&(e("header#masthead").hasClass("scrolled")||e("header#masthead").addClass("onscroll"),n=setTimeout(function(){e("header#masthead").removeClass("onscroll"),e("header#masthead").addClass("scrolled")},200))),smoothScroll.init({speed:3500,easing:"easeInOutQuint",offset:50,updateURL:!1});var c,u=e("#myNavbar ul"),d=u.outerHeight()+50,m=u.find("a"),p=m.map(function(){var t=e(e(this).attr("href"));if(t.length)return t});e(window).scrollTop()+e(window).height()==e(document).height()&&m.parent().removeClass("active").end().filter("[href=#contact]").parent().addClass("active"),e(window).scroll(function(){if(e(window).scrollTop()+e(window).height()==e(document).height())o="contact",c=o,m.parent().removeClass("active").end().filter("[href='#contact']").parent().addClass("active");else{var t=e(this).scrollTop()+d,a=p.map(function(){if(e(this).offset().top<t)return this});a=a[a.length-1];var o=a&&a.length?a[0].id:"";c!==o&&(c=o,m.parent().removeClass("active").end().filter("[href='#"+o+"']").parent().addClass("active"))}})})},function(e,t){jQuery(document).ready(function(e){function t(t){e(t).css({height:e(t).attr("rvy-parallax-img")+"%",position:"absolute",width:"auto"});var a=(e(window).scrollTop(),e(window).height()),o=e(t).parent().outerHeight(),n=e(t).parent().get(0).getBoundingClientRect().top,i=0,r=0,l=e(t).outerHeight();i=n>=a?0:n<=-o?1:(n+o)/(a+o),r=(i+e(t).attr("rvy-parallax-offset")/100)*(l-o)*-1,e(t).css({transform:"translate3d(0,"+r+"px,0)"})}function a(){n(a),e("[rvy-parallax-img]").each(function(e,a){t(a)})}var o=!1;if((/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(o=!0),!o){var n=requestAnimationFrame||mozRequestAnimationFrame||webkitRequestAnimationFrame||msRequestAnimationFrame;a()}})}]);
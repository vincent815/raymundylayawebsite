/**
 * Created by Raymund on 3/29/2016.
 */

jQuery("#notify").on("click",function(){
    if( !isValidEmailAddress( jQuery("#email-notify").val() ) ) {
        return false;
    }
    return true;
})
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        controls:0,
        videoId: 'dQw4w9WgXcQ',
        playerVars : {
            'controls': 0,
            'rel' : 0,
            'showinfo':0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    jQuery('#myModal').on('shown.bs.modal', function (e) {
        event.target.playVideo();
    })

    jQuery('#myModal').on('hidden.bs.modal', function (e) {
        player.stopVideo();
    })
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        //setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}


jQuery(document).ready(function($){
    var _throttleTimer = null;
    var _throttleDelay = 100;
    var _addClassTimeout = null;
    var $window = $(window);
    var $document = $(document);
    var isMobile = false;

    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;


    if(isMobile){
        $("#banner").height('auto');
        $("header#masthead").css({'background-color':'#34495e'});
        $(".loop-container").css({
            'width':'75%',
            'height':'90px',
            'border-bottom':'1px solid white'
        });
        $(".loop-container hr").css({'width':'100%'});
    }
    var imageUrl = $('[rvy-parallax-img]').attr('src')

    $('#bgImage').attr('src',imageUrl).load(function() {
        if(isMobile){
            $('#bgImage').remove(); // prevent memory leaks
        }
        if(!isMobile){
            setTimeout(function(){
                $(".loop-container").addClass('active');
            },1000);
            setTimeout(function(){
                $('.loop-container').addClass('active-height').addClass('add-border-bottom');
            },1800);
        }

        setTimeout(function(){
            var el = $('.loop-container p'),
                i = 0;
            $(el[0]).show();
            (function loopP(){
                el.delay(2000).fadeOut(300).eq(++i%el.length).fadeIn(500, loopP);
            }());
        },2000);

    });

    //mouse scrolled
    if(!isMobile){
        $window
            .off('scroll', ScrollHandler)
            .on('scroll', ScrollHandler);

        if($window.scrollTop() >= 50 ){
            if(!$("header#masthead").hasClass('scrolled')){
                $("header#masthead").addClass('onscroll');
            }

            _addClassTimeout  = setTimeout(function(){
                $("header#masthead").removeClass('onscroll');
                $("header#masthead").addClass('scrolled');
            },200);
        }
    }
    


        function ScrollHandler(e) {

            clearTimeout(_throttleTimer);
            _throttleTimer = setTimeout(function () {
                if($window.scrollTop() >= 50 ){

                    if(!$("header#masthead").hasClass('scrolled')){
                        $("header#masthead").addClass('onscroll');
                    }

                    _addClassTimeout = setTimeout(function(){
                      $("header#masthead").removeClass('onscroll');
                      $("header#masthead").addClass('scrolled');
                    },200);
                }else {
                    //clearTimeout(_addClassTimeout);
                    $("header#masthead").removeClass('onscroll');
                    $("header#masthead").removeClass('scrolled');
                }
                
                //do work
                if ($window.scrollTop() + $window.height() > $document.height() - 100) {
                    //alert("near bottom!");
                }

            }, _throttleDelay);
        }

    smoothScroll.init({
        speed: 3500,
        easing: 'easeInOutQuint',
        offset: 50,
        updateURL: false
    });

    // Cache selectors
    var lastId,
        topMenu = $("#myNavbar ul"),
        topMenuHeight = topMenu.outerHeight()+50,
    // All list items
        menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

if($(window).scrollTop() + $(window).height() == $(document).height()) {
    menuItems
            .parent().removeClass("active")
            .end().filter("[href=#contact]").parent().addClass("active");
}
// Bind to scroll
    $(window).scroll(function(){
       
        
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            id = 'contact';
            lastId = id;
            menuItems
                    .parent().removeClass("active")
                    .end().filter("[href='#contact']").parent().addClass("active");
        }
        else {
             // Get container scroll position
            var fromTop = $(this).scrollTop()+topMenuHeight;

            // Get id of current scroll item
            var cur = scrollItems.map(function(){
                
                if ($(this).offset().top < fromTop)
                    return this;
            });
            // Get the id of the current element
            cur = cur[cur.length-1];
            var id = cur && cur.length ? cur[0].id : "";
            
            if (lastId !== id) {
                lastId = id;
                // Set/remove active class
                menuItems
                    .parent().removeClass("active")
                    .end().filter("[href='#"+id+"']").parent().addClass("active");
            }
        }
    });

});


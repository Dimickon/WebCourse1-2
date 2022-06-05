$(document).ready(function() {
    let intro = $("#intro");
    let header = $('#header');
    let video = $('#company__video');
    let introH = intro.innerHeight();
    let headerH = header.innerHeight();
    let scrollTop = $(window).scrollTop();

    /* Header class on scroll
    =====================================*/

    headerScroll();
    headerNoneForVideo();

    $(window).on("scroll  resize", function() {
        if ((video).length) {
            console.log('1');
            headerNoneForVideo();
        }

        else {
            console.log('0');
            headerScroll();
        }
    });

    function headerScroll() {
        introH = intro.innerHeight();
        headerH = header.innerHeight();

        let scrollTop = $(this).scrollTop();

        if( scrollTop >= (introH - headerH) ) {
            header.addClass("header--dark");
        } else {
            header.removeClass("header--dark");
        }
    }

    function headerNoneForVideo() {
        let video = $('#company__video');
        let videoH = video.innerHeight();
        let scrollTop = $(this).scrollTop();
        if (scrollTop < videoH) {
            header.addClass("header--none");
            header.removeClass("header--dark");
        }

        else {
            header.removeClass("header--none");
            header.addClass("header--dark");
        }
    }

    /* Categories
    =====================================*/

    $('.rating__categories').click(function(e){
        e.preventDefault();

        $('.rating__categories').removeClass('rating__categories--active');
        $('.rating__diagram').removeClass('rating__diagram--active');

        $(this).addClass('rating__categories--active');
        $($(this).attr('href')).addClass('rating__diagram--active');
    });
    $('.rating__categories:first').click();
});
$(document).ready(function() {
    $('.rating__categories').click(function(e){
        e.preventDefault();

        $('.rating__categories').removeClass('rating__categories--active');
        $('.rating__diagram').removeClass('rating__diagram--active');

        $(this).addClass('rating__categories--active');
        $($(this).attr('href')).addClass('rating__diagram--active');
    });
    $('.rating__categories:first').click();
});

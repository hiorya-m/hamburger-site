function sidebarHide() {
    $('.is-sidebar').hide();
    $('.is-fade').hide();
}

function pcSidebar() {
    let $window = $(this).width();
    
    if($window > 1440) {
        $('.is-sidebar').show()
    }
}

$(document).ready(function() {
    // $('.is-sidebar').hide();
    // $('.is-fade').hide();
    sidebarHide();
    
    // let $window = $(this).width();

    // if($window > 1440) {
    //     $('.is-sidebar').show()
    // }
    pcSidebar();
});

$(window).resize(function() {
    // $('.is-sidebar').hide();
    // $('.is-fade').hide();
    sidebarHide();

    // let $window = $(this).width();

    // if($window > 1440) {
    //     $('.is-sidebar').show()
    // }
    pcSidebar();
});



$('.is-open').on('click', function () {
    $('.is-fade').show();
    $('.is-sidebar').stop(true).animate({ 'width': 'toggle' });
});

$('.is-close').on('click', function () {
    $('.is-fade').hide();
    $('.is-sidebar').stop(true).animate({ 'width': 'toggle' });
});
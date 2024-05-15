$(function (){

    // init wow animations
    new WOW().init();

    // main menu functions
    $('.menu-toggle').click(function (){
        $('.main-menu').addClass('open');
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
    });
    $('#closeMainMenu').click(function (){
        $('.main-menu').removeClass('open');
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    });

    $('.search-button,.mobile-search-button').click(function (){
        let myModalEl = document.getElementById('searchModal');
        let modal = bootstrap.Modal.getOrCreateInstance(myModalEl);
        modal.show();
    });

    $(document).on('click','.submenu-toggle',function (){
        let submenu = $(this).prev('ul');
        if (submenu.hasClass('show')){
            submenu.removeClass('show');
        }else{
            submenu.addClass('show');
        }
    });

    initMobileMenu();
    $( window ).resize(function() {
        initMobileMenu();
    });
});
let isMenuInitialized = false;
function initMobileMenu(){
    let width = $(window).width();
    let menuItem = $('.main-menu li.has-submenu');
    if (width < 992){
        if (!isMenuInitialized){
            menuItem.append('<span class="submenu-toggle"><i class="icon-chevron-down"></i></span>');
            isMenuInitialized = true;
        }
    }else{
        $('.submenu-toggle').remove();
        isMenuInitialized = false;
    }
}
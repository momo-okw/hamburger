$(function() {

    var timer = false;
    $(window).resize(function() {
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
        location.reload();
        }, 200);
    });

   
        if (window.matchMedia("(max-width: 960px)").matches) {

            $(".p-sidebar__title").on("click",function () {
                $(".p-sidebar").addClass('active');
                $(".p-sidebar__title").addClass('active');
                $(".p-sidebar__batsu").addClass('active');
                $(".p-sidebar__bg").addClass('active');
                $(".l-wrapper--main").addClass('active');
                
            });
            $(".p-sidebar__batsuwrapper").on("click",function () {
                $(".p-sidebar").removeClass('active');
                $(".p-sidebar__title").removeClass('active');
                $(".p-sidebar__batsu").removeClass('active');
                $(".p-sidebar__bg").removeClass('active');
                $(".l-wrapper--main").removeClass('active');
                
            });


        }
    });




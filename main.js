$(function() {

   
        if (window.matchMedia("(max-width: 960px)").matches) {

            $(".p-sidebar__title").on("click",function () {
                $(".p-sidebar").addClass('active');
                $(".p-sidebar__title").addClass('active');
                $(".p-sidebar__batsu").addClass('active');
                $(".p-sidebar__bg").addClass('active');
                console.log("aa")
            });
            $(".p-sidebar__batsu").on("click",function () {
                $(".p-sidebar").removeClass('active');
                $(".p-sidebar__title").removeClass('active');
                $(".p-sidebar__batsu").removeClass('active');
                $(".p-sidebar__bg").removeClass('active');
                console.log("aa")
            });


        } else {
            //何もしない
        
        }
    });




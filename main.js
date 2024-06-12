$(function() {

   
        if (window.matchMedia("(max-width: 960px)").matches) {

            $(".p-sidebar__title").on("click",function () {
                $(".l-sidebar").toggleClass('active');
                $(".p-sidebar__title").toggleClass('active');
                console.log("aa")
            });
        } else {
            //何もしない
        
        }
    });




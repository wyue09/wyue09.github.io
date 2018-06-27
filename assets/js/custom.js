 jQuery(function($) {

        $(".sidebar-dropdown > a").click(function(){
	        $(".sidebar-submenu").slideUp(250);
        	if ($(this).parent().hasClass("active")){
 		         $(".sidebar-dropdown").removeClass("active");
 		         $(this).parent().removeClass("active");
        	}else{
        		$(".sidebar-dropdown").removeClass("active");
        		$(this).next(".sidebar-submenu").slideDown(250);
        	 	$(this).parent().addClass("active");
        	}
        });

        $(".sidebar-submenu li a").click(function(){
          $(".sidebar-submenu li").removeClass("active");
        });

        $(".sidebar-submenu .nav-link").click(function(){

          if (!$(this).parent().hasClass("active")){
            $(window).scrollTop(0);
        	}
        });

        $(".anchor").click(function(){
            $(window).scrollTop(0);
        });
  

        $(".sub-dropdown > a").click(function(){
	        $(".sub-submenu").slideUp(250);
        	if ($(this).parent().hasClass("active")){
 		         $(".sub-dropdown").removeClass("active");
 		         $(this).parent().removeClass("active");
        	}else{
        		$(".sub-dropdown").removeClass("active");
        		$(this).next(".sub-submenu").slideDown(250).addClass("active");
        	 	$(this).parent().addClass("active");
        	}
        });

        $(".sidebar-brand > a").click(function(){
          $("li").removeClass("active");
          $(".sidebar-submenu").slideUp(250);
        });
        $(".anchor[href='#home']").click(function(){
          $("li").removeClass("active");
          $(".sidebar-submenu").slideUp(250);
        });

        $(function(){
            $('.anchor').on('click', function(){
              var $thislink=$(this).attr("href");
              var $navlink=$(".nav-link").filter(function(){
                return $(this).attr("href")==$thislink;
              });

              if ($navlink.parents(".sidebar-dropdown").hasClass("active")){
                $(".sidebar-submenu li").removeClass("active");
     		         $navlink.parent().addClass("active");
            	}else{
                $(".sidebar-submenu li").removeClass("active");
                $(".sidebar-dropdown").removeClass("active");
                $navlink.parent().addClass("active");
                $navlink.parents(".sidebar-dropdown").addClass("active");
                $(".sidebar-submenu").slideUp(250);
                 $navlink.parents(".sidebar-submenu").slideDown(250);
              }
            });
        });

         $("#toggle-sidebar").click(function(){
	         $(".page-wrapper").toggleClass("toggled");
       	 });

           if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                   $(".sidebar-content").mCustomScrollbar({
                            axis:"y",
                            autoHideScrollbar: true,
                            scrollInertia: 300
                    });
                    $(".sidebar-content").addClass("desktop");

            }
    });


// dropdown menu on responsive design

    $(".right-menu").on('click',function(event){
    	event.stopPropagation();
    	$(".sidemnu").toggle(function(){
      $(".sidemnu").animate({display:'block'}, "slow");
      });
    });
    $(document).click( function(){
          $(".sidemnu").hide();
      });

    // alert dropdown Notifications


    $(".sidenotifiction").on('click',function(event){
    	event.stopPropagation();
    	$(".sidenotification").toggle(function(){
      $(".sidenotification").animate({display:'block'}, "slow");
      });
    });
    $(document).click( function(){
          $(".sidenotification").hide();
      });


// settings dropdown menu

  
  $('#settings-open').on('click',function(event){
    event.stopPropagation();
    $('#aside-navhide').toggle(function(){
      $('#aside-navhide').animate({display:'block'},
        );
    });
    $('#aside-navhide').click(function(){
      $('#aside-navhide').hide();
    })
  })
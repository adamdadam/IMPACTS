$(function(){
  var window_focus = true;

  $(window).focus(function() {
      window_focus = true;
  })
      .blur(function() {
         window_focus = false;
  });

  $(document).one('click',function() {
     setInterval(function() {
      if(window_focus == false){
       	//what to do?
      }
    }, 1000);
  });

});


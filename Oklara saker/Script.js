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
        console.log("false");
      }else{
        console.log("true");
      }
    }, 1000);
  });

});


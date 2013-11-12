//Foucs Check
var window_focus = true;
$(window).focus(function() {
    window_focus = true;
})
    .blur(function() {
       window_focus = false;
});

$(document).one('click',function() {
   setInterval(function() { $('body').append('has focus? ' + window_focus + '<br>'); }, 1000);
});
//

$(function(){
  var clickedBool=0;
  var OMP=[0,0];
  var NMP=[0,0];
  $(document).keydown(function(){
    clickedBool = 1;
  });



  setInterval(function(){
    OMP = NMP;
    $(document).on("mousemove",function(e){
        NMP = [e.pageX,e.pageY];
    });

    if(OMP[0] == NMP[0] && OMP[1] == NMP[1]){
      clickedBool = 0;
      console.log("mouse " + OMP[0] + " =? " + NMP[0]);
      console.log("mouse " + OMP[1] + " =? " + NMP[1]);
    }else{
      clickedBool = 1;
      console.log("one");
    }

    if(clickedBool == 0){
      alert("You are afk!");
    }
    clickedBool = 0;
  },10000);
});
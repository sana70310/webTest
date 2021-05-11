$(function(){
  // var overlayY = $(window).height();
  // $("body").css("height", overlayY + "px");
  // $("#parent").css("height", overlayY + "px");
  var overlayY = $(window).height();
  $("#overlay-menu").css("height", overlayY + "px");
  
  

  $("#relimg img:not(:first-child)").hide();
  setInterval(function() {
    $("#relimg img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo("#relimg");
  },5000);

  var relml = $('#relmen').width();
  $("#relmen").height(relml);
  var absml = $('#absmen').width();

  // var overlayY = $(window).height();
  // $("#overlay").css("height", overlayY + "px");
    

  function action(){
    var mode = 0;
    var canvas = document.getElementById('cv1');
    if(canvas.getContext){
      var ctx1 = canvas.getContext('2d');
      var ctx2 = canvas.getContext('2d');

      // ctx1
      ctx1.beginPath();
      ctx1.strokeStyle = 'white';
      ctx1.lineWidth = '2';

      ctx1.moveTo(0,1);
      ctx1.lineTo(absml,1);
      ctx1.stroke();

      ctx1.moveTo(0,absml-1);
      ctx1.lineTo(absml,absml-1);
      ctx1.stroke();

      ctx1.closePath();

      // ctx2
      ctx2.beginPath();
      ctx2.strokeStyle = 'white';
      ctx2.lineWidth = '2';

      ctx2.moveTo(0,absml/2);
      ctx2.lineTo(absml,absml/2);
      ctx2.stroke();

      ctx2.closePath();
    }
    function onClick() {
      if(mode===0){
        mode = 1;
        draw0();
        $("#relmen").attr("id","open");
        $("#overlay").fadeIn();
      }else if(mode===1){
        mode = 2;
        draw1();
        $("#open").attr("id","close");
        $("#overlay").fadeOut();
      }else{
        mode = 1;
        draw0();
        $("#close").attr("id","open");
        $("#overlay").fadeIn();
      }
    }
    function draw0() {
      var y = 0;
      var timer = setInterval(function(){
        ctx1.clearRect(0,0,absml+1,absml+1);
        ctx2.clearRect(0,0,absml+1,absml+1);

        // ctx1
        ctx1.beginPath();
        ctx1.strokeStyle = 'white';
        ctx1.globalAlpha = 1;
        ctx1.lineWidth = '2';

        ctx1.moveTo(0,0);
        ctx1.lineTo(absml,y);
        ctx1.stroke();

        ctx1.moveTo(0,absml-1);
        ctx1.lineTo(absml,absml-y-1);
        ctx1.stroke();

        ctx1.closePath();

        // ctx2
        ctx2.beginPath();
        ctx2.strokeStyle = 'white';
        ctx2.globalAlpha = 1 - y/absml;
        ctx2.lineWidth = '2';
        ctx2.moveTo(0,absml/2);
        ctx2.lineTo(absml,absml/2);
        ctx2.stroke();

        ctx2.closePath();

        y++;

        if(y>absml){
          clearInterval(timer);
        }
      },3);
    }
    function draw1() {
      var y = absml;
      var timer = setInterval(function(){
        ctx1.clearRect(0,0,absml+1,absml+1);
        ctx2.clearRect(0,0,absml+1,absml+1);

        // ctx1
        ctx1.beginPath();
        ctx1.strokeStyle = 'white';
        ctx1.globalAlpha = 1;
        ctx1.lineWidth = '2';

        ctx1.moveTo(0,0);
        ctx1.lineTo(absml,y);
        ctx1.stroke();

        ctx1.moveTo(0,absml-1);
        ctx1.lineTo(absml,absml-y-1);
        ctx1.stroke();

        ctx1.closePath();

        // ctx2
        ctx2.beginPath();
        ctx2.strokeStyle = 'white';
        ctx2.globalAlpha = 1 - y/absml;
        ctx2.lineWidth = '2';
        ctx2.moveTo(0,absml/2);
        ctx2.lineTo(absml,absml/2);
        ctx2.stroke();

        ctx2.closePath();

        y--;

        if(y<0){
          clearInterval(timer);
        }
      },3);
    }
    canvas.addEventListener('click', onClick, false);
  }
  action();

});

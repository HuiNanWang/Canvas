$(document).ready(function(){
	 //header头部导航菜单
  $(".nav-icon").click(()=>{
    $(".drop").slideToggle(500);
  })


//画布上鼠标进入显示小女孩
  var ctx=canvas.getContext("2d");
  var p3=new Image();
  p3.src="img/home/2.png";
  p3.onload=function(){
	canvas.onmousemove=function(e){
	  x=e.offsetX;
	  y=e.offsetY;
	};
	var timer=setInterval(function(){
	  ctx.clearRect(0,0,1200,1200);
	  ctx.drawImage(p3,x-p3.width/2,y-p3.height/2);
	},50);
	canvas.onmouseleave=function(e){
	  x=1800;
	  y=1200;
	};
  }



/**背景图片轮播*/
	  //切换背景
  var imgs=[
    '1.jpg',
    '2.jpg',
    '3.jpg'
  ]
  var i=0;
  var str="";
  var timer=setInterval(function(){
    str="url('"+imgs[i]+"')";
    i++;
    $("#bg-slider").fadeOut(10,function(){$(this).css("backgroundImage",str)}).fadeIn(1000);
    if(i==3)i=0;
  },3000);

/**相册切换图片*/

  //切换图片
  $("#sec1 li").click(function(){
    $(this).css("z-index",1000).css("transform","rotate(0deg)").css("transform-origin","50% 50%");
    $(this).siblings().removeClass().css("transform","rotate(0deg)").css("transform-origin","50% 50%").css("opacity",0)
  })
  var $lis=$("#sec1 li");
  $("#btn1").click(function(){
    $lis.eq(0).css("transform","rotate(-60deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",10)
    $lis.eq(1).css("transform","rotate(-42.86deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",11)
    $lis.eq(2).css("transform","rotate(-25.71deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",12)
    $lis.eq(3).css("transform","rotate(-8.57deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",13)
    $lis.eq(4).css("transform","rotate(8.57deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",14)
    $lis.eq(5).css("transform","rotate(25.71deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",15)
    $lis.eq(6).css("transform","rotate(42.86deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",16)
    $lis.eq(7).css("transform","rotate(60deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",17)
  });
  $("#btn2").click(function(){
    $lis.attr("style","");
  });





})
 

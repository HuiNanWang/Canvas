$(document).ready(function(){
	 //header头部导航菜单
  $(".nav-icon").click(()=>{
    $(".drop").slideToggle(500);
  })

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


})
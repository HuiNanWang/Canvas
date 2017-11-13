
  var container=document.querySelector(".container");
  var  ctr1=document.querySelector(".ctr1");
  var ctr1Img=document.querySelector(".ctr1 img");
  var v3=document.getElementById("v3");
  console.log(container,ctr1,ctr1Img,v3);
  container.onmouseover=function(){
    ctr1.style.display="block";
  };
  container.onmouseout=function(){
    ctr1.style.display="none";
  };
  ctr1.onclick=function(e){
    e.preventDefault();
    console.log(v3.paused);
    if(v3.paused){
      v3.play();
      ctr1Img.src="img/home/pause.png";
    }else{
      v3.pause();
      ctr1Img.src="img/home/play.png";
    }
  };
    var ad=document.querySelector(".ad");
    v3.onplay=function(){
      ad.style.dispaly="none";
    };
    v3.onpaused=function(){
      ad.style.dispaly="block";
    };
     


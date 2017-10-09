var selTop = document.getElementById("topImg");
var selRight = document.getElementById("rightImg");
var selBot = document.getElementById("botImg");
var selLeft = document.getElementById("leftImg");

var selected = document.getElementById("topImg");



//// change the bottom panel//////
selTop.addEventListener("click", function(){
    selected = topImg;
    document.getElementById("img1Panel").src="box1/img1.jpg"
    document.getElementById("img2Panel").src="box1/img3.jpg"
    document.getElementById("img3Panel").src="box1/img4.jpg"
    
});

selRight.addEventListener("click", function(){
    selected = rightImg;
    document.getElementById("img1Panel").src="box2/img1.jpg"
    document.getElementById("img2Panel").src="box2/img2.jpg"
    document.getElementById("img3Panel").src="box2/img3.jpg"
});

selBot.addEventListener("click", function(){
    selected = botImg;
    document.getElementById("img1Panel").src="box3/img1.jpg"
    document.getElementById("img2Panel").src="box3/img2.jpg"
    document.getElementById("img3Panel").src="box3/img3.jpg"
    
});
selLeft.addEventListener("click", function(){
    selected = leftImg;
    document.getElementById("img1Panel").src="box4/img1.jpg"
    document.getElementById("img2Panel").src="box4/img2.jpg"
    document.getElementById("img3Panel").src="box4/img3.jpg"
    
});




//// Move the image/////
document.getElementById("upArrow").addEventListener("click", function(){
    selected.style.top = selected.offsetTop +75 -20 +"px";
});

document.getElementById("leftArrow").addEventListener("click", function(){
    selected.style.left = selected.offsetLeft +150 -20 +"px";
});


document.getElementById("rightArrow").addEventListener("click", function(){
    selected.style.left = selected.offsetLeft +150 +20 +"px";
});
document.getElementById("downArrow").addEventListener("click", function(){
    selected.style.top = selected.offsetTop +75 +20 +"px";
});
//Change the image from panel//
document.getElementById("img1Panel").addEventListener("click", function(){

    selected.src=document.getElementById("img1Panel").getAttribute('src');
});
document.getElementById("img2Panel").addEventListener("click", function(){

    selected.src=document.getElementById("img2Panel").getAttribute('src');
});
document.getElementById("img3Panel").addEventListener("click", function(){
    selected.src=document.getElementById("img3Panel").getAttribute('src');
});

document.getElementById("zoomIn").addEventListener("click", function(){
    selected.style.width = selected.offsetWidth +75 +"px";
    selected.style.height = selected.offsetHeight +37.5 +"px";
});

document.getElementById("zoomOut").addEventListener("click", function(){
    selected.style.width = selected.offsetWidth -75 +"px";
    selected.style.height = selected.offsetHeight -37.5 +"px";
});

document.getElementById("reset").addEventListener("click", function(){
    selected.removeAttribute("style");
});

document.getElementById("hide").addEventListener("click", function(){
    document.getElementById("cntrPanel").style.bottom = "-50px"; 
});

document.getElementById("show").addEventListener("click", function(){
    document.getElementById("cntrPanel").style.bottom = "0px"; 
});


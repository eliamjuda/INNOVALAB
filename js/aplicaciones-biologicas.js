$(document).ready(function(){


	// var slideIndex = 1;

	$("#menu-slider2").click(function(){
		MenuSlider2();
	});


	$("#menu-slider1").click(function(){
		MenuSlider1();
	});


	$("#menu-slider3").click(function(){
		MenuSlider3();
	});


	$("#menu-slider4").click(function(){
		MenuSlider4();
	});

	var item = 0;
	var left = document.querySelector("#anterior");
	var right = document.querySelector("#siguiente");

	left.addEventListener("click",()=>{changeItem(1)});
	right.addEventListener("click",()=>{changeItem(3)});


	function changeItem(n){
    	if (n == 1) {
      		if (item == 0) {

        		item = 4;

       		} else {

        		item--
        	}
    	} else {
        	if (item == 4) {
        		item = 0;
        	} else {
        		item++
        	}
    	}
    for (let i = 0; i < document.querySelectorAll(".info-slider-caja").length; i++) {
    	document.querySelectorAll(".info-slider-caja")[i].style.display = "none";
    }
    document.querySelectorAll(".info-slider-caja")[item].style.display = "block";
	}



	// $("#siguiente").click(function(){
	// 	Siguiente();


	// });


	

	
	// function Siguiente() {
 //       var i;
 //       var slides = document.getElementsByClassName("info-slider-caja");
 //       for (i = 0; i < slides.length; i++) {
 //       slides[i].style.display = "none";
 //       }

 //       slideIndex++;

 //       if(slideIndex > slides.length) {slideIndex = 1}
 //       slides[slideIndex-1].style.display = "block";

 //   		$("#anterior").click(function(){
			
 //      	 slides[slideIndex-1].style.display = "none";
      	 


	// 	});

 //       // $("#siguiente").addEventListener('click', showSlides);
	// }



	function MenuSlider2() {
		
		$("#menu-slider2").addClass("sombra");
		$("#menu-slider4").removeClass("sombra");
		$("#menu-slider1").removeClass("sombra");
		$("#menu-slider3").removeClass("sombra");


        $("#menu-slider2").css("background","#EE700D");
        $("#menu-slider4").css("background","orange");
        $("#menu-slider1").css("background","orange");
        $("#menu-slider3").css("background","orange");

        $(".info-slider2").css("display","block");
        $(".info-slider4").css("display","none");
        $(".info-slider1").css("display","none");
        $(".info-slider3").css("display","none");
	}

	function MenuSlider1(){

		$("#menu-slider1").addClass("sombra");

		$("#menu-slider4").removeClass("sombra");
		$("#menu-slider2").removeClass("sombra");
		$("#menu-slider3").removeClass("sombra");

        $("#menu-slider1").css("background","#EE700D");
        $("#menu-slider4").css("background","orange");
        $("#menu-slider2").css("background","orange");
        $("#menu-slider3").css("background","orange");

        $(".info-slider1").css("display","block");
        $(".info-slider4").css("display","none");
        $(".info-slider2").css("display","none");
        $(".info-slider3").css("display","none");
	}


	function MenuSlider3(){

		$("#menu-slider3").addClass("sombra");
		$("#menu-slider4").removeClass("sombra");
		$("#menu-slider2").removeClass("sombra");
		$("#menu-slider1").removeClass("sombra");

        $("#menu-slider3").css("background","#EE700D");
        $("#menu-slider4").css("background","orange");
        $("#menu-slider2").css("background","orange");
        $("#menu-slider1").css("background","orange");

        $(".info-slider3").css("display","block");
        $(".info-slider4").css("display","none");
        $(".info-slider2").css("display","none");
        $(".info-slider1").css("display","none");
	}

	function MenuSlider4(){

		$("#menu-slider4").addClass("sombra");
		$("#menu-slider3").removeClass("sombra");
		$("#menu-slider2").removeClass("sombra");
		$("#menu-slider1").removeClass("sombra");

        $("#menu-slider4").css("background","#EE700D");
        $("#menu-slider3").css("background","orange");
        $("#menu-slider2").css("background","orange");
        $("#menu-slider1").css("background","orange");


        $(".info-slider4").css("display","block");
        $(".info-slider3").css("display","none");
        $(".info-slider2").css("display","none");
        $(".info-slider1").css("display","none");
	}

});
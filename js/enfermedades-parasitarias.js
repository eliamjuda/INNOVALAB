$(document).ready(function(){


	$("#menu-slider2").click(function(){
		MenuSlider2();
	});


	$("#menu-slider1").click(function(){
		MenuSlider1();
	});

	function MenuSlider2() {
		
		$("#menu-slider2").addClass("sombra");
		$("#menu-slider1").removeClass("sombra");


        $("#menu-slider2").css("background","#EE700D");
        $("#menu-slider1").css("background","orange");

        $(".info-slider2").css("display","block");
        $(".info-slider2").css("display","block");
	}

	function MenuSlider1(){

		$("#menu-slider1").addClass("sombra");
		$("#menu-slider2").removeClass("sombra");

        $("#menu-slider1").css("background","#EE700D");
        $("#menu-slider2").css("background","orange");

        $(".info-slider2").css("display","none");
	}

});
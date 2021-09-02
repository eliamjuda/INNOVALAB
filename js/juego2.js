
    var tiempo = {
        segundo: 0
    };

    var 
    running_time = null;



    $("#btn-comenzar").click(function(){
                 
    	$(".game-rules").css("display","none");
    	$(".game-bg").css("display","none");
       

            running_time = setInterval(function(){

                // Segundos

                	tiempo.segundo++;

                 if(tiempo.segundo <= 4){

                	$(".cronometro").css("background-color","#42AD13");

                }
                 if(tiempo.segundo >= 5){

                	$(".cronometro").css("background-color","#CAD312");

                }
                if(tiempo.segundo >= 10){

                	$(".cronometro").css("background-color","#E5D10C");

                } if(tiempo.segundo >= 15){

                	$(".cronometro").css("background-color","#EAA00C");

                }
                if(tiempo.segundo >= 20){

                	$(".cronometro").css("background-color","#E94C19");

                } if(tiempo.segundo >= 25){

                	$(".cronometro").css("background-color","#C9253C");

                }if(tiempo.segundo >= 30){

                	clearInterval(running_time);

                    // ACÁ ES CUANDO TERMINA EL MINUTO ->
                    Swal.fire({
  						icon: 'error',
  						title: 'Oops...',
  						text: 'Se terminó el tiempo!',
  						confirmButtonText: 'Terminar',
  						footer: '<a href="juego1.html">Deseas salir?</a>'
					})

					setTimeout("TerminarJuego()", 5000);
                    
                }


                
            	$("#second").text(tiempo.segundo < 10 ? '0' + tiempo.segundo : tiempo.segundo);

            }, 1000);

  });


function TerminarJuego(){

   	window.location.href='juego1.html';
}

    // ---------------------------------------------------------------------------------------------




$("#btn1").click(function(){

  $(".page2").animate({
    right: '10%'
  });

	tiempo.segundo = 0;


}); 

$("#btn2").click(function(){
  $(".page3").animate({
    right: '20%'
  });

	tiempo.segundo = 0;

}); 

$("#btn3").click(function(){
  $(".page4").animate({
    right: '30%'
  });
  
	tiempo.segundo = 0;

});

$("#btn4").click(function(){
  $(".page5").animate({
    right: '40%'
  });


	tiempo.segundo = 0;
});

$("#btn5").click(function(){
  $(".page6").animate({
    right: '50%'
  });

	tiempo.segundo = 0;
});

$("#btn6").click(function(){
  $(".page7").animate({
    right: '60%'
  });
	tiempo.segundo = 0;
});

$("#btn7").click(function(){
  $(".page8").animate({
    right: '70%'
  });
	
	tiempo.segundo = 0;
});

$("#btn8").click(function(){
  $(".page9").animate({
    right: '80%'
  });
	
	tiempo.segundo = 0;
});

$("#btn9").click(function(){


  $(".page10").animate({
    right: '90%'
  });
	
	tiempo.segundo = 0;
});


$("#btn10").click(function(){

  Quiz();
  sessionStorage.setItem("Puntaje", points);
  window.location.href='juego3.html';

});




// -----------------------------------------------------------------------------------

Quiz();

var points = 0;

function Quiz(){


	$(".answers1").click(function(){
		$(".answers1").addClass("in");
		$("#co").addClass("co");	
		$( "#btn1" ).prop( "disabled", false );
	});


	$("#co").click(function(){
		$(".answers1").addClass("in");
		$("#co").addClass("co");
		$( "#btn1" ).prop( "disabled", false );
		// $('.answers1').attr("disabled", true);

		points += 10;
	});

	//-------------------------------------------------------------------------------

	$(".answers2").click(function(){
		$(".answers2").addClass("in");
		$("#co2").addClass("co");

		$( "#btn2" ).prop( "disabled", false );
	});


	$("#co2").click(function(){
		$(".answers2").addClass("in");
		$("#co2").addClass("co");
		$( "#btn2" ).prop( "disabled", false );



		points += 10;

	});

	//-------------------------------------------------------------------------------

	$(".answers3").click(function(){
		$(".answers3").addClass("in");
		$("#co3").addClass("co");
		$( "#btn3" ).prop( "disabled", false );
	});


	$("#co3").click(function(){
		$(".answers3").addClass("in");
		$("#co3").addClass("co");
		$( "#btn3" ).prop( "disabled", false );


		points += 10;

	});

	//-------------------------------------------------------------------------------

	$(".answers4").click(function(){
		$(".answers4").addClass("in");
		$("#co4").addClass("co");
		$( "#btn4" ).prop( "disabled", false );
	});


	$("#co4").click(function(){
		$(".answers4").addClass("in");
		$("#co4").addClass("co");
		$( "#btn4" ).prop( "disabled", false );


		points += 10;

	});

	//-------------------------------------------------------------------------------

	$(".answers5").click(function(){
		$(".answers5").addClass("in");
		$("#co5").addClass("co");
		$( "#btn5" ).prop( "disabled", false );
	});


	$("#co5").click(function(){
		$(".answers5").addClass("in");
		$("#co5").addClass("co");
		$( "#btn5" ).prop( "disabled", false );


		points += 10;

	});


	//-------------------------------------------------------------------------------

	$(".answers6").click(function(){
		$(".answers6").addClass("in");
		$("#co6").addClass("co");
		$( "#btn6" ).prop( "disabled", false );
	});


	$("#co6").click(function(){
		$(".answers6").addClass("in");
		$("#co6").addClass("co");
		$( "#btn6" ).prop( "disabled", false );


		points += 10;

	});

	//-------------------------------------------------------------------------------

	$(".answers7").click(function(){
		$(".answers7").addClass("in");
		$("#co7").addClass("co");
		$( "#btn7" ).prop( "disabled", false );
	});


	$("#co7").click(function(){
		$(".answers7").addClass("in");
		$("#co7").addClass("co");
		$( "#btn7" ).prop( "disabled", false );


		points += 10;

	});

	//-------------------------------------------------------------------------------

	$(".answers8").click(function(){
		$(".answers8").addClass("in");
		$("#co8").addClass("co");
		$( "#btn8" ).prop( "disabled", false );
	});


	$("#co8").click(function(){
		$(".answers8").addClass("in");
		$("#co8").addClass("co");
		$( "#btn8" ).prop( "disabled", false );



		points += 10;

	});

	//-------------------------------------------------------------------------------

	$(".answers9").click(function(){
		$(".answers9").addClass("in");
		$("#co9").addClass("co");
		$( "#btn9" ).prop( "disabled", false );
	});


	$("#co9").click(function(){
		$(".answers9").addClass("in");
		$("#co9").addClass("co");
		$( "#btn9" ).prop( "disabled", false );


		points += 10;

	});

	//-------------------------------------------------------------------------------

	$(".answers10").click(function(){
		$(".answers10").addClass("in");
		$("#co10").addClass("co");
		$( "#btn10" ).prop( "disabled", false );
	});


	$("#co10").click(function(){
		$(".answers10").addClass("in");
		$("#co10").addClass("co");
		$( "#btn10" ).prop( "disabled", false );


		points += 10;

	});
}

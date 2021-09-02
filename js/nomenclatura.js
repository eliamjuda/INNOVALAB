$(document).ready(function(){


	$("#tabla-mostrar").click(function(){
		TablaMostrar();
	});

	$("#tabla-ocultar").click(function(){
		TablaOcultar();
	});

	function TablaOcultar(){
	
		$(".content").css("height","420vh");
		$(".tabla").css("display","none");
		$("#tabla-mostrar").css("display","block");
		$("#tabla-ocultar").css("display","none");
	}

	function TablaMostrar(){
		$(".content").css("height","550vh");
		$(".tabla").css("display","block");
		$("#tabla-mostrar").css("display","none");
		$("#tabla-ocultar").css("display","block");
	}

});
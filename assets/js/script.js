const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

$(document).ready(function(){
    
    $("#enviarCorreo").click(function(){

        alert("El correo fue enviado correctamente.");
});
});


$(document).ready(function(){
	$("#titulo1, #titulo2").on("dblclick",function(){


		$(this).css({
            "color": "red",
          
        });

	});
});

$(document).ready(function(){

    $(".card-title").click(function(){

    $(".card-text").toggle("slow");
    

    });

});
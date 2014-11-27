$(document).on("ready", onReady);

function onReady() {
  $("#verificaButton").on("click", validateCode);
}

function validateCode() {
  var code = $("#verificaInput").val();
  if (code.length > 0) {
    
    var data = {code: code}
    $.ajax({
      url: "/codes/is_valid",
      data: data,
      success: function(data){
        if (data.text){
          // TODO: revisar estructura y de ser necesario redirigir
          location.href = "/registro";
        } else if (data.valid) {
          // codigo invalido
          $('#barra_alerta').show();
        }
      },error: function(){
        alert("No se pudo validar el código, por favor intenta más tarde.");
      }, complete: function(){
        
      }
    });
  }
}

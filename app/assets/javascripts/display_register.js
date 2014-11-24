$(document).on("ready", onReady);

function onReady() {
  $("#registraButton").on("click", submitUser);
}

function submitUser() {
  
  var nombres = $("#nombres").val();
  var apellidos = $("#apellidos").val();
  var email = $("#email").val();
  var telefono = $("#telefono").val();
  var calle = $("#calle").val();
  var colonia = $("#colonia").val();
  var municipio = $("#municipio").val();
  var ciudad = $("#ciudad").val();
  var codigo = $("#codigo").val();

  // agregar validación de correo y teléfono
  if (nombres.length > 1 && apellidos.length > 1 && email.length > 1 && telefono.length > 1 && calle.length > 1 && colonia.length > 1 && municipio.length > 1 && ciudad.length > 1 && codigo.length > 1) {
    
    var data = {nombres: nombres, apellidos: apellidos, email: email, telefono: telefono, calle: calle, colonia: colonia, municipio: municipio, ciudad: ciudad, codigo: codigo}
    $.ajax({
      url: "/users/submit_with_address",
      data: data,
      type: "POST",
      success: function(data){
        if (data.id){
          location.href = "/seleccion";
        }
      },error: function(){
        alert("No se pudo validar el código, por favor intenta más tarde.");
      }, complete: function(){
        
      }
    });
  } else {
    alert("Favor de llenar todos los campos");
  }

}

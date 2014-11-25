$(document).on("ready", onReady);

function onReady() {
  $("#registraButton").on("click", submitUser);
}

function submitUser() {
  
  var nombres = $("#nombres").val();
  var apellidos = $("#apellidos").val();
  var email = $("#email").val();
  var telefono = $("#telefono").val();
  var celular = $("#celular").val();
  var calle = $("#calle").val();
  var colonia = $("#colonia").val();
  var municipio = $("#municipio").val();
  var ciudad = $("#ciudad").val();
  var codigo = $("#codigo").val();
  var estado = $("#estado").val();
  var mes = $("#mes").val();
  var dia = $("#dia").val();
  var anio = $("#anio").val();

  $("#user-info-form").validate({
        errorPlacement: function(error, element) {
            error.appendTo(element.parent().after());
        },
        rules: {
          nombres: {
            minlength:3, 
          }
          apellidos: {
            minlength:3, 
          }
          email: {
            email: true, 
          }
          telefono: {
            phonevalidation: true, 
          }
          celular: {
            minlength:3, 
          }
        }
    }).reset();

  $.validator.addMethod("phonevalidation",
           function(value, element) {
                   return /^[\d]+[ |\-]?[\d]+[ |\-]?[\d]+$/.test(value);
           },
   "Please enter a valid phone number."
   );

  // agregar validación de correo y teléfono
  if (nombres.length > 1 && apellidos.length > 1 && email.length > 1 && telefono.length > 1 && celular.length && calle.length > 1 && colonia.length > 1 && municipio.length > 1 && ciudad.length > 1 && codigo.length > 1 && estado.length > 1 && mes.length > 1 && dia.length > 1 && anio.length > 1) {
    var timestamp = Date.parse(dia+'/'+mes+'/'+anio);
    var data = {nombres: nombres, apellidos: apellidos, email: email, telefono: telefono, celular:celular, calle: calle, colonia: colonia, municipio: municipio, ciudad: ciudad, estado:estado, codigo: codigo, timestamp:timestamp}
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

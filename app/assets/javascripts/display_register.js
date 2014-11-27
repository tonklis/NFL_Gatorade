$(document).on("ready", onReady);

function onReady() {
  //$("#registraButton").on("click", submitUser);
}

function valiate() {

  $("#user-info-form").validate({
        submitHandler: function(form) {
          form.submit();
        },
        showErrors: function(errorMap, errorList) {
            if (errorList.length) {
               var s = errorList.shift();
               var n = [];
               n.push(s);
               this.errorList = n;
            }
            this.defaultShowErrors();
        },
        rules: {
          nombres: {
            minlength:3, 
          },
          apellidos: {
            minlength:3, 
          },
          email: {
            emailvalidation: true, 
          },
          telefono: {
            phonevalidation: true, 
          },
          celular: {
            cellphonevalidation: true, 
          },
          codigo: {
            codevalidation: true,
          },
          calle: {
            minlength: 3,
          },
          colonia: {
            minlength: 3,
          },
          municipio: {
            minlength: 3,
          },
          ciudad: {
            minlength: 3,
          }
        },
        errorPlacement: function(error, element) {
            error.appendTo(element.parent().after());
        }
    }).reset();

  $.validator.addMethod("phonevalidation",
           function(value, element) {
                   return /^[\d]{7,10}$/.test(value);
           },
   "Ingresa un teléfono válido."
   );
  $.validator.addMethod("cellphonevalidation",
           function(value, element) {
                   return /^[\d]{10}$/.test(value);
           },
   "Ingresa un número celular válido."
   );
  $.validator.addMethod("emailvalidation",
           function(value, element) {
                   return /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(value);
           },
   "Ingresa un email válido."
   );
  $.validator.addMethod("codevalidation",
           function(value, element) {
                   return /^[0-9]{5}$/.test(value);
           },
   "Ingresa un código postal válido."
   );
  $.validator.addMethod("dayvalidation",
           function(value, element) {
                   return /^[0]{1}[0-9]{1}|[1]{1}[0-9]{1}|[2]{1}[0-9]{1}|[3]{1}[0-1]{1}$/.test(value);
           },
   "Ingresa un dia válido."
   );
  $.validator.addMethod("monthvalidation",
           function(value, element) {
                   return /^[0]{1}[0-9]{1}|[1]{1}[0-2]{1}$/.test(value);
           },
   "Ingresa un mes válido."
   );
  $.validator.addMethod("yearvalidation",
           function(value, element) {
                   return /^[0-9]{4}$/.test(value);
           },
   "Ingresa un año válido."
   );

  jQuery.extend(jQuery.validator.messages, {
      required: "Este campo es requerido.",
      email: "Ingresa un email válido.",
      date: "Ingresa una fecha válida.",
      number: "Ingresa un número válido.",
      maxlength: jQuery.validator.format("No ingreses más de {0} caracteres."),
      minlength: jQuery.validator.format("Ingresa al menos {0} caracteres."),
      rangelength: jQuery.validator.format("Ingresa un valor de longitud entre {0} y {1}."),
      range: jQuery.validator.format("Ingresa un valor entre {0} y {1}."),
      max: jQuery.validator.format("Ingresa un valor menor o igual a {0}."),
      min: jQuery.validator.format("Ingresa un valor mayor o igual a {0}."),
      equalTo: jQuery.validator.format("El valor de la confirmación no es igual al de la contraseña.")
  });
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

  // agregar validación de correo y teléfono
  //if (nombres.length > 1 && apellidos.length > 1 && email.length > 1 && telefono.length > 1 && celular.length && calle.length > 1 && colonia.length > 1 && municipio.length > 1 && ciudad.length > 1 && codigo.length > 1 && estado.length > 1 && mes.length > 1 && dia.length > 1 && anio.length > 1) {
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
        $('#barra_alerta').show();
      }, complete: function(){
        
      }
    });
  //} else {
    //alert("Favor de llenar todos los campos");
  //}

}

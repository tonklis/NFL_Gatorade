$(document).on("ready", onReady);

function onReady() {
  getDifficulties();
}

function getDifficulties() {
  $.ajax({
    url: "/difficulties/available",
    success: function(data){
      if (data){
        $.each(data, function(index, value) {
          $("#difficultySelection").append("<input id='difficulty_" + value.id +"' type='radio' name='difficulties' value='" + value.id+ "' >" + value.description + "</input>");
          $("#difficulty_" + value.id).on("click", getQuestions);
        });
      }
    },error: function(){
      alert("No se pudo validar el código, por favor intenta más tarde.");
    }, complete: function(){
    }
  });
}

function getQuestions(event) {

  $.ajax({
    url: "/questions/by_difficulty",
    data: { difficulty_id: event.target.value},
    success: function(data){
      if (data){
        // TODO: revisar redirección
        $("#difficultySelection").hide();
        $.each(data, function(index, value) {
          $("#questions").append("<li id='question_" + value.id + "' data-index='"+ index +"'>" + value.text + "</li>");
          $.each(value.answers, function(a_index, a_value) {
            $("#question_" + value.id).append("<div>"+ a_value.text +"</div>");
          });
        });
      }
    },error: function(){
      alert("No se pudo validar el código, por favor intenta más tarde.");
    }, complete: function(){
    }
  });
}

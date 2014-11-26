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
          $("#dificultad_"+value.id).removeClass("pulse-no-action");
          $("#dificultad_"+value.id).addClass("pulse");
          $("#dificultad_"+value.id).val(value.id);
          //$("#difficultySelection").append("<input id='difficulty_" + value.id +"' type='radio' name='difficulties' value='" + value.id+ "' >" + value.description + "</input>");
          $("#dificultad_" + value.id).on("click", getQuestions);
        });
      }
    },error: function(){
      alert("No se pudieron cargar las dificultades, por favor intenta más tarde.");
    }, complete: function(){
    }
  });
}

function getQuestions(event) {
  location.href = "/questions/by_difficulty?difficulty_id=" + event.target.value;
}

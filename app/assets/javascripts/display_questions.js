$(document).on("ready", onReady);

var index = 0;

function onReady() {
  getQuestion();
  $("#siguiente_btn").on("click", nextQuestion);
}

function getQuestion(){
  $("#question_text").fadeIn(200);
  $("#answer_text").fadeIn(200);
  var question = $("#questions").data("questions")[index];
  $("#question_number").html(index + 1);
  $("#question_text").html(question.text);
  $("#question_source").html(question.source);
  $.each(question.answers, function(index, value) {
    $("#question_answer_" + index).html(value.text);
  });
}

function nextQuestion(){
  if (index < 9 && $('input[name=radio]:checked').val()) {
    $("#question_text").hide();
    $("#answer_text").hide();
    $("input[name=radio]").removeAttr("checked");
    index++;
    getQuestion(); 
  } else if (index >= 9) {
    location.href = "/resultado";
  }
}

$(document).on("ready", onReady);

var index = 0;

var timer = 20;
var timerFunction;

var leftValue = 0;
var before;
var answers = Array();

function onReady() {
  $('input').click(function(){
    $('label').css('display', 'none');
    $('label').css('display', 'inline-block');
  });

  getQuestion();
  $("#siguiente_btn").on("click", nextQuestion);
  before = new Date();

  timerFunction = setInterval(function() {

    var now = new Date();
    var elapsedTime = (now.getTime() - before.getTime());
    if (elapsedTime > 20000){
      nextQuestionOverride();
      before = new Date();    
    }else{
      timer = 20 - Math.floor(elapsedTime/1000);
      $("#question_text").html($("#questions").data("questions")[index].text + " ..." + timer);
    }
  }, 1000);

}

function getQuestion(){
  $("#question_text").fadeIn(200);
  $("#answer_text").fadeIn(200);
  var question = $("#questions").data("questions")[index];
  $("#question_number").html(index + 1);
  $("#question_text").html(question.text + " ..." + timer);
  $("#question_text").data("value", question.id);
  $("#question_source").html(question.source);
  $.each(question.answers, function(index, value) {
    $("#question_answer_" + index).html(value.text);
    $("#question_answer_" + index).data("value", value.id);
  });
}

function nextQuestion(){
  if (index < 9 && $('input[name=radio]:checked').val()) {
    timer = 20;
    before = new Date();    
    pushAnswer();
    $("#question_text").hide();
    $("#answer_text").hide();
    $("input[name=radio]").removeAttr("checked");
    index++;
    getQuestion(); 
  } else if (index >= 9) {
    pushAnswer();
    submitQuestions();
  }
}

function pushAnswer(){
  var answer = {
    question_id: $("#question_text").data("value"),
    answer_id: $("#question_answer_" + $('input[name=radio]:checked').val()).data("value")
  }
  answers.push(answer);
}

function nextQuestionOverride(){
  if (index < 9) {

    if($('input[name=radio]:checked').val()){
      timer = 20;
      before = new Date();    
      pushAnswer();
    }
    $("#question_text").hide();
    $("#answer_text").hide();
    $("input[name=radio]").removeAttr("checked");
    index++;
    getQuestion(); 
  } else if (index >= 9) {
    pushAnswer();
    submitQuestions();
  }
}

function submitQuestions(){
  if (answers.length == 10 && $("#main").data("difficulty-id") && $("#main").data("user-id") && $("#main").data("code")){
    var data = {
      answers: JSON.stringify(answers),
      difficulty_id: $("#main").data("difficulty-id"),
      user_id: $("#main").data("user-id"),
      code: $("#main").data("code")
    }
    $.ajax({
      url: "/users/is_winner",
      data: data,
      type: "POST",
      success: function(data){
        if (data){
          if (data.winner) {
            //perdedor
            //alert("perdedor");
          }else if(data.id) {
            //ganador
            //alert("ganador");
          }
        }
      },error: function(){
        alert("No se pudo registrar tu participación. Inténtalo nuevamente.");
      }, complete: function(){
        location.href = "/resultado";
      }
    });
  } else {
    console.log(answers.length + " Difficulty " + $('#main').data('difficulty-id') + " USER ID "+ $("#main").data("user-id") + "CODE" + $("#main").data("code") );
    location.href = "/resultado";
  }

}

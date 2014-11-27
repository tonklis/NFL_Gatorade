$(document).on("ready", onReady);

var index = 0;

var timer = 20;
var timerFunction;

var leftValue = 0;
var before;

setInterval(function()
{
    now = new Date();
    var elapsedTime = (now.getTime() - before.getTime());

    if(elapsedTime > interval)
    {
        //Recover the motion lost while inactive.
        leftValue += Math.floor(elapsedTime/interval);
    }
    else
    {
        leftValue++;
    }

    div.css("left", leftValue);
    before = new Date();    

}, interval);

function onReady() {
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
  $("#question_source").html(question.source);
  $.each(question.answers, function(index, value) {
    $("#question_answer_" + index).html(value.text);
  });
}

function nextQuestion(){
  timer = 20;
  before = new Date();    
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

function nextQuestionOverride(){
  timer = 20;
  before = new Date();    
  if (index < 9) {
    $("#question_text").hide();
    $("#answer_text").hide();
    $("input[name=radio]").removeAttr("checked");
    index++;
    getQuestion(); 
  } else if (index >= 9) {
    location.href = "/resultado";
  }
}

json.array!(@questions) do |question|
  json.extract! question, :id, :difficulty_id, :text, :source
  json.set! :answers do
    json.array! (question.answers) do |answer|
      json.extract! answer, :id, :question_id, :text
    end
  end
end

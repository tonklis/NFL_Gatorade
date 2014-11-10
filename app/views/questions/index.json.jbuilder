json.array!(@questions) do |question|
  json.extract! question, :id, :difficulty_id, :text, :source
  json.url question_url(question, format: :json)
end

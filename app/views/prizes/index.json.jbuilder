json.array!(@prizes) do |prize|
  json.extract! prize, :id, :difficulty_id, :description, :stock
  json.url prize_url(prize, format: :json)
end

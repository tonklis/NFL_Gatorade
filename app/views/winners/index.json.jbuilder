json.array!(@winners) do |winner|
  json.extract! winner, :id, :user_id, :code_id, :prize_id
  json.url winner_url(winner, format: :json)
end

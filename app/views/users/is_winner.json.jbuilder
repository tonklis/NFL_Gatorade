if @prize
  json.extract! @prize, :id, :description, :stock, :difficulty_id
else
  json.winner "false"
end

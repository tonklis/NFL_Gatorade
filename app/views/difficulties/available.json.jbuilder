json.array!(@difficulties) do |difficulty|
  json.extract! difficulty, :id, :description
end

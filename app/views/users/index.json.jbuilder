json.array!(@users) do |user|
  json.extract! user, :id, :address_id, :first_name, :last_name, :phone_number
  json.url user_url(user, format: :json)
end

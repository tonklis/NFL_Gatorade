json.array!(@codes) do |code|
  json.extract! code, :id, :text, :price, :used
  json.url code_url(code, format: :json)
end

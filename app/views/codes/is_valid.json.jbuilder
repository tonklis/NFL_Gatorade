if @code
  json.extract! @code, :id, :text
else
  json.valid "false"
end

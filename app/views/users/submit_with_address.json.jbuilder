if @user
  json.extract! @user, :id, :address_id, :first_name, :last_name, :phone_number, :email
else
  json.success "false"
end

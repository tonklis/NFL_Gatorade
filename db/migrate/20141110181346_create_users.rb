class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :address_id
      t.string :first_name
      t.string :last_name
      t.string :phone_number

      t.timestamps
    end
  end
end

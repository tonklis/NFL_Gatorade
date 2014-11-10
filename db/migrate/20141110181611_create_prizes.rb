class CreatePrizes < ActiveRecord::Migration
  def change
    create_table :prizes do |t|
      t.integer :difficulty_id
      t.string :description
      t.integer :stock

      t.timestamps
    end
  end
end

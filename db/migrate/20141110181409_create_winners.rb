class CreateWinners < ActiveRecord::Migration
  def change
    create_table :winners do |t|
      t.integer :user_id
      t.integer :code_id
      t.integer :prize_id

      t.timestamps
    end
  end
end

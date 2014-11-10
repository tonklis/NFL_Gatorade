class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :difficulty_id
      t.text :text
      t.string :source

      t.timestamps
    end
  end
end

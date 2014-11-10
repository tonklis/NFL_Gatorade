class CreateCodes < ActiveRecord::Migration
  def change
    create_table :codes do |t|
      t.string :text
      t.float :price
      t.boolean :used

      t.timestamps
    end
  end
end

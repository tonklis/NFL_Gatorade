class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :line1
      t.string :line2
      t.string :line3
      t.string :city
      t.string :po_box

      t.timestamps
    end
  end
end

class AddLockedToCodes < ActiveRecord::Migration
  def change
    add_column :codes, :locked, :boolean, :default => false
  end
end

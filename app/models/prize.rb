class Prize < ActiveRecord::Base
  belongs_to :difficulty
  has_one :winner
end

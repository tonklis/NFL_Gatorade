class User < ActiveRecord::Base
  belongs_to :address
  has_one :winner
end

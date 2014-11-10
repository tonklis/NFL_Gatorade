class Difficulty < ActiveRecord::Base
  has_many :questions
  has_many :prizes
end

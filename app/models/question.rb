class Question < ActiveRecord::Base
  belongs_to :difficulty
  has_many :answers
end

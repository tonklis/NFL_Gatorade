class Question < ActiveRecord::Base
  belongs_to :difficulty
  has_many :answers

  def self.by_difficulty difficulty_id
    Question.includes(:answers).where("difficulty_id = ?", difficulty_id).shuffle[0..9]
  end
end

class Difficulty < ActiveRecord::Base
  has_many :questions
  has_many :prizes

  def self.available
    difficulties = []
    Difficulty.all.each do |difficulty|
      number = Prize.where("difficulty_id = ? and stock is null", difficulty.id).count
      if number >= 1
        difficulties << difficulty
      end
    end
    difficulties
  end
end

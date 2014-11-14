class Code < ActiveRecord::Base
  has_one :winner

  def self.is_valid code
    Code.where("text = ? AND used is null", code).first
  end
end

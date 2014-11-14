class User < ActiveRecord::Base
  belongs_to :address
  has_one :winner

  def self.submit_with_address nombres, apellidos, email, telefono, calle, colonia, municipio, ciudad, codigo
    address = Address.create(line1: calle, line2: colonia, line3: municipio, po_box: codigo, city: ciudad)
    user = User.create(address_id: address.id, first_name: nombres, last_name: apellidos, phone_number: telefono, email: email)    
  end

  def self.is_winner user_id, answers, difficulty_id, code
    result = nil
    if answers.uniq.count == 10
      is_winner = true
      answers.each do |answer|
        question_id = answer[:question_id]
        answer_id = answer[:answer_id]

        answer = Answer.find(answer_id)
        if not answer.correct or answer.question_id != question_id or answer.question.difficulty_id != difficulty_id
          is_winner = false
        end
      end

      if is_winner
        user = User.where("id = ?", user_id).first
        #difficulty = Difficulty.find(difficulty_id)
        prize = Prize.where("difficulty_id = ? AND stock is null", difficulty_id).first
        code = Code.where("text = ? AND used is null", code).first
        if prize and code and user
          prize.update_attribute(:stock, 1)
          code.update_attribute(:used, true)
          Winner.create(user_id: user.id, code_id: code.id, prize_id: prize.id)
          result = prize
        end
      end
    end
    return result
  end
end

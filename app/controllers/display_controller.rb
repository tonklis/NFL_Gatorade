class DisplayController < ApplicationController

  def index

  end

  def register

  end

  def selection

  end

  def questions
    @styles = get_styles(session[:difficulty_id].to_i)
    @user_id = session[:user_id]
    @code = session[:code]
    @difficulty_id = session[:difficulty_id]
    @questions = Question.by_difficulty(@difficulty_id)
    
    code = Code.find_by_text(@code)
    if not code
      redirect_to "/resultado"
    elsif code.locked
      code.update_attribute(:used, true)
      redirect_to "/resultado"
    else
      code.update_attribute(:locked, true) 
    end
  end

  def result
    if session[:prize]
      @prize = Prize.find_by_description(session[:prize])
      @amount = nil
      if @prize.difficulty_id == 1
        @amount = 500
      elsif @prize.difficulty_id == 2
        @amount = 750 
      elsif @prize.difficulty_id == 3
        @amount = 1500
      end
    end
    reset_session
  end

  def get_styles difficulty_id
    result = []
    if difficulty_id == 1
      result << "q-blue-men"
      result << "blue-lines"
      result << "r-blue"
      result << "blue-btn"
    elsif difficulty_id == 2
      result << "q-yellow-men"
      result << "yellow-lines"
      result << "r-yellow"
      result << "yellow-btn"
    elsif difficulty_id == 3
      result << "q-red-men"
      result << "red-lines"
      result << "r-red"
      result << "red-btn"
    end
    return result
  end

end

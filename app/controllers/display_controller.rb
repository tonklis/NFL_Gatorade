class DisplayController < ApplicationController

  def index

  end

  def register

  end

  def selection

  end

  def questions
    @styles = get_styles(session[:difficulty_id].to_i)
    @questions = Question.by_difficulty(session[:difficulty_id])
  end

  def result

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

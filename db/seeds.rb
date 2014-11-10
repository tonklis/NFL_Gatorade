# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

address = Address.create(line1: "Caracas Norte 247", line2: "Col. Torres Lindavista", line3: "Delegación G.A. Madero", po_box: "07708", city: "México")

code = Code.create(text: "ABCDEF", price: 50.0, used: true)

user = User.create(address_id: address.id, first_name: "Benjamin", last_name: "Hernández", phone_number: "5555874334")

difficulty = Difficulty.create(description: "fácil")

prize = Prize.create(difficulty_id: difficulty.id, description: "Gorra", stock: 50)

question = Question.create(difficulty_id: difficulty.id, text: "¿Cómo se llama el gatorade?", source: "Referencia")

answer = Answer.create(question_id: question.id, text: "Se llama gatorade", correct: true)

winner = Winner.create(user_id: user.id, code_id: code.id, prize_id: prize.id)

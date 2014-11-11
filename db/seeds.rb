#encoding: utf-8 
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#address = Address.create(line1: "Caracas Norte 247", line2: "Col. Torres Lindavista", line3: "Delegación G.A. Madero", po_box: "07708", city: "México")
#code = Code.create(text: "ABCDEF", price: 50.0, used: true)
#user = User.create(address_id: address.id, first_name: "Benjamin", last_name: "Hernández", phone_number: "5555874334")
#difficulty = Difficulty.create(description: "fácil")
#prize = Prize.create(difficulty_id: difficulty.id, description: "Gorra", stock: 50)
#question = Question.create(difficulty_id: difficulty.id, text: "¿Cómo se llama el gatorade?", source: "Referencia")
#answer = Answer.create(question_id: question.id, text: "Se llama gatorade", correct: true)
#winner = Winner.create(user_id: user.id, code_id: code.id, prize_id: prize.id)

#Cargar codigos de cupones.csv
file = File.open('db/seeds/cupones.csv', 'r:UTF-8')
while (line = file.gets)
	arr = line.encode!('UTF-8', 'UTF-8', :invalid => :replace).split(",")
	code = Code.create(text: arr[0], price: arr[1])
end
file.close

#Crea 3 niveles de dificultad
f = Difficulty.create(description: 'Fácil')
facil_id = f.id 
i = Difficulty.create(description: 'Intermedio')
intermedio_id = i.id
d = Difficulty.create(description: 'Difícil')
dificil_id = d.id

#Carga preguntas faciles con sus respectivas respuestas
file_preguntas = File.open('db/seeds/faciles.txt', 'r:UTF-8')
file_respuestas = File.open('db/seeds/respuestas_faciles.txt', 'r:UTF-8')
while (line = file_preguntas.gets)
	arr = line.encode!('UTF-8', 'UTF-8', :invalid => :replace).split("|")
	pregunta = Question.create(difficulty_id: facil_id, text: arr[0])
	if(arr[1]!=nil)
		pregunta.source = arr[1]
	end
	pregunta.save
	num = 1
	while num < 5 do 
		linea = file_respuestas.gets
		array = linea.encode!('UTF-8', 'UTF-8', :invalid => :replace).split("|")
		respuesta = Answer.create(question_id: pregunta.id, text: array[0])
		if(array[1]!=nil)
			respuesta.correct = array[1]
		end
		respuesta.save
		num+=1
	end
end
file_preguntas.close
file_respuestas.close

#Carga preguntas intermedias con sus respectivas respuestas
file_preguntas = File.open('db/seeds/intermedias.txt', 'r:UTF-8')
file_respuestas = File.open('db/seeds/respuestas_intermedias.txt', 'r:UTF-8')
while (line = file_preguntas.gets)
	arr = line.encode!('UTF-8', 'UTF-8', :invalid => :replace).split("|")
	pregunta = Question.create(difficulty_id: intermedio_id, text: arr[0])
	if(arr[1]!=nil)
		pregunta.source = arr[1]
	end
	pregunta.save
	num = 1
	while num < 5 do 
		linea = file_respuestas.gets
		array = linea.encode!('UTF-8', 'UTF-8', :invalid => :replace).split("|")
		respuesta = Answer.create(question_id: pregunta.id, text: array[0])
		if(array[1]!=nil)
			respuesta.correct = array[1]
		end
		respuesta.save
		num+=1
	end
end
file_preguntas.close
file_respuestas.close

#Carga preguntas dificiles con sus respectivas respuestas
file_preguntas = File.open('db/seeds/dificiles.txt', 'r:UTF-8')
file_respuestas = File.open('db/seeds/respuestas_dificiles.txt', 'r:UTF-8')
while (line = file_preguntas.gets)
	arr = line.encode!('UTF-8', 'UTF-8', :invalid => :replace).split("|")
	pregunta = Question.create(difficulty_id: dificil_id, text: arr[0])
	if(arr[1]!=nil)
		pregunta.source = arr[1]
	end
	pregunta.save
	num = 1
	while num < 5 do 
		linea = file_respuestas.gets
		array = linea.encode!('UTF-8', 'UTF-8', :invalid => :replace).split("|")
		respuesta = Answer.create(question_id: pregunta.id, text: array[0])
		if(array[1]!=nil)
			respuesta.correct = array[1]
		end
		respuesta.save
		num+=1
	end
end
file_preguntas.close
file_respuestas.close

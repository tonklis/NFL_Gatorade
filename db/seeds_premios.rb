facil_id = Difficulty.where(description: "Facil").to_a[0].id
intermedio_id = Difficulty.where(description: "Intermedio").to_a[0].id
dificil_id = Difficulty.where(description: "Dificil").to_a[0].id 

#Cargar codigos de premios_faciles.csv
file = File.open('db/seeds/premios_faciles.csv', 'r:UTF-8')
while (line = file.gets)
	arr = line.encode!('UTF-8', 'UTF-8', :invalid => :replace).split(",")
	code = Price.create(dificulty_id: facil_id, description: arr[0])
end
file.close

#Cargar codigos de premios_intermedios.csv
file = File.open('db/seeds/premios_intermedios.csv', 'r:UTF-8')
while (line = file.gets)
	arr = line.encode!('UTF-8', 'UTF-8', :invalid => :replace).split(",")
	code = Price.create(dificulty_id: intermedio_id, description: arr[0])
end
file.close

#Cargar codigos de premios_dificiles.csv
file = File.open('db/seeds/premios_dificiles.csv', 'r:UTF-8')
while (line = file.gets)
	arr = line.encode!('UTF-8', 'UTF-8', :invalid => :replace).split(",")
	code = Price.create(dificulty_id: dificil_id, description: arr[0])
end
file.close
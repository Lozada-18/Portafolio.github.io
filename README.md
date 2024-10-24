Pasos Git Hub
**crear nuevo repositorio** 

mkdir nuevo-repositorio
cd nuevo-repositorio
git init

touch archivo.txt  # Crea un nuevo archivo
git add archivo.txt  # Agrega el archivo al índice

**clonar repositorio**
git clone <URL-del-repositorio>

git clone https://github.com/usuario/repositorio.git

realizar comitt

git commit -m "primer commit" 

subir 

git push -u origin master


modif 
git add archivo.txt
git commit -m "Modificación del archivo"

hacer cambios 
git checkout -b nombre-de-la-rama
verificar rama principal 
git checkout main

Ver el Estado : git status(verifica cambios y archivos)



Eliminar una Rama : `git branch -d nombrgit branch -d nombre-de-la-rama(para eliminar una rama local)


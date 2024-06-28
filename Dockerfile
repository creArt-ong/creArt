# Se le dice con que imagen se va a utilizar
FROM node:22

# Se define la carpeta de trabajo
WORKDIR / app

# Se le dice que copie todos los elementos
COPY . .

# Se crea el node_modules en el servidor
RUN npm install

# Arranca la aplicación
CMD ["npm", "start"]


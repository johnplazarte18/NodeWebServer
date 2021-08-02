# Node Web Service
## Introducción
Este proyecto consiste en crear y consumir un web services para obtener datos de los deportistas latinoamericanos que han ganado medallas de oro, plata y bronce. Estos datos son filtrados por país, mostrando así los participantes y las disciplinas en las que ganaron medallas.
## Tecnologías y Recursos
### Frontend
* HTML5
* CSS3
* JS
* Ajax
### Backend
* Node.js
* PostgreSQL
### Paquetes de Node.js
* express
* pg

## Desarrollo del backend (web services)

* Paso 1
Descarga e instala [Node.js](https://nodejs.org/es/) en su ultima versión.

* Paso 2
Buscar un lugar donde crear el proyecto y abre la terminal de tu sistema operativo en la ruta que elegiste.

* Paso 3
Crea una carpeta con el nombre del proyecto
```
$ mkdir NodeWebServices
$ cd NodeWebServices
```

* Paso 4
Abre la carpeta creada con cualquier editor de código, para este caso con Visual Studio Code.

* Paso 5
Crea un archivo javascript llamado **index.js**

* Paso 6
Instala el paquete [express](https://www.npmjs.com/package/express) para poder implementar un servidor y manejar rutas de manera fácil.
```bash
$ npm install express
```

* Paso 7
Instala el paquete [pg](https://www.npmjs.com/package/pg) para poder realizar las conexiones a la base de datos de PostgreSQL
```bash
$ npm install pg
```

* Paso 8
Abre el motor de PostgreSQL y crea la base de datos con el nombre de **juegos_olimpicos**

* Paso 9
Diríjase a la carpeta data de este repositorio y encontrará varios archivos csv y un txt que detalla la creación de las tablas y la inserción de los datos. Ubique todos los archivos csv en la raíz de su equipo "C:\", y siga los pasos del archivo txt.

## Desarrollo del frontend (consumo del ws)
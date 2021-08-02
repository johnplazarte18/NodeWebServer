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

* Paso 1:

Descarga e instala [Node.js](https://nodejs.org/es/) en su ultima versión.

* Paso 2:

Buscar un lugar donde crear el proyecto y abre la terminal de tu sistema operativo en la ruta que elegiste.

* Paso 3:

Crea una carpeta con el nombre del proyecto
```
mkdir NodeWebServices
cd NodeWebServices
```

* Paso 4:

Abre la carpeta creada con cualquier editor de código, para este caso con Visual Studio Code.

* Paso 5:

Crea un archivo javascript llamado **index.js**

* Paso 6:

Instala el paquete [express](https://www.npmjs.com/package/express) para poder implementar un servidor y manejar rutas de manera fácil.
```bash
npm install express
```

* Paso 7:

Instala el paquete [pg](https://www.npmjs.com/package/pg) para poder realizar las conexiones a la base de datos de PostgreSQL
```bash
npm install pg
```

* Paso 8:

Instala el paquete [cookie-parser](https://www.npmjs.com/package/cookie-parser) para poder codificar objetos cookie.
```bash
npm install cookie-parser
```

* Paso 9:

Instala el paquete [http-errors](https://www.npmjs.com/package/http-errors) para poder crear errores http al paquete express.
```bash
npm install http-errors
```

* Paso 10:

Instala el paquete [morgan](https://www.npmjs.com/package/morgan), un middleware del registrador de solicitudes HTTP para node.js
```bash
npm install morgan
```

* Paso 11:

Instala el paquete [ejs](https://www.npmjs.com/package/ejs), que trae consigo plnatillas de javascript embebidas.
```bash
npm install ejs
```

* Paso 12:

Abre el motor de PostgreSQL y crea la base de datos con el nombre de **juegos_olimpicos**

* Paso 13:

Diríjase a la carpeta data de este repositorio y encontrará varios archivos csv y un txt que detalla la creación de las tablas y la inserción de los datos. Ubique todos los archivos csv en la raíz de su equipo "C:/", y siga los pasos del archivo txt.

* Paso 14:

Abra la terminal en la raíz del proyecto y ejecute la aplicación con el siguiente comando:
```bash
npm start
```
# RETO INTERBANK - SISTEMA DE ADMINISTRACIÓN DE USUARIOS

Este proyecto es un ejemplo de un CRUD de Usuarios

# Funcionalidades

- Crea, actualiza, elimina, Lista usuarios
- Aplicación de microfrontends
- STACK MEAN + StencilJS + StoryBook + Docker + Nginx
- Genera screenshots de las funciones del CRUD

# Microfrontend Example with Docker

Este proyecto es un ejemplo de microfrontend utilizando Docker para el entorno de desarrollo y demostrando cómo compartir estados entre microfrontends utilizando el concepto de BroadcastChannel

## Demo Images

- Listado
![Listado del Usuarios](./assets/listado.png)
- Agregar
![Agregar del Usuarios](./assets/agegar.png)
- Editar
![Editar del Usuarios](./assets/editar.png)
- Eliminar
![Eliminar del Usuarios](./assets/eliminar.png)
- Genera Imagen
![Genera imagen para su descarga](./assets/generafoto.png)

-

## Técnologias

- Web-Shell : Angular 14
- Web Microfrontend : Stencil
- broadcastchannel - Libreria creada por Hernan Bracamonte Dev

## Pasos de Configuración

1. Instalar Docker:
   - [Instrucciones para instalar Docker](https://docs.docker.com/desktop/install/)

2. Habilitar Subsistema de Linux en Windows:
   - [Instrucciones para habilitar WSL en Windows](https://learn.microsoft.com/en-us/windows/wsl/install-manual)

3. Descargar las imágenes de NGINX y Node desde DockerHub:
   - [Imagen de NGINX en DockerHub](https://hub.docker.com/_/nginx)
   - [Imagen de Node en DockerHub](https://hub.docker.com/_/node/)

   Ejecutar los siguientes comandos:

   ```bash
   docker pull nginx
   docker pull node

## Construcción y Ejecución

npm install
npm run build
npm run docker-build
npm run docker-run

- Asegúrate de tener el puerto 80 disponible para la aplicación shell.

## Acceder a la aplicación

Si estás ejecutando localmente: <http://localhost:4200/users>
Si estás utilizando Docker: <http://localhost/users>

## Manejo de Estados en Microfrontends

Para el manejo de estados entre microfrontends, se utiliza el concepto de BroadcastChannel. Además, se utiliza la librería broadcast-channel-hb para facilitar la comunicación entre páginas.

- Para instalar la librería:

npm install broadcast-channel-hb

- La idea es generar eventos en la shell (app Angular) y escuchar estos eventos en otras aplicaciones (microfrontends) para compartir estados.

- Repositorio: <https://github.com/cbracamonte/broadcast-channel-ibk>

## Notas

- Este proyecto es un ejemplo y puede requerir ajustes y mejoras adicionales.
- No se ha implementado la persistencia de datos en este ejemplo por temas de tiempo

## Pizza Owner

    Hernan Bracamonte 
     - https://www.linkedin.com/in/hernanbracamonte/

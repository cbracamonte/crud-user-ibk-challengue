#

1. Instalar docker
 <https://docs.docker.com/desktop/install/windows-install/>
2. Habilitar subsistema de Linux en Windows
 <https://learn.microsoft.com/en-us/windows/wsl/install-manual>
3. Descargar imagen de NGINX de DockerHub
 <https://hub.docker.com/_/nginx>
4. Ejecutar el comando:
 docker pull nginx
5. Descargar imagen Node de DockerHub
  <https://hub.docker.com/_/node/>
4. Ejecutar el comando:
 docker pull node
5. Luego:
npm run build
npm run docker-build
npm run docker-run

Para esto, deben tener libre el puerto 80 que será para nuestra app shell

6. Caso de uso para una manejo de estados en el microfrontend

Para esto debemos aplicar el concepto de BroadCastChannel <https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel>
para poder compartir los estados de una pagina a otra, en este caso se creo una libreria que pueden descargarla de :
<https://www.npmjs.com/package/broadcast-channel-hb>

npm i broadcast-channel-hb

Podriamos trabajarlo con localstorage o indexdb para mantener la persistencia

El ejercicio es el siguiente:

Se tiene la shell(app angular) generamos un evento de edicion de usuario, este emite un evento que lo escucha la otra aplicación (mfe) y recupera los dato

NOTA: POR TIEMPO NO PUDE DAR CON EL DESARROLLO COMPLETO, FALTA EL TEMA DE LA PERSISTENCIA PARA PODER OBTENER LA DATA.

7. Ejecutamos la shell
 npm run start para verlo en local

8. Si es con docker visitar:
<http://localhost/users>

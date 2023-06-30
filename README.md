# Ferry-Tech

## Objetivo del Proyecto
El presente proyecto, tiene como objetivo facilitar a los usuarios la posibilidad de encontrar tanto herramientas como materiales con mayor facilidad en ferreterías y librerías en la ciudad de La Paz.

## Instalación
La forma de instalar satisfactoriamente esta aplicación, se da a través del siguiente proceso (cabe mencionar que dicho proceso se encuentra dirigido a usuarios que utilicen el sistema operativo Linux):

* Se debe instalar el Editor de código VSCode para el sistema operativo Windows. Para ello, se debe seguir los pasos especificados en [este enlace](https://www.youtube.com/watch?v=X_Z7d04x9-E).

* Luego, se debe instalar NodeJS por medio de [este segundo enlace](https://www.youtube.com/watch?v=Z-Ofqd2yBCc). Ya que el mismo proporciona un tutorial para lograr instalar satisfactoriamente NodeJS en su computadora. sin embargo, en dicha guía se especifica que se debe de usar la versión 16.13.1 de NodeJS (o como lo coloca en el video, **lts**), y debido a ello, de debe instalar y usar la versión 18.16.1 del mismo. Esto resultaría en el siguiente comando, en lugar de ejecutar **nvm install lts**:

  * nvm install 18.16.1
 
* Además de ello, cabe mencionar que no se debe de instalar **yarn**.

* Luego, se debe descargar el archivo comprimido. Para lograrlo, dar click en el botón <>code, para luego seleccionar la opción **Download ZIP**.

<img width="263" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/f8bb3ec7-ef00-4a7c-bbd4-d56b8fd830c7">

* Tras descargar el archivo.zip, se debe ir al directorio en donde se descargó. Al encontrarlo, se debe mover el archivo a una carpeta aparte. Luego, se lo debe descomprimir.

<img width="675" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/d231cee2-2f96-470e-b4b7-086e6c8e6da7">

<img width="661" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/90754417-fc7a-4932-9856-27873a376bde">

* Dar doble click sobre la carpeta **Ferry-App-main**. Luego, dar click derecho sobre la carpeta, y seleccionar, **abrir con Code**.

<img width="691" alt="Screenshot 2023-06-30 142544" src="https://github.com/JZane21/Ferry-App/assets/82000556/fde4e4f1-f3ce-4dde-acb8-0db1de2dd028">

* Luego de dar **Si, Yo confío en los autores** (o en inglés: **Yes, I trust the authors**) cuando pregunta si confía en la distribución de este proyecto, debe abrir una terminal, utilizando una de las opciones que se encuentra en la parte superior de VSCode.

<img width="347" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/d9982dac-69a1-40ca-9898-95f335243bc7">

* Una vez abierta la terminal, se debe copiar y ejecutar (pulsando enter) los siguientes comandos uno por uno (en el proceso puede usar el comando **clear** para limpiar la pantalla. Repetir este comando una o varias veces no influirá en la instalación):

  * npm install

<img width="526" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/11da454f-489d-4937-ae95-2b126be65449">

  * cd backend

<img width="509" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/48c97609-5fca-446c-95d4-e315f554f017">
 
  * npm install

<img width="556" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/2b45dbc9-d240-48f5-a8c0-4cb7ef1093ab">

  * npm install express

<img width="604" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/d36f55d0-cd5e-4974-bc85-15653dfbffbf">

  * npm install mongoose

<img width="610" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/4de5662d-bfba-4f6d-9171-2863544253dd">
  
  * npm install mongodb

<img width="597" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/5ed397dc-7dfe-43c5-aad4-978ba414855e">
  
  * npm install -g nodemon

<img width="615" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/23846eb3-3f0f-412f-98e0-c429df731ad0">
  
  * nodemon index.js

<img width="581" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/1030a3a6-a67f-4e3c-b5d0-dd5b60f63ff9">

----------------------
  
  * **(NOTA)** En caso de que le aparezca el siguiente error:

<img width="715" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/f9876e91-c993-44fc-a48a-ebb65f5adaf8">

  * Debe abrir una terminal PowerShell como administrador.

  * Luego, debe ejecutar el siguiente comando:

    * Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

    * Se le mostrará opciones para seleccionar, solo debe dar **Y** y luego enter (Cuando deje de usar Ferry App, vuelva a ejecutar el anterior comando en una terminal PowerShell como administrados, y use la opción **N**)
   
<img width="697" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/5c8bd449-3bb0-400d-8b84-b46220eb65a4">

  * Cerrar la terminal con modo administrador PowerShell

-----------------------

* (En caso de que se le mostrara otro error (por tiempo excedido para conectarse a la Base de Datos) debe ejecutar **ctrl+c** e intentar nuevamente el comando **nodemon index.js**. Si vuelve a aparecer el mismo error marcado en rojo, repetir este proceso hasta que aparezca el siguiente mensaje: **[db] DB conectada con éxito**)

-----------------------

* Si le llega a aparecer:

<img width="599" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/ca69eaba-6a01-4877-b2b2-0ac122cb8c94">

* Usted debe darle a cancel.

-----------------------

* Reescribir el nombre del archivo **.env.sample** por **.env**.

<img width="110" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/83d7d000-ca92-496c-b2ca-11d1e486a11a">

<img width="107" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/bd00bc40-c0b6-4973-bde7-03731f4360a2">

* Abrir una nueva terminal.

* Ejecutar el comando:

  * npm run dev
 
<img width="501" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/49529b53-0751-4a15-987d-61648c9be5a9">

<img width="263" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/eefd2eb0-20b5-4b13-bdb1-edb7694f570a">

Al finalizar, se debe seguir [este enlace](http://localhost:5173/), para acceder a la aplicación, ¡y listo!

<img width="959" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/5c3f3065-664c-41ef-b6e7-42e4c8163b33">

* Para apagar la aplicación, se hacer click en el rectángulo que aparece al final del texto que sobre sale en las terminales, y luego se debe ejecutar **ctrl + c** en ambas terminales. Y ya puede cerrar Visual Studio Code junto con la página web.

<img width="459" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/c11be33c-a3de-409f-ab7c-db546d205623">

<img width="497" alt="image" src="https://github.com/JZane21/Ferry-App/assets/82000556/ff8f6111-e79f-4ed3-8454-494cb4ef707c">

* Si desea usar la app nuevamente, deberá abrir el proyecto nuevamente con Visual Studio Code, y realizar los siguientes pasos:

  * Abrir 2 terminales
 
  * Solo en una de las terminales ejecutar: **npm run dev**
 
  * En la otra terminal, se debe ejecutar:
    * **cd backend**
    * **nodemon index.js**

## Manual de usuario

* Al iniciarse, la app lo redirigirá a Login, donde debe de estar registrado para ingresar a la aplicación por medio del botón "Login". En caso de no estarlo, debe pulsar el botón "Sign Up" para registrarse en la app.

![Login](./README_images/image.png)

* Si seleccionó el botón Login, usted debe llenar sus datos respectivamente (específicamente hablando de su correo electrónico junto con su contraseña). Si lo llenó correctamente, le aparecerá un mensaje de que pudo ingresar correctamente a la app. En caso de que alguno de los datos fuera erroneo, se le indicará con otro mensaje que cometió un error.

![Login PWD](./README_images/image-1.png)

* En caso de haber seleccionado el botón Sign Up, usted deberá de llenar el siguiente formulario correctamente, para lograr registrarse en la aplicación. Si llenó los campos correctamente, le aparecerá un mensaje, el cual le indicará que se registró correctamente, para luego llevarlo a la página anterior. Pero en caso de que algún dato fuese llenado incorrectamente, se le notificará con otro mensaje que campo debe llenarse correctamente.

![Login Sign Up](./README_images/image-2.png)

* Cuando logra ingresar a la aplicación, se le aparecerá un menu, el cual tiene a todas las tiendas/locales que se encuentren registrados en la aplicación. Entre las opciones que tiene esta página se encuentran las siguientes:

  ![Menu Locals](./README_images/image-8.png)

  * Pulsando el botón superior izquierdo, se abrirá una barra de navegación por el mismo lado, el cual mostrará tanto la posibilidad de salir de la aplicación, como la posibilidad de filtrar las tiendas ya sea por su *estado* (abierto o cerrado) o por la *cantidad* de productos que tenga.

  ![Button Bar](./README_images/image-3.png)

  ![Side Bar](./README_images/image-7.png)

  * Con el buscador, tendrá la capacidad de buscar el local de su interés.

  ![Searcher](./README_images/image-4.png)
 
  * En caso de que desee ingresar a un local para ver sus productos, debe de usar el botón **Productos**.

  ![Buttton Products](./README_images/image-5.png)

  * Por el contrario, si desea obtener la ubicación sobre donde se encuentra dicha tienda en la ciudad, deberá pulsar el botón **Ubicación**.

  ![Button Location](./README_images/image-5.png)

  * Utilizando el botón **Acerca de Nosotros**, podrá ver una pequeña descripción del objetivo de esta aplicación por medio de un mensaje, para luego tener la posibilidad de cerrarla.

  ![About Us](./README_images/image-6.png)

  * Si pulsa el botón **Contactos**, deberá de aparecer la información del desarrollador de esta aplicación por medio de un mensaje, para luego tener la posibilidad de cerrarla.

  ![Contacts](./README_images/image-6.png)

* Si ingresó a una tienda, se le ofrecerá opciones parecidas con la anterior página (como lo es la posibilidad de usar el botón **Acerca de nosotros**, **Contactos** y el **buscador**), sin embargo, algunas de ellas varían, tales como:

  ![Menu Products](./README_images/image-9.png)

  * Al abrir la opción de desplegar la barra de navegación izquierda, todavía se ofrecerá salir de la aplicación. Sin embargo, la posibilidad de filtrar los productos de la tienda será por *cantidad*, *precio* y *disponibilidad*.

  ![Nav Bar Products](./README_images/image-10.png)

  * También se ofrecerá la posibilidad de leer una descripción del producto, la cual se mostrará por medio de un mensaje si se pulsa el botón **Descripción**

  ![Description](./README_images/image-11.png)

Estas serían todas las funcionalidades que ofrecería la aplicación. Esperamos de que este manual de usuario le haya sido de mucha ayuda.

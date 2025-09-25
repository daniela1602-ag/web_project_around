# Tripleten web_project_around

Proyecto Around The U. S.
Consiste en crear una página wed como red social, en la cual, se pueda crear un perfil de usuario y editarlo, así como tambíen agregar y compartir fotografias personales o imagenes de otros lados y poder darles "like".
En esta primera parte del proyecto se realizó el diseño general de la página, se agregaron seis imagenes, se hicieron las versiones responsivas de 768px y 320px, y lo más importante se empezó la parte interactiva de la página, con JavaScript se activaron el botón de "editar información personal" y se creó una ventana emergente para ello así como también con el botón "guardar" y que la página se actualice con la información agregada.
Tecnologías utilizadas: flexbox, grid layout, JavaScript básico.

En la segunda parte del proyecto, se utilizaron mas que nada tecnologías de JavaScript: se activó el ícono de "like" de cada imagen, así como también se activo la función de eliminar imagenes, también se agregó nueva forma de agregar bloques de html por medio de js, y a su vez con ello, se añadieron imagenes y asi poder crear la función de crear nuevas imagenes , y por último crear una tercera ventana emergente para poder ver la imagen ampliada.

En la Tercera parte del proyecto, se implemento mas que nada la validación de los formularios: específicamente utilizando el metodo de validityState para validar los datos de entrada, crear función para controlar el estado del botón submit, utilizar la función enableValidation para activar la validación, asi como tambien tomar como argumento un objeto que contiene clases y selectores, los cuales se utilizan luego en sus funciones anidadas. Tambien se añadió un detector de eventos que permite cerrarla pulsando esc.

En la cuarta parte del proyecto se reorganizó el código de JS, utilizando POO, por ahora se utlizó la encapsulación que son los métodos privados y propiedades privadas de cada clase de Card y FormValidator, y después se llaman a los métodos públicos generateCard() y enableValidation() y tambien se hace la modularización: separación en el archivo por módulos para Card.js, FormValidator.js, utils.js e index.js
No hubo herencia, me parece, ya que Card y FormValidator son clases independientes, y no heredan de una clase base.
Tampoco hubo polimorfismo, no hay metodos sobrescritos.
Tambien se implemento el uso de export e import entre los módulos.

Quinta parte del proyecto: se refactorizó, esta vez se crearon las clases de Popup, PopupWithForm, PopupWithImage, Section y UserInfo, para organizar las tareas específicas para cada clase y comunicarse a traves de callbacks. Se implementó la herencia, con la clase Popup, y la encapsulación, con métodos privados en Popup y PopupWithForm. Tambien se implementó el acoplamiento debil.

Mi proyecto: https://daniela1602-ag.github.io/web_project_around/

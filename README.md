# DSI-Project

Readme inicial

- [x] Ventana Iniciar sesión.
- [x] Ventana Registrarse.
- [ ] En progreso: Función para comprobar que los datos han sido introducidos de forma correcta.
- [x] Página de información del cine, galería de imágenes asociadas a la película que al hacer hover aparezcan más grandes.
- [ ] En progreso: zona inferior con las películas de PelisRes, implementada cabezera y estrucutra de la línea de los breadcrumbs.

----------

Guía de ficheros:

- registro (.html, .css, .js): documentos asociados a las ventanas de iniciar sesión y registrarse de la página de Home.
- pagPelicula (.html, .css, .js): documentos asociados a la página de información de una película.
- PelisRes (.html, .css): página de resultados de películas.
- CinesRes (.html, .css): página de resultados de cines (todavía no implementada).

----------

Cosas de Resultados de Películas:

 - No soy capaz de centrar el select de ordenar altura.
 - Faltan cosas por arreglar de la estructura de abajo (el texto de debajo de la película hace lo que quiere).
 - Las imágenes de ordenar deberán responder para ordenar lo demás, he estado investigando y es posible que con poner backface-visibility: hidden; o algo similar valdría, que luego una función se encargase de cambiar el valor de este atributo en los elementos de un tipo de la clase y fuera, creo que también valdria con algo de block inline (consultaré la práctica de interfaces para esto e informaré).
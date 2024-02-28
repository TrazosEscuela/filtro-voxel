# Documentación del filtro de las formaciones en la web de Trazos

## Descripción General

Este script de JavaScript está diseñado para ser implementado en la web Trazos. Su objetivo es añadir interactividad avanzada a la página, permitiendo a los usuarios filtrar elementos basados en categorías y modalidades de formación (presencial y online). Este código filtra varias cosas.

1. **Menú superior** aquí se muestran 4 botones que filtran los contenedores generales de WordPress (fp, presencial, online, e-learning). Este elemento html es el primer conjunto de botones del código señalizado en los comentarios con "menu superior"

2. **Menú areas de formación** aquí aparecen varios botones que filtran dentro de cada container según el area clickada, debe situarse dentro de los contenedores padre que filtra el menú superior. Este elemento html esta señalizado en el código con "menu areas".

3. **Submenu formación** justo debajo del menú areas colocar este elemento que esta señalizado en los comentarios con "Submenu formacion"

### Esta demo no cuenta con responsive pero al añadirlo a wordpress se vuelve responsive gracias a los estilos propios de wordpress

## Implementación en WordPress

Para integrar este script en un sitio de WordPress, sigue estos pasos:

1. **Crea un container**, en el añade menu superior y el codigo de js en dos code block

2. **Crear los cuatro contenedores padre**: añadeles las clases `contenedor__padre contenedor__padre--active` a cada uno.

3. **Crea los menus de area y submenus** dentro de cada bloque padre en dos code block code block usando los codigos señalados como menus area presencial/online y submenu presencial/online.

4. **Crea los contenedores a filtrar** dentro de cada contenedor padre crea los contenedores con la información pertinente. A estos se les debe agregar las clases:

- `box__style `: para dar la sombra y el estilo
- ` contenedor__hijo__presencial`, `contenedor__hijo__presencial--active`: sutituyendo presencial por online cuando sea necesario
- `todos`: para poder previsualizar todos cuando se cambia de sección
- `carreras` , `grafico`: estas dos son las que hay que cambiar depende de la formación. Estas dos clases determinan en que filtro aparece. se pueden añadir mas de estas y la totalidad de ellas estan en las dos constantes que hay en el main.js: formaciones y categorias.

5. **CSS**: copiar la hoja de estilos css `styles.css` menos los dos imports de las lineas 1 y 2

## Lógica del código

Este código genera dos diccionarios de palabras, por otro lado recoge el total de los contenedores a mostrar y los filtra filtrando ambos. Convierte el nodeList de los elementos en un array para modificarlo y quitar la clase --active a cada uno que no corresponde

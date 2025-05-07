# Parcial 2do Corte - Daniel Alejandro Estrada Román

Este proyecto es una página web que está desarrollada con HTML, CSS y JavaScript puro, y cuenta con navegación entre páginas, modo claro/oscuro, y un formulario funcional de contacto a través de EmailJS.

## Estructura del Proyecto

- `index.html` — Página de inicio (presentación personal)
- `proyects.html` — Sección de proyectos realizados en Codepen y GitHub
- `contacto.html` — Formulario de contacto conectado a EmailJS
- `estilos_p2.css` — Hoja de estilos que controla toda la apariencia, incluyendo tema claro/oscuro y diseño responsive
- `scripts_p2.js` — JavaScript que gestiona el cambio de tema y el envío de correos

## Cambiar Tema (Claro/Oscuro)

El sitio incluye un botón en el menú de navegación llamado **“Cambiar tema”**, que permite alternar entre modo claro y oscuro. Este cambio afecta toda la apariencia del sitio y **se mantiene entre páginas** gracias al uso de `localStorage`.

El tema claro modifica las variables CSS personalizadas para invertir colores de fondo y texto en todos los elementos principales.

## Formulario de Contacto (con EmailJS)

En la página `contacto.html` se encuentra un formulario donde los visitantes pueden ingresar su nombre, correo electrónico y mensaje.

Este formulario utiliza [EmailJS](https://www.emailjs.com/) para enviar los datos directamente desde el navegador, sin necesidad de backend. El código ya está configurado, pero debes tener en cuenta lo siguiente:

- **Clave pública de EmailJS**: ya inicializada en el script.
- **ID del servicio y plantilla**: definidos en el archivo `scripts_p2.js`.

>  Asegúrate de tener tu cuenta de EmailJS configurada con los mismos IDs para que funcione correctamente.

## Responsive Design (Diseño Adaptativo)

El sitio está optimizado para **dispositivos móviles** mediante media queries. En pantallas pequeñas:

- El menú se convierte en un menú hamburguesa.
- Las secciones de contenido que usan estructura de tabla o tarjetas **se pueden desplazar horizontalmente** (scroll horizontal) para que el contenido no se corte.

Esto aplica para:

- Las **tablas de características** (Cualidades, Virtudes, Valores) en `index.html`
- Las **tarjetas de proyectos** en `proyects.html`

## Versión Móvil

- En la versión para móviles, puedes **moverte horizontalmente** para ver los contenidos de las tablas.

Página de inicio donde se presenta el nombre del autor, su rol como desarrollador frontend, y una tabla con **cualidades**, **virtudes** y **valores**.

---

## Página `index.html`

Página de inicio donde se presenta el nombre del autor, su rol como desarrollador frontend, y una tabla con **cualidades**, **virtudes** y **valores**.

---

## Página `proyects.html`

Sección que muestra enlaces a proyectos desarrollados por el autor. Está dividida en tres columnas:

- **Codepen**: versiones de páginas como Bloodborne o FC Barcelona.
- **GitHub**: enlace a la página publicada en GitHub Pages y su repositorio.
- **Perfiles**: enlaces a los perfiles del autor en GitHub y Codepen.

> En dispositivos móviles, **esta sección se puede deslizar horizontalmente**.

---

## Página `contacto.html`

Formulario de contacto funcional usando **EmailJS**. El usuario puede enviar su nombre, correo y mensaje.

> El formulario valida que el correo tenga formato correcto antes de enviarse.

---

## Archivo `estilos_p2.css`

Contiene todos los estilos del proyecto. Soporta **modo claro y oscuro** usando variables CSS (`:root`) y la clase `tema-claro` en el `<body>`.

> El diseño es completamente **responsivo** y se adapta a pantallas móviles.

---

## Archivo `scripts_p2.js`

Controla las siguientes funcionalidades:

- Alternancia entre tema claro y oscuro
- Cierre del menú hamburguesa al hacer clic en un enlace
- Envío del formulario de contacto a través de **EmailJS**

---

## Tecnologías Usadas

- **HTML5** — Estructura de las páginas
- **CSS3** — Diseño visual, variables CSS, media queries
- **JavaScript (vanilla)** — Manipulación DOM, manejo de eventos, localStorage
- **EmailJS** — Envío de correos desde el frontend

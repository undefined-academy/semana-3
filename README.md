> # ⚠️ Mira el nuevo repositorio de Undefined Academy en https://github.com/glrodasz/academy
## ⛺ Semana 3

> 🏕️ [Base de conocimientos.](https://undefinedshell.notion.site/Semana-3-73f4277f993c4eb78d0d5aab7be42c94)

Ejercicios de la tercera semana.

## 🏋Clase 1 [EJERCICIOS]

### 🔥 Calentamiento

Terminar los juegos de **Flexbox Froggy** y **CSS Grid Garden**!

- [https://flexboxfroggy.com/#es](https://flexboxfroggy.com/#es)
- [https://cssgridgarden.com/#es](https://cssgridgarden.com/#es)

### 💻 Ejercicio

1. Crear su propio layout de cards que muestre las entradas de su blog usando el layout visto en clase.
2. No lo hagas literal, asegúrate de tener un cambio diferencial.

## 🏋Clase 2 [EJERCICIOS]

### 🔥 Calentamiento

Agregar la siguiente etiqueta meta a tu HTML de la hoja de vida:

```html
 <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
```

1. Abrir la hoja de vida en el navegador (Usando `npx vite dev` ).
2. Abrir el inspector haciendo clic derecho > Inspeccionar en el navegador.
3. Hacer clic en la vista responsive (El icono del smartphone).
4. Constatar los cambios en vista responsive con y sin la etiqueta meta.

### 💻 Ejercicio

1. Crear una versión **Mobile First Responsive** de su hoja de vida (CV).
2. Hacer commit de dichos cambios, o multiples commits [1].

[1] No haremos fork ni un pull request por ahora.

## 🏋Clase 3 [EJERCICIO]

1. Ejecutar `npm init -y` en la raíz del proyecto de la hoja de vida.
2. Agregar vite como dependencia `npm install vite`.
3. Agregar en el `package.json` los scripts de **vite**:

```json
{
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
    }
}

```

### Añade tu primer archivo de JavaScript

1. Agrega un tag de `<script type="module" src="/main.mjs"></script>`
2. Escribe en el archivo el siguiente código:

```javascript
// main.mjs
function handleSubmit(event) {
    event.preventDefault(); // 🍎
    console.log("Hola mundo");
}
    
const $form =document.querySelector("form");
$form.addEventListener("submit", handleSubmit);
```

**Haz submit del formulario** y revisa la consola (clic derecho inspeccionar > consola)

🍎  Debemos prevenir el comportamiento por defecto del envío de la información al servidor.

## 🏋Clase 4 [EJERCICIO]

1. Hacer fork del repositorio de la semana-3 `https://github.com/undefined-academy/semana-3`
2. Subir la maquetación de la portada de blog usando Flexbox y CSS Grid a la carpeta `students-blog`.
3. Subir la maquetación mobile first responsive de la hoja de vida a la carpeta `students-cv`.
4. Elegir entre Bootstrap o TailwindCSS y maquetar el formulario de contacto con dicha tecnología en la carpeta `student-forms`.

### Estructura del PR

```Markdown
.
├── student-cvs/
│ └── glrodasz-0666/
│     ├── index.html
│     ├── form.html
│     ├── styles.css
│     └── main.mjs
├── student-blogs/
│ └── glrodasz-0666/
│     ├── index.html
│     └── styles.css
└── student-forms/
    └── glrodasz-0666/
        ├── src
        └── package.json
```

⭐ **¡Si usas ambos, crea las carpetas dentro de `student-forms/usuario-de-discord/bootstrap|tailwind` !**

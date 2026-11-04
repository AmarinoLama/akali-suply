# Akali Suply · Supply MTG

> **Tu juego nuestro suply**

Tienda estática (HTML + CSS + JS) de supply para Magic: The Gathering, ambientada en
**Yuriko** y **Liliana**. **Sin build, sin dependencias, sin servidor**: se sube a
GitHub Pages y funciona.

## Estructura

```
mtgSuplyShop/
├── index.html      → toda la página (hero, catálogo, fundas, opiniones, contacto)
├── styles.css      → estilos (tema morado, fondo animado, responsive)
├── app.js          → catálogo, filtros, carrito y checkout por WhatsApp
├── assets/         → arte de producto, escena de apertura y favicon
└── .nojekyll       → evita que GitHub Pages procese la carpeta con Jekyll
```

## 1. WhatsApp

Configurado en `app.js`:

```js
const CONFIG = {
  whatsappNumber: "34612478437", // +34 612 47 84 37
  ...
};
```

Formato: prefijo de país + número, sin espacios ni símbolos. Lo usan la cabecera, el
hero, el contacto, el botón flotante, el checkout del carrito y la tarjeta
**“Pedir stock”**.

## 2. Precios y catálogo

Todo está en el array `PRODUCTS` de `app.js`:

| Producto | Precio | Categoría |
| --- | --- | --- |
| Fundas negras · 100 | 5 € | `fundas` |
| Fundas de color · 100 | 6 € | `fundas` |
| D20 · unidad | 2 € | `dados` |
| Dados MTG +1/+1 · unidad | 1,50 € | `dados` |
| Deckbox transparente | 6 € | `deckboxes` |
| Tapetes Yuriko y Liliana | Próximamente | `tapetes` |

- **Sin gastos de envío** en la web: el carrito solo muestra el total y el envío se
  confirma por WhatsApp. (No hay `shippingCost` ni umbral de envío gratis.)
- La tarjeta de **tapetes** es de tipo `type: "soon"`: no se puede comprar, lleva el
  botón “Avisadme” que abre WhatsApp con un mensaje ya escrito.
- En mitad de la cuadrícula se inserta siempre una tarjeta **“¿Falta justo lo que
  buscas?”** con el botón “Pedir stock” (WhatsApp con mensaje editable).

Cada producto:

```js
{
  id: "dados-mtg",                 // identificador único
  name: "Dados MTG +1/+1 · unidad",
  cat: "dados",                    // dados | deckboxes | fundas | tapetes
  price: 1.5,                      // euros
  unit: true,                      // muestra "/ ud." junto al precio
  img: "assets/p-dados-mtg.svg",
  desc: "Texto corto para la tarjeta.",
  badge: "1,50 €/ud",              // opcional
  badgeType: "hot" | "value",      // opcional
  colors: ["#ff8fb8"]              // opcional, bolitas de color
}
```

El carrito se guarda en `localStorage` (clave `akali-cart-v1`).

## 3. Opiniones

En `index.html`, sección `#opiniones`: Amán, Gabriel, Said y Hanks. Para cambiar un
texto, busca el nombre y edita el `<p class="review-text">`. La nota media está en
`.rating-box`.

## 4. Escenario inmersivo

Al cargar, la home ocupa la pantalla completa con `assets/escena/hechicera-guerrera.webp`:
toda la escena se ve unida. Al hacer scroll se parte por la mitad y las dos mitades
se van cada una a su lado, con un brillo en la costura y desvanecido, dejando ver el
catálogo (variable `--scene` aplicada desde `app.js`).

- En escritorio, cada mitad ocupa media pantalla y la imagen va a sangre.
- En móvil, la escena es una banda panorámica arriba (`42vw` de alto) y el texto va
  debajo; las mitades también se abren al scroll.
- Partículas (estrellas y destellos) generadas por JS en `#bgParticles`.
- Chispas moradas al pulsar en cualquier punto de la página (`#sparkLayer`).
- Luna creciente animada y luz morada que sigue al cursor (`#cursorGlow`).
- Todo se desactiva con `prefers-reduced-motion`.

### Cambiar la imagen de la escena

1. Usa una imagen horizontal, idealmente 16:9 (la actual es 1672×941).
2. Guárdala en `assets/escena/` (mejor WebP de menos de 300 KB).
3. Cambia los **dos** `src` de `.scene-half img` en `index.html`.
4. Si cambias la proporción, ajusta la altura de la banda en el media query de
   `900px` (`styles.css`).

> **Importante:** usa solo imágenes propias, encargadas o con permiso escrito de uso
> comercial. Las ilustraciones oficiales de Magic y los escaneos de cartas no se
> pueden usar en una tienda, aunque estén publicadas en Google o en wikis.

## 5. Probar en local

```bash
cd mtgSuplyShop
python -m http.server 8000
```

Y visita `http://localhost:8000`.

## 6. Desplegar en GitHub Pages

### Opción A — el sitio es la raíz del repo (recomendado)

1. Crea un repo nuevo y copia el **contenido** de `mtgSuplyShop/` en la raíz
   (`index.html`, `styles.css`, `app.js`, `assets/`, `.nojekyll`).
2. `git add . && git commit -m "Akali Suply" && git push`
3. En GitHub: **Settings → Pages → Source: Deploy from a branch**, rama `main`
   y carpeta `/ (root)`. Guarda.
4. En 1–2 minutos tendrás la URL `https://TU-USUARIO.github.io/TU-REPO/`.

### Opción B — dentro de un repo existente

Sube la carpeta `mtgSuplyShop/` tal cual, activa Pages en la raíz y entra en
`https://TU-USUARIO.github.io/TU-REPO/mtgSuplyShop/`.

> Para un usuario/organización, el repo debe llamarse `TU-USUARIO.github.io`
> para servirse en `https://TU-USUARIO.github.io/`.

## Notas

- Tipografías de Google Fonts (Sora + Inter); si no hay conexión se usan las del sistema.
- El pie incluye el aviso de que la tienda no está afiliada a Wizards of the Coast.

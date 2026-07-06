# Boda-invi

Invitación de boda construida con [Next.js 15](https://nextjs.org) (App Router) + [Tailwind CSS v4](https://tailwindcss.com) + TypeScript.

Este proyecto es la base para migrar la página de HTML puro a una plataforma más mantenible con componentes de React.

## Requisitos

- Node.js 18.18 o superior (recomendado 20+)

## Empezar

Instala las dependencias:

```bash
npm install
```

Levanta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura

```
src/
  app/
    layout.tsx    # Layout raíz (fuentes, metadata, <html>)
    page.tsx      # Página principal (aquí va el contenido migrado)
    globals.css   # Estilos globales + import de Tailwind
public/           # Imágenes y assets estáticos
```

## Scripts

| Comando         | Descripción                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Servidor de desarrollo               |
| `npm run build` | Compila para producción              |
| `npm run start` | Sirve la build de producción         |
| `npm run lint`  | Linter (ESLint + reglas de Next)     |

## Cómo migrar el HTML existente

1. Copia las imágenes/fuentes a `public/`.
2. Divide el HTML en secciones y llévalas a `src/app/page.tsx` (o crea componentes en `src/components/`).
3. Reemplaza clases CSS por utilidades de Tailwind, o mueve estilos personalizados a `globals.css`.
4. Cambia `class=` por `className=` y cierra las etiquetas (`<img />`, `<br />`).

# Assets estáticos

Coloca aquí los archivos que el HTML original referenciaba. Las rutas deben
coincidir con las definidas en `src/lib/invitation.ts`.

```
public/
├── Invitaciones/
│   ├── 1765644046.png   (imagen secundaria)
│   ├── 1765644094.png   (galería de tarjetas)
│   └── 1765644198.png   (galería de tarjetas)
├── Fotos/
│   ├── 1764868073.png
│   ├── 1764868112.png
│   └── 1764868146.png
├── img/
│   ├── CeremoniaIcono.png
│   ├── RecepcionIcono.png
│   ├── CodigoDeVestimenta.png
│   └── LineaItinerario.png
└── Musica/
    └── 14.mp3
```

Mientras no existan, las imágenes se verán rotas (404), pero la app compila y
funciona. Sustituye las rutas en `src/lib/invitation.ts` si prefieres otros
nombres.

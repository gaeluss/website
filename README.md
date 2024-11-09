# 🌠 Gaeluss - Astro + Tailwind CSS

![Astro](https://img.shields.io/badge/Astro-333333?style=for-the-badge&logo=astro&logoColor=FF5E00)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![PNPM](https://img.shields.io/badge/PNPM-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

> 🚀 Gaeluss es un proyecto que combina **Astro** y **Tailwind CSS** para crear una experiencia web moderna y de alto rendimiento. Utilizamos `pnpm` para la gestión eficiente de dependencias, proporcionando una base sólida para el desarrollo rápido y escalable de sitios web.

## ✨ Características

- **Astro**: Framework basado en componentes que optimiza la carga del sitio y el rendimiento.
- **Tailwind CSS**: Framework de utilidades para crear interfaces modernas y responsivas rápidamente.
- **pnpm**: Gestor de paquetes rápido y eficiente.
- **Multilenguaje**: Soporte para múltiples idiomas utilizando `i18n`.

## 📦 Instalación

Para comenzar a trabajar en este proyecto, primero asegúrate de tener `pnpm` instalado en tu máquina. Si no lo tienes, puedes instalarlo ejecutando:

```sh
npm install -g pnpm
```

Luego, clona el repositorio e instala las dependencias:

```sh
git clone https://github.com/tu-usuario/gaeluss.git
cd gaeluss
pnpm install
```

## 🚀 Iniciar el Proyecto

Para iniciar el servidor de desarrollo, ejecuta:

```sh
pnpm dev
```

Esto iniciará un servidor local en `http://localhost:3000` donde podrás ver y trabajar en el proyecto en tiempo real.

## 🛠️ Comandos Disponibles

- `pnpm dev` - Inicia el servidor de desarrollo.
- `pnpm build` - Crea una versión optimizada para producción.
- `pnpm preview` - Previsualiza la versión optimizada.
- `pnpm lint` - Revisa el código para encontrar errores y aplicar buenas prácticas.

## 📂 Estructura del Proyecto

```sh
├── public/                # Archivos estáticos
├── src/
│   ├── components/        # Componentes reutilizables de Astro
│   ├── layouts/           # Layouts para páginas
│   ├── pages/             # Páginas principales del sitio
│   └── i18n/              # Archivos de internacionalización
├── astro.config.mjs       # Configuración de Astro
├── tailwind.config.cjs    # Configuración de Tailwind CSS
└── package.json           # Archivo de configuración de dependencias
```

## 🌌 Tecnologías Utilizadas

- **[Astro](https://astro.build/)** 
- **[Tailwind CSS](https://tailwindcss.com/)** 
- **[pnpm](https://pnpm.io/)** 

## 🌍 Despliegue

Puedes desplegar este proyecto utilizando servicios como **Vercel** o **Netlify**. Ambos soportan Astro de forma nativa.

Para desplegar en **Vercel**, puedes utilizar el siguiente comando:

```sh
pnpm build
```

Luego sube la carpeta `dist/` a Vercel o conecta tu repositorio a través de su interfaz gráfica.

## 📜 Contribuir

¡Contribuciones son siempre bienvenidas! Si quieres contribuir:

1. Haz un **fork** del proyecto.
2. Crea una nueva **rama** (`git checkout -b feature/nueva-caracteristica`).
3. Realiza los cambios y haz **commit** (`git commit -m 'Añadir nueva característica'`).
4. Envía los cambios a tu repositorio (`git push origin feature/nueva-caracteristica`).
5. Abre un **pull request**.

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

## 💬 Contacto

Si tienes alguna duda o sugerencia, siéntete libre de contactar:

- **Email**: info@gaeluss.com

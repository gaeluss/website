# 🌠 Gaeluss - Astro + Tailwind CSS

![Astro](https://img.shields.io/badge/Astro-333333?style=for-the-badge&logo=astro&logoColor=FF5E00)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![PNPM](https://img.shields.io/badge/PNPM-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

> 🚀 Gaeluss is a project that combines **Astro** and **Tailwind CSS** to create a modern, high-performance web experience. We use `pnpm` for efficient dependency management, providing a solid foundation for rapid and scalable web development.

## ✨ Features

- **Astro**: Component-based framework that optimizes site loading and performance.
- **Tailwind CSS**: Utility-first CSS framework for quickly creating modern and responsive interfaces.
- **pnpm**: Fast and efficient package manager.
- **Multilanguage**: Support for multiple languages using `i18n`.

## 📦 Installation

To get started with this project, make sure you have Node.js 22.23.4 or later (the version in `.nvmrc`, use `nvm use`) and `pnpm` installed on your machine. If you don't have it yet, you can install it by running:

```sh
npm install -g pnpm
```

Then, clone the repository and install the dependencies:

```sh
git clone https://github.com/tu-usuario/gaeluss.git
cd gaeluss
pnpm install
```

## 🚀 Starting the Project

To start the development server, run:

```sh
pnpm dev
```

This will start a local server at http://localhost:4321 where you can view and work on the project in real time.

## 🛠️ Available Commands

- `pnpm dev` - Starts the development server.
- `pnpm build` - Builds an optimized version for production.
- `pnpm preview` - Previews the optimized build.
- `pnpm astro check` - Type-checks the project (also runs as part of `pnpm build`).

## 📂 Project Structure

```sh
├── public/                # Static files (robots.txt, sitemap.xml, fonts, media)
├── src/
│   ├── components/        # Reusable Astro components
│   ├── layouts/           # Layouts for pages
│   ├── pages/             # Main site pages
│   ├── i18n/              # Internationalization files
│   └── styles/            # Global CSS (Tailwind)
├── astro.config.mjs       # Astro configuration
└── package.json           # Dependency configuration file
```

## 🌌 Technologies Used

- **[Astro](https://astro.build/)** 
- **[Tailwind CSS](https://tailwindcss.com/)** 
- **[pnpm](https://pnpm.io/)** 

## 🌍 Deployment

You can deploy this project using services like **Vercel** or **Netlify**. Both of which support Astro natively

To deploy on **Vercel**, you can use the following command:

```sh
pnpm build
```

Then upload the `dist/` folder to Vercel or connect your repository through their graphical interface.

## 📜 Contributing

Contributions are always welcome! If you want to contribute:

1. **Fork** the project.
2. Create a new **branch** (`git checkout -b feature/new-feature`).
3. Make your changes and **commit** them (`git commit -m 'Add new feature'`).
4. Push your changes to your repository (`git push origin feature/new-feature`).
5. Open a **pull request**.

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.

## 💬 Contact

If you have any questions or suggestions, feel free to get in touch:

- **Email**: info@gaeluss.com

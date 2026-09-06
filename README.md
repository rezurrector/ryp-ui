# RYP UI

[![CI](https://github.com/rezurrector/ryp-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/rezurrector/ryp-ui/actions/workflows/ci.yml)
[![Release](https://github.com/rezurrector/ryp-ui/actions/workflows/release.yml/badge.svg)](https://github.com/rezurrector/ryp-ui/actions/workflows/release.yml)
[![Storybook](https://github.com/rezurrector/ryp-ui/actions/workflows/storybook.yml/badge.svg)](https://github.com/rezurrector/ryp-ui/actions/workflows/storybook.yml)
[![npm version](https://img.shields.io/npm/v/@ryp/ui.svg)](https://www.npmjs.com/package/@ryp/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **RYP's Production-Ready React Component Library** built with shadcn/ui, TypeScript, tsup, pnpm, Vitest, Storybook, MSW, Changesets, and VP CLI.

A **SOLID**, **DRY**, **KISS** component library optimized for performance, developer experience, and maintainability.

## Features

- **⚡ Fast Builds** - tsup for ultra-fast, tree-shakable builds
- **👡 Strict Dependencies** - pnpm for efficient, strict dependency management
- **👤 Robust Testing** - Vitest for fast, modern testing
- **👨 Interactive Docs** - Storybook 8 with zero-config MDX support
- **🔄 Automated Releases** - Changesets for semantic versioning and changelog generation
- **🎮 API Mocking** - MSW (Mock Service Worker) for seamless API mocking
- **🎨 Modern UI** - shadcn/ui components with Tailwind CSS
- **🔢 Type Safe** - Full TypeScript support with strict mode
- **💡 Git Hooks** - Husky + lint-staged for clean commits
- **🚀 VP CLI** - Enhanced Vite configurations via viteplus.dev

## Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Build** | [tsup](https://tsup.egoist.dev/) | Fast, tree-shakable library builds |
| **Bundler** | [Vite](https://vitejs.dev/) | Modern, fast development server |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| **UI Library** | [shadcn/ui](https://ui.shadcn.com/) | Radix-based, unstyled components |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| **Package Manager** | [pnpm](https://pnpm.io/) | Fast, disk-space efficient |
| **Testing** | [Vitest](https://vitest.dev/) | Fast, Vite-native testing |
| **Docs** | [Storybook](https://storybook.js.org/) | Component documentation |
| **API Mocking** | [MSW](https://mswjs.io/) | Mock HTTP requests |
| **Versioning** | [Changesets](https://github.com/changesets/changesets) | Semantic versioning |
| **Git Hooks** | [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged) | Commit hooks |
| **CLI** | [VP CLI](https://viteplus.dev/) | Enhanced Vite configs |

## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm 8+ (recommended)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rezurrector/ryp-ui.git
   cd ryp-ui
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **Open Storybook:**
   ```bash
   pnpm storybook
   ```

   Then open [http://localhost:6006](http://localhost:6006) in your browser.

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start Vite development server |
| `pnpm build` | Build the library with tsup |
| `pnpm lint` | Run ESLint on all TypeScript files |
| `pnpm lint:fix` | Run ESLint with auto-fix |
| `pnpm format` | Format code with Prettier |
| `pnpm test` | Run tests with Vitest |
| `pnpm test:ui` | Run tests with Vitest UI |
| `pnpm test:coverage` | Run tests with coverage |
| `pnpm storybook` | Start Storybook development server |
| `pnpm storybook:build` | Build Storybook for deployment |
| `pnpm changeset` | Create a new changeset |
| `pnpm version` | Bump versions based on changesets |
| `pnpm release` | Publish packages to npm |

## Project Structure

```
ryp-ui/
├── .changeset/               # Changesets configuration
│   └── config.json
├── .github/
│   └── workflows/
│       ├── ci.yml           # CI workflow
│       ├── release.yml      # Release workflow
│       └── storybook.yml    # Storybook deployment
├── .husky/
│   └── pre-commit           # Git hook
├── .storybook/
│   ├── main.ts             # Storybook main config
│   └── preview.ts          # Storybook preview config
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx      # Button component
│   │       ├── button.stories.tsx
│   │       └── button.test.tsx
│   ├── lib/
│   │   ├── styles.css       # Global styles
│   │   └── utils.ts         # Utility functions
│   ├── mocks/
│   │   ├── browser.ts       # MSW browser setup
│   │   ├── handlers.ts      # MSW handlers
│   │   └── server.ts        # MSW server setup
│   └── tests/
│       └── setup.ts         # Test setup
└── index.ts             # Library entry point
├── stories/                 # Storybook stories
│   └── page.tsx
├── .editorconfig
├── .env.example             # Environment variables template
├── .eslintrc.cjs           # ESLint configuration
├── .gitignore
├── .prettierrc             # Prettier configuration
├── lint-staged.config.js   # lint-staged configuration
├── package.json
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # TypeScript configuration for Node
├── vite.config.ts          # Vite configuration
├── tsup.config.ts          # tsup configuration
├── vp.config.ts            # VP CLI configuration
└── README.md
└── CHANGELOG.md
└── LICENSE
```

## Development Workflow

### 1. Creating New Components

To add a new component:

1. Create the component file in `src/components/ui/`:
   ```bash
   touch src/components/ui/card.tsx
   ```

2. Create a test file:
   ```bash
   touch src/components/ui/card.test.tsx
   ```

3. Create a Storybook story:
   ```bash
   touch src/components/ui/card.stories.tsx
   ```

4. Export the component in `src/index.ts`:
   ```typescript
   export * from './components/ui/card';
   ```

### 2. Running Tests

```bash
# Run all tests
pnpm test

# Run tests with UI
pnpm test:ui

# Run tests with coverage
pnpm test:coverage
```

### 3. Linting and Formatting

```bash
# Run linter
pnpm lint

# Auto-fix lint issues
pnpm lint:fix

# Format code
pnpm format
```

### 4. Adding Dependencies

```bash
# Add a production dependency
pnpm add <package>

# Add a development dependency
pnpm add -D <package>

# Add a peer dependency
pnpm add -P <package>
```

### 5. Version Management

This project uses **Changesets** for version management:

1. **Create a changeset:**
   ```bash
   pnpm changeset
   ```
   Follow the prompts to select packages and describe changes.

2. **Apply version bumps:**
   ```bash
   pnpm version
   ```
   This updates versions in package.json and generates CHANGELOG.md.

3. **Publish:**
   ```bash
   pnpm release
   ```
   This publishes to npm, creates a Git tag, and pushes to GitHub.

## API Mocking with MSW

This project uses [MSW](https://mswjs.io/) for API mocking:

### Setup

1. **Browser usage (development):**
   ```tsx
   import { startWorker } from './mocks/browser';
   
   // Start in your app's entry point
   startWorker();
   ```

2. **Node.js usage (testing):**
   ```ts
   import { setupTestServer } from './mocks/server';
   
   // In your test setup file
   setupTestServer();
   ```

### Adding Handlers

Edit `src/mocks/handlers.ts` to add your API endpoints:

```typescript
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: '1', name: 'John Doe' },
    ]);
  }),
];
```

## Storybook

### Local Development

```bash
pnpm storybook
```

Opens Storybook at [http://localhost:6006](http://localhost:6006).

### Building for Production

```bash
pnpm storybook:build
```

Creates a static build in `storybook-static/`.

### Deployment

This project includes a GitHub Actions workflow that automatically deploys Storybook to GitHub Pages on push to `main`.

To deploy to a custom domain:

1. Update `STORYBOOK_BASE_URL` in `.env.example`
2. Configure your domain's CNAME to point to GitHub Pages

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

Required variables:
- `NPM_TOKEN` - For publishing to npm
- `GITHUB_TOKEN` - For GitHub Actions

## VP CLI Configuration

This project uses [viteplus.dev](https://viteplus.dev/) for enhanced Vite configurations. The configuration is in `vp.config.ts`.

### Available Features

- **Optimized builds** - Pre-bundling and tree-shaking
- **TypeScript strict mode** - Enhanced type checking
- **Test coverage** - Integrated coverage reporting
- **Storybook integration** - Seamless Storybook support

## Conventional Commits

This project follows [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

- `feat:` - A new feature
- `fix:` - A bug fix
- `docs:` - Documentation only changes
- `style:` - Changes that do not affect the meaning of the code
- `refactor:` - A code change that neither fixes a bug nor adds a feature
- `perf:` - A code change that improves performance
- `test:` - Adding missing tests
- `chore:` - Changes to the build process or auxiliary tools

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Commit your changes (`git commit -m 'feat: add your feature'`)
4. Push to the branch (`git push origin feat/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Issues** - [GitHub Issues](https://github.com/rezurrector/ryp-ui/issues)
- **Discussions** - [GitHub Discussions](https://github.com/rezurrector/ryp-ui/discussions)
- **Email** - angel.marquez@gmail.com

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - For the amazing component library
- [Vite](https://vitejs.dev/) - For the fast development server
- [tsup](https://tsup.egoist.dev/) - For the fast builds
- [Changesets](https://github.com/changesets/changesets) - For the version management
- [MSW](https://mswjs.io/) - For the API mocking
- [Storybook](https://storybook.js.org/) - For the documentation

---

Built with ❤️ by [Angel Robert Marquez](https://github.com/rezurrector)

*Part of the RYP organization*
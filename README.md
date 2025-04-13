
## Installation

To set up the monorepo locally, follow these steps:

1. **Clone the repo**:
    ```bash
    git clone https://github.com/your-username/neighbor-net.git
    cd neighbor-net
    ```

2. **Install dependencies**:
    Since this is a monorepo, you can use a tool like [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) or [pnpm](https://pnpm.io/) to install dependencies. Alternatively, you can use NPM.

    To install dependencies using npm, run the following command:
    ```bash
    npm install
    ```

3. **Run the web app**:
    ```bash
    cd apps/web
    npm run dev
    ```

4. **Run the mobile app** (once added):
    ```bash
    cd apps/mobile
    npm start
    ```

## Development

- **Web App**: Located in the `apps/web` directory, this app is built using [Next.js](https://nextjs.org/), React, and TypeScript.
- **UI Components**: Shared UI components are located in the `packages/ui` directory.
- **TypeScript Config**: Shared TypeScript configurations are located in `packages/typescript-config`.
- **ESLint Config**: Shared ESLint configurations are located in `packages/eslint-config`.

## Tools Used

- **Next.js**: Framework for building the web application.
- **React**: Frontend library for building the UI.
- **TypeScript**: Strongly-typed superset of JavaScript.
- **ESLint**: Linting tool to maintain code quality.
- **Prettier**: Code formatter.
- **TurboRepo**: Monorepo management tool for managing the monorepo and building apps efficiently.

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repo.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Open a pull request with a description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

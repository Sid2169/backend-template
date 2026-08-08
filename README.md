# backend-template

A reusable starting point for the Backend Engineering Studio curriculum:
TypeScript, linting, formatting, environment configuration, and debugging,
pre-wired.

## Requirements

- Node.js >= 22.18.0 (22 LTS or 24 LTS recommended)

## Setup

\`\`\`bash
npm install
cp .env.example .env
npm run dev
\`\`\`

## Scripts

| Script                            | Purpose                                    |
| --------------------------------- | ------------------------------------------ |
| `npm run dev`                     | Run the server, restarting on file changes |
| `npm start`                       | Run the server once, no watch mode         |
| `npm run typecheck`               | Type-check the project without emitting    |
| `npm run lint` / `lint:fix`       | Check / automatically fix lint issues      |
| `npm run format` / `format:check` | Apply / verify formatting                  |

# `kurier-starter-pack-typescript`

A template to create projects using [Kurier](https://github.com/kurierjs/kurier), served with Koa and a Postgres database.

Features include:

- TypeScript environment, linted with Prettier
- Pre-configured user authentication
- Koa HTTP transport layer
- Postgres database available via `docker-compose`
- HTTP logs via [`logepi`](https://github.com/joelalejandro/logepi)

## Installation

[Click right here](https://github.com/kurierjs/kurier-starter-pack-typescript/generate) or use GitHub CLI:

```bash
gh repo create my-api -p kurierjs/kurier-starter-pack-typescript
```

## Usage

1. Run `npm install` to install all dependencies.
2. Run `docker-compose up -d` to start a daemonized Docker container with a Postgres database.
3. Run `yarn start:dev` and execute a request towards `http://localhost:3000`.

## Available commands

- `start:dev` runs the API in a local environment using `ts-node-dev`.
- `migrate:make <name>` creates a Knex migration file in `data/migrations/<timestamp>_<name>.ts`.
- `migrate:latest` runs all pending migrations.
- `migrate:rollback` reverts the last set of migrations.
- `seed:make <name>` creates a Knex seed file in `data/seeds/<name>.ts`.
- `seed:run` executes all seed files.

## License

MIT

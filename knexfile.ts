import { resolve } from "path";

export default {
  development: {
    client: "pg",
    connection: "postgresql://postgres:postgres@localhost:5432/postgres",
    useNullAsDefault: true,
    debug: true,
    seeds: {
      directory: resolve(__dirname, "data", "seeds")
    },
    migrations: {
      directory: resolve(__dirname, "data", "migrations")
    }
  }
};

import {
  Application,
  jsonApiKoa,
  UserManagementAddon,
  UserManagementAddonOptions,
  UserProcessor
} from "@ebryn/jsonapi-ts";
import * as Koa from "koa";
import * as Knex from "knex";
import { KoaLoggingMiddleware as logs, Log } from "logepi";

import knexConfig from "../knexfile";
import { permissionProvider, roleProvider } from "./providers";
import { User } from "./resources";
import { login } from "./services/user-management";

const app = new Application({
  /* Configure your app here */
  types: [],
  processors: [],
  services: {
    knex: Knex(knexConfig[process.env.NODE_ENV || "development"])
  }
});

app.use(UserManagementAddon, {
  userResource: User,
  userProcessor: UserProcessor,
  userLoginCallback: login,
  userRolesProvider: roleProvider,
  userPermissionsProvider: permissionProvider
} as UserManagementAddonOptions);

const api = new Koa();
const port = process.env.PORT || 3000;

api.use(jsonApiKoa(app)).use(logs());

api.listen(port, () => {
  Log.info("API is now ready", { tags: { port } });
});

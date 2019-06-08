import { User as JsonApiUser, Password } from "@ebryn/jsonapi-ts";

export class User extends JsonApiUser {
  static schema = {
    attributes: {
      username: String,
      password: Password
    },
    relationships: {}
  };
}

import { User as JsonApiUser, Password } from 'kurier';

export class User extends JsonApiUser {
  static schema = {
    attributes: {
      username: String,
      password: Password,
    },
    relationships: {},
  };
}

import { UserProcessor as JsonApiUserProcessor, Operation } from 'kurier';
import { v4 as uuid } from 'uuid';

import { User } from '../resources';
import { encryptPassword } from '../services/user-management';

export class UserProcessor<T extends User> extends JsonApiUserProcessor<T> {
  public static resourceClass = User;

  protected async generateId() {
    return uuid();
  }

  protected async encryptPassword(op: Operation) {
    return encryptPassword(op);
  }
}

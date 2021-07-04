import { ApplicationInstance, User } from 'kurier';

export async function roleProvider(this: ApplicationInstance, user: User): Promise<string[]> {
  // Serve your user roles from here.
  return [];
}

import { ApplicationInstance, User } from "@ebryn/jsonapi-ts";

export async function roleProvider(
  this: ApplicationInstance,
  user: User
): Promise<string[]> {
  // Serve your user roles from here.
  return [];
}

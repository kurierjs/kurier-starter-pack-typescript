import { ApplicationInstance, User } from "@ebryn/jsonapi-ts";

export async function permissionProvider(
  this: ApplicationInstance,
  user: User
): Promise<string[]> {
  // Serve your user permissions from here.
  return [];
}

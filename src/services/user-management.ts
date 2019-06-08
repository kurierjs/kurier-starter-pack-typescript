import { Operation, ResourceAttributes } from "@ebryn/jsonapi-ts";
import { hash } from "../utils";

export async function login(op: Operation, user: ResourceAttributes) {
  return (
    op.data.attributes.username === user.username &&
    (await encryptPassword(op)).password === user.password
  );
}

export async function encryptPassword(op: Operation) {
  return {
    password: hash(
      op.data.attributes.password as string,
      process.env.SESSION_KEY
    )
  };
}

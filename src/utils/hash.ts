import { createHmac } from "crypto";

export function hash(
  plainTextPassword: string,
  hashKey: string,
  algorithm = "sha512"
) {
  const hash = createHmac(algorithm, hashKey);
  hash.update(plainTextPassword);
  return hash.digest("hex");
}

import { validateOrReject } from "class-validator";
import { IUser } from "../../interfaces/IUser";

export async function validateUser(user: IUser) {
  try {
    await validateOrReject(user);
  } catch (err) {
    console.error(err);
    throw new Error("Error validating user" + err);
  }
}

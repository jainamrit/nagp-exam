import { ILoginInput } from "./ILoginInput";

export class LoginInput implements ILoginInput {
  constructor(public email?: string,
    public password?: string) { }
}

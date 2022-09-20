import { ILoginOutput } from "./ILoginOutput";

export class LoginOutput implements ILoginOutput {
  constructor(public email?: string,
    public id?: string,
    public name?: string,
    public password?: string) { }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginInput } from 'src/app/core/Interfaces/ILoginInput';
import { ILoginOutput } from 'src/app/core/Interfaces/ILoginOutput';
import { DummyData } from 'src/app/shared/DummyData/dummyData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  public loginUser(payLoad: ILoginInput): ILoginOutput {
    const loginUser: ILoginOutput = DummyData.loginUser.find((x) => x.email === payLoad.email && x.password === payLoad.password) as ILoginOutput
    return loginUser;
  }
}

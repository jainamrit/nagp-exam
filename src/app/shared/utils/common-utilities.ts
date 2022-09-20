import { BehaviorSubject, Observable } from "rxjs";

/**
 * Common utilities
 */
export class CommonUtilities {
  private static  isUserlogin = new BehaviorSubject<boolean>(false);

  public static setUserlogin(value: boolean) {
    this.isUserlogin.next(true);

  }

  public static getloginUser(): Observable<boolean> {
    return this.isUserlogin.asObservable();
  }
}

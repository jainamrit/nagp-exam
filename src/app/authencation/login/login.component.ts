import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginInput } from 'src/app/core/Interfaces/ILoginInput';
import { LoginInput } from 'src/app/core/Interfaces/LoginInput';
import { CommonUtilities } from 'src/app/shared/utils/common-utilities';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  private userCredentials: ILoginInput = new LoginInput();
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.createFrom()
  }

  private createFrom(): void {
    this.form = this.formBuilder.group({
      email: [this.userCredentials.email, Validators.required],
      password: [this.userCredentials.password, Validators.required]
    })
    this.valuesChanges()
  }

  public login(): void {
    const loginUser = this.authService.loginUser(this.userCredentials)
    if (loginUser && loginUser.id) {
      sessionStorage.setItem('loggedInUser', JSON.stringify(loginUser))
      CommonUtilities.setUserlogin(true)
      this.router.navigate(['company'])
    }
  }

  private valuesChanges(): void {
    (this.form.get('email') as AbstractControl).valueChanges.subscribe((data) => {
      this.userCredentials.email = data;
    });
    (this.form.get('password') as AbstractControl).valueChanges.subscribe((data) => {
      this.userCredentials.password = data;
    })
  }
}

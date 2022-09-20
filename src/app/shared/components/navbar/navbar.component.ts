import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonUtilities } from '../../utils/common-utilities';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isUserLogin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    CommonUtilities.getloginUser().subscribe((data) => {
      if (data) {
        const loginUser = sessionStorage.getItem("loggedInUser");
        if (loginUser != null) {
          this.isUserLogin = true
        }
        else {
          this.isUserLogin = false
        }
      }
    })

  }

  public navigate(index: number): void {
    if (index === 1) {
      this.router.navigate(['login'])
    }
    else if (index === 2) {
      this.router.navigate(['company'])
    }
    else if (index === 3) {
      this.router.navigate(['appliedJob'])
    }
  }

  public logOut(): void {
    this.isUserLogin = false
    sessionStorage.clear();
    this.router.navigate([''])
  }

}

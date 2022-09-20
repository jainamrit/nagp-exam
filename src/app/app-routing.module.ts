import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedjobComponent } from './applies-jobs/appliedjob/appliedjob.component';
import { LoginComponent } from './authencation/login/login.component';
import { CompanyComponent } from './companies/company/company.component';

const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'appliedJob', component: AppliedjobComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

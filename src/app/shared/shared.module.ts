import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreModule } from '../core/core.module';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CompaniesListComponent
  ],
  imports: [
    CommonModule, CoreModule
  ],
  exports: [NavbarComponent, CompaniesListComponent]
})
export class SharedModule { }

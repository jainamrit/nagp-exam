import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthencationModule } from './authencation/authencation.module';
import { CompaniesModule } from './companies/companies.module';
import { AppliesJobsModule } from './applies-jobs/applies-jobs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    CoreModule,
    AuthencationModule,
    CompaniesModule,
    AppliesJobsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

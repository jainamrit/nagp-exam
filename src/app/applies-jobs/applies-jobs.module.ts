import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppliedjobComponent } from './appliedjob/appliedjob.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AppliedjobComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AppliesJobsModule { }

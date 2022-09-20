import { Component, OnInit } from '@angular/core';
import { IAppliedJobs } from 'src/app/core/Interfaces/IAppliesJobs';
import { ILoginInput } from 'src/app/core/Interfaces/ILoginInput';
import { ILoginOutput } from 'src/app/core/Interfaces/ILoginOutput';
import { DummyData } from 'src/app/shared/DummyData/dummyData';

@Component({
  selector: 'app-appliedjob',
  templateUrl: './appliedjob.component.html',
  styleUrls: ['./appliedjob.component.css']
})
export class AppliedjobComponent implements OnInit {

  public appliedJobs?: IAppliedJobs[]
  constructor() { }

  ngOnInit(): void {
    const loginUser = JSON.parse(sessionStorage.getItem('loggedInUser') || '') as ILoginOutput;
    if (loginUser != null && loginUser.id) {
      this.appliedJobs = DummyData.appliesJobs.filter((x) => x.userId === loginUser.id)
      console.log(this.appliedJobs)
    }
  }

}

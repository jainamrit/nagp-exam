import { Component, OnInit } from '@angular/core';
import { ICompanyList } from 'src/app/core/Interfaces/ICompanyList';
import { DummyData } from 'src/app/shared/DummyData/dummyData';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  public companies?: ICompanyList[]
  public company?: ICompanyList
  public showDetails = false;
  constructor() { }

  ngOnInit(): void {
    this.companies = DummyData.Companies;
  }

  public viewDetails(item: ICompanyList): void {
    this.showDetails = true;
    this.company = item
  }

  public showCompaniesList(): void {
    this.showDetails = false;
    this.company = undefined
  }
}

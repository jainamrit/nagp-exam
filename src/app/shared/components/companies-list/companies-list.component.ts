import { Component, Input, OnInit } from '@angular/core';
import { ICompanyList } from 'src/app/core/Interfaces/ICompanyList';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  @Input() company?: ICompanyList
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company';
import { trigger, style, transition, animate, state } from '@angular/animations';
type PaneType = 'left' | 'right';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  animations: [
     trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class CompanyListComponent {
  isCompanySelected = false;
  companies = [];
  selectedCompany: any;
  backtothelist = true;
  @Input() activePane: PaneType = 'left';
  constructor(private _compService: CompanyService) {}
  slideViews(){  
    console.log("this.activePane: ",this.activePane)
    this.activePane = this.activePane === 'left' ? 'right' : 'left';
  }
  onSelection(element: any) {
       this.slideViews();
    this.isCompanySelected = true
    this.selectedCompany = element;
    console.log(this.selectedCompany);
  }
  ngOnInit() {
    this._compService.getCompanies()
      .subscribe(result => {
        this.companies = result;
      });
  }
  onReturnToList(count) {
     this.slideViews();
    console.log(count);
    this.isCompanySelected = false;
  }
}
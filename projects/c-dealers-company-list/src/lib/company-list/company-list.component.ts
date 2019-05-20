import { Component, Input} from '@angular/core';
import { CompanyService } from '../services/company.service';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { ToolboxComponent } from '../toolbox-decorator';
type PaneType = 'left' | 'right';
 @ToolboxComponent({
   desc: 'Dealers-Company List',
   icon: 'fa fa-chart-bar',
   componentName : 'CompanyListComponent'
 })

@Component({
  selector: 'pack-dealers-company-list-container',
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
    this.activePane = this.activePane === 'left' ? 'right' : 'left';
  }
  onSelection(element: any) {
       this.slideViews();
    this.isCompanySelected = true
    this.selectedCompany = element;
  }
  ngOnInit() {
    this._compService.getCompanies()
      .subscribe(result => {
        this.companies = result;
      });
  }
  onReturnToList(count) {
     this.slideViews();
    this.isCompanySelected = false;
  }
}
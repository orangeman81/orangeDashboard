import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { PortfolioAddComponent } from './portfolio-add/portfolio-add.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';
import { PortfolioDetailsViewComponent } from './portfolio-details/portfolio-details-view/portfolio-details-view.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PortfolioRoutingModule
  ],
  declarations: [
    PortfolioComponent,
    PortfolioListComponent,
    PortfolioDetailsComponent,
    PortfolioAddComponent,
    PortfolioFormComponent,
    PortfolioDetailsViewComponent
  ]
})
export class PortfolioModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { PortfolioComponent } from './portfolio.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioAddComponent } from './portfolio-add/portfolio-add.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioListComponent
  },
  {
    path: 'add',
    component: PortfolioAddComponent
  },
  {
    path: ':id',
    component: PortfolioDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }

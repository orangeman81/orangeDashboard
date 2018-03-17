import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';
import { ModaeComponent } from './modae.component';
import { ModaeDashComponent } from './modae-dash/modae-dash.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '', 
    component: ModaeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ModaeDashComponent
      },
      {
        path: 'designers',
        loadChildren: './portfolio/portfolio.module#PortfolioModule'
      },
      {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModaeRoutingModule { }

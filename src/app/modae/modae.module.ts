import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//modules
import { ModaeRoutingModule } from './modae-routing.module';
import { SharedModule } from './../shared/shared.module';
import { PortfolioModule } from './portfolio/portfolio.module';
//components
import { ModaeDashComponent } from './modae-dash/modae-dash.component';
import { ModaeComponent } from './modae.component';
import { BlogComponent } from './blog/blog.component';
@NgModule({
  imports: [
    CommonModule,
    ModaeRoutingModule,
    SharedModule,
    PortfolioModule
  ],
  declarations: [ModaeDashComponent, ModaeComponent, BlogComponent]
})
export class ModaeModule { }

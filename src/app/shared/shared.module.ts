import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { PanelComponent } from './panel/panel.component';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [NavComponent, FooterComponent, SearchComponent, PanelComponent, TruncatePipe],
  exports: [
    NavComponent,
    FooterComponent,
    SearchComponent,
    PanelComponent,
    TruncatePipe,
    FormsModule
  ]
})
export class SharedModule { }

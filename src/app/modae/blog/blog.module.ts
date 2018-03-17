import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsViewComponent } from './blog-details/blog-details-view/blog-details-view.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule
  ],
  declarations: [BlogAddComponent, BlogDetailsComponent, BlogFormComponent, BlogListComponent, BlogDetailsViewComponent]
})
export class BlogModule { }

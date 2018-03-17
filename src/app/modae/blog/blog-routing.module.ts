import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent
  },
  {
    path: 'add',
    component: BlogAddComponent
  },
  {
    path: ':id',
    component: BlogDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

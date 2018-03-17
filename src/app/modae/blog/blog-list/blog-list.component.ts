import { Component, OnInit } from '@angular/core';
import { ModaeService } from './../../../services/modae.service';
import { UploadsService } from './../../../services/uploads.service';
import { Observable } from 'rxjs/Observable';
import { Blog } from './../../../shared/classes/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogList: Observable<Blog[]>;
  constructor(public modae: ModaeService, public uploads: UploadsService) { }

  ngOnInit() {
    this.blogList = this.modae.getList$('me-blog');
  }

  delete(event) {
    this.uploads.remove(event.photo);
    if (event.gallery.length > 0) {
      event.gallery.forEach(img => {
        this.uploads.remove(img.imgName);
      });
    }
    this.modae.delete('me-blog', event.id);
  }

}

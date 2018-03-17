import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ModaeService } from './../../../services/modae.service';
import { UploadsService } from './../../../services/uploads.service';
import { Blog } from './../../../shared/classes/blog';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss']
})
export class BlogAddComponent {

  blog = new Blog();

  constructor(private modae: ModaeService, public uploads: UploadsService, private router: Router) { }

  onSubmit(formValue: Blog) {
    if (this.uploads.heroImageName != "") {
      formValue.heroImage = this.uploads.heroImageName;
    }
    if (this.uploads.galleryList.length > 0) {
      formValue.gallery = this.uploads.galleryList;
    }
    this.uploads.upload();
    this.modae.add('me-blog', formValue);
    this.router.navigate(['modae/blog']);
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModaeService } from './../../../services/modae.service';
import { UploadsService } from './../../../services/uploads.service';
import { ISubscription } from 'rxjs/Subscription';
import { Blog } from './../../../shared/classes/blog';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit, OnDestroy {

  toggle: boolean = true;
  icon: string = "update"
  details: Blog;
  subscription: ISubscription;

  constructor(
    private modae: ModaeService,
    public uploads: UploadsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.route.params
      .switchMap(params => this.modae.getDetails$('me-blog', params['id']))
      .subscribe(data => this.details = data)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleView() {
    if (this.toggle) {
      this.toggle = false;
      this.icon = "perm_identity";
    } else {
      this.toggle = true;
      this.icon = "update";
    }
  }

  update(event, id) {
    if (this.uploads.heroImageName != "") {
      this.uploads.remove(this.details.heroImage);
      event.heroImage = this.uploads.heroImageName;
    } else {
      event.heroImage = this.details.heroImage;
    }
    if (this.uploads.galleryList.length > 0) {
      this.details.gallery.forEach(img => {
        this.uploads.remove(img.imgName);
      });
      event.gallery = this.uploads.galleryList;
    } else {
      event.gallery = this.details.gallery;
    }
    this.uploads.upload();
    this.modae.update('me-blog', event, id);
    this.router.navigate(['modae/blog']);
  }

  removeImg(event) {
    this.details.gallery.splice(event.i, 1);
    this.uploads.remove(event.img);
    this.modae.update('me-blog', this.details, event.id);
  }

}

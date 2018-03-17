import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModaeService } from './../../../services/modae.service';
import { UploadsService } from './../../../services/uploads.service';
import { Portfolio } from '../../../shared/classes/portfolio';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit, OnDestroy {

  toggle: boolean = true;
  icon: string = "update"
  details: Portfolio;
  subscription: ISubscription;

  constructor(
    private modae: ModaeService,
    public uploads: UploadsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.route.params
      .switchMap(params => this.modae.getDetails$('portfolio', params['id']))
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
    this.modae.update('portfolio', event, id);
    this.router.navigate(['modae/designers']);
  }

  removeImg(event) {
    this.details.gallery.splice(event.i, 1);
    this.uploads.remove(event.img);
    this.modae.update('portfolio', this.details, event.id);
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-modae',
  templateUrl: './modae.component.html'
})
export class ModaeComponent implements OnInit, OnDestroy {

  url: string = "Data driven dashboard";
  subscription: ISubscription;

  constructor(public router: Router) { }

  ngOnInit() {
    this.subscription = this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (event.url == "/modae") {
            this.url = "Data driven dashboard";
          }
          if (event.url == "/modae/blog") {
            this.url = "Blog";
          }
          if (event.url == "/modae/designers") {
            this.url = "Designers";
          }
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

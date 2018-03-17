import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModaeService } from './../../../services/modae.service';
import { UploadsService } from './../../../services/uploads.service';
import { Portfolio } from './../../../shared/classes/portfolio';

@Component({
  selector: 'app-portfolio-add',
  templateUrl: './portfolio-add.component.html',
  styleUrls: ['./portfolio-add.component.scss']
})
export class PortfolioAddComponent {

  constructor(private modae: ModaeService, public uploads: UploadsService, private router: Router) { }

  portfolio = new Portfolio();

  onSubmit(formValue: Portfolio) {
    if (this.uploads.heroImageName != "") {
      formValue.heroImage = this.uploads.heroImageName;
    }
    if (this.uploads.galleryList.length > 0) {
      formValue.gallery = this.uploads.galleryList;
    }
    this.uploads.upload();
    this.modae.add('portfolio', formValue);
    this.router.navigate(['modae/designers']);
  }

}

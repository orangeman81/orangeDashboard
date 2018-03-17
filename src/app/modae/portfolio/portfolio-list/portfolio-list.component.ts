import { Component, OnInit } from '@angular/core';
import { ModaeService } from './../../../services/modae.service';
import { UploadsService } from './../../../services/uploads.service';
import { Portfolio } from './../../../shared/classes/portfolio';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  portfolioList: Observable<Portfolio[]>;
  constructor(public modae: ModaeService, public uploads: UploadsService) { }

  ngOnInit() {
    this.portfolioList = this.modae.getList$('portfolio');
  }

  delete(event) {
    this.uploads.remove(event.photo);
    if (event.gallery.length > 0) {
      event.gallery.forEach(img => {
        this.uploads.remove(img.imgName);
      });
    }
    this.modae.delete('portfolio', event.id);
  }

}

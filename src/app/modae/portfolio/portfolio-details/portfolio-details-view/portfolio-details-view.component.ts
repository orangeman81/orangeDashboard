import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portfolio-details-view',
  templateUrl: './portfolio-details-view.component.html',
  styleUrls: ['./portfolio-details-view.component.scss']
})
export class PortfolioDetailsViewComponent {

  @Input() details;
  @Output() deleteImg: EventEmitter<object> = new EventEmitter()

  constructor() { }

}

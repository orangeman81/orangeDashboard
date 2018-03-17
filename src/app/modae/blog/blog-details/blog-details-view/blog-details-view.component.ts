import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-details-view',
  templateUrl: './blog-details-view.component.html',
  styleUrls: ['./blog-details-view.component.scss']
})
export class BlogDetailsViewComponent {

  @Input() details;
  @Output() deleteImg: EventEmitter<object> = new EventEmitter()

  constructor() { }

}

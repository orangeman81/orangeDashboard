import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  @Input() data: Array<[any]>;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  toggle(i) {
    let acc: any = document.querySelectorAll(".panel-header")[i];
    let collapsible = acc.nextElementSibling;
    collapsible.classList.toggle("expand");
    if (acc.lastElementChild.innerHTML != "expand_less") {
      acc.lastElementChild.innerHTML = "expand_less";
    } else {
      acc.lastElementChild.innerHTML = "expand_more";
    }
  }

}

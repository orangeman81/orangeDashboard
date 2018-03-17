import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  @Input() formData;
  @Output() formValue: EventEmitter<any> = new EventEmitter();
  @Output() heroImage: EventEmitter<any> = new EventEmitter();
  @Output() gallery: EventEmitter<any[]> = new EventEmitter();

  public formSelect = [
    "Area of ​​interest",
    "Graphic",
    "Fashion",
    "interior"
  ];

  constructor() { }

  ngOnInit() {
    // init select
    if (this.formData.area == "") {
      this.formData.area = this.formSelect[0];
    }
    // dropdown
    var dropdownTrigger: any = document.querySelectorAll(".dropdown-trigger");
    dropdownTrigger.forEach(trigger => {
      trigger.addEventListener("click", function () {
        var activeDropdown = document.querySelector(".dropdown.active");
        var dropdown = this.nextElementSibling;
        if (activeDropdown) {
          activeDropdown.classList.remove("active");
        }
        dropdown.classList.toggle("active");
      });
    })

    window.onclick = function (event: any) {
      var dropdowns: any = document.querySelectorAll(".dropdown");
      dropdowns.forEach(e => {
        if (e.classList.contains('active') && !event.target.matches(".material-icons")) {
          e.classList.remove('active');
        }
      });
    };
  }
  
  optionValue(option) {
    this.formData.area = option;
  }

}

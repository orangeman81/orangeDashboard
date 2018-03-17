import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.scss']
})
export class PortfolioFormComponent implements OnInit {

  @Input() formData;
  @Output() formValue: EventEmitter<any> = new EventEmitter();
  @Output() heroImage: EventEmitter<any> = new EventEmitter();
  @Output() gallery: EventEmitter<any[]> = new EventEmitter();
  
  public formSelect = [
    "Profession",
    "Graphic",
    "Fashion",
    "interior"
  ];
  
  constructor() { }

  ngOnInit() {
    // init select
    if(this.formData.profession == "" ) {
      this.formData.profession =  this.formSelect[0];
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
    this.formData.profession = option;
  }

  addQuestion(q, a) {
    this.formData.questions.push({
      question: q,
      answer: a
    });
  }

  deleteQuestion(i) {
    this.formData.questions.splice(i, 1);
  }
}

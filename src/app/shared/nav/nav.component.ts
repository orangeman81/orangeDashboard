import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  open() {
    let sideNav = document.querySelector(".sideNav");

    let overlay = document.createElement("div");
    overlay.setAttribute("id", "overlay");

    document.body.appendChild(overlay);
    sideNav.classList.add("open");

    let links: any = document.querySelectorAll(".sideNav a[routerLink]");

    links.forEach(link => {
      link.onclick = function () {
        sideNav.classList.remove("open");
        document.body.removeChild(overlay);
      }
    });

    overlay.onclick = function () {
      sideNav.classList.remove("open");
      document.body.removeChild(overlay);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  messages: string[] = [];
  loginData = {
    email: "",
    password: ""
  };

  constructor(private api: Api, private router: Router) { }

  ngOnInit() {
  }

  login(email: string = this.loginData.email, password: string = this.loginData.password) {
    if (!email || !password) {
      this.messages.push('Incomplete credentials!');
      return;
    }

    // try to authenticate with api
    this.api.authenticate({
      strategy: 'local',
      email,
      password
    })
      // navigate to base URL on success
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(err => {
        this.messages.unshift('Wrong credentials!');
      });
  }

}

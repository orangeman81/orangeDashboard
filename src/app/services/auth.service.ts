import { Api } from './api.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Abstraction layer for auth. Nice to have when things get more complicated.
 */
@Injectable()
export class AuthService {

  authenticated: boolean = false;

  constructor(private api: Api, private router: Router) {}

  public logIn(credentials?): Promise<any> {
    return this.api.authenticate(credentials);
  }

  public logOut() {
    this.api.logout();
    this.authenticated = false;
    this.router.navigate(['/login']);
  }
}
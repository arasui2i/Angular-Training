import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
  constructor(private router: Router) {
  }

  logout() {
    localStorage.removeItem('emptoken');
    this.router.navigate(['/#']);
  }
}

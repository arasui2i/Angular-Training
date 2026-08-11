import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Logout } from '../logout/logout';

@Component({
  selector: 'app-header-component',
  imports: [MatCardModule, MatIcon, RouterLink, Logout],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header { }

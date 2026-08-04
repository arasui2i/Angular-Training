import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [MatCardModule, MatIcon, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header { }

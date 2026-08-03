import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { MatLabel, MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-employeedialogcomponent',
  imports: [MatDialogActions, MatLabel, MatFormField, 
    MatDialogContent, MatInputModule],
  templateUrl: './employeedialogcomponent.html',
  styleUrl: './employeedialogcomponent.css',
})
export class Employeedialogcomponent {}

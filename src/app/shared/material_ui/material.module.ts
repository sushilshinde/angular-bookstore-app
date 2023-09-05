import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSnackBarModule } from "@angular/material/snack-bar";
const MaterialImports = [
  MatCardModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatGridListModule,
  MatBadgeModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [MaterialImports],
  exports: [MaterialImports],
})
export class MaterialModule { }

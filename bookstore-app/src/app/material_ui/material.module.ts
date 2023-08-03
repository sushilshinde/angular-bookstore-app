import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialImports = [
  MatCardModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
  imports: [MaterialImports],
  exports: [MaterialImports],
})
export class MaterialModule {}

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const importsAndExports = [
  CommonModule,
  FormsModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: importsAndExports,
  exports: importsAndExports
})
export class SharedModule {}

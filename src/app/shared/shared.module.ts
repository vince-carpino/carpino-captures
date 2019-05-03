import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';

const modulesToImportAndExport = [
  CommonModule,
  FormsModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: modulesToImportAndExport,
  exports: modulesToImportAndExport,
  declarations: []
})
export class SharedModule {}

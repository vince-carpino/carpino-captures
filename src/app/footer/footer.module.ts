import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {}

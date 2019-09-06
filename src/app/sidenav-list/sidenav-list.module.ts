import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavListComponent } from './sidenav-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    RouterModule
  ],
  declarations: [SidenavListComponent],
  exports: [SidenavListComponent]
})
export class SidenavListModule {}

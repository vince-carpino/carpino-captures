import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SidenavListComponent } from './sidenav-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    SharedModule
  ],
  declarations: [SidenavListComponent],
  exports: [SidenavListComponent]
})
export class SidenavListModule {}

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SidenavListComponent } from './sidenav-list.component';

@NgModule({
  imports: [
    MatListModule,
    MatSidenavModule,
    RouterModule,
    SharedModule
  ],
  declarations: [SidenavListComponent],
  exports: [SidenavListComponent]
})
export class SidenavListModule {}

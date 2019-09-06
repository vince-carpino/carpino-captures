import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {}

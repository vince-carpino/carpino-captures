import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MasonryLayoutModule } from 'ngx-masonry-layout';
import { CrystalGalleryModule } from 'ngx-crystal-gallery';

@NgModule({
  imports: [CrystalGalleryModule, MasonryLayoutModule],
  declarations: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PortfolioModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioResolver } from '../resolvers/portfolio.resolver';
// import { NgxProgressiveImgLoaderModule } from 'ngx-progressive-img-loader';

@NgModule({
  imports: [CommonModule],
  // imports: [CommonModule, NgxProgressiveImgLoaderModule],
  declarations: [PortfolioComponent],
  exports: [PortfolioComponent],
  providers: [PortfolioResolver],
})
export class PortfolioModule {}

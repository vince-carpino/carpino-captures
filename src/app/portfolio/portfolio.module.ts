import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioResolver } from '../resolvers/portfolio.resolver';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [CommonModule, LazyLoadImageModule],
  declarations: [PortfolioComponent],
  exports: [PortfolioComponent],
  providers: [PortfolioResolver],
})
export class PortfolioModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioResolver } from '../resolvers/portfolio.resolver';

@NgModule({
  imports: [CommonModule],
  declarations: [PortfolioComponent],
  exports: [PortfolioComponent],
  providers: [PortfolioResolver],
})
export class PortfolioModule {}

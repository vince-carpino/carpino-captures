import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactModule } from './contact/contact.module';
import { environment } from 'src/environments/environment';
import { FooterModule } from './footer/footer.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PortfolioResolver } from './resolvers/portfolio.resolver';
import { SidenavListModule } from './sidenav-list/sidenav-list.module';

const routes = [
  { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  {
    path: '',
    component: PortfolioComponent,
    pathMatch: 'full',
    resolve: { images: PortfolioResolver }
  },
  {
    path: '**',
    component: PortfolioComponent,
    pathMatch: 'full',
    resolve: { images: PortfolioResolver }
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AboutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    ContactModule,
    FlexLayoutModule,
    FooterModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    NavBarModule,
    PortfolioModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    SidenavListModule
  ],
  bootstrap: [AppComponent],
  providers: [PortfolioResolver]
})
export class AppModule {}

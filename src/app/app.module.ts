import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AboutComponent } from './about/about.component';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactModule } from './contact/contact.module';
import { environment } from 'src/environments/environment';
import { FooterModule } from './footer/footer.module';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PortfolioResolver } from './resolvers/portfolio.resolver';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';

const routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
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
    SidenavListComponent
  ],
  imports: [
    AboutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    BrowserModule,
    ContactModule,
    FlexLayoutModule,
    FooterModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    NavBarModule,
    PortfolioModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

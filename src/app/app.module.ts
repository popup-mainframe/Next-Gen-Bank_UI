import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './navbar/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogoutComponent } from './nav-bar/logout/logout.component';
import { ContainerComponent } from './dashboard/container/container.component';
import { LeftbarComponent } from './dashboard/container/leftbar/leftbar.component';
import { MiddlebarComponent } from './dashboard/container/middlebar/middlebar.component';
import { RightbarComponent } from './dashboard/container/rightbar/rightbar.component';
import { TransactionComponent } from './transaction/transaction.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    DashboardComponent,
    NavBarComponent,
    LogoutComponent,
    ContainerComponent,
    LeftbarComponent,
    MiddlebarComponent,
    RightbarComponent,
    TransactionComponent,
 
  ],
  

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTooltipModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
 
  ],
  

  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

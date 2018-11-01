import { AuthService } from "./services/auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { TopNavbarComponent } from "./header/top-navbar/top-navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AboutComponent } from "./home/about/about.component";
import { ContactComponent } from "./home/contact/contact.component";
import { ForgetpasswordComponent } from "./login/forgetpassword/forgetpassword.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { LeftSideNavbarComponent } from "./header/left-side-navbar/left-side-navbar.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopNavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    ForgetpasswordComponent,
    LeftSideNavbarComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

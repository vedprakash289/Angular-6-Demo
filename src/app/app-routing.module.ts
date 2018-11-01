import { AboutComponent } from "./home/about/about.component";
import { ContactComponent } from "./home/contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { ForgetpasswordComponent } from "./login/forgetpassword/forgetpassword.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
let appRoutes: Routes = [
  { path: "", component: HomeComponent, data: { title: "Home" } },
  {
    path: "Activity/:name/:Activityid",
    component: HomeComponent,
    data: { title: "Home" }
  },
  {
    path: "home/about",
    component: AboutComponent,
    data: { title: "About Us" }
  },
  {
    path: "home/contact",
    component: ContactComponent,
    data: { title: "Contact Us" }
  },
  { path: "login", component: LoginComponent, data: { title: "DashBoard" } },
  {
    path: "login/forgetpassword",
    component: ForgetpasswordComponent,
    data: { title: "Forget-Password" }
  },
  {
    path: "register",
    component: RegisterComponent,
    data: { title: "Register" }
  },
  { path: "**", component: PagenotfoundComponent }
];
@NgModule({
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  declarations: []
})
export class AppRoutingModule {}

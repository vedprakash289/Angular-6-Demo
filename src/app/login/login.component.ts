import { AuthService } from "./../services/auth.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  @Output("LoggedEvent")
  logged = new EventEmitter();

  loginform = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  loginClick() {
    this.logged.emit();
  }

  ngOnInit() {
    if (localStorage.getItem("access_token") != null) {
      this.router.navigateByUrl("/");
    }
  }

  OnLogin() {
    let user = this.loginform.value;
    this.auth.getToken(user.email, user.password).subscribe((data: any) => {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("token_type", data.token_type);
      localStorage.setItem("userName", data.userName);

      this.auth.UserInfo().subscribe((info: any) => {
        localStorage.setItem("UserInfo", JSON.stringify(info));
      });

      this.router.navigateByUrl("/");

      (err: HttpErrorResponse) => {
        console.log(err);
      };
    });
  }
}

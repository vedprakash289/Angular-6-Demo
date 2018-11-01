import { AuthService } from "./../../services/auth.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-top-navbar",
  templateUrl: "./top-navbar.component.html",
  styleUrls: ["./top-navbar.component.css"]
})
export class TopNavbarComponent implements OnInit {
  @Output("Toggle")
  toggle = new EventEmitter();
  params: any;
  token: string;
  UserName: string;
  Hierarchical: any;
  isLogged: boolean = false;

  isShowClass: string = "";
  isShow: boolean = true;

  constructor(private router: Router, private auth: AuthService) {
    this.Hierarchical = JSON.parse(localStorage.getItem("Hierarchical"));
  }

  replaceSpaceWithDash(value: string) {
    let re = " ";
    return value.replace(re, "-").replace(re, "-");
  }
  ngOnInit() {
    this.LoggedStatus();
  }

  onToggle() {
    this.toggle.emit();
  }

  ngDoCheck() {
    this.LoggedStatus();
  }

  LoggedStatus() {
    this.token = localStorage.getItem("access_token");
    this.UserName = localStorage.getItem("userName");
    this.isLogged = this.token != null ? true : false;
  }

  OnLogout() {
    this.auth.LogOut().subscribe(data => {
      console.log("logout succesfylly " + data);
    });
    localStorage.clear();
    this.isLogged = this.token != null ? true : false;
    this.router.navigateByUrl("/login");
  }
}

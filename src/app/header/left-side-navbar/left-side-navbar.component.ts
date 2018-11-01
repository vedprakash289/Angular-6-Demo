import { UserService } from "./../../services/user.service";
import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-left-side-navbar",
  templateUrl: "./left-side-navbar.component.html",
  styleUrls: ["./left-side-navbar.component.css"]
})
export class LeftSideNavbarComponent implements OnInit {
  isShowClass: string = "";
  isShow: boolean = true;
  formDefination: any;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.onToggle();
  }

  onToggle() {
    if (!this.isShow) {
      this.isShowClass = "show";
      this.isShow = true;
    } else {
      this.isShowClass = "";
      this.isShow = false;
    }
  }
}

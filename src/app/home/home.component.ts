import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  params: any;
  formDefination: any;
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  getInfo() {
    this.auth.UserInfo().subscribe((data: any) => {
      console.log(data);
    });
  }
}

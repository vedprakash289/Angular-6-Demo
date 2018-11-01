import { LeftSideNavbarComponent } from "./left-side-navbar/left-side-navbar.component";
import { Component, OnInit, ViewChild } from "@angular/core";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @ViewChild(LeftSideNavbarComponent)
  leftSideNavbar: LeftSideNavbarComponent;
  constructor() {}
  ngOnInit() {}

  onToggle() {
    this.leftSideNavbar.onToggle();
  }
}

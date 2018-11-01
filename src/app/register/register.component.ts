import { AuthService } from "./../services/auth.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, private auth: AuthService) {}

  registerform = this.fb.group({
    firstname: ["", Validators.required],
    lastname: ["", Validators.required],
    email: ["", Validators.required],
    mobile: ["", Validators.required],
    password: ["", Validators.required],
    confirmpassword: ["", Validators.required]
  });

  ngOnInit() {}
  OnSubmit() {
    let user = this.registerform.value;
    console.log(user);
    this.auth
      .Register(
        user.firstname,
        user.lastname,
        user.mobile,
        user.email,
        user.password,
        user.password
      )
      .subscribe((data: any) => {
        // console.log(data);
        this.registerform.reset();
      });
  }
}

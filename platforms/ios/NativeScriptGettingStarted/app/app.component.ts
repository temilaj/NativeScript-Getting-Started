import { Component } from "@angular/core";
import { User } from "./shared/user/user";

import { UserService } from "./shared/user/user.service";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})
export class AppComponent {
  user: User;
  isLoggingIn = true;

  constructor(private router: UserService) {
    this.user = new User();
  }
  submit() {
    // alert(`You’re using: ${this.user.email}  and password ${this.user.password}`);
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  login() {
    this.userService.login(this.user)
      .subscribe(
        () => this.router.navigate(["/list"]),
        (error) => alert("Unfortunately we could not find your account.")
      );
  }
  signUp() {
  this.userService.register(this.user)
    .subscribe(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      () => alert("Unfortunately we were unable to create your account.")
    );
  }
}
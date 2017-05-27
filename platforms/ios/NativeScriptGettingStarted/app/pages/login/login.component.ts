import { Component, ElementRef, OnInit, ViewChild  } from "@angular/core";
import { Router } from "@angular/router";

import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";

import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})
export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn = true;
  @ViewChild("container") container: ElementRef;

  constructor(private router: Router, private userService: UserService, private page: Page) {
    this.user = new User();
    this.user.email = "user@nativescript.org";
    this.user.password = "password";
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
    let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#e1e9e9"),
      duration: 500
    });
  }

  login() {
    if(typeof(this.user.email) == "undefined" || typeof(this.user.password) == "undefined" ||this.user.email.length < 3 || this.user.password.length < 3)
    {
      alert("Enter a valid username or password");
    }
    else 
    {
      this.userService.login(this.user)
        .subscribe(
          () => this.router.navigate(["/list"]),
          (error) => alert("Unfortunately we could not find your account.")
        );
    }
  }

  signUp() {
    if(typeof(this.user.email) == "undefined" || typeof(this.user.password) == "undefined" ||this.user.email.length < 3 || this.user.password.length < 3)
    {
      alert("Enter a valid username or password");
    }
    else
    {
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

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }
}
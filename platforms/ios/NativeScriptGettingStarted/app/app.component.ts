import { Component } from "@angular/core";
import { User } from "./shared/user/user";
@Component({
  selector: "my-app",
  templateUrl: "app.component.html"
})
export class AppComponent {
  user: User;
  isLoggingIn = true;

  constructor() {
    this.user = new User();
  }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var LoginComponent = (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
    }
    LoginComponent.prototype.submit = function () {
        // alert(`You’re using: ${this.user.email}  and password ${this.user.password}`);
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#e1e9e9"),
            duration: 500
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (typeof (this.user.email) == "undefined" || typeof (this.user.password) == "undefined" || this.user.email.length < 3 || this.user.password.length < 3) {
            alert("Enter a valid username or password");
        }
        else {
            this.userService.login(this.user)
                .subscribe(function () { return _this.router.navigate(["/list"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
        }
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        if (typeof (this.user.email) == "undefined" || typeof (this.user.password) == "undefined" || this.user.email.length < 3 || this.user.password.length < 3) {
            alert("Enter a valid username or password");
        }
        else {
            this.userService.register(this.user)
                .subscribe(function () {
                alert("Your account was successfully created.");
                _this.toggleDisplay();
            }, function () { return alert("Unfortunately we were unable to create your account."); });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBFO0FBQzFFLDBDQUF5QztBQUV6QyxnQ0FBK0I7QUFDL0IsK0JBQThCO0FBRzlCLCtDQUE4QztBQUM5QywrREFBNkQ7QUFRN0QsSUFBYSxjQUFjO0lBS3pCLHdCQUFvQixNQUFjLEVBQVUsV0FBd0IsRUFBVSxJQUFVO1FBQXBFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFIeEYsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFJakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUF1QixDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsK0JBQU0sR0FBTjtRQUNFLGlGQUFpRjtRQUNqRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxTQUFTLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNoQixlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUM7WUFDN0UsUUFBUSxFQUFFLEdBQUc7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQWFDO1FBWkMsRUFBRSxDQUFBLENBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxJQUFJLE9BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FDckosQ0FBQztZQUNDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQzlCLFNBQVMsQ0FDUixjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUEvQixDQUErQixFQUNyQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxFQUF0RCxDQUFzRCxDQUNsRSxDQUFDO1FBQ04sQ0FBQztJQUNILENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBZ0JDO1FBZkMsRUFBRSxDQUFBLENBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxJQUFJLE9BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FDckosQ0FBQztZQUNDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2pDLFNBQVMsQ0FDUjtnQkFDRSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztnQkFDaEQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsRUFDRCxjQUFNLE9BQUEsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLEVBQTdELENBQTZELENBQ3BFLENBQUM7UUFDTixDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFDL0MsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWpFRCxJQWlFQztBQTlEeUI7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7aURBQUM7QUFIbkMsY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3JFLENBQUM7cUNBTTRCLGVBQU0sRUFBdUIsMEJBQVcsRUFBZ0IsV0FBSTtHQUw3RSxjQUFjLENBaUUxQjtBQWpFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHVzZXI6IFVzZXI7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdGhpcy51c2VyLmVtYWlsID0gXCJ1c2VyQG5hdGl2ZXNjcmlwdC5vcmdcIjtcbiAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcInBhc3N3b3JkXCI7XG4gIH1cbiAgc3VibWl0KCkge1xuICAgIC8vIGFsZXJ0KGBZb3XigJlyZSB1c2luZzogJHt0aGlzLnVzZXIuZW1haWx9ICBhbmQgcGFzc3dvcmQgJHt0aGlzLnVzZXIucGFzc3dvcmR9YCk7XG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVEaXNwbGF5KCkge1xuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgICBsZXQgY29udGFpbmVyID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBjb250YWluZXIuYW5pbWF0ZSh7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuaXNMb2dnaW5nSW4gPyBuZXcgQ29sb3IoXCJ3aGl0ZVwiKSA6IG5ldyBDb2xvcihcIiNlMWU5ZTlcIiksXG4gICAgICBkdXJhdGlvbjogNTAwXG4gICAgfSk7XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICBpZih0eXBlb2YodGhpcy51c2VyLmVtYWlsKSA9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZih0aGlzLnVzZXIucGFzc3dvcmQpID09IFwidW5kZWZpbmVkXCIgfHx0aGlzLnVzZXIuZW1haWwubGVuZ3RoIDwgMyB8fCB0aGlzLnVzZXIucGFzc3dvcmQubGVuZ3RoIDwgMylcbiAgICB7XG4gICAgICBhbGVydChcIkVudGVyIGEgdmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmRcIik7XG4gICAgfVxuICAgIGVsc2UgXG4gICAge1xuICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pLFxuICAgICAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIilcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzaWduVXAoKSB7XG4gICAgaWYodHlwZW9mKHRoaXMudXNlci5lbWFpbCkgPT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YodGhpcy51c2VyLnBhc3N3b3JkKSA9PSBcInVuZGVmaW5lZFwiIHx8dGhpcy51c2VyLmVtYWlsLmxlbmd0aCA8IDMgfHwgdGhpcy51c2VyLnBhc3N3b3JkLmxlbmd0aCA8IDMpXG4gICAge1xuICAgICAgYWxlcnQoXCJFbnRlciBhIHZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkXCIpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfbG9naW5cIjtcbiAgfVxufSJdfQ==
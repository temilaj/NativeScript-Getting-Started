"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require("email-validator");
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return validator.validate(this.email);
    };
    ;
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUUzQztJQUFBO0lBTUEsQ0FBQztJQUhDLDJCQUFZLEdBQVo7UUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUFBLENBQUM7SUFDSixXQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbInZhciB2YWxpZGF0b3IgPSByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpO1xuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGlzVmFsaWRFbWFpbCgpIHtcbiAgICByZXR1cm4gdmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuZW1haWwpO1xuICB9O1xufSJdfQ==
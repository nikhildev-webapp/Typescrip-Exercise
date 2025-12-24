//*Level 5:Enums &Literals
console.log("Level 5: Enums & Literals");
//*Exercise 1:create an enum for User Roles(admin,User,Guest)
console.log("Exercise 1:create an enum for User Roles(admin,User,Guest)");
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["User"] = "USER";
    UserRole["Guest"] = "GUEST";
})(UserRole || (UserRole = {}));
var currentUserRole = UserRole.Admin;
console.log("Current User Role: " + currentUserRole);
//*Exercise2:Create a variable using enum and Print role pased message
console.log("Exercise2:Create a variable using enum and Print role pased message");
function printRoleMessage(role) {
    switch (role) {
        case UserRole.Admin:
            console.log("Welcome Admin! You have full access.");
            break;
        case UserRole.User:
            console.log("Welcome User! You have limited access.");
            break;
        case UserRole.Guest:
            console.log("Welcome Guest! Please sign up to get more access.");
            break;
    }
}
printRoleMessage(currentUserRole);

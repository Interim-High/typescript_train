"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function EnumExample() {
    let Role;
    (function (Role) {
        Role["Admin"] = "Admin";
        Role["User"] = "user";
        Role["Guest"] = "guest";
    })(Role || (Role = {}));
    const currentRole = Role.User;
    console.log(" i am working as a " + currentRole);
}
exports.default = EnumExample;

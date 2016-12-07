/* This code defines a TypeScript class that contains two properties, email and password.
Instead of storing data in the AppComponent directly, it's now using the User model object,
which is reusable outside of this page and even outside of this application. */
"use strict";
/* The NativeScript framework's require() method is configured to look at the "main" value in an npm module's package.json file.
In this module, the "main" value is "index.js". Therefore, require("email-validator") is looking for node_modules/email_validator/index.js.
This is equivalent to require("email-validator/index"), which would retrieve the same file. */
var validator = require("email-validator");
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return validator.validate(this.email);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map
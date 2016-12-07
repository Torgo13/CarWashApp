"use strict";
/* By convention, NativeScript controls make their iOS and Android native implementations available via iOS and Android properties.
In this code, args.color.ios resolves to a UIColor, and args.view.ios resolves to a UITextField.
By creating a reference to these controls, it is possible to set native properties on them directly in TypeScript,
which this code does with the UITextField’s attributedPlaceholder property.

The power with NativeScript is these customizations can be performed in TypeScript.
This doesn’t apply just to attributes, for instance the global NSDictionary, NSAttributedString, and NSForegroundColorAttributeName attributes.
In NativeScript, all iOS and Android APIs are globally available to use directly in TypeScript code.

Most problems can be solved using the NativeScript module APIs or NativeScript plugins,
but in a scenario that NativeScript doesn’t provide a module for, it is possible to use the native APIs directly. */
function setHintColor(args) {
    if (args.view.android) {
        args.view.android.setHintTextColor(args.color.android);
    }
    if (args.view.ios) {
        var dictionary = new NSDictionary([args.color.ios], [NSForegroundColorAttributeName]);
        args.view.ios.attributedPlaceholder = NSAttributedString.alloc().initWithStringAttributes(args.view.hint, dictionary);
    }
}
exports.setHintColor = setHintColor;
//# sourceMappingURL=hint-util.js.map
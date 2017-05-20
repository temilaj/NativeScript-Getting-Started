function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var text_field_common_1 = require("./text-field-common");
__export(require("./text-field-common"));
var zeroLength = {
    value: 0,
    unit: "px"
};
var UITextFieldDelegateImpl = (function (_super) {
    __extends(UITextFieldDelegateImpl, _super);
    function UITextFieldDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UITextFieldDelegateImpl.initWithOwner = function (owner) {
        var delegate = UITextFieldDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    UITextFieldDelegateImpl.prototype.textFieldShouldBeginEditing = function (textField) {
        this.firstEdit = true;
        var owner = this._owner.get();
        if (owner) {
            return owner.editable;
        }
        return true;
    };
    UITextFieldDelegateImpl.prototype.textFieldDidEndEditing = function (textField) {
        var owner = this._owner.get();
        if (owner) {
            if (owner.updateTextTrigger === "focusLost") {
                text_field_common_1.textProperty.nativeValueChange(owner, textField.text);
            }
            owner.dismissSoftInput();
        }
    };
    UITextFieldDelegateImpl.prototype.textFieldShouldClear = function (textField) {
        this.firstEdit = false;
        var owner = this._owner.get();
        if (owner) {
            text_field_common_1.textProperty.nativeValueChange(owner, '');
        }
        return true;
    };
    UITextFieldDelegateImpl.prototype.textFieldShouldReturn = function (textField) {
        var owner = this._owner.get();
        if (owner) {
            owner.dismissSoftInput();
            owner.notify({ eventName: TextField.returnPressEvent, object: owner });
        }
        return true;
    };
    UITextFieldDelegateImpl.prototype.textFieldShouldChangeCharactersInRangeReplacementString = function (textField, range, replacementString) {
        var owner = this._owner.get();
        if (owner) {
            if (owner.updateTextTrigger === "textChanged") {
                if (textField.secureTextEntry && this.firstEdit) {
                    text_field_common_1.textProperty.nativeValueChange(owner, replacementString);
                }
                else {
                    if (range.location <= textField.text.length) {
                        var newText = NSString.stringWithString(textField.text).stringByReplacingCharactersInRangeWithString(range, replacementString);
                        text_field_common_1.textProperty.nativeValueChange(owner, newText);
                    }
                }
            }
            if (owner.formattedText) {
                text_field_common_1._updateCharactersInRangeReplacementString(owner.formattedText, range.location, range.length, replacementString);
            }
        }
        this.firstEdit = false;
        return true;
    };
    return UITextFieldDelegateImpl;
}(NSObject));
UITextFieldDelegateImpl.ObjCProtocols = [UITextFieldDelegate];
var UITextFieldImpl = (function (_super) {
    __extends(UITextFieldImpl, _super);
    function UITextFieldImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UITextFieldImpl.initWithOwner = function (owner) {
        var handler = UITextFieldImpl.new();
        handler._owner = owner;
        return handler;
    };
    UITextFieldImpl.prototype._getTextRectForBounds = function (bounds) {
        var owner = this._owner ? this._owner.get() : null;
        if (!owner) {
            return bounds;
        }
        var size = bounds.size;
        var x = text_field_common_1.layout.toDeviceIndependentPixels(owner.effectiveBorderLeftWidth + owner.effectivePaddingLeft);
        var y = text_field_common_1.layout.toDeviceIndependentPixels(owner.effectiveBorderTopWidth + owner.effectivePaddingTop);
        var width = text_field_common_1.layout.toDeviceIndependentPixels(text_field_common_1.layout.toDevicePixels(size.width) - (owner.effectiveBorderLeftWidth + owner.effectivePaddingLeft + owner.effectivePaddingRight + owner.effectiveBorderRightWidth));
        var height = text_field_common_1.layout.toDeviceIndependentPixels(text_field_common_1.layout.toDevicePixels(size.height) - (owner.effectiveBorderTopWidth + owner.effectivePaddingTop + owner.effectivePaddingBottom + owner.effectiveBorderBottomWidth));
        return CGRectMake(x, y, width, height);
    };
    UITextFieldImpl.prototype.textRectForBounds = function (bounds) {
        return this._getTextRectForBounds(bounds);
    };
    UITextFieldImpl.prototype.editingRectForBounds = function (bounds) {
        return this._getTextRectForBounds(bounds);
    };
    return UITextFieldImpl;
}(UITextField));
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        var _this = _super.call(this) || this;
        var weakRef = new WeakRef(_this);
        _this._ios = UITextFieldImpl.initWithOwner(weakRef);
        _this._delegate = UITextFieldDelegateImpl.initWithOwner(weakRef);
        _this.nativeView = _this._ios;
        return _this;
    }
    TextField.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate;
    };
    TextField.prototype.onUnloaded = function () {
        this._ios.delegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    Object.defineProperty(TextField.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    TextField.prototype[text_field_common_1.hintProperty.getDefault] = function () {
        return this.nativeView.placeholder;
    };
    TextField.prototype[text_field_common_1.hintProperty.setNative] = function (value) {
        var stringValue;
        if (value === null || value === void 0) {
            stringValue = "";
        }
        else {
            stringValue = value + "";
        }
        this.nativeView.placeholder = stringValue;
    };
    TextField.prototype[text_field_common_1.secureProperty.getDefault] = function () {
        return this.nativeView.secureTextEntry;
    };
    TextField.prototype[text_field_common_1.secureProperty.setNative] = function (value) {
        this.nativeView.secureTextEntry = value;
    };
    TextField.prototype[text_field_common_1.colorProperty.getDefault] = function () {
        return this.nativeView.textColor;
    };
    TextField.prototype[text_field_common_1.colorProperty.setNative] = function (value) {
        var color = value instanceof text_field_common_1.Color ? value.ios : value;
        this.nativeView.textColor = color;
    };
    TextField.prototype[text_field_common_1.placeholderColorProperty.getDefault] = function () {
        return null;
    };
    TextField.prototype[text_field_common_1.placeholderColorProperty.setNative] = function (value) {
        var nativeView = this.nativeView;
        var colorAttibutes = NSMutableDictionary.new();
        colorAttibutes.setValueForKey(value instanceof text_field_common_1.Color ? value.ios : value, NSForegroundColorAttributeName);
        var stringValue;
        if (nativeView.placeholder === null || nativeView.placeholder === void 0) {
            stringValue = " ";
        }
        else {
            stringValue = nativeView.placeholder + "";
        }
        nativeView.attributedPlaceholder = NSAttributedString.alloc().initWithStringAttributes(stringValue, colorAttibutes);
    };
    TextField.prototype[text_field_common_1.paddingTopProperty.getDefault] = function () {
        return zeroLength;
    };
    TextField.prototype[text_field_common_1.paddingTopProperty.setNative] = function (value) {
    };
    TextField.prototype[text_field_common_1.paddingRightProperty.getDefault] = function () {
        return zeroLength;
    };
    TextField.prototype[text_field_common_1.paddingRightProperty.setNative] = function (value) {
    };
    TextField.prototype[text_field_common_1.paddingBottomProperty.getDefault] = function () {
        return zeroLength;
    };
    TextField.prototype[text_field_common_1.paddingBottomProperty.setNative] = function (value) {
    };
    TextField.prototype[text_field_common_1.paddingLeftProperty.getDefault] = function () {
        return zeroLength;
    };
    TextField.prototype[text_field_common_1.paddingLeftProperty.setNative] = function (value) {
    };
    return TextField;
}(text_field_common_1.TextFieldBase));
exports.TextField = TextField;
//# sourceMappingURL=text-field.js.map
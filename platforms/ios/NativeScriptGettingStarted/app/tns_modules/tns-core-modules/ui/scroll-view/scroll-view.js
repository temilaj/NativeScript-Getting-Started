function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var scroll_view_common_1 = require("./scroll-view-common");
__export(require("./scroll-view-common"));
var UIScrollViewDelegateImpl = (function (_super) {
    __extends(UIScrollViewDelegateImpl, _super);
    function UIScrollViewDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIScrollViewDelegateImpl.initWithOwner = function (owner) {
        var impl = UIScrollViewDelegateImpl.new();
        impl._owner = owner;
        return impl;
    };
    UIScrollViewDelegateImpl.prototype.scrollViewDidScroll = function (sv) {
        var owner = this._owner.get();
        if (owner) {
            owner.notify({
                object: owner,
                eventName: scroll_view_common_1.ScrollViewBase.scrollEvent,
                scrollX: owner.horizontalOffset,
                scrollY: owner.verticalOffset
            });
        }
    };
    return UIScrollViewDelegateImpl;
}(NSObject));
UIScrollViewDelegateImpl.ObjCProtocols = [UIScrollViewDelegate];
var ScrollView = (function (_super) {
    __extends(ScrollView, _super);
    function ScrollView() {
        var _this = _super.call(this) || this;
        _this._contentMeasuredWidth = 0;
        _this._contentMeasuredHeight = 0;
        _this.nativeView = UIScrollView.new();
        _this._setNativeClipToBounds();
        return _this;
    }
    ScrollView.prototype._setNativeClipToBounds = function () {
        this.nativeView.clipsToBounds = true;
    };
    ScrollView.prototype.attachNative = function () {
        this._delegate = UIScrollViewDelegateImpl.initWithOwner(new WeakRef(this));
        this.nativeView.delegate = this._delegate;
    };
    ScrollView.prototype.dettachNative = function () {
        this.nativeView.delegate = null;
    };
    Object.defineProperty(ScrollView.prototype, "horizontalOffset", {
        get: function () {
            return this.nativeView.contentOffset.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "verticalOffset", {
        get: function () {
            return this.nativeView.contentOffset.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "scrollableWidth", {
        get: function () {
            if (this.orientation !== "horizontal") {
                return 0;
            }
            return Math.max(0, this.nativeView.contentSize.width - this.nativeView.bounds.size.width);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "scrollableHeight", {
        get: function () {
            if (this.orientation !== "vertical") {
                return 0;
            }
            return Math.max(0, this.nativeView.contentSize.height - this.nativeView.bounds.size.height);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "ios", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    ScrollView.prototype.scrollToVerticalOffset = function (value, animated) {
        if (this.orientation === "vertical") {
            var bounds = this.nativeView.bounds.size;
            this.nativeView.scrollRectToVisibleAnimated(CGRectMake(0, value, bounds.width, bounds.height), animated);
        }
    };
    ScrollView.prototype.scrollToHorizontalOffset = function (value, animated) {
        if (this.orientation === "horizontal") {
            var bounds = this.nativeView.bounds.size;
            this.nativeView.scrollRectToVisibleAnimated(CGRectMake(value, 0, bounds.width, bounds.height), animated);
        }
    };
    ScrollView.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var width = scroll_view_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = scroll_view_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = scroll_view_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = scroll_view_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
        var density = scroll_view_common_1.layout.getDisplayDensity();
        var child = this.layoutView;
        if (!child) {
            this._contentMeasuredWidth = this.effectiveMinWidth * density;
            this._contentMeasuredHeight = this.effectiveMinHeight * density;
        }
        else {
            var childSize = void 0;
            if (this.orientation === "vertical") {
                childSize = scroll_view_common_1.View.measureChild(this, child, widthMeasureSpec, scroll_view_common_1.layout.makeMeasureSpec(0, scroll_view_common_1.layout.UNSPECIFIED));
            }
            else {
                childSize = scroll_view_common_1.View.measureChild(this, child, scroll_view_common_1.layout.makeMeasureSpec(0, scroll_view_common_1.layout.UNSPECIFIED), heightMeasureSpec);
            }
            var w = scroll_view_common_1.layout.toDeviceIndependentPixels(childSize.measuredWidth);
            var h = scroll_view_common_1.layout.toDeviceIndependentPixels(childSize.measuredHeight);
            this.nativeView.contentSize = CGSizeMake(w, h);
            this._contentMeasuredWidth = Math.max(childSize.measuredWidth, this.effectiveMinWidth * density);
            this._contentMeasuredHeight = Math.max(childSize.measuredHeight, this.effectiveMinHeight * density);
        }
        var widthAndState = scroll_view_common_1.View.resolveSizeAndState(this._contentMeasuredWidth, width, widthMode, 0);
        var heightAndState = scroll_view_common_1.View.resolveSizeAndState(this._contentMeasuredHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    ScrollView.prototype.onLayout = function (left, top, right, bottom) {
        var width = (right - left);
        var height = (bottom - top);
        if (this.orientation === "horizontal") {
            scroll_view_common_1.View.layoutChild(this, this.layoutView, 0, 0, Math.max(this._contentMeasuredWidth, width), height);
        }
        else {
            scroll_view_common_1.View.layoutChild(this, this.layoutView, 0, 0, width, Math.max(this._contentMeasuredHeight, height));
        }
    };
    ScrollView.prototype._onOrientationChanged = function () {
    };
    return ScrollView;
}(scroll_view_common_1.ScrollViewBase));
exports.ScrollView = ScrollView;
//# sourceMappingURL=scroll-view.js.map
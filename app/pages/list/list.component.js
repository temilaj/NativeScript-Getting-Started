"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var SocialShare = require("nativescript-social-share");
var ListComponent = (function () {
    function ListComponent(groceryListService) {
        this.groceryListService = groceryListService;
        this.groceryList = [];
        this.grocery = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryListService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    ListComponent.prototype.share = function () {
        var listString = this.groceryList
            .map(function (grocery) { return grocery.name; })
            .join(", ")
            .trim();
        SocialShare.shareText(listString);
    };
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.groceryListService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("groceryTextField"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "groceryTextField", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
        providers: [grocery_list_service_1.GroceryListService]
    }),
    __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUd6RSxrRkFBK0U7QUFHL0UsdURBQXlEO0FBUXpELElBQWEsYUFBYTtJQVF4Qix1QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFQMUQsZ0JBQVcsR0FBbUIsRUFBRSxDQUFDO1FBQ2pDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFJMEMsQ0FBQztJQUU5RCwyQkFBRyxHQUFIO1FBQUEsaUJBd0JDO1FBdkJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsdUJBQXVCO1FBQ3ZCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDL0QsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3RDLFNBQVMsQ0FDUixVQUFBLGFBQWE7WUFDWCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQ0Q7WUFDRSxLQUFLLENBQUM7Z0JBQ0osT0FBTyxFQUFFLHNEQUFzRDtnQkFDL0QsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUNGLENBQUE7SUFDTCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNFLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQzlCLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQVosQ0FBWSxDQUFDO2FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDVixJQUFJLEVBQUUsQ0FBQztRQUNWLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7YUFDM0IsU0FBUyxDQUFDLFVBQUEsZUFBZTtZQUN4QixlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsYUFBYTtnQkFDcEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7QUFqRGdDO0lBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7OEJBQW1CLGlCQUFVO3VEQUFDO0FBTmpELGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7UUFDaEUsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7S0FDaEMsQ0FBQztxQ0FTd0MseUNBQWtCO0dBUi9DLGFBQWEsQ0F1RHpCO0FBdkRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeVwiO1xuaW1wb3J0IHsgR3JvY2VyeUxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnktbGlzdC5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LmNzc1wiXSxcbiAgcHJvdmlkZXJzOiBbR3JvY2VyeUxpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZ3JvY2VyeUxpc3Q6IEFycmF5PEdyb2Nlcnk+ID0gW107XG4gIGdyb2NlcnkgPSBcIlwiO1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgbGlzdExvYWRlZCA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIpIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyb2NlcnlMaXN0U2VydmljZTogR3JvY2VyeUxpc3RTZXJ2aWNlKSB7fVxuXG4gIGFkZCgpIHtcbiAgICBpZiAodGhpcy5ncm9jZXJ5LnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJFbnRlciBhIGdyb2NlcnkgaXRlbVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gRGlzbWlzcyB0aGUga2V5Ym9hcmRcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLmdyb2NlcnlUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcbiAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICBcbiAgICB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5hZGQodGhpcy5ncm9jZXJ5KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZ3JvY2VyeU9iamVjdCA9PiB7XG4gICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xuICAgICAgICAgIHRoaXMuZ3JvY2VyeSA9IFwiXCI7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyBhbiBpdGVtIHRvIHlvdXIgbGlzdC5cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5ncm9jZXJ5ID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgKVxuICB9XG4gIFxuICBzaGFyZSgpIHtcbiAgICBsZXQgbGlzdFN0cmluZyA9IHRoaXMuZ3JvY2VyeUxpc3RcbiAgICAgIC5tYXAoZ3JvY2VyeSA9PiBncm9jZXJ5Lm5hbWUpXG4gICAgICAuam9pbihcIiwgXCIpXG4gICAgICAudHJpbSgpO1xuICAgIFNvY2lhbFNoYXJlLnNoYXJlVGV4dChsaXN0U3RyaW5nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5sb2FkKClcbiAgICAgIC5zdWJzY3JpYmUobG9hZGVkR3JvY2VyaWVzID0+IHtcbiAgICAgICAgbG9hZGVkR3JvY2VyaWVzLmZvckVhY2goKGdyb2NlcnlPYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gIH1cbn0iXX0=
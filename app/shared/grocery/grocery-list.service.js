"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var grocery_1 = require("./grocery");
var GroceryListService = (function () {
    function GroceryListService(http) {
        this.http = http;
    }
    GroceryListService.prototype.load = function () {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return this.http.get(config_1.Config.apiUrl + "Groceries", {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var groceryList = [];
            data.Result.forEach(function (grocery) {
                groceryList.push(new grocery_1.Grocery(grocery.Id, grocery.Name));
            });
            return groceryList;
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.add = function (name) {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "Groceries", JSON.stringify({ Name: name }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return new grocery_1.Grocery(data.Result.Id, name);
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.delete = function (id) {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        headers.append("Content-Type", "application/json");
        return this.http.delete(config_1.Config.apiUrl + "Groceries/" + id, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return GroceryListService;
}());
GroceryListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GroceryListService);
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGlDQUErQjtBQUUvQixvQ0FBbUM7QUFDbkMscUNBQW9DO0FBR3BDLElBQWEsa0JBQWtCO0lBQzdCLDRCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsaUNBQUksR0FBSjtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLEVBQUU7WUFDaEQsT0FBTyxFQUFFLE9BQU87U0FDakIsQ0FBQzthQUNELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNQLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBQzFCLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUQsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGdDQUFHLEdBQUgsVUFBSSxJQUFZO1FBQ2QsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixlQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsRUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUM5QixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FDckI7YUFDQSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxNQUFNLENBQUMsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELG1DQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNyQixlQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksR0FBRyxFQUFFLEVBQ2pDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUNyQjthQUNBLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQztBQXZEWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtxQ0FFZSxXQUFJO0dBRG5CLGtCQUFrQixDQXVEOUI7QUF2RFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSBcIi4vZ3JvY2VyeVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JvY2VyeUxpc3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gIGxvYWQoKSB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIENvbmZpZy50b2tlbik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcuYXBpVXJsICsgXCJHcm9jZXJpZXNcIiwge1xuICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgIH0pXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgbGV0IGdyb2NlcnlMaXN0ID0gW107XG4gICAgICBkYXRhLlJlc3VsdC5mb3JFYWNoKChncm9jZXJ5KSA9PiB7XG4gICAgICAgIGdyb2NlcnlMaXN0LnB1c2gobmV3IEdyb2NlcnkoZ3JvY2VyeS5JZCwgZ3JvY2VyeS5OYW1lKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBncm9jZXJ5TGlzdDtcbiAgICB9KVxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBhZGQobmFtZTogc3RyaW5nKSB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIENvbmZpZy50b2tlbik7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICBcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICBDb25maWcuYXBpVXJsICsgXCJHcm9jZXJpZXNcIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgTmFtZTogbmFtZSB9KSxcbiAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9XG4gICAgKVxuICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLm1hcChkYXRhID0+IHtcbiAgICAgIHJldHVybiBuZXcgR3JvY2VyeShkYXRhLlJlc3VsdC5JZCwgbmFtZSk7XG4gICAgfSlcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG4gIFxuICBkZWxldGUoaWQ6IHN0cmluZykge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBDb25maWcudG9rZW4pO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXG4gICAgICBDb25maWcuYXBpVXJsICsgXCJHcm9jZXJpZXMvXCIgKyBpZCxcbiAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9XG4gICAgKVxuICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gIH1cbn0iXX0=
/**
 * Created by asus on 2017/2/17.
 */
angular.module("App")
.controller("RestaurantsController", function($scope, $http){
   $scope.page = 0;
   $scope.total = 1;
   $scope.restaurants = [];

   $scope.getRestaurants = function(){
       $scope.page++;
       $http.get("https://ionic-in-action-api.herokuapp.com/restaurants?age=" +$scope.page)
           .success(function(data){
                $scope.restaurants = data.restaurants;
                console.log($scope.restaurants);
           });
   };

   $scope.getRestaurants();
});
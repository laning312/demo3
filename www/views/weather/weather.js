/**
 * Created by asus on 2017/2/17.
 */
angular.module("App")
.controller("WeatherController", function($scope, $http, $ionicLoading){
    $ionicLoading.show();
    $http.get("https://ionic-in-action-api.herokuapp.com/weather")
        .success(function(weather){
            $scope.weather = weather;
            $ionicLoading.hide();
        })
        .error(function(err){
            $ionicLoading.show({
                template: "error!please try again later!",
                duration: 3000
            });
        });
})
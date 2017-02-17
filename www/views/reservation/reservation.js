/**
 * Created by asus on 2017/2/17.
 */
angular.module("App")
.controller("ReservationController", function($scope){
    $scope.reservation = {
        checkin: new Date(),
        checkout: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        room: 16,
        rate: 121,
        wifi: "resortwifi"
    }
});
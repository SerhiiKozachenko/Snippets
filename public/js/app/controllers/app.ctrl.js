'use strict';

/* Controllers */

function AppCtrl($scope, $location) {

    $scope.hasTransparentClass = function(path){
        if ($location.path() == path) {
            return "transparent"
        } else {
            return ""
        }
    }

    $scope.hasActiveClass = function(path) {
        if ($location.path() == path) {
            return "active"
        } else {
            return ""
        }
    }

}
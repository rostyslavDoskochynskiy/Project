var loskitApp = angular.module("loskitApp", []);

loskitApp.controller("rowCtrl",function ($scope, $http){
    $scope.textSongs = "Тексти пісень";
    $scope.sendRequest = function (){
        $http.get("package.json").then(function (response, data){
            $scope.listSongs  = response.data;
            console.log(response);
        })
    }
});
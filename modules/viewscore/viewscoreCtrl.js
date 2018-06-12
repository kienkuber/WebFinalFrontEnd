angular.module('viewscoreModule')
    .controller('viewscoreController', function ($scope, viewscoreService, initialscore) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây
        $scope.listScore = [];
        $scope.listScore = initialscore;

        $scope.tinNhan ={
            "id" : "",
            "message" :""
        };

        $scope.setSelected = function (selected) {
            $scope.selected = selected;

        };

        $scope.setId = function (aStudent) {
            $scope.tinNhan.id = aStudent;
        };

        $scope.hien = false;
        $scope.showstudent = function () {
            $scope.hien = true;
        };

        $scope.guiDiem = function () {
            viewscoreService.sendscore(localStorage.getItem("auth-token"))
                .then(function (response) {
                    alert("Thanh cong")
                }), function (reason) {
                alert("That bai")
            }
        }
    });
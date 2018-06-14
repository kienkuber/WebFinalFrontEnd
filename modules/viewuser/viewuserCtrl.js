angular.module('viewuserModule')
    .controller('viewuserController', function ($scope, viewuserService, initialUser) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây
        $scope.initialUser = initialUser;
        $scope.listStudent = [];
        $scope.listStudent = $scope.initialUser[0].data;
        $scope.listLecturer = $scope.initialUser[1].data;
        $scope.listPartner = $scope.initialUser[2].data;

        $scope.hien1 = false;
        $scope.showlist1 = function () {
            $scope.hien1 = true;
        };
        $scope.hien2 = false;
        $scope.showlist2 = function () {
            $scope.hien2 = true;
        };
        $scope.hien3 = false;
        $scope.showlist3 = function () {
            $scope.hien3 = true;
        };

        $scope.hienStudent = true;
        $scope.showStudent = function () {
            $scope.hienStudent = false;
            $scope.hienLecturer = true;
            $scope.hienPartner = true;
        };

        $scope.hienLecturer = true;

        $scope.showLecturer = function () {
            $scope.hienStudent = true;
            $scope.hienLecturer = false;
            $scope.hienPartner = true;
        };

        $scope.hienPartner = true;

        $scope.showPartner = function () {
            $scope.hienPartner = false;
            $scope.hienStudent = true;
            $scope.hienLecturer = true;
        };

        $scope.xoaStudent = function(id) {
            viewuserService.deleteStudent(localStorage.getItem("auth-token"), id)
                .then(function (respone) {
                    console.log(respone.data)
                }), function (err) {
                alert(err)
            }
        };

        $scope.xoaLecturer = function(id) {
            viewuserService.deleteLecturer(localStorage.getItem("auth-token"), id)
                .then(function (respone) {
                    console.log(respone.data)
                }), function (err) {
                alert(err)
            }
        };

        $scope.xoaPartner = function(id) {
            viewuserService.deletePartner(localStorage.getItem("auth-token"), id)
                .then(function (respone) {
                    console.log(respone.data)
                }), function (err) {
                alert(err)
            }
        };

    });
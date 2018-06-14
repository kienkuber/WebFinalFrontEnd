angular.module('createuserModule')
    .controller('createuserController', function ($scope, createuserService) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây
        $scope.student = {
            "mssv":"",
            "classroom":"",
            "gen":"",
            "speciality":"",
            "fullName":"",
            "dob":"",
            "email":"",
            "meanGrade":"",
            "gradYear":"",
            "address":"",
            "teacherId":""
        };
        $scope.lecturer = {
            "fullName":"",
            "faculty":"",
            "emailVNU":"",
            "gmail":"",
            "phone":"",
            "note":"",
            "password":""
        };
        $scope.partner = {
            "username":"",
            "password":"",
            "email":"",
            "phone":"",
            "description":"",
            "address":""
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

        $scope.taoStudent = function () {
            createuserService.createStudent($scope.student, localStorage.getItem("auth-token"))
                .then(function (respone) {
                    console.log(respone.data)
                }), function (err) {
                alert(err)
            }
        };

        $scope.taoLecturer = function () {
            createuserService.createLecturer($scope.lecturer, localStorage.getItem("auth-token"))
                .then(function (respone) {
                    console.log(respone.data)
                }), function (err) {
                alert(err)
            }
        };

        $scope.taoPartner = function () {
            createuserService.createPartner($scope.partner, localStorage.getItem("auth-token"))
                .then(function (respone) {
                    console.log(respone.data)
                }), function (err) {
                alert(err)
            }
        }
    });
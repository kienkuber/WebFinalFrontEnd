angular.module('loginModule')
    .controller('loginController', function ($scope, loginService, $rootScope, $state) {
        $scope.hello = 'Dang nhap'; //Xử lý logic ở đây
        $scope.account={
            "userName":"",
            "password":""
        } ;

        $rootScope.showLogin = false;
        $rootScope.showSetScore = false;
        $rootScope.showViewScore = false;
        $rootScope.showTeacher = false;
        $rootScope.showLogOut = false;

        $rootScope.dangxuat = function () {
            loginService.logout(localStorage.getItem("auth-token"))
                .then(function (response) {
                    $rootScope.showLogin = false;
                    $rootScope.showSetScore = false;
                    $rootScope.showViewScore = false;
                    $rootScope.showTeacher = false;
                    $rootScope.showLogOut = false;
                })
            };

        $scope.dangnhap = function () {
            loginService.login($scope.account)
                .then(function (response) {
                    alert("Dang nhap thanh cong");
                    console.log(response.data);

                    localStorage.setItem("auth-token", response.data.token);
                    if(response.data.role == "STUDENT"){
                        $rootScope.showLogin = true;
                        $rootScope.showSetScore = true;
                        $rootScope.showLogOut = true;
                        $state.go("setscore");
                    }
                    else if(response.data.role == "MONITOR"){
                        $rootScope.showLogin = true;
                        $rootScope.showSetScore = true;
                        $rootScope.showViewScore = true;
                        $rootScope.showLogOut = true;
                        $state.go("viewscore");
                    }
                    else if(response.data.role == "TEACHER"){
                        $rootScope.showLogin = true;
                        $rootScope.showTeacher = true;
                        $rootScope.showLogOut = true;
                        $state.go("teacher");
                    }
                },function (err) {
                    alert("Dang nhap that bai, xin hay dang nhap lai")
                })
        }
    });
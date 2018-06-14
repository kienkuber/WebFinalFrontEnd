angular.module('loginModule')
    .controller('loginController', function ($scope, loginService, $rootScope, $state) {
        $scope.hello = 'Dang nhap'; //Xử lý logic ở đây
        $scope.account={
            "userName":"",
            "password":""
        } ;

        $rootScope.showCreateJob =false;
        $rootScope.showLogin = false;
        $rootScope.showCreate = false;
        $rootScope.showUpdateInfo = false;
        $rootScope.showSeason = false;
        $rootScope.showLogOut = false;
        $rootScope.showViewUser = false;

        $rootScope.role;

        $rootScope.dangxuat = function () {
            loginService.logout(localStorage.getItem("auth-token"))
                .then(function (response) {
                    $rootScope.showLogin = false;
                    $rootScope.showCreate = false;
                    $rootScope.showUpdateInfo = false;
                    $rootScope.showSeason = false;
                    $rootScope.showLogOut = false;
                    $rootScope.showViewUser = false;
                    $rootScope.showCreateJob =false;
                })
            };

        $scope.dangnhap = function () {
            loginService.login($scope.account)
                .then(function (response) {
                    alert("Dang nhap thanh cong");
                    console.log(response.data);

                    localStorage.setItem("auth-token", response.data.token);
                    if(response.data.role == "STUDENT"){
                        $rootScope.role = "STUDENT";
                        $rootScope.showLogin = true;
                        $rootScope.showCreate = false;
                        $rootScope.showLogOut = true;
                        $rootScope.showViewUser = false;
                        $state.go("setscore");
                    }
                    else if(response.data.role == "LECTURER"){
                        $rootScope.role = "LECTURER";
                        $rootScope.showLogin = true;
                        $rootScope.showCreate = false;
                        $rootScope.showUpdateInfo = true;
                        $rootScope.showLogOut = true;
                        $rootScope.showViewUser = false;
                        $rootScope.showCreateJob = true;
                        $state.go("createjob");
                    }
                    else if(response.data.role == "PARTNER"){
                        $rootScope.role = "PARTNER";
                        $rootScope.showLogin = true;
                        $rootScope.showUpdateInfo = false;
                        $rootScope.showLogOut = true;
                        $rootScope.showViewUser = false;
                        $rootScope.showCreateJob = true;
                        $state.go("createjob");
                    }
                    else if(response.data.role == "ADMIN"){
                        $rootScope.Role = "ADMIN";
                        $rootScope.showLogin = true;
                        $rootScope.showCreate = true;
                        $rootScope.showUpdateInfo = false;
                        $rootScope.showSeason = true;
                        $rootScope.showLogOut = true;
                        $rootScope.showViewUser = true;
                        $state.go("createuser");
                    }
                },function (err) {
                    alert("Dang nhap that bai, xin hay dang nhap lai")
                })
        }
    });
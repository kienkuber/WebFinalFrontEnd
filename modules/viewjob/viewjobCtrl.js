angular.module('viewjobModule')
    .controller('viewjobController', function ($scope, viewjobService, initialJob) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây

        $scope.listJob = [];
        $scope.listJob = initialJob;

        $scope.hien = false;
        $scope.showjob = function () {
            $scope.hien = true;
        };

        $scope.registry = function (id) {
            viewjobService.registryJob(localStorage.getItem("auth-token"), id)
                .then(function (respone) {
                    console.log(respone.data)
                }), function (err) {
                alert(err)
            }
        }

    });
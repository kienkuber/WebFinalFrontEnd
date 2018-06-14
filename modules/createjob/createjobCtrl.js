angular.module('createjobModule')
    .controller('createjobController', function ($scope, createjobService, $rootScope) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây
        $scope.job = {
        "jobName":"",
        "jobReq":"",
        "jobAvailable":"",
        "jobLeft":""
        };
        $scope.lecCreateJob = function () {
            createjobService.lecturerCreateJob($scope.job, localStorage.getItem("auth-token"))
                .then(function (respone) {
                    console.log(respone.data)
                }), function (err) {
                alert(err)
            }
        };

        $scope.partCreateJob = function () {
            createjobService.partnerCreateJob($scope.job, localStorage.getItem("auth-token"))
                .then(function (respone) {
                    console.log(respone.data)
                }), function (err) {
                alert(err)
            }
        };
        $scope.taoJob = function() {
            if($rootScope.role == "LECTURER"){
                $scope.lecCreateJob();
            }
            else if($rootScope.role == "PARTNER"){
                $scope.partCreateJob();
            }
        }
    });
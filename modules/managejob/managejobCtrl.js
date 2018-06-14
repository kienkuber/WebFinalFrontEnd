angular.module('mangejobModule')
    .controller('mangejobController', function ($scope, managejobService, $rootScope ,initialStudentJob) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây

        $scope.studentJobList = [];
        $scope.studentJobList = initialStudentJob;
        $scope.studentJob = {
            "jobId":"",
            "jobName":"",
            "studentDTO": {
                "mssv": "",
                "classroom": "",
                "gen": "",
                "speciality": "",
                "fullName": "",
                "email": "",
                "meanGrade": "",
                "gradYear": "",
                "address": "",
                "teacherId":""
            }
        };

        $scope.hien = false;
        $scope.showjob = function () {
            $scope.hien = true;
        };

        $scope.accept = function (studentJob) {
            if($rootScope.role == "LECTURER"){
                managejobService.acceptLec(studentJob, localStorage.getItem("auth-token"))
                    .then(function (respone) {
                        console.log(respone.data)
                    }), function (err) {
                    alert(err)
                }
            }
            else if($rootScope.role == "PARTNER"){
                managejobService.acceptPart(studentJob, localStorage.getItem("auth-token"))
                    .then(function (respone) {
                        console.log(respone.data)
                    }), function (err) {
                    alert(err)
                }
            }
        }
    });
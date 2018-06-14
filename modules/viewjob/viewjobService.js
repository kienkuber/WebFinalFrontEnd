//Nhớ thêm tên service vào controller
angular.module('viewjobModule')
    .service('viewjobService', function ($http) {
        var service = {
            viewJob: viewJob,
            registryJob: registryJob
        };
        return service;

        function viewJob(token) {
            return $http({
                url : 'http://localhost:8080/view/alljobs',
                method: 'GET',
                headers:{
                    "auth-token":token
                }
            })

        }

        function registryJob(token, jobId) {
            return $http({
                url : 'http://localhost:8080/student/registry/' + jobId,
                method: 'GET',
                headers:{
                    "auth-token":token
                }
            })
        }
    });
    
    
 
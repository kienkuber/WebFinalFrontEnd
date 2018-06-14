//Nhớ thêm tên service vào controller
angular.module('createjobModule')
    .service('createjobService', function ($http) {
        var service = {
            partnerCreateJob: partnerCreateJob,
            lecturerCreateJob: lecturerCreateJob
        };
        return service;

        function partnerCreateJob(opts, token) {
            return $http({
                url : 'http://localhost:8080/partner/create/job',
                method : 'POST',
                data : opts,
                headers:{
                    "auth-token" :token
                }
            })
        }
        function lecturerCreateJob(opts, token) {
            return $http({
                url : 'http://localhost:8080/lecturer/create/job',
                method : 'POST',
                data : opts,
                headers:{
                    "auth-token" :token
                }
            })
        }



    });
    
    
 
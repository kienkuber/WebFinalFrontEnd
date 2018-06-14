//Nhớ thêm tên service vào controller
angular.module('managejobModule')
    .service('managejobService', function ($http) {
        var service = {
            viewJobLec: viewJobLec,
            viewJobPart: viewJobPart,
            acceptLec: acceptLec,
            acceptPart: acceptPart
        };
        return service;

        function viewJobLec(token) {
            return $http({
                url : 'http://localhost:8080/lecturer/view/registry',
                method: 'GET',
                headers:{
                    "auth-token":token
                }
            })

        }

        function viewJobPart(token) {
            return $http({
                url : 'http://localhost:8080/partner/view/registry',
                method: 'GET',
                headers:{
                    "auth-token":token
                }
            })

        }

        function acceptLec(opts, token) {
            return $http({
                url : 'http://localhost:8080/lecturer/acceptregistry',
                method : 'POST',
                data : opts,
                headers:{
                    "auth-token" :token
                }
            })
        }

        function acceptPart(opts, token) {
            return $http({
                url : 'http://localhost:8080/partner/acceptregistry',
                method : 'POST',
                data : opts,
                headers:{
                    "auth-token" :token
                }
            })
        }




    });
    
    
 
//Nhớ thêm tên service vào controller
angular.module('createuserModule')
    .service('createuserService', function ($http) {
        var service = {
            accessible: checkAccessible,
            createStudent: createStudent,
            createLecturer: createLecturer,
            createPartner: createPartner
        };
        return service;

        function checkAccessible(username, password) {
            var accessible = false;
            if ("admin" == username && "1" == password) accessible = true;
            return accessible
        }

        function createStudent(opts, token) {
            return $http({
                url : 'http://localhost:8080/create/student',
                method : 'POST',
                data : opts,
                headers:{
                    "auth-token" :token
                }
            })
        }

        function createLecturer(opts, token) {
            return $http({
                url : 'http://localhost:8080/create/lecturer',
                method : 'POST',
                data : opts,
                headers:{
                    "auth-token" :token
                }
            })
        }

        function createPartner(opts, token) {
            return $http({
                url : 'http://localhost:8080/create/partner',
                method : 'POST',
                data : opts,
                headers:{
                    "auth-token" :token
                }
            })
        }
    });
    
    
 
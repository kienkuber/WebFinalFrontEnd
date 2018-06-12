//Nhớ thêm tên service vào controller
angular.module('teacherModule')
    .service('teacherService', function ($http) {
        var service = {
            cong2so: cc,
            accessible: checkAccessible,
            teacherTable : teacherTable
        };
        return service;

        function cc(a, b) {
            return a + b;
        }

        function checkAccessible(username, password) {
            var accessible = false;
            if ("admin" == username && "1" == password) accessible = true;
            return accessible


        }
        function teacherTable(token){
            return $http({
                url : 'http://localhost:8080/teachertable',
                method : 'GET',
                headers:{
                    "auth-token":token
                }
            })
        }
    });
    
    
 
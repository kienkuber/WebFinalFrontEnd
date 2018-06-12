//Nhớ thêm tên service vào controller
angular.module('setscoreModule')
    .service('setscoreService', function ($http) {
        var service = {
            cong2so: cc,
            accessible: checkAccessible,
            setscore: setscore
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
        function setscore(opts, token) {
            return $http({
                url : 'http://localhost:8080/setscore',
                method : 'POST',
                data : opts,
                headers:{
                    "auth-token" :token
                }
            })
        }
    });
    
    
 
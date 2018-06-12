//Nhớ thêm tên service vào controller
angular.module('loginModule')
    .service('loginService', function ($http) {
        var service = {
            cong2so: cc,
            accessible: checkAccessible,
            login:login,
            logout:logout
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

        function login(opts,token){
            return $http({
                url :'http://localhost:8080/login',
                method: 'POST',
                data :opts,
                headers:{
                    "auth-token" : token
                }
            })
        }

        function logout(token){
            return $http({
                url :'http://localhost:8080/logout',
                method: 'GET',
                headers:{
                    "auth-token" : token
                }
            })
        }
    });
    
    
 
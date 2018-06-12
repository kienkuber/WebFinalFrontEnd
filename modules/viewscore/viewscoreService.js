//Nhớ thêm tên service vào controller
angular.module('viewscoreModule')
    .service('viewscoreService', function ($http) {
        var service = {
            cong2so: cc,
            accessible: checkAccessible,
            scoretable: scoretable,
            sendmessage: sendmessage,
            sendscore: sendscore
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
        function scoretable(token) {
            return $http({
                url : 'http://localhost:8080/scoretable',
                method: 'GET',
                headers:{
                    "auth-token":token
                }
            })
            
        }
        function sendmessage(opts, token) {
            return $http({
                url : 'http://localhost:8080/sendmessage',
                method: 'POST',
                data: opts,
                headers:{
                    "auth-token": token
                }
            })
        }

        function sendscore(token) {
            return $http({
                url : 'http://localhost:8080/sendscore',
                method : 'GET',
                headers:{
                    "auth-token":token
                }
            })
        }
    });
    
    
 
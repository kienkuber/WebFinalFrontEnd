//Nhớ thêm tên service vào controller
angular.module('viewjobModule')
    .service('viewjobService', function () {
        var service = {
            cong2so: cc,
            accessible: checkAccessible
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
    });
    
    
 
//Nhớ thêm tên service vào controller
angular.module('viewuserModule')
    .service('viewuserService', function ($http) {
        var service = {
            viewStudent: viewStudent,
            viewLecturer: viewLecturer,
            viewPartner: viewPartner,
            deleteStudent: deleteStudent,
            deleteLecturer: deleteLecturer,
            deletePartner: deletePartner
        };
        return service;

        function viewStudent(token) {
            return $http({
                url : 'http://localhost:8080/read/allstudents',
                method: 'GET',
                headers:{
                    "auth-token":token
                }
            })

        }

        function viewLecturer(token) {
            return $http({
                url : 'http://localhost:8080/read/alllecturers',
                method: 'GET',
                headers:{
                    "auth-token":token
                }
            })

        }

        function viewPartner(token) {
            return $http({
                url : 'http://localhost:8080/read/allpartners',
                method: 'GET',
                headers:{
                    "auth-token":token
                }
            })

        }

        function deleteStudent(token, id) {
            return $http({
                url : 'http://localhost:8080/delete/student/' + id,
                method: 'GET',
                headers:{
                    "auth-token":token
                }
            })

        }

        function deleteLecturer(token, id) {
            return $http({
                url : 'http://localhost:8080/delete/lecturer/' + id,
                method: 'GET',
                headers:{
                    "auth-token":token
                }
            })

        }

        function deletePartner(token, id) {
            return $http({
                url : 'http://localhost:8080/delete/partner/' + id,
                method: 'GET',
                headers:{
                    "auth-token":token
                }
            })

        }


    });
    
    
 
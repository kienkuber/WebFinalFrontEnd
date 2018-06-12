//Nhớ thêm tên module vào app.js
angular.module('teacherModule', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('teacher', { //Định nghĩa 1 state
                url: '/teacher',     //Khai báo URl hiển thị
                templateUrl: 'modules/teacher/teacher.html', //Đường dẫn view: modules/about/about.html
                controller: 'teacherController',   //Khai báo Controller phụ vụ state này

                resolve : {
                    initialscore : ['teacherService', function(teacherService){
                        return teacherService.teacherTable(localStorage.getItem("auth-token"))
                            .then(function(response){
                                return response.data;
                            })
                    }]
                }
            })


    });

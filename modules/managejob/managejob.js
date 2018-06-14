//Nhớ thêm tên module vào app.js
angular.module('mangejobModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider, $rootScope) {
        $stateProvider
        // nested list with custom controller
            .state('managejob', { //Định nghĩa 1 state
                url: '/mangejob',     //Khai báo URl hiển thị
                templateUrl: 'modules/mangejob/managejob.html', //Đường dẫn view: modules/about/about.html
                controller: 'mangejobController'   //Khai báo Controller phụ vụ state này

                resolve: {
                    initialStudentJob: ['managejobService', function (managejobService) {
                        if($rootScope.role == "LECTURER"){
                        return managejobService.viewJobLec(localStorage.getItem("auth-token"))
                            .then(function (response) {
                                return response.data;
                            })
                        }
                        else if($rootScope.role == "PARTNER"){
                            return managejobService.viewJobPart(localStorage.getItem("auth-token"))
                                .then(function (response) {
                                    return response.data;
                                })
                        }
                    }]
                }
            })


    });

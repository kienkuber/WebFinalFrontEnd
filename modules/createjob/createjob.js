//Nhớ thêm tên module vào app.js
angular.module('createjobModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('createjob', { //Định nghĩa 1 state
                url: '/createjob',     //Khai báo URl hiển thị
                templateUrl: 'modules/createjob/createjob.html', //Đường dẫn view: modules/about/about.html
                controller: 'createjobController'   //Khai báo Controller phụ vụ state này
            })


    });

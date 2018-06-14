//Nhớ thêm tên module vào app.js
angular.module('viewjobModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('viewjob', { //Định nghĩa 1 state
                url: '/viewjob',     //Khai báo URl hiển thị
                templateUrl: 'modules/viewjob/viewjob.html', //Đường dẫn view: modules/about/about.html
                controller: 'viewjobController'   //Khai báo Controller phụ vụ state này
            })


    });

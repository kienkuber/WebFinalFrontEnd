//Nhớ thêm tên module vào app.js
angular.module('loginModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('login', { //Định nghĩa 1 state
                url: '/login',     //Khai báo URl hiển thị
                templateUrl: 'modules/login/login.html', //Đường dẫn view: modules/about/about.html
                controller: 'loginController'   //Khai báo Controller phụ vụ state này
            })


});

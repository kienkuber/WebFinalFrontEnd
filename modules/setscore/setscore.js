//Nhớ thêm tên module vào app.js
angular.module('setscoreModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('setscore', { //Định nghĩa 1 state
                url: '/setscore',     //Khai báo URl hiển thị
                templateUrl: 'modules/setscore/setscore.html', //Đường dẫn view: modules/about/about.html
                controller: 'setscoreController'   //Khai báo Controller phụ vụ state này
            })


    });

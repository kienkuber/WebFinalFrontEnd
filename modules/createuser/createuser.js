//Nhớ thêm tên module vào app.js
angular.module('createuserModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('createuser', { //Định nghĩa 1 state
                url: '/createuser',     //Khai báo URl hiển thị
                templateUrl: 'modules/createuser/createuser.html', //Đường dẫn view: modules/about/about.html
                controller: 'createuserController'   //Khai báo Controller phụ vụ state này
            })


    });

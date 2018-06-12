//Nhớ thêm tên module vào app.js
angular.module('viewscoreModule', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('viewscore', { //Định nghĩa 1 state
                url: '/viewscore',     //Khai báo URl hiển thị
                templateUrl: 'modules/viewscore/viewscore.html', //Đường dẫn view: modules/about/about.html
                controller: 'viewscoreController' ,  //Khai báo Controller phụ vụ state này

                resolve: {
                    initialscore: ['viewscoreService', function (viewscoreService) {
                        return viewscoreService.scoretable(localStorage.getItem("auth-token"))
                            .then(function (response) {
                                return response.data;
                            })
                    }]

                    // initialsendscore:['viewscoreService', function (sendscoreService) {
                    //     return sendscoreService.sendscore(localStorage.getItem("auth-token"))
                    //         .then(function (response) {
                    //             return response.data;
                    //         })
                    // }]

                }
            })


    });

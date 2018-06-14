//Nhớ thêm tên module vào app.js
angular.module('viewuserModule', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('viewuser', { //Định nghĩa 1 state
                url: '/viewuser',     //Khai báo URl hiển thị
                templateUrl: 'modules/viewuser/viewuser.html', //Đường dẫn view: modules/about/about.html
                controller: 'viewuserController',  //Khai báo Controller phụ vụ state này

                resolve: {
                    initialUser:['viewuserService','$q','$http', function (viewuserService, $q,$http) {
                        promiseList = [];
                        promiseList.push(list1());
                        promiseList.push(list2());
                        promiseList.push(list3());

                        function list1() {

                            return $q.when(viewuserService.viewStudent(localStorage.getItem("auth-token")));

                        }

                        function list2() {
                            return $q.when(viewuserService.viewLecturer(localStorage.getItem("auth-token")));

                        }

                        function  list3() {
                            return $q.when(viewuserService.viewPartner(localStorage.getItem("auth-token")))

                        }


                        return $q.all(promiseList).then(function (response) {
                            return(response)
                        }).catch(function (error) {
                            console.log("it failed....");
                        });
                    }]
                }


            })



    });

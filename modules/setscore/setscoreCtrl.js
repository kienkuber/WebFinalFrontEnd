angular.module('setscoreModule')
    .controller('setscoreController', function ($scope, setscoreService) {
        $scope.score = 'Hello'; //Xử lý logic ở đây
        $scope.Setscore = {
            "yThucHocTap":"",
            "yThucChapHanh":"",
            "yThucHoatDong":"",
            "phamChatCongDan":"",
            "congTacPhuTrach":""
        };
        $scope.chamdiem = function () {
            setscoreService.setscore($scope.Setscore, localStorage.getItem("auth-token"))
                .then(function (respone) {
                    console.log(respone.data)
                }),function (err) {
                    alert(err)
            }


        }
    });
angular.module('teacherModule')
    .controller('teacherController', function ($scope, teacherService, initialscore) {
        $scope.hello = 'Hello'; //Xử lý logic ở đây
        $scope.listscore = [];
        $scope.listscore = initialscore;

        $scope.setSelected = function (selected) {
            $scope.selected = selected;
        };

        $scope.hienn = false;
        $scope.showwStudent = function () {
            $scope.hienn = true;
        }

    });
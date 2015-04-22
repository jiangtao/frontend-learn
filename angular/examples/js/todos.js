(function () {
    'use strict';
    var todoModule = angular.module('App', []);
    var addInput = document.querySelector('#add-input');
    todoModule.controller('todoController', function ($scope) {
        $scope.list = [];

        $scope.add = function (e) {
            if (e.keyCode == 13) {
                $scope.list.push({
                    content: angular.element(addInput).val()
                });
            }
        };

        $scope.remove = function (index) {
            console.log($scope.list[index].content)
            if ($scope.list[index].content.length == 0) {
                onRemove(index - 1);
                $scope.list.splice(index, 1);
            }

        };

        $scope.action = function (e, index) {
            // remove
            if (e.keyCode == 8) {
                $scope.remove(index);
            }

            // up
            if (e.keyCode == 38) {
                up(index);
            }

            // down
            if (e.keyCode == 40) {
                down(index);
            }
        };

        function onRemove(index) {
            if (index == -1) {
                addInput.focus()
            } else {
                focus(index);
            }
        }

        function up(index) {
            index--;
            if (index < 0) {
                index = $scope.list.length - 1;
            }
            focus(index);
        }

        function down(index) {
            index++;
            if (index > $scope.list.length - 1) {
                index = 0;
            }
            focus(index);
        }

        function focus(index) {
            var list = document.querySelectorAll('.list li');
            var target = angular.element(list).eq(index).find('input');
            setCursorEnd(target[0]);
        }

        function setCursorEnd(target) {
            var length = target.value.length;
            var len = length * 2;
            target.focus();
            if(target.setSelectionRange) {
                target.setSelectionRange(len, len);
            }
        }
    })
})();
/* (function () {
    'use strict';

    angular.module('DIApp', [])
    .controller('DIController', ['$scope', '$filter', DIController]);

    function DIController ($scope, $filter) {  // filter is a service that let us create filtering functions that are used for formatting the data that eventually gets displayed to the user
        $scope.name ="Yaakov";

        $scope.upper = function () {
            var upCase =$filter('uppercase')
            $scope.name = upCase($scope.name);
        };
    }

})(); */


//Code with minified version
!function(){"use strict";angular.module("DIApp",[]).controller("DIController",["$scope","$filter",function(e,n){e.name="Yaakov",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}])}();
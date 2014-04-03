(function() {

    'use strict';

    /*
     * First directive
     */
    angular.module('training.directives').directive('trainingHelloWorldDirective', function() {

        console.log("DEBUG: trainingHelloWorldDirective");
        return {

            templateUrl: "/partials/hello.html",
            restrict: "E"
        };
    });
}());
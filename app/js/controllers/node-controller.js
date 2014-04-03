(function() {

    'use strict';


    /*
     * Node Create Ctrl
     */
    angular.module('training.controllers').controller('NodesCreateCtrl', ['$scope', 'training.services.node', function($scope, nodeService) {

        $scope.node = {

            'name' : '',
            'age' : ''
        };

        $scope.CreateN = function() {

            console.log("Clicked CreateN, node: ", $scope.node.name, $scope.node.age);

            nodeService.createNode($scope.node, function(err, status) {

                if(err) {

                    console.log("ERROR: create node");
                }
                else {

                    console.log("INFO: Created node");
                }
            });
        };
    }]);

    /*
     * Node Controller
     */
    angular.module('training.controllers').controller('NodeCtrl', ['$scope', 'training.services.node', function($scope, nodeService) {

        nodeService.init();

    }]);
}());
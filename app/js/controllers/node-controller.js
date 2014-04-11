(function() {

    'use strict';

    /*
     * Nodes Ctrl
     */
    angular.module('training.controllers')
        .controller('NodesCtrl', ['$scope', '$location', 'training.services.node', function($scope, $location, nodeService) {

        $scope.nodedelete = function(index) {

            nodeService.delete($scope.nodes[index]._id, function(err, status) {

                if(err) {

                    console.log("ERROR: delete node");
                }
                else {

                    console.log("INFO: deleted node");
                    $scope.nodes.splice(index, 1);
                }
            });
        };

        $scope.getNodes = function(nodeSearchName) {

            var nodes = nodeService.getNodes(nodeSearchName);
            console.log("DEBUG : $scope.getNodes : nodeSearchName: ", nodeSearchName);

            if(nodes) {

                console.log("DEBUG: NodesCtrl.getNodes : Nodes at this point: ", $scope.node.name + " " + $scope.node.age)
                return node.name + " " + node.age;
            }
        };
    }]);




    /*
     * Node Create Ctrl
     */
    angular.module('training.controllers')
        .controller('NodesCreateCtrl', ['$scope', 'training.services.node', function($scope, nodeService) {

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
    angular.module('training.controllers')
        .controller('NodeCtrl', ['$scope', 'training.services.node', function($scope, nodeService) {

        nodeService.init();

    }]);
}());
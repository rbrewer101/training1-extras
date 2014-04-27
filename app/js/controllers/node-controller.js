(function() {

    'use strict';

    /*
     * Nodes Ctrl
     */
    angular.module('training.controllers')
        .controller('NodesCtrl', ['$scope', '$location', 'training.services.node', function($scope, $location, nodeService) {

        $scope.deleteNode = function(index) {

            console.log("NodesCtrl.deleteNode called");

            nodeService.deleteNode($scope.nodes[index]._id, function(err, status) {

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

            if (nodeSearchName) {

            var nodes = nodeService.getNodes(nodeSearchName, function(err, data) {
                if(err) {

                    console.log("ERROR: nodeService.getNodes ");
                }
                else {

                    $scope.nodes = data;
                    nodeService.saveLocalNodes(data);
                    console.log("DEBUG : NodesCtrl : $scope.getNodes : $scope.nodes -> nodeService.saveLocalNodes : ", $scope.nodes);

                }
            });
            }
            else {

                $location.path('/nodes');
            }
        };
    }]);


    /*
     * Node Edit Ctrl
     */
    angular.module('training.controllers').controller('NodesEditCtrl', ['$scope', '$routeParams', '$location','training.services.node', function($scope, $routeParams, $location, nodeService) {

        var nodeId = $routeParams.nodeId;
        $scope.node = nodeService.getLocalNode(nodeId);

        console.log("NodesEditCtrl : edit node : $routeParams : ", $routeParams.nodeId);
        console.log("NodesEditCtrl : edit node : nodeService.getLocalNode(nodeId) : ", $scope.node);

        $scope.saveNode = function(nodeId) {

//            $scope.node = nodeService.getLocalNodes(nodeId);
            console.log("NodesEditCtrl : edit node : nodeService.getLocalNodes(nodeId) : ", $scope.node);

            nodeService.saveNode($scope.node, function(err, status) {

                if(err) {

                    console.log("ERROR: node not saved");
                }
                else {

                    console.log("INFO: saved node");
                    $location.path('/nodes');
                }
            });
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
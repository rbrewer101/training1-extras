(function() {

    'use strict';

    /*
     * API:
     */

    angular.module('training.services').factory('training.services.node', ['$http', function($http) {

        var NodeService = {

            'nodes' : [{name: 'Name01', age: 100},
                {name: 'Name02', age: 45}],
            'node' : {name: 'Name01', age: 100}
        };


        NodeService.saveLocalNodes = function(nodes) {
            console.log("nodeservice.savelocalnodes executed with node: ", this.node);

            this.nodes = nodes;
        };

        NodeService.getLocalNodes = function() {

            return this.nodes;
        };

        NodeService.getNode = function() {

            return this.node;
        };

        NodeService.init = function() {

            console.log("nodeservice.init was called with node: ", this.node);
            console.log("and this nodes: ", this.nodes);

            NodeService.node = angular.fromJson(sessionStorage.getItem("node"));
        };

        NodeService.getLocalNodes = function() {

            for(var i = 0; i < this.nodes.length; i++) {

                if(this.nodes[i]._id === nodeId) {

                    return this.nodes[i];
                }
            }
        };

        // API : getNodes
        NodeService.getNodes = function(searchName, callback) {
            console.log("NodeService.getNodes: searchName: ", searchName);

                $http(
                    {
                        "method" : "GET",
                        "url" : "/api/v1/nodes",
                        "params" : {
                            "searchTerm" : searchName
                        }
                    })
                    .success(function(data, status, headers, config) {

                        console.log("DEBUG : NodeService.getNodes : status : ", status);
                        console.log("DEBUG : NodeService.getNodes : data : ", data);
                        console.log("DEBUG : NodeService.getNodes : headers : ", headers);
                        console.log("DEBUG : NodeService.getNodes : config : ", config);
                        callback(null, data);
                    })
                    .error(function(data, status, headers, config) {
                        console.log("DEBUG : NodeService.getNodes : status : ", status)

                        callback(true, null);
                    });
        };


        // API createNode
        NodeService.createNode = function(newNode, callback) {

            $http(
                {
                    "method" : "POST",
                    "url" : "/api/v1/nodes",
                    "data" : newNode
                })
                .success(function(data, status, headers, config) {

                    callback(false, status);
                })
                .error(function(data, status, headers, config) {

                    callback(true, status);
                });
        };
        return NodeService;
    }]);

}());


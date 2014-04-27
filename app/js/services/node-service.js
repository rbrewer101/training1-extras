(function() {

    'use strict';

    /*
     * API:
     */

    angular.module('training.services').factory('training.services.node', ['$http', function($http) {

        var NodeService = {

            'nodes' : [],
            'node' : {}
        };

        console.log("nodeservice was touched with NodeService.node : ", NodeService.node, " and NodeService.nodes: ", NodeService.nodes);

        NodeService.saveLocalNodes = function(nodes) {
            console.log("nodeservice.savelocalnodes executed with node: ", nodes);

            this.nodes = nodes;
        };

        NodeService.getLocalNodes = function() {

            return this.nodes;
        };

        NodeService.getNode = function() {

            return this.node;
        };

        NodeService.init = function() {

            console.log("nodeservice.init was called with this.node: ", this.node, " and this.nodes: ", this.nodes);

            NodeService.node = angular.fromJson(sessionStorage.getItem("node"));
        };

        NodeService.getLocalNode = function(nodeId) {

            console.log("DEBUG : NodeService.getLocalNode : nodeId : ", nodeId);
            console.log("DEBUG : NodeService.getLocalNode : this.nodes.length : ", this.nodes.length);
            console.log("DEBUG : NodeService.getLocalNode : this.nodes : ", this.nodes);

            for(var i = 0; i < this.nodes.length; i++) {

                if(this.nodes[i]._id === Number(nodeId)) {

                    console.log("DEBUG : NodeService.getLocalNode : node : ", this.nodes[i]);

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
                        console.log("DEBUG : NodeService.getNodes : params : ", config.params);
                        callback(null, data);
                    })
                    .error(function(data, status, headers, config) {
                        console.log("DEBUG : NodeService.getNodes : status : ", status);

                        callback(true, null);
                    });
        };


        // API : deleteNode
        NodeService.deleteNode = function(targetNodeId, callback) {

            console.log("NodeService.deleteNode: targetnode : ", targetNodeId);

            $http(
                {
                    "method" : "DELETE",
                    "url" : "/api/v1/nodes",
                    "params" : {
                        "targetNodeId" : targetNodeId
                    }
                })
                .success(function(data, status, headers, config) {

                    console.log("DEBUG : NodeService.deleteNode : status : ", status);
                    console.log("DEBUG : NodeService.deleteNode : data : ", data);
                    console.log("DEBUG : NodeService.deleteNode : params : ", config.params);
                    callback(false, status);
                })
                .error(function(data, status, headers, config) {
                    console.log("DEBUG : NodeService.deleteNode : status : ", status);

                    callback(true, status);
                });
        };

        // API saveNode
        NodeService.saveNode = function(node, callback) {

            console.log("DEBUG: saveNode called : node : ", node);
            $http(
                {
                    "method" : "PUT",
                    "url" : "/api/v1/nodes",
                    "data" : node
                })
                .success(function(data, status, headers, config) {

                    console.log("DEBUG : NodeService.saveNode : status : ", status);
                    console.log("DEBUG : NodeService.saveNode : data : ", data);
                    console.log("DEBUG : NodeService.saveNode : config : ", config);

                    callback(false, status);
                })
                .error(function(data, status, headers, config) {

                    console.log("DEBUG : NodeService.saveNode : status : ", status);
                    console.log("DEBUG : NodeService.saveNode : data : ", data);
                    console.log("DEBUG : NodeService.saveNode : config : ", config);

                    callback(true, status);
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


(function() {

    'use strict';

    /*
     * API:
     *
     * createNode : Object e.g. {"Name":"Ted"}
     */
    angular.module('training.services').factory('training.services.node', ['$http', function($http) {

        var NodeService = {

            'nodes' : [],
            'node' : {}
        };

        NodeService.saveLocalNodes = function(nodes) {

            this.nodes = nodes;
        };

        NodeService.getLocalNodes = function() {

            return this.nodes;
        };

        NodeService.getNode = function() {

            return this.node;
        };

        NodeService.init = function() {

            NodeService.node = angular.fromJson(localStorage.getItem("node"));
        };

        NodeService.getLocalNodes = function() {

            for(var i = 0; i < this.nodes.length; i++) {

                if(this.nodes[i]._id === nodeId) {

                    return this.nodes[i];
                }
            }
        };

//        // API : createNodes
//        UserService.getUsers = function(callback) {
//
//            if(this.user.authToken) {
//
//                $http(
//                    {
//                        "method" : "GET",
//                        "url" : "/api/v1/users",
//                        "headers" : {
//                            "Authorization" : "Session " + this.user.authToken
//                        },
//                        "cache" : false
//
//                    })
//                    .success(function(data, status, headers, config) {
//
//                        callback(null, data);
//                    })
//                    .error(function(data, status, headers, config) {
//
//                        callback(true, null);
//                    });
//            }
//            else {
//
//                console.log("ERROR: User is not authenticated");
//            }
//        };


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

//        // API loginUser
//        UserService.loginUser = function(user, callback) {
//
//            $http(
//                {
//                    "method" : "POST",
//                    "url" : "/api/v1/users/login",
//                    "data" : user
//                })
//                .success(function(data, status, headers, config) {
//
//                    UserService.user = data;
//                    localStorage.setItem("user", angular.toJson(data));
//                    callback(false, status);
//                })
//                .error(function(data, status, headers, config) {
//
//                    callback(true, status);
//                });
//        };
//
//        // API saveUser
//        UserService.saveUser = function(user, callback) {
//
//            console.log("DEBUG: saveUser called : user : ", user);
//            $http(
//                {
//                    "method" : "PUT",
//                    "url" : "/api/v1/users",
//                    "data" : user
//                })
//                .success(function(data, status, headers, config) {
//
//                    callback(false, status);
//                })
//                .error(function(data, status, headers, config) {
//
//                    callback(true, status);
//                });
//        };
//
//        // API Delete User
//        UserService.deleteUser = function(id, callback) {
//
//            $http(
//                {
//                    "method" : "DELETE",
//                    "url" : "/api/v1/users",
//                    "params" : {
//                        "objectId" : id
//                    }
//                })
//                .success(function(data, status, headers, config) {
//
//                    callback(false, status);
//                })
//                .error(function(data, status, headers, config) {
//
//                    callback(true, status);
//                });
//        };

        return NodeService;
    }]);

}());


    (function() {

        'use strict';

        /*
         * QCtrl
         */
        angular.module('QApp', ['QApp.controllers']);
        angular.module('QApp.controllers',[]).
            controller('QCtrl', ['$scope', function($scope) {
                $scope.questions =
                    [{number: 1,
                    content: 'nodeService in node-contoller, NodeService in node-service.js Why? How do they know about one another?',
                    answer: 'training.services.user'},
                    {number: 2,
                    content: 'factory, provider, service. Difference? http://stackoverflow.com/questions/15666048/angular-js-service-vs-provider-vs-factory',
                    answer: ''},
                    {number: 3,
                    content: 'in authorization, prevent duplicate userid no matter role or authn status',
                    answer: ''},
                    {number: 4,
                    content: '(function .....) form in user-service.js',
                    answer: 'Self executing function. We use this, in combination with factory, to create a service instance at app initialization.'},
                        {number: 5,
                        content: 'Import hiccup with either libre or office 2013',
                        answer: ''},
                        {number: 6,
                        content: 'It seems like including $scope in a ctrl we run the risk of muddying up the global scope, but maybe thats the mechanism for bridging html and ctrl so it has to be done?',
                        answer: ''},
                        {number: 7,
                        content: '',
                        answer: ''},
                        {number: 8,
                        content: '',
                        answer: ''}
                    ]
        }]);
    }());

(function() {

    'use strict';

    angular.module('training.directives', [])
        .directive('myDirective', function() {

            console.log("DEBUG: myDirective");

            return {

                restrict: 'E',
                scope: {
                    val:'=',
                    grouped:'='
                },
                link:function(scope, element, attrs){

                    scope.$watch('val',function(newVal, oldVal){

                        //if 'val' is undefined, exit

                        if(!newVal){
                            return;
                        }

                        //var dataset1 = newVal;
                        //console.log("dataset1 : ", dataset1.length);

                        var i;
                        var nameVal = new Array();
                        for (i = 0 ; i < newVal.length ; i++) {

//                          console.log('newVal[', i,'].name : ', newVal[i].name);
//                          console.log('newVal[', i,'].age : ', newVal[i].age);
                            nameVal[i] = 0;
                            for (var j = 0; j < newVal[i].name.length; j++) {
                                //console.log("character code value at j : ", j, " is: ", newVal[i].name.charCodeAt(j));
                                nameVal[i] = nameVal[i] + newVal[i].name.charCodeAt(j);

                            }

                            console.log('nameVal[', i,'] : ', nameVal[i]);

                        }

                    var w = 400;
                    var h = 200;

                    var dataset = _.map(_.range(newVal.length), function(i) {
                        return {
                            x: nameVal[i],
                            y: newVal[i].age,
                            r: newVal[i].age
                        };
                    });

                    console.log("dataset : ", dataset);

                    var xScale = d3.scale.linear()
                        .domain([0, d3.max(dataset, function(d) {
                            return d.x*1.5;
                        })])
                        .range([0, w]);

                    var yScale = d3.scale.linear()
                        .domain([0, 100])
                        .range([0, h]);

                    var colorScale = d3.scale.quantile()
                        .domain([0, 10, dataset.length - 10, dataset.length])
                        .range(['yellow', 'orange', 'yellow']);

                    var svg = d3.select('#chartArea').append('svg')
                        .attr('width', w)
                        .attr('height', h);

                    svg.selectAll('circle')
                        .data(dataset)
                        .enter()
                        .append('circle')
                        .attr('class', 'bubble')
                        .attr('cy', function(d) {
                            return h-yScale(d.y);
                        })
                        .attr('cx', function(d) {
                            return xScale(d.x);
                        })
                        .attr('r', function (d) {
                            return d.r;
                        });
                    });
                }
            };
        });
}());
var neo4j = require('node-neo4j');
var url = 'http://localhost:7474';
var neodb = new neo4j(url);


function createNodes(data, callback) {
    //var node = neodb.createNode(data);
    var node = neodb.insertNode(data, function(err, result){
        if(err) {callback(err, null)}
        else {callback(null, result)}
    });
}

exports.createNodes = createNodes;
//exports.find = find;
//exports.findOne = findOne;
//exports.update = update;
//exports.remove = remove;
//exports.objectID = objectID;
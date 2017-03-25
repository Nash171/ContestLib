var Graph = function(n){
	this.nodes = [];
	for(var i=1; i<=n; i++){
		this.nodes[i] = new Node(i);
	}
}

Graph.prototype.addEdge = function(u, v){
	this.nodes[u].connect.push(this.nodes[v]);
}

Graph.prototype.setUnvisited = function(u, v){
	for(var i=1; i<this.nodes.length; i++){
		this.nodes[i].visited = false;
		this.nodes[i].connect = this.nodes[i].processed;
		this.nodes[i].processed = [];
	}
}

Graph.prototype.print = function(u, v){
	console.log("-------------------------------");
	for(var i=1; i<this.nodes.length; i++){
		console.log(this.nodes[i]);;
	}
	console.log("-------------------------------");
}

var Node = function(val){
	this.value = val;
	this.connect = [];
	this.processed = [];
	this.visited = false;
}

module.exports = Graph
function Union(n){
	this.m = [];
	this.sz = [];
	this.set = n;
	for(var i=0; i<n; i++){
		this.m[i] = i;
		this.sz[i] = 1;
	}
}

Union.prototype.root = function(p){
	while(this.m[p]!=p){
		this.m[p] = this.m[this.m[p]];
		p = this.m[p];
	}

	return p;
}

Union.prototype.connect = function(p, q){
	var p_root = this.root(p);
	var q_root = this.root(q);
	if(p_root!=q_root){
		this.set--;
	}
	if(this.sz[p_root]>this.sz[q_root]){
		this.m[q_root] = p_root;
		this.sz[p_root] += this.sz[q_root];
	}
	else {
		this.m[p_root] = q_root;
		this.sz[q_root] += this.sz[p_root];
	}
}

module.exports = Union
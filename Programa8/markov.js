//objetos que conforman nuestro arbol
//crea un nodo 
function node(){
    this.value = val;
    this.children = [];
}

//metodo para creacion de arbol
function tree() {
    this.root = null;
}


//funcion para busqueda en el arbol 
tree.prototype.BFS = function(value){
    let queue = [this.root];   
    
    while(queue.length){
        let node = queue.shift();
        if (node.value === value) {
            return node;
        }
         
        for (let i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);   
        }
    }

    return null;
}

//funcion para añadir 
Tree.prototype.add = function (value, toNodeValue) {
    let node = new Node(value);
    let parent = toNodeValue ? this.BFS(toNodeValue) : null;
    if (parent) {
      parent.children.push(node);
    }
    else if (!this.root) {
      this.root = node;
    }
    else {
      throw new Error('nodo raiz asignada');
    }
  };

//funcion para borrado de nodos 
Tree.prototype.remove = function (value) {
    // caso especial: si el valor está en el
    // nodo raíz reseteamos el árbol
    if (this.root.value === value) {
      this.root = null;
    }
    let queue = [this.root];
    while (queue.length) {
      var node = queue.shift();
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].value === value) {
          node.children.splice(i, 1);
        }
        else {
          queue.push(node.children[i]);
        }
      }
    }
  };
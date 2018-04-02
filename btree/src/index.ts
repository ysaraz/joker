class BTreeNode<N> {
    private data:N;
    public left:any;
    public right:any;
    constructor(data:N,left,right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    get(){
        return this.data;
    }
}
enum BTreePosition{
    Left = 0,
    Right = 1,
}
class BTree<N> {
    root:BTreeNode<N> = null;

    insert(data:N){
        let node = new BTreeNode(data,null,null);    
        if(this.root === null){
            this.root = node;
        }else{
            var current:BTreeNode<N> = this.root;
            var parent:BTreeNode<N> = null;
            while(true){
                parent = current;
                let position:BTreePosition = this.checkPosition(current,data);
                if(position === BTreePosition.Left){
                    current = current.left;
                    if(current === null){
                        parent.left = node;
                        break;
                    }
                }else{
                    current = current.right;
                    if(current === null){
                        parent.right = node;
                        break;
                    }
                }
            }
            
        }
    }

    checkPosition(node:BTreeNode<N>,data:N){
        if( data < node.get() ){
            return BTreePosition.Left;
        }else{
            return BTreePosition.Right;
        }
    }
}


let List = [4,5,1,2,3,8,7,9,0,6];
let bt =  new BTree<Number>();
for(let i of List){
    bt.insert(i);
}
//中序遍历二叉树
let inOrder = (bt:BTree<Number>)=>{
    let list = [];
    let current:BTreeNode<Number> = bt.root;
    while(true){
        while(current != null){
            list.push(current);
            current = current.left;
        }
        let temp = list.pop();
        console.log(temp.get());
        current = temp.right;
    }
}

//前序遍历二叉树
let preOrder = (bt)=>{
    let current = bt.root;
}
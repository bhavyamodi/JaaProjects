package trees;

public class binarySearchTree {
    public static void main(String[] args) {
        Node root = new Node(10);

        root.left = new Node(8);
        root.left.left = new Node(6);
        root.left.right = new Node(9);

        root.right = new Node(12);
        root.right.left = new Node(8);
        root.right.right = new Node(10);
        root.right.right.left = new Node(8);

        System.out.println(isBinaryTree(root));

    }

    public static boolean isBinaryTree(Node root){
        if(root == null){
            return true;
        }
        int rootNode = root.value;
        int leftValue = root.left.value;
        int rightValue = root.right.value;
        System.out.println("root "+rootNode+" left "+leftValue+" right "+rightValue);

        if(leftValue > rootNode || rightValue < rootNode){
            return false;
        }

        boolean leftTree = isBinaryTree(root.left);
        boolean rightTree = isBinaryTree(root.right);

        if(leftTree != true || rightTree != true){
            return false;
        }
        return true;
    }
}

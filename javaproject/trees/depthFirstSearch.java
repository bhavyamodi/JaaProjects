package trees;

import java.util.Arrays;

public class depthFirstSearch {
    public static void main(String[] args) {
        Node root = new Node(2);

        root.left = new Node(3);
        root.left.left = new Node(6);
        root.left.right = new Node(7);

        root.right = new Node(5);
        root.right.left = new Node(8);
        root.right.right = new Node(10);
        root.right.right.left = new Node(12);

        System.out.println("preorder : ");
        preOrder(root);

        System.out.println("inorder : ");
        inOrder(root);

        System.out.println("postorder : ");
        postOrder(root);

    }
    public static void preOrder(Node root){
        //root -> left -> right

        if(root == null){
            return;
        }
        System.out.println(root.value);

        preOrder(root.left);
        preOrder(root.right);
    }

    public static void inOrder(Node root){
        //left -> root -> right

        if(root == null){
            return;
        }
        inOrder(root.left);
        System.out.println(root.value);
        inOrder(root.right);
    }

    public static void postOrder(Node root){
        //left -> right -> root

        if(root == null){
            return;
        }
        postOrder(root.left);
        postOrder(root.right);
        System.out.println(root.value);
    }

}

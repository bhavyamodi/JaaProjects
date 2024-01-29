package trees;

import com.sun.source.tree.Tree;

class Node {
    int value;
    Node left;
    Node right;

    Node(int value) {
        this.value = value;
        right = null;
        left = null;
    }
}
public class trees {
    public static void main(String[] args) {
        //root node
        Node root = new Node(2);

        //left node
        root.left = new Node(3);
        //left node child
        root.left.left = new Node(4);
        root.left.right = new Node(5);

        //child node
        root.right = new Node(7);

        //function to print tree
        print("", root, false);
    }

    public static void print(String prefix, Node n, boolean isLeft) {
        if (n != null) {
            print(prefix + "     ", n.right, false);
            System.out.println (prefix + ("|-- ") + n.value);
            print(prefix + "     ", n.left, true);
        }
    }
}

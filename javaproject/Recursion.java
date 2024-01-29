public class Recursion {
    public static void main(String[] args) {
        int m = fibonnaci(5);
        System.out.println(m);
    }

    public static int fibonnaci(int n) {
        if (n <= 1) {
            return n;
        }

        return fibonnaci(n - 1) + fibonnaci(n - 2);
    }

}

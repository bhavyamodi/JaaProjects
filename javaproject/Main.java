public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
        SqrtN(5);
        nSquareLogN(6);
    }

    public static void SqrtN(int n) {
        //Time complexity is sqrt(n)
        int i = 1, s = 1;
        while (s <= n) {
            i++;
            s = s + i;
            System.out.println('*');
        }
    }

    public static void nSquareLogN(int n) {
        int i, j, k, count = 0;
        for (i = n / 2; i <= n; i++) {
            System.out.println("first Loop " + i);
            for (j = 1; j <= n; j = 2 * j) {
                System.out.println("Second Loop " + j);
                for (k = 1; k <= n; k = k * 2) {
                    System.out.println("Third Loop " + k);
                    count++;
                }
            }
        }
    }
}
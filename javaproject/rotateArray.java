import java.util.Arrays;

public class rotateArray {
    public static final void main(String[] args) {

        int[] A = {1,1,4,9,7,1};
        int B = 9;

        int lb = 0;
        int ub = (A.length) - 1;
        reverse(A, lb, ub);
        reverse(A, lb, B - 1);
        reverse(A, B, ub);
        System.out.println(Arrays.toString(A));
    }

    public static void reverse(int[]A, int lb, int ub){
        while(lb < ub){
            int temp = A[lb];
            A[lb] = A[ub];
            A[ub] = temp;
            lb++;
            ub--;
        }
    }
}
import java.util.Arrays;

public class transposeTwoDArray {
    public static void main(String[] args) {
        int[][] A = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };
        transpose(A);
        rotate90Degree(A);
        System.out.println(Arrays.deepToString(A));
    }

    public static void transpose(int[][] A){
        for(int i = 0; i < A.length; i++){
            for (int j = i+1; j < A.length; j++){
                int temp = A[i][j];
                A[i][j] = A[j][i];
                A[j][i] = temp;
            }
        }
    }
    public static void rotate90Degree(int[][] A){
        for(int i = 0; i < A.length; i++){
            int lb = 0;
            int ub = A.length-1;
            while(lb < ub){
                int temp = A[i][lb];
                A[i][lb] = A[i][ub];
                A[i][ub] = temp;
                lb++;
                ub--;
            }
        }
    }
}

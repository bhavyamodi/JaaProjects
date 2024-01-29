import java.util.Arrays;

public class twoDMatrixSum {
    public static void main(String[] args) {
        int[][] A = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };
        int[] response1 = columnWiseSum(A);
        System.out.println(Arrays.toString(response1));

        int[] response2 = rowWiseSum(A);
        System.out.println(Arrays.toString(response2));

        int[][] response3 = diagonal(A);
        System.out.println(Arrays.toString(response3));
    }

    public static int[] rowWiseSum(int[][] A){
        int[] response = new int[A.length];
        for(int i = 0; i < A.length; i++){
            int sum = 0;
            for(int j = 0; j < A[0].length; j++){
                sum += A[i][j];
            }
            response[i] = sum;
        }
        return response;
    }

    public static int[] columnWiseSum(int[][] A){
        int[] response = new int[A[0].length];
        for(int i = 0; i < A[0].length; i++){
            int sum = 0;
            for(int j = 0; j < A.length; j++){
                sum += A[j][i];
            }
            response[i] = sum;
        }
        return response;
    }

    public static int[][] diagonal(int[][] A) {
        int[][] response = new int[2 * A.length - 1][A.length];
        int count = 0;
        for(int col = 0; col < A.length; col++){
            int i = 0;
            int j = col;
            while(i < A.length && j >= 0){
                System.out.println(A[i][j]);
//                response[count][i] = A[i][j];
                i++;
                j--;
            }
            count++;
        }

        for(int row=1; row < A.length; row++){
            int index = 0;
            int i = row;
            int j = A.length - 1;
            while(i < A.length && j >= 0){
                response[count][index] = A[i][j];
                i++;
                j--;
                index++;
            }
            count++;
        }
        return response;
    }
}

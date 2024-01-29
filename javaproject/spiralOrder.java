import java.util.Arrays;

public class spiralOrder {
    public static void main(String[] args) {
//        int[][] matrix = {{1,2,3,4}, {12,13,14,5},{11,16,15,6}, {10,9,8,7}};
//        int[][] matrix = {{1,2,3}};
//        int[][] matrix = {{1}, {2},{3}};
//        int[][] matrix = {{1,2,3}, {10,11,4},{9,12,5}, {8,7,6}};
//        int[][] matrix = {{1,2,3}, {8,9,4}, {7,6,5}};
        int[][] matrix = {{1,2,3,4}, {8,7,6,5}};

        System.out.println(Arrays.toString(solve(matrix)));
    }

    public static int[] solve(int[][] matrix){
        int n = matrix.length;
        int m = matrix[0].length;
        int[] response = new int[m*n];

        if(n == 1){
            return matrix[0];
        }
        if(m == 1){
            for(int i = 0; i < n; i++){
                response[i] = matrix[i][0];
            }
            return response;
        }
        int i = 0, j = 0;
        int indexCount = 0;
        while(n > 1 || m > 1) {
            for (int k = 0; k < m - 1; k++) {
                response[indexCount++] = matrix[i][j++];
            }

            for (int k = 0; k < n - 1; k++) {
                response[indexCount++] = matrix[i++][j];
            }

            for (int k = 0; k < m - 1; k++) {
                response[indexCount++] = matrix[i][j--];
            }

            for (int k = 0; k < n - 1; k++) {
                response[indexCount++] = matrix[i--][j];
            }
            i++; j++;
            n -= 2;
            m -= 2;
        }
        if(n == m && n == 1){
            response[indexCount] = matrix[i][j];
        }
        return response;
    }
}

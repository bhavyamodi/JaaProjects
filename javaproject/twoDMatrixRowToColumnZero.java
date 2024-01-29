import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class twoDMatrixRowToColumnZero {
    public static void main(String[] args) {
        int[][] A = {
                {1, 0, 2, 3},
                {4, 5, 6, 7},
                {8, 9, 0, 1}
        };
        int[][] response1 = rowToColumnZero(A);
        System.out.println(Arrays.deepToString(response1));

    }

    public static int[][] rowToColumnZero(int[][] A) {
        int[][] response = new int[A.length][A[0].length];
        Set<Integer> rowsToZero = new HashSet<>();
        Set<Integer> columnsToZero = new HashSet<>();

        for(int i = 0; i < A.length; i++){
            for(int j = 0; j < A[0].length; j++){
                response[i][j] = A[i][j];
                if(A[i][j] == 0){
                    rowsToZero.add(i);
                    columnsToZero.add(j);
                }
            }
        }
        for(int i : rowsToZero){
            for (int j = 0; j < A[0].length; j++){
                response[i][j] = 0;
            }
        }

        for (int i : columnsToZero){
            for (int j = 0; j < A.length; j++){
                response[j][i] = 0;
            }
        }
            return response;
    }
}

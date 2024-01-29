import java.util.Arrays;

public class printSpiralMAtrix {
    public static void main(String[] args) {
        int[][] response = generateMatrix(80    );
        System.out.println(Arrays.deepToString(response));
    }
    public  static int[][] generateMatrix(int A) {
        int i =0;
        int j =0;
        int N = A;
        int indexValue = 1;
        int[][] response = new int[A][A];
        while(N > 1){
            System.out.println(Arrays.deepToString(response));
            for(int k =0; k < N-1;k++){
                response[i][j] = indexValue;
                j++;
                indexValue++;
            }
            for(int k =0; k < N-1;k++){
                response[i][j] = indexValue;
                i++;
                indexValue++;
            }

            for(int k =0; k < N-1;k++){
                response[i][j] = indexValue;
                j--;
                indexValue++;
            }

            for(int k =0; k < N-1;k++){
                response[i][j] = indexValue;
                i--;
                indexValue++;
            }
            i++; j++;
            N = N-2;
        }
        if(N == 1){
            response[i][j] = indexValue;
        }

        return response;
    }
}

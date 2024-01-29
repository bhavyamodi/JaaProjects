import java.util.Arrays;

public class allSubArrays {
    public static void main(String[] args) {
        int[] A = {36,63,63,26,87,28,77,93,7};
        int n = A.length;
        int[][] response = new int[n][n];
        for(int i = 0 ; i < n ; i++){
            for(int j = i; j < n;j++){
                int[] subarray = new int[j - i + 1];
                int count = 0;
                for(int k = i; k <= j; k++){
                    subarray[count] = A[k];
                    count++;
                }
                response[i] = subarray;
                System.out.println(Arrays.toString(subarray));
            }
        }
        System.out.println(Arrays.toString(response));
    }
}

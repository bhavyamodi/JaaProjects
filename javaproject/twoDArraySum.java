import java.util.Arrays;

public class twoDArraySum {
    public static void main(String[] args) {
    //You are given an integer array A of length N.
    //You are also given a 2D integer array B with dimensions M x 2, where each row denotes a
    //[L, R] query.
    //For each query, you have to find the sum of all elements from
    //L to R indices in A (0 - indexed).
    //More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.

        int[] A = {6,3,3,6};
        int[][] B = {{0,3},{0,2}};

        //approach 1
        int[] result = new int[B.length];

        for (int i = 0; i <= B.length - 1; i++){
            int sum = 0;
            for(int j = B[i][0]; j <= B[i][1]; j++){
                sum += A[j];
            }
            result[i] = sum;
        }
       System.out.println(Arrays.toString(result));

        //approach 2
        int[] response = new int[B.length];
        int[] prefixSum = new int[A.length];

        for (int j = 0; j < A.length; j++){
            if(j == 0){
                prefixSum[j] = A[j];
            }else{
                prefixSum[j] = (prefixSum[j-1] + A[j]);
            }
        }

        for (int i = 0; i < B.length; i++){
            int lb = B[i][0];
            int ub = B[i][1];

            if(lb == 0){
                response[i] = prefixSum[ub];
            }else{
                response[i] = prefixSum[ub] - prefixSum[lb - 1];
            }
        }
        System.out.println(Arrays.toString(response));
//        System.out.println(Arrays.toString(prefixSum));
    }
}

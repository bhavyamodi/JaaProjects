import java.util.Arrays;

public class maximumSubArraySum {
    public static void main(String[] args) {
        int[] C = {7,1,8,5,8,5,3,3,5};
        int A = 9;
        int B = 78;
        System.out.println(maxSubarray(A,B,C));
    }

    public static int maxSubarray(int A, int B, int[] C) {
        int[] prefixSum = new int[A];
        for(int i = 0; i < A; i++){
            if(i == 0){
                prefixSum[i] = C[i];
            }else{
                prefixSum[i] = prefixSum[i - 1] + C[i];
            }
        }
        System.out.println(Arrays.toString(prefixSum));
        int maxSum = 0;
        int currentSum = 0;
        for(int i = 0; i < A; i++){
            for(int j = i; j < A; j++){
                if(i == 0){
                    currentSum = prefixSum[j];
                }else{
                    currentSum = prefixSum[j] - prefixSum[i - 1];
                }

                System.out.println(currentSum);

                if(currentSum <= B && currentSum > maxSum){
                    maxSum = currentSum;
                }
            }
        }
        return maxSum;
    }
}

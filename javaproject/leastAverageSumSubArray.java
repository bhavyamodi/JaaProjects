public class leastAverageSumSubArray {
    public static void main(String[] args) {
        int[] A = {20,3,13,5,10,14,8,5,11,9,1,11};
        int B = 9;
        System.out.println(solve(A,B));
    }

    public static int solve(int[] A, int B) {
        float sum = 0;
        float average = 0;
        float minAvg = 0;
        int response = 0;
        for(int i = 0; i < B; i++){
            sum += A[i];
        }
        average = sum / B;
        System.out.println("sum "+ sum + " average " + average);
        minAvg = average;
        int low = 1;
        int high = B;
        while(high < A.length){
            sum = (sum - A[low - 1])+ A[high];
            average = sum / B;
            System.out.println("sum "+sum+ " average " + average);
            System.out.println("average "+ average +" minAvg "+minAvg+" index "+low );
            if(average < minAvg){
                minAvg = average;
                response = low;
            }
            System.out.println("average "+ average +" minAvg "+minAvg+" response "+response );
            low++;
            high++;
        }
        return response;
    }
}

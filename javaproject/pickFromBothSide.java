public class pickFromBothSide {
    public static void main(String[] args) {
        int[] A = {-533,-666,-500,169,724,478,358,-38,-536,705,-855,281,-173,961,-509,-5,942,-173,436,-609,-396,902,-847,-708,-618,421,-284,718,895,447,726,-229,538,869,912,667,-701,35,894,-297,811,322,-667,673,-336,141,711,-747,-132,547,644,-338,-243,-963,-141,-277,741,529,-222,-684,35};
        int B = 48;
        System.out.println(solve(A,B));

    }
    public static int solve(int[] A, int B) {
        int maximumSum = 0;
        int n = A.length;
        for(int i = 0; i < B; i++){
            maximumSum += A[i];
        }

        int currentSum = maximumSum;
        int forward = B - 1;
        int backward = 1;
        while(forward + backward == B && forward >= 0){
            System.out.println("backward " + backward +" forward" + forward);
            currentSum = ((currentSum - (A[B - backward]) )+ A[n - backward]);
            if(currentSum > maximumSum){
                maximumSum = currentSum;
            }
            forward--;
            backward++;
        }

        return maximumSum;
    }
}

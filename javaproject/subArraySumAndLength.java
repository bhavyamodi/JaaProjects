public class subArraySumAndLength {
    public static void main(String[] args) {
        int[] A = {6,3,3,6,7,8,7,3,7};
        int B = 2;
        int C = 10;
        int response = solve(A,B,C);
        System.out.println(response);

    }

    public static int solve(int[] A, int B, int C) {
        int sum = 0;
        for(int i =0; i < B; i++){
            sum += A[i];
        }
        if(sum == C){
            return 1;
        }
        System.out.println("sum "+sum);

        int lb = 1;
        int ub = B;
        while(ub < A.length){
            System.out.println("ub "+ub+" lb "+(lb-1));
            sum = (sum - A[lb - 1] )+ A[ub];
            System.out.println(sum);
            if(sum == C){
                return 1;
            }
            lb++;
            ub++;
        }
        return 0;
    }
}

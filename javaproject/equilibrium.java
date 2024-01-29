import java.util.Arrays;

public class equilibrium {
    public static void main(String[] args) {
        int[] A = {1,2,3,7,1,2,3};
        for (int j = 0; j < A.length; j++){
            if(j != 0){
                A[j] = A[j-1] + A[j];
            }
        }
        System.out.println(Arrays.toString(A));
        int count = 0;
        for(int i = 0; i < A.length; i++){
            int ls = (i == 0) ? 0 : A[i - 1];
            int rs = (i == A.length - 1) ? 0 : A[A.length - 1] - A[i];
            int result = (ls == rs) ? 1 : 0;
            count += result;
        }
        System.out.println(count);
    }
}

import java.util.Arrays;

public class nobleElement {
    public static void main(String[] args) {
        int[] A = {5,6,2};
        Arrays.sort(A);
        System.out.println(Arrays.toString(A));
        int count = 0;
        if(A[0] == 0) System.out.println(1);

        for(int i = 1 ; i < A.length; i++){
            if(A[i] != A[i-1]){
                count  = i;
            }
            if(count == A[i]){
                System.out.println(1);
            }
        }

        System.out.println(-1);
    }
}

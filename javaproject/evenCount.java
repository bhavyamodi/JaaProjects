import java.util.Arrays;

public class evenCount {
    public static void main(String[] args) {
        int[] A = {6,3,3,6,7,8,7,3,7};
        int[][] B = {{2,6},{4,7},{6,7}};
        int temp[] = new int[A.length];
        for(int i = 0; i < A.length; i++){
            if(A[i] % 2 == 0){
                temp[i] = 1;
            }else{
                temp[i] = 0;
            }
        }

        for(int i = 0; i < A.length; i++){
            if(i != 0){
                temp[i] = temp[i-1] + temp[i];
            }
        }
        System.out.println(Arrays.toString(temp));

        int response[] = new int[B.length];
        for(int i = 0; i < B.length; i++){
            int lb = B[i][0];
            int ub = B[i][1];
            System.out.println(lb);
            System.out.println(ub);
            if(lb == 0){
                response[i] = temp[ub];
            }else{
                response[i] = temp[ub] - temp[lb - 1];
            }
        }
        System.out.println(Arrays.toString(response));
    }
}

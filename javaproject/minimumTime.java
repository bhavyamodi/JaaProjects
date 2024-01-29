public class minimumTime {
    public static void main(String[] args) {
        int[] A = new int[5];
        A[0] = 4;
        A[1] = 4;
        A[2] = 4;
        A[3] = 4;
        A[4] = 4;

        int max = A[0];
        for(int i = 1; i < A.length; i++){
            if(A[i] > max){
                max = A[i];
            }
        }
        int timeRequired = 0;
        for (int i =0; i < A.length; i++){
            if(A[i] < max){
                timeRequired = timeRequired + (max - A[i]);
            }
        }
        System.out.println(timeRequired);
    }
}

import java.util.Arrays;

public class leadersInArray {
    public static void main(String[] args) {
        int[] A = {93,57,83,41,100,10,79,27,94,22,4,96,48,18,89,37,21,5,46,81,15,30,47,23,34,65,55,9,36,20,54,17,7,56,78,84,87,97,16,69,28,11,44,49,8,25,98,75,53,62,19,24,80,68,50,91,1,86,77,14,72,66,42,63,73,45,31,61,85,64,35,32,92,71,74,3,99,52,90,43,6,40,38,2,12,59,29,82,76,60,67,13,70,58,39,33,95,88,51,26};
        int[] response = solve(A);
        System.out.println(Arrays.toString(response));
//        System.out.println(response);
    }

    static int[] solve(int[] A) {
        int currentLeader = A[A.length - 1];
        int[] response = new int[A.length];
        int counter = 0;
        response[counter] = currentLeader;

        for(int i = A.length - 2 ; i >= 0; i--){
            int[] temp = new int[counter ++];
            if(A[i] > currentLeader){
                currentLeader = A[i];
                counter++;
//                response[counter] = currentLeader;
            }
        }
        return response;
    }
}

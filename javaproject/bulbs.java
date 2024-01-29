import java.util.Arrays;

public class bulbs {
    public static void main(String[] args) {
        int[] bulbs = {1,1,0,0,1,1,0,0,1};
        int minSwitches = minSwitchesToTurnOnAllBulbs(bulbs);
        System.out.println("Minimum switches needed: " + minSwitches);
    }
        static int minSwitchesToTurnOnAllBulbs(int[] A) {
            int n = A.length;
            int noOfClicks = 0;
            for(int i = 0; i < n; i++){
                if(A[i] == 1 && noOfClicks % 2 == 1){
                    noOfClicks++;
                }
                else if(A[i] == 0 && noOfClicks % 2 == 0){
                    noOfClicks++;
                }
            }
            return noOfClicks;
        }
}

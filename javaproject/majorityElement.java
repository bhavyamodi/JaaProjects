import java.util.Arrays;

public class majorityElement {
    public static void main(String[] args) {
        int[] A = {1, 1, 1, 2, 3, 5, 7 };
        System.out.println(repeatedNumber(A));
    }

    public static int repeatedNumber(int[] A) {
        int majorityElement1 = A[0];
        int majorityElement2 = -1;
        int countElement1 = 1;
        int countElement2 = 0;

        for(int i = 1; i < A.length; i++){

            if(countElement1 == 0){
                majorityElement1 = A[i];
                countElement1++;
            }else if(majorityElement1 == A[i]){
                countElement1++;
            }
            else if(countElement2 == 0){
                majorityElement2 = A[i];
                countElement2++;
            }else if(majorityElement2 == A[i]){
                countElement2++;
            }else{
                countElement1--;
                countElement2--;
            }
//            System.out.println("elem1 "+majorityElement1+" count1 "+countElement1+" elem2 "+majorityElement2+" count2 "+countElement2);
        }

        float validElementCount = A.length / 3;
        countElement1 = 0;
        countElement2 = 0;
        for(int i = 0; i< A.length; i++){
            if(A[i] == majorityElement1){
                countElement1++;
            }
            if(A[i] == majorityElement2){
                countElement2++;
            }
        }
        if(countElement1>validElementCount){
            return majorityElement1;
        }else if(countElement2>validElementCount){
            return majorityElement2;
        }

        return -1;
    }
}

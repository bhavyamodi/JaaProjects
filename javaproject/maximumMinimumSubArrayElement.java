public class maximumMinimumSubArrayElement {
    public static void main(String[] args) {
        int[] A = {343,291,963,165,152};
        int response = solve(A);
        System.out.println(response);
    }
    public static int solve(int[] A) {
        int minElement = A[0];
        int maxElement = A[0];
        int lastMin = -1;
        int lastMax = -1;
        int ans = A.length;
        for (int i = 1; i < A.length; i++){
            if(A[i] > maxElement){
                maxElement = A[i];
            }
            if(A[i] < minElement){
                minElement = A[i];
            }
        }

        for (int i = A.length - 1; i >= 0; i--){
            System.out.println(lastMax);
            System.out.println(lastMin);
            if(A[i] == minElement){
                lastMin = i;
                if(lastMax != -1){
                    int len = lastMax - i + 1;
                    if(len < ans){
                        ans = len;
                    }
                }
            }

            if(A[i] == maxElement){
                lastMax = i;
                if(lastMin != -1){
                    int len = lastMin - i + 1;
                    if(len < ans){
                        ans = len;
                    }
                }
            }

        }
        return ans;
    }
}

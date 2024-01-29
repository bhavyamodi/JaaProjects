public class minimumSwapsRequired {
    public static void main(String[] args) {
        int[] A = {52,7,93,47,68,26,51,44,5,41,88,19,78,38,17,13,24,74,92,5,84,27,48,49,37,59,3,56,79,26,55,60,16,83,63,40,55,9,96,29,7,22,27,74,78,38,11,65,29,52,36,21,94,46,52,47,87,33,87,70};
        int B = 19;
        int response = solve(A,B);
        System.out.println(response);
    }

    public static int solve(int[] A, int B) {
        int countOfBElements = 0;
        int N = A.length;
        for(int i =0; i< N; i++){
            if(A[i] <= B){
                countOfBElements++;
            }
        }
        System.out.println(countOfBElements);
        int minSwaps = 0;
        for(int i =0; i < countOfBElements; i++){
            if(A[i] > B){
                minSwaps++;
            }
        }
        int ans = minSwaps;
        int low = 1;
        int high = countOfBElements;
        while(high < N){
            System.out.println("start "+A[low]+" index "+low+" end "+A[high]+" index "+high);
            if(A[low - 1] > B){
                minSwaps--;
            }
            if(A[high] > B){
                minSwaps++;
            }
            System.out.println("ans "+ans+" minswaps "+minSwaps);
            ans = Math.min(ans, minSwaps);
            low++;
            high++;
        }
        return ans;
    }
}

import java.util.ArrayList;

public class maximumSum {
    public static void main(String[] args) {
        int[] arr = {135, 101, 170, 125, 79, 159, 163, 65, 106, 146, 82, 28, 162, 92, 196, 143, 28, 37, 192, 5 ,103, 154 ,93 ,183 ,22 ,117 ,119, 96, 48, 127, 172, 139, 70 ,113 ,68 ,100 ,36 ,95 ,104, 12, 123 ,134};
        int n = arr.length;
        int s = 468;
        System.out.println(subarraySum(arr,n, s));
    }
    static ArrayList<Integer> subarraySum(int[] arr, int n, int s)
    {
        int lb = 0;
        int ub = 1;
        int prefixSum = arr[lb];

        ArrayList<Integer> response = new ArrayList<Integer>(2);
        while(lb < ub && ub < n){
            System.out.println(prefixSum);
            if(prefixSum == s){
                response.add(lb + 1);
                response.add(ub);
                return response;
            }
            else if(prefixSum < s){
                ub++;
                prefixSum += arr[ub];
            }else{
                prefixSum -= arr[lb];
                lb ++;
                if(lb > ub){
                    ub++;
                }
            }
        }
        response.add(-1);
        return response;
    }
}

public class maximumProduct {
    public static void main(String[] args) {
        int[] arr = {0,0,-5,0,0};
        int n = arr.length;
        int maxProduct = 1;
        int currentProduct = arr[0];
        int slow = 0;
        int fast = 1;
        while(slow < fast && fast < n){
            currentProduct *= arr[fast];
            if(arr[fast] == 0){
                slow = fast + 1;
                fast = slow + 1;
                currentProduct = arr[slow];
            } else if (currentProduct < maxProduct) {
                slow = fast;
                fast++;
                currentProduct = arr[slow];
            } else {
                fast++;
            }
            if(currentProduct > maxProduct){
                maxProduct = currentProduct;
            }
        }
        System.out.println(maxProduct);
    }
}

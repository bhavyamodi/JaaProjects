public class replaceElement {
    public static void main(String[] args) {
        int[] arr = {10,20,30,40,50};
        fun(arr);
        System.out.println(arr[3]);
    }

    static void fun(int[]arr){
        arr[3] = 98;
    }
}

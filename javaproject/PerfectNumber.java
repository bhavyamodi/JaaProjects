public class PerfectNumber {
    public static void main(String[] args) {
        int A = 1;
        System.out.println(number(A));

    }

    public static int number(int A){
        if(A <= 1){
            return 0;
        }
        int sum = 0;
        for(int i = 1; i*i <= A; i++){
           if(A % i == 0){
               if(i == A/i || i == 1){
                   sum += i;
               }else{
                   sum  = sum + i + A/i;
               }
           }
        }
        if(sum == A) {
            return 1;
        }
        return 0;
    }
}

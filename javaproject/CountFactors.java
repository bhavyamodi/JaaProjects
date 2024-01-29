public class CountFactors {
    public static void main(String[] args) {
        int N = 1;
        int result = Factors(N);
        System.out.println(result);
    }

    public static int Factors(int N){
        int primeCount = 0;
        for(int j = 0; j <= N;j++){
            int count = 0;
            for(int i = 1; i*i <= j; i++){
                if(j % i == 0){
                    if(i == j/i){
                        count += 1;
                    }else{
                        count += 2;
                    }
                }
            }
            primeCount += (count == 2) ? 1 : 0;
        }
        return primeCount;
    }
}
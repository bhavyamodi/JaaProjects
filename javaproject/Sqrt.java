public class Sqrt {
    public static void main(String[] args) {
        int N = 84630800;
        System.out.println(Sqrt(N));
    }
    public static int Sqrt(int N) {
        int max = 0;
//        int i = 0;
//        while(i*i <= N){
////            max = i;
//            i++;
//        }

        for(long i = 1; i <= N; i++){


            if(i * i == N){
               return (int)i;
            }
        }
        return -1;
    }
}

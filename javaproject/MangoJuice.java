public class MangoJuice {
    public static void main(String[] args) {
        int A = 123456789;
        int B = 234;
        int response = makeJuice(A,B);
        System.out.println(response);
    }

    public static int makeJuice(int A,int B){
        int totalSlices = (A * 3) + B;
        System.out.println(totalSlices);
        return (totalSlices / 2);
    }
}

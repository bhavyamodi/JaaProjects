public class amazingSubstring {
    public static void main(String[] args) {
        String A = "aEeIiOoU";
        int count = 0;
        int length = A.length();
        for (int i = 0; i < length ; i++){
            if(A.charAt(i) == 'A' || A.charAt(i) == 'a' || A.charAt(i) == 'E' || A.charAt(i) == 'e'
                    || A.charAt(i) == 'I' || A.charAt(i) == 'i' || A.charAt(i) == 'O' || A.charAt(i) == 'o'
                    || A.charAt(i) == 'U' || A.charAt(i) == 'u'){
                int subString = length - i;
                count = (count + subString) % 10003;
            }
        }
        System.out.println(count);
    }
}

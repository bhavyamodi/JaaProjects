public class Roman {
    public static void main(String[] args) {
        int N = 3;
        String roman = numberToRoman(N);
    }

    public static String numberToRoman(int number){
        String response = "";
        while (number != 0) {
            if(number >= 1000){
                response = "M";
                number = number % 1000;
            } else if (number >= 500) {
                if (number < 900) {
                    response += "D";
                    number = number % 500;
                } else {
                    response += "CM";
                    number = number % 100;
                }
            } else if(number >= 100){
                if (number < 400) {
                    response += "C";
                } else {
                    response += "CD";
                }
                number = number % 100;
            } else if(number >= 50){
                if (number < 90) {
                    response += "L";
                    number = number % 50;
                } else {
                    response += "XC";
                    number = number % 10;
                }
            } else if(number >= 10){
                if (number < 40) {
                    response += "X";
                } else {
                    response += "XL";
                }
                number = number % 10;
            } else if(number >= 5){
                if (number < 9) {
                    response += "V";
                    number = number % 5;
                } else {
                    response += "IX";
                    number = 0;
                }
            } else if(number >= 1){
                if (number < 4) {
                    response += "I";
                } else {
                    response += "IV";
                }
                number = 0;
            }
        }
        System.out.println(response);
        return "IXVV";
    }
}

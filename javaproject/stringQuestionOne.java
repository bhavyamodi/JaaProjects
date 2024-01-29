public class stringQuestionOne {
    public static void main(String[] args) {
        String givenTime = "??:?1";
        String referenceTime = "12:30";
        System.out.println(nearestTime(givenTime, referenceTime));
    }
//(0-2) ([0-1][0-9] [2][0-3]] : (0-6)(0-9)
    public static String nearestTime(String givenTime, String referenceTime){
        if(givenTime == "??:??"){
            return referenceTime;
        }

        return "12:22";
    }
}

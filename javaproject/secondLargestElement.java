public class secondLargestElement {
    public static void main(String[] args) {
        int[] myArray = new int[5];
        myArray[0] = 4;
        myArray[1] = 3;
        myArray[2] = 4;
        myArray[3] = 4;
        myArray[4] = 4;

        int max = myArray[0];
        for(int i = 1; i < myArray.length; i++){
            if(myArray[i] > max){
                max = myArray[i];
            }
        }

        int secondLargestElem = -1;
        for(int i = 0; i < myArray.length; i++){
            if(myArray[i] < max && myArray[i] > secondLargestElem){
                secondLargestElem = myArray[i];
            }
        }

        System.out.println(secondLargestElem);
    }
}

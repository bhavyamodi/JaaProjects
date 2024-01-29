import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;

public class minimumCostToRemove {
    public static void main(String[] args) {
        int[] A = {5, 2, 8, 1, 3};

        Arrays.sort(A);

        // Reversing the array to get descending order
        for (int i = 0; i < A.length / 2; i++) {
            int temp = A[i];
            A[i] = A[A.length - 1 - i];
            A[A.length - 1 - i] = temp;
        }

        // Printing the sorted array
        System.out.println(Arrays.toString(A));
    }
}

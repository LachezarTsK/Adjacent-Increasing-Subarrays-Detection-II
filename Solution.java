
import java.util.List;

public class Solution {

    private int maxLengthTwoAdjacentIncreasingSubarrays;

    public int maxIncreasingSubarrays(List<Integer> input) {
        int currentIncreasingCount = 1;
        int previousIncreasingCount = 0;

        for (int i = 1; i < input.size(); ++i) {
            updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

            if (input.get(i - 1) >= input.get(i)) {
                previousIncreasingCount = currentIncreasingCount;
                currentIncreasingCount = 1;
                continue;
            }
            ++currentIncreasingCount;
        }
        updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

        return maxLengthTwoAdjacentIncreasingSubarrays;
    }

    private int getLengthTwoAdjacentIncreasingSubarrays(int currentIncreasingCount, int previousIncreasingCount) {
        return Math.max(currentIncreasingCount / 2, Math.min(currentIncreasingCount, previousIncreasingCount));
    }

    private void updateMaxLengthTwoAdjacentIncreasingSubarrays(int currentIncreasingCount, int previousIncreasingCount) {
        maxLengthTwoAdjacentIncreasingSubarrays = Math.max(maxLengthTwoAdjacentIncreasingSubarrays,
                getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount));
    }
}

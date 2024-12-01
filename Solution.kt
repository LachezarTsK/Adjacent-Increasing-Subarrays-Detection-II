
import kotlin.math.min
import kotlin.math.max

class Solution {

    private var maxLengthTwoAdjacentIncreasingSubarrays = 0

    fun maxIncreasingSubarrays(input: List<Int>): Int {
        var currentIncreasingCount = 1
        var previousIncreasingCount = 0

        for (i in 1..<input.size) {
            updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount)

            if (input[i - 1] >= input[i]) {
                previousIncreasingCount = currentIncreasingCount
                currentIncreasingCount = 1
                continue
            }
            ++currentIncreasingCount
        }
        updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount)

        return maxLengthTwoAdjacentIncreasingSubarrays
    }

    private fun getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount: Int, previousIncreasingCount: Int): Int {
        return max(currentIncreasingCount / 2, min(currentIncreasingCount, previousIncreasingCount))
    }

    private fun updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount: Int, previousIncreasingCount: Int) {
        maxLengthTwoAdjacentIncreasingSubarrays = max(maxLengthTwoAdjacentIncreasingSubarrays,
            getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount)
        )
    }
}

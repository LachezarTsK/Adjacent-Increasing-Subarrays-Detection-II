
using System;
using System.Collections.Generic;

public class Solution
{
    private int maxLengthTwoAdjacentIncreasingSubarrays;

    public int MaxIncreasingSubarrays(IList<int> input)
    {
        int currentIncreasingCount = 1;
        int previousIncreasingCount = 0;

        for (int i = 1; i < input.Count; ++i)
        {
            UpdateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

            if (input[i - 1] >= input[i])
            {
                previousIncreasingCount = currentIncreasingCount;
                currentIncreasingCount = 1;
                continue;
            }
            ++currentIncreasingCount;
        }
        UpdateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

        return maxLengthTwoAdjacentIncreasingSubarrays;
    }

    private int GetLengthTwoAdjacentIncreasingSubarrays(int currentIncreasingCount, int previousIncreasingCount)
    {
        return Math.Max(currentIncreasingCount / 2, Math.Min(currentIncreasingCount, previousIncreasingCount));
    }

    private void UpdateMaxLengthTwoAdjacentIncreasingSubarrays(int currentIncreasingCount, int previousIncreasingCount)
    {
        maxLengthTwoAdjacentIncreasingSubarrays = Math.Max(maxLengthTwoAdjacentIncreasingSubarrays,
                GetLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount));
    }
}

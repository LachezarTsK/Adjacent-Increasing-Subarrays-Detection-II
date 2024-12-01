
#include <vector>
#include <algorithm>
using namespace std;

/*
 The code will run faster with ios::sync_with_stdio(0).
 However, this should not be used in production code and interactive problems.
 In this particular problem, it is ok to apply ios::sync_with_stdio(0).

 Many of the top-ranked C++ solutions for time on leetcode apply this trick,
 so, for a fairer assessment of the time percentile of my code
 you could outcomment the lambda expression below for a faster run.
*/

/*
 const static auto speedup = [] {
    ios::sync_with_stdio(0);
    return nullptr;
}();
*/

class Solution {

    int maxLengthTwoAdjacentIncreasingSubarrays = 0;

public:
    int maxIncreasingSubarrays(const vector<int>& input) {
        int currentIncreasingCount = 1;
        int previousIncreasingCount = 0;

        for (size_t i = 1; i < input.size(); ++i) {
            updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

            if (input[i - 1] >= input[i]) {
                previousIncreasingCount = currentIncreasingCount;
                currentIncreasingCount = 1;
                continue;
            }
            ++currentIncreasingCount;
        }
        updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

        return maxLengthTwoAdjacentIncreasingSubarrays;
    }

private:
    int getLengthTwoAdjacentIncreasingSubarrays(int currentIncreasingCount, int previousIncreasingCount) const {
        return max(currentIncreasingCount / 2, min(currentIncreasingCount, previousIncreasingCount));
    }

    void updateMaxLengthTwoAdjacentIncreasingSubarrays(int currentIncreasingCount, int previousIncreasingCount) {
        maxLengthTwoAdjacentIncreasingSubarrays = max(maxLengthTwoAdjacentIncreasingSubarrays,
                getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount));
    }
};

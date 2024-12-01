
/**
 * @param {number[]} input
 * @return {number}
 */
var maxIncreasingSubarrays = function (input) {
    this.maxLengthTwoAdjacentIncreasingSubarrays = 0;
    let currentIncreasingCount = 1;
    let previousIncreasingCount = 0;

    for (let i = 1; i < input.length; ++i) {
        updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

        if (input[i - 1] >= input[i]) {
            previousIncreasingCount = currentIncreasingCount;
            currentIncreasingCount = 1;
            continue;
        }
        ++currentIncreasingCount;
    }
    updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

    return this.maxLengthTwoAdjacentIncreasingSubarrays;
};

/**
 * @param {number} currentIncreasingCount
 * @param {number} previousIncreasingCount 
 * @return {number}
 */
function getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount) {
    return Math.max(Math.floor(currentIncreasingCount / 2), Math.min(currentIncreasingCount, previousIncreasingCount));
}

/**
 * @param {number} currentIncreasingCount
 * @param {number} previousIncreasingCount 
 * @return {void}
 */
function updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount) {
    this.maxLengthTwoAdjacentIncreasingSubarrays = Math.max(this.maxLengthTwoAdjacentIncreasingSubarrays,
            getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount));
}


function maxIncreasingSubarrays(input: number[]): number {
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

function getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount: number, previousIncreasingCount: number): number {
    return Math.max(Math.floor(currentIncreasingCount / 2), Math.min(currentIncreasingCount, previousIncreasingCount));
}

function updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount: number, previousIncreasingCount: number): void {
    this.maxLengthTwoAdjacentIncreasingSubarrays = Math.max(this.maxLengthTwoAdjacentIncreasingSubarrays,
        getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount));
}

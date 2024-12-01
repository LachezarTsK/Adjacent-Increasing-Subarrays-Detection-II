
package main

import "fmt"

var maxLengthTwoAdjacentIncreasingSubarrays int

func maxIncreasingSubarrays(input []int) int {
    var currentIncreasingCount = 1
    var previousIncreasingCount = 0
    maxLengthTwoAdjacentIncreasingSubarrays = 0

    for i := 1; i < len(input); i++ {
        updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount)

        if input[i-1] >= input[i] {
            previousIncreasingCount = currentIncreasingCount
            currentIncreasingCount = 1
            continue
        }
        currentIncreasingCount++
    }
    updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount)

    return maxLengthTwoAdjacentIncreasingSubarrays
}

func getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount int, previousIncreasingCount int) int {
    return max(currentIncreasingCount/2, min(currentIncreasingCount, previousIncreasingCount))
}

func updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount int, previousIncreasingCount int) {
    maxLengthTwoAdjacentIncreasingSubarrays = max(maxLengthTwoAdjacentIncreasingSubarrays,
            getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount))
}

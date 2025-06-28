function topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap = new Map<number, number>();
    
    // Count the frequency of each number
    // we look at each number in the array and increment the count in the map
    // we use the get method to get the current count and add 1 to it
    // if the number is not in the map, we set it to 1
    // if the number is in the map, we increment the count by 1
    // we return the map
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    }

    // Return the top k frequent elements

    return Array.from(frequencyMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((entry) => entry[0]);
};

// Use forEach instead of for loop for better performance

function topKFrequentWithForEach(nums: number[], k: number): number[] {
    const frequencyMap = new Map<number, number>();
    nums.forEach((num) => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    })
    return Array.from(frequencyMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((entry) => entry[0]);
}
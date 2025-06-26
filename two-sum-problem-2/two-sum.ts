// brute force solution
function twoSumBruteForce(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++){
        for (let j = i +1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
    return [];
};

// optimized solution

// WE ARE NOT LOOKING FOR TWO NUMBERS THAT ADD UP TO THE TARGET, WE ARE LOOKING FOR A NUMBER AND ITS COMPLEMENT TO ADD UP TO THE TARGET
// THE COMPLEMENT USING ALGEBRA IS TARGET - NUM[I]

// WHAT IF WE COULD SEE THE NUMBER WE NEED BEFORE WE ITERATE THROUGH THE ARRAY? IN O(1) instead of O(n), MAKING IT FASTER

// A HASH MAP PROVIDES SEARCH TIME OF O(1)

// WE CAN USE A MAP TO STORE THE NUMBER AS KEY AND ITS INDEX AS VALUE const seen = new Map<number, number>(); 
// SO WE JUST NOT SEE IF IT IS IN THE MAP BUT WE CAN GET THE INDEX OF THE NUMBER IN THE MAP

// WE CAN'T JUST BUILD THE HASH MAP FIRST BECAUSE WE COULD HAVE DUPLICATE NUMBERS
// BUT WE CAN BUILD THE HASH MAP AS WE ITERATE THROUGH THE ARRAY


function twoSum(nums: number[], target: number): number[] {
    // We create a map for the seen numbers so we can check if the complement is in the map
    const seen = new Map<number, number>();

    // iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // we can have the number we need if we do the subtraction of the target and the current number
        const complement = target - nums[i];

        // we check if the complement is in the map
        // and if it is, we return the indices
        if (seen.has(complement)) {
            return [i, seen.get(complement)!];
        }

        // store the current number and its index if it is not the complement
        seen.set(nums[i], i);

    }

    // if no solution is found, return an empty array
    return [];
    
}


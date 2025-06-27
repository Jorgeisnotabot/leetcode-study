// We can sort the strings and then group them together
// We can use a map to store the sorted string as key and the array of strings as value
// We can then return the values of the map

// we receive an array of strings as parameter
function groupAnagrams(strs: string[]): string[][] {
    // let's use a hash map to store the sorted string as key and the array of strings as value
    const groupedAnagrams = new Map<string, string[]>();

    // let's iterate through the array of strings to group the anagrams
    for (const str of strs) {
        // create a sorted version of the string to use as reference and we are going to sort alphabetically
        // we are going to split the string into an array of characters first
        // then we are going to sort the array of characters
        // then we are going to join the array of characters back into a string
        const sortedStr = str.split('').sort().join('');

        // Group each array of strings by the sorted string
        // if the sorted string is not in the map, we create a new array of strings with the original string
        if (!groupedAnagrams.has(sortedStr)) {
            groupedAnagrams.set(sortedStr, [])
        }
        groupedAnagrams.get(sortedStr)!.push(str);
    };

    // return the values of the map as an array of arrays
    return Array.from(groupedAnagrams.values());
}


function conciseGroupAnagrams(strs: string[]): string[][] {
    const groupedAnagrams = new Map<string, string[]>();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        const groupedAnagram = groupedAnagrams.get(sortedStr) || [];
        groupedAnagram.push(str);
        groupedAnagrams.set(sortedStr, groupedAnagram);
    }

    return Array.from(groupedAnagrams.values());
}


// Using forEach instead of for loop
// For each is faster than for loop because it is a native method of the array object
// Native methods are faster than custom methods because they are optimized for the browser

function groupAnagramsForEach(strs: string[]): string[][] {
    const groups = new Map<string, string[]>();

    strs.forEach(str => {
        const sortedStr = str.split('').sort().join('');
        const group = groups.get(sortedStr) || [];
        group.push(str);
        groups.set(sortedStr, group);
    });

    return Array.from(groups.values());
}

## Group the anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 
### Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

### Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

### Example 2:

Input: strs = [""]

Output: [[""]]

### Example 3:

Input: strs = ["a"]

Output: [["a"]]

### Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.


## Analysis

* Anagrams have the same characters → need a way to identify "same characters"
* Sorting normalizes character order → anagrams get identical signatures
* Hash map groups strings by signature → O(1) lookup and grouping
* Map values give us the grouped anagrams


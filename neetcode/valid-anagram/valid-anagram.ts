class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sortedS = s.split('').sort().join('');
        const sortedT = t.split('').sort().join('');
        return (sortedS === sortedT);
    }
}
function isPalindrome(s: string): boolean {
    const sortedString = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    return sortedString === sortedString.split('').reverse().join('');
};
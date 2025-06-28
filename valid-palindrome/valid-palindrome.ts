function isPalindrome(s: string): boolean {
    const sortedString = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    return sortedString === sortedString.split('').reverse().join('');
};

// the regex pattern was missing the + sign so it can replace multiple consecutive non-alphanumeric characters at once
function isPalindromeTwo(s: string): boolean {
    const normalizedString = s.replace(/[^A-Za-z0-9]+/g,'').toLowerCase();
    return normalizedString === normalizedString.split('').reverse().join('');
}
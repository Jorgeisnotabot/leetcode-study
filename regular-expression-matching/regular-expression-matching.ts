function isMatch(s: string, p: string): boolean {
    const memo = new Map<string, boolean>();

    function dp(i: number, j: number): boolean{
        const key = `${i},${j}`;
        if (memo.has(key)) return memo.get(key)!;
        
        let result: boolean;
        
        // Base case: if pattern is exhausted
        if (j === p.length) {
            result = i === s.length; // True only if string is also exhausted
        } else {
            // Check if current characters match (if string not exhausted)
            const firstMatch = i < s.length && (p[j] === s[i] || p[j] === '.');
            
            // Look ahead: is next character a '*'?
            if (j + 1 < p.length && p[j + 1] === '*') {
                // Two choices with '*':
                // 1. Use 0 times: skip char* pattern
                // 2. Use 1+ times: match current char and keep char* pattern
                result = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
            } else {
                // No '*', must match current character and advance both pointers
                result = firstMatch && dp(i + 1, j + 1);
            }
        }
        
        memo.set(key, result);
        return result;
    }

    return dp(0, 0);
};
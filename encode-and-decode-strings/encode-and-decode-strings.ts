class Solution {
    encode(strs: string[]): string {
        let encoded: string = "";
        for (const str of strs) {
            encoded += str.length.toString() + "#" + str;
        }
        return encoded;
    }

    decode(str: string): string[] {
        const result: string[] = []
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            const length = parseInt(str.substring(i, j));
            const start = j + 1;
            const end = start + length;
            result.push(str.substring(start, end));

            i = end;
        }

        return result;
    }
}
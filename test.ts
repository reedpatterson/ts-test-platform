let x = function lengthOfLongestSubstring(s: string): number {
    let obj = new Map();
    let num = 0;

    for (let i=0; i<s.length; i++) {
        let j = i;
        let count = 0
        while(!obj.has(s[j]) && j < s.length) {
            obj.set(s[j], 1);
            j++;
            count++;
        }
        
        if(count > num) {
            num = count;
        }
        obj.clear()
    }
    
    return num;
};

console.log(x ('abcabcbb'))


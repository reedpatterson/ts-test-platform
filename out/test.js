var x = function lengthOfLongestSubstring(s) {
    var obj = new Map();
    var num = 0;
    for (var i = 0; i < s.length; i++) {
        var j = i;
        var count = 0;
        while (!obj.has(s[j]) && j < s.length) {
            obj.set(s[j], 1);
            j++;
            count++;
        }
        if (count > num) {
            num = count;
        }
        obj.clear();
    }
    return num;
};
console.log(x('abcabcbb'));
//# sourceMappingURL=test.js.map
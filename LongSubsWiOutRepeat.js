var lengthOfLongestSubstring = function(s) {
    let maxlength = 0;
    let trail = 0;
    let subset = new Set();
    for(let i=0;i<s.length;i++) {
        while(subset.has(s[i])) {
            subset.delete(s[trail]);
            trail++;
        }
        subset.add(s[i]);
        maxlength = Math.max(maxlength,i-trail+1)
    }
    return maxlength;
}

console.log(lengthOfLongestSubstring("anviaj"))
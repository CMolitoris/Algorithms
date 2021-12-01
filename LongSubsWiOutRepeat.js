var lengthOfLongestSubstring = function(s) {
    let countSet = new Set();
    let stringSet = new Set();

    for(let i=0;i<s.length;i++) {
        
        if(stringSet.has(s[i])) {
            let size = stringSet.size;
            countSet.add(stringSet.size);
            stringSet.clear();
           
            count = 0;
            i-=size - 1
        } 
        stringSet.add(s[i])
    }
    countSet.add(stringSet.size);
    return Math.max(...countSet)
}

console.log(lengthOfLongestSubstring("anviaj"))
let result = (nums1,nums2) => {
    let combined = nums1.concat(nums2);
    combined.sort((a,b) => a - b);
    let even = combined.length%2===0
    if(even) {
        // let max = Math.max(nums1[nums1.length-1],nums2[nums2.length-1])
        // return max/2
        let difference = (combined[combined.length/2]-combined[combined.length/2-1])/2
        let EndOfNums = combined[combined.length/2-1]
        return EndOfNums + difference
    } else {
        return combined[Math.floor(combined.length/2)]
    }

}
console.log(result([0,0,0,0,0],[-1,0,0,0,0,0,1]))
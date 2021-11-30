var twoSum = function(nums, target) {
    let difference = 0;
    const numberMap = new Map()
    
    for(let i=0;i<nums.length;i++){
        difference = target - nums[i]; 
        if(numberMap.has(difference)) {
            return [numberMap.get(difference),i]
        }
        numberMap.set(nums[i],i)
    }     
};

twoSum([0,3,-3,4,-1],-1)
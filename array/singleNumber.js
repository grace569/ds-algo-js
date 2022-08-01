var singleNumber = function(nums) {
    //o(n) time complexity and O(1) space complexity
    return nums.reduce((result, current) => {
        result = result ^ current;
        return result
    })
};

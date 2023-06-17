arr = [0, 1, 2, 2, 1, 0];
N = arr.length;
sort012(arr, N)
// console.log(arr)

function sort012(nums, N)
{
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap nums[low] and nums[mid]
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // Move mid pointer
            mid++;
        } else {
            // Swap nums[mid] and nums[high]
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }

        console.log(nums)
    }
    
}

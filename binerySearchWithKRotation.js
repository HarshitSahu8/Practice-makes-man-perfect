function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Found the target
    }

    // Check if the left half is sorted
    if (nums[left] <= nums[mid]) {
      // Target is in the left sorted half
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Otherwise, the right half is sorted
    else {
      // Target is in the right sorted half
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1; // Target not found
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

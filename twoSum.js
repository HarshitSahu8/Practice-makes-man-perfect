function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff > 0 ? diff : diff * -1)) {
      return [map.get(diff), i];
    } else {
      map.set(nums[i], i);
    }
  }
}

// let nums = [2, 7, 11, 15],
//   target = 9;

// let nums = [3, 2, 4],
//   target = 6;

let nums = [3, 3],
  target = 6;
console.log(twoSum(nums, target));

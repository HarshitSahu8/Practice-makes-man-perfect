// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let low = 0;
  let high = m;

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];

    const minX = partitionX === m ? Infinity : nums1[partitionX];
    const minY = partitionY === n ? Infinity : nums2[partitionY];
    if (maxX <= minY && maxY <= minX) {
      // We have partitioned correctly
      if ((m + n) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      // Too far on the right side for partitionX, go left
      high = partitionX - 1;
    } else {
      // Too far on the left side for partitionX, go right
      low = partitionX + 1;
    }
  }
}

let nums1 = [1, 2],
  nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2));

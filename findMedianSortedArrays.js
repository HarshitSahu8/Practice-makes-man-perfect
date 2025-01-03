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

    const { maxX, maxY, minX, minY } = getPartitionValues(
      nums1,
      nums2,
      partitionX,
      partitionY
    );

    if (maxX <= minY && maxY <= minX) {
      return calculateMedian(m, n, maxX, maxY, minX, minY);
    } else if (maxX > minY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
}

function getPartitionValues(nums1, nums2, partitionX, partitionY) {
  const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
  const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
  const minX = partitionX === nums1.length ? Infinity : nums1[partitionX];
  const minY = partitionY === nums2.length ? Infinity : nums2[partitionY];
  return { maxX, maxY, minX, minY };
}

function calculateMedian(m, n, maxX, maxY, minX, minY) {
  if ((m + n) % 2 === 0) {
    return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
  } else {
    return Math.max(maxX, maxY);
  }
}

let nums1 = [1, 2],
  nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2));

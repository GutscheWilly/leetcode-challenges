function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merged: number[] = [];

  while (nums1.length !== 0 && nums2.length !== 0) {
    if (nums1[0] < nums2[0]) {
      merged.push(nums1.shift() as number);
      continue;
    }

    merged.push(nums2.shift() as number);
  }

  return getMedian([...merged, ...nums1, ...nums2]);
}

function getMedian(nums: number[]): number {
  const length = nums.length;

  if (length % 2 === 1) {
    return nums[(length - 1) / 2];
  }

  const mediumUpperIndex = length / 2;

  return (nums[mediumUpperIndex - 1] + nums[mediumUpperIndex]) / 2;
}

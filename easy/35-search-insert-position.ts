function searchInsert(nums: number[], target: number): number {
  let sourceIndex = 0;
  let endIndex = nums.length - 1;

  while (sourceIndex <= endIndex) {
    const middleIndex = Math.floor((sourceIndex + endIndex) / 2);
    const middleValue = nums[middleIndex];

    if (middleValue === target) {
      return middleIndex;
    }

    if (middleValue < target) {
      sourceIndex = middleIndex + 1;
      continue;
    }

    endIndex = middleIndex - 1;
  }

  return sourceIndex;
}

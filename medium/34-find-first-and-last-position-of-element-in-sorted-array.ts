function searchRange(nums: number[], target: number): number[] {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const medium = Math.floor((low + high) / 2);
    const mediumNum = nums[medium];

    if (mediumNum === target) {
      return findStartEndPosition(nums, medium, target);
    }

    if (mediumNum < target) {
      low = medium + 1;
      continue;
    }

    high = medium - 1;
  }

  return [-1, -1];
}

function findStartEndPosition(nums: number[], pivot: number, target: number): number[] {
  let start = pivot;
  let end = pivot;

  for (let i = 1; nums[pivot - i] === target; i++) {
    start--;
  }

  for (let i = 1; nums[pivot + i] === target; i++) {
    end++;
  }

  return [start, end];
}

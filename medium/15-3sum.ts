function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const triplets: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    const iValue = nums[i];

    if (i > 0 && iValue === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const jValue = nums[j];
      const kValue = nums[k];

      const sum = iValue + jValue + kValue;

      if (sum < 0) {
        j++;
        continue;
      }

      if (sum > 0) {
        k--;
        continue;
      }

      triplets.push([iValue, jValue, kValue]);

      while (j < k && jValue === nums[j + 1]) {
        j++;
      }

      while (j < k && kValue === nums[k - 1]) {
        k--;
      }

      j++;
      k--;
    }
  }

  return triplets;
}

function removeElement(nums: number[], val: number): number {
  let indexToReplace = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];

    if (currentValue === val) {
      continue;
    }

    nums[indexToReplace] = currentValue;
    indexToReplace++;
  }

  return indexToReplace;
}

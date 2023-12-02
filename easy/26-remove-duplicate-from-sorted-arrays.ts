function removeDuplicates(nums: number[]): number {
  const numbersSet = new Set<number>();

  nums.forEach(number => {
    if (numbersSet.has(number)) {
      return;
    }

    numbersSet.add(number);
    nums[numbersSet.size - 1] = number;
  });

  return numbersSet.size;
}

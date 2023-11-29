function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (isTarget(nums[i], nums[j], target)) {
              return [i, j]
          }
      }
  }
  return []
};

function isTarget(number1: number, number2: number, target: number): boolean {
  return number1 + number2 === target
}

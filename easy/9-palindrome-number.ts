function isPalindrome(x: number): boolean {
  if (x < 0) {
      return false;
  }

  const numberToString = x.toString();
  const length = numberToString.length;

  for (let i = 0; i < length / 2; i++) {
      if (numberToString[i] !== numberToString[length - 1 - i]) {
          return false;
      }
  }

  return true;
};

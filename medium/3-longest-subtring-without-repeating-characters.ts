function lengthOfLongestSubstring(s: string): number {
  let longestLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (longestLength > s.length - i) {
      return longestLength;
    }

    let substring = s.charAt(i);

    for (let j = i + 1; j < s.length; j++) {
      const character = s.charAt(j);

      if (substring.includes(character)) {
        break;
      }

      substring += character;
    }

    if (substring.length > longestLength) {
      longestLength = substring.length;
    }
  }

  return longestLength;
}

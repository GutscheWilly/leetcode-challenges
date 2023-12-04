function strStr(haystack: string, needle: string): number {
  const haystackLength = haystack.length;
  const needleLength = needle.length;

  if (needleLength > haystackLength) {
    return -1;
  }

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    for (let j = 0; j < needleLength; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }

      if (j === needleLength - 1) {
        return i;
      }
    }
  }

  return -1;
}

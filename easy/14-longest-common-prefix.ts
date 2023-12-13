function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = '';

  check_characters:
  for (let i = 0; i < strs[0].length; i++) {
    const character = strs[0].charAt(i);

    for (let j = 0; j < strs.length; j++) {
      if (character !== strs[j].charAt(i)) {
        break check_characters;
      }

      if (j === strs.length - 1) {
        commonPrefix += character;
      }
    }
  }

  return commonPrefix;
}

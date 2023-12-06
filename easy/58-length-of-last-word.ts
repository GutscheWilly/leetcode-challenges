function lengthOfLastWord(s: string): number {
  const initialValue = -1;
  const space = ' ';

  let source = initialValue;
  let end = initialValue;

  for (let i = s.length - 1; i >= 0; i--) {
    const character = s[i];

    if (character !== space && end === initialValue) {
      source = i;
      end = i;
      continue;
    }

    if (character !== space) {
      source = i;
      continue;
    }

    if (character === space && source !== initialValue && end !== initialValue) {
      break;
    }
  }

  return end - source + 1;
}

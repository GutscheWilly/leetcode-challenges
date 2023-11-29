function romanToInt(s: string): number {
  let value = 0;

  for (let i = 0; i < s.length; i++) {
      const currentLetter = s.charAt(i);

      if (checkNextLetter(s, i)) {
          const nextLetter = s.charAt(i+1);
          value += romanNumerals[nextLetter] - romanNumerals[currentLetter];
          i++;
      } else {
          value += romanNumerals[currentLetter];
      }
  }

  return value;
};

const romanNumerals = {
  I:             1,
  V:             5,
  X:             10,
  L:             50,
  C:             100,
  D:             500,
  M:             1000,
};

const checkNextLetter = (s: string, currentIndex: number): boolean => {
  if (currentIndex >= s.length - 1) {
      return false;
  }

  const currentLetter = s.charAt(currentIndex);
  const nextLetter = s.charAt(currentIndex + 1);

  if (currentLetter === 'I') {
      return ['V', 'X'].includes(nextLetter);
  }

  if (currentLetter === 'X') {
      return ['L', 'C'].includes(nextLetter);
  }

  if (currentLetter === 'C') {
      return ['D', 'M'].includes(nextLetter);
  }

  return false;
};

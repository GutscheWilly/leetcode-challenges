function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  const words: string[] = [];
  const control: { index: number, increase: boolean } = {
    index: 0,
    increase: true
  };

  for (let i = 0; i < numRows; i++) {
    words.push('');
  }

  for (let i = 0; i < s.length; i++) {
    const character = s[i];

    words[control.index] += character;

    if (control.increase) {
      control.index++;
    } else {
      control.index--;
    }

    if (control.index === 0 || control.index === numRows - 1) {
      control.increase = !control.increase;
    }
  }

  return words.reduce(
    (accumulator, word) => accumulator + word,
    ''
  );
}

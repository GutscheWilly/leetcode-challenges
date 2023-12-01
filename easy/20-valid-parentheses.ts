function isValid(s: string): boolean {
  const stack: string[] = [];

  const openParentheses = ['(', '[', '{'];

  const closeAndOpenParentheses: {[key: string]: string} = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let i = 0; i < s.length; i++) {
    const currentParentheses = s.charAt(i);

    if (openParentheses.includes(currentParentheses)) {
      stack.push(currentParentheses);
      continue;
    }

    const headOfStack = stack.pop();
    const parenthesesToMatch = closeAndOpenParentheses[currentParentheses];

    if (headOfStack !== parenthesesToMatch) {
      return false;
    }
  }

  return stack.length === 0;
}

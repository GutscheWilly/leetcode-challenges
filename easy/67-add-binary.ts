/* eslint-disable indent */
function addBinary(a: string, b: string): string {
  const binaryA: string[] = [...a];
  const binaryB: string[] = [...b];
  const binarySum: string[] = [];

  let carry = '0';

  while (binaryA.length || binaryB.length) {
    const bitA = checkBit(binaryA.pop());
    const bitB = checkBit(binaryB.pop());

    const sum = (+bitA) + (+bitB) + (+carry);

    switch (sum) {
      case 0:
        binarySum.unshift('0');
        carry = '0';
        break;
      case 1:
        binarySum.unshift('1');
        carry = '0';
        break;
      case 2:
        binarySum.unshift('0');
        carry = '1';
        break;
      default:
        binarySum.unshift('1');
        carry = '1';
        break;
    }
  }

  if (carry === '1') {
    binarySum.unshift(carry);
  }

  return binarySum.toString().replace(/,/g, '');
}

function checkBit(bit: string | undefined): string {
  return bit ? bit : '0';
}

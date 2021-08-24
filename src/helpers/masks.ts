const reverseString = (value: string) => value.split('').reverse().join('');

export const moneyMask = (value: string) => {
  const valor = reverseString(value.replace(/[^\d]+/gi, ''));
  console.log({ valor });
  const mascara = reverseString('###.###.###.###,##');
  console.log({ mascara });
  let resultado = '';

  for (let x = 0, y = 0; x < mascara.length && y < valor.length;) {
    if (mascara.charAt(x) !== '#') {
      resultado += mascara.charAt(x);
      x += 1;
    } else {
      resultado += valor.charAt(y);
      y += 1;
      x += 1;
    }
  }
  return reverseString(resultado);
};
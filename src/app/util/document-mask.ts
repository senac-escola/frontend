export const documentMask = (document: string) => {
  if (document.length == 11) {
    const cpfPart1 = document.slice(0, 3);
    const cpfPart2 = document.slice(3, 6);
    const cpfPart3 = document.slice(6, 9);
    const cpfPart4 = document.slice(9);

    return `${cpfPart1}.${cpfPart2}.${cpfPart3}-${cpfPart4}`;
  } else if (document.length == 14) {
    const cnpjPart1 = document.slice(0, 2);
    const cnpjPart2 = document.slice(2, 5);
    const cnpjPart3 = document.slice(5, 8);
    const cnpjPart4 = document.slice(8, 12);
    const cnpjPart5 = document.slice(12);

    return `${cnpjPart1}.${cnpjPart2}.${cnpjPart3}/${cnpjPart4}-${cnpjPart5}`;
  } else {
    return document;
  }
};

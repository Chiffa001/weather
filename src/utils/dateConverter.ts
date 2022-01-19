export const getConvertedDate = (milliseconds: number): string => {
  let ms = milliseconds.toString();
  const quantityOfNums = milliseconds.toString().length;
  if (quantityOfNums < 13) {
    for (let i = 0; i < 13 - quantityOfNums; i += 1) {
      ms += '0';
    }
  }
  const date = new Date(+ms);
  return date.toLocaleString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

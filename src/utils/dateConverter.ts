export const getConvertedDate = (milliseconds: number): string => {
  let ms = milliseconds.toString();
  const quantityOfNums = milliseconds.toString().length;
  const lenOfCurrentTime = Date.now().toString().length;
  if (quantityOfNums < lenOfCurrentTime) {
    for (let i = 0; i < lenOfCurrentTime - quantityOfNums; i += 1) {
      ms += '0';
    }
  }
  const date = new Date(+ms);
  return date.toLocaleString('en', {
    month: 'long',
    day: 'numeric',
  });
};

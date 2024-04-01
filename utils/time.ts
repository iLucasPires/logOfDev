export const dateFormatted = (date: string) => new Date(date).toLocaleDateString();

export const calculateTimeToRead = (text: string) => {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
};
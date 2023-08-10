export const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(2);
  return `${month}/${year}`;
};

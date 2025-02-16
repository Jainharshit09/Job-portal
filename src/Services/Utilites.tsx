const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const option: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
  return date.toLocaleString('en-US', option); // Correct locale format
};

export default formatDate;
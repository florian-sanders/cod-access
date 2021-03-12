export const returnFileSize = (number) => {
  if (number < 1024) {
    return number + ' octets';
  }
  if (number >= 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + ' Ko';
  }
  return (number/1048576).toFixed(1) + ' Mo';
};

export const processData = (str: string) => {
  return str
    .split('')
    .map(chr => (chr === chr.toUpperCase() ? chr.toLowerCase() : chr.toUpperCase()))
    .reverse()
    .join('')
}

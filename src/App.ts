import fs from 'fs'

const getAns = (str: string) => {
  return str
    .split('')
    .map((chr: string) => {
      return chr === chr.toUpperCase() ? chr.toLowerCase() : chr.toUpperCase()
    })
    .reverse()
    .join('')
}

const main = () => {
  getAns('Hello World')
  // eslint-disable-next-line no-console
  console.log(getAns('Hello World'))
}

main()

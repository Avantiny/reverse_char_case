var fs = require('fs')

const ALPHANUMERIC = new RegExp('^[a-zA-Z0-9]*$')

const validateArgv = (argv: string[]) => {
  if (argv.length > 3) throw new Error('Too many parameters given, give only one parameter!')
  if (!ALPHANUMERIC.test(argv[2])) throw new Error('Non-alphanumeric arguments given!')
}

const processData = (str: string) => {
  return str
    .split('')
    .map(chr => (chr === chr.toUpperCase() ? chr.toLowerCase() : chr.toUpperCase()))
    .reverse()
    .join('')
}

const constructJSON = () => {}

const main = () => {
  const time = process.hrtime()
  const argv = process.argv
  validateArgv(argv)
  const processedData = processData(argv[2])
  try {
    fs.writeFileSync('processed.json', processedData)
  } catch (e) {
    console.error(e)
  }
}

main()

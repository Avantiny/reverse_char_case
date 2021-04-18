var fs = require('fs')

const ALPHANUMERIC = new RegExp('^[a-zA-Z0-9]*$')
const NS_PER_SEC = 1e9

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

const constructJSON = (input: string, output: string, duration: number) => {
  return `{
    "input": "${input}",
    "output": "${output}",
    "duration": ${duration}
  }`
}

const main = () => {
  const time = process.hrtime()
  const argv = process.argv
  validateArgv(argv)
  const processedData = processData(argv[2])
  const diffTuple = process.hrtime(time)
  const diff = diffTuple[0] * NS_PER_SEC + diffTuple[1]
  const finalJSON = constructJSON(argv[2], processedData, diff)
  try {
    fs.writeFileSync('processed.json', finalJSON)
  } catch (e) {
    console.error(e)
  }
}

main()

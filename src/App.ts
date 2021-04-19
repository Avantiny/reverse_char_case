var fs = require('fs')

const ALPHANUMERIC = new RegExp('^[a-zA-Z0-9]*$')
const MS_PER_SEC = 1e3
const NS_PER_MS = 1e-6

const validateArgv = (argv: string[]) => {
  if (argv.length > 3) throw new Error('Too many parameters given, give only one parameter!')
  if (!ALPHANUMERIC.test(argv[2])) throw new Error('Non-alphanumeric arguments given!')
  if (!argv[2]) throw new Error('No parameter given!')
}

const processData = (str: string) => {
  return str
    .split('')
    .map(chr => (chr === chr.toUpperCase() ? chr.toLowerCase() : chr.toUpperCase()))
    .reverse()
    .join('')
}

const nanosecToMilisec = (time: [number, number]) => {
  return time[0] * MS_PER_SEC + time[1] * NS_PER_MS
}
const main = () => {
  const timeStart = process.hrtime()
  const argv = process.argv
  try {
    validateArgv(argv)
  } catch (err) {
    console.error(err)
    return
  }
  const input = argv[2]
  const output = processData(input)
  const duration = process.hrtime(timeStart)
  const durationMS = nanosecToMilisec(duration)
  try {
    fs.writeFileSync('processed.json', JSON.stringify({ input, output, durationMS }, null, 2))
  } catch (e) {
    console.error(e)
  }
}

//main()

export default { processData, validateArgv, nanosecToMilisec }

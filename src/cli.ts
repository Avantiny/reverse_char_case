import { processData } from './processData'
import { question } from './readlinecli'
import fs from 'fs'

const ALPHANUMERIC = new RegExp('^[a-zA-Z0-9]*$')
const MS_PER_SEC = 1e3
const NS_PER_MS = 1e-6

const validateArgv = (input: string) => {
  if (!input) throw new Error('No parameter given!')
  if (!ALPHANUMERIC.test(input)) throw new Error('Non-alphanumeric arguments given!')
}

const nanosecToMilisec = (time: [number, number]) => {
  return time[0] * MS_PER_SEC + time[1] * NS_PER_MS
}

const main = async () => {
  var input = await question('input: ')
  try {
    validateArgv(input)
  } catch (err) {
    console.error(err.message)
    return
  }
  const timeStart = process.hrtime()
  const output = processData(input)
  const duration = process.hrtime(timeStart)
  console.info(output)
  const durationMS = nanosecToMilisec(duration)
  try {
    fs.writeFileSync('processed.json', JSON.stringify({ input, output, durationMS }, null, 2))
  } catch (e) {
    console.error(e)
  }
}

export default { validateArgv, nanosecToMilisec, main, ALPHANUMERIC }

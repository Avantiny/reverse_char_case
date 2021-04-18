var fs = require('fs')

const checkInput = (input: any) => {
  if (typeof input === 'string') {
    return getAns(input)
  } else {
    throw 'Parameter is not a number!'
  }
}

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
  const out = checkInput('false')
  try {
    fs.writeFileSync('Output.json', out)
  } catch (e) {
    console.error(e)
  }
  console.log(out)
}

main()

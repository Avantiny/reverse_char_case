import readline from 'readline'

// --------------------------------------
// Inspiration:
// https://stackoverflow.com/a/53981240
// --------------------------------------

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

export const question = (q: string): Promise<string> => {
  let response: string

  rl.setPrompt(q)
  rl.prompt()

  return new Promise((resolve, reject) => {
    rl.on('line', userInput => {
      response = userInput
      rl.close()
    })

    rl.on('close', () => {
      resolve(response)
    })
  })
}

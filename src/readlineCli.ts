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
  // @ts-expect-error
  let response

  rl.setPrompt(q)
  rl.prompt()

  return new Promise((resolve, reject) => {
    rl.on('line', userInput => {
      response = userInput
      rl.close()
    })

    rl.on('close', () => {
      // @ts-expect-error
      resolve(response)
    })
  })
}

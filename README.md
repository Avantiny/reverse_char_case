Create a TypeScript package that will be running on Node.js.

The package should do a simple input-output operation. As an input, it should take a string containing only alphanumeric characters. As an output, it should display the string in reverse and each letter should have the opposite case (upper to lower and vice versa). It should also save the output in JSON format to a file “processed.json” (overriding if the file exists) where input, output, and the duration of the execution will be present.

The package should have the following scripts defined:

“build” compiles the code
“run” executes the logic. Asking and processing the input, displaying and saving the output
“test” executes unit tests for the logic. Should use Mocha test framework, ideally outputs test results in the console and also generate HTML report using e.g. mochawesome reporter
Example input: “abCD12”

Example output: “21dcBA”

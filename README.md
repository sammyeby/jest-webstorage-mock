## Jest-Webstorage-mock

in package.json add below for example

`"jest": {
"setupFiles": [
"<rootDir>/__jest__/jest-webstorage-mock",`

if using create react app, then just import the script in setupTests.ts

`import "@sammyeby/jest-webstorage-mock"`

then in your tests suites for example:
`jest.spyOn(localStorage, 'setItem')`
`jest.spyOn(sessionStorage, 'setItem')`

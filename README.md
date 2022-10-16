## Jest-Webstorage-mock

if using create react app, just import the script in setupTests.ts

`import "@sammyeby/jest-webstorage-mock"`

then in your tests suites for example:
`jest.spyOn(localStorage, 'setItem')`
`jest.spyOn(sessionStorage, 'setItem')`

Or if you have your own test setup file or created your own mock file for example: `myMock.ts`,
you can just import it in your `myMock.ts` file

`//__jest__/myMock.ts`

---
`import "@sammyeby/jest-webstorage-mock"`

_`//...other mocks here...`_

and then in package.json add below

`"jest": {
"setupFiles": [
"<rootDir>/__jest__/myMock.ts"],`

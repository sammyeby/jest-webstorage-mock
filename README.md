## Jest-Webstorage-mock

in package.json add below

`"jest": {
"setupFiles": [
"<rootDir>/__jest__/browserMocks.js",`

if using create react app, then just import the script in setupTests.ts

`import "@sammyeby/jest-webstorage-mock"`
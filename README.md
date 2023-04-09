# Discovery CMS Connector
[![npm version](https://badge.fury.io/js/@discoverycms%2Fconnector.svg?service=github)](https://badge.fury.io/js/@discoverycms%2Fconnector)

This is the repository of the JS Connector for the Discovery CMS.
The repository contains two demo apps, one based on NextJS and the other one on ReactJS.

## Installation

Install the npm dependencies by running `npm i` in the root folder of the monorepo.
Since the demo applications use the local version of the connector, instead of its npm-registry one, you must then run 
`npm run build:connector` to build the package in the `lib` directory.

For NextJS:
- copy `demo-nextjs\.env.example` to `demo-nextjs\.env` and configure according to your environment.

## Starting the NextJS demo
Open `demo-nextjs/pages/_app.js` and configure `setupDiscoveryCms()` options to pass the correct
`apiRoot` and `apiToken`, then:

`npm run demo:nextjs`

## Starting the React demo:
Open `demo-react/src/App.js` and configure `setupDiscoveryCms()` options to pass the correct
`apiRoot` and `apiToken`, then:

`npm run demo:react`
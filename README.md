# Discovery CMS Connector
[![npm version](https://badge.fury.io/js/@discoverycms%2Fconnector.svg?service=github)](https://badge.fury.io/js/@discoverycms%2Fconnector)

This is the repository of the JS Connector for the Discovery CMS.
The repository contains two demo apps, one based on NextJS and the other one on ReactJS.

## Installation

Install the npm dependencies by running `npm i` in the root folder of the monorepo.
Since the demo applications use the local version of the connector, instead of its npm-registry one, you must then run 
`npm run build:connector` to build the package in the `lib` directory.

## Starting the NextJS demo
Copy `.env.example` to `.env` and configure the required parameters. Then run `npm run demo:nextjs`.

## Starting the React demo:
Copy `.env.example` to `.env` and configure the required parameters. Then run `npm run demo:react`
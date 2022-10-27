/*
 * @title Simple Get Latest Block Number
 * @dev Uses Alchemy to get the latest block number on ETH Mainnet. Practice.
 * @resource https://docs.alchemy.com/docs/how-to-read-data-from-the-blockchain
 */

// Use DotEnv to fetch API key from a .env file
require("dotenv").config();
// console.log(process.env);

// import alchemy sdk
const { Network, Alchemy } = require("alchemy-sdk");

// settings: uses dotenv to fetch API Key.
const settings = {
  apiKey: process.env.API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

/* This is the main function that actually calls the Alchemy SDK
 * with the API key specified in .env to retrieve the latest block number.
 */
async function main() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log("Latest block number: ", latestBlock);
}

main();

const ThirdWebPlugin = require('@thirdweb-dev/truffle-plugin');

module.exports = {
    solidity: {
        version: "0.8.17",solidity: {
          version: "0.8.9",
          defaultNetwork: 'georli',
          networks: {
            hardhat: {},
            georli: {
              url: 'https://rpc.ankr.com/eth_georli',
              accounts: [`0x${process.env.PRIVATE_KEY}`]
            }
          },
    
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
};

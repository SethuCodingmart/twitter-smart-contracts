require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://omniscient-broken-patron.matic-testnet.discover.quiknode.pro/956160425c860b2b9c9c256fa54d64061affeb66/",
      accounts: [
        "9844f30dd5e5b477c0af1fba620e12a493bff3562995f387aa516a06968b1457",
      ],
    },
  },
};

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/TY_MV4Qw4UmdqhyFbzUGvUuWTaotYcxe",
      accounts: [
        "e44ac47415234dd3eb67ad170193c5ae88c9e9dc86c254a022900541be4945e3",
      ], // replace with your private key
    },
  },
};

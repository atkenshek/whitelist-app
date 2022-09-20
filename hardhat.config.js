require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};


// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config({ path: "execute.env" });

// const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
// const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     goerli: {
//       url:`https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY_URL}`,
//       accounts: [GOERLI_PRIVATE_KEY],
//     },
//   },
// };
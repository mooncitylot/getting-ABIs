const axios = require("axios");
const ethers = require("ethers");

//TODO: Figure out how to get the address for FreshDAO verified... if possible....
const address = "0x0000000000000000000000000000000000001010";

const apiKey = "X8BUYYT47EW9NK48KG6V7AHU8SG9SQPFB3";

const url = `https://api.polygonscan.com/api
?module=contract
&action=getabi
&address=${address}
&apikey=${apiKey}`;

const getabi = async () => {
  const res = await axios.get(url);
  try {
    const abi = JSON.parse(res.data.result);
    console.log(abi);
  } catch (error) {
    console.error("Error parsing JSON:", res.data.result);
  }
};

getabi();

// run `node get-abi.js` in the terminal

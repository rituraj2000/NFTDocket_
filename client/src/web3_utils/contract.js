import Web3 from "web3";
import { abi } from "./abi";

const web3 = new Web3(window.ethereum);

export const contract = new web3.eth.Contract(
  abi,
  "0x645A35Ee6ac825CcFE235e7b6c121ABF8920E4b9"
);

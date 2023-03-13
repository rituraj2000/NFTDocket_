import Web3 from "web3";
import { abi } from "./abi";

const web3 = new Web3(window.ethereum);

export const contract = new web3.eth.Contract(
  abi,
  "0x0501aB63941C944b5ff1DE7711190527E584fE35"
);

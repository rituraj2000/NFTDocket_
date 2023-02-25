import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../../redux/userSlice";
import { abi } from "../../abi";
import { useNavigate } from "react-router-dom";

const ConnectToWallet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducer);

  //Set the User Evrytime the user reloads
  // window.ethereum &&
  //   window.ethereum.on("accountsChanged", async (account) => {
  //     const web3 = new Web3(window.ethereum);
  //     const contract = new web3.eth.Contract(
  //       abi,
  //       "0xc0390304E63268998a8E60529cCc49818b012e0e"
  //     );

  //     const userId = window.ethereum
  //       ? await contract.methods.sellerAddressToSellerId(account).call()
  //       : "";
  //     dispatch(SetUser(userId));
  //   });

  const connectToWallet = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    dispatch(SetUser(accounts[0]));
    localStorage.setItem("userAddress", accounts[0]);
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("userAddress")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-md shadow-xl"
        onClick={connectToWallet}
      >
        + Connect To Wallet
      </button>
    </div>
  );
};

export default ConnectToWallet;

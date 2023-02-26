import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../../redux/userSlice";
import { abi } from "../../abi";
import { useNavigate } from "react-router-dom";
import hand from "../../resources/hand.png";

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
    <div className="flex flex-col h-screen">
      <div className=" w-full flex px-10 h-1/5 justify-end">
        <button
          className="bg-gradient-to-r from-indigo-500 to-blue-800 hover:bg-blue-700 text-white font-medium py-2 px-14 rounded-2xl shadow-2xl my-8  text-base"
          onClick={connectToWallet}
        >
          +ConnectToWallet
        </button>
      </div>
      <div
        className="flex justify-center bg-cover h-4/5"
        style={{
          backgroundImage: "url('https://www.linkpicture.com/q/bg_51.png')",
        }}
      >
        {/* register Text and REGISTER BUTTONS */}
        <div className="w-3/6 h-full flex flex-col justify-center pl-20">
          <div className="text-left">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Safely store and manage your NFT warranty information
            </h1>
            <p className="text-gray-700">
              Built using the latest MERN stack and Truffle framework, our app
              integrates with Ethereum blockchain to provide a secure and
              reliable platform. With an easy-to-use interface, NFT owners can
              confidently protect their assets.
            </p>
            <div className="flex">
              <button
                className="bg-gradient-to-r from-indigo-500 to-blue-800 hover:bg-blue-700 text-white font-medium py-4 px-14 rounded-2xl shadow-2xl my-8  text-base"
                onClick={() => {}}
              >
                Register as Seller
              </button>
              <button
                className="bg-gradient-to-r from-red-600 to-yellow-600 hover:bg-blue-700 text-white font-medium py-4 px-14  mx-10 rounded-2xl shadow-2xl my-8  text-base"
                onClick={() => {}}
              >
                Customer
              </button>
            </div>
          </div>
        </div>

        {/* HAND HOLDING A CARD NFT IMAGE */}
        <div className="relative w-3/6 h-full ">
          <div className="absolute bottom-0 right-0 h-5/6 w-5/6">
            <img
              src={hand}
              className="absolute bottom-0 right-0 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectToWallet;

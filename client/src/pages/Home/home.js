import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Web3 from "web3";
import { abi } from "../../abi";
import { SetUser } from "../../redux/userSlice";
import { contract } from "../../web3_utils/contract";
import { getSellerNfts } from "../../apiCalls/Seller/sellerApiCall";

function SellerDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducer);
  const [nfts, setNfts] = useState([]);

  window.ethereum &&
    window.ethereum.on("accountsChanged", async (account) => {
      if (account.length === 0) {
        navigate("/connectWallet");
        localStorage.removeItem("userAddress");
        dispatch(SetUser(null));
      }
    });

  const getAccount = async () => {
    dispatch(SetUser(localStorage.getItem("userAddress")));
  };

  // Create New NFT
  const createNFT = () => {
    navigate("/create-nft");
  };

  //Get All Seller Nfts
  const getnftsdetails = async () => {
    const res = await getSellerNfts(user.id, contract);
    console.log(res);
  };

  useEffect(() => {
    if (!localStorage.getItem("userAddress")) {
      navigate("/connectWallet");
      return;
    }

    //Set the current user in the State
    getAccount();

    //Get Seller NFTs
    getnftsdetails();
  }, [user]);

  return (
    <div
      className="h-screen bg-gray-300 flex bg-contain"
      style={{
        backgroundImage:
          "url('https://www.linkpicture.com/q/dashboard_BG.png')",
      }}
    >
      {/* Dashboard Control */}
      <div className=" w-2/12 h-screen px-6 py-9">
        <div className=" flex flex-col w-full h-full bg-gradient-to-b from-sexy-black-light to-sexy-black rounded-xl shadow-lg p-4 truncate">
          {/* Create New Warranty */}
          <button
            className=" mt-6 bg-gradient-to-b from-blue-600 to-blue-800 text-xs text-white px-3 py-2 rounded-md shadow-2xl"
            onClick={createNFT}
          >
            +Create New Warranty
          </button>

          {/* Warranty Selection Buttons */}
          <div className=" text-white uppercase text-xs  mt-10 mb-10 flex flex-col text-left">
            <div className="flex">
              <div className=" w-20 h-20 border-2 border-gray-600 px-2 py-2 m-1 text-xs text-center rounded-md border-dashed text-gray-500">
                <button>Pending</button>
              </div>
              <div className=" w-20 h-20 border-2 border-gray-600 px-2 py-2 m-1 text-xs text-center rounded-md border-dashed text-gray-500">
                <button>Expired</button>
              </div>
            </div>
            <div className=" w-20 h-20 border-2 border-gray-200 px-2 py-2 m-1 text-xs text-center rounded-md border-dashed bg-gray-400 text-gray-300">
              <button>Active</button>
            </div>
          </div>

          {/* Logout Button */}
          <button className="mt-auto mx-2 mb-3 text-gray-600">Logout</button>
        </div>
      </div>

      {/* Dashboard */}
      <div className="flex flex-col w-10/12 h-full p-6">
        <div className="w-full text-right text-lg font-semibold text-gray-600 px-4">
          Hey {user.id}
        </div>
        <div className=" text-2xl font-normal text-gray-600">Dashboard</div>
        <div className=" h-full my-3">
          <div className="flex flex-col h-full w-full bg-blue-200 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-100">
            {/* Headings */}
            <div className="flex w-full">
              <div className=" w-2/5 h-24 border-b-2 border-gray-100  pt-10 text-center">
                Customer
              </div>
              <div className=" w-1/5 h-24 pt-10 border-b-2 border-r-2 border-l-2 border-gray-100 text-center">
                Status
              </div>
              <div className=" w-2/5 h-24 pt-10 border-b-2 border-gray-100 text-center">
                Token id
              </div>
            </div>

            {/* Warranty Details*/}
            <div className="flex w-full">
              <div className=" w-2/5 h-24 border-b-2 border-gray-100  text-xs pt-10 text-center">
                0x21f7f174d21CA68a7a38e8291e4F21921FF6C049
              </div>
              <div className=" w-1/5 h-24 pt-10 border-b-2 border-r-2 border-l-2 border-gray-100 text-center text-blue-700">
                pending
              </div>
              <div className=" w-2/5 h-24 pt-10 border-b-2 border-gray-100 text-center">
                2344
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Web3 from "web3";
import { SetUser } from "../../../redux/userSlice";
import { contract } from "../../../web3_utils/contract";
import PendingWarrantiesDetailsWidget from "../Seller/components/PendingWarrantiesDetails";
import ActiveWarrantiesDetailsWidget from "../Seller/components/ActiveWarrantyStatusWidget";
import ExpiredWarrantiesDetailsWidget from "../Seller/components/ExpiredWarrantyStatusWidget";
import CustomerPendingWarrantiesDetailsWidget from "./components/CustomerPendingWarranties";
import { getCustomerNfts } from "../../../apiCalls/Customer/customerApiCall";

function CustomerDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducer);
  const [nfts, setNfts] = useState([]);
  const [nftStatus, setNftStatus] = useState("1");

  window.ethereum &&
    window.ethereum.on("accountsChanged", async (account) => {
      if (account.length === 0) {
        navigate("/connectWallet");
        localStorage.removeItem("userAddress");
        dispatch(SetUser(null));
      }
    });

  //Set the User State
  const getAccount = async () => {
    dispatch(SetUser(localStorage.getItem("userAddress")));
  };

  //Get All Seller Nfts
  const getnftsdetails = async () => {
    console.log(user.id);
    const nfts = await getCustomerNfts(user.id, contract);
    setNfts(nfts);
  };

  useEffect(() => {
    //Check if the User is Registered as a Seller
    if (!localStorage.getItem("userAddress")) {
      navigate("/connectWallet");
      return;
    }

    //Set the current user in the State
    getAccount();

    //Get the NFTs of the current User
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
          {/* Warranty Selection Buttons */}
          <div className=" text-white uppercase text-xs mt-5 mb-10 flex flex-col text-left">
            <div className="flex">
              <div className=" w-20 h-20 border-2 border-gray-600 px-2 py-2 m-1 text-xs text-center rounded-md border-dashed text-gray-500">
                <button
                  onClick={() => {
                    setNftStatus("2");
                  }}
                >
                  Pending
                </button>
              </div>
              <div className=" w-20 h-20 border-2 border-gray-600 px-2 py-2 m-1 text-xs text-center rounded-md border-dashed text-gray-500">
                <button
                  onClick={() => {
                    setNftStatus("3");
                  }}
                >
                  Expired
                </button>
              </div>
            </div>
            <div className=" w-20 h-20 border-2 border-gray-200 px-2 py-2 m-1 text-xs text-center rounded-md border-dashed bg-gray-400 text-gray-300">
              <button
                onClick={() => {
                  setNftStatus("1");
                }}
              >
                Active
              </button>
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
            {(nftStatus === "2" || nftStatus === "3") && (
              <div className="flex w-full">
                <div className=" w-2/5 h-24 border-b-2 border-gray-100  pt-10 text-center">
                  Customer
                </div>
                <div className=" w-1/5 h-24 pt-10 border-b-2 border-r-2 border-l-2 border-gray-100 text-center">
                  Status
                </div>
                <div className=" w-2/5 h-24 pt-10 border-b-2 border-r-2 border-gray-100 text-center">
                  Token id
                </div>
              </div>
            )}
            {nftStatus === "1" && (
              <div className="flex w-full">
                <div className=" w-2/5 h-24 border-b-2 border-gray-100  pt-10 text-center">
                  Customer
                </div>
                <div className=" w-1/5 h-24 pt-10 border-b-2 border-r-2 border-l-2 border-gray-100 text-center">
                  Status
                </div>
                <div className=" w-2/5 h-24 pt-10 border-b-2 border-r-2 border-gray-100 text-center">
                  Token id
                </div>
                <div className=" w-2/5 h-24 pt-10 border-b-2 border-gray-100 text-center">
                  Token id
                </div>
              </div>
            )}

            {/* Warranty Details*/}
            {nftStatus === "2" &&
              nfts &&
              nfts.map((warranty) => {
                return (
                  warranty.status === "2" && (
                    <CustomerPendingWarrantiesDetailsWidget
                      warranty={warranty}
                    />
                  )
                );
              })}

            {nftStatus === "1" &&
              nfts &&
              nfts.map(
                (warranty) =>
                  warranty.status === "1" && (
                    <ActiveWarrantiesDetailsWidget warranty={warranty} />
                  )
              )}

            {nftStatus === "3" &&
              nfts &&
              nfts.map(
                (warranty) =>
                  warranty.status === "3" && (
                    <ExpiredWarrantiesDetailsWidget warranty={warranty} />
                  )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;

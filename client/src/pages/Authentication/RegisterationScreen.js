import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import { abi } from "../../abi";
import { contract } from "../../web3_utils/contract";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducer);

  const registerSeller = async () => {
    const currentAddress = localStorage.getItem("userAddress");
    await contract.methods
      .registerSeller(currentAddress)
      .send({ from: currentAddress })
      .on("error", console.error);

    navigate("/");
  };

  //Check Registratin Status
  const checkRegistration = async (currentAccount) => {
    const regStatus = await contract.methods
      .isSellerRegistered(currentAccount)
      .call();

    if (regStatus === true) {
      navigate("/");
      return;
    }
  };

  useState(() => {
    const user = localStorage.getItem("userAddress");
    if (!localStorage.getItem("userAddress")) {
      navigate("/connectWallet");
      return;
    }

    checkRegistration(user);
  }, []);

  return (
    <div
      className="h-screen flex items-center bg-contain"
      style={{
        backgroundImage:
          "url('https://www.linkpicture.com/q/dashboard_BG.png')",
      }}
    >
      <div className="w-full h-2/3 my-auto justify-center flex">
        {/* Seller Registration */}
        <div className="w-3/12 h-full mx-2 py-6 bg-blue-200 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-100 flex flex-col items-center justify-between">
          <h1 className=" text-2xl text-blue-600">Seller</h1>
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-800 hover:bg-blue-700 text-white font-medium py-7 px-14 shadow-2xl my-2 text-base"
            onClick={registerSeller}
          >
            register as seller
          </button>
        </div>

        {/* Customer Registration */}
        <div className="w-3/12 h-full mx-2 py-6 bg-blue-200 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-100 flex flex-col items-center justify-between">
          <h1 className=" text-2xl text-blue-600">Customer</h1>
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-800 hover:bg-blue-700 text-white font-medium py-7 px-14 shadow-2xl my-2 text-base"
            onClick={() => {
              navigate("/customerDashboard");
            }}
          >
            continue as Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

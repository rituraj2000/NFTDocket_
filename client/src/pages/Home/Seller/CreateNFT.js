import { useState } from "react";
import client from "../../../web3_utils/ipfs";
import { createNft } from "../../../apiCalls/Seller/sellerApiCall";
import { useSelector } from "react-redux";
import { contract } from "../../../web3_utils/contract";
import { useNavigate } from "react-router-dom";

const CreateNFTScreen = () => {
  const [productImagePath, setProductImagePath] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const { user } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  //Manage the Order Details
  const [orderId, setOrderId] = useState("");
  const [customerAddr, setCustomerId] = useState("");
  const [productId, setProductId] = useState("");
  const [expiry, setExpiry] = useState(0);

  // Display the Photo
  const showPhoto = (e) => {
    setCoverImage(e.target.files[0]);
    const imagePath = URL.createObjectURL(e.target.files[0]);
    setProductImagePath(imagePath);
  };

  //Create NFT
  const uploadToIpfs = async (e) => {
    // Publish Image to Cloudinary
    const data = new FormData();
    data.append("file", coverImage);
    data.append("upload_preset", "nftdocket");
    data.append("cloud_name", "amznpersonal1");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/amznpersonal1/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const resJson = await res.json();
      const imageUrl = resJson.url;
      setCoverImage(imageUrl);
      alert("Image Uploaded to Cloudinary");

      // Upload To IPFS
      // const obj = {
      //   name: "NFT Warranty",
      //   desciption:
      //     "This is a NFT Warranty of Ownership of the followig product",
      //   image: res,
      //   attributes: [
      //     {
      //       display_type: "date",
      //       trait_type: "expiry",
      //       value: Math.floor(Date.now() / 1000) + expiry + 20,
      //     },
      //     {
      //       trait_type: "productId",
      //       value: productId,
      //     },
      //   ],
      // };
      // const result = await client.add(JSON.stringify(obj));
      // console.log(result);
      // const str = "ipfs://";
      // const finalresult = str.concat(result.path);
      // alert("NFT Added to IPFS");

      // Create a Token ID : Random number + Current time
      const max = 1000;
      const min = 100;
      const rand = Math.floor(Math.random() * (max - min + 1) + min);
      let time = Date.now();
      time = time % 1000;
      const tokenId = rand + time;

      const resCreateNft = await createNft(
        customerAddr,
        tokenId,
        productId,
        imageUrl,
        expiry,
        localStorage.getItem("userAddress"),
        contract
      );

      navigate("/");
    } catch (error) {
      console.log("err in upload to ipfs function " + error);
    }
  };

  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      {/* NFT Details Form */}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="customerId"
          >
            Customer Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="customerId"
            type="text"
            placeholder="Enter customer ID"
            onChange={(e) => {
              setCustomerId(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="customerId"
          >
            Product ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="customerId"
            type="text"
            placeholder="Enter customer ID"
            onChange={(e) => {
              setProductId(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="validity"
          >
            Validity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="validity"
            type="number"
            placeholder="Enter validity"
            onChange={(e) => {
              setExpiry(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={uploadToIpfs}
          >
            Create NFT
          </button>
        </div>
      </form>

      {/* Upload Image | Preview */}
      <div className=" w-1/3 h-2/3 bg-white shadow-2xl rounded-2xl px-8 pt-6 pb-8 m-4 flex flex-col">
        {/* Image Preview */}
        <div className="h-full w-full my-2 border-2 border-gray-400 flex items-center justify-center">
          <img src={productImagePath} className="w-2/3 h-auto max-h-60" />
        </div>

        <input
          type="file"
          placeholder="Upload Image"
          accept="image/*"
          onChange={showPhoto}
          className="m-2 py-2 px-3 border border-gray-300 rounded-xl shadow-sm"
        />
      </div>
    </div>
  );
};

export default CreateNFTScreen;

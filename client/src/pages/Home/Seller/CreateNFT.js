import { useState } from "react";

const CreateNFTScreen = () => {
  const [productImagePath, setProductImagePath] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  //Manage the Order Details
  const [orderId, setOrderId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [productId, setProductId] = useState("");
  const [expiry, setExpiry] = useState(0);

  // Display the Photo
  const showPhoto = (e) => {
    setCoverImage(e.target.files[0]);
    const imagePath = URL.createObjectURL(e.target.files[0]);
    console.log("imagePath");
    setProductImagePath(imagePath);
  };

  //Create NFT
  const uploadToIpfs = async (e) => {
    e.prevenDefault();
    const data = new FormData();
    data.append("file", coverImage);
    data.append("upload_preset", "nftDocket");
    data.append("cloud_name", "");
    const res = await fetch();
    const resJson = res.json();
    const imageUrl = resJson.url;
    setCoverImage(imageUrl);
    alert("Image Uploaded to Cloudinary");
  };

  //Handle Data
  const handleData = async (res) => {
    const obj = {
      name: "NFT Warranty",
      desciption: "This is a NFT Warranty of Ownership of the followig product",
      image: res,
      attributes: [
        {
          display_type: "date",
          trait_type: "expiry",
          value: Math.floor(Date.now() / 1000) + expiry + 20,
        },
        {
          trait_type: "productId",
          value: productId,
        },
      ],
    };
  };

  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      {/* NFT Details Form */}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="orderId"
          >
            Order ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="orderId"
            type="text"
            placeholder="Enter order ID"
            onChange={(e) => {
              setOrderId(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="customerId"
          >
            Customer ID
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
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Upload Image
        </button> */}
        <input
          type="file"
          placeholder="Upload Image"
          accept="image/*"
          onChange={showPhoto}
          className="m-2"
        />
      </div>
    </div>
  );
};

export default CreateNFTScreen;

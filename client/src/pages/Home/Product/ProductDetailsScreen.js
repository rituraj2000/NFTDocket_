const ProductDetailsScreen = () => {
  return (
    <div
      className="h-screen w-screen flex bg-contain"
      style={{
        backgroundImage:
          "url('https://www.linkpicture.com/q/dashboard_BG.png')",
      }}
    >
      {/* Product Details */}
      <div className=" w-1/3 h-full  px-6 py-8 flex">
        <div className="h-full w-full flex items-start bg-blue-300 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100">
          {/* Product name */}
          <div className=" w-1/6 bg-sexy-black h-full rounded-tl-3xl rounded-bl-3xl flex items-center justify-center text-white whitespace-nowrap">
            <h1 className=" transform -rotate-90 text-lg font-bold uppercase w-screen">
              Air Zoom Pegasus
            </h1>
          </div>

          <div className="flex flex-col px-5">
            {/* Product Image */}
            <div className=" w-full h-72 rounded-2xl pr-8">
              <img
                className=" transform scale-150 -rotate-45"
                src="https://www.linkpicture.com/q/png-transparent-nike-free-nike-air-max-sneakers-shoe-red-shoes_1.png"
              ></img>
            </div>

            {/* Product Details */}
            <div className="w-full h-1/6 ml-6 text-sexy-black text-sm pt-4">
              Token ID
            </div>
            <div className="w-full h-1/6 ml-6 font-bold text-sexy-black-light text-3xl">
              456
            </div>

            {/* Expiry */}
            <div className="w-full h-1/6 ml-6 text-sexy-black text-sm pt-4">
              Expiry Date
            </div>
            <div className="w-full h-1/6 ml-6 font-bold text-sexy-black-light text-2xl">
              45 Days to go
            </div>

            {/* Status */}
            <div className="w-full h-1/6 ml-6 text-sexy-black text-sm pt-4">
              Status
            </div>
            <div className="w-full h-1/6 ml-6 font-bold text-green-500 text-2xl">
              Active
            </div>
          </div>
        </div>
      </div>

      {/* Product Owners History */}
      <div className=" w-2/3 h-full px-6 py-8 flex">
        <div className="h-full w-full flex flex-col items-center bg-blue-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100">
          <h1 className=" my-6 text-gray-500  font-bold">Owner History</h1>
          {/* Heading */}
          <div className=" flex h-14 w-full">
            <div className="text-gray-700 text-center px-5 py-3 w-1/2 border-t-2 border-b-2 border-r-2 border-gray-100">
              Purchase Date
            </div>
            <div className="text-gray-700 text-center px-5 py-3 w-1/2 border-t-2 border-b-2 border-gray-100">
              Owner ID
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsScreen;

import { claim_And_MintNft } from "../../../../apiCalls/Customer/customerApiCall";
import { contract } from "../../../../web3_utils/contract";

const getStatus = (statusNumber) => {
  if (statusNumber === "0") {
    return "Verified";
  } else if (statusNumber === "1") {
    return "Active";
  } else if (statusNumber === "2") {
    return "Pending";
  } else {
    return "Expired";
  }
};

//Claim And Mint NFT
const handleClaimOnClick = async (tokenId, sender, contract) => {
  // console.log({ tokenId, sender, contract });
  const res = await claim_And_MintNft(tokenId, sender, contract);
};

const CustomerPendingWarrantiesDetailsWidget = ({ warranty }) => {
  return (
    <div className="flex w-full">
      <div className=" w-2/5 h-24 border-b-2 border-gray-100  text-xs pt-10 text-center">
        {warranty.buyers[warranty.buyers.length - 1]}
      </div>
      <div className=" w-1/5 h-24 pt-10 border-b-2 border-r-2 border-l-2 border-gray-100 text-center text-blue-700 justify-center items-center">
        {getStatus(warranty.status) === "Pending" && (
          <button
            className="py-1 px-2 shadow-md bg-white text-xs rounded-md"
            onClick={() => {
              handleClaimOnClick(
                warranty.tokenId,
                warranty.buyers[warranty.buyers.length - 1],
                contract
              );
            }}
          >
            Claim
          </button>
        )}
        {(getStatus(warranty.status) === "Active" ||
          getStatus(warranty.status) === "Expired") &&
          getStatus(warranty.status)}
      </div>
      <div className=" w-2/5 h-24 pt-10 border-b-2 border-gray-100 text-center text-sm">
        {warranty.tokenId}
      </div>
    </div>
  );
};

export default CustomerPendingWarrantiesDetailsWidget;

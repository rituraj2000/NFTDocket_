import { useNavigate } from "react-router-dom";

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

const ActiveWarrantiesDetailsWidget = ({ warranty }) => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full">
      <div className=" w-2/5 h-24 border-b-2 border-gray-100  text-xs pt-10 text-center">
        {warranty.buyers[warranty.buyers.length - 1]}
      </div>
      <div className=" w-1/5 h-24 pt-10 border-b-2 border-r-2 border-l-2 border-gray-100 text-center text-blue-700">
        {getStatus(warranty.status)}
      </div>
      <div className=" w-2/5 h-24 pt-10 border-b-2 border-r-2  border-gray-100 text-center text-sm">
        {warranty.tokenId}
      </div>
      <div className=" w-2/5 h-24 pt-10 border-b-2 border-gray-100 text-center text-sm">
        <button
          onClick={() => {
            console.log("Clicked");
            navigate(`/product-details/${warranty.tokenId}`);
          }}
          className="w-6 h-6 rounded-full shadow-lg bg-white"
        >
          !
        </button>
      </div>
    </div>
  );
};

export default ActiveWarrantiesDetailsWidget;

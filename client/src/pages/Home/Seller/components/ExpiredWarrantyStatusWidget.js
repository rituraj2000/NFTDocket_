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

const ExpiredWarrantiesDetailsWidget = ({ warranty }) => {
  return (
    <div className="flex w-full">
      <div className=" w-2/5 h-24 border-b-2 border-gray-100  text-xs pt-10 text-center">
        {warranty.buyers[warranty.buyers.length - 1]}
      </div>
      <div className=" w-1/5 h-24 pt-10 border-b-2 border-r-2 border-l-2 border-gray-100 text-center text-blue-700">
        {getStatus(warranty.status)}
      </div>
      <div className=" w-2/5 h-24 pt-10 border-b-2 border-gray-100 text-center text-sm">
        {warranty.tokenId}
        tokenId
      </div>
    </div>
  );
};

export default ExpiredWarrantiesDetailsWidget;
